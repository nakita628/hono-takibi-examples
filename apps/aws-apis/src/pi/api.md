<h1 id="aws-performance-insights">AWS Performance Insights v2018-02-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon RDS Performance Insights</fullname> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors.</p> <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.</p> <p>DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.</p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon DocumentDB clusters, go to the <i> <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html"> Amazon DocumentDB Developer Guide</a> </i>.</p> </li> </ul>

Base URLs:

* <a href="http://pi.us-east-1.amazonaws.com">http://pi.us-east-1.amazonaws.com</a> - The AWS PI multi-region endpoint

* <a href="https://pi.us-east-1.amazonaws.com">https://pi.us-east-1.amazonaws.com</a> - The AWS PI multi-region endpoint

* <a href="http://pi.cn-north-1.amazonaws.com.cn">http://pi.cn-north-1.amazonaws.com.cn</a> - The AWS PI endpoint for China (Beijing) and China (Ningxia)

* <a href="https://pi.cn-north-1.amazonaws.com.cn">https://pi.cn-north-1.amazonaws.com.cn</a> - The AWS PI endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/pi/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-performance-insights-default">Default</h1>

## DescribeDimensionKeys

<a id="opIdDescribeDimensionKeys"></a>

> Code samples

```bash
curl 'https://pi.us-east-1.amazonaws.com/#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PerformanceInsightsv20180227.DescribeDimensionKeys' \
  -d '{
    "ServiceType": {},
    "Identifier": {},
    "StartTime": {},
    "EndTime": {},
    "Metric": {},
    "PeriodInSeconds": {},
    "GroupBy": {
      "Group": {},
      "Dimensions": {},
      "Limit": {}
    },
    "AdditionalMetrics": {},
    "PartitionBy": {
      "Group": {},
      "Dimensions": {},
      "Limit": {}
    },
    "Filter": {
      "property1": "string",
      "property2": "string"
    },
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys`

<p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

> Body parameter

