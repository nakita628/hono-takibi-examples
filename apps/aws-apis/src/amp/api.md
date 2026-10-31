<h1 id="amazon-prometheus-service">Amazon Prometheus Service v2020-08-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Managed Service for Prometheus

Base URLs:

* <a href="http://aps.us-east-1.amazonaws.com">http://aps.us-east-1.amazonaws.com</a> - The Amazon Prometheus Service multi-region endpoint

* <a href="https://aps.us-east-1.amazonaws.com">https://aps.us-east-1.amazonaws.com</a> - The Amazon Prometheus Service multi-region endpoint

* <a href="http://aps.cn-north-1.amazonaws.com.cn">http://aps.cn-north-1.amazonaws.com.cn</a> - The Amazon Prometheus Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://aps.cn-north-1.amazonaws.com.cn">https://aps.cn-north-1.amazonaws.com.cn</a> - The Amazon Prometheus Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/aps/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-prometheus-service-default">Default</h1>

## DescribeAlertManagerDefinition

<a id="opIdDescribeAlertManagerDefinition"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/alertmanager/definition \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workspaces/{workspaceId}/alertmanager/definition`

Describes an alert manager definition.

<h3 id="describealertmanagerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace to describe.|
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
  "alertManagerDefinition": {
    "createdAt": {},
    "data": {},
    "modifiedAt": {},
    "status": {
      "statusCode": {},
      "statusReason": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describealertmanagerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlertManagerDefinitionResponse](#schemadescribealertmanagerdefinitionresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAlertManagerDefinition

<a id="opIdPutAlertManagerDefinition"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/alertmanager/definition \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "data": "string"
  }'
```

`PUT /workspaces/{workspaceId}/alertmanager/definition`

Update an alert manager definition.

> Body parameter

```json
{
  "clientToken": "string",
  "data": "string"
}
```

<h3 id="putalertmanagerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace in which to update the alert manager definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|
|» data|body|string|true|The alert manager definition data.|

> Example responses

> 202 Response

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
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

<h3 id="putalertmanagerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[PutAlertManagerDefinitionResponse](#schemaputalertmanagerdefinitionresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlertManagerDefinition

<a id="opIdCreateAlertManagerDefinition"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/alertmanager/definition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "data": "string"
  }'
```

`POST /workspaces/{workspaceId}/alertmanager/definition`

Create an alert manager definition.

> Body parameter

```json
{
  "clientToken": "string",
  "data": "string"
}
```

<h3 id="createalertmanagerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace in which to create the alert manager definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|
|» data|body|string|true|The alert manager definition data.|

> Example responses

> 202 Response

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
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

<h3 id="createalertmanagerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateAlertManagerDefinitionResponse](#schemacreatealertmanagerdefinitionresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlertManagerDefinition

<a id="opIdDeleteAlertManagerDefinition"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/alertmanager/definition \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /workspaces/{workspaceId}/alertmanager/definition`

Deletes an alert manager definition.

<h3 id="deletealertmanagerdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientToken|query|string|false|Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.|
|workspaceId|path|string|true|The ID of the workspace in which to delete the alert manager definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletealertmanagerdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLoggingConfiguration

<a id="opIdDescribeLoggingConfiguration"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/logging \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workspaces/{workspaceId}/logging`

Describes logging configuration.

<h3 id="describeloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace to vend logs to.|
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
  "loggingConfiguration": {
    "createdAt": {},
    "logGroupArn": {},
    "modifiedAt": {},
    "status": {
      "statusCode": {},
      "statusReason": {}
    },
    "workspace": {}
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

<h3 id="describeloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoggingConfigurationResponse](#schemadescribeloggingconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLoggingConfiguration

<a id="opIdUpdateLoggingConfiguration"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/logging \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "logGroupArn": "string"
  }'
```

`PUT /workspaces/{workspaceId}/logging`

Update logging configuration.

> Body parameter

```json
{
  "clientToken": "string",
  "logGroupArn": "string"
}
```

<h3 id="updateloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace to vend logs to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|
|» logGroupArn|body|string|true|The ARN of the CW log group to which the vended log data will be published.|

> Example responses

> 202 Response

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
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

<h3 id="updateloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateLoggingConfigurationResponse](#schemaupdateloggingconfigurationresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLoggingConfiguration

<a id="opIdCreateLoggingConfiguration"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/logging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "logGroupArn": "string"
  }'
