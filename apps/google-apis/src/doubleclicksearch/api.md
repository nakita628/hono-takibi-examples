<h1 id="search-ads-360-api">Search Ads 360 API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Search Ads 360 API allows developers to automate uploading conversions and downloading reports from Search Ads 360.

Base URLs:

* <a href="https://doubleclicksearch.googleapis.com/">https://doubleclicksearch.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/search-ads">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/doubleclicksearch|View and manage your advertising data in DoubleClick Search|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/doubleclicksearch|View and manage your advertising data in DoubleClick Search|

<h1 id="search-ads-360-api-conversion">conversion</h1>

## doubleclicksearch.conversion.get

<a id="opIddoubleclicksearch.conversion.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/doubleclicksearch/v2/agency/string/advertiser/string/engine/string/conversion?endDate=20091101&rowCount=1&startDate=20091101&startRow=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion`

Retrieves a list of conversions from a DoubleClick Search engine account.

<h3 id="doubleclicksearchconversionget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agencyId|path|string|true|Numeric ID of the agency.|
|advertiserId|path|string|true|Numeric ID of the advertiser.|
|engineAccountId|path|string|true|Numeric ID of the engine account.|
|endDate|query|integer|true|Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.|
|rowCount|query|integer|true|The number of conversions to return per call.|
|startDate|query|integer|true|First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.|
|startRow|query|integer|true|The 0-based starting index for retrieving conversions results.|
|adGroupId|query|string|false|Numeric ID of the ad group.|
|adId|query|string|false|Numeric ID of the ad.|
|campaignId|query|string|false|Numeric ID of the campaign.|
|criterionId|query|string|false|Numeric ID of the criterion.|
|customerId|query|string|false|Customer ID of a client account in the new Search Ads 360 experience.|
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
  "conversion": [
    {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "attributionModel": "string",
      "campaignId": "string",
      "channel": "string",
      "clickId": "string",
      "conversionId": "string",
      "conversionModifiedTimestamp": "string",
      "conversionTimestamp": "string",
      "countMillis": "string",
      "criterionId": "string",
      "currencyCode": "string",
      "customDimension": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "customMetric": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "customerId": "string",
      "deviceType": "string",
      "dsConversionId": "string",
      "engineAccountId": "string",
      "floodlightOrderId": "string",
      "inventoryAccountId": "string",
      "productCountry": "string",
      "productGroupId": "string",
      "productId": "string",
      "productLanguage": "string",
      "quantityMillis": "string",
      "revenueMicros": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string",
      "state": "string",
      "storeId": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="doubleclicksearchconversionget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConversionList](#schemaconversionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.conversion.update

<a id="opIddoubleclicksearch.conversion.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/conversion \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conversion": [
      {
        "adGroupId": "string",
        "adId": "string",
        "advertiserId": "string",
        "agencyId": "string",
        "attributionModel": "string",
        "campaignId": "string",
        "channel": "string",
        "clickId": "string",
        "conversionId": "string",
        "conversionModifiedTimestamp": "string",
        "conversionTimestamp": "string",
        "countMillis": "string",
        "criterionId": "string",
        "currencyCode": "string",
        "customDimension": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "customMetric": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "customerId": "string",
        "deviceType": "string",
        "dsConversionId": "string",
        "engineAccountId": "string",
        "floodlightOrderId": "string",
        "inventoryAccountId": "string",
        "productCountry": "string",
        "productGroupId": "string",
        "productId": "string",
        "productLanguage": "string",
        "quantityMillis": "string",
        "revenueMicros": "string",
        "segmentationId": "string",
        "segmentationName": "string",
        "segmentationType": "string",
        "state": "string",
        "storeId": "string",
        "type": "string"
      }
    ],
    "kind": "string"
  }'
```

`PUT /doubleclicksearch/v2/conversion`

Updates a batch of conversions in DoubleClick Search.

> Body parameter

```json
{
  "conversion": [
    {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "attributionModel": "string",
      "campaignId": "string",
      "channel": "string",
      "clickId": "string",
      "conversionId": "string",
      "conversionModifiedTimestamp": "string",
      "conversionTimestamp": "string",
      "countMillis": "string",
      "criterionId": "string",
      "currencyCode": "string",
      "customDimension": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "customMetric": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "customerId": "string",
      "deviceType": "string",
      "dsConversionId": "string",
      "engineAccountId": "string",
      "floodlightOrderId": "string",
      "inventoryAccountId": "string",
      "productCountry": "string",
      "productGroupId": "string",
      "productId": "string",
      "productLanguage": "string",
      "quantityMillis": "string",
      "revenueMicros": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string",
      "state": "string",
      "storeId": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="doubleclicksearchconversionupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ConversionList](#schemaconversionlist)|false|none|
|» conversion|body|[[Conversion](#schemaconversion)]|false|The conversions being requested.|
|» kind|body|string|false|Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList.|

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
  "conversion": [
    {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "attributionModel": "string",
      "campaignId": "string",
      "channel": "string",
      "clickId": "string",
      "conversionId": "string",
      "conversionModifiedTimestamp": "string",
      "conversionTimestamp": "string",
      "countMillis": "string",
      "criterionId": "string",
      "currencyCode": "string",
      "customDimension": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "customMetric": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "customerId": "string",
      "deviceType": "string",
      "dsConversionId": "string",
      "engineAccountId": "string",
      "floodlightOrderId": "string",
      "inventoryAccountId": "string",
      "productCountry": "string",
      "productGroupId": "string",
      "productId": "string",
      "productLanguage": "string",
      "quantityMillis": "string",
      "revenueMicros": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string",
      "state": "string",
      "storeId": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="doubleclicksearchconversionupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConversionList](#schemaconversionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.conversion.insert

<a id="opIddoubleclicksearch.conversion.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/conversion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conversion": [
      {
        "adGroupId": "string",
        "adId": "string",
        "advertiserId": "string",
        "agencyId": "string",
        "attributionModel": "string",
        "campaignId": "string",
        "channel": "string",
        "clickId": "string",
        "conversionId": "string",
        "conversionModifiedTimestamp": "string",
        "conversionTimestamp": "string",
        "countMillis": "string",
        "criterionId": "string",
        "currencyCode": "string",
        "customDimension": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "customMetric": [
          {
            "name": "string",
            "value": 0
          }
        ],
        "customerId": "string",
        "deviceType": "string",
        "dsConversionId": "string",
        "engineAccountId": "string",
        "floodlightOrderId": "string",
        "inventoryAccountId": "string",
        "productCountry": "string",
        "productGroupId": "string",
        "productId": "string",
        "productLanguage": "string",
        "quantityMillis": "string",
        "revenueMicros": "string",
        "segmentationId": "string",
        "segmentationName": "string",
        "segmentationType": "string",
        "state": "string",
        "storeId": "string",
        "type": "string"
      }
    ],
    "kind": "string"
  }'
```

`POST /doubleclicksearch/v2/conversion`

Inserts a batch of new conversions into DoubleClick Search.

> Body parameter

```json
{
  "conversion": [
    {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "attributionModel": "string",
      "campaignId": "string",
      "channel": "string",
      "clickId": "string",
      "conversionId": "string",
      "conversionModifiedTimestamp": "string",
      "conversionTimestamp": "string",
      "countMillis": "string",
      "criterionId": "string",
      "currencyCode": "string",
      "customDimension": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "customMetric": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "customerId": "string",
      "deviceType": "string",
      "dsConversionId": "string",
      "engineAccountId": "string",
      "floodlightOrderId": "string",
      "inventoryAccountId": "string",
      "productCountry": "string",
      "productGroupId": "string",
      "productId": "string",
      "productLanguage": "string",
      "quantityMillis": "string",
      "revenueMicros": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string",
      "state": "string",
      "storeId": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="doubleclicksearchconversioninsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ConversionList](#schemaconversionlist)|false|none|
|» conversion|body|[[Conversion](#schemaconversion)]|false|The conversions being requested.|
|» kind|body|string|false|Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList.|

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
  "conversion": [
    {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "attributionModel": "string",
      "campaignId": "string",
      "channel": "string",
      "clickId": "string",
      "conversionId": "string",
      "conversionModifiedTimestamp": "string",
      "conversionTimestamp": "string",
      "countMillis": "string",
      "criterionId": "string",
      "currencyCode": "string",
      "customDimension": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "customMetric": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "customerId": "string",
      "deviceType": "string",
      "dsConversionId": "string",
      "engineAccountId": "string",
      "floodlightOrderId": "string",
      "inventoryAccountId": "string",
      "productCountry": "string",
      "productGroupId": "string",
      "productId": "string",
      "productLanguage": "string",
      "quantityMillis": "string",
      "revenueMicros": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string",
      "state": "string",
      "storeId": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="doubleclicksearchconversioninsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConversionList](#schemaconversionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.conversion.updateAvailability

<a id="opIddoubleclicksearch.conversion.updateAvailability"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/conversion/updateAvailability \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "availabilities": [
      {
        "advertiserId": "string",
        "agencyId": "string",
        "availabilityTimestamp": "string",
        "customerId": "string",
        "segmentationId": "string",
        "segmentationName": "string",
        "segmentationType": "string"
      }
    ]
  }'
```

`POST /doubleclicksearch/v2/conversion/updateAvailability`

Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

> Body parameter

```json
{
  "availabilities": [
    {
      "advertiserId": "string",
      "agencyId": "string",
      "availabilityTimestamp": "string",
      "customerId": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string"
    }
  ]
}
```

<h3 id="doubleclicksearchconversionupdateavailability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[UpdateAvailabilityRequest](#schemaupdateavailabilityrequest)|false|none|
|» availabilities|body|[[Availability](#schemaavailability)]|false|The availabilities being requested.|

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
  "availabilities": [
    {
      "advertiserId": "string",
      "agencyId": "string",
      "availabilityTimestamp": "string",
      "customerId": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string"
    }
  ]
}
```

<h3 id="doubleclicksearchconversionupdateavailability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UpdateAvailabilityResponse](#schemaupdateavailabilityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.conversion.getByCustomerId

<a id="opIddoubleclicksearch.conversion.getByCustomerId"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/doubleclicksearch/v2/customer/string/conversion?endDate=20091101&rowCount=1&startDate=20091101&startRow=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /doubleclicksearch/v2/customer/{customerId}/conversion`

Retrieves a list of conversions from a DoubleClick Search engine account.

<h3 id="doubleclicksearchconversiongetbycustomerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Customer ID of a client account in the new Search Ads 360 experience.|
|endDate|query|integer|true|Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.|
|rowCount|query|integer|true|The number of conversions to return per call.|
|startDate|query|integer|true|First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.|
|startRow|query|integer|true|The 0-based starting index for retrieving conversions results.|
|adGroupId|query|string|false|Numeric ID of the ad group.|
|adId|query|string|false|Numeric ID of the ad.|
|advertiserId|query|string|false|Numeric ID of the advertiser.|
|agencyId|query|string|false|Numeric ID of the agency.|
|campaignId|query|string|false|Numeric ID of the campaign.|
|criterionId|query|string|false|Numeric ID of the criterion.|
|engineAccountId|query|string|false|Numeric ID of the engine account.|
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
  "conversion": [
    {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "attributionModel": "string",
      "campaignId": "string",
      "channel": "string",
      "clickId": "string",
      "conversionId": "string",
      "conversionModifiedTimestamp": "string",
      "conversionTimestamp": "string",
      "countMillis": "string",
      "criterionId": "string",
      "currencyCode": "string",
      "customDimension": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "customMetric": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "customerId": "string",
      "deviceType": "string",
      "dsConversionId": "string",
      "engineAccountId": "string",
      "floodlightOrderId": "string",
      "inventoryAccountId": "string",
      "productCountry": "string",
      "productGroupId": "string",
      "productId": "string",
      "productLanguage": "string",
      "quantityMillis": "string",
      "revenueMicros": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string",
      "state": "string",
      "storeId": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="doubleclicksearchconversiongetbycustomerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConversionList](#schemaconversionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

<h1 id="search-ads-360-api-reports">reports</h1>

## doubleclicksearch.reports.getIdMappingFile

<a id="opIddoubleclicksearch.reports.getIdMappingFile"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/agency/string/advertiser/string/idmapping \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/idmapping`

Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.

<h3 id="doubleclicksearchreportsgetidmappingfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agencyId|path|string|true|Legacy SA360 agency ID.|
|advertiserId|path|string|true|Legacy SA360 advertiser ID.|
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

<h3 id="doubleclicksearchreportsgetidmappingfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[IdMappingFile](#schemaidmappingfile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.reports.request

<a id="opIddoubleclicksearch.reports.request"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "columns": [
      {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      }
    ],
    "downloadFormat": "string",
    "filters": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "operator": "string",
        "values": [
          null
        ]
      }
    ],
    "includeDeletedEntities": true,
    "includeRemovedEntities": true,
    "maxRowsPerFile": 0,
    "orderBy": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "sortOrder": "string"
      }
    ],
    "reportScope": {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "campaignId": "string",
      "engineAccountId": "string",
      "keywordId": "string"
    },
    "reportType": "string",
    "rowCount": 0,
    "startRow": 0,
    "statisticsCurrency": "string",
    "timeRange": {
      "changedAttributesSinceTimestamp": "string",
      "changedMetricsSinceTimestamp": "string",
      "endDate": "string",
      "startDate": "string"
    },
    "verifySingleTimeZone": true
  }'
```

`POST /doubleclicksearch/v2/reports`

Inserts a report request into the reporting system.

> Body parameter

```json
{
  "columns": [
    {
      "columnName": "string",
      "customDimensionName": "string",
      "customMetricName": "string",
      "endDate": "string",
      "groupByColumn": true,
      "headerText": "string",
      "platformSource": "string",
      "productReportPerspective": "string",
      "savedColumnName": "string",
      "startDate": "string"
    }
  ],
  "downloadFormat": "string",
  "filters": [
    {
      "column": {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      },
      "operator": "string",
      "values": [
        null
      ]
    }
  ],
  "includeDeletedEntities": true,
  "includeRemovedEntities": true,
  "maxRowsPerFile": 0,
  "orderBy": [
    {
      "column": {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      },
      "sortOrder": "string"
    }
  ],
  "reportScope": {
    "adGroupId": "string",
    "adId": "string",
    "advertiserId": "string",
    "agencyId": "string",
    "campaignId": "string",
    "engineAccountId": "string",
    "keywordId": "string"
  },
  "reportType": "string",
  "rowCount": 0,
  "startRow": 0,
  "statisticsCurrency": "string",
  "timeRange": {
    "changedAttributesSinceTimestamp": "string",
    "changedMetricsSinceTimestamp": "string",
    "endDate": "string",
    "startDate": "string"
  },
  "verifySingleTimeZone": true
}
```

<h3 id="doubleclicksearchreportsrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ReportRequest](#schemareportrequest)|false|none|
|» columns|body|[[ReportApiColumnSpec](#schemareportapicolumnspec)]|false|The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the `columnName` parameter is required. For saved columns only the `savedColumnName` parameter is required. Both `columnName` and `savedColumnName` cannot be set in the same stanza.\ The maximum number of columns per request is 300.|
|» downloadFormat|body|string|false|Format that the report should be returned in. Currently `csv` or `tsv` is supported.|
|» filters|body|[object]|false|A list of filters to be applied to the report.\ The maximum number of filters per request is 300.|
|» » column|body|[ReportApiColumnSpec](#schemareportapicolumnspec)|false|Column to perform the filter on. This can be a DoubleClick Search column or a saved column.|
|» » operator|body|string|false|Operator to use in the filter. See the filter reference for a list of available operators.|
|» » values|body|[object]|false|A list of values to filter the column value against.\ The maximum number of filter values per request is 300.|
|» includeDeletedEntities|body|boolean|false|Determines if removed entities should be included in the report. Defaults to `false`. Deprecated, please use `includeRemovedEntities` instead.|
|» includeRemovedEntities|body|boolean|false|Determines if removed entities should be included in the report. Defaults to `false`.|
|» maxRowsPerFile|body|integer(int32)|false|Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are `1000000` to `100000000`, inclusive.|
|» orderBy|body|[object]|false|Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.\ The maximum number of orderings per request is 300.|
|» » column|body|[ReportApiColumnSpec](#schemareportapicolumnspec)|false|Column to perform the sort on. This can be a DoubleClick Search-defined column or a saved column.|
|» » sortOrder|body|string|false|The sort direction, which is either `ascending` or `descending`.|
|» reportScope|body|object|false|The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.|
|» » adGroupId|body|string(int64)|false|DS ad group ID.|
|» » adId|body|string(int64)|false|DS ad ID.|
|» » advertiserId|body|string(int64)|false|DS advertiser ID.|
|» » agencyId|body|string(int64)|false|DS agency ID.|
|» » campaignId|body|string(int64)|false|DS campaign ID.|
|» » engineAccountId|body|string(int64)|false|DS engine account ID.|
|» » keywordId|body|string(int64)|false|DS keyword ID.|
|» reportType|body|string|false|Determines the type of rows that are returned in the report. For example, if you specify `reportType: keyword`, each row in the report will contain data about a keyword. See the [Types of Reports](/search-ads/v2/report-types/) reference for the columns that are available for each type.|
|» rowCount|body|integer(int32)|false|Synchronous report only. The maximum number of rows to return; additional rows are dropped. Acceptable values are `0` to `10000`, inclusive. Defaults to `10000`.|
|» startRow|body|integer(int32)|false|Synchronous report only. Zero-based index of the first row to return. Acceptable values are `0` to `50000`, inclusive. Defaults to `0`.|
|» statisticsCurrency|body|string|false|Specifies the currency in which monetary will be returned. Possible values are: `usd`, `agency` (valid if the report is scoped to agency or lower), `advertiser` (valid if the report is scoped to * advertiser or lower), or `account` (valid if the report is scoped to engine account or lower).|
|» timeRange|body|object|false|If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.|
|» » changedAttributesSinceTimestamp|body|string|false|Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed attribute reports work.|
|» » changedMetricsSinceTimestamp|body|string|false|Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed metrics reports work.|
|» » endDate|body|string|false|Inclusive date in YYYY-MM-DD format.|
|» » startDate|body|string|false|Inclusive date in YYYY-MM-DD format.|
|» verifySingleTimeZone|body|boolean|false|If `true`, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to `false`.|

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
  "files": [
    {
      "byteCount": "string",
      "url": "string"
    }
  ],
  "id": "string",
  "isReportReady": true,
  "kind": "string",
  "request": {
    "columns": [
      {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      }
    ],
    "downloadFormat": "string",
    "filters": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "operator": "string",
        "values": [
          null
        ]
      }
    ],
    "includeDeletedEntities": true,
    "includeRemovedEntities": true,
    "maxRowsPerFile": 0,
    "orderBy": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "sortOrder": "string"
      }
    ],
    "reportScope": {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "campaignId": "string",
      "engineAccountId": "string",
      "keywordId": "string"
    },
    "reportType": "string",
    "rowCount": 0,
    "startRow": 0,
    "statisticsCurrency": "string",
    "timeRange": {
      "changedAttributesSinceTimestamp": "string",
      "changedMetricsSinceTimestamp": "string",
      "endDate": "string",
      "startDate": "string"
    },
    "verifySingleTimeZone": true
  },
  "rowCount": 0,
  "rows": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "statisticsCurrencyCode": "string",
  "statisticsTimeZone": "string"
}
```

<h3 id="doubleclicksearchreportsrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.reports.generate

<a id="opIddoubleclicksearch.reports.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/reports/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "columns": [
      {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      }
    ],
    "downloadFormat": "string",
    "filters": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "operator": "string",
        "values": [
          null
        ]
      }
    ],
    "includeDeletedEntities": true,
    "includeRemovedEntities": true,
    "maxRowsPerFile": 0,
    "orderBy": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "sortOrder": "string"
      }
    ],
    "reportScope": {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "campaignId": "string",
      "engineAccountId": "string",
      "keywordId": "string"
    },
    "reportType": "string",
    "rowCount": 0,
    "startRow": 0,
    "statisticsCurrency": "string",
    "timeRange": {
      "changedAttributesSinceTimestamp": "string",
      "changedMetricsSinceTimestamp": "string",
      "endDate": "string",
      "startDate": "string"
    },
    "verifySingleTimeZone": true
  }'
```

`POST /doubleclicksearch/v2/reports/generate`

Generates and returns a report immediately.

> Body parameter

```json
{
  "columns": [
    {
      "columnName": "string",
      "customDimensionName": "string",
      "customMetricName": "string",
      "endDate": "string",
      "groupByColumn": true,
      "headerText": "string",
      "platformSource": "string",
      "productReportPerspective": "string",
      "savedColumnName": "string",
      "startDate": "string"
    }
  ],
  "downloadFormat": "string",
  "filters": [
    {
      "column": {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      },
      "operator": "string",
      "values": [
        null
      ]
    }
  ],
  "includeDeletedEntities": true,
  "includeRemovedEntities": true,
  "maxRowsPerFile": 0,
  "orderBy": [
    {
      "column": {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      },
      "sortOrder": "string"
    }
  ],
  "reportScope": {
    "adGroupId": "string",
    "adId": "string",
    "advertiserId": "string",
    "agencyId": "string",
    "campaignId": "string",
    "engineAccountId": "string",
    "keywordId": "string"
  },
  "reportType": "string",
  "rowCount": 0,
  "startRow": 0,
  "statisticsCurrency": "string",
  "timeRange": {
    "changedAttributesSinceTimestamp": "string",
    "changedMetricsSinceTimestamp": "string",
    "endDate": "string",
    "startDate": "string"
  },
  "verifySingleTimeZone": true
}
```

<h3 id="doubleclicksearchreportsgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ReportRequest](#schemareportrequest)|false|none|
|» columns|body|[[ReportApiColumnSpec](#schemareportapicolumnspec)]|false|The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the `columnName` parameter is required. For saved columns only the `savedColumnName` parameter is required. Both `columnName` and `savedColumnName` cannot be set in the same stanza.\ The maximum number of columns per request is 300.|
|» downloadFormat|body|string|false|Format that the report should be returned in. Currently `csv` or `tsv` is supported.|
|» filters|body|[object]|false|A list of filters to be applied to the report.\ The maximum number of filters per request is 300.|
|» » column|body|[ReportApiColumnSpec](#schemareportapicolumnspec)|false|Column to perform the filter on. This can be a DoubleClick Search column or a saved column.|
|» » operator|body|string|false|Operator to use in the filter. See the filter reference for a list of available operators.|
|» » values|body|[object]|false|A list of values to filter the column value against.\ The maximum number of filter values per request is 300.|
|» includeDeletedEntities|body|boolean|false|Determines if removed entities should be included in the report. Defaults to `false`. Deprecated, please use `includeRemovedEntities` instead.|
|» includeRemovedEntities|body|boolean|false|Determines if removed entities should be included in the report. Defaults to `false`.|
|» maxRowsPerFile|body|integer(int32)|false|Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are `1000000` to `100000000`, inclusive.|
|» orderBy|body|[object]|false|Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.\ The maximum number of orderings per request is 300.|
|» » column|body|[ReportApiColumnSpec](#schemareportapicolumnspec)|false|Column to perform the sort on. This can be a DoubleClick Search-defined column or a saved column.|
|» » sortOrder|body|string|false|The sort direction, which is either `ascending` or `descending`.|
|» reportScope|body|object|false|The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.|
|» » adGroupId|body|string(int64)|false|DS ad group ID.|
|» » adId|body|string(int64)|false|DS ad ID.|
|» » advertiserId|body|string(int64)|false|DS advertiser ID.|
|» » agencyId|body|string(int64)|false|DS agency ID.|
|» » campaignId|body|string(int64)|false|DS campaign ID.|
|» » engineAccountId|body|string(int64)|false|DS engine account ID.|
|» » keywordId|body|string(int64)|false|DS keyword ID.|
|» reportType|body|string|false|Determines the type of rows that are returned in the report. For example, if you specify `reportType: keyword`, each row in the report will contain data about a keyword. See the [Types of Reports](/search-ads/v2/report-types/) reference for the columns that are available for each type.|
|» rowCount|body|integer(int32)|false|Synchronous report only. The maximum number of rows to return; additional rows are dropped. Acceptable values are `0` to `10000`, inclusive. Defaults to `10000`.|
|» startRow|body|integer(int32)|false|Synchronous report only. Zero-based index of the first row to return. Acceptable values are `0` to `50000`, inclusive. Defaults to `0`.|
|» statisticsCurrency|body|string|false|Specifies the currency in which monetary will be returned. Possible values are: `usd`, `agency` (valid if the report is scoped to agency or lower), `advertiser` (valid if the report is scoped to * advertiser or lower), or `account` (valid if the report is scoped to engine account or lower).|
|» timeRange|body|object|false|If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.|
|» » changedAttributesSinceTimestamp|body|string|false|Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed attribute reports work.|
|» » changedMetricsSinceTimestamp|body|string|false|Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed metrics reports work.|
|» » endDate|body|string|false|Inclusive date in YYYY-MM-DD format.|
|» » startDate|body|string|false|Inclusive date in YYYY-MM-DD format.|
|» verifySingleTimeZone|body|boolean|false|If `true`, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to `false`.|

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
  "files": [
    {
      "byteCount": "string",
      "url": "string"
    }
  ],
  "id": "string",
  "isReportReady": true,
  "kind": "string",
  "request": {
    "columns": [
      {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      }
    ],
    "downloadFormat": "string",
    "filters": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "operator": "string",
        "values": [
          null
        ]
      }
    ],
    "includeDeletedEntities": true,
    "includeRemovedEntities": true,
    "maxRowsPerFile": 0,
    "orderBy": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "sortOrder": "string"
      }
    ],
    "reportScope": {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "campaignId": "string",
      "engineAccountId": "string",
      "keywordId": "string"
    },
    "reportType": "string",
    "rowCount": 0,
    "startRow": 0,
    "statisticsCurrency": "string",
    "timeRange": {
      "changedAttributesSinceTimestamp": "string",
      "changedMetricsSinceTimestamp": "string",
      "endDate": "string",
      "startDate": "string"
    },
    "verifySingleTimeZone": true
  },
  "rowCount": 0,
  "rows": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "statisticsCurrencyCode": "string",
  "statisticsTimeZone": "string"
}
```

<h3 id="doubleclicksearchreportsgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.reports.get

<a id="opIddoubleclicksearch.reports.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /doubleclicksearch/v2/reports/{reportId}`

Polls for the status of a report request.

<h3 id="doubleclicksearchreportsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|ID of the report request being polled.|
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
  "files": [
    {
      "byteCount": "string",
      "url": "string"
    }
  ],
  "id": "string",
  "isReportReady": true,
  "kind": "string",
  "request": {
    "columns": [
      {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      }
    ],
    "downloadFormat": "string",
    "filters": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "operator": "string",
        "values": [
          null
        ]
      }
    ],
    "includeDeletedEntities": true,
    "includeRemovedEntities": true,
    "maxRowsPerFile": 0,
    "orderBy": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "sortOrder": "string"
      }
    ],
    "reportScope": {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "campaignId": "string",
      "engineAccountId": "string",
      "keywordId": "string"
    },
    "reportType": "string",
    "rowCount": 0,
    "startRow": 0,
    "statisticsCurrency": "string",
    "timeRange": {
      "changedAttributesSinceTimestamp": "string",
      "changedMetricsSinceTimestamp": "string",
      "endDate": "string",
      "startDate": "string"
    },
    "verifySingleTimeZone": true
  },
  "rowCount": 0,
  "rows": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "statisticsCurrencyCode": "string",
  "statisticsTimeZone": "string"
}
```

<h3 id="doubleclicksearchreportsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

## doubleclicksearch.reports.getFile

<a id="opIddoubleclicksearch.reports.getFile"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/reports/string/files/0 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}`

