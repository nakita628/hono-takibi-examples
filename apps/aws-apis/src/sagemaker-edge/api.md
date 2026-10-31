<h1 id="amazon-sagemaker-edge-manager">Amazon Sagemaker Edge Manager v2020-09-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

SageMaker Edge Manager dataplane service for communicating with active agents.

Base URLs:

* <a href="http://edge.sagemaker.us-east-1.amazonaws.com">http://edge.sagemaker.us-east-1.amazonaws.com</a> - The Amazon Sagemaker Edge Manager multi-region endpoint

* <a href="https://edge.sagemaker.us-east-1.amazonaws.com">https://edge.sagemaker.us-east-1.amazonaws.com</a> - The Amazon Sagemaker Edge Manager multi-region endpoint

* <a href="http://edge.sagemaker.cn-north-1.amazonaws.com.cn">http://edge.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon Sagemaker Edge Manager endpoint for China (Beijing) and China (Ningxia)

* <a href="https://edge.sagemaker.cn-north-1.amazonaws.com.cn">https://edge.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon Sagemaker Edge Manager endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sagemaker/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-sagemaker-edge-manager-default">Default</h1>

## GetDeployments

<a id="opIdGetDeployments"></a>

> Code samples

```bash
curl https://sagemaker-edge.us-east-1.amazonaws.com/GetDeployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceName": "string",
    "DeviceFleetName": "string"
  }'
```

`POST /GetDeployments`

Use to get the active deployments from a device.

> Body parameter

```json
{
  "DeviceName": "string",
  "DeviceFleetName": "string"
}
```

<h3 id="getdeployments-parameters">Parameters</h3>

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
|» DeviceName|body|string|true|The unique name of the device you want to get the configuration of active deployments from.|
|» DeviceFleetName|body|string|true|The name of the fleet that the device belongs to.|

> Example responses

> 200 Response

```json
{
  "Deployments": {}
}
```

> 480 Response

```json
null
```

<h3 id="getdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentsResult](#schemagetdeploymentsresult)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeviceRegistration

<a id="opIdGetDeviceRegistration"></a>

> Code samples

```bash
curl https://sagemaker-edge.us-east-1.amazonaws.com/GetDeviceRegistration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceName": "string",
    "DeviceFleetName": "string"
  }'
```

`POST /GetDeviceRegistration`

Use to check if a device is registered with SageMaker Edge Manager.

> Body parameter

```json
{
  "DeviceName": "string",
  "DeviceFleetName": "string"
}
```

<h3 id="getdeviceregistration-parameters">Parameters</h3>

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
|» DeviceName|body|string|true|The unique name of the device you want to get the registration status from.|
|» DeviceFleetName|body|string|true|The name of the fleet that the device belongs to.|

> Example responses

> 200 Response

```json
{
  "DeviceRegistration": {},
  "CacheTTL": {}
}
```

> 480 Response

```json
null
```

<h3 id="getdeviceregistration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceRegistrationResult](#schemagetdeviceregistrationresult)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendHeartbeat

<a id="opIdSendHeartbeat"></a>

> Code samples

```bash
curl https://sagemaker-edge.us-east-1.amazonaws.com/SendHeartbeat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AgentMetrics": [
      {
        "Dimension": {},
        "MetricName": {},
        "Value": {},
        "Timestamp": {}
      }
    ],
    "Models": [
      {
        "ModelName": {},
        "ModelVersion": {},
        "LatestSampleTime": {},
        "LatestInference": {},
        "ModelMetrics": {}
      }
    ],
    "AgentVersion": "string",
    "DeviceName": "string",
    "DeviceFleetName": "string",
    "DeploymentResult": {
      "DeploymentName": {},
      "DeploymentStatus": {},
      "DeploymentStatusMessage": {},
      "DeploymentStartTime": {},
      "DeploymentEndTime": {},
      "DeploymentModels": {}
    }
  }'
```

`POST /SendHeartbeat`

Use to get the current status of devices registered on SageMaker Edge Manager.

> Body parameter

```json
{
  "AgentMetrics": [
    {
      "Dimension": {},
      "MetricName": {},
      "Value": {},
      "Timestamp": {}
    }
  ],
  "Models": [
    {
      "ModelName": {},
      "ModelVersion": {},
      "LatestSampleTime": {},
      "LatestInference": {},
      "ModelMetrics": {}
    }
  ],
  "AgentVersion": "string",
  "DeviceName": "string",
  "DeviceFleetName": "string",
  "DeploymentResult": {
    "DeploymentName": {},
    "DeploymentStatus": {},
    "DeploymentStatusMessage": {},
    "DeploymentStartTime": {},
    "DeploymentEndTime": {},
    "DeploymentModels": {}
  }
}
```

