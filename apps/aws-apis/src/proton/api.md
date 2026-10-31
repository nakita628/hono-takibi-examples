<h1 id="aws-proton">AWS Proton v2020-07-20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton service.</p> <p>The documentation for each action shows the Query API request parameters and the XML response.</p> <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User Guide</a>.</p> <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in turn, select from the available service templates to automate their application or service deployments.</p> <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need permissions to use all of the listed API operations.</p> <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To monitor their applications that are running on Proton, developers need permissions to the service <i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i> API operations and the service instance <i>list</i> and <i>update</i> API operations.</p> <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p> <p> <b>Ensuring Idempotency</b> </p> <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are complete. Operations might also time out or encounter other server issues before they're complete, even if the request already returned a result. This might make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation occurs multiple times. This means that you might create more resources than you intended.</p> <p> <i>Idempotency</i> ensures that an API request action completes no more than one time. With an idempotent request, if the original request action completes successfully, any subsequent retries complete successfully without performing any further actions. However, the result might contain updated information, such as the current creation status.</p> <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p> <p> <b>Idempotent create APIs with a client token</b> </p> <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions, specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically provided by SDKs.</p> <p>Given a request action that has succeeded:</p> <p>If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is created.</p> <p>If the original resource is deleted and you retry the request, a new resource is created.</p> <p>Idempotent create APIs with a client token:</p> <ul> <li> <p>CreateEnvironmentTemplateVersion</p> </li> <li> <p>CreateServiceTemplateVersion</p> </li> <li> <p>CreateEnvironmentAccountConnection</p> </li> </ul> <p> <b>Idempotent create APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been modified, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p> <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Idempotent create APIs:</p> <ul> <li> <p>CreateEnvironmentTemplate</p> </li> <li> <p>CreateServiceTemplate</p> </li> <li> <p>CreateEnvironment</p> </li> <li> <p>CreateService</p> </li> </ul> <p> <b>Idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response.</p> <p>If you retry and the resource doesn't exist, the response is empty.</p> <p>In both cases, the retry succeeds.</p> <p>Idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironmentTemplate</p> </li> <li> <p>DeleteEnvironmentTemplateVersion</p> </li> <li> <p>DeleteServiceTemplate</p> </li> <li> <p>DeleteServiceTemplateVersion</p> </li> <li> <p>DeleteEnvironmentAccountConnection</p> </li> </ul> <p> <b>Asynchronous idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, if the original request delete operation status is <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any further actions.</p> <p>If the original request delete operation is complete, a retry returns an empty response.</p> <p>Asynchronous idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironment</p> </li> <li> <p>DeleteService</p> </li> </ul>

Base URLs:

* <a href="http://proton.us-east-1.amazonaws.com">http://proton.us-east-1.amazonaws.com</a> - The AWS Proton multi-region endpoint

* <a href="https://proton.us-east-1.amazonaws.com">https://proton.us-east-1.amazonaws.com</a> - The AWS Proton multi-region endpoint

* <a href="http://proton.cn-north-1.amazonaws.com.cn">http://proton.cn-north-1.amazonaws.com.cn</a> - The AWS Proton endpoint for China (Beijing) and China (Ningxia)

* <a href="https://proton.cn-north-1.amazonaws.com.cn">https://proton.cn-north-1.amazonaws.com.cn</a> - The AWS Proton endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/proton/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-proton-default">Default</h1>

## AcceptEnvironmentAccountConnection

<a id="opIdAcceptEnvironmentAccountConnection"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.AcceptEnvironmentAccountConnection' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection`

<p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="acceptenvironmentaccountconnection-parameters">Parameters</h3>

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
|body|body|[AcceptEnvironmentAccountConnectionInput](#schemaacceptenvironmentaccountconnectioninput)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.AcceptEnvironmentAccountConnection|

> Example responses

> 200 Response

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
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

> 485 Response

```json
null
```

<h3 id="acceptenvironmentaccountconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptEnvironmentAccountConnectionOutput](#schemaacceptenvironmentaccountconnectionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelComponentDeployment

<a id="opIdCancelComponentDeployment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CancelComponentDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CancelComponentDeployment' \
  -d '{
    "componentName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CancelComponentDeployment`

<p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "componentName": {}
}
```

<h3 id="cancelcomponentdeployment-parameters">Parameters</h3>

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
|body|body|[CancelComponentDeploymentInput](#schemacancelcomponentdeploymentinput)|true|none|
|» componentName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CancelComponentDeployment|

> Example responses

> 200 Response

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
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

<h3 id="cancelcomponentdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelComponentDeploymentOutput](#schemacancelcomponentdeploymentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelEnvironmentDeployment

<a id="opIdCancelEnvironmentDeployment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CancelEnvironmentDeployment' \
  -d '{
    "environmentName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment`

<p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

> Body parameter

```json
{
  "environmentName": {}
}
```