Downloads a report file encoded in UTF-8.

<h3 id="doubleclicksearchreportsgetfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|ID of the report.|
|reportFragment|path|integer|true|The index of the report fragment to download.|
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

<h3 id="doubleclicksearchreportsgetfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

<h1 id="search-ads-360-api-savedcolumns">savedColumns</h1>

## doubleclicksearch.savedColumns.list

<a id="opIddoubleclicksearch.savedColumns.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/doubleclicksearch/v2/agency/string/advertiser/string/savedcolumns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/savedcolumns`

Retrieve the list of saved columns for a specified advertiser.

<h3 id="doubleclicksearchsavedcolumnslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agencyId|path|string|true|DS ID of the agency.|
|advertiserId|path|string|true|DS ID of the advertiser.|
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
  "items": [
    {
      "kind": "string",
      "savedColumnName": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="doubleclicksearchsavedcolumnslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedColumnList](#schemasavedcolumnlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclicksearch ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclicksearch )
</aside>

# Schemas

<h2 id="tocS_Availability">Availability</h2>
<!-- backwards compatibility -->
<a id="schemaavailability"></a>
<a id="schema_Availability"></a>
<a id="tocSavailability"></a>
<a id="tocsavailability"></a>

```json
{
  "advertiserId": "string",
  "agencyId": "string",
  "availabilityTimestamp": "string",
  "customerId": "string",
  "segmentationId": "string",
  "segmentationName": "string",
  "segmentationType": "string"
}
```

A message containing availability data relevant to DoubleClick Search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertiserId|string(int64)|false|none|DS advertiser ID.|
|agencyId|string(int64)|false|none|DS agency ID.|
|availabilityTimestamp|string(int64)|false|none|The time by which all conversions have been uploaded, in epoch millis UTC.|
|customerId|string|false|none|Customer ID of a client account in the new Search Ads 360 experience.|
|segmentationId|string(int64)|false|none|The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).|
|segmentationName|string|false|none|The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).|
|segmentationType|string|false|none|The segmentation type that this availability is for (its default value is `FLOODLIGHT`).|

