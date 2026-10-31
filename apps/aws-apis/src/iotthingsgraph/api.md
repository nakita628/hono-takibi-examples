<h1 id="aws-iot-things-graph">AWS IoT Things Graph v2018-09-06</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS IoT Things Graph</fullname> <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards, such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services and defining how they interact at an abstract level.</p> <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p> <p>The AWS IoT Things Graph service is discontinued.</p>

Base URLs:

* <a href="http://iotthingsgraph.us-east-1.amazonaws.com">http://iotthingsgraph.us-east-1.amazonaws.com</a> - The AWS IoT Things Graph multi-region endpoint

* <a href="https://iotthingsgraph.us-east-1.amazonaws.com">https://iotthingsgraph.us-east-1.amazonaws.com</a> - The AWS IoT Things Graph multi-region endpoint

* <a href="http://iotthingsgraph.cn-north-1.amazonaws.com.cn">http://iotthingsgraph.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Things Graph endpoint for China (Beijing) and China (Ningxia)

* <a href="https://iotthingsgraph.cn-north-1.amazonaws.com.cn">https://iotthingsgraph.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Things Graph endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iotthingsgraph/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-things-graph-default">Default</h1>

## AssociateEntityToThing

<a id="opIdAssociateEntityToThing"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.AssociateEntityToThing' \
  -d '{
    "thingName": {},
    "entityId": {},
    "namespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing`

<aside class="warning">
This operation is deprecated
</aside>

<p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>

> Body parameter

```json
{
  "thingName": {},
  "entityId": {},
  "namespaceVersion": {}
}
```

<h3 id="associateentitytothing-parameters">Parameters</h3>

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
|body|body|[AssociateEntityToThingRequest](#schemaassociateentitytothingrequest)|true|none|
|» thingName|body|object|true|none|
|» entityId|body|object|true|none|
|» namespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.AssociateEntityToThing|

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

<h3 id="associateentitytothing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateEntityToThingResponse](#schemaassociateentitytothingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFlowTemplate

<a id="opIdCreateFlowTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.CreateFlowTemplate' \
  -d '{
    "definition": {
      "language": {},
      "text": {}
    },
    "compatibleNamespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> Body parameter

```json
{
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

<h3 id="createflowtemplate-parameters">Parameters</h3>

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
|body|body|[CreateFlowTemplateRequest](#schemacreateflowtemplaterequest)|true|none|
|» definition|body|object|true|none|
|» » language|body|object|true|none|
|» » text|body|object|true|none|
|» compatibleNamespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.CreateFlowTemplate|

> Example responses

> 200 Response

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
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

<h3 id="createflowtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFlowTemplateResponse](#schemacreateflowtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSystemInstance

<a id="opIdCreateSystemInstance"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.CreateSystemInstance' \
  -d '{
    "tags": {},
    "definition": {
      "language": {},
      "text": {}
    },
    "target": {},
    "greengrassGroupName": {},
    "s3BucketName": {},
    "metricsConfiguration": {
      "cloudMetricEnabled": {},
      "metricRuleRoleArn": {}
    },
    "flowActionsRoleArn": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance`

<aside class="warning">
This operation is deprecated
</aside>

<p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>

> Body parameter

```json
{
  "tags": {},
  "definition": {
    "language": {},
    "text": {}
  },
  "target": {},
  "greengrassGroupName": {},
  "s3BucketName": {},
  "metricsConfiguration": {
    "cloudMetricEnabled": {},
    "metricRuleRoleArn": {}
  },
  "flowActionsRoleArn": {}
}
```

<h3 id="createsysteminstance-parameters">Parameters</h3>

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
|body|body|[CreateSystemInstanceRequest](#schemacreatesysteminstancerequest)|true|none|
|» tags|body|object|false|none|
|» definition|body|[DefinitionDocument](#schemadefinitiondocument)|true|A document that defines an entity. |
|» target|body|object|true|none|
|» greengrassGroupName|body|object|false|none|
|» s3BucketName|body|object|false|none|
|» metricsConfiguration|body|[MetricsConfiguration](#schemametricsconfiguration)|false|An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.|
|» flowActionsRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.CreateSystemInstance|

> Example responses

> 200 Response

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
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

<h3 id="createsysteminstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSystemInstanceResponse](#schemacreatesysteminstanceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSystemTemplate

<a id="opIdCreateSystemTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.CreateSystemTemplate' \
  -d '{
    "definition": {
      "language": {},
      "text": {}
    },
    "compatibleNamespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> Body parameter

```json
{
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

<h3 id="createsystemtemplate-parameters">Parameters</h3>

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
|body|body|[CreateSystemTemplateRequest](#schemacreatesystemtemplaterequest)|true|none|
|» definition|body|object|true|none|
|» » language|body|object|true|none|
|» » text|body|object|true|none|
|» compatibleNamespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.CreateSystemTemplate|

> Example responses

> 200 Response

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
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

<h3 id="createsystemtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSystemTemplateResponse](#schemacreatesystemtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFlowTemplate

<a id="opIdDeleteFlowTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DeleteFlowTemplate' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deleteflowtemplate-parameters">Parameters</h3>

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
|body|body|[DeleteFlowTemplateRequest](#schemadeleteflowtemplaterequest)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DeleteFlowTemplate|

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

<h3 id="deleteflowtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFlowTemplateResponse](#schemadeleteflowtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNamespace

<a id="opIdDeleteNamespace"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DeleteNamespace' \
  -d '{}'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace`

<aside class="warning">
This operation is deprecated
</aside>

Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.

> Body parameter

```json
{}
```

<h3 id="deletenamespace-parameters">Parameters</h3>

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
|body|body|[DeleteNamespaceRequest](#schemadeletenamespacerequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DeleteNamespace|

> Example responses

> 200 Response

```json
{
  "namespaceArn": {},
  "namespaceName": {}
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

<h3 id="deletenamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNamespaceResponse](#schemadeletenamespaceresponse)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSystemInstance

<a id="opIdDeleteSystemInstance"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DeleteSystemInstance' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deletesysteminstance-parameters">Parameters</h3>

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
|body|body|[DeleteSystemInstanceRequest](#schemadeletesysteminstancerequest)|true|none|
|» id|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DeleteSystemInstance|

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

<h3 id="deletesysteminstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSystemInstanceResponse](#schemadeletesysteminstanceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSystemTemplate

<a id="opIdDeleteSystemTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DeleteSystemTemplate' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deletesystemtemplate-parameters">Parameters</h3>

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
|body|body|[DeleteSystemTemplateRequest](#schemadeletesystemtemplaterequest)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DeleteSystemTemplate|

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

<h3 id="deletesystemtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSystemTemplateResponse](#schemadeletesystemtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeploySystemInstance

<a id="opIdDeploySystemInstance"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DeploySystemInstance' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance`

<aside class="warning">
This operation is deprecated
</aside>

<p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deploysysteminstance-parameters">Parameters</h3>

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
|body|body|[DeploySystemInstanceRequest](#schemadeploysysteminstancerequest)|true|none|
|» id|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DeploySystemInstance|

> Example responses

> 200 Response

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
  },
  "greengrassDeploymentId": {}
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

<h3 id="deploysysteminstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeploySystemInstanceResponse](#schemadeploysysteminstanceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeprecateFlowTemplate

<a id="opIdDeprecateFlowTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DeprecateFlowTemplate' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deprecateflowtemplate-parameters">Parameters</h3>

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
|body|body|[DeprecateFlowTemplateRequest](#schemadeprecateflowtemplaterequest)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DeprecateFlowTemplate|

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

<h3 id="deprecateflowtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeprecateFlowTemplateResponse](#schemadeprecateflowtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeprecateSystemTemplate

<a id="opIdDeprecateSystemTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DeprecateSystemTemplate' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Deprecates the specified system.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deprecatesystemtemplate-parameters">Parameters</h3>

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
|body|body|[DeprecateSystemTemplateRequest](#schemadeprecatesystemtemplaterequest)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DeprecateSystemTemplate|

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

<h3 id="deprecatesystemtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeprecateSystemTemplateResponse](#schemadeprecatesystemtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNamespace

<a id="opIdDescribeNamespace"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DescribeNamespace' \
  -d '{
    "namespaceName": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace`

<aside class="warning">
This operation is deprecated
</aside>

Gets the latest version of the user's namespace and the public version that it is tracking.

> Body parameter

```json
{
  "namespaceName": {}
}
```

<h3 id="describenamespace-parameters">Parameters</h3>

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
|body|body|[DescribeNamespaceRequest](#schemadescribenamespacerequest)|true|none|
|» namespaceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DescribeNamespace|

> Example responses

> 200 Response

```json
{
  "namespaceArn": {},
  "namespaceName": {},
  "trackingNamespaceName": {},
  "trackingNamespaceVersion": {},
  "namespaceVersion": {}
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

<h3 id="describenamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNamespaceResponse](#schemadescribenamespaceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DissociateEntityFromThing

<a id="opIdDissociateEntityFromThing"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.DissociateEntityFromThing' \
  -d '{
    "thingName": {},
    "entityType": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing`

<aside class="warning">
This operation is deprecated
</aside>

Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.

> Body parameter

```json
{
  "thingName": {},
  "entityType": {}
}
```

<h3 id="dissociateentityfromthing-parameters">Parameters</h3>

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
|body|body|[DissociateEntityFromThingRequest](#schemadissociateentityfromthingrequest)|true|none|
|» thingName|body|object|true|none|
|» entityType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.DissociateEntityFromThing|

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

<h3 id="dissociateentityfromthing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DissociateEntityFromThingResponse](#schemadissociateentityfromthingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEntities

<a id="opIdGetEntities"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetEntities' \
  -d '{
    "ids": {},
    "namespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities`

<aside class="warning">
This operation is deprecated
</aside>

<p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>

> Body parameter

```json
{
  "ids": {},
  "namespaceVersion": {}
}
```

<h3 id="getentities-parameters">Parameters</h3>

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
|body|body|[GetEntitiesRequest](#schemagetentitiesrequest)|true|none|
|» ids|body|object|true|none|
|» namespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetEntities|

> Example responses

> 200 Response

```json
{
  "descriptions": {}
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

<h3 id="getentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEntitiesResponse](#schemagetentitiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFlowTemplate

<a id="opIdGetFlowTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetFlowTemplate' \
  -d '{
    "id": {},
    "revisionNumber": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.

> Body parameter

```json
{
  "id": {},
  "revisionNumber": {}
}
```

<h3 id="getflowtemplate-parameters">Parameters</h3>

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
|body|body|[GetFlowTemplateRequest](#schemagetflowtemplaterequest)|true|none|
|» id|body|object|true|none|
|» revisionNumber|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetFlowTemplate|

> Example responses

> 200 Response

```json
{
  "description": {
    "summary": {
      "id": {},
      "arn": {},
      "revisionNumber": {},
      "createdAt": {}
    },
    "definition": {
      "language": {},
      "text": {}
    },
    "validatedNamespaceVersion": {}
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

<h3 id="getflowtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFlowTemplateResponse](#schemagetflowtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFlowTemplateRevisions

<a id="opIdGetFlowTemplateRevisions"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetFlowTemplateRevisions' \
  -d '{
    "id": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions`

<aside class="warning">
This operation is deprecated
</aside>

Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.

> Body parameter

```json
{
  "id": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getflowtemplaterevisions-parameters">Parameters</h3>

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
|body|body|[GetFlowTemplateRevisionsRequest](#schemagetflowtemplaterevisionsrequest)|true|none|
|» id|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetFlowTemplateRevisions|

> Example responses

> 200 Response

```json
{
  "summaries": {},
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

<h3 id="getflowtemplaterevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFlowTemplateRevisionsResponse](#schemagetflowtemplaterevisionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNamespaceDeletionStatus

<a id="opIdGetNamespaceDeletionStatus"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetNamespaceDeletionStatus' \
  -d '{}'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus`

<aside class="warning">
This operation is deprecated
</aside>

Gets the status of a namespace deletion task.

> Body parameter

```json
{}
```

<h3 id="getnamespacedeletionstatus-parameters">Parameters</h3>

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
|body|body|[GetNamespaceDeletionStatusRequest](#schemagetnamespacedeletionstatusrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetNamespaceDeletionStatus|

> Example responses

> 200 Response

```json
{
  "namespaceArn": {},
  "namespaceName": {},
  "status": {},
  "errorCode": {},
  "errorMessage": {}
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

<h3 id="getnamespacedeletionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNamespaceDeletionStatusResponse](#schemagetnamespacedeletionstatusresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSystemInstance

<a id="opIdGetSystemInstance"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetSystemInstance' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance`

<aside class="warning">
This operation is deprecated
</aside>

Gets a system instance.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="getsysteminstance-parameters">Parameters</h3>

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
|body|body|[GetSystemInstanceRequest](#schemagetsysteminstancerequest)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetSystemInstance|

> Example responses

> 200 Response

```json
{
  "description": {
    "summary": {
      "id": {},
      "arn": {},
      "status": {},
      "target": {},
      "greengrassGroupName": {},
      "createdAt": {},
      "updatedAt": {},
      "greengrassGroupId": {},
      "greengrassGroupVersionId": {}
    },
    "definition": {
      "language": {},
      "text": {}
    },
    "s3BucketName": {},
    "metricsConfiguration": {
      "cloudMetricEnabled": {},
      "metricRuleRoleArn": {}
    },
    "validatedNamespaceVersion": {},
    "validatedDependencyRevisions": {},
    "flowActionsRoleArn": {}
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

<h3 id="getsysteminstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSystemInstanceResponse](#schemagetsysteminstanceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSystemTemplate

<a id="opIdGetSystemTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetSystemTemplate' \
  -d '{
    "id": {},
    "revisionNumber": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Gets a system.

> Body parameter

```json
{
  "id": {},
  "revisionNumber": {}
}
```

<h3 id="getsystemtemplate-parameters">Parameters</h3>

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
|body|body|[GetSystemTemplateRequest](#schemagetsystemtemplaterequest)|true|none|
|» id|body|object|true|none|
|» revisionNumber|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetSystemTemplate|

> Example responses

> 200 Response

```json
{
  "description": {
    "summary": {
      "id": {},
      "arn": {},
      "revisionNumber": {},
      "createdAt": {}
    },
    "definition": {
      "language": {},
      "text": {}
    },
    "validatedNamespaceVersion": {}
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

<h3 id="getsystemtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSystemTemplateResponse](#schemagetsystemtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSystemTemplateRevisions

<a id="opIdGetSystemTemplateRevisions"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetSystemTemplateRevisions' \
  -d '{
    "id": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions`

<aside class="warning">
This operation is deprecated
</aside>

Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.

> Body parameter

```json
{
  "id": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getsystemtemplaterevisions-parameters">Parameters</h3>

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
|body|body|[GetSystemTemplateRevisionsRequest](#schemagetsystemtemplaterevisionsrequest)|true|none|
|» id|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetSystemTemplateRevisions|

> Example responses

> 200 Response

```json
{
  "summaries": {},
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

<h3 id="getsystemtemplaterevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSystemTemplateRevisionsResponse](#schemagetsystemtemplaterevisionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUploadStatus

<a id="opIdGetUploadStatus"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.GetUploadStatus' \
  -d '{
    "uploadId": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus`

<aside class="warning">
This operation is deprecated
</aside>

Gets the status of the specified upload.

> Body parameter

```json
{
  "uploadId": {}
}
```

<h3 id="getuploadstatus-parameters">Parameters</h3>

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
|body|body|[GetUploadStatusRequest](#schemagetuploadstatusrequest)|true|none|
|» uploadId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.GetUploadStatus|

> Example responses

> 200 Response

```json
{
  "uploadId": {},
  "uploadStatus": {},
  "namespaceArn": {},
  "namespaceName": {},
  "namespaceVersion": {},
  "failureReason": {},
  "createdDate": {}
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

<h3 id="getuploadstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUploadStatusResponse](#schemagetuploadstatusresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFlowExecutionMessages

<a id="opIdListFlowExecutionMessages"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.ListFlowExecutionMessages' \
  -d '{
    "flowExecutionId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of objects that contain information about events in a flow execution.

> Body parameter

```json
{
  "flowExecutionId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listflowexecutionmessages-parameters">Parameters</h3>

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
|body|body|[ListFlowExecutionMessagesRequest](#schemalistflowexecutionmessagesrequest)|true|none|
|» flowExecutionId|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.ListFlowExecutionMessages|

> Example responses

> 200 Response

```json
{
  "messages": {},
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

<h3 id="listflowexecutionmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFlowExecutionMessagesResponse](#schemalistflowexecutionmessagesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.ListTagsForResource' \
  -d '{
    "maxResults": {},
    "resourceArn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource`

<aside class="warning">
This operation is deprecated
</aside>

Lists all tags on an AWS IoT Things Graph resource.

> Body parameter

```json
{
  "maxResults": {},
  "resourceArn": {},
  "nextToken": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» maxResults|body|object|false|none|
|» resourceArn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchEntities

<a id="opIdSearchEntities"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.SearchEntities' \
  -d '{
    "entityTypes": {},
    "filters": {},
    "nextToken": {},
    "maxResults": {},
    "namespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities`

<aside class="warning">
This operation is deprecated
</aside>

Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.

> Body parameter

```json
{
  "entityTypes": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {},
  "namespaceVersion": {}
}
```

<h3 id="searchentities-parameters">Parameters</h3>

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
|body|body|[SearchEntitiesRequest](#schemasearchentitiesrequest)|true|none|
|» entityTypes|body|object|true|none|
|» filters|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» namespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.SearchEntities|

> Example responses

> 200 Response

```json
{
  "descriptions": {},
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

<h3 id="searchentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchEntitiesResponse](#schemasearchentitiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchFlowExecutions

<a id="opIdSearchFlowExecutions"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.SearchFlowExecutions' \
  -d '{
    "systemInstanceId": {},
    "flowExecutionId": {},
    "startTime": {},
    "endTime": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions`

<aside class="warning">
This operation is deprecated
</aside>

Searches for AWS IoT Things Graph workflow execution instances.

> Body parameter

```json
{
  "systemInstanceId": {},
  "flowExecutionId": {},
  "startTime": {},
  "endTime": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="searchflowexecutions-parameters">Parameters</h3>

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
|body|body|[SearchFlowExecutionsRequest](#schemasearchflowexecutionsrequest)|true|none|
|» systemInstanceId|body|object|true|none|
|» flowExecutionId|body|object|false|none|
|» startTime|body|object|false|none|
|» endTime|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.SearchFlowExecutions|

> Example responses

> 200 Response

```json
{
  "summaries": {},
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

<h3 id="searchflowexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchFlowExecutionsResponse](#schemasearchflowexecutionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchFlowTemplates

<a id="opIdSearchFlowTemplates"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.SearchFlowTemplates' \
  -d '{
    "filters": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates`

<aside class="warning">
This operation is deprecated
</aside>

Searches for summary information about workflows.

> Body parameter

```json
{
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="searchflowtemplates-parameters">Parameters</h3>

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
|body|body|[SearchFlowTemplatesRequest](#schemasearchflowtemplatesrequest)|true|none|
|» filters|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.SearchFlowTemplates|

> Example responses

> 200 Response

```json
{
  "summaries": {},
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

<h3 id="searchflowtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchFlowTemplatesResponse](#schemasearchflowtemplatesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchSystemInstances

<a id="opIdSearchSystemInstances"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.SearchSystemInstances' \
  -d '{
    "filters": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances`

<aside class="warning">
This operation is deprecated
</aside>

Searches for system instances in the user's account.

> Body parameter

```json
{
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="searchsysteminstances-parameters">Parameters</h3>

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
|body|body|[SearchSystemInstancesRequest](#schemasearchsysteminstancesrequest)|true|none|
|» filters|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.SearchSystemInstances|

> Example responses

> 200 Response

```json
{
  "summaries": {},
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

<h3 id="searchsysteminstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchSystemInstancesResponse](#schemasearchsysteminstancesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchSystemTemplates

<a id="opIdSearchSystemTemplates"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.SearchSystemTemplates' \
  -d '{
    "filters": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates`

<aside class="warning">
This operation is deprecated
</aside>

Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.

> Body parameter

```json
{
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="searchsystemtemplates-parameters">Parameters</h3>

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
|body|body|[SearchSystemTemplatesRequest](#schemasearchsystemtemplatesrequest)|true|none|
|» filters|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.SearchSystemTemplates|

> Example responses

> 200 Response

```json
{
  "summaries": {},
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

<h3 id="searchsystemtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchSystemTemplatesResponse](#schemasearchsystemtemplatesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchThings

<a id="opIdSearchThings"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.SearchThings' \
  -d '{
    "entityId": {},
    "nextToken": {},
    "maxResults": {},
    "namespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings`

<aside class="warning">
This operation is deprecated
</aside>

<p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>

> Body parameter

```json
{
  "entityId": {},
  "nextToken": {},
  "maxResults": {},
  "namespaceVersion": {}
}
```

<h3 id="searchthings-parameters">Parameters</h3>

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
|body|body|[SearchThingsRequest](#schemasearchthingsrequest)|true|none|
|» entityId|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» namespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.SearchThings|

> Example responses

> 200 Response

```json
{
  "things": {},
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

<h3 id="searchthings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchThingsResponse](#schemasearchthingsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.TagResource`

<aside class="warning">
This operation is deprecated
</aside>

Creates a tag for the specified resource.

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.TagResource|

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
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UndeploySystemInstance

<a id="opIdUndeploySystemInstance"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.UndeploySystemInstance' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance`

<aside class="warning">
This operation is deprecated
</aside>

Removes a system instance from its target (Cloud or Greengrass).

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="undeploysysteminstance-parameters">Parameters</h3>

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
|body|body|[UndeploySystemInstanceRequest](#schemaundeploysysteminstancerequest)|true|none|
|» id|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.UndeploySystemInstance|

> Example responses

> 200 Response

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
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

<h3 id="undeploysysteminstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UndeploySystemInstanceResponse](#schemaundeploysysteminstanceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource`

<aside class="warning">
This operation is deprecated
</aside>

Removes a tag from the specified resource.

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.UntagResource|

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
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlowTemplate

<a id="opIdUpdateFlowTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.UpdateFlowTemplate' \
  -d '{
    "id": {},
    "definition": {
      "language": {},
      "text": {}
    },
    "compatibleNamespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. 

> Body parameter

```json
{
  "id": {},
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

<h3 id="updateflowtemplate-parameters">Parameters</h3>

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
|body|body|[UpdateFlowTemplateRequest](#schemaupdateflowtemplaterequest)|true|none|
|» id|body|object|true|none|
|» definition|body|object|true|none|
|» » language|body|object|true|none|
|» » text|body|object|true|none|
|» compatibleNamespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.UpdateFlowTemplate|

> Example responses

> 200 Response

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
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

<h3 id="updateflowtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFlowTemplateResponse](#schemaupdateflowtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSystemTemplate

<a id="opIdUpdateSystemTemplate"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.UpdateSystemTemplate' \
  -d '{
    "id": {},
    "definition": {
      "language": {},
      "text": {}
    },
    "compatibleNamespaceVersion": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate`

<aside class="warning">
This operation is deprecated
</aside>

Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.

> Body parameter

```json
{
  "id": {},
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

<h3 id="updatesystemtemplate-parameters">Parameters</h3>

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
|body|body|[UpdateSystemTemplateRequest](#schemaupdatesystemtemplaterequest)|true|none|
|» id|body|object|true|none|
|» definition|body|object|true|none|
|» » language|body|object|true|none|
|» » text|body|object|true|none|
|» compatibleNamespaceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.UpdateSystemTemplate|

> Example responses

> 200 Response

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
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

<h3 id="updatesystemtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSystemTemplateResponse](#schemaupdatesystemtemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadEntityDefinitions

<a id="opIdUploadEntityDefinitions"></a>

> Code samples

```bash
curl 'https://iotthingsgraph.us-east-1.amazonaws.com/#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IotThingsGraphFrontEndService.UploadEntityDefinitions' \
  -d '{
    "document": {
      "language": {},
      "text": {}
    },
    "syncWithPublicNamespace": {},
    "deprecateExistingEntities": {}
  }'
```

`POST /#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions`

<aside class="warning">
This operation is deprecated
</aside>

<p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>

> Body parameter

```json
{
  "document": {
    "language": {},
    "text": {}
  },
  "syncWithPublicNamespace": {},
  "deprecateExistingEntities": {}
}
```

<h3 id="uploadentitydefinitions-parameters">Parameters</h3>

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
|body|body|[UploadEntityDefinitionsRequest](#schemauploadentitydefinitionsrequest)|true|none|
|» document|body|object|false|none|
|» » language|body|object|true|none|
|» » text|body|object|true|none|
|» syncWithPublicNamespace|body|object|false|none|
|» deprecateExistingEntities|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IotThingsGraphFrontEndService.UploadEntityDefinitions|

> Example responses

> 200 Response

```json
{
  "uploadId": {}
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

<h3 id="uploadentitydefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UploadEntityDefinitionsResponse](#schemauploadentitydefinitionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateEntityToThingResponse">AssociateEntityToThingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateentitytothingresponse"></a>
<a id="schema_AssociateEntityToThingResponse"></a>
<a id="tocSassociateentitytothingresponse"></a>
<a id="tocsassociateentitytothingresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateEntityToThingRequest">AssociateEntityToThingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateentitytothingrequest"></a>
<a id="schema_AssociateEntityToThingRequest"></a>
<a id="tocSassociateentitytothingrequest"></a>
<a id="tocsassociateentitytothingrequest"></a>

```json
{
  "thingName": {},
  "entityId": {},
  "namespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|true|none|none|
|entityId|object|true|none|none|
|namespaceVersion|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

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

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

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

<h2 id="tocS_CreateFlowTemplateResponse">CreateFlowTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateflowtemplateresponse"></a>
<a id="schema_CreateFlowTemplateResponse"></a>
<a id="tocScreateflowtemplateresponse"></a>
<a id="tocscreateflowtemplateresponse"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|

<h2 id="tocS_CreateFlowTemplateRequest">CreateFlowTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateflowtemplaterequest"></a>
<a id="schema_CreateFlowTemplateRequest"></a>
<a id="tocScreateflowtemplaterequest"></a>
<a id="tocscreateflowtemplaterequest"></a>

```json
{
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definition|object|true|none|none|
|compatibleNamespaceVersion|object|false|none|none|

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

<h2 id="tocS_CreateSystemInstanceResponse">CreateSystemInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesysteminstanceresponse"></a>
<a id="schema_CreateSystemInstanceResponse"></a>
<a id="tocScreatesysteminstanceresponse"></a>
<a id="tocscreatesysteminstanceresponse"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|

<h2 id="tocS_CreateSystemInstanceRequest">CreateSystemInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesysteminstancerequest"></a>
<a id="schema_CreateSystemInstanceRequest"></a>
<a id="tocScreatesysteminstancerequest"></a>
<a id="tocscreatesysteminstancerequest"></a>

```json
{
  "tags": {},
  "definition": {
    "language": {},
    "text": {}
  },
  "target": {},
  "greengrassGroupName": {},
  "s3BucketName": {},
  "metricsConfiguration": {
    "cloudMetricEnabled": {},
    "metricRuleRoleArn": {}
  },
  "flowActionsRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|
|definition|[DefinitionDocument](#schemadefinitiondocument)|true|none|A document that defines an entity. |
|target|object|true|none|none|
|greengrassGroupName|object|false|none|none|
|s3BucketName|object|false|none|none|
|metricsConfiguration|[MetricsConfiguration](#schemametricsconfiguration)|false|none|An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.|
|flowActionsRoleArn|object|false|none|none|

<h2 id="tocS_CreateSystemTemplateResponse">CreateSystemTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesystemtemplateresponse"></a>
<a id="schema_CreateSystemTemplateResponse"></a>
<a id="tocScreatesystemtemplateresponse"></a>
<a id="tocscreatesystemtemplateresponse"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|

<h2 id="tocS_CreateSystemTemplateRequest">CreateSystemTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesystemtemplaterequest"></a>
<a id="schema_CreateSystemTemplateRequest"></a>
<a id="tocScreatesystemtemplaterequest"></a>
<a id="tocscreatesystemtemplaterequest"></a>

```json
{
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definition|object|true|none|none|
|compatibleNamespaceVersion|object|false|none|none|

<h2 id="tocS_DeleteFlowTemplateResponse">DeleteFlowTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflowtemplateresponse"></a>
<a id="schema_DeleteFlowTemplateResponse"></a>
<a id="tocSdeleteflowtemplateresponse"></a>
<a id="tocsdeleteflowtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFlowTemplateRequest">DeleteFlowTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflowtemplaterequest"></a>
<a id="schema_DeleteFlowTemplateRequest"></a>
<a id="tocSdeleteflowtemplaterequest"></a>
<a id="tocsdeleteflowtemplaterequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteNamespaceResponse">DeleteNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletenamespaceresponse"></a>
<a id="schema_DeleteNamespaceResponse"></a>
<a id="tocSdeletenamespaceresponse"></a>
<a id="tocsdeletenamespaceresponse"></a>

```json
{
  "namespaceArn": {},
  "namespaceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaceArn|object|false|none|none|
|namespaceName|object|false|none|none|

<h2 id="tocS_DeleteNamespaceRequest">DeleteNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenamespacerequest"></a>
<a id="schema_DeleteNamespaceRequest"></a>
<a id="tocSdeletenamespacerequest"></a>
<a id="tocsdeletenamespacerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSystemInstanceResponse">DeleteSystemInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesysteminstanceresponse"></a>
<a id="schema_DeleteSystemInstanceResponse"></a>
<a id="tocSdeletesysteminstanceresponse"></a>
<a id="tocsdeletesysteminstanceresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSystemInstanceRequest">DeleteSystemInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesysteminstancerequest"></a>
<a id="schema_DeleteSystemInstanceRequest"></a>
<a id="tocSdeletesysteminstancerequest"></a>
<a id="tocsdeletesysteminstancerequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|

<h2 id="tocS_DeleteSystemTemplateResponse">DeleteSystemTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesystemtemplateresponse"></a>
<a id="schema_DeleteSystemTemplateResponse"></a>
<a id="tocSdeletesystemtemplateresponse"></a>
<a id="tocsdeletesystemtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSystemTemplateRequest">DeleteSystemTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesystemtemplaterequest"></a>
<a id="schema_DeleteSystemTemplateRequest"></a>
<a id="tocSdeletesystemtemplaterequest"></a>
<a id="tocsdeletesystemtemplaterequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_DeploySystemInstanceResponse">DeploySystemInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeploysysteminstanceresponse"></a>
<a id="schema_DeploySystemInstanceResponse"></a>
<a id="tocSdeploysysteminstanceresponse"></a>
<a id="tocsdeploysysteminstanceresponse"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
  },
  "greengrassDeploymentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|true|none|none|
|greengrassDeploymentId|object|false|none|none|

<h2 id="tocS_DeploySystemInstanceRequest">DeploySystemInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeploysysteminstancerequest"></a>
<a id="schema_DeploySystemInstanceRequest"></a>
<a id="tocSdeploysysteminstancerequest"></a>
<a id="tocsdeploysysteminstancerequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|

<h2 id="tocS_DeprecateFlowTemplateResponse">DeprecateFlowTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeprecateflowtemplateresponse"></a>
<a id="schema_DeprecateFlowTemplateResponse"></a>
<a id="tocSdeprecateflowtemplateresponse"></a>
<a id="tocsdeprecateflowtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeprecateFlowTemplateRequest">DeprecateFlowTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeprecateflowtemplaterequest"></a>
<a id="schema_DeprecateFlowTemplateRequest"></a>
<a id="tocSdeprecateflowtemplaterequest"></a>
<a id="tocsdeprecateflowtemplaterequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_DeprecateSystemTemplateResponse">DeprecateSystemTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeprecatesystemtemplateresponse"></a>
<a id="schema_DeprecateSystemTemplateResponse"></a>
<a id="tocSdeprecatesystemtemplateresponse"></a>
<a id="tocsdeprecatesystemtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeprecateSystemTemplateRequest">DeprecateSystemTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeprecatesystemtemplaterequest"></a>
<a id="schema_DeprecateSystemTemplateRequest"></a>
<a id="tocSdeprecatesystemtemplaterequest"></a>
<a id="tocsdeprecatesystemtemplaterequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_DescribeNamespaceResponse">DescribeNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribenamespaceresponse"></a>
<a id="schema_DescribeNamespaceResponse"></a>
<a id="tocSdescribenamespaceresponse"></a>
<a id="tocsdescribenamespaceresponse"></a>

```json
{
  "namespaceArn": {},
  "namespaceName": {},
  "trackingNamespaceName": {},
  "trackingNamespaceVersion": {},
  "namespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaceArn|object|false|none|none|
|namespaceName|object|false|none|none|
|trackingNamespaceName|object|false|none|none|
|trackingNamespaceVersion|object|false|none|none|
|namespaceVersion|object|false|none|none|

<h2 id="tocS_DescribeNamespaceRequest">DescribeNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribenamespacerequest"></a>
<a id="schema_DescribeNamespaceRequest"></a>
<a id="tocSdescribenamespacerequest"></a>
<a id="tocsdescribenamespacerequest"></a>

```json
{
  "namespaceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaceName|object|false|none|none|

<h2 id="tocS_DissociateEntityFromThingResponse">DissociateEntityFromThingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadissociateentityfromthingresponse"></a>
<a id="schema_DissociateEntityFromThingResponse"></a>
<a id="tocSdissociateentityfromthingresponse"></a>
<a id="tocsdissociateentityfromthingresponse"></a>

```json
{}
```

<h2 id="tocS_DissociateEntityFromThingRequest">DissociateEntityFromThingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadissociateentityfromthingrequest"></a>
<a id="schema_DissociateEntityFromThingRequest"></a>
<a id="tocSdissociateentityfromthingrequest"></a>
<a id="tocsdissociateentityfromthingrequest"></a>

```json
{
  "thingName": {},
  "entityType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|true|none|none|
|entityType|object|true|none|none|

<h2 id="tocS_GetEntitiesResponse">GetEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetentitiesresponse"></a>
<a id="schema_GetEntitiesResponse"></a>
<a id="tocSgetentitiesresponse"></a>
<a id="tocsgetentitiesresponse"></a>

```json
{
  "descriptions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptions|object|false|none|none|

<h2 id="tocS_GetEntitiesRequest">GetEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetentitiesrequest"></a>
<a id="schema_GetEntitiesRequest"></a>
<a id="tocSgetentitiesrequest"></a>
<a id="tocsgetentitiesrequest"></a>

```json
{
  "ids": {},
  "namespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|true|none|none|
|namespaceVersion|object|false|none|none|

<h2 id="tocS_GetFlowTemplateResponse">GetFlowTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetflowtemplateresponse"></a>
<a id="schema_GetFlowTemplateResponse"></a>
<a id="tocSgetflowtemplateresponse"></a>
<a id="tocsgetflowtemplateresponse"></a>

```json
{
  "description": {
    "summary": {
      "id": {},
      "arn": {},
      "revisionNumber": {},
      "createdAt": {}
    },
    "definition": {
      "language": {},
      "text": {}
    },
    "validatedNamespaceVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|

<h2 id="tocS_GetFlowTemplateRequest">GetFlowTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetflowtemplaterequest"></a>
<a id="schema_GetFlowTemplateRequest"></a>
<a id="tocSgetflowtemplaterequest"></a>
<a id="tocsgetflowtemplaterequest"></a>

```json
{
  "id": {},
  "revisionNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|revisionNumber|object|false|none|none|

<h2 id="tocS_GetFlowTemplateRevisionsResponse">GetFlowTemplateRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetflowtemplaterevisionsresponse"></a>
<a id="schema_GetFlowTemplateRevisionsResponse"></a>
<a id="tocSgetflowtemplaterevisionsresponse"></a>
<a id="tocsgetflowtemplaterevisionsresponse"></a>

```json
{
  "summaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetFlowTemplateRevisionsRequest">GetFlowTemplateRevisionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetflowtemplaterevisionsrequest"></a>
<a id="schema_GetFlowTemplateRevisionsRequest"></a>
<a id="tocSgetflowtemplaterevisionsrequest"></a>
<a id="tocsgetflowtemplaterevisionsrequest"></a>

```json
{
  "id": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetNamespaceDeletionStatusResponse">GetNamespaceDeletionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnamespacedeletionstatusresponse"></a>
<a id="schema_GetNamespaceDeletionStatusResponse"></a>
<a id="tocSgetnamespacedeletionstatusresponse"></a>
<a id="tocsgetnamespacedeletionstatusresponse"></a>

```json
{
  "namespaceArn": {},
  "namespaceName": {},
  "status": {},
  "errorCode": {},
  "errorMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaceArn|object|false|none|none|
|namespaceName|object|false|none|none|
|status|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_GetNamespaceDeletionStatusRequest">GetNamespaceDeletionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnamespacedeletionstatusrequest"></a>
<a id="schema_GetNamespaceDeletionStatusRequest"></a>
<a id="tocSgetnamespacedeletionstatusrequest"></a>
<a id="tocsgetnamespacedeletionstatusrequest"></a>

```json
{}
```

<h2 id="tocS_GetSystemInstanceResponse">GetSystemInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsysteminstanceresponse"></a>
<a id="schema_GetSystemInstanceResponse"></a>
<a id="tocSgetsysteminstanceresponse"></a>
<a id="tocsgetsysteminstanceresponse"></a>

```json
{
  "description": {
    "summary": {
      "id": {},
      "arn": {},
      "status": {},
      "target": {},
      "greengrassGroupName": {},
      "createdAt": {},
      "updatedAt": {},
      "greengrassGroupId": {},
      "greengrassGroupVersionId": {}
    },
    "definition": {
      "language": {},
      "text": {}
    },
    "s3BucketName": {},
    "metricsConfiguration": {
      "cloudMetricEnabled": {},
      "metricRuleRoleArn": {}
    },
    "validatedNamespaceVersion": {},
    "validatedDependencyRevisions": {},
    "flowActionsRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|

<h2 id="tocS_GetSystemInstanceRequest">GetSystemInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsysteminstancerequest"></a>
<a id="schema_GetSystemInstanceRequest"></a>
<a id="tocSgetsysteminstancerequest"></a>
<a id="tocsgetsysteminstancerequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_GetSystemTemplateResponse">GetSystemTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsystemtemplateresponse"></a>
<a id="schema_GetSystemTemplateResponse"></a>
<a id="tocSgetsystemtemplateresponse"></a>
<a id="tocsgetsystemtemplateresponse"></a>

```json
{
  "description": {
    "summary": {
      "id": {},
      "arn": {},
      "revisionNumber": {},
      "createdAt": {}
    },
    "definition": {
      "language": {},
      "text": {}
    },
    "validatedNamespaceVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|

<h2 id="tocS_GetSystemTemplateRequest">GetSystemTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsystemtemplaterequest"></a>
<a id="schema_GetSystemTemplateRequest"></a>
<a id="tocSgetsystemtemplaterequest"></a>
<a id="tocsgetsystemtemplaterequest"></a>

```json
{
  "id": {},
  "revisionNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|revisionNumber|object|false|none|none|

<h2 id="tocS_GetSystemTemplateRevisionsResponse">GetSystemTemplateRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsystemtemplaterevisionsresponse"></a>
<a id="schema_GetSystemTemplateRevisionsResponse"></a>
<a id="tocSgetsystemtemplaterevisionsresponse"></a>
<a id="tocsgetsystemtemplaterevisionsresponse"></a>

```json
{
  "summaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetSystemTemplateRevisionsRequest">GetSystemTemplateRevisionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsystemtemplaterevisionsrequest"></a>
<a id="schema_GetSystemTemplateRevisionsRequest"></a>
<a id="tocSgetsystemtemplaterevisionsrequest"></a>
<a id="tocsgetsystemtemplaterevisionsrequest"></a>

```json
{
  "id": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetUploadStatusResponse">GetUploadStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuploadstatusresponse"></a>
<a id="schema_GetUploadStatusResponse"></a>
<a id="tocSgetuploadstatusresponse"></a>
<a id="tocsgetuploadstatusresponse"></a>

```json
{
  "uploadId": {},
  "uploadStatus": {},
  "namespaceArn": {},
  "namespaceName": {},
  "namespaceVersion": {},
  "failureReason": {},
  "createdDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadId|object|true|none|none|
|uploadStatus|object|true|none|none|
|namespaceArn|object|false|none|none|
|namespaceName|object|false|none|none|
|namespaceVersion|object|false|none|none|
|failureReason|object|false|none|none|
|createdDate|object|true|none|none|

<h2 id="tocS_GetUploadStatusRequest">GetUploadStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuploadstatusrequest"></a>
<a id="schema_GetUploadStatusRequest"></a>
<a id="tocSgetuploadstatusrequest"></a>
<a id="tocsgetuploadstatusrequest"></a>

```json
{
  "uploadId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadId|object|true|none|none|

<h2 id="tocS_ListFlowExecutionMessagesResponse">ListFlowExecutionMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistflowexecutionmessagesresponse"></a>
<a id="schema_ListFlowExecutionMessagesResponse"></a>
<a id="tocSlistflowexecutionmessagesresponse"></a>
<a id="tocslistflowexecutionmessagesresponse"></a>

```json
{
  "messages": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFlowExecutionMessagesRequest">ListFlowExecutionMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistflowexecutionmessagesrequest"></a>
<a id="schema_ListFlowExecutionMessagesRequest"></a>
<a id="tocSlistflowexecutionmessagesrequest"></a>
<a id="tocslistflowexecutionmessagesrequest"></a>

```json
{
  "flowExecutionId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowExecutionId|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "maxResults": {},
  "resourceArn": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|resourceArn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchEntitiesResponse">SearchEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchentitiesresponse"></a>
<a id="schema_SearchEntitiesResponse"></a>
<a id="tocSsearchentitiesresponse"></a>
<a id="tocssearchentitiesresponse"></a>

```json
{
  "descriptions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchEntitiesRequest">SearchEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchentitiesrequest"></a>
<a id="schema_SearchEntitiesRequest"></a>
<a id="tocSsearchentitiesrequest"></a>
<a id="tocssearchentitiesrequest"></a>

```json
{
  "entityTypes": {},
  "filters": {},
  "nextToken": {},
  "maxResults": {},
  "namespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityTypes|object|true|none|none|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|namespaceVersion|object|false|none|none|

<h2 id="tocS_SearchFlowExecutionsResponse">SearchFlowExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchflowexecutionsresponse"></a>
<a id="schema_SearchFlowExecutionsResponse"></a>
<a id="tocSsearchflowexecutionsresponse"></a>
<a id="tocssearchflowexecutionsresponse"></a>

```json
{
  "summaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchFlowExecutionsRequest">SearchFlowExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchflowexecutionsrequest"></a>
<a id="schema_SearchFlowExecutionsRequest"></a>
<a id="tocSsearchflowexecutionsrequest"></a>
<a id="tocssearchflowexecutionsrequest"></a>

```json
{
  "systemInstanceId": {},
  "flowExecutionId": {},
  "startTime": {},
  "endTime": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|systemInstanceId|object|true|none|none|
|flowExecutionId|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_SearchFlowTemplatesResponse">SearchFlowTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchflowtemplatesresponse"></a>
<a id="schema_SearchFlowTemplatesResponse"></a>
<a id="tocSsearchflowtemplatesresponse"></a>
<a id="tocssearchflowtemplatesresponse"></a>

```json
{
  "summaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchFlowTemplatesRequest">SearchFlowTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchflowtemplatesrequest"></a>
<a id="schema_SearchFlowTemplatesRequest"></a>
<a id="tocSsearchflowtemplatesrequest"></a>
<a id="tocssearchflowtemplatesrequest"></a>

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

<h2 id="tocS_SearchSystemInstancesResponse">SearchSystemInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchsysteminstancesresponse"></a>
<a id="schema_SearchSystemInstancesResponse"></a>
<a id="tocSsearchsysteminstancesresponse"></a>
<a id="tocssearchsysteminstancesresponse"></a>

```json
{
  "summaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchSystemInstancesRequest">SearchSystemInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchsysteminstancesrequest"></a>
<a id="schema_SearchSystemInstancesRequest"></a>
<a id="tocSsearchsysteminstancesrequest"></a>
<a id="tocssearchsysteminstancesrequest"></a>

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

<h2 id="tocS_SearchSystemTemplatesResponse">SearchSystemTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchsystemtemplatesresponse"></a>
<a id="schema_SearchSystemTemplatesResponse"></a>
<a id="tocSsearchsystemtemplatesresponse"></a>
<a id="tocssearchsystemtemplatesresponse"></a>

```json
{
  "summaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchSystemTemplatesRequest">SearchSystemTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchsystemtemplatesrequest"></a>
<a id="schema_SearchSystemTemplatesRequest"></a>
<a id="tocSsearchsystemtemplatesrequest"></a>
<a id="tocssearchsystemtemplatesrequest"></a>

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

<h2 id="tocS_SearchThingsResponse">SearchThingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchthingsresponse"></a>
<a id="schema_SearchThingsResponse"></a>
<a id="tocSsearchthingsresponse"></a>
<a id="tocssearchthingsresponse"></a>

```json
{
  "things": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|things|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchThingsRequest">SearchThingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchthingsrequest"></a>
<a id="schema_SearchThingsRequest"></a>
<a id="tocSsearchthingsrequest"></a>
<a id="tocssearchthingsrequest"></a>

```json
{
  "entityId": {},
  "nextToken": {},
  "maxResults": {},
  "namespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|namespaceVersion|object|false|none|none|

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
  "resourceArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UndeploySystemInstanceResponse">UndeploySystemInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaundeploysysteminstanceresponse"></a>
<a id="schema_UndeploySystemInstanceResponse"></a>
<a id="tocSundeploysysteminstanceresponse"></a>
<a id="tocsundeploysysteminstanceresponse"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|

<h2 id="tocS_UndeploySystemInstanceRequest">UndeploySystemInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeploysysteminstancerequest"></a>
<a id="schema_UndeploySystemInstanceRequest"></a>
<a id="tocSundeploysysteminstancerequest"></a>
<a id="tocsundeploysysteminstancerequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|

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
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_UpdateFlowTemplateResponse">UpdateFlowTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowtemplateresponse"></a>
<a id="schema_UpdateFlowTemplateResponse"></a>
<a id="tocSupdateflowtemplateresponse"></a>
<a id="tocsupdateflowtemplateresponse"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|

<h2 id="tocS_UpdateFlowTemplateRequest">UpdateFlowTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowtemplaterequest"></a>
<a id="schema_UpdateFlowTemplateRequest"></a>
<a id="tocSupdateflowtemplaterequest"></a>
<a id="tocsupdateflowtemplaterequest"></a>

```json
{
  "id": {},
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|definition|object|true|none|none|
|compatibleNamespaceVersion|object|false|none|none|

<h2 id="tocS_UpdateSystemTemplateResponse">UpdateSystemTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystemtemplateresponse"></a>
<a id="schema_UpdateSystemTemplateResponse"></a>
<a id="tocSupdatesystemtemplateresponse"></a>
<a id="tocsupdatesystemtemplateresponse"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|

<h2 id="tocS_UpdateSystemTemplateRequest">UpdateSystemTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystemtemplaterequest"></a>
<a id="schema_UpdateSystemTemplateRequest"></a>
<a id="tocSupdatesystemtemplaterequest"></a>
<a id="tocsupdatesystemtemplaterequest"></a>

```json
{
  "id": {},
  "definition": {
    "language": {},
    "text": {}
  },
  "compatibleNamespaceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|definition|object|true|none|none|
|compatibleNamespaceVersion|object|false|none|none|

<h2 id="tocS_UploadEntityDefinitionsResponse">UploadEntityDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadentitydefinitionsresponse"></a>
<a id="schema_UploadEntityDefinitionsResponse"></a>
<a id="tocSuploadentitydefinitionsresponse"></a>
<a id="tocsuploadentitydefinitionsresponse"></a>

```json
{
  "uploadId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadId|object|true|none|none|

<h2 id="tocS_UploadEntityDefinitionsRequest">UploadEntityDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadentitydefinitionsrequest"></a>
<a id="schema_UploadEntityDefinitionsRequest"></a>
<a id="tocSuploadentitydefinitionsrequest"></a>
<a id="tocsuploadentitydefinitionsrequest"></a>

```json
{
  "document": {
    "language": {},
    "text": {}
  },
  "syncWithPublicNamespace": {},
  "deprecateExistingEntities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|object|false|none|none|
|syncWithPublicNamespace|object|false|none|none|
|deprecateExistingEntities|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_ThingName">ThingName</h2>
<!-- backwards compatibility -->
<a id="schemathingname"></a>
<a id="schema_ThingName"></a>
<a id="tocSthingname"></a>
<a id="tocsthingname"></a>

```json
"string"
```

<h2 id="tocS_Urn">Urn</h2>
<!-- backwards compatibility -->
<a id="schemaurn"></a>
<a id="schema_Urn"></a>
<a id="tocSurn"></a>
<a id="tocsurn"></a>

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
0
```

<h2 id="tocS_DefinitionDocument">DefinitionDocument</h2>
<!-- backwards compatibility -->
<a id="schemadefinitiondocument"></a>
<a id="schema_DefinitionDocument"></a>
<a id="tocSdefinitiondocument"></a>
<a id="tocsdefinitiondocument"></a>

```json
{
  "language": {},
  "text": {}
}
```

A document that defines an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|object|true|none|none|
|text|object|true|none|none|

<h2 id="tocS_FlowTemplateSummary">FlowTemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatesummary"></a>
<a id="schema_FlowTemplateSummary"></a>
<a id="tocSflowtemplatesummary"></a>
<a id="tocsflowtemplatesummary"></a>

```json
{
  "id": {},
  "arn": {},
  "revisionNumber": {},
  "createdAt": {}
}
```

An object that contains summary information about a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|revisionNumber|object|false|none|none|
|createdAt|object|false|none|none|

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

<h2 id="tocS_DeploymentTarget">DeploymentTarget</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttarget"></a>
<a id="schema_DeploymentTarget"></a>
<a id="tocSdeploymenttarget"></a>
<a id="tocsdeploymenttarget"></a>

```json
"GREENGRASS"
```

<h2 id="tocS_GroupName">GroupName</h2>
<!-- backwards compatibility -->
<a id="schemagroupname"></a>
<a id="schema_GroupName"></a>
<a id="tocSgroupname"></a>
<a id="tocsgroupname"></a>

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

<h2 id="tocS_MetricsConfiguration">MetricsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemametricsconfiguration"></a>
<a id="schema_MetricsConfiguration"></a>
<a id="tocSmetricsconfiguration"></a>
<a id="tocsmetricsconfiguration"></a>

```json
{
  "cloudMetricEnabled": {},
  "metricRuleRoleArn": {}
}
```

An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudMetricEnabled|object|false|none|none|
|metricRuleRoleArn|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_SystemInstanceSummary">SystemInstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancesummary"></a>
<a id="schema_SystemInstanceSummary"></a>
<a id="tocSsysteminstancesummary"></a>
<a id="tocssysteminstancesummary"></a>

```json
{
  "id": {},
  "arn": {},
  "status": {},
  "target": {},
  "greengrassGroupName": {},
  "createdAt": {},
  "updatedAt": {},
  "greengrassGroupId": {},
  "greengrassGroupVersionId": {}
}
```

An object that contains summary information about a system instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|status|object|false|none|none|
|target|object|false|none|none|
|greengrassGroupName|object|false|none|none|
|createdAt|object|false|none|none|
|updatedAt|object|false|none|none|
|greengrassGroupId|object|false|none|none|
|greengrassGroupVersionId|object|false|none|none|

<h2 id="tocS_SystemTemplateSummary">SystemTemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatesummary"></a>
<a id="schema_SystemTemplateSummary"></a>
<a id="tocSsystemtemplatesummary"></a>
<a id="tocssystemtemplatesummary"></a>

```json
{
  "id": {},
  "arn": {},
  "revisionNumber": {},
  "createdAt": {}
}
```

An object that contains information about a system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|revisionNumber|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_DefinitionLanguage">DefinitionLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadefinitionlanguage"></a>
<a id="schema_DefinitionLanguage"></a>
<a id="tocSdefinitionlanguage"></a>
<a id="tocsdefinitionlanguage"></a>

```json
"GRAPHQL"
```

<h2 id="tocS_DefinitionText">DefinitionText</h2>
<!-- backwards compatibility -->
<a id="schemadefinitiontext"></a>
<a id="schema_DefinitionText"></a>
<a id="tocSdefinitiontext"></a>
<a id="tocsdefinitiontext"></a>

```json
"string"
```

<h2 id="tocS_NamespaceName">NamespaceName</h2>
<!-- backwards compatibility -->
<a id="schemanamespacename"></a>
<a id="schema_NamespaceName"></a>
<a id="tocSnamespacename"></a>
<a id="tocsnamespacename"></a>

```json
"string"
```

<h2 id="tocS_DependencyRevision">DependencyRevision</h2>
<!-- backwards compatibility -->
<a id="schemadependencyrevision"></a>
<a id="schema_DependencyRevision"></a>
<a id="tocSdependencyrevision"></a>
<a id="tocsdependencyrevision"></a>

```json
{
  "id": {},
  "revisionNumber": {}
}
```

An object that contains the ID and revision number of a workflow or system that is part of a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|revisionNumber|object|false|none|none|

<h2 id="tocS_DependencyRevisions">DependencyRevisions</h2>
<!-- backwards compatibility -->
<a id="schemadependencyrevisions"></a>
<a id="schema_DependencyRevisions"></a>
<a id="tocSdependencyrevisions"></a>
<a id="tocsdependencyrevisions"></a>

```json
[
  {
    "id": {},
    "revisionNumber": {}
  }
]
```

<h2 id="tocS_GreengrassDeploymentId">GreengrassDeploymentId</h2>
<!-- backwards compatibility -->
<a id="schemagreengrassdeploymentid"></a>
<a id="schema_GreengrassDeploymentId"></a>
<a id="tocSgreengrassdeploymentid"></a>
<a id="tocsgreengrassdeploymentid"></a>

```json
"string"
```

<h2 id="tocS_DeprecateExistingEntities">DeprecateExistingEntities</h2>
<!-- backwards compatibility -->
<a id="schemadeprecateexistingentities"></a>
<a id="schema_DeprecateExistingEntities"></a>
<a id="tocSdeprecateexistingentities"></a>
<a id="tocsdeprecateexistingentities"></a>

```json
true
```

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"DEVICE"
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

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EntityDescription">EntityDescription</h2>
<!-- backwards compatibility -->
<a id="schemaentitydescription"></a>
<a id="schema_EntityDescription"></a>
<a id="tocSentitydescription"></a>
<a id="tocsentitydescription"></a>

```json
{
  "id": {},
  "arn": {},
  "type": {},
  "createdAt": {},
  "definition": {
    "language": {},
    "text": {}
  }
}
```

Describes the properties of an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|type|object|false|none|none|
|createdAt|object|false|none|none|
|definition|object|false|none|none|

<h2 id="tocS_EntityDescriptions">EntityDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaentitydescriptions"></a>
<a id="schema_EntityDescriptions"></a>
<a id="tocSentitydescriptions"></a>
<a id="tocsentitydescriptions"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "type": {},
    "createdAt": {},
    "definition": {
      "language": {},
      "text": {}
    }
  }
]
```

<h2 id="tocS_EntityFilterName">EntityFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaentityfiltername"></a>
<a id="schema_EntityFilterName"></a>
<a id="tocSentityfiltername"></a>
<a id="tocsentityfiltername"></a>

```json
"NAME"
```

<h2 id="tocS_EntityFilterValues">EntityFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaentityfiltervalues"></a>
<a id="schema_EntityFilterValues"></a>
<a id="tocSentityfiltervalues"></a>
<a id="tocsentityfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EntityFilter">EntityFilter</h2>
<!-- backwards compatibility -->
<a id="schemaentityfilter"></a>
<a id="schema_EntityFilter"></a>
<a id="tocSentityfilter"></a>
<a id="tocsentityfilter"></a>

```json
{
  "name": {},
  "value": {}
}
```

An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_EntityFilterValue">EntityFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaentityfiltervalue"></a>
<a id="schema_EntityFilterValue"></a>
<a id="tocSentityfiltervalue"></a>
<a id="tocsentityfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_EntityFilters">EntityFilters</h2>
<!-- backwards compatibility -->
<a id="schemaentityfilters"></a>
<a id="schema_EntityFilters"></a>
<a id="tocSentityfilters"></a>
<a id="tocsentityfilters"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_EntityTypes">EntityTypes</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypes"></a>
<a id="schema_EntityTypes"></a>
<a id="tocSentitytypes"></a>
<a id="tocsentitytypes"></a>

```json
[
  "DEVICE"
]
```

<h2 id="tocS_FlowExecutionEventType">FlowExecutionEventType</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutioneventtype"></a>
<a id="schema_FlowExecutionEventType"></a>
<a id="tocSflowexecutioneventtype"></a>
<a id="tocsflowexecutioneventtype"></a>

```json
"EXECUTION_STARTED"
```

<h2 id="tocS_FlowExecutionId">FlowExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionid"></a>
<a id="schema_FlowExecutionId"></a>
<a id="tocSflowexecutionid"></a>
<a id="tocsflowexecutionid"></a>

```json
"string"
```

<h2 id="tocS_FlowExecutionMessageId">FlowExecutionMessageId</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionmessageid"></a>
<a id="schema_FlowExecutionMessageId"></a>
<a id="tocSflowexecutionmessageid"></a>
<a id="tocsflowexecutionmessageid"></a>

```json
"string"
```

<h2 id="tocS_FlowExecutionMessagePayload">FlowExecutionMessagePayload</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionmessagepayload"></a>
<a id="schema_FlowExecutionMessagePayload"></a>
<a id="tocSflowexecutionmessagepayload"></a>
<a id="tocsflowexecutionmessagepayload"></a>

```json
"string"
```

<h2 id="tocS_FlowExecutionMessage">FlowExecutionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionmessage"></a>
<a id="schema_FlowExecutionMessage"></a>
<a id="tocSflowexecutionmessage"></a>
<a id="tocsflowexecutionmessage"></a>

```json
{
  "messageId": {},
  "eventType": {},
  "timestamp": {},
  "payload": {}
}
```

An object that contains information about a flow event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|false|none|none|
|eventType|object|false|none|none|
|timestamp|object|false|none|none|
|payload|object|false|none|none|

<h2 id="tocS_FlowExecutionMessages">FlowExecutionMessages</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionmessages"></a>
<a id="schema_FlowExecutionMessages"></a>
<a id="tocSflowexecutionmessages"></a>
<a id="tocsflowexecutionmessages"></a>

```json
[
  {
    "messageId": {},
    "eventType": {},
    "timestamp": {},
    "payload": {}
  }
]
```

<h2 id="tocS_FlowExecutionStatus">FlowExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionstatus"></a>
<a id="schema_FlowExecutionStatus"></a>
<a id="tocSflowexecutionstatus"></a>
<a id="tocsflowexecutionstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_FlowExecutionSummary">FlowExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionsummary"></a>
<a id="schema_FlowExecutionSummary"></a>
<a id="tocSflowexecutionsummary"></a>
<a id="tocsflowexecutionsummary"></a>

```json
{
  "flowExecutionId": {},
  "status": {},
  "systemInstanceId": {},
  "flowTemplateId": {},
  "createdAt": {},
  "updatedAt": {}
}
```

An object that contains summary information about a flow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowExecutionId|object|false|none|none|
|status|object|false|none|none|
|systemInstanceId|object|false|none|none|
|flowTemplateId|object|false|none|none|
|createdAt|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_FlowExecutionSummaries">FlowExecutionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionsummaries"></a>
<a id="schema_FlowExecutionSummaries"></a>
<a id="tocSflowexecutionsummaries"></a>
<a id="tocsflowexecutionsummaries"></a>

```json
[
  {
    "flowExecutionId": {},
    "status": {},
    "systemInstanceId": {},
    "flowTemplateId": {},
    "createdAt": {},
    "updatedAt": {}
  }
]
```

<h2 id="tocS_FlowTemplateDescription">FlowTemplateDescription</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatedescription"></a>
<a id="schema_FlowTemplateDescription"></a>
<a id="tocSflowtemplatedescription"></a>
<a id="tocsflowtemplatedescription"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  },
  "definition": {
    "language": {},
    "text": {}
  },
  "validatedNamespaceVersion": {}
}
```

An object that contains a workflow's definition and summary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|
|definition|object|false|none|none|
|validatedNamespaceVersion|object|false|none|none|

<h2 id="tocS_FlowTemplateFilterName">FlowTemplateFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatefiltername"></a>
<a id="schema_FlowTemplateFilterName"></a>
<a id="tocSflowtemplatefiltername"></a>
<a id="tocsflowtemplatefiltername"></a>

```json
"DEVICE_MODEL_ID"
```

<h2 id="tocS_FlowTemplateFilterValues">FlowTemplateFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatefiltervalues"></a>
<a id="schema_FlowTemplateFilterValues"></a>
<a id="tocSflowtemplatefiltervalues"></a>
<a id="tocsflowtemplatefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FlowTemplateFilter">FlowTemplateFilter</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatefilter"></a>
<a id="schema_FlowTemplateFilter"></a>
<a id="tocSflowtemplatefilter"></a>
<a id="tocsflowtemplatefilter"></a>

```json
{
  "name": {},
  "value": {}
}
```

An object that filters a workflow search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_FlowTemplateFilterValue">FlowTemplateFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatefiltervalue"></a>
<a id="schema_FlowTemplateFilterValue"></a>
<a id="tocSflowtemplatefiltervalue"></a>
<a id="tocsflowtemplatefiltervalue"></a>

```json
"string"
```

<h2 id="tocS_FlowTemplateFilters">FlowTemplateFilters</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatefilters"></a>
<a id="schema_FlowTemplateFilters"></a>
<a id="tocSflowtemplatefilters"></a>
<a id="tocsflowtemplatefilters"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_FlowTemplateSummaries">FlowTemplateSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaflowtemplatesummaries"></a>
<a id="schema_FlowTemplateSummaries"></a>
<a id="tocSflowtemplatesummaries"></a>
<a id="tocsflowtemplatesummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  }
]
```

<h2 id="tocS_Urns">Urns</h2>
<!-- backwards compatibility -->
<a id="schemaurns"></a>
<a id="schema_Urns"></a>
<a id="tocSurns"></a>
<a id="tocsurns"></a>

```json
[
  "string"
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
1
```

<h2 id="tocS_NamespaceDeletionStatus">NamespaceDeletionStatus</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedeletionstatus"></a>
<a id="schema_NamespaceDeletionStatus"></a>
<a id="tocSnamespacedeletionstatus"></a>
<a id="tocsnamespacedeletionstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_NamespaceDeletionStatusErrorCodes">NamespaceDeletionStatusErrorCodes</h2>
<!-- backwards compatibility -->
<a id="schemanamespacedeletionstatuserrorcodes"></a>
<a id="schema_NamespaceDeletionStatusErrorCodes"></a>
<a id="tocSnamespacedeletionstatuserrorcodes"></a>
<a id="tocsnamespacedeletionstatuserrorcodes"></a>

```json
"VALIDATION_FAILED"
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

<h2 id="tocS_SystemInstanceDescription">SystemInstanceDescription</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancedescription"></a>
<a id="schema_SystemInstanceDescription"></a>
<a id="tocSsysteminstancedescription"></a>
<a id="tocssysteminstancedescription"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
  },
  "definition": {
    "language": {},
    "text": {}
  },
  "s3BucketName": {},
  "metricsConfiguration": {
    "cloudMetricEnabled": {},
    "metricRuleRoleArn": {}
  },
  "validatedNamespaceVersion": {},
  "validatedDependencyRevisions": {},
  "flowActionsRoleArn": {}
}
```

An object that contains a system instance definition and summary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|
|definition|[DefinitionDocument](#schemadefinitiondocument)|false|none|A document that defines an entity. |
|s3BucketName|object|false|none|none|
|metricsConfiguration|[MetricsConfiguration](#schemametricsconfiguration)|false|none|An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.|
|validatedNamespaceVersion|object|false|none|none|
|validatedDependencyRevisions|object|false|none|none|
|flowActionsRoleArn|object|false|none|none|

<h2 id="tocS_SystemTemplateDescription">SystemTemplateDescription</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatedescription"></a>
<a id="schema_SystemTemplateDescription"></a>
<a id="tocSsystemtemplatedescription"></a>
<a id="tocssystemtemplatedescription"></a>

```json
{
  "summary": {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  },
  "definition": {
    "language": {},
    "text": {}
  },
  "validatedNamespaceVersion": {}
}
```

An object that contains a system's definition document and summary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|
|definition|object|false|none|none|
|validatedNamespaceVersion|object|false|none|none|

<h2 id="tocS_SystemTemplateSummaries">SystemTemplateSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatesummaries"></a>
<a id="schema_SystemTemplateSummaries"></a>
<a id="tocSsystemtemplatesummaries"></a>
<a id="tocssystemtemplatesummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "revisionNumber": {},
    "createdAt": {}
  }
]
```

<h2 id="tocS_UploadId">UploadId</h2>
<!-- backwards compatibility -->
<a id="schemauploadid"></a>
<a id="schema_UploadId"></a>
<a id="tocSuploadid"></a>
<a id="tocsuploadid"></a>

```json
"string"
```

<h2 id="tocS_UploadStatus">UploadStatus</h2>
<!-- backwards compatibility -->
<a id="schemauploadstatus"></a>
<a id="schema_UploadStatus"></a>
<a id="tocSuploadstatus"></a>
<a id="tocsuploadstatus"></a>

```json
"IN_PROGRESS"
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

<h2 id="tocS_GreengrassGroupId">GreengrassGroupId</h2>
<!-- backwards compatibility -->
<a id="schemagreengrassgroupid"></a>
<a id="schema_GreengrassGroupId"></a>
<a id="tocSgreengrassgroupid"></a>
<a id="tocsgreengrassgroupid"></a>

```json
"string"
```

<h2 id="tocS_GreengrassGroupVersionId">GreengrassGroupVersionId</h2>
<!-- backwards compatibility -->
<a id="schemagreengrassgroupversionid"></a>
<a id="schema_GreengrassGroupVersionId"></a>
<a id="tocSgreengrassgroupversionid"></a>
<a id="tocsgreengrassgroupversionid"></a>

```json
"string"
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

<h2 id="tocS_SystemInstanceFilters">SystemInstanceFilters</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancefilters"></a>
<a id="schema_SystemInstanceFilters"></a>
<a id="tocSsysteminstancefilters"></a>
<a id="tocssysteminstancefilters"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_SystemInstanceSummaries">SystemInstanceSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancesummaries"></a>
<a id="schema_SystemInstanceSummaries"></a>
<a id="tocSsysteminstancesummaries"></a>
<a id="tocssysteminstancesummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "status": {},
    "target": {},
    "greengrassGroupName": {},
    "createdAt": {},
    "updatedAt": {},
    "greengrassGroupId": {},
    "greengrassGroupVersionId": {}
  }
]
```

<h2 id="tocS_SystemTemplateFilters">SystemTemplateFilters</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatefilters"></a>
<a id="schema_SystemTemplateFilters"></a>
<a id="tocSsystemtemplatefilters"></a>
<a id="tocssystemtemplatefilters"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_Things">Things</h2>
<!-- backwards compatibility -->
<a id="schemathings"></a>
<a id="schema_Things"></a>
<a id="tocSthings"></a>
<a id="tocsthings"></a>

```json
[
  {
    "thingArn": {},
    "thingName": {}
  }
]
```

<h2 id="tocS_SyncWithPublicNamespace">SyncWithPublicNamespace</h2>
<!-- backwards compatibility -->
<a id="schemasyncwithpublicnamespace"></a>
<a id="schema_SyncWithPublicNamespace"></a>
<a id="tocSsyncwithpublicnamespace"></a>
<a id="tocssyncwithpublicnamespace"></a>

```json
true
```

<h2 id="tocS_SystemInstanceDeploymentStatus">SystemInstanceDeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancedeploymentstatus"></a>
<a id="schema_SystemInstanceDeploymentStatus"></a>
<a id="tocSsysteminstancedeploymentstatus"></a>
<a id="tocssysteminstancedeploymentstatus"></a>

```json
"NOT_DEPLOYED"
```

<h2 id="tocS_SystemInstanceFilterName">SystemInstanceFilterName</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancefiltername"></a>
<a id="schema_SystemInstanceFilterName"></a>
<a id="tocSsysteminstancefiltername"></a>
<a id="tocssysteminstancefiltername"></a>

```json
"SYSTEM_TEMPLATE_ID"
```

<h2 id="tocS_SystemInstanceFilterValues">SystemInstanceFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancefiltervalues"></a>
<a id="schema_SystemInstanceFilterValues"></a>
<a id="tocSsysteminstancefiltervalues"></a>
<a id="tocssysteminstancefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SystemInstanceFilter">SystemInstanceFilter</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancefilter"></a>
<a id="schema_SystemInstanceFilter"></a>
<a id="tocSsysteminstancefilter"></a>
<a id="tocssysteminstancefilter"></a>

```json
{
  "name": {},
  "value": {}
}
```

An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SystemInstanceFilterValue">SystemInstanceFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemasysteminstancefiltervalue"></a>
<a id="schema_SystemInstanceFilterValue"></a>
<a id="tocSsysteminstancefiltervalue"></a>
<a id="tocssysteminstancefiltervalue"></a>

```json
"string"
```

<h2 id="tocS_SystemTemplateFilterName">SystemTemplateFilterName</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatefiltername"></a>
<a id="schema_SystemTemplateFilterName"></a>
<a id="tocSsystemtemplatefiltername"></a>
<a id="tocssystemtemplatefiltername"></a>

```json
"FLOW_TEMPLATE_ID"
```

<h2 id="tocS_SystemTemplateFilterValues">SystemTemplateFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatefiltervalues"></a>
<a id="schema_SystemTemplateFilterValues"></a>
<a id="tocSsystemtemplatefiltervalues"></a>
<a id="tocssystemtemplatefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SystemTemplateFilter">SystemTemplateFilter</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatefilter"></a>
<a id="schema_SystemTemplateFilter"></a>
<a id="tocSsystemtemplatefilter"></a>
<a id="tocssystemtemplatefilter"></a>

```json
{
  "name": {},
  "value": {}
}
```

An object that filters a system search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_SystemTemplateFilterValue">SystemTemplateFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemasystemtemplatefiltervalue"></a>
<a id="schema_SystemTemplateFilterValue"></a>
<a id="tocSsystemtemplatefiltervalue"></a>
<a id="tocssystemtemplatefiltervalue"></a>

```json
"string"
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

Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

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

<h2 id="tocS_ThingArn">ThingArn</h2>
<!-- backwards compatibility -->
<a id="schemathingarn"></a>
<a id="schema_ThingArn"></a>
<a id="tocSthingarn"></a>
<a id="tocsthingarn"></a>

```json
"string"
```

<h2 id="tocS_Thing">Thing</h2>
<!-- backwards compatibility -->
<a id="schemathing"></a>
<a id="schema_Thing"></a>
<a id="tocSthing"></a>
<a id="tocsthing"></a>

```json
{
  "thingArn": {},
  "thingName": {}
}
```

An AWS IoT thing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingArn|object|false|none|none|
|thingName|object|false|none|none|
