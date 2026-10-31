<h1 id="aws-price-list-service">AWS Price List Service v2017-10-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Web Services Price List API is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as <code>Location</code>, <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at the SKU level. You can use the Amazon Web Services Price List to build cost control and scenario planning tools, reconcile billing data, forecast future spend for budgeting purposes, and provide cost benefit analysis that compare your internal workloads with Amazon Web Services.</p> <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then <code>GetServices</code> with a service code to retrieve the attribute names for that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code> to see what values are available for an attribute. With the service code and an attribute name and value, you can use <code>GetProducts</code> to find specific products that you're interested in, such as an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code> <code>volumeType</code>.</p> <p>Service Endpoint</p> <p>Amazon Web Services Price List service API provides the following two endpoints:</p> <ul> <li> <p>https://api.pricing.us-east-1.amazonaws.com</p> </li> <li> <p>https://api.pricing.ap-south-1.amazonaws.com</p> </li> </ul>

Base URLs:

* <a href="http://api.pricing.us-east-1.amazonaws.com">http://api.pricing.us-east-1.amazonaws.com</a> - The AWS Pricing multi-region endpoint

* <a href="https://api.pricing.us-east-1.amazonaws.com">https://api.pricing.us-east-1.amazonaws.com</a> - The AWS Pricing multi-region endpoint

* <a href="http://api.pricing.cn-north-1.amazonaws.com.cn">http://api.pricing.cn-north-1.amazonaws.com.cn</a> - The AWS Pricing endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.pricing.cn-north-1.amazonaws.com.cn">https://api.pricing.cn-north-1.amazonaws.com.cn</a> - The AWS Pricing endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/pricing/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-price-list-service-default">Default</h1>

## DescribeServices

<a id="opIdDescribeServices"></a>

> Code samples

```bash
curl 'https://pricing.us-east-1.amazonaws.com/#X-Amz-Target=AWSPriceListService.DescribeServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPriceListService.DescribeServices' \
  -d '{
    "ServiceCode": {},
    "FormatVersion": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSPriceListService.DescribeServices`

Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.

> Body parameter

