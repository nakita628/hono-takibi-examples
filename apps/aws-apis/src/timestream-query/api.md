<h1 id="amazon-timestream-query">Amazon Timestream Query v2018-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Timestream Query </fullname> <p/>

Base URLs:

* <a href="http://query.timestream.us-east-1.amazonaws.com">http://query.timestream.us-east-1.amazonaws.com</a> - The Timestream Query multi-region endpoint

* <a href="https://query.timestream.us-east-1.amazonaws.com">https://query.timestream.us-east-1.amazonaws.com</a> - The Timestream Query multi-region endpoint

* <a href="http://query.timestream.cn-north-1.amazonaws.com.cn">http://query.timestream.cn-north-1.amazonaws.com.cn</a> - The Timestream Query endpoint for China (Beijing) and China (Ningxia)

* <a href="https://query.timestream.cn-north-1.amazonaws.com.cn">https://query.timestream.cn-north-1.amazonaws.com.cn</a> - The Timestream Query endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/timestream/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-timestream-query-default">Default</h1>

## CancelQuery

<a id="opIdCancelQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.CancelQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.CancelQuery' \
  -d '{
    "QueryId": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.CancelQuery`

 Cancels a query that has been issued. Cancellation is provided only if the query has not completed running before the cancellation request was issued. Because cancellation is an idempotent operation, subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.cancel-query.html">code sample</a> for details. 

> Body parameter

```json
{
  "QueryId": {}
}
```

<h3 id="cancelquery-parameters">Parameters</h3>

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
|body|body|[CancelQueryRequest](#schemacancelqueryrequest)|true|none|
|» QueryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.CancelQuery|

> Example responses

> 200 Response

```json
{
  "CancellationMessage": {}
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

<h3 id="cancelquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelQueryResponse](#schemacancelqueryresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateScheduledQuery

<a id="opIdCreateScheduledQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.CreateScheduledQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.CreateScheduledQuery' \
  -d '{
    "Name": {},
    "QueryString": {},
    "ScheduleConfiguration": {
      "ScheduleExpression": {}
    },
    "NotificationConfiguration": {
      "SnsConfiguration": {
        "TopicArn": {}
      }
    },
    "TargetConfiguration": {
      "TimestreamConfiguration": {
        "DatabaseName": {},
        "TableName": {},
        "TimeColumn": {},
        "DimensionMappings": {},
        "MultiMeasureMappings": {
          "TargetMultiMeasureName": {},
          "MultiMeasureAttributeMappings": {}
        },
        "MixedMeasureMappings": {},
        "MeasureNameColumn": {}
      }
    },
    "ClientToken": {},
    "ScheduledQueryExecutionRoleArn": {},
    "Tags": {},
    "KmsKeyId": {},
    "ErrorReportConfiguration": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.CreateScheduledQuery`

 Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the <code>ScheduledQueryExecutionRoleArn</code> parameter to run the query. You can use the <code>NotificationConfiguration</code> parameter to configure notification for your scheduled query operations.

> Body parameter

```json
{
  "Name": {},
  "QueryString": {},
  "ScheduleConfiguration": {
    "ScheduleExpression": {}
  },
  "NotificationConfiguration": {
    "SnsConfiguration": {
      "TopicArn": {}
    }
  },
  "TargetConfiguration": {
    "TimestreamConfiguration": {
      "DatabaseName": {},
      "TableName": {},
      "TimeColumn": {},
      "DimensionMappings": {},
      "MultiMeasureMappings": {
        "TargetMultiMeasureName": {},
        "MultiMeasureAttributeMappings": {}
      },
      "MixedMeasureMappings": {},
      "MeasureNameColumn": {}
    }
  },
  "ClientToken": {},
  "ScheduledQueryExecutionRoleArn": {},
  "Tags": {},
  "KmsKeyId": {},
  "ErrorReportConfiguration": {
    "S3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {}
    }
  }
}
```

<h3 id="createscheduledquery-parameters">Parameters</h3>

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
|body|body|[CreateScheduledQueryRequest](#schemacreatescheduledqueryrequest)|true|none|
|» Name|body|object|true|none|
|» QueryString|body|object|true|none|
|» ScheduleConfiguration|body|object|true|none|
|» » ScheduleExpression|body|object|true|none|
|» NotificationConfiguration|body|object|true|none|
|» » SnsConfiguration|body|object|true|none|
|» » » TopicArn|body|object|true|none|
|» TargetConfiguration|body|object|false|none|
|» » TimestreamConfiguration|body|object|true|none|
|» » » DatabaseName|body|object|true|none|
|» » » TableName|body|object|true|none|
|» » » TimeColumn|body|object|true|none|
|» » » DimensionMappings|body|object|true|none|
|» » » MultiMeasureMappings|body|object|false|none|
|» » » » TargetMultiMeasureName|body|object|false|none|
|» » » » MultiMeasureAttributeMappings|body|object|true|none|
|» » » MixedMeasureMappings|body|object|false|none|
|» » » MeasureNameColumn|body|object|false|none|
|» ClientToken|body|object|false|none|
|» ScheduledQueryExecutionRoleArn|body|object|true|none|
|» Tags|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» ErrorReportConfiguration|body|object|true|none|
|» » S3Configuration|body|object|true|none|
|» » » BucketName|body|object|true|none|
|» » » ObjectKeyPrefix|body|object|false|none|
|» » » EncryptionOption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.CreateScheduledQuery|

> Example responses

> 200 Response

```json
{
  "Arn": {}
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

<h3 id="createscheduledquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateScheduledQueryResponse](#schemacreatescheduledqueryresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteScheduledQuery

<a id="opIdDeleteScheduledQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DeleteScheduledQuery' \
  -d '{
    "ScheduledQueryArn": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery`

Deletes a given scheduled query. This is an irreversible operation. 

> Body parameter

```json
{
  "ScheduledQueryArn": {}
}
```

<h3 id="deletescheduledquery-parameters">Parameters</h3>

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
|body|body|[DeleteScheduledQueryRequest](#schemadeletescheduledqueryrequest)|true|none|
|» ScheduledQueryArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DeleteScheduledQuery|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletescheduledquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpoints

<a id="opIdDescribeEndpoints"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DescribeEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DescribeEndpoints' \
  -d '{}'
```

`POST /#X-Amz-Target=Timestream_20181101.DescribeEndpoints`

<p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>it is not recommended that you use this API unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream </a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>

> Body parameter

```json
{}
```

<h3 id="describeendpoints-parameters">Parameters</h3>

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
|body|body|[DescribeEndpointsRequest](#schemadescribeendpointsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DescribeEndpoints|

> Example responses

> 200 Response

```json
{
  "Endpoints": {}
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

<h3 id="describeendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointsResponse](#schemadescribeendpointsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScheduledQuery

<a id="opIdDescribeScheduledQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DescribeScheduledQuery' \
  -d '{
    "ScheduledQueryArn": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery`

Provides detailed information about a scheduled query.

> Body parameter

```json
{
  "ScheduledQueryArn": {}
}
```

<h3 id="describescheduledquery-parameters">Parameters</h3>

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
|body|body|[DescribeScheduledQueryRequest](#schemadescribescheduledqueryrequest)|true|none|
|» ScheduledQueryArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DescribeScheduledQuery|

> Example responses

> 200 Response

```json
{
  "ScheduledQuery": {
    "Arn": {},
    "Name": {},
    "QueryString": {},
    "CreationTime": {},
    "State": {},
    "PreviousInvocationTime": {},
    "NextInvocationTime": {},
    "ScheduleConfiguration": {
      "ScheduleExpression": {}
    },
    "NotificationConfiguration": {
      "SnsConfiguration": {
        "TopicArn": {}
      }
    },
    "TargetConfiguration": {
      "TimestreamConfiguration": {
        "DatabaseName": {},
        "TableName": {},
        "TimeColumn": {},
        "DimensionMappings": {},
        "MultiMeasureMappings": {
          "TargetMultiMeasureName": {},
          "MultiMeasureAttributeMappings": {}
        },
        "MixedMeasureMappings": {},
        "MeasureNameColumn": {}
      }
    },
    "ScheduledQueryExecutionRoleArn": {},
    "KmsKeyId": {},
    "ErrorReportConfiguration": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {}
      }
    },
    "LastRunSummary": {
      "InvocationTime": {},
      "TriggerTime": {},
      "RunStatus": {},
      "ExecutionStats": {
        "ExecutionTimeInMillis": {},
        "DataWrites": {},
        "BytesMetered": {},
        "RecordsIngested": {},
        "QueryResultRows": {}
      },
      "ErrorReportLocation": {
        "S3ReportLocation": {
          "BucketName": {},
          "ObjectKey": {}
        }
      },
      "FailureReason": {}
    },
    "RecentlyFailedRuns": {}
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

<h3 id="describescheduledquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScheduledQueryResponse](#schemadescribescheduledqueryresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteScheduledQuery

<a id="opIdExecuteScheduledQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ExecuteScheduledQuery' \
  -d '{
    "ScheduledQueryArn": {},
    "InvocationTime": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery`

 You can use this API to run a scheduled query manually. 

> Body parameter

```json
{
  "ScheduledQueryArn": {},
  "InvocationTime": {},
  "ClientToken": {}
}
```

<h3 id="executescheduledquery-parameters">Parameters</h3>

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
|body|body|[ExecuteScheduledQueryRequest](#schemaexecutescheduledqueryrequest)|true|none|
|» ScheduledQueryArn|body|object|true|none|
|» InvocationTime|body|object|true|none|
|» ClientToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ExecuteScheduledQuery|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="executescheduledquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListScheduledQueries

<a id="opIdListScheduledQueries"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ListScheduledQueries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ListScheduledQueries' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ListScheduledQueries`

Gets a list of all scheduled queries in the caller's Amazon account and Region. <code>ListScheduledQueries</code> is eventually consistent. 

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listscheduledqueries-parameters">Parameters</h3>

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
|body|body|[ListScheduledQueriesRequest](#schemalistscheduledqueriesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ListScheduledQueries|

> Example responses

> 200 Response

```json
{
  "ScheduledQueries": {},
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

<h3 id="listscheduledqueries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListScheduledQueriesResponse](#schemalistscheduledqueriesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ListTagsForResource' \
  -d '{
    "ResourceARN": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ListTagsForResource`

List all tags on a Timestream query resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PrepareQuery

<a id="opIdPrepareQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.PrepareQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.PrepareQuery' \
  -d '{
    "QueryString": {},
    "ValidateOnly": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.PrepareQuery`

A synchronous operation that allows you to submit a query with parameters to be stored by Timestream for later running. Timestream only supports using this operation with the <code>PrepareQueryRequest$ValidateOnly</code> set to <code>true</code>. 

> Body parameter

```json
{
  "QueryString": {},
  "ValidateOnly": {}
}
```

<h3 id="preparequery-parameters">Parameters</h3>

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
|body|body|[PrepareQueryRequest](#schemapreparequeryrequest)|true|none|
|» QueryString|body|object|true|none|
|» ValidateOnly|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.PrepareQuery|

> Example responses

> 200 Response

```json
{
  "QueryString": {},
  "Columns": {},
  "Parameters": {}
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

<h3 id="preparequery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PrepareQueryResponse](#schemapreparequeryresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Query

<a id="opIdQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.Query' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.Query' \
  -d '{
    "QueryString": {},
    "ClientToken": {},
    "NextToken": {},
    "MaxRows": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.Query`

<p> <code>Query</code> is a synchronous operation that enables you to run a query against your Amazon Timestream data. <code>Query</code> will time out after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. See the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.run-query.html">code sample</a> for details. </p> <p>Your query request will fail in the following cases:</p> <ul> <li> <p> If you submit a <code>Query</code> request with the same client token outside of the 5-minute idempotency window. </p> </li> <li> <p> If you submit a <code>Query</code> request with the same client token, but change other parameters, within the 5-minute idempotency window. </p> </li> <li> <p> If the size of the row (including the query metadata) exceeds 1 MB, then the query will fail with the following error message: </p> <p> <code>Query aborted as max page response size has been exceeded by the output result row</code> </p> </li> <li> <p> If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an <code>Invalid pagination token</code> error. </p> </li> </ul>

> Body parameter

```json
{
  "QueryString": {},
  "ClientToken": {},
  "NextToken": {},
  "MaxRows": {}
}
```

<h3 id="query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRows|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[QueryRequest](#schemaqueryrequest)|true|none|
|» QueryString|body|object|true|none|
|» ClientToken|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRows|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.Query|

> Example responses

> 200 Response

```json
{
  "QueryId": {},
  "NextToken": {},
  "Rows": {},
  "ColumnInfo": {},
  "QueryStatus": {
    "ProgressPercentage": {},
    "CumulativeBytesScanned": {},
    "CumulativeBytesMetered": {}
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

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QueryResponse](#schemaqueryresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|QueryExecutionException|[QueryExecutionException](#schemaqueryexecutionexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.TagResource`

Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.UntagResource`

Removes the association of tags from a Timestream query resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateScheduledQuery

<a id="opIdUpdateScheduledQuery"></a>

> Code samples

```bash
curl 'https://timestream-query.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.UpdateScheduledQuery' \
  -d '{
    "ScheduledQueryArn": {},
    "State": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery`

Update a scheduled query.

> Body parameter

```json
{
  "ScheduledQueryArn": {},
  "State": {}
}
```

<h3 id="updatescheduledquery-parameters">Parameters</h3>

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
|body|body|[UpdateScheduledQueryRequest](#schemaupdatescheduledqueryrequest)|true|none|
|» ScheduledQueryArn|body|object|true|none|
|» State|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.UpdateScheduledQuery|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatescheduledquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelQueryResponse">CancelQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelqueryresponse"></a>
<a id="schema_CancelQueryResponse"></a>
<a id="tocScancelqueryresponse"></a>
<a id="tocscancelqueryresponse"></a>

```json
{
  "CancellationMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CancellationMessage|object|false|none|none|

<h2 id="tocS_CancelQueryRequest">CancelQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelqueryrequest"></a>
<a id="schema_CancelQueryRequest"></a>
<a id="tocScancelqueryrequest"></a>
<a id="tocscancelqueryrequest"></a>

```json
{
  "QueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

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

<h2 id="tocS_InvalidEndpointException">InvalidEndpointException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidendpointexception"></a>
<a id="schema_InvalidEndpointException"></a>
<a id="tocSinvalidendpointexception"></a>
<a id="tocsinvalidendpointexception"></a>

```json
null
```

<h2 id="tocS_CreateScheduledQueryResponse">CreateScheduledQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatescheduledqueryresponse"></a>
<a id="schema_CreateScheduledQueryResponse"></a>
<a id="tocScreatescheduledqueryresponse"></a>
<a id="tocscreatescheduledqueryresponse"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_CreateScheduledQueryRequest">CreateScheduledQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatescheduledqueryrequest"></a>
<a id="schema_CreateScheduledQueryRequest"></a>
<a id="tocScreatescheduledqueryrequest"></a>
<a id="tocscreatescheduledqueryrequest"></a>

```json
{
  "Name": {},
  "QueryString": {},
  "ScheduleConfiguration": {
    "ScheduleExpression": {}
  },
  "NotificationConfiguration": {
    "SnsConfiguration": {
      "TopicArn": {}
    }
  },
  "TargetConfiguration": {
    "TimestreamConfiguration": {
      "DatabaseName": {},
      "TableName": {},
      "TimeColumn": {},
      "DimensionMappings": {},
      "MultiMeasureMappings": {
        "TargetMultiMeasureName": {},
        "MultiMeasureAttributeMappings": {}
      },
      "MixedMeasureMappings": {},
      "MeasureNameColumn": {}
    }
  },
  "ClientToken": {},
  "ScheduledQueryExecutionRoleArn": {},
  "Tags": {},
  "KmsKeyId": {},
  "ErrorReportConfiguration": {
    "S3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|QueryString|object|true|none|none|
|ScheduleConfiguration|object|true|none|none|
|NotificationConfiguration|object|true|none|none|
|TargetConfiguration|object|false|none|none|
|ClientToken|object|false|none|none|
|ScheduledQueryExecutionRoleArn|object|true|none|none|
|Tags|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ErrorReportConfiguration|object|true|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

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

<h2 id="tocS_DeleteScheduledQueryRequest">DeleteScheduledQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletescheduledqueryrequest"></a>
<a id="schema_DeleteScheduledQueryRequest"></a>
<a id="tocSdeletescheduledqueryrequest"></a>
<a id="tocsdeletescheduledqueryrequest"></a>

```json
{
  "ScheduledQueryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledQueryArn|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeEndpointsResponse">DescribeEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsresponse"></a>
<a id="schema_DescribeEndpointsResponse"></a>
<a id="tocSdescribeendpointsresponse"></a>
<a id="tocsdescribeendpointsresponse"></a>

```json
{
  "Endpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|true|none|none|

<h2 id="tocS_DescribeEndpointsRequest">DescribeEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsrequest"></a>
<a id="schema_DescribeEndpointsRequest"></a>
<a id="tocSdescribeendpointsrequest"></a>
<a id="tocsdescribeendpointsrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeScheduledQueryResponse">DescribeScheduledQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescheduledqueryresponse"></a>
<a id="schema_DescribeScheduledQueryResponse"></a>
<a id="tocSdescribescheduledqueryresponse"></a>
<a id="tocsdescribescheduledqueryresponse"></a>

```json
{
  "ScheduledQuery": {
    "Arn": {},
    "Name": {},
    "QueryString": {},
    "CreationTime": {},
    "State": {},
    "PreviousInvocationTime": {},
    "NextInvocationTime": {},
    "ScheduleConfiguration": {
      "ScheduleExpression": {}
    },
    "NotificationConfiguration": {
      "SnsConfiguration": {
        "TopicArn": {}
      }
    },
    "TargetConfiguration": {
      "TimestreamConfiguration": {
        "DatabaseName": {},
        "TableName": {},
        "TimeColumn": {},
        "DimensionMappings": {},
        "MultiMeasureMappings": {
          "TargetMultiMeasureName": {},
          "MultiMeasureAttributeMappings": {}
        },
        "MixedMeasureMappings": {},
        "MeasureNameColumn": {}
      }
    },
    "ScheduledQueryExecutionRoleArn": {},
    "KmsKeyId": {},
    "ErrorReportConfiguration": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {}
      }
    },
    "LastRunSummary": {
      "InvocationTime": {},
      "TriggerTime": {},
      "RunStatus": {},
      "ExecutionStats": {
        "ExecutionTimeInMillis": {},
        "DataWrites": {},
        "BytesMetered": {},
        "RecordsIngested": {},
        "QueryResultRows": {}
      },
      "ErrorReportLocation": {
        "S3ReportLocation": {
          "BucketName": {},
          "ObjectKey": {}
        }
      },
      "FailureReason": {}
    },
    "RecentlyFailedRuns": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledQuery|object|true|none|none|

<h2 id="tocS_DescribeScheduledQueryRequest">DescribeScheduledQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescheduledqueryrequest"></a>
<a id="schema_DescribeScheduledQueryRequest"></a>
<a id="tocSdescribescheduledqueryrequest"></a>
<a id="tocsdescribescheduledqueryrequest"></a>

```json
{
  "ScheduledQueryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledQueryArn|object|true|none|none|

<h2 id="tocS_ExecuteScheduledQueryRequest">ExecuteScheduledQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutescheduledqueryrequest"></a>
<a id="schema_ExecuteScheduledQueryRequest"></a>
<a id="tocSexecutescheduledqueryrequest"></a>
<a id="tocsexecutescheduledqueryrequest"></a>

```json
{
  "ScheduledQueryArn": {},
  "InvocationTime": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledQueryArn|object|true|none|none|
|InvocationTime|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_ListScheduledQueriesResponse">ListScheduledQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscheduledqueriesresponse"></a>
<a id="schema_ListScheduledQueriesResponse"></a>
<a id="tocSlistscheduledqueriesresponse"></a>
<a id="tocslistscheduledqueriesresponse"></a>

```json
{
  "ScheduledQueries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledQueries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListScheduledQueriesRequest">ListScheduledQueriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistscheduledqueriesrequest"></a>
<a id="schema_ListScheduledQueriesRequest"></a>
<a id="tocSlistscheduledqueriesrequest"></a>
<a id="tocslistscheduledqueriesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PrepareQueryResponse">PrepareQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreparequeryresponse"></a>
<a id="schema_PrepareQueryResponse"></a>
<a id="tocSpreparequeryresponse"></a>
<a id="tocspreparequeryresponse"></a>

```json
{
  "QueryString": {},
  "Columns": {},
  "Parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryString|object|true|none|none|
|Columns|object|true|none|none|
|Parameters|object|true|none|none|

<h2 id="tocS_PrepareQueryRequest">PrepareQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreparequeryrequest"></a>
<a id="schema_PrepareQueryRequest"></a>
<a id="tocSpreparequeryrequest"></a>
<a id="tocspreparequeryrequest"></a>

```json
{
  "QueryString": {},
  "ValidateOnly": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryString|object|true|none|none|
|ValidateOnly|object|false|none|none|

<h2 id="tocS_QueryResponse">QueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresponse"></a>
<a id="schema_QueryResponse"></a>
<a id="tocSqueryresponse"></a>
<a id="tocsqueryresponse"></a>

```json
{
  "QueryId": {},
  "NextToken": {},
  "Rows": {},
  "ColumnInfo": {},
  "QueryStatus": {
    "ProgressPercentage": {},
    "CumulativeBytesScanned": {},
    "CumulativeBytesMetered": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|
|NextToken|object|false|none|none|
|Rows|object|true|none|none|
|ColumnInfo|object|true|none|none|
|QueryStatus|object|false|none|none|

<h2 id="tocS_QueryRequest">QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequest"></a>
<a id="schema_QueryRequest"></a>
<a id="tocSqueryrequest"></a>
<a id="tocsqueryrequest"></a>

```json
{
  "QueryString": {},
  "ClientToken": {},
  "NextToken": {},
  "MaxRows": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryString|object|true|none|none|
|ClientToken|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRows|object|false|none|none|

<h2 id="tocS_QueryExecutionException">QueryExecutionException</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutionexception"></a>
<a id="schema_QueryExecutionException"></a>
<a id="tocSqueryexecutionexception"></a>
<a id="tocsqueryexecutionexception"></a>

```json
null
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateScheduledQueryRequest">UpdateScheduledQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescheduledqueryrequest"></a>
<a id="schema_UpdateScheduledQueryRequest"></a>
<a id="tocSupdatescheduledqueryrequest"></a>
<a id="tocsupdatescheduledqueryrequest"></a>

```json
{
  "ScheduledQueryArn": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledQueryArn|object|true|none|none|
|State|object|true|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_QueryId">QueryId</h2>
<!-- backwards compatibility -->
<a id="schemaqueryid"></a>
<a id="schema_QueryId"></a>
<a id="tocSqueryid"></a>
<a id="tocsqueryid"></a>

```json
"string"
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

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"password"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"password"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
{
  "ScalarType": {},
  "ArrayColumnInfo": {
    "Name": {},
    "Type": {}
  },
  "TimeSeriesMeasureValueColumnInfo": {
    "Name": {},
    "Type": {}
  },
  "RowColumnInfo": {}
}
```

Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalarType|object|false|none|none|
|ArrayColumnInfo|object|false|none|none|
|TimeSeriesMeasureValueColumnInfo|object|false|none|none|
|RowColumnInfo|object|false|none|none|

<h2 id="tocS_ColumnInfo">ColumnInfo</h2>
<!-- backwards compatibility -->
<a id="schemacolumninfo"></a>
<a id="schema_ColumnInfo"></a>
<a id="tocScolumninfo"></a>
<a id="tocscolumninfo"></a>

```json
{
  "Name": {},
  "Type": {
    "ScalarType": {},
    "ArrayColumnInfo": {},
    "TimeSeriesMeasureValueColumnInfo": {},
    "RowColumnInfo": {}
  }
}
```

 Contains the metadata for query results such as the column names, data types, and other attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_ColumnInfoList">ColumnInfoList</h2>
<!-- backwards compatibility -->
<a id="schemacolumninfolist"></a>
<a id="schema_ColumnInfoList"></a>
<a id="tocScolumninfolist"></a>
<a id="tocscolumninfolist"></a>

```json
[
  {
    "Name": {},
    "Type": {}
  }
]
```

<h2 id="tocS_ScheduledQueryName">ScheduledQueryName</h2>
<!-- backwards compatibility -->
<a id="schemascheduledqueryname"></a>
<a id="schema_ScheduledQueryName"></a>
<a id="tocSscheduledqueryname"></a>
<a id="tocsscheduledqueryname"></a>

```json
"string"
```

<h2 id="tocS_QueryString">QueryString</h2>
<!-- backwards compatibility -->
<a id="schemaquerystring"></a>
<a id="schema_QueryString"></a>
<a id="tocSquerystring"></a>
<a id="tocsquerystring"></a>

```json
"password"
```

<h2 id="tocS_ScheduleConfiguration">ScheduleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemascheduleconfiguration"></a>
<a id="schema_ScheduleConfiguration"></a>
<a id="tocSscheduleconfiguration"></a>
<a id="tocsscheduleconfiguration"></a>

```json
{
  "ScheduleExpression": {}
}
```

Configuration of the schedule of the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleExpression|object|true|none|none|

<h2 id="tocS_NotificationConfiguration">NotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfiguration"></a>
<a id="schema_NotificationConfiguration"></a>
<a id="tocSnotificationconfiguration"></a>
<a id="tocsnotificationconfiguration"></a>

```json
{
  "SnsConfiguration": {
    "TopicArn": {}
  }
}
```

Notification configuration for a scheduled query. A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnsConfiguration|object|true|none|none|

<h2 id="tocS_TargetConfiguration">TargetConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematargetconfiguration"></a>
<a id="schema_TargetConfiguration"></a>
<a id="tocStargetconfiguration"></a>
<a id="tocstargetconfiguration"></a>

```json
{
  "TimestreamConfiguration": {
    "DatabaseName": {},
    "TableName": {},
    "TimeColumn": {},
    "DimensionMappings": {},
    "MultiMeasureMappings": {
      "TargetMultiMeasureName": {},
      "MultiMeasureAttributeMappings": {}
    },
    "MixedMeasureMappings": {},
    "MeasureNameColumn": {}
  }
}
```

Configuration used for writing the output of a query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimestreamConfiguration|object|true|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_StringValue2048">StringValue2048</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue2048"></a>
<a id="schema_StringValue2048"></a>
<a id="tocSstringvalue2048"></a>
<a id="tocsstringvalue2048"></a>

```json
"string"
```

<h2 id="tocS_ErrorReportConfiguration">ErrorReportConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaerrorreportconfiguration"></a>
<a id="schema_ErrorReportConfiguration"></a>
<a id="tocSerrorreportconfiguration"></a>
<a id="tocserrorreportconfiguration"></a>

```json
{
  "S3Configuration": {
    "BucketName": {},
    "ObjectKeyPrefix": {},
    "EncryptionOption": {}
  }
}
```

Configuration required for error reporting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Configuration|object|true|none|none|

<h2 id="tocS_ScalarValue">ScalarValue</h2>
<!-- backwards compatibility -->
<a id="schemascalarvalue"></a>
<a id="schema_ScalarValue"></a>
<a id="tocSscalarvalue"></a>
<a id="tocsscalarvalue"></a>

```json
"string"
```

<h2 id="tocS_TimeSeriesDataPointList">TimeSeriesDataPointList</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesdatapointlist"></a>
<a id="schema_TimeSeriesDataPointList"></a>
<a id="tocStimeseriesdatapointlist"></a>
<a id="tocstimeseriesdatapointlist"></a>

```json
[
  {
    "Time": {},
    "Value": {}
  }
]
```

<h2 id="tocS_DatumList">DatumList</h2>
<!-- backwards compatibility -->
<a id="schemadatumlist"></a>
<a id="schema_DatumList"></a>
<a id="tocSdatumlist"></a>
<a id="tocsdatumlist"></a>

```json
[
  {
    "ScalarValue": {},
    "TimeSeriesValue": {},
    "ArrayValue": {},
    "RowValue": {},
    "NullValue": {}
  }
]
```

<h2 id="tocS_Row">Row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_Row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
{
  "Data": {}
}
```

Represents a single row in the query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_Datum">Datum</h2>
<!-- backwards compatibility -->
<a id="schemadatum"></a>
<a id="schema_Datum"></a>
<a id="tocSdatum"></a>
<a id="tocsdatum"></a>

```json
{
  "ScalarValue": {},
  "TimeSeriesValue": {},
  "ArrayValue": {},
  "RowValue": {
    "Data": {}
  },
  "NullValue": {}
}
```

 Datum represents a single data point in a query result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalarValue|object|false|none|none|
|TimeSeriesValue|object|false|none|none|
|ArrayValue|object|false|none|none|
|RowValue|object|false|none|none|
|NullValue|object|false|none|none|

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
[
  {
    "Address": {},
    "CachePeriodInMinutes": {}
  }
]
```

<h2 id="tocS_ScheduledQueryDescription">ScheduledQueryDescription</h2>
<!-- backwards compatibility -->
<a id="schemascheduledquerydescription"></a>
<a id="schema_ScheduledQueryDescription"></a>
<a id="tocSscheduledquerydescription"></a>
<a id="tocsscheduledquerydescription"></a>

```json
{
  "Arn": {},
  "Name": {},
  "QueryString": {},
  "CreationTime": {},
  "State": {},
  "PreviousInvocationTime": {},
  "NextInvocationTime": {},
  "ScheduleConfiguration": {
    "ScheduleExpression": {}
  },
  "NotificationConfiguration": {
    "SnsConfiguration": {
      "TopicArn": {}
    }
  },
  "TargetConfiguration": {
    "TimestreamConfiguration": {
      "DatabaseName": {},
      "TableName": {},
      "TimeColumn": {},
      "DimensionMappings": {},
      "MultiMeasureMappings": {
        "TargetMultiMeasureName": {},
        "MultiMeasureAttributeMappings": {}
      },
      "MixedMeasureMappings": {},
      "MeasureNameColumn": {}
    }
  },
  "ScheduledQueryExecutionRoleArn": {},
  "KmsKeyId": {},
  "ErrorReportConfiguration": {
    "S3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {}
    }
  },
  "LastRunSummary": {
    "InvocationTime": {},
    "TriggerTime": {},
    "RunStatus": {},
    "ExecutionStats": {
      "ExecutionTimeInMillis": {},
      "DataWrites": {},
      "BytesMetered": {},
      "RecordsIngested": {},
      "QueryResultRows": {}
    },
    "ErrorReportLocation": {
      "S3ReportLocation": {
        "BucketName": {},
        "ObjectKey": {}
      }
    },
    "FailureReason": {}
  },
  "RecentlyFailedRuns": {}
}
```

Structure that describes scheduled query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Name|object|true|none|none|
|QueryString|object|true|none|none|
|CreationTime|object|false|none|none|
|State|object|true|none|none|
|PreviousInvocationTime|object|false|none|none|
|NextInvocationTime|object|false|none|none|
|ScheduleConfiguration|object|true|none|none|
|NotificationConfiguration|object|true|none|none|
|TargetConfiguration|object|false|none|none|
|ScheduledQueryExecutionRoleArn|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ErrorReportConfiguration|object|false|none|none|
|LastRunSummary|object|false|none|none|
|RecentlyFailedRuns|object|false|none|none|

<h2 id="tocS_SchemaName">SchemaName</h2>
<!-- backwards compatibility -->
<a id="schemaschemaname"></a>
<a id="schema_SchemaName"></a>
<a id="tocSschemaname"></a>
<a id="tocsschemaname"></a>

```json
"string"
```

<h2 id="tocS_DimensionValueType">DimensionValueType</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvaluetype"></a>
<a id="schema_DimensionValueType"></a>
<a id="tocSdimensionvaluetype"></a>
<a id="tocsdimensionvaluetype"></a>

```json
"VARCHAR"
```

<h2 id="tocS_DimensionMapping">DimensionMapping</h2>
<!-- backwards compatibility -->
<a id="schemadimensionmapping"></a>
<a id="schema_DimensionMapping"></a>
<a id="tocSdimensionmapping"></a>
<a id="tocsdimensionmapping"></a>

```json
{
  "Name": {},
  "DimensionValueType": {}
}
```

This type is used to map column(s) from the query result to a dimension in the destination table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DimensionValueType|object|true|none|none|

<h2 id="tocS_DimensionMappingList">DimensionMappingList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionmappinglist"></a>
<a id="schema_DimensionMappingList"></a>
<a id="tocSdimensionmappinglist"></a>
<a id="tocsdimensionmappinglist"></a>

```json
[
  {
    "Name": {},
    "DimensionValueType": {}
  }
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

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "Address": {},
  "CachePeriodInMinutes": {}
}
```

Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|true|none|none|
|CachePeriodInMinutes|object|true|none|none|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_S3Configuration">S3Configuration</h2>
<!-- backwards compatibility -->
<a id="schemas3configuration"></a>
<a id="schema_S3Configuration"></a>
<a id="tocSs3configuration"></a>
<a id="tocss3configuration"></a>

```json
{
  "BucketName": {},
  "ObjectKeyPrefix": {},
  "EncryptionOption": {}
}
```

Details on S3 location for error reports that result from running a query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|ObjectKeyPrefix|object|false|none|none|
|EncryptionOption|object|false|none|none|

<h2 id="tocS_S3ReportLocation">S3ReportLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3reportlocation"></a>
<a id="schema_S3ReportLocation"></a>
<a id="tocSs3reportlocation"></a>
<a id="tocss3reportlocation"></a>

```json
{
  "BucketName": {},
  "ObjectKey": {}
}
```

 S3 report location for the scheduled query run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|ObjectKey|object|false|none|none|

<h2 id="tocS_ErrorReportLocation">ErrorReportLocation</h2>
<!-- backwards compatibility -->
<a id="schemaerrorreportlocation"></a>
<a id="schema_ErrorReportLocation"></a>
<a id="tocSerrorreportlocation"></a>
<a id="tocserrorreportlocation"></a>

```json
{
  "S3ReportLocation": {
    "BucketName": {},
    "ObjectKey": {}
  }
}
```

This contains the location of the error report for a single scheduled query call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3ReportLocation|object|false|none|none|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExecutionStats">ExecutionStats</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstats"></a>
<a id="schema_ExecutionStats"></a>
<a id="tocSexecutionstats"></a>
<a id="tocsexecutionstats"></a>

```json
{
  "ExecutionTimeInMillis": {},
  "DataWrites": {},
  "BytesMetered": {},
  "RecordsIngested": {},
  "QueryResultRows": {}
}
```

Statistics for a single scheduled query run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionTimeInMillis|object|false|none|none|
|DataWrites|object|false|none|none|
|BytesMetered|object|false|none|none|
|RecordsIngested|object|false|none|none|
|QueryResultRows|object|false|none|none|

<h2 id="tocS_MaxScheduledQueriesResults">MaxScheduledQueriesResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxscheduledqueriesresults"></a>
<a id="schema_MaxScheduledQueriesResults"></a>
<a id="tocSmaxscheduledqueriesresults"></a>
<a id="tocsmaxscheduledqueriesresults"></a>

```json
1
```

<h2 id="tocS_NextScheduledQueriesResultsToken">NextScheduledQueriesResultsToken</h2>
<!-- backwards compatibility -->
<a id="schemanextscheduledqueriesresultstoken"></a>
<a id="schema_NextScheduledQueriesResultsToken"></a>
<a id="tocSnextscheduledqueriesresultstoken"></a>
<a id="tocsnextscheduledqueriesresultstoken"></a>

```json
"string"
```

<h2 id="tocS_ScheduledQueryList">ScheduledQueryList</h2>
<!-- backwards compatibility -->
<a id="schemascheduledquerylist"></a>
<a id="schema_ScheduledQueryList"></a>
<a id="tocSscheduledquerylist"></a>
<a id="tocsscheduledquerylist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "CreationTime": {},
    "State": {},
    "PreviousInvocationTime": {},
    "NextInvocationTime": {},
    "ErrorReportConfiguration": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {}
      }
    },
    "TargetDestination": {
      "TimestreamDestination": {
        "DatabaseName": {},
        "TableName": {}
      }
    },
    "LastRunStatus": {}
  }
]
```

<h2 id="tocS_MaxTagsForResourceResult">MaxTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemamaxtagsforresourceresult"></a>
<a id="schema_MaxTagsForResourceResult"></a>
<a id="tocSmaxtagsforresourceresult"></a>
<a id="tocsmaxtagsforresourceresult"></a>

```json
1
```

<h2 id="tocS_NextTagsForResourceResultsToken">NextTagsForResourceResultsToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttagsforresourceresultstoken"></a>
<a id="schema_NextTagsForResourceResultsToken"></a>
<a id="tocSnexttagsforresourceresultstoken"></a>
<a id="tocsnexttagsforresourceresultstoken"></a>

```json
"string"
```

<h2 id="tocS_MaxQueryResults">MaxQueryResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxqueryresults"></a>
<a id="schema_MaxQueryResults"></a>
<a id="tocSmaxqueryresults"></a>
<a id="tocsmaxqueryresults"></a>

```json
1
```

<h2 id="tocS_MeasureValueType">MeasureValueType</h2>
<!-- backwards compatibility -->
<a id="schemameasurevaluetype"></a>
<a id="schema_MeasureValueType"></a>
<a id="tocSmeasurevaluetype"></a>
<a id="tocsmeasurevaluetype"></a>

```json
"BIGINT"
```

<h2 id="tocS_MultiMeasureAttributeMappingList">MultiMeasureAttributeMappingList</h2>
<!-- backwards compatibility -->
<a id="schemamultimeasureattributemappinglist"></a>
<a id="schema_MultiMeasureAttributeMappingList"></a>
<a id="tocSmultimeasureattributemappinglist"></a>
<a id="tocsmultimeasureattributemappinglist"></a>

```json
[
  {
    "SourceColumn": {},
    "TargetMultiMeasureAttributeName": {},
    "MeasureValueType": {}
  }
]
```

<h2 id="tocS_MixedMeasureMapping">MixedMeasureMapping</h2>
<!-- backwards compatibility -->
<a id="schemamixedmeasuremapping"></a>
<a id="schema_MixedMeasureMapping"></a>
<a id="tocSmixedmeasuremapping"></a>
<a id="tocsmixedmeasuremapping"></a>

```json
{
  "MeasureName": {},
  "SourceColumn": {},
  "TargetMeasureName": {},
  "MeasureValueType": {},
  "MultiMeasureAttributeMappings": {}
}
```

MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeasureName|object|false|none|none|
|SourceColumn|object|false|none|none|
|TargetMeasureName|object|false|none|none|
|MeasureValueType|object|true|none|none|
|MultiMeasureAttributeMappings|object|false|none|none|

<h2 id="tocS_MixedMeasureMappingList">MixedMeasureMappingList</h2>
<!-- backwards compatibility -->
<a id="schemamixedmeasuremappinglist"></a>
<a id="schema_MixedMeasureMappingList"></a>
<a id="tocSmixedmeasuremappinglist"></a>
<a id="tocsmixedmeasuremappinglist"></a>

```json
[
  {
    "MeasureName": {},
    "SourceColumn": {},
    "TargetMeasureName": {},
    "MeasureValueType": {},
    "MultiMeasureAttributeMappings": {}
  }
]
```

<h2 id="tocS_ScalarMeasureValueType">ScalarMeasureValueType</h2>
<!-- backwards compatibility -->
<a id="schemascalarmeasurevaluetype"></a>
<a id="schema_ScalarMeasureValueType"></a>
<a id="tocSscalarmeasurevaluetype"></a>
<a id="tocsscalarmeasurevaluetype"></a>

```json
"BIGINT"
```

<h2 id="tocS_MultiMeasureAttributeMapping">MultiMeasureAttributeMapping</h2>
<!-- backwards compatibility -->
<a id="schemamultimeasureattributemapping"></a>
<a id="schema_MultiMeasureAttributeMapping"></a>
<a id="tocSmultimeasureattributemapping"></a>
<a id="tocsmultimeasureattributemapping"></a>

```json
{
  "SourceColumn": {},
  "TargetMultiMeasureAttributeName": {},
  "MeasureValueType": {}
}
```

Attribute mapping for MULTI value measures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceColumn|object|true|none|none|
|TargetMultiMeasureAttributeName|object|false|none|none|
|MeasureValueType|object|true|none|none|

<h2 id="tocS_MultiMeasureMappings">MultiMeasureMappings</h2>
<!-- backwards compatibility -->
<a id="schemamultimeasuremappings"></a>
<a id="schema_MultiMeasureMappings"></a>
<a id="tocSmultimeasuremappings"></a>
<a id="tocsmultimeasuremappings"></a>

```json
{
  "TargetMultiMeasureName": {},
  "MultiMeasureAttributeMappings": {}
}
```

Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetMultiMeasureName|object|false|none|none|
|MultiMeasureAttributeMappings|object|true|none|none|

<h2 id="tocS_SnsConfiguration">SnsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasnsconfiguration"></a>
<a id="schema_SnsConfiguration"></a>
<a id="tocSsnsconfiguration"></a>
<a id="tocssnsconfiguration"></a>

```json
{
  "TopicArn": {}
}
```

Details on SNS that are required to send the notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_ParameterMapping">ParameterMapping</h2>
<!-- backwards compatibility -->
<a id="schemaparametermapping"></a>
<a id="schema_ParameterMapping"></a>
<a id="tocSparametermapping"></a>
<a id="tocsparametermapping"></a>

```json
{
  "Name": {},
  "Type": {
    "ScalarType": {},
    "ArrayColumnInfo": {},
    "TimeSeriesMeasureValueColumnInfo": {},
    "RowColumnInfo": {}
  }
}
```

Mapping for named parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|[Type](#schematype)|true|none|Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.|

<h2 id="tocS_ParameterMappingList">ParameterMappingList</h2>
<!-- backwards compatibility -->
<a id="schemaparametermappinglist"></a>
<a id="schema_ParameterMappingList"></a>
<a id="tocSparametermappinglist"></a>
<a id="tocsparametermappinglist"></a>

```json
[
  {
    "Name": {},
    "Type": {
      "ScalarType": {},
      "ArrayColumnInfo": {},
      "TimeSeriesMeasureValueColumnInfo": {},
      "RowColumnInfo": {}
    }
  }
]
```

<h2 id="tocS_SelectColumnList">SelectColumnList</h2>
<!-- backwards compatibility -->
<a id="schemaselectcolumnlist"></a>
<a id="schema_SelectColumnList"></a>
<a id="tocSselectcolumnlist"></a>
<a id="tocsselectcolumnlist"></a>

```json
[
  {
    "Name": {},
    "Type": {
      "ScalarType": {},
      "ArrayColumnInfo": {},
      "TimeSeriesMeasureValueColumnInfo": {},
      "RowColumnInfo": {}
    },
    "DatabaseName": {},
    "TableName": {},
    "Aliased": {}
  }
]
```

<h2 id="tocS_RowList">RowList</h2>
<!-- backwards compatibility -->
<a id="schemarowlist"></a>
<a id="schema_RowList"></a>
<a id="tocSrowlist"></a>
<a id="tocsrowlist"></a>

```json
[
  {
    "Data": {}
  }
]
```

<h2 id="tocS_QueryStatus">QueryStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatus"></a>
<a id="schema_QueryStatus"></a>
<a id="tocSquerystatus"></a>
<a id="tocsquerystatus"></a>

```json
{
  "ProgressPercentage": {},
  "CumulativeBytesScanned": {},
  "CumulativeBytesMetered": {}
}
```

Information about the status of the query, including progress and bytes scanned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressPercentage|object|false|none|none|
|CumulativeBytesScanned|object|false|none|none|
|CumulativeBytesMetered|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectKeyPrefix">S3ObjectKeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkeyprefix"></a>
<a id="schema_S3ObjectKeyPrefix"></a>
<a id="tocSs3objectkeyprefix"></a>
<a id="tocss3objectkeyprefix"></a>

```json
"string"
```

<h2 id="tocS_S3EncryptionOption">S3EncryptionOption</h2>
<!-- backwards compatibility -->
<a id="schemas3encryptionoption"></a>
<a id="schema_S3EncryptionOption"></a>
<a id="tocSs3encryptionoption"></a>
<a id="tocss3encryptionoption"></a>

```json
"SSE_S3"
```

<h2 id="tocS_S3ObjectKey">S3ObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkey"></a>
<a id="schema_S3ObjectKey"></a>
<a id="tocSs3objectkey"></a>
<a id="tocss3objectkey"></a>

```json
"string"
```

<h2 id="tocS_ScalarType">ScalarType</h2>
<!-- backwards compatibility -->
<a id="schemascalartype"></a>
<a id="schema_ScalarType"></a>
<a id="tocSscalartype"></a>
<a id="tocsscalartype"></a>

```json
"VARCHAR"
```

<h2 id="tocS_ScheduleExpression">ScheduleExpression</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpression"></a>
<a id="schema_ScheduleExpression"></a>
<a id="tocSscheduleexpression"></a>
<a id="tocsscheduleexpression"></a>

```json
"string"
```

<h2 id="tocS_ScheduledQueryState">ScheduledQueryState</h2>
<!-- backwards compatibility -->
<a id="schemascheduledquerystate"></a>
<a id="schema_ScheduledQueryState"></a>
<a id="tocSscheduledquerystate"></a>
<a id="tocsscheduledquerystate"></a>

```json
"ENABLED"
```

<h2 id="tocS_TargetDestination">TargetDestination</h2>
<!-- backwards compatibility -->
<a id="schematargetdestination"></a>
<a id="schema_TargetDestination"></a>
<a id="tocStargetdestination"></a>
<a id="tocstargetdestination"></a>

```json
{
  "TimestreamDestination": {
    "DatabaseName": {},
    "TableName": {}
  }
}
```

Destination details to write data for a target data source. Current supported data source is Timestream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimestreamDestination|object|false|none|none|

<h2 id="tocS_ScheduledQueryRunStatus">ScheduledQueryRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemascheduledqueryrunstatus"></a>
<a id="schema_ScheduledQueryRunStatus"></a>
<a id="tocSscheduledqueryrunstatus"></a>
<a id="tocsscheduledqueryrunstatus"></a>

```json
"AUTO_TRIGGER_SUCCESS"
```

<h2 id="tocS_ScheduledQuery">ScheduledQuery</h2>
<!-- backwards compatibility -->
<a id="schemascheduledquery"></a>
<a id="schema_ScheduledQuery"></a>
<a id="tocSscheduledquery"></a>
<a id="tocsscheduledquery"></a>

```json
{
  "Arn": {},
  "Name": {},
  "CreationTime": {},
  "State": {},
  "PreviousInvocationTime": {},
  "NextInvocationTime": {},
  "ErrorReportConfiguration": {
    "S3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {}
    }
  },
  "TargetDestination": {
    "TimestreamDestination": {
      "DatabaseName": {},
      "TableName": {}
    }
  },
  "LastRunStatus": {}
}
```

Scheduled Query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Name|object|true|none|none|
|CreationTime|object|false|none|none|
|State|object|true|none|none|
|PreviousInvocationTime|object|false|none|none|
|NextInvocationTime|object|false|none|none|
|ErrorReportConfiguration|object|false|none|none|
|TargetDestination|object|false|none|none|
|LastRunStatus|object|false|none|none|

<h2 id="tocS_ScheduledQueryRunSummary">ScheduledQueryRunSummary</h2>
<!-- backwards compatibility -->
<a id="schemascheduledqueryrunsummary"></a>
<a id="schema_ScheduledQueryRunSummary"></a>
<a id="tocSscheduledqueryrunsummary"></a>
<a id="tocsscheduledqueryrunsummary"></a>

```json
{
  "InvocationTime": {},
  "TriggerTime": {},
  "RunStatus": {},
  "ExecutionStats": {
    "ExecutionTimeInMillis": {},
    "DataWrites": {},
    "BytesMetered": {},
    "RecordsIngested": {},
    "QueryResultRows": {}
  },
  "ErrorReportLocation": {
    "S3ReportLocation": {
      "BucketName": {},
      "ObjectKey": {}
    }
  },
  "FailureReason": {}
}
```

Run summary for the scheduled query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvocationTime|object|false|none|none|
|TriggerTime|object|false|none|none|
|RunStatus|object|false|none|none|
|ExecutionStats|object|false|none|none|
|ErrorReportLocation|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_ScheduledQueryRunSummaryList">ScheduledQueryRunSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemascheduledqueryrunsummarylist"></a>
<a id="schema_ScheduledQueryRunSummaryList"></a>
<a id="tocSscheduledqueryrunsummarylist"></a>
<a id="tocsscheduledqueryrunsummarylist"></a>

```json
[
  {
    "InvocationTime": {},
    "TriggerTime": {},
    "RunStatus": {},
    "ExecutionStats": {
      "ExecutionTimeInMillis": {},
      "DataWrites": {},
      "BytesMetered": {},
      "RecordsIngested": {},
      "QueryResultRows": {}
    },
    "ErrorReportLocation": {
      "S3ReportLocation": {
        "BucketName": {},
        "ObjectKey": {}
      }
    },
    "FailureReason": {}
  }
]
```

<h2 id="tocS_SelectColumn">SelectColumn</h2>
<!-- backwards compatibility -->
<a id="schemaselectcolumn"></a>
<a id="schema_SelectColumn"></a>
<a id="tocSselectcolumn"></a>
<a id="tocsselectcolumn"></a>

```json
{
  "Name": {},
  "Type": {
    "ScalarType": {},
    "ArrayColumnInfo": {},
    "TimeSeriesMeasureValueColumnInfo": {},
    "RowColumnInfo": {}
  },
  "DatabaseName": {},
  "TableName": {},
  "Aliased": {}
}
```

Details of the column that is returned by the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|[Type](#schematype)|false|none|Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|
|Aliased|object|false|none|none|

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
  "Key": {},
  "Value": {}
}
```

A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_TimestreamConfiguration">TimestreamConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematimestreamconfiguration"></a>
<a id="schema_TimestreamConfiguration"></a>
<a id="tocStimestreamconfiguration"></a>
<a id="tocstimestreamconfiguration"></a>

```json
{
  "DatabaseName": {},
  "TableName": {},
  "TimeColumn": {},
  "DimensionMappings": {},
  "MultiMeasureMappings": {
    "TargetMultiMeasureName": {},
    "MultiMeasureAttributeMappings": {}
  },
  "MixedMeasureMappings": {},
  "MeasureNameColumn": {}
}
```

 Configuration to write data into Timestream database and table. This configuration allows the user to map the query result select columns into the destination table columns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|TimeColumn|object|true|none|none|
|DimensionMappings|object|true|none|none|
|MultiMeasureMappings|object|false|none|none|
|MixedMeasureMappings|object|false|none|none|
|MeasureNameColumn|object|false|none|none|

<h2 id="tocS_TimestreamDestination">TimestreamDestination</h2>
<!-- backwards compatibility -->
<a id="schematimestreamdestination"></a>
<a id="schema_TimestreamDestination"></a>
<a id="tocStimestreamdestination"></a>
<a id="tocstimestreamdestination"></a>

```json
{
  "DatabaseName": {},
  "TableName": {}
}
```

Destination for scheduled query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"string"
```

<h2 id="tocS_TimeSeriesDataPoint">TimeSeriesDataPoint</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesdatapoint"></a>
<a id="schema_TimeSeriesDataPoint"></a>
<a id="tocStimeseriesdatapoint"></a>
<a id="tocstimeseriesdatapoint"></a>

```json
{
  "Time": {},
  "Value": {
    "ScalarValue": {},
    "TimeSeriesValue": {},
    "ArrayValue": {},
    "RowValue": {},
    "NullValue": {}
  }
}
```

The timeseries data type represents the values of a measure over time. A time series is an array of rows of timestamps and measure values, with rows sorted in ascending order of time. A TimeSeriesDataPoint is a single data point in the time series. It represents a tuple of (time, measure value) in a time series.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Time|object|true|none|none|
|Value|object|true|none|none|
