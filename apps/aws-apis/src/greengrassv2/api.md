<h1 id="aws-iot-greengrass-v2">AWS IoT Greengrass V2 v2020-11-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities to edge devices. This enables devices to collect and analyze data closer to the source of information, react autonomously to local events, and communicate securely with each other on local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and deploy applications to fleets of edge devices for local operation.</p> <p>IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console. Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components, manage deployments, and core devices.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is IoT Greengrass?</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>

Base URLs:

* <a href="http://greengrass.us-east-1.amazonaws.com">http://greengrass.us-east-1.amazonaws.com</a> - The AWS GreengrassV2 multi-region endpoint

* <a href="https://greengrass.us-east-1.amazonaws.com">https://greengrass.us-east-1.amazonaws.com</a> - The AWS GreengrassV2 multi-region endpoint

* <a href="http://greengrass.cn-north-1.amazonaws.com.cn">http://greengrass.cn-north-1.amazonaws.com.cn</a> - The AWS GreengrassV2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://greengrass.cn-north-1.amazonaws.com.cn">https://greengrass.cn-north-1.amazonaws.com.cn</a> - The AWS GreengrassV2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/greengrass/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-greengrass-v2-default">Default</h1>

## GetServiceRoleForAccount

<a id="opIdGetServiceRoleForAccount"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/servicerole \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/servicerole`

Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

<h3 id="getserviceroleforaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "associatedAt": {},
  "roleArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="getserviceroleforaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceRoleForAccountResponse](#schemagetserviceroleforaccountresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateServiceRoleToAccount

<a id="opIdAssociateServiceRoleToAccount"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/servicerole \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RoleArn": "string"
  }'
```

`PUT /greengrass/servicerole`

Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

> Body parameter

```json
{
  "RoleArn": "string"
}
```

<h3 id="associateserviceroletoaccount-parameters">Parameters</h3>

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
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.|

> Example responses

> 200 Response

```json
{
  "associatedAt": {}
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

<h3 id="associateserviceroletoaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateServiceRoleToAccountResponse](#schemaassociateserviceroletoaccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateServiceRoleFromAccount

<a id="opIdDisassociateServiceRoleFromAccount"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/servicerole \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/servicerole`

Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

<h3 id="disassociateservicerolefromaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "disassociatedAt": {}
}
```

> 480 Response

```json
null
```

<h3 id="disassociateservicerolefromaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateServiceRoleFromAccountResponse](#schemadisassociateservicerolefromaccountresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateClientDeviceWithCoreDevice

<a id="opIdBatchAssociateClientDeviceWithCoreDevice"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices/string/associateClientDevices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entries": [
      {
        "thingName": {}
      }
    ]
  }'
```

`POST /greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices`

<p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "entries": [
    {
      "thingName": {}
    }
  ]
}
```

<h3 id="batchassociateclientdevicewithcoredevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreDeviceThingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» entries|body|[[AssociateClientDeviceWithCoreDeviceEntry](#schemaassociateclientdevicewithcoredeviceentry)]|false|The list of client devices to associate.|

> Example responses

> 200 Response

```json
{
  "errorEntries": {}
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

<h3 id="batchassociateclientdevicewithcoredevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateClientDeviceWithCoreDeviceResponse](#schemabatchassociateclientdevicewithcoredeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateClientDeviceFromCoreDevice

<a id="opIdBatchDisassociateClientDeviceFromCoreDevice"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices/string/disassociateClientDevices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entries": [
      {
        "thingName": {}
      }
    ]
  }'
