<h1 id="aws-auto-scaling-plans">AWS Auto Scaling Plans v2018-01-06</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources. </p> <p> <b>API Summary</b> </p> <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p> <ul> <li> <p>Create and manage scaling plans</p> </li> <li> <p>Define target tracking scaling policies to dynamically scale your resources based on utilization</p> </li> <li> <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster</p> </li> <li> <p>Set minimum and maximum capacity limits</p> </li> <li> <p>Retrieve information on existing scaling plans</p> </li> <li> <p>Access current forecast data and historical forecast data for up to 56 days previous</p> </li> </ul> <p>To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>

Base URLs:

* <a href="http://autoscaling-plans.us-east-1.amazonaws.com">http://autoscaling-plans.us-east-1.amazonaws.com</a> - The AWS Auto Scaling Plans multi-region endpoint

* <a href="https://autoscaling-plans.us-east-1.amazonaws.com">https://autoscaling-plans.us-east-1.amazonaws.com</a> - The AWS Auto Scaling Plans multi-region endpoint

* <a href="http://autoscaling-plans.cn-north-1.amazonaws.com.cn">http://autoscaling-plans.cn-north-1.amazonaws.com.cn</a> - The AWS Auto Scaling Plans endpoint for China (Beijing) and China (Ningxia)

* <a href="https://autoscaling-plans.cn-north-1.amazonaws.com.cn">https://autoscaling-plans.cn-north-1.amazonaws.com.cn</a> - The AWS Auto Scaling Plans endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/autoscaling-plans/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-auto-scaling-plans-default">Default</h1>

## CreateScalingPlan

<a id="opIdCreateScalingPlan"></a>

> Code samples

```bash
curl 'https://autoscaling-plans.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleScalingPlannerFrontendService.CreateScalingPlan' \
  -d '{
    "ScalingPlanName": {},
    "ApplicationSource": {
      "CloudFormationStackARN": {},
      "TagFilters": {}
    },
    "ScalingInstructions": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan`

Creates a scaling plan. 

> Body parameter

```json
{
  "ScalingPlanName": {},
  "ApplicationSource": {
    "CloudFormationStackARN": {},
    "TagFilters": {}
  },
  "ScalingInstructions": {}
}
```

