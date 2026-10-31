<h1 id="application-migration-service">Application Migration Service v2020-02-26</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Application Migration Service service.

Base URLs:

* <a href="http://mgn.us-east-1.amazonaws.com">http://mgn.us-east-1.amazonaws.com</a> - The mgn multi-region endpoint

* <a href="https://mgn.us-east-1.amazonaws.com">https://mgn.us-east-1.amazonaws.com</a> - The mgn multi-region endpoint

* <a href="http://mgn.cn-north-1.amazonaws.com.cn">http://mgn.cn-north-1.amazonaws.com.cn</a> - The mgn endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mgn.cn-north-1.amazonaws.com.cn">https://mgn.cn-north-1.amazonaws.com.cn</a> - The mgn endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mgn/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="application-migration-service-default">Default</h1>

## ArchiveApplication

<a id="opIdArchiveApplication"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ArchiveApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationID": "stringstringstringstr"
  }'
```

`POST /ArchiveApplication`

Archive application.

> Body parameter

```json
{
  "applicationID": "stringstringstringstr"
}
```

<h3 id="archiveapplication-parameters">Parameters</h3>

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
|» applicationID|body|string|true|Application ID.|

> Example responses

> 200 Response

```json
{
  "applicationAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "totalSourceServers": {}
  },
  "applicationID": {},
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveID": {}
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

<h3 id="archiveapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Application](#schemaapplication)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ArchiveWave

<a id="opIdArchiveWave"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ArchiveWave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "waveID": "stringstringstringstri"
  }'
```

`POST /ArchiveWave`

Archive wave.

> Body parameter

```json
{
  "waveID": "stringstringstringstri"
}
```

<h3 id="archivewave-parameters">Parameters</h3>

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
|» waveID|body|string|true|Wave ID.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "replicationStartedDateTime": {},
    "totalApplications": {}
  },
  "waveID": {}
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

<h3 id="archivewave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Wave](#schemawave)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateApplications

<a id="opIdAssociateApplications"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/AssociateApplications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationIDs": [
      "stringstringstringstr"
    ],
    "waveID": "stringstringstringstri"
  }'
```

`POST /AssociateApplications`

Associate applications to wave.

> Body parameter

```json
{
  "applicationIDs": [
    "stringstringstringstr"
  ],
  "waveID": "stringstringstringstri"
}
```

<h3 id="associateapplications-parameters">Parameters</h3>

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
|» applicationIDs|body|[[ApplicationID](#schemaapplicationid)]|true|Application IDs list.|
|» waveID|body|string|true|Wave ID.|

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

<h3 id="associateapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateApplicationsResponse](#schemaassociateapplicationsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSourceServers

<a id="opIdAssociateSourceServers"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/AssociateSourceServers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationID": "stringstringstringstr",
    "sourceServerIDs": [
      "stringstringstrings"
    ]
  }'
```

`POST /AssociateSourceServers`

Associate source servers to application.

> Body parameter

```json
{
  "applicationID": "stringstringstringstr",
  "sourceServerIDs": [
    "stringstringstrings"
  ]
}
```

<h3 id="associatesourceservers-parameters">Parameters</h3>

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
|» applicationID|body|string|true|Application ID.|
|» sourceServerIDs|body|[[SourceServerID](#schemasourceserverid)]|true|Source server IDs list.|

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

<h3 id="associatesourceservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSourceServersResponse](#schemaassociatesourceserversresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ChangeServerLifeCycleState

<a id="opIdChangeServerLifeCycleState"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ChangeServerLifeCycleState \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "lifeCycle": {
      "state": {}
    },
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /ChangeServerLifeCycleState`

Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)

> Body parameter

```json
{
  "lifeCycle": {
    "state": {}
  },
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="changeserverlifecyclestate-parameters">Parameters</h3>

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
|» lifeCycle|body|object|true|The request to change the source server migration lifecycle state.|
|» » state|body|object|false|none|
|» sourceServerID|body|string|true|The request to change the source server migration lifecycle state by source server ID.|

> Example responses

> 200 Response

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
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

<h3 id="changeserverlifecyclestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServer](#schemasourceserver)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/CreateApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /CreateApplication`

Create application.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|» description|body|string|false|Application description.|
|» name|body|string|true|Application name.|
|» tags|body|object|false|Application tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "applicationAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "totalSourceServers": {}
  },
  "applicationID": {},
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveID": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Application](#schemaapplication)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLaunchConfigurationTemplate

<a id="opIdCreateLaunchConfigurationTemplate"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/CreateLaunchConfigurationTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "associatePublicIpAddress": true,
    "bootMode": "LEGACY_BIOS",
    "copyPrivateIp": true,
    "copyTags": true,
    "enableMapAutoTagging": true,
    "largeVolumeConf": {
      "iops": {},
      "throughput": {},
      "volumeType": {}
    },
    "launchDisposition": "STOPPED",
    "licensing": {
      "osByol": {}
    },
    "mapAutoTaggingMpeID": "string",
    "postLaunchActions": {
      "cloudWatchLogGroupName": {},
      "deployment": {},
      "s3LogBucket": {},
      "s3OutputKeyPrefix": {},
      "ssmDocuments": {}
    },
    "smallVolumeConf": {
      "iops": {},
      "throughput": {},
      "volumeType": {}
    },
    "smallVolumeMaxSize": 0,
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "targetInstanceTypeRightSizingMethod": "NONE"
  }'
```

`POST /CreateLaunchConfigurationTemplate`

Creates a new Launch Configuration Template.

> Body parameter

```json
{
  "associatePublicIpAddress": true,
  "bootMode": "LEGACY_BIOS",
  "copyPrivateIp": true,
  "copyTags": true,
  "enableMapAutoTagging": true,
  "largeVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "launchDisposition": "STOPPED",
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": "string",
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "smallVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "smallVolumeMaxSize": 0,
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "targetInstanceTypeRightSizingMethod": "NONE"
}
```

<h3 id="createlaunchconfigurationtemplate-parameters">Parameters</h3>

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
|» associatePublicIpAddress|body|boolean|false|Associate public Ip address.|
|» bootMode|body|string|false|Launch configuration template boot mode.|
|» copyPrivateIp|body|boolean|false|Copy private Ip.|
|» copyTags|body|boolean|false|Copy tags.|
|» enableMapAutoTagging|body|boolean|false|Enable map auto tagging.|
|» largeVolumeConf|body|object|false|Launch template disk configuration.|
|» » iops|body|object|false|none|
|» » throughput|body|object|false|none|
|» » volumeType|body|object|false|none|
|» launchDisposition|body|string|false|Launch disposition.|
|» licensing|body|object|false|Configure Licensing.|
|» » osByol|body|object|false|none|
|» mapAutoTaggingMpeID|body|string|false|Launch configuration template map auto tagging MPE ID.|
|» postLaunchActions|body|object|false|Post Launch Actions to executed on the Test or Cutover instance.|
|» » cloudWatchLogGroupName|body|object|false|none|
|» » deployment|body|object|false|none|
|» » s3LogBucket|body|object|false|none|
|» » s3OutputKeyPrefix|body|object|false|none|
|» » ssmDocuments|body|object|false|none|
|» smallVolumeConf|body|object|false|Launch template disk configuration.|
|» » iops|body|object|false|none|
|» » throughput|body|object|false|none|
|» » volumeType|body|object|false|none|
|» smallVolumeMaxSize|body|integer|false|Small volume maximum size.|
|» tags|body|object|false|Request to associate tags during creation of a Launch Configuration Template.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» targetInstanceTypeRightSizingMethod|body|string|false|Target instance type right-sizing method.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» bootMode|LEGACY_BIOS|
|» bootMode|UEFI|
|» launchDisposition|STOPPED|
|» launchDisposition|STARTED|
|» targetInstanceTypeRightSizingMethod|NONE|
|» targetInstanceTypeRightSizingMethod|BASIC|

> Example responses

> 201 Response

```json
{
  "arn": {},
  "associatePublicIpAddress": {},
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "ec2LaunchTemplateID": {},
  "enableMapAutoTagging": {},
  "largeVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "launchConfigurationTemplateID": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "smallVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "smallVolumeMaxSize": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "targetInstanceTypeRightSizingMethod": {}
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

<h3 id="createlaunchconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[LaunchConfigurationTemplate](#schemalaunchconfigurationtemplate)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReplicationConfigurationTemplate

<a id="opIdCreateReplicationConfigurationTemplate"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/CreateReplicationConfigurationTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "associateDefaultSecurityGroup": true,
    "bandwidthThrottling": 0,
    "createPublicIP": true,
    "dataPlaneRouting": "PRIVATE_IP",
    "defaultLargeStagingDiskType": "GP2",
    "ebsEncryption": "DEFAULT",
    "ebsEncryptionKeyArn": "stringstringstringst",
    "replicationServerInstanceType": "string",
    "replicationServersSecurityGroupsIDs": [
      "string"
    ],
    "stagingAreaSubnetId": "string",
    "stagingAreaTags": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "useDedicatedReplicationServer": true
  }'
```

`POST /CreateReplicationConfigurationTemplate`

Creates a new ReplicationConfigurationTemplate.

> Body parameter

```json
{
  "associateDefaultSecurityGroup": true,
  "bandwidthThrottling": 0,
  "createPublicIP": true,
  "dataPlaneRouting": "PRIVATE_IP",
  "defaultLargeStagingDiskType": "GP2",
  "ebsEncryption": "DEFAULT",
  "ebsEncryptionKeyArn": "stringstringstringst",
  "replicationServerInstanceType": "string",
  "replicationServersSecurityGroupsIDs": [
    "string"
  ],
  "stagingAreaSubnetId": "string",
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": true
}
```

<h3 id="createreplicationconfigurationtemplate-parameters">Parameters</h3>

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
|» associateDefaultSecurityGroup|body|boolean|true|Request to associate the default Application Migration Service Security group with the Replication Settings template.|
|» bandwidthThrottling|body|integer|true|Request to configure bandwidth throttling during Replication Settings template creation.|
|» createPublicIP|body|boolean|true|Request to create Public IP during Replication Settings template creation.|
|» dataPlaneRouting|body|string|true|Request to configure data plane routing during Replication Settings template creation.|
|» defaultLargeStagingDiskType|body|string|true|Request to configure the default large staging disk EBS volume type during Replication Settings template creation.|
|» ebsEncryption|body|string|true|Request to configure EBS encryption during Replication Settings template creation.|
|» ebsEncryptionKeyArn|body|string|false|Request to configure an EBS encryption key during Replication Settings template creation.|
|» replicationServerInstanceType|body|string|true|Request to configure the Replication Server instance type during Replication Settings template creation.|
|» replicationServersSecurityGroupsIDs|body|[[SecurityGroupID](#schemasecuritygroupid)]|true|Request to configure the Replication Server Security group ID during Replication Settings template creation.|
|» stagingAreaSubnetId|body|string|true|Request to configure the Staging Area subnet ID during Replication Settings template creation.|
|» stagingAreaTags|body|object|true|Request to configure Staging Area tags during Replication Settings template creation.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» tags|body|object|false|Request to configure tags during Replication Settings template creation.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» useDedicatedReplicationServer|body|boolean|true|Request to use Dedicated Replication Servers during Replication Settings template creation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataPlaneRouting|PRIVATE_IP|
|» dataPlaneRouting|PUBLIC_IP|
|» defaultLargeStagingDiskType|GP2|
|» defaultLargeStagingDiskType|ST1|
|» defaultLargeStagingDiskType|GP3|
|» ebsEncryption|DEFAULT|
|» ebsEncryption|CUSTOM|

> Example responses

> 201 Response

```json
{
  "arn": {},
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "replicationConfigurationTemplateID": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
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

<h3 id="createreplicationconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ReplicationConfigurationTemplate](#schemareplicationconfigurationtemplate)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWave

<a id="opIdCreateWave"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/CreateWave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /CreateWave`

Create wave.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createwave-parameters">Parameters</h3>

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
|» description|body|string|false|Wave description.|
|» name|body|string|true|Wave name.|
|» tags|body|object|false|Wave tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "replicationStartedDateTime": {},
    "totalApplications": {}
  },
  "waveID": {}
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

<h3 id="createwave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Wave](#schemawave)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DeleteApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationID": "stringstringstringstr"
  }'
```

`POST /DeleteApplication`

Delete application.

> Body parameter

```json
{
  "applicationID": "stringstringstringstr"
}
```

<h3 id="deleteapplication-parameters">Parameters</h3>

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
|» applicationID|body|string|true|Application ID.|

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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteApplicationResponse](#schemadeleteapplicationresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteJob

<a id="opIdDeleteJob"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DeleteJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobID": "stringstringstringstring"
  }'
```

`POST /DeleteJob`

Deletes a single Job by ID.

> Body parameter

```json
{
  "jobID": "stringstringstringstring"
}
```

<h3 id="deletejob-parameters">Parameters</h3>

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
|» jobID|body|string|true|Request to delete Job from service by Job ID.|

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

<h3 id="deletejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteJobResponse](#schemadeletejobresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLaunchConfigurationTemplate

<a id="opIdDeleteLaunchConfigurationTemplate"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DeleteLaunchConfigurationTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "launchConfigurationTemplateID": "stringstringstringstr"
  }'
```

`POST /DeleteLaunchConfigurationTemplate`

Deletes a single Launch Configuration Template by ID.

> Body parameter

```json
{
  "launchConfigurationTemplateID": "stringstringstringstr"
}
```

<h3 id="deletelaunchconfigurationtemplate-parameters">Parameters</h3>

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
|» launchConfigurationTemplateID|body|string|true|ID of resource to be deleted.|

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

<h3 id="deletelaunchconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteLaunchConfigurationTemplateResponse](#schemadeletelaunchconfigurationtemplateresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationConfigurationTemplate

<a id="opIdDeleteReplicationConfigurationTemplate"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DeleteReplicationConfigurationTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "replicationConfigurationTemplateID": "stringstringstringstr"
  }'
```

`POST /DeleteReplicationConfigurationTemplate`

Deletes a single Replication Configuration Template by ID

> Body parameter

```json
{
  "replicationConfigurationTemplateID": "stringstringstringstr"
}
```

<h3 id="deletereplicationconfigurationtemplate-parameters">Parameters</h3>

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
|» replicationConfigurationTemplateID|body|string|true|Request to delete Replication Configuration Template from service by Replication Configuration Template ID.|

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

<h3 id="deletereplicationconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteReplicationConfigurationTemplateResponse](#schemadeletereplicationconfigurationtemplateresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSourceServer

<a id="opIdDeleteSourceServer"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DeleteSourceServer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /DeleteSourceServer`

Deletes a single source server by ID.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="deletesourceserver-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|Request to delete Source Server from service by Server ID.|

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

<h3 id="deletesourceserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteSourceServerResponse](#schemadeletesourceserverresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVcenterClient

<a id="opIdDeleteVcenterClient"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DeleteVcenterClient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "vcenterClientID": "stringstringstringstr"
  }'
```

`POST /DeleteVcenterClient`

Deletes a given vCenter client by ID.

> Body parameter

```json
{
  "vcenterClientID": "stringstringstringstr"
}
```

<h3 id="deletevcenterclient-parameters">Parameters</h3>

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
|» vcenterClientID|body|string|true|ID of resource to be deleted.|

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

<h3 id="deletevcenterclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWave

<a id="opIdDeleteWave"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DeleteWave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "waveID": "stringstringstringstri"
  }'
```

`POST /DeleteWave`

Delete wave.

> Body parameter

```json
{
  "waveID": "stringstringstringstri"
}
```

<h3 id="deletewave-parameters">Parameters</h3>

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
|» waveID|body|string|true|Wave ID.|

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

<h3 id="deletewave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteWaveResponse](#schemadeletewaveresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobLogItems

<a id="opIdDescribeJobLogItems"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DescribeJobLogItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobID": "stringstringstringstring",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /DescribeJobLogItems`

Retrieves detailed job log items with paging.

> Body parameter

```json
{
  "jobID": "stringstringstringstring",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="describejoblogitems-parameters">Parameters</h3>

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
|» jobID|body|string|true|Request to describe Job log job ID.|
|» maxResults|body|integer|false|Request to describe Job log item maximum results.|
|» nextToken|body|string|false|Request to describe Job log next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="describejoblogitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobLogItemsResponse](#schemadescribejoblogitemsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobs

<a id="opIdDescribeJobs"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DescribeJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "fromDate": {},
      "jobIDs": {},
      "toDate": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /DescribeJobs`

Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

> Body parameter

```json
{
  "filters": {
    "fromDate": {},
    "jobIDs": {},
    "toDate": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="describejobs-parameters">Parameters</h3>

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
|» filters|body|object|false|Request to describe Job log filters.|
|» » fromDate|body|object|false|none|
|» » jobIDs|body|object|false|none|
|» » toDate|body|object|false|none|
|» maxResults|body|integer|false|Request to describe job log items by max results.|
|» nextToken|body|string|false|Request to describe job log items by next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="describejobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobsResponse](#schemadescribejobsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLaunchConfigurationTemplates

<a id="opIdDescribeLaunchConfigurationTemplates"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DescribeLaunchConfigurationTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "launchConfigurationTemplateIDs": [
      "stringstringstringstr"
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /DescribeLaunchConfigurationTemplates`

Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs

> Body parameter

```json
{
  "launchConfigurationTemplateIDs": [
    "stringstringstringstr"
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="describelaunchconfigurationtemplates-parameters">Parameters</h3>

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
|» launchConfigurationTemplateIDs|body|[[LaunchConfigurationTemplateID](#schemalaunchconfigurationtemplateid)]|false|Request to filter Launch Configuration Templates list by Launch Configuration Template ID.|
|» maxResults|body|integer|false|Maximum results to be returned in DescribeLaunchConfigurationTemplates.|
|» nextToken|body|string|false|Next pagination token returned from DescribeLaunchConfigurationTemplates.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="describelaunchconfigurationtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLaunchConfigurationTemplatesResponse](#schemadescribelaunchconfigurationtemplatesresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationConfigurationTemplates

<a id="opIdDescribeReplicationConfigurationTemplates"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DescribeReplicationConfigurationTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string",
    "replicationConfigurationTemplateIDs": [
      "stringstringstringstr"
    ]
  }'
```

`POST /DescribeReplicationConfigurationTemplates`

Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string",
  "replicationConfigurationTemplateIDs": [
    "stringstringstringstr"
  ]
}
```

<h3 id="describereplicationconfigurationtemplates-parameters">Parameters</h3>

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
|» maxResults|body|integer|false|Request to describe Replication Configuration template by max results.|
|» nextToken|body|string|false|Request to describe Replication Configuration template by next token.|
|» replicationConfigurationTemplateIDs|body|[[ReplicationConfigurationTemplateID](#schemareplicationconfigurationtemplateid)]|false|Request to describe Replication Configuration template by template IDs.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="describereplicationconfigurationtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationConfigurationTemplatesResponse](#schemadescribereplicationconfigurationtemplatesresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSourceServers

<a id="opIdDescribeSourceServers"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DescribeSourceServers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "applicationIDs": {},
      "isArchived": {},
      "lifeCycleStates": {},
      "replicationTypes": {},
      "sourceServerIDs": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /DescribeSourceServers`

Retrieves all SourceServers or multiple SourceServers by ID.

> Body parameter

```json
{
  "filters": {
    "applicationIDs": {},
    "isArchived": {},
    "lifeCycleStates": {},
    "replicationTypes": {},
    "sourceServerIDs": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="describesourceservers-parameters">Parameters</h3>

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
|» filters|body|object|false|Request to filter Source Servers list.|
|» » applicationIDs|body|object|false|none|
|» » isArchived|body|object|false|none|
|» » lifeCycleStates|body|object|false|none|
|» » replicationTypes|body|object|false|none|
|» » sourceServerIDs|body|object|false|none|
|» maxResults|body|integer|false|Request to filter Source Servers list by maximum results.|
|» nextToken|body|string|false|Request to filter Source Servers list by next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="describesourceservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSourceServersResponse](#schemadescribesourceserversresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVcenterClients

<a id="opIdDescribeVcenterClients"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DescribeVcenterClients \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /DescribeVcenterClients`

Returns a list of the installed vCenter clients.

<h3 id="describevcenterclients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum results to be returned in DescribeVcenterClients.|
|nextToken|query|string|false|Next pagination token to be provided for DescribeVcenterClients.|
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
  "items": {},
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

<h3 id="describevcenterclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVcenterClientsResponse](#schemadescribevcenterclientsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateApplications

<a id="opIdDisassociateApplications"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DisassociateApplications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationIDs": [
      "stringstringstringstr"
    ],
    "waveID": "stringstringstringstri"
  }'
```

`POST /DisassociateApplications`

Disassociate applications from wave.

> Body parameter

```json
{
  "applicationIDs": [
    "stringstringstringstr"
  ],
  "waveID": "stringstringstringstri"
}
```

<h3 id="disassociateapplications-parameters">Parameters</h3>

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
|» applicationIDs|body|[[ApplicationID](#schemaapplicationid)]|true|Application IDs list.|
|» waveID|body|string|true|Wave ID.|

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

<h3 id="disassociateapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateApplicationsResponse](#schemadisassociateapplicationsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSourceServers

<a id="opIdDisassociateSourceServers"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DisassociateSourceServers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationID": "stringstringstringstr",
    "sourceServerIDs": [
      "stringstringstrings"
    ]
  }'
```

`POST /DisassociateSourceServers`

Disassociate source servers from application.

> Body parameter

```json
{
  "applicationID": "stringstringstringstr",
  "sourceServerIDs": [
    "stringstringstrings"
  ]
}
```