<h2 id="tocS_Conversion">Conversion</h2>
<!-- backwards compatibility -->
<a id="schemaconversion"></a>
<a id="schema_Conversion"></a>
<a id="tocSconversion"></a>
<a id="tocsconversion"></a>

```json
{
  "adGroupId": "string",
  "adId": "string",
  "advertiserId": "string",
  "agencyId": "string",
  "attributionModel": "string",
  "campaignId": "string",
  "channel": "string",
  "clickId": "string",
  "conversionId": "string",
  "conversionModifiedTimestamp": "string",
  "conversionTimestamp": "string",
  "countMillis": "string",
  "criterionId": "string",
  "currencyCode": "string",
  "customDimension": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customMetric": [
    {
      "name": "string",
      "value": 0
    }
  ],
  "customerId": "string",
  "deviceType": "string",
  "dsConversionId": "string",
  "engineAccountId": "string",
  "floodlightOrderId": "string",
  "inventoryAccountId": "string",
  "productCountry": "string",
  "productGroupId": "string",
  "productId": "string",
  "productLanguage": "string",
  "quantityMillis": "string",
  "revenueMicros": "string",
  "segmentationId": "string",
  "segmentationName": "string",
  "segmentationType": "string",
  "state": "string",
  "storeId": "string",
  "type": "string"
}
```

