<h1 id="aws-data-pipeline">AWS Data Pipeline v2012-10-29</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p> <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p> <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

Base URLs:

* <a href="http://datapipeline.us-east-1.amazonaws.com">http://datapipeline.us-east-1.amazonaws.com</a> - The AWS Data Pipeline multi-region endpoint

* <a href="https://datapipeline.us-east-1.amazonaws.com">https://datapipeline.us-east-1.amazonaws.com</a> - The AWS Data Pipeline multi-region endpoint

* <a href="http://datapipeline.cn-north-1.amazonaws.com.cn">http://datapipeline.cn-north-1.amazonaws.com.cn</a> - The AWS Data Pipeline endpoint for China (Beijing) and China (Ningxia)

* <a href="https://datapipeline.cn-north-1.amazonaws.com.cn">https://datapipeline.cn-north-1.amazonaws.com.cn</a> - The AWS Data Pipeline endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/datapipeline/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-data-pipeline-default">Default</h1>

## ActivatePipeline

<a id="opIdActivatePipeline"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.ActivatePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.ActivatePipeline' \
  -d '{
    "pipelineId": {},
    "parameterValues": {},
    "startTimestamp": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.ActivatePipeline`

<p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>

> Body parameter

```json
{
  "pipelineId": {},
  "parameterValues": {},
  "startTimestamp": {}
}
```

<h3 id="activatepipeline-parameters">Parameters</h3>

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
|body|body|[ActivatePipelineInput](#schemaactivatepipelineinput)|true|none|
|» pipelineId|body|object|true|none|
|» parameterValues|body|object|false|none|
|» startTimestamp|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.ActivatePipeline|

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

<h3 id="activatepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivatePipelineOutput](#schemaactivatepipelineoutput)|
|480|480|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|481|481|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddTags

<a id="opIdAddTags"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.AddTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.AddTags' \
  -d '{
    "pipelineId": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.AddTags`

Adds or modifies tags for the specified pipeline.

> Body parameter

```json
{
  "pipelineId": {},
  "tags": {}
}
```

<h3 id="addtags-parameters">Parameters</h3>

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
|body|body|[AddTagsInput](#schemaaddtagsinput)|true|none|
|» pipelineId|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.AddTags|

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

<h3 id="addtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsOutput](#schemaaddtagsoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePipeline

<a id="opIdCreatePipeline"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.CreatePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.CreatePipeline' \
  -d '{
    "name": {},
    "uniqueId": {},
    "description": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.CreatePipeline`

Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.

> Body parameter

```json
{
  "name": {},
  "uniqueId": {},
  "description": {},
  "tags": {}
}
```

<h3 id="createpipeline-parameters">Parameters</h3>

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
|body|body|[CreatePipelineInput](#schemacreatepipelineinput)|true|none|
|» name|body|object|true|none|
|» uniqueId|body|object|true|none|
|» description|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.CreatePipeline|

> Example responses

> 200 Response

```json
{
  "pipelineId": {}
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

<h3 id="createpipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePipelineOutput](#schemacreatepipelineoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeactivatePipeline

<a id="opIdDeactivatePipeline"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.DeactivatePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.DeactivatePipeline' \
  -d '{
    "pipelineId": {},
    "cancelActive": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.DeactivatePipeline`

<p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>

> Body parameter

```json
{
  "pipelineId": {},
  "cancelActive": {}
}
```

<h3 id="deactivatepipeline-parameters">Parameters</h3>

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
|body|body|[DeactivatePipelineInput](#schemadeactivatepipelineinput)|true|none|
|» pipelineId|body|object|true|none|
|» cancelActive|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.DeactivatePipeline|

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

<h3 id="deactivatepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivatePipelineOutput](#schemadeactivatepipelineoutput)|
|480|480|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|481|481|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePipeline

<a id="opIdDeletePipeline"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.DeletePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.DeletePipeline' \
  -d '{
    "pipelineId": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.DeletePipeline`

<p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>

> Body parameter

```json
{
  "pipelineId": {}
}
```

<h3 id="deletepipeline-parameters">Parameters</h3>

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
|body|body|[DeletePipelineInput](#schemadeletepipelineinput)|true|none|
|» pipelineId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.DeletePipeline|

> Example responses

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

<h3 id="deletepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeObjects

<a id="opIdDescribeObjects"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.DescribeObjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.DescribeObjects' \
  -d '{
    "pipelineId": {},
    "objectIds": {},
    "evaluateExpressions": {},
    "marker": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.DescribeObjects`

Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.

> Body parameter

```json
{
  "pipelineId": {},
  "objectIds": {},
  "evaluateExpressions": {},
  "marker": {}
}
```

<h3 id="describeobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeObjectsInput](#schemadescribeobjectsinput)|true|none|
|» pipelineId|body|object|true|none|
|» objectIds|body|object|true|none|
|» evaluateExpressions|body|object|false|none|
|» marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.DescribeObjects|

> Example responses

> 200 Response

```json
{
  "pipelineObjects": {},
  "marker": {},
  "hasMoreResults": {}
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

<h3 id="describeobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeObjectsOutput](#schemadescribeobjectsoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePipelines

<a id="opIdDescribePipelines"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.DescribePipelines' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.DescribePipelines' \
  -d '{
    "pipelineIds": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.DescribePipelines`

<p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>

> Body parameter

```json
{
  "pipelineIds": {}
}
```

<h3 id="describepipelines-parameters">Parameters</h3>

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
|body|body|[DescribePipelinesInput](#schemadescribepipelinesinput)|true|none|
|» pipelineIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.DescribePipelines|

> Example responses

> 200 Response

```json
{
  "pipelineDescriptionList": {}
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

<h3 id="describepipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePipelinesOutput](#schemadescribepipelinesoutput)|
|480|480|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|481|481|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EvaluateExpression

<a id="opIdEvaluateExpression"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.EvaluateExpression' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.EvaluateExpression' \
  -d '{
    "pipelineId": {},
    "objectId": {},
    "expression": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.EvaluateExpression`

Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.

> Body parameter

```json
{
  "pipelineId": {},
  "objectId": {},
  "expression": {}
}
```

<h3 id="evaluateexpression-parameters">Parameters</h3>

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
|body|body|[EvaluateExpressionInput](#schemaevaluateexpressioninput)|true|none|
|» pipelineId|body|object|true|none|
|» objectId|body|object|true|none|
|» expression|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.EvaluateExpression|

> Example responses

> 200 Response

```json
{
  "evaluatedExpression": {}
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

<h3 id="evaluateexpression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EvaluateExpressionOutput](#schemaevaluateexpressionoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|TaskNotFoundException|[TaskNotFoundException](#schematasknotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|484|484|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPipelineDefinition

<a id="opIdGetPipelineDefinition"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.GetPipelineDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.GetPipelineDefinition' \
  -d '{
    "pipelineId": {},
    "version": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.GetPipelineDefinition`

Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.

> Body parameter

```json
{
  "pipelineId": {},
  "version": {}
}
```

<h3 id="getpipelinedefinition-parameters">Parameters</h3>

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
|body|body|[GetPipelineDefinitionInput](#schemagetpipelinedefinitioninput)|true|none|
|» pipelineId|body|object|true|none|
|» version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.GetPipelineDefinition|

> Example responses

> 200 Response

```json
{
  "pipelineObjects": {},
  "parameterObjects": {},
  "parameterValues": {}
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

<h3 id="getpipelinedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPipelineDefinitionOutput](#schemagetpipelinedefinitionoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPipelines

<a id="opIdListPipelines"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.ListPipelines' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.ListPipelines' \
  -d '{
    "marker": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.ListPipelines`

Lists the pipeline identifiers for all active pipelines that you have permission to access.

> Body parameter

```json
{
  "marker": {}
}
```

<h3 id="listpipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPipelinesInput](#schemalistpipelinesinput)|true|none|
|» marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.ListPipelines|

> Example responses

> 200 Response

```json
{
  "pipelineIdList": {},
  "marker": {},
  "hasMoreResults": {}
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

<h3 id="listpipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPipelinesOutput](#schemalistpipelinesoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PollForTask

<a id="opIdPollForTask"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.PollForTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.PollForTask' \
  -d '{
    "workerGroup": {},
    "hostname": {},
    "instanceIdentity": {
      "document": {},
      "signature": {}
    }
  }'
```

`POST /#X-Amz-Target=DataPipeline.PollForTask`

<p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>

> Body parameter

```json
{
  "workerGroup": {},
  "hostname": {},
  "instanceIdentity": {
    "document": {},
    "signature": {}
  }
}
```

<h3 id="pollfortask-parameters">Parameters</h3>

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
|body|body|[PollForTaskInput](#schemapollfortaskinput)|true|none|
|» workerGroup|body|object|true|none|
|» hostname|body|object|false|none|
|» instanceIdentity|body|object|false|none|
|» » document|body|object|false|none|
|» » signature|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.PollForTask|

> Example responses

> 200 Response

```json
{
  "taskObject": {
    "taskId": {},
    "pipelineId": {},
    "attemptId": {},
    "objects": {
      "property1": {
        "id": {},
        "name": {},
        "fields": {}
      },
      "property2": {
        "id": {},
        "name": {},
        "fields": {}
      }
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

<h3 id="pollfortask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PollForTaskOutput](#schemapollfortaskoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TaskNotFoundException|[TaskNotFoundException](#schematasknotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPipelineDefinition

<a id="opIdPutPipelineDefinition"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.PutPipelineDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.PutPipelineDefinition' \
  -d '{
    "pipelineId": {},
    "pipelineObjects": {},
    "parameterObjects": {},
    "parameterValues": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.PutPipelineDefinition`

<p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>

> Body parameter

```json
{
  "pipelineId": {},
  "pipelineObjects": {},
  "parameterObjects": {},
  "parameterValues": {}
}
```

<h3 id="putpipelinedefinition-parameters">Parameters</h3>

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
|body|body|[PutPipelineDefinitionInput](#schemaputpipelinedefinitioninput)|true|none|
|» pipelineId|body|object|true|none|
|» pipelineObjects|body|object|true|none|
|» parameterObjects|body|object|false|none|
|» parameterValues|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.PutPipelineDefinition|

> Example responses

> 200 Response

```json
{
  "validationErrors": {},
  "validationWarnings": {},
  "errored": {}
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

<h3 id="putpipelinedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPipelineDefinitionOutput](#schemaputpipelinedefinitionoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## QueryObjects

<a id="opIdQueryObjects"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.QueryObjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.QueryObjects' \
  -d '{
    "pipelineId": {},
    "query": {
      "selectors": {}
    },
    "sphere": {},
    "marker": {},
    "limit": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.QueryObjects`

Queries the specified pipeline for the names of objects that match the specified set of conditions.

> Body parameter

```json
{
  "pipelineId": {},
  "query": {
    "selectors": {}
  },
  "sphere": {},
  "marker": {},
  "limit": {}
}
```

<h3 id="queryobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[QueryObjectsInput](#schemaqueryobjectsinput)|true|none|
|» pipelineId|body|object|true|none|
|» query|body|object|false|none|
|» » selectors|body|object|false|none|
|» sphere|body|object|true|none|
|» marker|body|object|false|none|
|» limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.QueryObjects|

> Example responses

> 200 Response

```json
{
  "ids": {},
  "marker": {},
  "hasMoreResults": {}
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

<h3 id="queryobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QueryObjectsOutput](#schemaqueryobjectsoutput)|
|480|480|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|481|481|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTags

<a id="opIdRemoveTags"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.RemoveTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.RemoveTags' \
  -d '{
    "pipelineId": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.RemoveTags`

Removes existing tags from the specified pipeline.

> Body parameter

```json
{
  "pipelineId": {},
  "tagKeys": {}
}
```

<h3 id="removetags-parameters">Parameters</h3>

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
|body|body|[RemoveTagsInput](#schemaremovetagsinput)|true|none|
|» pipelineId|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.RemoveTags|

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

<h3 id="removetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsOutput](#schemaremovetagsoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReportTaskProgress

<a id="opIdReportTaskProgress"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.ReportTaskProgress' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.ReportTaskProgress' \
  -d '{
    "taskId": {},
    "fields": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.ReportTaskProgress`

<p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>

> Body parameter

```json
{
  "taskId": {},
  "fields": {}
}
```

<h3 id="reporttaskprogress-parameters">Parameters</h3>

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
|body|body|[ReportTaskProgressInput](#schemareporttaskprogressinput)|true|none|
|» taskId|body|object|true|none|
|» fields|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.ReportTaskProgress|

> Example responses

> 200 Response

```json
{
  "canceled": {}
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

<h3 id="reporttaskprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportTaskProgressOutput](#schemareporttaskprogressoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TaskNotFoundException|[TaskNotFoundException](#schematasknotfoundexception)|
|483|483|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|484|484|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReportTaskRunnerHeartbeat

<a id="opIdReportTaskRunnerHeartbeat"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.ReportTaskRunnerHeartbeat' \
  -d '{
    "taskrunnerId": {},
    "workerGroup": {},
    "hostname": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat`

Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.

> Body parameter

```json
{
  "taskrunnerId": {},
  "workerGroup": {},
  "hostname": {}
}
```

<h3 id="reporttaskrunnerheartbeat-parameters">Parameters</h3>

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
|body|body|[ReportTaskRunnerHeartbeatInput](#schemareporttaskrunnerheartbeatinput)|true|none|
|» taskrunnerId|body|object|true|none|
|» workerGroup|body|object|false|none|
|» hostname|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.ReportTaskRunnerHeartbeat|

> Example responses

> 200 Response

```json
{
  "terminate": {}
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

<h3 id="reporttaskrunnerheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportTaskRunnerHeartbeatOutput](#schemareporttaskrunnerheartbeatoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetStatus

<a id="opIdSetStatus"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.SetStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.SetStatus' \
  -d '{
    "pipelineId": {},
    "objectIds": {},
    "status": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.SetStatus`

Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.

> Body parameter

```json
{
  "pipelineId": {},
  "objectIds": {},
  "status": {}
}
```

<h3 id="setstatus-parameters">Parameters</h3>

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
|body|body|[SetStatusInput](#schemasetstatusinput)|true|none|
|» pipelineId|body|object|true|none|
|» objectIds|body|object|true|none|
|» status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.SetStatus|

> Example responses

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

<h3 id="setstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|481|481|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetTaskStatus

<a id="opIdSetTaskStatus"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.SetTaskStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.SetTaskStatus' \
  -d '{
    "taskId": {},
    "taskStatus": {},
    "errorId": {},
    "errorMessage": {},
    "errorStackTrace": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.SetTaskStatus`

Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.

> Body parameter

```json
{
  "taskId": {},
  "taskStatus": {},
  "errorId": {},
  "errorMessage": {},
  "errorStackTrace": {}
}
```

<h3 id="settaskstatus-parameters">Parameters</h3>

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
|body|body|[SetTaskStatusInput](#schemasettaskstatusinput)|true|none|
|» taskId|body|object|true|none|
|» taskStatus|body|object|true|none|
|» errorId|body|object|false|none|
|» errorMessage|body|object|false|none|
|» errorStackTrace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.SetTaskStatus|

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

<h3 id="settaskstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetTaskStatusOutput](#schemasettaskstatusoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|TaskNotFoundException|[TaskNotFoundException](#schematasknotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|484|484|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ValidatePipelineDefinition

<a id="opIdValidatePipelineDefinition"></a>

> Code samples

```bash
curl 'https://datapipeline.us-east-1.amazonaws.com/#X-Amz-Target=DataPipeline.ValidatePipelineDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DataPipeline.ValidatePipelineDefinition' \
  -d '{
    "pipelineId": {},
    "pipelineObjects": {},
    "parameterObjects": {},
    "parameterValues": {}
  }'
```

`POST /#X-Amz-Target=DataPipeline.ValidatePipelineDefinition`

Validates the specified pipeline definition to ensure that it is well formed and can be run without error.

> Body parameter

```json
{
  "pipelineId": {},
  "pipelineObjects": {},
  "parameterObjects": {},
  "parameterValues": {}
}
```

<h3 id="validatepipelinedefinition-parameters">Parameters</h3>

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
|body|body|[ValidatePipelineDefinitionInput](#schemavalidatepipelinedefinitioninput)|true|none|
|» pipelineId|body|object|true|none|
|» pipelineObjects|body|object|true|none|
|» parameterObjects|body|object|false|none|
|» parameterValues|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DataPipeline.ValidatePipelineDefinition|

> Example responses

> 200 Response

```json
{
  "validationErrors": {},
  "validationWarnings": {},
  "errored": {}
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

<h3 id="validatepipelinedefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ValidatePipelineDefinitionOutput](#schemavalidatepipelinedefinitionoutput)|
|480|480|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|PipelineDeletedException|[PipelineDeletedException](#schemapipelinedeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ActivatePipelineOutput">ActivatePipelineOutput</h2>
<!-- backwards compatibility -->
<a id="schemaactivatepipelineoutput"></a>
<a id="schema_ActivatePipelineOutput"></a>
<a id="tocSactivatepipelineoutput"></a>
<a id="tocsactivatepipelineoutput"></a>

```json
{}
```

Contains the output of ActivatePipeline.

<h2 id="tocS_ActivatePipelineInput">ActivatePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemaactivatepipelineinput"></a>
<a id="schema_ActivatePipelineInput"></a>
<a id="tocSactivatepipelineinput"></a>
<a id="tocsactivatepipelineinput"></a>

```json
{
  "pipelineId": {},
  "parameterValues": {},
  "startTimestamp": {}
}
```

Contains the parameters for ActivatePipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|parameterValues|object|false|none|none|
|startTimestamp|object|false|none|none|

<h2 id="tocS_PipelineNotFoundException">PipelineNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapipelinenotfoundexception"></a>
<a id="schema_PipelineNotFoundException"></a>
<a id="tocSpipelinenotfoundexception"></a>
<a id="tocspipelinenotfoundexception"></a>

```json
null
```

<h2 id="tocS_PipelineDeletedException">PipelineDeletedException</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedeletedexception"></a>
<a id="schema_PipelineDeletedException"></a>
<a id="tocSpipelinedeletedexception"></a>
<a id="tocspipelinedeletedexception"></a>

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

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_AddTagsOutput">AddTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsoutput"></a>
<a id="schema_AddTagsOutput"></a>
<a id="tocSaddtagsoutput"></a>
<a id="tocsaddtagsoutput"></a>

```json
{}
```

Contains the output of AddTags.

<h2 id="tocS_AddTagsInput">AddTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsinput"></a>
<a id="schema_AddTagsInput"></a>
<a id="tocSaddtagsinput"></a>
<a id="tocsaddtagsinput"></a>

```json
{
  "pipelineId": {},
  "tags": {}
}
```

Contains the parameters for AddTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_CreatePipelineOutput">CreatePipelineOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelineoutput"></a>
<a id="schema_CreatePipelineOutput"></a>
<a id="tocScreatepipelineoutput"></a>
<a id="tocscreatepipelineoutput"></a>

```json
{
  "pipelineId": {}
}
```

Contains the output of CreatePipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|

<h2 id="tocS_CreatePipelineInput">CreatePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelineinput"></a>
<a id="schema_CreatePipelineInput"></a>
<a id="tocScreatepipelineinput"></a>
<a id="tocscreatepipelineinput"></a>

```json
{
  "name": {},
  "uniqueId": {},
  "description": {},
  "tags": {}
}
```

Contains the parameters for CreatePipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|uniqueId|object|true|none|none|
|description|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeactivatePipelineOutput">DeactivatePipelineOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatepipelineoutput"></a>
<a id="schema_DeactivatePipelineOutput"></a>
<a id="tocSdeactivatepipelineoutput"></a>
<a id="tocsdeactivatepipelineoutput"></a>

```json
{}
```

Contains the output of DeactivatePipeline.

<h2 id="tocS_DeactivatePipelineInput">DeactivatePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatepipelineinput"></a>
<a id="schema_DeactivatePipelineInput"></a>
<a id="tocSdeactivatepipelineinput"></a>
<a id="tocsdeactivatepipelineinput"></a>

```json
{
  "pipelineId": {},
  "cancelActive": {}
}
```

Contains the parameters for DeactivatePipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|cancelActive|object|false|none|none|

<h2 id="tocS_DeletePipelineInput">DeletePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletepipelineinput"></a>
<a id="schema_DeletePipelineInput"></a>
<a id="tocSdeletepipelineinput"></a>
<a id="tocsdeletepipelineinput"></a>

```json
{
  "pipelineId": {}
}
```

Contains the parameters for DeletePipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|

<h2 id="tocS_DescribeObjectsOutput">DescribeObjectsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobjectsoutput"></a>
<a id="schema_DescribeObjectsOutput"></a>
<a id="tocSdescribeobjectsoutput"></a>
<a id="tocsdescribeobjectsoutput"></a>

```json
{
  "pipelineObjects": {},
  "marker": {},
  "hasMoreResults": {}
}
```

Contains the output of DescribeObjects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineObjects|object|true|none|none|
|marker|object|false|none|none|
|hasMoreResults|object|false|none|none|

<h2 id="tocS_DescribeObjectsInput">DescribeObjectsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobjectsinput"></a>
<a id="schema_DescribeObjectsInput"></a>
<a id="tocSdescribeobjectsinput"></a>
<a id="tocsdescribeobjectsinput"></a>

```json
{
  "pipelineId": {},
  "objectIds": {},
  "evaluateExpressions": {},
  "marker": {}
}
```

Contains the parameters for DescribeObjects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|objectIds|object|true|none|none|
|evaluateExpressions|object|false|none|none|
|marker|object|false|none|none|

<h2 id="tocS_DescribePipelinesOutput">DescribePipelinesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribepipelinesoutput"></a>
<a id="schema_DescribePipelinesOutput"></a>
<a id="tocSdescribepipelinesoutput"></a>
<a id="tocsdescribepipelinesoutput"></a>

```json
{
  "pipelineDescriptionList": {}
}
```

Contains the output of DescribePipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineDescriptionList|object|true|none|none|

<h2 id="tocS_DescribePipelinesInput">DescribePipelinesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribepipelinesinput"></a>
<a id="schema_DescribePipelinesInput"></a>
<a id="tocSdescribepipelinesinput"></a>
<a id="tocsdescribepipelinesinput"></a>

```json
{
  "pipelineIds": {}
}
```

Contains the parameters for DescribePipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineIds|object|true|none|none|

<h2 id="tocS_EvaluateExpressionOutput">EvaluateExpressionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateexpressionoutput"></a>
<a id="schema_EvaluateExpressionOutput"></a>
<a id="tocSevaluateexpressionoutput"></a>
<a id="tocsevaluateexpressionoutput"></a>

```json
{
  "evaluatedExpression": {}
}
```

Contains the output of EvaluateExpression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluatedExpression|object|true|none|none|

<h2 id="tocS_EvaluateExpressionInput">EvaluateExpressionInput</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateexpressioninput"></a>
<a id="schema_EvaluateExpressionInput"></a>
<a id="tocSevaluateexpressioninput"></a>
<a id="tocsevaluateexpressioninput"></a>

```json
{
  "pipelineId": {},
  "objectId": {},
  "expression": {}
}
```

Contains the parameters for EvaluateExpression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|objectId|object|true|none|none|
|expression|object|true|none|none|

<h2 id="tocS_TaskNotFoundException">TaskNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematasknotfoundexception"></a>
<a id="schema_TaskNotFoundException"></a>
<a id="tocStasknotfoundexception"></a>
<a id="tocstasknotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetPipelineDefinitionOutput">GetPipelineDefinitionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelinedefinitionoutput"></a>
<a id="schema_GetPipelineDefinitionOutput"></a>
<a id="tocSgetpipelinedefinitionoutput"></a>
<a id="tocsgetpipelinedefinitionoutput"></a>

```json
{
  "pipelineObjects": {},
  "parameterObjects": {},
  "parameterValues": {}
}
```

Contains the output of GetPipelineDefinition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineObjects|object|false|none|none|
|parameterObjects|object|false|none|none|
|parameterValues|object|false|none|none|

<h2 id="tocS_GetPipelineDefinitionInput">GetPipelineDefinitionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelinedefinitioninput"></a>
<a id="schema_GetPipelineDefinitionInput"></a>
<a id="tocSgetpipelinedefinitioninput"></a>
<a id="tocsgetpipelinedefinitioninput"></a>

```json
{
  "pipelineId": {},
  "version": {}
}
```

Contains the parameters for GetPipelineDefinition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|version|object|false|none|none|

<h2 id="tocS_ListPipelinesOutput">ListPipelinesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesoutput"></a>
<a id="schema_ListPipelinesOutput"></a>
<a id="tocSlistpipelinesoutput"></a>
<a id="tocslistpipelinesoutput"></a>

```json
{
  "pipelineIdList": {},
  "marker": {},
  "hasMoreResults": {}
}
```

Contains the output of ListPipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineIdList|object|true|none|none|
|marker|object|false|none|none|
|hasMoreResults|object|false|none|none|

<h2 id="tocS_ListPipelinesInput">ListPipelinesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesinput"></a>
<a id="schema_ListPipelinesInput"></a>
<a id="tocSlistpipelinesinput"></a>
<a id="tocslistpipelinesinput"></a>

```json
{
  "marker": {}
}
```

Contains the parameters for ListPipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marker|object|false|none|none|

<h2 id="tocS_PollForTaskOutput">PollForTaskOutput</h2>
<!-- backwards compatibility -->
<a id="schemapollfortaskoutput"></a>
<a id="schema_PollForTaskOutput"></a>
<a id="tocSpollfortaskoutput"></a>
<a id="tocspollfortaskoutput"></a>

```json
{
  "taskObject": {
    "taskId": {},
    "pipelineId": {},
    "attemptId": {},
    "objects": {
      "property1": {
        "id": {},
        "name": {},
        "fields": {}
      },
      "property2": {
        "id": {},
        "name": {},
        "fields": {}
      }
    }
  }
}
```

Contains the output of PollForTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskObject|object|false|none|none|

<h2 id="tocS_PollForTaskInput">PollForTaskInput</h2>
<!-- backwards compatibility -->
<a id="schemapollfortaskinput"></a>
<a id="schema_PollForTaskInput"></a>
<a id="tocSpollfortaskinput"></a>
<a id="tocspollfortaskinput"></a>

```json
{
  "workerGroup": {},
  "hostname": {},
  "instanceIdentity": {
    "document": {},
    "signature": {}
  }
}
```

Contains the parameters for PollForTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workerGroup|object|true|none|none|
|hostname|object|false|none|none|
|instanceIdentity|object|false|none|none|

<h2 id="tocS_PutPipelineDefinitionOutput">PutPipelineDefinitionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputpipelinedefinitionoutput"></a>
<a id="schema_PutPipelineDefinitionOutput"></a>
<a id="tocSputpipelinedefinitionoutput"></a>
<a id="tocsputpipelinedefinitionoutput"></a>

```json
{
  "validationErrors": {},
  "validationWarnings": {},
  "errored": {}
}
```

Contains the output of PutPipelineDefinition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validationErrors|object|false|none|none|
|validationWarnings|object|false|none|none|
|errored|object|true|none|none|

<h2 id="tocS_PutPipelineDefinitionInput">PutPipelineDefinitionInput</h2>
<!-- backwards compatibility -->
<a id="schemaputpipelinedefinitioninput"></a>
<a id="schema_PutPipelineDefinitionInput"></a>
<a id="tocSputpipelinedefinitioninput"></a>
<a id="tocsputpipelinedefinitioninput"></a>

```json
{
  "pipelineId": {},
  "pipelineObjects": {},
  "parameterObjects": {},
  "parameterValues": {}
}
```

Contains the parameters for PutPipelineDefinition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|pipelineObjects|object|true|none|none|
|parameterObjects|object|false|none|none|
|parameterValues|object|false|none|none|

<h2 id="tocS_QueryObjectsOutput">QueryObjectsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaqueryobjectsoutput"></a>
<a id="schema_QueryObjectsOutput"></a>
<a id="tocSqueryobjectsoutput"></a>
<a id="tocsqueryobjectsoutput"></a>

```json
{
  "ids": {},
  "marker": {},
  "hasMoreResults": {}
}
```

Contains the output of QueryObjects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|
|marker|object|false|none|none|
|hasMoreResults|object|false|none|none|

<h2 id="tocS_QueryObjectsInput">QueryObjectsInput</h2>
<!-- backwards compatibility -->
<a id="schemaqueryobjectsinput"></a>
<a id="schema_QueryObjectsInput"></a>
<a id="tocSqueryobjectsinput"></a>
<a id="tocsqueryobjectsinput"></a>

```json
{
  "pipelineId": {},
  "query": {
    "selectors": {}
  },
  "sphere": {},
  "marker": {},
  "limit": {}
}
```

Contains the parameters for QueryObjects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|query|object|false|none|none|
|sphere|object|true|none|none|
|marker|object|false|none|none|
|limit|object|false|none|none|

<h2 id="tocS_RemoveTagsOutput">RemoveTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsoutput"></a>
<a id="schema_RemoveTagsOutput"></a>
<a id="tocSremovetagsoutput"></a>
<a id="tocsremovetagsoutput"></a>

```json
{}
```

Contains the output of RemoveTags.

<h2 id="tocS_RemoveTagsInput">RemoveTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsinput"></a>
<a id="schema_RemoveTagsInput"></a>
<a id="tocSremovetagsinput"></a>
<a id="tocsremovetagsinput"></a>

```json
{
  "pipelineId": {},
  "tagKeys": {}
}
```

Contains the parameters for RemoveTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_ReportTaskProgressOutput">ReportTaskProgressOutput</h2>
<!-- backwards compatibility -->
<a id="schemareporttaskprogressoutput"></a>
<a id="schema_ReportTaskProgressOutput"></a>
<a id="tocSreporttaskprogressoutput"></a>
<a id="tocsreporttaskprogressoutput"></a>

```json
{
  "canceled": {}
}
```

Contains the output of ReportTaskProgress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canceled|object|true|none|none|

<h2 id="tocS_ReportTaskProgressInput">ReportTaskProgressInput</h2>
<!-- backwards compatibility -->
<a id="schemareporttaskprogressinput"></a>
<a id="schema_ReportTaskProgressInput"></a>
<a id="tocSreporttaskprogressinput"></a>
<a id="tocsreporttaskprogressinput"></a>

```json
{
  "taskId": {},
  "fields": {}
}
```

Contains the parameters for ReportTaskProgress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|object|true|none|none|
|fields|object|false|none|none|

<h2 id="tocS_ReportTaskRunnerHeartbeatOutput">ReportTaskRunnerHeartbeatOutput</h2>
<!-- backwards compatibility -->
<a id="schemareporttaskrunnerheartbeatoutput"></a>
<a id="schema_ReportTaskRunnerHeartbeatOutput"></a>
<a id="tocSreporttaskrunnerheartbeatoutput"></a>
<a id="tocsreporttaskrunnerheartbeatoutput"></a>

```json
{
  "terminate": {}
}
```

Contains the output of ReportTaskRunnerHeartbeat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terminate|object|true|none|none|

<h2 id="tocS_ReportTaskRunnerHeartbeatInput">ReportTaskRunnerHeartbeatInput</h2>
<!-- backwards compatibility -->
<a id="schemareporttaskrunnerheartbeatinput"></a>
<a id="schema_ReportTaskRunnerHeartbeatInput"></a>
<a id="tocSreporttaskrunnerheartbeatinput"></a>
<a id="tocsreporttaskrunnerheartbeatinput"></a>

```json
{
  "taskrunnerId": {},
  "workerGroup": {},
  "hostname": {}
}
```

Contains the parameters for ReportTaskRunnerHeartbeat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskrunnerId|object|true|none|none|
|workerGroup|object|false|none|none|
|hostname|object|false|none|none|

<h2 id="tocS_SetStatusInput">SetStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemasetstatusinput"></a>
<a id="schema_SetStatusInput"></a>
<a id="tocSsetstatusinput"></a>
<a id="tocssetstatusinput"></a>

```json
{
  "pipelineId": {},
  "objectIds": {},
  "status": {}
}
```

Contains the parameters for SetStatus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|objectIds|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_SetTaskStatusOutput">SetTaskStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemasettaskstatusoutput"></a>
<a id="schema_SetTaskStatusOutput"></a>
<a id="tocSsettaskstatusoutput"></a>
<a id="tocssettaskstatusoutput"></a>

```json
{}
```

Contains the output of SetTaskStatus.

<h2 id="tocS_SetTaskStatusInput">SetTaskStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemasettaskstatusinput"></a>
<a id="schema_SetTaskStatusInput"></a>
<a id="tocSsettaskstatusinput"></a>
<a id="tocssettaskstatusinput"></a>

```json
{
  "taskId": {},
  "taskStatus": {},
  "errorId": {},
  "errorMessage": {},
  "errorStackTrace": {}
}
```

Contains the parameters for SetTaskStatus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|object|true|none|none|
|taskStatus|object|true|none|none|
|errorId|object|false|none|none|
|errorMessage|object|false|none|none|
|errorStackTrace|object|false|none|none|

<h2 id="tocS_ValidatePipelineDefinitionOutput">ValidatePipelineDefinitionOutput</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepipelinedefinitionoutput"></a>
<a id="schema_ValidatePipelineDefinitionOutput"></a>
<a id="tocSvalidatepipelinedefinitionoutput"></a>
<a id="tocsvalidatepipelinedefinitionoutput"></a>

```json
{
  "validationErrors": {},
  "validationWarnings": {},
  "errored": {}
}
```

Contains the output of ValidatePipelineDefinition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validationErrors|object|false|none|none|
|validationWarnings|object|false|none|none|
|errored|object|true|none|none|

<h2 id="tocS_ValidatePipelineDefinitionInput">ValidatePipelineDefinitionInput</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepipelinedefinitioninput"></a>
<a id="schema_ValidatePipelineDefinitionInput"></a>
<a id="tocSvalidatepipelinedefinitioninput"></a>
<a id="tocsvalidatepipelinedefinitioninput"></a>

```json
{
  "pipelineId": {},
  "pipelineObjects": {},
  "parameterObjects": {},
  "parameterValues": {}
}
```

Contains the parameters for ValidatePipelineDefinition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|pipelineObjects|object|true|none|none|
|parameterObjects|object|false|none|none|
|parameterValues|object|false|none|none|

<h2 id="tocS_id">id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_ParameterValueList">ParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaparametervaluelist"></a>
<a id="schema_ParameterValueList"></a>
<a id="tocSparametervaluelist"></a>
<a id="tocsparametervaluelist"></a>

```json
[
  {
    "id": {},
    "stringValue": {}
  }
]
```

<h2 id="tocS_timestamp">timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_tagList">tagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_tagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_cancelActive">cancelActive</h2>
<!-- backwards compatibility -->
<a id="schemacancelactive"></a>
<a id="schema_cancelActive"></a>
<a id="tocScancelactive"></a>
<a id="tocscancelactive"></a>

```json
true
```

<h2 id="tocS_idList">idList</h2>
<!-- backwards compatibility -->
<a id="schemaidlist"></a>
<a id="schema_idList"></a>
<a id="tocSidlist"></a>
<a id="tocsidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_PipelineObjectList">PipelineObjectList</h2>
<!-- backwards compatibility -->
<a id="schemapipelineobjectlist"></a>
<a id="schema_PipelineObjectList"></a>
<a id="tocSpipelineobjectlist"></a>
<a id="tocspipelineobjectlist"></a>

```json
[
  {
    "id": {},
    "name": {},
    "fields": {}
  }
]
```

<h2 id="tocS_PipelineDescriptionList">PipelineDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedescriptionlist"></a>
<a id="schema_PipelineDescriptionList"></a>
<a id="tocSpipelinedescriptionlist"></a>
<a id="tocspipelinedescriptionlist"></a>

```json
[
  {
    "pipelineId": {},
    "name": {},
    "fields": {},
    "description": {},
    "tags": {}
  }
]
```

<h2 id="tocS_longString">longString</h2>
<!-- backwards compatibility -->
<a id="schemalongstring"></a>
<a id="schema_longString"></a>
<a id="tocSlongstring"></a>
<a id="tocslongstring"></a>

```json
"string"
```

<h2 id="tocS_fieldNameString">fieldNameString</h2>
<!-- backwards compatibility -->
<a id="schemafieldnamestring"></a>
<a id="schema_fieldNameString"></a>
<a id="tocSfieldnamestring"></a>
<a id="tocsfieldnamestring"></a>

```json
"string"
```

<h2 id="tocS_fieldStringValue">fieldStringValue</h2>
<!-- backwards compatibility -->
<a id="schemafieldstringvalue"></a>
<a id="schema_fieldStringValue"></a>
<a id="tocSfieldstringvalue"></a>
<a id="tocsfieldstringvalue"></a>

```json
"string"
```

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "key": {},
  "stringValue": {},
  "refValue": {}
}
```

A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|stringValue|object|false|none|none|
|refValue|object|false|none|none|

<h2 id="tocS_ParameterObjectList">ParameterObjectList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterobjectlist"></a>
<a id="schema_ParameterObjectList"></a>
<a id="tocSparameterobjectlist"></a>
<a id="tocsparameterobjectlist"></a>

```json
[
  {
    "id": {},
    "attributes": {}
  }
]
```

<h2 id="tocS_InstanceIdentity">InstanceIdentity</h2>
<!-- backwards compatibility -->
<a id="schemainstanceidentity"></a>
<a id="schema_InstanceIdentity"></a>
<a id="tocSinstanceidentity"></a>
<a id="tocsinstanceidentity"></a>

```json
{
  "document": {},
  "signature": {}
}
```

<p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|object|false|none|none|
|signature|object|false|none|none|

<h2 id="tocS_pipelineList">pipelineList</h2>
<!-- backwards compatibility -->
<a id="schemapipelinelist"></a>
<a id="schema_pipelineList"></a>
<a id="tocSpipelinelist"></a>
<a id="tocspipelinelist"></a>

```json
[
  {
    "id": {},
    "name": {}
  }
]
```

<h2 id="tocS_OperatorType">OperatorType</h2>
<!-- backwards compatibility -->
<a id="schemaoperatortype"></a>
<a id="schema_OperatorType"></a>
<a id="tocSoperatortype"></a>
<a id="tocsoperatortype"></a>

```json
"EQ"
```

<h2 id="tocS_stringList">stringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_stringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Operator">Operator</h2>
<!-- backwards compatibility -->
<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
{
  "type": {},
  "values": {}
}
```

Contains a logical operation for comparing the value of a field with a specified value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_attributeNameString">attributeNameString</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamestring"></a>
<a id="schema_attributeNameString"></a>
<a id="tocSattributenamestring"></a>
<a id="tocsattributenamestring"></a>

```json
"string"
```

<h2 id="tocS_attributeValueString">attributeValueString</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluestring"></a>
<a id="schema_attributeValueString"></a>
<a id="tocSattributevaluestring"></a>
<a id="tocsattributevaluestring"></a>

```json
"string"
```

<h2 id="tocS_ParameterAttribute">ParameterAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaparameterattribute"></a>
<a id="schema_ParameterAttribute"></a>
<a id="tocSparameterattribute"></a>
<a id="tocsparameterattribute"></a>

```json
{
  "key": {},
  "stringValue": {}
}
```

The attributes allowed or specified with a parameter object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|stringValue|object|true|none|none|

<h2 id="tocS_ParameterAttributeList">ParameterAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterattributelist"></a>
<a id="schema_ParameterAttributeList"></a>
<a id="tocSparameterattributelist"></a>
<a id="tocsparameterattributelist"></a>

```json
[
  {
    "key": {},
    "stringValue": {}
  }
]
```

<h2 id="tocS_ParameterObject">ParameterObject</h2>
<!-- backwards compatibility -->
<a id="schemaparameterobject"></a>
<a id="schema_ParameterObject"></a>
<a id="tocSparameterobject"></a>
<a id="tocsparameterobject"></a>

```json
{
  "id": {},
  "attributes": {}
}
```

Contains information about a parameter object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|attributes|object|true|none|none|

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
{
  "id": {},
  "stringValue": {}
}
```

A value or list of parameter values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|stringValue|object|true|none|none|

<h2 id="tocS_fieldList">fieldList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlist"></a>
<a id="schema_fieldList"></a>
<a id="tocSfieldlist"></a>
<a id="tocsfieldlist"></a>

```json
[
  {
    "key": {},
    "stringValue": {},
    "refValue": {}
  }
]
```

<h2 id="tocS_PipelineDescription">PipelineDescription</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedescription"></a>
<a id="schema_PipelineDescription"></a>
<a id="tocSpipelinedescription"></a>
<a id="tocspipelinedescription"></a>

```json
{
  "pipelineId": {},
  "name": {},
  "fields": {},
  "description": {},
  "tags": {}
}
```

Contains pipeline metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineId|object|true|none|none|
|name|object|true|none|none|
|fields|object|true|none|none|
|description|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PipelineIdName">PipelineIdName</h2>
<!-- backwards compatibility -->
<a id="schemapipelineidname"></a>
<a id="schema_PipelineIdName"></a>
<a id="tocSpipelineidname"></a>
<a id="tocspipelineidname"></a>

```json
{
  "id": {},
  "name": {}
}
```

Contains the name and identifier of a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_PipelineObject">PipelineObject</h2>
<!-- backwards compatibility -->
<a id="schemapipelineobject"></a>
<a id="schema_PipelineObject"></a>
<a id="tocSpipelineobject"></a>
<a id="tocspipelineobject"></a>

```json
{
  "id": {},
  "name": {},
  "fields": {}
}
```

Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|fields|object|true|none|none|

<h2 id="tocS_PipelineObjectMap">PipelineObjectMap</h2>
<!-- backwards compatibility -->
<a id="schemapipelineobjectmap"></a>
<a id="schema_PipelineObjectMap"></a>
<a id="tocSpipelineobjectmap"></a>
<a id="tocspipelineobjectmap"></a>

```json
{
  "property1": {
    "id": {},
    "name": {},
    "fields": {}
  },
  "property2": {
    "id": {},
    "name": {},
    "fields": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PipelineObject](#schemapipelineobject)|false|none|Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.|

<h2 id="tocS_TaskObject">TaskObject</h2>
<!-- backwards compatibility -->
<a id="schemataskobject"></a>
<a id="schema_TaskObject"></a>
<a id="tocStaskobject"></a>
<a id="tocstaskobject"></a>

```json
{
  "taskId": {},
  "pipelineId": {},
  "attemptId": {},
  "objects": {
    "property1": {
      "id": {},
      "name": {},
      "fields": {}
    },
    "property2": {
      "id": {},
      "name": {},
      "fields": {}
    }
  }
}
```

Contains information about a pipeline task that is assigned to a task runner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|object|false|none|none|
|pipelineId|object|false|none|none|
|attemptId|object|false|none|none|
|objects|object|false|none|none|

<h2 id="tocS_ValidationErrors">ValidationErrors</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrors"></a>
<a id="schema_ValidationErrors"></a>
<a id="tocSvalidationerrors"></a>
<a id="tocsvalidationerrors"></a>

```json
[
  {
    "id": {},
    "errors": {}
  }
]
```

<h2 id="tocS_ValidationWarnings">ValidationWarnings</h2>
<!-- backwards compatibility -->
<a id="schemavalidationwarnings"></a>
<a id="schema_ValidationWarnings"></a>
<a id="tocSvalidationwarnings"></a>
<a id="tocsvalidationwarnings"></a>

```json
[
  {
    "id": {},
    "warnings": {}
  }
]
```

<h2 id="tocS_SelectorList">SelectorList</h2>
<!-- backwards compatibility -->
<a id="schemaselectorlist"></a>
<a id="schema_SelectorList"></a>
<a id="tocSselectorlist"></a>
<a id="tocsselectorlist"></a>

```json
[
  {
    "fieldName": {},
    "operator": {
      "type": {},
      "values": {}
    }
  }
]
```

The list of Selectors that define queries on individual fields.

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "selectors": {}
}
```

Defines the query to run against an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectors|object|false|none|none|

<h2 id="tocS_int">int</h2>
<!-- backwards compatibility -->
<a id="schemaint"></a>
<a id="schema_int"></a>
<a id="tocSint"></a>
<a id="tocsint"></a>

```json
0
```

<h2 id="tocS_taskId">taskId</h2>
<!-- backwards compatibility -->
<a id="schemataskid"></a>
<a id="schema_taskId"></a>
<a id="tocStaskid"></a>
<a id="tocstaskid"></a>

```json
"string"
```

<h2 id="tocS_Selector">Selector</h2>
<!-- backwards compatibility -->
<a id="schemaselector"></a>
<a id="schema_Selector"></a>
<a id="tocSselector"></a>
<a id="tocsselector"></a>

```json
{
  "fieldName": {},
  "operator": {
    "type": {},
    "values": {}
  }
}
```

A comparision that is used to determine whether a query should return this object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|object|false|none|none|
|operator|[Operator](#schemaoperator)|false|none|Contains a logical operation for comparing the value of a field with a specified value.|

<h2 id="tocS_TaskStatus">TaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskstatus"></a>
<a id="schema_TaskStatus"></a>
<a id="tocStaskstatus"></a>
<a id="tocstaskstatus"></a>

```json
"FINISHED"
```

<h2 id="tocS_errorMessage">errorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_errorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_tagKey">tagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_tagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_tagValue">tagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_tagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": {},
  "value": {}
}
```

Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_validationMessages">validationMessages</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmessages"></a>
<a id="schema_validationMessages"></a>
<a id="tocSvalidationmessages"></a>
<a id="tocsvalidationmessages"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "id": {},
  "errors": {}
}
```

Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_ValidationWarning">ValidationWarning</h2>
<!-- backwards compatibility -->
<a id="schemavalidationwarning"></a>
<a id="schema_ValidationWarning"></a>
<a id="tocSvalidationwarning"></a>
<a id="tocsvalidationwarning"></a>

```json
{
  "id": {},
  "warnings": {}
}
```

Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|warnings|object|false|none|none|

<h2 id="tocS_validationMessage">validationMessage</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmessage"></a>
<a id="schema_validationMessage"></a>
<a id="tocSvalidationmessage"></a>
<a id="tocsvalidationmessage"></a>

```json
"string"
```
