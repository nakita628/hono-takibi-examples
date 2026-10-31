<h1 id="aws-server-migration-service">AWS Server Migration Service v2016-10-24</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<important> <p> <b>Product update</b> </p> <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March 2023.</p> </important> <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a> </p> </li> </ul>

Base URLs:

* <a href="http://sms.us-east-1.amazonaws.com">http://sms.us-east-1.amazonaws.com</a> - The SMS multi-region endpoint

* <a href="https://sms.us-east-1.amazonaws.com">https://sms.us-east-1.amazonaws.com</a> - The SMS multi-region endpoint

* <a href="http://sms.cn-north-1.amazonaws.com.cn">http://sms.cn-north-1.amazonaws.com.cn</a> - The SMS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://sms.cn-north-1.amazonaws.com.cn">https://sms.cn-north-1.amazonaws.com.cn</a> - The SMS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sms/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-server-migration-service-default">Default</h1>

## CreateApp

<a id="opIdCreateApp"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.CreateApp' \
  -d '{
    "name": {},
    "description": {},
    "roleName": {},
    "clientToken": {},
    "serverGroups": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp`

Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "roleName": {},
  "clientToken": {},
  "serverGroups": {},
  "tags": {}
}
```

<h3 id="createapp-parameters">Parameters</h3>

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
|body|body|[CreateAppRequest](#schemacreateapprequest)|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|
|» roleName|body|object|false|none|
|» clientToken|body|object|false|none|
|» serverGroups|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.CreateApp|

> Example responses

> 200 Response

```json
{
  "appSummary": {
    "appId": {},
    "importedAppId": {},
    "name": {},
    "description": {},
    "status": {},
    "statusMessage": {},
    "replicationConfigurationStatus": {},
    "replicationStatus": {},
    "replicationStatusMessage": {},
    "latestReplicationTime": {},
    "launchConfigurationStatus": {},
    "launchStatus": {},
    "launchStatusMessage": {},
    "launchDetails": {
      "latestLaunchTime": {},
      "stackName": {},
      "stackId": {}
    },
    "creationTime": {},
    "lastModified": {},
    "roleName": {},
    "totalServerGroups": {},
    "totalServers": {}
  },
  "serverGroups": {},
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

<h3 id="createapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAppResponse](#schemacreateappresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReplicationJob

<a id="opIdCreateReplicationJob"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.CreateReplicationJob' \
  -d '{
    "serverId": {},
    "seedReplicationTime": {},
    "frequency": {},
    "runOnce": {},
    "licenseType": {},
    "roleName": {},
    "description": {},
    "numberOfRecentAmisToKeep": {},
    "encrypted": {},
    "kmsKeyId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob`

Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).

> Body parameter

```json
{
  "serverId": {},
  "seedReplicationTime": {},
  "frequency": {},
  "runOnce": {},
  "licenseType": {},
  "roleName": {},
  "description": {},
  "numberOfRecentAmisToKeep": {},
  "encrypted": {},
  "kmsKeyId": {}
}
```

<h3 id="createreplicationjob-parameters">Parameters</h3>

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
|body|body|[CreateReplicationJobRequest](#schemacreatereplicationjobrequest)|true|none|
|» serverId|body|object|true|none|
|» seedReplicationTime|body|object|true|none|
|» frequency|body|object|false|none|
|» runOnce|body|object|false|none|
|» licenseType|body|object|false|none|
|» roleName|body|object|false|none|
|» description|body|object|false|none|
|» numberOfRecentAmisToKeep|body|object|false|none|
|» encrypted|body|object|false|none|
|» kmsKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.CreateReplicationJob|

> Example responses

> 200 Response

```json
{
  "replicationJobId": {}
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

<h3 id="createreplicationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReplicationJobResponse](#schemacreatereplicationjobresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|ServerCannotBeReplicatedException|[ServerCannotBeReplicatedException](#schemaservercannotbereplicatedexception)|
|485|485|ReplicationJobAlreadyExistsException|[ReplicationJobAlreadyExistsException](#schemareplicationjobalreadyexistsexception)|
|486|486|NoConnectorsAvailableException|[NoConnectorsAvailableException](#schemanoconnectorsavailableexception)|
|487|487|InternalError|[InternalError](#schemainternalerror)|
|488|488|TemporarilyUnavailableException|[TemporarilyUnavailableException](#schematemporarilyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApp

<a id="opIdDeleteApp"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.DeleteApp' \
  -d '{
    "appId": {},
    "forceStopAppReplication": {},
    "forceTerminateApp": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp`

Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.

> Body parameter

```json
{
  "appId": {},
  "forceStopAppReplication": {},
  "forceTerminateApp": {}
}
```

<h3 id="deleteapp-parameters">Parameters</h3>

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
|body|body|[DeleteAppRequest](#schemadeleteapprequest)|true|none|
|» appId|body|object|false|none|
|» forceStopAppReplication|body|object|false|none|
|» forceTerminateApp|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.DeleteApp|

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

<h3 id="deleteapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAppResponse](#schemadeleteappresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppLaunchConfiguration

<a id="opIdDeleteAppLaunchConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration`

Deletes the launch configuration for the specified application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="deleteapplaunchconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteAppLaunchConfigurationRequest](#schemadeleteapplaunchconfigurationrequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration|

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

<h3 id="deleteapplaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAppLaunchConfigurationResponse](#schemadeleteapplaunchconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppReplicationConfiguration

<a id="opIdDeleteAppReplicationConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration`

Deletes the replication configuration for the specified application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="deleteappreplicationconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteAppReplicationConfigurationRequest](#schemadeleteappreplicationconfigurationrequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration|

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

<h3 id="deleteappreplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAppReplicationConfigurationResponse](#schemadeleteappreplicationconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppValidationConfiguration

<a id="opIdDeleteAppValidationConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration`

Deletes the validation configuration for the specified application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="deleteappvalidationconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteAppValidationConfigurationRequest](#schemadeleteappvalidationconfigurationrequest)|true|none|
|» appId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration|

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

<h3 id="deleteappvalidationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAppValidationConfigurationResponse](#schemadeleteappvalidationconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationJob

<a id="opIdDeleteReplicationJob"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.DeleteReplicationJob' \
  -d '{
    "replicationJobId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob`

<p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>

> Body parameter

```json
{
  "replicationJobId": {}
}
```

<h3 id="deletereplicationjob-parameters">Parameters</h3>

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
|body|body|[DeleteReplicationJobRequest](#schemadeletereplicationjobrequest)|true|none|
|» replicationJobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.DeleteReplicationJob|

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

<h3 id="deletereplicationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReplicationJobResponse](#schemadeletereplicationjobresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|ReplicationJobNotFoundException|[ReplicationJobNotFoundException](#schemareplicationjobnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServerCatalog

<a id="opIdDeleteServerCatalog"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.DeleteServerCatalog' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog`

Deletes all servers from your server catalog.

> Body parameter

```json
{}
```

<h3 id="deleteservercatalog-parameters">Parameters</h3>

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
|body|body|[DeleteServerCatalogRequest](#schemadeleteservercatalogrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.DeleteServerCatalog|

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

<h3 id="deleteservercatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServerCatalogResponse](#schemadeleteservercatalogresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateConnector

<a id="opIdDisassociateConnector"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.DisassociateConnector' \
  -d '{
    "connectorId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector`

<p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>

> Body parameter

```json
{
  "connectorId": {}
}
```

<h3 id="disassociateconnector-parameters">Parameters</h3>

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
|body|body|[DisassociateConnectorRequest](#schemadisassociateconnectorrequest)|true|none|
|» connectorId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.DisassociateConnector|

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

<h3 id="disassociateconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateConnectorResponse](#schemadisassociateconnectorresponse)|
|480|480|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateChangeSet

<a id="opIdGenerateChangeSet"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GenerateChangeSet' \
  -d '{
    "appId": {},
    "changesetFormat": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet`

Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

> Body parameter

```json
{
  "appId": {},
  "changesetFormat": {}
}
```

<h3 id="generatechangeset-parameters">Parameters</h3>

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
|body|body|[GenerateChangeSetRequest](#schemageneratechangesetrequest)|true|none|
|» appId|body|object|false|none|
|» changesetFormat|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GenerateChangeSet|

> Example responses

> 200 Response

```json
{
  "s3Location": {
    "bucket": {},
    "key": {}
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

<h3 id="generatechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateChangeSetResponse](#schemageneratechangesetresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateTemplate

<a id="opIdGenerateTemplate"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GenerateTemplate' \
  -d '{
    "appId": {},
    "templateFormat": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate`

Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

> Body parameter

```json
{
  "appId": {},
  "templateFormat": {}
}
```

<h3 id="generatetemplate-parameters">Parameters</h3>

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
|body|body|[GenerateTemplateRequest](#schemageneratetemplaterequest)|true|none|
|» appId|body|object|false|none|
|» templateFormat|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GenerateTemplate|

> Example responses

> 200 Response

```json
{
  "s3Location": {
    "bucket": {},
    "key": {}
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

<h3 id="generatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateTemplateResponse](#schemageneratetemplateresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApp

<a id="opIdGetApp"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetApp' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp`

Retrieve information about the specified application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="getapp-parameters">Parameters</h3>

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
|body|body|[GetAppRequest](#schemagetapprequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetApp|

> Example responses

> 200 Response

```json
{
  "appSummary": {
    "appId": {},
    "importedAppId": {},
    "name": {},
    "description": {},
    "status": {},
    "statusMessage": {},
    "replicationConfigurationStatus": {},
    "replicationStatus": {},
    "replicationStatusMessage": {},
    "latestReplicationTime": {},
    "launchConfigurationStatus": {},
    "launchStatus": {},
    "launchStatusMessage": {},
    "launchDetails": {
      "latestLaunchTime": {},
      "stackName": {},
      "stackId": {}
    },
    "creationTime": {},
    "lastModified": {},
    "roleName": {},
    "totalServerGroups": {},
    "totalServers": {}
  },
  "serverGroups": {},
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

<h3 id="getapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppResponse](#schemagetappresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppLaunchConfiguration

<a id="opIdGetAppLaunchConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration`

Retrieves the application launch configuration associated with the specified application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="getapplaunchconfiguration-parameters">Parameters</h3>

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
|body|body|[GetAppLaunchConfigurationRequest](#schemagetapplaunchconfigurationrequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration|

> Example responses

> 200 Response

```json
{
  "appId": {},
  "roleName": {},
  "autoLaunch": {},
  "serverGroupLaunchConfigurations": {}
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

<h3 id="getapplaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppLaunchConfigurationResponse](#schemagetapplaunchconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppReplicationConfiguration

<a id="opIdGetAppReplicationConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration`

Retrieves the application replication configuration associated with the specified application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="getappreplicationconfiguration-parameters">Parameters</h3>

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
|body|body|[GetAppReplicationConfigurationRequest](#schemagetappreplicationconfigurationrequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration|

> Example responses

> 200 Response

```json
{
  "serverGroupReplicationConfigurations": {}
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

<h3 id="getappreplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppReplicationConfigurationResponse](#schemagetappreplicationconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppValidationConfiguration

<a id="opIdGetAppValidationConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration`

Retrieves information about a configuration for validating an application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="getappvalidationconfiguration-parameters">Parameters</h3>

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
|body|body|[GetAppValidationConfigurationRequest](#schemagetappvalidationconfigurationrequest)|true|none|
|» appId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration|

> Example responses

> 200 Response

```json
{
  "appValidationConfigurations": {},
  "serverGroupValidationConfigurations": {}
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

<h3 id="getappvalidationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppValidationConfigurationResponse](#schemagetappvalidationconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppValidationOutput

<a id="opIdGetAppValidationOutput"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetAppValidationOutput' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput`

Retrieves output from validating an application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="getappvalidationoutput-parameters">Parameters</h3>

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
|body|body|[GetAppValidationOutputRequest](#schemagetappvalidationoutputrequest)|true|none|
|» appId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetAppValidationOutput|

> Example responses

> 200 Response

```json
{
  "validationOutputList": {}
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

<h3 id="getappvalidationoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppValidationOutputResponse](#schemagetappvalidationoutputresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectors

<a id="opIdGetConnectors"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetConnectors' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors`

Describes the connectors registered with the Server Migration Service.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getconnectors-parameters">Parameters</h3>

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
|body|body|[GetConnectorsRequest](#schemagetconnectorsrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetConnectors|

> Example responses

> 200 Response

```json
{
  "connectorList": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="getconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectorsResponse](#schemagetconnectorsresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReplicationJobs

<a id="opIdGetReplicationJobs"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetReplicationJobs' \
  -d '{
    "replicationJobId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs`

Describes the specified replication job or all of your replication jobs.

> Body parameter

```json
{
  "replicationJobId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getreplicationjobs-parameters">Parameters</h3>

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
|body|body|[GetReplicationJobsRequest](#schemagetreplicationjobsrequest)|true|none|
|» replicationJobId|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetReplicationJobs|

> Example responses

> 200 Response

```json
{
  "replicationJobList": {},
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

<h3 id="getreplicationjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReplicationJobsResponse](#schemagetreplicationjobsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReplicationRuns

<a id="opIdGetReplicationRuns"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetReplicationRuns' \
  -d '{
    "replicationJobId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns`

Describes the replication runs for the specified replication job.

> Body parameter

```json
{
  "replicationJobId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getreplicationruns-parameters">Parameters</h3>

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
|body|body|[GetReplicationRunsRequest](#schemagetreplicationrunsrequest)|true|none|
|» replicationJobId|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetReplicationRuns|

> Example responses

> 200 Response

```json
{
  "replicationJob": {
    "replicationJobId": {},
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "seedReplicationTime": {},
    "frequency": {},
    "runOnce": {},
    "nextReplicationRunStartTime": {},
    "licenseType": {},
    "roleName": {},
    "latestAmiId": {},
    "state": {},
    "statusMessage": {},
    "description": {},
    "numberOfRecentAmisToKeep": {},
    "encrypted": {},
    "kmsKeyId": {},
    "replicationRunList": {}
  },
  "replicationRunList": {},
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

<h3 id="getreplicationruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReplicationRunsResponse](#schemagetreplicationrunsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServers

<a id="opIdGetServers"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.GetServers' \
  -d '{
    "nextToken": {},
    "maxResults": {},
    "vmServerAddressList": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers`

<p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {},
  "vmServerAddressList": {}
}
```

<h3 id="getservers-parameters">Parameters</h3>

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
|body|body|[GetServersRequest](#schemagetserversrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» vmServerAddressList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.GetServers|

> Example responses

> 200 Response

```json
{
  "lastModifiedOn": {},
  "serverCatalogStatus": {},
  "serverList": {},
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

<h3 id="getservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServersResponse](#schemagetserversresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportAppCatalog

<a id="opIdImportAppCatalog"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.ImportAppCatalog' \
  -d '{
    "roleName": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog`

Allows application import from Migration Hub.

> Body parameter

```json
{
  "roleName": {}
}
```

<h3 id="importappcatalog-parameters">Parameters</h3>

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
|body|body|[ImportAppCatalogRequest](#schemaimportappcatalogrequest)|true|none|
|» roleName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.ImportAppCatalog|

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

<h3 id="importappcatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportAppCatalogResponse](#schemaimportappcatalogresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportServerCatalog

<a id="opIdImportServerCatalog"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.ImportServerCatalog' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog`

<p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>

> Body parameter

```json
{}
```

<h3 id="importservercatalog-parameters">Parameters</h3>

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
|body|body|[ImportServerCatalogRequest](#schemaimportservercatalogrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.ImportServerCatalog|

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

<h3 id="importservercatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportServerCatalogResponse](#schemaimportservercatalogresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|NoConnectorsAvailableException|[NoConnectorsAvailableException](#schemanoconnectorsavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## LaunchApp

<a id="opIdLaunchApp"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.LaunchApp' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp`

Launches the specified application as a stack in CloudFormation.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="launchapp-parameters">Parameters</h3>

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
|body|body|[LaunchAppRequest](#schemalaunchapprequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.LaunchApp|

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

<h3 id="launchapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LaunchAppResponse](#schemalaunchappresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApps

<a id="opIdListApps"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.ListApps' \
  -d '{
    "appIds": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps`

Retrieves summaries for all applications.

> Body parameter

```json
{
  "appIds": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listapps-parameters">Parameters</h3>

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
|body|body|[ListAppsRequest](#schemalistappsrequest)|true|none|
|» appIds|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.ListApps|

> Example responses

> 200 Response

```json
{
  "apps": {},
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

<h3 id="listapps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAppsResponse](#schemalistappsresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyAppValidationOutput

<a id="opIdNotifyAppValidationOutput"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput' \
  -d '{
    "appId": {},
    "notificationContext": {
      "validationId": {},
      "status": {},
      "statusMessage": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput`

Provides information to Server Migration Service about whether application validation is successful.

> Body parameter

```json
{
  "appId": {},
  "notificationContext": {
    "validationId": {},
    "status": {},
    "statusMessage": {}
  }
}
```

<h3 id="notifyappvalidationoutput-parameters">Parameters</h3>

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
|body|body|[NotifyAppValidationOutputRequest](#schemanotifyappvalidationoutputrequest)|true|none|
|» appId|body|object|true|none|
|» notificationContext|body|object|false|none|
|» » validationId|body|object|false|none|
|» » status|body|object|false|none|
|» » statusMessage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput|

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

<h3 id="notifyappvalidationoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyAppValidationOutputResponse](#schemanotifyappvalidationoutputresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAppLaunchConfiguration

<a id="opIdPutAppLaunchConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration' \
  -d '{
    "appId": {},
    "roleName": {},
    "autoLaunch": {},
    "serverGroupLaunchConfigurations": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration`

Creates or updates the launch configuration for the specified application.

> Body parameter

```json
{
  "appId": {},
  "roleName": {},
  "autoLaunch": {},
  "serverGroupLaunchConfigurations": {}
}
```

<h3 id="putapplaunchconfiguration-parameters">Parameters</h3>

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
|body|body|[PutAppLaunchConfigurationRequest](#schemaputapplaunchconfigurationrequest)|true|none|
|» appId|body|object|false|none|
|» roleName|body|object|false|none|
|» autoLaunch|body|object|false|none|
|» serverGroupLaunchConfigurations|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration|

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

<h3 id="putapplaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAppLaunchConfigurationResponse](#schemaputapplaunchconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAppReplicationConfiguration

<a id="opIdPutAppReplicationConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration' \
  -d '{
    "appId": {},
    "serverGroupReplicationConfigurations": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration`

Creates or updates the replication configuration for the specified application.

> Body parameter

```json
{
  "appId": {},
  "serverGroupReplicationConfigurations": {}
}
```

<h3 id="putappreplicationconfiguration-parameters">Parameters</h3>

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
|body|body|[PutAppReplicationConfigurationRequest](#schemaputappreplicationconfigurationrequest)|true|none|
|» appId|body|object|false|none|
|» serverGroupReplicationConfigurations|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration|

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

<h3 id="putappreplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAppReplicationConfigurationResponse](#schemaputappreplicationconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAppValidationConfiguration

<a id="opIdPutAppValidationConfiguration"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration' \
  -d '{
    "appId": {},
    "appValidationConfigurations": {},
    "serverGroupValidationConfigurations": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration`

Creates or updates a validation configuration for the specified application.

> Body parameter

```json
{
  "appId": {},
  "appValidationConfigurations": {},
  "serverGroupValidationConfigurations": {}
}
```

<h3 id="putappvalidationconfiguration-parameters">Parameters</h3>

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
|body|body|[PutAppValidationConfigurationRequest](#schemaputappvalidationconfigurationrequest)|true|none|
|» appId|body|object|true|none|
|» appValidationConfigurations|body|object|false|none|
|» serverGroupValidationConfigurations|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration|

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

<h3 id="putappvalidationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAppValidationConfigurationResponse](#schemaputappvalidationconfigurationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartAppReplication

<a id="opIdStartAppReplication"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.StartAppReplication' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication`

Starts replicating the specified application by creating replication jobs for each server in the application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="startappreplication-parameters">Parameters</h3>

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
|body|body|[StartAppReplicationRequest](#schemastartappreplicationrequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.StartAppReplication|

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

<h3 id="startappreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartAppReplicationResponse](#schemastartappreplicationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartOnDemandAppReplication

<a id="opIdStartOnDemandAppReplication"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication' \
  -d '{
    "appId": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication`

Starts an on-demand replication run for the specified application.

> Body parameter

```json
{
  "appId": {},
  "description": {}
}
```

<h3 id="startondemandappreplication-parameters">Parameters</h3>

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
|body|body|[StartOnDemandAppReplicationRequest](#schemastartondemandappreplicationrequest)|true|none|
|» appId|body|object|true|none|
|» description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication|

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

<h3 id="startondemandappreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartOnDemandAppReplicationResponse](#schemastartondemandappreplicationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartOnDemandReplicationRun

<a id="opIdStartOnDemandReplicationRun"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun' \
  -d '{
    "replicationJobId": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun`

<p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>

> Body parameter

```json
{
  "replicationJobId": {},
  "description": {}
}
```

<h3 id="startondemandreplicationrun-parameters">Parameters</h3>

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
|body|body|[StartOnDemandReplicationRunRequest](#schemastartondemandreplicationrunrequest)|true|none|
|» replicationJobId|body|object|true|none|
|» description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun|

> Example responses

> 200 Response

```json
{
  "replicationRunId": {}
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

<h3 id="startondemandreplicationrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartOnDemandReplicationRunResponse](#schemastartondemandreplicationrunresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|ReplicationRunLimitExceededException|[ReplicationRunLimitExceededException](#schemareplicationrunlimitexceededexception)|
|485|485|DryRunOperationException|[DryRunOperationException](#schemadryrunoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopAppReplication

<a id="opIdStopAppReplication"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.StopAppReplication' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication`

Stops replicating the specified application by deleting the replication job for each server in the application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="stopappreplication-parameters">Parameters</h3>

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
|body|body|[StopAppReplicationRequest](#schemastopappreplicationrequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.StopAppReplication|

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

<h3 id="stopappreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopAppReplicationResponse](#schemastopappreplicationresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateApp

<a id="opIdTerminateApp"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.TerminateApp' \
  -d '{
    "appId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp`

Terminates the stack for the specified application.

> Body parameter

```json
{
  "appId": {}
}
```

<h3 id="terminateapp-parameters">Parameters</h3>

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
|body|body|[TerminateAppRequest](#schematerminateapprequest)|true|none|
|» appId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.TerminateApp|

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

<h3 id="terminateapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TerminateAppResponse](#schematerminateappresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApp

<a id="opIdUpdateApp"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.UpdateApp' \
  -d '{
    "appId": {},
    "name": {},
    "description": {},
    "roleName": {},
    "serverGroups": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp`

Updates the specified application.

> Body parameter

```json
{
  "appId": {},
  "name": {},
  "description": {},
  "roleName": {},
  "serverGroups": {},
  "tags": {}
}
```

<h3 id="updateapp-parameters">Parameters</h3>

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
|body|body|[UpdateAppRequest](#schemaupdateapprequest)|true|none|
|» appId|body|object|false|none|
|» name|body|object|false|none|
|» description|body|object|false|none|
|» roleName|body|object|false|none|
|» serverGroups|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.UpdateApp|

> Example responses

> 200 Response

```json
{
  "appSummary": {
    "appId": {},
    "importedAppId": {},
    "name": {},
    "description": {},
    "status": {},
    "statusMessage": {},
    "replicationConfigurationStatus": {},
    "replicationStatus": {},
    "replicationStatusMessage": {},
    "latestReplicationTime": {},
    "launchConfigurationStatus": {},
    "launchStatus": {},
    "launchStatusMessage": {},
    "launchDetails": {
      "latestLaunchTime": {},
      "stackName": {},
      "stackId": {}
    },
    "creationTime": {},
    "lastModified": {},
    "roleName": {},
    "totalServerGroups": {},
    "totalServers": {}
  },
  "serverGroups": {},
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

<h3 id="updateapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAppResponse](#schemaupdateappresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|483|483|InternalError|[InternalError](#schemainternalerror)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReplicationJob

<a id="opIdUpdateReplicationJob"></a>

> Code samples

```bash
curl 'https://sms.us-east-1.amazonaws.com/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSServerMigrationService_V2016_10_24.UpdateReplicationJob' \
  -d '{
    "replicationJobId": {},
    "frequency": {},
    "nextReplicationRunStartTime": {},
    "licenseType": {},
    "roleName": {},
    "description": {},
    "numberOfRecentAmisToKeep": {},
    "encrypted": {},
    "kmsKeyId": {}
  }'
```

`POST /#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob`

Updates the specified settings for the specified replication job.

> Body parameter

```json
{
  "replicationJobId": {},
  "frequency": {},
  "nextReplicationRunStartTime": {},
  "licenseType": {},
  "roleName": {},
  "description": {},
  "numberOfRecentAmisToKeep": {},
  "encrypted": {},
  "kmsKeyId": {}
}
```

<h3 id="updatereplicationjob-parameters">Parameters</h3>

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
|body|body|[UpdateReplicationJobRequest](#schemaupdatereplicationjobrequest)|true|none|
|» replicationJobId|body|object|true|none|
|» frequency|body|object|false|none|
|» nextReplicationRunStartTime|body|object|false|none|
|» licenseType|body|object|false|none|
|» roleName|body|object|false|none|
|» description|body|object|false|none|
|» numberOfRecentAmisToKeep|body|object|false|none|
|» encrypted|body|object|false|none|
|» kmsKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSServerMigrationService_V2016_10_24.UpdateReplicationJob|

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

<h3 id="updatereplicationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateReplicationJobResponse](#schemaupdatereplicationjobresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|484|484|ServerCannotBeReplicatedException|[ServerCannotBeReplicatedException](#schemaservercannotbereplicatedexception)|
|485|485|ReplicationJobNotFoundException|[ReplicationJobNotFoundException](#schemareplicationjobnotfoundexception)|
|486|486|InternalError|[InternalError](#schemainternalerror)|
|487|487|TemporarilyUnavailableException|[TemporarilyUnavailableException](#schematemporarilyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAppResponse">CreateAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateappresponse"></a>
<a id="schema_CreateAppResponse"></a>
<a id="tocScreateappresponse"></a>
<a id="tocscreateappresponse"></a>

```json
{
  "appSummary": {
    "appId": {},
    "importedAppId": {},
    "name": {},
    "description": {},
    "status": {},
    "statusMessage": {},
    "replicationConfigurationStatus": {},
    "replicationStatus": {},
    "replicationStatusMessage": {},
    "latestReplicationTime": {},
    "launchConfigurationStatus": {},
    "launchStatus": {},
    "launchStatusMessage": {},
    "launchDetails": {
      "latestLaunchTime": {},
      "stackName": {},
      "stackId": {}
    },
    "creationTime": {},
    "lastModified": {},
    "roleName": {},
    "totalServerGroups": {},
    "totalServers": {}
  },
  "serverGroups": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appSummary|object|false|none|none|
|serverGroups|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateAppRequest">CreateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapprequest"></a>
<a id="schema_CreateAppRequest"></a>
<a id="tocScreateapprequest"></a>
<a id="tocscreateapprequest"></a>

```json
{
  "name": {},
  "description": {},
  "roleName": {},
  "clientToken": {},
  "serverGroups": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|roleName|object|false|none|none|
|clientToken|object|false|none|none|
|serverGroups|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UnauthorizedOperationException">UnauthorizedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedoperationexception"></a>
<a id="schema_UnauthorizedOperationException"></a>
<a id="tocSunauthorizedoperationexception"></a>
<a id="tocsunauthorizedoperationexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_MissingRequiredParameterException">MissingRequiredParameterException</h2>
<!-- backwards compatibility -->
<a id="schemamissingrequiredparameterexception"></a>
<a id="schema_MissingRequiredParameterException"></a>
<a id="tocSmissingrequiredparameterexception"></a>
<a id="tocsmissingrequiredparameterexception"></a>

```json
null
```

<h2 id="tocS_InternalError">InternalError</h2>
<!-- backwards compatibility -->
<a id="schemainternalerror"></a>
<a id="schema_InternalError"></a>
<a id="tocSinternalerror"></a>
<a id="tocsinternalerror"></a>

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

<h2 id="tocS_CreateReplicationJobResponse">CreateReplicationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationjobresponse"></a>
<a id="schema_CreateReplicationJobResponse"></a>
<a id="tocScreatereplicationjobresponse"></a>
<a id="tocscreatereplicationjobresponse"></a>

```json
{
  "replicationJobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobId|object|false|none|none|

<h2 id="tocS_CreateReplicationJobRequest">CreateReplicationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationjobrequest"></a>
<a id="schema_CreateReplicationJobRequest"></a>
<a id="tocScreatereplicationjobrequest"></a>
<a id="tocscreatereplicationjobrequest"></a>

```json
{
  "serverId": {},
  "seedReplicationTime": {},
  "frequency": {},
  "runOnce": {},
  "licenseType": {},
  "roleName": {},
  "description": {},
  "numberOfRecentAmisToKeep": {},
  "encrypted": {},
  "kmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverId|object|true|none|none|
|seedReplicationTime|object|true|none|none|
|frequency|object|false|none|none|
|runOnce|object|false|none|none|
|licenseType|object|false|none|none|
|roleName|object|false|none|none|
|description|object|false|none|none|
|numberOfRecentAmisToKeep|object|false|none|none|
|encrypted|object|false|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_ServerCannotBeReplicatedException">ServerCannotBeReplicatedException</h2>
<!-- backwards compatibility -->
<a id="schemaservercannotbereplicatedexception"></a>
<a id="schema_ServerCannotBeReplicatedException"></a>
<a id="tocSservercannotbereplicatedexception"></a>
<a id="tocsservercannotbereplicatedexception"></a>

```json
null
```

<h2 id="tocS_ReplicationJobAlreadyExistsException">ReplicationJobAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjobalreadyexistsexception"></a>
<a id="schema_ReplicationJobAlreadyExistsException"></a>
<a id="tocSreplicationjobalreadyexistsexception"></a>
<a id="tocsreplicationjobalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_NoConnectorsAvailableException">NoConnectorsAvailableException</h2>
<!-- backwards compatibility -->
<a id="schemanoconnectorsavailableexception"></a>
<a id="schema_NoConnectorsAvailableException"></a>
<a id="tocSnoconnectorsavailableexception"></a>
<a id="tocsnoconnectorsavailableexception"></a>

```json
null
```

<h2 id="tocS_TemporarilyUnavailableException">TemporarilyUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schematemporarilyunavailableexception"></a>
<a id="schema_TemporarilyUnavailableException"></a>
<a id="tocStemporarilyunavailableexception"></a>
<a id="tocstemporarilyunavailableexception"></a>

```json
null
```

<h2 id="tocS_DeleteAppResponse">DeleteAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappresponse"></a>
<a id="schema_DeleteAppResponse"></a>
<a id="tocSdeleteappresponse"></a>
<a id="tocsdeleteappresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAppRequest">DeleteAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapprequest"></a>
<a id="schema_DeleteAppRequest"></a>
<a id="tocSdeleteapprequest"></a>
<a id="tocsdeleteapprequest"></a>

```json
{
  "appId": {},
  "forceStopAppReplication": {},
  "forceTerminateApp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|forceStopAppReplication|object|false|none|none|
|forceTerminateApp|object|false|none|none|

<h2 id="tocS_DeleteAppLaunchConfigurationResponse">DeleteAppLaunchConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplaunchconfigurationresponse"></a>
<a id="schema_DeleteAppLaunchConfigurationResponse"></a>
<a id="tocSdeleteapplaunchconfigurationresponse"></a>
<a id="tocsdeleteapplaunchconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAppLaunchConfigurationRequest">DeleteAppLaunchConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplaunchconfigurationrequest"></a>
<a id="schema_DeleteAppLaunchConfigurationRequest"></a>
<a id="tocSdeleteapplaunchconfigurationrequest"></a>
<a id="tocsdeleteapplaunchconfigurationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_DeleteAppReplicationConfigurationResponse">DeleteAppReplicationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappreplicationconfigurationresponse"></a>
<a id="schema_DeleteAppReplicationConfigurationResponse"></a>
<a id="tocSdeleteappreplicationconfigurationresponse"></a>
<a id="tocsdeleteappreplicationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAppReplicationConfigurationRequest">DeleteAppReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappreplicationconfigurationrequest"></a>
<a id="schema_DeleteAppReplicationConfigurationRequest"></a>
<a id="tocSdeleteappreplicationconfigurationrequest"></a>
<a id="tocsdeleteappreplicationconfigurationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_DeleteAppValidationConfigurationResponse">DeleteAppValidationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappvalidationconfigurationresponse"></a>
<a id="schema_DeleteAppValidationConfigurationResponse"></a>
<a id="tocSdeleteappvalidationconfigurationresponse"></a>
<a id="tocsdeleteappvalidationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAppValidationConfigurationRequest">DeleteAppValidationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappvalidationconfigurationrequest"></a>
<a id="schema_DeleteAppValidationConfigurationRequest"></a>
<a id="tocSdeleteappvalidationconfigurationrequest"></a>
<a id="tocsdeleteappvalidationconfigurationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|true|none|none|

<h2 id="tocS_DeleteReplicationJobResponse">DeleteReplicationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationjobresponse"></a>
<a id="schema_DeleteReplicationJobResponse"></a>
<a id="tocSdeletereplicationjobresponse"></a>
<a id="tocsdeletereplicationjobresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteReplicationJobRequest">DeleteReplicationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationjobrequest"></a>
<a id="schema_DeleteReplicationJobRequest"></a>
<a id="tocSdeletereplicationjobrequest"></a>
<a id="tocsdeletereplicationjobrequest"></a>

```json
{
  "replicationJobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobId|object|true|none|none|

<h2 id="tocS_ReplicationJobNotFoundException">ReplicationJobNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjobnotfoundexception"></a>
<a id="schema_ReplicationJobNotFoundException"></a>
<a id="tocSreplicationjobnotfoundexception"></a>
<a id="tocsreplicationjobnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteServerCatalogResponse">DeleteServerCatalogResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservercatalogresponse"></a>
<a id="schema_DeleteServerCatalogResponse"></a>
<a id="tocSdeleteservercatalogresponse"></a>
<a id="tocsdeleteservercatalogresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteServerCatalogRequest">DeleteServerCatalogRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservercatalogrequest"></a>
<a id="schema_DeleteServerCatalogRequest"></a>
<a id="tocSdeleteservercatalogrequest"></a>
<a id="tocsdeleteservercatalogrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateConnectorResponse">DisassociateConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconnectorresponse"></a>
<a id="schema_DisassociateConnectorResponse"></a>
<a id="tocSdisassociateconnectorresponse"></a>
<a id="tocsdisassociateconnectorresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateConnectorRequest">DisassociateConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconnectorrequest"></a>
<a id="schema_DisassociateConnectorRequest"></a>
<a id="tocSdisassociateconnectorrequest"></a>
<a id="tocsdisassociateconnectorrequest"></a>

```json
{
  "connectorId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorId|object|true|none|none|

<h2 id="tocS_GenerateChangeSetResponse">GenerateChangeSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratechangesetresponse"></a>
<a id="schema_GenerateChangeSetResponse"></a>
<a id="tocSgeneratechangesetresponse"></a>
<a id="tocsgeneratechangesetresponse"></a>

```json
{
  "s3Location": {
    "bucket": {},
    "key": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Location|object|false|none|none|

<h2 id="tocS_GenerateChangeSetRequest">GenerateChangeSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratechangesetrequest"></a>
<a id="schema_GenerateChangeSetRequest"></a>
<a id="tocSgeneratechangesetrequest"></a>
<a id="tocsgeneratechangesetrequest"></a>

```json
{
  "appId": {},
  "changesetFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|changesetFormat|object|false|none|none|

<h2 id="tocS_GenerateTemplateResponse">GenerateTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratetemplateresponse"></a>
<a id="schema_GenerateTemplateResponse"></a>
<a id="tocSgeneratetemplateresponse"></a>
<a id="tocsgeneratetemplateresponse"></a>

```json
{
  "s3Location": {
    "bucket": {},
    "key": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Location|object|false|none|none|

<h2 id="tocS_GenerateTemplateRequest">GenerateTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratetemplaterequest"></a>
<a id="schema_GenerateTemplateRequest"></a>
<a id="tocSgeneratetemplaterequest"></a>
<a id="tocsgeneratetemplaterequest"></a>

```json
{
  "appId": {},
  "templateFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|templateFormat|object|false|none|none|

<h2 id="tocS_GetAppResponse">GetAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappresponse"></a>
<a id="schema_GetAppResponse"></a>
<a id="tocSgetappresponse"></a>
<a id="tocsgetappresponse"></a>

```json
{
  "appSummary": {
    "appId": {},
    "importedAppId": {},
    "name": {},
    "description": {},
    "status": {},
    "statusMessage": {},
    "replicationConfigurationStatus": {},
    "replicationStatus": {},
    "replicationStatusMessage": {},
    "latestReplicationTime": {},
    "launchConfigurationStatus": {},
    "launchStatus": {},
    "launchStatusMessage": {},
    "launchDetails": {
      "latestLaunchTime": {},
      "stackName": {},
      "stackId": {}
    },
    "creationTime": {},
    "lastModified": {},
    "roleName": {},
    "totalServerGroups": {},
    "totalServers": {}
  },
  "serverGroups": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appSummary|object|false|none|none|
|serverGroups|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetAppRequest">GetAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapprequest"></a>
<a id="schema_GetAppRequest"></a>
<a id="tocSgetapprequest"></a>
<a id="tocsgetapprequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_GetAppLaunchConfigurationResponse">GetAppLaunchConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapplaunchconfigurationresponse"></a>
<a id="schema_GetAppLaunchConfigurationResponse"></a>
<a id="tocSgetapplaunchconfigurationresponse"></a>
<a id="tocsgetapplaunchconfigurationresponse"></a>

```json
{
  "appId": {},
  "roleName": {},
  "autoLaunch": {},
  "serverGroupLaunchConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|roleName|object|false|none|none|
|autoLaunch|object|false|none|none|
|serverGroupLaunchConfigurations|object|false|none|none|

<h2 id="tocS_GetAppLaunchConfigurationRequest">GetAppLaunchConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapplaunchconfigurationrequest"></a>
<a id="schema_GetAppLaunchConfigurationRequest"></a>
<a id="tocSgetapplaunchconfigurationrequest"></a>
<a id="tocsgetapplaunchconfigurationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_GetAppReplicationConfigurationResponse">GetAppReplicationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappreplicationconfigurationresponse"></a>
<a id="schema_GetAppReplicationConfigurationResponse"></a>
<a id="tocSgetappreplicationconfigurationresponse"></a>
<a id="tocsgetappreplicationconfigurationresponse"></a>

```json
{
  "serverGroupReplicationConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverGroupReplicationConfigurations|object|false|none|none|

<h2 id="tocS_GetAppReplicationConfigurationRequest">GetAppReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetappreplicationconfigurationrequest"></a>
<a id="schema_GetAppReplicationConfigurationRequest"></a>
<a id="tocSgetappreplicationconfigurationrequest"></a>
<a id="tocsgetappreplicationconfigurationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_GetAppValidationConfigurationResponse">GetAppValidationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappvalidationconfigurationresponse"></a>
<a id="schema_GetAppValidationConfigurationResponse"></a>
<a id="tocSgetappvalidationconfigurationresponse"></a>
<a id="tocsgetappvalidationconfigurationresponse"></a>

```json
{
  "appValidationConfigurations": {},
  "serverGroupValidationConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appValidationConfigurations|object|false|none|none|
|serverGroupValidationConfigurations|object|false|none|none|

<h2 id="tocS_GetAppValidationConfigurationRequest">GetAppValidationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetappvalidationconfigurationrequest"></a>
<a id="schema_GetAppValidationConfigurationRequest"></a>
<a id="tocSgetappvalidationconfigurationrequest"></a>
<a id="tocsgetappvalidationconfigurationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|true|none|none|

<h2 id="tocS_GetAppValidationOutputResponse">GetAppValidationOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappvalidationoutputresponse"></a>
<a id="schema_GetAppValidationOutputResponse"></a>
<a id="tocSgetappvalidationoutputresponse"></a>
<a id="tocsgetappvalidationoutputresponse"></a>

```json
{
  "validationOutputList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validationOutputList|object|false|none|none|

<h2 id="tocS_GetAppValidationOutputRequest">GetAppValidationOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetappvalidationoutputrequest"></a>
<a id="schema_GetAppValidationOutputRequest"></a>
<a id="tocSgetappvalidationoutputrequest"></a>
<a id="tocsgetappvalidationoutputrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|true|none|none|

<h2 id="tocS_GetConnectorsResponse">GetConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectorsresponse"></a>
<a id="schema_GetConnectorsResponse"></a>
<a id="tocSgetconnectorsresponse"></a>
<a id="tocsgetconnectorsresponse"></a>

```json
{
  "connectorList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetConnectorsRequest">GetConnectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectorsrequest"></a>
<a id="schema_GetConnectorsRequest"></a>
<a id="tocSgetconnectorsrequest"></a>
<a id="tocsgetconnectorsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetReplicationJobsResponse">GetReplicationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreplicationjobsresponse"></a>
<a id="schema_GetReplicationJobsResponse"></a>
<a id="tocSgetreplicationjobsresponse"></a>
<a id="tocsgetreplicationjobsresponse"></a>

```json
{
  "replicationJobList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetReplicationJobsRequest">GetReplicationJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreplicationjobsrequest"></a>
<a id="schema_GetReplicationJobsRequest"></a>
<a id="tocSgetreplicationjobsrequest"></a>
<a id="tocsgetreplicationjobsrequest"></a>

```json
{
  "replicationJobId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobId|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetReplicationRunsResponse">GetReplicationRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreplicationrunsresponse"></a>
<a id="schema_GetReplicationRunsResponse"></a>
<a id="tocSgetreplicationrunsresponse"></a>
<a id="tocsgetreplicationrunsresponse"></a>

```json
{
  "replicationJob": {
    "replicationJobId": {},
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "seedReplicationTime": {},
    "frequency": {},
    "runOnce": {},
    "nextReplicationRunStartTime": {},
    "licenseType": {},
    "roleName": {},
    "latestAmiId": {},
    "state": {},
    "statusMessage": {},
    "description": {},
    "numberOfRecentAmisToKeep": {},
    "encrypted": {},
    "kmsKeyId": {},
    "replicationRunList": {}
  },
  "replicationRunList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJob|object|false|none|none|
|replicationRunList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetReplicationRunsRequest">GetReplicationRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreplicationrunsrequest"></a>
<a id="schema_GetReplicationRunsRequest"></a>
<a id="tocSgetreplicationrunsrequest"></a>
<a id="tocsgetreplicationrunsrequest"></a>

```json
{
  "replicationJobId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobId|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetServersResponse">GetServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetserversresponse"></a>
<a id="schema_GetServersResponse"></a>
<a id="tocSgetserversresponse"></a>
<a id="tocsgetserversresponse"></a>

```json
{
  "lastModifiedOn": {},
  "serverCatalogStatus": {},
  "serverList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastModifiedOn|object|false|none|none|
|serverCatalogStatus|object|false|none|none|
|serverList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetServersRequest">GetServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetserversrequest"></a>
<a id="schema_GetServersRequest"></a>
<a id="tocSgetserversrequest"></a>
<a id="tocsgetserversrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "vmServerAddressList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|vmServerAddressList|object|false|none|none|

<h2 id="tocS_ImportAppCatalogResponse">ImportAppCatalogResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportappcatalogresponse"></a>
<a id="schema_ImportAppCatalogResponse"></a>
<a id="tocSimportappcatalogresponse"></a>
<a id="tocsimportappcatalogresponse"></a>

```json
{}
```

<h2 id="tocS_ImportAppCatalogRequest">ImportAppCatalogRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportappcatalogrequest"></a>
<a id="schema_ImportAppCatalogRequest"></a>
<a id="tocSimportappcatalogrequest"></a>
<a id="tocsimportappcatalogrequest"></a>

```json
{
  "roleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleName|object|false|none|none|

<h2 id="tocS_ImportServerCatalogResponse">ImportServerCatalogResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportservercatalogresponse"></a>
<a id="schema_ImportServerCatalogResponse"></a>
<a id="tocSimportservercatalogresponse"></a>
<a id="tocsimportservercatalogresponse"></a>

```json
{}
```

<h2 id="tocS_ImportServerCatalogRequest">ImportServerCatalogRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportservercatalogrequest"></a>
<a id="schema_ImportServerCatalogRequest"></a>
<a id="tocSimportservercatalogrequest"></a>
<a id="tocsimportservercatalogrequest"></a>

```json
{}
```

<h2 id="tocS_LaunchAppResponse">LaunchAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemalaunchappresponse"></a>
<a id="schema_LaunchAppResponse"></a>
<a id="tocSlaunchappresponse"></a>
<a id="tocslaunchappresponse"></a>

```json
{}
```

<h2 id="tocS_LaunchAppRequest">LaunchAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemalaunchapprequest"></a>
<a id="schema_LaunchAppRequest"></a>
<a id="tocSlaunchapprequest"></a>
<a id="tocslaunchapprequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_ListAppsResponse">ListAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappsresponse"></a>
<a id="schema_ListAppsResponse"></a>
<a id="tocSlistappsresponse"></a>
<a id="tocslistappsresponse"></a>

```json
{
  "apps": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAppsRequest">ListAppsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistappsrequest"></a>
<a id="schema_ListAppsRequest"></a>
<a id="tocSlistappsrequest"></a>
<a id="tocslistappsrequest"></a>

```json
{
  "appIds": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appIds|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_NotifyAppValidationOutputResponse">NotifyAppValidationOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotifyappvalidationoutputresponse"></a>
<a id="schema_NotifyAppValidationOutputResponse"></a>
<a id="tocSnotifyappvalidationoutputresponse"></a>
<a id="tocsnotifyappvalidationoutputresponse"></a>

```json
{}
```

<h2 id="tocS_NotifyAppValidationOutputRequest">NotifyAppValidationOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotifyappvalidationoutputrequest"></a>
<a id="schema_NotifyAppValidationOutputRequest"></a>
<a id="tocSnotifyappvalidationoutputrequest"></a>
<a id="tocsnotifyappvalidationoutputrequest"></a>

```json
{
  "appId": {},
  "notificationContext": {
    "validationId": {},
    "status": {},
    "statusMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|true|none|none|
|notificationContext|object|false|none|none|

<h2 id="tocS_PutAppLaunchConfigurationResponse">PutAppLaunchConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputapplaunchconfigurationresponse"></a>
<a id="schema_PutAppLaunchConfigurationResponse"></a>
<a id="tocSputapplaunchconfigurationresponse"></a>
<a id="tocsputapplaunchconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_PutAppLaunchConfigurationRequest">PutAppLaunchConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputapplaunchconfigurationrequest"></a>
<a id="schema_PutAppLaunchConfigurationRequest"></a>
<a id="tocSputapplaunchconfigurationrequest"></a>
<a id="tocsputapplaunchconfigurationrequest"></a>

```json
{
  "appId": {},
  "roleName": {},
  "autoLaunch": {},
  "serverGroupLaunchConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|roleName|object|false|none|none|
|autoLaunch|object|false|none|none|
|serverGroupLaunchConfigurations|object|false|none|none|

<h2 id="tocS_PutAppReplicationConfigurationResponse">PutAppReplicationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputappreplicationconfigurationresponse"></a>
<a id="schema_PutAppReplicationConfigurationResponse"></a>
<a id="tocSputappreplicationconfigurationresponse"></a>
<a id="tocsputappreplicationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_PutAppReplicationConfigurationRequest">PutAppReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputappreplicationconfigurationrequest"></a>
<a id="schema_PutAppReplicationConfigurationRequest"></a>
<a id="tocSputappreplicationconfigurationrequest"></a>
<a id="tocsputappreplicationconfigurationrequest"></a>

```json
{
  "appId": {},
  "serverGroupReplicationConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|serverGroupReplicationConfigurations|object|false|none|none|

<h2 id="tocS_PutAppValidationConfigurationResponse">PutAppValidationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputappvalidationconfigurationresponse"></a>
<a id="schema_PutAppValidationConfigurationResponse"></a>
<a id="tocSputappvalidationconfigurationresponse"></a>
<a id="tocsputappvalidationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_PutAppValidationConfigurationRequest">PutAppValidationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputappvalidationconfigurationrequest"></a>
<a id="schema_PutAppValidationConfigurationRequest"></a>
<a id="tocSputappvalidationconfigurationrequest"></a>
<a id="tocsputappvalidationconfigurationrequest"></a>

```json
{
  "appId": {},
  "appValidationConfigurations": {},
  "serverGroupValidationConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|true|none|none|
|appValidationConfigurations|object|false|none|none|
|serverGroupValidationConfigurations|object|false|none|none|

<h2 id="tocS_StartAppReplicationResponse">StartAppReplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartappreplicationresponse"></a>
<a id="schema_StartAppReplicationResponse"></a>
<a id="tocSstartappreplicationresponse"></a>
<a id="tocsstartappreplicationresponse"></a>

```json
{}
```

<h2 id="tocS_StartAppReplicationRequest">StartAppReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartappreplicationrequest"></a>
<a id="schema_StartAppReplicationRequest"></a>
<a id="tocSstartappreplicationrequest"></a>
<a id="tocsstartappreplicationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_StartOnDemandAppReplicationResponse">StartOnDemandAppReplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartondemandappreplicationresponse"></a>
<a id="schema_StartOnDemandAppReplicationResponse"></a>
<a id="tocSstartondemandappreplicationresponse"></a>
<a id="tocsstartondemandappreplicationresponse"></a>

```json
{}
```

<h2 id="tocS_StartOnDemandAppReplicationRequest">StartOnDemandAppReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartondemandappreplicationrequest"></a>
<a id="schema_StartOnDemandAppReplicationRequest"></a>
<a id="tocSstartondemandappreplicationrequest"></a>
<a id="tocsstartondemandappreplicationrequest"></a>

```json
{
  "appId": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_StartOnDemandReplicationRunResponse">StartOnDemandReplicationRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartondemandreplicationrunresponse"></a>
<a id="schema_StartOnDemandReplicationRunResponse"></a>
<a id="tocSstartondemandreplicationrunresponse"></a>
<a id="tocsstartondemandreplicationrunresponse"></a>

```json
{
  "replicationRunId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationRunId|object|false|none|none|

<h2 id="tocS_StartOnDemandReplicationRunRequest">StartOnDemandReplicationRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartondemandreplicationrunrequest"></a>
<a id="schema_StartOnDemandReplicationRunRequest"></a>
<a id="tocSstartondemandreplicationrunrequest"></a>
<a id="tocsstartondemandreplicationrunrequest"></a>

```json
{
  "replicationJobId": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobId|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_ReplicationRunLimitExceededException">ReplicationRunLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunlimitexceededexception"></a>
<a id="schema_ReplicationRunLimitExceededException"></a>
<a id="tocSreplicationrunlimitexceededexception"></a>
<a id="tocsreplicationrunlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DryRunOperationException">DryRunOperationException</h2>
<!-- backwards compatibility -->
<a id="schemadryrunoperationexception"></a>
<a id="schema_DryRunOperationException"></a>
<a id="tocSdryrunoperationexception"></a>
<a id="tocsdryrunoperationexception"></a>

```json
null
```

<h2 id="tocS_StopAppReplicationResponse">StopAppReplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopappreplicationresponse"></a>
<a id="schema_StopAppReplicationResponse"></a>
<a id="tocSstopappreplicationresponse"></a>
<a id="tocsstopappreplicationresponse"></a>

```json
{}
```

<h2 id="tocS_StopAppReplicationRequest">StopAppReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopappreplicationrequest"></a>
<a id="schema_StopAppReplicationRequest"></a>
<a id="tocSstopappreplicationrequest"></a>
<a id="tocsstopappreplicationrequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_TerminateAppResponse">TerminateAppResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminateappresponse"></a>
<a id="schema_TerminateAppResponse"></a>
<a id="tocSterminateappresponse"></a>
<a id="tocsterminateappresponse"></a>

```json
{}
```

<h2 id="tocS_TerminateAppRequest">TerminateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminateapprequest"></a>
<a id="schema_TerminateAppRequest"></a>
<a id="tocSterminateapprequest"></a>
<a id="tocsterminateapprequest"></a>

```json
{
  "appId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|

<h2 id="tocS_UpdateAppResponse">UpdateAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappresponse"></a>
<a id="schema_UpdateAppResponse"></a>
<a id="tocSupdateappresponse"></a>
<a id="tocsupdateappresponse"></a>

```json
{
  "appSummary": {
    "appId": {},
    "importedAppId": {},
    "name": {},
    "description": {},
    "status": {},
    "statusMessage": {},
    "replicationConfigurationStatus": {},
    "replicationStatus": {},
    "replicationStatusMessage": {},
    "latestReplicationTime": {},
    "launchConfigurationStatus": {},
    "launchStatus": {},
    "launchStatusMessage": {},
    "launchDetails": {
      "latestLaunchTime": {},
      "stackName": {},
      "stackId": {}
    },
    "creationTime": {},
    "lastModified": {},
    "roleName": {},
    "totalServerGroups": {},
    "totalServers": {}
  },
  "serverGroups": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appSummary|object|false|none|none|
|serverGroups|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UpdateAppRequest">UpdateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprequest"></a>
<a id="schema_UpdateAppRequest"></a>
<a id="tocSupdateapprequest"></a>
<a id="tocsupdateapprequest"></a>

```json
{
  "appId": {},
  "name": {},
  "description": {},
  "roleName": {},
  "serverGroups": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|roleName|object|false|none|none|
|serverGroups|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UpdateReplicationJobResponse">UpdateReplicationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationjobresponse"></a>
<a id="schema_UpdateReplicationJobResponse"></a>
<a id="tocSupdatereplicationjobresponse"></a>
<a id="tocsupdatereplicationjobresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateReplicationJobRequest">UpdateReplicationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationjobrequest"></a>
<a id="schema_UpdateReplicationJobRequest"></a>
<a id="tocSupdatereplicationjobrequest"></a>
<a id="tocsupdatereplicationjobrequest"></a>

```json
{
  "replicationJobId": {},
  "frequency": {},
  "nextReplicationRunStartTime": {},
  "licenseType": {},
  "roleName": {},
  "description": {},
  "numberOfRecentAmisToKeep": {},
  "encrypted": {},
  "kmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobId|object|true|none|none|
|frequency|object|false|none|none|
|nextReplicationRunStartTime|object|false|none|none|
|licenseType|object|false|none|none|
|roleName|object|false|none|none|
|description|object|false|none|none|
|numberOfRecentAmisToKeep|object|false|none|none|
|encrypted|object|false|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_AmiId">AmiId</h2>
<!-- backwards compatibility -->
<a id="schemaamiid"></a>
<a id="schema_AmiId"></a>
<a id="tocSamiid"></a>
<a id="tocsamiid"></a>

```json
"string"
```

<h2 id="tocS_AppDescription">AppDescription</h2>
<!-- backwards compatibility -->
<a id="schemaappdescription"></a>
<a id="schema_AppDescription"></a>
<a id="tocSappdescription"></a>
<a id="tocsappdescription"></a>

```json
"string"
```

<h2 id="tocS_AppId">AppId</h2>
<!-- backwards compatibility -->
<a id="schemaappid"></a>
<a id="schema_AppId"></a>
<a id="tocSappid"></a>
<a id="tocsappid"></a>

```json
"string"
```

<h2 id="tocS_AppIdWithValidation">AppIdWithValidation</h2>
<!-- backwards compatibility -->
<a id="schemaappidwithvalidation"></a>
<a id="schema_AppIdWithValidation"></a>
<a id="tocSappidwithvalidation"></a>
<a id="tocsappidwithvalidation"></a>

```json
"string"
```

<h2 id="tocS_AppIds">AppIds</h2>
<!-- backwards compatibility -->
<a id="schemaappids"></a>
<a id="schema_AppIds"></a>
<a id="tocSappids"></a>
<a id="tocsappids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AppLaunchConfigurationStatus">AppLaunchConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplaunchconfigurationstatus"></a>
<a id="schema_AppLaunchConfigurationStatus"></a>
<a id="tocSapplaunchconfigurationstatus"></a>
<a id="tocsapplaunchconfigurationstatus"></a>

```json
"NOT_CONFIGURED"
```

<h2 id="tocS_AppLaunchStatus">AppLaunchStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplaunchstatus"></a>
<a id="schema_AppLaunchStatus"></a>
<a id="tocSapplaunchstatus"></a>
<a id="tocsapplaunchstatus"></a>

```json
"READY_FOR_CONFIGURATION"
```

<h2 id="tocS_AppLaunchStatusMessage">AppLaunchStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplaunchstatusmessage"></a>
<a id="schema_AppLaunchStatusMessage"></a>
<a id="tocSapplaunchstatusmessage"></a>
<a id="tocsapplaunchstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_AppName">AppName</h2>
<!-- backwards compatibility -->
<a id="schemaappname"></a>
<a id="schema_AppName"></a>
<a id="tocSappname"></a>
<a id="tocsappname"></a>

```json
"string"
```

<h2 id="tocS_AppReplicationConfigurationStatus">AppReplicationConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaappreplicationconfigurationstatus"></a>
<a id="schema_AppReplicationConfigurationStatus"></a>
<a id="tocSappreplicationconfigurationstatus"></a>
<a id="tocsappreplicationconfigurationstatus"></a>

```json
"NOT_CONFIGURED"
```

<h2 id="tocS_AppReplicationStatus">AppReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaappreplicationstatus"></a>
<a id="schema_AppReplicationStatus"></a>
<a id="tocSappreplicationstatus"></a>
<a id="tocsappreplicationstatus"></a>

```json
"READY_FOR_CONFIGURATION"
```

<h2 id="tocS_AppReplicationStatusMessage">AppReplicationStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaappreplicationstatusmessage"></a>
<a id="schema_AppReplicationStatusMessage"></a>
<a id="tocSappreplicationstatusmessage"></a>
<a id="tocsappreplicationstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_AppStatus">AppStatus</h2>
<!-- backwards compatibility -->
<a id="schemaappstatus"></a>
<a id="schema_AppStatus"></a>
<a id="tocSappstatus"></a>
<a id="tocsappstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_AppStatusMessage">AppStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaappstatusmessage"></a>
<a id="schema_AppStatusMessage"></a>
<a id="tocSappstatusmessage"></a>
<a id="tocsappstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ImportedAppId">ImportedAppId</h2>
<!-- backwards compatibility -->
<a id="schemaimportedappid"></a>
<a id="schema_ImportedAppId"></a>
<a id="tocSimportedappid"></a>
<a id="tocsimportedappid"></a>

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

<h2 id="tocS_LaunchDetails">LaunchDetails</h2>
<!-- backwards compatibility -->
<a id="schemalaunchdetails"></a>
<a id="schema_LaunchDetails"></a>
<a id="tocSlaunchdetails"></a>
<a id="tocslaunchdetails"></a>

```json
{
  "latestLaunchTime": {},
  "stackName": {},
  "stackId": {}
}
```

Details about the latest launch of an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestLaunchTime|object|false|none|none|
|stackName|object|false|none|none|
|stackId|object|false|none|none|

<h2 id="tocS_RoleName">RoleName</h2>
<!-- backwards compatibility -->
<a id="schemarolename"></a>
<a id="schema_RoleName"></a>
<a id="tocSrolename"></a>
<a id="tocsrolename"></a>

```json
"string"
```

<h2 id="tocS_TotalServerGroups">TotalServerGroups</h2>
<!-- backwards compatibility -->
<a id="schematotalservergroups"></a>
<a id="schema_TotalServerGroups"></a>
<a id="tocStotalservergroups"></a>
<a id="tocstotalservergroups"></a>

```json
0
```

<h2 id="tocS_TotalServers">TotalServers</h2>
<!-- backwards compatibility -->
<a id="schematotalservers"></a>
<a id="schema_TotalServers"></a>
<a id="tocStotalservers"></a>
<a id="tocstotalservers"></a>

```json
0
```

<h2 id="tocS_AppSummary">AppSummary</h2>
<!-- backwards compatibility -->
<a id="schemaappsummary"></a>
<a id="schema_AppSummary"></a>
<a id="tocSappsummary"></a>
<a id="tocsappsummary"></a>

```json
{
  "appId": {},
  "importedAppId": {},
  "name": {},
  "description": {},
  "status": {},
  "statusMessage": {},
  "replicationConfigurationStatus": {},
  "replicationStatus": {},
  "replicationStatusMessage": {},
  "latestReplicationTime": {},
  "launchConfigurationStatus": {},
  "launchStatus": {},
  "launchStatusMessage": {},
  "launchDetails": {
    "latestLaunchTime": {},
    "stackName": {},
    "stackId": {}
  },
  "creationTime": {},
  "lastModified": {},
  "roleName": {},
  "totalServerGroups": {},
  "totalServers": {}
}
```

Information about the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|object|false|none|none|
|importedAppId|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|replicationConfigurationStatus|object|false|none|none|
|replicationStatus|object|false|none|none|
|replicationStatusMessage|object|false|none|none|
|latestReplicationTime|object|false|none|none|
|launchConfigurationStatus|object|false|none|none|
|launchStatus|object|false|none|none|
|launchStatusMessage|object|false|none|none|
|launchDetails|object|false|none|none|
|creationTime|object|false|none|none|
|lastModified|object|false|none|none|
|roleName|object|false|none|none|
|totalServerGroups|object|false|none|none|
|totalServers|object|false|none|none|

<h2 id="tocS_ValidationId">ValidationId</h2>
<!-- backwards compatibility -->
<a id="schemavalidationid"></a>
<a id="schema_ValidationId"></a>
<a id="tocSvalidationid"></a>
<a id="tocsvalidationid"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyStringWithMaxLen255">NonEmptyStringWithMaxLen255</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystringwithmaxlen255"></a>
<a id="schema_NonEmptyStringWithMaxLen255"></a>
<a id="tocSnonemptystringwithmaxlen255"></a>
<a id="tocsnonemptystringwithmaxlen255"></a>

```json
"string"
```

<h2 id="tocS_AppValidationStrategy">AppValidationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaappvalidationstrategy"></a>
<a id="schema_AppValidationStrategy"></a>
<a id="tocSappvalidationstrategy"></a>
<a id="tocsappvalidationstrategy"></a>

```json
"SSM"
```

<h2 id="tocS_SSMValidationParameters">SSMValidationParameters</h2>
<!-- backwards compatibility -->
<a id="schemassmvalidationparameters"></a>
<a id="schema_SSMValidationParameters"></a>
<a id="tocSssmvalidationparameters"></a>
<a id="tocsssmvalidationparameters"></a>

```json
{
  "source": {
    "s3Location": {
      "bucket": {},
      "key": {}
    }
  },
  "instanceId": {},
  "scriptType": {},
  "command": {},
  "executionTimeoutSeconds": {},
  "outputS3BucketName": {}
}
```

Contains validation parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|instanceId|object|false|none|none|
|scriptType|object|false|none|none|
|command|object|false|none|none|
|executionTimeoutSeconds|object|false|none|none|
|outputS3BucketName|object|false|none|none|

<h2 id="tocS_AppValidationConfiguration">AppValidationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaappvalidationconfiguration"></a>
<a id="schema_AppValidationConfiguration"></a>
<a id="tocSappvalidationconfiguration"></a>
<a id="tocsappvalidationconfiguration"></a>

```json
{
  "validationId": {},
  "name": {},
  "appValidationStrategy": {},
  "ssmValidationParameters": {
    "source": {
      "s3Location": {
        "bucket": {},
        "key": {}
      }
    },
    "instanceId": {},
    "scriptType": {},
    "command": {},
    "executionTimeoutSeconds": {},
    "outputS3BucketName": {}
  }
}
```

Configuration for validating an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validationId|object|false|none|none|
|name|object|false|none|none|
|appValidationStrategy|object|false|none|none|
|ssmValidationParameters|object|false|none|none|

<h2 id="tocS_AppValidationConfigurations">AppValidationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaappvalidationconfigurations"></a>
<a id="schema_AppValidationConfigurations"></a>
<a id="tocSappvalidationconfigurations"></a>
<a id="tocsappvalidationconfigurations"></a>

```json
[
  {
    "validationId": {},
    "name": {},
    "appValidationStrategy": {},
    "ssmValidationParameters": {
      "source": {
        "s3Location": {
          "bucket": {},
          "key": {}
        }
      },
      "instanceId": {},
      "scriptType": {},
      "command": {},
      "executionTimeoutSeconds": {},
      "outputS3BucketName": {}
    }
  }
]
```

<h2 id="tocS_SSMOutput">SSMOutput</h2>
<!-- backwards compatibility -->
<a id="schemassmoutput"></a>
<a id="schema_SSMOutput"></a>
<a id="tocSssmoutput"></a>
<a id="tocsssmoutput"></a>

```json
{
  "s3Location": {
    "bucket": {},
    "key": {}
  }
}
```

Contains the location of validation output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Location|[S3Location](#schemas3location)|false|none|Location of an Amazon S3 object.|

<h2 id="tocS_AppValidationOutput">AppValidationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaappvalidationoutput"></a>
<a id="schema_AppValidationOutput"></a>
<a id="tocSappvalidationoutput"></a>
<a id="tocsappvalidationoutput"></a>

```json
{
  "ssmOutput": {
    "s3Location": {
      "bucket": {},
      "key": {}
    }
  }
}
```

Output from validating an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssmOutput|object|false|none|none|

<h2 id="tocS_Apps">Apps</h2>
<!-- backwards compatibility -->
<a id="schemaapps"></a>
<a id="schema_Apps"></a>
<a id="tocSapps"></a>
<a id="tocsapps"></a>

```json
[
  {
    "appId": {},
    "importedAppId": {},
    "name": {},
    "description": {},
    "status": {},
    "statusMessage": {},
    "replicationConfigurationStatus": {},
    "replicationStatus": {},
    "replicationStatusMessage": {},
    "latestReplicationTime": {},
    "launchConfigurationStatus": {},
    "launchStatus": {},
    "launchStatusMessage": {},
    "launchDetails": {
      "latestLaunchTime": {},
      "stackName": {},
      "stackId": {}
    },
    "creationTime": {},
    "lastModified": {},
    "roleName": {},
    "totalServerGroups": {},
    "totalServers": {}
  }
]
```

<h2 id="tocS_AssociatePublicIpAddress">AssociatePublicIpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaassociatepublicipaddress"></a>
<a id="schema_AssociatePublicIpAddress"></a>
<a id="tocSassociatepublicipaddress"></a>
<a id="tocsassociatepublicipaddress"></a>

```json
true
```

<h2 id="tocS_AutoLaunch">AutoLaunch</h2>
<!-- backwards compatibility -->
<a id="schemaautolaunch"></a>
<a id="schema_AutoLaunch"></a>
<a id="tocSautolaunch"></a>
<a id="tocsautolaunch"></a>

```json
true
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

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

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
"string"
```

<h2 id="tocS_ConnectorId">ConnectorId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorid"></a>
<a id="schema_ConnectorId"></a>
<a id="tocSconnectorid"></a>
<a id="tocsconnectorid"></a>

```json
"string"
```

<h2 id="tocS_ConnectorVersion">ConnectorVersion</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorversion"></a>
<a id="schema_ConnectorVersion"></a>
<a id="tocSconnectorversion"></a>
<a id="tocsconnectorversion"></a>

```json
"string"
```

<h2 id="tocS_ConnectorStatus">ConnectorStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorstatus"></a>
<a id="schema_ConnectorStatus"></a>
<a id="tocSconnectorstatus"></a>
<a id="tocsconnectorstatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_ConnectorCapabilityList">ConnectorCapabilityList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorcapabilitylist"></a>
<a id="schema_ConnectorCapabilityList"></a>
<a id="tocSconnectorcapabilitylist"></a>
<a id="tocsconnectorcapabilitylist"></a>

```json
[
  "VSPHERE"
]
```

<h2 id="tocS_VmManagerName">VmManagerName</h2>
<!-- backwards compatibility -->
<a id="schemavmmanagername"></a>
<a id="schema_VmManagerName"></a>
<a id="tocSvmmanagername"></a>
<a id="tocsvmmanagername"></a>

```json
"string"
```

<h2 id="tocS_VmManagerType">VmManagerType</h2>
<!-- backwards compatibility -->
<a id="schemavmmanagertype"></a>
<a id="schema_VmManagerType"></a>
<a id="tocSvmmanagertype"></a>
<a id="tocsvmmanagertype"></a>

```json
"VSPHERE"
```

<h2 id="tocS_VmManagerId">VmManagerId</h2>
<!-- backwards compatibility -->
<a id="schemavmmanagerid"></a>
<a id="schema_VmManagerId"></a>
<a id="tocSvmmanagerid"></a>
<a id="tocsvmmanagerid"></a>

```json
"string"
```

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_MacAddress">MacAddress</h2>
<!-- backwards compatibility -->
<a id="schemamacaddress"></a>
<a id="schema_MacAddress"></a>
<a id="tocSmacaddress"></a>
<a id="tocsmacaddress"></a>

```json
"string"
```

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "connectorId": {},
  "version": {},
  "status": {},
  "capabilityList": {},
  "vmManagerName": {},
  "vmManagerType": {},
  "vmManagerId": {},
  "ipAddress": {},
  "macAddress": {},
  "associatedOn": {}
}
```

Represents a connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorId|object|false|none|none|
|version|object|false|none|none|
|status|object|false|none|none|
|capabilityList|object|false|none|none|
|vmManagerName|object|false|none|none|
|vmManagerType|object|false|none|none|
|vmManagerId|object|false|none|none|
|ipAddress|object|false|none|none|
|macAddress|object|false|none|none|
|associatedOn|object|false|none|none|

<h2 id="tocS_ConnectorCapability">ConnectorCapability</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorcapability"></a>
<a id="schema_ConnectorCapability"></a>
<a id="tocSconnectorcapability"></a>
<a id="tocsconnectorcapability"></a>

```json
"VSPHERE"
```

<h2 id="tocS_ConnectorList">ConnectorList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorlist"></a>
<a id="schema_ConnectorList"></a>
<a id="tocSconnectorlist"></a>
<a id="tocsconnectorlist"></a>

```json
[
  {
    "connectorId": {},
    "version": {},
    "status": {},
    "capabilityList": {},
    "vmManagerName": {},
    "vmManagerType": {},
    "vmManagerId": {},
    "ipAddress": {},
    "macAddress": {},
    "associatedOn": {}
  }
]
```

<h2 id="tocS_ServerGroups">ServerGroups</h2>
<!-- backwards compatibility -->
<a id="schemaservergroups"></a>
<a id="schema_ServerGroups"></a>
<a id="tocSservergroups"></a>
<a id="tocsservergroups"></a>

```json
[
  {
    "serverGroupId": {},
    "name": {},
    "serverList": {}
  }
]
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_ServerId">ServerId</h2>
<!-- backwards compatibility -->
<a id="schemaserverid"></a>
<a id="schema_ServerId"></a>
<a id="tocSserverid"></a>
<a id="tocsserverid"></a>

```json
"string"
```

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
0
```

<h2 id="tocS_RunOnce">RunOnce</h2>
<!-- backwards compatibility -->
<a id="schemarunonce"></a>
<a id="schema_RunOnce"></a>
<a id="tocSrunonce"></a>
<a id="tocsrunonce"></a>

```json
true
```

<h2 id="tocS_LicenseType">LicenseType</h2>
<!-- backwards compatibility -->
<a id="schemalicensetype"></a>
<a id="schema_LicenseType"></a>
<a id="tocSlicensetype"></a>
<a id="tocslicensetype"></a>

```json
"AWS"
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

<h2 id="tocS_NumberOfRecentAmisToKeep">NumberOfRecentAmisToKeep</h2>
<!-- backwards compatibility -->
<a id="schemanumberofrecentamistokeep"></a>
<a id="schema_NumberOfRecentAmisToKeep"></a>
<a id="tocSnumberofrecentamistokeep"></a>
<a id="tocsnumberofrecentamistokeep"></a>

```json
0
```

<h2 id="tocS_Encrypted">Encrypted</h2>
<!-- backwards compatibility -->
<a id="schemaencrypted"></a>
<a id="schema_Encrypted"></a>
<a id="tocSencrypted"></a>
<a id="tocsencrypted"></a>

```json
true
```

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_ReplicationJobId">ReplicationJobId</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjobid"></a>
<a id="schema_ReplicationJobId"></a>
<a id="tocSreplicationjobid"></a>
<a id="tocsreplicationjobid"></a>

```json
"string"
```

<h2 id="tocS_ForceStopAppReplication">ForceStopAppReplication</h2>
<!-- backwards compatibility -->
<a id="schemaforcestopappreplication"></a>
<a id="schema_ForceStopAppReplication"></a>
<a id="tocSforcestopappreplication"></a>
<a id="tocsforcestopappreplication"></a>

```json
true
```

<h2 id="tocS_ForceTerminateApp">ForceTerminateApp</h2>
<!-- backwards compatibility -->
<a id="schemaforceterminateapp"></a>
<a id="schema_ForceTerminateApp"></a>
<a id="tocSforceterminateapp"></a>
<a id="tocsforceterminateapp"></a>

```json
true
```

<h2 id="tocS_EC2KeyName">EC2KeyName</h2>
<!-- backwards compatibility -->
<a id="schemaec2keyname"></a>
<a id="schema_EC2KeyName"></a>
<a id="tocSec2keyname"></a>
<a id="tocsec2keyname"></a>

```json
"string"
```

<h2 id="tocS_ExecutionTimeoutSeconds">ExecutionTimeoutSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiontimeoutseconds"></a>
<a id="schema_ExecutionTimeoutSeconds"></a>
<a id="tocSexecutiontimeoutseconds"></a>
<a id="tocsexecutiontimeoutseconds"></a>

```json
60
```

<h2 id="tocS_OutputFormat">OutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformat"></a>
<a id="schema_OutputFormat"></a>
<a id="tocSoutputformat"></a>
<a id="tocsoutputformat"></a>

```json
"JSON"
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "bucket": {},
  "key": {}
}
```

Location of an Amazon S3 object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|key|object|false|none|none|

<h2 id="tocS_ServerGroupLaunchConfigurations">ServerGroupLaunchConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaservergrouplaunchconfigurations"></a>
<a id="schema_ServerGroupLaunchConfigurations"></a>
<a id="tocSservergrouplaunchconfigurations"></a>
<a id="tocsservergrouplaunchconfigurations"></a>

```json
[
  {
    "serverGroupId": {},
    "launchOrder": {},
    "serverLaunchConfigurations": {}
  }
]
```

<h2 id="tocS_ServerGroupReplicationConfigurations">ServerGroupReplicationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaservergroupreplicationconfigurations"></a>
<a id="schema_ServerGroupReplicationConfigurations"></a>
<a id="tocSservergroupreplicationconfigurations"></a>
<a id="tocsservergroupreplicationconfigurations"></a>

```json
[
  {
    "serverGroupId": {},
    "serverReplicationConfigurations": {}
  }
]
```

<h2 id="tocS_ServerGroupValidationConfigurations">ServerGroupValidationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaservergroupvalidationconfigurations"></a>
<a id="schema_ServerGroupValidationConfigurations"></a>
<a id="tocSservergroupvalidationconfigurations"></a>
<a id="tocsservergroupvalidationconfigurations"></a>

```json
[
  {
    "serverGroupId": {},
    "serverValidationConfigurations": {}
  }
]
```

<h2 id="tocS_ValidationOutputList">ValidationOutputList</h2>
<!-- backwards compatibility -->
<a id="schemavalidationoutputlist"></a>
<a id="schema_ValidationOutputList"></a>
<a id="tocSvalidationoutputlist"></a>
<a id="tocsvalidationoutputlist"></a>

```json
[
  {
    "validationId": {},
    "name": {},
    "status": {},
    "statusMessage": {},
    "latestValidationTime": {},
    "appValidationOutput": {
      "ssmOutput": {
        "s3Location": {
          "bucket": {},
          "key": {}
        }
      }
    },
    "serverValidationOutput": {
      "server": {
        "serverId": {},
        "serverType": {},
        "vmServer": {
          "vmServerAddress": {
            "vmManagerId": {},
            "vmId": {}
          },
          "vmName": {},
          "vmManagerName": {},
          "vmManagerType": {},
          "vmPath": {}
        },
        "replicationJobId": {},
        "replicationJobTerminated": {}
      }
    }
  }
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
0
```

<h2 id="tocS_ReplicationJobList">ReplicationJobList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjoblist"></a>
<a id="schema_ReplicationJobList"></a>
<a id="tocSreplicationjoblist"></a>
<a id="tocsreplicationjoblist"></a>

```json
[
  {
    "replicationJobId": {},
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "seedReplicationTime": {},
    "frequency": {},
    "runOnce": {},
    "nextReplicationRunStartTime": {},
    "licenseType": {},
    "roleName": {},
    "latestAmiId": {},
    "state": {},
    "statusMessage": {},
    "description": {},
    "numberOfRecentAmisToKeep": {},
    "encrypted": {},
    "kmsKeyId": {},
    "replicationRunList": {}
  }
]
```

<h2 id="tocS_ReplicationJob">ReplicationJob</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjob"></a>
<a id="schema_ReplicationJob"></a>
<a id="tocSreplicationjob"></a>
<a id="tocsreplicationjob"></a>

```json
{
  "replicationJobId": {},
  "serverId": {},
  "serverType": {},
  "vmServer": {
    "vmServerAddress": {
      "vmManagerId": {},
      "vmId": {}
    },
    "vmName": {},
    "vmManagerName": {},
    "vmManagerType": {},
    "vmPath": {}
  },
  "seedReplicationTime": {},
  "frequency": {},
  "runOnce": {},
  "nextReplicationRunStartTime": {},
  "licenseType": {},
  "roleName": {},
  "latestAmiId": {},
  "state": {},
  "statusMessage": {},
  "description": {},
  "numberOfRecentAmisToKeep": {},
  "encrypted": {},
  "kmsKeyId": {},
  "replicationRunList": {}
}
```

Represents a replication job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationJobId|object|false|none|none|
|serverId|object|false|none|none|
|serverType|object|false|none|none|
|vmServer|object|false|none|none|
|seedReplicationTime|object|false|none|none|
|frequency|object|false|none|none|
|runOnce|object|false|none|none|
|nextReplicationRunStartTime|object|false|none|none|
|licenseType|object|false|none|none|
|roleName|object|false|none|none|
|latestAmiId|object|false|none|none|
|state|object|false|none|none|
|statusMessage|object|false|none|none|
|description|object|false|none|none|
|numberOfRecentAmisToKeep|object|false|none|none|
|encrypted|object|false|none|none|
|kmsKeyId|object|false|none|none|
|replicationRunList|object|false|none|none|

<h2 id="tocS_ReplicationRunList">ReplicationRunList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunlist"></a>
<a id="schema_ReplicationRunList"></a>
<a id="tocSreplicationrunlist"></a>
<a id="tocsreplicationrunlist"></a>

```json
[
  {
    "replicationRunId": {},
    "state": {},
    "type": {},
    "stageDetails": {
      "stage": {},
      "stageProgress": {}
    },
    "statusMessage": {},
    "amiId": {},
    "scheduledStartTime": {},
    "completedTime": {},
    "description": {},
    "encrypted": {},
    "kmsKeyId": {}
  }
]
```

<h2 id="tocS_VmServerAddressList">VmServerAddressList</h2>
<!-- backwards compatibility -->
<a id="schemavmserveraddresslist"></a>
<a id="schema_VmServerAddressList"></a>
<a id="tocSvmserveraddresslist"></a>
<a id="tocsvmserveraddresslist"></a>

```json
[
  {
    "vmManagerId": {},
    "vmId": {}
  }
]
```

<h2 id="tocS_ServerCatalogStatus">ServerCatalogStatus</h2>
<!-- backwards compatibility -->
<a id="schemaservercatalogstatus"></a>
<a id="schema_ServerCatalogStatus"></a>
<a id="tocSservercatalogstatus"></a>
<a id="tocsservercatalogstatus"></a>

```json
"NOT_IMPORTED"
```

<h2 id="tocS_ServerList">ServerList</h2>
<!-- backwards compatibility -->
<a id="schemaserverlist"></a>
<a id="schema_ServerList"></a>
<a id="tocSserverlist"></a>
<a id="tocsserverlist"></a>

```json
[
  {
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "replicationJobId": {},
    "replicationJobTerminated": {}
  }
]
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

```json
"string"
```

<h2 id="tocS_StackName">StackName</h2>
<!-- backwards compatibility -->
<a id="schemastackname"></a>
<a id="schema_StackName"></a>
<a id="tocSstackname"></a>
<a id="tocsstackname"></a>

```json
"string"
```

<h2 id="tocS_StackId">StackId</h2>
<!-- backwards compatibility -->
<a id="schemastackid"></a>
<a id="schema_StackId"></a>
<a id="tocSstackid"></a>
<a id="tocsstackid"></a>

```json
"string"
```

<h2 id="tocS_LaunchOrder">LaunchOrder</h2>
<!-- backwards compatibility -->
<a id="schemalaunchorder"></a>
<a id="schema_LaunchOrder"></a>
<a id="tocSlaunchorder"></a>
<a id="tocslaunchorder"></a>

```json
0
```

<h2 id="tocS_LogicalId">LogicalId</h2>
<!-- backwards compatibility -->
<a id="schemalogicalid"></a>
<a id="schema_LogicalId"></a>
<a id="tocSlogicalid"></a>
<a id="tocslogicalid"></a>

```json
"string"
```

<h2 id="tocS_ValidationStatus">ValidationStatus</h2>
<!-- backwards compatibility -->
<a id="schemavalidationstatus"></a>
<a id="schema_ValidationStatus"></a>
<a id="tocSvalidationstatus"></a>
<a id="tocsvalidationstatus"></a>

```json
"READY_FOR_VALIDATION"
```

<h2 id="tocS_ValidationStatusMessage">ValidationStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemavalidationstatusmessage"></a>
<a id="schema_ValidationStatusMessage"></a>
<a id="tocSvalidationstatusmessage"></a>
<a id="tocsvalidationstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_NotificationContext">NotificationContext</h2>
<!-- backwards compatibility -->
<a id="schemanotificationcontext"></a>
<a id="schema_NotificationContext"></a>
<a id="tocSnotificationcontext"></a>
<a id="tocsnotificationcontext"></a>

```json
{
  "validationId": {},
  "status": {},
  "statusMessage": {}
}
```

Contains the status of validating an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validationId|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|

<h2 id="tocS_ServerType">ServerType</h2>
<!-- backwards compatibility -->
<a id="schemaservertype"></a>
<a id="schema_ServerType"></a>
<a id="tocSservertype"></a>
<a id="tocsservertype"></a>

```json
"VIRTUAL_MACHINE"
```

<h2 id="tocS_VmServer">VmServer</h2>
<!-- backwards compatibility -->
<a id="schemavmserver"></a>
<a id="schema_VmServer"></a>
<a id="tocSvmserver"></a>
<a id="tocsvmserver"></a>

```json
{
  "vmServerAddress": {
    "vmManagerId": {},
    "vmId": {}
  },
  "vmName": {},
  "vmManagerName": {},
  "vmManagerType": {},
  "vmPath": {}
}
```

Represents a VM server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vmServerAddress|object|false|none|none|
|vmName|object|false|none|none|
|vmManagerName|object|false|none|none|
|vmManagerType|object|false|none|none|
|vmPath|object|false|none|none|

<h2 id="tocS_ReplicationJobState">ReplicationJobState</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjobstate"></a>
<a id="schema_ReplicationJobState"></a>
<a id="tocSreplicationjobstate"></a>
<a id="tocsreplicationjobstate"></a>

```json
"PENDING"
```

<h2 id="tocS_ReplicationJobStatusMessage">ReplicationJobStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjobstatusmessage"></a>
<a id="schema_ReplicationJobStatusMessage"></a>
<a id="tocSreplicationjobstatusmessage"></a>
<a id="tocsreplicationjobstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ReplicationJobTerminated">ReplicationJobTerminated</h2>
<!-- backwards compatibility -->
<a id="schemareplicationjobterminated"></a>
<a id="schema_ReplicationJobTerminated"></a>
<a id="tocSreplicationjobterminated"></a>
<a id="tocsreplicationjobterminated"></a>

```json
true
```

<h2 id="tocS_ReplicationRunId">ReplicationRunId</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunid"></a>
<a id="schema_ReplicationRunId"></a>
<a id="tocSreplicationrunid"></a>
<a id="tocsreplicationrunid"></a>

```json
"string"
```

<h2 id="tocS_ReplicationRunState">ReplicationRunState</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunstate"></a>
<a id="schema_ReplicationRunState"></a>
<a id="tocSreplicationrunstate"></a>
<a id="tocsreplicationrunstate"></a>

```json
"PENDING"
```

<h2 id="tocS_ReplicationRunType">ReplicationRunType</h2>
<!-- backwards compatibility -->
<a id="schemareplicationruntype"></a>
<a id="schema_ReplicationRunType"></a>
<a id="tocSreplicationruntype"></a>
<a id="tocsreplicationruntype"></a>

```json
"ON_DEMAND"
```

<h2 id="tocS_ReplicationRunStageDetails">ReplicationRunStageDetails</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunstagedetails"></a>
<a id="schema_ReplicationRunStageDetails"></a>
<a id="tocSreplicationrunstagedetails"></a>
<a id="tocsreplicationrunstagedetails"></a>

```json
{
  "stage": {},
  "stageProgress": {}
}
```

Details of the current stage of a replication run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stage|object|false|none|none|
|stageProgress|object|false|none|none|

<h2 id="tocS_ReplicationRunStatusMessage">ReplicationRunStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunstatusmessage"></a>
<a id="schema_ReplicationRunStatusMessage"></a>
<a id="tocSreplicationrunstatusmessage"></a>
<a id="tocsreplicationrunstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ReplicationRun">ReplicationRun</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrun"></a>
<a id="schema_ReplicationRun"></a>
<a id="tocSreplicationrun"></a>
<a id="tocsreplicationrun"></a>

```json
{
  "replicationRunId": {},
  "state": {},
  "type": {},
  "stageDetails": {
    "stage": {},
    "stageProgress": {}
  },
  "statusMessage": {},
  "amiId": {},
  "scheduledStartTime": {},
  "completedTime": {},
  "description": {},
  "encrypted": {},
  "kmsKeyId": {}
}
```

Represents a replication run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationRunId|object|false|none|none|
|state|object|false|none|none|
|type|object|false|none|none|
|stageDetails|object|false|none|none|
|statusMessage|object|false|none|none|
|amiId|object|false|none|none|
|scheduledStartTime|object|false|none|none|
|completedTime|object|false|none|none|
|description|object|false|none|none|
|encrypted|object|false|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_ReplicationRunStage">ReplicationRunStage</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunstage"></a>
<a id="schema_ReplicationRunStage"></a>
<a id="tocSreplicationrunstage"></a>
<a id="tocsreplicationrunstage"></a>

```json
"string"
```

<h2 id="tocS_ReplicationRunStageProgress">ReplicationRunStageProgress</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrunstageprogress"></a>
<a id="schema_ReplicationRunStageProgress"></a>
<a id="tocSreplicationrunstageprogress"></a>
<a id="tocsreplicationrunstageprogress"></a>

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

<h2 id="tocS_S3KeyName">S3KeyName</h2>
<!-- backwards compatibility -->
<a id="schemas3keyname"></a>
<a id="schema_S3KeyName"></a>
<a id="tocSs3keyname"></a>
<a id="tocss3keyname"></a>

```json
"string"
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "s3Location": {
    "bucket": {},
    "key": {}
  }
}
```

Contains the location of a validation script.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Location|[S3Location](#schemas3location)|false|none|Location of an Amazon S3 object.|

<h2 id="tocS_ScriptType">ScriptType</h2>
<!-- backwards compatibility -->
<a id="schemascripttype"></a>
<a id="schema_ScriptType"></a>
<a id="tocSscripttype"></a>
<a id="tocsscripttype"></a>

```json
"SHELL_SCRIPT"
```

<h2 id="tocS_SecurityGroup">SecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroup"></a>
<a id="schema_SecurityGroup"></a>
<a id="tocSsecuritygroup"></a>
<a id="tocssecuritygroup"></a>

```json
"string"
```

<h2 id="tocS_Server">Server</h2>
<!-- backwards compatibility -->
<a id="schemaserver"></a>
<a id="schema_Server"></a>
<a id="tocSserver"></a>
<a id="tocsserver"></a>

```json
{
  "serverId": {},
  "serverType": {},
  "vmServer": {
    "vmServerAddress": {
      "vmManagerId": {},
      "vmId": {}
    },
    "vmName": {},
    "vmManagerName": {},
    "vmManagerType": {},
    "vmPath": {}
  },
  "replicationJobId": {},
  "replicationJobTerminated": {}
}
```

Represents a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverId|object|false|none|none|
|serverType|object|false|none|none|
|vmServer|object|false|none|none|
|replicationJobId|object|false|none|none|
|replicationJobTerminated|object|false|none|none|

<h2 id="tocS_ServerGroupId">ServerGroupId</h2>
<!-- backwards compatibility -->
<a id="schemaservergroupid"></a>
<a id="schema_ServerGroupId"></a>
<a id="tocSservergroupid"></a>
<a id="tocsservergroupid"></a>

```json
"string"
```

<h2 id="tocS_ServerGroupName">ServerGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaservergroupname"></a>
<a id="schema_ServerGroupName"></a>
<a id="tocSservergroupname"></a>
<a id="tocsservergroupname"></a>

```json
"string"
```

<h2 id="tocS_ServerGroup">ServerGroup</h2>
<!-- backwards compatibility -->
<a id="schemaservergroup"></a>
<a id="schema_ServerGroup"></a>
<a id="tocSservergroup"></a>
<a id="tocsservergroup"></a>

```json
{
  "serverGroupId": {},
  "name": {},
  "serverList": {}
}
```

Logical grouping of servers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverGroupId|object|false|none|none|
|name|object|false|none|none|
|serverList|object|false|none|none|

<h2 id="tocS_ServerLaunchConfigurations">ServerLaunchConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaserverlaunchconfigurations"></a>
<a id="schema_ServerLaunchConfigurations"></a>
<a id="tocSserverlaunchconfigurations"></a>
<a id="tocsserverlaunchconfigurations"></a>

```json
[
  {
    "server": {
      "serverId": {},
      "serverType": {},
      "vmServer": {
        "vmServerAddress": {
          "vmManagerId": {},
          "vmId": {}
        },
        "vmName": {},
        "vmManagerName": {},
        "vmManagerType": {},
        "vmPath": {}
      },
      "replicationJobId": {},
      "replicationJobTerminated": {}
    },
    "logicalId": {},
    "vpc": {},
    "subnet": {},
    "securityGroup": {},
    "ec2KeyName": {},
    "userData": {
      "s3Location": {
        "bucket": {},
        "key": {}
      }
    },
    "instanceType": {},
    "associatePublicIpAddress": {},
    "iamInstanceProfileName": {},
    "configureScript": {
      "bucket": {},
      "key": {}
    },
    "configureScriptType": {}
  }
]
```

<h2 id="tocS_ServerGroupLaunchConfiguration">ServerGroupLaunchConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservergrouplaunchconfiguration"></a>
<a id="schema_ServerGroupLaunchConfiguration"></a>
<a id="tocSservergrouplaunchconfiguration"></a>
<a id="tocsservergrouplaunchconfiguration"></a>

```json
{
  "serverGroupId": {},
  "launchOrder": {},
  "serverLaunchConfigurations": {}
}
```

Launch configuration for a server group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverGroupId|object|false|none|none|
|launchOrder|object|false|none|none|
|serverLaunchConfigurations|object|false|none|none|

<h2 id="tocS_ServerReplicationConfigurations">ServerReplicationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaserverreplicationconfigurations"></a>
<a id="schema_ServerReplicationConfigurations"></a>
<a id="tocSserverreplicationconfigurations"></a>
<a id="tocsserverreplicationconfigurations"></a>

```json
[
  {
    "server": {
      "serverId": {},
      "serverType": {},
      "vmServer": {
        "vmServerAddress": {
          "vmManagerId": {},
          "vmId": {}
        },
        "vmName": {},
        "vmManagerName": {},
        "vmManagerType": {},
        "vmPath": {}
      },
      "replicationJobId": {},
      "replicationJobTerminated": {}
    },
    "serverReplicationParameters": {
      "seedTime": {},
      "frequency": {},
      "runOnce": {},
      "licenseType": {},
      "numberOfRecentAmisToKeep": {},
      "encrypted": {},
      "kmsKeyId": {}
    }
  }
]
```

<h2 id="tocS_ServerGroupReplicationConfiguration">ServerGroupReplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservergroupreplicationconfiguration"></a>
<a id="schema_ServerGroupReplicationConfiguration"></a>
<a id="tocSservergroupreplicationconfiguration"></a>
<a id="tocsservergroupreplicationconfiguration"></a>

```json
{
  "serverGroupId": {},
  "serverReplicationConfigurations": {}
}
```

Replication configuration for a server group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverGroupId|object|false|none|none|
|serverReplicationConfigurations|object|false|none|none|

<h2 id="tocS_ServerValidationConfigurations">ServerValidationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaservervalidationconfigurations"></a>
<a id="schema_ServerValidationConfigurations"></a>
<a id="tocSservervalidationconfigurations"></a>
<a id="tocsservervalidationconfigurations"></a>

```json
[
  {
    "server": {
      "serverId": {},
      "serverType": {},
      "vmServer": {
        "vmServerAddress": {
          "vmManagerId": {},
          "vmId": {}
        },
        "vmName": {},
        "vmManagerName": {},
        "vmManagerType": {},
        "vmPath": {}
      },
      "replicationJobId": {},
      "replicationJobTerminated": {}
    },
    "validationId": {},
    "name": {},
    "serverValidationStrategy": {},
    "userDataValidationParameters": {
      "source": {
        "s3Location": {
          "bucket": {},
          "key": {}
        }
      },
      "scriptType": {}
    }
  }
]
```

<h2 id="tocS_ServerGroupValidationConfiguration">ServerGroupValidationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservergroupvalidationconfiguration"></a>
<a id="schema_ServerGroupValidationConfiguration"></a>
<a id="tocSservergroupvalidationconfiguration"></a>
<a id="tocsservergroupvalidationconfiguration"></a>

```json
{
  "serverGroupId": {},
  "serverValidationConfigurations": {}
}
```

Configuration for validating an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverGroupId|object|false|none|none|
|serverValidationConfigurations|object|false|none|none|

<h2 id="tocS_VPC">VPC</h2>
<!-- backwards compatibility -->
<a id="schemavpc"></a>
<a id="schema_VPC"></a>
<a id="tocSvpc"></a>
<a id="tocsvpc"></a>

```json
"string"
```

<h2 id="tocS_Subnet">Subnet</h2>
<!-- backwards compatibility -->
<a id="schemasubnet"></a>
<a id="schema_Subnet"></a>
<a id="tocSsubnet"></a>
<a id="tocssubnet"></a>

```json
"string"
```

<h2 id="tocS_UserData">UserData</h2>
<!-- backwards compatibility -->
<a id="schemauserdata"></a>
<a id="schema_UserData"></a>
<a id="tocSuserdata"></a>
<a id="tocsuserdata"></a>

```json
{
  "s3Location": {
    "bucket": {},
    "key": {}
  }
}
```

A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Location|object|false|none|none|

<h2 id="tocS_ServerLaunchConfiguration">ServerLaunchConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserverlaunchconfiguration"></a>
<a id="schema_ServerLaunchConfiguration"></a>
<a id="tocSserverlaunchconfiguration"></a>
<a id="tocsserverlaunchconfiguration"></a>

```json
{
  "server": {
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "replicationJobId": {},
    "replicationJobTerminated": {}
  },
  "logicalId": {},
  "vpc": {},
  "subnet": {},
  "securityGroup": {},
  "ec2KeyName": {},
  "userData": {
    "s3Location": {
      "bucket": {},
      "key": {}
    }
  },
  "instanceType": {},
  "associatePublicIpAddress": {},
  "iamInstanceProfileName": {},
  "configureScript": {
    "bucket": {},
    "key": {}
  },
  "configureScriptType": {}
}
```

Launch configuration for a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|object|false|none|none|
|logicalId|object|false|none|none|
|vpc|object|false|none|none|
|subnet|object|false|none|none|
|securityGroup|object|false|none|none|
|ec2KeyName|object|false|none|none|
|userData|object|false|none|none|
|instanceType|object|false|none|none|
|associatePublicIpAddress|object|false|none|none|
|iamInstanceProfileName|object|false|none|none|
|configureScript|[S3Location](#schemas3location)|false|none|Location of an Amazon S3 object.|
|configureScriptType|object|false|none|none|

<h2 id="tocS_ServerReplicationParameters">ServerReplicationParameters</h2>
<!-- backwards compatibility -->
<a id="schemaserverreplicationparameters"></a>
<a id="schema_ServerReplicationParameters"></a>
<a id="tocSserverreplicationparameters"></a>
<a id="tocsserverreplicationparameters"></a>

```json
{
  "seedTime": {},
  "frequency": {},
  "runOnce": {},
  "licenseType": {},
  "numberOfRecentAmisToKeep": {},
  "encrypted": {},
  "kmsKeyId": {}
}
```

The replication parameters for replicating a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seedTime|object|false|none|none|
|frequency|object|false|none|none|
|runOnce|object|false|none|none|
|licenseType|object|false|none|none|
|numberOfRecentAmisToKeep|object|false|none|none|
|encrypted|object|false|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_ServerReplicationConfiguration">ServerReplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserverreplicationconfiguration"></a>
<a id="schema_ServerReplicationConfiguration"></a>
<a id="tocSserverreplicationconfiguration"></a>
<a id="tocsserverreplicationconfiguration"></a>

```json
{
  "server": {
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "replicationJobId": {},
    "replicationJobTerminated": {}
  },
  "serverReplicationParameters": {
    "seedTime": {},
    "frequency": {},
    "runOnce": {},
    "licenseType": {},
    "numberOfRecentAmisToKeep": {},
    "encrypted": {},
    "kmsKeyId": {}
  }
}
```

Replication configuration of a server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|object|false|none|none|
|serverReplicationParameters|object|false|none|none|

<h2 id="tocS_ServerValidationStrategy">ServerValidationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaservervalidationstrategy"></a>
<a id="schema_ServerValidationStrategy"></a>
<a id="tocSservervalidationstrategy"></a>
<a id="tocsservervalidationstrategy"></a>

```json
"USERDATA"
```

<h2 id="tocS_UserDataValidationParameters">UserDataValidationParameters</h2>
<!-- backwards compatibility -->
<a id="schemauserdatavalidationparameters"></a>
<a id="schema_UserDataValidationParameters"></a>
<a id="tocSuserdatavalidationparameters"></a>
<a id="tocsuserdatavalidationparameters"></a>

```json
{
  "source": {
    "s3Location": {
      "bucket": {},
      "key": {}
    }
  },
  "scriptType": {}
}
```

Contains validation parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|scriptType|object|false|none|none|

<h2 id="tocS_ServerValidationConfiguration">ServerValidationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservervalidationconfiguration"></a>
<a id="schema_ServerValidationConfiguration"></a>
<a id="tocSservervalidationconfiguration"></a>
<a id="tocsservervalidationconfiguration"></a>

```json
{
  "server": {
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "replicationJobId": {},
    "replicationJobTerminated": {}
  },
  "validationId": {},
  "name": {},
  "serverValidationStrategy": {},
  "userDataValidationParameters": {
    "source": {
      "s3Location": {
        "bucket": {},
        "key": {}
      }
    },
    "scriptType": {}
  }
}
```

Configuration for validating an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|[Server](#schemaserver)|false|none|Represents a server.|
|validationId|object|false|none|none|
|name|object|false|none|none|
|serverValidationStrategy|object|false|none|none|
|userDataValidationParameters|object|false|none|none|

<h2 id="tocS_ServerValidationOutput">ServerValidationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaservervalidationoutput"></a>
<a id="schema_ServerValidationOutput"></a>
<a id="tocSservervalidationoutput"></a>
<a id="tocsservervalidationoutput"></a>

```json
{
  "server": {
    "serverId": {},
    "serverType": {},
    "vmServer": {
      "vmServerAddress": {
        "vmManagerId": {},
        "vmId": {}
      },
      "vmName": {},
      "vmManagerName": {},
      "vmManagerType": {},
      "vmPath": {}
    },
    "replicationJobId": {},
    "replicationJobTerminated": {}
  }
}
```

Contains output from validating an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|[Server](#schemaserver)|false|none|Represents a server.|

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

Key/value pair that can be assigned to an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ValidationOutput">ValidationOutput</h2>
<!-- backwards compatibility -->
<a id="schemavalidationoutput"></a>
<a id="schema_ValidationOutput"></a>
<a id="tocSvalidationoutput"></a>
<a id="tocsvalidationoutput"></a>

```json
{
  "validationId": {},
  "name": {},
  "status": {},
  "statusMessage": {},
  "latestValidationTime": {},
  "appValidationOutput": {
    "ssmOutput": {
      "s3Location": {
        "bucket": {},
        "key": {}
      }
    }
  },
  "serverValidationOutput": {
    "server": {
      "serverId": {},
      "serverType": {},
      "vmServer": {
        "vmServerAddress": {
          "vmManagerId": {},
          "vmId": {}
        },
        "vmName": {},
        "vmManagerName": {},
        "vmManagerType": {},
        "vmPath": {}
      },
      "replicationJobId": {},
      "replicationJobTerminated": {}
    }
  }
}
```

Contains validation output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validationId|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|latestValidationTime|object|false|none|none|
|appValidationOutput|object|false|none|none|
|serverValidationOutput|object|false|none|none|

<h2 id="tocS_VmId">VmId</h2>
<!-- backwards compatibility -->
<a id="schemavmid"></a>
<a id="schema_VmId"></a>
<a id="tocSvmid"></a>
<a id="tocsvmid"></a>

```json
"string"
```

<h2 id="tocS_VmName">VmName</h2>
<!-- backwards compatibility -->
<a id="schemavmname"></a>
<a id="schema_VmName"></a>
<a id="tocSvmname"></a>
<a id="tocsvmname"></a>

```json
"string"
```

<h2 id="tocS_VmPath">VmPath</h2>
<!-- backwards compatibility -->
<a id="schemavmpath"></a>
<a id="schema_VmPath"></a>
<a id="tocSvmpath"></a>
<a id="tocsvmpath"></a>

```json
"string"
```

<h2 id="tocS_VmServerAddress">VmServerAddress</h2>
<!-- backwards compatibility -->
<a id="schemavmserveraddress"></a>
<a id="schema_VmServerAddress"></a>
<a id="tocSvmserveraddress"></a>
<a id="tocsvmserveraddress"></a>

```json
{
  "vmManagerId": {},
  "vmId": {}
}
```

Represents a VM server location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vmManagerId|object|false|none|none|
|vmId|object|false|none|none|
