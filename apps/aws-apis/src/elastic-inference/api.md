<h1 id="amazon-elastic-inference">Amazon Elastic  Inference v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p> Elastic Inference public APIs. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>

Base URLs:

* <a href="http://api.elastic-inference.us-east-1.amazonaws.com">http://api.elastic-inference.us-east-1.amazonaws.com</a> - The Amazon Elastic Inference multi-region endpoint

* <a href="https://api.elastic-inference.us-east-1.amazonaws.com">https://api.elastic-inference.us-east-1.amazonaws.com</a> - The Amazon Elastic Inference multi-region endpoint

* <a href="http://api.elastic-inference.cn-north-1.amazonaws.com.cn">http://api.elastic-inference.cn-north-1.amazonaws.com.cn</a> - The Amazon Elastic Inference endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.elastic-inference.cn-north-1.amazonaws.com.cn">https://api.elastic-inference.cn-north-1.amazonaws.com.cn</a> - The Amazon Elastic Inference endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elastic-inference/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elastic-inference-default">Default</h1>

## DescribeAcceleratorOfferings

<a id="opIdDescribeAcceleratorOfferings"></a>

> Code samples

```bash
curl https://elastic-inference.us-east-1.amazonaws.com/describe-accelerator-offerings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "locationType": "region",
    "acceleratorTypes": [
      "string"
    ]
  }'
```

`POST /describe-accelerator-offerings`

<p> Describes the locations in which a given accelerator type or set of types is present in a given region. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>

> Body parameter

```json
{
  "locationType": "region",
  "acceleratorTypes": [
    "string"
  ]
}
```

