<h1 id="amazon-eventbridge">Amazon EventBridge v2015-10-07</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your resources change state, they automatically send events to an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a predetermined schedule. For example, you can configure rules to:</p> <ul> <li> <p>Automatically invoke an Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.</p> </li> <li> <p>Direct specific API records from CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.</p> </li> <li> <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.</p> </li> </ul> <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User Guide</a>.</p>

Base URLs:

* <a href="http://events.us-east-1.amazonaws.com">http://events.us-east-1.amazonaws.com</a> - The Amazon EventBridge multi-region endpoint

* <a href="https://events.us-east-1.amazonaws.com">https://events.us-east-1.amazonaws.com</a> - The Amazon EventBridge multi-region endpoint

* <a href="http://events.cn-north-1.amazonaws.com.cn">http://events.cn-north-1.amazonaws.com.cn</a> - The Amazon EventBridge endpoint for China (Beijing) and China (Ningxia)

* <a href="https://events.cn-north-1.amazonaws.com.cn">https://events.cn-north-1.amazonaws.com.cn</a> - The Amazon EventBridge endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/events/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-eventbridge-default">Default</h1>

## ActivateEventSource

<a id="opIdActivateEventSource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ActivateEventSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ActivateEventSource' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ActivateEventSource`

Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="activateeventsource-parameters">Parameters</h3>

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
|body|body|[ActivateEventSourceRequest](#schemaactivateeventsourcerequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ActivateEventSource|

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

<h3 id="activateeventsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|
|484|484|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelReplay

<a id="opIdCancelReplay"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.CancelReplay' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.CancelReplay' \
  -d '{
    "ReplayName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.CancelReplay`

Cancels the specified replay.

> Body parameter

```json
{
  "ReplayName": {}
}
```

<h3 id="cancelreplay-parameters">Parameters</h3>

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
|body|body|[CancelReplayRequest](#schemacancelreplayrequest)|true|none|
|» ReplayName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.CancelReplay|

> Example responses

> 200 Response

```json
{
  "ReplayArn": {},
  "State": {},
  "StateReason": {}
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

<h3 id="cancelreplay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelReplayResponse](#schemacancelreplayresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|IllegalStatusException|[IllegalStatusException](#schemaillegalstatusexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApiDestination

<a id="opIdCreateApiDestination"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.CreateApiDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.CreateApiDestination' \
  -d '{
    "Name": {},
    "Description": {},
    "ConnectionArn": {},
    "InvocationEndpoint": {},
    "HttpMethod": {},
    "InvocationRateLimitPerSecond": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.CreateApiDestination`

Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "ConnectionArn": {},
  "InvocationEndpoint": {},
  "HttpMethod": {},
  "InvocationRateLimitPerSecond": {}
}
```

<h3 id="createapidestination-parameters">Parameters</h3>

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
|body|body|[CreateApiDestinationRequest](#schemacreateapidestinationrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» ConnectionArn|body|object|true|none|
|» InvocationEndpoint|body|object|true|none|
|» HttpMethod|body|object|true|none|
|» InvocationRateLimitPerSecond|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.CreateApiDestination|

> Example responses

> 200 Response

```json
{
  "ApiDestinationArn": {},
  "ApiDestinationState": {},
  "CreationTime": {},
  "LastModifiedTime": {}
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

<h3 id="createapidestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApiDestinationResponse](#schemacreateapidestinationresponse)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateArchive

<a id="opIdCreateArchive"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.CreateArchive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.CreateArchive' \
  -d '{
    "ArchiveName": {},
    "EventSourceArn": {},
    "Description": {},
    "EventPattern": {},
    "RetentionDays": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.CreateArchive`

Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.

> Body parameter

```json
{
  "ArchiveName": {},
  "EventSourceArn": {},
  "Description": {},
  "EventPattern": {},
  "RetentionDays": {}
}
```

<h3 id="createarchive-parameters">Parameters</h3>

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
|body|body|[CreateArchiveRequest](#schemacreatearchiverequest)|true|none|
|» ArchiveName|body|object|true|none|
|» EventSourceArn|body|object|true|none|
|» Description|body|object|false|none|
|» EventPattern|body|object|false|none|
|» RetentionDays|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.CreateArchive|

> Example responses

> 200 Response

```json
{
  "ArchiveArn": {},
  "State": {},
  "StateReason": {},
  "CreationTime": {}
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

<h3 id="createarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateArchiveResponse](#schemacreatearchiveresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InvalidEventPatternException|[InvalidEventPatternException](#schemainvalideventpatternexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnection

<a id="opIdCreateConnection"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.CreateConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.CreateConnection' \
  -d '{
    "Name": {},
    "Description": {},
    "AuthorizationType": {},
    "AuthParameters": {
      "BasicAuthParameters": {
        "Username": {},
        "Password": {}
      },
      "OAuthParameters": {
        "ClientParameters": {
          "ClientID": {},
          "ClientSecret": {}
        },
        "AuthorizationEndpoint": {},
        "HttpMethod": {},
        "OAuthHttpParameters": {
          "HeaderParameters": {},
          "QueryStringParameters": {},
          "BodyParameters": {}
        }
      },
      "ApiKeyAuthParameters": {
        "ApiKeyName": {},
        "ApiKeyValue": {}
      },
      "InvocationHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSEvents.CreateConnection`

Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "AuthorizationType": {},
  "AuthParameters": {
    "BasicAuthParameters": {
      "Username": {},
      "Password": {}
    },
    "OAuthParameters": {
      "ClientParameters": {
        "ClientID": {},
        "ClientSecret": {}
      },
      "AuthorizationEndpoint": {},
      "HttpMethod": {},
      "OAuthHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    },
    "ApiKeyAuthParameters": {
      "ApiKeyName": {},
      "ApiKeyValue": {}
    },
    "InvocationHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  }
}
```

<h3 id="createconnection-parameters">Parameters</h3>

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
|body|body|[CreateConnectionRequest](#schemacreateconnectionrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» AuthorizationType|body|object|true|none|
|» AuthParameters|body|object|true|none|
|» » BasicAuthParameters|body|object|false|none|
|» » » Username|body|object|true|none|
|» » » Password|body|object|true|none|
|» » OAuthParameters|body|object|false|none|
|» » » ClientParameters|body|object|true|none|
|» » » » ClientID|body|object|true|none|
|» » » » ClientSecret|body|object|true|none|
|» » » AuthorizationEndpoint|body|object|true|none|
|» » » HttpMethod|body|object|true|none|
|» » » OAuthHttpParameters|body|object|false|none|
|» » » » HeaderParameters|body|object|false|none|
|» » » » QueryStringParameters|body|object|false|none|
|» » » » BodyParameters|body|object|false|none|
|» » ApiKeyAuthParameters|body|object|false|none|
|» » » ApiKeyName|body|object|true|none|
|» » » ApiKeyValue|body|object|true|none|
|» » InvocationHttpParameters|body|object|false|none|
|» » » HeaderParameters|body|object|false|none|
|» » » QueryStringParameters|body|object|false|none|
|» » » BodyParameters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.CreateConnection|

> Example responses

> 200 Response

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {}
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

<h3 id="createconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectionResponse](#schemacreateconnectionresponse)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEndpoint

<a id="opIdCreateEndpoint"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.CreateEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.CreateEndpoint' \
  -d '{
    "Name": {},
    "Description": {},
    "RoutingConfig": {
      "FailoverConfig": {
        "Primary": {
          "HealthCheck": {}
        },
        "Secondary": {
          "Route": {}
        }
      }
    },
    "ReplicationConfig": {
      "State": {}
    },
    "EventBuses": {},
    "RoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.CreateEndpoint`

Creates a global endpoint. Global endpoints improve your application's availability by making it regional-fault tolerant. To do this, you define a primary and secondary Region with event buses in each Region. You also create a Amazon Route 53 health check that will tell EventBridge to route events to the secondary Region when an "unhealthy" state is encountered and events will be routed back to the primary Region when the health check reports a "healthy" state.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {}
}
```

<h3 id="createendpoint-parameters">Parameters</h3>

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
|body|body|[CreateEndpointRequest](#schemacreateendpointrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» RoutingConfig|body|object|true|none|
|» » FailoverConfig|body|object|true|none|
|» » » Primary|body|object|true|none|
|» » » » HealthCheck|body|object|true|none|
|» » » Secondary|body|object|true|none|
|» » » » Route|body|object|true|none|
|» ReplicationConfig|body|object|false|none|
|» » State|body|object|false|none|
|» EventBuses|body|object|true|none|
|» RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.CreateEndpoint|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Arn": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {},
  "State": {}
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

<h3 id="createendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEndpointResponse](#schemacreateendpointresponse)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEventBus

<a id="opIdCreateEventBus"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.CreateEventBus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.CreateEventBus' \
  -d '{
    "Name": {},
    "EventSourceName": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.CreateEventBus`

Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.

> Body parameter

```json
{
  "Name": {},
  "EventSourceName": {},
  "Tags": {}
}
```

<h3 id="createeventbus-parameters">Parameters</h3>

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
|body|body|[CreateEventBusRequest](#schemacreateeventbusrequest)|true|none|
|» Name|body|object|true|none|
|» EventSourceName|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.CreateEventBus|

> Example responses

> 200 Response

```json
{
  "EventBusArn": {}
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

<h3 id="createeventbus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEventBusResponse](#schemacreateeventbusresponse)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePartnerEventSource

<a id="opIdCreatePartnerEventSource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.CreatePartnerEventSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.CreatePartnerEventSource' \
  -d '{
    "Name": {},
    "Account": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.CreatePartnerEventSource`

<p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>

> Body parameter

```json
{
  "Name": {},
  "Account": {}
}
```

<h3 id="createpartnereventsource-parameters">Parameters</h3>

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
|body|body|[CreatePartnerEventSourceRequest](#schemacreatepartnereventsourcerequest)|true|none|
|» Name|body|object|true|none|
|» Account|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.CreatePartnerEventSource|

> Example responses

> 200 Response

```json
{
  "EventSourceArn": {}
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

<h3 id="createpartnereventsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePartnerEventSourceResponse](#schemacreatepartnereventsourceresponse)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeactivateEventSource

<a id="opIdDeactivateEventSource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeactivateEventSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeactivateEventSource' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeactivateEventSource`

<p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deactivateeventsource-parameters">Parameters</h3>

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
|body|body|[DeactivateEventSourceRequest](#schemadeactivateeventsourcerequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeactivateEventSource|

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

<h3 id="deactivateeventsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|
|484|484|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeauthorizeConnection

<a id="opIdDeauthorizeConnection"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeauthorizeConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeauthorizeConnection' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeauthorizeConnection`

Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deauthorizeconnection-parameters">Parameters</h3>

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
|body|body|[DeauthorizeConnectionRequest](#schemadeauthorizeconnectionrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeauthorizeConnection|

> Example responses

> 200 Response

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
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

<h3 id="deauthorizeconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeauthorizeConnectionResponse](#schemadeauthorizeconnectionresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApiDestination

<a id="opIdDeleteApiDestination"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeleteApiDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeleteApiDestination' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeleteApiDestination`

Deletes the specified API destination.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteapidestination-parameters">Parameters</h3>

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
|body|body|[DeleteApiDestinationRequest](#schemadeleteapidestinationrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeleteApiDestination|

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

<h3 id="deleteapidestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApiDestinationResponse](#schemadeleteapidestinationresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteArchive

<a id="opIdDeleteArchive"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeleteArchive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeleteArchive' \
  -d '{
    "ArchiveName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeleteArchive`

Deletes the specified archive.

> Body parameter

```json
{
  "ArchiveName": {}
}
```

<h3 id="deletearchive-parameters">Parameters</h3>

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
|body|body|[DeleteArchiveRequest](#schemadeletearchiverequest)|true|none|
|» ArchiveName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeleteArchive|

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

<h3 id="deletearchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteArchiveResponse](#schemadeletearchiveresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnection

<a id="opIdDeleteConnection"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeleteConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeleteConnection' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeleteConnection`

Deletes a connection.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteconnection-parameters">Parameters</h3>

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
|body|body|[DeleteConnectionRequest](#schemadeleteconnectionrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeleteConnection|

> Example responses

> 200 Response

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
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

<h3 id="deleteconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectionResponse](#schemadeleteconnectionresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEndpoint

<a id="opIdDeleteEndpoint"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeleteEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeleteEndpoint' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeleteEndpoint`

Delete an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteendpoint-parameters">Parameters</h3>

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
|body|body|[DeleteEndpointRequest](#schemadeleteendpointrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeleteEndpoint|

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

<h3 id="deleteendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEndpointResponse](#schemadeleteendpointresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventBus

<a id="opIdDeleteEventBus"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeleteEventBus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeleteEventBus' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeleteEventBus`

Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteeventbus-parameters">Parameters</h3>

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
|body|body|[DeleteEventBusRequest](#schemadeleteeventbusrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeleteEventBus|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteeventbus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePartnerEventSource

<a id="opIdDeletePartnerEventSource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeletePartnerEventSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeletePartnerEventSource' \
  -d '{
    "Name": {},
    "Account": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeletePartnerEventSource`

<p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>

> Body parameter

```json
{
  "Name": {},
  "Account": {}
}
```

<h3 id="deletepartnereventsource-parameters">Parameters</h3>

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
|body|body|[DeletePartnerEventSourceRequest](#schemadeletepartnereventsourcerequest)|true|none|
|» Name|body|object|true|none|
|» Account|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeletePartnerEventSource|

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

<h3 id="deletepartnereventsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRule

<a id="opIdDeleteRule"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DeleteRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DeleteRule' \
  -d '{
    "Name": {},
    "EventBusName": {},
    "Force": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DeleteRule`

<p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>

> Body parameter

```json
{
  "Name": {},
  "EventBusName": {},
  "Force": {}
}
```

<h3 id="deleterule-parameters">Parameters</h3>

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
|body|body|[DeleteRuleRequest](#schemadeleterulerequest)|true|none|
|» Name|body|object|true|none|
|» EventBusName|body|object|false|none|
|» Force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DeleteRule|

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

<h3 id="deleterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApiDestination

<a id="opIdDescribeApiDestination"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeApiDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeApiDestination' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeApiDestination`

Retrieves details about an API destination.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="describeapidestination-parameters">Parameters</h3>

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
|body|body|[DescribeApiDestinationRequest](#schemadescribeapidestinationrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeApiDestination|

> Example responses

> 200 Response

```json
{
  "ApiDestinationArn": {},
  "Name": {},
  "Description": {},
  "ApiDestinationState": {},
  "ConnectionArn": {},
  "InvocationEndpoint": {},
  "HttpMethod": {},
  "InvocationRateLimitPerSecond": {},
  "CreationTime": {},
  "LastModifiedTime": {}
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

<h3 id="describeapidestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApiDestinationResponse](#schemadescribeapidestinationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeArchive

<a id="opIdDescribeArchive"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeArchive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeArchive' \
  -d '{
    "ArchiveName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeArchive`

Retrieves details about an archive.

> Body parameter

```json
{
  "ArchiveName": {}
}
```

<h3 id="describearchive-parameters">Parameters</h3>

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
|body|body|[DescribeArchiveRequest](#schemadescribearchiverequest)|true|none|
|» ArchiveName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeArchive|

> Example responses

> 200 Response

```json
{
  "ArchiveArn": {},
  "ArchiveName": {},
  "EventSourceArn": {},
  "Description": {},
  "EventPattern": {},
  "State": {},
  "StateReason": {},
  "RetentionDays": {},
  "SizeBytes": {},
  "EventCount": {},
  "CreationTime": {}
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

<h3 id="describearchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeArchiveResponse](#schemadescribearchiveresponse)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnection

<a id="opIdDescribeConnection"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeConnection' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeConnection`

Retrieves details about a connection.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="describeconnection-parameters">Parameters</h3>

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
|body|body|[DescribeConnectionRequest](#schemadescribeconnectionrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeConnection|

> Example responses

> 200 Response

```json
{
  "ConnectionArn": {},
  "Name": {},
  "Description": {},
  "ConnectionState": {},
  "StateReason": {},
  "AuthorizationType": {},
  "SecretArn": {},
  "AuthParameters": {
    "BasicAuthParameters": {
      "Username": {}
    },
    "OAuthParameters": {
      "ClientParameters": {
        "ClientID": {}
      },
      "AuthorizationEndpoint": {},
      "HttpMethod": {},
      "OAuthHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    },
    "ApiKeyAuthParameters": {
      "ApiKeyName": {}
    },
    "InvocationHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  },
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
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

<h3 id="describeconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectionResponse](#schemadescribeconnectionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpoint

<a id="opIdDescribeEndpoint"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeEndpoint' \
  -d '{
    "Name": {},
    "HomeRegion": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeEndpoint`

Get the information about an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..

> Body parameter

```json
{
  "Name": {},
  "HomeRegion": {}
}
```

<h3 id="describeendpoint-parameters">Parameters</h3>

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
|body|body|[DescribeEndpointRequest](#schemadescribeendpointrequest)|true|none|
|» Name|body|object|true|none|
|» HomeRegion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeEndpoint|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Description": {},
  "Arn": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {},
  "EndpointId": {},
  "EndpointUrl": {},
  "State": {},
  "StateReason": {},
  "CreationTime": {},
  "LastModifiedTime": {}
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

<h3 id="describeendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointResponse](#schemadescribeendpointresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventBus

<a id="opIdDescribeEventBus"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeEventBus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeEventBus' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeEventBus`

<p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="describeeventbus-parameters">Parameters</h3>

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
|body|body|[DescribeEventBusRequest](#schemadescribeeventbusrequest)|true|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeEventBus|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Arn": {},
  "Policy": {}
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

<h3 id="describeeventbus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventBusResponse](#schemadescribeeventbusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventSource

<a id="opIdDescribeEventSource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeEventSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeEventSource' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeEventSource`

This operation lists details about a partner event source that is shared with your account.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="describeeventsource-parameters">Parameters</h3>

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
|body|body|[DescribeEventSourceRequest](#schemadescribeeventsourcerequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeEventSource|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreatedBy": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "Name": {},
  "State": {}
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

<h3 id="describeeventsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventSourceResponse](#schemadescribeeventsourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePartnerEventSource

<a id="opIdDescribePartnerEventSource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribePartnerEventSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribePartnerEventSource' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribePartnerEventSource`

An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="describepartnereventsource-parameters">Parameters</h3>

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
|body|body|[DescribePartnerEventSourceRequest](#schemadescribepartnereventsourcerequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribePartnerEventSource|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Name": {}
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

<h3 id="describepartnereventsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePartnerEventSourceResponse](#schemadescribepartnereventsourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplay

<a id="opIdDescribeReplay"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeReplay' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeReplay' \
  -d '{
    "ReplayName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeReplay`

Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

> Body parameter

```json
{
  "ReplayName": {}
}
```

<h3 id="describereplay-parameters">Parameters</h3>

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
|body|body|[DescribeReplayRequest](#schemadescribereplayrequest)|true|none|
|» ReplayName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeReplay|

> Example responses

> 200 Response

```json
{
  "ReplayName": {},
  "ReplayArn": {},
  "Description": {},
  "State": {},
  "StateReason": {},
  "EventSourceArn": {},
  "Destination": {
    "Arn": {},
    "FilterArns": {}
  },
  "EventStartTime": {},
  "EventEndTime": {},
  "EventLastReplayedTime": {},
  "ReplayStartTime": {},
  "ReplayEndTime": {}
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

<h3 id="describereplay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplayResponse](#schemadescribereplayresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRule

<a id="opIdDescribeRule"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DescribeRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DescribeRule' \
  -d '{
    "Name": {},
    "EventBusName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DescribeRule`

<p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "EventBusName": {}
}
```

<h3 id="describerule-parameters">Parameters</h3>

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
|body|body|[DescribeRuleRequest](#schemadescriberulerequest)|true|none|
|» Name|body|object|true|none|
|» EventBusName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DescribeRule|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Arn": {},
  "EventPattern": {},
  "ScheduleExpression": {},
  "State": {},
  "Description": {},
  "RoleArn": {},
  "ManagedBy": {},
  "EventBusName": {},
  "CreatedBy": {}
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

<h3 id="describerule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRuleResponse](#schemadescriberuleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableRule

<a id="opIdDisableRule"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.DisableRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.DisableRule' \
  -d '{
    "Name": {},
    "EventBusName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.DisableRule`

<p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>

> Body parameter

```json
{
  "Name": {},
  "EventBusName": {}
}
```

<h3 id="disablerule-parameters">Parameters</h3>

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
|body|body|[DisableRuleRequest](#schemadisablerulerequest)|true|none|
|» Name|body|object|true|none|
|» EventBusName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.DisableRule|

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

<h3 id="disablerule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableRule

<a id="opIdEnableRule"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.EnableRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.EnableRule' \
  -d '{
    "Name": {},
    "EventBusName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.EnableRule`

<p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>

> Body parameter

```json
{
  "Name": {},
  "EventBusName": {}
}
```

<h3 id="enablerule-parameters">Parameters</h3>

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
|body|body|[EnableRuleRequest](#schemaenablerulerequest)|true|none|
|» Name|body|object|true|none|
|» EventBusName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.EnableRule|

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

<h3 id="enablerule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApiDestinations

<a id="opIdListApiDestinations"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListApiDestinations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListApiDestinations' \
  -d '{
    "NamePrefix": {},
    "ConnectionArn": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListApiDestinations`

Retrieves a list of API destination in the account in the current Region.

> Body parameter

```json
{
  "NamePrefix": {},
  "ConnectionArn": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listapidestinations-parameters">Parameters</h3>

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
|body|body|[ListApiDestinationsRequest](#schemalistapidestinationsrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» ConnectionArn|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListApiDestinations|

> Example responses

> 200 Response

```json
{
  "ApiDestinations": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listapidestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApiDestinationsResponse](#schemalistapidestinationsresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListArchives

<a id="opIdListArchives"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListArchives' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListArchives' \
  -d '{
    "NamePrefix": {},
    "EventSourceArn": {},
    "State": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListArchives`

Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.

> Body parameter

```json
{
  "NamePrefix": {},
  "EventSourceArn": {},
  "State": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listarchives-parameters">Parameters</h3>

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
|body|body|[ListArchivesRequest](#schemalistarchivesrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» EventSourceArn|body|object|false|none|
|» State|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListArchives|

> Example responses

> 200 Response

```json
{
  "Archives": {},
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

<h3 id="listarchives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListArchivesResponse](#schemalistarchivesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnections

<a id="opIdListConnections"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListConnections' \
  -d '{
    "NamePrefix": {},
    "ConnectionState": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListConnections`

Retrieves a list of connections from the account.

> Body parameter

```json
{
  "NamePrefix": {},
  "ConnectionState": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listconnections-parameters">Parameters</h3>

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
|body|body|[ListConnectionsRequest](#schemalistconnectionsrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» ConnectionState|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListConnections|

> Example responses

> 200 Response

```json
{
  "Connections": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectionsResponse](#schemalistconnectionsresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEndpoints

<a id="opIdListEndpoints"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListEndpoints' \
  -d '{
    "NamePrefix": {},
    "HomeRegion": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListEndpoints`

List the global endpoints associated with this account. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..

> Body parameter

```json
{
  "NamePrefix": {},
  "HomeRegion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listendpoints-parameters">Parameters</h3>

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
|body|body|[ListEndpointsRequest](#schemalistendpointsrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» HomeRegion|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListEndpoints|

> Example responses

> 200 Response

```json
{
  "Endpoints": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEndpointsResponse](#schemalistendpointsresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventBuses

<a id="opIdListEventBuses"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListEventBuses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListEventBuses' \
  -d '{
    "NamePrefix": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListEventBuses`

Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.

> Body parameter

```json
{
  "NamePrefix": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listeventbuses-parameters">Parameters</h3>

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
|body|body|[ListEventBusesRequest](#schemalisteventbusesrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListEventBuses|

> Example responses

> 200 Response

```json
{
  "EventBuses": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listeventbuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventBusesResponse](#schemalisteventbusesresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventSources

<a id="opIdListEventSources"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListEventSources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListEventSources' \
  -d '{
    "NamePrefix": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListEventSources`

You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.

> Body parameter

```json
{
  "NamePrefix": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listeventsources-parameters">Parameters</h3>

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
|body|body|[ListEventSourcesRequest](#schemalisteventsourcesrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListEventSources|

> Example responses

> 200 Response

```json
{
  "EventSources": {},
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

<h3 id="listeventsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventSourcesResponse](#schemalisteventsourcesresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPartnerEventSourceAccounts

<a id="opIdListPartnerEventSourceAccounts"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListPartnerEventSourceAccounts' \
  -d '{
    "EventSourceName": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts`

An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.

> Body parameter

```json
{
  "EventSourceName": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listpartnereventsourceaccounts-parameters">Parameters</h3>

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
|body|body|[ListPartnerEventSourceAccountsRequest](#schemalistpartnereventsourceaccountsrequest)|true|none|
|» EventSourceName|body|object|true|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListPartnerEventSourceAccounts|

> Example responses

> 200 Response

```json
{
  "PartnerEventSourceAccounts": {},
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

<h3 id="listpartnereventsourceaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPartnerEventSourceAccountsResponse](#schemalistpartnereventsourceaccountsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPartnerEventSources

<a id="opIdListPartnerEventSources"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListPartnerEventSources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListPartnerEventSources' \
  -d '{
    "NamePrefix": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListPartnerEventSources`

An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.

> Body parameter

```json
{
  "NamePrefix": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listpartnereventsources-parameters">Parameters</h3>

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
|body|body|[ListPartnerEventSourcesRequest](#schemalistpartnereventsourcesrequest)|true|none|
|» NamePrefix|body|object|true|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListPartnerEventSources|

> Example responses

> 200 Response

```json
{
  "PartnerEventSources": {},
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

<h3 id="listpartnereventsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPartnerEventSourcesResponse](#schemalistpartnereventsourcesresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReplays

<a id="opIdListReplays"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListReplays' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListReplays' \
  -d '{
    "NamePrefix": {},
    "State": {},
    "EventSourceArn": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListReplays`

Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.

> Body parameter

```json
{
  "NamePrefix": {},
  "State": {},
  "EventSourceArn": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listreplays-parameters">Parameters</h3>

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
|body|body|[ListReplaysRequest](#schemalistreplaysrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» State|body|object|false|none|
|» EventSourceArn|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListReplays|

> Example responses

> 200 Response

```json
{
  "Replays": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listreplays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReplaysResponse](#schemalistreplaysresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRuleNamesByTarget

<a id="opIdListRuleNamesByTarget"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListRuleNamesByTarget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListRuleNamesByTarget' \
  -d '{
    "TargetArn": {},
    "EventBusName": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListRuleNamesByTarget`

Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.

> Body parameter

```json
{
  "TargetArn": {},
  "EventBusName": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listrulenamesbytarget-parameters">Parameters</h3>

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
|body|body|[ListRuleNamesByTargetRequest](#schemalistrulenamesbytargetrequest)|true|none|
|» TargetArn|body|object|true|none|
|» EventBusName|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListRuleNamesByTarget|

> Example responses

> 200 Response

```json
{
  "RuleNames": {},
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

<h3 id="listrulenamesbytarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRuleNamesByTargetResponse](#schemalistrulenamesbytargetresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRules

<a id="opIdListRules"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListRules' \
  -d '{
    "NamePrefix": {},
    "EventBusName": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListRules`

<p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

> Body parameter

```json
{
  "NamePrefix": {},
  "EventBusName": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listrules-parameters">Parameters</h3>

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
|body|body|[ListRulesRequest](#schemalistrulesrequest)|true|none|
|» NamePrefix|body|object|false|none|
|» EventBusName|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListRules|

> Example responses

> 200 Response

```json
{
  "Rules": {},
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

<h3 id="listrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRulesResponse](#schemalistrulesresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListTagsForResource`

Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.

> Body parameter

```json
{
  "ResourceARN": {}
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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {}
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
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTargetsByRule

<a id="opIdListTargetsByRule"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.ListTargetsByRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.ListTargetsByRule' \
  -d '{
    "Rule": {},
    "EventBusName": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.ListTargetsByRule`

Lists the targets assigned to the specified rule.

> Body parameter

```json
{
  "Rule": {},
  "EventBusName": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listtargetsbyrule-parameters">Parameters</h3>

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
|body|body|[ListTargetsByRuleRequest](#schemalisttargetsbyrulerequest)|true|none|
|» Rule|body|object|true|none|
|» EventBusName|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.ListTargetsByRule|

> Example responses

> 200 Response

```json
{
  "Targets": {},
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

<h3 id="listtargetsbyrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTargetsByRuleResponse](#schemalisttargetsbyruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEvents

<a id="opIdPutEvents"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.PutEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.PutEvents' \
  -d '{
    "Entries": {},
    "EndpointId": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.PutEvents`

<p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p> <note> <p>PutEvents will only process nested JSON up to 1100 levels deep.</p> </note>

> Body parameter

```json
{
  "Entries": {},
  "EndpointId": {}
}
```

<h3 id="putevents-parameters">Parameters</h3>

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
|body|body|[PutEventsRequest](#schemaputeventsrequest)|true|none|
|» Entries|body|object|true|none|
|» EndpointId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.PutEvents|

> Example responses

> 200 Response

```json
{
  "FailedEntryCount": {},
  "Entries": {}
}
```

> 480 Response

```json
null
```

<h3 id="putevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEventsResponse](#schemaputeventsresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPartnerEvents

<a id="opIdPutPartnerEvents"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.PutPartnerEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.PutPartnerEvents' \
  -d '{
    "Entries": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.PutPartnerEvents`

This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.

> Body parameter

```json
{
  "Entries": {}
}
```

<h3 id="putpartnerevents-parameters">Parameters</h3>

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
|body|body|[PutPartnerEventsRequest](#schemaputpartnereventsrequest)|true|none|
|» Entries|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.PutPartnerEvents|

> Example responses

> 200 Response

```json
{
  "FailedEntryCount": {},
  "Entries": {}
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

<h3 id="putpartnerevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPartnerEventsResponse](#schemaputpartnereventsresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPermission

<a id="opIdPutPermission"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.PutPermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.PutPermission' \
  -d '{
    "EventBusName": {},
    "Action": {},
    "Principal": {},
    "StatementId": {},
    "Condition": {
      "Type": {},
      "Key": {},
      "Value": {}
    },
    "Policy": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.PutPermission`

<p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>

> Body parameter

```json
{
  "EventBusName": {},
  "Action": {},
  "Principal": {},
  "StatementId": {},
  "Condition": {
    "Type": {},
    "Key": {},
    "Value": {}
  },
  "Policy": {}
}
```

<h3 id="putpermission-parameters">Parameters</h3>

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
|body|body|[PutPermissionRequest](#schemaputpermissionrequest)|true|none|
|» EventBusName|body|object|false|none|
|» Action|body|object|false|none|
|» Principal|body|object|false|none|
|» StatementId|body|object|false|none|
|» Condition|body|object|false|none|
|» » Type|body|object|true|none|
|» » Key|body|object|true|none|
|» » Value|body|object|true|none|
|» Policy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.PutPermission|

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

<h3 id="putpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|PolicyLengthExceededException|[PolicyLengthExceededException](#schemapolicylengthexceededexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRule

<a id="opIdPutRule"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.PutRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.PutRule' \
  -d '{
    "Name": {},
    "ScheduleExpression": {},
    "EventPattern": {},
    "State": {},
    "Description": {},
    "RoleArn": {},
    "Tags": {},
    "EventBusName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.PutRule`

<p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ScheduleExpression": {},
  "EventPattern": {},
  "State": {},
  "Description": {},
  "RoleArn": {},
  "Tags": {},
  "EventBusName": {}
}
```

<h3 id="putrule-parameters">Parameters</h3>

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
|body|body|[PutRuleRequest](#schemaputrulerequest)|true|none|
|» Name|body|object|true|none|
|» ScheduleExpression|body|object|false|none|
|» EventPattern|body|object|false|none|
|» State|body|object|false|none|
|» Description|body|object|false|none|
|» RoleArn|body|object|false|none|
|» Tags|body|object|false|none|
|» EventBusName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.PutRule|

> Example responses

> 200 Response

```json
{
  "RuleArn": {}
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

<h3 id="putrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRuleResponse](#schemaputruleresponse)|
|480|480|InvalidEventPatternException|[InvalidEventPatternException](#schemainvalideventpatternexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|
|484|484|InternalException|[InternalException](#schemainternalexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutTargets

<a id="opIdPutTargets"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.PutTargets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.PutTargets' \
  -d '{
    "Rule": {},
    "EventBusName": {},
    "Targets": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.PutTargets`

<p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <note> <p>Each rule can have up to five (5) targets associated with it at one time.</p> </note> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-gateway-target.html">API Gateway</a> </p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>EC2 Image Builder</p> </li> <li> <p>EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>EC2 <code>StopInstances</code> API call</p> </li> <li> <p>EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>ECS task</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cross-account.html">Event bus in a different account or Region</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-bus-to-bus.html">Event bus in the same account and Region</a> </p> </li> <li> <p>Firehose delivery stream</p> </li> <li> <p>Glue workflow</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-creation.html#incident-tracking-auto-eventbridge">Incident Manager response plan</a> </p> </li> <li> <p>Inspector assessment template</p> </li> <li> <p>Kinesis stream</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift cluster</p> </li> <li> <p>Redshift Serverless workgroup</p> </li> <li> <p>SageMaker Pipeline</p> </li> <li> <p>SNS topic</p> </li> <li> <p>SQS queue</p> </li> <li> <p>Step Functions state machine</p> </li> <li> <p>Systems Manager Automation</p> </li> <li> <p>Systems Manager OpsItem</p> </li> <li> <p>Systems Manager Run Command</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

> Body parameter

```json
{
  "Rule": {},
  "EventBusName": {},
  "Targets": {}
}
```

<h3 id="puttargets-parameters">Parameters</h3>

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
|body|body|[PutTargetsRequest](#schemaputtargetsrequest)|true|none|
|» Rule|body|object|true|none|
|» EventBusName|body|object|false|none|
|» Targets|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.PutTargets|

> Example responses

> 200 Response

```json
{
  "FailedEntryCount": {},
  "FailedEntries": {}
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

<h3 id="puttargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutTargetsResponse](#schemaputtargetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|
|484|484|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemovePermission

<a id="opIdRemovePermission"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.RemovePermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.RemovePermission' \
  -d '{
    "StatementId": {},
    "RemoveAllPermissions": {},
    "EventBusName": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.RemovePermission`

Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.

> Body parameter

```json
{
  "StatementId": {},
  "RemoveAllPermissions": {},
  "EventBusName": {}
}
```

<h3 id="removepermission-parameters">Parameters</h3>

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
|body|body|[RemovePermissionRequest](#schemaremovepermissionrequest)|true|none|
|» StatementId|body|object|false|none|
|» RemoveAllPermissions|body|object|false|none|
|» EventBusName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.RemovePermission|

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

<h3 id="removepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|OperationDisabledException|[OperationDisabledException](#schemaoperationdisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTargets

<a id="opIdRemoveTargets"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.RemoveTargets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.RemoveTargets' \
  -d '{
    "Rule": {},
    "EventBusName": {},
    "Ids": {},
    "Force": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.RemoveTargets`

<p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <note> <p>A successful execution of <code>RemoveTargets</code> doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed.</p> </note> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

> Body parameter

```json
{
  "Rule": {},
  "EventBusName": {},
  "Ids": {},
  "Force": {}
}
```

<h3 id="removetargets-parameters">Parameters</h3>

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
|body|body|[RemoveTargetsRequest](#schemaremovetargetsrequest)|true|none|
|» Rule|body|object|true|none|
|» EventBusName|body|object|false|none|
|» Ids|body|object|true|none|
|» Force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.RemoveTargets|

> Example responses

> 200 Response

```json
{
  "FailedEntryCount": {},
  "FailedEntries": {}
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

<h3 id="removetargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTargetsResponse](#schemaremovetargetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartReplay

<a id="opIdStartReplay"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.StartReplay' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.StartReplay' \
  -d '{
    "ReplayName": {},
    "Description": {},
    "EventSourceArn": {},
    "EventStartTime": {},
    "EventEndTime": {},
    "Destination": {
      "Arn": {},
      "FilterArns": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSEvents.StartReplay`

Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

> Body parameter

```json
{
  "ReplayName": {},
  "Description": {},
  "EventSourceArn": {},
  "EventStartTime": {},
  "EventEndTime": {},
  "Destination": {
    "Arn": {},
    "FilterArns": {}
  }
}
```

<h3 id="startreplay-parameters">Parameters</h3>

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
|body|body|[StartReplayRequest](#schemastartreplayrequest)|true|none|
|» ReplayName|body|object|true|none|
|» Description|body|object|false|none|
|» EventSourceArn|body|object|true|none|
|» EventStartTime|body|object|true|none|
|» EventEndTime|body|object|true|none|
|» Destination|body|object|true|none|
|» » Arn|body|object|true|none|
|» » FilterArns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.StartReplay|

> Example responses

> 200 Response

```json
{
  "ReplayArn": {},
  "State": {},
  "StateReason": {},
  "ReplayStartTime": {}
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

<h3 id="startreplay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartReplayResponse](#schemastartreplayresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|InvalidEventPatternException|[InvalidEventPatternException](#schemainvalideventpatternexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.TagResource`

<p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

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
|X-Amz-Target|AWSEvents.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestEventPattern

<a id="opIdTestEventPattern"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.TestEventPattern' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.TestEventPattern' \
  -d '{
    "EventPattern": {},
    "Event": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.TestEventPattern`

<p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>

> Body parameter

```json
{
  "EventPattern": {},
  "Event": {}
}
```

<h3 id="testeventpattern-parameters">Parameters</h3>

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
|body|body|[TestEventPatternRequest](#schematesteventpatternrequest)|true|none|
|» EventPattern|body|object|true|none|
|» Event|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.TestEventPattern|

> Example responses

> 200 Response

```json
{
  "Result": {}
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

<h3 id="testeventpattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestEventPatternResponse](#schematesteventpatternresponse)|
|480|480|InvalidEventPatternException|[InvalidEventPatternException](#schemainvalideventpatternexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.UntagResource`

Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.

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
|X-Amz-Target|AWSEvents.UntagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ManagedRuleException|[ManagedRuleException](#schemamanagedruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApiDestination

<a id="opIdUpdateApiDestination"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.UpdateApiDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.UpdateApiDestination' \
  -d '{
    "Name": {},
    "Description": {},
    "ConnectionArn": {},
    "InvocationEndpoint": {},
    "HttpMethod": {},
    "InvocationRateLimitPerSecond": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.UpdateApiDestination`

Updates an API destination.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "ConnectionArn": {},
  "InvocationEndpoint": {},
  "HttpMethod": {},
  "InvocationRateLimitPerSecond": {}
}
```

<h3 id="updateapidestination-parameters">Parameters</h3>

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
|body|body|[UpdateApiDestinationRequest](#schemaupdateapidestinationrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» ConnectionArn|body|object|false|none|
|» InvocationEndpoint|body|object|false|none|
|» HttpMethod|body|object|false|none|
|» InvocationRateLimitPerSecond|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.UpdateApiDestination|

> Example responses

> 200 Response

```json
{
  "ApiDestinationArn": {},
  "ApiDestinationState": {},
  "CreationTime": {},
  "LastModifiedTime": {}
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

<h3 id="updateapidestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApiDestinationResponse](#schemaupdateapidestinationresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateArchive

<a id="opIdUpdateArchive"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.UpdateArchive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.UpdateArchive' \
  -d '{
    "ArchiveName": {},
    "Description": {},
    "EventPattern": {},
    "RetentionDays": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.UpdateArchive`

Updates the specified archive.

> Body parameter

```json
{
  "ArchiveName": {},
  "Description": {},
  "EventPattern": {},
  "RetentionDays": {}
}
```

<h3 id="updatearchive-parameters">Parameters</h3>

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
|body|body|[UpdateArchiveRequest](#schemaupdatearchiverequest)|true|none|
|» ArchiveName|body|object|true|none|
|» Description|body|object|false|none|
|» EventPattern|body|object|false|none|
|» RetentionDays|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.UpdateArchive|

> Example responses

> 200 Response

```json
{
  "ArchiveArn": {},
  "State": {},
  "StateReason": {},
  "CreationTime": {}
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

<h3 id="updatearchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateArchiveResponse](#schemaupdatearchiveresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InvalidEventPatternException|[InvalidEventPatternException](#schemainvalideventpatternexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnection

<a id="opIdUpdateConnection"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.UpdateConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.UpdateConnection' \
  -d '{
    "Name": {},
    "Description": {},
    "AuthorizationType": {},
    "AuthParameters": {
      "BasicAuthParameters": {
        "Username": {},
        "Password": {}
      },
      "OAuthParameters": {
        "ClientParameters": {
          "ClientID": {},
          "ClientSecret": {}
        },
        "AuthorizationEndpoint": {},
        "HttpMethod": {},
        "OAuthHttpParameters": {
          "HeaderParameters": {},
          "QueryStringParameters": {},
          "BodyParameters": {}
        }
      },
      "ApiKeyAuthParameters": {
        "ApiKeyName": {},
        "ApiKeyValue": {}
      },
      "InvocationHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSEvents.UpdateConnection`

Updates settings for a connection.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "AuthorizationType": {},
  "AuthParameters": {
    "BasicAuthParameters": {
      "Username": {},
      "Password": {}
    },
    "OAuthParameters": {
      "ClientParameters": {
        "ClientID": {},
        "ClientSecret": {}
      },
      "AuthorizationEndpoint": {},
      "HttpMethod": {},
      "OAuthHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    },
    "ApiKeyAuthParameters": {
      "ApiKeyName": {},
      "ApiKeyValue": {}
    },
    "InvocationHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  }
}
```

<h3 id="updateconnection-parameters">Parameters</h3>

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
|body|body|[UpdateConnectionRequest](#schemaupdateconnectionrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» AuthorizationType|body|object|false|none|
|» AuthParameters|body|object|false|none|
|» » BasicAuthParameters|body|object|false|none|
|» » » Username|body|object|false|none|
|» » » Password|body|object|false|none|
|» » OAuthParameters|body|object|false|none|
|» » » ClientParameters|body|object|false|none|
|» » » » ClientID|body|object|false|none|
|» » » » ClientSecret|body|object|false|none|
|» » » AuthorizationEndpoint|body|object|false|none|
|» » » HttpMethod|body|object|false|none|
|» » » OAuthHttpParameters|body|object|false|none|
|» » » » HeaderParameters|body|object|false|none|
|» » » » QueryStringParameters|body|object|false|none|
|» » » » BodyParameters|body|object|false|none|
|» » ApiKeyAuthParameters|body|object|false|none|
|» » » ApiKeyName|body|object|false|none|
|» » » ApiKeyValue|body|object|false|none|
|» » InvocationHttpParameters|body|object|false|none|
|» » » HeaderParameters|body|object|false|none|
|» » » QueryStringParameters|body|object|false|none|
|» » » BodyParameters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.UpdateConnection|

> Example responses

> 200 Response

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
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

<h3 id="updateconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectionResponse](#schemaupdateconnectionresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEndpoint

<a id="opIdUpdateEndpoint"></a>

> Code samples

```bash
curl 'https://eventbridge.us-east-1.amazonaws.com/#X-Amz-Target=AWSEvents.UpdateEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSEvents.UpdateEndpoint' \
  -d '{
    "Name": {},
    "Description": {},
    "RoutingConfig": {
      "FailoverConfig": {
        "Primary": {
          "HealthCheck": {}
        },
        "Secondary": {
          "Route": {}
        }
      }
    },
    "ReplicationConfig": {
      "State": {}
    },
    "EventBuses": {},
    "RoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSEvents.UpdateEndpoint`

Update an existing endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {}
}
```

<h3 id="updateendpoint-parameters">Parameters</h3>

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
|body|body|[UpdateEndpointRequest](#schemaupdateendpointrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» RoutingConfig|body|object|false|none|
|» » FailoverConfig|body|object|true|none|
|» » » Primary|body|object|true|none|
|» » » » HealthCheck|body|object|true|none|
|» » » Secondary|body|object|true|none|
|» » » » Route|body|object|true|none|
|» ReplicationConfig|body|object|false|none|
|» » State|body|object|false|none|
|» EventBuses|body|object|false|none|
|» RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSEvents.UpdateEndpoint|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Arn": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {},
  "EndpointId": {},
  "EndpointUrl": {},
  "State": {}
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

<h3 id="updateendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEndpointResponse](#schemaupdateendpointresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ActivateEventSourceRequest">ActivateEventSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivateeventsourcerequest"></a>
<a id="schema_ActivateEventSourceRequest"></a>
<a id="tocSactivateeventsourcerequest"></a>
<a id="tocsactivateeventsourcerequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_InvalidStateException">InvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstateexception"></a>
<a id="schema_InvalidStateException"></a>
<a id="tocSinvalidstateexception"></a>
<a id="tocsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_InternalException">InternalException</h2>
<!-- backwards compatibility -->
<a id="schemainternalexception"></a>
<a id="schema_InternalException"></a>
<a id="tocSinternalexception"></a>
<a id="tocsinternalexception"></a>

```json
null
```

<h2 id="tocS_OperationDisabledException">OperationDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationdisabledexception"></a>
<a id="schema_OperationDisabledException"></a>
<a id="tocSoperationdisabledexception"></a>
<a id="tocsoperationdisabledexception"></a>

```json
null
```

<h2 id="tocS_CancelReplayResponse">CancelReplayResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelreplayresponse"></a>
<a id="schema_CancelReplayResponse"></a>
<a id="tocScancelreplayresponse"></a>
<a id="tocscancelreplayresponse"></a>

```json
{
  "ReplayArn": {},
  "State": {},
  "StateReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplayArn|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|

<h2 id="tocS_CancelReplayRequest">CancelReplayRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelreplayrequest"></a>
<a id="schema_CancelReplayRequest"></a>
<a id="tocScancelreplayrequest"></a>
<a id="tocscancelreplayrequest"></a>

```json
{
  "ReplayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplayName|object|true|none|none|

<h2 id="tocS_IllegalStatusException">IllegalStatusException</h2>
<!-- backwards compatibility -->
<a id="schemaillegalstatusexception"></a>
<a id="schema_IllegalStatusException"></a>
<a id="tocSillegalstatusexception"></a>
<a id="tocsillegalstatusexception"></a>

```json
null
```

<h2 id="tocS_CreateApiDestinationResponse">CreateApiDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapidestinationresponse"></a>
<a id="schema_CreateApiDestinationResponse"></a>
<a id="tocScreateapidestinationresponse"></a>
<a id="tocscreateapidestinationresponse"></a>

```json
{
  "ApiDestinationArn": {},
  "ApiDestinationState": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDestinationArn|object|false|none|none|
|ApiDestinationState|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_CreateApiDestinationRequest">CreateApiDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapidestinationrequest"></a>
<a id="schema_CreateApiDestinationRequest"></a>
<a id="tocScreateapidestinationrequest"></a>
<a id="tocscreateapidestinationrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ConnectionArn": {},
  "InvocationEndpoint": {},
  "HttpMethod": {},
  "InvocationRateLimitPerSecond": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ConnectionArn|object|true|none|none|
|InvocationEndpoint|object|true|none|none|
|HttpMethod|object|true|none|none|
|InvocationRateLimitPerSecond|object|false|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

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

<h2 id="tocS_CreateArchiveResponse">CreateArchiveResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatearchiveresponse"></a>
<a id="schema_CreateArchiveResponse"></a>
<a id="tocScreatearchiveresponse"></a>
<a id="tocscreatearchiveresponse"></a>

```json
{
  "ArchiveArn": {},
  "State": {},
  "StateReason": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveArn|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_CreateArchiveRequest">CreateArchiveRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatearchiverequest"></a>
<a id="schema_CreateArchiveRequest"></a>
<a id="tocScreatearchiverequest"></a>
<a id="tocscreatearchiverequest"></a>

```json
{
  "ArchiveName": {},
  "EventSourceArn": {},
  "Description": {},
  "EventPattern": {},
  "RetentionDays": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveName|object|true|none|none|
|EventSourceArn|object|true|none|none|
|Description|object|false|none|none|
|EventPattern|object|false|none|none|
|RetentionDays|object|false|none|none|

<h2 id="tocS_InvalidEventPatternException">InvalidEventPatternException</h2>
<!-- backwards compatibility -->
<a id="schemainvalideventpatternexception"></a>
<a id="schema_InvalidEventPatternException"></a>
<a id="tocSinvalideventpatternexception"></a>
<a id="tocsinvalideventpatternexception"></a>

```json
null
```

<h2 id="tocS_CreateConnectionResponse">CreateConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionresponse"></a>
<a id="schema_CreateConnectionResponse"></a>
<a id="tocScreateconnectionresponse"></a>
<a id="tocscreateconnectionresponse"></a>

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|false|none|none|
|ConnectionState|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_CreateConnectionRequest">CreateConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionrequest"></a>
<a id="schema_CreateConnectionRequest"></a>
<a id="tocScreateconnectionrequest"></a>
<a id="tocscreateconnectionrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "AuthorizationType": {},
  "AuthParameters": {
    "BasicAuthParameters": {
      "Username": {},
      "Password": {}
    },
    "OAuthParameters": {
      "ClientParameters": {
        "ClientID": {},
        "ClientSecret": {}
      },
      "AuthorizationEndpoint": {},
      "HttpMethod": {},
      "OAuthHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    },
    "ApiKeyAuthParameters": {
      "ApiKeyName": {},
      "ApiKeyValue": {}
    },
    "InvocationHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|AuthorizationType|object|true|none|none|
|AuthParameters|object|true|none|none|

<h2 id="tocS_CreateEndpointResponse">CreateEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointresponse"></a>
<a id="schema_CreateEndpointResponse"></a>
<a id="tocScreateendpointresponse"></a>
<a id="tocscreateendpointresponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|RoutingConfig|object|false|none|none|
|ReplicationConfig|object|false|none|none|
|EventBuses|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_CreateEndpointRequest">CreateEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointrequest"></a>
<a id="schema_CreateEndpointRequest"></a>
<a id="tocScreateendpointrequest"></a>
<a id="tocscreateendpointrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|RoutingConfig|object|true|none|none|
|ReplicationConfig|object|false|none|none|
|EventBuses|object|true|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_CreateEventBusResponse">CreateEventBusResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventbusresponse"></a>
<a id="schema_CreateEventBusResponse"></a>
<a id="tocScreateeventbusresponse"></a>
<a id="tocscreateeventbusresponse"></a>

```json
{
  "EventBusArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventBusArn|object|false|none|none|

<h2 id="tocS_CreateEventBusRequest">CreateEventBusRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventbusrequest"></a>
<a id="schema_CreateEventBusRequest"></a>
<a id="tocScreateeventbusrequest"></a>
<a id="tocscreateeventbusrequest"></a>

```json
{
  "Name": {},
  "EventSourceName": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|EventSourceName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreatePartnerEventSourceResponse">CreatePartnerEventSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepartnereventsourceresponse"></a>
<a id="schema_CreatePartnerEventSourceResponse"></a>
<a id="tocScreatepartnereventsourceresponse"></a>
<a id="tocscreatepartnereventsourceresponse"></a>

```json
{
  "EventSourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSourceArn|object|false|none|none|

<h2 id="tocS_CreatePartnerEventSourceRequest">CreatePartnerEventSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepartnereventsourcerequest"></a>
<a id="schema_CreatePartnerEventSourceRequest"></a>
<a id="tocScreatepartnereventsourcerequest"></a>
<a id="tocscreatepartnereventsourcerequest"></a>

```json
{
  "Name": {},
  "Account": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Account|object|true|none|none|

<h2 id="tocS_DeactivateEventSourceRequest">DeactivateEventSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateeventsourcerequest"></a>
<a id="schema_DeactivateEventSourceRequest"></a>
<a id="tocSdeactivateeventsourcerequest"></a>
<a id="tocsdeactivateeventsourcerequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeauthorizeConnectionResponse">DeauthorizeConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeauthorizeconnectionresponse"></a>
<a id="schema_DeauthorizeConnectionResponse"></a>
<a id="tocSdeauthorizeconnectionresponse"></a>
<a id="tocsdeauthorizeconnectionresponse"></a>

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|false|none|none|
|ConnectionState|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LastAuthorizedTime|object|false|none|none|

<h2 id="tocS_DeauthorizeConnectionRequest">DeauthorizeConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeauthorizeconnectionrequest"></a>
<a id="schema_DeauthorizeConnectionRequest"></a>
<a id="tocSdeauthorizeconnectionrequest"></a>
<a id="tocsdeauthorizeconnectionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteApiDestinationResponse">DeleteApiDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapidestinationresponse"></a>
<a id="schema_DeleteApiDestinationResponse"></a>
<a id="tocSdeleteapidestinationresponse"></a>
<a id="tocsdeleteapidestinationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteApiDestinationRequest">DeleteApiDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapidestinationrequest"></a>
<a id="schema_DeleteApiDestinationRequest"></a>
<a id="tocSdeleteapidestinationrequest"></a>
<a id="tocsdeleteapidestinationrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteArchiveResponse">DeleteArchiveResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletearchiveresponse"></a>
<a id="schema_DeleteArchiveResponse"></a>
<a id="tocSdeletearchiveresponse"></a>
<a id="tocsdeletearchiveresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteArchiveRequest">DeleteArchiveRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletearchiverequest"></a>
<a id="schema_DeleteArchiveRequest"></a>
<a id="tocSdeletearchiverequest"></a>
<a id="tocsdeletearchiverequest"></a>

```json
{
  "ArchiveName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveName|object|true|none|none|

<h2 id="tocS_DeleteConnectionResponse">DeleteConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionresponse"></a>
<a id="schema_DeleteConnectionResponse"></a>
<a id="tocSdeleteconnectionresponse"></a>
<a id="tocsdeleteconnectionresponse"></a>

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|false|none|none|
|ConnectionState|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LastAuthorizedTime|object|false|none|none|

<h2 id="tocS_DeleteConnectionRequest">DeleteConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionrequest"></a>
<a id="schema_DeleteConnectionRequest"></a>
<a id="tocSdeleteconnectionrequest"></a>
<a id="tocsdeleteconnectionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteEndpointResponse">DeleteEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointresponse"></a>
<a id="schema_DeleteEndpointResponse"></a>
<a id="tocSdeleteendpointresponse"></a>
<a id="tocsdeleteendpointresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteEndpointRequest">DeleteEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointrequest"></a>
<a id="schema_DeleteEndpointRequest"></a>
<a id="tocSdeleteendpointrequest"></a>
<a id="tocsdeleteendpointrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteEventBusRequest">DeleteEventBusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventbusrequest"></a>
<a id="schema_DeleteEventBusRequest"></a>
<a id="tocSdeleteeventbusrequest"></a>
<a id="tocsdeleteeventbusrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeletePartnerEventSourceRequest">DeletePartnerEventSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepartnereventsourcerequest"></a>
<a id="schema_DeletePartnerEventSourceRequest"></a>
<a id="tocSdeletepartnereventsourcerequest"></a>
<a id="tocsdeletepartnereventsourcerequest"></a>

```json
{
  "Name": {},
  "Account": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Account|object|true|none|none|

<h2 id="tocS_DeleteRuleRequest">DeleteRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulerequest"></a>
<a id="schema_DeleteRuleRequest"></a>
<a id="tocSdeleterulerequest"></a>
<a id="tocsdeleterulerequest"></a>

```json
{
  "Name": {},
  "EventBusName": {},
  "Force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|EventBusName|object|false|none|none|
|Force|object|false|none|none|

<h2 id="tocS_ManagedRuleException">ManagedRuleException</h2>
<!-- backwards compatibility -->
<a id="schemamanagedruleexception"></a>
<a id="schema_ManagedRuleException"></a>
<a id="tocSmanagedruleexception"></a>
<a id="tocsmanagedruleexception"></a>

```json
null
```

<h2 id="tocS_DescribeApiDestinationResponse">DescribeApiDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapidestinationresponse"></a>
<a id="schema_DescribeApiDestinationResponse"></a>
<a id="tocSdescribeapidestinationresponse"></a>
<a id="tocsdescribeapidestinationresponse"></a>

```json
{
  "ApiDestinationArn": {},
  "Name": {},
  "Description": {},
  "ApiDestinationState": {},
  "ConnectionArn": {},
  "InvocationEndpoint": {},
  "HttpMethod": {},
  "InvocationRateLimitPerSecond": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDestinationArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ApiDestinationState|object|false|none|none|
|ConnectionArn|object|false|none|none|
|InvocationEndpoint|object|false|none|none|
|HttpMethod|object|false|none|none|
|InvocationRateLimitPerSecond|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_DescribeApiDestinationRequest">DescribeApiDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapidestinationrequest"></a>
<a id="schema_DescribeApiDestinationRequest"></a>
<a id="tocSdescribeapidestinationrequest"></a>
<a id="tocsdescribeapidestinationrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DescribeArchiveResponse">DescribeArchiveResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribearchiveresponse"></a>
<a id="schema_DescribeArchiveResponse"></a>
<a id="tocSdescribearchiveresponse"></a>
<a id="tocsdescribearchiveresponse"></a>

```json
{
  "ArchiveArn": {},
  "ArchiveName": {},
  "EventSourceArn": {},
  "Description": {},
  "EventPattern": {},
  "State": {},
  "StateReason": {},
  "RetentionDays": {},
  "SizeBytes": {},
  "EventCount": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveArn|object|false|none|none|
|ArchiveName|object|false|none|none|
|EventSourceArn|object|false|none|none|
|Description|object|false|none|none|
|EventPattern|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|RetentionDays|object|false|none|none|
|SizeBytes|object|false|none|none|
|EventCount|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_DescribeArchiveRequest">DescribeArchiveRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribearchiverequest"></a>
<a id="schema_DescribeArchiveRequest"></a>
<a id="tocSdescribearchiverequest"></a>
<a id="tocsdescribearchiverequest"></a>

```json
{
  "ArchiveName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveName|object|true|none|none|

<h2 id="tocS_DescribeConnectionResponse">DescribeConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionresponse"></a>
<a id="schema_DescribeConnectionResponse"></a>
<a id="tocSdescribeconnectionresponse"></a>
<a id="tocsdescribeconnectionresponse"></a>

```json
{
  "ConnectionArn": {},
  "Name": {},
  "Description": {},
  "ConnectionState": {},
  "StateReason": {},
  "AuthorizationType": {},
  "SecretArn": {},
  "AuthParameters": {
    "BasicAuthParameters": {
      "Username": {}
    },
    "OAuthParameters": {
      "ClientParameters": {
        "ClientID": {}
      },
      "AuthorizationEndpoint": {},
      "HttpMethod": {},
      "OAuthHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    },
    "ApiKeyAuthParameters": {
      "ApiKeyName": {}
    },
    "InvocationHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  },
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ConnectionState|object|false|none|none|
|StateReason|object|false|none|none|
|AuthorizationType|object|false|none|none|
|SecretArn|object|false|none|none|
|AuthParameters|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LastAuthorizedTime|object|false|none|none|

<h2 id="tocS_DescribeConnectionRequest">DescribeConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionrequest"></a>
<a id="schema_DescribeConnectionRequest"></a>
<a id="tocSdescribeconnectionrequest"></a>
<a id="tocsdescribeconnectionrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DescribeEndpointResponse">DescribeEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointresponse"></a>
<a id="schema_DescribeEndpointResponse"></a>
<a id="tocSdescribeendpointresponse"></a>
<a id="tocsdescribeendpointresponse"></a>

```json
{
  "Name": {},
  "Description": {},
  "Arn": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {},
  "EndpointId": {},
  "EndpointUrl": {},
  "State": {},
  "StateReason": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Arn|object|false|none|none|
|RoutingConfig|object|false|none|none|
|ReplicationConfig|object|false|none|none|
|EventBuses|object|false|none|none|
|RoleArn|object|false|none|none|
|EndpointId|object|false|none|none|
|EndpointUrl|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_DescribeEndpointRequest">DescribeEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointrequest"></a>
<a id="schema_DescribeEndpointRequest"></a>
<a id="tocSdescribeendpointrequest"></a>
<a id="tocsdescribeendpointrequest"></a>

```json
{
  "Name": {},
  "HomeRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|HomeRegion|object|false|none|none|

<h2 id="tocS_DescribeEventBusResponse">DescribeEventBusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventbusresponse"></a>
<a id="schema_DescribeEventBusResponse"></a>
<a id="tocSdescribeeventbusresponse"></a>
<a id="tocsdescribeeventbusresponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_DescribeEventBusRequest">DescribeEventBusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventbusrequest"></a>
<a id="schema_DescribeEventBusRequest"></a>
<a id="tocSdescribeeventbusrequest"></a>
<a id="tocsdescribeeventbusrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_DescribeEventSourceResponse">DescribeEventSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsourceresponse"></a>
<a id="schema_DescribeEventSourceResponse"></a>
<a id="tocSdescribeeventsourceresponse"></a>
<a id="tocsdescribeeventsourceresponse"></a>

```json
{
  "Arn": {},
  "CreatedBy": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "Name": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreationTime|object|false|none|none|
|ExpirationTime|object|false|none|none|
|Name|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_DescribeEventSourceRequest">DescribeEventSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsourcerequest"></a>
<a id="schema_DescribeEventSourceRequest"></a>
<a id="tocSdescribeeventsourcerequest"></a>
<a id="tocsdescribeeventsourcerequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DescribePartnerEventSourceResponse">DescribePartnerEventSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepartnereventsourceresponse"></a>
<a id="schema_DescribePartnerEventSourceResponse"></a>
<a id="tocSdescribepartnereventsourceresponse"></a>
<a id="tocsdescribepartnereventsourceresponse"></a>

```json
{
  "Arn": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_DescribePartnerEventSourceRequest">DescribePartnerEventSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepartnereventsourcerequest"></a>
<a id="schema_DescribePartnerEventSourceRequest"></a>
<a id="tocSdescribepartnereventsourcerequest"></a>
<a id="tocsdescribepartnereventsourcerequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DescribeReplayResponse">DescribeReplayResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplayresponse"></a>
<a id="schema_DescribeReplayResponse"></a>
<a id="tocSdescribereplayresponse"></a>
<a id="tocsdescribereplayresponse"></a>

```json
{
  "ReplayName": {},
  "ReplayArn": {},
  "Description": {},
  "State": {},
  "StateReason": {},
  "EventSourceArn": {},
  "Destination": {
    "Arn": {},
    "FilterArns": {}
  },
  "EventStartTime": {},
  "EventEndTime": {},
  "EventLastReplayedTime": {},
  "ReplayStartTime": {},
  "ReplayEndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplayName|object|false|none|none|
|ReplayArn|object|false|none|none|
|Description|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|EventSourceArn|object|false|none|none|
|Destination|object|false|none|none|
|EventStartTime|object|false|none|none|
|EventEndTime|object|false|none|none|
|EventLastReplayedTime|object|false|none|none|
|ReplayStartTime|object|false|none|none|
|ReplayEndTime|object|false|none|none|

<h2 id="tocS_DescribeReplayRequest">DescribeReplayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplayrequest"></a>
<a id="schema_DescribeReplayRequest"></a>
<a id="tocSdescribereplayrequest"></a>
<a id="tocsdescribereplayrequest"></a>

```json
{
  "ReplayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplayName|object|true|none|none|

<h2 id="tocS_DescribeRuleResponse">DescribeRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberuleresponse"></a>
<a id="schema_DescribeRuleResponse"></a>
<a id="tocSdescriberuleresponse"></a>
<a id="tocsdescriberuleresponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "EventPattern": {},
  "ScheduleExpression": {},
  "State": {},
  "Description": {},
  "RoleArn": {},
  "ManagedBy": {},
  "EventBusName": {},
  "CreatedBy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|EventPattern|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|State|object|false|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|
|ManagedBy|object|false|none|none|
|EventBusName|object|false|none|none|
|CreatedBy|object|false|none|none|

<h2 id="tocS_DescribeRuleRequest">DescribeRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulerequest"></a>
<a id="schema_DescribeRuleRequest"></a>
<a id="tocSdescriberulerequest"></a>
<a id="tocsdescriberulerequest"></a>

```json
{
  "Name": {},
  "EventBusName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|EventBusName|object|false|none|none|

<h2 id="tocS_DisableRuleRequest">DisableRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablerulerequest"></a>
<a id="schema_DisableRuleRequest"></a>
<a id="tocSdisablerulerequest"></a>
<a id="tocsdisablerulerequest"></a>

```json
{
  "Name": {},
  "EventBusName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|EventBusName|object|false|none|none|

<h2 id="tocS_EnableRuleRequest">EnableRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablerulerequest"></a>
<a id="schema_EnableRuleRequest"></a>
<a id="tocSenablerulerequest"></a>
<a id="tocsenablerulerequest"></a>

```json
{
  "Name": {},
  "EventBusName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|EventBusName|object|false|none|none|

<h2 id="tocS_ListApiDestinationsResponse">ListApiDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapidestinationsresponse"></a>
<a id="schema_ListApiDestinationsResponse"></a>
<a id="tocSlistapidestinationsresponse"></a>
<a id="tocslistapidestinationsresponse"></a>

```json
{
  "ApiDestinations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDestinations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApiDestinationsRequest">ListApiDestinationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapidestinationsrequest"></a>
<a id="schema_ListApiDestinationsRequest"></a>
<a id="tocSlistapidestinationsrequest"></a>
<a id="tocslistapidestinationsrequest"></a>

```json
{
  "NamePrefix": {},
  "ConnectionArn": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|ConnectionArn|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListArchivesResponse">ListArchivesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistarchivesresponse"></a>
<a id="schema_ListArchivesResponse"></a>
<a id="tocSlistarchivesresponse"></a>
<a id="tocslistarchivesresponse"></a>

```json
{
  "Archives": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Archives|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListArchivesRequest">ListArchivesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistarchivesrequest"></a>
<a id="schema_ListArchivesRequest"></a>
<a id="tocSlistarchivesrequest"></a>
<a id="tocslistarchivesrequest"></a>

```json
{
  "NamePrefix": {},
  "EventSourceArn": {},
  "State": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|EventSourceArn|object|false|none|none|
|State|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListConnectionsResponse">ListConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsresponse"></a>
<a id="schema_ListConnectionsResponse"></a>
<a id="tocSlistconnectionsresponse"></a>
<a id="tocslistconnectionsresponse"></a>

```json
{
  "Connections": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConnectionsRequest">ListConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsrequest"></a>
<a id="schema_ListConnectionsRequest"></a>
<a id="tocSlistconnectionsrequest"></a>
<a id="tocslistconnectionsrequest"></a>

```json
{
  "NamePrefix": {},
  "ConnectionState": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|ConnectionState|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListEndpointsResponse">ListEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsresponse"></a>
<a id="schema_ListEndpointsResponse"></a>
<a id="tocSlistendpointsresponse"></a>
<a id="tocslistendpointsresponse"></a>

```json
{
  "Endpoints": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEndpointsRequest">ListEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsrequest"></a>
<a id="schema_ListEndpointsRequest"></a>
<a id="tocSlistendpointsrequest"></a>
<a id="tocslistendpointsrequest"></a>

```json
{
  "NamePrefix": {},
  "HomeRegion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|HomeRegion|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListEventBusesResponse">ListEventBusesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventbusesresponse"></a>
<a id="schema_ListEventBusesResponse"></a>
<a id="tocSlisteventbusesresponse"></a>
<a id="tocslisteventbusesresponse"></a>

```json
{
  "EventBuses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventBuses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventBusesRequest">ListEventBusesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventbusesrequest"></a>
<a id="schema_ListEventBusesRequest"></a>
<a id="tocSlisteventbusesrequest"></a>
<a id="tocslisteventbusesrequest"></a>

```json
{
  "NamePrefix": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListEventSourcesResponse">ListEventSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsourcesresponse"></a>
<a id="schema_ListEventSourcesResponse"></a>
<a id="tocSlisteventsourcesresponse"></a>
<a id="tocslisteventsourcesresponse"></a>

```json
{
  "EventSources": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventSourcesRequest">ListEventSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsourcesrequest"></a>
<a id="schema_ListEventSourcesRequest"></a>
<a id="tocSlisteventsourcesrequest"></a>
<a id="tocslisteventsourcesrequest"></a>

```json
{
  "NamePrefix": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListPartnerEventSourceAccountsResponse">ListPartnerEventSourceAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpartnereventsourceaccountsresponse"></a>
<a id="schema_ListPartnerEventSourceAccountsResponse"></a>
<a id="tocSlistpartnereventsourceaccountsresponse"></a>
<a id="tocslistpartnereventsourceaccountsresponse"></a>

```json
{
  "PartnerEventSourceAccounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartnerEventSourceAccounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPartnerEventSourceAccountsRequest">ListPartnerEventSourceAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpartnereventsourceaccountsrequest"></a>
<a id="schema_ListPartnerEventSourceAccountsRequest"></a>
<a id="tocSlistpartnereventsourceaccountsrequest"></a>
<a id="tocslistpartnereventsourceaccountsrequest"></a>

```json
{
  "EventSourceName": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSourceName|object|true|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListPartnerEventSourcesResponse">ListPartnerEventSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpartnereventsourcesresponse"></a>
<a id="schema_ListPartnerEventSourcesResponse"></a>
<a id="tocSlistpartnereventsourcesresponse"></a>
<a id="tocslistpartnereventsourcesresponse"></a>

```json
{
  "PartnerEventSources": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartnerEventSources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPartnerEventSourcesRequest">ListPartnerEventSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpartnereventsourcesrequest"></a>
<a id="schema_ListPartnerEventSourcesRequest"></a>
<a id="tocSlistpartnereventsourcesrequest"></a>
<a id="tocslistpartnereventsourcesrequest"></a>

```json
{
  "NamePrefix": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|true|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListReplaysResponse">ListReplaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreplaysresponse"></a>
<a id="schema_ListReplaysResponse"></a>
<a id="tocSlistreplaysresponse"></a>
<a id="tocslistreplaysresponse"></a>

```json
{
  "Replays": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Replays|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListReplaysRequest">ListReplaysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreplaysrequest"></a>
<a id="schema_ListReplaysRequest"></a>
<a id="tocSlistreplaysrequest"></a>
<a id="tocslistreplaysrequest"></a>

```json
{
  "NamePrefix": {},
  "State": {},
  "EventSourceArn": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|State|object|false|none|none|
|EventSourceArn|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRuleNamesByTargetResponse">ListRuleNamesByTargetResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulenamesbytargetresponse"></a>
<a id="schema_ListRuleNamesByTargetResponse"></a>
<a id="tocSlistrulenamesbytargetresponse"></a>
<a id="tocslistrulenamesbytargetresponse"></a>

```json
{
  "RuleNames": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleNames|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRuleNamesByTargetRequest">ListRuleNamesByTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulenamesbytargetrequest"></a>
<a id="schema_ListRuleNamesByTargetRequest"></a>
<a id="tocSlistrulenamesbytargetrequest"></a>
<a id="tocslistrulenamesbytargetrequest"></a>

```json
{
  "TargetArn": {},
  "EventBusName": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetArn|object|true|none|none|
|EventBusName|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRulesResponse">ListRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesresponse"></a>
<a id="schema_ListRulesResponse"></a>
<a id="tocSlistrulesresponse"></a>
<a id="tocslistrulesresponse"></a>

```json
{
  "Rules": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRulesRequest">ListRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesrequest"></a>
<a id="schema_ListRulesRequest"></a>
<a id="tocSlistrulesrequest"></a>
<a id="tocslistrulesrequest"></a>

```json
{
  "NamePrefix": {},
  "EventBusName": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|false|none|none|
|EventBusName|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ListTargetsByRuleResponse">ListTargetsByRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsbyruleresponse"></a>
<a id="schema_ListTargetsByRuleResponse"></a>
<a id="tocSlisttargetsbyruleresponse"></a>
<a id="tocslisttargetsbyruleresponse"></a>

```json
{
  "Targets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Targets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTargetsByRuleRequest">ListTargetsByRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsbyrulerequest"></a>
<a id="schema_ListTargetsByRuleRequest"></a>
<a id="tocSlisttargetsbyrulerequest"></a>
<a id="tocslisttargetsbyrulerequest"></a>

```json
{
  "Rule": {},
  "EventBusName": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|true|none|none|
|EventBusName|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_PutEventsResponse">PutEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsresponse"></a>
<a id="schema_PutEventsResponse"></a>
<a id="tocSputeventsresponse"></a>
<a id="tocsputeventsresponse"></a>

```json
{
  "FailedEntryCount": {},
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntryCount|object|false|none|none|
|Entries|object|false|none|none|

<h2 id="tocS_PutEventsRequest">PutEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsrequest"></a>
<a id="schema_PutEventsRequest"></a>
<a id="tocSputeventsrequest"></a>
<a id="tocsputeventsrequest"></a>

```json
{
  "Entries": {},
  "EndpointId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|EndpointId|object|false|none|none|

<h2 id="tocS_PutPartnerEventsResponse">PutPartnerEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputpartnereventsresponse"></a>
<a id="schema_PutPartnerEventsResponse"></a>
<a id="tocSputpartnereventsresponse"></a>
<a id="tocsputpartnereventsresponse"></a>

```json
{
  "FailedEntryCount": {},
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntryCount|object|false|none|none|
|Entries|object|false|none|none|

<h2 id="tocS_PutPartnerEventsRequest">PutPartnerEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpartnereventsrequest"></a>
<a id="schema_PutPartnerEventsRequest"></a>
<a id="tocSputpartnereventsrequest"></a>
<a id="tocsputpartnereventsrequest"></a>

```json
{
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|

<h2 id="tocS_PutPermissionRequest">PutPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionrequest"></a>
<a id="schema_PutPermissionRequest"></a>
<a id="tocSputpermissionrequest"></a>
<a id="tocsputpermissionrequest"></a>

```json
{
  "EventBusName": {},
  "Action": {},
  "Principal": {},
  "StatementId": {},
  "Condition": {
    "Type": {},
    "Key": {},
    "Value": {}
  },
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventBusName|object|false|none|none|
|Action|object|false|none|none|
|Principal|object|false|none|none|
|StatementId|object|false|none|none|
|Condition|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_PolicyLengthExceededException">PolicyLengthExceededException</h2>
<!-- backwards compatibility -->
<a id="schemapolicylengthexceededexception"></a>
<a id="schema_PolicyLengthExceededException"></a>
<a id="tocSpolicylengthexceededexception"></a>
<a id="tocspolicylengthexceededexception"></a>

```json
null
```

<h2 id="tocS_PutRuleResponse">PutRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputruleresponse"></a>
<a id="schema_PutRuleResponse"></a>
<a id="tocSputruleresponse"></a>
<a id="tocsputruleresponse"></a>

```json
{
  "RuleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleArn|object|false|none|none|

<h2 id="tocS_PutRuleRequest">PutRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrulerequest"></a>
<a id="schema_PutRuleRequest"></a>
<a id="tocSputrulerequest"></a>
<a id="tocsputrulerequest"></a>

```json
{
  "Name": {},
  "ScheduleExpression": {},
  "EventPattern": {},
  "State": {},
  "Description": {},
  "RoleArn": {},
  "Tags": {},
  "EventBusName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ScheduleExpression|object|false|none|none|
|EventPattern|object|false|none|none|
|State|object|false|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|
|Tags|object|false|none|none|
|EventBusName|object|false|none|none|

<h2 id="tocS_PutTargetsResponse">PutTargetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputtargetsresponse"></a>
<a id="schema_PutTargetsResponse"></a>
<a id="tocSputtargetsresponse"></a>
<a id="tocsputtargetsresponse"></a>

```json
{
  "FailedEntryCount": {},
  "FailedEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntryCount|object|false|none|none|
|FailedEntries|object|false|none|none|

<h2 id="tocS_PutTargetsRequest">PutTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputtargetsrequest"></a>
<a id="schema_PutTargetsRequest"></a>
<a id="tocSputtargetsrequest"></a>
<a id="tocsputtargetsrequest"></a>

```json
{
  "Rule": {},
  "EventBusName": {},
  "Targets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|true|none|none|
|EventBusName|object|false|none|none|
|Targets|object|true|none|none|

<h2 id="tocS_RemovePermissionRequest">RemovePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovepermissionrequest"></a>
<a id="schema_RemovePermissionRequest"></a>
<a id="tocSremovepermissionrequest"></a>
<a id="tocsremovepermissionrequest"></a>

```json
{
  "StatementId": {},
  "RemoveAllPermissions": {},
  "EventBusName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementId|object|false|none|none|
|RemoveAllPermissions|object|false|none|none|
|EventBusName|object|false|none|none|

<h2 id="tocS_RemoveTargetsResponse">RemoveTargetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovetargetsresponse"></a>
<a id="schema_RemoveTargetsResponse"></a>
<a id="tocSremovetargetsresponse"></a>
<a id="tocsremovetargetsresponse"></a>

```json
{
  "FailedEntryCount": {},
  "FailedEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntryCount|object|false|none|none|
|FailedEntries|object|false|none|none|

<h2 id="tocS_RemoveTargetsRequest">RemoveTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetargetsrequest"></a>
<a id="schema_RemoveTargetsRequest"></a>
<a id="tocSremovetargetsrequest"></a>
<a id="tocsremovetargetsrequest"></a>

```json
{
  "Rule": {},
  "EventBusName": {},
  "Ids": {},
  "Force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|true|none|none|
|EventBusName|object|false|none|none|
|Ids|object|true|none|none|
|Force|object|false|none|none|

<h2 id="tocS_StartReplayResponse">StartReplayResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartreplayresponse"></a>
<a id="schema_StartReplayResponse"></a>
<a id="tocSstartreplayresponse"></a>
<a id="tocsstartreplayresponse"></a>

```json
{
  "ReplayArn": {},
  "State": {},
  "StateReason": {},
  "ReplayStartTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplayArn|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|ReplayStartTime|object|false|none|none|

<h2 id="tocS_StartReplayRequest">StartReplayRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartreplayrequest"></a>
<a id="schema_StartReplayRequest"></a>
<a id="tocSstartreplayrequest"></a>
<a id="tocsstartreplayrequest"></a>

```json
{
  "ReplayName": {},
  "Description": {},
  "EventSourceArn": {},
  "EventStartTime": {},
  "EventEndTime": {},
  "Destination": {
    "Arn": {},
    "FilterArns": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplayName|object|true|none|none|
|Description|object|false|none|none|
|EventSourceArn|object|true|none|none|
|EventStartTime|object|true|none|none|
|EventEndTime|object|true|none|none|
|Destination|object|true|none|none|

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

<h2 id="tocS_TestEventPatternResponse">TestEventPatternResponse</h2>
<!-- backwards compatibility -->
<a id="schematesteventpatternresponse"></a>
<a id="schema_TestEventPatternResponse"></a>
<a id="tocStesteventpatternresponse"></a>
<a id="tocstesteventpatternresponse"></a>

```json
{
  "Result": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Result|object|false|none|none|

<h2 id="tocS_TestEventPatternRequest">TestEventPatternRequest</h2>
<!-- backwards compatibility -->
<a id="schematesteventpatternrequest"></a>
<a id="schema_TestEventPatternRequest"></a>
<a id="tocStesteventpatternrequest"></a>
<a id="tocstesteventpatternrequest"></a>

```json
{
  "EventPattern": {},
  "Event": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventPattern|object|true|none|none|
|Event|object|true|none|none|

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

<h2 id="tocS_UpdateApiDestinationResponse">UpdateApiDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapidestinationresponse"></a>
<a id="schema_UpdateApiDestinationResponse"></a>
<a id="tocSupdateapidestinationresponse"></a>
<a id="tocsupdateapidestinationresponse"></a>

```json
{
  "ApiDestinationArn": {},
  "ApiDestinationState": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDestinationArn|object|false|none|none|
|ApiDestinationState|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_UpdateApiDestinationRequest">UpdateApiDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapidestinationrequest"></a>
<a id="schema_UpdateApiDestinationRequest"></a>
<a id="tocSupdateapidestinationrequest"></a>
<a id="tocsupdateapidestinationrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ConnectionArn": {},
  "InvocationEndpoint": {},
  "HttpMethod": {},
  "InvocationRateLimitPerSecond": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ConnectionArn|object|false|none|none|
|InvocationEndpoint|object|false|none|none|
|HttpMethod|object|false|none|none|
|InvocationRateLimitPerSecond|object|false|none|none|

<h2 id="tocS_UpdateArchiveResponse">UpdateArchiveResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatearchiveresponse"></a>
<a id="schema_UpdateArchiveResponse"></a>
<a id="tocSupdatearchiveresponse"></a>
<a id="tocsupdatearchiveresponse"></a>

```json
{
  "ArchiveArn": {},
  "State": {},
  "StateReason": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveArn|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_UpdateArchiveRequest">UpdateArchiveRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatearchiverequest"></a>
<a id="schema_UpdateArchiveRequest"></a>
<a id="tocSupdatearchiverequest"></a>
<a id="tocsupdatearchiverequest"></a>

```json
{
  "ArchiveName": {},
  "Description": {},
  "EventPattern": {},
  "RetentionDays": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveName|object|true|none|none|
|Description|object|false|none|none|
|EventPattern|object|false|none|none|
|RetentionDays|object|false|none|none|

<h2 id="tocS_UpdateConnectionResponse">UpdateConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionresponse"></a>
<a id="schema_UpdateConnectionResponse"></a>
<a id="tocSupdateconnectionresponse"></a>
<a id="tocsupdateconnectionresponse"></a>

```json
{
  "ConnectionArn": {},
  "ConnectionState": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|false|none|none|
|ConnectionState|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LastAuthorizedTime|object|false|none|none|

<h2 id="tocS_UpdateConnectionRequest">UpdateConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionrequest"></a>
<a id="schema_UpdateConnectionRequest"></a>
<a id="tocSupdateconnectionrequest"></a>
<a id="tocsupdateconnectionrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "AuthorizationType": {},
  "AuthParameters": {
    "BasicAuthParameters": {
      "Username": {},
      "Password": {}
    },
    "OAuthParameters": {
      "ClientParameters": {
        "ClientID": {},
        "ClientSecret": {}
      },
      "AuthorizationEndpoint": {},
      "HttpMethod": {},
      "OAuthHttpParameters": {
        "HeaderParameters": {},
        "QueryStringParameters": {},
        "BodyParameters": {}
      }
    },
    "ApiKeyAuthParameters": {
      "ApiKeyName": {},
      "ApiKeyValue": {}
    },
    "InvocationHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|AuthorizationType|object|false|none|none|
|AuthParameters|object|false|none|none|

<h2 id="tocS_UpdateEndpointResponse">UpdateEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateendpointresponse"></a>
<a id="schema_UpdateEndpointResponse"></a>
<a id="tocSupdateendpointresponse"></a>
<a id="tocsupdateendpointresponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {},
  "EndpointId": {},
  "EndpointUrl": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|RoutingConfig|object|false|none|none|
|ReplicationConfig|object|false|none|none|
|EventBuses|object|false|none|none|
|RoleArn|object|false|none|none|
|EndpointId|object|false|none|none|
|EndpointUrl|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_UpdateEndpointRequest">UpdateEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateendpointrequest"></a>
<a id="schema_UpdateEndpointRequest"></a>
<a id="tocSupdateendpointrequest"></a>
<a id="tocsupdateendpointrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|RoutingConfig|object|false|none|none|
|ReplicationConfig|object|false|none|none|
|EventBuses|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"string"
```

<h2 id="tocS_EventSourceName">EventSourceName</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcename"></a>
<a id="schema_EventSourceName"></a>
<a id="tocSeventsourcename"></a>
<a id="tocseventsourcename"></a>

```json
"string"
```

<h2 id="tocS_ApiDestinationArn">ApiDestinationArn</h2>
<!-- backwards compatibility -->
<a id="schemaapidestinationarn"></a>
<a id="schema_ApiDestinationArn"></a>
<a id="tocSapidestinationarn"></a>
<a id="tocsapidestinationarn"></a>

```json
"string"
```

<h2 id="tocS_ApiDestinationName">ApiDestinationName</h2>
<!-- backwards compatibility -->
<a id="schemaapidestinationname"></a>
<a id="schema_ApiDestinationName"></a>
<a id="tocSapidestinationname"></a>
<a id="tocsapidestinationname"></a>

```json
"string"
```

<h2 id="tocS_ApiDestinationState">ApiDestinationState</h2>
<!-- backwards compatibility -->
<a id="schemaapidestinationstate"></a>
<a id="schema_ApiDestinationState"></a>
<a id="tocSapidestinationstate"></a>
<a id="tocsapidestinationstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ConnectionArn">ConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionarn"></a>
<a id="schema_ConnectionArn"></a>
<a id="tocSconnectionarn"></a>
<a id="tocsconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_HttpsEndpoint">HttpsEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemahttpsendpoint"></a>
<a id="schema_HttpsEndpoint"></a>
<a id="tocShttpsendpoint"></a>
<a id="tocshttpsendpoint"></a>

```json
"string"
```

<h2 id="tocS_ApiDestinationHttpMethod">ApiDestinationHttpMethod</h2>
<!-- backwards compatibility -->
<a id="schemaapidestinationhttpmethod"></a>
<a id="schema_ApiDestinationHttpMethod"></a>
<a id="tocSapidestinationhttpmethod"></a>
<a id="tocsapidestinationhttpmethod"></a>

```json
"POST"
```

<h2 id="tocS_ApiDestinationInvocationRateLimitPerSecond">ApiDestinationInvocationRateLimitPerSecond</h2>
<!-- backwards compatibility -->
<a id="schemaapidestinationinvocationratelimitpersecond"></a>
<a id="schema_ApiDestinationInvocationRateLimitPerSecond"></a>
<a id="tocSapidestinationinvocationratelimitpersecond"></a>
<a id="tocsapidestinationinvocationratelimitpersecond"></a>

```json
1
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

<h2 id="tocS_ApiDestination">ApiDestination</h2>
<!-- backwards compatibility -->
<a id="schemaapidestination"></a>
<a id="schema_ApiDestination"></a>
<a id="tocSapidestination"></a>
<a id="tocsapidestination"></a>

```json
{
  "ApiDestinationArn": {},
  "Name": {},
  "ApiDestinationState": {},
  "ConnectionArn": {},
  "InvocationEndpoint": {},
  "HttpMethod": {},
  "InvocationRateLimitPerSecond": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

Contains details about an API destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDestinationArn|object|false|none|none|
|Name|object|false|none|none|
|ApiDestinationState|object|false|none|none|
|ConnectionArn|object|false|none|none|
|InvocationEndpoint|object|false|none|none|
|HttpMethod|object|false|none|none|
|InvocationRateLimitPerSecond|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_ApiDestinationDescription">ApiDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapidestinationdescription"></a>
<a id="schema_ApiDestinationDescription"></a>
<a id="tocSapidestinationdescription"></a>
<a id="tocsapidestinationdescription"></a>

```json
"string"
```

<h2 id="tocS_ApiDestinationResponseList">ApiDestinationResponseList</h2>
<!-- backwards compatibility -->
<a id="schemaapidestinationresponselist"></a>
<a id="schema_ApiDestinationResponseList"></a>
<a id="tocSapidestinationresponselist"></a>
<a id="tocsapidestinationresponselist"></a>

```json
[
  {
    "ApiDestinationArn": {},
    "Name": {},
    "ApiDestinationState": {},
    "ConnectionArn": {},
    "InvocationEndpoint": {},
    "HttpMethod": {},
    "InvocationRateLimitPerSecond": {},
    "CreationTime": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_ArchiveName">ArchiveName</h2>
<!-- backwards compatibility -->
<a id="schemaarchivename"></a>
<a id="schema_ArchiveName"></a>
<a id="tocSarchivename"></a>
<a id="tocsarchivename"></a>

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

<h2 id="tocS_ArchiveState">ArchiveState</h2>
<!-- backwards compatibility -->
<a id="schemaarchivestate"></a>
<a id="schema_ArchiveState"></a>
<a id="tocSarchivestate"></a>
<a id="tocsarchivestate"></a>

```json
"ENABLED"
```

<h2 id="tocS_ArchiveStateReason">ArchiveStateReason</h2>
<!-- backwards compatibility -->
<a id="schemaarchivestatereason"></a>
<a id="schema_ArchiveStateReason"></a>
<a id="tocSarchivestatereason"></a>
<a id="tocsarchivestatereason"></a>

```json
"string"
```

<h2 id="tocS_RetentionDays">RetentionDays</h2>
<!-- backwards compatibility -->
<a id="schemaretentiondays"></a>
<a id="schema_RetentionDays"></a>
<a id="tocSretentiondays"></a>
<a id="tocsretentiondays"></a>

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

<h2 id="tocS_Archive">Archive</h2>
<!-- backwards compatibility -->
<a id="schemaarchive"></a>
<a id="schema_Archive"></a>
<a id="tocSarchive"></a>
<a id="tocsarchive"></a>

```json
{
  "ArchiveName": {},
  "EventSourceArn": {},
  "State": {},
  "StateReason": {},
  "RetentionDays": {},
  "SizeBytes": {},
  "EventCount": {},
  "CreationTime": {}
}
```

An <code>Archive</code> object that contains details about an archive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveName|object|false|none|none|
|EventSourceArn|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|RetentionDays|object|false|none|none|
|SizeBytes|object|false|none|none|
|EventCount|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_ArchiveArn">ArchiveArn</h2>
<!-- backwards compatibility -->
<a id="schemaarchivearn"></a>
<a id="schema_ArchiveArn"></a>
<a id="tocSarchivearn"></a>
<a id="tocsarchivearn"></a>

```json
"string"
```

<h2 id="tocS_ArchiveDescription">ArchiveDescription</h2>
<!-- backwards compatibility -->
<a id="schemaarchivedescription"></a>
<a id="schema_ArchiveDescription"></a>
<a id="tocSarchivedescription"></a>
<a id="tocsarchivedescription"></a>

```json
"string"
```

<h2 id="tocS_ArchiveResponseList">ArchiveResponseList</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveresponselist"></a>
<a id="schema_ArchiveResponseList"></a>
<a id="tocSarchiveresponselist"></a>
<a id="tocsarchiveresponselist"></a>

```json
[
  {
    "ArchiveName": {},
    "EventSourceArn": {},
    "State": {},
    "StateReason": {},
    "RetentionDays": {},
    "SizeBytes": {},
    "EventCount": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_AssignPublicIp">AssignPublicIp</h2>
<!-- backwards compatibility -->
<a id="schemaassignpublicip"></a>
<a id="schema_AssignPublicIp"></a>
<a id="tocSassignpublicip"></a>
<a id="tocsassignpublicip"></a>

```json
"ENABLED"
```

<h2 id="tocS_AuthHeaderParameters">AuthHeaderParameters</h2>
<!-- backwards compatibility -->
<a id="schemaauthheaderparameters"></a>
<a id="schema_AuthHeaderParameters"></a>
<a id="tocSauthheaderparameters"></a>
<a id="tocsauthheaderparameters"></a>

```json
"string"
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AwsVpcConfiguration">AwsVpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaawsvpcconfiguration"></a>
<a id="schema_AwsVpcConfiguration"></a>
<a id="tocSawsvpcconfiguration"></a>
<a id="tocsawsvpcconfiguration"></a>

```json
{
  "Subnets": {},
  "SecurityGroups": {},
  "AssignPublicIp": {}
}
```

This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subnets|object|true|none|none|
|SecurityGroups|object|false|none|none|
|AssignPublicIp|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_BatchArrayProperties">BatchArrayProperties</h2>
<!-- backwards compatibility -->
<a id="schemabatcharrayproperties"></a>
<a id="schema_BatchArrayProperties"></a>
<a id="tocSbatcharrayproperties"></a>
<a id="tocsbatcharrayproperties"></a>

```json
{
  "Size": {}
}
```

The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Size|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_BatchRetryStrategy">BatchRetryStrategy</h2>
<!-- backwards compatibility -->
<a id="schemabatchretrystrategy"></a>
<a id="schema_BatchRetryStrategy"></a>
<a id="tocSbatchretrystrategy"></a>
<a id="tocsbatchretrystrategy"></a>

```json
{
  "Attempts": {}
}
```

The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attempts|object|false|none|none|

<h2 id="tocS_BatchParameters">BatchParameters</h2>
<!-- backwards compatibility -->
<a id="schemabatchparameters"></a>
<a id="schema_BatchParameters"></a>
<a id="tocSbatchparameters"></a>
<a id="tocsbatchparameters"></a>

```json
{
  "JobDefinition": {},
  "JobName": {},
  "ArrayProperties": {
    "Size": {}
  },
  "RetryStrategy": {
    "Attempts": {}
  }
}
```

The custom parameters to be used when the target is an Batch job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobDefinition|object|true|none|none|
|JobName|object|true|none|none|
|ArrayProperties|object|false|none|none|
|RetryStrategy|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ReplayName">ReplayName</h2>
<!-- backwards compatibility -->
<a id="schemareplayname"></a>
<a id="schema_ReplayName"></a>
<a id="tocSreplayname"></a>
<a id="tocsreplayname"></a>

```json
"string"
```

<h2 id="tocS_ReplayArn">ReplayArn</h2>
<!-- backwards compatibility -->
<a id="schemareplayarn"></a>
<a id="schema_ReplayArn"></a>
<a id="tocSreplayarn"></a>
<a id="tocsreplayarn"></a>

```json
"string"
```

<h2 id="tocS_ReplayState">ReplayState</h2>
<!-- backwards compatibility -->
<a id="schemareplaystate"></a>
<a id="schema_ReplayState"></a>
<a id="tocSreplaystate"></a>
<a id="tocsreplaystate"></a>

```json
"STARTING"
```

<h2 id="tocS_ReplayStateReason">ReplayStateReason</h2>
<!-- backwards compatibility -->
<a id="schemareplaystatereason"></a>
<a id="schema_ReplayStateReason"></a>
<a id="tocSreplaystatereason"></a>
<a id="tocsreplaystatereason"></a>

```json
"string"
```

<h2 id="tocS_CapacityProvider">CapacityProvider</h2>
<!-- backwards compatibility -->
<a id="schemacapacityprovider"></a>
<a id="schema_CapacityProvider"></a>
<a id="tocScapacityprovider"></a>
<a id="tocscapacityprovider"></a>

```json
"string"
```

<h2 id="tocS_CapacityProviderStrategyItem">CapacityProviderStrategyItem</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategyitem"></a>
<a id="schema_CapacityProviderStrategyItem"></a>
<a id="tocScapacityproviderstrategyitem"></a>
<a id="tocscapacityproviderstrategyitem"></a>

```json
{
  "capacityProvider": {},
  "weight": {},
  "base": {}
}
```

The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProvider|object|true|none|none|
|weight|object|false|none|none|
|base|object|false|none|none|

<h2 id="tocS_CapacityProviderStrategy">CapacityProviderStrategy</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategy"></a>
<a id="schema_CapacityProviderStrategy"></a>
<a id="tocScapacityproviderstrategy"></a>
<a id="tocscapacityproviderstrategy"></a>

```json
[
  {
    "capacityProvider": {},
    "weight": {},
    "base": {}
  }
]
```

<h2 id="tocS_CapacityProviderStrategyItemWeight">CapacityProviderStrategyItemWeight</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategyitemweight"></a>
<a id="schema_CapacityProviderStrategyItemWeight"></a>
<a id="tocScapacityproviderstrategyitemweight"></a>
<a id="tocscapacityproviderstrategyitemweight"></a>

```json
0
```

<h2 id="tocS_CapacityProviderStrategyItemBase">CapacityProviderStrategyItemBase</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategyitembase"></a>
<a id="schema_CapacityProviderStrategyItemBase"></a>
<a id="tocScapacityproviderstrategyitembase"></a>
<a id="tocscapacityproviderstrategyitembase"></a>

```json
0
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "Type": {},
  "Key": {},
  "Value": {}
}
```

<p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ConnectionName">ConnectionName</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionname"></a>
<a id="schema_ConnectionName"></a>
<a id="tocSconnectionname"></a>
<a id="tocsconnectionname"></a>

```json
"string"
```

<h2 id="tocS_ConnectionState">ConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstate"></a>
<a id="schema_ConnectionState"></a>
<a id="tocSconnectionstate"></a>
<a id="tocsconnectionstate"></a>

```json
"CREATING"
```

<h2 id="tocS_ConnectionStateReason">ConnectionStateReason</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatereason"></a>
<a id="schema_ConnectionStateReason"></a>
<a id="tocSconnectionstatereason"></a>
<a id="tocsconnectionstatereason"></a>

```json
"string"
```

<h2 id="tocS_ConnectionAuthorizationType">ConnectionAuthorizationType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionauthorizationtype"></a>
<a id="schema_ConnectionAuthorizationType"></a>
<a id="tocSconnectionauthorizationtype"></a>
<a id="tocsconnectionauthorizationtype"></a>

```json
"BASIC"
```

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "ConnectionArn": {},
  "Name": {},
  "ConnectionState": {},
  "StateReason": {},
  "AuthorizationType": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LastAuthorizedTime": {}
}
```

Contains information about a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|false|none|none|
|Name|object|false|none|none|
|ConnectionState|object|false|none|none|
|StateReason|object|false|none|none|
|AuthorizationType|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LastAuthorizedTime|object|false|none|none|

<h2 id="tocS_ConnectionApiKeyAuthResponseParameters">ConnectionApiKeyAuthResponseParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionapikeyauthresponseparameters"></a>
<a id="schema_ConnectionApiKeyAuthResponseParameters"></a>
<a id="tocSconnectionapikeyauthresponseparameters"></a>
<a id="tocsconnectionapikeyauthresponseparameters"></a>

```json
{
  "ApiKeyName": {}
}
```

Contains the authorization parameters for the connection if API Key is specified as the authorization type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiKeyName|object|false|none|none|

<h2 id="tocS_ConnectionBasicAuthResponseParameters">ConnectionBasicAuthResponseParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionbasicauthresponseparameters"></a>
<a id="schema_ConnectionBasicAuthResponseParameters"></a>
<a id="tocSconnectionbasicauthresponseparameters"></a>
<a id="tocsconnectionbasicauthresponseparameters"></a>

```json
{
  "Username": {}
}
```

Contains the authorization parameters for the connection if Basic is specified as the authorization type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|

<h2 id="tocS_ConnectionOAuthResponseParameters">ConnectionOAuthResponseParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionoauthresponseparameters"></a>
<a id="schema_ConnectionOAuthResponseParameters"></a>
<a id="tocSconnectionoauthresponseparameters"></a>
<a id="tocsconnectionoauthresponseparameters"></a>

```json
{
  "ClientParameters": {
    "ClientID": {}
  },
  "AuthorizationEndpoint": {},
  "HttpMethod": {},
  "OAuthHttpParameters": {
    "HeaderParameters": {},
    "QueryStringParameters": {},
    "BodyParameters": {}
  }
}
```

Contains the response parameters when OAuth is specified as the authorization type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientParameters|object|false|none|none|
|AuthorizationEndpoint|object|false|none|none|
|HttpMethod|object|false|none|none|
|OAuthHttpParameters|object|false|none|none|

<h2 id="tocS_ConnectionHttpParameters">ConnectionHttpParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionhttpparameters"></a>
<a id="schema_ConnectionHttpParameters"></a>
<a id="tocSconnectionhttpparameters"></a>
<a id="tocsconnectionhttpparameters"></a>

```json
{
  "HeaderParameters": {},
  "QueryStringParameters": {},
  "BodyParameters": {}
}
```

Contains additional parameters for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderParameters|object|false|none|none|
|QueryStringParameters|object|false|none|none|
|BodyParameters|object|false|none|none|

<h2 id="tocS_ConnectionAuthResponseParameters">ConnectionAuthResponseParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionauthresponseparameters"></a>
<a id="schema_ConnectionAuthResponseParameters"></a>
<a id="tocSconnectionauthresponseparameters"></a>
<a id="tocsconnectionauthresponseparameters"></a>

```json
{
  "BasicAuthParameters": {
    "Username": {}
  },
  "OAuthParameters": {
    "ClientParameters": {
      "ClientID": {}
    },
    "AuthorizationEndpoint": {},
    "HttpMethod": {},
    "OAuthHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  },
  "ApiKeyAuthParameters": {
    "ApiKeyName": {}
  },
  "InvocationHttpParameters": {
    "HeaderParameters": {},
    "QueryStringParameters": {},
    "BodyParameters": {}
  }
}
```

Contains the authorization parameters to use for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BasicAuthParameters|object|false|none|none|
|OAuthParameters|object|false|none|none|
|ApiKeyAuthParameters|object|false|none|none|
|InvocationHttpParameters|object|false|none|none|

<h2 id="tocS_ConnectionBodyParameter">ConnectionBodyParameter</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionbodyparameter"></a>
<a id="schema_ConnectionBodyParameter"></a>
<a id="tocSconnectionbodyparameter"></a>
<a id="tocsconnectionbodyparameter"></a>

```json
{
  "Key": {},
  "Value": {},
  "IsValueSecret": {}
}
```

Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|IsValueSecret|object|false|none|none|

<h2 id="tocS_ConnectionBodyParametersList">ConnectionBodyParametersList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionbodyparameterslist"></a>
<a id="schema_ConnectionBodyParametersList"></a>
<a id="tocSconnectionbodyparameterslist"></a>
<a id="tocsconnectionbodyparameterslist"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "IsValueSecret": {}
  }
]
```

<h2 id="tocS_ConnectionDescription">ConnectionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiondescription"></a>
<a id="schema_ConnectionDescription"></a>
<a id="tocSconnectiondescription"></a>
<a id="tocsconnectiondescription"></a>

```json
"string"
```

<h2 id="tocS_HeaderKey">HeaderKey</h2>
<!-- backwards compatibility -->
<a id="schemaheaderkey"></a>
<a id="schema_HeaderKey"></a>
<a id="tocSheaderkey"></a>
<a id="tocsheaderkey"></a>

```json
"string"
```

<h2 id="tocS_HeaderValue">HeaderValue</h2>
<!-- backwards compatibility -->
<a id="schemaheadervalue"></a>
<a id="schema_HeaderValue"></a>
<a id="tocSheadervalue"></a>
<a id="tocsheadervalue"></a>

```json
"string"
```

<h2 id="tocS_ConnectionHeaderParameter">ConnectionHeaderParameter</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionheaderparameter"></a>
<a id="schema_ConnectionHeaderParameter"></a>
<a id="tocSconnectionheaderparameter"></a>
<a id="tocsconnectionheaderparameter"></a>

```json
{
  "Key": {},
  "Value": {},
  "IsValueSecret": {}
}
```

Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|IsValueSecret|object|false|none|none|

<h2 id="tocS_ConnectionHeaderParametersList">ConnectionHeaderParametersList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionheaderparameterslist"></a>
<a id="schema_ConnectionHeaderParametersList"></a>
<a id="tocSconnectionheaderparameterslist"></a>
<a id="tocsconnectionheaderparameterslist"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "IsValueSecret": {}
  }
]
```

<h2 id="tocS_ConnectionQueryStringParametersList">ConnectionQueryStringParametersList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionquerystringparameterslist"></a>
<a id="schema_ConnectionQueryStringParametersList"></a>
<a id="tocSconnectionquerystringparameterslist"></a>
<a id="tocsconnectionquerystringparameterslist"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "IsValueSecret": {}
  }
]
```

<h2 id="tocS_ConnectionOAuthClientResponseParameters">ConnectionOAuthClientResponseParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionoauthclientresponseparameters"></a>
<a id="schema_ConnectionOAuthClientResponseParameters"></a>
<a id="tocSconnectionoauthclientresponseparameters"></a>
<a id="tocsconnectionoauthclientresponseparameters"></a>

```json
{
  "ClientID": {}
}
```

Contains the client response parameters for the connection when OAuth is specified as the authorization type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|object|false|none|none|

<h2 id="tocS_ConnectionOAuthHttpMethod">ConnectionOAuthHttpMethod</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionoauthhttpmethod"></a>
<a id="schema_ConnectionOAuthHttpMethod"></a>
<a id="tocSconnectionoauthhttpmethod"></a>
<a id="tocsconnectionoauthhttpmethod"></a>

```json
"GET"
```

<h2 id="tocS_QueryStringKey">QueryStringKey</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringkey"></a>
<a id="schema_QueryStringKey"></a>
<a id="tocSquerystringkey"></a>
<a id="tocsquerystringkey"></a>

```json
"string"
```

<h2 id="tocS_QueryStringValue">QueryStringValue</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringvalue"></a>
<a id="schema_QueryStringValue"></a>
<a id="tocSquerystringvalue"></a>
<a id="tocsquerystringvalue"></a>

```json
"string"
```

<h2 id="tocS_ConnectionQueryStringParameter">ConnectionQueryStringParameter</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionquerystringparameter"></a>
<a id="schema_ConnectionQueryStringParameter"></a>
<a id="tocSconnectionquerystringparameter"></a>
<a id="tocsconnectionquerystringparameter"></a>

```json
{
  "Key": {},
  "Value": {},
  "IsValueSecret": {}
}
```

Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|IsValueSecret|object|false|none|none|

<h2 id="tocS_ConnectionResponseList">ConnectionResponseList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionresponselist"></a>
<a id="schema_ConnectionResponseList"></a>
<a id="tocSconnectionresponselist"></a>
<a id="tocsconnectionresponselist"></a>

```json
[
  {
    "ConnectionArn": {},
    "Name": {},
    "ConnectionState": {},
    "StateReason": {},
    "AuthorizationType": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "LastAuthorizedTime": {}
  }
]
```

<h2 id="tocS_EventPattern">EventPattern</h2>
<!-- backwards compatibility -->
<a id="schemaeventpattern"></a>
<a id="schema_EventPattern"></a>
<a id="tocSeventpattern"></a>
<a id="tocseventpattern"></a>

```json
"string"
```

<h2 id="tocS_CreateConnectionApiKeyAuthRequestParameters">CreateConnectionApiKeyAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionapikeyauthrequestparameters"></a>
<a id="schema_CreateConnectionApiKeyAuthRequestParameters"></a>
<a id="tocScreateconnectionapikeyauthrequestparameters"></a>
<a id="tocscreateconnectionapikeyauthrequestparameters"></a>

```json
{
  "ApiKeyName": {},
  "ApiKeyValue": {}
}
```

Contains the API key authorization parameters for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiKeyName|object|true|none|none|
|ApiKeyValue|object|true|none|none|

<h2 id="tocS_CreateConnectionBasicAuthRequestParameters">CreateConnectionBasicAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionbasicauthrequestparameters"></a>
<a id="schema_CreateConnectionBasicAuthRequestParameters"></a>
<a id="tocScreateconnectionbasicauthrequestparameters"></a>
<a id="tocscreateconnectionbasicauthrequestparameters"></a>

```json
{
  "Username": {},
  "Password": {}
}
```

Contains the Basic authorization parameters to use for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|true|none|none|
|Password|object|true|none|none|

<h2 id="tocS_CreateConnectionOAuthRequestParameters">CreateConnectionOAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionoauthrequestparameters"></a>
<a id="schema_CreateConnectionOAuthRequestParameters"></a>
<a id="tocScreateconnectionoauthrequestparameters"></a>
<a id="tocscreateconnectionoauthrequestparameters"></a>

```json
{
  "ClientParameters": {
    "ClientID": {},
    "ClientSecret": {}
  },
  "AuthorizationEndpoint": {},
  "HttpMethod": {},
  "OAuthHttpParameters": {
    "HeaderParameters": {},
    "QueryStringParameters": {},
    "BodyParameters": {}
  }
}
```

Contains the OAuth authorization parameters to use for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientParameters|object|true|none|none|
|AuthorizationEndpoint|object|true|none|none|
|HttpMethod|object|true|none|none|
|OAuthHttpParameters|object|false|none|none|

<h2 id="tocS_CreateConnectionAuthRequestParameters">CreateConnectionAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionauthrequestparameters"></a>
<a id="schema_CreateConnectionAuthRequestParameters"></a>
<a id="tocScreateconnectionauthrequestparameters"></a>
<a id="tocscreateconnectionauthrequestparameters"></a>

```json
{
  "BasicAuthParameters": {
    "Username": {},
    "Password": {}
  },
  "OAuthParameters": {
    "ClientParameters": {
      "ClientID": {},
      "ClientSecret": {}
    },
    "AuthorizationEndpoint": {},
    "HttpMethod": {},
    "OAuthHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  },
  "ApiKeyAuthParameters": {
    "ApiKeyName": {},
    "ApiKeyValue": {}
  },
  "InvocationHttpParameters": {
    "HeaderParameters": {},
    "QueryStringParameters": {},
    "BodyParameters": {}
  }
}
```

Contains the authorization parameters for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BasicAuthParameters|object|false|none|none|
|OAuthParameters|object|false|none|none|
|ApiKeyAuthParameters|object|false|none|none|
|InvocationHttpParameters|object|false|none|none|

<h2 id="tocS_CreateConnectionOAuthClientRequestParameters">CreateConnectionOAuthClientRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionoauthclientrequestparameters"></a>
<a id="schema_CreateConnectionOAuthClientRequestParameters"></a>
<a id="tocScreateconnectionoauthclientrequestparameters"></a>
<a id="tocscreateconnectionoauthclientrequestparameters"></a>

```json
{
  "ClientID": {},
  "ClientSecret": {}
}
```

Contains the Basic authorization parameters to use for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|object|true|none|none|
|ClientSecret|object|true|none|none|

<h2 id="tocS_EndpointName">EndpointName</h2>
<!-- backwards compatibility -->
<a id="schemaendpointname"></a>
<a id="schema_EndpointName"></a>
<a id="tocSendpointname"></a>
<a id="tocsendpointname"></a>

```json
"string"
```

<h2 id="tocS_EndpointDescription">EndpointDescription</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdescription"></a>
<a id="schema_EndpointDescription"></a>
<a id="tocSendpointdescription"></a>
<a id="tocsendpointdescription"></a>

```json
"string"
```

<h2 id="tocS_RoutingConfig">RoutingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaroutingconfig"></a>
<a id="schema_RoutingConfig"></a>
<a id="tocSroutingconfig"></a>
<a id="tocsroutingconfig"></a>

```json
{
  "FailoverConfig": {
    "Primary": {
      "HealthCheck": {}
    },
    "Secondary": {
      "Route": {}
    }
  }
}
```

The routing configuration of the endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailoverConfig|object|true|none|none|

<h2 id="tocS_ReplicationConfig">ReplicationConfig</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfig"></a>
<a id="schema_ReplicationConfig"></a>
<a id="tocSreplicationconfig"></a>
<a id="tocsreplicationconfig"></a>

```json
{
  "State": {}
}
```

Endpoints can replicate all events to the secondary Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|

<h2 id="tocS_EndpointEventBusList">EndpointEventBusList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointeventbuslist"></a>
<a id="schema_EndpointEventBusList"></a>
<a id="tocSendpointeventbuslist"></a>
<a id="tocsendpointeventbuslist"></a>

```json
[
  {
    "EventBusArn": {}
  },
  {
    "EventBusArn": {}
  }
]
```

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_EndpointArn">EndpointArn</h2>
<!-- backwards compatibility -->
<a id="schemaendpointarn"></a>
<a id="schema_EndpointArn"></a>
<a id="tocSendpointarn"></a>
<a id="tocsendpointarn"></a>

```json
"string"
```

<h2 id="tocS_EndpointState">EndpointState</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstate"></a>
<a id="schema_EndpointState"></a>
<a id="tocSendpointstate"></a>
<a id="tocsendpointstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_EventBusName">EventBusName</h2>
<!-- backwards compatibility -->
<a id="schemaeventbusname"></a>
<a id="schema_EventBusName"></a>
<a id="tocSeventbusname"></a>
<a id="tocseventbusname"></a>

```json
"string"
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
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CreatedBy">CreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemacreatedby"></a>
<a id="schema_CreatedBy"></a>
<a id="tocScreatedby"></a>
<a id="tocscreatedby"></a>

```json
"string"
```

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
"string"
```

Redshift Database

<h2 id="tocS_DbUser">DbUser</h2>
<!-- backwards compatibility -->
<a id="schemadbuser"></a>
<a id="schema_DbUser"></a>
<a id="tocSdbuser"></a>
<a id="tocsdbuser"></a>

```json
"string"
```

Database user name

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_DeadLetterConfig">DeadLetterConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeadletterconfig"></a>
<a id="schema_DeadLetterConfig"></a>
<a id="tocSdeadletterconfig"></a>
<a id="tocsdeadletterconfig"></a>

```json
{
  "Arn": {}
}
```

A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_RuleName">RuleName</h2>
<!-- backwards compatibility -->
<a id="schemarulename"></a>
<a id="schema_RuleName"></a>
<a id="tocSrulename"></a>
<a id="tocsrulename"></a>

```json
"string"
```

<h2 id="tocS_EventBusNameOrArn">EventBusNameOrArn</h2>
<!-- backwards compatibility -->
<a id="schemaeventbusnameorarn"></a>
<a id="schema_EventBusNameOrArn"></a>
<a id="tocSeventbusnameorarn"></a>
<a id="tocseventbusnameorarn"></a>

```json
"string"
```

<h2 id="tocS_SecretsManagerSecretArn">SecretsManagerSecretArn</h2>
<!-- backwards compatibility -->
<a id="schemasecretsmanagersecretarn"></a>
<a id="schema_SecretsManagerSecretArn"></a>
<a id="tocSsecretsmanagersecretarn"></a>
<a id="tocssecretsmanagersecretarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_HomeRegion">HomeRegion</h2>
<!-- backwards compatibility -->
<a id="schemahomeregion"></a>
<a id="schema_HomeRegion"></a>
<a id="tocShomeregion"></a>
<a id="tocshomeregion"></a>

```json
"stringstr"
```

<h2 id="tocS_EndpointId">EndpointId</h2>
<!-- backwards compatibility -->
<a id="schemaendpointid"></a>
<a id="schema_EndpointId"></a>
<a id="tocSendpointid"></a>
<a id="tocsendpointid"></a>

```json
"string"
```

<h2 id="tocS_EndpointUrl">EndpointUrl</h2>
<!-- backwards compatibility -->
<a id="schemaendpointurl"></a>
<a id="schema_EndpointUrl"></a>
<a id="tocSendpointurl"></a>
<a id="tocsendpointurl"></a>

```json
"string"
```

<h2 id="tocS_EndpointStateReason">EndpointStateReason</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstatereason"></a>
<a id="schema_EndpointStateReason"></a>
<a id="tocSendpointstatereason"></a>
<a id="tocsendpointstatereason"></a>

```json
"string"
```

<h2 id="tocS_EventSourceState">EventSourceState</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcestate"></a>
<a id="schema_EventSourceState"></a>
<a id="tocSeventsourcestate"></a>
<a id="tocseventsourcestate"></a>

```json
"PENDING"
```

<h2 id="tocS_ReplayDescription">ReplayDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplaydescription"></a>
<a id="schema_ReplayDescription"></a>
<a id="tocSreplaydescription"></a>
<a id="tocsreplaydescription"></a>

```json
"string"
```

<h2 id="tocS_ReplayDestination">ReplayDestination</h2>
<!-- backwards compatibility -->
<a id="schemareplaydestination"></a>
<a id="schema_ReplayDestination"></a>
<a id="tocSreplaydestination"></a>
<a id="tocsreplaydestination"></a>

```json
{
  "Arn": {},
  "FilterArns": {}
}
```

A <code>ReplayDestination</code> object that contains details about a replay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|FilterArns|object|false|none|none|

<h2 id="tocS_RuleArn">RuleArn</h2>
<!-- backwards compatibility -->
<a id="schemarulearn"></a>
<a id="schema_RuleArn"></a>
<a id="tocSrulearn"></a>
<a id="tocsrulearn"></a>

```json
"string"
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

<h2 id="tocS_RuleState">RuleState</h2>
<!-- backwards compatibility -->
<a id="schemarulestate"></a>
<a id="schema_RuleState"></a>
<a id="tocSrulestate"></a>
<a id="tocsrulestate"></a>

```json
"ENABLED"
```

<h2 id="tocS_RuleDescription">RuleDescription</h2>
<!-- backwards compatibility -->
<a id="schemaruledescription"></a>
<a id="schema_RuleDescription"></a>
<a id="tocSruledescription"></a>
<a id="tocsruledescription"></a>

```json
"string"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_ManagedBy">ManagedBy</h2>
<!-- backwards compatibility -->
<a id="schemamanagedby"></a>
<a id="schema_ManagedBy"></a>
<a id="tocSmanagedby"></a>
<a id="tocsmanagedby"></a>

```json
"string"
```

<h2 id="tocS_LimitMin1">LimitMin1</h2>
<!-- backwards compatibility -->
<a id="schemalimitmin1"></a>
<a id="schema_LimitMin1"></a>
<a id="tocSlimitmin1"></a>
<a id="tocslimitmin1"></a>

```json
1
```

<h2 id="tocS_LaunchType">LaunchType</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtype"></a>
<a id="schema_LaunchType"></a>
<a id="tocSlaunchtype"></a>
<a id="tocslaunchtype"></a>

```json
"EC2"
```

<h2 id="tocS_NetworkConfiguration">NetworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfiguration"></a>
<a id="schema_NetworkConfiguration"></a>
<a id="tocSnetworkconfiguration"></a>
<a id="tocsnetworkconfiguration"></a>

```json
{
  "awsvpcConfiguration": {
    "Subnets": {},
    "SecurityGroups": {},
    "AssignPublicIp": {}
  }
}
```

This structure specifies the network configuration for an ECS task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsvpcConfiguration|object|false|none|none|

<h2 id="tocS_PlacementConstraints">PlacementConstraints</h2>
<!-- backwards compatibility -->
<a id="schemaplacementconstraints"></a>
<a id="schema_PlacementConstraints"></a>
<a id="tocSplacementconstraints"></a>
<a id="tocsplacementconstraints"></a>

```json
[
  {
    "type": {},
    "expression": {}
  }
]
```

<h2 id="tocS_PlacementStrategies">PlacementStrategies</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstrategies"></a>
<a id="schema_PlacementStrategies"></a>
<a id="tocSplacementstrategies"></a>
<a id="tocsplacementstrategies"></a>

```json
[
  {
    "type": {},
    "field": {}
  }
]
```

<h2 id="tocS_PropagateTags">PropagateTags</h2>
<!-- backwards compatibility -->
<a id="schemapropagatetags"></a>
<a id="schema_PropagateTags"></a>
<a id="tocSpropagatetags"></a>
<a id="tocspropagatetags"></a>

```json
"TASK_DEFINITION"
```

<h2 id="tocS_ReferenceId">ReferenceId</h2>
<!-- backwards compatibility -->
<a id="schemareferenceid"></a>
<a id="schema_ReferenceId"></a>
<a id="tocSreferenceid"></a>
<a id="tocsreferenceid"></a>

```json
"string"
```

<h2 id="tocS_EcsParameters">EcsParameters</h2>
<!-- backwards compatibility -->
<a id="schemaecsparameters"></a>
<a id="schema_EcsParameters"></a>
<a id="tocSecsparameters"></a>
<a id="tocsecsparameters"></a>

```json
{
  "TaskDefinitionArn": {},
  "TaskCount": {},
  "LaunchType": {},
  "NetworkConfiguration": {
    "awsvpcConfiguration": {
      "Subnets": {},
      "SecurityGroups": {},
      "AssignPublicIp": {}
    }
  },
  "PlatformVersion": {},
  "Group": {},
  "CapacityProviderStrategy": {},
  "EnableECSManagedTags": {},
  "EnableExecuteCommand": {},
  "PlacementConstraints": {},
  "PlacementStrategy": {},
  "PropagateTags": {},
  "ReferenceId": {},
  "Tags": {}
}
```

The custom parameters to be used when the target is an Amazon ECS task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskDefinitionArn|object|true|none|none|
|TaskCount|object|false|none|none|
|LaunchType|object|false|none|none|
|NetworkConfiguration|object|false|none|none|
|PlatformVersion|object|false|none|none|
|Group|object|false|none|none|
|CapacityProviderStrategy|object|false|none|none|
|EnableECSManagedTags|object|false|none|none|
|EnableExecuteCommand|object|false|none|none|
|PlacementConstraints|object|false|none|none|
|PlacementStrategy|object|false|none|none|
|PropagateTags|object|false|none|none|
|ReferenceId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "Name": {},
  "Description": {},
  "Arn": {},
  "RoutingConfig": {
    "FailoverConfig": {
      "Primary": {
        "HealthCheck": {}
      },
      "Secondary": {
        "Route": {}
      }
    }
  },
  "ReplicationConfig": {
    "State": {}
  },
  "EventBuses": {},
  "RoleArn": {},
  "EndpointId": {},
  "EndpointUrl": {},
  "State": {},
  "StateReason": {},
  "CreationTime": {},
  "LastModifiedTime": {}
}
```

A global endpoint used to improve your application's availability by making it regional-fault tolerant. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Arn|object|false|none|none|
|RoutingConfig|object|false|none|none|
|ReplicationConfig|object|false|none|none|
|EventBuses|object|false|none|none|
|RoleArn|object|false|none|none|
|EndpointId|object|false|none|none|
|EndpointUrl|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_NonPartnerEventBusArn">NonPartnerEventBusArn</h2>
<!-- backwards compatibility -->
<a id="schemanonpartnereventbusarn"></a>
<a id="schema_NonPartnerEventBusArn"></a>
<a id="tocSnonpartnereventbusarn"></a>
<a id="tocsnonpartnereventbusarn"></a>

```json
"string"
```

<h2 id="tocS_EndpointEventBus">EndpointEventBus</h2>
<!-- backwards compatibility -->
<a id="schemaendpointeventbus"></a>
<a id="schema_EndpointEventBus"></a>
<a id="tocSendpointeventbus"></a>
<a id="tocsendpointeventbus"></a>

```json
{
  "EventBusArn": {}
}
```

The event buses the endpoint is associated with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventBusArn|object|true|none|none|

<h2 id="tocS_EndpointList">EndpointList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointlist"></a>
<a id="schema_EndpointList"></a>
<a id="tocSendpointlist"></a>
<a id="tocsendpointlist"></a>

```json
[
  {
    "Name": {},
    "Description": {},
    "Arn": {},
    "RoutingConfig": {
      "FailoverConfig": {
        "Primary": {
          "HealthCheck": {}
        },
        "Secondary": {
          "Route": {}
        }
      }
    },
    "ReplicationConfig": {
      "State": {}
    },
    "EventBuses": {},
    "RoleArn": {},
    "EndpointId": {},
    "EndpointUrl": {},
    "State": {},
    "StateReason": {},
    "CreationTime": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_EventBus">EventBus</h2>
<!-- backwards compatibility -->
<a id="schemaeventbus"></a>
<a id="schema_EventBus"></a>
<a id="tocSeventbus"></a>
<a id="tocseventbus"></a>

```json
{
  "Name": {},
  "Arn": {},
  "Policy": {}
}
```

An event bus receives events from a source, uses rules to evaluate them, applies any configured input transformation, and routes them to the appropriate target(s). Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_EventBusList">EventBusList</h2>
<!-- backwards compatibility -->
<a id="schemaeventbuslist"></a>
<a id="schema_EventBusList"></a>
<a id="tocSeventbuslist"></a>
<a id="tocseventbuslist"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "Policy": {}
  }
]
```

<h2 id="tocS_EventId">EventId</h2>
<!-- backwards compatibility -->
<a id="schemaeventid"></a>
<a id="schema_EventId"></a>
<a id="tocSeventid"></a>
<a id="tocseventid"></a>

```json
"string"
```

<h2 id="tocS_EventResource">EventResource</h2>
<!-- backwards compatibility -->
<a id="schemaeventresource"></a>
<a id="schema_EventResource"></a>
<a id="tocSeventresource"></a>
<a id="tocseventresource"></a>

```json
"string"
```

<h2 id="tocS_EventResourceList">EventResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaeventresourcelist"></a>
<a id="schema_EventResourceList"></a>
<a id="tocSeventresourcelist"></a>
<a id="tocseventresourcelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EventSource">EventSource</h2>
<!-- backwards compatibility -->
<a id="schemaeventsource"></a>
<a id="schema_EventSource"></a>
<a id="tocSeventsource"></a>
<a id="tocseventsource"></a>

```json
{
  "Arn": {},
  "CreatedBy": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "Name": {},
  "State": {}
}
```

A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreationTime|object|false|none|none|
|ExpirationTime|object|false|none|none|
|Name|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_EventSourceList">EventSourceList</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcelist"></a>
<a id="schema_EventSourceList"></a>
<a id="tocSeventsourcelist"></a>
<a id="tocseventsourcelist"></a>

```json
[
  {
    "Arn": {},
    "CreatedBy": {},
    "CreationTime": {},
    "ExpirationTime": {},
    "Name": {},
    "State": {}
  }
]
```

<h2 id="tocS_EventSourceNamePrefix">EventSourceNamePrefix</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcenameprefix"></a>
<a id="schema_EventSourceNamePrefix"></a>
<a id="tocSeventsourcenameprefix"></a>
<a id="tocseventsourcenameprefix"></a>

```json
"string"
```

<h2 id="tocS_EventTime">EventTime</h2>
<!-- backwards compatibility -->
<a id="schemaeventtime"></a>
<a id="schema_EventTime"></a>
<a id="tocSeventtime"></a>
<a id="tocseventtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Primary">Primary</h2>
<!-- backwards compatibility -->
<a id="schemaprimary"></a>
<a id="schema_Primary"></a>
<a id="tocSprimary"></a>
<a id="tocsprimary"></a>

```json
{
  "HealthCheck": {}
}
```

The primary Region of the endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheck|object|true|none|none|

<h2 id="tocS_Secondary">Secondary</h2>
<!-- backwards compatibility -->
<a id="schemasecondary"></a>
<a id="schema_Secondary"></a>
<a id="tocSsecondary"></a>
<a id="tocssecondary"></a>

```json
{
  "Route": {}
}
```

The secondary Region that processes events when failover is triggered or replication is enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Route|object|true|none|none|

<h2 id="tocS_FailoverConfig">FailoverConfig</h2>
<!-- backwards compatibility -->
<a id="schemafailoverconfig"></a>
<a id="schema_FailoverConfig"></a>
<a id="tocSfailoverconfig"></a>
<a id="tocsfailoverconfig"></a>

```json
{
  "Primary": {
    "HealthCheck": {}
  },
  "Secondary": {
    "Route": {}
  }
}
```

The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Primary|object|true|none|none|
|Secondary|object|true|none|none|

<h2 id="tocS_HeaderParametersMap">HeaderParametersMap</h2>
<!-- backwards compatibility -->
<a id="schemaheaderparametersmap"></a>
<a id="schema_HeaderParametersMap"></a>
<a id="tocSheaderparametersmap"></a>
<a id="tocsheaderparametersmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[HeaderValue](#schemaheadervalue)|false|none|none|

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
"string"
```

<h2 id="tocS_PathParameterList">PathParameterList</h2>
<!-- backwards compatibility -->
<a id="schemapathparameterlist"></a>
<a id="schema_PathParameterList"></a>
<a id="tocSpathparameterlist"></a>
<a id="tocspathparameterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_QueryStringParametersMap">QueryStringParametersMap</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringparametersmap"></a>
<a id="schema_QueryStringParametersMap"></a>
<a id="tocSquerystringparametersmap"></a>
<a id="tocsquerystringparametersmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[QueryStringValue](#schemaquerystringvalue)|false|none|none|

<h2 id="tocS_HttpParameters">HttpParameters</h2>
<!-- backwards compatibility -->
<a id="schemahttpparameters"></a>
<a id="schema_HttpParameters"></a>
<a id="tocShttpparameters"></a>
<a id="tocshttpparameters"></a>

```json
{
  "PathParameterValues": {},
  "HeaderParameters": {
    "property1": "string",
    "property2": "string"
  },
  "QueryStringParameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

These are custom parameter to be used when the target is an API Gateway APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PathParameterValues|object|false|none|none|
|HeaderParameters|object|false|none|none|
|QueryStringParameters|object|false|none|none|

<h2 id="tocS_TransformerPaths">TransformerPaths</h2>
<!-- backwards compatibility -->
<a id="schematransformerpaths"></a>
<a id="schema_TransformerPaths"></a>
<a id="tocStransformerpaths"></a>
<a id="tocstransformerpaths"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TargetInputPath](#schematargetinputpath)|false|none|none|

<h2 id="tocS_TransformerInput">TransformerInput</h2>
<!-- backwards compatibility -->
<a id="schematransformerinput"></a>
<a id="schema_TransformerInput"></a>
<a id="tocStransformerinput"></a>
<a id="tocstransformerinput"></a>

```json
"string"
```

<h2 id="tocS_InputTransformer">InputTransformer</h2>
<!-- backwards compatibility -->
<a id="schemainputtransformer"></a>
<a id="schema_InputTransformer"></a>
<a id="tocSinputtransformer"></a>
<a id="tocsinputtransformer"></a>

```json
{
  "InputPathsMap": {
    "property1": "string",
    "property2": "string"
  },
  "InputTemplate": {}
}
```

Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputPathsMap|object|false|none|none|
|InputTemplate|object|true|none|none|

<h2 id="tocS_InputTransformerPathKey">InputTransformerPathKey</h2>
<!-- backwards compatibility -->
<a id="schemainputtransformerpathkey"></a>
<a id="schema_InputTransformerPathKey"></a>
<a id="tocSinputtransformerpathkey"></a>
<a id="tocsinputtransformerpathkey"></a>

```json
"string"
```

<h2 id="tocS_TargetPartitionKeyPath">TargetPartitionKeyPath</h2>
<!-- backwards compatibility -->
<a id="schematargetpartitionkeypath"></a>
<a id="schema_TargetPartitionKeyPath"></a>
<a id="tocStargetpartitionkeypath"></a>
<a id="tocstargetpartitionkeypath"></a>

```json
"string"
```

<h2 id="tocS_KinesisParameters">KinesisParameters</h2>
<!-- backwards compatibility -->
<a id="schemakinesisparameters"></a>
<a id="schema_KinesisParameters"></a>
<a id="tocSkinesisparameters"></a>
<a id="tocskinesisparameters"></a>

```json
{
  "PartitionKeyPath": {}
}
```

This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartitionKeyPath|object|true|none|none|

<h2 id="tocS_LimitMax100">LimitMax100</h2>
<!-- backwards compatibility -->
<a id="schemalimitmax100"></a>
<a id="schema_LimitMax100"></a>
<a id="tocSlimitmax100"></a>
<a id="tocslimitmax100"></a>

```json
1
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

<h2 id="tocS_PartnerEventSourceAccountList">PartnerEventSourceAccountList</h2>
<!-- backwards compatibility -->
<a id="schemapartnereventsourceaccountlist"></a>
<a id="schema_PartnerEventSourceAccountList"></a>
<a id="tocSpartnereventsourceaccountlist"></a>
<a id="tocspartnereventsourceaccountlist"></a>

```json
[
  {
    "Account": {},
    "CreationTime": {},
    "ExpirationTime": {},
    "State": {}
  }
]
```

<h2 id="tocS_PartnerEventSourceNamePrefix">PartnerEventSourceNamePrefix</h2>
<!-- backwards compatibility -->
<a id="schemapartnereventsourcenameprefix"></a>
<a id="schema_PartnerEventSourceNamePrefix"></a>
<a id="tocSpartnereventsourcenameprefix"></a>
<a id="tocspartnereventsourcenameprefix"></a>

```json
"string"
```

<h2 id="tocS_PartnerEventSourceList">PartnerEventSourceList</h2>
<!-- backwards compatibility -->
<a id="schemapartnereventsourcelist"></a>
<a id="schema_PartnerEventSourceList"></a>
<a id="tocSpartnereventsourcelist"></a>
<a id="tocspartnereventsourcelist"></a>

```json
[
  {
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ReplayList">ReplayList</h2>
<!-- backwards compatibility -->
<a id="schemareplaylist"></a>
<a id="schema_ReplayList"></a>
<a id="tocSreplaylist"></a>
<a id="tocsreplaylist"></a>

```json
[
  {
    "ReplayName": {},
    "EventSourceArn": {},
    "State": {},
    "StateReason": {},
    "EventStartTime": {},
    "EventEndTime": {},
    "EventLastReplayedTime": {},
    "ReplayStartTime": {},
    "ReplayEndTime": {}
  }
]
```

<h2 id="tocS_TargetArn">TargetArn</h2>
<!-- backwards compatibility -->
<a id="schematargetarn"></a>
<a id="schema_TargetArn"></a>
<a id="tocStargetarn"></a>
<a id="tocstargetarn"></a>

```json
"string"
```

<h2 id="tocS_RuleNameList">RuleNameList</h2>
<!-- backwards compatibility -->
<a id="schemarulenamelist"></a>
<a id="schema_RuleNameList"></a>
<a id="tocSrulenamelist"></a>
<a id="tocsrulenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RuleResponseList">RuleResponseList</h2>
<!-- backwards compatibility -->
<a id="schemaruleresponselist"></a>
<a id="schema_RuleResponseList"></a>
<a id="tocSruleresponselist"></a>
<a id="tocsruleresponselist"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "EventPattern": {},
    "State": {},
    "Description": {},
    "ScheduleExpression": {},
    "RoleArn": {},
    "ManagedBy": {},
    "EventBusName": {}
  }
]
```

<h2 id="tocS_TargetList">TargetList</h2>
<!-- backwards compatibility -->
<a id="schematargetlist"></a>
<a id="schema_TargetList"></a>
<a id="tocStargetlist"></a>
<a id="tocstargetlist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "RoleArn": {},
    "Input": {},
    "InputPath": {},
    "InputTransformer": {
      "InputPathsMap": {
        "property1": "string",
        "property2": "string"
      },
      "InputTemplate": {}
    },
    "KinesisParameters": {
      "PartitionKeyPath": {}
    },
    "RunCommandParameters": {
      "RunCommandTargets": {}
    },
    "EcsParameters": {
      "TaskDefinitionArn": {},
      "TaskCount": {},
      "LaunchType": {},
      "NetworkConfiguration": {
        "awsvpcConfiguration": {
          "Subnets": {},
          "SecurityGroups": {},
          "AssignPublicIp": {}
        }
      },
      "PlatformVersion": {},
      "Group": {},
      "CapacityProviderStrategy": {},
      "EnableECSManagedTags": {},
      "EnableExecuteCommand": {},
      "PlacementConstraints": {},
      "PlacementStrategy": {},
      "PropagateTags": {},
      "ReferenceId": {},
      "Tags": {}
    },
    "BatchParameters": {
      "JobDefinition": {},
      "JobName": {},
      "ArrayProperties": {
        "Size": {}
      },
      "RetryStrategy": {
        "Attempts": {}
      }
    },
    "SqsParameters": {
      "MessageGroupId": {}
    },
    "HttpParameters": {
      "PathParameterValues": {},
      "HeaderParameters": {
        "property1": "string",
        "property2": "string"
      },
      "QueryStringParameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "RedshiftDataParameters": {
      "SecretManagerArn": {},
      "Database": {},
      "DbUser": {},
      "Sql": {},
      "StatementName": {},
      "WithEvent": {},
      "Sqls": [
        "password"
      ]
    },
    "SageMakerPipelineParameters": {
      "PipelineParameterList": {}
    },
    "DeadLetterConfig": {
      "Arn": {}
    },
    "RetryPolicy": {
      "MaximumRetryAttempts": {},
      "MaximumEventAgeInSeconds": {}
    }
  }
]
```

<h2 id="tocS_MaximumEventAgeInSeconds">MaximumEventAgeInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaximumeventageinseconds"></a>
<a id="schema_MaximumEventAgeInSeconds"></a>
<a id="tocSmaximumeventageinseconds"></a>
<a id="tocsmaximumeventageinseconds"></a>

```json
60
```

<h2 id="tocS_MaximumRetryAttempts">MaximumRetryAttempts</h2>
<!-- backwards compatibility -->
<a id="schemamaximumretryattempts"></a>
<a id="schema_MaximumRetryAttempts"></a>
<a id="tocSmaximumretryattempts"></a>
<a id="tocsmaximumretryattempts"></a>

```json
0
```

<h2 id="tocS_MessageGroupId">MessageGroupId</h2>
<!-- backwards compatibility -->
<a id="schemamessagegroupid"></a>
<a id="schema_MessageGroupId"></a>
<a id="tocSmessagegroupid"></a>
<a id="tocsmessagegroupid"></a>

```json
"string"
```

<h2 id="tocS_NonPartnerEventBusName">NonPartnerEventBusName</h2>
<!-- backwards compatibility -->
<a id="schemanonpartnereventbusname"></a>
<a id="schema_NonPartnerEventBusName"></a>
<a id="tocSnonpartnereventbusname"></a>
<a id="tocsnonpartnereventbusname"></a>

```json
"string"
```

<h2 id="tocS_NonPartnerEventBusNameOrArn">NonPartnerEventBusNameOrArn</h2>
<!-- backwards compatibility -->
<a id="schemanonpartnereventbusnameorarn"></a>
<a id="schema_NonPartnerEventBusNameOrArn"></a>
<a id="tocSnonpartnereventbusnameorarn"></a>
<a id="tocsnonpartnereventbusnameorarn"></a>

```json
"string"
```

<h2 id="tocS_PartnerEventSource">PartnerEventSource</h2>
<!-- backwards compatibility -->
<a id="schemapartnereventsource"></a>
<a id="schema_PartnerEventSource"></a>
<a id="tocSpartnereventsource"></a>
<a id="tocspartnereventsource"></a>

```json
{
  "Arn": {},
  "Name": {}
}
```

A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_PartnerEventSourceAccount">PartnerEventSourceAccount</h2>
<!-- backwards compatibility -->
<a id="schemapartnereventsourceaccount"></a>
<a id="schema_PartnerEventSourceAccount"></a>
<a id="tocSpartnereventsourceaccount"></a>
<a id="tocspartnereventsourceaccount"></a>

```json
{
  "Account": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "State": {}
}
```

The Amazon Web Services account that a partner event source has been offered to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|
|CreationTime|object|false|none|none|
|ExpirationTime|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_PathParameter">PathParameter</h2>
<!-- backwards compatibility -->
<a id="schemapathparameter"></a>
<a id="schema_PathParameter"></a>
<a id="tocSpathparameter"></a>
<a id="tocspathparameter"></a>

```json
"string"
```

<h2 id="tocS_PlacementConstraintType">PlacementConstraintType</h2>
<!-- backwards compatibility -->
<a id="schemaplacementconstrainttype"></a>
<a id="schema_PlacementConstraintType"></a>
<a id="tocSplacementconstrainttype"></a>
<a id="tocsplacementconstrainttype"></a>

```json
"distinctInstance"
```

<h2 id="tocS_PlacementConstraintExpression">PlacementConstraintExpression</h2>
<!-- backwards compatibility -->
<a id="schemaplacementconstraintexpression"></a>
<a id="schema_PlacementConstraintExpression"></a>
<a id="tocSplacementconstraintexpression"></a>
<a id="tocsplacementconstraintexpression"></a>

```json
"string"
```

<h2 id="tocS_PlacementConstraint">PlacementConstraint</h2>
<!-- backwards compatibility -->
<a id="schemaplacementconstraint"></a>
<a id="schema_PlacementConstraint"></a>
<a id="tocSplacementconstraint"></a>
<a id="tocsplacementconstraint"></a>

```json
{
  "type": {},
  "expression": {}
}
```

An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|expression|object|false|none|none|

<h2 id="tocS_PlacementStrategy">PlacementStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstrategy"></a>
<a id="schema_PlacementStrategy"></a>
<a id="tocSplacementstrategy"></a>
<a id="tocsplacementstrategy"></a>

```json
{
  "type": {},
  "field": {}
}
```

The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|field|object|false|none|none|

<h2 id="tocS_PlacementStrategyType">PlacementStrategyType</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstrategytype"></a>
<a id="schema_PlacementStrategyType"></a>
<a id="tocSplacementstrategytype"></a>
<a id="tocsplacementstrategytype"></a>

```json
"random"
```

<h2 id="tocS_PlacementStrategyField">PlacementStrategyField</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstrategyfield"></a>
<a id="schema_PlacementStrategyField"></a>
<a id="tocSplacementstrategyfield"></a>
<a id="tocsplacementstrategyfield"></a>

```json
"string"
```

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
"string"
```

<h2 id="tocS_PutEventsRequestEntryList">PutEventsRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsrequestentrylist"></a>
<a id="schema_PutEventsRequestEntryList"></a>
<a id="tocSputeventsrequestentrylist"></a>
<a id="tocsputeventsrequestentrylist"></a>

```json
[
  {
    "Time": {},
    "Source": {},
    "Resources": {},
    "DetailType": {},
    "Detail": {},
    "EventBusName": {},
    "TraceHeader": {}
  }
]
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

<h2 id="tocS_PutEventsRequestEntry">PutEventsRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsrequestentry"></a>
<a id="schema_PutEventsRequestEntry"></a>
<a id="tocSputeventsrequestentry"></a>
<a id="tocsputeventsrequestentry"></a>

```json
{
  "Time": {},
  "Source": {},
  "Resources": {},
  "DetailType": {},
  "Detail": {},
  "EventBusName": {},
  "TraceHeader": {}
}
```

Represents an event to be submitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Time|object|false|none|none|
|Source|object|false|none|none|
|Resources|object|false|none|none|
|DetailType|object|false|none|none|
|Detail|object|false|none|none|
|EventBusName|object|false|none|none|
|TraceHeader|object|false|none|none|

<h2 id="tocS_PutEventsResultEntryList">PutEventsResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsresultentrylist"></a>
<a id="schema_PutEventsResultEntryList"></a>
<a id="tocSputeventsresultentrylist"></a>
<a id="tocsputeventsresultentrylist"></a>

```json
[
  {
    "EventId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_PutEventsResultEntry">PutEventsResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsresultentry"></a>
<a id="schema_PutEventsResultEntry"></a>
<a id="tocSputeventsresultentry"></a>
<a id="tocsputeventsresultentry"></a>

```json
{
  "EventId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Represents an event that failed to be submitted. For information about the errors that are common to all actions, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">Common Errors</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_PutPartnerEventsRequestEntryList">PutPartnerEventsRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputpartnereventsrequestentrylist"></a>
<a id="schema_PutPartnerEventsRequestEntryList"></a>
<a id="tocSputpartnereventsrequestentrylist"></a>
<a id="tocsputpartnereventsrequestentrylist"></a>

```json
[
  {
    "Time": {},
    "Source": {},
    "Resources": {},
    "DetailType": {},
    "Detail": {}
  }
]
```

<h2 id="tocS_PutPartnerEventsRequestEntry">PutPartnerEventsRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputpartnereventsrequestentry"></a>
<a id="schema_PutPartnerEventsRequestEntry"></a>
<a id="tocSputpartnereventsrequestentry"></a>
<a id="tocsputpartnereventsrequestentry"></a>

```json
{
  "Time": {},
  "Source": {},
  "Resources": {},
  "DetailType": {},
  "Detail": {}
}
```

The details about an event generated by an SaaS partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Time|object|false|none|none|
|Source|object|false|none|none|
|Resources|object|false|none|none|
|DetailType|object|false|none|none|
|Detail|object|false|none|none|

<h2 id="tocS_PutPartnerEventsResultEntryList">PutPartnerEventsResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputpartnereventsresultentrylist"></a>
<a id="schema_PutPartnerEventsResultEntryList"></a>
<a id="tocSputpartnereventsresultentrylist"></a>
<a id="tocsputpartnereventsresultentrylist"></a>

```json
[
  {
    "EventId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_PutPartnerEventsResultEntry">PutPartnerEventsResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputpartnereventsresultentry"></a>
<a id="schema_PutPartnerEventsResultEntry"></a>
<a id="tocSputpartnereventsresultentry"></a>
<a id="tocsputpartnereventsresultentry"></a>

```json
{
  "EventId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Represents an event that a partner tried to generate, but failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_StatementId">StatementId</h2>
<!-- backwards compatibility -->
<a id="schemastatementid"></a>
<a id="schema_StatementId"></a>
<a id="tocSstatementid"></a>
<a id="tocsstatementid"></a>

```json
"string"
```

<h2 id="tocS_PutTargetsResultEntryList">PutTargetsResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputtargetsresultentrylist"></a>
<a id="schema_PutTargetsResultEntryList"></a>
<a id="tocSputtargetsresultentrylist"></a>
<a id="tocsputtargetsresultentrylist"></a>

```json
[
  {
    "TargetId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"string"
```

<h2 id="tocS_PutTargetsResultEntry">PutTargetsResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputtargetsresultentry"></a>
<a id="schema_PutTargetsResultEntry"></a>
<a id="tocSputtargetsresultentry"></a>
<a id="tocsputtargetsresultentry"></a>

```json
{
  "TargetId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Represents a target that failed to be added to a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_RedshiftSecretManagerArn">RedshiftSecretManagerArn</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftsecretmanagerarn"></a>
<a id="schema_RedshiftSecretManagerArn"></a>
<a id="tocSredshiftsecretmanagerarn"></a>
<a id="tocsredshiftsecretmanagerarn"></a>

```json
"string"
```

Optional SecretManager ARN which stores the database credentials

<h2 id="tocS_Sql">Sql</h2>
<!-- backwards compatibility -->
<a id="schemasql"></a>
<a id="schema_Sql"></a>
<a id="tocSsql"></a>
<a id="tocssql"></a>

```json
"password"
```

A single Redshift SQL

<h2 id="tocS_StatementName">StatementName</h2>
<!-- backwards compatibility -->
<a id="schemastatementname"></a>
<a id="schema_StatementName"></a>
<a id="tocSstatementname"></a>
<a id="tocsstatementname"></a>

```json
"string"
```

A name for Redshift DataAPI statement which can be used as filter of ListStatement.

<h2 id="tocS_Sqls">Sqls</h2>
<!-- backwards compatibility -->
<a id="schemasqls"></a>
<a id="schema_Sqls"></a>
<a id="tocSsqls"></a>
<a id="tocssqls"></a>

```json
[
  "password"
]
```

A list of SQLs.

<h2 id="tocS_RedshiftDataParameters">RedshiftDataParameters</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdataparameters"></a>
<a id="schema_RedshiftDataParameters"></a>
<a id="tocSredshiftdataparameters"></a>
<a id="tocsredshiftdataparameters"></a>

```json
{
  "SecretManagerArn": {},
  "Database": {},
  "DbUser": {},
  "Sql": {},
  "StatementName": {},
  "WithEvent": {},
  "Sqls": [
    "password"
  ]
}
```

These are custom parameters to be used when the target is a Amazon Redshift cluster or Redshift Serverless workgroup to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretManagerArn|object|false|none|none|
|Database|object|true|none|none|
|DbUser|object|false|none|none|
|Sql|object|false|none|none|
|StatementName|object|false|none|none|
|WithEvent|object|false|none|none|
|Sqls|[Sqls](#schemasqls)|false|none|A list of SQLs.|

<h2 id="tocS_TargetIdList">TargetIdList</h2>
<!-- backwards compatibility -->
<a id="schematargetidlist"></a>
<a id="schema_TargetIdList"></a>
<a id="tocStargetidlist"></a>
<a id="tocstargetidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RemoveTargetsResultEntryList">RemoveTargetsResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaremovetargetsresultentrylist"></a>
<a id="schema_RemoveTargetsResultEntryList"></a>
<a id="tocSremovetargetsresultentrylist"></a>
<a id="tocsremovetargetsresultentrylist"></a>

```json
[
  {
    "TargetId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_RemoveTargetsResultEntry">RemoveTargetsResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemaremovetargetsresultentry"></a>
<a id="schema_RemoveTargetsResultEntry"></a>
<a id="tocSremovetargetsresultentry"></a>
<a id="tocsremovetargetsresultentry"></a>

```json
{
  "TargetId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Represents a target that failed to be removed from a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_Replay">Replay</h2>
<!-- backwards compatibility -->
<a id="schemareplay"></a>
<a id="schema_Replay"></a>
<a id="tocSreplay"></a>
<a id="tocsreplay"></a>

```json
{
  "ReplayName": {},
  "EventSourceArn": {},
  "State": {},
  "StateReason": {},
  "EventStartTime": {},
  "EventEndTime": {},
  "EventLastReplayedTime": {},
  "ReplayStartTime": {},
  "ReplayEndTime": {}
}
```

A <code>Replay</code> object that contains details about a replay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplayName|object|false|none|none|
|EventSourceArn|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|EventStartTime|object|false|none|none|
|EventEndTime|object|false|none|none|
|EventLastReplayedTime|object|false|none|none|
|ReplayStartTime|object|false|none|none|
|ReplayEndTime|object|false|none|none|

<h2 id="tocS_ReplayDestinationFilters">ReplayDestinationFilters</h2>
<!-- backwards compatibility -->
<a id="schemareplaydestinationfilters"></a>
<a id="schema_ReplayDestinationFilters"></a>
<a id="tocSreplaydestinationfilters"></a>
<a id="tocsreplaydestinationfilters"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationState">ReplicationState</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstate"></a>
<a id="schema_ReplicationState"></a>
<a id="tocSreplicationstate"></a>
<a id="tocsreplicationstate"></a>

```json
"ENABLED"
```

<h2 id="tocS_RetryPolicy">RetryPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaretrypolicy"></a>
<a id="schema_RetryPolicy"></a>
<a id="tocSretrypolicy"></a>
<a id="tocsretrypolicy"></a>

```json
{
  "MaximumRetryAttempts": {},
  "MaximumEventAgeInSeconds": {}
}
```

A <code>RetryPolicy</code> object that includes information about the retry policy settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumRetryAttempts|object|false|none|none|
|MaximumEventAgeInSeconds|object|false|none|none|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
"stringstr"
```

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "Name": {},
  "Arn": {},
  "EventPattern": {},
  "State": {},
  "Description": {},
  "ScheduleExpression": {},
  "RoleArn": {},
  "ManagedBy": {},
  "EventBusName": {}
}
```

Contains information about a rule in Amazon EventBridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|EventPattern|object|false|none|none|
|State|object|false|none|none|
|Description|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|RoleArn|object|false|none|none|
|ManagedBy|object|false|none|none|
|EventBusName|object|false|none|none|

<h2 id="tocS_RunCommandTargets">RunCommandTargets</h2>
<!-- backwards compatibility -->
<a id="schemaruncommandtargets"></a>
<a id="schema_RunCommandTargets"></a>
<a id="tocSruncommandtargets"></a>
<a id="tocsruncommandtargets"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_RunCommandParameters">RunCommandParameters</h2>
<!-- backwards compatibility -->
<a id="schemaruncommandparameters"></a>
<a id="schema_RunCommandParameters"></a>
<a id="tocSruncommandparameters"></a>
<a id="tocsruncommandparameters"></a>

```json
{
  "RunCommandTargets": {}
}
```

This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RunCommandTargets|object|true|none|none|

<h2 id="tocS_RunCommandTargetKey">RunCommandTargetKey</h2>
<!-- backwards compatibility -->
<a id="schemaruncommandtargetkey"></a>
<a id="schema_RunCommandTargetKey"></a>
<a id="tocSruncommandtargetkey"></a>
<a id="tocsruncommandtargetkey"></a>

```json
"string"
```

<h2 id="tocS_RunCommandTargetValues">RunCommandTargetValues</h2>
<!-- backwards compatibility -->
<a id="schemaruncommandtargetvalues"></a>
<a id="schema_RunCommandTargetValues"></a>
<a id="tocSruncommandtargetvalues"></a>
<a id="tocsruncommandtargetvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RunCommandTarget">RunCommandTarget</h2>
<!-- backwards compatibility -->
<a id="schemaruncommandtarget"></a>
<a id="schema_RunCommandTarget"></a>
<a id="tocSruncommandtarget"></a>
<a id="tocsruncommandtarget"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_RunCommandTargetValue">RunCommandTargetValue</h2>
<!-- backwards compatibility -->
<a id="schemaruncommandtargetvalue"></a>
<a id="schema_RunCommandTargetValue"></a>
<a id="tocSruncommandtargetvalue"></a>
<a id="tocsruncommandtargetvalue"></a>

```json
"string"
```

<h2 id="tocS_SageMakerPipelineParameterName">SageMakerPipelineParameterName</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerpipelineparametername"></a>
<a id="schema_SageMakerPipelineParameterName"></a>
<a id="tocSsagemakerpipelineparametername"></a>
<a id="tocssagemakerpipelineparametername"></a>

```json
"string"
```

<h2 id="tocS_SageMakerPipelineParameterValue">SageMakerPipelineParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerpipelineparametervalue"></a>
<a id="schema_SageMakerPipelineParameterValue"></a>
<a id="tocSsagemakerpipelineparametervalue"></a>
<a id="tocssagemakerpipelineparametervalue"></a>

```json
"string"
```

<h2 id="tocS_SageMakerPipelineParameter">SageMakerPipelineParameter</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerpipelineparameter"></a>
<a id="schema_SageMakerPipelineParameter"></a>
<a id="tocSsagemakerpipelineparameter"></a>
<a id="tocssagemakerpipelineparameter"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_SageMakerPipelineParameterList">SageMakerPipelineParameterList</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerpipelineparameterlist"></a>
<a id="schema_SageMakerPipelineParameterList"></a>
<a id="tocSsagemakerpipelineparameterlist"></a>
<a id="tocssagemakerpipelineparameterlist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_SageMakerPipelineParameters">SageMakerPipelineParameters</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerpipelineparameters"></a>
<a id="schema_SageMakerPipelineParameters"></a>
<a id="tocSsagemakerpipelineparameters"></a>
<a id="tocssagemakerpipelineparameters"></a>

```json
{
  "PipelineParameterList": {}
}
```

These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PipelineParameterList|object|false|none|none|

<h2 id="tocS_SqsParameters">SqsParameters</h2>
<!-- backwards compatibility -->
<a id="schemasqsparameters"></a>
<a id="schema_SqsParameters"></a>
<a id="tocSsqsparameters"></a>
<a id="tocssqsparameters"></a>

```json
{
  "MessageGroupId": {}
}
```

This structure includes the custom parameter to be used when the target is an SQS FIFO queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageGroupId|object|false|none|none|

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

A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging.

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

<h2 id="tocS_TargetInput">TargetInput</h2>
<!-- backwards compatibility -->
<a id="schematargetinput"></a>
<a id="schema_TargetInput"></a>
<a id="tocStargetinput"></a>
<a id="tocstargetinput"></a>

```json
"string"
```

<h2 id="tocS_TargetInputPath">TargetInputPath</h2>
<!-- backwards compatibility -->
<a id="schematargetinputpath"></a>
<a id="schema_TargetInputPath"></a>
<a id="tocStargetinputpath"></a>
<a id="tocstargetinputpath"></a>

```json
"string"
```

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "Id": {},
  "Arn": {},
  "RoleArn": {},
  "Input": {},
  "InputPath": {},
  "InputTransformer": {
    "InputPathsMap": {
      "property1": "string",
      "property2": "string"
    },
    "InputTemplate": {}
  },
  "KinesisParameters": {
    "PartitionKeyPath": {}
  },
  "RunCommandParameters": {
    "RunCommandTargets": {}
  },
  "EcsParameters": {
    "TaskDefinitionArn": {},
    "TaskCount": {},
    "LaunchType": {},
    "NetworkConfiguration": {
      "awsvpcConfiguration": {
        "Subnets": {},
        "SecurityGroups": {},
        "AssignPublicIp": {}
      }
    },
    "PlatformVersion": {},
    "Group": {},
    "CapacityProviderStrategy": {},
    "EnableECSManagedTags": {},
    "EnableExecuteCommand": {},
    "PlacementConstraints": {},
    "PlacementStrategy": {},
    "PropagateTags": {},
    "ReferenceId": {},
    "Tags": {}
  },
  "BatchParameters": {
    "JobDefinition": {},
    "JobName": {},
    "ArrayProperties": {
      "Size": {}
    },
    "RetryStrategy": {
      "Attempts": {}
    }
  },
  "SqsParameters": {
    "MessageGroupId": {}
  },
  "HttpParameters": {
    "PathParameterValues": {},
    "HeaderParameters": {
      "property1": "string",
      "property2": "string"
    },
    "QueryStringParameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "RedshiftDataParameters": {
    "SecretManagerArn": {},
    "Database": {},
    "DbUser": {},
    "Sql": {},
    "StatementName": {},
    "WithEvent": {},
    "Sqls": [
      "password"
    ]
  },
  "SageMakerPipelineParameters": {
    "PipelineParameterList": {}
  },
  "DeadLetterConfig": {
    "Arn": {}
  },
  "RetryPolicy": {
    "MaximumRetryAttempts": {},
    "MaximumEventAgeInSeconds": {}
  }
}
```

<p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Arn|object|true|none|none|
|RoleArn|object|false|none|none|
|Input|object|false|none|none|
|InputPath|object|false|none|none|
|InputTransformer|object|false|none|none|
|KinesisParameters|object|false|none|none|
|RunCommandParameters|object|false|none|none|
|EcsParameters|object|false|none|none|
|BatchParameters|object|false|none|none|
|SqsParameters|object|false|none|none|
|HttpParameters|object|false|none|none|
|RedshiftDataParameters|object|false|none|none|
|SageMakerPipelineParameters|object|false|none|none|
|DeadLetterConfig|object|false|none|none|
|RetryPolicy|object|false|none|none|

<h2 id="tocS_UpdateConnectionApiKeyAuthRequestParameters">UpdateConnectionApiKeyAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionapikeyauthrequestparameters"></a>
<a id="schema_UpdateConnectionApiKeyAuthRequestParameters"></a>
<a id="tocSupdateconnectionapikeyauthrequestparameters"></a>
<a id="tocsupdateconnectionapikeyauthrequestparameters"></a>

```json
{
  "ApiKeyName": {},
  "ApiKeyValue": {}
}
```

Contains the API key authorization parameters to use to update the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiKeyName|object|false|none|none|
|ApiKeyValue|object|false|none|none|

<h2 id="tocS_UpdateConnectionBasicAuthRequestParameters">UpdateConnectionBasicAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionbasicauthrequestparameters"></a>
<a id="schema_UpdateConnectionBasicAuthRequestParameters"></a>
<a id="tocSupdateconnectionbasicauthrequestparameters"></a>
<a id="tocsupdateconnectionbasicauthrequestparameters"></a>

```json
{
  "Username": {},
  "Password": {}
}
```

Contains the Basic authorization parameters for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Password|object|false|none|none|

<h2 id="tocS_UpdateConnectionOAuthRequestParameters">UpdateConnectionOAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionoauthrequestparameters"></a>
<a id="schema_UpdateConnectionOAuthRequestParameters"></a>
<a id="tocSupdateconnectionoauthrequestparameters"></a>
<a id="tocsupdateconnectionoauthrequestparameters"></a>

```json
{
  "ClientParameters": {
    "ClientID": {},
    "ClientSecret": {}
  },
  "AuthorizationEndpoint": {},
  "HttpMethod": {},
  "OAuthHttpParameters": {
    "HeaderParameters": {},
    "QueryStringParameters": {},
    "BodyParameters": {}
  }
}
```

Contains the OAuth request parameters to use for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientParameters|object|false|none|none|
|AuthorizationEndpoint|object|false|none|none|
|HttpMethod|object|false|none|none|
|OAuthHttpParameters|object|false|none|none|

<h2 id="tocS_UpdateConnectionAuthRequestParameters">UpdateConnectionAuthRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionauthrequestparameters"></a>
<a id="schema_UpdateConnectionAuthRequestParameters"></a>
<a id="tocSupdateconnectionauthrequestparameters"></a>
<a id="tocsupdateconnectionauthrequestparameters"></a>

```json
{
  "BasicAuthParameters": {
    "Username": {},
    "Password": {}
  },
  "OAuthParameters": {
    "ClientParameters": {
      "ClientID": {},
      "ClientSecret": {}
    },
    "AuthorizationEndpoint": {},
    "HttpMethod": {},
    "OAuthHttpParameters": {
      "HeaderParameters": {},
      "QueryStringParameters": {},
      "BodyParameters": {}
    }
  },
  "ApiKeyAuthParameters": {
    "ApiKeyName": {},
    "ApiKeyValue": {}
  },
  "InvocationHttpParameters": {
    "HeaderParameters": {},
    "QueryStringParameters": {},
    "BodyParameters": {}
  }
}
```

Contains the additional parameters to use for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BasicAuthParameters|object|false|none|none|
|OAuthParameters|object|false|none|none|
|ApiKeyAuthParameters|object|false|none|none|
|InvocationHttpParameters|object|false|none|none|

<h2 id="tocS_UpdateConnectionOAuthClientRequestParameters">UpdateConnectionOAuthClientRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionoauthclientrequestparameters"></a>
<a id="schema_UpdateConnectionOAuthClientRequestParameters"></a>
<a id="tocSupdateconnectionoauthclientrequestparameters"></a>
<a id="tocsupdateconnectionoauthclientrequestparameters"></a>

```json
{
  "ClientID": {},
  "ClientSecret": {}
}
```

Contains the OAuth authorization parameters to use for the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|object|false|none|none|
|ClientSecret|object|false|none|none|