A conversion containing data relevant to DoubleClick Search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string(int64)|false|none|DS ad group ID.|
|adId|string(int64)|false|none|DS ad ID.|
|advertiserId|string(int64)|false|none|DS advertiser ID.|
|agencyId|string(int64)|false|none|DS agency ID.|
|attributionModel|string|false|none|Available to advertisers only after contacting DoubleClick Search customer support.|
|campaignId|string(int64)|false|none|DS campaign ID.|
|channel|string|false|none|Sales channel for the product. Acceptable values are: - "`local`": a physical store - "`online`": an online store |
|clickId|string|false|none|DS click ID for the conversion.|
|conversionId|string|false|none|For offline conversions, advertisers provide this ID. Advertisers can specify any ID that is meaningful to them. Each conversion in a request must specify a unique ID, and the combination of ID and timestamp must be unique amongst all conversions within the advertiser. For online conversions, DS copies the `dsConversionId` or `floodlightOrderId` into this property depending on the advertiser's Floodlight instructions.|
|conversionModifiedTimestamp|string(int64)|false|none|The time at which the conversion was last modified, in epoch millis UTC.|
|conversionTimestamp|string|false|none|The time at which the conversion took place, in epoch millis UTC.|
|countMillis|string(int64)|false|none|Available to advertisers only after contacting DoubleClick Search customer support.|
|criterionId|string(int64)|false|none|DS criterion (keyword) ID.|
|currencyCode|string|false|none|The currency code for the conversion's revenue. Should be in ISO 4217 alphabetic (3-char) format.|
|customDimension|[[CustomDimension](#schemacustomdimension)]|false|none|Custom dimensions for the conversion, which can be used to filter data in a report.|
|customMetric|[[CustomMetric](#schemacustommetric)]|false|none|Custom metrics for the conversion.|
|customerId|string|false|none|Customer ID of a client account in the new Search Ads 360 experience.|
|deviceType|string|false|none|The type of device on which the conversion occurred.|
|dsConversionId|string(int64)|false|none|ID that DoubleClick Search generates for each conversion.|
|engineAccountId|string(int64)|false|none|DS engine account ID.|
|floodlightOrderId|string|false|none|The Floodlight order ID provided by the advertiser for the conversion.|
|inventoryAccountId|string(int64)|false|none|ID that DS generates and uses to uniquely identify the inventory account that contains the product.|
|productCountry|string|false|none|The country registered for the Merchant Center feed that contains the product. Use an ISO 3166 code to specify a country.|
|productGroupId|string(int64)|false|none|DS product group ID.|
|productId|string|false|none|The product ID (SKU).|
|productLanguage|string|false|none|The language registered for the Merchant Center feed that contains the product. Use an ISO 639 code to specify a language.|
|quantityMillis|string(int64)|false|none|The quantity of this conversion, in millis.|
|revenueMicros|string|false|none|The revenue amount of this `TRANSACTION` conversion, in micros (value multiplied by 1000000, no decimal). For example, to specify a revenue value of "10" enter "10000000" (10 million) in your request.|
|segmentationId|string(int64)|false|none|The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).|
|segmentationName|string|false|none|The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).|
|segmentationType|string|false|none|The segmentation type of this conversion (for example, `FLOODLIGHT`).|
|state|string|false|none|The state of the conversion, that is, either `ACTIVE` or `REMOVED`. Note: state DELETED is deprecated.|
|storeId|string|false|none|The ID of the local store for which the product was advertised. Applicable only when the channel is "`local`".|
|type|string|false|none|The type of the conversion, that is, either `ACTION` or `TRANSACTION`. An `ACTION` conversion is an action by the user that has no monetarily quantifiable value, while a `TRANSACTION` conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (`ACTION`) versus ecommerce purchases (`TRANSACTION`).|

<h2 id="tocS_ConversionList">ConversionList</h2>
<!-- backwards compatibility -->
<a id="schemaconversionlist"></a>
<a id="schema_ConversionList"></a>
<a id="tocSconversionlist"></a>
<a id="tocsconversionlist"></a>

```json
{
  "conversion": [
    {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "attributionModel": "string",
      "campaignId": "string",
      "channel": "string",
      "clickId": "string",
      "conversionId": "string",
      "conversionModifiedTimestamp": "string",
      "conversionTimestamp": "string",
      "countMillis": "string",
      "criterionId": "string",
      "currencyCode": "string",
      "customDimension": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "customMetric": [
        {
          "name": "string",
          "value": 0
        }
      ],
      "customerId": "string",
      "deviceType": "string",
      "dsConversionId": "string",
      "engineAccountId": "string",
      "floodlightOrderId": "string",
      "inventoryAccountId": "string",
      "productCountry": "string",
      "productGroupId": "string",
      "productId": "string",
      "productLanguage": "string",
      "quantityMillis": "string",
      "revenueMicros": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string",
      "state": "string",
      "storeId": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

A list of conversions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversion|[[Conversion](#schemaconversion)]|false|none|The conversions being requested.|
|kind|string|false|none|Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList.|

<h2 id="tocS_CustomDimension">CustomDimension</h2>
<!-- backwards compatibility -->
<a id="schemacustomdimension"></a>
<a id="schema_CustomDimension"></a>
<a id="tocScustomdimension"></a>
<a id="tocscustomdimension"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

A message containing the custom dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Custom dimension name.|
|value|string|false|none|Custom dimension value.|

<h2 id="tocS_CustomMetric">CustomMetric</h2>
<!-- backwards compatibility -->
<a id="schemacustommetric"></a>
<a id="schema_CustomMetric"></a>
<a id="tocScustommetric"></a>
<a id="tocscustommetric"></a>

```json
{
  "name": "string",
  "value": 0
}
```

A message containing the custom metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Custom metric name.|
|value|number(double)|false|none|Custom metric numeric value.|

<h2 id="tocS_IdMappingFile">IdMappingFile</h2>
<!-- backwards compatibility -->
<a id="schemaidmappingfile"></a>
<a id="schema_IdMappingFile"></a>
<a id="tocSidmappingfile"></a>
<a id="tocsidmappingfile"></a>

```json
{}
```

File returned to https://developers.google.com/search-ads/v2/reference/reports/getIdMappingFile.

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "files": [
    {
      "byteCount": "string",
      "url": "string"
    }
  ],
  "id": "string",
  "isReportReady": true,
  "kind": "string",
  "request": {
    "columns": [
      {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      }
    ],
    "downloadFormat": "string",
    "filters": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "operator": "string",
        "values": [
          null
        ]
      }
    ],
    "includeDeletedEntities": true,
    "includeRemovedEntities": true,
    "maxRowsPerFile": 0,
    "orderBy": [
      {
        "column": {
          "columnName": "string",
          "customDimensionName": "string",
          "customMetricName": "string",
          "endDate": "string",
          "groupByColumn": true,
          "headerText": "string",
          "platformSource": "string",
          "productReportPerspective": "string",
          "savedColumnName": "string",
          "startDate": "string"
        },
        "sortOrder": "string"
      }
    ],
    "reportScope": {
      "adGroupId": "string",
      "adId": "string",
      "advertiserId": "string",
      "agencyId": "string",
      "campaignId": "string",
      "engineAccountId": "string",
      "keywordId": "string"
    },
    "reportType": "string",
    "rowCount": 0,
    "startRow": 0,
    "statisticsCurrency": "string",
    "timeRange": {
      "changedAttributesSinceTimestamp": "string",
      "changedMetricsSinceTimestamp": "string",
      "endDate": "string",
      "startDate": "string"
    },
    "verifySingleTimeZone": true
  },
  "rowCount": 0,
  "rows": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "statisticsCurrencyCode": "string",
  "statisticsTimeZone": "string"
}
```

A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[object]|false|none|Asynchronous report only. Contains a list of generated report files once the report has successfully completed.|
|id|string|false|none|Asynchronous report only. Id of the report.|
|isReportReady|boolean|false|none|Asynchronous report only. True if and only if the report has completed successfully and the report files are ready to be downloaded.|
|kind|string|false|none|Identifies this as a Report resource. Value: the fixed string `doubleclicksearch#report`.|
|request|[ReportRequest](#schemareportrequest)|false|none|The request that created the report. Optional fields not specified in the original request are filled with default values.|
|rowCount|integer(int32)|false|none|The number of report rows generated by the report, not including headers.|
|rows|[[ReportRow](#schemareportrow)]|false|none|Synchronous report only. Generated report rows.|
|statisticsCurrencyCode|string|false|none|The currency code of all monetary values produced in the report, including values that are set by users (e.g., keyword bid settings) and metrics (e.g., cost and revenue). The currency code of a report is determined by the `statisticsCurrency` field of the report request.|
|statisticsTimeZone|string|false|none|If all statistics of the report are sourced from the same time zone, this would be it. Otherwise the field is unset.|

<h2 id="tocS_ReportApiColumnSpec">ReportApiColumnSpec</h2>
<!-- backwards compatibility -->
<a id="schemareportapicolumnspec"></a>
<a id="schema_ReportApiColumnSpec"></a>
<a id="tocSreportapicolumnspec"></a>
<a id="tocsreportapicolumnspec"></a>

```json
{
  "columnName": "string",
  "customDimensionName": "string",
  "customMetricName": "string",
  "endDate": "string",
  "groupByColumn": true,
  "headerText": "string",
  "platformSource": "string",
  "productReportPerspective": "string",
  "savedColumnName": "string",
  "startDate": "string"
}
```

A request object used to create a DoubleClick Search report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnName|string|false|none|Name of a DoubleClick Search column to include in the report.|
|customDimensionName|string|false|none|Segments a report by a custom dimension. The report must be scoped to an advertiser or lower, and the custom dimension must already be set up in DoubleClick Search. The custom dimension name, which appears in DoubleClick Search, is case sensitive.\ If used in a conversion report, returns the value of the specified custom dimension for the given conversion, if set. This column does not segment the conversion report.|
|customMetricName|string|false|none|Name of a custom metric to include in the report. The report must be scoped to an advertiser or lower, and the custom metric must already be set up in DoubleClick Search. The custom metric name, which appears in DoubleClick Search, is case sensitive.|
|endDate|string|false|none|Inclusive day in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with `startDate`.|
|groupByColumn|boolean|false|none|Synchronous report only. Set to `true` to group by this column. Defaults to `false`.|
|headerText|string|false|none|Text used to identify this column in the report output; defaults to `columnName` or `savedColumnName` when not specified. This can be used to prevent collisions between DoubleClick Search columns and saved columns with the same name.|
|platformSource|string|false|none|The platform that is used to provide data for the custom dimension. Acceptable values are "floodlight".|
|productReportPerspective|string|false|none|Returns metrics only for a specific type of product activity. Accepted values are: - "`sold`": returns metrics only for products that were sold - "`advertised`": returns metrics only for products that were advertised in a Shopping campaign, and that might or might not have been sold |
|savedColumnName|string|false|none|Name of a saved column to include in the report. The report must be scoped at advertiser or lower, and this saved column must already be created in the DoubleClick Search UI.|
|startDate|string|false|none|Inclusive date in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with `endDate`.|

<h2 id="tocS_ReportRequest">ReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportrequest"></a>
<a id="schema_ReportRequest"></a>
<a id="tocSreportrequest"></a>
<a id="tocsreportrequest"></a>

```json
{
  "columns": [
    {
      "columnName": "string",
      "customDimensionName": "string",
      "customMetricName": "string",
      "endDate": "string",
      "groupByColumn": true,
      "headerText": "string",
      "platformSource": "string",
      "productReportPerspective": "string",
      "savedColumnName": "string",
      "startDate": "string"
    }
  ],
  "downloadFormat": "string",
  "filters": [
    {
      "column": {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      },
      "operator": "string",
      "values": [
        null
      ]
    }
  ],
  "includeDeletedEntities": true,
  "includeRemovedEntities": true,
  "maxRowsPerFile": 0,
  "orderBy": [
    {
      "column": {
        "columnName": "string",
        "customDimensionName": "string",
        "customMetricName": "string",
        "endDate": "string",
        "groupByColumn": true,
        "headerText": "string",
        "platformSource": "string",
        "productReportPerspective": "string",
        "savedColumnName": "string",
        "startDate": "string"
      },
      "sortOrder": "string"
    }
  ],
  "reportScope": {
    "adGroupId": "string",
    "adId": "string",
    "advertiserId": "string",
    "agencyId": "string",
    "campaignId": "string",
    "engineAccountId": "string",
    "keywordId": "string"
  },
  "reportType": "string",
  "rowCount": 0,
  "startRow": 0,
  "statisticsCurrency": "string",
  "timeRange": {
    "changedAttributesSinceTimestamp": "string",
    "changedMetricsSinceTimestamp": "string",
    "endDate": "string",
    "startDate": "string"
  },
  "verifySingleTimeZone": true
}
```

A request object used to create a DoubleClick Search report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[ReportApiColumnSpec](#schemareportapicolumnspec)]|false|none|The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the `columnName` parameter is required. For saved columns only the `savedColumnName` parameter is required. Both `columnName` and `savedColumnName` cannot be set in the same stanza.\ The maximum number of columns per request is 300.|
|downloadFormat|string|false|none|Format that the report should be returned in. Currently `csv` or `tsv` is supported.|
|filters|[object]|false|none|A list of filters to be applied to the report.\ The maximum number of filters per request is 300.|
|includeDeletedEntities|boolean|false|none|Determines if removed entities should be included in the report. Defaults to `false`. Deprecated, please use `includeRemovedEntities` instead.|
|includeRemovedEntities|boolean|false|none|Determines if removed entities should be included in the report. Defaults to `false`.|
|maxRowsPerFile|integer(int32)|false|none|Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are `1000000` to `100000000`, inclusive.|
|orderBy|[object]|false|none|Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.\ The maximum number of orderings per request is 300.|
|reportScope|object|false|none|The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.|
|reportType|string|false|none|Determines the type of rows that are returned in the report. For example, if you specify `reportType: keyword`, each row in the report will contain data about a keyword. See the [Types of Reports](/search-ads/v2/report-types/) reference for the columns that are available for each type.|
|rowCount|integer(int32)|false|none|Synchronous report only. The maximum number of rows to return; additional rows are dropped. Acceptable values are `0` to `10000`, inclusive. Defaults to `10000`.|
|startRow|integer(int32)|false|none|Synchronous report only. Zero-based index of the first row to return. Acceptable values are `0` to `50000`, inclusive. Defaults to `0`.|
|statisticsCurrency|string|false|none|Specifies the currency in which monetary will be returned. Possible values are: `usd`, `agency` (valid if the report is scoped to agency or lower), `advertiser` (valid if the report is scoped to * advertiser or lower), or `account` (valid if the report is scoped to engine account or lower).|
|timeRange|object|false|none|If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.|
|verifySingleTimeZone|boolean|false|none|If `true`, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to `false`.|

<h2 id="tocS_ReportRow">ReportRow</h2>
<!-- backwards compatibility -->
<a id="schemareportrow"></a>
<a id="schema_ReportRow"></a>
<a id="tocSreportrow"></a>
<a id="tocsreportrow"></a>

```json
{
  "property1": null,
  "property2": null
}
```

A row in a DoubleClick Search report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|Indicates the columns that are represented in this row. That is, each key corresponds to a column with a non-empty cell in this row.|

<h2 id="tocS_SavedColumn">SavedColumn</h2>
<!-- backwards compatibility -->
<a id="schemasavedcolumn"></a>
<a id="schema_SavedColumn"></a>
<a id="tocSsavedcolumn"></a>
<a id="tocssavedcolumn"></a>

```json
{
  "kind": "string",
  "savedColumnName": "string",
  "type": "string"
}
```

A saved column

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn.|
|savedColumnName|string|false|none|The name of the saved column.|
|type|string|false|none|The type of data this saved column will produce.|

<h2 id="tocS_SavedColumnList">SavedColumnList</h2>
<!-- backwards compatibility -->
<a id="schemasavedcolumnlist"></a>
<a id="schema_SavedColumnList"></a>
<a id="tocSsavedcolumnlist"></a>
<a id="tocssavedcolumnlist"></a>

```json
{
  "items": [
    {
      "kind": "string",
      "savedColumnName": "string",
      "type": "string"
    }
  ],
  "kind": "string"
}
```

A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SavedColumn](#schemasavedcolumn)]|false|none|The saved columns being requested.|
|kind|string|false|none|Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList.|

<h2 id="tocS_UpdateAvailabilityRequest">UpdateAvailabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateavailabilityrequest"></a>
<a id="schema_UpdateAvailabilityRequest"></a>
<a id="tocSupdateavailabilityrequest"></a>
<a id="tocsupdateavailabilityrequest"></a>

```json
{
  "availabilities": [
    {
      "advertiserId": "string",
      "agencyId": "string",
      "availabilityTimestamp": "string",
      "customerId": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string"
    }
  ]
}
```

The request to update availability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilities|[[Availability](#schemaavailability)]|false|none|The availabilities being requested.|

<h2 id="tocS_UpdateAvailabilityResponse">UpdateAvailabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateavailabilityresponse"></a>
<a id="schema_UpdateAvailabilityResponse"></a>
<a id="tocSupdateavailabilityresponse"></a>
<a id="tocsupdateavailabilityresponse"></a>

```json
{
  "availabilities": [
    {
      "advertiserId": "string",
      "agencyId": "string",
      "availabilityTimestamp": "string",
      "customerId": "string",
      "segmentationId": "string",
      "segmentationName": "string",
      "segmentationType": "string"
    }
  ]
}
```

The response to a update availability request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilities|[[Availability](#schemaavailability)]|false|none|The availabilities being returned.|
