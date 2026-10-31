<h1 id="aws-outposts">AWS Outposts v2019-12-03</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables customers to build and run applications on premises using the same programming interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local data processing needs.

Base URLs:

* <a href="http://outposts.us-east-1.amazonaws.com">http://outposts.us-east-1.amazonaws.com</a> - The Outposts multi-region endpoint

* <a href="https://outposts.us-east-1.amazonaws.com">https://outposts.us-east-1.amazonaws.com</a> - The Outposts multi-region endpoint

* <a href="http://outposts.cn-north-1.amazonaws.com.cn">http://outposts.cn-north-1.amazonaws.com.cn</a> - The Outposts endpoint for China (Beijing) and China (Ningxia)

* <a href="https://outposts.cn-north-1.amazonaws.com.cn">https://outposts.cn-north-1.amazonaws.com.cn</a> - The Outposts endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/outposts/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-outposts-default">Default</h1>

## CancelOrder

<a id="opIdCancelOrder"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/orders/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /orders/{OrderId}/cancel`

Cancels the specified order for an Outpost.

<h3 id="cancelorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OrderId|path|string|true| The ID of the order. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

<h3 id="cancelorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelOrderOutput](#schemacancelorderoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOrder

<a id="opIdCreateOrder"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "OutpostIdentifier": "string",
    "LineItems": [
      {
        "CatalogItemId": {},
        "Quantity": {}
      }
    ],
    "PaymentOption": "ALL_UPFRONT",
    "PaymentTerm": "THREE_YEARS"
  }'
```

`POST /orders`

Creates an order for an Outpost.

> Body parameter

```json
{
  "OutpostIdentifier": "string",
  "LineItems": [
    {
      "CatalogItemId": {},
      "Quantity": {}
    }
  ],
  "PaymentOption": "ALL_UPFRONT",
  "PaymentTerm": "THREE_YEARS"
}
```