```

`POST /workspaces/{workspaceId}/logging`

Create logging configuration.

> Body parameter

```json
{
  "clientToken": "string",
  "logGroupArn": "string"
}
```

<h3 id="createloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace to vend logs to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|
|» logGroupArn|body|string|true|The ARN of the CW log group to which the vended log data will be published.|

> Example responses

> 202 Response

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
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

<h3 id="createloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateLoggingConfigurationResponse](#schemacreateloggingconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLoggingConfiguration

<a id="opIdDeleteLoggingConfiguration"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/logging \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /workspaces/{workspaceId}/logging`

Delete logging configuration.

<h3 id="deleteloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientToken|query|string|false|Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.|
|workspaceId|path|string|true|The ID of the workspace to vend logs to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRuleGroupsNamespaces

<a id="opIdListRuleGroupsNamespaces"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/rulegroupsnamespaces \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workspaces/{workspaceId}/rulegroupsnamespaces`

Lists rule groups namespaces.

<h3 id="listrulegroupsnamespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum results to return in response (default=100, maximum=1000).|
|name|query|string|false|Optional filter for rule groups namespace name. Only the rule groups namespace that begin with this value will be returned.|
|nextToken|query|string|false|Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListRuleGroupsNamespaces request.|
|workspaceId|path|string|true|The ID of the workspace.|
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
  "nextToken": {},
  "ruleGroupsNamespaces": {}
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

<h3 id="listrulegroupsnamespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRuleGroupsNamespacesResponse](#schemalistrulegroupsnamespacesresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRuleGroupsNamespace

<a id="opIdCreateRuleGroupsNamespace"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/rulegroupsnamespaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "data": "string",
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /workspaces/{workspaceId}/rulegroupsnamespaces`

Create a rule group namespace.

> Body parameter