```

`POST /greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices`

Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.

> Body parameter

```json
{
  "entries": [
    {
      "thingName": {}
    }
  ]
}
```

<h3 id="batchdisassociateclientdevicefromcoredevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreDeviceThingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» entries|body|[[DisassociateClientDeviceFromCoreDeviceEntry](#schemadisassociateclientdevicefromcoredeviceentry)]|false|The list of client devices to disassociate.|

> Example responses

> 200 Response

```json
{
  "errorEntries": {}
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

<h3 id="batchdisassociateclientdevicefromcoredevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateClientDeviceFromCoreDeviceResponse](#schemabatchdisassociateclientdevicefromcoredeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelDeployment

<a id="opIdCancelDeployment"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/deployments/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /greengrass/v2/deployments/{deploymentId}/cancel`

Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.

<h3 id="canceldeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The ID of the deployment.|
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
  "message": {}
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

<h3 id="canceldeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelDeploymentResponse](#schemacanceldeploymentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateComponentVersion

<a id="opIdCreateComponentVersion"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/createComponentVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "inlineRecipe": "string",
    "lambdaFunction": {
      "lambdaArn": {},
      "componentName": {},
      "componentVersion": {},
      "componentPlatforms": {},
      "componentDependencies": {
        "property1": {
          "versionRequirement": {},
          "dependencyType": {}
        },
        "property2": {
          "versionRequirement": {},
          "dependencyType": {}
        }
      },
      "componentLambdaParameters": {
        "eventSources": {},
        "maxQueueSize": {},
        "maxInstancesCount": {},
        "maxIdleTimeInSeconds": {},
        "timeoutInSeconds": {},
        "statusTimeoutInSeconds": {},
        "pinned": {},
        "inputPayloadEncodingType": {},
        "execArgs": {},
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        },
        "linuxProcessParams": {
          "isolationMode": {},
          "containerParams": {
            "memorySizeInKB": {},
            "mountROSysfs": {},
            "volumes": {},
            "devices": {}
          }
        }
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`POST /greengrass/v2/createComponentVersion`

<p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>

> Body parameter

```json
{
  "inlineRecipe": "string",
  "lambdaFunction": {
    "lambdaArn": {},
    "componentName": {},
    "componentVersion": {},
    "componentPlatforms": {},
    "componentDependencies": {
      "property1": {
        "versionRequirement": {},
        "dependencyType": {}
      },
      "property2": {
        "versionRequirement": {},
        "dependencyType": {}
      }
    },
    "componentLambdaParameters": {
      "eventSources": {},
      "maxQueueSize": {},
      "maxInstancesCount": {},
      "maxIdleTimeInSeconds": {},
      "timeoutInSeconds": {},
      "statusTimeoutInSeconds": {},
      "pinned": {},
      "inputPayloadEncodingType": {},
      "execArgs": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "linuxProcessParams": {
        "isolationMode": {},
        "containerParams": {
          "memorySizeInKB": {},
          "mountROSysfs": {},
          "volumes": {},
          "devices": {}
        }
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createcomponentversion-parameters">Parameters</h3>

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
|» inlineRecipe|body|string|false|<p>The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>|
|» lambdaFunction|body|object|false|Contains information about an Lambda function to import to create a component.|
|» » lambdaArn|body|object|false|none|
|» » componentName|body|object|false|none|
|» » componentVersion|body|object|false|none|
|» » componentPlatforms|body|object|false|none|
|» » componentDependencies|body|object|false|none|
|» » » **additionalProperties**|body|[ComponentDependencyRequirement](#schemacomponentdependencyrequirement)|false|Contains information about a component dependency for a Lambda function component.|
|» » componentLambdaParameters|body|object|false|none|
|» » » eventSources|body|object|false|none|
|» » » maxQueueSize|body|object|false|none|
|» » » maxInstancesCount|body|object|false|none|
|» » » maxIdleTimeInSeconds|body|object|false|none|
|» » » timeoutInSeconds|body|object|false|none|
|» » » statusTimeoutInSeconds|body|object|false|none|
|» » » pinned|body|object|false|none|
|» » » inputPayloadEncodingType|body|object|false|none|
|» » » execArgs|body|object|false|none|
|» » » environmentVariables|body|object|false|none|
|» » » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » » linuxProcessParams|body|object|false|none|
|» » » » isolationMode|body|object|false|none|
|» » » » containerParams|body|object|false|none|
|» » » » » memorySizeInKB|body|object|false|none|
|» » » » » mountROSysfs|body|object|false|none|
|» » » » » volumes|body|object|false|none|
|» » » » » devices|body|object|false|none|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|false|A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.|

> Example responses

> 201 Response

```json
{
  "arn": {},
  "componentName": {},
  "componentVersion": {},
  "creationTimestamp": {},
  "status": {
    "componentState": {},
    "message": {},
    "errors": {
      "property1": "string",
      "property2": "string"
    },
    "vendorGuidance": {},
    "vendorGuidanceMessage": {}
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

<h3 id="createcomponentversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateComponentVersionResponse](#schemacreatecomponentversionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|RequestAlreadyInProgressException|[RequestAlreadyInProgressException](#schemarequestalreadyinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeployments

<a id="opIdListDeployments"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/deployments`

Retrieves a paginated list of deployments.

<h3 id="listdeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetArn|query|string|false|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.|
|historyFilter|query|string|false|<p>The filter for the list of deployments. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all deployments.</p> </li> <li> <p> <code>LATEST_ONLY</code> – The list includes only the latest revision of each deployment.</p> </li> </ul> <p>Default: <code>LATEST_ONLY</code> </p>|
|parentTargetArn|query|string|false|The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.|
|maxResults|query|integer|false|The maximum number of results to be returned per paginated request.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|historyFilter|ALL|
|historyFilter|LATEST_ONLY|

> Example responses

> 200 Response

```json
{
  "deployments": {},
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

<h3 id="listdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentsResponse](#schemalistdeploymentsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeployment

<a id="opIdCreateDeployment"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "targetArn": "string",
    "deploymentName": "string",
    "components": {
      "property1": {
        "componentVersion": {},
        "configurationUpdate": {
          "merge": {},
          "reset": {}
        },
        "runWith": {
          "posixUser": {},
          "systemResourceLimits": {
            "memory": {},
            "cpus": {}
          },
          "windowsUser": {}
        }
      },
      "property2": {
        "componentVersion": {},
        "configurationUpdate": {
          "merge": {},
          "reset": {}
        },
        "runWith": {
          "posixUser": {},
          "systemResourceLimits": {
            "memory": {},
            "cpus": {}
          },
          "windowsUser": {}
        }
      }
    },
    "iotJobConfiguration": {
      "jobExecutionsRolloutConfig": {
        "exponentialRate": {
          "baseRatePerMinute": {},
          "incrementFactor": {},
          "rateIncreaseCriteria": {
            "numberOfNotifiedThings": {},
            "numberOfSucceededThings": {}
          }
        },
        "maximumPerMinute": {}
      },
      "abortConfig": {
        "criteriaList": {}
      },
      "timeoutConfig": {
        "inProgressTimeoutInMinutes": {}
      }
    },
    "deploymentPolicies": {
      "failureHandlingPolicy": {},
      "componentUpdatePolicy": {
        "timeoutInSeconds": {},
        "action": {}
      },
      "configurationValidationPolicy": {
        "timeoutInSeconds": {}
      }
    },
    "parentTargetArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`POST /greengrass/v2/deployments`

<p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>

> Body parameter

```json
{
  "targetArn": "string",
  "deploymentName": "string",
  "components": {
    "property1": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    },
    "property2": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    }
  },
  "iotJobConfiguration": {
    "jobExecutionsRolloutConfig": {
      "exponentialRate": {
        "baseRatePerMinute": {},
        "incrementFactor": {},
        "rateIncreaseCriteria": {
          "numberOfNotifiedThings": {},
          "numberOfSucceededThings": {}
        }
      },
      "maximumPerMinute": {}
    },
    "abortConfig": {
      "criteriaList": {}
    },
    "timeoutConfig": {
      "inProgressTimeoutInMinutes": {}
    }
  },
  "deploymentPolicies": {
    "failureHandlingPolicy": {},
    "componentUpdatePolicy": {
      "timeoutInSeconds": {},
      "action": {}
    },
    "configurationValidationPolicy": {
      "timeoutInSeconds": {}
    }
  },
  "parentTargetArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createdeployment-parameters">Parameters</h3>

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
|» targetArn|body|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.|
|» deploymentName|body|string|false|The name of the deployment.|
|» components|body|object|false|The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.|
|» » **additionalProperties**|body|[ComponentDeploymentSpecification](#schemacomponentdeploymentspecification)|false|Contains information about a component to deploy.|
|» iotJobConfiguration|body|object|false|Contains information about an IoT job configuration.|
|» » jobExecutionsRolloutConfig|body|object|false|none|
|» » » exponentialRate|body|object|false|none|
|» » » » baseRatePerMinute|body|object|true|none|
|» » » » incrementFactor|body|object|true|none|
|» » » » rateIncreaseCriteria|body|object|true|none|
|» » » » » numberOfNotifiedThings|body|object|false|none|
|» » » » » numberOfSucceededThings|body|object|false|none|
|» » » maximumPerMinute|body|object|false|none|
|» » abortConfig|body|object|false|none|
|» » » criteriaList|body|object|true|none|
|» » timeoutConfig|body|object|false|none|
|» » » inProgressTimeoutInMinutes|body|object|false|none|
|» deploymentPolicies|body|object|false|Contains information about policies that define how a deployment updates components and handles failure.|
|» » failureHandlingPolicy|body|object|false|none|
|» » componentUpdatePolicy|body|object|false|none|
|» » » timeoutInSeconds|body|object|false|none|
|» » » action|body|object|false|none|
|» » configurationValidationPolicy|body|object|false|none|
|» » » timeoutInSeconds|body|object|false|none|
|» parentTargetArn|body|string|false|The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|false|A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.|

> Example responses

> 201 Response

```json
{
  "deploymentId": {},
  "iotJobId": {},
  "iotJobArn": {}
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

<h3 id="createdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDeploymentResponse](#schemacreatedeploymentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|RequestAlreadyInProgressException|[RequestAlreadyInProgressException](#schemarequestalreadyinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComponent

<a id="opIdGetComponent"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/components/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/components/{arn}`

Gets the recipe for a version of a component.

<h3 id="getcomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeOutputFormat|query|string|false|The format of the recipe.|
|arn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|recipeOutputFormat|JSON|
|recipeOutputFormat|YAML|

> Example responses

> 200 Response

```json
{
  "recipeOutputFormat": {},
  "recipe": {},
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

<h3 id="getcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComponentResponse](#schemagetcomponentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteComponent

<a id="opIdDeleteComponent"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/components/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/v2/components/{arn}`

<p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>

<h3 id="deletecomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.|
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

<h3 id="deletecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoreDevice

<a id="opIdGetCoreDevice"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/coreDevices/{coreDeviceThingName}`

<p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

<h3 id="getcoredevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreDeviceThingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
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
  "coreDeviceThingName": {},
  "coreVersion": {},
  "platform": {},
  "architecture": {},
  "status": {},
  "lastStatusUpdateTimestamp": {},
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

<h3 id="getcoredevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoreDeviceResponse](#schemagetcoredeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCoreDevice

<a id="opIdDeleteCoreDevice"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/v2/coreDevices/{coreDeviceThingName}`

Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.

<h3 id="deletecoredevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreDeviceThingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
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

<h3 id="deletecoredevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeployment

<a id="opIdGetDeployment"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/deployments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/deployments/{deploymentId}`

Gets a deployment. Deployments define the components that run on Greengrass core devices.

<h3 id="getdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The ID of the deployment.|
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
  "targetArn": {},
  "revisionId": {},
  "deploymentId": {},
  "deploymentName": {},
  "deploymentStatus": {},
  "iotJobId": {},
  "iotJobArn": {},
  "components": {
    "property1": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    },
    "property2": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    }
  },
  "deploymentPolicies": {
    "failureHandlingPolicy": {},
    "componentUpdatePolicy": {
      "timeoutInSeconds": {},
      "action": {}
    },
    "configurationValidationPolicy": {
      "timeoutInSeconds": {}
    }
  },
  "iotJobConfiguration": {
    "jobExecutionsRolloutConfig": {
      "exponentialRate": {
        "baseRatePerMinute": {},
        "incrementFactor": {},
        "rateIncreaseCriteria": {
          "numberOfNotifiedThings": {},
          "numberOfSucceededThings": {}
        }
      },
      "maximumPerMinute": {}
    },
    "abortConfig": {
      "criteriaList": {}
    },
    "timeoutConfig": {
      "inProgressTimeoutInMinutes": {}
    }
  },
  "creationTimestamp": {},
  "isLatestForTarget": {},
  "parentTargetArn": {},
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

<h3 id="getdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentResponse](#schemagetdeploymentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeployment

<a id="opIdDeleteDeployment"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/deployments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /greengrass/v2/deployments/{deploymentId}`

<p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>

<h3 id="deletedeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|path|string|true|The ID of the deployment.|
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

<h3 id="deletedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComponent

<a id="opIdDescribeComponent"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/components/string/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/components/{arn}/metadata`

Retrieves metadata for a version of a component.

<h3 id="describecomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.|
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
  "arn": {},
  "componentName": {},
  "componentVersion": {},
  "creationTimestamp": {},
  "publisher": {},
  "description": {},
  "status": {
    "componentState": {},
    "message": {},
    "errors": {
      "property1": "string",
      "property2": "string"
    },
    "vendorGuidance": {},
    "vendorGuidanceMessage": {}
  },
  "platforms": {},
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

<h3 id="describecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComponentResponse](#schemadescribecomponentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComponentVersionArtifact

<a id="opIdGetComponentVersionArtifact"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/components/string/artifacts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/components/{arn}/artifacts/{artifactName}`

Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.

<h3 id="getcomponentversionartifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version. Specify the ARN of a public or a Lambda component version.|
|artifactName|path|string|true|<p>The name of the artifact.</p> <p>You can use the <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html">GetComponent</a> operation to download the component recipe, which includes the URI of the artifact. The artifact name is the section of the URI after the scheme. For example, in the artifact URI <code>greengrass:SomeArtifact.zip</code>, the artifact name is <code>SomeArtifact.zip</code>.</p>|
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
  "preSignedUrl": {}
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

<h3 id="getcomponentversionartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComponentVersionArtifactResponse](#schemagetcomponentversionartifactresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectivityInfo

<a id="opIdGetConnectivityInfo"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/things/string/connectivityInfo \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/things/{thingName}/connectivityInfo`

<p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

<h3 id="getconnectivityinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
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
  "connectivityInfo": {},
  "message": {}
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

<h3 id="getconnectivityinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectivityInfoResponse](#schemagetconnectivityinforesponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectivityInfo

<a id="opIdUpdateConnectivityInfo"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/things/string/connectivityInfo \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConnectivityInfo": [
      {
        "id": {},
        "hostAddress": {},
        "portNumber": {},
        "metadata": {}
      }
    ]
  }'
```

`PUT /greengrass/things/{thingName}/connectivityInfo`

<p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

> Body parameter

```json
{
  "ConnectivityInfo": [
    {
      "id": {},
      "hostAddress": {},
      "portNumber": {},
      "metadata": {}
    }
  ]
}
```

<h3 id="updateconnectivityinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ConnectivityInfo|body|[[ConnectivityInfo](#schemaconnectivityinfo)]|true|The connectivity information for the core device.|

> Example responses

> 200 Response

```json
{
  "version": {},
  "message": {}
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

<h3 id="updateconnectivityinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectivityInfoResponse](#schemaupdateconnectivityinforesponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClientDevicesAssociatedWithCoreDevice

<a id="opIdListClientDevicesAssociatedWithCoreDevice"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices/string/associatedClientDevices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices`

Retrieves a paginated list of client devices that are associated with a core device.

<h3 id="listclientdevicesassociatedwithcoredevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreDeviceThingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
|maxResults|query|integer|false|The maximum number of results to be returned per paginated request.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
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
  "associatedClientDevices": {},
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

<h3 id="listclientdevicesassociatedwithcoredevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClientDevicesAssociatedWithCoreDeviceResponse](#schemalistclientdevicesassociatedwithcoredeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponentVersions

<a id="opIdListComponentVersions"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/components/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/components/{arn}/versions`

Retrieves a paginated list of all versions for a component. Greater versions are listed first.

<h3 id="listcomponentversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component.|
|maxResults|query|integer|false|The maximum number of results to be returned per paginated request.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
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
  "componentVersions": {},
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

<h3 id="listcomponentversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentVersionsResponse](#schemalistcomponentversionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponents

<a id="opIdListComponents"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/components \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/components`

Retrieves a paginated list of component summaries. This list includes components that you have permission to view.

<h3 id="listcomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|<p>The scope of the components to list.</p> <p>Default: <code>PRIVATE</code> </p>|
|maxResults|query|integer|false|The maximum number of results to be returned per paginated request.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|PRIVATE|
|scope|PUBLIC|

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

> 484 Response

```json
null
```

<h3 id="listcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentsResponse](#schemalistcomponentsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCoreDevices

<a id="opIdListCoreDevices"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/coreDevices`

<p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

<h3 id="listcoredevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingGroupArn|query|string|false|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT thing group by which to filter. If you specify this parameter, the list includes only core devices that have successfully deployed a deployment that targets the thing group. When you remove a core device from a thing group, the list continues to include that core device.|
|status|query|string|false|<p>The core device status by which to filter. If you specify this parameter, the list includes only core devices that have this status. Choose one of the following options:</p> <ul> <li> <p> <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p> </li> <li> <p> <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state on the core device.</p> </li> </ul>|
|maxResults|query|integer|false|The maximum number of results to be returned per paginated request.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|HEALTHY|
|status|UNHEALTHY|

> Example responses

> 200 Response

```json
{
  "coreDevices": {},
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

<h3 id="listcoredevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCoreDevicesResponse](#schemalistcoredevicesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEffectiveDeployments

<a id="opIdListEffectiveDeployments"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices/string/effectiveDeployments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments`

Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.

<h3 id="listeffectivedeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreDeviceThingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
|maxResults|query|integer|false|The maximum number of results to be returned per paginated request.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
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
  "effectiveDeployments": {},
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

<h3 id="listeffectivedeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEffectiveDeploymentsResponse](#schemalisteffectivedeploymentsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstalledComponents

<a id="opIdListInstalledComponents"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/coreDevices/string/installedComponents \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents`

<p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

<h3 id="listinstalledcomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreDeviceThingName|path|string|true|The name of the core device. This is also the name of the IoT thing.|
|maxResults|query|integer|false|The maximum number of results to be returned per paginated request.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|topologyFilter|query|string|false|<p>The filter for the list of components. Choose from the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all components installed on the core device.</p> </li> <li> <p> <code>ROOT</code> – The list includes only <i>root</i> components, which are components that you specify in a deployment. When you choose this option, the list doesn't include components that the core device installs as dependencies of other components.</p> </li> </ul> <p>Default: <code>ROOT</code> </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|topologyFilter|ALL|
|topologyFilter|ROOT|

> Example responses

> 200 Response

```json
{
  "installedComponents": {},
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

<h3 id="listinstalledcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstalledComponentsResponse](#schemalistinstalledcomponentsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Retrieves the list of tags for an IoT Greengrass resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/tags/string \
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

Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.

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
|resourceArn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.|
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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResolveComponentCandidates

<a id="opIdResolveComponentCandidates"></a>

> Code samples

```bash
curl https://greengrassv2.us-east-1.amazonaws.com/greengrass/v2/resolveComponentCandidates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "platform": {
      "name": {},
      "attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "componentCandidates": [
      {
        "componentName": {},
        "componentVersion": {},
        "versionRequirements": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }'
```

`POST /greengrass/v2/resolveComponentCandidates`

<p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>

> Body parameter

```json
{
  "platform": {
    "name": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    }
  },
  "componentCandidates": [
    {
      "componentName": {},
      "componentVersion": {},
      "versionRequirements": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

<h3 id="resolvecomponentcandidates-parameters">Parameters</h3>

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
|» platform|body|object|false|Contains information about a platform that a component supports.|
|» » name|body|object|false|none|
|» » attributes|body|object|false|none|
|» » » **additionalProperties**|body|[NonEmptyString](#schemanonemptystring)|false|none|
|» componentCandidates|body|[[ComponentCandidate](#schemacomponentcandidate)]|false|The list of components to resolve.|

> Example responses

> 200 Response

```json
{
  "resolvedComponentVersions": {}
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

<h3 id="resolvecomponentcandidates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResolveComponentCandidatesResponse](#schemaresolvecomponentcandidatesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://greengrassv2.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes a tag from an IoT Greengrass resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of keys for tags to remove from the resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateServiceRoleToAccountResponse">AssociateServiceRoleToAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateserviceroletoaccountresponse"></a>
<a id="schema_AssociateServiceRoleToAccountResponse"></a>
<a id="tocSassociateserviceroletoaccountresponse"></a>
<a id="tocsassociateserviceroletoaccountresponse"></a>

```json
{
  "associatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedAt|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_BatchAssociateClientDeviceWithCoreDeviceResponse">BatchAssociateClientDeviceWithCoreDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateclientdevicewithcoredeviceresponse"></a>
<a id="schema_BatchAssociateClientDeviceWithCoreDeviceResponse"></a>
<a id="tocSbatchassociateclientdevicewithcoredeviceresponse"></a>
<a id="tocsbatchassociateclientdevicewithcoredeviceresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|false|none|none|

<h2 id="tocS_AssociateClientDeviceWithCoreDeviceEntry">AssociateClientDeviceWithCoreDeviceEntry</h2>
<!-- backwards compatibility -->
<a id="schemaassociateclientdevicewithcoredeviceentry"></a>
<a id="schema_AssociateClientDeviceWithCoreDeviceEntry"></a>
<a id="tocSassociateclientdevicewithcoredeviceentry"></a>
<a id="tocsassociateclientdevicewithcoredeviceentry"></a>

```json
{
  "thingName": {}
}
```

Contains a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|true|none|none|

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_BatchDisassociateClientDeviceFromCoreDeviceResponse">BatchDisassociateClientDeviceFromCoreDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateclientdevicefromcoredeviceresponse"></a>
<a id="schema_BatchDisassociateClientDeviceFromCoreDeviceResponse"></a>
<a id="tocSbatchdisassociateclientdevicefromcoredeviceresponse"></a>
<a id="tocsbatchdisassociateclientdevicefromcoredeviceresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|false|none|none|

<h2 id="tocS_DisassociateClientDeviceFromCoreDeviceEntry">DisassociateClientDeviceFromCoreDeviceEntry</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateclientdevicefromcoredeviceentry"></a>
<a id="schema_DisassociateClientDeviceFromCoreDeviceEntry"></a>
<a id="tocSdisassociateclientdevicefromcoredeviceentry"></a>
<a id="tocsdisassociateclientdevicefromcoredeviceentry"></a>

```json
{
  "thingName": {}
}
```

Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|true|none|none|

<h2 id="tocS_CancelDeploymentResponse">CancelDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceldeploymentresponse"></a>
<a id="schema_CancelDeploymentResponse"></a>
<a id="tocScanceldeploymentresponse"></a>
<a id="tocscanceldeploymentresponse"></a>

```json
{
  "message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateComponentVersionResponse">CreateComponentVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentversionresponse"></a>
<a id="schema_CreateComponentVersionResponse"></a>
<a id="tocScreatecomponentversionresponse"></a>
<a id="tocscreatecomponentversionresponse"></a>

```json
{
  "arn": {},
  "componentName": {},
  "componentVersion": {},
  "creationTimestamp": {},
  "status": {
    "componentState": {},
    "message": {},
    "errors": {
      "property1": "string",
      "property2": "string"
    },
    "vendorGuidance": {},
    "vendorGuidanceMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|componentName|object|true|none|none|
|componentVersion|object|true|none|none|
|creationTimestamp|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_ComponentNameString">ComponentNameString</h2>
<!-- backwards compatibility -->
<a id="schemacomponentnamestring"></a>
<a id="schema_ComponentNameString"></a>
<a id="tocScomponentnamestring"></a>
<a id="tocscomponentnamestring"></a>

```json
"string"
```

<h2 id="tocS_ComponentVersionString">ComponentVersionString</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionstring"></a>
<a id="schema_ComponentVersionString"></a>
<a id="tocScomponentversionstring"></a>
<a id="tocscomponentversionstring"></a>

```json
"string"
```

<h2 id="tocS_ComponentPlatformList">ComponentPlatformList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentplatformlist"></a>
<a id="schema_ComponentPlatformList"></a>
<a id="tocScomponentplatformlist"></a>
<a id="tocscomponentplatformlist"></a>

```json
[
  {
    "name": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ComponentDependencyMap">ComponentDependencyMap</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdependencymap"></a>
<a id="schema_ComponentDependencyMap"></a>
<a id="tocScomponentdependencymap"></a>
<a id="tocscomponentdependencymap"></a>

```json
{
  "property1": {
    "versionRequirement": {},
    "dependencyType": {}
  },
  "property2": {
    "versionRequirement": {},
    "dependencyType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ComponentDependencyRequirement](#schemacomponentdependencyrequirement)|false|none|Contains information about a component dependency for a Lambda function component.|

<h2 id="tocS_LambdaExecutionParameters">LambdaExecutionParameters</h2>
<!-- backwards compatibility -->
<a id="schemalambdaexecutionparameters"></a>
<a id="schema_LambdaExecutionParameters"></a>
<a id="tocSlambdaexecutionparameters"></a>
<a id="tocslambdaexecutionparameters"></a>

```json
{
  "eventSources": {},
  "maxQueueSize": {},
  "maxInstancesCount": {},
  "maxIdleTimeInSeconds": {},
  "timeoutInSeconds": {},
  "statusTimeoutInSeconds": {},
  "pinned": {},
  "inputPayloadEncodingType": {},
  "execArgs": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "linuxProcessParams": {
    "isolationMode": {},
    "containerParams": {
      "memorySizeInKB": {},
      "mountROSysfs": {},
      "volumes": {},
      "devices": {}
    }
  }
}
```

Contains parameters for a Lambda function that runs on IoT Greengrass.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventSources|object|false|none|none|
|maxQueueSize|object|false|none|none|
|maxInstancesCount|object|false|none|none|
|maxIdleTimeInSeconds|object|false|none|none|
|timeoutInSeconds|object|false|none|none|
|statusTimeoutInSeconds|object|false|none|none|
|pinned|object|false|none|none|
|inputPayloadEncodingType|object|false|none|none|
|execArgs|object|false|none|none|
|environmentVariables|object|false|none|none|
|linuxProcessParams|object|false|none|none|

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

<h2 id="tocS_RequestAlreadyInProgressException">RequestAlreadyInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemarequestalreadyinprogressexception"></a>
<a id="schema_RequestAlreadyInProgressException"></a>
<a id="tocSrequestalreadyinprogressexception"></a>
<a id="tocsrequestalreadyinprogressexception"></a>

```json
null
```

<h2 id="tocS_CreateDeploymentResponse">CreateDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentresponse"></a>
<a id="schema_CreateDeploymentResponse"></a>
<a id="tocScreatedeploymentresponse"></a>
<a id="tocscreatedeploymentresponse"></a>

```json
{
  "deploymentId": {},
  "iotJobId": {},
  "iotJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|iotJobId|object|false|none|none|
|iotJobArn|object|false|none|none|

<h2 id="tocS_ComponentDeploymentSpecification">ComponentDeploymentSpecification</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdeploymentspecification"></a>
<a id="schema_ComponentDeploymentSpecification"></a>
<a id="tocScomponentdeploymentspecification"></a>
<a id="tocscomponentdeploymentspecification"></a>

```json
{
  "componentVersion": {},
  "configurationUpdate": {
    "merge": {},
    "reset": {}
  },
  "runWith": {
    "posixUser": {},
    "systemResourceLimits": {
      "memory": {},
      "cpus": {}
    },
    "windowsUser": {}
  }
}
```

Contains information about a component to deploy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentVersion|object|false|none|none|
|configurationUpdate|object|false|none|none|
|runWith|object|false|none|none|

<h2 id="tocS_IoTJobExecutionsRolloutConfig">IoTJobExecutionsRolloutConfig</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobexecutionsrolloutconfig"></a>
<a id="schema_IoTJobExecutionsRolloutConfig"></a>
<a id="tocSiotjobexecutionsrolloutconfig"></a>
<a id="tocsiotjobexecutionsrolloutconfig"></a>

```json
{
  "exponentialRate": {
    "baseRatePerMinute": {},
    "incrementFactor": {},
    "rateIncreaseCriteria": {
      "numberOfNotifiedThings": {},
      "numberOfSucceededThings": {}
    }
  },
  "maximumPerMinute": {}
}
```

Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exponentialRate|object|false|none|none|
|maximumPerMinute|object|false|none|none|

<h2 id="tocS_IoTJobAbortConfig">IoTJobAbortConfig</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobabortconfig"></a>
<a id="schema_IoTJobAbortConfig"></a>
<a id="tocSiotjobabortconfig"></a>
<a id="tocsiotjobabortconfig"></a>

```json
{
  "criteriaList": {}
}
```

Contains a list of criteria that define when and how to cancel a configuration deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteriaList|object|true|none|none|

<h2 id="tocS_IoTJobTimeoutConfig">IoTJobTimeoutConfig</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobtimeoutconfig"></a>
<a id="schema_IoTJobTimeoutConfig"></a>
<a id="tocSiotjobtimeoutconfig"></a>
<a id="tocsiotjobtimeoutconfig"></a>

```json
{
  "inProgressTimeoutInMinutes": {}
}
```

Contains information about the timeout configuration for a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inProgressTimeoutInMinutes|object|false|none|none|

<h2 id="tocS_DeploymentFailureHandlingPolicy">DeploymentFailureHandlingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentfailurehandlingpolicy"></a>
<a id="schema_DeploymentFailureHandlingPolicy"></a>
<a id="tocSdeploymentfailurehandlingpolicy"></a>
<a id="tocsdeploymentfailurehandlingpolicy"></a>

```json
"ROLLBACK"
```

<h2 id="tocS_DeploymentComponentUpdatePolicy">DeploymentComponentUpdatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcomponentupdatepolicy"></a>
<a id="schema_DeploymentComponentUpdatePolicy"></a>
<a id="tocSdeploymentcomponentupdatepolicy"></a>
<a id="tocsdeploymentcomponentupdatepolicy"></a>

```json
{
  "timeoutInSeconds": {},
  "action": {}
}
```

<p>Contains information about a deployment's policy that defines when components are safe to update.</p> <p>Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutInSeconds|object|false|none|none|
|action|object|false|none|none|

<h2 id="tocS_DeploymentConfigurationValidationPolicy">DeploymentConfigurationValidationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfigurationvalidationpolicy"></a>
<a id="schema_DeploymentConfigurationValidationPolicy"></a>
<a id="tocSdeploymentconfigurationvalidationpolicy"></a>
<a id="tocsdeploymentconfigurationvalidationpolicy"></a>

```json
{
  "timeoutInSeconds": {}
}
```

Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates">SubscribeToValidateConfigurationUpdates</a> IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport">SendConfigurationValidityReport</a> IPC operation. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutInSeconds|object|false|none|none|

<h2 id="tocS_DescribeComponentResponse">DescribeComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentresponse"></a>
<a id="schema_DescribeComponentResponse"></a>
<a id="tocSdescribecomponentresponse"></a>
<a id="tocsdescribecomponentresponse"></a>

```json
{
  "arn": {},
  "componentName": {},
  "componentVersion": {},
  "creationTimestamp": {},
  "publisher": {},
  "description": {},
  "status": {
    "componentState": {},
    "message": {},
    "errors": {
      "property1": "string",
      "property2": "string"
    },
    "vendorGuidance": {},
    "vendorGuidanceMessage": {}
  },
  "platforms": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|componentName|object|false|none|none|
|componentVersion|object|false|none|none|
|creationTimestamp|object|false|none|none|
|publisher|object|false|none|none|
|description|object|false|none|none|
|status|object|false|none|none|
|platforms|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DisassociateServiceRoleFromAccountResponse">DisassociateServiceRoleFromAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateservicerolefromaccountresponse"></a>
<a id="schema_DisassociateServiceRoleFromAccountResponse"></a>
<a id="tocSdisassociateservicerolefromaccountresponse"></a>
<a id="tocsdisassociateservicerolefromaccountresponse"></a>

```json
{
  "disassociatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disassociatedAt|object|false|none|none|

<h2 id="tocS_GetComponentResponse">GetComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentresponse"></a>
<a id="schema_GetComponentResponse"></a>
<a id="tocSgetcomponentresponse"></a>
<a id="tocsgetcomponentresponse"></a>

```json
{
  "recipeOutputFormat": {},
  "recipe": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipeOutputFormat|object|true|none|none|
|recipe|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetComponentVersionArtifactResponse">GetComponentVersionArtifactResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentversionartifactresponse"></a>
<a id="schema_GetComponentVersionArtifactResponse"></a>
<a id="tocSgetcomponentversionartifactresponse"></a>
<a id="tocsgetcomponentversionartifactresponse"></a>

```json
{
  "preSignedUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preSignedUrl|object|true|none|none|

<h2 id="tocS_GetConnectivityInfoResponse">GetConnectivityInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectivityinforesponse"></a>
<a id="schema_GetConnectivityInfoResponse"></a>
<a id="tocSgetconnectivityinforesponse"></a>
<a id="tocsgetconnectivityinforesponse"></a>

```json
{
  "connectivityInfo": {},
  "message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectivityInfo|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_GetCoreDeviceResponse">GetCoreDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcoredeviceresponse"></a>
<a id="schema_GetCoreDeviceResponse"></a>
<a id="tocSgetcoredeviceresponse"></a>
<a id="tocsgetcoredeviceresponse"></a>

```json
{
  "coreDeviceThingName": {},
  "coreVersion": {},
  "platform": {},
  "architecture": {},
  "status": {},
  "lastStatusUpdateTimestamp": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coreDeviceThingName|object|false|none|none|
|coreVersion|object|false|none|none|
|platform|object|false|none|none|
|architecture|object|false|none|none|
|status|object|false|none|none|
|lastStatusUpdateTimestamp|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetDeploymentResponse">GetDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentresponse"></a>
<a id="schema_GetDeploymentResponse"></a>
<a id="tocSgetdeploymentresponse"></a>
<a id="tocsgetdeploymentresponse"></a>

```json
{
  "targetArn": {},
  "revisionId": {},
  "deploymentId": {},
  "deploymentName": {},
  "deploymentStatus": {},
  "iotJobId": {},
  "iotJobArn": {},
  "components": {
    "property1": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    },
    "property2": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    }
  },
  "deploymentPolicies": {
    "failureHandlingPolicy": {},
    "componentUpdatePolicy": {
      "timeoutInSeconds": {},
      "action": {}
    },
    "configurationValidationPolicy": {
      "timeoutInSeconds": {}
    }
  },
  "iotJobConfiguration": {
    "jobExecutionsRolloutConfig": {
      "exponentialRate": {
        "baseRatePerMinute": {},
        "incrementFactor": {},
        "rateIncreaseCriteria": {
          "numberOfNotifiedThings": {},
          "numberOfSucceededThings": {}
        }
      },
      "maximumPerMinute": {}
    },
    "abortConfig": {
      "criteriaList": {}
    },
    "timeoutConfig": {
      "inProgressTimeoutInMinutes": {}
    }
  },
  "creationTimestamp": {},
  "isLatestForTarget": {},
  "parentTargetArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetArn|object|false|none|none|
|revisionId|object|false|none|none|
|deploymentId|object|false|none|none|
|deploymentName|object|false|none|none|
|deploymentStatus|object|false|none|none|
|iotJobId|object|false|none|none|
|iotJobArn|object|false|none|none|
|components|object|false|none|none|
|deploymentPolicies|object|false|none|none|
|iotJobConfiguration|object|false|none|none|
|creationTimestamp|object|false|none|none|
|isLatestForTarget|object|false|none|none|
|parentTargetArn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetServiceRoleForAccountResponse">GetServiceRoleForAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceroleforaccountresponse"></a>
<a id="schema_GetServiceRoleForAccountResponse"></a>
<a id="tocSgetserviceroleforaccountresponse"></a>
<a id="tocsgetserviceroleforaccountresponse"></a>

```json
{
  "associatedAt": {},
  "roleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedAt|object|false|none|none|
|roleArn|object|false|none|none|

<h2 id="tocS_ListClientDevicesAssociatedWithCoreDeviceResponse">ListClientDevicesAssociatedWithCoreDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientdevicesassociatedwithcoredeviceresponse"></a>
<a id="schema_ListClientDevicesAssociatedWithCoreDeviceResponse"></a>
<a id="tocSlistclientdevicesassociatedwithcoredeviceresponse"></a>
<a id="tocslistclientdevicesassociatedwithcoredeviceresponse"></a>

```json
{
  "associatedClientDevices": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedClientDevices|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListComponentVersionsResponse">ListComponentVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentversionsresponse"></a>
<a id="schema_ListComponentVersionsResponse"></a>
<a id="tocSlistcomponentversionsresponse"></a>
<a id="tocslistcomponentversionsresponse"></a>

```json
{
  "componentVersions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentVersions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListComponentsResponse">ListComponentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsresponse"></a>
<a id="schema_ListComponentsResponse"></a>
<a id="tocSlistcomponentsresponse"></a>
<a id="tocslistcomponentsresponse"></a>

```json
{
  "components": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListCoreDevicesResponse">ListCoreDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcoredevicesresponse"></a>
<a id="schema_ListCoreDevicesResponse"></a>
<a id="tocSlistcoredevicesresponse"></a>
<a id="tocslistcoredevicesresponse"></a>

```json
{
  "coreDevices": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coreDevices|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDeploymentsResponse">ListDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentsresponse"></a>
<a id="schema_ListDeploymentsResponse"></a>
<a id="tocSlistdeploymentsresponse"></a>
<a id="tocslistdeploymentsresponse"></a>

```json
{
  "deployments": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEffectiveDeploymentsResponse">ListEffectiveDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteffectivedeploymentsresponse"></a>
<a id="schema_ListEffectiveDeploymentsResponse"></a>
<a id="tocSlisteffectivedeploymentsresponse"></a>
<a id="tocslisteffectivedeploymentsresponse"></a>

```json
{
  "effectiveDeployments": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveDeployments|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListInstalledComponentsResponse">ListInstalledComponentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstalledcomponentsresponse"></a>
<a id="schema_ListInstalledComponentsResponse"></a>
<a id="tocSlistinstalledcomponentsresponse"></a>
<a id="tocslistinstalledcomponentsresponse"></a>

```json
{
  "installedComponents": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installedComponents|object|false|none|none|
|nextToken|object|false|none|none|

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
|tags|object|false|none|none|

<h2 id="tocS_ResolveComponentCandidatesResponse">ResolveComponentCandidatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresolvecomponentcandidatesresponse"></a>
<a id="schema_ResolveComponentCandidatesResponse"></a>
<a id="tocSresolvecomponentcandidatesresponse"></a>
<a id="tocsresolvecomponentcandidatesresponse"></a>

```json
{
  "resolvedComponentVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resolvedComponentVersions|object|false|none|none|

<h2 id="tocS_PlatformAttributesMap">PlatformAttributesMap</h2>
<!-- backwards compatibility -->
<a id="schemaplatformattributesmap"></a>
<a id="schema_PlatformAttributesMap"></a>
<a id="tocSplatformattributesmap"></a>
<a id="tocsplatformattributesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NonEmptyString](#schemanonemptystring)|false|none|none|

<h2 id="tocS_ComponentCandidate">ComponentCandidate</h2>
<!-- backwards compatibility -->
<a id="schemacomponentcandidate"></a>
<a id="schema_ComponentCandidate"></a>
<a id="tocScomponentcandidate"></a>
<a id="tocscomponentcandidate"></a>

```json
{
  "componentName": {},
  "componentVersion": {},
  "versionRequirements": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a component that is a candidate to deploy to a Greengrass core device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentName|object|false|none|none|
|componentVersion|object|false|none|none|
|versionRequirements|object|false|none|none|

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

<h2 id="tocS_UpdateConnectivityInfoResponse">UpdateConnectivityInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectivityinforesponse"></a>
<a id="schema_UpdateConnectivityInfoResponse"></a>
<a id="tocSupdateconnectivityinforesponse"></a>
<a id="tocsupdateconnectivityinforesponse"></a>

```json
{
  "version": {},
  "message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_ConnectivityInfo">ConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivityinfo"></a>
<a id="schema_ConnectivityInfo"></a>
<a id="tocSconnectivityinfo"></a>
<a id="tocsconnectivityinfo"></a>

```json
{
  "id": {},
  "hostAddress": {},
  "portNumber": {},
  "metadata": {}
}
```

Contains information about an endpoint and port where client devices can connect to an MQTT broker on a Greengrass core device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|hostAddress|object|false|none|none|
|portNumber|object|false|none|none|
|metadata|object|false|none|none|

<h2 id="tocS_IoTThingName">IoTThingName</h2>
<!-- backwards compatibility -->
<a id="schemaiotthingname"></a>
<a id="schema_IoTThingName"></a>
<a id="tocSiotthingname"></a>
<a id="tocsiotthingname"></a>

```json
"string"
```

<h2 id="tocS_AssociateClientDeviceWithCoreDeviceEntryList">AssociateClientDeviceWithCoreDeviceEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaassociateclientdevicewithcoredeviceentrylist"></a>
<a id="schema_AssociateClientDeviceWithCoreDeviceEntryList"></a>
<a id="tocSassociateclientdevicewithcoredeviceentrylist"></a>
<a id="tocsassociateclientdevicewithcoredeviceentrylist"></a>

```json
[
  {
    "thingName": {}
  }
]
```

<h2 id="tocS_AssociateClientDeviceWithCoreDeviceErrorEntry">AssociateClientDeviceWithCoreDeviceErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemaassociateclientdevicewithcoredeviceerrorentry"></a>
<a id="schema_AssociateClientDeviceWithCoreDeviceErrorEntry"></a>
<a id="tocSassociateclientdevicewithcoredeviceerrorentry"></a>
<a id="tocsassociateclientdevicewithcoredeviceerrorentry"></a>

```json
{
  "thingName": {},
  "code": {},
  "message": {}
}
```

Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|false|none|none|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_AssociateClientDeviceWithCoreDeviceErrorList">AssociateClientDeviceWithCoreDeviceErrorList</h2>
<!-- backwards compatibility -->
<a id="schemaassociateclientdevicewithcoredeviceerrorlist"></a>
<a id="schema_AssociateClientDeviceWithCoreDeviceErrorList"></a>
<a id="tocSassociateclientdevicewithcoredeviceerrorlist"></a>
<a id="tocsassociateclientdevicewithcoredeviceerrorlist"></a>

```json
[
  {
    "thingName": {},
    "code": {},
    "message": {}
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

<h2 id="tocS_AssociateServiceRoleToAccountRequest">AssociateServiceRoleToAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateserviceroletoaccountrequest"></a>
<a id="schema_AssociateServiceRoleToAccountRequest"></a>
<a id="tocSassociateserviceroletoaccountrequest"></a>
<a id="tocsassociateserviceroletoaccountrequest"></a>

```json
{
  "roleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleArn|object|true|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AssociatedClientDevice">AssociatedClientDevice</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedclientdevice"></a>
<a id="schema_AssociatedClientDevice"></a>
<a id="tocSassociatedclientdevice"></a>
<a id="tocsassociatedclientdevice"></a>

```json
{
  "thingName": {},
  "associationTimestamp": {}
}
```

Contains information about a client device that is associated to a core device for cloud discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|false|none|none|
|associationTimestamp|object|false|none|none|

<h2 id="tocS_AssociatedClientDeviceList">AssociatedClientDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedclientdevicelist"></a>
<a id="schema_AssociatedClientDeviceList"></a>
<a id="tocSassociatedclientdevicelist"></a>
<a id="tocsassociatedclientdevicelist"></a>

```json
[
  {
    "thingName": {},
    "associationTimestamp": {}
  }
]
```

<h2 id="tocS_BatchAssociateClientDeviceWithCoreDeviceRequest">BatchAssociateClientDeviceWithCoreDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateclientdevicewithcoredevicerequest"></a>
<a id="schema_BatchAssociateClientDeviceWithCoreDeviceRequest"></a>
<a id="tocSbatchassociateclientdevicewithcoredevicerequest"></a>
<a id="tocsbatchassociateclientdevicewithcoredevicerequest"></a>

```json
{
  "entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|false|none|none|

<h2 id="tocS_DisassociateClientDeviceFromCoreDeviceEntryList">DisassociateClientDeviceFromCoreDeviceEntryList</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateclientdevicefromcoredeviceentrylist"></a>
<a id="schema_DisassociateClientDeviceFromCoreDeviceEntryList"></a>
<a id="tocSdisassociateclientdevicefromcoredeviceentrylist"></a>
<a id="tocsdisassociateclientdevicefromcoredeviceentrylist"></a>

```json
[
  {
    "thingName": {}
  }
]
```

<h2 id="tocS_BatchDisassociateClientDeviceFromCoreDeviceRequest">BatchDisassociateClientDeviceFromCoreDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateclientdevicefromcoredevicerequest"></a>
<a id="schema_BatchDisassociateClientDeviceFromCoreDeviceRequest"></a>
<a id="tocSbatchdisassociateclientdevicefromcoredevicerequest"></a>
<a id="tocsbatchdisassociateclientdevicefromcoredevicerequest"></a>

```json
{
  "entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|false|none|none|

<h2 id="tocS_DisassociateClientDeviceFromCoreDeviceErrorList">DisassociateClientDeviceFromCoreDeviceErrorList</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateclientdevicefromcoredeviceerrorlist"></a>
<a id="schema_DisassociateClientDeviceFromCoreDeviceErrorList"></a>
<a id="tocSdisassociateclientdevicefromcoredeviceerrorlist"></a>
<a id="tocsdisassociateclientdevicefromcoredeviceerrorlist"></a>

```json
[
  {
    "thingName": {},
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_CPU">CPU</h2>
<!-- backwards compatibility -->
<a id="schemacpu"></a>
<a id="schema_CPU"></a>
<a id="tocScpu"></a>
<a id="tocscpu"></a>

```json
0
```

<h2 id="tocS_CancelDeploymentRequest">CancelDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceldeploymentrequest"></a>
<a id="schema_CancelDeploymentRequest"></a>
<a id="tocScanceldeploymentrequest"></a>
<a id="tocscanceldeploymentrequest"></a>

```json
{}
```

<h2 id="tocS_ClientTokenString">ClientTokenString</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokenstring"></a>
<a id="schema_ClientTokenString"></a>
<a id="tocSclienttokenstring"></a>
<a id="tocsclienttokenstring"></a>

```json
"string"
```

<h2 id="tocS_CloudComponentState">CloudComponentState</h2>
<!-- backwards compatibility -->
<a id="schemacloudcomponentstate"></a>
<a id="schema_CloudComponentState"></a>
<a id="tocScloudcomponentstate"></a>
<a id="tocscloudcomponentstate"></a>

```json
"REQUESTED"
```

<h2 id="tocS_StringMap">StringMap</h2>
<!-- backwards compatibility -->
<a id="schemastringmap"></a>
<a id="schema_StringMap"></a>
<a id="tocSstringmap"></a>
<a id="tocsstringmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NonEmptyString](#schemanonemptystring)|false|none|none|

<h2 id="tocS_VendorGuidance">VendorGuidance</h2>
<!-- backwards compatibility -->
<a id="schemavendorguidance"></a>
<a id="schema_VendorGuidance"></a>
<a id="tocSvendorguidance"></a>
<a id="tocsvendorguidance"></a>

```json
"ACTIVE"
```

<h2 id="tocS_CloudComponentStatus">CloudComponentStatus</h2>
<!-- backwards compatibility -->
<a id="schemacloudcomponentstatus"></a>
<a id="schema_CloudComponentStatus"></a>
<a id="tocScloudcomponentstatus"></a>
<a id="tocscloudcomponentstatus"></a>

```json
{
  "componentState": {},
  "message": {},
  "errors": {
    "property1": "string",
    "property2": "string"
  },
  "vendorGuidance": {},
  "vendorGuidanceMessage": {}
}
```

Contains the status of a component version in the IoT Greengrass service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentState|object|false|none|none|
|message|object|false|none|none|
|errors|object|false|none|none|
|vendorGuidance|object|false|none|none|
|vendorGuidanceMessage|object|false|none|none|

<h2 id="tocS_ComponentARN">ComponentARN</h2>
<!-- backwards compatibility -->
<a id="schemacomponentarn"></a>
<a id="schema_ComponentARN"></a>
<a id="tocScomponentarn"></a>
<a id="tocscomponentarn"></a>

```json
"string"
```

<h2 id="tocS_ComponentLatestVersion">ComponentLatestVersion</h2>
<!-- backwards compatibility -->
<a id="schemacomponentlatestversion"></a>
<a id="schema_ComponentLatestVersion"></a>
<a id="tocScomponentlatestversion"></a>
<a id="tocscomponentlatestversion"></a>

```json
{
  "arn": {},
  "componentVersion": {},
  "creationTimestamp": {},
  "description": {},
  "publisher": {},
  "platforms": {}
}
```

Contains information about the latest version of a component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|componentVersion|object|false|none|none|
|creationTimestamp|object|false|none|none|
|description|object|false|none|none|
|publisher|object|false|none|none|
|platforms|object|false|none|none|

<h2 id="tocS_Component">Component</h2>
<!-- backwards compatibility -->
<a id="schemacomponent"></a>
<a id="schema_Component"></a>
<a id="tocScomponent"></a>
<a id="tocscomponent"></a>

```json
{
  "arn": {},
  "componentName": {},
  "latestVersion": {
    "arn": {},
    "componentVersion": {},
    "creationTimestamp": {},
    "description": {},
    "publisher": {},
    "platforms": {}
  }
}
```

Contains information about a component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|componentName|object|false|none|none|
|latestVersion|object|false|none|none|

<h2 id="tocS_ComponentVersionRequirementMap">ComponentVersionRequirementMap</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionrequirementmap"></a>
<a id="schema_ComponentVersionRequirementMap"></a>
<a id="tocScomponentversionrequirementmap"></a>
<a id="tocscomponentversionrequirementmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NonEmptyString](#schemanonemptystring)|false|none|none|

<h2 id="tocS_ComponentCandidateList">ComponentCandidateList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentcandidatelist"></a>
<a id="schema_ComponentCandidateList"></a>
<a id="tocScomponentcandidatelist"></a>
<a id="tocscomponentcandidatelist"></a>

```json
[
  {
    "componentName": {},
    "componentVersion": {},
    "versionRequirements": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ComponentConfigurationPath">ComponentConfigurationPath</h2>
<!-- backwards compatibility -->
<a id="schemacomponentconfigurationpath"></a>
<a id="schema_ComponentConfigurationPath"></a>
<a id="tocScomponentconfigurationpath"></a>
<a id="tocscomponentconfigurationpath"></a>

```json
"string"
```

<h2 id="tocS_ComponentConfigurationPathList">ComponentConfigurationPathList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentconfigurationpathlist"></a>
<a id="schema_ComponentConfigurationPathList"></a>
<a id="tocScomponentconfigurationpathlist"></a>
<a id="tocscomponentconfigurationpathlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComponentConfigurationString">ComponentConfigurationString</h2>
<!-- backwards compatibility -->
<a id="schemacomponentconfigurationstring"></a>
<a id="schema_ComponentConfigurationString"></a>
<a id="tocScomponentconfigurationstring"></a>
<a id="tocscomponentconfigurationstring"></a>

```json
"string"
```

<h2 id="tocS_ComponentConfigurationUpdate">ComponentConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacomponentconfigurationupdate"></a>
<a id="schema_ComponentConfigurationUpdate"></a>
<a id="tocScomponentconfigurationupdate"></a>
<a id="tocscomponentconfigurationupdate"></a>

```json
{
  "merge": {},
  "reset": {}
}
```

Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merge|object|false|none|none|
|reset|object|false|none|none|

<h2 id="tocS_ComponentDependencyRequirement">ComponentDependencyRequirement</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdependencyrequirement"></a>
<a id="schema_ComponentDependencyRequirement"></a>
<a id="tocScomponentdependencyrequirement"></a>
<a id="tocscomponentdependencyrequirement"></a>

```json
{
  "versionRequirement": {},
  "dependencyType": {}
}
```

Contains information about a component dependency for a Lambda function component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionRequirement|object|false|none|none|
|dependencyType|object|false|none|none|

<h2 id="tocS_ComponentDependencyType">ComponentDependencyType</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdependencytype"></a>
<a id="schema_ComponentDependencyType"></a>
<a id="tocScomponentdependencytype"></a>
<a id="tocscomponentdependencytype"></a>

```json
"HARD"
```

<h2 id="tocS_ComponentRunWith">ComponentRunWith</h2>
<!-- backwards compatibility -->
<a id="schemacomponentrunwith"></a>
<a id="schema_ComponentRunWith"></a>
<a id="tocScomponentrunwith"></a>
<a id="tocscomponentrunwith"></a>

```json
{
  "posixUser": {},
  "systemResourceLimits": {
    "memory": {},
    "cpus": {}
  },
  "windowsUser": {}
}
```

Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posixUser|object|false|none|none|
|systemResourceLimits|object|false|none|none|
|windowsUser|object|false|none|none|

<h2 id="tocS_ComponentDeploymentSpecifications">ComponentDeploymentSpecifications</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdeploymentspecifications"></a>
<a id="schema_ComponentDeploymentSpecifications"></a>
<a id="tocScomponentdeploymentspecifications"></a>
<a id="tocscomponentdeploymentspecifications"></a>

```json
{
  "property1": {
    "componentVersion": {},
    "configurationUpdate": {
      "merge": {},
      "reset": {}
    },
    "runWith": {
      "posixUser": {},
      "systemResourceLimits": {
        "memory": {},
        "cpus": {}
      },
      "windowsUser": {}
    }
  },
  "property2": {
    "componentVersion": {},
    "configurationUpdate": {
      "merge": {},
      "reset": {}
    },
    "runWith": {
      "posixUser": {},
      "systemResourceLimits": {
        "memory": {},
        "cpus": {}
      },
      "windowsUser": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ComponentDeploymentSpecification](#schemacomponentdeploymentspecification)|false|none|Contains information about a component to deploy.|

<h2 id="tocS_ComponentVersionARN">ComponentVersionARN</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionarn"></a>
<a id="schema_ComponentVersionARN"></a>
<a id="tocScomponentversionarn"></a>
<a id="tocscomponentversionarn"></a>

```json
"string"
```

<h2 id="tocS_ComponentList">ComponentList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentlist"></a>
<a id="schema_ComponentList"></a>
<a id="tocScomponentlist"></a>
<a id="tocscomponentlist"></a>

```json
[
  {
    "arn": {},
    "componentName": {},
    "latestVersion": {
      "arn": {},
      "componentVersion": {},
      "creationTimestamp": {},
      "description": {},
      "publisher": {},
      "platforms": {}
    }
  }
]
```

<h2 id="tocS_ComponentPlatform">ComponentPlatform</h2>
<!-- backwards compatibility -->
<a id="schemacomponentplatform"></a>
<a id="schema_ComponentPlatform"></a>
<a id="tocScomponentplatform"></a>
<a id="tocscomponentplatform"></a>

```json
{
  "name": {},
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a platform that a component supports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_SystemResourceLimits">SystemResourceLimits</h2>
<!-- backwards compatibility -->
<a id="schemasystemresourcelimits"></a>
<a id="schema_SystemResourceLimits"></a>
<a id="tocSsystemresourcelimits"></a>
<a id="tocssystemresourcelimits"></a>

```json
{
  "memory": {},
  "cpus": {}
}
```

Contains information about system resource limits that the IoT Greengrass Core software applies to a component's processes. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|object|false|none|none|
|cpus|object|false|none|none|

<h2 id="tocS_ComponentVersionListItem">ComponentVersionListItem</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionlistitem"></a>
<a id="schema_ComponentVersionListItem"></a>
<a id="tocScomponentversionlistitem"></a>
<a id="tocscomponentversionlistitem"></a>

```json
{
  "componentName": {},
  "componentVersion": {},
  "arn": {}
}
```

Contains information about a component version in a list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentName|object|false|none|none|
|componentVersion|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_ComponentVersionList">ComponentVersionList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionlist"></a>
<a id="schema_ComponentVersionList"></a>
<a id="tocScomponentversionlist"></a>
<a id="tocscomponentversionlist"></a>

```json
[
  {
    "componentName": {},
    "componentVersion": {},
    "arn": {}
  }
]
```

<h2 id="tocS_ComponentVisibilityScope">ComponentVisibilityScope</h2>
<!-- backwards compatibility -->
<a id="schemacomponentvisibilityscope"></a>
<a id="schema_ComponentVisibilityScope"></a>
<a id="tocScomponentvisibilityscope"></a>
<a id="tocscomponentvisibilityscope"></a>

```json
"PRIVATE"
```

<h2 id="tocS_PortNumberInt">PortNumberInt</h2>
<!-- backwards compatibility -->
<a id="schemaportnumberint"></a>
<a id="schema_PortNumberInt"></a>
<a id="tocSportnumberint"></a>
<a id="tocsportnumberint"></a>

```json
0
```

<h2 id="tocS_CoreDeviceThingName">CoreDeviceThingName</h2>
<!-- backwards compatibility -->
<a id="schemacoredevicethingname"></a>
<a id="schema_CoreDeviceThingName"></a>
<a id="tocScoredevicethingname"></a>
<a id="tocscoredevicethingname"></a>

```json
"string"
```

<h2 id="tocS_CoreDeviceStatus">CoreDeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemacoredevicestatus"></a>
<a id="schema_CoreDeviceStatus"></a>
<a id="tocScoredevicestatus"></a>
<a id="tocscoredevicestatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_CoreDevice">CoreDevice</h2>
<!-- backwards compatibility -->
<a id="schemacoredevice"></a>
<a id="schema_CoreDevice"></a>
<a id="tocScoredevice"></a>
<a id="tocscoredevice"></a>

```json
{
  "coreDeviceThingName": {},
  "status": {},
  "lastStatusUpdateTimestamp": {}
}
```

Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coreDeviceThingName|object|false|none|none|
|status|object|false|none|none|
|lastStatusUpdateTimestamp|object|false|none|none|

<h2 id="tocS_CoreDeviceArchitectureString">CoreDeviceArchitectureString</h2>
<!-- backwards compatibility -->
<a id="schemacoredevicearchitecturestring"></a>
<a id="schema_CoreDeviceArchitectureString"></a>
<a id="tocScoredevicearchitecturestring"></a>
<a id="tocscoredevicearchitecturestring"></a>

```json
"string"
```

<h2 id="tocS_CoreDevicePlatformString">CoreDevicePlatformString</h2>
<!-- backwards compatibility -->
<a id="schemacoredeviceplatformstring"></a>
<a id="schema_CoreDevicePlatformString"></a>
<a id="tocScoredeviceplatformstring"></a>
<a id="tocscoredeviceplatformstring"></a>

```json
"string"
```

<h2 id="tocS_CoreDevicesList">CoreDevicesList</h2>
<!-- backwards compatibility -->
<a id="schemacoredeviceslist"></a>
<a id="schema_CoreDevicesList"></a>
<a id="tocScoredeviceslist"></a>
<a id="tocscoredeviceslist"></a>

```json
[
  {
    "coreDeviceThingName": {},
    "status": {},
    "lastStatusUpdateTimestamp": {}
  }
]
```

<h2 id="tocS_RecipeBlob">RecipeBlob</h2>
<!-- backwards compatibility -->
<a id="schemarecipeblob"></a>
<a id="schema_RecipeBlob"></a>
<a id="tocSrecipeblob"></a>
<a id="tocsrecipeblob"></a>

```json
"string"
```

<h2 id="tocS_LambdaFunctionRecipeSource">LambdaFunctionRecipeSource</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionrecipesource"></a>
<a id="schema_LambdaFunctionRecipeSource"></a>
<a id="tocSlambdafunctionrecipesource"></a>
<a id="tocslambdafunctionrecipesource"></a>

```json
{
  "lambdaArn": {},
  "componentName": {},
  "componentVersion": {},
  "componentPlatforms": {},
  "componentDependencies": {
    "property1": {
      "versionRequirement": {},
      "dependencyType": {}
    },
    "property2": {
      "versionRequirement": {},
      "dependencyType": {}
    }
  },
  "componentLambdaParameters": {
    "eventSources": {},
    "maxQueueSize": {},
    "maxInstancesCount": {},
    "maxIdleTimeInSeconds": {},
    "timeoutInSeconds": {},
    "statusTimeoutInSeconds": {},
    "pinned": {},
    "inputPayloadEncodingType": {},
    "execArgs": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "linuxProcessParams": {
      "isolationMode": {},
      "containerParams": {
        "memorySizeInKB": {},
        "mountROSysfs": {},
        "volumes": {},
        "devices": {}
      }
    }
  }
}
```

Contains information about an Lambda function to import to create a component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambdaArn|object|true|none|none|
|componentName|object|false|none|none|
|componentVersion|object|false|none|none|
|componentPlatforms|object|false|none|none|
|componentDependencies|object|false|none|none|
|componentLambdaParameters|object|false|none|none|

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

<h2 id="tocS_CreateComponentVersionRequest">CreateComponentVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentversionrequest"></a>
<a id="schema_CreateComponentVersionRequest"></a>
<a id="tocScreatecomponentversionrequest"></a>
<a id="tocscreatecomponentversionrequest"></a>

```json
{
  "inlineRecipe": {},
  "lambdaFunction": {
    "lambdaArn": {},
    "componentName": {},
    "componentVersion": {},
    "componentPlatforms": {},
    "componentDependencies": {
      "property1": {
        "versionRequirement": {},
        "dependencyType": {}
      },
      "property2": {
        "versionRequirement": {},
        "dependencyType": {}
      }
    },
    "componentLambdaParameters": {
      "eventSources": {},
      "maxQueueSize": {},
      "maxInstancesCount": {},
      "maxIdleTimeInSeconds": {},
      "timeoutInSeconds": {},
      "statusTimeoutInSeconds": {},
      "pinned": {},
      "inputPayloadEncodingType": {},
      "execArgs": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "linuxProcessParams": {
        "isolationMode": {},
        "containerParams": {
          "memorySizeInKB": {},
          "mountROSysfs": {},
          "volumes": {},
          "devices": {}
        }
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inlineRecipe|object|false|none|none|
|lambdaFunction|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_TargetARN">TargetARN</h2>
<!-- backwards compatibility -->
<a id="schematargetarn"></a>
<a id="schema_TargetARN"></a>
<a id="tocStargetarn"></a>
<a id="tocstargetarn"></a>

```json
"string"
```

<h2 id="tocS_DeploymentNameString">DeploymentNameString</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentnamestring"></a>
<a id="schema_DeploymentNameString"></a>
<a id="tocSdeploymentnamestring"></a>
<a id="tocsdeploymentnamestring"></a>

```json
"string"
```

<h2 id="tocS_DeploymentIoTJobConfiguration">DeploymentIoTJobConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentiotjobconfiguration"></a>
<a id="schema_DeploymentIoTJobConfiguration"></a>
<a id="tocSdeploymentiotjobconfiguration"></a>
<a id="tocsdeploymentiotjobconfiguration"></a>

```json
{
  "jobExecutionsRolloutConfig": {
    "exponentialRate": {
      "baseRatePerMinute": {},
      "incrementFactor": {},
      "rateIncreaseCriteria": {
        "numberOfNotifiedThings": {},
        "numberOfSucceededThings": {}
      }
    },
    "maximumPerMinute": {}
  },
  "abortConfig": {
    "criteriaList": {}
  },
  "timeoutConfig": {
    "inProgressTimeoutInMinutes": {}
  }
}
```

Contains information about an IoT job configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobExecutionsRolloutConfig|object|false|none|none|
|abortConfig|object|false|none|none|
|timeoutConfig|object|false|none|none|

<h2 id="tocS_DeploymentPolicies">DeploymentPolicies</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentpolicies"></a>
<a id="schema_DeploymentPolicies"></a>
<a id="tocSdeploymentpolicies"></a>
<a id="tocsdeploymentpolicies"></a>

```json
{
  "failureHandlingPolicy": {},
  "componentUpdatePolicy": {
    "timeoutInSeconds": {},
    "action": {}
  },
  "configurationValidationPolicy": {
    "timeoutInSeconds": {}
  }
}
```

Contains information about policies that define how a deployment updates components and handles failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureHandlingPolicy|object|false|none|none|
|componentUpdatePolicy|object|false|none|none|
|configurationValidationPolicy|object|false|none|none|

<h2 id="tocS_ThingGroupARN">ThingGroupARN</h2>
<!-- backwards compatibility -->
<a id="schemathinggrouparn"></a>
<a id="schema_ThingGroupARN"></a>
<a id="tocSthinggrouparn"></a>
<a id="tocsthinggrouparn"></a>

```json
"string"
```

<h2 id="tocS_CreateDeploymentRequest">CreateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentrequest"></a>
<a id="schema_CreateDeploymentRequest"></a>
<a id="tocScreatedeploymentrequest"></a>
<a id="tocscreatedeploymentrequest"></a>

```json
{
  "targetArn": {},
  "deploymentName": {},
  "components": {
    "property1": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    },
    "property2": {
      "componentVersion": {},
      "configurationUpdate": {
        "merge": {},
        "reset": {}
      },
      "runWith": {
        "posixUser": {},
        "systemResourceLimits": {
          "memory": {},
          "cpus": {}
        },
        "windowsUser": {}
      }
    }
  },
  "iotJobConfiguration": {
    "jobExecutionsRolloutConfig": {
      "exponentialRate": {
        "baseRatePerMinute": {},
        "incrementFactor": {},
        "rateIncreaseCriteria": {
          "numberOfNotifiedThings": {},
          "numberOfSucceededThings": {}
        }
      },
      "maximumPerMinute": {}
    },
    "abortConfig": {
      "criteriaList": {}
    },
    "timeoutConfig": {
      "inProgressTimeoutInMinutes": {}
    }
  },
  "deploymentPolicies": {
    "failureHandlingPolicy": {},
    "componentUpdatePolicy": {
      "timeoutInSeconds": {},
      "action": {}
    },
    "configurationValidationPolicy": {
      "timeoutInSeconds": {}
    }
  },
  "parentTargetArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetArn|object|true|none|none|
|deploymentName|object|false|none|none|
|components|object|false|none|none|
|iotJobConfiguration|object|false|none|none|
|deploymentPolicies|object|false|none|none|
|parentTargetArn|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_IoTJobARN">IoTJobARN</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobarn"></a>
<a id="schema_IoTJobARN"></a>
<a id="tocSiotjobarn"></a>
<a id="tocsiotjobarn"></a>

```json
"string"
```

<h2 id="tocS_DefaultMaxResults">DefaultMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadefaultmaxresults"></a>
<a id="schema_DefaultMaxResults"></a>
<a id="tocSdefaultmaxresults"></a>
<a id="tocsdefaultmaxresults"></a>

```json
1
```

<h2 id="tocS_DeleteComponentRequest">DeleteComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomponentrequest"></a>
<a id="schema_DeleteComponentRequest"></a>
<a id="tocSdeletecomponentrequest"></a>
<a id="tocsdeletecomponentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCoreDeviceRequest">DeleteCoreDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecoredevicerequest"></a>
<a id="schema_DeleteCoreDeviceRequest"></a>
<a id="tocSdeletecoredevicerequest"></a>
<a id="tocsdeletecoredevicerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDeploymentRequest">DeleteDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeploymentrequest"></a>
<a id="schema_DeleteDeploymentRequest"></a>
<a id="tocSdeletedeploymentrequest"></a>
<a id="tocsdeletedeploymentrequest"></a>

```json
{}
```

<h2 id="tocS_DeploymentStatus">DeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatus"></a>
<a id="schema_DeploymentStatus"></a>
<a id="tocSdeploymentstatus"></a>
<a id="tocsdeploymentstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_IsLatestForTarget">IsLatestForTarget</h2>
<!-- backwards compatibility -->
<a id="schemaislatestfortarget"></a>
<a id="schema_IsLatestForTarget"></a>
<a id="tocSislatestfortarget"></a>
<a id="tocsislatestfortarget"></a>

```json
true
```

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "targetArn": {},
  "revisionId": {},
  "deploymentId": {},
  "deploymentName": {},
  "creationTimestamp": {},
  "deploymentStatus": {},
  "isLatestForTarget": {},
  "parentTargetArn": {}
}
```

Contains information about a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetArn|object|false|none|none|
|revisionId|object|false|none|none|
|deploymentId|object|false|none|none|
|deploymentName|object|false|none|none|
|creationTimestamp|object|false|none|none|
|deploymentStatus|object|false|none|none|
|isLatestForTarget|object|false|none|none|
|parentTargetArn|object|false|none|none|

<h2 id="tocS_OptionalInteger">OptionalInteger</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalinteger"></a>
<a id="schema_OptionalInteger"></a>
<a id="tocSoptionalinteger"></a>
<a id="tocsoptionalinteger"></a>

```json
0
```

<h2 id="tocS_DeploymentComponentUpdatePolicyAction">DeploymentComponentUpdatePolicyAction</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcomponentupdatepolicyaction"></a>
<a id="schema_DeploymentComponentUpdatePolicyAction"></a>
<a id="tocSdeploymentcomponentupdatepolicyaction"></a>
<a id="tocsdeploymentcomponentupdatepolicyaction"></a>

```json
"NOTIFY_COMPONENTS"
```

<h2 id="tocS_DeploymentHistoryFilter">DeploymentHistoryFilter</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenthistoryfilter"></a>
<a id="schema_DeploymentHistoryFilter"></a>
<a id="tocSdeploymenthistoryfilter"></a>
<a id="tocsdeploymenthistoryfilter"></a>

```json
"ALL"
```

<h2 id="tocS_DeploymentID">DeploymentID</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentid"></a>
<a id="schema_DeploymentID"></a>
<a id="tocSdeploymentid"></a>
<a id="tocsdeploymentid"></a>

```json
"string"
```

<h2 id="tocS_DeploymentList">DeploymentList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentlist"></a>
<a id="schema_DeploymentList"></a>
<a id="tocSdeploymentlist"></a>
<a id="tocsdeploymentlist"></a>

```json
[
  {
    "targetArn": {},
    "revisionId": {},
    "deploymentId": {},
    "deploymentName": {},
    "creationTimestamp": {},
    "deploymentStatus": {},
    "isLatestForTarget": {},
    "parentTargetArn": {}
  }
]
```

<h2 id="tocS_DeploymentName">DeploymentName</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentname"></a>
<a id="schema_DeploymentName"></a>
<a id="tocSdeploymentname"></a>
<a id="tocsdeploymentname"></a>

```json
"string"
```

<h2 id="tocS_DescribeComponentRequest">DescribeComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentrequest"></a>
<a id="schema_DescribeComponentRequest"></a>
<a id="tocSdescribecomponentrequest"></a>
<a id="tocsdescribecomponentrequest"></a>

```json
{}
```

<h2 id="tocS_PublisherString">PublisherString</h2>
<!-- backwards compatibility -->
<a id="schemapublisherstring"></a>
<a id="schema_PublisherString"></a>
<a id="tocSpublisherstring"></a>
<a id="tocspublisherstring"></a>

```json
"string"
```

<h2 id="tocS_DescriptionString">DescriptionString</h2>
<!-- backwards compatibility -->
<a id="schemadescriptionstring"></a>
<a id="schema_DescriptionString"></a>
<a id="tocSdescriptionstring"></a>
<a id="tocsdescriptionstring"></a>

```json
"string"
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

<h2 id="tocS_DisassociateClientDeviceFromCoreDeviceErrorEntry">DisassociateClientDeviceFromCoreDeviceErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateclientdevicefromcoredeviceerrorentry"></a>
<a id="schema_DisassociateClientDeviceFromCoreDeviceErrorEntry"></a>
<a id="tocSdisassociateclientdevicefromcoredeviceerrorentry"></a>
<a id="tocsdisassociateclientdevicefromcoredeviceerrorentry"></a>

```json
{
  "thingName": {},
  "code": {},
  "message": {}
}
```

Contains an error that occurs from a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|false|none|none|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_DisassociateServiceRoleFromAccountRequest">DisassociateServiceRoleFromAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateservicerolefromaccountrequest"></a>
<a id="schema_DisassociateServiceRoleFromAccountRequest"></a>
<a id="tocSdisassociateservicerolefromaccountrequest"></a>
<a id="tocsdisassociateservicerolefromaccountrequest"></a>

```json
{}
```

<h2 id="tocS_IoTJobId">IoTJobId</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobid"></a>
<a id="schema_IoTJobId"></a>
<a id="tocSiotjobid"></a>
<a id="tocsiotjobid"></a>

```json
"string"
```

<h2 id="tocS_EffectiveDeploymentExecutionStatus">EffectiveDeploymentExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeploymentexecutionstatus"></a>
<a id="schema_EffectiveDeploymentExecutionStatus"></a>
<a id="tocSeffectivedeploymentexecutionstatus"></a>
<a id="tocseffectivedeploymentexecutionstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_Reason">Reason</h2>
<!-- backwards compatibility -->
<a id="schemareason"></a>
<a id="schema_Reason"></a>
<a id="tocSreason"></a>
<a id="tocsreason"></a>

```json
"string"
```

<h2 id="tocS_EffectiveDeploymentStatusDetails">EffectiveDeploymentStatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeploymentstatusdetails"></a>
<a id="schema_EffectiveDeploymentStatusDetails"></a>
<a id="tocSeffectivedeploymentstatusdetails"></a>
<a id="tocseffectivedeploymentstatusdetails"></a>

```json
{
  "errorStack": {},
  "errorTypes": {}
}
```

<p>Contains all error-related information for the deployment record. The status details will be null if the deployment is in a success state.</p> <note> <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>errorStack</code> and <code>errorTypes</code> response. This field will not be returned for earlier Greengrass nucleus versions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorStack|object|false|none|none|
|errorTypes|object|false|none|none|

<h2 id="tocS_EffectiveDeployment">EffectiveDeployment</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeployment"></a>
<a id="schema_EffectiveDeployment"></a>
<a id="tocSeffectivedeployment"></a>
<a id="tocseffectivedeployment"></a>

```json
{
  "deploymentId": {},
  "deploymentName": {},
  "iotJobId": {},
  "iotJobArn": {},
  "description": {},
  "targetArn": {},
  "coreDeviceExecutionStatus": {},
  "reason": {},
  "creationTimestamp": {},
  "modifiedTimestamp": {},
  "statusDetails": {
    "errorStack": {},
    "errorTypes": {}
  }
}
```

Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|true|none|none|
|deploymentName|object|true|none|none|
|iotJobId|object|false|none|none|
|iotJobArn|object|false|none|none|
|description|object|false|none|none|
|targetArn|object|true|none|none|
|coreDeviceExecutionStatus|object|true|none|none|
|reason|object|false|none|none|
|creationTimestamp|object|true|none|none|
|modifiedTimestamp|object|true|none|none|
|statusDetails|object|false|none|none|

<h2 id="tocS_EffectiveDeploymentErrorCode">EffectiveDeploymentErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeploymenterrorcode"></a>
<a id="schema_EffectiveDeploymentErrorCode"></a>
<a id="tocSeffectivedeploymenterrorcode"></a>
<a id="tocseffectivedeploymenterrorcode"></a>

```json
"string"
```

<h2 id="tocS_EffectiveDeploymentErrorStack">EffectiveDeploymentErrorStack</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeploymenterrorstack"></a>
<a id="schema_EffectiveDeploymentErrorStack"></a>
<a id="tocSeffectivedeploymenterrorstack"></a>
<a id="tocseffectivedeploymenterrorstack"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EffectiveDeploymentErrorType">EffectiveDeploymentErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeploymenterrortype"></a>
<a id="schema_EffectiveDeploymentErrorType"></a>
<a id="tocSeffectivedeploymenterrortype"></a>
<a id="tocseffectivedeploymenterrortype"></a>

```json
"string"
```

<h2 id="tocS_EffectiveDeploymentErrorTypeList">EffectiveDeploymentErrorTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeploymenterrortypelist"></a>
<a id="schema_EffectiveDeploymentErrorTypeList"></a>
<a id="tocSeffectivedeploymenterrortypelist"></a>
<a id="tocseffectivedeploymenterrortypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EffectiveDeploymentsList">EffectiveDeploymentsList</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivedeploymentslist"></a>
<a id="schema_EffectiveDeploymentsList"></a>
<a id="tocSeffectivedeploymentslist"></a>
<a id="tocseffectivedeploymentslist"></a>

```json
[
  {
    "deploymentId": {},
    "deploymentName": {},
    "iotJobId": {},
    "iotJobArn": {},
    "description": {},
    "targetArn": {},
    "coreDeviceExecutionStatus": {},
    "reason": {},
    "creationTimestamp": {},
    "modifiedTimestamp": {},
    "statusDetails": {
      "errorStack": {},
      "errorTypes": {}
    }
  }
]
```

<h2 id="tocS_FileSystemPath">FileSystemPath</h2>
<!-- backwards compatibility -->
<a id="schemafilesystempath"></a>
<a id="schema_FileSystemPath"></a>
<a id="tocSfilesystempath"></a>
<a id="tocsfilesystempath"></a>

```json
"string"
```

<h2 id="tocS_GGCVersion">GGCVersion</h2>
<!-- backwards compatibility -->
<a id="schemaggcversion"></a>
<a id="schema_GGCVersion"></a>
<a id="tocSggcversion"></a>
<a id="tocsggcversion"></a>

```json
"string"
```

<h2 id="tocS_GenericV2ARN">GenericV2ARN</h2>
<!-- backwards compatibility -->
<a id="schemagenericv2arn"></a>
<a id="schema_GenericV2ARN"></a>
<a id="tocSgenericv2arn"></a>
<a id="tocsgenericv2arn"></a>

```json
"string"
```

<h2 id="tocS_RecipeOutputFormat">RecipeOutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemarecipeoutputformat"></a>
<a id="schema_RecipeOutputFormat"></a>
<a id="tocSrecipeoutputformat"></a>
<a id="tocsrecipeoutputformat"></a>

```json
"JSON"
```

<h2 id="tocS_GetComponentRequest">GetComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentrequest"></a>
<a id="schema_GetComponentRequest"></a>
<a id="tocSgetcomponentrequest"></a>
<a id="tocsgetcomponentrequest"></a>

```json
{}
```

<h2 id="tocS_GetComponentVersionArtifactRequest">GetComponentVersionArtifactRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentversionartifactrequest"></a>
<a id="schema_GetComponentVersionArtifactRequest"></a>
<a id="tocSgetcomponentversionartifactrequest"></a>
<a id="tocsgetcomponentversionartifactrequest"></a>

```json
{}
```

<h2 id="tocS_GetConnectivityInfoRequest">GetConnectivityInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectivityinforequest"></a>
<a id="schema_GetConnectivityInfoRequest"></a>
<a id="tocSgetconnectivityinforequest"></a>
<a id="tocsgetconnectivityinforequest"></a>

```json
{}
```

<h2 id="tocS_connectivityInfoList">connectivityInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivityinfolist"></a>
<a id="schema_connectivityInfoList"></a>
<a id="tocSconnectivityinfolist"></a>
<a id="tocsconnectivityinfolist"></a>

```json
[
  {
    "id": {},
    "hostAddress": {},
    "portNumber": {},
    "metadata": {}
  }
]
```

<h2 id="tocS_GetCoreDeviceRequest">GetCoreDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcoredevicerequest"></a>
<a id="schema_GetCoreDeviceRequest"></a>
<a id="tocSgetcoredevicerequest"></a>
<a id="tocsgetcoredevicerequest"></a>

```json
{}
```

<h2 id="tocS_GetDeploymentRequest">GetDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentrequest"></a>
<a id="schema_GetDeploymentRequest"></a>
<a id="tocSgetdeploymentrequest"></a>
<a id="tocsgetdeploymentrequest"></a>

```json
{}
```

<h2 id="tocS_NullableString">NullableString</h2>
<!-- backwards compatibility -->
<a id="schemanullablestring"></a>
<a id="schema_NullableString"></a>
<a id="tocSnullablestring"></a>
<a id="tocsnullablestring"></a>

```json
"string"
```

<h2 id="tocS_GetServiceRoleForAccountRequest">GetServiceRoleForAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceroleforaccountrequest"></a>
<a id="schema_GetServiceRoleForAccountRequest"></a>
<a id="tocSgetserviceroleforaccountrequest"></a>
<a id="tocsgetserviceroleforaccountrequest"></a>

```json
{}
```

<h2 id="tocS_InstalledComponentLifecycleState">InstalledComponentLifecycleState</h2>
<!-- backwards compatibility -->
<a id="schemainstalledcomponentlifecyclestate"></a>
<a id="schema_InstalledComponentLifecycleState"></a>
<a id="tocSinstalledcomponentlifecyclestate"></a>
<a id="tocsinstalledcomponentlifecyclestate"></a>

```json
"NEW"
```

<h2 id="tocS_LifecycleStateDetails">LifecycleStateDetails</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclestatedetails"></a>
<a id="schema_LifecycleStateDetails"></a>
<a id="tocSlifecyclestatedetails"></a>
<a id="tocslifecyclestatedetails"></a>

```json
"string"
```

<h2 id="tocS_IsRoot">IsRoot</h2>
<!-- backwards compatibility -->
<a id="schemaisroot"></a>
<a id="schema_IsRoot"></a>
<a id="tocSisroot"></a>
<a id="tocsisroot"></a>

```json
true
```

<h2 id="tocS_InstalledComponentLifecycleStatusCodeList">InstalledComponentLifecycleStatusCodeList</h2>
<!-- backwards compatibility -->
<a id="schemainstalledcomponentlifecyclestatuscodelist"></a>
<a id="schema_InstalledComponentLifecycleStatusCodeList"></a>
<a id="tocSinstalledcomponentlifecyclestatuscodelist"></a>
<a id="tocsinstalledcomponentlifecyclestatuscodelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstalledComponent">InstalledComponent</h2>
<!-- backwards compatibility -->
<a id="schemainstalledcomponent"></a>
<a id="schema_InstalledComponent"></a>
<a id="tocSinstalledcomponent"></a>
<a id="tocsinstalledcomponent"></a>

```json
{
  "componentName": {},
  "componentVersion": {},
  "lifecycleState": {},
  "lifecycleStateDetails": {},
  "isRoot": {},
  "lastStatusChangeTimestamp": {},
  "lastReportedTimestamp": {},
  "lastInstallationSource": {},
  "lifecycleStatusCodes": {}
}
```

Contains information about a component on a Greengrass core device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentName|object|false|none|none|
|componentVersion|object|false|none|none|
|lifecycleState|object|false|none|none|
|lifecycleStateDetails|object|false|none|none|
|isRoot|object|false|none|none|
|lastStatusChangeTimestamp|object|false|none|none|
|lastReportedTimestamp|object|false|none|none|
|lastInstallationSource|object|false|none|none|
|lifecycleStatusCodes|object|false|none|none|

<h2 id="tocS_InstalledComponentLifecycleStatusCode">InstalledComponentLifecycleStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemainstalledcomponentlifecyclestatuscode"></a>
<a id="schema_InstalledComponentLifecycleStatusCode"></a>
<a id="tocSinstalledcomponentlifecyclestatuscode"></a>
<a id="tocsinstalledcomponentlifecyclestatuscode"></a>

```json
"string"
```

<h2 id="tocS_InstalledComponentList">InstalledComponentList</h2>
<!-- backwards compatibility -->
<a id="schemainstalledcomponentlist"></a>
<a id="schema_InstalledComponentList"></a>
<a id="tocSinstalledcomponentlist"></a>
<a id="tocsinstalledcomponentlist"></a>

```json
[
  {
    "componentName": {},
    "componentVersion": {},
    "lifecycleState": {},
    "lifecycleStateDetails": {},
    "isRoot": {},
    "lastStatusChangeTimestamp": {},
    "lastReportedTimestamp": {},
    "lastInstallationSource": {},
    "lifecycleStatusCodes": {}
  }
]
```

<h2 id="tocS_InstalledComponentTopologyFilter">InstalledComponentTopologyFilter</h2>
<!-- backwards compatibility -->
<a id="schemainstalledcomponenttopologyfilter"></a>
<a id="schema_InstalledComponentTopologyFilter"></a>
<a id="tocSinstalledcomponenttopologyfilter"></a>
<a id="tocsinstalledcomponenttopologyfilter"></a>

```json
"ALL"
```

<h2 id="tocS_IoTJobAbortAction">IoTJobAbortAction</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobabortaction"></a>
<a id="schema_IoTJobAbortAction"></a>
<a id="tocSiotjobabortaction"></a>
<a id="tocsiotjobabortaction"></a>

```json
"CANCEL"
```

<h2 id="tocS_IoTJobAbortCriteriaList">IoTJobAbortCriteriaList</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobabortcriterialist"></a>
<a id="schema_IoTJobAbortCriteriaList"></a>
<a id="tocSiotjobabortcriterialist"></a>
<a id="tocsiotjobabortcriterialist"></a>

```json
[
  {
    "failureType": {},
    "action": {},
    "thresholdPercentage": {},
    "minNumberOfExecutedThings": {}
  }
]
```

<h2 id="tocS_IoTJobExecutionFailureType">IoTJobExecutionFailureType</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobexecutionfailuretype"></a>
<a id="schema_IoTJobExecutionFailureType"></a>
<a id="tocSiotjobexecutionfailuretype"></a>
<a id="tocsiotjobexecutionfailuretype"></a>

```json
"FAILED"
```

<h2 id="tocS_IoTJobAbortThresholdPercentage">IoTJobAbortThresholdPercentage</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobabortthresholdpercentage"></a>
<a id="schema_IoTJobAbortThresholdPercentage"></a>
<a id="tocSiotjobabortthresholdpercentage"></a>
<a id="tocsiotjobabortthresholdpercentage"></a>

```json
0
```

<h2 id="tocS_IoTJobMinimumNumberOfExecutedThings">IoTJobMinimumNumberOfExecutedThings</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobminimumnumberofexecutedthings"></a>
<a id="schema_IoTJobMinimumNumberOfExecutedThings"></a>
<a id="tocSiotjobminimumnumberofexecutedthings"></a>
<a id="tocsiotjobminimumnumberofexecutedthings"></a>

```json
1
```

<h2 id="tocS_IoTJobAbortCriteria">IoTJobAbortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobabortcriteria"></a>
<a id="schema_IoTJobAbortCriteria"></a>
<a id="tocSiotjobabortcriteria"></a>
<a id="tocsiotjobabortcriteria"></a>

```json
{
  "failureType": {},
  "action": {},
  "thresholdPercentage": {},
  "minNumberOfExecutedThings": {}
}
```

<p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureType|object|true|none|none|
|action|object|true|none|none|
|thresholdPercentage|object|true|none|none|
|minNumberOfExecutedThings|object|true|none|none|

<h2 id="tocS_IoTJobExponentialRolloutRate">IoTJobExponentialRolloutRate</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobexponentialrolloutrate"></a>
<a id="schema_IoTJobExponentialRolloutRate"></a>
<a id="tocSiotjobexponentialrolloutrate"></a>
<a id="tocsiotjobexponentialrolloutrate"></a>

```json
{
  "baseRatePerMinute": {},
  "incrementFactor": {},
  "rateIncreaseCriteria": {
    "numberOfNotifiedThings": {},
    "numberOfSucceededThings": {}
  }
}
```

Contains information about an exponential rollout rate for a configuration deployment job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseRatePerMinute|object|true|none|none|
|incrementFactor|object|true|none|none|
|rateIncreaseCriteria|object|true|none|none|

<h2 id="tocS_IoTJobMaxExecutionsPerMin">IoTJobMaxExecutionsPerMin</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobmaxexecutionspermin"></a>
<a id="schema_IoTJobMaxExecutionsPerMin"></a>
<a id="tocSiotjobmaxexecutionspermin"></a>
<a id="tocsiotjobmaxexecutionspermin"></a>

```json
1
```

<h2 id="tocS_IoTJobRolloutBaseRatePerMinute">IoTJobRolloutBaseRatePerMinute</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobrolloutbaserateperminute"></a>
<a id="schema_IoTJobRolloutBaseRatePerMinute"></a>
<a id="tocSiotjobrolloutbaserateperminute"></a>
<a id="tocsiotjobrolloutbaserateperminute"></a>

```json
1
```

<h2 id="tocS_IoTJobRolloutIncrementFactor">IoTJobRolloutIncrementFactor</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobrolloutincrementfactor"></a>
<a id="schema_IoTJobRolloutIncrementFactor"></a>
<a id="tocSiotjobrolloutincrementfactor"></a>
<a id="tocsiotjobrolloutincrementfactor"></a>

```json
1
```

<h2 id="tocS_IoTJobRateIncreaseCriteria">IoTJobRateIncreaseCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobrateincreasecriteria"></a>
<a id="schema_IoTJobRateIncreaseCriteria"></a>
<a id="tocSiotjobrateincreasecriteria"></a>
<a id="tocsiotjobrateincreasecriteria"></a>

```json
{
  "numberOfNotifiedThings": {},
  "numberOfSucceededThings": {}
}
```

Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfNotifiedThings|object|false|none|none|
|numberOfSucceededThings|object|false|none|none|

<h2 id="tocS_IoTJobInProgressTimeoutInMinutes">IoTJobInProgressTimeoutInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobinprogresstimeoutinminutes"></a>
<a id="schema_IoTJobInProgressTimeoutInMinutes"></a>
<a id="tocSiotjobinprogresstimeoutinminutes"></a>
<a id="tocsiotjobinprogresstimeoutinminutes"></a>

```json
0
```

<h2 id="tocS_IoTJobNumberOfThings">IoTJobNumberOfThings</h2>
<!-- backwards compatibility -->
<a id="schemaiotjobnumberofthings"></a>
<a id="schema_IoTJobNumberOfThings"></a>
<a id="tocSiotjobnumberofthings"></a>
<a id="tocsiotjobnumberofthings"></a>

```json
1
```

<h2 id="tocS_OptionalBoolean">OptionalBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalboolean"></a>
<a id="schema_OptionalBoolean"></a>
<a id="tocSoptionalboolean"></a>
<a id="tocsoptionalboolean"></a>

```json
true
```

<h2 id="tocS_LambdaVolumeList">LambdaVolumeList</h2>
<!-- backwards compatibility -->
<a id="schemalambdavolumelist"></a>
<a id="schema_LambdaVolumeList"></a>
<a id="tocSlambdavolumelist"></a>
<a id="tocslambdavolumelist"></a>

```json
[
  {
    "sourcePath": {},
    "destinationPath": {},
    "permission": {},
    "addGroupOwner": {}
  }
]
```

<h2 id="tocS_LambdaDeviceList">LambdaDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemalambdadevicelist"></a>
<a id="schema_LambdaDeviceList"></a>
<a id="tocSlambdadevicelist"></a>
<a id="tocslambdadevicelist"></a>

```json
[
  {
    "path": {},
    "permission": {},
    "addGroupOwner": {}
  }
]
```

<h2 id="tocS_LambdaContainerParams">LambdaContainerParams</h2>
<!-- backwards compatibility -->
<a id="schemalambdacontainerparams"></a>
<a id="schema_LambdaContainerParams"></a>
<a id="tocSlambdacontainerparams"></a>
<a id="tocslambdacontainerparams"></a>

```json
{
  "memorySizeInKB": {},
  "mountROSysfs": {},
  "volumes": {},
  "devices": {}
}
```

Contains information about a container in which Lambda functions run on Greengrass core devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memorySizeInKB|object|false|none|none|
|mountROSysfs|object|false|none|none|
|volumes|object|false|none|none|
|devices|object|false|none|none|

<h2 id="tocS_LambdaDeviceMount">LambdaDeviceMount</h2>
<!-- backwards compatibility -->
<a id="schemalambdadevicemount"></a>
<a id="schema_LambdaDeviceMount"></a>
<a id="tocSlambdadevicemount"></a>
<a id="tocslambdadevicemount"></a>

```json
{
  "path": {},
  "permission": {},
  "addGroupOwner": {}
}
```

Contains information about a device that Linux processes in a container can access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|true|none|none|
|permission|object|false|none|none|
|addGroupOwner|object|false|none|none|

<h2 id="tocS_LambdaFilesystemPermission">LambdaFilesystemPermission</h2>
<!-- backwards compatibility -->
<a id="schemalambdafilesystempermission"></a>
<a id="schema_LambdaFilesystemPermission"></a>
<a id="tocSlambdafilesystempermission"></a>
<a id="tocslambdafilesystempermission"></a>

```json
"ro"
```

<h2 id="tocS_LambdaEnvironmentVariables">LambdaEnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemalambdaenvironmentvariables"></a>
<a id="schema_LambdaEnvironmentVariables"></a>
<a id="tocSlambdaenvironmentvariables"></a>
<a id="tocslambdaenvironmentvariables"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_TopicString">TopicString</h2>
<!-- backwards compatibility -->
<a id="schematopicstring"></a>
<a id="schema_TopicString"></a>
<a id="tocStopicstring"></a>
<a id="tocstopicstring"></a>

```json
"string"
```

<h2 id="tocS_LambdaEventSourceType">LambdaEventSourceType</h2>
<!-- backwards compatibility -->
<a id="schemalambdaeventsourcetype"></a>
<a id="schema_LambdaEventSourceType"></a>
<a id="tocSlambdaeventsourcetype"></a>
<a id="tocslambdaeventsourcetype"></a>

```json
"PUB_SUB"
```

<h2 id="tocS_LambdaEventSource">LambdaEventSource</h2>
<!-- backwards compatibility -->
<a id="schemalambdaeventsource"></a>
<a id="schema_LambdaEventSource"></a>
<a id="tocSlambdaeventsource"></a>
<a id="tocslambdaeventsource"></a>

```json
{
  "topic": {},
  "type": {}
}
```

Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_LambdaEventSourceList">LambdaEventSourceList</h2>
<!-- backwards compatibility -->
<a id="schemalambdaeventsourcelist"></a>
<a id="schema_LambdaEventSourceList"></a>
<a id="tocSlambdaeventsourcelist"></a>
<a id="tocslambdaeventsourcelist"></a>

```json
[
  {
    "topic": {},
    "type": {}
  }
]
```

<h2 id="tocS_LambdaExecArg">LambdaExecArg</h2>
<!-- backwards compatibility -->
<a id="schemalambdaexecarg"></a>
<a id="schema_LambdaExecArg"></a>
<a id="tocSlambdaexecarg"></a>
<a id="tocslambdaexecarg"></a>

```json
"string"
```

<h2 id="tocS_LambdaExecArgsList">LambdaExecArgsList</h2>
<!-- backwards compatibility -->
<a id="schemalambdaexecargslist"></a>
<a id="schema_LambdaExecArgsList"></a>
<a id="tocSlambdaexecargslist"></a>
<a id="tocslambdaexecargslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LambdaInputPayloadEncodingType">LambdaInputPayloadEncodingType</h2>
<!-- backwards compatibility -->
<a id="schemalambdainputpayloadencodingtype"></a>
<a id="schema_LambdaInputPayloadEncodingType"></a>
<a id="tocSlambdainputpayloadencodingtype"></a>
<a id="tocslambdainputpayloadencodingtype"></a>

```json
"json"
```

<h2 id="tocS_LambdaLinuxProcessParams">LambdaLinuxProcessParams</h2>
<!-- backwards compatibility -->
<a id="schemalambdalinuxprocessparams"></a>
<a id="schema_LambdaLinuxProcessParams"></a>
<a id="tocSlambdalinuxprocessparams"></a>
<a id="tocslambdalinuxprocessparams"></a>

```json
{
  "isolationMode": {},
  "containerParams": {
    "memorySizeInKB": {},
    "mountROSysfs": {},
    "volumes": {},
    "devices": {}
  }
}
```

Contains parameters for a Linux process that contains an Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isolationMode|object|false|none|none|
|containerParams|object|false|none|none|

<h2 id="tocS_LambdaIsolationMode">LambdaIsolationMode</h2>
<!-- backwards compatibility -->
<a id="schemalambdaisolationmode"></a>
<a id="schema_LambdaIsolationMode"></a>
<a id="tocSlambdaisolationmode"></a>
<a id="tocslambdaisolationmode"></a>

```json
"GreengrassContainer"
```

<h2 id="tocS_LambdaVolumeMount">LambdaVolumeMount</h2>
<!-- backwards compatibility -->
<a id="schemalambdavolumemount"></a>
<a id="schema_LambdaVolumeMount"></a>
<a id="tocSlambdavolumemount"></a>
<a id="tocslambdavolumemount"></a>

```json
{
  "sourcePath": {},
  "destinationPath": {},
  "permission": {},
  "addGroupOwner": {}
}
```

Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourcePath|object|true|none|none|
|destinationPath|object|true|none|none|
|permission|object|false|none|none|
|addGroupOwner|object|false|none|none|

<h2 id="tocS_NextTokenString">NextTokenString</h2>
<!-- backwards compatibility -->
<a id="schemanexttokenstring"></a>
<a id="schema_NextTokenString"></a>
<a id="tocSnexttokenstring"></a>
<a id="tocsnexttokenstring"></a>

```json
"string"
```

<h2 id="tocS_ListClientDevicesAssociatedWithCoreDeviceRequest">ListClientDevicesAssociatedWithCoreDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclientdevicesassociatedwithcoredevicerequest"></a>
<a id="schema_ListClientDevicesAssociatedWithCoreDeviceRequest"></a>
<a id="tocSlistclientdevicesassociatedwithcoredevicerequest"></a>
<a id="tocslistclientdevicesassociatedwithcoredevicerequest"></a>

```json
{}
```

<h2 id="tocS_ListComponentVersionsRequest">ListComponentVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentversionsrequest"></a>
<a id="schema_ListComponentVersionsRequest"></a>
<a id="tocSlistcomponentversionsrequest"></a>
<a id="tocslistcomponentversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListComponentsRequest">ListComponentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsrequest"></a>
<a id="schema_ListComponentsRequest"></a>
<a id="tocSlistcomponentsrequest"></a>
<a id="tocslistcomponentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListCoreDevicesRequest">ListCoreDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcoredevicesrequest"></a>
<a id="schema_ListCoreDevicesRequest"></a>
<a id="tocSlistcoredevicesrequest"></a>
<a id="tocslistcoredevicesrequest"></a>

```json
{}
```

<h2 id="tocS_ListDeploymentsRequest">ListDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentsrequest"></a>
<a id="schema_ListDeploymentsRequest"></a>
<a id="tocSlistdeploymentsrequest"></a>
<a id="tocslistdeploymentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListEffectiveDeploymentsRequest">ListEffectiveDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteffectivedeploymentsrequest"></a>
<a id="schema_ListEffectiveDeploymentsRequest"></a>
<a id="tocSlisteffectivedeploymentsrequest"></a>
<a id="tocslisteffectivedeploymentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListInstalledComponentsRequest">ListInstalledComponentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinstalledcomponentsrequest"></a>
<a id="schema_ListInstalledComponentsRequest"></a>
<a id="tocSlistinstalledcomponentsrequest"></a>
<a id="tocslistinstalledcomponentsrequest"></a>

```json
{}
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

<h2 id="tocS_Memory">Memory</h2>
<!-- backwards compatibility -->
<a id="schemamemory"></a>
<a id="schema_Memory"></a>
<a id="tocSmemory"></a>
<a id="tocsmemory"></a>

```json
0
```

<h2 id="tocS_ResolveComponentCandidatesRequest">ResolveComponentCandidatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresolvecomponentcandidatesrequest"></a>
<a id="schema_ResolveComponentCandidatesRequest"></a>
<a id="tocSresolvecomponentcandidatesrequest"></a>
<a id="tocsresolvecomponentcandidatesrequest"></a>

```json
{
  "platform": {
    "name": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    }
  },
  "componentCandidates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platform|object|false|none|none|
|componentCandidates|object|false|none|none|

<h2 id="tocS_ResolvedComponentVersionsList">ResolvedComponentVersionsList</h2>
<!-- backwards compatibility -->
<a id="schemaresolvedcomponentversionslist"></a>
<a id="schema_ResolvedComponentVersionsList"></a>
<a id="tocSresolvedcomponentversionslist"></a>
<a id="tocsresolvedcomponentversionslist"></a>

```json
[
  {
    "arn": {},
    "componentName": {},
    "componentVersion": {},
    "recipe": {},
    "vendorGuidance": {},
    "message": {}
  }
]
```

<h2 id="tocS_ResolvedComponentVersion">ResolvedComponentVersion</h2>
<!-- backwards compatibility -->
<a id="schemaresolvedcomponentversion"></a>
<a id="schema_ResolvedComponentVersion"></a>
<a id="tocSresolvedcomponentversion"></a>
<a id="tocsresolvedcomponentversion"></a>

```json
{
  "arn": {},
  "componentName": {},
  "componentVersion": {},
  "recipe": {},
  "vendorGuidance": {},
  "message": {}
}
```

Contains information about a component version that is compatible to run on a Greengrass core device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|componentName|object|false|none|none|
|componentVersion|object|false|none|none|
|recipe|object|false|none|none|
|vendorGuidance|object|false|none|none|
|message|object|false|none|none|

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

<h2 id="tocS_UpdateConnectivityInfoRequest">UpdateConnectivityInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectivityinforequest"></a>
<a id="schema_UpdateConnectivityInfoRequest"></a>
<a id="tocSupdateconnectivityinforequest"></a>
<a id="tocsupdateconnectivityinforequest"></a>

```json
{
  "connectivityInfo": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectivityInfo|object|true|none|none|