<h3 id="createorder-parameters">Parameters</h3>

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
|» OutpostIdentifier|body|string|true| The ID or the Amazon Resource Name (ARN) of the Outpost. |
|» LineItems|body|[[LineItemRequest](#schemalineitemrequest)]|true|The line items that make up the order.|
|» PaymentOption|body|string|true|The payment option.|
|» PaymentTerm|body|string|false|The payment terms.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PaymentOption|ALL_UPFRONT|
|» PaymentOption|NO_UPFRONT|
|» PaymentOption|PARTIAL_UPFRONT|
|» PaymentTerm|THREE_YEARS|
|» PaymentTerm|ONE_YEAR|

> Example responses

> 200 Response

```json
{
  "Order": {
    "OutpostId": {},
    "OrderId": {},
    "Status": {},
    "LineItems": {},
    "PaymentOption": {},
    "OrderSubmissionDate": {},
    "OrderFulfilledDate": {},
    "PaymentTerm": {},
    "OrderType": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOrderOutput](#schemacreateorderoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOutposts

<a id="opIdListOutposts"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/outposts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /outposts`

<p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

<h3 id="listoutposts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|none|
|LifeCycleStatusFilter|query|[[LifeCycleStatus](#schemalifecyclestatus)]|false|Filters the results by the lifecycle status.|
|AvailabilityZoneFilter|query|[[AvailabilityZone](#schemaavailabilityzone)]|false|Filters the results by Availability Zone (for example, <code>us-east-1a</code>).|
|AvailabilityZoneIdFilter|query|[[AvailabilityZoneId](#schemaavailabilityzoneid)]|false|Filters the results by AZ ID (for example, <code>use1-az1</code>).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Outposts": [
    {
      "OutpostId": {},
      "OwnerId": "stringstring",
      "OutpostArn": "string",
      "SiteId": "string",
      "Name": "string",
      "Description": "string",
      "LifeCycleStatus": "string",
      "AvailabilityZone": "string",
      "AvailabilityZoneId": "string",
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "SiteArn": "string",
      "SupportedHardwareType": {}
    }
  ],
  "NextToken": "string"
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

<h3 id="listoutposts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOutpostsOutput](#schemalistoutpostsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOutpost

<a id="opIdCreateOutpost"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/outposts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "SiteId": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SupportedHardwareType": "RACK"
  }'
```

`POST /outposts`

<p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "SiteId": "string",
  "AvailabilityZone": "string",
  "AvailabilityZoneId": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "SupportedHardwareType": "RACK"
}
```

<h3 id="createoutpost-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the Outpost.|
|» Description|body|string|false|The description of the Outpost.|
|» SiteId|body|string|true|The ID of the site.|
|» AvailabilityZone|body|string|false|The Availability Zone.|
|» AvailabilityZoneId|body|string|false|The ID of the Availability Zone.|
|» Tags|body|object|false|The tags to apply to the Outpost.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» SupportedHardwareType|body|string|false| The type of hardware for this Outpost. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SupportedHardwareType|RACK|
|» SupportedHardwareType|SERVER|

> Example responses

> 200 Response

```json
{
  "Outpost": {
    "OutpostId": {},
    "OwnerId": "stringstring",
    "OutpostArn": "string",
    "SiteId": "string",
    "Name": "string",
    "Description": "string",
    "LifeCycleStatus": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "SupportedHardwareType": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createoutpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOutpostOutput](#schemacreateoutpostoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSites

<a id="opIdListSites"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/sites \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sites`

<p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

<h3 id="listsites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|none|
|OperatingAddressCountryCodeFilter|query|[[CountryCode](#schemacountrycode)]|false|Filters the results by country code.|
|OperatingAddressStateOrRegionFilter|query|[[StateOrRegion](#schemastateorregion)]|false|Filters the results by state or region.|
|OperatingAddressCityFilter|query|[[City](#schemacity)]|false|Filters the results by city.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Sites": [
    {
      "SiteId": "string",
      "AccountId": "stringstring",
      "Name": "string",
      "Description": "string",
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "SiteArn": "string",
      "Notes": {},
      "OperatingAddressCountryCode": {},
      "OperatingAddressStateOrRegion": {},
      "OperatingAddressCity": {},
      "RackPhysicalProperties": {
        "PowerDrawKva": {},
        "PowerPhase": {},
        "PowerConnector": {},
        "PowerFeedDrop": {},
        "UplinkGbps": {},
        "UplinkCount": {},
        "FiberOpticCableType": {},
        "OpticalStandard": {},
        "MaximumSupportedWeightLbs": {}
      }
    }
  ],
  "NextToken": "string"
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

<h3 id="listsites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSitesOutput](#schemalistsitesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSite

<a id="opIdCreateSite"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/sites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "Notes": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "OperatingAddress": {
      "ContactName": {},
      "ContactPhoneNumber": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "AddressLine3": {},
      "City": {},
      "StateOrRegion": {},
      "DistrictOrCounty": {},
      "PostalCode": {},
      "CountryCode": {},
      "Municipality": {}
    },
    "ShippingAddress": {
      "ContactName": {},
      "ContactPhoneNumber": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "AddressLine3": {},
      "City": {},
      "StateOrRegion": {},
      "DistrictOrCounty": {},
      "PostalCode": {},
      "CountryCode": {},
      "Municipality": {}
    },
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
  }'
```

`POST /sites`

 Creates a site for an Outpost. 

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "Notes": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "OperatingAddress": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  },
  "ShippingAddress": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  },
  "RackPhysicalProperties": {
    "PowerDrawKva": {},
    "PowerPhase": {},
    "PowerConnector": {},
    "PowerFeedDrop": {},
    "UplinkGbps": {},
    "UplinkCount": {},
    "FiberOpticCableType": {},
    "OpticalStandard": {},
    "MaximumSupportedWeightLbs": {}
  }
}
```

<h3 id="createsite-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the site.|
|» Description|body|string|false|The description of the site.|
|» Notes|body|string|false|Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process. |
|» Tags|body|object|false| The tags to apply to a site. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» OperatingAddress|body|object|false| Information about an address. |
|» » ContactName|body|object|false|none|
|» » ContactPhoneNumber|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » AddressLine3|body|object|false|none|
|» » City|body|object|false|none|
|» » StateOrRegion|body|object|false|none|
|» » DistrictOrCounty|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » Municipality|body|object|false|none|
|» ShippingAddress|body|object|false| Information about an address. |
|» » ContactName|body|object|false|none|
|» » ContactPhoneNumber|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » AddressLine3|body|object|false|none|
|» » City|body|object|false|none|
|» » StateOrRegion|body|object|false|none|
|» » DistrictOrCounty|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » Municipality|body|object|false|none|
|» RackPhysicalProperties|body|object|false| Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. |
|» » PowerDrawKva|body|object|false|none|
|» » PowerPhase|body|object|false|none|
|» » PowerConnector|body|object|false|none|
|» » PowerFeedDrop|body|object|false|none|
|» » UplinkGbps|body|object|false|none|
|» » UplinkCount|body|object|false|none|
|» » FiberOpticCableType|body|object|false|none|
|» » OpticalStandard|body|object|false|none|
|» » MaximumSupportedWeightLbs|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSiteOutput](#schemacreatesiteoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOutpost

<a id="opIdGetOutpost"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/outposts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /outposts/{OutpostId}`

Gets information about the specified Outpost.

<h3 id="getoutpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OutpostId|path|string|true| The ID or the Amazon Resource Name (ARN) of the Outpost. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Outpost": {
    "OutpostId": {},
    "OwnerId": "stringstring",
    "OutpostArn": "string",
    "SiteId": "string",
    "Name": "string",
    "Description": "string",
    "LifeCycleStatus": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "SupportedHardwareType": {}
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

> 483 Response

```json
null
```

<h3 id="getoutpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOutpostOutput](#schemagetoutpostoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOutpost

<a id="opIdDeleteOutpost"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/outposts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /outposts/{OutpostId}`

Deletes the specified Outpost.

<h3 id="deleteoutpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OutpostId|path|string|true| The ID or the Amazon Resource Name (ARN) of the Outpost. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

<h3 id="deleteoutpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteOutpostOutput](#schemadeleteoutpostoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOutpost

<a id="opIdUpdateOutpost"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/outposts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "SupportedHardwareType": "RACK"
  }'
```

`PATCH /outposts/{OutpostId}`

 Updates an Outpost. 

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "SupportedHardwareType": "RACK"
}
```

<h3 id="updateoutpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OutpostId|path|string|true| The ID or the Amazon Resource Name (ARN) of the Outpost. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the Outpost.|
|» Description|body|string|false|The description of the Outpost.|
|» SupportedHardwareType|body|string|false| The type of hardware for this Outpost. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SupportedHardwareType|RACK|
|» SupportedHardwareType|SERVER|

> Example responses

> 200 Response

```json
{
  "Outpost": {
    "OutpostId": {},
    "OwnerId": "stringstring",
    "OutpostArn": "string",
    "SiteId": "string",
    "Name": "string",
    "Description": "string",
    "LifeCycleStatus": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "SupportedHardwareType": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updateoutpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOutpostOutput](#schemaupdateoutpostoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSite

<a id="opIdGetSite"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/sites/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sites/{SiteId}`

Gets information about the specified Outpost site.

<h3 id="getsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SiteId|path|string|true| The ID or the Amazon Resource Name (ARN) of the site. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
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

> 483 Response

```json
null
```

<h3 id="getsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSiteOutput](#schemagetsiteoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSite

<a id="opIdDeleteSite"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/sites/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /sites/{SiteId}`

Deletes the specified site.

<h3 id="deletesite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SiteId|path|string|true| The ID or the Amazon Resource Name (ARN) of the site. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

<h3 id="deletesite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSiteOutput](#schemadeletesiteoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSite

<a id="opIdUpdateSite"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/sites/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "Notes": "string"
  }'
```

`PATCH /sites/{SiteId}`

Updates the specified site.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "Notes": "string"
}
```

<h3 id="updatesite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SiteId|path|string|true| The ID or the Amazon Resource Name (ARN) of the site. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the site.|
|» Description|body|string|false|The description of the site.|
|» Notes|body|string|false|Notes about a site.|

> Example responses

> 200 Response

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatesite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSiteOutput](#schemaupdatesiteoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCatalogItem

<a id="opIdGetCatalogItem"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/catalog/item/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /catalog/item/{CatalogItemId}`

Gets information about the specified catalog item.

<h3 id="getcatalogitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CatalogItemId|path|string|true|The ID of the catalog item.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CatalogItem": {
    "CatalogItemId": {},
    "ItemStatus": {},
    "EC2Capacities": {},
    "PowerKva": {},
    "WeightLbs": {},
    "SupportedUplinkGbps": {},
    "SupportedStorage": {}
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

<h3 id="getcatalogitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCatalogItemOutput](#schemagetcatalogitemoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnection

<a id="opIdGetConnection"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/connections/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /connections/{ConnectionId}`

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

<h3 id="getconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectionId|path|string|true| The ID of the connection. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "ConnectionId": {},
  "ConnectionDetails": {
    "ClientPublicKey": {},
    "ServerPublicKey": {},
    "ServerEndpoint": {},
    "ClientTunnelAddress": {},
    "ServerTunnelAddress": {},
    "AllowedIps": {}
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

> 483 Response

```json
null
```

<h3 id="getconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectionResponse](#schemagetconnectionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOrder

<a id="opIdGetOrder"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /orders/{OrderId}`

Gets information about the specified order.

<h3 id="getorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OrderId|path|string|true|The ID of the order.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Order": {
    "OutpostId": {},
    "OrderId": {},
    "Status": {},
    "LineItems": {},
    "PaymentOption": {},
    "OrderSubmissionDate": {},
    "OrderFulfilledDate": {},
    "PaymentTerm": {},
    "OrderType": {}
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

<h3 id="getorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOrderOutput](#schemagetorderoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOutpostInstanceTypes

<a id="opIdGetOutpostInstanceTypes"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/outposts/string/instanceTypes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /outposts/{OutpostId}/instanceTypes`

Gets the instance types for the specified Outpost.

<h3 id="getoutpostinstancetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OutpostId|path|string|true| The ID or the Amazon Resource Name (ARN) of the Outpost. |
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "InstanceTypes": [
    {
      "InstanceType": "string"
    }
  ],
  "NextToken": "string",
  "OutpostId": {},
  "OutpostArn": "string"
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

<h3 id="getoutpostinstancetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOutpostInstanceTypesOutput](#schemagetoutpostinstancetypesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSiteAddress

<a id="opIdGetSiteAddress"></a>

> Code samples

```bash
curl 'https://outposts.us-east-1.amazonaws.com/sites/string/address#AddressType?AddressType=SHIPPING_ADDRESS' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sites/{SiteId}/address#AddressType`

 Gets the site address of the specified site. 

<h3 id="getsiteaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SiteId|path|string|true| The ID or the Amazon Resource Name (ARN) of the site. |
|AddressType|query|string|true|The type of the address you request. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|AddressType|SHIPPING_ADDRESS|
|AddressType|OPERATING_ADDRESS|

> Example responses

> 200 Response

```json
{
  "SiteId": "string",
  "AddressType": {},
  "Address": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
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

> 483 Response

```json
null
```

<h3 id="getsiteaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSiteAddressOutput](#schemagetsiteaddressoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssets

<a id="opIdListAssets"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/outposts/string/assets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /outposts/{OutpostId}/assets`

<p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

<h3 id="listassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OutpostId|path|string|true| The ID or the Amazon Resource Name (ARN) of the Outpost. |
|HostIdFilter|query|[[HostId](#schemahostid)]|false|Filters the results by the host ID of a Dedicated Host.|
|MaxResults|query|integer|false|none|
|NextToken|query|string|false|none|
|StatusFilter|query|[[AssetState](#schemaassetstate)]|false|Filters the results by state.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|StatusFilter|ACTIVE|
|StatusFilter|RETIRING|

> Example responses

> 200 Response

```json
{
  "Assets": {},
  "NextToken": "string"
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

<h3 id="listassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssetsOutput](#schemalistassetsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCatalogItems

<a id="opIdListCatalogItems"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/catalog/items \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /catalog/items`

<p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

<h3 id="listcatalogitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|none|
|ItemClassFilter|query|[[CatalogItemClass](#schemacatalogitemclass)]|false|Filters the results by item class.|
|SupportedStorageFilter|query|[[SupportedStorageEnum](#schemasupportedstorageenum)]|false|Filters the results by storage option.|
|EC2FamilyFilter|query|[[Family](#schemafamily)]|false|Filters the results by EC2 family (for example, M5).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ItemClassFilter|RACK|
|ItemClassFilter|SERVER|
|SupportedStorageFilter|EBS|
|SupportedStorageFilter|S3|

> Example responses

> 200 Response

```json
{
  "CatalogItems": {},
  "NextToken": "string"
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

<h3 id="listcatalogitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCatalogItemsOutput](#schemalistcatalogitemsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrders

<a id="opIdListOrders"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/list-orders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /list-orders`

Lists the Outpost orders for your Amazon Web Services account.

<h3 id="listorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OutpostIdentifierFilter|query|string|false| The ID or the Amazon Resource Name (ARN) of the Outpost. |
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Orders": {},
  "NextToken": "string"
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

<h3 id="listorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrdersOutput](#schemalistordersoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

Lists the tags for the specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Tags": {
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{ResourceArn}`

Adds tags to the specified resource.

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The tags to add to the resource.|
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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartConnection

<a id="opIdStartConnection"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceSerialNumber": "string",
    "AssetId": "string",
    "ClientPublicKey": "stringstringstringstringstringstringstringst",
    "NetworkInterfaceDeviceIndex": 0
  }'
```

`POST /connections`

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

> Body parameter

```json
{
  "DeviceSerialNumber": "string",
  "AssetId": "string",
  "ClientPublicKey": "stringstringstringstringstringstringstringst",
  "NetworkInterfaceDeviceIndex": 0
}
```

<h3 id="startconnection-parameters">Parameters</h3>

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
|» DeviceSerialNumber|body|string|true| The serial number of the dongle. |
|» AssetId|body|string|true| The ID of the Outpost server. |
|» ClientPublicKey|body|string|true| The public key of the client. |
|» NetworkInterfaceDeviceIndex|body|integer|true| The device index of the network interface on the Outpost server. |

> Example responses

> 200 Response

```json
{
  "ConnectionId": {},
  "UnderlayIpAddress": {}
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

<h3 id="startconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartConnectionResponse](#schemastartconnectionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://outposts.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

Removes tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSiteAddress

<a id="opIdUpdateSiteAddress"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/sites/string/address \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AddressType": "SHIPPING_ADDRESS",
    "Address": {
      "ContactName": {},
      "ContactPhoneNumber": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "AddressLine3": {},
      "City": {},
      "StateOrRegion": {},
      "DistrictOrCounty": {},
      "PostalCode": {},
      "CountryCode": {},
      "Municipality": {}
    }
  }'
```

`PUT /sites/{SiteId}/address`

<p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>

> Body parameter

```json
{
  "AddressType": "SHIPPING_ADDRESS",
  "Address": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  }
}
```

<h3 id="updatesiteaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SiteId|path|string|true| The ID or the Amazon Resource Name (ARN) of the site. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AddressType|body|string|true| The type of the address. |
|» Address|body|object|true| Information about an address. |
|» » ContactName|body|object|false|none|
|» » ContactPhoneNumber|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » AddressLine3|body|object|false|none|
|» » City|body|object|false|none|
|» » StateOrRegion|body|object|false|none|
|» » DistrictOrCounty|body|object|false|none|
|» » PostalCode|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » Municipality|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AddressType|SHIPPING_ADDRESS|
|» AddressType|OPERATING_ADDRESS|

> Example responses

> 200 Response

```json
{
  "AddressType": {},
  "Address": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatesiteaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSiteAddressOutput](#schemaupdatesiteaddressoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSiteRackPhysicalProperties

<a id="opIdUpdateSiteRackPhysicalProperties"></a>

> Code samples

```bash
curl https://outposts.us-east-1.amazonaws.com/sites/string/rackPhysicalProperties \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PowerDrawKva": "POWER_5_KVA",
    "PowerPhase": "SINGLE_PHASE",
    "PowerConnector": "L6_30P",
    "PowerFeedDrop": "ABOVE_RACK",
    "UplinkGbps": "UPLINK_1G",
    "UplinkCount": "UPLINK_COUNT_1",
    "FiberOpticCableType": "SINGLE_MODE",
    "OpticalStandard": "OPTIC_10GBASE_SR",
    "MaximumSupportedWeightLbs": "NO_LIMIT"
  }'
```

`PATCH /sites/{SiteId}/rackPhysicalProperties`

<p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>

> Body parameter

```json
{
  "PowerDrawKva": "POWER_5_KVA",
  "PowerPhase": "SINGLE_PHASE",
  "PowerConnector": "L6_30P",
  "PowerFeedDrop": "ABOVE_RACK",
  "UplinkGbps": "UPLINK_1G",
  "UplinkCount": "UPLINK_COUNT_1",
  "FiberOpticCableType": "SINGLE_MODE",
  "OpticalStandard": "OPTIC_10GBASE_SR",
  "MaximumSupportedWeightLbs": "NO_LIMIT"
}
```

<h3 id="updatesiterackphysicalproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SiteId|path|string|true| The ID or the Amazon Resource Name (ARN) of the site. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PowerDrawKva|body|string|false|The power draw, in kVA, available at the hardware placement position for the rack.|
|» PowerPhase|body|string|false|<p>The power option that you can provide for hardware. </p> <ul> <li> <p>Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz</p> </li> <li> <p>Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz</p> </li> </ul>|
|» PowerConnector|body|string|false|<p>The power connector that Amazon Web Services should plan to provide for connections to the hardware. Note the correlation between <code>PowerPhase</code> and <code>PowerConnector</code>. </p> <ul> <li> <p>Single-phase AC feed</p> <ul> <li> <p> <b>L6-30P</b> – (common in US); 30A; single phase</p> </li> <li> <p> <b>IEC309 (blue)</b> – P+N+E, 6hr; 32 A; single phase</p> </li> </ul> </li> <li> <p>Three-phase AC feed</p> <ul> <li> <p> <b>AH530P7W (red)</b> – 3P+N+E, 7hr; 30A; three phase</p> </li> <li> <p> <b>AH532P6W (red)</b> – 3P+N+E, 6hr; 32A; three phase</p> </li> </ul> </li> </ul>|
|» PowerFeedDrop|body|string|false|Indicates whether the power feed comes above or below the rack. |
|» UplinkGbps|body|string|false|The uplink speed the rack should support for the connection to the Region. |
|» UplinkCount|body|string|false|<p>Racks come with two Outpost network devices. Depending on the supported uplink speed at the site, the Outpost network devices provide a variable number of uplinks. Specify the number of uplinks for each Outpost network device that you intend to use to connect the rack to your network. Note the correlation between <code>UplinkGbps</code> and <code>UplinkCount</code>. </p> <ul> <li> <p>1Gbps - Uplinks available: 1, 2, 4, 6, 8</p> </li> <li> <p>10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16</p> </li> <li> <p>40 and 100 Gbps- Uplinks available: 1, 2, 4</p> </li> </ul>|
|» FiberOpticCableType|body|string|false|The type of fiber that you will use to attach the Outpost to your network. |
|» OpticalStandard|body|string|false|<p>The type of optical standard that you will use to attach the Outpost to your network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a> in the Amazon Web Services Outposts User Guide. </p> <ul> <li> <p> <code>OPTIC_10GBASE_SR</code>: 10GBASE-SR</p> </li> <li> <p> <code>OPTIC_10GBASE_IR</code>: 10GBASE-IR</p> </li> <li> <p> <code>OPTIC_10GBASE_LR</code>: 10GBASE-LR</p> </li> <li> <p> <code>OPTIC_40GBASE_SR</code>: 40GBASE-SR</p> </li> <li> <p> <code>OPTIC_40GBASE_ESR</code>: 40GBASE-ESR</p> </li> <li> <p> <code>OPTIC_40GBASE_IR4_LR4L</code>: 40GBASE-IR (LR4L)</p> </li> <li> <p> <code>OPTIC_40GBASE_LR4</code>: 40GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100GBASE_SR4</code>: 100GBASE-SR4</p> </li> <li> <p> <code>OPTIC_100GBASE_CWDM4</code>: 100GBASE-CWDM4</p> </li> <li> <p> <code>OPTIC_100GBASE_LR4</code>: 100GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100G_PSM4_MSA</code>: 100G PSM4 MSA</p> </li> <li> <p> <code>OPTIC_1000BASE_LX</code>: 1000Base-LX</p> </li> <li> <p> <code>OPTIC_1000BASE_SX</code> : 1000Base-SX</p> </li> </ul>|
|» MaximumSupportedWeightLbs|body|string|false|The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000lbs. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PowerDrawKva|POWER_5_KVA|
|» PowerDrawKva|POWER_10_KVA|
|» PowerDrawKva|POWER_15_KVA|
|» PowerDrawKva|POWER_30_KVA|
|» PowerPhase|SINGLE_PHASE|
|» PowerPhase|THREE_PHASE|
|» PowerConnector|L6_30P|
|» PowerConnector|IEC309|
|» PowerConnector|AH530P7W|
|» PowerConnector|AH532P6W|
|» PowerFeedDrop|ABOVE_RACK|
|» PowerFeedDrop|BELOW_RACK|
|» UplinkGbps|UPLINK_1G|
|» UplinkGbps|UPLINK_10G|
|» UplinkGbps|UPLINK_40G|
|» UplinkGbps|UPLINK_100G|
|» UplinkCount|UPLINK_COUNT_1|
|» UplinkCount|UPLINK_COUNT_2|
|» UplinkCount|UPLINK_COUNT_3|
|» UplinkCount|UPLINK_COUNT_4|
|» UplinkCount|UPLINK_COUNT_5|
|» UplinkCount|UPLINK_COUNT_6|
|» UplinkCount|UPLINK_COUNT_7|
|» UplinkCount|UPLINK_COUNT_8|
|» UplinkCount|UPLINK_COUNT_12|
|» UplinkCount|UPLINK_COUNT_16|
|» FiberOpticCableType|SINGLE_MODE|
|» FiberOpticCableType|MULTI_MODE|
|» OpticalStandard|OPTIC_10GBASE_SR|
|» OpticalStandard|OPTIC_10GBASE_IR|
|» OpticalStandard|OPTIC_10GBASE_LR|
|» OpticalStandard|OPTIC_40GBASE_SR|
|» OpticalStandard|OPTIC_40GBASE_ESR|
|» OpticalStandard|OPTIC_40GBASE_IR4_LR4L|
|» OpticalStandard|OPTIC_40GBASE_LR4|
|» OpticalStandard|OPTIC_100GBASE_SR4|
|» OpticalStandard|OPTIC_100GBASE_CWDM4|
|» OpticalStandard|OPTIC_100GBASE_LR4|
|» OpticalStandard|OPTIC_100G_PSM4_MSA|
|» OpticalStandard|OPTIC_1000BASE_LX|
|» OpticalStandard|OPTIC_1000BASE_SX|
|» MaximumSupportedWeightLbs|NO_LIMIT|
|» MaximumSupportedWeightLbs|MAX_1400_LBS|
|» MaximumSupportedWeightLbs|MAX_1600_LBS|
|» MaximumSupportedWeightLbs|MAX_1800_LBS|
|» MaximumSupportedWeightLbs|MAX_2000_LBS|

> Example responses

> 200 Response

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatesiterackphysicalproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSiteRackPhysicalPropertiesOutput](#schemaupdatesiterackphysicalpropertiesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelOrderOutput">CancelOrderOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelorderoutput"></a>
<a id="schema_CancelOrderOutput"></a>
<a id="tocScancelorderoutput"></a>
<a id="tocscancelorderoutput"></a>

```json
{}
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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

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

<h2 id="tocS_CreateOrderOutput">CreateOrderOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateorderoutput"></a>
<a id="schema_CreateOrderOutput"></a>
<a id="tocScreateorderoutput"></a>
<a id="tocscreateorderoutput"></a>

```json
{
  "Order": {
    "OutpostId": {},
    "OrderId": {},
    "Status": {},
    "LineItems": {},
    "PaymentOption": {},
    "OrderSubmissionDate": {},
    "OrderFulfilledDate": {},
    "PaymentTerm": {},
    "OrderType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Order|object|false|none|none|

<h2 id="tocS_LineItemRequest">LineItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemalineitemrequest"></a>
<a id="schema_LineItemRequest"></a>
<a id="tocSlineitemrequest"></a>
<a id="tocslineitemrequest"></a>

```json
{
  "CatalogItemId": {},
  "Quantity": {}
}
```

Information about a line item request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogItemId|object|false|none|none|
|Quantity|object|false|none|none|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateOutpostOutput">CreateOutpostOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateoutpostoutput"></a>
<a id="schema_CreateOutpostOutput"></a>
<a id="tocScreateoutpostoutput"></a>
<a id="tocscreateoutpostoutput"></a>

```json
{
  "Outpost": {
    "OutpostId": {},
    "OwnerId": "stringstring",
    "OutpostArn": "string",
    "SiteId": "string",
    "Name": "string",
    "Description": "string",
    "LifeCycleStatus": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "SupportedHardwareType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outpost|[Outpost](#schemaoutpost)|false|none|Information about an Outpost.|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateSiteOutput">CreateSiteOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesiteoutput"></a>
<a id="schema_CreateSiteOutput"></a>
<a id="tocScreatesiteoutput"></a>
<a id="tocscreatesiteoutput"></a>

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Site|[Site](#schemasite)|false|none|Information about a site.|

<h2 id="tocS_ContactName">ContactName</h2>
<!-- backwards compatibility -->
<a id="schemacontactname"></a>
<a id="schema_ContactName"></a>
<a id="tocScontactname"></a>
<a id="tocscontactname"></a>

```json
"string"
```

<h2 id="tocS_ContactPhoneNumber">ContactPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemacontactphonenumber"></a>
<a id="schema_ContactPhoneNumber"></a>
<a id="tocScontactphonenumber"></a>
<a id="tocscontactphonenumber"></a>

```json
"string"
```

<h2 id="tocS_AddressLine1">AddressLine1</h2>
<!-- backwards compatibility -->
<a id="schemaaddressline1"></a>
<a id="schema_AddressLine1"></a>
<a id="tocSaddressline1"></a>
<a id="tocsaddressline1"></a>

```json
"string"
```

<h2 id="tocS_AddressLine2">AddressLine2</h2>
<!-- backwards compatibility -->
<a id="schemaaddressline2"></a>
<a id="schema_AddressLine2"></a>
<a id="tocSaddressline2"></a>
<a id="tocsaddressline2"></a>

```json
"string"
```

<h2 id="tocS_AddressLine3">AddressLine3</h2>
<!-- backwards compatibility -->
<a id="schemaaddressline3"></a>
<a id="schema_AddressLine3"></a>
<a id="tocSaddressline3"></a>
<a id="tocsaddressline3"></a>

```json
"string"
```

<h2 id="tocS_City">City</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_City"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
"string"
```

<h2 id="tocS_StateOrRegion">StateOrRegion</h2>
<!-- backwards compatibility -->
<a id="schemastateorregion"></a>
<a id="schema_StateOrRegion"></a>
<a id="tocSstateorregion"></a>
<a id="tocsstateorregion"></a>

```json
"string"
```

<h2 id="tocS_DistrictOrCounty">DistrictOrCounty</h2>
<!-- backwards compatibility -->
<a id="schemadistrictorcounty"></a>
<a id="schema_DistrictOrCounty"></a>
<a id="tocSdistrictorcounty"></a>
<a id="tocsdistrictorcounty"></a>

```json
"string"
```

<h2 id="tocS_PostalCode">PostalCode</h2>
<!-- backwards compatibility -->
<a id="schemapostalcode"></a>
<a id="schema_PostalCode"></a>
<a id="tocSpostalcode"></a>
<a id="tocspostalcode"></a>

```json
"string"
```

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"st"
```

<h2 id="tocS_Municipality">Municipality</h2>
<!-- backwards compatibility -->
<a id="schemamunicipality"></a>
<a id="schema_Municipality"></a>
<a id="tocSmunicipality"></a>
<a id="tocsmunicipality"></a>

```json
"string"
```

<h2 id="tocS_PowerDrawKva">PowerDrawKva</h2>
<!-- backwards compatibility -->
<a id="schemapowerdrawkva"></a>
<a id="schema_PowerDrawKva"></a>
<a id="tocSpowerdrawkva"></a>
<a id="tocspowerdrawkva"></a>

```json
"POWER_5_KVA"
```

<h2 id="tocS_PowerPhase">PowerPhase</h2>
<!-- backwards compatibility -->
<a id="schemapowerphase"></a>
<a id="schema_PowerPhase"></a>
<a id="tocSpowerphase"></a>
<a id="tocspowerphase"></a>

```json
"SINGLE_PHASE"
```

<h2 id="tocS_PowerConnector">PowerConnector</h2>
<!-- backwards compatibility -->
<a id="schemapowerconnector"></a>
<a id="schema_PowerConnector"></a>
<a id="tocSpowerconnector"></a>
<a id="tocspowerconnector"></a>

```json
"L6_30P"
```

<h2 id="tocS_PowerFeedDrop">PowerFeedDrop</h2>
<!-- backwards compatibility -->
<a id="schemapowerfeeddrop"></a>
<a id="schema_PowerFeedDrop"></a>
<a id="tocSpowerfeeddrop"></a>
<a id="tocspowerfeeddrop"></a>

```json
"ABOVE_RACK"
```

<h2 id="tocS_UplinkGbps">UplinkGbps</h2>
<!-- backwards compatibility -->
<a id="schemauplinkgbps"></a>
<a id="schema_UplinkGbps"></a>
<a id="tocSuplinkgbps"></a>
<a id="tocsuplinkgbps"></a>

```json
"UPLINK_1G"
```

<h2 id="tocS_UplinkCount">UplinkCount</h2>
<!-- backwards compatibility -->
<a id="schemauplinkcount"></a>
<a id="schema_UplinkCount"></a>
<a id="tocSuplinkcount"></a>
<a id="tocsuplinkcount"></a>

```json
"UPLINK_COUNT_1"
```

<h2 id="tocS_FiberOpticCableType">FiberOpticCableType</h2>
<!-- backwards compatibility -->
<a id="schemafiberopticcabletype"></a>
<a id="schema_FiberOpticCableType"></a>
<a id="tocSfiberopticcabletype"></a>
<a id="tocsfiberopticcabletype"></a>

```json
"SINGLE_MODE"
```

<h2 id="tocS_OpticalStandard">OpticalStandard</h2>
<!-- backwards compatibility -->
<a id="schemaopticalstandard"></a>
<a id="schema_OpticalStandard"></a>
<a id="tocSopticalstandard"></a>
<a id="tocsopticalstandard"></a>

```json
"OPTIC_10GBASE_SR"
```

<h2 id="tocS_MaximumSupportedWeightLbs">MaximumSupportedWeightLbs</h2>
<!-- backwards compatibility -->
<a id="schemamaximumsupportedweightlbs"></a>
<a id="schema_MaximumSupportedWeightLbs"></a>
<a id="tocSmaximumsupportedweightlbs"></a>
<a id="tocsmaximumsupportedweightlbs"></a>

```json
"NO_LIMIT"
```

<h2 id="tocS_DeleteOutpostOutput">DeleteOutpostOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoutpostoutput"></a>
<a id="schema_DeleteOutpostOutput"></a>
<a id="tocSdeleteoutpostoutput"></a>
<a id="tocsdeleteoutpostoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteSiteOutput">DeleteSiteOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesiteoutput"></a>
<a id="schema_DeleteSiteOutput"></a>
<a id="tocSdeletesiteoutput"></a>
<a id="tocsdeletesiteoutput"></a>

```json
{}
```

<h2 id="tocS_GetCatalogItemOutput">GetCatalogItemOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcatalogitemoutput"></a>
<a id="schema_GetCatalogItemOutput"></a>
<a id="tocSgetcatalogitemoutput"></a>
<a id="tocsgetcatalogitemoutput"></a>

```json
{
  "CatalogItem": {
    "CatalogItemId": {},
    "ItemStatus": {},
    "EC2Capacities": {},
    "PowerKva": {},
    "WeightLbs": {},
    "SupportedUplinkGbps": {},
    "SupportedStorage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogItem|object|false|none|none|

<h2 id="tocS_GetConnectionResponse">GetConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionresponse"></a>
<a id="schema_GetConnectionResponse"></a>
<a id="tocSgetconnectionresponse"></a>
<a id="tocsgetconnectionresponse"></a>

```json
{
  "ConnectionId": {},
  "ConnectionDetails": {
    "ClientPublicKey": {},
    "ServerPublicKey": {},
    "ServerEndpoint": {},
    "ClientTunnelAddress": {},
    "ServerTunnelAddress": {},
    "AllowedIps": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionId|object|false|none|none|
|ConnectionDetails|object|false|none|none|

<h2 id="tocS_GetOrderOutput">GetOrderOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetorderoutput"></a>
<a id="schema_GetOrderOutput"></a>
<a id="tocSgetorderoutput"></a>
<a id="tocsgetorderoutput"></a>

```json
{
  "Order": {
    "OutpostId": {},
    "OrderId": {},
    "Status": {},
    "LineItems": {},
    "PaymentOption": {},
    "OrderSubmissionDate": {},
    "OrderFulfilledDate": {},
    "PaymentTerm": {},
    "OrderType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Order|[Order](#schemaorder)|false|none|Information about an order.|

<h2 id="tocS_GetOutpostOutput">GetOutpostOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetoutpostoutput"></a>
<a id="schema_GetOutpostOutput"></a>
<a id="tocSgetoutpostoutput"></a>
<a id="tocsgetoutpostoutput"></a>

```json
{
  "Outpost": {
    "OutpostId": {},
    "OwnerId": "stringstring",
    "OutpostArn": "string",
    "SiteId": "string",
    "Name": "string",
    "Description": "string",
    "LifeCycleStatus": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "SupportedHardwareType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outpost|[Outpost](#schemaoutpost)|false|none|Information about an Outpost.|

<h2 id="tocS_GetOutpostInstanceTypesOutput">GetOutpostInstanceTypesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetoutpostinstancetypesoutput"></a>
<a id="schema_GetOutpostInstanceTypesOutput"></a>
<a id="tocSgetoutpostinstancetypesoutput"></a>
<a id="tocsgetoutpostinstancetypesoutput"></a>

```json
{
  "InstanceTypes": [
    {
      "InstanceType": "string"
    }
  ],
  "NextToken": "string",
  "OutpostId": {},
  "OutpostArn": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceTypes|[InstanceTypeListDefinition](#schemainstancetypelistdefinition)|false|none|Information about the instance types.|
|NextToken|[Token](#schematoken)|false|none|The pagination token.|
|OutpostId|object|false|none|none|
|OutpostArn|[OutpostArn](#schemaoutpostarn)|false|none|The Amazon Resource Name (ARN) of the Outpost.|

<h2 id="tocS_GetSiteOutput">GetSiteOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetsiteoutput"></a>
<a id="schema_GetSiteOutput"></a>
<a id="tocSgetsiteoutput"></a>
<a id="tocsgetsiteoutput"></a>

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Site|[Site](#schemasite)|false|none|Information about a site.|

<h2 id="tocS_GetSiteAddressOutput">GetSiteAddressOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetsiteaddressoutput"></a>
<a id="schema_GetSiteAddressOutput"></a>
<a id="tocSgetsiteaddressoutput"></a>
<a id="tocsgetsiteaddressoutput"></a>

```json
{
  "SiteId": "string",
  "AddressType": {},
  "Address": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SiteId|[SiteId](#schemasiteid)|false|none|The ID of the site.|
|AddressType|object|false|none|none|
|Address|object|false|none|none|

<h2 id="tocS_ListAssetsOutput">ListAssetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsoutput"></a>
<a id="schema_ListAssetsOutput"></a>
<a id="tocSlistassetsoutput"></a>
<a id="tocslistassetsoutput"></a>

```json
{
  "Assets": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assets|object|false|none|none|
|NextToken|[Token](#schematoken)|false|none|The pagination token.|

<h2 id="tocS_HostId">HostId</h2>
<!-- backwards compatibility -->
<a id="schemahostid"></a>
<a id="schema_HostId"></a>
<a id="tocShostid"></a>
<a id="tocshostid"></a>

```json
"string"
```

<h2 id="tocS_AssetState">AssetState</h2>
<!-- backwards compatibility -->
<a id="schemaassetstate"></a>
<a id="schema_AssetState"></a>
<a id="tocSassetstate"></a>
<a id="tocsassetstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ListCatalogItemsOutput">ListCatalogItemsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcatalogitemsoutput"></a>
<a id="schema_ListCatalogItemsOutput"></a>
<a id="tocSlistcatalogitemsoutput"></a>
<a id="tocslistcatalogitemsoutput"></a>

```json
{
  "CatalogItems": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogItems|object|false|none|none|
|NextToken|[Token](#schematoken)|false|none|The pagination token.|

<h2 id="tocS_CatalogItemClass">CatalogItemClass</h2>
<!-- backwards compatibility -->
<a id="schemacatalogitemclass"></a>
<a id="schema_CatalogItemClass"></a>
<a id="tocScatalogitemclass"></a>
<a id="tocscatalogitemclass"></a>

```json
"RACK"
```

<h2 id="tocS_SupportedStorageEnum">SupportedStorageEnum</h2>
<!-- backwards compatibility -->
<a id="schemasupportedstorageenum"></a>
<a id="schema_SupportedStorageEnum"></a>
<a id="tocSsupportedstorageenum"></a>
<a id="tocssupportedstorageenum"></a>

```json
"EBS"
```

<h2 id="tocS_Family">Family</h2>
<!-- backwards compatibility -->
<a id="schemafamily"></a>
<a id="schema_Family"></a>
<a id="tocSfamily"></a>
<a id="tocsfamily"></a>

```json
"string"
```

<h2 id="tocS_ListOrdersOutput">ListOrdersOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistordersoutput"></a>
<a id="schema_ListOrdersOutput"></a>
<a id="tocSlistordersoutput"></a>
<a id="tocslistordersoutput"></a>

```json
{
  "Orders": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Orders|object|false|none|none|
|NextToken|[Token](#schematoken)|false|none|The pagination token.|

<h2 id="tocS_ListOutpostsOutput">ListOutpostsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistoutpostsoutput"></a>
<a id="schema_ListOutpostsOutput"></a>
<a id="tocSlistoutpostsoutput"></a>
<a id="tocslistoutpostsoutput"></a>

```json
{
  "Outposts": [
    {
      "OutpostId": {},
      "OwnerId": "stringstring",
      "OutpostArn": "string",
      "SiteId": "string",
      "Name": "string",
      "Description": "string",
      "LifeCycleStatus": "string",
      "AvailabilityZone": "string",
      "AvailabilityZoneId": "string",
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "SiteArn": "string",
      "SupportedHardwareType": {}
    }
  ],
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outposts|[outpostListDefinition](#schemaoutpostlistdefinition)|false|none|Information about the Outposts.|
|NextToken|[Token](#schematoken)|false|none|The pagination token.|

<h2 id="tocS_LifeCycleStatus">LifeCycleStatus</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclestatus"></a>
<a id="schema_LifeCycleStatus"></a>
<a id="tocSlifecyclestatus"></a>
<a id="tocslifecyclestatus"></a>

```json
"string"
```

The life cycle status.

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

The Availability Zone.

<h2 id="tocS_AvailabilityZoneId">AvailabilityZoneId</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzoneid"></a>
<a id="schema_AvailabilityZoneId"></a>
<a id="tocSavailabilityzoneid"></a>
<a id="tocsavailabilityzoneid"></a>

```json
"string"
```

The ID of the Availability Zone.

<h2 id="tocS_ListSitesOutput">ListSitesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistsitesoutput"></a>
<a id="schema_ListSitesOutput"></a>
<a id="tocSlistsitesoutput"></a>
<a id="tocslistsitesoutput"></a>

```json
{
  "Sites": [
    {
      "SiteId": "string",
      "AccountId": "stringstring",
      "Name": "string",
      "Description": "string",
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "SiteArn": "string",
      "Notes": {},
      "OperatingAddressCountryCode": {},
      "OperatingAddressStateOrRegion": {},
      "OperatingAddressCity": {},
      "RackPhysicalProperties": {
        "PowerDrawKva": {},
        "PowerPhase": {},
        "PowerConnector": {},
        "PowerFeedDrop": {},
        "UplinkGbps": {},
        "UplinkCount": {},
        "FiberOpticCableType": {},
        "OpticalStandard": {},
        "MaximumSupportedWeightLbs": {}
      }
    }
  ],
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sites|[siteListDefinition](#schemasitelistdefinition)|false|none|Information about the sites.|
|NextToken|[Token](#schematoken)|false|none|The pagination token.|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_StartConnectionResponse">StartConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartconnectionresponse"></a>
<a id="schema_StartConnectionResponse"></a>
<a id="tocSstartconnectionresponse"></a>
<a id="tocsstartconnectionresponse"></a>

```json
{
  "ConnectionId": {},
  "UnderlayIpAddress": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionId|object|false|none|none|
|UnderlayIpAddress|object|false|none|none|

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

<h2 id="tocS_UpdateOutpostOutput">UpdateOutpostOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoutpostoutput"></a>
<a id="schema_UpdateOutpostOutput"></a>
<a id="tocSupdateoutpostoutput"></a>
<a id="tocsupdateoutpostoutput"></a>

```json
{
  "Outpost": {
    "OutpostId": {},
    "OwnerId": "stringstring",
    "OutpostArn": "string",
    "SiteId": "string",
    "Name": "string",
    "Description": "string",
    "LifeCycleStatus": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "SupportedHardwareType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outpost|[Outpost](#schemaoutpost)|false|none|Information about an Outpost.|

<h2 id="tocS_UpdateSiteOutput">UpdateSiteOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiteoutput"></a>
<a id="schema_UpdateSiteOutput"></a>
<a id="tocSupdatesiteoutput"></a>
<a id="tocsupdatesiteoutput"></a>

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Site|[Site](#schemasite)|false|none|Information about a site.|

<h2 id="tocS_UpdateSiteAddressOutput">UpdateSiteAddressOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiteaddressoutput"></a>
<a id="schema_UpdateSiteAddressOutput"></a>
<a id="tocSupdatesiteaddressoutput"></a>
<a id="tocsupdatesiteaddressoutput"></a>

```json
{
  "AddressType": {},
  "Address": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressType|object|false|none|none|
|Address|object|false|none|none|

<h2 id="tocS_UpdateSiteRackPhysicalPropertiesOutput">UpdateSiteRackPhysicalPropertiesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiterackphysicalpropertiesoutput"></a>
<a id="schema_UpdateSiteRackPhysicalPropertiesOutput"></a>
<a id="tocSupdatesiterackphysicalpropertiesoutput"></a>
<a id="tocsupdatesiterackphysicalpropertiesoutput"></a>

```json
{
  "Site": {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Site|[Site](#schemasite)|false|none|Information about a site.|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

The ID of the Amazon Web Services account.

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "ContactName": {},
  "ContactPhoneNumber": {},
  "AddressLine1": {},
  "AddressLine2": {},
  "AddressLine3": {},
  "City": {},
  "StateOrRegion": {},
  "DistrictOrCounty": {},
  "PostalCode": {},
  "CountryCode": {},
  "Municipality": {}
}
```

 Information about an address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactName|object|false|none|none|
|ContactPhoneNumber|object|false|none|none|
|AddressLine1|object|true|none|none|
|AddressLine2|object|false|none|none|
|AddressLine3|object|false|none|none|
|City|object|true|none|none|
|StateOrRegion|object|true|none|none|
|DistrictOrCounty|object|false|none|none|
|PostalCode|object|true|none|none|
|CountryCode|object|true|none|none|
|Municipality|object|false|none|none|

<h2 id="tocS_AddressType">AddressType</h2>
<!-- backwards compatibility -->
<a id="schemaaddresstype"></a>
<a id="schema_AddressType"></a>
<a id="tocSaddresstype"></a>
<a id="tocsaddresstype"></a>

```json
"SHIPPING_ADDRESS"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AssetId">AssetId</h2>
<!-- backwards compatibility -->
<a id="schemaassetid"></a>
<a id="schema_AssetId"></a>
<a id="tocSassetid"></a>
<a id="tocsassetid"></a>

```json
"string"
```

<h2 id="tocS_RackId">RackId</h2>
<!-- backwards compatibility -->
<a id="schemarackid"></a>
<a id="schema_RackId"></a>
<a id="tocSrackid"></a>
<a id="tocsrackid"></a>

```json
"string"
```

<h2 id="tocS_AssetType">AssetType</h2>
<!-- backwards compatibility -->
<a id="schemaassettype"></a>
<a id="schema_AssetType"></a>
<a id="tocSassettype"></a>
<a id="tocsassettype"></a>

```json
"COMPUTE"
```

<h2 id="tocS_ComputeAttributes">ComputeAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacomputeattributes"></a>
<a id="schema_ComputeAttributes"></a>
<a id="tocScomputeattributes"></a>
<a id="tocscomputeattributes"></a>

```json
{
  "HostId": {},
  "State": {}
}
```

 Information about compute hardware assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_AssetLocation">AssetLocation</h2>
<!-- backwards compatibility -->
<a id="schemaassetlocation"></a>
<a id="schema_AssetLocation"></a>
<a id="tocSassetlocation"></a>
<a id="tocsassetlocation"></a>

```json
{
  "RackElevation": {}
}
```

 Information about the position of the asset in a rack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RackElevation|object|false|none|none|

<h2 id="tocS_AssetInfo">AssetInfo</h2>
<!-- backwards compatibility -->
<a id="schemaassetinfo"></a>
<a id="schema_AssetInfo"></a>
<a id="tocSassetinfo"></a>
<a id="tocsassetinfo"></a>

```json
{
  "AssetId": {},
  "RackId": {},
  "AssetType": {},
  "ComputeAttributes": {
    "HostId": {},
    "State": {}
  },
  "AssetLocation": {
    "RackElevation": {}
  }
}
```

 Information about hardware assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetId|object|false|none|none|
|RackId|object|false|none|none|
|AssetType|object|false|none|none|
|ComputeAttributes|object|false|none|none|
|AssetLocation|object|false|none|none|

<h2 id="tocS_AssetListDefinition">AssetListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassetlistdefinition"></a>
<a id="schema_AssetListDefinition"></a>
<a id="tocSassetlistdefinition"></a>
<a id="tocsassetlistdefinition"></a>

```json
[
  {
    "AssetId": {},
    "RackId": {},
    "AssetType": {},
    "ComputeAttributes": {
      "HostId": {},
      "State": {}
    },
    "AssetLocation": {
      "RackElevation": {}
    }
  }
]
```

<h2 id="tocS_RackElevation">RackElevation</h2>
<!-- backwards compatibility -->
<a id="schemarackelevation"></a>
<a id="schema_RackElevation"></a>
<a id="tocSrackelevation"></a>
<a id="tocsrackelevation"></a>

```json
0
```

<h2 id="tocS_AvailabilityZoneIdList">AvailabilityZoneIdList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzoneidlist"></a>
<a id="schema_AvailabilityZoneIdList"></a>
<a id="tocSavailabilityzoneidlist"></a>
<a id="tocsavailabilityzoneidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AvailabilityZoneList">AvailabilityZoneList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonelist"></a>
<a id="schema_AvailabilityZoneList"></a>
<a id="tocSavailabilityzonelist"></a>
<a id="tocsavailabilityzonelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CIDR">CIDR</h2>
<!-- backwards compatibility -->
<a id="schemacidr"></a>
<a id="schema_CIDR"></a>
<a id="tocScidr"></a>
<a id="tocscidr"></a>

```json
"stringstr"
```

<h2 id="tocS_CIDRList">CIDRList</h2>
<!-- backwards compatibility -->
<a id="schemacidrlist"></a>
<a id="schema_CIDRList"></a>
<a id="tocScidrlist"></a>
<a id="tocscidrlist"></a>

```json
[
  "stringstr"
]
```

<h2 id="tocS_OrderId">OrderId</h2>
<!-- backwards compatibility -->
<a id="schemaorderid"></a>
<a id="schema_OrderId"></a>
<a id="tocSorderid"></a>
<a id="tocsorderid"></a>

```json
"string"
```

<h2 id="tocS_CancelOrderInput">CancelOrderInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelorderinput"></a>
<a id="schema_CancelOrderInput"></a>
<a id="tocScancelorderinput"></a>
<a id="tocscancelorderinput"></a>

```json
{}
```

<h2 id="tocS_SkuCode">SkuCode</h2>
<!-- backwards compatibility -->
<a id="schemaskucode"></a>
<a id="schema_SkuCode"></a>
<a id="tocSskucode"></a>
<a id="tocsskucode"></a>

```json
"string"
```

<h2 id="tocS_CatalogItemStatus">CatalogItemStatus</h2>
<!-- backwards compatibility -->
<a id="schemacatalogitemstatus"></a>
<a id="schema_CatalogItemStatus"></a>
<a id="tocScatalogitemstatus"></a>
<a id="tocscatalogitemstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_EC2CapacityListDefinition">EC2CapacityListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaec2capacitylistdefinition"></a>
<a id="schema_EC2CapacityListDefinition"></a>
<a id="tocSec2capacitylistdefinition"></a>
<a id="tocsec2capacitylistdefinition"></a>

```json
[
  {
    "Family": {},
    "MaxSize": {},
    "Quantity": {}
  }
]
```

<h2 id="tocS_CatalogItemPowerKva">CatalogItemPowerKva</h2>
<!-- backwards compatibility -->
<a id="schemacatalogitempowerkva"></a>
<a id="schema_CatalogItemPowerKva"></a>
<a id="tocScatalogitempowerkva"></a>
<a id="tocscatalogitempowerkva"></a>

```json
0
```

<h2 id="tocS_CatalogItemWeightLbs">CatalogItemWeightLbs</h2>
<!-- backwards compatibility -->
<a id="schemacatalogitemweightlbs"></a>
<a id="schema_CatalogItemWeightLbs"></a>
<a id="tocScatalogitemweightlbs"></a>
<a id="tocscatalogitemweightlbs"></a>

```json
0
```

<h2 id="tocS_SupportedUplinkGbpsListDefinition">SupportedUplinkGbpsListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasupporteduplinkgbpslistdefinition"></a>
<a id="schema_SupportedUplinkGbpsListDefinition"></a>
<a id="tocSsupporteduplinkgbpslistdefinition"></a>
<a id="tocssupporteduplinkgbpslistdefinition"></a>

```json
[
  0
]
```

<h2 id="tocS_SupportedStorageList">SupportedStorageList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedstoragelist"></a>
<a id="schema_SupportedStorageList"></a>
<a id="tocSsupportedstoragelist"></a>
<a id="tocssupportedstoragelist"></a>

```json
[
  "EBS"
]
```

<h2 id="tocS_CatalogItem">CatalogItem</h2>
<!-- backwards compatibility -->
<a id="schemacatalogitem"></a>
<a id="schema_CatalogItem"></a>
<a id="tocScatalogitem"></a>
<a id="tocscatalogitem"></a>

```json
{
  "CatalogItemId": {},
  "ItemStatus": {},
  "EC2Capacities": {},
  "PowerKva": {},
  "WeightLbs": {},
  "SupportedUplinkGbps": {},
  "SupportedStorage": {}
}
```

 Information about a catalog item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogItemId|object|false|none|none|
|ItemStatus|object|false|none|none|
|EC2Capacities|object|false|none|none|
|PowerKva|object|false|none|none|
|WeightLbs|object|false|none|none|
|SupportedUplinkGbps|object|false|none|none|
|SupportedStorage|object|false|none|none|

<h2 id="tocS_CatalogItemClassList">CatalogItemClassList</h2>
<!-- backwards compatibility -->
<a id="schemacatalogitemclasslist"></a>
<a id="schema_CatalogItemClassList"></a>
<a id="tocScatalogitemclasslist"></a>
<a id="tocscatalogitemclasslist"></a>

```json
[
  "RACK"
]
```

<h2 id="tocS_CatalogItemListDefinition">CatalogItemListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacatalogitemlistdefinition"></a>
<a id="schema_CatalogItemListDefinition"></a>
<a id="tocScatalogitemlistdefinition"></a>
<a id="tocscatalogitemlistdefinition"></a>

```json
[
  {
    "CatalogItemId": {},
    "ItemStatus": {},
    "EC2Capacities": {},
    "PowerKva": {},
    "WeightLbs": {},
    "SupportedUplinkGbps": {},
    "SupportedStorage": {}
  }
]
```

<h2 id="tocS_CityList">CityList</h2>
<!-- backwards compatibility -->
<a id="schemacitylist"></a>
<a id="schema_CityList"></a>
<a id="tocScitylist"></a>
<a id="tocscitylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComputeAssetState">ComputeAssetState</h2>
<!-- backwards compatibility -->
<a id="schemacomputeassetstate"></a>
<a id="schema_ComputeAssetState"></a>
<a id="tocScomputeassetstate"></a>
<a id="tocscomputeassetstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_WireGuardPublicKey">WireGuardPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemawireguardpublickey"></a>
<a id="schema_WireGuardPublicKey"></a>
<a id="tocSwireguardpublickey"></a>
<a id="tocswireguardpublickey"></a>

```json
"stringstringstringstringstringstringstringst"
```

<h2 id="tocS_ServerEndpoint">ServerEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaserverendpoint"></a>
<a id="schema_ServerEndpoint"></a>
<a id="tocSserverendpoint"></a>
<a id="tocsserverendpoint"></a>

```json
"stringstr"
```

<h2 id="tocS_ConnectionDetails">ConnectionDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiondetails"></a>
<a id="schema_ConnectionDetails"></a>
<a id="tocSconnectiondetails"></a>
<a id="tocsconnectiondetails"></a>

```json
{
  "ClientPublicKey": {},
  "ServerPublicKey": {},
  "ServerEndpoint": {},
  "ClientTunnelAddress": {},
  "ServerTunnelAddress": {},
  "AllowedIps": {}
}
```

 Information about a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientPublicKey|object|false|none|none|
|ServerPublicKey|object|false|none|none|
|ServerEndpoint|object|false|none|none|
|ClientTunnelAddress|object|false|none|none|
|ServerTunnelAddress|object|false|none|none|
|AllowedIps|object|false|none|none|

<h2 id="tocS_ConnectionId">ConnectionId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionid"></a>
<a id="schema_ConnectionId"></a>
<a id="tocSconnectionid"></a>
<a id="tocsconnectionid"></a>

```json
"string"
```

<h2 id="tocS_CountryCodeList">CountryCodeList</h2>
<!-- backwards compatibility -->
<a id="schemacountrycodelist"></a>
<a id="schema_CountryCodeList"></a>
<a id="tocScountrycodelist"></a>
<a id="tocscountrycodelist"></a>

```json
[
  "st"
]
```

<h2 id="tocS_OutpostIdentifier">OutpostIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostidentifier"></a>
<a id="schema_OutpostIdentifier"></a>
<a id="tocSoutpostidentifier"></a>
<a id="tocsoutpostidentifier"></a>

```json
"string"
```

<h2 id="tocS_LineItemRequestListDefinition">LineItemRequestListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemalineitemrequestlistdefinition"></a>
<a id="schema_LineItemRequestListDefinition"></a>
<a id="tocSlineitemrequestlistdefinition"></a>
<a id="tocslineitemrequestlistdefinition"></a>

```json
[
  {
    "CatalogItemId": {},
    "Quantity": {}
  }
]
```

<h2 id="tocS_PaymentOption">PaymentOption</h2>
<!-- backwards compatibility -->
<a id="schemapaymentoption"></a>
<a id="schema_PaymentOption"></a>
<a id="tocSpaymentoption"></a>
<a id="tocspaymentoption"></a>

```json
"ALL_UPFRONT"
```

<h2 id="tocS_PaymentTerm">PaymentTerm</h2>
<!-- backwards compatibility -->
<a id="schemapaymentterm"></a>
<a id="schema_PaymentTerm"></a>
<a id="tocSpaymentterm"></a>
<a id="tocspaymentterm"></a>

```json
"THREE_YEARS"
```

<h2 id="tocS_CreateOrderInput">CreateOrderInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateorderinput"></a>
<a id="schema_CreateOrderInput"></a>
<a id="tocScreateorderinput"></a>
<a id="tocscreateorderinput"></a>

```json
{
  "OutpostIdentifier": {},
  "LineItems": {},
  "PaymentOption": {},
  "PaymentTerm": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutpostIdentifier|object|true|none|none|
|LineItems|object|true|none|none|
|PaymentOption|object|true|none|none|
|PaymentTerm|object|false|none|none|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "OutpostId": {},
  "OrderId": {},
  "Status": {},
  "LineItems": {},
  "PaymentOption": {},
  "OrderSubmissionDate": {},
  "OrderFulfilledDate": {},
  "PaymentTerm": {},
  "OrderType": {}
}
```

Information about an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutpostId|object|false|none|none|
|OrderId|object|false|none|none|
|Status|object|false|none|none|
|LineItems|object|false|none|none|
|PaymentOption|object|false|none|none|
|OrderSubmissionDate|object|false|none|none|
|OrderFulfilledDate|object|false|none|none|
|PaymentTerm|object|false|none|none|
|OrderType|object|false|none|none|

<h2 id="tocS_OutpostName">OutpostName</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostname"></a>
<a id="schema_OutpostName"></a>
<a id="tocSoutpostname"></a>
<a id="tocsoutpostname"></a>

```json
"string"
```

The name of the Outpost.

<h2 id="tocS_OutpostDescription">OutpostDescription</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostdescription"></a>
<a id="schema_OutpostDescription"></a>
<a id="tocSoutpostdescription"></a>
<a id="tocsoutpostdescription"></a>

```json
"string"
```

The description of the Outpost.

<h2 id="tocS_SiteId">SiteId</h2>
<!-- backwards compatibility -->
<a id="schemasiteid"></a>
<a id="schema_SiteId"></a>
<a id="tocSsiteid"></a>
<a id="tocssiteid"></a>

```json
"string"
```

The ID of the site.

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

<h2 id="tocS_SupportedHardwareType">SupportedHardwareType</h2>
<!-- backwards compatibility -->
<a id="schemasupportedhardwaretype"></a>
<a id="schema_SupportedHardwareType"></a>
<a id="tocSsupportedhardwaretype"></a>
<a id="tocssupportedhardwaretype"></a>

```json
"RACK"
```

<h2 id="tocS_CreateOutpostInput">CreateOutpostInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateoutpostinput"></a>
<a id="schema_CreateOutpostInput"></a>
<a id="tocScreateoutpostinput"></a>
<a id="tocscreateoutpostinput"></a>

```json
{
  "Name": "string",
  "Description": "string",
  "SiteId": {},
  "AvailabilityZone": "string",
  "AvailabilityZoneId": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "SupportedHardwareType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[OutpostName](#schemaoutpostname)|true|none|The name of the Outpost.|
|Description|[OutpostDescription](#schemaoutpostdescription)|false|none|The description of the Outpost.|
|SiteId|object|true|none|none|
|AvailabilityZone|[AvailabilityZone](#schemaavailabilityzone)|false|none|The Availability Zone.|
|AvailabilityZoneId|[AvailabilityZoneId](#schemaavailabilityzoneid)|false|none|The ID of the Availability Zone.|
|Tags|object|false|none|none|
|SupportedHardwareType|object|false|none|none|

<h2 id="tocS_Outpost">Outpost</h2>
<!-- backwards compatibility -->
<a id="schemaoutpost"></a>
<a id="schema_Outpost"></a>
<a id="tocSoutpost"></a>
<a id="tocsoutpost"></a>

```json
{
  "OutpostId": {},
  "OwnerId": "stringstring",
  "OutpostArn": "string",
  "SiteId": "string",
  "Name": "string",
  "Description": "string",
  "LifeCycleStatus": "string",
  "AvailabilityZone": "string",
  "AvailabilityZoneId": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "SiteArn": "string",
  "SupportedHardwareType": {}
}
```

Information about an Outpost.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutpostId|object|false|none|none|
|OwnerId|[OwnerId](#schemaownerid)|false|none|The Amazon Web Services account ID of the Outpost owner.|
|OutpostArn|[OutpostArn](#schemaoutpostarn)|false|none|The Amazon Resource Name (ARN) of the Outpost.|
|SiteId|[SiteId](#schemasiteid)|false|none|The ID of the site.|
|Name|[OutpostName](#schemaoutpostname)|false|none|The name of the Outpost.|
|Description|[OutpostDescription](#schemaoutpostdescription)|false|none|The description of the Outpost.|
|LifeCycleStatus|[LifeCycleStatus](#schemalifecyclestatus)|false|none|The life cycle status.|
|AvailabilityZone|[AvailabilityZone](#schemaavailabilityzone)|false|none|The Availability Zone.|
|AvailabilityZoneId|[AvailabilityZoneId](#schemaavailabilityzoneid)|false|none|The ID of the Availability Zone.|
|Tags|object|false|none|none|
|SiteArn|[SiteArn](#schemasitearn)|false|none|The Amazon Resource Name (ARN) of the site.|
|SupportedHardwareType|object|false|none|none|

<h2 id="tocS_SiteName">SiteName</h2>
<!-- backwards compatibility -->
<a id="schemasitename"></a>
<a id="schema_SiteName"></a>
<a id="tocSsitename"></a>
<a id="tocssitename"></a>

```json
"string"
```

The name of the site.

<h2 id="tocS_SiteDescription">SiteDescription</h2>
<!-- backwards compatibility -->
<a id="schemasitedescription"></a>
<a id="schema_SiteDescription"></a>
<a id="tocSsitedescription"></a>
<a id="tocssitedescription"></a>

```json
"string"
```

The description of the site.

<h2 id="tocS_SiteNotes">SiteNotes</h2>
<!-- backwards compatibility -->
<a id="schemasitenotes"></a>
<a id="schema_SiteNotes"></a>
<a id="tocSsitenotes"></a>
<a id="tocssitenotes"></a>

```json
"string"
```

<h2 id="tocS_RackPhysicalProperties">RackPhysicalProperties</h2>
<!-- backwards compatibility -->
<a id="schemarackphysicalproperties"></a>
<a id="schema_RackPhysicalProperties"></a>
<a id="tocSrackphysicalproperties"></a>
<a id="tocsrackphysicalproperties"></a>

```json
{
  "PowerDrawKva": {},
  "PowerPhase": {},
  "PowerConnector": {},
  "PowerFeedDrop": {},
  "UplinkGbps": {},
  "UplinkCount": {},
  "FiberOpticCableType": {},
  "OpticalStandard": {},
  "MaximumSupportedWeightLbs": {}
}
```

 Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PowerDrawKva|object|false|none|none|
|PowerPhase|object|false|none|none|
|PowerConnector|object|false|none|none|
|PowerFeedDrop|object|false|none|none|
|UplinkGbps|object|false|none|none|
|UplinkCount|object|false|none|none|
|FiberOpticCableType|object|false|none|none|
|OpticalStandard|object|false|none|none|
|MaximumSupportedWeightLbs|object|false|none|none|

<h2 id="tocS_CreateSiteInput">CreateSiteInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesiteinput"></a>
<a id="schema_CreateSiteInput"></a>
<a id="tocScreatesiteinput"></a>
<a id="tocscreatesiteinput"></a>

```json
{
  "Name": "string",
  "Description": "string",
  "Notes": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "OperatingAddress": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  },
  "ShippingAddress": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  },
  "RackPhysicalProperties": {
    "PowerDrawKva": {},
    "PowerPhase": {},
    "PowerConnector": {},
    "PowerFeedDrop": {},
    "UplinkGbps": {},
    "UplinkCount": {},
    "FiberOpticCableType": {},
    "OpticalStandard": {},
    "MaximumSupportedWeightLbs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[SiteName](#schemasitename)|true|none|The name of the site.|
|Description|[SiteDescription](#schemasitedescription)|false|none|The description of the site.|
|Notes|object|false|none|none|
|Tags|object|false|none|none|
|OperatingAddress|object|false|none|none|
|ShippingAddress|object|false|none|none|
|RackPhysicalProperties|object|false|none|none|

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "SiteId": "string",
  "AccountId": "stringstring",
  "Name": "string",
  "Description": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "SiteArn": "string",
  "Notes": {},
  "OperatingAddressCountryCode": {},
  "OperatingAddressStateOrRegion": {},
  "OperatingAddressCity": {},
  "RackPhysicalProperties": {
    "PowerDrawKva": {},
    "PowerPhase": {},
    "PowerConnector": {},
    "PowerFeedDrop": {},
    "UplinkGbps": {},
    "UplinkCount": {},
    "FiberOpticCableType": {},
    "OpticalStandard": {},
    "MaximumSupportedWeightLbs": {}
  }
}
```

Information about a site.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SiteId|[SiteId](#schemasiteid)|false|none|The ID of the site.|
|AccountId|[AccountId](#schemaaccountid)|false|none|The ID of the Amazon Web Services account.|
|Name|[SiteName](#schemasitename)|false|none|The name of the site.|
|Description|[SiteDescription](#schemasitedescription)|false|none|The description of the site.|
|Tags|object|false|none|none|
|SiteArn|[SiteArn](#schemasitearn)|false|none|The Amazon Resource Name (ARN) of the site.|
|Notes|object|false|none|none|
|OperatingAddressCountryCode|object|false|none|none|
|OperatingAddressStateOrRegion|object|false|none|none|
|OperatingAddressCity|object|false|none|none|
|RackPhysicalProperties|object|false|none|none|

<h2 id="tocS_OutpostId">OutpostId</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostid"></a>
<a id="schema_OutpostId"></a>
<a id="tocSoutpostid"></a>
<a id="tocsoutpostid"></a>

```json
"string"
```

<h2 id="tocS_DeleteOutpostInput">DeleteOutpostInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoutpostinput"></a>
<a id="schema_DeleteOutpostInput"></a>
<a id="tocSdeleteoutpostinput"></a>
<a id="tocsdeleteoutpostinput"></a>

```json
{}
```

<h2 id="tocS_DeleteSiteInput">DeleteSiteInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesiteinput"></a>
<a id="schema_DeleteSiteInput"></a>
<a id="tocSdeletesiteinput"></a>
<a id="tocsdeletesiteinput"></a>

```json
{}
```

<h2 id="tocS_DeviceSerialNumber">DeviceSerialNumber</h2>
<!-- backwards compatibility -->
<a id="schemadeviceserialnumber"></a>
<a id="schema_DeviceSerialNumber"></a>
<a id="tocSdeviceserialnumber"></a>
<a id="tocsdeviceserialnumber"></a>

```json
"string"
```

<h2 id="tocS_MaxSize">MaxSize</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize"></a>
<a id="schema_MaxSize"></a>
<a id="tocSmaxsize"></a>
<a id="tocsmaxsize"></a>

```json
"string"
```

<h2 id="tocS_Quantity">Quantity</h2>
<!-- backwards compatibility -->
<a id="schemaquantity"></a>
<a id="schema_Quantity"></a>
<a id="tocSquantity"></a>
<a id="tocsquantity"></a>

```json
"string"
```

<h2 id="tocS_EC2Capacity">EC2Capacity</h2>
<!-- backwards compatibility -->
<a id="schemaec2capacity"></a>
<a id="schema_EC2Capacity"></a>
<a id="tocSec2capacity"></a>
<a id="tocsec2capacity"></a>

```json
{
  "Family": {},
  "MaxSize": {},
  "Quantity": {}
}
```

 Information about EC2 capacity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Family|object|false|none|none|
|MaxSize|object|false|none|none|
|Quantity|object|false|none|none|

<h2 id="tocS_EC2FamilyList">EC2FamilyList</h2>
<!-- backwards compatibility -->
<a id="schemaec2familylist"></a>
<a id="schema_EC2FamilyList"></a>
<a id="tocSec2familylist"></a>
<a id="tocsec2familylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetCatalogItemInput">GetCatalogItemInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcatalogiteminput"></a>
<a id="schema_GetCatalogItemInput"></a>
<a id="tocSgetcatalogiteminput"></a>
<a id="tocsgetcatalogiteminput"></a>

```json
{}
```

<h2 id="tocS_GetConnectionRequest">GetConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionrequest"></a>
<a id="schema_GetConnectionRequest"></a>
<a id="tocSgetconnectionrequest"></a>
<a id="tocsgetconnectionrequest"></a>

```json
{}
```

<h2 id="tocS_GetOrderInput">GetOrderInput</h2>
<!-- backwards compatibility -->
<a id="schemagetorderinput"></a>
<a id="schema_GetOrderInput"></a>
<a id="tocSgetorderinput"></a>
<a id="tocsgetorderinput"></a>

```json
{}
```

<h2 id="tocS_GetOutpostInput">GetOutpostInput</h2>
<!-- backwards compatibility -->
<a id="schemagetoutpostinput"></a>
<a id="schema_GetOutpostInput"></a>
<a id="tocSgetoutpostinput"></a>
<a id="tocsgetoutpostinput"></a>

```json
{}
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

The pagination token.

<h2 id="tocS_MaxResults1000">MaxResults1000</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults1000"></a>
<a id="schema_MaxResults1000"></a>
<a id="tocSmaxresults1000"></a>
<a id="tocsmaxresults1000"></a>

```json
1
```

The maximum page size.

<h2 id="tocS_GetOutpostInstanceTypesInput">GetOutpostInstanceTypesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetoutpostinstancetypesinput"></a>
<a id="schema_GetOutpostInstanceTypesInput"></a>
<a id="tocSgetoutpostinstancetypesinput"></a>
<a id="tocsgetoutpostinstancetypesinput"></a>

```json
{}
```

<h2 id="tocS_InstanceTypeListDefinition">InstanceTypeListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypelistdefinition"></a>
<a id="schema_InstanceTypeListDefinition"></a>
<a id="tocSinstancetypelistdefinition"></a>
<a id="tocsinstancetypelistdefinition"></a>

```json
[
  {
    "InstanceType": "string"
  }
]
```

Information about the instance types.

<h2 id="tocS_OutpostArn">OutpostArn</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostarn"></a>
<a id="schema_OutpostArn"></a>
<a id="tocSoutpostarn"></a>
<a id="tocsoutpostarn"></a>

```json
"string"
```

The Amazon Resource Name (ARN) of the Outpost.

<h2 id="tocS_GetSiteAddressInput">GetSiteAddressInput</h2>
<!-- backwards compatibility -->
<a id="schemagetsiteaddressinput"></a>
<a id="schema_GetSiteAddressInput"></a>
<a id="tocSgetsiteaddressinput"></a>
<a id="tocsgetsiteaddressinput"></a>

```json
{}
```

<h2 id="tocS_GetSiteInput">GetSiteInput</h2>
<!-- backwards compatibility -->
<a id="schemagetsiteinput"></a>
<a id="schema_GetSiteInput"></a>
<a id="tocSgetsiteinput"></a>
<a id="tocsgetsiteinput"></a>

```json
{}
```

<h2 id="tocS_HostIdList">HostIdList</h2>
<!-- backwards compatibility -->
<a id="schemahostidlist"></a>
<a id="schema_HostIdList"></a>
<a id="tocShostidlist"></a>
<a id="tocshostidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ISO8601Timestamp">ISO8601Timestamp</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601timestamp"></a>
<a id="schema_ISO8601Timestamp"></a>
<a id="tocSiso8601timestamp"></a>
<a id="tocsiso8601timestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

```json
"string"
```

The instance type.

<h2 id="tocS_InstanceTypeItem">InstanceTypeItem</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypeitem"></a>
<a id="schema_InstanceTypeItem"></a>
<a id="tocSinstancetypeitem"></a>
<a id="tocsinstancetypeitem"></a>

```json
{
  "InstanceType": "string"
}
```

Information about an instance type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceType|[InstanceType](#schemainstancetype)|false|none|The instance type.|

<h2 id="tocS_LifeCycleStatusList">LifeCycleStatusList</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclestatuslist"></a>
<a id="schema_LifeCycleStatusList"></a>
<a id="tocSlifecyclestatuslist"></a>
<a id="tocslifecyclestatuslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LineItemId">LineItemId</h2>
<!-- backwards compatibility -->
<a id="schemalineitemid"></a>
<a id="schema_LineItemId"></a>
<a id="tocSlineitemid"></a>
<a id="tocslineitemid"></a>

```json
"string"
```

<h2 id="tocS_LineItemQuantity">LineItemQuantity</h2>
<!-- backwards compatibility -->
<a id="schemalineitemquantity"></a>
<a id="schema_LineItemQuantity"></a>
<a id="tocSlineitemquantity"></a>
<a id="tocslineitemquantity"></a>

```json
1
```

<h2 id="tocS_LineItemStatus">LineItemStatus</h2>
<!-- backwards compatibility -->
<a id="schemalineitemstatus"></a>
<a id="schema_LineItemStatus"></a>
<a id="tocSlineitemstatus"></a>
<a id="tocslineitemstatus"></a>

```json
"PREPARING"
```

<h2 id="tocS_ShipmentInformation">ShipmentInformation</h2>
<!-- backwards compatibility -->
<a id="schemashipmentinformation"></a>
<a id="schema_ShipmentInformation"></a>
<a id="tocSshipmentinformation"></a>
<a id="tocsshipmentinformation"></a>

```json
{
  "ShipmentTrackingNumber": {},
  "ShipmentCarrier": {}
}
```

 Information about a line item shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShipmentTrackingNumber|object|false|none|none|
|ShipmentCarrier|object|false|none|none|

<h2 id="tocS_LineItemAssetInformationList">LineItemAssetInformationList</h2>
<!-- backwards compatibility -->
<a id="schemalineitemassetinformationlist"></a>
<a id="schema_LineItemAssetInformationList"></a>
<a id="tocSlineitemassetinformationlist"></a>
<a id="tocslineitemassetinformationlist"></a>

```json
[
  {
    "AssetId": {},
    "MacAddressList": {}
  }
]
```

<h2 id="tocS_LineItem">LineItem</h2>
<!-- backwards compatibility -->
<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "CatalogItemId": {},
  "LineItemId": {},
  "Quantity": {},
  "Status": {},
  "ShipmentInformation": {
    "ShipmentTrackingNumber": {},
    "ShipmentCarrier": {}
  },
  "AssetInformationList": {},
  "PreviousLineItemId": {},
  "PreviousOrderId": {}
}
```

Information about a line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogItemId|object|false|none|none|
|LineItemId|object|false|none|none|
|Quantity|object|false|none|none|
|Status|object|false|none|none|
|ShipmentInformation|object|false|none|none|
|AssetInformationList|object|false|none|none|
|PreviousLineItemId|object|false|none|none|
|PreviousOrderId|object|false|none|none|

<h2 id="tocS_MacAddressList">MacAddressList</h2>
<!-- backwards compatibility -->
<a id="schemamacaddresslist"></a>
<a id="schema_MacAddressList"></a>
<a id="tocSmacaddresslist"></a>
<a id="tocsmacaddresslist"></a>

```json
[
  "stringstringstrin"
]
```

<h2 id="tocS_LineItemAssetInformation">LineItemAssetInformation</h2>
<!-- backwards compatibility -->
<a id="schemalineitemassetinformation"></a>
<a id="schema_LineItemAssetInformation"></a>
<a id="tocSlineitemassetinformation"></a>
<a id="tocslineitemassetinformation"></a>

```json
{
  "AssetId": {},
  "MacAddressList": {}
}
```

 Information about a line item asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetId|object|false|none|none|
|MacAddressList|object|false|none|none|

<h2 id="tocS_LineItemListDefinition">LineItemListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemalineitemlistdefinition"></a>
<a id="schema_LineItemListDefinition"></a>
<a id="tocSlineitemlistdefinition"></a>
<a id="tocslineitemlistdefinition"></a>

```json
[
  {
    "CatalogItemId": {},
    "LineItemId": {},
    "Quantity": {},
    "Status": {},
    "ShipmentInformation": {
      "ShipmentTrackingNumber": {},
      "ShipmentCarrier": {}
    },
    "AssetInformationList": {},
    "PreviousLineItemId": {},
    "PreviousOrderId": {}
  }
]
```

<h2 id="tocS_LineItemStatusCounts">LineItemStatusCounts</h2>
<!-- backwards compatibility -->
<a id="schemalineitemstatuscounts"></a>
<a id="schema_LineItemStatusCounts"></a>
<a id="tocSlineitemstatuscounts"></a>
<a id="tocslineitemstatuscounts"></a>

```json
{
  "property1": 1,
  "property2": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[LineItemQuantity](#schemalineitemquantity)|false|none|none|

<h2 id="tocS_StatusList">StatusList</h2>
<!-- backwards compatibility -->
<a id="schemastatuslist"></a>
<a id="schema_StatusList"></a>
<a id="tocSstatuslist"></a>
<a id="tocsstatuslist"></a>

```json
[
  "ACTIVE"
]
```

<h2 id="tocS_ListAssetsInput">ListAssetsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsinput"></a>
<a id="schema_ListAssetsInput"></a>
<a id="tocSlistassetsinput"></a>
<a id="tocslistassetsinput"></a>

```json
{}
```

<h2 id="tocS_ListCatalogItemsInput">ListCatalogItemsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcatalogitemsinput"></a>
<a id="schema_ListCatalogItemsInput"></a>
<a id="tocSlistcatalogitemsinput"></a>
<a id="tocslistcatalogitemsinput"></a>

```json
{}
```

<h2 id="tocS_ListOrdersInput">ListOrdersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistordersinput"></a>
<a id="schema_ListOrdersInput"></a>
<a id="tocSlistordersinput"></a>
<a id="tocslistordersinput"></a>

```json
{}
```

<h2 id="tocS_OrderSummaryListDefinition">OrderSummaryListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaordersummarylistdefinition"></a>
<a id="schema_OrderSummaryListDefinition"></a>
<a id="tocSordersummarylistdefinition"></a>
<a id="tocsordersummarylistdefinition"></a>

```json
[
  {
    "OutpostId": {},
    "OrderId": {},
    "OrderType": {},
    "Status": {},
    "LineItemCountsByStatus": {
      "property1": 1,
      "property2": 1
    },
    "OrderSubmissionDate": {},
    "OrderFulfilledDate": {}
  }
]
```

<h2 id="tocS_ListOutpostsInput">ListOutpostsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistoutpostsinput"></a>
<a id="schema_ListOutpostsInput"></a>
<a id="tocSlistoutpostsinput"></a>
<a id="tocslistoutpostsinput"></a>

```json
{}
```

<h2 id="tocS_outpostListDefinition">outpostListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostlistdefinition"></a>
<a id="schema_outpostListDefinition"></a>
<a id="tocSoutpostlistdefinition"></a>
<a id="tocsoutpostlistdefinition"></a>

```json
[
  {
    "OutpostId": {},
    "OwnerId": "stringstring",
    "OutpostArn": "string",
    "SiteId": "string",
    "Name": "string",
    "Description": "string",
    "LifeCycleStatus": "string",
    "AvailabilityZone": "string",
    "AvailabilityZoneId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "SupportedHardwareType": {}
  }
]
```

Information about the Outposts.

<h2 id="tocS_StateOrRegionList">StateOrRegionList</h2>
<!-- backwards compatibility -->
<a id="schemastateorregionlist"></a>
<a id="schema_StateOrRegionList"></a>
<a id="tocSstateorregionlist"></a>
<a id="tocsstateorregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListSitesInput">ListSitesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsitesinput"></a>
<a id="schema_ListSitesInput"></a>
<a id="tocSlistsitesinput"></a>
<a id="tocslistsitesinput"></a>

```json
{}
```

<h2 id="tocS_siteListDefinition">siteListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasitelistdefinition"></a>
<a id="schema_siteListDefinition"></a>
<a id="tocSsitelistdefinition"></a>
<a id="tocssitelistdefinition"></a>

```json
[
  {
    "SiteId": "string",
    "AccountId": "stringstring",
    "Name": "string",
    "Description": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "SiteArn": "string",
    "Notes": {},
    "OperatingAddressCountryCode": {},
    "OperatingAddressStateOrRegion": {},
    "OperatingAddressCity": {},
    "RackPhysicalProperties": {
      "PowerDrawKva": {},
      "PowerPhase": {},
      "PowerConnector": {},
      "PowerFeedDrop": {},
      "UplinkGbps": {},
      "UplinkCount": {},
      "FiberOpticCableType": {},
      "OpticalStandard": {},
      "MaximumSupportedWeightLbs": {}
    }
  }
]
```

Information about the sites.

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_MacAddress">MacAddress</h2>
<!-- backwards compatibility -->
<a id="schemamacaddress"></a>
<a id="schema_MacAddress"></a>
<a id="tocSmacaddress"></a>
<a id="tocsmacaddress"></a>

```json
"stringstringstrin"
```

<h2 id="tocS_NetworkInterfaceDeviceIndex">NetworkInterfaceDeviceIndex</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfacedeviceindex"></a>
<a id="schema_NetworkInterfaceDeviceIndex"></a>
<a id="tocSnetworkinterfacedeviceindex"></a>
<a id="tocsnetworkinterfacedeviceindex"></a>

```json
0
```

<h2 id="tocS_OutpostIdOnly">OutpostIdOnly</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostidonly"></a>
<a id="schema_OutpostIdOnly"></a>
<a id="tocSoutpostidonly"></a>
<a id="tocsoutpostidonly"></a>

```json
"string"
```

<h2 id="tocS_OrderStatus">OrderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorderstatus"></a>
<a id="schema_OrderStatus"></a>
<a id="tocSorderstatus"></a>
<a id="tocsorderstatus"></a>

```json
"RECEIVED"
```

<h2 id="tocS_OrderType">OrderType</h2>
<!-- backwards compatibility -->
<a id="schemaordertype"></a>
<a id="schema_OrderType"></a>
<a id="tocSordertype"></a>
<a id="tocsordertype"></a>

```json
"OUTPOST"
```

<h2 id="tocS_OrderSummary">OrderSummary</h2>
<!-- backwards compatibility -->
<a id="schemaordersummary"></a>
<a id="schema_OrderSummary"></a>
<a id="tocSordersummary"></a>
<a id="tocsordersummary"></a>

```json
{
  "OutpostId": {},
  "OrderId": {},
  "OrderType": {},
  "Status": {},
  "LineItemCountsByStatus": {
    "property1": 1,
    "property2": 1
  },
  "OrderSubmissionDate": {},
  "OrderFulfilledDate": {}
}
```

 A summary of line items in your order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutpostId|object|false|none|none|
|OrderId|object|false|none|none|
|OrderType|object|false|none|none|
|Status|object|false|none|none|
|LineItemCountsByStatus|object|false|none|none|
|OrderSubmissionDate|object|false|none|none|
|OrderFulfilledDate|object|false|none|none|

<h2 id="tocS_OwnerId">OwnerId</h2>
<!-- backwards compatibility -->
<a id="schemaownerid"></a>
<a id="schema_OwnerId"></a>
<a id="tocSownerid"></a>
<a id="tocsownerid"></a>

```json
"stringstring"
```

The Amazon Web Services account ID of the Outpost owner.

<h2 id="tocS_SiteArn">SiteArn</h2>
<!-- backwards compatibility -->
<a id="schemasitearn"></a>
<a id="schema_SiteArn"></a>
<a id="tocSsitearn"></a>
<a id="tocssitearn"></a>

```json
"string"
```

The Amazon Resource Name (ARN) of the site.

<h2 id="tocS_ShipmentCarrier">ShipmentCarrier</h2>
<!-- backwards compatibility -->
<a id="schemashipmentcarrier"></a>
<a id="schema_ShipmentCarrier"></a>
<a id="tocSshipmentcarrier"></a>
<a id="tocsshipmentcarrier"></a>

```json
"DHL"
```

<h2 id="tocS_TrackingId">TrackingId</h2>
<!-- backwards compatibility -->
<a id="schematrackingid"></a>
<a id="schema_TrackingId"></a>
<a id="tocStrackingid"></a>
<a id="tocstrackingid"></a>

```json
"string"
```

<h2 id="tocS_StartConnectionRequest">StartConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartconnectionrequest"></a>
<a id="schema_StartConnectionRequest"></a>
<a id="tocSstartconnectionrequest"></a>
<a id="tocsstartconnectionrequest"></a>

```json
{
  "DeviceSerialNumber": {},
  "AssetId": {},
  "ClientPublicKey": {},
  "NetworkInterfaceDeviceIndex": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceSerialNumber|object|true|none|none|
|AssetId|object|true|none|none|
|ClientPublicKey|object|true|none|none|
|NetworkInterfaceDeviceIndex|object|true|none|none|

<h2 id="tocS_UnderlayIpAddress">UnderlayIpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaunderlayipaddress"></a>
<a id="schema_UnderlayIpAddress"></a>
<a id="tocSunderlayipaddress"></a>
<a id="tocsunderlayipaddress"></a>

```json
"strings"
```

<h2 id="tocS_SupportedUplinkGbps">SupportedUplinkGbps</h2>
<!-- backwards compatibility -->
<a id="schemasupporteduplinkgbps"></a>
<a id="schema_SupportedUplinkGbps"></a>
<a id="tocSsupporteduplinkgbps"></a>
<a id="tocssupporteduplinkgbps"></a>

```json
0
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
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateOutpostInput">UpdateOutpostInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoutpostinput"></a>
<a id="schema_UpdateOutpostInput"></a>
<a id="tocSupdateoutpostinput"></a>
<a id="tocsupdateoutpostinput"></a>

```json
{
  "Name": "string",
  "Description": "string",
  "SupportedHardwareType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[OutpostName](#schemaoutpostname)|false|none|The name of the Outpost.|
|Description|[OutpostDescription](#schemaoutpostdescription)|false|none|The description of the Outpost.|
|SupportedHardwareType|object|false|none|none|

<h2 id="tocS_UpdateSiteAddressInput">UpdateSiteAddressInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiteaddressinput"></a>
<a id="schema_UpdateSiteAddressInput"></a>
<a id="tocSupdatesiteaddressinput"></a>
<a id="tocsupdatesiteaddressinput"></a>

```json
{
  "AddressType": {},
  "Address": {
    "ContactName": {},
    "ContactPhoneNumber": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "AddressLine3": {},
    "City": {},
    "StateOrRegion": {},
    "DistrictOrCounty": {},
    "PostalCode": {},
    "CountryCode": {},
    "Municipality": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressType|object|true|none|none|
|Address|object|true|none|none|

<h2 id="tocS_UpdateSiteInput">UpdateSiteInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiteinput"></a>
<a id="schema_UpdateSiteInput"></a>
<a id="tocSupdatesiteinput"></a>
<a id="tocsupdatesiteinput"></a>

```json
{
  "Name": "string",
  "Description": "string",
  "Notes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|[SiteName](#schemasitename)|false|none|The name of the site.|
|Description|[SiteDescription](#schemasitedescription)|false|none|The description of the site.|
|Notes|object|false|none|none|

<h2 id="tocS_UpdateSiteRackPhysicalPropertiesInput">UpdateSiteRackPhysicalPropertiesInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiterackphysicalpropertiesinput"></a>
<a id="schema_UpdateSiteRackPhysicalPropertiesInput"></a>
<a id="tocSupdatesiterackphysicalpropertiesinput"></a>
<a id="tocsupdatesiterackphysicalpropertiesinput"></a>

```json
{
  "PowerDrawKva": {},
  "PowerPhase": {},
  "PowerConnector": {},
  "PowerFeedDrop": {},
  "UplinkGbps": {},
  "UplinkCount": {},
  "FiberOpticCableType": {},
  "OpticalStandard": {},
  "MaximumSupportedWeightLbs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PowerDrawKva|object|false|none|none|
|PowerPhase|object|false|none|none|
|PowerConnector|object|false|none|none|
|PowerFeedDrop|object|false|none|none|
|UplinkGbps|object|false|none|none|
|UplinkCount|object|false|none|none|
|FiberOpticCableType|object|false|none|none|
|OpticalStandard|object|false|none|none|
|MaximumSupportedWeightLbs|object|false|none|none|
