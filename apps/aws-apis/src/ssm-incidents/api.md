<h1 id="aws-systems-manager-incident-manager">AWS Systems Manager Incident Manager v2018-05-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services. </p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation. </p>

Base URLs:

* <a href="http://ssm-incidents.us-east-1.amazonaws.com">http://ssm-incidents.us-east-1.amazonaws.com</a> - The SSM Incidents multi-region endpoint

* <a href="https://ssm-incidents.us-east-1.amazonaws.com">https://ssm-incidents.us-east-1.amazonaws.com</a> - The SSM Incidents multi-region endpoint

* <a href="http://ssm-incidents.cn-north-1.amazonaws.com.cn">http://ssm-incidents.cn-north-1.amazonaws.com.cn</a> - The SSM Incidents endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ssm-incidents.cn-north-1.amazonaws.com.cn">https://ssm-incidents.cn-north-1.amazonaws.com.cn</a> - The SSM Incidents endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ssm-incidents/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-systems-manager-incident-manager-default">Default</h1>

## CreateReplicationSet

<a id="opIdCreateReplicationSet"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/createReplicationSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "regions": {
      "property1": {
        "sseKmsKeyId": {}
      },
      "property2": {
        "sseKmsKeyId": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createReplicationSet`

A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 

> Body parameter

```json
{
  "clientToken": "string",
  "regions": {
    "property1": {
      "sseKmsKeyId": {}
    },
    "property2": {
      "sseKmsKeyId": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createreplicationset-parameters">Parameters</h3>

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
|» clientToken|body|string|false|A token that ensures that the operation is called only once with the specified details.|
|» regions|body|object|true|The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.|
|» » **additionalProperties**|body|[RegionMapInputValue](#schemaregionmapinputvalue)|false|The mapping between a Amazon Web Services Region and the key that's used to encrypt the data.|
|» tags|body|object|false|A list of tags to add to the replication set.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "arn": {}
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

<h3 id="createreplicationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateReplicationSetOutput](#schemacreatereplicationsetoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResponsePlan

<a id="opIdCreateResponsePlan"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/createResponsePlan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actions": [
      {
        "ssmAutomation": {
          "documentName": {},
          "documentVersion": {},
          "dynamicParameters": {
            "property1": {
              "variable": {}
            },
            "property2": {
              "variable": {}
            }
          },
          "parameters": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "roleArn": {},
          "targetAccount": {}
        }
      }
    ],
    "chatChannel": {
      "chatbotSns": {},
      "empty": {}
    },
    "clientToken": "string",
    "displayName": "string",
    "engagements": [
      "string"
    ],
    "incidentTemplate": {
      "dedupeString": {},
      "impact": {},
      "incidentTags": {
        "property1": "string",
        "property2": "string"
      },
      "notificationTargets": {},
      "summary": {},
      "title": {}
    },
    "integrations": [
      {
        "pagerDutyConfiguration": {
          "name": {},
          "pagerDutyIncidentConfiguration": {
            "serviceId": {}
          },
          "secretId": {}
        }
      }
    ],
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createResponsePlan`

Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.

> Body parameter

```json
{
  "actions": [
    {
      "ssmAutomation": {
        "documentName": {},
        "documentVersion": {},
        "dynamicParameters": {
          "property1": {
            "variable": {}
          },
          "property2": {
            "variable": {}
          }
        },
        "parameters": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "roleArn": {},
        "targetAccount": {}
      }
    }
  ],
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "clientToken": "string",
  "displayName": "string",
  "engagements": [
    "string"
  ],
  "incidentTemplate": {
    "dedupeString": {},
    "impact": {},
    "incidentTags": {
      "property1": "string",
      "property2": "string"
    },
    "notificationTargets": {},
    "summary": {},
    "title": {}
  },
  "integrations": [
    {
      "pagerDutyConfiguration": {
        "name": {},
        "pagerDutyIncidentConfiguration": {
          "serviceId": {}
        },
        "secretId": {}
      }
    }
  ],
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createresponseplan-parameters">Parameters</h3>

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
|» actions|body|[[Action](#schemaaction)]|false|The actions that the response plan starts at the beginning of an incident.|
|» chatChannel|body|object|false|The Chatbot chat channel used for collaboration during an incident.|
|» » chatbotSns|body|object|false|none|
|» » empty|body|object|false|none|
|» clientToken|body|string|false|A token ensuring that the operation is called only once with the specified details.|
|» displayName|body|string|false|The long format of the response plan name. This field can contain spaces.|
|» engagements|body|[[SsmContactsArn](#schemassmcontactsarn)]|false|The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.|
|» incidentTemplate|body|object|true|Basic details used in creating a response plan. The response plan is then used to create an incident record.|
|» » dedupeString|body|object|false|none|
|» » impact|body|object|false|none|
|» » incidentTags|body|object|false|none|
|» » » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» » notificationTargets|body|object|false|none|
|» » summary|body|object|false|none|
|» » title|body|object|false|none|
|» integrations|body|[[Integration](#schemaintegration)]|false|Information about third-party services integrated into the response plan.|
|» name|body|string|true|The short format name of the response plan. Can't include spaces.|
|» tags|body|object|false|A list of tags that you are adding to the response plan.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "arn": {}
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

<h3 id="createresponseplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateResponsePlanOutput](#schemacreateresponseplanoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTimelineEvent

<a id="opIdCreateTimelineEvent"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/createTimelineEvent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "eventData": "string",
    "eventReferences": [
      {
        "relatedItemId": {},
        "resource": {}
      }
    ],
    "eventTime": "1970-01-01T00:00:00Z",
    "eventType": "string",
    "incidentRecordArn": "string"
  }'
```

`POST /createTimelineEvent`

Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.

> Body parameter

```json
{
  "clientToken": "string",
  "eventData": "string",
  "eventReferences": [
    {
      "relatedItemId": {},
      "resource": {}
    }
  ],
  "eventTime": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "incidentRecordArn": "string"
}
```

<h3 id="createtimelineevent-parameters">Parameters</h3>

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
|» clientToken|body|string|false|A token that ensures that a client calls the action only once with the specified details.|
|» eventData|body|string|true|A short description of the event.|
|» eventReferences|body|[[EventReference](#schemaeventreference)]|false|Adds one or more references to the <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with a resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.|
|» eventTime|body|string(date-time)|true|The time that the event occurred.|
|» eventType|body|string|true|The type of event. You can create timeline events of type <code>Custom Event</code>.|
|» incidentRecordArn|body|string|true|The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.|

> Example responses

> 201 Response

```json
{
  "eventId": {},
  "incidentRecordArn": {}
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

<h3 id="createtimelineevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateTimelineEventOutput](#schemacreatetimelineeventoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIncidentRecord

<a id="opIdDeleteIncidentRecord"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/deleteIncidentRecord \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /deleteIncidentRecord`

Delete an incident record from Incident Manager. 

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="deleteincidentrecord-parameters">Parameters</h3>

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
|» arn|body|string|true|The Amazon Resource Name (ARN) of the incident record you are deleting.|

> Example responses

> 204 Response

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

<h3 id="deleteincidentrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteIncidentRecordOutput](#schemadeleteincidentrecordoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationSet

<a id="opIdDeleteReplicationSet"></a>

> Code samples

```bash
curl 'https://ssm-incidents.us-east-1.amazonaws.com/deleteReplicationSet#arn?arn=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /deleteReplicationSet#arn`

Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.

<h3 id="deletereplicationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|query|string|true|The Amazon Resource Name (ARN) of the replication set you're deleting.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="deletereplicationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteReplicationSetOutput](#schemadeletereplicationsetoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/deleteResourcePolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "policyId": "string",
    "resourceArn": "string"
  }'
```

`POST /deleteResourcePolicy`

Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.

> Body parameter

```json
{
  "policyId": "string",
  "resourceArn": "string"
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

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
|» policyId|body|string|true|The ID of the resource policy you're deleting.|
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource you're deleting the policy from.|

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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyOutput](#schemadeleteresourcepolicyoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResponsePlan

<a id="opIdDeleteResponsePlan"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/deleteResponsePlan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /deleteResponsePlan`

Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="deleteresponseplan-parameters">Parameters</h3>

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
|» arn|body|string|true|The Amazon Resource Name (ARN) of the response plan.|

> Example responses

> 204 Response

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

<h3 id="deleteresponseplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteResponsePlanOutput](#schemadeleteresponseplanoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTimelineEvent

<a id="opIdDeleteTimelineEvent"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/deleteTimelineEvent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "eventId": "string",
    "incidentRecordArn": "string"
  }'
```

`POST /deleteTimelineEvent`

Deletes a timeline event from an incident.

> Body parameter

```json
{
  "eventId": "string",
  "incidentRecordArn": "string"
}
```

<h3 id="deletetimelineevent-parameters">Parameters</h3>

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
|» eventId|body|string|true|The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.|
|» incidentRecordArn|body|string|true|The Amazon Resource Name (ARN) of the incident that includes the timeline event.|

> Example responses

> 204 Response

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

<h3 id="deletetimelineevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteTimelineEventOutput](#schemadeletetimelineeventoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIncidentRecord

<a id="opIdGetIncidentRecord"></a>

> Code samples

```bash
curl 'https://ssm-incidents.us-east-1.amazonaws.com/getIncidentRecord#arn?arn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /getIncidentRecord#arn`

Returns the details for the specified incident record.

<h3 id="getincidentrecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|query|string|true|The Amazon Resource Name (ARN) of the incident record.|
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
  "incidentRecord": {
    "arn": {},
    "automationExecutions": {},
    "chatChannel": {
      "chatbotSns": {},
      "empty": {}
    },
    "creationTime": {},
    "dedupeString": {},
    "impact": {},
    "incidentRecordSource": {
      "createdBy": {},
      "invokedBy": {},
      "resourceArn": {},
      "source": {}
    },
    "lastModifiedBy": {},
    "lastModifiedTime": {},
    "notificationTargets": {},
    "resolvedTime": {},
    "status": {},
    "summary": {},
    "title": {}
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

<h3 id="getincidentrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIncidentRecordOutput](#schemagetincidentrecordoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReplicationSet

<a id="opIdGetReplicationSet"></a>

> Code samples

```bash
curl 'https://ssm-incidents.us-east-1.amazonaws.com/getReplicationSet#arn?arn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /getReplicationSet#arn`

Retrieve your Incident Manager replication set.

<h3 id="getreplicationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|query|string|true|The Amazon Resource Name (ARN) of the replication set you want to retrieve.|
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
  "replicationSet": {
    "arn": {},
    "createdBy": {},
    "createdTime": {},
    "deletionProtected": {},
    "lastModifiedBy": {},
    "lastModifiedTime": {},
    "regionMap": {
      "property1": {
        "sseKmsKeyId": {},
        "status": {},
        "statusMessage": {},
        "statusUpdateDateTime": {}
      },
      "property2": {
        "sseKmsKeyId": {},
        "status": {},
        "statusMessage": {},
        "statusUpdateDateTime": {}
      }
    },
    "status": {}
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

<h3 id="getreplicationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReplicationSetOutput](#schemagetreplicationsetoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicies

<a id="opIdGetResourcePolicies"></a>

> Code samples

```bash
curl 'https://ssm-incidents.us-east-1.amazonaws.com/getResourcePolicies#resourceArn?resourceArn=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /getResourcePolicies#resourceArn`

Retrieves the resource policies attached to the specified response plan.

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="getresourcepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the response plan with the attached resource policy. |
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
|» maxResults|body|integer|false|The maximum number of resource policies to display for each page of results.|
|» nextToken|body|string|false|The pagination token to continue to the next page of results.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "resourcePolicies": {}
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

<h3 id="getresourcepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePoliciesOutput](#schemagetresourcepoliciesoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResponsePlan

<a id="opIdGetResponsePlan"></a>

> Code samples

```bash
curl 'https://ssm-incidents.us-east-1.amazonaws.com/getResponsePlan#arn?arn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /getResponsePlan#arn`

Retrieves the details of the specified response plan.

<h3 id="getresponseplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|query|string|true|The Amazon Resource Name (ARN) of the response plan.|
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
  "actions": {},
  "arn": {},
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "displayName": {},
  "engagements": {},
  "incidentTemplate": {
    "dedupeString": {},
    "impact": {},
    "incidentTags": {
      "property1": "string",
      "property2": "string"
    },
    "notificationTargets": {},
    "summary": {},
    "title": {}
  },
  "integrations": {},
  "name": {}
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

<h3 id="getresponseplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResponsePlanOutput](#schemagetresponseplanoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTimelineEvent

<a id="opIdGetTimelineEvent"></a>

> Code samples

```bash
curl 'https://ssm-incidents.us-east-1.amazonaws.com/getTimelineEvent#eventId&incidentRecordArn?eventId=string&incidentRecordArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /getTimelineEvent#eventId&incidentRecordArn`

Retrieves a timeline event based on its ID and incident record.

<h3 id="gettimelineevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|query|string|true|The ID of the event. You can get an event's ID when you create it, or by using <code>ListTimelineEvents</code>.|
|incidentRecordArn|query|string|true|The Amazon Resource Name (ARN) of the incident that includes the timeline event.|
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
  "event": {
    "eventData": {},
    "eventId": {},
    "eventReferences": {},
    "eventTime": {},
    "eventType": {},
    "eventUpdatedTime": {},
    "incidentRecordArn": {}
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

<h3 id="gettimelineevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTimelineEventOutput](#schemagettimelineeventoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIncidentRecords

<a id="opIdListIncidentRecords"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/listIncidentRecords \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "condition": {
          "after": {},
          "before": {},
          "equals": {
            "integerValues": {},
            "stringValues": {}
          }
        },
        "key": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /listIncidentRecords`

Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 

> Body parameter

```json
{
  "filters": [
    {
      "condition": {
        "after": {},
        "before": {},
        "equals": {
          "integerValues": {},
          "stringValues": {}
        }
      },
      "key": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listincidentrecords-parameters">Parameters</h3>

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
|» filters|body|[[Filter](#schemafilter)]|false|<p>Filters the list of incident records you want to search through. You can filter on the following keys:</p> <ul> <li> <p> <code>creationTime</code> </p> </li> <li> <p> <code>impact</code> </p> </li> <li> <p> <code>status</code> </p> </li> <li> <p> <code>createdBy</code> </p> </li> </ul> <p>Note the following when when you use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all incident records.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns incident records that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns incident records that match any of the values provided.</p> </li> </ul>|
|» maxResults|body|integer|false|The maximum number of results per page.|
|» nextToken|body|string|false|The pagination token to continue to the next page of results.|

> Example responses

> 200 Response

```json
{
  "incidentRecordSummaries": {},
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

<h3 id="listincidentrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIncidentRecordsOutput](#schemalistincidentrecordsoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRelatedItems

<a id="opIdListRelatedItems"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/listRelatedItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "incidentRecordArn": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /listRelatedItems`

List all related items for an incident record.

> Body parameter

```json
{
  "incidentRecordArn": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listrelateditems-parameters">Parameters</h3>

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
|» incidentRecordArn|body|string|true|The Amazon Resource Name (ARN) of the incident record containing the listed related items.|
|» maxResults|body|integer|false|The maximum number of related items per page.|
|» nextToken|body|string|false|The pagination token to continue to the next page of results.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "relatedItems": {}
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

<h3 id="listrelateditems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRelatedItemsOutput](#schemalistrelateditemsoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReplicationSets

<a id="opIdListReplicationSets"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/listReplicationSets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /listReplicationSets`

Lists details about the replication set configured in your account. 

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listreplicationsets-parameters">Parameters</h3>

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
|» maxResults|body|integer|false|The maximum number of results per page. |
|» nextToken|body|string|false|The pagination token to continue to the next page of results.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "replicationSetArns": {}
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

<h3 id="listreplicationsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReplicationSetsOutput](#schemalistreplicationsetsoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResponsePlans

<a id="opIdListResponsePlans"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/listResponsePlans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /listResponsePlans`

Lists all response plans in your account.

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listresponseplans-parameters">Parameters</h3>

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
|» maxResults|body|integer|false|The maximum number of response plans per page.|
|» nextToken|body|string|false|The pagination token to continue to the next page of results.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "responsePlanSummaries": {}
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

<h3 id="listresponseplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResponsePlansOutput](#schemalistresponseplansoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags that are attached to the specified response plan.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the response plan.|
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/tags/string \
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

Adds a tag to a response plan.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the response plan you're adding the tags to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A list of tags to add to the response plan.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 204 Response

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTimelineEvents

<a id="opIdListTimelineEvents"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/listTimelineEvents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "condition": {
          "after": {},
          "before": {},
          "equals": {
            "integerValues": {},
            "stringValues": {}
          }
        },
        "key": {}
      }
    ],
    "incidentRecordArn": "string",
    "maxResults": 1,
    "nextToken": "string",
    "sortBy": "EVENT_TIME",
    "sortOrder": "ASCENDING"
  }'
```

`POST /listTimelineEvents`

Lists timeline events for the specified incident record.

> Body parameter

```json
{
  "filters": [
    {
      "condition": {
        "after": {},
        "before": {},
        "equals": {
          "integerValues": {},
          "stringValues": {}
        }
      },
      "key": {}
    }
  ],
  "incidentRecordArn": "string",
  "maxResults": 1,
  "nextToken": "string",
  "sortBy": "EVENT_TIME",
  "sortOrder": "ASCENDING"
}
```

<h3 id="listtimelineevents-parameters">Parameters</h3>

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
|» filters|body|[[Filter](#schemafilter)]|false|<p>Filters the timeline events based on the provided conditional values. You can filter timeline events with the following keys:</p> <ul> <li> <p> <code>eventTime</code> </p> </li> <li> <p> <code>eventType</code> </p> </li> </ul> <p>Note the following when deciding how to use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all timeline events.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns timeline events that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns timeline events that match any of the values provided.</p> </li> </ul>|
|» incidentRecordArn|body|string|true|The Amazon Resource Name (ARN) of the incident that includes the timeline event.|
|» maxResults|body|integer|false|The maximum number of results per page.|
|» nextToken|body|string|false|The pagination token to continue to the next page of results.|
|» sortBy|body|string|false|Sort timeline events by the specified key value pair.|
|» sortOrder|body|string|false|Sorts the order of timeline events by the value specified in the <code>sortBy</code> field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sortBy|EVENT_TIME|
|» sortOrder|ASCENDING|
|» sortOrder|DESCENDING|

> Example responses

> 200 Response

```json
{
  "eventSummaries": {},
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

<h3 id="listtimelineevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTimelineEventsOutput](#schemalisttimelineeventsoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/putResourcePolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "policy": "string",
    "resourceArn": "string"
  }'
```

`POST /putResourcePolicy`

Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.

> Body parameter

```json
{
  "policy": "string",
  "resourceArn": "string"
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|» policy|body|string|true|Details of the resource policy.|
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the response plan to add the resource policy to.|

> Example responses

> 200 Response

```json
{
  "policyId": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyOutput](#schemaputresourcepolicyoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartIncident

<a id="opIdStartIncident"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/startIncident \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "impact": 1,
    "relatedItems": [
      {
        "generatedId": {},
        "identifier": {
          "type": {},
          "value": {
            "arn": {},
            "metricDefinition": {},
            "pagerDutyIncidentDetail": {
              "autoResolve": {},
              "id": {},
              "secretId": {}
            },
            "url": {}
          }
        },
        "title": {}
      }
    ],
    "responsePlanArn": "string",
    "title": "string",
    "triggerDetails": {
      "rawData": {},
      "source": {},
      "timestamp": {},
      "triggerArn": {}
    }
  }'
```

`POST /startIncident`

Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 

> Body parameter

```json
{
  "clientToken": "string",
  "impact": 1,
  "relatedItems": [
    {
      "generatedId": {},
      "identifier": {
        "type": {},
        "value": {
          "arn": {},
          "metricDefinition": {},
          "pagerDutyIncidentDetail": {
            "autoResolve": {},
            "id": {},
            "secretId": {}
          },
          "url": {}
        }
      },
      "title": {}
    }
  ],
  "responsePlanArn": "string",
  "title": "string",
  "triggerDetails": {
    "rawData": {},
    "source": {},
    "timestamp": {},
    "triggerArn": {}
  }
}
```

<h3 id="startincident-parameters">Parameters</h3>

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
|» clientToken|body|string|false|A token ensuring that the operation is called only once with the specified details.|
|» impact|body|integer|false|<p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, this typically relates to full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer might aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>|
|» relatedItems|body|[[RelatedItem](#schemarelateditem)]|false|Add related items to the incident for other responders to use. Related items are Amazon Web Services resources, external links, or files uploaded to an Amazon S3 bucket. |
|» responsePlanArn|body|string|true|The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident. |
|» title|body|string|false|Provide a title for the incident. Providing a title overwrites the title provided by the response plan. |
|» triggerDetails|body|object|false|Details about what caused the incident to be created in Incident Manager.|
|» » rawData|body|object|false|none|
|» » source|body|object|false|none|
|» » timestamp|body|object|false|none|
|» » triggerArn|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "incidentRecordArn": {}
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

<h3 id="startincident-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartIncidentOutput](#schemastartincidentoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://ssm-incidents.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes a tag from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the response plan you're removing a tag from.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The name of the tag to remove from the response plan.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeletionProtection

<a id="opIdUpdateDeletionProtection"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/updateDeletionProtection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string",
    "clientToken": "string",
    "deletionProtected": true
  }'
```

`POST /updateDeletionProtection`

Update deletion protection to either allow or deny deletion of the final Region in a replication set.

> Body parameter

```json
{
  "arn": "string",
  "clientToken": "string",
  "deletionProtected": true
}
```

<h3 id="updatedeletionprotection-parameters">Parameters</h3>

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
|» arn|body|string|true|The Amazon Resource Name (ARN) of the replication set to update.|
|» clientToken|body|string|false|A token that ensures that the operation is called only once with the specified details.|
|» deletionProtected|body|boolean|true|Specifies if deletion protection is turned on or off in your account. |

> Example responses

> 204 Response

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

<h3 id="updatedeletionprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateDeletionProtectionOutput](#schemaupdatedeletionprotectionoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIncidentRecord

<a id="opIdUpdateIncidentRecord"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/updateIncidentRecord \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string",
    "chatChannel": {
      "chatbotSns": {},
      "empty": {}
    },
    "clientToken": "string",
    "impact": 1,
    "notificationTargets": [
      {
        "snsTopicArn": {}
      }
    ],
    "status": "OPEN",
    "summary": "string",
    "title": "string"
  }'
```

`POST /updateIncidentRecord`

Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.

> Body parameter

```json
{
  "arn": "string",
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "clientToken": "string",
  "impact": 1,
  "notificationTargets": [
    {
      "snsTopicArn": {}
    }
  ],
  "status": "OPEN",
  "summary": "string",
  "title": "string"
}
```

<h3 id="updateincidentrecord-parameters">Parameters</h3>

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
|» arn|body|string|true|The Amazon Resource Name (ARN) of the incident record you are updating.|
|» chatChannel|body|object|false|The Chatbot chat channel used for collaboration during an incident.|
|» » chatbotSns|body|object|false|none|
|» » empty|body|object|false|none|
|» clientToken|body|string|false|A token that ensures that a client calls the operation only once with the specified details.|
|» impact|body|integer|false|<p>Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>|
|» notificationTargets|body|[[NotificationTargetItem](#schemanotificationtargetitem)]|false|<p>The Amazon SNS targets that Incident Manager notifies when a client updates an incident.</p> <p>Using multiple SNS topics creates redundancy in the event that a Region is down during the incident.</p>|
|» status|body|string|false|The status of the incident. Possible statuses are <code>Open</code> or <code>Resolved</code>.|
|» summary|body|string|false|A longer description of what occurred during the incident.|
|» title|body|string|false|A brief description of the incident.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|OPEN|
|» status|RESOLVED|

> Example responses

> 204 Response

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

<h3 id="updateincidentrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateIncidentRecordOutput](#schemaupdateincidentrecordoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRelatedItems

<a id="opIdUpdateRelatedItems"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/updateRelatedItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "incidentRecordArn": "string",
    "relatedItemsUpdate": {
      "itemToAdd": {
        "generatedId": {},
        "identifier": {
          "type": {},
          "value": {
            "arn": {},
            "metricDefinition": {},
            "pagerDutyIncidentDetail": {
              "autoResolve": {},
              "id": {},
              "secretId": {}
            },
            "url": {}
          }
        },
        "title": {}
      },
      "itemToRemove": {
        "type": {},
        "value": {
          "arn": {},
          "metricDefinition": {},
          "pagerDutyIncidentDetail": {
            "autoResolve": {},
            "id": {},
            "secretId": {}
          },
          "url": {}
        }
      }
    }
  }'
```

`POST /updateRelatedItems`

Add or remove related items from the related items tab of an incident record.

> Body parameter

```json
{
  "clientToken": "string",
  "incidentRecordArn": "string",
  "relatedItemsUpdate": {
    "itemToAdd": {
      "generatedId": {},
      "identifier": {
        "type": {},
        "value": {
          "arn": {},
          "metricDefinition": {},
          "pagerDutyIncidentDetail": {
            "autoResolve": {},
            "id": {},
            "secretId": {}
          },
          "url": {}
        }
      },
      "title": {}
    },
    "itemToRemove": {
      "type": {},
      "value": {
        "arn": {},
        "metricDefinition": {},
        "pagerDutyIncidentDetail": {
          "autoResolve": {},
          "id": {},
          "secretId": {}
        },
        "url": {}
      }
    }
  }
}
```

<h3 id="updaterelateditems-parameters">Parameters</h3>

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
|» clientToken|body|string|false|A token that ensures that a client calls the operation only once with the specified details.|
|» incidentRecordArn|body|string|true|The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.|
|» relatedItemsUpdate|body|object|true|Details about the related item you're adding.|
|» » itemToAdd|body|object|false|none|
|» » » generatedId|body|object|false|none|
|» » » identifier|body|object|true|none|
|» » » » type|body|object|true|none|
|» » » » value|body|object|true|none|
|» » » » » arn|body|object|false|none|
|» » » » » metricDefinition|body|object|false|none|
|» » » » » pagerDutyIncidentDetail|body|object|false|none|
|» » » » » » autoResolve|body|object|false|none|
|» » » » » » id|body|object|true|none|
|» » » » » » secretId|body|object|false|none|
|» » » » » url|body|object|false|none|
|» » » title|body|object|false|none|
|» » itemToRemove|body|object|false|none|
|» » » type|body|object|true|none|
|» » » value|body|object|true|none|
|» » » » arn|body|object|false|none|
|» » » » metricDefinition|body|object|false|none|
|» » » » pagerDutyIncidentDetail|body|object|false|none|
|» » » » » autoResolve|body|object|false|none|
|» » » » » id|body|object|true|none|
|» » » » » secretId|body|object|false|none|
|» » » » url|body|object|false|none|

> Example responses

> 204 Response

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

<h3 id="updaterelateditems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateRelatedItemsOutput](#schemaupdaterelateditemsoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReplicationSet

<a id="opIdUpdateReplicationSet"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/updateReplicationSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actions": [
      {
        "addRegionAction": {
          "regionName": {},
          "sseKmsKeyId": {}
        },
        "deleteRegionAction": {
          "regionName": {}
        }
      }
    ],
    "arn": "string",
    "clientToken": "string"
  }'
```

`POST /updateReplicationSet`

Add or delete Regions from your replication set.

> Body parameter

```json
{
  "actions": [
    {
      "addRegionAction": {
        "regionName": {},
        "sseKmsKeyId": {}
      },
      "deleteRegionAction": {
        "regionName": {}
      }
    }
  ],
  "arn": "string",
  "clientToken": "string"
}
```

<h3 id="updatereplicationset-parameters">Parameters</h3>

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
|» actions|body|[[UpdateReplicationSetAction](#schemaupdatereplicationsetaction)]|true|An action to add or delete a Region.|
|» arn|body|string|true|The Amazon Resource Name (ARN) of the replication set you're updating.|
|» clientToken|body|string|false|A token that ensures that the operation is called only once with the specified details.|

> Example responses

> 204 Response

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

<h3 id="updatereplicationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateReplicationSetOutput](#schemaupdatereplicationsetoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResponsePlan

<a id="opIdUpdateResponsePlan"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/updateResponsePlan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actions": [
      {
        "ssmAutomation": {
          "documentName": {},
          "documentVersion": {},
          "dynamicParameters": {
            "property1": {
              "variable": {}
            },
            "property2": {
              "variable": {}
            }
          },
          "parameters": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "roleArn": {},
          "targetAccount": {}
        }
      }
    ],
    "arn": "string",
    "chatChannel": {
      "chatbotSns": {},
      "empty": {}
    },
    "clientToken": "string",
    "displayName": "string",
    "engagements": [
      "string"
    ],
    "incidentTemplateDedupeString": "string",
    "incidentTemplateImpact": 1,
    "incidentTemplateNotificationTargets": [
      {
        "snsTopicArn": {}
      }
    ],
    "incidentTemplateSummary": "string",
    "incidentTemplateTags": {
      "property1": "string",
      "property2": "string"
    },
    "incidentTemplateTitle": "string",
    "integrations": [
      {
        "pagerDutyConfiguration": {
          "name": {},
          "pagerDutyIncidentConfiguration": {
            "serviceId": {}
          },
          "secretId": {}
        }
      }
    ]
  }'
```

`POST /updateResponsePlan`

Updates the specified response plan.

> Body parameter

```json
{
  "actions": [
    {
      "ssmAutomation": {
        "documentName": {},
        "documentVersion": {},
        "dynamicParameters": {
          "property1": {
            "variable": {}
          },
          "property2": {
            "variable": {}
          }
        },
        "parameters": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "roleArn": {},
        "targetAccount": {}
      }
    }
  ],
  "arn": "string",
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "clientToken": "string",
  "displayName": "string",
  "engagements": [
    "string"
  ],
  "incidentTemplateDedupeString": "string",
  "incidentTemplateImpact": 1,
  "incidentTemplateNotificationTargets": [
    {
      "snsTopicArn": {}
    }
  ],
  "incidentTemplateSummary": "string",
  "incidentTemplateTags": {
    "property1": "string",
    "property2": "string"
  },
  "incidentTemplateTitle": "string",
  "integrations": [
    {
      "pagerDutyConfiguration": {
        "name": {},
        "pagerDutyIncidentConfiguration": {
          "serviceId": {}
        },
        "secretId": {}
      }
    }
  ]
}
```

<h3 id="updateresponseplan-parameters">Parameters</h3>

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
|» actions|body|[[Action](#schemaaction)]|false|The actions that this response plan takes at the beginning of an incident.|
|» arn|body|string|true|The Amazon Resource Name (ARN) of the response plan.|
|» chatChannel|body|object|false|The Chatbot chat channel used for collaboration during an incident.|
|» » chatbotSns|body|object|false|none|
|» » empty|body|object|false|none|
|» clientToken|body|string|false|A token ensuring that the operation is called only once with the specified details.|
|» displayName|body|string|false|The long format name of the response plan. The display name can't contain spaces.|
|» engagements|body|[[SsmContactsArn](#schemassmcontactsarn)]|false|The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.|
|» incidentTemplateDedupeString|body|string|false|The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.|
|» incidentTemplateImpact|body|integer|false|<p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>5</code> - Severe impact</p> </li> <li> <p> <code>4</code> - High impact</p> </li> <li> <p> <code>3</code> - Medium impact</p> </li> <li> <p> <code>2</code> - Low impact</p> </li> <li> <p> <code>1</code> - No impact</p> </li> </ul>|
|» incidentTemplateNotificationTargets|body|[[NotificationTargetItem](#schemanotificationtargetitem)]|false|The Amazon SNS targets that are notified when updates are made to an incident.|
|» incidentTemplateSummary|body|string|false|A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.|
|» incidentTemplateTags|body|object|false|Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the <code>TagResource</code> API action for the incident record resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» incidentTemplateTitle|body|string|false|The short format name of the incident. The title can't contain spaces.|
|» integrations|body|[[Integration](#schemaintegration)]|false|Information about third-party services integrated into the response plan.|

> Example responses

> 204 Response

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

<h3 id="updateresponseplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateResponsePlanOutput](#schemaupdateresponseplanoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTimelineEvent

<a id="opIdUpdateTimelineEvent"></a>

> Code samples

```bash
curl https://ssm-incidents.us-east-1.amazonaws.com/updateTimelineEvent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "eventData": "string",
    "eventId": "string",
    "eventReferences": [
      {
        "relatedItemId": {},
        "resource": {}
      }
    ],
    "eventTime": "1970-01-01T00:00:00Z",
    "eventType": "string",
    "incidentRecordArn": "string"
  }'
```

`POST /updateTimelineEvent`

Updates a timeline event. You can update events of type <code>Custom Event</code>.

> Body parameter

```json
{
  "clientToken": "string",
  "eventData": "string",
  "eventId": "string",
  "eventReferences": [
    {
      "relatedItemId": {},
      "resource": {}
    }
  ],
  "eventTime": "1970-01-01T00:00:00Z",
  "eventType": "string",
  "incidentRecordArn": "string"
}
```

<h3 id="updatetimelineevent-parameters">Parameters</h3>

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
|» clientToken|body|string|false|A token that ensures that a client calls the operation only once with the specified details.|
|» eventData|body|string|false|A short description of the event.|
|» eventId|body|string|true|The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.|
|» eventReferences|body|[[EventReference](#schemaeventreference)]|false|<p>Updates all existing references in a <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with that resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.</p> <important> <p>This update action overrides all existing references. If you want to keep existing references, you must specify them in the call. If you don't, this action removes any existing references and enters only new references.</p> </important>|
|» eventTime|body|string(date-time)|false|The time that the event occurred.|
|» eventType|body|string|false|The type of event. You can update events of type <code>Custom Event</code>.|
|» incidentRecordArn|body|string|true|The Amazon Resource Name (ARN) of the incident that includes the timeline event.|

> Example responses

> 204 Response

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

<h3 id="updatetimelineevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateTimelineEventOutput](#schemaupdatetimelineeventoutput)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateReplicationSetOutput">CreateReplicationSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationsetoutput"></a>
<a id="schema_CreateReplicationSetOutput"></a>
<a id="tocScreatereplicationsetoutput"></a>
<a id="tocscreatereplicationsetoutput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_RegionMapInputValue">RegionMapInputValue</h2>
<!-- backwards compatibility -->
<a id="schemaregionmapinputvalue"></a>
<a id="schema_RegionMapInputValue"></a>
<a id="tocSregionmapinputvalue"></a>
<a id="tocsregionmapinputvalue"></a>

```json
{
  "sseKmsKeyId": {}
}
```

The mapping between a Amazon Web Services Region and the key that's used to encrypt the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sseKmsKeyId|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_CreateResponsePlanOutput">CreateResponsePlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateresponseplanoutput"></a>
<a id="schema_CreateResponsePlanOutput"></a>
<a id="tocScreateresponseplanoutput"></a>
<a id="tocscreateresponseplanoutput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "ssmAutomation": {
    "documentName": {},
    "documentVersion": {},
    "dynamicParameters": {
      "property1": {
        "variable": {}
      },
      "property2": {
        "variable": {}
      }
    },
    "parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "roleArn": {},
    "targetAccount": {}
  }
}
```

The action that starts at the beginning of an incident. The response plan defines the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssmAutomation|object|false|none|none|

<h2 id="tocS_ChatbotSnsConfigurationSet">ChatbotSnsConfigurationSet</h2>
<!-- backwards compatibility -->
<a id="schemachatbotsnsconfigurationset"></a>
<a id="schema_ChatbotSnsConfigurationSet"></a>
<a id="tocSchatbotsnsconfigurationset"></a>
<a id="tocschatbotsnsconfigurationset"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EmptyChatChannel">EmptyChatChannel</h2>
<!-- backwards compatibility -->
<a id="schemaemptychatchannel"></a>
<a id="schema_EmptyChatChannel"></a>
<a id="tocSemptychatchannel"></a>
<a id="tocsemptychatchannel"></a>

```json
{}
```

Used to remove the chat channel from an incident record or response plan.

<h2 id="tocS_SsmContactsArn">SsmContactsArn</h2>
<!-- backwards compatibility -->
<a id="schemassmcontactsarn"></a>
<a id="schema_SsmContactsArn"></a>
<a id="tocSssmcontactsarn"></a>
<a id="tocsssmcontactsarn"></a>

```json
"string"
```

<h2 id="tocS_DedupeString">DedupeString</h2>
<!-- backwards compatibility -->
<a id="schemadedupestring"></a>
<a id="schema_DedupeString"></a>
<a id="tocSdedupestring"></a>
<a id="tocsdedupestring"></a>

```json
"string"
```

<h2 id="tocS_Impact">Impact</h2>
<!-- backwards compatibility -->
<a id="schemaimpact"></a>
<a id="schema_Impact"></a>
<a id="tocSimpact"></a>
<a id="tocsimpact"></a>

```json
1
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

<h2 id="tocS_NotificationTargetSet">NotificationTargetSet</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtargetset"></a>
<a id="schema_NotificationTargetSet"></a>
<a id="tocSnotificationtargetset"></a>
<a id="tocsnotificationtargetset"></a>

```json
[
  {
    "snsTopicArn": {}
  }
]
```

<h2 id="tocS_IncidentSummary">IncidentSummary</h2>
<!-- backwards compatibility -->
<a id="schemaincidentsummary"></a>
<a id="schema_IncidentSummary"></a>
<a id="tocSincidentsummary"></a>
<a id="tocsincidentsummary"></a>

```json
"string"
```

<h2 id="tocS_IncidentTitle">IncidentTitle</h2>
<!-- backwards compatibility -->
<a id="schemaincidenttitle"></a>
<a id="schema_IncidentTitle"></a>
<a id="tocSincidenttitle"></a>
<a id="tocsincidenttitle"></a>

```json
"string"
```

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "pagerDutyConfiguration": {
    "name": {},
    "pagerDutyIncidentConfiguration": {
      "serviceId": {}
    },
    "secretId": {}
  }
}
```

Information about third-party services integrated into a response plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagerDutyConfiguration|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateTimelineEventOutput">CreateTimelineEventOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetimelineeventoutput"></a>
<a id="schema_CreateTimelineEventOutput"></a>
<a id="tocScreatetimelineeventoutput"></a>
<a id="tocscreatetimelineeventoutput"></a>

```json
{
  "eventId": {},
  "incidentRecordArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|incidentRecordArn|object|true|none|none|

<h2 id="tocS_EventReference">EventReference</h2>
<!-- backwards compatibility -->
<a id="schemaeventreference"></a>
<a id="schema_EventReference"></a>
<a id="tocSeventreference"></a>
<a id="tocseventreference"></a>

```json
{
  "relatedItemId": {},
  "resource": {}
}
```

An item referenced in a <code>TimelineEvent</code> that is involved in or somehow associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a <code>RelatedItem</code> ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relatedItemId|object|false|none|none|
|resource|object|false|none|none|

<h2 id="tocS_DeleteIncidentRecordOutput">DeleteIncidentRecordOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteincidentrecordoutput"></a>
<a id="schema_DeleteIncidentRecordOutput"></a>
<a id="tocSdeleteincidentrecordoutput"></a>
<a id="tocsdeleteincidentrecordoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteReplicationSetOutput">DeleteReplicationSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationsetoutput"></a>
<a id="schema_DeleteReplicationSetOutput"></a>
<a id="tocSdeletereplicationsetoutput"></a>
<a id="tocsdeletereplicationsetoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyOutput">DeleteResourcePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyoutput"></a>
<a id="schema_DeleteResourcePolicyOutput"></a>
<a id="tocSdeleteresourcepolicyoutput"></a>
<a id="tocsdeleteresourcepolicyoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteResponsePlanOutput">DeleteResponsePlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresponseplanoutput"></a>
<a id="schema_DeleteResponsePlanOutput"></a>
<a id="tocSdeleteresponseplanoutput"></a>
<a id="tocsdeleteresponseplanoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteTimelineEventOutput">DeleteTimelineEventOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetimelineeventoutput"></a>
<a id="schema_DeleteTimelineEventOutput"></a>
<a id="tocSdeletetimelineeventoutput"></a>
<a id="tocsdeletetimelineeventoutput"></a>

```json
{}
```

<h2 id="tocS_GetIncidentRecordOutput">GetIncidentRecordOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetincidentrecordoutput"></a>
<a id="schema_GetIncidentRecordOutput"></a>
<a id="tocSgetincidentrecordoutput"></a>
<a id="tocsgetincidentrecordoutput"></a>

```json
{
  "incidentRecord": {
    "arn": {},
    "automationExecutions": {},
    "chatChannel": {
      "chatbotSns": {},
      "empty": {}
    },
    "creationTime": {},
    "dedupeString": {},
    "impact": {},
    "incidentRecordSource": {
      "createdBy": {},
      "invokedBy": {},
      "resourceArn": {},
      "source": {}
    },
    "lastModifiedBy": {},
    "lastModifiedTime": {},
    "notificationTargets": {},
    "resolvedTime": {},
    "status": {},
    "summary": {},
    "title": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incidentRecord|object|true|none|none|

<h2 id="tocS_GetReplicationSetOutput">GetReplicationSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetreplicationsetoutput"></a>
<a id="schema_GetReplicationSetOutput"></a>
<a id="tocSgetreplicationsetoutput"></a>
<a id="tocsgetreplicationsetoutput"></a>

```json
{
  "replicationSet": {
    "arn": {},
    "createdBy": {},
    "createdTime": {},
    "deletionProtected": {},
    "lastModifiedBy": {},
    "lastModifiedTime": {},
    "regionMap": {
      "property1": {
        "sseKmsKeyId": {},
        "status": {},
        "statusMessage": {},
        "statusUpdateDateTime": {}
      },
      "property2": {
        "sseKmsKeyId": {},
        "status": {},
        "statusMessage": {},
        "statusUpdateDateTime": {}
      }
    },
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationSet|object|true|none|none|

<h2 id="tocS_GetResourcePoliciesOutput">GetResourcePoliciesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesoutput"></a>
<a id="schema_GetResourcePoliciesOutput"></a>
<a id="tocSgetresourcepoliciesoutput"></a>
<a id="tocsgetresourcepoliciesoutput"></a>

```json
{
  "nextToken": {},
  "resourcePolicies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|resourcePolicies|object|true|none|none|

<h2 id="tocS_GetResponsePlanOutput">GetResponsePlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetresponseplanoutput"></a>
<a id="schema_GetResponsePlanOutput"></a>
<a id="tocSgetresponseplanoutput"></a>
<a id="tocsgetresponseplanoutput"></a>

```json
{
  "actions": {},
  "arn": {},
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "displayName": {},
  "engagements": {},
  "incidentTemplate": {
    "dedupeString": {},
    "impact": {},
    "incidentTags": {
      "property1": "string",
      "property2": "string"
    },
    "notificationTargets": {},
    "summary": {},
    "title": {}
  },
  "integrations": {},
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|arn|object|true|none|none|
|chatChannel|object|false|none|none|
|displayName|object|false|none|none|
|engagements|object|false|none|none|
|incidentTemplate|object|true|none|none|
|integrations|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_GetTimelineEventOutput">GetTimelineEventOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettimelineeventoutput"></a>
<a id="schema_GetTimelineEventOutput"></a>
<a id="tocSgettimelineeventoutput"></a>
<a id="tocsgettimelineeventoutput"></a>

```json
{
  "event": {
    "eventData": {},
    "eventId": {},
    "eventReferences": {},
    "eventTime": {},
    "eventType": {},
    "eventUpdatedTime": {},
    "incidentRecordArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|

<h2 id="tocS_ListIncidentRecordsOutput">ListIncidentRecordsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistincidentrecordsoutput"></a>
<a id="schema_ListIncidentRecordsOutput"></a>
<a id="tocSlistincidentrecordsoutput"></a>
<a id="tocslistincidentrecordsoutput"></a>

```json
{
  "incidentRecordSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incidentRecordSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "condition": {
    "after": {},
    "before": {},
    "equals": {
      "integerValues": {},
      "stringValues": {}
    }
  },
  "key": {}
}
```

Filter the selection by using a condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|object|true|none|none|
|key|object|true|none|none|

<h2 id="tocS_ListRelatedItemsOutput">ListRelatedItemsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrelateditemsoutput"></a>
<a id="schema_ListRelatedItemsOutput"></a>
<a id="tocSlistrelateditemsoutput"></a>
<a id="tocslistrelateditemsoutput"></a>

```json
{
  "nextToken": {},
  "relatedItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|relatedItems|object|true|none|none|

<h2 id="tocS_ListReplicationSetsOutput">ListReplicationSetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistreplicationsetsoutput"></a>
<a id="schema_ListReplicationSetsOutput"></a>
<a id="tocSlistreplicationsetsoutput"></a>
<a id="tocslistreplicationsetsoutput"></a>

```json
{
  "nextToken": {},
  "replicationSetArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|replicationSetArns|object|true|none|none|

<h2 id="tocS_ListResponsePlansOutput">ListResponsePlansOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistresponseplansoutput"></a>
<a id="schema_ListResponsePlansOutput"></a>
<a id="tocSlistresponseplansoutput"></a>
<a id="tocslistresponseplansoutput"></a>

```json
{
  "nextToken": {},
  "responsePlanSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|responsePlanSummaries|object|true|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_ListTimelineEventsOutput">ListTimelineEventsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttimelineeventsoutput"></a>
<a id="schema_ListTimelineEventsOutput"></a>
<a id="tocSlisttimelineeventsoutput"></a>
<a id="tocslisttimelineeventsoutput"></a>

```json
{
  "eventSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_PutResourcePolicyOutput">PutResourcePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyoutput"></a>
<a id="schema_PutResourcePolicyOutput"></a>
<a id="tocSputresourcepolicyoutput"></a>
<a id="tocsputresourcepolicyoutput"></a>

```json
{
  "policyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|object|true|none|none|

<h2 id="tocS_StartIncidentOutput">StartIncidentOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartincidentoutput"></a>
<a id="schema_StartIncidentOutput"></a>
<a id="tocSstartincidentoutput"></a>
<a id="tocsstartincidentoutput"></a>

```json
{
  "incidentRecordArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incidentRecordArn|object|true|none|none|

<h2 id="tocS_RelatedItem">RelatedItem</h2>
<!-- backwards compatibility -->
<a id="schemarelateditem"></a>
<a id="schema_RelatedItem"></a>
<a id="tocSrelateditem"></a>
<a id="tocsrelateditem"></a>

```json
{
  "generatedId": {},
  "identifier": {
    "type": {},
    "value": {
      "arn": {},
      "metricDefinition": {},
      "pagerDutyIncidentDetail": {
        "autoResolve": {},
        "id": {},
        "secretId": {}
      },
      "url": {}
    }
  },
  "title": {}
}
```

Resources that responders use to triage and mitigate the incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generatedId|object|false|none|none|
|identifier|object|true|none|none|
|title|object|false|none|none|

<h2 id="tocS_RawData">RawData</h2>
<!-- backwards compatibility -->
<a id="schemarawdata"></a>
<a id="schema_RawData"></a>
<a id="tocSrawdata"></a>
<a id="tocsrawdata"></a>

```json
"string"
```

<h2 id="tocS_IncidentSource">IncidentSource</h2>
<!-- backwards compatibility -->
<a id="schemaincidentsource"></a>
<a id="schema_IncidentSource"></a>
<a id="tocSincidentsource"></a>
<a id="tocsincidentsource"></a>

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

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
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

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

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

<h2 id="tocS_UpdateDeletionProtectionOutput">UpdateDeletionProtectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeletionprotectionoutput"></a>
<a id="schema_UpdateDeletionProtectionOutput"></a>
<a id="tocSupdatedeletionprotectionoutput"></a>
<a id="tocsupdatedeletionprotectionoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateIncidentRecordOutput">UpdateIncidentRecordOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateincidentrecordoutput"></a>
<a id="schema_UpdateIncidentRecordOutput"></a>
<a id="tocSupdateincidentrecordoutput"></a>
<a id="tocsupdateincidentrecordoutput"></a>

```json
{}
```

<h2 id="tocS_NotificationTargetItem">NotificationTargetItem</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtargetitem"></a>
<a id="schema_NotificationTargetItem"></a>
<a id="tocSnotificationtargetitem"></a>
<a id="tocsnotificationtargetitem"></a>

```json
{
  "snsTopicArn": {}
}
```

The SNS targets that are notified when updates are made to an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snsTopicArn|object|false|none|none|

<h2 id="tocS_UpdateRelatedItemsOutput">UpdateRelatedItemsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterelateditemsoutput"></a>
<a id="schema_UpdateRelatedItemsOutput"></a>
<a id="tocSupdaterelateditemsoutput"></a>
<a id="tocsupdaterelateditemsoutput"></a>

```json
{}
```

<h2 id="tocS_ItemIdentifier">ItemIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaitemidentifier"></a>
<a id="schema_ItemIdentifier"></a>
<a id="tocSitemidentifier"></a>
<a id="tocsitemidentifier"></a>

```json
{
  "type": {},
  "value": {
    "arn": {},
    "metricDefinition": {},
    "pagerDutyIncidentDetail": {
      "autoResolve": {},
      "id": {},
      "secretId": {}
    },
    "url": {}
  }
}
```

Details and type of a related item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_UpdateReplicationSetOutput">UpdateReplicationSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationsetoutput"></a>
<a id="schema_UpdateReplicationSetOutput"></a>
<a id="tocSupdatereplicationsetoutput"></a>
<a id="tocsupdatereplicationsetoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateReplicationSetAction">UpdateReplicationSetAction</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationsetaction"></a>
<a id="schema_UpdateReplicationSetAction"></a>
<a id="tocSupdatereplicationsetaction"></a>
<a id="tocsupdatereplicationsetaction"></a>

```json
{
  "addRegionAction": {
    "regionName": {},
    "sseKmsKeyId": {}
  },
  "deleteRegionAction": {
    "regionName": {}
  }
}
```

Details used when updating the replication set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addRegionAction|object|false|none|none|
|deleteRegionAction|object|false|none|none|

<h2 id="tocS_UpdateResponsePlanOutput">UpdateResponsePlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresponseplanoutput"></a>
<a id="schema_UpdateResponsePlanOutput"></a>
<a id="tocSupdateresponseplanoutput"></a>
<a id="tocsupdateresponseplanoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateTimelineEventOutput">UpdateTimelineEventOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetimelineeventoutput"></a>
<a id="schema_UpdateTimelineEventOutput"></a>
<a id="tocSupdatetimelineeventoutput"></a>
<a id="tocsupdatetimelineeventoutput"></a>

```json
{}
```

<h2 id="tocS_SsmAutomation">SsmAutomation</h2>
<!-- backwards compatibility -->
<a id="schemassmautomation"></a>
<a id="schema_SsmAutomation"></a>
<a id="tocSssmautomation"></a>
<a id="tocsssmautomation"></a>

```json
{
  "documentName": {},
  "documentVersion": {},
  "dynamicParameters": {
    "property1": {
      "variable": {}
    },
    "property2": {
      "variable": {}
    }
  },
  "parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "roleArn": {},
  "targetAccount": {}
}
```

Details about the Systems Manager automation document that will be used as a runbook during an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentName|object|true|none|none|
|documentVersion|object|false|none|none|
|dynamicParameters|object|false|none|none|
|parameters|object|false|none|none|
|roleArn|object|true|none|none|
|targetAccount|object|false|none|none|

<h2 id="tocS_ActionsList">ActionsList</h2>
<!-- backwards compatibility -->
<a id="schemaactionslist"></a>
<a id="schema_ActionsList"></a>
<a id="tocSactionslist"></a>
<a id="tocsactionslist"></a>

```json
[
  {
    "ssmAutomation": {
      "documentName": {},
      "documentVersion": {},
      "dynamicParameters": {
        "property1": {
          "variable": {}
        },
        "property2": {
          "variable": {}
        }
      },
      "parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "roleArn": {},
      "targetAccount": {}
    }
  }
]
```

<h2 id="tocS_RegionName">RegionName</h2>
<!-- backwards compatibility -->
<a id="schemaregionname"></a>
<a id="schema_RegionName"></a>
<a id="tocSregionname"></a>
<a id="tocsregionname"></a>

```json
"string"
```

<h2 id="tocS_SseKmsKey">SseKmsKey</h2>
<!-- backwards compatibility -->
<a id="schemassekmskey"></a>
<a id="schema_SseKmsKey"></a>
<a id="tocSssekmskey"></a>
<a id="tocsssekmskey"></a>

```json
"string"
```

<h2 id="tocS_AddRegionAction">AddRegionAction</h2>
<!-- backwards compatibility -->
<a id="schemaaddregionaction"></a>
<a id="schema_AddRegionAction"></a>
<a id="tocSaddregionaction"></a>
<a id="tocsaddregionaction"></a>

```json
{
  "regionName": {},
  "sseKmsKeyId": {}
}
```

Defines the Amazon Web Services Region and KMS key to add to the replication set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionName|object|true|none|none|
|sseKmsKeyId|object|false|none|none|

<h2 id="tocS_IntegerList">IntegerList</h2>
<!-- backwards compatibility -->
<a id="schemaintegerlist"></a>
<a id="schema_IntegerList"></a>
<a id="tocSintegerlist"></a>
<a id="tocsintegerlist"></a>

```json
[
  0
]
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

<h2 id="tocS_AttributeValueList">AttributeValueList</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluelist"></a>
<a id="schema_AttributeValueList"></a>
<a id="tocSattributevaluelist"></a>
<a id="tocsattributevaluelist"></a>

```json
{
  "integerValues": {},
  "stringValues": {}
}
```

Use the AttributeValueList to filter by string or integer values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integerValues|object|false|none|none|
|stringValues|object|false|none|none|

<h2 id="tocS_AutomationExecution">AutomationExecution</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecution"></a>
<a id="schema_AutomationExecution"></a>
<a id="tocSautomationexecution"></a>
<a id="tocsautomationexecution"></a>

```json
{
  "ssmExecutionArn": {}
}
```

The Systems Manager automation document process to start as the runbook at the beginning of the incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssmExecutionArn|object|false|none|none|

<h2 id="tocS_AutomationExecutionSet">AutomationExecutionSet</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionset"></a>
<a id="schema_AutomationExecutionSet"></a>
<a id="tocSautomationexecutionset"></a>
<a id="tocsautomationexecutionset"></a>

```json
[
  {
    "ssmExecutionArn": {}
  }
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ChatChannel">ChatChannel</h2>
<!-- backwards compatibility -->
<a id="schemachatchannel"></a>
<a id="schema_ChatChannel"></a>
<a id="tocSchatchannel"></a>
<a id="tocschatchannel"></a>

```json
{
  "chatbotSns": {},
  "empty": {}
}
```

The Chatbot chat channel used for collaboration during an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chatbotSns|object|false|none|none|
|empty|object|false|none|none|

<h2 id="tocS_SnsArn">SnsArn</h2>
<!-- backwards compatibility -->
<a id="schemasnsarn"></a>
<a id="schema_SnsArn"></a>
<a id="tocSsnsarn"></a>
<a id="tocssnsarn"></a>

```json
"string"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "after": {},
  "before": {},
  "equals": {
    "integerValues": {},
    "stringValues": {}
  }
}
```

A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|object|false|none|none|
|before|object|false|none|none|
|equals|object|false|none|none|

<h2 id="tocS_RegionMapInput">RegionMapInput</h2>
<!-- backwards compatibility -->
<a id="schemaregionmapinput"></a>
<a id="schema_RegionMapInput"></a>
<a id="tocSregionmapinput"></a>
<a id="tocsregionmapinput"></a>

```json
{
  "property1": {
    "sseKmsKeyId": {}
  },
  "property2": {
    "sseKmsKeyId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RegionMapInputValue](#schemaregionmapinputvalue)|false|none|The mapping between a Amazon Web Services Region and the key that's used to encrypt the data.|

<h2 id="tocS_CreateReplicationSetInput">CreateReplicationSetInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationsetinput"></a>
<a id="schema_CreateReplicationSetInput"></a>
<a id="tocScreatereplicationsetinput"></a>
<a id="tocscreatereplicationsetinput"></a>

```json
{
  "clientToken": {},
  "regions": {
    "property1": {
      "sseKmsKeyId": {}
    },
    "property2": {
      "sseKmsKeyId": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|regions|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ResponsePlanDisplayName">ResponsePlanDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemaresponseplandisplayname"></a>
<a id="schema_ResponsePlanDisplayName"></a>
<a id="tocSresponseplandisplayname"></a>
<a id="tocsresponseplandisplayname"></a>

```json
"string"
```

<h2 id="tocS_EngagementSet">EngagementSet</h2>
<!-- backwards compatibility -->
<a id="schemaengagementset"></a>
<a id="schema_EngagementSet"></a>
<a id="tocSengagementset"></a>
<a id="tocsengagementset"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IncidentTemplate">IncidentTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaincidenttemplate"></a>
<a id="schema_IncidentTemplate"></a>
<a id="tocSincidenttemplate"></a>
<a id="tocsincidenttemplate"></a>

```json
{
  "dedupeString": {},
  "impact": {},
  "incidentTags": {
    "property1": "string",
    "property2": "string"
  },
  "notificationTargets": {},
  "summary": {},
  "title": {}
}
```

Basic details used in creating a response plan. The response plan is then used to create an incident record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dedupeString|object|false|none|none|
|impact|object|true|none|none|
|incidentTags|object|false|none|none|
|notificationTargets|object|false|none|none|
|summary|object|false|none|none|
|title|object|true|none|none|

<h2 id="tocS_Integrations">Integrations</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations"></a>
<a id="schema_Integrations"></a>
<a id="tocSintegrations"></a>
<a id="tocsintegrations"></a>

```json
[
  {
    "pagerDutyConfiguration": {
      "name": {},
      "pagerDutyIncidentConfiguration": {
        "serviceId": {}
      },
      "secretId": {}
    }
  }
]
```

<h2 id="tocS_ResponsePlanName">ResponsePlanName</h2>
<!-- backwards compatibility -->
<a id="schemaresponseplanname"></a>
<a id="schema_ResponsePlanName"></a>
<a id="tocSresponseplanname"></a>
<a id="tocsresponseplanname"></a>

```json
"string"
```

<h2 id="tocS_CreateResponsePlanInput">CreateResponsePlanInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateresponseplaninput"></a>
<a id="schema_CreateResponsePlanInput"></a>
<a id="tocScreateresponseplaninput"></a>
<a id="tocscreateresponseplaninput"></a>

```json
{
  "actions": {},
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "clientToken": {},
  "displayName": {},
  "engagements": {},
  "incidentTemplate": {
    "dedupeString": {},
    "impact": {},
    "incidentTags": {
      "property1": "string",
      "property2": "string"
    },
    "notificationTargets": {},
    "summary": {},
    "title": {}
  },
  "integrations": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|chatChannel|object|false|none|none|
|clientToken|object|false|none|none|
|displayName|object|false|none|none|
|engagements|object|false|none|none|
|incidentTemplate|object|true|none|none|
|integrations|object|false|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_EventData">EventData</h2>
<!-- backwards compatibility -->
<a id="schemaeventdata"></a>
<a id="schema_EventData"></a>
<a id="tocSeventdata"></a>
<a id="tocseventdata"></a>

```json
"string"
```

<h2 id="tocS_EventReferenceList">EventReferenceList</h2>
<!-- backwards compatibility -->
<a id="schemaeventreferencelist"></a>
<a id="schema_EventReferenceList"></a>
<a id="tocSeventreferencelist"></a>
<a id="tocseventreferencelist"></a>

```json
[
  {
    "relatedItemId": {},
    "resource": {}
  }
]
```

<h2 id="tocS_TimelineEventType">TimelineEventType</h2>
<!-- backwards compatibility -->
<a id="schematimelineeventtype"></a>
<a id="schema_TimelineEventType"></a>
<a id="tocStimelineeventtype"></a>
<a id="tocstimelineeventtype"></a>

```json
"string"
```

<h2 id="tocS_CreateTimelineEventInput">CreateTimelineEventInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetimelineeventinput"></a>
<a id="schema_CreateTimelineEventInput"></a>
<a id="tocScreatetimelineeventinput"></a>
<a id="tocscreatetimelineeventinput"></a>

```json
{
  "clientToken": {},
  "eventData": {},
  "eventReferences": {},
  "eventTime": {},
  "eventType": {},
  "incidentRecordArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|eventData|object|true|none|none|
|eventReferences|object|false|none|none|
|eventTime|object|true|none|none|
|eventType|object|true|none|none|
|incidentRecordArn|object|true|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_DeleteIncidentRecordInput">DeleteIncidentRecordInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteincidentrecordinput"></a>
<a id="schema_DeleteIncidentRecordInput"></a>
<a id="tocSdeleteincidentrecordinput"></a>
<a id="tocsdeleteincidentrecordinput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteRegionAction">DeleteRegionAction</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregionaction"></a>
<a id="schema_DeleteRegionAction"></a>
<a id="tocSdeleteregionaction"></a>
<a id="tocsdeleteregionaction"></a>

```json
{
  "regionName": {}
}
```

Defines the information about the Amazon Web Services Region you're deleting from your replication set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionName|object|true|none|none|

<h2 id="tocS_DeleteReplicationSetInput">DeleteReplicationSetInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationsetinput"></a>
<a id="schema_DeleteReplicationSetInput"></a>
<a id="tocSdeletereplicationsetinput"></a>
<a id="tocsdeletereplicationsetinput"></a>

```json
{}
```

<h2 id="tocS_PolicyId">PolicyId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyid"></a>
<a id="schema_PolicyId"></a>
<a id="tocSpolicyid"></a>
<a id="tocspolicyid"></a>

```json
"string"
```

<h2 id="tocS_DeleteResourcePolicyInput">DeleteResourcePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyinput"></a>
<a id="schema_DeleteResourcePolicyInput"></a>
<a id="tocSdeleteresourcepolicyinput"></a>
<a id="tocsdeleteresourcepolicyinput"></a>

```json
{
  "policyId": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|object|true|none|none|
|resourceArn|object|true|none|none|

<h2 id="tocS_DeleteResponsePlanInput">DeleteResponsePlanInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresponseplaninput"></a>
<a id="schema_DeleteResponsePlanInput"></a>
<a id="tocSdeleteresponseplaninput"></a>
<a id="tocsdeleteresponseplaninput"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeleteTimelineEventInput">DeleteTimelineEventInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetimelineeventinput"></a>
<a id="schema_DeleteTimelineEventInput"></a>
<a id="tocSdeletetimelineeventinput"></a>
<a id="tocsdeletetimelineeventinput"></a>

```json
{
  "eventId": {},
  "incidentRecordArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|incidentRecordArn|object|true|none|none|

<h2 id="tocS_VariableType">VariableType</h2>
<!-- backwards compatibility -->
<a id="schemavariabletype"></a>
<a id="schema_VariableType"></a>
<a id="tocSvariabletype"></a>
<a id="tocsvariabletype"></a>

```json
"INCIDENT_RECORD_ARN"
```

<h2 id="tocS_DynamicSsmParameterValue">DynamicSsmParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemadynamicssmparametervalue"></a>
<a id="schema_DynamicSsmParameterValue"></a>
<a id="tocSdynamicssmparametervalue"></a>
<a id="tocsdynamicssmparametervalue"></a>

```json
{
  "variable": {}
}
```

The dynamic SSM parameter value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variable|object|false|none|none|

<h2 id="tocS_DynamicSsmParameters">DynamicSsmParameters</h2>
<!-- backwards compatibility -->
<a id="schemadynamicssmparameters"></a>
<a id="schema_DynamicSsmParameters"></a>
<a id="tocSdynamicssmparameters"></a>
<a id="tocsdynamicssmparameters"></a>

```json
{
  "property1": {
    "variable": {}
  },
  "property2": {
    "variable": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DynamicSsmParameterValue](#schemadynamicssmparametervalue)|false|none|The dynamic SSM parameter value.|

<h2 id="tocS_DynamicSsmParametersKeyString">DynamicSsmParametersKeyString</h2>
<!-- backwards compatibility -->
<a id="schemadynamicssmparameterskeystring"></a>
<a id="schema_DynamicSsmParametersKeyString"></a>
<a id="tocSdynamicssmparameterskeystring"></a>
<a id="tocsdynamicssmparameterskeystring"></a>

```json
"string"
```

<h2 id="tocS_GeneratedId">GeneratedId</h2>
<!-- backwards compatibility -->
<a id="schemageneratedid"></a>
<a id="schema_GeneratedId"></a>
<a id="tocSgeneratedid"></a>
<a id="tocsgeneratedid"></a>

```json
"string"
```

<h2 id="tocS_EventSummary">EventSummary</h2>
<!-- backwards compatibility -->
<a id="schemaeventsummary"></a>
<a id="schema_EventSummary"></a>
<a id="tocSeventsummary"></a>
<a id="tocseventsummary"></a>

```json
{
  "eventId": {},
  "eventReferences": {},
  "eventTime": {},
  "eventType": {},
  "eventUpdatedTime": {},
  "incidentRecordArn": {}
}
```

Details about a timeline event during an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|eventReferences|object|false|none|none|
|eventTime|object|true|none|none|
|eventType|object|true|none|none|
|eventUpdatedTime|object|true|none|none|
|incidentRecordArn|object|true|none|none|

<h2 id="tocS_EventSummaryList">EventSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaeventsummarylist"></a>
<a id="schema_EventSummaryList"></a>
<a id="tocSeventsummarylist"></a>
<a id="tocseventsummarylist"></a>

```json
[
  {
    "eventId": {},
    "eventReferences": {},
    "eventTime": {},
    "eventType": {},
    "eventUpdatedTime": {},
    "incidentRecordArn": {}
  }
]
```

<h2 id="tocS_FilterKeyString">FilterKeyString</h2>
<!-- backwards compatibility -->
<a id="schemafilterkeystring"></a>
<a id="schema_FilterKeyString"></a>
<a id="tocSfilterkeystring"></a>
<a id="tocsfilterkeystring"></a>

```json
"string"
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
    "condition": {
      "after": {},
      "before": {},
      "equals": {
        "integerValues": {},
        "stringValues": {}
      }
    },
    "key": {}
  }
]
```

<h2 id="tocS_GetIncidentRecordInput">GetIncidentRecordInput</h2>
<!-- backwards compatibility -->
<a id="schemagetincidentrecordinput"></a>
<a id="schema_GetIncidentRecordInput"></a>
<a id="tocSgetincidentrecordinput"></a>
<a id="tocsgetincidentrecordinput"></a>

```json
{}
```

<h2 id="tocS_IncidentRecord">IncidentRecord</h2>
<!-- backwards compatibility -->
<a id="schemaincidentrecord"></a>
<a id="schema_IncidentRecord"></a>
<a id="tocSincidentrecord"></a>
<a id="tocsincidentrecord"></a>

```json
{
  "arn": {},
  "automationExecutions": {},
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "creationTime": {},
  "dedupeString": {},
  "impact": {},
  "incidentRecordSource": {
    "createdBy": {},
    "invokedBy": {},
    "resourceArn": {},
    "source": {}
  },
  "lastModifiedBy": {},
  "lastModifiedTime": {},
  "notificationTargets": {},
  "resolvedTime": {},
  "status": {},
  "summary": {},
  "title": {}
}
```

The record of the incident that's created when an incident occurs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|automationExecutions|object|false|none|none|
|chatChannel|object|false|none|none|
|creationTime|object|true|none|none|
|dedupeString|object|true|none|none|
|impact|object|true|none|none|
|incidentRecordSource|object|true|none|none|
|lastModifiedBy|object|true|none|none|
|lastModifiedTime|object|true|none|none|
|notificationTargets|object|false|none|none|
|resolvedTime|object|false|none|none|
|status|object|true|none|none|
|summary|object|false|none|none|
|title|object|true|none|none|

<h2 id="tocS_GetReplicationSetInput">GetReplicationSetInput</h2>
<!-- backwards compatibility -->
<a id="schemagetreplicationsetinput"></a>
<a id="schema_GetReplicationSetInput"></a>
<a id="tocSgetreplicationsetinput"></a>
<a id="tocsgetreplicationsetinput"></a>

```json
{}
```

<h2 id="tocS_ReplicationSet">ReplicationSet</h2>
<!-- backwards compatibility -->
<a id="schemareplicationset"></a>
<a id="schema_ReplicationSet"></a>
<a id="tocSreplicationset"></a>
<a id="tocsreplicationset"></a>

```json
{
  "arn": {},
  "createdBy": {},
  "createdTime": {},
  "deletionProtected": {},
  "lastModifiedBy": {},
  "lastModifiedTime": {},
  "regionMap": {
    "property1": {
      "sseKmsKeyId": {},
      "status": {},
      "statusMessage": {},
      "statusUpdateDateTime": {}
    },
    "property2": {
      "sseKmsKeyId": {},
      "status": {},
      "statusMessage": {},
      "statusUpdateDateTime": {}
    }
  },
  "status": {}
}
```

The set of Amazon Web Services Region that your Incident Manager data will be replicated to and the KMS key used to encrypt the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdBy|object|true|none|none|
|createdTime|object|true|none|none|
|deletionProtected|object|true|none|none|
|lastModifiedBy|object|true|none|none|
|lastModifiedTime|object|true|none|none|
|regionMap|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

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

<h2 id="tocS_GetResourcePoliciesInput">GetResourcePoliciesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesinput"></a>
<a id="schema_GetResourcePoliciesInput"></a>
<a id="tocSgetresourcepoliciesinput"></a>
<a id="tocsgetresourcepoliciesinput"></a>

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

<h2 id="tocS_ResourcePolicyList">ResourcePolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicylist"></a>
<a id="schema_ResourcePolicyList"></a>
<a id="tocSresourcepolicylist"></a>
<a id="tocsresourcepolicylist"></a>

```json
[
  {
    "policyDocument": {},
    "policyId": {},
    "ramResourceShareRegion": {}
  }
]
```

<h2 id="tocS_GetResponsePlanInput">GetResponsePlanInput</h2>
<!-- backwards compatibility -->
<a id="schemagetresponseplaninput"></a>
<a id="schema_GetResponsePlanInput"></a>
<a id="tocSgetresponseplaninput"></a>
<a id="tocsgetresponseplaninput"></a>

```json
{}
```

<h2 id="tocS_GetTimelineEventInput">GetTimelineEventInput</h2>
<!-- backwards compatibility -->
<a id="schemagettimelineeventinput"></a>
<a id="schema_GetTimelineEventInput"></a>
<a id="tocSgettimelineeventinput"></a>
<a id="tocsgettimelineeventinput"></a>

```json
{}
```

<h2 id="tocS_TimelineEvent">TimelineEvent</h2>
<!-- backwards compatibility -->
<a id="schematimelineevent"></a>
<a id="schema_TimelineEvent"></a>
<a id="tocStimelineevent"></a>
<a id="tocstimelineevent"></a>

```json
{
  "eventData": {},
  "eventId": {},
  "eventReferences": {},
  "eventTime": {},
  "eventType": {},
  "eventUpdatedTime": {},
  "incidentRecordArn": {}
}
```

A significant event that happened during the incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventData|object|true|none|none|
|eventId|object|true|none|none|
|eventReferences|object|false|none|none|
|eventTime|object|true|none|none|
|eventType|object|true|none|none|
|eventUpdatedTime|object|true|none|none|
|incidentRecordArn|object|true|none|none|

<h2 id="tocS_IncidentRecordSource">IncidentRecordSource</h2>
<!-- backwards compatibility -->
<a id="schemaincidentrecordsource"></a>
<a id="schema_IncidentRecordSource"></a>
<a id="tocSincidentrecordsource"></a>
<a id="tocsincidentrecordsource"></a>

```json
{
  "createdBy": {},
  "invokedBy": {},
  "resourceArn": {},
  "source": {}
}
```

Details about what created the incident record and when it was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdBy|object|true|none|none|
|invokedBy|object|false|none|none|
|resourceArn|object|false|none|none|
|source|object|true|none|none|

<h2 id="tocS_IncidentRecordStatus">IncidentRecordStatus</h2>
<!-- backwards compatibility -->
<a id="schemaincidentrecordstatus"></a>
<a id="schema_IncidentRecordStatus"></a>
<a id="tocSincidentrecordstatus"></a>
<a id="tocsincidentrecordstatus"></a>

```json
"OPEN"
```

<h2 id="tocS_ServicePrincipal">ServicePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipal"></a>
<a id="schema_ServicePrincipal"></a>
<a id="tocSserviceprincipal"></a>
<a id="tocsserviceprincipal"></a>

```json
"string"
```

<h2 id="tocS_IncidentRecordSummary">IncidentRecordSummary</h2>
<!-- backwards compatibility -->
<a id="schemaincidentrecordsummary"></a>
<a id="schema_IncidentRecordSummary"></a>
<a id="tocSincidentrecordsummary"></a>
<a id="tocsincidentrecordsummary"></a>

```json
{
  "arn": {},
  "creationTime": {},
  "impact": {},
  "incidentRecordSource": {
    "createdBy": {},
    "invokedBy": {},
    "resourceArn": {},
    "source": {}
  },
  "resolvedTime": {},
  "status": {},
  "title": {}
}
```

Details describing an incident record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|creationTime|object|true|none|none|
|impact|object|true|none|none|
|incidentRecordSource|object|true|none|none|
|resolvedTime|object|false|none|none|
|status|object|true|none|none|
|title|object|true|none|none|

<h2 id="tocS_IncidentRecordSummaryList">IncidentRecordSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaincidentrecordsummarylist"></a>
<a id="schema_IncidentRecordSummaryList"></a>
<a id="tocSincidentrecordsummarylist"></a>
<a id="tocsincidentrecordsummarylist"></a>

```json
[
  {
    "arn": {},
    "creationTime": {},
    "impact": {},
    "incidentRecordSource": {
      "createdBy": {},
      "invokedBy": {},
      "resourceArn": {},
      "source": {}
    },
    "resolvedTime": {},
    "status": {},
    "title": {}
  }
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

<h2 id="tocS_PagerDutyConfiguration">PagerDutyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyconfiguration"></a>
<a id="schema_PagerDutyConfiguration"></a>
<a id="tocSpagerdutyconfiguration"></a>
<a id="tocspagerdutyconfiguration"></a>

```json
{
  "name": {},
  "pagerDutyIncidentConfiguration": {
    "serviceId": {}
  },
  "secretId": {}
}
```

Details about the PagerDuty configuration for a response plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|pagerDutyIncidentConfiguration|object|true|none|none|
|secretId|object|true|none|none|

<h2 id="tocS_ItemType">ItemType</h2>
<!-- backwards compatibility -->
<a id="schemaitemtype"></a>
<a id="schema_ItemType"></a>
<a id="tocSitemtype"></a>
<a id="tocsitemtype"></a>

```json
"ANALYSIS"
```

<h2 id="tocS_ItemValue">ItemValue</h2>
<!-- backwards compatibility -->
<a id="schemaitemvalue"></a>
<a id="schema_ItemValue"></a>
<a id="tocSitemvalue"></a>
<a id="tocsitemvalue"></a>

```json
{
  "arn": {},
  "metricDefinition": {},
  "pagerDutyIncidentDetail": {
    "autoResolve": {},
    "id": {},
    "secretId": {}
  },
  "url": {}
}
```

Describes a related item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|metricDefinition|object|false|none|none|
|pagerDutyIncidentDetail|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_MetricDefinition">MetricDefinition</h2>
<!-- backwards compatibility -->
<a id="schemametricdefinition"></a>
<a id="schema_MetricDefinition"></a>
<a id="tocSmetricdefinition"></a>
<a id="tocsmetricdefinition"></a>

```json
"string"
```

<h2 id="tocS_PagerDutyIncidentDetail">PagerDutyIncidentDetail</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyincidentdetail"></a>
<a id="schema_PagerDutyIncidentDetail"></a>
<a id="tocSpagerdutyincidentdetail"></a>
<a id="tocspagerdutyincidentdetail"></a>

```json
{
  "autoResolve": {},
  "id": {},
  "secretId": {}
}
```

Details about the PagerDuty incident associated with an incident created by an Incident Manager response plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoResolve|object|false|none|none|
|id|object|true|none|none|
|secretId|object|false|none|none|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_ListIncidentRecordsInput">ListIncidentRecordsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistincidentrecordsinput"></a>
<a id="schema_ListIncidentRecordsInput"></a>
<a id="tocSlistincidentrecordsinput"></a>
<a id="tocslistincidentrecordsinput"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRelatedItemsInput">ListRelatedItemsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrelateditemsinput"></a>
<a id="schema_ListRelatedItemsInput"></a>
<a id="tocSlistrelateditemsinput"></a>
<a id="tocslistrelateditemsinput"></a>

```json
{
  "incidentRecordArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incidentRecordArn|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_RelatedItemList">RelatedItemList</h2>
<!-- backwards compatibility -->
<a id="schemarelateditemlist"></a>
<a id="schema_RelatedItemList"></a>
<a id="tocSrelateditemlist"></a>
<a id="tocsrelateditemlist"></a>

```json
[
  {
    "generatedId": {},
    "identifier": {
      "type": {},
      "value": {
        "arn": {},
        "metricDefinition": {},
        "pagerDutyIncidentDetail": {
          "autoResolve": {},
          "id": {},
          "secretId": {}
        },
        "url": {}
      }
    },
    "title": {}
  }
]
```

<h2 id="tocS_ListReplicationSetsInput">ListReplicationSetsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistreplicationsetsinput"></a>
<a id="schema_ListReplicationSetsInput"></a>
<a id="tocSlistreplicationsetsinput"></a>
<a id="tocslistreplicationsetsinput"></a>

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

<h2 id="tocS_ReplicationSetArnList">ReplicationSetArnList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationsetarnlist"></a>
<a id="schema_ReplicationSetArnList"></a>
<a id="tocSreplicationsetarnlist"></a>
<a id="tocsreplicationsetarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListResponsePlansInput">ListResponsePlansInput</h2>
<!-- backwards compatibility -->
<a id="schemalistresponseplansinput"></a>
<a id="schema_ListResponsePlansInput"></a>
<a id="tocSlistresponseplansinput"></a>
<a id="tocslistresponseplansinput"></a>

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

<h2 id="tocS_ResponsePlanSummaryList">ResponsePlanSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseplansummarylist"></a>
<a id="schema_ResponsePlanSummaryList"></a>
<a id="tocSresponseplansummarylist"></a>
<a id="tocsresponseplansummarylist"></a>

```json
[
  {
    "arn": {},
    "displayName": {},
    "name": {}
  }
]
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

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_TimelineEventSort">TimelineEventSort</h2>
<!-- backwards compatibility -->
<a id="schematimelineeventsort"></a>
<a id="schema_TimelineEventSort"></a>
<a id="tocStimelineeventsort"></a>
<a id="tocstimelineeventsort"></a>

```json
"EVENT_TIME"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_ListTimelineEventsInput">ListTimelineEventsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttimelineeventsinput"></a>
<a id="schema_ListTimelineEventsInput"></a>
<a id="tocSlisttimelineeventsinput"></a>
<a id="tocslisttimelineeventsinput"></a>

```json
{
  "filters": {},
  "incidentRecordArn": {},
  "maxResults": {},
  "nextToken": {},
  "sortBy": {},
  "sortOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|incidentRecordArn|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|sortBy|object|false|none|none|
|sortOrder|object|false|none|none|

<h2 id="tocS_PagerDutyConfigurationNameString">PagerDutyConfigurationNameString</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyconfigurationnamestring"></a>
<a id="schema_PagerDutyConfigurationNameString"></a>
<a id="tocSpagerdutyconfigurationnamestring"></a>
<a id="tocspagerdutyconfigurationnamestring"></a>

```json
"string"
```

<h2 id="tocS_PagerDutyIncidentConfiguration">PagerDutyIncidentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyincidentconfiguration"></a>
<a id="schema_PagerDutyIncidentConfiguration"></a>
<a id="tocSpagerdutyincidentconfiguration"></a>
<a id="tocspagerdutyincidentconfiguration"></a>

```json
{
  "serviceId": {}
}
```

Details about the PagerDuty service where the response plan creates an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceId|object|true|none|none|

<h2 id="tocS_PagerDutyConfigurationSecretIdString">PagerDutyConfigurationSecretIdString</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyconfigurationsecretidstring"></a>
<a id="schema_PagerDutyConfigurationSecretIdString"></a>
<a id="tocSpagerdutyconfigurationsecretidstring"></a>
<a id="tocspagerdutyconfigurationsecretidstring"></a>

```json
"string"
```

<h2 id="tocS_PagerDutyIncidentConfigurationServiceIdString">PagerDutyIncidentConfigurationServiceIdString</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyincidentconfigurationserviceidstring"></a>
<a id="schema_PagerDutyIncidentConfigurationServiceIdString"></a>
<a id="tocSpagerdutyincidentconfigurationserviceidstring"></a>
<a id="tocspagerdutyincidentconfigurationserviceidstring"></a>

```json
"string"
```

<h2 id="tocS_PagerDutyIncidentDetailIdString">PagerDutyIncidentDetailIdString</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyincidentdetailidstring"></a>
<a id="schema_PagerDutyIncidentDetailIdString"></a>
<a id="tocSpagerdutyincidentdetailidstring"></a>
<a id="tocspagerdutyincidentdetailidstring"></a>

```json
"string"
```

<h2 id="tocS_PagerDutyIncidentDetailSecretIdString">PagerDutyIncidentDetailSecretIdString</h2>
<!-- backwards compatibility -->
<a id="schemapagerdutyincidentdetailsecretidstring"></a>
<a id="schema_PagerDutyIncidentDetailSecretIdString"></a>
<a id="tocSpagerdutyincidentdetailsecretidstring"></a>
<a id="tocspagerdutyincidentdetailsecretidstring"></a>

```json
"string"
```

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<h2 id="tocS_PutResourcePolicyInput">PutResourcePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyinput"></a>
<a id="schema_PutResourcePolicyInput"></a>
<a id="tocSputresourcepolicyinput"></a>
<a id="tocsputresourcepolicyinput"></a>

```json
{
  "policy": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|true|none|none|
|resourceArn|object|true|none|none|

<h2 id="tocS_RegionStatus">RegionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaregionstatus"></a>
<a id="schema_RegionStatus"></a>
<a id="tocSregionstatus"></a>
<a id="tocsregionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_RegionInfo">RegionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaregioninfo"></a>
<a id="schema_RegionInfo"></a>
<a id="tocSregioninfo"></a>
<a id="tocsregioninfo"></a>

```json
{
  "sseKmsKeyId": {},
  "status": {},
  "statusMessage": {},
  "statusUpdateDateTime": {}
}
```

Information about a Amazon Web Services Region in your replication set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sseKmsKeyId|object|false|none|none|
|status|object|true|none|none|
|statusMessage|object|false|none|none|
|statusUpdateDateTime|object|true|none|none|

<h2 id="tocS_RegionInfoMap">RegionInfoMap</h2>
<!-- backwards compatibility -->
<a id="schemaregioninfomap"></a>
<a id="schema_RegionInfoMap"></a>
<a id="tocSregioninfomap"></a>
<a id="tocsregioninfomap"></a>

```json
{
  "property1": {
    "sseKmsKeyId": {},
    "status": {},
    "statusMessage": {},
    "statusUpdateDateTime": {}
  },
  "property2": {
    "sseKmsKeyId": {},
    "status": {},
    "statusMessage": {},
    "statusUpdateDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RegionInfo](#schemaregioninfo)|false|none|Information about a Amazon Web Services Region in your replication set.|

<h2 id="tocS_RelatedItemTitleString">RelatedItemTitleString</h2>
<!-- backwards compatibility -->
<a id="schemarelateditemtitlestring"></a>
<a id="schema_RelatedItemTitleString"></a>
<a id="tocSrelateditemtitlestring"></a>
<a id="tocsrelateditemtitlestring"></a>

```json
"string"
```

<h2 id="tocS_RelatedItemsUpdate">RelatedItemsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemarelateditemsupdate"></a>
<a id="schema_RelatedItemsUpdate"></a>
<a id="tocSrelateditemsupdate"></a>
<a id="tocsrelateditemsupdate"></a>

```json
{
  "itemToAdd": {
    "generatedId": {},
    "identifier": {
      "type": {},
      "value": {
        "arn": {},
        "metricDefinition": {},
        "pagerDutyIncidentDetail": {
          "autoResolve": {},
          "id": {},
          "secretId": {}
        },
        "url": {}
      }
    },
    "title": {}
  },
  "itemToRemove": {
    "type": {},
    "value": {
      "arn": {},
      "metricDefinition": {},
      "pagerDutyIncidentDetail": {
        "autoResolve": {},
        "id": {},
        "secretId": {}
      },
      "url": {}
    }
  }
}
```

Details about the related item you're adding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemToAdd|object|false|none|none|
|itemToRemove|object|false|none|none|

<h2 id="tocS_ReplicationSetStatus">ReplicationSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationsetstatus"></a>
<a id="schema_ReplicationSetStatus"></a>
<a id="tocSreplicationsetstatus"></a>
<a id="tocsreplicationsetstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ResourcePolicy">ResourcePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicy"></a>
<a id="schema_ResourcePolicy"></a>
<a id="tocSresourcepolicy"></a>
<a id="tocsresourcepolicy"></a>

```json
{
  "policyDocument": {},
  "policyId": {},
  "ramResourceShareRegion": {}
}
```

The resource policy that allows Incident Manager to perform actions on resources on your behalf.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyDocument|object|true|none|none|
|policyId|object|true|none|none|
|ramResourceShareRegion|object|true|none|none|

<h2 id="tocS_ResponsePlanSummary">ResponsePlanSummary</h2>
<!-- backwards compatibility -->
<a id="schemaresponseplansummary"></a>
<a id="schema_ResponsePlanSummary"></a>
<a id="tocSresponseplansummary"></a>
<a id="tocsresponseplansummary"></a>

```json
{
  "arn": {},
  "displayName": {},
  "name": {}
}
```

Details of the response plan that are used when creating an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|displayName|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_SsmAutomationDocumentNameString">SsmAutomationDocumentNameString</h2>
<!-- backwards compatibility -->
<a id="schemassmautomationdocumentnamestring"></a>
<a id="schema_SsmAutomationDocumentNameString"></a>
<a id="tocSssmautomationdocumentnamestring"></a>
<a id="tocsssmautomationdocumentnamestring"></a>

```json
"string"
```

<h2 id="tocS_SsmAutomationDocumentVersionString">SsmAutomationDocumentVersionString</h2>
<!-- backwards compatibility -->
<a id="schemassmautomationdocumentversionstring"></a>
<a id="schema_SsmAutomationDocumentVersionString"></a>
<a id="tocSssmautomationdocumentversionstring"></a>
<a id="tocsssmautomationdocumentversionstring"></a>

```json
"string"
```

<h2 id="tocS_SsmParameters">SsmParameters</h2>
<!-- backwards compatibility -->
<a id="schemassmparameters"></a>
<a id="schema_SsmParameters"></a>
<a id="tocSssmparameters"></a>
<a id="tocsssmparameters"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SsmParameterValues](#schemassmparametervalues)|false|none|none|

<h2 id="tocS_SsmTargetAccount">SsmTargetAccount</h2>
<!-- backwards compatibility -->
<a id="schemassmtargetaccount"></a>
<a id="schema_SsmTargetAccount"></a>
<a id="tocSssmtargetaccount"></a>
<a id="tocsssmtargetaccount"></a>

```json
"RESPONSE_PLAN_OWNER_ACCOUNT"
```

<h2 id="tocS_SsmParameterValuesMemberString">SsmParameterValuesMemberString</h2>
<!-- backwards compatibility -->
<a id="schemassmparametervaluesmemberstring"></a>
<a id="schema_SsmParameterValuesMemberString"></a>
<a id="tocSssmparametervaluesmemberstring"></a>
<a id="tocsssmparametervaluesmemberstring"></a>

```json
"string"
```

<h2 id="tocS_SsmParameterValues">SsmParameterValues</h2>
<!-- backwards compatibility -->
<a id="schemassmparametervalues"></a>
<a id="schema_SsmParameterValues"></a>
<a id="tocSssmparametervalues"></a>
<a id="tocsssmparametervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SsmParametersKeyString">SsmParametersKeyString</h2>
<!-- backwards compatibility -->
<a id="schemassmparameterskeystring"></a>
<a id="schema_SsmParametersKeyString"></a>
<a id="tocSssmparameterskeystring"></a>
<a id="tocsssmparameterskeystring"></a>

```json
"string"
```

<h2 id="tocS_TriggerDetails">TriggerDetails</h2>
<!-- backwards compatibility -->
<a id="schematriggerdetails"></a>
<a id="schema_TriggerDetails"></a>
<a id="tocStriggerdetails"></a>
<a id="tocstriggerdetails"></a>

```json
{
  "rawData": {},
  "source": {},
  "timestamp": {},
  "triggerArn": {}
}
```

Details about what caused the incident to be created in Incident Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawData|object|false|none|none|
|source|object|true|none|none|
|timestamp|object|true|none|none|
|triggerArn|object|false|none|none|

<h2 id="tocS_StartIncidentInput">StartIncidentInput</h2>
<!-- backwards compatibility -->
<a id="schemastartincidentinput"></a>
<a id="schema_StartIncidentInput"></a>
<a id="tocSstartincidentinput"></a>
<a id="tocsstartincidentinput"></a>

```json
{
  "clientToken": {},
  "impact": {},
  "relatedItems": {},
  "responsePlanArn": {},
  "title": {},
  "triggerDetails": {
    "rawData": {},
    "source": {},
    "timestamp": {},
    "triggerArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|impact|object|false|none|none|
|relatedItems|object|false|none|none|
|responsePlanArn|object|true|none|none|
|title|object|false|none|none|
|triggerDetails|object|false|none|none|

<h2 id="tocS_StringListMemberString">StringListMemberString</h2>
<!-- backwards compatibility -->
<a id="schemastringlistmemberstring"></a>
<a id="schema_StringListMemberString"></a>
<a id="tocSstringlistmemberstring"></a>
<a id="tocsstringlistmemberstring"></a>

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

<h2 id="tocS_TagMapUpdate">TagMapUpdate</h2>
<!-- backwards compatibility -->
<a id="schematagmapupdate"></a>
<a id="schema_TagMapUpdate"></a>
<a id="tocStagmapupdate"></a>
<a id="tocstagmapupdate"></a>

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

<h2 id="tocS_UpdateDeletionProtectionInput">UpdateDeletionProtectionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeletionprotectioninput"></a>
<a id="schema_UpdateDeletionProtectionInput"></a>
<a id="tocSupdatedeletionprotectioninput"></a>
<a id="tocsupdatedeletionprotectioninput"></a>

```json
{
  "arn": {},
  "clientToken": {},
  "deletionProtected": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|clientToken|object|false|none|none|
|deletionProtected|object|true|none|none|

<h2 id="tocS_UpdateIncidentRecordInput">UpdateIncidentRecordInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateincidentrecordinput"></a>
<a id="schema_UpdateIncidentRecordInput"></a>
<a id="tocSupdateincidentrecordinput"></a>
<a id="tocsupdateincidentrecordinput"></a>

```json
{
  "arn": {},
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "clientToken": {},
  "impact": {},
  "notificationTargets": {},
  "status": {},
  "summary": {},
  "title": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|chatChannel|object|false|none|none|
|clientToken|object|false|none|none|
|impact|object|false|none|none|
|notificationTargets|object|false|none|none|
|status|object|false|none|none|
|summary|object|false|none|none|
|title|object|false|none|none|

<h2 id="tocS_UpdateRelatedItemsInput">UpdateRelatedItemsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterelateditemsinput"></a>
<a id="schema_UpdateRelatedItemsInput"></a>
<a id="tocSupdaterelateditemsinput"></a>
<a id="tocsupdaterelateditemsinput"></a>

```json
{
  "clientToken": {},
  "incidentRecordArn": {},
  "relatedItemsUpdate": {
    "itemToAdd": {
      "generatedId": {},
      "identifier": {
        "type": {},
        "value": {
          "arn": {},
          "metricDefinition": {},
          "pagerDutyIncidentDetail": {
            "autoResolve": {},
            "id": {},
            "secretId": {}
          },
          "url": {}
        }
      },
      "title": {}
    },
    "itemToRemove": {
      "type": {},
      "value": {
        "arn": {},
        "metricDefinition": {},
        "pagerDutyIncidentDetail": {
          "autoResolve": {},
          "id": {},
          "secretId": {}
        },
        "url": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|incidentRecordArn|object|true|none|none|
|relatedItemsUpdate|object|true|none|none|

<h2 id="tocS_UpdateReplicationSetInputActionsList">UpdateReplicationSetInputActionsList</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationsetinputactionslist"></a>
<a id="schema_UpdateReplicationSetInputActionsList"></a>
<a id="tocSupdatereplicationsetinputactionslist"></a>
<a id="tocsupdatereplicationsetinputactionslist"></a>

```json
[
  {
    "addRegionAction": {
      "regionName": {},
      "sseKmsKeyId": {}
    },
    "deleteRegionAction": {
      "regionName": {}
    }
  }
]
```

<h2 id="tocS_UpdateReplicationSetInput">UpdateReplicationSetInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationsetinput"></a>
<a id="schema_UpdateReplicationSetInput"></a>
<a id="tocSupdatereplicationsetinput"></a>
<a id="tocsupdatereplicationsetinput"></a>

```json
{
  "actions": {},
  "arn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|true|none|none|
|arn|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateResponsePlanInput">UpdateResponsePlanInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresponseplaninput"></a>
<a id="schema_UpdateResponsePlanInput"></a>
<a id="tocSupdateresponseplaninput"></a>
<a id="tocsupdateresponseplaninput"></a>

```json
{
  "actions": {},
  "arn": {},
  "chatChannel": {
    "chatbotSns": {},
    "empty": {}
  },
  "clientToken": {},
  "displayName": {},
  "engagements": {},
  "incidentTemplateDedupeString": {},
  "incidentTemplateImpact": {},
  "incidentTemplateNotificationTargets": {},
  "incidentTemplateSummary": {},
  "incidentTemplateTags": {
    "property1": "string",
    "property2": "string"
  },
  "incidentTemplateTitle": {},
  "integrations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|arn|object|true|none|none|
|chatChannel|object|false|none|none|
|clientToken|object|false|none|none|
|displayName|object|false|none|none|
|engagements|object|false|none|none|
|incidentTemplateDedupeString|object|false|none|none|
|incidentTemplateImpact|object|false|none|none|
|incidentTemplateNotificationTargets|object|false|none|none|
|incidentTemplateSummary|object|false|none|none|
|incidentTemplateTags|object|false|none|none|
|incidentTemplateTitle|object|false|none|none|
|integrations|object|false|none|none|

<h2 id="tocS_UpdateTimelineEventInput">UpdateTimelineEventInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetimelineeventinput"></a>
<a id="schema_UpdateTimelineEventInput"></a>
<a id="tocSupdatetimelineeventinput"></a>
<a id="tocsupdatetimelineeventinput"></a>

```json
{
  "clientToken": {},
  "eventData": {},
  "eventId": {},
  "eventReferences": {},
  "eventTime": {},
  "eventType": {},
  "incidentRecordArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|eventData|object|false|none|none|
|eventId|object|true|none|none|
|eventReferences|object|false|none|none|
|eventTime|object|false|none|none|
|eventType|object|false|none|none|
|incidentRecordArn|object|true|none|none|