<h3 id="sendheartbeat-parameters">Parameters</h3>

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
|» AgentMetrics|body|[[EdgeMetric](#schemaedgemetric)]|false|For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.|
|» Models|body|[[Model](#schemamodel)]|false|Returns a list of models deployed on the the device.|
|» AgentVersion|body|string|true|Returns the version of the agent.|
|» DeviceName|body|string|true|The unique name of the device.|
|» DeviceFleetName|body|string|true|The name of the fleet that the device belongs to.|
|» DeploymentResult|body|object|false|Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.|
|» » DeploymentName|body|object|false|none|
|» » DeploymentStatus|body|object|false|none|
|» » DeploymentStatusMessage|body|object|false|none|
|» » DeploymentStartTime|body|object|false|none|
|» » DeploymentEndTime|body|object|false|none|
|» » DeploymentModels|body|object|false|none|

> Example responses

> 480 Response

```json
null
```

<h3 id="sendheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetDeploymentsResult">GetDeploymentsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentsresult"></a>
<a id="schema_GetDeploymentsResult"></a>
<a id="tocSgetdeploymentsresult"></a>
<a id="tocsgetdeploymentsresult"></a>

```json
{
  "Deployments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Deployments|object|false|none|none|

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_GetDeviceRegistrationResult">GetDeviceRegistrationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceregistrationresult"></a>
<a id="schema_GetDeviceRegistrationResult"></a>
<a id="tocSgetdeviceregistrationresult"></a>
<a id="tocsgetdeviceregistrationresult"></a>

```json
{
  "DeviceRegistration": {},
  "CacheTTL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceRegistration|object|false|none|none|
|CacheTTL|object|false|none|none|

<h2 id="tocS_EdgeMetric">EdgeMetric</h2>
<!-- backwards compatibility -->
<a id="schemaedgemetric"></a>
<a id="schema_EdgeMetric"></a>
<a id="tocSedgemetric"></a>
<a id="tocsedgemetric"></a>

```json
{
  "Dimension": {},
  "MetricName": {},
  "Value": {},
  "Timestamp": {}
}
```

Information required for edge device metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimension|object|false|none|none|
|MetricName|object|false|none|none|
|Value|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "ModelName": {},
  "ModelVersion": {},
  "LatestSampleTime": {},
  "LatestInference": {},
  "ModelMetrics": {}
}
```

Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|false|none|none|
|ModelVersion|object|false|none|none|
|LatestSampleTime|object|false|none|none|
|LatestInference|object|false|none|none|
|ModelMetrics|object|false|none|none|

<h2 id="tocS_EntityName">EntityName</h2>
<!-- backwards compatibility -->
<a id="schemaentityname"></a>
<a id="schema_EntityName"></a>
<a id="tocSentityname"></a>
<a id="tocsentityname"></a>

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

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeploymentModels">DeploymentModels</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentmodels"></a>
<a id="schema_DeploymentModels"></a>
<a id="tocSdeploymentmodels"></a>
<a id="tocsdeploymentmodels"></a>

```json
[
  {
    "ModelHandle": {},
    "ModelName": {},
    "ModelVersion": {},
    "DesiredState": {},
    "State": {},
    "Status": {},
    "StatusReason": {},
    "RollbackFailureReason": {}
  }
]
```

<h2 id="tocS_CacheTTLSeconds">CacheTTLSeconds</h2>
<!-- backwards compatibility -->
<a id="schemacachettlseconds"></a>
<a id="schema_CacheTTLSeconds"></a>
<a id="tocScachettlseconds"></a>
<a id="tocscachettlseconds"></a>

```json
"string"
```

<h2 id="tocS_ChecksumType">ChecksumType</h2>
<!-- backwards compatibility -->
<a id="schemachecksumtype"></a>
<a id="schema_ChecksumType"></a>
<a id="tocSchecksumtype"></a>
<a id="tocschecksumtype"></a>

```json
"SHA1"
```

<h2 id="tocS_ChecksumString">ChecksumString</h2>
<!-- backwards compatibility -->
<a id="schemachecksumstring"></a>
<a id="schema_ChecksumString"></a>
<a id="tocSchecksumstring"></a>
<a id="tocschecksumstring"></a>

```json
"string"
```

<h2 id="tocS_Checksum">Checksum</h2>
<!-- backwards compatibility -->
<a id="schemachecksum"></a>
<a id="schema_Checksum"></a>
<a id="tocSchecksum"></a>
<a id="tocschecksum"></a>

```json
{
  "Type": {},
  "Sum": {}
}
```

Information about the checksum of a model deployed on a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Sum|object|false|none|none|

<h2 id="tocS_S3Uri">S3Uri</h2>
<!-- backwards compatibility -->
<a id="schemas3uri"></a>
<a id="schema_S3Uri"></a>
<a id="tocSs3uri"></a>
<a id="tocss3uri"></a>

```json
"string"
```

<h2 id="tocS_ModelState">ModelState</h2>
<!-- backwards compatibility -->
<a id="schemamodelstate"></a>
<a id="schema_ModelState"></a>
<a id="tocSmodelstate"></a>
<a id="tocsmodelstate"></a>

```json
"DEPLOY"
```

<h2 id="tocS_Definition">Definition</h2>
<!-- backwards compatibility -->
<a id="schemadefinition"></a>
<a id="schema_Definition"></a>
<a id="tocSdefinition"></a>
<a id="tocsdefinition"></a>

```json
{
  "ModelHandle": {},
  "S3Url": {},
  "Checksum": {
    "Type": {},
    "Sum": {}
  },
  "State": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelHandle|object|false|none|none|
|S3Url|object|false|none|none|
|Checksum|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_Definitions">Definitions</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions"></a>
<a id="schema_Definitions"></a>
<a id="tocSdefinitions"></a>
<a id="tocsdefinitions"></a>

```json
[
  {
    "ModelHandle": {},
    "S3Url": {},
    "Checksum": {
      "Type": {},
      "Sum": {}
    },
    "State": {}
  }
]
```

<h2 id="tocS_ModelName">ModelName</h2>
<!-- backwards compatibility -->
<a id="schemamodelname"></a>
<a id="schema_ModelName"></a>
<a id="tocSmodelname"></a>
<a id="tocsmodelname"></a>

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

<h2 id="tocS_DeploymentStatus">DeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatus"></a>
<a id="schema_DeploymentStatus"></a>
<a id="tocSdeploymentstatus"></a>
<a id="tocsdeploymentstatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_DeploymentModel">DeploymentModel</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentmodel"></a>
<a id="schema_DeploymentModel"></a>
<a id="tocSdeploymentmodel"></a>
<a id="tocsdeploymentmodel"></a>

```json
{
  "ModelHandle": {},
  "ModelName": {},
  "ModelVersion": {},
  "DesiredState": {},
  "State": {},
  "Status": {},
  "StatusReason": {},
  "RollbackFailureReason": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelHandle|object|false|none|none|
|ModelName|object|false|none|none|
|ModelVersion|object|false|none|none|
|DesiredState|object|false|none|none|
|State|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|RollbackFailureReason|object|false|none|none|

<h2 id="tocS_DeploymentResult">DeploymentResult</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentresult"></a>
<a id="schema_DeploymentResult"></a>
<a id="tocSdeploymentresult"></a>
<a id="tocsdeploymentresult"></a>

```json
{
  "DeploymentName": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "DeploymentStartTime": {},
  "DeploymentEndTime": {},
  "DeploymentModels": {}
}
```

Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentName|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|DeploymentStatusMessage|object|false|none|none|
|DeploymentStartTime|object|false|none|none|
|DeploymentEndTime|object|false|none|none|
|DeploymentModels|object|false|none|none|

<h2 id="tocS_DeploymentType">DeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttype"></a>
<a id="schema_DeploymentType"></a>
<a id="tocSdeploymenttype"></a>
<a id="tocsdeploymenttype"></a>

```json
"Model"
```

<h2 id="tocS_DeviceFleetName">DeviceFleetName</h2>
<!-- backwards compatibility -->
<a id="schemadevicefleetname"></a>
<a id="schema_DeviceFleetName"></a>
<a id="tocSdevicefleetname"></a>
<a id="tocsdevicefleetname"></a>

```json
"string"
```

<h2 id="tocS_DeviceName">DeviceName</h2>
<!-- backwards compatibility -->
<a id="schemadevicename"></a>
<a id="schema_DeviceName"></a>
<a id="tocSdevicename"></a>
<a id="tocsdevicename"></a>

```json
"string"
```

<h2 id="tocS_DeviceRegistration">DeviceRegistration</h2>
<!-- backwards compatibility -->
<a id="schemadeviceregistration"></a>
<a id="schema_DeviceRegistration"></a>
<a id="tocSdeviceregistration"></a>
<a id="tocsdeviceregistration"></a>

```json
"string"
```

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
"string"
```

<h2 id="tocS_FailureHandlingPolicy">FailureHandlingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemafailurehandlingpolicy"></a>
<a id="schema_FailureHandlingPolicy"></a>
<a id="tocSfailurehandlingpolicy"></a>
<a id="tocsfailurehandlingpolicy"></a>

```json
"ROLLBACK_ON_FAILURE"
```

<h2 id="tocS_EdgeDeployment">EdgeDeployment</h2>
<!-- backwards compatibility -->
<a id="schemaedgedeployment"></a>
<a id="schema_EdgeDeployment"></a>
<a id="tocSedgedeployment"></a>
<a id="tocsedgedeployment"></a>

```json
{
  "DeploymentName": {},
  "Type": {},
  "FailureHandlingPolicy": {},
  "Definitions": {}
}
```

Information about a deployment on an edge device that is registered with SageMaker Edge Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentName|object|false|none|none|
|Type|object|false|none|none|
|FailureHandlingPolicy|object|false|none|none|
|Definitions|object|false|none|none|

<h2 id="tocS_EdgeDeployments">EdgeDeployments</h2>
<!-- backwards compatibility -->
<a id="schemaedgedeployments"></a>
<a id="schema_EdgeDeployments"></a>
<a id="tocSedgedeployments"></a>
<a id="tocsedgedeployments"></a>

```json
[
  {
    "DeploymentName": {},
    "Type": {},
    "FailureHandlingPolicy": {},
    "Definitions": {}
  }
]
```

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
"string"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
0
```

<h2 id="tocS_EdgeMetrics">EdgeMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaedgemetrics"></a>
<a id="schema_EdgeMetrics"></a>
<a id="tocSedgemetrics"></a>
<a id="tocsedgemetrics"></a>

```json
[
  {
    "Dimension": {},
    "MetricName": {},
    "Value": {},
    "Timestamp": {}
  }
]
```

<h2 id="tocS_GetDeploymentsRequest">GetDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentsrequest"></a>
<a id="schema_GetDeploymentsRequest"></a>
<a id="tocSgetdeploymentsrequest"></a>
<a id="tocsgetdeploymentsrequest"></a>

```json
{
  "DeviceName": {},
  "DeviceFleetName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceName|object|true|none|none|
|DeviceFleetName|object|true|none|none|

<h2 id="tocS_GetDeviceRegistrationRequest">GetDeviceRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceregistrationrequest"></a>
<a id="schema_GetDeviceRegistrationRequest"></a>
<a id="tocSgetdeviceregistrationrequest"></a>
<a id="tocsgetdeviceregistrationrequest"></a>

```json
{
  "DeviceName": {},
  "DeviceFleetName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceName|object|true|none|none|
|DeviceFleetName|object|true|none|none|

<h2 id="tocS_Models">Models</h2>
<!-- backwards compatibility -->
<a id="schemamodels"></a>
<a id="schema_Models"></a>
<a id="tocSmodels"></a>
<a id="tocsmodels"></a>

```json
[
  {
    "ModelName": {},
    "ModelVersion": {},
    "LatestSampleTime": {},
    "LatestInference": {},
    "ModelMetrics": {}
  }
]
```

<h2 id="tocS_SendHeartbeatRequest">SendHeartbeatRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendheartbeatrequest"></a>
<a id="schema_SendHeartbeatRequest"></a>
<a id="tocSsendheartbeatrequest"></a>
<a id="tocssendheartbeatrequest"></a>

```json
{
  "AgentMetrics": {},
  "Models": {},
  "AgentVersion": {},
  "DeviceName": {},
  "DeviceFleetName": {},
  "DeploymentResult": {
    "DeploymentName": {},
    "DeploymentStatus": {},
    "DeploymentStatusMessage": {},
    "DeploymentStartTime": {},
    "DeploymentEndTime": {},
    "DeploymentModels": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentMetrics|object|false|none|none|
|Models|object|false|none|none|
|AgentVersion|object|true|none|none|
|DeviceName|object|true|none|none|
|DeviceFleetName|object|true|none|none|
|DeploymentResult|object|false|none|none|
