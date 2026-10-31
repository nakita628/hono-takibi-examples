<h1 id="amazon-simple-workflow-service">Amazon Simple Workflow Service v2012-01-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Simple Workflow Service</fullname> <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a <i>task</i> represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.</p> <p>Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.</p> <p>This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the <i> <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a> </i>.</p>

Base URLs:

* <a href="http://swf.us-east-1.amazonaws.com">http://swf.us-east-1.amazonaws.com</a> - The Amazon SWF multi-region endpoint

* <a href="https://swf.us-east-1.amazonaws.com">https://swf.us-east-1.amazonaws.com</a> - The Amazon SWF multi-region endpoint

* <a href="http://swf.cn-north-1.amazonaws.com.cn">http://swf.cn-north-1.amazonaws.com.cn</a> - The Amazon SWF endpoint for China (Beijing) and China (Ningxia)

* <a href="https://swf.cn-north-1.amazonaws.com.cn">https://swf.cn-north-1.amazonaws.com.cn</a> - The Amazon SWF endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/swf/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-simple-workflow-service-default">Default</h1>

## CountClosedWorkflowExecutions

<a id="opIdCountClosedWorkflowExecutions"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.CountClosedWorkflowExecutions' \
  -d '{
    "domain": {},
    "startTimeFilter": {
      "oldestDate": {},
      "latestDate": {}
    },
    "closeTimeFilter": {
      "oldestDate": {},
      "latestDate": {}
    },
    "executionFilter": {
      "workflowId": {}
    },
    "typeFilter": {
      "name": {},
      "version": {}
    },
    "tagFilter": {
      "tag": {}
    },
    "closeStatusFilter": {
      "status": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions`

<p>Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "closeTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "executionFilter": {
    "workflowId": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "closeStatusFilter": {
    "status": {}
  }
}
```

<h3 id="countclosedworkflowexecutions-parameters">Parameters</h3>

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
|body|body|[CountClosedWorkflowExecutionsInput](#schemacountclosedworkflowexecutionsinput)|true|none|
|» domain|body|object|true|none|
|» startTimeFilter|body|object|false|none|
|» » oldestDate|body|object|true|none|
|» » latestDate|body|object|false|none|
|» closeTimeFilter|body|object|false|none|
|» » oldestDate|body|object|true|none|
|» » latestDate|body|object|false|none|
|» executionFilter|body|object|false|none|
|» » workflowId|body|object|true|none|
|» typeFilter|body|object|false|none|
|» » name|body|object|true|none|
|» » version|body|object|false|none|
|» tagFilter|body|object|false|none|
|» » tag|body|object|true|none|
|» closeStatusFilter|body|object|false|none|
|» » status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.CountClosedWorkflowExecutions|

> Example responses

> 200 Response

```json
{
  "count": {},
  "truncated": {}
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

<h3 id="countclosedworkflowexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowExecutionCount](#schemaworkflowexecutioncount)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CountOpenWorkflowExecutions

<a id="opIdCountOpenWorkflowExecutions"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.CountOpenWorkflowExecutions' \
  -d '{
    "domain": {},
    "startTimeFilter": {
      "oldestDate": {},
      "latestDate": {}
    },
    "typeFilter": {
      "name": {},
      "version": {}
    },
    "tagFilter": {
      "tag": {}
    },
    "executionFilter": {
      "workflowId": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions`

<p>Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "executionFilter": {
    "workflowId": {}
  }
}
```

<h3 id="countopenworkflowexecutions-parameters">Parameters</h3>

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
|body|body|[CountOpenWorkflowExecutionsInput](#schemacountopenworkflowexecutionsinput)|true|none|
|» domain|body|object|true|none|
|» startTimeFilter|body|object|true|none|
|» » oldestDate|body|object|true|none|
|» » latestDate|body|object|false|none|
|» typeFilter|body|object|false|none|
|» » name|body|object|true|none|
|» » version|body|object|false|none|
|» tagFilter|body|object|false|none|
|» » tag|body|object|true|none|
|» executionFilter|body|object|false|none|
|» » workflowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.CountOpenWorkflowExecutions|

> Example responses

> 200 Response

```json
{
  "count": {},
  "truncated": {}
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

<h3 id="countopenworkflowexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowExecutionCount](#schemaworkflowexecutioncount)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CountPendingActivityTasks

<a id="opIdCountPendingActivityTasks"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.CountPendingActivityTasks' \
  -d '{
    "domain": {},
    "taskList": {
      "name": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks`

<p>Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  }
}
```

<h3 id="countpendingactivitytasks-parameters">Parameters</h3>

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
|body|body|[CountPendingActivityTasksInput](#schemacountpendingactivitytasksinput)|true|none|
|» domain|body|object|true|none|
|» taskList|body|object|true|none|
|» » name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.CountPendingActivityTasks|

> Example responses

> 200 Response

```json
{
  "count": {},
  "truncated": {}
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

<h3 id="countpendingactivitytasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PendingTaskCount](#schemapendingtaskcount)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CountPendingDecisionTasks

<a id="opIdCountPendingDecisionTasks"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.CountPendingDecisionTasks' \
  -d '{
    "domain": {},
    "taskList": {
      "name": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks`

<p>Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  }
}
```

<h3 id="countpendingdecisiontasks-parameters">Parameters</h3>

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
|body|body|[CountPendingDecisionTasksInput](#schemacountpendingdecisiontasksinput)|true|none|
|» domain|body|object|true|none|
|» taskList|body|object|true|none|
|» » name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.CountPendingDecisionTasks|

> Example responses

> 200 Response

```json
{
  "count": {},
  "truncated": {}
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

<h3 id="countpendingdecisiontasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PendingTaskCount](#schemapendingtaskcount)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeprecateActivityType

<a id="opIdDeprecateActivityType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.DeprecateActivityType' \
  -d '{
    "domain": {},
    "activityType": {
      "name": {},
      "version": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType`

<p>Deprecates the specified <i>activity type</i>. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "activityType": {
    "name": {},
    "version": {}
  }
}
```

<h3 id="deprecateactivitytype-parameters">Parameters</h3>

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
|body|body|[DeprecateActivityTypeInput](#schemadeprecateactivitytypeinput)|true|none|
|» domain|body|object|true|none|
|» activityType|body|object|true|none|
|» » name|body|object|true|none|
|» » version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.DeprecateActivityType|

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

<h3 id="deprecateactivitytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|TypeDeprecatedFault|[TypeDeprecatedFault](#schematypedeprecatedfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeprecateDomain

<a id="opIdDeprecateDomain"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.DeprecateDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.DeprecateDomain' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.DeprecateDomain`

<p>Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deprecatedomain-parameters">Parameters</h3>

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
|body|body|[DeprecateDomainInput](#schemadeprecatedomaininput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.DeprecateDomain|

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

<h3 id="deprecatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|DomainDeprecatedFault|[DomainDeprecatedFault](#schemadomaindeprecatedfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeprecateWorkflowType

<a id="opIdDeprecateWorkflowType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.DeprecateWorkflowType' \
  -d '{
    "domain": {},
    "workflowType": {
      "name": {},
      "version": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType`

<p>Deprecates the specified <i>workflow type</i>. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "workflowType": {
    "name": {},
    "version": {}
  }
}
```

<h3 id="deprecateworkflowtype-parameters">Parameters</h3>

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
|body|body|[DeprecateWorkflowTypeInput](#schemadeprecateworkflowtypeinput)|true|none|
|» domain|body|object|true|none|
|» workflowType|body|object|true|none|
|» » name|body|object|true|none|
|» » version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.DeprecateWorkflowType|

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

<h3 id="deprecateworkflowtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|TypeDeprecatedFault|[TypeDeprecatedFault](#schematypedeprecatedfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeActivityType

<a id="opIdDescribeActivityType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.DescribeActivityType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.DescribeActivityType' \
  -d '{
    "domain": {},
    "activityType": {
      "name": {},
      "version": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.DescribeActivityType`

<p>Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "activityType": {
    "name": {},
    "version": {}
  }
}
```

<h3 id="describeactivitytype-parameters">Parameters</h3>

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
|body|body|[DescribeActivityTypeInput](#schemadescribeactivitytypeinput)|true|none|
|» domain|body|object|true|none|
|» activityType|body|object|true|none|
|» » name|body|object|true|none|
|» » version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.DescribeActivityType|

> Example responses

> 200 Response

```json
{
  "typeInfo": {
    "activityType": {
      "name": {},
      "version": {}
    },
    "status": {},
    "description": {},
    "creationDate": {},
    "deprecationDate": {}
  },
  "configuration": {
    "defaultTaskStartToCloseTimeout": {},
    "defaultTaskHeartbeatTimeout": {},
    "defaultTaskList": {
      "name": {}
    },
    "defaultTaskPriority": {},
    "defaultTaskScheduleToStartTimeout": {},
    "defaultTaskScheduleToCloseTimeout": {}
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

<h3 id="describeactivitytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivityTypeDetail](#schemaactivitytypedetail)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDomain

<a id="opIdDescribeDomain"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.DescribeDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.DescribeDomain' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.DescribeDomain`

<p>Returns information about the specified domain, including description and status.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="describedomain-parameters">Parameters</h3>

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
|body|body|[DescribeDomainInput](#schemadescribedomaininput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.DescribeDomain|

> Example responses

> 200 Response

```json
{
  "domainInfo": {
    "name": {},
    "status": {},
    "description": {},
    "arn": {}
  },
  "configuration": {
    "workflowExecutionRetentionPeriodInDays": {}
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

<h3 id="describedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainDetail](#schemadomaindetail)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkflowExecution

<a id="opIdDescribeWorkflowExecution"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.DescribeWorkflowExecution' \
  -d '{
    "domain": {},
    "execution": {
      "workflowId": {},
      "runId": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution`

<p>Returns information about the specified workflow execution including its type and some statistics.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "execution": {
    "workflowId": {},
    "runId": {}
  }
}
```

<h3 id="describeworkflowexecution-parameters">Parameters</h3>

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
|body|body|[DescribeWorkflowExecutionInput](#schemadescribeworkflowexecutioninput)|true|none|
|» domain|body|object|true|none|
|» execution|body|object|true|none|
|» » workflowId|body|object|true|none|
|» » runId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.DescribeWorkflowExecution|

> Example responses

> 200 Response

```json
{
  "executionInfo": {
    "execution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "startTimestamp": {},
    "closeTimestamp": {},
    "executionStatus": {},
    "closeStatus": {},
    "parent": {
      "workflowId": {},
      "runId": {}
    },
    "tagList": {},
    "cancelRequested": {}
  },
  "executionConfiguration": {
    "taskStartToCloseTimeout": {},
    "executionStartToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "childPolicy": {},
    "lambdaRole": {}
  },
  "openCounts": {
    "openActivityTasks": {},
    "openDecisionTasks": {},
    "openTimers": {},
    "openChildWorkflowExecutions": {},
    "openLambdaFunctions": {}
  },
  "latestActivityTaskTimestamp": {},
  "latestExecutionContext": {}
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

<h3 id="describeworkflowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowExecutionDetail](#schemaworkflowexecutiondetail)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkflowType

<a id="opIdDescribeWorkflowType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.DescribeWorkflowType' \
  -d '{
    "domain": {},
    "workflowType": {
      "name": {},
      "version": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType`

<p>Returns information about the specified <i>workflow type</i>. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "workflowType": {
    "name": {},
    "version": {}
  }
}
```

<h3 id="describeworkflowtype-parameters">Parameters</h3>

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
|body|body|[DescribeWorkflowTypeInput](#schemadescribeworkflowtypeinput)|true|none|
|» domain|body|object|true|none|
|» workflowType|body|object|true|none|
|» » name|body|object|true|none|
|» » version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.DescribeWorkflowType|

> Example responses

> 200 Response

```json
{
  "typeInfo": {
    "workflowType": {
      "name": {},
      "version": {}
    },
    "status": {},
    "description": {},
    "creationDate": {},
    "deprecationDate": {}
  },
  "configuration": {
    "defaultTaskStartToCloseTimeout": {},
    "defaultExecutionStartToCloseTimeout": {},
    "defaultTaskList": {
      "name": {}
    },
    "defaultTaskPriority": {},
    "defaultChildPolicy": {},
    "defaultLambdaRole": {}
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

<h3 id="describeworkflowtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowTypeDetail](#schemaworkflowtypedetail)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkflowExecutionHistory

<a id="opIdGetWorkflowExecutionHistory"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.GetWorkflowExecutionHistory' \
  -d '{
    "domain": {},
    "execution": {
      "workflowId": {},
      "runId": {}
    },
    "nextPageToken": {},
    "maximumPageSize": {},
    "reverseOrder": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory`

<p>Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "execution": {
    "workflowId": {},
    "runId": {}
  },
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

<h3 id="getworkflowexecutionhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maximumPageSize|query|string|false|Pagination limit|
|nextPageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetWorkflowExecutionHistoryInput](#schemagetworkflowexecutionhistoryinput)|true|none|
|» domain|body|object|true|none|
|» execution|body|object|true|none|
|» » workflowId|body|object|true|none|
|» » runId|body|object|true|none|
|» nextPageToken|body|object|false|none|
|» maximumPageSize|body|object|false|none|
|» reverseOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.GetWorkflowExecutionHistory|

> Example responses

> 200 Response

```json
{
  "events": {},
  "nextPageToken": {}
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

<h3 id="getworkflowexecutionhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[History](#schemahistory)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListActivityTypes

<a id="opIdListActivityTypes"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.ListActivityTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.ListActivityTypes' \
  -d '{
    "domain": {},
    "name": {},
    "registrationStatus": {},
    "nextPageToken": {},
    "maximumPageSize": {},
    "reverseOrder": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.ListActivityTypes`

<p>Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "name": {},
  "registrationStatus": {},
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

<h3 id="listactivitytypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maximumPageSize|query|string|false|Pagination limit|
|nextPageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListActivityTypesInput](#schemalistactivitytypesinput)|true|none|
|» domain|body|object|true|none|
|» name|body|object|false|none|
|» registrationStatus|body|object|true|none|
|» nextPageToken|body|object|false|none|
|» maximumPageSize|body|object|false|none|
|» reverseOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.ListActivityTypes|

> Example responses

> 200 Response

```json
{
  "typeInfos": {},
  "nextPageToken": {}
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

<h3 id="listactivitytypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivityTypeInfos](#schemaactivitytypeinfos)|
|480|480|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|
|481|481|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClosedWorkflowExecutions

<a id="opIdListClosedWorkflowExecutions"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.ListClosedWorkflowExecutions' \
  -d '{
    "domain": {},
    "startTimeFilter": {
      "oldestDate": {},
      "latestDate": {}
    },
    "closeTimeFilter": {
      "oldestDate": {},
      "latestDate": {}
    },
    "executionFilter": {
      "workflowId": {}
    },
    "closeStatusFilter": {
      "status": {}
    },
    "typeFilter": {
      "name": {},
      "version": {}
    },
    "tagFilter": {
      "tag": {}
    },
    "nextPageToken": {},
    "maximumPageSize": {},
    "reverseOrder": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions`

<p>Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "closeTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "executionFilter": {
    "workflowId": {}
  },
  "closeStatusFilter": {
    "status": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

<h3 id="listclosedworkflowexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maximumPageSize|query|string|false|Pagination limit|
|nextPageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListClosedWorkflowExecutionsInput](#schemalistclosedworkflowexecutionsinput)|true|none|
|» domain|body|object|true|none|
|» startTimeFilter|body|object|false|none|
|» » oldestDate|body|object|true|none|
|» » latestDate|body|object|false|none|
|» closeTimeFilter|body|object|false|none|
|» » oldestDate|body|object|true|none|
|» » latestDate|body|object|false|none|
|» executionFilter|body|object|false|none|
|» » workflowId|body|object|true|none|
|» closeStatusFilter|body|object|false|none|
|» » status|body|object|true|none|
|» typeFilter|body|object|false|none|
|» » name|body|object|true|none|
|» » version|body|object|false|none|
|» tagFilter|body|object|false|none|
|» » tag|body|object|true|none|
|» nextPageToken|body|object|false|none|
|» maximumPageSize|body|object|false|none|
|» reverseOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.ListClosedWorkflowExecutions|

> Example responses

> 200 Response

```json
{
  "executionInfos": {},
  "nextPageToken": {}
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

<h3 id="listclosedworkflowexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowExecutionInfos](#schemaworkflowexecutioninfos)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomains

<a id="opIdListDomains"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.ListDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.ListDomains' \
  -d '{
    "nextPageToken": {},
    "registrationStatus": {},
    "maximumPageSize": {},
    "reverseOrder": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.ListDomains`

<p>Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains. The element must be set to <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is the account ID, with no dashes.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "nextPageToken": {},
  "registrationStatus": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

<h3 id="listdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maximumPageSize|query|string|false|Pagination limit|
|nextPageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDomainsInput](#schemalistdomainsinput)|true|none|
|» nextPageToken|body|object|false|none|
|» registrationStatus|body|object|true|none|
|» maximumPageSize|body|object|false|none|
|» reverseOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.ListDomains|

> Example responses

> 200 Response

```json
{
  "domainInfos": {},
  "nextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainInfos](#schemadomaininfos)|
|480|480|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOpenWorkflowExecutions

<a id="opIdListOpenWorkflowExecutions"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.ListOpenWorkflowExecutions' \
  -d '{
    "domain": {},
    "startTimeFilter": {
      "oldestDate": {},
      "latestDate": {}
    },
    "typeFilter": {
      "name": {},
      "version": {}
    },
    "tagFilter": {
      "tag": {}
    },
    "nextPageToken": {},
    "maximumPageSize": {},
    "reverseOrder": {},
    "executionFilter": {
      "workflowId": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions`

<p>Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {},
  "executionFilter": {
    "workflowId": {}
  }
}
```

<h3 id="listopenworkflowexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maximumPageSize|query|string|false|Pagination limit|
|nextPageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOpenWorkflowExecutionsInput](#schemalistopenworkflowexecutionsinput)|true|none|
|» domain|body|object|true|none|
|» startTimeFilter|body|object|true|none|
|» » oldestDate|body|object|true|none|
|» » latestDate|body|object|false|none|
|» typeFilter|body|object|false|none|
|» » name|body|object|true|none|
|» » version|body|object|false|none|
|» tagFilter|body|object|false|none|
|» » tag|body|object|true|none|
|» nextPageToken|body|object|false|none|
|» maximumPageSize|body|object|false|none|
|» reverseOrder|body|object|false|none|
|» executionFilter|body|object|false|none|
|» » workflowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.ListOpenWorkflowExecutions|

> Example responses

> 200 Response

```json
{
  "executionInfos": {},
  "nextPageToken": {}
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

<h3 id="listopenworkflowexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowExecutionInfos](#schemaworkflowexecutioninfos)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.ListTagsForResource`

List tags for a given domain.

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
|X-Amz-Target|SimpleWorkflowService.ListTagsForResource|

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

> 482 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkflowTypes

<a id="opIdListWorkflowTypes"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.ListWorkflowTypes' \
  -d '{
    "domain": {},
    "name": {},
    "registrationStatus": {},
    "nextPageToken": {},
    "maximumPageSize": {},
    "reverseOrder": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes`

<p>Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "name": {},
  "registrationStatus": {},
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

<h3 id="listworkflowtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maximumPageSize|query|string|false|Pagination limit|
|nextPageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListWorkflowTypesInput](#schemalistworkflowtypesinput)|true|none|
|» domain|body|object|true|none|
|» name|body|object|false|none|
|» registrationStatus|body|object|true|none|
|» nextPageToken|body|object|false|none|
|» maximumPageSize|body|object|false|none|
|» reverseOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.ListWorkflowTypes|

> Example responses

> 200 Response

```json
{
  "typeInfos": {},
  "nextPageToken": {}
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

<h3 id="listworkflowtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowTypeInfos](#schemaworkflowtypeinfos)|
|480|480|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|
|481|481|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PollForActivityTask

<a id="opIdPollForActivityTask"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.PollForActivityTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.PollForActivityTask' \
  -d '{
    "domain": {},
    "taskList": {
      "name": {}
    },
    "identity": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.PollForActivityTask`

<p>Used by workers to get an <a>ActivityTask</a> from the specified activity <code>taskList</code>. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.</p> <important> <p>Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  },
  "identity": {}
}
```

<h3 id="pollforactivitytask-parameters">Parameters</h3>

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
|body|body|[PollForActivityTaskInput](#schemapollforactivitytaskinput)|true|none|
|» domain|body|object|true|none|
|» taskList|body|object|true|none|
|» » name|body|object|true|none|
|» identity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.PollForActivityTask|

> Example responses

> 200 Response

```json
{
  "taskToken": {},
  "activityId": {},
  "startedEventId": {},
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "activityType": {
    "name": {},
    "version": {}
  },
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

<h3 id="pollforactivitytask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivityTask](#schemaactivitytask)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|
|482|482|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PollForDecisionTask

<a id="opIdPollForDecisionTask"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.PollForDecisionTask' \
  -d '{
    "domain": {},
    "taskList": {
      "name": {}
    },
    "identity": {},
    "nextPageToken": {},
    "maximumPageSize": {},
    "reverseOrder": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask`

<p>Used by deciders to get a <a>DecisionTask</a> from the specified decision <code>taskList</code>. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task.</p> <p>This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string.</p> <important> <p>Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout).</p> </important> <important> <p>Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the <code>nextPageToken</code> returned by the initial call. Note that you do <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code> again.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  },
  "identity": {},
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

<h3 id="pollfordecisiontask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maximumPageSize|query|string|false|Pagination limit|
|nextPageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PollForDecisionTaskInput](#schemapollfordecisiontaskinput)|true|none|
|» domain|body|object|true|none|
|» taskList|body|object|true|none|
|» » name|body|object|true|none|
|» identity|body|object|false|none|
|» nextPageToken|body|object|false|none|
|» maximumPageSize|body|object|false|none|
|» reverseOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.PollForDecisionTask|

> Example responses

> 200 Response

```json
{
  "taskToken": {},
  "startedEventId": {},
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "events": {},
  "nextPageToken": {},
  "previousStartedEventId": {}
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

<h3 id="pollfordecisiontask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecisionTask](#schemadecisiontask)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|
|482|482|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RecordActivityTaskHeartbeat

<a id="opIdRecordActivityTaskHeartbeat"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RecordActivityTaskHeartbeat' \
  -d '{
    "taskToken": {},
    "details": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat`

<p>Used by activity workers to report to the service that the <a>ActivityTask</a> represented by the specified <code>taskToken</code> is still making progress. The worker can also specify details of the progress, for example percent complete, using the <code>details</code> parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned by the service is set to <code>true</code>.</p> <p>This action resets the <code>taskHeartbeatTimeout</code> clock. The <code>taskHeartbeatTimeout</code> is specified in <a>RegisterActivityType</a>.</p> <p>This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a <code>ActivityTaskTimedOut</code> event that contains the information from the last heartbeat generated by the activity worker.</p> <note> <p>The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration of an activity task, regardless of the number of <a>RecordActivityTaskHeartbeat</a> requests received. The <code>taskStartToCloseTimeout</code> is also specified in <a>RegisterActivityType</a>.</p> </note> <note> <p>This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.</p> </note> <important> <p>If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is being attempted. If the worker can cancel the activity, it should respond with <a>RespondActivityTaskCanceled</a>. Otherwise, it should ignore the cancellation request.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "taskToken": {},
  "details": {}
}
```

<h3 id="recordactivitytaskheartbeat-parameters">Parameters</h3>

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
|body|body|[RecordActivityTaskHeartbeatInput](#schemarecordactivitytaskheartbeatinput)|true|none|
|» taskToken|body|object|true|none|
|» details|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RecordActivityTaskHeartbeat|

> Example responses

> 200 Response

```json
{
  "cancelRequested": {}
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

<h3 id="recordactivitytaskheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivityTaskStatus](#schemaactivitytaskstatus)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterActivityType

<a id="opIdRegisterActivityType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RegisterActivityType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RegisterActivityType' \
  -d '{
    "domain": {},
    "name": {},
    "version": {},
    "description": {},
    "defaultTaskStartToCloseTimeout": {},
    "defaultTaskHeartbeatTimeout": {},
    "defaultTaskList": {
      "name": {}
    },
    "defaultTaskPriority": {},
    "defaultTaskScheduleToStartTimeout": {},
    "defaultTaskScheduleToCloseTimeout": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RegisterActivityType`

<p>Registers a new <i>activity type</i> along with its configuration settings in the specified domain.</p> <important> <p>A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "name": {},
  "version": {},
  "description": {},
  "defaultTaskStartToCloseTimeout": {},
  "defaultTaskHeartbeatTimeout": {},
  "defaultTaskList": {
    "name": {}
  },
  "defaultTaskPriority": {},
  "defaultTaskScheduleToStartTimeout": {},
  "defaultTaskScheduleToCloseTimeout": {}
}
```

<h3 id="registeractivitytype-parameters">Parameters</h3>

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
|body|body|[RegisterActivityTypeInput](#schemaregisteractivitytypeinput)|true|none|
|» domain|body|object|true|none|
|» name|body|object|true|none|
|» version|body|object|true|none|
|» description|body|object|false|none|
|» defaultTaskStartToCloseTimeout|body|object|false|none|
|» defaultTaskHeartbeatTimeout|body|object|false|none|
|» defaultTaskList|body|object|false|none|
|» » name|body|object|true|none|
|» defaultTaskPriority|body|object|false|none|
|» defaultTaskScheduleToStartTimeout|body|object|false|none|
|» defaultTaskScheduleToCloseTimeout|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RegisterActivityType|

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

<h3 id="registeractivitytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|TypeAlreadyExistsFault|[TypeAlreadyExistsFault](#schematypealreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|483|483|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterDomain

<a id="opIdRegisterDomain"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RegisterDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RegisterDomain' \
  -d '{
    "name": {},
    "description": {},
    "workflowExecutionRetentionPeriodInDays": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RegisterDomain`

<p>Registers a new domain.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "name": {},
  "description": {},
  "workflowExecutionRetentionPeriodInDays": {},
  "tags": {}
}
```

<h3 id="registerdomain-parameters">Parameters</h3>

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
|body|body|[RegisterDomainInput](#schemaregisterdomaininput)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» workflowExecutionRetentionPeriodInDays|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RegisterDomain|

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

<h3 id="registerdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DomainAlreadyExistsFault|[DomainAlreadyExistsFault](#schemadomainalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|
|483|483|TooManyTagsFault|[TooManyTagsFault](#schematoomanytagsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterWorkflowType

<a id="opIdRegisterWorkflowType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RegisterWorkflowType' \
  -d '{
    "domain": {},
    "name": {},
    "version": {},
    "description": {},
    "defaultTaskStartToCloseTimeout": {},
    "defaultExecutionStartToCloseTimeout": {},
    "defaultTaskList": {
      "name": {}
    },
    "defaultTaskPriority": {},
    "defaultChildPolicy": {},
    "defaultLambdaRole": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType`

<p>Registers a new <i>workflow type</i> and its configuration settings in the specified domain.</p> <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p> <important> <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "name": {},
  "version": {},
  "description": {},
  "defaultTaskStartToCloseTimeout": {},
  "defaultExecutionStartToCloseTimeout": {},
  "defaultTaskList": {
    "name": {}
  },
  "defaultTaskPriority": {},
  "defaultChildPolicy": {},
  "defaultLambdaRole": {}
}
```

<h3 id="registerworkflowtype-parameters">Parameters</h3>

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
|body|body|[RegisterWorkflowTypeInput](#schemaregisterworkflowtypeinput)|true|none|
|» domain|body|object|true|none|
|» name|body|object|true|none|
|» version|body|object|true|none|
|» description|body|object|false|none|
|» defaultTaskStartToCloseTimeout|body|object|false|none|
|» defaultExecutionStartToCloseTimeout|body|object|false|none|
|» defaultTaskList|body|object|false|none|
|» » name|body|object|true|none|
|» defaultTaskPriority|body|object|false|none|
|» defaultChildPolicy|body|object|false|none|
|» defaultLambdaRole|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RegisterWorkflowType|

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

<h3 id="registerworkflowtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|TypeAlreadyExistsFault|[TypeAlreadyExistsFault](#schematypealreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|483|483|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RequestCancelWorkflowExecution

<a id="opIdRequestCancelWorkflowExecution"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RequestCancelWorkflowExecution' \
  -d '{
    "domain": {},
    "workflowId": {},
    "runId": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution`

<p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> <note> <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.</p> </note> <note> <p>Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of <a>TerminateWorkflowExecution</a> when possible.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "workflowId": {},
  "runId": {}
}
```

<h3 id="requestcancelworkflowexecution-parameters">Parameters</h3>

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
|body|body|[RequestCancelWorkflowExecutionInput](#schemarequestcancelworkflowexecutioninput)|true|none|
|» domain|body|object|true|none|
|» workflowId|body|object|true|none|
|» runId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RequestCancelWorkflowExecution|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="requestcancelworkflowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RespondActivityTaskCanceled

<a id="opIdRespondActivityTaskCanceled"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RespondActivityTaskCanceled' \
  -d '{
    "taskToken": {},
    "details": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled`

<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can be provided using the <code>details</code> argument.</p> <p>These <code>details</code> (if provided) appear in the <code>ActivityTaskCanceled</code> event added to the workflow history.</p> <important> <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the activity can be safely undone or abandoned.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "taskToken": {},
  "details": {}
}
```

<h3 id="respondactivitytaskcanceled-parameters">Parameters</h3>

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
|body|body|[RespondActivityTaskCanceledInput](#schemarespondactivitytaskcanceledinput)|true|none|
|» taskToken|body|object|true|none|
|» details|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RespondActivityTaskCanceled|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="respondactivitytaskcanceled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RespondActivityTaskCompleted

<a id="opIdRespondActivityTaskCompleted"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RespondActivityTaskCompleted' \
  -d '{
    "taskToken": {},
    "result": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted`

<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided). The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the workflow history.</p> <important> <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call <a>RespondActivityTaskCanceled</a>.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "taskToken": {},
  "result": {}
}
```

<h3 id="respondactivitytaskcompleted-parameters">Parameters</h3>

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
|body|body|[RespondActivityTaskCompletedInput](#schemarespondactivitytaskcompletedinput)|true|none|
|» taskToken|body|object|true|none|
|» result|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RespondActivityTaskCompleted|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="respondactivitytaskcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RespondActivityTaskFailed

<a id="opIdRespondActivityTaskFailed"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RespondActivityTaskFailed' \
  -d '{
    "taskToken": {},
    "reason": {},
    "details": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed`

<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code> event added to the workflow history.</p> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "taskToken": {},
  "reason": {},
  "details": {}
}
```

<h3 id="respondactivitytaskfailed-parameters">Parameters</h3>

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
|body|body|[RespondActivityTaskFailedInput](#schemarespondactivitytaskfailedinput)|true|none|
|» taskToken|body|object|true|none|
|» reason|body|object|false|none|
|» details|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RespondActivityTaskFailed|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="respondactivitytaskfailed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RespondDecisionTaskCompleted

<a id="opIdRespondDecisionTaskCompleted"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.RespondDecisionTaskCompleted' \
  -d '{
    "taskToken": {},
    "decisions": {},
    "executionContext": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted`

<p>Used by deciders to tell the service that the <a>DecisionTask</a> identified by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument specifies the list of decisions made while processing the task.</p> <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The <code>executionContext</code> specified is attached to the event in the workflow execution history.</p> <p> <b>Access Control</b> </p> <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it can express permissions for the list of decisions in the <code>decisions</code> parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "taskToken": {},
  "decisions": {},
  "executionContext": {}
}
```

<h3 id="responddecisiontaskcompleted-parameters">Parameters</h3>

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
|body|body|[RespondDecisionTaskCompletedInput](#schemaresponddecisiontaskcompletedinput)|true|none|
|» taskToken|body|object|true|none|
|» decisions|body|object|false|none|
|» executionContext|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.RespondDecisionTaskCompleted|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="responddecisiontaskcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SignalWorkflowExecution

<a id="opIdSignalWorkflowExecution"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.SignalWorkflowExecution' \
  -d '{
    "domain": {},
    "workflowId": {},
    "runId": {},
    "signalName": {},
    "input": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution`

<p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).</p> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>If the specified workflow execution isn't open, this method fails with <code>UnknownResource</code>.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "workflowId": {},
  "runId": {},
  "signalName": {},
  "input": {}
}
```

<h3 id="signalworkflowexecution-parameters">Parameters</h3>

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
|body|body|[SignalWorkflowExecutionInput](#schemasignalworkflowexecutioninput)|true|none|
|» domain|body|object|true|none|
|» workflowId|body|object|true|none|
|» runId|body|object|false|none|
|» signalName|body|object|true|none|
|» input|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.SignalWorkflowExecution|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="signalworkflowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartWorkflowExecution

<a id="opIdStartWorkflowExecution"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.StartWorkflowExecution' \
  -d '{
    "domain": {},
    "workflowId": {},
    "workflowType": {
      "name": {},
      "version": {}
    },
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "input": {},
    "executionStartToCloseTimeout": {},
    "tagList": {},
    "taskStartToCloseTimeout": {},
    "childPolicy": {},
    "lambdaRole": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution`

<p>Starts an execution of the workflow type in the specified domain using the provided <code>workflowId</code> and input data.</p> <p>This action returns the newly started workflow execution.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p> </li> <li> <p> <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p> </li> <li> <p> <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p> </li> <li> <p> <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p> </li> <li> <p> <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p> </li> <li> <p> <code>taskList</code>: String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "workflowId": {},
  "workflowType": {
    "name": {},
    "version": {}
  },
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "input": {},
  "executionStartToCloseTimeout": {},
  "tagList": {},
  "taskStartToCloseTimeout": {},
  "childPolicy": {},
  "lambdaRole": {}
}
```

<h3 id="startworkflowexecution-parameters">Parameters</h3>

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
|body|body|[StartWorkflowExecutionInput](#schemastartworkflowexecutioninput)|true|none|
|» domain|body|object|true|none|
|» workflowId|body|object|true|none|
|» workflowType|body|object|true|none|
|» » name|body|object|true|none|
|» » version|body|object|true|none|
|» taskList|body|object|false|none|
|» » name|body|object|true|none|
|» taskPriority|body|object|false|none|
|» input|body|object|false|none|
|» executionStartToCloseTimeout|body|object|false|none|
|» tagList|body|object|false|none|
|» taskStartToCloseTimeout|body|object|false|none|
|» childPolicy|body|object|false|none|
|» lambdaRole|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.StartWorkflowExecution|

> Example responses

> 200 Response

```json
{
  "runId": {}
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

<h3 id="startworkflowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Run](#schemarun)|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|TypeDeprecatedFault|[TypeDeprecatedFault](#schematypedeprecatedfault)|
|482|482|WorkflowExecutionAlreadyStartedFault|[WorkflowExecutionAlreadyStartedFault](#schemaworkflowexecutionalreadystartedfault)|
|483|483|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|484|484|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|
|485|485|DefaultUndefinedFault|[DefaultUndefinedFault](#schemadefaultundefinedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.TagResource`

<p>Add a tag to a Amazon SWF domain.</p> <note> <p>Amazon SWF supports a maximum of 50 tags per resource.</p> </note>

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
|X-Amz-Target|SimpleWorkflowService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|TooManyTagsFault|[TooManyTagsFault](#schematoomanytagsfault)|
|482|482|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|483|483|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateWorkflowExecution

<a id="opIdTerminateWorkflowExecution"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.TerminateWorkflowExecution' \
  -d '{
    "domain": {},
    "workflowId": {},
    "runId": {},
    "reason": {},
    "details": {},
    "childPolicy": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution`

<p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.</p> <important> <p>If the identified workflow execution was in progress, it is terminated immediately.</p> </important> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>You should consider using <a>RequestCancelWorkflowExecution</a> action instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "workflowId": {},
  "runId": {},
  "reason": {},
  "details": {},
  "childPolicy": {}
}
```

<h3 id="terminateworkflowexecution-parameters">Parameters</h3>

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
|body|body|[TerminateWorkflowExecutionInput](#schematerminateworkflowexecutioninput)|true|none|
|» domain|body|object|true|none|
|» workflowId|body|object|true|none|
|» runId|body|object|false|none|
|» reason|body|object|false|none|
|» details|body|object|false|none|
|» childPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.TerminateWorkflowExecution|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="terminateworkflowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UndeprecateActivityType

<a id="opIdUndeprecateActivityType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.UndeprecateActivityType' \
  -d '{
    "domain": {},
    "activityType": {
      "name": {},
      "version": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType`

<p>Undeprecates a previously deprecated <i>activity type</i>. After an activity type has been undeprecated, you can create new tasks of that activity type.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "activityType": {
    "name": {},
    "version": {}
  }
}
```

<h3 id="undeprecateactivitytype-parameters">Parameters</h3>

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
|body|body|[UndeprecateActivityTypeInput](#schemaundeprecateactivitytypeinput)|true|none|
|» domain|body|object|true|none|
|» activityType|body|object|true|none|
|» » name|body|object|true|none|
|» » version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.UndeprecateActivityType|

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

<h3 id="undeprecateactivitytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|TypeAlreadyExistsFault|[TypeAlreadyExistsFault](#schematypealreadyexistsfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UndeprecateDomain

<a id="opIdUndeprecateDomain"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.UndeprecateDomain' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain`

<p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="undeprecatedomain-parameters">Parameters</h3>

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
|body|body|[UndeprecateDomainInput](#schemaundeprecatedomaininput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.UndeprecateDomain|

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

<h3 id="undeprecatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|DomainAlreadyExistsFault|[DomainAlreadyExistsFault](#schemadomainalreadyexistsfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UndeprecateWorkflowType

<a id="opIdUndeprecateWorkflowType"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.UndeprecateWorkflowType' \
  -d '{
    "domain": {},
    "workflowType": {
      "name": {},
      "version": {}
    }
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType`

<p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has been undeprecated, you can create new executions of that type. </p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

> Body parameter

```json
{
  "domain": {},
  "workflowType": {
    "name": {},
    "version": {}
  }
}
```

<h3 id="undeprecateworkflowtype-parameters">Parameters</h3>

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
|body|body|[UndeprecateWorkflowTypeInput](#schemaundeprecateworkflowtypeinput)|true|none|
|» domain|body|object|true|none|
|» workflowType|body|object|true|none|
|» » name|body|object|true|none|
|» » version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SimpleWorkflowService.UndeprecateWorkflowType|

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

<h3 id="undeprecateworkflowtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|TypeAlreadyExistsFault|[TypeAlreadyExistsFault](#schematypealreadyexistsfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://swf.us-east-1.amazonaws.com/#X-Amz-Target=SimpleWorkflowService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SimpleWorkflowService.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=SimpleWorkflowService.UntagResource`

Remove a tag from a Amazon SWF domain.

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
|X-Amz-Target|SimpleWorkflowService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnknownResourceFault|[UnknownResourceFault](#schemaunknownresourcefault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|OperationNotPermittedFault|[OperationNotPermittedFault](#schemaoperationnotpermittedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_WorkflowExecutionCount">WorkflowExecutionCount</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncount"></a>
<a id="schema_WorkflowExecutionCount"></a>
<a id="tocSworkflowexecutioncount"></a>
<a id="tocsworkflowexecutioncount"></a>

```json
{
  "count": {},
  "truncated": {}
}
```

Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|true|none|none|
|truncated|object|false|none|none|

<h2 id="tocS_CountClosedWorkflowExecutionsInput">CountClosedWorkflowExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemacountclosedworkflowexecutionsinput"></a>
<a id="schema_CountClosedWorkflowExecutionsInput"></a>
<a id="tocScountclosedworkflowexecutionsinput"></a>
<a id="tocscountclosedworkflowexecutionsinput"></a>

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "closeTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "executionFilter": {
    "workflowId": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "closeStatusFilter": {
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|startTimeFilter|object|false|none|none|
|closeTimeFilter|object|false|none|none|
|executionFilter|object|false|none|none|
|typeFilter|object|false|none|none|
|tagFilter|object|false|none|none|
|closeStatusFilter|object|false|none|none|

<h2 id="tocS_UnknownResourceFault">UnknownResourceFault</h2>
<!-- backwards compatibility -->
<a id="schemaunknownresourcefault"></a>
<a id="schema_UnknownResourceFault"></a>
<a id="tocSunknownresourcefault"></a>
<a id="tocsunknownresourcefault"></a>

```json
null
```

<h2 id="tocS_OperationNotPermittedFault">OperationNotPermittedFault</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotpermittedfault"></a>
<a id="schema_OperationNotPermittedFault"></a>
<a id="tocSoperationnotpermittedfault"></a>
<a id="tocsoperationnotpermittedfault"></a>

```json
null
```

<h2 id="tocS_CountOpenWorkflowExecutionsInput">CountOpenWorkflowExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemacountopenworkflowexecutionsinput"></a>
<a id="schema_CountOpenWorkflowExecutionsInput"></a>
<a id="tocScountopenworkflowexecutionsinput"></a>
<a id="tocscountopenworkflowexecutionsinput"></a>

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "executionFilter": {
    "workflowId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|startTimeFilter|object|true|none|none|
|typeFilter|object|false|none|none|
|tagFilter|object|false|none|none|
|executionFilter|object|false|none|none|

<h2 id="tocS_PendingTaskCount">PendingTaskCount</h2>
<!-- backwards compatibility -->
<a id="schemapendingtaskcount"></a>
<a id="schema_PendingTaskCount"></a>
<a id="tocSpendingtaskcount"></a>
<a id="tocspendingtaskcount"></a>

```json
{
  "count": {},
  "truncated": {}
}
```

Contains the count of tasks in a task list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|true|none|none|
|truncated|object|false|none|none|

<h2 id="tocS_CountPendingActivityTasksInput">CountPendingActivityTasksInput</h2>
<!-- backwards compatibility -->
<a id="schemacountpendingactivitytasksinput"></a>
<a id="schema_CountPendingActivityTasksInput"></a>
<a id="tocScountpendingactivitytasksinput"></a>
<a id="tocscountpendingactivitytasksinput"></a>

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|taskList|object|true|none|none|

<h2 id="tocS_CountPendingDecisionTasksInput">CountPendingDecisionTasksInput</h2>
<!-- backwards compatibility -->
<a id="schemacountpendingdecisiontasksinput"></a>
<a id="schema_CountPendingDecisionTasksInput"></a>
<a id="tocScountpendingdecisiontasksinput"></a>
<a id="tocscountpendingdecisiontasksinput"></a>

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|taskList|object|true|none|none|

<h2 id="tocS_DeprecateActivityTypeInput">DeprecateActivityTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeprecateactivitytypeinput"></a>
<a id="schema_DeprecateActivityTypeInput"></a>
<a id="tocSdeprecateactivitytypeinput"></a>
<a id="tocsdeprecateactivitytypeinput"></a>

```json
{
  "domain": {},
  "activityType": {
    "name": {},
    "version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|activityType|object|true|none|none|

<h2 id="tocS_TypeDeprecatedFault">TypeDeprecatedFault</h2>
<!-- backwards compatibility -->
<a id="schematypedeprecatedfault"></a>
<a id="schema_TypeDeprecatedFault"></a>
<a id="tocStypedeprecatedfault"></a>
<a id="tocstypedeprecatedfault"></a>

```json
null
```

<h2 id="tocS_DeprecateDomainInput">DeprecateDomainInput</h2>
<!-- backwards compatibility -->
<a id="schemadeprecatedomaininput"></a>
<a id="schema_DeprecateDomainInput"></a>
<a id="tocSdeprecatedomaininput"></a>
<a id="tocsdeprecatedomaininput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DomainDeprecatedFault">DomainDeprecatedFault</h2>
<!-- backwards compatibility -->
<a id="schemadomaindeprecatedfault"></a>
<a id="schema_DomainDeprecatedFault"></a>
<a id="tocSdomaindeprecatedfault"></a>
<a id="tocsdomaindeprecatedfault"></a>

```json
null
```

<h2 id="tocS_DeprecateWorkflowTypeInput">DeprecateWorkflowTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeprecateworkflowtypeinput"></a>
<a id="schema_DeprecateWorkflowTypeInput"></a>
<a id="tocSdeprecateworkflowtypeinput"></a>
<a id="tocsdeprecateworkflowtypeinput"></a>

```json
{
  "domain": {},
  "workflowType": {
    "name": {},
    "version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|workflowType|object|true|none|none|

<h2 id="tocS_ActivityTypeDetail">ActivityTypeDetail</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytypedetail"></a>
<a id="schema_ActivityTypeDetail"></a>
<a id="tocSactivitytypedetail"></a>
<a id="tocsactivitytypedetail"></a>

```json
{
  "typeInfo": {
    "activityType": {
      "name": {},
      "version": {}
    },
    "status": {},
    "description": {},
    "creationDate": {},
    "deprecationDate": {}
  },
  "configuration": {
    "defaultTaskStartToCloseTimeout": {},
    "defaultTaskHeartbeatTimeout": {},
    "defaultTaskList": {
      "name": {}
    },
    "defaultTaskPriority": {},
    "defaultTaskScheduleToStartTimeout": {},
    "defaultTaskScheduleToCloseTimeout": {}
  }
}
```

Detailed information about an activity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeInfo|object|true|none|none|
|configuration|object|true|none|none|

<h2 id="tocS_DescribeActivityTypeInput">DescribeActivityTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivitytypeinput"></a>
<a id="schema_DescribeActivityTypeInput"></a>
<a id="tocSdescribeactivitytypeinput"></a>
<a id="tocsdescribeactivitytypeinput"></a>

```json
{
  "domain": {},
  "activityType": {
    "name": {},
    "version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|activityType|object|true|none|none|

<h2 id="tocS_DomainDetail">DomainDetail</h2>
<!-- backwards compatibility -->
<a id="schemadomaindetail"></a>
<a id="schema_DomainDetail"></a>
<a id="tocSdomaindetail"></a>
<a id="tocsdomaindetail"></a>

```json
{
  "domainInfo": {
    "name": {},
    "status": {},
    "description": {},
    "arn": {}
  },
  "configuration": {
    "workflowExecutionRetentionPeriodInDays": {}
  }
}
```

Contains details of a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainInfo|object|true|none|none|
|configuration|object|true|none|none|

<h2 id="tocS_DescribeDomainInput">DescribeDomainInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomaininput"></a>
<a id="schema_DescribeDomainInput"></a>
<a id="tocSdescribedomaininput"></a>
<a id="tocsdescribedomaininput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_WorkflowExecutionDetail">WorkflowExecutionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiondetail"></a>
<a id="schema_WorkflowExecutionDetail"></a>
<a id="tocSworkflowexecutiondetail"></a>
<a id="tocsworkflowexecutiondetail"></a>

```json
{
  "executionInfo": {
    "execution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "startTimestamp": {},
    "closeTimestamp": {},
    "executionStatus": {},
    "closeStatus": {},
    "parent": {
      "workflowId": {},
      "runId": {}
    },
    "tagList": {},
    "cancelRequested": {}
  },
  "executionConfiguration": {
    "taskStartToCloseTimeout": {},
    "executionStartToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "childPolicy": {},
    "lambdaRole": {}
  },
  "openCounts": {
    "openActivityTasks": {},
    "openDecisionTasks": {},
    "openTimers": {},
    "openChildWorkflowExecutions": {},
    "openLambdaFunctions": {}
  },
  "latestActivityTaskTimestamp": {},
  "latestExecutionContext": {}
}
```

Contains details about a workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionInfo|object|true|none|none|
|executionConfiguration|object|true|none|none|
|openCounts|object|true|none|none|
|latestActivityTaskTimestamp|object|false|none|none|
|latestExecutionContext|object|false|none|none|

<h2 id="tocS_DescribeWorkflowExecutionInput">DescribeWorkflowExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkflowexecutioninput"></a>
<a id="schema_DescribeWorkflowExecutionInput"></a>
<a id="tocSdescribeworkflowexecutioninput"></a>
<a id="tocsdescribeworkflowexecutioninput"></a>

```json
{
  "domain": {},
  "execution": {
    "workflowId": {},
    "runId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|execution|object|true|none|none|

<h2 id="tocS_WorkflowTypeDetail">WorkflowTypeDetail</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtypedetail"></a>
<a id="schema_WorkflowTypeDetail"></a>
<a id="tocSworkflowtypedetail"></a>
<a id="tocsworkflowtypedetail"></a>

```json
{
  "typeInfo": {
    "workflowType": {
      "name": {},
      "version": {}
    },
    "status": {},
    "description": {},
    "creationDate": {},
    "deprecationDate": {}
  },
  "configuration": {
    "defaultTaskStartToCloseTimeout": {},
    "defaultExecutionStartToCloseTimeout": {},
    "defaultTaskList": {
      "name": {}
    },
    "defaultTaskPriority": {},
    "defaultChildPolicy": {},
    "defaultLambdaRole": {}
  }
}
```

Contains details about a workflow type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeInfo|object|true|none|none|
|configuration|object|true|none|none|

<h2 id="tocS_DescribeWorkflowTypeInput">DescribeWorkflowTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkflowtypeinput"></a>
<a id="schema_DescribeWorkflowTypeInput"></a>
<a id="tocSdescribeworkflowtypeinput"></a>
<a id="tocsdescribeworkflowtypeinput"></a>

```json
{
  "domain": {},
  "workflowType": {
    "name": {},
    "version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|workflowType|object|true|none|none|

<h2 id="tocS_History">History</h2>
<!-- backwards compatibility -->
<a id="schemahistory"></a>
<a id="schema_History"></a>
<a id="tocShistory"></a>
<a id="tocshistory"></a>

```json
{
  "events": {},
  "nextPageToken": {}
}
```

Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|true|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_GetWorkflowExecutionHistoryInput">GetWorkflowExecutionHistoryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowexecutionhistoryinput"></a>
<a id="schema_GetWorkflowExecutionHistoryInput"></a>
<a id="tocSgetworkflowexecutionhistoryinput"></a>
<a id="tocsgetworkflowexecutionhistoryinput"></a>

```json
{
  "domain": {},
  "execution": {
    "workflowId": {},
    "runId": {}
  },
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|execution|object|true|none|none|
|nextPageToken|object|false|none|none|
|maximumPageSize|object|false|none|none|
|reverseOrder|object|false|none|none|

<h2 id="tocS_ActivityTypeInfos">ActivityTypeInfos</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytypeinfos"></a>
<a id="schema_ActivityTypeInfos"></a>
<a id="tocSactivitytypeinfos"></a>
<a id="tocsactivitytypeinfos"></a>

```json
{
  "typeInfos": {},
  "nextPageToken": {}
}
```

Contains a paginated list of activity type information structures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeInfos|object|true|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_ListActivityTypesInput">ListActivityTypesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistactivitytypesinput"></a>
<a id="schema_ListActivityTypesInput"></a>
<a id="tocSlistactivitytypesinput"></a>
<a id="tocslistactivitytypesinput"></a>

```json
{
  "domain": {},
  "name": {},
  "registrationStatus": {},
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|name|object|false|none|none|
|registrationStatus|object|true|none|none|
|nextPageToken|object|false|none|none|
|maximumPageSize|object|false|none|none|
|reverseOrder|object|false|none|none|

<h2 id="tocS_WorkflowExecutionInfos">WorkflowExecutionInfos</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioninfos"></a>
<a id="schema_WorkflowExecutionInfos"></a>
<a id="tocSworkflowexecutioninfos"></a>
<a id="tocsworkflowexecutioninfos"></a>

```json
{
  "executionInfos": {},
  "nextPageToken": {}
}
```

Contains a paginated list of information about workflow executions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionInfos|object|true|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_ListClosedWorkflowExecutionsInput">ListClosedWorkflowExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistclosedworkflowexecutionsinput"></a>
<a id="schema_ListClosedWorkflowExecutionsInput"></a>
<a id="tocSlistclosedworkflowexecutionsinput"></a>
<a id="tocslistclosedworkflowexecutionsinput"></a>

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "closeTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "executionFilter": {
    "workflowId": {}
  },
  "closeStatusFilter": {
    "status": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|startTimeFilter|object|false|none|none|
|closeTimeFilter|object|false|none|none|
|executionFilter|object|false|none|none|
|closeStatusFilter|object|false|none|none|
|typeFilter|object|false|none|none|
|tagFilter|object|false|none|none|
|nextPageToken|object|false|none|none|
|maximumPageSize|object|false|none|none|
|reverseOrder|object|false|none|none|

<h2 id="tocS_DomainInfos">DomainInfos</h2>
<!-- backwards compatibility -->
<a id="schemadomaininfos"></a>
<a id="schema_DomainInfos"></a>
<a id="tocSdomaininfos"></a>
<a id="tocsdomaininfos"></a>

```json
{
  "domainInfos": {},
  "nextPageToken": {}
}
```

Contains a paginated collection of DomainInfo structures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainInfos|object|true|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_ListDomainsInput">ListDomainsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsinput"></a>
<a id="schema_ListDomainsInput"></a>
<a id="tocSlistdomainsinput"></a>
<a id="tocslistdomainsinput"></a>

```json
{
  "nextPageToken": {},
  "registrationStatus": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|object|false|none|none|
|registrationStatus|object|true|none|none|
|maximumPageSize|object|false|none|none|
|reverseOrder|object|false|none|none|

<h2 id="tocS_ListOpenWorkflowExecutionsInput">ListOpenWorkflowExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistopenworkflowexecutionsinput"></a>
<a id="schema_ListOpenWorkflowExecutionsInput"></a>
<a id="tocSlistopenworkflowexecutionsinput"></a>
<a id="tocslistopenworkflowexecutionsinput"></a>

```json
{
  "domain": {},
  "startTimeFilter": {
    "oldestDate": {},
    "latestDate": {}
  },
  "typeFilter": {
    "name": {},
    "version": {}
  },
  "tagFilter": {
    "tag": {}
  },
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {},
  "executionFilter": {
    "workflowId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|startTimeFilter|object|true|none|none|
|typeFilter|object|false|none|none|
|tagFilter|object|false|none|none|
|nextPageToken|object|false|none|none|
|maximumPageSize|object|false|none|none|
|reverseOrder|object|false|none|none|
|executionFilter|object|false|none|none|

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

<h2 id="tocS_LimitExceededFault">LimitExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededfault"></a>
<a id="schema_LimitExceededFault"></a>
<a id="tocSlimitexceededfault"></a>
<a id="tocslimitexceededfault"></a>

```json
null
```

<h2 id="tocS_WorkflowTypeInfos">WorkflowTypeInfos</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtypeinfos"></a>
<a id="schema_WorkflowTypeInfos"></a>
<a id="tocSworkflowtypeinfos"></a>
<a id="tocsworkflowtypeinfos"></a>

```json
{
  "typeInfos": {},
  "nextPageToken": {}
}
```

Contains a paginated list of information structures about workflow types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeInfos|object|true|none|none|
|nextPageToken|object|false|none|none|

<h2 id="tocS_ListWorkflowTypesInput">ListWorkflowTypesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowtypesinput"></a>
<a id="schema_ListWorkflowTypesInput"></a>
<a id="tocSlistworkflowtypesinput"></a>
<a id="tocslistworkflowtypesinput"></a>

```json
{
  "domain": {},
  "name": {},
  "registrationStatus": {},
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|name|object|false|none|none|
|registrationStatus|object|true|none|none|
|nextPageToken|object|false|none|none|
|maximumPageSize|object|false|none|none|
|reverseOrder|object|false|none|none|

<h2 id="tocS_ActivityTask">ActivityTask</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytask"></a>
<a id="schema_ActivityTask"></a>
<a id="tocSactivitytask"></a>
<a id="tocsactivitytask"></a>

```json
{
  "taskToken": {},
  "activityId": {},
  "startedEventId": {},
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "activityType": {
    "name": {},
    "version": {}
  },
  "input": {}
}
```

Unit of work sent to an activity worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|activityId|object|true|none|none|
|startedEventId|object|true|none|none|
|workflowExecution|object|true|none|none|
|activityType|object|true|none|none|
|input|object|false|none|none|

<h2 id="tocS_PollForActivityTaskInput">PollForActivityTaskInput</h2>
<!-- backwards compatibility -->
<a id="schemapollforactivitytaskinput"></a>
<a id="schema_PollForActivityTaskInput"></a>
<a id="tocSpollforactivitytaskinput"></a>
<a id="tocspollforactivitytaskinput"></a>

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  },
  "identity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|taskList|object|true|none|none|
|identity|object|false|none|none|

<h2 id="tocS_DecisionTask">DecisionTask</h2>
<!-- backwards compatibility -->
<a id="schemadecisiontask"></a>
<a id="schema_DecisionTask"></a>
<a id="tocSdecisiontask"></a>
<a id="tocsdecisiontask"></a>

```json
{
  "taskToken": {},
  "startedEventId": {},
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "events": {},
  "nextPageToken": {},
  "previousStartedEventId": {}
}
```

A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|startedEventId|object|true|none|none|
|workflowExecution|object|true|none|none|
|workflowType|object|true|none|none|
|events|object|true|none|none|
|nextPageToken|object|false|none|none|
|previousStartedEventId|object|false|none|none|

<h2 id="tocS_PollForDecisionTaskInput">PollForDecisionTaskInput</h2>
<!-- backwards compatibility -->
<a id="schemapollfordecisiontaskinput"></a>
<a id="schema_PollForDecisionTaskInput"></a>
<a id="tocSpollfordecisiontaskinput"></a>
<a id="tocspollfordecisiontaskinput"></a>

```json
{
  "domain": {},
  "taskList": {
    "name": {}
  },
  "identity": {},
  "nextPageToken": {},
  "maximumPageSize": {},
  "reverseOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|taskList|object|true|none|none|
|identity|object|false|none|none|
|nextPageToken|object|false|none|none|
|maximumPageSize|object|false|none|none|
|reverseOrder|object|false|none|none|

<h2 id="tocS_ActivityTaskStatus">ActivityTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskstatus"></a>
<a id="schema_ActivityTaskStatus"></a>
<a id="tocSactivitytaskstatus"></a>
<a id="tocsactivitytaskstatus"></a>

```json
{
  "cancelRequested": {}
}
```

Status information about an activity task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelRequested|object|true|none|none|

<h2 id="tocS_RecordActivityTaskHeartbeatInput">RecordActivityTaskHeartbeatInput</h2>
<!-- backwards compatibility -->
<a id="schemarecordactivitytaskheartbeatinput"></a>
<a id="schema_RecordActivityTaskHeartbeatInput"></a>
<a id="tocSrecordactivitytaskheartbeatinput"></a>
<a id="tocsrecordactivitytaskheartbeatinput"></a>

```json
{
  "taskToken": {},
  "details": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|details|object|false|none|none|

<h2 id="tocS_RegisterActivityTypeInput">RegisterActivityTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisteractivitytypeinput"></a>
<a id="schema_RegisterActivityTypeInput"></a>
<a id="tocSregisteractivitytypeinput"></a>
<a id="tocsregisteractivitytypeinput"></a>

```json
{
  "domain": {},
  "name": {},
  "version": {},
  "description": {},
  "defaultTaskStartToCloseTimeout": {},
  "defaultTaskHeartbeatTimeout": {},
  "defaultTaskList": {
    "name": {}
  },
  "defaultTaskPriority": {},
  "defaultTaskScheduleToStartTimeout": {},
  "defaultTaskScheduleToCloseTimeout": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|name|object|true|none|none|
|version|object|true|none|none|
|description|object|false|none|none|
|defaultTaskStartToCloseTimeout|object|false|none|none|
|defaultTaskHeartbeatTimeout|object|false|none|none|
|defaultTaskList|object|false|none|none|
|defaultTaskPriority|object|false|none|none|
|defaultTaskScheduleToStartTimeout|object|false|none|none|
|defaultTaskScheduleToCloseTimeout|object|false|none|none|

<h2 id="tocS_TypeAlreadyExistsFault">TypeAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schematypealreadyexistsfault"></a>
<a id="schema_TypeAlreadyExistsFault"></a>
<a id="tocStypealreadyexistsfault"></a>
<a id="tocstypealreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_RegisterDomainInput">RegisterDomainInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdomaininput"></a>
<a id="schema_RegisterDomainInput"></a>
<a id="tocSregisterdomaininput"></a>
<a id="tocsregisterdomaininput"></a>

```json
{
  "name": {},
  "description": {},
  "workflowExecutionRetentionPeriodInDays": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|workflowExecutionRetentionPeriodInDays|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DomainAlreadyExistsFault">DomainAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadomainalreadyexistsfault"></a>
<a id="schema_DomainAlreadyExistsFault"></a>
<a id="tocSdomainalreadyexistsfault"></a>
<a id="tocsdomainalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_TooManyTagsFault">TooManyTagsFault</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsfault"></a>
<a id="schema_TooManyTagsFault"></a>
<a id="tocStoomanytagsfault"></a>
<a id="tocstoomanytagsfault"></a>

```json
null
```

<h2 id="tocS_RegisterWorkflowTypeInput">RegisterWorkflowTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterworkflowtypeinput"></a>
<a id="schema_RegisterWorkflowTypeInput"></a>
<a id="tocSregisterworkflowtypeinput"></a>
<a id="tocsregisterworkflowtypeinput"></a>

```json
{
  "domain": {},
  "name": {},
  "version": {},
  "description": {},
  "defaultTaskStartToCloseTimeout": {},
  "defaultExecutionStartToCloseTimeout": {},
  "defaultTaskList": {
    "name": {}
  },
  "defaultTaskPriority": {},
  "defaultChildPolicy": {},
  "defaultLambdaRole": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|name|object|true|none|none|
|version|object|true|none|none|
|description|object|false|none|none|
|defaultTaskStartToCloseTimeout|object|false|none|none|
|defaultExecutionStartToCloseTimeout|object|false|none|none|
|defaultTaskList|object|false|none|none|
|defaultTaskPriority|object|false|none|none|
|defaultChildPolicy|object|false|none|none|
|defaultLambdaRole|object|false|none|none|

<h2 id="tocS_RequestCancelWorkflowExecutionInput">RequestCancelWorkflowExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelworkflowexecutioninput"></a>
<a id="schema_RequestCancelWorkflowExecutionInput"></a>
<a id="tocSrequestcancelworkflowexecutioninput"></a>
<a id="tocsrequestcancelworkflowexecutioninput"></a>

```json
{
  "domain": {},
  "workflowId": {},
  "runId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|workflowId|object|true|none|none|
|runId|object|false|none|none|

<h2 id="tocS_RespondActivityTaskCanceledInput">RespondActivityTaskCanceledInput</h2>
<!-- backwards compatibility -->
<a id="schemarespondactivitytaskcanceledinput"></a>
<a id="schema_RespondActivityTaskCanceledInput"></a>
<a id="tocSrespondactivitytaskcanceledinput"></a>
<a id="tocsrespondactivitytaskcanceledinput"></a>

```json
{
  "taskToken": {},
  "details": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|details|object|false|none|none|

<h2 id="tocS_RespondActivityTaskCompletedInput">RespondActivityTaskCompletedInput</h2>
<!-- backwards compatibility -->
<a id="schemarespondactivitytaskcompletedinput"></a>
<a id="schema_RespondActivityTaskCompletedInput"></a>
<a id="tocSrespondactivitytaskcompletedinput"></a>
<a id="tocsrespondactivitytaskcompletedinput"></a>

```json
{
  "taskToken": {},
  "result": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|result|object|false|none|none|

<h2 id="tocS_RespondActivityTaskFailedInput">RespondActivityTaskFailedInput</h2>
<!-- backwards compatibility -->
<a id="schemarespondactivitytaskfailedinput"></a>
<a id="schema_RespondActivityTaskFailedInput"></a>
<a id="tocSrespondactivitytaskfailedinput"></a>
<a id="tocsrespondactivitytaskfailedinput"></a>

```json
{
  "taskToken": {},
  "reason": {},
  "details": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|reason|object|false|none|none|
|details|object|false|none|none|

<h2 id="tocS_RespondDecisionTaskCompletedInput">RespondDecisionTaskCompletedInput</h2>
<!-- backwards compatibility -->
<a id="schemaresponddecisiontaskcompletedinput"></a>
<a id="schema_RespondDecisionTaskCompletedInput"></a>
<a id="tocSresponddecisiontaskcompletedinput"></a>
<a id="tocsresponddecisiontaskcompletedinput"></a>

```json
{
  "taskToken": {},
  "decisions": {},
  "executionContext": {}
}
```

Input data for a TaskCompleted response to a decision task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskToken|object|true|none|none|
|decisions|object|false|none|none|
|executionContext|object|false|none|none|

<h2 id="tocS_SignalWorkflowExecutionInput">SignalWorkflowExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemasignalworkflowexecutioninput"></a>
<a id="schema_SignalWorkflowExecutionInput"></a>
<a id="tocSsignalworkflowexecutioninput"></a>
<a id="tocssignalworkflowexecutioninput"></a>

```json
{
  "domain": {},
  "workflowId": {},
  "runId": {},
  "signalName": {},
  "input": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|signalName|object|true|none|none|
|input|object|false|none|none|

<h2 id="tocS_Run">Run</h2>
<!-- backwards compatibility -->
<a id="schemarun"></a>
<a id="schema_Run"></a>
<a id="tocSrun"></a>
<a id="tocsrun"></a>

```json
{
  "runId": {}
}
```

Specifies the <code>runId</code> of a workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runId|object|false|none|none|

<h2 id="tocS_StartWorkflowExecutionInput">StartWorkflowExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartworkflowexecutioninput"></a>
<a id="schema_StartWorkflowExecutionInput"></a>
<a id="tocSstartworkflowexecutioninput"></a>
<a id="tocsstartworkflowexecutioninput"></a>

```json
{
  "domain": {},
  "workflowId": {},
  "workflowType": {
    "name": {},
    "version": {}
  },
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "input": {},
  "executionStartToCloseTimeout": {},
  "tagList": {},
  "taskStartToCloseTimeout": {},
  "childPolicy": {},
  "lambdaRole": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|workflowId|object|true|none|none|
|workflowType|object|true|none|none|
|taskList|object|false|none|none|
|taskPriority|object|false|none|none|
|input|object|false|none|none|
|executionStartToCloseTimeout|object|false|none|none|
|tagList|object|false|none|none|
|taskStartToCloseTimeout|object|false|none|none|
|childPolicy|object|false|none|none|
|lambdaRole|object|false|none|none|

<h2 id="tocS_WorkflowExecutionAlreadyStartedFault">WorkflowExecutionAlreadyStartedFault</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionalreadystartedfault"></a>
<a id="schema_WorkflowExecutionAlreadyStartedFault"></a>
<a id="tocSworkflowexecutionalreadystartedfault"></a>
<a id="tocsworkflowexecutionalreadystartedfault"></a>

```json
null
```

<h2 id="tocS_DefaultUndefinedFault">DefaultUndefinedFault</h2>
<!-- backwards compatibility -->
<a id="schemadefaultundefinedfault"></a>
<a id="schema_DefaultUndefinedFault"></a>
<a id="tocSdefaultundefinedfault"></a>
<a id="tocsdefaultundefinedfault"></a>

```json
null
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

<h2 id="tocS_TerminateWorkflowExecutionInput">TerminateWorkflowExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schematerminateworkflowexecutioninput"></a>
<a id="schema_TerminateWorkflowExecutionInput"></a>
<a id="tocSterminateworkflowexecutioninput"></a>
<a id="tocsterminateworkflowexecutioninput"></a>

```json
{
  "domain": {},
  "workflowId": {},
  "runId": {},
  "reason": {},
  "details": {},
  "childPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|reason|object|false|none|none|
|details|object|false|none|none|
|childPolicy|object|false|none|none|

<h2 id="tocS_UndeprecateActivityTypeInput">UndeprecateActivityTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaundeprecateactivitytypeinput"></a>
<a id="schema_UndeprecateActivityTypeInput"></a>
<a id="tocSundeprecateactivitytypeinput"></a>
<a id="tocsundeprecateactivitytypeinput"></a>

```json
{
  "domain": {},
  "activityType": {
    "name": {},
    "version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|activityType|object|true|none|none|

<h2 id="tocS_UndeprecateDomainInput">UndeprecateDomainInput</h2>
<!-- backwards compatibility -->
<a id="schemaundeprecatedomaininput"></a>
<a id="schema_UndeprecateDomainInput"></a>
<a id="tocSundeprecatedomaininput"></a>
<a id="tocsundeprecatedomaininput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_UndeprecateWorkflowTypeInput">UndeprecateWorkflowTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaundeprecateworkflowtypeinput"></a>
<a id="schema_UndeprecateWorkflowTypeInput"></a>
<a id="tocSundeprecateworkflowtypeinput"></a>
<a id="tocsundeprecateworkflowtypeinput"></a>

```json
{
  "domain": {},
  "workflowType": {
    "name": {},
    "version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|workflowType|object|true|none|none|

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

<h2 id="tocS_ActivityId">ActivityId</h2>
<!-- backwards compatibility -->
<a id="schemaactivityid"></a>
<a id="schema_ActivityId"></a>
<a id="tocSactivityid"></a>
<a id="tocsactivityid"></a>

```json
"string"
```

<h2 id="tocS_TaskToken">TaskToken</h2>
<!-- backwards compatibility -->
<a id="schematasktoken"></a>
<a id="schema_TaskToken"></a>
<a id="tocStasktoken"></a>
<a id="tocstasktoken"></a>

```json
"string"
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

<h2 id="tocS_WorkflowExecution">WorkflowExecution</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecution"></a>
<a id="schema_WorkflowExecution"></a>
<a id="tocSworkflowexecution"></a>
<a id="tocsworkflowexecution"></a>

```json
{
  "workflowId": {},
  "runId": {}
}
```

Represents a workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|runId|object|true|none|none|

<h2 id="tocS_ActivityType">ActivityType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytype"></a>
<a id="schema_ActivityType"></a>
<a id="tocSactivitytype"></a>
<a id="tocsactivitytype"></a>

```json
{
  "name": {},
  "version": {}
}
```

Represents an activity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
"string"
```

<h2 id="tocS_ActivityTaskCancelRequestedEventAttributes">ActivityTaskCancelRequestedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskcancelrequestedeventattributes"></a>
<a id="schema_ActivityTaskCancelRequestedEventAttributes"></a>
<a id="tocSactivitytaskcancelrequestedeventattributes"></a>
<a id="tocsactivitytaskcancelrequestedeventattributes"></a>

```json
{
  "decisionTaskCompletedEventId": {},
  "activityId": {}
}
```

Provides the details of the <code>ActivityTaskCancelRequested</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decisionTaskCompletedEventId|object|true|none|none|
|activityId|object|true|none|none|

<h2 id="tocS_ActivityTaskCanceledEventAttributes">ActivityTaskCanceledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskcanceledeventattributes"></a>
<a id="schema_ActivityTaskCanceledEventAttributes"></a>
<a id="tocSactivitytaskcanceledeventattributes"></a>
<a id="tocsactivitytaskcanceledeventattributes"></a>

```json
{
  "details": {},
  "scheduledEventId": {},
  "startedEventId": {},
  "latestCancelRequestedEventId": {}
}
```

Provides the details of the <code>ActivityTaskCanceled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|
|latestCancelRequestedEventId|object|false|none|none|

<h2 id="tocS_ActivityTaskCompletedEventAttributes">ActivityTaskCompletedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskcompletedeventattributes"></a>
<a id="schema_ActivityTaskCompletedEventAttributes"></a>
<a id="tocSactivitytaskcompletedeventattributes"></a>
<a id="tocsactivitytaskcompletedeventattributes"></a>

```json
{
  "result": {},
  "scheduledEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>ActivityTaskCompleted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"string"
```

<h2 id="tocS_ActivityTaskFailedEventAttributes">ActivityTaskFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskfailedeventattributes"></a>
<a id="schema_ActivityTaskFailedEventAttributes"></a>
<a id="tocSactivitytaskfailedeventattributes"></a>
<a id="tocsactivitytaskfailedeventattributes"></a>

```json
{
  "reason": {},
  "details": {},
  "scheduledEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>ActivityTaskFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|object|false|none|none|
|details|object|false|none|none|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_DurationInSecondsOptional">DurationInSecondsOptional</h2>
<!-- backwards compatibility -->
<a id="schemadurationinsecondsoptional"></a>
<a id="schema_DurationInSecondsOptional"></a>
<a id="tocSdurationinsecondsoptional"></a>
<a id="tocsdurationinsecondsoptional"></a>

```json
"string"
```

<h2 id="tocS_TaskList">TaskList</h2>
<!-- backwards compatibility -->
<a id="schematasklist"></a>
<a id="schema_TaskList"></a>
<a id="tocStasklist"></a>
<a id="tocstasklist"></a>

```json
{
  "name": {}
}
```

Represents a task list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_TaskPriority">TaskPriority</h2>
<!-- backwards compatibility -->
<a id="schemataskpriority"></a>
<a id="schema_TaskPriority"></a>
<a id="tocStaskpriority"></a>
<a id="tocstaskpriority"></a>

```json
"string"
```

<h2 id="tocS_ActivityTaskScheduledEventAttributes">ActivityTaskScheduledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskscheduledeventattributes"></a>
<a id="schema_ActivityTaskScheduledEventAttributes"></a>
<a id="tocSactivitytaskscheduledeventattributes"></a>
<a id="tocsactivitytaskscheduledeventattributes"></a>

```json
{
  "activityType": {
    "name": {},
    "version": {}
  },
  "activityId": {},
  "input": {},
  "control": {},
  "scheduleToStartTimeout": {},
  "scheduleToCloseTimeout": {},
  "startToCloseTimeout": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "decisionTaskCompletedEventId": {},
  "heartbeatTimeout": {}
}
```

Provides the details of the <code>ActivityTaskScheduled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityType|object|true|none|none|
|activityId|object|true|none|none|
|input|object|false|none|none|
|control|object|false|none|none|
|scheduleToStartTimeout|object|false|none|none|
|scheduleToCloseTimeout|object|false|none|none|
|startToCloseTimeout|object|false|none|none|
|taskList|object|true|none|none|
|taskPriority|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|heartbeatTimeout|object|false|none|none|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
"string"
```

<h2 id="tocS_ActivityTaskStartedEventAttributes">ActivityTaskStartedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskstartedeventattributes"></a>
<a id="schema_ActivityTaskStartedEventAttributes"></a>
<a id="tocSactivitytaskstartedeventattributes"></a>
<a id="tocsactivitytaskstartedeventattributes"></a>

```json
{
  "identity": {},
  "scheduledEventId": {}
}
```

Provides the details of the <code>ActivityTaskStarted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|object|false|none|none|
|scheduledEventId|object|true|none|none|

<h2 id="tocS_Canceled">Canceled</h2>
<!-- backwards compatibility -->
<a id="schemacanceled"></a>
<a id="schema_Canceled"></a>
<a id="tocScanceled"></a>
<a id="tocscanceled"></a>

```json
true
```

<h2 id="tocS_ActivityTaskTimeoutType">ActivityTaskTimeoutType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytasktimeouttype"></a>
<a id="schema_ActivityTaskTimeoutType"></a>
<a id="tocSactivitytasktimeouttype"></a>
<a id="tocsactivitytasktimeouttype"></a>

```json
"START_TO_CLOSE"
```

<h2 id="tocS_LimitedData">LimitedData</h2>
<!-- backwards compatibility -->
<a id="schemalimiteddata"></a>
<a id="schema_LimitedData"></a>
<a id="tocSlimiteddata"></a>
<a id="tocslimiteddata"></a>

```json
"string"
```

<h2 id="tocS_ActivityTaskTimedOutEventAttributes">ActivityTaskTimedOutEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytasktimedouteventattributes"></a>
<a id="schema_ActivityTaskTimedOutEventAttributes"></a>
<a id="tocSactivitytasktimedouteventattributes"></a>
<a id="tocsactivitytasktimedouteventattributes"></a>

```json
{
  "timeoutType": {},
  "scheduledEventId": {},
  "startedEventId": {},
  "details": {}
}
```

Provides the details of the <code>ActivityTaskTimedOut</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutType|object|true|none|none|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|
|details|object|false|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_ActivityTypeConfiguration">ActivityTypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytypeconfiguration"></a>
<a id="schema_ActivityTypeConfiguration"></a>
<a id="tocSactivitytypeconfiguration"></a>
<a id="tocsactivitytypeconfiguration"></a>

```json
{
  "defaultTaskStartToCloseTimeout": {},
  "defaultTaskHeartbeatTimeout": {},
  "defaultTaskList": {
    "name": {}
  },
  "defaultTaskPriority": {},
  "defaultTaskScheduleToStartTimeout": {},
  "defaultTaskScheduleToCloseTimeout": {}
}
```

Configuration settings registered with the activity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultTaskStartToCloseTimeout|object|false|none|none|
|defaultTaskHeartbeatTimeout|object|false|none|none|
|defaultTaskList|object|false|none|none|
|defaultTaskPriority|object|false|none|none|
|defaultTaskScheduleToStartTimeout|object|false|none|none|
|defaultTaskScheduleToCloseTimeout|object|false|none|none|

<h2 id="tocS_ActivityTypeInfo">ActivityTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytypeinfo"></a>
<a id="schema_ActivityTypeInfo"></a>
<a id="tocSactivitytypeinfo"></a>
<a id="tocsactivitytypeinfo"></a>

```json
{
  "activityType": {
    "name": {},
    "version": {}
  },
  "status": {},
  "description": {},
  "creationDate": {},
  "deprecationDate": {}
}
```

Detailed information about an activity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityType|object|true|none|none|
|status|object|true|none|none|
|description|object|false|none|none|
|creationDate|object|true|none|none|
|deprecationDate|object|false|none|none|

<h2 id="tocS_RegistrationStatus">RegistrationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationstatus"></a>
<a id="schema_RegistrationStatus"></a>
<a id="tocSregistrationstatus"></a>
<a id="tocsregistrationstatus"></a>

```json
"REGISTERED"
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

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ActivityTypeInfoList">ActivityTypeInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytypeinfolist"></a>
<a id="schema_ActivityTypeInfoList"></a>
<a id="tocSactivitytypeinfolist"></a>
<a id="tocsactivitytypeinfolist"></a>

```json
[
  {
    "activityType": {
      "name": {},
      "version": {}
    },
    "status": {},
    "description": {},
    "creationDate": {},
    "deprecationDate": {}
  }
]
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

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_TimerId">TimerId</h2>
<!-- backwards compatibility -->
<a id="schematimerid"></a>
<a id="schema_TimerId"></a>
<a id="tocStimerid"></a>
<a id="tocstimerid"></a>

```json
"string"
```

<h2 id="tocS_CancelTimerDecisionAttributes">CancelTimerDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacanceltimerdecisionattributes"></a>
<a id="schema_CancelTimerDecisionAttributes"></a>
<a id="tocScanceltimerdecisionattributes"></a>
<a id="tocscanceltimerdecisionattributes"></a>

```json
{
  "timerId": {}
}
```

<p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerId|object|true|none|none|

<h2 id="tocS_CancelTimerFailedCause">CancelTimerFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemacanceltimerfailedcause"></a>
<a id="schema_CancelTimerFailedCause"></a>
<a id="tocScanceltimerfailedcause"></a>
<a id="tocscanceltimerfailedcause"></a>

```json
"TIMER_ID_UNKNOWN"
```

<h2 id="tocS_CancelTimerFailedEventAttributes">CancelTimerFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacanceltimerfailedeventattributes"></a>
<a id="schema_CancelTimerFailedEventAttributes"></a>
<a id="tocScanceltimerfailedeventattributes"></a>
<a id="tocscanceltimerfailedeventattributes"></a>

```json
{
  "timerId": {},
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>CancelTimerFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerId|object|true|none|none|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_CancelWorkflowExecutionDecisionAttributes">CancelWorkflowExecutionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacancelworkflowexecutiondecisionattributes"></a>
<a id="schema_CancelWorkflowExecutionDecisionAttributes"></a>
<a id="tocScancelworkflowexecutiondecisionattributes"></a>
<a id="tocscancelworkflowexecutiondecisionattributes"></a>

```json
{
  "details": {}
}
```

<p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|

<h2 id="tocS_CancelWorkflowExecutionFailedCause">CancelWorkflowExecutionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemacancelworkflowexecutionfailedcause"></a>
<a id="schema_CancelWorkflowExecutionFailedCause"></a>
<a id="tocScancelworkflowexecutionfailedcause"></a>
<a id="tocscancelworkflowexecutionfailedcause"></a>

```json
"UNHANDLED_DECISION"
```

<h2 id="tocS_CancelWorkflowExecutionFailedEventAttributes">CancelWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacancelworkflowexecutionfailedeventattributes"></a>
<a id="schema_CancelWorkflowExecutionFailedEventAttributes"></a>
<a id="tocScancelworkflowexecutionfailedeventattributes"></a>
<a id="tocscancelworkflowexecutionfailedeventattributes"></a>

```json
{
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_CauseMessage">CauseMessage</h2>
<!-- backwards compatibility -->
<a id="schemacausemessage"></a>
<a id="schema_CauseMessage"></a>
<a id="tocScausemessage"></a>
<a id="tocscausemessage"></a>

```json
"string"
```

<h2 id="tocS_ChildPolicy">ChildPolicy</h2>
<!-- backwards compatibility -->
<a id="schemachildpolicy"></a>
<a id="schema_ChildPolicy"></a>
<a id="tocSchildpolicy"></a>
<a id="tocschildpolicy"></a>

```json
"TERMINATE"
```

<h2 id="tocS_WorkflowType">WorkflowType</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtype"></a>
<a id="schema_WorkflowType"></a>
<a id="tocSworkflowtype"></a>
<a id="tocsworkflowtype"></a>

```json
{
  "name": {},
  "version": {}
}
```

Represents a workflow type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_ChildWorkflowExecutionCanceledEventAttributes">ChildWorkflowExecutionCanceledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemachildworkflowexecutioncanceledeventattributes"></a>
<a id="schema_ChildWorkflowExecutionCanceledEventAttributes"></a>
<a id="tocSchildworkflowexecutioncanceledeventattributes"></a>
<a id="tocschildworkflowexecutioncanceledeventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "details": {},
  "initiatedEventId": {},
  "startedEventId": {}
}
```

Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|workflowType|object|true|none|none|
|details|object|false|none|none|
|initiatedEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_ChildWorkflowExecutionCompletedEventAttributes">ChildWorkflowExecutionCompletedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemachildworkflowexecutioncompletedeventattributes"></a>
<a id="schema_ChildWorkflowExecutionCompletedEventAttributes"></a>
<a id="tocSchildworkflowexecutioncompletedeventattributes"></a>
<a id="tocschildworkflowexecutioncompletedeventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "result": {},
  "initiatedEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|workflowType|object|true|none|none|
|result|object|false|none|none|
|initiatedEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_ChildWorkflowExecutionFailedEventAttributes">ChildWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemachildworkflowexecutionfailedeventattributes"></a>
<a id="schema_ChildWorkflowExecutionFailedEventAttributes"></a>
<a id="tocSchildworkflowexecutionfailedeventattributes"></a>
<a id="tocschildworkflowexecutionfailedeventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "reason": {},
  "details": {},
  "initiatedEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|workflowType|object|true|none|none|
|reason|object|false|none|none|
|details|object|false|none|none|
|initiatedEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_ChildWorkflowExecutionStartedEventAttributes">ChildWorkflowExecutionStartedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemachildworkflowexecutionstartedeventattributes"></a>
<a id="schema_ChildWorkflowExecutionStartedEventAttributes"></a>
<a id="tocSchildworkflowexecutionstartedeventattributes"></a>
<a id="tocschildworkflowexecutionstartedeventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "initiatedEventId": {}
}
```

Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|workflowType|object|true|none|none|
|initiatedEventId|object|true|none|none|

<h2 id="tocS_ChildWorkflowExecutionTerminatedEventAttributes">ChildWorkflowExecutionTerminatedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemachildworkflowexecutionterminatedeventattributes"></a>
<a id="schema_ChildWorkflowExecutionTerminatedEventAttributes"></a>
<a id="tocSchildworkflowexecutionterminatedeventattributes"></a>
<a id="tocschildworkflowexecutionterminatedeventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "initiatedEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|workflowType|object|true|none|none|
|initiatedEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_WorkflowExecutionTimeoutType">WorkflowExecutionTimeoutType</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontimeouttype"></a>
<a id="schema_WorkflowExecutionTimeoutType"></a>
<a id="tocSworkflowexecutiontimeouttype"></a>
<a id="tocsworkflowexecutiontimeouttype"></a>

```json
"START_TO_CLOSE"
```

<h2 id="tocS_ChildWorkflowExecutionTimedOutEventAttributes">ChildWorkflowExecutionTimedOutEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemachildworkflowexecutiontimedouteventattributes"></a>
<a id="schema_ChildWorkflowExecutionTimedOutEventAttributes"></a>
<a id="tocSchildworkflowexecutiontimedouteventattributes"></a>
<a id="tocschildworkflowexecutiontimedouteventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "timeoutType": {},
  "initiatedEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|workflowType|object|true|none|none|
|timeoutType|object|true|none|none|
|initiatedEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_CloseStatus">CloseStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclosestatus"></a>
<a id="schema_CloseStatus"></a>
<a id="tocSclosestatus"></a>
<a id="tocsclosestatus"></a>

```json
"COMPLETED"
```

<h2 id="tocS_CloseStatusFilter">CloseStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemaclosestatusfilter"></a>
<a id="schema_CloseStatusFilter"></a>
<a id="tocSclosestatusfilter"></a>
<a id="tocsclosestatusfilter"></a>

```json
{
  "status": {}
}
```

Used to filter the closed workflow executions in visibility APIs by their close status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_CompleteWorkflowExecutionDecisionAttributes">CompleteWorkflowExecutionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacompleteworkflowexecutiondecisionattributes"></a>
<a id="schema_CompleteWorkflowExecutionDecisionAttributes"></a>
<a id="tocScompleteworkflowexecutiondecisionattributes"></a>
<a id="tocscompleteworkflowexecutiondecisionattributes"></a>

```json
{
  "result": {}
}
```

<p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|

<h2 id="tocS_CompleteWorkflowExecutionFailedCause">CompleteWorkflowExecutionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemacompleteworkflowexecutionfailedcause"></a>
<a id="schema_CompleteWorkflowExecutionFailedCause"></a>
<a id="tocScompleteworkflowexecutionfailedcause"></a>
<a id="tocscompleteworkflowexecutionfailedcause"></a>

```json
"UNHANDLED_DECISION"
```

<h2 id="tocS_CompleteWorkflowExecutionFailedEventAttributes">CompleteWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacompleteworkflowexecutionfailedeventattributes"></a>
<a id="schema_CompleteWorkflowExecutionFailedEventAttributes"></a>
<a id="tocScompleteworkflowexecutionfailedeventattributes"></a>
<a id="tocscompleteworkflowexecutionfailedeventattributes"></a>

```json
{
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ContinueAsNewWorkflowExecutionDecisionAttributes">ContinueAsNewWorkflowExecutionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontinueasnewworkflowexecutiondecisionattributes"></a>
<a id="schema_ContinueAsNewWorkflowExecutionDecisionAttributes"></a>
<a id="tocScontinueasnewworkflowexecutiondecisionattributes"></a>
<a id="tocscontinueasnewworkflowexecutiondecisionattributes"></a>

```json
{
  "input": {},
  "executionStartToCloseTimeout": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "taskStartToCloseTimeout": {},
  "childPolicy": {},
  "tagList": {},
  "workflowTypeVersion": {},
  "lambdaRole": {}
}
```

<p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|false|none|none|
|executionStartToCloseTimeout|object|false|none|none|
|taskList|object|false|none|none|
|taskPriority|object|false|none|none|
|taskStartToCloseTimeout|object|false|none|none|
|childPolicy|object|false|none|none|
|tagList|object|false|none|none|
|workflowTypeVersion|object|false|none|none|
|lambdaRole|object|false|none|none|

<h2 id="tocS_ContinueAsNewWorkflowExecutionFailedCause">ContinueAsNewWorkflowExecutionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemacontinueasnewworkflowexecutionfailedcause"></a>
<a id="schema_ContinueAsNewWorkflowExecutionFailedCause"></a>
<a id="tocScontinueasnewworkflowexecutionfailedcause"></a>
<a id="tocscontinueasnewworkflowexecutionfailedcause"></a>

```json
"UNHANDLED_DECISION"
```

<h2 id="tocS_ContinueAsNewWorkflowExecutionFailedEventAttributes">ContinueAsNewWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontinueasnewworkflowexecutionfailedeventattributes"></a>
<a id="schema_ContinueAsNewWorkflowExecutionFailedEventAttributes"></a>
<a id="tocScontinueasnewworkflowexecutionfailedeventattributes"></a>
<a id="tocscontinueasnewworkflowexecutionfailedeventattributes"></a>

```json
{
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
0
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_ExecutionTimeFilter">ExecutionTimeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiontimefilter"></a>
<a id="schema_ExecutionTimeFilter"></a>
<a id="tocSexecutiontimefilter"></a>
<a id="tocsexecutiontimefilter"></a>

```json
{
  "oldestDate": {},
  "latestDate": {}
}
```

Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oldestDate|object|true|none|none|
|latestDate|object|false|none|none|

<h2 id="tocS_WorkflowExecutionFilter">WorkflowExecutionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionfilter"></a>
<a id="schema_WorkflowExecutionFilter"></a>
<a id="tocSworkflowexecutionfilter"></a>
<a id="tocsworkflowexecutionfilter"></a>

```json
{
  "workflowId": {}
}
```

Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|

<h2 id="tocS_WorkflowTypeFilter">WorkflowTypeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtypefilter"></a>
<a id="schema_WorkflowTypeFilter"></a>
<a id="tocSworkflowtypefilter"></a>
<a id="tocsworkflowtypefilter"></a>

```json
{
  "name": {},
  "version": {}
}
```

Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|version|object|false|none|none|

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
{
  "tag": {}
}
```

Used to filter the workflow executions in visibility APIs based on a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|object|true|none|none|

<h2 id="tocS_DecisionType">DecisionType</h2>
<!-- backwards compatibility -->
<a id="schemadecisiontype"></a>
<a id="schema_DecisionType"></a>
<a id="tocSdecisiontype"></a>
<a id="tocsdecisiontype"></a>

```json
"ScheduleActivityTask"
```

<h2 id="tocS_ScheduleActivityTaskDecisionAttributes">ScheduleActivityTaskDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemascheduleactivitytaskdecisionattributes"></a>
<a id="schema_ScheduleActivityTaskDecisionAttributes"></a>
<a id="tocSscheduleactivitytaskdecisionattributes"></a>
<a id="tocsscheduleactivitytaskdecisionattributes"></a>

```json
{
  "activityType": {
    "name": {},
    "version": {}
  },
  "activityId": {},
  "control": {},
  "input": {},
  "scheduleToCloseTimeout": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "scheduleToStartTimeout": {},
  "startToCloseTimeout": {},
  "heartbeatTimeout": {}
}
```

<p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityType|object|true|none|none|
|activityId|object|true|none|none|
|control|object|false|none|none|
|input|object|false|none|none|
|scheduleToCloseTimeout|object|false|none|none|
|taskList|object|false|none|none|
|taskPriority|object|false|none|none|
|scheduleToStartTimeout|object|false|none|none|
|startToCloseTimeout|object|false|none|none|
|heartbeatTimeout|object|false|none|none|

<h2 id="tocS_RequestCancelActivityTaskDecisionAttributes">RequestCancelActivityTaskDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelactivitytaskdecisionattributes"></a>
<a id="schema_RequestCancelActivityTaskDecisionAttributes"></a>
<a id="tocSrequestcancelactivitytaskdecisionattributes"></a>
<a id="tocsrequestcancelactivitytaskdecisionattributes"></a>

```json
{
  "activityId": {}
}
```

<p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityId|object|true|none|none|

<h2 id="tocS_FailWorkflowExecutionDecisionAttributes">FailWorkflowExecutionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemafailworkflowexecutiondecisionattributes"></a>
<a id="schema_FailWorkflowExecutionDecisionAttributes"></a>
<a id="tocSfailworkflowexecutiondecisionattributes"></a>
<a id="tocsfailworkflowexecutiondecisionattributes"></a>

```json
{
  "reason": {},
  "details": {}
}
```

<p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|object|false|none|none|
|details|object|false|none|none|

<h2 id="tocS_RecordMarkerDecisionAttributes">RecordMarkerDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarecordmarkerdecisionattributes"></a>
<a id="schema_RecordMarkerDecisionAttributes"></a>
<a id="tocSrecordmarkerdecisionattributes"></a>
<a id="tocsrecordmarkerdecisionattributes"></a>

```json
{
  "markerName": {},
  "details": {}
}
```

<p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markerName|object|true|none|none|
|details|object|false|none|none|

<h2 id="tocS_StartTimerDecisionAttributes">StartTimerDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastarttimerdecisionattributes"></a>
<a id="schema_StartTimerDecisionAttributes"></a>
<a id="tocSstarttimerdecisionattributes"></a>
<a id="tocsstarttimerdecisionattributes"></a>

```json
{
  "timerId": {},
  "control": {},
  "startToFireTimeout": {}
}
```

<p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerId|object|true|none|none|
|control|object|false|none|none|
|startToFireTimeout|object|true|none|none|

<h2 id="tocS_SignalExternalWorkflowExecutionDecisionAttributes">SignalExternalWorkflowExecutionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemasignalexternalworkflowexecutiondecisionattributes"></a>
<a id="schema_SignalExternalWorkflowExecutionDecisionAttributes"></a>
<a id="tocSsignalexternalworkflowexecutiondecisionattributes"></a>
<a id="tocssignalexternalworkflowexecutiondecisionattributes"></a>

```json
{
  "workflowId": {},
  "runId": {},
  "signalName": {},
  "input": {},
  "control": {}
}
```

<p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|signalName|object|true|none|none|
|input|object|false|none|none|
|control|object|false|none|none|

<h2 id="tocS_RequestCancelExternalWorkflowExecutionDecisionAttributes">RequestCancelExternalWorkflowExecutionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelexternalworkflowexecutiondecisionattributes"></a>
<a id="schema_RequestCancelExternalWorkflowExecutionDecisionAttributes"></a>
<a id="tocSrequestcancelexternalworkflowexecutiondecisionattributes"></a>
<a id="tocsrequestcancelexternalworkflowexecutiondecisionattributes"></a>

```json
{
  "workflowId": {},
  "runId": {},
  "control": {}
}
```

<p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|control|object|false|none|none|

<h2 id="tocS_StartChildWorkflowExecutionDecisionAttributes">StartChildWorkflowExecutionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastartchildworkflowexecutiondecisionattributes"></a>
<a id="schema_StartChildWorkflowExecutionDecisionAttributes"></a>
<a id="tocSstartchildworkflowexecutiondecisionattributes"></a>
<a id="tocsstartchildworkflowexecutiondecisionattributes"></a>

```json
{
  "workflowType": {
    "name": {},
    "version": {}
  },
  "workflowId": {},
  "control": {},
  "input": {},
  "executionStartToCloseTimeout": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "taskStartToCloseTimeout": {},
  "childPolicy": {},
  "tagList": {},
  "lambdaRole": {}
}
```

<p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowType|object|true|none|none|
|workflowId|object|true|none|none|
|control|object|false|none|none|
|input|object|false|none|none|
|executionStartToCloseTimeout|object|false|none|none|
|taskList|object|false|none|none|
|taskPriority|object|false|none|none|
|taskStartToCloseTimeout|object|false|none|none|
|childPolicy|object|false|none|none|
|tagList|object|false|none|none|
|lambdaRole|object|false|none|none|

<h2 id="tocS_ScheduleLambdaFunctionDecisionAttributes">ScheduleLambdaFunctionDecisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaschedulelambdafunctiondecisionattributes"></a>
<a id="schema_ScheduleLambdaFunctionDecisionAttributes"></a>
<a id="tocSschedulelambdafunctiondecisionattributes"></a>
<a id="tocsschedulelambdafunctiondecisionattributes"></a>

```json
{
  "id": {},
  "name": {},
  "control": {},
  "input": {},
  "startToCloseTimeout": {}
}
```

Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|control|object|false|none|none|
|input|object|false|none|none|
|startToCloseTimeout|object|false|none|none|

<h2 id="tocS_Decision">Decision</h2>
<!-- backwards compatibility -->
<a id="schemadecision"></a>
<a id="schema_Decision"></a>
<a id="tocSdecision"></a>
<a id="tocsdecision"></a>

```json
{
  "decisionType": {},
  "scheduleActivityTaskDecisionAttributes": {
    "activityType": {
      "name": {},
      "version": {}
    },
    "activityId": {},
    "control": {},
    "input": {},
    "scheduleToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "scheduleToStartTimeout": {},
    "startToCloseTimeout": {},
    "heartbeatTimeout": {}
  },
  "requestCancelActivityTaskDecisionAttributes": {
    "activityId": {}
  },
  "completeWorkflowExecutionDecisionAttributes": {
    "result": {}
  },
  "failWorkflowExecutionDecisionAttributes": {
    "reason": {},
    "details": {}
  },
  "cancelWorkflowExecutionDecisionAttributes": {
    "details": {}
  },
  "continueAsNewWorkflowExecutionDecisionAttributes": {
    "input": {},
    "executionStartToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "taskStartToCloseTimeout": {},
    "childPolicy": {},
    "tagList": {},
    "workflowTypeVersion": {},
    "lambdaRole": {}
  },
  "recordMarkerDecisionAttributes": {
    "markerName": {},
    "details": {}
  },
  "startTimerDecisionAttributes": {
    "timerId": {},
    "control": {},
    "startToFireTimeout": {}
  },
  "cancelTimerDecisionAttributes": {
    "timerId": {}
  },
  "signalExternalWorkflowExecutionDecisionAttributes": {
    "workflowId": {},
    "runId": {},
    "signalName": {},
    "input": {},
    "control": {}
  },
  "requestCancelExternalWorkflowExecutionDecisionAttributes": {
    "workflowId": {},
    "runId": {},
    "control": {}
  },
  "startChildWorkflowExecutionDecisionAttributes": {
    "workflowType": {
      "name": {},
      "version": {}
    },
    "workflowId": {},
    "control": {},
    "input": {},
    "executionStartToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "taskStartToCloseTimeout": {},
    "childPolicy": {},
    "tagList": {},
    "lambdaRole": {}
  },
  "scheduleLambdaFunctionDecisionAttributes": {
    "id": {},
    "name": {},
    "control": {},
    "input": {},
    "startToCloseTimeout": {}
  }
}
```

<p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decisionType|object|true|none|none|
|scheduleActivityTaskDecisionAttributes|object|false|none|none|
|requestCancelActivityTaskDecisionAttributes|object|false|none|none|
|completeWorkflowExecutionDecisionAttributes|object|false|none|none|
|failWorkflowExecutionDecisionAttributes|object|false|none|none|
|cancelWorkflowExecutionDecisionAttributes|object|false|none|none|
|continueAsNewWorkflowExecutionDecisionAttributes|object|false|none|none|
|recordMarkerDecisionAttributes|object|false|none|none|
|startTimerDecisionAttributes|object|false|none|none|
|cancelTimerDecisionAttributes|object|false|none|none|
|signalExternalWorkflowExecutionDecisionAttributes|object|false|none|none|
|requestCancelExternalWorkflowExecutionDecisionAttributes|object|false|none|none|
|startChildWorkflowExecutionDecisionAttributes|object|false|none|none|
|scheduleLambdaFunctionDecisionAttributes|object|false|none|none|

<h2 id="tocS_DecisionList">DecisionList</h2>
<!-- backwards compatibility -->
<a id="schemadecisionlist"></a>
<a id="schema_DecisionList"></a>
<a id="tocSdecisionlist"></a>
<a id="tocsdecisionlist"></a>

```json
[
  {
    "decisionType": {},
    "scheduleActivityTaskDecisionAttributes": {
      "activityType": {
        "name": {},
        "version": {}
      },
      "activityId": {},
      "control": {},
      "input": {},
      "scheduleToCloseTimeout": {},
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "scheduleToStartTimeout": {},
      "startToCloseTimeout": {},
      "heartbeatTimeout": {}
    },
    "requestCancelActivityTaskDecisionAttributes": {
      "activityId": {}
    },
    "completeWorkflowExecutionDecisionAttributes": {
      "result": {}
    },
    "failWorkflowExecutionDecisionAttributes": {
      "reason": {},
      "details": {}
    },
    "cancelWorkflowExecutionDecisionAttributes": {
      "details": {}
    },
    "continueAsNewWorkflowExecutionDecisionAttributes": {
      "input": {},
      "executionStartToCloseTimeout": {},
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "taskStartToCloseTimeout": {},
      "childPolicy": {},
      "tagList": {},
      "workflowTypeVersion": {},
      "lambdaRole": {}
    },
    "recordMarkerDecisionAttributes": {
      "markerName": {},
      "details": {}
    },
    "startTimerDecisionAttributes": {
      "timerId": {},
      "control": {},
      "startToFireTimeout": {}
    },
    "cancelTimerDecisionAttributes": {
      "timerId": {}
    },
    "signalExternalWorkflowExecutionDecisionAttributes": {
      "workflowId": {},
      "runId": {},
      "signalName": {},
      "input": {},
      "control": {}
    },
    "requestCancelExternalWorkflowExecutionDecisionAttributes": {
      "workflowId": {},
      "runId": {},
      "control": {}
    },
    "startChildWorkflowExecutionDecisionAttributes": {
      "workflowType": {
        "name": {},
        "version": {}
      },
      "workflowId": {},
      "control": {},
      "input": {},
      "executionStartToCloseTimeout": {},
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "taskStartToCloseTimeout": {},
      "childPolicy": {},
      "tagList": {},
      "lambdaRole": {}
    },
    "scheduleLambdaFunctionDecisionAttributes": {
      "id": {},
      "name": {},
      "control": {},
      "input": {},
      "startToCloseTimeout": {}
    }
  }
]
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
    "eventTimestamp": {},
    "eventType": {},
    "eventId": {},
    "workflowExecutionStartedEventAttributes": {
      "input": {},
      "executionStartToCloseTimeout": {},
      "taskStartToCloseTimeout": {},
      "childPolicy": {},
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "workflowType": {
        "name": {},
        "version": {}
      },
      "tagList": {},
      "continuedExecutionRunId": {},
      "parentWorkflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "parentInitiatedEventId": {},
      "lambdaRole": {}
    },
    "workflowExecutionCompletedEventAttributes": {
      "result": {},
      "decisionTaskCompletedEventId": {}
    },
    "completeWorkflowExecutionFailedEventAttributes": {
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "workflowExecutionFailedEventAttributes": {
      "reason": {},
      "details": {},
      "decisionTaskCompletedEventId": {}
    },
    "failWorkflowExecutionFailedEventAttributes": {
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "workflowExecutionTimedOutEventAttributes": {
      "timeoutType": {},
      "childPolicy": {}
    },
    "workflowExecutionCanceledEventAttributes": {
      "details": {},
      "decisionTaskCompletedEventId": {}
    },
    "cancelWorkflowExecutionFailedEventAttributes": {
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "workflowExecutionContinuedAsNewEventAttributes": {
      "input": {},
      "decisionTaskCompletedEventId": {},
      "newExecutionRunId": {},
      "executionStartToCloseTimeout": {},
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "taskStartToCloseTimeout": {},
      "childPolicy": {},
      "tagList": {},
      "workflowType": {
        "name": {},
        "version": {}
      },
      "lambdaRole": {}
    },
    "continueAsNewWorkflowExecutionFailedEventAttributes": {
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "workflowExecutionTerminatedEventAttributes": {
      "reason": {},
      "details": {},
      "childPolicy": {},
      "cause": {}
    },
    "workflowExecutionCancelRequestedEventAttributes": {
      "externalWorkflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "externalInitiatedEventId": {},
      "cause": {}
    },
    "decisionTaskScheduledEventAttributes": {
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "startToCloseTimeout": {}
    },
    "decisionTaskStartedEventAttributes": {
      "identity": {},
      "scheduledEventId": {}
    },
    "decisionTaskCompletedEventAttributes": {
      "executionContext": {},
      "scheduledEventId": {},
      "startedEventId": {}
    },
    "decisionTaskTimedOutEventAttributes": {
      "timeoutType": {},
      "scheduledEventId": {},
      "startedEventId": {}
    },
    "activityTaskScheduledEventAttributes": {
      "activityType": {
        "name": {},
        "version": {}
      },
      "activityId": {},
      "input": {},
      "control": {},
      "scheduleToStartTimeout": {},
      "scheduleToCloseTimeout": {},
      "startToCloseTimeout": {},
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "decisionTaskCompletedEventId": {},
      "heartbeatTimeout": {}
    },
    "activityTaskStartedEventAttributes": {
      "identity": {},
      "scheduledEventId": {}
    },
    "activityTaskCompletedEventAttributes": {
      "result": {},
      "scheduledEventId": {},
      "startedEventId": {}
    },
    "activityTaskFailedEventAttributes": {
      "reason": {},
      "details": {},
      "scheduledEventId": {},
      "startedEventId": {}
    },
    "activityTaskTimedOutEventAttributes": {
      "timeoutType": {},
      "scheduledEventId": {},
      "startedEventId": {},
      "details": {}
    },
    "activityTaskCanceledEventAttributes": {
      "details": {},
      "scheduledEventId": {},
      "startedEventId": {},
      "latestCancelRequestedEventId": {}
    },
    "activityTaskCancelRequestedEventAttributes": {
      "decisionTaskCompletedEventId": {},
      "activityId": {}
    },
    "workflowExecutionSignaledEventAttributes": {
      "signalName": {},
      "input": {},
      "externalWorkflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "externalInitiatedEventId": {}
    },
    "markerRecordedEventAttributes": {
      "markerName": {},
      "details": {},
      "decisionTaskCompletedEventId": {}
    },
    "recordMarkerFailedEventAttributes": {
      "markerName": {},
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "timerStartedEventAttributes": {
      "timerId": {},
      "control": {},
      "startToFireTimeout": {},
      "decisionTaskCompletedEventId": {}
    },
    "timerFiredEventAttributes": {
      "timerId": {},
      "startedEventId": {}
    },
    "timerCanceledEventAttributes": {
      "timerId": {},
      "startedEventId": {},
      "decisionTaskCompletedEventId": {}
    },
    "startChildWorkflowExecutionInitiatedEventAttributes": {
      "workflowId": {},
      "workflowType": {
        "name": {},
        "version": {}
      },
      "control": {},
      "input": {},
      "executionStartToCloseTimeout": {},
      "taskList": {
        "name": {}
      },
      "taskPriority": {},
      "decisionTaskCompletedEventId": {},
      "childPolicy": {},
      "taskStartToCloseTimeout": {},
      "tagList": {},
      "lambdaRole": {}
    },
    "childWorkflowExecutionStartedEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "workflowType": {
        "name": {},
        "version": {}
      },
      "initiatedEventId": {}
    },
    "childWorkflowExecutionCompletedEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "workflowType": {
        "name": {},
        "version": {}
      },
      "result": {},
      "initiatedEventId": {},
      "startedEventId": {}
    },
    "childWorkflowExecutionFailedEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "workflowType": {
        "name": {},
        "version": {}
      },
      "reason": {},
      "details": {},
      "initiatedEventId": {},
      "startedEventId": {}
    },
    "childWorkflowExecutionTimedOutEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "workflowType": {
        "name": {},
        "version": {}
      },
      "timeoutType": {},
      "initiatedEventId": {},
      "startedEventId": {}
    },
    "childWorkflowExecutionCanceledEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "workflowType": {
        "name": {},
        "version": {}
      },
      "details": {},
      "initiatedEventId": {},
      "startedEventId": {}
    },
    "childWorkflowExecutionTerminatedEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "workflowType": {
        "name": {},
        "version": {}
      },
      "initiatedEventId": {},
      "startedEventId": {}
    },
    "signalExternalWorkflowExecutionInitiatedEventAttributes": {
      "workflowId": {},
      "runId": {},
      "signalName": {},
      "input": {},
      "decisionTaskCompletedEventId": {},
      "control": {}
    },
    "externalWorkflowExecutionSignaledEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "initiatedEventId": {}
    },
    "signalExternalWorkflowExecutionFailedEventAttributes": {
      "workflowId": {},
      "runId": {},
      "cause": {},
      "initiatedEventId": {},
      "decisionTaskCompletedEventId": {},
      "control": {}
    },
    "externalWorkflowExecutionCancelRequestedEventAttributes": {
      "workflowExecution": {
        "workflowId": {},
        "runId": {}
      },
      "initiatedEventId": {}
    },
    "requestCancelExternalWorkflowExecutionInitiatedEventAttributes": {
      "workflowId": {},
      "runId": {},
      "decisionTaskCompletedEventId": {},
      "control": {}
    },
    "requestCancelExternalWorkflowExecutionFailedEventAttributes": {
      "workflowId": {},
      "runId": {},
      "cause": {},
      "initiatedEventId": {},
      "decisionTaskCompletedEventId": {},
      "control": {}
    },
    "scheduleActivityTaskFailedEventAttributes": {
      "activityType": {
        "name": {},
        "version": {}
      },
      "activityId": {},
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "requestCancelActivityTaskFailedEventAttributes": {
      "activityId": {},
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "startTimerFailedEventAttributes": {
      "timerId": {},
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "cancelTimerFailedEventAttributes": {
      "timerId": {},
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "startChildWorkflowExecutionFailedEventAttributes": {
      "workflowType": {
        "name": {},
        "version": {}
      },
      "cause": {},
      "workflowId": {},
      "initiatedEventId": {},
      "decisionTaskCompletedEventId": {},
      "control": {}
    },
    "lambdaFunctionScheduledEventAttributes": {
      "id": {},
      "name": {},
      "control": {},
      "input": {},
      "startToCloseTimeout": {},
      "decisionTaskCompletedEventId": {}
    },
    "lambdaFunctionStartedEventAttributes": {
      "scheduledEventId": {}
    },
    "lambdaFunctionCompletedEventAttributes": {
      "scheduledEventId": {},
      "startedEventId": {},
      "result": {}
    },
    "lambdaFunctionFailedEventAttributes": {
      "scheduledEventId": {},
      "startedEventId": {},
      "reason": {},
      "details": {}
    },
    "lambdaFunctionTimedOutEventAttributes": {
      "scheduledEventId": {},
      "startedEventId": {},
      "timeoutType": {}
    },
    "scheduleLambdaFunctionFailedEventAttributes": {
      "id": {},
      "name": {},
      "cause": {},
      "decisionTaskCompletedEventId": {}
    },
    "startLambdaFunctionFailedEventAttributes": {
      "scheduledEventId": {},
      "cause": {},
      "message": {}
    }
  }
]
```

<h2 id="tocS_DecisionTaskCompletedEventAttributes">DecisionTaskCompletedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadecisiontaskcompletedeventattributes"></a>
<a id="schema_DecisionTaskCompletedEventAttributes"></a>
<a id="tocSdecisiontaskcompletedeventattributes"></a>
<a id="tocsdecisiontaskcompletedeventattributes"></a>

```json
{
  "executionContext": {},
  "scheduledEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>DecisionTaskCompleted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionContext|object|false|none|none|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_DecisionTaskScheduledEventAttributes">DecisionTaskScheduledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadecisiontaskscheduledeventattributes"></a>
<a id="schema_DecisionTaskScheduledEventAttributes"></a>
<a id="tocSdecisiontaskscheduledeventattributes"></a>
<a id="tocsdecisiontaskscheduledeventattributes"></a>

```json
{
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "startToCloseTimeout": {}
}
```

Provides details about the <code>DecisionTaskScheduled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskList|object|true|none|none|
|taskPriority|object|false|none|none|
|startToCloseTimeout|object|false|none|none|

<h2 id="tocS_DecisionTaskStartedEventAttributes">DecisionTaskStartedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadecisiontaskstartedeventattributes"></a>
<a id="schema_DecisionTaskStartedEventAttributes"></a>
<a id="tocSdecisiontaskstartedeventattributes"></a>
<a id="tocsdecisiontaskstartedeventattributes"></a>

```json
{
  "identity": {},
  "scheduledEventId": {}
}
```

Provides the details of the <code>DecisionTaskStarted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|object|false|none|none|
|scheduledEventId|object|true|none|none|

<h2 id="tocS_DecisionTaskTimeoutType">DecisionTaskTimeoutType</h2>
<!-- backwards compatibility -->
<a id="schemadecisiontasktimeouttype"></a>
<a id="schema_DecisionTaskTimeoutType"></a>
<a id="tocSdecisiontasktimeouttype"></a>
<a id="tocsdecisiontasktimeouttype"></a>

```json
"START_TO_CLOSE"
```

<h2 id="tocS_DecisionTaskTimedOutEventAttributes">DecisionTaskTimedOutEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadecisiontasktimedouteventattributes"></a>
<a id="schema_DecisionTaskTimedOutEventAttributes"></a>
<a id="tocSdecisiontasktimedouteventattributes"></a>
<a id="tocsdecisiontasktimedouteventattributes"></a>

```json
{
  "timeoutType": {},
  "scheduledEventId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>DecisionTaskTimedOut</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutType|object|true|none|none|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_DurationInDays">DurationInDays</h2>
<!-- backwards compatibility -->
<a id="schemadurationindays"></a>
<a id="schema_DurationInDays"></a>
<a id="tocSdurationindays"></a>
<a id="tocsdurationindays"></a>

```json
"string"
```

<h2 id="tocS_DomainConfiguration">DomainConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadomainconfiguration"></a>
<a id="schema_DomainConfiguration"></a>
<a id="tocSdomainconfiguration"></a>
<a id="tocsdomainconfiguration"></a>

```json
{
  "workflowExecutionRetentionPeriodInDays": {}
}
```

Contains the configuration settings of a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecutionRetentionPeriodInDays|object|true|none|none|

<h2 id="tocS_DomainInfo">DomainInfo</h2>
<!-- backwards compatibility -->
<a id="schemadomaininfo"></a>
<a id="schema_DomainInfo"></a>
<a id="tocSdomaininfo"></a>
<a id="tocsdomaininfo"></a>

```json
{
  "name": {},
  "status": {},
  "description": {},
  "arn": {}
}
```

Contains general information about a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|status|object|true|none|none|
|description|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_DomainInfoList">DomainInfoList</h2>
<!-- backwards compatibility -->
<a id="schemadomaininfolist"></a>
<a id="schema_DomainInfoList"></a>
<a id="tocSdomaininfolist"></a>
<a id="tocsdomaininfolist"></a>

```json
[
  {
    "name": {},
    "status": {},
    "description": {},
    "arn": {}
  }
]
```

<h2 id="tocS_DurationInSeconds">DurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemadurationinseconds"></a>
<a id="schema_DurationInSeconds"></a>
<a id="tocSdurationinseconds"></a>
<a id="tocsdurationinseconds"></a>

```json
"string"
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"WorkflowExecutionStarted"
```

<h2 id="tocS_ExecutionStatus">ExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatus"></a>
<a id="schema_ExecutionStatus"></a>
<a id="tocSexecutionstatus"></a>
<a id="tocsexecutionstatus"></a>

```json
"OPEN"
```

<h2 id="tocS_ExternalWorkflowExecutionCancelRequestedEventAttributes">ExternalWorkflowExecutionCancelRequestedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaexternalworkflowexecutioncancelrequestedeventattributes"></a>
<a id="schema_ExternalWorkflowExecutionCancelRequestedEventAttributes"></a>
<a id="tocSexternalworkflowexecutioncancelrequestedeventattributes"></a>
<a id="tocsexternalworkflowexecutioncancelrequestedeventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "initiatedEventId": {}
}
```

Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|initiatedEventId|object|true|none|none|

<h2 id="tocS_ExternalWorkflowExecutionSignaledEventAttributes">ExternalWorkflowExecutionSignaledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaexternalworkflowexecutionsignaledeventattributes"></a>
<a id="schema_ExternalWorkflowExecutionSignaledEventAttributes"></a>
<a id="tocSexternalworkflowexecutionsignaledeventattributes"></a>
<a id="tocsexternalworkflowexecutionsignaledeventattributes"></a>

```json
{
  "workflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "initiatedEventId": {}
}
```

Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowExecution|object|true|none|none|
|initiatedEventId|object|true|none|none|

<h2 id="tocS_FailWorkflowExecutionFailedCause">FailWorkflowExecutionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemafailworkflowexecutionfailedcause"></a>
<a id="schema_FailWorkflowExecutionFailedCause"></a>
<a id="tocSfailworkflowexecutionfailedcause"></a>
<a id="tocsfailworkflowexecutionfailedcause"></a>

```json
"UNHANDLED_DECISION"
```

<h2 id="tocS_FailWorkflowExecutionFailedEventAttributes">FailWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemafailworkflowexecutionfailedeventattributes"></a>
<a id="schema_FailWorkflowExecutionFailedEventAttributes"></a>
<a id="tocSfailworkflowexecutionfailedeventattributes"></a>
<a id="tocsfailworkflowexecutionfailedeventattributes"></a>

```json
{
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>FailWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_FunctionId">FunctionId</h2>
<!-- backwards compatibility -->
<a id="schemafunctionid"></a>
<a id="schema_FunctionId"></a>
<a id="tocSfunctionid"></a>
<a id="tocsfunctionid"></a>

```json
"string"
```

<h2 id="tocS_FunctionInput">FunctionInput</h2>
<!-- backwards compatibility -->
<a id="schemafunctioninput"></a>
<a id="schema_FunctionInput"></a>
<a id="tocSfunctioninput"></a>
<a id="tocsfunctioninput"></a>

```json
"string"
```

<h2 id="tocS_FunctionName">FunctionName</h2>
<!-- backwards compatibility -->
<a id="schemafunctionname"></a>
<a id="schema_FunctionName"></a>
<a id="tocSfunctionname"></a>
<a id="tocsfunctionname"></a>

```json
"string"
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

<h2 id="tocS_WorkflowExecutionStartedEventAttributes">WorkflowExecutionStartedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionstartedeventattributes"></a>
<a id="schema_WorkflowExecutionStartedEventAttributes"></a>
<a id="tocSworkflowexecutionstartedeventattributes"></a>
<a id="tocsworkflowexecutionstartedeventattributes"></a>

```json
{
  "input": {},
  "executionStartToCloseTimeout": {},
  "taskStartToCloseTimeout": {},
  "childPolicy": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "workflowType": {
    "name": {},
    "version": {}
  },
  "tagList": {},
  "continuedExecutionRunId": {},
  "parentWorkflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "parentInitiatedEventId": {},
  "lambdaRole": {}
}
```

Provides details of <code>WorkflowExecutionStarted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|false|none|none|
|executionStartToCloseTimeout|object|false|none|none|
|taskStartToCloseTimeout|object|false|none|none|
|childPolicy|object|true|none|none|
|taskList|object|true|none|none|
|taskPriority|object|false|none|none|
|workflowType|object|true|none|none|
|tagList|object|false|none|none|
|continuedExecutionRunId|object|false|none|none|
|parentWorkflowExecution|object|false|none|none|
|parentInitiatedEventId|object|false|none|none|
|lambdaRole|object|false|none|none|

<h2 id="tocS_WorkflowExecutionCompletedEventAttributes">WorkflowExecutionCompletedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncompletedeventattributes"></a>
<a id="schema_WorkflowExecutionCompletedEventAttributes"></a>
<a id="tocSworkflowexecutioncompletedeventattributes"></a>
<a id="tocsworkflowexecutioncompletedeventattributes"></a>

```json
{
  "result": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>WorkflowExecutionCompleted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_WorkflowExecutionFailedEventAttributes">WorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionfailedeventattributes"></a>
<a id="schema_WorkflowExecutionFailedEventAttributes"></a>
<a id="tocSworkflowexecutionfailedeventattributes"></a>
<a id="tocsworkflowexecutionfailedeventattributes"></a>

```json
{
  "reason": {},
  "details": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>WorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|object|false|none|none|
|details|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_WorkflowExecutionTimedOutEventAttributes">WorkflowExecutionTimedOutEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontimedouteventattributes"></a>
<a id="schema_WorkflowExecutionTimedOutEventAttributes"></a>
<a id="tocSworkflowexecutiontimedouteventattributes"></a>
<a id="tocsworkflowexecutiontimedouteventattributes"></a>

```json
{
  "timeoutType": {},
  "childPolicy": {}
}
```

Provides the details of the <code>WorkflowExecutionTimedOut</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutType|object|true|none|none|
|childPolicy|object|true|none|none|

<h2 id="tocS_WorkflowExecutionCanceledEventAttributes">WorkflowExecutionCanceledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncanceledeventattributes"></a>
<a id="schema_WorkflowExecutionCanceledEventAttributes"></a>
<a id="tocSworkflowexecutioncanceledeventattributes"></a>
<a id="tocsworkflowexecutioncanceledeventattributes"></a>

```json
{
  "details": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>WorkflowExecutionCanceled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_WorkflowExecutionContinuedAsNewEventAttributes">WorkflowExecutionContinuedAsNewEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncontinuedasneweventattributes"></a>
<a id="schema_WorkflowExecutionContinuedAsNewEventAttributes"></a>
<a id="tocSworkflowexecutioncontinuedasneweventattributes"></a>
<a id="tocsworkflowexecutioncontinuedasneweventattributes"></a>

```json
{
  "input": {},
  "decisionTaskCompletedEventId": {},
  "newExecutionRunId": {},
  "executionStartToCloseTimeout": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "taskStartToCloseTimeout": {},
  "childPolicy": {},
  "tagList": {},
  "workflowType": {
    "name": {},
    "version": {}
  },
  "lambdaRole": {}
}
```

Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|newExecutionRunId|object|true|none|none|
|executionStartToCloseTimeout|object|false|none|none|
|taskList|object|true|none|none|
|taskPriority|object|false|none|none|
|taskStartToCloseTimeout|object|false|none|none|
|childPolicy|object|true|none|none|
|tagList|object|false|none|none|
|workflowType|object|true|none|none|
|lambdaRole|object|false|none|none|

<h2 id="tocS_WorkflowExecutionTerminatedEventAttributes">WorkflowExecutionTerminatedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionterminatedeventattributes"></a>
<a id="schema_WorkflowExecutionTerminatedEventAttributes"></a>
<a id="tocSworkflowexecutionterminatedeventattributes"></a>
<a id="tocsworkflowexecutionterminatedeventattributes"></a>

```json
{
  "reason": {},
  "details": {},
  "childPolicy": {},
  "cause": {}
}
```

Provides the details of the <code>WorkflowExecutionTerminated</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|object|false|none|none|
|details|object|false|none|none|
|childPolicy|object|true|none|none|
|cause|object|false|none|none|

<h2 id="tocS_WorkflowExecutionCancelRequestedEventAttributes">WorkflowExecutionCancelRequestedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncancelrequestedeventattributes"></a>
<a id="schema_WorkflowExecutionCancelRequestedEventAttributes"></a>
<a id="tocSworkflowexecutioncancelrequestedeventattributes"></a>
<a id="tocsworkflowexecutioncancelrequestedeventattributes"></a>

```json
{
  "externalWorkflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "externalInitiatedEventId": {},
  "cause": {}
}
```

Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalWorkflowExecution|object|false|none|none|
|externalInitiatedEventId|object|false|none|none|
|cause|object|false|none|none|

<h2 id="tocS_WorkflowExecutionSignaledEventAttributes">WorkflowExecutionSignaledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionsignaledeventattributes"></a>
<a id="schema_WorkflowExecutionSignaledEventAttributes"></a>
<a id="tocSworkflowexecutionsignaledeventattributes"></a>
<a id="tocsworkflowexecutionsignaledeventattributes"></a>

```json
{
  "signalName": {},
  "input": {},
  "externalWorkflowExecution": {
    "workflowId": {},
    "runId": {}
  },
  "externalInitiatedEventId": {}
}
```

Provides the details of the <code>WorkflowExecutionSignaled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signalName|object|true|none|none|
|input|object|false|none|none|
|externalWorkflowExecution|object|false|none|none|
|externalInitiatedEventId|object|false|none|none|

<h2 id="tocS_MarkerRecordedEventAttributes">MarkerRecordedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamarkerrecordedeventattributes"></a>
<a id="schema_MarkerRecordedEventAttributes"></a>
<a id="tocSmarkerrecordedeventattributes"></a>
<a id="tocsmarkerrecordedeventattributes"></a>

```json
{
  "markerName": {},
  "details": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>MarkerRecorded</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markerName|object|true|none|none|
|details|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_RecordMarkerFailedEventAttributes">RecordMarkerFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarecordmarkerfailedeventattributes"></a>
<a id="schema_RecordMarkerFailedEventAttributes"></a>
<a id="tocSrecordmarkerfailedeventattributes"></a>
<a id="tocsrecordmarkerfailedeventattributes"></a>

```json
{
  "markerName": {},
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>RecordMarkerFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markerName|object|true|none|none|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_TimerStartedEventAttributes">TimerStartedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schematimerstartedeventattributes"></a>
<a id="schema_TimerStartedEventAttributes"></a>
<a id="tocStimerstartedeventattributes"></a>
<a id="tocstimerstartedeventattributes"></a>

```json
{
  "timerId": {},
  "control": {},
  "startToFireTimeout": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>TimerStarted</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerId|object|true|none|none|
|control|object|false|none|none|
|startToFireTimeout|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_TimerFiredEventAttributes">TimerFiredEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schematimerfiredeventattributes"></a>
<a id="schema_TimerFiredEventAttributes"></a>
<a id="tocStimerfiredeventattributes"></a>
<a id="tocstimerfiredeventattributes"></a>

```json
{
  "timerId": {},
  "startedEventId": {}
}
```

Provides the details of the <code>TimerFired</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerId|object|true|none|none|
|startedEventId|object|true|none|none|

<h2 id="tocS_TimerCanceledEventAttributes">TimerCanceledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schematimercanceledeventattributes"></a>
<a id="schema_TimerCanceledEventAttributes"></a>
<a id="tocStimercanceledeventattributes"></a>
<a id="tocstimercanceledeventattributes"></a>

```json
{
  "timerId": {},
  "startedEventId": {},
  "decisionTaskCompletedEventId": {}
}
```

 Provides the details of the <code>TimerCanceled</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerId|object|true|none|none|
|startedEventId|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_StartChildWorkflowExecutionInitiatedEventAttributes">StartChildWorkflowExecutionInitiatedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastartchildworkflowexecutioninitiatedeventattributes"></a>
<a id="schema_StartChildWorkflowExecutionInitiatedEventAttributes"></a>
<a id="tocSstartchildworkflowexecutioninitiatedeventattributes"></a>
<a id="tocsstartchildworkflowexecutioninitiatedeventattributes"></a>

```json
{
  "workflowId": {},
  "workflowType": {
    "name": {},
    "version": {}
  },
  "control": {},
  "input": {},
  "executionStartToCloseTimeout": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "decisionTaskCompletedEventId": {},
  "childPolicy": {},
  "taskStartToCloseTimeout": {},
  "tagList": {},
  "lambdaRole": {}
}
```

Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|workflowType|object|true|none|none|
|control|object|false|none|none|
|input|object|false|none|none|
|executionStartToCloseTimeout|object|false|none|none|
|taskList|object|true|none|none|
|taskPriority|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|childPolicy|object|true|none|none|
|taskStartToCloseTimeout|object|false|none|none|
|tagList|object|false|none|none|
|lambdaRole|object|false|none|none|

<h2 id="tocS_SignalExternalWorkflowExecutionInitiatedEventAttributes">SignalExternalWorkflowExecutionInitiatedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemasignalexternalworkflowexecutioninitiatedeventattributes"></a>
<a id="schema_SignalExternalWorkflowExecutionInitiatedEventAttributes"></a>
<a id="tocSsignalexternalworkflowexecutioninitiatedeventattributes"></a>
<a id="tocssignalexternalworkflowexecutioninitiatedeventattributes"></a>

```json
{
  "workflowId": {},
  "runId": {},
  "signalName": {},
  "input": {},
  "decisionTaskCompletedEventId": {},
  "control": {}
}
```

Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|signalName|object|true|none|none|
|input|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|control|object|false|none|none|

<h2 id="tocS_SignalExternalWorkflowExecutionFailedEventAttributes">SignalExternalWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemasignalexternalworkflowexecutionfailedeventattributes"></a>
<a id="schema_SignalExternalWorkflowExecutionFailedEventAttributes"></a>
<a id="tocSsignalexternalworkflowexecutionfailedeventattributes"></a>
<a id="tocssignalexternalworkflowexecutionfailedeventattributes"></a>

```json
{
  "workflowId": {},
  "runId": {},
  "cause": {},
  "initiatedEventId": {},
  "decisionTaskCompletedEventId": {},
  "control": {}
}
```

Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|cause|object|true|none|none|
|initiatedEventId|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|control|object|false|none|none|

<h2 id="tocS_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes">RequestCancelExternalWorkflowExecutionInitiatedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelexternalworkflowexecutioninitiatedeventattributes"></a>
<a id="schema_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes"></a>
<a id="tocSrequestcancelexternalworkflowexecutioninitiatedeventattributes"></a>
<a id="tocsrequestcancelexternalworkflowexecutioninitiatedeventattributes"></a>

```json
{
  "workflowId": {},
  "runId": {},
  "decisionTaskCompletedEventId": {},
  "control": {}
}
```

Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|control|object|false|none|none|

<h2 id="tocS_RequestCancelExternalWorkflowExecutionFailedEventAttributes">RequestCancelExternalWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelexternalworkflowexecutionfailedeventattributes"></a>
<a id="schema_RequestCancelExternalWorkflowExecutionFailedEventAttributes"></a>
<a id="tocSrequestcancelexternalworkflowexecutionfailedeventattributes"></a>
<a id="tocsrequestcancelexternalworkflowexecutionfailedeventattributes"></a>

```json
{
  "workflowId": {},
  "runId": {},
  "cause": {},
  "initiatedEventId": {},
  "decisionTaskCompletedEventId": {},
  "control": {}
}
```

Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|object|true|none|none|
|runId|object|false|none|none|
|cause|object|true|none|none|
|initiatedEventId|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|control|object|false|none|none|

<h2 id="tocS_ScheduleActivityTaskFailedEventAttributes">ScheduleActivityTaskFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemascheduleactivitytaskfailedeventattributes"></a>
<a id="schema_ScheduleActivityTaskFailedEventAttributes"></a>
<a id="tocSscheduleactivitytaskfailedeventattributes"></a>
<a id="tocsscheduleactivitytaskfailedeventattributes"></a>

```json
{
  "activityType": {
    "name": {},
    "version": {}
  },
  "activityId": {},
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>ScheduleActivityTaskFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityType|object|true|none|none|
|activityId|object|true|none|none|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_RequestCancelActivityTaskFailedEventAttributes">RequestCancelActivityTaskFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelactivitytaskfailedeventattributes"></a>
<a id="schema_RequestCancelActivityTaskFailedEventAttributes"></a>
<a id="tocSrequestcancelactivitytaskfailedeventattributes"></a>
<a id="tocsrequestcancelactivitytaskfailedeventattributes"></a>

```json
{
  "activityId": {},
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityId|object|true|none|none|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_StartTimerFailedEventAttributes">StartTimerFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastarttimerfailedeventattributes"></a>
<a id="schema_StartTimerFailedEventAttributes"></a>
<a id="tocSstarttimerfailedeventattributes"></a>
<a id="tocsstarttimerfailedeventattributes"></a>

```json
{
  "timerId": {},
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>StartTimerFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerId|object|true|none|none|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_StartChildWorkflowExecutionFailedEventAttributes">StartChildWorkflowExecutionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastartchildworkflowexecutionfailedeventattributes"></a>
<a id="schema_StartChildWorkflowExecutionFailedEventAttributes"></a>
<a id="tocSstartchildworkflowexecutionfailedeventattributes"></a>
<a id="tocsstartchildworkflowexecutionfailedeventattributes"></a>

```json
{
  "workflowType": {
    "name": {},
    "version": {}
  },
  "cause": {},
  "workflowId": {},
  "initiatedEventId": {},
  "decisionTaskCompletedEventId": {},
  "control": {}
}
```

Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowType|object|true|none|none|
|cause|object|true|none|none|
|workflowId|object|true|none|none|
|initiatedEventId|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|
|control|object|false|none|none|

<h2 id="tocS_LambdaFunctionScheduledEventAttributes">LambdaFunctionScheduledEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionscheduledeventattributes"></a>
<a id="schema_LambdaFunctionScheduledEventAttributes"></a>
<a id="tocSlambdafunctionscheduledeventattributes"></a>
<a id="tocslambdafunctionscheduledeventattributes"></a>

```json
{
  "id": {},
  "name": {},
  "control": {},
  "input": {},
  "startToCloseTimeout": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|control|object|false|none|none|
|input|object|false|none|none|
|startToCloseTimeout|object|false|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_LambdaFunctionStartedEventAttributes">LambdaFunctionStartedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionstartedeventattributes"></a>
<a id="schema_LambdaFunctionStartedEventAttributes"></a>
<a id="tocSlambdafunctionstartedeventattributes"></a>
<a id="tocslambdafunctionstartedeventattributes"></a>

```json
{
  "scheduledEventId": {}
}
```

Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledEventId|object|true|none|none|

<h2 id="tocS_LambdaFunctionCompletedEventAttributes">LambdaFunctionCompletedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctioncompletedeventattributes"></a>
<a id="schema_LambdaFunctionCompletedEventAttributes"></a>
<a id="tocSlambdafunctioncompletedeventattributes"></a>
<a id="tocslambdafunctioncompletedeventattributes"></a>

```json
{
  "scheduledEventId": {},
  "startedEventId": {},
  "result": {}
}
```

Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|
|result|object|false|none|none|

<h2 id="tocS_LambdaFunctionFailedEventAttributes">LambdaFunctionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionfailedeventattributes"></a>
<a id="schema_LambdaFunctionFailedEventAttributes"></a>
<a id="tocSlambdafunctionfailedeventattributes"></a>
<a id="tocslambdafunctionfailedeventattributes"></a>

```json
{
  "scheduledEventId": {},
  "startedEventId": {},
  "reason": {},
  "details": {}
}
```

Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|
|reason|object|false|none|none|
|details|object|false|none|none|

<h2 id="tocS_LambdaFunctionTimedOutEventAttributes">LambdaFunctionTimedOutEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctiontimedouteventattributes"></a>
<a id="schema_LambdaFunctionTimedOutEventAttributes"></a>
<a id="tocSlambdafunctiontimedouteventattributes"></a>
<a id="tocslambdafunctiontimedouteventattributes"></a>

```json
{
  "scheduledEventId": {},
  "startedEventId": {},
  "timeoutType": {}
}
```

Provides details of the <code>LambdaFunctionTimedOut</code> event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledEventId|object|true|none|none|
|startedEventId|object|true|none|none|
|timeoutType|object|false|none|none|

<h2 id="tocS_ScheduleLambdaFunctionFailedEventAttributes">ScheduleLambdaFunctionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaschedulelambdafunctionfailedeventattributes"></a>
<a id="schema_ScheduleLambdaFunctionFailedEventAttributes"></a>
<a id="tocSschedulelambdafunctionfailedeventattributes"></a>
<a id="tocsschedulelambdafunctionfailedeventattributes"></a>

```json
{
  "id": {},
  "name": {},
  "cause": {},
  "decisionTaskCompletedEventId": {}
}
```

Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|cause|object|true|none|none|
|decisionTaskCompletedEventId|object|true|none|none|

<h2 id="tocS_StartLambdaFunctionFailedEventAttributes">StartLambdaFunctionFailedEventAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastartlambdafunctionfailedeventattributes"></a>
<a id="schema_StartLambdaFunctionFailedEventAttributes"></a>
<a id="tocSstartlambdafunctionfailedeventattributes"></a>
<a id="tocsstartlambdafunctionfailedeventattributes"></a>

```json
{
  "scheduledEventId": {},
  "cause": {},
  "message": {}
}
```

Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduledEventId|object|false|none|none|
|cause|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_HistoryEvent">HistoryEvent</h2>
<!-- backwards compatibility -->
<a id="schemahistoryevent"></a>
<a id="schema_HistoryEvent"></a>
<a id="tocShistoryevent"></a>
<a id="tocshistoryevent"></a>

```json
{
  "eventTimestamp": {},
  "eventType": {},
  "eventId": {},
  "workflowExecutionStartedEventAttributes": {
    "input": {},
    "executionStartToCloseTimeout": {},
    "taskStartToCloseTimeout": {},
    "childPolicy": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "workflowType": {
      "name": {},
      "version": {}
    },
    "tagList": {},
    "continuedExecutionRunId": {},
    "parentWorkflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "parentInitiatedEventId": {},
    "lambdaRole": {}
  },
  "workflowExecutionCompletedEventAttributes": {
    "result": {},
    "decisionTaskCompletedEventId": {}
  },
  "completeWorkflowExecutionFailedEventAttributes": {
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "workflowExecutionFailedEventAttributes": {
    "reason": {},
    "details": {},
    "decisionTaskCompletedEventId": {}
  },
  "failWorkflowExecutionFailedEventAttributes": {
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "workflowExecutionTimedOutEventAttributes": {
    "timeoutType": {},
    "childPolicy": {}
  },
  "workflowExecutionCanceledEventAttributes": {
    "details": {},
    "decisionTaskCompletedEventId": {}
  },
  "cancelWorkflowExecutionFailedEventAttributes": {
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "workflowExecutionContinuedAsNewEventAttributes": {
    "input": {},
    "decisionTaskCompletedEventId": {},
    "newExecutionRunId": {},
    "executionStartToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "taskStartToCloseTimeout": {},
    "childPolicy": {},
    "tagList": {},
    "workflowType": {
      "name": {},
      "version": {}
    },
    "lambdaRole": {}
  },
  "continueAsNewWorkflowExecutionFailedEventAttributes": {
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "workflowExecutionTerminatedEventAttributes": {
    "reason": {},
    "details": {},
    "childPolicy": {},
    "cause": {}
  },
  "workflowExecutionCancelRequestedEventAttributes": {
    "externalWorkflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "externalInitiatedEventId": {},
    "cause": {}
  },
  "decisionTaskScheduledEventAttributes": {
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "startToCloseTimeout": {}
  },
  "decisionTaskStartedEventAttributes": {
    "identity": {},
    "scheduledEventId": {}
  },
  "decisionTaskCompletedEventAttributes": {
    "executionContext": {},
    "scheduledEventId": {},
    "startedEventId": {}
  },
  "decisionTaskTimedOutEventAttributes": {
    "timeoutType": {},
    "scheduledEventId": {},
    "startedEventId": {}
  },
  "activityTaskScheduledEventAttributes": {
    "activityType": {
      "name": {},
      "version": {}
    },
    "activityId": {},
    "input": {},
    "control": {},
    "scheduleToStartTimeout": {},
    "scheduleToCloseTimeout": {},
    "startToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "decisionTaskCompletedEventId": {},
    "heartbeatTimeout": {}
  },
  "activityTaskStartedEventAttributes": {
    "identity": {},
    "scheduledEventId": {}
  },
  "activityTaskCompletedEventAttributes": {
    "result": {},
    "scheduledEventId": {},
    "startedEventId": {}
  },
  "activityTaskFailedEventAttributes": {
    "reason": {},
    "details": {},
    "scheduledEventId": {},
    "startedEventId": {}
  },
  "activityTaskTimedOutEventAttributes": {
    "timeoutType": {},
    "scheduledEventId": {},
    "startedEventId": {},
    "details": {}
  },
  "activityTaskCanceledEventAttributes": {
    "details": {},
    "scheduledEventId": {},
    "startedEventId": {},
    "latestCancelRequestedEventId": {}
  },
  "activityTaskCancelRequestedEventAttributes": {
    "decisionTaskCompletedEventId": {},
    "activityId": {}
  },
  "workflowExecutionSignaledEventAttributes": {
    "signalName": {},
    "input": {},
    "externalWorkflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "externalInitiatedEventId": {}
  },
  "markerRecordedEventAttributes": {
    "markerName": {},
    "details": {},
    "decisionTaskCompletedEventId": {}
  },
  "recordMarkerFailedEventAttributes": {
    "markerName": {},
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "timerStartedEventAttributes": {
    "timerId": {},
    "control": {},
    "startToFireTimeout": {},
    "decisionTaskCompletedEventId": {}
  },
  "timerFiredEventAttributes": {
    "timerId": {},
    "startedEventId": {}
  },
  "timerCanceledEventAttributes": {
    "timerId": {},
    "startedEventId": {},
    "decisionTaskCompletedEventId": {}
  },
  "startChildWorkflowExecutionInitiatedEventAttributes": {
    "workflowId": {},
    "workflowType": {
      "name": {},
      "version": {}
    },
    "control": {},
    "input": {},
    "executionStartToCloseTimeout": {},
    "taskList": {
      "name": {}
    },
    "taskPriority": {},
    "decisionTaskCompletedEventId": {},
    "childPolicy": {},
    "taskStartToCloseTimeout": {},
    "tagList": {},
    "lambdaRole": {}
  },
  "childWorkflowExecutionStartedEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "initiatedEventId": {}
  },
  "childWorkflowExecutionCompletedEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "result": {},
    "initiatedEventId": {},
    "startedEventId": {}
  },
  "childWorkflowExecutionFailedEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "reason": {},
    "details": {},
    "initiatedEventId": {},
    "startedEventId": {}
  },
  "childWorkflowExecutionTimedOutEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "timeoutType": {},
    "initiatedEventId": {},
    "startedEventId": {}
  },
  "childWorkflowExecutionCanceledEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "details": {},
    "initiatedEventId": {},
    "startedEventId": {}
  },
  "childWorkflowExecutionTerminatedEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "initiatedEventId": {},
    "startedEventId": {}
  },
  "signalExternalWorkflowExecutionInitiatedEventAttributes": {
    "workflowId": {},
    "runId": {},
    "signalName": {},
    "input": {},
    "decisionTaskCompletedEventId": {},
    "control": {}
  },
  "externalWorkflowExecutionSignaledEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "initiatedEventId": {}
  },
  "signalExternalWorkflowExecutionFailedEventAttributes": {
    "workflowId": {},
    "runId": {},
    "cause": {},
    "initiatedEventId": {},
    "decisionTaskCompletedEventId": {},
    "control": {}
  },
  "externalWorkflowExecutionCancelRequestedEventAttributes": {
    "workflowExecution": {
      "workflowId": {},
      "runId": {}
    },
    "initiatedEventId": {}
  },
  "requestCancelExternalWorkflowExecutionInitiatedEventAttributes": {
    "workflowId": {},
    "runId": {},
    "decisionTaskCompletedEventId": {},
    "control": {}
  },
  "requestCancelExternalWorkflowExecutionFailedEventAttributes": {
    "workflowId": {},
    "runId": {},
    "cause": {},
    "initiatedEventId": {},
    "decisionTaskCompletedEventId": {},
    "control": {}
  },
  "scheduleActivityTaskFailedEventAttributes": {
    "activityType": {
      "name": {},
      "version": {}
    },
    "activityId": {},
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "requestCancelActivityTaskFailedEventAttributes": {
    "activityId": {},
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "startTimerFailedEventAttributes": {
    "timerId": {},
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "cancelTimerFailedEventAttributes": {
    "timerId": {},
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "startChildWorkflowExecutionFailedEventAttributes": {
    "workflowType": {
      "name": {},
      "version": {}
    },
    "cause": {},
    "workflowId": {},
    "initiatedEventId": {},
    "decisionTaskCompletedEventId": {},
    "control": {}
  },
  "lambdaFunctionScheduledEventAttributes": {
    "id": {},
    "name": {},
    "control": {},
    "input": {},
    "startToCloseTimeout": {},
    "decisionTaskCompletedEventId": {}
  },
  "lambdaFunctionStartedEventAttributes": {
    "scheduledEventId": {}
  },
  "lambdaFunctionCompletedEventAttributes": {
    "scheduledEventId": {},
    "startedEventId": {},
    "result": {}
  },
  "lambdaFunctionFailedEventAttributes": {
    "scheduledEventId": {},
    "startedEventId": {},
    "reason": {},
    "details": {}
  },
  "lambdaFunctionTimedOutEventAttributes": {
    "scheduledEventId": {},
    "startedEventId": {},
    "timeoutType": {}
  },
  "scheduleLambdaFunctionFailedEventAttributes": {
    "id": {},
    "name": {},
    "cause": {},
    "decisionTaskCompletedEventId": {}
  },
  "startLambdaFunctionFailedEventAttributes": {
    "scheduledEventId": {},
    "cause": {},
    "message": {}
  }
}
```

<p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTimestamp|object|true|none|none|
|eventType|object|true|none|none|
|eventId|object|true|none|none|
|workflowExecutionStartedEventAttributes|object|false|none|none|
|workflowExecutionCompletedEventAttributes|object|false|none|none|
|completeWorkflowExecutionFailedEventAttributes|object|false|none|none|
|workflowExecutionFailedEventAttributes|object|false|none|none|
|failWorkflowExecutionFailedEventAttributes|object|false|none|none|
|workflowExecutionTimedOutEventAttributes|object|false|none|none|
|workflowExecutionCanceledEventAttributes|object|false|none|none|
|cancelWorkflowExecutionFailedEventAttributes|object|false|none|none|
|workflowExecutionContinuedAsNewEventAttributes|object|false|none|none|
|continueAsNewWorkflowExecutionFailedEventAttributes|object|false|none|none|
|workflowExecutionTerminatedEventAttributes|object|false|none|none|
|workflowExecutionCancelRequestedEventAttributes|object|false|none|none|
|decisionTaskScheduledEventAttributes|object|false|none|none|
|decisionTaskStartedEventAttributes|object|false|none|none|
|decisionTaskCompletedEventAttributes|object|false|none|none|
|decisionTaskTimedOutEventAttributes|object|false|none|none|
|activityTaskScheduledEventAttributes|object|false|none|none|
|activityTaskStartedEventAttributes|object|false|none|none|
|activityTaskCompletedEventAttributes|object|false|none|none|
|activityTaskFailedEventAttributes|object|false|none|none|
|activityTaskTimedOutEventAttributes|object|false|none|none|
|activityTaskCanceledEventAttributes|object|false|none|none|
|activityTaskCancelRequestedEventAttributes|object|false|none|none|
|workflowExecutionSignaledEventAttributes|object|false|none|none|
|markerRecordedEventAttributes|object|false|none|none|
|recordMarkerFailedEventAttributes|object|false|none|none|
|timerStartedEventAttributes|object|false|none|none|
|timerFiredEventAttributes|object|false|none|none|
|timerCanceledEventAttributes|object|false|none|none|
|startChildWorkflowExecutionInitiatedEventAttributes|object|false|none|none|
|childWorkflowExecutionStartedEventAttributes|object|false|none|none|
|childWorkflowExecutionCompletedEventAttributes|object|false|none|none|
|childWorkflowExecutionFailedEventAttributes|object|false|none|none|
|childWorkflowExecutionTimedOutEventAttributes|object|false|none|none|
|childWorkflowExecutionCanceledEventAttributes|object|false|none|none|
|childWorkflowExecutionTerminatedEventAttributes|object|false|none|none|
|signalExternalWorkflowExecutionInitiatedEventAttributes|object|false|none|none|
|externalWorkflowExecutionSignaledEventAttributes|object|false|none|none|
|signalExternalWorkflowExecutionFailedEventAttributes|object|false|none|none|
|externalWorkflowExecutionCancelRequestedEventAttributes|object|false|none|none|
|requestCancelExternalWorkflowExecutionInitiatedEventAttributes|object|false|none|none|
|requestCancelExternalWorkflowExecutionFailedEventAttributes|object|false|none|none|
|scheduleActivityTaskFailedEventAttributes|object|false|none|none|
|requestCancelActivityTaskFailedEventAttributes|object|false|none|none|
|startTimerFailedEventAttributes|object|false|none|none|
|cancelTimerFailedEventAttributes|object|false|none|none|
|startChildWorkflowExecutionFailedEventAttributes|object|false|none|none|
|lambdaFunctionScheduledEventAttributes|object|false|none|none|
|lambdaFunctionStartedEventAttributes|object|false|none|none|
|lambdaFunctionCompletedEventAttributes|object|false|none|none|
|lambdaFunctionFailedEventAttributes|object|false|none|none|
|lambdaFunctionTimedOutEventAttributes|object|false|none|none|
|scheduleLambdaFunctionFailedEventAttributes|object|false|none|none|
|startLambdaFunctionFailedEventAttributes|object|false|none|none|

<h2 id="tocS_LambdaFunctionTimeoutType">LambdaFunctionTimeoutType</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctiontimeouttype"></a>
<a id="schema_LambdaFunctionTimeoutType"></a>
<a id="tocSlambdafunctiontimeouttype"></a>
<a id="tocslambdafunctiontimeouttype"></a>

```json
"START_TO_CLOSE"
```

<h2 id="tocS_ResourceTagList">ResourceTagList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetaglist"></a>
<a id="schema_ResourceTagList"></a>
<a id="tocSresourcetaglist"></a>
<a id="tocsresourcetaglist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_MarkerName">MarkerName</h2>
<!-- backwards compatibility -->
<a id="schemamarkername"></a>
<a id="schema_MarkerName"></a>
<a id="tocSmarkername"></a>
<a id="tocsmarkername"></a>

```json
"string"
```

<h2 id="tocS_OpenDecisionTasksCount">OpenDecisionTasksCount</h2>
<!-- backwards compatibility -->
<a id="schemaopendecisiontaskscount"></a>
<a id="schema_OpenDecisionTasksCount"></a>
<a id="tocSopendecisiontaskscount"></a>
<a id="tocsopendecisiontaskscount"></a>

```json
0
```

<h2 id="tocS_Truncated">Truncated</h2>
<!-- backwards compatibility -->
<a id="schematruncated"></a>
<a id="schema_Truncated"></a>
<a id="tocStruncated"></a>
<a id="tocstruncated"></a>

```json
true
```

<h2 id="tocS_RecordMarkerFailedCause">RecordMarkerFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemarecordmarkerfailedcause"></a>
<a id="schema_RecordMarkerFailedCause"></a>
<a id="tocSrecordmarkerfailedcause"></a>
<a id="tocsrecordmarkerfailedcause"></a>

```json
"OPERATION_NOT_PERMITTED"
```

<h2 id="tocS_RequestCancelActivityTaskFailedCause">RequestCancelActivityTaskFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelactivitytaskfailedcause"></a>
<a id="schema_RequestCancelActivityTaskFailedCause"></a>
<a id="tocSrequestcancelactivitytaskfailedcause"></a>
<a id="tocsrequestcancelactivitytaskfailedcause"></a>

```json
"ACTIVITY_ID_UNKNOWN"
```

<h2 id="tocS_WorkflowId">WorkflowId</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowid"></a>
<a id="schema_WorkflowId"></a>
<a id="tocSworkflowid"></a>
<a id="tocsworkflowid"></a>

```json
"string"
```

<h2 id="tocS_WorkflowRunIdOptional">WorkflowRunIdOptional</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrunidoptional"></a>
<a id="schema_WorkflowRunIdOptional"></a>
<a id="tocSworkflowrunidoptional"></a>
<a id="tocsworkflowrunidoptional"></a>

```json
"string"
```

<h2 id="tocS_RequestCancelExternalWorkflowExecutionFailedCause">RequestCancelExternalWorkflowExecutionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemarequestcancelexternalworkflowexecutionfailedcause"></a>
<a id="schema_RequestCancelExternalWorkflowExecutionFailedCause"></a>
<a id="tocSrequestcancelexternalworkflowexecutionfailedcause"></a>
<a id="tocsrequestcancelexternalworkflowexecutionfailedcause"></a>

```json
"UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"
```

<h2 id="tocS_ResourceTagKey">ResourceTagKey</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagkey"></a>
<a id="schema_ResourceTagKey"></a>
<a id="tocSresourcetagkey"></a>
<a id="tocsresourcetagkey"></a>

```json
"string"
```

<h2 id="tocS_ResourceTagValue">ResourceTagValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagvalue"></a>
<a id="schema_ResourceTagValue"></a>
<a id="tocSresourcetagvalue"></a>
<a id="tocsresourcetagvalue"></a>

```json
"string"
```

<h2 id="tocS_ResourceTag">ResourceTag</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetag"></a>
<a id="schema_ResourceTag"></a>
<a id="tocSresourcetag"></a>
<a id="tocsresourcetag"></a>

```json
{
  "key": {},
  "value": {}
}
```

<p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|false|none|none|

<h2 id="tocS_ResourceTagKeyList">ResourceTagKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagkeylist"></a>
<a id="schema_ResourceTagKeyList"></a>
<a id="tocSresourcetagkeylist"></a>
<a id="tocsresourcetagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WorkflowRunId">WorkflowRunId</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrunid"></a>
<a id="schema_WorkflowRunId"></a>
<a id="tocSworkflowrunid"></a>
<a id="tocsworkflowrunid"></a>

```json
"string"
```

<h2 id="tocS_ScheduleActivityTaskFailedCause">ScheduleActivityTaskFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemascheduleactivitytaskfailedcause"></a>
<a id="schema_ScheduleActivityTaskFailedCause"></a>
<a id="tocSscheduleactivitytaskfailedcause"></a>
<a id="tocsscheduleactivitytaskfailedcause"></a>

```json
"ACTIVITY_TYPE_DEPRECATED"
```

<h2 id="tocS_ScheduleLambdaFunctionFailedCause">ScheduleLambdaFunctionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemaschedulelambdafunctionfailedcause"></a>
<a id="schema_ScheduleLambdaFunctionFailedCause"></a>
<a id="tocSschedulelambdafunctionfailedcause"></a>
<a id="tocsschedulelambdafunctionfailedcause"></a>

```json
"ID_ALREADY_IN_USE"
```

<h2 id="tocS_SignalName">SignalName</h2>
<!-- backwards compatibility -->
<a id="schemasignalname"></a>
<a id="schema_SignalName"></a>
<a id="tocSsignalname"></a>
<a id="tocssignalname"></a>

```json
"string"
```

<h2 id="tocS_SignalExternalWorkflowExecutionFailedCause">SignalExternalWorkflowExecutionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemasignalexternalworkflowexecutionfailedcause"></a>
<a id="schema_SignalExternalWorkflowExecutionFailedCause"></a>
<a id="tocSsignalexternalworkflowexecutionfailedcause"></a>
<a id="tocssignalexternalworkflowexecutionfailedcause"></a>

```json
"UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"
```

<h2 id="tocS_StartChildWorkflowExecutionFailedCause">StartChildWorkflowExecutionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemastartchildworkflowexecutionfailedcause"></a>
<a id="schema_StartChildWorkflowExecutionFailedCause"></a>
<a id="tocSstartchildworkflowexecutionfailedcause"></a>
<a id="tocsstartchildworkflowexecutionfailedcause"></a>

```json
"WORKFLOW_TYPE_DOES_NOT_EXIST"
```

<h2 id="tocS_StartLambdaFunctionFailedCause">StartLambdaFunctionFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemastartlambdafunctionfailedcause"></a>
<a id="schema_StartLambdaFunctionFailedCause"></a>
<a id="tocSstartlambdafunctionfailedcause"></a>
<a id="tocsstartlambdafunctionfailedcause"></a>

```json
"ASSUME_ROLE_FAILED"
```

<h2 id="tocS_StartTimerFailedCause">StartTimerFailedCause</h2>
<!-- backwards compatibility -->
<a id="schemastarttimerfailedcause"></a>
<a id="schema_StartTimerFailedCause"></a>
<a id="tocSstarttimerfailedcause"></a>
<a id="tocsstarttimerfailedcause"></a>

```json
"TIMER_ID_ALREADY_IN_USE"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
"string"
```

<h2 id="tocS_TerminateReason">TerminateReason</h2>
<!-- backwards compatibility -->
<a id="schematerminatereason"></a>
<a id="schema_TerminateReason"></a>
<a id="tocSterminatereason"></a>
<a id="tocsterminatereason"></a>

```json
"string"
```

<h2 id="tocS_VersionOptional">VersionOptional</h2>
<!-- backwards compatibility -->
<a id="schemaversionoptional"></a>
<a id="schema_VersionOptional"></a>
<a id="tocSversionoptional"></a>
<a id="tocsversionoptional"></a>

```json
"string"
```

<h2 id="tocS_WorkflowExecutionCancelRequestedCause">WorkflowExecutionCancelRequestedCause</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncancelrequestedcause"></a>
<a id="schema_WorkflowExecutionCancelRequestedCause"></a>
<a id="tocSworkflowexecutioncancelrequestedcause"></a>
<a id="tocsworkflowexecutioncancelrequestedcause"></a>

```json
"CHILD_POLICY_APPLIED"
```

<h2 id="tocS_WorkflowExecutionConfiguration">WorkflowExecutionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionconfiguration"></a>
<a id="schema_WorkflowExecutionConfiguration"></a>
<a id="tocSworkflowexecutionconfiguration"></a>
<a id="tocsworkflowexecutionconfiguration"></a>

```json
{
  "taskStartToCloseTimeout": {},
  "executionStartToCloseTimeout": {},
  "taskList": {
    "name": {}
  },
  "taskPriority": {},
  "childPolicy": {},
  "lambdaRole": {}
}
```

The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskStartToCloseTimeout|object|true|none|none|
|executionStartToCloseTimeout|object|true|none|none|
|taskList|object|true|none|none|
|taskPriority|object|false|none|none|
|childPolicy|object|true|none|none|
|lambdaRole|object|false|none|none|

<h2 id="tocS_WorkflowExecutionInfo">WorkflowExecutionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioninfo"></a>
<a id="schema_WorkflowExecutionInfo"></a>
<a id="tocSworkflowexecutioninfo"></a>
<a id="tocsworkflowexecutioninfo"></a>

```json
{
  "execution": {
    "workflowId": {},
    "runId": {}
  },
  "workflowType": {
    "name": {},
    "version": {}
  },
  "startTimestamp": {},
  "closeTimestamp": {},
  "executionStatus": {},
  "closeStatus": {},
  "parent": {
    "workflowId": {},
    "runId": {}
  },
  "tagList": {},
  "cancelRequested": {}
}
```

Contains information about a workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution|object|true|none|none|
|workflowType|object|true|none|none|
|startTimestamp|object|true|none|none|
|closeTimestamp|object|false|none|none|
|executionStatus|object|true|none|none|
|closeStatus|object|false|none|none|
|parent|object|false|none|none|
|tagList|object|false|none|none|
|cancelRequested|object|false|none|none|

<h2 id="tocS_WorkflowExecutionOpenCounts">WorkflowExecutionOpenCounts</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionopencounts"></a>
<a id="schema_WorkflowExecutionOpenCounts"></a>
<a id="tocSworkflowexecutionopencounts"></a>
<a id="tocsworkflowexecutionopencounts"></a>

```json
{
  "openActivityTasks": {},
  "openDecisionTasks": {},
  "openTimers": {},
  "openChildWorkflowExecutions": {},
  "openLambdaFunctions": {}
}
```

Contains the counts of open tasks, child workflow executions and timers for a workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openActivityTasks|object|true|none|none|
|openDecisionTasks|object|true|none|none|
|openTimers|object|true|none|none|
|openChildWorkflowExecutions|object|true|none|none|
|openLambdaFunctions|object|false|none|none|

<h2 id="tocS_WorkflowExecutionInfoList">WorkflowExecutionInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioninfolist"></a>
<a id="schema_WorkflowExecutionInfoList"></a>
<a id="tocSworkflowexecutioninfolist"></a>
<a id="tocsworkflowexecutioninfolist"></a>

```json
[
  {
    "execution": {
      "workflowId": {},
      "runId": {}
    },
    "workflowType": {
      "name": {},
      "version": {}
    },
    "startTimestamp": {},
    "closeTimestamp": {},
    "executionStatus": {},
    "closeStatus": {},
    "parent": {
      "workflowId": {},
      "runId": {}
    },
    "tagList": {},
    "cancelRequested": {}
  }
]
```

<h2 id="tocS_WorkflowExecutionTerminatedCause">WorkflowExecutionTerminatedCause</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionterminatedcause"></a>
<a id="schema_WorkflowExecutionTerminatedCause"></a>
<a id="tocSworkflowexecutionterminatedcause"></a>
<a id="tocsworkflowexecutionterminatedcause"></a>

```json
"CHILD_POLICY_APPLIED"
```

<h2 id="tocS_WorkflowTypeConfiguration">WorkflowTypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtypeconfiguration"></a>
<a id="schema_WorkflowTypeConfiguration"></a>
<a id="tocSworkflowtypeconfiguration"></a>
<a id="tocsworkflowtypeconfiguration"></a>

```json
{
  "defaultTaskStartToCloseTimeout": {},
  "defaultExecutionStartToCloseTimeout": {},
  "defaultTaskList": {
    "name": {}
  },
  "defaultTaskPriority": {},
  "defaultChildPolicy": {},
  "defaultLambdaRole": {}
}
```

The configuration settings of a workflow type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultTaskStartToCloseTimeout|object|false|none|none|
|defaultExecutionStartToCloseTimeout|object|false|none|none|
|defaultTaskList|object|false|none|none|
|defaultTaskPriority|object|false|none|none|
|defaultChildPolicy|object|false|none|none|
|defaultLambdaRole|object|false|none|none|

<h2 id="tocS_WorkflowTypeInfo">WorkflowTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtypeinfo"></a>
<a id="schema_WorkflowTypeInfo"></a>
<a id="tocSworkflowtypeinfo"></a>
<a id="tocsworkflowtypeinfo"></a>

```json
{
  "workflowType": {
    "name": {},
    "version": {}
  },
  "status": {},
  "description": {},
  "creationDate": {},
  "deprecationDate": {}
}
```

Contains information about a workflow type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowType|object|true|none|none|
|status|object|true|none|none|
|description|object|false|none|none|
|creationDate|object|true|none|none|
|deprecationDate|object|false|none|none|

<h2 id="tocS_WorkflowTypeInfoList">WorkflowTypeInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtypeinfolist"></a>
<a id="schema_WorkflowTypeInfoList"></a>
<a id="tocSworkflowtypeinfolist"></a>
<a id="tocsworkflowtypeinfolist"></a>

```json
[
  {
    "workflowType": {
      "name": {},
      "version": {}
    },
    "status": {},
    "description": {},
    "creationDate": {},
    "deprecationDate": {}
  }
]
```