```json
{
  "clientToken": "string",
  "data": "string",
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createrulegroupsnamespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace in which to create the rule group namespace.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|
|» data|body|string|true|The rule groups namespace data.|
|» name|body|string|true|The namespace name that the rule group belong to.|
|» tags|body|object|false|The list of tags assigned to the resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 202 Response

```json
{
  "arn": {},
  "name": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  },
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createrulegroupsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateRuleGroupsNamespaceResponse](#schemacreaterulegroupsnamespaceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkspaces

<a id="opIdListWorkspaces"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workspaces`

Lists all AMP workspaces, including workspaces being created or deleted.

<h3 id="listworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|query|string|false|Optional filter for workspace alias. Only the workspaces with aliases that begin with this value will be returned.|
|maxResults|query|integer|false|Maximum results to return in response (default=100, maximum=1000).|
|nextToken|query|string|false|Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListWorkspaces request.|
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
  "nextToken": {},
  "workspaces": {}
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

<h3 id="listworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkspacesResponse](#schemalistworkspacesresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkspace

<a id="opIdCreateWorkspace"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "alias": "string",
    "clientToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /workspaces`

Creates a new AMP workspace.

> Body parameter

```json
{
  "alias": "string",
  "clientToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createworkspace-parameters">Parameters</h3>

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
|» alias|body|string|false|A user-assigned workspace alias.|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|
|» tags|body|object|false|The list of tags assigned to the resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 202 Response

```json
{
  "arn": {},
  "status": {
    "statusCode": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workspaceId": {}
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

<h3 id="createworkspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateWorkspaceResponse](#schemacreateworkspaceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRuleGroupsNamespace

<a id="opIdDescribeRuleGroupsNamespace"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/rulegroupsnamespaces/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workspaces/{workspaceId}/rulegroupsnamespaces/{name}`

Describe a rule groups namespace.

<h3 id="describerulegroupsnamespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The rule groups namespace.|
|workspaceId|path|string|true|The ID of the workspace to describe.|
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
  "ruleGroupsNamespace": {
    "arn": {},
    "createdAt": {},
    "data": {},
    "modifiedAt": {},
    "name": {},
    "status": {
      "statusCode": {},
      "statusReason": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describerulegroupsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRuleGroupsNamespaceResponse](#schemadescriberulegroupsnamespaceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRuleGroupsNamespace

<a id="opIdPutRuleGroupsNamespace"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/rulegroupsnamespaces/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "data": "string"
  }'
```

`PUT /workspaces/{workspaceId}/rulegroupsnamespaces/{name}`

Update a rule groups namespace.

> Body parameter

```json
{
  "clientToken": "string",
  "data": "string"
}
```

<h3 id="putrulegroupsnamespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The rule groups namespace name.|
|workspaceId|path|string|true|The ID of the workspace in which to update the rule group namespace.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|
|» data|body|string|true|The rule groups namespace data.|

> Example responses

> 202 Response

```json
{
  "arn": {},
  "name": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  },
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="putrulegroupsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[PutRuleGroupsNamespaceResponse](#schemaputrulegroupsnamespaceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRuleGroupsNamespace

<a id="opIdDeleteRuleGroupsNamespace"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/rulegroupsnamespaces/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /workspaces/{workspaceId}/rulegroupsnamespaces/{name}`

Delete a rule groups namespace.

<h3 id="deleterulegroupsnamespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientToken|query|string|false|Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.|
|name|path|string|true|The rule groups namespace name.|
|workspaceId|path|string|true|The ID of the workspace to delete rule group definition.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleterulegroupsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspace

<a id="opIdDescribeWorkspace"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workspaces/{workspaceId}`

Describes an existing AMP workspace.

<h3 id="describeworkspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace to describe.|
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
  "workspace": {
    "alias": {},
    "arn": {},
    "createdAt": {},
    "prometheusEndpoint": {},
    "status": {
      "statusCode": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workspaceId": {}
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

<h3 id="describeworkspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspaceResponse](#schemadescribeworkspaceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkspace

<a id="opIdDeleteWorkspace"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /workspaces/{workspaceId}`

Deletes an AMP workspace.

<h3 id="deleteworkspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientToken|query|string|false|Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.|
|workspaceId|path|string|true|The ID of the workspace to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteworkspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags you have assigned to the resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource.|
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
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/tags/string \
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

Creates tags for the specified resource.

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
|resourceArn|path|string|true|The ARN of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The list of tags assigned to the resource.|
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
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://amp.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Deletes tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|One or more tag keys|
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWorkspaceAlias

<a id="opIdUpdateWorkspaceAlias"></a>

> Code samples

```bash
curl https://amp.us-east-1.amazonaws.com/workspaces/string/alias \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "alias": "string",
    "clientToken": "string"
  }'
```

`POST /workspaces/{workspaceId}/alias`

Updates an AMP workspace alias.

> Body parameter

```json
{
  "alias": "string",
  "clientToken": "string"
}
```

<h3 id="updateworkspacealias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|path|string|true|The ID of the workspace being updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» alias|body|string|false|A user-assigned workspace alias.|
|» clientToken|body|string|false|An identifier used to ensure the idempotency of a write request.|

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

> 486 Response

```json
null
```

<h3 id="updateworkspacealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAlertManagerDefinitionResponse">CreateAlertManagerDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatealertmanagerdefinitionresponse"></a>
<a id="schema_CreateAlertManagerDefinitionResponse"></a>
<a id="tocScreatealertmanagerdefinitionresponse"></a>
<a id="tocscreatealertmanagerdefinitionresponse"></a>

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
  }
}
```

Represents the output of a CreateAlertManagerDefinition operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateLoggingConfigurationResponse">CreateLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateloggingconfigurationresponse"></a>
<a id="schema_CreateLoggingConfigurationResponse"></a>
<a id="tocScreateloggingconfigurationresponse"></a>
<a id="tocscreateloggingconfigurationresponse"></a>

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
  }
}
```

Represents the output of a CreateLoggingConfiguration operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_CreateRuleGroupsNamespaceResponse">CreateRuleGroupsNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegroupsnamespaceresponse"></a>
<a id="schema_CreateRuleGroupsNamespaceResponse"></a>
<a id="tocScreaterulegroupsnamespaceresponse"></a>
<a id="tocscreaterulegroupsnamespaceresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the output of a CreateRuleGroupsNamespace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateWorkspaceResponse">CreateWorkspaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspaceresponse"></a>
<a id="schema_CreateWorkspaceResponse"></a>
<a id="tocScreateworkspaceresponse"></a>
<a id="tocscreateworkspaceresponse"></a>

```json
{
  "arn": {},
  "status": {
    "statusCode": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workspaceId": {}
}
```

Represents the output of a CreateWorkspace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|
|workspaceId|object|true|none|none|

<h2 id="tocS_DescribeAlertManagerDefinitionResponse">DescribeAlertManagerDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribealertmanagerdefinitionresponse"></a>
<a id="schema_DescribeAlertManagerDefinitionResponse"></a>
<a id="tocSdescribealertmanagerdefinitionresponse"></a>
<a id="tocsdescribealertmanagerdefinitionresponse"></a>

```json
{
  "alertManagerDefinition": {
    "createdAt": {},
    "data": {},
    "modifiedAt": {},
    "status": {
      "statusCode": {},
      "statusReason": {}
    }
  }
}
```

Represents the output of a DescribeAlertManagerDefinition operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertManagerDefinition|object|true|none|none|

<h2 id="tocS_DescribeLoggingConfigurationResponse">DescribeLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingconfigurationresponse"></a>
<a id="schema_DescribeLoggingConfigurationResponse"></a>
<a id="tocSdescribeloggingconfigurationresponse"></a>
<a id="tocsdescribeloggingconfigurationresponse"></a>

```json
{
  "loggingConfiguration": {
    "createdAt": {},
    "logGroupArn": {},
    "modifiedAt": {},
    "status": {
      "statusCode": {},
      "statusReason": {}
    },
    "workspace": {}
  }
}
```

Represents the output of a DescribeLoggingConfiguration operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loggingConfiguration|object|true|none|none|

<h2 id="tocS_DescribeRuleGroupsNamespaceResponse">DescribeRuleGroupsNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulegroupsnamespaceresponse"></a>
<a id="schema_DescribeRuleGroupsNamespaceResponse"></a>
<a id="tocSdescriberulegroupsnamespaceresponse"></a>
<a id="tocsdescriberulegroupsnamespaceresponse"></a>

```json
{
  "ruleGroupsNamespace": {
    "arn": {},
    "createdAt": {},
    "data": {},
    "modifiedAt": {},
    "name": {},
    "status": {
      "statusCode": {},
      "statusReason": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Represents the output of a DescribeRuleGroupsNamespace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleGroupsNamespace|object|true|none|none|

<h2 id="tocS_DescribeWorkspaceResponse">DescribeWorkspaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspaceresponse"></a>
<a id="schema_DescribeWorkspaceResponse"></a>
<a id="tocSdescribeworkspaceresponse"></a>
<a id="tocsdescribeworkspaceresponse"></a>

```json
{
  "workspace": {
    "alias": {},
    "arn": {},
    "createdAt": {},
    "prometheusEndpoint": {},
    "status": {
      "statusCode": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workspaceId": {}
  }
}
```

Represents the output of a DescribeWorkspace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspace|object|true|none|none|

<h2 id="tocS_ListRuleGroupsNamespacesResponse">ListRuleGroupsNamespacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsnamespacesresponse"></a>
<a id="schema_ListRuleGroupsNamespacesResponse"></a>
<a id="tocSlistrulegroupsnamespacesresponse"></a>
<a id="tocslistrulegroupsnamespacesresponse"></a>

```json
{
  "nextToken": {},
  "ruleGroupsNamespaces": {}
}
```

Represents the output of a ListRuleGroupsNamespaces operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|ruleGroupsNamespaces|object|true|none|none|

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
|tags|[TagMap](#schematagmap)|false|none|The list of tags assigned to the resource.|

<h2 id="tocS_ListWorkspacesResponse">ListWorkspacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkspacesresponse"></a>
<a id="schema_ListWorkspacesResponse"></a>
<a id="tocSlistworkspacesresponse"></a>
<a id="tocslistworkspacesresponse"></a>

```json
{
  "nextToken": {},
  "workspaces": {}
}
```

Represents the output of a ListWorkspaces operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|workspaces|object|true|none|none|

<h2 id="tocS_PutAlertManagerDefinitionResponse">PutAlertManagerDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputalertmanagerdefinitionresponse"></a>
<a id="schema_PutAlertManagerDefinitionResponse"></a>
<a id="tocSputalertmanagerdefinitionresponse"></a>
<a id="tocsputalertmanagerdefinitionresponse"></a>

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
  }
}
```

Represents the output of a PutAlertManagerDefinition operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_PutRuleGroupsNamespaceResponse">PutRuleGroupsNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputrulegroupsnamespaceresponse"></a>
<a id="schema_PutRuleGroupsNamespaceResponse"></a>
<a id="tocSputrulegroupsnamespaceresponse"></a>
<a id="tocsputrulegroupsnamespaceresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the output of a PutRuleGroupsNamespace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|name|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|

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

<h2 id="tocS_UpdateLoggingConfigurationResponse">UpdateLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloggingconfigurationresponse"></a>
<a id="schema_UpdateLoggingConfigurationResponse"></a>
<a id="tocSupdateloggingconfigurationresponse"></a>
<a id="tocsupdateloggingconfigurationresponse"></a>

```json
{
  "status": {
    "statusCode": {},
    "statusReason": {}
  }
}
```

Represents the output of an UpdateLoggingConfiguration operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_AlertManagerDefinitionData">AlertManagerDefinitionData</h2>
<!-- backwards compatibility -->
<a id="schemaalertmanagerdefinitiondata"></a>
<a id="schema_AlertManagerDefinitionData"></a>
<a id="tocSalertmanagerdefinitiondata"></a>
<a id="tocsalertmanagerdefinitiondata"></a>

```json
"string"
```

The alert manager definition data.

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AlertManagerDefinitionStatus">AlertManagerDefinitionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaalertmanagerdefinitionstatus"></a>
<a id="schema_AlertManagerDefinitionStatus"></a>
<a id="tocSalertmanagerdefinitionstatus"></a>
<a id="tocsalertmanagerdefinitionstatus"></a>

```json
{
  "statusCode": {},
  "statusReason": {}
}
```

Represents the status of a definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|true|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_AlertManagerDefinitionDescription">AlertManagerDefinitionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaalertmanagerdefinitiondescription"></a>
<a id="schema_AlertManagerDefinitionDescription"></a>
<a id="tocSalertmanagerdefinitiondescription"></a>
<a id="tocsalertmanagerdefinitiondescription"></a>

```json
{
  "createdAt": {},
  "data": {},
  "modifiedAt": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  }
}
```

Represents the properties of an alert manager definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|true|none|none|
|data|object|true|none|none|
|modifiedAt|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_AlertManagerDefinitionStatusCode">AlertManagerDefinitionStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaalertmanagerdefinitionstatuscode"></a>
<a id="schema_AlertManagerDefinitionStatusCode"></a>
<a id="tocSalertmanagerdefinitionstatuscode"></a>
<a id="tocsalertmanagerdefinitionstatuscode"></a>

```json
"CREATING"
```

State of an alert manager definition.

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"string"
```

An identifier used to ensure the idempotency of a write request.

<h2 id="tocS_WorkspaceId">WorkspaceId</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceid"></a>
<a id="schema_WorkspaceId"></a>
<a id="tocSworkspaceid"></a>
<a id="tocsworkspaceid"></a>

```json
"string"
```

A workspace ID.

<h2 id="tocS_CreateAlertManagerDefinitionRequest">CreateAlertManagerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealertmanagerdefinitionrequest"></a>
<a id="schema_CreateAlertManagerDefinitionRequest"></a>
<a id="tocScreatealertmanagerdefinitionrequest"></a>
<a id="tocscreatealertmanagerdefinitionrequest"></a>

```json
{
  "clientToken": {},
  "data": {}
}
```

Represents the input of a CreateAlertManagerDefinition operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|data|object|true|none|none|

<h2 id="tocS_LogGroupArn">LogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaloggrouparn"></a>
<a id="schema_LogGroupArn"></a>
<a id="tocSloggrouparn"></a>
<a id="tocsloggrouparn"></a>

```json
"string"
```

<h2 id="tocS_CreateLoggingConfigurationRequest">CreateLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateloggingconfigurationrequest"></a>
<a id="schema_CreateLoggingConfigurationRequest"></a>
<a id="tocScreateloggingconfigurationrequest"></a>
<a id="tocscreateloggingconfigurationrequest"></a>

```json
{
  "clientToken": {},
  "logGroupArn": {}
}
```

Represents the input of a CreateLoggingConfiguration operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|logGroupArn|object|true|none|none|

<h2 id="tocS_LoggingConfigurationStatus">LoggingConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfigurationstatus"></a>
<a id="schema_LoggingConfigurationStatus"></a>
<a id="tocSloggingconfigurationstatus"></a>
<a id="tocsloggingconfigurationstatus"></a>

```json
{
  "statusCode": {},
  "statusReason": {}
}
```

Represents the status of a logging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|true|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_RuleGroupsNamespaceData">RuleGroupsNamespaceData</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacedata"></a>
<a id="schema_RuleGroupsNamespaceData"></a>
<a id="tocSrulegroupsnamespacedata"></a>
<a id="tocsrulegroupsnamespacedata"></a>

```json
"string"
```

The rule groups namespace data.

<h2 id="tocS_RuleGroupsNamespaceName">RuleGroupsNamespaceName</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacename"></a>
<a id="schema_RuleGroupsNamespaceName"></a>
<a id="tocSrulegroupsnamespacename"></a>
<a id="tocsrulegroupsnamespacename"></a>

```json
"string"
```

The namespace name that the rule group belong to.

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

The list of tags assigned to the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateRuleGroupsNamespaceRequest">CreateRuleGroupsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegroupsnamespacerequest"></a>
<a id="schema_CreateRuleGroupsNamespaceRequest"></a>
<a id="tocScreaterulegroupsnamespacerequest"></a>
<a id="tocscreaterulegroupsnamespacerequest"></a>

```json
{
  "clientToken": {},
  "data": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the input of a CreateRuleGroupsNamespace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|data|object|true|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RuleGroupsNamespaceArn">RuleGroupsNamespaceArn</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacearn"></a>
<a id="schema_RuleGroupsNamespaceArn"></a>
<a id="tocSrulegroupsnamespacearn"></a>
<a id="tocsrulegroupsnamespacearn"></a>

```json
"string"
```

An ARN identifying a rule groups namespace.

<h2 id="tocS_RuleGroupsNamespaceStatus">RuleGroupsNamespaceStatus</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacestatus"></a>
<a id="schema_RuleGroupsNamespaceStatus"></a>
<a id="tocSrulegroupsnamespacestatus"></a>
<a id="tocsrulegroupsnamespacestatus"></a>

```json
{
  "statusCode": {},
  "statusReason": {}
}
```

Represents the status of a namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|true|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_WorkspaceAlias">WorkspaceAlias</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacealias"></a>
<a id="schema_WorkspaceAlias"></a>
<a id="tocSworkspacealias"></a>
<a id="tocsworkspacealias"></a>

```json
"string"
```

A user-assigned workspace alias.

<h2 id="tocS_CreateWorkspaceRequest">CreateWorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspacerequest"></a>
<a id="schema_CreateWorkspaceRequest"></a>
<a id="tocScreateworkspacerequest"></a>
<a id="tocscreateworkspacerequest"></a>

```json
{
  "alias": {},
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the input of a CreateWorkspace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|object|false|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_WorkspaceArn">WorkspaceArn</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacearn"></a>
<a id="schema_WorkspaceArn"></a>
<a id="tocSworkspacearn"></a>
<a id="tocsworkspacearn"></a>

```json
"string"
```

An ARN identifying a Workspace.

<h2 id="tocS_WorkspaceStatus">WorkspaceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacestatus"></a>
<a id="schema_WorkspaceStatus"></a>
<a id="tocSworkspacestatus"></a>
<a id="tocsworkspacestatus"></a>

```json
{
  "statusCode": {}
}
```

Represents the status of a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|true|none|none|

<h2 id="tocS_DeleteAlertManagerDefinitionRequest">DeleteAlertManagerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealertmanagerdefinitionrequest"></a>
<a id="schema_DeleteAlertManagerDefinitionRequest"></a>
<a id="tocSdeletealertmanagerdefinitionrequest"></a>
<a id="tocsdeletealertmanagerdefinitionrequest"></a>

```json
{}
```

Represents the input of a DeleteAlertManagerDefinition operation.

<h2 id="tocS_DeleteLoggingConfigurationRequest">DeleteLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggingconfigurationrequest"></a>
<a id="schema_DeleteLoggingConfigurationRequest"></a>
<a id="tocSdeleteloggingconfigurationrequest"></a>
<a id="tocsdeleteloggingconfigurationrequest"></a>

```json
{}
```

Represents the input of a DeleteLoggingConfiguration operation.

<h2 id="tocS_DeleteRuleGroupsNamespaceRequest">DeleteRuleGroupsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulegroupsnamespacerequest"></a>
<a id="schema_DeleteRuleGroupsNamespaceRequest"></a>
<a id="tocSdeleterulegroupsnamespacerequest"></a>
<a id="tocsdeleterulegroupsnamespacerequest"></a>

```json
{}
```

Represents the input of a DeleteRuleGroupsNamespace operation.

<h2 id="tocS_DeleteWorkspaceRequest">DeleteWorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkspacerequest"></a>
<a id="schema_DeleteWorkspaceRequest"></a>
<a id="tocSdeleteworkspacerequest"></a>
<a id="tocsdeleteworkspacerequest"></a>

```json
{}
```

Represents the input of a DeleteWorkspace operation.

<h2 id="tocS_DescribeAlertManagerDefinitionRequest">DescribeAlertManagerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribealertmanagerdefinitionrequest"></a>
<a id="schema_DescribeAlertManagerDefinitionRequest"></a>
<a id="tocSdescribealertmanagerdefinitionrequest"></a>
<a id="tocsdescribealertmanagerdefinitionrequest"></a>

```json
{}
```

Represents the input of a DescribeAlertManagerDefinition operation.

<h2 id="tocS_DescribeLoggingConfigurationRequest">DescribeLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingconfigurationrequest"></a>
<a id="schema_DescribeLoggingConfigurationRequest"></a>
<a id="tocSdescribeloggingconfigurationrequest"></a>
<a id="tocsdescribeloggingconfigurationrequest"></a>

```json
{}
```

Represents the input of a DescribeLoggingConfiguration operation.

<h2 id="tocS_LoggingConfigurationMetadata">LoggingConfigurationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfigurationmetadata"></a>
<a id="schema_LoggingConfigurationMetadata"></a>
<a id="tocSloggingconfigurationmetadata"></a>
<a id="tocsloggingconfigurationmetadata"></a>

```json
{
  "createdAt": {},
  "logGroupArn": {},
  "modifiedAt": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  },
  "workspace": {}
}
```

Represents the properties of a logging configuration metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|true|none|none|
|logGroupArn|object|true|none|none|
|modifiedAt|object|true|none|none|
|status|object|true|none|none|
|workspace|object|true|none|none|

<h2 id="tocS_DescribeRuleGroupsNamespaceRequest">DescribeRuleGroupsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulegroupsnamespacerequest"></a>
<a id="schema_DescribeRuleGroupsNamespaceRequest"></a>
<a id="tocSdescriberulegroupsnamespacerequest"></a>
<a id="tocsdescriberulegroupsnamespacerequest"></a>

```json
{}
```

Represents the input of a DescribeRuleGroupsNamespace operation.

<h2 id="tocS_RuleGroupsNamespaceDescription">RuleGroupsNamespaceDescription</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacedescription"></a>
<a id="schema_RuleGroupsNamespaceDescription"></a>
<a id="tocSrulegroupsnamespacedescription"></a>
<a id="tocsrulegroupsnamespacedescription"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "data": {},
  "modifiedAt": {},
  "name": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a description of the rule groups namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|data|object|true|none|none|
|modifiedAt|object|true|none|none|
|name|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceRequest">DescribeWorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacerequest"></a>
<a id="schema_DescribeWorkspaceRequest"></a>
<a id="tocSdescribeworkspacerequest"></a>
<a id="tocsdescribeworkspacerequest"></a>

```json
{}
```

Represents the input of a DescribeWorkspace operation.

<h2 id="tocS_WorkspaceDescription">WorkspaceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacedescription"></a>
<a id="schema_WorkspaceDescription"></a>
<a id="tocSworkspacedescription"></a>
<a id="tocsworkspacedescription"></a>

```json
{
  "alias": {},
  "arn": {},
  "createdAt": {},
  "prometheusEndpoint": {},
  "status": {
    "statusCode": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workspaceId": {}
}
```

Represents the properties of a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|object|false|none|none|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|prometheusEndpoint|object|false|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|
|workspaceId|object|true|none|none|

<h2 id="tocS_ListRuleGroupsNamespacesRequestMaxResultsInteger">ListRuleGroupsNamespacesRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsnamespacesrequestmaxresultsinteger"></a>
<a id="schema_ListRuleGroupsNamespacesRequestMaxResultsInteger"></a>
<a id="tocSlistrulegroupsnamespacesrequestmaxresultsinteger"></a>
<a id="tocslistrulegroupsnamespacesrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

A token used to access the next page in a paginated result set.

<h2 id="tocS_ListRuleGroupsNamespacesRequest">ListRuleGroupsNamespacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsnamespacesrequest"></a>
<a id="schema_ListRuleGroupsNamespacesRequest"></a>
<a id="tocSlistrulegroupsnamespacesrequest"></a>
<a id="tocslistrulegroupsnamespacesrequest"></a>

```json
{}
```

Represents the input of a ListRuleGroupsNamespaces operation.

<h2 id="tocS_RuleGroupsNamespaceSummaryList">RuleGroupsNamespaceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacesummarylist"></a>
<a id="schema_RuleGroupsNamespaceSummaryList"></a>
<a id="tocSrulegroupsnamespacesummarylist"></a>
<a id="tocsrulegroupsnamespacesummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "modifiedAt": {},
    "name": {},
    "status": {
      "statusCode": {},
      "statusReason": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

A list of rule groups namespace summary.

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListWorkspacesRequestMaxResultsInteger">ListWorkspacesRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistworkspacesrequestmaxresultsinteger"></a>
<a id="schema_ListWorkspacesRequestMaxResultsInteger"></a>
<a id="tocSlistworkspacesrequestmaxresultsinteger"></a>
<a id="tocslistworkspacesrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListWorkspacesRequest">ListWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworkspacesrequest"></a>
<a id="schema_ListWorkspacesRequest"></a>
<a id="tocSlistworkspacesrequest"></a>
<a id="tocslistworkspacesrequest"></a>

```json
{}
```

Represents the input of a ListWorkspaces operation.

<h2 id="tocS_WorkspaceSummaryList">WorkspaceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacesummarylist"></a>
<a id="schema_WorkspaceSummaryList"></a>
<a id="tocSworkspacesummarylist"></a>
<a id="tocsworkspacesummarylist"></a>

```json
[
  {
    "alias": {},
    "arn": {},
    "createdAt": {},
    "status": {
      "statusCode": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workspaceId": {}
  }
]
```

A list of workspace summaries.

<h2 id="tocS_LoggingConfigurationStatusCode">LoggingConfigurationStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfigurationstatuscode"></a>
<a id="schema_LoggingConfigurationStatusCode"></a>
<a id="tocSloggingconfigurationstatuscode"></a>
<a id="tocsloggingconfigurationstatuscode"></a>

```json
"CREATING"
```

State of a logging configuration.

<h2 id="tocS_PutAlertManagerDefinitionRequest">PutAlertManagerDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputalertmanagerdefinitionrequest"></a>
<a id="schema_PutAlertManagerDefinitionRequest"></a>
<a id="tocSputalertmanagerdefinitionrequest"></a>
<a id="tocsputalertmanagerdefinitionrequest"></a>

```json
{
  "clientToken": {},
  "data": {}
}
```

Represents the input of a PutAlertManagerDefinition operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|data|object|true|none|none|

<h2 id="tocS_PutRuleGroupsNamespaceRequest">PutRuleGroupsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrulegroupsnamespacerequest"></a>
<a id="schema_PutRuleGroupsNamespaceRequest"></a>
<a id="tocSputrulegroupsnamespacerequest"></a>
<a id="tocsputrulegroupsnamespacerequest"></a>

```json
{
  "clientToken": {},
  "data": {}
}
```

Represents the input of a PutRuleGroupsNamespace operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|data|object|true|none|none|

<h2 id="tocS_RuleGroupsNamespaceStatusCode">RuleGroupsNamespaceStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacestatuscode"></a>
<a id="schema_RuleGroupsNamespaceStatusCode"></a>
<a id="tocSrulegroupsnamespacestatuscode"></a>
<a id="tocsrulegroupsnamespacestatuscode"></a>

```json
"CREATING"
```

State of a namespace.

<h2 id="tocS_RuleGroupsNamespaceSummary">RuleGroupsNamespaceSummary</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsnamespacesummary"></a>
<a id="schema_RuleGroupsNamespaceSummary"></a>
<a id="tocSrulegroupsnamespacesummary"></a>
<a id="tocsrulegroupsnamespacesummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "modifiedAt": {},
  "name": {},
  "status": {
    "statusCode": {},
    "statusReason": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a summary of the rule groups namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|modifiedAt|object|true|none|none|
|name|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

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
|tags|[TagMap](#schematagmap)|true|none|The list of tags assigned to the resource.|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateLoggingConfigurationRequest">UpdateLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloggingconfigurationrequest"></a>
<a id="schema_UpdateLoggingConfigurationRequest"></a>
<a id="tocSupdateloggingconfigurationrequest"></a>
<a id="tocsupdateloggingconfigurationrequest"></a>

```json
{
  "clientToken": {},
  "logGroupArn": {}
}
```

Represents the input of an UpdateLoggingConfiguration operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|logGroupArn|object|true|none|none|

<h2 id="tocS_UpdateWorkspaceAliasRequest">UpdateWorkspaceAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkspacealiasrequest"></a>
<a id="schema_UpdateWorkspaceAliasRequest"></a>
<a id="tocSupdateworkspacealiasrequest"></a>
<a id="tocsupdateworkspacealiasrequest"></a>

```json
{
  "alias": {},
  "clientToken": {}
}
```

Represents the input of an UpdateWorkspaceAlias operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_Uri">Uri</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_Uri"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_WorkspaceStatusCode">WorkspaceStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacestatuscode"></a>
<a id="schema_WorkspaceStatusCode"></a>
<a id="tocSworkspacestatuscode"></a>
<a id="tocsworkspacestatuscode"></a>

```json
"CREATING"
```

State of a workspace.

<h2 id="tocS_WorkspaceSummary">WorkspaceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacesummary"></a>
<a id="schema_WorkspaceSummary"></a>
<a id="tocSworkspacesummary"></a>
<a id="tocsworkspacesummary"></a>

```json
{
  "alias": {},
  "arn": {},
  "createdAt": {},
  "status": {
    "statusCode": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workspaceId": {}
}
```

Represents a summary of the properties of a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|object|false|none|none|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|
|workspaceId|object|true|none|none|
