<h1 id="aws-savings-plans">AWS Savings Plans v2019-06-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.

Base URLs:

* <a href="http://savingsplans.us-east-1.amazonaws.com">http://savingsplans.us-east-1.amazonaws.com</a> - The AWSSavingsPlans multi-region endpoint

* <a href="https://savingsplans.us-east-1.amazonaws.com">https://savingsplans.us-east-1.amazonaws.com</a> - The AWSSavingsPlans multi-region endpoint

* <a href="http://savingsplans.cn-north-1.amazonaws.com.cn">http://savingsplans.cn-north-1.amazonaws.com.cn</a> - The AWSSavingsPlans endpoint for China (Beijing) and China (Ningxia)

* <a href="https://savingsplans.cn-north-1.amazonaws.com.cn">https://savingsplans.cn-north-1.amazonaws.com.cn</a> - The AWSSavingsPlans endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/savingsplans/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-savings-plans-default">Default</h1>

## CreateSavingsPlan

<a id="opIdCreateSavingsPlan"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/CreateSavingsPlan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "savingsPlanOfferingId": "string",
    "commitment": "string",
    "upfrontPaymentAmount": "string",
    "purchaseTime": "1970-01-01T00:00:00Z",
    "clientToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /CreateSavingsPlan`

Creates a Savings Plan.

> Body parameter

```json
{
  "savingsPlanOfferingId": "string",
  "commitment": "string",
  "upfrontPaymentAmount": "string",
  "purchaseTime": "1970-01-01T00:00:00Z",
  "clientToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createsavingsplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» savingsPlanOfferingId|body|string|true|The ID of the offering.|
|» commitment|body|string|true|The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.|
|» upfrontPaymentAmount|body|string|false|The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>.|
|» purchaseTime|body|string(date-time)|false|The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).|
|» clientToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» tags|body|object|false|One or more tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "savingsPlanId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createsavingsplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSavingsPlanResponse](#schemacreatesavingsplanresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteQueuedSavingsPlan

<a id="opIdDeleteQueuedSavingsPlan"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/DeleteQueuedSavingsPlan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "savingsPlanId": "string"
  }'
```

`POST /DeleteQueuedSavingsPlan`

Deletes the queued purchase for the specified Savings Plan.

> Body parameter

```json
{
  "savingsPlanId": "string"
}
```

<h3 id="deletequeuedsavingsplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» savingsPlanId|body|string|true|The ID of the Savings Plan.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deletequeuedsavingsplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteQueuedSavingsPlanResponse](#schemadeletequeuedsavingsplanresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSavingsPlanRates

