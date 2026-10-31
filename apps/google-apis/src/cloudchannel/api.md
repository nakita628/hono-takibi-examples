<h1 id="cloud-channel-api">Cloud Channel API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Cloud Channel API enables Google Cloud partners to have a single unified resale platform and APIs across all of Google Cloud including GCP, Workspace, Maps and Chrome.

Base URLs:

* <a href="https://cloudchannel.googleapis.com/">https://cloudchannel.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/channel">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.order|Manage users on your domain|
|https://www.googleapis.com/auth/apps.reports.usage.readonly|View usage reports for your G Suite domain|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.order|Manage users on your domain|
|https://www.googleapis.com/auth/apps.reports.usage.readonly|View usage reports for your G Suite domain|

<h1 id="cloud-channel-api-accounts">accounts</h1>

## cloudchannel.accounts.listSubscribers

<a id="opIdcloudchannel.accounts.listSubscribers"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listSubscribers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{account}:listSubscribers`

Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.

<h3 id="cloudchannelaccountslistsubscribers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Required. Resource name of the account.|
|pageSize|query|integer|false|Optional. The maximum number of service accounts to return. The service may return fewer than this value. If unspecified, returns at most 100 service accounts. The maximum value is 1000; the server will coerce values above 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token.|
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
  "serviceAccounts": [
    "string"
  ],
  "topic": "string"
}
```

<h3 id="cloudchannelaccountslistsubscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListSubscribersResponse](#schemagooglecloudchannelv1listsubscribersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.register

<a id="opIdcloudchannel.accounts.register"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "serviceAccount": "string"
  }'
```

`POST /v1/{account}:register`

Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.

> Body parameter

```json
{
  "serviceAccount": "string"
}
```

<h3 id="cloudchannelaccountsregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Required. Resource name of the account.|
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
|body|body|[GoogleCloudChannelV1RegisterSubscriberRequest](#schemagooglecloudchannelv1registersubscriberrequest)|false|none|
|» serviceAccount|body|string|false|Required. Service account that provides subscriber access to the registered topic.|

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
  "topic": "string"
}
```

<h3 id="cloudchannelaccountsregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1RegisterSubscriberResponse](#schemagooglecloudchannelv1registersubscriberresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.unregister

<a id="opIdcloudchannel.accounts.unregister"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:unregister \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "serviceAccount": "string"
  }'
```

`POST /v1/{account}:unregister`

Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.

> Body parameter

```json
{
  "serviceAccount": "string"
}
```

<h3 id="cloudchannelaccountsunregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Required. Resource name of the account.|
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
|body|body|[GoogleCloudChannelV1UnregisterSubscriberRequest](#schemagooglecloudchannelv1unregistersubscriberrequest)|false|none|
|» serviceAccount|body|string|false|Required. Service account to unregister from subscriber access to the topic.|

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
  "topic": "string"
}
```

<h3 id="cloudchannelaccountsunregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1UnregisterSubscriberResponse](#schemagooglecloudchannelv1unregistersubscriberresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.listPurchasableOffers

<a id="opIdcloudchannel.accounts.customers.listPurchasableOffers"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listPurchasableOffers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}:listPurchasableOffers`

Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.

<h3 id="cloudchannelaccountscustomerslistpurchasableoffers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The resource name of the customer to list Offers for. Format: accounts/{account_id}/customers/{customer_id}.|
|changeOfferPurchase.entitlement|query|string|false|Required. Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
|changeOfferPurchase.newSku|query|string|false|Optional. Resource name of the new target SKU. Provide this SKU when upgrading or downgrading an entitlement. Format: products/{product_id}/skus/{sku_id}|
|createEntitlementPurchase.sku|query|string|false|Required. SKU that the result should be restricted to. Format: products/{product_id}/skus/{sku_id}.|
|languageCode|query|string|false|Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".|
|pageSize|query|integer|false|Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Offers. The maximum value is 1000; the server will coerce values above 1000.|
|pageToken|query|string|false|Optional. A token for a page of results other than the first page.|
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
  "purchasableOffers": [
    {
      "offer": {
        "constraints": {
          "customerConstraints": {
            "allowedCustomerTypes": [
              "CUSTOMER_TYPE_UNSPECIFIED"
            ],
            "allowedRegions": [
              "string"
            ],
            "promotionalOrderTypes": [
              "PROMOTIONAL_TYPE_UNSPECIFIED"
            ]
          }
        },
        "dealCode": "string",
        "endTime": "string",
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "parameterDefinitions": [
          {
            "allowedValues": [
              {
                "boolValue": true,
                "doubleValue": 0,
                "int64Value": "string",
                "protoValue": {
                  "property1": null,
                  "property2": null
                },
                "stringValue": "string"
              }
            ],
            "maxValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "minValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "name": "string",
            "optional": true,
            "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
          }
        ],
        "plan": {
          "billingAccount": "string",
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
          "trialPeriod": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          }
        },
        "priceByResources": [
          {
            "price": {
              "basePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "discount": 0,
              "effectivePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "externalPriceUri": "string"
            },
            "pricePhases": [
              {
                "firstPeriod": 0,
                "lastPeriod": 0,
                "periodType": "PERIOD_TYPE_UNSPECIFIED",
                "price": {
                  "basePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "discount": 0,
                  "effectivePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "externalPriceUri": "string"
                },
                "priceTiers": [
                  {
                    "firstResource": 0,
                    "lastResource": 0,
                    "price": {
                      "basePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "discount": 0,
                      "effectivePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "externalPriceUri": "string"
                    }
                  }
                ]
              }
            ],
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "sku": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string",
          "product": {
            "marketingInfo": {
              "defaultLogo": {
                "content": "string",
                "title": "string",
                "type": "MEDIA_TYPE_UNSPECIFIED"
              },
              "description": "string",
              "displayName": "string"
            },
            "name": "string"
          }
        },
        "startTime": "string"
      }
    }
  ]
}
```

<h3 id="cloudchannelaccountscustomerslistpurchasableoffers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListPurchasableOffersResponse](#schemagooglecloudchannelv1listpurchasableoffersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.listPurchasableSkus

<a id="opIdcloudchannel.accounts.customers.listPurchasableSkus"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listPurchasableSkus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}:listPurchasableSkus`

Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.

<h3 id="cloudchannelaccountscustomerslistpurchasableskus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The resource name of the customer to list SKUs for. Format: accounts/{account_id}/customers/{customer_id}.|
|changeOfferPurchase.changeType|query|string|false|Required. Change Type for the entitlement.|
|changeOfferPurchase.entitlement|query|string|false|Required. Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
|createEntitlementPurchase.product|query|string|false|Required. List SKUs belonging to this Product. Format: products/{product_id}. Supports products/- to retrieve SKUs for all products.|
|languageCode|query|string|false|Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".|
|pageSize|query|integer|false|Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.|
|pageToken|query|string|false|Optional. A token for a page of results other than the first page.|
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
|changeOfferPurchase.changeType|CHANGE_TYPE_UNSPECIFIED|
|changeOfferPurchase.changeType|UPGRADE|
|changeOfferPurchase.changeType|DOWNGRADE|
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
  "purchasableSkus": [
    {
      "sku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      }
    }
  ]
}
```

<h3 id="cloudchannelaccountscustomerslistpurchasableskus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListPurchasableSkusResponse](#schemagooglecloudchannelv1listpurchasableskusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.provisionCloudIdentity

<a id="opIdcloudchannel.accounts.customers.provisionCloudIdentity"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:provisionCloudIdentity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudIdentityInfo": {
      "alternateEmail": "string",
      "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
      "eduData": {
        "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
        "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
        "website": "string"
      },
      "languageCode": "string",
      "phoneNumber": "string"
    },
    "user": {
      "email": "string",
      "familyName": "string",
      "givenName": "string"
    },
    "validateOnly": true
  }'
```

`POST /v1/{customer}:provisionCloudIdentity`

Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.

> Body parameter

```json
{
  "cloudIdentityInfo": {
    "alternateEmail": "string",
    "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
    "eduData": {
      "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
      "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
      "website": "string"
    },
    "languageCode": "string",
    "phoneNumber": "string"
  },
  "user": {
    "email": "string",
    "familyName": "string",
    "givenName": "string"
  },
  "validateOnly": true
}
```

<h3 id="cloudchannelaccountscustomersprovisioncloudidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}|
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
|body|body|[GoogleCloudChannelV1ProvisionCloudIdentityRequest](#schemagooglecloudchannelv1provisioncloudidentityrequest)|false|none|
|» cloudIdentityInfo|body|[GoogleCloudChannelV1CloudIdentityInfo](#schemagooglecloudchannelv1cloudidentityinfo)|false|CloudIdentity-specific customer information.|
|» user|body|[GoogleCloudChannelV1AdminUser](#schemagooglecloudchannelv1adminuser)|false|Admin user information.|
|» validateOnly|body|boolean|false|Validate the request and preview the review, but do not post it.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersprovisioncloudidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.lookupOffer

<a id="opIdcloudchannel.accounts.customers.entitlements.lookupOffer"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:lookupOffer \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{entitlement}:lookupOffer`

Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.

<h3 id="cloudchannelaccountscustomersentitlementslookupoffer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entitlement|path|string|true|Required. The resource name of the entitlement to retrieve the Offer. Entitlement uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
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
  "constraints": {
    "customerConstraints": {
      "allowedCustomerTypes": [
        "CUSTOMER_TYPE_UNSPECIFIED"
      ],
      "allowedRegions": [
        "string"
      ],
      "promotionalOrderTypes": [
        "PROMOTIONAL_TYPE_UNSPECIFIED"
      ]
    }
  },
  "dealCode": "string",
  "endTime": "string",
  "marketingInfo": {
    "defaultLogo": {
      "content": "string",
      "title": "string",
      "type": "MEDIA_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string"
  },
  "name": "string",
  "parameterDefinitions": [
    {
      "allowedValues": [
        {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        }
      ],
      "maxValue": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      },
      "minValue": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      },
      "name": "string",
      "optional": true,
      "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
    }
  ],
  "plan": {
    "billingAccount": "string",
    "paymentCycle": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    },
    "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
    "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
    "trialPeriod": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    }
  },
  "priceByResources": [
    {
      "price": {
        "basePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "discount": 0,
        "effectivePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "externalPriceUri": "string"
      },
      "pricePhases": [
        {
          "firstPeriod": 0,
          "lastPeriod": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED",
          "price": {
            "basePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "discount": 0,
            "effectivePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "externalPriceUri": "string"
          },
          "priceTiers": [
            {
              "firstResource": 0,
              "lastResource": 0,
              "price": {
                "basePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "discount": 0,
                "effectivePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "externalPriceUri": "string"
              }
            }
          ]
        }
      ],
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "sku": {
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string",
    "product": {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string"
    }
  },
  "startTime": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementslookupoffer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1Offer](#schemagooglecloudchannelv1offer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.customerRepricingConfigs.patch

<a id="opIdcloudchannel.accounts.customers.customerRepricingConfigs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "repricingConfig": {
      "adjustment": {
        "percentageAdjustment": {
          "percentage": {
            "value": "string"
          }
        }
      },
      "channelPartnerGranularity": {},
      "conditionalOverrides": [
        {
          "adjustment": {
            "percentageAdjustment": {
              "percentage": {
                "value": "string"
              }
            }
          },
          "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
          "repricingCondition": {
            "skuGroupCondition": {
              "skuGroup": "string"
            }
          }
        }
      ],
      "effectiveInvoiceMonth": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "entitlementGranularity": {
        "entitlement": "string"
      },
      "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
    }
  }'
```

`PATCH /v1/{name}`

Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

> Body parameter

```json
{
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  }
}
```

<h3 id="cloudchannelaccountscustomerscustomerrepricingconfigspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}.|
|updateMask|query|string|false|The update mask that applies to the resource. Optional.|
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
|body|body|[GoogleCloudChannelV1CustomerRepricingConfig](#schemagooglecloudchannelv1customerrepricingconfig)|false|none|
|» repricingConfig|body|[GoogleCloudChannelV1RepricingConfig](#schemagooglecloudchannelv1repricingconfig)|false|Required. The configuration for bill modifications made by a reseller before sending it to customers.|

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
  "name": "string",
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  },
  "updateTime": "string"
}
```

<h3 id="cloudchannelaccountscustomerscustomerrepricingconfigspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1CustomerRepricingConfig](#schemagooglecloudchannelv1customerrepricingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.activate

<a id="opIdcloudchannel.accounts.customers.entitlements.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string"
  }'
```

`POST /v1/{name}:activate`

Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementsactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the entitlement to activate. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
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
|body|body|[GoogleCloudChannelV1ActivateEntitlementRequest](#schemagooglecloudchannelv1activateentitlementrequest)|false|none|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersentitlementsactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.changeOffer

<a id="opIdcloudchannel.accounts.customers.entitlements.changeOffer"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:changeOffer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offer": "string",
    "parameters": [
      {
        "name": "string",
        "value": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        }
      }
    ],
    "purchaseOrderId": "string",
    "requestId": "string"
  }'
```

`POST /v1/{name}:changeOffer`

Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "offer": "string",
  "parameters": [
    {
      "name": "string",
      "value": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      }
    }
  ],
  "purchaseOrderId": "string",
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementschangeoffer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
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
|body|body|[GoogleCloudChannelV1ChangeOfferRequest](#schemagooglecloudchannelv1changeofferrequest)|false|none|
|» offer|body|string|false|Required. New Offer. Format: accounts/{account_id}/offers/{offer_id}.|
|» parameters|body|[[GoogleCloudChannelV1Parameter](#schemagooglecloudchannelv1parameter)]|false|Optional. Parameters needed to purchase the Offer. To view the available Parameters refer to the Offer.parameter_definitions from the desired offer.|
|» purchaseOrderId|body|string|false|Optional. Purchase order id provided by the reseller.|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersentitlementschangeoffer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.changeParameters

<a id="opIdcloudchannel.accounts.customers.entitlements.changeParameters"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:changeParameters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "parameters": [
      {
        "name": "string",
        "value": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        }
      }
    ],
    "purchaseOrderId": "string",
    "requestId": "string"
  }'
```

`POST /v1/{name}:changeParameters`

Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "parameters": [
    {
      "name": "string",
      "value": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      }
    }
  ],
  "purchaseOrderId": "string",
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementschangeparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
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
|body|body|[GoogleCloudChannelV1ChangeParametersRequest](#schemagooglecloudchannelv1changeparametersrequest)|false|none|
|» parameters|body|[[GoogleCloudChannelV1Parameter](#schemagooglecloudchannelv1parameter)]|false|Required. Entitlement parameters to update. You can only change editable parameters. To view the available Parameters for a request, refer to the Offer.parameter_definitions from the desired offer.|
|» purchaseOrderId|body|string|false|Optional. Purchase order ID provided by the reseller.|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersentitlementschangeparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.changeRenewalSettings

<a id="opIdcloudchannel.accounts.customers.entitlements.changeRenewalSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:changeRenewalSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "renewalSettings": {
      "enableRenewal": true,
      "paymentCycle": {
        "duration": 0,
        "periodType": "PERIOD_TYPE_UNSPECIFIED"
      },
      "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
      "resizeUnitCount": true
    },
    "requestId": "string"
  }'
```

`POST /v1/{name}:changeRenewalSettings`

Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "renewalSettings": {
    "enableRenewal": true,
    "paymentCycle": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    },
    "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
    "resizeUnitCount": true
  },
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementschangerenewalsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
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
|body|body|[GoogleCloudChannelV1ChangeRenewalSettingsRequest](#schemagooglecloudchannelv1changerenewalsettingsrequest)|false|none|
|» renewalSettings|body|[GoogleCloudChannelV1RenewalSettings](#schemagooglecloudchannelv1renewalsettings)|false|Required. New renewal settings.|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersentitlementschangerenewalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.reports.run

<a id="opIdcloudchannel.accounts.reports.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "filter": "string",
    "languageCode": "string"
  }'
```

`POST /v1/{name}:run`

Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.

> Body parameter

```json
{
  "dateRange": {
    "invoiceEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "invoiceStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "usageEndDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "usageStartDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    }
  },
  "filter": "string",
  "languageCode": "string"
}
```

<h3 id="cloudchannelaccountsreportsrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}|
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
|body|body|[GoogleCloudChannelV1RunReportJobRequest](#schemagooglecloudchannelv1runreportjobrequest)|false|none|
|» dateRange|body|[GoogleCloudChannelV1DateRange](#schemagooglecloudchannelv1daterange)|false|Optional. The range of usage or invoice dates to include in the result.|
|» filter|body|string|false|Optional. A structured string that defines conditions on dimension columns to restrict the report output. Filters support logical operators (AND, OR, NOT) and conditional operators (=, !=, <, >, <=, and >=) using `column_id` as keys. For example: `(customer:"accounts/C123abc/customers/S456def" OR customer:"accounts/C123abc/customers/S789ghi") AND invoice_start_date.year >= 2022`|
|» languageCode|body|string|false|Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US".|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountsreportsrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.reports.usage.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.reports.usage.readonly )
</aside>

## cloudchannel.accounts.customers.entitlements.startPaidService

<a id="opIdcloudchannel.accounts.customers.entitlements.startPaidService"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:startPaidService \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string"
  }'
```

`POST /v1/{name}:startPaidService`

Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementsstartpaidservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the entitlement to start a paid service for. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
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
|body|body|[GoogleCloudChannelV1StartPaidServiceRequest](#schemagooglecloudchannelv1startpaidservicerequest)|false|none|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersentitlementsstartpaidservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.suspend

<a id="opIdcloudchannel.accounts.customers.entitlements.suspend"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:suspend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string"
  }'
```

`POST /v1/{name}:suspend`

Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementssuspend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the entitlement to suspend. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
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
|body|body|[GoogleCloudChannelV1SuspendEntitlementRequest](#schemagooglecloudchannelv1suspendentitlementrequest)|false|none|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersentitlementssuspend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.channelPartnerLinks.list

<a id="opIdcloudchannel.accounts.channelPartnerLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/channelPartnerLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/channelPartnerLinks`

List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.

