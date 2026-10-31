<h1 id="amazon-appstream">Amazon AppStream v2016-12-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon AppStream 2.0</fullname> <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p> <note> <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p> </note> <p>To learn more about AppStream 2.0, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a> </p> </li> </ul>

Base URLs:

* <a href="http://appstream2.us-east-1.amazonaws.com">http://appstream2.us-east-1.amazonaws.com</a> - The Amazon AppStream multi-region endpoint

* <a href="https://appstream2.us-east-1.amazonaws.com">https://appstream2.us-east-1.amazonaws.com</a> - The Amazon AppStream multi-region endpoint

* <a href="http://appstream2.cn-north-1.amazonaws.com.cn">http://appstream2.cn-north-1.amazonaws.com.cn</a> - The Amazon AppStream endpoint for China (Beijing) and China (Ningxia)

* <a href="https://appstream2.cn-north-1.amazonaws.com.cn">https://appstream2.cn-north-1.amazonaws.com.cn</a> - The Amazon AppStream endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/appstream2/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-appstream-default">Default</h1>

## AssociateApplicationFleet

<a id="opIdAssociateApplicationFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.AssociateApplicationFleet' \
  -d '{
    "FleetName": {},
    "ApplicationArn": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet`

Associates the specified application with the specified fleet. This is only supported for Elastic fleets.

> Body parameter

```json
{
  "FleetName": {},
  "ApplicationArn": {}
}
```

<h3 id="associateapplicationfleet-parameters">Parameters</h3>

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
|body|body|[AssociateApplicationFleetRequest](#schemaassociateapplicationfleetrequest)|true|none|
|» FleetName|body|object|true|none|
|» ApplicationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.AssociateApplicationFleet|

> Example responses

> 200 Response

```json
{
  "ApplicationFleetAssociation": {
    "FleetName": {},
    "ApplicationArn": {}
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

<h3 id="associateapplicationfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateApplicationFleetResult](#schemaassociateapplicationfleetresult)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateApplicationToEntitlement

<a id="opIdAssociateApplicationToEntitlement"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.AssociateApplicationToEntitlement' \
  -d '{
    "StackName": {},
    "EntitlementName": {},
    "ApplicationIdentifier": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement`

Associates an application to entitle.

> Body parameter

```json
{
  "StackName": {},
  "EntitlementName": {},
  "ApplicationIdentifier": {}
}
```

<h3 id="associateapplicationtoentitlement-parameters">Parameters</h3>

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
|body|body|[AssociateApplicationToEntitlementRequest](#schemaassociateapplicationtoentitlementrequest)|true|none|
|» StackName|body|object|true|none|
|» EntitlementName|body|object|true|none|
|» ApplicationIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.AssociateApplicationToEntitlement|

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

<h3 id="associateapplicationtoentitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateApplicationToEntitlementResult](#schemaassociateapplicationtoentitlementresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|EntitlementNotFoundException|[EntitlementNotFoundException](#schemaentitlementnotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateFleet

<a id="opIdAssociateFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.AssociateFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.AssociateFleet' \
  -d '{
    "FleetName": {},
    "StackName": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.AssociateFleet`

Associates the specified fleet with the specified stack.

> Body parameter

```json
{
  "FleetName": {},
  "StackName": {}
}
```

<h3 id="associatefleet-parameters">Parameters</h3>

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
|body|body|[AssociateFleetRequest](#schemaassociatefleetrequest)|true|none|
|» FleetName|body|object|true|none|
|» StackName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.AssociateFleet|

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

<h3 id="associatefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateFleetResult](#schemaassociatefleetresult)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|
|485|485|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateUserStack

<a id="opIdBatchAssociateUserStack"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.BatchAssociateUserStack' \
  -d '{
    "UserStackAssociations": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack`

Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.

> Body parameter

```json
{
  "UserStackAssociations": {}
}
```

<h3 id="batchassociateuserstack-parameters">Parameters</h3>

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
|body|body|[BatchAssociateUserStackRequest](#schemabatchassociateuserstackrequest)|true|none|
|» UserStackAssociations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.BatchAssociateUserStack|

> Example responses

> 200 Response

```json
{
  "errors": {}
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

<h3 id="batchassociateuserstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateUserStackResult](#schemabatchassociateuserstackresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateUserStack

<a id="opIdBatchDisassociateUserStack"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.BatchDisassociateUserStack' \
  -d '{
    "UserStackAssociations": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack`

Disassociates the specified users from the specified stacks.

> Body parameter

```json
{
  "UserStackAssociations": {}
}
```

<h3 id="batchdisassociateuserstack-parameters">Parameters</h3>

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
|body|body|[BatchDisassociateUserStackRequest](#schemabatchdisassociateuserstackrequest)|true|none|
|» UserStackAssociations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.BatchDisassociateUserStack|

> Example responses

> 200 Response

```json
{
  "errors": {}
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

<h3 id="batchdisassociateuserstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateUserStackResult](#schemabatchdisassociateuserstackresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopyImage

<a id="opIdCopyImage"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CopyImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CopyImage' \
  -d '{
    "SourceImageName": {},
    "DestinationImageName": {},
    "DestinationRegion": {},
    "DestinationImageDescription": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CopyImage`

Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.

> Body parameter

```json
{
  "SourceImageName": {},
  "DestinationImageName": {},
  "DestinationRegion": {},
  "DestinationImageDescription": {}
}
```

<h3 id="copyimage-parameters">Parameters</h3>

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
|body|body|[CopyImageRequest](#schemacopyimagerequest)|true|none|
|» SourceImageName|body|object|true|none|
|» DestinationImageName|body|object|true|none|
|» DestinationRegion|body|object|true|none|
|» DestinationImageDescription|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CopyImage|

> Example responses

> 200 Response

```json
{
  "DestinationImageName": {}
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

<h3 id="copyimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyImageResponse](#schemacopyimageresponse)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|485|485|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAppBlock

<a id="opIdCreateAppBlock"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateAppBlock' \
  -d '{
    "Name": {},
    "Description": {},
    "DisplayName": {},
    "SourceS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "SetupScriptDetails": {
      "ScriptS3Location": {
        "S3Bucket": {},
        "S3Key": {}
      },
      "ExecutablePath": {},
      "ExecutableParameters": {},
      "TimeoutInSeconds": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock`

<p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "DisplayName": {},
  "SourceS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "SetupScriptDetails": {
    "ScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "ExecutablePath": {},
    "ExecutableParameters": {},
    "TimeoutInSeconds": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createappblock-parameters">Parameters</h3>

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
|body|body|[CreateAppBlockRequest](#schemacreateappblockrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» DisplayName|body|object|false|none|
|» SourceS3Location|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|true|none|
|» SetupScriptDetails|body|object|true|none|
|» » ScriptS3Location|body|object|true|none|
|» » » S3Bucket|body|object|true|none|
|» » » S3Key|body|object|true|none|
|» » ExecutablePath|body|object|true|none|
|» » ExecutableParameters|body|object|false|none|
|» » TimeoutInSeconds|body|object|true|none|
|» Tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateAppBlock|

> Example responses

> 200 Response

```json
{
  "AppBlock": {
    "Name": {},
    "Arn": {},
    "Description": {},
    "DisplayName": {},
    "SourceS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "SetupScriptDetails": {
      "ScriptS3Location": {
        "S3Bucket": {},
        "S3Key": {}
      },
      "ExecutablePath": {},
      "ExecutableParameters": {},
      "TimeoutInSeconds": {}
    },
    "CreatedTime": {}
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

<h3 id="createappblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAppBlockResult](#schemacreateappblockresult)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateApplication' \
  -d '{
    "Name": {},
    "DisplayName": {},
    "Description": {},
    "IconS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LaunchPath": {},
    "WorkingDirectory": {},
    "LaunchParameters": {},
    "Platforms": {},
    "InstanceFamilies": {},
    "AppBlockArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateApplication`

<p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>

> Body parameter

```json
{
  "Name": {},
  "DisplayName": {},
  "Description": {},
  "IconS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "LaunchPath": {},
  "WorkingDirectory": {},
  "LaunchParameters": {},
  "Platforms": {},
  "InstanceFamilies": {},
  "AppBlockArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|body|body|[CreateApplicationRequest](#schemacreateapplicationrequest)|true|none|
|» Name|body|object|true|none|
|» DisplayName|body|object|false|none|
|» Description|body|object|false|none|
|» IconS3Location|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|true|none|
|» LaunchPath|body|object|true|none|
|» WorkingDirectory|body|object|false|none|
|» LaunchParameters|body|object|false|none|
|» Platforms|body|object|true|none|
|» InstanceFamilies|body|object|true|none|
|» AppBlockArn|body|object|true|none|
|» Tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateApplication|

> Example responses

> 200 Response

```json
{
  "Application": {
    "Name": {},
    "DisplayName": {},
    "IconURL": {},
    "LaunchPath": {},
    "LaunchParameters": {},
    "Enabled": {},
    "Metadata": {
      "property1": "string",
      "property2": "string"
    },
    "WorkingDirectory": {},
    "Description": {},
    "Arn": {},
    "AppBlockArn": {},
    "IconS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "Platforms": {},
    "InstanceFamilies": {},
    "CreatedTime": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationResult](#schemacreateapplicationresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDirectoryConfig

<a id="opIdCreateDirectoryConfig"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateDirectoryConfig' \
  -d '{
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedNames": {},
    "ServiceAccountCredentials": {
      "AccountName": {},
      "AccountPassword": {}
    },
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig`

Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

> Body parameter

```json
{
  "DirectoryName": {},
  "OrganizationalUnitDistinguishedNames": {},
  "ServiceAccountCredentials": {
    "AccountName": {},
    "AccountPassword": {}
  },
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  }
}
```

<h3 id="createdirectoryconfig-parameters">Parameters</h3>

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
|body|body|[CreateDirectoryConfigRequest](#schemacreatedirectoryconfigrequest)|true|none|
|» DirectoryName|body|object|true|none|
|» OrganizationalUnitDistinguishedNames|body|object|true|none|
|» ServiceAccountCredentials|body|object|false|none|
|» » AccountName|body|object|true|none|
|» » AccountPassword|body|object|true|none|
|» CertificateBasedAuthProperties|body|object|false|none|
|» » Status|body|object|false|none|
|» » CertificateAuthorityArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateDirectoryConfig|

> Example responses

> 200 Response

```json
{
  "DirectoryConfig": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedNames": {},
    "ServiceAccountCredentials": {
      "AccountName": {},
      "AccountPassword": {}
    },
    "CreatedTime": {},
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
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

> 485 Response

```json
null
```

<h3 id="createdirectoryconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDirectoryConfigResult](#schemacreatedirectoryconfigresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEntitlement

<a id="opIdCreateEntitlement"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateEntitlement' \
  -d '{
    "Name": {},
    "StackName": {},
    "Description": {},
    "AppVisibility": {},
    "Attributes": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement`

Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.

> Body parameter

```json
{
  "Name": {},
  "StackName": {},
  "Description": {},
  "AppVisibility": {},
  "Attributes": {}
}
```

<h3 id="createentitlement-parameters">Parameters</h3>

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
|body|body|[CreateEntitlementRequest](#schemacreateentitlementrequest)|true|none|
|» Name|body|object|true|none|
|» StackName|body|object|true|none|
|» Description|body|object|false|none|
|» AppVisibility|body|object|true|none|
|» Attributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateEntitlement|

> Example responses

> 200 Response

```json
{
  "Entitlement": {
    "Name": {},
    "StackName": {},
    "Description": {},
    "AppVisibility": {},
    "Attributes": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
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

<h3 id="createentitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEntitlementResult](#schemacreateentitlementresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|EntitlementAlreadyExistsException|[EntitlementAlreadyExistsException](#schemaentitlementalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFleet

<a id="opIdCreateFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateFleet' \
  -d '{
    "Name": {},
    "ImageName": {},
    "ImageArn": {},
    "InstanceType": {},
    "FleetType": {},
    "ComputeCapacity": {
      "DesiredInstances": {}
    },
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "MaxUserDurationInSeconds": {},
    "DisconnectTimeoutInSeconds": {},
    "Description": {},
    "DisplayName": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "IdleDisconnectTimeoutInSeconds": {},
    "IamRoleArn": {},
    "StreamView": {},
    "Platform": {},
    "MaxConcurrentSessions": {},
    "UsbDeviceFilterStrings": {},
    "SessionScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateFleet`

Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.

> Body parameter

```json
{
  "Name": {},
  "ImageName": {},
  "ImageArn": {},
  "InstanceType": {},
  "FleetType": {},
  "ComputeCapacity": {
    "DesiredInstances": {}
  },
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "MaxUserDurationInSeconds": {},
  "DisconnectTimeoutInSeconds": {},
  "Description": {},
  "DisplayName": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "IdleDisconnectTimeoutInSeconds": {},
  "IamRoleArn": {},
  "StreamView": {},
  "Platform": {},
  "MaxConcurrentSessions": {},
  "UsbDeviceFilterStrings": {},
  "SessionScriptS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  }
}
```

<h3 id="createfleet-parameters">Parameters</h3>

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
|body|body|[CreateFleetRequest](#schemacreatefleetrequest)|true|none|
|» Name|body|object|true|none|
|» ImageName|body|object|false|none|
|» ImageArn|body|object|false|none|
|» InstanceType|body|object|true|none|
|» FleetType|body|object|false|none|
|» ComputeCapacity|body|object|false|none|
|» » DesiredInstances|body|object|true|none|
|» VpcConfig|body|object|false|none|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» MaxUserDurationInSeconds|body|object|false|none|
|» DisconnectTimeoutInSeconds|body|object|false|none|
|» Description|body|object|false|none|
|» DisplayName|body|object|false|none|
|» EnableDefaultInternetAccess|body|object|false|none|
|» DomainJoinInfo|body|object|false|none|
|» » DirectoryName|body|object|false|none|
|» » OrganizationalUnitDistinguishedName|body|object|false|none|
|» Tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» IdleDisconnectTimeoutInSeconds|body|object|false|none|
|» IamRoleArn|body|object|false|none|
|» StreamView|body|object|false|none|
|» Platform|body|object|false|none|
|» MaxConcurrentSessions|body|object|false|none|
|» UsbDeviceFilterStrings|body|object|false|none|
|» SessionScriptS3Location|body|object|false|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateFleet|

> Example responses

> 200 Response

```json
{
  "Fleet": {
    "Arn": {},
    "Name": {},
    "DisplayName": {},
    "Description": {},
    "ImageName": {},
    "ImageArn": {},
    "InstanceType": {},
    "FleetType": {},
    "ComputeCapacityStatus": {
      "Desired": {},
      "Running": {},
      "InUse": {},
      "Available": {}
    },
    "MaxUserDurationInSeconds": {},
    "DisconnectTimeoutInSeconds": {},
    "State": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "CreatedTime": {},
    "FleetErrors": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "IdleDisconnectTimeoutInSeconds": {},
    "IamRoleArn": {},
    "StreamView": {},
    "Platform": {},
    "MaxConcurrentSessions": {},
    "UsbDeviceFilterStrings": {},
    "SessionScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
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

<h3 id="createfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFleetResult](#schemacreatefleetresult)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|RequestLimitExceededException|[RequestLimitExceededException](#schemarequestlimitexceededexception)|
|485|485|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|486|486|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|487|487|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|489|489|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateImageBuilder

<a id="opIdCreateImageBuilder"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateImageBuilder' \
  -d '{
    "Name": {},
    "ImageName": {},
    "ImageArn": {},
    "InstanceType": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "IamRoleArn": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "AppstreamAgentVersion": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "AccessEndpoints": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder`

<p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>

> Body parameter

```json
{
  "Name": {},
  "ImageName": {},
  "ImageArn": {},
  "InstanceType": {},
  "Description": {},
  "DisplayName": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "IamRoleArn": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "AppstreamAgentVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AccessEndpoints": {}
}
```

<h3 id="createimagebuilder-parameters">Parameters</h3>

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
|body|body|[CreateImageBuilderRequest](#schemacreateimagebuilderrequest)|true|none|
|» Name|body|object|true|none|
|» ImageName|body|object|false|none|
|» ImageArn|body|object|false|none|
|» InstanceType|body|object|true|none|
|» Description|body|object|false|none|
|» DisplayName|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» IamRoleArn|body|object|false|none|
|» EnableDefaultInternetAccess|body|object|false|none|
|» DomainJoinInfo|body|object|false|none|
|» » DirectoryName|body|object|false|none|
|» » OrganizationalUnitDistinguishedName|body|object|false|none|
|» AppstreamAgentVersion|body|object|false|none|
|» Tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» AccessEndpoints|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateImageBuilder|

> Example responses

> 200 Response

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
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

<h3 id="createimagebuilder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateImageBuilderResult](#schemacreateimagebuilderresult)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|RequestLimitExceededException|[RequestLimitExceededException](#schemarequestlimitexceededexception)|
|482|482|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|484|484|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|487|487|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|489|489|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateImageBuilderStreamingURL

<a id="opIdCreateImageBuilderStreamingURL"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateImageBuilderStreamingURL' \
  -d '{
    "Name": {},
    "Validity": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL`

Creates a URL to start an image builder streaming session.

> Body parameter

```json
{
  "Name": {},
  "Validity": {}
}
```

<h3 id="createimagebuilderstreamingurl-parameters">Parameters</h3>

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
|body|body|[CreateImageBuilderStreamingURLRequest](#schemacreateimagebuilderstreamingurlrequest)|true|none|
|» Name|body|object|true|none|
|» Validity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateImageBuilderStreamingURL|

> Example responses

> 200 Response

```json
{
  "StreamingURL": {},
  "Expires": {}
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

<h3 id="createimagebuilderstreamingurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateImageBuilderStreamingURLResult](#schemacreateimagebuilderstreamingurlresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStack

<a id="opIdCreateStack"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateStack' \
  -d '{
    "Name": {},
    "Description": {},
    "DisplayName": {},
    "StorageConnectors": {},
    "RedirectURL": {},
    "FeedbackURL": {},
    "UserSettings": {},
    "ApplicationSettings": {
      "Enabled": {},
      "SettingsGroup": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "AccessEndpoints": {},
    "EmbedHostDomains": {},
    "StreamingExperienceSettings": {
      "PreferredProtocol": {}
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateStack`

Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "DisplayName": {},
  "StorageConnectors": {},
  "RedirectURL": {},
  "FeedbackURL": {},
  "UserSettings": {},
  "ApplicationSettings": {
    "Enabled": {},
    "SettingsGroup": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AccessEndpoints": {},
  "EmbedHostDomains": {},
  "StreamingExperienceSettings": {
    "PreferredProtocol": {}
  }
}
```

<h3 id="createstack-parameters">Parameters</h3>

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
|body|body|[CreateStackRequest](#schemacreatestackrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» DisplayName|body|object|false|none|
|» StorageConnectors|body|object|false|none|
|» RedirectURL|body|object|false|none|
|» FeedbackURL|body|object|false|none|
|» UserSettings|body|object|false|none|
|» ApplicationSettings|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » SettingsGroup|body|object|false|none|
|» Tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» AccessEndpoints|body|object|false|none|
|» EmbedHostDomains|body|object|false|none|
|» StreamingExperienceSettings|body|object|false|none|
|» » PreferredProtocol|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateStack|

> Example responses

> 200 Response

```json
{
  "Stack": {
    "Arn": {},
    "Name": {},
    "Description": {},
    "DisplayName": {},
    "CreatedTime": {},
    "StorageConnectors": {},
    "RedirectURL": {},
    "FeedbackURL": {},
    "StackErrors": {},
    "UserSettings": {},
    "ApplicationSettings": {
      "Enabled": {},
      "SettingsGroup": {},
      "S3BucketName": {}
    },
    "AccessEndpoints": {},
    "EmbedHostDomains": {},
    "StreamingExperienceSettings": {
      "PreferredProtocol": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackResult](#schemacreatestackresult)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStreamingURL

<a id="opIdCreateStreamingURL"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateStreamingURL' \
  -d '{
    "StackName": {},
    "FleetName": {},
    "UserId": {},
    "ApplicationId": {},
    "Validity": {},
    "SessionContext": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL`

Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 

> Body parameter

```json
{
  "StackName": {},
  "FleetName": {},
  "UserId": {},
  "ApplicationId": {},
  "Validity": {},
  "SessionContext": {}
}
```

<h3 id="createstreamingurl-parameters">Parameters</h3>

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
|body|body|[CreateStreamingURLRequest](#schemacreatestreamingurlrequest)|true|none|
|» StackName|body|object|true|none|
|» FleetName|body|object|true|none|
|» UserId|body|object|true|none|
|» ApplicationId|body|object|false|none|
|» Validity|body|object|false|none|
|» SessionContext|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateStreamingURL|

> Example responses

> 200 Response

```json
{
  "StreamingURL": {},
  "Expires": {}
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

<h3 id="createstreamingurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStreamingURLResult](#schemacreatestreamingurlresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUpdatedImage

<a id="opIdCreateUpdatedImage"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateUpdatedImage' \
  -d '{
    "existingImageName": {},
    "newImageName": {},
    "newImageDescription": {},
    "newImageDisplayName": {},
    "newImageTags": {
      "property1": "string",
      "property2": "string"
    },
    "dryRun": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage`

<p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

> Body parameter

```json
{
  "existingImageName": {},
  "newImageName": {},
  "newImageDescription": {},
  "newImageDisplayName": {},
  "newImageTags": {
    "property1": "string",
    "property2": "string"
  },
  "dryRun": {}
}
```

<h3 id="createupdatedimage-parameters">Parameters</h3>

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
|body|body|[CreateUpdatedImageRequest](#schemacreateupdatedimagerequest)|true|none|
|» existingImageName|body|object|true|none|
|» newImageName|body|object|true|none|
|» newImageDescription|body|object|false|none|
|» newImageDisplayName|body|object|false|none|
|» newImageTags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» dryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateUpdatedImage|

> Example responses

> 200 Response

```json
{
  "image": {
    "Name": {},
    "Arn": {},
    "BaseImageArn": {},
    "DisplayName": {},
    "State": {},
    "Visibility": {},
    "ImageBuilderSupported": {},
    "ImageBuilderName": {},
    "Platform": {},
    "Description": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Applications": {},
    "CreatedTime": {},
    "PublicBaseImageReleasedDate": {},
    "AppstreamAgentVersion": {},
    "ImagePermissions": {
      "allowFleet": {},
      "allowImageBuilder": {}
    },
    "ImageErrors": {}
  },
  "canUpdateImage": {}
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

<h3 id="createupdatedimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUpdatedImageResult](#schemacreateupdatedimageresult)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|486|486|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUsageReportSubscription

<a id="opIdCreateUsageReportSubscription"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateUsageReportSubscription' \
  -d '{}'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription`

Creates a usage report subscription. Usage reports are generated daily.

> Body parameter

```json
{}
```

<h3 id="createusagereportsubscription-parameters">Parameters</h3>

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
|body|body|[CreateUsageReportSubscriptionRequest](#schemacreateusagereportsubscriptionrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateUsageReportSubscription|

> Example responses

> 200 Response

```json
{
  "S3BucketName": {},
  "Schedule": {}
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

<h3 id="createusagereportsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUsageReportSubscriptionResult](#schemacreateusagereportsubscriptionresult)|
|480|480|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.CreateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.CreateUser' \
  -d '{
    "UserName": {},
    "MessageAction": {},
    "FirstName": {},
    "LastName": {},
    "AuthenticationType": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.CreateUser`

Creates a new user in the user pool.

> Body parameter

```json
{
  "UserName": {},
  "MessageAction": {},
  "FirstName": {},
  "LastName": {},
  "AuthenticationType": {}
}
```

<h3 id="createuser-parameters">Parameters</h3>

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
|body|body|[CreateUserRequest](#schemacreateuserrequest)|true|none|
|» UserName|body|object|true|none|
|» MessageAction|body|object|false|none|
|» FirstName|body|object|false|none|
|» LastName|body|object|false|none|
|» AuthenticationType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.CreateUser|

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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserResult](#schemacreateuserresult)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppBlock

<a id="opIdDeleteAppBlock"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteAppBlock' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock`

Deletes an app block.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteappblock-parameters">Parameters</h3>

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
|body|body|[DeleteAppBlockRequest](#schemadeleteappblockrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteAppBlock|

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

<h3 id="deleteappblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAppBlockResult](#schemadeleteappblockresult)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteApplication' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteApplication`

Deletes an application.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteapplication-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationRequest](#schemadeleteapplicationrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteApplication|

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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationResult](#schemadeleteapplicationresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDirectoryConfig

<a id="opIdDeleteDirectoryConfig"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteDirectoryConfig' \
  -d '{
    "DirectoryName": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig`

Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.

> Body parameter

```json
{
  "DirectoryName": {}
}
```

<h3 id="deletedirectoryconfig-parameters">Parameters</h3>

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
|body|body|[DeleteDirectoryConfigRequest](#schemadeletedirectoryconfigrequest)|true|none|
|» DirectoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteDirectoryConfig|

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

<h3 id="deletedirectoryconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDirectoryConfigResult](#schemadeletedirectoryconfigresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEntitlement

<a id="opIdDeleteEntitlement"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteEntitlement' \
  -d '{
    "Name": {},
    "StackName": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement`

Deletes the specified entitlement.

> Body parameter

```json
{
  "Name": {},
  "StackName": {}
}
```

<h3 id="deleteentitlement-parameters">Parameters</h3>

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
|body|body|[DeleteEntitlementRequest](#schemadeleteentitlementrequest)|true|none|
|» Name|body|object|true|none|
|» StackName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteEntitlement|

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

<h3 id="deleteentitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEntitlementResult](#schemadeleteentitlementresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|EntitlementNotFoundException|[EntitlementNotFoundException](#schemaentitlementnotfoundexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFleet

<a id="opIdDeleteFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteFleet' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteFleet`

Deletes the specified fleet.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletefleet-parameters">Parameters</h3>

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
|body|body|[DeleteFleetRequest](#schemadeletefleetrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteFleet|

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

<h3 id="deletefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFleetResult](#schemadeletefleetresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImage

<a id="opIdDeleteImage"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteImage' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteImage`

Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteimage-parameters">Parameters</h3>

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
|body|body|[DeleteImageRequest](#schemadeleteimagerequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteImage|

> Example responses

> 200 Response

```json
{
  "Image": {
    "Name": {},
    "Arn": {},
    "BaseImageArn": {},
    "DisplayName": {},
    "State": {},
    "Visibility": {},
    "ImageBuilderSupported": {},
    "ImageBuilderName": {},
    "Platform": {},
    "Description": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Applications": {},
    "CreatedTime": {},
    "PublicBaseImageReleasedDate": {},
    "AppstreamAgentVersion": {},
    "ImagePermissions": {
      "allowFleet": {},
      "allowImageBuilder": {}
    },
    "ImageErrors": {}
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

<h3 id="deleteimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteImageResult](#schemadeleteimageresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImageBuilder

<a id="opIdDeleteImageBuilder"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteImageBuilder' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder`

Deletes the specified image builder and releases the capacity.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteimagebuilder-parameters">Parameters</h3>

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
|body|body|[DeleteImageBuilderRequest](#schemadeleteimagebuilderrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteImageBuilder|

> Example responses

> 200 Response

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
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

<h3 id="deleteimagebuilder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteImageBuilderResult](#schemadeleteimagebuilderresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImagePermissions

<a id="opIdDeleteImagePermissions"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteImagePermissions' \
  -d '{
    "Name": {},
    "SharedAccountId": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions`

Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.

> Body parameter

```json
{
  "Name": {},
  "SharedAccountId": {}
}
```

<h3 id="deleteimagepermissions-parameters">Parameters</h3>

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
|body|body|[DeleteImagePermissionsRequest](#schemadeleteimagepermissionsrequest)|true|none|
|» Name|body|object|true|none|
|» SharedAccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteImagePermissions|

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

<h3 id="deleteimagepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteImagePermissionsResult](#schemadeleteimagepermissionsresult)|
|480|480|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStack

<a id="opIdDeleteStack"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteStack' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteStack`

Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletestack-parameters">Parameters</h3>

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
|body|body|[DeleteStackRequest](#schemadeletestackrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteStack|

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

<h3 id="deletestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStackResult](#schemadeletestackresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUsageReportSubscription

<a id="opIdDeleteUsageReportSubscription"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteUsageReportSubscription' \
  -d '{}'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription`

Disables usage report generation.

> Body parameter

```json
{}
```

<h3 id="deleteusagereportsubscription-parameters">Parameters</h3>

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
|body|body|[DeleteUsageReportSubscriptionRequest](#schemadeleteusagereportsubscriptionrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteUsageReportSubscription|

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

<h3 id="deleteusagereportsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUsageReportSubscriptionResult](#schemadeleteusagereportsubscriptionresult)|
|480|480|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DeleteUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DeleteUser' \
  -d '{
    "UserName": {},
    "AuthenticationType": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DeleteUser`

Deletes a user from the user pool.

> Body parameter

```json
{
  "UserName": {},
  "AuthenticationType": {}
}
```

<h3 id="deleteuser-parameters">Parameters</h3>

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
|body|body|[DeleteUserRequest](#schemadeleteuserrequest)|true|none|
|» UserName|body|object|true|none|
|» AuthenticationType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DeleteUser|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserResult](#schemadeleteuserresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAppBlocks

<a id="opIdDescribeAppBlocks"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeAppBlocks' \
  -d '{
    "Arns": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks`

Retrieves a list that describes one or more app blocks.

> Body parameter

```json
{
  "Arns": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeappblocks-parameters">Parameters</h3>

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
|body|body|[DescribeAppBlocksRequest](#schemadescribeappblocksrequest)|true|none|
|» Arns|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeAppBlocks|

> Example responses

> 200 Response

```json
{
  "AppBlocks": {},
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

<h3 id="describeappblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAppBlocksResult](#schemadescribeappblocksresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplicationFleetAssociations

<a id="opIdDescribeApplicationFleetAssociations"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeApplicationFleetAssociations' \
  -d '{
    "FleetName": {},
    "ApplicationArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations`

Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.

> Body parameter

```json
{
  "FleetName": {},
  "ApplicationArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeapplicationfleetassociations-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationFleetAssociationsRequest](#schemadescribeapplicationfleetassociationsrequest)|true|none|
|» FleetName|body|object|false|none|
|» ApplicationArn|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeApplicationFleetAssociations|

> Example responses

> 200 Response

```json
{
  "ApplicationFleetAssociations": {},
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

<h3 id="describeapplicationfleetassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationFleetAssociationsResult](#schemadescribeapplicationfleetassociationsresult)|
|480|480|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplications

<a id="opIdDescribeApplications"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeApplications' \
  -d '{
    "Arns": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeApplications`

Retrieves a list that describes one or more applications.

> Body parameter

```json
{
  "Arns": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeapplications-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationsRequest](#schemadescribeapplicationsrequest)|true|none|
|» Arns|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeApplications|

> Example responses

> 200 Response

```json
{
  "Applications": {},
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

<h3 id="describeapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationsResult](#schemadescribeapplicationsresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDirectoryConfigs

<a id="opIdDescribeDirectoryConfigs"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeDirectoryConfigs' \
  -d '{
    "DirectoryNames": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs`

<p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>

> Body parameter

```json
{
  "DirectoryNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describedirectoryconfigs-parameters">Parameters</h3>

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
|body|body|[DescribeDirectoryConfigsRequest](#schemadescribedirectoryconfigsrequest)|true|none|
|» DirectoryNames|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeDirectoryConfigs|

> Example responses

> 200 Response

```json
{
  "DirectoryConfigs": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describedirectoryconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDirectoryConfigsResult](#schemadescribedirectoryconfigsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEntitlements

<a id="opIdDescribeEntitlements"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeEntitlements' \
  -d '{
    "Name": {},
    "StackName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements`

Retrieves a list that describes one of more entitlements.

> Body parameter

```json
{
  "Name": {},
  "StackName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeentitlements-parameters">Parameters</h3>

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
|body|body|[DescribeEntitlementsRequest](#schemadescribeentitlementsrequest)|true|none|
|» Name|body|object|false|none|
|» StackName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeEntitlements|

> Example responses

> 200 Response

```json
{
  "Entitlements": {},
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

<h3 id="describeentitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEntitlementsResult](#schemadescribeentitlementsresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|EntitlementNotFoundException|[EntitlementNotFoundException](#schemaentitlementnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleets

<a id="opIdDescribeFleets"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeFleets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeFleets' \
  -d '{
    "Names": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeFleets`

Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.

> Body parameter

```json
{
  "Names": {},
  "NextToken": {}
}
```

<h3 id="describefleets-parameters">Parameters</h3>

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
|body|body|[DescribeFleetsRequest](#schemadescribefleetsrequest)|true|none|
|» Names|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeFleets|

> Example responses

> 200 Response

```json
{
  "Fleets": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describefleets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetsResult](#schemadescribefleetsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImageBuilders

<a id="opIdDescribeImageBuilders"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeImageBuilders' \
  -d '{
    "Names": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders`

Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.

> Body parameter

```json
{
  "Names": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeimagebuilders-parameters">Parameters</h3>

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
|body|body|[DescribeImageBuildersRequest](#schemadescribeimagebuildersrequest)|true|none|
|» Names|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeImageBuilders|

> Example responses

> 200 Response

```json
{
  "ImageBuilders": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeimagebuilders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImageBuildersResult](#schemadescribeimagebuildersresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImagePermissions

<a id="opIdDescribeImagePermissions"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeImagePermissions' \
  -d '{
    "Name": {},
    "MaxResults": {},
    "SharedAwsAccountIds": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions`

Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 

> Body parameter

```json
{
  "Name": {},
  "MaxResults": {},
  "SharedAwsAccountIds": {},
  "NextToken": {}
}
```

<h3 id="describeimagepermissions-parameters">Parameters</h3>

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
|body|body|[DescribeImagePermissionsRequest](#schemadescribeimagepermissionsrequest)|true|none|
|» Name|body|object|true|none|
|» MaxResults|body|object|false|none|
|» SharedAwsAccountIds|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeImagePermissions|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "SharedImagePermissionsList": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeimagepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImagePermissionsResult](#schemadescribeimagepermissionsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImages

<a id="opIdDescribeImages"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeImages' \
  -d '{
    "Names": {},
    "Arns": {},
    "Type": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeImages`

Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.

> Body parameter

```json
{
  "Names": {},
  "Arns": {},
  "Type": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeimages-parameters">Parameters</h3>

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
|body|body|[DescribeImagesRequest](#schemadescribeimagesrequest)|true|none|
|» Names|body|object|false|none|
|» Arns|body|object|false|none|
|» Type|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeImages|

> Example responses

> 200 Response

```json
{
  "Images": {},
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

<h3 id="describeimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImagesResult](#schemadescribeimagesresult)|
|480|480|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSessions

<a id="opIdDescribeSessions"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeSessions' \
  -d '{
    "StackName": {},
    "FleetName": {},
    "UserId": {},
    "NextToken": {},
    "Limit": {},
    "AuthenticationType": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeSessions`

Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.

> Body parameter

```json
{
  "StackName": {},
  "FleetName": {},
  "UserId": {},
  "NextToken": {},
  "Limit": {},
  "AuthenticationType": {}
}
```

<h3 id="describesessions-parameters">Parameters</h3>

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
|body|body|[DescribeSessionsRequest](#schemadescribesessionsrequest)|true|none|
|» StackName|body|object|true|none|
|» FleetName|body|object|true|none|
|» UserId|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|
|» AuthenticationType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeSessions|

> Example responses

> 200 Response

```json
{
  "Sessions": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describesessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSessionsResult](#schemadescribesessionsresult)|
|480|480|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStacks

<a id="opIdDescribeStacks"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeStacks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeStacks' \
  -d '{
    "Names": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeStacks`

Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.

> Body parameter

```json
{
  "Names": {},
  "NextToken": {}
}
```

<h3 id="describestacks-parameters">Parameters</h3>

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
|body|body|[DescribeStacksRequest](#schemadescribestacksrequest)|true|none|
|» Names|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeStacks|

> Example responses

> 200 Response

```json
{
  "Stacks": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describestacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStacksResult](#schemadescribestacksresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUsageReportSubscriptions

<a id="opIdDescribeUsageReportSubscriptions"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeUsageReportSubscriptions' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions`

Retrieves a list that describes one or more usage report subscriptions.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeusagereportsubscriptions-parameters">Parameters</h3>

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
|body|body|[DescribeUsageReportSubscriptionsRequest](#schemadescribeusagereportsubscriptionsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeUsageReportSubscriptions|

> Example responses

> 200 Response

```json
{
  "UsageReportSubscriptions": {},
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

<h3 id="describeusagereportsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUsageReportSubscriptionsResult](#schemadescribeusagereportsubscriptionsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserStackAssociations

<a id="opIdDescribeUserStackAssociations"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeUserStackAssociations' \
  -d '{
    "StackName": {},
    "UserName": {},
    "AuthenticationType": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations`

<p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>

> Body parameter

```json
{
  "StackName": {},
  "UserName": {},
  "AuthenticationType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeuserstackassociations-parameters">Parameters</h3>

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
|body|body|[DescribeUserStackAssociationsRequest](#schemadescribeuserstackassociationsrequest)|true|none|
|» StackName|body|object|false|none|
|» UserName|body|object|false|none|
|» AuthenticationType|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeUserStackAssociations|

> Example responses

> 200 Response

```json
{
  "UserStackAssociations": {},
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

<h3 id="describeuserstackassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserStackAssociationsResult](#schemadescribeuserstackassociationsresult)|
|480|480|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUsers

<a id="opIdDescribeUsers"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DescribeUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DescribeUsers' \
  -d '{
    "AuthenticationType": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DescribeUsers`

Retrieves a list that describes one or more specified users in the user pool.

> Body parameter

```json
{
  "AuthenticationType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeusers-parameters">Parameters</h3>

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
|body|body|[DescribeUsersRequest](#schemadescribeusersrequest)|true|none|
|» AuthenticationType|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DescribeUsers|

> Example responses

> 200 Response

```json
{
  "Users": {},
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

<h3 id="describeusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUsersResult](#schemadescribeusersresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableUser

<a id="opIdDisableUser"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DisableUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DisableUser' \
  -d '{
    "UserName": {},
    "AuthenticationType": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DisableUser`

Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 

> Body parameter

```json
{
  "UserName": {},
  "AuthenticationType": {}
}
```

<h3 id="disableuser-parameters">Parameters</h3>

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
|body|body|[DisableUserRequest](#schemadisableuserrequest)|true|none|
|» UserName|body|object|true|none|
|» AuthenticationType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DisableUser|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="disableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableUserResult](#schemadisableuserresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateApplicationFleet

<a id="opIdDisassociateApplicationFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DisassociateApplicationFleet' \
  -d '{
    "FleetName": {},
    "ApplicationArn": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet`

Disassociates the specified application from the fleet.

> Body parameter

```json
{
  "FleetName": {},
  "ApplicationArn": {}
}
```

<h3 id="disassociateapplicationfleet-parameters">Parameters</h3>

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
|body|body|[DisassociateApplicationFleetRequest](#schemadisassociateapplicationfleetrequest)|true|none|
|» FleetName|body|object|true|none|
|» ApplicationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DisassociateApplicationFleet|

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

<h3 id="disassociateapplicationfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateApplicationFleetResult](#schemadisassociateapplicationfleetresult)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateApplicationFromEntitlement

<a id="opIdDisassociateApplicationFromEntitlement"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DisassociateApplicationFromEntitlement' \
  -d '{
    "StackName": {},
    "EntitlementName": {},
    "ApplicationIdentifier": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement`

Deletes the specified application from the specified entitlement.

> Body parameter

```json
{
  "StackName": {},
  "EntitlementName": {},
  "ApplicationIdentifier": {}
}
```

<h3 id="disassociateapplicationfromentitlement-parameters">Parameters</h3>

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
|body|body|[DisassociateApplicationFromEntitlementRequest](#schemadisassociateapplicationfromentitlementrequest)|true|none|
|» StackName|body|object|true|none|
|» EntitlementName|body|object|true|none|
|» ApplicationIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DisassociateApplicationFromEntitlement|

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

<h3 id="disassociateapplicationfromentitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateApplicationFromEntitlementResult](#schemadisassociateapplicationfromentitlementresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|EntitlementNotFoundException|[EntitlementNotFoundException](#schemaentitlementnotfoundexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFleet

<a id="opIdDisassociateFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.DisassociateFleet' \
  -d '{
    "FleetName": {},
    "StackName": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet`

Disassociates the specified fleet from the specified stack.

> Body parameter

```json
{
  "FleetName": {},
  "StackName": {}
}
```

<h3 id="disassociatefleet-parameters">Parameters</h3>

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
|body|body|[DisassociateFleetRequest](#schemadisassociatefleetrequest)|true|none|
|» FleetName|body|object|true|none|
|» StackName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.DisassociateFleet|

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

<h3 id="disassociatefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFleetResult](#schemadisassociatefleetresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableUser

<a id="opIdEnableUser"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.EnableUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.EnableUser' \
  -d '{
    "UserName": {},
    "AuthenticationType": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.EnableUser`

Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.

> Body parameter

```json
{
  "UserName": {},
  "AuthenticationType": {}
}
```

<h3 id="enableuser-parameters">Parameters</h3>

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
|body|body|[EnableUserRequest](#schemaenableuserrequest)|true|none|
|» UserName|body|object|true|none|
|» AuthenticationType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.EnableUser|

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

<h3 id="enableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableUserResult](#schemaenableuserresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExpireSession

<a id="opIdExpireSession"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.ExpireSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.ExpireSession' \
  -d '{
    "SessionId": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.ExpireSession`

Immediately stops the specified streaming session.

> Body parameter

```json
{
  "SessionId": {}
}
```

<h3 id="expiresession-parameters">Parameters</h3>

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
|body|body|[ExpireSessionRequest](#schemaexpiresessionrequest)|true|none|
|» SessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.ExpireSession|

> Example responses

> 200 Response

```json
{}
```

<h3 id="expiresession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExpireSessionResult](#schemaexpiresessionresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociatedFleets

<a id="opIdListAssociatedFleets"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.ListAssociatedFleets' \
  -d '{
    "StackName": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets`

Retrieves the name of the fleet that is associated with the specified stack.

> Body parameter

```json
{
  "StackName": {},
  "NextToken": {}
}
```

<h3 id="listassociatedfleets-parameters">Parameters</h3>

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
|body|body|[ListAssociatedFleetsRequest](#schemalistassociatedfleetsrequest)|true|none|
|» StackName|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.ListAssociatedFleets|

> Example responses

> 200 Response

```json
{
  "Names": {},
  "NextToken": {}
}
```

<h3 id="listassociatedfleets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociatedFleetsResult](#schemalistassociatedfleetsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociatedStacks

<a id="opIdListAssociatedStacks"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.ListAssociatedStacks' \
  -d '{
    "FleetName": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks`

Retrieves the name of the stack with which the specified fleet is associated.

> Body parameter

```json
{
  "FleetName": {},
  "NextToken": {}
}
```

<h3 id="listassociatedstacks-parameters">Parameters</h3>

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
|body|body|[ListAssociatedStacksRequest](#schemalistassociatedstacksrequest)|true|none|
|» FleetName|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.ListAssociatedStacks|

> Example responses

> 200 Response

```json
{
  "Names": {},
  "NextToken": {}
}
```

<h3 id="listassociatedstacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociatedStacksResult](#schemalistassociatedstacksresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntitledApplications

<a id="opIdListEntitledApplications"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.ListEntitledApplications' \
  -d '{
    "StackName": {},
    "EntitlementName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications`

Retrieves a list of entitled applications.

> Body parameter

```json
{
  "StackName": {},
  "EntitlementName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listentitledapplications-parameters">Parameters</h3>

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
|body|body|[ListEntitledApplicationsRequest](#schemalistentitledapplicationsrequest)|true|none|
|» StackName|body|object|true|none|
|» EntitlementName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.ListEntitledApplications|

> Example responses

> 200 Response

```json
{
  "EntitledApplications": {},
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

<h3 id="listentitledapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntitledApplicationsResult](#schemalistentitledapplicationsresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|EntitlementNotFoundException|[EntitlementNotFoundException](#schemaentitlementnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource`

<p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

> Body parameter

```json
{
  "ResourceArn": {}
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
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFleet

<a id="opIdStartFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.StartFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.StartFleet' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.StartFleet`

Starts the specified fleet.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="startfleet-parameters">Parameters</h3>

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
|body|body|[StartFleetRequest](#schemastartfleetrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.StartFleet|

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

> 487 Response

```json
null
```

<h3 id="startfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartFleetResult](#schemastartfleetresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|RequestLimitExceededException|[RequestLimitExceededException](#schemarequestlimitexceededexception)|
|484|484|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|486|486|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|487|487|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartImageBuilder

<a id="opIdStartImageBuilder"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.StartImageBuilder' \
  -d '{
    "Name": {},
    "AppstreamAgentVersion": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder`

Starts the specified image builder.

> Body parameter

```json
{
  "Name": {},
  "AppstreamAgentVersion": {}
}
```

<h3 id="startimagebuilder-parameters">Parameters</h3>

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
|body|body|[StartImageBuilderRequest](#schemastartimagebuilderrequest)|true|none|
|» Name|body|object|true|none|
|» AppstreamAgentVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.StartImageBuilder|

> Example responses

> 200 Response

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
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

<h3 id="startimagebuilder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartImageBuilderResult](#schemastartimagebuilderresult)|
|480|480|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|484|484|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopFleet

<a id="opIdStopFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.StopFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.StopFleet' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.StopFleet`

Stops the specified fleet.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="stopfleet-parameters">Parameters</h3>

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
|body|body|[StopFleetRequest](#schemastopfleetrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.StopFleet|

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

<h3 id="stopfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopFleetResult](#schemastopfleetresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopImageBuilder

<a id="opIdStopImageBuilder"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.StopImageBuilder' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder`

Stops the specified image builder.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="stopimagebuilder-parameters">Parameters</h3>

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
|body|body|[StopImageBuilderRequest](#schemastopimagebuilderrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.StopImageBuilder|

> Example responses

> 200 Response

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
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

<h3 id="stopimagebuilder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopImageBuilderResult](#schemastopimagebuilderresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.TagResource`

<p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
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
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.TagResource|

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
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.UntagResource`

<p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.UntagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.UpdateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.UpdateApplication' \
  -d '{
    "Name": {},
    "DisplayName": {},
    "Description": {},
    "IconS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LaunchPath": {},
    "WorkingDirectory": {},
    "LaunchParameters": {},
    "AppBlockArn": {},
    "AttributesToDelete": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.UpdateApplication`

Updates the specified application.

> Body parameter

```json
{
  "Name": {},
  "DisplayName": {},
  "Description": {},
  "IconS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "LaunchPath": {},
  "WorkingDirectory": {},
  "LaunchParameters": {},
  "AppBlockArn": {},
  "AttributesToDelete": {}
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationRequest](#schemaupdateapplicationrequest)|true|none|
|» Name|body|object|true|none|
|» DisplayName|body|object|false|none|
|» Description|body|object|false|none|
|» IconS3Location|body|object|false|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|true|none|
|» LaunchPath|body|object|false|none|
|» WorkingDirectory|body|object|false|none|
|» LaunchParameters|body|object|false|none|
|» AppBlockArn|body|object|false|none|
|» AttributesToDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.UpdateApplication|

> Example responses

> 200 Response

```json
{
  "Application": {
    "Name": {},
    "DisplayName": {},
    "IconURL": {},
    "LaunchPath": {},
    "LaunchParameters": {},
    "Enabled": {},
    "Metadata": {
      "property1": "string",
      "property2": "string"
    },
    "WorkingDirectory": {},
    "Description": {},
    "Arn": {},
    "AppBlockArn": {},
    "IconS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "Platforms": {},
    "InstanceFamilies": {},
    "CreatedTime": {}
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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationResult](#schemaupdateapplicationresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDirectoryConfig

<a id="opIdUpdateDirectoryConfig"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.UpdateDirectoryConfig' \
  -d '{
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedNames": {},
    "ServiceAccountCredentials": {
      "AccountName": {},
      "AccountPassword": {}
    },
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig`

Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

> Body parameter

```json
{
  "DirectoryName": {},
  "OrganizationalUnitDistinguishedNames": {},
  "ServiceAccountCredentials": {
    "AccountName": {},
    "AccountPassword": {}
  },
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  }
}
```

<h3 id="updatedirectoryconfig-parameters">Parameters</h3>

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
|body|body|[UpdateDirectoryConfigRequest](#schemaupdatedirectoryconfigrequest)|true|none|
|» DirectoryName|body|object|true|none|
|» OrganizationalUnitDistinguishedNames|body|object|false|none|
|» ServiceAccountCredentials|body|object|false|none|
|» » AccountName|body|object|true|none|
|» » AccountPassword|body|object|true|none|
|» CertificateBasedAuthProperties|body|object|false|none|
|» » Status|body|object|false|none|
|» » CertificateAuthorityArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.UpdateDirectoryConfig|

> Example responses

> 200 Response

```json
{
  "DirectoryConfig": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedNames": {},
    "ServiceAccountCredentials": {
      "AccountName": {},
      "AccountPassword": {}
    },
    "CreatedTime": {},
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
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

<h3 id="updatedirectoryconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDirectoryConfigResult](#schemaupdatedirectoryconfigresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEntitlement

<a id="opIdUpdateEntitlement"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.UpdateEntitlement' \
  -d '{
    "Name": {},
    "StackName": {},
    "Description": {},
    "AppVisibility": {},
    "Attributes": {}
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement`

Updates the specified entitlement.

> Body parameter

```json
{
  "Name": {},
  "StackName": {},
  "Description": {},
  "AppVisibility": {},
  "Attributes": {}
}
```

<h3 id="updateentitlement-parameters">Parameters</h3>

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
|body|body|[UpdateEntitlementRequest](#schemaupdateentitlementrequest)|true|none|
|» Name|body|object|true|none|
|» StackName|body|object|true|none|
|» Description|body|object|false|none|
|» AppVisibility|body|object|false|none|
|» Attributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.UpdateEntitlement|

> Example responses

> 200 Response

```json
{
  "Entitlement": {
    "Name": {},
    "StackName": {},
    "Description": {},
    "AppVisibility": {},
    "Attributes": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
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

<h3 id="updateentitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEntitlementResult](#schemaupdateentitlementresult)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|EntitlementNotFoundException|[EntitlementNotFoundException](#schemaentitlementnotfoundexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFleet

<a id="opIdUpdateFleet"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.UpdateFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.UpdateFleet' \
  -d '{
    "ImageName": {},
    "ImageArn": {},
    "Name": {},
    "InstanceType": {},
    "ComputeCapacity": {
      "DesiredInstances": {}
    },
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "MaxUserDurationInSeconds": {},
    "DisconnectTimeoutInSeconds": {},
    "DeleteVpcConfig": {},
    "Description": {},
    "DisplayName": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "IdleDisconnectTimeoutInSeconds": {},
    "AttributesToDelete": {},
    "IamRoleArn": {},
    "StreamView": {},
    "Platform": {},
    "MaxConcurrentSessions": {},
    "UsbDeviceFilterStrings": {},
    "SessionScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.UpdateFleet`

<p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>

> Body parameter

```json
{
  "ImageName": {},
  "ImageArn": {},
  "Name": {},
  "InstanceType": {},
  "ComputeCapacity": {
    "DesiredInstances": {}
  },
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "MaxUserDurationInSeconds": {},
  "DisconnectTimeoutInSeconds": {},
  "DeleteVpcConfig": {},
  "Description": {},
  "DisplayName": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "IdleDisconnectTimeoutInSeconds": {},
  "AttributesToDelete": {},
  "IamRoleArn": {},
  "StreamView": {},
  "Platform": {},
  "MaxConcurrentSessions": {},
  "UsbDeviceFilterStrings": {},
  "SessionScriptS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  }
}
```

<h3 id="updatefleet-parameters">Parameters</h3>

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
|body|body|[UpdateFleetRequest](#schemaupdatefleetrequest)|true|none|
|» ImageName|body|object|false|none|
|» ImageArn|body|object|false|none|
|» Name|body|object|false|none|
|» InstanceType|body|object|false|none|
|» ComputeCapacity|body|object|false|none|
|» » DesiredInstances|body|object|true|none|
|» VpcConfig|body|object|false|none|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» MaxUserDurationInSeconds|body|object|false|none|
|» DisconnectTimeoutInSeconds|body|object|false|none|
|» DeleteVpcConfig|body|object|false|none|
|» Description|body|object|false|none|
|» DisplayName|body|object|false|none|
|» EnableDefaultInternetAccess|body|object|false|none|
|» DomainJoinInfo|body|object|false|none|
|» » DirectoryName|body|object|false|none|
|» » OrganizationalUnitDistinguishedName|body|object|false|none|
|» IdleDisconnectTimeoutInSeconds|body|object|false|none|
|» AttributesToDelete|body|object|false|none|
|» IamRoleArn|body|object|false|none|
|» StreamView|body|object|false|none|
|» Platform|body|object|false|none|
|» MaxConcurrentSessions|body|object|false|none|
|» UsbDeviceFilterStrings|body|object|false|none|
|» SessionScriptS3Location|body|object|false|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.UpdateFleet|

> Example responses

> 200 Response

```json
{
  "Fleet": {
    "Arn": {},
    "Name": {},
    "DisplayName": {},
    "Description": {},
    "ImageName": {},
    "ImageArn": {},
    "InstanceType": {},
    "FleetType": {},
    "ComputeCapacityStatus": {
      "Desired": {},
      "Running": {},
      "InUse": {},
      "Available": {}
    },
    "MaxUserDurationInSeconds": {},
    "DisconnectTimeoutInSeconds": {},
    "State": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "CreatedTime": {},
    "FleetErrors": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "IdleDisconnectTimeoutInSeconds": {},
    "IamRoleArn": {},
    "StreamView": {},
    "Platform": {},
    "MaxConcurrentSessions": {},
    "UsbDeviceFilterStrings": {},
    "SessionScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
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

<h3 id="updatefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFleetResult](#schemaupdatefleetresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|RequestLimitExceededException|[RequestLimitExceededException](#schemarequestlimitexceededexception)|
|483|483|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|484|484|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|487|487|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|488|488|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|489|489|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateImagePermissions

<a id="opIdUpdateImagePermissions"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.UpdateImagePermissions' \
  -d '{
    "Name": {},
    "SharedAccountId": {},
    "ImagePermissions": {
      "allowFleet": {},
      "allowImageBuilder": {}
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions`

Adds or updates permissions for the specified private image. 

> Body parameter

```json
{
  "Name": {},
  "SharedAccountId": {},
  "ImagePermissions": {
    "allowFleet": {},
    "allowImageBuilder": {}
  }
}
```

<h3 id="updateimagepermissions-parameters">Parameters</h3>

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
|body|body|[UpdateImagePermissionsRequest](#schemaupdateimagepermissionsrequest)|true|none|
|» Name|body|object|true|none|
|» SharedAccountId|body|object|true|none|
|» ImagePermissions|body|object|true|none|
|» » allowFleet|body|object|false|none|
|» » allowImageBuilder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.UpdateImagePermissions|

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

<h3 id="updateimagepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateImagePermissionsResult](#schemaupdateimagepermissionsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceNotAvailableException|[ResourceNotAvailableException](#schemaresourcenotavailableexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStack

<a id="opIdUpdateStack"></a>

> Code samples

```bash
curl 'https://appstream.us-east-1.amazonaws.com/#X-Amz-Target=PhotonAdminProxyService.UpdateStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: PhotonAdminProxyService.UpdateStack' \
  -d '{
    "DisplayName": {},
    "Description": {},
    "Name": {},
    "StorageConnectors": {},
    "DeleteStorageConnectors": {},
    "RedirectURL": {},
    "FeedbackURL": {},
    "AttributesToDelete": {},
    "UserSettings": {},
    "ApplicationSettings": {
      "Enabled": {},
      "SettingsGroup": {}
    },
    "AccessEndpoints": {},
    "EmbedHostDomains": {},
    "StreamingExperienceSettings": {
      "PreferredProtocol": {}
    }
  }'
```

`POST /#X-Amz-Target=PhotonAdminProxyService.UpdateStack`

Updates the specified fields for the specified stack.

> Body parameter

```json
{
  "DisplayName": {},
  "Description": {},
  "Name": {},
  "StorageConnectors": {},
  "DeleteStorageConnectors": {},
  "RedirectURL": {},
  "FeedbackURL": {},
  "AttributesToDelete": {},
  "UserSettings": {},
  "ApplicationSettings": {
    "Enabled": {},
    "SettingsGroup": {}
  },
  "AccessEndpoints": {},
  "EmbedHostDomains": {},
  "StreamingExperienceSettings": {
    "PreferredProtocol": {}
  }
}
```

<h3 id="updatestack-parameters">Parameters</h3>

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
|body|body|[UpdateStackRequest](#schemaupdatestackrequest)|true|none|
|» DisplayName|body|object|false|none|
|» Description|body|object|false|none|
|» Name|body|object|true|none|
|» StorageConnectors|body|object|false|none|
|» DeleteStorageConnectors|body|object|false|none|
|» RedirectURL|body|object|false|none|
|» FeedbackURL|body|object|false|none|
|» AttributesToDelete|body|object|false|none|
|» UserSettings|body|object|false|none|
|» ApplicationSettings|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » SettingsGroup|body|object|false|none|
|» AccessEndpoints|body|object|false|none|
|» EmbedHostDomains|body|object|false|none|
|» StreamingExperienceSettings|body|object|false|none|
|» » PreferredProtocol|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|PhotonAdminProxyService.UpdateStack|

> Example responses

> 200 Response

```json
{
  "Stack": {
    "Arn": {},
    "Name": {},
    "Description": {},
    "DisplayName": {},
    "CreatedTime": {},
    "StorageConnectors": {},
    "RedirectURL": {},
    "FeedbackURL": {},
    "StackErrors": {},
    "UserSettings": {},
    "ApplicationSettings": {
      "Enabled": {},
      "SettingsGroup": {},
      "S3BucketName": {}
    },
    "AccessEndpoints": {},
    "EmbedHostDomains": {},
    "StreamingExperienceSettings": {
      "PreferredProtocol": {}
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

<h3 id="updatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStackResult](#schemaupdatestackresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidRoleException|[InvalidRoleException](#schemainvalidroleexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InvalidAccountStatusException|[InvalidAccountStatusException](#schemainvalidaccountstatusexception)|
|486|486|IncompatibleImageException|[IncompatibleImageException](#schemaincompatibleimageexception)|
|487|487|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|488|488|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateApplicationFleetResult">AssociateApplicationFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapplicationfleetresult"></a>
<a id="schema_AssociateApplicationFleetResult"></a>
<a id="tocSassociateapplicationfleetresult"></a>
<a id="tocsassociateapplicationfleetresult"></a>

```json
{
  "ApplicationFleetAssociation": {
    "FleetName": {},
    "ApplicationArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationFleetAssociation|object|false|none|none|

<h2 id="tocS_AssociateApplicationFleetRequest">AssociateApplicationFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapplicationfleetrequest"></a>
<a id="schema_AssociateApplicationFleetRequest"></a>
<a id="tocSassociateapplicationfleetrequest"></a>
<a id="tocsassociateapplicationfleetrequest"></a>

```json
{
  "FleetName": {},
  "ApplicationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|true|none|none|
|ApplicationArn|object|true|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterCombinationException">InvalidParameterCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametercombinationexception"></a>
<a id="schema_InvalidParameterCombinationException"></a>
<a id="tocSinvalidparametercombinationexception"></a>
<a id="tocsinvalidparametercombinationexception"></a>

```json
null
```

<h2 id="tocS_OperationNotPermittedException">OperationNotPermittedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotpermittedexception"></a>
<a id="schema_OperationNotPermittedException"></a>
<a id="tocSoperationnotpermittedexception"></a>
<a id="tocsoperationnotpermittedexception"></a>

```json
null
```

<h2 id="tocS_AssociateApplicationToEntitlementResult">AssociateApplicationToEntitlementResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapplicationtoentitlementresult"></a>
<a id="schema_AssociateApplicationToEntitlementResult"></a>
<a id="tocSassociateapplicationtoentitlementresult"></a>
<a id="tocsassociateapplicationtoentitlementresult"></a>

```json
{}
```

<h2 id="tocS_AssociateApplicationToEntitlementRequest">AssociateApplicationToEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapplicationtoentitlementrequest"></a>
<a id="schema_AssociateApplicationToEntitlementRequest"></a>
<a id="tocSassociateapplicationtoentitlementrequest"></a>
<a id="tocsassociateapplicationtoentitlementrequest"></a>

```json
{
  "StackName": {},
  "EntitlementName": {},
  "ApplicationIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|EntitlementName|object|true|none|none|
|ApplicationIdentifier|object|true|none|none|

<h2 id="tocS_EntitlementNotFoundException">EntitlementNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementnotfoundexception"></a>
<a id="schema_EntitlementNotFoundException"></a>
<a id="tocSentitlementnotfoundexception"></a>
<a id="tocsentitlementnotfoundexception"></a>

```json
null
```

<h2 id="tocS_AssociateFleetResult">AssociateFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefleetresult"></a>
<a id="schema_AssociateFleetResult"></a>
<a id="tocSassociatefleetresult"></a>
<a id="tocsassociatefleetresult"></a>

```json
{}
```

<h2 id="tocS_AssociateFleetRequest">AssociateFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefleetrequest"></a>
<a id="schema_AssociateFleetRequest"></a>
<a id="tocSassociatefleetrequest"></a>
<a id="tocsassociatefleetrequest"></a>

```json
{
  "FleetName": {},
  "StackName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|true|none|none|
|StackName|object|true|none|none|

<h2 id="tocS_InvalidAccountStatusException">InvalidAccountStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidaccountstatusexception"></a>
<a id="schema_InvalidAccountStatusException"></a>
<a id="tocSinvalidaccountstatusexception"></a>
<a id="tocsinvalidaccountstatusexception"></a>

```json
null
```

<h2 id="tocS_IncompatibleImageException">IncompatibleImageException</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibleimageexception"></a>
<a id="schema_IncompatibleImageException"></a>
<a id="tocSincompatibleimageexception"></a>
<a id="tocsincompatibleimageexception"></a>

```json
null
```

<h2 id="tocS_BatchAssociateUserStackResult">BatchAssociateUserStackResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateuserstackresult"></a>
<a id="schema_BatchAssociateUserStackResult"></a>
<a id="tocSbatchassociateuserstackresult"></a>
<a id="tocsbatchassociateuserstackresult"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_BatchAssociateUserStackRequest">BatchAssociateUserStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateuserstackrequest"></a>
<a id="schema_BatchAssociateUserStackRequest"></a>
<a id="tocSbatchassociateuserstackrequest"></a>
<a id="tocsbatchassociateuserstackrequest"></a>

```json
{
  "UserStackAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserStackAssociations|object|true|none|none|

<h2 id="tocS_BatchDisassociateUserStackResult">BatchDisassociateUserStackResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateuserstackresult"></a>
<a id="schema_BatchDisassociateUserStackResult"></a>
<a id="tocSbatchdisassociateuserstackresult"></a>
<a id="tocsbatchdisassociateuserstackresult"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_BatchDisassociateUserStackRequest">BatchDisassociateUserStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateuserstackrequest"></a>
<a id="schema_BatchDisassociateUserStackRequest"></a>
<a id="tocSbatchdisassociateuserstackrequest"></a>
<a id="tocsbatchdisassociateuserstackrequest"></a>

```json
{
  "UserStackAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserStackAssociations|object|true|none|none|

<h2 id="tocS_CopyImageResponse">CopyImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacopyimageresponse"></a>
<a id="schema_CopyImageResponse"></a>
<a id="tocScopyimageresponse"></a>
<a id="tocscopyimageresponse"></a>

```json
{
  "DestinationImageName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationImageName|object|false|none|none|

<h2 id="tocS_CopyImageRequest">CopyImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopyimagerequest"></a>
<a id="schema_CopyImageRequest"></a>
<a id="tocScopyimagerequest"></a>
<a id="tocscopyimagerequest"></a>

```json
{
  "SourceImageName": {},
  "DestinationImageName": {},
  "DestinationRegion": {},
  "DestinationImageDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceImageName|object|true|none|none|
|DestinationImageName|object|true|none|none|
|DestinationRegion|object|true|none|none|
|DestinationImageDescription|object|false|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotAvailableException">ResourceNotAvailableException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotavailableexception"></a>
<a id="schema_ResourceNotAvailableException"></a>
<a id="tocSresourcenotavailableexception"></a>
<a id="tocsresourcenotavailableexception"></a>

```json
null
```

<h2 id="tocS_CreateAppBlockResult">CreateAppBlockResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateappblockresult"></a>
<a id="schema_CreateAppBlockResult"></a>
<a id="tocScreateappblockresult"></a>
<a id="tocscreateappblockresult"></a>

```json
{
  "AppBlock": {
    "Name": {},
    "Arn": {},
    "Description": {},
    "DisplayName": {},
    "SourceS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "SetupScriptDetails": {
      "ScriptS3Location": {
        "S3Bucket": {},
        "S3Key": {}
      },
      "ExecutablePath": {},
      "ExecutableParameters": {},
      "TimeoutInSeconds": {}
    },
    "CreatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppBlock|object|false|none|none|

<h2 id="tocS_CreateAppBlockRequest">CreateAppBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateappblockrequest"></a>
<a id="schema_CreateAppBlockRequest"></a>
<a id="tocScreateappblockrequest"></a>
<a id="tocscreateappblockrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "DisplayName": {},
  "SourceS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "SetupScriptDetails": {
    "ScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "ExecutablePath": {},
    "ExecutableParameters": {},
    "TimeoutInSeconds": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|SourceS3Location|object|true|none|none|
|SetupScriptDetails|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateApplicationResult">CreateApplicationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresult"></a>
<a id="schema_CreateApplicationResult"></a>
<a id="tocScreateapplicationresult"></a>
<a id="tocscreateapplicationresult"></a>

```json
{
  "Application": {
    "Name": {},
    "DisplayName": {},
    "IconURL": {},
    "LaunchPath": {},
    "LaunchParameters": {},
    "Enabled": {},
    "Metadata": {
      "property1": "string",
      "property2": "string"
    },
    "WorkingDirectory": {},
    "Description": {},
    "Arn": {},
    "AppBlockArn": {},
    "IconS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "Platforms": {},
    "InstanceFamilies": {},
    "CreatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Application|[Application](#schemaapplication)|false|none|Describes an application in the application catalog.|

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "Name": {},
  "DisplayName": {},
  "Description": {},
  "IconS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "LaunchPath": {},
  "WorkingDirectory": {},
  "LaunchParameters": {},
  "Platforms": {},
  "InstanceFamilies": {},
  "AppBlockArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DisplayName|object|false|none|none|
|Description|object|false|none|none|
|IconS3Location|object|true|none|none|
|LaunchPath|object|true|none|none|
|WorkingDirectory|object|false|none|none|
|LaunchParameters|object|false|none|none|
|Platforms|object|true|none|none|
|InstanceFamilies|object|true|none|none|
|AppBlockArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateDirectoryConfigResult">CreateDirectoryConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectoryconfigresult"></a>
<a id="schema_CreateDirectoryConfigResult"></a>
<a id="tocScreatedirectoryconfigresult"></a>
<a id="tocscreatedirectoryconfigresult"></a>

```json
{
  "DirectoryConfig": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedNames": {},
    "ServiceAccountCredentials": {
      "AccountName": {},
      "AccountPassword": {}
    },
    "CreatedTime": {},
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryConfig|object|false|none|none|

<h2 id="tocS_CreateDirectoryConfigRequest">CreateDirectoryConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectoryconfigrequest"></a>
<a id="schema_CreateDirectoryConfigRequest"></a>
<a id="tocScreatedirectoryconfigrequest"></a>
<a id="tocscreatedirectoryconfigrequest"></a>

```json
{
  "DirectoryName": {},
  "OrganizationalUnitDistinguishedNames": {},
  "ServiceAccountCredentials": {
    "AccountName": {},
    "AccountPassword": {}
  },
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryName|object|true|none|none|
|OrganizationalUnitDistinguishedNames|object|true|none|none|
|ServiceAccountCredentials|object|false|none|none|
|CertificateBasedAuthProperties|object|false|none|none|

<h2 id="tocS_InvalidRoleException">InvalidRoleException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidroleexception"></a>
<a id="schema_InvalidRoleException"></a>
<a id="tocSinvalidroleexception"></a>
<a id="tocsinvalidroleexception"></a>

```json
null
```

<h2 id="tocS_CreateEntitlementResult">CreateEntitlementResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateentitlementresult"></a>
<a id="schema_CreateEntitlementResult"></a>
<a id="tocScreateentitlementresult"></a>
<a id="tocscreateentitlementresult"></a>

```json
{
  "Entitlement": {
    "Name": {},
    "StackName": {},
    "Description": {},
    "AppVisibility": {},
    "Attributes": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlement|object|false|none|none|

<h2 id="tocS_CreateEntitlementRequest">CreateEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateentitlementrequest"></a>
<a id="schema_CreateEntitlementRequest"></a>
<a id="tocScreateentitlementrequest"></a>
<a id="tocscreateentitlementrequest"></a>

```json
{
  "Name": {},
  "StackName": {},
  "Description": {},
  "AppVisibility": {},
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|StackName|object|true|none|none|
|Description|object|false|none|none|
|AppVisibility|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_EntitlementAlreadyExistsException">EntitlementAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementalreadyexistsexception"></a>
<a id="schema_EntitlementAlreadyExistsException"></a>
<a id="tocSentitlementalreadyexistsexception"></a>
<a id="tocsentitlementalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateFleetResult">CreateFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetresult"></a>
<a id="schema_CreateFleetResult"></a>
<a id="tocScreatefleetresult"></a>
<a id="tocscreatefleetresult"></a>

```json
{
  "Fleet": {
    "Arn": {},
    "Name": {},
    "DisplayName": {},
    "Description": {},
    "ImageName": {},
    "ImageArn": {},
    "InstanceType": {},
    "FleetType": {},
    "ComputeCapacityStatus": {
      "Desired": {},
      "Running": {},
      "InUse": {},
      "Available": {}
    },
    "MaxUserDurationInSeconds": {},
    "DisconnectTimeoutInSeconds": {},
    "State": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "CreatedTime": {},
    "FleetErrors": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "IdleDisconnectTimeoutInSeconds": {},
    "IamRoleArn": {},
    "StreamView": {},
    "Platform": {},
    "MaxConcurrentSessions": {},
    "UsbDeviceFilterStrings": {},
    "SessionScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fleet|object|false|none|none|

<h2 id="tocS_CreateFleetRequest">CreateFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetrequest"></a>
<a id="schema_CreateFleetRequest"></a>
<a id="tocScreatefleetrequest"></a>
<a id="tocscreatefleetrequest"></a>

```json
{
  "Name": {},
  "ImageName": {},
  "ImageArn": {},
  "InstanceType": {},
  "FleetType": {},
  "ComputeCapacity": {
    "DesiredInstances": {}
  },
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "MaxUserDurationInSeconds": {},
  "DisconnectTimeoutInSeconds": {},
  "Description": {},
  "DisplayName": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "IdleDisconnectTimeoutInSeconds": {},
  "IamRoleArn": {},
  "StreamView": {},
  "Platform": {},
  "MaxConcurrentSessions": {},
  "UsbDeviceFilterStrings": {},
  "SessionScriptS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ImageName|object|false|none|none|
|ImageArn|object|false|none|none|
|InstanceType|object|true|none|none|
|FleetType|object|false|none|none|
|ComputeCapacity|object|false|none|none|
|VpcConfig|object|false|none|none|
|MaxUserDurationInSeconds|object|false|none|none|
|DisconnectTimeoutInSeconds|object|false|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|EnableDefaultInternetAccess|object|false|none|none|
|DomainJoinInfo|object|false|none|none|
|Tags|object|false|none|none|
|IdleDisconnectTimeoutInSeconds|object|false|none|none|
|IamRoleArn|object|false|none|none|
|StreamView|object|false|none|none|
|Platform|object|false|none|none|
|MaxConcurrentSessions|object|false|none|none|
|UsbDeviceFilterStrings|object|false|none|none|
|SessionScriptS3Location|object|false|none|none|

<h2 id="tocS_RequestLimitExceededException">RequestLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemarequestlimitexceededexception"></a>
<a id="schema_RequestLimitExceededException"></a>
<a id="tocSrequestlimitexceededexception"></a>
<a id="tocsrequestlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateImageBuilderResult">CreateImageBuilderResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagebuilderresult"></a>
<a id="schema_CreateImageBuilderResult"></a>
<a id="tocScreateimagebuilderresult"></a>
<a id="tocscreateimagebuilderresult"></a>

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageBuilder|object|false|none|none|

<h2 id="tocS_CreateImageBuilderRequest">CreateImageBuilderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagebuilderrequest"></a>
<a id="schema_CreateImageBuilderRequest"></a>
<a id="tocScreateimagebuilderrequest"></a>
<a id="tocscreateimagebuilderrequest"></a>

```json
{
  "Name": {},
  "ImageName": {},
  "ImageArn": {},
  "InstanceType": {},
  "Description": {},
  "DisplayName": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "IamRoleArn": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "AppstreamAgentVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AccessEndpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ImageName|object|false|none|none|
|ImageArn|object|false|none|none|
|InstanceType|object|true|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|VpcConfig|object|false|none|none|
|IamRoleArn|object|false|none|none|
|EnableDefaultInternetAccess|object|false|none|none|
|DomainJoinInfo|object|false|none|none|
|AppstreamAgentVersion|object|false|none|none|
|Tags|object|false|none|none|
|AccessEndpoints|object|false|none|none|

<h2 id="tocS_CreateImageBuilderStreamingURLResult">CreateImageBuilderStreamingURLResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagebuilderstreamingurlresult"></a>
<a id="schema_CreateImageBuilderStreamingURLResult"></a>
<a id="tocScreateimagebuilderstreamingurlresult"></a>
<a id="tocscreateimagebuilderstreamingurlresult"></a>

```json
{
  "StreamingURL": {},
  "Expires": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingURL|object|false|none|none|
|Expires|object|false|none|none|

<h2 id="tocS_CreateImageBuilderStreamingURLRequest">CreateImageBuilderStreamingURLRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagebuilderstreamingurlrequest"></a>
<a id="schema_CreateImageBuilderStreamingURLRequest"></a>
<a id="tocScreateimagebuilderstreamingurlrequest"></a>
<a id="tocscreateimagebuilderstreamingurlrequest"></a>

```json
{
  "Name": {},
  "Validity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Validity|object|false|none|none|

<h2 id="tocS_CreateStackResult">CreateStackResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackresult"></a>
<a id="schema_CreateStackResult"></a>
<a id="tocScreatestackresult"></a>
<a id="tocscreatestackresult"></a>

```json
{
  "Stack": {
    "Arn": {},
    "Name": {},
    "Description": {},
    "DisplayName": {},
    "CreatedTime": {},
    "StorageConnectors": {},
    "RedirectURL": {},
    "FeedbackURL": {},
    "StackErrors": {},
    "UserSettings": {},
    "ApplicationSettings": {
      "Enabled": {},
      "SettingsGroup": {},
      "S3BucketName": {}
    },
    "AccessEndpoints": {},
    "EmbedHostDomains": {},
    "StreamingExperienceSettings": {
      "PreferredProtocol": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stack|object|false|none|none|

<h2 id="tocS_CreateStackRequest">CreateStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackrequest"></a>
<a id="schema_CreateStackRequest"></a>
<a id="tocScreatestackrequest"></a>
<a id="tocscreatestackrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "DisplayName": {},
  "StorageConnectors": {},
  "RedirectURL": {},
  "FeedbackURL": {},
  "UserSettings": {},
  "ApplicationSettings": {
    "Enabled": {},
    "SettingsGroup": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AccessEndpoints": {},
  "EmbedHostDomains": {},
  "StreamingExperienceSettings": {
    "PreferredProtocol": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|StorageConnectors|object|false|none|none|
|RedirectURL|object|false|none|none|
|FeedbackURL|object|false|none|none|
|UserSettings|object|false|none|none|
|ApplicationSettings|object|false|none|none|
|Tags|object|false|none|none|
|AccessEndpoints|object|false|none|none|
|EmbedHostDomains|object|false|none|none|
|StreamingExperienceSettings|object|false|none|none|

<h2 id="tocS_CreateStreamingURLResult">CreateStreamingURLResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingurlresult"></a>
<a id="schema_CreateStreamingURLResult"></a>
<a id="tocScreatestreamingurlresult"></a>
<a id="tocscreatestreamingurlresult"></a>

```json
{
  "StreamingURL": {},
  "Expires": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingURL|object|false|none|none|
|Expires|object|false|none|none|

<h2 id="tocS_CreateStreamingURLRequest">CreateStreamingURLRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingurlrequest"></a>
<a id="schema_CreateStreamingURLRequest"></a>
<a id="tocScreatestreamingurlrequest"></a>
<a id="tocscreatestreamingurlrequest"></a>

```json
{
  "StackName": {},
  "FleetName": {},
  "UserId": {},
  "ApplicationId": {},
  "Validity": {},
  "SessionContext": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|FleetName|object|true|none|none|
|UserId|object|true|none|none|
|ApplicationId|object|false|none|none|
|Validity|object|false|none|none|
|SessionContext|object|false|none|none|

<h2 id="tocS_CreateUpdatedImageResult">CreateUpdatedImageResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatedimageresult"></a>
<a id="schema_CreateUpdatedImageResult"></a>
<a id="tocScreateupdatedimageresult"></a>
<a id="tocscreateupdatedimageresult"></a>

```json
{
  "image": {
    "Name": {},
    "Arn": {},
    "BaseImageArn": {},
    "DisplayName": {},
    "State": {},
    "Visibility": {},
    "ImageBuilderSupported": {},
    "ImageBuilderName": {},
    "Platform": {},
    "Description": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Applications": {},
    "CreatedTime": {},
    "PublicBaseImageReleasedDate": {},
    "AppstreamAgentVersion": {},
    "ImagePermissions": {
      "allowFleet": {},
      "allowImageBuilder": {}
    },
    "ImageErrors": {}
  },
  "canUpdateImage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[Image](#schemaimage)|false|none|Describes an image.|
|canUpdateImage|object|false|none|none|

<h2 id="tocS_CreateUpdatedImageRequest">CreateUpdatedImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatedimagerequest"></a>
<a id="schema_CreateUpdatedImageRequest"></a>
<a id="tocScreateupdatedimagerequest"></a>
<a id="tocscreateupdatedimagerequest"></a>

```json
{
  "existingImageName": {},
  "newImageName": {},
  "newImageDescription": {},
  "newImageDisplayName": {},
  "newImageTags": {
    "property1": "string",
    "property2": "string"
  },
  "dryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|existingImageName|object|true|none|none|
|newImageName|object|true|none|none|
|newImageDescription|object|false|none|none|
|newImageDisplayName|object|false|none|none|
|newImageTags|object|false|none|none|
|dryRun|object|false|none|none|

<h2 id="tocS_CreateUsageReportSubscriptionResult">CreateUsageReportSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateusagereportsubscriptionresult"></a>
<a id="schema_CreateUsageReportSubscriptionResult"></a>
<a id="tocScreateusagereportsubscriptionresult"></a>
<a id="tocscreateusagereportsubscriptionresult"></a>

```json
{
  "S3BucketName": {},
  "Schedule": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|false|none|none|
|Schedule|object|false|none|none|

<h2 id="tocS_CreateUsageReportSubscriptionRequest">CreateUsageReportSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateusagereportsubscriptionrequest"></a>
<a id="schema_CreateUsageReportSubscriptionRequest"></a>
<a id="tocScreateusagereportsubscriptionrequest"></a>
<a id="tocscreateusagereportsubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_CreateUserResult">CreateUserResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresult"></a>
<a id="schema_CreateUserResult"></a>
<a id="tocScreateuserresult"></a>
<a id="tocscreateuserresult"></a>

```json
{}
```

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "UserName": {},
  "MessageAction": {},
  "FirstName": {},
  "LastName": {},
  "AuthenticationType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|true|none|none|
|MessageAction|object|false|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|AuthenticationType|object|true|none|none|

<h2 id="tocS_DeleteAppBlockResult">DeleteAppBlockResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappblockresult"></a>
<a id="schema_DeleteAppBlockResult"></a>
<a id="tocSdeleteappblockresult"></a>
<a id="tocsdeleteappblockresult"></a>

```json
{}
```

<h2 id="tocS_DeleteAppBlockRequest">DeleteAppBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappblockrequest"></a>
<a id="schema_DeleteAppBlockRequest"></a>
<a id="tocSdeleteappblockrequest"></a>
<a id="tocsdeleteappblockrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteApplicationResult">DeleteApplicationResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationresult"></a>
<a id="schema_DeleteApplicationResult"></a>
<a id="tocSdeleteapplicationresult"></a>
<a id="tocsdeleteapplicationresult"></a>

```json
{}
```

<h2 id="tocS_DeleteApplicationRequest">DeleteApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationrequest"></a>
<a id="schema_DeleteApplicationRequest"></a>
<a id="tocSdeleteapplicationrequest"></a>
<a id="tocsdeleteapplicationrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteDirectoryConfigResult">DeleteDirectoryConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectoryconfigresult"></a>
<a id="schema_DeleteDirectoryConfigResult"></a>
<a id="tocSdeletedirectoryconfigresult"></a>
<a id="tocsdeletedirectoryconfigresult"></a>

```json
{}
```

<h2 id="tocS_DeleteDirectoryConfigRequest">DeleteDirectoryConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectoryconfigrequest"></a>
<a id="schema_DeleteDirectoryConfigRequest"></a>
<a id="tocSdeletedirectoryconfigrequest"></a>
<a id="tocsdeletedirectoryconfigrequest"></a>

```json
{
  "DirectoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryName|object|true|none|none|

<h2 id="tocS_DeleteEntitlementResult">DeleteEntitlementResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteentitlementresult"></a>
<a id="schema_DeleteEntitlementResult"></a>
<a id="tocSdeleteentitlementresult"></a>
<a id="tocsdeleteentitlementresult"></a>

```json
{}
```

<h2 id="tocS_DeleteEntitlementRequest">DeleteEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteentitlementrequest"></a>
<a id="schema_DeleteEntitlementRequest"></a>
<a id="tocSdeleteentitlementrequest"></a>
<a id="tocsdeleteentitlementrequest"></a>

```json
{
  "Name": {},
  "StackName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|StackName|object|true|none|none|

<h2 id="tocS_DeleteFleetResult">DeleteFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetresult"></a>
<a id="schema_DeleteFleetResult"></a>
<a id="tocSdeletefleetresult"></a>
<a id="tocsdeletefleetresult"></a>

```json
{}
```

<h2 id="tocS_DeleteFleetRequest">DeleteFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetrequest"></a>
<a id="schema_DeleteFleetRequest"></a>
<a id="tocSdeletefleetrequest"></a>
<a id="tocsdeletefleetrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteImageResult">DeleteImageResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimageresult"></a>
<a id="schema_DeleteImageResult"></a>
<a id="tocSdeleteimageresult"></a>
<a id="tocsdeleteimageresult"></a>

```json
{
  "Image": {
    "Name": {},
    "Arn": {},
    "BaseImageArn": {},
    "DisplayName": {},
    "State": {},
    "Visibility": {},
    "ImageBuilderSupported": {},
    "ImageBuilderName": {},
    "Platform": {},
    "Description": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Applications": {},
    "CreatedTime": {},
    "PublicBaseImageReleasedDate": {},
    "AppstreamAgentVersion": {},
    "ImagePermissions": {
      "allowFleet": {},
      "allowImageBuilder": {}
    },
    "ImageErrors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Image|object|false|none|none|

<h2 id="tocS_DeleteImageRequest">DeleteImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagerequest"></a>
<a id="schema_DeleteImageRequest"></a>
<a id="tocSdeleteimagerequest"></a>
<a id="tocsdeleteimagerequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteImageBuilderResult">DeleteImageBuilderResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagebuilderresult"></a>
<a id="schema_DeleteImageBuilderResult"></a>
<a id="tocSdeleteimagebuilderresult"></a>
<a id="tocsdeleteimagebuilderresult"></a>

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageBuilder|object|false|none|none|

<h2 id="tocS_DeleteImageBuilderRequest">DeleteImageBuilderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagebuilderrequest"></a>
<a id="schema_DeleteImageBuilderRequest"></a>
<a id="tocSdeleteimagebuilderrequest"></a>
<a id="tocsdeleteimagebuilderrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteImagePermissionsResult">DeleteImagePermissionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagepermissionsresult"></a>
<a id="schema_DeleteImagePermissionsResult"></a>
<a id="tocSdeleteimagepermissionsresult"></a>
<a id="tocsdeleteimagepermissionsresult"></a>

```json
{}
```

<h2 id="tocS_DeleteImagePermissionsRequest">DeleteImagePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagepermissionsrequest"></a>
<a id="schema_DeleteImagePermissionsRequest"></a>
<a id="tocSdeleteimagepermissionsrequest"></a>
<a id="tocsdeleteimagepermissionsrequest"></a>

```json
{
  "Name": {},
  "SharedAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SharedAccountId|object|true|none|none|

<h2 id="tocS_DeleteStackResult">DeleteStackResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletestackresult"></a>
<a id="schema_DeleteStackResult"></a>
<a id="tocSdeletestackresult"></a>
<a id="tocsdeletestackresult"></a>

```json
{}
```

<h2 id="tocS_DeleteStackRequest">DeleteStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestackrequest"></a>
<a id="schema_DeleteStackRequest"></a>
<a id="tocSdeletestackrequest"></a>
<a id="tocsdeletestackrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteUsageReportSubscriptionResult">DeleteUsageReportSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusagereportsubscriptionresult"></a>
<a id="schema_DeleteUsageReportSubscriptionResult"></a>
<a id="tocSdeleteusagereportsubscriptionresult"></a>
<a id="tocsdeleteusagereportsubscriptionresult"></a>

```json
{}
```

<h2 id="tocS_DeleteUsageReportSubscriptionRequest">DeleteUsageReportSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusagereportsubscriptionrequest"></a>
<a id="schema_DeleteUsageReportSubscriptionRequest"></a>
<a id="tocSdeleteusagereportsubscriptionrequest"></a>
<a id="tocsdeleteusagereportsubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteUserResult">DeleteUserResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserresult"></a>
<a id="schema_DeleteUserResult"></a>
<a id="tocSdeleteuserresult"></a>
<a id="tocsdeleteuserresult"></a>

```json
{}
```

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{
  "UserName": {},
  "AuthenticationType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|true|none|none|
|AuthenticationType|object|true|none|none|

<h2 id="tocS_DescribeAppBlocksResult">DescribeAppBlocksResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappblocksresult"></a>
<a id="schema_DescribeAppBlocksResult"></a>
<a id="tocSdescribeappblocksresult"></a>
<a id="tocsdescribeappblocksresult"></a>

```json
{
  "AppBlocks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppBlocks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAppBlocksRequest">DescribeAppBlocksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappblocksrequest"></a>
<a id="schema_DescribeAppBlocksRequest"></a>
<a id="tocSdescribeappblocksrequest"></a>
<a id="tocsdescribeappblocksrequest"></a>

```json
{
  "Arns": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arns|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeApplicationFleetAssociationsResult">DescribeApplicationFleetAssociationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationfleetassociationsresult"></a>
<a id="schema_DescribeApplicationFleetAssociationsResult"></a>
<a id="tocSdescribeapplicationfleetassociationsresult"></a>
<a id="tocsdescribeapplicationfleetassociationsresult"></a>

```json
{
  "ApplicationFleetAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationFleetAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeApplicationFleetAssociationsRequest">DescribeApplicationFleetAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationfleetassociationsrequest"></a>
<a id="schema_DescribeApplicationFleetAssociationsRequest"></a>
<a id="tocSdescribeapplicationfleetassociationsrequest"></a>
<a id="tocsdescribeapplicationfleetassociationsrequest"></a>

```json
{
  "FleetName": {},
  "ApplicationArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|false|none|none|
|ApplicationArn|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeApplicationsResult">DescribeApplicationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationsresult"></a>
<a id="schema_DescribeApplicationsResult"></a>
<a id="tocSdescribeapplicationsresult"></a>
<a id="tocsdescribeapplicationsresult"></a>

```json
{
  "Applications": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Applications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeApplicationsRequest">DescribeApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationsrequest"></a>
<a id="schema_DescribeApplicationsRequest"></a>
<a id="tocSdescribeapplicationsrequest"></a>
<a id="tocsdescribeapplicationsrequest"></a>

```json
{
  "Arns": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arns|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeDirectoryConfigsResult">DescribeDirectoryConfigsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectoryconfigsresult"></a>
<a id="schema_DescribeDirectoryConfigsResult"></a>
<a id="tocSdescribedirectoryconfigsresult"></a>
<a id="tocsdescribedirectoryconfigsresult"></a>

```json
{
  "DirectoryConfigs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryConfigs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectoryConfigsRequest">DescribeDirectoryConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectoryconfigsrequest"></a>
<a id="schema_DescribeDirectoryConfigsRequest"></a>
<a id="tocSdescribedirectoryconfigsrequest"></a>
<a id="tocsdescribedirectoryconfigsrequest"></a>

```json
{
  "DirectoryNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryNames|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEntitlementsResult">DescribeEntitlementsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentitlementsresult"></a>
<a id="schema_DescribeEntitlementsResult"></a>
<a id="tocSdescribeentitlementsresult"></a>
<a id="tocsdescribeentitlementsresult"></a>

```json
{
  "Entitlements": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlements|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEntitlementsRequest">DescribeEntitlementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentitlementsrequest"></a>
<a id="schema_DescribeEntitlementsRequest"></a>
<a id="tocSdescribeentitlementsrequest"></a>
<a id="tocsdescribeentitlementsrequest"></a>

```json
{
  "Name": {},
  "StackName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|StackName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeFleetsResult">DescribeFleetsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetsresult"></a>
<a id="schema_DescribeFleetsResult"></a>
<a id="tocSdescribefleetsresult"></a>
<a id="tocsdescribefleetsresult"></a>

```json
{
  "Fleets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fleets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetsRequest">DescribeFleetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetsrequest"></a>
<a id="schema_DescribeFleetsRequest"></a>
<a id="tocSdescribefleetsrequest"></a>
<a id="tocsdescribefleetsrequest"></a>

```json
{
  "Names": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeImageBuildersResult">DescribeImageBuildersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagebuildersresult"></a>
<a id="schema_DescribeImageBuildersResult"></a>
<a id="tocSdescribeimagebuildersresult"></a>
<a id="tocsdescribeimagebuildersresult"></a>

```json
{
  "ImageBuilders": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageBuilders|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeImageBuildersRequest">DescribeImageBuildersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagebuildersrequest"></a>
<a id="schema_DescribeImageBuildersRequest"></a>
<a id="tocSdescribeimagebuildersrequest"></a>
<a id="tocsdescribeimagebuildersrequest"></a>

```json
{
  "Names": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeImagePermissionsResult">DescribeImagePermissionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagepermissionsresult"></a>
<a id="schema_DescribeImagePermissionsResult"></a>
<a id="tocSdescribeimagepermissionsresult"></a>
<a id="tocsdescribeimagepermissionsresult"></a>

```json
{
  "Name": {},
  "SharedImagePermissionsList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|SharedImagePermissionsList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeImagePermissionsRequest">DescribeImagePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagepermissionsrequest"></a>
<a id="schema_DescribeImagePermissionsRequest"></a>
<a id="tocSdescribeimagepermissionsrequest"></a>
<a id="tocsdescribeimagepermissionsrequest"></a>

```json
{
  "Name": {},
  "MaxResults": {},
  "SharedAwsAccountIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MaxResults|object|false|none|none|
|SharedAwsAccountIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeImagesResult">DescribeImagesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagesresult"></a>
<a id="schema_DescribeImagesResult"></a>
<a id="tocSdescribeimagesresult"></a>
<a id="tocsdescribeimagesresult"></a>

```json
{
  "Images": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Images|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeImagesRequest">DescribeImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagesrequest"></a>
<a id="schema_DescribeImagesRequest"></a>
<a id="tocSdescribeimagesrequest"></a>
<a id="tocsdescribeimagesrequest"></a>

```json
{
  "Names": {},
  "Arns": {},
  "Type": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|Arns|object|false|none|none|
|Type|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeSessionsResult">DescribeSessionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribesessionsresult"></a>
<a id="schema_DescribeSessionsResult"></a>
<a id="tocSdescribesessionsresult"></a>
<a id="tocsdescribesessionsresult"></a>

```json
{
  "Sessions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sessions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSessionsRequest">DescribeSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesessionsrequest"></a>
<a id="schema_DescribeSessionsRequest"></a>
<a id="tocSdescribesessionsrequest"></a>
<a id="tocsdescribesessionsrequest"></a>

```json
{
  "StackName": {},
  "FleetName": {},
  "UserId": {},
  "NextToken": {},
  "Limit": {},
  "AuthenticationType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|FleetName|object|true|none|none|
|UserId|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|
|AuthenticationType|object|false|none|none|

<h2 id="tocS_DescribeStacksResult">DescribeStacksResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksresult"></a>
<a id="schema_DescribeStacksResult"></a>
<a id="tocSdescribestacksresult"></a>
<a id="tocsdescribestacksresult"></a>

```json
{
  "Stacks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stacks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeStacksRequest">DescribeStacksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksrequest"></a>
<a id="schema_DescribeStacksRequest"></a>
<a id="tocSdescribestacksrequest"></a>
<a id="tocsdescribestacksrequest"></a>

```json
{
  "Names": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeUsageReportSubscriptionsResult">DescribeUsageReportSubscriptionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusagereportsubscriptionsresult"></a>
<a id="schema_DescribeUsageReportSubscriptionsResult"></a>
<a id="tocSdescribeusagereportsubscriptionsresult"></a>
<a id="tocsdescribeusagereportsubscriptionsresult"></a>

```json
{
  "UsageReportSubscriptions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsageReportSubscriptions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeUsageReportSubscriptionsRequest">DescribeUsageReportSubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusagereportsubscriptionsrequest"></a>
<a id="schema_DescribeUsageReportSubscriptionsRequest"></a>
<a id="tocSdescribeusagereportsubscriptionsrequest"></a>
<a id="tocsdescribeusagereportsubscriptionsrequest"></a>

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

<h2 id="tocS_DescribeUserStackAssociationsResult">DescribeUserStackAssociationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserstackassociationsresult"></a>
<a id="schema_DescribeUserStackAssociationsResult"></a>
<a id="tocSdescribeuserstackassociationsresult"></a>
<a id="tocsdescribeuserstackassociationsresult"></a>

```json
{
  "UserStackAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserStackAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeUserStackAssociationsRequest">DescribeUserStackAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserstackassociationsrequest"></a>
<a id="schema_DescribeUserStackAssociationsRequest"></a>
<a id="tocSdescribeuserstackassociationsrequest"></a>
<a id="tocsdescribeuserstackassociationsrequest"></a>

```json
{
  "StackName": {},
  "UserName": {},
  "AuthenticationType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|UserName|object|false|none|none|
|AuthenticationType|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeUsersResult">DescribeUsersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusersresult"></a>
<a id="schema_DescribeUsersResult"></a>
<a id="tocSdescribeusersresult"></a>
<a id="tocsdescribeusersresult"></a>

```json
{
  "Users": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeUsersRequest">DescribeUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusersrequest"></a>
<a id="schema_DescribeUsersRequest"></a>
<a id="tocSdescribeusersrequest"></a>
<a id="tocsdescribeusersrequest"></a>

```json
{
  "AuthenticationType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthenticationType|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DisableUserResult">DisableUserResult</h2>
<!-- backwards compatibility -->
<a id="schemadisableuserresult"></a>
<a id="schema_DisableUserResult"></a>
<a id="tocSdisableuserresult"></a>
<a id="tocsdisableuserresult"></a>

```json
{}
```

<h2 id="tocS_DisableUserRequest">DisableUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableuserrequest"></a>
<a id="schema_DisableUserRequest"></a>
<a id="tocSdisableuserrequest"></a>
<a id="tocsdisableuserrequest"></a>

```json
{
  "UserName": {},
  "AuthenticationType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|true|none|none|
|AuthenticationType|object|true|none|none|

<h2 id="tocS_DisassociateApplicationFleetResult">DisassociateApplicationFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapplicationfleetresult"></a>
<a id="schema_DisassociateApplicationFleetResult"></a>
<a id="tocSdisassociateapplicationfleetresult"></a>
<a id="tocsdisassociateapplicationfleetresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateApplicationFleetRequest">DisassociateApplicationFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapplicationfleetrequest"></a>
<a id="schema_DisassociateApplicationFleetRequest"></a>
<a id="tocSdisassociateapplicationfleetrequest"></a>
<a id="tocsdisassociateapplicationfleetrequest"></a>

```json
{
  "FleetName": {},
  "ApplicationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|true|none|none|
|ApplicationArn|object|true|none|none|

<h2 id="tocS_DisassociateApplicationFromEntitlementResult">DisassociateApplicationFromEntitlementResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapplicationfromentitlementresult"></a>
<a id="schema_DisassociateApplicationFromEntitlementResult"></a>
<a id="tocSdisassociateapplicationfromentitlementresult"></a>
<a id="tocsdisassociateapplicationfromentitlementresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateApplicationFromEntitlementRequest">DisassociateApplicationFromEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapplicationfromentitlementrequest"></a>
<a id="schema_DisassociateApplicationFromEntitlementRequest"></a>
<a id="tocSdisassociateapplicationfromentitlementrequest"></a>
<a id="tocsdisassociateapplicationfromentitlementrequest"></a>

```json
{
  "StackName": {},
  "EntitlementName": {},
  "ApplicationIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|EntitlementName|object|true|none|none|
|ApplicationIdentifier|object|true|none|none|

<h2 id="tocS_DisassociateFleetResult">DisassociateFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefleetresult"></a>
<a id="schema_DisassociateFleetResult"></a>
<a id="tocSdisassociatefleetresult"></a>
<a id="tocsdisassociatefleetresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateFleetRequest">DisassociateFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefleetrequest"></a>
<a id="schema_DisassociateFleetRequest"></a>
<a id="tocSdisassociatefleetrequest"></a>
<a id="tocsdisassociatefleetrequest"></a>

```json
{
  "FleetName": {},
  "StackName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|true|none|none|
|StackName|object|true|none|none|

<h2 id="tocS_EnableUserResult">EnableUserResult</h2>
<!-- backwards compatibility -->
<a id="schemaenableuserresult"></a>
<a id="schema_EnableUserResult"></a>
<a id="tocSenableuserresult"></a>
<a id="tocsenableuserresult"></a>

```json
{}
```

<h2 id="tocS_EnableUserRequest">EnableUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableuserrequest"></a>
<a id="schema_EnableUserRequest"></a>
<a id="tocSenableuserrequest"></a>
<a id="tocsenableuserrequest"></a>

```json
{
  "UserName": {},
  "AuthenticationType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|true|none|none|
|AuthenticationType|object|true|none|none|

<h2 id="tocS_ExpireSessionResult">ExpireSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemaexpiresessionresult"></a>
<a id="schema_ExpireSessionResult"></a>
<a id="tocSexpiresessionresult"></a>
<a id="tocsexpiresessionresult"></a>

```json
{}
```

<h2 id="tocS_ExpireSessionRequest">ExpireSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexpiresessionrequest"></a>
<a id="schema_ExpireSessionRequest"></a>
<a id="tocSexpiresessionrequest"></a>
<a id="tocsexpiresessionrequest"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|

<h2 id="tocS_ListAssociatedFleetsResult">ListAssociatedFleetsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedfleetsresult"></a>
<a id="schema_ListAssociatedFleetsResult"></a>
<a id="tocSlistassociatedfleetsresult"></a>
<a id="tocslistassociatedfleetsresult"></a>

```json
{
  "Names": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAssociatedFleetsRequest">ListAssociatedFleetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedfleetsrequest"></a>
<a id="schema_ListAssociatedFleetsRequest"></a>
<a id="tocSlistassociatedfleetsrequest"></a>
<a id="tocslistassociatedfleetsrequest"></a>

```json
{
  "StackName": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAssociatedStacksResult">ListAssociatedStacksResult</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedstacksresult"></a>
<a id="schema_ListAssociatedStacksResult"></a>
<a id="tocSlistassociatedstacksresult"></a>
<a id="tocslistassociatedstacksresult"></a>

```json
{
  "Names": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAssociatedStacksRequest">ListAssociatedStacksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedstacksrequest"></a>
<a id="schema_ListAssociatedStacksRequest"></a>
<a id="tocSlistassociatedstacksrequest"></a>
<a id="tocslistassociatedstacksrequest"></a>

```json
{
  "FleetName": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntitledApplicationsResult">ListEntitledApplicationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistentitledapplicationsresult"></a>
<a id="schema_ListEntitledApplicationsResult"></a>
<a id="tocSlistentitledapplicationsresult"></a>
<a id="tocslistentitledapplicationsresult"></a>

```json
{
  "EntitledApplications": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntitledApplications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntitledApplicationsRequest">ListEntitledApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentitledapplicationsrequest"></a>
<a id="schema_ListEntitledApplicationsRequest"></a>
<a id="tocSlistentitledapplicationsrequest"></a>
<a id="tocslistentitledapplicationsrequest"></a>

```json
{
  "StackName": {},
  "EntitlementName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|EntitlementName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
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
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_StartFleetResult">StartFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemastartfleetresult"></a>
<a id="schema_StartFleetResult"></a>
<a id="tocSstartfleetresult"></a>
<a id="tocsstartfleetresult"></a>

```json
{}
```

<h2 id="tocS_StartFleetRequest">StartFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartfleetrequest"></a>
<a id="schema_StartFleetRequest"></a>
<a id="tocSstartfleetrequest"></a>
<a id="tocsstartfleetrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_StartImageBuilderResult">StartImageBuilderResult</h2>
<!-- backwards compatibility -->
<a id="schemastartimagebuilderresult"></a>
<a id="schema_StartImageBuilderResult"></a>
<a id="tocSstartimagebuilderresult"></a>
<a id="tocsstartimagebuilderresult"></a>

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageBuilder|object|false|none|none|

<h2 id="tocS_StartImageBuilderRequest">StartImageBuilderRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartimagebuilderrequest"></a>
<a id="schema_StartImageBuilderRequest"></a>
<a id="tocSstartimagebuilderrequest"></a>
<a id="tocsstartimagebuilderrequest"></a>

```json
{
  "Name": {},
  "AppstreamAgentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AppstreamAgentVersion|object|false|none|none|

<h2 id="tocS_StopFleetResult">StopFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemastopfleetresult"></a>
<a id="schema_StopFleetResult"></a>
<a id="tocSstopfleetresult"></a>
<a id="tocsstopfleetresult"></a>

```json
{}
```

<h2 id="tocS_StopFleetRequest">StopFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopfleetrequest"></a>
<a id="schema_StopFleetRequest"></a>
<a id="tocSstopfleetrequest"></a>
<a id="tocsstopfleetrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_StopImageBuilderResult">StopImageBuilderResult</h2>
<!-- backwards compatibility -->
<a id="schemastopimagebuilderresult"></a>
<a id="schema_StopImageBuilderResult"></a>
<a id="tocSstopimagebuilderresult"></a>
<a id="tocsstopimagebuilderresult"></a>

```json
{
  "ImageBuilder": {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageBuilder|object|false|none|none|

<h2 id="tocS_StopImageBuilderRequest">StopImageBuilderRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopimagebuilderrequest"></a>
<a id="schema_StopImageBuilderRequest"></a>
<a id="tocSstopimagebuilderrequest"></a>
<a id="tocsstopimagebuilderrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

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
  "ResourceArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
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
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateApplicationResult">UpdateApplicationResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresult"></a>
<a id="schema_UpdateApplicationResult"></a>
<a id="tocSupdateapplicationresult"></a>
<a id="tocsupdateapplicationresult"></a>

```json
{
  "Application": {
    "Name": {},
    "DisplayName": {},
    "IconURL": {},
    "LaunchPath": {},
    "LaunchParameters": {},
    "Enabled": {},
    "Metadata": {
      "property1": "string",
      "property2": "string"
    },
    "WorkingDirectory": {},
    "Description": {},
    "Arn": {},
    "AppBlockArn": {},
    "IconS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "Platforms": {},
    "InstanceFamilies": {},
    "CreatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Application|[Application](#schemaapplication)|false|none|Describes an application in the application catalog.|

<h2 id="tocS_UpdateApplicationRequest">UpdateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationrequest"></a>
<a id="schema_UpdateApplicationRequest"></a>
<a id="tocSupdateapplicationrequest"></a>
<a id="tocsupdateapplicationrequest"></a>

```json
{
  "Name": {},
  "DisplayName": {},
  "Description": {},
  "IconS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "LaunchPath": {},
  "WorkingDirectory": {},
  "LaunchParameters": {},
  "AppBlockArn": {},
  "AttributesToDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DisplayName|object|false|none|none|
|Description|object|false|none|none|
|IconS3Location|object|false|none|none|
|LaunchPath|object|false|none|none|
|WorkingDirectory|object|false|none|none|
|LaunchParameters|object|false|none|none|
|AppBlockArn|object|false|none|none|
|AttributesToDelete|object|false|none|none|

<h2 id="tocS_UpdateDirectoryConfigResult">UpdateDirectoryConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectoryconfigresult"></a>
<a id="schema_UpdateDirectoryConfigResult"></a>
<a id="tocSupdatedirectoryconfigresult"></a>
<a id="tocsupdatedirectoryconfigresult"></a>

```json
{
  "DirectoryConfig": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedNames": {},
    "ServiceAccountCredentials": {
      "AccountName": {},
      "AccountPassword": {}
    },
    "CreatedTime": {},
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryConfig|object|false|none|none|

<h2 id="tocS_UpdateDirectoryConfigRequest">UpdateDirectoryConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectoryconfigrequest"></a>
<a id="schema_UpdateDirectoryConfigRequest"></a>
<a id="tocSupdatedirectoryconfigrequest"></a>
<a id="tocsupdatedirectoryconfigrequest"></a>

```json
{
  "DirectoryName": {},
  "OrganizationalUnitDistinguishedNames": {},
  "ServiceAccountCredentials": {
    "AccountName": {},
    "AccountPassword": {}
  },
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryName|object|true|none|none|
|OrganizationalUnitDistinguishedNames|object|false|none|none|
|ServiceAccountCredentials|object|false|none|none|
|CertificateBasedAuthProperties|object|false|none|none|

<h2 id="tocS_UpdateEntitlementResult">UpdateEntitlementResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateentitlementresult"></a>
<a id="schema_UpdateEntitlementResult"></a>
<a id="tocSupdateentitlementresult"></a>
<a id="tocsupdateentitlementresult"></a>

```json
{
  "Entitlement": {
    "Name": {},
    "StackName": {},
    "Description": {},
    "AppVisibility": {},
    "Attributes": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlement|object|false|none|none|

<h2 id="tocS_UpdateEntitlementRequest">UpdateEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateentitlementrequest"></a>
<a id="schema_UpdateEntitlementRequest"></a>
<a id="tocSupdateentitlementrequest"></a>
<a id="tocsupdateentitlementrequest"></a>

```json
{
  "Name": {},
  "StackName": {},
  "Description": {},
  "AppVisibility": {},
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|StackName|object|true|none|none|
|Description|object|false|none|none|
|AppVisibility|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_UpdateFleetResult">UpdateFleetResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetresult"></a>
<a id="schema_UpdateFleetResult"></a>
<a id="tocSupdatefleetresult"></a>
<a id="tocsupdatefleetresult"></a>

```json
{
  "Fleet": {
    "Arn": {},
    "Name": {},
    "DisplayName": {},
    "Description": {},
    "ImageName": {},
    "ImageArn": {},
    "InstanceType": {},
    "FleetType": {},
    "ComputeCapacityStatus": {
      "Desired": {},
      "Running": {},
      "InUse": {},
      "Available": {}
    },
    "MaxUserDurationInSeconds": {},
    "DisconnectTimeoutInSeconds": {},
    "State": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "CreatedTime": {},
    "FleetErrors": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "IdleDisconnectTimeoutInSeconds": {},
    "IamRoleArn": {},
    "StreamView": {},
    "Platform": {},
    "MaxConcurrentSessions": {},
    "UsbDeviceFilterStrings": {},
    "SessionScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fleet|object|false|none|none|

<h2 id="tocS_UpdateFleetRequest">UpdateFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetrequest"></a>
<a id="schema_UpdateFleetRequest"></a>
<a id="tocSupdatefleetrequest"></a>
<a id="tocsupdatefleetrequest"></a>

```json
{
  "ImageName": {},
  "ImageArn": {},
  "Name": {},
  "InstanceType": {},
  "ComputeCapacity": {
    "DesiredInstances": {}
  },
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "MaxUserDurationInSeconds": {},
  "DisconnectTimeoutInSeconds": {},
  "DeleteVpcConfig": {},
  "Description": {},
  "DisplayName": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "IdleDisconnectTimeoutInSeconds": {},
  "AttributesToDelete": {},
  "IamRoleArn": {},
  "StreamView": {},
  "Platform": {},
  "MaxConcurrentSessions": {},
  "UsbDeviceFilterStrings": {},
  "SessionScriptS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageName|object|false|none|none|
|ImageArn|object|false|none|none|
|Name|object|false|none|none|
|InstanceType|object|false|none|none|
|ComputeCapacity|object|false|none|none|
|VpcConfig|object|false|none|none|
|MaxUserDurationInSeconds|object|false|none|none|
|DisconnectTimeoutInSeconds|object|false|none|none|
|DeleteVpcConfig|object|false|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|EnableDefaultInternetAccess|object|false|none|none|
|DomainJoinInfo|object|false|none|none|
|IdleDisconnectTimeoutInSeconds|object|false|none|none|
|AttributesToDelete|object|false|none|none|
|IamRoleArn|object|false|none|none|
|StreamView|object|false|none|none|
|Platform|object|false|none|none|
|MaxConcurrentSessions|object|false|none|none|
|UsbDeviceFilterStrings|object|false|none|none|
|SessionScriptS3Location|object|false|none|none|

<h2 id="tocS_UpdateImagePermissionsResult">UpdateImagePermissionsResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimagepermissionsresult"></a>
<a id="schema_UpdateImagePermissionsResult"></a>
<a id="tocSupdateimagepermissionsresult"></a>
<a id="tocsupdateimagepermissionsresult"></a>

```json
{}
```

<h2 id="tocS_UpdateImagePermissionsRequest">UpdateImagePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimagepermissionsrequest"></a>
<a id="schema_UpdateImagePermissionsRequest"></a>
<a id="tocSupdateimagepermissionsrequest"></a>
<a id="tocsupdateimagepermissionsrequest"></a>

```json
{
  "Name": {},
  "SharedAccountId": {},
  "ImagePermissions": {
    "allowFleet": {},
    "allowImageBuilder": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SharedAccountId|object|true|none|none|
|ImagePermissions|object|true|none|none|

<h2 id="tocS_UpdateStackResult">UpdateStackResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestackresult"></a>
<a id="schema_UpdateStackResult"></a>
<a id="tocSupdatestackresult"></a>
<a id="tocsupdatestackresult"></a>

```json
{
  "Stack": {
    "Arn": {},
    "Name": {},
    "Description": {},
    "DisplayName": {},
    "CreatedTime": {},
    "StorageConnectors": {},
    "RedirectURL": {},
    "FeedbackURL": {},
    "StackErrors": {},
    "UserSettings": {},
    "ApplicationSettings": {
      "Enabled": {},
      "SettingsGroup": {},
      "S3BucketName": {}
    },
    "AccessEndpoints": {},
    "EmbedHostDomains": {},
    "StreamingExperienceSettings": {
      "PreferredProtocol": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stack|object|false|none|none|

<h2 id="tocS_UpdateStackRequest">UpdateStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestackrequest"></a>
<a id="schema_UpdateStackRequest"></a>
<a id="tocSupdatestackrequest"></a>
<a id="tocsupdatestackrequest"></a>

```json
{
  "DisplayName": {},
  "Description": {},
  "Name": {},
  "StorageConnectors": {},
  "DeleteStorageConnectors": {},
  "RedirectURL": {},
  "FeedbackURL": {},
  "AttributesToDelete": {},
  "UserSettings": {},
  "ApplicationSettings": {
    "Enabled": {},
    "SettingsGroup": {}
  },
  "AccessEndpoints": {},
  "EmbedHostDomains": {},
  "StreamingExperienceSettings": {
    "PreferredProtocol": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayName|object|false|none|none|
|Description|object|false|none|none|
|Name|object|true|none|none|
|StorageConnectors|object|false|none|none|
|DeleteStorageConnectors|object|false|none|none|
|RedirectURL|object|false|none|none|
|FeedbackURL|object|false|none|none|
|AttributesToDelete|object|false|none|none|
|UserSettings|object|false|none|none|
|ApplicationSettings|object|false|none|none|
|AccessEndpoints|object|false|none|none|
|EmbedHostDomains|object|false|none|none|
|StreamingExperienceSettings|object|false|none|none|

<h2 id="tocS_AccessEndpointType">AccessEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaaccessendpointtype"></a>
<a id="schema_AccessEndpointType"></a>
<a id="tocSaccessendpointtype"></a>
<a id="tocsaccessendpointtype"></a>

```json
"STREAMING"
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

<h2 id="tocS_AccessEndpoint">AccessEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaaccessendpoint"></a>
<a id="schema_AccessEndpoint"></a>
<a id="tocSaccessendpoint"></a>
<a id="tocsaccessendpoint"></a>

```json
{
  "EndpointType": {},
  "VpceId": {}
}
```

Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointType|object|true|none|none|
|VpceId|object|false|none|none|

<h2 id="tocS_AccessEndpointList">AccessEndpointList</h2>
<!-- backwards compatibility -->
<a id="schemaaccessendpointlist"></a>
<a id="schema_AccessEndpointList"></a>
<a id="tocSaccessendpointlist"></a>
<a id="tocsaccessendpointlist"></a>

```json
[
  {
    "EndpointType": {},
    "VpceId": {}
  }
]
```

<h2 id="tocS_AccountName">AccountName</h2>
<!-- backwards compatibility -->
<a id="schemaaccountname"></a>
<a id="schema_AccountName"></a>
<a id="tocSaccountname"></a>
<a id="tocsaccountname"></a>

```json
"password"
```

<h2 id="tocS_AccountPassword">AccountPassword</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpassword"></a>
<a id="schema_AccountPassword"></a>
<a id="tocSaccountpassword"></a>
<a id="tocsaccountpassword"></a>

```json
"password"
```

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"CLIPBOARD_COPY_FROM_LOCAL_DEVICE"
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

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "S3Bucket": {},
  "S3Key": {}
}
```

Describes the S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|true|none|none|
|S3Key|object|true|none|none|

<h2 id="tocS_ScriptDetails">ScriptDetails</h2>
<!-- backwards compatibility -->
<a id="schemascriptdetails"></a>
<a id="schema_ScriptDetails"></a>
<a id="tocSscriptdetails"></a>
<a id="tocsscriptdetails"></a>

```json
{
  "ScriptS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "ExecutablePath": {},
  "ExecutableParameters": {},
  "TimeoutInSeconds": {}
}
```

Describes the details of the script.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScriptS3Location|object|true|none|none|
|ExecutablePath|object|true|none|none|
|ExecutableParameters|object|false|none|none|
|TimeoutInSeconds|object|true|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AppBlock">AppBlock</h2>
<!-- backwards compatibility -->
<a id="schemaappblock"></a>
<a id="schema_AppBlock"></a>
<a id="tocSappblock"></a>
<a id="tocsappblock"></a>

```json
{
  "Name": {},
  "Arn": {},
  "Description": {},
  "DisplayName": {},
  "SourceS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "SetupScriptDetails": {
    "ScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "ExecutablePath": {},
    "ExecutableParameters": {},
    "TimeoutInSeconds": {}
  },
  "CreatedTime": {}
}
```

<p>Describes an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Arn|object|true|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|SourceS3Location|object|false|none|none|
|SetupScriptDetails|object|true|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_AppBlocks">AppBlocks</h2>
<!-- backwards compatibility -->
<a id="schemaappblocks"></a>
<a id="schema_AppBlocks"></a>
<a id="tocSappblocks"></a>
<a id="tocsappblocks"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "Description": {},
    "DisplayName": {},
    "SourceS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "SetupScriptDetails": {
      "ScriptS3Location": {
        "S3Bucket": {},
        "S3Key": {}
      },
      "ExecutablePath": {},
      "ExecutableParameters": {},
      "TimeoutInSeconds": {}
    },
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_AppVisibility">AppVisibility</h2>
<!-- backwards compatibility -->
<a id="schemaappvisibility"></a>
<a id="schema_AppVisibility"></a>
<a id="tocSappvisibility"></a>
<a id="tocsappvisibility"></a>

```json
"ALL"
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

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

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

<h2 id="tocS_Platforms">Platforms</h2>
<!-- backwards compatibility -->
<a id="schemaplatforms"></a>
<a id="schema_Platforms"></a>
<a id="tocSplatforms"></a>
<a id="tocsplatforms"></a>

```json
[
  "WINDOWS"
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

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "Name": {},
  "DisplayName": {},
  "IconURL": {},
  "LaunchPath": {},
  "LaunchParameters": {},
  "Enabled": {},
  "Metadata": {
    "property1": "string",
    "property2": "string"
  },
  "WorkingDirectory": {},
  "Description": {},
  "Arn": {},
  "AppBlockArn": {},
  "IconS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "Platforms": {},
  "InstanceFamilies": {},
  "CreatedTime": {}
}
```

Describes an application in the application catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|DisplayName|object|false|none|none|
|IconURL|object|false|none|none|
|LaunchPath|object|false|none|none|
|LaunchParameters|object|false|none|none|
|Enabled|object|false|none|none|
|Metadata|object|false|none|none|
|WorkingDirectory|object|false|none|none|
|Description|object|false|none|none|
|Arn|object|false|none|none|
|AppBlockArn|object|false|none|none|
|IconS3Location|object|false|none|none|
|Platforms|object|false|none|none|
|InstanceFamilies|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_ApplicationAttribute">ApplicationAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationattribute"></a>
<a id="schema_ApplicationAttribute"></a>
<a id="tocSapplicationattribute"></a>
<a id="tocsapplicationattribute"></a>

```json
"LAUNCH_PARAMETERS"
```

<h2 id="tocS_ApplicationAttributes">ApplicationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationattributes"></a>
<a id="schema_ApplicationAttributes"></a>
<a id="tocSapplicationattributes"></a>
<a id="tocsapplicationattributes"></a>

```json
[
  "LAUNCH_PARAMETERS"
]
```

<h2 id="tocS_ApplicationFleetAssociation">ApplicationFleetAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationfleetassociation"></a>
<a id="schema_ApplicationFleetAssociation"></a>
<a id="tocSapplicationfleetassociation"></a>
<a id="tocsapplicationfleetassociation"></a>

```json
{
  "FleetName": {},
  "ApplicationArn": {}
}
```

Describes the application fleet association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|true|none|none|
|ApplicationArn|object|true|none|none|

<h2 id="tocS_ApplicationFleetAssociationList">ApplicationFleetAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationfleetassociationlist"></a>
<a id="schema_ApplicationFleetAssociationList"></a>
<a id="tocSapplicationfleetassociationlist"></a>
<a id="tocsapplicationfleetassociationlist"></a>

```json
[
  {
    "FleetName": {},
    "ApplicationArn": {}
  }
]
```

<h2 id="tocS_SettingsGroup">SettingsGroup</h2>
<!-- backwards compatibility -->
<a id="schemasettingsgroup"></a>
<a id="schema_SettingsGroup"></a>
<a id="tocSsettingsgroup"></a>
<a id="tocssettingsgroup"></a>

```json
"string"
```

<h2 id="tocS_ApplicationSettings">ApplicationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsettings"></a>
<a id="schema_ApplicationSettings"></a>
<a id="tocSapplicationsettings"></a>
<a id="tocsapplicationsettings"></a>

```json
{
  "Enabled": {},
  "SettingsGroup": {}
}
```

The persistent application settings for users of a stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|SettingsGroup|object|false|none|none|

<h2 id="tocS_ApplicationSettingsResponse">ApplicationSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsettingsresponse"></a>
<a id="schema_ApplicationSettingsResponse"></a>
<a id="tocSapplicationsettingsresponse"></a>
<a id="tocsapplicationsettingsresponse"></a>

```json
{
  "Enabled": {},
  "SettingsGroup": {},
  "S3BucketName": {}
}
```

Describes the persistent application settings for users of a stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|SettingsGroup|object|false|none|none|
|S3BucketName|object|false|none|none|

<h2 id="tocS_Applications">Applications</h2>
<!-- backwards compatibility -->
<a id="schemaapplications"></a>
<a id="schema_Applications"></a>
<a id="tocSapplications"></a>
<a id="tocsapplications"></a>

```json
[
  {
    "Name": {},
    "DisplayName": {},
    "IconURL": {},
    "LaunchPath": {},
    "LaunchParameters": {},
    "Enabled": {},
    "Metadata": {
      "property1": "string",
      "property2": "string"
    },
    "WorkingDirectory": {},
    "Description": {},
    "Arn": {},
    "AppBlockArn": {},
    "IconS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "Platforms": {},
    "InstanceFamilies": {},
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_AppstreamAgentVersion">AppstreamAgentVersion</h2>
<!-- backwards compatibility -->
<a id="schemaappstreamagentversion"></a>
<a id="schema_AppstreamAgentVersion"></a>
<a id="tocSappstreamagentversion"></a>
<a id="tocsappstreamagentversion"></a>

```json
"string"
```

<h2 id="tocS_ArnList">ArnList</h2>
<!-- backwards compatibility -->
<a id="schemaarnlist"></a>
<a id="schema_ArnList"></a>
<a id="tocSarnlist"></a>
<a id="tocsarnlist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_AuthenticationType">AuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtype"></a>
<a id="schema_AuthenticationType"></a>
<a id="tocSauthenticationtype"></a>
<a id="tocsauthenticationtype"></a>

```json
"API"
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

<h2 id="tocS_AwsAccountIdList">AwsAccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountidlist"></a>
<a id="schema_AwsAccountIdList"></a>
<a id="tocSawsaccountidlist"></a>
<a id="tocsawsaccountidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserStackAssociationList">UserStackAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemauserstackassociationlist"></a>
<a id="schema_UserStackAssociationList"></a>
<a id="tocSuserstackassociationlist"></a>
<a id="tocsuserstackassociationlist"></a>

```json
[
  {
    "StackName": {},
    "UserName": {},
    "AuthenticationType": {},
    "SendEmailNotification": {}
  }
]
```

<h2 id="tocS_UserStackAssociationErrorList">UserStackAssociationErrorList</h2>
<!-- backwards compatibility -->
<a id="schemauserstackassociationerrorlist"></a>
<a id="schema_UserStackAssociationErrorList"></a>
<a id="tocSuserstackassociationerrorlist"></a>
<a id="tocsuserstackassociationerrorlist"></a>

```json
[
  {
    "UserStackAssociation": {
      "StackName": {},
      "UserName": {},
      "AuthenticationType": {},
      "SendEmailNotification": {}
    },
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
```

<h2 id="tocS_CertificateBasedAuthStatus">CertificateBasedAuthStatus</h2>
<!-- backwards compatibility -->
<a id="schemacertificatebasedauthstatus"></a>
<a id="schema_CertificateBasedAuthStatus"></a>
<a id="tocScertificatebasedauthstatus"></a>
<a id="tocscertificatebasedauthstatus"></a>

```json
"DISABLED"
```

<h2 id="tocS_CertificateBasedAuthProperties">CertificateBasedAuthProperties</h2>
<!-- backwards compatibility -->
<a id="schemacertificatebasedauthproperties"></a>
<a id="schema_CertificateBasedAuthProperties"></a>
<a id="tocScertificatebasedauthproperties"></a>
<a id="tocscertificatebasedauthproperties"></a>

```json
{
  "Status": {},
  "CertificateAuthorityArn": {}
}
```

The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_ComputeCapacity">ComputeCapacity</h2>
<!-- backwards compatibility -->
<a id="schemacomputecapacity"></a>
<a id="schema_ComputeCapacity"></a>
<a id="tocScomputecapacity"></a>
<a id="tocscomputecapacity"></a>

```json
{
  "DesiredInstances": {}
}
```

Describes the capacity for a fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DesiredInstances|object|true|none|none|

<h2 id="tocS_ComputeCapacityStatus">ComputeCapacityStatus</h2>
<!-- backwards compatibility -->
<a id="schemacomputecapacitystatus"></a>
<a id="schema_ComputeCapacityStatus"></a>
<a id="tocScomputecapacitystatus"></a>
<a id="tocscomputecapacitystatus"></a>

```json
{
  "Desired": {},
  "Running": {},
  "InUse": {},
  "Available": {}
}
```

Describes the capacity status for a fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Desired|object|true|none|none|
|Running|object|false|none|none|
|InUse|object|false|none|none|
|Available|object|false|none|none|

<h2 id="tocS_RegionName">RegionName</h2>
<!-- backwards compatibility -->
<a id="schemaregionname"></a>
<a id="schema_RegionName"></a>
<a id="tocSregionname"></a>
<a id="tocsregionname"></a>

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

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

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

<h2 id="tocS_DirectoryName">DirectoryName</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryname"></a>
<a id="schema_DirectoryName"></a>
<a id="tocSdirectoryname"></a>
<a id="tocsdirectoryname"></a>

```json
"string"
```

<h2 id="tocS_OrganizationalUnitDistinguishedNamesList">OrganizationalUnitDistinguishedNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitdistinguishednameslist"></a>
<a id="schema_OrganizationalUnitDistinguishedNamesList"></a>
<a id="tocSorganizationalunitdistinguishednameslist"></a>
<a id="tocsorganizationalunitdistinguishednameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ServiceAccountCredentials">ServiceAccountCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccountcredentials"></a>
<a id="schema_ServiceAccountCredentials"></a>
<a id="tocSserviceaccountcredentials"></a>
<a id="tocsserviceaccountcredentials"></a>

```json
{
  "AccountName": {},
  "AccountPassword": {}
}
```

Describes the credentials for the service account used by the fleet or image builder to connect to the directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountName|object|true|none|none|
|AccountPassword|object|true|none|none|

<h2 id="tocS_DirectoryConfig">DirectoryConfig</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfig"></a>
<a id="schema_DirectoryConfig"></a>
<a id="tocSdirectoryconfig"></a>
<a id="tocsdirectoryconfig"></a>

```json
{
  "DirectoryName": {},
  "OrganizationalUnitDistinguishedNames": {},
  "ServiceAccountCredentials": {
    "AccountName": {},
    "AccountPassword": {}
  },
  "CreatedTime": {},
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  }
}
```

Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryName|object|true|none|none|
|OrganizationalUnitDistinguishedNames|object|false|none|none|
|ServiceAccountCredentials|object|false|none|none|
|CreatedTime|object|false|none|none|
|CertificateBasedAuthProperties|object|false|none|none|

<h2 id="tocS_EntitlementAttributeList">EntitlementAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementattributelist"></a>
<a id="schema_EntitlementAttributeList"></a>
<a id="tocSentitlementattributelist"></a>
<a id="tocsentitlementattributelist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Entitlement">Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemaentitlement"></a>
<a id="schema_Entitlement"></a>
<a id="tocSentitlement"></a>
<a id="tocsentitlement"></a>

```json
{
  "Name": {},
  "StackName": {},
  "Description": {},
  "AppVisibility": {},
  "Attributes": {},
  "CreatedTime": {},
  "LastModifiedTime": {}
}
```

Specifies an entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|StackName|object|true|none|none|
|Description|object|false|none|none|
|AppVisibility|object|true|none|none|
|Attributes|object|true|none|none|
|CreatedTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_FleetType">FleetType</h2>
<!-- backwards compatibility -->
<a id="schemafleettype"></a>
<a id="schema_FleetType"></a>
<a id="tocSfleettype"></a>
<a id="tocsfleettype"></a>

```json
"ALWAYS_ON"
```

<h2 id="tocS_VpcConfig">VpcConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VpcConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

Describes VPC configuration information for fleets and image builders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_DomainJoinInfo">DomainJoinInfo</h2>
<!-- backwards compatibility -->
<a id="schemadomainjoininfo"></a>
<a id="schema_DomainJoinInfo"></a>
<a id="tocSdomainjoininfo"></a>
<a id="tocsdomainjoininfo"></a>

```json
{
  "DirectoryName": {},
  "OrganizationalUnitDistinguishedName": {}
}
```

Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryName|object|false|none|none|
|OrganizationalUnitDistinguishedName|object|false|none|none|

<h2 id="tocS_StreamView">StreamView</h2>
<!-- backwards compatibility -->
<a id="schemastreamview"></a>
<a id="schema_StreamView"></a>
<a id="tocSstreamview"></a>
<a id="tocsstreamview"></a>

```json
"APP"
```

<h2 id="tocS_PlatformType">PlatformType</h2>
<!-- backwards compatibility -->
<a id="schemaplatformtype"></a>
<a id="schema_PlatformType"></a>
<a id="tocSplatformtype"></a>
<a id="tocsplatformtype"></a>

```json
"WINDOWS"
```

<h2 id="tocS_UsbDeviceFilterStrings">UsbDeviceFilterStrings</h2>
<!-- backwards compatibility -->
<a id="schemausbdevicefilterstrings"></a>
<a id="schema_UsbDeviceFilterStrings"></a>
<a id="tocSusbdevicefilterstrings"></a>
<a id="tocsusbdevicefilterstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Fleet">Fleet</h2>
<!-- backwards compatibility -->
<a id="schemafleet"></a>
<a id="schema_Fleet"></a>
<a id="tocSfleet"></a>
<a id="tocsfleet"></a>

```json
{
  "Arn": {},
  "Name": {},
  "DisplayName": {},
  "Description": {},
  "ImageName": {},
  "ImageArn": {},
  "InstanceType": {},
  "FleetType": {},
  "ComputeCapacityStatus": {
    "Desired": {},
    "Running": {},
    "InUse": {},
    "Available": {}
  },
  "MaxUserDurationInSeconds": {},
  "DisconnectTimeoutInSeconds": {},
  "State": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "CreatedTime": {},
  "FleetErrors": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "IdleDisconnectTimeoutInSeconds": {},
  "IamRoleArn": {},
  "StreamView": {},
  "Platform": {},
  "MaxConcurrentSessions": {},
  "UsbDeviceFilterStrings": {},
  "SessionScriptS3Location": {
    "S3Bucket": {},
    "S3Key": {}
  }
}
```

Describes a fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Name|object|true|none|none|
|DisplayName|object|false|none|none|
|Description|object|false|none|none|
|ImageName|object|false|none|none|
|ImageArn|object|false|none|none|
|InstanceType|object|true|none|none|
|FleetType|object|false|none|none|
|ComputeCapacityStatus|object|true|none|none|
|MaxUserDurationInSeconds|object|false|none|none|
|DisconnectTimeoutInSeconds|object|false|none|none|
|State|object|true|none|none|
|VpcConfig|object|false|none|none|
|CreatedTime|object|false|none|none|
|FleetErrors|object|false|none|none|
|EnableDefaultInternetAccess|object|false|none|none|
|DomainJoinInfo|object|false|none|none|
|IdleDisconnectTimeoutInSeconds|object|false|none|none|
|IamRoleArn|object|false|none|none|
|StreamView|object|false|none|none|
|Platform|object|false|none|none|
|MaxConcurrentSessions|object|false|none|none|
|UsbDeviceFilterStrings|object|false|none|none|
|SessionScriptS3Location|object|false|none|none|

<h2 id="tocS_ImageBuilder">ImageBuilder</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuilder"></a>
<a id="schema_ImageBuilder"></a>
<a id="tocSimagebuilder"></a>
<a id="tocsimagebuilder"></a>

```json
{
  "Name": {},
  "Arn": {},
  "ImageArn": {},
  "Description": {},
  "DisplayName": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "InstanceType": {},
  "Platform": {},
  "IamRoleArn": {},
  "State": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  },
  "CreatedTime": {},
  "EnableDefaultInternetAccess": {},
  "DomainJoinInfo": {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedName": {}
  },
  "NetworkAccessConfiguration": {
    "EniPrivateIpAddress": {},
    "EniId": {}
  },
  "ImageBuilderErrors": {},
  "AppstreamAgentVersion": {},
  "AccessEndpoints": {}
}
```

Describes a virtual machine that is used to create an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Arn|object|false|none|none|
|ImageArn|object|false|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|VpcConfig|object|false|none|none|
|InstanceType|object|false|none|none|
|Platform|object|false|none|none|
|IamRoleArn|object|false|none|none|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|
|CreatedTime|object|false|none|none|
|EnableDefaultInternetAccess|object|false|none|none|
|DomainJoinInfo|object|false|none|none|
|NetworkAccessConfiguration|[NetworkAccessConfiguration](#schemanetworkaccessconfiguration)|false|none|Describes the network details of the fleet or image builder instance.|
|ImageBuilderErrors|object|false|none|none|
|AppstreamAgentVersion|object|false|none|none|
|AccessEndpoints|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_StorageConnectorList">StorageConnectorList</h2>
<!-- backwards compatibility -->
<a id="schemastorageconnectorlist"></a>
<a id="schema_StorageConnectorList"></a>
<a id="tocSstorageconnectorlist"></a>
<a id="tocsstorageconnectorlist"></a>

```json
[
  {
    "ConnectorType": {},
    "ResourceIdentifier": {},
    "Domains": {}
  }
]
```

The storage connectors.

<h2 id="tocS_RedirectURL">RedirectURL</h2>
<!-- backwards compatibility -->
<a id="schemaredirecturl"></a>
<a id="schema_RedirectURL"></a>
<a id="tocSredirecturl"></a>
<a id="tocsredirecturl"></a>

```json
"string"
```

<h2 id="tocS_FeedbackURL">FeedbackURL</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackurl"></a>
<a id="schema_FeedbackURL"></a>
<a id="tocSfeedbackurl"></a>
<a id="tocsfeedbackurl"></a>

```json
"string"
```

<h2 id="tocS_UserSettingList">UserSettingList</h2>
<!-- backwards compatibility -->
<a id="schemausersettinglist"></a>
<a id="schema_UserSettingList"></a>
<a id="tocSusersettinglist"></a>
<a id="tocsusersettinglist"></a>

```json
[
  {
    "Action": {},
    "Permission": {}
  }
]
```

<h2 id="tocS_EmbedHostDomains">EmbedHostDomains</h2>
<!-- backwards compatibility -->
<a id="schemaembedhostdomains"></a>
<a id="schema_EmbedHostDomains"></a>
<a id="tocSembedhostdomains"></a>
<a id="tocsembedhostdomains"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StreamingExperienceSettings">StreamingExperienceSettings</h2>
<!-- backwards compatibility -->
<a id="schemastreamingexperiencesettings"></a>
<a id="schema_StreamingExperienceSettings"></a>
<a id="tocSstreamingexperiencesettings"></a>
<a id="tocsstreamingexperiencesettings"></a>

```json
{
  "PreferredProtocol": {}
}
```

The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreferredProtocol|object|false|none|none|

<h2 id="tocS_Stack">Stack</h2>
<!-- backwards compatibility -->
<a id="schemastack"></a>
<a id="schema_Stack"></a>
<a id="tocSstack"></a>
<a id="tocsstack"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Description": {},
  "DisplayName": {},
  "CreatedTime": {},
  "StorageConnectors": {},
  "RedirectURL": {},
  "FeedbackURL": {},
  "StackErrors": {},
  "UserSettings": {},
  "ApplicationSettings": {
    "Enabled": {},
    "SettingsGroup": {},
    "S3BucketName": {}
  },
  "AccessEndpoints": {},
  "EmbedHostDomains": {},
  "StreamingExperienceSettings": {
    "PreferredProtocol": {}
  }
}
```

Describes a stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|DisplayName|object|false|none|none|
|CreatedTime|object|false|none|none|
|StorageConnectors|object|false|none|none|
|RedirectURL|object|false|none|none|
|FeedbackURL|object|false|none|none|
|StackErrors|object|false|none|none|
|UserSettings|object|false|none|none|
|ApplicationSettings|object|false|none|none|
|AccessEndpoints|object|false|none|none|
|EmbedHostDomains|object|false|none|none|
|StreamingExperienceSettings|object|false|none|none|

<h2 id="tocS_StreamingUrlUserId">StreamingUrlUserId</h2>
<!-- backwards compatibility -->
<a id="schemastreamingurluserid"></a>
<a id="schema_StreamingUrlUserId"></a>
<a id="tocSstreamingurluserid"></a>
<a id="tocsstreamingurluserid"></a>

```json
"string"
```

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "Name": {},
  "Arn": {},
  "BaseImageArn": {},
  "DisplayName": {},
  "State": {},
  "Visibility": {},
  "ImageBuilderSupported": {},
  "ImageBuilderName": {},
  "Platform": {},
  "Description": {},
  "StateChangeReason": {
    "Code": {},
    "Message": {}
  },
  "Applications": {},
  "CreatedTime": {},
  "PublicBaseImageReleasedDate": {},
  "AppstreamAgentVersion": {},
  "ImagePermissions": {
    "allowFleet": {},
    "allowImageBuilder": {}
  },
  "ImageErrors": {}
}
```

Describes an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Arn|object|false|none|none|
|BaseImageArn|object|false|none|none|
|DisplayName|object|false|none|none|
|State|object|false|none|none|
|Visibility|object|false|none|none|
|ImageBuilderSupported|object|false|none|none|
|ImageBuilderName|object|false|none|none|
|Platform|object|false|none|none|
|Description|object|false|none|none|
|StateChangeReason|object|false|none|none|
|Applications|object|false|none|none|
|CreatedTime|object|false|none|none|
|PublicBaseImageReleasedDate|object|false|none|none|
|AppstreamAgentVersion|object|false|none|none|
|ImagePermissions|object|false|none|none|
|ImageErrors|object|false|none|none|

<h2 id="tocS_UsageReportSchedule">UsageReportSchedule</h2>
<!-- backwards compatibility -->
<a id="schemausagereportschedule"></a>
<a id="schema_UsageReportSchedule"></a>
<a id="tocSusagereportschedule"></a>
<a id="tocsusagereportschedule"></a>

```json
"DAILY"
```

<h2 id="tocS_Username">Username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_Username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"password"
```

<h2 id="tocS_MessageAction">MessageAction</h2>
<!-- backwards compatibility -->
<a id="schemamessageaction"></a>
<a id="schema_MessageAction"></a>
<a id="tocSmessageaction"></a>
<a id="tocsmessageaction"></a>

```json
"SUPPRESS"
```

<h2 id="tocS_UserAttributeValue">UserAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemauserattributevalue"></a>
<a id="schema_UserAttributeValue"></a>
<a id="tocSuserattributevalue"></a>
<a id="tocsuserattributevalue"></a>

```json
"password"
```

<h2 id="tocS_DirectoryNameList">DirectoryNameList</h2>
<!-- backwards compatibility -->
<a id="schemadirectorynamelist"></a>
<a id="schema_DirectoryNameList"></a>
<a id="tocSdirectorynamelist"></a>
<a id="tocsdirectorynamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DirectoryConfigList">DirectoryConfigList</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfiglist"></a>
<a id="schema_DirectoryConfigList"></a>
<a id="tocSdirectoryconfiglist"></a>
<a id="tocsdirectoryconfiglist"></a>

```json
[
  {
    "DirectoryName": {},
    "OrganizationalUnitDistinguishedNames": {},
    "ServiceAccountCredentials": {
      "AccountName": {},
      "AccountPassword": {}
    },
    "CreatedTime": {},
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
    }
  }
]
```

<h2 id="tocS_EntitlementList">EntitlementList</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementlist"></a>
<a id="schema_EntitlementList"></a>
<a id="tocSentitlementlist"></a>
<a id="tocsentitlementlist"></a>

```json
[
  {
    "Name": {},
    "StackName": {},
    "Description": {},
    "AppVisibility": {},
    "Attributes": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_FleetList">FleetList</h2>
<!-- backwards compatibility -->
<a id="schemafleetlist"></a>
<a id="schema_FleetList"></a>
<a id="tocSfleetlist"></a>
<a id="tocsfleetlist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "DisplayName": {},
    "Description": {},
    "ImageName": {},
    "ImageArn": {},
    "InstanceType": {},
    "FleetType": {},
    "ComputeCapacityStatus": {
      "Desired": {},
      "Running": {},
      "InUse": {},
      "Available": {}
    },
    "MaxUserDurationInSeconds": {},
    "DisconnectTimeoutInSeconds": {},
    "State": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "CreatedTime": {},
    "FleetErrors": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "IdleDisconnectTimeoutInSeconds": {},
    "IamRoleArn": {},
    "StreamView": {},
    "Platform": {},
    "MaxConcurrentSessions": {},
    "UsbDeviceFilterStrings": {},
    "SessionScriptS3Location": {
      "S3Bucket": {},
      "S3Key": {}
    }
  }
]
```

The fleets.

<h2 id="tocS_ImageBuilderList">ImageBuilderList</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuilderlist"></a>
<a id="schema_ImageBuilderList"></a>
<a id="tocSimagebuilderlist"></a>
<a id="tocsimagebuilderlist"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "ImageArn": {},
    "Description": {},
    "DisplayName": {},
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InstanceType": {},
    "Platform": {},
    "IamRoleArn": {},
    "State": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "CreatedTime": {},
    "EnableDefaultInternetAccess": {},
    "DomainJoinInfo": {
      "DirectoryName": {},
      "OrganizationalUnitDistinguishedName": {}
    },
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    },
    "ImageBuilderErrors": {},
    "AppstreamAgentVersion": {},
    "AccessEndpoints": {}
  }
]
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_SharedImagePermissionsList">SharedImagePermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemasharedimagepermissionslist"></a>
<a id="schema_SharedImagePermissionsList"></a>
<a id="tocSsharedimagepermissionslist"></a>
<a id="tocssharedimagepermissionslist"></a>

```json
[
  {
    "sharedAccountId": {},
    "imagePermissions": {
      "allowFleet": {},
      "allowImageBuilder": {}
    }
  }
]
```

<h2 id="tocS_DescribeImagesMaxResults">DescribeImagesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagesmaxresults"></a>
<a id="schema_DescribeImagesMaxResults"></a>
<a id="tocSdescribeimagesmaxresults"></a>
<a id="tocsdescribeimagesmaxresults"></a>

```json
0
```

<h2 id="tocS_VisibilityType">VisibilityType</h2>
<!-- backwards compatibility -->
<a id="schemavisibilitytype"></a>
<a id="schema_VisibilityType"></a>
<a id="tocSvisibilitytype"></a>
<a id="tocsvisibilitytype"></a>

```json
"PUBLIC"
```

<h2 id="tocS_ImageList">ImageList</h2>
<!-- backwards compatibility -->
<a id="schemaimagelist"></a>
<a id="schema_ImageList"></a>
<a id="tocSimagelist"></a>
<a id="tocsimagelist"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "BaseImageArn": {},
    "DisplayName": {},
    "State": {},
    "Visibility": {},
    "ImageBuilderSupported": {},
    "ImageBuilderName": {},
    "Platform": {},
    "Description": {},
    "StateChangeReason": {
      "Code": {},
      "Message": {}
    },
    "Applications": {},
    "CreatedTime": {},
    "PublicBaseImageReleasedDate": {},
    "AppstreamAgentVersion": {},
    "ImagePermissions": {
      "allowFleet": {},
      "allowImageBuilder": {}
    },
    "ImageErrors": {}
  }
]
```

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_SessionList">SessionList</h2>
<!-- backwards compatibility -->
<a id="schemasessionlist"></a>
<a id="schema_SessionList"></a>
<a id="tocSsessionlist"></a>
<a id="tocssessionlist"></a>

```json
[
  {
    "Id": {},
    "UserId": {},
    "StackName": {},
    "FleetName": {},
    "State": {},
    "ConnectionState": {},
    "StartTime": {},
    "MaxExpirationTime": {},
    "AuthenticationType": {},
    "NetworkAccessConfiguration": {
      "EniPrivateIpAddress": {},
      "EniId": {}
    }
  }
]
```

List of sessions.

<h2 id="tocS_StackList">StackList</h2>
<!-- backwards compatibility -->
<a id="schemastacklist"></a>
<a id="schema_StackList"></a>
<a id="tocSstacklist"></a>
<a id="tocsstacklist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "Description": {},
    "DisplayName": {},
    "CreatedTime": {},
    "StorageConnectors": {},
    "RedirectURL": {},
    "FeedbackURL": {},
    "StackErrors": {},
    "UserSettings": {},
    "ApplicationSettings": {
      "Enabled": {},
      "SettingsGroup": {},
      "S3BucketName": {}
    },
    "AccessEndpoints": {},
    "EmbedHostDomains": {},
    "StreamingExperienceSettings": {
      "PreferredProtocol": {}
    }
  }
]
```

The stacks.

<h2 id="tocS_UsageReportSubscriptionList">UsageReportSubscriptionList</h2>
<!-- backwards compatibility -->
<a id="schemausagereportsubscriptionlist"></a>
<a id="schema_UsageReportSubscriptionList"></a>
<a id="tocSusagereportsubscriptionlist"></a>
<a id="tocsusagereportsubscriptionlist"></a>

```json
[
  {
    "S3BucketName": {},
    "Schedule": {},
    "LastGeneratedReportDate": {},
    "SubscriptionErrors": {}
  }
]
```

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
[
  {
    "Arn": {},
    "UserName": {},
    "Enabled": {},
    "Status": {},
    "FirstName": {},
    "LastName": {},
    "CreatedTime": {},
    "AuthenticationType": {}
  }
]
```

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"string"
```

GSuite domain for GDrive integration.

<h2 id="tocS_OrganizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitdistinguishedname"></a>
<a id="schema_OrganizationalUnitDistinguishedName"></a>
<a id="tocSorganizationalunitdistinguishedname"></a>
<a id="tocsorganizationalunitdistinguishedname"></a>

```json
"string"
```

<h2 id="tocS_DomainList">DomainList</h2>
<!-- backwards compatibility -->
<a id="schemadomainlist"></a>
<a id="schema_DomainList"></a>
<a id="tocSdomainlist"></a>
<a id="tocsdomainlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EmbedHostDomain">EmbedHostDomain</h2>
<!-- backwards compatibility -->
<a id="schemaembedhostdomain"></a>
<a id="schema_EmbedHostDomain"></a>
<a id="tocSembedhostdomain"></a>
<a id="tocsembedhostdomain"></a>

```json
"string"
```

Specifies a valid domain that can embed AppStream. Valid examples include: ["testorigin.tt--com", "testingorigin.com.us", "test.com.us"] Invalid examples include: ["test,com", ".com", "h*llo.com". ""]

<h2 id="tocS_EntitledApplication">EntitledApplication</h2>
<!-- backwards compatibility -->
<a id="schemaentitledapplication"></a>
<a id="schema_EntitledApplication"></a>
<a id="tocSentitledapplication"></a>
<a id="tocsentitledapplication"></a>

```json
{
  "ApplicationIdentifier": {}
}
```

The application associated to an entitlement. Access is controlled based on user attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationIdentifier|object|true|none|none|

<h2 id="tocS_EntitledApplicationList">EntitledApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemaentitledapplicationlist"></a>
<a id="schema_EntitledApplicationList"></a>
<a id="tocSentitledapplicationlist"></a>
<a id="tocsentitledapplicationlist"></a>

```json
[
  {
    "ApplicationIdentifier": {}
  }
]
```

<h2 id="tocS_EntitlementAttribute">EntitlementAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementattribute"></a>
<a id="schema_EntitlementAttribute"></a>
<a id="tocSentitlementattribute"></a>
<a id="tocsentitlementattribute"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

An attribute associated with an entitlement. Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to an Amazon AppStream 2.0 SAML application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_FleetState">FleetState</h2>
<!-- backwards compatibility -->
<a id="schemafleetstate"></a>
<a id="schema_FleetState"></a>
<a id="tocSfleetstate"></a>
<a id="tocsfleetstate"></a>

```json
"STARTING"
```

<h2 id="tocS_FleetErrors">FleetErrors</h2>
<!-- backwards compatibility -->
<a id="schemafleeterrors"></a>
<a id="schema_FleetErrors"></a>
<a id="tocSfleeterrors"></a>
<a id="tocsfleeterrors"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_FleetAttribute">FleetAttribute</h2>
<!-- backwards compatibility -->
<a id="schemafleetattribute"></a>
<a id="schema_FleetAttribute"></a>
<a id="tocSfleetattribute"></a>
<a id="tocsfleetattribute"></a>

```json
"VPC_CONFIGURATION"
```

The fleet attribute.

<h2 id="tocS_FleetAttributes">FleetAttributes</h2>
<!-- backwards compatibility -->
<a id="schemafleetattributes"></a>
<a id="schema_FleetAttributes"></a>
<a id="tocSfleetattributes"></a>
<a id="tocsfleetattributes"></a>

```json
[
  "VPC_CONFIGURATION"
]
```

The fleet attributes.

<h2 id="tocS_FleetErrorCode">FleetErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemafleeterrorcode"></a>
<a id="schema_FleetErrorCode"></a>
<a id="tocSfleeterrorcode"></a>
<a id="tocsfleeterrorcode"></a>

```json
"IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"
```

<h2 id="tocS_FleetError">FleetError</h2>
<!-- backwards compatibility -->
<a id="schemafleeterror"></a>
<a id="schema_FleetError"></a>
<a id="tocSfleeterror"></a>
<a id="tocsfleeterror"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes a fleet error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_ImageState">ImageState</h2>
<!-- backwards compatibility -->
<a id="schemaimagestate"></a>
<a id="schema_ImageState"></a>
<a id="tocSimagestate"></a>
<a id="tocsimagestate"></a>

```json
"PENDING"
```

<h2 id="tocS_ImageStateChangeReason">ImageStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemaimagestatechangereason"></a>
<a id="schema_ImageStateChangeReason"></a>
<a id="tocSimagestatechangereason"></a>
<a id="tocsimagestatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

Describes the reason why the last image state change occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_ImagePermissions">ImagePermissions</h2>
<!-- backwards compatibility -->
<a id="schemaimagepermissions"></a>
<a id="schema_ImagePermissions"></a>
<a id="tocSimagepermissions"></a>
<a id="tocsimagepermissions"></a>

```json
{
  "allowFleet": {},
  "allowImageBuilder": {}
}
```

Describes the permissions for an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowFleet|object|false|none|none|
|allowImageBuilder|object|false|none|none|

<h2 id="tocS_ResourceErrors">ResourceErrors</h2>
<!-- backwards compatibility -->
<a id="schemaresourceerrors"></a>
<a id="schema_ResourceErrors"></a>
<a id="tocSresourceerrors"></a>
<a id="tocsresourceerrors"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {},
    "ErrorTimestamp": {}
  }
]
```

<h2 id="tocS_ImageBuilderState">ImageBuilderState</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuilderstate"></a>
<a id="schema_ImageBuilderState"></a>
<a id="tocSimagebuilderstate"></a>
<a id="tocsimagebuilderstate"></a>

```json
"PENDING"
```

<h2 id="tocS_ImageBuilderStateChangeReason">ImageBuilderStateChangeReason</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuilderstatechangereason"></a>
<a id="schema_ImageBuilderStateChangeReason"></a>
<a id="tocSimagebuilderstatechangereason"></a>
<a id="tocsimagebuilderstatechangereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

Describes the reason why the last image builder state change occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_NetworkAccessConfiguration">NetworkAccessConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkaccessconfiguration"></a>
<a id="schema_NetworkAccessConfiguration"></a>
<a id="tocSnetworkaccessconfiguration"></a>
<a id="tocsnetworkaccessconfiguration"></a>

```json
{
  "EniPrivateIpAddress": {},
  "EniId": {}
}
```

Describes the network details of the fleet or image builder instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EniPrivateIpAddress|object|false|none|none|
|EniId|object|false|none|none|

<h2 id="tocS_ImageBuilderStateChangeReasonCode">ImageBuilderStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuilderstatechangereasoncode"></a>
<a id="schema_ImageBuilderStateChangeReasonCode"></a>
<a id="tocSimagebuilderstatechangereasoncode"></a>
<a id="tocsimagebuilderstatechangereasoncode"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_ImageStateChangeReasonCode">ImageStateChangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaimagestatechangereasoncode"></a>
<a id="schema_ImageStateChangeReasonCode"></a>
<a id="tocSimagestatechangereasoncode"></a>
<a id="tocsimagestatechangereasoncode"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_UsageReportExecutionErrorCode">UsageReportExecutionErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemausagereportexecutionerrorcode"></a>
<a id="schema_UsageReportExecutionErrorCode"></a>
<a id="tocSusagereportexecutionerrorcode"></a>
<a id="tocsusagereportexecutionerrorcode"></a>

```json
"RESOURCE_NOT_FOUND"
```

<h2 id="tocS_LastReportGenerationExecutionError">LastReportGenerationExecutionError</h2>
<!-- backwards compatibility -->
<a id="schemalastreportgenerationexecutionerror"></a>
<a id="schema_LastReportGenerationExecutionError"></a>
<a id="tocSlastreportgenerationexecutionerror"></a>
<a id="tocslastreportgenerationexecutionerror"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes the error that is returned when a usage report can't be generated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_LastReportGenerationExecutionErrors">LastReportGenerationExecutionErrors</h2>
<!-- backwards compatibility -->
<a id="schemalastreportgenerationexecutionerrors"></a>
<a id="schema_LastReportGenerationExecutionErrors"></a>
<a id="tocSlastreportgenerationexecutionerrors"></a>
<a id="tocslastreportgenerationexecutionerrors"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"ENABLED"
```

<h2 id="tocS_PreferredProtocol">PreferredProtocol</h2>
<!-- backwards compatibility -->
<a id="schemapreferredprotocol"></a>
<a id="schema_PreferredProtocol"></a>
<a id="tocSpreferredprotocol"></a>
<a id="tocspreferredprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_ResourceError">ResourceError</h2>
<!-- backwards compatibility -->
<a id="schemaresourceerror"></a>
<a id="schema_ResourceError"></a>
<a id="tocSresourceerror"></a>
<a id="tocsresourceerror"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {},
  "ErrorTimestamp": {}
}
```

Describes a resource error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ErrorTimestamp|object|false|none|none|

<h2 id="tocS_ResourceIdentifier">ResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifier"></a>
<a id="schema_ResourceIdentifier"></a>
<a id="tocSresourceidentifier"></a>
<a id="tocsresourceidentifier"></a>

```json
"string"
```

The ARN of the resource.

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

<h2 id="tocS_SecurityGroupIdList">SecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidlist"></a>
<a id="schema_SecurityGroupIdList"></a>
<a id="tocSsecuritygroupidlist"></a>
<a id="tocssecuritygroupidlist"></a>

```json
[
  "string"
]
```

The security group identifiers.

<h2 id="tocS_SessionState">SessionState</h2>
<!-- backwards compatibility -->
<a id="schemasessionstate"></a>
<a id="schema_SessionState"></a>
<a id="tocSsessionstate"></a>
<a id="tocssessionstate"></a>

```json
"ACTIVE"
```

Possible values for the state of a streaming session.

<h2 id="tocS_SessionConnectionState">SessionConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemasessionconnectionstate"></a>
<a id="schema_SessionConnectionState"></a>
<a id="tocSsessionconnectionstate"></a>
<a id="tocssessionconnectionstate"></a>

```json
"CONNECTED"
```

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "Id": {},
  "UserId": {},
  "StackName": {},
  "FleetName": {},
  "State": {},
  "ConnectionState": {},
  "StartTime": {},
  "MaxExpirationTime": {},
  "AuthenticationType": {},
  "NetworkAccessConfiguration": {
    "EniPrivateIpAddress": {},
    "EniId": {}
  }
}
```

Describes a streaming session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|UserId|object|true|none|none|
|StackName|object|true|none|none|
|FleetName|object|true|none|none|
|State|object|true|none|none|
|ConnectionState|object|false|none|none|
|StartTime|object|false|none|none|
|MaxExpirationTime|object|false|none|none|
|AuthenticationType|object|false|none|none|
|NetworkAccessConfiguration|object|false|none|none|

<h2 id="tocS_SharedImagePermissions">SharedImagePermissions</h2>
<!-- backwards compatibility -->
<a id="schemasharedimagepermissions"></a>
<a id="schema_SharedImagePermissions"></a>
<a id="tocSsharedimagepermissions"></a>
<a id="tocssharedimagepermissions"></a>

```json
{
  "sharedAccountId": {},
  "imagePermissions": {
    "allowFleet": {},
    "allowImageBuilder": {}
  }
}
```

Describes the permissions that are available to the specified AWS account for a shared image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sharedAccountId|object|true|none|none|
|imagePermissions|object|true|none|none|

<h2 id="tocS_StackErrors">StackErrors</h2>
<!-- backwards compatibility -->
<a id="schemastackerrors"></a>
<a id="schema_StackErrors"></a>
<a id="tocSstackerrors"></a>
<a id="tocsstackerrors"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

The stack errors.

<h2 id="tocS_StackAttribute">StackAttribute</h2>
<!-- backwards compatibility -->
<a id="schemastackattribute"></a>
<a id="schema_StackAttribute"></a>
<a id="tocSstackattribute"></a>
<a id="tocsstackattribute"></a>

```json
"STORAGE_CONNECTORS"
```

<h2 id="tocS_StackAttributes">StackAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastackattributes"></a>
<a id="schema_StackAttributes"></a>
<a id="tocSstackattributes"></a>
<a id="tocsstackattributes"></a>

```json
[
  "STORAGE_CONNECTORS"
]
```

<h2 id="tocS_StackErrorCode">StackErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemastackerrorcode"></a>
<a id="schema_StackErrorCode"></a>
<a id="tocSstackerrorcode"></a>
<a id="tocsstackerrorcode"></a>

```json
"STORAGE_CONNECTOR_ERROR"
```

<h2 id="tocS_StackError">StackError</h2>
<!-- backwards compatibility -->
<a id="schemastackerror"></a>
<a id="schema_StackError"></a>
<a id="tocSstackerror"></a>
<a id="tocsstackerror"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes a stack error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_StorageConnectorType">StorageConnectorType</h2>
<!-- backwards compatibility -->
<a id="schemastorageconnectortype"></a>
<a id="schema_StorageConnectorType"></a>
<a id="tocSstorageconnectortype"></a>
<a id="tocsstorageconnectortype"></a>

```json
"HOMEFOLDERS"
```

The type of storage connector.

<h2 id="tocS_StorageConnector">StorageConnector</h2>
<!-- backwards compatibility -->
<a id="schemastorageconnector"></a>
<a id="schema_StorageConnector"></a>
<a id="tocSstorageconnector"></a>
<a id="tocsstorageconnector"></a>

```json
{
  "ConnectorType": {},
  "ResourceIdentifier": {},
  "Domains": {}
}
```

Describes a connector that enables persistent storage for users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorType|object|true|none|none|
|ResourceIdentifier|object|false|none|none|
|Domains|object|false|none|none|

<h2 id="tocS_SubnetIdList">SubnetIdList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidlist"></a>
<a id="schema_SubnetIdList"></a>
<a id="tocSsubnetidlist"></a>
<a id="tocssubnetidlist"></a>

```json
[
  "string"
]
```

The subnet identifiers.

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_UsageReportSubscription">UsageReportSubscription</h2>
<!-- backwards compatibility -->
<a id="schemausagereportsubscription"></a>
<a id="schema_UsageReportSubscription"></a>
<a id="tocSusagereportsubscription"></a>
<a id="tocsusagereportsubscription"></a>

```json
{
  "S3BucketName": {},
  "Schedule": {},
  "LastGeneratedReportDate": {},
  "SubscriptionErrors": {}
}
```

Describes information about the usage report subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|false|none|none|
|Schedule|object|false|none|none|
|LastGeneratedReportDate|object|false|none|none|
|SubscriptionErrors|object|false|none|none|

<h2 id="tocS_UsbDeviceFilterString">UsbDeviceFilterString</h2>
<!-- backwards compatibility -->
<a id="schemausbdevicefilterstring"></a>
<a id="schema_UsbDeviceFilterString"></a>
<a id="tocSusbdevicefilterstring"></a>
<a id="tocsusbdevicefilterstring"></a>

```json
"string"
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "Arn": {},
  "UserName": {},
  "Enabled": {},
  "Status": {},
  "FirstName": {},
  "LastName": {},
  "CreatedTime": {},
  "AuthenticationType": {}
}
```

Describes a user in the user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|UserName|object|false|none|none|
|Enabled|object|false|none|none|
|Status|object|false|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|CreatedTime|object|false|none|none|
|AuthenticationType|object|true|none|none|

<h2 id="tocS_UserSetting">UserSetting</h2>
<!-- backwards compatibility -->
<a id="schemausersetting"></a>
<a id="schema_UserSetting"></a>
<a id="tocSusersetting"></a>
<a id="tocsusersetting"></a>

```json
{
  "Action": {},
  "Permission": {}
}
```

Describes an action and whether the action is enabled or disabled for users during their streaming sessions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|Permission|object|true|none|none|

<h2 id="tocS_UserStackAssociation">UserStackAssociation</h2>
<!-- backwards compatibility -->
<a id="schemauserstackassociation"></a>
<a id="schema_UserStackAssociation"></a>
<a id="tocSuserstackassociation"></a>
<a id="tocsuserstackassociation"></a>

```json
{
  "StackName": {},
  "UserName": {},
  "AuthenticationType": {},
  "SendEmailNotification": {}
}
```

Describes a user in the user pool and the associated stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|UserName|object|true|none|none|
|AuthenticationType|object|true|none|none|
|SendEmailNotification|object|false|none|none|

<h2 id="tocS_UserStackAssociationErrorCode">UserStackAssociationErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemauserstackassociationerrorcode"></a>
<a id="schema_UserStackAssociationErrorCode"></a>
<a id="tocSuserstackassociationerrorcode"></a>
<a id="tocsuserstackassociationerrorcode"></a>

```json
"STACK_NOT_FOUND"
```

<h2 id="tocS_UserStackAssociationError">UserStackAssociationError</h2>
<!-- backwards compatibility -->
<a id="schemauserstackassociationerror"></a>
<a id="schema_UserStackAssociationError"></a>
<a id="tocSuserstackassociationerror"></a>
<a id="tocsuserstackassociationerror"></a>

```json
{
  "UserStackAssociation": {
    "StackName": {},
    "UserName": {},
    "AuthenticationType": {},
    "SendEmailNotification": {}
  },
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes the error that is returned when a user can’t be associated with or disassociated from a stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserStackAssociation|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