<a id="opIdDescribeSavingsPlanRates"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/DescribeSavingsPlanRates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "savingsPlanId": "string",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /DescribeSavingsPlanRates`

Describes the specified Savings Plans rates.

> Body parameter

```json
{
  "savingsPlanId": "string",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="describesavingsplanrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» savingsPlanId|body|string|true|The ID of the Savings Plan.|
|» filters|body|[[SavingsPlanRateFilter](#schemasavingsplanratefilter)]|false|The filters.|
|» nextToken|body|string|false|The token for the next page of results.|
|» maxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.|

> Example responses

> 200 Response

```json
{
  "savingsPlanId": {},
  "searchResults": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describesavingsplanrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSavingsPlanRatesResponse](#schemadescribesavingsplanratesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSavingsPlans

<a id="opIdDescribeSavingsPlans"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/DescribeSavingsPlans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "savingsPlanArns": [
      "string"
    ],
    "savingsPlanIds": [
      "string"
    ],
    "nextToken": "string",
    "maxResults": 1,
    "states": [
      "payment-pending"
    ],
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /DescribeSavingsPlans`

Describes the specified Savings Plans.

> Body parameter

```json
{
  "savingsPlanArns": [
    "string"
  ],
  "savingsPlanIds": [
    "string"
  ],
  "nextToken": "string",
  "maxResults": 1,
  "states": [
    "payment-pending"
  ],
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="describesavingsplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» savingsPlanArns|body|[[SavingsPlanArn](#schemasavingsplanarn)]|false|The Amazon Resource Names (ARN) of the Savings Plans.|
|» savingsPlanIds|body|[[SavingsPlanId](#schemasavingsplanid)]|false|The IDs of the Savings Plans.|
|» nextToken|body|string|false|The token for the next page of results.|
|» maxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.|
|» states|body|[[SavingsPlanState](#schemasavingsplanstate)]|false|The states.|
|» filters|body|[[SavingsPlanFilter](#schemasavingsplanfilter)]|false|The filters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» states|payment-pending|
|» states|payment-failed|
|» states|active|
|» states|retired|
|» states|queued|
|» states|queued-deleted|

> Example responses

> 200 Response

```json
{
  "savingsPlans": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describesavingsplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSavingsPlansResponse](#schemadescribesavingsplansresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSavingsPlansOfferingRates

<a id="opIdDescribeSavingsPlansOfferingRates"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/DescribeSavingsPlansOfferingRates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "savingsPlanOfferingIds": [
      "string"
    ],
    "savingsPlanPaymentOptions": [
      "All Upfront"
    ],
    "savingsPlanTypes": [
      "Compute"
    ],
    "products": [
      "EC2"
    ],
    "serviceCodes": [
      "AmazonEC2"
    ],
    "usageTypes": [
      "string"
    ],
    "operations": [
      "string"
    ],
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "nextToken": "string",
    "maxResults": 0
  }'
```

`POST /DescribeSavingsPlansOfferingRates`

Describes the specified Savings Plans offering rates.

> Body parameter

```json
{
  "savingsPlanOfferingIds": [
    "string"
  ],
  "savingsPlanPaymentOptions": [
    "All Upfront"
  ],
  "savingsPlanTypes": [
    "Compute"
  ],
  "products": [
    "EC2"
  ],
  "serviceCodes": [
    "AmazonEC2"
  ],
  "usageTypes": [
    "string"
  ],
  "operations": [
    "string"
  ],
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "nextToken": "string",
  "maxResults": 0
}
```

<h3 id="describesavingsplansofferingrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» savingsPlanOfferingIds|body|[[UUID](#schemauuid)]|false|The IDs of the offerings.|
|» savingsPlanPaymentOptions|body|[[SavingsPlanPaymentOption](#schemasavingsplanpaymentoption)]|false|The payment options.|
|» savingsPlanTypes|body|[[SavingsPlanType](#schemasavingsplantype)]|false|The plan types.|
|» products|body|[[SavingsPlanProductType](#schemasavingsplanproducttype)]|false|The AWS products.|
|» serviceCodes|body|[[SavingsPlanRateServiceCode](#schemasavingsplanrateservicecode)]|false|The services.|
|» usageTypes|body|[[SavingsPlanRateUsageType](#schemasavingsplanrateusagetype)]|false|The usage details of the line item in the billing report.|
|» operations|body|[[SavingsPlanRateOperation](#schemasavingsplanrateoperation)]|false|The specific AWS operation for the line item in the billing report.|
|» filters|body|[[SavingsPlanOfferingRateFilterElement](#schemasavingsplanofferingratefilterelement)]|false|The filters.|
|» nextToken|body|string|false|The token for the next page of results.|
|» maxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» savingsPlanPaymentOptions|All Upfront|
|» savingsPlanPaymentOptions|Partial Upfront|
|» savingsPlanPaymentOptions|No Upfront|
|» savingsPlanTypes|Compute|
|» savingsPlanTypes|EC2Instance|
|» savingsPlanTypes|SageMaker|
|» products|EC2|
|» products|Fargate|
|» products|Lambda|
|» products|SageMaker|
|» serviceCodes|AmazonEC2|
|» serviceCodes|AmazonECS|
|» serviceCodes|AmazonEKS|
|» serviceCodes|AWSLambda|
|» serviceCodes|AmazonSageMaker|

> Example responses

> 200 Response

```json
{
  "searchResults": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describesavingsplansofferingrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSavingsPlansOfferingRatesResponse](#schemadescribesavingsplansofferingratesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSavingsPlansOfferings

<a id="opIdDescribeSavingsPlansOfferings"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/DescribeSavingsPlansOfferings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "offeringIds": [
      "string"
    ],
    "paymentOptions": [
      "All Upfront"
    ],
    "productType": "EC2",
    "planTypes": [
      "Compute"
    ],
    "durations": [
      0
    ],
    "currencies": [
      "CNY"
    ],
    "descriptions": [
      "string"
    ],
    "serviceCodes": [
      "string"
    ],
    "usageTypes": [
      "string"
    ],
    "operations": [
      "string"
    ],
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "nextToken": "string",
    "maxResults": 0
  }'
```

`POST /DescribeSavingsPlansOfferings`

Describes the specified Savings Plans offerings.

> Body parameter

```json
{
  "offeringIds": [
    "string"
  ],
  "paymentOptions": [
    "All Upfront"
  ],
  "productType": "EC2",
  "planTypes": [
    "Compute"
  ],
  "durations": [
    0
  ],
  "currencies": [
    "CNY"
  ],
  "descriptions": [
    "string"
  ],
  "serviceCodes": [
    "string"
  ],
  "usageTypes": [
    "string"
  ],
  "operations": [
    "string"
  ],
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "nextToken": "string",
  "maxResults": 0
}
```

<h3 id="describesavingsplansofferings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» offeringIds|body|[[UUID](#schemauuid)]|false|The IDs of the offerings.|
|» paymentOptions|body|[[SavingsPlanPaymentOption](#schemasavingsplanpaymentoption)]|false|The payment options.|
|» productType|body|string|false|The product type.|
|» planTypes|body|[[SavingsPlanType](#schemasavingsplantype)]|false|The plan type.|
|» durations|body|[[SavingsPlansDuration](#schemasavingsplansduration)]|false|The durations, in seconds.|
|» currencies|body|[[CurrencyCode](#schemacurrencycode)]|false|The currencies.|
|» descriptions|body|[[SavingsPlanDescription](#schemasavingsplandescription)]|false|The descriptions.|
|» serviceCodes|body|[[SavingsPlanServiceCode](#schemasavingsplanservicecode)]|false|The services.|
|» usageTypes|body|[[SavingsPlanUsageType](#schemasavingsplanusagetype)]|false|The usage details of the line item in the billing report.|
|» operations|body|[[SavingsPlanOperation](#schemasavingsplanoperation)]|false|The specific AWS operation for the line item in the billing report.|
|» filters|body|[[SavingsPlanOfferingFilterElement](#schemasavingsplanofferingfilterelement)]|false|The filters.|
|» nextToken|body|string|false|The token for the next page of results.|
|» maxResults|body|integer|false|The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» paymentOptions|All Upfront|
|» paymentOptions|Partial Upfront|
|» paymentOptions|No Upfront|
|» productType|EC2|
|» productType|Fargate|
|» productType|Lambda|
|» productType|SageMaker|
|» planTypes|Compute|
|» planTypes|EC2Instance|
|» planTypes|SageMaker|
|» currencies|CNY|
|» currencies|USD|

> Example responses

> 200 Response

```json
{
  "searchResults": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describesavingsplansofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSavingsPlansOfferingsResponse](#schemadescribesavingsplansofferingsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/ListTagsForResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "string"
  }'
```

`POST /ListTagsForResource`

Lists the tags for the specified resource.

> Body parameter

```json
{
  "resourceArn": "string"
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource.|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/TagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /TagResource`

Adds the specified tags to the specified resource.

> Body parameter

```json
{
  "resourceArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource.|
|» tags|body|object|true|One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://savingsplans.us-east-1.amazonaws.com/UntagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "string",
    "tagKeys": [
      "string"
    ]
  }'
```

`POST /UntagResource`

Removes the specified tags from the specified resource.

> Body parameter

```json
{
  "resourceArn": "string",
  "tagKeys": [
    "string"
  ]
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource.|
|» tagKeys|body|[[TagKey](#schematagkey)]|true|The tag keys.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateSavingsPlanResponse">CreateSavingsPlanResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesavingsplanresponse"></a>
<a id="schema_CreateSavingsPlanResponse"></a>
<a id="tocScreatesavingsplanresponse"></a>
<a id="tocscreatesavingsplanresponse"></a>

```json
{
  "savingsPlanId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanId|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_DeleteQueuedSavingsPlanResponse">DeleteQueuedSavingsPlanResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletequeuedsavingsplanresponse"></a>
<a id="schema_DeleteQueuedSavingsPlanResponse"></a>
<a id="tocSdeletequeuedsavingsplanresponse"></a>
<a id="tocsdeletequeuedsavingsplanresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeSavingsPlanRatesResponse">DescribeSavingsPlanRatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplanratesresponse"></a>
<a id="schema_DescribeSavingsPlanRatesResponse"></a>
<a id="tocSdescribesavingsplanratesresponse"></a>
<a id="tocsdescribesavingsplanratesresponse"></a>

```json
{
  "savingsPlanId": {},
  "searchResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanId|object|false|none|none|
|searchResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SavingsPlanRateFilter">SavingsPlanRateFilter</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratefilter"></a>
<a id="schema_SavingsPlanRateFilter"></a>
<a id="tocSsavingsplanratefilter"></a>
<a id="tocssavingsplanratefilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

Information about a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_DescribeSavingsPlansResponse">DescribeSavingsPlansResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplansresponse"></a>
<a id="schema_DescribeSavingsPlansResponse"></a>
<a id="tocSdescribesavingsplansresponse"></a>
<a id="tocsdescribesavingsplansresponse"></a>

```json
{
  "savingsPlans": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlans|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SavingsPlanArn">SavingsPlanArn</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanarn"></a>
<a id="schema_SavingsPlanArn"></a>
<a id="tocSsavingsplanarn"></a>
<a id="tocssavingsplanarn"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanId">SavingsPlanId</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanid"></a>
<a id="schema_SavingsPlanId"></a>
<a id="tocSsavingsplanid"></a>
<a id="tocssavingsplanid"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanState">SavingsPlanState</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanstate"></a>
<a id="schema_SavingsPlanState"></a>
<a id="tocSsavingsplanstate"></a>
<a id="tocssavingsplanstate"></a>

```json
"payment-pending"
```

<h2 id="tocS_SavingsPlanFilter">SavingsPlanFilter</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanfilter"></a>
<a id="schema_SavingsPlanFilter"></a>
<a id="tocSsavingsplanfilter"></a>
<a id="tocssavingsplanfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

Information about a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_DescribeSavingsPlansOfferingRatesResponse">DescribeSavingsPlansOfferingRatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplansofferingratesresponse"></a>
<a id="schema_DescribeSavingsPlansOfferingRatesResponse"></a>
<a id="tocSdescribesavingsplansofferingratesresponse"></a>
<a id="tocsdescribesavingsplansofferingratesresponse"></a>

```json
{
  "searchResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanPaymentOption">SavingsPlanPaymentOption</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanpaymentoption"></a>
<a id="schema_SavingsPlanPaymentOption"></a>
<a id="tocSsavingsplanpaymentoption"></a>
<a id="tocssavingsplanpaymentoption"></a>

```json
"All Upfront"
```

<h2 id="tocS_SavingsPlanType">SavingsPlanType</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplantype"></a>
<a id="schema_SavingsPlanType"></a>
<a id="tocSsavingsplantype"></a>
<a id="tocssavingsplantype"></a>

```json
"Compute"
```

<h2 id="tocS_SavingsPlanProductType">SavingsPlanProductType</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanproducttype"></a>
<a id="schema_SavingsPlanProductType"></a>
<a id="tocSsavingsplanproducttype"></a>
<a id="tocssavingsplanproducttype"></a>

```json
"EC2"
```

<h2 id="tocS_SavingsPlanRateServiceCode">SavingsPlanRateServiceCode</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateservicecode"></a>
<a id="schema_SavingsPlanRateServiceCode"></a>
<a id="tocSsavingsplanrateservicecode"></a>
<a id="tocssavingsplanrateservicecode"></a>

```json
"AmazonEC2"
```

<h2 id="tocS_SavingsPlanRateUsageType">SavingsPlanRateUsageType</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateusagetype"></a>
<a id="schema_SavingsPlanRateUsageType"></a>
<a id="tocSsavingsplanrateusagetype"></a>
<a id="tocssavingsplanrateusagetype"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanRateOperation">SavingsPlanRateOperation</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateoperation"></a>
<a id="schema_SavingsPlanRateOperation"></a>
<a id="tocSsavingsplanrateoperation"></a>
<a id="tocssavingsplanrateoperation"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanOfferingRateFilterElement">SavingsPlanOfferingRateFilterElement</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingratefilterelement"></a>
<a id="schema_SavingsPlanOfferingRateFilterElement"></a>
<a id="tocSsavingsplanofferingratefilterelement"></a>
<a id="tocssavingsplanofferingratefilterelement"></a>

```json
{
  "name": {},
  "values": {}
}
```

Information about a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_DescribeSavingsPlansOfferingsResponse">DescribeSavingsPlansOfferingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplansofferingsresponse"></a>
<a id="schema_DescribeSavingsPlansOfferingsResponse"></a>
<a id="tocSdescribesavingsplansofferingsresponse"></a>
<a id="tocsdescribesavingsplansofferingsresponse"></a>

```json
{
  "searchResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SavingsPlansDuration">SavingsPlansDuration</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansduration"></a>
<a id="schema_SavingsPlansDuration"></a>
<a id="tocSsavingsplansduration"></a>
<a id="tocssavingsplansduration"></a>

```json
0
```

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"CNY"
```

<h2 id="tocS_SavingsPlanDescription">SavingsPlanDescription</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplandescription"></a>
<a id="schema_SavingsPlanDescription"></a>
<a id="tocSsavingsplandescription"></a>
<a id="tocssavingsplandescription"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanServiceCode">SavingsPlanServiceCode</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanservicecode"></a>
<a id="schema_SavingsPlanServiceCode"></a>
<a id="tocSsavingsplanservicecode"></a>
<a id="tocssavingsplanservicecode"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanUsageType">SavingsPlanUsageType</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanusagetype"></a>
<a id="schema_SavingsPlanUsageType"></a>
<a id="tocSsavingsplanusagetype"></a>
<a id="tocssavingsplanusagetype"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanOperation">SavingsPlanOperation</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanoperation"></a>
<a id="schema_SavingsPlanOperation"></a>
<a id="tocSsavingsplanoperation"></a>
<a id="tocssavingsplanoperation"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanOfferingFilterElement">SavingsPlanOfferingFilterElement</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingfilterelement"></a>
<a id="schema_SavingsPlanOfferingFilterElement"></a>
<a id="tocSsavingsplanofferingfilterelement"></a>
<a id="tocssavingsplanofferingfilterelement"></a>

```json
{
  "name": {},
  "values": {}
}
```

Information about a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
"string"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanOfferingId">SavingsPlanOfferingId</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingid"></a>
<a id="schema_SavingsPlanOfferingId"></a>
<a id="tocSsavingsplanofferingid"></a>
<a id="tocssavingsplanofferingid"></a>

```json
"string"
```

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateSavingsPlanRequest">CreateSavingsPlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesavingsplanrequest"></a>
<a id="schema_CreateSavingsPlanRequest"></a>
<a id="tocScreatesavingsplanrequest"></a>
<a id="tocscreatesavingsplanrequest"></a>

```json
{
  "savingsPlanOfferingId": {},
  "commitment": {},
  "upfrontPaymentAmount": {},
  "purchaseTime": {},
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanOfferingId|object|true|none|none|
|commitment|object|true|none|none|
|upfrontPaymentAmount|object|false|none|none|
|purchaseTime|object|false|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CurrencyList">CurrencyList</h2>
<!-- backwards compatibility -->
<a id="schemacurrencylist"></a>
<a id="schema_CurrencyList"></a>
<a id="tocScurrencylist"></a>
<a id="tocscurrencylist"></a>

```json
[
  "CNY"
]
```

<h2 id="tocS_DeleteQueuedSavingsPlanRequest">DeleteQueuedSavingsPlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequeuedsavingsplanrequest"></a>
<a id="schema_DeleteQueuedSavingsPlanRequest"></a>
<a id="tocSdeletequeuedsavingsplanrequest"></a>
<a id="tocsdeletequeuedsavingsplanrequest"></a>

```json
{
  "savingsPlanId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanId|object|true|none|none|

<h2 id="tocS_SavingsPlanRateFilterList">SavingsPlanRateFilterList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratefilterlist"></a>
<a id="schema_SavingsPlanRateFilterList"></a>
<a id="tocSsavingsplanratefilterlist"></a>
<a id="tocssavingsplanratefilterlist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_DescribeSavingsPlanRatesRequest">DescribeSavingsPlanRatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplanratesrequest"></a>
<a id="schema_DescribeSavingsPlanRatesRequest"></a>
<a id="tocSdescribesavingsplanratesrequest"></a>
<a id="tocsdescribesavingsplanratesrequest"></a>

```json
{
  "savingsPlanId": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanId|object|true|none|none|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_SavingsPlanRateList">SavingsPlanRateList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratelist"></a>
<a id="schema_SavingsPlanRateList"></a>
<a id="tocSsavingsplanratelist"></a>
<a id="tocssavingsplanratelist"></a>

```json
[
  {
    "rate": {},
    "currency": {},
    "unit": {},
    "productType": {},
    "serviceCode": {},
    "usageType": {},
    "operation": {},
    "properties": null
  }
]
```

<h2 id="tocS_UUIDs">UUIDs</h2>
<!-- backwards compatibility -->
<a id="schemauuids"></a>
<a id="schema_UUIDs"></a>
<a id="tocSuuids"></a>
<a id="tocsuuids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanPaymentOptionList">SavingsPlanPaymentOptionList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanpaymentoptionlist"></a>
<a id="schema_SavingsPlanPaymentOptionList"></a>
<a id="tocSsavingsplanpaymentoptionlist"></a>
<a id="tocssavingsplanpaymentoptionlist"></a>

```json
[
  "All Upfront"
]
```

<h2 id="tocS_SavingsPlanTypeList">SavingsPlanTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplantypelist"></a>
<a id="schema_SavingsPlanTypeList"></a>
<a id="tocSsavingsplantypelist"></a>
<a id="tocssavingsplantypelist"></a>

```json
[
  "Compute"
]
```

<h2 id="tocS_SavingsPlanProductTypeList">SavingsPlanProductTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanproducttypelist"></a>
<a id="schema_SavingsPlanProductTypeList"></a>
<a id="tocSsavingsplanproducttypelist"></a>
<a id="tocssavingsplanproducttypelist"></a>

```json
[
  "EC2"
]
```

<h2 id="tocS_SavingsPlanRateServiceCodeList">SavingsPlanRateServiceCodeList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateservicecodelist"></a>
<a id="schema_SavingsPlanRateServiceCodeList"></a>
<a id="tocSsavingsplanrateservicecodelist"></a>
<a id="tocssavingsplanrateservicecodelist"></a>

```json
[
  "AmazonEC2"
]
```

<h2 id="tocS_SavingsPlanRateUsageTypeList">SavingsPlanRateUsageTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateusagetypelist"></a>
<a id="schema_SavingsPlanRateUsageTypeList"></a>
<a id="tocSsavingsplanrateusagetypelist"></a>
<a id="tocssavingsplanrateusagetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanRateOperationList">SavingsPlanRateOperationList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateoperationlist"></a>
<a id="schema_SavingsPlanRateOperationList"></a>
<a id="tocSsavingsplanrateoperationlist"></a>
<a id="tocssavingsplanrateoperationlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanOfferingRateFiltersList">SavingsPlanOfferingRateFiltersList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingratefilterslist"></a>
<a id="schema_SavingsPlanOfferingRateFiltersList"></a>
<a id="tocSsavingsplanofferingratefilterslist"></a>
<a id="tocssavingsplanofferingratefilterslist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
0
```

<h2 id="tocS_DescribeSavingsPlansOfferingRatesRequest">DescribeSavingsPlansOfferingRatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplansofferingratesrequest"></a>
<a id="schema_DescribeSavingsPlansOfferingRatesRequest"></a>
<a id="tocSdescribesavingsplansofferingratesrequest"></a>
<a id="tocsdescribesavingsplansofferingratesrequest"></a>

```json
{
  "savingsPlanOfferingIds": {},
  "savingsPlanPaymentOptions": {},
  "savingsPlanTypes": {},
  "products": {},
  "serviceCodes": {},
  "usageTypes": {},
  "operations": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanOfferingIds|object|false|none|none|
|savingsPlanPaymentOptions|object|false|none|none|
|savingsPlanTypes|object|false|none|none|
|products|object|false|none|none|
|serviceCodes|object|false|none|none|
|usageTypes|object|false|none|none|
|operations|object|false|none|none|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_SavingsPlanOfferingRatesList">SavingsPlanOfferingRatesList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingrateslist"></a>
<a id="schema_SavingsPlanOfferingRatesList"></a>
<a id="tocSsavingsplanofferingrateslist"></a>
<a id="tocssavingsplanofferingrateslist"></a>

```json
[
  {
    "savingsPlanOffering": {
      "offeringId": {},
      "paymentOption": {},
      "planType": {},
      "durationSeconds": {},
      "currency": {},
      "planDescription": {}
    },
    "rate": {},
    "unit": {},
    "productType": {},
    "serviceCode": {},
    "usageType": {},
    "operation": {},
    "properties": null
  }
]
```

<h2 id="tocS_DurationsList">DurationsList</h2>
<!-- backwards compatibility -->
<a id="schemadurationslist"></a>
<a id="schema_DurationsList"></a>
<a id="tocSdurationslist"></a>
<a id="tocsdurationslist"></a>

```json
[
  0
]
```

<h2 id="tocS_SavingsPlanDescriptionsList">SavingsPlanDescriptionsList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplandescriptionslist"></a>
<a id="schema_SavingsPlanDescriptionsList"></a>
<a id="tocSsavingsplandescriptionslist"></a>
<a id="tocssavingsplandescriptionslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanServiceCodeList">SavingsPlanServiceCodeList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanservicecodelist"></a>
<a id="schema_SavingsPlanServiceCodeList"></a>
<a id="tocSsavingsplanservicecodelist"></a>
<a id="tocssavingsplanservicecodelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanUsageTypeList">SavingsPlanUsageTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanusagetypelist"></a>
<a id="schema_SavingsPlanUsageTypeList"></a>
<a id="tocSsavingsplanusagetypelist"></a>
<a id="tocssavingsplanusagetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanOperationList">SavingsPlanOperationList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanoperationlist"></a>
<a id="schema_SavingsPlanOperationList"></a>
<a id="tocSsavingsplanoperationlist"></a>
<a id="tocssavingsplanoperationlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanOfferingFiltersList">SavingsPlanOfferingFiltersList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingfilterslist"></a>
<a id="schema_SavingsPlanOfferingFiltersList"></a>
<a id="tocSsavingsplanofferingfilterslist"></a>
<a id="tocssavingsplanofferingfilterslist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_DescribeSavingsPlansOfferingsRequest">DescribeSavingsPlansOfferingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplansofferingsrequest"></a>
<a id="schema_DescribeSavingsPlansOfferingsRequest"></a>
<a id="tocSdescribesavingsplansofferingsrequest"></a>
<a id="tocsdescribesavingsplansofferingsrequest"></a>

```json
{
  "offeringIds": {},
  "paymentOptions": {},
  "productType": {},
  "planTypes": {},
  "durations": {},
  "currencies": {},
  "descriptions": {},
  "serviceCodes": {},
  "usageTypes": {},
  "operations": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringIds|object|false|none|none|
|paymentOptions|object|false|none|none|
|productType|object|false|none|none|
|planTypes|object|false|none|none|
|durations|object|false|none|none|
|currencies|object|false|none|none|
|descriptions|object|false|none|none|
|serviceCodes|object|false|none|none|
|usageTypes|object|false|none|none|
|operations|object|false|none|none|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_SavingsPlanOfferingsList">SavingsPlanOfferingsList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingslist"></a>
<a id="schema_SavingsPlanOfferingsList"></a>
<a id="tocSsavingsplanofferingslist"></a>
<a id="tocssavingsplanofferingslist"></a>

```json
[
  {
    "offeringId": {},
    "productTypes": {},
    "planType": {},
    "description": {},
    "paymentOption": {},
    "durationSeconds": {},
    "currency": {},
    "serviceCode": {},
    "usageType": {},
    "operation": {},
    "properties": null
  }
]
```

<h2 id="tocS_SavingsPlanArnList">SavingsPlanArnList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanarnlist"></a>
<a id="schema_SavingsPlanArnList"></a>
<a id="tocSsavingsplanarnlist"></a>
<a id="tocssavingsplanarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanIdList">SavingsPlanIdList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanidlist"></a>
<a id="schema_SavingsPlanIdList"></a>
<a id="tocSsavingsplanidlist"></a>
<a id="tocssavingsplanidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SavingsPlanStateList">SavingsPlanStateList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanstatelist"></a>
<a id="schema_SavingsPlanStateList"></a>
<a id="tocSsavingsplanstatelist"></a>
<a id="tocssavingsplanstatelist"></a>

```json
[
  "payment-pending"
]
```

<h2 id="tocS_SavingsPlanFilterList">SavingsPlanFilterList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanfilterlist"></a>
<a id="schema_SavingsPlanFilterList"></a>
<a id="tocSsavingsplanfilterlist"></a>
<a id="tocssavingsplanfilterlist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_DescribeSavingsPlansRequest">DescribeSavingsPlansRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesavingsplansrequest"></a>
<a id="schema_DescribeSavingsPlansRequest"></a>
<a id="tocSdescribesavingsplansrequest"></a>
<a id="tocsdescribesavingsplansrequest"></a>

```json
{
  "savingsPlanArns": {},
  "savingsPlanIds": {},
  "nextToken": {},
  "maxResults": {},
  "states": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanArns|object|false|none|none|
|savingsPlanIds|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|states|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_SavingsPlanList">SavingsPlanList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanlist"></a>
<a id="schema_SavingsPlanList"></a>
<a id="tocSsavingsplanlist"></a>
<a id="tocssavingsplanlist"></a>

```json
[
  {
    "offeringId": {},
    "savingsPlanId": {},
    "savingsPlanArn": {},
    "description": {},
    "start": {},
    "end": {},
    "state": {},
    "region": {},
    "ec2InstanceFamily": {},
    "savingsPlanType": {},
    "paymentOption": {},
    "productTypes": {},
    "currency": {},
    "commitment": {},
    "upfrontPaymentAmount": {},
    "recurringPaymentAmount": {},
    "termDurationInSeconds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_EC2InstanceFamily">EC2InstanceFamily</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancefamily"></a>
<a id="schema_EC2InstanceFamily"></a>
<a id="tocSec2instancefamily"></a>
<a id="tocsec2instancefamily"></a>

```json
"string"
```

<h2 id="tocS_JsonSafeFilterValueString">JsonSafeFilterValueString</h2>
<!-- backwards compatibility -->
<a id="schemajsonsafefiltervaluestring"></a>
<a id="schema_JsonSafeFilterValueString"></a>
<a id="tocSjsonsafefiltervaluestring"></a>
<a id="tocsjsonsafefiltervaluestring"></a>

```json
"string"
```

<h2 id="tocS_FilterValuesList">FilterValuesList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalueslist"></a>
<a id="schema_FilterValuesList"></a>
<a id="tocSfiltervalueslist"></a>
<a id="tocsfiltervalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ListOfStrings">ListOfStrings</h2>
<!-- backwards compatibility -->
<a id="schemalistofstrings"></a>
<a id="schema_ListOfStrings"></a>
<a id="tocSlistofstrings"></a>
<a id="tocslistofstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_ParentSavingsPlanOffering">ParentSavingsPlanOffering</h2>
<!-- backwards compatibility -->
<a id="schemaparentsavingsplanoffering"></a>
<a id="schema_ParentSavingsPlanOffering"></a>
<a id="tocSparentsavingsplanoffering"></a>
<a id="tocsparentsavingsplanoffering"></a>

```json
{
  "offeringId": {},
  "paymentOption": {},
  "planType": {},
  "durationSeconds": {},
  "currency": {},
  "planDescription": {}
}
```

Information about a Savings Plan offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringId|object|false|none|none|
|paymentOption|object|false|none|none|
|planType|object|false|none|none|
|durationSeconds|object|false|none|none|
|currency|object|false|none|none|
|planDescription|object|false|none|none|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_TermDurationInSeconds">TermDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schematermdurationinseconds"></a>
<a id="schema_TermDurationInSeconds"></a>
<a id="tocStermdurationinseconds"></a>
<a id="tocstermdurationinseconds"></a>

```json
0
```

<h2 id="tocS_SavingsPlan">SavingsPlan</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplan"></a>
<a id="schema_SavingsPlan"></a>
<a id="tocSsavingsplan"></a>
<a id="tocssavingsplan"></a>

```json
{
  "offeringId": {},
  "savingsPlanId": {},
  "savingsPlanArn": {},
  "description": {},
  "start": {},
  "end": {},
  "state": {},
  "region": {},
  "ec2InstanceFamily": {},
  "savingsPlanType": {},
  "paymentOption": {},
  "productTypes": {},
  "currency": {},
  "commitment": {},
  "upfrontPaymentAmount": {},
  "recurringPaymentAmount": {},
  "termDurationInSeconds": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a Savings Plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringId|object|false|none|none|
|savingsPlanId|object|false|none|none|
|savingsPlanArn|object|false|none|none|
|description|object|false|none|none|
|start|object|false|none|none|
|end|object|false|none|none|
|state|object|false|none|none|
|region|object|false|none|none|
|ec2InstanceFamily|object|false|none|none|
|savingsPlanType|object|false|none|none|
|paymentOption|object|false|none|none|
|productTypes|object|false|none|none|
|currency|object|false|none|none|
|commitment|object|false|none|none|
|upfrontPaymentAmount|object|false|none|none|
|recurringPaymentAmount|object|false|none|none|
|termDurationInSeconds|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SavingsPlansFilterName">SavingsPlansFilterName</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplansfiltername"></a>
<a id="schema_SavingsPlansFilterName"></a>
<a id="tocSsavingsplansfiltername"></a>
<a id="tocssavingsplansfiltername"></a>

```json
"region"
```

<h2 id="tocS_SavingsPlanOffering">SavingsPlanOffering</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanoffering"></a>
<a id="schema_SavingsPlanOffering"></a>
<a id="tocSsavingsplanoffering"></a>
<a id="tocssavingsplanoffering"></a>

```json
{
  "offeringId": {},
  "productTypes": {},
  "planType": {},
  "description": {},
  "paymentOption": {},
  "durationSeconds": {},
  "currency": {},
  "serviceCode": {},
  "usageType": {},
  "operation": {},
  "properties": null
}
```

Information about a Savings Plan offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offeringId|object|false|none|none|
|productTypes|object|false|none|none|
|planType|object|false|none|none|
|description|object|false|none|none|
|paymentOption|object|false|none|none|
|durationSeconds|object|false|none|none|
|currency|object|false|none|none|
|serviceCode|object|false|none|none|
|usageType|object|false|none|none|
|operation|object|false|none|none|
|properties|object|false|none|The properties.|

<h2 id="tocS_SavingsPlanOfferingFilterAttribute">SavingsPlanOfferingFilterAttribute</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingfilterattribute"></a>
<a id="schema_SavingsPlanOfferingFilterAttribute"></a>
<a id="tocSsavingsplanofferingfilterattribute"></a>
<a id="tocssavingsplanofferingfilterattribute"></a>

```json
"region"
```

<h2 id="tocS_SavingsPlanOfferingPropertyKey">SavingsPlanOfferingPropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingpropertykey"></a>
<a id="schema_SavingsPlanOfferingPropertyKey"></a>
<a id="tocSsavingsplanofferingpropertykey"></a>
<a id="tocssavingsplanofferingpropertykey"></a>

```json
"region"
```

<h2 id="tocS_SavingsPlanOfferingProperty">SavingsPlanOfferingProperty</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingproperty"></a>
<a id="schema_SavingsPlanOfferingProperty"></a>
<a id="tocSsavingsplanofferingproperty"></a>
<a id="tocssavingsplanofferingproperty"></a>

```json
{
  "name": {},
  "value": {}
}
```

Information about a property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SavingsPlanOfferingPropertyList">SavingsPlanOfferingPropertyList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingpropertylist"></a>
<a id="schema_SavingsPlanOfferingPropertyList"></a>
<a id="tocSsavingsplanofferingpropertylist"></a>
<a id="tocssavingsplanofferingpropertylist"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_SavingsPlanRatePricePerUnit">SavingsPlanRatePricePerUnit</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratepriceperunit"></a>
<a id="schema_SavingsPlanRatePricePerUnit"></a>
<a id="tocSsavingsplanratepriceperunit"></a>
<a id="tocssavingsplanratepriceperunit"></a>

```json
"string"
```

<h2 id="tocS_SavingsPlanRateUnit">SavingsPlanRateUnit</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateunit"></a>
<a id="schema_SavingsPlanRateUnit"></a>
<a id="tocSsavingsplanrateunit"></a>
<a id="tocssavingsplanrateunit"></a>

```json
"Hrs"
```

<h2 id="tocS_SavingsPlanOfferingRate">SavingsPlanOfferingRate</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingrate"></a>
<a id="schema_SavingsPlanOfferingRate"></a>
<a id="tocSsavingsplanofferingrate"></a>
<a id="tocssavingsplanofferingrate"></a>

```json
{
  "savingsPlanOffering": {
    "offeringId": {},
    "paymentOption": {},
    "planType": {},
    "durationSeconds": {},
    "currency": {},
    "planDescription": {}
  },
  "rate": {},
  "unit": {},
  "productType": {},
  "serviceCode": {},
  "usageType": {},
  "operation": {},
  "properties": null
}
```

Information about a Savings Plan offering rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsPlanOffering|object|false|none|none|
|rate|object|false|none|none|
|unit|object|false|none|none|
|productType|object|false|none|none|
|serviceCode|object|false|none|none|
|usageType|object|false|none|none|
|operation|object|false|none|none|
|properties|object|false|none|The properties.|

<h2 id="tocS_SavingsPlanRateFilterAttribute">SavingsPlanRateFilterAttribute</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratefilterattribute"></a>
<a id="schema_SavingsPlanRateFilterAttribute"></a>
<a id="tocSsavingsplanratefilterattribute"></a>
<a id="tocssavingsplanratefilterattribute"></a>

```json
"region"
```

<h2 id="tocS_SavingsPlanOfferingRateProperty">SavingsPlanOfferingRateProperty</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingrateproperty"></a>
<a id="schema_SavingsPlanOfferingRateProperty"></a>
<a id="tocSsavingsplanofferingrateproperty"></a>
<a id="tocssavingsplanofferingrateproperty"></a>

```json
{
  "name": {},
  "value": {}
}
```

Information about a property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SavingsPlanOfferingRatePropertyList">SavingsPlanOfferingRatePropertyList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanofferingratepropertylist"></a>
<a id="schema_SavingsPlanOfferingRatePropertyList"></a>
<a id="tocSsavingsplanofferingratepropertylist"></a>
<a id="tocssavingsplanofferingratepropertylist"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_SavingsPlanRate">SavingsPlanRate</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrate"></a>
<a id="schema_SavingsPlanRate"></a>
<a id="tocSsavingsplanrate"></a>
<a id="tocssavingsplanrate"></a>

```json
{
  "rate": {},
  "currency": {},
  "unit": {},
  "productType": {},
  "serviceCode": {},
  "usageType": {},
  "operation": {},
  "properties": null
}
```

Information about a Savings Plan rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|object|false|none|none|
|currency|object|false|none|none|
|unit|object|false|none|none|
|productType|object|false|none|none|
|serviceCode|object|false|none|none|
|usageType|object|false|none|none|
|operation|object|false|none|none|
|properties|object|false|none|The properties.|

<h2 id="tocS_SavingsPlanRateFilterName">SavingsPlanRateFilterName</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratefiltername"></a>
<a id="schema_SavingsPlanRateFilterName"></a>
<a id="tocSsavingsplanratefiltername"></a>
<a id="tocssavingsplanratefiltername"></a>

```json
"region"
```

<h2 id="tocS_SavingsPlanRatePropertyKey">SavingsPlanRatePropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratepropertykey"></a>
<a id="schema_SavingsPlanRatePropertyKey"></a>
<a id="tocSsavingsplanratepropertykey"></a>
<a id="tocssavingsplanratepropertykey"></a>

```json
"region"
```

<h2 id="tocS_SavingsPlanRateProperty">SavingsPlanRateProperty</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanrateproperty"></a>
<a id="schema_SavingsPlanRateProperty"></a>
<a id="tocSsavingsplanrateproperty"></a>
<a id="tocssavingsplanrateproperty"></a>

```json
{
  "name": {},
  "value": {}
}
```

Information about a property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SavingsPlanRatePropertyList">SavingsPlanRatePropertyList</h2>
<!-- backwards compatibility -->
<a id="schemasavingsplanratepropertylist"></a>
<a id="schema_SavingsPlanRatePropertyList"></a>
<a id="tocSsavingsplanratepropertylist"></a>
<a id="tocssavingsplanratepropertylist"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|