<h3 id="disassociatesourceservers-parameters">Parameters</h3>

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
|» applicationID|body|string|true|Application ID.|
|» sourceServerIDs|body|[[SourceServerID](#schemasourceserverid)]|true|Source server IDs list.|

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

<h3 id="disassociatesourceservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateSourceServersResponse](#schemadisassociatesourceserversresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisconnectFromService

<a id="opIdDisconnectFromService"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/DisconnectFromService \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /DisconnectFromService`

Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="disconnectfromservice-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|Request to disconnect Source Server from service by Server ID.|

> Example responses

> 200 Response

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
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

<h3 id="disconnectfromservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServer](#schemasourceserver)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## FinalizeCutover

<a id="opIdFinalizeCutover"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/FinalizeCutover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /FinalizeCutover`

Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="finalizecutover-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|Request to finalize Cutover by Source Server ID.|

> Example responses

> 200 Response

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
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

<h3 id="finalizecutover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServer](#schemasourceserver)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLaunchConfiguration

<a id="opIdGetLaunchConfiguration"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/GetLaunchConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /GetLaunchConfiguration`

Lists all LaunchConfigurations available, filtered by Source Server IDs.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="getlaunchconfiguration-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|Request to get Launch Configuration information by Source Server ID.|

> Example responses

> 200 Response

```json
{
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "ec2LaunchTemplateID": {},
  "enableMapAutoTagging": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "name": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "sourceServerID": {},
  "targetInstanceTypeRightSizingMethod": {}
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

<h3 id="getlaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LaunchConfiguration](#schemalaunchconfiguration)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReplicationConfiguration

<a id="opIdGetReplicationConfiguration"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/GetReplicationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /GetReplicationConfiguration`

Lists all ReplicationConfigurations, filtered by Source Server ID.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="getreplicationconfiguration-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|Request to get Replication Configuration by Source Server ID.|

> Example responses

> 200 Response

```json
{
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "name": {},
  "replicatedDisks": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "sourceServerID": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
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

<h3 id="getreplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicationConfiguration](#schemareplicationconfiguration)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitializeService

<a id="opIdInitializeService"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/InitializeService \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /InitializeService`

Initialize Application Migration Service.

<h3 id="initializeservice-parameters">Parameters</h3>

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

<h3 id="initializeservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[InitializeServiceResponse](#schemainitializeserviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListApplications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "applicationIDs": {},
      "isArchived": {},
      "waveIDs": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListApplications`

Retrieves all applications or multiple applications by ID.

> Body parameter

```json
{
  "filters": {
    "applicationIDs": {},
    "isArchived": {},
    "waveIDs": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listapplications-parameters">Parameters</h3>

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
|» filters|body|object|false|Applications list filters.|
|» » applicationIDs|body|object|false|none|
|» » isArchived|body|object|false|none|
|» » waveIDs|body|object|false|none|
|» maxResults|body|integer|false|Maximum results to return when listing applications.|
|» nextToken|body|string|false|Request next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsResponse](#schemalistapplicationsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExportErrors

<a id="opIdListExportErrors"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListExportErrors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "exportID": "stringstringstringstring",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListExportErrors`

List export errors.

> Body parameter

```json
{
  "exportID": "stringstringstringstring",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listexporterrors-parameters">Parameters</h3>

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
|» exportID|body|string|true|List export errors request export id.|
|» maxResults|body|integer|false|List export errors request max results.|
|» nextToken|body|string|false|List export errors request next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="listexporterrors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExportErrorsResponse](#schemalistexporterrorsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExports

<a id="opIdListExports"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListExports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "exportIDs": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListExports`

List exports.

> Body parameter

```json
{
  "filters": {
    "exportIDs": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listexports-parameters">Parameters</h3>

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
|» filters|body|object|false|List exports request filters.|
|» » exportIDs|body|object|false|none|
|» maxResults|body|integer|false|List export request max results.|
|» nextToken|body|string|false|List export request next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listexports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExportsResponse](#schemalistexportsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImportErrors

<a id="opIdListImportErrors"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListImportErrors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "importID": "stringstringstringstring",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImportErrors`

List import errors.

> Body parameter

```json
{
  "importID": "stringstringstringstring",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimporterrors-parameters">Parameters</h3>

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
|» importID|body|string|true|List import errors request import id.|
|» maxResults|body|integer|false|List import errors request max results.|
|» nextToken|body|string|false|List import errors request next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="listimporterrors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportErrorsResponse](#schemalistimporterrorsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImports

<a id="opIdListImports"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListImports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "importIDs": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImports`

List imports.

> Body parameter

```json
{
  "filters": {
    "importIDs": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimports-parameters">Parameters</h3>

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
|» filters|body|object|false|List imports request filters.|
|» » importIDs|body|object|false|none|
|» maxResults|body|integer|false|List imports request max results.|
|» nextToken|body|string|false|List imports request next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="listimports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportsResponse](#schemalistimportsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSourceServerActions

<a id="opIdListSourceServerActions"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListSourceServerActions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "actionIDs": {}
    },
    "maxResults": 1,
    "nextToken": "string",
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /ListSourceServerActions`

List source server post migration custom actions.

> Body parameter

```json
{
  "filters": {
    "actionIDs": {}
  },
  "maxResults": 1,
  "nextToken": "string",
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="listsourceserveractions-parameters">Parameters</h3>

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
|» filters|body|object|false|Source server post migration custom action filters.|
|» » actionIDs|body|object|false|none|
|» maxResults|body|integer|false|Maximum amount of items to return when listing source server post migration custom actions.|
|» nextToken|body|string|false|Next token to use when listing source server post migration custom actions.|
|» sourceServerID|body|string|true|Source server ID.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="listsourceserveractions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSourceServerActionsResponse](#schemalistsourceserveractionsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/tags/stringstringstringst \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

List all tags for your Application Migration Service resources.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|List tags for resource request by ARN.|
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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
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
curl https://mgn.us-east-1.amazonaws.com/tags/stringstringstringst \
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

Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.

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
|resourceArn|path|string|true|Tag resource by ARN.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|Tag resource by Tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTemplateActions

<a id="opIdListTemplateActions"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListTemplateActions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "actionIDs": {}
    },
    "launchConfigurationTemplateID": "stringstringstringstr",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListTemplateActions`

List template post migration custom actions.

> Body parameter

```json
{
  "filters": {
    "actionIDs": {}
  },
  "launchConfigurationTemplateID": "stringstringstringstr",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listtemplateactions-parameters">Parameters</h3>

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
|» filters|body|object|false|Template post migration custom action filters.|
|» » actionIDs|body|object|false|none|
|» launchConfigurationTemplateID|body|string|true|Launch configuration template ID.|
|» maxResults|body|integer|false|Maximum amount of items to return when listing template post migration custom actions.|
|» nextToken|body|string|false|Next token to use when listing template post migration custom actions.|

> Example responses

> 200 Response

```json
{
  "items": {},
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

<h3 id="listtemplateactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTemplateActionsResponse](#schemalisttemplateactionsresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWaves

<a id="opIdListWaves"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/ListWaves \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": {
      "isArchived": {},
      "waveIDs": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListWaves`

Retrieves all waves or multiple waves by ID.

> Body parameter

```json
{
  "filters": {
    "isArchived": {},
    "waveIDs": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listwaves-parameters">Parameters</h3>

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
|» filters|body|object|false|Waves list filters.|
|» » isArchived|body|object|false|none|
|» » waveIDs|body|object|false|none|
|» maxResults|body|integer|false|Maximum results to return when listing waves.|
|» nextToken|body|string|false|Request next token.|

> Example responses

> 200 Response

```json
{
  "items": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listwaves-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWavesResponse](#schemalistwavesresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MarkAsArchived

<a id="opIdMarkAsArchived"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/MarkAsArchived \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /MarkAsArchived`

Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="markasarchived-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|Mark as archived by Source Server ID.|

> Example responses

> 200 Response

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
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

<h3 id="markasarchived-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServer](#schemasourceserver)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSourceServerAction

<a id="opIdPutSourceServerAction"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/PutSourceServerAction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actionID": "string",
    "actionName": "string",
    "active": true,
    "category": "DISASTER_RECOVERY",
    "description": "string",
    "documentIdentifier": "string",
    "documentVersion": "string",
    "externalParameters": {
      "property1": {
        "dynamicPath": {}
      },
      "property2": {
        "dynamicPath": {}
      }
    },
    "mustSucceedForCutover": true,
    "order": 1001,
    "parameters": {
      "property1": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ],
      "property2": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ]
    },
    "sourceServerID": "stringstringstrings",
    "timeoutSeconds": 1
  }'
```

`POST /PutSourceServerAction`

Put source server post migration custom action.

> Body parameter

```json
{
  "actionID": "string",
  "actionName": "string",
  "active": true,
  "category": "DISASTER_RECOVERY",
  "description": "string",
  "documentIdentifier": "string",
  "documentVersion": "string",
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "mustSucceedForCutover": true,
  "order": 1001,
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "sourceServerID": "stringstringstrings",
  "timeoutSeconds": 1
}
```

<h3 id="putsourceserveraction-parameters">Parameters</h3>

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
|» actionID|body|string|true|Source server post migration custom action ID.|
|» actionName|body|string|true|Source server post migration custom action name.|
|» active|body|boolean|false|Source server post migration custom action active status.|
|» category|body|string|false|Source server post migration custom action category.|
|» description|body|string|false|Source server post migration custom action description.|
|» documentIdentifier|body|string|true|Source server post migration custom action document identifier.|
|» documentVersion|body|string|false|Source server post migration custom action document version.|
|» externalParameters|body|object|false|Source server post migration custom action external parameters.|
|» » **additionalProperties**|body|[SsmExternalParameter](#schemassmexternalparameter)|false|AWS Systems Manager Document external parameter.|
|» mustSucceedForCutover|body|boolean|false|Source server post migration custom action must succeed for cutover.|
|» order|body|integer|true|Source server post migration custom action order.|
|» parameters|body|object|false|Source server post migration custom action parameters.|
|» » **additionalProperties**|body|[SsmParameterStoreParameters](#schemassmparameterstoreparameters)|false|none|
|» sourceServerID|body|string|true|Source server ID.|
|» timeoutSeconds|body|integer|false|Source server post migration custom action timeout in seconds.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|DISASTER_RECOVERY|
|» category|OPERATING_SYSTEM|
|» category|LICENSE_AND_SUBSCRIPTION|
|» category|VALIDATION|
|» category|OBSERVABILITY|
|» category|SECURITY|
|» category|NETWORKING|
|» category|CONFIGURATION|
|» category|BACKUP|
|» category|OTHER|

> Example responses

> 200 Response

```json
{
  "actionID": {},
  "actionName": {},
  "active": {},
  "category": {},
  "description": {},
  "documentIdentifier": {},
  "documentVersion": {},
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "mustSucceedForCutover": {},
  "order": {},
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "timeoutSeconds": {}
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

<h3 id="putsourceserveraction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServerActionDocument](#schemasourceserveractiondocument)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutTemplateAction

<a id="opIdPutTemplateAction"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/PutTemplateAction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actionID": "string",
    "actionName": "string",
    "active": true,
    "category": "DISASTER_RECOVERY",
    "description": "string",
    "documentIdentifier": "string",
    "documentVersion": "string",
    "externalParameters": {
      "property1": {
        "dynamicPath": {}
      },
      "property2": {
        "dynamicPath": {}
      }
    },
    "launchConfigurationTemplateID": "stringstringstringstr",
    "mustSucceedForCutover": true,
    "operatingSystem": "string",
    "order": 1001,
    "parameters": {
      "property1": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ],
      "property2": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ]
    },
    "timeoutSeconds": 1
  }'
```

`POST /PutTemplateAction`

Put template post migration custom action.

> Body parameter

```json
{
  "actionID": "string",
  "actionName": "string",
  "active": true,
  "category": "DISASTER_RECOVERY",
  "description": "string",
  "documentIdentifier": "string",
  "documentVersion": "string",
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "launchConfigurationTemplateID": "stringstringstringstr",
  "mustSucceedForCutover": true,
  "operatingSystem": "string",
  "order": 1001,
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "timeoutSeconds": 1
}
```

<h3 id="puttemplateaction-parameters">Parameters</h3>

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
|» actionID|body|string|true|Template post migration custom action ID.|
|» actionName|body|string|true|Template post migration custom action name.|
|» active|body|boolean|false|Template post migration custom action active status.|
|» category|body|string|false|Template post migration custom action category.|
|» description|body|string|false|Template post migration custom action description.|
|» documentIdentifier|body|string|true|Template post migration custom action document identifier.|
|» documentVersion|body|string|false|Template post migration custom action document version.|
|» externalParameters|body|object|false|Template post migration custom action external parameters.|
|» » **additionalProperties**|body|[SsmExternalParameter](#schemassmexternalparameter)|false|AWS Systems Manager Document external parameter.|
|» launchConfigurationTemplateID|body|string|true|Launch configuration template ID.|
|» mustSucceedForCutover|body|boolean|false|Template post migration custom action must succeed for cutover.|
|» operatingSystem|body|string|false|Operating system eligible for this template post migration custom action.|
|» order|body|integer|true|Template post migration custom action order.|
|» parameters|body|object|false|Template post migration custom action parameters.|
|» » **additionalProperties**|body|[SsmParameterStoreParameters](#schemassmparameterstoreparameters)|false|none|
|» timeoutSeconds|body|integer|false|Template post migration custom action timeout in seconds.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|DISASTER_RECOVERY|
|» category|OPERATING_SYSTEM|
|» category|LICENSE_AND_SUBSCRIPTION|
|» category|VALIDATION|
|» category|OBSERVABILITY|
|» category|SECURITY|
|» category|NETWORKING|
|» category|CONFIGURATION|
|» category|BACKUP|
|» category|OTHER|

> Example responses

> 200 Response

```json
{
  "actionID": {},
  "actionName": {},
  "active": {},
  "category": {},
  "description": {},
  "documentIdentifier": {},
  "documentVersion": {},
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "mustSucceedForCutover": {},
  "operatingSystem": {},
  "order": {},
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "timeoutSeconds": {}
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

<h3 id="puttemplateaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplateActionDocument](#schematemplateactiondocument)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveSourceServerAction

<a id="opIdRemoveSourceServerAction"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/RemoveSourceServerAction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actionID": "string",
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /RemoveSourceServerAction`

Remove source server post migration custom action.

> Body parameter

```json
{
  "actionID": "string",
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="removesourceserveraction-parameters">Parameters</h3>

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
|» actionID|body|string|true|Source server post migration custom action ID to remove.|
|» sourceServerID|body|string|true|Source server ID of the post migration custom action to remove.|

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

<h3 id="removesourceserveraction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[RemoveSourceServerActionResponse](#schemaremovesourceserveractionresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTemplateAction

<a id="opIdRemoveTemplateAction"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/RemoveTemplateAction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actionID": "string",
    "launchConfigurationTemplateID": "stringstringstringstr"
  }'
```

`POST /RemoveTemplateAction`

Remove template post migration custom action.

> Body parameter

```json
{
  "actionID": "string",
  "launchConfigurationTemplateID": "stringstringstringstr"
}
```

<h3 id="removetemplateaction-parameters">Parameters</h3>

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
|» actionID|body|string|true|Template post migration custom action ID to remove.|
|» launchConfigurationTemplateID|body|string|true|Launch configuration template ID of the post migration custom action to remove.|

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

<h3 id="removetemplateaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[RemoveTemplateActionResponse](#schemaremovetemplateactionresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetryDataReplication

<a id="opIdRetryDataReplication"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/RetryDataReplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /RetryDataReplication`

Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="retrydatareplication-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|Retry data replication for Source Server ID.|

> Example responses

> 200 Response

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
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

<h3 id="retrydatareplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServer](#schemasourceserver)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartCutover

<a id="opIdStartCutover"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/StartCutover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerIDs": [
      "stringstringstrings"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /StartCutover`

Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.

> Body parameter

```json
{
  "sourceServerIDs": [
    "stringstringstrings"
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="startcutover-parameters">Parameters</h3>

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
|» sourceServerIDs|body|[[SourceServerID](#schemasourceserverid)]|true|Start Cutover by Source Server IDs.|
|» tags|body|object|false|Start Cutover by Tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 202 Response

```json
{
  "job": {
    "arn": {},
    "creationDateTime": {},
    "endDateTime": {},
    "initiatedBy": {},
    "jobID": {},
    "participatingServers": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
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

<h3 id="startcutover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartCutoverResponse](#schemastartcutoverresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartExport

<a id="opIdStartExport"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/StartExport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "s3Bucket": "string",
    "s3BucketOwner": "stringstring",
    "s3Key": "string"
  }'
```

`POST /StartExport`

Start export.

> Body parameter

```json
{
  "s3Bucket": "string",
  "s3BucketOwner": "stringstring",
  "s3Key": "string"
}
```

<h3 id="startexport-parameters">Parameters</h3>

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
|» s3Bucket|body|string|true|Start export request s3 bucket.|
|» s3BucketOwner|body|string|false|Start export request s3 bucket owner.|
|» s3Key|body|string|true|Start export request s3key.|

> Example responses

> 202 Response

```json
{
  "exportTask": {
    "creationDateTime": {},
    "endDateTime": {},
    "exportID": {},
    "progressPercentage": {},
    "s3Bucket": {},
    "s3BucketOwner": {},
    "s3Key": {},
    "status": {},
    "summary": {
      "applicationsCount": {},
      "serversCount": {},
      "wavesCount": {}
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

<h3 id="startexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartExportResponse](#schemastartexportresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartImport

<a id="opIdStartImport"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/StartImport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "s3BucketSource": {
      "s3Bucket": {},
      "s3BucketOwner": {},
      "s3Key": {}
    }
  }'
```

`POST /StartImport`

Start import.

> Body parameter

```json
{
  "clientToken": "string",
  "s3BucketSource": {
    "s3Bucket": {},
    "s3BucketOwner": {},
    "s3Key": {}
  }
}
```

<h3 id="startimport-parameters">Parameters</h3>

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
|» clientToken|body|string|false|Start import request client token.|
|» s3BucketSource|body|object|true|S3 bucket source.|
|» » s3Bucket|body|object|false|none|
|» » s3BucketOwner|body|object|false|none|
|» » s3Key|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "importTask": {
    "creationDateTime": {},
    "endDateTime": {},
    "importID": {},
    "progressPercentage": {},
    "s3BucketSource": {
      "s3Bucket": {},
      "s3BucketOwner": {},
      "s3Key": {}
    },
    "status": {},
    "summary": {
      "applications": {
        "createdCount": {},
        "modifiedCount": {}
      },
      "servers": {
        "createdCount": {},
        "modifiedCount": {}
      },
      "waves": {
        "createdCount": {},
        "modifiedCount": {}
      }
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

<h3 id="startimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartImportResponse](#schemastartimportresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartReplication

<a id="opIdStartReplication"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/StartReplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /StartReplication`

Starts replication for SNAPSHOT_SHIPPING agents.

> Body parameter

```json
{
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="startreplication-parameters">Parameters</h3>

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
|» sourceServerID|body|string|true|ID of source server on which to start replication.|

> Example responses

> 200 Response

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
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

<h3 id="startreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServer](#schemasourceserver)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTest

<a id="opIdStartTest"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/StartTest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerIDs": [
      "stringstringstrings"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /StartTest`

Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.

> Body parameter

```json
{
  "sourceServerIDs": [
    "stringstringstrings"
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="starttest-parameters">Parameters</h3>

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
|» sourceServerIDs|body|[[SourceServerID](#schemasourceserverid)]|true|Start Test for Source Server IDs.|
|» tags|body|object|false|Start Test by Tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 202 Response

```json
{
  "job": {
    "arn": {},
    "creationDateTime": {},
    "endDateTime": {},
    "initiatedBy": {},
    "jobID": {},
    "participatingServers": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
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

<h3 id="starttest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartTestResponse](#schemastarttestresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateTargetInstances

<a id="opIdTerminateTargetInstances"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/TerminateTargetInstances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceServerIDs": [
      "stringstringstrings"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /TerminateTargetInstances`

Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.

> Body parameter

```json
{
  "sourceServerIDs": [
    "stringstringstrings"
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="terminatetargetinstances-parameters">Parameters</h3>

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
|» sourceServerIDs|body|[[SourceServerID](#schemasourceserverid)]|true|Terminate Target instance by Source Server IDs.|
|» tags|body|object|false|Terminate Target instance by Tags.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 202 Response

```json
{
  "job": {
    "arn": {},
    "creationDateTime": {},
    "endDateTime": {},
    "initiatedBy": {},
    "jobID": {},
    "participatingServers": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
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

<h3 id="terminatetargetinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[TerminateTargetInstancesResponse](#schematerminatetargetinstancesresponse)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnarchiveApplication

<a id="opIdUnarchiveApplication"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UnarchiveApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationID": "stringstringstringstr"
  }'
```

`POST /UnarchiveApplication`

Unarchive application.

> Body parameter

```json
{
  "applicationID": "stringstringstringstr"
}
```

<h3 id="unarchiveapplication-parameters">Parameters</h3>

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
|» applicationID|body|string|true|Application ID.|

> Example responses

> 200 Response

```json
{
  "applicationAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "totalSourceServers": {}
  },
  "applicationID": {},
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveID": {}
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

<h3 id="unarchiveapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Application](#schemaapplication)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnarchiveWave

<a id="opIdUnarchiveWave"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UnarchiveWave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "waveID": "stringstringstringstri"
  }'
```

`POST /UnarchiveWave`

Unarchive wave.

> Body parameter

```json
{
  "waveID": "stringstringstringstri"
}
```

<h3 id="unarchivewave-parameters">Parameters</h3>

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
|» waveID|body|string|true|Wave ID.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "replicationStartedDateTime": {},
    "totalApplications": {}
  },
  "waveID": {}
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

<h3 id="unarchivewave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Wave](#schemawave)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://mgn.us-east-1.amazonaws.com/tags/stringstringstringst#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Deletes the specified set of tags from the specified set of Application Migration Service resources.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|Untag resource by ARN.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|Untag resource by Keys.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UpdateApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "applicationID": "stringstringstringstr",
    "description": "string",
    "name": "string"
  }'
```

`POST /UpdateApplication`

Update application.

> Body parameter

```json
{
  "applicationID": "stringstringstringstr",
  "description": "string",
  "name": "string"
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

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
|» applicationID|body|string|true|Application ID.|
|» description|body|string|false|Application description.|
|» name|body|string|false|Application name.|

> Example responses

> 200 Response

```json
{
  "applicationAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "totalSourceServers": {}
  },
  "applicationID": {},
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveID": {}
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
|200|OK|Success|[Application](#schemaapplication)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLaunchConfiguration

<a id="opIdUpdateLaunchConfiguration"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UpdateLaunchConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "bootMode": "LEGACY_BIOS",
    "copyPrivateIp": true,
    "copyTags": true,
    "enableMapAutoTagging": true,
    "launchDisposition": "STOPPED",
    "licensing": {
      "osByol": {}
    },
    "mapAutoTaggingMpeID": "string",
    "name": "string",
    "postLaunchActions": {
      "cloudWatchLogGroupName": {},
      "deployment": {},
      "s3LogBucket": {},
      "s3OutputKeyPrefix": {},
      "ssmDocuments": {}
    },
    "sourceServerID": "stringstringstrings",
    "targetInstanceTypeRightSizingMethod": "NONE"
  }'
```

`POST /UpdateLaunchConfiguration`

Updates multiple LaunchConfigurations by Source Server ID.

> Body parameter

```json
{
  "bootMode": "LEGACY_BIOS",
  "copyPrivateIp": true,
  "copyTags": true,
  "enableMapAutoTagging": true,
  "launchDisposition": "STOPPED",
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": "string",
  "name": "string",
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "sourceServerID": "stringstringstrings",
  "targetInstanceTypeRightSizingMethod": "NONE"
}
```

<h3 id="updatelaunchconfiguration-parameters">Parameters</h3>

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
|» bootMode|body|string|false|Update Launch configuration boot mode request.|
|» copyPrivateIp|body|boolean|false|Update Launch configuration copy Private IP request.|
|» copyTags|body|boolean|false|Update Launch configuration copy Tags request.|
|» enableMapAutoTagging|body|boolean|false|Enable map auto tagging.|
|» launchDisposition|body|string|false|Update Launch configuration launch disposition request.|
|» licensing|body|object|false|Configure Licensing.|
|» » osByol|body|object|false|none|
|» mapAutoTaggingMpeID|body|string|false|Launch configuration map auto tagging MPE ID.|
|» name|body|string|false|Update Launch configuration name request.|
|» postLaunchActions|body|object|false|Post Launch Actions to executed on the Test or Cutover instance.|
|» » cloudWatchLogGroupName|body|object|false|none|
|» » deployment|body|object|false|none|
|» » s3LogBucket|body|object|false|none|
|» » s3OutputKeyPrefix|body|object|false|none|
|» » ssmDocuments|body|object|false|none|
|» sourceServerID|body|string|true|Update Launch configuration by Source Server ID request.|
|» targetInstanceTypeRightSizingMethod|body|string|false|Update Launch configuration Target instance right sizing request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» bootMode|LEGACY_BIOS|
|» bootMode|UEFI|
|» launchDisposition|STOPPED|
|» launchDisposition|STARTED|
|» targetInstanceTypeRightSizingMethod|NONE|
|» targetInstanceTypeRightSizingMethod|BASIC|

> Example responses

> 200 Response

```json
{
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "ec2LaunchTemplateID": {},
  "enableMapAutoTagging": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "name": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "sourceServerID": {},
  "targetInstanceTypeRightSizingMethod": {}
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

<h3 id="updatelaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LaunchConfiguration](#schemalaunchconfiguration)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLaunchConfigurationTemplate

<a id="opIdUpdateLaunchConfigurationTemplate"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UpdateLaunchConfigurationTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "associatePublicIpAddress": true,
    "bootMode": "LEGACY_BIOS",
    "copyPrivateIp": true,
    "copyTags": true,
    "enableMapAutoTagging": true,
    "largeVolumeConf": {
      "iops": {},
      "throughput": {},
      "volumeType": {}
    },
    "launchConfigurationTemplateID": "stringstringstringstr",
    "launchDisposition": "STOPPED",
    "licensing": {
      "osByol": {}
    },
    "mapAutoTaggingMpeID": "string",
    "postLaunchActions": {
      "cloudWatchLogGroupName": {},
      "deployment": {},
      "s3LogBucket": {},
      "s3OutputKeyPrefix": {},
      "ssmDocuments": {}
    },
    "smallVolumeConf": {
      "iops": {},
      "throughput": {},
      "volumeType": {}
    },
    "smallVolumeMaxSize": 0,
    "targetInstanceTypeRightSizingMethod": "NONE"
  }'
```

`POST /UpdateLaunchConfigurationTemplate`

Updates an existing Launch Configuration Template by ID.

> Body parameter

```json
{
  "associatePublicIpAddress": true,
  "bootMode": "LEGACY_BIOS",
  "copyPrivateIp": true,
  "copyTags": true,
  "enableMapAutoTagging": true,
  "largeVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "launchConfigurationTemplateID": "stringstringstringstr",
  "launchDisposition": "STOPPED",
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": "string",
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "smallVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "smallVolumeMaxSize": 0,
  "targetInstanceTypeRightSizingMethod": "NONE"
}
```

<h3 id="updatelaunchconfigurationtemplate-parameters">Parameters</h3>

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
|» associatePublicIpAddress|body|boolean|false|Associate public Ip address.|
|» bootMode|body|string|false|Launch configuration template boot mode.|
|» copyPrivateIp|body|boolean|false|Copy private Ip.|
|» copyTags|body|boolean|false|Copy tags.|
|» enableMapAutoTagging|body|boolean|false|Enable map auto tagging.|
|» largeVolumeConf|body|object|false|Launch template disk configuration.|
|» » iops|body|object|false|none|
|» » throughput|body|object|false|none|
|» » volumeType|body|object|false|none|
|» launchConfigurationTemplateID|body|string|true|Launch Configuration Template ID.|
|» launchDisposition|body|string|false|Launch disposition.|
|» licensing|body|object|false|Configure Licensing.|
|» » osByol|body|object|false|none|
|» mapAutoTaggingMpeID|body|string|false|Launch configuration template map auto tagging MPE ID.|
|» postLaunchActions|body|object|false|Post Launch Actions to executed on the Test or Cutover instance.|
|» » cloudWatchLogGroupName|body|object|false|none|
|» » deployment|body|object|false|none|
|» » s3LogBucket|body|object|false|none|
|» » s3OutputKeyPrefix|body|object|false|none|
|» » ssmDocuments|body|object|false|none|
|» smallVolumeConf|body|object|false|Launch template disk configuration.|
|» » iops|body|object|false|none|
|» » throughput|body|object|false|none|
|» » volumeType|body|object|false|none|
|» smallVolumeMaxSize|body|integer|false|Small volume maximum size.|
|» targetInstanceTypeRightSizingMethod|body|string|false|Target instance type right-sizing method.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» bootMode|LEGACY_BIOS|
|» bootMode|UEFI|
|» launchDisposition|STOPPED|
|» launchDisposition|STARTED|
|» targetInstanceTypeRightSizingMethod|NONE|
|» targetInstanceTypeRightSizingMethod|BASIC|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "associatePublicIpAddress": {},
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "ec2LaunchTemplateID": {},
  "enableMapAutoTagging": {},
  "largeVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "launchConfigurationTemplateID": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "smallVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "smallVolumeMaxSize": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "targetInstanceTypeRightSizingMethod": {}
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

<h3 id="updatelaunchconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LaunchConfigurationTemplate](#schemalaunchconfigurationtemplate)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReplicationConfiguration

<a id="opIdUpdateReplicationConfiguration"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UpdateReplicationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "associateDefaultSecurityGroup": true,
    "bandwidthThrottling": 0,
    "createPublicIP": true,
    "dataPlaneRouting": "PRIVATE_IP",
    "defaultLargeStagingDiskType": "GP2",
    "ebsEncryption": "DEFAULT",
    "ebsEncryptionKeyArn": "stringstringstringst",
    "name": "string",
    "replicatedDisks": [
      {
        "deviceName": {},
        "iops": {},
        "isBootDisk": {},
        "stagingDiskType": {},
        "throughput": {}
      }
    ],
    "replicationServerInstanceType": "string",
    "replicationServersSecurityGroupsIDs": [
      "string"
    ],
    "sourceServerID": "stringstringstrings",
    "stagingAreaSubnetId": "string",
    "stagingAreaTags": {
      "property1": "string",
      "property2": "string"
    },
    "useDedicatedReplicationServer": true
  }'
```

`POST /UpdateReplicationConfiguration`

Allows you to update multiple ReplicationConfigurations by Source Server ID.

> Body parameter

```json
{
  "associateDefaultSecurityGroup": true,
  "bandwidthThrottling": 0,
  "createPublicIP": true,
  "dataPlaneRouting": "PRIVATE_IP",
  "defaultLargeStagingDiskType": "GP2",
  "ebsEncryption": "DEFAULT",
  "ebsEncryptionKeyArn": "stringstringstringst",
  "name": "string",
  "replicatedDisks": [
    {
      "deviceName": {},
      "iops": {},
      "isBootDisk": {},
      "stagingDiskType": {},
      "throughput": {}
    }
  ],
  "replicationServerInstanceType": "string",
  "replicationServersSecurityGroupsIDs": [
    "string"
  ],
  "sourceServerID": "stringstringstrings",
  "stagingAreaSubnetId": "string",
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": true
}
```

<h3 id="updatereplicationconfiguration-parameters">Parameters</h3>

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
|» associateDefaultSecurityGroup|body|boolean|false|Update replication configuration associate default Application Migration Service Security group request.|
|» bandwidthThrottling|body|integer|false|Update replication configuration bandwidth throttling request.|
|» createPublicIP|body|boolean|false|Update replication configuration create Public IP request.|
|» dataPlaneRouting|body|string|false|Update replication configuration data plane routing request.|
|» defaultLargeStagingDiskType|body|string|false|Update replication configuration use default large Staging Disk type request.|
|» ebsEncryption|body|string|false|Update replication configuration EBS encryption request.|
|» ebsEncryptionKeyArn|body|string|false|Update replication configuration EBS encryption key ARN request.|
|» name|body|string|false|Update replication configuration name request.|
|» replicatedDisks|body|[[ReplicationConfigurationReplicatedDisk](#schemareplicationconfigurationreplicateddisk)]|false|Update replication configuration replicated disks request.|
|» replicationServerInstanceType|body|string|false|Update replication configuration Replication Server instance type request.|
|» replicationServersSecurityGroupsIDs|body|[[SecurityGroupID](#schemasecuritygroupid)]|false|Update replication configuration Replication Server Security Groups IDs request.|
|» sourceServerID|body|string|true|Update replication configuration Source Server ID request.|
|» stagingAreaSubnetId|body|string|false|Update replication configuration Staging Area subnet request.|
|» stagingAreaTags|body|object|false|Update replication configuration Staging Area Tags request.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» useDedicatedReplicationServer|body|boolean|false|Update replication configuration use dedicated Replication Server request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataPlaneRouting|PRIVATE_IP|
|» dataPlaneRouting|PUBLIC_IP|
|» defaultLargeStagingDiskType|GP2|
|» defaultLargeStagingDiskType|ST1|
|» defaultLargeStagingDiskType|GP3|
|» ebsEncryption|DEFAULT|
|» ebsEncryption|CUSTOM|

> Example responses

> 200 Response

```json
{
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "name": {},
  "replicatedDisks": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "sourceServerID": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
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

<h3 id="updatereplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicationConfiguration](#schemareplicationconfiguration)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReplicationConfigurationTemplate

<a id="opIdUpdateReplicationConfigurationTemplate"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UpdateReplicationConfigurationTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "stringstringstringst",
    "associateDefaultSecurityGroup": true,
    "bandwidthThrottling": 0,
    "createPublicIP": true,
    "dataPlaneRouting": "PRIVATE_IP",
    "defaultLargeStagingDiskType": "GP2",
    "ebsEncryption": "DEFAULT",
    "ebsEncryptionKeyArn": "stringstringstringst",
    "replicationConfigurationTemplateID": "stringstringstringstr",
    "replicationServerInstanceType": "string",
    "replicationServersSecurityGroupsIDs": [
      "string"
    ],
    "stagingAreaSubnetId": "string",
    "stagingAreaTags": {
      "property1": "string",
      "property2": "string"
    },
    "useDedicatedReplicationServer": true
  }'
```

`POST /UpdateReplicationConfigurationTemplate`

Updates multiple ReplicationConfigurationTemplates by ID.

> Body parameter

```json
{
  "arn": "stringstringstringst",
  "associateDefaultSecurityGroup": true,
  "bandwidthThrottling": 0,
  "createPublicIP": true,
  "dataPlaneRouting": "PRIVATE_IP",
  "defaultLargeStagingDiskType": "GP2",
  "ebsEncryption": "DEFAULT",
  "ebsEncryptionKeyArn": "stringstringstringst",
  "replicationConfigurationTemplateID": "stringstringstringstr",
  "replicationServerInstanceType": "string",
  "replicationServersSecurityGroupsIDs": [
    "string"
  ],
  "stagingAreaSubnetId": "string",
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": true
}
```

<h3 id="updatereplicationconfigurationtemplate-parameters">Parameters</h3>

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
|» arn|body|string|false|Update replication configuration template ARN request.|
|» associateDefaultSecurityGroup|body|boolean|false|Update replication configuration template associate default Application Migration Service Security group request.|
|» bandwidthThrottling|body|integer|false|Update replication configuration template bandwidth throttling request.|
|» createPublicIP|body|boolean|false|Update replication configuration template create Public IP request.|
|» dataPlaneRouting|body|string|false|Update replication configuration template data plane routing request.|
|» defaultLargeStagingDiskType|body|string|false|Update replication configuration template use default large Staging Disk type request.|
|» ebsEncryption|body|string|false|Update replication configuration template EBS encryption request.|
|» ebsEncryptionKeyArn|body|string|false|Update replication configuration template EBS encryption key ARN request.|
|» replicationConfigurationTemplateID|body|string|true|Update replication configuration template template ID request.|
|» replicationServerInstanceType|body|string|false|Update replication configuration template Replication Server instance type request.|
|» replicationServersSecurityGroupsIDs|body|[[SecurityGroupID](#schemasecuritygroupid)]|false|Update replication configuration template Replication Server Security groups IDs request.|
|» stagingAreaSubnetId|body|string|false|Update replication configuration template Staging Area subnet ID request.|
|» stagingAreaTags|body|object|false|Update replication configuration template Staging Area Tags request.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» useDedicatedReplicationServer|body|boolean|false|Update replication configuration template use dedicated Replication Server request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataPlaneRouting|PRIVATE_IP|
|» dataPlaneRouting|PUBLIC_IP|
|» defaultLargeStagingDiskType|GP2|
|» defaultLargeStagingDiskType|ST1|
|» defaultLargeStagingDiskType|GP3|
|» ebsEncryption|DEFAULT|
|» ebsEncryption|CUSTOM|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "replicationConfigurationTemplateID": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
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

<h3 id="updatereplicationconfigurationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicationConfigurationTemplate](#schemareplicationconfigurationtemplate)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSourceServerReplicationType

<a id="opIdUpdateSourceServerReplicationType"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UpdateSourceServerReplicationType \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "replicationType": "AGENT_BASED",
    "sourceServerID": "stringstringstrings"
  }'
```

`POST /UpdateSourceServerReplicationType`

Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.

> Body parameter

```json
{
  "replicationType": "AGENT_BASED",
  "sourceServerID": "stringstringstrings"
}
```

<h3 id="updatesourceserverreplicationtype-parameters">Parameters</h3>

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
|» replicationType|body|string|true|Replication type to which to update source server.|
|» sourceServerID|body|string|true|ID of source server on which to update replication type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» replicationType|AGENT_BASED|
|» replicationType|SNAPSHOT_SHIPPING|

> Example responses

> 200 Response

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
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

<h3 id="updatesourceserverreplicationtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SourceServer](#schemasourceserver)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWave

<a id="opIdUpdateWave"></a>

> Code samples

```bash
curl https://mgn.us-east-1.amazonaws.com/UpdateWave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "waveID": "stringstringstringstri"
  }'
```

`POST /UpdateWave`

Update wave.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "waveID": "stringstringstringstri"
}
```

<h3 id="updatewave-parameters">Parameters</h3>

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
|» description|body|string|false|Wave description.|
|» name|body|string|false|Wave name.|
|» waveID|body|string|true|Wave ID.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "replicationStartedDateTime": {},
    "totalApplications": {}
  },
  "waveID": {}
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

<h3 id="updatewave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Wave](#schemawave)|
|480|480|UninitializedAccountException|[UninitializedAccountException](#schemauninitializedaccountexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "applicationAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "totalSourceServers": {}
  },
  "applicationID": {},
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationAggregatedStatus|object|false|none|none|
|applicationID|object|false|none|none|
|arn|object|false|none|none|
|creationDateTime|object|false|none|none|
|description|object|false|none|none|
|isArchived|object|false|none|none|
|lastModifiedDateTime|object|false|none|none|
|name|object|false|none|none|
|tags|object|false|none|none|
|waveID|object|false|none|none|

<h2 id="tocS_UninitializedAccountException">UninitializedAccountException</h2>
<!-- backwards compatibility -->
<a id="schemauninitializedaccountexception"></a>
<a id="schema_UninitializedAccountException"></a>
<a id="tocSuninitializedaccountexception"></a>
<a id="tocsuninitializedaccountexception"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

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

<h2 id="tocS_Wave">Wave</h2>
<!-- backwards compatibility -->
<a id="schemawave"></a>
<a id="schema_Wave"></a>
<a id="tocSwave"></a>
<a id="tocswave"></a>

```json
{
  "arn": {},
  "creationDateTime": {},
  "description": {},
  "isArchived": {},
  "lastModifiedDateTime": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "waveAggregatedStatus": {
    "healthStatus": {},
    "lastUpdateDateTime": {},
    "progressStatus": {},
    "replicationStartedDateTime": {},
    "totalApplications": {}
  },
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|creationDateTime|object|false|none|none|
|description|object|false|none|none|
|isArchived|object|false|none|none|
|lastModifiedDateTime|object|false|none|none|
|name|object|false|none|none|
|tags|object|false|none|none|
|waveAggregatedStatus|object|false|none|none|
|waveID|object|false|none|none|

<h2 id="tocS_AssociateApplicationsResponse">AssociateApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapplicationsresponse"></a>
<a id="schema_AssociateApplicationsResponse"></a>
<a id="tocSassociateapplicationsresponse"></a>
<a id="tocsassociateapplicationsresponse"></a>

```json
{}
```

<h2 id="tocS_ApplicationID">ApplicationID</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationid"></a>
<a id="schema_ApplicationID"></a>
<a id="tocSapplicationid"></a>
<a id="tocsapplicationid"></a>

```json
"stringstringstringstr"
```

<h2 id="tocS_AssociateSourceServersResponse">AssociateSourceServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesourceserversresponse"></a>
<a id="schema_AssociateSourceServersResponse"></a>
<a id="tocSassociatesourceserversresponse"></a>
<a id="tocsassociatesourceserversresponse"></a>

```json
{}
```

<h2 id="tocS_SourceServerID">SourceServerID</h2>
<!-- backwards compatibility -->
<a id="schemasourceserverid"></a>
<a id="schema_SourceServerID"></a>
<a id="tocSsourceserverid"></a>
<a id="tocssourceserverid"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_SourceServer">SourceServer</h2>
<!-- backwards compatibility -->
<a id="schemasourceserver"></a>
<a id="schema_SourceServer"></a>
<a id="tocSsourceserver"></a>
<a id="tocssourceserver"></a>

```json
{
  "applicationID": {},
  "arn": {},
  "dataReplicationInfo": {
    "dataReplicationError": {
      "error": {},
      "rawError": {}
    },
    "dataReplicationInitiation": {
      "nextAttemptDateTime": {},
      "startDateTime": {},
      "steps": {}
    },
    "dataReplicationState": {},
    "etaDateTime": {},
    "lagDuration": {},
    "lastSnapshotDateTime": {},
    "replicatedDisks": {}
  },
  "fqdnForActionFramework": {},
  "isArchived": {},
  "launchedInstance": {
    "ec2InstanceID": {},
    "firstBoot": {},
    "jobID": {}
  },
  "lifeCycle": {
    "addedToServiceDateTime": {},
    "elapsedReplicationDuration": {},
    "firstByteDateTime": {},
    "lastCutover": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "lastSeenByServiceDateTime": {},
    "lastTest": {
      "finalized": {
        "apiCallDateTime": {}
      },
      "initiated": {
        "apiCallDateTime": {},
        "jobID": {}
      },
      "reverted": {
        "apiCallDateTime": {}
      }
    },
    "state": {}
  },
  "replicationType": {},
  "sourceProperties": {
    "cpus": {},
    "disks": {},
    "identificationHints": {
      "awsInstanceID": {},
      "fqdn": {},
      "hostname": {},
      "vmPath": {},
      "vmWareUuid": {}
    },
    "lastUpdatedDateTime": {},
    "networkInterfaces": {},
    "os": {
      "fullString": {}
    },
    "ramBytes": {},
    "recommendedInstanceType": {}
  },
  "sourceServerID": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userProvidedID": {},
  "vcenterClientID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|false|none|none|
|arn|object|false|none|none|
|dataReplicationInfo|object|false|none|none|
|fqdnForActionFramework|object|false|none|none|
|isArchived|object|false|none|none|
|launchedInstance|object|false|none|none|
|lifeCycle|object|false|none|none|
|replicationType|object|false|none|none|
|sourceProperties|object|false|none|none|
|sourceServerID|object|false|none|none|
|tags|object|false|none|none|
|userProvidedID|object|false|none|none|
|vcenterClientID|object|false|none|none|

<h2 id="tocS_ChangeServerLifeCycleStateSourceServerLifecycleState">ChangeServerLifeCycleStateSourceServerLifecycleState</h2>
<!-- backwards compatibility -->
<a id="schemachangeserverlifecyclestatesourceserverlifecyclestate"></a>
<a id="schema_ChangeServerLifeCycleStateSourceServerLifecycleState"></a>
<a id="tocSchangeserverlifecyclestatesourceserverlifecyclestate"></a>
<a id="tocschangeserverlifecyclestatesourceserverlifecyclestate"></a>

```json
"READY_FOR_TEST"
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_LaunchConfigurationTemplate">LaunchConfigurationTemplate</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationtemplate"></a>
<a id="schema_LaunchConfigurationTemplate"></a>
<a id="tocSlaunchconfigurationtemplate"></a>
<a id="tocslaunchconfigurationtemplate"></a>

```json
{
  "arn": {},
  "associatePublicIpAddress": {},
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "ec2LaunchTemplateID": {},
  "enableMapAutoTagging": {},
  "largeVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "launchConfigurationTemplateID": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "smallVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "smallVolumeMaxSize": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "targetInstanceTypeRightSizingMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|associatePublicIpAddress|object|false|none|none|
|bootMode|object|false|none|none|
|copyPrivateIp|object|false|none|none|
|copyTags|object|false|none|none|
|ec2LaunchTemplateID|object|false|none|none|
|enableMapAutoTagging|object|false|none|none|
|largeVolumeConf|object|false|none|none|
|launchConfigurationTemplateID|object|true|none|none|
|launchDisposition|object|false|none|none|
|licensing|[Licensing](#schemalicensing)|false|none|Configure Licensing.|
|mapAutoTaggingMpeID|object|false|none|none|
|postLaunchActions|object|false|none|none|
|smallVolumeConf|object|false|none|none|
|smallVolumeMaxSize|object|false|none|none|
|tags|object|false|none|none|
|targetInstanceTypeRightSizingMethod|object|false|none|none|

<h2 id="tocS_PositiveInteger">PositiveInteger</h2>
<!-- backwards compatibility -->
<a id="schemapositiveinteger"></a>
<a id="schema_PositiveInteger"></a>
<a id="tocSpositiveinteger"></a>
<a id="tocspositiveinteger"></a>

```json
0
```

<h2 id="tocS_VolumeType">VolumeType</h2>
<!-- backwards compatibility -->
<a id="schemavolumetype"></a>
<a id="schema_VolumeType"></a>
<a id="tocSvolumetype"></a>
<a id="tocsvolumetype"></a>

```json
"io1"
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

<h2 id="tocS_CloudWatchLogGroupName">CloudWatchLogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggroupname"></a>
<a id="schema_CloudWatchLogGroupName"></a>
<a id="tocScloudwatchloggroupname"></a>
<a id="tocscloudwatchloggroupname"></a>

```json
"string"
```

<h2 id="tocS_PostLaunchActionsDeploymentType">PostLaunchActionsDeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemapostlaunchactionsdeploymenttype"></a>
<a id="schema_PostLaunchActionsDeploymentType"></a>
<a id="tocSpostlaunchactionsdeploymenttype"></a>
<a id="tocspostlaunchactionsdeploymenttype"></a>

```json
"TEST_AND_CUTOVER"
```

<h2 id="tocS_S3LogBucketName">S3LogBucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3logbucketname"></a>
<a id="schema_S3LogBucketName"></a>
<a id="tocSs3logbucketname"></a>
<a id="tocss3logbucketname"></a>

```json
"string"
```

<h2 id="tocS_BoundedString">BoundedString</h2>
<!-- backwards compatibility -->
<a id="schemaboundedstring"></a>
<a id="schema_BoundedString"></a>
<a id="tocSboundedstring"></a>
<a id="tocsboundedstring"></a>

```json
"string"
```

<h2 id="tocS_SsmDocuments">SsmDocuments</h2>
<!-- backwards compatibility -->
<a id="schemassmdocuments"></a>
<a id="schema_SsmDocuments"></a>
<a id="tocSssmdocuments"></a>
<a id="tocsssmdocuments"></a>

```json
[
  {
    "actionName": {},
    "externalParameters": {
      "property1": {
        "dynamicPath": {}
      },
      "property2": {
        "dynamicPath": {}
      }
    },
    "mustSucceedForCutover": {},
    "parameters": {
      "property1": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ],
      "property2": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ]
    },
    "ssmDocumentName": {},
    "timeoutSeconds": {}
  }
]
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

<h2 id="tocS_ReplicationConfigurationTemplate">ReplicationConfigurationTemplate</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationtemplate"></a>
<a id="schema_ReplicationConfigurationTemplate"></a>
<a id="tocSreplicationconfigurationtemplate"></a>
<a id="tocsreplicationconfigurationtemplate"></a>

```json
{
  "arn": {},
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "replicationConfigurationTemplateID": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|associateDefaultSecurityGroup|object|false|none|none|
|bandwidthThrottling|object|false|none|none|
|createPublicIP|object|false|none|none|
|dataPlaneRouting|object|false|none|none|
|defaultLargeStagingDiskType|object|false|none|none|
|ebsEncryption|object|false|none|none|
|ebsEncryptionKeyArn|object|false|none|none|
|replicationConfigurationTemplateID|object|true|none|none|
|replicationServerInstanceType|object|false|none|none|
|replicationServersSecurityGroupsIDs|object|false|none|none|
|stagingAreaSubnetId|object|false|none|none|
|stagingAreaTags|object|false|none|none|
|tags|object|false|none|none|
|useDedicatedReplicationServer|object|false|none|none|

<h2 id="tocS_SecurityGroupID">SecurityGroupID</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupID"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_DeleteApplicationResponse">DeleteApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationresponse"></a>
<a id="schema_DeleteApplicationResponse"></a>
<a id="tocSdeleteapplicationresponse"></a>
<a id="tocsdeleteapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteJobResponse">DeleteJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobresponse"></a>
<a id="schema_DeleteJobResponse"></a>
<a id="tocSdeletejobresponse"></a>
<a id="tocsdeletejobresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLaunchConfigurationTemplateResponse">DeleteLaunchConfigurationTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelaunchconfigurationtemplateresponse"></a>
<a id="schema_DeleteLaunchConfigurationTemplateResponse"></a>
<a id="tocSdeletelaunchconfigurationtemplateresponse"></a>
<a id="tocsdeletelaunchconfigurationtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteReplicationConfigurationTemplateResponse">DeleteReplicationConfigurationTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationconfigurationtemplateresponse"></a>
<a id="schema_DeleteReplicationConfigurationTemplateResponse"></a>
<a id="tocSdeletereplicationconfigurationtemplateresponse"></a>
<a id="tocsdeletereplicationconfigurationtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSourceServerResponse">DeleteSourceServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesourceserverresponse"></a>
<a id="schema_DeleteSourceServerResponse"></a>
<a id="tocSdeletesourceserverresponse"></a>
<a id="tocsdeletesourceserverresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWaveResponse">DeleteWaveResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewaveresponse"></a>
<a id="schema_DeleteWaveResponse"></a>
<a id="tocSdeletewaveresponse"></a>
<a id="tocsdeletewaveresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeJobLogItemsResponse">DescribeJobLogItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejoblogitemsresponse"></a>
<a id="schema_DescribeJobLogItemsResponse"></a>
<a id="tocSdescribejoblogitemsresponse"></a>
<a id="tocsdescribejoblogitemsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeJobsResponse">DescribeJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobsresponse"></a>
<a id="schema_DescribeJobsResponse"></a>
<a id="tocSdescribejobsresponse"></a>
<a id="tocsdescribejobsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ISO8601DatetimeString">ISO8601DatetimeString</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601datetimestring"></a>
<a id="schema_ISO8601DatetimeString"></a>
<a id="tocSiso8601datetimestring"></a>
<a id="tocsiso8601datetimestring"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_DescribeJobsRequestFiltersJobIDs">DescribeJobsRequestFiltersJobIDs</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobsrequestfiltersjobids"></a>
<a id="schema_DescribeJobsRequestFiltersJobIDs"></a>
<a id="tocSdescribejobsrequestfiltersjobids"></a>
<a id="tocsdescribejobsrequestfiltersjobids"></a>

```json
[
  "stringstringstringstring"
]
```

<h2 id="tocS_DescribeLaunchConfigurationTemplatesResponse">DescribeLaunchConfigurationTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelaunchconfigurationtemplatesresponse"></a>
<a id="schema_DescribeLaunchConfigurationTemplatesResponse"></a>
<a id="tocSdescribelaunchconfigurationtemplatesresponse"></a>
<a id="tocsdescribelaunchconfigurationtemplatesresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_LaunchConfigurationTemplateID">LaunchConfigurationTemplateID</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationtemplateid"></a>
<a id="schema_LaunchConfigurationTemplateID"></a>
<a id="tocSlaunchconfigurationtemplateid"></a>
<a id="tocslaunchconfigurationtemplateid"></a>

```json
"stringstringstringstr"
```

<h2 id="tocS_DescribeReplicationConfigurationTemplatesResponse">DescribeReplicationConfigurationTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationconfigurationtemplatesresponse"></a>
<a id="schema_DescribeReplicationConfigurationTemplatesResponse"></a>
<a id="tocSdescribereplicationconfigurationtemplatesresponse"></a>
<a id="tocsdescribereplicationconfigurationtemplatesresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ReplicationConfigurationTemplateID">ReplicationConfigurationTemplateID</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationtemplateid"></a>
<a id="schema_ReplicationConfigurationTemplateID"></a>
<a id="tocSreplicationconfigurationtemplateid"></a>
<a id="tocsreplicationconfigurationtemplateid"></a>

```json
"stringstringstringstr"
```

<h2 id="tocS_DescribeSourceServersResponse">DescribeSourceServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesourceserversresponse"></a>
<a id="schema_DescribeSourceServersResponse"></a>
<a id="tocSdescribesourceserversresponse"></a>
<a id="tocsdescribesourceserversresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeSourceServersRequestApplicationIDs">DescribeSourceServersRequestApplicationIDs</h2>
<!-- backwards compatibility -->
<a id="schemadescribesourceserversrequestapplicationids"></a>
<a id="schema_DescribeSourceServersRequestApplicationIDs"></a>
<a id="tocSdescribesourceserversrequestapplicationids"></a>
<a id="tocsdescribesourceserversrequestapplicationids"></a>

```json
[
  "stringstringstringstr"
]
```

<h2 id="tocS_LifeCycleStates">LifeCycleStates</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclestates"></a>
<a id="schema_LifeCycleStates"></a>
<a id="tocSlifecyclestates"></a>
<a id="tocslifecyclestates"></a>

```json
[
  "STOPPED"
]
```

<h2 id="tocS_ReplicationTypes">ReplicationTypes</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtypes"></a>
<a id="schema_ReplicationTypes"></a>
<a id="tocSreplicationtypes"></a>
<a id="tocsreplicationtypes"></a>

```json
[
  "AGENT_BASED"
]
```

<h2 id="tocS_DescribeSourceServersRequestFiltersIDs">DescribeSourceServersRequestFiltersIDs</h2>
<!-- backwards compatibility -->
<a id="schemadescribesourceserversrequestfiltersids"></a>
<a id="schema_DescribeSourceServersRequestFiltersIDs"></a>
<a id="tocSdescribesourceserversrequestfiltersids"></a>
<a id="tocsdescribesourceserversrequestfiltersids"></a>

```json
[
  "stringstringstrings"
]
```

<h2 id="tocS_DescribeVcenterClientsResponse">DescribeVcenterClientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevcenterclientsresponse"></a>
<a id="schema_DescribeVcenterClientsResponse"></a>
<a id="tocSdescribevcenterclientsresponse"></a>
<a id="tocsdescribevcenterclientsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DisassociateApplicationsResponse">DisassociateApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapplicationsresponse"></a>
<a id="schema_DisassociateApplicationsResponse"></a>
<a id="tocSdisassociateapplicationsresponse"></a>
<a id="tocsdisassociateapplicationsresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateSourceServersResponse">DisassociateSourceServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesourceserversresponse"></a>
<a id="schema_DisassociateSourceServersResponse"></a>
<a id="tocSdisassociatesourceserversresponse"></a>
<a id="tocsdisassociatesourceserversresponse"></a>

```json
{}
```

<h2 id="tocS_LaunchConfiguration">LaunchConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfiguration"></a>
<a id="schema_LaunchConfiguration"></a>
<a id="tocSlaunchconfiguration"></a>
<a id="tocslaunchconfiguration"></a>

```json
{
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "ec2LaunchTemplateID": {},
  "enableMapAutoTagging": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "name": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "sourceServerID": {},
  "targetInstanceTypeRightSizingMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootMode|object|false|none|none|
|copyPrivateIp|object|false|none|none|
|copyTags|object|false|none|none|
|ec2LaunchTemplateID|object|false|none|none|
|enableMapAutoTagging|object|false|none|none|
|launchDisposition|object|false|none|none|
|licensing|object|false|none|none|
|mapAutoTaggingMpeID|object|false|none|none|
|name|object|false|none|none|
|postLaunchActions|[PostLaunchActions](#schemapostlaunchactions)|false|none|Post Launch Actions to executed on the Test or Cutover instance.|
|sourceServerID|object|false|none|none|
|targetInstanceTypeRightSizingMethod|object|false|none|none|

<h2 id="tocS_ReplicationConfiguration">ReplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfiguration"></a>
<a id="schema_ReplicationConfiguration"></a>
<a id="tocSreplicationconfiguration"></a>
<a id="tocsreplicationconfiguration"></a>

```json
{
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "name": {},
  "replicatedDisks": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "sourceServerID": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associateDefaultSecurityGroup|object|false|none|none|
|bandwidthThrottling|object|false|none|none|
|createPublicIP|object|false|none|none|
|dataPlaneRouting|object|false|none|none|
|defaultLargeStagingDiskType|object|false|none|none|
|ebsEncryption|object|false|none|none|
|ebsEncryptionKeyArn|object|false|none|none|
|name|object|false|none|none|
|replicatedDisks|object|false|none|none|
|replicationServerInstanceType|object|false|none|none|
|replicationServersSecurityGroupsIDs|object|false|none|none|
|sourceServerID|object|false|none|none|
|stagingAreaSubnetId|object|false|none|none|
|stagingAreaTags|object|false|none|none|
|useDedicatedReplicationServer|object|false|none|none|

<h2 id="tocS_InitializeServiceResponse">InitializeServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemainitializeserviceresponse"></a>
<a id="schema_InitializeServiceResponse"></a>
<a id="tocSinitializeserviceresponse"></a>
<a id="tocsinitializeserviceresponse"></a>

```json
{}
```

<h2 id="tocS_ListApplicationsResponse">ListApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsresponse"></a>
<a id="schema_ListApplicationsResponse"></a>
<a id="tocSlistapplicationsresponse"></a>
<a id="tocslistapplicationsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ApplicationIDsFilter">ApplicationIDsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationidsfilter"></a>
<a id="schema_ApplicationIDsFilter"></a>
<a id="tocSapplicationidsfilter"></a>
<a id="tocsapplicationidsfilter"></a>

```json
[
  "stringstringstringstr"
]
```

<h2 id="tocS_WaveIDsFilter">WaveIDsFilter</h2>
<!-- backwards compatibility -->
<a id="schemawaveidsfilter"></a>
<a id="schema_WaveIDsFilter"></a>
<a id="tocSwaveidsfilter"></a>
<a id="tocswaveidsfilter"></a>

```json
[
  "stringstringstringstri"
]
```

<h2 id="tocS_ListExportErrorsResponse">ListExportErrorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexporterrorsresponse"></a>
<a id="schema_ListExportErrorsResponse"></a>
<a id="tocSlistexporterrorsresponse"></a>
<a id="tocslistexporterrorsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

List export errors response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListExportsResponse">ListExportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsresponse"></a>
<a id="schema_ListExportsResponse"></a>
<a id="tocSlistexportsresponse"></a>
<a id="tocslistexportsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

List export response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListExportsRequestFiltersExportIDs">ListExportsRequestFiltersExportIDs</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsrequestfiltersexportids"></a>
<a id="schema_ListExportsRequestFiltersExportIDs"></a>
<a id="tocSlistexportsrequestfiltersexportids"></a>
<a id="tocslistexportsrequestfiltersexportids"></a>

```json
[
  "stringstringstringstring"
]
```

<h2 id="tocS_ListImportErrorsResponse">ListImportErrorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimporterrorsresponse"></a>
<a id="schema_ListImportErrorsResponse"></a>
<a id="tocSlistimporterrorsresponse"></a>
<a id="tocslistimporterrorsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

List imports errors response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImportsResponse">ListImportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsresponse"></a>
<a id="schema_ListImportsResponse"></a>
<a id="tocSlistimportsresponse"></a>
<a id="tocslistimportsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

List import response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ImportIDsFilter">ImportIDsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaimportidsfilter"></a>
<a id="schema_ImportIDsFilter"></a>
<a id="tocSimportidsfilter"></a>
<a id="tocsimportidsfilter"></a>

```json
[
  "stringstringstringstring"
]
```

<h2 id="tocS_ListSourceServerActionsResponse">ListSourceServerActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceserveractionsresponse"></a>
<a id="schema_ListSourceServerActionsResponse"></a>
<a id="tocSlistsourceserveractionsresponse"></a>
<a id="tocslistsourceserveractionsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ActionIDs">ActionIDs</h2>
<!-- backwards compatibility -->
<a id="schemaactionids"></a>
<a id="schema_ActionIDs"></a>
<a id="tocSactionids"></a>
<a id="tocsactionids"></a>

```json
[
  "string"
]
```

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

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

<h2 id="tocS_ListTemplateActionsResponse">ListTemplateActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttemplateactionsresponse"></a>
<a id="schema_ListTemplateActionsResponse"></a>
<a id="tocSlisttemplateactionsresponse"></a>
<a id="tocslisttemplateactionsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListWavesResponse">ListWavesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwavesresponse"></a>
<a id="schema_ListWavesResponse"></a>
<a id="tocSlistwavesresponse"></a>
<a id="tocslistwavesresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SourceServerActionDocument">SourceServerActionDocument</h2>
<!-- backwards compatibility -->
<a id="schemasourceserveractiondocument"></a>
<a id="schema_SourceServerActionDocument"></a>
<a id="tocSsourceserveractiondocument"></a>
<a id="tocssourceserveractiondocument"></a>

```json
{
  "actionID": {},
  "actionName": {},
  "active": {},
  "category": {},
  "description": {},
  "documentIdentifier": {},
  "documentVersion": {},
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "mustSucceedForCutover": {},
  "order": {},
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "timeoutSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionID|object|false|none|none|
|actionName|object|false|none|none|
|active|object|false|none|none|
|category|object|false|none|none|
|description|object|false|none|none|
|documentIdentifier|object|false|none|none|
|documentVersion|object|false|none|none|
|externalParameters|object|false|none|none|
|mustSucceedForCutover|object|false|none|none|
|order|object|false|none|none|
|parameters|object|false|none|none|
|timeoutSeconds|object|false|none|none|

<h2 id="tocS_SsmExternalParameter">SsmExternalParameter</h2>
<!-- backwards compatibility -->
<a id="schemassmexternalparameter"></a>
<a id="schema_SsmExternalParameter"></a>
<a id="tocSssmexternalparameter"></a>
<a id="tocsssmexternalparameter"></a>

```json
{
  "dynamicPath": {}
}
```

AWS Systems Manager Document external parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicPath|object|false|none|none|

<h2 id="tocS_SsmParameterStoreParameters">SsmParameterStoreParameters</h2>
<!-- backwards compatibility -->
<a id="schemassmparameterstoreparameters"></a>
<a id="schema_SsmParameterStoreParameters"></a>
<a id="tocSssmparameterstoreparameters"></a>
<a id="tocsssmparameterstoreparameters"></a>

```json
[
  {
    "parameterName": {},
    "parameterType": {}
  }
]
```

<h2 id="tocS_TemplateActionDocument">TemplateActionDocument</h2>
<!-- backwards compatibility -->
<a id="schematemplateactiondocument"></a>
<a id="schema_TemplateActionDocument"></a>
<a id="tocStemplateactiondocument"></a>
<a id="tocstemplateactiondocument"></a>

```json
{
  "actionID": {},
  "actionName": {},
  "active": {},
  "category": {},
  "description": {},
  "documentIdentifier": {},
  "documentVersion": {},
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "mustSucceedForCutover": {},
  "operatingSystem": {},
  "order": {},
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "timeoutSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionID|object|false|none|none|
|actionName|object|false|none|none|
|active|object|false|none|none|
|category|object|false|none|none|
|description|object|false|none|none|
|documentIdentifier|object|false|none|none|
|documentVersion|object|false|none|none|
|externalParameters|object|false|none|none|
|mustSucceedForCutover|object|false|none|none|
|operatingSystem|object|false|none|none|
|order|object|false|none|none|
|parameters|object|false|none|none|
|timeoutSeconds|object|false|none|none|

<h2 id="tocS_RemoveSourceServerActionResponse">RemoveSourceServerActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovesourceserveractionresponse"></a>
<a id="schema_RemoveSourceServerActionResponse"></a>
<a id="tocSremovesourceserveractionresponse"></a>
<a id="tocsremovesourceserveractionresponse"></a>

```json
{}
```

<h2 id="tocS_RemoveTemplateActionResponse">RemoveTemplateActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovetemplateactionresponse"></a>
<a id="schema_RemoveTemplateActionResponse"></a>
<a id="tocSremovetemplateactionresponse"></a>
<a id="tocsremovetemplateactionresponse"></a>

```json
{}
```

<h2 id="tocS_StartCutoverResponse">StartCutoverResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcutoverresponse"></a>
<a id="schema_StartCutoverResponse"></a>
<a id="tocSstartcutoverresponse"></a>
<a id="tocsstartcutoverresponse"></a>

```json
{
  "job": {
    "arn": {},
    "creationDateTime": {},
    "endDateTime": {},
    "initiatedBy": {},
    "jobID": {},
    "participatingServers": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|false|none|none|

<h2 id="tocS_StartExportResponse">StartExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartexportresponse"></a>
<a id="schema_StartExportResponse"></a>
<a id="tocSstartexportresponse"></a>
<a id="tocsstartexportresponse"></a>

```json
{
  "exportTask": {
    "creationDateTime": {},
    "endDateTime": {},
    "exportID": {},
    "progressPercentage": {},
    "s3Bucket": {},
    "s3BucketOwner": {},
    "s3Key": {},
    "status": {},
    "summary": {
      "applicationsCount": {},
      "serversCount": {},
      "wavesCount": {}
    }
  }
}
```

Start export response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportTask|object|false|none|none|

<h2 id="tocS_StartImportResponse">StartImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartimportresponse"></a>
<a id="schema_StartImportResponse"></a>
<a id="tocSstartimportresponse"></a>
<a id="tocsstartimportresponse"></a>

```json
{
  "importTask": {
    "creationDateTime": {},
    "endDateTime": {},
    "importID": {},
    "progressPercentage": {},
    "s3BucketSource": {
      "s3Bucket": {},
      "s3BucketOwner": {},
      "s3Key": {}
    },
    "status": {},
    "summary": {
      "applications": {
        "createdCount": {},
        "modifiedCount": {}
      },
      "servers": {
        "createdCount": {},
        "modifiedCount": {}
      },
      "waves": {
        "createdCount": {},
        "modifiedCount": {}
      }
    }
  }
}
```

Start import response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importTask|object|false|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_AccountID">AccountID</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountID"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
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

<h2 id="tocS_StartTestResponse">StartTestResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttestresponse"></a>
<a id="schema_StartTestResponse"></a>
<a id="tocSstarttestresponse"></a>
<a id="tocsstarttestresponse"></a>

```json
{
  "job": {
    "arn": {},
    "creationDateTime": {},
    "endDateTime": {},
    "initiatedBy": {},
    "jobID": {},
    "participatingServers": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|false|none|none|

<h2 id="tocS_TerminateTargetInstancesResponse">TerminateTargetInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminatetargetinstancesresponse"></a>
<a id="schema_TerminateTargetInstancesResponse"></a>
<a id="tocSterminatetargetinstancesresponse"></a>
<a id="tocsterminatetargetinstancesresponse"></a>

```json
{
  "job": {
    "arn": {},
    "creationDateTime": {},
    "endDateTime": {},
    "initiatedBy": {},
    "jobID": {},
    "participatingServers": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_ReplicationConfigurationReplicatedDisk">ReplicationConfigurationReplicatedDisk</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationreplicateddisk"></a>
<a id="schema_ReplicationConfigurationReplicatedDisk"></a>
<a id="tocSreplicationconfigurationreplicateddisk"></a>
<a id="tocsreplicationconfigurationreplicateddisk"></a>

```json
{
  "deviceName": {},
  "iops": {},
  "isBootDisk": {},
  "stagingDiskType": {},
  "throughput": {}
}
```

Replication Configuration replicated disk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceName|object|false|none|none|
|iops|object|false|none|none|
|isBootDisk|object|false|none|none|
|stagingDiskType|object|false|none|none|
|throughput|object|false|none|none|

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ActionCategory">ActionCategory</h2>
<!-- backwards compatibility -->
<a id="schemaactioncategory"></a>
<a id="schema_ActionCategory"></a>
<a id="tocSactioncategory"></a>
<a id="tocsactioncategory"></a>

```json
"DISASTER_RECOVERY"
```

<h2 id="tocS_ActionDescription">ActionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaactiondescription"></a>
<a id="schema_ActionDescription"></a>
<a id="tocSactiondescription"></a>
<a id="tocsactiondescription"></a>

```json
"string"
```

<h2 id="tocS_ActionID">ActionID</h2>
<!-- backwards compatibility -->
<a id="schemaactionid"></a>
<a id="schema_ActionID"></a>
<a id="tocSactionid"></a>
<a id="tocsactionid"></a>

```json
"string"
```

<h2 id="tocS_ActionName">ActionName</h2>
<!-- backwards compatibility -->
<a id="schemaactionname"></a>
<a id="schema_ActionName"></a>
<a id="tocSactionname"></a>
<a id="tocsactionname"></a>

```json
"string"
```

<h2 id="tocS_ApplicationAggregatedStatus">ApplicationAggregatedStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationaggregatedstatus"></a>
<a id="schema_ApplicationAggregatedStatus"></a>
<a id="tocSapplicationaggregatedstatus"></a>
<a id="tocsapplicationaggregatedstatus"></a>

```json
{
  "healthStatus": {},
  "lastUpdateDateTime": {},
  "progressStatus": {},
  "totalSourceServers": {}
}
```

Application aggregated status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthStatus|object|false|none|none|
|lastUpdateDateTime|object|false|none|none|
|progressStatus|object|false|none|none|
|totalSourceServers|object|false|none|none|

<h2 id="tocS_ApplicationDescription">ApplicationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescription"></a>
<a id="schema_ApplicationDescription"></a>
<a id="tocSapplicationdescription"></a>
<a id="tocsapplicationdescription"></a>

```json
"string"
```

<h2 id="tocS_ApplicationName">ApplicationName</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationname"></a>
<a id="schema_ApplicationName"></a>
<a id="tocSapplicationname"></a>
<a id="tocsapplicationname"></a>

```json
"string"
```

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

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

<h2 id="tocS_WaveID">WaveID</h2>
<!-- backwards compatibility -->
<a id="schemawaveid"></a>
<a id="schema_WaveID"></a>
<a id="tocSwaveid"></a>
<a id="tocswaveid"></a>

```json
"stringstringstringstri"
```

<h2 id="tocS_ApplicationHealthStatus">ApplicationHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationhealthstatus"></a>
<a id="schema_ApplicationHealthStatus"></a>
<a id="tocSapplicationhealthstatus"></a>
<a id="tocsapplicationhealthstatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_ApplicationProgressStatus">ApplicationProgressStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationprogressstatus"></a>
<a id="schema_ApplicationProgressStatus"></a>
<a id="tocSapplicationprogressstatus"></a>
<a id="tocsapplicationprogressstatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_ApplicationIDs">ApplicationIDs</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationids"></a>
<a id="schema_ApplicationIDs"></a>
<a id="tocSapplicationids"></a>
<a id="tocsapplicationids"></a>

```json
[
  "stringstringstringstr"
]
```

<h2 id="tocS_ApplicationsList">ApplicationsList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationslist"></a>
<a id="schema_ApplicationsList"></a>
<a id="tocSapplicationslist"></a>
<a id="tocsapplicationslist"></a>

```json
[
  {
    "applicationAggregatedStatus": {
      "healthStatus": {},
      "lastUpdateDateTime": {},
      "progressStatus": {},
      "totalSourceServers": {}
    },
    "applicationID": {},
    "arn": {},
    "creationDateTime": {},
    "description": {},
    "isArchived": {},
    "lastModifiedDateTime": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "waveID": {}
  }
]
```

<h2 id="tocS_ArchiveApplicationRequest">ArchiveApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveapplicationrequest"></a>
<a id="schema_ArchiveApplicationRequest"></a>
<a id="tocSarchiveapplicationrequest"></a>
<a id="tocsarchiveapplicationrequest"></a>

```json
{
  "applicationID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|true|none|none|

<h2 id="tocS_ArchiveWaveRequest">ArchiveWaveRequest</h2>
<!-- backwards compatibility -->
<a id="schemaarchivewaverequest"></a>
<a id="schema_ArchiveWaveRequest"></a>
<a id="tocSarchivewaverequest"></a>
<a id="tocsarchivewaverequest"></a>

```json
{
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|waveID|object|true|none|none|

<h2 id="tocS_AssociateApplicationsRequest">AssociateApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapplicationsrequest"></a>
<a id="schema_AssociateApplicationsRequest"></a>
<a id="tocSassociateapplicationsrequest"></a>
<a id="tocsassociateapplicationsrequest"></a>

```json
{
  "applicationIDs": {},
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationIDs|object|true|none|none|
|waveID|object|true|none|none|

<h2 id="tocS_AssociateSourceServersRequestSourceServerIDs">AssociateSourceServersRequestSourceServerIDs</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesourceserversrequestsourceserverids"></a>
<a id="schema_AssociateSourceServersRequestSourceServerIDs"></a>
<a id="tocSassociatesourceserversrequestsourceserverids"></a>
<a id="tocsassociatesourceserversrequestsourceserverids"></a>

```json
[
  "stringstringstrings"
]
```

<h2 id="tocS_AssociateSourceServersRequest">AssociateSourceServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesourceserversrequest"></a>
<a id="schema_AssociateSourceServersRequest"></a>
<a id="tocSassociatesourceserversrequest"></a>
<a id="tocsassociatesourceserversrequest"></a>

```json
{
  "applicationID": {},
  "sourceServerIDs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|true|none|none|
|sourceServerIDs|object|true|none|none|

<h2 id="tocS_BootMode">BootMode</h2>
<!-- backwards compatibility -->
<a id="schemabootmode"></a>
<a id="schema_BootMode"></a>
<a id="tocSbootmode"></a>
<a id="tocsbootmode"></a>

```json
"LEGACY_BIOS"
```

<h2 id="tocS_CPU">CPU</h2>
<!-- backwards compatibility -->
<a id="schemacpu"></a>
<a id="schema_CPU"></a>
<a id="tocScpu"></a>
<a id="tocscpu"></a>

```json
{
  "cores": {},
  "modelName": {}
}
```

Source server CPU information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cores|object|false|none|none|
|modelName|object|false|none|none|

<h2 id="tocS_ChangeServerLifeCycleStateSourceServerLifecycle">ChangeServerLifeCycleStateSourceServerLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemachangeserverlifecyclestatesourceserverlifecycle"></a>
<a id="schema_ChangeServerLifeCycleStateSourceServerLifecycle"></a>
<a id="tocSchangeserverlifecyclestatesourceserverlifecycle"></a>
<a id="tocschangeserverlifecyclestatesourceserverlifecycle"></a>

```json
{
  "state": {}
}
```

The request to change the source server migration lifecycle state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|

<h2 id="tocS_ChangeServerLifeCycleStateRequest">ChangeServerLifeCycleStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangeserverlifecyclestaterequest"></a>
<a id="schema_ChangeServerLifeCycleStateRequest"></a>
<a id="tocSchangeserverlifecyclestaterequest"></a>
<a id="tocschangeserverlifecyclestaterequest"></a>

```json
{
  "lifeCycle": {
    "state": {}
  },
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lifeCycle|object|true|none|none|
|sourceServerID|object|true|none|none|

<h2 id="tocS_ClientIdempotencyToken">ClientIdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientidempotencytoken"></a>
<a id="schema_ClientIdempotencyToken"></a>
<a id="tocSclientidempotencytoken"></a>
<a id="tocsclientidempotencytoken"></a>

```json
"string"
```

<h2 id="tocS_Cpus">Cpus</h2>
<!-- backwards compatibility -->
<a id="schemacpus"></a>
<a id="schema_Cpus"></a>
<a id="tocScpus"></a>
<a id="tocscpus"></a>

```json
[
  {
    "cores": {},
    "modelName": {}
  }
]
```

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "description": {},
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
|description|object|false|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_LaunchTemplateDiskConf">LaunchTemplateDiskConf</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatediskconf"></a>
<a id="schema_LaunchTemplateDiskConf"></a>
<a id="tocSlaunchtemplatediskconf"></a>
<a id="tocslaunchtemplatediskconf"></a>

```json
{
  "iops": {},
  "throughput": {},
  "volumeType": {}
}
```

Launch template disk configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iops|object|false|none|none|
|throughput|object|false|none|none|
|volumeType|object|false|none|none|

<h2 id="tocS_LaunchDisposition">LaunchDisposition</h2>
<!-- backwards compatibility -->
<a id="schemalaunchdisposition"></a>
<a id="schema_LaunchDisposition"></a>
<a id="tocSlaunchdisposition"></a>
<a id="tocslaunchdisposition"></a>

```json
"STOPPED"
```

<h2 id="tocS_Licensing">Licensing</h2>
<!-- backwards compatibility -->
<a id="schemalicensing"></a>
<a id="schema_Licensing"></a>
<a id="tocSlicensing"></a>
<a id="tocslicensing"></a>

```json
{
  "osByol": {}
}
```

Configure Licensing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|osByol|object|false|none|none|

<h2 id="tocS_PostLaunchActions">PostLaunchActions</h2>
<!-- backwards compatibility -->
<a id="schemapostlaunchactions"></a>
<a id="schema_PostLaunchActions"></a>
<a id="tocSpostlaunchactions"></a>
<a id="tocspostlaunchactions"></a>

```json
{
  "cloudWatchLogGroupName": {},
  "deployment": {},
  "s3LogBucket": {},
  "s3OutputKeyPrefix": {},
  "ssmDocuments": {}
}
```

Post Launch Actions to executed on the Test or Cutover instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogGroupName|object|false|none|none|
|deployment|object|false|none|none|
|s3LogBucket|object|false|none|none|
|s3OutputKeyPrefix|object|false|none|none|
|ssmDocuments|object|false|none|none|

<h2 id="tocS_TargetInstanceTypeRightSizingMethod">TargetInstanceTypeRightSizingMethod</h2>
<!-- backwards compatibility -->
<a id="schematargetinstancetyperightsizingmethod"></a>
<a id="schema_TargetInstanceTypeRightSizingMethod"></a>
<a id="tocStargetinstancetyperightsizingmethod"></a>
<a id="tocstargetinstancetyperightsizingmethod"></a>

```json
"NONE"
```

<h2 id="tocS_CreateLaunchConfigurationTemplateRequest">CreateLaunchConfigurationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelaunchconfigurationtemplaterequest"></a>
<a id="schema_CreateLaunchConfigurationTemplateRequest"></a>
<a id="tocScreatelaunchconfigurationtemplaterequest"></a>
<a id="tocscreatelaunchconfigurationtemplaterequest"></a>

```json
{
  "associatePublicIpAddress": {},
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "enableMapAutoTagging": {},
  "largeVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "smallVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "smallVolumeMaxSize": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "targetInstanceTypeRightSizingMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatePublicIpAddress|object|false|none|none|
|bootMode|object|false|none|none|
|copyPrivateIp|object|false|none|none|
|copyTags|object|false|none|none|
|enableMapAutoTagging|object|false|none|none|
|largeVolumeConf|object|false|none|none|
|launchDisposition|object|false|none|none|
|licensing|[Licensing](#schemalicensing)|false|none|Configure Licensing.|
|mapAutoTaggingMpeID|object|false|none|none|
|postLaunchActions|object|false|none|none|
|smallVolumeConf|object|false|none|none|
|smallVolumeMaxSize|object|false|none|none|
|tags|object|false|none|none|
|targetInstanceTypeRightSizingMethod|object|false|none|none|

<h2 id="tocS_ReplicationConfigurationDataPlaneRouting">ReplicationConfigurationDataPlaneRouting</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationdataplanerouting"></a>
<a id="schema_ReplicationConfigurationDataPlaneRouting"></a>
<a id="tocSreplicationconfigurationdataplanerouting"></a>
<a id="tocsreplicationconfigurationdataplanerouting"></a>

```json
"PRIVATE_IP"
```

<h2 id="tocS_ReplicationConfigurationDefaultLargeStagingDiskType">ReplicationConfigurationDefaultLargeStagingDiskType</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationdefaultlargestagingdisktype"></a>
<a id="schema_ReplicationConfigurationDefaultLargeStagingDiskType"></a>
<a id="tocSreplicationconfigurationdefaultlargestagingdisktype"></a>
<a id="tocsreplicationconfigurationdefaultlargestagingdisktype"></a>

```json
"GP2"
```

<h2 id="tocS_ReplicationConfigurationEbsEncryption">ReplicationConfigurationEbsEncryption</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationebsencryption"></a>
<a id="schema_ReplicationConfigurationEbsEncryption"></a>
<a id="tocSreplicationconfigurationebsencryption"></a>
<a id="tocsreplicationconfigurationebsencryption"></a>

```json
"DEFAULT"
```

<h2 id="tocS_EC2InstanceType">EC2InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancetype"></a>
<a id="schema_EC2InstanceType"></a>
<a id="tocSec2instancetype"></a>
<a id="tocsec2instancetype"></a>

```json
"string"
```

<h2 id="tocS_ReplicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</h2>
<!-- backwards compatibility -->
<a id="schemareplicationserverssecuritygroupsids"></a>
<a id="schema_ReplicationServersSecurityGroupsIDs"></a>
<a id="tocSreplicationserverssecuritygroupsids"></a>
<a id="tocsreplicationserverssecuritygroupsids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetID">SubnetID</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetID"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_CreateReplicationConfigurationTemplateRequest">CreateReplicationConfigurationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationconfigurationtemplaterequest"></a>
<a id="schema_CreateReplicationConfigurationTemplateRequest"></a>
<a id="tocScreatereplicationconfigurationtemplaterequest"></a>
<a id="tocscreatereplicationconfigurationtemplaterequest"></a>

```json
{
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associateDefaultSecurityGroup|object|true|none|none|
|bandwidthThrottling|object|true|none|none|
|createPublicIP|object|true|none|none|
|dataPlaneRouting|object|true|none|none|
|defaultLargeStagingDiskType|object|true|none|none|
|ebsEncryption|object|true|none|none|
|ebsEncryptionKeyArn|object|false|none|none|
|replicationServerInstanceType|object|true|none|none|
|replicationServersSecurityGroupsIDs|object|true|none|none|
|stagingAreaSubnetId|object|true|none|none|
|stagingAreaTags|object|true|none|none|
|tags|object|false|none|none|
|useDedicatedReplicationServer|object|true|none|none|

<h2 id="tocS_WaveDescription">WaveDescription</h2>
<!-- backwards compatibility -->
<a id="schemawavedescription"></a>
<a id="schema_WaveDescription"></a>
<a id="tocSwavedescription"></a>
<a id="tocswavedescription"></a>

```json
"string"
```

<h2 id="tocS_WaveName">WaveName</h2>
<!-- backwards compatibility -->
<a id="schemawavename"></a>
<a id="schema_WaveName"></a>
<a id="tocSwavename"></a>
<a id="tocswavename"></a>

```json
"string"
```

<h2 id="tocS_CreateWaveRequest">CreateWaveRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewaverequest"></a>
<a id="schema_CreateWaveRequest"></a>
<a id="tocScreatewaverequest"></a>
<a id="tocscreatewaverequest"></a>

```json
{
  "description": {},
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
|description|object|false|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DataReplicationErrorString">DataReplicationErrorString</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationerrorstring"></a>
<a id="schema_DataReplicationErrorString"></a>
<a id="tocSdatareplicationerrorstring"></a>
<a id="tocsdatareplicationerrorstring"></a>

```json
"AGENT_NOT_SEEN"
```

<h2 id="tocS_LargeBoundedString">LargeBoundedString</h2>
<!-- backwards compatibility -->
<a id="schemalargeboundedstring"></a>
<a id="schema_LargeBoundedString"></a>
<a id="tocSlargeboundedstring"></a>
<a id="tocslargeboundedstring"></a>

```json
"string"
```

<h2 id="tocS_DataReplicationError">DataReplicationError</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationerror"></a>
<a id="schema_DataReplicationError"></a>
<a id="tocSdatareplicationerror"></a>
<a id="tocsdatareplicationerror"></a>

```json
{
  "error": {},
  "rawError": {}
}
```

Error in data replication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|rawError|object|false|none|none|

<h2 id="tocS_DataReplicationInitiation">DataReplicationInitiation</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinitiation"></a>
<a id="schema_DataReplicationInitiation"></a>
<a id="tocSdatareplicationinitiation"></a>
<a id="tocsdatareplicationinitiation"></a>

```json
{
  "nextAttemptDateTime": {},
  "startDateTime": {},
  "steps": {}
}
```

Data replication initiation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextAttemptDateTime|object|false|none|none|
|startDateTime|object|false|none|none|
|steps|object|false|none|none|

<h2 id="tocS_DataReplicationState">DataReplicationState</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationstate"></a>
<a id="schema_DataReplicationState"></a>
<a id="tocSdatareplicationstate"></a>
<a id="tocsdatareplicationstate"></a>

```json
"STOPPED"
```

<h2 id="tocS_ISO8601DurationString">ISO8601DurationString</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601durationstring"></a>
<a id="schema_ISO8601DurationString"></a>
<a id="tocSiso8601durationstring"></a>
<a id="tocsiso8601durationstring"></a>

```json
"string"
```

<h2 id="tocS_DataReplicationInfoReplicatedDisks">DataReplicationInfoReplicatedDisks</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinforeplicateddisks"></a>
<a id="schema_DataReplicationInfoReplicatedDisks"></a>
<a id="tocSdatareplicationinforeplicateddisks"></a>
<a id="tocsdatareplicationinforeplicateddisks"></a>

```json
[
  {
    "backloggedStorageBytes": {},
    "deviceName": {},
    "replicatedStorageBytes": {},
    "rescannedStorageBytes": {},
    "totalStorageBytes": {}
  }
]
```

<h2 id="tocS_DataReplicationInfo">DataReplicationInfo</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinfo"></a>
<a id="schema_DataReplicationInfo"></a>
<a id="tocSdatareplicationinfo"></a>
<a id="tocsdatareplicationinfo"></a>

```json
{
  "dataReplicationError": {
    "error": {},
    "rawError": {}
  },
  "dataReplicationInitiation": {
    "nextAttemptDateTime": {},
    "startDateTime": {},
    "steps": {}
  },
  "dataReplicationState": {},
  "etaDateTime": {},
  "lagDuration": {},
  "lastSnapshotDateTime": {},
  "replicatedDisks": {}
}
```

Request data replication info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataReplicationError|object|false|none|none|
|dataReplicationInitiation|object|false|none|none|
|dataReplicationState|object|false|none|none|
|etaDateTime|object|false|none|none|
|lagDuration|object|false|none|none|
|lastSnapshotDateTime|object|false|none|none|
|replicatedDisks|object|false|none|none|

<h2 id="tocS_DataReplicationInfoReplicatedDisk">DataReplicationInfoReplicatedDisk</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinforeplicateddisk"></a>
<a id="schema_DataReplicationInfoReplicatedDisk"></a>
<a id="tocSdatareplicationinforeplicateddisk"></a>
<a id="tocsdatareplicationinforeplicateddisk"></a>

```json
{
  "backloggedStorageBytes": {},
  "deviceName": {},
  "replicatedStorageBytes": {},
  "rescannedStorageBytes": {},
  "totalStorageBytes": {}
}
```

Request to query disks replicated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backloggedStorageBytes|object|false|none|none|
|deviceName|object|false|none|none|
|replicatedStorageBytes|object|false|none|none|
|rescannedStorageBytes|object|false|none|none|
|totalStorageBytes|object|false|none|none|

<h2 id="tocS_DataReplicationInitiationSteps">DataReplicationInitiationSteps</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinitiationsteps"></a>
<a id="schema_DataReplicationInitiationSteps"></a>
<a id="tocSdatareplicationinitiationsteps"></a>
<a id="tocsdatareplicationinitiationsteps"></a>

```json
[
  {
    "name": {},
    "status": {}
  }
]
```

<h2 id="tocS_DataReplicationInitiationStepName">DataReplicationInitiationStepName</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinitiationstepname"></a>
<a id="schema_DataReplicationInitiationStepName"></a>
<a id="tocSdatareplicationinitiationstepname"></a>
<a id="tocsdatareplicationinitiationstepname"></a>

```json
"WAIT"
```

<h2 id="tocS_DataReplicationInitiationStepStatus">DataReplicationInitiationStepStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinitiationstepstatus"></a>
<a id="schema_DataReplicationInitiationStepStatus"></a>
<a id="tocSdatareplicationinitiationstepstatus"></a>
<a id="tocsdatareplicationinitiationstepstatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_DataReplicationInitiationStep">DataReplicationInitiationStep</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationinitiationstep"></a>
<a id="schema_DataReplicationInitiationStep"></a>
<a id="tocSdatareplicationinitiationstep"></a>
<a id="tocsdatareplicationinitiationstep"></a>

```json
{
  "name": {},
  "status": {}
}
```

Data replication initiation step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_DeleteApplicationRequest">DeleteApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationrequest"></a>
<a id="schema_DeleteApplicationRequest"></a>
<a id="tocSdeleteapplicationrequest"></a>
<a id="tocsdeleteapplicationrequest"></a>

```json
{
  "applicationID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|true|none|none|

<h2 id="tocS_JobID">JobID</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobID"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"stringstringstringstring"
```

<h2 id="tocS_DeleteJobRequest">DeleteJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobrequest"></a>
<a id="schema_DeleteJobRequest"></a>
<a id="tocSdeletejobrequest"></a>
<a id="tocsdeletejobrequest"></a>

```json
{
  "jobID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobID|object|true|none|none|

<h2 id="tocS_DeleteLaunchConfigurationTemplateRequest">DeleteLaunchConfigurationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelaunchconfigurationtemplaterequest"></a>
<a id="schema_DeleteLaunchConfigurationTemplateRequest"></a>
<a id="tocSdeletelaunchconfigurationtemplaterequest"></a>
<a id="tocsdeletelaunchconfigurationtemplaterequest"></a>

```json
{
  "launchConfigurationTemplateID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchConfigurationTemplateID|object|true|none|none|

<h2 id="tocS_DeleteReplicationConfigurationTemplateRequest">DeleteReplicationConfigurationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationconfigurationtemplaterequest"></a>
<a id="schema_DeleteReplicationConfigurationTemplateRequest"></a>
<a id="tocSdeletereplicationconfigurationtemplaterequest"></a>
<a id="tocsdeletereplicationconfigurationtemplaterequest"></a>

```json
{
  "replicationConfigurationTemplateID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationConfigurationTemplateID|object|true|none|none|

<h2 id="tocS_DeleteSourceServerRequest">DeleteSourceServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesourceserverrequest"></a>
<a id="schema_DeleteSourceServerRequest"></a>
<a id="tocSdeletesourceserverrequest"></a>
<a id="tocsdeletesourceserverrequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_VcenterClientID">VcenterClientID</h2>
<!-- backwards compatibility -->
<a id="schemavcenterclientid"></a>
<a id="schema_VcenterClientID"></a>
<a id="tocSvcenterclientid"></a>
<a id="tocsvcenterclientid"></a>

```json
"stringstringstringstr"
```

<h2 id="tocS_DeleteVcenterClientRequest">DeleteVcenterClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevcenterclientrequest"></a>
<a id="schema_DeleteVcenterClientRequest"></a>
<a id="tocSdeletevcenterclientrequest"></a>
<a id="tocsdeletevcenterclientrequest"></a>

```json
{
  "vcenterClientID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vcenterClientID|object|true|none|none|

<h2 id="tocS_DeleteWaveRequest">DeleteWaveRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewaverequest"></a>
<a id="schema_DeleteWaveRequest"></a>
<a id="tocSdeletewaverequest"></a>
<a id="tocsdeletewaverequest"></a>

```json
{
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|waveID|object|true|none|none|

<h2 id="tocS_MaxResultsType">MaxResultsType</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultstype"></a>
<a id="schema_MaxResultsType"></a>
<a id="tocSmaxresultstype"></a>
<a id="tocsmaxresultstype"></a>

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

<h2 id="tocS_DescribeJobLogItemsRequest">DescribeJobLogItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejoblogitemsrequest"></a>
<a id="schema_DescribeJobLogItemsRequest"></a>
<a id="tocSdescribejoblogitemsrequest"></a>
<a id="tocsdescribejoblogitemsrequest"></a>

```json
{
  "jobID": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobID|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_JobLogs">JobLogs</h2>
<!-- backwards compatibility -->
<a id="schemajoblogs"></a>
<a id="schema_JobLogs"></a>
<a id="tocSjoblogs"></a>
<a id="tocsjoblogs"></a>

```json
[
  {
    "event": {},
    "eventData": {
      "conversionServerID": {},
      "rawError": {},
      "sourceServerID": {},
      "targetInstanceID": {}
    },
    "logDateTime": {}
  }
]
```

<h2 id="tocS_DescribeJobsRequestFilters">DescribeJobsRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobsrequestfilters"></a>
<a id="schema_DescribeJobsRequestFilters"></a>
<a id="tocSdescribejobsrequestfilters"></a>
<a id="tocsdescribejobsrequestfilters"></a>

```json
{
  "fromDate": {},
  "jobIDs": {},
  "toDate": {}
}
```

Request to describe Job log filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|object|false|none|none|
|jobIDs|object|false|none|none|
|toDate|object|false|none|none|

<h2 id="tocS_DescribeJobsRequest">DescribeJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobsrequest"></a>
<a id="schema_DescribeJobsRequest"></a>
<a id="tocSdescribejobsrequest"></a>
<a id="tocsdescribejobsrequest"></a>

```json
{
  "filters": {
    "fromDate": {},
    "jobIDs": {},
    "toDate": {}
  },
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

<h2 id="tocS_JobsList">JobsList</h2>
<!-- backwards compatibility -->
<a id="schemajobslist"></a>
<a id="schema_JobsList"></a>
<a id="tocSjobslist"></a>
<a id="tocsjobslist"></a>

```json
[
  {
    "arn": {},
    "creationDateTime": {},
    "endDateTime": {},
    "initiatedBy": {},
    "jobID": {},
    "participatingServers": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
]
```

<h2 id="tocS_LaunchConfigurationTemplateIDs">LaunchConfigurationTemplateIDs</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationtemplateids"></a>
<a id="schema_LaunchConfigurationTemplateIDs"></a>
<a id="tocSlaunchconfigurationtemplateids"></a>
<a id="tocslaunchconfigurationtemplateids"></a>

```json
[
  "stringstringstringstr"
]
```

<h2 id="tocS_DescribeLaunchConfigurationTemplatesRequest">DescribeLaunchConfigurationTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelaunchconfigurationtemplatesrequest"></a>
<a id="schema_DescribeLaunchConfigurationTemplatesRequest"></a>
<a id="tocSdescribelaunchconfigurationtemplatesrequest"></a>
<a id="tocsdescribelaunchconfigurationtemplatesrequest"></a>

```json
{
  "launchConfigurationTemplateIDs": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchConfigurationTemplateIDs|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_LaunchConfigurationTemplates">LaunchConfigurationTemplates</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationtemplates"></a>
<a id="schema_LaunchConfigurationTemplates"></a>
<a id="tocSlaunchconfigurationtemplates"></a>
<a id="tocslaunchconfigurationtemplates"></a>

```json
[
  {
    "arn": {},
    "associatePublicIpAddress": {},
    "bootMode": {},
    "copyPrivateIp": {},
    "copyTags": {},
    "ec2LaunchTemplateID": {},
    "enableMapAutoTagging": {},
    "largeVolumeConf": {
      "iops": {},
      "throughput": {},
      "volumeType": {}
    },
    "launchConfigurationTemplateID": {},
    "launchDisposition": {},
    "licensing": {
      "osByol": {}
    },
    "mapAutoTaggingMpeID": {},
    "postLaunchActions": {
      "cloudWatchLogGroupName": {},
      "deployment": {},
      "s3LogBucket": {},
      "s3OutputKeyPrefix": {},
      "ssmDocuments": {}
    },
    "smallVolumeConf": {
      "iops": {},
      "throughput": {},
      "volumeType": {}
    },
    "smallVolumeMaxSize": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "targetInstanceTypeRightSizingMethod": {}
  }
]
```

<h2 id="tocS_ReplicationConfigurationTemplateIDs">ReplicationConfigurationTemplateIDs</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationtemplateids"></a>
<a id="schema_ReplicationConfigurationTemplateIDs"></a>
<a id="tocSreplicationconfigurationtemplateids"></a>
<a id="tocsreplicationconfigurationtemplateids"></a>

```json
[
  "stringstringstringstr"
]
```

<h2 id="tocS_DescribeReplicationConfigurationTemplatesRequest">DescribeReplicationConfigurationTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationconfigurationtemplatesrequest"></a>
<a id="schema_DescribeReplicationConfigurationTemplatesRequest"></a>
<a id="tocSdescribereplicationconfigurationtemplatesrequest"></a>
<a id="tocsdescribereplicationconfigurationtemplatesrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {},
  "replicationConfigurationTemplateIDs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|replicationConfigurationTemplateIDs|object|false|none|none|

<h2 id="tocS_ReplicationConfigurationTemplates">ReplicationConfigurationTemplates</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationtemplates"></a>
<a id="schema_ReplicationConfigurationTemplates"></a>
<a id="tocSreplicationconfigurationtemplates"></a>
<a id="tocsreplicationconfigurationtemplates"></a>

```json
[
  {
    "arn": {},
    "associateDefaultSecurityGroup": {},
    "bandwidthThrottling": {},
    "createPublicIP": {},
    "dataPlaneRouting": {},
    "defaultLargeStagingDiskType": {},
    "ebsEncryption": {},
    "ebsEncryptionKeyArn": {},
    "replicationConfigurationTemplateID": {},
    "replicationServerInstanceType": {},
    "replicationServersSecurityGroupsIDs": {},
    "stagingAreaSubnetId": {},
    "stagingAreaTags": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "useDedicatedReplicationServer": {}
  }
]
```

<h2 id="tocS_DescribeSourceServersRequestFilters">DescribeSourceServersRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schemadescribesourceserversrequestfilters"></a>
<a id="schema_DescribeSourceServersRequestFilters"></a>
<a id="tocSdescribesourceserversrequestfilters"></a>
<a id="tocsdescribesourceserversrequestfilters"></a>

```json
{
  "applicationIDs": {},
  "isArchived": {},
  "lifeCycleStates": {},
  "replicationTypes": {},
  "sourceServerIDs": {}
}
```

Request to filter Source Servers list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationIDs|object|false|none|none|
|isArchived|object|false|none|none|
|lifeCycleStates|object|false|none|none|
|replicationTypes|object|false|none|none|
|sourceServerIDs|object|false|none|none|

<h2 id="tocS_DescribeSourceServersRequest">DescribeSourceServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesourceserversrequest"></a>
<a id="schema_DescribeSourceServersRequest"></a>
<a id="tocSdescribesourceserversrequest"></a>
<a id="tocsdescribesourceserversrequest"></a>

```json
{
  "filters": {
    "applicationIDs": {},
    "isArchived": {},
    "lifeCycleStates": {},
    "replicationTypes": {},
    "sourceServerIDs": {}
  },
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

<h2 id="tocS_SourceServersList">SourceServersList</h2>
<!-- backwards compatibility -->
<a id="schemasourceserverslist"></a>
<a id="schema_SourceServersList"></a>
<a id="tocSsourceserverslist"></a>
<a id="tocssourceserverslist"></a>

```json
[
  {
    "applicationID": {},
    "arn": {},
    "dataReplicationInfo": {
      "dataReplicationError": {
        "error": {},
        "rawError": {}
      },
      "dataReplicationInitiation": {
        "nextAttemptDateTime": {},
        "startDateTime": {},
        "steps": {}
      },
      "dataReplicationState": {},
      "etaDateTime": {},
      "lagDuration": {},
      "lastSnapshotDateTime": {},
      "replicatedDisks": {}
    },
    "fqdnForActionFramework": {},
    "isArchived": {},
    "launchedInstance": {
      "ec2InstanceID": {},
      "firstBoot": {},
      "jobID": {}
    },
    "lifeCycle": {
      "addedToServiceDateTime": {},
      "elapsedReplicationDuration": {},
      "firstByteDateTime": {},
      "lastCutover": {
        "finalized": {
          "apiCallDateTime": {}
        },
        "initiated": {
          "apiCallDateTime": {},
          "jobID": {}
        },
        "reverted": {
          "apiCallDateTime": {}
        }
      },
      "lastSeenByServiceDateTime": {},
      "lastTest": {
        "finalized": {
          "apiCallDateTime": {}
        },
        "initiated": {
          "apiCallDateTime": {},
          "jobID": {}
        },
        "reverted": {
          "apiCallDateTime": {}
        }
      },
      "state": {}
    },
    "replicationType": {},
    "sourceProperties": {
      "cpus": {},
      "disks": {},
      "identificationHints": {
        "awsInstanceID": {},
        "fqdn": {},
        "hostname": {},
        "vmPath": {},
        "vmWareUuid": {}
      },
      "lastUpdatedDateTime": {},
      "networkInterfaces": {},
      "os": {
        "fullString": {}
      },
      "ramBytes": {},
      "recommendedInstanceType": {}
    },
    "sourceServerID": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "userProvidedID": {},
    "vcenterClientID": {}
  }
]
```

<h2 id="tocS_DescribeVcenterClientsRequest">DescribeVcenterClientsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevcenterclientsrequest"></a>
<a id="schema_DescribeVcenterClientsRequest"></a>
<a id="tocSdescribevcenterclientsrequest"></a>
<a id="tocsdescribevcenterclientsrequest"></a>

```json
{}
```

<h2 id="tocS_VcenterClientList">VcenterClientList</h2>
<!-- backwards compatibility -->
<a id="schemavcenterclientlist"></a>
<a id="schema_VcenterClientList"></a>
<a id="tocSvcenterclientlist"></a>
<a id="tocsvcenterclientlist"></a>

```json
[
  {
    "arn": {},
    "datacenterName": {},
    "hostname": {},
    "lastSeenDatetime": {},
    "sourceServerTags": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "vcenterClientID": {},
    "vcenterUUID": {}
  }
]
```

<h2 id="tocS_DisassociateApplicationsRequest">DisassociateApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapplicationsrequest"></a>
<a id="schema_DisassociateApplicationsRequest"></a>
<a id="tocSdisassociateapplicationsrequest"></a>
<a id="tocsdisassociateapplicationsrequest"></a>

```json
{
  "applicationIDs": {},
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationIDs|object|true|none|none|
|waveID|object|true|none|none|

<h2 id="tocS_DisassociateSourceServersRequestSourceServerIDs">DisassociateSourceServersRequestSourceServerIDs</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesourceserversrequestsourceserverids"></a>
<a id="schema_DisassociateSourceServersRequestSourceServerIDs"></a>
<a id="tocSdisassociatesourceserversrequestsourceserverids"></a>
<a id="tocsdisassociatesourceserversrequestsourceserverids"></a>

```json
[
  "stringstringstrings"
]
```

<h2 id="tocS_DisassociateSourceServersRequest">DisassociateSourceServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesourceserversrequest"></a>
<a id="schema_DisassociateSourceServersRequest"></a>
<a id="tocSdisassociatesourceserversrequest"></a>
<a id="tocsdisassociatesourceserversrequest"></a>

```json
{
  "applicationID": {},
  "sourceServerIDs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|true|none|none|
|sourceServerIDs|object|true|none|none|

<h2 id="tocS_DisconnectFromServiceRequest">DisconnectFromServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisconnectfromservicerequest"></a>
<a id="schema_DisconnectFromServiceRequest"></a>
<a id="tocSdisconnectfromservicerequest"></a>
<a id="tocsdisconnectfromservicerequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_Disk">Disk</h2>
<!-- backwards compatibility -->
<a id="schemadisk"></a>
<a id="schema_Disk"></a>
<a id="tocSdisk"></a>
<a id="tocsdisk"></a>

```json
{
  "bytes": {},
  "deviceName": {}
}
```

The disk identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes|object|false|none|none|
|deviceName|object|false|none|none|

<h2 id="tocS_Disks">Disks</h2>
<!-- backwards compatibility -->
<a id="schemadisks"></a>
<a id="schema_Disks"></a>
<a id="tocSdisks"></a>
<a id="tocsdisks"></a>

```json
[
  {
    "bytes": {},
    "deviceName": {}
  }
]
```

<h2 id="tocS_DocumentVersion">DocumentVersion</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversion"></a>
<a id="schema_DocumentVersion"></a>
<a id="tocSdocumentversion"></a>
<a id="tocsdocumentversion"></a>

```json
"string"
```

<h2 id="tocS_EC2InstanceID">EC2InstanceID</h2>
<!-- backwards compatibility -->
<a id="schemaec2instanceid"></a>
<a id="schema_EC2InstanceID"></a>
<a id="tocSec2instanceid"></a>
<a id="tocsec2instanceid"></a>

```json
"string"
```

<h2 id="tocS_EC2LaunchConfigurationTemplateID">EC2LaunchConfigurationTemplateID</h2>
<!-- backwards compatibility -->
<a id="schemaec2launchconfigurationtemplateid"></a>
<a id="schema_EC2LaunchConfigurationTemplateID"></a>
<a id="tocSec2launchconfigurationtemplateid"></a>
<a id="tocsec2launchconfigurationtemplateid"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ExportErrorData">ExportErrorData</h2>
<!-- backwards compatibility -->
<a id="schemaexporterrordata"></a>
<a id="schema_ExportErrorData"></a>
<a id="tocSexporterrordata"></a>
<a id="tocsexporterrordata"></a>

```json
{
  "rawError": {}
}
```

Export errors data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawError|object|false|none|none|

<h2 id="tocS_ExportTaskError">ExportTaskError</h2>
<!-- backwards compatibility -->
<a id="schemaexporttaskerror"></a>
<a id="schema_ExportTaskError"></a>
<a id="tocSexporttaskerror"></a>
<a id="tocsexporttaskerror"></a>

```json
{
  "errorData": {
    "rawError": {}
  },
  "errorDateTime": {}
}
```

Export task error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorData|object|false|none|none|
|errorDateTime|object|false|none|none|

<h2 id="tocS_ExportErrors">ExportErrors</h2>
<!-- backwards compatibility -->
<a id="schemaexporterrors"></a>
<a id="schema_ExportErrors"></a>
<a id="tocSexporterrors"></a>
<a id="tocsexporterrors"></a>

```json
[
  {
    "errorData": {
      "rawError": {}
    },
    "errorDateTime": {}
  }
]
```

<h2 id="tocS_ExportID">ExportID</h2>
<!-- backwards compatibility -->
<a id="schemaexportid"></a>
<a id="schema_ExportID"></a>
<a id="tocSexportid"></a>
<a id="tocsexportid"></a>

```json
"stringstringstringstring"
```

<h2 id="tocS_ExportStatus">ExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatus"></a>
<a id="schema_ExportStatus"></a>
<a id="tocSexportstatus"></a>
<a id="tocsexportstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_ExportTaskSummary">ExportTaskSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexporttasksummary"></a>
<a id="schema_ExportTaskSummary"></a>
<a id="tocSexporttasksummary"></a>
<a id="tocsexporttasksummary"></a>

```json
{
  "applicationsCount": {},
  "serversCount": {},
  "wavesCount": {}
}
```

Export task summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationsCount|object|false|none|none|
|serversCount|object|false|none|none|
|wavesCount|object|false|none|none|

<h2 id="tocS_ExportTask">ExportTask</h2>
<!-- backwards compatibility -->
<a id="schemaexporttask"></a>
<a id="schema_ExportTask"></a>
<a id="tocSexporttask"></a>
<a id="tocsexporttask"></a>

```json
{
  "creationDateTime": {},
  "endDateTime": {},
  "exportID": {},
  "progressPercentage": {},
  "s3Bucket": {},
  "s3BucketOwner": {},
  "s3Key": {},
  "status": {},
  "summary": {
    "applicationsCount": {},
    "serversCount": {},
    "wavesCount": {}
  }
}
```

Export task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDateTime|object|false|none|none|
|endDateTime|object|false|none|none|
|exportID|object|false|none|none|
|progressPercentage|object|false|none|none|
|s3Bucket|object|false|none|none|
|s3BucketOwner|object|false|none|none|
|s3Key|object|false|none|none|
|status|object|false|none|none|
|summary|object|false|none|none|

<h2 id="tocS_ExportsList">ExportsList</h2>
<!-- backwards compatibility -->
<a id="schemaexportslist"></a>
<a id="schema_ExportsList"></a>
<a id="tocSexportslist"></a>
<a id="tocsexportslist"></a>

```json
[
  {
    "creationDateTime": {},
    "endDateTime": {},
    "exportID": {},
    "progressPercentage": {},
    "s3Bucket": {},
    "s3BucketOwner": {},
    "s3Key": {},
    "status": {},
    "summary": {
      "applicationsCount": {},
      "serversCount": {},
      "wavesCount": {}
    }
  }
]
```

<h2 id="tocS_FinalizeCutoverRequest">FinalizeCutoverRequest</h2>
<!-- backwards compatibility -->
<a id="schemafinalizecutoverrequest"></a>
<a id="schema_FinalizeCutoverRequest"></a>
<a id="tocSfinalizecutoverrequest"></a>
<a id="tocsfinalizecutoverrequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_FirstBoot">FirstBoot</h2>
<!-- backwards compatibility -->
<a id="schemafirstboot"></a>
<a id="schema_FirstBoot"></a>
<a id="tocSfirstboot"></a>
<a id="tocsfirstboot"></a>

```json
"WAITING"
```

<h2 id="tocS_GetLaunchConfigurationRequest">GetLaunchConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchconfigurationrequest"></a>
<a id="schema_GetLaunchConfigurationRequest"></a>
<a id="tocSgetlaunchconfigurationrequest"></a>
<a id="tocsgetlaunchconfigurationrequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_GetReplicationConfigurationRequest">GetReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreplicationconfigurationrequest"></a>
<a id="schema_GetReplicationConfigurationRequest"></a>
<a id="tocSgetreplicationconfigurationrequest"></a>
<a id="tocsgetreplicationconfigurationrequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_IPsList">IPsList</h2>
<!-- backwards compatibility -->
<a id="schemaipslist"></a>
<a id="schema_IPsList"></a>
<a id="tocSipslist"></a>
<a id="tocsipslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IdentificationHints">IdentificationHints</h2>
<!-- backwards compatibility -->
<a id="schemaidentificationhints"></a>
<a id="schema_IdentificationHints"></a>
<a id="tocSidentificationhints"></a>
<a id="tocsidentificationhints"></a>

```json
{
  "awsInstanceID": {},
  "fqdn": {},
  "hostname": {},
  "vmPath": {},
  "vmWareUuid": {}
}
```

Identification hints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsInstanceID|object|false|none|none|
|fqdn|object|false|none|none|
|hostname|object|false|none|none|
|vmPath|object|false|none|none|
|vmWareUuid|object|false|none|none|

<h2 id="tocS_ImportErrorData">ImportErrorData</h2>
<!-- backwards compatibility -->
<a id="schemaimporterrordata"></a>
<a id="schema_ImportErrorData"></a>
<a id="tocSimporterrordata"></a>
<a id="tocsimporterrordata"></a>

```json
{
  "applicationID": {},
  "ec2LaunchTemplateID": {},
  "rawError": {},
  "rowNumber": {},
  "sourceServerID": {},
  "waveID": {}
}
```

Import error data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|false|none|none|
|ec2LaunchTemplateID|object|false|none|none|
|rawError|object|false|none|none|
|rowNumber|object|false|none|none|
|sourceServerID|object|false|none|none|
|waveID|object|false|none|none|

<h2 id="tocS_ImportErrorType">ImportErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaimporterrortype"></a>
<a id="schema_ImportErrorType"></a>
<a id="tocSimporterrortype"></a>
<a id="tocsimporterrortype"></a>

```json
"VALIDATION_ERROR"
```

<h2 id="tocS_ImportTaskError">ImportTaskError</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskerror"></a>
<a id="schema_ImportTaskError"></a>
<a id="tocSimporttaskerror"></a>
<a id="tocsimporttaskerror"></a>

```json
{
  "errorData": {
    "applicationID": {},
    "ec2LaunchTemplateID": {},
    "rawError": {},
    "rowNumber": {},
    "sourceServerID": {},
    "waveID": {}
  },
  "errorDateTime": {},
  "errorType": {}
}
```

Import task error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorData|object|false|none|none|
|errorDateTime|object|false|none|none|
|errorType|object|false|none|none|

<h2 id="tocS_ImportErrors">ImportErrors</h2>
<!-- backwards compatibility -->
<a id="schemaimporterrors"></a>
<a id="schema_ImportErrors"></a>
<a id="tocSimporterrors"></a>
<a id="tocsimporterrors"></a>

```json
[
  {
    "errorData": {
      "applicationID": {},
      "ec2LaunchTemplateID": {},
      "rawError": {},
      "rowNumber": {},
      "sourceServerID": {},
      "waveID": {}
    },
    "errorDateTime": {},
    "errorType": {}
  }
]
```

<h2 id="tocS_ImportID">ImportID</h2>
<!-- backwards compatibility -->
<a id="schemaimportid"></a>
<a id="schema_ImportID"></a>
<a id="tocSimportid"></a>
<a id="tocsimportid"></a>

```json
"stringstringstringstring"
```

<h2 id="tocS_ImportTask">ImportTask</h2>
<!-- backwards compatibility -->
<a id="schemaimporttask"></a>
<a id="schema_ImportTask"></a>
<a id="tocSimporttask"></a>
<a id="tocsimporttask"></a>

```json
{
  "creationDateTime": {},
  "endDateTime": {},
  "importID": {},
  "progressPercentage": {},
  "s3BucketSource": {
    "s3Bucket": {},
    "s3BucketOwner": {},
    "s3Key": {}
  },
  "status": {},
  "summary": {
    "applications": {
      "createdCount": {},
      "modifiedCount": {}
    },
    "servers": {
      "createdCount": {},
      "modifiedCount": {}
    },
    "waves": {
      "createdCount": {},
      "modifiedCount": {}
    }
  }
}
```

Import task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDateTime|object|false|none|none|
|endDateTime|object|false|none|none|
|importID|object|false|none|none|
|progressPercentage|object|false|none|none|
|s3BucketSource|object|false|none|none|
|status|object|false|none|none|
|summary|object|false|none|none|

<h2 id="tocS_ImportList">ImportList</h2>
<!-- backwards compatibility -->
<a id="schemaimportlist"></a>
<a id="schema_ImportList"></a>
<a id="tocSimportlist"></a>
<a id="tocsimportlist"></a>

```json
[
  {
    "creationDateTime": {},
    "endDateTime": {},
    "importID": {},
    "progressPercentage": {},
    "s3BucketSource": {
      "s3Bucket": {},
      "s3BucketOwner": {},
      "s3Key": {}
    },
    "status": {},
    "summary": {
      "applications": {
        "createdCount": {},
        "modifiedCount": {}
      },
      "servers": {
        "createdCount": {},
        "modifiedCount": {}
      },
      "waves": {
        "createdCount": {},
        "modifiedCount": {}
      }
    }
  }
]
```

<h2 id="tocS_ImportStatus">ImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatus"></a>
<a id="schema_ImportStatus"></a>
<a id="tocSimportstatus"></a>
<a id="tocsimportstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_S3BucketSource">S3BucketSource</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketsource"></a>
<a id="schema_S3BucketSource"></a>
<a id="tocSs3bucketsource"></a>
<a id="tocss3bucketsource"></a>

```json
{
  "s3Bucket": {},
  "s3BucketOwner": {},
  "s3Key": {}
}
```

S3 bucket source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Bucket|object|true|none|none|
|s3BucketOwner|object|false|none|none|
|s3Key|object|true|none|none|

<h2 id="tocS_ImportTaskSummary">ImportTaskSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimporttasksummary"></a>
<a id="schema_ImportTaskSummary"></a>
<a id="tocSimporttasksummary"></a>
<a id="tocsimporttasksummary"></a>

```json
{
  "applications": {
    "createdCount": {},
    "modifiedCount": {}
  },
  "servers": {
    "createdCount": {},
    "modifiedCount": {}
  },
  "waves": {
    "createdCount": {},
    "modifiedCount": {}
  }
}
```

Import task summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|object|false|none|none|
|servers|object|false|none|none|
|waves|object|false|none|none|

<h2 id="tocS_ImportTaskSummaryApplications">ImportTaskSummaryApplications</h2>
<!-- backwards compatibility -->
<a id="schemaimporttasksummaryapplications"></a>
<a id="schema_ImportTaskSummaryApplications"></a>
<a id="tocSimporttasksummaryapplications"></a>
<a id="tocsimporttasksummaryapplications"></a>

```json
{
  "createdCount": {},
  "modifiedCount": {}
}
```

Import task summary applications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdCount|object|false|none|none|
|modifiedCount|object|false|none|none|

<h2 id="tocS_ImportTaskSummaryServers">ImportTaskSummaryServers</h2>
<!-- backwards compatibility -->
<a id="schemaimporttasksummaryservers"></a>
<a id="schema_ImportTaskSummaryServers"></a>
<a id="tocSimporttasksummaryservers"></a>
<a id="tocsimporttasksummaryservers"></a>

```json
{
  "createdCount": {},
  "modifiedCount": {}
}
```

Import task summary servers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdCount|object|false|none|none|
|modifiedCount|object|false|none|none|

<h2 id="tocS_ImportTaskSummaryWaves">ImportTaskSummaryWaves</h2>
<!-- backwards compatibility -->
<a id="schemaimporttasksummarywaves"></a>
<a id="schema_ImportTaskSummaryWaves"></a>
<a id="tocSimporttasksummarywaves"></a>
<a id="tocsimporttasksummarywaves"></a>

```json
{
  "createdCount": {},
  "modifiedCount": {}
}
```

Import task summery waves.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdCount|object|false|none|none|
|modifiedCount|object|false|none|none|

<h2 id="tocS_InitializeServiceRequest">InitializeServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemainitializeservicerequest"></a>
<a id="schema_InitializeServiceRequest"></a>
<a id="tocSinitializeservicerequest"></a>
<a id="tocsinitializeservicerequest"></a>

```json
{}
```

<h2 id="tocS_InitiatedBy">InitiatedBy</h2>
<!-- backwards compatibility -->
<a id="schemainitiatedby"></a>
<a id="schema_InitiatedBy"></a>
<a id="tocSinitiatedby"></a>
<a id="tocsinitiatedby"></a>

```json
"START_TEST"
```

<h2 id="tocS_JmesPathString">JmesPathString</h2>
<!-- backwards compatibility -->
<a id="schemajmespathstring"></a>
<a id="schema_JmesPathString"></a>
<a id="tocSjmespathstring"></a>
<a id="tocsjmespathstring"></a>

```json
"string"
```

<h2 id="tocS_ParticipatingServers">ParticipatingServers</h2>
<!-- backwards compatibility -->
<a id="schemaparticipatingservers"></a>
<a id="schema_ParticipatingServers"></a>
<a id="tocSparticipatingservers"></a>
<a id="tocsparticipatingservers"></a>

```json
[
  {
    "launchStatus": {},
    "launchedEc2InstanceID": {},
    "postLaunchActionsStatus": {
      "postLaunchActionsLaunchStatusList": {},
      "ssmAgentDiscoveryDatetime": {}
    },
    "sourceServerID": {}
  }
]
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"LAUNCH"
```

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "arn": {},
  "creationDateTime": {},
  "endDateTime": {},
  "initiatedBy": {},
  "jobID": {},
  "participatingServers": {},
  "status": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": {}
}
```

Job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|creationDateTime|object|false|none|none|
|endDateTime|object|false|none|none|
|initiatedBy|object|false|none|none|
|jobID|object|true|none|none|
|participatingServers|object|false|none|none|
|status|object|false|none|none|
|tags|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_JobLogEvent">JobLogEvent</h2>
<!-- backwards compatibility -->
<a id="schemajoblogevent"></a>
<a id="schema_JobLogEvent"></a>
<a id="tocSjoblogevent"></a>
<a id="tocsjoblogevent"></a>

```json
"JOB_START"
```

<h2 id="tocS_JobLogEventData">JobLogEventData</h2>
<!-- backwards compatibility -->
<a id="schemajoblogeventdata"></a>
<a id="schema_JobLogEventData"></a>
<a id="tocSjoblogeventdata"></a>
<a id="tocsjoblogeventdata"></a>

```json
{
  "conversionServerID": {},
  "rawError": {},
  "sourceServerID": {},
  "targetInstanceID": {}
}
```

Job log data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionServerID|object|false|none|none|
|rawError|object|false|none|none|
|sourceServerID|object|false|none|none|
|targetInstanceID|object|false|none|none|

<h2 id="tocS_JobLog">JobLog</h2>
<!-- backwards compatibility -->
<a id="schemajoblog"></a>
<a id="schema_JobLog"></a>
<a id="tocSjoblog"></a>
<a id="tocsjoblog"></a>

```json
{
  "event": {},
  "eventData": {
    "conversionServerID": {},
    "rawError": {},
    "sourceServerID": {},
    "targetInstanceID": {}
  },
  "logDateTime": {}
}
```

Job log.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|false|none|none|
|eventData|object|false|none|none|
|logDateTime|object|false|none|none|

<h2 id="tocS_PostLaunchActionExecutionStatus">PostLaunchActionExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemapostlaunchactionexecutionstatus"></a>
<a id="schema_PostLaunchActionExecutionStatus"></a>
<a id="tocSpostlaunchactionexecutionstatus"></a>
<a id="tocspostlaunchactionexecutionstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_SsmDocument">SsmDocument</h2>
<!-- backwards compatibility -->
<a id="schemassmdocument"></a>
<a id="schema_SsmDocument"></a>
<a id="tocSssmdocument"></a>
<a id="tocsssmdocument"></a>

```json
{
  "actionName": {},
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "mustSucceedForCutover": {},
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "ssmDocumentName": {},
  "timeoutSeconds": {}
}
```

AWS Systems Manager Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionName|object|true|none|none|
|externalParameters|object|false|none|none|
|mustSucceedForCutover|object|false|none|none|
|parameters|object|false|none|none|
|ssmDocumentName|object|true|none|none|
|timeoutSeconds|object|false|none|none|

<h2 id="tocS_SsmDocumentType">SsmDocumentType</h2>
<!-- backwards compatibility -->
<a id="schemassmdocumenttype"></a>
<a id="schema_SsmDocumentType"></a>
<a id="tocSssmdocumenttype"></a>
<a id="tocsssmdocumenttype"></a>

```json
"AUTOMATION"
```

<h2 id="tocS_JobPostLaunchActionsLaunchStatus">JobPostLaunchActionsLaunchStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobpostlaunchactionslaunchstatus"></a>
<a id="schema_JobPostLaunchActionsLaunchStatus"></a>
<a id="tocSjobpostlaunchactionslaunchstatus"></a>
<a id="tocsjobpostlaunchactionslaunchstatus"></a>

```json
{
  "executionID": {},
  "executionStatus": {},
  "failureReason": {},
  "ssmDocument": {
    "actionName": {},
    "externalParameters": {
      "property1": {
        "dynamicPath": {}
      },
      "property2": {
        "dynamicPath": {}
      }
    },
    "mustSucceedForCutover": {},
    "parameters": {
      "property1": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ],
      "property2": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ]
    },
    "ssmDocumentName": {},
    "timeoutSeconds": {}
  },
  "ssmDocumentType": {}
}
```

Launch Status of the Job Post Launch Actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionID|object|false|none|none|
|executionStatus|object|false|none|none|
|failureReason|object|false|none|none|
|ssmDocument|object|false|none|none|
|ssmDocumentType|object|false|none|none|

<h2 id="tocS_SmallBoundedString">SmallBoundedString</h2>
<!-- backwards compatibility -->
<a id="schemasmallboundedstring"></a>
<a id="schema_SmallBoundedString"></a>
<a id="tocSsmallboundedstring"></a>
<a id="tocssmallboundedstring"></a>

```json
"string"
```

<h2 id="tocS_LaunchStatus">LaunchStatus</h2>
<!-- backwards compatibility -->
<a id="schemalaunchstatus"></a>
<a id="schema_LaunchStatus"></a>
<a id="tocSlaunchstatus"></a>
<a id="tocslaunchstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_LaunchedInstance">LaunchedInstance</h2>
<!-- backwards compatibility -->
<a id="schemalaunchedinstance"></a>
<a id="schema_LaunchedInstance"></a>
<a id="tocSlaunchedinstance"></a>
<a id="tocslaunchedinstance"></a>

```json
{
  "ec2InstanceID": {},
  "firstBoot": {},
  "jobID": {}
}
```

Launched instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ec2InstanceID|object|false|none|none|
|firstBoot|object|false|none|none|
|jobID|object|false|none|none|

<h2 id="tocS_LifeCycleLastCutover">LifeCycleLastCutover</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelastcutover"></a>
<a id="schema_LifeCycleLastCutover"></a>
<a id="tocSlifecyclelastcutover"></a>
<a id="tocslifecyclelastcutover"></a>

```json
{
  "finalized": {
    "apiCallDateTime": {}
  },
  "initiated": {
    "apiCallDateTime": {},
    "jobID": {}
  },
  "reverted": {
    "apiCallDateTime": {}
  }
}
```

Lifecycle last Cutover .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finalized|object|false|none|none|
|initiated|object|false|none|none|
|reverted|object|false|none|none|

<h2 id="tocS_LifeCycleLastTest">LifeCycleLastTest</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelasttest"></a>
<a id="schema_LifeCycleLastTest"></a>
<a id="tocSlifecyclelasttest"></a>
<a id="tocslifecyclelasttest"></a>

```json
{
  "finalized": {
    "apiCallDateTime": {}
  },
  "initiated": {
    "apiCallDateTime": {},
    "jobID": {}
  },
  "reverted": {
    "apiCallDateTime": {}
  }
}
```

Lifecycle last Test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finalized|object|false|none|none|
|initiated|object|false|none|none|
|reverted|object|false|none|none|

<h2 id="tocS_LifeCycleState">LifeCycleState</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclestate"></a>
<a id="schema_LifeCycleState"></a>
<a id="tocSlifecyclestate"></a>
<a id="tocslifecyclestate"></a>

```json
"STOPPED"
```

<h2 id="tocS_LifeCycle">LifeCycle</h2>
<!-- backwards compatibility -->
<a id="schemalifecycle"></a>
<a id="schema_LifeCycle"></a>
<a id="tocSlifecycle"></a>
<a id="tocslifecycle"></a>

```json
{
  "addedToServiceDateTime": {},
  "elapsedReplicationDuration": {},
  "firstByteDateTime": {},
  "lastCutover": {
    "finalized": {
      "apiCallDateTime": {}
    },
    "initiated": {
      "apiCallDateTime": {},
      "jobID": {}
    },
    "reverted": {
      "apiCallDateTime": {}
    }
  },
  "lastSeenByServiceDateTime": {},
  "lastTest": {
    "finalized": {
      "apiCallDateTime": {}
    },
    "initiated": {
      "apiCallDateTime": {},
      "jobID": {}
    },
    "reverted": {
      "apiCallDateTime": {}
    }
  },
  "state": {}
}
```

Lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedToServiceDateTime|object|false|none|none|
|elapsedReplicationDuration|object|false|none|none|
|firstByteDateTime|object|false|none|none|
|lastCutover|object|false|none|none|
|lastSeenByServiceDateTime|object|false|none|none|
|lastTest|object|false|none|none|
|state|object|false|none|none|

<h2 id="tocS_LifeCycleLastCutoverFinalized">LifeCycleLastCutoverFinalized</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelastcutoverfinalized"></a>
<a id="schema_LifeCycleLastCutoverFinalized"></a>
<a id="tocSlifecyclelastcutoverfinalized"></a>
<a id="tocslifecyclelastcutoverfinalized"></a>

```json
{
  "apiCallDateTime": {}
}
```

Lifecycle Cutover finalized

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCallDateTime|object|false|none|none|

<h2 id="tocS_LifeCycleLastCutoverInitiated">LifeCycleLastCutoverInitiated</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelastcutoverinitiated"></a>
<a id="schema_LifeCycleLastCutoverInitiated"></a>
<a id="tocSlifecyclelastcutoverinitiated"></a>
<a id="tocslifecyclelastcutoverinitiated"></a>

```json
{
  "apiCallDateTime": {},
  "jobID": {}
}
```

Lifecycle last Cutover initiated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCallDateTime|object|false|none|none|
|jobID|object|false|none|none|

<h2 id="tocS_LifeCycleLastCutoverReverted">LifeCycleLastCutoverReverted</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelastcutoverreverted"></a>
<a id="schema_LifeCycleLastCutoverReverted"></a>
<a id="tocSlifecyclelastcutoverreverted"></a>
<a id="tocslifecyclelastcutoverreverted"></a>

```json
{
  "apiCallDateTime": {}
}
```

Lifecycle last Cutover reverted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCallDateTime|object|false|none|none|

<h2 id="tocS_LifeCycleLastTestFinalized">LifeCycleLastTestFinalized</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelasttestfinalized"></a>
<a id="schema_LifeCycleLastTestFinalized"></a>
<a id="tocSlifecyclelasttestfinalized"></a>
<a id="tocslifecyclelasttestfinalized"></a>

```json
{
  "apiCallDateTime": {}
}
```

Lifecycle last Test finalized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCallDateTime|object|false|none|none|

<h2 id="tocS_LifeCycleLastTestInitiated">LifeCycleLastTestInitiated</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelasttestinitiated"></a>
<a id="schema_LifeCycleLastTestInitiated"></a>
<a id="tocSlifecyclelasttestinitiated"></a>
<a id="tocslifecyclelasttestinitiated"></a>

```json
{
  "apiCallDateTime": {},
  "jobID": {}
}
```

Lifecycle last Test initiated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCallDateTime|object|false|none|none|
|jobID|object|false|none|none|

<h2 id="tocS_LifeCycleLastTestReverted">LifeCycleLastTestReverted</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclelasttestreverted"></a>
<a id="schema_LifeCycleLastTestReverted"></a>
<a id="tocSlifecyclelasttestreverted"></a>
<a id="tocslifecyclelasttestreverted"></a>

```json
{
  "apiCallDateTime": {}
}
```

Lifecycle last Test reverted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCallDateTime|object|false|none|none|

<h2 id="tocS_ListApplicationsRequestFilters">ListApplicationsRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequestfilters"></a>
<a id="schema_ListApplicationsRequestFilters"></a>
<a id="tocSlistapplicationsrequestfilters"></a>
<a id="tocslistapplicationsrequestfilters"></a>

```json
{
  "applicationIDs": {},
  "isArchived": {},
  "waveIDs": {}
}
```

Applications list filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationIDs|object|false|none|none|
|isArchived|object|false|none|none|
|waveIDs|object|false|none|none|

<h2 id="tocS_ListApplicationsRequest">ListApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequest"></a>
<a id="schema_ListApplicationsRequest"></a>
<a id="tocSlistapplicationsrequest"></a>
<a id="tocslistapplicationsrequest"></a>

```json
{
  "filters": {
    "applicationIDs": {},
    "isArchived": {},
    "waveIDs": {}
  },
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

<h2 id="tocS_ListExportErrorsRequest">ListExportErrorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexporterrorsrequest"></a>
<a id="schema_ListExportErrorsRequest"></a>
<a id="tocSlistexporterrorsrequest"></a>
<a id="tocslistexporterrorsrequest"></a>

```json
{
  "exportID": {},
  "maxResults": {},
  "nextToken": {}
}
```

List export errors request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportID|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListExportsRequestFilters">ListExportsRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsrequestfilters"></a>
<a id="schema_ListExportsRequestFilters"></a>
<a id="tocSlistexportsrequestfilters"></a>
<a id="tocslistexportsrequestfilters"></a>

```json
{
  "exportIDs": {}
}
```

List exports request filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportIDs|object|false|none|none|

<h2 id="tocS_ListExportsRequest">ListExportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsrequest"></a>
<a id="schema_ListExportsRequest"></a>
<a id="tocSlistexportsrequest"></a>
<a id="tocslistexportsrequest"></a>

```json
{
  "filters": {
    "exportIDs": {}
  },
  "maxResults": {},
  "nextToken": {}
}
```

List export request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[ListExportsRequestFilters](#schemalistexportsrequestfilters)|false|none|List exports request filters.|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImportErrorsRequest">ListImportErrorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimporterrorsrequest"></a>
<a id="schema_ListImportErrorsRequest"></a>
<a id="tocSlistimporterrorsrequest"></a>
<a id="tocslistimporterrorsrequest"></a>

```json
{
  "importID": {},
  "maxResults": {},
  "nextToken": {}
}
```

List import errors request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importID|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImportsRequestFilters">ListImportsRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsrequestfilters"></a>
<a id="schema_ListImportsRequestFilters"></a>
<a id="tocSlistimportsrequestfilters"></a>
<a id="tocslistimportsrequestfilters"></a>

```json
{
  "importIDs": {}
}
```

List imports request filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importIDs|object|false|none|none|

<h2 id="tocS_ListImportsRequest">ListImportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsrequest"></a>
<a id="schema_ListImportsRequest"></a>
<a id="tocSlistimportsrequest"></a>
<a id="tocslistimportsrequest"></a>

```json
{
  "filters": {
    "importIDs": {}
  },
  "maxResults": {},
  "nextToken": {}
}
```

List imports request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SourceServerActionsRequestFilters">SourceServerActionsRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schemasourceserveractionsrequestfilters"></a>
<a id="schema_SourceServerActionsRequestFilters"></a>
<a id="tocSsourceserveractionsrequestfilters"></a>
<a id="tocssourceserveractionsrequestfilters"></a>

```json
{
  "actionIDs": {}
}
```

Source server post migration custom action filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionIDs|object|false|none|none|

<h2 id="tocS_ListSourceServerActionsRequest">ListSourceServerActionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceserveractionsrequest"></a>
<a id="schema_ListSourceServerActionsRequest"></a>
<a id="tocSlistsourceserveractionsrequest"></a>
<a id="tocslistsourceserveractionsrequest"></a>

```json
{
  "filters": {
    "actionIDs": {}
  },
  "maxResults": {},
  "nextToken": {},
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|sourceServerID|object|true|none|none|

<h2 id="tocS_SourceServerActionDocuments">SourceServerActionDocuments</h2>
<!-- backwards compatibility -->
<a id="schemasourceserveractiondocuments"></a>
<a id="schema_SourceServerActionDocuments"></a>
<a id="tocSsourceserveractiondocuments"></a>
<a id="tocssourceserveractiondocuments"></a>

```json
[
  {
    "actionID": {},
    "actionName": {},
    "active": {},
    "category": {},
    "description": {},
    "documentIdentifier": {},
    "documentVersion": {},
    "externalParameters": {
      "property1": {
        "dynamicPath": {}
      },
      "property2": {
        "dynamicPath": {}
      }
    },
    "mustSucceedForCutover": {},
    "order": {},
    "parameters": {
      "property1": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ],
      "property2": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ]
    },
    "timeoutSeconds": {}
  }
]
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

<h2 id="tocS_TemplateActionsRequestFilters">TemplateActionsRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schematemplateactionsrequestfilters"></a>
<a id="schema_TemplateActionsRequestFilters"></a>
<a id="tocStemplateactionsrequestfilters"></a>
<a id="tocstemplateactionsrequestfilters"></a>

```json
{
  "actionIDs": {}
}
```

Template post migration custom action filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionIDs|object|false|none|none|

<h2 id="tocS_ListTemplateActionsRequest">ListTemplateActionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttemplateactionsrequest"></a>
<a id="schema_ListTemplateActionsRequest"></a>
<a id="tocSlisttemplateactionsrequest"></a>
<a id="tocslisttemplateactionsrequest"></a>

```json
{
  "filters": {
    "actionIDs": {}
  },
  "launchConfigurationTemplateID": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|launchConfigurationTemplateID|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_TemplateActionDocuments">TemplateActionDocuments</h2>
<!-- backwards compatibility -->
<a id="schematemplateactiondocuments"></a>
<a id="schema_TemplateActionDocuments"></a>
<a id="tocStemplateactiondocuments"></a>
<a id="tocstemplateactiondocuments"></a>

```json
[
  {
    "actionID": {},
    "actionName": {},
    "active": {},
    "category": {},
    "description": {},
    "documentIdentifier": {},
    "documentVersion": {},
    "externalParameters": {
      "property1": {
        "dynamicPath": {}
      },
      "property2": {
        "dynamicPath": {}
      }
    },
    "mustSucceedForCutover": {},
    "operatingSystem": {},
    "order": {},
    "parameters": {
      "property1": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ],
      "property2": [
        {
          "parameterName": {},
          "parameterType": {}
        }
      ]
    },
    "timeoutSeconds": {}
  }
]
```

<h2 id="tocS_ListWavesRequestFilters">ListWavesRequestFilters</h2>
<!-- backwards compatibility -->
<a id="schemalistwavesrequestfilters"></a>
<a id="schema_ListWavesRequestFilters"></a>
<a id="tocSlistwavesrequestfilters"></a>
<a id="tocslistwavesrequestfilters"></a>

```json
{
  "isArchived": {},
  "waveIDs": {}
}
```

Waves list filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isArchived|object|false|none|none|
|waveIDs|object|false|none|none|

<h2 id="tocS_ListWavesRequest">ListWavesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwavesrequest"></a>
<a id="schema_ListWavesRequest"></a>
<a id="tocSlistwavesrequest"></a>
<a id="tocslistwavesrequest"></a>

```json
{
  "filters": {
    "isArchived": {},
    "waveIDs": {}
  },
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

<h2 id="tocS_WavesList">WavesList</h2>
<!-- backwards compatibility -->
<a id="schemawaveslist"></a>
<a id="schema_WavesList"></a>
<a id="tocSwaveslist"></a>
<a id="tocswaveslist"></a>

```json
[
  {
    "arn": {},
    "creationDateTime": {},
    "description": {},
    "isArchived": {},
    "lastModifiedDateTime": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "waveAggregatedStatus": {
      "healthStatus": {},
      "lastUpdateDateTime": {},
      "progressStatus": {},
      "replicationStartedDateTime": {},
      "totalApplications": {}
    },
    "waveID": {}
  }
]
```

<h2 id="tocS_MarkAsArchivedRequest">MarkAsArchivedRequest</h2>
<!-- backwards compatibility -->
<a id="schemamarkasarchivedrequest"></a>
<a id="schema_MarkAsArchivedRequest"></a>
<a id="tocSmarkasarchivedrequest"></a>
<a id="tocsmarkasarchivedrequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "ips": {},
  "isPrimary": {},
  "macAddress": {}
}
```

Network interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ips|object|false|none|none|
|isPrimary|object|false|none|none|
|macAddress|object|false|none|none|

<h2 id="tocS_NetworkInterfaces">NetworkInterfaces</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaces"></a>
<a id="schema_NetworkInterfaces"></a>
<a id="tocSnetworkinterfaces"></a>
<a id="tocsnetworkinterfaces"></a>

```json
[
  {
    "ips": {},
    "isPrimary": {},
    "macAddress": {}
  }
]
```

<h2 id="tocS_OS">OS</h2>
<!-- backwards compatibility -->
<a id="schemaos"></a>
<a id="schema_OS"></a>
<a id="tocSos"></a>
<a id="tocsos"></a>

```json
{
  "fullString": {}
}
```

Operating System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullString|object|false|none|none|

<h2 id="tocS_OperatingSystemString">OperatingSystemString</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemstring"></a>
<a id="schema_OperatingSystemString"></a>
<a id="tocSoperatingsystemstring"></a>
<a id="tocsoperatingsystemstring"></a>

```json
"string"
```

<h2 id="tocS_OrderType">OrderType</h2>
<!-- backwards compatibility -->
<a id="schemaordertype"></a>
<a id="schema_OrderType"></a>
<a id="tocSordertype"></a>
<a id="tocsordertype"></a>

```json
1001
```

<h2 id="tocS_PostLaunchActionsStatus">PostLaunchActionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemapostlaunchactionsstatus"></a>
<a id="schema_PostLaunchActionsStatus"></a>
<a id="tocSpostlaunchactionsstatus"></a>
<a id="tocspostlaunchactionsstatus"></a>

```json
{
  "postLaunchActionsLaunchStatusList": {},
  "ssmAgentDiscoveryDatetime": {}
}
```

Status of the Post Launch Actions running on the Test or Cutover instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|postLaunchActionsLaunchStatusList|object|false|none|none|
|ssmAgentDiscoveryDatetime|object|false|none|none|

<h2 id="tocS_ParticipatingServer">ParticipatingServer</h2>
<!-- backwards compatibility -->
<a id="schemaparticipatingserver"></a>
<a id="schema_ParticipatingServer"></a>
<a id="tocSparticipatingserver"></a>
<a id="tocsparticipatingserver"></a>

```json
{
  "launchStatus": {},
  "launchedEc2InstanceID": {},
  "postLaunchActionsStatus": {
    "postLaunchActionsLaunchStatusList": {},
    "ssmAgentDiscoveryDatetime": {}
  },
  "sourceServerID": {}
}
```

Server participating in Job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchStatus|object|false|none|none|
|launchedEc2InstanceID|object|false|none|none|
|postLaunchActionsStatus|object|false|none|none|
|sourceServerID|object|true|none|none|

<h2 id="tocS_PostLaunchActionsLaunchStatusList">PostLaunchActionsLaunchStatusList</h2>
<!-- backwards compatibility -->
<a id="schemapostlaunchactionslaunchstatuslist"></a>
<a id="schema_PostLaunchActionsLaunchStatusList"></a>
<a id="tocSpostlaunchactionslaunchstatuslist"></a>
<a id="tocspostlaunchactionslaunchstatuslist"></a>

```json
[
  {
    "executionID": {},
    "executionStatus": {},
    "failureReason": {},
    "ssmDocument": {
      "actionName": {},
      "externalParameters": {
        "property1": {
          "dynamicPath": {}
        },
        "property2": {
          "dynamicPath": {}
        }
      },
      "mustSucceedForCutover": {},
      "parameters": {
        "property1": [
          {
            "parameterName": {},
            "parameterType": {}
          }
        ],
        "property2": [
          {
            "parameterName": {},
            "parameterType": {}
          }
        ]
      },
      "ssmDocumentName": {},
      "timeoutSeconds": {}
    },
    "ssmDocumentType": {}
  }
]
```

<h2 id="tocS_SsmDocumentExternalParameters">SsmDocumentExternalParameters</h2>
<!-- backwards compatibility -->
<a id="schemassmdocumentexternalparameters"></a>
<a id="schema_SsmDocumentExternalParameters"></a>
<a id="tocSssmdocumentexternalparameters"></a>
<a id="tocsssmdocumentexternalparameters"></a>

```json
{
  "property1": {
    "dynamicPath": {}
  },
  "property2": {
    "dynamicPath": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SsmExternalParameter](#schemassmexternalparameter)|false|none|AWS Systems Manager Document external parameter.|

<h2 id="tocS_SsmDocumentParameters">SsmDocumentParameters</h2>
<!-- backwards compatibility -->
<a id="schemassmdocumentparameters"></a>
<a id="schema_SsmDocumentParameters"></a>
<a id="tocSssmdocumentparameters"></a>
<a id="tocsssmdocumentparameters"></a>

```json
{
  "property1": [
    {
      "parameterName": {},
      "parameterType": {}
    }
  ],
  "property2": [
    {
      "parameterName": {},
      "parameterType": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SsmParameterStoreParameters](#schemassmparameterstoreparameters)|false|none|none|

<h2 id="tocS_StrictlyPositiveInteger">StrictlyPositiveInteger</h2>
<!-- backwards compatibility -->
<a id="schemastrictlypositiveinteger"></a>
<a id="schema_StrictlyPositiveInteger"></a>
<a id="tocSstrictlypositiveinteger"></a>
<a id="tocsstrictlypositiveinteger"></a>

```json
1
```

<h2 id="tocS_PutSourceServerActionRequest">PutSourceServerActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsourceserveractionrequest"></a>
<a id="schema_PutSourceServerActionRequest"></a>
<a id="tocSputsourceserveractionrequest"></a>
<a id="tocsputsourceserveractionrequest"></a>

```json
{
  "actionID": {},
  "actionName": {},
  "active": {},
  "category": {},
  "description": {},
  "documentIdentifier": {},
  "documentVersion": {},
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "mustSucceedForCutover": {},
  "order": {},
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "sourceServerID": {},
  "timeoutSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionID|object|true|none|none|
|actionName|object|true|none|none|
|active|object|false|none|none|
|category|object|false|none|none|
|description|object|false|none|none|
|documentIdentifier|object|true|none|none|
|documentVersion|object|false|none|none|
|externalParameters|object|false|none|none|
|mustSucceedForCutover|object|false|none|none|
|order|object|true|none|none|
|parameters|object|false|none|none|
|sourceServerID|object|true|none|none|
|timeoutSeconds|object|false|none|none|

<h2 id="tocS_PutTemplateActionRequest">PutTemplateActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputtemplateactionrequest"></a>
<a id="schema_PutTemplateActionRequest"></a>
<a id="tocSputtemplateactionrequest"></a>
<a id="tocsputtemplateactionrequest"></a>

```json
{
  "actionID": {},
  "actionName": {},
  "active": {},
  "category": {},
  "description": {},
  "documentIdentifier": {},
  "documentVersion": {},
  "externalParameters": {
    "property1": {
      "dynamicPath": {}
    },
    "property2": {
      "dynamicPath": {}
    }
  },
  "launchConfigurationTemplateID": {},
  "mustSucceedForCutover": {},
  "operatingSystem": {},
  "order": {},
  "parameters": {
    "property1": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ],
    "property2": [
      {
        "parameterName": {},
        "parameterType": {}
      }
    ]
  },
  "timeoutSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionID|object|true|none|none|
|actionName|object|true|none|none|
|active|object|false|none|none|
|category|object|false|none|none|
|description|object|false|none|none|
|documentIdentifier|object|true|none|none|
|documentVersion|object|false|none|none|
|externalParameters|object|false|none|none|
|launchConfigurationTemplateID|object|true|none|none|
|mustSucceedForCutover|object|false|none|none|
|operatingSystem|object|false|none|none|
|order|object|true|none|none|
|parameters|object|false|none|none|
|timeoutSeconds|object|false|none|none|

<h2 id="tocS_RemoveSourceServerActionRequest">RemoveSourceServerActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovesourceserveractionrequest"></a>
<a id="schema_RemoveSourceServerActionRequest"></a>
<a id="tocSremovesourceserveractionrequest"></a>
<a id="tocsremovesourceserveractionrequest"></a>

```json
{
  "actionID": {},
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionID|object|true|none|none|
|sourceServerID|object|true|none|none|

<h2 id="tocS_RemoveTemplateActionRequest">RemoveTemplateActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetemplateactionrequest"></a>
<a id="schema_RemoveTemplateActionRequest"></a>
<a id="tocSremovetemplateactionrequest"></a>
<a id="tocsremovetemplateactionrequest"></a>

```json
{
  "actionID": {},
  "launchConfigurationTemplateID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionID|object|true|none|none|
|launchConfigurationTemplateID|object|true|none|none|

<h2 id="tocS_ReplicationConfigurationReplicatedDisks">ReplicationConfigurationReplicatedDisks</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationreplicateddisks"></a>
<a id="schema_ReplicationConfigurationReplicatedDisks"></a>
<a id="tocSreplicationconfigurationreplicateddisks"></a>
<a id="tocsreplicationconfigurationreplicateddisks"></a>

```json
[
  {
    "deviceName": {},
    "iops": {},
    "isBootDisk": {},
    "stagingDiskType": {},
    "throughput": {}
  }
]
```

<h2 id="tocS_ReplicationConfigurationReplicatedDiskStagingDiskType">ReplicationConfigurationReplicatedDiskStagingDiskType</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationreplicateddiskstagingdisktype"></a>
<a id="schema_ReplicationConfigurationReplicatedDiskStagingDiskType"></a>
<a id="tocSreplicationconfigurationreplicateddiskstagingdisktype"></a>
<a id="tocsreplicationconfigurationreplicateddiskstagingdisktype"></a>

```json
"AUTO"
```

<h2 id="tocS_ReplicationType">ReplicationType</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtype"></a>
<a id="schema_ReplicationType"></a>
<a id="tocSreplicationtype"></a>
<a id="tocsreplicationtype"></a>

```json
"AGENT_BASED"
```

<h2 id="tocS_RetryDataReplicationRequest">RetryDataReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaretrydatareplicationrequest"></a>
<a id="schema_RetryDataReplicationRequest"></a>
<a id="tocSretrydatareplicationrequest"></a>
<a id="tocsretrydatareplicationrequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_SourceProperties">SourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemasourceproperties"></a>
<a id="schema_SourceProperties"></a>
<a id="tocSsourceproperties"></a>
<a id="tocssourceproperties"></a>

```json
{
  "cpus": {},
  "disks": {},
  "identificationHints": {
    "awsInstanceID": {},
    "fqdn": {},
    "hostname": {},
    "vmPath": {},
    "vmWareUuid": {}
  },
  "lastUpdatedDateTime": {},
  "networkInterfaces": {},
  "os": {
    "fullString": {}
  },
  "ramBytes": {},
  "recommendedInstanceType": {}
}
```

Source server properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpus|object|false|none|none|
|disks|object|false|none|none|
|identificationHints|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|networkInterfaces|object|false|none|none|
|os|object|false|none|none|
|ramBytes|object|false|none|none|
|recommendedInstanceType|object|false|none|none|

<h2 id="tocS_SsmDocumentName">SsmDocumentName</h2>
<!-- backwards compatibility -->
<a id="schemassmdocumentname"></a>
<a id="schema_SsmDocumentName"></a>
<a id="tocSssmdocumentname"></a>
<a id="tocsssmdocumentname"></a>

```json
"string"
```

<h2 id="tocS_SsmDocumentParameterName">SsmDocumentParameterName</h2>
<!-- backwards compatibility -->
<a id="schemassmdocumentparametername"></a>
<a id="schema_SsmDocumentParameterName"></a>
<a id="tocSssmdocumentparametername"></a>
<a id="tocsssmdocumentparametername"></a>

```json
"string"
```

<h2 id="tocS_SsmParameterStoreParameterName">SsmParameterStoreParameterName</h2>
<!-- backwards compatibility -->
<a id="schemassmparameterstoreparametername"></a>
<a id="schema_SsmParameterStoreParameterName"></a>
<a id="tocSssmparameterstoreparametername"></a>
<a id="tocsssmparameterstoreparametername"></a>

```json
"string"
```

<h2 id="tocS_SsmParameterStoreParameterType">SsmParameterStoreParameterType</h2>
<!-- backwards compatibility -->
<a id="schemassmparameterstoreparametertype"></a>
<a id="schema_SsmParameterStoreParameterType"></a>
<a id="tocSssmparameterstoreparametertype"></a>
<a id="tocsssmparameterstoreparametertype"></a>

```json
"STRING"
```

<h2 id="tocS_SsmParameterStoreParameter">SsmParameterStoreParameter</h2>
<!-- backwards compatibility -->
<a id="schemassmparameterstoreparameter"></a>
<a id="schema_SsmParameterStoreParameter"></a>
<a id="tocSssmparameterstoreparameter"></a>
<a id="tocsssmparameterstoreparameter"></a>

```json
{
  "parameterName": {},
  "parameterType": {}
}
```

AWS Systems Manager Parameter Store parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameterName|object|true|none|none|
|parameterType|object|true|none|none|

<h2 id="tocS_StartCutoverRequestSourceServerIDs">StartCutoverRequestSourceServerIDs</h2>
<!-- backwards compatibility -->
<a id="schemastartcutoverrequestsourceserverids"></a>
<a id="schema_StartCutoverRequestSourceServerIDs"></a>
<a id="tocSstartcutoverrequestsourceserverids"></a>
<a id="tocsstartcutoverrequestsourceserverids"></a>

```json
[
  "stringstringstrings"
]
```

<h2 id="tocS_StartCutoverRequest">StartCutoverRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcutoverrequest"></a>
<a id="schema_StartCutoverRequest"></a>
<a id="tocSstartcutoverrequest"></a>
<a id="tocsstartcutoverrequest"></a>

```json
{
  "sourceServerIDs": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerIDs|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StartExportRequest">StartExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartexportrequest"></a>
<a id="schema_StartExportRequest"></a>
<a id="tocSstartexportrequest"></a>
<a id="tocsstartexportrequest"></a>

```json
{
  "s3Bucket": {},
  "s3BucketOwner": {},
  "s3Key": {}
}
```

Start export request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Bucket|object|true|none|none|
|s3BucketOwner|object|false|none|none|
|s3Key|object|true|none|none|

<h2 id="tocS_StartImportRequest">StartImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartimportrequest"></a>
<a id="schema_StartImportRequest"></a>
<a id="tocSstartimportrequest"></a>
<a id="tocsstartimportrequest"></a>

```json
{
  "clientToken": {},
  "s3BucketSource": {
    "s3Bucket": {},
    "s3BucketOwner": {},
    "s3Key": {}
  }
}
```

Start import request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|s3BucketSource|object|true|none|none|

<h2 id="tocS_StartReplicationRequest">StartReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationrequest"></a>
<a id="schema_StartReplicationRequest"></a>
<a id="tocSstartreplicationrequest"></a>
<a id="tocsstartreplicationrequest"></a>

```json
{
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerID|object|true|none|none|

<h2 id="tocS_StartTestRequestSourceServerIDs">StartTestRequestSourceServerIDs</h2>
<!-- backwards compatibility -->
<a id="schemastarttestrequestsourceserverids"></a>
<a id="schema_StartTestRequestSourceServerIDs"></a>
<a id="tocSstarttestrequestsourceserverids"></a>
<a id="tocsstarttestrequestsourceserverids"></a>

```json
[
  "stringstringstrings"
]
```

<h2 id="tocS_StartTestRequest">StartTestRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttestrequest"></a>
<a id="schema_StartTestRequest"></a>
<a id="tocSstarttestrequest"></a>
<a id="tocsstarttestrequest"></a>

```json
{
  "sourceServerIDs": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerIDs|object|true|none|none|
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
|tags|object|true|none|none|

<h2 id="tocS_TerminateTargetInstancesRequestSourceServerIDs">TerminateTargetInstancesRequestSourceServerIDs</h2>
<!-- backwards compatibility -->
<a id="schematerminatetargetinstancesrequestsourceserverids"></a>
<a id="schema_TerminateTargetInstancesRequestSourceServerIDs"></a>
<a id="tocSterminatetargetinstancesrequestsourceserverids"></a>
<a id="tocsterminatetargetinstancesrequestsourceserverids"></a>

```json
[
  "stringstringstrings"
]
```

<h2 id="tocS_TerminateTargetInstancesRequest">TerminateTargetInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminatetargetinstancesrequest"></a>
<a id="schema_TerminateTargetInstancesRequest"></a>
<a id="tocSterminatetargetinstancesrequest"></a>
<a id="tocsterminatetargetinstancesrequest"></a>

```json
{
  "sourceServerIDs": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerIDs|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UnarchiveApplicationRequest">UnarchiveApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunarchiveapplicationrequest"></a>
<a id="schema_UnarchiveApplicationRequest"></a>
<a id="tocSunarchiveapplicationrequest"></a>
<a id="tocsunarchiveapplicationrequest"></a>

```json
{
  "applicationID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|true|none|none|

<h2 id="tocS_UnarchiveWaveRequest">UnarchiveWaveRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunarchivewaverequest"></a>
<a id="schema_UnarchiveWaveRequest"></a>
<a id="tocSunarchivewaverequest"></a>
<a id="tocsunarchivewaverequest"></a>

```json
{
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|waveID|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateApplicationRequest">UpdateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationrequest"></a>
<a id="schema_UpdateApplicationRequest"></a>
<a id="tocSupdateapplicationrequest"></a>
<a id="tocsupdateapplicationrequest"></a>

```json
{
  "applicationID": {},
  "description": {},
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationID|object|true|none|none|
|description|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_UpdateLaunchConfigurationRequest">UpdateLaunchConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelaunchconfigurationrequest"></a>
<a id="schema_UpdateLaunchConfigurationRequest"></a>
<a id="tocSupdatelaunchconfigurationrequest"></a>
<a id="tocsupdatelaunchconfigurationrequest"></a>

```json
{
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "enableMapAutoTagging": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "name": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "sourceServerID": {},
  "targetInstanceTypeRightSizingMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootMode|object|false|none|none|
|copyPrivateIp|object|false|none|none|
|copyTags|object|false|none|none|
|enableMapAutoTagging|object|false|none|none|
|launchDisposition|object|false|none|none|
|licensing|object|false|none|none|
|mapAutoTaggingMpeID|object|false|none|none|
|name|object|false|none|none|
|postLaunchActions|[PostLaunchActions](#schemapostlaunchactions)|false|none|Post Launch Actions to executed on the Test or Cutover instance.|
|sourceServerID|object|true|none|none|
|targetInstanceTypeRightSizingMethod|object|false|none|none|

<h2 id="tocS_UpdateLaunchConfigurationTemplateRequest">UpdateLaunchConfigurationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelaunchconfigurationtemplaterequest"></a>
<a id="schema_UpdateLaunchConfigurationTemplateRequest"></a>
<a id="tocSupdatelaunchconfigurationtemplaterequest"></a>
<a id="tocsupdatelaunchconfigurationtemplaterequest"></a>

```json
{
  "associatePublicIpAddress": {},
  "bootMode": {},
  "copyPrivateIp": {},
  "copyTags": {},
  "enableMapAutoTagging": {},
  "largeVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "launchConfigurationTemplateID": {},
  "launchDisposition": {},
  "licensing": {
    "osByol": {}
  },
  "mapAutoTaggingMpeID": {},
  "postLaunchActions": {
    "cloudWatchLogGroupName": {},
    "deployment": {},
    "s3LogBucket": {},
    "s3OutputKeyPrefix": {},
    "ssmDocuments": {}
  },
  "smallVolumeConf": {
    "iops": {},
    "throughput": {},
    "volumeType": {}
  },
  "smallVolumeMaxSize": {},
  "targetInstanceTypeRightSizingMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatePublicIpAddress|object|false|none|none|
|bootMode|object|false|none|none|
|copyPrivateIp|object|false|none|none|
|copyTags|object|false|none|none|
|enableMapAutoTagging|object|false|none|none|
|largeVolumeConf|object|false|none|none|
|launchConfigurationTemplateID|object|true|none|none|
|launchDisposition|object|false|none|none|
|licensing|[Licensing](#schemalicensing)|false|none|Configure Licensing.|
|mapAutoTaggingMpeID|object|false|none|none|
|postLaunchActions|object|false|none|none|
|smallVolumeConf|object|false|none|none|
|smallVolumeMaxSize|object|false|none|none|
|targetInstanceTypeRightSizingMethod|object|false|none|none|

<h2 id="tocS_UpdateReplicationConfigurationRequest">UpdateReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationconfigurationrequest"></a>
<a id="schema_UpdateReplicationConfigurationRequest"></a>
<a id="tocSupdatereplicationconfigurationrequest"></a>
<a id="tocsupdatereplicationconfigurationrequest"></a>

```json
{
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "name": {},
  "replicatedDisks": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "sourceServerID": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associateDefaultSecurityGroup|object|false|none|none|
|bandwidthThrottling|object|false|none|none|
|createPublicIP|object|false|none|none|
|dataPlaneRouting|object|false|none|none|
|defaultLargeStagingDiskType|object|false|none|none|
|ebsEncryption|object|false|none|none|
|ebsEncryptionKeyArn|object|false|none|none|
|name|object|false|none|none|
|replicatedDisks|object|false|none|none|
|replicationServerInstanceType|object|false|none|none|
|replicationServersSecurityGroupsIDs|object|false|none|none|
|sourceServerID|object|true|none|none|
|stagingAreaSubnetId|object|false|none|none|
|stagingAreaTags|object|false|none|none|
|useDedicatedReplicationServer|object|false|none|none|

<h2 id="tocS_UpdateReplicationConfigurationTemplateRequest">UpdateReplicationConfigurationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationconfigurationtemplaterequest"></a>
<a id="schema_UpdateReplicationConfigurationTemplateRequest"></a>
<a id="tocSupdatereplicationconfigurationtemplaterequest"></a>
<a id="tocsupdatereplicationconfigurationtemplaterequest"></a>

```json
{
  "arn": {},
  "associateDefaultSecurityGroup": {},
  "bandwidthThrottling": {},
  "createPublicIP": {},
  "dataPlaneRouting": {},
  "defaultLargeStagingDiskType": {},
  "ebsEncryption": {},
  "ebsEncryptionKeyArn": {},
  "replicationConfigurationTemplateID": {},
  "replicationServerInstanceType": {},
  "replicationServersSecurityGroupsIDs": {},
  "stagingAreaSubnetId": {},
  "stagingAreaTags": {
    "property1": "string",
    "property2": "string"
  },
  "useDedicatedReplicationServer": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|associateDefaultSecurityGroup|object|false|none|none|
|bandwidthThrottling|object|false|none|none|
|createPublicIP|object|false|none|none|
|dataPlaneRouting|object|false|none|none|
|defaultLargeStagingDiskType|object|false|none|none|
|ebsEncryption|object|false|none|none|
|ebsEncryptionKeyArn|object|false|none|none|
|replicationConfigurationTemplateID|object|true|none|none|
|replicationServerInstanceType|object|false|none|none|
|replicationServersSecurityGroupsIDs|object|false|none|none|
|stagingAreaSubnetId|object|false|none|none|
|stagingAreaTags|object|false|none|none|
|useDedicatedReplicationServer|object|false|none|none|

<h2 id="tocS_UpdateSourceServerReplicationTypeRequest">UpdateSourceServerReplicationTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesourceserverreplicationtyperequest"></a>
<a id="schema_UpdateSourceServerReplicationTypeRequest"></a>
<a id="tocSupdatesourceserverreplicationtyperequest"></a>
<a id="tocsupdatesourceserverreplicationtyperequest"></a>

```json
{
  "replicationType": {},
  "sourceServerID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationType|object|true|none|none|
|sourceServerID|object|true|none|none|

<h2 id="tocS_UpdateWaveRequest">UpdateWaveRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewaverequest"></a>
<a id="schema_UpdateWaveRequest"></a>
<a id="tocSupdatewaverequest"></a>
<a id="tocsupdatewaverequest"></a>

```json
{
  "description": {},
  "name": {},
  "waveID": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|name|object|false|none|none|
|waveID|object|true|none|none|

<h2 id="tocS_VcenterClient">VcenterClient</h2>
<!-- backwards compatibility -->
<a id="schemavcenterclient"></a>
<a id="schema_VcenterClient"></a>
<a id="tocSvcenterclient"></a>
<a id="tocsvcenterclient"></a>

```json
{
  "arn": {},
  "datacenterName": {},
  "hostname": {},
  "lastSeenDatetime": {},
  "sourceServerTags": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vcenterClientID": {},
  "vcenterUUID": {}
}
```

vCenter client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|datacenterName|object|false|none|none|
|hostname|object|false|none|none|
|lastSeenDatetime|object|false|none|none|
|sourceServerTags|object|false|none|none|
|tags|object|false|none|none|
|vcenterClientID|object|false|none|none|
|vcenterUUID|object|false|none|none|

<h2 id="tocS_WaveAggregatedStatus">WaveAggregatedStatus</h2>
<!-- backwards compatibility -->
<a id="schemawaveaggregatedstatus"></a>
<a id="schema_WaveAggregatedStatus"></a>
<a id="tocSwaveaggregatedstatus"></a>
<a id="tocswaveaggregatedstatus"></a>

```json
{
  "healthStatus": {},
  "lastUpdateDateTime": {},
  "progressStatus": {},
  "replicationStartedDateTime": {},
  "totalApplications": {}
}
```

Wave aggregated status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthStatus|object|false|none|none|
|lastUpdateDateTime|object|false|none|none|
|progressStatus|object|false|none|none|
|replicationStartedDateTime|object|false|none|none|
|totalApplications|object|false|none|none|

<h2 id="tocS_WaveHealthStatus">WaveHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemawavehealthstatus"></a>
<a id="schema_WaveHealthStatus"></a>
<a id="tocSwavehealthstatus"></a>
<a id="tocswavehealthstatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_WaveProgressStatus">WaveProgressStatus</h2>
<!-- backwards compatibility -->
<a id="schemawaveprogressstatus"></a>
<a id="schema_WaveProgressStatus"></a>
<a id="tocSwaveprogressstatus"></a>
<a id="tocswaveprogressstatus"></a>

```json
"NOT_STARTED"
```