<h3 id="cloudchannelaccountschannelpartnerlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller account for listing channel partner links. Parent uses the format: accounts/{account_id}|
|pageSize|query|integer|false|Optional. Requested page size. Server might return fewer results than requested. If unspecified, server will pick a default size (25). The maximum value is 200; the server will coerce values above 200.|
|pageToken|query|string|false|Optional. A token for a page of results other than the first page. Obtained using ListChannelPartnerLinksResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerLinks call.|
|view|query|string|false|Optional. The level of granularity the ChannelPartnerLink will display.|
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
|view|UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "channelPartnerLinks": [
    {
      "channelPartnerCloudIdentityInfo": {
        "adminConsoleUri": "string",
        "alternateEmail": "string",
        "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
        "eduData": {
          "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
          "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
          "website": "string"
        },
        "isDomainVerified": true,
        "languageCode": "string",
        "phoneNumber": "string",
        "primaryDomain": "string"
      },
      "createTime": "string",
      "inviteLinkUri": "string",
      "linkState": "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
      "name": "string",
      "publicId": "string",
      "resellerCloudIdentityId": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudchannelaccountschannelpartnerlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListChannelPartnerLinksResponse](#schemagooglecloudchannelv1listchannelpartnerlinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.channelPartnerLinks.create

<a id="opIdcloudchannel.accounts.channelPartnerLinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/channelPartnerLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "linkState": "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
    "resellerCloudIdentityId": "string"
  }'
```

`POST /v1/{parent}/channelPartnerLinks`

Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.

> Body parameter

```json
{
  "linkState": "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
  "resellerCloudIdentityId": "string"
}
```

<h3 id="cloudchannelaccountschannelpartnerlinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Create a channel partner link for the provided reseller account's resource name. Parent uses the format: accounts/{account_id}|
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
|body|body|[GoogleCloudChannelV1ChannelPartnerLink](#schemagooglecloudchannelv1channelpartnerlink)|false|none|
|» linkState|body|string|false|Required. State of the channel partner link.|
|» resellerCloudIdentityId|body|string|false|Required. Cloud Identity ID of the linked reseller.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» linkState|CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED|
|» linkState|INVITED|
|» linkState|ACTIVE|
|» linkState|REVOKED|
|» linkState|SUSPENDED|

> Example responses

> 200 Response

```json
{
  "channelPartnerCloudIdentityInfo": {
    "adminConsoleUri": "string",
    "alternateEmail": "string",
    "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
    "eduData": {
      "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
      "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
      "website": "string"
    },
    "isDomainVerified": true,
    "languageCode": "string",
    "phoneNumber": "string",
    "primaryDomain": "string"
  },
  "createTime": "string",
  "inviteLinkUri": "string",
  "linkState": "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
  "name": "string",
  "publicId": "string",
  "resellerCloudIdentityId": "string",
  "updateTime": "string"
}
```

<h3 id="cloudchannelaccountschannelpartnerlinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ChannelPartnerLink](#schemagooglecloudchannelv1channelpartnerlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.list

<a id="opIdcloudchannel.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/channelPartnerRepricingConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/channelPartnerRepricingConfigs`

Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.

<h3 id="cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the account's ChannelPartnerLink. Parent uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}. Supports accounts/{account_id}/channelPartnerLinks/- to retrieve configs for all channel partners.|
|filter|query|string|false|Optional. A filter for [CloudChannelService.ListChannelPartnerRepricingConfigs] results (channel_partner_link only). You can use this filter when you support a BatchGet-like query. To use the filter, you must set `parent=accounts/{account_id}/channelPartnerLinks/-`. Example: `channel_partner_link = accounts/account_id/channelPartnerLinks/c1` OR `channel_partner_link = accounts/account_id/channelPartnerLinks/c2`.|
|pageSize|query|integer|false|Optional. The maximum number of repricing configs to return. The service may return fewer than this value. If unspecified, returns a maximum of 50 rules. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results beyond the first page. Obtained through ListChannelPartnerRepricingConfigsResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerRepricingConfigs call.|
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
  "channelPartnerRepricingConfigs": [
    {
      "name": "string",
      "repricingConfig": {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "channelPartnerGranularity": {},
        "conditionalOverrides": [
          {
            "adjustment": {
              "percentageAdjustment": {
                "percentage": {
                  "value": "string"
                }
              }
            },
            "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
            "repricingCondition": {
              "skuGroupCondition": {
                "skuGroup": "string"
              }
            }
          }
        ],
        "effectiveInvoiceMonth": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "entitlementGranularity": {
          "entitlement": "string"
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse](#schemagooglecloudchannelv1listchannelpartnerrepricingconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.create

<a id="opIdcloudchannel.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/channelPartnerRepricingConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "repricingConfig": {
      "adjustment": {
        "percentageAdjustment": {
          "percentage": {
            "value": "string"
          }
        }
      },
      "channelPartnerGranularity": {},
      "conditionalOverrides": [
        {
          "adjustment": {
            "percentageAdjustment": {
              "percentage": {
                "value": "string"
              }
            }
          },
          "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
          "repricingCondition": {
            "skuGroupCondition": {
              "skuGroup": "string"
            }
          }
        }
      ],
      "effectiveInvoiceMonth": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "entitlementGranularity": {
        "entitlement": "string"
      },
      "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/channelPartnerRepricingConfigs`

Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.

> Body parameter

```json
{
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  }
}
```

<h3 id="cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}|
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
|body|body|[GoogleCloudChannelV1ChannelPartnerRepricingConfig](#schemagooglecloudchannelv1channelpartnerrepricingconfig)|false|none|
|» repricingConfig|body|[GoogleCloudChannelV1RepricingConfig](#schemagooglecloudchannelv1repricingconfig)|false|Required. The configuration for bill modifications made by a reseller before sending it to ChannelPartner.|

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
  "name": "string",
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  },
  "updateTime": "string"
}
```

<h3 id="cloudchannelaccountschannelpartnerlinkschannelpartnerrepricingconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ChannelPartnerRepricingConfig](#schemagooglecloudchannelv1channelpartnerrepricingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.customerRepricingConfigs.list

<a id="opIdcloudchannel.accounts.customers.customerRepricingConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/customerRepricingConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/customerRepricingConfigs`

Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.

<h3 id="cloudchannelaccountscustomerscustomerrepricingconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the customer. Parent uses the format: accounts/{account_id}/customers/{customer_id}. Supports accounts/{account_id}/customers/- to retrieve configs for all customers.|
|filter|query|string|false|Optional. A filter for [CloudChannelService.ListCustomerRepricingConfigs] results (customer only). You can use this filter when you support a BatchGet-like query. To use the filter, you must set `parent=accounts/{account_id}/customers/-`. Example: customer = accounts/account_id/customers/c1 OR customer = accounts/account_id/customers/c2.|
|pageSize|query|integer|false|Optional. The maximum number of repricing configs to return. The service may return fewer than this value. If unspecified, returns a maximum of 50 rules. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results beyond the first page. Obtained through ListCustomerRepricingConfigsResponse.next_page_token of the previous CloudChannelService.ListCustomerRepricingConfigs call.|
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
  "customerRepricingConfigs": [
    {
      "name": "string",
      "repricingConfig": {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "channelPartnerGranularity": {},
        "conditionalOverrides": [
          {
            "adjustment": {
              "percentageAdjustment": {
                "percentage": {
                  "value": "string"
                }
              }
            },
            "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
            "repricingCondition": {
              "skuGroupCondition": {
                "skuGroup": "string"
              }
            }
          }
        ],
        "effectiveInvoiceMonth": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "entitlementGranularity": {
          "entitlement": "string"
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudchannelaccountscustomerscustomerrepricingconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListCustomerRepricingConfigsResponse](#schemagooglecloudchannelv1listcustomerrepricingconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.customerRepricingConfigs.create

<a id="opIdcloudchannel.accounts.customers.customerRepricingConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/customerRepricingConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "repricingConfig": {
      "adjustment": {
        "percentageAdjustment": {
          "percentage": {
            "value": "string"
          }
        }
      },
      "channelPartnerGranularity": {},
      "conditionalOverrides": [
        {
          "adjustment": {
            "percentageAdjustment": {
              "percentage": {
                "value": "string"
              }
            }
          },
          "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
          "repricingCondition": {
            "skuGroupCondition": {
              "skuGroup": "string"
            }
          }
        }
      ],
      "effectiveInvoiceMonth": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "entitlementGranularity": {
        "entitlement": "string"
      },
      "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/customerRepricingConfigs`

Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.

> Body parameter

```json
{
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  }
}
```

<h3 id="cloudchannelaccountscustomerscustomerrepricingconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account_id}/customers/{customer_id}|
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
|body|body|[GoogleCloudChannelV1CustomerRepricingConfig](#schemagooglecloudchannelv1customerrepricingconfig)|false|none|
|» repricingConfig|body|[GoogleCloudChannelV1RepricingConfig](#schemagooglecloudchannelv1repricingconfig)|false|Required. The configuration for bill modifications made by a reseller before sending it to customers.|

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
  "name": "string",
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  },
  "updateTime": "string"
}
```

<h3 id="cloudchannelaccountscustomerscustomerrepricingconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1CustomerRepricingConfig](#schemagooglecloudchannelv1customerrepricingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.list

<a id="opIdcloudchannel.accounts.customers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/customers`

List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.

<h3 id="cloudchannelaccountscustomerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller account to list customers from. Parent uses the format: accounts/{account_id}.|
|filter|query|string|false|Optional. Filters applied to the [CloudChannelService.ListCustomers] results. See https://cloud.google.com/channel/docs/concepts/google-cloud/filter-customers for more information.|
|pageSize|query|integer|false|Optional. The maximum number of customers to return. The service may return fewer than this value. If unspecified, returns at most 10 customers. The maximum value is 50.|
|pageToken|query|string|false|Optional. A token identifying a page of results other than the first page. Obtained through ListCustomersResponse.next_page_token of the previous CloudChannelService.ListCustomers call.|
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
  "customers": [
    {
      "alternateEmail": "string",
      "channelPartnerId": "string",
      "cloudIdentityId": "string",
      "cloudIdentityInfo": {
        "adminConsoleUri": "string",
        "alternateEmail": "string",
        "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
        "eduData": {
          "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
          "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
          "website": "string"
        },
        "isDomainVerified": true,
        "languageCode": "string",
        "phoneNumber": "string",
        "primaryDomain": "string"
      },
      "correlationId": "string",
      "createTime": "string",
      "domain": "string",
      "languageCode": "string",
      "name": "string",
      "orgDisplayName": "string",
      "orgPostalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "primaryContactInfo": {
        "displayName": "string",
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "phone": "string",
        "title": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudchannelaccountscustomerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListCustomersResponse](#schemagooglecloudchannelv1listcustomersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.create

<a id="opIdcloudchannel.accounts.customers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateEmail": "string",
    "channelPartnerId": "string",
    "correlationId": "string",
    "domain": "string",
    "languageCode": "string",
    "orgDisplayName": "string",
    "orgPostalAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "primaryContactInfo": {
      "email": "string",
      "firstName": "string",
      "lastName": "string",
      "phone": "string",
      "title": "string"
    }
  }'
```

`POST /v1/{parent}/customers`

Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.

> Body parameter

```json
{
  "alternateEmail": "string",
  "channelPartnerId": "string",
  "correlationId": "string",
  "domain": "string",
  "languageCode": "string",
  "orgDisplayName": "string",
  "orgPostalAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "primaryContactInfo": {
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "title": "string"
  }
}
```

<h3 id="cloudchannelaccountscustomerscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of reseller account in which to create the customer. Parent uses the format: accounts/{account_id}|
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
|body|body|[GoogleCloudChannelV1Customer](#schemagooglecloudchannelv1customer)|false|none|
|» alternateEmail|body|string|false|Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers.|
|» channelPartnerId|body|string|false|Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer.|
|» correlationId|body|string|false|Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer.|
|» domain|body|string|false|Required. The customer's primary domain. Must match the primary contact email's domain.|
|» languageCode|body|string|false|Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|» orgDisplayName|body|string|false|Required. Name of the organization that the customer entity represents.|
|» orgPostalAddress|body|[GoogleTypePostalAddress](#schemagoogletypepostaladdress)|false|Required. The organization address for the customer. To enforce US laws and embargoes, we require a region and zip code. You must provide valid addresses for every customer. To set the customer's language, use the Customer-level language code.|
|» primaryContactInfo|body|[GoogleCloudChannelV1ContactInfo](#schemagooglecloudchannelv1contactinfo)|false|Primary contact info.|

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
  "alternateEmail": "string",
  "channelPartnerId": "string",
  "cloudIdentityId": "string",
  "cloudIdentityInfo": {
    "adminConsoleUri": "string",
    "alternateEmail": "string",
    "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
    "eduData": {
      "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
      "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
      "website": "string"
    },
    "isDomainVerified": true,
    "languageCode": "string",
    "phoneNumber": "string",
    "primaryDomain": "string"
  },
  "correlationId": "string",
  "createTime": "string",
  "domain": "string",
  "languageCode": "string",
  "name": "string",
  "orgDisplayName": "string",
  "orgPostalAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "primaryContactInfo": {
    "displayName": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "title": "string"
  },
  "updateTime": "string"
}
```

<h3 id="cloudchannelaccountscustomerscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1Customer](#schemagooglecloudchannelv1customer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.import

<a id="opIdcloudchannel.accounts.customers.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/customers:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authToken": "string",
    "channelPartnerId": "string",
    "cloudIdentityId": "string",
    "customer": "string",
    "domain": "string",
    "overwriteIfExists": true
  }'
```

`POST /v1/{parent}/customers:import`

Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.

> Body parameter

```json
{
  "authToken": "string",
  "channelPartnerId": "string",
  "cloudIdentityId": "string",
  "customer": "string",
  "domain": "string",
  "overwriteIfExists": true
}
```

<h3 id="cloudchannelaccountscustomersimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller's account. Parent takes the format: accounts/{account_id} or accounts/{account_id}/channelPartnerLinks/{channel_partner_id}|
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
|body|body|[GoogleCloudChannelV1ImportCustomerRequest](#schemagooglecloudchannelv1importcustomerrequest)|false|none|
|» authToken|body|string|false|Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.|
|» channelPartnerId|body|string|false|Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well.|
|» cloudIdentityId|body|string|false|Required. Customer's Cloud Identity ID|
|» customer|body|string|false|Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id}/customers/{customer_id}|
|» domain|body|string|false|Required. Customer domain.|
|» overwriteIfExists|body|boolean|false|Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain.|

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
  "alternateEmail": "string",
  "channelPartnerId": "string",
  "cloudIdentityId": "string",
  "cloudIdentityInfo": {
    "adminConsoleUri": "string",
    "alternateEmail": "string",
    "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
    "eduData": {
      "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
      "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
      "website": "string"
    },
    "isDomainVerified": true,
    "languageCode": "string",
    "phoneNumber": "string",
    "primaryDomain": "string"
  },
  "correlationId": "string",
  "createTime": "string",
  "domain": "string",
  "languageCode": "string",
  "name": "string",
  "orgDisplayName": "string",
  "orgPostalAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "primaryContactInfo": {
    "displayName": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "title": "string"
  },
  "updateTime": "string"
}
```

<h3 id="cloudchannelaccountscustomersimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1Customer](#schemagooglecloudchannelv1customer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.list

<a id="opIdcloudchannel.accounts.customers.entitlements.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/entitlements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/entitlements`

Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.

<h3 id="cloudchannelaccountscustomersentitlementslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller's customer account to list entitlements for. Parent uses the format: accounts/{account_id}/customers/{customer_id}|
|pageSize|query|integer|false|Optional. Requested page size. Server might return fewer results than requested. If unspecified, return at most 50 entitlements. The maximum value is 100; the server will coerce values above 100.|
|pageToken|query|string|false|Optional. A token for a page of results other than the first page. Obtained using ListEntitlementsResponse.next_page_token of the previous CloudChannelService.ListEntitlements call.|
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
  "entitlements": [
    {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "endTime": "string",
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        },
        "startTime": "string"
      },
      "createTime": "string",
      "name": "string",
      "offer": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
      "purchaseOrderId": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "trialSettings": {
        "endTime": "string",
        "trial": true
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListEntitlementsResponse](#schemagooglecloudchannelv1listentitlementsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.create

<a id="opIdcloudchannel.accounts.customers.entitlements.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/entitlements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entitlement": {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        }
      },
      "offer": "string",
      "parameters": [
        {
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "purchaseOrderId": "string"
    },
    "requestId": "string"
  }'
```

`POST /v1/{parent}/entitlements`

Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "entitlement": {
    "associationInfo": {
      "baseEntitlement": "string"
    },
    "commitmentSettings": {
      "renewalSettings": {
        "enableRenewal": true,
        "paymentCycle": {
          "duration": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED"
        },
        "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
        "resizeUnitCount": true
      }
    },
    "offer": "string",
    "parameters": [
      {
        "name": "string",
        "value": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        }
      }
    ],
    "purchaseOrderId": "string"
  },
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller's customer account in which to create the entitlement. Parent uses the format: accounts/{account_id}/customers/{customer_id}|
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
|body|body|[GoogleCloudChannelV1CreateEntitlementRequest](#schemagooglecloudchannelv1createentitlementrequest)|false|none|
|» entitlement|body|[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)|false|Required. The entitlement to create.|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomersentitlementscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.offers.list

<a id="opIdcloudchannel.accounts.offers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/offers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/offers`

Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

<h3 id="cloudchannelaccountsofferslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller account from which to list Offers. Parent uses the format: accounts/{account_id}.|
|filter|query|string|false|Optional. The expression to filter results by name (name of the Offer), sku.name (name of the SKU), or sku.product.name (name of the Product). Example 1: sku.product.name=products/p1 AND sku.name!=products/p1/skus/s1 Example 2: name=accounts/a1/offers/o1|
|languageCode|query|string|false|Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".|
|pageSize|query|integer|false|Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 500 Offers. The maximum value is 1000; the server will coerce values above 1000.|
|pageToken|query|string|false|Optional. A token for a page of results other than the first page.|
|showFutureOffers|query|boolean|false|Optional. A boolean flag that determines if a response returns future offers 30 days from now. If the show_future_offers is true, the response will only contain offers that are scheduled to be available 30 days from now.|
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
  "offers": [
    {
      "constraints": {
        "customerConstraints": {
          "allowedCustomerTypes": [
            "CUSTOMER_TYPE_UNSPECIFIED"
          ],
          "allowedRegions": [
            "string"
          ],
          "promotionalOrderTypes": [
            "PROMOTIONAL_TYPE_UNSPECIFIED"
          ]
        }
      },
      "dealCode": "string",
      "endTime": "string",
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string",
      "parameterDefinitions": [
        {
          "allowedValues": [
            {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            }
          ],
          "maxValue": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          },
          "minValue": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          },
          "name": "string",
          "optional": true,
          "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
        }
      ],
      "plan": {
        "billingAccount": "string",
        "paymentCycle": {
          "duration": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED"
        },
        "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
        "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
        "trialPeriod": {
          "duration": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED"
        }
      },
      "priceByResources": [
        {
          "price": {
            "basePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "discount": 0,
            "effectivePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "externalPriceUri": "string"
          },
          "pricePhases": [
            {
              "firstPeriod": 0,
              "lastPeriod": 0,
              "periodType": "PERIOD_TYPE_UNSPECIFIED",
              "price": {
                "basePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "discount": 0,
                "effectivePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "externalPriceUri": "string"
              },
              "priceTiers": [
                {
                  "firstResource": 0,
                  "lastResource": 0,
                  "price": {
                    "basePrice": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "discount": 0,
                    "effectivePrice": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "externalPriceUri": "string"
                  }
                }
              ]
            }
          ],
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
        }
      ],
      "sku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      },
      "startTime": "string"
    }
  ]
}
```

<h3 id="cloudchannelaccountsofferslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListOffersResponse](#schemagooglecloudchannelv1listoffersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.reports.list

<a id="opIdcloudchannel.accounts.reports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/reports`

Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.

<h3 id="cloudchannelaccountsreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the partner account to list available reports for. Parent uses the format: accounts/{account_id}|
|languageCode|query|string|false|Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US".|
|pageSize|query|integer|false|Optional. Requested page size of the report. The server might return fewer results than requested. If unspecified, returns 20 reports. The maximum value is 100.|
|pageToken|query|string|false|Optional. A token that specifies a page of results beyond the first page. Obtained through ListReportsResponse.next_page_token of the previous CloudChannelReportsService.ListReports call.|
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
  "reports": [
    {
      "columns": [
        {
          "columnId": "string",
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "displayName": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="cloudchannelaccountsreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListReportsResponse](#schemagooglecloudchannelv1listreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.reports.usage.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.reports.usage.readonly )
</aside>

## cloudchannel.accounts.checkCloudIdentityAccountsExist

<a id="opIdcloudchannel.accounts.checkCloudIdentityAccountsExist"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:checkCloudIdentityAccountsExist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domain": "string"
  }'
```

`POST /v1/{parent}:checkCloudIdentityAccountsExist`

Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.

> Body parameter

```json
{
  "domain": "string"
}
```

<h3 id="cloudchannelaccountscheckcloudidentityaccountsexist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The reseller account's resource name. Parent uses the format: accounts/{account_id}|
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
|body|body|[GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest](#schemagooglecloudchannelv1checkcloudidentityaccountsexistrequest)|false|none|
|» domain|body|string|false|Required. Domain to fetch for Cloud Identity account customer.|

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
  "cloudIdentityAccounts": [
    {
      "customerCloudIdentityId": "string",
      "customerName": "string",
      "existing": true,
      "owned": true
    }
  ]
}
```

<h3 id="cloudchannelaccountscheckcloudidentityaccountsexist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse](#schemagooglecloudchannelv1checkcloudidentityaccountsexistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.entitlements.listEntitlementChanges

<a id="opIdcloudchannel.accounts.customers.entitlements.listEntitlementChanges"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listEntitlementChanges \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}:listEntitlementChanges`

List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.

<h3 id="cloudchannelaccountscustomersentitlementslistentitlementchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the entitlement for which to list entitlement changes. The `-` wildcard may be used to match entitlements across a customer. Formats: * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} * accounts/{account_id}/customers/{customer_id}/entitlements/-|
|filter|query|string|false|Optional. Filters applied to the list results.|
|pageSize|query|integer|false|Optional. The maximum number of entitlement changes to return. The service may return fewer than this value. If unspecified, returns at most 10 entitlement changes. The maximum value is 50; the server will coerce values above 50.|
|pageToken|query|string|false|Optional. A page token, received from a previous CloudChannelService.ListEntitlementChanges call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CloudChannelService.ListEntitlementChanges must match the call that provided the page token.|
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
  "entitlementChanges": [
    {
      "activationReason": "ACTIVATION_REASON_UNSPECIFIED",
      "cancellationReason": "CANCELLATION_REASON_UNSPECIFIED",
      "changeType": "CHANGE_TYPE_UNSPECIFIED",
      "createTime": "string",
      "entitlement": "string",
      "offer": "string",
      "operator": "string",
      "operatorType": "OPERATOR_TYPE_UNSPECIFIED",
      "otherChangeReason": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "suspensionReason": "SUSPENSION_REASON_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudchannelaccountscustomersentitlementslistentitlementchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListEntitlementChangesResponse](#schemagooglecloudchannelv1listentitlementchangesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.listTransferableOffers

<a id="opIdcloudchannel.accounts.listTransferableOffers"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listTransferableOffers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudIdentityId": "string",
    "customerName": "string",
    "languageCode": "string",
    "pageSize": 0,
    "pageToken": "string",
    "sku": "string"
  }'
```

`POST /v1/{parent}:listTransferableOffers`

List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.

> Body parameter

```json
{
  "cloudIdentityId": "string",
  "customerName": "string",
  "languageCode": "string",
  "pageSize": 0,
  "pageToken": "string",
  "sku": "string"
}
```

<h3 id="cloudchannelaccountslisttransferableoffers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller's account.|
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
|body|body|[GoogleCloudChannelV1ListTransferableOffersRequest](#schemagooglecloudchannelv1listtransferableoffersrequest)|false|none|
|» cloudIdentityId|body|string|false|Customer's Cloud Identity ID|
|» customerName|body|string|false|A reseller should create a customer and use the resource name of that customer here.|
|» languageCode|body|string|false|Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".|
|» pageSize|body|integer(int32)|false|Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000.|
|» pageToken|body|string|false|A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call.|
|» sku|body|string|false|Required. The SKU to look up Offers for.|

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
  "transferableOffers": [
    {
      "offer": {
        "constraints": {
          "customerConstraints": {
            "allowedCustomerTypes": [
              "CUSTOMER_TYPE_UNSPECIFIED"
            ],
            "allowedRegions": [
              "string"
            ],
            "promotionalOrderTypes": [
              "PROMOTIONAL_TYPE_UNSPECIFIED"
            ]
          }
        },
        "dealCode": "string",
        "endTime": "string",
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "parameterDefinitions": [
          {
            "allowedValues": [
              {
                "boolValue": true,
                "doubleValue": 0,
                "int64Value": "string",
                "protoValue": {
                  "property1": null,
                  "property2": null
                },
                "stringValue": "string"
              }
            ],
            "maxValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "minValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "name": "string",
            "optional": true,
            "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
          }
        ],
        "plan": {
          "billingAccount": "string",
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
          "trialPeriod": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          }
        },
        "priceByResources": [
          {
            "price": {
              "basePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "discount": 0,
              "effectivePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "externalPriceUri": "string"
            },
            "pricePhases": [
              {
                "firstPeriod": 0,
                "lastPeriod": 0,
                "periodType": "PERIOD_TYPE_UNSPECIFIED",
                "price": {
                  "basePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "discount": 0,
                  "effectivePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "externalPriceUri": "string"
                },
                "priceTiers": [
                  {
                    "firstResource": 0,
                    "lastResource": 0,
                    "price": {
                      "basePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "discount": 0,
                      "effectivePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "externalPriceUri": "string"
                    }
                  }
                ]
              }
            ],
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "sku": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string",
          "product": {
            "marketingInfo": {
              "defaultLogo": {
                "content": "string",
                "title": "string",
                "type": "MEDIA_TYPE_UNSPECIFIED"
              },
              "description": "string",
              "displayName": "string"
            },
            "name": "string"
          }
        },
        "startTime": "string"
      }
    }
  ]
}
```

<h3 id="cloudchannelaccountslisttransferableoffers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListTransferableOffersResponse](#schemagooglecloudchannelv1listtransferableoffersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.listTransferableSkus

<a id="opIdcloudchannel.accounts.listTransferableSkus"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listTransferableSkus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authToken": "string",
    "cloudIdentityId": "string",
    "customerName": "string",
    "languageCode": "string",
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v1/{parent}:listTransferableSkus`

List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.

> Body parameter

```json
{
  "authToken": "string",
  "cloudIdentityId": "string",
  "customerName": "string",
  "languageCode": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="cloudchannelaccountslisttransferableskus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The reseller account's resource name. Parent uses the format: accounts/{account_id}|
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
|body|body|[GoogleCloudChannelV1ListTransferableSkusRequest](#schemagooglecloudchannelv1listtransferableskusrequest)|false|none|
|» authToken|body|string|false|Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.|
|» cloudIdentityId|body|string|false|Customer's Cloud Identity ID|
|» customerName|body|string|false|A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id}/customers/{customer_id}|
|» languageCode|body|string|false|The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". Optional.|
|» pageSize|body|integer(int32)|false|The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional.|
|» pageToken|body|string|false|A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional.|

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
  "transferableSkus": [
    {
      "legacySku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      },
      "sku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      },
      "transferEligibility": {
        "description": "string",
        "ineligibilityReason": "REASON_UNSPECIFIED",
        "isEligible": true
      }
    }
  ]
}
```

<h3 id="cloudchannelaccountslisttransferableskus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListTransferableSkusResponse](#schemagooglecloudchannelv1listtransferableskusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.transferEntitlements

<a id="opIdcloudchannel.accounts.customers.transferEntitlements"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:transferEntitlements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authToken": "string",
    "entitlements": [
      {
        "associationInfo": {
          "baseEntitlement": "string"
        },
        "commitmentSettings": {
          "renewalSettings": {
            "enableRenewal": true,
            "paymentCycle": {
              "duration": 0,
              "periodType": "PERIOD_TYPE_UNSPECIFIED"
            },
            "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
            "resizeUnitCount": true
          }
        },
        "offer": "string",
        "parameters": [
          {
            "name": "string",
            "value": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            }
          }
        ],
        "purchaseOrderId": "string"
      }
    ],
    "requestId": "string"
  }'
```

`POST /v1/{parent}:transferEntitlements`

Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "authToken": "string",
  "entitlements": [
    {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        }
      },
      "offer": "string",
      "parameters": [
        {
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "purchaseOrderId": "string"
    }
  ],
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomerstransferentitlements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller's customer account that will receive transferred entitlements. Parent uses the format: accounts/{account_id}/customers/{customer_id}|
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
|body|body|[GoogleCloudChannelV1TransferEntitlementsRequest](#schemagooglecloudchannelv1transferentitlementsrequest)|false|none|
|» authToken|body|string|false|The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.|
|» entitlements|body|[[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)]|false|Required. The new entitlements to create or transfer.|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomerstransferentitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.customers.transferEntitlementsToGoogle

<a id="opIdcloudchannel.accounts.customers.transferEntitlementsToGoogle"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:transferEntitlementsToGoogle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entitlements": [
      {
        "associationInfo": {
          "baseEntitlement": "string"
        },
        "commitmentSettings": {
          "renewalSettings": {
            "enableRenewal": true,
            "paymentCycle": {
              "duration": 0,
              "periodType": "PERIOD_TYPE_UNSPECIFIED"
            },
            "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
            "resizeUnitCount": true
          }
        },
        "offer": "string",
        "parameters": [
          {
            "name": "string",
            "value": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            }
          }
        ],
        "purchaseOrderId": "string"
      }
    ],
    "requestId": "string"
  }'
```

`POST /v1/{parent}:transferEntitlementsToGoogle`

Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.

> Body parameter

```json
{
  "entitlements": [
    {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        }
      },
      "offer": "string",
      "parameters": [
        {
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "purchaseOrderId": "string"
    }
  ],
  "requestId": "string"
}
```

<h3 id="cloudchannelaccountscustomerstransferentitlementstogoogle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the reseller's customer account where the entitlements transfer from. Parent uses the format: accounts/{account_id}/customers/{customer_id}|
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
|body|body|[GoogleCloudChannelV1TransferEntitlementsToGoogleRequest](#schemagooglecloudchannelv1transferentitlementstogooglerequest)|false|none|
|» entitlements|body|[[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)]|false|Required. The entitlements to transfer to Google.|
|» requestId|body|string|false|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="cloudchannelaccountscustomerstransferentitlementstogoogle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.accounts.reportJobs.fetchReportResults

<a id="opIdcloudchannel.accounts.reportJobs.fetchReportResults"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:fetchReportResults \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v1/{reportJob}:fetchReportResults`

Retrieves data generated by CloudChannelReportsService.RunReportJob.

> Body parameter

```json
{
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="cloudchannelaccountsreportjobsfetchreportresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportJob|path|string|true|Required. The report job created by CloudChannelReportsService.RunReportJob. Report_job uses the format: accounts/{account_id}/reportJobs/{report_job_id}|
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
|body|body|[GoogleCloudChannelV1FetchReportResultsRequest](#schemagooglecloudchannelv1fetchreportresultsrequest)|false|none|
|» pageSize|body|integer(int32)|false|Optional. Requested page size of the report. The server may return fewer results than requested. If you don't specify a page size, the server uses a sensible default (may change over time). The maximum value is 30,000; the server will change larger values to 30,000.|
|» pageToken|body|string|false|Optional. A token that specifies a page of results beyond the first page. Obtained through FetchReportResultsResponse.next_page_token of the previous CloudChannelReportsService.FetchReportResults call.|

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
  "reportMetadata": {
    "dateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "precedingDateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "report": {
      "columns": [
        {
          "columnId": "string",
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "displayName": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    },
    "rowCount": "string"
  },
  "rows": [
    {
      "values": [
        {
          "dateTimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "decimalValue": {
            "value": "string"
          },
          "intValue": "string",
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "stringValue": "string"
        }
      ]
    }
  ]
}
```

<h3 id="cloudchannelaccountsreportjobsfetchreportresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1FetchReportResultsResponse](#schemagooglecloudchannelv1fetchreportresultsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.reports.usage.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.reports.usage.readonly )
</aside>

<h1 id="cloud-channel-api-operations">operations</h1>

## cloudchannel.operations.list

<a id="opIdcloudchannel.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="cloudchanneloperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
|filter|UNSPECIFIED|
|filter|BASIC|
|filter|FULL|
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
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="cloudchanneloperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.operations.delete

<a id="opIdcloudchannel.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="cloudchanneloperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
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
{}
```

<h3 id="cloudchanneloperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.operations.cancel

<a id="opIdcloudchannel.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="cloudchanneloperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
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
|body|body|[GoogleLongrunningCancelOperationRequest](#schemagooglelongrunningcanceloperationrequest)|false|none|

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
{}
```

<h3 id="cloudchanneloperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

<h1 id="cloud-channel-api-products">products</h1>

## cloudchannel.products.list

<a id="opIdcloudchannel.products.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/products`

Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

<h3 id="cloudchannelproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Required. The resource name of the reseller account. Format: accounts/{account_id}.|
|languageCode|query|string|false|Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".|
|pageSize|query|integer|false|Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Products. The maximum value is 1000; the server will coerce values above 1000.|
|pageToken|query|string|false|Optional. A token for a page of results other than the first page.|
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
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string"
    }
  ]
}
```

<h3 id="cloudchannelproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListProductsResponse](#schemagooglecloudchannelv1listproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## cloudchannel.products.skus.list

<a id="opIdcloudchannel.products.skus.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/skus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/skus`

Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

<h3 id="cloudchannelproductsskuslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the Product to list SKUs for. Parent uses the format: products/{product_id}. Supports products/- to retrieve SKUs for all products.|
|account|query|string|false|Required. Resource name of the reseller. Format: accounts/{account_id}.|
|languageCode|query|string|false|Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".|
|pageSize|query|integer|false|Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.|
|pageToken|query|string|false|Optional. A token for a page of results other than the first page. Optional.|
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
  "skus": [
    {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string",
      "product": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string"
      }
    }
  ]
}
```

<h3 id="cloudchannelproductsskuslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudChannelV1ListSkusResponse](#schemagooglecloudchannelv1listskusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudChannelV1ActivateEntitlementRequest">GoogleCloudChannelV1ActivateEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1activateentitlementrequest"></a>
<a id="schema_GoogleCloudChannelV1ActivateEntitlementRequest"></a>
<a id="tocSgooglecloudchannelv1activateentitlementrequest"></a>
<a id="tocsgooglecloudchannelv1activateentitlementrequest"></a>

```json
{
  "requestId": "string"
}
```

Request message for CloudChannelService.ActivateEntitlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1AdminUser">GoogleCloudChannelV1AdminUser</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1adminuser"></a>
<a id="schema_GoogleCloudChannelV1AdminUser"></a>
<a id="tocSgooglecloudchannelv1adminuser"></a>
<a id="tocsgooglecloudchannelv1adminuser"></a>

```json
{
  "email": "string",
  "familyName": "string",
  "givenName": "string"
}
```

Information needed to create an Admin User for Google Workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Primary email of the admin user.|
|familyName|string|false|none|Family name of the admin user.|
|givenName|string|false|none|Given name of the admin user.|

<h2 id="tocS_GoogleCloudChannelV1AssociationInfo">GoogleCloudChannelV1AssociationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1associationinfo"></a>
<a id="schema_GoogleCloudChannelV1AssociationInfo"></a>
<a id="tocSgooglecloudchannelv1associationinfo"></a>
<a id="tocsgooglecloudchannelv1associationinfo"></a>

```json
{
  "baseEntitlement": "string"
}
```

Association links that an entitlement has to other entitlements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseEntitlement|string|false|none|The name of the base entitlement, for which this entitlement is an add-on.|

<h2 id="tocS_GoogleCloudChannelV1CancelEntitlementRequest">GoogleCloudChannelV1CancelEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1cancelentitlementrequest"></a>
<a id="schema_GoogleCloudChannelV1CancelEntitlementRequest"></a>
<a id="tocSgooglecloudchannelv1cancelentitlementrequest"></a>
<a id="tocsgooglecloudchannelv1cancelentitlementrequest"></a>

```json
{
  "requestId": "string"
}
```

Request message for CloudChannelService.CancelEntitlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1ChangeOfferRequest">GoogleCloudChannelV1ChangeOfferRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1changeofferrequest"></a>
<a id="schema_GoogleCloudChannelV1ChangeOfferRequest"></a>
<a id="tocSgooglecloudchannelv1changeofferrequest"></a>
<a id="tocsgooglecloudchannelv1changeofferrequest"></a>

```json
{
  "offer": "string",
  "parameters": [
    {
      "editable": true,
      "name": "string",
      "value": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      }
    }
  ],
  "purchaseOrderId": "string",
  "requestId": "string"
}
```

Request message for CloudChannelService.ChangeOffer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offer|string|false|none|Required. New Offer. Format: accounts/{account_id}/offers/{offer_id}.|
|parameters|[[GoogleCloudChannelV1Parameter](#schemagooglecloudchannelv1parameter)]|false|none|Optional. Parameters needed to purchase the Offer. To view the available Parameters refer to the Offer.parameter_definitions from the desired offer.|
|purchaseOrderId|string|false|none|Optional. Purchase order id provided by the reseller.|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1ChangeParametersRequest">GoogleCloudChannelV1ChangeParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1changeparametersrequest"></a>
<a id="schema_GoogleCloudChannelV1ChangeParametersRequest"></a>
<a id="tocSgooglecloudchannelv1changeparametersrequest"></a>
<a id="tocsgooglecloudchannelv1changeparametersrequest"></a>

```json
{
  "parameters": [
    {
      "editable": true,
      "name": "string",
      "value": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      }
    }
  ],
  "purchaseOrderId": "string",
  "requestId": "string"
}
```

Request message for CloudChannelService.ChangeParametersRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|[[GoogleCloudChannelV1Parameter](#schemagooglecloudchannelv1parameter)]|false|none|Required. Entitlement parameters to update. You can only change editable parameters. To view the available Parameters for a request, refer to the Offer.parameter_definitions from the desired offer.|
|purchaseOrderId|string|false|none|Optional. Purchase order ID provided by the reseller.|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1ChangeRenewalSettingsRequest">GoogleCloudChannelV1ChangeRenewalSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1changerenewalsettingsrequest"></a>
<a id="schema_GoogleCloudChannelV1ChangeRenewalSettingsRequest"></a>
<a id="tocSgooglecloudchannelv1changerenewalsettingsrequest"></a>
<a id="tocsgooglecloudchannelv1changerenewalsettingsrequest"></a>

```json
{
  "renewalSettings": {
    "enableRenewal": true,
    "paymentCycle": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    },
    "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
    "resizeUnitCount": true
  },
  "requestId": "string"
}
```

Request message for CloudChannelService.ChangeRenewalSettings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|renewalSettings|[GoogleCloudChannelV1RenewalSettings](#schemagooglecloudchannelv1renewalsettings)|false|none|Required. New renewal settings.|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1ChannelPartnerLink">GoogleCloudChannelV1ChannelPartnerLink</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1channelpartnerlink"></a>
<a id="schema_GoogleCloudChannelV1ChannelPartnerLink"></a>
<a id="tocSgooglecloudchannelv1channelpartnerlink"></a>
<a id="tocsgooglecloudchannelv1channelpartnerlink"></a>

```json
{
  "channelPartnerCloudIdentityInfo": {
    "adminConsoleUri": "string",
    "alternateEmail": "string",
    "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
    "eduData": {
      "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
      "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
      "website": "string"
    },
    "isDomainVerified": true,
    "languageCode": "string",
    "phoneNumber": "string",
    "primaryDomain": "string"
  },
  "createTime": "string",
  "inviteLinkUri": "string",
  "linkState": "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
  "name": "string",
  "publicId": "string",
  "resellerCloudIdentityId": "string",
  "updateTime": "string"
}
```

Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelPartnerCloudIdentityInfo|[GoogleCloudChannelV1CloudIdentityInfo](#schemagooglecloudchannelv1cloudidentityinfo)|false|none|Output only. Cloud Identity info of the channel partner (IR).|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the channel partner link is created.|
|inviteLinkUri|string|false|read-only|Output only. URI of the web page where partner accepts the link invitation.|
|linkState|string|false|none|Required. State of the channel partner link.|
|name|string|false|read-only|Output only. Resource name for the channel partner link, in the format accounts/{account_id}/channelPartnerLinks/{id}.|
|publicId|string|false|read-only|Output only. Public identifier that a customer must use to generate a transfer token to move to this distributor-reseller combination.|
|resellerCloudIdentityId|string|false|none|Required. Cloud Identity ID of the linked reseller.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the channel partner link is updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|linkState|CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED|
|linkState|INVITED|
|linkState|ACTIVE|
|linkState|REVOKED|
|linkState|SUSPENDED|

<h2 id="tocS_GoogleCloudChannelV1ChannelPartnerRepricingConfig">GoogleCloudChannelV1ChannelPartnerRepricingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1channelpartnerrepricingconfig"></a>
<a id="schema_GoogleCloudChannelV1ChannelPartnerRepricingConfig"></a>
<a id="tocSgooglecloudchannelv1channelpartnerrepricingconfig"></a>
<a id="tocsgooglecloudchannelv1channelpartnerrepricingconfig"></a>

```json
{
  "name": "string",
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  },
  "updateTime": "string"
}
```

Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. Resource name of the ChannelPartnerRepricingConfig. Format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}/channelPartnerRepricingConfigs/{id}.|
|repricingConfig|[GoogleCloudChannelV1RepricingConfig](#schemagooglecloudchannelv1repricingconfig)|false|none|Required. The configuration for bill modifications made by a reseller before sending it to ChannelPartner.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month.|

<h2 id="tocS_GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest">GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1checkcloudidentityaccountsexistrequest"></a>
<a id="schema_GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest"></a>
<a id="tocSgooglecloudchannelv1checkcloudidentityaccountsexistrequest"></a>
<a id="tocsgooglecloudchannelv1checkcloudidentityaccountsexistrequest"></a>

```json
{
  "domain": "string"
}
```

Request message for CloudChannelService.CheckCloudIdentityAccountsExist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|Required. Domain to fetch for Cloud Identity account customer.|

<h2 id="tocS_GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse">GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1checkcloudidentityaccountsexistresponse"></a>
<a id="schema_GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse"></a>
<a id="tocSgooglecloudchannelv1checkcloudidentityaccountsexistresponse"></a>
<a id="tocsgooglecloudchannelv1checkcloudidentityaccountsexistresponse"></a>

```json
{
  "cloudIdentityAccounts": [
    {
      "customerCloudIdentityId": "string",
      "customerName": "string",
      "existing": true,
      "owned": true
    }
  ]
}
```

Response message for CloudChannelService.CheckCloudIdentityAccountsExist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudIdentityAccounts|[[GoogleCloudChannelV1CloudIdentityCustomerAccount](#schemagooglecloudchannelv1cloudidentitycustomeraccount)]|false|none|The Cloud Identity accounts associated with the domain.|

<h2 id="tocS_GoogleCloudChannelV1CloudIdentityCustomerAccount">GoogleCloudChannelV1CloudIdentityCustomerAccount</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1cloudidentitycustomeraccount"></a>
<a id="schema_GoogleCloudChannelV1CloudIdentityCustomerAccount"></a>
<a id="tocSgooglecloudchannelv1cloudidentitycustomeraccount"></a>
<a id="tocsgooglecloudchannelv1cloudidentitycustomeraccount"></a>

```json
{
  "customerCloudIdentityId": "string",
  "customerName": "string",
  "existing": true,
  "owned": true
}
```

Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerCloudIdentityId|string|false|none|If existing = true, the Cloud Identity ID of the customer.|
|customerName|string|false|none|If owned = true, the name of the customer that owns the Cloud Identity account. Customer_name uses the format: accounts/{account_id}/customers/{customer_id}|
|existing|boolean|false|none|Returns true if a Cloud Identity account exists for a specific domain.|
|owned|boolean|false|none|Returns true if the Cloud Identity account is associated with a customer of the Channel Services partner.|

<h2 id="tocS_GoogleCloudChannelV1CloudIdentityInfo">GoogleCloudChannelV1CloudIdentityInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1cloudidentityinfo"></a>
<a id="schema_GoogleCloudChannelV1CloudIdentityInfo"></a>
<a id="tocSgooglecloudchannelv1cloudidentityinfo"></a>
<a id="tocsgooglecloudchannelv1cloudidentityinfo"></a>

```json
{
  "adminConsoleUri": "string",
  "alternateEmail": "string",
  "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
  "eduData": {
    "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
    "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
    "website": "string"
  },
  "isDomainVerified": true,
  "languageCode": "string",
  "phoneNumber": "string",
  "primaryDomain": "string"
}
```

Cloud Identity information for the Cloud Channel Customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminConsoleUri|string|false|read-only|Output only. URI of Customer's Admin console dashboard.|
|alternateEmail|string|false|none|The alternate email.|
|customerType|string|false|none|CustomerType indicates verification type needed for using services.|
|eduData|[GoogleCloudChannelV1EduData](#schemagooglecloudchannelv1edudata)|false|none|Edu information about the customer.|
|isDomainVerified|boolean|false|read-only|Output only. Whether the domain is verified. This field is not returned for a Customer's cloud_identity_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY_DOMAIN_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers.|
|languageCode|string|false|none|Language code.|
|phoneNumber|string|false|none|Phone number associated with the Cloud Identity.|
|primaryDomain|string|false|read-only|Output only. The primary domain name.|

#### Enumerated Values

|Property|Value|
|---|---|
|customerType|CUSTOMER_TYPE_UNSPECIFIED|
|customerType|DOMAIN|
|customerType|TEAM|

<h2 id="tocS_GoogleCloudChannelV1Column">GoogleCloudChannelV1Column</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1column"></a>
<a id="schema_GoogleCloudChannelV1Column"></a>
<a id="tocSgooglecloudchannelv1column"></a>
<a id="tocsgooglecloudchannelv1column"></a>

```json
{
  "columnId": "string",
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "displayName": "string"
}
```

The definition of a report column. Specifies the data properties in the corresponding position of the report rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnId|string|false|none|The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports.|
|dataType|string|false|none|The type of the values for this column.|
|displayName|string|false|none|The column's display name.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|STRING|
|dataType|INT|
|dataType|DECIMAL|
|dataType|MONEY|
|dataType|DATE|
|dataType|DATE_TIME|

<h2 id="tocS_GoogleCloudChannelV1CommitmentSettings">GoogleCloudChannelV1CommitmentSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1commitmentsettings"></a>
<a id="schema_GoogleCloudChannelV1CommitmentSettings"></a>
<a id="tocSgooglecloudchannelv1commitmentsettings"></a>
<a id="tocsgooglecloudchannelv1commitmentsettings"></a>

```json
{
  "endTime": "string",
  "renewalSettings": {
    "enableRenewal": true,
    "paymentCycle": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    },
    "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
    "resizeUnitCount": true
  },
  "startTime": "string"
}
```

Commitment settings for commitment-based offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|read-only|Output only. Commitment end timestamp.|
|renewalSettings|[GoogleCloudChannelV1RenewalSettings](#schemagooglecloudchannelv1renewalsettings)|false|none|Optional. Renewal settings applicable for a commitment-based Offer.|
|startTime|string(google-datetime)|false|read-only|Output only. Commitment start timestamp.|

<h2 id="tocS_GoogleCloudChannelV1ConditionalOverride">GoogleCloudChannelV1ConditionalOverride</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1conditionaloverride"></a>
<a id="schema_GoogleCloudChannelV1ConditionalOverride"></a>
<a id="tocSgooglecloudchannelv1conditionaloverride"></a>
<a id="tocsgooglecloudchannelv1conditionaloverride"></a>

```json
{
  "adjustment": {
    "percentageAdjustment": {
      "percentage": {
        "value": "string"
      }
    }
  },
  "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
  "repricingCondition": {
    "skuGroupCondition": {
      "skuGroup": "string"
    }
  }
}
```

Specifies the override to conditionally apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustment|[GoogleCloudChannelV1RepricingAdjustment](#schemagooglecloudchannelv1repricingadjustment)|false|none|Required. Information about the applied override's adjustment.|
|rebillingBasis|string|false|none|Required. The RebillingBasis to use for the applied override. Shows the relative cost based on your repricing costs.|
|repricingCondition|[GoogleCloudChannelV1RepricingCondition](#schemagooglecloudchannelv1repricingcondition)|false|none|Required. Specifies the condition which, if met, will apply the override.|

#### Enumerated Values

|Property|Value|
|---|---|
|rebillingBasis|REBILLING_BASIS_UNSPECIFIED|
|rebillingBasis|COST_AT_LIST|
|rebillingBasis|DIRECT_CUSTOMER_COST|

<h2 id="tocS_GoogleCloudChannelV1Constraints">GoogleCloudChannelV1Constraints</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1constraints"></a>
<a id="schema_GoogleCloudChannelV1Constraints"></a>
<a id="tocSgooglecloudchannelv1constraints"></a>
<a id="tocsgooglecloudchannelv1constraints"></a>

```json
{
  "customerConstraints": {
    "allowedCustomerTypes": [
      "CUSTOMER_TYPE_UNSPECIFIED"
    ],
    "allowedRegions": [
      "string"
    ],
    "promotionalOrderTypes": [
      "PROMOTIONAL_TYPE_UNSPECIFIED"
    ]
  }
}
```

Represents the constraints for buying the Offer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerConstraints|[GoogleCloudChannelV1CustomerConstraints](#schemagooglecloudchannelv1customerconstraints)|false|none|Represents constraints required to purchase the Offer for a customer.|

<h2 id="tocS_GoogleCloudChannelV1ContactInfo">GoogleCloudChannelV1ContactInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1contactinfo"></a>
<a id="schema_GoogleCloudChannelV1ContactInfo"></a>
<a id="tocSgooglecloudchannelv1contactinfo"></a>
<a id="tocsgooglecloudchannelv1contactinfo"></a>

```json
{
  "displayName": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "title": "string"
}
```

Contact information for a customer account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name.|
|email|string|false|none|The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.|
|firstName|string|false|none|The customer account contact's first name. Optional for Team customers.|
|lastName|string|false|none|The customer account contact's last name. Optional for Team customers.|
|phone|string|false|none|The customer account's contact phone number.|
|title|string|false|none|Optional. The customer account contact's job title.|

<h2 id="tocS_GoogleCloudChannelV1CreateEntitlementRequest">GoogleCloudChannelV1CreateEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1createentitlementrequest"></a>
<a id="schema_GoogleCloudChannelV1CreateEntitlementRequest"></a>
<a id="tocSgooglecloudchannelv1createentitlementrequest"></a>
<a id="tocsgooglecloudchannelv1createentitlementrequest"></a>

```json
{
  "entitlement": {
    "associationInfo": {
      "baseEntitlement": "string"
    },
    "commitmentSettings": {
      "endTime": "string",
      "renewalSettings": {
        "enableRenewal": true,
        "paymentCycle": {
          "duration": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED"
        },
        "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
        "resizeUnitCount": true
      },
      "startTime": "string"
    },
    "createTime": "string",
    "name": "string",
    "offer": "string",
    "parameters": [
      {
        "editable": true,
        "name": "string",
        "value": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        }
      }
    ],
    "provisionedService": {
      "productId": "string",
      "provisioningId": "string",
      "skuId": "string"
    },
    "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
    "purchaseOrderId": "string",
    "suspensionReasons": [
      "SUSPENSION_REASON_UNSPECIFIED"
    ],
    "trialSettings": {
      "endTime": "string",
      "trial": true
    },
    "updateTime": "string"
  },
  "requestId": "string"
}
```

Request message for CloudChannelService.CreateEntitlement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement|[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)|false|none|Required. The entitlement to create.|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1Customer">GoogleCloudChannelV1Customer</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1customer"></a>
<a id="schema_GoogleCloudChannelV1Customer"></a>
<a id="tocSgooglecloudchannelv1customer"></a>
<a id="tocsgooglecloudchannelv1customer"></a>

```json
{
  "alternateEmail": "string",
  "channelPartnerId": "string",
  "cloudIdentityId": "string",
  "cloudIdentityInfo": {
    "adminConsoleUri": "string",
    "alternateEmail": "string",
    "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
    "eduData": {
      "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
      "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
      "website": "string"
    },
    "isDomainVerified": true,
    "languageCode": "string",
    "phoneNumber": "string",
    "primaryDomain": "string"
  },
  "correlationId": "string",
  "createTime": "string",
  "domain": "string",
  "languageCode": "string",
  "name": "string",
  "orgDisplayName": "string",
  "orgPostalAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "primaryContactInfo": {
    "displayName": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "title": "string"
  },
  "updateTime": "string"
}
```

Entity representing a customer of a reseller or distributor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateEmail|string|false|none|Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers.|
|channelPartnerId|string|false|none|Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer.|
|cloudIdentityId|string|false|read-only|Output only. The customer's Cloud Identity ID if the customer has a Cloud Identity resource.|
|cloudIdentityInfo|[GoogleCloudChannelV1CloudIdentityInfo](#schemagooglecloudchannelv1cloudidentityinfo)|false|none|Output only. Cloud Identity information for the customer. Populated only if a Cloud Identity account exists for this customer.|
|correlationId|string|false|none|Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the customer was created.|
|domain|string|false|none|Required. The customer's primary domain. Must match the primary contact email's domain.|
|languageCode|string|false|none|Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|name|string|false|read-only|Output only. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}|
|orgDisplayName|string|false|none|Required. Name of the organization that the customer entity represents.|
|orgPostalAddress|[GoogleTypePostalAddress](#schemagoogletypepostaladdress)|false|none|Required. The organization address for the customer. To enforce US laws and embargoes, we require a region and zip code. You must provide valid addresses for every customer. To set the customer's language, use the Customer-level language code.|
|primaryContactInfo|[GoogleCloudChannelV1ContactInfo](#schemagooglecloudchannelv1contactinfo)|false|none|Primary contact info.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when the customer was updated.|

<h2 id="tocS_GoogleCloudChannelV1CustomerConstraints">GoogleCloudChannelV1CustomerConstraints</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1customerconstraints"></a>
<a id="schema_GoogleCloudChannelV1CustomerConstraints"></a>
<a id="tocSgooglecloudchannelv1customerconstraints"></a>
<a id="tocsgooglecloudchannelv1customerconstraints"></a>

```json
{
  "allowedCustomerTypes": [
    "CUSTOMER_TYPE_UNSPECIFIED"
  ],
  "allowedRegions": [
    "string"
  ],
  "promotionalOrderTypes": [
    "PROMOTIONAL_TYPE_UNSPECIFIED"
  ]
}
```

Represents constraints required to purchase the Offer for a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedCustomerTypes|[string]|false|none|Allowed Customer Type.|
|allowedRegions|[string]|false|none|Allowed geographical regions of the customer.|
|promotionalOrderTypes|[string]|false|none|Allowed Promotional Order Type. Present for Promotional offers.|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedCustomerTypes|CUSTOMER_TYPE_UNSPECIFIED|
|allowedCustomerTypes|DOMAIN|
|allowedCustomerTypes|TEAM|
|promotionalOrderTypes|PROMOTIONAL_TYPE_UNSPECIFIED|
|promotionalOrderTypes|NEW_UPGRADE|
|promotionalOrderTypes|TRANSFER|
|promotionalOrderTypes|PROMOTION_SWITCH|

<h2 id="tocS_GoogleCloudChannelV1CustomerEvent">GoogleCloudChannelV1CustomerEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1customerevent"></a>
<a id="schema_GoogleCloudChannelV1CustomerEvent"></a>
<a id="tocSgooglecloudchannelv1customerevent"></a>
<a id="tocsgooglecloudchannelv1customerevent"></a>

```json
{
  "customer": "string",
  "eventType": "TYPE_UNSPECIFIED"
}
```

Represents Pub/Sub message content describing customer update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}|
|eventType|string|false|none|Type of event which happened on the customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|TYPE_UNSPECIFIED|
|eventType|PRIMARY_DOMAIN_CHANGED|
|eventType|PRIMARY_DOMAIN_VERIFIED|

<h2 id="tocS_GoogleCloudChannelV1CustomerRepricingConfig">GoogleCloudChannelV1CustomerRepricingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1customerrepricingconfig"></a>
<a id="schema_GoogleCloudChannelV1CustomerRepricingConfig"></a>
<a id="tocSgooglecloudchannelv1customerrepricingconfig"></a>
<a id="tocsgooglecloudchannelv1customerrepricingconfig"></a>

```json
{
  "name": "string",
  "repricingConfig": {
    "adjustment": {
      "percentageAdjustment": {
        "percentage": {
          "value": "string"
        }
      }
    },
    "channelPartnerGranularity": {},
    "conditionalOverrides": [
      {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
        "repricingCondition": {
          "skuGroupCondition": {
            "skuGroup": "string"
          }
        }
      }
    ],
    "effectiveInvoiceMonth": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "entitlementGranularity": {
      "entitlement": "string"
    },
    "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
  },
  "updateTime": "string"
}
```

Configuration for how a reseller will reprice a Customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}.|
|repricingConfig|[GoogleCloudChannelV1RepricingConfig](#schemagooglecloudchannelv1repricingconfig)|false|none|Required. The configuration for bill modifications made by a reseller before sending it to customers.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month.|

<h2 id="tocS_GoogleCloudChannelV1DateRange">GoogleCloudChannelV1DateRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1daterange"></a>
<a id="schema_GoogleCloudChannelV1DateRange"></a>
<a id="tocSgooglecloudchannelv1daterange"></a>
<a id="tocsgooglecloudchannelv1daterange"></a>

```json
{
  "invoiceEndDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "invoiceStartDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "usageEndDateTime": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  },
  "usageStartDateTime": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  }
}
```

A representation of usage or invoice date ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceEndDate|[GoogleTypeDate](#schemagoogletypedate)|false|none|The latest invoice date (exclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the following month.|
|invoiceStartDate|[GoogleTypeDate](#schemagoogletypedate)|false|none|The earliest invoice date (inclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the given month.|
|usageEndDateTime|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|The latest usage date time (exclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage end date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.|
|usageStartDateTime|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|The earliest usage date time (inclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage start date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.|

<h2 id="tocS_GoogleCloudChannelV1EduData">GoogleCloudChannelV1EduData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1edudata"></a>
<a id="schema_GoogleCloudChannelV1EduData"></a>
<a id="tocSgooglecloudchannelv1edudata"></a>
<a id="tocsgooglecloudchannelv1edudata"></a>

```json
{
  "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
  "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
  "website": "string"
}
```

Required Edu Attributes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instituteSize|string|false|none|Size of the institute.|
|instituteType|string|false|none|Designated institute type of customer.|
|website|string|false|none|Web address for the edu customer's institution.|

#### Enumerated Values

|Property|Value|
|---|---|
|instituteSize|INSTITUTE_SIZE_UNSPECIFIED|
|instituteSize|SIZE_1_100|
|instituteSize|SIZE_101_500|
|instituteSize|SIZE_501_1000|
|instituteSize|SIZE_1001_2000|
|instituteSize|SIZE_2001_5000|
|instituteSize|SIZE_5001_10000|
|instituteSize|SIZE_10001_OR_MORE|
|instituteType|INSTITUTE_TYPE_UNSPECIFIED|
|instituteType|K12|
|instituteType|UNIVERSITY|

<h2 id="tocS_GoogleCloudChannelV1Entitlement">GoogleCloudChannelV1Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1entitlement"></a>
<a id="schema_GoogleCloudChannelV1Entitlement"></a>
<a id="tocSgooglecloudchannelv1entitlement"></a>
<a id="tocsgooglecloudchannelv1entitlement"></a>

```json
{
  "associationInfo": {
    "baseEntitlement": "string"
  },
  "commitmentSettings": {
    "endTime": "string",
    "renewalSettings": {
      "enableRenewal": true,
      "paymentCycle": {
        "duration": 0,
        "periodType": "PERIOD_TYPE_UNSPECIFIED"
      },
      "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
      "resizeUnitCount": true
    },
    "startTime": "string"
  },
  "createTime": "string",
  "name": "string",
  "offer": "string",
  "parameters": [
    {
      "editable": true,
      "name": "string",
      "value": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      }
    }
  ],
  "provisionedService": {
    "productId": "string",
    "provisioningId": "string",
    "skuId": "string"
  },
  "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
  "purchaseOrderId": "string",
  "suspensionReasons": [
    "SUSPENSION_REASON_UNSPECIFIED"
  ],
  "trialSettings": {
    "endTime": "string",
    "trial": true
  },
  "updateTime": "string"
}
```

An entitlement is a representation of a customer's ability to use a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationInfo|[GoogleCloudChannelV1AssociationInfo](#schemagooglecloudchannelv1associationinfo)|false|none|Association information to other entitlements.|
|commitmentSettings|[GoogleCloudChannelV1CommitmentSettings](#schemagooglecloudchannelv1commitmentsettings)|false|none|Commitment settings for a commitment-based Offer. Required for commitment based offers.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the entitlement is created.|
|name|string|false|read-only|Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}.|
|offer|string|false|none|Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}.|
|parameters|[[GoogleCloudChannelV1Parameter](#schemagooglecloudchannelv1parameter)]|false|none|Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For GCP billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount.|
|provisionedService|[GoogleCloudChannelV1ProvisionedService](#schemagooglecloudchannelv1provisionedservice)|false|none|Output only. Service provisioning details for the entitlement.|
|provisioningState|string|false|read-only|Output only. Current provisioning state of the entitlement.|
|purchaseOrderId|string|false|none|Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements.|
|suspensionReasons|[string]|false|read-only|Output only. Enumerable of all current suspension reasons for an entitlement.|
|trialSettings|[GoogleCloudChannelV1TrialSettings](#schemagooglecloudchannelv1trialsettings)|false|none|Output only. Settings for trial offers.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which the entitlement is updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|provisioningState|PROVISIONING_STATE_UNSPECIFIED|
|provisioningState|ACTIVE|
|provisioningState|SUSPENDED|
|suspensionReasons|SUSPENSION_REASON_UNSPECIFIED|
|suspensionReasons|RESELLER_INITIATED|
|suspensionReasons|TRIAL_ENDED|
|suspensionReasons|RENEWAL_WITH_TYPE_CANCEL|
|suspensionReasons|PENDING_TOS_ACCEPTANCE|
|suspensionReasons|OTHER|

<h2 id="tocS_GoogleCloudChannelV1EntitlementChange">GoogleCloudChannelV1EntitlementChange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1entitlementchange"></a>
<a id="schema_GoogleCloudChannelV1EntitlementChange"></a>
<a id="tocSgooglecloudchannelv1entitlementchange"></a>
<a id="tocsgooglecloudchannelv1entitlementchange"></a>

```json
{
  "activationReason": "ACTIVATION_REASON_UNSPECIFIED",
  "cancellationReason": "CANCELLATION_REASON_UNSPECIFIED",
  "changeType": "CHANGE_TYPE_UNSPECIFIED",
  "createTime": "string",
  "entitlement": "string",
  "offer": "string",
  "operator": "string",
  "operatorType": "OPERATOR_TYPE_UNSPECIFIED",
  "otherChangeReason": "string",
  "parameters": [
    {
      "editable": true,
      "name": "string",
      "value": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      }
    }
  ],
  "provisionedService": {
    "productId": "string",
    "provisioningId": "string",
    "skuId": "string"
  },
  "suspensionReason": "SUSPENSION_REASON_UNSPECIFIED"
}
```

Change event entry for Entitlement order history

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activationReason|string|false|none|The Entitlement's activation reason|
|cancellationReason|string|false|none|Cancellation reason for the Entitlement.|
|changeType|string|false|none|The change action type.|
|createTime|string(google-datetime)|false|none|The submitted time of the change.|
|entitlement|string|false|none|Required. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
|offer|string|false|none|Required. Resource name of the Offer at the time of change. Takes the form: accounts/{account_id}/offers/{offer_id}.|
|operator|string|false|none|Human-readable identifier that shows what operator made a change. When the operator_type is RESELLER, this is the user's email address. For all other operator types, this is empty.|
|operatorType|string|false|none|Operator type responsible for the change.|
|otherChangeReason|string|false|none|e.g. purchase_number change reason, entered by CRS.|
|parameters|[[GoogleCloudChannelV1Parameter](#schemagooglecloudchannelv1parameter)]|false|none|Extended parameters, such as: purchase_order_number, gcp_details; internal_correlation_id, long_running_operation_id, order_id; etc.|
|provisionedService|[GoogleCloudChannelV1ProvisionedService](#schemagooglecloudchannelv1provisionedservice)|false|none|Service provisioned for an Entitlement.|
|suspensionReason|string|false|none|Suspension reason for the Entitlement.|

#### Enumerated Values

|Property|Value|
|---|---|
|activationReason|ACTIVATION_REASON_UNSPECIFIED|
|activationReason|RESELLER_REVOKED_SUSPENSION|
|activationReason|CUSTOMER_ACCEPTED_PENDING_TOS|
|activationReason|RENEWAL_SETTINGS_CHANGED|
|activationReason|OTHER_ACTIVATION_REASON|
|cancellationReason|CANCELLATION_REASON_UNSPECIFIED|
|cancellationReason|SERVICE_TERMINATED|
|cancellationReason|RELATIONSHIP_ENDED|
|cancellationReason|PARTIAL_TRANSFER|
|changeType|CHANGE_TYPE_UNSPECIFIED|
|changeType|CREATED|
|changeType|PRICE_PLAN_SWITCHED|
|changeType|COMMITMENT_CHANGED|
|changeType|RENEWED|
|changeType|SUSPENDED|
|changeType|ACTIVATED|
|changeType|CANCELLED|
|changeType|SKU_CHANGED|
|changeType|RENEWAL_SETTING_CHANGED|
|changeType|PAID_SUBSCRIPTION_STARTED|
|changeType|LICENSE_CAP_CHANGED|
|changeType|SUSPENSION_DETAILS_CHANGED|
|changeType|TRIAL_END_DATE_EXTENDED|
|changeType|TRIAL_STARTED|
|operatorType|OPERATOR_TYPE_UNSPECIFIED|
|operatorType|CUSTOMER_SERVICE_REPRESENTATIVE|
|operatorType|SYSTEM|
|operatorType|CUSTOMER|
|operatorType|RESELLER|
|suspensionReason|SUSPENSION_REASON_UNSPECIFIED|
|suspensionReason|RESELLER_INITIATED|
|suspensionReason|TRIAL_ENDED|
|suspensionReason|RENEWAL_WITH_TYPE_CANCEL|
|suspensionReason|PENDING_TOS_ACCEPTANCE|
|suspensionReason|OTHER|

<h2 id="tocS_GoogleCloudChannelV1EntitlementEvent">GoogleCloudChannelV1EntitlementEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1entitlementevent"></a>
<a id="schema_GoogleCloudChannelV1EntitlementEvent"></a>
<a id="tocSgooglecloudchannelv1entitlementevent"></a>
<a id="tocsgooglecloudchannelv1entitlementevent"></a>

```json
{
  "entitlement": "string",
  "eventType": "TYPE_UNSPECIFIED"
}
```

Represents Pub/Sub message content describing entitlement update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement|string|false|none|Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
|eventType|string|false|none|Type of event which happened on the entitlement.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|TYPE_UNSPECIFIED|
|eventType|CREATED|
|eventType|PRICE_PLAN_SWITCHED|
|eventType|COMMITMENT_CHANGED|
|eventType|RENEWED|
|eventType|SUSPENDED|
|eventType|ACTIVATED|
|eventType|CANCELLED|
|eventType|SKU_CHANGED|
|eventType|RENEWAL_SETTING_CHANGED|
|eventType|PAID_SERVICE_STARTED|
|eventType|LICENSE_ASSIGNMENT_CHANGED|
|eventType|LICENSE_CAP_CHANGED|

<h2 id="tocS_GoogleCloudChannelV1FetchReportResultsRequest">GoogleCloudChannelV1FetchReportResultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1fetchreportresultsrequest"></a>
<a id="schema_GoogleCloudChannelV1FetchReportResultsRequest"></a>
<a id="tocSgooglecloudchannelv1fetchreportresultsrequest"></a>
<a id="tocsgooglecloudchannelv1fetchreportresultsrequest"></a>

```json
{
  "pageSize": 0,
  "pageToken": "string"
}
```

Request message for CloudChannelReportsService.FetchReportResults.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageSize|integer(int32)|false|none|Optional. Requested page size of the report. The server may return fewer results than requested. If you don't specify a page size, the server uses a sensible default (may change over time). The maximum value is 30,000; the server will change larger values to 30,000.|
|pageToken|string|false|none|Optional. A token that specifies a page of results beyond the first page. Obtained through FetchReportResultsResponse.next_page_token of the previous CloudChannelReportsService.FetchReportResults call.|

<h2 id="tocS_GoogleCloudChannelV1FetchReportResultsResponse">GoogleCloudChannelV1FetchReportResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1fetchreportresultsresponse"></a>
<a id="schema_GoogleCloudChannelV1FetchReportResultsResponse"></a>
<a id="tocSgooglecloudchannelv1fetchreportresultsresponse"></a>
<a id="tocsgooglecloudchannelv1fetchreportresultsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reportMetadata": {
    "dateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "precedingDateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "report": {
      "columns": [
        {
          "columnId": "string",
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "displayName": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    },
    "rowCount": "string"
  },
  "rows": [
    {
      "values": [
        {
          "dateTimeValue": {
            "day": 0,
            "hours": 0,
            "minutes": 0,
            "month": 0,
            "nanos": 0,
            "seconds": 0,
            "timeZone": {
              "id": "string",
              "version": "string"
            },
            "utcOffset": "string",
            "year": 0
          },
          "dateValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "decimalValue": {
            "value": "string"
          },
          "intValue": "string",
          "moneyValue": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "stringValue": "string"
        }
      ]
    }
  ]
}
```

Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results.|
|reportMetadata|[GoogleCloudChannelV1ReportResultsMetadata](#schemagooglecloudchannelv1reportresultsmetadata)|false|none|The metadata for the report results (display name, columns, row count, and date ranges).|
|rows|[[GoogleCloudChannelV1Row](#schemagooglecloudchannelv1row)]|false|none|The report's lists of values. Each row follows the settings and ordering of the columns from `report_metadata`.|

<h2 id="tocS_GoogleCloudChannelV1ImportCustomerRequest">GoogleCloudChannelV1ImportCustomerRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1importcustomerrequest"></a>
<a id="schema_GoogleCloudChannelV1ImportCustomerRequest"></a>
<a id="tocSgooglecloudchannelv1importcustomerrequest"></a>
<a id="tocsgooglecloudchannelv1importcustomerrequest"></a>

```json
{
  "authToken": "string",
  "channelPartnerId": "string",
  "cloudIdentityId": "string",
  "customer": "string",
  "domain": "string",
  "overwriteIfExists": true
}
```

Request message for CloudChannelService.ImportCustomer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authToken|string|false|none|Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.|
|channelPartnerId|string|false|none|Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well.|
|cloudIdentityId|string|false|none|Required. Customer's Cloud Identity ID|
|customer|string|false|none|Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id}/customers/{customer_id}|
|domain|string|false|none|Required. Customer domain.|
|overwriteIfExists|boolean|false|none|Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain.|

<h2 id="tocS_GoogleCloudChannelV1ListChannelPartnerLinksResponse">GoogleCloudChannelV1ListChannelPartnerLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listchannelpartnerlinksresponse"></a>
<a id="schema_GoogleCloudChannelV1ListChannelPartnerLinksResponse"></a>
<a id="tocSgooglecloudchannelv1listchannelpartnerlinksresponse"></a>
<a id="tocsgooglecloudchannelv1listchannelpartnerlinksresponse"></a>

```json
{
  "channelPartnerLinks": [
    {
      "channelPartnerCloudIdentityInfo": {
        "adminConsoleUri": "string",
        "alternateEmail": "string",
        "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
        "eduData": {
          "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
          "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
          "website": "string"
        },
        "isDomainVerified": true,
        "languageCode": "string",
        "phoneNumber": "string",
        "primaryDomain": "string"
      },
      "createTime": "string",
      "inviteLinkUri": "string",
      "linkState": "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
      "name": "string",
      "publicId": "string",
      "resellerCloudIdentityId": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for CloudChannelService.ListChannelPartnerLinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelPartnerLinks|[[GoogleCloudChannelV1ChannelPartnerLink](#schemagooglecloudchannelv1channelpartnerlink)]|false|none|The Channel partner links for a reseller.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass to ListChannelPartnerLinksRequest.page_token to obtain that page.|

<h2 id="tocS_GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse">GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listchannelpartnerrepricingconfigsresponse"></a>
<a id="schema_GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse"></a>
<a id="tocSgooglecloudchannelv1listchannelpartnerrepricingconfigsresponse"></a>
<a id="tocsgooglecloudchannelv1listchannelpartnerrepricingconfigsresponse"></a>

```json
{
  "channelPartnerRepricingConfigs": [
    {
      "name": "string",
      "repricingConfig": {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "channelPartnerGranularity": {},
        "conditionalOverrides": [
          {
            "adjustment": {
              "percentageAdjustment": {
                "percentage": {
                  "value": "string"
                }
              }
            },
            "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
            "repricingCondition": {
              "skuGroupCondition": {
                "skuGroup": "string"
              }
            }
          }
        ],
        "effectiveInvoiceMonth": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "entitlementGranularity": {
          "entitlement": "string"
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelPartnerRepricingConfigs|[[GoogleCloudChannelV1ChannelPartnerRepricingConfig](#schemagooglecloudchannelv1channelpartnerrepricingconfig)]|false|none|The repricing configs for this channel partner.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass to ListChannelPartnerRepricingConfigsRequest.page_token to obtain that page.|

<h2 id="tocS_GoogleCloudChannelV1ListCustomerRepricingConfigsResponse">GoogleCloudChannelV1ListCustomerRepricingConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listcustomerrepricingconfigsresponse"></a>
<a id="schema_GoogleCloudChannelV1ListCustomerRepricingConfigsResponse"></a>
<a id="tocSgooglecloudchannelv1listcustomerrepricingconfigsresponse"></a>
<a id="tocsgooglecloudchannelv1listcustomerrepricingconfigsresponse"></a>

```json
{
  "customerRepricingConfigs": [
    {
      "name": "string",
      "repricingConfig": {
        "adjustment": {
          "percentageAdjustment": {
            "percentage": {
              "value": "string"
            }
          }
        },
        "channelPartnerGranularity": {},
        "conditionalOverrides": [
          {
            "adjustment": {
              "percentageAdjustment": {
                "percentage": {
                  "value": "string"
                }
              }
            },
            "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
            "repricingCondition": {
              "skuGroupCondition": {
                "skuGroup": "string"
              }
            }
          }
        ],
        "effectiveInvoiceMonth": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "entitlementGranularity": {
          "entitlement": "string"
        },
        "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for CloudChannelService.ListCustomerRepricingConfigs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerRepricingConfigs|[[GoogleCloudChannelV1CustomerRepricingConfig](#schemagooglecloudchannelv1customerrepricingconfig)]|false|none|The repricing configs for this channel partner.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass to ListCustomerRepricingConfigsRequest.page_token to obtain that page.|

<h2 id="tocS_GoogleCloudChannelV1ListCustomersResponse">GoogleCloudChannelV1ListCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listcustomersresponse"></a>
<a id="schema_GoogleCloudChannelV1ListCustomersResponse"></a>
<a id="tocSgooglecloudchannelv1listcustomersresponse"></a>
<a id="tocsgooglecloudchannelv1listcustomersresponse"></a>

```json
{
  "customers": [
    {
      "alternateEmail": "string",
      "channelPartnerId": "string",
      "cloudIdentityId": "string",
      "cloudIdentityInfo": {
        "adminConsoleUri": "string",
        "alternateEmail": "string",
        "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
        "eduData": {
          "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
          "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
          "website": "string"
        },
        "isDomainVerified": true,
        "languageCode": "string",
        "phoneNumber": "string",
        "primaryDomain": "string"
      },
      "correlationId": "string",
      "createTime": "string",
      "domain": "string",
      "languageCode": "string",
      "name": "string",
      "orgDisplayName": "string",
      "orgPostalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "primaryContactInfo": {
        "displayName": "string",
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "phone": "string",
        "title": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for CloudChannelService.ListCustomers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customers|[[GoogleCloudChannelV1Customer](#schemagooglecloudchannelv1customer)]|false|none|The customers belonging to a reseller or distributor.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass to ListCustomersRequest.page_token to obtain that page.|

<h2 id="tocS_GoogleCloudChannelV1ListEntitlementChangesResponse">GoogleCloudChannelV1ListEntitlementChangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listentitlementchangesresponse"></a>
<a id="schema_GoogleCloudChannelV1ListEntitlementChangesResponse"></a>
<a id="tocSgooglecloudchannelv1listentitlementchangesresponse"></a>
<a id="tocsgooglecloudchannelv1listentitlementchangesresponse"></a>

```json
{
  "entitlementChanges": [
    {
      "activationReason": "ACTIVATION_REASON_UNSPECIFIED",
      "cancellationReason": "CANCELLATION_REASON_UNSPECIFIED",
      "changeType": "CHANGE_TYPE_UNSPECIFIED",
      "createTime": "string",
      "entitlement": "string",
      "offer": "string",
      "operator": "string",
      "operatorType": "OPERATOR_TYPE_UNSPECIFIED",
      "otherChangeReason": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "suspensionReason": "SUSPENSION_REASON_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for CloudChannelService.ListEntitlementChanges

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlementChanges|[[GoogleCloudChannelV1EntitlementChange](#schemagooglecloudchannelv1entitlementchange)]|false|none|The list of entitlement changes.|
|nextPageToken|string|false|none|A token to list the next page of results.|

<h2 id="tocS_GoogleCloudChannelV1ListEntitlementsResponse">GoogleCloudChannelV1ListEntitlementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listentitlementsresponse"></a>
<a id="schema_GoogleCloudChannelV1ListEntitlementsResponse"></a>
<a id="tocSgooglecloudchannelv1listentitlementsresponse"></a>
<a id="tocsgooglecloudchannelv1listentitlementsresponse"></a>

```json
{
  "entitlements": [
    {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "endTime": "string",
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        },
        "startTime": "string"
      },
      "createTime": "string",
      "name": "string",
      "offer": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
      "purchaseOrderId": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "trialSettings": {
        "endTime": "string",
        "trial": true
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for CloudChannelService.ListEntitlements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlements|[[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)]|false|none|The reseller customer's entitlements.|
|nextPageToken|string|false|none|A token to list the next page of results. Pass to ListEntitlementsRequest.page_token to obtain that page.|

<h2 id="tocS_GoogleCloudChannelV1ListOffersResponse">GoogleCloudChannelV1ListOffersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listoffersresponse"></a>
<a id="schema_GoogleCloudChannelV1ListOffersResponse"></a>
<a id="tocSgooglecloudchannelv1listoffersresponse"></a>
<a id="tocsgooglecloudchannelv1listoffersresponse"></a>

```json
{
  "nextPageToken": "string",
  "offers": [
    {
      "constraints": {
        "customerConstraints": {
          "allowedCustomerTypes": [
            "CUSTOMER_TYPE_UNSPECIFIED"
          ],
          "allowedRegions": [
            "string"
          ],
          "promotionalOrderTypes": [
            "PROMOTIONAL_TYPE_UNSPECIFIED"
          ]
        }
      },
      "dealCode": "string",
      "endTime": "string",
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string",
      "parameterDefinitions": [
        {
          "allowedValues": [
            {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            }
          ],
          "maxValue": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          },
          "minValue": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          },
          "name": "string",
          "optional": true,
          "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
        }
      ],
      "plan": {
        "billingAccount": "string",
        "paymentCycle": {
          "duration": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED"
        },
        "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
        "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
        "trialPeriod": {
          "duration": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED"
        }
      },
      "priceByResources": [
        {
          "price": {
            "basePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "discount": 0,
            "effectivePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "externalPriceUri": "string"
          },
          "pricePhases": [
            {
              "firstPeriod": 0,
              "lastPeriod": 0,
              "periodType": "PERIOD_TYPE_UNSPECIFIED",
              "price": {
                "basePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "discount": 0,
                "effectivePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "externalPriceUri": "string"
              },
              "priceTiers": [
                {
                  "firstResource": 0,
                  "lastResource": 0,
                  "price": {
                    "basePrice": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "discount": 0,
                    "effectivePrice": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "externalPriceUri": "string"
                  }
                }
              ]
            }
          ],
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
        }
      ],
      "sku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      },
      "startTime": "string"
    }
  ]
}
```

Response message for ListOffers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results.|
|offers|[[GoogleCloudChannelV1Offer](#schemagooglecloudchannelv1offer)]|false|none|The list of Offers requested.|

<h2 id="tocS_GoogleCloudChannelV1ListProductsResponse">GoogleCloudChannelV1ListProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listproductsresponse"></a>
<a id="schema_GoogleCloudChannelV1ListProductsResponse"></a>
<a id="tocSgooglecloudchannelv1listproductsresponse"></a>
<a id="tocsgooglecloudchannelv1listproductsresponse"></a>

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string"
    }
  ]
}
```

Response message for ListProducts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results.|
|products|[[GoogleCloudChannelV1Product](#schemagooglecloudchannelv1product)]|false|none|List of Products requested.|

<h2 id="tocS_GoogleCloudChannelV1ListPurchasableOffersResponse">GoogleCloudChannelV1ListPurchasableOffersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listpurchasableoffersresponse"></a>
<a id="schema_GoogleCloudChannelV1ListPurchasableOffersResponse"></a>
<a id="tocSgooglecloudchannelv1listpurchasableoffersresponse"></a>
<a id="tocsgooglecloudchannelv1listpurchasableoffersresponse"></a>

```json
{
  "nextPageToken": "string",
  "purchasableOffers": [
    {
      "offer": {
        "constraints": {
          "customerConstraints": {
            "allowedCustomerTypes": [
              "CUSTOMER_TYPE_UNSPECIFIED"
            ],
            "allowedRegions": [
              "string"
            ],
            "promotionalOrderTypes": [
              "PROMOTIONAL_TYPE_UNSPECIFIED"
            ]
          }
        },
        "dealCode": "string",
        "endTime": "string",
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "parameterDefinitions": [
          {
            "allowedValues": [
              {
                "boolValue": true,
                "doubleValue": 0,
                "int64Value": "string",
                "protoValue": {
                  "property1": null,
                  "property2": null
                },
                "stringValue": "string"
              }
            ],
            "maxValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "minValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "name": "string",
            "optional": true,
            "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
          }
        ],
        "plan": {
          "billingAccount": "string",
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
          "trialPeriod": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          }
        },
        "priceByResources": [
          {
            "price": {
              "basePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "discount": 0,
              "effectivePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "externalPriceUri": "string"
            },
            "pricePhases": [
              {
                "firstPeriod": 0,
                "lastPeriod": 0,
                "periodType": "PERIOD_TYPE_UNSPECIFIED",
                "price": {
                  "basePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "discount": 0,
                  "effectivePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "externalPriceUri": "string"
                },
                "priceTiers": [
                  {
                    "firstResource": 0,
                    "lastResource": 0,
                    "price": {
                      "basePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "discount": 0,
                      "effectivePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "externalPriceUri": "string"
                    }
                  }
                ]
              }
            ],
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "sku": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string",
          "product": {
            "marketingInfo": {
              "defaultLogo": {
                "content": "string",
                "title": "string",
                "type": "MEDIA_TYPE_UNSPECIFIED"
              },
              "description": "string",
              "displayName": "string"
            },
            "name": "string"
          }
        },
        "startTime": "string"
      }
    }
  ]
}
```

Response message for ListPurchasableOffers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results.|
|purchasableOffers|[[GoogleCloudChannelV1PurchasableOffer](#schemagooglecloudchannelv1purchasableoffer)]|false|none|The list of Offers requested.|

<h2 id="tocS_GoogleCloudChannelV1ListPurchasableSkusResponse">GoogleCloudChannelV1ListPurchasableSkusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listpurchasableskusresponse"></a>
<a id="schema_GoogleCloudChannelV1ListPurchasableSkusResponse"></a>
<a id="tocSgooglecloudchannelv1listpurchasableskusresponse"></a>
<a id="tocsgooglecloudchannelv1listpurchasableskusresponse"></a>

```json
{
  "nextPageToken": "string",
  "purchasableSkus": [
    {
      "sku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      }
    }
  ]
}
```

Response message for ListPurchasableSkus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results.|
|purchasableSkus|[[GoogleCloudChannelV1PurchasableSku](#schemagooglecloudchannelv1purchasablesku)]|false|none|The list of SKUs requested.|

<h2 id="tocS_GoogleCloudChannelV1ListReportsResponse">GoogleCloudChannelV1ListReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listreportsresponse"></a>
<a id="schema_GoogleCloudChannelV1ListReportsResponse"></a>
<a id="tocSgooglecloudchannelv1listreportsresponse"></a>
<a id="tocsgooglecloudchannelv1listreportsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reports": [
    {
      "columns": [
        {
          "columnId": "string",
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "displayName": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    }
  ]
}
```

Response message for CloudChannelReportsService.ListReports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results.|
|reports|[[GoogleCloudChannelV1Report](#schemagooglecloudchannelv1report)]|false|none|The reports available to the partner.|

<h2 id="tocS_GoogleCloudChannelV1ListSkusResponse">GoogleCloudChannelV1ListSkusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listskusresponse"></a>
<a id="schema_GoogleCloudChannelV1ListSkusResponse"></a>
<a id="tocSgooglecloudchannelv1listskusresponse"></a>
<a id="tocsgooglecloudchannelv1listskusresponse"></a>

```json
{
  "nextPageToken": "string",
  "skus": [
    {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string",
      "product": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string"
      }
    }
  ]
}
```

Response message for ListSkus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results.|
|skus|[[GoogleCloudChannelV1Sku](#schemagooglecloudchannelv1sku)]|false|none|The list of SKUs requested.|

<h2 id="tocS_GoogleCloudChannelV1ListSubscribersResponse">GoogleCloudChannelV1ListSubscribersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listsubscribersresponse"></a>
<a id="schema_GoogleCloudChannelV1ListSubscribersResponse"></a>
<a id="tocSgooglecloudchannelv1listsubscribersresponse"></a>
<a id="tocsgooglecloudchannelv1listsubscribersresponse"></a>

```json
{
  "nextPageToken": "string",
  "serviceAccounts": [
    "string"
  ],
  "topic": "string"
}
```

Response Message for ListSubscribers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|serviceAccounts|[string]|false|none|List of service accounts which have subscriber access to the topic.|
|topic|string|false|none|Name of the topic registered with the reseller.|

<h2 id="tocS_GoogleCloudChannelV1ListTransferableOffersRequest">GoogleCloudChannelV1ListTransferableOffersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listtransferableoffersrequest"></a>
<a id="schema_GoogleCloudChannelV1ListTransferableOffersRequest"></a>
<a id="tocSgooglecloudchannelv1listtransferableoffersrequest"></a>
<a id="tocsgooglecloudchannelv1listtransferableoffersrequest"></a>

```json
{
  "cloudIdentityId": "string",
  "customerName": "string",
  "languageCode": "string",
  "pageSize": 0,
  "pageToken": "string",
  "sku": "string"
}
```

Request message for CloudChannelService.ListTransferableOffers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudIdentityId|string|false|none|Customer's Cloud Identity ID|
|customerName|string|false|none|A reseller should create a customer and use the resource name of that customer here.|
|languageCode|string|false|none|Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".|
|pageSize|integer(int32)|false|none|Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000.|
|pageToken|string|false|none|A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call.|
|sku|string|false|none|Required. The SKU to look up Offers for.|

<h2 id="tocS_GoogleCloudChannelV1ListTransferableOffersResponse">GoogleCloudChannelV1ListTransferableOffersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listtransferableoffersresponse"></a>
<a id="schema_GoogleCloudChannelV1ListTransferableOffersResponse"></a>
<a id="tocSgooglecloudchannelv1listtransferableoffersresponse"></a>
<a id="tocsgooglecloudchannelv1listtransferableoffersresponse"></a>

```json
{
  "nextPageToken": "string",
  "transferableOffers": [
    {
      "offer": {
        "constraints": {
          "customerConstraints": {
            "allowedCustomerTypes": [
              "CUSTOMER_TYPE_UNSPECIFIED"
            ],
            "allowedRegions": [
              "string"
            ],
            "promotionalOrderTypes": [
              "PROMOTIONAL_TYPE_UNSPECIFIED"
            ]
          }
        },
        "dealCode": "string",
        "endTime": "string",
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "parameterDefinitions": [
          {
            "allowedValues": [
              {
                "boolValue": true,
                "doubleValue": 0,
                "int64Value": "string",
                "protoValue": {
                  "property1": null,
                  "property2": null
                },
                "stringValue": "string"
              }
            ],
            "maxValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "minValue": {
              "boolValue": true,
              "doubleValue": 0,
              "int64Value": "string",
              "protoValue": {
                "property1": null,
                "property2": null
              },
              "stringValue": "string"
            },
            "name": "string",
            "optional": true,
            "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
          }
        ],
        "plan": {
          "billingAccount": "string",
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
          "trialPeriod": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          }
        },
        "priceByResources": [
          {
            "price": {
              "basePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "discount": 0,
              "effectivePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "externalPriceUri": "string"
            },
            "pricePhases": [
              {
                "firstPeriod": 0,
                "lastPeriod": 0,
                "periodType": "PERIOD_TYPE_UNSPECIFIED",
                "price": {
                  "basePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "discount": 0,
                  "effectivePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "externalPriceUri": "string"
                },
                "priceTiers": [
                  {
                    "firstResource": 0,
                    "lastResource": 0,
                    "price": {
                      "basePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "discount": 0,
                      "effectivePrice": {
                        "currencyCode": "string",
                        "nanos": 0,
                        "units": "string"
                      },
                      "externalPriceUri": "string"
                    }
                  }
                ]
              }
            ],
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "sku": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string",
          "product": {
            "marketingInfo": {
              "defaultLogo": {
                "content": "string",
                "title": "string",
                "type": "MEDIA_TYPE_UNSPECIFIED"
              },
              "description": "string",
              "displayName": "string"
            },
            "name": "string"
          }
        },
        "startTime": "string"
      }
    }
  ]
}
```

Response message for CloudChannelService.ListTransferableOffers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page.|
|transferableOffers|[[GoogleCloudChannelV1TransferableOffer](#schemagooglecloudchannelv1transferableoffer)]|false|none|Information about Offers for a customer that can be used for transfer.|

<h2 id="tocS_GoogleCloudChannelV1ListTransferableSkusRequest">GoogleCloudChannelV1ListTransferableSkusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listtransferableskusrequest"></a>
<a id="schema_GoogleCloudChannelV1ListTransferableSkusRequest"></a>
<a id="tocSgooglecloudchannelv1listtransferableskusrequest"></a>
<a id="tocsgooglecloudchannelv1listtransferableskusrequest"></a>

```json
{
  "authToken": "string",
  "cloudIdentityId": "string",
  "customerName": "string",
  "languageCode": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

Request message for CloudChannelService.ListTransferableSkus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authToken|string|false|none|Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.|
|cloudIdentityId|string|false|none|Customer's Cloud Identity ID|
|customerName|string|false|none|A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id}/customers/{customer_id}|
|languageCode|string|false|none|The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". Optional.|
|pageSize|integer(int32)|false|none|The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional.|
|pageToken|string|false|none|A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional.|

<h2 id="tocS_GoogleCloudChannelV1ListTransferableSkusResponse">GoogleCloudChannelV1ListTransferableSkusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1listtransferableskusresponse"></a>
<a id="schema_GoogleCloudChannelV1ListTransferableSkusResponse"></a>
<a id="tocSgooglecloudchannelv1listtransferableskusresponse"></a>
<a id="tocsgooglecloudchannelv1listtransferableskusresponse"></a>

```json
{
  "nextPageToken": "string",
  "transferableSkus": [
    {
      "legacySku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      },
      "sku": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string",
        "product": {
          "marketingInfo": {
            "defaultLogo": {
              "content": "string",
              "title": "string",
              "type": "MEDIA_TYPE_UNSPECIFIED"
            },
            "description": "string",
            "displayName": "string"
          },
          "name": "string"
        }
      },
      "transferEligibility": {
        "description": "string",
        "ineligibilityReason": "REASON_UNSPECIFIED",
        "isEligible": true
      }
    }
  ]
}
```

Response message for CloudChannelService.ListTransferableSkus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass to ListTransferableSkusRequest.page_token to obtain that page.|
|transferableSkus|[[GoogleCloudChannelV1TransferableSku](#schemagooglecloudchannelv1transferablesku)]|false|none|Information about existing SKUs for a customer that needs a transfer.|

<h2 id="tocS_GoogleCloudChannelV1MarketingInfo">GoogleCloudChannelV1MarketingInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1marketinginfo"></a>
<a id="schema_GoogleCloudChannelV1MarketingInfo"></a>
<a id="tocSgooglecloudchannelv1marketinginfo"></a>
<a id="tocsgooglecloudchannelv1marketinginfo"></a>

```json
{
  "defaultLogo": {
    "content": "string",
    "title": "string",
    "type": "MEDIA_TYPE_UNSPECIFIED"
  },
  "description": "string",
  "displayName": "string"
}
```

Represents the marketing information for a Product, SKU or Offer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLogo|[GoogleCloudChannelV1Media](#schemagooglecloudchannelv1media)|false|none|Default logo.|
|description|string|false|none|Human readable description. Description can contain HTML.|
|displayName|string|false|none|Human readable name.|

<h2 id="tocS_GoogleCloudChannelV1Media">GoogleCloudChannelV1Media</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1media"></a>
<a id="schema_GoogleCloudChannelV1Media"></a>
<a id="tocSgooglecloudchannelv1media"></a>
<a id="tocsgooglecloudchannelv1media"></a>

```json
{
  "content": "string",
  "title": "string",
  "type": "MEDIA_TYPE_UNSPECIFIED"
}
```

Represents media information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|URL of the media.|
|title|string|false|none|Title of the media.|
|type|string|false|none|Type of the media.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MEDIA_TYPE_UNSPECIFIED|
|type|MEDIA_TYPE_IMAGE|

<h2 id="tocS_GoogleCloudChannelV1Offer">GoogleCloudChannelV1Offer</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1offer"></a>
<a id="schema_GoogleCloudChannelV1Offer"></a>
<a id="tocSgooglecloudchannelv1offer"></a>
<a id="tocsgooglecloudchannelv1offer"></a>

```json
{
  "constraints": {
    "customerConstraints": {
      "allowedCustomerTypes": [
        "CUSTOMER_TYPE_UNSPECIFIED"
      ],
      "allowedRegions": [
        "string"
      ],
      "promotionalOrderTypes": [
        "PROMOTIONAL_TYPE_UNSPECIFIED"
      ]
    }
  },
  "dealCode": "string",
  "endTime": "string",
  "marketingInfo": {
    "defaultLogo": {
      "content": "string",
      "title": "string",
      "type": "MEDIA_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string"
  },
  "name": "string",
  "parameterDefinitions": [
    {
      "allowedValues": [
        {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        }
      ],
      "maxValue": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      },
      "minValue": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      },
      "name": "string",
      "optional": true,
      "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
    }
  ],
  "plan": {
    "billingAccount": "string",
    "paymentCycle": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    },
    "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
    "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
    "trialPeriod": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    }
  },
  "priceByResources": [
    {
      "price": {
        "basePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "discount": 0,
        "effectivePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "externalPriceUri": "string"
      },
      "pricePhases": [
        {
          "firstPeriod": 0,
          "lastPeriod": 0,
          "periodType": "PERIOD_TYPE_UNSPECIFIED",
          "price": {
            "basePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "discount": 0,
            "effectivePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "externalPriceUri": "string"
          },
          "priceTiers": [
            {
              "firstResource": 0,
              "lastResource": 0,
              "price": {
                "basePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "discount": 0,
                "effectivePrice": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "externalPriceUri": "string"
              }
            }
          ]
        }
      ],
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "sku": {
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string",
    "product": {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string"
    }
  },
  "startTime": "string"
}
```

Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraints|[GoogleCloudChannelV1Constraints](#schemagooglecloudchannelv1constraints)|false|none|Constraints on transacting the Offer.|
|dealCode|string|false|none|The deal code of the offer to get a special promotion or discount.|
|endTime|string(google-datetime)|false|read-only|Output only. End of the Offer validity time.|
|marketingInfo|[GoogleCloudChannelV1MarketingInfo](#schemagooglecloudchannelv1marketinginfo)|false|none|Marketing information for the Offer.|
|name|string|false|none|Resource Name of the Offer. Format: accounts/{account_id}/offers/{offer_id}|
|parameterDefinitions|[[GoogleCloudChannelV1ParameterDefinition](#schemagooglecloudchannelv1parameterdefinition)]|false|none|Parameters required to use current Offer to purchase.|
|plan|[GoogleCloudChannelV1Plan](#schemagooglecloudchannelv1plan)|false|none|Describes the payment plan for the Offer.|
|priceByResources|[[GoogleCloudChannelV1PriceByResource](#schemagooglecloudchannelv1pricebyresource)]|false|none|Price for each monetizable resource type.|
|sku|[GoogleCloudChannelV1Sku](#schemagooglecloudchannelv1sku)|false|none|SKU the offer is associated with.|
|startTime|string(google-datetime)|false|none|Start of the Offer validity time.|

<h2 id="tocS_GoogleCloudChannelV1OperationMetadata">GoogleCloudChannelV1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1operationmetadata"></a>
<a id="schema_GoogleCloudChannelV1OperationMetadata"></a>
<a id="tocSgooglecloudchannelv1operationmetadata"></a>
<a id="tocsgooglecloudchannelv1operationmetadata"></a>

```json
{
  "operationType": "OPERATION_TYPE_UNSPECIFIED"
}
```

Provides contextual information about a google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationType|string|false|none|The RPC that initiated this Long Running Operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE_ENTITLEMENT|
|operationType|CHANGE_RENEWAL_SETTINGS|
|operationType|START_PAID_SERVICE|
|operationType|ACTIVATE_ENTITLEMENT|
|operationType|SUSPEND_ENTITLEMENT|
|operationType|CANCEL_ENTITLEMENT|
|operationType|TRANSFER_ENTITLEMENTS|
|operationType|TRANSFER_ENTITLEMENTS_TO_GOOGLE|
|operationType|CHANGE_OFFER|
|operationType|CHANGE_PARAMETERS|
|operationType|PROVISION_CLOUD_IDENTITY|

<h2 id="tocS_GoogleCloudChannelV1Parameter">GoogleCloudChannelV1Parameter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1parameter"></a>
<a id="schema_GoogleCloudChannelV1Parameter"></a>
<a id="tocSgooglecloudchannelv1parameter"></a>
<a id="tocsgooglecloudchannelv1parameter"></a>

```json
{
  "editable": true,
  "name": "string",
  "value": {
    "boolValue": true,
    "doubleValue": 0,
    "int64Value": "string",
    "protoValue": {
      "property1": null,
      "property2": null
    },
    "stringValue": "string"
  }
}
```

Definition for extended entitlement parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editable|boolean|false|read-only|Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active.|
|name|string|false|none|Name of the parameter.|
|value|[GoogleCloudChannelV1Value](#schemagooglecloudchannelv1value)|false|none|Value of the parameter.|

<h2 id="tocS_GoogleCloudChannelV1ParameterDefinition">GoogleCloudChannelV1ParameterDefinition</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1parameterdefinition"></a>
<a id="schema_GoogleCloudChannelV1ParameterDefinition"></a>
<a id="tocSgooglecloudchannelv1parameterdefinition"></a>
<a id="tocsgooglecloudchannelv1parameterdefinition"></a>

```json
{
  "allowedValues": [
    {
      "boolValue": true,
      "doubleValue": 0,
      "int64Value": "string",
      "protoValue": {
        "property1": null,
        "property2": null
      },
      "stringValue": "string"
    }
  ],
  "maxValue": {
    "boolValue": true,
    "doubleValue": 0,
    "int64Value": "string",
    "protoValue": {
      "property1": null,
      "property2": null
    },
    "stringValue": "string"
  },
  "minValue": {
    "boolValue": true,
    "doubleValue": 0,
    "int64Value": "string",
    "protoValue": {
      "property1": null,
      "property2": null
    },
    "stringValue": "string"
  },
  "name": "string",
  "optional": true,
  "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
}
```

Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|[[GoogleCloudChannelV1Value](#schemagooglecloudchannelv1value)]|false|none|If not empty, parameter values must be drawn from this list. For example, [us-west1, us-west2, ...] Applicable to STRING parameter type.|
|maxValue|[GoogleCloudChannelV1Value](#schemagooglecloudchannelv1value)|false|none|Maximum value of the parameter, if applicable. Inclusive. For example, maximum seats when purchasing Google Workspace Business Standard. Applicable to INT64 and DOUBLE parameter types.|
|minValue|[GoogleCloudChannelV1Value](#schemagooglecloudchannelv1value)|false|none|Minimal value of the parameter, if applicable. Inclusive. For example, minimal commitment when purchasing Anthos is 0.01. Applicable to INT64 and DOUBLE parameter types.|
|name|string|false|none|Name of the parameter.|
|optional|boolean|false|none|If set to true, parameter is optional to purchase this Offer.|
|parameterType|string|false|none|Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.|

#### Enumerated Values

|Property|Value|
|---|---|
|parameterType|PARAMETER_TYPE_UNSPECIFIED|
|parameterType|INT64|
|parameterType|STRING|
|parameterType|DOUBLE|

<h2 id="tocS_GoogleCloudChannelV1PercentageAdjustment">GoogleCloudChannelV1PercentageAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1percentageadjustment"></a>
<a id="schema_GoogleCloudChannelV1PercentageAdjustment"></a>
<a id="tocSgooglecloudchannelv1percentageadjustment"></a>
<a id="tocsgooglecloudchannelv1percentageadjustment"></a>

```json
{
  "percentage": {
    "value": "string"
  }
}
```

An adjustment that applies a flat markup or markdown to an entire bill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|[GoogleTypeDecimal](#schemagoogletypedecimal)|false|none|The percentage of the bill to adjust. For example: Mark down by 1% => "-1.00" Mark up by 1% => "1.00" Pass-Through => "0.00"|

<h2 id="tocS_GoogleCloudChannelV1Period">GoogleCloudChannelV1Period</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1period"></a>
<a id="schema_GoogleCloudChannelV1Period"></a>
<a id="tocSgooglecloudchannelv1period"></a>
<a id="tocsgooglecloudchannelv1period"></a>

```json
{
  "duration": 0,
  "periodType": "PERIOD_TYPE_UNSPECIFIED"
}
```

Represents period in days/months/years.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer(int32)|false|none|Total duration of Period Type defined.|
|periodType|string|false|none|Period Type.|

#### Enumerated Values

|Property|Value|
|---|---|
|periodType|PERIOD_TYPE_UNSPECIFIED|
|periodType|DAY|
|periodType|MONTH|
|periodType|YEAR|

<h2 id="tocS_GoogleCloudChannelV1Plan">GoogleCloudChannelV1Plan</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1plan"></a>
<a id="schema_GoogleCloudChannelV1Plan"></a>
<a id="tocSgooglecloudchannelv1plan"></a>
<a id="tocsgooglecloudchannelv1plan"></a>

```json
{
  "billingAccount": "string",
  "paymentCycle": {
    "duration": 0,
    "periodType": "PERIOD_TYPE_UNSPECIFIED"
  },
  "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
  "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
  "trialPeriod": {
    "duration": 0,
    "periodType": "PERIOD_TYPE_UNSPECIFIED"
  }
}
```

The payment plan for the Offer. Describes how to make a payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAccount|string|false|none|Reseller Billing account to charge after an offer transaction. Only present for Google Cloud Platform offers.|
|paymentCycle|[GoogleCloudChannelV1Period](#schemagooglecloudchannelv1period)|false|none|Describes how frequently the reseller will be billed, such as once per month.|
|paymentPlan|string|false|none|Describes how a reseller will be billed.|
|paymentType|string|false|none|Specifies when the payment needs to happen.|
|trialPeriod|[GoogleCloudChannelV1Period](#schemagooglecloudchannelv1period)|false|none|Present for Offers with a trial period. For trial-only Offers, a paid service needs to start before the trial period ends for continued service. For Regular Offers with a trial period, the regular pricing goes into effect when trial period ends, or if paid service is started before the end of the trial period.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentPlan|PAYMENT_PLAN_UNSPECIFIED|
|paymentPlan|COMMITMENT|
|paymentPlan|FLEXIBLE|
|paymentPlan|FREE|
|paymentPlan|TRIAL|
|paymentPlan|OFFLINE|
|paymentType|PAYMENT_TYPE_UNSPECIFIED|
|paymentType|PREPAY|
|paymentType|POSTPAY|

<h2 id="tocS_GoogleCloudChannelV1Price">GoogleCloudChannelV1Price</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1price"></a>
<a id="schema_GoogleCloudChannelV1Price"></a>
<a id="tocSgooglecloudchannelv1price"></a>
<a id="tocsgooglecloudchannelv1price"></a>

```json
{
  "basePrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "discount": 0,
  "effectivePrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "externalPriceUri": "string"
}
```

Represents the price of the Offer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePrice|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Base price.|
|discount|number(double)|false|none|Discount percentage, represented as decimal. For example, a 20% discount will be represent as 0.2.|
|effectivePrice|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Effective Price after applying the discounts.|
|externalPriceUri|string|false|none|Link to external price list, such as link to Google Voice rate card.|

<h2 id="tocS_GoogleCloudChannelV1PriceByResource">GoogleCloudChannelV1PriceByResource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1pricebyresource"></a>
<a id="schema_GoogleCloudChannelV1PriceByResource"></a>
<a id="tocSgooglecloudchannelv1pricebyresource"></a>
<a id="tocsgooglecloudchannelv1pricebyresource"></a>

```json
{
  "price": {
    "basePrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "discount": 0,
    "effectivePrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "externalPriceUri": "string"
  },
  "pricePhases": [
    {
      "firstPeriod": 0,
      "lastPeriod": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED",
      "price": {
        "basePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "discount": 0,
        "effectivePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "externalPriceUri": "string"
      },
      "priceTiers": [
        {
          "firstResource": 0,
          "lastResource": 0,
          "price": {
            "basePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "discount": 0,
            "effectivePrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "externalPriceUri": "string"
          }
        }
      ]
    }
  ],
  "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
}
```

Represents price by resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|[GoogleCloudChannelV1Price](#schemagooglecloudchannelv1price)|false|none|Price of the Offer. Present if there are no price phases.|
|pricePhases|[[GoogleCloudChannelV1PricePhase](#schemagooglecloudchannelv1pricephase)]|false|none|Specifies the price by time range.|
|resourceType|string|false|none|Resource Type. Example: SEAT|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|RESOURCE_TYPE_UNSPECIFIED|
|resourceType|SEAT|
|resourceType|MAU|
|resourceType|GB|
|resourceType|LICENSED_USER|
|resourceType|MINUTES|
|resourceType|IAAS_USAGE|
|resourceType|SUBSCRIPTION|

<h2 id="tocS_GoogleCloudChannelV1PricePhase">GoogleCloudChannelV1PricePhase</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1pricephase"></a>
<a id="schema_GoogleCloudChannelV1PricePhase"></a>
<a id="tocSgooglecloudchannelv1pricephase"></a>
<a id="tocsgooglecloudchannelv1pricephase"></a>

```json
{
  "firstPeriod": 0,
  "lastPeriod": 0,
  "periodType": "PERIOD_TYPE_UNSPECIFIED",
  "price": {
    "basePrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "discount": 0,
    "effectivePrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "externalPriceUri": "string"
  },
  "priceTiers": [
    {
      "firstResource": 0,
      "lastResource": 0,
      "price": {
        "basePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "discount": 0,
        "effectivePrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "externalPriceUri": "string"
      }
    }
  ]
}
```

Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstPeriod|integer(int32)|false|none|Defines first period for the phase.|
|lastPeriod|integer(int32)|false|none|Defines first period for the phase.|
|periodType|string|false|none|Defines the phase period type.|
|price|[GoogleCloudChannelV1Price](#schemagooglecloudchannelv1price)|false|none|Price of the phase. Present if there are no price tiers.|
|priceTiers|[[GoogleCloudChannelV1PriceTier](#schemagooglecloudchannelv1pricetier)]|false|none|Price by the resource tiers.|

#### Enumerated Values

|Property|Value|
|---|---|
|periodType|PERIOD_TYPE_UNSPECIFIED|
|periodType|DAY|
|periodType|MONTH|
|periodType|YEAR|

<h2 id="tocS_GoogleCloudChannelV1PriceTier">GoogleCloudChannelV1PriceTier</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1pricetier"></a>
<a id="schema_GoogleCloudChannelV1PriceTier"></a>
<a id="tocSgooglecloudchannelv1pricetier"></a>
<a id="tocsgooglecloudchannelv1pricetier"></a>

```json
{
  "firstResource": 0,
  "lastResource": 0,
  "price": {
    "basePrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "discount": 0,
    "effectivePrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "externalPriceUri": "string"
  }
}
```

Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstResource|integer(int32)|false|none|First resource for which the tier price applies.|
|lastResource|integer(int32)|false|none|Last resource for which the tier price applies.|
|price|[GoogleCloudChannelV1Price](#schemagooglecloudchannelv1price)|false|none|Price of the tier.|

<h2 id="tocS_GoogleCloudChannelV1Product">GoogleCloudChannelV1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1product"></a>
<a id="schema_GoogleCloudChannelV1Product"></a>
<a id="tocSgooglecloudchannelv1product"></a>
<a id="tocsgooglecloudchannelv1product"></a>

```json
{
  "marketingInfo": {
    "defaultLogo": {
      "content": "string",
      "title": "string",
      "type": "MEDIA_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string"
  },
  "name": "string"
}
```

A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketingInfo|[GoogleCloudChannelV1MarketingInfo](#schemagooglecloudchannelv1marketinginfo)|false|none|Marketing information for the product.|
|name|string|false|none|Resource Name of the Product. Format: products/{product_id}|

<h2 id="tocS_GoogleCloudChannelV1ProvisionCloudIdentityRequest">GoogleCloudChannelV1ProvisionCloudIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1provisioncloudidentityrequest"></a>
<a id="schema_GoogleCloudChannelV1ProvisionCloudIdentityRequest"></a>
<a id="tocSgooglecloudchannelv1provisioncloudidentityrequest"></a>
<a id="tocsgooglecloudchannelv1provisioncloudidentityrequest"></a>

```json
{
  "cloudIdentityInfo": {
    "adminConsoleUri": "string",
    "alternateEmail": "string",
    "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
    "eduData": {
      "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
      "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
      "website": "string"
    },
    "isDomainVerified": true,
    "languageCode": "string",
    "phoneNumber": "string",
    "primaryDomain": "string"
  },
  "user": {
    "email": "string",
    "familyName": "string",
    "givenName": "string"
  },
  "validateOnly": true
}
```

Request message for CloudChannelService.ProvisionCloudIdentity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudIdentityInfo|[GoogleCloudChannelV1CloudIdentityInfo](#schemagooglecloudchannelv1cloudidentityinfo)|false|none|CloudIdentity-specific customer information.|
|user|[GoogleCloudChannelV1AdminUser](#schemagooglecloudchannelv1adminuser)|false|none|Admin user information.|
|validateOnly|boolean|false|none|Validate the request and preview the review, but do not post it.|

<h2 id="tocS_GoogleCloudChannelV1ProvisionedService">GoogleCloudChannelV1ProvisionedService</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1provisionedservice"></a>
<a id="schema_GoogleCloudChannelV1ProvisionedService"></a>
<a id="tocSgooglecloudchannelv1provisionedservice"></a>
<a id="tocsgooglecloudchannelv1provisionedservice"></a>

```json
{
  "productId": "string",
  "provisioningId": "string",
  "skuId": "string"
}
```

Service provisioned for an entitlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|false|read-only|Output only. The product pertaining to the provisioning resource as specified in the Offer.|
|provisioningId|string|false|read-only|Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud Platform, this is the Billing Account ID of the billing subaccount."|
|skuId|string|false|read-only|Output only. The SKU pertaining to the provisioning resource as specified in the Offer.|

<h2 id="tocS_GoogleCloudChannelV1PurchasableOffer">GoogleCloudChannelV1PurchasableOffer</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1purchasableoffer"></a>
<a id="schema_GoogleCloudChannelV1PurchasableOffer"></a>
<a id="tocSgooglecloudchannelv1purchasableoffer"></a>
<a id="tocsgooglecloudchannelv1purchasableoffer"></a>

```json
{
  "offer": {
    "constraints": {
      "customerConstraints": {
        "allowedCustomerTypes": [
          "CUSTOMER_TYPE_UNSPECIFIED"
        ],
        "allowedRegions": [
          "string"
        ],
        "promotionalOrderTypes": [
          "PROMOTIONAL_TYPE_UNSPECIFIED"
        ]
      }
    },
    "dealCode": "string",
    "endTime": "string",
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string",
    "parameterDefinitions": [
      {
        "allowedValues": [
          {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        ],
        "maxValue": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        },
        "minValue": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        },
        "name": "string",
        "optional": true,
        "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
      }
    ],
    "plan": {
      "billingAccount": "string",
      "paymentCycle": {
        "duration": 0,
        "periodType": "PERIOD_TYPE_UNSPECIFIED"
      },
      "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
      "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
      "trialPeriod": {
        "duration": 0,
        "periodType": "PERIOD_TYPE_UNSPECIFIED"
      }
    },
    "priceByResources": [
      {
        "price": {
          "basePrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "discount": 0,
          "effectivePrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "externalPriceUri": "string"
        },
        "pricePhases": [
          {
            "firstPeriod": 0,
            "lastPeriod": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED",
            "price": {
              "basePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "discount": 0,
              "effectivePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "externalPriceUri": "string"
            },
            "priceTiers": [
              {
                "firstResource": 0,
                "lastResource": 0,
                "price": {
                  "basePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "discount": 0,
                  "effectivePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "externalPriceUri": "string"
                }
              }
            ]
          }
        ],
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
      }
    ],
    "sku": {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string",
      "product": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string"
      }
    },
    "startTime": "string"
  }
}
```

Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offer|[GoogleCloudChannelV1Offer](#schemagooglecloudchannelv1offer)|false|none|Offer.|

<h2 id="tocS_GoogleCloudChannelV1PurchasableSku">GoogleCloudChannelV1PurchasableSku</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1purchasablesku"></a>
<a id="schema_GoogleCloudChannelV1PurchasableSku"></a>
<a id="tocSgooglecloudchannelv1purchasablesku"></a>
<a id="tocsgooglecloudchannelv1purchasablesku"></a>

```json
{
  "sku": {
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string",
    "product": {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string"
    }
  }
}
```

SKU that you can purchase. This is used in ListPurchasableSku API response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sku|[GoogleCloudChannelV1Sku](#schemagooglecloudchannelv1sku)|false|none|SKU|

<h2 id="tocS_GoogleCloudChannelV1RegisterSubscriberRequest">GoogleCloudChannelV1RegisterSubscriberRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1registersubscriberrequest"></a>
<a id="schema_GoogleCloudChannelV1RegisterSubscriberRequest"></a>
<a id="tocSgooglecloudchannelv1registersubscriberrequest"></a>
<a id="tocsgooglecloudchannelv1registersubscriberrequest"></a>

```json
{
  "serviceAccount": "string"
}
```

Request Message for RegisterSubscriber.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccount|string|false|none|Required. Service account that provides subscriber access to the registered topic.|

<h2 id="tocS_GoogleCloudChannelV1RegisterSubscriberResponse">GoogleCloudChannelV1RegisterSubscriberResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1registersubscriberresponse"></a>
<a id="schema_GoogleCloudChannelV1RegisterSubscriberResponse"></a>
<a id="tocSgooglecloudchannelv1registersubscriberresponse"></a>
<a id="tocsgooglecloudchannelv1registersubscriberresponse"></a>

```json
{
  "topic": "string"
}
```

Response Message for RegisterSubscriber.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|Name of the topic the subscriber will listen to.|

<h2 id="tocS_GoogleCloudChannelV1RenewalSettings">GoogleCloudChannelV1RenewalSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1renewalsettings"></a>
<a id="schema_GoogleCloudChannelV1RenewalSettings"></a>
<a id="tocSgooglecloudchannelv1renewalsettings"></a>
<a id="tocsgooglecloudchannelv1renewalsettings"></a>

```json
{
  "enableRenewal": true,
  "paymentCycle": {
    "duration": 0,
    "periodType": "PERIOD_TYPE_UNSPECIFIED"
  },
  "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
  "resizeUnitCount": true
}
```

Renewal settings for renewable Offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableRenewal|boolean|false|none|If false, the plan will be completed at the end date.|
|paymentCycle|[GoogleCloudChannelV1Period](#schemagooglecloudchannelv1period)|false|none|Describes how frequently the reseller will be billed, such as once per month.|
|paymentPlan|string|false|none|Describes how a reseller will be billed.|
|resizeUnitCount|boolean|false|none|If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentPlan|PAYMENT_PLAN_UNSPECIFIED|
|paymentPlan|COMMITMENT|
|paymentPlan|FLEXIBLE|
|paymentPlan|FREE|
|paymentPlan|TRIAL|
|paymentPlan|OFFLINE|

<h2 id="tocS_GoogleCloudChannelV1Report">GoogleCloudChannelV1Report</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1report"></a>
<a id="schema_GoogleCloudChannelV1Report"></a>
<a id="tocSgooglecloudchannelv1report"></a>
<a id="tocsgooglecloudchannelv1report"></a>

```json
{
  "columns": [
    {
      "columnId": "string",
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "displayName": "string"
    }
  ],
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[GoogleCloudChannelV1Column](#schemagooglecloudchannelv1column)]|false|none|The list of columns included in the report. This defines the schema of the report results.|
|description|string|false|none|A description of other aspects of the report, such as the products it supports.|
|displayName|string|false|none|A human-readable name for this report.|
|name|string|false|none|Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}|

<h2 id="tocS_GoogleCloudChannelV1ReportJob">GoogleCloudChannelV1ReportJob</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1reportjob"></a>
<a id="schema_GoogleCloudChannelV1ReportJob"></a>
<a id="tocSgooglecloudchannelv1reportjob"></a>
<a id="tocsgooglecloudchannelv1reportjob"></a>

```json
{
  "name": "string",
  "reportStatus": {
    "endTime": "string",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}`|
|reportStatus|[GoogleCloudChannelV1ReportStatus](#schemagooglecloudchannelv1reportstatus)|false|none|The current status of report generation.|

<h2 id="tocS_GoogleCloudChannelV1ReportResultsMetadata">GoogleCloudChannelV1ReportResultsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1reportresultsmetadata"></a>
<a id="schema_GoogleCloudChannelV1ReportResultsMetadata"></a>
<a id="tocSgooglecloudchannelv1reportresultsmetadata"></a>
<a id="tocsgooglecloudchannelv1reportresultsmetadata"></a>

```json
{
  "dateRange": {
    "invoiceEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "invoiceStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "usageEndDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "usageStartDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    }
  },
  "precedingDateRange": {
    "invoiceEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "invoiceStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "usageEndDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "usageStartDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    }
  },
  "report": {
    "columns": [
      {
        "columnId": "string",
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "displayName": "string"
      }
    ],
    "description": "string",
    "displayName": "string",
    "name": "string"
  },
  "rowCount": "string"
}
```

The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[GoogleCloudChannelV1DateRange](#schemagooglecloudchannelv1daterange)|false|none|The date range of reported usage.|
|precedingDateRange|[GoogleCloudChannelV1DateRange](#schemagooglecloudchannelv1daterange)|false|none|The usage dates immediately preceding `date_range` with the same duration. Use this to calculate trending usage and costs. This is only populated if you request trending data. For example, if `date_range` is July 1-15, `preceding_date_range` will be June 16-30.|
|report|[GoogleCloudChannelV1Report](#schemagooglecloudchannelv1report)|false|none|Details of the completed report.|
|rowCount|string(int64)|false|none|The total number of rows of data in the final report.|

<h2 id="tocS_GoogleCloudChannelV1ReportStatus">GoogleCloudChannelV1ReportStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1reportstatus"></a>
<a id="schema_GoogleCloudChannelV1ReportStatus"></a>
<a id="tocSgooglecloudchannelv1reportstatus"></a>
<a id="tocsgooglecloudchannelv1reportstatus"></a>

```json
{
  "endTime": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Status of a report generation process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The report generation's completion time.|
|startTime|string(google-datetime)|false|none|The report generation's start time.|
|state|string|false|none|The current state of the report generation process.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STARTED|
|state|WRITING|
|state|AVAILABLE|
|state|FAILED|

<h2 id="tocS_GoogleCloudChannelV1ReportValue">GoogleCloudChannelV1ReportValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1reportvalue"></a>
<a id="schema_GoogleCloudChannelV1ReportValue"></a>
<a id="tocSgooglecloudchannelv1reportvalue"></a>
<a id="tocsgooglecloudchannelv1reportvalue"></a>

```json
{
  "dateTimeValue": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  },
  "dateValue": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "decimalValue": {
    "value": "string"
  },
  "intValue": "string",
  "moneyValue": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "stringValue": "string"
}
```

A single report value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTimeValue|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|A value of type `google.type.DateTime` (year, month, day, hour, minute, second, and UTC offset or timezone.)|
|dateValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|A value of type `google.type.Date` (year, month, day).|
|decimalValue|[GoogleTypeDecimal](#schemagoogletypedecimal)|false|none|A value of type `google.type.Decimal`, representing non-integer numeric values.|
|intValue|string(int64)|false|none|A value of type `int`.|
|moneyValue|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|A value of type `google.type.Money` (currency code, whole units, decimal units).|
|stringValue|string|false|none|A value of type `string`.|

<h2 id="tocS_GoogleCloudChannelV1RepricingAdjustment">GoogleCloudChannelV1RepricingAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1repricingadjustment"></a>
<a id="schema_GoogleCloudChannelV1RepricingAdjustment"></a>
<a id="tocSgooglecloudchannelv1repricingadjustment"></a>
<a id="tocsgooglecloudchannelv1repricingadjustment"></a>

```json
{
  "percentageAdjustment": {
    "percentage": {
      "value": "string"
    }
  }
}
```

A type that represents the various adjustments you can apply to a bill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentageAdjustment|[GoogleCloudChannelV1PercentageAdjustment](#schemagooglecloudchannelv1percentageadjustment)|false|none|Flat markup or markdown on an entire bill.|

<h2 id="tocS_GoogleCloudChannelV1RepricingCondition">GoogleCloudChannelV1RepricingCondition</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1repricingcondition"></a>
<a id="schema_GoogleCloudChannelV1RepricingCondition"></a>
<a id="tocSgooglecloudchannelv1repricingcondition"></a>
<a id="tocsgooglecloudchannelv1repricingcondition"></a>

```json
{
  "skuGroupCondition": {
    "skuGroup": "string"
  }
}
```

Represents the various repricing conditions you can use for a conditional override.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|skuGroupCondition|[GoogleCloudChannelV1SkuGroupCondition](#schemagooglecloudchannelv1skugroupcondition)|false|none|SKU Group condition for override.|

<h2 id="tocS_GoogleCloudChannelV1RepricingConfig">GoogleCloudChannelV1RepricingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1repricingconfig"></a>
<a id="schema_GoogleCloudChannelV1RepricingConfig"></a>
<a id="tocSgooglecloudchannelv1repricingconfig"></a>
<a id="tocsgooglecloudchannelv1repricingconfig"></a>

```json
{
  "adjustment": {
    "percentageAdjustment": {
      "percentage": {
        "value": "string"
      }
    }
  },
  "channelPartnerGranularity": {},
  "conditionalOverrides": [
    {
      "adjustment": {
        "percentageAdjustment": {
          "percentage": {
            "value": "string"
          }
        }
      },
      "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED",
      "repricingCondition": {
        "skuGroupCondition": {
          "skuGroup": "string"
        }
      }
    }
  ],
  "effectiveInvoiceMonth": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "entitlementGranularity": {
    "entitlement": "string"
  },
  "rebillingBasis": "REBILLING_BASIS_UNSPECIFIED"
}
```

Configuration for repricing a Google bill over a period of time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustment|[GoogleCloudChannelV1RepricingAdjustment](#schemagooglecloudchannelv1repricingadjustment)|false|none|Required. Information about the adjustment.|
|channelPartnerGranularity|[GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity](#schemagooglecloudchannelv1repricingconfigchannelpartnergranularity)|false|none|Applies the repricing configuration at the channel partner level. This is the only supported value for ChannelPartnerRepricingConfig.|
|conditionalOverrides|[[GoogleCloudChannelV1ConditionalOverride](#schemagooglecloudchannelv1conditionaloverride)]|false|none|The conditional overrides to apply for this configuration. If you list multiple overrides, only the first valid override is used. If you don't list any overrides, the API uses the normal adjustment and rebilling basis.|
|effectiveInvoiceMonth|[GoogleTypeDate](#schemagoogletypedate)|false|none|Required. The YearMonth when these adjustments activate. The Day field needs to be "0" since we only accept YearMonth repricing boundaries.|
|entitlementGranularity|[GoogleCloudChannelV1RepricingConfigEntitlementGranularity](#schemagooglecloudchannelv1repricingconfigentitlementgranularity)|false|none|Applies the repricing configuration at the entitlement level. This is the only supported value for CustomerRepricingConfig.|
|rebillingBasis|string|false|none|Required. The RebillingBasis to use for this bill. Specifies the relative cost based on repricing costs you will apply.|

#### Enumerated Values

|Property|Value|
|---|---|
|rebillingBasis|REBILLING_BASIS_UNSPECIFIED|
|rebillingBasis|COST_AT_LIST|
|rebillingBasis|DIRECT_CUSTOMER_COST|

<h2 id="tocS_GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity">GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1repricingconfigchannelpartnergranularity"></a>
<a id="schema_GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity"></a>
<a id="tocSgooglecloudchannelv1repricingconfigchannelpartnergranularity"></a>
<a id="tocsgooglecloudchannelv1repricingconfigchannelpartnergranularity"></a>

```json
{}
```

Applies the repricing configuration at the channel partner level. The channel partner value is derived from the resource name. Takes an empty json object.

<h2 id="tocS_GoogleCloudChannelV1RepricingConfigEntitlementGranularity">GoogleCloudChannelV1RepricingConfigEntitlementGranularity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1repricingconfigentitlementgranularity"></a>
<a id="schema_GoogleCloudChannelV1RepricingConfigEntitlementGranularity"></a>
<a id="tocSgooglecloudchannelv1repricingconfigentitlementgranularity"></a>
<a id="tocsgooglecloudchannelv1repricingconfigentitlementgranularity"></a>

```json
{
  "entitlement": "string"
}
```

Applies the repricing configuration at the entitlement level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement|string|false|none|Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|

<h2 id="tocS_GoogleCloudChannelV1Row">GoogleCloudChannelV1Row</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1row"></a>
<a id="schema_GoogleCloudChannelV1Row"></a>
<a id="tocSgooglecloudchannelv1row"></a>
<a id="tocsgooglecloudchannelv1row"></a>

```json
{
  "values": [
    {
      "dateTimeValue": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "dateValue": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "decimalValue": {
        "value": "string"
      },
      "intValue": "string",
      "moneyValue": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "stringValue": "string"
    }
  ]
}
```

A row of report values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[[GoogleCloudChannelV1ReportValue](#schemagooglecloudchannelv1reportvalue)]|false|none|The list of values in the row.|

<h2 id="tocS_GoogleCloudChannelV1RunReportJobRequest">GoogleCloudChannelV1RunReportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1runreportjobrequest"></a>
<a id="schema_GoogleCloudChannelV1RunReportJobRequest"></a>
<a id="tocSgooglecloudchannelv1runreportjobrequest"></a>
<a id="tocsgooglecloudchannelv1runreportjobrequest"></a>

```json
{
  "dateRange": {
    "invoiceEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "invoiceStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "usageEndDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "usageStartDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    }
  },
  "filter": "string",
  "languageCode": "string"
}
```

Request message for CloudChannelReportsService.RunReportJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[GoogleCloudChannelV1DateRange](#schemagooglecloudchannelv1daterange)|false|none|Optional. The range of usage or invoice dates to include in the result.|
|filter|string|false|none|Optional. A structured string that defines conditions on dimension columns to restrict the report output. Filters support logical operators (AND, OR, NOT) and conditional operators (=, !=, <, >, <=, and >=) using `column_id` as keys. For example: `(customer:"accounts/C123abc/customers/S456def" OR customer:"accounts/C123abc/customers/S789ghi") AND invoice_start_date.year >= 2022`|
|languageCode|string|false|none|Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US".|

<h2 id="tocS_GoogleCloudChannelV1RunReportJobResponse">GoogleCloudChannelV1RunReportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1runreportjobresponse"></a>
<a id="schema_GoogleCloudChannelV1RunReportJobResponse"></a>
<a id="tocSgooglecloudchannelv1runreportjobresponse"></a>
<a id="tocsgooglecloudchannelv1runreportjobresponse"></a>

```json
{
  "reportJob": {
    "name": "string",
    "reportStatus": {
      "endTime": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  },
  "reportMetadata": {
    "dateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "precedingDateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "report": {
      "columns": [
        {
          "columnId": "string",
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "displayName": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    },
    "rowCount": "string"
  }
}
```

Response message for CloudChannelReportsService.RunReportJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportJob|[GoogleCloudChannelV1ReportJob](#schemagooglecloudchannelv1reportjob)|false|none|Pass `report_job.name` to FetchReportResultsRequest.report_job to retrieve the report's results.|
|reportMetadata|[GoogleCloudChannelV1ReportResultsMetadata](#schemagooglecloudchannelv1reportresultsmetadata)|false|none|The metadata for the report's results (display name, columns, row count, and date range). If you view this before the operation finishes, you may see incomplete data.|

<h2 id="tocS_GoogleCloudChannelV1Sku">GoogleCloudChannelV1Sku</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1sku"></a>
<a id="schema_GoogleCloudChannelV1Sku"></a>
<a id="tocSgooglecloudchannelv1sku"></a>
<a id="tocsgooglecloudchannelv1sku"></a>

```json
{
  "marketingInfo": {
    "defaultLogo": {
      "content": "string",
      "title": "string",
      "type": "MEDIA_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string"
  },
  "name": "string",
  "product": {
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string"
  }
}
```

Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketingInfo|[GoogleCloudChannelV1MarketingInfo](#schemagooglecloudchannelv1marketinginfo)|false|none|Marketing information for the SKU.|
|name|string|false|none|Resource Name of the SKU. Format: products/{product_id}/skus/{sku_id}|
|product|[GoogleCloudChannelV1Product](#schemagooglecloudchannelv1product)|false|none|Product the SKU is associated with.|

<h2 id="tocS_GoogleCloudChannelV1SkuGroupCondition">GoogleCloudChannelV1SkuGroupCondition</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1skugroupcondition"></a>
<a id="schema_GoogleCloudChannelV1SkuGroupCondition"></a>
<a id="tocSgooglecloudchannelv1skugroupcondition"></a>
<a id="tocsgooglecloudchannelv1skugroupcondition"></a>

```json
{
  "skuGroup": "string"
}
```

A condition that applies the override if a line item SKU is found in the SKU group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|skuGroup|string|false|none|Specifies a SKU group (https://cloud.google.com/skus/sku-groups). Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041".|

<h2 id="tocS_GoogleCloudChannelV1StartPaidServiceRequest">GoogleCloudChannelV1StartPaidServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1startpaidservicerequest"></a>
<a id="schema_GoogleCloudChannelV1StartPaidServiceRequest"></a>
<a id="tocSgooglecloudchannelv1startpaidservicerequest"></a>
<a id="tocsgooglecloudchannelv1startpaidservicerequest"></a>

```json
{
  "requestId": "string"
}
```

Request message for CloudChannelService.StartPaidService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1SubscriberEvent">GoogleCloudChannelV1SubscriberEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1subscriberevent"></a>
<a id="schema_GoogleCloudChannelV1SubscriberEvent"></a>
<a id="tocSgooglecloudchannelv1subscriberevent"></a>
<a id="tocsgooglecloudchannelv1subscriberevent"></a>

```json
{
  "customerEvent": {
    "customer": "string",
    "eventType": "TYPE_UNSPECIFIED"
  },
  "entitlementEvent": {
    "entitlement": "string",
    "eventType": "TYPE_UNSPECIFIED"
  }
}
```

Represents information which resellers will get as part of notification from Pub/Sub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerEvent|[GoogleCloudChannelV1CustomerEvent](#schemagooglecloudchannelv1customerevent)|false|none|Customer event sent as part of Pub/Sub event to partners.|
|entitlementEvent|[GoogleCloudChannelV1EntitlementEvent](#schemagooglecloudchannelv1entitlementevent)|false|none|Entitlement event sent as part of Pub/Sub event to partners.|

<h2 id="tocS_GoogleCloudChannelV1SuspendEntitlementRequest">GoogleCloudChannelV1SuspendEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1suspendentitlementrequest"></a>
<a id="schema_GoogleCloudChannelV1SuspendEntitlementRequest"></a>
<a id="tocSgooglecloudchannelv1suspendentitlementrequest"></a>
<a id="tocsgooglecloudchannelv1suspendentitlementrequest"></a>

```json
{
  "requestId": "string"
}
```

Request message for CloudChannelService.SuspendEntitlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1TransferEligibility">GoogleCloudChannelV1TransferEligibility</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1transfereligibility"></a>
<a id="schema_GoogleCloudChannelV1TransferEligibility"></a>
<a id="tocSgooglecloudchannelv1transfereligibility"></a>
<a id="tocsgooglecloudchannelv1transfereligibility"></a>

```json
{
  "description": "string",
  "ineligibilityReason": "REASON_UNSPECIFIED",
  "isEligible": true
}
```

Specifies transfer eligibility of a SKU.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Localized description if reseller is not eligible to transfer the SKU.|
|ineligibilityReason|string|false|none|Specified the reason for ineligibility.|
|isEligible|boolean|false|none|Whether reseller is eligible to transfer the SKU.|

#### Enumerated Values

|Property|Value|
|---|---|
|ineligibilityReason|REASON_UNSPECIFIED|
|ineligibilityReason|PENDING_TOS_ACCEPTANCE|
|ineligibilityReason|SKU_NOT_ELIGIBLE|
|ineligibilityReason|SKU_SUSPENDED|

<h2 id="tocS_GoogleCloudChannelV1TransferEntitlementsRequest">GoogleCloudChannelV1TransferEntitlementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1transferentitlementsrequest"></a>
<a id="schema_GoogleCloudChannelV1TransferEntitlementsRequest"></a>
<a id="tocSgooglecloudchannelv1transferentitlementsrequest"></a>
<a id="tocsgooglecloudchannelv1transferentitlementsrequest"></a>

```json
{
  "authToken": "string",
  "entitlements": [
    {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "endTime": "string",
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        },
        "startTime": "string"
      },
      "createTime": "string",
      "name": "string",
      "offer": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
      "purchaseOrderId": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "trialSettings": {
        "endTime": "string",
        "trial": true
      },
      "updateTime": "string"
    }
  ],
  "requestId": "string"
}
```

Request message for CloudChannelService.TransferEntitlements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authToken|string|false|none|The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.|
|entitlements|[[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)]|false|none|Required. The new entitlements to create or transfer.|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1TransferEntitlementsResponse">GoogleCloudChannelV1TransferEntitlementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1transferentitlementsresponse"></a>
<a id="schema_GoogleCloudChannelV1TransferEntitlementsResponse"></a>
<a id="tocSgooglecloudchannelv1transferentitlementsresponse"></a>
<a id="tocsgooglecloudchannelv1transferentitlementsresponse"></a>

```json
{
  "entitlements": [
    {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "endTime": "string",
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        },
        "startTime": "string"
      },
      "createTime": "string",
      "name": "string",
      "offer": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
      "purchaseOrderId": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "trialSettings": {
        "endTime": "string",
        "trial": true
      },
      "updateTime": "string"
    }
  ]
}
```

Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlements|[[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)]|false|none|The transferred entitlements.|

<h2 id="tocS_GoogleCloudChannelV1TransferEntitlementsToGoogleRequest">GoogleCloudChannelV1TransferEntitlementsToGoogleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1transferentitlementstogooglerequest"></a>
<a id="schema_GoogleCloudChannelV1TransferEntitlementsToGoogleRequest"></a>
<a id="tocSgooglecloudchannelv1transferentitlementstogooglerequest"></a>
<a id="tocsgooglecloudchannelv1transferentitlementstogooglerequest"></a>

```json
{
  "entitlements": [
    {
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "commitmentSettings": {
        "endTime": "string",
        "renewalSettings": {
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true
        },
        "startTime": "string"
      },
      "createTime": "string",
      "name": "string",
      "offer": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
      "purchaseOrderId": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "trialSettings": {
        "endTime": "string",
        "trial": true
      },
      "updateTime": "string"
    }
  ],
  "requestId": "string"
}
```

Request message for CloudChannelService.TransferEntitlementsToGoogle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlements|[[GoogleCloudChannelV1Entitlement](#schemagooglecloudchannelv1entitlement)]|false|none|Required. The entitlements to transfer to Google.|
|requestId|string|false|none|Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).|

<h2 id="tocS_GoogleCloudChannelV1TransferableOffer">GoogleCloudChannelV1TransferableOffer</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1transferableoffer"></a>
<a id="schema_GoogleCloudChannelV1TransferableOffer"></a>
<a id="tocSgooglecloudchannelv1transferableoffer"></a>
<a id="tocsgooglecloudchannelv1transferableoffer"></a>

```json
{
  "offer": {
    "constraints": {
      "customerConstraints": {
        "allowedCustomerTypes": [
          "CUSTOMER_TYPE_UNSPECIFIED"
        ],
        "allowedRegions": [
          "string"
        ],
        "promotionalOrderTypes": [
          "PROMOTIONAL_TYPE_UNSPECIFIED"
        ]
      }
    },
    "dealCode": "string",
    "endTime": "string",
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string",
    "parameterDefinitions": [
      {
        "allowedValues": [
          {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        ],
        "maxValue": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        },
        "minValue": {
          "boolValue": true,
          "doubleValue": 0,
          "int64Value": "string",
          "protoValue": {
            "property1": null,
            "property2": null
          },
          "stringValue": "string"
        },
        "name": "string",
        "optional": true,
        "parameterType": "PARAMETER_TYPE_UNSPECIFIED"
      }
    ],
    "plan": {
      "billingAccount": "string",
      "paymentCycle": {
        "duration": 0,
        "periodType": "PERIOD_TYPE_UNSPECIFIED"
      },
      "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
      "paymentType": "PAYMENT_TYPE_UNSPECIFIED",
      "trialPeriod": {
        "duration": 0,
        "periodType": "PERIOD_TYPE_UNSPECIFIED"
      }
    },
    "priceByResources": [
      {
        "price": {
          "basePrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "discount": 0,
          "effectivePrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "externalPriceUri": "string"
        },
        "pricePhases": [
          {
            "firstPeriod": 0,
            "lastPeriod": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED",
            "price": {
              "basePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "discount": 0,
              "effectivePrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "externalPriceUri": "string"
            },
            "priceTiers": [
              {
                "firstResource": 0,
                "lastResource": 0,
                "price": {
                  "basePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "discount": 0,
                  "effectivePrice": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "externalPriceUri": "string"
                }
              }
            ]
          }
        ],
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
      }
    ],
    "sku": {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string",
      "product": {
        "marketingInfo": {
          "defaultLogo": {
            "content": "string",
            "title": "string",
            "type": "MEDIA_TYPE_UNSPECIFIED"
          },
          "description": "string",
          "displayName": "string"
        },
        "name": "string"
      }
    },
    "startTime": "string"
  }
}
```

TransferableOffer represents an Offer that can be used in Transfer. Read-only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offer|[GoogleCloudChannelV1Offer](#schemagooglecloudchannelv1offer)|false|none|Offer with parameter constraints updated to allow the Transfer.|

<h2 id="tocS_GoogleCloudChannelV1TransferableSku">GoogleCloudChannelV1TransferableSku</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1transferablesku"></a>
<a id="schema_GoogleCloudChannelV1TransferableSku"></a>
<a id="tocSgooglecloudchannelv1transferablesku"></a>
<a id="tocsgooglecloudchannelv1transferablesku"></a>

```json
{
  "legacySku": {
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string",
    "product": {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string"
    }
  },
  "sku": {
    "marketingInfo": {
      "defaultLogo": {
        "content": "string",
        "title": "string",
        "type": "MEDIA_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string"
    },
    "name": "string",
    "product": {
      "marketingInfo": {
        "defaultLogo": {
          "content": "string",
          "title": "string",
          "type": "MEDIA_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string"
      },
      "name": "string"
    }
  },
  "transferEligibility": {
    "description": "string",
    "ineligibilityReason": "REASON_UNSPECIFIED",
    "isEligible": true
  }
}
```

TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacySku|[GoogleCloudChannelV1Sku](#schemagooglecloudchannelv1sku)|false|none|Optional. The customer to transfer has an entitlement with the populated legacy SKU.|
|sku|[GoogleCloudChannelV1Sku](#schemagooglecloudchannelv1sku)|false|none|The SKU pertaining to the provisioning resource as specified in the Offer.|
|transferEligibility|[GoogleCloudChannelV1TransferEligibility](#schemagooglecloudchannelv1transfereligibility)|false|none|Describes the transfer eligibility of a SKU.|

<h2 id="tocS_GoogleCloudChannelV1TrialSettings">GoogleCloudChannelV1TrialSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1trialsettings"></a>
<a id="schema_GoogleCloudChannelV1TrialSettings"></a>
<a id="tocSgooglecloudchannelv1trialsettings"></a>
<a id="tocsgooglecloudchannelv1trialsettings"></a>

```json
{
  "endTime": "string",
  "trial": true
}
```

Settings for trial offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com).|
|trial|boolean|false|none|Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial.|

<h2 id="tocS_GoogleCloudChannelV1UnregisterSubscriberRequest">GoogleCloudChannelV1UnregisterSubscriberRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1unregistersubscriberrequest"></a>
<a id="schema_GoogleCloudChannelV1UnregisterSubscriberRequest"></a>
<a id="tocSgooglecloudchannelv1unregistersubscriberrequest"></a>
<a id="tocsgooglecloudchannelv1unregistersubscriberrequest"></a>

```json
{
  "serviceAccount": "string"
}
```

Request Message for UnregisterSubscriber.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccount|string|false|none|Required. Service account to unregister from subscriber access to the topic.|

<h2 id="tocS_GoogleCloudChannelV1UnregisterSubscriberResponse">GoogleCloudChannelV1UnregisterSubscriberResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1unregistersubscriberresponse"></a>
<a id="schema_GoogleCloudChannelV1UnregisterSubscriberResponse"></a>
<a id="tocSgooglecloudchannelv1unregistersubscriberresponse"></a>
<a id="tocsgooglecloudchannelv1unregistersubscriberresponse"></a>

```json
{
  "topic": "string"
}
```

Response Message for UnregisterSubscriber.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|Name of the topic the service account subscriber access was removed from.|

<h2 id="tocS_GoogleCloudChannelV1UpdateChannelPartnerLinkRequest">GoogleCloudChannelV1UpdateChannelPartnerLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1updatechannelpartnerlinkrequest"></a>
<a id="schema_GoogleCloudChannelV1UpdateChannelPartnerLinkRequest"></a>
<a id="tocSgooglecloudchannelv1updatechannelpartnerlinkrequest"></a>
<a id="tocsgooglecloudchannelv1updatechannelpartnerlinkrequest"></a>

```json
{
  "channelPartnerLink": {
    "channelPartnerCloudIdentityInfo": {
      "adminConsoleUri": "string",
      "alternateEmail": "string",
      "customerType": "CUSTOMER_TYPE_UNSPECIFIED",
      "eduData": {
        "instituteSize": "INSTITUTE_SIZE_UNSPECIFIED",
        "instituteType": "INSTITUTE_TYPE_UNSPECIFIED",
        "website": "string"
      },
      "isDomainVerified": true,
      "languageCode": "string",
      "phoneNumber": "string",
      "primaryDomain": "string"
    },
    "createTime": "string",
    "inviteLinkUri": "string",
    "linkState": "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
    "name": "string",
    "publicId": "string",
    "resellerCloudIdentityId": "string",
    "updateTime": "string"
  },
  "updateMask": "string"
}
```

Request message for CloudChannelService.UpdateChannelPartnerLink

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelPartnerLink|[GoogleCloudChannelV1ChannelPartnerLink](#schemagooglecloudchannelv1channelpartnerlink)|false|none|Required. The channel partner link to update. Only channel_partner_link.link_state is allowed for updates.|
|updateMask|string(google-fieldmask)|false|none|Required. The update mask that applies to the resource. The only allowable value for an update mask is channel_partner_link.link_state.|

<h2 id="tocS_GoogleCloudChannelV1Value">GoogleCloudChannelV1Value</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1value"></a>
<a id="schema_GoogleCloudChannelV1Value"></a>
<a id="tocSgooglecloudchannelv1value"></a>
<a id="tocsgooglecloudchannelv1value"></a>

```json
{
  "boolValue": true,
  "doubleValue": 0,
  "int64Value": "string",
  "protoValue": {
    "property1": null,
    "property2": null
  },
  "stringValue": "string"
}
```

Data type and value of a parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|Represents a boolean value.|
|doubleValue|number(double)|false|none|Represents a double value.|
|int64Value|string(int64)|false|none|Represents an int64 value.|
|protoValue|object|false|none|Represents an 'Any' proto value.|
|stringValue|string|false|none|Represents a string value.|

<h2 id="tocS_GoogleCloudChannelV1alpha1AssociationInfo">GoogleCloudChannelV1alpha1AssociationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1associationinfo"></a>
<a id="schema_GoogleCloudChannelV1alpha1AssociationInfo"></a>
<a id="tocSgooglecloudchannelv1alpha1associationinfo"></a>
<a id="tocsgooglecloudchannelv1alpha1associationinfo"></a>

```json
{
  "baseEntitlement": "string"
}
```

Association links that an entitlement has to other entitlements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseEntitlement|string|false|none|The name of the base entitlement, for which this entitlement is an add-on.|

<h2 id="tocS_GoogleCloudChannelV1alpha1ChannelPartnerEvent">GoogleCloudChannelV1alpha1ChannelPartnerEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1channelpartnerevent"></a>
<a id="schema_GoogleCloudChannelV1alpha1ChannelPartnerEvent"></a>
<a id="tocSgooglecloudchannelv1alpha1channelpartnerevent"></a>
<a id="tocsgooglecloudchannelv1alpha1channelpartnerevent"></a>

```json
{
  "channelPartner": "string",
  "eventType": "TYPE_UNSPECIFIED"
}
```

Represents Pub/Sub messages about updates to a Channel Partner. You can retrieve updated values through the ChannelPartnerLinks API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelPartner|string|false|none|Resource name for the Channel Partner Link. Channel_partner uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}|
|eventType|string|false|none|Type of event performed on the Channel Partner.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|TYPE_UNSPECIFIED|
|eventType|LINK_STATE_CHANGED|
|eventType|PARTNER_ADVANTAGE_INFO_CHANGED|

<h2 id="tocS_GoogleCloudChannelV1alpha1Column">GoogleCloudChannelV1alpha1Column</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1column"></a>
<a id="schema_GoogleCloudChannelV1alpha1Column"></a>
<a id="tocSgooglecloudchannelv1alpha1column"></a>
<a id="tocsgooglecloudchannelv1alpha1column"></a>

```json
{
  "columnId": "string",
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "displayName": "string"
}
```

The definition of a report column. Specifies the data properties in the corresponding position of the report rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnId|string|false|none|The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports.|
|dataType|string|false|none|The type of the values for this column.|
|displayName|string|false|none|The column's display name.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|STRING|
|dataType|INT|
|dataType|DECIMAL|
|dataType|MONEY|
|dataType|DATE|
|dataType|DATE_TIME|

<h2 id="tocS_GoogleCloudChannelV1alpha1CommitmentSettings">GoogleCloudChannelV1alpha1CommitmentSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1commitmentsettings"></a>
<a id="schema_GoogleCloudChannelV1alpha1CommitmentSettings"></a>
<a id="tocSgooglecloudchannelv1alpha1commitmentsettings"></a>
<a id="tocsgooglecloudchannelv1alpha1commitmentsettings"></a>

```json
{
  "endTime": "string",
  "renewalSettings": {
    "disableCommitment": true,
    "enableRenewal": true,
    "paymentCycle": {
      "duration": 0,
      "periodType": "PERIOD_TYPE_UNSPECIFIED"
    },
    "paymentOption": "PAYMENT_OPTION_UNSPECIFIED",
    "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
    "resizeUnitCount": true,
    "scheduledRenewalOffer": "string"
  },
  "startTime": "string"
}
```

Commitment settings for commitment-based offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|read-only|Output only. Commitment end timestamp.|
|renewalSettings|[GoogleCloudChannelV1alpha1RenewalSettings](#schemagooglecloudchannelv1alpha1renewalsettings)|false|none|Optional. Renewal settings applicable for a commitment-based Offer.|
|startTime|string(google-datetime)|false|read-only|Output only. Commitment start timestamp.|

<h2 id="tocS_GoogleCloudChannelV1alpha1CustomerEvent">GoogleCloudChannelV1alpha1CustomerEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1customerevent"></a>
<a id="schema_GoogleCloudChannelV1alpha1CustomerEvent"></a>
<a id="tocSgooglecloudchannelv1alpha1customerevent"></a>
<a id="tocsgooglecloudchannelv1alpha1customerevent"></a>

```json
{
  "customer": "string",
  "eventType": "TYPE_UNSPECIFIED"
}
```

Represents Pub/Sub message content describing customer update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}|
|eventType|string|false|none|Type of event which happened on the customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|TYPE_UNSPECIFIED|
|eventType|PRIMARY_DOMAIN_CHANGED|
|eventType|PRIMARY_DOMAIN_VERIFIED|

<h2 id="tocS_GoogleCloudChannelV1alpha1DateRange">GoogleCloudChannelV1alpha1DateRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1daterange"></a>
<a id="schema_GoogleCloudChannelV1alpha1DateRange"></a>
<a id="tocSgooglecloudchannelv1alpha1daterange"></a>
<a id="tocsgooglecloudchannelv1alpha1daterange"></a>

```json
{
  "invoiceEndDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "invoiceStartDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "usageEndDateTime": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  },
  "usageStartDateTime": {
    "day": 0,
    "hours": 0,
    "minutes": 0,
    "month": 0,
    "nanos": 0,
    "seconds": 0,
    "timeZone": {
      "id": "string",
      "version": "string"
    },
    "utcOffset": "string",
    "year": 0
  }
}
```

A representation of usage or invoice date ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceEndDate|[GoogleTypeDate](#schemagoogletypedate)|false|none|The latest invoice date (exclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the following month.|
|invoiceStartDate|[GoogleTypeDate](#schemagoogletypedate)|false|none|The earliest invoice date (inclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the given month.|
|usageEndDateTime|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|The latest usage date time (exclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage end date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.|
|usageStartDateTime|[GoogleTypeDateTime](#schemagoogletypedatetime)|false|none|The earliest usage date time (inclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage start date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.|

<h2 id="tocS_GoogleCloudChannelV1alpha1Entitlement">GoogleCloudChannelV1alpha1Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1entitlement"></a>
<a id="schema_GoogleCloudChannelV1alpha1Entitlement"></a>
<a id="tocSgooglecloudchannelv1alpha1entitlement"></a>
<a id="tocsgooglecloudchannelv1alpha1entitlement"></a>

```json
{
  "assignedUnits": 0,
  "associationInfo": {
    "baseEntitlement": "string"
  },
  "channelPartnerId": "string",
  "commitmentSettings": {
    "endTime": "string",
    "renewalSettings": {
      "disableCommitment": true,
      "enableRenewal": true,
      "paymentCycle": {
        "duration": 0,
        "periodType": "PERIOD_TYPE_UNSPECIFIED"
      },
      "paymentOption": "PAYMENT_OPTION_UNSPECIFIED",
      "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
      "resizeUnitCount": true,
      "scheduledRenewalOffer": "string"
    },
    "startTime": "string"
  },
  "createTime": "string",
  "maxUnits": 0,
  "name": "string",
  "numUnits": 0,
  "offer": "string",
  "parameters": [
    {
      "editable": true,
      "name": "string",
      "value": {
        "boolValue": true,
        "doubleValue": 0,
        "int64Value": "string",
        "protoValue": {
          "property1": null,
          "property2": null
        },
        "stringValue": "string"
      }
    }
  ],
  "provisionedService": {
    "productId": "string",
    "provisioningId": "string",
    "skuId": "string"
  },
  "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
  "purchaseOrderId": "string",
  "suspensionReasons": [
    "SUSPENSION_REASON_UNSPECIFIED"
  ],
  "trialSettings": {
    "endTime": "string",
    "trial": true
  },
  "updateTime": "string"
}
```

An entitlement is a representation of a customer's ability to use a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignedUnits|integer(int32)|false|none|The current number of users that are assigned a license for the product defined in provisioned_service.skuId. Read-only. Deprecated: Use `parameters` instead.|
|associationInfo|[GoogleCloudChannelV1alpha1AssociationInfo](#schemagooglecloudchannelv1alpha1associationinfo)|false|none|Association information to other entitlements.|
|channelPartnerId|string|false|none|Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is generally used in 2-tier ordering, where the order is placed by a top-level distributor on behalf of their channel partner or reseller. Required for distributors. Deprecated: `channel_partner_id` has been moved to the Customer.|
|commitmentSettings|[GoogleCloudChannelV1alpha1CommitmentSettings](#schemagooglecloudchannelv1alpha1commitmentsettings)|false|none|Commitment settings for a commitment-based Offer. Required for commitment based offers.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the entitlement is created.|
|maxUnits|integer(int32)|false|none|Maximum number of units for a non commitment-based Offer, such as Flexible, Trial or Free entitlements. For commitment-based entitlements, this is a read-only field, which only the internal support team can update. Deprecated: Use `parameters` instead.|
|name|string|false|read-only|Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}.|
|numUnits|integer(int32)|false|none|Number of units for a commitment-based Offer. For example, for seat-based Offers, this would be the number of seats; for license-based Offers, this would be the number of licenses. Required for creating commitment-based Offers. Deprecated: Use `parameters` instead.|
|offer|string|false|none|Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}.|
|parameters|[[GoogleCloudChannelV1alpha1Parameter](#schemagooglecloudchannelv1alpha1parameter)]|false|none|Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For GCP billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount.|
|provisionedService|[GoogleCloudChannelV1alpha1ProvisionedService](#schemagooglecloudchannelv1alpha1provisionedservice)|false|none|Output only. Service provisioning details for the entitlement.|
|provisioningState|string|false|read-only|Output only. Current provisioning state of the entitlement.|
|purchaseOrderId|string|false|none|Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements.|
|suspensionReasons|[string]|false|read-only|Output only. Enumerable of all current suspension reasons for an entitlement.|
|trialSettings|[GoogleCloudChannelV1alpha1TrialSettings](#schemagooglecloudchannelv1alpha1trialsettings)|false|none|Output only. Settings for trial offers.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which the entitlement is updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|provisioningState|PROVISIONING_STATE_UNSPECIFIED|
|provisioningState|ACTIVE|
|provisioningState|CANCELED|
|provisioningState|COMPLETE|
|provisioningState|PENDING|
|provisioningState|SUSPENDED|
|suspensionReasons|SUSPENSION_REASON_UNSPECIFIED|
|suspensionReasons|RESELLER_INITIATED|
|suspensionReasons|TRIAL_ENDED|
|suspensionReasons|RENEWAL_WITH_TYPE_CANCEL|
|suspensionReasons|PENDING_TOS_ACCEPTANCE|
|suspensionReasons|OTHER|

<h2 id="tocS_GoogleCloudChannelV1alpha1EntitlementEvent">GoogleCloudChannelV1alpha1EntitlementEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1entitlementevent"></a>
<a id="schema_GoogleCloudChannelV1alpha1EntitlementEvent"></a>
<a id="tocSgooglecloudchannelv1alpha1entitlementevent"></a>
<a id="tocsgooglecloudchannelv1alpha1entitlementevent"></a>

```json
{
  "entitlement": "string",
  "eventType": "TYPE_UNSPECIFIED"
}
```

Represents Pub/Sub message content describing entitlement update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement|string|false|none|Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}|
|eventType|string|false|none|Type of event which happened on the entitlement.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|TYPE_UNSPECIFIED|
|eventType|CREATED|
|eventType|PRICE_PLAN_SWITCHED|
|eventType|COMMITMENT_CHANGED|
|eventType|RENEWED|
|eventType|SUSPENDED|
|eventType|ACTIVATED|
|eventType|CANCELLED|
|eventType|SKU_CHANGED|
|eventType|RENEWAL_SETTING_CHANGED|
|eventType|PAID_SERVICE_STARTED|
|eventType|LICENSE_ASSIGNMENT_CHANGED|
|eventType|LICENSE_CAP_CHANGED|

<h2 id="tocS_GoogleCloudChannelV1alpha1OperationMetadata">GoogleCloudChannelV1alpha1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1operationmetadata"></a>
<a id="schema_GoogleCloudChannelV1alpha1OperationMetadata"></a>
<a id="tocSgooglecloudchannelv1alpha1operationmetadata"></a>
<a id="tocsgooglecloudchannelv1alpha1operationmetadata"></a>

```json
{
  "operationType": "OPERATION_TYPE_UNSPECIFIED"
}
```

Provides contextual information about a google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationType|string|false|none|The RPC that initiated this Long Running Operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE_ENTITLEMENT|
|operationType|CHANGE_QUANTITY|
|operationType|CHANGE_RENEWAL_SETTINGS|
|operationType|CHANGE_PLAN|
|operationType|START_PAID_SERVICE|
|operationType|CHANGE_SKU|
|operationType|ACTIVATE_ENTITLEMENT|
|operationType|SUSPEND_ENTITLEMENT|
|operationType|CANCEL_ENTITLEMENT|
|operationType|TRANSFER_ENTITLEMENTS|
|operationType|TRANSFER_ENTITLEMENTS_TO_GOOGLE|
|operationType|CHANGE_OFFER|
|operationType|CHANGE_PARAMETERS|
|operationType|PROVISION_CLOUD_IDENTITY|

<h2 id="tocS_GoogleCloudChannelV1alpha1Parameter">GoogleCloudChannelV1alpha1Parameter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1parameter"></a>
<a id="schema_GoogleCloudChannelV1alpha1Parameter"></a>
<a id="tocSgooglecloudchannelv1alpha1parameter"></a>
<a id="tocsgooglecloudchannelv1alpha1parameter"></a>

```json
{
  "editable": true,
  "name": "string",
  "value": {
    "boolValue": true,
    "doubleValue": 0,
    "int64Value": "string",
    "protoValue": {
      "property1": null,
      "property2": null
    },
    "stringValue": "string"
  }
}
```

Definition for extended entitlement parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editable|boolean|false|read-only|Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active.|
|name|string|false|none|Name of the parameter.|
|value|[GoogleCloudChannelV1alpha1Value](#schemagooglecloudchannelv1alpha1value)|false|none|Value of the parameter.|

<h2 id="tocS_GoogleCloudChannelV1alpha1Period">GoogleCloudChannelV1alpha1Period</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1period"></a>
<a id="schema_GoogleCloudChannelV1alpha1Period"></a>
<a id="tocSgooglecloudchannelv1alpha1period"></a>
<a id="tocsgooglecloudchannelv1alpha1period"></a>

```json
{
  "duration": 0,
  "periodType": "PERIOD_TYPE_UNSPECIFIED"
}
```

Represents period in days/months/years.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer(int32)|false|none|Total duration of Period Type defined.|
|periodType|string|false|none|Period Type.|

#### Enumerated Values

|Property|Value|
|---|---|
|periodType|PERIOD_TYPE_UNSPECIFIED|
|periodType|DAY|
|periodType|MONTH|
|periodType|YEAR|

<h2 id="tocS_GoogleCloudChannelV1alpha1ProvisionedService">GoogleCloudChannelV1alpha1ProvisionedService</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1provisionedservice"></a>
<a id="schema_GoogleCloudChannelV1alpha1ProvisionedService"></a>
<a id="tocSgooglecloudchannelv1alpha1provisionedservice"></a>
<a id="tocsgooglecloudchannelv1alpha1provisionedservice"></a>

```json
{
  "productId": "string",
  "provisioningId": "string",
  "skuId": "string"
}
```

Service provisioned for an entitlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|false|read-only|Output only. The product pertaining to the provisioning resource as specified in the Offer.|
|provisioningId|string|false|read-only|Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud Platform, this is the Billing Account ID of the billing subaccount."|
|skuId|string|false|read-only|Output only. The SKU pertaining to the provisioning resource as specified in the Offer.|

<h2 id="tocS_GoogleCloudChannelV1alpha1RenewalSettings">GoogleCloudChannelV1alpha1RenewalSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1renewalsettings"></a>
<a id="schema_GoogleCloudChannelV1alpha1RenewalSettings"></a>
<a id="tocSgooglecloudchannelv1alpha1renewalsettings"></a>
<a id="tocsgooglecloudchannelv1alpha1renewalsettings"></a>

```json
{
  "disableCommitment": true,
  "enableRenewal": true,
  "paymentCycle": {
    "duration": 0,
    "periodType": "PERIOD_TYPE_UNSPECIFIED"
  },
  "paymentOption": "PAYMENT_OPTION_UNSPECIFIED",
  "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
  "resizeUnitCount": true,
  "scheduledRenewalOffer": "string"
}
```

Renewal settings for renewable Offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableCommitment|boolean|false|none|If true, disables commitment-based offer on renewal and switches to flexible or pay as you go. Deprecated: Use `payment_plan` instead.|
|enableRenewal|boolean|false|none|If false, the plan will be completed at the end date.|
|paymentCycle|[GoogleCloudChannelV1alpha1Period](#schemagooglecloudchannelv1alpha1period)|false|none|Describes how frequently the reseller will be billed, such as once per month.|
|paymentOption|string|false|none|Set if enable_renewal=true. Deprecated: Use `payment_cycle` instead.|
|paymentPlan|string|false|none|Describes how a reseller will be billed.|
|resizeUnitCount|boolean|false|none|If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time.|
|scheduledRenewalOffer|string|false|read-only|Output only. The offer resource name that the entitlement will renew on at the end date. Takes the form: accounts/{account_id}/offers/{offer_id}.|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentOption|PAYMENT_OPTION_UNSPECIFIED|
|paymentOption|ANNUAL|
|paymentOption|MONTHLY|
|paymentPlan|PAYMENT_PLAN_UNSPECIFIED|
|paymentPlan|COMMITMENT|
|paymentPlan|FLEXIBLE|
|paymentPlan|FREE|
|paymentPlan|TRIAL|
|paymentPlan|OFFLINE|

<h2 id="tocS_GoogleCloudChannelV1alpha1Report">GoogleCloudChannelV1alpha1Report</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1report"></a>
<a id="schema_GoogleCloudChannelV1alpha1Report"></a>
<a id="tocSgooglecloudchannelv1alpha1report"></a>
<a id="tocsgooglecloudchannelv1alpha1report"></a>

```json
{
  "columns": [
    {
      "columnId": "string",
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "displayName": "string"
    }
  ],
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[GoogleCloudChannelV1alpha1Column](#schemagooglecloudchannelv1alpha1column)]|false|none|The list of columns included in the report. This defines the schema of the report results.|
|description|string|false|none|A description of other aspects of the report, such as the products it supports.|
|displayName|string|false|none|A human-readable name for this report.|
|name|string|false|none|Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}|

<h2 id="tocS_GoogleCloudChannelV1alpha1ReportJob">GoogleCloudChannelV1alpha1ReportJob</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1reportjob"></a>
<a id="schema_GoogleCloudChannelV1alpha1ReportJob"></a>
<a id="tocSgooglecloudchannelv1alpha1reportjob"></a>
<a id="tocsgooglecloudchannelv1alpha1reportjob"></a>

```json
{
  "name": "string",
  "reportStatus": {
    "endTime": "string",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}`|
|reportStatus|[GoogleCloudChannelV1alpha1ReportStatus](#schemagooglecloudchannelv1alpha1reportstatus)|false|none|The current status of report generation.|

<h2 id="tocS_GoogleCloudChannelV1alpha1ReportResultsMetadata">GoogleCloudChannelV1alpha1ReportResultsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1reportresultsmetadata"></a>
<a id="schema_GoogleCloudChannelV1alpha1ReportResultsMetadata"></a>
<a id="tocSgooglecloudchannelv1alpha1reportresultsmetadata"></a>
<a id="tocsgooglecloudchannelv1alpha1reportresultsmetadata"></a>

```json
{
  "dateRange": {
    "invoiceEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "invoiceStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "usageEndDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "usageStartDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    }
  },
  "precedingDateRange": {
    "invoiceEndDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "invoiceStartDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "usageEndDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    },
    "usageStartDateTime": {
      "day": 0,
      "hours": 0,
      "minutes": 0,
      "month": 0,
      "nanos": 0,
      "seconds": 0,
      "timeZone": {
        "id": "string",
        "version": "string"
      },
      "utcOffset": "string",
      "year": 0
    }
  },
  "report": {
    "columns": [
      {
        "columnId": "string",
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "displayName": "string"
      }
    ],
    "description": "string",
    "displayName": "string",
    "name": "string"
  },
  "rowCount": "string"
}
```

The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[GoogleCloudChannelV1alpha1DateRange](#schemagooglecloudchannelv1alpha1daterange)|false|none|The date range of reported usage.|
|precedingDateRange|[GoogleCloudChannelV1alpha1DateRange](#schemagooglecloudchannelv1alpha1daterange)|false|none|The usage dates immediately preceding `date_range` with the same duration. Use this to calculate trending usage and costs. This is only populated if you request trending data. For example, if `date_range` is July 1-15, `preceding_date_range` will be June 16-30.|
|report|[GoogleCloudChannelV1alpha1Report](#schemagooglecloudchannelv1alpha1report)|false|none|Details of the completed report.|
|rowCount|string(int64)|false|none|The total number of rows of data in the final report.|

<h2 id="tocS_GoogleCloudChannelV1alpha1ReportStatus">GoogleCloudChannelV1alpha1ReportStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1reportstatus"></a>
<a id="schema_GoogleCloudChannelV1alpha1ReportStatus"></a>
<a id="tocSgooglecloudchannelv1alpha1reportstatus"></a>
<a id="tocsgooglecloudchannelv1alpha1reportstatus"></a>

```json
{
  "endTime": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Status of a report generation process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The report generation's completion time.|
|startTime|string(google-datetime)|false|none|The report generation's start time.|
|state|string|false|none|The current state of the report generation process.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STARTED|
|state|WRITING|
|state|AVAILABLE|
|state|FAILED|

<h2 id="tocS_GoogleCloudChannelV1alpha1RunReportJobResponse">GoogleCloudChannelV1alpha1RunReportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1runreportjobresponse"></a>
<a id="schema_GoogleCloudChannelV1alpha1RunReportJobResponse"></a>
<a id="tocSgooglecloudchannelv1alpha1runreportjobresponse"></a>
<a id="tocsgooglecloudchannelv1alpha1runreportjobresponse"></a>

```json
{
  "reportJob": {
    "name": "string",
    "reportStatus": {
      "endTime": "string",
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  },
  "reportMetadata": {
    "dateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "precedingDateRange": {
      "invoiceEndDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "invoiceStartDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "usageEndDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      },
      "usageStartDateTime": {
        "day": 0,
        "hours": 0,
        "minutes": 0,
        "month": 0,
        "nanos": 0,
        "seconds": 0,
        "timeZone": {
          "id": "string",
          "version": "string"
        },
        "utcOffset": "string",
        "year": 0
      }
    },
    "report": {
      "columns": [
        {
          "columnId": "string",
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "displayName": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    },
    "rowCount": "string"
  }
}
```

Response message for CloudChannelReportsService.RunReportJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportJob|[GoogleCloudChannelV1alpha1ReportJob](#schemagooglecloudchannelv1alpha1reportjob)|false|none|Pass `report_job.name` to FetchReportResultsRequest.report_job to retrieve the report's results.|
|reportMetadata|[GoogleCloudChannelV1alpha1ReportResultsMetadata](#schemagooglecloudchannelv1alpha1reportresultsmetadata)|false|none|The metadata for the report's results (display name, columns, row count, and date range). If you view this before the operation finishes, you may see incomplete data.|

<h2 id="tocS_GoogleCloudChannelV1alpha1SubscriberEvent">GoogleCloudChannelV1alpha1SubscriberEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1subscriberevent"></a>
<a id="schema_GoogleCloudChannelV1alpha1SubscriberEvent"></a>
<a id="tocSgooglecloudchannelv1alpha1subscriberevent"></a>
<a id="tocsgooglecloudchannelv1alpha1subscriberevent"></a>

```json
{
  "channelPartnerEvent": {
    "channelPartner": "string",
    "eventType": "TYPE_UNSPECIFIED"
  },
  "customerEvent": {
    "customer": "string",
    "eventType": "TYPE_UNSPECIFIED"
  },
  "entitlementEvent": {
    "entitlement": "string",
    "eventType": "TYPE_UNSPECIFIED"
  }
}
```

Represents information which resellers will get as part of notification from Pub/Sub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelPartnerEvent|[GoogleCloudChannelV1alpha1ChannelPartnerEvent](#schemagooglecloudchannelv1alpha1channelpartnerevent)|false|none|Channel Partner event sent as part of Pub/Sub event to partners.|
|customerEvent|[GoogleCloudChannelV1alpha1CustomerEvent](#schemagooglecloudchannelv1alpha1customerevent)|false|none|Customer event sent as part of Pub/Sub event to partners.|
|entitlementEvent|[GoogleCloudChannelV1alpha1EntitlementEvent](#schemagooglecloudchannelv1alpha1entitlementevent)|false|none|Entitlement event sent as part of Pub/Sub event to partners.|

<h2 id="tocS_GoogleCloudChannelV1alpha1TransferEntitlementsResponse">GoogleCloudChannelV1alpha1TransferEntitlementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1transferentitlementsresponse"></a>
<a id="schema_GoogleCloudChannelV1alpha1TransferEntitlementsResponse"></a>
<a id="tocSgooglecloudchannelv1alpha1transferentitlementsresponse"></a>
<a id="tocsgooglecloudchannelv1alpha1transferentitlementsresponse"></a>

```json
{
  "entitlements": [
    {
      "assignedUnits": 0,
      "associationInfo": {
        "baseEntitlement": "string"
      },
      "channelPartnerId": "string",
      "commitmentSettings": {
        "endTime": "string",
        "renewalSettings": {
          "disableCommitment": true,
          "enableRenewal": true,
          "paymentCycle": {
            "duration": 0,
            "periodType": "PERIOD_TYPE_UNSPECIFIED"
          },
          "paymentOption": "PAYMENT_OPTION_UNSPECIFIED",
          "paymentPlan": "PAYMENT_PLAN_UNSPECIFIED",
          "resizeUnitCount": true,
          "scheduledRenewalOffer": "string"
        },
        "startTime": "string"
      },
      "createTime": "string",
      "maxUnits": 0,
      "name": "string",
      "numUnits": 0,
      "offer": "string",
      "parameters": [
        {
          "editable": true,
          "name": "string",
          "value": {
            "boolValue": true,
            "doubleValue": 0,
            "int64Value": "string",
            "protoValue": {
              "property1": null,
              "property2": null
            },
            "stringValue": "string"
          }
        }
      ],
      "provisionedService": {
        "productId": "string",
        "provisioningId": "string",
        "skuId": "string"
      },
      "provisioningState": "PROVISIONING_STATE_UNSPECIFIED",
      "purchaseOrderId": "string",
      "suspensionReasons": [
        "SUSPENSION_REASON_UNSPECIFIED"
      ],
      "trialSettings": {
        "endTime": "string",
        "trial": true
      },
      "updateTime": "string"
    }
  ]
}
```

Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlements|[[GoogleCloudChannelV1alpha1Entitlement](#schemagooglecloudchannelv1alpha1entitlement)]|false|none|The transferred entitlements.|

<h2 id="tocS_GoogleCloudChannelV1alpha1TrialSettings">GoogleCloudChannelV1alpha1TrialSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1trialsettings"></a>
<a id="schema_GoogleCloudChannelV1alpha1TrialSettings"></a>
<a id="tocSgooglecloudchannelv1alpha1trialsettings"></a>
<a id="tocsgooglecloudchannelv1alpha1trialsettings"></a>

```json
{
  "endTime": "string",
  "trial": true
}
```

Settings for trial offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com).|
|trial|boolean|false|none|Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial.|

<h2 id="tocS_GoogleCloudChannelV1alpha1Value">GoogleCloudChannelV1alpha1Value</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudchannelv1alpha1value"></a>
<a id="schema_GoogleCloudChannelV1alpha1Value"></a>
<a id="tocSgooglecloudchannelv1alpha1value"></a>
<a id="tocsgooglecloudchannelv1alpha1value"></a>

```json
{
  "boolValue": true,
  "doubleValue": 0,
  "int64Value": "string",
  "protoValue": {
    "property1": null,
    "property2": null
  },
  "stringValue": "string"
}
```

Data type and value of a parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|Represents a boolean value.|
|doubleValue|number(double)|false|none|Represents a double value.|
|int64Value|string(int64)|false|none|Represents an int64 value.|
|protoValue|object|false|none|Represents an 'Any' proto value.|
|stringValue|string|false|none|Represents a string value.|

<h2 id="tocS_GoogleLongrunningCancelOperationRequest">GoogleLongrunningCancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningcanceloperationrequest"></a>
<a id="schema_GoogleLongrunningCancelOperationRequest"></a>
<a id="tocSgooglelongrunningcanceloperationrequest"></a>
<a id="tocsgooglelongrunningcanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_GoogleTypeDate">GoogleTypeDate</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedate"></a>
<a id="schema_GoogleTypeDate"></a>
<a id="tocSgoogletypedate"></a>
<a id="tocsgoogletypedate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_GoogleTypeDateTime">GoogleTypeDateTime</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedatetime"></a>
<a id="schema_GoogleTypeDateTime"></a>
<a id="tocSgoogletypedatetime"></a>
<a id="tocsgoogletypedatetime"></a>

```json
{
  "day": 0,
  "hours": 0,
  "minutes": 0,
  "month": 0,
  "nanos": 0,
  "seconds": 0,
  "timeZone": {
    "id": "string",
    "version": "string"
  },
  "utcOffset": "string",
  "year": 0
}
```

Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.|
|hours|integer(int32)|false|none|Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.|
|month|integer(int32)|false|none|Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.|
|nanos|integer(int32)|false|none|Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.|
|seconds|integer(int32)|false|none|Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.|
|timeZone|[GoogleTypeTimeZone](#schemagoogletypetimezone)|false|none|Time zone.|
|utcOffset|string(google-duration)|false|none|UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.|
|year|integer(int32)|false|none|Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.|

<h2 id="tocS_GoogleTypeDecimal">GoogleTypeDecimal</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedecimal"></a>
<a id="schema_GoogleTypeDecimal"></a>
<a id="tocSgoogletypedecimal"></a>
<a id="tocsgoogletypedecimal"></a>

```json
{
  "value": "string"
}
```

A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' \| [Sign] Significand [Exponent]; Sign = '+' \| '-'; Significand = Digits '.' \| [Digits] '.' Digits; Exponent = ('e' \| 'E') [Sign] Digits; Digits = { '0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range.|

<h2 id="tocS_GoogleTypeMoney">GoogleTypeMoney</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypemoney"></a>
<a id="schema_GoogleTypeMoney"></a>
<a id="tocSgoogletypemoney"></a>
<a id="tocsgoogletypemoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_GoogleTypePostalAddress">GoogleTypePostalAddress</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypepostaladdress"></a>
<a id="schema_GoogleTypePostalAddress"></a>
<a id="tocSgoogletypepostaladdress"></a>
<a id="tocsgoogletypepostaladdress"></a>

```json
{
  "addressLines": [
    "string"
  ],
  "administrativeArea": "string",
  "languageCode": "string",
  "locality": "string",
  "organization": "string",
  "postalCode": "string",
  "recipients": [
    "string"
  ],
  "regionCode": "string",
  "revision": 0,
  "sortingCode": "string",
  "sublocality": "string"
}
```

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|false|none|Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).|
|administrativeArea|string|false|none|Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.|
|languageCode|string|false|none|Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".|
|locality|string|false|none|Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.|
|organization|string|false|none|Optional. The name of the organization at the address.|
|postalCode|string|false|none|Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).|
|recipients|[string]|false|none|Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.|
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|revision|integer(int32)|false|none|The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.|
|sortingCode|string|false|none|Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).|
|sublocality|string|false|none|Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.|

<h2 id="tocS_GoogleTypeTimeZone">GoogleTypeTimeZone</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypetimezone"></a>
<a id="schema_GoogleTypeTimeZone"></a>
<a id="tocSgoogletypetimezone"></a>
<a id="tocsgoogletypetimezone"></a>

```json
{
  "id": "string",
  "version": "string"
}
```

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|IANA Time Zone Database time zone, e.g. "America/New_York".|
|version|string|false|none|Optional. IANA Time Zone Database version number, e.g. "2019a".|