```json
{
  "ServiceType": {},
  "Identifier": {},
  "StartTime": {},
  "EndTime": {},
  "Metric": {},
  "PeriodInSeconds": {},
  "GroupBy": {
    "Group": {},
    "Dimensions": {},
    "Limit": {}
  },
  "AdditionalMetrics": {},
  "PartitionBy": {
    "Group": {},
    "Dimensions": {},
    "Limit": {}
  },
  "Filter": {
    "property1": "string",
    "property2": "string"
  },
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describedimensionkeys-parameters">Parameters</h3>

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
|body|body|[DescribeDimensionKeysRequest](#schemadescribedimensionkeysrequest)|true|none|
|» ServiceType|body|object|true|none|
|» Identifier|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» Metric|body|object|true|none|
|» PeriodInSeconds|body|object|false|none|
|» GroupBy|body|object|true|none|
|» » Group|body|object|true|none|
|» » Dimensions|body|object|false|none|
|» » Limit|body|object|false|none|
|» AdditionalMetrics|body|object|false|none|
|» PartitionBy|body|object|false|none|
|» » Group|body|object|true|none|
|» » Dimensions|body|object|false|none|
|» » Limit|body|object|false|none|
|» Filter|body|object|false|none|
|» » **additionalProperties**|body|[RequestString](#schemarequeststring)|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PerformanceInsightsv20180227.DescribeDimensionKeys|

> Example responses

> 200 Response

```json
{
  "AlignedStartTime": {},
  "AlignedEndTime": {},
  "PartitionKeys": {},
  "Keys": {},
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

<h3 id="describedimensionkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDimensionKeysResponse](#schemadescribedimensionkeysresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDimensionKeyDetails

<a id="opIdGetDimensionKeyDetails"></a>

> Code samples

```bash
curl 'https://pi.us-east-1.amazonaws.com/#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PerformanceInsightsv20180227.GetDimensionKeyDetails' \
  -d '{
    "ServiceType": {},
    "Identifier": {},
    "Group": {},
    "GroupIdentifier": {},
    "RequestedDimensions": {}
  }'
```

`POST /#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails`

Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.

> Body parameter

```json
{
  "ServiceType": {},
  "Identifier": {},
  "Group": {},
  "GroupIdentifier": {},
  "RequestedDimensions": {}
}
```

<h3 id="getdimensionkeydetails-parameters">Parameters</h3>

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
|body|body|[GetDimensionKeyDetailsRequest](#schemagetdimensionkeydetailsrequest)|true|none|
|» ServiceType|body|object|true|none|
|» Identifier|body|object|true|none|
|» Group|body|object|true|none|
|» GroupIdentifier|body|object|true|none|
|» RequestedDimensions|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PerformanceInsightsv20180227.GetDimensionKeyDetails|

> Example responses

> 200 Response

```json
{
  "Dimensions": {}
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

<h3 id="getdimensionkeydetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDimensionKeyDetailsResponse](#schemagetdimensionkeydetailsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceMetadata

<a id="opIdGetResourceMetadata"></a>

> Code samples

```bash
curl 'https://pi.us-east-1.amazonaws.com/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PerformanceInsightsv20180227.GetResourceMetadata' \
  -d '{
    "ServiceType": {},
    "Identifier": {}
  }'
```

`POST /#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata`

Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 

> Body parameter

```json
{
  "ServiceType": {},
  "Identifier": {}
}
```

<h3 id="getresourcemetadata-parameters">Parameters</h3>

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
|body|body|[GetResourceMetadataRequest](#schemagetresourcemetadatarequest)|true|none|
|» ServiceType|body|object|true|none|
|» Identifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PerformanceInsightsv20180227.GetResourceMetadata|

> Example responses

> 200 Response

```json
{
  "Identifier": {},
  "Features": {
    "property1": {
      "Status": {}
    },
    "property2": {
      "Status": {}
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

<h3 id="getresourcemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceMetadataResponse](#schemagetresourcemetadataresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceMetrics

<a id="opIdGetResourceMetrics"></a>

> Code samples

```bash
curl 'https://pi.us-east-1.amazonaws.com/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PerformanceInsightsv20180227.GetResourceMetrics' \
  -d '{
    "ServiceType": {},
    "Identifier": {},
    "MetricQueries": {},
    "StartTime": {},
    "EndTime": {},
    "PeriodInSeconds": {},
    "MaxResults": {},
    "NextToken": {},
    "PeriodAlignment": {}
  }'
```

`POST /#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics`

<p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

> Body parameter

```json
{
  "ServiceType": {},
  "Identifier": {},
  "MetricQueries": {},
  "StartTime": {},
  "EndTime": {},
  "PeriodInSeconds": {},
  "MaxResults": {},
  "NextToken": {},
  "PeriodAlignment": {}
}
```

<h3 id="getresourcemetrics-parameters">Parameters</h3>

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
|body|body|[GetResourceMetricsRequest](#schemagetresourcemetricsrequest)|true|none|
|» ServiceType|body|object|true|none|
|» Identifier|body|object|true|none|
|» MetricQueries|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» PeriodInSeconds|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» PeriodAlignment|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PerformanceInsightsv20180227.GetResourceMetrics|

> Example responses

> 200 Response

```json
{
  "AlignedStartTime": {},
  "AlignedEndTime": {},
  "Identifier": {},
  "MetricList": {},
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

<h3 id="getresourcemetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceMetricsResponse](#schemagetresourcemetricsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAvailableResourceDimensions

<a id="opIdListAvailableResourceDimensions"></a>

> Code samples

```bash
curl 'https://pi.us-east-1.amazonaws.com/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PerformanceInsightsv20180227.ListAvailableResourceDimensions' \
  -d '{
    "ServiceType": {},
    "Identifier": {},
    "Metrics": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions`

Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.

> Body parameter

```json
{
  "ServiceType": {},
  "Identifier": {},
  "Metrics": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listavailableresourcedimensions-parameters">Parameters</h3>

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
|body|body|[ListAvailableResourceDimensionsRequest](#schemalistavailableresourcedimensionsrequest)|true|none|
|» ServiceType|body|object|true|none|
|» Identifier|body|object|true|none|
|» Metrics|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PerformanceInsightsv20180227.ListAvailableResourceDimensions|

> Example responses

> 200 Response

```json
{
  "MetricDimensions": {},
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

<h3 id="listavailableresourcedimensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableResourceDimensionsResponse](#schemalistavailableresourcedimensionsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAvailableResourceMetrics

<a id="opIdListAvailableResourceMetrics"></a>

> Code samples

```bash
curl 'https://pi.us-east-1.amazonaws.com/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PerformanceInsightsv20180227.ListAvailableResourceMetrics' \
  -d '{
    "ServiceType": {},
    "Identifier": {},
    "MetricTypes": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics`

Retrieve metrics of the specified types that can be queried for a specified DB instance. 

> Body parameter

```json
{
  "ServiceType": {},
  "Identifier": {},
  "MetricTypes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listavailableresourcemetrics-parameters">Parameters</h3>

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
|body|body|[ListAvailableResourceMetricsRequest](#schemalistavailableresourcemetricsrequest)|true|none|
|» ServiceType|body|object|true|none|
|» Identifier|body|object|true|none|
|» MetricTypes|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PerformanceInsightsv20180227.ListAvailableResourceMetrics|

> Example responses

> 200 Response

```json
{
  "Metrics": {},
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

<h3 id="listavailableresourcemetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableResourceMetricsResponse](#schemalistavailableresourcemetricsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeDimensionKeysResponse">DescribeDimensionKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedimensionkeysresponse"></a>
<a id="schema_DescribeDimensionKeysResponse"></a>
<a id="tocSdescribedimensionkeysresponse"></a>
<a id="tocsdescribedimensionkeysresponse"></a>

```json
{
  "AlignedStartTime": {},
  "AlignedEndTime": {},
  "PartitionKeys": {},
  "Keys": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlignedStartTime|object|false|none|none|
|AlignedEndTime|object|false|none|none|
|PartitionKeys|object|false|none|none|
|Keys|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDimensionKeysRequest">DescribeDimensionKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedimensionkeysrequest"></a>
<a id="schema_DescribeDimensionKeysRequest"></a>
<a id="tocSdescribedimensionkeysrequest"></a>
<a id="tocsdescribedimensionkeysrequest"></a>

```json
{
  "ServiceType": {},
  "Identifier": {},
  "StartTime": {},
  "EndTime": {},
  "Metric": {},
  "PeriodInSeconds": {},
  "GroupBy": {
    "Group": {},
    "Dimensions": {},
    "Limit": {}
  },
  "AdditionalMetrics": {},
  "PartitionBy": {
    "Group": {},
    "Dimensions": {},
    "Limit": {}
  },
  "Filter": {
    "property1": "string",
    "property2": "string"
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceType|object|true|none|none|
|Identifier|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|Metric|object|true|none|none|
|PeriodInSeconds|object|false|none|none|
|GroupBy|object|true|none|none|
|AdditionalMetrics|object|false|none|none|
|PartitionBy|object|false|none|none|
|Filter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidArgumentException">InvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargumentexception"></a>
<a id="schema_InvalidArgumentException"></a>
<a id="tocSinvalidargumentexception"></a>
<a id="tocsinvalidargumentexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceError">InternalServiceError</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerror"></a>
<a id="schema_InternalServiceError"></a>
<a id="tocSinternalserviceerror"></a>
<a id="tocsinternalserviceerror"></a>

```json
null
```

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_GetDimensionKeyDetailsResponse">GetDimensionKeyDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdimensionkeydetailsresponse"></a>
<a id="schema_GetDimensionKeyDetailsResponse"></a>
<a id="tocSgetdimensionkeydetailsresponse"></a>
<a id="tocsgetdimensionkeydetailsresponse"></a>

```json
{
  "Dimensions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|

<h2 id="tocS_GetDimensionKeyDetailsRequest">GetDimensionKeyDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdimensionkeydetailsrequest"></a>
<a id="schema_GetDimensionKeyDetailsRequest"></a>
<a id="tocSgetdimensionkeydetailsrequest"></a>
<a id="tocsgetdimensionkeydetailsrequest"></a>

```json
{
  "ServiceType": {},
  "Identifier": {},
  "Group": {},
  "GroupIdentifier": {},
  "RequestedDimensions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceType|object|true|none|none|
|Identifier|object|true|none|none|
|Group|object|true|none|none|
|GroupIdentifier|object|true|none|none|
|RequestedDimensions|object|false|none|none|

<h2 id="tocS_GetResourceMetadataResponse">GetResourceMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcemetadataresponse"></a>
<a id="schema_GetResourceMetadataResponse"></a>
<a id="tocSgetresourcemetadataresponse"></a>
<a id="tocsgetresourcemetadataresponse"></a>

```json
{
  "Identifier": {},
  "Features": {
    "property1": {
      "Status": {}
    },
    "property2": {
      "Status": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_GetResourceMetadataRequest">GetResourceMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcemetadatarequest"></a>
<a id="schema_GetResourceMetadataRequest"></a>
<a id="tocSgetresourcemetadatarequest"></a>
<a id="tocsgetresourcemetadatarequest"></a>

```json
{
  "ServiceType": {},
  "Identifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceType|object|true|none|none|
|Identifier|object|true|none|none|

<h2 id="tocS_GetResourceMetricsResponse">GetResourceMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcemetricsresponse"></a>
<a id="schema_GetResourceMetricsResponse"></a>
<a id="tocSgetresourcemetricsresponse"></a>
<a id="tocsgetresourcemetricsresponse"></a>

```json
{
  "AlignedStartTime": {},
  "AlignedEndTime": {},
  "Identifier": {},
  "MetricList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlignedStartTime|object|false|none|none|
|AlignedEndTime|object|false|none|none|
|Identifier|object|false|none|none|
|MetricList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetResourceMetricsRequest">GetResourceMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcemetricsrequest"></a>
<a id="schema_GetResourceMetricsRequest"></a>
<a id="tocSgetresourcemetricsrequest"></a>
<a id="tocsgetresourcemetricsrequest"></a>

```json
{
  "ServiceType": {},
  "Identifier": {},
  "MetricQueries": {},
  "StartTime": {},
  "EndTime": {},
  "PeriodInSeconds": {},
  "MaxResults": {},
  "NextToken": {},
  "PeriodAlignment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceType|object|true|none|none|
|Identifier|object|true|none|none|
|MetricQueries|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|PeriodInSeconds|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|PeriodAlignment|object|false|none|none|

<h2 id="tocS_ListAvailableResourceDimensionsResponse">ListAvailableResourceDimensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailableresourcedimensionsresponse"></a>
<a id="schema_ListAvailableResourceDimensionsResponse"></a>
<a id="tocSlistavailableresourcedimensionsresponse"></a>
<a id="tocslistavailableresourcedimensionsresponse"></a>

```json
{
  "MetricDimensions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDimensions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAvailableResourceDimensionsRequest">ListAvailableResourceDimensionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistavailableresourcedimensionsrequest"></a>
<a id="schema_ListAvailableResourceDimensionsRequest"></a>
<a id="tocSlistavailableresourcedimensionsrequest"></a>
<a id="tocslistavailableresourcedimensionsrequest"></a>

```json
{
  "ServiceType": {},
  "Identifier": {},
  "Metrics": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceType|object|true|none|none|
|Identifier|object|true|none|none|
|Metrics|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAvailableResourceMetricsResponse">ListAvailableResourceMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailableresourcemetricsresponse"></a>
<a id="schema_ListAvailableResourceMetricsResponse"></a>
<a id="tocSlistavailableresourcemetricsresponse"></a>
<a id="tocslistavailableresourcemetricsresponse"></a>

```json
{
  "Metrics": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metrics|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAvailableResourceMetricsRequest">ListAvailableResourceMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistavailableresourcemetricsrequest"></a>
<a id="schema_ListAvailableResourceMetricsRequest"></a>
<a id="tocSlistavailableresourcemetricsrequest"></a>
<a id="tocslistavailableresourcemetricsrequest"></a>

```json
{
  "ServiceType": {},
  "Identifier": {},
  "MetricTypes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceType|object|true|none|none|
|Identifier|object|true|none|none|
|MetricTypes|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_RequestString">RequestString</h2>
<!-- backwards compatibility -->
<a id="schemarequeststring"></a>
<a id="schema_RequestString"></a>
<a id="tocSrequeststring"></a>
<a id="tocsrequeststring"></a>

```json
"string"
```

<h2 id="tocS_AdditionalMetricsList">AdditionalMetricsList</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalmetricslist"></a>
<a id="schema_AdditionalMetricsList"></a>
<a id="tocSadditionalmetricslist"></a>
<a id="tocsadditionalmetricslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_AdditionalMetricsMap">AdditionalMetricsMap</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalmetricsmap"></a>
<a id="schema_AdditionalMetricsMap"></a>
<a id="tocSadditionalmetricsmap"></a>
<a id="tocsadditionalmetricsmap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Double](#schemadouble)|false|none|none|

<h2 id="tocS_ISOTimestamp">ISOTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaisotimestamp"></a>
<a id="schema_ISOTimestamp"></a>
<a id="tocSisotimestamp"></a>
<a id="tocsisotimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DataPoint">DataPoint</h2>
<!-- backwards compatibility -->
<a id="schemadatapoint"></a>
<a id="schema_DataPoint"></a>
<a id="tocSdatapoint"></a>
<a id="tocsdatapoint"></a>

```json
{
  "Timestamp": {},
  "Value": {}
}
```

A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_DataPointsList">DataPointsList</h2>
<!-- backwards compatibility -->
<a id="schemadatapointslist"></a>
<a id="schema_DataPointsList"></a>
<a id="tocSdatapointslist"></a>
<a id="tocsdatapointslist"></a>

```json
[
  {
    "Timestamp": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ServiceType">ServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetype"></a>
<a id="schema_ServiceType"></a>
<a id="tocSservicetype"></a>
<a id="tocsservicetype"></a>

```json
"RDS"
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

<h2 id="tocS_DimensionGroup">DimensionGroup</h2>
<!-- backwards compatibility -->
<a id="schemadimensiongroup"></a>
<a id="schema_DimensionGroup"></a>
<a id="tocSdimensiongroup"></a>
<a id="tocsdimensiongroup"></a>

```json
{
  "Group": {},
  "Dimensions": {},
  "Limit": {}
}
```

<p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions:</p> <ul> <li> <p> <code>db.sql.id</code> - The hash of a running SQL statement, generated by Performance Insights.</p> </li> <li> <p> <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with <code>pi-</code>.</p> </li> <li> <p> <code>db.sql.statement</code> - The full text of the SQL statement that is running, for example, <code>SELECT * FROM employees</code>.</p> </li> <li> <p> <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights.</p> </li> </ul> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|true|none|none|
|Dimensions|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_MetricQueryFilterMap">MetricQueryFilterMap</h2>
<!-- backwards compatibility -->
<a id="schemametricqueryfiltermap"></a>
<a id="schema_MetricQueryFilterMap"></a>
<a id="tocSmetricqueryfiltermap"></a>
<a id="tocsmetricqueryfiltermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RequestString](#schemarequeststring)|false|none|none|

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

<h2 id="tocS_ResponsePartitionKeyList">ResponsePartitionKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepartitionkeylist"></a>
<a id="schema_ResponsePartitionKeyList"></a>
<a id="tocSresponsepartitionkeylist"></a>
<a id="tocsresponsepartitionkeylist"></a>

```json
[
  {
    "Dimensions": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_DimensionKeyDescriptionList">DimensionKeyDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionkeydescriptionlist"></a>
<a id="schema_DimensionKeyDescriptionList"></a>
<a id="tocSdimensionkeydescriptionlist"></a>
<a id="tocsdimensionkeydescriptionlist"></a>

```json
[
  {
    "Dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "Total": {},
    "AdditionalMetrics": {
      "property1": 0,
      "property2": 0
    },
    "Partitions": {}
  }
]
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_DetailStatus">DetailStatus</h2>
<!-- backwards compatibility -->
<a id="schemadetailstatus"></a>
<a id="schema_DetailStatus"></a>
<a id="tocSdetailstatus"></a>
<a id="tocsdetailstatus"></a>

```json
"AVAILABLE"
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

<h2 id="tocS_DimensionDetail">DimensionDetail</h2>
<!-- backwards compatibility -->
<a id="schemadimensiondetail"></a>
<a id="schema_DimensionDetail"></a>
<a id="tocSdimensiondetail"></a>
<a id="tocsdimensiondetail"></a>

```json
{
  "Identifier": {}
}
```

The information about a dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|false|none|none|

<h2 id="tocS_DimensionDetailList">DimensionDetailList</h2>
<!-- backwards compatibility -->
<a id="schemadimensiondetaillist"></a>
<a id="schema_DimensionDetailList"></a>
<a id="tocSdimensiondetaillist"></a>
<a id="tocsdimensiondetaillist"></a>

```json
[
  {
    "Identifier": {}
  }
]
```

<h2 id="tocS_RequestStringList">RequestStringList</h2>
<!-- backwards compatibility -->
<a id="schemarequeststringlist"></a>
<a id="schema_RequestStringList"></a>
<a id="tocSrequeststringlist"></a>
<a id="tocsrequeststringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
1
```

<h2 id="tocS_DimensionGroupDetail">DimensionGroupDetail</h2>
<!-- backwards compatibility -->
<a id="schemadimensiongroupdetail"></a>
<a id="schema_DimensionGroupDetail"></a>
<a id="tocSdimensiongroupdetail"></a>
<a id="tocsdimensiongroupdetail"></a>

```json
{
  "Group": {},
  "Dimensions": {}
}
```

Information about dimensions within a dimension group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|
|Dimensions|object|false|none|none|

<h2 id="tocS_DimensionGroupDetailList">DimensionGroupDetailList</h2>
<!-- backwards compatibility -->
<a id="schemadimensiongroupdetaillist"></a>
<a id="schema_DimensionGroupDetailList"></a>
<a id="tocSdimensiongroupdetaillist"></a>
<a id="tocsdimensiongroupdetaillist"></a>

```json
[
  {
    "Group": {},
    "Dimensions": {}
  }
]
```

<h2 id="tocS_DimensionMap">DimensionMap</h2>
<!-- backwards compatibility -->
<a id="schemadimensionmap"></a>
<a id="schema_DimensionMap"></a>
<a id="tocSdimensionmap"></a>
<a id="tocsdimensionmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RequestString](#schemarequeststring)|false|none|none|

<h2 id="tocS_MetricValuesList">MetricValuesList</h2>
<!-- backwards compatibility -->
<a id="schemametricvalueslist"></a>
<a id="schema_MetricValuesList"></a>
<a id="tocSmetricvalueslist"></a>
<a id="tocsmetricvalueslist"></a>

```json
[
  0
]
```

<h2 id="tocS_DimensionKeyDescription">DimensionKeyDescription</h2>
<!-- backwards compatibility -->
<a id="schemadimensionkeydescription"></a>
<a id="schema_DimensionKeyDescription"></a>
<a id="tocSdimensionkeydescription"></a>
<a id="tocsdimensionkeydescription"></a>

```json
{
  "Dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "Total": {},
  "AdditionalMetrics": {
    "property1": 0,
    "property2": 0
  },
  "Partitions": {}
}
```

An object that includes the requested dimension key values and aggregated metric values within a dimension group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|
|Total|object|false|none|none|
|AdditionalMetrics|object|false|none|none|
|Partitions|object|false|none|none|

<h2 id="tocS_DimensionKeyDetail">DimensionKeyDetail</h2>
<!-- backwards compatibility -->
<a id="schemadimensionkeydetail"></a>
<a id="schema_DimensionKeyDetail"></a>
<a id="tocSdimensionkeydetail"></a>
<a id="tocsdimensionkeydetail"></a>

```json
{
  "Value": {},
  "Dimension": {},
  "Status": {}
}
```

An object that describes the details for a specified dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Dimension|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DimensionKeyDetailList">DimensionKeyDetailList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionkeydetaillist"></a>
<a id="schema_DimensionKeyDetailList"></a>
<a id="tocSdimensionkeydetaillist"></a>
<a id="tocsdimensionkeydetaillist"></a>

```json
[
  {
    "Value": {},
    "Dimension": {},
    "Status": {}
  }
]
```

<h2 id="tocS_DimensionsMetricList">DimensionsMetricList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionsmetriclist"></a>
<a id="schema_DimensionsMetricList"></a>
<a id="tocSdimensionsmetriclist"></a>
<a id="tocsdimensionsmetriclist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FeatureStatus">FeatureStatus</h2>
<!-- backwards compatibility -->
<a id="schemafeaturestatus"></a>
<a id="schema_FeatureStatus"></a>
<a id="tocSfeaturestatus"></a>
<a id="tocsfeaturestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_FeatureMetadata">FeatureMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafeaturemetadata"></a>
<a id="schema_FeatureMetadata"></a>
<a id="tocSfeaturemetadata"></a>
<a id="tocsfeaturemetadata"></a>

```json
{
  "Status": {}
}
```

The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_FeatureMetadataMap">FeatureMetadataMap</h2>
<!-- backwards compatibility -->
<a id="schemafeaturemetadatamap"></a>
<a id="schema_FeatureMetadataMap"></a>
<a id="tocSfeaturemetadatamap"></a>
<a id="tocsfeaturemetadatamap"></a>

```json
{
  "property1": {
    "Status": {}
  },
  "property2": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FeatureMetadata](#schemafeaturemetadata)|false|none|The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.|

<h2 id="tocS_IdentifierString">IdentifierString</h2>
<!-- backwards compatibility -->
<a id="schemaidentifierstring"></a>
<a id="schema_IdentifierString"></a>
<a id="tocSidentifierstring"></a>
<a id="tocsidentifierstring"></a>

```json
"string"
```

<h2 id="tocS_RequestedDimensionList">RequestedDimensionList</h2>
<!-- backwards compatibility -->
<a id="schemarequesteddimensionlist"></a>
<a id="schema_RequestedDimensionList"></a>
<a id="tocSrequesteddimensionlist"></a>
<a id="tocsrequesteddimensionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricQueryList">MetricQueryList</h2>
<!-- backwards compatibility -->
<a id="schemametricquerylist"></a>
<a id="schema_MetricQueryList"></a>
<a id="tocSmetricquerylist"></a>
<a id="tocsmetricquerylist"></a>

```json
[
  {
    "Metric": {},
    "GroupBy": {
      "Group": {},
      "Dimensions": {},
      "Limit": {}
    },
    "Filter": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_PeriodAlignment">PeriodAlignment</h2>
<!-- backwards compatibility -->
<a id="schemaperiodalignment"></a>
<a id="schema_PeriodAlignment"></a>
<a id="tocSperiodalignment"></a>
<a id="tocsperiodalignment"></a>

```json
"END_TIME"
```

<h2 id="tocS_MetricKeyDataPointsList">MetricKeyDataPointsList</h2>
<!-- backwards compatibility -->
<a id="schemametrickeydatapointslist"></a>
<a id="schema_MetricKeyDataPointsList"></a>
<a id="tocSmetrickeydatapointslist"></a>
<a id="tocsmetrickeydatapointslist"></a>

```json
[
  {
    "Key": {
      "Metric": {},
      "Dimensions": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DataPoints": {}
  }
]
```

<h2 id="tocS_MetricDimensionsList">MetricDimensionsList</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionslist"></a>
<a id="schema_MetricDimensionsList"></a>
<a id="tocSmetricdimensionslist"></a>
<a id="tocsmetricdimensionslist"></a>

```json
[
  {
    "Metric": {},
    "Groups": {}
  }
]
```

<h2 id="tocS_MetricTypeList">MetricTypeList</h2>
<!-- backwards compatibility -->
<a id="schemametrictypelist"></a>
<a id="schema_MetricTypeList"></a>
<a id="tocSmetrictypelist"></a>
<a id="tocsmetrictypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResponseResourceMetricList">ResponseResourceMetricList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseresourcemetriclist"></a>
<a id="schema_ResponseResourceMetricList"></a>
<a id="tocSresponseresourcemetriclist"></a>
<a id="tocsresponseresourcemetriclist"></a>

```json
[
  {
    "Metric": {},
    "Description": {},
    "Unit": {}
  }
]
```

<h2 id="tocS_MetricDimensionGroups">MetricDimensionGroups</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensiongroups"></a>
<a id="schema_MetricDimensionGroups"></a>
<a id="tocSmetricdimensiongroups"></a>
<a id="tocsmetricdimensiongroups"></a>

```json
{
  "Metric": {},
  "Groups": {}
}
```

The available dimension information for a metric type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|
|Groups|object|false|none|none|

<h2 id="tocS_ResponseResourceMetricKey">ResponseResourceMetricKey</h2>
<!-- backwards compatibility -->
<a id="schemaresponseresourcemetrickey"></a>
<a id="schema_ResponseResourceMetricKey"></a>
<a id="tocSresponseresourcemetrickey"></a>
<a id="tocsresponseresourcemetrickey"></a>

```json
{
  "Metric": {},
  "Dimensions": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object describing a Performance Insights metric and one or more dimensions for that metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|true|none|none|
|Dimensions|object|false|none|none|

<h2 id="tocS_MetricKeyDataPoints">MetricKeyDataPoints</h2>
<!-- backwards compatibility -->
<a id="schemametrickeydatapoints"></a>
<a id="schema_MetricKeyDataPoints"></a>
<a id="tocSmetrickeydatapoints"></a>
<a id="tocsmetrickeydatapoints"></a>

```json
{
  "Key": {
    "Metric": {},
    "Dimensions": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DataPoints": {}
}
```

A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|DataPoints|object|false|none|none|

<h2 id="tocS_MetricQuery">MetricQuery</h2>
<!-- backwards compatibility -->
<a id="schemametricquery"></a>
<a id="schema_MetricQuery"></a>
<a id="tocSmetricquery"></a>
<a id="tocsmetricquery"></a>

```json
{
  "Metric": {},
  "GroupBy": {
    "Group": {},
    "Dimensions": {},
    "Limit": {}
  },
  "Filter": {
    "property1": "string",
    "property2": "string"
  }
}
```

A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can request that the data points be aggregated by dimension group (<code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|true|none|none|
|GroupBy|object|false|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_ResponsePartitionKey">ResponsePartitionKey</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepartitionkey"></a>
<a id="schema_ResponsePartitionKey"></a>
<a id="tocSresponsepartitionkey"></a>
<a id="tocsresponsepartitionkey"></a>

```json
{
  "Dimensions": {
    "property1": "string",
    "property2": "string"
  }
}
```

If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|true|none|none|

<h2 id="tocS_ResponseResourceMetric">ResponseResourceMetric</h2>
<!-- backwards compatibility -->
<a id="schemaresponseresourcemetric"></a>
<a id="schema_ResponseResourceMetric"></a>
<a id="tocSresponseresourcemetric"></a>
<a id="tocsresponseresourcemetric"></a>

```json
{
  "Metric": {},
  "Description": {},
  "Unit": {}
}
```

An object that contains the full name, description, and unit of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|
|Description|object|false|none|none|
|Unit|object|false|none|none|
