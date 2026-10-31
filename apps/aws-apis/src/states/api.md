<h1 id="aws-step-functions">AWS Step Functions v2016-11-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Step Functions</fullname> <p>Step Functions is a service that lets you coordinate the components of distributed applications and microservices using visual workflows.</p> <p>You can use Step Functions to build applications from individual components, each of which performs a discrete function, or <i>task</i>, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues.</p> <p>Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API. For more information about Step Functions, see the <i> <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a> </i>.</p>

Base URLs:

* <a href="http://states.us-east-1.amazonaws.com">http://states.us-east-1.amazonaws.com</a> - The AWS SFN multi-region endpoint

* <a href="https://states.us-east-1.amazonaws.com">https://states.us-east-1.amazonaws.com</a> - The AWS SFN multi-region endpoint

* <a href="http://states.cn-north-1.amazonaws.com.cn">http://states.cn-north-1.amazonaws.com.cn</a> - The AWS SFN endpoint for China (Beijing) and China (Ningxia)

* <a href="https://states.cn-north-1.amazonaws.com.cn">https://states.cn-north-1.amazonaws.com.cn</a> - The AWS SFN endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/states/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-step-functions-default">Default</h1>

## CreateActivity

<a id="opIdCreateActivity"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.CreateActivity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.CreateActivity' \
  -d '{
    "name": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.CreateActivity`

<p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency check is based on the activity <code>name</code>. If a following request has different <code>tags</code> values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

> Body parameter

```json
{
  "name": {},
  "tags": {}
}
```

<h3 id="createactivity-parameters">Parameters</h3>

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
|body|body|[CreateActivityInput](#schemacreateactivityinput)|true|none|
|» name|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.CreateActivity|

> Example responses

> 200 Response

```json
{
  "activityArn": {},
  "creationDate": {}
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

<h3 id="createactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateActivityOutput](#schemacreateactivityoutput)|
|480|480|ActivityLimitExceeded|[ActivityLimitExceeded](#schemaactivitylimitexceeded)|
|481|481|InvalidName|[InvalidName](#schemainvalidname)|
|482|482|TooManyTags|[TooManyTags](#schematoomanytags)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStateMachine

<a id="opIdCreateStateMachine"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.CreateStateMachine' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.CreateStateMachine' \
  -d '{
    "name": {},
    "definition": {},
    "roleArn": {},
    "type": {},
    "loggingConfiguration": {
      "level": {},
      "includeExecutionData": {},
      "destinations": {}
    },
    "tags": {},
    "tracingConfiguration": {
      "enabled": {}
    },
    "publish": {},
    "versionDescription": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.CreateStateMachine`

<p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the Step Functions User Guide.</p> <p>If you set the <code>publish</code> parameter of this API action to <code>true</code>, it publishes version <code>1</code> as the first revision of the state machine.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, <code>LoggingConfiguration</code>, and <code>TracingConfiguration</code>. The check is also based on the <code>publish</code> and <code>versionDescription</code> parameters. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>

> Body parameter

```json
{
  "name": {},
  "definition": {},
  "roleArn": {},
  "type": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tags": {},
  "tracingConfiguration": {
    "enabled": {}
  },
  "publish": {},
  "versionDescription": {}
}
```

<h3 id="createstatemachine-parameters">Parameters</h3>

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
|body|body|[CreateStateMachineInput](#schemacreatestatemachineinput)|true|none|
|» name|body|object|true|none|
|» definition|body|object|true|none|
|» roleArn|body|object|true|none|
|» type|body|object|false|none|
|» loggingConfiguration|body|object|false|none|
|» » level|body|object|false|none|
|» » includeExecutionData|body|object|false|none|
|» » destinations|body|object|false|none|
|» tags|body|object|false|none|
|» tracingConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» publish|body|object|false|none|
|» versionDescription|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.CreateStateMachine|

> Example responses

> 200 Response

```json
{
  "stateMachineArn": {},
  "creationDate": {},
  "stateMachineVersionArn": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="createstatemachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStateMachineOutput](#schemacreatestatemachineoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|InvalidDefinition|[InvalidDefinition](#schemainvaliddefinition)|
|482|482|InvalidName|[InvalidName](#schemainvalidname)|
|483|483|InvalidLoggingConfiguration|[InvalidLoggingConfiguration](#schemainvalidloggingconfiguration)|
|484|484|InvalidTracingConfiguration|[InvalidTracingConfiguration](#schemainvalidtracingconfiguration)|
|485|485|StateMachineAlreadyExists|[StateMachineAlreadyExists](#schemastatemachinealreadyexists)|
|486|486|StateMachineDeleting|[StateMachineDeleting](#schemastatemachinedeleting)|
|487|487|StateMachineLimitExceeded|[StateMachineLimitExceeded](#schemastatemachinelimitexceeded)|
|488|488|StateMachineTypeNotSupported|[StateMachineTypeNotSupported](#schemastatemachinetypenotsupported)|
|489|489|TooManyTags|[TooManyTags](#schematoomanytags)|
|490|490|ValidationException|[ValidationException](#schemavalidationexception)|
|491|491|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStateMachineAlias

<a id="opIdCreateStateMachineAlias"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.CreateStateMachineAlias' \
  -d '{
    "description": {},
    "name": {},
    "routingConfiguration": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias`

<p>Creates an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> for a state machine that points to one or two <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> of the same state machine. You can set your application to call <a>StartExecution</a> with an alias and update the version the alias uses without changing the client's code.</p> <p>You can also map an alias to split <a>StartExecution</a> requests between two versions of a state machine. To do this, add a second <code>RoutingConfig</code> object in the <code>routingConfiguration</code> parameter. You must also specify the percentage of execution run requests each version should receive in both <code>RoutingConfig</code> objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify.</p> <p>To create an alias that points to a single version, specify a single <code>RoutingConfig</code> object with a <code>weight</code> set to 100.</p> <p>You can create up to 100 aliases for each state machine. You must delete unused aliases using the <a>DeleteStateMachineAlias</a> API action.</p> <p> <code>CreateStateMachineAlias</code> is an idempotent API. Step Functions bases the idempotency check on the <code>stateMachineArn</code>, <code>description</code>, <code>name</code>, and <code>routingConfiguration</code> parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate resource.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "description": {},
  "name": {},
  "routingConfiguration": {}
}
```

<h3 id="createstatemachinealias-parameters">Parameters</h3>

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
|body|body|[CreateStateMachineAliasInput](#schemacreatestatemachinealiasinput)|true|none|
|» description|body|object|false|none|
|» name|body|object|true|none|
|» routingConfiguration|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.CreateStateMachineAlias|

> Example responses

> 200 Response

```json
{
  "stateMachineAliasArn": {},
  "creationDate": {}
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

<h3 id="createstatemachinealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStateMachineAliasOutput](#schemacreatestatemachinealiasoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|InvalidName|[InvalidName](#schemainvalidname)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|StateMachineDeleting|[StateMachineDeleting](#schemastatemachinedeleting)|
|484|484|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteActivity

<a id="opIdDeleteActivity"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DeleteActivity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DeleteActivity' \
  -d '{
    "activityArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DeleteActivity`

Deletes an activity.

> Body parameter

```json
{
  "activityArn": {}
}
```

<h3 id="deleteactivity-parameters">Parameters</h3>

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
|body|body|[DeleteActivityInput](#schemadeleteactivityinput)|true|none|
|» activityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DeleteActivity|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteActivityOutput](#schemadeleteactivityoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStateMachine

<a id="opIdDeleteStateMachine"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DeleteStateMachine' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DeleteStateMachine' \
  -d '{
    "stateMachineArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DeleteStateMachine`

<p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. </p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine</code> </p> </li> </ul> <p>This API action also deletes all <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> and <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> associated with a state machine.</p> <note> <p>For <code>EXPRESS</code> state machines, the deletion happens eventually (usually in less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>

> Body parameter

```json
{
  "stateMachineArn": {}
}
```

<h3 id="deletestatemachine-parameters">Parameters</h3>

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
|body|body|[DeleteStateMachineInput](#schemadeletestatemachineinput)|true|none|
|» stateMachineArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DeleteStateMachine|

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

<h3 id="deletestatemachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStateMachineOutput](#schemadeletestatemachineoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStateMachineAlias

<a id="opIdDeleteStateMachineAlias"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DeleteStateMachineAlias' \
  -d '{
    "stateMachineAliasArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias`

<p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <p>After you delete a state machine alias, you can't use it to start executions. When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias references.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "stateMachineAliasArn": {}
}
```

<h3 id="deletestatemachinealias-parameters">Parameters</h3>

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
|body|body|[DeleteStateMachineAliasInput](#schemadeletestatemachinealiasinput)|true|none|
|» stateMachineAliasArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DeleteStateMachineAlias|

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

<h3 id="deletestatemachinealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStateMachineAliasOutput](#schemadeletestatemachinealiasoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStateMachineVersion

<a id="opIdDeleteStateMachineVersion"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DeleteStateMachineVersion' \
  -d '{
    "stateMachineVersionArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion`

<p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. After you delete a version, you can't call <a>StartExecution</a> using that version's ARN or use the version with a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <note> <p>Deleting a state machine version won't terminate its in-progress executions.</p> </note> <note> <p>You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version.</p> </note> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>PublishStateMachineVersion</a> </p> </li> <li> <p> <a>ListStateMachineVersions</a> </p> </li> </ul>

> Body parameter

```json
{
  "stateMachineVersionArn": {}
}
```

<h3 id="deletestatemachineversion-parameters">Parameters</h3>

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
|body|body|[DeleteStateMachineVersionInput](#schemadeletestatemachineversioninput)|true|none|
|» stateMachineVersionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DeleteStateMachineVersion|

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

<h3 id="deletestatemachineversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStateMachineVersionOutput](#schemadeletestatemachineversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeActivity

<a id="opIdDescribeActivity"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DescribeActivity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DescribeActivity' \
  -d '{
    "activityArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DescribeActivity`

<p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

> Body parameter

```json
{
  "activityArn": {}
}
```

<h3 id="describeactivity-parameters">Parameters</h3>

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
|body|body|[DescribeActivityInput](#schemadescribeactivityinput)|true|none|
|» activityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DescribeActivity|

> Example responses

> 200 Response

```json
{
  "activityArn": {},
  "name": {},
  "creationDate": {}
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

<h3 id="describeactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeActivityOutput](#schemadescribeactivityoutput)|
|480|480|ActivityDoesNotExist|[ActivityDoesNotExist](#schemaactivitydoesnotexist)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExecution

<a id="opIdDescribeExecution"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DescribeExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DescribeExecution' \
  -d '{
    "executionArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DescribeExecution`

<p>Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run.</p> <p>If you specify a version or alias ARN when you call the <a>StartExecution</a> API action, <code>DescribeExecution</code> returns that ARN.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>Executions of an <code>EXPRESS</code> state machinearen't supported by <code>DescribeExecution</code> unless a Map Run dispatched them.</p>

> Body parameter

```json
{
  "executionArn": {}
}
```

<h3 id="describeexecution-parameters">Parameters</h3>

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
|body|body|[DescribeExecutionInput](#schemadescribeexecutioninput)|true|none|
|» executionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DescribeExecution|

> Example responses

> 200 Response

```json
{
  "executionArn": {},
  "stateMachineArn": {},
  "name": {},
  "status": {},
  "startDate": {},
  "stopDate": {},
  "input": {},
  "inputDetails": {
    "included": {}
  },
  "output": {},
  "outputDetails": {
    "included": {}
  },
  "traceHeader": {},
  "mapRunArn": {},
  "error": {},
  "cause": {},
  "stateMachineVersionArn": {},
  "stateMachineAliasArn": {}
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

<h3 id="describeexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExecutionOutput](#schemadescribeexecutionoutput)|
|480|480|ExecutionDoesNotExist|[ExecutionDoesNotExist](#schemaexecutiondoesnotexist)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMapRun

<a id="opIdDescribeMapRun"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DescribeMapRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DescribeMapRun' \
  -d '{
    "mapRunArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DescribeMapRun`

Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.

> Body parameter

```json
{
  "mapRunArn": {}
}
```

<h3 id="describemaprun-parameters">Parameters</h3>

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
|body|body|[DescribeMapRunInput](#schemadescribemapruninput)|true|none|
|» mapRunArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DescribeMapRun|

> Example responses

> 200 Response

```json
{
  "mapRunArn": {},
  "executionArn": {},
  "status": {},
  "startDate": {},
  "stopDate": {},
  "maxConcurrency": {},
  "toleratedFailurePercentage": {},
  "toleratedFailureCount": {},
  "itemCounts": {
    "pending": {},
    "running": {},
    "succeeded": {},
    "failed": {},
    "timedOut": {},
    "aborted": {},
    "total": {},
    "resultsWritten": {}
  },
  "executionCounts": {
    "pending": {},
    "running": {},
    "succeeded": {},
    "failed": {},
    "timedOut": {},
    "aborted": {},
    "total": {},
    "resultsWritten": {}
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

<h3 id="describemaprun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMapRunOutput](#schemadescribemaprunoutput)|
|480|480|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStateMachine

<a id="opIdDescribeStateMachine"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DescribeStateMachine' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DescribeStateMachine' \
  -d '{
    "stateMachineArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DescribeStateMachine`

<p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>This API action returns the details for a state machine version if the <code>stateMachineArn</code> you specify is a state machine version ARN.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

> Body parameter

```json
{
  "stateMachineArn": {}
}
```

<h3 id="describestatemachine-parameters">Parameters</h3>

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
|body|body|[DescribeStateMachineInput](#schemadescribestatemachineinput)|true|none|
|» stateMachineArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DescribeStateMachine|

> Example responses

> 200 Response

```json
{
  "stateMachineArn": {},
  "name": {},
  "status": {},
  "definition": {},
  "roleArn": {},
  "type": {},
  "creationDate": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tracingConfiguration": {
    "enabled": {}
  },
  "label": {},
  "revisionId": {},
  "description": {}
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

<h3 id="describestatemachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStateMachineOutput](#schemadescribestatemachineoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|StateMachineDoesNotExist|[StateMachineDoesNotExist](#schemastatemachinedoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStateMachineAlias

<a id="opIdDescribeStateMachineAlias"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DescribeStateMachineAlias' \
  -d '{
    "stateMachineAliasArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias`

<p>Returns details about a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "stateMachineAliasArn": {}
}
```

<h3 id="describestatemachinealias-parameters">Parameters</h3>

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
|body|body|[DescribeStateMachineAliasInput](#schemadescribestatemachinealiasinput)|true|none|
|» stateMachineAliasArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DescribeStateMachineAlias|

> Example responses

> 200 Response

```json
{
  "stateMachineAliasArn": {},
  "name": {},
  "description": {},
  "routingConfiguration": {},
  "creationDate": {},
  "updateDate": {}
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

<h3 id="describestatemachinealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStateMachineAliasOutput](#schemadescribestatemachinealiasoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStateMachineForExecution

<a id="opIdDescribeStateMachineForExecution"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.DescribeStateMachineForExecution' \
  -d '{
    "executionArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution`

<p>Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

> Body parameter

```json
{
  "executionArn": {}
}
```

<h3 id="describestatemachineforexecution-parameters">Parameters</h3>

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
|body|body|[DescribeStateMachineForExecutionInput](#schemadescribestatemachineforexecutioninput)|true|none|
|» executionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.DescribeStateMachineForExecution|

> Example responses

> 200 Response

```json
{
  "stateMachineArn": {},
  "name": {},
  "definition": {},
  "roleArn": {},
  "updateDate": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tracingConfiguration": {
    "enabled": {}
  },
  "mapRunArn": {},
  "label": {},
  "revisionId": {}
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

<h3 id="describestatemachineforexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStateMachineForExecutionOutput](#schemadescribestatemachineforexecutionoutput)|
|480|480|ExecutionDoesNotExist|[ExecutionDoesNotExist](#schemaexecutiondoesnotexist)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetActivityTask

<a id="opIdGetActivityTask"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.GetActivityTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.GetActivityTask' \
  -d '{
    "activityArn": {},
    "workerName": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.GetActivityTask`

<p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <note> <p>This API action isn't logged in CloudTrail.</p> </note> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>

> Body parameter

```json
{
  "activityArn": {},
  "workerName": {}
}
```

<h3 id="getactivitytask-parameters">Parameters</h3>

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
|body|body|[GetActivityTaskInput](#schemagetactivitytaskinput)|true|none|
|» activityArn|body|object|true|none|
|» workerName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.GetActivityTask|

> Example responses

> 200 Response

```json
{
  "taskToken": {},
  "input": {}
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

<h3 id="getactivitytask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetActivityTaskOutput](#schemagetactivitytaskoutput)|
|480|480|ActivityDoesNotExist|[ActivityDoesNotExist](#schemaactivitydoesnotexist)|
|481|481|ActivityWorkerLimitExceeded|[ActivityWorkerLimitExceeded](#schemaactivityworkerlimitexceeded)|
|482|482|InvalidArn|[InvalidArn](#schemainvalidarn)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExecutionHistory

<a id="opIdGetExecutionHistory"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.GetExecutionHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.GetExecutionHistory' \
  -d '{
    "executionArn": {},
    "maxResults": {},
    "reverseOrder": {},
    "nextToken": {},
    "includeExecutionData": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.GetExecutionHistory`

<p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

> Body parameter

```json
{
  "executionArn": {},
  "maxResults": {},
  "reverseOrder": {},
  "nextToken": {},
  "includeExecutionData": {}
}
```

<h3 id="getexecutionhistory-parameters">Parameters</h3>

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
|body|body|[GetExecutionHistoryInput](#schemagetexecutionhistoryinput)|true|none|
|» executionArn|body|object|true|none|
|» maxResults|body|object|false|none|
|» reverseOrder|body|object|false|none|
|» nextToken|body|object|false|none|
|» includeExecutionData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.GetExecutionHistory|

> Example responses

> 200 Response

```json
{
  "events": {},
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

<h3 id="getexecutionhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExecutionHistoryOutput](#schemagetexecutionhistoryoutput)|
|480|480|ExecutionDoesNotExist|[ExecutionDoesNotExist](#schemaexecutiondoesnotexist)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|InvalidToken|[InvalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListActivities

<a id="opIdListActivities"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.ListActivities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.ListActivities' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.ListActivities`

<p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listactivities-parameters">Parameters</h3>

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
|body|body|[ListActivitiesInput](#schemalistactivitiesinput)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.ListActivities|

> Example responses

> 200 Response

```json
{
  "activities": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListActivitiesOutput](#schemalistactivitiesoutput)|
|480|480|InvalidToken|[InvalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExecutions

<a id="opIdListExecutions"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.ListExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.ListExecutions' \
  -d '{
    "stateMachineArn": {},
    "statusFilter": {},
    "maxResults": {},
    "nextToken": {},
    "mapRunArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.ListExecutions`

<p>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN.</p> <p>You can also provide a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> ARN or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a> ARN to list the executions associated with a specific alias or version.</p> <p>Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

> Body parameter

```json
{
  "stateMachineArn": {},
  "statusFilter": {},
  "maxResults": {},
  "nextToken": {},
  "mapRunArn": {}
}
```

<h3 id="listexecutions-parameters">Parameters</h3>

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
|body|body|[ListExecutionsInput](#schemalistexecutionsinput)|true|none|
|» stateMachineArn|body|object|false|none|
|» statusFilter|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» mapRunArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.ListExecutions|

> Example responses

> 200 Response

```json
{
  "executions": {},
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

<h3 id="listexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExecutionsOutput](#schemalistexecutionsoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|InvalidToken|[InvalidToken](#schemainvalidtoken)|
|482|482|StateMachineDoesNotExist|[StateMachineDoesNotExist](#schemastatemachinedoesnotexist)|
|483|483|StateMachineTypeNotSupported|[StateMachineTypeNotSupported](#schemastatemachinetypenotsupported)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMapRuns

<a id="opIdListMapRuns"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.ListMapRuns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.ListMapRuns' \
  -d '{
    "executionArn": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.ListMapRuns`

Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.

> Body parameter

```json
{
  "executionArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listmapruns-parameters">Parameters</h3>

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
|body|body|[ListMapRunsInput](#schemalistmaprunsinput)|true|none|
|» executionArn|body|object|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.ListMapRuns|

> Example responses

> 200 Response

```json
{
  "mapRuns": {},
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

<h3 id="listmapruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMapRunsOutput](#schemalistmaprunsoutput)|
|480|480|ExecutionDoesNotExist|[ExecutionDoesNotExist](#schemaexecutiondoesnotexist)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|InvalidToken|[InvalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStateMachineAliases

<a id="opIdListStateMachineAliases"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.ListStateMachineAliases' \
  -d '{
    "stateMachineArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases`

<p>Lists <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. </p> <p>To list aliases that reference a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, you can specify the version ARN in the <code>stateMachineArn</code> parameter.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "stateMachineArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="liststatemachinealiases-parameters">Parameters</h3>

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
|body|body|[ListStateMachineAliasesInput](#schemaliststatemachinealiasesinput)|true|none|
|» stateMachineArn|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.ListStateMachineAliases|

> Example responses

> 200 Response

```json
{
  "stateMachineAliases": {},
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

<h3 id="liststatemachinealiases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStateMachineAliasesOutput](#schemaliststatemachinealiasesoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|InvalidToken|[InvalidToken](#schemainvalidtoken)|
|482|482|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|483|483|StateMachineDoesNotExist|[StateMachineDoesNotExist](#schemastatemachinedoesnotexist)|
|484|484|StateMachineDeleting|[StateMachineDeleting](#schemastatemachinedeleting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStateMachineVersions

<a id="opIdListStateMachineVersions"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.ListStateMachineVersions' \
  -d '{
    "stateMachineArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions`

<p>Lists <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> for the specified state machine Amazon Resource Name (ARN).</p> <p>The results are sorted in descending order of the version creation time.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>PublishStateMachineVersion</a> </p> </li> <li> <p> <a>DeleteStateMachineVersion</a> </p> </li> </ul>

> Body parameter

```json
{
  "stateMachineArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="liststatemachineversions-parameters">Parameters</h3>

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
|body|body|[ListStateMachineVersionsInput](#schemaliststatemachineversionsinput)|true|none|
|» stateMachineArn|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.ListStateMachineVersions|

> Example responses

> 200 Response

```json
{
  "stateMachineVersions": {},
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

<h3 id="liststatemachineversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStateMachineVersionsOutput](#schemaliststatemachineversionsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|InvalidToken|[InvalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStateMachines

<a id="opIdListStateMachines"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.ListStateMachines' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.ListStateMachines' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.ListStateMachines`

<p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="liststatemachines-parameters">Parameters</h3>

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
|body|body|[ListStateMachinesInput](#schemaliststatemachinesinput)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.ListStateMachines|

> Example responses

> 200 Response

```json
{
  "stateMachines": [
    {
      "stateMachineArn": {},
      "name": {},
      "type": {},
      "creationDate": {}
    }
  ],
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="liststatemachines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStateMachinesOutput](#schemaliststatemachinesoutput)|
|480|480|InvalidToken|[InvalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.ListTagsForResource`

<p>List tags for a given resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishStateMachineVersion

<a id="opIdPublishStateMachineVersion"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.PublishStateMachineVersion' \
  -d '{
    "stateMachineArn": {},
    "revisionId": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion`

<p>Creates a <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a> from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use <a>CreateStateMachineAlias</a>.</p> <p>You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the <a>DeleteStateMachineVersion</a> API action.</p> <p> <code>PublishStateMachineVersion</code> is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases <code>PublishStateMachineVersion</code>'s idempotency check on the <code>stateMachineArn</code>, <code>name</code>, and <code>revisionId</code> parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a <code>revisionId</code>, Step Functions checks for a previously published version of the state machine's current revision.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteStateMachineVersion</a> </p> </li> <li> <p> <a>ListStateMachineVersions</a> </p> </li> </ul>

> Body parameter

```json
{
  "stateMachineArn": {},
  "revisionId": {},
  "description": {}
}
```

<h3 id="publishstatemachineversion-parameters">Parameters</h3>

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
|body|body|[PublishStateMachineVersionInput](#schemapublishstatemachineversioninput)|true|none|
|» stateMachineArn|body|object|true|none|
|» revisionId|body|object|false|none|
|» description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.PublishStateMachineVersion|

> Example responses

> 200 Response

```json
{
  "creationDate": {},
  "stateMachineVersionArn": {}
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

<h3 id="publishstatemachineversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishStateMachineVersionOutput](#schemapublishstatemachineversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|StateMachineDeleting|[StateMachineDeleting](#schemastatemachinedeleting)|
|482|482|StateMachineDoesNotExist|[StateMachineDoesNotExist](#schemastatemachinedoesnotexist)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InvalidArn|[InvalidArn](#schemainvalidarn)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendTaskFailure

<a id="opIdSendTaskFailure"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.SendTaskFailure' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.SendTaskFailure' \
  -d '{
    "taskToken": {},
    "error": {},
    "cause": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.SendTaskFailure`

Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> failed.

> Body parameter

```json
{
  "taskToken": {},
  "error": {},
  "cause": {}
}
```

<h3 id="sendtaskfailure-parameters">Parameters</h3>

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
|body|body|[SendTaskFailureInput](#schemasendtaskfailureinput)|true|none|
|» taskToken|body|object|true|none|
|» error|body|object|false|none|
|» cause|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.SendTaskFailure|

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

<h3 id="sendtaskfailure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendTaskFailureOutput](#schemasendtaskfailureoutput)|
|480|480|TaskDoesNotExist|[TaskDoesNotExist](#schemataskdoesnotexist)|
|481|481|InvalidToken|[InvalidToken](#schemainvalidtoken)|
|482|482|TaskTimedOut|[TaskTimedOut](#schematasktimedout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendTaskHeartbeat

<a id="opIdSendTaskHeartbeat"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.SendTaskHeartbeat' \
  -d '{
    "taskToken": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat`

<p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval for heartbeats.</p> </note>

> Body parameter

```json
{
  "taskToken": {}
}
```

<h3 id="sendtaskheartbeat-parameters">Parameters</h3>

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
|body|body|[SendTaskHeartbeatInput](#schemasendtaskheartbeatinput)|true|none|
|» taskToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.SendTaskHeartbeat|

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

<h3 id="sendtaskheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendTaskHeartbeatOutput](#schemasendtaskheartbeatoutput)|
|480|480|TaskDoesNotExist|[TaskDoesNotExist](#schemataskdoesnotexist)|
|481|481|InvalidToken|[InvalidToken](#schemainvalidtoken)|
|482|482|TaskTimedOut|[TaskTimedOut](#schematasktimedout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendTaskSuccess

<a id="opIdSendTaskSuccess"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.SendTaskSuccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.SendTaskSuccess' \
  -d '{
    "taskToken": {},
    "output": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.SendTaskSuccess`

Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> completed successfully.

> Body parameter

```json
{
  "taskToken": {},
  "output": {}
}
```

<h3 id="sendtasksuccess-parameters">Parameters</h3>

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
|body|body|[SendTaskSuccessInput](#schemasendtasksuccessinput)|true|none|
|» taskToken|body|object|true|none|
|» output|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.SendTaskSuccess|

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

<h3 id="sendtasksuccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendTaskSuccessOutput](#schemasendtasksuccessoutput)|
|480|480|TaskDoesNotExist|[TaskDoesNotExist](#schemataskdoesnotexist)|
|481|481|InvalidOutput|[InvalidOutput](#schemainvalidoutput)|
|482|482|InvalidToken|[InvalidToken](#schemainvalidtoken)|
|483|483|TaskTimedOut|[TaskTimedOut](#schematasktimedout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartExecution

<a id="opIdStartExecution"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.StartExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.StartExecution' \
  -d '{
    "stateMachineArn": {},
    "name": {},
    "input": {},
    "traceHeader": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.StartExecution`

<p>Starts a state machine execution.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution.</p> <p>To start executions of a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, call <code>StartExecution</code> and provide the version ARN or the ARN of an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> that points to the version.</p> <note> <p> <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a <code>STANDARD</code> workflow, if you call <code>StartExecution</code> with the same name and input as a running execution, the call succeeds and return the same response as the original request. If the execution is closed or if the input is different, it returns a <code>400 ExecutionAlreadyExists</code> error. You can reuse names after 90 days. </p> <p> <code>StartExecution</code> isn't idempotent for <code>EXPRESS</code> workflows. </p> </note>

> Body parameter

```json
{
  "stateMachineArn": {},
  "name": {},
  "input": {},
  "traceHeader": {}
}
```

<h3 id="startexecution-parameters">Parameters</h3>

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
|body|body|[StartExecutionInput](#schemastartexecutioninput)|true|none|
|» stateMachineArn|body|object|true|none|
|» name|body|object|false|none|
|» input|body|object|false|none|
|» traceHeader|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.StartExecution|

> Example responses

> 200 Response

```json
{
  "executionArn": {},
  "startDate": {}
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

<h3 id="startexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartExecutionOutput](#schemastartexecutionoutput)|
|480|480|ExecutionLimitExceeded|[ExecutionLimitExceeded](#schemaexecutionlimitexceeded)|
|481|481|ExecutionAlreadyExists|[ExecutionAlreadyExists](#schemaexecutionalreadyexists)|
|482|482|InvalidArn|[InvalidArn](#schemainvalidarn)|
|483|483|InvalidExecutionInput|[InvalidExecutionInput](#schemainvalidexecutioninput)|
|484|484|InvalidName|[InvalidName](#schemainvalidname)|
|485|485|StateMachineDoesNotExist|[StateMachineDoesNotExist](#schemastatemachinedoesnotexist)|
|486|486|StateMachineDeleting|[StateMachineDeleting](#schemastatemachinedeleting)|
|487|487|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSyncExecution

<a id="opIdStartSyncExecution"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.StartSyncExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.StartSyncExecution' \
  -d '{
    "stateMachineArn": {},
    "name": {},
    "input": {},
    "traceHeader": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.StartSyncExecution`

<p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code> is not available for <code>STANDARD</code> workflows.</p> <note> <p> <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. </p> </note> <note> <p>This API action isn't logged in CloudTrail.</p> </note>

> Body parameter

```json
{
  "stateMachineArn": {},
  "name": {},
  "input": {},
  "traceHeader": {}
}
```

<h3 id="startsyncexecution-parameters">Parameters</h3>

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
|body|body|[StartSyncExecutionInput](#schemastartsyncexecutioninput)|true|none|
|» stateMachineArn|body|object|true|none|
|» name|body|object|false|none|
|» input|body|object|false|none|
|» traceHeader|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.StartSyncExecution|

> Example responses

> 200 Response

```json
{
  "executionArn": {},
  "stateMachineArn": {},
  "name": {},
  "startDate": {},
  "stopDate": {},
  "status": {},
  "error": {},
  "cause": {},
  "input": {},
  "inputDetails": {
    "included": {}
  },
  "output": {},
  "outputDetails": {
    "included": {}
  },
  "traceHeader": {},
  "billingDetails": {
    "billedMemoryUsedInMB": {},
    "billedDurationInMilliseconds": {}
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

<h3 id="startsyncexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSyncExecutionOutput](#schemastartsyncexecutionoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|InvalidExecutionInput|[InvalidExecutionInput](#schemainvalidexecutioninput)|
|482|482|InvalidName|[InvalidName](#schemainvalidname)|
|483|483|StateMachineDoesNotExist|[StateMachineDoesNotExist](#schemastatemachinedoesnotexist)|
|484|484|StateMachineDeleting|[StateMachineDeleting](#schemastatemachinedeleting)|
|485|485|StateMachineTypeNotSupported|[StateMachineTypeNotSupported](#schemastatemachinetypenotsupported)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopExecution

<a id="opIdStopExecution"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.StopExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.StopExecution' \
  -d '{
    "executionArn": {},
    "error": {},
    "cause": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.StopExecution`

<p>Stops an execution.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

> Body parameter

```json
{
  "executionArn": {},
  "error": {},
  "cause": {}
}
```

<h3 id="stopexecution-parameters">Parameters</h3>

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
|body|body|[StopExecutionInput](#schemastopexecutioninput)|true|none|
|» executionArn|body|object|true|none|
|» error|body|object|false|none|
|» cause|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.StopExecution|

> Example responses

> 200 Response

```json
{
  "stopDate": {}
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

<h3 id="stopexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopExecutionOutput](#schemastopexecutionoutput)|
|480|480|ExecutionDoesNotExist|[ExecutionDoesNotExist](#schemaexecutiondoesnotexist)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.TagResource`

<p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>

> Body parameter

```json
{
  "resourceArn": {},
  "tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.TagResource|

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
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|482|482|TooManyTags|[TooManyTags](#schematoomanytags)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.UntagResource`

Remove a tag from a Step Functions resource

> Body parameter

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMapRun

<a id="opIdUpdateMapRun"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.UpdateMapRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.UpdateMapRun' \
  -d '{
    "mapRunArn": {},
    "maxConcurrency": {},
    "toleratedFailurePercentage": {},
    "toleratedFailureCount": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.UpdateMapRun`

Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.

> Body parameter

```json
{
  "mapRunArn": {},
  "maxConcurrency": {},
  "toleratedFailurePercentage": {},
  "toleratedFailureCount": {}
}
```

<h3 id="updatemaprun-parameters">Parameters</h3>

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
|body|body|[UpdateMapRunInput](#schemaupdatemapruninput)|true|none|
|» mapRunArn|body|object|true|none|
|» maxConcurrency|body|object|false|none|
|» toleratedFailurePercentage|body|object|false|none|
|» toleratedFailureCount|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.UpdateMapRun|

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

<h3 id="updatemaprun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMapRunOutput](#schemaupdatemaprunoutput)|
|480|480|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStateMachine

<a id="opIdUpdateStateMachine"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.UpdateStateMachine' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.UpdateStateMachine' \
  -d '{
    "stateMachineArn": {},
    "definition": {},
    "roleArn": {},
    "loggingConfiguration": {
      "level": {},
      "includeExecutionData": {},
      "destinations": {}
    },
    "tracingConfiguration": {
      "enabled": {}
    },
    "publish": {},
    "versionDescription": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.UpdateStateMachine`

<p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>After you update your state machine, you can set the <code>publish</code> parameter to <code>true</code> in the same action to publish a new <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. This way, you can opt-in to strict versioning of your state machine.</p> <note> <p>Step Functions assigns monotonically increasing integers for state machine versions, starting at version number 1.</p> </note> <note> <p>All <code>StartExecution</code> calls within a few seconds use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after you call <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>

> Body parameter

```json
{
  "stateMachineArn": {},
  "definition": {},
  "roleArn": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tracingConfiguration": {
    "enabled": {}
  },
  "publish": {},
  "versionDescription": {}
}
```

<h3 id="updatestatemachine-parameters">Parameters</h3>

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
|body|body|[UpdateStateMachineInput](#schemaupdatestatemachineinput)|true|none|
|» stateMachineArn|body|object|true|none|
|» definition|body|object|false|none|
|» roleArn|body|object|false|none|
|» loggingConfiguration|body|object|false|none|
|» » level|body|object|false|none|
|» » includeExecutionData|body|object|false|none|
|» » destinations|body|object|false|none|
|» tracingConfiguration|body|object|false|none|
|» » enabled|body|object|false|none|
|» publish|body|object|false|none|
|» versionDescription|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.UpdateStateMachine|

> Example responses

> 200 Response

```json
{
  "updateDate": {},
  "revisionId": {},
  "stateMachineVersionArn": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="updatestatemachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStateMachineOutput](#schemaupdatestatemachineoutput)|
|480|480|InvalidArn|[InvalidArn](#schemainvalidarn)|
|481|481|InvalidDefinition|[InvalidDefinition](#schemainvaliddefinition)|
|482|482|InvalidLoggingConfiguration|[InvalidLoggingConfiguration](#schemainvalidloggingconfiguration)|
|483|483|InvalidTracingConfiguration|[InvalidTracingConfiguration](#schemainvalidtracingconfiguration)|
|484|484|MissingRequiredParameter|[MissingRequiredParameter](#schemamissingrequiredparameter)|
|485|485|StateMachineDeleting|[StateMachineDeleting](#schemastatemachinedeleting)|
|486|486|StateMachineDoesNotExist|[StateMachineDoesNotExist](#schemastatemachinedoesnotexist)|
|487|487|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|488|488|ConflictException|[ConflictException](#schemaconflictexception)|
|489|489|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStateMachineAlias

<a id="opIdUpdateStateMachineAlias"></a>

> Code samples

```bash
curl 'https://states.us-east-1.amazonaws.com/#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSStepFunctions.UpdateStateMachineAlias' \
  -d '{
    "stateMachineAliasArn": {},
    "description": {},
    "routingConfiguration": {}
  }'
```

`POST /#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias`

<p>Updates the configuration of an existing state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> by modifying its <code>description</code> or <code>routingConfiguration</code>.</p> <p>You must specify at least one of the <code>description</code> or <code>routingConfiguration</code> parameters to update a state machine alias.</p> <note> <p> <code>UpdateStateMachineAlias</code> is an idempotent API. Step Functions bases the idempotency check on the <code>stateMachineAliasArn</code>, <code>description</code>, and <code>routingConfiguration</code> parameters. Requests with the same parameters return an idempotent response.</p> </note> <note> <p>This operation is eventually consistent. All <a>StartExecution</a> requests made within a few seconds use the latest alias configuration. Executions started immediately after calling <code>UpdateStateMachineAlias</code> may use the previous routing configuration.</p> </note> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>

> Body parameter

```json
{
  "stateMachineAliasArn": {},
  "description": {},
  "routingConfiguration": {}
}
```

<h3 id="updatestatemachinealias-parameters">Parameters</h3>

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
|body|body|[UpdateStateMachineAliasInput](#schemaupdatestatemachinealiasinput)|true|none|
|» stateMachineAliasArn|body|object|true|none|
|» description|body|object|false|none|
|» routingConfiguration|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSStepFunctions.UpdateStateMachineAlias|

> Example responses

> 200 Response

```json
{
  "updateDate": {}
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

<h3 id="updatestatemachinealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStateMachineAliasOutput](#schemaupdatestatemachinealiasoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidArn|[InvalidArn](#schemainvalidarn)|
|482|482|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateActivityOutput">CreateActivityOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateactivityoutput"></a>
<a id="schema_CreateActivityOutput"></a>
<a id="tocScreateactivityoutput"></a>
<a id="tocscreateactivityoutput"></a>

```json
{
  "activityArn": {},
  "creationDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityArn|object|true|none|none|
|creationDate|object|true|none|none|

<h2 id="tocS_CreateActivityInput">CreateActivityInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateactivityinput"></a>
<a id="schema_CreateActivityInput"></a>
<a id="tocScreateactivityinput"></a>
<a id="tocscreateactivityinput"></a>

```json
{
  "name": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ActivityLimitExceeded">ActivityLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaactivitylimitexceeded"></a>
<a id="schema_ActivityLimitExceeded"></a>
<a id="tocSactivitylimitexceeded"></a>
<a id="tocsactivitylimitexceeded"></a>

```json
null
```

<h2 id="tocS_InvalidName">InvalidName</h2>
<!-- backwards compatibility -->
<a id="schemainvalidname"></a>
<a id="schema_InvalidName"></a>
<a id="tocSinvalidname"></a>
<a id="tocsinvalidname"></a>

```json
null
```

<h2 id="tocS_TooManyTags">TooManyTags</h2>
<!-- backwards compatibility -->
<a id="schematoomanytags"></a>
<a id="schema_TooManyTags"></a>
<a id="tocStoomanytags"></a>
<a id="tocstoomanytags"></a>

```json
null
```

<h2 id="tocS_CreateStateMachineOutput">CreateStateMachineOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestatemachineoutput"></a>
<a id="schema_CreateStateMachineOutput"></a>
<a id="tocScreatestatemachineoutput"></a>
<a id="tocscreatestatemachineoutput"></a>

```json
{
  "stateMachineArn": {},
  "creationDate": {},
  "stateMachineVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|creationDate|object|true|none|none|
|stateMachineVersionArn|object|false|none|none|

<h2 id="tocS_CreateStateMachineInput">CreateStateMachineInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestatemachineinput"></a>
<a id="schema_CreateStateMachineInput"></a>
<a id="tocScreatestatemachineinput"></a>
<a id="tocscreatestatemachineinput"></a>

```json
{
  "name": {},
  "definition": {},
  "roleArn": {},
  "type": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tags": {},
  "tracingConfiguration": {
    "enabled": {}
  },
  "publish": {},
  "versionDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|definition|object|true|none|none|
|roleArn|object|true|none|none|
|type|object|false|none|none|
|loggingConfiguration|object|false|none|none|
|tags|object|false|none|none|
|tracingConfiguration|object|false|none|none|
|publish|object|false|none|none|
|versionDescription|object|false|none|none|

<h2 id="tocS_InvalidArn">InvalidArn</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarn"></a>
<a id="schema_InvalidArn"></a>
<a id="tocSinvalidarn"></a>
<a id="tocsinvalidarn"></a>

```json
null
```

<h2 id="tocS_InvalidDefinition">InvalidDefinition</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddefinition"></a>
<a id="schema_InvalidDefinition"></a>
<a id="tocSinvaliddefinition"></a>
<a id="tocsinvaliddefinition"></a>

```json
null
```

<h2 id="tocS_InvalidLoggingConfiguration">InvalidLoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainvalidloggingconfiguration"></a>
<a id="schema_InvalidLoggingConfiguration"></a>
<a id="tocSinvalidloggingconfiguration"></a>
<a id="tocsinvalidloggingconfiguration"></a>

```json
null
```

<h2 id="tocS_InvalidTracingConfiguration">InvalidTracingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtracingconfiguration"></a>
<a id="schema_InvalidTracingConfiguration"></a>
<a id="tocSinvalidtracingconfiguration"></a>
<a id="tocsinvalidtracingconfiguration"></a>

```json
null
```

<h2 id="tocS_StateMachineAlreadyExists">StateMachineAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinealreadyexists"></a>
<a id="schema_StateMachineAlreadyExists"></a>
<a id="tocSstatemachinealreadyexists"></a>
<a id="tocsstatemachinealreadyexists"></a>

```json
null
```

<h2 id="tocS_StateMachineDeleting">StateMachineDeleting</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinedeleting"></a>
<a id="schema_StateMachineDeleting"></a>
<a id="tocSstatemachinedeleting"></a>
<a id="tocsstatemachinedeleting"></a>

```json
null
```

<h2 id="tocS_StateMachineLimitExceeded">StateMachineLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinelimitexceeded"></a>
<a id="schema_StateMachineLimitExceeded"></a>
<a id="tocSstatemachinelimitexceeded"></a>
<a id="tocsstatemachinelimitexceeded"></a>

```json
null
```

<h2 id="tocS_StateMachineTypeNotSupported">StateMachineTypeNotSupported</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinetypenotsupported"></a>
<a id="schema_StateMachineTypeNotSupported"></a>
<a id="tocSstatemachinetypenotsupported"></a>
<a id="tocsstatemachinetypenotsupported"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateStateMachineAliasOutput">CreateStateMachineAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestatemachinealiasoutput"></a>
<a id="schema_CreateStateMachineAliasOutput"></a>
<a id="tocScreatestatemachinealiasoutput"></a>
<a id="tocscreatestatemachinealiasoutput"></a>

```json
{
  "stateMachineAliasArn": {},
  "creationDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineAliasArn|object|true|none|none|
|creationDate|object|true|none|none|

<h2 id="tocS_CreateStateMachineAliasInput">CreateStateMachineAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestatemachinealiasinput"></a>
<a id="schema_CreateStateMachineAliasInput"></a>
<a id="tocScreatestatemachinealiasinput"></a>
<a id="tocscreatestatemachinealiasinput"></a>

```json
{
  "description": {},
  "name": {},
  "routingConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|name|object|true|none|none|
|routingConfiguration|object|true|none|none|

<h2 id="tocS_ResourceNotFound">ResourceNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfound"></a>
<a id="schema_ResourceNotFound"></a>
<a id="tocSresourcenotfound"></a>
<a id="tocsresourcenotfound"></a>

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

<h2 id="tocS_DeleteActivityOutput">DeleteActivityOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteactivityoutput"></a>
<a id="schema_DeleteActivityOutput"></a>
<a id="tocSdeleteactivityoutput"></a>
<a id="tocsdeleteactivityoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteActivityInput">DeleteActivityInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteactivityinput"></a>
<a id="schema_DeleteActivityInput"></a>
<a id="tocSdeleteactivityinput"></a>
<a id="tocsdeleteactivityinput"></a>

```json
{
  "activityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityArn|object|true|none|none|

<h2 id="tocS_DeleteStateMachineOutput">DeleteStateMachineOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestatemachineoutput"></a>
<a id="schema_DeleteStateMachineOutput"></a>
<a id="tocSdeletestatemachineoutput"></a>
<a id="tocsdeletestatemachineoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteStateMachineInput">DeleteStateMachineInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestatemachineinput"></a>
<a id="schema_DeleteStateMachineInput"></a>
<a id="tocSdeletestatemachineinput"></a>
<a id="tocsdeletestatemachineinput"></a>

```json
{
  "stateMachineArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|

<h2 id="tocS_DeleteStateMachineAliasOutput">DeleteStateMachineAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestatemachinealiasoutput"></a>
<a id="schema_DeleteStateMachineAliasOutput"></a>
<a id="tocSdeletestatemachinealiasoutput"></a>
<a id="tocsdeletestatemachinealiasoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteStateMachineAliasInput">DeleteStateMachineAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestatemachinealiasinput"></a>
<a id="schema_DeleteStateMachineAliasInput"></a>
<a id="tocSdeletestatemachinealiasinput"></a>
<a id="tocsdeletestatemachinealiasinput"></a>

```json
{
  "stateMachineAliasArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineAliasArn|object|true|none|none|

<h2 id="tocS_DeleteStateMachineVersionOutput">DeleteStateMachineVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestatemachineversionoutput"></a>
<a id="schema_DeleteStateMachineVersionOutput"></a>
<a id="tocSdeletestatemachineversionoutput"></a>
<a id="tocsdeletestatemachineversionoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteStateMachineVersionInput">DeleteStateMachineVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestatemachineversioninput"></a>
<a id="schema_DeleteStateMachineVersionInput"></a>
<a id="tocSdeletestatemachineversioninput"></a>
<a id="tocsdeletestatemachineversioninput"></a>

```json
{
  "stateMachineVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineVersionArn|object|true|none|none|

<h2 id="tocS_DescribeActivityOutput">DescribeActivityOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivityoutput"></a>
<a id="schema_DescribeActivityOutput"></a>
<a id="tocSdescribeactivityoutput"></a>
<a id="tocsdescribeactivityoutput"></a>

```json
{
  "activityArn": {},
  "name": {},
  "creationDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityArn|object|true|none|none|
|name|object|true|none|none|
|creationDate|object|true|none|none|

<h2 id="tocS_DescribeActivityInput">DescribeActivityInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivityinput"></a>
<a id="schema_DescribeActivityInput"></a>
<a id="tocSdescribeactivityinput"></a>
<a id="tocsdescribeactivityinput"></a>

```json
{
  "activityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityArn|object|true|none|none|

<h2 id="tocS_ActivityDoesNotExist">ActivityDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemaactivitydoesnotexist"></a>
<a id="schema_ActivityDoesNotExist"></a>
<a id="tocSactivitydoesnotexist"></a>
<a id="tocsactivitydoesnotexist"></a>

```json
null
```

<h2 id="tocS_DescribeExecutionOutput">DescribeExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexecutionoutput"></a>
<a id="schema_DescribeExecutionOutput"></a>
<a id="tocSdescribeexecutionoutput"></a>
<a id="tocsdescribeexecutionoutput"></a>

```json
{
  "executionArn": {},
  "stateMachineArn": {},
  "name": {},
  "status": {},
  "startDate": {},
  "stopDate": {},
  "input": {},
  "inputDetails": {
    "included": {}
  },
  "output": {},
  "outputDetails": {
    "included": {}
  },
  "traceHeader": {},
  "mapRunArn": {},
  "error": {},
  "cause": {},
  "stateMachineVersionArn": {},
  "stateMachineAliasArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|stateMachineArn|object|true|none|none|
|name|object|false|none|none|
|status|object|true|none|none|
|startDate|object|true|none|none|
|stopDate|object|false|none|none|
|input|object|false|none|none|
|inputDetails|[CloudWatchEventsExecutionDataDetails](#schemacloudwatcheventsexecutiondatadetails)|false|none|Provides details about execution input or output.|
|output|object|false|none|none|
|outputDetails|[CloudWatchEventsExecutionDataDetails](#schemacloudwatcheventsexecutiondatadetails)|false|none|Provides details about execution input or output.|
|traceHeader|object|false|none|none|
|mapRunArn|object|false|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|
|stateMachineVersionArn|object|false|none|none|
|stateMachineAliasArn|object|false|none|none|

<h2 id="tocS_DescribeExecutionInput">DescribeExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexecutioninput"></a>
<a id="schema_DescribeExecutionInput"></a>
<a id="tocSdescribeexecutioninput"></a>
<a id="tocsdescribeexecutioninput"></a>

```json
{
  "executionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|

<h2 id="tocS_ExecutionDoesNotExist">ExecutionDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiondoesnotexist"></a>
<a id="schema_ExecutionDoesNotExist"></a>
<a id="tocSexecutiondoesnotexist"></a>
<a id="tocsexecutiondoesnotexist"></a>

```json
null
```

<h2 id="tocS_DescribeMapRunOutput">DescribeMapRunOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaprunoutput"></a>
<a id="schema_DescribeMapRunOutput"></a>
<a id="tocSdescribemaprunoutput"></a>
<a id="tocsdescribemaprunoutput"></a>

```json
{
  "mapRunArn": {},
  "executionArn": {},
  "status": {},
  "startDate": {},
  "stopDate": {},
  "maxConcurrency": {},
  "toleratedFailurePercentage": {},
  "toleratedFailureCount": {},
  "itemCounts": {
    "pending": {},
    "running": {},
    "succeeded": {},
    "failed": {},
    "timedOut": {},
    "aborted": {},
    "total": {},
    "resultsWritten": {}
  },
  "executionCounts": {
    "pending": {},
    "running": {},
    "succeeded": {},
    "failed": {},
    "timedOut": {},
    "aborted": {},
    "total": {},
    "resultsWritten": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapRunArn|object|true|none|none|
|executionArn|object|true|none|none|
|status|object|true|none|none|
|startDate|object|true|none|none|
|stopDate|object|false|none|none|
|maxConcurrency|object|true|none|none|
|toleratedFailurePercentage|object|true|none|none|
|toleratedFailureCount|object|true|none|none|
|itemCounts|object|true|none|none|
|executionCounts|object|true|none|none|

<h2 id="tocS_DescribeMapRunInput">DescribeMapRunInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemapruninput"></a>
<a id="schema_DescribeMapRunInput"></a>
<a id="tocSdescribemapruninput"></a>
<a id="tocsdescribemapruninput"></a>

```json
{
  "mapRunArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapRunArn|object|true|none|none|

<h2 id="tocS_DescribeStateMachineOutput">DescribeStateMachineOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatemachineoutput"></a>
<a id="schema_DescribeStateMachineOutput"></a>
<a id="tocSdescribestatemachineoutput"></a>
<a id="tocsdescribestatemachineoutput"></a>

```json
{
  "stateMachineArn": {},
  "name": {},
  "status": {},
  "definition": {},
  "roleArn": {},
  "type": {},
  "creationDate": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tracingConfiguration": {
    "enabled": {}
  },
  "label": {},
  "revisionId": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|name|object|true|none|none|
|status|object|false|none|none|
|definition|object|true|none|none|
|roleArn|object|true|none|none|
|type|object|true|none|none|
|creationDate|object|true|none|none|
|loggingConfiguration|[LoggingConfiguration](#schemaloggingconfiguration)|false|none|The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.|
|tracingConfiguration|object|false|none|none|
|label|object|false|none|none|
|revisionId|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_DescribeStateMachineInput">DescribeStateMachineInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatemachineinput"></a>
<a id="schema_DescribeStateMachineInput"></a>
<a id="tocSdescribestatemachineinput"></a>
<a id="tocsdescribestatemachineinput"></a>

```json
{
  "stateMachineArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|

<h2 id="tocS_StateMachineDoesNotExist">StateMachineDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinedoesnotexist"></a>
<a id="schema_StateMachineDoesNotExist"></a>
<a id="tocSstatemachinedoesnotexist"></a>
<a id="tocsstatemachinedoesnotexist"></a>

```json
null
```

<h2 id="tocS_DescribeStateMachineAliasOutput">DescribeStateMachineAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatemachinealiasoutput"></a>
<a id="schema_DescribeStateMachineAliasOutput"></a>
<a id="tocSdescribestatemachinealiasoutput"></a>
<a id="tocsdescribestatemachinealiasoutput"></a>

```json
{
  "stateMachineAliasArn": {},
  "name": {},
  "description": {},
  "routingConfiguration": {},
  "creationDate": {},
  "updateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineAliasArn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|routingConfiguration|object|false|none|none|
|creationDate|object|false|none|none|
|updateDate|object|false|none|none|

<h2 id="tocS_DescribeStateMachineAliasInput">DescribeStateMachineAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatemachinealiasinput"></a>
<a id="schema_DescribeStateMachineAliasInput"></a>
<a id="tocSdescribestatemachinealiasinput"></a>
<a id="tocsdescribestatemachinealiasinput"></a>

```json
{
  "stateMachineAliasArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineAliasArn|object|true|none|none|

<h2 id="tocS_DescribeStateMachineForExecutionOutput">DescribeStateMachineForExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatemachineforexecutionoutput"></a>
<a id="schema_DescribeStateMachineForExecutionOutput"></a>
<a id="tocSdescribestatemachineforexecutionoutput"></a>
<a id="tocsdescribestatemachineforexecutionoutput"></a>

```json
{
  "stateMachineArn": {},
  "name": {},
  "definition": {},
  "roleArn": {},
  "updateDate": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tracingConfiguration": {
    "enabled": {}
  },
  "mapRunArn": {},
  "label": {},
  "revisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|name|object|true|none|none|
|definition|object|true|none|none|
|roleArn|object|true|none|none|
|updateDate|object|true|none|none|
|loggingConfiguration|[LoggingConfiguration](#schemaloggingconfiguration)|false|none|The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.|
|tracingConfiguration|object|false|none|none|
|mapRunArn|object|false|none|none|
|label|object|false|none|none|
|revisionId|object|false|none|none|

<h2 id="tocS_DescribeStateMachineForExecutionInput">DescribeStateMachineForExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatemachineforexecutioninput"></a>
<a id="schema_DescribeStateMachineForExecutionInput"></a>
<a id="tocSdescribestatemachineforexecutioninput"></a>
<a id="tocsdescribestatemachineforexecutioninput"></a>

```json
{
  "executionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|

<h2 id="tocS_GetActivityTaskOutput">GetActivityTaskOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetactivitytaskoutput"></a>
<a id="schema_GetActivityTaskOutput"></a>
<a id="tocSgetactivitytaskoutput"></a>
<a id="tocsgetactivitytaskoutput"></a>

```json
{
  "taskToken": {},
  "input": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|false|none|none|
|input|object|false|none|none|

<h2 id="tocS_GetActivityTaskInput">GetActivityTaskInput</h2>
<!-- backwards compatibility -->
<a id="schemagetactivitytaskinput"></a>
<a id="schema_GetActivityTaskInput"></a>
<a id="tocSgetactivitytaskinput"></a>
<a id="tocsgetactivitytaskinput"></a>

```json
{
  "activityArn": {},
  "workerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityArn|object|true|none|none|
|workerName|object|false|none|none|

<h2 id="tocS_ActivityWorkerLimitExceeded">ActivityWorkerLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaactivityworkerlimitexceeded"></a>
<a id="schema_ActivityWorkerLimitExceeded"></a>
<a id="tocSactivityworkerlimitexceeded"></a>
<a id="tocsactivityworkerlimitexceeded"></a>

```json
null
```

<h2 id="tocS_GetExecutionHistoryOutput">GetExecutionHistoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetexecutionhistoryoutput"></a>
<a id="schema_GetExecutionHistoryOutput"></a>
<a id="tocSgetexecutionhistoryoutput"></a>
<a id="tocsgetexecutionhistoryoutput"></a>

```json
{
  "events": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetExecutionHistoryInput">GetExecutionHistoryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetexecutionhistoryinput"></a>
<a id="schema_GetExecutionHistoryInput"></a>
<a id="tocSgetexecutionhistoryinput"></a>
<a id="tocsgetexecutionhistoryinput"></a>

```json
{
  "executionArn": {},
  "maxResults": {},
  "reverseOrder": {},
  "nextToken": {},
  "includeExecutionData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|maxResults|object|false|none|none|
|reverseOrder|object|false|none|none|
|nextToken|object|false|none|none|
|includeExecutionData|object|false|none|none|

<h2 id="tocS_InvalidToken">InvalidToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtoken"></a>
<a id="schema_InvalidToken"></a>
<a id="tocSinvalidtoken"></a>
<a id="tocsinvalidtoken"></a>

```json
null
```

<h2 id="tocS_ListActivitiesOutput">ListActivitiesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistactivitiesoutput"></a>
<a id="schema_ListActivitiesOutput"></a>
<a id="tocSlistactivitiesoutput"></a>
<a id="tocslistactivitiesoutput"></a>

```json
{
  "activities": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListActivitiesInput">ListActivitiesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistactivitiesinput"></a>
<a id="schema_ListActivitiesInput"></a>
<a id="tocSlistactivitiesinput"></a>
<a id="tocslistactivitiesinput"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListExecutionsOutput">ListExecutionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionsoutput"></a>
<a id="schema_ListExecutionsOutput"></a>
<a id="tocSlistexecutionsoutput"></a>
<a id="tocslistexecutionsoutput"></a>

```json
{
  "executions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListExecutionsInput">ListExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionsinput"></a>
<a id="schema_ListExecutionsInput"></a>
<a id="tocSlistexecutionsinput"></a>
<a id="tocslistexecutionsinput"></a>

```json
{
  "stateMachineArn": {},
  "statusFilter": {},
  "maxResults": {},
  "nextToken": {},
  "mapRunArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|false|none|none|
|statusFilter|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|mapRunArn|object|false|none|none|

<h2 id="tocS_ListMapRunsOutput">ListMapRunsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmaprunsoutput"></a>
<a id="schema_ListMapRunsOutput"></a>
<a id="tocSlistmaprunsoutput"></a>
<a id="tocslistmaprunsoutput"></a>

```json
{
  "mapRuns": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapRuns|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListMapRunsInput">ListMapRunsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmaprunsinput"></a>
<a id="schema_ListMapRunsInput"></a>
<a id="tocSlistmaprunsinput"></a>
<a id="tocslistmaprunsinput"></a>

```json
{
  "executionArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListStateMachineAliasesOutput">ListStateMachineAliasesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststatemachinealiasesoutput"></a>
<a id="schema_ListStateMachineAliasesOutput"></a>
<a id="tocSliststatemachinealiasesoutput"></a>
<a id="tocsliststatemachinealiasesoutput"></a>

```json
{
  "stateMachineAliases": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineAliases|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListStateMachineAliasesInput">ListStateMachineAliasesInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststatemachinealiasesinput"></a>
<a id="schema_ListStateMachineAliasesInput"></a>
<a id="tocSliststatemachinealiasesinput"></a>
<a id="tocsliststatemachinealiasesinput"></a>

```json
{
  "stateMachineArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListStateMachineVersionsOutput">ListStateMachineVersionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststatemachineversionsoutput"></a>
<a id="schema_ListStateMachineVersionsOutput"></a>
<a id="tocSliststatemachineversionsoutput"></a>
<a id="tocsliststatemachineversionsoutput"></a>

```json
{
  "stateMachineVersions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineVersions|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListStateMachineVersionsInput">ListStateMachineVersionsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststatemachineversionsinput"></a>
<a id="schema_ListStateMachineVersionsInput"></a>
<a id="tocSliststatemachineversionsinput"></a>
<a id="tocsliststatemachineversionsinput"></a>

```json
{
  "stateMachineArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListStateMachinesOutput">ListStateMachinesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststatemachinesoutput"></a>
<a id="schema_ListStateMachinesOutput"></a>
<a id="tocSliststatemachinesoutput"></a>
<a id="tocsliststatemachinesoutput"></a>

```json
{
  "stateMachines": [
    {
      "stateMachineArn": {},
      "name": {},
      "type": {},
      "creationDate": {}
    }
  ],
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachines|[StateMachineList](#schemastatemachinelist)|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListStateMachinesInput">ListStateMachinesInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststatemachinesinput"></a>
<a id="schema_ListStateMachinesInput"></a>
<a id="tocSliststatemachinesinput"></a>
<a id="tocsliststatemachinesinput"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_PublishStateMachineVersionOutput">PublishStateMachineVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemapublishstatemachineversionoutput"></a>
<a id="schema_PublishStateMachineVersionOutput"></a>
<a id="tocSpublishstatemachineversionoutput"></a>
<a id="tocspublishstatemachineversionoutput"></a>

```json
{
  "creationDate": {},
  "stateMachineVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|object|true|none|none|
|stateMachineVersionArn|object|true|none|none|

<h2 id="tocS_PublishStateMachineVersionInput">PublishStateMachineVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemapublishstatemachineversioninput"></a>
<a id="schema_PublishStateMachineVersionInput"></a>
<a id="tocSpublishstatemachineversioninput"></a>
<a id="tocspublishstatemachineversioninput"></a>

```json
{
  "stateMachineArn": {},
  "revisionId": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|revisionId|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_SendTaskFailureOutput">SendTaskFailureOutput</h2>
<!-- backwards compatibility -->
<a id="schemasendtaskfailureoutput"></a>
<a id="schema_SendTaskFailureOutput"></a>
<a id="tocSsendtaskfailureoutput"></a>
<a id="tocssendtaskfailureoutput"></a>

```json
{}
```

<h2 id="tocS_SendTaskFailureInput">SendTaskFailureInput</h2>
<!-- backwards compatibility -->
<a id="schemasendtaskfailureinput"></a>
<a id="schema_SendTaskFailureInput"></a>
<a id="tocSsendtaskfailureinput"></a>
<a id="tocssendtaskfailureinput"></a>

```json
{
  "taskToken": {},
  "error": {},
  "cause": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_TaskDoesNotExist">TaskDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemataskdoesnotexist"></a>
<a id="schema_TaskDoesNotExist"></a>
<a id="tocStaskdoesnotexist"></a>
<a id="tocstaskdoesnotexist"></a>

```json
null
```

<h2 id="tocS_TaskTimedOut">TaskTimedOut</h2>
<!-- backwards compatibility -->
<a id="schematasktimedout"></a>
<a id="schema_TaskTimedOut"></a>
<a id="tocStasktimedout"></a>
<a id="tocstasktimedout"></a>

```json
null
```

<h2 id="tocS_SendTaskHeartbeatOutput">SendTaskHeartbeatOutput</h2>
<!-- backwards compatibility -->
<a id="schemasendtaskheartbeatoutput"></a>
<a id="schema_SendTaskHeartbeatOutput"></a>
<a id="tocSsendtaskheartbeatoutput"></a>
<a id="tocssendtaskheartbeatoutput"></a>

```json
{}
```

<h2 id="tocS_SendTaskHeartbeatInput">SendTaskHeartbeatInput</h2>
<!-- backwards compatibility -->
<a id="schemasendtaskheartbeatinput"></a>
<a id="schema_SendTaskHeartbeatInput"></a>
<a id="tocSsendtaskheartbeatinput"></a>
<a id="tocssendtaskheartbeatinput"></a>

```json
{
  "taskToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|

<h2 id="tocS_SendTaskSuccessOutput">SendTaskSuccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemasendtasksuccessoutput"></a>
<a id="schema_SendTaskSuccessOutput"></a>
<a id="tocSsendtasksuccessoutput"></a>
<a id="tocssendtasksuccessoutput"></a>

```json
{}
```

<h2 id="tocS_SendTaskSuccessInput">SendTaskSuccessInput</h2>
<!-- backwards compatibility -->
<a id="schemasendtasksuccessinput"></a>
<a id="schema_SendTaskSuccessInput"></a>
<a id="tocSsendtasksuccessinput"></a>
<a id="tocssendtasksuccessinput"></a>

```json
{
  "taskToken": {},
  "output": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|output|object|true|none|none|

<h2 id="tocS_InvalidOutput">InvalidOutput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoutput"></a>
<a id="schema_InvalidOutput"></a>
<a id="tocSinvalidoutput"></a>
<a id="tocsinvalidoutput"></a>

```json
null
```

<h2 id="tocS_StartExecutionOutput">StartExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartexecutionoutput"></a>
<a id="schema_StartExecutionOutput"></a>
<a id="tocSstartexecutionoutput"></a>
<a id="tocsstartexecutionoutput"></a>

```json
{
  "executionArn": {},
  "startDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|startDate|object|true|none|none|

<h2 id="tocS_StartExecutionInput">StartExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartexecutioninput"></a>
<a id="schema_StartExecutionInput"></a>
<a id="tocSstartexecutioninput"></a>
<a id="tocsstartexecutioninput"></a>

```json
{
  "stateMachineArn": {},
  "name": {},
  "input": {},
  "traceHeader": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|name|object|false|none|none|
|input|object|false|none|none|
|traceHeader|object|false|none|none|

<h2 id="tocS_ExecutionLimitExceeded">ExecutionLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionlimitexceeded"></a>
<a id="schema_ExecutionLimitExceeded"></a>
<a id="tocSexecutionlimitexceeded"></a>
<a id="tocsexecutionlimitexceeded"></a>

```json
null
```

<h2 id="tocS_ExecutionAlreadyExists">ExecutionAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionalreadyexists"></a>
<a id="schema_ExecutionAlreadyExists"></a>
<a id="tocSexecutionalreadyexists"></a>
<a id="tocsexecutionalreadyexists"></a>

```json
null
```

<h2 id="tocS_InvalidExecutionInput">InvalidExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidexecutioninput"></a>
<a id="schema_InvalidExecutionInput"></a>
<a id="tocSinvalidexecutioninput"></a>
<a id="tocsinvalidexecutioninput"></a>

```json
null
```

<h2 id="tocS_StartSyncExecutionOutput">StartSyncExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartsyncexecutionoutput"></a>
<a id="schema_StartSyncExecutionOutput"></a>
<a id="tocSstartsyncexecutionoutput"></a>
<a id="tocsstartsyncexecutionoutput"></a>

```json
{
  "executionArn": {},
  "stateMachineArn": {},
  "name": {},
  "startDate": {},
  "stopDate": {},
  "status": {},
  "error": {},
  "cause": {},
  "input": {},
  "inputDetails": {
    "included": {}
  },
  "output": {},
  "outputDetails": {
    "included": {}
  },
  "traceHeader": {},
  "billingDetails": {
    "billedMemoryUsedInMB": {},
    "billedDurationInMilliseconds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|stateMachineArn|object|false|none|none|
|name|object|false|none|none|
|startDate|object|true|none|none|
|stopDate|object|true|none|none|
|status|object|true|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|
|input|object|false|none|none|
|inputDetails|[CloudWatchEventsExecutionDataDetails](#schemacloudwatcheventsexecutiondatadetails)|false|none|Provides details about execution input or output.|
|output|object|false|none|none|
|outputDetails|[CloudWatchEventsExecutionDataDetails](#schemacloudwatcheventsexecutiondatadetails)|false|none|Provides details about execution input or output.|
|traceHeader|object|false|none|none|
|billingDetails|object|false|none|none|

<h2 id="tocS_StartSyncExecutionInput">StartSyncExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartsyncexecutioninput"></a>
<a id="schema_StartSyncExecutionInput"></a>
<a id="tocSstartsyncexecutioninput"></a>
<a id="tocsstartsyncexecutioninput"></a>

```json
{
  "stateMachineArn": {},
  "name": {},
  "input": {},
  "traceHeader": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|name|object|false|none|none|
|input|object|false|none|none|
|traceHeader|object|false|none|none|

<h2 id="tocS_StopExecutionOutput">StopExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopexecutionoutput"></a>
<a id="schema_StopExecutionOutput"></a>
<a id="tocSstopexecutionoutput"></a>
<a id="tocsstopexecutionoutput"></a>

```json
{
  "stopDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopDate|object|true|none|none|

<h2 id="tocS_StopExecutionInput">StopExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastopexecutioninput"></a>
<a id="schema_StopExecutionInput"></a>
<a id="tocSstopexecutioninput"></a>
<a id="tocsstopexecutioninput"></a>

```json
{
  "executionArn": {},
  "error": {},
  "cause": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "resourceArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

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

<h2 id="tocS_UpdateMapRunOutput">UpdateMapRunOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaprunoutput"></a>
<a id="schema_UpdateMapRunOutput"></a>
<a id="tocSupdatemaprunoutput"></a>
<a id="tocsupdatemaprunoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateMapRunInput">UpdateMapRunInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemapruninput"></a>
<a id="schema_UpdateMapRunInput"></a>
<a id="tocSupdatemapruninput"></a>
<a id="tocsupdatemapruninput"></a>

```json
{
  "mapRunArn": {},
  "maxConcurrency": {},
  "toleratedFailurePercentage": {},
  "toleratedFailureCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapRunArn|object|true|none|none|
|maxConcurrency|object|false|none|none|
|toleratedFailurePercentage|object|false|none|none|
|toleratedFailureCount|object|false|none|none|

<h2 id="tocS_UpdateStateMachineOutput">UpdateStateMachineOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatemachineoutput"></a>
<a id="schema_UpdateStateMachineOutput"></a>
<a id="tocSupdatestatemachineoutput"></a>
<a id="tocsupdatestatemachineoutput"></a>

```json
{
  "updateDate": {},
  "revisionId": {},
  "stateMachineVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateDate|object|true|none|none|
|revisionId|object|false|none|none|
|stateMachineVersionArn|object|false|none|none|

<h2 id="tocS_UpdateStateMachineInput">UpdateStateMachineInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatemachineinput"></a>
<a id="schema_UpdateStateMachineInput"></a>
<a id="tocSupdatestatemachineinput"></a>
<a id="tocsupdatestatemachineinput"></a>

```json
{
  "stateMachineArn": {},
  "definition": {},
  "roleArn": {},
  "loggingConfiguration": {
    "level": {},
    "includeExecutionData": {},
    "destinations": {}
  },
  "tracingConfiguration": {
    "enabled": {}
  },
  "publish": {},
  "versionDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|definition|object|false|none|none|
|roleArn|object|false|none|none|
|loggingConfiguration|object|false|none|none|
|tracingConfiguration|object|false|none|none|
|publish|object|false|none|none|
|versionDescription|object|false|none|none|

<h2 id="tocS_MissingRequiredParameter">MissingRequiredParameter</h2>
<!-- backwards compatibility -->
<a id="schemamissingrequiredparameter"></a>
<a id="schema_MissingRequiredParameter"></a>
<a id="tocSmissingrequiredparameter"></a>
<a id="tocsmissingrequiredparameter"></a>

```json
null
```

<h2 id="tocS_UpdateStateMachineAliasOutput">UpdateStateMachineAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatemachinealiasoutput"></a>
<a id="schema_UpdateStateMachineAliasOutput"></a>
<a id="tocSupdatestatemachinealiasoutput"></a>
<a id="tocsupdatestatemachinealiasoutput"></a>

```json
{
  "updateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateDate|object|true|none|none|

<h2 id="tocS_UpdateStateMachineAliasInput">UpdateStateMachineAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatemachinealiasinput"></a>
<a id="schema_UpdateStateMachineAliasInput"></a>
<a id="tocSupdatestatemachinealiasinput"></a>
<a id="tocsupdatestatemachinealiasinput"></a>

```json
{
  "stateMachineAliasArn": {},
  "description": {},
  "routingConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineAliasArn|object|true|none|none|
|description|object|false|none|none|
|routingConfiguration|object|false|none|none|

<h2 id="tocS_SensitiveError">SensitiveError</h2>
<!-- backwards compatibility -->
<a id="schemasensitiveerror"></a>
<a id="schema_SensitiveError"></a>
<a id="tocSsensitiveerror"></a>
<a id="tocssensitiveerror"></a>

```json
"password"
```

<h2 id="tocS_SensitiveCause">SensitiveCause</h2>
<!-- backwards compatibility -->
<a id="schemasensitivecause"></a>
<a id="schema_SensitiveCause"></a>
<a id="tocSsensitivecause"></a>
<a id="tocssensitivecause"></a>

```json
"password"
```

<h2 id="tocS_ActivityFailedEventDetails">ActivityFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactivityfailedeventdetails"></a>
<a id="schema_ActivityFailedEventDetails"></a>
<a id="tocSactivityfailedeventdetails"></a>
<a id="tocsactivityfailedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about an activity that failed during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_ActivityListItem">ActivityListItem</h2>
<!-- backwards compatibility -->
<a id="schemaactivitylistitem"></a>
<a id="schema_ActivityListItem"></a>
<a id="tocSactivitylistitem"></a>
<a id="tocsactivitylistitem"></a>

```json
{
  "activityArn": {},
  "name": {},
  "creationDate": {}
}
```

Contains details about an activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityArn|object|true|none|none|
|name|object|true|none|none|
|creationDate|object|true|none|none|

<h2 id="tocS_ActivityList">ActivityList</h2>
<!-- backwards compatibility -->
<a id="schemaactivitylist"></a>
<a id="schema_ActivityList"></a>
<a id="tocSactivitylist"></a>
<a id="tocsactivitylist"></a>

```json
[
  {
    "activityArn": {},
    "name": {},
    "creationDate": {}
  }
]
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

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
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

<h2 id="tocS_ActivityScheduleFailedEventDetails">ActivityScheduleFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactivityschedulefailedeventdetails"></a>
<a id="schema_ActivityScheduleFailedEventDetails"></a>
<a id="tocSactivityschedulefailedeventdetails"></a>
<a id="tocsactivityschedulefailedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about an activity schedule failure that occurred during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_SensitiveData">SensitiveData</h2>
<!-- backwards compatibility -->
<a id="schemasensitivedata"></a>
<a id="schema_SensitiveData"></a>
<a id="tocSsensitivedata"></a>
<a id="tocssensitivedata"></a>

```json
"password"
```

<h2 id="tocS_HistoryEventExecutionDataDetails">HistoryEventExecutionDataDetails</h2>
<!-- backwards compatibility -->
<a id="schemahistoryeventexecutiondatadetails"></a>
<a id="schema_HistoryEventExecutionDataDetails"></a>
<a id="tocShistoryeventexecutiondatadetails"></a>
<a id="tocshistoryeventexecutiondatadetails"></a>

```json
{
  "truncated": {}
}
```

Provides details about input or output in an execution history event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|truncated|object|false|none|none|

<h2 id="tocS_TimeoutInSeconds">TimeoutInSeconds</h2>
<!-- backwards compatibility -->
<a id="schematimeoutinseconds"></a>
<a id="schema_TimeoutInSeconds"></a>
<a id="tocStimeoutinseconds"></a>
<a id="tocstimeoutinseconds"></a>

```json
0
```

<h2 id="tocS_ActivityScheduledEventDetails">ActivityScheduledEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactivityscheduledeventdetails"></a>
<a id="schema_ActivityScheduledEventDetails"></a>
<a id="tocSactivityscheduledeventdetails"></a>
<a id="tocsactivityscheduledeventdetails"></a>

```json
{
  "resource": {},
  "input": {},
  "inputDetails": {
    "truncated": {}
  },
  "timeoutInSeconds": {},
  "heartbeatInSeconds": {}
}
```

Contains details about an activity scheduled during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|true|none|none|
|input|object|false|none|none|
|inputDetails|object|false|none|none|
|timeoutInSeconds|object|false|none|none|
|heartbeatInSeconds|object|false|none|none|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
"string"
```

<h2 id="tocS_ActivityStartedEventDetails">ActivityStartedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactivitystartedeventdetails"></a>
<a id="schema_ActivityStartedEventDetails"></a>
<a id="tocSactivitystartedeventdetails"></a>
<a id="tocsactivitystartedeventdetails"></a>

```json
{
  "workerName": {}
}
```

Contains details about the start of an activity during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workerName|object|false|none|none|

<h2 id="tocS_ActivitySucceededEventDetails">ActivitySucceededEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactivitysucceededeventdetails"></a>
<a id="schema_ActivitySucceededEventDetails"></a>
<a id="tocSactivitysucceededeventdetails"></a>
<a id="tocsactivitysucceededeventdetails"></a>

```json
{
  "output": {},
  "outputDetails": {
    "truncated": {}
  }
}
```

Contains details about an activity that successfully terminated during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|output|object|false|none|none|
|outputDetails|object|false|none|none|

<h2 id="tocS_ActivityTimedOutEventDetails">ActivityTimedOutEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytimedouteventdetails"></a>
<a id="schema_ActivityTimedOutEventDetails"></a>
<a id="tocSactivitytimedouteventdetails"></a>
<a id="tocsactivitytimedouteventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about an activity timeout that occurred during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_AliasDescription">AliasDescription</h2>
<!-- backwards compatibility -->
<a id="schemaaliasdescription"></a>
<a id="schema_AliasDescription"></a>
<a id="tocSaliasdescription"></a>
<a id="tocsaliasdescription"></a>

```json
"password"
```

<h2 id="tocS_BilledDuration">BilledDuration</h2>
<!-- backwards compatibility -->
<a id="schemabilledduration"></a>
<a id="schema_BilledDuration"></a>
<a id="tocSbilledduration"></a>
<a id="tocsbilledduration"></a>

```json
0
```

<h2 id="tocS_BilledMemoryUsed">BilledMemoryUsed</h2>
<!-- backwards compatibility -->
<a id="schemabilledmemoryused"></a>
<a id="schema_BilledMemoryUsed"></a>
<a id="tocSbilledmemoryused"></a>
<a id="tocsbilledmemoryused"></a>

```json
0
```

<h2 id="tocS_BillingDetails">BillingDetails</h2>
<!-- backwards compatibility -->
<a id="schemabillingdetails"></a>
<a id="schema_BillingDetails"></a>
<a id="tocSbillingdetails"></a>
<a id="tocsbillingdetails"></a>

```json
{
  "billedMemoryUsedInMB": {},
  "billedDurationInMilliseconds": {}
}
```

An object that describes workflow billing details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billedMemoryUsedInMB|object|false|none|none|
|billedDurationInMilliseconds|object|false|none|none|

<h2 id="tocS_CharacterRestrictedName">CharacterRestrictedName</h2>
<!-- backwards compatibility -->
<a id="schemacharacterrestrictedname"></a>
<a id="schema_CharacterRestrictedName"></a>
<a id="tocScharacterrestrictedname"></a>
<a id="tocscharacterrestrictedname"></a>

```json
"string"
```

<h2 id="tocS_includedDetails">includedDetails</h2>
<!-- backwards compatibility -->
<a id="schemaincludeddetails"></a>
<a id="schema_includedDetails"></a>
<a id="tocSincludeddetails"></a>
<a id="tocsincludeddetails"></a>

```json
true
```

<h2 id="tocS_CloudWatchEventsExecutionDataDetails">CloudWatchEventsExecutionDataDetails</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatcheventsexecutiondatadetails"></a>
<a id="schema_CloudWatchEventsExecutionDataDetails"></a>
<a id="tocScloudwatcheventsexecutiondatadetails"></a>
<a id="tocscloudwatcheventsexecutiondatadetails"></a>

```json
{
  "included": {}
}
```

Provides details about execution input or output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|included|object|false|none|none|

<h2 id="tocS_CloudWatchLogsLogGroup">CloudWatchLogsLogGroup</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsloggroup"></a>
<a id="schema_CloudWatchLogsLogGroup"></a>
<a id="tocScloudwatchlogsloggroup"></a>
<a id="tocscloudwatchlogsloggroup"></a>

```json
{
  "logGroupArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupArn|object|false|none|none|

<h2 id="tocS_ConnectorParameters">ConnectorParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorparameters"></a>
<a id="schema_ConnectorParameters"></a>
<a id="tocSconnectorparameters"></a>
<a id="tocsconnectorparameters"></a>

```json
"password"
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
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

<h2 id="tocS_RoutingConfigurationList">RoutingConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaroutingconfigurationlist"></a>
<a id="schema_RoutingConfigurationList"></a>
<a id="tocSroutingconfigurationlist"></a>
<a id="tocsroutingconfigurationlist"></a>

```json
[
  {
    "stateMachineVersionArn": {},
    "weight": {}
  }
]
```

<h2 id="tocS_Definition">Definition</h2>
<!-- backwards compatibility -->
<a id="schemadefinition"></a>
<a id="schema_Definition"></a>
<a id="tocSdefinition"></a>
<a id="tocsdefinition"></a>

```json
"password"
```

<h2 id="tocS_StateMachineType">StateMachineType</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinetype"></a>
<a id="schema_StateMachineType"></a>
<a id="tocSstatemachinetype"></a>
<a id="tocsstatemachinetype"></a>

```json
"STANDARD"
```

<h2 id="tocS_LoggingConfiguration">LoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfiguration"></a>
<a id="schema_LoggingConfiguration"></a>
<a id="tocSloggingconfiguration"></a>
<a id="tocsloggingconfiguration"></a>

```json
{
  "level": {},
  "includeExecutionData": {},
  "destinations": {}
}
```

The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|object|false|none|none|
|includeExecutionData|object|false|none|none|
|destinations|object|false|none|none|

<h2 id="tocS_TracingConfiguration">TracingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematracingconfiguration"></a>
<a id="schema_TracingConfiguration"></a>
<a id="tocStracingconfiguration"></a>
<a id="tocstracingconfiguration"></a>

```json
{
  "enabled": {}
}
```

Selects whether or not the state machine's X-Ray tracing is enabled. Default is <code>false</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|false|none|none|

<h2 id="tocS_Publish">Publish</h2>
<!-- backwards compatibility -->
<a id="schemapublish"></a>
<a id="schema_Publish"></a>
<a id="tocSpublish"></a>
<a id="tocspublish"></a>

```json
true
```

<h2 id="tocS_VersionDescription">VersionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaversiondescription"></a>
<a id="schema_VersionDescription"></a>
<a id="tocSversiondescription"></a>
<a id="tocsversiondescription"></a>

```json
"password"
```

<h2 id="tocS_LongArn">LongArn</h2>
<!-- backwards compatibility -->
<a id="schemalongarn"></a>
<a id="schema_LongArn"></a>
<a id="tocSlongarn"></a>
<a id="tocslongarn"></a>

```json
"string"
```

<h2 id="tocS_ExecutionStatus">ExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatus"></a>
<a id="schema_ExecutionStatus"></a>
<a id="tocSexecutionstatus"></a>
<a id="tocsexecutionstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_TraceHeader">TraceHeader</h2>
<!-- backwards compatibility -->
<a id="schematraceheader"></a>
<a id="schema_TraceHeader"></a>
<a id="tocStraceheader"></a>
<a id="tocstraceheader"></a>

```json
"string"
```

<h2 id="tocS_MapRunStatus">MapRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemamaprunstatus"></a>
<a id="schema_MapRunStatus"></a>
<a id="tocSmaprunstatus"></a>
<a id="tocsmaprunstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_MaxConcurrency">MaxConcurrency</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrency"></a>
<a id="schema_MaxConcurrency"></a>
<a id="tocSmaxconcurrency"></a>
<a id="tocsmaxconcurrency"></a>

```json
0
```

<h2 id="tocS_ToleratedFailurePercentage">ToleratedFailurePercentage</h2>
<!-- backwards compatibility -->
<a id="schematoleratedfailurepercentage"></a>
<a id="schema_ToleratedFailurePercentage"></a>
<a id="tocStoleratedfailurepercentage"></a>
<a id="tocstoleratedfailurepercentage"></a>

```json
0
```

<h2 id="tocS_ToleratedFailureCount">ToleratedFailureCount</h2>
<!-- backwards compatibility -->
<a id="schematoleratedfailurecount"></a>
<a id="schema_ToleratedFailureCount"></a>
<a id="tocStoleratedfailurecount"></a>
<a id="tocstoleratedfailurecount"></a>

```json
0
```

<h2 id="tocS_MapRunItemCounts">MapRunItemCounts</h2>
<!-- backwards compatibility -->
<a id="schemamaprunitemcounts"></a>
<a id="schema_MapRunItemCounts"></a>
<a id="tocSmaprunitemcounts"></a>
<a id="tocsmaprunitemcounts"></a>

```json
{
  "pending": {},
  "running": {},
  "succeeded": {},
  "failed": {},
  "timedOut": {},
  "aborted": {},
  "total": {},
  "resultsWritten": {}
}
```

Contains details about items that were processed in all of the child workflow executions that were started by a Map Run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pending|object|true|none|none|
|running|object|true|none|none|
|succeeded|object|true|none|none|
|failed|object|true|none|none|
|timedOut|object|true|none|none|
|aborted|object|true|none|none|
|total|object|true|none|none|
|resultsWritten|object|true|none|none|

<h2 id="tocS_MapRunExecutionCounts">MapRunExecutionCounts</h2>
<!-- backwards compatibility -->
<a id="schemamaprunexecutioncounts"></a>
<a id="schema_MapRunExecutionCounts"></a>
<a id="tocSmaprunexecutioncounts"></a>
<a id="tocsmaprunexecutioncounts"></a>

```json
{
  "pending": {},
  "running": {},
  "succeeded": {},
  "failed": {},
  "timedOut": {},
  "aborted": {},
  "total": {},
  "resultsWritten": {}
}
```

Contains details about all of the child workflow executions started by a Map Run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pending|object|true|none|none|
|running|object|true|none|none|
|succeeded|object|true|none|none|
|failed|object|true|none|none|
|timedOut|object|true|none|none|
|aborted|object|true|none|none|
|total|object|true|none|none|
|resultsWritten|object|true|none|none|

<h2 id="tocS_MapRunLabel">MapRunLabel</h2>
<!-- backwards compatibility -->
<a id="schemamaprunlabel"></a>
<a id="schema_MapRunLabel"></a>
<a id="tocSmaprunlabel"></a>
<a id="tocsmaprunlabel"></a>

```json
"string"
```

<h2 id="tocS_RevisionId">RevisionId</h2>
<!-- backwards compatibility -->
<a id="schemarevisionid"></a>
<a id="schema_RevisionId"></a>
<a id="tocSrevisionid"></a>
<a id="tocsrevisionid"></a>

```json
"string"
```

<h2 id="tocS_StateMachineStatus">StateMachineStatus</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinestatus"></a>
<a id="schema_StateMachineStatus"></a>
<a id="tocSstatemachinestatus"></a>
<a id="tocsstatemachinestatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Enabled">Enabled</h2>
<!-- backwards compatibility -->
<a id="schemaenabled"></a>
<a id="schema_Enabled"></a>
<a id="tocSenabled"></a>
<a id="tocsenabled"></a>

```json
true
```

<h2 id="tocS_EventId">EventId</h2>
<!-- backwards compatibility -->
<a id="schemaeventid"></a>
<a id="schema_EventId"></a>
<a id="tocSeventid"></a>
<a id="tocseventid"></a>

```json
0
```

<h2 id="tocS_ExecutionAbortedEventDetails">ExecutionAbortedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionabortedeventdetails"></a>
<a id="schema_ExecutionAbortedEventDetails"></a>
<a id="tocSexecutionabortedeventdetails"></a>
<a id="tocsexecutionabortedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about an abort of an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_ExecutionFailedEventDetails">ExecutionFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionfailedeventdetails"></a>
<a id="schema_ExecutionFailedEventDetails"></a>
<a id="tocSexecutionfailedeventdetails"></a>
<a id="tocsexecutionfailedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about an execution failure event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_ExecutionListItem">ExecutionListItem</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionlistitem"></a>
<a id="schema_ExecutionListItem"></a>
<a id="tocSexecutionlistitem"></a>
<a id="tocsexecutionlistitem"></a>

```json
{
  "executionArn": {},
  "stateMachineArn": {},
  "name": {},
  "status": {},
  "startDate": {},
  "stopDate": {},
  "mapRunArn": {},
  "itemCount": {},
  "stateMachineVersionArn": {},
  "stateMachineAliasArn": {}
}
```

Contains details about an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|stateMachineArn|object|true|none|none|
|name|object|true|none|none|
|status|object|true|none|none|
|startDate|object|true|none|none|
|stopDate|object|false|none|none|
|mapRunArn|object|false|none|none|
|itemCount|object|false|none|none|
|stateMachineVersionArn|object|false|none|none|
|stateMachineAliasArn|object|false|none|none|

<h2 id="tocS_ExecutionList">ExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionlist"></a>
<a id="schema_ExecutionList"></a>
<a id="tocSexecutionlist"></a>
<a id="tocsexecutionlist"></a>

```json
[
  {
    "executionArn": {},
    "stateMachineArn": {},
    "name": {},
    "status": {},
    "startDate": {},
    "stopDate": {},
    "mapRunArn": {},
    "itemCount": {},
    "stateMachineVersionArn": {},
    "stateMachineAliasArn": {}
  }
]
```

<h2 id="tocS_UnsignedInteger">UnsignedInteger</h2>
<!-- backwards compatibility -->
<a id="schemaunsignedinteger"></a>
<a id="schema_UnsignedInteger"></a>
<a id="tocSunsignedinteger"></a>
<a id="tocsunsignedinteger"></a>

```json
0
```

<h2 id="tocS_ExecutionStartedEventDetails">ExecutionStartedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstartedeventdetails"></a>
<a id="schema_ExecutionStartedEventDetails"></a>
<a id="tocSexecutionstartedeventdetails"></a>
<a id="tocsexecutionstartedeventdetails"></a>

```json
{
  "input": {},
  "inputDetails": {
    "truncated": {}
  },
  "roleArn": {},
  "stateMachineAliasArn": {},
  "stateMachineVersionArn": {}
}
```

Contains details about the start of the execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|false|none|none|
|inputDetails|object|false|none|none|
|roleArn|object|false|none|none|
|stateMachineAliasArn|object|false|none|none|
|stateMachineVersionArn|object|false|none|none|

<h2 id="tocS_ExecutionSucceededEventDetails">ExecutionSucceededEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionsucceededeventdetails"></a>
<a id="schema_ExecutionSucceededEventDetails"></a>
<a id="tocSexecutionsucceededeventdetails"></a>
<a id="tocsexecutionsucceededeventdetails"></a>

```json
{
  "output": {},
  "outputDetails": {
    "truncated": {}
  }
}
```

Contains details about the successful termination of the execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|output|object|false|none|none|
|outputDetails|object|false|none|none|

<h2 id="tocS_ExecutionTimedOutEventDetails">ExecutionTimedOutEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiontimedouteventdetails"></a>
<a id="schema_ExecutionTimedOutEventDetails"></a>
<a id="tocSexecutiontimedouteventdetails"></a>
<a id="tocsexecutiontimedouteventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about the execution timeout that occurred during the execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_TaskToken">TaskToken</h2>
<!-- backwards compatibility -->
<a id="schematasktoken"></a>
<a id="schema_TaskToken"></a>
<a id="tocStasktoken"></a>
<a id="tocstasktoken"></a>

```json
"string"
```

<h2 id="tocS_SensitiveDataJobInput">SensitiveDataJobInput</h2>
<!-- backwards compatibility -->
<a id="schemasensitivedatajobinput"></a>
<a id="schema_SensitiveDataJobInput"></a>
<a id="tocSsensitivedatajobinput"></a>
<a id="tocssensitivedatajobinput"></a>

```json
"password"
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

<h2 id="tocS_ReverseOrder">ReverseOrder</h2>
<!-- backwards compatibility -->
<a id="schemareverseorder"></a>
<a id="schema_ReverseOrder"></a>
<a id="tocSreverseorder"></a>
<a id="tocsreverseorder"></a>

```json
true
```

<h2 id="tocS_PageToken">PageToken</h2>
<!-- backwards compatibility -->
<a id="schemapagetoken"></a>
<a id="schema_PageToken"></a>
<a id="tocSpagetoken"></a>
<a id="tocspagetoken"></a>

```json
"string"
```

<h2 id="tocS_IncludeExecutionDataGetExecutionHistory">IncludeExecutionDataGetExecutionHistory</h2>
<!-- backwards compatibility -->
<a id="schemaincludeexecutiondatagetexecutionhistory"></a>
<a id="schema_IncludeExecutionDataGetExecutionHistory"></a>
<a id="tocSincludeexecutiondatagetexecutionhistory"></a>
<a id="tocsincludeexecutiondatagetexecutionhistory"></a>

```json
true
```

<h2 id="tocS_HistoryEventList">HistoryEventList</h2>
<!-- backwards compatibility -->
<a id="schemahistoryeventlist"></a>
<a id="schema_HistoryEventList"></a>
<a id="tocShistoryeventlist"></a>
<a id="tocshistoryeventlist"></a>

```json
[
  {
    "timestamp": {},
    "type": {},
    "id": {},
    "previousEventId": {},
    "activityFailedEventDetails": {
      "error": {},
      "cause": {}
    },
    "activityScheduleFailedEventDetails": {
      "error": {},
      "cause": {}
    },
    "activityScheduledEventDetails": {
      "resource": {},
      "input": {},
      "inputDetails": {
        "truncated": {}
      },
      "timeoutInSeconds": {},
      "heartbeatInSeconds": {}
    },
    "activityStartedEventDetails": {
      "workerName": {}
    },
    "activitySucceededEventDetails": {
      "output": {},
      "outputDetails": {
        "truncated": {}
      }
    },
    "activityTimedOutEventDetails": {
      "error": {},
      "cause": {}
    },
    "taskFailedEventDetails": {
      "resourceType": {},
      "resource": {},
      "error": {},
      "cause": {}
    },
    "taskScheduledEventDetails": {
      "resourceType": {},
      "resource": {},
      "region": {},
      "parameters": {},
      "timeoutInSeconds": {},
      "heartbeatInSeconds": {},
      "taskCredentials": {
        "roleArn": {}
      }
    },
    "taskStartFailedEventDetails": {
      "resourceType": {},
      "resource": {},
      "error": {},
      "cause": {}
    },
    "taskStartedEventDetails": {
      "resourceType": {},
      "resource": {}
    },
    "taskSubmitFailedEventDetails": {
      "resourceType": {},
      "resource": {},
      "error": {},
      "cause": {}
    },
    "taskSubmittedEventDetails": {
      "resourceType": {},
      "resource": {},
      "output": {},
      "outputDetails": {
        "truncated": {}
      }
    },
    "taskSucceededEventDetails": {
      "resourceType": {},
      "resource": {},
      "output": {},
      "outputDetails": {
        "truncated": {}
      }
    },
    "taskTimedOutEventDetails": {
      "resourceType": {},
      "resource": {},
      "error": {},
      "cause": {}
    },
    "executionFailedEventDetails": {
      "error": {},
      "cause": {}
    },
    "executionStartedEventDetails": {
      "input": {},
      "inputDetails": {
        "truncated": {}
      },
      "roleArn": {},
      "stateMachineAliasArn": {},
      "stateMachineVersionArn": {}
    },
    "executionSucceededEventDetails": {
      "output": {},
      "outputDetails": {
        "truncated": {}
      }
    },
    "executionAbortedEventDetails": {
      "error": {},
      "cause": {}
    },
    "executionTimedOutEventDetails": {
      "error": {},
      "cause": {}
    },
    "mapStateStartedEventDetails": {
      "length": {}
    },
    "mapIterationStartedEventDetails": {
      "name": {},
      "index": {}
    },
    "mapIterationSucceededEventDetails": {
      "name": {},
      "index": {}
    },
    "mapIterationFailedEventDetails": {
      "name": {},
      "index": {}
    },
    "mapIterationAbortedEventDetails": {
      "name": {},
      "index": {}
    },
    "lambdaFunctionFailedEventDetails": {
      "error": {},
      "cause": {}
    },
    "lambdaFunctionScheduleFailedEventDetails": {
      "error": {},
      "cause": {}
    },
    "lambdaFunctionScheduledEventDetails": {
      "resource": {},
      "input": {},
      "inputDetails": {
        "truncated": {}
      },
      "timeoutInSeconds": {},
      "taskCredentials": {
        "roleArn": {}
      }
    },
    "lambdaFunctionStartFailedEventDetails": {
      "error": {},
      "cause": {}
    },
    "lambdaFunctionSucceededEventDetails": {
      "output": {},
      "outputDetails": {
        "truncated": {}
      }
    },
    "lambdaFunctionTimedOutEventDetails": {
      "error": {},
      "cause": {}
    },
    "stateEnteredEventDetails": {
      "name": {},
      "input": {},
      "inputDetails": {
        "truncated": {}
      }
    },
    "stateExitedEventDetails": {
      "name": {},
      "output": {},
      "outputDetails": {
        "truncated": {}
      }
    },
    "mapRunStartedEventDetails": {
      "mapRunArn": {}
    },
    "mapRunFailedEventDetails": {
      "error": {},
      "cause": {}
    }
  }
]
```

Contains details about the events that occurred during an execution.

<h2 id="tocS_HistoryEventType">HistoryEventType</h2>
<!-- backwards compatibility -->
<a id="schemahistoryeventtype"></a>
<a id="schema_HistoryEventType"></a>
<a id="tocShistoryeventtype"></a>
<a id="tocshistoryeventtype"></a>

```json
"ActivityFailed"
```

<h2 id="tocS_TaskFailedEventDetails">TaskFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemataskfailedeventdetails"></a>
<a id="schema_TaskFailedEventDetails"></a>
<a id="tocStaskfailedeventdetails"></a>
<a id="tocstaskfailedeventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {},
  "error": {},
  "cause": {}
}
```

Contains details about a task failure event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_TaskScheduledEventDetails">TaskScheduledEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemataskscheduledeventdetails"></a>
<a id="schema_TaskScheduledEventDetails"></a>
<a id="tocStaskscheduledeventdetails"></a>
<a id="tocstaskscheduledeventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {},
  "region": {},
  "parameters": {},
  "timeoutInSeconds": {},
  "heartbeatInSeconds": {},
  "taskCredentials": {
    "roleArn": {}
  }
}
```

Contains details about a task scheduled during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|
|region|object|true|none|none|
|parameters|object|true|none|none|
|timeoutInSeconds|object|false|none|none|
|heartbeatInSeconds|object|false|none|none|
|taskCredentials|object|false|none|none|

<h2 id="tocS_TaskStartFailedEventDetails">TaskStartFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemataskstartfailedeventdetails"></a>
<a id="schema_TaskStartFailedEventDetails"></a>
<a id="tocStaskstartfailedeventdetails"></a>
<a id="tocstaskstartfailedeventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {},
  "error": {},
  "cause": {}
}
```

Contains details about a task that failed to start during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_TaskStartedEventDetails">TaskStartedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemataskstartedeventdetails"></a>
<a id="schema_TaskStartedEventDetails"></a>
<a id="tocStaskstartedeventdetails"></a>
<a id="tocstaskstartedeventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {}
}
```

Contains details about the start of a task during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|

<h2 id="tocS_TaskSubmitFailedEventDetails">TaskSubmitFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schematasksubmitfailedeventdetails"></a>
<a id="schema_TaskSubmitFailedEventDetails"></a>
<a id="tocStasksubmitfailedeventdetails"></a>
<a id="tocstasksubmitfailedeventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {},
  "error": {},
  "cause": {}
}
```

Contains details about a task that failed to submit during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_TaskSubmittedEventDetails">TaskSubmittedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schematasksubmittedeventdetails"></a>
<a id="schema_TaskSubmittedEventDetails"></a>
<a id="tocStasksubmittedeventdetails"></a>
<a id="tocstasksubmittedeventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {},
  "output": {},
  "outputDetails": {
    "truncated": {}
  }
}
```

Contains details about a task submitted to a resource .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|
|output|object|false|none|none|
|outputDetails|object|false|none|none|

<h2 id="tocS_TaskSucceededEventDetails">TaskSucceededEventDetails</h2>
<!-- backwards compatibility -->
<a id="schematasksucceededeventdetails"></a>
<a id="schema_TaskSucceededEventDetails"></a>
<a id="tocStasksucceededeventdetails"></a>
<a id="tocstasksucceededeventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {},
  "output": {},
  "outputDetails": {
    "truncated": {}
  }
}
```

Contains details about the successful completion of a task state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|
|output|object|false|none|none|
|outputDetails|object|false|none|none|

<h2 id="tocS_TaskTimedOutEventDetails">TaskTimedOutEventDetails</h2>
<!-- backwards compatibility -->
<a id="schematasktimedouteventdetails"></a>
<a id="schema_TaskTimedOutEventDetails"></a>
<a id="tocStasktimedouteventdetails"></a>
<a id="tocstasktimedouteventdetails"></a>

```json
{
  "resourceType": {},
  "resource": {},
  "error": {},
  "cause": {}
}
```

Contains details about a resource timeout that occurred during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resource|object|true|none|none|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_MapStateStartedEventDetails">MapStateStartedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemamapstatestartedeventdetails"></a>
<a id="schema_MapStateStartedEventDetails"></a>
<a id="tocSmapstatestartedeventdetails"></a>
<a id="tocsmapstatestartedeventdetails"></a>

```json
{
  "length": {}
}
```

Details about a Map state that was started.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|object|false|none|none|

<h2 id="tocS_MapIterationEventDetails">MapIterationEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemamapiterationeventdetails"></a>
<a id="schema_MapIterationEventDetails"></a>
<a id="tocSmapiterationeventdetails"></a>
<a id="tocsmapiterationeventdetails"></a>

```json
{
  "name": {},
  "index": {}
}
```

Contains details about an iteration of a Map state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|index|object|false|none|none|

<h2 id="tocS_LambdaFunctionFailedEventDetails">LambdaFunctionFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionfailedeventdetails"></a>
<a id="schema_LambdaFunctionFailedEventDetails"></a>
<a id="tocSlambdafunctionfailedeventdetails"></a>
<a id="tocslambdafunctionfailedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about a Lambda function that failed during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_LambdaFunctionScheduleFailedEventDetails">LambdaFunctionScheduleFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionschedulefailedeventdetails"></a>
<a id="schema_LambdaFunctionScheduleFailedEventDetails"></a>
<a id="tocSlambdafunctionschedulefailedeventdetails"></a>
<a id="tocslambdafunctionschedulefailedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about a failed Lambda function schedule event that occurred during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_LambdaFunctionScheduledEventDetails">LambdaFunctionScheduledEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionscheduledeventdetails"></a>
<a id="schema_LambdaFunctionScheduledEventDetails"></a>
<a id="tocSlambdafunctionscheduledeventdetails"></a>
<a id="tocslambdafunctionscheduledeventdetails"></a>

```json
{
  "resource": {},
  "input": {},
  "inputDetails": {
    "truncated": {}
  },
  "timeoutInSeconds": {},
  "taskCredentials": {
    "roleArn": {}
  }
}
```

Contains details about a Lambda function scheduled during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|true|none|none|
|input|object|false|none|none|
|inputDetails|object|false|none|none|
|timeoutInSeconds|object|false|none|none|
|taskCredentials|object|false|none|none|

<h2 id="tocS_LambdaFunctionStartFailedEventDetails">LambdaFunctionStartFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionstartfailedeventdetails"></a>
<a id="schema_LambdaFunctionStartFailedEventDetails"></a>
<a id="tocSlambdafunctionstartfailedeventdetails"></a>
<a id="tocslambdafunctionstartfailedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about a lambda function that failed to start during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_LambdaFunctionSucceededEventDetails">LambdaFunctionSucceededEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionsucceededeventdetails"></a>
<a id="schema_LambdaFunctionSucceededEventDetails"></a>
<a id="tocSlambdafunctionsucceededeventdetails"></a>
<a id="tocslambdafunctionsucceededeventdetails"></a>

```json
{
  "output": {},
  "outputDetails": {
    "truncated": {}
  }
}
```

Contains details about a Lambda function that successfully terminated during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|output|object|false|none|none|
|outputDetails|object|false|none|none|

<h2 id="tocS_LambdaFunctionTimedOutEventDetails">LambdaFunctionTimedOutEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctiontimedouteventdetails"></a>
<a id="schema_LambdaFunctionTimedOutEventDetails"></a>
<a id="tocSlambdafunctiontimedouteventdetails"></a>
<a id="tocslambdafunctiontimedouteventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about a Lambda function timeout that occurred during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_StateEnteredEventDetails">StateEnteredEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemastateenteredeventdetails"></a>
<a id="schema_StateEnteredEventDetails"></a>
<a id="tocSstateenteredeventdetails"></a>
<a id="tocsstateenteredeventdetails"></a>

```json
{
  "name": {},
  "input": {},
  "inputDetails": {
    "truncated": {}
  }
}
```

Contains details about a state entered during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|input|object|false|none|none|
|inputDetails|object|false|none|none|

<h2 id="tocS_StateExitedEventDetails">StateExitedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemastateexitedeventdetails"></a>
<a id="schema_StateExitedEventDetails"></a>
<a id="tocSstateexitedeventdetails"></a>
<a id="tocsstateexitedeventdetails"></a>

```json
{
  "name": {},
  "output": {},
  "outputDetails": {
    "truncated": {}
  }
}
```

Contains details about an exit from a state during an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|output|object|false|none|none|
|outputDetails|object|false|none|none|

<h2 id="tocS_MapRunStartedEventDetails">MapRunStartedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemamaprunstartedeventdetails"></a>
<a id="schema_MapRunStartedEventDetails"></a>
<a id="tocSmaprunstartedeventdetails"></a>
<a id="tocsmaprunstartedeventdetails"></a>

```json
{
  "mapRunArn": {}
}
```

Contains details about a Map Run that was started during a state machine execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapRunArn|object|false|none|none|

<h2 id="tocS_MapRunFailedEventDetails">MapRunFailedEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemamaprunfailedeventdetails"></a>
<a id="schema_MapRunFailedEventDetails"></a>
<a id="tocSmaprunfailedeventdetails"></a>
<a id="tocsmaprunfailedeventdetails"></a>

```json
{
  "error": {},
  "cause": {}
}
```

Contains details about a Map Run failure event that occurred during a state machine execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_HistoryEvent">HistoryEvent</h2>
<!-- backwards compatibility -->
<a id="schemahistoryevent"></a>
<a id="schema_HistoryEvent"></a>
<a id="tocShistoryevent"></a>
<a id="tocshistoryevent"></a>

```json
{
  "timestamp": {},
  "type": {},
  "id": {},
  "previousEventId": {},
  "activityFailedEventDetails": {
    "error": {},
    "cause": {}
  },
  "activityScheduleFailedEventDetails": {
    "error": {},
    "cause": {}
  },
  "activityScheduledEventDetails": {
    "resource": {},
    "input": {},
    "inputDetails": {
      "truncated": {}
    },
    "timeoutInSeconds": {},
    "heartbeatInSeconds": {}
  },
  "activityStartedEventDetails": {
    "workerName": {}
  },
  "activitySucceededEventDetails": {
    "output": {},
    "outputDetails": {
      "truncated": {}
    }
  },
  "activityTimedOutEventDetails": {
    "error": {},
    "cause": {}
  },
  "taskFailedEventDetails": {
    "resourceType": {},
    "resource": {},
    "error": {},
    "cause": {}
  },
  "taskScheduledEventDetails": {
    "resourceType": {},
    "resource": {},
    "region": {},
    "parameters": {},
    "timeoutInSeconds": {},
    "heartbeatInSeconds": {},
    "taskCredentials": {
      "roleArn": {}
    }
  },
  "taskStartFailedEventDetails": {
    "resourceType": {},
    "resource": {},
    "error": {},
    "cause": {}
  },
  "taskStartedEventDetails": {
    "resourceType": {},
    "resource": {}
  },
  "taskSubmitFailedEventDetails": {
    "resourceType": {},
    "resource": {},
    "error": {},
    "cause": {}
  },
  "taskSubmittedEventDetails": {
    "resourceType": {},
    "resource": {},
    "output": {},
    "outputDetails": {
      "truncated": {}
    }
  },
  "taskSucceededEventDetails": {
    "resourceType": {},
    "resource": {},
    "output": {},
    "outputDetails": {
      "truncated": {}
    }
  },
  "taskTimedOutEventDetails": {
    "resourceType": {},
    "resource": {},
    "error": {},
    "cause": {}
  },
  "executionFailedEventDetails": {
    "error": {},
    "cause": {}
  },
  "executionStartedEventDetails": {
    "input": {},
    "inputDetails": {
      "truncated": {}
    },
    "roleArn": {},
    "stateMachineAliasArn": {},
    "stateMachineVersionArn": {}
  },
  "executionSucceededEventDetails": {
    "output": {},
    "outputDetails": {
      "truncated": {}
    }
  },
  "executionAbortedEventDetails": {
    "error": {},
    "cause": {}
  },
  "executionTimedOutEventDetails": {
    "error": {},
    "cause": {}
  },
  "mapStateStartedEventDetails": {
    "length": {}
  },
  "mapIterationStartedEventDetails": {
    "name": {},
    "index": {}
  },
  "mapIterationSucceededEventDetails": {
    "name": {},
    "index": {}
  },
  "mapIterationFailedEventDetails": {
    "name": {},
    "index": {}
  },
  "mapIterationAbortedEventDetails": {
    "name": {},
    "index": {}
  },
  "lambdaFunctionFailedEventDetails": {
    "error": {},
    "cause": {}
  },
  "lambdaFunctionScheduleFailedEventDetails": {
    "error": {},
    "cause": {}
  },
  "lambdaFunctionScheduledEventDetails": {
    "resource": {},
    "input": {},
    "inputDetails": {
      "truncated": {}
    },
    "timeoutInSeconds": {},
    "taskCredentials": {
      "roleArn": {}
    }
  },
  "lambdaFunctionStartFailedEventDetails": {
    "error": {},
    "cause": {}
  },
  "lambdaFunctionSucceededEventDetails": {
    "output": {},
    "outputDetails": {
      "truncated": {}
    }
  },
  "lambdaFunctionTimedOutEventDetails": {
    "error": {},
    "cause": {}
  },
  "stateEnteredEventDetails": {
    "name": {},
    "input": {},
    "inputDetails": {
      "truncated": {}
    }
  },
  "stateExitedEventDetails": {
    "name": {},
    "output": {},
    "outputDetails": {
      "truncated": {}
    }
  },
  "mapRunStartedEventDetails": {
    "mapRunArn": {}
  },
  "mapRunFailedEventDetails": {
    "error": {},
    "cause": {}
  }
}
```

Contains details about the events of an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|object|true|none|none|
|type|object|true|none|none|
|id|object|true|none|none|
|previousEventId|object|false|none|none|
|activityFailedEventDetails|[ActivityFailedEventDetails](#schemaactivityfailedeventdetails)|false|none|Contains details about an activity that failed during an execution.|
|activityScheduleFailedEventDetails|object|false|none|none|
|activityScheduledEventDetails|[ActivityScheduledEventDetails](#schemaactivityscheduledeventdetails)|false|none|Contains details about an activity scheduled during an execution.|
|activityStartedEventDetails|[ActivityStartedEventDetails](#schemaactivitystartedeventdetails)|false|none|Contains details about the start of an activity during an execution.|
|activitySucceededEventDetails|[ActivitySucceededEventDetails](#schemaactivitysucceededeventdetails)|false|none|Contains details about an activity that successfully terminated during an execution.|
|activityTimedOutEventDetails|[ActivityTimedOutEventDetails](#schemaactivitytimedouteventdetails)|false|none|Contains details about an activity timeout that occurred during an execution.|
|taskFailedEventDetails|object|false|none|none|
|taskScheduledEventDetails|object|false|none|none|
|taskStartFailedEventDetails|object|false|none|none|
|taskStartedEventDetails|object|false|none|none|
|taskSubmitFailedEventDetails|object|false|none|none|
|taskSubmittedEventDetails|object|false|none|none|
|taskSucceededEventDetails|object|false|none|none|
|taskTimedOutEventDetails|object|false|none|none|
|executionFailedEventDetails|[ExecutionFailedEventDetails](#schemaexecutionfailedeventdetails)|false|none|Contains details about an execution failure event.|
|executionStartedEventDetails|[ExecutionStartedEventDetails](#schemaexecutionstartedeventdetails)|false|none|Contains details about the start of the execution.|
|executionSucceededEventDetails|[ExecutionSucceededEventDetails](#schemaexecutionsucceededeventdetails)|false|none|Contains details about the successful termination of the execution.|
|executionAbortedEventDetails|[ExecutionAbortedEventDetails](#schemaexecutionabortedeventdetails)|false|none|Contains details about an abort of an execution.|
|executionTimedOutEventDetails|[ExecutionTimedOutEventDetails](#schemaexecutiontimedouteventdetails)|false|none|Contains details about the execution timeout that occurred during the execution.|
|mapStateStartedEventDetails|object|false|none|none|
|mapIterationStartedEventDetails|object|false|none|none|
|mapIterationSucceededEventDetails|object|false|none|none|
|mapIterationFailedEventDetails|object|false|none|none|
|mapIterationAbortedEventDetails|object|false|none|none|
|lambdaFunctionFailedEventDetails|[LambdaFunctionFailedEventDetails](#schemalambdafunctionfailedeventdetails)|false|none|Contains details about a Lambda function that failed during an execution.|
|lambdaFunctionScheduleFailedEventDetails|[LambdaFunctionScheduleFailedEventDetails](#schemalambdafunctionschedulefailedeventdetails)|false|none|Contains details about a failed Lambda function schedule event that occurred during an execution.|
|lambdaFunctionScheduledEventDetails|[LambdaFunctionScheduledEventDetails](#schemalambdafunctionscheduledeventdetails)|false|none|Contains details about a Lambda function scheduled during an execution.|
|lambdaFunctionStartFailedEventDetails|object|false|none|none|
|lambdaFunctionSucceededEventDetails|object|false|none|none|
|lambdaFunctionTimedOutEventDetails|[LambdaFunctionTimedOutEventDetails](#schemalambdafunctiontimedouteventdetails)|false|none|Contains details about a Lambda function timeout that occurred during an execution.|
|stateEnteredEventDetails|[StateEnteredEventDetails](#schemastateenteredeventdetails)|false|none|Contains details about a state entered during an execution.|
|stateExitedEventDetails|[StateExitedEventDetails](#schemastateexitedeventdetails)|false|none|Contains details about an exit from a state during an execution.|
|mapRunStartedEventDetails|object|false|none|none|
|mapRunFailedEventDetails|object|false|none|none|

<h2 id="tocS_truncated">truncated</h2>
<!-- backwards compatibility -->
<a id="schematruncated"></a>
<a id="schema_truncated"></a>
<a id="tocStruncated"></a>
<a id="tocstruncated"></a>

```json
true
```

<h2 id="tocS_IncludeExecutionData">IncludeExecutionData</h2>
<!-- backwards compatibility -->
<a id="schemaincludeexecutiondata"></a>
<a id="schema_IncludeExecutionData"></a>
<a id="tocSincludeexecutiondata"></a>
<a id="tocsincludeexecutiondata"></a>

```json
true
```

<h2 id="tocS_TaskCredentials">TaskCredentials</h2>
<!-- backwards compatibility -->
<a id="schemataskcredentials"></a>
<a id="schema_TaskCredentials"></a>
<a id="tocStaskcredentials"></a>
<a id="tocstaskcredentials"></a>

```json
{
  "roleArn": {}
}
```

Contains details about the credentials that Step Functions uses for a task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleArn|object|false|none|none|

<h2 id="tocS_ListExecutionsPageToken">ListExecutionsPageToken</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionspagetoken"></a>
<a id="schema_ListExecutionsPageToken"></a>
<a id="tocSlistexecutionspagetoken"></a>
<a id="tocslistexecutionspagetoken"></a>

```json
"string"
```

<h2 id="tocS_MapRunList">MapRunList</h2>
<!-- backwards compatibility -->
<a id="schemamaprunlist"></a>
<a id="schema_MapRunList"></a>
<a id="tocSmaprunlist"></a>
<a id="tocsmaprunlist"></a>

```json
[
  {
    "executionArn": {},
    "mapRunArn": {},
    "stateMachineArn": {},
    "startDate": {},
    "stopDate": {}
  }
]
```

<h2 id="tocS_StateMachineAliasList">StateMachineAliasList</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinealiaslist"></a>
<a id="schema_StateMachineAliasList"></a>
<a id="tocSstatemachinealiaslist"></a>
<a id="tocsstatemachinealiaslist"></a>

```json
[
  {
    "stateMachineAliasArn": {},
    "creationDate": {}
  }
]
```

<h2 id="tocS_StateMachineVersionList">StateMachineVersionList</h2>
<!-- backwards compatibility -->
<a id="schemastatemachineversionlist"></a>
<a id="schema_StateMachineVersionList"></a>
<a id="tocSstatemachineversionlist"></a>
<a id="tocsstatemachineversionlist"></a>

```json
[
  {
    "stateMachineVersionArn": {},
    "creationDate": {}
  }
]
```

<h2 id="tocS_StateMachineList">StateMachineList</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinelist"></a>
<a id="schema_StateMachineList"></a>
<a id="tocSstatemachinelist"></a>
<a id="tocsstatemachinelist"></a>

```json
[
  {
    "stateMachineArn": {},
    "name": {},
    "type": {},
    "creationDate": {}
  }
]
```

<h2 id="tocS_LogDestination">LogDestination</h2>
<!-- backwards compatibility -->
<a id="schemalogdestination"></a>
<a id="schema_LogDestination"></a>
<a id="tocSlogdestination"></a>
<a id="tocslogdestination"></a>

```json
{
  "cloudWatchLogsLogGroup": {
    "logGroupArn": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogsLogGroup|object|false|none|none|

<h2 id="tocS_LogDestinationList">LogDestinationList</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationlist"></a>
<a id="schema_LogDestinationList"></a>
<a id="tocSlogdestinationlist"></a>
<a id="tocslogdestinationlist"></a>

```json
[
  {
    "cloudWatchLogsLogGroup": {
      "logGroupArn": {}
    }
  }
]
```

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"ALL"
```

<h2 id="tocS_UnsignedLong">UnsignedLong</h2>
<!-- backwards compatibility -->
<a id="schemaunsignedlong"></a>
<a id="schema_UnsignedLong"></a>
<a id="tocSunsignedlong"></a>
<a id="tocsunsignedlong"></a>

```json
0
```

<h2 id="tocS_MapRunListItem">MapRunListItem</h2>
<!-- backwards compatibility -->
<a id="schemamaprunlistitem"></a>
<a id="schema_MapRunListItem"></a>
<a id="tocSmaprunlistitem"></a>
<a id="tocsmaprunlistitem"></a>

```json
{
  "executionArn": {},
  "mapRunArn": {},
  "stateMachineArn": {},
  "startDate": {},
  "stopDate": {}
}
```

Contains details about a specific Map Run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionArn|object|true|none|none|
|mapRunArn|object|true|none|none|
|stateMachineArn|object|true|none|none|
|startDate|object|true|none|none|
|stopDate|object|false|none|none|

<h2 id="tocS_RoutingConfigurationListItem">RoutingConfigurationListItem</h2>
<!-- backwards compatibility -->
<a id="schemaroutingconfigurationlistitem"></a>
<a id="schema_RoutingConfigurationListItem"></a>
<a id="tocSroutingconfigurationlistitem"></a>
<a id="tocsroutingconfigurationlistitem"></a>

```json
{
  "stateMachineVersionArn": {},
  "weight": {}
}
```

Contains details about the routing configuration of a state machine alias. In a routing configuration, you define an array of objects that specify up to two state machine versions. You also specify the percentage of traffic to be routed to each version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineVersionArn|object|true|none|none|
|weight|object|true|none|none|

<h2 id="tocS_VersionWeight">VersionWeight</h2>
<!-- backwards compatibility -->
<a id="schemaversionweight"></a>
<a id="schema_VersionWeight"></a>
<a id="tocSversionweight"></a>
<a id="tocsversionweight"></a>

```json
0
```

<h2 id="tocS_SyncExecutionStatus">SyncExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemasyncexecutionstatus"></a>
<a id="schema_SyncExecutionStatus"></a>
<a id="tocSsyncexecutionstatus"></a>
<a id="tocssyncexecutionstatus"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_StateMachineAliasListItem">StateMachineAliasListItem</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinealiaslistitem"></a>
<a id="schema_StateMachineAliasListItem"></a>
<a id="tocSstatemachinealiaslistitem"></a>
<a id="tocsstatemachinealiaslistitem"></a>

```json
{
  "stateMachineAliasArn": {},
  "creationDate": {}
}
```

Contains details about a specific state machine alias.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineAliasArn|object|true|none|none|
|creationDate|object|true|none|none|

<h2 id="tocS_StateMachineListItem">StateMachineListItem</h2>
<!-- backwards compatibility -->
<a id="schemastatemachinelistitem"></a>
<a id="schema_StateMachineListItem"></a>
<a id="tocSstatemachinelistitem"></a>
<a id="tocsstatemachinelistitem"></a>

```json
{
  "stateMachineArn": {},
  "name": {},
  "type": {},
  "creationDate": {}
}
```

Contains details about the state machine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineArn|object|true|none|none|
|name|object|true|none|none|
|type|object|true|none|none|
|creationDate|object|true|none|none|

<h2 id="tocS_StateMachineVersionListItem">StateMachineVersionListItem</h2>
<!-- backwards compatibility -->
<a id="schemastatemachineversionlistitem"></a>
<a id="schema_StateMachineVersionListItem"></a>
<a id="tocSstatemachineversionlistitem"></a>
<a id="tocsstatemachineversionlistitem"></a>

```json
{
  "stateMachineVersionArn": {},
  "creationDate": {}
}
```

Contains details about a specific state machine version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateMachineVersionArn|object|true|none|none|
|creationDate|object|true|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
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

<p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

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
