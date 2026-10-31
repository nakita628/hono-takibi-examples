<h1 id="aws-compute-optimizer">AWS Compute Optimizer v2019-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Compute Optimizer is a service that analyzes the configuration and utilization metrics of your Amazon Web Services compute resources, such as Amazon EC2 instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, in addition to projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.

Base URLs:

* <a href="http://compute-optimizer.us-east-1.amazonaws.com">http://compute-optimizer.us-east-1.amazonaws.com</a> - The AWS Compute Optimizer multi-region endpoint

* <a href="https://compute-optimizer.us-east-1.amazonaws.com">https://compute-optimizer.us-east-1.amazonaws.com</a> - The AWS Compute Optimizer multi-region endpoint

* <a href="http://compute-optimizer.cn-north-1.amazonaws.com.cn">http://compute-optimizer.cn-north-1.amazonaws.com.cn</a> - The AWS Compute Optimizer endpoint for China (Beijing) and China (Ningxia)

* <a href="https://compute-optimizer.cn-north-1.amazonaws.com.cn">https://compute-optimizer.cn-north-1.amazonaws.com.cn</a> - The AWS Compute Optimizer endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/compute-optimizer/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-compute-optimizer-default">Default</h1>

## DeleteRecommendationPreferences

<a id="opIdDeleteRecommendationPreferences"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.DeleteRecommendationPreferences' \
  -d '{
    "resourceType": {},
    "scope": {
      "name": {},
      "value": {}
    },
    "recommendationPreferenceNames": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences`

<p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "resourceType": {},
  "scope": {
    "name": {},
    "value": {}
  },
  "recommendationPreferenceNames": {}
}
```

<h3 id="deleterecommendationpreferences-parameters">Parameters</h3>

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
|body|body|[DeleteRecommendationPreferencesRequest](#schemadeleterecommendationpreferencesrequest)|true|none|
|» resourceType|body|object|true|none|
|» scope|body|object|false|none|
|» » name|body|object|false|none|
|» » value|body|object|false|none|
|» recommendationPreferenceNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.DeleteRecommendationPreferences|

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deleterecommendationpreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRecommendationPreferencesResponse](#schemadeleterecommendationpreferencesresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecommendationExportJobs

<a id="opIdDescribeRecommendationExportJobs"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.DescribeRecommendationExportJobs' \
  -d '{
    "jobIds": {},
    "filters": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs`

<p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>

> Body parameter

```json
{
  "jobIds": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describerecommendationexportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRecommendationExportJobsRequest](#schemadescriberecommendationexportjobsrequest)|true|none|
|» jobIds|body|object|false|none|
|» filters|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.DescribeRecommendationExportJobs|

> Example responses

> 200 Response

```json
{
  "recommendationExportJobs": {},
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="describerecommendationexportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecommendationExportJobsResponse](#schemadescriberecommendationexportjobsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportAutoScalingGroupRecommendations

<a id="opIdExportAutoScalingGroupRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.ExportAutoScalingGroupRecommendations' \
  -d '{
    "accountIds": {},
    "filters": {},
    "fieldsToExport": {},
    "s3DestinationConfig": {
      "bucket": {},
      "keyPrefix": {}
    },
    "fileFormat": {},
    "includeMemberAccounts": {},
    "recommendationPreferences": {
      "cpuVendorArchitectures": {}
    }
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations`

<p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>

> Body parameter

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

<h3 id="exportautoscalinggrouprecommendations-parameters">Parameters</h3>

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
|body|body|[ExportAutoScalingGroupRecommendationsRequest](#schemaexportautoscalinggrouprecommendationsrequest)|true|none|
|» accountIds|body|object|false|none|
|» filters|body|object|false|none|
|» fieldsToExport|body|object|false|none|
|» s3DestinationConfig|body|object|true|none|
|» » bucket|body|object|false|none|
|» » keyPrefix|body|object|false|none|
|» fileFormat|body|object|false|none|
|» includeMemberAccounts|body|object|false|none|
|» recommendationPreferences|body|object|false|none|
|» » cpuVendorArchitectures|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.ExportAutoScalingGroupRecommendations|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="exportautoscalinggrouprecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportAutoScalingGroupRecommendationsResponse](#schemaexportautoscalinggrouprecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportEBSVolumeRecommendations

<a id="opIdExportEBSVolumeRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.ExportEBSVolumeRecommendations' \
  -d '{
    "accountIds": {},
    "filters": {},
    "fieldsToExport": {},
    "s3DestinationConfig": {
      "bucket": {},
      "keyPrefix": {}
    },
    "fileFormat": {},
    "includeMemberAccounts": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations`

<p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>

> Body parameter

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {}
}
```

<h3 id="exportebsvolumerecommendations-parameters">Parameters</h3>

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
|body|body|[ExportEBSVolumeRecommendationsRequest](#schemaexportebsvolumerecommendationsrequest)|true|none|
|» accountIds|body|object|false|none|
|» filters|body|object|false|none|
|» fieldsToExport|body|object|false|none|
|» s3DestinationConfig|body|[S3DestinationConfig](#schemas3destinationconfig)|true|<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>|
|» fileFormat|body|object|false|none|
|» includeMemberAccounts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.ExportEBSVolumeRecommendations|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="exportebsvolumerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportEBSVolumeRecommendationsResponse](#schemaexportebsvolumerecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportEC2InstanceRecommendations

<a id="opIdExportEC2InstanceRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.ExportEC2InstanceRecommendations' \
  -d '{
    "accountIds": {},
    "filters": {},
    "fieldsToExport": {},
    "s3DestinationConfig": {
      "bucket": {},
      "keyPrefix": {}
    },
    "fileFormat": {},
    "includeMemberAccounts": {},
    "recommendationPreferences": {
      "cpuVendorArchitectures": {}
    }
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations`

<p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>

> Body parameter

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

<h3 id="exportec2instancerecommendations-parameters">Parameters</h3>

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
|body|body|[ExportEC2InstanceRecommendationsRequest](#schemaexportec2instancerecommendationsrequest)|true|none|
|» accountIds|body|object|false|none|
|» filters|body|object|false|none|
|» fieldsToExport|body|object|false|none|
|» s3DestinationConfig|body|object|true|none|
|» » bucket|body|object|false|none|
|» » keyPrefix|body|object|false|none|
|» fileFormat|body|object|false|none|
|» includeMemberAccounts|body|object|false|none|
|» recommendationPreferences|body|object|false|none|
|» » cpuVendorArchitectures|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.ExportEC2InstanceRecommendations|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="exportec2instancerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportEC2InstanceRecommendationsResponse](#schemaexportec2instancerecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportECSServiceRecommendations

<a id="opIdExportECSServiceRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.ExportECSServiceRecommendations' \
  -d '{
    "accountIds": {},
    "filters": {},
    "fieldsToExport": {},
    "s3DestinationConfig": {
      "bucket": {},
      "keyPrefix": {}
    },
    "fileFormat": {},
    "includeMemberAccounts": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations`

<p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>

> Body parameter

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {}
}
```

<h3 id="exportecsservicerecommendations-parameters">Parameters</h3>

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
|body|body|[ExportECSServiceRecommendationsRequest](#schemaexportecsservicerecommendationsrequest)|true|none|
|» accountIds|body|object|false|none|
|» filters|body|object|false|none|
|» fieldsToExport|body|object|false|none|
|» s3DestinationConfig|body|[S3DestinationConfig](#schemas3destinationconfig)|true|<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>|
|» fileFormat|body|object|false|none|
|» includeMemberAccounts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.ExportECSServiceRecommendations|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="exportecsservicerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportECSServiceRecommendationsResponse](#schemaexportecsservicerecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportLambdaFunctionRecommendations

<a id="opIdExportLambdaFunctionRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.ExportLambdaFunctionRecommendations' \
  -d '{
    "accountIds": {},
    "filters": {},
    "fieldsToExport": {},
    "s3DestinationConfig": {
      "bucket": {},
      "keyPrefix": {}
    },
    "fileFormat": {},
    "includeMemberAccounts": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations`

<p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>

> Body parameter

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {}
}
```

<h3 id="exportlambdafunctionrecommendations-parameters">Parameters</h3>

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
|body|body|[ExportLambdaFunctionRecommendationsRequest](#schemaexportlambdafunctionrecommendationsrequest)|true|none|
|» accountIds|body|object|false|none|
|» filters|body|object|false|none|
|» fieldsToExport|body|object|false|none|
|» s3DestinationConfig|body|[S3DestinationConfig](#schemas3destinationconfig)|true|<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>|
|» fileFormat|body|object|false|none|
|» includeMemberAccounts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.ExportLambdaFunctionRecommendations|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="exportlambdafunctionrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportLambdaFunctionRecommendationsResponse](#schemaexportlambdafunctionrecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAutoScalingGroupRecommendations

<a id="opIdGetAutoScalingGroupRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetAutoScalingGroupRecommendations' \
  -d '{
    "accountIds": {},
    "autoScalingGroupArns": {},
    "nextToken": {},
    "maxResults": {},
    "filters": {},
    "recommendationPreferences": {
      "cpuVendorArchitectures": {}
    }
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations`

<p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "accountIds": {},
  "autoScalingGroupArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

<h3 id="getautoscalinggrouprecommendations-parameters">Parameters</h3>

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
|body|body|[GetAutoScalingGroupRecommendationsRequest](#schemagetautoscalinggrouprecommendationsrequest)|true|none|
|» accountIds|body|object|false|none|
|» autoScalingGroupArns|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filters|body|object|false|none|
|» recommendationPreferences|body|object|false|none|
|» » cpuVendorArchitectures|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetAutoScalingGroupRecommendations|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "autoScalingGroupRecommendations": {},
  "errors": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getautoscalinggrouprecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAutoScalingGroupRecommendationsResponse](#schemagetautoscalinggrouprecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEBSVolumeRecommendations

<a id="opIdGetEBSVolumeRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetEBSVolumeRecommendations' \
  -d '{
    "volumeArns": {},
    "nextToken": {},
    "maxResults": {},
    "filters": {},
    "accountIds": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations`

<p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "volumeArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "accountIds": {}
}
```

<h3 id="getebsvolumerecommendations-parameters">Parameters</h3>

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
|body|body|[GetEBSVolumeRecommendationsRequest](#schemagetebsvolumerecommendationsrequest)|true|none|
|» volumeArns|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filters|body|object|false|none|
|» accountIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetEBSVolumeRecommendations|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "volumeRecommendations": {},
  "errors": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getebsvolumerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEBSVolumeRecommendationsResponse](#schemagetebsvolumerecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEC2InstanceRecommendations

<a id="opIdGetEC2InstanceRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetEC2InstanceRecommendations' \
  -d '{
    "instanceArns": {},
    "nextToken": {},
    "maxResults": {},
    "filters": {},
    "accountIds": {},
    "recommendationPreferences": {
      "cpuVendorArchitectures": {}
    }
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations`

<p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "instanceArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "accountIds": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

<h3 id="getec2instancerecommendations-parameters">Parameters</h3>

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
|body|body|[GetEC2InstanceRecommendationsRequest](#schemagetec2instancerecommendationsrequest)|true|none|
|» instanceArns|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filters|body|object|false|none|
|» accountIds|body|object|false|none|
|» recommendationPreferences|body|object|false|none|
|» » cpuVendorArchitectures|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetEC2InstanceRecommendations|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "instanceRecommendations": {},
  "errors": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getec2instancerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEC2InstanceRecommendationsResponse](#schemagetec2instancerecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEC2RecommendationProjectedMetrics

<a id="opIdGetEC2RecommendationProjectedMetrics"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetEC2RecommendationProjectedMetrics' \
  -d '{
    "instanceArn": {},
    "stat": {},
    "period": {},
    "startTime": {},
    "endTime": {},
    "recommendationPreferences": {
      "cpuVendorArchitectures": {}
    }
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics`

<p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>

> Body parameter

```json
{
  "instanceArn": {},
  "stat": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

<h3 id="getec2recommendationprojectedmetrics-parameters">Parameters</h3>

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
|body|body|[GetEC2RecommendationProjectedMetricsRequest](#schemagetec2recommendationprojectedmetricsrequest)|true|none|
|» instanceArn|body|object|true|none|
|» stat|body|object|true|none|
|» period|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» recommendationPreferences|body|object|false|none|
|» » cpuVendorArchitectures|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetEC2RecommendationProjectedMetrics|

> Example responses

> 200 Response

```json
{
  "recommendedOptionProjectedMetrics": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getec2recommendationprojectedmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEC2RecommendationProjectedMetricsResponse](#schemagetec2recommendationprojectedmetricsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetECSServiceRecommendationProjectedMetrics

<a id="opIdGetECSServiceRecommendationProjectedMetrics"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics' \
  -d '{
    "serviceArn": {},
    "stat": {},
    "period": {},
    "startTime": {},
    "endTime": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics`

 Returns the projected metrics of Amazon ECS service recommendations. 

> Body parameter

```json
{
  "serviceArn": {},
  "stat": {},
  "period": {},
  "startTime": {},
  "endTime": {}
}
```

<h3 id="getecsservicerecommendationprojectedmetrics-parameters">Parameters</h3>

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
|body|body|[GetECSServiceRecommendationProjectedMetricsRequest](#schemagetecsservicerecommendationprojectedmetricsrequest)|true|none|
|» serviceArn|body|object|true|none|
|» stat|body|object|true|none|
|» period|body|object|true|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics|

> Example responses

> 200 Response

```json
{
  "recommendedOptionProjectedMetrics": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getecsservicerecommendationprojectedmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetECSServiceRecommendationProjectedMetricsResponse](#schemagetecsservicerecommendationprojectedmetricsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetECSServiceRecommendations

<a id="opIdGetECSServiceRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetECSServiceRecommendations' \
  -d '{
    "serviceArns": {},
    "nextToken": {},
    "maxResults": {},
    "filters": {},
    "accountIds": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations`

<p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>

> Body parameter

```json
{
  "serviceArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "accountIds": {}
}
```

<h3 id="getecsservicerecommendations-parameters">Parameters</h3>

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
|body|body|[GetECSServiceRecommendationsRequest](#schemagetecsservicerecommendationsrequest)|true|none|
|» serviceArns|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filters|body|object|false|none|
|» accountIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetECSServiceRecommendations|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "ecsServiceRecommendations": {},
  "errors": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getecsservicerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetECSServiceRecommendationsResponse](#schemagetecsservicerecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEffectiveRecommendationPreferences

<a id="opIdGetEffectiveRecommendationPreferences"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetEffectiveRecommendationPreferences' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences`

<p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="geteffectiverecommendationpreferences-parameters">Parameters</h3>

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
|body|body|[GetEffectiveRecommendationPreferencesRequest](#schemageteffectiverecommendationpreferencesrequest)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetEffectiveRecommendationPreferences|

> Example responses

> 200 Response

```json
{
  "enhancedInfrastructureMetrics": {},
  "externalMetricsPreference": {
    "source": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="geteffectiverecommendationpreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEffectiveRecommendationPreferencesResponse](#schemageteffectiverecommendationpreferencesresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEnrollmentStatus

<a id="opIdGetEnrollmentStatus"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetEnrollmentStatus' \
  -d '{}'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus`

<p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>

> Body parameter

```json
{}
```

<h3 id="getenrollmentstatus-parameters">Parameters</h3>

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
|body|body|[GetEnrollmentStatusRequest](#schemagetenrollmentstatusrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetEnrollmentStatus|

> Example responses

> 200 Response

```json
{
  "status": {},
  "statusReason": {},
  "memberAccountsEnrolled": {},
  "lastUpdatedTimestamp": {},
  "numberOfMemberAccountsOptedIn": {}
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

<h3 id="getenrollmentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEnrollmentStatusResponse](#schemagetenrollmentstatusresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEnrollmentStatusesForOrganization

<a id="opIdGetEnrollmentStatusesForOrganization"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetEnrollmentStatusesForOrganization' \
  -d '{
    "filters": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization`

<p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>

> Body parameter

```json
{
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getenrollmentstatusesfororganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetEnrollmentStatusesForOrganizationRequest](#schemagetenrollmentstatusesfororganizationrequest)|true|none|
|» filters|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetEnrollmentStatusesForOrganization|

> Example responses

> 200 Response

```json
{
  "accountEnrollmentStatuses": {},
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

<h3 id="getenrollmentstatusesfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEnrollmentStatusesForOrganizationResponse](#schemagetenrollmentstatusesfororganizationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLambdaFunctionRecommendations

<a id="opIdGetLambdaFunctionRecommendations"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetLambdaFunctionRecommendations' \
  -d '{
    "functionArns": {},
    "accountIds": {},
    "filters": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations`

<p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "functionArns": {},
  "accountIds": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getlambdafunctionrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetLambdaFunctionRecommendationsRequest](#schemagetlambdafunctionrecommendationsrequest)|true|none|
|» functionArns|body|object|false|none|
|» accountIds|body|object|false|none|
|» filters|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetLambdaFunctionRecommendations|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "lambdaFunctionRecommendations": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getlambdafunctionrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLambdaFunctionRecommendationsResponse](#schemagetlambdafunctionrecommendationsresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecommendationPreferences

<a id="opIdGetRecommendationPreferences"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetRecommendationPreferences' \
  -d '{
    "resourceType": {},
    "scope": {
      "name": {},
      "value": {}
    },
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences`

<p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "resourceType": {},
  "scope": {
    "name": {},
    "value": {}
  },
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getrecommendationpreferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRecommendationPreferencesRequest](#schemagetrecommendationpreferencesrequest)|true|none|
|» resourceType|body|object|true|none|
|» scope|body|object|false|none|
|» » name|body|object|false|none|
|» » value|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetRecommendationPreferences|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "recommendationPreferencesDetails": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="getrecommendationpreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecommendationPreferencesResponse](#schemagetrecommendationpreferencesresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecommendationSummaries

<a id="opIdGetRecommendationSummaries"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.GetRecommendationSummaries' \
  -d '{
    "accountIds": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries`

<p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>

> Body parameter

```json
{
  "accountIds": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getrecommendationsummaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRecommendationSummariesRequest](#schemagetrecommendationsummariesrequest)|true|none|
|» accountIds|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.GetRecommendationSummaries|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "recommendationSummaries": {}
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

> 486 Response

```json
null
```

<h3 id="getrecommendationsummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecommendationSummariesResponse](#schemagetrecommendationsummariesresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRecommendationPreferences

<a id="opIdPutRecommendationPreferences"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.PutRecommendationPreferences' \
  -d '{
    "resourceType": {},
    "scope": {
      "name": {},
      "value": {}
    },
    "enhancedInfrastructureMetrics": {},
    "inferredWorkloadTypes": {},
    "externalMetricsPreference": {
      "source": {}
    }
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences`

<p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "resourceType": {},
  "scope": {
    "name": {},
    "value": {}
  },
  "enhancedInfrastructureMetrics": {},
  "inferredWorkloadTypes": {},
  "externalMetricsPreference": {
    "source": {}
  }
}
```

<h3 id="putrecommendationpreferences-parameters">Parameters</h3>

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
|body|body|[PutRecommendationPreferencesRequest](#schemaputrecommendationpreferencesrequest)|true|none|
|» resourceType|body|object|true|none|
|» scope|body|object|false|none|
|» » name|body|object|false|none|
|» » value|body|object|false|none|
|» enhancedInfrastructureMetrics|body|object|false|none|
|» inferredWorkloadTypes|body|object|false|none|
|» externalMetricsPreference|body|object|false|none|
|» » source|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.PutRecommendationPreferences|

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="putrecommendationpreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRecommendationPreferencesResponse](#schemaputrecommendationpreferencesresponse)|
|480|480|OptInRequiredException|[OptInRequiredException](#schemaoptinrequiredexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnrollmentStatus

<a id="opIdUpdateEnrollmentStatus"></a>

> Code samples

```bash
curl 'https://compute-optimizer.us-east-1.amazonaws.com/#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComputeOptimizerService.UpdateEnrollmentStatus' \
  -d '{
    "status": {},
    "includeMemberAccounts": {}
  }'
```

`POST /#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus`

<p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>

> Body parameter

```json
{
  "status": {},
  "includeMemberAccounts": {}
}
```

<h3 id="updateenrollmentstatus-parameters">Parameters</h3>

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
|body|body|[UpdateEnrollmentStatusRequest](#schemaupdateenrollmentstatusrequest)|true|none|
|» status|body|object|true|none|
|» includeMemberAccounts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComputeOptimizerService.UpdateEnrollmentStatus|

> Example responses

> 200 Response

```json
{
  "status": {},
  "statusReason": {}
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

<h3 id="updateenrollmentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnrollmentStatusResponse](#schemaupdateenrollmentstatusresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|MissingAuthenticationToken|[MissingAuthenticationToken](#schemamissingauthenticationtoken)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteRecommendationPreferencesResponse">DeleteRecommendationPreferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecommendationpreferencesresponse"></a>
<a id="schema_DeleteRecommendationPreferencesResponse"></a>
<a id="tocSdeleterecommendationpreferencesresponse"></a>
<a id="tocsdeleterecommendationpreferencesresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRecommendationPreferencesRequest">DeleteRecommendationPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecommendationpreferencesrequest"></a>
<a id="schema_DeleteRecommendationPreferencesRequest"></a>
<a id="tocSdeleterecommendationpreferencesrequest"></a>
<a id="tocsdeleterecommendationpreferencesrequest"></a>

```json
{
  "resourceType": {},
  "scope": {
    "name": {},
    "value": {}
  },
  "recommendationPreferenceNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|scope|object|false|none|none|
|recommendationPreferenceNames|object|true|none|none|

<h2 id="tocS_OptInRequiredException">OptInRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaoptinrequiredexception"></a>
<a id="schema_OptInRequiredException"></a>
<a id="tocSoptinrequiredexception"></a>
<a id="tocsoptinrequiredexception"></a>

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

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

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

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

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

<h2 id="tocS_MissingAuthenticationToken">MissingAuthenticationToken</h2>
<!-- backwards compatibility -->
<a id="schemamissingauthenticationtoken"></a>
<a id="schema_MissingAuthenticationToken"></a>
<a id="tocSmissingauthenticationtoken"></a>
<a id="tocsmissingauthenticationtoken"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_DescribeRecommendationExportJobsResponse">DescribeRecommendationExportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationexportjobsresponse"></a>
<a id="schema_DescribeRecommendationExportJobsResponse"></a>
<a id="tocSdescriberecommendationexportjobsresponse"></a>
<a id="tocsdescriberecommendationexportjobsresponse"></a>

```json
{
  "recommendationExportJobs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendationExportJobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeRecommendationExportJobsRequest">DescribeRecommendationExportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationexportjobsrequest"></a>
<a id="schema_DescribeRecommendationExportJobsRequest"></a>
<a id="tocSdescriberecommendationexportjobsrequest"></a>
<a id="tocsdescriberecommendationexportjobsrequest"></a>

```json
{
  "jobIds": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobIds|object|false|none|none|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ExportAutoScalingGroupRecommendationsResponse">ExportAutoScalingGroupRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportautoscalinggrouprecommendationsresponse"></a>
<a id="schema_ExportAutoScalingGroupRecommendationsResponse"></a>
<a id="tocSexportautoscalinggrouprecommendationsresponse"></a>
<a id="tocsexportautoscalinggrouprecommendationsresponse"></a>

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|s3Destination|object|false|none|none|

<h2 id="tocS_ExportAutoScalingGroupRecommendationsRequest">ExportAutoScalingGroupRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportautoscalinggrouprecommendationsrequest"></a>
<a id="schema_ExportAutoScalingGroupRecommendationsRequest"></a>
<a id="tocSexportautoscalinggrouprecommendationsrequest"></a>
<a id="tocsexportautoscalinggrouprecommendationsrequest"></a>

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|
|filters|object|false|none|none|
|fieldsToExport|object|false|none|none|
|s3DestinationConfig|object|true|none|none|
|fileFormat|object|false|none|none|
|includeMemberAccounts|object|false|none|none|
|recommendationPreferences|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ExportEBSVolumeRecommendationsResponse">ExportEBSVolumeRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportebsvolumerecommendationsresponse"></a>
<a id="schema_ExportEBSVolumeRecommendationsResponse"></a>
<a id="tocSexportebsvolumerecommendationsresponse"></a>
<a id="tocsexportebsvolumerecommendationsresponse"></a>

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|s3Destination|[S3Destination](#schemas3destination)|false|none|Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.|

<h2 id="tocS_ExportEBSVolumeRecommendationsRequest">ExportEBSVolumeRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportebsvolumerecommendationsrequest"></a>
<a id="schema_ExportEBSVolumeRecommendationsRequest"></a>
<a id="tocSexportebsvolumerecommendationsrequest"></a>
<a id="tocsexportebsvolumerecommendationsrequest"></a>

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|
|filters|object|false|none|none|
|fieldsToExport|object|false|none|none|
|s3DestinationConfig|[S3DestinationConfig](#schemas3destinationconfig)|true|none|<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>|
|fileFormat|object|false|none|none|
|includeMemberAccounts|object|false|none|none|

<h2 id="tocS_ExportEC2InstanceRecommendationsResponse">ExportEC2InstanceRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportec2instancerecommendationsresponse"></a>
<a id="schema_ExportEC2InstanceRecommendationsResponse"></a>
<a id="tocSexportec2instancerecommendationsresponse"></a>
<a id="tocsexportec2instancerecommendationsresponse"></a>

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|s3Destination|object|false|none|none|

<h2 id="tocS_ExportEC2InstanceRecommendationsRequest">ExportEC2InstanceRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportec2instancerecommendationsrequest"></a>
<a id="schema_ExportEC2InstanceRecommendationsRequest"></a>
<a id="tocSexportec2instancerecommendationsrequest"></a>
<a id="tocsexportec2instancerecommendationsrequest"></a>

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|
|filters|object|false|none|none|
|fieldsToExport|object|false|none|none|
|s3DestinationConfig|object|true|none|none|
|fileFormat|object|false|none|none|
|includeMemberAccounts|object|false|none|none|
|recommendationPreferences|object|false|none|none|

<h2 id="tocS_ExportECSServiceRecommendationsResponse">ExportECSServiceRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportecsservicerecommendationsresponse"></a>
<a id="schema_ExportECSServiceRecommendationsResponse"></a>
<a id="tocSexportecsservicerecommendationsresponse"></a>
<a id="tocsexportecsservicerecommendationsresponse"></a>

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|s3Destination|[S3Destination](#schemas3destination)|false|none|Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.|

<h2 id="tocS_ExportECSServiceRecommendationsRequest">ExportECSServiceRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportecsservicerecommendationsrequest"></a>
<a id="schema_ExportECSServiceRecommendationsRequest"></a>
<a id="tocSexportecsservicerecommendationsrequest"></a>
<a id="tocsexportecsservicerecommendationsrequest"></a>

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|
|filters|object|false|none|none|
|fieldsToExport|object|false|none|none|
|s3DestinationConfig|[S3DestinationConfig](#schemas3destinationconfig)|true|none|<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>|
|fileFormat|object|false|none|none|
|includeMemberAccounts|object|false|none|none|

<h2 id="tocS_ExportLambdaFunctionRecommendationsResponse">ExportLambdaFunctionRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportlambdafunctionrecommendationsresponse"></a>
<a id="schema_ExportLambdaFunctionRecommendationsResponse"></a>
<a id="tocSexportlambdafunctionrecommendationsresponse"></a>
<a id="tocsexportlambdafunctionrecommendationsresponse"></a>

```json
{
  "jobId": {},
  "s3Destination": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|s3Destination|[S3Destination](#schemas3destination)|false|none|Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.|

<h2 id="tocS_ExportLambdaFunctionRecommendationsRequest">ExportLambdaFunctionRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportlambdafunctionrecommendationsrequest"></a>
<a id="schema_ExportLambdaFunctionRecommendationsRequest"></a>
<a id="tocSexportlambdafunctionrecommendationsrequest"></a>
<a id="tocsexportlambdafunctionrecommendationsrequest"></a>

```json
{
  "accountIds": {},
  "filters": {},
  "fieldsToExport": {},
  "s3DestinationConfig": {
    "bucket": {},
    "keyPrefix": {}
  },
  "fileFormat": {},
  "includeMemberAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|
|filters|object|false|none|none|
|fieldsToExport|object|false|none|none|
|s3DestinationConfig|[S3DestinationConfig](#schemas3destinationconfig)|true|none|<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>|
|fileFormat|object|false|none|none|
|includeMemberAccounts|object|false|none|none|

<h2 id="tocS_GetAutoScalingGroupRecommendationsResponse">GetAutoScalingGroupRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetautoscalinggrouprecommendationsresponse"></a>
<a id="schema_GetAutoScalingGroupRecommendationsResponse"></a>
<a id="tocSgetautoscalinggrouprecommendationsresponse"></a>
<a id="tocsgetautoscalinggrouprecommendationsresponse"></a>

```json
{
  "nextToken": {},
  "autoScalingGroupRecommendations": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|autoScalingGroupRecommendations|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_GetAutoScalingGroupRecommendationsRequest">GetAutoScalingGroupRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetautoscalinggrouprecommendationsrequest"></a>
<a id="schema_GetAutoScalingGroupRecommendationsRequest"></a>
<a id="tocSgetautoscalinggrouprecommendationsrequest"></a>
<a id="tocsgetautoscalinggrouprecommendationsrequest"></a>

```json
{
  "accountIds": {},
  "autoScalingGroupArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|
|autoScalingGroupArns|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|
|recommendationPreferences|object|false|none|none|

<h2 id="tocS_GetEBSVolumeRecommendationsResponse">GetEBSVolumeRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetebsvolumerecommendationsresponse"></a>
<a id="schema_GetEBSVolumeRecommendationsResponse"></a>
<a id="tocSgetebsvolumerecommendationsresponse"></a>
<a id="tocsgetebsvolumerecommendationsresponse"></a>

```json
{
  "nextToken": {},
  "volumeRecommendations": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|volumeRecommendations|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_GetEBSVolumeRecommendationsRequest">GetEBSVolumeRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetebsvolumerecommendationsrequest"></a>
<a id="schema_GetEBSVolumeRecommendationsRequest"></a>
<a id="tocSgetebsvolumerecommendationsrequest"></a>
<a id="tocsgetebsvolumerecommendationsrequest"></a>

```json
{
  "volumeArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "accountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumeArns|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|
|accountIds|object|false|none|none|

<h2 id="tocS_GetEC2InstanceRecommendationsResponse">GetEC2InstanceRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetec2instancerecommendationsresponse"></a>
<a id="schema_GetEC2InstanceRecommendationsResponse"></a>
<a id="tocSgetec2instancerecommendationsresponse"></a>
<a id="tocsgetec2instancerecommendationsresponse"></a>

```json
{
  "nextToken": {},
  "instanceRecommendations": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|instanceRecommendations|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_GetEC2InstanceRecommendationsRequest">GetEC2InstanceRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetec2instancerecommendationsrequest"></a>
<a id="schema_GetEC2InstanceRecommendationsRequest"></a>
<a id="tocSgetec2instancerecommendationsrequest"></a>
<a id="tocsgetec2instancerecommendationsrequest"></a>

```json
{
  "instanceArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "accountIds": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceArns|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|
|accountIds|object|false|none|none|
|recommendationPreferences|object|false|none|none|

<h2 id="tocS_GetEC2RecommendationProjectedMetricsResponse">GetEC2RecommendationProjectedMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetec2recommendationprojectedmetricsresponse"></a>
<a id="schema_GetEC2RecommendationProjectedMetricsResponse"></a>
<a id="tocSgetec2recommendationprojectedmetricsresponse"></a>
<a id="tocsgetec2recommendationprojectedmetricsresponse"></a>

```json
{
  "recommendedOptionProjectedMetrics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendedOptionProjectedMetrics|object|false|none|none|

<h2 id="tocS_GetEC2RecommendationProjectedMetricsRequest">GetEC2RecommendationProjectedMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetec2recommendationprojectedmetricsrequest"></a>
<a id="schema_GetEC2RecommendationProjectedMetricsRequest"></a>
<a id="tocSgetec2recommendationprojectedmetricsrequest"></a>
<a id="tocsgetec2recommendationprojectedmetricsrequest"></a>

```json
{
  "instanceArn": {},
  "stat": {},
  "period": {},
  "startTime": {},
  "endTime": {},
  "recommendationPreferences": {
    "cpuVendorArchitectures": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceArn|object|true|none|none|
|stat|object|true|none|none|
|period|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|recommendationPreferences|object|false|none|none|

<h2 id="tocS_GetECSServiceRecommendationProjectedMetricsResponse">GetECSServiceRecommendationProjectedMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetecsservicerecommendationprojectedmetricsresponse"></a>
<a id="schema_GetECSServiceRecommendationProjectedMetricsResponse"></a>
<a id="tocSgetecsservicerecommendationprojectedmetricsresponse"></a>
<a id="tocsgetecsservicerecommendationprojectedmetricsresponse"></a>

```json
{
  "recommendedOptionProjectedMetrics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendedOptionProjectedMetrics|object|false|none|none|

<h2 id="tocS_GetECSServiceRecommendationProjectedMetricsRequest">GetECSServiceRecommendationProjectedMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetecsservicerecommendationprojectedmetricsrequest"></a>
<a id="schema_GetECSServiceRecommendationProjectedMetricsRequest"></a>
<a id="tocSgetecsservicerecommendationprojectedmetricsrequest"></a>
<a id="tocsgetecsservicerecommendationprojectedmetricsrequest"></a>

```json
{
  "serviceArn": {},
  "stat": {},
  "period": {},
  "startTime": {},
  "endTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceArn|object|true|none|none|
|stat|object|true|none|none|
|period|object|true|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|

<h2 id="tocS_GetECSServiceRecommendationsResponse">GetECSServiceRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetecsservicerecommendationsresponse"></a>
<a id="schema_GetECSServiceRecommendationsResponse"></a>
<a id="tocSgetecsservicerecommendationsresponse"></a>
<a id="tocsgetecsservicerecommendationsresponse"></a>

```json
{
  "nextToken": {},
  "ecsServiceRecommendations": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|ecsServiceRecommendations|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_GetECSServiceRecommendationsRequest">GetECSServiceRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetecsservicerecommendationsrequest"></a>
<a id="schema_GetECSServiceRecommendationsRequest"></a>
<a id="tocSgetecsservicerecommendationsrequest"></a>
<a id="tocsgetecsservicerecommendationsrequest"></a>

```json
{
  "serviceArns": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {},
  "accountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceArns|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|
|accountIds|object|false|none|none|

<h2 id="tocS_GetEffectiveRecommendationPreferencesResponse">GetEffectiveRecommendationPreferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteffectiverecommendationpreferencesresponse"></a>
<a id="schema_GetEffectiveRecommendationPreferencesResponse"></a>
<a id="tocSgeteffectiverecommendationpreferencesresponse"></a>
<a id="tocsgeteffectiverecommendationpreferencesresponse"></a>

```json
{
  "enhancedInfrastructureMetrics": {},
  "externalMetricsPreference": {
    "source": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedInfrastructureMetrics|object|false|none|none|
|externalMetricsPreference|object|false|none|none|

<h2 id="tocS_GetEffectiveRecommendationPreferencesRequest">GetEffectiveRecommendationPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteffectiverecommendationpreferencesrequest"></a>
<a id="schema_GetEffectiveRecommendationPreferencesRequest"></a>
<a id="tocSgeteffectiverecommendationpreferencesrequest"></a>
<a id="tocsgeteffectiverecommendationpreferencesrequest"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_GetEnrollmentStatusResponse">GetEnrollmentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetenrollmentstatusresponse"></a>
<a id="schema_GetEnrollmentStatusResponse"></a>
<a id="tocSgetenrollmentstatusresponse"></a>
<a id="tocsgetenrollmentstatusresponse"></a>

```json
{
  "status": {},
  "statusReason": {},
  "memberAccountsEnrolled": {},
  "lastUpdatedTimestamp": {},
  "numberOfMemberAccountsOptedIn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|memberAccountsEnrolled|object|false|none|none|
|lastUpdatedTimestamp|object|false|none|none|
|numberOfMemberAccountsOptedIn|object|false|none|none|

<h2 id="tocS_GetEnrollmentStatusRequest">GetEnrollmentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetenrollmentstatusrequest"></a>
<a id="schema_GetEnrollmentStatusRequest"></a>
<a id="tocSgetenrollmentstatusrequest"></a>
<a id="tocsgetenrollmentstatusrequest"></a>

```json
{}
```

<h2 id="tocS_GetEnrollmentStatusesForOrganizationResponse">GetEnrollmentStatusesForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetenrollmentstatusesfororganizationresponse"></a>
<a id="schema_GetEnrollmentStatusesForOrganizationResponse"></a>
<a id="tocSgetenrollmentstatusesfororganizationresponse"></a>
<a id="tocsgetenrollmentstatusesfororganizationresponse"></a>

```json
{
  "accountEnrollmentStatuses": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountEnrollmentStatuses|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetEnrollmentStatusesForOrganizationRequest">GetEnrollmentStatusesForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetenrollmentstatusesfororganizationrequest"></a>
<a id="schema_GetEnrollmentStatusesForOrganizationRequest"></a>
<a id="tocSgetenrollmentstatusesfororganizationrequest"></a>
<a id="tocsgetenrollmentstatusesfororganizationrequest"></a>

```json
{
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetLambdaFunctionRecommendationsResponse">GetLambdaFunctionRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlambdafunctionrecommendationsresponse"></a>
<a id="schema_GetLambdaFunctionRecommendationsResponse"></a>
<a id="tocSgetlambdafunctionrecommendationsresponse"></a>
<a id="tocsgetlambdafunctionrecommendationsresponse"></a>

```json
{
  "nextToken": {},
  "lambdaFunctionRecommendations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|lambdaFunctionRecommendations|object|false|none|none|

<h2 id="tocS_GetLambdaFunctionRecommendationsRequest">GetLambdaFunctionRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlambdafunctionrecommendationsrequest"></a>
<a id="schema_GetLambdaFunctionRecommendationsRequest"></a>
<a id="tocSgetlambdafunctionrecommendationsrequest"></a>
<a id="tocsgetlambdafunctionrecommendationsrequest"></a>

```json
{
  "functionArns": {},
  "accountIds": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionArns|object|false|none|none|
|accountIds|object|false|none|none|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetRecommendationPreferencesResponse">GetRecommendationPreferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationpreferencesresponse"></a>
<a id="schema_GetRecommendationPreferencesResponse"></a>
<a id="tocSgetrecommendationpreferencesresponse"></a>
<a id="tocsgetrecommendationpreferencesresponse"></a>

```json
{
  "nextToken": {},
  "recommendationPreferencesDetails": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|recommendationPreferencesDetails|object|false|none|none|

<h2 id="tocS_GetRecommendationPreferencesRequest">GetRecommendationPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationpreferencesrequest"></a>
<a id="schema_GetRecommendationPreferencesRequest"></a>
<a id="tocSgetrecommendationpreferencesrequest"></a>
<a id="tocsgetrecommendationpreferencesrequest"></a>

```json
{
  "resourceType": {},
  "scope": {
    "name": {},
    "value": {}
  },
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|scope|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetRecommendationSummariesResponse">GetRecommendationSummariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationsummariesresponse"></a>
<a id="schema_GetRecommendationSummariesResponse"></a>
<a id="tocSgetrecommendationsummariesresponse"></a>
<a id="tocsgetrecommendationsummariesresponse"></a>

```json
{
  "nextToken": {},
  "recommendationSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|recommendationSummaries|object|false|none|none|

<h2 id="tocS_GetRecommendationSummariesRequest">GetRecommendationSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationsummariesrequest"></a>
<a id="schema_GetRecommendationSummariesRequest"></a>
<a id="tocSgetrecommendationsummariesrequest"></a>
<a id="tocsgetrecommendationsummariesrequest"></a>

```json
{
  "accountIds": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_PutRecommendationPreferencesResponse">PutRecommendationPreferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputrecommendationpreferencesresponse"></a>
<a id="schema_PutRecommendationPreferencesResponse"></a>
<a id="tocSputrecommendationpreferencesresponse"></a>
<a id="tocsputrecommendationpreferencesresponse"></a>

```json
{}
```

<h2 id="tocS_PutRecommendationPreferencesRequest">PutRecommendationPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrecommendationpreferencesrequest"></a>
<a id="schema_PutRecommendationPreferencesRequest"></a>
<a id="tocSputrecommendationpreferencesrequest"></a>
<a id="tocsputrecommendationpreferencesrequest"></a>

```json
{
  "resourceType": {},
  "scope": {
    "name": {},
    "value": {}
  },
  "enhancedInfrastructureMetrics": {},
  "inferredWorkloadTypes": {},
  "externalMetricsPreference": {
    "source": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|scope|object|false|none|none|
|enhancedInfrastructureMetrics|object|false|none|none|
|inferredWorkloadTypes|object|false|none|none|
|externalMetricsPreference|object|false|none|none|

<h2 id="tocS_UpdateEnrollmentStatusResponse">UpdateEnrollmentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenrollmentstatusresponse"></a>
<a id="schema_UpdateEnrollmentStatusResponse"></a>
<a id="tocSupdateenrollmentstatusresponse"></a>
<a id="tocsupdateenrollmentstatusresponse"></a>

```json
{
  "status": {},
  "statusReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_UpdateEnrollmentStatusRequest">UpdateEnrollmentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenrollmentstatusrequest"></a>
<a id="schema_UpdateEnrollmentStatusRequest"></a>
<a id="tocSupdateenrollmentstatusrequest"></a>
<a id="tocsupdateenrollmentstatusrequest"></a>

```json
{
  "status": {},
  "includeMemberAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|
|includeMemberAccounts|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"Active"
```

<h2 id="tocS_StatusReason">StatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastatusreason"></a>
<a id="schema_StatusReason"></a>
<a id="tocSstatusreason"></a>
<a id="tocsstatusreason"></a>

```json
"string"
```

<h2 id="tocS_LastUpdatedTimestamp">LastUpdatedTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedtimestamp"></a>
<a id="schema_LastUpdatedTimestamp"></a>
<a id="tocSlastupdatedtimestamp"></a>
<a id="tocslastupdatedtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AccountEnrollmentStatus">AccountEnrollmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountenrollmentstatus"></a>
<a id="schema_AccountEnrollmentStatus"></a>
<a id="tocSaccountenrollmentstatus"></a>
<a id="tocsaccountenrollmentstatus"></a>

```json
{
  "accountId": {},
  "status": {},
  "statusReason": {},
  "lastUpdatedTimestamp": {}
}
```

Describes the enrollment status of an organization's member accounts in Compute Optimizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|lastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_AccountEnrollmentStatuses">AccountEnrollmentStatuses</h2>
<!-- backwards compatibility -->
<a id="schemaaccountenrollmentstatuses"></a>
<a id="schema_AccountEnrollmentStatuses"></a>
<a id="tocSaccountenrollmentstatuses"></a>
<a id="tocsaccountenrollmentstatuses"></a>

```json
[
  {
    "accountId": {},
    "status": {},
    "statusReason": {},
    "lastUpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_AccountIds">AccountIds</h2>
<!-- backwards compatibility -->
<a id="schemaaccountids"></a>
<a id="schema_AccountIds"></a>
<a id="tocSaccountids"></a>
<a id="tocsaccountids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AutoScalingConfiguration">AutoScalingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingconfiguration"></a>
<a id="schema_AutoScalingConfiguration"></a>
<a id="tocSautoscalingconfiguration"></a>
<a id="tocsautoscalingconfiguration"></a>

```json
"TargetTrackingScalingCpu"
```

<h2 id="tocS_AutoScalingGroupArn">AutoScalingGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouparn"></a>
<a id="schema_AutoScalingGroupArn"></a>
<a id="tocSautoscalinggrouparn"></a>
<a id="tocsautoscalinggrouparn"></a>

```json
"string"
```

<h2 id="tocS_AutoScalingGroupArns">AutoScalingGroupArns</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouparns"></a>
<a id="schema_AutoScalingGroupArns"></a>
<a id="tocSautoscalinggrouparns"></a>
<a id="tocsautoscalinggrouparns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DesiredCapacity">DesiredCapacity</h2>
<!-- backwards compatibility -->
<a id="schemadesiredcapacity"></a>
<a id="schema_DesiredCapacity"></a>
<a id="tocSdesiredcapacity"></a>
<a id="tocsdesiredcapacity"></a>

```json
0
```

<h2 id="tocS_MinSize">MinSize</h2>
<!-- backwards compatibility -->
<a id="schemaminsize"></a>
<a id="schema_MinSize"></a>
<a id="tocSminsize"></a>
<a id="tocsminsize"></a>

```json
0
```

<h2 id="tocS_MaxSize">MaxSize</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize"></a>
<a id="schema_MaxSize"></a>
<a id="tocSmaxsize"></a>
<a id="tocsmaxsize"></a>

```json
0
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

<h2 id="tocS_AutoScalingGroupConfiguration">AutoScalingGroupConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupconfiguration"></a>
<a id="schema_AutoScalingGroupConfiguration"></a>
<a id="tocSautoscalinggroupconfiguration"></a>
<a id="tocsautoscalinggroupconfiguration"></a>

```json
{
  "desiredCapacity": {},
  "minSize": {},
  "maxSize": {},
  "instanceType": {}
}
```

Describes the configuration of an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desiredCapacity|object|false|none|none|
|minSize|object|false|none|none|
|maxSize|object|false|none|none|
|instanceType|object|false|none|none|

<h2 id="tocS_AutoScalingGroupName">AutoScalingGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupname"></a>
<a id="schema_AutoScalingGroupName"></a>
<a id="tocSautoscalinggroupname"></a>
<a id="tocsautoscalinggroupname"></a>

```json
"string"
```

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
"Underprovisioned"
```

<h2 id="tocS_UtilizationMetrics">UtilizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemautilizationmetrics"></a>
<a id="schema_UtilizationMetrics"></a>
<a id="tocSutilizationmetrics"></a>
<a id="tocsutilizationmetrics"></a>

```json
[
  {
    "name": {},
    "statistic": {},
    "value": {}
  }
]
```

<h2 id="tocS_LookBackPeriodInDays">LookBackPeriodInDays</h2>
<!-- backwards compatibility -->
<a id="schemalookbackperiodindays"></a>
<a id="schema_LookBackPeriodInDays"></a>
<a id="tocSlookbackperiodindays"></a>
<a id="tocslookbackperiodindays"></a>

```json
0
```

<h2 id="tocS_AutoScalingGroupRecommendationOptions">AutoScalingGroupRecommendationOptions</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouprecommendationoptions"></a>
<a id="schema_AutoScalingGroupRecommendationOptions"></a>
<a id="tocSautoscalinggrouprecommendationoptions"></a>
<a id="tocsautoscalinggrouprecommendationoptions"></a>

```json
[
  {
    "configuration": {
      "desiredCapacity": {},
      "minSize": {},
      "maxSize": {},
      "instanceType": {}
    },
    "projectedUtilizationMetrics": {},
    "performanceRisk": {},
    "rank": {},
    "savingsOpportunity": {
      "savingsOpportunityPercentage": {},
      "estimatedMonthlySavings": {
        "currency": {},
        "value": {}
      }
    },
    "migrationEffort": {}
  }
]
```

<h2 id="tocS_LastRefreshTimestamp">LastRefreshTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemalastrefreshtimestamp"></a>
<a id="schema_LastRefreshTimestamp"></a>
<a id="tocSlastrefreshtimestamp"></a>
<a id="tocslastrefreshtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CurrentPerformanceRisk">CurrentPerformanceRisk</h2>
<!-- backwards compatibility -->
<a id="schemacurrentperformancerisk"></a>
<a id="schema_CurrentPerformanceRisk"></a>
<a id="tocScurrentperformancerisk"></a>
<a id="tocscurrentperformancerisk"></a>

```json
"VeryLow"
```

<h2 id="tocS_EffectiveRecommendationPreferences">EffectiveRecommendationPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaeffectiverecommendationpreferences"></a>
<a id="schema_EffectiveRecommendationPreferences"></a>
<a id="tocSeffectiverecommendationpreferences"></a>
<a id="tocseffectiverecommendationpreferences"></a>

```json
{
  "cpuVendorArchitectures": {},
  "enhancedInfrastructureMetrics": {},
  "inferredWorkloadTypes": {},
  "externalMetricsPreference": {
    "source": {}
  }
}
```

Describes the effective recommendation preferences for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuVendorArchitectures|object|false|none|none|
|enhancedInfrastructureMetrics|object|false|none|none|
|inferredWorkloadTypes|object|false|none|none|
|externalMetricsPreference|object|false|none|none|

<h2 id="tocS_InferredWorkloadTypes">InferredWorkloadTypes</h2>
<!-- backwards compatibility -->
<a id="schemainferredworkloadtypes"></a>
<a id="schema_InferredWorkloadTypes"></a>
<a id="tocSinferredworkloadtypes"></a>
<a id="tocsinferredworkloadtypes"></a>

```json
[
  "AmazonEmr"
]
```

<h2 id="tocS_AutoScalingGroupRecommendation">AutoScalingGroupRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouprecommendation"></a>
<a id="schema_AutoScalingGroupRecommendation"></a>
<a id="tocSautoscalinggrouprecommendation"></a>
<a id="tocsautoscalinggrouprecommendation"></a>

```json
{
  "accountId": {},
  "autoScalingGroupArn": {},
  "autoScalingGroupName": {},
  "finding": {},
  "utilizationMetrics": {},
  "lookBackPeriodInDays": {},
  "currentConfiguration": {
    "desiredCapacity": {},
    "minSize": {},
    "maxSize": {},
    "instanceType": {}
  },
  "recommendationOptions": {},
  "lastRefreshTimestamp": {},
  "currentPerformanceRisk": {},
  "effectiveRecommendationPreferences": {
    "cpuVendorArchitectures": {},
    "enhancedInfrastructureMetrics": {},
    "inferredWorkloadTypes": {},
    "externalMetricsPreference": {
      "source": {}
    }
  },
  "inferredWorkloadTypes": {}
}
```

Describes an Auto Scaling group recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|autoScalingGroupArn|object|false|none|none|
|autoScalingGroupName|object|false|none|none|
|finding|object|false|none|none|
|utilizationMetrics|object|false|none|none|
|lookBackPeriodInDays|object|false|none|none|
|currentConfiguration|object|false|none|none|
|recommendationOptions|object|false|none|none|
|lastRefreshTimestamp|object|false|none|none|
|currentPerformanceRisk|object|false|none|none|
|effectiveRecommendationPreferences|object|false|none|none|
|inferredWorkloadTypes|object|false|none|none|

<h2 id="tocS_ProjectedUtilizationMetrics">ProjectedUtilizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaprojectedutilizationmetrics"></a>
<a id="schema_ProjectedUtilizationMetrics"></a>
<a id="tocSprojectedutilizationmetrics"></a>
<a id="tocsprojectedutilizationmetrics"></a>

```json
[
  {
    "name": {},
    "statistic": {},
    "value": {}
  }
]
```

<h2 id="tocS_PerformanceRisk">PerformanceRisk</h2>
<!-- backwards compatibility -->
<a id="schemaperformancerisk"></a>
<a id="schema_PerformanceRisk"></a>
<a id="tocSperformancerisk"></a>
<a id="tocsperformancerisk"></a>

```json
0
```

<h2 id="tocS_Rank">Rank</h2>
<!-- backwards compatibility -->
<a id="schemarank"></a>
<a id="schema_Rank"></a>
<a id="tocSrank"></a>
<a id="tocsrank"></a>

```json
0
```

<h2 id="tocS_SavingsOpportunity">SavingsOpportunity</h2>
<!-- backwards compatibility -->
<a id="schemasavingsopportunity"></a>
<a id="schema_SavingsOpportunity"></a>
<a id="tocSsavingsopportunity"></a>
<a id="tocssavingsopportunity"></a>

```json
{
  "savingsOpportunityPercentage": {},
  "estimatedMonthlySavings": {
    "currency": {},
    "value": {}
  }
}
```

<p>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.</p> <p>Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.</p> <important> <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as activate <b>Receive Amazon EC2 resource recommendations</b> in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost with Rightsizing Recommendations</a> in the <i>Cost Management User Guide</i>.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|savingsOpportunityPercentage|object|false|none|none|
|estimatedMonthlySavings|object|false|none|none|

<h2 id="tocS_MigrationEffort">MigrationEffort</h2>
<!-- backwards compatibility -->
<a id="schemamigrationeffort"></a>
<a id="schema_MigrationEffort"></a>
<a id="tocSmigrationeffort"></a>
<a id="tocsmigrationeffort"></a>

```json
"VeryLow"
```

<h2 id="tocS_AutoScalingGroupRecommendationOption">AutoScalingGroupRecommendationOption</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouprecommendationoption"></a>
<a id="schema_AutoScalingGroupRecommendationOption"></a>
<a id="tocSautoscalinggrouprecommendationoption"></a>
<a id="tocsautoscalinggrouprecommendationoption"></a>

```json
{
  "configuration": {
    "desiredCapacity": {},
    "minSize": {},
    "maxSize": {},
    "instanceType": {}
  },
  "projectedUtilizationMetrics": {},
  "performanceRisk": {},
  "rank": {},
  "savingsOpportunity": {
    "savingsOpportunityPercentage": {},
    "estimatedMonthlySavings": {
      "currency": {},
      "value": {}
    }
  },
  "migrationEffort": {}
}
```

Describes a recommendation option for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|
|projectedUtilizationMetrics|object|false|none|none|
|performanceRisk|object|false|none|none|
|rank|object|false|none|none|
|savingsOpportunity|object|false|none|none|
|migrationEffort|object|false|none|none|

<h2 id="tocS_AutoScalingGroupRecommendations">AutoScalingGroupRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouprecommendations"></a>
<a id="schema_AutoScalingGroupRecommendations"></a>
<a id="tocSautoscalinggrouprecommendations"></a>
<a id="tocsautoscalinggrouprecommendations"></a>

```json
[
  {
    "accountId": {},
    "autoScalingGroupArn": {},
    "autoScalingGroupName": {},
    "finding": {},
    "utilizationMetrics": {},
    "lookBackPeriodInDays": {},
    "currentConfiguration": {
      "desiredCapacity": {},
      "minSize": {},
      "maxSize": {},
      "instanceType": {}
    },
    "recommendationOptions": {},
    "lastRefreshTimestamp": {},
    "currentPerformanceRisk": {},
    "effectiveRecommendationPreferences": {
      "cpuVendorArchitectures": {},
      "enhancedInfrastructureMetrics": {},
      "inferredWorkloadTypes": {},
      "externalMetricsPreference": {
        "source": {}
      }
    },
    "inferredWorkloadTypes": {}
  }
]
```

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"string"
```

<h2 id="tocS_ContainerName">ContainerName</h2>
<!-- backwards compatibility -->
<a id="schemacontainername"></a>
<a id="schema_ContainerName"></a>
<a id="tocScontainername"></a>
<a id="tocscontainername"></a>

```json
"string"
```

<h2 id="tocS_MemorySizeConfiguration">MemorySizeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemorysizeconfiguration"></a>
<a id="schema_MemorySizeConfiguration"></a>
<a id="tocSmemorysizeconfiguration"></a>
<a id="tocsmemorysizeconfiguration"></a>

```json
{
  "memory": {},
  "memoryReservation": {}
}
```

 The memory size configurations of a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|object|false|none|none|
|memoryReservation|object|false|none|none|

<h2 id="tocS_NullableCpu">NullableCpu</h2>
<!-- backwards compatibility -->
<a id="schemanullablecpu"></a>
<a id="schema_NullableCpu"></a>
<a id="tocSnullablecpu"></a>
<a id="tocsnullablecpu"></a>

```json
0
```

<h2 id="tocS_ContainerConfiguration">ContainerConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacontainerconfiguration"></a>
<a id="schema_ContainerConfiguration"></a>
<a id="tocScontainerconfiguration"></a>
<a id="tocscontainerconfiguration"></a>

```json
{
  "containerName": {},
  "memorySizeConfiguration": {
    "memory": {},
    "memoryReservation": {}
  },
  "cpu": {}
}
```

 Describes the container configurations within the tasks of your Amazon ECS service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|object|false|none|none|
|memorySizeConfiguration|object|false|none|none|
|cpu|object|false|none|none|

<h2 id="tocS_ContainerConfigurations">ContainerConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemacontainerconfigurations"></a>
<a id="schema_ContainerConfigurations"></a>
<a id="tocScontainerconfigurations"></a>
<a id="tocscontainerconfigurations"></a>

```json
[
  {
    "containerName": {},
    "memorySizeConfiguration": {
      "memory": {},
      "memoryReservation": {}
    },
    "cpu": {}
  }
]
```

<h2 id="tocS_ContainerRecommendation">ContainerRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemacontainerrecommendation"></a>
<a id="schema_ContainerRecommendation"></a>
<a id="tocScontainerrecommendation"></a>
<a id="tocscontainerrecommendation"></a>

```json
{
  "containerName": {},
  "memorySizeConfiguration": {
    "memory": {},
    "memoryReservation": {}
  },
  "cpu": {}
}
```

 The CPU and memory recommendations for a container within the tasks of your Amazon ECS service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|object|false|none|none|
|memorySizeConfiguration|object|false|none|none|
|cpu|object|false|none|none|

<h2 id="tocS_ContainerRecommendations">ContainerRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemacontainerrecommendations"></a>
<a id="schema_ContainerRecommendations"></a>
<a id="tocScontainerrecommendations"></a>
<a id="tocscontainerrecommendations"></a>

```json
[
  {
    "containerName": {},
    "memorySizeConfiguration": {
      "memory": {},
      "memoryReservation": {}
    },
    "cpu": {}
  }
]
```

<h2 id="tocS_CpuSize">CpuSize</h2>
<!-- backwards compatibility -->
<a id="schemacpusize"></a>
<a id="schema_CpuSize"></a>
<a id="tocScpusize"></a>
<a id="tocscpusize"></a>

```json
0
```

<h2 id="tocS_CpuVendorArchitecture">CpuVendorArchitecture</h2>
<!-- backwards compatibility -->
<a id="schemacpuvendorarchitecture"></a>
<a id="schema_CpuVendorArchitecture"></a>
<a id="tocScpuvendorarchitecture"></a>
<a id="tocscpuvendorarchitecture"></a>

```json
"AWS_ARM64"
```

<h2 id="tocS_CpuVendorArchitectures">CpuVendorArchitectures</h2>
<!-- backwards compatibility -->
<a id="schemacpuvendorarchitectures"></a>
<a id="schema_CpuVendorArchitectures"></a>
<a id="tocScpuvendorarchitectures"></a>
<a id="tocscpuvendorarchitectures"></a>

```json
[
  "AWS_ARM64"
]
```

<h2 id="tocS_CreationTimestamp">CreationTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemacreationtimestamp"></a>
<a id="schema_CreationTimestamp"></a>
<a id="tocScreationtimestamp"></a>
<a id="tocscreationtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"USD"
```

<h2 id="tocS_CurrentInstanceType">CurrentInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemacurrentinstancetype"></a>
<a id="schema_CurrentInstanceType"></a>
<a id="tocScurrentinstancetype"></a>
<a id="tocscurrentinstancetype"></a>

```json
"string"
```

<h2 id="tocS_High">High</h2>
<!-- backwards compatibility -->
<a id="schemahigh"></a>
<a id="schema_High"></a>
<a id="tocShigh"></a>
<a id="tocshigh"></a>

```json
0
```

<h2 id="tocS_Medium">Medium</h2>
<!-- backwards compatibility -->
<a id="schemamedium"></a>
<a id="schema_Medium"></a>
<a id="tocSmedium"></a>
<a id="tocsmedium"></a>

```json
0
```

<h2 id="tocS_Low">Low</h2>
<!-- backwards compatibility -->
<a id="schemalow"></a>
<a id="schema_Low"></a>
<a id="tocSlow"></a>
<a id="tocslow"></a>

```json
0
```

<h2 id="tocS_VeryLow">VeryLow</h2>
<!-- backwards compatibility -->
<a id="schemaverylow"></a>
<a id="schema_VeryLow"></a>
<a id="tocSverylow"></a>
<a id="tocsverylow"></a>

```json
0
```

<h2 id="tocS_CurrentPerformanceRiskRatings">CurrentPerformanceRiskRatings</h2>
<!-- backwards compatibility -->
<a id="schemacurrentperformanceriskratings"></a>
<a id="schema_CurrentPerformanceRiskRatings"></a>
<a id="tocScurrentperformanceriskratings"></a>
<a id="tocscurrentperformanceriskratings"></a>

```json
{
  "high": {},
  "medium": {},
  "low": {},
  "veryLow": {}
}
```

<p>Describes the performance risk ratings for a given resource type.</p> <p>Resources with a <code>high</code> or <code>medium</code> rating are at risk of not meeting the performance needs of their workloads, while resources with a <code>low</code> rating are performing well in their workloads.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|object|false|none|none|
|medium|object|false|none|none|
|low|object|false|none|none|
|veryLow|object|false|none|none|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"Ec2Instance"
```

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
{
  "name": {},
  "value": {}
}
```

<p>Describes the scope of a recommendation preference.</p> <p>Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p> <note> <p>You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of <code>ResourceArn</code> and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_RecommendationPreferenceNames">RecommendationPreferenceNames</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationpreferencenames"></a>
<a id="schema_RecommendationPreferenceNames"></a>
<a id="tocSrecommendationpreferencenames"></a>
<a id="tocsrecommendationpreferencenames"></a>

```json
[
  "EnhancedInfrastructureMetrics"
]
```

<h2 id="tocS_JobIds">JobIds</h2>
<!-- backwards compatibility -->
<a id="schemajobids"></a>
<a id="schema_JobIds"></a>
<a id="tocSjobids"></a>
<a id="tocsjobids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JobFilters">JobFilters</h2>
<!-- backwards compatibility -->
<a id="schemajobfilters"></a>
<a id="schema_JobFilters"></a>
<a id="tocSjobfilters"></a>
<a id="tocsjobfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_RecommendationExportJobs">RecommendationExportJobs</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationexportjobs"></a>
<a id="schema_RecommendationExportJobs"></a>
<a id="tocSrecommendationexportjobs"></a>
<a id="tocsrecommendationexportjobs"></a>

```json
[
  {
    "jobId": {},
    "destination": {
      "s3": {
        "bucket": {},
        "key": {},
        "metadataKey": {}
      }
    },
    "resourceType": {},
    "status": {},
    "creationTimestamp": {},
    "lastUpdatedTimestamp": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_DestinationBucket">DestinationBucket</h2>
<!-- backwards compatibility -->
<a id="schemadestinationbucket"></a>
<a id="schema_DestinationBucket"></a>
<a id="tocSdestinationbucket"></a>
<a id="tocsdestinationbucket"></a>

```json
"string"
```

<h2 id="tocS_DestinationKey">DestinationKey</h2>
<!-- backwards compatibility -->
<a id="schemadestinationkey"></a>
<a id="schema_DestinationKey"></a>
<a id="tocSdestinationkey"></a>
<a id="tocsdestinationkey"></a>

```json
"string"
```

<h2 id="tocS_DestinationKeyPrefix">DestinationKeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemadestinationkeyprefix"></a>
<a id="schema_DestinationKeyPrefix"></a>
<a id="tocSdestinationkeyprefix"></a>
<a id="tocsdestinationkeyprefix"></a>

```json
"string"
```

<h2 id="tocS_EBSFilterName">EBSFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaebsfiltername"></a>
<a id="schema_EBSFilterName"></a>
<a id="tocSebsfiltername"></a>
<a id="tocsebsfiltername"></a>

```json
"Finding"
```

<h2 id="tocS_FilterValues">FilterValues</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalues"></a>
<a id="schema_FilterValues"></a>
<a id="tocSfiltervalues"></a>
<a id="tocsfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EBSFilter">EBSFilter</h2>
<!-- backwards compatibility -->
<a id="schemaebsfilter"></a>
<a id="schema_EBSFilter"></a>
<a id="tocSebsfilter"></a>
<a id="tocsebsfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

<p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p> <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_EBSFilters">EBSFilters</h2>
<!-- backwards compatibility -->
<a id="schemaebsfilters"></a>
<a id="schema_EBSFilters"></a>
<a id="tocSebsfilters"></a>
<a id="tocsebsfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_EBSFinding">EBSFinding</h2>
<!-- backwards compatibility -->
<a id="schemaebsfinding"></a>
<a id="schema_EBSFinding"></a>
<a id="tocSebsfinding"></a>
<a id="tocsebsfinding"></a>

```json
"Optimized"
```

<h2 id="tocS_EBSMetricName">EBSMetricName</h2>
<!-- backwards compatibility -->
<a id="schemaebsmetricname"></a>
<a id="schema_EBSMetricName"></a>
<a id="tocSebsmetricname"></a>
<a id="tocsebsmetricname"></a>

```json
"VolumeReadOpsPerSecond"
```

<h2 id="tocS_MetricStatistic">MetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemametricstatistic"></a>
<a id="schema_MetricStatistic"></a>
<a id="tocSmetricstatistic"></a>
<a id="tocsmetricstatistic"></a>

```json
"Maximum"
```

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
0
```

<h2 id="tocS_EBSUtilizationMetric">EBSUtilizationMetric</h2>
<!-- backwards compatibility -->
<a id="schemaebsutilizationmetric"></a>
<a id="schema_EBSUtilizationMetric"></a>
<a id="tocSebsutilizationmetric"></a>
<a id="tocsebsutilizationmetric"></a>

```json
{
  "name": {},
  "statistic": {},
  "value": {}
}
```

<p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|statistic|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_EBSUtilizationMetrics">EBSUtilizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaebsutilizationmetrics"></a>
<a id="schema_EBSUtilizationMetrics"></a>
<a id="tocSebsutilizationmetrics"></a>
<a id="tocsebsutilizationmetrics"></a>

```json
[
  {
    "name": {},
    "statistic": {},
    "value": {}
  }
]
```

<h2 id="tocS_ECSServiceLaunchType">ECSServiceLaunchType</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicelaunchtype"></a>
<a id="schema_ECSServiceLaunchType"></a>
<a id="tocSecsservicelaunchtype"></a>
<a id="tocsecsservicelaunchtype"></a>

```json
"EC2"
```

<h2 id="tocS_ECSServiceMetricName">ECSServiceMetricName</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicemetricname"></a>
<a id="schema_ECSServiceMetricName"></a>
<a id="tocSecsservicemetricname"></a>
<a id="tocsecsservicemetricname"></a>

```json
"Cpu"
```

<h2 id="tocS_ECSServiceMetricStatistic">ECSServiceMetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicemetricstatistic"></a>
<a id="schema_ECSServiceMetricStatistic"></a>
<a id="tocSecsservicemetricstatistic"></a>
<a id="tocsecsservicemetricstatistic"></a>

```json
"Maximum"
```

<h2 id="tocS_Timestamps">Timestamps</h2>
<!-- backwards compatibility -->
<a id="schematimestamps"></a>
<a id="schema_Timestamps"></a>
<a id="tocStimestamps"></a>
<a id="tocstimestamps"></a>

```json
[
  "1970-01-01T00:00:00Z"
]
```

<h2 id="tocS_MetricValues">MetricValues</h2>
<!-- backwards compatibility -->
<a id="schemametricvalues"></a>
<a id="schema_MetricValues"></a>
<a id="tocSmetricvalues"></a>
<a id="tocsmetricvalues"></a>

```json
[
  0
]
```

<h2 id="tocS_ECSServiceProjectedMetric">ECSServiceProjectedMetric</h2>
<!-- backwards compatibility -->
<a id="schemaecsserviceprojectedmetric"></a>
<a id="schema_ECSServiceProjectedMetric"></a>
<a id="tocSecsserviceprojectedmetric"></a>
<a id="tocsecsserviceprojectedmetric"></a>

```json
{
  "name": {},
  "timestamps": {},
  "upperBoundValues": {},
  "lowerBoundValues": {}
}
```

<p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|timestamps|object|false|none|none|
|upperBoundValues|object|false|none|none|
|lowerBoundValues|object|false|none|none|

<h2 id="tocS_ECSServiceProjectedMetrics">ECSServiceProjectedMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaecsserviceprojectedmetrics"></a>
<a id="schema_ECSServiceProjectedMetrics"></a>
<a id="tocSecsserviceprojectedmetrics"></a>
<a id="tocsecsserviceprojectedmetrics"></a>

```json
[
  {
    "name": {},
    "timestamps": {},
    "upperBoundValues": {},
    "lowerBoundValues": {}
  }
]
```

<h2 id="tocS_LowerBoundValue">LowerBoundValue</h2>
<!-- backwards compatibility -->
<a id="schemalowerboundvalue"></a>
<a id="schema_LowerBoundValue"></a>
<a id="tocSlowerboundvalue"></a>
<a id="tocslowerboundvalue"></a>

```json
0
```

<h2 id="tocS_UpperBoundValue">UpperBoundValue</h2>
<!-- backwards compatibility -->
<a id="schemaupperboundvalue"></a>
<a id="schema_UpperBoundValue"></a>
<a id="tocSupperboundvalue"></a>
<a id="tocsupperboundvalue"></a>

```json
0
```

<h2 id="tocS_ECSServiceProjectedUtilizationMetric">ECSServiceProjectedUtilizationMetric</h2>
<!-- backwards compatibility -->
<a id="schemaecsserviceprojectedutilizationmetric"></a>
<a id="schema_ECSServiceProjectedUtilizationMetric"></a>
<a id="tocSecsserviceprojectedutilizationmetric"></a>
<a id="tocsecsserviceprojectedutilizationmetric"></a>

```json
{
  "name": {},
  "statistic": {},
  "lowerBoundValue": {},
  "upperBoundValue": {}
}
```

<p> Describes the projected utilization metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|statistic|object|false|none|none|
|lowerBoundValue|object|false|none|none|
|upperBoundValue|object|false|none|none|

<h2 id="tocS_ECSServiceProjectedUtilizationMetrics">ECSServiceProjectedUtilizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaecsserviceprojectedutilizationmetrics"></a>
<a id="schema_ECSServiceProjectedUtilizationMetrics"></a>
<a id="tocSecsserviceprojectedutilizationmetrics"></a>
<a id="tocsecsserviceprojectedutilizationmetrics"></a>

```json
[
  {
    "name": {},
    "statistic": {},
    "lowerBoundValue": {},
    "upperBoundValue": {}
  }
]
```

<h2 id="tocS_ServiceArn">ServiceArn</h2>
<!-- backwards compatibility -->
<a id="schemaservicearn"></a>
<a id="schema_ServiceArn"></a>
<a id="tocSservicearn"></a>
<a id="tocsservicearn"></a>

```json
"string"
```

<h2 id="tocS_ServiceConfiguration">ServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconfiguration"></a>
<a id="schema_ServiceConfiguration"></a>
<a id="tocSserviceconfiguration"></a>
<a id="tocsserviceconfiguration"></a>

```json
{
  "memory": {},
  "cpu": {},
  "containerConfigurations": {},
  "autoScalingConfiguration": {},
  "taskDefinitionArn": {}
}
```

 The Amazon ECS service configurations used for recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|object|false|none|none|
|cpu|object|false|none|none|
|containerConfigurations|object|false|none|none|
|autoScalingConfiguration|object|false|none|none|
|taskDefinitionArn|object|false|none|none|

<h2 id="tocS_ECSServiceUtilizationMetrics">ECSServiceUtilizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaecsserviceutilizationmetrics"></a>
<a id="schema_ECSServiceUtilizationMetrics"></a>
<a id="tocSecsserviceutilizationmetrics"></a>
<a id="tocsecsserviceutilizationmetrics"></a>

```json
[
  {
    "name": {},
    "statistic": {},
    "value": {}
  }
]
```

<h2 id="tocS_ECSServiceRecommendationFinding">ECSServiceRecommendationFinding</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationfinding"></a>
<a id="schema_ECSServiceRecommendationFinding"></a>
<a id="tocSecsservicerecommendationfinding"></a>
<a id="tocsecsservicerecommendationfinding"></a>

```json
"Optimized"
```

<h2 id="tocS_ECSServiceRecommendationFindingReasonCodes">ECSServiceRecommendationFindingReasonCodes</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationfindingreasoncodes"></a>
<a id="schema_ECSServiceRecommendationFindingReasonCodes"></a>
<a id="tocSecsservicerecommendationfindingreasoncodes"></a>
<a id="tocsecsservicerecommendationfindingreasoncodes"></a>

```json
[
  "MemoryOverprovisioned"
]
```

<h2 id="tocS_ECSServiceRecommendationOptions">ECSServiceRecommendationOptions</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationoptions"></a>
<a id="schema_ECSServiceRecommendationOptions"></a>
<a id="tocSecsservicerecommendationoptions"></a>
<a id="tocsecsservicerecommendationoptions"></a>

```json
[
  {
    "memory": {},
    "cpu": {},
    "savingsOpportunity": {
      "savingsOpportunityPercentage": {},
      "estimatedMonthlySavings": {
        "currency": {},
        "value": {}
      }
    },
    "projectedUtilizationMetrics": {},
    "containerRecommendations": {}
  }
]
```

<h2 id="tocS_ECSServiceRecommendation">ECSServiceRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendation"></a>
<a id="schema_ECSServiceRecommendation"></a>
<a id="tocSecsservicerecommendation"></a>
<a id="tocsecsservicerecommendation"></a>

```json
{
  "serviceArn": {},
  "accountId": {},
  "currentServiceConfiguration": {
    "memory": {},
    "cpu": {},
    "containerConfigurations": {},
    "autoScalingConfiguration": {},
    "taskDefinitionArn": {}
  },
  "utilizationMetrics": {},
  "lookbackPeriodInDays": {},
  "launchType": {},
  "lastRefreshTimestamp": {},
  "finding": {},
  "findingReasonCodes": {},
  "serviceRecommendationOptions": {},
  "currentPerformanceRisk": {}
}
```

 Describes an Amazon ECS service recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceArn|object|false|none|none|
|accountId|object|false|none|none|
|currentServiceConfiguration|object|false|none|none|
|utilizationMetrics|object|false|none|none|
|lookbackPeriodInDays|object|false|none|none|
|launchType|object|false|none|none|
|lastRefreshTimestamp|object|false|none|none|
|finding|object|false|none|none|
|findingReasonCodes|object|false|none|none|
|serviceRecommendationOptions|object|false|none|none|
|currentPerformanceRisk|object|false|none|none|

<h2 id="tocS_ECSServiceRecommendationFilterName">ECSServiceRecommendationFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationfiltername"></a>
<a id="schema_ECSServiceRecommendationFilterName"></a>
<a id="tocSecsservicerecommendationfiltername"></a>
<a id="tocsecsservicerecommendationfiltername"></a>

```json
"Finding"
```

<h2 id="tocS_ECSServiceRecommendationFilter">ECSServiceRecommendationFilter</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationfilter"></a>
<a id="schema_ECSServiceRecommendationFilter"></a>
<a id="tocSecsservicerecommendationfilter"></a>
<a id="tocsecsservicerecommendationfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

 Describes a filter that returns a more specific list of Amazon ECS service recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ECSServiceRecommendationFilters">ECSServiceRecommendationFilters</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationfilters"></a>
<a id="schema_ECSServiceRecommendationFilters"></a>
<a id="tocSecsservicerecommendationfilters"></a>
<a id="tocsecsservicerecommendationfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_ECSServiceRecommendationFindingReasonCode">ECSServiceRecommendationFindingReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationfindingreasoncode"></a>
<a id="schema_ECSServiceRecommendationFindingReasonCode"></a>
<a id="tocSecsservicerecommendationfindingreasoncode"></a>
<a id="tocsecsservicerecommendationfindingreasoncode"></a>

```json
"MemoryOverprovisioned"
```

<h2 id="tocS_NullableMemory">NullableMemory</h2>
<!-- backwards compatibility -->
<a id="schemanullablememory"></a>
<a id="schema_NullableMemory"></a>
<a id="tocSnullablememory"></a>
<a id="tocsnullablememory"></a>

```json
0
```

<h2 id="tocS_ECSServiceRecommendationOption">ECSServiceRecommendationOption</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendationoption"></a>
<a id="schema_ECSServiceRecommendationOption"></a>
<a id="tocSecsservicerecommendationoption"></a>
<a id="tocsecsservicerecommendationoption"></a>

```json
{
  "memory": {},
  "cpu": {},
  "savingsOpportunity": {
    "savingsOpportunityPercentage": {},
    "estimatedMonthlySavings": {
      "currency": {},
      "value": {}
    }
  },
  "projectedUtilizationMetrics": {},
  "containerRecommendations": {}
}
```

 Describes the recommendation options for an Amazon ECS service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|object|false|none|none|
|cpu|object|false|none|none|
|savingsOpportunity|[SavingsOpportunity](#schemasavingsopportunity)|false|none|<p>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.</p> <p>Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.</p> <important> <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as activate <b>Receive Amazon EC2 resource recommendations</b> in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost with Rightsizing Recommendations</a> in the <i>Cost Management User Guide</i>.</p> </important>|
|projectedUtilizationMetrics|object|false|none|none|
|containerRecommendations|object|false|none|none|

<h2 id="tocS_ECSServiceRecommendations">ECSServiceRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendations"></a>
<a id="schema_ECSServiceRecommendations"></a>
<a id="tocSecsservicerecommendations"></a>
<a id="tocsecsservicerecommendations"></a>

```json
[
  {
    "serviceArn": {},
    "accountId": {},
    "currentServiceConfiguration": {
      "memory": {},
      "cpu": {},
      "containerConfigurations": {},
      "autoScalingConfiguration": {},
      "taskDefinitionArn": {}
    },
    "utilizationMetrics": {},
    "lookbackPeriodInDays": {},
    "launchType": {},
    "lastRefreshTimestamp": {},
    "finding": {},
    "findingReasonCodes": {},
    "serviceRecommendationOptions": {},
    "currentPerformanceRisk": {}
  }
]
```

<h2 id="tocS_MemorySize">MemorySize</h2>
<!-- backwards compatibility -->
<a id="schemamemorysize"></a>
<a id="schema_MemorySize"></a>
<a id="tocSmemorysize"></a>
<a id="tocsmemorysize"></a>

```json
0
```

<h2 id="tocS_ECSServiceRecommendedOptionProjectedMetric">ECSServiceRecommendedOptionProjectedMetric</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendedoptionprojectedmetric"></a>
<a id="schema_ECSServiceRecommendedOptionProjectedMetric"></a>
<a id="tocSecsservicerecommendedoptionprojectedmetric"></a>
<a id="tocsecsservicerecommendedoptionprojectedmetric"></a>

```json
{
  "recommendedCpuUnits": {},
  "recommendedMemorySize": {},
  "projectedMetrics": {}
}
```

<p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendedCpuUnits|object|false|none|none|
|recommendedMemorySize|object|false|none|none|
|projectedMetrics|object|false|none|none|

<h2 id="tocS_ECSServiceRecommendedOptionProjectedMetrics">ECSServiceRecommendedOptionProjectedMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaecsservicerecommendedoptionprojectedmetrics"></a>
<a id="schema_ECSServiceRecommendedOptionProjectedMetrics"></a>
<a id="tocSecsservicerecommendedoptionprojectedmetrics"></a>
<a id="tocsecsservicerecommendedoptionprojectedmetrics"></a>

```json
[
  {
    "recommendedCpuUnits": {},
    "recommendedMemorySize": {},
    "projectedMetrics": {}
  }
]
```

<h2 id="tocS_ECSServiceUtilizationMetric">ECSServiceUtilizationMetric</h2>
<!-- backwards compatibility -->
<a id="schemaecsserviceutilizationmetric"></a>
<a id="schema_ECSServiceUtilizationMetric"></a>
<a id="tocSecsserviceutilizationmetric"></a>
<a id="tocsecsserviceutilizationmetric"></a>

```json
{
  "name": {},
  "statistic": {},
  "value": {}
}
```

<p> Describes the utilization metric of an Amazon ECS service. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|statistic|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_EnhancedInfrastructureMetrics">EnhancedInfrastructureMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedinfrastructuremetrics"></a>
<a id="schema_EnhancedInfrastructureMetrics"></a>
<a id="tocSenhancedinfrastructuremetrics"></a>
<a id="tocsenhancedinfrastructuremetrics"></a>

```json
"Active"
```

<h2 id="tocS_InferredWorkloadTypesPreference">InferredWorkloadTypesPreference</h2>
<!-- backwards compatibility -->
<a id="schemainferredworkloadtypespreference"></a>
<a id="schema_InferredWorkloadTypesPreference"></a>
<a id="tocSinferredworkloadtypespreference"></a>
<a id="tocsinferredworkloadtypespreference"></a>

```json
"Active"
```

<h2 id="tocS_ExternalMetricsPreference">ExternalMetricsPreference</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmetricspreference"></a>
<a id="schema_ExternalMetricsPreference"></a>
<a id="tocSexternalmetricspreference"></a>
<a id="tocsexternalmetricspreference"></a>

```json
{
  "source": {}
}
```

 Describes the external metrics preferences for EC2 rightsizing recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|

<h2 id="tocS_EnrollmentFilterName">EnrollmentFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaenrollmentfiltername"></a>
<a id="schema_EnrollmentFilterName"></a>
<a id="tocSenrollmentfiltername"></a>
<a id="tocsenrollmentfiltername"></a>

```json
"Status"
```

<h2 id="tocS_EnrollmentFilter">EnrollmentFilter</h2>
<!-- backwards compatibility -->
<a id="schemaenrollmentfilter"></a>
<a id="schema_EnrollmentFilter"></a>
<a id="tocSenrollmentfilter"></a>
<a id="tocsenrollmentfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_EnrollmentFilters">EnrollmentFilters</h2>
<!-- backwards compatibility -->
<a id="schemaenrollmentfilters"></a>
<a id="schema_EnrollmentFilters"></a>
<a id="tocSenrollmentfilters"></a>
<a id="tocsenrollmentfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
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

<h2 id="tocS_EstimatedMonthlySavings">EstimatedMonthlySavings</h2>
<!-- backwards compatibility -->
<a id="schemaestimatedmonthlysavings"></a>
<a id="schema_EstimatedMonthlySavings"></a>
<a id="tocSestimatedmonthlysavings"></a>
<a id="tocsestimatedmonthlysavings"></a>

```json
{
  "currency": {},
  "value": {}
}
```

<p>Describes the estimated monthly savings amount possible, based on On-Demand instance pricing, by adopting Compute Optimizer recommendations for a given resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation">Estimated monthly savings and savings opportunities</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_ExportableAutoScalingGroupFields">ExportableAutoScalingGroupFields</h2>
<!-- backwards compatibility -->
<a id="schemaexportableautoscalinggroupfields"></a>
<a id="schema_ExportableAutoScalingGroupFields"></a>
<a id="tocSexportableautoscalinggroupfields"></a>
<a id="tocsexportableautoscalinggroupfields"></a>

```json
[
  "AccountId"
]
```

<h2 id="tocS_S3DestinationConfig">S3DestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationconfig"></a>
<a id="schema_S3DestinationConfig"></a>
<a id="tocSs3destinationconfig"></a>
<a id="tocss3destinationconfig"></a>

```json
{
  "bucket": {},
  "keyPrefix": {}
}
```

<p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|keyPrefix|object|false|none|none|

<h2 id="tocS_FileFormat">FileFormat</h2>
<!-- backwards compatibility -->
<a id="schemafileformat"></a>
<a id="schema_FileFormat"></a>
<a id="tocSfileformat"></a>
<a id="tocsfileformat"></a>

```json
"Csv"
```

<h2 id="tocS_IncludeMemberAccounts">IncludeMemberAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaincludememberaccounts"></a>
<a id="schema_IncludeMemberAccounts"></a>
<a id="tocSincludememberaccounts"></a>
<a id="tocsincludememberaccounts"></a>

```json
true
```

<h2 id="tocS_RecommendationPreferences">RecommendationPreferences</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationpreferences"></a>
<a id="schema_RecommendationPreferences"></a>
<a id="tocSrecommendationpreferences"></a>
<a id="tocsrecommendationpreferences"></a>

```json
{
  "cpuVendorArchitectures": {}
}
```

Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, and <a>GetEC2RecommendationProjectedMetrics</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuVendorArchitectures|object|false|none|none|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_S3Destination">S3Destination</h2>
<!-- backwards compatibility -->
<a id="schemas3destination"></a>
<a id="schema_S3Destination"></a>
<a id="tocSs3destination"></a>
<a id="tocss3destination"></a>

```json
{
  "bucket": {},
  "key": {},
  "metadataKey": {}
}
```

Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|key|object|false|none|none|
|metadataKey|object|false|none|none|

<h2 id="tocS_ExportDestination">ExportDestination</h2>
<!-- backwards compatibility -->
<a id="schemaexportdestination"></a>
<a id="schema_ExportDestination"></a>
<a id="tocSexportdestination"></a>
<a id="tocsexportdestination"></a>

```json
{
  "s3": {
    "bucket": {},
    "key": {},
    "metadataKey": {}
  }
}
```

Describes the destination of the recommendations export and metadata files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|false|none|none|

<h2 id="tocS_ExportableVolumeFields">ExportableVolumeFields</h2>
<!-- backwards compatibility -->
<a id="schemaexportablevolumefields"></a>
<a id="schema_ExportableVolumeFields"></a>
<a id="tocSexportablevolumefields"></a>
<a id="tocsexportablevolumefields"></a>

```json
[
  "AccountId"
]
```

<h2 id="tocS_ExportableInstanceFields">ExportableInstanceFields</h2>
<!-- backwards compatibility -->
<a id="schemaexportableinstancefields"></a>
<a id="schema_ExportableInstanceFields"></a>
<a id="tocSexportableinstancefields"></a>
<a id="tocsexportableinstancefields"></a>

```json
[
  "AccountId"
]
```

<h2 id="tocS_ExportableECSServiceFields">ExportableECSServiceFields</h2>
<!-- backwards compatibility -->
<a id="schemaexportableecsservicefields"></a>
<a id="schema_ExportableECSServiceFields"></a>
<a id="tocSexportableecsservicefields"></a>
<a id="tocsexportableecsservicefields"></a>

```json
[
  "AccountId"
]
```

<h2 id="tocS_LambdaFunctionRecommendationFilters">LambdaFunctionRecommendationFilters</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendationfilters"></a>
<a id="schema_LambdaFunctionRecommendationFilters"></a>
<a id="tocSlambdafunctionrecommendationfilters"></a>
<a id="tocslambdafunctionrecommendationfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_ExportableLambdaFunctionFields">ExportableLambdaFunctionFields</h2>
<!-- backwards compatibility -->
<a id="schemaexportablelambdafunctionfields"></a>
<a id="schema_ExportableLambdaFunctionFields"></a>
<a id="tocSexportablelambdafunctionfields"></a>
<a id="tocsexportablelambdafunctionfields"></a>

```json
[
  "AccountId"
]
```

<h2 id="tocS_ExportableAutoScalingGroupField">ExportableAutoScalingGroupField</h2>
<!-- backwards compatibility -->
<a id="schemaexportableautoscalinggroupfield"></a>
<a id="schema_ExportableAutoScalingGroupField"></a>
<a id="tocSexportableautoscalinggroupfield"></a>
<a id="tocsexportableautoscalinggroupfield"></a>

```json
"AccountId"
```

<h2 id="tocS_ExportableECSServiceField">ExportableECSServiceField</h2>
<!-- backwards compatibility -->
<a id="schemaexportableecsservicefield"></a>
<a id="schema_ExportableECSServiceField"></a>
<a id="tocSexportableecsservicefield"></a>
<a id="tocsexportableecsservicefield"></a>

```json
"AccountId"
```

<h2 id="tocS_ExportableInstanceField">ExportableInstanceField</h2>
<!-- backwards compatibility -->
<a id="schemaexportableinstancefield"></a>
<a id="schema_ExportableInstanceField"></a>
<a id="tocSexportableinstancefield"></a>
<a id="tocsexportableinstancefield"></a>

```json
"AccountId"
```

<h2 id="tocS_ExportableLambdaFunctionField">ExportableLambdaFunctionField</h2>
<!-- backwards compatibility -->
<a id="schemaexportablelambdafunctionfield"></a>
<a id="schema_ExportableLambdaFunctionField"></a>
<a id="tocSexportablelambdafunctionfield"></a>
<a id="tocsexportablelambdafunctionfield"></a>

```json
"AccountId"
```

<h2 id="tocS_ExportableVolumeField">ExportableVolumeField</h2>
<!-- backwards compatibility -->
<a id="schemaexportablevolumefield"></a>
<a id="schema_ExportableVolumeField"></a>
<a id="tocSexportablevolumefield"></a>
<a id="tocsexportablevolumefield"></a>

```json
"AccountId"
```

<h2 id="tocS_ExternalMetricsSource">ExternalMetricsSource</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmetricssource"></a>
<a id="schema_ExternalMetricsSource"></a>
<a id="tocSexternalmetricssource"></a>
<a id="tocsexternalmetricssource"></a>

```json
"Datadog"
```

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"string"
```

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"Finding"
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

<p>Describes a filter that returns a more specific list of recommendations. Use this filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_FindingReasonCode">FindingReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemafindingreasoncode"></a>
<a id="schema_FindingReasonCode"></a>
<a id="tocSfindingreasoncode"></a>
<a id="tocsfindingreasoncode"></a>

```json
"MemoryOverprovisioned"
```

<h2 id="tocS_FunctionArn">FunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarn"></a>
<a id="schema_FunctionArn"></a>
<a id="tocSfunctionarn"></a>
<a id="tocsfunctionarn"></a>

```json
"string"
```

<h2 id="tocS_FunctionArns">FunctionArns</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarns"></a>
<a id="schema_FunctionArns"></a>
<a id="tocSfunctionarns"></a>
<a id="tocsfunctionarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FunctionVersion">FunctionVersion</h2>
<!-- backwards compatibility -->
<a id="schemafunctionversion"></a>
<a id="schema_FunctionVersion"></a>
<a id="tocSfunctionversion"></a>
<a id="tocsfunctionversion"></a>

```json
"string"
```

<h2 id="tocS_GetRecommendationErrors">GetRecommendationErrors</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationerrors"></a>
<a id="schema_GetRecommendationErrors"></a>
<a id="tocSgetrecommendationerrors"></a>
<a id="tocsgetrecommendationerrors"></a>

```json
[
  {
    "identifier": {},
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_VolumeArns">VolumeArns</h2>
<!-- backwards compatibility -->
<a id="schemavolumearns"></a>
<a id="schema_VolumeArns"></a>
<a id="tocSvolumearns"></a>
<a id="tocsvolumearns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VolumeRecommendations">VolumeRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemavolumerecommendations"></a>
<a id="schema_VolumeRecommendations"></a>
<a id="tocSvolumerecommendations"></a>
<a id="tocsvolumerecommendations"></a>

```json
[
  {
    "volumeArn": {},
    "accountId": {},
    "currentConfiguration": {
      "volumeType": {},
      "volumeSize": {},
      "volumeBaselineIOPS": {},
      "volumeBurstIOPS": {},
      "volumeBaselineThroughput": {},
      "volumeBurstThroughput": {},
      "rootVolume": {}
    },
    "finding": {},
    "utilizationMetrics": {},
    "lookBackPeriodInDays": {},
    "volumeRecommendationOptions": {},
    "lastRefreshTimestamp": {},
    "currentPerformanceRisk": {}
  }
]
```

<h2 id="tocS_InstanceArns">InstanceArns</h2>
<!-- backwards compatibility -->
<a id="schemainstancearns"></a>
<a id="schema_InstanceArns"></a>
<a id="tocSinstancearns"></a>
<a id="tocsinstancearns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceRecommendations">InstanceRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemainstancerecommendations"></a>
<a id="schema_InstanceRecommendations"></a>
<a id="tocSinstancerecommendations"></a>
<a id="tocsinstancerecommendations"></a>

```json
[
  {
    "instanceArn": {},
    "accountId": {},
    "instanceName": {},
    "currentInstanceType": {},
    "finding": {},
    "findingReasonCodes": {},
    "utilizationMetrics": {},
    "lookBackPeriodInDays": {},
    "recommendationOptions": {},
    "recommendationSources": {},
    "lastRefreshTimestamp": {},
    "currentPerformanceRisk": {},
    "effectiveRecommendationPreferences": {
      "cpuVendorArchitectures": {},
      "enhancedInfrastructureMetrics": {},
      "inferredWorkloadTypes": {},
      "externalMetricsPreference": {
        "source": {}
      }
    },
    "inferredWorkloadTypes": {},
    "instanceState": {}
  }
]
```

<h2 id="tocS_InstanceArn">InstanceArn</h2>
<!-- backwards compatibility -->
<a id="schemainstancearn"></a>
<a id="schema_InstanceArn"></a>
<a id="tocSinstancearn"></a>
<a id="tocsinstancearn"></a>

```json
"string"
```

<h2 id="tocS_Period">Period</h2>
<!-- backwards compatibility -->
<a id="schemaperiod"></a>
<a id="schema_Period"></a>
<a id="tocSperiod"></a>
<a id="tocsperiod"></a>

```json
0
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RecommendedOptionProjectedMetrics">RecommendedOptionProjectedMetrics</h2>
<!-- backwards compatibility -->
<a id="schemarecommendedoptionprojectedmetrics"></a>
<a id="schema_RecommendedOptionProjectedMetrics"></a>
<a id="tocSrecommendedoptionprojectedmetrics"></a>
<a id="tocsrecommendedoptionprojectedmetrics"></a>

```json
[
  {
    "recommendedInstanceType": {},
    "rank": {},
    "projectedMetrics": {}
  }
]
```

<h2 id="tocS_ServiceArns">ServiceArns</h2>
<!-- backwards compatibility -->
<a id="schemaservicearns"></a>
<a id="schema_ServiceArns"></a>
<a id="tocSservicearns"></a>
<a id="tocsservicearns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_MemberAccountsEnrolled">MemberAccountsEnrolled</h2>
<!-- backwards compatibility -->
<a id="schemamemberaccountsenrolled"></a>
<a id="schema_MemberAccountsEnrolled"></a>
<a id="tocSmemberaccountsenrolled"></a>
<a id="tocsmemberaccountsenrolled"></a>

```json
true
```

<h2 id="tocS_NumberOfMemberAccountsOptedIn">NumberOfMemberAccountsOptedIn</h2>
<!-- backwards compatibility -->
<a id="schemanumberofmemberaccountsoptedin"></a>
<a id="schema_NumberOfMemberAccountsOptedIn"></a>
<a id="tocSnumberofmemberaccountsoptedin"></a>
<a id="tocsnumberofmemberaccountsoptedin"></a>

```json
0
```

<h2 id="tocS_LambdaFunctionRecommendations">LambdaFunctionRecommendations</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendations"></a>
<a id="schema_LambdaFunctionRecommendations"></a>
<a id="tocSlambdafunctionrecommendations"></a>
<a id="tocslambdafunctionrecommendations"></a>

```json
[
  {
    "functionArn": {},
    "functionVersion": {},
    "accountId": {},
    "currentMemorySize": {},
    "numberOfInvocations": {},
    "utilizationMetrics": {},
    "lookbackPeriodInDays": {},
    "lastRefreshTimestamp": {},
    "finding": {},
    "findingReasonCodes": {},
    "memorySizeRecommendationOptions": {},
    "currentPerformanceRisk": {}
  }
]
```

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_GetRecommendationError">GetRecommendationError</h2>
<!-- backwards compatibility -->
<a id="schemagetrecommendationerror"></a>
<a id="schema_GetRecommendationError"></a>
<a id="tocSgetrecommendationerror"></a>
<a id="tocsgetrecommendationerror"></a>

```json
{
  "identifier": {},
  "code": {},
  "message": {}
}
```

<p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|object|false|none|none|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_RecommendationPreferencesDetails">RecommendationPreferencesDetails</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationpreferencesdetails"></a>
<a id="schema_RecommendationPreferencesDetails"></a>
<a id="tocSrecommendationpreferencesdetails"></a>
<a id="tocsrecommendationpreferencesdetails"></a>

```json
[
  {
    "scope": {
      "name": {},
      "value": {}
    },
    "resourceType": {},
    "enhancedInfrastructureMetrics": {},
    "inferredWorkloadTypes": {},
    "externalMetricsPreference": {
      "source": {}
    }
  }
]
```

<h2 id="tocS_RecommendationSummaries">RecommendationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsummaries"></a>
<a id="schema_RecommendationSummaries"></a>
<a id="tocSrecommendationsummaries"></a>
<a id="tocsrecommendationsummaries"></a>

```json
[
  {
    "summaries": {},
    "recommendationResourceType": {},
    "accountId": {},
    "savingsOpportunity": {
      "savingsOpportunityPercentage": {},
      "estimatedMonthlySavings": {
        "currency": {},
        "value": {}
      }
    },
    "currentPerformanceRiskRatings": {
      "high": {},
      "medium": {},
      "low": {},
      "veryLow": {}
    }
  }
]
```

<h2 id="tocS_InferredWorkloadType">InferredWorkloadType</h2>
<!-- backwards compatibility -->
<a id="schemainferredworkloadtype"></a>
<a id="schema_InferredWorkloadType"></a>
<a id="tocSinferredworkloadtype"></a>
<a id="tocsinferredworkloadtype"></a>

```json
"AmazonEmr"
```

<h2 id="tocS_InstanceName">InstanceName</h2>
<!-- backwards compatibility -->
<a id="schemainstancename"></a>
<a id="schema_InstanceName"></a>
<a id="tocSinstancename"></a>
<a id="tocsinstancename"></a>

```json
"string"
```

<h2 id="tocS_InstanceRecommendationFindingReasonCodes">InstanceRecommendationFindingReasonCodes</h2>
<!-- backwards compatibility -->
<a id="schemainstancerecommendationfindingreasoncodes"></a>
<a id="schema_InstanceRecommendationFindingReasonCodes"></a>
<a id="tocSinstancerecommendationfindingreasoncodes"></a>
<a id="tocsinstancerecommendationfindingreasoncodes"></a>

```json
[
  "CPUOverprovisioned"
]
```

<h2 id="tocS_RecommendationOptions">RecommendationOptions</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationoptions"></a>
<a id="schema_RecommendationOptions"></a>
<a id="tocSrecommendationoptions"></a>
<a id="tocsrecommendationoptions"></a>

```json
[
  {
    "instanceType": {},
    "projectedUtilizationMetrics": {},
    "platformDifferences": {},
    "performanceRisk": {},
    "rank": {},
    "savingsOpportunity": {
      "savingsOpportunityPercentage": {},
      "estimatedMonthlySavings": {
        "currency": {},
        "value": {}
      }
    },
    "migrationEffort": {}
  }
]
```

<h2 id="tocS_RecommendationSources">RecommendationSources</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsources"></a>
<a id="schema_RecommendationSources"></a>
<a id="tocSrecommendationsources"></a>
<a id="tocsrecommendationsources"></a>

```json
[
  {
    "recommendationSourceArn": {},
    "recommendationSourceType": {}
  }
]
```

<h2 id="tocS_InstanceState">InstanceState</h2>
<!-- backwards compatibility -->
<a id="schemainstancestate"></a>
<a id="schema_InstanceState"></a>
<a id="tocSinstancestate"></a>
<a id="tocsinstancestate"></a>

```json
"pending"
```

<h2 id="tocS_InstanceRecommendation">InstanceRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemainstancerecommendation"></a>
<a id="schema_InstanceRecommendation"></a>
<a id="tocSinstancerecommendation"></a>
<a id="tocsinstancerecommendation"></a>

```json
{
  "instanceArn": {},
  "accountId": {},
  "instanceName": {},
  "currentInstanceType": {},
  "finding": {},
  "findingReasonCodes": {},
  "utilizationMetrics": {},
  "lookBackPeriodInDays": {},
  "recommendationOptions": {},
  "recommendationSources": {},
  "lastRefreshTimestamp": {},
  "currentPerformanceRisk": {},
  "effectiveRecommendationPreferences": {
    "cpuVendorArchitectures": {},
    "enhancedInfrastructureMetrics": {},
    "inferredWorkloadTypes": {},
    "externalMetricsPreference": {
      "source": {}
    }
  },
  "inferredWorkloadTypes": {},
  "instanceState": {}
}
```

Describes an Amazon EC2 instance recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceArn|object|false|none|none|
|accountId|object|false|none|none|
|instanceName|object|false|none|none|
|currentInstanceType|object|false|none|none|
|finding|object|false|none|none|
|findingReasonCodes|object|false|none|none|
|utilizationMetrics|object|false|none|none|
|lookBackPeriodInDays|object|false|none|none|
|recommendationOptions|object|false|none|none|
|recommendationSources|object|false|none|none|
|lastRefreshTimestamp|object|false|none|none|
|currentPerformanceRisk|object|false|none|none|
|effectiveRecommendationPreferences|object|false|none|none|
|inferredWorkloadTypes|object|false|none|none|
|instanceState|object|false|none|none|

<h2 id="tocS_InstanceRecommendationFindingReasonCode">InstanceRecommendationFindingReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemainstancerecommendationfindingreasoncode"></a>
<a id="schema_InstanceRecommendationFindingReasonCode"></a>
<a id="tocSinstancerecommendationfindingreasoncode"></a>
<a id="tocsinstancerecommendationfindingreasoncode"></a>

```json
"CPUOverprovisioned"
```

<h2 id="tocS_PlatformDifferences">PlatformDifferences</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdifferences"></a>
<a id="schema_PlatformDifferences"></a>
<a id="tocSplatformdifferences"></a>
<a id="tocsplatformdifferences"></a>

```json
[
  "Hypervisor"
]
```

<h2 id="tocS_InstanceRecommendationOption">InstanceRecommendationOption</h2>
<!-- backwards compatibility -->
<a id="schemainstancerecommendationoption"></a>
<a id="schema_InstanceRecommendationOption"></a>
<a id="tocSinstancerecommendationoption"></a>
<a id="tocsinstancerecommendationoption"></a>

```json
{
  "instanceType": {},
  "projectedUtilizationMetrics": {},
  "platformDifferences": {},
  "performanceRisk": {},
  "rank": {},
  "savingsOpportunity": {
    "savingsOpportunityPercentage": {},
    "estimatedMonthlySavings": {
      "currency": {},
      "value": {}
    }
  },
  "migrationEffort": {}
}
```

Describes a recommendation option for an Amazon EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceType|object|false|none|none|
|projectedUtilizationMetrics|object|false|none|none|
|platformDifferences|object|false|none|none|
|performanceRisk|object|false|none|none|
|rank|object|false|none|none|
|savingsOpportunity|object|false|none|none|
|migrationEffort|object|false|none|none|

<h2 id="tocS_JobFilterName">JobFilterName</h2>
<!-- backwards compatibility -->
<a id="schemajobfiltername"></a>
<a id="schema_JobFilterName"></a>
<a id="tocSjobfiltername"></a>
<a id="tocsjobfiltername"></a>

```json
"ResourceType"
```

<h2 id="tocS_JobFilter">JobFilter</h2>
<!-- backwards compatibility -->
<a id="schemajobfilter"></a>
<a id="schema_JobFilter"></a>
<a id="tocSjobfilter"></a>
<a id="tocsjobfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

<p>Describes a filter that returns a more specific list of recommendation export jobs. Use this filter with the <a>DescribeRecommendationExportJobs</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"Queued"
```

<h2 id="tocS_LambdaFunctionMemoryMetricName">LambdaFunctionMemoryMetricName</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmemorymetricname"></a>
<a id="schema_LambdaFunctionMemoryMetricName"></a>
<a id="tocSlambdafunctionmemorymetricname"></a>
<a id="tocslambdafunctionmemorymetricname"></a>

```json
"Duration"
```

<h2 id="tocS_LambdaFunctionMemoryMetricStatistic">LambdaFunctionMemoryMetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmemorymetricstatistic"></a>
<a id="schema_LambdaFunctionMemoryMetricStatistic"></a>
<a id="tocSlambdafunctionmemorymetricstatistic"></a>
<a id="tocslambdafunctionmemorymetricstatistic"></a>

```json
"LowerBound"
```

<h2 id="tocS_LambdaFunctionMemoryProjectedMetric">LambdaFunctionMemoryProjectedMetric</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmemoryprojectedmetric"></a>
<a id="schema_LambdaFunctionMemoryProjectedMetric"></a>
<a id="tocSlambdafunctionmemoryprojectedmetric"></a>
<a id="tocslambdafunctionmemoryprojectedmetric"></a>

```json
{
  "name": {},
  "statistic": {},
  "value": {}
}
```

Describes a projected utilization metric of an Lambda function recommendation option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|statistic|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_LambdaFunctionMemoryProjectedMetrics">LambdaFunctionMemoryProjectedMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmemoryprojectedmetrics"></a>
<a id="schema_LambdaFunctionMemoryProjectedMetrics"></a>
<a id="tocSlambdafunctionmemoryprojectedmetrics"></a>
<a id="tocslambdafunctionmemoryprojectedmetrics"></a>

```json
[
  {
    "name": {},
    "statistic": {},
    "value": {}
  }
]
```

<h2 id="tocS_LambdaFunctionMemoryRecommendationOption">LambdaFunctionMemoryRecommendationOption</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmemoryrecommendationoption"></a>
<a id="schema_LambdaFunctionMemoryRecommendationOption"></a>
<a id="tocSlambdafunctionmemoryrecommendationoption"></a>
<a id="tocslambdafunctionmemoryrecommendationoption"></a>

```json
{
  "rank": {},
  "memorySize": {},
  "projectedUtilizationMetrics": {},
  "savingsOpportunity": {
    "savingsOpportunityPercentage": {},
    "estimatedMonthlySavings": {
      "currency": {},
      "value": {}
    }
  }
}
```

Describes a recommendation option for an Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rank|object|false|none|none|
|memorySize|object|false|none|none|
|projectedUtilizationMetrics|object|false|none|none|
|savingsOpportunity|object|false|none|none|

<h2 id="tocS_LambdaFunctionMemoryRecommendationOptions">LambdaFunctionMemoryRecommendationOptions</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmemoryrecommendationoptions"></a>
<a id="schema_LambdaFunctionMemoryRecommendationOptions"></a>
<a id="tocSlambdafunctionmemoryrecommendationoptions"></a>
<a id="tocslambdafunctionmemoryrecommendationoptions"></a>

```json
[
  {
    "rank": {},
    "memorySize": {},
    "projectedUtilizationMetrics": {},
    "savingsOpportunity": {
      "savingsOpportunityPercentage": {},
      "estimatedMonthlySavings": {
        "currency": {},
        "value": {}
      }
    }
  }
]
```

<h2 id="tocS_LambdaFunctionMetricName">LambdaFunctionMetricName</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmetricname"></a>
<a id="schema_LambdaFunctionMetricName"></a>
<a id="tocSlambdafunctionmetricname"></a>
<a id="tocslambdafunctionmetricname"></a>

```json
"Duration"
```

<h2 id="tocS_LambdaFunctionMetricStatistic">LambdaFunctionMetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionmetricstatistic"></a>
<a id="schema_LambdaFunctionMetricStatistic"></a>
<a id="tocSlambdafunctionmetricstatistic"></a>
<a id="tocslambdafunctionmetricstatistic"></a>

```json
"Maximum"
```

<h2 id="tocS_NumberOfInvocations">NumberOfInvocations</h2>
<!-- backwards compatibility -->
<a id="schemanumberofinvocations"></a>
<a id="schema_NumberOfInvocations"></a>
<a id="tocSnumberofinvocations"></a>
<a id="tocsnumberofinvocations"></a>

```json
0
```

<h2 id="tocS_LambdaFunctionUtilizationMetrics">LambdaFunctionUtilizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionutilizationmetrics"></a>
<a id="schema_LambdaFunctionUtilizationMetrics"></a>
<a id="tocSlambdafunctionutilizationmetrics"></a>
<a id="tocslambdafunctionutilizationmetrics"></a>

```json
[
  {
    "name": {},
    "statistic": {},
    "value": {}
  }
]
```

<h2 id="tocS_LambdaFunctionRecommendationFinding">LambdaFunctionRecommendationFinding</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendationfinding"></a>
<a id="schema_LambdaFunctionRecommendationFinding"></a>
<a id="tocSlambdafunctionrecommendationfinding"></a>
<a id="tocslambdafunctionrecommendationfinding"></a>

```json
"Optimized"
```

<h2 id="tocS_LambdaFunctionRecommendationFindingReasonCodes">LambdaFunctionRecommendationFindingReasonCodes</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendationfindingreasoncodes"></a>
<a id="schema_LambdaFunctionRecommendationFindingReasonCodes"></a>
<a id="tocSlambdafunctionrecommendationfindingreasoncodes"></a>
<a id="tocslambdafunctionrecommendationfindingreasoncodes"></a>

```json
[
  "MemoryOverprovisioned"
]
```

<h2 id="tocS_LambdaFunctionRecommendation">LambdaFunctionRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendation"></a>
<a id="schema_LambdaFunctionRecommendation"></a>
<a id="tocSlambdafunctionrecommendation"></a>
<a id="tocslambdafunctionrecommendation"></a>

```json
{
  "functionArn": {},
  "functionVersion": {},
  "accountId": {},
  "currentMemorySize": {},
  "numberOfInvocations": {},
  "utilizationMetrics": {},
  "lookbackPeriodInDays": {},
  "lastRefreshTimestamp": {},
  "finding": {},
  "findingReasonCodes": {},
  "memorySizeRecommendationOptions": {},
  "currentPerformanceRisk": {}
}
```

Describes an Lambda function recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionArn|object|false|none|none|
|functionVersion|object|false|none|none|
|accountId|object|false|none|none|
|currentMemorySize|object|false|none|none|
|numberOfInvocations|object|false|none|none|
|utilizationMetrics|object|false|none|none|
|lookbackPeriodInDays|object|false|none|none|
|lastRefreshTimestamp|object|false|none|none|
|finding|object|false|none|none|
|findingReasonCodes|object|false|none|none|
|memorySizeRecommendationOptions|object|false|none|none|
|currentPerformanceRisk|object|false|none|none|

<h2 id="tocS_LambdaFunctionRecommendationFilterName">LambdaFunctionRecommendationFilterName</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendationfiltername"></a>
<a id="schema_LambdaFunctionRecommendationFilterName"></a>
<a id="tocSlambdafunctionrecommendationfiltername"></a>
<a id="tocslambdafunctionrecommendationfiltername"></a>

```json
"Finding"
```

<h2 id="tocS_LambdaFunctionRecommendationFilter">LambdaFunctionRecommendationFilter</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendationfilter"></a>
<a id="schema_LambdaFunctionRecommendationFilter"></a>
<a id="tocSlambdafunctionrecommendationfilter"></a>
<a id="tocslambdafunctionrecommendationfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

<p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_LambdaFunctionRecommendationFindingReasonCode">LambdaFunctionRecommendationFindingReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecommendationfindingreasoncode"></a>
<a id="schema_LambdaFunctionRecommendationFindingReasonCode"></a>
<a id="tocSlambdafunctionrecommendationfindingreasoncode"></a>
<a id="tocslambdafunctionrecommendationfindingreasoncode"></a>

```json
"MemoryOverprovisioned"
```

<h2 id="tocS_LambdaFunctionUtilizationMetric">LambdaFunctionUtilizationMetric</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionutilizationmetric"></a>
<a id="schema_LambdaFunctionUtilizationMetric"></a>
<a id="tocSlambdafunctionutilizationmetric"></a>
<a id="tocslambdafunctionutilizationmetric"></a>

```json
{
  "name": {},
  "statistic": {},
  "value": {}
}
```

Describes a utilization metric of an Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|statistic|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_NullableMemoryReservation">NullableMemoryReservation</h2>
<!-- backwards compatibility -->
<a id="schemanullablememoryreservation"></a>
<a id="schema_NullableMemoryReservation"></a>
<a id="tocSnullablememoryreservation"></a>
<a id="tocsnullablememoryreservation"></a>

```json
0
```

<h2 id="tocS_MetadataKey">MetadataKey</h2>
<!-- backwards compatibility -->
<a id="schemametadatakey"></a>
<a id="schema_MetadataKey"></a>
<a id="tocSmetadatakey"></a>
<a id="tocsmetadatakey"></a>

```json
"string"
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"Cpu"
```

<h2 id="tocS_PlatformDifference">PlatformDifference</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdifference"></a>
<a id="schema_PlatformDifference"></a>
<a id="tocSplatformdifference"></a>
<a id="tocsplatformdifference"></a>

```json
"Hypervisor"
```

<h2 id="tocS_ProjectedMetric">ProjectedMetric</h2>
<!-- backwards compatibility -->
<a id="schemaprojectedmetric"></a>
<a id="schema_ProjectedMetric"></a>
<a id="tocSprojectedmetric"></a>
<a id="tocsprojectedmetric"></a>

```json
{
  "name": {},
  "timestamps": {},
  "values": {}
}
```

<p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. This represents the projected utilization of a recommendation option had you used that resource during the analyzed period.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|timestamps|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ProjectedMetrics">ProjectedMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaprojectedmetrics"></a>
<a id="schema_ProjectedMetrics"></a>
<a id="tocSprojectedmetrics"></a>
<a id="tocsprojectedmetrics"></a>

```json
[
  {
    "name": {},
    "timestamps": {},
    "values": {}
  }
]
```

<h2 id="tocS_UtilizationMetric">UtilizationMetric</h2>
<!-- backwards compatibility -->
<a id="schemautilizationmetric"></a>
<a id="schema_UtilizationMetric"></a>
<a id="tocSutilizationmetric"></a>
<a id="tocsutilizationmetric"></a>

```json
{
  "name": {},
  "statistic": {},
  "value": {}
}
```

<p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|statistic|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ReasonCodeSummary">ReasonCodeSummary</h2>
<!-- backwards compatibility -->
<a id="schemareasoncodesummary"></a>
<a id="schema_ReasonCodeSummary"></a>
<a id="tocSreasoncodesummary"></a>
<a id="tocsreasoncodesummary"></a>

```json
{
  "name": {},
  "value": {}
}
```

A summary of a finding reason code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ReasonCodeSummaries">ReasonCodeSummaries</h2>
<!-- backwards compatibility -->
<a id="schemareasoncodesummaries"></a>
<a id="schema_ReasonCodeSummaries"></a>
<a id="tocSreasoncodesummaries"></a>
<a id="tocsreasoncodesummaries"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_SummaryValue">SummaryValue</h2>
<!-- backwards compatibility -->
<a id="schemasummaryvalue"></a>
<a id="schema_SummaryValue"></a>
<a id="tocSsummaryvalue"></a>
<a id="tocssummaryvalue"></a>

```json
0
```

<h2 id="tocS_RecommendationExportJob">RecommendationExportJob</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationexportjob"></a>
<a id="schema_RecommendationExportJob"></a>
<a id="tocSrecommendationexportjob"></a>
<a id="tocsrecommendationexportjob"></a>

```json
{
  "jobId": {},
  "destination": {
    "s3": {
      "bucket": {},
      "key": {},
      "metadataKey": {}
    }
  },
  "resourceType": {},
  "status": {},
  "creationTimestamp": {},
  "lastUpdatedTimestamp": {},
  "failureReason": {}
}
```

<p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|destination|object|false|none|none|
|resourceType|object|false|none|none|
|status|object|false|none|none|
|creationTimestamp|object|false|none|none|
|lastUpdatedTimestamp|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_RecommendationPreferenceName">RecommendationPreferenceName</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationpreferencename"></a>
<a id="schema_RecommendationPreferenceName"></a>
<a id="tocSrecommendationpreferencename"></a>
<a id="tocsrecommendationpreferencename"></a>

```json
"EnhancedInfrastructureMetrics"
```

<h2 id="tocS_RecommendationPreferencesDetail">RecommendationPreferencesDetail</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationpreferencesdetail"></a>
<a id="schema_RecommendationPreferencesDetail"></a>
<a id="tocSrecommendationpreferencesdetail"></a>
<a id="tocsrecommendationpreferencesdetail"></a>

```json
{
  "scope": {
    "name": {},
    "value": {}
  },
  "resourceType": {},
  "enhancedInfrastructureMetrics": {},
  "inferredWorkloadTypes": {},
  "externalMetricsPreference": {
    "source": {}
  }
}
```

Describes a recommendation preference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|object|false|none|none|
|resourceType|object|false|none|none|
|enhancedInfrastructureMetrics|object|false|none|none|
|inferredWorkloadTypes|object|false|none|none|
|externalMetricsPreference|object|false|none|none|

<h2 id="tocS_RecommendationSourceArn">RecommendationSourceArn</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsourcearn"></a>
<a id="schema_RecommendationSourceArn"></a>
<a id="tocSrecommendationsourcearn"></a>
<a id="tocsrecommendationsourcearn"></a>

```json
"string"
```

<h2 id="tocS_RecommendationSourceType">RecommendationSourceType</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsourcetype"></a>
<a id="schema_RecommendationSourceType"></a>
<a id="tocSrecommendationsourcetype"></a>
<a id="tocsrecommendationsourcetype"></a>

```json
"Ec2Instance"
```

<h2 id="tocS_RecommendationSource">RecommendationSource</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsource"></a>
<a id="schema_RecommendationSource"></a>
<a id="tocSrecommendationsource"></a>
<a id="tocsrecommendationsource"></a>

```json
{
  "recommendationSourceArn": {},
  "recommendationSourceType": {}
}
```

Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendationSourceArn|object|false|none|none|
|recommendationSourceType|object|false|none|none|

<h2 id="tocS_RecommendationSummary">RecommendationSummary</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsummary"></a>
<a id="schema_RecommendationSummary"></a>
<a id="tocSrecommendationsummary"></a>
<a id="tocsrecommendationsummary"></a>

```json
{
  "summaries": {},
  "recommendationResourceType": {},
  "accountId": {},
  "savingsOpportunity": {
    "savingsOpportunityPercentage": {},
    "estimatedMonthlySavings": {
      "currency": {},
      "value": {}
    }
  },
  "currentPerformanceRiskRatings": {
    "high": {},
    "medium": {},
    "low": {},
    "veryLow": {}
  }
}
```

A summary of a recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|false|none|none|
|recommendationResourceType|object|false|none|none|
|accountId|object|false|none|none|
|savingsOpportunity|object|false|none|none|
|currentPerformanceRiskRatings|object|false|none|none|

<h2 id="tocS_Summaries">Summaries</h2>
<!-- backwards compatibility -->
<a id="schemasummaries"></a>
<a id="schema_Summaries"></a>
<a id="tocSsummaries"></a>
<a id="tocssummaries"></a>

```json
[
  {
    "name": {},
    "value": {},
    "reasonCodeSummaries": {}
  }
]
```

<h2 id="tocS_RecommendedInstanceType">RecommendedInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemarecommendedinstancetype"></a>
<a id="schema_RecommendedInstanceType"></a>
<a id="tocSrecommendedinstancetype"></a>
<a id="tocsrecommendedinstancetype"></a>

```json
"string"
```

<h2 id="tocS_RecommendedOptionProjectedMetric">RecommendedOptionProjectedMetric</h2>
<!-- backwards compatibility -->
<a id="schemarecommendedoptionprojectedmetric"></a>
<a id="schema_RecommendedOptionProjectedMetric"></a>
<a id="tocSrecommendedoptionprojectedmetric"></a>
<a id="tocsrecommendedoptionprojectedmetric"></a>

```json
{
  "recommendedInstanceType": {},
  "rank": {},
  "projectedMetrics": {}
}
```

<p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendedInstanceType|object|false|none|none|
|rank|object|false|none|none|
|projectedMetrics|object|false|none|none|

<h2 id="tocS_RootVolume">RootVolume</h2>
<!-- backwards compatibility -->
<a id="schemarootvolume"></a>
<a id="schema_RootVolume"></a>
<a id="tocSrootvolume"></a>
<a id="tocsrootvolume"></a>

```json
true
```

<h2 id="tocS_SavingsOpportunityPercentage">SavingsOpportunityPercentage</h2>
<!-- backwards compatibility -->
<a id="schemasavingsopportunitypercentage"></a>
<a id="schema_SavingsOpportunityPercentage"></a>
<a id="tocSsavingsopportunitypercentage"></a>
<a id="tocssavingsopportunitypercentage"></a>

```json
0
```

<h2 id="tocS_ScopeName">ScopeName</h2>
<!-- backwards compatibility -->
<a id="schemascopename"></a>
<a id="schema_ScopeName"></a>
<a id="tocSscopename"></a>
<a id="tocsscopename"></a>

```json
"Organization"
```

<h2 id="tocS_ScopeValue">ScopeValue</h2>
<!-- backwards compatibility -->
<a id="schemascopevalue"></a>
<a id="schema_ScopeValue"></a>
<a id="tocSscopevalue"></a>
<a id="tocsscopevalue"></a>

```json
"string"
```

<h2 id="tocS_TaskDefinitionArn">TaskDefinitionArn</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionarn"></a>
<a id="schema_TaskDefinitionArn"></a>
<a id="tocStaskdefinitionarn"></a>
<a id="tocstaskdefinitionarn"></a>

```json
"string"
```

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
{
  "name": {},
  "value": {},
  "reasonCodeSummaries": {}
}
```

The summary of a recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|
|reasonCodeSummaries|object|false|none|none|

<h2 id="tocS_VolumeArn">VolumeArn</h2>
<!-- backwards compatibility -->
<a id="schemavolumearn"></a>
<a id="schema_VolumeArn"></a>
<a id="tocSvolumearn"></a>
<a id="tocsvolumearn"></a>

```json
"string"
```

<h2 id="tocS_VolumeBaselineIOPS">VolumeBaselineIOPS</h2>
<!-- backwards compatibility -->
<a id="schemavolumebaselineiops"></a>
<a id="schema_VolumeBaselineIOPS"></a>
<a id="tocSvolumebaselineiops"></a>
<a id="tocsvolumebaselineiops"></a>

```json
0
```

<h2 id="tocS_VolumeBaselineThroughput">VolumeBaselineThroughput</h2>
<!-- backwards compatibility -->
<a id="schemavolumebaselinethroughput"></a>
<a id="schema_VolumeBaselineThroughput"></a>
<a id="tocSvolumebaselinethroughput"></a>
<a id="tocsvolumebaselinethroughput"></a>

```json
0
```

<h2 id="tocS_VolumeBurstIOPS">VolumeBurstIOPS</h2>
<!-- backwards compatibility -->
<a id="schemavolumeburstiops"></a>
<a id="schema_VolumeBurstIOPS"></a>
<a id="tocSvolumeburstiops"></a>
<a id="tocsvolumeburstiops"></a>

```json
0
```

<h2 id="tocS_VolumeBurstThroughput">VolumeBurstThroughput</h2>
<!-- backwards compatibility -->
<a id="schemavolumeburstthroughput"></a>
<a id="schema_VolumeBurstThroughput"></a>
<a id="tocSvolumeburstthroughput"></a>
<a id="tocsvolumeburstthroughput"></a>

```json
0
```

<h2 id="tocS_VolumeType">VolumeType</h2>
<!-- backwards compatibility -->
<a id="schemavolumetype"></a>
<a id="schema_VolumeType"></a>
<a id="tocSvolumetype"></a>
<a id="tocsvolumetype"></a>

```json
"string"
```

<h2 id="tocS_VolumeSize">VolumeSize</h2>
<!-- backwards compatibility -->
<a id="schemavolumesize"></a>
<a id="schema_VolumeSize"></a>
<a id="tocSvolumesize"></a>
<a id="tocsvolumesize"></a>

```json
0
```

<h2 id="tocS_VolumeConfiguration">VolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavolumeconfiguration"></a>
<a id="schema_VolumeConfiguration"></a>
<a id="tocSvolumeconfiguration"></a>
<a id="tocsvolumeconfiguration"></a>

```json
{
  "volumeType": {},
  "volumeSize": {},
  "volumeBaselineIOPS": {},
  "volumeBurstIOPS": {},
  "volumeBaselineThroughput": {},
  "volumeBurstThroughput": {},
  "rootVolume": {}
}
```

Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumeType|object|false|none|none|
|volumeSize|object|false|none|none|
|volumeBaselineIOPS|object|false|none|none|
|volumeBurstIOPS|object|false|none|none|
|volumeBaselineThroughput|object|false|none|none|
|volumeBurstThroughput|object|false|none|none|
|rootVolume|object|false|none|none|

<h2 id="tocS_VolumeRecommendationOptions">VolumeRecommendationOptions</h2>
<!-- backwards compatibility -->
<a id="schemavolumerecommendationoptions"></a>
<a id="schema_VolumeRecommendationOptions"></a>
<a id="tocSvolumerecommendationoptions"></a>
<a id="tocsvolumerecommendationoptions"></a>

```json
[
  {
    "configuration": {
      "volumeType": {},
      "volumeSize": {},
      "volumeBaselineIOPS": {},
      "volumeBurstIOPS": {},
      "volumeBaselineThroughput": {},
      "volumeBurstThroughput": {},
      "rootVolume": {}
    },
    "performanceRisk": {},
    "rank": {},
    "savingsOpportunity": {
      "savingsOpportunityPercentage": {},
      "estimatedMonthlySavings": {
        "currency": {},
        "value": {}
      }
    }
  }
]
```

<h2 id="tocS_VolumeRecommendation">VolumeRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemavolumerecommendation"></a>
<a id="schema_VolumeRecommendation"></a>
<a id="tocSvolumerecommendation"></a>
<a id="tocsvolumerecommendation"></a>

```json
{
  "volumeArn": {},
  "accountId": {},
  "currentConfiguration": {
    "volumeType": {},
    "volumeSize": {},
    "volumeBaselineIOPS": {},
    "volumeBurstIOPS": {},
    "volumeBaselineThroughput": {},
    "volumeBurstThroughput": {},
    "rootVolume": {}
  },
  "finding": {},
  "utilizationMetrics": {},
  "lookBackPeriodInDays": {},
  "volumeRecommendationOptions": {},
  "lastRefreshTimestamp": {},
  "currentPerformanceRisk": {}
}
```

Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumeArn|object|false|none|none|
|accountId|object|false|none|none|
|currentConfiguration|object|false|none|none|
|finding|object|false|none|none|
|utilizationMetrics|object|false|none|none|
|lookBackPeriodInDays|object|false|none|none|
|volumeRecommendationOptions|object|false|none|none|
|lastRefreshTimestamp|object|false|none|none|
|currentPerformanceRisk|object|false|none|none|

<h2 id="tocS_VolumeRecommendationOption">VolumeRecommendationOption</h2>
<!-- backwards compatibility -->
<a id="schemavolumerecommendationoption"></a>
<a id="schema_VolumeRecommendationOption"></a>
<a id="tocSvolumerecommendationoption"></a>
<a id="tocsvolumerecommendationoption"></a>

```json
{
  "configuration": {
    "volumeType": {},
    "volumeSize": {},
    "volumeBaselineIOPS": {},
    "volumeBurstIOPS": {},
    "volumeBaselineThroughput": {},
    "volumeBurstThroughput": {},
    "rootVolume": {}
  },
  "performanceRisk": {},
  "rank": {},
  "savingsOpportunity": {
    "savingsOpportunityPercentage": {},
    "estimatedMonthlySavings": {
      "currency": {},
      "value": {}
    }
  }
}
```

Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|
|performanceRisk|object|false|none|none|
|rank|object|false|none|none|
|savingsOpportunity|object|false|none|none|