<h3 id="cancelenvironmentdeployment-parameters">Parameters</h3>

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
|body|body|[CancelEnvironmentDeploymentInput](#schemacancelenvironmentdeploymentinput)|true|none|
|» environmentName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CancelEnvironmentDeployment|

> Example responses

> 200 Response

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="cancelenvironmentdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelEnvironmentDeploymentOutput](#schemacancelenvironmentdeploymentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelServiceInstanceDeployment

<a id="opIdCancelServiceInstanceDeployment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CancelServiceInstanceDeployment' \
  -d '{
    "serviceInstanceName": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment`

<p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

> Body parameter

```json
{
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<h3 id="cancelserviceinstancedeployment-parameters">Parameters</h3>

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
|body|body|[CancelServiceInstanceDeploymentInput](#schemacancelserviceinstancedeploymentinput)|true|none|
|» serviceInstanceName|body|object|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CancelServiceInstanceDeployment|

> Example responses

> 200 Response

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="cancelserviceinstancedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelServiceInstanceDeploymentOutput](#schemacancelserviceinstancedeploymentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelServicePipelineDeployment

<a id="opIdCancelServicePipelineDeployment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CancelServicePipelineDeployment' \
  -d '{
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment`

<p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

> Body parameter

```json
{
  "serviceName": {}
}
```

<h3 id="cancelservicepipelinedeployment-parameters">Parameters</h3>

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
|body|body|[CancelServicePipelineDeploymentInput](#schemacancelservicepipelinedeploymentinput)|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CancelServicePipelineDeployment|

> Example responses

> 200 Response

```json
{
  "pipeline": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="cancelservicepipelinedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelServicePipelineDeploymentOutput](#schemacancelservicepipelinedeploymentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateComponent

<a id="opIdCreateComponent"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateComponent' \
  -d '{
    "clientToken": {},
    "description": {},
    "environmentName": {},
    "manifest": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {},
    "tags": {},
    "templateFile": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateComponent`

<p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "clientToken": {},
  "description": {},
  "environmentName": {},
  "manifest": {},
  "name": {},
  "serviceInstanceName": {},
  "serviceName": {},
  "serviceSpec": {},
  "tags": {},
  "templateFile": {}
}
```

<h3 id="createcomponent-parameters">Parameters</h3>

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
|body|body|[CreateComponentInput](#schemacreatecomponentinput)|true|none|
|» clientToken|body|object|false|none|
|» description|body|object|false|none|
|» environmentName|body|object|false|none|
|» manifest|body|object|true|none|
|» name|body|object|true|none|
|» serviceInstanceName|body|object|false|none|
|» serviceName|body|object|false|none|
|» serviceSpec|body|object|false|none|
|» tags|body|object|false|none|
|» templateFile|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateComponent|

> Example responses

> 200 Response

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
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

<h3 id="createcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateComponentOutput](#schemacreatecomponentoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEnvironment

<a id="opIdCreateEnvironment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateEnvironment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateEnvironment' \
  -d '{
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioningRepository": {
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "tags": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateEnvironment`

<p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "description": {},
  "environmentAccountConnectionId": {},
  "name": {},
  "protonServiceRoleArn": {},
  "provisioningRepository": {
    "branch": {},
    "name": {},
    "provider": {}
  },
  "spec": {},
  "tags": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

<h3 id="createenvironment-parameters">Parameters</h3>

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
|body|body|[CreateEnvironmentInput](#schemacreateenvironmentinput)|true|none|
|» codebuildRoleArn|body|object|false|none|
|» componentRoleArn|body|object|false|none|
|» description|body|object|false|none|
|» environmentAccountConnectionId|body|object|false|none|
|» name|body|object|true|none|
|» protonServiceRoleArn|body|object|false|none|
|» provisioningRepository|body|object|false|none|
|» » branch|body|object|true|none|
|» » name|body|object|true|none|
|» » provider|body|object|true|none|
|» spec|body|object|true|none|
|» tags|body|object|false|none|
|» templateMajorVersion|body|object|true|none|
|» templateMinorVersion|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateEnvironment|

> Example responses

> 200 Response

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="createenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEnvironmentOutput](#schemacreateenvironmentoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEnvironmentAccountConnection

<a id="opIdCreateEnvironmentAccountConnection"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateEnvironmentAccountConnection' \
  -d '{
    "clientToken": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentName": {},
    "managementAccountId": {},
    "roleArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection`

<p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

> Body parameter

```json
{
  "clientToken": {},
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "environmentName": {},
  "managementAccountId": {},
  "roleArn": {},
  "tags": {}
}
```

<h3 id="createenvironmentaccountconnection-parameters">Parameters</h3>

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
|body|body|[CreateEnvironmentAccountConnectionInput](#schemacreateenvironmentaccountconnectioninput)|true|none|
|» clientToken|body|object|false|none|
|» codebuildRoleArn|body|object|false|none|
|» componentRoleArn|body|object|false|none|
|» environmentName|body|object|true|none|
|» managementAccountId|body|object|true|none|
|» roleArn|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateEnvironmentAccountConnection|

> Example responses

> 200 Response

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
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

> 485 Response

```json
null
```

<h3 id="createenvironmentaccountconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEnvironmentAccountConnectionOutput](#schemacreateenvironmentaccountconnectionoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEnvironmentTemplate

<a id="opIdCreateEnvironmentTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateEnvironmentTemplate' \
  -d '{
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "name": {},
    "provisioning": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate`

<p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>

> Body parameter

```json
{
  "description": {},
  "displayName": {},
  "encryptionKey": {},
  "name": {},
  "provisioning": {},
  "tags": {}
}
```

<h3 id="createenvironmenttemplate-parameters">Parameters</h3>

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
|body|body|[CreateEnvironmentTemplateInput](#schemacreateenvironmenttemplateinput)|true|none|
|» description|body|object|false|none|
|» displayName|body|object|false|none|
|» encryptionKey|body|object|false|none|
|» name|body|object|true|none|
|» provisioning|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateEnvironmentTemplate|

> Example responses

> 200 Response

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
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

<h3 id="createenvironmenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEnvironmentTemplateOutput](#schemacreateenvironmenttemplateoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEnvironmentTemplateVersion

<a id="opIdCreateEnvironmentTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateEnvironmentTemplateVersion' \
  -d '{
    "clientToken": {},
    "description": {},
    "majorVersion": {},
    "source": {
      "s3": {
        "bucket": {},
        "key": {}
      }
    },
    "tags": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion`

Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.

> Body parameter

```json
{
  "clientToken": {},
  "description": {},
  "majorVersion": {},
  "source": {
    "s3": {
      "bucket": {},
      "key": {}
    }
  },
  "tags": {},
  "templateName": {}
}
```

<h3 id="createenvironmenttemplateversion-parameters">Parameters</h3>

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
|body|body|[CreateEnvironmentTemplateVersionInput](#schemacreateenvironmenttemplateversioninput)|true|none|
|» clientToken|body|object|false|none|
|» description|body|object|false|none|
|» majorVersion|body|object|false|none|
|» source|body|object|true|none|
|» » s3|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » key|body|object|true|none|
|» tags|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateEnvironmentTemplateVersion|

> Example responses

> 200 Response

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="createenvironmenttemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEnvironmentTemplateVersionOutput](#schemacreateenvironmenttemplateversionoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRepository

<a id="opIdCreateRepository"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateRepository' \
  -d '{
    "connectionArn": {},
    "encryptionKey": {},
    "name": {},
    "provider": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateRepository`

<p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "connectionArn": {},
  "encryptionKey": {},
  "name": {},
  "provider": {},
  "tags": {}
}
```

<h3 id="createrepository-parameters">Parameters</h3>

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
|body|body|[CreateRepositoryInput](#schemacreaterepositoryinput)|true|none|
|» connectionArn|body|object|true|none|
|» encryptionKey|body|object|false|none|
|» name|body|object|true|none|
|» provider|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateRepository|

> Example responses

> 200 Response

```json
{
  "repository": {
    "arn": {},
    "connectionArn": {},
    "encryptionKey": {},
    "name": {},
    "provider": {}
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

<h3 id="createrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRepositoryOutput](#schemacreaterepositoryoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateService

<a id="opIdCreateService"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateService' \
  -d '{
    "branchName": {},
    "description": {},
    "name": {},
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "tags": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateService`

Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.

> Body parameter

```json
{
  "branchName": {},
  "description": {},
  "name": {},
  "repositoryConnectionArn": {},
  "repositoryId": {},
  "spec": {},
  "tags": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

<h3 id="createservice-parameters">Parameters</h3>

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
|body|body|[CreateServiceInput](#schemacreateserviceinput)|true|none|
|» branchName|body|object|false|none|
|» description|body|object|false|none|
|» name|body|object|true|none|
|» repositoryConnectionArn|body|object|false|none|
|» repositoryId|body|object|false|none|
|» spec|body|object|true|none|
|» tags|body|object|false|none|
|» templateMajorVersion|body|object|true|none|
|» templateMinorVersion|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateService|

> Example responses

> 200 Response

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="createservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceOutput](#schemacreateserviceoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServiceInstance

<a id="opIdCreateServiceInstance"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateServiceInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateServiceInstance' \
  -d '{
    "clientToken": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "tags": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateServiceInstance`

Create a service instance.

> Body parameter

```json
{
  "clientToken": {},
  "name": {},
  "serviceName": {},
  "spec": {},
  "tags": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

<h3 id="createserviceinstance-parameters">Parameters</h3>

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
|body|body|[CreateServiceInstanceInput](#schemacreateserviceinstanceinput)|true|none|
|» clientToken|body|object|false|none|
|» name|body|object|true|none|
|» serviceName|body|object|true|none|
|» spec|body|object|true|none|
|» tags|body|object|false|none|
|» templateMajorVersion|body|object|false|none|
|» templateMinorVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateServiceInstance|

> Example responses

> 200 Response

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="createserviceinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceInstanceOutput](#schemacreateserviceinstanceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServiceSyncConfig

<a id="opIdCreateServiceSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateServiceSyncConfig' \
  -d '{
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig`

Create the Proton Ops configuration file.

> Body parameter

```json
{
  "branch": {},
  "filePath": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "serviceName": {}
}
```

<h3 id="createservicesyncconfig-parameters">Parameters</h3>

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
|body|body|[CreateServiceSyncConfigInput](#schemacreateservicesyncconfiginput)|true|none|
|» branch|body|object|true|none|
|» filePath|body|object|true|none|
|» repositoryName|body|object|true|none|
|» repositoryProvider|body|object|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateServiceSyncConfig|

> Example responses

> 200 Response

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
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

<h3 id="createservicesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceSyncConfigOutput](#schemacreateservicesyncconfigoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServiceTemplate

<a id="opIdCreateServiceTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateServiceTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateServiceTemplate' \
  -d '{
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "name": {},
    "pipelineProvisioning": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateServiceTemplate`

Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.

> Body parameter

```json
{
  "description": {},
  "displayName": {},
  "encryptionKey": {},
  "name": {},
  "pipelineProvisioning": {},
  "tags": {}
}
```

<h3 id="createservicetemplate-parameters">Parameters</h3>

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
|body|body|[CreateServiceTemplateInput](#schemacreateservicetemplateinput)|true|none|
|» description|body|object|false|none|
|» displayName|body|object|false|none|
|» encryptionKey|body|object|false|none|
|» name|body|object|true|none|
|» pipelineProvisioning|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateServiceTemplate|

> Example responses

> 200 Response

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
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

<h3 id="createservicetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceTemplateOutput](#schemacreateservicetemplateoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServiceTemplateVersion

<a id="opIdCreateServiceTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateServiceTemplateVersion' \
  -d '{
    "clientToken": {},
    "compatibleEnvironmentTemplates": {},
    "description": {},
    "majorVersion": {},
    "source": {
      "s3": {
        "bucket": {},
        "key": {}
      }
    },
    "supportedComponentSources": {},
    "tags": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion`

Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.

> Body parameter

```json
{
  "clientToken": {},
  "compatibleEnvironmentTemplates": {},
  "description": {},
  "majorVersion": {},
  "source": {
    "s3": {
      "bucket": {},
      "key": {}
    }
  },
  "supportedComponentSources": {},
  "tags": {},
  "templateName": {}
}
```

<h3 id="createservicetemplateversion-parameters">Parameters</h3>

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
|body|body|[CreateServiceTemplateVersionInput](#schemacreateservicetemplateversioninput)|true|none|
|» clientToken|body|object|false|none|
|» compatibleEnvironmentTemplates|body|object|true|none|
|» description|body|object|false|none|
|» majorVersion|body|object|false|none|
|» source|body|object|true|none|
|» » s3|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » key|body|object|true|none|
|» supportedComponentSources|body|object|false|none|
|» tags|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateServiceTemplateVersion|

> Example responses

> 200 Response

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
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

<h3 id="createservicetemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceTemplateVersionOutput](#schemacreateservicetemplateversionoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTemplateSyncConfig

<a id="opIdCreateTemplateSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.CreateTemplateSyncConfig' \
  -d '{
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig`

<p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "branch": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "subdirectory": {},
  "templateName": {},
  "templateType": {}
}
```

<h3 id="createtemplatesyncconfig-parameters">Parameters</h3>

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
|body|body|[CreateTemplateSyncConfigInput](#schemacreatetemplatesyncconfiginput)|true|none|
|» branch|body|object|true|none|
|» repositoryName|body|object|true|none|
|» repositoryProvider|body|object|true|none|
|» subdirectory|body|object|false|none|
|» templateName|body|object|true|none|
|» templateType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.CreateTemplateSyncConfig|

> Example responses

> 200 Response

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
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

<h3 id="createtemplatesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTemplateSyncConfigOutput](#schemacreatetemplatesyncconfigoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteComponent

<a id="opIdDeleteComponent"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteComponent' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteComponent`

<p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deletecomponent-parameters">Parameters</h3>

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
|body|body|[DeleteComponentInput](#schemadeletecomponentinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteComponent|

> Example responses

> 200 Response

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
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

<h3 id="deletecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteComponentOutput](#schemadeletecomponentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEnvironment

<a id="opIdDeleteEnvironment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteEnvironment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteEnvironment' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteEnvironment`

Delete an environment.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteenvironment-parameters">Parameters</h3>

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
|body|body|[DeleteEnvironmentInput](#schemadeleteenvironmentinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteEnvironment|

> Example responses

> 200 Response

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="deleteenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEnvironmentOutput](#schemadeleteenvironmentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEnvironmentAccountConnection

<a id="opIdDeleteEnvironmentAccountConnection"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteEnvironmentAccountConnection' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection`

<p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="deleteenvironmentaccountconnection-parameters">Parameters</h3>

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
|body|body|[DeleteEnvironmentAccountConnectionInput](#schemadeleteenvironmentaccountconnectioninput)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteEnvironmentAccountConnection|

> Example responses

> 200 Response

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
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

> 485 Response

```json
null
```

<h3 id="deleteenvironmentaccountconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEnvironmentAccountConnectionOutput](#schemadeleteenvironmentaccountconnectionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEnvironmentTemplate

<a id="opIdDeleteEnvironmentTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteEnvironmentTemplate' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate`

If no other major or minor versions of an environment template exist, delete the environment template.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteenvironmenttemplate-parameters">Parameters</h3>

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
|body|body|[DeleteEnvironmentTemplateInput](#schemadeleteenvironmenttemplateinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteEnvironmentTemplate|

> Example responses

> 200 Response

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
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

<h3 id="deleteenvironmenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEnvironmentTemplateOutput](#schemadeleteenvironmenttemplateoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEnvironmentTemplateVersion

<a id="opIdDeleteEnvironmentTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteEnvironmentTemplateVersion' \
  -d '{
    "majorVersion": {},
    "minorVersion": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion`

<p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>

> Body parameter

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

<h3 id="deleteenvironmenttemplateversion-parameters">Parameters</h3>

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
|body|body|[DeleteEnvironmentTemplateVersionInput](#schemadeleteenvironmenttemplateversioninput)|true|none|
|» majorVersion|body|object|true|none|
|» minorVersion|body|object|true|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteEnvironmentTemplateVersion|

> Example responses

> 200 Response

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="deleteenvironmenttemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEnvironmentTemplateVersionOutput](#schemadeleteenvironmenttemplateversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepository

<a id="opIdDeleteRepository"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteRepository' \
  -d '{
    "name": {},
    "provider": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteRepository`

De-register and unlink your repository.

> Body parameter

```json
{
  "name": {},
  "provider": {}
}
```

<h3 id="deleterepository-parameters">Parameters</h3>

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
|body|body|[DeleteRepositoryInput](#schemadeleterepositoryinput)|true|none|
|» name|body|object|true|none|
|» provider|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteRepository|

> Example responses

> 200 Response

```json
{
  "repository": {
    "arn": {},
    "connectionArn": {},
    "encryptionKey": {},
    "name": {},
    "provider": {}
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

<h3 id="deleterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRepositoryOutput](#schemadeleterepositoryoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteService

<a id="opIdDeleteService"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteService' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteService`

<p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteservice-parameters">Parameters</h3>

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
|body|body|[DeleteServiceInput](#schemadeleteserviceinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteService|

> Example responses

> 200 Response

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="deleteservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceOutput](#schemadeleteserviceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServiceSyncConfig

<a id="opIdDeleteServiceSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteServiceSyncConfig' \
  -d '{
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig`

Delete the Proton Ops file.

> Body parameter

```json
{
  "serviceName": {}
}
```

<h3 id="deleteservicesyncconfig-parameters">Parameters</h3>

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
|body|body|[DeleteServiceSyncConfigInput](#schemadeleteservicesyncconfiginput)|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteServiceSyncConfig|

> Example responses

> 200 Response

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
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

<h3 id="deleteservicesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceSyncConfigOutput](#schemadeleteservicesyncconfigoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServiceTemplate

<a id="opIdDeleteServiceTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteServiceTemplate' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate`

If no other major or minor versions of the service template exist, delete the service template.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteservicetemplate-parameters">Parameters</h3>

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
|body|body|[DeleteServiceTemplateInput](#schemadeleteservicetemplateinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteServiceTemplate|

> Example responses

> 200 Response

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
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

<h3 id="deleteservicetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceTemplateOutput](#schemadeleteservicetemplateoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServiceTemplateVersion

<a id="opIdDeleteServiceTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteServiceTemplateVersion' \
  -d '{
    "majorVersion": {},
    "minorVersion": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion`

<p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>

> Body parameter

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

<h3 id="deleteservicetemplateversion-parameters">Parameters</h3>

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
|body|body|[DeleteServiceTemplateVersionInput](#schemadeleteservicetemplateversioninput)|true|none|
|» majorVersion|body|object|true|none|
|» minorVersion|body|object|true|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteServiceTemplateVersion|

> Example responses

> 200 Response

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
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

<h3 id="deleteservicetemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceTemplateVersionOutput](#schemadeleteservicetemplateversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTemplateSyncConfig

<a id="opIdDeleteTemplateSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.DeleteTemplateSyncConfig' \
  -d '{
    "templateName": {},
    "templateType": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig`

Delete a template sync configuration.

> Body parameter

```json
{
  "templateName": {},
  "templateType": {}
}
```

<h3 id="deletetemplatesyncconfig-parameters">Parameters</h3>

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
|body|body|[DeleteTemplateSyncConfigInput](#schemadeletetemplatesyncconfiginput)|true|none|
|» templateName|body|object|true|none|
|» templateType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.DeleteTemplateSyncConfig|

> Example responses

> 200 Response

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
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

<h3 id="deletetemplatesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTemplateSyncConfigOutput](#schemadeletetemplatesyncconfigoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountSettings

<a id="opIdGetAccountSettings"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetAccountSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetAccountSettings' \
  -d '{}'
```

`POST /#X-Amz-Target=AwsProton20200720.GetAccountSettings`

Get detail data for Proton account-wide settings.

> Body parameter

```json
{}
```

<h3 id="getaccountsettings-parameters">Parameters</h3>

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
|body|body|[GetAccountSettingsInput](#schemagetaccountsettingsinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetAccountSettings|

> Example responses

> 200 Response

```json
{
  "accountSettings": {
    "pipelineCodebuildRoleArn": {},
    "pipelineProvisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "pipelineServiceRoleArn": {}
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

<h3 id="getaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountSettingsOutput](#schemagetaccountsettingsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComponent

<a id="opIdGetComponent"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetComponent' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetComponent`

<p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="getcomponent-parameters">Parameters</h3>

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
|body|body|[GetComponentInput](#schemagetcomponentinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetComponent|

> Example responses

> 200 Response

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
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

<h3 id="getcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComponentOutput](#schemagetcomponentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEnvironment

<a id="opIdGetEnvironment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetEnvironment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetEnvironment' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetEnvironment`

Get detailed data for an environment.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="getenvironment-parameters">Parameters</h3>

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
|body|body|[GetEnvironmentInput](#schemagetenvironmentinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetEnvironment|

> Example responses

> 200 Response

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="getenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEnvironmentOutput](#schemagetenvironmentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEnvironmentAccountConnection

<a id="opIdGetEnvironmentAccountConnection"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetEnvironmentAccountConnection' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection`

<p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="getenvironmentaccountconnection-parameters">Parameters</h3>

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
|body|body|[GetEnvironmentAccountConnectionInput](#schemagetenvironmentaccountconnectioninput)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetEnvironmentAccountConnection|

> Example responses

> 200 Response

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
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

<h3 id="getenvironmentaccountconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEnvironmentAccountConnectionOutput](#schemagetenvironmentaccountconnectionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEnvironmentTemplate

<a id="opIdGetEnvironmentTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetEnvironmentTemplate' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate`

Get detailed data for an environment template.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="getenvironmenttemplate-parameters">Parameters</h3>

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
|body|body|[GetEnvironmentTemplateInput](#schemagetenvironmenttemplateinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetEnvironmentTemplate|

> Example responses

> 200 Response

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
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

<h3 id="getenvironmenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEnvironmentTemplateOutput](#schemagetenvironmenttemplateoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEnvironmentTemplateVersion

<a id="opIdGetEnvironmentTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetEnvironmentTemplateVersion' \
  -d '{
    "majorVersion": {},
    "minorVersion": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion`

Get detailed data for a major or minor version of an environment template.

> Body parameter

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

<h3 id="getenvironmenttemplateversion-parameters">Parameters</h3>

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
|body|body|[GetEnvironmentTemplateVersionInput](#schemagetenvironmenttemplateversioninput)|true|none|
|» majorVersion|body|object|true|none|
|» minorVersion|body|object|true|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetEnvironmentTemplateVersion|

> Example responses

> 200 Response

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="getenvironmenttemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEnvironmentTemplateVersionOutput](#schemagetenvironmenttemplateversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepository

<a id="opIdGetRepository"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetRepository' \
  -d '{
    "name": {},
    "provider": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetRepository`

Get detail data for a linked repository.

> Body parameter

```json
{
  "name": {},
  "provider": {}
}
```

<h3 id="getrepository-parameters">Parameters</h3>

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
|body|body|[GetRepositoryInput](#schemagetrepositoryinput)|true|none|
|» name|body|object|true|none|
|» provider|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetRepository|

> Example responses

> 200 Response

```json
{
  "repository": {
    "arn": {},
    "connectionArn": {},
    "encryptionKey": {},
    "name": {},
    "provider": {}
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

<h3 id="getrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositoryOutput](#schemagetrepositoryoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepositorySyncStatus

<a id="opIdGetRepositorySyncStatus"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetRepositorySyncStatus' \
  -d '{
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "syncType": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus`

<p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>

> Body parameter

```json
{
  "branch": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "syncType": {}
}
```

<h3 id="getrepositorysyncstatus-parameters">Parameters</h3>

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
|body|body|[GetRepositorySyncStatusInput](#schemagetrepositorysyncstatusinput)|true|none|
|» branch|body|object|true|none|
|» repositoryName|body|object|true|none|
|» repositoryProvider|body|object|true|none|
|» syncType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetRepositorySyncStatus|

> Example responses

> 200 Response

```json
{
  "latestSync": {
    "events": {},
    "startedAt": {},
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

<h3 id="getrepositorysyncstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositorySyncStatusOutput](#schemagetrepositorysyncstatusoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcesSummary

<a id="opIdGetResourcesSummary"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetResourcesSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetResourcesSummary' \
  -d '{}'
```

`POST /#X-Amz-Target=AwsProton20200720.GetResourcesSummary`

<p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{}
```

<h3 id="getresourcessummary-parameters">Parameters</h3>

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
|body|body|[GetResourcesSummaryInput](#schemagetresourcessummaryinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetResourcesSummary|

> Example responses

> 200 Response

```json
{
  "counts": {
    "components": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "environmentTemplates": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "environments": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "pipelines": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "serviceInstances": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "serviceTemplates": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "services": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
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

<h3 id="getresourcessummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcesSummaryOutput](#schemagetresourcessummaryoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetService

<a id="opIdGetService"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetService' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetService`

Get detailed data for a service.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="getservice-parameters">Parameters</h3>

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
|body|body|[GetServiceInput](#schemagetserviceinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetService|

> Example responses

> 200 Response

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="getservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceOutput](#schemagetserviceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceInstance

<a id="opIdGetServiceInstance"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetServiceInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetServiceInstance' \
  -d '{
    "name": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetServiceInstance`

Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.

> Body parameter

```json
{
  "name": {},
  "serviceName": {}
}
```

<h3 id="getserviceinstance-parameters">Parameters</h3>

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
|body|body|[GetServiceInstanceInput](#schemagetserviceinstanceinput)|true|none|
|» name|body|object|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetServiceInstance|

> Example responses

> 200 Response

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="getserviceinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceInstanceOutput](#schemagetserviceinstanceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceInstanceSyncStatus

<a id="opIdGetServiceInstanceSyncStatus"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetServiceInstanceSyncStatus' \
  -d '{
    "serviceInstanceName": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus`

Get the status of the synced service instance.

> Body parameter

```json
{
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<h3 id="getserviceinstancesyncstatus-parameters">Parameters</h3>

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
|body|body|[GetServiceInstanceSyncStatusInput](#schemagetserviceinstancesyncstatusinput)|true|none|
|» serviceInstanceName|body|object|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetServiceInstanceSyncStatus|

> Example responses

> 200 Response

```json
{
  "desiredState": {
    "branch": {},
    "directory": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "sha": {}
  },
  "latestSuccessfulSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    }
  },
  "latestSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
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

<h3 id="getserviceinstancesyncstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceInstanceSyncStatusOutput](#schemagetserviceinstancesyncstatusoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceSyncBlockerSummary

<a id="opIdGetServiceSyncBlockerSummary"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetServiceSyncBlockerSummary' \
  -d '{
    "serviceInstanceName": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary`

Get detailed data for the service sync blocker summary.

> Body parameter

```json
{
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<h3 id="getservicesyncblockersummary-parameters">Parameters</h3>

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
|body|body|[GetServiceSyncBlockerSummaryInput](#schemagetservicesyncblockersummaryinput)|true|none|
|» serviceInstanceName|body|object|false|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetServiceSyncBlockerSummary|

> Example responses

> 200 Response

```json
{
  "serviceSyncBlockerSummary": {
    "latestBlockers": {},
    "serviceInstanceName": {},
    "serviceName": {}
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

<h3 id="getservicesyncblockersummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceSyncBlockerSummaryOutput](#schemagetservicesyncblockersummaryoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceSyncConfig

<a id="opIdGetServiceSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetServiceSyncConfig' \
  -d '{
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig`

Get detailed information for the service sync configuration.

> Body parameter

```json
{
  "serviceName": {}
}
```

<h3 id="getservicesyncconfig-parameters">Parameters</h3>

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
|body|body|[GetServiceSyncConfigInput](#schemagetservicesyncconfiginput)|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetServiceSyncConfig|

> Example responses

> 200 Response

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
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

<h3 id="getservicesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceSyncConfigOutput](#schemagetservicesyncconfigoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceTemplate

<a id="opIdGetServiceTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetServiceTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetServiceTemplate' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetServiceTemplate`

Get detailed data for a service template.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="getservicetemplate-parameters">Parameters</h3>

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
|body|body|[GetServiceTemplateInput](#schemagetservicetemplateinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetServiceTemplate|

> Example responses

> 200 Response

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
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

<h3 id="getservicetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceTemplateOutput](#schemagetservicetemplateoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceTemplateVersion

<a id="opIdGetServiceTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetServiceTemplateVersion' \
  -d '{
    "majorVersion": {},
    "minorVersion": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion`

Get detailed data for a major or minor version of a service template.

> Body parameter

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

<h3 id="getservicetemplateversion-parameters">Parameters</h3>

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
|body|body|[GetServiceTemplateVersionInput](#schemagetservicetemplateversioninput)|true|none|
|» majorVersion|body|object|true|none|
|» minorVersion|body|object|true|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetServiceTemplateVersion|

> Example responses

> 200 Response

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
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

<h3 id="getservicetemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceTemplateVersionOutput](#schemagetservicetemplateversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTemplateSyncConfig

<a id="opIdGetTemplateSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetTemplateSyncConfig' \
  -d '{
    "templateName": {},
    "templateType": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig`

Get detail data for a template sync configuration.

> Body parameter

```json
{
  "templateName": {},
  "templateType": {}
}
```

<h3 id="gettemplatesyncconfig-parameters">Parameters</h3>

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
|body|body|[GetTemplateSyncConfigInput](#schemagettemplatesyncconfiginput)|true|none|
|» templateName|body|object|true|none|
|» templateType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetTemplateSyncConfig|

> Example responses

> 200 Response

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
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

<h3 id="gettemplatesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateSyncConfigOutput](#schemagettemplatesyncconfigoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTemplateSyncStatus

<a id="opIdGetTemplateSyncStatus"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.GetTemplateSyncStatus' \
  -d '{
    "templateName": {},
    "templateType": {},
    "templateVersion": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus`

Get the status of a template sync.

> Body parameter

```json
{
  "templateName": {},
  "templateType": {},
  "templateVersion": {}
}
```

<h3 id="gettemplatesyncstatus-parameters">Parameters</h3>

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
|body|body|[GetTemplateSyncStatusInput](#schemagettemplatesyncstatusinput)|true|none|
|» templateName|body|object|true|none|
|» templateType|body|object|true|none|
|» templateVersion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.GetTemplateSyncStatus|

> Example responses

> 200 Response

```json
{
  "desiredState": {
    "branch": {},
    "directory": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "sha": {}
  },
  "latestSuccessfulSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    }
  },
  "latestSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
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

<h3 id="gettemplatesyncstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateSyncStatusOutput](#schemagettemplatesyncstatusoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponentOutputs

<a id="opIdListComponentOutputs"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListComponentOutputs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListComponentOutputs' \
  -d '{
    "componentName": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListComponentOutputs`

<p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "componentName": {},
  "nextToken": {}
}
```

<h3 id="listcomponentoutputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListComponentOutputsInput](#schemalistcomponentoutputsinput)|true|none|
|» componentName|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListComponentOutputs|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "outputs": {}
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

<h3 id="listcomponentoutputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentOutputsOutput](#schemalistcomponentoutputsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponentProvisionedResources

<a id="opIdListComponentProvisionedResources"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListComponentProvisionedResources' \
  -d '{
    "componentName": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources`

<p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "componentName": {},
  "nextToken": {}
}
```

<h3 id="listcomponentprovisionedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListComponentProvisionedResourcesInput](#schemalistcomponentprovisionedresourcesinput)|true|none|
|» componentName|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListComponentProvisionedResources|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "provisionedResources": {}
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

<h3 id="listcomponentprovisionedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentProvisionedResourcesOutput](#schemalistcomponentprovisionedresourcesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponents

<a id="opIdListComponents"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListComponents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListComponents' \
  -d '{
    "environmentName": {},
    "maxResults": {},
    "nextToken": {},
    "serviceInstanceName": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListComponents`

<p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "environmentName": {},
  "maxResults": {},
  "nextToken": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<h3 id="listcomponents-parameters">Parameters</h3>

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
|body|body|[ListComponentsInput](#schemalistcomponentsinput)|true|none|
|» environmentName|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» serviceInstanceName|body|object|false|none|
|» serviceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListComponents|

> Example responses

> 200 Response

```json
{
  "components": {},
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

<h3 id="listcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentsOutput](#schemalistcomponentsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironmentAccountConnections

<a id="opIdListEnvironmentAccountConnections"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListEnvironmentAccountConnections' \
  -d '{
    "environmentName": {},
    "maxResults": {},
    "nextToken": {},
    "requestedBy": {},
    "statuses": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections`

<p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

> Body parameter

```json
{
  "environmentName": {},
  "maxResults": {},
  "nextToken": {},
  "requestedBy": {},
  "statuses": {}
}
```

<h3 id="listenvironmentaccountconnections-parameters">Parameters</h3>

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
|body|body|[ListEnvironmentAccountConnectionsInput](#schemalistenvironmentaccountconnectionsinput)|true|none|
|» environmentName|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» requestedBy|body|object|true|none|
|» statuses|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListEnvironmentAccountConnections|

> Example responses

> 200 Response

```json
{
  "environmentAccountConnections": {},
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

<h3 id="listenvironmentaccountconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentAccountConnectionsOutput](#schemalistenvironmentaccountconnectionsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironmentOutputs

<a id="opIdListEnvironmentOutputs"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListEnvironmentOutputs' \
  -d '{
    "environmentName": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs`

List the infrastructure as code outputs for your environment.

> Body parameter

```json
{
  "environmentName": {},
  "nextToken": {}
}
```

<h3 id="listenvironmentoutputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListEnvironmentOutputsInput](#schemalistenvironmentoutputsinput)|true|none|
|» environmentName|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListEnvironmentOutputs|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "outputs": {}
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

<h3 id="listenvironmentoutputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentOutputsOutput](#schemalistenvironmentoutputsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironmentProvisionedResources

<a id="opIdListEnvironmentProvisionedResources"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListEnvironmentProvisionedResources' \
  -d '{
    "environmentName": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources`

List the provisioned resources for your environment.

> Body parameter

```json
{
  "environmentName": {},
  "nextToken": {}
}
```

<h3 id="listenvironmentprovisionedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListEnvironmentProvisionedResourcesInput](#schemalistenvironmentprovisionedresourcesinput)|true|none|
|» environmentName|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListEnvironmentProvisionedResources|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "provisionedResources": {}
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

<h3 id="listenvironmentprovisionedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentProvisionedResourcesOutput](#schemalistenvironmentprovisionedresourcesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironmentTemplateVersions

<a id="opIdListEnvironmentTemplateVersions"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListEnvironmentTemplateVersions' \
  -d '{
    "majorVersion": {},
    "maxResults": {},
    "nextToken": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions`

List major or minor versions of an environment template with detail data.

> Body parameter

```json
{
  "majorVersion": {},
  "maxResults": {},
  "nextToken": {},
  "templateName": {}
}
```

<h3 id="listenvironmenttemplateversions-parameters">Parameters</h3>

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
|body|body|[ListEnvironmentTemplateVersionsInput](#schemalistenvironmenttemplateversionsinput)|true|none|
|» majorVersion|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListEnvironmentTemplateVersions|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "templateVersions": {}
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

<h3 id="listenvironmenttemplateversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentTemplateVersionsOutput](#schemalistenvironmenttemplateversionsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironmentTemplates

<a id="opIdListEnvironmentTemplates"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListEnvironmentTemplates' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates`

List environment templates.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listenvironmenttemplates-parameters">Parameters</h3>

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
|body|body|[ListEnvironmentTemplatesInput](#schemalistenvironmenttemplatesinput)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListEnvironmentTemplates|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "templates": {}
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

<h3 id="listenvironmenttemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentTemplatesOutput](#schemalistenvironmenttemplatesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironments

<a id="opIdListEnvironments"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListEnvironments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListEnvironments' \
  -d '{
    "environmentTemplates": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListEnvironments`

List environments with detail data summaries.

> Body parameter

```json
{
  "environmentTemplates": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listenvironments-parameters">Parameters</h3>

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
|body|body|[ListEnvironmentsInput](#schemalistenvironmentsinput)|true|none|
|» environmentTemplates|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListEnvironments|

> Example responses

> 200 Response

```json
{
  "environments": {},
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

<h3 id="listenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentsOutput](#schemalistenvironmentsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRepositories

<a id="opIdListRepositories"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListRepositories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListRepositories' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListRepositories`

List linked repositories with detail data.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listrepositories-parameters">Parameters</h3>

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
|body|body|[ListRepositoriesInput](#schemalistrepositoriesinput)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListRepositories|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "repositories": {}
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

<h3 id="listrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRepositoriesOutput](#schemalistrepositoriesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRepositorySyncDefinitions

<a id="opIdListRepositorySyncDefinitions"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListRepositorySyncDefinitions' \
  -d '{
    "nextToken": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "syncType": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions`

List repository sync definitions with detail data.

> Body parameter

```json
{
  "nextToken": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "syncType": {}
}
```

<h3 id="listrepositorysyncdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRepositorySyncDefinitionsInput](#schemalistrepositorysyncdefinitionsinput)|true|none|
|» nextToken|body|object|false|none|
|» repositoryName|body|object|true|none|
|» repositoryProvider|body|object|true|none|
|» syncType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListRepositorySyncDefinitions|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "syncDefinitions": {}
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

<h3 id="listrepositorysyncdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRepositorySyncDefinitionsOutput](#schemalistrepositorysyncdefinitionsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceInstanceOutputs

<a id="opIdListServiceInstanceOutputs"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServiceInstanceOutputs' \
  -d '{
    "nextToken": {},
    "serviceInstanceName": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs`

Get a list service of instance Infrastructure as Code (IaC) outputs.

> Body parameter

```json
{
  "nextToken": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<h3 id="listserviceinstanceoutputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServiceInstanceOutputsInput](#schemalistserviceinstanceoutputsinput)|true|none|
|» nextToken|body|object|false|none|
|» serviceInstanceName|body|object|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServiceInstanceOutputs|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "outputs": {}
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

<h3 id="listserviceinstanceoutputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceInstanceOutputsOutput](#schemalistserviceinstanceoutputsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceInstanceProvisionedResources

<a id="opIdListServiceInstanceProvisionedResources"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServiceInstanceProvisionedResources' \
  -d '{
    "nextToken": {},
    "serviceInstanceName": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources`

List provisioned resources for a service instance with details.

> Body parameter

```json
{
  "nextToken": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<h3 id="listserviceinstanceprovisionedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServiceInstanceProvisionedResourcesInput](#schemalistserviceinstanceprovisionedresourcesinput)|true|none|
|» nextToken|body|object|false|none|
|» serviceInstanceName|body|object|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServiceInstanceProvisionedResources|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "provisionedResources": {}
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

<h3 id="listserviceinstanceprovisionedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceInstanceProvisionedResourcesOutput](#schemalistserviceinstanceprovisionedresourcesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceInstances

<a id="opIdListServiceInstances"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServiceInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServiceInstances' \
  -d '{
    "filters": {},
    "maxResults": {},
    "nextToken": {},
    "serviceName": {},
    "sortBy": {},
    "sortOrder": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServiceInstances`

List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.

> Body parameter

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {},
  "serviceName": {},
  "sortBy": {},
  "sortOrder": {}
}
```

<h3 id="listserviceinstances-parameters">Parameters</h3>

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
|body|body|[ListServiceInstancesInput](#schemalistserviceinstancesinput)|true|none|
|» filters|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» serviceName|body|object|false|none|
|» sortBy|body|object|false|none|
|» sortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServiceInstances|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "serviceInstances": {}
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

<h3 id="listserviceinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceInstancesOutput](#schemalistserviceinstancesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServicePipelineOutputs

<a id="opIdListServicePipelineOutputs"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServicePipelineOutputs' \
  -d '{
    "nextToken": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs`

Get a list of service pipeline Infrastructure as Code (IaC) outputs.

> Body parameter

```json
{
  "nextToken": {},
  "serviceName": {}
}
```

<h3 id="listservicepipelineoutputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServicePipelineOutputsInput](#schemalistservicepipelineoutputsinput)|true|none|
|» nextToken|body|object|false|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServicePipelineOutputs|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "outputs": {}
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

<h3 id="listservicepipelineoutputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicePipelineOutputsOutput](#schemalistservicepipelineoutputsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServicePipelineProvisionedResources

<a id="opIdListServicePipelineProvisionedResources"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServicePipelineProvisionedResources' \
  -d '{
    "nextToken": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources`

List provisioned resources for a service and pipeline with details.

> Body parameter

```json
{
  "nextToken": {},
  "serviceName": {}
}
```

<h3 id="listservicepipelineprovisionedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServicePipelineProvisionedResourcesInput](#schemalistservicepipelineprovisionedresourcesinput)|true|none|
|» nextToken|body|object|false|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServicePipelineProvisionedResources|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "provisionedResources": {}
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

<h3 id="listservicepipelineprovisionedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicePipelineProvisionedResourcesOutput](#schemalistservicepipelineprovisionedresourcesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceTemplateVersions

<a id="opIdListServiceTemplateVersions"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServiceTemplateVersions' \
  -d '{
    "majorVersion": {},
    "maxResults": {},
    "nextToken": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions`

List major or minor versions of a service template with detail data.

> Body parameter

```json
{
  "majorVersion": {},
  "maxResults": {},
  "nextToken": {},
  "templateName": {}
}
```

<h3 id="listservicetemplateversions-parameters">Parameters</h3>

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
|body|body|[ListServiceTemplateVersionsInput](#schemalistservicetemplateversionsinput)|true|none|
|» majorVersion|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServiceTemplateVersions|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "templateVersions": {}
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

<h3 id="listservicetemplateversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceTemplateVersionsOutput](#schemalistservicetemplateversionsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceTemplates

<a id="opIdListServiceTemplates"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServiceTemplates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServiceTemplates' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServiceTemplates`

List service templates with detail data.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listservicetemplates-parameters">Parameters</h3>

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
|body|body|[ListServiceTemplatesInput](#schemalistservicetemplatesinput)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServiceTemplates|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "templates": {}
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

<h3 id="listservicetemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceTemplatesOutput](#schemalistservicetemplatesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServices

<a id="opIdListServices"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListServices' \
  -d '{
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListServices`

List services with summaries of detail data.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listservices-parameters">Parameters</h3>

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
|body|body|[ListServicesInput](#schemalistservicesinput)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListServices|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "services": {}
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

<h3 id="listservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicesOutput](#schemalistservicesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.ListTagsForResource' \
  -d '{
    "maxResults": {},
    "nextToken": {},
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.ListTagsForResource`

List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.

> Body parameter

```json
{
  "maxResults": {},
  "nextToken": {},
  "resourceArn": {}
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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
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
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyResourceDeploymentStatusChange

<a id="opIdNotifyResourceDeploymentStatusChange"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.NotifyResourceDeploymentStatusChange' \
  -d '{
    "deploymentId": {},
    "outputs": {},
    "resourceArn": {},
    "status": {},
    "statusMessage": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange`

<p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "deploymentId": {},
  "outputs": {},
  "resourceArn": {},
  "status": {},
  "statusMessage": {}
}
```

<h3 id="notifyresourcedeploymentstatuschange-parameters">Parameters</h3>

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
|body|body|[NotifyResourceDeploymentStatusChangeInput](#schemanotifyresourcedeploymentstatuschangeinput)|true|none|
|» deploymentId|body|object|false|none|
|» outputs|body|object|false|none|
|» resourceArn|body|object|true|none|
|» status|body|object|false|none|
|» statusMessage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.NotifyResourceDeploymentStatusChange|

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

<h3 id="notifyresourcedeploymentstatuschange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyResourceDeploymentStatusChangeOutput](#schemanotifyresourcedeploymentstatuschangeoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectEnvironmentAccountConnection

<a id="opIdRejectEnvironmentAccountConnection"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.RejectEnvironmentAccountConnection' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection`

<p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="rejectenvironmentaccountconnection-parameters">Parameters</h3>

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
|body|body|[RejectEnvironmentAccountConnectionInput](#schemarejectenvironmentaccountconnectioninput)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.RejectEnvironmentAccountConnection|

> Example responses

> 200 Response

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
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

> 485 Response

```json
null
```

<h3 id="rejectenvironmentaccountconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectEnvironmentAccountConnectionOutput](#schemarejectenvironmentaccountconnectionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.TagResource`

<p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

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
|X-Amz-Target|AwsProton20200720.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UntagResource`

<p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

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
|X-Amz-Target|AwsProton20200720.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccountSettings

<a id="opIdUpdateAccountSettings"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateAccountSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateAccountSettings' \
  -d '{
    "deletePipelineProvisioningRepository": {},
    "pipelineCodebuildRoleArn": {},
    "pipelineProvisioningRepository": {
      "branch": {},
      "name": {},
      "provider": {}
    },
    "pipelineServiceRoleArn": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateAccountSettings`

Update Proton settings that are used for multiple services in the Amazon Web Services account.

> Body parameter

```json
{
  "deletePipelineProvisioningRepository": {},
  "pipelineCodebuildRoleArn": {},
  "pipelineProvisioningRepository": {
    "branch": {},
    "name": {},
    "provider": {}
  },
  "pipelineServiceRoleArn": {}
}
```

<h3 id="updateaccountsettings-parameters">Parameters</h3>

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
|body|body|[UpdateAccountSettingsInput](#schemaupdateaccountsettingsinput)|true|none|
|» deletePipelineProvisioningRepository|body|object|false|none|
|» pipelineCodebuildRoleArn|body|object|false|none|
|» pipelineProvisioningRepository|body|object|false|none|
|» » branch|body|object|true|none|
|» » name|body|object|true|none|
|» » provider|body|object|true|none|
|» pipelineServiceRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateAccountSettings|

> Example responses

> 200 Response

```json
{
  "accountSettings": {
    "pipelineCodebuildRoleArn": {},
    "pipelineProvisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "pipelineServiceRoleArn": {}
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

<h3 id="updateaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAccountSettingsOutput](#schemaupdateaccountsettingsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateComponent

<a id="opIdUpdateComponent"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateComponent' \
  -d '{
    "clientToken": {},
    "deploymentType": {},
    "description": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {},
    "templateFile": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateComponent`

<p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

> Body parameter

```json
{
  "clientToken": {},
  "deploymentType": {},
  "description": {},
  "name": {},
  "serviceInstanceName": {},
  "serviceName": {},
  "serviceSpec": {},
  "templateFile": {}
}
```

<h3 id="updatecomponent-parameters">Parameters</h3>

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
|body|body|[UpdateComponentInput](#schemaupdatecomponentinput)|true|none|
|» clientToken|body|object|false|none|
|» deploymentType|body|object|true|none|
|» description|body|object|false|none|
|» name|body|object|true|none|
|» serviceInstanceName|body|object|false|none|
|» serviceName|body|object|false|none|
|» serviceSpec|body|object|false|none|
|» templateFile|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateComponent|

> Example responses

> 200 Response

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
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

<h3 id="updatecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateComponentOutput](#schemaupdatecomponentoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnvironment

<a id="opIdUpdateEnvironment"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateEnvironment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateEnvironment' \
  -d '{
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "deploymentType": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioningRepository": {
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateEnvironment`

<p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

> Body parameter

```json
{
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "deploymentType": {},
  "description": {},
  "environmentAccountConnectionId": {},
  "name": {},
  "protonServiceRoleArn": {},
  "provisioningRepository": {
    "branch": {},
    "name": {},
    "provider": {}
  },
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

<h3 id="updateenvironment-parameters">Parameters</h3>

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
|body|body|[UpdateEnvironmentInput](#schemaupdateenvironmentinput)|true|none|
|» codebuildRoleArn|body|object|false|none|
|» componentRoleArn|body|object|false|none|
|» deploymentType|body|object|true|none|
|» description|body|object|false|none|
|» environmentAccountConnectionId|body|object|false|none|
|» name|body|object|true|none|
|» protonServiceRoleArn|body|object|false|none|
|» provisioningRepository|body|object|false|none|
|» » branch|body|object|true|none|
|» » name|body|object|true|none|
|» » provider|body|object|true|none|
|» spec|body|object|false|none|
|» templateMajorVersion|body|object|false|none|
|» templateMinorVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateEnvironment|

> Example responses

> 200 Response

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="updateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnvironmentOutput](#schemaupdateenvironmentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnvironmentAccountConnection

<a id="opIdUpdateEnvironmentAccountConnection"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateEnvironmentAccountConnection' \
  -d '{
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "id": {},
    "roleArn": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection`

<p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

> Body parameter

```json
{
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "id": {},
  "roleArn": {}
}
```

<h3 id="updateenvironmentaccountconnection-parameters">Parameters</h3>

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
|body|body|[UpdateEnvironmentAccountConnectionInput](#schemaupdateenvironmentaccountconnectioninput)|true|none|
|» codebuildRoleArn|body|object|false|none|
|» componentRoleArn|body|object|false|none|
|» id|body|object|true|none|
|» roleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateEnvironmentAccountConnection|

> Example responses

> 200 Response

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
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

> 485 Response

```json
null
```

<h3 id="updateenvironmentaccountconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnvironmentAccountConnectionOutput](#schemaupdateenvironmentaccountconnectionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnvironmentTemplate

<a id="opIdUpdateEnvironmentTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateEnvironmentTemplate' \
  -d '{
    "description": {},
    "displayName": {},
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate`

Update an environment template.

> Body parameter

```json
{
  "description": {},
  "displayName": {},
  "name": {}
}
```

<h3 id="updateenvironmenttemplate-parameters">Parameters</h3>

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
|body|body|[UpdateEnvironmentTemplateInput](#schemaupdateenvironmenttemplateinput)|true|none|
|» description|body|object|false|none|
|» displayName|body|object|false|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateEnvironmentTemplate|

> Example responses

> 200 Response

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
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

<h3 id="updateenvironmenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnvironmentTemplateOutput](#schemaupdateenvironmenttemplateoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnvironmentTemplateVersion

<a id="opIdUpdateEnvironmentTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateEnvironmentTemplateVersion' \
  -d '{
    "description": {},
    "majorVersion": {},
    "minorVersion": {},
    "status": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion`

Update a major or minor version of an environment template.

> Body parameter

```json
{
  "description": {},
  "majorVersion": {},
  "minorVersion": {},
  "status": {},
  "templateName": {}
}
```

<h3 id="updateenvironmenttemplateversion-parameters">Parameters</h3>

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
|body|body|[UpdateEnvironmentTemplateVersionInput](#schemaupdateenvironmenttemplateversioninput)|true|none|
|» description|body|object|false|none|
|» majorVersion|body|object|true|none|
|» minorVersion|body|object|true|none|
|» status|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateEnvironmentTemplateVersion|

> Example responses

> 200 Response

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="updateenvironmenttemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnvironmentTemplateVersionOutput](#schemaupdateenvironmenttemplateversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateService

<a id="opIdUpdateService"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateService' \
  -d '{
    "description": {},
    "name": {},
    "spec": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateService`

<p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

> Body parameter

```json
{
  "description": {},
  "name": {},
  "spec": {}
}
```

<h3 id="updateservice-parameters">Parameters</h3>

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
|body|body|[UpdateServiceInput](#schemaupdateserviceinput)|true|none|
|» description|body|object|false|none|
|» name|body|object|true|none|
|» spec|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateService|

> Example responses

> 200 Response

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
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

<h3 id="updateservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceOutput](#schemaupdateserviceoutput)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceInstance

<a id="opIdUpdateServiceInstance"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateServiceInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateServiceInstance' \
  -d '{
    "clientToken": {},
    "deploymentType": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateServiceInstance`

<p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

> Body parameter

```json
{
  "clientToken": {},
  "deploymentType": {},
  "name": {},
  "serviceName": {},
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

<h3 id="updateserviceinstance-parameters">Parameters</h3>

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
|body|body|[UpdateServiceInstanceInput](#schemaupdateserviceinstanceinput)|true|none|
|» clientToken|body|object|false|none|
|» deploymentType|body|object|true|none|
|» name|body|object|true|none|
|» serviceName|body|object|true|none|
|» spec|body|object|false|none|
|» templateMajorVersion|body|object|false|none|
|» templateMinorVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateServiceInstance|

> Example responses

> 200 Response

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="updateserviceinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceInstanceOutput](#schemaupdateserviceinstanceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServicePipeline

<a id="opIdUpdateServicePipeline"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateServicePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateServicePipeline' \
  -d '{
    "deploymentType": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateServicePipeline`

<p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

> Body parameter

```json
{
  "deploymentType": {},
  "serviceName": {},
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

<h3 id="updateservicepipeline-parameters">Parameters</h3>

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
|body|body|[UpdateServicePipelineInput](#schemaupdateservicepipelineinput)|true|none|
|» deploymentType|body|object|true|none|
|» serviceName|body|object|true|none|
|» spec|body|object|true|none|
|» templateMajorVersion|body|object|false|none|
|» templateMinorVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateServicePipeline|

> Example responses

> 200 Response

```json
{
  "pipeline": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
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

<h3 id="updateservicepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServicePipelineOutput](#schemaupdateservicepipelineoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceSyncBlocker

<a id="opIdUpdateServiceSyncBlocker"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateServiceSyncBlocker' \
  -d '{
    "id": {},
    "resolvedReason": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker`

Update the service sync blocker by resolving it.

> Body parameter

```json
{
  "id": {},
  "resolvedReason": {}
}
```

<h3 id="updateservicesyncblocker-parameters">Parameters</h3>

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
|body|body|[UpdateServiceSyncBlockerInput](#schemaupdateservicesyncblockerinput)|true|none|
|» id|body|object|true|none|
|» resolvedReason|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateServiceSyncBlocker|

> Example responses

> 200 Response

```json
{
  "serviceInstanceName": {},
  "serviceName": {},
  "serviceSyncBlocker": {
    "contexts": {},
    "createdAt": {},
    "createdReason": {},
    "id": {},
    "resolvedAt": {},
    "resolvedReason": {},
    "status": {},
    "type": {}
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

<h3 id="updateservicesyncblocker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceSyncBlockerOutput](#schemaupdateservicesyncblockeroutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceSyncConfig

<a id="opIdUpdateServiceSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateServiceSyncConfig' \
  -d '{
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig`

Update the Proton Ops config file.

> Body parameter

```json
{
  "branch": {},
  "filePath": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "serviceName": {}
}
```

<h3 id="updateservicesyncconfig-parameters">Parameters</h3>

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
|body|body|[UpdateServiceSyncConfigInput](#schemaupdateservicesyncconfiginput)|true|none|
|» branch|body|object|true|none|
|» filePath|body|object|true|none|
|» repositoryName|body|object|true|none|
|» repositoryProvider|body|object|true|none|
|» serviceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateServiceSyncConfig|

> Example responses

> 200 Response

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
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

<h3 id="updateservicesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceSyncConfigOutput](#schemaupdateservicesyncconfigoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceTemplate

<a id="opIdUpdateServiceTemplate"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateServiceTemplate' \
  -d '{
    "description": {},
    "displayName": {},
    "name": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate`

Update a service template.

> Body parameter

```json
{
  "description": {},
  "displayName": {},
  "name": {}
}
```

<h3 id="updateservicetemplate-parameters">Parameters</h3>

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
|body|body|[UpdateServiceTemplateInput](#schemaupdateservicetemplateinput)|true|none|
|» description|body|object|false|none|
|» displayName|body|object|false|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateServiceTemplate|

> Example responses

> 200 Response

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
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

<h3 id="updateservicetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceTemplateOutput](#schemaupdateservicetemplateoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceTemplateVersion

<a id="opIdUpdateServiceTemplateVersion"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateServiceTemplateVersion' \
  -d '{
    "compatibleEnvironmentTemplates": {},
    "description": {},
    "majorVersion": {},
    "minorVersion": {},
    "status": {},
    "supportedComponentSources": {},
    "templateName": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion`

Update a major or minor version of a service template.

> Body parameter

```json
{
  "compatibleEnvironmentTemplates": {},
  "description": {},
  "majorVersion": {},
  "minorVersion": {},
  "status": {},
  "supportedComponentSources": {},
  "templateName": {}
}
```

<h3 id="updateservicetemplateversion-parameters">Parameters</h3>

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
|body|body|[UpdateServiceTemplateVersionInput](#schemaupdateservicetemplateversioninput)|true|none|
|» compatibleEnvironmentTemplates|body|object|false|none|
|» description|body|object|false|none|
|» majorVersion|body|object|true|none|
|» minorVersion|body|object|true|none|
|» status|body|object|false|none|
|» supportedComponentSources|body|object|false|none|
|» templateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateServiceTemplateVersion|

> Example responses

> 200 Response

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
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

<h3 id="updateservicetemplateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceTemplateVersionOutput](#schemaupdateservicetemplateversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTemplateSyncConfig

<a id="opIdUpdateTemplateSyncConfig"></a>

> Code samples

```bash
curl 'https://proton.us-east-1.amazonaws.com/#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AwsProton20200720.UpdateTemplateSyncConfig' \
  -d '{
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
  }'
```

`POST /#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig`

Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.

> Body parameter

```json
{
  "branch": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "subdirectory": {},
  "templateName": {},
  "templateType": {}
}
```

<h3 id="updatetemplatesyncconfig-parameters">Parameters</h3>

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
|body|body|[UpdateTemplateSyncConfigInput](#schemaupdatetemplatesyncconfiginput)|true|none|
|» branch|body|object|true|none|
|» repositoryName|body|object|true|none|
|» repositoryProvider|body|object|true|none|
|» subdirectory|body|object|false|none|
|» templateName|body|object|true|none|
|» templateType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AwsProton20200720.UpdateTemplateSyncConfig|

> Example responses

> 200 Response

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
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

<h3 id="updatetemplatesyncconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTemplateSyncConfigOutput](#schemaupdatetemplatesyncconfigoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptEnvironmentAccountConnectionOutput">AcceptEnvironmentAccountConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaacceptenvironmentaccountconnectionoutput"></a>
<a id="schema_AcceptEnvironmentAccountConnectionOutput"></a>
<a id="tocSacceptenvironmentaccountconnectionoutput"></a>
<a id="tocsacceptenvironmentaccountconnectionoutput"></a>

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentAccountConnection|object|true|none|none|

<h2 id="tocS_AcceptEnvironmentAccountConnectionInput">AcceptEnvironmentAccountConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemaacceptenvironmentaccountconnectioninput"></a>
<a id="schema_AcceptEnvironmentAccountConnectionInput"></a>
<a id="tocSacceptenvironmentaccountconnectioninput"></a>
<a id="tocsacceptenvironmentaccountconnectioninput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_CancelComponentDeploymentOutput">CancelComponentDeploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelcomponentdeploymentoutput"></a>
<a id="schema_CancelComponentDeploymentOutput"></a>
<a id="tocScancelcomponentdeploymentoutput"></a>
<a id="tocscancelcomponentdeploymentoutput"></a>

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|object|true|none|none|

<h2 id="tocS_CancelComponentDeploymentInput">CancelComponentDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelcomponentdeploymentinput"></a>
<a id="schema_CancelComponentDeploymentInput"></a>
<a id="tocScancelcomponentdeploymentinput"></a>
<a id="tocscancelcomponentdeploymentinput"></a>

```json
{
  "componentName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentName|object|true|none|none|

<h2 id="tocS_CancelEnvironmentDeploymentOutput">CancelEnvironmentDeploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelenvironmentdeploymentoutput"></a>
<a id="schema_CancelEnvironmentDeploymentOutput"></a>
<a id="tocScancelenvironmentdeploymentoutput"></a>
<a id="tocscancelenvironmentdeploymentoutput"></a>

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|object|true|none|none|

<h2 id="tocS_CancelEnvironmentDeploymentInput">CancelEnvironmentDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelenvironmentdeploymentinput"></a>
<a id="schema_CancelEnvironmentDeploymentInput"></a>
<a id="tocScancelenvironmentdeploymentinput"></a>
<a id="tocscancelenvironmentdeploymentinput"></a>

```json
{
  "environmentName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentName|object|true|none|none|

<h2 id="tocS_CancelServiceInstanceDeploymentOutput">CancelServiceInstanceDeploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelserviceinstancedeploymentoutput"></a>
<a id="schema_CancelServiceInstanceDeploymentOutput"></a>
<a id="tocScancelserviceinstancedeploymentoutput"></a>
<a id="tocscancelserviceinstancedeploymentoutput"></a>

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstance|object|true|none|none|

<h2 id="tocS_CancelServiceInstanceDeploymentInput">CancelServiceInstanceDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelserviceinstancedeploymentinput"></a>
<a id="schema_CancelServiceInstanceDeploymentInput"></a>
<a id="tocScancelserviceinstancedeploymentinput"></a>
<a id="tocscancelserviceinstancedeploymentinput"></a>

```json
{
  "serviceInstanceName": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstanceName|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_CancelServicePipelineDeploymentOutput">CancelServicePipelineDeploymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelservicepipelinedeploymentoutput"></a>
<a id="schema_CancelServicePipelineDeploymentOutput"></a>
<a id="tocScancelservicepipelinedeploymentoutput"></a>
<a id="tocscancelservicepipelinedeploymentoutput"></a>

```json
{
  "pipeline": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|true|none|none|

<h2 id="tocS_CancelServicePipelineDeploymentInput">CancelServicePipelineDeploymentInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelservicepipelinedeploymentinput"></a>
<a id="schema_CancelServicePipelineDeploymentInput"></a>
<a id="tocScancelservicepipelinedeploymentinput"></a>
<a id="tocscancelservicepipelinedeploymentinput"></a>

```json
{
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|

<h2 id="tocS_CreateComponentOutput">CreateComponentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentoutput"></a>
<a id="schema_CreateComponentOutput"></a>
<a id="tocScreatecomponentoutput"></a>
<a id="tocscreatecomponentoutput"></a>

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|object|true|none|none|

<h2 id="tocS_CreateComponentInput">CreateComponentInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentinput"></a>
<a id="schema_CreateComponentInput"></a>
<a id="tocScreatecomponentinput"></a>
<a id="tocscreatecomponentinput"></a>

```json
{
  "clientToken": {},
  "description": {},
  "environmentName": {},
  "manifest": {},
  "name": {},
  "serviceInstanceName": {},
  "serviceName": {},
  "serviceSpec": {},
  "tags": {},
  "templateFile": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|description|object|false|none|none|
|environmentName|object|false|none|none|
|manifest|object|true|none|none|
|name|object|true|none|none|
|serviceInstanceName|object|false|none|none|
|serviceName|object|false|none|none|
|serviceSpec|object|false|none|none|
|tags|object|false|none|none|
|templateFile|object|true|none|none|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateEnvironmentOutput">CreateEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentoutput"></a>
<a id="schema_CreateEnvironmentOutput"></a>
<a id="tocScreateenvironmentoutput"></a>
<a id="tocscreateenvironmentoutput"></a>

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|object|true|none|none|

<h2 id="tocS_CreateEnvironmentInput">CreateEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentinput"></a>
<a id="schema_CreateEnvironmentInput"></a>
<a id="tocScreateenvironmentinput"></a>
<a id="tocscreateenvironmentinput"></a>

```json
{
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "description": {},
  "environmentAccountConnectionId": {},
  "name": {},
  "protonServiceRoleArn": {},
  "provisioningRepository": {
    "branch": {},
    "name": {},
    "provider": {}
  },
  "spec": {},
  "tags": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codebuildRoleArn|object|false|none|none|
|componentRoleArn|object|false|none|none|
|description|object|false|none|none|
|environmentAccountConnectionId|object|false|none|none|
|name|object|true|none|none|
|protonServiceRoleArn|object|false|none|none|
|provisioningRepository|object|false|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|
|templateMajorVersion|object|true|none|none|
|templateMinorVersion|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_CreateEnvironmentAccountConnectionOutput">CreateEnvironmentAccountConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentaccountconnectionoutput"></a>
<a id="schema_CreateEnvironmentAccountConnectionOutput"></a>
<a id="tocScreateenvironmentaccountconnectionoutput"></a>
<a id="tocscreateenvironmentaccountconnectionoutput"></a>

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentAccountConnection|object|true|none|none|

<h2 id="tocS_CreateEnvironmentAccountConnectionInput">CreateEnvironmentAccountConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentaccountconnectioninput"></a>
<a id="schema_CreateEnvironmentAccountConnectionInput"></a>
<a id="tocScreateenvironmentaccountconnectioninput"></a>
<a id="tocscreateenvironmentaccountconnectioninput"></a>

```json
{
  "clientToken": {},
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "environmentName": {},
  "managementAccountId": {},
  "roleArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|codebuildRoleArn|object|false|none|none|
|componentRoleArn|object|false|none|none|
|environmentName|object|true|none|none|
|managementAccountId|object|true|none|none|
|roleArn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateEnvironmentTemplateOutput">CreateEnvironmentTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmenttemplateoutput"></a>
<a id="schema_CreateEnvironmentTemplateOutput"></a>
<a id="tocScreateenvironmenttemplateoutput"></a>
<a id="tocscreateenvironmenttemplateoutput"></a>

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplate|object|true|none|none|

<h2 id="tocS_CreateEnvironmentTemplateInput">CreateEnvironmentTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmenttemplateinput"></a>
<a id="schema_CreateEnvironmentTemplateInput"></a>
<a id="tocScreateenvironmenttemplateinput"></a>
<a id="tocscreateenvironmenttemplateinput"></a>

```json
{
  "description": {},
  "displayName": {},
  "encryptionKey": {},
  "name": {},
  "provisioning": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|displayName|object|false|none|none|
|encryptionKey|object|false|none|none|
|name|object|true|none|none|
|provisioning|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateEnvironmentTemplateVersionOutput">CreateEnvironmentTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmenttemplateversionoutput"></a>
<a id="schema_CreateEnvironmentTemplateVersionOutput"></a>
<a id="tocScreateenvironmenttemplateversionoutput"></a>
<a id="tocscreateenvironmenttemplateversionoutput"></a>

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplateVersion|object|true|none|none|

<h2 id="tocS_CreateEnvironmentTemplateVersionInput">CreateEnvironmentTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmenttemplateversioninput"></a>
<a id="schema_CreateEnvironmentTemplateVersionInput"></a>
<a id="tocScreateenvironmenttemplateversioninput"></a>
<a id="tocscreateenvironmenttemplateversioninput"></a>

```json
{
  "clientToken": {},
  "description": {},
  "majorVersion": {},
  "source": {
    "s3": {
      "bucket": {},
      "key": {}
    }
  },
  "tags": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|description|object|false|none|none|
|majorVersion|object|false|none|none|
|source|object|true|none|none|
|tags|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_CreateRepositoryOutput">CreateRepositoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryoutput"></a>
<a id="schema_CreateRepositoryOutput"></a>
<a id="tocScreaterepositoryoutput"></a>
<a id="tocscreaterepositoryoutput"></a>

```json
{
  "repository": {
    "arn": {},
    "connectionArn": {},
    "encryptionKey": {},
    "name": {},
    "provider": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|true|none|none|

<h2 id="tocS_CreateRepositoryInput">CreateRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryinput"></a>
<a id="schema_CreateRepositoryInput"></a>
<a id="tocScreaterepositoryinput"></a>
<a id="tocscreaterepositoryinput"></a>

```json
{
  "connectionArn": {},
  "encryptionKey": {},
  "name": {},
  "provider": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionArn|object|true|none|none|
|encryptionKey|object|false|none|none|
|name|object|true|none|none|
|provider|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateServiceOutput">CreateServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceoutput"></a>
<a id="schema_CreateServiceOutput"></a>
<a id="tocScreateserviceoutput"></a>
<a id="tocscreateserviceoutput"></a>

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|true|none|none|

<h2 id="tocS_CreateServiceInput">CreateServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceinput"></a>
<a id="schema_CreateServiceInput"></a>
<a id="tocScreateserviceinput"></a>
<a id="tocscreateserviceinput"></a>

```json
{
  "branchName": {},
  "description": {},
  "name": {},
  "repositoryConnectionArn": {},
  "repositoryId": {},
  "spec": {},
  "tags": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|object|false|none|none|
|description|object|false|none|none|
|name|object|true|none|none|
|repositoryConnectionArn|object|false|none|none|
|repositoryId|object|false|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|
|templateMajorVersion|object|true|none|none|
|templateMinorVersion|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_CreateServiceInstanceOutput">CreateServiceInstanceOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceinstanceoutput"></a>
<a id="schema_CreateServiceInstanceOutput"></a>
<a id="tocScreateserviceinstanceoutput"></a>
<a id="tocscreateserviceinstanceoutput"></a>

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstance|object|true|none|none|

<h2 id="tocS_CreateServiceInstanceInput">CreateServiceInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceinstanceinput"></a>
<a id="schema_CreateServiceInstanceInput"></a>
<a id="tocScreateserviceinstanceinput"></a>
<a id="tocscreateserviceinstanceinput"></a>

```json
{
  "clientToken": {},
  "name": {},
  "serviceName": {},
  "spec": {},
  "tags": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|name|object|true|none|none|
|serviceName|object|true|none|none|
|spec|object|true|none|none|
|tags|object|false|none|none|
|templateMajorVersion|object|false|none|none|
|templateMinorVersion|object|false|none|none|

<h2 id="tocS_CreateServiceSyncConfigOutput">CreateServiceSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicesyncconfigoutput"></a>
<a id="schema_CreateServiceSyncConfigOutput"></a>
<a id="tocScreateservicesyncconfigoutput"></a>
<a id="tocscreateservicesyncconfigoutput"></a>

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceSyncConfig|object|false|none|none|

<h2 id="tocS_CreateServiceSyncConfigInput">CreateServiceSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicesyncconfiginput"></a>
<a id="schema_CreateServiceSyncConfigInput"></a>
<a id="tocScreateservicesyncconfiginput"></a>
<a id="tocscreateservicesyncconfiginput"></a>

```json
{
  "branch": {},
  "filePath": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|filePath|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_CreateServiceTemplateOutput">CreateServiceTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicetemplateoutput"></a>
<a id="schema_CreateServiceTemplateOutput"></a>
<a id="tocScreateservicetemplateoutput"></a>
<a id="tocscreateservicetemplateoutput"></a>

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplate|object|true|none|none|

<h2 id="tocS_CreateServiceTemplateInput">CreateServiceTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicetemplateinput"></a>
<a id="schema_CreateServiceTemplateInput"></a>
<a id="tocScreateservicetemplateinput"></a>
<a id="tocscreateservicetemplateinput"></a>

```json
{
  "description": {},
  "displayName": {},
  "encryptionKey": {},
  "name": {},
  "pipelineProvisioning": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|displayName|object|false|none|none|
|encryptionKey|object|false|none|none|
|name|object|true|none|none|
|pipelineProvisioning|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateServiceTemplateVersionOutput">CreateServiceTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicetemplateversionoutput"></a>
<a id="schema_CreateServiceTemplateVersionOutput"></a>
<a id="tocScreateservicetemplateversionoutput"></a>
<a id="tocscreateservicetemplateversionoutput"></a>

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplateVersion|object|true|none|none|

<h2 id="tocS_CreateServiceTemplateVersionInput">CreateServiceTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicetemplateversioninput"></a>
<a id="schema_CreateServiceTemplateVersionInput"></a>
<a id="tocScreateservicetemplateversioninput"></a>
<a id="tocscreateservicetemplateversioninput"></a>

```json
{
  "clientToken": {},
  "compatibleEnvironmentTemplates": {},
  "description": {},
  "majorVersion": {},
  "source": {
    "s3": {
      "bucket": {},
      "key": {}
    }
  },
  "supportedComponentSources": {},
  "tags": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|compatibleEnvironmentTemplates|object|true|none|none|
|description|object|false|none|none|
|majorVersion|object|false|none|none|
|source|object|true|none|none|
|supportedComponentSources|object|false|none|none|
|tags|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_CreateTemplateSyncConfigOutput">CreateTemplateSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetemplatesyncconfigoutput"></a>
<a id="schema_CreateTemplateSyncConfigOutput"></a>
<a id="tocScreatetemplatesyncconfigoutput"></a>
<a id="tocscreatetemplatesyncconfigoutput"></a>

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateSyncConfig|object|false|none|none|

<h2 id="tocS_CreateTemplateSyncConfigInput">CreateTemplateSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetemplatesyncconfiginput"></a>
<a id="schema_CreateTemplateSyncConfigInput"></a>
<a id="tocScreatetemplatesyncconfiginput"></a>
<a id="tocscreatetemplatesyncconfiginput"></a>

```json
{
  "branch": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "subdirectory": {},
  "templateName": {},
  "templateType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|subdirectory|object|false|none|none|
|templateName|object|true|none|none|
|templateType|object|true|none|none|

<h2 id="tocS_DeleteComponentOutput">DeleteComponentOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomponentoutput"></a>
<a id="schema_DeleteComponentOutput"></a>
<a id="tocSdeletecomponentoutput"></a>
<a id="tocsdeletecomponentoutput"></a>

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|object|false|none|none|

<h2 id="tocS_DeleteComponentInput">DeleteComponentInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomponentinput"></a>
<a id="schema_DeleteComponentInput"></a>
<a id="tocSdeletecomponentinput"></a>
<a id="tocsdeletecomponentinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteEnvironmentOutput">DeleteEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentoutput"></a>
<a id="schema_DeleteEnvironmentOutput"></a>
<a id="tocSdeleteenvironmentoutput"></a>
<a id="tocsdeleteenvironmentoutput"></a>

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|object|false|none|none|

<h2 id="tocS_DeleteEnvironmentInput">DeleteEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentinput"></a>
<a id="schema_DeleteEnvironmentInput"></a>
<a id="tocSdeleteenvironmentinput"></a>
<a id="tocsdeleteenvironmentinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteEnvironmentAccountConnectionOutput">DeleteEnvironmentAccountConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentaccountconnectionoutput"></a>
<a id="schema_DeleteEnvironmentAccountConnectionOutput"></a>
<a id="tocSdeleteenvironmentaccountconnectionoutput"></a>
<a id="tocsdeleteenvironmentaccountconnectionoutput"></a>

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentAccountConnection|object|false|none|none|

<h2 id="tocS_DeleteEnvironmentAccountConnectionInput">DeleteEnvironmentAccountConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentaccountconnectioninput"></a>
<a id="schema_DeleteEnvironmentAccountConnectionInput"></a>
<a id="tocSdeleteenvironmentaccountconnectioninput"></a>
<a id="tocsdeleteenvironmentaccountconnectioninput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_DeleteEnvironmentTemplateOutput">DeleteEnvironmentTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmenttemplateoutput"></a>
<a id="schema_DeleteEnvironmentTemplateOutput"></a>
<a id="tocSdeleteenvironmenttemplateoutput"></a>
<a id="tocsdeleteenvironmenttemplateoutput"></a>

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplate|object|false|none|none|

<h2 id="tocS_DeleteEnvironmentTemplateInput">DeleteEnvironmentTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmenttemplateinput"></a>
<a id="schema_DeleteEnvironmentTemplateInput"></a>
<a id="tocSdeleteenvironmenttemplateinput"></a>
<a id="tocsdeleteenvironmenttemplateinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteEnvironmentTemplateVersionOutput">DeleteEnvironmentTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmenttemplateversionoutput"></a>
<a id="schema_DeleteEnvironmentTemplateVersionOutput"></a>
<a id="tocSdeleteenvironmenttemplateversionoutput"></a>
<a id="tocsdeleteenvironmenttemplateversionoutput"></a>

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplateVersion|object|false|none|none|

<h2 id="tocS_DeleteEnvironmentTemplateVersionInput">DeleteEnvironmentTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmenttemplateversioninput"></a>
<a id="schema_DeleteEnvironmentTemplateVersionInput"></a>
<a id="tocSdeleteenvironmenttemplateversioninput"></a>
<a id="tocsdeleteenvironmenttemplateversioninput"></a>

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_DeleteRepositoryOutput">DeleteRepositoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryoutput"></a>
<a id="schema_DeleteRepositoryOutput"></a>
<a id="tocSdeleterepositoryoutput"></a>
<a id="tocsdeleterepositoryoutput"></a>

```json
{
  "repository": {
    "arn": {},
    "connectionArn": {},
    "encryptionKey": {},
    "name": {},
    "provider": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_DeleteRepositoryInput">DeleteRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryinput"></a>
<a id="schema_DeleteRepositoryInput"></a>
<a id="tocSdeleterepositoryinput"></a>
<a id="tocsdeleterepositoryinput"></a>

```json
{
  "name": {},
  "provider": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_DeleteServiceOutput">DeleteServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceoutput"></a>
<a id="schema_DeleteServiceOutput"></a>
<a id="tocSdeleteserviceoutput"></a>
<a id="tocsdeleteserviceoutput"></a>

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|false|none|none|

<h2 id="tocS_DeleteServiceInput">DeleteServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceinput"></a>
<a id="schema_DeleteServiceInput"></a>
<a id="tocSdeleteserviceinput"></a>
<a id="tocsdeleteserviceinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteServiceSyncConfigOutput">DeleteServiceSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicesyncconfigoutput"></a>
<a id="schema_DeleteServiceSyncConfigOutput"></a>
<a id="tocSdeleteservicesyncconfigoutput"></a>
<a id="tocsdeleteservicesyncconfigoutput"></a>

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceSyncConfig|object|false|none|none|

<h2 id="tocS_DeleteServiceSyncConfigInput">DeleteServiceSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicesyncconfiginput"></a>
<a id="schema_DeleteServiceSyncConfigInput"></a>
<a id="tocSdeleteservicesyncconfiginput"></a>
<a id="tocsdeleteservicesyncconfiginput"></a>

```json
{
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|

<h2 id="tocS_DeleteServiceTemplateOutput">DeleteServiceTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicetemplateoutput"></a>
<a id="schema_DeleteServiceTemplateOutput"></a>
<a id="tocSdeleteservicetemplateoutput"></a>
<a id="tocsdeleteservicetemplateoutput"></a>

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplate|object|false|none|none|

<h2 id="tocS_DeleteServiceTemplateInput">DeleteServiceTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicetemplateinput"></a>
<a id="schema_DeleteServiceTemplateInput"></a>
<a id="tocSdeleteservicetemplateinput"></a>
<a id="tocsdeleteservicetemplateinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteServiceTemplateVersionOutput">DeleteServiceTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicetemplateversionoutput"></a>
<a id="schema_DeleteServiceTemplateVersionOutput"></a>
<a id="tocSdeleteservicetemplateversionoutput"></a>
<a id="tocsdeleteservicetemplateversionoutput"></a>

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplateVersion|object|false|none|none|

<h2 id="tocS_DeleteServiceTemplateVersionInput">DeleteServiceTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicetemplateversioninput"></a>
<a id="schema_DeleteServiceTemplateVersionInput"></a>
<a id="tocSdeleteservicetemplateversioninput"></a>
<a id="tocsdeleteservicetemplateversioninput"></a>

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_DeleteTemplateSyncConfigOutput">DeleteTemplateSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetemplatesyncconfigoutput"></a>
<a id="schema_DeleteTemplateSyncConfigOutput"></a>
<a id="tocSdeletetemplatesyncconfigoutput"></a>
<a id="tocsdeletetemplatesyncconfigoutput"></a>

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateSyncConfig|object|false|none|none|

<h2 id="tocS_DeleteTemplateSyncConfigInput">DeleteTemplateSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetemplatesyncconfiginput"></a>
<a id="schema_DeleteTemplateSyncConfigInput"></a>
<a id="tocSdeletetemplatesyncconfiginput"></a>
<a id="tocsdeletetemplatesyncconfiginput"></a>

```json
{
  "templateName": {},
  "templateType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateName|object|true|none|none|
|templateType|object|true|none|none|

<h2 id="tocS_GetAccountSettingsOutput">GetAccountSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsoutput"></a>
<a id="schema_GetAccountSettingsOutput"></a>
<a id="tocSgetaccountsettingsoutput"></a>
<a id="tocsgetaccountsettingsoutput"></a>

```json
{
  "accountSettings": {
    "pipelineCodebuildRoleArn": {},
    "pipelineProvisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "pipelineServiceRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountSettings|object|false|none|none|

<h2 id="tocS_GetAccountSettingsInput">GetAccountSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsinput"></a>
<a id="schema_GetAccountSettingsInput"></a>
<a id="tocSgetaccountsettingsinput"></a>
<a id="tocsgetaccountsettingsinput"></a>

```json
{}
```

<h2 id="tocS_GetComponentOutput">GetComponentOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentoutput"></a>
<a id="schema_GetComponentOutput"></a>
<a id="tocSgetcomponentoutput"></a>
<a id="tocsgetcomponentoutput"></a>

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|object|false|none|none|

<h2 id="tocS_GetComponentInput">GetComponentInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentinput"></a>
<a id="schema_GetComponentInput"></a>
<a id="tocSgetcomponentinput"></a>
<a id="tocsgetcomponentinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_GetEnvironmentOutput">GetEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmentoutput"></a>
<a id="schema_GetEnvironmentOutput"></a>
<a id="tocSgetenvironmentoutput"></a>
<a id="tocsgetenvironmentoutput"></a>

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|object|true|none|none|

<h2 id="tocS_GetEnvironmentInput">GetEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmentinput"></a>
<a id="schema_GetEnvironmentInput"></a>
<a id="tocSgetenvironmentinput"></a>
<a id="tocsgetenvironmentinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_GetEnvironmentAccountConnectionOutput">GetEnvironmentAccountConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmentaccountconnectionoutput"></a>
<a id="schema_GetEnvironmentAccountConnectionOutput"></a>
<a id="tocSgetenvironmentaccountconnectionoutput"></a>
<a id="tocsgetenvironmentaccountconnectionoutput"></a>

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentAccountConnection|object|true|none|none|

<h2 id="tocS_GetEnvironmentAccountConnectionInput">GetEnvironmentAccountConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmentaccountconnectioninput"></a>
<a id="schema_GetEnvironmentAccountConnectionInput"></a>
<a id="tocSgetenvironmentaccountconnectioninput"></a>
<a id="tocsgetenvironmentaccountconnectioninput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_GetEnvironmentTemplateOutput">GetEnvironmentTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmenttemplateoutput"></a>
<a id="schema_GetEnvironmentTemplateOutput"></a>
<a id="tocSgetenvironmenttemplateoutput"></a>
<a id="tocsgetenvironmenttemplateoutput"></a>

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplate|object|true|none|none|

<h2 id="tocS_GetEnvironmentTemplateInput">GetEnvironmentTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmenttemplateinput"></a>
<a id="schema_GetEnvironmentTemplateInput"></a>
<a id="tocSgetenvironmenttemplateinput"></a>
<a id="tocsgetenvironmenttemplateinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_GetEnvironmentTemplateVersionOutput">GetEnvironmentTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmenttemplateversionoutput"></a>
<a id="schema_GetEnvironmentTemplateVersionOutput"></a>
<a id="tocSgetenvironmenttemplateversionoutput"></a>
<a id="tocsgetenvironmenttemplateversionoutput"></a>

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplateVersion|object|true|none|none|

<h2 id="tocS_GetEnvironmentTemplateVersionInput">GetEnvironmentTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmenttemplateversioninput"></a>
<a id="schema_GetEnvironmentTemplateVersionInput"></a>
<a id="tocSgetenvironmenttemplateversioninput"></a>
<a id="tocsgetenvironmenttemplateversioninput"></a>

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_GetRepositoryOutput">GetRepositoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositoryoutput"></a>
<a id="schema_GetRepositoryOutput"></a>
<a id="tocSgetrepositoryoutput"></a>
<a id="tocsgetrepositoryoutput"></a>

```json
{
  "repository": {
    "arn": {},
    "connectionArn": {},
    "encryptionKey": {},
    "name": {},
    "provider": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|true|none|none|

<h2 id="tocS_GetRepositoryInput">GetRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositoryinput"></a>
<a id="schema_GetRepositoryInput"></a>
<a id="tocSgetrepositoryinput"></a>
<a id="tocsgetrepositoryinput"></a>

```json
{
  "name": {},
  "provider": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_GetRepositorySyncStatusOutput">GetRepositorySyncStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorysyncstatusoutput"></a>
<a id="schema_GetRepositorySyncStatusOutput"></a>
<a id="tocSgetrepositorysyncstatusoutput"></a>
<a id="tocsgetrepositorysyncstatusoutput"></a>

```json
{
  "latestSync": {
    "events": {},
    "startedAt": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestSync|object|false|none|none|

<h2 id="tocS_GetRepositorySyncStatusInput">GetRepositorySyncStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorysyncstatusinput"></a>
<a id="schema_GetRepositorySyncStatusInput"></a>
<a id="tocSgetrepositorysyncstatusinput"></a>
<a id="tocsgetrepositorysyncstatusinput"></a>

```json
{
  "branch": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "syncType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|syncType|object|true|none|none|

<h2 id="tocS_GetResourcesSummaryOutput">GetResourcesSummaryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcessummaryoutput"></a>
<a id="schema_GetResourcesSummaryOutput"></a>
<a id="tocSgetresourcessummaryoutput"></a>
<a id="tocsgetresourcessummaryoutput"></a>

```json
{
  "counts": {
    "components": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "environmentTemplates": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "environments": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "pipelines": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "serviceInstances": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "serviceTemplates": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    },
    "services": {
      "behindMajor": {},
      "behindMinor": {},
      "failed": {},
      "total": {},
      "upToDate": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|object|true|none|none|

<h2 id="tocS_GetResourcesSummaryInput">GetResourcesSummaryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcessummaryinput"></a>
<a id="schema_GetResourcesSummaryInput"></a>
<a id="tocSgetresourcessummaryinput"></a>
<a id="tocsgetresourcessummaryinput"></a>

```json
{}
```

<h2 id="tocS_GetServiceOutput">GetServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceoutput"></a>
<a id="schema_GetServiceOutput"></a>
<a id="tocSgetserviceoutput"></a>
<a id="tocsgetserviceoutput"></a>

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|false|none|none|

<h2 id="tocS_GetServiceInput">GetServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceinput"></a>
<a id="schema_GetServiceInput"></a>
<a id="tocSgetserviceinput"></a>
<a id="tocsgetserviceinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_GetServiceInstanceOutput">GetServiceInstanceOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceinstanceoutput"></a>
<a id="schema_GetServiceInstanceOutput"></a>
<a id="tocSgetserviceinstanceoutput"></a>
<a id="tocsgetserviceinstanceoutput"></a>

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstance|object|true|none|none|

<h2 id="tocS_GetServiceInstanceInput">GetServiceInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceinstanceinput"></a>
<a id="schema_GetServiceInstanceInput"></a>
<a id="tocSgetserviceinstanceinput"></a>
<a id="tocsgetserviceinstanceinput"></a>

```json
{
  "name": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_GetServiceInstanceSyncStatusOutput">GetServiceInstanceSyncStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceinstancesyncstatusoutput"></a>
<a id="schema_GetServiceInstanceSyncStatusOutput"></a>
<a id="tocSgetserviceinstancesyncstatusoutput"></a>
<a id="tocsgetserviceinstancesyncstatusoutput"></a>

```json
{
  "desiredState": {
    "branch": {},
    "directory": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "sha": {}
  },
  "latestSuccessfulSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    }
  },
  "latestSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desiredState|object|false|none|none|
|latestSuccessfulSync|object|false|none|none|
|latestSync|object|false|none|none|

<h2 id="tocS_GetServiceInstanceSyncStatusInput">GetServiceInstanceSyncStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceinstancesyncstatusinput"></a>
<a id="schema_GetServiceInstanceSyncStatusInput"></a>
<a id="tocSgetserviceinstancesyncstatusinput"></a>
<a id="tocsgetserviceinstancesyncstatusinput"></a>

```json
{
  "serviceInstanceName": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstanceName|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_GetServiceSyncBlockerSummaryOutput">GetServiceSyncBlockerSummaryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesyncblockersummaryoutput"></a>
<a id="schema_GetServiceSyncBlockerSummaryOutput"></a>
<a id="tocSgetservicesyncblockersummaryoutput"></a>
<a id="tocsgetservicesyncblockersummaryoutput"></a>

```json
{
  "serviceSyncBlockerSummary": {
    "latestBlockers": {},
    "serviceInstanceName": {},
    "serviceName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceSyncBlockerSummary|object|false|none|none|

<h2 id="tocS_GetServiceSyncBlockerSummaryInput">GetServiceSyncBlockerSummaryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesyncblockersummaryinput"></a>
<a id="schema_GetServiceSyncBlockerSummaryInput"></a>
<a id="tocSgetservicesyncblockersummaryinput"></a>
<a id="tocsgetservicesyncblockersummaryinput"></a>

```json
{
  "serviceInstanceName": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstanceName|object|false|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_GetServiceSyncConfigOutput">GetServiceSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesyncconfigoutput"></a>
<a id="schema_GetServiceSyncConfigOutput"></a>
<a id="tocSgetservicesyncconfigoutput"></a>
<a id="tocsgetservicesyncconfigoutput"></a>

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceSyncConfig|object|false|none|none|

<h2 id="tocS_GetServiceSyncConfigInput">GetServiceSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesyncconfiginput"></a>
<a id="schema_GetServiceSyncConfigInput"></a>
<a id="tocSgetservicesyncconfiginput"></a>
<a id="tocsgetservicesyncconfiginput"></a>

```json
{
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|true|none|none|

<h2 id="tocS_GetServiceTemplateOutput">GetServiceTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicetemplateoutput"></a>
<a id="schema_GetServiceTemplateOutput"></a>
<a id="tocSgetservicetemplateoutput"></a>
<a id="tocsgetservicetemplateoutput"></a>

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplate|object|true|none|none|

<h2 id="tocS_GetServiceTemplateInput">GetServiceTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicetemplateinput"></a>
<a id="schema_GetServiceTemplateInput"></a>
<a id="tocSgetservicetemplateinput"></a>
<a id="tocsgetservicetemplateinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_GetServiceTemplateVersionOutput">GetServiceTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicetemplateversionoutput"></a>
<a id="schema_GetServiceTemplateVersionOutput"></a>
<a id="tocSgetservicetemplateversionoutput"></a>
<a id="tocsgetservicetemplateversionoutput"></a>

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplateVersion|object|true|none|none|

<h2 id="tocS_GetServiceTemplateVersionInput">GetServiceTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetservicetemplateversioninput"></a>
<a id="schema_GetServiceTemplateVersionInput"></a>
<a id="tocSgetservicetemplateversioninput"></a>
<a id="tocsgetservicetemplateversioninput"></a>

```json
{
  "majorVersion": {},
  "minorVersion": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_GetTemplateSyncConfigOutput">GetTemplateSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplatesyncconfigoutput"></a>
<a id="schema_GetTemplateSyncConfigOutput"></a>
<a id="tocSgettemplatesyncconfigoutput"></a>
<a id="tocsgettemplatesyncconfigoutput"></a>

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateSyncConfig|object|false|none|none|

<h2 id="tocS_GetTemplateSyncConfigInput">GetTemplateSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplatesyncconfiginput"></a>
<a id="schema_GetTemplateSyncConfigInput"></a>
<a id="tocSgettemplatesyncconfiginput"></a>
<a id="tocsgettemplatesyncconfiginput"></a>

```json
{
  "templateName": {},
  "templateType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateName|object|true|none|none|
|templateType|object|true|none|none|

<h2 id="tocS_GetTemplateSyncStatusOutput">GetTemplateSyncStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplatesyncstatusoutput"></a>
<a id="schema_GetTemplateSyncStatusOutput"></a>
<a id="tocSgettemplatesyncstatusoutput"></a>
<a id="tocsgettemplatesyncstatusoutput"></a>

```json
{
  "desiredState": {
    "branch": {},
    "directory": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "sha": {}
  },
  "latestSuccessfulSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    }
  },
  "latestSync": {
    "events": {},
    "initialRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    },
    "startedAt": {},
    "status": {},
    "target": {},
    "targetRevision": {
      "branch": {},
      "directory": {},
      "repositoryName": {},
      "repositoryProvider": {},
      "sha": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desiredState|object|false|none|none|
|latestSuccessfulSync|object|false|none|none|
|latestSync|object|false|none|none|

<h2 id="tocS_GetTemplateSyncStatusInput">GetTemplateSyncStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplatesyncstatusinput"></a>
<a id="schema_GetTemplateSyncStatusInput"></a>
<a id="tocSgettemplatesyncstatusinput"></a>
<a id="tocsgettemplatesyncstatusinput"></a>

```json
{
  "templateName": {},
  "templateType": {},
  "templateVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateName|object|true|none|none|
|templateType|object|true|none|none|
|templateVersion|object|true|none|none|

<h2 id="tocS_ListComponentOutputsOutput">ListComponentOutputsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentoutputsoutput"></a>
<a id="schema_ListComponentOutputsOutput"></a>
<a id="tocSlistcomponentoutputsoutput"></a>
<a id="tocslistcomponentoutputsoutput"></a>

```json
{
  "nextToken": {},
  "outputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|outputs|object|true|none|none|

<h2 id="tocS_ListComponentOutputsInput">ListComponentOutputsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentoutputsinput"></a>
<a id="schema_ListComponentOutputsInput"></a>
<a id="tocSlistcomponentoutputsinput"></a>
<a id="tocslistcomponentoutputsinput"></a>

```json
{
  "componentName": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentName|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListComponentProvisionedResourcesOutput">ListComponentProvisionedResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentprovisionedresourcesoutput"></a>
<a id="schema_ListComponentProvisionedResourcesOutput"></a>
<a id="tocSlistcomponentprovisionedresourcesoutput"></a>
<a id="tocslistcomponentprovisionedresourcesoutput"></a>

```json
{
  "nextToken": {},
  "provisionedResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|provisionedResources|object|true|none|none|

<h2 id="tocS_ListComponentProvisionedResourcesInput">ListComponentProvisionedResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentprovisionedresourcesinput"></a>
<a id="schema_ListComponentProvisionedResourcesInput"></a>
<a id="tocSlistcomponentprovisionedresourcesinput"></a>
<a id="tocslistcomponentprovisionedresourcesinput"></a>

```json
{
  "componentName": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentName|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListComponentsOutput">ListComponentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsoutput"></a>
<a id="schema_ListComponentsOutput"></a>
<a id="tocSlistcomponentsoutput"></a>
<a id="tocslistcomponentsoutput"></a>

```json
{
  "components": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListComponentsInput">ListComponentsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsinput"></a>
<a id="schema_ListComponentsInput"></a>
<a id="tocSlistcomponentsinput"></a>
<a id="tocslistcomponentsinput"></a>

```json
{
  "environmentName": {},
  "maxResults": {},
  "nextToken": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentName|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|serviceInstanceName|object|false|none|none|
|serviceName|object|false|none|none|

<h2 id="tocS_ListEnvironmentAccountConnectionsOutput">ListEnvironmentAccountConnectionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentaccountconnectionsoutput"></a>
<a id="schema_ListEnvironmentAccountConnectionsOutput"></a>
<a id="tocSlistenvironmentaccountconnectionsoutput"></a>
<a id="tocslistenvironmentaccountconnectionsoutput"></a>

```json
{
  "environmentAccountConnections": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentAccountConnections|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEnvironmentAccountConnectionsInput">ListEnvironmentAccountConnectionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentaccountconnectionsinput"></a>
<a id="schema_ListEnvironmentAccountConnectionsInput"></a>
<a id="tocSlistenvironmentaccountconnectionsinput"></a>
<a id="tocslistenvironmentaccountconnectionsinput"></a>

```json
{
  "environmentName": {},
  "maxResults": {},
  "nextToken": {},
  "requestedBy": {},
  "statuses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentName|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|requestedBy|object|true|none|none|
|statuses|object|false|none|none|

<h2 id="tocS_ListEnvironmentOutputsOutput">ListEnvironmentOutputsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentoutputsoutput"></a>
<a id="schema_ListEnvironmentOutputsOutput"></a>
<a id="tocSlistenvironmentoutputsoutput"></a>
<a id="tocslistenvironmentoutputsoutput"></a>

```json
{
  "nextToken": {},
  "outputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|outputs|object|true|none|none|

<h2 id="tocS_ListEnvironmentOutputsInput">ListEnvironmentOutputsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentoutputsinput"></a>
<a id="schema_ListEnvironmentOutputsInput"></a>
<a id="tocSlistenvironmentoutputsinput"></a>
<a id="tocslistenvironmentoutputsinput"></a>

```json
{
  "environmentName": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentName|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEnvironmentProvisionedResourcesOutput">ListEnvironmentProvisionedResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentprovisionedresourcesoutput"></a>
<a id="schema_ListEnvironmentProvisionedResourcesOutput"></a>
<a id="tocSlistenvironmentprovisionedresourcesoutput"></a>
<a id="tocslistenvironmentprovisionedresourcesoutput"></a>

```json
{
  "nextToken": {},
  "provisionedResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|provisionedResources|object|true|none|none|

<h2 id="tocS_ListEnvironmentProvisionedResourcesInput">ListEnvironmentProvisionedResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentprovisionedresourcesinput"></a>
<a id="schema_ListEnvironmentProvisionedResourcesInput"></a>
<a id="tocSlistenvironmentprovisionedresourcesinput"></a>
<a id="tocslistenvironmentprovisionedresourcesinput"></a>

```json
{
  "environmentName": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentName|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEnvironmentTemplateVersionsOutput">ListEnvironmentTemplateVersionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmenttemplateversionsoutput"></a>
<a id="schema_ListEnvironmentTemplateVersionsOutput"></a>
<a id="tocSlistenvironmenttemplateversionsoutput"></a>
<a id="tocslistenvironmenttemplateversionsoutput"></a>

```json
{
  "nextToken": {},
  "templateVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|templateVersions|object|true|none|none|

<h2 id="tocS_ListEnvironmentTemplateVersionsInput">ListEnvironmentTemplateVersionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmenttemplateversionsinput"></a>
<a id="schema_ListEnvironmentTemplateVersionsInput"></a>
<a id="tocSlistenvironmenttemplateversionsinput"></a>
<a id="tocslistenvironmenttemplateversionsinput"></a>

```json
{
  "majorVersion": {},
  "maxResults": {},
  "nextToken": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_ListEnvironmentTemplatesOutput">ListEnvironmentTemplatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmenttemplatesoutput"></a>
<a id="schema_ListEnvironmentTemplatesOutput"></a>
<a id="tocSlistenvironmenttemplatesoutput"></a>
<a id="tocslistenvironmenttemplatesoutput"></a>

```json
{
  "nextToken": {},
  "templates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|templates|object|true|none|none|

<h2 id="tocS_ListEnvironmentTemplatesInput">ListEnvironmentTemplatesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmenttemplatesinput"></a>
<a id="schema_ListEnvironmentTemplatesInput"></a>
<a id="tocSlistenvironmenttemplatesinput"></a>
<a id="tocslistenvironmenttemplatesinput"></a>

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

<h2 id="tocS_ListEnvironmentsOutput">ListEnvironmentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsoutput"></a>
<a id="schema_ListEnvironmentsOutput"></a>
<a id="tocSlistenvironmentsoutput"></a>
<a id="tocslistenvironmentsoutput"></a>

```json
{
  "environments": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEnvironmentsInput">ListEnvironmentsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsinput"></a>
<a id="schema_ListEnvironmentsInput"></a>
<a id="tocSlistenvironmentsinput"></a>
<a id="tocslistenvironmentsinput"></a>

```json
{
  "environmentTemplates": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplates|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRepositoriesOutput">ListRepositoriesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesoutput"></a>
<a id="schema_ListRepositoriesOutput"></a>
<a id="tocSlistrepositoriesoutput"></a>
<a id="tocslistrepositoriesoutput"></a>

```json
{
  "nextToken": {},
  "repositories": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|repositories|object|true|none|none|

<h2 id="tocS_ListRepositoriesInput">ListRepositoriesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesinput"></a>
<a id="schema_ListRepositoriesInput"></a>
<a id="tocSlistrepositoriesinput"></a>
<a id="tocslistrepositoriesinput"></a>

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

<h2 id="tocS_ListRepositorySyncDefinitionsOutput">ListRepositorySyncDefinitionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositorysyncdefinitionsoutput"></a>
<a id="schema_ListRepositorySyncDefinitionsOutput"></a>
<a id="tocSlistrepositorysyncdefinitionsoutput"></a>
<a id="tocslistrepositorysyncdefinitionsoutput"></a>

```json
{
  "nextToken": {},
  "syncDefinitions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|syncDefinitions|object|true|none|none|

<h2 id="tocS_ListRepositorySyncDefinitionsInput">ListRepositorySyncDefinitionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositorysyncdefinitionsinput"></a>
<a id="schema_ListRepositorySyncDefinitionsInput"></a>
<a id="tocSlistrepositorysyncdefinitionsinput"></a>
<a id="tocslistrepositorysyncdefinitionsinput"></a>

```json
{
  "nextToken": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "syncType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|syncType|object|true|none|none|

<h2 id="tocS_ListServiceInstanceOutputsOutput">ListServiceInstanceOutputsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstanceoutputsoutput"></a>
<a id="schema_ListServiceInstanceOutputsOutput"></a>
<a id="tocSlistserviceinstanceoutputsoutput"></a>
<a id="tocslistserviceinstanceoutputsoutput"></a>

```json
{
  "nextToken": {},
  "outputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|outputs|object|true|none|none|

<h2 id="tocS_ListServiceInstanceOutputsInput">ListServiceInstanceOutputsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstanceoutputsinput"></a>
<a id="schema_ListServiceInstanceOutputsInput"></a>
<a id="tocSlistserviceinstanceoutputsinput"></a>
<a id="tocslistserviceinstanceoutputsinput"></a>

```json
{
  "nextToken": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|serviceInstanceName|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_ListServiceInstanceProvisionedResourcesOutput">ListServiceInstanceProvisionedResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstanceprovisionedresourcesoutput"></a>
<a id="schema_ListServiceInstanceProvisionedResourcesOutput"></a>
<a id="tocSlistserviceinstanceprovisionedresourcesoutput"></a>
<a id="tocslistserviceinstanceprovisionedresourcesoutput"></a>

```json
{
  "nextToken": {},
  "provisionedResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|provisionedResources|object|true|none|none|

<h2 id="tocS_ListServiceInstanceProvisionedResourcesInput">ListServiceInstanceProvisionedResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstanceprovisionedresourcesinput"></a>
<a id="schema_ListServiceInstanceProvisionedResourcesInput"></a>
<a id="tocSlistserviceinstanceprovisionedresourcesinput"></a>
<a id="tocslistserviceinstanceprovisionedresourcesinput"></a>

```json
{
  "nextToken": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|serviceInstanceName|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_ListServiceInstancesOutput">ListServiceInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstancesoutput"></a>
<a id="schema_ListServiceInstancesOutput"></a>
<a id="tocSlistserviceinstancesoutput"></a>
<a id="tocslistserviceinstancesoutput"></a>

```json
{
  "nextToken": {},
  "serviceInstances": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|serviceInstances|object|true|none|none|

<h2 id="tocS_ListServiceInstancesInput">ListServiceInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstancesinput"></a>
<a id="schema_ListServiceInstancesInput"></a>
<a id="tocSlistserviceinstancesinput"></a>
<a id="tocslistserviceinstancesinput"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {},
  "serviceName": {},
  "sortBy": {},
  "sortOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|serviceName|object|false|none|none|
|sortBy|object|false|none|none|
|sortOrder|object|false|none|none|

<h2 id="tocS_ListServicePipelineOutputsOutput">ListServicePipelineOutputsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicepipelineoutputsoutput"></a>
<a id="schema_ListServicePipelineOutputsOutput"></a>
<a id="tocSlistservicepipelineoutputsoutput"></a>
<a id="tocslistservicepipelineoutputsoutput"></a>

```json
{
  "nextToken": {},
  "outputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|outputs|object|true|none|none|

<h2 id="tocS_ListServicePipelineOutputsInput">ListServicePipelineOutputsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicepipelineoutputsinput"></a>
<a id="schema_ListServicePipelineOutputsInput"></a>
<a id="tocSlistservicepipelineoutputsinput"></a>
<a id="tocslistservicepipelineoutputsinput"></a>

```json
{
  "nextToken": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_ListServicePipelineProvisionedResourcesOutput">ListServicePipelineProvisionedResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicepipelineprovisionedresourcesoutput"></a>
<a id="schema_ListServicePipelineProvisionedResourcesOutput"></a>
<a id="tocSlistservicepipelineprovisionedresourcesoutput"></a>
<a id="tocslistservicepipelineprovisionedresourcesoutput"></a>

```json
{
  "nextToken": {},
  "provisionedResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|provisionedResources|object|true|none|none|

<h2 id="tocS_ListServicePipelineProvisionedResourcesInput">ListServicePipelineProvisionedResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicepipelineprovisionedresourcesinput"></a>
<a id="schema_ListServicePipelineProvisionedResourcesInput"></a>
<a id="tocSlistservicepipelineprovisionedresourcesinput"></a>
<a id="tocslistservicepipelineprovisionedresourcesinput"></a>

```json
{
  "nextToken": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_ListServiceTemplateVersionsOutput">ListServiceTemplateVersionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicetemplateversionsoutput"></a>
<a id="schema_ListServiceTemplateVersionsOutput"></a>
<a id="tocSlistservicetemplateversionsoutput"></a>
<a id="tocslistservicetemplateversionsoutput"></a>

```json
{
  "nextToken": {},
  "templateVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|templateVersions|object|true|none|none|

<h2 id="tocS_ListServiceTemplateVersionsInput">ListServiceTemplateVersionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicetemplateversionsinput"></a>
<a id="schema_ListServiceTemplateVersionsInput"></a>
<a id="tocSlistservicetemplateversionsinput"></a>
<a id="tocslistservicetemplateversionsinput"></a>

```json
{
  "majorVersion": {},
  "maxResults": {},
  "nextToken": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_ListServiceTemplatesOutput">ListServiceTemplatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicetemplatesoutput"></a>
<a id="schema_ListServiceTemplatesOutput"></a>
<a id="tocSlistservicetemplatesoutput"></a>
<a id="tocslistservicetemplatesoutput"></a>

```json
{
  "nextToken": {},
  "templates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|templates|object|true|none|none|

<h2 id="tocS_ListServiceTemplatesInput">ListServiceTemplatesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicetemplatesinput"></a>
<a id="schema_ListServiceTemplatesInput"></a>
<a id="tocSlistservicetemplatesinput"></a>
<a id="tocslistservicetemplatesinput"></a>

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

<h2 id="tocS_ListServicesOutput">ListServicesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesoutput"></a>
<a id="schema_ListServicesOutput"></a>
<a id="tocSlistservicesoutput"></a>
<a id="tocslistservicesoutput"></a>

```json
{
  "nextToken": {},
  "services": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|services|object|true|none|none|

<h2 id="tocS_ListServicesInput">ListServicesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesinput"></a>
<a id="schema_ListServicesInput"></a>
<a id="tocSlistservicesinput"></a>
<a id="tocslistservicesinput"></a>

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
  "nextToken": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|tags|object|true|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "maxResults": {},
  "nextToken": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|resourceArn|object|true|none|none|

<h2 id="tocS_NotifyResourceDeploymentStatusChangeOutput">NotifyResourceDeploymentStatusChangeOutput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyresourcedeploymentstatuschangeoutput"></a>
<a id="schema_NotifyResourceDeploymentStatusChangeOutput"></a>
<a id="tocSnotifyresourcedeploymentstatuschangeoutput"></a>
<a id="tocsnotifyresourcedeploymentstatuschangeoutput"></a>

```json
{}
```

<h2 id="tocS_NotifyResourceDeploymentStatusChangeInput">NotifyResourceDeploymentStatusChangeInput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyresourcedeploymentstatuschangeinput"></a>
<a id="schema_NotifyResourceDeploymentStatusChangeInput"></a>
<a id="tocSnotifyresourcedeploymentstatuschangeinput"></a>
<a id="tocsnotifyresourcedeploymentstatuschangeinput"></a>

```json
{
  "deploymentId": {},
  "outputs": {},
  "resourceArn": {},
  "status": {},
  "statusMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|outputs|object|false|none|none|
|resourceArn|object|true|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|

<h2 id="tocS_RejectEnvironmentAccountConnectionOutput">RejectEnvironmentAccountConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemarejectenvironmentaccountconnectionoutput"></a>
<a id="schema_RejectEnvironmentAccountConnectionOutput"></a>
<a id="tocSrejectenvironmentaccountconnectionoutput"></a>
<a id="tocsrejectenvironmentaccountconnectionoutput"></a>

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentAccountConnection|object|true|none|none|

<h2 id="tocS_RejectEnvironmentAccountConnectionInput">RejectEnvironmentAccountConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemarejectenvironmentaccountconnectioninput"></a>
<a id="schema_RejectEnvironmentAccountConnectionInput"></a>
<a id="tocSrejectenvironmentaccountconnectioninput"></a>
<a id="tocsrejectenvironmentaccountconnectioninput"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

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

<h2 id="tocS_UpdateAccountSettingsOutput">UpdateAccountSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountsettingsoutput"></a>
<a id="schema_UpdateAccountSettingsOutput"></a>
<a id="tocSupdateaccountsettingsoutput"></a>
<a id="tocsupdateaccountsettingsoutput"></a>

```json
{
  "accountSettings": {
    "pipelineCodebuildRoleArn": {},
    "pipelineProvisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "pipelineServiceRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountSettings|object|true|none|none|

<h2 id="tocS_UpdateAccountSettingsInput">UpdateAccountSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountsettingsinput"></a>
<a id="schema_UpdateAccountSettingsInput"></a>
<a id="tocSupdateaccountsettingsinput"></a>
<a id="tocsupdateaccountsettingsinput"></a>

```json
{
  "deletePipelineProvisioningRepository": {},
  "pipelineCodebuildRoleArn": {},
  "pipelineProvisioningRepository": {
    "branch": {},
    "name": {},
    "provider": {}
  },
  "pipelineServiceRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletePipelineProvisioningRepository|object|false|none|none|
|pipelineCodebuildRoleArn|object|false|none|none|
|pipelineProvisioningRepository|object|false|none|none|
|pipelineServiceRoleArn|object|false|none|none|

<h2 id="tocS_UpdateComponentOutput">UpdateComponentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomponentoutput"></a>
<a id="schema_UpdateComponentOutput"></a>
<a id="tocSupdatecomponentoutput"></a>
<a id="tocsupdatecomponentoutput"></a>

```json
{
  "component": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {},
    "serviceSpec": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|object|true|none|none|

<h2 id="tocS_UpdateComponentInput">UpdateComponentInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomponentinput"></a>
<a id="schema_UpdateComponentInput"></a>
<a id="tocSupdatecomponentinput"></a>
<a id="tocsupdatecomponentinput"></a>

```json
{
  "clientToken": {},
  "deploymentType": {},
  "description": {},
  "name": {},
  "serviceInstanceName": {},
  "serviceName": {},
  "serviceSpec": {},
  "templateFile": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|deploymentType|object|true|none|none|
|description|object|false|none|none|
|name|object|true|none|none|
|serviceInstanceName|object|false|none|none|
|serviceName|object|false|none|none|
|serviceSpec|object|false|none|none|
|templateFile|object|false|none|none|

<h2 id="tocS_UpdateEnvironmentOutput">UpdateEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentoutput"></a>
<a id="schema_UpdateEnvironmentOutput"></a>
<a id="tocSupdateenvironmentoutput"></a>
<a id="tocsupdateenvironmentoutput"></a>

```json
{
  "environment": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "provisioningRepository": {
      "arn": {},
      "branch": {},
      "name": {},
      "provider": {}
    },
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|object|true|none|none|

<h2 id="tocS_UpdateEnvironmentInput">UpdateEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentinput"></a>
<a id="schema_UpdateEnvironmentInput"></a>
<a id="tocSupdateenvironmentinput"></a>
<a id="tocsupdateenvironmentinput"></a>

```json
{
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "deploymentType": {},
  "description": {},
  "environmentAccountConnectionId": {},
  "name": {},
  "protonServiceRoleArn": {},
  "provisioningRepository": {
    "branch": {},
    "name": {},
    "provider": {}
  },
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codebuildRoleArn|object|false|none|none|
|componentRoleArn|object|false|none|none|
|deploymentType|object|true|none|none|
|description|object|false|none|none|
|environmentAccountConnectionId|object|false|none|none|
|name|object|true|none|none|
|protonServiceRoleArn|object|false|none|none|
|provisioningRepository|object|false|none|none|
|spec|object|false|none|none|
|templateMajorVersion|object|false|none|none|
|templateMinorVersion|object|false|none|none|

<h2 id="tocS_UpdateEnvironmentAccountConnectionOutput">UpdateEnvironmentAccountConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentaccountconnectionoutput"></a>
<a id="schema_UpdateEnvironmentAccountConnectionOutput"></a>
<a id="tocSupdateenvironmentaccountconnectionoutput"></a>
<a id="tocsupdateenvironmentaccountconnectionoutput"></a>

```json
{
  "environmentAccountConnection": {
    "arn": {},
    "codebuildRoleArn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentAccountConnection|object|true|none|none|

<h2 id="tocS_UpdateEnvironmentAccountConnectionInput">UpdateEnvironmentAccountConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentaccountconnectioninput"></a>
<a id="schema_UpdateEnvironmentAccountConnectionInput"></a>
<a id="tocSupdateenvironmentaccountconnectioninput"></a>
<a id="tocsupdateenvironmentaccountconnectioninput"></a>

```json
{
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "id": {},
  "roleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codebuildRoleArn|object|false|none|none|
|componentRoleArn|object|false|none|none|
|id|object|true|none|none|
|roleArn|object|false|none|none|

<h2 id="tocS_UpdateEnvironmentTemplateOutput">UpdateEnvironmentTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmenttemplateoutput"></a>
<a id="schema_UpdateEnvironmentTemplateOutput"></a>
<a id="tocSupdateenvironmenttemplateoutput"></a>
<a id="tocsupdateenvironmenttemplateoutput"></a>

```json
{
  "environmentTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplate|object|true|none|none|

<h2 id="tocS_UpdateEnvironmentTemplateInput">UpdateEnvironmentTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmenttemplateinput"></a>
<a id="schema_UpdateEnvironmentTemplateInput"></a>
<a id="tocSupdateenvironmenttemplateinput"></a>
<a id="tocsupdateenvironmenttemplateinput"></a>

```json
{
  "description": {},
  "displayName": {},
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|displayName|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_UpdateEnvironmentTemplateVersionOutput">UpdateEnvironmentTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmenttemplateversionoutput"></a>
<a id="schema_UpdateEnvironmentTemplateVersionOutput"></a>
<a id="tocSupdateenvironmenttemplateversionoutput"></a>
<a id="tocsupdateenvironmenttemplateversionoutput"></a>

```json
{
  "environmentTemplateVersion": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentTemplateVersion|object|true|none|none|

<h2 id="tocS_UpdateEnvironmentTemplateVersionInput">UpdateEnvironmentTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmenttemplateversioninput"></a>
<a id="schema_UpdateEnvironmentTemplateVersionInput"></a>
<a id="tocSupdateenvironmenttemplateversioninput"></a>
<a id="tocsupdateenvironmenttemplateversioninput"></a>

```json
{
  "description": {},
  "majorVersion": {},
  "minorVersion": {},
  "status": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|status|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_UpdateServiceOutput">UpdateServiceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceoutput"></a>
<a id="schema_UpdateServiceOutput"></a>
<a id="tocSupdateserviceoutput"></a>
<a id="tocsupdateserviceoutput"></a>

```json
{
  "service": {
    "arn": {},
    "branchName": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "pipeline": {
      "arn": {},
      "createdAt": {},
      "deploymentStatus": {},
      "deploymentStatusMessage": {},
      "lastDeploymentAttemptedAt": {},
      "lastDeploymentSucceededAt": {},
      "spec": {},
      "templateMajorVersion": {},
      "templateMinorVersion": {},
      "templateName": {}
    },
    "repositoryConnectionArn": {},
    "repositoryId": {},
    "spec": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|true|none|none|

<h2 id="tocS_UpdateServiceInput">UpdateServiceInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceinput"></a>
<a id="schema_UpdateServiceInput"></a>
<a id="tocSupdateserviceinput"></a>
<a id="tocsupdateserviceinput"></a>

```json
{
  "description": {},
  "name": {},
  "spec": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|name|object|true|none|none|
|spec|object|false|none|none|

<h2 id="tocS_UpdateServiceInstanceOutput">UpdateServiceInstanceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceinstanceoutput"></a>
<a id="schema_UpdateServiceInstanceOutput"></a>
<a id="tocSupdateserviceinstanceoutput"></a>
<a id="tocsupdateserviceinstanceoutput"></a>

```json
{
  "serviceInstance": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastClientRequestToken": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstance|object|true|none|none|

<h2 id="tocS_UpdateServiceInstanceInput">UpdateServiceInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceinstanceinput"></a>
<a id="schema_UpdateServiceInstanceInput"></a>
<a id="tocSupdateserviceinstanceinput"></a>
<a id="tocsupdateserviceinstanceinput"></a>

```json
{
  "clientToken": {},
  "deploymentType": {},
  "name": {},
  "serviceName": {},
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|deploymentType|object|true|none|none|
|name|object|true|none|none|
|serviceName|object|true|none|none|
|spec|object|false|none|none|
|templateMajorVersion|object|false|none|none|
|templateMinorVersion|object|false|none|none|

<h2 id="tocS_UpdateServicePipelineOutput">UpdateServicePipelineOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicepipelineoutput"></a>
<a id="schema_UpdateServicePipelineOutput"></a>
<a id="tocSupdateservicepipelineoutput"></a>
<a id="tocsupdateservicepipelineoutput"></a>

```json
{
  "pipeline": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|true|none|none|

<h2 id="tocS_UpdateServicePipelineInput">UpdateServicePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicepipelineinput"></a>
<a id="schema_UpdateServicePipelineInput"></a>
<a id="tocSupdateservicepipelineinput"></a>
<a id="tocsupdateservicepipelineinput"></a>

```json
{
  "deploymentType": {},
  "serviceName": {},
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentType|object|true|none|none|
|serviceName|object|true|none|none|
|spec|object|true|none|none|
|templateMajorVersion|object|false|none|none|
|templateMinorVersion|object|false|none|none|

<h2 id="tocS_UpdateServiceSyncBlockerOutput">UpdateServiceSyncBlockerOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesyncblockeroutput"></a>
<a id="schema_UpdateServiceSyncBlockerOutput"></a>
<a id="tocSupdateservicesyncblockeroutput"></a>
<a id="tocsupdateservicesyncblockeroutput"></a>

```json
{
  "serviceInstanceName": {},
  "serviceName": {},
  "serviceSyncBlocker": {
    "contexts": {},
    "createdAt": {},
    "createdReason": {},
    "id": {},
    "resolvedAt": {},
    "resolvedReason": {},
    "status": {},
    "type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceInstanceName|object|false|none|none|
|serviceName|object|true|none|none|
|serviceSyncBlocker|object|true|none|none|

<h2 id="tocS_UpdateServiceSyncBlockerInput">UpdateServiceSyncBlockerInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesyncblockerinput"></a>
<a id="schema_UpdateServiceSyncBlockerInput"></a>
<a id="tocSupdateservicesyncblockerinput"></a>
<a id="tocsupdateservicesyncblockerinput"></a>

```json
{
  "id": {},
  "resolvedReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|resolvedReason|object|true|none|none|

<h2 id="tocS_UpdateServiceSyncConfigOutput">UpdateServiceSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesyncconfigoutput"></a>
<a id="schema_UpdateServiceSyncConfigOutput"></a>
<a id="tocSupdateservicesyncconfigoutput"></a>
<a id="tocsupdateservicesyncconfigoutput"></a>

```json
{
  "serviceSyncConfig": {
    "branch": {},
    "filePath": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "serviceName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceSyncConfig|object|false|none|none|

<h2 id="tocS_UpdateServiceSyncConfigInput">UpdateServiceSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesyncconfiginput"></a>
<a id="schema_UpdateServiceSyncConfigInput"></a>
<a id="tocSupdateservicesyncconfiginput"></a>
<a id="tocsupdateservicesyncconfiginput"></a>

```json
{
  "branch": {},
  "filePath": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "serviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|filePath|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_UpdateServiceTemplateOutput">UpdateServiceTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicetemplateoutput"></a>
<a id="schema_UpdateServiceTemplateOutput"></a>
<a id="tocSupdateservicetemplateoutput"></a>
<a id="tocsupdateservicetemplateoutput"></a>

```json
{
  "serviceTemplate": {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "encryptionKey": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplate|object|true|none|none|

<h2 id="tocS_UpdateServiceTemplateInput">UpdateServiceTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicetemplateinput"></a>
<a id="schema_UpdateServiceTemplateInput"></a>
<a id="tocSupdateservicetemplateinput"></a>
<a id="tocsupdateservicetemplateinput"></a>

```json
{
  "description": {},
  "displayName": {},
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|displayName|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_UpdateServiceTemplateVersionOutput">UpdateServiceTemplateVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicetemplateversionoutput"></a>
<a id="schema_UpdateServiceTemplateVersionOutput"></a>
<a id="tocSupdateservicetemplateversionoutput"></a>
<a id="tocsupdateservicetemplateversionoutput"></a>

```json
{
  "serviceTemplateVersion": {
    "arn": {},
    "compatibleEnvironmentTemplates": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "schema": {},
    "status": {},
    "statusMessage": {},
    "supportedComponentSources": {},
    "templateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceTemplateVersion|object|true|none|none|

<h2 id="tocS_UpdateServiceTemplateVersionInput">UpdateServiceTemplateVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicetemplateversioninput"></a>
<a id="schema_UpdateServiceTemplateVersionInput"></a>
<a id="tocSupdateservicetemplateversioninput"></a>
<a id="tocsupdateservicetemplateversioninput"></a>

```json
{
  "compatibleEnvironmentTemplates": {},
  "description": {},
  "majorVersion": {},
  "minorVersion": {},
  "status": {},
  "supportedComponentSources": {},
  "templateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compatibleEnvironmentTemplates|object|false|none|none|
|description|object|false|none|none|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|status|object|false|none|none|
|supportedComponentSources|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_UpdateTemplateSyncConfigOutput">UpdateTemplateSyncConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplatesyncconfigoutput"></a>
<a id="schema_UpdateTemplateSyncConfigOutput"></a>
<a id="tocSupdatetemplatesyncconfigoutput"></a>
<a id="tocsupdatetemplatesyncconfigoutput"></a>

```json
{
  "templateSyncConfig": {
    "branch": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "subdirectory": {},
    "templateName": {},
    "templateType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateSyncConfig|object|false|none|none|

<h2 id="tocS_UpdateTemplateSyncConfigInput">UpdateTemplateSyncConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplatesyncconfiginput"></a>
<a id="schema_UpdateTemplateSyncConfigInput"></a>
<a id="tocSupdatetemplatesyncconfiginput"></a>
<a id="tocsupdatetemplatesyncconfiginput"></a>

```json
{
  "branch": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "subdirectory": {},
  "templateName": {},
  "templateType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|subdirectory|object|false|none|none|
|templateName|object|true|none|none|
|templateType|object|true|none|none|

<h2 id="tocS_EnvironmentAccountConnectionId">EnvironmentAccountConnectionId</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnectionid"></a>
<a id="schema_EnvironmentAccountConnectionId"></a>
<a id="tocSenvironmentaccountconnectionid"></a>
<a id="tocsenvironmentaccountconnectionid"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentAccountConnection">EnvironmentAccountConnection</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnection"></a>
<a id="schema_EnvironmentAccountConnection"></a>
<a id="tocSenvironmentaccountconnection"></a>
<a id="tocsenvironmentaccountconnection"></a>

```json
{
  "arn": {},
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "environmentAccountId": {},
  "environmentName": {},
  "id": {},
  "lastModifiedAt": {},
  "managementAccountId": {},
  "requestedAt": {},
  "roleArn": {},
  "status": {}
}
```

Detailed data of an Proton environment account connection resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|codebuildRoleArn|object|false|none|none|
|componentRoleArn|object|false|none|none|
|environmentAccountId|object|true|none|none|
|environmentName|object|true|none|none|
|id|object|true|none|none|
|lastModifiedAt|object|true|none|none|
|managementAccountId|object|true|none|none|
|requestedAt|object|true|none|none|
|roleArn|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_RoleArnOrEmptyString">RoleArnOrEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemarolearnoremptystring"></a>
<a id="schema_RoleArnOrEmptyString"></a>
<a id="tocSrolearnoremptystring"></a>
<a id="tocsrolearnoremptystring"></a>

```json
"string"
```

<h2 id="tocS_RepositoryBranch">RepositoryBranch</h2>
<!-- backwards compatibility -->
<a id="schemarepositorybranch"></a>
<a id="schema_RepositoryBranch"></a>
<a id="tocSrepositorybranch"></a>
<a id="tocsrepositorybranch"></a>

```json
{
  "arn": {},
  "branch": {},
  "name": {},
  "provider": {}
}
```

Detail data for a linked repository branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|branch|object|true|none|none|
|name|object|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_AccountSettings">AccountSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsettings"></a>
<a id="schema_AccountSettings"></a>
<a id="tocSaccountsettings"></a>
<a id="tocsaccountsettings"></a>

```json
{
  "pipelineCodebuildRoleArn": {},
  "pipelineProvisioningRepository": {
    "arn": {},
    "branch": {},
    "name": {},
    "provider": {}
  },
  "pipelineServiceRoleArn": {}
}
```

Proton settings that are used for multiple services in the Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineCodebuildRoleArn|object|false|none|none|
|pipelineProvisioningRepository|object|false|none|none|
|pipelineServiceRoleArn|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"string"
```

<h2 id="tocS_BlockerStatus">BlockerStatus</h2>
<!-- backwards compatibility -->
<a id="schemablockerstatus"></a>
<a id="schema_BlockerStatus"></a>
<a id="tocSblockerstatus"></a>
<a id="tocsblockerstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_BlockerType">BlockerType</h2>
<!-- backwards compatibility -->
<a id="schemablockertype"></a>
<a id="schema_BlockerType"></a>
<a id="tocSblockertype"></a>
<a id="tocsblockertype"></a>

```json
"AUTOMATED"
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

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_Component">Component</h2>
<!-- backwards compatibility -->
<a id="schemacomponent"></a>
<a id="schema_Component"></a>
<a id="tocScomponent"></a>
<a id="tocscomponent"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "deploymentStatus": {},
  "deploymentStatusMessage": {},
  "description": {},
  "environmentName": {},
  "lastClientRequestToken": {},
  "lastDeploymentAttemptedAt": {},
  "lastDeploymentSucceededAt": {},
  "lastModifiedAt": {},
  "name": {},
  "serviceInstanceName": {},
  "serviceName": {},
  "serviceSpec": {}
}
```

<p>Detailed data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|deploymentStatus|object|true|none|none|
|deploymentStatusMessage|object|false|none|none|
|description|object|false|none|none|
|environmentName|object|true|none|none|
|lastClientRequestToken|object|false|none|none|
|lastDeploymentAttemptedAt|object|false|none|none|
|lastDeploymentSucceededAt|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|serviceInstanceName|object|false|none|none|
|serviceName|object|false|none|none|
|serviceSpec|object|false|none|none|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "arn": {},
  "codebuildRoleArn": {},
  "componentRoleArn": {},
  "createdAt": {},
  "deploymentStatus": {},
  "deploymentStatusMessage": {},
  "description": {},
  "environmentAccountConnectionId": {},
  "environmentAccountId": {},
  "lastDeploymentAttemptedAt": {},
  "lastDeploymentSucceededAt": {},
  "name": {},
  "protonServiceRoleArn": {},
  "provisioning": {},
  "provisioningRepository": {
    "arn": {},
    "branch": {},
    "name": {},
    "provider": {}
  },
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|codebuildRoleArn|object|false|none|none|
|componentRoleArn|object|false|none|none|
|createdAt|object|true|none|none|
|deploymentStatus|object|true|none|none|
|deploymentStatusMessage|object|false|none|none|
|description|object|false|none|none|
|environmentAccountConnectionId|object|false|none|none|
|environmentAccountId|object|false|none|none|
|lastDeploymentAttemptedAt|object|true|none|none|
|lastDeploymentSucceededAt|object|true|none|none|
|name|object|true|none|none|
|protonServiceRoleArn|object|false|none|none|
|provisioning|object|false|none|none|
|provisioningRepository|object|false|none|none|
|spec|object|false|none|none|
|templateMajorVersion|object|true|none|none|
|templateMinorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_ServiceInstance">ServiceInstance</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstance"></a>
<a id="schema_ServiceInstance"></a>
<a id="tocSserviceinstance"></a>
<a id="tocsserviceinstance"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "deploymentStatus": {},
  "deploymentStatusMessage": {},
  "environmentName": {},
  "lastClientRequestToken": {},
  "lastDeploymentAttemptedAt": {},
  "lastDeploymentSucceededAt": {},
  "name": {},
  "serviceName": {},
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

Detailed data of an Proton service instance resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|deploymentStatus|object|true|none|none|
|deploymentStatusMessage|object|false|none|none|
|environmentName|object|true|none|none|
|lastClientRequestToken|object|false|none|none|
|lastDeploymentAttemptedAt|object|true|none|none|
|lastDeploymentSucceededAt|object|true|none|none|
|name|object|true|none|none|
|serviceName|object|true|none|none|
|spec|object|false|none|none|
|templateMajorVersion|object|true|none|none|
|templateMinorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_ServicePipeline">ServicePipeline</h2>
<!-- backwards compatibility -->
<a id="schemaservicepipeline"></a>
<a id="schema_ServicePipeline"></a>
<a id="tocSservicepipeline"></a>
<a id="tocsservicepipeline"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "deploymentStatus": {},
  "deploymentStatusMessage": {},
  "lastDeploymentAttemptedAt": {},
  "lastDeploymentSucceededAt": {},
  "spec": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

Detailed data of an Proton service instance pipeline resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|deploymentStatus|object|true|none|none|
|deploymentStatusMessage|object|false|none|none|
|lastDeploymentAttemptedAt|object|true|none|none|
|lastDeploymentSucceededAt|object|true|none|none|
|spec|object|false|none|none|
|templateMajorVersion|object|true|none|none|
|templateMinorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_TemplateVersionPart">TemplateVersionPart</h2>
<!-- backwards compatibility -->
<a id="schematemplateversionpart"></a>
<a id="schema_TemplateVersionPart"></a>
<a id="tocStemplateversionpart"></a>
<a id="tocstemplateversionpart"></a>

```json
"string"
```

<h2 id="tocS_CompatibleEnvironmentTemplate">CompatibleEnvironmentTemplate</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleenvironmenttemplate"></a>
<a id="schema_CompatibleEnvironmentTemplate"></a>
<a id="tocScompatibleenvironmenttemplate"></a>
<a id="tocscompatibleenvironmenttemplate"></a>

```json
{
  "majorVersion": {},
  "templateName": {}
}
```

Compatible environment template data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_CompatibleEnvironmentTemplateInput">CompatibleEnvironmentTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleenvironmenttemplateinput"></a>
<a id="schema_CompatibleEnvironmentTemplateInput"></a>
<a id="tocScompatibleenvironmenttemplateinput"></a>
<a id="tocscompatibleenvironmenttemplateinput"></a>

```json
{
  "majorVersion": {},
  "templateName": {}
}
```

Compatible environment template data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_CompatibleEnvironmentTemplateInputList">CompatibleEnvironmentTemplateInputList</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleenvironmenttemplateinputlist"></a>
<a id="schema_CompatibleEnvironmentTemplateInputList"></a>
<a id="tocScompatibleenvironmenttemplateinputlist"></a>
<a id="tocscompatibleenvironmenttemplateinputlist"></a>

```json
[
  {
    "majorVersion": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_CompatibleEnvironmentTemplateList">CompatibleEnvironmentTemplateList</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleenvironmenttemplatelist"></a>
<a id="schema_CompatibleEnvironmentTemplateList"></a>
<a id="tocScompatibleenvironmenttemplatelist"></a>
<a id="tocscompatibleenvironmenttemplatelist"></a>

```json
[
  {
    "majorVersion": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_ComponentArn">ComponentArn</h2>
<!-- backwards compatibility -->
<a id="schemacomponentarn"></a>
<a id="schema_ComponentArn"></a>
<a id="tocScomponentarn"></a>
<a id="tocscomponentarn"></a>

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

<h2 id="tocS_DeploymentStatus">DeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatus"></a>
<a id="schema_DeploymentStatus"></a>
<a id="tocSdeploymentstatus"></a>
<a id="tocsdeploymentstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"password"
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"password"
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

<h2 id="tocS_SpecContents">SpecContents</h2>
<!-- backwards compatibility -->
<a id="schemaspeccontents"></a>
<a id="schema_SpecContents"></a>
<a id="tocSspeccontents"></a>
<a id="tocsspeccontents"></a>

```json
"password"
```

<h2 id="tocS_ComponentDeploymentUpdateType">ComponentDeploymentUpdateType</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdeploymentupdatetype"></a>
<a id="schema_ComponentDeploymentUpdateType"></a>
<a id="tocScomponentdeploymentupdatetype"></a>
<a id="tocscomponentdeploymentupdatetype"></a>

```json
"NONE"
```

<h2 id="tocS_ComponentSummary">ComponentSummary</h2>
<!-- backwards compatibility -->
<a id="schemacomponentsummary"></a>
<a id="schema_ComponentSummary"></a>
<a id="tocScomponentsummary"></a>
<a id="tocscomponentsummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "deploymentStatus": {},
  "deploymentStatusMessage": {},
  "environmentName": {},
  "lastDeploymentAttemptedAt": {},
  "lastDeploymentSucceededAt": {},
  "lastModifiedAt": {},
  "name": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<p>Summary data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|deploymentStatus|object|true|none|none|
|deploymentStatusMessage|object|false|none|none|
|environmentName|object|true|none|none|
|lastDeploymentAttemptedAt|object|false|none|none|
|lastDeploymentSucceededAt|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|serviceInstanceName|object|false|none|none|
|serviceName|object|false|none|none|

<h2 id="tocS_ComponentSummaryList">ComponentSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentsummarylist"></a>
<a id="schema_ComponentSummaryList"></a>
<a id="tocScomponentsummarylist"></a>
<a id="tocscomponentsummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "lastModifiedAt": {},
    "name": {},
    "serviceInstanceName": {},
    "serviceName": {}
  }
]
```

<h2 id="tocS_ResourceCountsSummary">ResourceCountsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecountssummary"></a>
<a id="schema_ResourceCountsSummary"></a>
<a id="tocSresourcecountssummary"></a>
<a id="tocsresourcecountssummary"></a>

```json
{
  "behindMajor": {},
  "behindMinor": {},
  "failed": {},
  "total": {},
  "upToDate": {}
}
```

Summary counts of each Proton resource types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|behindMajor|object|false|none|none|
|behindMinor|object|false|none|none|
|failed|object|false|none|none|
|total|object|true|none|none|
|upToDate|object|false|none|none|

<h2 id="tocS_CountsSummary">CountsSummary</h2>
<!-- backwards compatibility -->
<a id="schemacountssummary"></a>
<a id="schema_CountsSummary"></a>
<a id="tocScountssummary"></a>
<a id="tocscountssummary"></a>

```json
{
  "components": {
    "behindMajor": {},
    "behindMinor": {},
    "failed": {},
    "total": {},
    "upToDate": {}
  },
  "environmentTemplates": {
    "behindMajor": {},
    "behindMinor": {},
    "failed": {},
    "total": {},
    "upToDate": {}
  },
  "environments": {
    "behindMajor": {},
    "behindMinor": {},
    "failed": {},
    "total": {},
    "upToDate": {}
  },
  "pipelines": {
    "behindMajor": {},
    "behindMinor": {},
    "failed": {},
    "total": {},
    "upToDate": {}
  },
  "serviceInstances": {
    "behindMajor": {},
    "behindMinor": {},
    "failed": {},
    "total": {},
    "upToDate": {}
  },
  "serviceTemplates": {
    "behindMajor": {},
    "behindMinor": {},
    "failed": {},
    "total": {},
    "upToDate": {}
  },
  "services": {
    "behindMajor": {},
    "behindMinor": {},
    "failed": {},
    "total": {},
    "upToDate": {}
  }
}
```

Summary counts of each Proton resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|object|false|none|none|
|environmentTemplates|object|false|none|none|
|environments|object|false|none|none|
|pipelines|object|false|none|none|
|serviceInstances|object|false|none|none|
|serviceTemplates|object|false|none|none|
|services|object|false|none|none|

<h2 id="tocS_TemplateManifestContents">TemplateManifestContents</h2>
<!-- backwards compatibility -->
<a id="schematemplatemanifestcontents"></a>
<a id="schema_TemplateManifestContents"></a>
<a id="tocStemplatemanifestcontents"></a>
<a id="tocstemplatemanifestcontents"></a>

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

<h2 id="tocS_TemplateFileContents">TemplateFileContents</h2>
<!-- backwards compatibility -->
<a id="schematemplatefilecontents"></a>
<a id="schema_TemplateFileContents"></a>
<a id="tocStemplatefilecontents"></a>
<a id="tocstemplatefilecontents"></a>

```json
"password"
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

<h2 id="tocS_RepositoryBranchInput">RepositoryBranchInput</h2>
<!-- backwards compatibility -->
<a id="schemarepositorybranchinput"></a>
<a id="schema_RepositoryBranchInput"></a>
<a id="tocSrepositorybranchinput"></a>
<a id="tocsrepositorybranchinput"></a>

```json
{
  "branch": {},
  "name": {},
  "provider": {}
}
```

Detail input data for a linked repository branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|name|object|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"password"
```

<h2 id="tocS_Provisioning">Provisioning</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioning"></a>
<a id="schema_Provisioning"></a>
<a id="tocSprovisioning"></a>
<a id="tocsprovisioning"></a>

```json
"CUSTOMER_MANAGED"
```

<h2 id="tocS_EnvironmentTemplate">EnvironmentTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplate"></a>
<a id="schema_EnvironmentTemplate"></a>
<a id="tocSenvironmenttemplate"></a>
<a id="tocsenvironmenttemplate"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "displayName": {},
  "encryptionKey": {},
  "lastModifiedAt": {},
  "name": {},
  "provisioning": {},
  "recommendedVersion": {}
}
```

The environment template data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|displayName|object|false|none|none|
|encryptionKey|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|provisioning|object|false|none|none|
|recommendedVersion|object|false|none|none|

<h2 id="tocS_TemplateVersionSourceInput">TemplateVersionSourceInput</h2>
<!-- backwards compatibility -->
<a id="schematemplateversionsourceinput"></a>
<a id="schema_TemplateVersionSourceInput"></a>
<a id="tocStemplateversionsourceinput"></a>
<a id="tocstemplateversionsourceinput"></a>

```json
{
  "s3": {
    "bucket": {},
    "key": {}
  }
}
```

Template version source data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|false|none|none|

<h2 id="tocS_EnvironmentTemplateVersion">EnvironmentTemplateVersion</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplateversion"></a>
<a id="schema_EnvironmentTemplateVersion"></a>
<a id="tocSenvironmenttemplateversion"></a>
<a id="tocsenvironmenttemplateversion"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "lastModifiedAt": {},
  "majorVersion": {},
  "minorVersion": {},
  "recommendedMinorVersion": {},
  "schema": {},
  "status": {},
  "statusMessage": {},
  "templateName": {}
}
```

The environment template version data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|recommendedMinorVersion|object|false|none|none|
|schema|object|false|none|none|
|status|object|true|none|none|
|statusMessage|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_RepositoryName">RepositoryName</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryname"></a>
<a id="schema_RepositoryName"></a>
<a id="tocSrepositoryname"></a>
<a id="tocsrepositoryname"></a>

```json
"string"
```

<h2 id="tocS_RepositoryProvider">RepositoryProvider</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryprovider"></a>
<a id="schema_RepositoryProvider"></a>
<a id="tocSrepositoryprovider"></a>
<a id="tocsrepositoryprovider"></a>

```json
"GITHUB"
```

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "arn": {},
  "connectionArn": {},
  "encryptionKey": {},
  "name": {},
  "provider": {}
}
```

Detailed data of a linked repository—a repository that has been registered with Proton.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|connectionArn|object|true|none|none|
|encryptionKey|object|false|none|none|
|name|object|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_GitBranchName">GitBranchName</h2>
<!-- backwards compatibility -->
<a id="schemagitbranchname"></a>
<a id="schema_GitBranchName"></a>
<a id="tocSgitbranchname"></a>
<a id="tocsgitbranchname"></a>

```json
"string"
```

<h2 id="tocS_RepositoryId">RepositoryId</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryid"></a>
<a id="schema_RepositoryId"></a>
<a id="tocSrepositoryid"></a>
<a id="tocsrepositoryid"></a>

```json
"string"
```

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "arn": {},
  "branchName": {},
  "createdAt": {},
  "description": {},
  "lastModifiedAt": {},
  "name": {},
  "pipeline": {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "spec": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  },
  "repositoryConnectionArn": {},
  "repositoryId": {},
  "spec": {},
  "status": {},
  "statusMessage": {},
  "templateName": {}
}
```

Detailed data of an Proton service resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|branchName|object|false|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|pipeline|object|false|none|none|
|repositoryConnectionArn|object|false|none|none|
|repositoryId|object|false|none|none|
|spec|object|true|none|none|
|status|object|true|none|none|
|statusMessage|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_OpsFilePath">OpsFilePath</h2>
<!-- backwards compatibility -->
<a id="schemaopsfilepath"></a>
<a id="schema_OpsFilePath"></a>
<a id="tocSopsfilepath"></a>
<a id="tocsopsfilepath"></a>

```json
"string"
```

<h2 id="tocS_ServiceSyncConfig">ServiceSyncConfig</h2>
<!-- backwards compatibility -->
<a id="schemaservicesyncconfig"></a>
<a id="schema_ServiceSyncConfig"></a>
<a id="tocSservicesyncconfig"></a>
<a id="tocsservicesyncconfig"></a>

```json
{
  "branch": {},
  "filePath": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "serviceName": {}
}
```

Detailed data of the service sync configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|filePath|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_ServiceTemplate">ServiceTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplate"></a>
<a id="schema_ServiceTemplate"></a>
<a id="tocSservicetemplate"></a>
<a id="tocsservicetemplate"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "displayName": {},
  "encryptionKey": {},
  "lastModifiedAt": {},
  "name": {},
  "pipelineProvisioning": {},
  "recommendedVersion": {}
}
```

Detailed data of an Proton service template resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|displayName|object|false|none|none|
|encryptionKey|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|pipelineProvisioning|object|false|none|none|
|recommendedVersion|object|false|none|none|

<h2 id="tocS_ServiceTemplateSupportedComponentSourceInputList">ServiceTemplateSupportedComponentSourceInputList</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplatesupportedcomponentsourceinputlist"></a>
<a id="schema_ServiceTemplateSupportedComponentSourceInputList"></a>
<a id="tocSservicetemplatesupportedcomponentsourceinputlist"></a>
<a id="tocsservicetemplatesupportedcomponentsourceinputlist"></a>

```json
[
  "DIRECTLY_DEFINED"
]
```

<h2 id="tocS_ServiceTemplateVersion">ServiceTemplateVersion</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplateversion"></a>
<a id="schema_ServiceTemplateVersion"></a>
<a id="tocSservicetemplateversion"></a>
<a id="tocsservicetemplateversion"></a>

```json
{
  "arn": {},
  "compatibleEnvironmentTemplates": {},
  "createdAt": {},
  "description": {},
  "lastModifiedAt": {},
  "majorVersion": {},
  "minorVersion": {},
  "recommendedMinorVersion": {},
  "schema": {},
  "status": {},
  "statusMessage": {},
  "supportedComponentSources": {},
  "templateName": {}
}
```

Detailed data of an Proton service template version resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|compatibleEnvironmentTemplates|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|recommendedMinorVersion|object|false|none|none|
|schema|object|false|none|none|
|status|object|true|none|none|
|statusMessage|object|false|none|none|
|supportedComponentSources|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_Subdirectory">Subdirectory</h2>
<!-- backwards compatibility -->
<a id="schemasubdirectory"></a>
<a id="schema_Subdirectory"></a>
<a id="tocSsubdirectory"></a>
<a id="tocssubdirectory"></a>

```json
"string"
```

<h2 id="tocS_TemplateType">TemplateType</h2>
<!-- backwards compatibility -->
<a id="schematemplatetype"></a>
<a id="schema_TemplateType"></a>
<a id="tocStemplatetype"></a>
<a id="tocstemplatetype"></a>

```json
"ENVIRONMENT"
```

<h2 id="tocS_TemplateSyncConfig">TemplateSyncConfig</h2>
<!-- backwards compatibility -->
<a id="schematemplatesyncconfig"></a>
<a id="schema_TemplateSyncConfig"></a>
<a id="tocStemplatesyncconfig"></a>
<a id="tocstemplatesyncconfig"></a>

```json
{
  "branch": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "subdirectory": {},
  "templateName": {},
  "templateType": {}
}
```

The detail data for a template sync configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|subdirectory|object|false|none|none|
|templateName|object|true|none|none|
|templateType|object|true|none|none|

<h2 id="tocS_DeploymentId">DeploymentId</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentid"></a>
<a id="schema_DeploymentId"></a>
<a id="tocSdeploymentid"></a>
<a id="tocsdeploymentid"></a>

```json
"string"
```

<h2 id="tocS_DeploymentUpdateType">DeploymentUpdateType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentupdatetype"></a>
<a id="schema_DeploymentUpdateType"></a>
<a id="tocSdeploymentupdatetype"></a>
<a id="tocsdeploymentupdatetype"></a>

```json
"NONE"
```

<h2 id="tocS_EmptyNextToken">EmptyNextToken</h2>
<!-- backwards compatibility -->
<a id="schemaemptynexttoken"></a>
<a id="schema_EmptyNextToken"></a>
<a id="tocSemptynexttoken"></a>
<a id="tocsemptynexttoken"></a>

```json
""
```

<h2 id="tocS_EnvironmentArn">EnvironmentArn</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentarn"></a>
<a id="schema_EnvironmentArn"></a>
<a id="tocSenvironmentarn"></a>
<a id="tocsenvironmentarn"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentAccountConnectionArn">EnvironmentAccountConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnectionarn"></a>
<a id="schema_EnvironmentAccountConnectionArn"></a>
<a id="tocSenvironmentaccountconnectionarn"></a>
<a id="tocsenvironmentaccountconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentAccountConnectionStatus">EnvironmentAccountConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnectionstatus"></a>
<a id="schema_EnvironmentAccountConnectionStatus"></a>
<a id="tocSenvironmentaccountconnectionstatus"></a>
<a id="tocsenvironmentaccountconnectionstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_EnvironmentAccountConnectionRequesterAccountType">EnvironmentAccountConnectionRequesterAccountType</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnectionrequesteraccounttype"></a>
<a id="schema_EnvironmentAccountConnectionRequesterAccountType"></a>
<a id="tocSenvironmentaccountconnectionrequesteraccounttype"></a>
<a id="tocsenvironmentaccountconnectionrequesteraccounttype"></a>

```json
"MANAGEMENT_ACCOUNT"
```

<h2 id="tocS_EnvironmentAccountConnectionStatusList">EnvironmentAccountConnectionStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnectionstatuslist"></a>
<a id="schema_EnvironmentAccountConnectionStatusList"></a>
<a id="tocSenvironmentaccountconnectionstatuslist"></a>
<a id="tocsenvironmentaccountconnectionstatuslist"></a>

```json
[
  "PENDING"
]
```

<h2 id="tocS_EnvironmentAccountConnectionSummary">EnvironmentAccountConnectionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnectionsummary"></a>
<a id="schema_EnvironmentAccountConnectionSummary"></a>
<a id="tocSenvironmentaccountconnectionsummary"></a>
<a id="tocsenvironmentaccountconnectionsummary"></a>

```json
{
  "arn": {},
  "componentRoleArn": {},
  "environmentAccountId": {},
  "environmentName": {},
  "id": {},
  "lastModifiedAt": {},
  "managementAccountId": {},
  "requestedAt": {},
  "roleArn": {},
  "status": {}
}
```

Summary data of an Proton environment account connection resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|componentRoleArn|object|false|none|none|
|environmentAccountId|object|true|none|none|
|environmentName|object|true|none|none|
|id|object|true|none|none|
|lastModifiedAt|object|true|none|none|
|managementAccountId|object|true|none|none|
|requestedAt|object|true|none|none|
|roleArn|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_EnvironmentAccountConnectionSummaryList">EnvironmentAccountConnectionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentaccountconnectionsummarylist"></a>
<a id="schema_EnvironmentAccountConnectionSummaryList"></a>
<a id="tocSenvironmentaccountconnectionsummarylist"></a>
<a id="tocsenvironmentaccountconnectionsummarylist"></a>

```json
[
  {
    "arn": {},
    "componentRoleArn": {},
    "environmentAccountId": {},
    "environmentName": {},
    "id": {},
    "lastModifiedAt": {},
    "managementAccountId": {},
    "requestedAt": {},
    "roleArn": {},
    "status": {}
  }
]
```

<h2 id="tocS_EnvironmentSummary">EnvironmentSummary</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentsummary"></a>
<a id="schema_EnvironmentSummary"></a>
<a id="tocSenvironmentsummary"></a>
<a id="tocsenvironmentsummary"></a>

```json
{
  "arn": {},
  "componentRoleArn": {},
  "createdAt": {},
  "deploymentStatus": {},
  "deploymentStatusMessage": {},
  "description": {},
  "environmentAccountConnectionId": {},
  "environmentAccountId": {},
  "lastDeploymentAttemptedAt": {},
  "lastDeploymentSucceededAt": {},
  "name": {},
  "protonServiceRoleArn": {},
  "provisioning": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|componentRoleArn|object|false|none|none|
|createdAt|object|true|none|none|
|deploymentStatus|object|true|none|none|
|deploymentStatusMessage|object|false|none|none|
|description|object|false|none|none|
|environmentAccountConnectionId|object|false|none|none|
|environmentAccountId|object|false|none|none|
|lastDeploymentAttemptedAt|object|true|none|none|
|lastDeploymentSucceededAt|object|true|none|none|
|name|object|true|none|none|
|protonServiceRoleArn|object|false|none|none|
|provisioning|object|false|none|none|
|templateMajorVersion|object|true|none|none|
|templateMinorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_EnvironmentSummaryList">EnvironmentSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentsummarylist"></a>
<a id="schema_EnvironmentSummaryList"></a>
<a id="tocSenvironmentsummarylist"></a>
<a id="tocsenvironmentsummarylist"></a>

```json
[
  {
    "arn": {},
    "componentRoleArn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "description": {},
    "environmentAccountConnectionId": {},
    "environmentAccountId": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "protonServiceRoleArn": {},
    "provisioning": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_EnvironmentTemplateArn">EnvironmentTemplateArn</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplatearn"></a>
<a id="schema_EnvironmentTemplateArn"></a>
<a id="tocSenvironmenttemplatearn"></a>
<a id="tocsenvironmenttemplatearn"></a>

```json
"string"
```

<h2 id="tocS_FullTemplateVersionNumber">FullTemplateVersionNumber</h2>
<!-- backwards compatibility -->
<a id="schemafulltemplateversionnumber"></a>
<a id="schema_FullTemplateVersionNumber"></a>
<a id="tocSfulltemplateversionnumber"></a>
<a id="tocsfulltemplateversionnumber"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentTemplateFilter">EnvironmentTemplateFilter</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplatefilter"></a>
<a id="schema_EnvironmentTemplateFilter"></a>
<a id="tocSenvironmenttemplatefilter"></a>
<a id="tocsenvironmenttemplatefilter"></a>

```json
{
  "majorVersion": {},
  "templateName": {}
}
```

A search filter for environment templates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_EnvironmentTemplateFilterList">EnvironmentTemplateFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplatefilterlist"></a>
<a id="schema_EnvironmentTemplateFilterList"></a>
<a id="tocSenvironmenttemplatefilterlist"></a>
<a id="tocsenvironmenttemplatefilterlist"></a>

```json
[
  {
    "majorVersion": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_EnvironmentTemplateSummary">EnvironmentTemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplatesummary"></a>
<a id="schema_EnvironmentTemplateSummary"></a>
<a id="tocSenvironmenttemplatesummary"></a>
<a id="tocsenvironmenttemplatesummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "displayName": {},
  "lastModifiedAt": {},
  "name": {},
  "provisioning": {},
  "recommendedVersion": {}
}
```

The environment template data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|displayName|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|provisioning|object|false|none|none|
|recommendedVersion|object|false|none|none|

<h2 id="tocS_EnvironmentTemplateSummaryList">EnvironmentTemplateSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplatesummarylist"></a>
<a id="schema_EnvironmentTemplateSummaryList"></a>
<a id="tocSenvironmenttemplatesummarylist"></a>
<a id="tocsenvironmenttemplatesummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "lastModifiedAt": {},
    "name": {},
    "provisioning": {},
    "recommendedVersion": {}
  }
]
```

<h2 id="tocS_EnvironmentTemplateVersionArn">EnvironmentTemplateVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplateversionarn"></a>
<a id="schema_EnvironmentTemplateVersionArn"></a>
<a id="tocSenvironmenttemplateversionarn"></a>
<a id="tocsenvironmenttemplateversionarn"></a>

```json
"string"
```

<h2 id="tocS_TemplateSchema">TemplateSchema</h2>
<!-- backwards compatibility -->
<a id="schematemplateschema"></a>
<a id="schema_TemplateSchema"></a>
<a id="tocStemplateschema"></a>
<a id="tocstemplateschema"></a>

```json
"password"
```

<h2 id="tocS_TemplateVersionStatus">TemplateVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schematemplateversionstatus"></a>
<a id="schema_TemplateVersionStatus"></a>
<a id="tocStemplateversionstatus"></a>
<a id="tocstemplateversionstatus"></a>

```json
"REGISTRATION_IN_PROGRESS"
```

<h2 id="tocS_EnvironmentTemplateVersionSummary">EnvironmentTemplateVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplateversionsummary"></a>
<a id="schema_EnvironmentTemplateVersionSummary"></a>
<a id="tocSenvironmenttemplateversionsummary"></a>
<a id="tocsenvironmenttemplateversionsummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "lastModifiedAt": {},
  "majorVersion": {},
  "minorVersion": {},
  "recommendedMinorVersion": {},
  "status": {},
  "statusMessage": {},
  "templateName": {}
}
```

A summary of the version of an environment template detail data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|recommendedMinorVersion|object|false|none|none|
|status|object|true|none|none|
|statusMessage|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_EnvironmentTemplateVersionSummaryList">EnvironmentTemplateVersionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttemplateversionsummarylist"></a>
<a id="schema_EnvironmentTemplateVersionSummaryList"></a>
<a id="tocSenvironmenttemplateversionsummarylist"></a>
<a id="tocsenvironmenttemplateversionsummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_SyncType">SyncType</h2>
<!-- backwards compatibility -->
<a id="schemasynctype"></a>
<a id="schema_SyncType"></a>
<a id="tocSsynctype"></a>
<a id="tocssynctype"></a>

```json
"TEMPLATE_SYNC"
```

<h2 id="tocS_RepositorySyncAttempt">RepositorySyncAttempt</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysyncattempt"></a>
<a id="schema_RepositorySyncAttempt"></a>
<a id="tocSrepositorysyncattempt"></a>
<a id="tocsrepositorysyncattempt"></a>

```json
{
  "events": {},
  "startedAt": {},
  "status": {}
}
```

Detail data for a repository sync attempt activated by a push to a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|true|none|none|
|startedAt|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_Revision">Revision</h2>
<!-- backwards compatibility -->
<a id="schemarevision"></a>
<a id="schema_Revision"></a>
<a id="tocSrevision"></a>
<a id="tocsrevision"></a>

```json
{
  "branch": {},
  "directory": {},
  "repositoryName": {},
  "repositoryProvider": {},
  "sha": {}
}
```

Revision detail data for a commit and push that activates a sync attempt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|directory|object|true|none|none|
|repositoryName|object|true|none|none|
|repositoryProvider|object|true|none|none|
|sha|object|true|none|none|

<h2 id="tocS_ResourceSyncAttempt">ResourceSyncAttempt</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesyncattempt"></a>
<a id="schema_ResourceSyncAttempt"></a>
<a id="tocSresourcesyncattempt"></a>
<a id="tocsresourcesyncattempt"></a>

```json
{
  "events": {},
  "initialRevision": {
    "branch": {},
    "directory": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "sha": {}
  },
  "startedAt": {},
  "status": {},
  "target": {},
  "targetRevision": {
    "branch": {},
    "directory": {},
    "repositoryName": {},
    "repositoryProvider": {},
    "sha": {}
  }
}
```

Detail data for a resource sync attempt activated by a push to a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|true|none|none|
|initialRevision|object|true|none|none|
|startedAt|object|true|none|none|
|status|object|true|none|none|
|target|object|true|none|none|
|targetRevision|object|true|none|none|

<h2 id="tocS_ServiceSyncBlockerSummary">ServiceSyncBlockerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicesyncblockersummary"></a>
<a id="schema_ServiceSyncBlockerSummary"></a>
<a id="tocSservicesyncblockersummary"></a>
<a id="tocsservicesyncblockersummary"></a>

```json
{
  "latestBlockers": {},
  "serviceInstanceName": {},
  "serviceName": {}
}
```

<p>If a service instance is manually updated, Proton wants to prevent accidentally overriding a manual change.</p> <p>A blocker is created because of the manual update or deletion of a service instance. The summary describes the blocker as being active or resolved.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestBlockers|object|false|none|none|
|serviceInstanceName|object|false|none|none|
|serviceName|object|true|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_SyncBlocker">SyncBlocker</h2>
<!-- backwards compatibility -->
<a id="schemasyncblocker"></a>
<a id="schema_SyncBlocker"></a>
<a id="tocSsyncblocker"></a>
<a id="tocssyncblocker"></a>

```json
{
  "contexts": {},
  "createdAt": {},
  "createdReason": {},
  "id": {},
  "resolvedAt": {},
  "resolvedReason": {},
  "status": {},
  "type": {}
}
```

Detailed data of the sync blocker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contexts|object|false|none|none|
|createdAt|object|true|none|none|
|createdReason|object|true|none|none|
|id|object|true|none|none|
|resolvedAt|object|false|none|none|
|resolvedReason|object|false|none|none|
|status|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_LatestSyncBlockers">LatestSyncBlockers</h2>
<!-- backwards compatibility -->
<a id="schemalatestsyncblockers"></a>
<a id="schema_LatestSyncBlockers"></a>
<a id="tocSlatestsyncblockers"></a>
<a id="tocslatestsyncblockers"></a>

```json
[
  {
    "contexts": {},
    "createdAt": {},
    "createdReason": {},
    "id": {},
    "resolvedAt": {},
    "resolvedReason": {},
    "status": {},
    "type": {}
  }
]
```

<h2 id="tocS_OutputsList">OutputsList</h2>
<!-- backwards compatibility -->
<a id="schemaoutputslist"></a>
<a id="schema_OutputsList"></a>
<a id="tocSoutputslist"></a>
<a id="tocsoutputslist"></a>

```json
[
  {
    "key": {},
    "valueString": {}
  }
]
```

<h2 id="tocS_ProvisionedResourceList">ProvisionedResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedresourcelist"></a>
<a id="schema_ProvisionedResourceList"></a>
<a id="tocSprovisionedresourcelist"></a>
<a id="tocsprovisionedresourcelist"></a>

```json
[
  {
    "identifier": {},
    "name": {},
    "provisioningEngine": {}
  }
]
```

<h2 id="tocS_MaxPageResults">MaxPageResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxpageresults"></a>
<a id="schema_MaxPageResults"></a>
<a id="tocSmaxpageresults"></a>
<a id="tocsmaxpageresults"></a>

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

<h2 id="tocS_RepositorySummaryList">RepositorySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysummarylist"></a>
<a id="schema_RepositorySummaryList"></a>
<a id="tocSrepositorysummarylist"></a>
<a id="tocsrepositorysummarylist"></a>

```json
[
  {
    "arn": {},
    "connectionArn": {},
    "name": {},
    "provider": {}
  }
]
```

<h2 id="tocS_RepositorySyncDefinitionList">RepositorySyncDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysyncdefinitionlist"></a>
<a id="schema_RepositorySyncDefinitionList"></a>
<a id="tocSrepositorysyncdefinitionlist"></a>
<a id="tocsrepositorysyncdefinitionlist"></a>

```json
[
  {
    "branch": {},
    "directory": {},
    "parent": {},
    "target": {}
  }
]
```

<h2 id="tocS_ListServiceInstancesFilterBy">ListServiceInstancesFilterBy</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstancesfilterby"></a>
<a id="schema_ListServiceInstancesFilterBy"></a>
<a id="tocSlistserviceinstancesfilterby"></a>
<a id="tocslistserviceinstancesfilterby"></a>

```json
"name"
```

<h2 id="tocS_ListServiceInstancesFilterValue">ListServiceInstancesFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstancesfiltervalue"></a>
<a id="schema_ListServiceInstancesFilterValue"></a>
<a id="tocSlistserviceinstancesfiltervalue"></a>
<a id="tocslistserviceinstancesfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ListServiceInstancesFilter">ListServiceInstancesFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstancesfilter"></a>
<a id="schema_ListServiceInstancesFilter"></a>
<a id="tocSlistserviceinstancesfilter"></a>
<a id="tocslistserviceinstancesfilter"></a>

```json
{
  "key": {},
  "value": {}
}
```

A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ListServiceInstancesFilterList">ListServiceInstancesFilterList</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstancesfilterlist"></a>
<a id="schema_ListServiceInstancesFilterList"></a>
<a id="tocSlistserviceinstancesfilterlist"></a>
<a id="tocslistserviceinstancesfilterlist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_ListServiceInstancesSortBy">ListServiceInstancesSortBy</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceinstancessortby"></a>
<a id="schema_ListServiceInstancesSortBy"></a>
<a id="tocSlistserviceinstancessortby"></a>
<a id="tocslistserviceinstancessortby"></a>

```json
"name"
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

<h2 id="tocS_ServiceInstanceSummaryList">ServiceInstanceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstancesummarylist"></a>
<a id="schema_ServiceInstanceSummaryList"></a>
<a id="tocSserviceinstancesummarylist"></a>
<a id="tocsserviceinstancesummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "deploymentStatus": {},
    "deploymentStatusMessage": {},
    "environmentName": {},
    "lastDeploymentAttemptedAt": {},
    "lastDeploymentSucceededAt": {},
    "name": {},
    "serviceName": {},
    "templateMajorVersion": {},
    "templateMinorVersion": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_ServiceTemplateVersionSummaryList">ServiceTemplateVersionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplateversionsummarylist"></a>
<a id="schema_ServiceTemplateVersionSummaryList"></a>
<a id="tocSservicetemplateversionsummarylist"></a>
<a id="tocsservicetemplateversionsummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "majorVersion": {},
    "minorVersion": {},
    "recommendedMinorVersion": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_ServiceTemplateSummaryList">ServiceTemplateSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplatesummarylist"></a>
<a id="schema_ServiceTemplateSummaryList"></a>
<a id="tocSservicetemplatesummarylist"></a>
<a id="tocsservicetemplatesummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "description": {},
    "displayName": {},
    "lastModifiedAt": {},
    "name": {},
    "pipelineProvisioning": {},
    "recommendedVersion": {}
  }
]
```

<h2 id="tocS_ServiceSummaryList">ServiceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaservicesummarylist"></a>
<a id="schema_ServiceSummaryList"></a>
<a id="tocSservicesummarylist"></a>
<a id="tocsservicesummarylist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "description": {},
    "lastModifiedAt": {},
    "name": {},
    "status": {},
    "statusMessage": {},
    "templateName": {}
  }
]
```

<h2 id="tocS_NotifyResourceDeploymentStatusChangeInputOutputsList">NotifyResourceDeploymentStatusChangeInputOutputsList</h2>
<!-- backwards compatibility -->
<a id="schemanotifyresourcedeploymentstatuschangeinputoutputslist"></a>
<a id="schema_NotifyResourceDeploymentStatusChangeInputOutputsList"></a>
<a id="tocSnotifyresourcedeploymentstatuschangeinputoutputslist"></a>
<a id="tocsnotifyresourcedeploymentstatuschangeinputoutputslist"></a>

```json
[
  {
    "key": {},
    "valueString": {}
  }
]
```

<h2 id="tocS_ResourceDeploymentStatus">ResourceDeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedeploymentstatus"></a>
<a id="schema_ResourceDeploymentStatus"></a>
<a id="tocSresourcedeploymentstatus"></a>
<a id="tocsresourcedeploymentstatus"></a>

```json
"IN_PROGRESS"
```

The state that a PR-based deployment can be updated to.

<h2 id="tocS_NotifyResourceDeploymentStatusChangeInputStatusMessageString">NotifyResourceDeploymentStatusChangeInputStatusMessageString</h2>
<!-- backwards compatibility -->
<a id="schemanotifyresourcedeploymentstatuschangeinputstatusmessagestring"></a>
<a id="schema_NotifyResourceDeploymentStatusChangeInputStatusMessageString"></a>
<a id="tocSnotifyresourcedeploymentstatuschangeinputstatusmessagestring"></a>
<a id="tocsnotifyresourcedeploymentstatuschangeinputstatusmessagestring"></a>

```json
"password"
```

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "key": {},
  "valueString": {}
}
```

An infrastructure as code defined resource output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|valueString|object|false|none|none|

<h2 id="tocS_OutputKey">OutputKey</h2>
<!-- backwards compatibility -->
<a id="schemaoutputkey"></a>
<a id="schema_OutputKey"></a>
<a id="tocSoutputkey"></a>
<a id="tocsoutputkey"></a>

```json
"string"
```

<h2 id="tocS_OutputValueString">OutputValueString</h2>
<!-- backwards compatibility -->
<a id="schemaoutputvaluestring"></a>
<a id="schema_OutputValueString"></a>
<a id="tocSoutputvaluestring"></a>
<a id="tocsoutputvaluestring"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedResourceIdentifier">ProvisionedResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedresourceidentifier"></a>
<a id="schema_ProvisionedResourceIdentifier"></a>
<a id="tocSprovisionedresourceidentifier"></a>
<a id="tocsprovisionedresourceidentifier"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedResourceName">ProvisionedResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedresourcename"></a>
<a id="schema_ProvisionedResourceName"></a>
<a id="tocSprovisionedresourcename"></a>
<a id="tocsprovisionedresourcename"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedResourceEngine">ProvisionedResourceEngine</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedresourceengine"></a>
<a id="schema_ProvisionedResourceEngine"></a>
<a id="tocSprovisionedresourceengine"></a>
<a id="tocsprovisionedresourceengine"></a>

```json
"CLOUDFORMATION"
```

List of provisioning engines

<h2 id="tocS_ProvisionedResource">ProvisionedResource</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedresource"></a>
<a id="schema_ProvisionedResource"></a>
<a id="tocSprovisionedresource"></a>
<a id="tocsprovisionedresource"></a>

```json
{
  "identifier": {},
  "name": {},
  "provisioningEngine": {}
}
```

Detail data for a provisioned resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|object|false|none|none|
|name|object|false|none|none|
|provisioningEngine|object|false|none|none|

<h2 id="tocS_RepositoryArn">RepositoryArn</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryarn"></a>
<a id="schema_RepositoryArn"></a>
<a id="tocSrepositoryarn"></a>
<a id="tocsrepositoryarn"></a>

```json
"string"
```

<h2 id="tocS_RepositorySummary">RepositorySummary</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysummary"></a>
<a id="schema_RepositorySummary"></a>
<a id="tocSrepositorysummary"></a>
<a id="tocsrepositorysummary"></a>

```json
{
  "arn": {},
  "connectionArn": {},
  "name": {},
  "provider": {}
}
```

Summary data of a linked repository—a repository that has been registered with Proton.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|connectionArn|object|true|none|none|
|name|object|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_RepositorySyncEvents">RepositorySyncEvents</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysyncevents"></a>
<a id="schema_RepositorySyncEvents"></a>
<a id="tocSrepositorysyncevents"></a>
<a id="tocsrepositorysyncevents"></a>

```json
[
  {
    "event": {},
    "externalId": {},
    "time": {},
    "type": {}
  }
]
```

<h2 id="tocS_RepositorySyncStatus">RepositorySyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysyncstatus"></a>
<a id="schema_RepositorySyncStatus"></a>
<a id="tocSrepositorysyncstatus"></a>
<a id="tocsrepositorysyncstatus"></a>

```json
"INITIATED"
```

<h2 id="tocS_RepositorySyncDefinition">RepositorySyncDefinition</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysyncdefinition"></a>
<a id="schema_RepositorySyncDefinition"></a>
<a id="tocSrepositorysyncdefinition"></a>
<a id="tocsrepositorysyncdefinition"></a>

```json
{
  "branch": {},
  "directory": {},
  "parent": {},
  "target": {}
}
```

A repository sync definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|
|directory|object|true|none|none|
|parent|object|true|none|none|
|target|object|true|none|none|

<h2 id="tocS_RepositorySyncEvent">RepositorySyncEvent</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysyncevent"></a>
<a id="schema_RepositorySyncEvent"></a>
<a id="tocSrepositorysyncevent"></a>
<a id="tocsrepositorysyncevent"></a>

```json
{
  "event": {},
  "externalId": {},
  "time": {},
  "type": {}
}
```

Repository sync event detail data for a sync attempt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|externalId|object|false|none|none|
|time|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_ResourceNameOrEmpty">ResourceNameOrEmpty</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenameorempty"></a>
<a id="schema_ResourceNameOrEmpty"></a>
<a id="tocSresourcenameorempty"></a>
<a id="tocsresourcenameorempty"></a>

```json
"string"
```

<h2 id="tocS_ResourceSyncEvents">ResourceSyncEvents</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesyncevents"></a>
<a id="schema_ResourceSyncEvents"></a>
<a id="tocSresourcesyncevents"></a>
<a id="tocsresourcesyncevents"></a>

```json
[
  {
    "event": {},
    "externalId": {},
    "time": {},
    "type": {}
  }
]
```

<h2 id="tocS_ResourceSyncStatus">ResourceSyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesyncstatus"></a>
<a id="schema_ResourceSyncStatus"></a>
<a id="tocSresourcesyncstatus"></a>
<a id="tocsresourcesyncstatus"></a>

```json
"INITIATED"
```

<h2 id="tocS_ResourceSyncEvent">ResourceSyncEvent</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesyncevent"></a>
<a id="schema_ResourceSyncEvent"></a>
<a id="tocSresourcesyncevent"></a>
<a id="tocsresourcesyncevent"></a>

```json
{
  "event": {},
  "externalId": {},
  "time": {},
  "type": {}
}
```

Detail data for a resource sync event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|externalId|object|false|none|none|
|time|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_SHA">SHA</h2>
<!-- backwards compatibility -->
<a id="schemasha"></a>
<a id="schema_SHA"></a>
<a id="tocSsha"></a>
<a id="tocssha"></a>

```json
"string"
```

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectSource">S3ObjectSource</h2>
<!-- backwards compatibility -->
<a id="schemas3objectsource"></a>
<a id="schema_S3ObjectSource"></a>
<a id="tocSs3objectsource"></a>
<a id="tocss3objectsource"></a>

```json
{
  "bucket": {},
  "key": {}
}
```

Template bundle S3 bucket data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|key|object|true|none|none|

<h2 id="tocS_ServiceArn">ServiceArn</h2>
<!-- backwards compatibility -->
<a id="schemaservicearn"></a>
<a id="schema_ServiceArn"></a>
<a id="tocSservicearn"></a>
<a id="tocsservicearn"></a>

```json
"string"
```

<h2 id="tocS_ServiceStatus">ServiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaservicestatus"></a>
<a id="schema_ServiceStatus"></a>
<a id="tocSservicestatus"></a>
<a id="tocsservicestatus"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_ServiceInstanceArn">ServiceInstanceArn</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstancearn"></a>
<a id="schema_ServiceInstanceArn"></a>
<a id="tocSserviceinstancearn"></a>
<a id="tocsserviceinstancearn"></a>

```json
"string"
```

<h2 id="tocS_ServiceInstanceSummary">ServiceInstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstancesummary"></a>
<a id="schema_ServiceInstanceSummary"></a>
<a id="tocSserviceinstancesummary"></a>
<a id="tocsserviceinstancesummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "deploymentStatus": {},
  "deploymentStatusMessage": {},
  "environmentName": {},
  "lastDeploymentAttemptedAt": {},
  "lastDeploymentSucceededAt": {},
  "name": {},
  "serviceName": {},
  "templateMajorVersion": {},
  "templateMinorVersion": {},
  "templateName": {}
}
```

Summary data of an Proton service instance resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|deploymentStatus|object|true|none|none|
|deploymentStatusMessage|object|false|none|none|
|environmentName|object|true|none|none|
|lastDeploymentAttemptedAt|object|true|none|none|
|lastDeploymentSucceededAt|object|true|none|none|
|name|object|true|none|none|
|serviceName|object|true|none|none|
|templateMajorVersion|object|true|none|none|
|templateMinorVersion|object|true|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_ServiceSummary">ServiceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicesummary"></a>
<a id="schema_ServiceSummary"></a>
<a id="tocSservicesummary"></a>
<a id="tocsservicesummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "lastModifiedAt": {},
  "name": {},
  "status": {},
  "statusMessage": {},
  "templateName": {}
}
```

Summary data of an Proton service resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|status|object|true|none|none|
|statusMessage|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_ServiceTemplateArn">ServiceTemplateArn</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplatearn"></a>
<a id="schema_ServiceTemplateArn"></a>
<a id="tocSservicetemplatearn"></a>
<a id="tocsservicetemplatearn"></a>

```json
"string"
```

<h2 id="tocS_ServiceTemplateSummary">ServiceTemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplatesummary"></a>
<a id="schema_ServiceTemplateSummary"></a>
<a id="tocSservicetemplatesummary"></a>
<a id="tocsservicetemplatesummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "displayName": {},
  "lastModifiedAt": {},
  "name": {},
  "pipelineProvisioning": {},
  "recommendedVersion": {}
}
```

Summary data of an Proton service template resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|displayName|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|name|object|true|none|none|
|pipelineProvisioning|object|false|none|none|
|recommendedVersion|object|false|none|none|

<h2 id="tocS_ServiceTemplateSupportedComponentSourceType">ServiceTemplateSupportedComponentSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplatesupportedcomponentsourcetype"></a>
<a id="schema_ServiceTemplateSupportedComponentSourceType"></a>
<a id="tocSservicetemplatesupportedcomponentsourcetype"></a>
<a id="tocsservicetemplatesupportedcomponentsourcetype"></a>

```json
"DIRECTLY_DEFINED"
```

<h2 id="tocS_ServiceTemplateVersionArn">ServiceTemplateVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplateversionarn"></a>
<a id="schema_ServiceTemplateVersionArn"></a>
<a id="tocSservicetemplateversionarn"></a>
<a id="tocsservicetemplateversionarn"></a>

```json
"string"
```

<h2 id="tocS_ServiceTemplateVersionSummary">ServiceTemplateVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicetemplateversionsummary"></a>
<a id="schema_ServiceTemplateVersionSummary"></a>
<a id="tocSservicetemplateversionsummary"></a>
<a id="tocsservicetemplateversionsummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "lastModifiedAt": {},
  "majorVersion": {},
  "minorVersion": {},
  "recommendedMinorVersion": {},
  "status": {},
  "statusMessage": {},
  "templateName": {}
}
```

Summary data of an Proton service template version resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|createdAt|object|true|none|none|
|description|object|false|none|none|
|lastModifiedAt|object|true|none|none|
|majorVersion|object|true|none|none|
|minorVersion|object|true|none|none|
|recommendedMinorVersion|object|false|none|none|
|status|object|true|none|none|
|statusMessage|object|false|none|none|
|templateName|object|true|none|none|

<h2 id="tocS_SyncBlockerContexts">SyncBlockerContexts</h2>
<!-- backwards compatibility -->
<a id="schemasyncblockercontexts"></a>
<a id="schema_SyncBlockerContexts"></a>
<a id="tocSsyncblockercontexts"></a>
<a id="tocssyncblockercontexts"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_SyncBlockerContext">SyncBlockerContext</h2>
<!-- backwards compatibility -->
<a id="schemasyncblockercontext"></a>
<a id="schema_SyncBlockerContext"></a>
<a id="tocSsyncblockercontext"></a>
<a id="tocssyncblockercontext"></a>

```json
{
  "key": {},
  "value": {}
}
```

Detailed data of the context of the sync blocker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

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

A description of a resource tag.

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