```json
{
  "ServiceCode": {},
  "FormatVersion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeservices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeServicesRequest](#schemadescribeservicesrequest)|true|none|
|» ServiceCode|body|object|false|none|
|» FormatVersion|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPriceListService.DescribeServices|

> Example responses

> 200 Response

```json
{
  "FormatVersion": "aws_v1",
  "NextToken": "abcdefg123",
  "Services": [
    {
      "AttributeNames": [
        "volumeType",
        "maxIopsvolume",
        "instanceCapacity10xlarge",
        "locationType",
        "operation"
      ],
      "ServiceCode": "AmazonEC2"
    }
  ]
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

<h3 id="describeservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServicesResponse](#schemadescribeservicesresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAttributeValues

<a id="opIdGetAttributeValues"></a>

> Code samples

```bash
curl 'https://pricing.us-east-1.amazonaws.com/#X-Amz-Target=AWSPriceListService.GetAttributeValues' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPriceListService.GetAttributeValues' \
  -d '{
    "ServiceCode": {},
    "AttributeName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSPriceListService.GetAttributeValues`

Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.

> Body parameter

```json
{
  "ServiceCode": {},
  "AttributeName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getattributevalues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAttributeValuesRequest](#schemagetattributevaluesrequest)|true|none|
|» ServiceCode|body|object|true|none|
|» AttributeName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPriceListService.GetAttributeValues|

> Example responses

> 200 Response

```json
{
  "AttributeValues": [
    {
      "Value": "Throughput Optimized HDD"
    },
    {
      "Value": "Provisioned IOPS"
    }
  ],
  "NextToken": "GpgauEXAMPLEezucl5LV0w==:7GzYJ0nw0DBTJ2J66EoTIIynE6O1uXwQtTRqioJzQadBnDVgHPzI1en4BUQnPCLpzeBk9RQQAWaFieA4+DapFAGLgk+Z/9/cTw9GldnPOHN98+FdmJP7wKU3QQpQ8MQr5KOeBkIsAqvAQYdL0DkL7tHwPtE5iCEByAmg9gcC/yBU1vAOsf7R3VaNN4M5jMDv3woSWqASSIlBVB6tgW78YL22KhssoItM/jWW+aP6Jqtq4mldxp/ct6DWAl+xLFwHU/CbketimPPXyqHF3/UXDw=="
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

<h3 id="getattributevalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAttributeValuesResponse](#schemagetattributevaluesresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPriceListFileUrl

<a id="opIdGetPriceListFileUrl"></a>

> Code samples

```bash
curl 'https://pricing.us-east-1.amazonaws.com/#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPriceListService.GetPriceListFileUrl' \
  -d '{
    "PriceListArn": {},
    "FileFormat": {}
  }'
```

`POST /#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl`

<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns the URL that you can retrieve your Price List file from. This URL is based on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. </p>

> Body parameter

```json
{
  "PriceListArn": {},
  "FileFormat": {}
}
```

<h3 id="getpricelistfileurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetPriceListFileUrlRequest](#schemagetpricelistfileurlrequest)|true|none|
|» PriceListArn|body|object|true|none|
|» FileFormat|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPriceListService.GetPriceListFileUrl|

> Example responses

> 200 Response

```json
{
  "Url": {}
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

<h3 id="getpricelistfileurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPriceListFileUrlResponse](#schemagetpricelistfileurlresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProducts

<a id="opIdGetProducts"></a>

> Code samples

```bash
curl 'https://pricing.us-east-1.amazonaws.com/#X-Amz-Target=AWSPriceListService.GetProducts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPriceListService.GetProducts' \
  -d '{
    "ServiceCode": {},
    "Filters": {},
    "FormatVersion": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSPriceListService.GetProducts`

Returns a list of all products that match the filter criteria.

> Body parameter

```json
{
  "ServiceCode": {},
  "Filters": {},
  "FormatVersion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetProductsRequest](#schemagetproductsrequest)|true|none|
|» ServiceCode|body|object|true|none|
|» Filters|body|object|false|none|
|» FormatVersion|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPriceListService.GetProducts|

> Example responses

> 200 Response

```json
{
  "FormatVersion": {},
  "PriceList": {},
  "NextToken": {}
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

<h3 id="getproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProductsResponse](#schemagetproductsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPriceLists

<a id="opIdListPriceLists"></a>

> Code samples

```bash
curl 'https://pricing.us-east-1.amazonaws.com/#X-Amz-Target=AWSPriceListService.ListPriceLists' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPriceListService.ListPriceLists' \
  -d '{
    "ServiceCode": {},
    "EffectiveDate": {},
    "RegionCode": {},
    "CurrencyCode": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSPriceListService.ListPriceLists`

<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns a list of Price List references that the requester if authorized to view, given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price List references from all available Amazon Web Services Regions. Use with a <code>RegionCode</code> filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html"> <code>GetPriceListFileUrl</code> </a> API.</p>

> Body parameter

```json
{
  "ServiceCode": {},
  "EffectiveDate": {},
  "RegionCode": {},
  "CurrencyCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpricelists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPriceListsRequest](#schemalistpricelistsrequest)|true|none|
|» ServiceCode|body|object|true|none|
|» EffectiveDate|body|object|true|none|
|» RegionCode|body|object|false|none|
|» CurrencyCode|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPriceListService.ListPriceLists|

> Example responses

> 200 Response

```json
{
  "PriceLists": {},
  "NextToken": {}
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

<h3 id="listpricelists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPriceListsResponse](#schemalistpricelistsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeServicesResponse">DescribeServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeservicesresponse"></a>
<a id="schema_DescribeServicesResponse"></a>
<a id="tocSdescribeservicesresponse"></a>
<a id="tocsdescribeservicesresponse"></a>

```json
{
  "FormatVersion": "aws_v1",
  "NextToken": "abcdefg123",
  "Services": [
    {
      "AttributeNames": [
        "volumeType",
        "maxIopsvolume",
        "instanceCapacity10xlarge",
        "locationType",
        "operation"
      ],
      "ServiceCode": "AmazonEC2"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Services|object|false|none|none|
|FormatVersion|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeServicesRequest">DescribeServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeservicesrequest"></a>
<a id="schema_DescribeServicesRequest"></a>
<a id="tocSdescribeservicesrequest"></a>
<a id="tocsdescribeservicesrequest"></a>

```json
{
  "ServiceCode": {},
  "FormatVersion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|false|none|none|
|FormatVersion|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

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

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ExpiredNextTokenException">ExpiredNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemaexpirednexttokenexception"></a>
<a id="schema_ExpiredNextTokenException"></a>
<a id="tocSexpirednexttokenexception"></a>
<a id="tocsexpirednexttokenexception"></a>

```json
null
```

<h2 id="tocS_GetAttributeValuesResponse">GetAttributeValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetattributevaluesresponse"></a>
<a id="schema_GetAttributeValuesResponse"></a>
<a id="tocSgetattributevaluesresponse"></a>
<a id="tocsgetattributevaluesresponse"></a>

```json
{
  "AttributeValues": [
    {
      "Value": "Throughput Optimized HDD"
    },
    {
      "Value": "Provisioned IOPS"
    }
  ],
  "NextToken": "GpgauEXAMPLEezucl5LV0w==:7GzYJ0nw0DBTJ2J66EoTIIynE6O1uXwQtTRqioJzQadBnDVgHPzI1en4BUQnPCLpzeBk9RQQAWaFieA4+DapFAGLgk+Z/9/cTw9GldnPOHN98+FdmJP7wKU3QQpQ8MQr5KOeBkIsAqvAQYdL0DkL7tHwPtE5iCEByAmg9gcC/yBU1vAOsf7R3VaNN4M5jMDv3woSWqASSIlBVB6tgW78YL22KhssoItM/jWW+aP6Jqtq4mldxp/ct6DWAl+xLFwHU/CbketimPPXyqHF3/UXDw=="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeValues|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAttributeValuesRequest">GetAttributeValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetattributevaluesrequest"></a>
<a id="schema_GetAttributeValuesRequest"></a>
<a id="tocSgetattributevaluesrequest"></a>
<a id="tocsgetattributevaluesrequest"></a>

```json
{
  "ServiceCode": {},
  "AttributeName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|AttributeName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetPriceListFileUrlResponse">GetPriceListFileUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpricelistfileurlresponse"></a>
<a id="schema_GetPriceListFileUrlResponse"></a>
<a id="tocSgetpricelistfileurlresponse"></a>
<a id="tocsgetpricelistfileurlresponse"></a>

```json
{
  "Url": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|

<h2 id="tocS_GetPriceListFileUrlRequest">GetPriceListFileUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpricelistfileurlrequest"></a>
<a id="schema_GetPriceListFileUrlRequest"></a>
<a id="tocSgetpricelistfileurlrequest"></a>
<a id="tocsgetpricelistfileurlrequest"></a>

```json
{
  "PriceListArn": {},
  "FileFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PriceListArn|object|true|none|none|
|FileFormat|object|true|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_GetProductsResponse">GetProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetproductsresponse"></a>
<a id="schema_GetProductsResponse"></a>
<a id="tocSgetproductsresponse"></a>
<a id="tocsgetproductsresponse"></a>

```json
{
  "FormatVersion": {},
  "PriceList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FormatVersion|object|false|none|none|
|PriceList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetProductsRequest">GetProductsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetproductsrequest"></a>
<a id="schema_GetProductsRequest"></a>
<a id="tocSgetproductsrequest"></a>
<a id="tocsgetproductsrequest"></a>

```json
{
  "ServiceCode": {},
  "Filters": {},
  "FormatVersion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|Filters|object|false|none|none|
|FormatVersion|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPriceListsResponse">ListPriceListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpricelistsresponse"></a>
<a id="schema_ListPriceListsResponse"></a>
<a id="tocSlistpricelistsresponse"></a>
<a id="tocslistpricelistsresponse"></a>

```json
{
  "PriceLists": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PriceLists|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPriceListsRequest">ListPriceListsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpricelistsrequest"></a>
<a id="schema_ListPriceListsRequest"></a>
<a id="tocSlistpricelistsrequest"></a>
<a id="tocslistpricelistsrequest"></a>

```json
{
  "ServiceCode": {},
  "EffectiveDate": {},
  "RegionCode": {},
  "CurrencyCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|EffectiveDate|object|true|none|none|
|RegionCode|object|false|none|none|
|CurrencyCode|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_AttributeNameList">AttributeNameList</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamelist"></a>
<a id="schema_AttributeNameList"></a>
<a id="tocSattributenamelist"></a>
<a id="tocsattributenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
{
  "Value": {}
}
```

The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|

<h2 id="tocS_AttributeValueList">AttributeValueList</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluelist"></a>
<a id="schema_AttributeValueList"></a>
<a id="tocSattributevaluelist"></a>
<a id="tocsattributevaluelist"></a>

```json
[
  {
    "Value": {}
  }
]
```

<h2 id="tocS_BoxedInteger">BoxedInteger</h2>
<!-- backwards compatibility -->
<a id="schemaboxedinteger"></a>
<a id="schema_BoxedInteger"></a>
<a id="tocSboxedinteger"></a>
<a id="tocsboxedinteger"></a>

```json
1
```

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"string"
```

<h2 id="tocS_ServiceList">ServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaservicelist"></a>
<a id="schema_ServiceList"></a>
<a id="tocSservicelist"></a>
<a id="tocsservicelist"></a>

```json
[
  {
    "ServiceCode": {},
    "AttributeNames": {}
  }
]
```

<h2 id="tocS_EffectiveDate">EffectiveDate</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedate"></a>
<a id="schema_EffectiveDate"></a>
<a id="tocSeffectivedate"></a>
<a id="tocseffectivedate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_FileFormat">FileFormat</h2>
<!-- backwards compatibility -->
<a id="schemafileformat"></a>
<a id="schema_FileFormat"></a>
<a id="tocSfileformat"></a>
<a id="tocsfileformat"></a>

```json
"string"
```

<h2 id="tocS_FileFormats">FileFormats</h2>
<!-- backwards compatibility -->
<a id="schemafileformats"></a>
<a id="schema_FileFormats"></a>
<a id="tocSfileformats"></a>
<a id="tocsfileformats"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterType">FilterType</h2>
<!-- backwards compatibility -->
<a id="schemafiltertype"></a>
<a id="schema_FilterType"></a>
<a id="tocSfiltertype"></a>
<a id="tocsfiltertype"></a>

```json
"TERM_MATCH"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Type": {},
  "Field": {},
  "Value": {}
}
```

The constraints that you want all returned products to match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Field|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "Type": {},
    "Field": {},
    "Value": {}
  }
]
```

<h2 id="tocS_PriceListArn">PriceListArn</h2>
<!-- backwards compatibility -->
<a id="schemapricelistarn"></a>
<a id="schema_PriceListArn"></a>
<a id="tocSpricelistarn"></a>
<a id="tocspricelistarn"></a>

```json
"stringstringstring"
```

<h2 id="tocS_PriceListJsonItems">PriceListJsonItems</h2>
<!-- backwards compatibility -->
<a id="schemapricelistjsonitems"></a>
<a id="schema_PriceListJsonItems"></a>
<a id="tocSpricelistjsonitems"></a>
<a id="tocspricelistjsonitems"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ServiceCode">ServiceCode</h2>
<!-- backwards compatibility -->
<a id="schemaservicecode"></a>
<a id="schema_ServiceCode"></a>
<a id="tocSservicecode"></a>
<a id="tocsservicecode"></a>

```json
"string"
```

<h2 id="tocS_RegionCode">RegionCode</h2>
<!-- backwards compatibility -->
<a id="schemaregioncode"></a>
<a id="schema_RegionCode"></a>
<a id="tocSregioncode"></a>
<a id="tocsregioncode"></a>

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

<h2 id="tocS_PriceLists">PriceLists</h2>
<!-- backwards compatibility -->
<a id="schemapricelists"></a>
<a id="schema_PriceLists"></a>
<a id="tocSpricelists"></a>
<a id="tocspricelists"></a>

```json
[
  {
    "PriceListArn": {},
    "RegionCode": {},
    "CurrencyCode": {},
    "FileFormats": {}
  }
]
```

<h2 id="tocS_PriceList">PriceList</h2>
<!-- backwards compatibility -->
<a id="schemapricelist"></a>
<a id="schema_PriceList"></a>
<a id="tocSpricelist"></a>
<a id="tocspricelist"></a>

```json
{
  "PriceListArn": {},
  "RegionCode": {},
  "CurrencyCode": {},
  "FileFormats": {}
}
```

<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This is the type of price list references that match your request. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PriceListArn|object|false|none|none|
|RegionCode|object|false|none|none|
|CurrencyCode|object|false|none|none|
|FileFormats|object|false|none|none|

<h2 id="tocS_PriceListJsonItem">PriceListJsonItem</h2>
<!-- backwards compatibility -->
<a id="schemapricelistjsonitem"></a>
<a id="schema_PriceListJsonItem"></a>
<a id="tocSpricelistjsonitem"></a>
<a id="tocspricelistjsonitem"></a>

```json
"string"
```

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "ServiceCode": {},
  "AttributeNames": {}
}
```

The metadata for a service, such as the service code and available attribute names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|AttributeNames|object|false|none|none|