<h3 id="createscalingplan-parameters">Parameters</h3>

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
|body|body|[CreateScalingPlanRequest](#schemacreatescalingplanrequest)|true|none|
|» ScalingPlanName|body|object|true|none|
|» ApplicationSource|body|object|true|none|
|» » CloudFormationStackARN|body|object|false|none|
|» » TagFilters|body|object|false|none|
|» ScalingInstructions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleScalingPlannerFrontendService.CreateScalingPlan|

> Example responses

> 200 Response

```json
{
  "ScalingPlanVersion": {}
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

<h3 id="createscalingplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateScalingPlanResponse](#schemacreatescalingplanresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteScalingPlan

<a id="opIdDeleteScalingPlan"></a>

> Code samples

```bash
curl 'https://autoscaling-plans.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleScalingPlannerFrontendService.DeleteScalingPlan' \
  -d '{
    "ScalingPlanName": {},
    "ScalingPlanVersion": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan`

<p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>

> Body parameter

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {}
}
```

<h3 id="deletescalingplan-parameters">Parameters</h3>

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
|body|body|[DeleteScalingPlanRequest](#schemadeletescalingplanrequest)|true|none|
|» ScalingPlanName|body|object|true|none|
|» ScalingPlanVersion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleScalingPlannerFrontendService.DeleteScalingPlan|

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

<h3 id="deletescalingplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteScalingPlanResponse](#schemadeletescalingplanresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScalingPlanResources

<a id="opIdDescribeScalingPlanResources"></a>

> Code samples

```bash
curl 'https://autoscaling-plans.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources' \
  -d '{
    "ScalingPlanName": {},
    "ScalingPlanVersion": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources`

Describes the scalable resources in the specified scaling plan.

> Body parameter

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describescalingplanresources-parameters">Parameters</h3>

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
|body|body|[DescribeScalingPlanResourcesRequest](#schemadescribescalingplanresourcesrequest)|true|none|
|» ScalingPlanName|body|object|true|none|
|» ScalingPlanVersion|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources|

> Example responses

> 200 Response

```json
{
  "ScalingPlanResources": {},
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

<h3 id="describescalingplanresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalingPlanResourcesResponse](#schemadescribescalingplanresourcesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScalingPlans

<a id="opIdDescribeScalingPlans"></a>

> Code samples

```bash
curl 'https://autoscaling-plans.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleScalingPlannerFrontendService.DescribeScalingPlans' \
  -d '{
    "ScalingPlanNames": {},
    "ScalingPlanVersion": {},
    "ApplicationSources": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans`

Describes one or more of your scaling plans.

> Body parameter

```json
{
  "ScalingPlanNames": {},
  "ScalingPlanVersion": {},
  "ApplicationSources": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describescalingplans-parameters">Parameters</h3>

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
|body|body|[DescribeScalingPlansRequest](#schemadescribescalingplansrequest)|true|none|
|» ScalingPlanNames|body|object|false|none|
|» ScalingPlanVersion|body|object|false|none|
|» ApplicationSources|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleScalingPlannerFrontendService.DescribeScalingPlans|

> Example responses

> 200 Response

```json
{
  "ScalingPlans": {},
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

<h3 id="describescalingplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalingPlansResponse](#schemadescribescalingplansresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetScalingPlanResourceForecastData

<a id="opIdGetScalingPlanResourceForecastData"></a>

> Code samples

```bash
curl 'https://autoscaling-plans.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData' \
  -d '{
    "ScalingPlanName": {},
    "ScalingPlanVersion": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "ForecastDataType": {},
    "StartTime": {},
    "EndTime": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData`

<p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>

> Body parameter

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "ForecastDataType": {},
  "StartTime": {},
  "EndTime": {}
}
```

<h3 id="getscalingplanresourceforecastdata-parameters">Parameters</h3>

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
|body|body|[GetScalingPlanResourceForecastDataRequest](#schemagetscalingplanresourceforecastdatarequest)|true|none|
|» ScalingPlanName|body|object|true|none|
|» ScalingPlanVersion|body|object|true|none|
|» ServiceNamespace|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ScalableDimension|body|object|true|none|
|» ForecastDataType|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData|

> Example responses

> 200 Response

```json
{
  "Datapoints": {}
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

<h3 id="getscalingplanresourceforecastdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetScalingPlanResourceForecastDataResponse](#schemagetscalingplanresourceforecastdataresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateScalingPlan

<a id="opIdUpdateScalingPlan"></a>

> Code samples

```bash
curl 'https://autoscaling-plans.us-east-1.amazonaws.com/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AnyScaleScalingPlannerFrontendService.UpdateScalingPlan' \
  -d '{
    "ScalingPlanName": {},
    "ScalingPlanVersion": {},
    "ApplicationSource": {
      "CloudFormationStackARN": {},
      "TagFilters": {}
    },
    "ScalingInstructions": {}
  }'
```

`POST /#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan`

<p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

> Body parameter

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "ApplicationSource": {
    "CloudFormationStackARN": {},
    "TagFilters": {}
  },
  "ScalingInstructions": {}
}
```

<h3 id="updatescalingplan-parameters">Parameters</h3>

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
|body|body|[UpdateScalingPlanRequest](#schemaupdatescalingplanrequest)|true|none|
|» ScalingPlanName|body|object|true|none|
|» ScalingPlanVersion|body|object|true|none|
|» ApplicationSource|body|object|false|none|
|» » CloudFormationStackARN|body|object|false|none|
|» » TagFilters|body|object|false|none|
|» ScalingInstructions|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AnyScaleScalingPlannerFrontendService.UpdateScalingPlan|

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

<h3 id="updatescalingplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateScalingPlanResponse](#schemaupdatescalingplanresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConcurrentUpdateException|[ConcurrentUpdateException](#schemaconcurrentupdateexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateScalingPlanResponse">CreateScalingPlanResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatescalingplanresponse"></a>
<a id="schema_CreateScalingPlanResponse"></a>
<a id="tocScreatescalingplanresponse"></a>
<a id="tocscreatescalingplanresponse"></a>

```json
{
  "ScalingPlanVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanVersion|object|true|none|none|

<h2 id="tocS_CreateScalingPlanRequest">CreateScalingPlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatescalingplanrequest"></a>
<a id="schema_CreateScalingPlanRequest"></a>
<a id="tocScreatescalingplanrequest"></a>
<a id="tocscreatescalingplanrequest"></a>

```json
{
  "ScalingPlanName": {},
  "ApplicationSource": {
    "CloudFormationStackARN": {},
    "TagFilters": {}
  },
  "ScalingInstructions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanName|object|true|none|none|
|ApplicationSource|object|true|none|none|
|ScalingInstructions|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentUpdateException">ConcurrentUpdateException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentupdateexception"></a>
<a id="schema_ConcurrentUpdateException"></a>
<a id="tocSconcurrentupdateexception"></a>
<a id="tocsconcurrentupdateexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_DeleteScalingPlanResponse">DeleteScalingPlanResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletescalingplanresponse"></a>
<a id="schema_DeleteScalingPlanResponse"></a>
<a id="tocSdeletescalingplanresponse"></a>
<a id="tocsdeletescalingplanresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteScalingPlanRequest">DeleteScalingPlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletescalingplanrequest"></a>
<a id="schema_DeleteScalingPlanRequest"></a>
<a id="tocSdeletescalingplanrequest"></a>
<a id="tocsdeletescalingplanrequest"></a>

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanName|object|true|none|none|
|ScalingPlanVersion|object|true|none|none|

<h2 id="tocS_ObjectNotFoundException">ObjectNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaobjectnotfoundexception"></a>
<a id="schema_ObjectNotFoundException"></a>
<a id="tocSobjectnotfoundexception"></a>
<a id="tocsobjectnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeScalingPlanResourcesResponse">DescribeScalingPlanResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingplanresourcesresponse"></a>
<a id="schema_DescribeScalingPlanResourcesResponse"></a>
<a id="tocSdescribescalingplanresourcesresponse"></a>
<a id="tocsdescribescalingplanresourcesresponse"></a>

```json
{
  "ScalingPlanResources": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanResources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScalingPlanResourcesRequest">DescribeScalingPlanResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingplanresourcesrequest"></a>
<a id="schema_DescribeScalingPlanResourcesRequest"></a>
<a id="tocSdescribescalingplanresourcesrequest"></a>
<a id="tocsdescribescalingplanresourcesrequest"></a>

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanName|object|true|none|none|
|ScalingPlanVersion|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeScalingPlansResponse">DescribeScalingPlansResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingplansresponse"></a>
<a id="schema_DescribeScalingPlansResponse"></a>
<a id="tocSdescribescalingplansresponse"></a>
<a id="tocsdescribescalingplansresponse"></a>

```json
{
  "ScalingPlans": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlans|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScalingPlansRequest">DescribeScalingPlansRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingplansrequest"></a>
<a id="schema_DescribeScalingPlansRequest"></a>
<a id="tocSdescribescalingplansrequest"></a>
<a id="tocsdescribescalingplansrequest"></a>

```json
{
  "ScalingPlanNames": {},
  "ScalingPlanVersion": {},
  "ApplicationSources": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanNames|object|false|none|none|
|ScalingPlanVersion|object|false|none|none|
|ApplicationSources|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetScalingPlanResourceForecastDataResponse">GetScalingPlanResourceForecastDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetscalingplanresourceforecastdataresponse"></a>
<a id="schema_GetScalingPlanResourceForecastDataResponse"></a>
<a id="tocSgetscalingplanresourceforecastdataresponse"></a>
<a id="tocsgetscalingplanresourceforecastdataresponse"></a>

```json
{
  "Datapoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Datapoints|object|true|none|none|

<h2 id="tocS_GetScalingPlanResourceForecastDataRequest">GetScalingPlanResourceForecastDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetscalingplanresourceforecastdatarequest"></a>
<a id="schema_GetScalingPlanResourceForecastDataRequest"></a>
<a id="tocSgetscalingplanresourceforecastdatarequest"></a>
<a id="tocsgetscalingplanresourceforecastdatarequest"></a>

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "ForecastDataType": {},
  "StartTime": {},
  "EndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanName|object|true|none|none|
|ScalingPlanVersion|object|true|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|ForecastDataType|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|

<h2 id="tocS_UpdateScalingPlanResponse">UpdateScalingPlanResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescalingplanresponse"></a>
<a id="schema_UpdateScalingPlanResponse"></a>
<a id="tocSupdatescalingplanresponse"></a>
<a id="tocsupdatescalingplanresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateScalingPlanRequest">UpdateScalingPlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescalingplanrequest"></a>
<a id="schema_UpdateScalingPlanRequest"></a>
<a id="tocSupdatescalingplanrequest"></a>
<a id="tocsupdatescalingplanrequest"></a>

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "ApplicationSource": {
    "CloudFormationStackARN": {},
    "TagFilters": {}
  },
  "ScalingInstructions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanName|object|true|none|none|
|ScalingPlanVersion|object|true|none|none|
|ApplicationSource|object|false|none|none|
|ScalingInstructions|object|false|none|none|

<h2 id="tocS_XmlString">XmlString</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstring"></a>
<a id="schema_XmlString"></a>
<a id="tocSxmlstring"></a>
<a id="tocsxmlstring"></a>

```json
"string"
```

<h2 id="tocS_TagFilters">TagFilters</h2>
<!-- backwards compatibility -->
<a id="schematagfilters"></a>
<a id="schema_TagFilters"></a>
<a id="tocStagfilters"></a>
<a id="tocstagfilters"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ApplicationSource">ApplicationSource</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsource"></a>
<a id="schema_ApplicationSource"></a>
<a id="tocSapplicationsource"></a>
<a id="tocsapplicationsource"></a>

```json
{
  "CloudFormationStackARN": {},
  "TagFilters": {}
}
```

Represents an application source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFormationStackARN|object|false|none|none|
|TagFilters|object|false|none|none|

<h2 id="tocS_ApplicationSources">ApplicationSources</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsources"></a>
<a id="schema_ApplicationSources"></a>
<a id="tocSapplicationsources"></a>
<a id="tocsapplicationsources"></a>

```json
[
  {
    "CloudFormationStackARN": {},
    "TagFilters": {}
  }
]
```

<h2 id="tocS_Cooldown">Cooldown</h2>
<!-- backwards compatibility -->
<a id="schemacooldown"></a>
<a id="schema_Cooldown"></a>
<a id="tocScooldown"></a>
<a id="tocscooldown"></a>

```json
0
```

<h2 id="tocS_ScalingPlanName">ScalingPlanName</h2>
<!-- backwards compatibility -->
<a id="schemascalingplanname"></a>
<a id="schema_ScalingPlanName"></a>
<a id="tocSscalingplanname"></a>
<a id="tocsscalingplanname"></a>

```json
"string"
```

<h2 id="tocS_ScalingInstructions">ScalingInstructions</h2>
<!-- backwards compatibility -->
<a id="schemascalinginstructions"></a>
<a id="schema_ScalingInstructions"></a>
<a id="tocSscalinginstructions"></a>
<a id="tocsscalinginstructions"></a>

```json
[
  {
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "MinCapacity": {},
    "MaxCapacity": {},
    "TargetTrackingConfigurations": {},
    "PredefinedLoadMetricSpecification": {
      "PredefinedLoadMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedLoadMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {}
    },
    "ScheduledActionBufferTime": {},
    "PredictiveScalingMaxCapacityBehavior": {},
    "PredictiveScalingMaxCapacityBuffer": {},
    "PredictiveScalingMode": {},
    "ScalingPolicyUpdateBehavior": {},
    "DisableDynamicScaling": {}
  }
]
```

<h2 id="tocS_ScalingPlanVersion">ScalingPlanVersion</h2>
<!-- backwards compatibility -->
<a id="schemascalingplanversion"></a>
<a id="schema_ScalingPlanVersion"></a>
<a id="tocSscalingplanversion"></a>
<a id="tocsscalingplanversion"></a>

```json
0
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_MetricNamespace">MetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schemametricnamespace"></a>
<a id="schema_MetricNamespace"></a>
<a id="tocSmetricnamespace"></a>
<a id="tocsmetricnamespace"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensions">MetricDimensions</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensions"></a>
<a id="schema_MetricDimensions"></a>
<a id="tocSmetricdimensions"></a>
<a id="tocsmetricdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MetricStatistic">MetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemametricstatistic"></a>
<a id="schema_MetricStatistic"></a>
<a id="tocSmetricstatistic"></a>
<a id="tocsmetricstatistic"></a>

```json
"Average"
```

<h2 id="tocS_MetricUnit">MetricUnit</h2>
<!-- backwards compatibility -->
<a id="schemametricunit"></a>
<a id="schema_MetricUnit"></a>
<a id="tocSmetricunit"></a>
<a id="tocsmetricunit"></a>

```json
"string"
```

<h2 id="tocS_CustomizedLoadMetricSpecification">CustomizedLoadMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemacustomizedloadmetricspecification"></a>
<a id="schema_CustomizedLoadMetricSpecification"></a>
<a id="tocScustomizedloadmetricspecification"></a>
<a id="tocscustomizedloadmetricspecification"></a>

```json
{
  "MetricName": {},
  "Namespace": {},
  "Dimensions": {},
  "Statistic": {},
  "Unit": {}
}
```

<p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group. </p> <p>If you publish your own metrics, you can aggregate the data points at a given interval and then publish the aggregated data points to CloudWatch. Before AWS Auto Scaling generates the forecast, it sums up all the metric data points that occurred within each hour to match the granularity period that is used in the forecast (60 minutes).</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|true|none|none|
|Namespace|object|true|none|none|
|Dimensions|object|false|none|none|
|Statistic|object|true|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_CustomizedScalingMetricSpecification">CustomizedScalingMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemacustomizedscalingmetricspecification"></a>
<a id="schema_CustomizedScalingMetricSpecification"></a>
<a id="tocScustomizedscalingmetricspecification"></a>
<a id="tocscustomizedscalingmetricspecification"></a>

```json
{
  "MetricName": {},
  "Namespace": {},
  "Dimensions": {},
  "Statistic": {},
  "Unit": {}
}
```

<p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|true|none|none|
|Namespace|object|true|none|none|
|Dimensions|object|false|none|none|
|Statistic|object|true|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_TimestampType">TimestampType</h2>
<!-- backwards compatibility -->
<a id="schematimestamptype"></a>
<a id="schema_TimestampType"></a>
<a id="tocStimestamptype"></a>
<a id="tocstimestamptype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_MetricScale">MetricScale</h2>
<!-- backwards compatibility -->
<a id="schemametricscale"></a>
<a id="schema_MetricScale"></a>
<a id="tocSmetricscale"></a>
<a id="tocsmetricscale"></a>

```json
0
```

<h2 id="tocS_Datapoint">Datapoint</h2>
<!-- backwards compatibility -->
<a id="schemadatapoint"></a>
<a id="schema_Datapoint"></a>
<a id="tocSdatapoint"></a>
<a id="tocsdatapoint"></a>

```json
{
  "Timestamp": {},
  "Value": {}
}
```

Represents a single value in the forecast data used for predictive scaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Datapoints">Datapoints</h2>
<!-- backwards compatibility -->
<a id="schemadatapoints"></a>
<a id="schema_Datapoints"></a>
<a id="tocSdatapoints"></a>
<a id="tocsdatapoints"></a>

```json
[
  {
    "Timestamp": {},
    "Value": {}
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

<h2 id="tocS_ScalingPlanResources">ScalingPlanResources</h2>
<!-- backwards compatibility -->
<a id="schemascalingplanresources"></a>
<a id="schema_ScalingPlanResources"></a>
<a id="tocSscalingplanresources"></a>
<a id="tocsscalingplanresources"></a>

```json
[
  {
    "ScalingPlanName": {},
    "ScalingPlanVersion": {},
    "ServiceNamespace": {},
    "ResourceId": {},
    "ScalableDimension": {},
    "ScalingPolicies": {},
    "ScalingStatusCode": {},
    "ScalingStatusMessage": {}
  }
]
```

<h2 id="tocS_ScalingPlanNames">ScalingPlanNames</h2>
<!-- backwards compatibility -->
<a id="schemascalingplannames"></a>
<a id="schema_ScalingPlanNames"></a>
<a id="tocSscalingplannames"></a>
<a id="tocsscalingplannames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ScalingPlans">ScalingPlans</h2>
<!-- backwards compatibility -->
<a id="schemascalingplans"></a>
<a id="schema_ScalingPlans"></a>
<a id="tocSscalingplans"></a>
<a id="tocsscalingplans"></a>

```json
[
  {
    "ScalingPlanName": {},
    "ScalingPlanVersion": {},
    "ApplicationSource": {
      "CloudFormationStackARN": {},
      "TagFilters": {}
    },
    "ScalingInstructions": {},
    "StatusCode": {},
    "StatusMessage": {},
    "StatusStartTime": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_DisableDynamicScaling">DisableDynamicScaling</h2>
<!-- backwards compatibility -->
<a id="schemadisabledynamicscaling"></a>
<a id="schema_DisableDynamicScaling"></a>
<a id="tocSdisabledynamicscaling"></a>
<a id="tocsdisabledynamicscaling"></a>

```json
true
```

<h2 id="tocS_DisableScaleIn">DisableScaleIn</h2>
<!-- backwards compatibility -->
<a id="schemadisablescalein"></a>
<a id="schema_DisableScaleIn"></a>
<a id="tocSdisablescalein"></a>
<a id="tocsdisablescalein"></a>

```json
true
```

<h2 id="tocS_ForecastDataType">ForecastDataType</h2>
<!-- backwards compatibility -->
<a id="schemaforecastdatatype"></a>
<a id="schema_ForecastDataType"></a>
<a id="tocSforecastdatatype"></a>
<a id="tocsforecastdatatype"></a>

```json
"CapacityForecast"
```

<h2 id="tocS_ServiceNamespace">ServiceNamespace</h2>
<!-- backwards compatibility -->
<a id="schemaservicenamespace"></a>
<a id="schema_ServiceNamespace"></a>
<a id="tocSservicenamespace"></a>
<a id="tocsservicenamespace"></a>

```json
"autoscaling"
```

<h2 id="tocS_ScalableDimension">ScalableDimension</h2>
<!-- backwards compatibility -->
<a id="schemascalabledimension"></a>
<a id="schema_ScalableDimension"></a>
<a id="tocSscalabledimension"></a>
<a id="tocsscalabledimension"></a>

```json
"autoscaling:autoScalingGroup:DesiredCapacity"
```

<h2 id="tocS_LoadMetricType">LoadMetricType</h2>
<!-- backwards compatibility -->
<a id="schemaloadmetrictype"></a>
<a id="schema_LoadMetricType"></a>
<a id="tocSloadmetrictype"></a>
<a id="tocsloadmetrictype"></a>

```json
"ASGTotalCPUUtilization"
```

<h2 id="tocS_MetricDimensionName">MetricDimensionName</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionname"></a>
<a id="schema_MetricDimensionName"></a>
<a id="tocSmetricdimensionname"></a>
<a id="tocsmetricdimensionname"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensionValue">MetricDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionvalue"></a>
<a id="schema_MetricDimensionValue"></a>
<a id="tocSmetricdimensionvalue"></a>
<a id="tocsmetricdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_MetricDimension">MetricDimension</h2>
<!-- backwards compatibility -->
<a id="schemametricdimension"></a>
<a id="schema_MetricDimension"></a>
<a id="tocSmetricdimension"></a>
<a id="tocsmetricdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Represents a dimension for a customized metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"TargetTrackingScaling"
```

<h2 id="tocS_ResourceLabel">ResourceLabel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelabel"></a>
<a id="schema_ResourceLabel"></a>
<a id="tocSresourcelabel"></a>
<a id="tocsresourcelabel"></a>

```json
"string"
```

<h2 id="tocS_PredefinedLoadMetricSpecification">PredefinedLoadMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedloadmetricspecification"></a>
<a id="schema_PredefinedLoadMetricSpecification"></a>
<a id="tocSpredefinedloadmetricspecification"></a>
<a id="tocspredefinedloadmetricspecification"></a>

```json
{
  "PredefinedLoadMetricType": {},
  "ResourceLabel": {}
}
```

<p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedLoadMetricType|object|true|none|none|
|ResourceLabel|object|false|none|none|

<h2 id="tocS_ScalingMetricType">ScalingMetricType</h2>
<!-- backwards compatibility -->
<a id="schemascalingmetrictype"></a>
<a id="schema_ScalingMetricType"></a>
<a id="tocSscalingmetrictype"></a>
<a id="tocsscalingmetrictype"></a>

```json
"ASGAverageCPUUtilization"
```

<h2 id="tocS_PredefinedScalingMetricSpecification">PredefinedScalingMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedscalingmetricspecification"></a>
<a id="schema_PredefinedScalingMetricSpecification"></a>
<a id="tocSpredefinedscalingmetricspecification"></a>
<a id="tocspredefinedscalingmetricspecification"></a>

```json
{
  "PredefinedScalingMetricType": {},
  "ResourceLabel": {}
}
```

Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedScalingMetricType|object|true|none|none|
|ResourceLabel|object|false|none|none|

<h2 id="tocS_PredictiveScalingMaxCapacityBehavior">PredictiveScalingMaxCapacityBehavior</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingmaxcapacitybehavior"></a>
<a id="schema_PredictiveScalingMaxCapacityBehavior"></a>
<a id="tocSpredictivescalingmaxcapacitybehavior"></a>
<a id="tocspredictivescalingmaxcapacitybehavior"></a>

```json
"SetForecastCapacityToMaxCapacity"
```

<h2 id="tocS_PredictiveScalingMode">PredictiveScalingMode</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingmode"></a>
<a id="schema_PredictiveScalingMode"></a>
<a id="tocSpredictivescalingmode"></a>
<a id="tocspredictivescalingmode"></a>

```json
"ForecastAndScale"
```

<h2 id="tocS_ResourceCapacity">ResourceCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecapacity"></a>
<a id="schema_ResourceCapacity"></a>
<a id="tocSresourcecapacity"></a>
<a id="tocsresourcecapacity"></a>

```json
0
```

<h2 id="tocS_ResourceIdMaxLen1600">ResourceIdMaxLen1600</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidmaxlen1600"></a>
<a id="schema_ResourceIdMaxLen1600"></a>
<a id="tocSresourceidmaxlen1600"></a>
<a id="tocsresourceidmaxlen1600"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingConfigurations">TargetTrackingConfigurations</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingconfigurations"></a>
<a id="schema_TargetTrackingConfigurations"></a>
<a id="tocStargettrackingconfigurations"></a>
<a id="tocstargettrackingconfigurations"></a>

```json
[
  {
    "PredefinedScalingMetricSpecification": {
      "PredefinedScalingMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedScalingMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {}
    },
    "TargetValue": {},
    "DisableScaleIn": {},
    "ScaleOutCooldown": {},
    "ScaleInCooldown": {},
    "EstimatedInstanceWarmup": {}
  }
]
```

<h2 id="tocS_ScheduledActionBufferTime">ScheduledActionBufferTime</h2>
<!-- backwards compatibility -->
<a id="schemascheduledactionbuffertime"></a>
<a id="schema_ScheduledActionBufferTime"></a>
<a id="tocSscheduledactionbuffertime"></a>
<a id="tocsscheduledactionbuffertime"></a>

```json
0
```

<h2 id="tocS_ScalingPolicyUpdateBehavior">ScalingPolicyUpdateBehavior</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicyupdatebehavior"></a>
<a id="schema_ScalingPolicyUpdateBehavior"></a>
<a id="tocSscalingpolicyupdatebehavior"></a>
<a id="tocsscalingpolicyupdatebehavior"></a>

```json
"KeepExternalPolicies"
```

<h2 id="tocS_ScalingInstruction">ScalingInstruction</h2>
<!-- backwards compatibility -->
<a id="schemascalinginstruction"></a>
<a id="schema_ScalingInstruction"></a>
<a id="tocSscalinginstruction"></a>
<a id="tocsscalinginstruction"></a>

```json
{
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "MinCapacity": {},
  "MaxCapacity": {},
  "TargetTrackingConfigurations": {},
  "PredefinedLoadMetricSpecification": {
    "PredefinedLoadMetricType": {},
    "ResourceLabel": {}
  },
  "CustomizedLoadMetricSpecification": {
    "MetricName": {},
    "Namespace": {},
    "Dimensions": {},
    "Statistic": {},
    "Unit": {}
  },
  "ScheduledActionBufferTime": {},
  "PredictiveScalingMaxCapacityBehavior": {},
  "PredictiveScalingMaxCapacityBuffer": {},
  "PredictiveScalingMode": {},
  "ScalingPolicyUpdateBehavior": {},
  "DisableDynamicScaling": {}
}
```

<p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|MinCapacity|object|true|none|none|
|MaxCapacity|object|true|none|none|
|TargetTrackingConfigurations|object|true|none|none|
|PredefinedLoadMetricSpecification|object|false|none|none|
|CustomizedLoadMetricSpecification|object|false|none|none|
|ScheduledActionBufferTime|object|false|none|none|
|PredictiveScalingMaxCapacityBehavior|object|false|none|none|
|PredictiveScalingMaxCapacityBuffer|object|false|none|none|
|PredictiveScalingMode|object|false|none|none|
|ScalingPolicyUpdateBehavior|object|false|none|none|
|DisableDynamicScaling|object|false|none|none|

<h2 id="tocS_ScalingPlanStatusCode">ScalingPlanStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemascalingplanstatuscode"></a>
<a id="schema_ScalingPlanStatusCode"></a>
<a id="tocSscalingplanstatuscode"></a>
<a id="tocsscalingplanstatuscode"></a>

```json
"Active"
```

<h2 id="tocS_ScalingPlan">ScalingPlan</h2>
<!-- backwards compatibility -->
<a id="schemascalingplan"></a>
<a id="schema_ScalingPlan"></a>
<a id="tocSscalingplan"></a>
<a id="tocsscalingplan"></a>

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "ApplicationSource": {
    "CloudFormationStackARN": {},
    "TagFilters": {}
  },
  "ScalingInstructions": {},
  "StatusCode": {},
  "StatusMessage": {},
  "StatusStartTime": {},
  "CreationTime": {}
}
```

Represents a scaling plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanName|object|true|none|none|
|ScalingPlanVersion|object|true|none|none|
|ApplicationSource|object|true|none|none|
|ScalingInstructions|object|true|none|none|
|StatusCode|object|true|none|none|
|StatusMessage|object|false|none|none|
|StatusStartTime|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_ScalingPolicies">ScalingPolicies</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicies"></a>
<a id="schema_ScalingPolicies"></a>
<a id="tocSscalingpolicies"></a>
<a id="tocsscalingpolicies"></a>

```json
[
  {
    "PolicyName": {},
    "PolicyType": {},
    "TargetTrackingConfiguration": {
      "PredefinedScalingMetricSpecification": {
        "PredefinedScalingMetricType": {},
        "ResourceLabel": {}
      },
      "CustomizedScalingMetricSpecification": {
        "MetricName": {},
        "Namespace": {},
        "Dimensions": {},
        "Statistic": {},
        "Unit": {}
      },
      "TargetValue": {},
      "DisableScaleIn": {},
      "ScaleOutCooldown": {},
      "ScaleInCooldown": {},
      "EstimatedInstanceWarmup": {}
    }
  }
]
```

<h2 id="tocS_ScalingStatusCode">ScalingStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemascalingstatuscode"></a>
<a id="schema_ScalingStatusCode"></a>
<a id="tocSscalingstatuscode"></a>
<a id="tocsscalingstatuscode"></a>

```json
"Inactive"
```

<h2 id="tocS_ScalingPlanResource">ScalingPlanResource</h2>
<!-- backwards compatibility -->
<a id="schemascalingplanresource"></a>
<a id="schema_ScalingPlanResource"></a>
<a id="tocSscalingplanresource"></a>
<a id="tocsscalingplanresource"></a>

```json
{
  "ScalingPlanName": {},
  "ScalingPlanVersion": {},
  "ServiceNamespace": {},
  "ResourceId": {},
  "ScalableDimension": {},
  "ScalingPolicies": {},
  "ScalingStatusCode": {},
  "ScalingStatusMessage": {}
}
```

Represents a scalable resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPlanName|object|true|none|none|
|ScalingPlanVersion|object|true|none|none|
|ServiceNamespace|object|true|none|none|
|ResourceId|object|true|none|none|
|ScalableDimension|object|true|none|none|
|ScalingPolicies|object|false|none|none|
|ScalingStatusCode|object|true|none|none|
|ScalingStatusMessage|object|false|none|none|

<h2 id="tocS_ScalingPolicy">ScalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicy"></a>
<a id="schema_ScalingPolicy"></a>
<a id="tocSscalingpolicy"></a>
<a id="tocsscalingpolicy"></a>

```json
{
  "PolicyName": {},
  "PolicyType": {},
  "TargetTrackingConfiguration": {
    "PredefinedScalingMetricSpecification": {
      "PredefinedScalingMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedScalingMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {}
    },
    "TargetValue": {},
    "DisableScaleIn": {},
    "ScaleOutCooldown": {},
    "ScaleInCooldown": {},
    "EstimatedInstanceWarmup": {}
  }
}
```

Represents a scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|true|none|none|
|PolicyType|object|true|none|none|
|TargetTrackingConfiguration|object|false|none|none|

<h2 id="tocS_TargetTrackingConfiguration">TargetTrackingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingconfiguration"></a>
<a id="schema_TargetTrackingConfiguration"></a>
<a id="tocStargettrackingconfiguration"></a>
<a id="tocstargettrackingconfiguration"></a>

```json
{
  "PredefinedScalingMetricSpecification": {
    "PredefinedScalingMetricType": {},
    "ResourceLabel": {}
  },
  "CustomizedScalingMetricSpecification": {
    "MetricName": {},
    "Namespace": {},
    "Dimensions": {},
    "Statistic": {},
    "Unit": {}
  },
  "TargetValue": {},
  "DisableScaleIn": {},
  "ScaleOutCooldown": {},
  "ScaleInCooldown": {},
  "EstimatedInstanceWarmup": {}
}
```

Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedScalingMetricSpecification|object|false|none|none|
|CustomizedScalingMetricSpecification|object|false|none|none|
|TargetValue|object|true|none|none|
|DisableScaleIn|object|false|none|none|
|ScaleOutCooldown|object|false|none|none|
|ScaleInCooldown|object|false|none|none|
|EstimatedInstanceWarmup|object|false|none|none|

<h2 id="tocS_XmlStringMaxLen128">XmlStringMaxLen128</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen128"></a>
<a id="schema_XmlStringMaxLen128"></a>
<a id="tocSxmlstringmaxlen128"></a>
<a id="tocsxmlstringmaxlen128"></a>

```json
"string"
```

<h2 id="tocS_TagValues">TagValues</h2>
<!-- backwards compatibility -->
<a id="schematagvalues"></a>
<a id="schema_TagValues"></a>
<a id="tocStagvalues"></a>
<a id="tocstagvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

Represents a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_XmlStringMaxLen256">XmlStringMaxLen256</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen256"></a>
<a id="schema_XmlStringMaxLen256"></a>
<a id="tocSxmlstringmaxlen256"></a>
<a id="tocsxmlstringmaxlen256"></a>

```json
"string"
```