<h3 id="describeacceleratorofferings-parameters">Parameters</h3>

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
|» locationType|body|string|true| The location type that you want to describe accelerator type offerings for. It can assume the following values: region: will return the accelerator type offering at the regional level. availability-zone: will return the accelerator type offering at the availability zone level. availability-zone-id: will return the accelerator type offering at the availability zone level returning the availability zone id. |
|» acceleratorTypes|body|[[AcceleratorTypeName](#schemaacceleratortypename)]|false| The list of accelerator types to describe. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» locationType|region|
|» locationType|availability-zone|
|» locationType|availability-zone-id|

> Example responses

> 200 Response

```json
{
  "acceleratorTypeOfferings": {}
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

<h3 id="describeacceleratorofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAcceleratorOfferingsResponse](#schemadescribeacceleratorofferingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAcceleratorTypes

<a id="opIdDescribeAcceleratorTypes"></a>

> Code samples

```bash
curl https://elastic-inference.us-east-1.amazonaws.com/describe-accelerator-types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /describe-accelerator-types`

<p> Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>

<h3 id="describeacceleratortypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "acceleratorTypes": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeacceleratortypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAcceleratorTypesResponse](#schemadescribeacceleratortypesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccelerators

<a id="opIdDescribeAccelerators"></a>

> Code samples

```bash
curl https://elastic-inference.us-east-1.amazonaws.com/describe-accelerators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "acceleratorIds": [
      "string"
    ],
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 0,
    "nextToken": "string"
  }'
```

`POST /describe-accelerators`

<p> Describes information over a provided set of accelerators belonging to an account. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>

> Body parameter

```json
{
  "acceleratorIds": [
    "string"
  ],
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 0,
  "nextToken": "string"
}
```

<h3 id="describeaccelerators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» acceleratorIds|body|[[AcceleratorId](#schemaacceleratorid)]|false| The IDs of the accelerators to describe. |
|» filters|body|[[Filter](#schemafilter)]|false| One or more filters. Filter names and values are case-sensitive. Valid filter names are: accelerator-types: can provide a list of accelerator type names to filter for. instance-id: can provide a list of EC2 instance ids to filter for. |
|» maxResults|body|integer|false| The total number of items to return in the command's output. If the total number of items available is more than the value specified, a NextToken is provided in the command's output. To resume pagination, provide the NextToken value in the starting-token argument of a subsequent command. Do not use the NextToken response element directly outside of the AWS CLI. |
|» nextToken|body|string|false| A token to specify where to start paginating. This is the NextToken from a previously truncated response. |

> Example responses

> 200 Response

```json
{
  "acceleratorSet": {},
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

> 482 Response

```json
null
```

<h3 id="describeaccelerators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAcceleratorsResponse](#schemadescribeacceleratorsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://elastic-inference.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

<p> Returns all tags of an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The ARN of the Elastic Inference Accelerator to list the tags for. |
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
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://elastic-inference.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

<p> Adds the specified tags to an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The ARN of the Elastic Inference Accelerator to tag. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true| The tags to add to the Elastic Inference Accelerator. |
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
|200|OK|Success|[TagResourceResult](#schematagresourceresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://elastic-inference.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

<p> Removes the specified tags from an Elastic Inference Accelerator. </p> <p> February 15, 2023: Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The ARN of the Elastic Inference Accelerator to untag. |
|tagKeys|query|[[TagKey](#schematagkey)]|true| The list of tags to remove from the Elastic Inference Accelerator. |
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
|200|OK|Success|[UntagResourceResult](#schemauntagresourceresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeAcceleratorOfferingsResponse">DescribeAcceleratorOfferingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorofferingsresponse"></a>
<a id="schema_DescribeAcceleratorOfferingsResponse"></a>
<a id="tocSdescribeacceleratorofferingsresponse"></a>
<a id="tocsdescribeacceleratorofferingsresponse"></a>

```json
{
  "acceleratorTypeOfferings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorTypeOfferings|object|false|none|none|

<h2 id="tocS_AcceleratorTypeName">AcceleratorTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortypename"></a>
<a id="schema_AcceleratorTypeName"></a>
<a id="tocSacceleratortypename"></a>
<a id="tocsacceleratortypename"></a>

```json
"string"
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_DescribeAcceleratorTypesResponse">DescribeAcceleratorTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratortypesresponse"></a>
<a id="schema_DescribeAcceleratorTypesResponse"></a>
<a id="tocSdescribeacceleratortypesresponse"></a>
<a id="tocsdescribeacceleratortypesresponse"></a>

```json
{
  "acceleratorTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorTypes|object|false|none|none|

<h2 id="tocS_DescribeAcceleratorsResponse">DescribeAcceleratorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorsresponse"></a>
<a id="schema_DescribeAcceleratorsResponse"></a>
<a id="tocSdescribeacceleratorsresponse"></a>
<a id="tocsdescribeacceleratorsresponse"></a>

```json
{
  "acceleratorSet": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorSet|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_AcceleratorId">AcceleratorId</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorid"></a>
<a id="schema_AcceleratorId"></a>
<a id="tocSacceleratorid"></a>
<a id="tocsacceleratorid"></a>

```json
"string"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

 A filter expression for the Elastic Inference Accelerator list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

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

<h2 id="tocS_TagResourceResult">TagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresult"></a>
<a id="schema_TagResourceResult"></a>
<a id="tocStagresourceresult"></a>
<a id="tocstagresourceresult"></a>

```json
{}
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_UntagResourceResult">UntagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresult"></a>
<a id="schema_UntagResourceResult"></a>
<a id="tocSuntagresourceresult"></a>
<a id="tocsuntagresourceresult"></a>

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

<h2 id="tocS_AcceleratorHealthStatus">AcceleratorHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorhealthstatus"></a>
<a id="schema_AcceleratorHealthStatus"></a>
<a id="tocSacceleratorhealthstatus"></a>
<a id="tocsacceleratorhealthstatus"></a>

```json
"string"
```

<h2 id="tocS_AcceleratorIdList">AcceleratorIdList</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratoridlist"></a>
<a id="schema_AcceleratorIdList"></a>
<a id="tocSacceleratoridlist"></a>
<a id="tocsacceleratoridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MemoryInfo">MemoryInfo</h2>
<!-- backwards compatibility -->
<a id="schemamemoryinfo"></a>
<a id="schema_MemoryInfo"></a>
<a id="tocSmemoryinfo"></a>
<a id="tocsmemoryinfo"></a>

```json
{
  "sizeInMiB": {}
}
```

 The memory information of an Elastic Inference Accelerator type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sizeInMiB|object|false|none|none|

<h2 id="tocS_ThroughputInfoList">ThroughputInfoList</h2>
<!-- backwards compatibility -->
<a id="schemathroughputinfolist"></a>
<a id="schema_ThroughputInfoList"></a>
<a id="tocSthroughputinfolist"></a>
<a id="tocsthroughputinfolist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_AcceleratorType">AcceleratorType</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortype"></a>
<a id="schema_AcceleratorType"></a>
<a id="tocSacceleratortype"></a>
<a id="tocsacceleratortype"></a>

```json
{
  "acceleratorTypeName": {},
  "memoryInfo": {
    "sizeInMiB": {}
  },
  "throughputInfo": {}
}
```

 The details of an Elastic Inference Accelerator type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorTypeName|object|false|none|none|
|memoryInfo|object|false|none|none|
|throughputInfo|object|false|none|none|

<h2 id="tocS_AcceleratorTypeList">AcceleratorTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortypelist"></a>
<a id="schema_AcceleratorTypeList"></a>
<a id="tocSacceleratortypelist"></a>
<a id="tocsacceleratortypelist"></a>

```json
[
  {
    "acceleratorTypeName": {},
    "memoryInfo": {
      "sizeInMiB": {}
    },
    "throughputInfo": {}
  }
]
```

<h2 id="tocS_AcceleratorTypeNameList">AcceleratorTypeNameList</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortypenamelist"></a>
<a id="schema_AcceleratorTypeNameList"></a>
<a id="tocSacceleratortypenamelist"></a>
<a id="tocsacceleratortypenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LocationType">LocationType</h2>
<!-- backwards compatibility -->
<a id="schemalocationtype"></a>
<a id="schema_LocationType"></a>
<a id="tocSlocationtype"></a>
<a id="tocslocationtype"></a>

```json
"region"
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
"string"
```

<h2 id="tocS_AcceleratorTypeOffering">AcceleratorTypeOffering</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortypeoffering"></a>
<a id="schema_AcceleratorTypeOffering"></a>
<a id="tocSacceleratortypeoffering"></a>
<a id="tocsacceleratortypeoffering"></a>

```json
{
  "acceleratorType": {},
  "locationType": {},
  "location": {}
}
```

 The offering for an Elastic Inference Accelerator type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorType|object|false|none|none|
|locationType|object|false|none|none|
|location|object|false|none|none|

<h2 id="tocS_AcceleratorTypeOfferingList">AcceleratorTypeOfferingList</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortypeofferinglist"></a>
<a id="schema_AcceleratorTypeOfferingList"></a>
<a id="tocSacceleratortypeofferinglist"></a>
<a id="tocsacceleratortypeofferinglist"></a>

```json
[
  {
    "acceleratorType": {},
    "locationType": {},
    "location": {}
  }
]
```

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

<h2 id="tocS_DescribeAcceleratorOfferingsRequest">DescribeAcceleratorOfferingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorofferingsrequest"></a>
<a id="schema_DescribeAcceleratorOfferingsRequest"></a>
<a id="tocSdescribeacceleratorofferingsrequest"></a>
<a id="tocsdescribeacceleratorofferingsrequest"></a>

```json
{
  "locationType": {},
  "acceleratorTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationType|object|true|none|none|
|acceleratorTypes|object|false|none|none|

<h2 id="tocS_DescribeAcceleratorTypesRequest">DescribeAcceleratorTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratortypesrequest"></a>
<a id="schema_DescribeAcceleratorTypesRequest"></a>
<a id="tocSdescribeacceleratortypesrequest"></a>
<a id="tocsdescribeacceleratortypesrequest"></a>

```json
{}
```

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_DescribeAcceleratorsRequest">DescribeAcceleratorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorsrequest"></a>
<a id="schema_DescribeAcceleratorsRequest"></a>
<a id="tocSdescribeacceleratorsrequest"></a>
<a id="tocsdescribeacceleratorsrequest"></a>

```json
{
  "acceleratorIds": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorIds|object|false|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ElasticInferenceAcceleratorSet">ElasticInferenceAcceleratorSet</h2>
<!-- backwards compatibility -->
<a id="schemaelasticinferenceacceleratorset"></a>
<a id="schema_ElasticInferenceAcceleratorSet"></a>
<a id="tocSelasticinferenceacceleratorset"></a>
<a id="tocselasticinferenceacceleratorset"></a>

```json
[
  {
    "acceleratorHealth": {
      "status": {}
    },
    "acceleratorType": {},
    "acceleratorId": {},
    "availabilityZone": {},
    "attachedResource": {}
  }
]
```

<h2 id="tocS_ElasticInferenceAcceleratorHealth">ElasticInferenceAcceleratorHealth</h2>
<!-- backwards compatibility -->
<a id="schemaelasticinferenceacceleratorhealth"></a>
<a id="schema_ElasticInferenceAcceleratorHealth"></a>
<a id="tocSelasticinferenceacceleratorhealth"></a>
<a id="tocselasticinferenceacceleratorhealth"></a>

```json
{
  "status": {}
}
```

 The health details of an Elastic Inference Accelerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ElasticInferenceAccelerator">ElasticInferenceAccelerator</h2>
<!-- backwards compatibility -->
<a id="schemaelasticinferenceaccelerator"></a>
<a id="schema_ElasticInferenceAccelerator"></a>
<a id="tocSelasticinferenceaccelerator"></a>
<a id="tocselasticinferenceaccelerator"></a>

```json
{
  "acceleratorHealth": {
    "status": {}
  },
  "acceleratorType": {},
  "acceleratorId": {},
  "availabilityZone": {},
  "attachedResource": {}
}
```

 The details of an Elastic Inference Accelerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorHealth|object|false|none|none|
|acceleratorType|object|false|none|none|
|acceleratorId|object|false|none|none|
|availabilityZone|object|false|none|none|
|attachedResource|object|false|none|none|

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_ValueStringList">ValueStringList</h2>
<!-- backwards compatibility -->
<a id="schemavaluestringlist"></a>
<a id="schema_ValueStringList"></a>
<a id="tocSvaluestringlist"></a>
<a id="tocsvaluestringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
0
```

<h2 id="tocS_KeyValuePair">KeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepair"></a>
<a id="schema_KeyValuePair"></a>
<a id="tocSkeyvaluepair"></a>
<a id="tocskeyvaluepair"></a>

```json
{
  "key": {},
  "value": {}
}
```

 A throughput entry for an Elastic Inference Accelerator type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn-1"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn-1"></a>
<a id="tocsresourcearn-1"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
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

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
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
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```
