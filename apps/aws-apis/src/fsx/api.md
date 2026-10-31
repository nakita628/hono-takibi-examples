<h1 id="amazon-fsx">Amazon FSx v2018-03-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon FSx is a fully managed service that makes it easy for storage and application administrators to launch and use shared file storage.

Base URLs:

* <a href="http://fsx.us-east-1.amazonaws.com">http://fsx.us-east-1.amazonaws.com</a> - The Amazon FSx multi-region endpoint

* <a href="https://fsx.us-east-1.amazonaws.com">https://fsx.us-east-1.amazonaws.com</a> - The Amazon FSx multi-region endpoint

* <a href="http://fsx.cn-north-1.amazonaws.com.cn">http://fsx.cn-north-1.amazonaws.com.cn</a> - The Amazon FSx endpoint for China (Beijing) and China (Ningxia)

* <a href="https://fsx.cn-north-1.amazonaws.com.cn">https://fsx.cn-north-1.amazonaws.com.cn</a> - The Amazon FSx endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/fsx/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-fsx-default">Default</h1>

## AssociateFileSystemAliases

<a id="opIdAssociateFileSystemAliases"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.AssociateFileSystemAliases' \
  -d '{
    "ClientRequestToken": "string",
    "FileSystemId": {},
    "Aliases": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases`

<p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "FileSystemId": {},
  "Aliases": {}
}
```

<h3 id="associatefilesystemaliases-parameters">Parameters</h3>

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
|body|body|[AssociateFileSystemAliasesRequest](#schemaassociatefilesystemaliasesrequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» FileSystemId|body|object|true|none|
|» Aliases|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.AssociateFileSystemAliases|

> Example responses

> 200 Response

```json
{
  "Aliases": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="associatefilesystemaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateFileSystemAliasesResponse](#schemaassociatefilesystemaliasesresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelDataRepositoryTask

<a id="opIdCancelDataRepositoryTask"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CancelDataRepositoryTask' \
  -d '{
    "TaskId": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask`

<p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>

> Body parameter

```json
{
  "TaskId": {}
}
```

<h3 id="canceldatarepositorytask-parameters">Parameters</h3>

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
|body|body|[CancelDataRepositoryTaskRequest](#schemacanceldatarepositorytaskrequest)|true|none|
|» TaskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CancelDataRepositoryTask|

> Example responses

> 200 Response

```json
{
  "Lifecycle": {},
  "TaskId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="canceldatarepositorytask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelDataRepositoryTaskResponse](#schemacanceldatarepositorytaskresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|
|482|482|DataRepositoryTaskNotFound|[DataRepositoryTaskNotFound](#schemadatarepositorytasknotfound)|
|483|483|DataRepositoryTaskEnded|[DataRepositoryTaskEnded](#schemadatarepositorytaskended)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopyBackup

<a id="opIdCopyBackup"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CopyBackup' \
  -d '{
    "ClientRequestToken": "string",
    "SourceBackupId": {},
    "SourceRegion": {},
    "KmsKeyId": "string",
    "CopyTags": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup`

<p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "SourceBackupId": {},
  "SourceRegion": {},
  "KmsKeyId": "string",
  "CopyTags": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="copybackup-parameters">Parameters</h3>

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
|body|body|[CopyBackupRequest](#schemacopybackuprequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» SourceBackupId|body|object|true|none|
|» SourceRegion|body|object|false|none|
|» KmsKeyId|body|[KmsKeyId](#schemakmskeyid)|false|<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>|
|» CopyTags|body|object|false|none|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CopyBackup|

> Example responses

> 200 Response

```json
{
  "Backup": {
    "BackupId": "backup-0a3364eded1014b28",
    "CreationTime": 1617954808.068,
    "FileSystem": {
      "FileSystemId": "fs-0498eed5fe91001ec",
      "FileSystemType": "LUSTRE",
      "LustreConfiguration": {
        "AutomaticBackupRetentionDays": 0,
        "DeploymentType": "PERSISTENT_1",
        "PerUnitStorageThroughput": 50,
        "WeeklyMaintenanceStartTime": "1:05:00"
      },
      "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0f5179e395f597e66",
      "StorageCapacity": 2400,
      "StorageType": "SSD"
    },
    "KmsKeyId": "arn:aws:fsx:us-east-1:012345678912:key/d1234e22-543a-12b7-a98f-e12c2b54001a",
    "Lifecycle": "COPYING",
    "OwnerId": "123456789012",
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-0a3364eded1014b28",
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyBackup"
      }
    ],
    "Type": "USER_INITIATED"
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

<h3 id="copybackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyBackupResponse](#schemacopybackupresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|BackupNotFound|[BackupNotFound](#schemabackupnotfound)|
|482|482|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|483|483|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|
|484|484|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|
|486|486|InvalidSourceKmsKey|[InvalidSourceKmsKey](#schemainvalidsourcekmskey)|
|487|487|InvalidDestinationKmsKey|[InvalidDestinationKmsKey](#schemainvaliddestinationkmskey)|
|488|488|InvalidRegion|[InvalidRegion](#schemainvalidregion)|
|489|489|SourceBackupUnavailable|[SourceBackupUnavailable](#schemasourcebackupunavailable)|
|490|490|IncompatibleRegionForMultiAZ|[IncompatibleRegionForMultiAZ](#schemaincompatibleregionformultiaz)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackup

<a id="opIdCreateBackup"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateBackup' \
  -d '{
    "FileSystemId": {},
    "ClientRequestToken": {},
    "Tags": {},
    "VolumeId": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup`

<p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>

> Body parameter

```json
{
  "FileSystemId": {},
  "ClientRequestToken": {},
  "Tags": {},
  "VolumeId": {}
}
```

<h3 id="createbackup-parameters">Parameters</h3>

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
|body|body|[CreateBackupRequest](#schemacreatebackuprequest)|true|none|
|» FileSystemId|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|
|» VolumeId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateBackup|

> Example responses

> 200 Response

```json
{
  "Backup": {
    "BackupId": "backup-03e3c82e0183b7b6b",
    "CreationTime": "1481841524.0",
    "FileSystem": {
      "FileSystemId": "fs-0498eed5fe91001ec",
      "OwnerId": 12345678912,
      "StorageCapacity": 300,
      "WindowsConfiguration": {
        "ActiveDirectoryId": "d-1234abcd12",
        "AutomaticBackupRetentionDays": 30,
        "DailyAutomaticBackupStartTime": "05:00",
        "WeeklyMaintenanceStartTime": "1:05:00"
      }
    },
    "Lifecycle": "CREATING",
    "ProgressPercent": 0,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyBackup"
      }
    ],
    "Type": "USER_INITIATED"
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

<h3 id="createbackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackupResponse](#schemacreatebackupresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|VolumeNotFound|[VolumeNotFound](#schemavolumenotfound)|
|484|484|BackupInProgress|[BackupInProgress](#schemabackupinprogress)|
|485|485|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|486|486|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|487|487|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataRepositoryAssociation

<a id="opIdCreateDataRepositoryAssociation"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation' \
  -d '{
    "FileSystemId": "stringstrin",
    "FileSystemPath": {},
    "DataRepositoryPath": {},
    "BatchImportMetaDataOnCreate": {},
    "ImportedFileChunkSize": {},
    "S3": {
      "AutoImportPolicy": {
        "Events": {}
      },
      "AutoExportPolicy": {
        "Events": {}
      }
    },
    "ClientRequestToken": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation`

<p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>

> Body parameter

```json
{
  "FileSystemId": "stringstrin",
  "FileSystemPath": {},
  "DataRepositoryPath": {},
  "BatchImportMetaDataOnCreate": {},
  "ImportedFileChunkSize": {},
  "S3": {
    "AutoImportPolicy": {
      "Events": {}
    },
    "AutoExportPolicy": {
      "Events": {}
    }
  },
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createdatarepositoryassociation-parameters">Parameters</h3>

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
|body|body|[CreateDataRepositoryAssociationRequest](#schemacreatedatarepositoryassociationrequest)|true|none|
|» FileSystemId|body|[FileSystemId](#schemafilesystemid)|true|The globally unique ID of the file system, assigned by Amazon FSx.|
|» FileSystemPath|body|object|false|none|
|» DataRepositoryPath|body|object|true|none|
|» BatchImportMetaDataOnCreate|body|object|false|none|
|» ImportedFileChunkSize|body|object|false|none|
|» S3|body|object|false|none|
|» » AutoImportPolicy|body|object|false|none|
|» » » Events|body|object|false|none|
|» » AutoExportPolicy|body|object|false|none|
|» » » Events|body|object|false|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation|

> Example responses

> 200 Response

```json
{
  "Association": {
    "AssociationId": {},
    "ResourceARN": "stringst",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "FailureDetails": {
      "Message": "string"
    },
    "FileSystemPath": {},
    "DataRepositoryPath": {},
    "BatchImportMetaDataOnCreate": {},
    "ImportedFileChunkSize": {},
    "S3": {
      "AutoImportPolicy": {
        "Events": {}
      },
      "AutoExportPolicy": {
        "Events": {}
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCachePath": {},
    "DataRepositorySubdirectories": {},
    "NFS": {
      "Version": {},
      "DnsIps": {},
      "AutoExportPolicy": {
        "Events": {}
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

> 485 Response

```json
null
```

<h3 id="createdatarepositoryassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataRepositoryAssociationResponse](#schemacreatedatarepositoryassociationresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|484|484|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataRepositoryTask

<a id="opIdCreateDataRepositoryTask"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateDataRepositoryTask' \
  -d '{
    "Type": {},
    "Paths": {},
    "FileSystemId": "stringstrin",
    "Report": {
      "Enabled": {},
      "Path": {},
      "Format": {},
      "Scope": {}
    },
    "ClientRequestToken": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CapacityToRelease": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask`

Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.

> Body parameter

```json
{
  "Type": {},
  "Paths": {},
  "FileSystemId": "stringstrin",
  "Report": {
    "Enabled": {},
    "Path": {},
    "Format": {},
    "Scope": {}
  },
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CapacityToRelease": {}
}
```

<h3 id="createdatarepositorytask-parameters">Parameters</h3>

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
|body|body|[CreateDataRepositoryTaskRequest](#schemacreatedatarepositorytaskrequest)|true|none|
|» Type|body|object|true|none|
|» Paths|body|object|false|none|
|» FileSystemId|body|[FileSystemId](#schemafilesystemid)|true|The globally unique ID of the file system, assigned by Amazon FSx.|
|» Report|body|object|true|none|
|» » Enabled|body|object|true|none|
|» » Path|body|object|false|none|
|» » Format|body|object|false|none|
|» » Scope|body|object|false|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|» CapacityToRelease|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateDataRepositoryTask|

> Example responses

> 200 Response

```json
{
  "DataRepositoryTask": {
    "TaskId": {},
    "Lifecycle": {},
    "Type": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "StartTime": {},
    "EndTime": {},
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "FileSystemId": {},
    "Paths": {},
    "FailureDetails": {
      "Message": "string"
    },
    "Status": {
      "TotalCount": {},
      "SucceededCount": {},
      "FailedCount": {},
      "LastUpdatedTime": {},
      "ReleasedCapacity": {}
    },
    "Report": {
      "Enabled": {},
      "Path": {},
      "Format": {},
      "Scope": {}
    },
    "CapacityToRelease": {},
    "FileCacheId": {}
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

<h3 id="createdatarepositorytask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataRepositoryTaskResponse](#schemacreatedatarepositorytaskresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|484|484|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|
|486|486|DataRepositoryTaskExecuting|[DataRepositoryTaskExecuting](#schemadatarepositorytaskexecuting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFileCache

<a id="opIdCreateFileCache"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateFileCache' \
  -d '{
    "ClientRequestToken": {},
    "FileCacheType": {},
    "FileCacheTypeVersion": {},
    "StorageCapacity": {},
    "SubnetIds": [
      "stringstringstr"
    ],
    "SecurityGroupIds": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CopyTagsToDataRepositoryAssociations": {},
    "KmsKeyId": {},
    "LustreConfiguration": {
      "PerUnitStorageThroughput": {},
      "DeploymentType": {},
      "WeeklyMaintenanceStartTime": "strings",
      "MetadataConfiguration": {
        "StorageCapacity": {}
      }
    },
    "DataRepositoryAssociations": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache`

<p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>

> Body parameter

```json
{
  "ClientRequestToken": {},
  "FileCacheType": {},
  "FileCacheTypeVersion": {},
  "StorageCapacity": {},
  "SubnetIds": [
    "stringstringstr"
  ],
  "SecurityGroupIds": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CopyTagsToDataRepositoryAssociations": {},
  "KmsKeyId": {},
  "LustreConfiguration": {
    "PerUnitStorageThroughput": {},
    "DeploymentType": {},
    "WeeklyMaintenanceStartTime": "strings",
    "MetadataConfiguration": {
      "StorageCapacity": {}
    }
  },
  "DataRepositoryAssociations": {}
}
```

<h3 id="createfilecache-parameters">Parameters</h3>

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
|body|body|[CreateFileCacheRequest](#schemacreatefilecacherequest)|true|none|
|» ClientRequestToken|body|object|false|none|
|» FileCacheType|body|object|true|none|
|» FileCacheTypeVersion|body|object|true|none|
|» StorageCapacity|body|object|true|none|
|» SubnetIds|body|[SubnetIds](#schemasubnetids)|true|A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.|
|» SecurityGroupIds|body|object|false|none|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|» CopyTagsToDataRepositoryAssociations|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» LustreConfiguration|body|object|false|none|
|» » PerUnitStorageThroughput|body|object|true|none|
|» » DeploymentType|body|object|true|none|
|» » WeeklyMaintenanceStartTime|body|[WeeklyTime](#schemaweeklytime)|false|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|» » MetadataConfiguration|body|object|true|none|
|» » » StorageCapacity|body|object|true|none|
|» DataRepositoryAssociations|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateFileCache|

> Example responses

> 200 Response

```json
{
  "FileCache": {
    "OwnerId": "stringstring",
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCacheType": {},
    "FileCacheTypeVersion": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "VpcId": "stringstring",
    "SubnetIds": [
      "stringstringstr"
    ],
    "NetworkInterfaceIds": [
      "stringstring"
    ],
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CopyTagsToDataRepositoryAssociations": {},
    "LustreConfiguration": {
      "PerUnitStorageThroughput": {},
      "DeploymentType": {},
      "MountName": {},
      "WeeklyMaintenanceStartTime": "strings",
      "MetadataConfiguration": {
        "StorageCapacity": {}
      },
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      }
    },
    "DataRepositoryAssociationIds": {}
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

<h3 id="createfilecache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFileCacheResponse](#schemacreatefilecacheresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|InvalidNetworkSettings|[InvalidNetworkSettings](#schemainvalidnetworksettings)|
|483|483|InvalidPerUnitStorageThroughput|[InvalidPerUnitStorageThroughput](#schemainvalidperunitstoragethroughput)|
|484|484|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|
|486|486|MissingFileCacheConfiguration|[MissingFileCacheConfiguration](#schemamissingfilecacheconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFileSystem

<a id="opIdCreateFileSystem"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateFileSystem' \
  -d '{
    "ClientRequestToken": {},
    "FileSystemType": {},
    "StorageCapacity": {},
    "StorageType": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "Tags": {},
    "KmsKeyId": "string",
    "WindowsConfiguration": {
      "ActiveDirectoryId": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "Password": {},
        "DnsIps": {}
      },
      "DeploymentType": {},
      "PreferredSubnetId": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "CopyTagsToBackups": {},
      "Aliases": {},
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "ImportPath": {},
      "ExportPath": {},
      "ImportedFileChunkSize": {},
      "DeploymentType": {},
      "AutoImportPolicy": {},
      "PerUnitStorageThroughput": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "DriveCacheType": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "OntapConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "EndpointIpAddressRange": {},
      "FsxAdminPassword": {},
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "PreferredSubnetId": {},
      "RouteTableIds": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings"
    },
    "FileSystemTypeVersion": {},
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "RootVolumeConfiguration": {
        "RecordSizeKiB": {},
        "DataCompressionType": {},
        "NfsExports": {},
        "UserAndGroupQuotas": {},
        "CopyTagsToSnapshots": {},
        "ReadOnly": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem`

<p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

> Body parameter

```json
{
  "ClientRequestToken": {},
  "FileSystemType": {},
  "StorageCapacity": {},
  "StorageType": {},
  "SubnetIds": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": "string",
  "WindowsConfiguration": {
    "ActiveDirectoryId": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    },
    "DeploymentType": {},
    "PreferredSubnetId": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": {},
    "AutomaticBackupRetentionDays": {},
    "CopyTagsToBackups": {},
    "Aliases": {},
    "AuditLogConfiguration": {
      "FileAccessAuditLogLevel": {},
      "FileShareAccessAuditLogLevel": {},
      "AuditLogDestination": {}
    }
  },
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "ImportPath": {},
    "ExportPath": {},
    "ImportedFileChunkSize": {},
    "DeploymentType": {},
    "AutoImportPolicy": {},
    "PerUnitStorageThroughput": {},
    "DailyAutomaticBackupStartTime": "strin",
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "DriveCacheType": {},
    "DataCompressionType": {},
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    },
    "RootSquashConfiguration": {
      "RootSquash": {},
      "NoSquashNids": {}
    }
  },
  "OntapConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "EndpointIpAddressRange": {},
    "FsxAdminPassword": {},
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "PreferredSubnetId": {},
    "RouteTableIds": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings"
  },
  "FileSystemTypeVersion": {},
  "OpenZFSConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "CopyTagsToVolumes": {},
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "RootVolumeConfiguration": {
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "CopyTagsToSnapshots": {},
      "ReadOnly": {}
    }
  }
}
```

<h3 id="createfilesystem-parameters">Parameters</h3>

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
|body|body|[CreateFileSystemRequest](#schemacreatefilesystemrequest)|true|none|
|» ClientRequestToken|body|object|false|none|
|» FileSystemType|body|object|true|none|
|» StorageCapacity|body|object|true|none|
|» StorageType|body|object|false|none|
|» SubnetIds|body|object|true|none|
|» SecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» KmsKeyId|body|[KmsKeyId](#schemakmskeyid)|false|<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>|
|» WindowsConfiguration|body|object|false|none|
|» » ActiveDirectoryId|body|object|false|none|
|» » SelfManagedActiveDirectoryConfiguration|body|[SelfManagedActiveDirectoryConfiguration](#schemaselfmanagedactivedirectoryconfiguration)|false|The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.|
|» » DeploymentType|body|object|false|none|
|» » PreferredSubnetId|body|object|false|none|
|» » ThroughputCapacity|body|object|true|none|
|» » WeeklyMaintenanceStartTime|body|object|false|none|
|» » DailyAutomaticBackupStartTime|body|object|false|none|
|» » AutomaticBackupRetentionDays|body|object|false|none|
|» » CopyTagsToBackups|body|object|false|none|
|» » Aliases|body|object|false|none|
|» » AuditLogConfiguration|body|object|false|none|
|» » » FileAccessAuditLogLevel|body|object|true|none|
|» » » FileShareAccessAuditLogLevel|body|object|true|none|
|» » » AuditLogDestination|body|object|false|none|
|» LustreConfiguration|body|[CreateFileSystemLustreConfiguration](#schemacreatefilesystemlustreconfiguration)|false|<p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>|
|» OntapConfiguration|body|[CreateFileSystemOntapConfiguration](#schemacreatefilesystemontapconfiguration)|false|The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.|
|» FileSystemTypeVersion|body|object|false|none|
|» OpenZFSConfiguration|body|object|false|none|
|» » AutomaticBackupRetentionDays|body|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|» » CopyTagsToBackups|body|object|false|none|
|» » CopyTagsToVolumes|body|object|false|none|
|» » DailyAutomaticBackupStartTime|body|[DailyTime](#schemadailytime)|false|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|» » DeploymentType|body|object|true|none|
|» » ThroughputCapacity|body|object|true|none|
|» » WeeklyMaintenanceStartTime|body|[WeeklyTime](#schemaweeklytime)|false|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|» » DiskIopsConfiguration|body|[DiskIopsConfiguration](#schemadiskiopsconfiguration)|false|The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).|
|» » RootVolumeConfiguration|body|object|false|none|
|» » » RecordSizeKiB|body|object|false|none|
|» » » DataCompressionType|body|object|false|none|
|» » » NfsExports|body|object|false|none|
|» » » UserAndGroupQuotas|body|object|false|none|
|» » » CopyTagsToSnapshots|body|object|false|none|
|» » » ReadOnly|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateFileSystem|

> Example responses

> 200 Response

```json
{
  "FileSystem": {
    "CreationTime": "1481841524.0",
    "DNSName": "fs-0123456789abcdef0.fsx.com",
    "FileSystemId": "fs-0123456789abcdef0",
    "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/1111abcd-2222-3333-4444-55556666eeff",
    "Lifecycle": "CREATING",
    "OwnerId": 12345678912,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0123456789abcdef0",
    "StorageCapacity": 3200,
    "StorageType": "HDD",
    "SubnetIds": [
      "subnet-1234abcd"
    ],
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyFileSystem"
      }
    ],
    "VpcId": "vpc-ab1234cd",
    "WindowsConfiguration": {
      "ActiveDirectoryId": "d-1234abcd12",
      "Aliases": [
        {
          "Lifecycle": "CREATING",
          "Name": "accounting.corp.example.com"
        }
      ],
      "AutomaticBackupRetentionDays": 30,
      "DailyAutomaticBackupStartTime": "05:00",
      "ThroughputCapacity": 32,
      "WeeklyMaintenanceStartTime": "1:05:00"
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

<h3 id="createfilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFileSystemResponse](#schemacreatefilesystemresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|ActiveDirectoryError|[ActiveDirectoryError](#schemaactivedirectoryerror)|
|482|482|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|483|483|InvalidImportPath|[InvalidImportPath](#schemainvalidimportpath)|
|484|484|InvalidExportPath|[InvalidExportPath](#schemainvalidexportpath)|
|485|485|InvalidNetworkSettings|[InvalidNetworkSettings](#schemainvalidnetworksettings)|
|486|486|InvalidPerUnitStorageThroughput|[InvalidPerUnitStorageThroughput](#schemainvalidperunitstoragethroughput)|
|487|487|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|488|488|InternalServerError|[InternalServerError](#schemainternalservererror)|
|489|489|MissingFileSystemConfiguration|[MissingFileSystemConfiguration](#schemamissingfilesystemconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFileSystemFromBackup

<a id="opIdCreateFileSystemFromBackup"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup' \
  -d '{
    "BackupId": "stringstring",
    "ClientRequestToken": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "Tags": {},
    "WindowsConfiguration": {
      "ActiveDirectoryId": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "Password": {},
        "DnsIps": {}
      },
      "DeploymentType": {},
      "PreferredSubnetId": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "CopyTagsToBackups": {},
      "Aliases": {},
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "ImportPath": {},
      "ExportPath": {},
      "ImportedFileChunkSize": {},
      "DeploymentType": {},
      "AutoImportPolicy": {},
      "PerUnitStorageThroughput": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "DriveCacheType": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "StorageType": {},
    "KmsKeyId": "string",
    "FileSystemTypeVersion": {},
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "RootVolumeConfiguration": {
        "RecordSizeKiB": {},
        "DataCompressionType": {},
        "NfsExports": {},
        "UserAndGroupQuotas": {},
        "CopyTagsToSnapshots": {},
        "ReadOnly": {}
      }
    },
    "StorageCapacity": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup`

<p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

> Body parameter

```json
{
  "BackupId": "stringstring",
  "ClientRequestToken": {},
  "SubnetIds": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "WindowsConfiguration": {
    "ActiveDirectoryId": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    },
    "DeploymentType": {},
    "PreferredSubnetId": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": {},
    "AutomaticBackupRetentionDays": {},
    "CopyTagsToBackups": {},
    "Aliases": {},
    "AuditLogConfiguration": {
      "FileAccessAuditLogLevel": {},
      "FileShareAccessAuditLogLevel": {},
      "AuditLogDestination": {}
    }
  },
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "ImportPath": {},
    "ExportPath": {},
    "ImportedFileChunkSize": {},
    "DeploymentType": {},
    "AutoImportPolicy": {},
    "PerUnitStorageThroughput": {},
    "DailyAutomaticBackupStartTime": "strin",
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "DriveCacheType": {},
    "DataCompressionType": {},
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    },
    "RootSquashConfiguration": {
      "RootSquash": {},
      "NoSquashNids": {}
    }
  },
  "StorageType": {},
  "KmsKeyId": "string",
  "FileSystemTypeVersion": {},
  "OpenZFSConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "CopyTagsToVolumes": {},
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "RootVolumeConfiguration": {
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "CopyTagsToSnapshots": {},
      "ReadOnly": {}
    }
  },
  "StorageCapacity": {}
}
```

<h3 id="createfilesystemfrombackup-parameters">Parameters</h3>

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
|body|body|[CreateFileSystemFromBackupRequest](#schemacreatefilesystemfrombackuprequest)|true|none|
|» BackupId|body|[BackupId](#schemabackupid)|true|The ID of the source backup. Specifies the backup that you are copying.|
|» ClientRequestToken|body|object|false|none|
|» SubnetIds|body|object|true|none|
|» SecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» WindowsConfiguration|body|object|false|none|
|» » ActiveDirectoryId|body|object|false|none|
|» » SelfManagedActiveDirectoryConfiguration|body|[SelfManagedActiveDirectoryConfiguration](#schemaselfmanagedactivedirectoryconfiguration)|false|The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.|
|» » DeploymentType|body|object|false|none|
|» » PreferredSubnetId|body|object|false|none|
|» » ThroughputCapacity|body|object|true|none|
|» » WeeklyMaintenanceStartTime|body|object|false|none|
|» » DailyAutomaticBackupStartTime|body|object|false|none|
|» » AutomaticBackupRetentionDays|body|object|false|none|
|» » CopyTagsToBackups|body|object|false|none|
|» » Aliases|body|object|false|none|
|» » AuditLogConfiguration|body|object|false|none|
|» » » FileAccessAuditLogLevel|body|object|true|none|
|» » » FileShareAccessAuditLogLevel|body|object|true|none|
|» » » AuditLogDestination|body|object|false|none|
|» LustreConfiguration|body|[CreateFileSystemLustreConfiguration](#schemacreatefilesystemlustreconfiguration)|false|<p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>|
|» StorageType|body|object|false|none|
|» KmsKeyId|body|[KmsKeyId](#schemakmskeyid)|false|<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>|
|» FileSystemTypeVersion|body|object|false|none|
|» OpenZFSConfiguration|body|object|false|none|
|» » AutomaticBackupRetentionDays|body|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|» » CopyTagsToBackups|body|object|false|none|
|» » CopyTagsToVolumes|body|object|false|none|
|» » DailyAutomaticBackupStartTime|body|[DailyTime](#schemadailytime)|false|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|» » DeploymentType|body|object|true|none|
|» » ThroughputCapacity|body|object|true|none|
|» » WeeklyMaintenanceStartTime|body|[WeeklyTime](#schemaweeklytime)|false|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|» » DiskIopsConfiguration|body|[DiskIopsConfiguration](#schemadiskiopsconfiguration)|false|The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).|
|» » RootVolumeConfiguration|body|object|false|none|
|» » » RecordSizeKiB|body|object|false|none|
|» » » DataCompressionType|body|object|false|none|
|» » » NfsExports|body|object|false|none|
|» » » UserAndGroupQuotas|body|object|false|none|
|» » » CopyTagsToSnapshots|body|object|false|none|
|» » » ReadOnly|body|object|false|none|
|» StorageCapacity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup|

> Example responses

> 200 Response

```json
{
  "FileSystem": {
    "CreationTime": "1481841524.0",
    "DNSName": "fs-0498eed5fe91001ec.fsx.com",
    "FileSystemId": "fs-0498eed5fe91001ec",
    "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
    "Lifecycle": "CREATING",
    "OwnerId": 12345678912,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
    "StorageCapacity": 300,
    "SubnetIds": [
      "subnet-1234abcd"
    ],
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyFileSystem"
      }
    ],
    "VpcId": "vpc-ab1234cd",
    "WindowsConfiguration": {
      "ActiveDirectoryId": "d-1234abcd12",
      "AutomaticBackupRetentionDays": 30,
      "DailyAutomaticBackupStartTime": "05:00",
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "1:05:00"
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

<h3 id="createfilesystemfrombackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFileSystemFromBackupResponse](#schemacreatefilesystemfrombackupresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|ActiveDirectoryError|[ActiveDirectoryError](#schemaactivedirectoryerror)|
|482|482|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|483|483|InvalidNetworkSettings|[InvalidNetworkSettings](#schemainvalidnetworksettings)|
|484|484|InvalidPerUnitStorageThroughput|[InvalidPerUnitStorageThroughput](#schemainvalidperunitstoragethroughput)|
|485|485|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|486|486|BackupNotFound|[BackupNotFound](#schemabackupnotfound)|
|487|487|InternalServerError|[InternalServerError](#schemainternalservererror)|
|488|488|MissingFileSystemConfiguration|[MissingFileSystemConfiguration](#schemamissingfilesystemconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSnapshot

<a id="opIdCreateSnapshot"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateSnapshot' \
  -d '{
    "ClientRequestToken": "string",
    "Name": {},
    "VolumeId": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot`

<p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "Name": {},
  "VolumeId": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createsnapshot-parameters">Parameters</h3>

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
|body|body|[CreateSnapshotRequest](#schemacreatesnapshotrequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» Name|body|object|true|none|
|» VolumeId|body|object|true|none|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateSnapshot|

> Example responses

> 200 Response

```json
{
  "Snapshot": {
    "ResourceARN": "stringst",
    "SnapshotId": {},
    "Name": {},
    "VolumeId": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "Lifecycle": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "AdministrativeActions": {}
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

<h3 id="createsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSnapshotResponse](#schemacreatesnapshotresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|VolumeNotFound|[VolumeNotFound](#schemavolumenotfound)|
|482|482|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStorageVirtualMachine

<a id="opIdCreateStorageVirtualMachine"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine' \
  -d '{
    "ActiveDirectoryConfiguration": {
      "NetBiosName": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "Password": {},
        "DnsIps": {}
      }
    },
    "ClientRequestToken": "string",
    "FileSystemId": "stringstrin",
    "Name": {},
    "SvmAdminPassword": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "RootVolumeSecurityStyle": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine`

Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.

> Body parameter

```json
{
  "ActiveDirectoryConfiguration": {
    "NetBiosName": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    }
  },
  "ClientRequestToken": "string",
  "FileSystemId": "stringstrin",
  "Name": {},
  "SvmAdminPassword": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "RootVolumeSecurityStyle": {}
}
```

<h3 id="createstoragevirtualmachine-parameters">Parameters</h3>

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
|body|body|[CreateStorageVirtualMachineRequest](#schemacreatestoragevirtualmachinerequest)|true|none|
|» ActiveDirectoryConfiguration|body|object|false|none|
|» » NetBiosName|body|object|true|none|
|» » SelfManagedActiveDirectoryConfiguration|body|[SelfManagedActiveDirectoryConfiguration](#schemaselfmanagedactivedirectoryconfiguration)|false|The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» FileSystemId|body|[FileSystemId](#schemafilesystemid)|true|The globally unique ID of the file system, assigned by Amazon FSx.|
|» Name|body|object|true|none|
|» SvmAdminPassword|body|object|false|none|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|» RootVolumeSecurityStyle|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine|

> Example responses

> 200 Response

```json
{
  "StorageVirtualMachine": {
    "ActiveDirectoryConfiguration": {
      "NetBiosName": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      }
    },
    "CreationTime": "1970-01-01T00:00:00Z",
    "Endpoints": {
      "Iscsi": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Management": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Nfs": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Smb": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      }
    },
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "ResourceARN": "stringst",
    "StorageVirtualMachineId": {},
    "Subtype": {},
    "UUID": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "RootVolumeSecurityStyle": {}
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

<h3 id="createstoragevirtualmachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStorageVirtualMachineResponse](#schemacreatestoragevirtualmachineresponse)|
|480|480|ActiveDirectoryError|[ActiveDirectoryError](#schemaactivedirectoryerror)|
|481|481|BadRequest|[BadRequest](#schemabadrequest)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|486|486|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVolume

<a id="opIdCreateVolume"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateVolume' \
  -d '{
    "ClientRequestToken": "string",
    "VolumeType": {},
    "Name": {},
    "OntapConfiguration": {
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume`

Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "VolumeType": {},
  "Name": {},
  "OntapConfiguration": {
    "JunctionPath": {},
    "SecurityStyle": {},
    "SizeInMegabytes": {},
    "StorageEfficiencyEnabled": {},
    "StorageVirtualMachineId": {},
    "TieringPolicy": {
      "CoolingPeriod": {},
      "Name": {}
    },
    "OntapVolumeType": {},
    "SnapshotPolicy": {},
    "CopyTagsToBackups": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "OpenZFSConfiguration": {
    "ParentVolumeId": {},
    "StorageCapacityReservationGiB": {},
    "StorageCapacityQuotaGiB": {},
    "RecordSizeKiB": {},
    "DataCompressionType": {},
    "CopyTagsToSnapshots": {},
    "OriginSnapshot": {
      "SnapshotARN": "stringst",
      "CopyStrategy": {}
    },
    "ReadOnly": {},
    "NfsExports": {},
    "UserAndGroupQuotas": {}
  }
}
```

<h3 id="createvolume-parameters">Parameters</h3>

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
|body|body|[CreateVolumeRequest](#schemacreatevolumerequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» VolumeType|body|object|true|none|
|» Name|body|object|true|none|
|» OntapConfiguration|body|object|false|none|
|» » JunctionPath|body|object|false|none|
|» » SecurityStyle|body|object|false|none|
|» » SizeInMegabytes|body|object|true|none|
|» » StorageEfficiencyEnabled|body|object|false|none|
|» » StorageVirtualMachineId|body|object|true|none|
|» » TieringPolicy|body|[TieringPolicy](#schematieringpolicy)|false|<p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul>|
|» » OntapVolumeType|body|object|false|none|
|» » SnapshotPolicy|body|object|false|none|
|» » CopyTagsToBackups|body|object|false|none|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|» OpenZFSConfiguration|body|object|false|none|
|» » ParentVolumeId|body|object|true|none|
|» » StorageCapacityReservationGiB|body|object|false|none|
|» » StorageCapacityQuotaGiB|body|object|false|none|
|» » RecordSizeKiB|body|object|false|none|
|» » DataCompressionType|body|object|false|none|
|» » CopyTagsToSnapshots|body|object|false|none|
|» » OriginSnapshot|body|object|false|none|
|» » » SnapshotARN|body|[ResourceARN](#schemaresourcearn)|true|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|» » » CopyStrategy|body|object|true|none|
|» » ReadOnly|body|object|false|none|
|» » NfsExports|body|object|false|none|
|» » UserAndGroupQuotas|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateVolume|

> Example responses

> 200 Response

```json
{
  "Volume": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
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

<h3 id="createvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVolumeResponse](#schemacreatevolumeresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|MissingVolumeConfiguration|[MissingVolumeConfiguration](#schemamissingvolumeconfiguration)|
|485|485|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|486|486|StorageVirtualMachineNotFound|[StorageVirtualMachineNotFound](#schemastoragevirtualmachinenotfound)|
|487|487|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVolumeFromBackup

<a id="opIdCreateVolumeFromBackup"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.CreateVolumeFromBackup' \
  -d '{
    "BackupId": "stringstring",
    "ClientRequestToken": "string",
    "Name": {},
    "OntapConfiguration": {
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup`

Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.

> Body parameter

```json
{
  "BackupId": "stringstring",
  "ClientRequestToken": "string",
  "Name": {},
  "OntapConfiguration": {
    "JunctionPath": {},
    "SecurityStyle": {},
    "SizeInMegabytes": {},
    "StorageEfficiencyEnabled": {},
    "StorageVirtualMachineId": {},
    "TieringPolicy": {
      "CoolingPeriod": {},
      "Name": {}
    },
    "OntapVolumeType": {},
    "SnapshotPolicy": {},
    "CopyTagsToBackups": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createvolumefrombackup-parameters">Parameters</h3>

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
|body|body|[CreateVolumeFromBackupRequest](#schemacreatevolumefrombackuprequest)|true|none|
|» BackupId|body|[BackupId](#schemabackupid)|true|The ID of the source backup. Specifies the backup that you are copying.|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» Name|body|object|true|none|
|» OntapConfiguration|body|object|false|none|
|» » JunctionPath|body|object|false|none|
|» » SecurityStyle|body|object|false|none|
|» » SizeInMegabytes|body|object|true|none|
|» » StorageEfficiencyEnabled|body|object|false|none|
|» » StorageVirtualMachineId|body|object|true|none|
|» » TieringPolicy|body|[TieringPolicy](#schematieringpolicy)|false|<p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul>|
|» » OntapVolumeType|body|object|false|none|
|» » SnapshotPolicy|body|object|false|none|
|» » CopyTagsToBackups|body|object|false|none|
|» Tags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.CreateVolumeFromBackup|

> Example responses

> 200 Response

```json
{
  "Volume": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
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

<h3 id="createvolumefrombackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVolumeFromBackupResponse](#schemacreatevolumefrombackupresponse)|
|480|480|BackupNotFound|[BackupNotFound](#schemabackupnotfound)|
|481|481|BadRequest|[BadRequest](#schemabadrequest)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|MissingVolumeConfiguration|[MissingVolumeConfiguration](#schemamissingvolumeconfiguration)|
|486|486|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|487|487|StorageVirtualMachineNotFound|[StorageVirtualMachineNotFound](#schemastoragevirtualmachinenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackup

<a id="opIdDeleteBackup"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DeleteBackup' \
  -d '{
    "BackupId": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup`

<p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>

> Body parameter

```json
{
  "BackupId": {},
  "ClientRequestToken": {}
}
```

<h3 id="deletebackup-parameters">Parameters</h3>

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
|body|body|[DeleteBackupRequest](#schemadeletebackuprequest)|true|none|
|» BackupId|body|object|true|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DeleteBackup|

> Example responses

> 200 Response

```json
{
  "BackupId": "backup-03e3c82e0183b7b6b",
  "Lifecycle": "DELETED"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackupResponse](#schemadeletebackupresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|BackupInProgress|[BackupInProgress](#schemabackupinprogress)|
|482|482|BackupNotFound|[BackupNotFound](#schemabackupnotfound)|
|483|483|BackupRestoring|[BackupRestoring](#schemabackuprestoring)|
|484|484|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|
|486|486|BackupBeingCopied|[BackupBeingCopied](#schemabackupbeingcopied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataRepositoryAssociation

<a id="opIdDeleteDataRepositoryAssociation"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation' \
  -d '{
    "AssociationId": {},
    "ClientRequestToken": "string",
    "DeleteDataInFileSystem": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation`

Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

> Body parameter

```json
{
  "AssociationId": {},
  "ClientRequestToken": "string",
  "DeleteDataInFileSystem": {}
}
```

<h3 id="deletedatarepositoryassociation-parameters">Parameters</h3>

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
|body|body|[DeleteDataRepositoryAssociationRequest](#schemadeletedatarepositoryassociationrequest)|true|none|
|» AssociationId|body|object|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» DeleteDataInFileSystem|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation|

> Example responses

> 200 Response

```json
{
  "AssociationId": {},
  "Lifecycle": {},
  "DeleteDataInFileSystem": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletedatarepositoryassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDataRepositoryAssociationResponse](#schemadeletedatarepositoryassociationresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|DataRepositoryAssociationNotFound|[DataRepositoryAssociationNotFound](#schemadatarepositoryassociationnotfound)|
|483|483|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFileCache

<a id="opIdDeleteFileCache"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DeleteFileCache' \
  -d '{
    "FileCacheId": {},
    "ClientRequestToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache`

<p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can't be recovered by any means.</p> </important>

> Body parameter

```json
{
  "FileCacheId": {},
  "ClientRequestToken": "string"
}
```

<h3 id="deletefilecache-parameters">Parameters</h3>

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
|body|body|[DeleteFileCacheRequest](#schemadeletefilecacherequest)|true|none|
|» FileCacheId|body|object|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DeleteFileCache|

> Example responses

> 200 Response

```json
{
  "FileCacheId": {},
  "Lifecycle": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletefilecache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFileCacheResponse](#schemadeletefilecacheresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|FileCacheNotFound|[FileCacheNotFound](#schemafilecachenotfound)|
|483|483|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFileSystem

<a id="opIdDeleteFileSystem"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DeleteFileSystem' \
  -d '{
    "FileSystemId": {},
    "ClientRequestToken": {},
    "WindowsConfiguration": {
      "SkipFinalBackup": {},
      "FinalBackupTags": {}
    },
    "LustreConfiguration": {
      "SkipFinalBackup": {},
      "FinalBackupTags": {}
    },
    "OpenZFSConfiguration": {
      "SkipFinalBackup": {},
      "FinalBackupTags": {},
      "Options": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem`

<p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>

> Body parameter

```json
{
  "FileSystemId": {},
  "ClientRequestToken": {},
  "WindowsConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": {}
  },
  "LustreConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": {}
  },
  "OpenZFSConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": {},
    "Options": {}
  }
}
```

<h3 id="deletefilesystem-parameters">Parameters</h3>

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
|body|body|[DeleteFileSystemRequest](#schemadeletefilesystemrequest)|true|none|
|» FileSystemId|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» WindowsConfiguration|body|[DeleteFileSystemWindowsConfiguration](#schemadeletefilesystemwindowsconfiguration)|false|The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.|
|» LustreConfiguration|body|[DeleteFileSystemLustreConfiguration](#schemadeletefilesystemlustreconfiguration)|false|The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.|
|» OpenZFSConfiguration|body|object|false|none|
|» » SkipFinalBackup|body|object|false|none|
|» » FinalBackupTags|body|object|false|none|
|» » Options|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DeleteFileSystem|

> Example responses

> 200 Response

```json
{
  "FileSystemId": "fs-0498eed5fe91001ec",
  "Lifecycle": "DELETING"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletefilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFileSystemResponse](#schemadeletefilesystemresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSnapshot

<a id="opIdDeleteSnapshot"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DeleteSnapshot' \
  -d '{
    "ClientRequestToken": "string",
    "SnapshotId": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot`

<p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "SnapshotId": {}
}
```

<h3 id="deletesnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteSnapshotRequest](#schemadeletesnapshotrequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» SnapshotId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DeleteSnapshot|

> Example responses

> 200 Response

```json
{
  "SnapshotId": {},
  "Lifecycle": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="deletesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSnapshotResponse](#schemadeletesnapshotresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|SnapshotNotFound|[SnapshotNotFound](#schemasnapshotnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStorageVirtualMachine

<a id="opIdDeleteStorageVirtualMachine"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine' \
  -d '{
    "ClientRequestToken": "string",
    "StorageVirtualMachineId": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine`

Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "StorageVirtualMachineId": {}
}
```

<h3 id="deletestoragevirtualmachine-parameters">Parameters</h3>

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
|body|body|[DeleteStorageVirtualMachineRequest](#schemadeletestoragevirtualmachinerequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» StorageVirtualMachineId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine|

> Example responses

> 200 Response

```json
{
  "StorageVirtualMachineId": {},
  "Lifecycle": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deletestoragevirtualmachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStorageVirtualMachineResponse](#schemadeletestoragevirtualmachineresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|StorageVirtualMachineNotFound|[StorageVirtualMachineNotFound](#schemastoragevirtualmachinenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVolume

<a id="opIdDeleteVolume"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DeleteVolume' \
  -d '{
    "ClientRequestToken": "string",
    "VolumeId": {},
    "OntapConfiguration": {
      "SkipFinalBackup": {},
      "FinalBackupTags": [
        {
          "Key": {},
          "Value": {}
        }
      ]
    },
    "OpenZFSConfiguration": {
      "Options": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume`

Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "VolumeId": {},
  "OntapConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  },
  "OpenZFSConfiguration": {
    "Options": {}
  }
}
```

<h3 id="deletevolume-parameters">Parameters</h3>

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
|body|body|[DeleteVolumeRequest](#schemadeletevolumerequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» VolumeId|body|object|true|none|
|» OntapConfiguration|body|object|false|none|
|» » SkipFinalBackup|body|object|false|none|
|» » FinalBackupTags|body|[Tags](#schematags)|false|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|» OpenZFSConfiguration|body|object|false|none|
|» » Options|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DeleteVolume|

> Example responses

> 200 Response

```json
{
  "VolumeId": {},
  "Lifecycle": {},
  "OntapResponse": {
    "FinalBackupId": "stringstring",
    "FinalBackupTags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
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

<h3 id="deletevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVolumeResponse](#schemadeletevolumeresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|VolumeNotFound|[VolumeNotFound](#schemavolumenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBackups

<a id="opIdDescribeBackups"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeBackups' \
  -d '{
    "BackupIds": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups`

<p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

> Body parameter

```json
{
  "BackupIds": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describebackups-parameters">Parameters</h3>

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
|body|body|[DescribeBackupsRequest](#schemadescribebackupsrequest)|true|none|
|» BackupIds|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeBackups|

> Example responses

> 200 Response

```json
{
  "Backups": [
    {
      "BackupId": "backup-03e3c82e0183b7b6b",
      "CreationTime": "1481841524.0",
      "FileSystem": {
        "FileSystemId": "fs-0498eed5fe91001ec",
        "OwnerId": 12345678912,
        "StorageCapacity": 300,
        "WindowsConfiguration": {
          "ActiveDirectoryId": "d-1234abcd12",
          "AutomaticBackupRetentionDays": 30,
          "DailyAutomaticBackupStartTime": "05:00",
          "WeeklyMaintenanceStartTime": "1:05:00"
        }
      },
      "Lifecycle": "AVAILABLE",
      "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
      "Tags": [
        {
          "Key": "Name",
          "Value": "MyBackup"
        }
      ],
      "Type": "USER_INITIATED"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="describebackups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBackupsResponse](#schemadescribebackupsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|VolumeNotFound|[VolumeNotFound](#schemavolumenotfound)|
|483|483|BackupNotFound|[BackupNotFound](#schemabackupnotfound)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataRepositoryAssociations

<a id="opIdDescribeDataRepositoryAssociations"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations' \
  -d '{
    "AssociationIds": {},
    "Filters": [
      {
        "Name": {},
        "Values": {}
      }
    ],
    "MaxResults": {},
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations`

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

> Body parameter

```json
{
  "AssociationIds": {},
  "Filters": [
    {
      "Name": {},
      "Values": {}
    }
  ],
  "MaxResults": {},
  "NextToken": "string"
}
```

<h3 id="describedatarepositoryassociations-parameters">Parameters</h3>

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
|body|body|[DescribeDataRepositoryAssociationsRequest](#schemadescribedatarepositoryassociationsrequest)|true|none|
|» AssociationIds|body|object|false|none|
|» Filters|body|[Filters](#schemafilters)|false|A list of <code>Filter</code> elements.|
|» MaxResults|body|object|false|none|
|» NextToken|body|[NextToken](#schemanexttoken)|false|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations|

> Example responses

> 200 Response

```json
{
  "Associations": {},
  "NextToken": "string"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="describedatarepositoryassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDataRepositoryAssociationsResponse](#schemadescribedatarepositoryassociationsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|DataRepositoryAssociationNotFound|[DataRepositoryAssociationNotFound](#schemadatarepositoryassociationnotfound)|
|483|483|InvalidDataRepositoryType|[InvalidDataRepositoryType](#schemainvaliddatarepositorytype)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataRepositoryTasks

<a id="opIdDescribeDataRepositoryTasks"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks' \
  -d '{
    "TaskIds": {},
    "Filters": {},
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks`

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

> Body parameter

```json
{
  "TaskIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describedatarepositorytasks-parameters">Parameters</h3>

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
|body|body|[DescribeDataRepositoryTasksRequest](#schemadescribedatarepositorytasksrequest)|true|none|
|» TaskIds|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|» NextToken|body|[NextToken](#schemanexttoken)|false|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks|

> Example responses

> 200 Response

```json
{
  "DataRepositoryTasks": {},
  "NextToken": "string"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describedatarepositorytasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDataRepositoryTasksResponse](#schemadescribedatarepositorytasksresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|DataRepositoryTaskNotFound|[DataRepositoryTaskNotFound](#schemadatarepositorytasknotfound)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFileCaches

<a id="opIdDescribeFileCaches"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeFileCaches' \
  -d '{
    "FileCacheIds": {},
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches`

<p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

> Body parameter

```json
{
  "FileCacheIds": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describefilecaches-parameters">Parameters</h3>

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
|body|body|[DescribeFileCachesRequest](#schemadescribefilecachesrequest)|true|none|
|» FileCacheIds|body|object|false|none|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|» NextToken|body|[NextToken](#schemanexttoken)|false|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeFileCaches|

> Example responses

> 200 Response

```json
{
  "FileCaches": {},
  "NextToken": "string"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describefilecaches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFileCachesResponse](#schemadescribefilecachesresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileCacheNotFound|[FileCacheNotFound](#schemafilecachenotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFileSystemAliases

<a id="opIdDescribeFileSystemAliases"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeFileSystemAliases' \
  -d '{
    "ClientRequestToken": "string",
    "FileSystemId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases`

Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "FileSystemId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describefilesystemaliases-parameters">Parameters</h3>

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
|body|body|[DescribeFileSystemAliasesRequest](#schemadescribefilesystemaliasesrequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» FileSystemId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeFileSystemAliases|

> Example responses

> 200 Response

```json
{
  "Aliases": {},
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

<h3 id="describefilesystemaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFileSystemAliasesResponse](#schemadescribefilesystemaliasesresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFileSystems

<a id="opIdDescribeFileSystems"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeFileSystems' \
  -d '{
    "FileSystemIds": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems`

<p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

> Body parameter

```json
{
  "FileSystemIds": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describefilesystems-parameters">Parameters</h3>

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
|body|body|[DescribeFileSystemsRequest](#schemadescribefilesystemsrequest)|true|none|
|» FileSystemIds|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeFileSystems|

> Example responses

> 200 Response

```json
{
  "FileSystems": [
    {
      "CreationTime": "1481841524.0",
      "DNSName": "fs-0498eed5fe91001ec.fsx.com",
      "FileSystemId": "fs-0498eed5fe91001ec",
      "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
      "Lifecycle": "AVAILABLE",
      "NetworkInterfaceIds": [
        "eni-abcd1234"
      ],
      "OwnerId": 12345678912,
      "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
      "StorageCapacity": 300,
      "SubnetIds": [
        "subnet-1234abcd"
      ],
      "Tags": [
        {
          "Key": "Name",
          "Value": "MyFileSystem"
        }
      ],
      "VpcId": "vpc-ab1234cd",
      "WindowsConfiguration": {
        "ActiveDirectoryId": "d-1234abcd12",
        "AutomaticBackupRetentionDays": 30,
        "DailyAutomaticBackupStartTime": "05:00",
        "ThroughputCapacity": 8,
        "WeeklyMaintenanceStartTime": "1:05:00"
      }
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describefilesystems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFileSystemsResponse](#schemadescribefilesystemsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSnapshots

<a id="opIdDescribeSnapshots"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeSnapshots' \
  -d '{
    "SnapshotIds": {},
    "Filters": {},
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots`

<p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>

> Body parameter

```json
{
  "SnapshotIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describesnapshots-parameters">Parameters</h3>

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
|body|body|[DescribeSnapshotsRequest](#schemadescribesnapshotsrequest)|true|none|
|» SnapshotIds|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|» NextToken|body|[NextToken](#schemanexttoken)|false|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeSnapshots|

> Example responses

> 200 Response

```json
{
  "Snapshots": {},
  "NextToken": "string"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSnapshotsResponse](#schemadescribesnapshotsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|SnapshotNotFound|[SnapshotNotFound](#schemasnapshotnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStorageVirtualMachines

<a id="opIdDescribeStorageVirtualMachines"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines' \
  -d '{
    "StorageVirtualMachineIds": {},
    "Filters": {},
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines`

Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).

> Body parameter

```json
{
  "StorageVirtualMachineIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describestoragevirtualmachines-parameters">Parameters</h3>

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
|body|body|[DescribeStorageVirtualMachinesRequest](#schemadescribestoragevirtualmachinesrequest)|true|none|
|» StorageVirtualMachineIds|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|» NextToken|body|[NextToken](#schemanexttoken)|false|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines|

> Example responses

> 200 Response

```json
{
  "StorageVirtualMachines": {},
  "NextToken": "string"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describestoragevirtualmachines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStorageVirtualMachinesResponse](#schemadescribestoragevirtualmachinesresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|StorageVirtualMachineNotFound|[StorageVirtualMachineNotFound](#schemastoragevirtualmachinenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVolumes

<a id="opIdDescribeVolumes"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DescribeVolumes' \
  -d '{
    "VolumeIds": {},
    "Filters": {},
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes`

Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.

> Body parameter

```json
{
  "VolumeIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describevolumes-parameters">Parameters</h3>

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
|body|body|[DescribeVolumesRequest](#schemadescribevolumesrequest)|true|none|
|» VolumeIds|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|» NextToken|body|[NextToken](#schemanexttoken)|false|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DescribeVolumes|

> Example responses

> 200 Response

```json
{
  "Volumes": {},
  "NextToken": "string"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describevolumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVolumesResponse](#schemadescribevolumesresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|VolumeNotFound|[VolumeNotFound](#schemavolumenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFileSystemAliases

<a id="opIdDisassociateFileSystemAliases"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases' \
  -d '{
    "ClientRequestToken": "string",
    "FileSystemId": {},
    "Aliases": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases`

<p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "FileSystemId": {},
  "Aliases": {}
}
```

<h3 id="disassociatefilesystemaliases-parameters">Parameters</h3>

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
|body|body|[DisassociateFileSystemAliasesRequest](#schemadisassociatefilesystemaliasesrequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» FileSystemId|body|object|true|none|
|» Aliases|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases|

> Example responses

> 200 Response

```json
{
  "Aliases": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="disassociatefilesystemaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFileSystemAliasesResponse](#schemadisassociatefilesystemaliasesresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.ListTagsForResource' \
  -d '{
    "ResourceARN": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource`

<p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

> Body parameter

```json
{
  "ResourceARN": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": [
    {
      "Key": "Name",
      "Value": "MyFileSystem"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|483|483|NotServiceResourceError|[NotServiceResourceError](#schemanotserviceresourceerror)|
|484|484|ResourceDoesNotSupportTagging|[ResourceDoesNotSupportTagging](#schemaresourcedoesnotsupporttagging)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReleaseFileSystemNfsV3Locks

<a id="opIdReleaseFileSystemNfsV3Locks"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks' \
  -d '{
    "FileSystemId": "stringstrin",
    "ClientRequestToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks`

Releases the file system lock from an Amazon FSx for OpenZFS file system.

> Body parameter

```json
{
  "FileSystemId": "stringstrin",
  "ClientRequestToken": "string"
}
```

<h3 id="releasefilesystemnfsv3locks-parameters">Parameters</h3>

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
|body|body|[ReleaseFileSystemNfsV3LocksRequest](#schemareleasefilesystemnfsv3locksrequest)|true|none|
|» FileSystemId|body|[FileSystemId](#schemafilesystemid)|true|The globally unique ID of the file system, assigned by Amazon FSx.|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks|

> Example responses

> 200 Response

```json
{
  "FileSystem": {
    "OwnerId": {},
    "CreationTime": {},
    "FileSystemId": {},
    "FileSystemType": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "StorageType": {},
    "VpcId": {},
    "SubnetIds": {},
    "NetworkInterfaceIds": {},
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": {},
    "Tags": {},
    "WindowsConfiguration": {
      "ActiveDirectoryId": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      },
      "DeploymentType": {},
      "RemoteAdministrationEndpoint": {},
      "PreferredSubnetId": {},
      "PreferredFileServerIp": {},
      "ThroughputCapacity": {},
      "MaintenanceOperationsInProgress": {},
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "CopyTagsToBackups": {},
      "Aliases": [
        {
          "Name": {},
          "Lifecycle": {}
        }
      ],
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "DataRepositoryConfiguration": {
        "Lifecycle": {},
        "ImportPath": {},
        "ExportPath": {},
        "ImportedFileChunkSize": {},
        "AutoImportPolicy": {},
        "FailureDetails": {
          "Message": "string"
        }
      },
      "DeploymentType": {},
      "PerUnitStorageThroughput": {},
      "MountName": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "DriveCacheType": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "AdministrativeActions": {},
    "OntapConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "EndpointIpAddressRange": {},
      "Endpoints": {
        "Intercluster": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        },
        "Management": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        }
      },
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "PreferredSubnetId": "stringstringstr",
      "RouteTableIds": {},
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "strings"
    },
    "FileSystemTypeVersion": {},
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "RootVolumeId": {}
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

<h3 id="releasefilesystemnfsv3locks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReleaseFileSystemNfsV3LocksResponse](#schemareleasefilesystemnfsv3locksresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreVolumeFromSnapshot

<a id="opIdRestoreVolumeFromSnapshot"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot' \
  -d '{
    "ClientRequestToken": "string",
    "VolumeId": {},
    "SnapshotId": {},
    "Options": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot`

Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "VolumeId": {},
  "SnapshotId": {},
  "Options": {}
}
```

<h3 id="restorevolumefromsnapshot-parameters">Parameters</h3>

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
|body|body|[RestoreVolumeFromSnapshotRequest](#schemarestorevolumefromsnapshotrequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» VolumeId|body|object|true|none|
|» SnapshotId|body|object|true|none|
|» Options|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot|

> Example responses

> 200 Response

```json
{
  "VolumeId": {},
  "Lifecycle": {},
  "AdministrativeActions": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="restorevolumefromsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreVolumeFromSnapshotResponse](#schemarestorevolumefromsnapshotresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|VolumeNotFound|[VolumeNotFound](#schemavolumenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource`

Tags an Amazon FSx resource.

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
|X-Amz-Target|AWSSimbaAPIService_v20180301.TagResource|

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
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|483|483|NotServiceResourceError|[NotServiceResourceError](#schemanotserviceresourceerror)|
|484|484|ResourceDoesNotSupportTagging|[ResourceDoesNotSupportTagging](#schemaresourcedoesnotsupporttagging)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource`

This action removes a tag from an Amazon FSx resource.

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
|X-Amz-Target|AWSSimbaAPIService_v20180301.UntagResource|

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
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|483|483|NotServiceResourceError|[NotServiceResourceError](#schemanotserviceresourceerror)|
|484|484|ResourceDoesNotSupportTagging|[ResourceDoesNotSupportTagging](#schemaresourcedoesnotsupporttagging)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataRepositoryAssociation

<a id="opIdUpdateDataRepositoryAssociation"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation' \
  -d '{
    "AssociationId": {},
    "ClientRequestToken": "string",
    "ImportedFileChunkSize": {},
    "S3": {
      "AutoImportPolicy": {
        "Events": {}
      },
      "AutoExportPolicy": {
        "Events": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation`

Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

> Body parameter

```json
{
  "AssociationId": {},
  "ClientRequestToken": "string",
  "ImportedFileChunkSize": {},
  "S3": {
    "AutoImportPolicy": {
      "Events": {}
    },
    "AutoExportPolicy": {
      "Events": {}
    }
  }
}
```

<h3 id="updatedatarepositoryassociation-parameters">Parameters</h3>

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
|body|body|[UpdateDataRepositoryAssociationRequest](#schemaupdatedatarepositoryassociationrequest)|true|none|
|» AssociationId|body|object|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» ImportedFileChunkSize|body|object|false|none|
|» S3|body|object|false|none|
|» » AutoImportPolicy|body|object|false|none|
|» » » Events|body|object|false|none|
|» » AutoExportPolicy|body|object|false|none|
|» » » Events|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation|

> Example responses

> 200 Response

```json
{
  "Association": {
    "AssociationId": {},
    "ResourceARN": "stringst",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "FailureDetails": {
      "Message": "string"
    },
    "FileSystemPath": {},
    "DataRepositoryPath": {},
    "BatchImportMetaDataOnCreate": {},
    "ImportedFileChunkSize": {},
    "S3": {
      "AutoImportPolicy": {
        "Events": {}
      },
      "AutoExportPolicy": {
        "Events": {}
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCachePath": {},
    "DataRepositorySubdirectories": {},
    "NFS": {
      "Version": {},
      "DnsIps": {},
      "AutoExportPolicy": {
        "Events": {}
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

<h3 id="updatedatarepositoryassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataRepositoryAssociationResponse](#schemaupdatedatarepositoryassociationresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|DataRepositoryAssociationNotFound|[DataRepositoryAssociationNotFound](#schemadatarepositoryassociationnotfound)|
|483|483|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFileCache

<a id="opIdUpdateFileCache"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.UpdateFileCache' \
  -d '{
    "FileCacheId": {},
    "ClientRequestToken": "string",
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": "strings"
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache`

Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.

> Body parameter

```json
{
  "FileCacheId": {},
  "ClientRequestToken": "string",
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": "strings"
  }
}
```

<h3 id="updatefilecache-parameters">Parameters</h3>

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
|body|body|[UpdateFileCacheRequest](#schemaupdatefilecacherequest)|true|none|
|» FileCacheId|body|object|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» LustreConfiguration|body|object|false|none|
|» » WeeklyMaintenanceStartTime|body|[WeeklyTime](#schemaweeklytime)|false|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.UpdateFileCache|

> Example responses

> 200 Response

```json
{
  "FileCache": {
    "OwnerId": "stringstring",
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCacheType": {},
    "FileCacheTypeVersion": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "VpcId": "stringstring",
    "SubnetIds": [
      "stringstringstr"
    ],
    "NetworkInterfaceIds": [
      "stringstring"
    ],
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": "stringst",
    "LustreConfiguration": {
      "PerUnitStorageThroughput": {},
      "DeploymentType": {},
      "MountName": {},
      "WeeklyMaintenanceStartTime": "strings",
      "MetadataConfiguration": {
        "StorageCapacity": {}
      },
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      }
    },
    "DataRepositoryAssociationIds": {}
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

<h3 id="updatefilecache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFileCacheResponse](#schemaupdatefilecacheresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|
|482|482|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|FileCacheNotFound|[FileCacheNotFound](#schemafilecachenotfound)|
|485|485|MissingFileCacheConfiguration|[MissingFileCacheConfiguration](#schemamissingfilecacheconfiguration)|
|486|486|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFileSystem

<a id="opIdUpdateFileSystem"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.UpdateFileSystem' \
  -d '{
    "FileSystemId": {},
    "ClientRequestToken": {},
    "StorageCapacity": {},
    "WindowsConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "ThroughputCapacity": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "UserName": {},
        "Password": {},
        "DnsIps": {}
      },
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "AutoImportPolicy": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "OntapConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "DailyAutomaticBackupStartTime": "strin",
      "FsxAdminPassword": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "ThroughputCapacity": {},
      "AddRouteTableIds": {},
      "RemoveRouteTableIds": {}
    },
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem`

<p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>

> Body parameter

```json
{
  "FileSystemId": {},
  "ClientRequestToken": {},
  "StorageCapacity": {},
  "WindowsConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": {},
    "AutomaticBackupRetentionDays": {},
    "ThroughputCapacity": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    },
    "AuditLogConfiguration": {
      "FileAccessAuditLogLevel": {},
      "FileShareAccessAuditLogLevel": {},
      "AuditLogDestination": {}
    }
  },
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": "strin",
    "AutomaticBackupRetentionDays": 0,
    "AutoImportPolicy": {},
    "DataCompressionType": {},
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    },
    "RootSquashConfiguration": {
      "RootSquash": {},
      "NoSquashNids": {}
    }
  },
  "OntapConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "DailyAutomaticBackupStartTime": "strin",
    "FsxAdminPassword": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "ThroughputCapacity": {},
    "AddRouteTableIds": {},
    "RemoveRouteTableIds": {}
  },
  "OpenZFSConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "CopyTagsToVolumes": {},
    "DailyAutomaticBackupStartTime": "strin",
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    }
  }
}
```

<h3 id="updatefilesystem-parameters">Parameters</h3>

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
|body|body|[UpdateFileSystemRequest](#schemaupdatefilesystemrequest)|true|none|
|» FileSystemId|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» StorageCapacity|body|object|false|none|
|» WindowsConfiguration|body|object|false|none|
|» » WeeklyMaintenanceStartTime|body|object|false|none|
|» » DailyAutomaticBackupStartTime|body|object|false|none|
|» » AutomaticBackupRetentionDays|body|object|false|none|
|» » ThroughputCapacity|body|object|false|none|
|» » SelfManagedActiveDirectoryConfiguration|body|object|false|none|
|» » » UserName|body|object|false|none|
|» » » Password|body|object|false|none|
|» » » DnsIps|body|object|false|none|
|» » AuditLogConfiguration|body|object|false|none|
|» » » FileAccessAuditLogLevel|body|object|true|none|
|» » » FileShareAccessAuditLogLevel|body|object|true|none|
|» » » AuditLogDestination|body|object|false|none|
|» LustreConfiguration|body|[UpdateFileSystemLustreConfiguration](#schemaupdatefilesystemlustreconfiguration)|false|The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.|
|» OntapConfiguration|body|[UpdateFileSystemOntapConfiguration](#schemaupdatefilesystemontapconfiguration)|false|The configuration updates for an Amazon FSx for NetApp ONTAP file system.|
|» OpenZFSConfiguration|body|object|false|none|
|» » AutomaticBackupRetentionDays|body|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|» » CopyTagsToBackups|body|object|false|none|
|» » CopyTagsToVolumes|body|object|false|none|
|» » DailyAutomaticBackupStartTime|body|[DailyTime](#schemadailytime)|false|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|» » ThroughputCapacity|body|object|false|none|
|» » WeeklyMaintenanceStartTime|body|[WeeklyTime](#schemaweeklytime)|false|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|» » DiskIopsConfiguration|body|[DiskIopsConfiguration](#schemadiskiopsconfiguration)|false|The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.UpdateFileSystem|

> Example responses

> 200 Response

```json
{
  "FileSystem": {
    "CreationTime": "1481841524.0",
    "DNSName": "fs-0498eed5fe91001ec.fsx.com",
    "FileSystemId": "fs-0498eed5fe91001ec",
    "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
    "Lifecycle": "AVAILABLE",
    "OwnerId": 12345678912,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
    "StorageCapacity": 300,
    "SubnetIds": [
      "subnet-1234abcd"
    ],
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyFileSystem"
      }
    ],
    "VpcId": "vpc-ab1234cd",
    "WindowsConfiguration": {
      "AutomaticBackupRetentionDays": 10,
      "DailyAutomaticBackupStartTime": "06:00",
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "3:06:00"
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

<h3 id="updatefilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFileSystemResponse](#schemaupdatefilesystemresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|
|482|482|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|483|483|InvalidNetworkSettings|[InvalidNetworkSettings](#schemainvalidnetworksettings)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|486|486|MissingFileSystemConfiguration|[MissingFileSystemConfiguration](#schemamissingfilesystemconfiguration)|
|487|487|ServiceLimitExceeded|[ServiceLimitExceeded](#schemaservicelimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSnapshot

<a id="opIdUpdateSnapshot"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.UpdateSnapshot' \
  -d '{
    "ClientRequestToken": "string",
    "Name": {},
    "SnapshotId": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot`

Updates the name of an Amazon FSx for OpenZFS snapshot.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "Name": {},
  "SnapshotId": {}
}
```

<h3 id="updatesnapshot-parameters">Parameters</h3>

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
|body|body|[UpdateSnapshotRequest](#schemaupdatesnapshotrequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» Name|body|object|true|none|
|» SnapshotId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.UpdateSnapshot|

> Example responses

> 200 Response

```json
{
  "Snapshot": {
    "ResourceARN": "stringst",
    "SnapshotId": {},
    "Name": {},
    "VolumeId": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "Lifecycle": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "AdministrativeActions": {}
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

<h3 id="updatesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSnapshotResponse](#schemaupdatesnapshotresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|SnapshotNotFound|[SnapshotNotFound](#schemasnapshotnotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStorageVirtualMachine

<a id="opIdUpdateStorageVirtualMachine"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine' \
  -d '{
    "ActiveDirectoryConfiguration": {
      "SelfManagedActiveDirectoryConfiguration": {
        "UserName": {},
        "Password": {},
        "DnsIps": {}
      }
    },
    "ClientRequestToken": "string",
    "StorageVirtualMachineId": {},
    "SvmAdminPassword": {}
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine`

Updates an Amazon FSx for ONTAP storage virtual machine (SVM).

> Body parameter

```json
{
  "ActiveDirectoryConfiguration": {
    "SelfManagedActiveDirectoryConfiguration": {
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    }
  },
  "ClientRequestToken": "string",
  "StorageVirtualMachineId": {},
  "SvmAdminPassword": {}
}
```

<h3 id="updatestoragevirtualmachine-parameters">Parameters</h3>

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
|body|body|[UpdateStorageVirtualMachineRequest](#schemaupdatestoragevirtualmachinerequest)|true|none|
|» ActiveDirectoryConfiguration|body|object|false|none|
|» » SelfManagedActiveDirectoryConfiguration|body|[SelfManagedActiveDirectoryConfigurationUpdates](#schemaselfmanagedactivedirectoryconfigurationupdates)|false|The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» StorageVirtualMachineId|body|object|true|none|
|» SvmAdminPassword|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine|

> Example responses

> 200 Response

```json
{
  "StorageVirtualMachine": {
    "ActiveDirectoryConfiguration": {
      "NetBiosName": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      }
    },
    "CreationTime": "1970-01-01T00:00:00Z",
    "Endpoints": {
      "Iscsi": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Management": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Nfs": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Smb": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      }
    },
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "ResourceARN": "stringst",
    "StorageVirtualMachineId": {},
    "Subtype": {},
    "UUID": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "RootVolumeSecurityStyle": {}
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

<h3 id="updatestoragevirtualmachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStorageVirtualMachineResponse](#schemaupdatestoragevirtualmachineresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|StorageVirtualMachineNotFound|[StorageVirtualMachineNotFound](#schemastoragevirtualmachinenotfound)|
|484|484|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVolume

<a id="opIdUpdateVolume"></a>

> Code samples

```bash
curl 'https://fsx.us-east-1.amazonaws.com/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSimbaAPIService_v20180301.UpdateVolume' \
  -d '{
    "ClientRequestToken": "string",
    "VolumeId": {},
    "OntapConfiguration": {
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "Name": {},
    "OpenZFSConfiguration": {
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "ReadOnly": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume`

Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

> Body parameter

```json
{
  "ClientRequestToken": "string",
  "VolumeId": {},
  "OntapConfiguration": {
    "JunctionPath": {},
    "SecurityStyle": {},
    "SizeInMegabytes": {},
    "StorageEfficiencyEnabled": {},
    "TieringPolicy": {
      "CoolingPeriod": {},
      "Name": {}
    },
    "SnapshotPolicy": {},
    "CopyTagsToBackups": {}
  },
  "Name": {},
  "OpenZFSConfiguration": {
    "StorageCapacityReservationGiB": {},
    "StorageCapacityQuotaGiB": {},
    "RecordSizeKiB": {},
    "DataCompressionType": {},
    "NfsExports": {},
    "UserAndGroupQuotas": {},
    "ReadOnly": {}
  }
}
```

<h3 id="updatevolume-parameters">Parameters</h3>

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
|body|body|[UpdateVolumeRequest](#schemaupdatevolumerequest)|true|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|false|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|» VolumeId|body|object|true|none|
|» OntapConfiguration|body|object|false|none|
|» » JunctionPath|body|object|false|none|
|» » SecurityStyle|body|object|false|none|
|» » SizeInMegabytes|body|object|false|none|
|» » StorageEfficiencyEnabled|body|object|false|none|
|» » TieringPolicy|body|object|false|none|
|» » » CoolingPeriod|body|object|false|none|
|» » » Name|body|object|false|none|
|» » SnapshotPolicy|body|object|false|none|
|» » CopyTagsToBackups|body|object|false|none|
|» Name|body|object|false|none|
|» OpenZFSConfiguration|body|object|false|none|
|» » StorageCapacityReservationGiB|body|object|false|none|
|» » StorageCapacityQuotaGiB|body|object|false|none|
|» » RecordSizeKiB|body|object|false|none|
|» » DataCompressionType|body|object|false|none|
|» » NfsExports|body|object|false|none|
|» » UserAndGroupQuotas|body|object|false|none|
|» » ReadOnly|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSimbaAPIService_v20180301.UpdateVolume|

> Example responses

> 200 Response

```json
{
  "Volume": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
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

<h3 id="updatevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVolumeResponse](#schemaupdatevolumeresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncompatibleParameterError|[IncompatibleParameterError](#schemaincompatibleparametererror)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|MissingVolumeConfiguration|[MissingVolumeConfiguration](#schemamissingvolumeconfiguration)|
|484|484|VolumeNotFound|[VolumeNotFound](#schemavolumenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateFileSystemAliasesResponse">AssociateFileSystemAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefilesystemaliasesresponse"></a>
<a id="schema_AssociateFileSystemAliasesResponse"></a>
<a id="tocSassociatefilesystemaliasesresponse"></a>
<a id="tocsassociatefilesystemaliasesresponse"></a>

```json
{
  "Aliases": {}
}
```

The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Aliases|object|false|none|none|

<h2 id="tocS_AssociateFileSystemAliasesRequest">AssociateFileSystemAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefilesystemaliasesrequest"></a>
<a id="schema_AssociateFileSystemAliasesRequest"></a>
<a id="tocSassociatefilesystemaliasesrequest"></a>
<a id="tocsassociatefilesystemaliasesrequest"></a>

```json
{
  "ClientRequestToken": "string",
  "FileSystemId": {},
  "Aliases": {}
}
```

The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|FileSystemId|object|true|none|none|
|Aliases|object|true|none|none|

<h2 id="tocS_BadRequest">BadRequest</h2>
<!-- backwards compatibility -->
<a id="schemabadrequest"></a>
<a id="schema_BadRequest"></a>
<a id="tocSbadrequest"></a>
<a id="tocsbadrequest"></a>

```json
null
```

<h2 id="tocS_FileSystemNotFound">FileSystemNotFound</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemnotfound"></a>
<a id="schema_FileSystemNotFound"></a>
<a id="tocSfilesystemnotfound"></a>
<a id="tocsfilesystemnotfound"></a>

```json
null
```

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_CancelDataRepositoryTaskResponse">CancelDataRepositoryTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceldatarepositorytaskresponse"></a>
<a id="schema_CancelDataRepositoryTaskResponse"></a>
<a id="tocScanceldatarepositorytaskresponse"></a>
<a id="tocscanceldatarepositorytaskresponse"></a>

```json
{
  "Lifecycle": {},
  "TaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lifecycle|object|false|none|none|
|TaskId|object|false|none|none|

<h2 id="tocS_CancelDataRepositoryTaskRequest">CancelDataRepositoryTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceldatarepositorytaskrequest"></a>
<a id="schema_CancelDataRepositoryTaskRequest"></a>
<a id="tocScanceldatarepositorytaskrequest"></a>
<a id="tocscanceldatarepositorytaskrequest"></a>

```json
{
  "TaskId": {}
}
```

Cancels a data repository task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskId|object|true|none|none|

<h2 id="tocS_UnsupportedOperation">UnsupportedOperation</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperation"></a>
<a id="schema_UnsupportedOperation"></a>
<a id="tocSunsupportedoperation"></a>
<a id="tocsunsupportedoperation"></a>

```json
null
```

<h2 id="tocS_DataRepositoryTaskNotFound">DataRepositoryTaskNotFound</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytasknotfound"></a>
<a id="schema_DataRepositoryTaskNotFound"></a>
<a id="tocSdatarepositorytasknotfound"></a>
<a id="tocsdatarepositorytasknotfound"></a>

```json
null
```

<h2 id="tocS_DataRepositoryTaskEnded">DataRepositoryTaskEnded</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskended"></a>
<a id="schema_DataRepositoryTaskEnded"></a>
<a id="tocSdatarepositorytaskended"></a>
<a id="tocsdatarepositorytaskended"></a>

```json
null
```

<h2 id="tocS_CopyBackupResponse">CopyBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacopybackupresponse"></a>
<a id="schema_CopyBackupResponse"></a>
<a id="tocScopybackupresponse"></a>
<a id="tocscopybackupresponse"></a>

```json
{
  "Backup": {
    "BackupId": "backup-0a3364eded1014b28",
    "CreationTime": 1617954808.068,
    "FileSystem": {
      "FileSystemId": "fs-0498eed5fe91001ec",
      "FileSystemType": "LUSTRE",
      "LustreConfiguration": {
        "AutomaticBackupRetentionDays": 0,
        "DeploymentType": "PERSISTENT_1",
        "PerUnitStorageThroughput": 50,
        "WeeklyMaintenanceStartTime": "1:05:00"
      },
      "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0f5179e395f597e66",
      "StorageCapacity": 2400,
      "StorageType": "SSD"
    },
    "KmsKeyId": "arn:aws:fsx:us-east-1:012345678912:key/d1234e22-543a-12b7-a98f-e12c2b54001a",
    "Lifecycle": "COPYING",
    "OwnerId": "123456789012",
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-0a3364eded1014b28",
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyBackup"
      }
    ],
    "Type": "USER_INITIATED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Backup|[Backup](#schemabackup)|false|none|A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.|

<h2 id="tocS_CopyBackupRequest">CopyBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopybackuprequest"></a>
<a id="schema_CopyBackupRequest"></a>
<a id="tocScopybackuprequest"></a>
<a id="tocscopybackuprequest"></a>

```json
{
  "ClientRequestToken": "string",
  "SourceBackupId": {},
  "SourceRegion": {},
  "KmsKeyId": "string",
  "CopyTags": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|SourceBackupId|object|true|none|none|
|SourceRegion|object|false|none|none|
|KmsKeyId|[KmsKeyId](#schemakmskeyid)|false|none|<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>|
|CopyTags|object|false|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|

<h2 id="tocS_BackupNotFound">BackupNotFound</h2>
<!-- backwards compatibility -->
<a id="schemabackupnotfound"></a>
<a id="schema_BackupNotFound"></a>
<a id="tocSbackupnotfound"></a>
<a id="tocsbackupnotfound"></a>

```json
null
```

<h2 id="tocS_ServiceLimitExceeded">ServiceLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaservicelimitexceeded"></a>
<a id="schema_ServiceLimitExceeded"></a>
<a id="tocSservicelimitexceeded"></a>
<a id="tocsservicelimitexceeded"></a>

```json
null
```

<h2 id="tocS_IncompatibleParameterError">IncompatibleParameterError</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibleparametererror"></a>
<a id="schema_IncompatibleParameterError"></a>
<a id="tocSincompatibleparametererror"></a>
<a id="tocsincompatibleparametererror"></a>

```json
null
```

<h2 id="tocS_InvalidSourceKmsKey">InvalidSourceKmsKey</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsourcekmskey"></a>
<a id="schema_InvalidSourceKmsKey"></a>
<a id="tocSinvalidsourcekmskey"></a>
<a id="tocsinvalidsourcekmskey"></a>

```json
null
```

<h2 id="tocS_InvalidDestinationKmsKey">InvalidDestinationKmsKey</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddestinationkmskey"></a>
<a id="schema_InvalidDestinationKmsKey"></a>
<a id="tocSinvaliddestinationkmskey"></a>
<a id="tocsinvaliddestinationkmskey"></a>

```json
null
```

<h2 id="tocS_InvalidRegion">InvalidRegion</h2>
<!-- backwards compatibility -->
<a id="schemainvalidregion"></a>
<a id="schema_InvalidRegion"></a>
<a id="tocSinvalidregion"></a>
<a id="tocsinvalidregion"></a>

```json
null
```

<h2 id="tocS_SourceBackupUnavailable">SourceBackupUnavailable</h2>
<!-- backwards compatibility -->
<a id="schemasourcebackupunavailable"></a>
<a id="schema_SourceBackupUnavailable"></a>
<a id="tocSsourcebackupunavailable"></a>
<a id="tocssourcebackupunavailable"></a>

```json
null
```

<h2 id="tocS_IncompatibleRegionForMultiAZ">IncompatibleRegionForMultiAZ</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibleregionformultiaz"></a>
<a id="schema_IncompatibleRegionForMultiAZ"></a>
<a id="tocSincompatibleregionformultiaz"></a>
<a id="tocsincompatibleregionformultiaz"></a>

```json
null
```

<h2 id="tocS_CreateBackupResponse">CreateBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupresponse"></a>
<a id="schema_CreateBackupResponse"></a>
<a id="tocScreatebackupresponse"></a>
<a id="tocscreatebackupresponse"></a>

```json
{
  "Backup": {
    "BackupId": "backup-03e3c82e0183b7b6b",
    "CreationTime": "1481841524.0",
    "FileSystem": {
      "FileSystemId": "fs-0498eed5fe91001ec",
      "OwnerId": 12345678912,
      "StorageCapacity": 300,
      "WindowsConfiguration": {
        "ActiveDirectoryId": "d-1234abcd12",
        "AutomaticBackupRetentionDays": 30,
        "DailyAutomaticBackupStartTime": "05:00",
        "WeeklyMaintenanceStartTime": "1:05:00"
      }
    },
    "Lifecycle": "CREATING",
    "ProgressPercent": 0,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyBackup"
      }
    ],
    "Type": "USER_INITIATED"
  }
}
```

The response object for the <code>CreateBackup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Backup|object|false|none|none|

<h2 id="tocS_CreateBackupRequest">CreateBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackuprequest"></a>
<a id="schema_CreateBackupRequest"></a>
<a id="tocScreatebackuprequest"></a>
<a id="tocscreatebackuprequest"></a>

```json
{
  "FileSystemId": {},
  "ClientRequestToken": {},
  "Tags": {},
  "VolumeId": {}
}
```

The request object for the <code>CreateBackup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|
|VolumeId|object|false|none|none|

<h2 id="tocS_VolumeNotFound">VolumeNotFound</h2>
<!-- backwards compatibility -->
<a id="schemavolumenotfound"></a>
<a id="schema_VolumeNotFound"></a>
<a id="tocSvolumenotfound"></a>
<a id="tocsvolumenotfound"></a>

```json
null
```

<h2 id="tocS_BackupInProgress">BackupInProgress</h2>
<!-- backwards compatibility -->
<a id="schemabackupinprogress"></a>
<a id="schema_BackupInProgress"></a>
<a id="tocSbackupinprogress"></a>
<a id="tocsbackupinprogress"></a>

```json
null
```

<h2 id="tocS_CreateDataRepositoryAssociationResponse">CreateDataRepositoryAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatarepositoryassociationresponse"></a>
<a id="schema_CreateDataRepositoryAssociationResponse"></a>
<a id="tocScreatedatarepositoryassociationresponse"></a>
<a id="tocscreatedatarepositoryassociationresponse"></a>

```json
{
  "Association": {
    "AssociationId": {},
    "ResourceARN": "stringst",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "FailureDetails": {
      "Message": "string"
    },
    "FileSystemPath": {},
    "DataRepositoryPath": {},
    "BatchImportMetaDataOnCreate": {},
    "ImportedFileChunkSize": {},
    "S3": {
      "AutoImportPolicy": {
        "Events": {}
      },
      "AutoExportPolicy": {
        "Events": {}
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCachePath": {},
    "DataRepositorySubdirectories": {},
    "NFS": {
      "Version": {},
      "DnsIps": {},
      "AutoExportPolicy": {
        "Events": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Association|object|false|none|none|

<h2 id="tocS_CreateDataRepositoryAssociationRequest">CreateDataRepositoryAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatarepositoryassociationrequest"></a>
<a id="schema_CreateDataRepositoryAssociationRequest"></a>
<a id="tocScreatedatarepositoryassociationrequest"></a>
<a id="tocscreatedatarepositoryassociationrequest"></a>

```json
{
  "FileSystemId": "stringstrin",
  "FileSystemPath": {},
  "DataRepositoryPath": {},
  "BatchImportMetaDataOnCreate": {},
  "ImportedFileChunkSize": {},
  "S3": {
    "AutoImportPolicy": {
      "Events": {}
    },
    "AutoExportPolicy": {
      "Events": {}
    }
  },
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|[FileSystemId](#schemafilesystemid)|true|none|The globally unique ID of the file system, assigned by Amazon FSx.|
|FileSystemPath|object|false|none|none|
|DataRepositoryPath|object|true|none|none|
|BatchImportMetaDataOnCreate|object|false|none|none|
|ImportedFileChunkSize|object|false|none|none|
|S3|object|false|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|

<h2 id="tocS_CreateDataRepositoryTaskResponse">CreateDataRepositoryTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatarepositorytaskresponse"></a>
<a id="schema_CreateDataRepositoryTaskResponse"></a>
<a id="tocScreatedatarepositorytaskresponse"></a>
<a id="tocscreatedatarepositorytaskresponse"></a>

```json
{
  "DataRepositoryTask": {
    "TaskId": {},
    "Lifecycle": {},
    "Type": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "StartTime": {},
    "EndTime": {},
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "FileSystemId": {},
    "Paths": {},
    "FailureDetails": {
      "Message": "string"
    },
    "Status": {
      "TotalCount": {},
      "SucceededCount": {},
      "FailedCount": {},
      "LastUpdatedTime": {},
      "ReleasedCapacity": {}
    },
    "Report": {
      "Enabled": {},
      "Path": {},
      "Format": {},
      "Scope": {}
    },
    "CapacityToRelease": {},
    "FileCacheId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataRepositoryTask|object|false|none|none|

<h2 id="tocS_CreateDataRepositoryTaskRequest">CreateDataRepositoryTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatarepositorytaskrequest"></a>
<a id="schema_CreateDataRepositoryTaskRequest"></a>
<a id="tocScreatedatarepositorytaskrequest"></a>
<a id="tocscreatedatarepositorytaskrequest"></a>

```json
{
  "Type": {},
  "Paths": {},
  "FileSystemId": "stringstrin",
  "Report": {
    "Enabled": {},
    "Path": {},
    "Format": {},
    "Scope": {}
  },
  "ClientRequestToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CapacityToRelease": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Paths|object|false|none|none|
|FileSystemId|[FileSystemId](#schemafilesystemid)|true|none|The globally unique ID of the file system, assigned by Amazon FSx.|
|Report|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|CapacityToRelease|object|false|none|none|

<h2 id="tocS_DataRepositoryTaskExecuting">DataRepositoryTaskExecuting</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskexecuting"></a>
<a id="schema_DataRepositoryTaskExecuting"></a>
<a id="tocSdatarepositorytaskexecuting"></a>
<a id="tocsdatarepositorytaskexecuting"></a>

```json
null
```

<h2 id="tocS_CreateFileCacheResponse">CreateFileCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilecacheresponse"></a>
<a id="schema_CreateFileCacheResponse"></a>
<a id="tocScreatefilecacheresponse"></a>
<a id="tocscreatefilecacheresponse"></a>

```json
{
  "FileCache": {
    "OwnerId": "stringstring",
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCacheType": {},
    "FileCacheTypeVersion": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "VpcId": "stringstring",
    "SubnetIds": [
      "stringstringstr"
    ],
    "NetworkInterfaceIds": [
      "stringstring"
    ],
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CopyTagsToDataRepositoryAssociations": {},
    "LustreConfiguration": {
      "PerUnitStorageThroughput": {},
      "DeploymentType": {},
      "MountName": {},
      "WeeklyMaintenanceStartTime": "strings",
      "MetadataConfiguration": {
        "StorageCapacity": {}
      },
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      }
    },
    "DataRepositoryAssociationIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCache|object|false|none|none|

<h2 id="tocS_CreateFileCacheRequest">CreateFileCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilecacherequest"></a>
<a id="schema_CreateFileCacheRequest"></a>
<a id="tocScreatefilecacherequest"></a>
<a id="tocscreatefilecacherequest"></a>

```json
{
  "ClientRequestToken": {},
  "FileCacheType": {},
  "FileCacheTypeVersion": {},
  "StorageCapacity": {},
  "SubnetIds": [
    "stringstringstr"
  ],
  "SecurityGroupIds": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CopyTagsToDataRepositoryAssociations": {},
  "KmsKeyId": {},
  "LustreConfiguration": {
    "PerUnitStorageThroughput": {},
    "DeploymentType": {},
    "WeeklyMaintenanceStartTime": "strings",
    "MetadataConfiguration": {
      "StorageCapacity": {}
    }
  },
  "DataRepositoryAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|false|none|none|
|FileCacheType|object|true|none|none|
|FileCacheTypeVersion|object|true|none|none|
|StorageCapacity|object|true|none|none|
|SubnetIds|[SubnetIds](#schemasubnetids)|true|none|A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.|
|SecurityGroupIds|object|false|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|CopyTagsToDataRepositoryAssociations|object|false|none|none|
|KmsKeyId|object|false|none|none|
|LustreConfiguration|object|false|none|none|
|DataRepositoryAssociations|object|false|none|none|

<h2 id="tocS_InvalidNetworkSettings">InvalidNetworkSettings</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnetworksettings"></a>
<a id="schema_InvalidNetworkSettings"></a>
<a id="tocSinvalidnetworksettings"></a>
<a id="tocsinvalidnetworksettings"></a>

```json
null
```

<h2 id="tocS_InvalidPerUnitStorageThroughput">InvalidPerUnitStorageThroughput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidperunitstoragethroughput"></a>
<a id="schema_InvalidPerUnitStorageThroughput"></a>
<a id="tocSinvalidperunitstoragethroughput"></a>
<a id="tocsinvalidperunitstoragethroughput"></a>

```json
null
```

<h2 id="tocS_MissingFileCacheConfiguration">MissingFileCacheConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamissingfilecacheconfiguration"></a>
<a id="schema_MissingFileCacheConfiguration"></a>
<a id="tocSmissingfilecacheconfiguration"></a>
<a id="tocsmissingfilecacheconfiguration"></a>

```json
null
```

<h2 id="tocS_CreateFileSystemResponse">CreateFileSystemResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemresponse"></a>
<a id="schema_CreateFileSystemResponse"></a>
<a id="tocScreatefilesystemresponse"></a>
<a id="tocscreatefilesystemresponse"></a>

```json
{
  "FileSystem": {
    "CreationTime": "1481841524.0",
    "DNSName": "fs-0123456789abcdef0.fsx.com",
    "FileSystemId": "fs-0123456789abcdef0",
    "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/1111abcd-2222-3333-4444-55556666eeff",
    "Lifecycle": "CREATING",
    "OwnerId": 12345678912,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0123456789abcdef0",
    "StorageCapacity": 3200,
    "StorageType": "HDD",
    "SubnetIds": [
      "subnet-1234abcd"
    ],
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyFileSystem"
      }
    ],
    "VpcId": "vpc-ab1234cd",
    "WindowsConfiguration": {
      "ActiveDirectoryId": "d-1234abcd12",
      "Aliases": [
        {
          "Lifecycle": "CREATING",
          "Name": "accounting.corp.example.com"
        }
      ],
      "AutomaticBackupRetentionDays": 30,
      "DailyAutomaticBackupStartTime": "05:00",
      "ThroughputCapacity": 32,
      "WeeklyMaintenanceStartTime": "1:05:00"
    }
  }
}
```

The response object returned after the file system is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystem|object|false|none|none|

<h2 id="tocS_CreateFileSystemRequest">CreateFileSystemRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemrequest"></a>
<a id="schema_CreateFileSystemRequest"></a>
<a id="tocScreatefilesystemrequest"></a>
<a id="tocscreatefilesystemrequest"></a>

```json
{
  "ClientRequestToken": {},
  "FileSystemType": {},
  "StorageCapacity": {},
  "StorageType": {},
  "SubnetIds": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": "string",
  "WindowsConfiguration": {
    "ActiveDirectoryId": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    },
    "DeploymentType": {},
    "PreferredSubnetId": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": {},
    "AutomaticBackupRetentionDays": {},
    "CopyTagsToBackups": {},
    "Aliases": {},
    "AuditLogConfiguration": {
      "FileAccessAuditLogLevel": {},
      "FileShareAccessAuditLogLevel": {},
      "AuditLogDestination": {}
    }
  },
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "ImportPath": {},
    "ExportPath": {},
    "ImportedFileChunkSize": {},
    "DeploymentType": {},
    "AutoImportPolicy": {},
    "PerUnitStorageThroughput": {},
    "DailyAutomaticBackupStartTime": "strin",
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "DriveCacheType": {},
    "DataCompressionType": {},
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    },
    "RootSquashConfiguration": {
      "RootSquash": {},
      "NoSquashNids": {}
    }
  },
  "OntapConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "EndpointIpAddressRange": {},
    "FsxAdminPassword": {},
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "PreferredSubnetId": {},
    "RouteTableIds": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings"
  },
  "FileSystemTypeVersion": {},
  "OpenZFSConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "CopyTagsToVolumes": {},
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "RootVolumeConfiguration": {
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "CopyTagsToSnapshots": {},
      "ReadOnly": {}
    }
  }
}
```

The request object used to create a new Amazon FSx file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|false|none|none|
|FileSystemType|object|true|none|none|
|StorageCapacity|object|true|none|none|
|StorageType|object|false|none|none|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|KmsKeyId|[KmsKeyId](#schemakmskeyid)|false|none|<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>|
|WindowsConfiguration|object|false|none|none|
|LustreConfiguration|[CreateFileSystemLustreConfiguration](#schemacreatefilesystemlustreconfiguration)|false|none|<p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>|
|OntapConfiguration|[CreateFileSystemOntapConfiguration](#schemacreatefilesystemontapconfiguration)|false|none|The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.|
|FileSystemTypeVersion|object|false|none|none|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_ActiveDirectoryError">ActiveDirectoryError</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectoryerror"></a>
<a id="schema_ActiveDirectoryError"></a>
<a id="tocSactivedirectoryerror"></a>
<a id="tocsactivedirectoryerror"></a>

```json
null
```

<h2 id="tocS_InvalidImportPath">InvalidImportPath</h2>
<!-- backwards compatibility -->
<a id="schemainvalidimportpath"></a>
<a id="schema_InvalidImportPath"></a>
<a id="tocSinvalidimportpath"></a>
<a id="tocsinvalidimportpath"></a>

```json
null
```

<h2 id="tocS_InvalidExportPath">InvalidExportPath</h2>
<!-- backwards compatibility -->
<a id="schemainvalidexportpath"></a>
<a id="schema_InvalidExportPath"></a>
<a id="tocSinvalidexportpath"></a>
<a id="tocsinvalidexportpath"></a>

```json
null
```

<h2 id="tocS_MissingFileSystemConfiguration">MissingFileSystemConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamissingfilesystemconfiguration"></a>
<a id="schema_MissingFileSystemConfiguration"></a>
<a id="tocSmissingfilesystemconfiguration"></a>
<a id="tocsmissingfilesystemconfiguration"></a>

```json
null
```

<h2 id="tocS_CreateFileSystemFromBackupResponse">CreateFileSystemFromBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemfrombackupresponse"></a>
<a id="schema_CreateFileSystemFromBackupResponse"></a>
<a id="tocScreatefilesystemfrombackupresponse"></a>
<a id="tocscreatefilesystemfrombackupresponse"></a>

```json
{
  "FileSystem": {
    "CreationTime": "1481841524.0",
    "DNSName": "fs-0498eed5fe91001ec.fsx.com",
    "FileSystemId": "fs-0498eed5fe91001ec",
    "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
    "Lifecycle": "CREATING",
    "OwnerId": 12345678912,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
    "StorageCapacity": 300,
    "SubnetIds": [
      "subnet-1234abcd"
    ],
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyFileSystem"
      }
    ],
    "VpcId": "vpc-ab1234cd",
    "WindowsConfiguration": {
      "ActiveDirectoryId": "d-1234abcd12",
      "AutomaticBackupRetentionDays": 30,
      "DailyAutomaticBackupStartTime": "05:00",
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "1:05:00"
    }
  }
}
```

The response object for the <code>CreateFileSystemFromBackup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystem|object|false|none|none|

<h2 id="tocS_CreateFileSystemFromBackupRequest">CreateFileSystemFromBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemfrombackuprequest"></a>
<a id="schema_CreateFileSystemFromBackupRequest"></a>
<a id="tocScreatefilesystemfrombackuprequest"></a>
<a id="tocscreatefilesystemfrombackuprequest"></a>

```json
{
  "BackupId": "stringstring",
  "ClientRequestToken": {},
  "SubnetIds": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "WindowsConfiguration": {
    "ActiveDirectoryId": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    },
    "DeploymentType": {},
    "PreferredSubnetId": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": {},
    "AutomaticBackupRetentionDays": {},
    "CopyTagsToBackups": {},
    "Aliases": {},
    "AuditLogConfiguration": {
      "FileAccessAuditLogLevel": {},
      "FileShareAccessAuditLogLevel": {},
      "AuditLogDestination": {}
    }
  },
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "ImportPath": {},
    "ExportPath": {},
    "ImportedFileChunkSize": {},
    "DeploymentType": {},
    "AutoImportPolicy": {},
    "PerUnitStorageThroughput": {},
    "DailyAutomaticBackupStartTime": "strin",
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "DriveCacheType": {},
    "DataCompressionType": {},
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    },
    "RootSquashConfiguration": {
      "RootSquash": {},
      "NoSquashNids": {}
    }
  },
  "StorageType": {},
  "KmsKeyId": "string",
  "FileSystemTypeVersion": {},
  "OpenZFSConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "CopyTagsToVolumes": {},
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "RootVolumeConfiguration": {
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "CopyTagsToSnapshots": {},
      "ReadOnly": {}
    }
  },
  "StorageCapacity": {}
}
```

The request object for the <code>CreateFileSystemFromBackup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|[BackupId](#schemabackupid)|true|none|The ID of the source backup. Specifies the backup that you are copying.|
|ClientRequestToken|object|false|none|none|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|WindowsConfiguration|object|false|none|none|
|LustreConfiguration|[CreateFileSystemLustreConfiguration](#schemacreatefilesystemlustreconfiguration)|false|none|<p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>|
|StorageType|object|false|none|none|
|KmsKeyId|[KmsKeyId](#schemakmskeyid)|false|none|<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>|
|FileSystemTypeVersion|object|false|none|none|
|OpenZFSConfiguration|object|false|none|none|
|StorageCapacity|object|false|none|none|

<h2 id="tocS_CreateSnapshotResponse">CreateSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotresponse"></a>
<a id="schema_CreateSnapshotResponse"></a>
<a id="tocScreatesnapshotresponse"></a>
<a id="tocscreatesnapshotresponse"></a>

```json
{
  "Snapshot": {
    "ResourceARN": "stringst",
    "SnapshotId": {},
    "Name": {},
    "VolumeId": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "Lifecycle": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "AdministrativeActions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Snapshot|object|false|none|none|

<h2 id="tocS_CreateSnapshotRequest">CreateSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotrequest"></a>
<a id="schema_CreateSnapshotRequest"></a>
<a id="tocScreatesnapshotrequest"></a>
<a id="tocscreatesnapshotrequest"></a>

```json
{
  "ClientRequestToken": "string",
  "Name": {},
  "VolumeId": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|Name|object|true|none|none|
|VolumeId|object|true|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|

<h2 id="tocS_CreateStorageVirtualMachineResponse">CreateStorageVirtualMachineResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestoragevirtualmachineresponse"></a>
<a id="schema_CreateStorageVirtualMachineResponse"></a>
<a id="tocScreatestoragevirtualmachineresponse"></a>
<a id="tocscreatestoragevirtualmachineresponse"></a>

```json
{
  "StorageVirtualMachine": {
    "ActiveDirectoryConfiguration": {
      "NetBiosName": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      }
    },
    "CreationTime": "1970-01-01T00:00:00Z",
    "Endpoints": {
      "Iscsi": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Management": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Nfs": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Smb": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      }
    },
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "ResourceARN": "stringst",
    "StorageVirtualMachineId": {},
    "Subtype": {},
    "UUID": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "RootVolumeSecurityStyle": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageVirtualMachine|object|false|none|none|

<h2 id="tocS_CreateStorageVirtualMachineRequest">CreateStorageVirtualMachineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestoragevirtualmachinerequest"></a>
<a id="schema_CreateStorageVirtualMachineRequest"></a>
<a id="tocScreatestoragevirtualmachinerequest"></a>
<a id="tocscreatestoragevirtualmachinerequest"></a>

```json
{
  "ActiveDirectoryConfiguration": {
    "NetBiosName": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    }
  },
  "ClientRequestToken": "string",
  "FileSystemId": "stringstrin",
  "Name": {},
  "SvmAdminPassword": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "RootVolumeSecurityStyle": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveDirectoryConfiguration|object|false|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|FileSystemId|[FileSystemId](#schemafilesystemid)|true|none|The globally unique ID of the file system, assigned by Amazon FSx.|
|Name|object|true|none|none|
|SvmAdminPassword|object|false|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|RootVolumeSecurityStyle|object|false|none|none|

<h2 id="tocS_CreateVolumeResponse">CreateVolumeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevolumeresponse"></a>
<a id="schema_CreateVolumeResponse"></a>
<a id="tocScreatevolumeresponse"></a>
<a id="tocscreatevolumeresponse"></a>

```json
{
  "Volume": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Volume|object|false|none|none|

<h2 id="tocS_CreateVolumeRequest">CreateVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevolumerequest"></a>
<a id="schema_CreateVolumeRequest"></a>
<a id="tocScreatevolumerequest"></a>
<a id="tocscreatevolumerequest"></a>

```json
{
  "ClientRequestToken": "string",
  "VolumeType": {},
  "Name": {},
  "OntapConfiguration": {
    "JunctionPath": {},
    "SecurityStyle": {},
    "SizeInMegabytes": {},
    "StorageEfficiencyEnabled": {},
    "StorageVirtualMachineId": {},
    "TieringPolicy": {
      "CoolingPeriod": {},
      "Name": {}
    },
    "OntapVolumeType": {},
    "SnapshotPolicy": {},
    "CopyTagsToBackups": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "OpenZFSConfiguration": {
    "ParentVolumeId": {},
    "StorageCapacityReservationGiB": {},
    "StorageCapacityQuotaGiB": {},
    "RecordSizeKiB": {},
    "DataCompressionType": {},
    "CopyTagsToSnapshots": {},
    "OriginSnapshot": {
      "SnapshotARN": "stringst",
      "CopyStrategy": {}
    },
    "ReadOnly": {},
    "NfsExports": {},
    "UserAndGroupQuotas": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|VolumeType|object|true|none|none|
|Name|object|true|none|none|
|OntapConfiguration|object|false|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_MissingVolumeConfiguration">MissingVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamissingvolumeconfiguration"></a>
<a id="schema_MissingVolumeConfiguration"></a>
<a id="tocSmissingvolumeconfiguration"></a>
<a id="tocsmissingvolumeconfiguration"></a>

```json
null
```

<h2 id="tocS_StorageVirtualMachineNotFound">StorageVirtualMachineNotFound</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinenotfound"></a>
<a id="schema_StorageVirtualMachineNotFound"></a>
<a id="tocSstoragevirtualmachinenotfound"></a>
<a id="tocsstoragevirtualmachinenotfound"></a>

```json
null
```

<h2 id="tocS_CreateVolumeFromBackupResponse">CreateVolumeFromBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevolumefrombackupresponse"></a>
<a id="schema_CreateVolumeFromBackupResponse"></a>
<a id="tocScreatevolumefrombackupresponse"></a>
<a id="tocscreatevolumefrombackupresponse"></a>

```json
{
  "Volume": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Volume|object|false|none|none|

<h2 id="tocS_CreateVolumeFromBackupRequest">CreateVolumeFromBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevolumefrombackuprequest"></a>
<a id="schema_CreateVolumeFromBackupRequest"></a>
<a id="tocScreatevolumefrombackuprequest"></a>
<a id="tocscreatevolumefrombackuprequest"></a>

```json
{
  "BackupId": "stringstring",
  "ClientRequestToken": "string",
  "Name": {},
  "OntapConfiguration": {
    "JunctionPath": {},
    "SecurityStyle": {},
    "SizeInMegabytes": {},
    "StorageEfficiencyEnabled": {},
    "StorageVirtualMachineId": {},
    "TieringPolicy": {
      "CoolingPeriod": {},
      "Name": {}
    },
    "OntapVolumeType": {},
    "SnapshotPolicy": {},
    "CopyTagsToBackups": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|[BackupId](#schemabackupid)|true|none|The ID of the source backup. Specifies the backup that you are copying.|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|Name|object|true|none|none|
|OntapConfiguration|object|false|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|

<h2 id="tocS_DeleteBackupResponse">DeleteBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupresponse"></a>
<a id="schema_DeleteBackupResponse"></a>
<a id="tocSdeletebackupresponse"></a>
<a id="tocsdeletebackupresponse"></a>

```json
{
  "BackupId": "backup-03e3c82e0183b7b6b",
  "Lifecycle": "DELETED"
}
```

The response object for the <code>DeleteBackup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|false|none|none|
|Lifecycle|object|false|none|none|

<h2 id="tocS_DeleteBackupRequest">DeleteBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackuprequest"></a>
<a id="schema_DeleteBackupRequest"></a>
<a id="tocSdeletebackuprequest"></a>
<a id="tocsdeletebackuprequest"></a>

```json
{
  "BackupId": {},
  "ClientRequestToken": {}
}
```

The request object for the <code>DeleteBackup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_BackupRestoring">BackupRestoring</h2>
<!-- backwards compatibility -->
<a id="schemabackuprestoring"></a>
<a id="schema_BackupRestoring"></a>
<a id="tocSbackuprestoring"></a>
<a id="tocsbackuprestoring"></a>

```json
null
```

<h2 id="tocS_BackupBeingCopied">BackupBeingCopied</h2>
<!-- backwards compatibility -->
<a id="schemabackupbeingcopied"></a>
<a id="schema_BackupBeingCopied"></a>
<a id="tocSbackupbeingcopied"></a>
<a id="tocsbackupbeingcopied"></a>

```json
null
```

<h2 id="tocS_DeleteDataRepositoryAssociationResponse">DeleteDataRepositoryAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatarepositoryassociationresponse"></a>
<a id="schema_DeleteDataRepositoryAssociationResponse"></a>
<a id="tocSdeletedatarepositoryassociationresponse"></a>
<a id="tocsdeletedatarepositoryassociationresponse"></a>

```json
{
  "AssociationId": {},
  "Lifecycle": {},
  "DeleteDataInFileSystem": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|Lifecycle|object|false|none|none|
|DeleteDataInFileSystem|object|false|none|none|

<h2 id="tocS_DeleteDataRepositoryAssociationRequest">DeleteDataRepositoryAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatarepositoryassociationrequest"></a>
<a id="schema_DeleteDataRepositoryAssociationRequest"></a>
<a id="tocSdeletedatarepositoryassociationrequest"></a>
<a id="tocsdeletedatarepositoryassociationrequest"></a>

```json
{
  "AssociationId": {},
  "ClientRequestToken": "string",
  "DeleteDataInFileSystem": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|DeleteDataInFileSystem|object|false|none|none|

<h2 id="tocS_DataRepositoryAssociationNotFound">DataRepositoryAssociationNotFound</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositoryassociationnotfound"></a>
<a id="schema_DataRepositoryAssociationNotFound"></a>
<a id="tocSdatarepositoryassociationnotfound"></a>
<a id="tocsdatarepositoryassociationnotfound"></a>

```json
null
```

<h2 id="tocS_DeleteFileCacheResponse">DeleteFileCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilecacheresponse"></a>
<a id="schema_DeleteFileCacheResponse"></a>
<a id="tocSdeletefilecacheresponse"></a>
<a id="tocsdeletefilecacheresponse"></a>

```json
{
  "FileCacheId": {},
  "Lifecycle": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCacheId|object|false|none|none|
|Lifecycle|object|false|none|none|

<h2 id="tocS_DeleteFileCacheRequest">DeleteFileCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilecacherequest"></a>
<a id="schema_DeleteFileCacheRequest"></a>
<a id="tocSdeletefilecacherequest"></a>
<a id="tocsdeletefilecacherequest"></a>

```json
{
  "FileCacheId": {},
  "ClientRequestToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCacheId|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|

<h2 id="tocS_FileCacheNotFound">FileCacheNotFound</h2>
<!-- backwards compatibility -->
<a id="schemafilecachenotfound"></a>
<a id="schema_FileCacheNotFound"></a>
<a id="tocSfilecachenotfound"></a>
<a id="tocsfilecachenotfound"></a>

```json
null
```

<h2 id="tocS_DeleteFileSystemResponse">DeleteFileSystemResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemresponse"></a>
<a id="schema_DeleteFileSystemResponse"></a>
<a id="tocSdeletefilesystemresponse"></a>
<a id="tocsdeletefilesystemresponse"></a>

```json
{
  "FileSystemId": "fs-0498eed5fe91001ec",
  "Lifecycle": "DELETING"
}
```

The response object for the <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|false|none|none|
|Lifecycle|object|false|none|none|
|WindowsResponse|[DeleteFileSystemWindowsResponse](#schemadeletefilesystemwindowsresponse)|false|none|The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.|
|LustreResponse|[DeleteFileSystemLustreResponse](#schemadeletefilesystemlustreresponse)|false|none|The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.|
|OpenZFSResponse|object|false|none|none|

<h2 id="tocS_DeleteFileSystemRequest">DeleteFileSystemRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemrequest"></a>
<a id="schema_DeleteFileSystemRequest"></a>
<a id="tocSdeletefilesystemrequest"></a>
<a id="tocsdeletefilesystemrequest"></a>

```json
{
  "FileSystemId": {},
  "ClientRequestToken": {},
  "WindowsConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": {}
  },
  "LustreConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": {}
  },
  "OpenZFSConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": {},
    "Options": {}
  }
}
```

The request object for <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|WindowsConfiguration|[DeleteFileSystemWindowsConfiguration](#schemadeletefilesystemwindowsconfiguration)|false|none|The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.|
|LustreConfiguration|[DeleteFileSystemLustreConfiguration](#schemadeletefilesystemlustreconfiguration)|false|none|The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_DeleteSnapshotResponse">DeleteSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotresponse"></a>
<a id="schema_DeleteSnapshotResponse"></a>
<a id="tocSdeletesnapshotresponse"></a>
<a id="tocsdeletesnapshotresponse"></a>

```json
{
  "SnapshotId": {},
  "Lifecycle": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|false|none|none|
|Lifecycle|object|false|none|none|

<h2 id="tocS_DeleteSnapshotRequest">DeleteSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotrequest"></a>
<a id="schema_DeleteSnapshotRequest"></a>
<a id="tocSdeletesnapshotrequest"></a>
<a id="tocsdeletesnapshotrequest"></a>

```json
{
  "ClientRequestToken": "string",
  "SnapshotId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|SnapshotId|object|true|none|none|

<h2 id="tocS_SnapshotNotFound">SnapshotNotFound</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotnotfound"></a>
<a id="schema_SnapshotNotFound"></a>
<a id="tocSsnapshotnotfound"></a>
<a id="tocssnapshotnotfound"></a>

```json
null
```

<h2 id="tocS_DeleteStorageVirtualMachineResponse">DeleteStorageVirtualMachineResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletestoragevirtualmachineresponse"></a>
<a id="schema_DeleteStorageVirtualMachineResponse"></a>
<a id="tocSdeletestoragevirtualmachineresponse"></a>
<a id="tocsdeletestoragevirtualmachineresponse"></a>

```json
{
  "StorageVirtualMachineId": {},
  "Lifecycle": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageVirtualMachineId|object|false|none|none|
|Lifecycle|object|false|none|none|

<h2 id="tocS_DeleteStorageVirtualMachineRequest">DeleteStorageVirtualMachineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestoragevirtualmachinerequest"></a>
<a id="schema_DeleteStorageVirtualMachineRequest"></a>
<a id="tocSdeletestoragevirtualmachinerequest"></a>
<a id="tocsdeletestoragevirtualmachinerequest"></a>

```json
{
  "ClientRequestToken": "string",
  "StorageVirtualMachineId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|StorageVirtualMachineId|object|true|none|none|

<h2 id="tocS_DeleteVolumeResponse">DeleteVolumeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevolumeresponse"></a>
<a id="schema_DeleteVolumeResponse"></a>
<a id="tocSdeletevolumeresponse"></a>
<a id="tocsdeletevolumeresponse"></a>

```json
{
  "VolumeId": {},
  "Lifecycle": {},
  "OntapResponse": {
    "FinalBackupId": "stringstring",
    "FinalBackupTags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|false|none|none|
|Lifecycle|object|false|none|none|
|OntapResponse|object|false|none|none|

<h2 id="tocS_DeleteVolumeRequest">DeleteVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevolumerequest"></a>
<a id="schema_DeleteVolumeRequest"></a>
<a id="tocSdeletevolumerequest"></a>
<a id="tocsdeletevolumerequest"></a>

```json
{
  "ClientRequestToken": "string",
  "VolumeId": {},
  "OntapConfiguration": {
    "SkipFinalBackup": {},
    "FinalBackupTags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  },
  "OpenZFSConfiguration": {
    "Options": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|VolumeId|object|true|none|none|
|OntapConfiguration|object|false|none|none|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_DescribeBackupsResponse">DescribeBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupsresponse"></a>
<a id="schema_DescribeBackupsResponse"></a>
<a id="tocSdescribebackupsresponse"></a>
<a id="tocsdescribebackupsresponse"></a>

```json
{
  "Backups": [
    {
      "BackupId": "backup-03e3c82e0183b7b6b",
      "CreationTime": "1481841524.0",
      "FileSystem": {
        "FileSystemId": "fs-0498eed5fe91001ec",
        "OwnerId": 12345678912,
        "StorageCapacity": 300,
        "WindowsConfiguration": {
          "ActiveDirectoryId": "d-1234abcd12",
          "AutomaticBackupRetentionDays": 30,
          "DailyAutomaticBackupStartTime": "05:00",
          "WeeklyMaintenanceStartTime": "1:05:00"
        }
      },
      "Lifecycle": "AVAILABLE",
      "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
      "Tags": [
        {
          "Key": "Name",
          "Value": "MyBackup"
        }
      ],
      "Type": "USER_INITIATED"
    }
  ]
}
```

Response object for the <code>DescribeBackups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Backups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeBackupsRequest">DescribeBackupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupsrequest"></a>
<a id="schema_DescribeBackupsRequest"></a>
<a id="tocSdescribebackupsrequest"></a>
<a id="tocsdescribebackupsrequest"></a>

```json
{
  "BackupIds": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

The request object for the <code>DescribeBackups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupIds|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDataRepositoryAssociationsResponse">DescribeDataRepositoryAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatarepositoryassociationsresponse"></a>
<a id="schema_DescribeDataRepositoryAssociationsResponse"></a>
<a id="tocSdescribedatarepositoryassociationsresponse"></a>
<a id="tocsdescribedatarepositoryassociationsresponse"></a>

```json
{
  "Associations": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Associations|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeDataRepositoryAssociationsRequest">DescribeDataRepositoryAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatarepositoryassociationsrequest"></a>
<a id="schema_DescribeDataRepositoryAssociationsRequest"></a>
<a id="tocSdescribedatarepositoryassociationsrequest"></a>
<a id="tocsdescribedatarepositoryassociationsrequest"></a>

```json
{
  "AssociationIds": {},
  "Filters": [
    {
      "Name": {},
      "Values": {}
    }
  ],
  "MaxResults": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationIds|object|false|none|none|
|Filters|[Filters](#schemafilters)|false|none|A list of <code>Filter</code> elements.|
|MaxResults|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_InvalidDataRepositoryType">InvalidDataRepositoryType</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddatarepositorytype"></a>
<a id="schema_InvalidDataRepositoryType"></a>
<a id="tocSinvaliddatarepositorytype"></a>
<a id="tocsinvaliddatarepositorytype"></a>

```json
null
```

<h2 id="tocS_DescribeDataRepositoryTasksResponse">DescribeDataRepositoryTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatarepositorytasksresponse"></a>
<a id="schema_DescribeDataRepositoryTasksResponse"></a>
<a id="tocSdescribedatarepositorytasksresponse"></a>
<a id="tocsdescribedatarepositorytasksresponse"></a>

```json
{
  "DataRepositoryTasks": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataRepositoryTasks|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeDataRepositoryTasksRequest">DescribeDataRepositoryTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatarepositorytasksrequest"></a>
<a id="schema_DescribeDataRepositoryTasksRequest"></a>
<a id="tocSdescribedatarepositorytasksrequest"></a>
<a id="tocsdescribedatarepositorytasksrequest"></a>

```json
{
  "TaskIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskIds|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeFileCachesResponse">DescribeFileCachesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilecachesresponse"></a>
<a id="schema_DescribeFileCachesResponse"></a>
<a id="tocSdescribefilecachesresponse"></a>
<a id="tocsdescribefilecachesresponse"></a>

```json
{
  "FileCaches": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCaches|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeFileCachesRequest">DescribeFileCachesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilecachesrequest"></a>
<a id="schema_DescribeFileCachesRequest"></a>
<a id="tocSdescribefilecachesrequest"></a>
<a id="tocsdescribefilecachesrequest"></a>

```json
{
  "FileCacheIds": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCacheIds|object|false|none|none|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeFileSystemAliasesResponse">DescribeFileSystemAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystemaliasesresponse"></a>
<a id="schema_DescribeFileSystemAliasesResponse"></a>
<a id="tocSdescribefilesystemaliasesresponse"></a>
<a id="tocsdescribefilesystemaliasesresponse"></a>

```json
{
  "Aliases": {},
  "NextToken": {}
}
```

The response object for <code>DescribeFileSystemAliases</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Aliases|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFileSystemAliasesRequest">DescribeFileSystemAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystemaliasesrequest"></a>
<a id="schema_DescribeFileSystemAliasesRequest"></a>
<a id="tocSdescribefilesystemaliasesrequest"></a>
<a id="tocsdescribefilesystemaliasesrequest"></a>

```json
{
  "ClientRequestToken": "string",
  "FileSystemId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

The request object for <code>DescribeFileSystemAliases</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|FileSystemId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFileSystemsResponse">DescribeFileSystemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystemsresponse"></a>
<a id="schema_DescribeFileSystemsResponse"></a>
<a id="tocSdescribefilesystemsresponse"></a>
<a id="tocsdescribefilesystemsresponse"></a>

```json
{
  "FileSystems": [
    {
      "CreationTime": "1481841524.0",
      "DNSName": "fs-0498eed5fe91001ec.fsx.com",
      "FileSystemId": "fs-0498eed5fe91001ec",
      "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
      "Lifecycle": "AVAILABLE",
      "NetworkInterfaceIds": [
        "eni-abcd1234"
      ],
      "OwnerId": 12345678912,
      "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
      "StorageCapacity": 300,
      "SubnetIds": [
        "subnet-1234abcd"
      ],
      "Tags": [
        {
          "Key": "Name",
          "Value": "MyFileSystem"
        }
      ],
      "VpcId": "vpc-ab1234cd",
      "WindowsConfiguration": {
        "ActiveDirectoryId": "d-1234abcd12",
        "AutomaticBackupRetentionDays": 30,
        "DailyAutomaticBackupStartTime": "05:00",
        "ThroughputCapacity": 8,
        "WeeklyMaintenanceStartTime": "1:05:00"
      }
    }
  ]
}
```

The response object for <code>DescribeFileSystems</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFileSystemsRequest">DescribeFileSystemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystemsrequest"></a>
<a id="schema_DescribeFileSystemsRequest"></a>
<a id="tocSdescribefilesystemsrequest"></a>
<a id="tocsdescribefilesystemsrequest"></a>

```json
{
  "FileSystemIds": {},
  "MaxResults": {},
  "NextToken": {}
}
```

The request object for <code>DescribeFileSystems</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemIds|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSnapshotsResponse">DescribeSnapshotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotsresponse"></a>
<a id="schema_DescribeSnapshotsResponse"></a>
<a id="tocSdescribesnapshotsresponse"></a>
<a id="tocsdescribesnapshotsresponse"></a>

```json
{
  "Snapshots": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Snapshots|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeSnapshotsRequest">DescribeSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotsrequest"></a>
<a id="schema_DescribeSnapshotsRequest"></a>
<a id="tocSdescribesnapshotsrequest"></a>
<a id="tocsdescribesnapshotsrequest"></a>

```json
{
  "SnapshotIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotIds|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeStorageVirtualMachinesResponse">DescribeStorageVirtualMachinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribestoragevirtualmachinesresponse"></a>
<a id="schema_DescribeStorageVirtualMachinesResponse"></a>
<a id="tocSdescribestoragevirtualmachinesresponse"></a>
<a id="tocsdescribestoragevirtualmachinesresponse"></a>

```json
{
  "StorageVirtualMachines": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageVirtualMachines|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeStorageVirtualMachinesRequest">DescribeStorageVirtualMachinesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribestoragevirtualmachinesrequest"></a>
<a id="schema_DescribeStorageVirtualMachinesRequest"></a>
<a id="tocSdescribestoragevirtualmachinesrequest"></a>
<a id="tocsdescribestoragevirtualmachinesrequest"></a>

```json
{
  "StorageVirtualMachineIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageVirtualMachineIds|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeVolumesResponse">DescribeVolumesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevolumesresponse"></a>
<a id="schema_DescribeVolumesResponse"></a>
<a id="tocSdescribevolumesresponse"></a>
<a id="tocsdescribevolumesresponse"></a>

```json
{
  "Volumes": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Volumes|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DescribeVolumesRequest">DescribeVolumesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevolumesrequest"></a>
<a id="schema_DescribeVolumesRequest"></a>
<a id="tocSdescribevolumesrequest"></a>
<a id="tocsdescribevolumesrequest"></a>

```json
{
  "VolumeIds": {},
  "Filters": {},
  "MaxResults": 1,
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeIds|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of resources to return in the response. This value must be an integer greater than zero.|
|NextToken|[NextToken](#schemanexttoken)|false|none|(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.|

<h2 id="tocS_DisassociateFileSystemAliasesResponse">DisassociateFileSystemAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefilesystemaliasesresponse"></a>
<a id="schema_DisassociateFileSystemAliasesResponse"></a>
<a id="tocSdisassociatefilesystemaliasesresponse"></a>
<a id="tocsdisassociatefilesystemaliasesresponse"></a>

```json
{
  "Aliases": {}
}
```

The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Aliases|object|false|none|none|

<h2 id="tocS_DisassociateFileSystemAliasesRequest">DisassociateFileSystemAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefilesystemaliasesrequest"></a>
<a id="schema_DisassociateFileSystemAliasesRequest"></a>
<a id="tocSdisassociatefilesystemaliasesrequest"></a>
<a id="tocsdisassociatefilesystemaliasesrequest"></a>

```json
{
  "ClientRequestToken": "string",
  "FileSystemId": {},
  "Aliases": {}
}
```

The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|FileSystemId|object|true|none|none|
|Aliases|object|true|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": [
    {
      "Key": "Name",
      "Value": "MyFileSystem"
    }
  ]
}
```

The response object for <code>ListTagsForResource</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "MaxResults": {},
  "NextToken": {}
}
```

The request object for <code>ListTagsForResource</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ResourceNotFound">ResourceNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfound"></a>
<a id="schema_ResourceNotFound"></a>
<a id="tocSresourcenotfound"></a>
<a id="tocsresourcenotfound"></a>

```json
null
```

<h2 id="tocS_NotServiceResourceError">NotServiceResourceError</h2>
<!-- backwards compatibility -->
<a id="schemanotserviceresourceerror"></a>
<a id="schema_NotServiceResourceError"></a>
<a id="tocSnotserviceresourceerror"></a>
<a id="tocsnotserviceresourceerror"></a>

```json
null
```

<h2 id="tocS_ResourceDoesNotSupportTagging">ResourceDoesNotSupportTagging</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedoesnotsupporttagging"></a>
<a id="schema_ResourceDoesNotSupportTagging"></a>
<a id="tocSresourcedoesnotsupporttagging"></a>
<a id="tocsresourcedoesnotsupporttagging"></a>

```json
null
```

<h2 id="tocS_ReleaseFileSystemNfsV3LocksResponse">ReleaseFileSystemNfsV3LocksResponse</h2>
<!-- backwards compatibility -->
<a id="schemareleasefilesystemnfsv3locksresponse"></a>
<a id="schema_ReleaseFileSystemNfsV3LocksResponse"></a>
<a id="tocSreleasefilesystemnfsv3locksresponse"></a>
<a id="tocsreleasefilesystemnfsv3locksresponse"></a>

```json
{
  "FileSystem": {
    "OwnerId": {},
    "CreationTime": {},
    "FileSystemId": {},
    "FileSystemType": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "StorageType": {},
    "VpcId": {},
    "SubnetIds": {},
    "NetworkInterfaceIds": {},
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": {},
    "Tags": {},
    "WindowsConfiguration": {
      "ActiveDirectoryId": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      },
      "DeploymentType": {},
      "RemoteAdministrationEndpoint": {},
      "PreferredSubnetId": {},
      "PreferredFileServerIp": {},
      "ThroughputCapacity": {},
      "MaintenanceOperationsInProgress": {},
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "CopyTagsToBackups": {},
      "Aliases": [
        {
          "Name": {},
          "Lifecycle": {}
        }
      ],
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "DataRepositoryConfiguration": {
        "Lifecycle": {},
        "ImportPath": {},
        "ExportPath": {},
        "ImportedFileChunkSize": {},
        "AutoImportPolicy": {},
        "FailureDetails": {
          "Message": "string"
        }
      },
      "DeploymentType": {},
      "PerUnitStorageThroughput": {},
      "MountName": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "DriveCacheType": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "AdministrativeActions": {},
    "OntapConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "EndpointIpAddressRange": {},
      "Endpoints": {
        "Intercluster": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        },
        "Management": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        }
      },
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "PreferredSubnetId": "stringstringstr",
      "RouteTableIds": {},
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "strings"
    },
    "FileSystemTypeVersion": {},
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "RootVolumeId": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystem|[FileSystem](#schemafilesystem)|false|none|A description of a specific Amazon FSx file system.|

<h2 id="tocS_ReleaseFileSystemNfsV3LocksRequest">ReleaseFileSystemNfsV3LocksRequest</h2>
<!-- backwards compatibility -->
<a id="schemareleasefilesystemnfsv3locksrequest"></a>
<a id="schema_ReleaseFileSystemNfsV3LocksRequest"></a>
<a id="tocSreleasefilesystemnfsv3locksrequest"></a>
<a id="tocsreleasefilesystemnfsv3locksrequest"></a>

```json
{
  "FileSystemId": "stringstrin",
  "ClientRequestToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|[FileSystemId](#schemafilesystemid)|true|none|The globally unique ID of the file system, assigned by Amazon FSx.|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|

<h2 id="tocS_RestoreVolumeFromSnapshotResponse">RestoreVolumeFromSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestorevolumefromsnapshotresponse"></a>
<a id="schema_RestoreVolumeFromSnapshotResponse"></a>
<a id="tocSrestorevolumefromsnapshotresponse"></a>
<a id="tocsrestorevolumefromsnapshotresponse"></a>

```json
{
  "VolumeId": {},
  "Lifecycle": {},
  "AdministrativeActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeId|object|false|none|none|
|Lifecycle|object|false|none|none|
|AdministrativeActions|object|false|none|none|

<h2 id="tocS_RestoreVolumeFromSnapshotRequest">RestoreVolumeFromSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorevolumefromsnapshotrequest"></a>
<a id="schema_RestoreVolumeFromSnapshotRequest"></a>
<a id="tocSrestorevolumefromsnapshotrequest"></a>
<a id="tocsrestorevolumefromsnapshotrequest"></a>

```json
{
  "ClientRequestToken": "string",
  "VolumeId": {},
  "SnapshotId": {},
  "Options": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|VolumeId|object|true|none|none|
|SnapshotId|object|true|none|none|
|Options|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

The response object for the <code>TagResource</code> operation.

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

The request object for the <code>TagResource</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
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

The response object for <code>UntagResource</code> action.

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

The request object for <code>UntagResource</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateDataRepositoryAssociationResponse">UpdateDataRepositoryAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatarepositoryassociationresponse"></a>
<a id="schema_UpdateDataRepositoryAssociationResponse"></a>
<a id="tocSupdatedatarepositoryassociationresponse"></a>
<a id="tocsupdatedatarepositoryassociationresponse"></a>

```json
{
  "Association": {
    "AssociationId": {},
    "ResourceARN": "stringst",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "FailureDetails": {
      "Message": "string"
    },
    "FileSystemPath": {},
    "DataRepositoryPath": {},
    "BatchImportMetaDataOnCreate": {},
    "ImportedFileChunkSize": {},
    "S3": {
      "AutoImportPolicy": {
        "Events": {}
      },
      "AutoExportPolicy": {
        "Events": {}
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCachePath": {},
    "DataRepositorySubdirectories": {},
    "NFS": {
      "Version": {},
      "DnsIps": {},
      "AutoExportPolicy": {
        "Events": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Association|object|false|none|none|

<h2 id="tocS_UpdateDataRepositoryAssociationRequest">UpdateDataRepositoryAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatarepositoryassociationrequest"></a>
<a id="schema_UpdateDataRepositoryAssociationRequest"></a>
<a id="tocSupdatedatarepositoryassociationrequest"></a>
<a id="tocsupdatedatarepositoryassociationrequest"></a>

```json
{
  "AssociationId": {},
  "ClientRequestToken": "string",
  "ImportedFileChunkSize": {},
  "S3": {
    "AutoImportPolicy": {
      "Events": {}
    },
    "AutoExportPolicy": {
      "Events": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|ImportedFileChunkSize|object|false|none|none|
|S3|object|false|none|none|

<h2 id="tocS_UpdateFileCacheResponse">UpdateFileCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilecacheresponse"></a>
<a id="schema_UpdateFileCacheResponse"></a>
<a id="tocSupdatefilecacheresponse"></a>
<a id="tocsupdatefilecacheresponse"></a>

```json
{
  "FileCache": {
    "OwnerId": "stringstring",
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCacheType": {},
    "FileCacheTypeVersion": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "VpcId": "stringstring",
    "SubnetIds": [
      "stringstringstr"
    ],
    "NetworkInterfaceIds": [
      "stringstring"
    ],
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": "stringst",
    "LustreConfiguration": {
      "PerUnitStorageThroughput": {},
      "DeploymentType": {},
      "MountName": {},
      "WeeklyMaintenanceStartTime": "strings",
      "MetadataConfiguration": {
        "StorageCapacity": {}
      },
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      }
    },
    "DataRepositoryAssociationIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCache|object|false|none|none|

<h2 id="tocS_UpdateFileCacheRequest">UpdateFileCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilecacherequest"></a>
<a id="schema_UpdateFileCacheRequest"></a>
<a id="tocSupdatefilecacherequest"></a>
<a id="tocsupdatefilecacherequest"></a>

```json
{
  "FileCacheId": {},
  "ClientRequestToken": "string",
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": "strings"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCacheId|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|LustreConfiguration|object|false|none|none|

<h2 id="tocS_UpdateFileSystemResponse">UpdateFileSystemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemresponse"></a>
<a id="schema_UpdateFileSystemResponse"></a>
<a id="tocSupdatefilesystemresponse"></a>
<a id="tocsupdatefilesystemresponse"></a>

```json
{
  "FileSystem": {
    "CreationTime": "1481841524.0",
    "DNSName": "fs-0498eed5fe91001ec.fsx.com",
    "FileSystemId": "fs-0498eed5fe91001ec",
    "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
    "Lifecycle": "AVAILABLE",
    "OwnerId": 12345678912,
    "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
    "StorageCapacity": 300,
    "SubnetIds": [
      "subnet-1234abcd"
    ],
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyFileSystem"
      }
    ],
    "VpcId": "vpc-ab1234cd",
    "WindowsConfiguration": {
      "AutomaticBackupRetentionDays": 10,
      "DailyAutomaticBackupStartTime": "06:00",
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "3:06:00"
    }
  }
}
```

The response object for the <code>UpdateFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystem|object|false|none|none|

<h2 id="tocS_UpdateFileSystemRequest">UpdateFileSystemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemrequest"></a>
<a id="schema_UpdateFileSystemRequest"></a>
<a id="tocSupdatefilesystemrequest"></a>
<a id="tocsupdatefilesystemrequest"></a>

```json
{
  "FileSystemId": {},
  "ClientRequestToken": {},
  "StorageCapacity": {},
  "WindowsConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": {},
    "AutomaticBackupRetentionDays": {},
    "ThroughputCapacity": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    },
    "AuditLogConfiguration": {
      "FileAccessAuditLogLevel": {},
      "FileShareAccessAuditLogLevel": {},
      "AuditLogDestination": {}
    }
  },
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": "strin",
    "AutomaticBackupRetentionDays": 0,
    "AutoImportPolicy": {},
    "DataCompressionType": {},
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    },
    "RootSquashConfiguration": {
      "RootSquash": {},
      "NoSquashNids": {}
    }
  },
  "OntapConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "DailyAutomaticBackupStartTime": "strin",
    "FsxAdminPassword": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "ThroughputCapacity": {},
    "AddRouteTableIds": {},
    "RemoveRouteTableIds": {}
  },
  "OpenZFSConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "CopyTagsToVolumes": {},
    "DailyAutomaticBackupStartTime": "strin",
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    }
  }
}
```

The request object for the <code>UpdateFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|StorageCapacity|object|false|none|none|
|WindowsConfiguration|object|false|none|none|
|LustreConfiguration|[UpdateFileSystemLustreConfiguration](#schemaupdatefilesystemlustreconfiguration)|false|none|The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.|
|OntapConfiguration|[UpdateFileSystemOntapConfiguration](#schemaupdatefilesystemontapconfiguration)|false|none|The configuration updates for an Amazon FSx for NetApp ONTAP file system.|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_UpdateSnapshotResponse">UpdateSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesnapshotresponse"></a>
<a id="schema_UpdateSnapshotResponse"></a>
<a id="tocSupdatesnapshotresponse"></a>
<a id="tocsupdatesnapshotresponse"></a>

```json
{
  "Snapshot": {
    "ResourceARN": "stringst",
    "SnapshotId": {},
    "Name": {},
    "VolumeId": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "Lifecycle": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "AdministrativeActions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Snapshot|object|false|none|none|

<h2 id="tocS_UpdateSnapshotRequest">UpdateSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesnapshotrequest"></a>
<a id="schema_UpdateSnapshotRequest"></a>
<a id="tocSupdatesnapshotrequest"></a>
<a id="tocsupdatesnapshotrequest"></a>

```json
{
  "ClientRequestToken": "string",
  "Name": {},
  "SnapshotId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|Name|object|true|none|none|
|SnapshotId|object|true|none|none|

<h2 id="tocS_UpdateStorageVirtualMachineResponse">UpdateStorageVirtualMachineResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestoragevirtualmachineresponse"></a>
<a id="schema_UpdateStorageVirtualMachineResponse"></a>
<a id="tocSupdatestoragevirtualmachineresponse"></a>
<a id="tocsupdatestoragevirtualmachineresponse"></a>

```json
{
  "StorageVirtualMachine": {
    "ActiveDirectoryConfiguration": {
      "NetBiosName": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      }
    },
    "CreationTime": "1970-01-01T00:00:00Z",
    "Endpoints": {
      "Iscsi": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Management": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Nfs": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Smb": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      }
    },
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "ResourceARN": "stringst",
    "StorageVirtualMachineId": {},
    "Subtype": {},
    "UUID": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "RootVolumeSecurityStyle": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageVirtualMachine|[StorageVirtualMachine](#schemastoragevirtualmachine)|false|none|Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.|

<h2 id="tocS_UpdateStorageVirtualMachineRequest">UpdateStorageVirtualMachineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestoragevirtualmachinerequest"></a>
<a id="schema_UpdateStorageVirtualMachineRequest"></a>
<a id="tocSupdatestoragevirtualmachinerequest"></a>
<a id="tocsupdatestoragevirtualmachinerequest"></a>

```json
{
  "ActiveDirectoryConfiguration": {
    "SelfManagedActiveDirectoryConfiguration": {
      "UserName": {},
      "Password": {},
      "DnsIps": {}
    }
  },
  "ClientRequestToken": "string",
  "StorageVirtualMachineId": {},
  "SvmAdminPassword": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveDirectoryConfiguration|object|false|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|StorageVirtualMachineId|object|true|none|none|
|SvmAdminPassword|object|false|none|none|

<h2 id="tocS_UpdateVolumeResponse">UpdateVolumeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevolumeresponse"></a>
<a id="schema_UpdateVolumeResponse"></a>
<a id="tocSupdatevolumeresponse"></a>
<a id="tocsupdatevolumeresponse"></a>

```json
{
  "Volume": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Volume|object|false|none|none|

<h2 id="tocS_UpdateVolumeRequest">UpdateVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevolumerequest"></a>
<a id="schema_UpdateVolumeRequest"></a>
<a id="tocSupdatevolumerequest"></a>
<a id="tocsupdatevolumerequest"></a>

```json
{
  "ClientRequestToken": "string",
  "VolumeId": {},
  "OntapConfiguration": {
    "JunctionPath": {},
    "SecurityStyle": {},
    "SizeInMegabytes": {},
    "StorageEfficiencyEnabled": {},
    "TieringPolicy": {
      "CoolingPeriod": {},
      "Name": {}
    },
    "SnapshotPolicy": {},
    "CopyTagsToBackups": {}
  },
  "Name": {},
  "OpenZFSConfiguration": {
    "StorageCapacityReservationGiB": {},
    "StorageCapacityQuotaGiB": {},
    "RecordSizeKiB": {},
    "DataCompressionType": {},
    "NfsExports": {},
    "UserAndGroupQuotas": {},
    "ReadOnly": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.|
|VolumeId|object|true|none|none|
|OntapConfiguration|object|false|none|none|
|Name|object|false|none|none|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_AWSAccountId">AWSAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AWSAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"stringstring"
```

An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.

<h2 id="tocS_ActiveDirectoryFullyQualifiedName">ActiveDirectoryFullyQualifiedName</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectoryfullyqualifiedname"></a>
<a id="schema_ActiveDirectoryFullyQualifiedName"></a>
<a id="tocSactivedirectoryfullyqualifiedname"></a>
<a id="tocsactivedirectoryfullyqualifiedname"></a>

```json
"string"
```

<h2 id="tocS_DirectoryId">DirectoryId</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryid"></a>
<a id="schema_DirectoryId"></a>
<a id="tocSdirectoryid"></a>
<a id="tocsdirectoryid"></a>

```json
"stringstring"
```

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"stringst"
```

The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.

<h2 id="tocS_ActiveDirectoryBackupAttributes">ActiveDirectoryBackupAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorybackupattributes"></a>
<a id="schema_ActiveDirectoryBackupAttributes"></a>
<a id="tocSactivedirectorybackupattributes"></a>
<a id="tocsactivedirectorybackupattributes"></a>

```json
{
  "DomainName": {},
  "ActiveDirectoryId": {},
  "ResourceARN": "stringst"
}
```

The Microsoft Active Directory attributes of the Amazon FSx for Windows File Server file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|ActiveDirectoryId|object|false|none|none|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|

<h2 id="tocS_AdminPassword">AdminPassword</h2>
<!-- backwards compatibility -->
<a id="schemaadminpassword"></a>
<a id="schema_AdminPassword"></a>
<a id="tocSadminpassword"></a>
<a id="tocsadminpassword"></a>

```json
"password"
```

<h2 id="tocS_AdministrativeActionType">AdministrativeActionType</h2>
<!-- backwards compatibility -->
<a id="schemaadministrativeactiontype"></a>
<a id="schema_AdministrativeActionType"></a>
<a id="tocSadministrativeactiontype"></a>
<a id="tocsadministrativeactiontype"></a>

```json
"FILE_SYSTEM_UPDATE"
```

<p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated from the Amazon FSx console, API (<code>UpdateFileSystem</code>), or CLI (<code>update-file-system</code>).</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity has been completed successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p> <ul> <li> <p>For Windows and ONTAP, storage optimization is the process of migrating the file system data to newer larger disks.</p> </li> <li> <p>For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.</p> </li> </ul> <p>You can track the storage-optimization progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> has been completed successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new Domain Name System (DNS) alias with the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html"> AssociateFileSystemAliases</a>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html">DisassociateFileSystemAliases</a>.</p> </li> <li> <p> <code>VOLUME_UPDATE</code> - A volume update to an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateVolume</code>), or CLI (<code>update-volume</code>).</p> </li> <li> <p> <code>VOLUME_RESTORE</code> - An Amazon FSx for OpenZFS volume is returned to the state saved by the specified snapshot, initiated from an API (<code>RestoreVolumeFromSnapshot</code>) or CLI (<code>restore-volume-from-snapshot</code>).</p> </li> <li> <p> <code>SNAPSHOT_UPDATE</code> - A snapshot update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateSnapshot</code>), or CLI (<code>update-snapshot</code>).</p> </li> <li> <p> <code>RELEASE_NFS_V3_LOCKS</code> - Tracks the release of Network File System (NFS) V3 locks on an Amazon FSx for OpenZFS file system.</p> </li> </ul>

<h2 id="tocS_ProgressPercent">ProgressPercent</h2>
<!-- backwards compatibility -->
<a id="schemaprogresspercent"></a>
<a id="schema_ProgressPercent"></a>
<a id="tocSprogresspercent"></a>
<a id="tocsprogresspercent"></a>

```json
0
```

The current percent of progress of an asynchronous task.

<h2 id="tocS_RequestTime">RequestTime</h2>
<!-- backwards compatibility -->
<a id="schemarequesttime"></a>
<a id="schema_RequestTime"></a>
<a id="tocSrequesttime"></a>
<a id="tocsrequesttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"FAILED"
```

<h2 id="tocS_FileSystem">FileSystem</h2>
<!-- backwards compatibility -->
<a id="schemafilesystem"></a>
<a id="schema_FileSystem"></a>
<a id="tocSfilesystem"></a>
<a id="tocsfilesystem"></a>

```json
{
  "OwnerId": {},
  "CreationTime": {},
  "FileSystemId": {},
  "FileSystemType": {},
  "Lifecycle": {},
  "FailureDetails": {
    "Message": {}
  },
  "StorageCapacity": {},
  "StorageType": {},
  "VpcId": {},
  "SubnetIds": {},
  "NetworkInterfaceIds": {},
  "DNSName": {},
  "KmsKeyId": {},
  "ResourceARN": {},
  "Tags": {},
  "WindowsConfiguration": {
    "ActiveDirectoryId": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "DnsIps": {}
    },
    "DeploymentType": {},
    "RemoteAdministrationEndpoint": {},
    "PreferredSubnetId": {},
    "PreferredFileServerIp": {},
    "ThroughputCapacity": {},
    "MaintenanceOperationsInProgress": {},
    "WeeklyMaintenanceStartTime": {},
    "DailyAutomaticBackupStartTime": {},
    "AutomaticBackupRetentionDays": {},
    "CopyTagsToBackups": {},
    "Aliases": [
      {
        "Name": {},
        "Lifecycle": {}
      }
    ],
    "AuditLogConfiguration": {
      "FileAccessAuditLogLevel": {},
      "FileShareAccessAuditLogLevel": {},
      "AuditLogDestination": {}
    }
  },
  "LustreConfiguration": {
    "WeeklyMaintenanceStartTime": {},
    "DataRepositoryConfiguration": {
      "Lifecycle": {},
      "ImportPath": {},
      "ExportPath": {},
      "ImportedFileChunkSize": {},
      "AutoImportPolicy": {},
      "FailureDetails": {
        "Message": "string"
      }
    },
    "DeploymentType": {},
    "PerUnitStorageThroughput": {},
    "MountName": {},
    "DailyAutomaticBackupStartTime": "strin",
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "DriveCacheType": {},
    "DataCompressionType": {},
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    },
    "RootSquashConfiguration": {
      "RootSquash": {},
      "NoSquashNids": {}
    }
  },
  "AdministrativeActions": {},
  "OntapConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "EndpointIpAddressRange": {},
    "Endpoints": {
      "Intercluster": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Management": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      }
    },
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "PreferredSubnetId": "stringstringstr",
    "RouteTableIds": {},
    "ThroughputCapacity": 8,
    "WeeklyMaintenanceStartTime": "strings"
  },
  "FileSystemTypeVersion": {},
  "OpenZFSConfiguration": {
    "AutomaticBackupRetentionDays": 0,
    "CopyTagsToBackups": {},
    "CopyTagsToVolumes": {},
    "DailyAutomaticBackupStartTime": "strin",
    "DeploymentType": {},
    "ThroughputCapacity": {},
    "WeeklyMaintenanceStartTime": "strings",
    "DiskIopsConfiguration": {
      "Mode": {},
      "Iops": {}
    },
    "RootVolumeId": {}
  }
}
```

A description of a specific Amazon FSx file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerId|object|false|none|none|
|CreationTime|object|false|none|none|
|FileSystemId|object|false|none|none|
|FileSystemType|object|false|none|none|
|Lifecycle|object|false|none|none|
|FailureDetails|[FileSystemFailureDetails](#schemafilesystemfailuredetails)|false|none|A structure providing details of any failures that occurred.|
|StorageCapacity|object|false|none|none|
|StorageType|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetIds|object|false|none|none|
|NetworkInterfaceIds|object|false|none|none|
|DNSName|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ResourceARN|object|false|none|none|
|Tags|object|false|none|none|
|WindowsConfiguration|object|false|none|none|
|LustreConfiguration|[LustreFileSystemConfiguration](#schemalustrefilesystemconfiguration)|false|none|The configuration for the Amazon FSx for Lustre file system.|
|AdministrativeActions|object|false|none|none|
|OntapConfiguration|object|false|none|none|
|FileSystemTypeVersion|object|false|none|none|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_AdministrativeActionFailureDetails">AdministrativeActionFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemaadministrativeactionfailuredetails"></a>
<a id="schema_AdministrativeActionFailureDetails"></a>
<a id="tocSadministrativeactionfailuredetails"></a>
<a id="tocsadministrativeactionfailuredetails"></a>

```json
{
  "Message": {}
}
```

Provides information about a failed administrative action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "CreationTime": "1970-01-01T00:00:00Z",
  "FileSystemId": "stringstrin",
  "Lifecycle": {},
  "Name": {},
  "OntapConfiguration": {
    "FlexCacheEndpointType": {},
    "JunctionPath": {},
    "SecurityStyle": {},
    "SizeInMegabytes": {},
    "StorageEfficiencyEnabled": {},
    "StorageVirtualMachineId": {},
    "StorageVirtualMachineRoot": {},
    "TieringPolicy": {
      "CoolingPeriod": {},
      "Name": {}
    },
    "UUID": {},
    "OntapVolumeType": {},
    "SnapshotPolicy": {},
    "CopyTagsToBackups": {}
  },
  "ResourceARN": "stringst",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "VolumeId": {},
  "VolumeType": {},
  "LifecycleTransitionReason": {
    "Message": "string"
  },
  "AdministrativeActions": {},
  "OpenZFSConfiguration": {
    "ParentVolumeId": {},
    "VolumePath": {},
    "StorageCapacityReservationGiB": {},
    "StorageCapacityQuotaGiB": {},
    "RecordSizeKiB": {},
    "DataCompressionType": {},
    "CopyTagsToSnapshots": {},
    "OriginSnapshot": {
      "SnapshotARN": "stringst",
      "CopyStrategy": {}
    },
    "ReadOnly": {},
    "NfsExports": {},
    "UserAndGroupQuotas": {},
    "RestoreToSnapshot": {},
    "DeleteIntermediateSnaphots": {},
    "DeleteClonedVolumes": {}
  }
}
```

Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTime|[CreationTime](#schemacreationtime)|false|none|The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.|
|FileSystemId|[FileSystemId](#schemafilesystemid)|false|none|The globally unique ID of the file system, assigned by Amazon FSx.|
|Lifecycle|object|false|none|none|
|Name|object|false|none|none|
|OntapConfiguration|[OntapVolumeConfiguration](#schemaontapvolumeconfiguration)|false|none|The configuration of an Amazon FSx for NetApp ONTAP volume.|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|VolumeId|object|false|none|none|
|VolumeType|object|false|none|none|
|LifecycleTransitionReason|object|false|none|none|
|AdministrativeActions|object|false|none|none|
|OpenZFSConfiguration|object|false|none|none|

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "ResourceARN": "stringst",
  "SnapshotId": {},
  "Name": {},
  "VolumeId": {},
  "CreationTime": "1970-01-01T00:00:00Z",
  "Lifecycle": {},
  "LifecycleTransitionReason": {
    "Message": "string"
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "AdministrativeActions": {}
}
```

A snapshot of an Amazon FSx for OpenZFS volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|SnapshotId|object|false|none|none|
|Name|object|false|none|none|
|VolumeId|object|false|none|none|
|CreationTime|[CreationTime](#schemacreationtime)|false|none|The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.|
|Lifecycle|object|false|none|none|
|LifecycleTransitionReason|[LifecycleTransitionReason](#schemalifecycletransitionreason)|false|none|Describes why a resource lifecycle state changed.|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|AdministrativeActions|object|false|none|none|

<h2 id="tocS_AdministrativeAction">AdministrativeAction</h2>
<!-- backwards compatibility -->
<a id="schemaadministrativeaction"></a>
<a id="schema_AdministrativeAction"></a>
<a id="tocSadministrativeaction"></a>
<a id="tocsadministrativeaction"></a>

```json
{
  "AdministrativeActionType": "FILE_SYSTEM_UPDATE",
  "ProgressPercent": {},
  "RequestTime": {},
  "Status": {},
  "TargetFileSystemValues": {
    "OwnerId": {},
    "CreationTime": {},
    "FileSystemId": {},
    "FileSystemType": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "StorageType": {},
    "VpcId": {},
    "SubnetIds": {},
    "NetworkInterfaceIds": {},
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": {},
    "Tags": {},
    "WindowsConfiguration": {
      "ActiveDirectoryId": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      },
      "DeploymentType": {},
      "RemoteAdministrationEndpoint": {},
      "PreferredSubnetId": {},
      "PreferredFileServerIp": {},
      "ThroughputCapacity": {},
      "MaintenanceOperationsInProgress": {},
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "CopyTagsToBackups": {},
      "Aliases": [
        {
          "Name": {},
          "Lifecycle": {}
        }
      ],
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "DataRepositoryConfiguration": {
        "Lifecycle": {},
        "ImportPath": {},
        "ExportPath": {},
        "ImportedFileChunkSize": {},
        "AutoImportPolicy": {},
        "FailureDetails": {
          "Message": "string"
        }
      },
      "DeploymentType": {},
      "PerUnitStorageThroughput": {},
      "MountName": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "DriveCacheType": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "AdministrativeActions": {},
    "OntapConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "EndpointIpAddressRange": {},
      "Endpoints": {
        "Intercluster": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        },
        "Management": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        }
      },
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "PreferredSubnetId": "stringstringstr",
      "RouteTableIds": {},
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "strings"
    },
    "FileSystemTypeVersion": {},
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "RootVolumeId": {}
    }
  },
  "FailureDetails": {
    "Message": {}
  },
  "TargetVolumeValues": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
    }
  },
  "TargetSnapshotValues": {
    "ResourceARN": "stringst",
    "SnapshotId": {},
    "Name": {},
    "VolumeId": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "Lifecycle": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "AdministrativeActions": {}
  }
}
```

Describes a specific Amazon FSx administrative action for the current Windows, Lustre, or OpenZFS file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdministrativeActionType|[AdministrativeActionType](#schemaadministrativeactiontype)|false|none|<p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated from the Amazon FSx console, API (<code>UpdateFileSystem</code>), or CLI (<code>update-file-system</code>).</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity has been completed successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p> <ul> <li> <p>For Windows and ONTAP, storage optimization is the process of migrating the file system data to newer larger disks.</p> </li> <li> <p>For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.</p> </li> </ul> <p>You can track the storage-optimization progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> has been completed successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new Domain Name System (DNS) alias with the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html"> AssociateFileSystemAliases</a>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html">DisassociateFileSystemAliases</a>.</p> </li> <li> <p> <code>VOLUME_UPDATE</code> - A volume update to an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateVolume</code>), or CLI (<code>update-volume</code>).</p> </li> <li> <p> <code>VOLUME_RESTORE</code> - An Amazon FSx for OpenZFS volume is returned to the state saved by the specified snapshot, initiated from an API (<code>RestoreVolumeFromSnapshot</code>) or CLI (<code>restore-volume-from-snapshot</code>).</p> </li> <li> <p> <code>SNAPSHOT_UPDATE</code> - A snapshot update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateSnapshot</code>), or CLI (<code>update-snapshot</code>).</p> </li> <li> <p> <code>RELEASE_NFS_V3_LOCKS</code> - Tracks the release of Network File System (NFS) V3 locks on an Amazon FSx for OpenZFS file system.</p> </li> </ul>|
|ProgressPercent|object|false|none|none|
|RequestTime|object|false|none|none|
|Status|object|false|none|none|
|TargetFileSystemValues|object|false|none|none|
|FailureDetails|[AdministrativeActionFailureDetails](#schemaadministrativeactionfailuredetails)|false|none|Provides information about a failed administrative action.|
|TargetVolumeValues|[Volume](#schemavolume)|false|none|Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.|
|TargetSnapshotValues|[Snapshot](#schemasnapshot)|false|none|A snapshot of an Amazon FSx for OpenZFS volume.|

#### Enumerated Values

|Property|Value|
|---|---|
|AdministrativeActionType|FILE_SYSTEM_UPDATE|
|AdministrativeActionType|STORAGE_OPTIMIZATION|
|AdministrativeActionType|FILE_SYSTEM_ALIAS_ASSOCIATION|
|AdministrativeActionType|FILE_SYSTEM_ALIAS_DISASSOCIATION|
|AdministrativeActionType|VOLUME_UPDATE|
|AdministrativeActionType|SNAPSHOT_UPDATE|
|AdministrativeActionType|RELEASE_NFS_V3_LOCKS|
|AdministrativeActionType|VOLUME_RESTORE|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

A detailed error message.

<h2 id="tocS_AdministrativeActions">AdministrativeActions</h2>
<!-- backwards compatibility -->
<a id="schemaadministrativeactions"></a>
<a id="schema_AdministrativeActions"></a>
<a id="tocSadministrativeactions"></a>
<a id="tocsadministrativeactions"></a>

```json
[
  {
    "AdministrativeActionType": "FILE_SYSTEM_UPDATE",
    "ProgressPercent": {},
    "RequestTime": {},
    "Status": {},
    "TargetFileSystemValues": {},
    "FailureDetails": {
      "Message": {}
    },
    "TargetVolumeValues": {},
    "TargetSnapshotValues": {}
  }
]
```

<h2 id="tocS_AlternateDNSName">AlternateDNSName</h2>
<!-- backwards compatibility -->
<a id="schemaalternatednsname"></a>
<a id="schema_AlternateDNSName"></a>
<a id="tocSalternatednsname"></a>
<a id="tocsalternatednsname"></a>

```json
"string"
```

<h2 id="tocS_AliasLifecycle">AliasLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslifecycle"></a>
<a id="schema_AliasLifecycle"></a>
<a id="tocSaliaslifecycle"></a>
<a id="tocsaliaslifecycle"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

```json
{
  "Name": {},
  "Lifecycle": {}
}
```

A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Lifecycle|object|false|none|none|

<h2 id="tocS_Aliases">Aliases</h2>
<!-- backwards compatibility -->
<a id="schemaaliases"></a>
<a id="schema_Aliases"></a>
<a id="tocSaliases"></a>
<a id="tocsaliases"></a>

```json
[
  {
    "Name": {},
    "Lifecycle": {}
  }
]
```

An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>.

<h2 id="tocS_AlternateDNSNames">AlternateDNSNames</h2>
<!-- backwards compatibility -->
<a id="schemaalternatednsnames"></a>
<a id="schema_AlternateDNSNames"></a>
<a id="tocSalternatednsnames"></a>
<a id="tocsalternatednsnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ArchivePath">ArchivePath</h2>
<!-- backwards compatibility -->
<a id="schemaarchivepath"></a>
<a id="schema_ArchivePath"></a>
<a id="tocSarchivepath"></a>
<a id="tocsarchivepath"></a>

```json
"string"
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.

<h2 id="tocS_FileSystemId">FileSystemId</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemid"></a>
<a id="schema_FileSystemId"></a>
<a id="tocSfilesystemid"></a>
<a id="tocsfilesystemid"></a>

```json
"stringstrin"
```

The globally unique ID of the file system, assigned by Amazon FSx.

<h2 id="tocS_EventTypes">EventTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypes"></a>
<a id="schema_EventTypes"></a>
<a id="tocSeventtypes"></a>
<a id="tocseventtypes"></a>

```json
[
  "NEW"
]
```

<h2 id="tocS_AutoExportPolicy">AutoExportPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautoexportpolicy"></a>
<a id="schema_AutoExportPolicy"></a>
<a id="tocSautoexportpolicy"></a>
<a id="tocsautoexportpolicy"></a>

```json
{
  "Events": {}
}
```

<p>Describes a data repository association's automatic export policy. The <code>AutoExportPolicy</code> defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.</p> <p>The <code>AutoExportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|false|none|none|

<h2 id="tocS_AutoImportPolicy">AutoImportPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautoimportpolicy"></a>
<a id="schema_AutoImportPolicy"></a>
<a id="tocSautoimportpolicy"></a>
<a id="tocsautoimportpolicy"></a>

```json
{
  "Events": {}
}
```

<p>Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.</p> <p>The <code>AutoImportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|false|none|none|

<h2 id="tocS_AutoImportPolicyType">AutoImportPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemaautoimportpolicytype"></a>
<a id="schema_AutoImportPolicyType"></a>
<a id="tocSautoimportpolicytype"></a>
<a id="tocsautoimportpolicytype"></a>

```json
"NONE"
```

<h2 id="tocS_AutomaticBackupRetentionDays">AutomaticBackupRetentionDays</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticbackupretentiondays"></a>
<a id="schema_AutomaticBackupRetentionDays"></a>
<a id="tocSautomaticbackupretentiondays"></a>
<a id="tocsautomaticbackupretentiondays"></a>

```json
0
```

The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.

<h2 id="tocS_BackupId">BackupId</h2>
<!-- backwards compatibility -->
<a id="schemabackupid"></a>
<a id="schema_BackupId"></a>
<a id="tocSbackupid"></a>
<a id="tocsbackupid"></a>

```json
"stringstring"
```

The ID of the source backup. Specifies the backup that you are copying.

<h2 id="tocS_BackupLifecycle">BackupLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemabackuplifecycle"></a>
<a id="schema_BackupLifecycle"></a>
<a id="tocSbackuplifecycle"></a>
<a id="tocsbackuplifecycle"></a>

```json
"AVAILABLE"
```

<p>The lifecycle status of the backup.</p> <ul> <li> <p> <code>AVAILABLE</code> - The backup is fully available.</p> </li> <li> <p> <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new user-initiated backup.</p> </li> <li> <p> <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is backing up the file system.</p> </li> <li> <p> <code>COPYING</code> - Amazon FSx is copying the backup.</p> </li> <li> <p> <code>DELETED</code> - Amazon FSx deleted the backup and it's no longer available.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx couldn't finish the backup.</p> </li> </ul>

<h2 id="tocS_BackupFailureDetails">BackupFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemabackupfailuredetails"></a>
<a id="schema_BackupFailureDetails"></a>
<a id="tocSbackupfailuredetails"></a>
<a id="tocsbackupfailuredetails"></a>

```json
{
  "Message": {}
}
```

If backup creation fails, this structure contains the details of that failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_BackupType">BackupType</h2>
<!-- backwards compatibility -->
<a id="schemabackuptype"></a>
<a id="schema_BackupType"></a>
<a id="tocSbackuptype"></a>
<a id="tocsbackuptype"></a>

```json
"AUTOMATIC"
```

The type of the backup.

<h2 id="tocS_CreationTime">CreationTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationtime"></a>
<a id="schema_CreationTime"></a>
<a id="tocScreationtime"></a>
<a id="tocscreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

A list of <code>Tag</code> values, with a maximum of 50 elements.

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"FILE_SYSTEM"
```

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "BackupId": {},
  "Lifecycle": {},
  "FailureDetails": {
    "Message": {}
  },
  "Type": {},
  "ProgressPercent": 0,
  "CreationTime": {},
  "KmsKeyId": {},
  "ResourceARN": {},
  "Tags": {},
  "FileSystem": {
    "OwnerId": {},
    "CreationTime": {},
    "FileSystemId": {},
    "FileSystemType": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "StorageType": {},
    "VpcId": {},
    "SubnetIds": {},
    "NetworkInterfaceIds": {},
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": {},
    "Tags": {},
    "WindowsConfiguration": {
      "ActiveDirectoryId": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      },
      "DeploymentType": {},
      "RemoteAdministrationEndpoint": {},
      "PreferredSubnetId": {},
      "PreferredFileServerIp": {},
      "ThroughputCapacity": {},
      "MaintenanceOperationsInProgress": {},
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "CopyTagsToBackups": {},
      "Aliases": [
        {
          "Name": {},
          "Lifecycle": {}
        }
      ],
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "DataRepositoryConfiguration": {
        "Lifecycle": {},
        "ImportPath": {},
        "ExportPath": {},
        "ImportedFileChunkSize": {},
        "AutoImportPolicy": {},
        "FailureDetails": {
          "Message": "string"
        }
      },
      "DeploymentType": {},
      "PerUnitStorageThroughput": {},
      "MountName": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "DriveCacheType": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "AdministrativeActions": {},
    "OntapConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "EndpointIpAddressRange": {},
      "Endpoints": {
        "Intercluster": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        },
        "Management": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        }
      },
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "PreferredSubnetId": "stringstringstr",
      "RouteTableIds": {},
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "strings"
    },
    "FileSystemTypeVersion": {},
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "RootVolumeId": {}
    }
  },
  "DirectoryInformation": {
    "DomainName": {},
    "ActiveDirectoryId": {},
    "ResourceARN": "stringst"
  },
  "OwnerId": "stringstring",
  "SourceBackupId": "stringstring",
  "SourceBackupRegion": {},
  "ResourceType": {},
  "Volume": {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
    }
  }
}
```

A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|
|Lifecycle|object|true|none|none|
|FailureDetails|object|false|none|none|
|Type|object|true|none|none|
|ProgressPercent|[ProgressPercent](#schemaprogresspercent)|false|none|The current percent of progress of an asynchronous task.|
|CreationTime|object|true|none|none|
|KmsKeyId|object|false|none|none|
|ResourceARN|object|false|none|none|
|Tags|object|false|none|none|
|FileSystem|object|true|none|none|
|DirectoryInformation|object|false|none|none|
|OwnerId|[AWSAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.|
|SourceBackupId|[BackupId](#schemabackupid)|false|none|The ID of the source backup. Specifies the backup that you are copying.|
|SourceBackupRegion|object|false|none|none|
|ResourceType|object|false|none|none|
|Volume|[Volume](#schemavolume)|false|none|Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.|

<h2 id="tocS_BackupIds">BackupIds</h2>
<!-- backwards compatibility -->
<a id="schemabackupids"></a>
<a id="schema_BackupIds"></a>
<a id="tocSbackupids"></a>
<a id="tocsbackupids"></a>

```json
[
  "stringstring"
]
```

A list of backup IDs.

<h2 id="tocS_Backups">Backups</h2>
<!-- backwards compatibility -->
<a id="schemabackups"></a>
<a id="schema_Backups"></a>
<a id="tocSbackups"></a>
<a id="tocsbackups"></a>

```json
[
  {
    "BackupId": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "Type": {},
    "ProgressPercent": 0,
    "CreationTime": {},
    "KmsKeyId": {},
    "ResourceARN": {},
    "Tags": {},
    "FileSystem": {
      "OwnerId": {},
      "CreationTime": {},
      "FileSystemId": {},
      "FileSystemType": {},
      "Lifecycle": {},
      "FailureDetails": {
        "Message": {}
      },
      "StorageCapacity": {},
      "StorageType": {},
      "VpcId": {},
      "SubnetIds": {},
      "NetworkInterfaceIds": {},
      "DNSName": {},
      "KmsKeyId": {},
      "ResourceARN": {},
      "Tags": {},
      "WindowsConfiguration": {
        "ActiveDirectoryId": {},
        "SelfManagedActiveDirectoryConfiguration": {
          "DomainName": {},
          "OrganizationalUnitDistinguishedName": {},
          "FileSystemAdministratorsGroup": {},
          "UserName": {},
          "DnsIps": {}
        },
        "DeploymentType": {},
        "RemoteAdministrationEndpoint": {},
        "PreferredSubnetId": {},
        "PreferredFileServerIp": {},
        "ThroughputCapacity": {},
        "MaintenanceOperationsInProgress": {},
        "WeeklyMaintenanceStartTime": {},
        "DailyAutomaticBackupStartTime": {},
        "AutomaticBackupRetentionDays": {},
        "CopyTagsToBackups": {},
        "Aliases": [
          {
            "Name": {},
            "Lifecycle": {}
          }
        ],
        "AuditLogConfiguration": {
          "FileAccessAuditLogLevel": {},
          "FileShareAccessAuditLogLevel": {},
          "AuditLogDestination": {}
        }
      },
      "LustreConfiguration": {
        "WeeklyMaintenanceStartTime": {},
        "DataRepositoryConfiguration": {
          "Lifecycle": {},
          "ImportPath": {},
          "ExportPath": {},
          "ImportedFileChunkSize": {},
          "AutoImportPolicy": {},
          "FailureDetails": {
            "Message": "string"
          }
        },
        "DeploymentType": {},
        "PerUnitStorageThroughput": {},
        "MountName": {},
        "DailyAutomaticBackupStartTime": "strin",
        "AutomaticBackupRetentionDays": 0,
        "CopyTagsToBackups": {},
        "DriveCacheType": {},
        "DataCompressionType": {},
        "LogConfiguration": {
          "Level": {},
          "Destination": {}
        },
        "RootSquashConfiguration": {
          "RootSquash": {},
          "NoSquashNids": {}
        }
      },
      "AdministrativeActions": {},
      "OntapConfiguration": {
        "AutomaticBackupRetentionDays": 0,
        "DailyAutomaticBackupStartTime": "strin",
        "DeploymentType": {},
        "EndpointIpAddressRange": {},
        "Endpoints": {
          "Intercluster": {
            "DNSName": "stringstringstri",
            "IpAddresses": {}
          },
          "Management": {
            "DNSName": "stringstringstri",
            "IpAddresses": {}
          }
        },
        "DiskIopsConfiguration": {
          "Mode": {},
          "Iops": {}
        },
        "PreferredSubnetId": "stringstringstr",
        "RouteTableIds": {},
        "ThroughputCapacity": 8,
        "WeeklyMaintenanceStartTime": "strings"
      },
      "FileSystemTypeVersion": {},
      "OpenZFSConfiguration": {
        "AutomaticBackupRetentionDays": 0,
        "CopyTagsToBackups": {},
        "CopyTagsToVolumes": {},
        "DailyAutomaticBackupStartTime": "strin",
        "DeploymentType": {},
        "ThroughputCapacity": {},
        "WeeklyMaintenanceStartTime": "strings",
        "DiskIopsConfiguration": {
          "Mode": {},
          "Iops": {}
        },
        "RootVolumeId": {}
      }
    },
    "DirectoryInformation": {
      "DomainName": {},
      "ActiveDirectoryId": {},
      "ResourceARN": "stringst"
    },
    "OwnerId": "stringstring",
    "SourceBackupId": "stringstring",
    "SourceBackupRegion": {},
    "ResourceType": {},
    "Volume": {
      "CreationTime": "1970-01-01T00:00:00Z",
      "FileSystemId": "stringstrin",
      "Lifecycle": {},
      "Name": {},
      "OntapConfiguration": {
        "FlexCacheEndpointType": {},
        "JunctionPath": {},
        "SecurityStyle": {},
        "SizeInMegabytes": {},
        "StorageEfficiencyEnabled": {},
        "StorageVirtualMachineId": {},
        "StorageVirtualMachineRoot": {},
        "TieringPolicy": {
          "CoolingPeriod": {},
          "Name": {}
        },
        "UUID": {},
        "OntapVolumeType": {},
        "SnapshotPolicy": {},
        "CopyTagsToBackups": {}
      },
      "ResourceARN": "stringst",
      "Tags": [
        {
          "Key": {},
          "Value": {}
        }
      ],
      "VolumeId": {},
      "VolumeType": {},
      "LifecycleTransitionReason": {
        "Message": "string"
      },
      "AdministrativeActions": {},
      "OpenZFSConfiguration": {
        "ParentVolumeId": {},
        "VolumePath": {},
        "StorageCapacityReservationGiB": {},
        "StorageCapacityQuotaGiB": {},
        "RecordSizeKiB": {},
        "DataCompressionType": {},
        "CopyTagsToSnapshots": {},
        "OriginSnapshot": {
          "SnapshotARN": "stringst",
          "CopyStrategy": {}
        },
        "ReadOnly": {},
        "NfsExports": {},
        "UserAndGroupQuotas": {},
        "RestoreToSnapshot": {},
        "DeleteIntermediateSnaphots": {},
        "DeleteClonedVolumes": {}
      }
    }
  }
]
```

A list of file system backups.

<h2 id="tocS_BatchImportMetaDataOnCreate">BatchImportMetaDataOnCreate</h2>
<!-- backwards compatibility -->
<a id="schemabatchimportmetadataoncreate"></a>
<a id="schema_BatchImportMetaDataOnCreate"></a>
<a id="tocSbatchimportmetadataoncreate"></a>
<a id="tocsbatchimportmetadataoncreate"></a>

```json
true
```

<h2 id="tocS_TaskId">TaskId</h2>
<!-- backwards compatibility -->
<a id="schemataskid"></a>
<a id="schema_TaskId"></a>
<a id="tocStaskid"></a>
<a id="tocstaskid"></a>

```json
"stringstring"
```

<h2 id="tocS_DataRepositoryTaskLifecycle">DataRepositoryTaskLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytasklifecycle"></a>
<a id="schema_DataRepositoryTaskLifecycle"></a>
<a id="tocSdatarepositorytasklifecycle"></a>
<a id="tocsdatarepositorytasklifecycle"></a>

```json
"PENDING"
```

<h2 id="tocS_CapacityToRelease">CapacityToRelease</h2>
<!-- backwards compatibility -->
<a id="schemacapacitytorelease"></a>
<a id="schema_CapacityToRelease"></a>
<a id="tocScapacitytorelease"></a>
<a id="tocscapacitytorelease"></a>

```json
1
```

<h2 id="tocS_Flag">Flag</h2>
<!-- backwards compatibility -->
<a id="schemaflag"></a>
<a id="schema_Flag"></a>
<a id="tocSflag"></a>
<a id="tocsflag"></a>

```json
true
```

<h2 id="tocS_ReportFormat">ReportFormat</h2>
<!-- backwards compatibility -->
<a id="schemareportformat"></a>
<a id="schema_ReportFormat"></a>
<a id="tocSreportformat"></a>
<a id="tocsreportformat"></a>

```json
"REPORT_CSV_20191124"
```

<h2 id="tocS_ReportScope">ReportScope</h2>
<!-- backwards compatibility -->
<a id="schemareportscope"></a>
<a id="schema_ReportScope"></a>
<a id="tocSreportscope"></a>
<a id="tocsreportscope"></a>

```json
"FAILED_FILES_ONLY"
```

<h2 id="tocS_CompletionReport">CompletionReport</h2>
<!-- backwards compatibility -->
<a id="schemacompletionreport"></a>
<a id="schema_CompletionReport"></a>
<a id="tocScompletionreport"></a>
<a id="tocscompletionreport"></a>

```json
{
  "Enabled": {},
  "Path": {},
  "Format": {},
  "Scope": {}
}
```

Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Path|object|false|none|none|
|Format|object|false|none|none|
|Scope|object|false|none|none|

<h2 id="tocS_CoolingPeriod">CoolingPeriod</h2>
<!-- backwards compatibility -->
<a id="schemacoolingperiod"></a>
<a id="schema_CoolingPeriod"></a>
<a id="tocScoolingperiod"></a>
<a id="tocscoolingperiod"></a>

```json
2
```

<h2 id="tocS_SourceBackupId">SourceBackupId</h2>
<!-- backwards compatibility -->
<a id="schemasourcebackupid"></a>
<a id="schema_SourceBackupId"></a>
<a id="tocSsourcebackupid"></a>
<a id="tocssourcebackupid"></a>

```json
"stringstring"
```

<h2 id="tocS_CopyTagsToDataRepositoryAssociations">CopyTagsToDataRepositoryAssociations</h2>
<!-- backwards compatibility -->
<a id="schemacopytagstodatarepositoryassociations"></a>
<a id="schema_CopyTagsToDataRepositoryAssociations"></a>
<a id="tocScopytagstodatarepositoryassociations"></a>
<a id="tocscopytagstodatarepositoryassociations"></a>

```json
true
```

<h2 id="tocS_VolumeId">VolumeId</h2>
<!-- backwards compatibility -->
<a id="schemavolumeid"></a>
<a id="schema_VolumeId"></a>
<a id="tocSvolumeid"></a>
<a id="tocsvolumeid"></a>

```json
"stringstringstringstrin"
```

<h2 id="tocS_Namespace">Namespace</h2>
<!-- backwards compatibility -->
<a id="schemanamespace"></a>
<a id="schema_Namespace"></a>
<a id="tocSnamespace"></a>
<a id="tocsnamespace"></a>

```json
"string"
```

<h2 id="tocS_Megabytes">Megabytes</h2>
<!-- backwards compatibility -->
<a id="schemamegabytes"></a>
<a id="schema_Megabytes"></a>
<a id="tocSmegabytes"></a>
<a id="tocsmegabytes"></a>

```json
1
```

<h2 id="tocS_S3DataRepositoryConfiguration">S3DataRepositoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3datarepositoryconfiguration"></a>
<a id="schema_S3DataRepositoryConfiguration"></a>
<a id="tocSs3datarepositoryconfiguration"></a>
<a id="tocss3datarepositoryconfiguration"></a>

```json
{
  "AutoImportPolicy": {
    "Events": {}
  },
  "AutoExportPolicy": {
    "Events": {}
  }
}
```

<p>The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association. The configuration consists of an <code>AutoImportPolicy</code> that defines which file events on the data repository are automatically imported to the file system and an <code>AutoExportPolicy</code> that defines which file events on the file system are automatically exported to the data repository. File events are when files or directories are added, changed, or deleted on the file system or the data repository.</p> <note> <p>Data repository associations on Amazon File Cache don't use <code>S3DataRepositoryConfiguration</code> because they don't support automatic import or automatic export.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoImportPolicy|object|false|none|none|
|AutoExportPolicy|object|false|none|none|

<h2 id="tocS_DataRepositoryAssociation">DataRepositoryAssociation</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositoryassociation"></a>
<a id="schema_DataRepositoryAssociation"></a>
<a id="tocSdatarepositoryassociation"></a>
<a id="tocsdatarepositoryassociation"></a>

```json
{
  "AssociationId": {},
  "ResourceARN": "stringst",
  "FileSystemId": "stringstrin",
  "Lifecycle": {},
  "FailureDetails": {
    "Message": "string"
  },
  "FileSystemPath": {},
  "DataRepositoryPath": {},
  "BatchImportMetaDataOnCreate": {},
  "ImportedFileChunkSize": {},
  "S3": {
    "AutoImportPolicy": {
      "Events": {}
    },
    "AutoExportPolicy": {
      "Events": {}
    }
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CreationTime": "1970-01-01T00:00:00Z",
  "FileCacheId": {},
  "FileCachePath": {},
  "DataRepositorySubdirectories": {},
  "NFS": {
    "Version": {},
    "DnsIps": {},
    "AutoExportPolicy": {
      "Events": {}
    }
  }
}
```

<p>The configuration of a data repository association that links an Amazon FSx for Lustre file system to an Amazon S3 bucket or an Amazon File Cache resource to an Amazon S3 bucket or an NFS file system. The data repository association configuration object is returned in the response of the following operations:</p> <ul> <li> <p> <code>CreateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>UpdateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>DescribeDataRepositoryAssociations</code> </p> </li> </ul> <p>Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|FileSystemId|[FileSystemId](#schemafilesystemid)|false|none|The globally unique ID of the file system, assigned by Amazon FSx.|
|Lifecycle|object|false|none|none|
|FailureDetails|[DataRepositoryFailureDetails](#schemadatarepositoryfailuredetails)|false|none|Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>.|
|FileSystemPath|object|false|none|none|
|DataRepositoryPath|object|false|none|none|
|BatchImportMetaDataOnCreate|object|false|none|none|
|ImportedFileChunkSize|object|false|none|none|
|S3|object|false|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|CreationTime|[CreationTime](#schemacreationtime)|false|none|The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.|
|FileCacheId|object|false|none|none|
|FileCachePath|object|false|none|none|
|DataRepositorySubdirectories|object|false|none|none|
|NFS|object|false|none|none|

<h2 id="tocS_DataRepositoryTaskType">DataRepositoryTaskType</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytasktype"></a>
<a id="schema_DataRepositoryTaskType"></a>
<a id="tocSdatarepositorytasktype"></a>
<a id="tocsdatarepositorytasktype"></a>

```json
"EXPORT_TO_REPOSITORY"
```

<h2 id="tocS_DataRepositoryTaskPaths">DataRepositoryTaskPaths</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskpaths"></a>
<a id="schema_DataRepositoryTaskPaths"></a>
<a id="tocSdatarepositorytaskpaths"></a>
<a id="tocsdatarepositorytaskpaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DataRepositoryTask">DataRepositoryTask</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytask"></a>
<a id="schema_DataRepositoryTask"></a>
<a id="tocSdatarepositorytask"></a>
<a id="tocsdatarepositorytask"></a>

```json
{
  "TaskId": {},
  "Lifecycle": {},
  "Type": {},
  "CreationTime": "1970-01-01T00:00:00Z",
  "StartTime": {},
  "EndTime": {},
  "ResourceARN": "stringst",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "FileSystemId": {},
  "Paths": {},
  "FailureDetails": {
    "Message": "string"
  },
  "Status": {
    "TotalCount": {},
    "SucceededCount": {},
    "FailedCount": {},
    "LastUpdatedTime": {},
    "ReleasedCapacity": {}
  },
  "Report": {
    "Enabled": {},
    "Path": {},
    "Format": {},
    "Scope": {}
  },
  "CapacityToRelease": {},
  "FileCacheId": {}
}
```

A description of the data repository task. You use data repository tasks to perform bulk transfer operations between an Amazon FSx for Lustre file system and a linked data repository. An Amazon File Cache resource uses a task to automatically release files from the cache.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskId|object|true|none|none|
|Lifecycle|object|true|none|none|
|Type|object|true|none|none|
|CreationTime|[CreationTime](#schemacreationtime)|true|none|The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|FileSystemId|object|false|none|none|
|Paths|object|false|none|none|
|FailureDetails|object|false|none|none|
|Status|object|false|none|none|
|Report|[CompletionReport](#schemacompletionreport)|false|none|Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.|
|CapacityToRelease|object|false|none|none|
|FileCacheId|object|false|none|none|

<h2 id="tocS_FileCacheDataRepositoryAssociation">FileCacheDataRepositoryAssociation</h2>
<!-- backwards compatibility -->
<a id="schemafilecachedatarepositoryassociation"></a>
<a id="schema_FileCacheDataRepositoryAssociation"></a>
<a id="tocSfilecachedatarepositoryassociation"></a>
<a id="tocsfilecachedatarepositoryassociation"></a>

```json
{
  "FileCachePath": {},
  "DataRepositoryPath": {},
  "DataRepositorySubdirectories": {},
  "NFS": {
    "Version": {},
    "DnsIps": {}
  }
}
```

<p>The configuration for a data repository association (DRA) to be created during the Amazon File Cache resource creation. The DRA links the cache to either an Amazon S3 bucket or prefix, or a Network File System (NFS) data repository that supports the NFSv3 protocol.</p> <p>The DRA does not support automatic import or automatic export.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCachePath|object|true|none|none|
|DataRepositoryPath|object|true|none|none|
|DataRepositorySubdirectories|object|false|none|none|
|NFS|object|false|none|none|

<h2 id="tocS_CreateFileCacheDataRepositoryAssociations">CreateFileCacheDataRepositoryAssociations</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilecachedatarepositoryassociations"></a>
<a id="schema_CreateFileCacheDataRepositoryAssociations"></a>
<a id="tocScreatefilecachedatarepositoryassociations"></a>
<a id="tocscreatefilecachedatarepositoryassociations"></a>

```json
[
  {
    "FileCachePath": {},
    "DataRepositoryPath": {},
    "DataRepositorySubdirectories": {},
    "NFS": {
      "Version": {},
      "DnsIps": {}
    }
  }
]
```

<h2 id="tocS_PerUnitStorageThroughput">PerUnitStorageThroughput</h2>
<!-- backwards compatibility -->
<a id="schemaperunitstoragethroughput"></a>
<a id="schema_PerUnitStorageThroughput"></a>
<a id="tocSperunitstoragethroughput"></a>
<a id="tocsperunitstoragethroughput"></a>

```json
12
```

<h2 id="tocS_FileCacheLustreDeploymentType">FileCacheLustreDeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemafilecachelustredeploymenttype"></a>
<a id="schema_FileCacheLustreDeploymentType"></a>
<a id="tocSfilecachelustredeploymenttype"></a>
<a id="tocsfilecachelustredeploymenttype"></a>

```json
"CACHE_1"
```

<h2 id="tocS_WeeklyTime">WeeklyTime</h2>
<!-- backwards compatibility -->
<a id="schemaweeklytime"></a>
<a id="schema_WeeklyTime"></a>
<a id="tocSweeklytime"></a>
<a id="tocsweeklytime"></a>

```json
"strings"
```

<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>

<h2 id="tocS_FileCacheLustreMetadataConfiguration">FileCacheLustreMetadataConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafilecachelustremetadataconfiguration"></a>
<a id="schema_FileCacheLustreMetadataConfiguration"></a>
<a id="tocSfilecachelustremetadataconfiguration"></a>
<a id="tocsfilecachelustremetadataconfiguration"></a>

```json
{
  "StorageCapacity": {}
}
```

The configuration for a Lustre MDT (Metadata Target) storage volume. The metadata on Amazon File Cache is managed by a Lustre Metadata Server (MDS) while the actual metadata is persisted on an MDT.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageCapacity|object|true|none|none|

<h2 id="tocS_CreateFileCacheLustreConfiguration">CreateFileCacheLustreConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilecachelustreconfiguration"></a>
<a id="schema_CreateFileCacheLustreConfiguration"></a>
<a id="tocScreatefilecachelustreconfiguration"></a>
<a id="tocscreatefilecachelustreconfiguration"></a>

```json
{
  "PerUnitStorageThroughput": {},
  "DeploymentType": {},
  "WeeklyMaintenanceStartTime": "strings",
  "MetadataConfiguration": {
    "StorageCapacity": {}
  }
}
```

The Amazon File Cache configuration for the cache that you are creating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PerUnitStorageThroughput|object|true|none|none|
|DeploymentType|object|true|none|none|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|MetadataConfiguration|object|true|none|none|

<h2 id="tocS_FileCacheType">FileCacheType</h2>
<!-- backwards compatibility -->
<a id="schemafilecachetype"></a>
<a id="schema_FileCacheType"></a>
<a id="tocSfilecachetype"></a>
<a id="tocsfilecachetype"></a>

```json
"LUSTRE"
```

<h2 id="tocS_FileSystemTypeVersion">FileSystemTypeVersion</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemtypeversion"></a>
<a id="schema_FileSystemTypeVersion"></a>
<a id="tocSfilesystemtypeversion"></a>
<a id="tocsfilesystemtypeversion"></a>

```json
"string"
```

<h2 id="tocS_StorageCapacity">StorageCapacity</h2>
<!-- backwards compatibility -->
<a id="schemastoragecapacity"></a>
<a id="schema_StorageCapacity"></a>
<a id="tocSstoragecapacity"></a>
<a id="tocsstoragecapacity"></a>

```json
0
```

The storage capacity for your Amazon FSx file system, in gibibytes.

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "stringstringstr"
]
```

A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "stringstrin"
]
```

A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.

<h2 id="tocS_FileCacheCreating">FileCacheCreating</h2>
<!-- backwards compatibility -->
<a id="schemafilecachecreating"></a>
<a id="schema_FileCacheCreating"></a>
<a id="tocSfilecachecreating"></a>
<a id="tocsfilecachecreating"></a>

```json
{
  "OwnerId": "stringstring",
  "CreationTime": "1970-01-01T00:00:00Z",
  "FileCacheId": {},
  "FileCacheType": {},
  "FileCacheTypeVersion": {},
  "Lifecycle": {},
  "FailureDetails": {
    "Message": {}
  },
  "StorageCapacity": {},
  "VpcId": "stringstring",
  "SubnetIds": [
    "stringstringstr"
  ],
  "NetworkInterfaceIds": [
    "stringstring"
  ],
  "DNSName": {},
  "KmsKeyId": {},
  "ResourceARN": "stringst",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CopyTagsToDataRepositoryAssociations": {},
  "LustreConfiguration": {
    "PerUnitStorageThroughput": {},
    "DeploymentType": {},
    "MountName": {},
    "WeeklyMaintenanceStartTime": "strings",
    "MetadataConfiguration": {
      "StorageCapacity": {}
    },
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    }
  },
  "DataRepositoryAssociationIds": {}
}
```

The response object for the Amazon File Cache resource being created in the <code>CreateFileCache</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerId|[AWSAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.|
|CreationTime|[CreationTime](#schemacreationtime)|false|none|The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.|
|FileCacheId|object|false|none|none|
|FileCacheType|object|false|none|none|
|FileCacheTypeVersion|object|false|none|none|
|Lifecycle|object|false|none|none|
|FailureDetails|object|false|none|none|
|StorageCapacity|object|false|none|none|
|VpcId|[VpcId](#schemavpcid)|false|none|The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.|
|SubnetIds|[SubnetIds](#schemasubnetids)|false|none|A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.|
|NetworkInterfaceIds|[NetworkInterfaceIds](#schemanetworkinterfaceids)|false|none|A list of network interface IDs.|
|DNSName|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|CopyTagsToDataRepositoryAssociations|object|false|none|none|
|LustreConfiguration|object|false|none|none|
|DataRepositoryAssociationIds|object|false|none|none|

<h2 id="tocS_CreateFileSystemWindowsConfiguration">CreateFileSystemWindowsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemwindowsconfiguration"></a>
<a id="schema_CreateFileSystemWindowsConfiguration"></a>
<a id="tocScreatefilesystemwindowsconfiguration"></a>
<a id="tocscreatefilesystemwindowsconfiguration"></a>

```json
{
  "ActiveDirectoryId": {},
  "SelfManagedActiveDirectoryConfiguration": {
    "DomainName": {},
    "OrganizationalUnitDistinguishedName": {},
    "FileSystemAdministratorsGroup": {},
    "UserName": {},
    "Password": {},
    "DnsIps": {}
  },
  "DeploymentType": {},
  "PreferredSubnetId": {},
  "ThroughputCapacity": {},
  "WeeklyMaintenanceStartTime": {},
  "DailyAutomaticBackupStartTime": {},
  "AutomaticBackupRetentionDays": {},
  "CopyTagsToBackups": {},
  "Aliases": {},
  "AuditLogConfiguration": {
    "FileAccessAuditLogLevel": {},
    "FileShareAccessAuditLogLevel": {},
    "AuditLogDestination": {}
  }
}
```

The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveDirectoryId|object|false|none|none|
|SelfManagedActiveDirectoryConfiguration|[SelfManagedActiveDirectoryConfiguration](#schemaselfmanagedactivedirectoryconfiguration)|false|none|The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.|
|DeploymentType|object|false|none|none|
|PreferredSubnetId|object|false|none|none|
|ThroughputCapacity|object|true|none|none|
|WeeklyMaintenanceStartTime|object|false|none|none|
|DailyAutomaticBackupStartTime|object|false|none|none|
|AutomaticBackupRetentionDays|object|false|none|none|
|CopyTagsToBackups|object|false|none|none|
|Aliases|object|false|none|none|
|AuditLogConfiguration|object|false|none|none|

<h2 id="tocS_CreateFileSystemLustreConfiguration">CreateFileSystemLustreConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemlustreconfiguration"></a>
<a id="schema_CreateFileSystemLustreConfiguration"></a>
<a id="tocScreatefilesystemlustreconfiguration"></a>
<a id="tocscreatefilesystemlustreconfiguration"></a>

```json
{
  "WeeklyMaintenanceStartTime": {},
  "ImportPath": {},
  "ExportPath": {},
  "ImportedFileChunkSize": {},
  "DeploymentType": {},
  "AutoImportPolicy": {},
  "PerUnitStorageThroughput": {},
  "DailyAutomaticBackupStartTime": "strin",
  "AutomaticBackupRetentionDays": 0,
  "CopyTagsToBackups": {},
  "DriveCacheType": {},
  "DataCompressionType": {},
  "LogConfiguration": {
    "Level": {},
    "Destination": {}
  },
  "RootSquashConfiguration": {
    "RootSquash": {},
    "NoSquashNids": {}
  }
}
```

<p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WeeklyMaintenanceStartTime|object|false|none|none|
|ImportPath|object|false|none|none|
|ExportPath|object|false|none|none|
|ImportedFileChunkSize|object|false|none|none|
|DeploymentType|object|false|none|none|
|AutoImportPolicy|object|false|none|none|
|PerUnitStorageThroughput|object|false|none|none|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|CopyTagsToBackups|object|false|none|none|
|DriveCacheType|object|false|none|none|
|DataCompressionType|object|false|none|none|
|LogConfiguration|object|false|none|none|
|RootSquashConfiguration|object|false|none|none|

<h2 id="tocS_StorageType">StorageType</h2>
<!-- backwards compatibility -->
<a id="schemastoragetype"></a>
<a id="schema_StorageType"></a>
<a id="tocSstoragetype"></a>
<a id="tocsstoragetype"></a>

```json
"SSD"
```

The storage type for your Amazon FSx file system.

<h2 id="tocS_CreateFileSystemOpenZFSConfiguration">CreateFileSystemOpenZFSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemopenzfsconfiguration"></a>
<a id="schema_CreateFileSystemOpenZFSConfiguration"></a>
<a id="tocScreatefilesystemopenzfsconfiguration"></a>
<a id="tocscreatefilesystemopenzfsconfiguration"></a>

```json
{
  "AutomaticBackupRetentionDays": 0,
  "CopyTagsToBackups": {},
  "CopyTagsToVolumes": {},
  "DailyAutomaticBackupStartTime": "strin",
  "DeploymentType": {},
  "ThroughputCapacity": {},
  "WeeklyMaintenanceStartTime": "strings",
  "DiskIopsConfiguration": {
    "Mode": {},
    "Iops": {}
  },
  "RootVolumeConfiguration": {
    "RecordSizeKiB": {},
    "DataCompressionType": {},
    "NfsExports": {},
    "UserAndGroupQuotas": {},
    "CopyTagsToSnapshots": {},
    "ReadOnly": {}
  }
}
```

The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|CopyTagsToBackups|object|false|none|none|
|CopyTagsToVolumes|object|false|none|none|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|DeploymentType|object|true|none|none|
|ThroughputCapacity|object|true|none|none|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|DiskIopsConfiguration|[DiskIopsConfiguration](#schemadiskiopsconfiguration)|false|none|The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).|
|RootVolumeConfiguration|object|false|none|none|

<h2 id="tocS_LustreDeploymentType">LustreDeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemalustredeploymenttype"></a>
<a id="schema_LustreDeploymentType"></a>
<a id="tocSlustredeploymenttype"></a>
<a id="tocslustredeploymenttype"></a>

```json
"SCRATCH_1"
```

<h2 id="tocS_DailyTime">DailyTime</h2>
<!-- backwards compatibility -->
<a id="schemadailytime"></a>
<a id="schema_DailyTime"></a>
<a id="tocSdailytime"></a>
<a id="tocsdailytime"></a>

```json
"strin"
```

A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.

<h2 id="tocS_DriveCacheType">DriveCacheType</h2>
<!-- backwards compatibility -->
<a id="schemadrivecachetype"></a>
<a id="schema_DriveCacheType"></a>
<a id="tocSdrivecachetype"></a>
<a id="tocsdrivecachetype"></a>

```json
"NONE"
```

<h2 id="tocS_DataCompressionType">DataCompressionType</h2>
<!-- backwards compatibility -->
<a id="schemadatacompressiontype"></a>
<a id="schema_DataCompressionType"></a>
<a id="tocSdatacompressiontype"></a>
<a id="tocsdatacompressiontype"></a>

```json
"NONE"
```

<h2 id="tocS_LustreLogCreateConfiguration">LustreLogCreateConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalustrelogcreateconfiguration"></a>
<a id="schema_LustreLogCreateConfiguration"></a>
<a id="tocSlustrelogcreateconfiguration"></a>
<a id="tocslustrelogcreateconfiguration"></a>

```json
{
  "Level": {},
  "Destination": {}
}
```

<p>The Lustre logging configuration used when creating or updating an Amazon FSx for Lustre file system. An Amazon File Cache is created with Lustre logging enabled by default, with a setting of <code>WARN_ERROR</code> for the logging events. which can't be changed.</p> <p>Lustre logging writes the enabled logging events for your file system or cache to Amazon CloudWatch Logs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Level|object|true|none|none|
|Destination|object|false|none|none|

<h2 id="tocS_LustreRootSquashConfiguration">LustreRootSquashConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalustrerootsquashconfiguration"></a>
<a id="schema_LustreRootSquashConfiguration"></a>
<a id="tocSlustrerootsquashconfiguration"></a>
<a id="tocslustrerootsquashconfiguration"></a>

```json
{
  "RootSquash": {},
  "NoSquashNids": {}
}
```

<p>The configuration for Lustre root squash used to restrict root-level access from clients that try to access your FSx for Lustre file system as root. Use the <code>RootSquash</code> parameter to enable root squash. To learn more about Lustre root squash, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/root-squash.html">Lustre root squash</a>.</p> <p>You can also use the <code>NoSquashNids</code> parameter to provide an array of clients who are not affected by the root squash setting. These clients will access the file system as root, with unrestricted privileges.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RootSquash|object|false|none|none|
|NoSquashNids|object|false|none|none|

<h2 id="tocS_OntapDeploymentType">OntapDeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemaontapdeploymenttype"></a>
<a id="schema_OntapDeploymentType"></a>
<a id="tocSontapdeploymenttype"></a>
<a id="tocsontapdeploymenttype"></a>

```json
"MULTI_AZ_1"
```

<h2 id="tocS_IpAddressRange">IpAddressRange</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressrange"></a>
<a id="schema_IpAddressRange"></a>
<a id="tocSipaddressrange"></a>
<a id="tocsipaddressrange"></a>

```json
"stringstr"
```

<h2 id="tocS_DiskIopsConfiguration">DiskIopsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadiskiopsconfiguration"></a>
<a id="schema_DiskIopsConfiguration"></a>
<a id="tocSdiskiopsconfiguration"></a>
<a id="tocsdiskiopsconfiguration"></a>

```json
{
  "Mode": {},
  "Iops": {}
}
```

The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|Iops|object|false|none|none|

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"stringstringstr"
```

The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide.</i>

<h2 id="tocS_RouteTableIds">RouteTableIds</h2>
<!-- backwards compatibility -->
<a id="schemaroutetableids"></a>
<a id="schema_RouteTableIds"></a>
<a id="tocSroutetableids"></a>
<a id="tocsroutetableids"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_MegabytesPerSecond">MegabytesPerSecond</h2>
<!-- backwards compatibility -->
<a id="schemamegabytespersecond"></a>
<a id="schema_MegabytesPerSecond"></a>
<a id="tocSmegabytespersecond"></a>
<a id="tocsmegabytespersecond"></a>

```json
8
```

The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).

<h2 id="tocS_CreateFileSystemOntapConfiguration">CreateFileSystemOntapConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemontapconfiguration"></a>
<a id="schema_CreateFileSystemOntapConfiguration"></a>
<a id="tocScreatefilesystemontapconfiguration"></a>
<a id="tocscreatefilesystemontapconfiguration"></a>

```json
{
  "AutomaticBackupRetentionDays": 0,
  "DailyAutomaticBackupStartTime": "strin",
  "DeploymentType": {},
  "EndpointIpAddressRange": {},
  "FsxAdminPassword": {},
  "DiskIopsConfiguration": {
    "Mode": {},
    "Iops": {}
  },
  "PreferredSubnetId": {},
  "RouteTableIds": {},
  "ThroughputCapacity": {},
  "WeeklyMaintenanceStartTime": "strings"
}
```

The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|DeploymentType|object|true|none|none|
|EndpointIpAddressRange|object|false|none|none|
|FsxAdminPassword|object|false|none|none|
|DiskIopsConfiguration|object|false|none|none|
|PreferredSubnetId|object|false|none|none|
|RouteTableIds|object|false|none|none|
|ThroughputCapacity|object|true|none|none|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|

<h2 id="tocS_OpenZFSDeploymentType">OpenZFSDeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsdeploymenttype"></a>
<a id="schema_OpenZFSDeploymentType"></a>
<a id="tocSopenzfsdeploymenttype"></a>
<a id="tocsopenzfsdeploymenttype"></a>

```json
"SINGLE_AZ_1"
```

<h2 id="tocS_OpenZFSCreateRootVolumeConfiguration">OpenZFSCreateRootVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfscreaterootvolumeconfiguration"></a>
<a id="schema_OpenZFSCreateRootVolumeConfiguration"></a>
<a id="tocSopenzfscreaterootvolumeconfiguration"></a>
<a id="tocsopenzfscreaterootvolumeconfiguration"></a>

```json
{
  "RecordSizeKiB": {},
  "DataCompressionType": {},
  "NfsExports": {},
  "UserAndGroupQuotas": {},
  "CopyTagsToSnapshots": {},
  "ReadOnly": {}
}
```

The configuration of an Amazon FSx for OpenZFS root volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordSizeKiB|object|false|none|none|
|DataCompressionType|object|false|none|none|
|NfsExports|object|false|none|none|
|UserAndGroupQuotas|object|false|none|none|
|CopyTagsToSnapshots|object|false|none|none|
|ReadOnly|object|false|none|none|

<h2 id="tocS_FileSystemType">FileSystemType</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemtype"></a>
<a id="schema_FileSystemType"></a>
<a id="tocSfilesystemtype"></a>
<a id="tocsfilesystemtype"></a>

```json
"WINDOWS"
```

The type of file system.

<h2 id="tocS_SelfManagedActiveDirectoryConfiguration">SelfManagedActiveDirectoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaselfmanagedactivedirectoryconfiguration"></a>
<a id="schema_SelfManagedActiveDirectoryConfiguration"></a>
<a id="tocSselfmanagedactivedirectoryconfiguration"></a>
<a id="tocsselfmanagedactivedirectoryconfiguration"></a>

```json
{
  "DomainName": {},
  "OrganizationalUnitDistinguishedName": {},
  "FileSystemAdministratorsGroup": {},
  "UserName": {},
  "Password": {},
  "DnsIps": {}
}
```

The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|OrganizationalUnitDistinguishedName|object|false|none|none|
|FileSystemAdministratorsGroup|object|false|none|none|
|UserName|object|true|none|none|
|Password|object|true|none|none|
|DnsIps|object|true|none|none|

<h2 id="tocS_WindowsDeploymentType">WindowsDeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemawindowsdeploymenttype"></a>
<a id="schema_WindowsDeploymentType"></a>
<a id="tocSwindowsdeploymenttype"></a>
<a id="tocswindowsdeploymenttype"></a>

```json
"MULTI_AZ_1"
```

<h2 id="tocS_WindowsAuditLogCreateConfiguration">WindowsAuditLogCreateConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawindowsauditlogcreateconfiguration"></a>
<a id="schema_WindowsAuditLogCreateConfiguration"></a>
<a id="tocSwindowsauditlogcreateconfiguration"></a>
<a id="tocswindowsauditlogcreateconfiguration"></a>

```json
{
  "FileAccessAuditLogLevel": {},
  "FileShareAccessAuditLogLevel": {},
  "AuditLogDestination": {}
}
```

The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileAccessAuditLogLevel|object|true|none|none|
|FileShareAccessAuditLogLevel|object|true|none|none|
|AuditLogDestination|object|false|none|none|

<h2 id="tocS_JunctionPath">JunctionPath</h2>
<!-- backwards compatibility -->
<a id="schemajunctionpath"></a>
<a id="schema_JunctionPath"></a>
<a id="tocSjunctionpath"></a>
<a id="tocsjunctionpath"></a>

```json
"string"
```

<h2 id="tocS_SecurityStyle">SecurityStyle</h2>
<!-- backwards compatibility -->
<a id="schemasecuritystyle"></a>
<a id="schema_SecurityStyle"></a>
<a id="tocSsecuritystyle"></a>
<a id="tocssecuritystyle"></a>

```json
"UNIX"
```

<h2 id="tocS_VolumeCapacity">VolumeCapacity</h2>
<!-- backwards compatibility -->
<a id="schemavolumecapacity"></a>
<a id="schema_VolumeCapacity"></a>
<a id="tocSvolumecapacity"></a>
<a id="tocsvolumecapacity"></a>

```json
0
```

<h2 id="tocS_StorageVirtualMachineId">StorageVirtualMachineId</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachineid"></a>
<a id="schema_StorageVirtualMachineId"></a>
<a id="tocSstoragevirtualmachineid"></a>
<a id="tocsstoragevirtualmachineid"></a>

```json
"stringstringstringstr"
```

<h2 id="tocS_TieringPolicy">TieringPolicy</h2>
<!-- backwards compatibility -->
<a id="schematieringpolicy"></a>
<a id="schema_TieringPolicy"></a>
<a id="tocStieringpolicy"></a>
<a id="tocstieringpolicy"></a>

```json
{
  "CoolingPeriod": {},
  "Name": {}
}
```

<p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoolingPeriod|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_InputOntapVolumeType">InputOntapVolumeType</h2>
<!-- backwards compatibility -->
<a id="schemainputontapvolumetype"></a>
<a id="schema_InputOntapVolumeType"></a>
<a id="tocSinputontapvolumetype"></a>
<a id="tocsinputontapvolumetype"></a>

```json
"RW"
```

<h2 id="tocS_SnapshotPolicy">SnapshotPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotpolicy"></a>
<a id="schema_SnapshotPolicy"></a>
<a id="tocSsnapshotpolicy"></a>
<a id="tocssnapshotpolicy"></a>

```json
"string"
```

<h2 id="tocS_CreateOntapVolumeConfiguration">CreateOntapVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreateontapvolumeconfiguration"></a>
<a id="schema_CreateOntapVolumeConfiguration"></a>
<a id="tocScreateontapvolumeconfiguration"></a>
<a id="tocscreateontapvolumeconfiguration"></a>

```json
{
  "JunctionPath": {},
  "SecurityStyle": {},
  "SizeInMegabytes": {},
  "StorageEfficiencyEnabled": {},
  "StorageVirtualMachineId": {},
  "TieringPolicy": {
    "CoolingPeriod": {},
    "Name": {}
  },
  "OntapVolumeType": {},
  "SnapshotPolicy": {},
  "CopyTagsToBackups": {}
}
```

Specifies the configuration of the ONTAP volume that you are creating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JunctionPath|object|false|none|none|
|SecurityStyle|object|false|none|none|
|SizeInMegabytes|object|true|none|none|
|StorageEfficiencyEnabled|object|false|none|none|
|StorageVirtualMachineId|object|true|none|none|
|TieringPolicy|[TieringPolicy](#schematieringpolicy)|false|none|<p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul>|
|OntapVolumeType|object|false|none|none|
|SnapshotPolicy|object|false|none|none|
|CopyTagsToBackups|object|false|none|none|

<h2 id="tocS_OpenZFSCopyStrategy">OpenZFSCopyStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfscopystrategy"></a>
<a id="schema_OpenZFSCopyStrategy"></a>
<a id="tocSopenzfscopystrategy"></a>
<a id="tocsopenzfscopystrategy"></a>

```json
"CLONE"
```

<h2 id="tocS_CreateOpenZFSOriginSnapshotConfiguration">CreateOpenZFSOriginSnapshotConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreateopenzfsoriginsnapshotconfiguration"></a>
<a id="schema_CreateOpenZFSOriginSnapshotConfiguration"></a>
<a id="tocScreateopenzfsoriginsnapshotconfiguration"></a>
<a id="tocscreateopenzfsoriginsnapshotconfiguration"></a>

```json
{
  "SnapshotARN": "stringst",
  "CopyStrategy": {}
}
```

The snapshot configuration to use when creating an OpenZFS volume from a snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotARN|[ResourceARN](#schemaresourcearn)|true|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|CopyStrategy|object|true|none|none|

<h2 id="tocS_IntegerNoMaxFromNegativeOne">IntegerNoMaxFromNegativeOne</h2>
<!-- backwards compatibility -->
<a id="schemaintegernomaxfromnegativeone"></a>
<a id="schema_IntegerNoMaxFromNegativeOne"></a>
<a id="tocSintegernomaxfromnegativeone"></a>
<a id="tocsintegernomaxfromnegativeone"></a>

```json
-1
```

<h2 id="tocS_IntegerRecordSizeKiB">IntegerRecordSizeKiB</h2>
<!-- backwards compatibility -->
<a id="schemaintegerrecordsizekib"></a>
<a id="schema_IntegerRecordSizeKiB"></a>
<a id="tocSintegerrecordsizekib"></a>
<a id="tocsintegerrecordsizekib"></a>

```json
4
```

<h2 id="tocS_OpenZFSDataCompressionType">OpenZFSDataCompressionType</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsdatacompressiontype"></a>
<a id="schema_OpenZFSDataCompressionType"></a>
<a id="tocSopenzfsdatacompressiontype"></a>
<a id="tocsopenzfsdatacompressiontype"></a>

```json
"NONE"
```

<h2 id="tocS_ReadOnly">ReadOnly</h2>
<!-- backwards compatibility -->
<a id="schemareadonly"></a>
<a id="schema_ReadOnly"></a>
<a id="tocSreadonly"></a>
<a id="tocsreadonly"></a>

```json
true
```

<h2 id="tocS_OpenZFSNfsExports">OpenZFSNfsExports</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsnfsexports"></a>
<a id="schema_OpenZFSNfsExports"></a>
<a id="tocSopenzfsnfsexports"></a>
<a id="tocsopenzfsnfsexports"></a>

```json
[
  {
    "ClientConfigurations": {}
  }
]
```

<h2 id="tocS_OpenZFSUserAndGroupQuotas">OpenZFSUserAndGroupQuotas</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsuserandgroupquotas"></a>
<a id="schema_OpenZFSUserAndGroupQuotas"></a>
<a id="tocSopenzfsuserandgroupquotas"></a>
<a id="tocsopenzfsuserandgroupquotas"></a>

```json
[
  {
    "Type": {},
    "Id": {},
    "StorageCapacityQuotaGiB": {}
  }
]
```

<h2 id="tocS_CreateOpenZFSVolumeConfiguration">CreateOpenZFSVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreateopenzfsvolumeconfiguration"></a>
<a id="schema_CreateOpenZFSVolumeConfiguration"></a>
<a id="tocScreateopenzfsvolumeconfiguration"></a>
<a id="tocscreateopenzfsvolumeconfiguration"></a>

```json
{
  "ParentVolumeId": {},
  "StorageCapacityReservationGiB": {},
  "StorageCapacityQuotaGiB": {},
  "RecordSizeKiB": {},
  "DataCompressionType": {},
  "CopyTagsToSnapshots": {},
  "OriginSnapshot": {
    "SnapshotARN": "stringst",
    "CopyStrategy": {}
  },
  "ReadOnly": {},
  "NfsExports": {},
  "UserAndGroupQuotas": {}
}
```

Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentVolumeId|object|true|none|none|
|StorageCapacityReservationGiB|object|false|none|none|
|StorageCapacityQuotaGiB|object|false|none|none|
|RecordSizeKiB|object|false|none|none|
|DataCompressionType|object|false|none|none|
|CopyTagsToSnapshots|object|false|none|none|
|OriginSnapshot|object|false|none|none|
|ReadOnly|object|false|none|none|
|NfsExports|object|false|none|none|
|UserAndGroupQuotas|object|false|none|none|

<h2 id="tocS_SnapshotName">SnapshotName</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotname"></a>
<a id="schema_SnapshotName"></a>
<a id="tocSsnapshotname"></a>
<a id="tocssnapshotname"></a>

```json
"string"
```

<h2 id="tocS_CreateSvmActiveDirectoryConfiguration">CreateSvmActiveDirectoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatesvmactivedirectoryconfiguration"></a>
<a id="schema_CreateSvmActiveDirectoryConfiguration"></a>
<a id="tocScreatesvmactivedirectoryconfiguration"></a>
<a id="tocscreatesvmactivedirectoryconfiguration"></a>

```json
{
  "NetBiosName": {},
  "SelfManagedActiveDirectoryConfiguration": {
    "DomainName": {},
    "OrganizationalUnitDistinguishedName": {},
    "FileSystemAdministratorsGroup": {},
    "UserName": {},
    "Password": {},
    "DnsIps": {}
  }
}
```

The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetBiosName|object|true|none|none|
|SelfManagedActiveDirectoryConfiguration|[SelfManagedActiveDirectoryConfiguration](#schemaselfmanagedactivedirectoryconfiguration)|false|none|The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.|

<h2 id="tocS_StorageVirtualMachineName">StorageVirtualMachineName</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinename"></a>
<a id="schema_StorageVirtualMachineName"></a>
<a id="tocSstoragevirtualmachinename"></a>
<a id="tocsstoragevirtualmachinename"></a>

```json
"string"
```

<h2 id="tocS_StorageVirtualMachineRootVolumeSecurityStyle">StorageVirtualMachineRootVolumeSecurityStyle</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinerootvolumesecuritystyle"></a>
<a id="schema_StorageVirtualMachineRootVolumeSecurityStyle"></a>
<a id="tocSstoragevirtualmachinerootvolumesecuritystyle"></a>
<a id="tocsstoragevirtualmachinerootvolumesecuritystyle"></a>

```json
"UNIX"
```

<h2 id="tocS_StorageVirtualMachine">StorageVirtualMachine</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachine"></a>
<a id="schema_StorageVirtualMachine"></a>
<a id="tocSstoragevirtualmachine"></a>
<a id="tocsstoragevirtualmachine"></a>

```json
{
  "ActiveDirectoryConfiguration": {
    "NetBiosName": {},
    "SelfManagedActiveDirectoryConfiguration": {
      "DomainName": {},
      "OrganizationalUnitDistinguishedName": {},
      "FileSystemAdministratorsGroup": {},
      "UserName": {},
      "DnsIps": {}
    }
  },
  "CreationTime": "1970-01-01T00:00:00Z",
  "Endpoints": {
    "Iscsi": {
      "DNSName": "stringstringstri",
      "IpAddresses": {}
    },
    "Management": {
      "DNSName": "stringstringstri",
      "IpAddresses": {}
    },
    "Nfs": {
      "DNSName": "stringstringstri",
      "IpAddresses": {}
    },
    "Smb": {
      "DNSName": "stringstringstri",
      "IpAddresses": {}
    }
  },
  "FileSystemId": "stringstrin",
  "Lifecycle": {},
  "Name": {},
  "ResourceARN": "stringst",
  "StorageVirtualMachineId": {},
  "Subtype": {},
  "UUID": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "LifecycleTransitionReason": {
    "Message": "string"
  },
  "RootVolumeSecurityStyle": {}
}
```

Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveDirectoryConfiguration|object|false|none|none|
|CreationTime|[CreationTime](#schemacreationtime)|false|none|The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.|
|Endpoints|object|false|none|none|
|FileSystemId|[FileSystemId](#schemafilesystemid)|false|none|The globally unique ID of the file system, assigned by Amazon FSx.|
|Lifecycle|object|false|none|none|
|Name|object|false|none|none|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|StorageVirtualMachineId|object|false|none|none|
|Subtype|object|false|none|none|
|UUID|object|false|none|none|
|Tags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|
|LifecycleTransitionReason|object|false|none|none|
|RootVolumeSecurityStyle|object|false|none|none|

<h2 id="tocS_NetBiosAlias">NetBiosAlias</h2>
<!-- backwards compatibility -->
<a id="schemanetbiosalias"></a>
<a id="schema_NetBiosAlias"></a>
<a id="tocSnetbiosalias"></a>
<a id="tocsnetbiosalias"></a>

```json
"string"
```

<h2 id="tocS_VolumeName">VolumeName</h2>
<!-- backwards compatibility -->
<a id="schemavolumename"></a>
<a id="schema_VolumeName"></a>
<a id="tocSvolumename"></a>
<a id="tocsvolumename"></a>

```json
"string"
```

<h2 id="tocS_VolumeType">VolumeType</h2>
<!-- backwards compatibility -->
<a id="schemavolumetype"></a>
<a id="schema_VolumeType"></a>
<a id="tocSvolumetype"></a>
<a id="tocsvolumetype"></a>

```json
"ONTAP"
```

<h2 id="tocS_DNSName">DNSName</h2>
<!-- backwards compatibility -->
<a id="schemadnsname"></a>
<a id="schema_DNSName"></a>
<a id="tocSdnsname"></a>
<a id="tocsdnsname"></a>

```json
"stringstringstri"
```

The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.

<h2 id="tocS_DataRepositoryAssociationId">DataRepositoryAssociationId</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositoryassociationid"></a>
<a id="schema_DataRepositoryAssociationId"></a>
<a id="tocSdatarepositoryassociationid"></a>
<a id="tocsdatarepositoryassociationid"></a>

```json
"stringstrings"
```

<h2 id="tocS_DataRepositoryLifecycle">DataRepositoryLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorylifecycle"></a>
<a id="schema_DataRepositoryLifecycle"></a>
<a id="tocSdatarepositorylifecycle"></a>
<a id="tocsdatarepositorylifecycle"></a>

```json
"CREATING"
```

<h2 id="tocS_DataRepositoryFailureDetails">DataRepositoryFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositoryfailuredetails"></a>
<a id="schema_DataRepositoryFailureDetails"></a>
<a id="tocSdatarepositoryfailuredetails"></a>
<a id="tocsdatarepositoryfailuredetails"></a>

```json
{
  "Message": "string"
}
```

Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|[ErrorMessage](#schemaerrormessage)|false|none|A detailed error message.|

<h2 id="tocS_FileCacheId">FileCacheId</h2>
<!-- backwards compatibility -->
<a id="schemafilecacheid"></a>
<a id="schema_FileCacheId"></a>
<a id="tocSfilecacheid"></a>
<a id="tocsfilecacheid"></a>

```json
"stringstrin"
```

<h2 id="tocS_SubDirectoriesPaths">SubDirectoriesPaths</h2>
<!-- backwards compatibility -->
<a id="schemasubdirectoriespaths"></a>
<a id="schema_SubDirectoriesPaths"></a>
<a id="tocSsubdirectoriespaths"></a>
<a id="tocssubdirectoriespaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NFSDataRepositoryConfiguration">NFSDataRepositoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanfsdatarepositoryconfiguration"></a>
<a id="schema_NFSDataRepositoryConfiguration"></a>
<a id="tocSnfsdatarepositoryconfiguration"></a>
<a id="tocsnfsdatarepositoryconfiguration"></a>

```json
{
  "Version": {},
  "DnsIps": {},
  "AutoExportPolicy": {
    "Events": {}
  }
}
```

The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|true|none|none|
|DnsIps|object|false|none|none|
|AutoExportPolicy|object|false|none|none|

<h2 id="tocS_DataRepositoryAssociationIds">DataRepositoryAssociationIds</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositoryassociationids"></a>
<a id="schema_DataRepositoryAssociationIds"></a>
<a id="tocSdatarepositoryassociationids"></a>
<a id="tocsdatarepositoryassociationids"></a>

```json
[
  "stringstrings"
]
```

<h2 id="tocS_DataRepositoryAssociations">DataRepositoryAssociations</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositoryassociations"></a>
<a id="schema_DataRepositoryAssociations"></a>
<a id="tocSdatarepositoryassociations"></a>
<a id="tocsdatarepositoryassociations"></a>

```json
[
  {
    "AssociationId": {},
    "ResourceARN": "stringst",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "FailureDetails": {
      "Message": "string"
    },
    "FileSystemPath": {},
    "DataRepositoryPath": {},
    "BatchImportMetaDataOnCreate": {},
    "ImportedFileChunkSize": {},
    "S3": {
      "AutoImportPolicy": {
        "Events": {}
      },
      "AutoExportPolicy": {
        "Events": {}
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCachePath": {},
    "DataRepositorySubdirectories": {},
    "NFS": {
      "Version": {},
      "DnsIps": {},
      "AutoExportPolicy": {
        "Events": {}
      }
    }
  }
]
```

<h2 id="tocS_DataRepositoryConfiguration">DataRepositoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositoryconfiguration"></a>
<a id="schema_DataRepositoryConfiguration"></a>
<a id="tocSdatarepositoryconfiguration"></a>
<a id="tocsdatarepositoryconfiguration"></a>

```json
{
  "Lifecycle": {},
  "ImportPath": {},
  "ExportPath": {},
  "ImportedFileChunkSize": {},
  "AutoImportPolicy": {},
  "FailureDetails": {
    "Message": "string"
  }
}
```

<p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lifecycle|object|false|none|none|
|ImportPath|object|false|none|none|
|ExportPath|object|false|none|none|
|ImportedFileChunkSize|object|false|none|none|
|AutoImportPolicy|object|false|none|none|
|FailureDetails|[DataRepositoryFailureDetails](#schemadatarepositoryfailuredetails)|false|none|Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>.|

<h2 id="tocS_StartTime">StartTime</h2>
<!-- backwards compatibility -->
<a id="schemastarttime"></a>
<a id="schema_StartTime"></a>
<a id="tocSstarttime"></a>
<a id="tocsstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EndTime">EndTime</h2>
<!-- backwards compatibility -->
<a id="schemaendtime"></a>
<a id="schema_EndTime"></a>
<a id="tocSendtime"></a>
<a id="tocsendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DataRepositoryTaskFailureDetails">DataRepositoryTaskFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskfailuredetails"></a>
<a id="schema_DataRepositoryTaskFailureDetails"></a>
<a id="tocSdatarepositorytaskfailuredetails"></a>
<a id="tocsdatarepositorytaskfailuredetails"></a>

```json
{
  "Message": "string"
}
```

Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|[ErrorMessage](#schemaerrormessage)|false|none|A detailed error message.|

<h2 id="tocS_DataRepositoryTaskStatus">DataRepositoryTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskstatus"></a>
<a id="schema_DataRepositoryTaskStatus"></a>
<a id="tocSdatarepositorytaskstatus"></a>
<a id="tocsdatarepositorytaskstatus"></a>

```json
{
  "TotalCount": {},
  "SucceededCount": {},
  "FailedCount": {},
  "LastUpdatedTime": {},
  "ReleasedCapacity": {}
}
```

Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalCount|object|false|none|none|
|SucceededCount|object|false|none|none|
|FailedCount|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|ReleasedCapacity|object|false|none|none|

<h2 id="tocS_DataRepositoryTaskFilterName">DataRepositoryTaskFilterName</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskfiltername"></a>
<a id="schema_DataRepositoryTaskFilterName"></a>
<a id="tocSdatarepositorytaskfiltername"></a>
<a id="tocsdatarepositorytaskfiltername"></a>

```json
"file-system-id"
```

<h2 id="tocS_DataRepositoryTaskFilterValues">DataRepositoryTaskFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskfiltervalues"></a>
<a id="schema_DataRepositoryTaskFilterValues"></a>
<a id="tocSdatarepositorytaskfiltervalues"></a>
<a id="tocsdatarepositorytaskfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DataRepositoryTaskFilter">DataRepositoryTaskFilter</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskfilter"></a>
<a id="schema_DataRepositoryTaskFilter"></a>
<a id="tocSdatarepositorytaskfilter"></a>
<a id="tocsdatarepositorytaskfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

(Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_DataRepositoryTaskFilterValue">DataRepositoryTaskFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskfiltervalue"></a>
<a id="schema_DataRepositoryTaskFilterValue"></a>
<a id="tocSdatarepositorytaskfiltervalue"></a>
<a id="tocsdatarepositorytaskfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_DataRepositoryTaskFilters">DataRepositoryTaskFilters</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskfilters"></a>
<a id="schema_DataRepositoryTaskFilters"></a>
<a id="tocSdatarepositorytaskfilters"></a>
<a id="tocsdatarepositorytaskfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_DataRepositoryTaskPath">DataRepositoryTaskPath</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytaskpath"></a>
<a id="schema_DataRepositoryTaskPath"></a>
<a id="tocSdatarepositorytaskpath"></a>
<a id="tocsdatarepositorytaskpath"></a>

```json
"string"
```

<h2 id="tocS_TotalCount">TotalCount</h2>
<!-- backwards compatibility -->
<a id="schematotalcount"></a>
<a id="schema_TotalCount"></a>
<a id="tocStotalcount"></a>
<a id="tocstotalcount"></a>

```json
0
```

<h2 id="tocS_SucceededCount">SucceededCount</h2>
<!-- backwards compatibility -->
<a id="schemasucceededcount"></a>
<a id="schema_SucceededCount"></a>
<a id="tocSsucceededcount"></a>
<a id="tocssucceededcount"></a>

```json
0
```

<h2 id="tocS_FailedCount">FailedCount</h2>
<!-- backwards compatibility -->
<a id="schemafailedcount"></a>
<a id="schema_FailedCount"></a>
<a id="tocSfailedcount"></a>
<a id="tocsfailedcount"></a>

```json
0
```

<h2 id="tocS_LastUpdatedTime">LastUpdatedTime</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedtime"></a>
<a id="schema_LastUpdatedTime"></a>
<a id="tocSlastupdatedtime"></a>
<a id="tocslastupdatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ReleasedCapacity">ReleasedCapacity</h2>
<!-- backwards compatibility -->
<a id="schemareleasedcapacity"></a>
<a id="schema_ReleasedCapacity"></a>
<a id="tocSreleasedcapacity"></a>
<a id="tocsreleasedcapacity"></a>

```json
0
```

<h2 id="tocS_DataRepositoryTasks">DataRepositoryTasks</h2>
<!-- backwards compatibility -->
<a id="schemadatarepositorytasks"></a>
<a id="schema_DataRepositoryTasks"></a>
<a id="tocSdatarepositorytasks"></a>
<a id="tocsdatarepositorytasks"></a>

```json
[
  {
    "TaskId": {},
    "Lifecycle": {},
    "Type": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "StartTime": {},
    "EndTime": {},
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "FileSystemId": {},
    "Paths": {},
    "FailureDetails": {
      "Message": "string"
    },
    "Status": {
      "TotalCount": {},
      "SucceededCount": {},
      "FailedCount": {},
      "LastUpdatedTime": {},
      "ReleasedCapacity": {}
    },
    "Report": {
      "Enabled": {},
      "Path": {},
      "Format": {},
      "Scope": {}
    },
    "CapacityToRelease": {},
    "FileCacheId": {}
  }
]
```

<h2 id="tocS_DeleteDataInFileSystem">DeleteDataInFileSystem</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatainfilesystem"></a>
<a id="schema_DeleteDataInFileSystem"></a>
<a id="tocSdeletedatainfilesystem"></a>
<a id="tocsdeletedatainfilesystem"></a>

```json
true
```

<h2 id="tocS_FileCacheLifecycle">FileCacheLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemafilecachelifecycle"></a>
<a id="schema_FileCacheLifecycle"></a>
<a id="tocSfilecachelifecycle"></a>
<a id="tocsfilecachelifecycle"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_DeleteFileSystemLustreConfiguration">DeleteFileSystemLustreConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemlustreconfiguration"></a>
<a id="schema_DeleteFileSystemLustreConfiguration"></a>
<a id="tocSdeletefilesystemlustreconfiguration"></a>
<a id="tocsdeletefilesystemlustreconfiguration"></a>

```json
{
  "SkipFinalBackup": {},
  "FinalBackupTags": {}
}
```

The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkipFinalBackup|object|false|none|none|
|FinalBackupTags|object|false|none|none|

<h2 id="tocS_DeleteFileSystemLustreResponse">DeleteFileSystemLustreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemlustreresponse"></a>
<a id="schema_DeleteFileSystemLustreResponse"></a>
<a id="tocSdeletefilesystemlustreresponse"></a>
<a id="tocsdeletefilesystemlustreresponse"></a>

```json
{
  "FinalBackupId": {},
  "FinalBackupTags": {}
}
```

The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FinalBackupId|object|false|none|none|
|FinalBackupTags|object|false|none|none|

<h2 id="tocS_DeleteFileSystemOpenZFSOptions">DeleteFileSystemOpenZFSOptions</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemopenzfsoptions"></a>
<a id="schema_DeleteFileSystemOpenZFSOptions"></a>
<a id="tocSdeletefilesystemopenzfsoptions"></a>
<a id="tocsdeletefilesystemopenzfsoptions"></a>

```json
[
  "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS"
]
```

<h2 id="tocS_DeleteFileSystemOpenZFSConfiguration">DeleteFileSystemOpenZFSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemopenzfsconfiguration"></a>
<a id="schema_DeleteFileSystemOpenZFSConfiguration"></a>
<a id="tocSdeletefilesystemopenzfsconfiguration"></a>
<a id="tocsdeletefilesystemopenzfsconfiguration"></a>

```json
{
  "SkipFinalBackup": {},
  "FinalBackupTags": {},
  "Options": {}
}
```

The configuration object for the Amazon FSx for OpenZFS file system used in the <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkipFinalBackup|object|false|none|none|
|FinalBackupTags|object|false|none|none|
|Options|object|false|none|none|

<h2 id="tocS_DeleteFileSystemOpenZFSOption">DeleteFileSystemOpenZFSOption</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemopenzfsoption"></a>
<a id="schema_DeleteFileSystemOpenZFSOption"></a>
<a id="tocSdeletefilesystemopenzfsoption"></a>
<a id="tocsdeletefilesystemopenzfsoption"></a>

```json
"DELETE_CHILD_VOLUMES_AND_SNAPSHOTS"
```

<h2 id="tocS_DeleteFileSystemOpenZFSResponse">DeleteFileSystemOpenZFSResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemopenzfsresponse"></a>
<a id="schema_DeleteFileSystemOpenZFSResponse"></a>
<a id="tocSdeletefilesystemopenzfsresponse"></a>
<a id="tocsdeletefilesystemopenzfsresponse"></a>

```json
{
  "FinalBackupId": "stringstring",
  "FinalBackupTags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

The response object for the Amazon FSx for OpenZFS file system that's being deleted in the <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FinalBackupId|[BackupId](#schemabackupid)|false|none|The ID of the source backup. Specifies the backup that you are copying.|
|FinalBackupTags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|

<h2 id="tocS_DeleteFileSystemWindowsConfiguration">DeleteFileSystemWindowsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemwindowsconfiguration"></a>
<a id="schema_DeleteFileSystemWindowsConfiguration"></a>
<a id="tocSdeletefilesystemwindowsconfiguration"></a>
<a id="tocsdeletefilesystemwindowsconfiguration"></a>

```json
{
  "SkipFinalBackup": {},
  "FinalBackupTags": {}
}
```

The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkipFinalBackup|object|false|none|none|
|FinalBackupTags|object|false|none|none|

<h2 id="tocS_FileSystemLifecycle">FileSystemLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemlifecycle"></a>
<a id="schema_FileSystemLifecycle"></a>
<a id="tocSfilesystemlifecycle"></a>
<a id="tocsfilesystemlifecycle"></a>

```json
"AVAILABLE"
```

The lifecycle status of the file system.

<h2 id="tocS_DeleteFileSystemWindowsResponse">DeleteFileSystemWindowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemwindowsresponse"></a>
<a id="schema_DeleteFileSystemWindowsResponse"></a>
<a id="tocSdeletefilesystemwindowsresponse"></a>
<a id="tocsdeletefilesystemwindowsresponse"></a>

```json
{
  "FinalBackupId": {},
  "FinalBackupTags": {}
}
```

The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FinalBackupId|object|false|none|none|
|FinalBackupTags|object|false|none|none|

<h2 id="tocS_DeleteOpenZFSVolumeOption">DeleteOpenZFSVolumeOption</h2>
<!-- backwards compatibility -->
<a id="schemadeleteopenzfsvolumeoption"></a>
<a id="schema_DeleteOpenZFSVolumeOption"></a>
<a id="tocSdeleteopenzfsvolumeoption"></a>
<a id="tocsdeleteopenzfsvolumeoption"></a>

```json
"DELETE_CHILD_VOLUMES_AND_SNAPSHOTS"
```

<h2 id="tocS_DeleteOpenZFSVolumeOptions">DeleteOpenZFSVolumeOptions</h2>
<!-- backwards compatibility -->
<a id="schemadeleteopenzfsvolumeoptions"></a>
<a id="schema_DeleteOpenZFSVolumeOptions"></a>
<a id="tocSdeleteopenzfsvolumeoptions"></a>
<a id="tocsdeleteopenzfsvolumeoptions"></a>

```json
[
  "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS"
]
```

<h2 id="tocS_SnapshotId">SnapshotId</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotid"></a>
<a id="schema_SnapshotId"></a>
<a id="tocSsnapshotid"></a>
<a id="tocssnapshotid"></a>

```json
"stringstrin"
```

<h2 id="tocS_SnapshotLifecycle">SnapshotLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotlifecycle"></a>
<a id="schema_SnapshotLifecycle"></a>
<a id="tocSsnapshotlifecycle"></a>
<a id="tocssnapshotlifecycle"></a>

```json
"PENDING"
```

<h2 id="tocS_StorageVirtualMachineLifecycle">StorageVirtualMachineLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinelifecycle"></a>
<a id="schema_StorageVirtualMachineLifecycle"></a>
<a id="tocSstoragevirtualmachinelifecycle"></a>
<a id="tocsstoragevirtualmachinelifecycle"></a>

```json
"CREATED"
```

<h2 id="tocS_DeleteVolumeOntapConfiguration">DeleteVolumeOntapConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeletevolumeontapconfiguration"></a>
<a id="schema_DeleteVolumeOntapConfiguration"></a>
<a id="tocSdeletevolumeontapconfiguration"></a>
<a id="tocsdeletevolumeontapconfiguration"></a>

```json
{
  "SkipFinalBackup": {},
  "FinalBackupTags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

Use to specify skipping a final backup, or to add tags to a final backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkipFinalBackup|object|false|none|none|
|FinalBackupTags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|

<h2 id="tocS_DeleteVolumeOntapResponse">DeleteVolumeOntapResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevolumeontapresponse"></a>
<a id="schema_DeleteVolumeOntapResponse"></a>
<a id="tocSdeletevolumeontapresponse"></a>
<a id="tocsdeletevolumeontapresponse"></a>

```json
{
  "FinalBackupId": "stringstring",
  "FinalBackupTags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FinalBackupId|[BackupId](#schemabackupid)|false|none|The ID of the source backup. Specifies the backup that you are copying.|
|FinalBackupTags|[Tags](#schematags)|false|none|A list of <code>Tag</code> values, with a maximum of 50 elements.|

<h2 id="tocS_DeleteVolumeOpenZFSConfiguration">DeleteVolumeOpenZFSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeletevolumeopenzfsconfiguration"></a>
<a id="schema_DeleteVolumeOpenZFSConfiguration"></a>
<a id="tocSdeletevolumeopenzfsconfiguration"></a>
<a id="tocsdeletevolumeopenzfsconfiguration"></a>

```json
{
  "Options": {}
}
```

A value that specifies whether to delete all child volumes and snapshots.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|false|none|none|

<h2 id="tocS_VolumeLifecycle">VolumeLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemavolumelifecycle"></a>
<a id="schema_VolumeLifecycle"></a>
<a id="tocSvolumelifecycle"></a>
<a id="tocsvolumelifecycle"></a>

```json
"CREATING"
```

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

A list of <code>Filter</code> elements.

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

The maximum number of resources to return in the response. This value must be an integer greater than zero.

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.

<h2 id="tocS_LimitedMaxResults">LimitedMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalimitedmaxresults"></a>
<a id="schema_LimitedMaxResults"></a>
<a id="tocSlimitedmaxresults"></a>
<a id="tocslimitedmaxresults"></a>

```json
1
```

<h2 id="tocS_TaskIds">TaskIds</h2>
<!-- backwards compatibility -->
<a id="schemataskids"></a>
<a id="schema_TaskIds"></a>
<a id="tocStaskids"></a>
<a id="tocstaskids"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_FileCacheIds">FileCacheIds</h2>
<!-- backwards compatibility -->
<a id="schemafilecacheids"></a>
<a id="schema_FileCacheIds"></a>
<a id="tocSfilecacheids"></a>
<a id="tocsfilecacheids"></a>

```json
[
  "stringstrin"
]
```

<h2 id="tocS_FileCaches">FileCaches</h2>
<!-- backwards compatibility -->
<a id="schemafilecaches"></a>
<a id="schema_FileCaches"></a>
<a id="tocSfilecaches"></a>
<a id="tocsfilecaches"></a>

```json
[
  {
    "OwnerId": "stringstring",
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileCacheId": {},
    "FileCacheType": {},
    "FileCacheTypeVersion": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "VpcId": "stringstring",
    "SubnetIds": [
      "stringstringstr"
    ],
    "NetworkInterfaceIds": [
      "stringstring"
    ],
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": "stringst",
    "LustreConfiguration": {
      "PerUnitStorageThroughput": {},
      "DeploymentType": {},
      "MountName": {},
      "WeeklyMaintenanceStartTime": "strings",
      "MetadataConfiguration": {
        "StorageCapacity": {}
      },
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      }
    },
    "DataRepositoryAssociationIds": {}
  }
]
```

<h2 id="tocS_FileSystemIds">FileSystemIds</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemids"></a>
<a id="schema_FileSystemIds"></a>
<a id="tocSfilesystemids"></a>
<a id="tocsfilesystemids"></a>

```json
[
  "stringstrin"
]
```

A list of file system IDs.

<h2 id="tocS_FileSystems">FileSystems</h2>
<!-- backwards compatibility -->
<a id="schemafilesystems"></a>
<a id="schema_FileSystems"></a>
<a id="tocSfilesystems"></a>
<a id="tocsfilesystems"></a>

```json
[
  {
    "OwnerId": {},
    "CreationTime": {},
    "FileSystemId": {},
    "FileSystemType": {},
    "Lifecycle": {},
    "FailureDetails": {
      "Message": {}
    },
    "StorageCapacity": {},
    "StorageType": {},
    "VpcId": {},
    "SubnetIds": {},
    "NetworkInterfaceIds": {},
    "DNSName": {},
    "KmsKeyId": {},
    "ResourceARN": {},
    "Tags": {},
    "WindowsConfiguration": {
      "ActiveDirectoryId": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      },
      "DeploymentType": {},
      "RemoteAdministrationEndpoint": {},
      "PreferredSubnetId": {},
      "PreferredFileServerIp": {},
      "ThroughputCapacity": {},
      "MaintenanceOperationsInProgress": {},
      "WeeklyMaintenanceStartTime": {},
      "DailyAutomaticBackupStartTime": {},
      "AutomaticBackupRetentionDays": {},
      "CopyTagsToBackups": {},
      "Aliases": [
        {
          "Name": {},
          "Lifecycle": {}
        }
      ],
      "AuditLogConfiguration": {
        "FileAccessAuditLogLevel": {},
        "FileShareAccessAuditLogLevel": {},
        "AuditLogDestination": {}
      }
    },
    "LustreConfiguration": {
      "WeeklyMaintenanceStartTime": {},
      "DataRepositoryConfiguration": {
        "Lifecycle": {},
        "ImportPath": {},
        "ExportPath": {},
        "ImportedFileChunkSize": {},
        "AutoImportPolicy": {},
        "FailureDetails": {
          "Message": "string"
        }
      },
      "DeploymentType": {},
      "PerUnitStorageThroughput": {},
      "MountName": {},
      "DailyAutomaticBackupStartTime": "strin",
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "DriveCacheType": {},
      "DataCompressionType": {},
      "LogConfiguration": {
        "Level": {},
        "Destination": {}
      },
      "RootSquashConfiguration": {
        "RootSquash": {},
        "NoSquashNids": {}
      }
    },
    "AdministrativeActions": {},
    "OntapConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "EndpointIpAddressRange": {},
      "Endpoints": {
        "Intercluster": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        },
        "Management": {
          "DNSName": "stringstringstri",
          "IpAddresses": {}
        }
      },
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "PreferredSubnetId": "stringstringstr",
      "RouteTableIds": {},
      "ThroughputCapacity": 8,
      "WeeklyMaintenanceStartTime": "strings"
    },
    "FileSystemTypeVersion": {},
    "OpenZFSConfiguration": {
      "AutomaticBackupRetentionDays": 0,
      "CopyTagsToBackups": {},
      "CopyTagsToVolumes": {},
      "DailyAutomaticBackupStartTime": "strin",
      "DeploymentType": {},
      "ThroughputCapacity": {},
      "WeeklyMaintenanceStartTime": "strings",
      "DiskIopsConfiguration": {
        "Mode": {},
        "Iops": {}
      },
      "RootVolumeId": {}
    }
  }
]
```

A list of file system resource descriptions.

<h2 id="tocS_SnapshotIds">SnapshotIds</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotids"></a>
<a id="schema_SnapshotIds"></a>
<a id="tocSsnapshotids"></a>
<a id="tocssnapshotids"></a>

```json
[
  "stringstrin"
]
```

<h2 id="tocS_SnapshotFilters">SnapshotFilters</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotfilters"></a>
<a id="schema_SnapshotFilters"></a>
<a id="tocSsnapshotfilters"></a>
<a id="tocssnapshotfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_Snapshots">Snapshots</h2>
<!-- backwards compatibility -->
<a id="schemasnapshots"></a>
<a id="schema_Snapshots"></a>
<a id="tocSsnapshots"></a>
<a id="tocssnapshots"></a>

```json
[
  {
    "ResourceARN": "stringst",
    "SnapshotId": {},
    "Name": {},
    "VolumeId": {},
    "CreationTime": "1970-01-01T00:00:00Z",
    "Lifecycle": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "AdministrativeActions": {}
  }
]
```

<h2 id="tocS_StorageVirtualMachineIds">StorageVirtualMachineIds</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachineids"></a>
<a id="schema_StorageVirtualMachineIds"></a>
<a id="tocSstoragevirtualmachineids"></a>
<a id="tocsstoragevirtualmachineids"></a>

```json
[
  "stringstringstringstr"
]
```

<h2 id="tocS_StorageVirtualMachineFilters">StorageVirtualMachineFilters</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinefilters"></a>
<a id="schema_StorageVirtualMachineFilters"></a>
<a id="tocSstoragevirtualmachinefilters"></a>
<a id="tocsstoragevirtualmachinefilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_StorageVirtualMachines">StorageVirtualMachines</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachines"></a>
<a id="schema_StorageVirtualMachines"></a>
<a id="tocSstoragevirtualmachines"></a>
<a id="tocsstoragevirtualmachines"></a>

```json
[
  {
    "ActiveDirectoryConfiguration": {
      "NetBiosName": {},
      "SelfManagedActiveDirectoryConfiguration": {
        "DomainName": {},
        "OrganizationalUnitDistinguishedName": {},
        "FileSystemAdministratorsGroup": {},
        "UserName": {},
        "DnsIps": {}
      }
    },
    "CreationTime": "1970-01-01T00:00:00Z",
    "Endpoints": {
      "Iscsi": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Management": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Nfs": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      },
      "Smb": {
        "DNSName": "stringstringstri",
        "IpAddresses": {}
      }
    },
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "ResourceARN": "stringst",
    "StorageVirtualMachineId": {},
    "Subtype": {},
    "UUID": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "RootVolumeSecurityStyle": {}
  }
]
```

<h2 id="tocS_VolumeIds">VolumeIds</h2>
<!-- backwards compatibility -->
<a id="schemavolumeids"></a>
<a id="schema_VolumeIds"></a>
<a id="tocSvolumeids"></a>
<a id="tocsvolumeids"></a>

```json
[
  "stringstringstringstrin"
]
```

<h2 id="tocS_VolumeFilters">VolumeFilters</h2>
<!-- backwards compatibility -->
<a id="schemavolumefilters"></a>
<a id="schema_VolumeFilters"></a>
<a id="tocSvolumefilters"></a>
<a id="tocsvolumefilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_Volumes">Volumes</h2>
<!-- backwards compatibility -->
<a id="schemavolumes"></a>
<a id="schema_Volumes"></a>
<a id="tocSvolumes"></a>
<a id="tocsvolumes"></a>

```json
[
  {
    "CreationTime": "1970-01-01T00:00:00Z",
    "FileSystemId": "stringstrin",
    "Lifecycle": {},
    "Name": {},
    "OntapConfiguration": {
      "FlexCacheEndpointType": {},
      "JunctionPath": {},
      "SecurityStyle": {},
      "SizeInMegabytes": {},
      "StorageEfficiencyEnabled": {},
      "StorageVirtualMachineId": {},
      "StorageVirtualMachineRoot": {},
      "TieringPolicy": {
        "CoolingPeriod": {},
        "Name": {}
      },
      "UUID": {},
      "OntapVolumeType": {},
      "SnapshotPolicy": {},
      "CopyTagsToBackups": {}
    },
    "ResourceARN": "stringst",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "VolumeId": {},
    "VolumeType": {},
    "LifecycleTransitionReason": {
      "Message": "string"
    },
    "AdministrativeActions": {},
    "OpenZFSConfiguration": {
      "ParentVolumeId": {},
      "VolumePath": {},
      "StorageCapacityReservationGiB": {},
      "StorageCapacityQuotaGiB": {},
      "RecordSizeKiB": {},
      "DataCompressionType": {},
      "CopyTagsToSnapshots": {},
      "OriginSnapshot": {
        "SnapshotARN": "stringst",
        "CopyStrategy": {}
      },
      "ReadOnly": {},
      "NfsExports": {},
      "UserAndGroupQuotas": {},
      "RestoreToSnapshot": {},
      "DeleteIntermediateSnaphots": {},
      "DeleteClonedVolumes": {}
    }
  }
]
```

<h2 id="tocS_DirectoryPassword">DirectoryPassword</h2>
<!-- backwards compatibility -->
<a id="schemadirectorypassword"></a>
<a id="schema_DirectoryPassword"></a>
<a id="tocSdirectorypassword"></a>
<a id="tocsdirectorypassword"></a>

```json
"password"
```

<h2 id="tocS_DirectoryUserName">DirectoryUserName</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryusername"></a>
<a id="schema_DirectoryUserName"></a>
<a id="tocSdirectoryusername"></a>
<a id="tocsdirectoryusername"></a>

```json
"string"
```

<h2 id="tocS_DiskIopsConfigurationMode">DiskIopsConfigurationMode</h2>
<!-- backwards compatibility -->
<a id="schemadiskiopsconfigurationmode"></a>
<a id="schema_DiskIopsConfigurationMode"></a>
<a id="tocSdiskiopsconfigurationmode"></a>
<a id="tocsdiskiopsconfigurationmode"></a>

```json
"AUTOMATIC"
```

<h2 id="tocS_Iops">Iops</h2>
<!-- backwards compatibility -->
<a id="schemaiops"></a>
<a id="schema_Iops"></a>
<a id="tocSiops"></a>
<a id="tocsiops"></a>

```json
0
```

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"strings"
```

<h2 id="tocS_DnsIps">DnsIps</h2>
<!-- backwards compatibility -->
<a id="schemadnsips"></a>
<a id="schema_DnsIps"></a>
<a id="tocSdnsips"></a>
<a id="tocsdnsips"></a>

```json
[
  "strings"
]
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"NEW"
```

<h2 id="tocS_FileCacheFailureDetails">FileCacheFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemafilecachefailuredetails"></a>
<a id="schema_FileCacheFailureDetails"></a>
<a id="tocSfilecachefailuredetails"></a>
<a id="tocsfilecachefailuredetails"></a>

```json
{
  "Message": {}
}
```

A structure providing details of any failures that occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"stringstring"
```

The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.

<h2 id="tocS_NetworkInterfaceIds">NetworkInterfaceIds</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaceids"></a>
<a id="schema_NetworkInterfaceIds"></a>
<a id="tocSnetworkinterfaceids"></a>
<a id="tocsnetworkinterfaceids"></a>

```json
[
  "stringstring"
]
```

A list of network interface IDs.

<h2 id="tocS_FileCacheLustreConfiguration">FileCacheLustreConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafilecachelustreconfiguration"></a>
<a id="schema_FileCacheLustreConfiguration"></a>
<a id="tocSfilecachelustreconfiguration"></a>
<a id="tocsfilecachelustreconfiguration"></a>

```json
{
  "PerUnitStorageThroughput": {},
  "DeploymentType": {},
  "MountName": {},
  "WeeklyMaintenanceStartTime": "strings",
  "MetadataConfiguration": {
    "StorageCapacity": {}
  },
  "LogConfiguration": {
    "Level": {},
    "Destination": {}
  }
}
```

The configuration for the Amazon File Cache resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PerUnitStorageThroughput|object|false|none|none|
|DeploymentType|object|false|none|none|
|MountName|object|false|none|none|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|MetadataConfiguration|object|false|none|none|
|LogConfiguration|object|false|none|none|

<h2 id="tocS_FileCache">FileCache</h2>
<!-- backwards compatibility -->
<a id="schemafilecache"></a>
<a id="schema_FileCache"></a>
<a id="tocSfilecache"></a>
<a id="tocsfilecache"></a>

```json
{
  "OwnerId": "stringstring",
  "CreationTime": "1970-01-01T00:00:00Z",
  "FileCacheId": {},
  "FileCacheType": {},
  "FileCacheTypeVersion": {},
  "Lifecycle": {},
  "FailureDetails": {
    "Message": {}
  },
  "StorageCapacity": {},
  "VpcId": "stringstring",
  "SubnetIds": [
    "stringstringstr"
  ],
  "NetworkInterfaceIds": [
    "stringstring"
  ],
  "DNSName": {},
  "KmsKeyId": {},
  "ResourceARN": "stringst",
  "LustreConfiguration": {
    "PerUnitStorageThroughput": {},
    "DeploymentType": {},
    "MountName": {},
    "WeeklyMaintenanceStartTime": "strings",
    "MetadataConfiguration": {
      "StorageCapacity": {}
    },
    "LogConfiguration": {
      "Level": {},
      "Destination": {}
    }
  },
  "DataRepositoryAssociationIds": {}
}
```

A description of a specific Amazon File Cache resource, which is a response object from the <code>DescribeFileCaches</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerId|[AWSAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.|
|CreationTime|[CreationTime](#schemacreationtime)|false|none|The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.|
|FileCacheId|object|false|none|none|
|FileCacheType|object|false|none|none|
|FileCacheTypeVersion|object|false|none|none|
|Lifecycle|object|false|none|none|
|FailureDetails|object|false|none|none|
|StorageCapacity|object|false|none|none|
|VpcId|[VpcId](#schemavpcid)|false|none|The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.|
|SubnetIds|[SubnetIds](#schemasubnetids)|false|none|A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.|
|NetworkInterfaceIds|[NetworkInterfaceIds](#schemanetworkinterfaceids)|false|none|A list of network interface IDs.|
|DNSName|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ResourceARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|LustreConfiguration|object|false|none|none|
|DataRepositoryAssociationIds|object|false|none|none|

<h2 id="tocS_FileCacheNFSConfiguration">FileCacheNFSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafilecachenfsconfiguration"></a>
<a id="schema_FileCacheNFSConfiguration"></a>
<a id="tocSfilecachenfsconfiguration"></a>
<a id="tocsfilecachenfsconfiguration"></a>

```json
{
  "Version": {},
  "DnsIps": {}
}
```

The configuration for an NFS data repository association (DRA) created during the creation of the Amazon File Cache resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|true|none|none|
|DnsIps|object|false|none|none|

<h2 id="tocS_LustreFileSystemMountName">LustreFileSystemMountName</h2>
<!-- backwards compatibility -->
<a id="schemalustrefilesystemmountname"></a>
<a id="schema_LustreFileSystemMountName"></a>
<a id="tocSlustrefilesystemmountname"></a>
<a id="tocslustrefilesystemmountname"></a>

```json
"string"
```

<h2 id="tocS_LustreLogConfiguration">LustreLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalustrelogconfiguration"></a>
<a id="schema_LustreLogConfiguration"></a>
<a id="tocSlustrelogconfiguration"></a>
<a id="tocslustrelogconfiguration"></a>

```json
{
  "Level": {},
  "Destination": {}
}
```

The configuration for Lustre logging used to write the enabled logging events for your Amazon FSx for Lustre file system or Amazon File Cache resource to Amazon CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Level|object|true|none|none|
|Destination|object|false|none|none|

<h2 id="tocS_MetadataStorageCapacity">MetadataStorageCapacity</h2>
<!-- backwards compatibility -->
<a id="schemametadatastoragecapacity"></a>
<a id="schema_MetadataStorageCapacity"></a>
<a id="tocSmetadatastoragecapacity"></a>
<a id="tocsmetadatastoragecapacity"></a>

```json
0
```

<h2 id="tocS_NfsVersion">NfsVersion</h2>
<!-- backwards compatibility -->
<a id="schemanfsversion"></a>
<a id="schema_NfsVersion"></a>
<a id="tocSnfsversion"></a>
<a id="tocsnfsversion"></a>

```json
"NFS3"
```

<h2 id="tocS_RepositoryDnsIps">RepositoryDnsIps</h2>
<!-- backwards compatibility -->
<a id="schemarepositorydnsips"></a>
<a id="schema_RepositoryDnsIps"></a>
<a id="tocSrepositorydnsips"></a>
<a id="tocsrepositorydnsips"></a>

```json
[
  "strings"
]
```

<h2 id="tocS_FileSystemFailureDetails">FileSystemFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemfailuredetails"></a>
<a id="schema_FileSystemFailureDetails"></a>
<a id="tocSfilesystemfailuredetails"></a>
<a id="tocsfilesystemfailuredetails"></a>

```json
{
  "Message": {}
}
```

A structure providing details of any failures that occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_WindowsFileSystemConfiguration">WindowsFileSystemConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawindowsfilesystemconfiguration"></a>
<a id="schema_WindowsFileSystemConfiguration"></a>
<a id="tocSwindowsfilesystemconfiguration"></a>
<a id="tocswindowsfilesystemconfiguration"></a>

```json
{
  "ActiveDirectoryId": {},
  "SelfManagedActiveDirectoryConfiguration": {
    "DomainName": {},
    "OrganizationalUnitDistinguishedName": {},
    "FileSystemAdministratorsGroup": {},
    "UserName": {},
    "DnsIps": {}
  },
  "DeploymentType": {},
  "RemoteAdministrationEndpoint": {},
  "PreferredSubnetId": {},
  "PreferredFileServerIp": {},
  "ThroughputCapacity": {},
  "MaintenanceOperationsInProgress": {},
  "WeeklyMaintenanceStartTime": {},
  "DailyAutomaticBackupStartTime": {},
  "AutomaticBackupRetentionDays": {},
  "CopyTagsToBackups": {},
  "Aliases": [
    {
      "Name": {},
      "Lifecycle": {}
    }
  ],
  "AuditLogConfiguration": {
    "FileAccessAuditLogLevel": {},
    "FileShareAccessAuditLogLevel": {},
    "AuditLogDestination": {}
  }
}
```

The configuration for this Microsoft Windows file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveDirectoryId|object|false|none|none|
|SelfManagedActiveDirectoryConfiguration|[SelfManagedActiveDirectoryAttributes](#schemaselfmanagedactivedirectoryattributes)|false|none|The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.|
|DeploymentType|object|false|none|none|
|RemoteAdministrationEndpoint|object|false|none|none|
|PreferredSubnetId|object|false|none|none|
|PreferredFileServerIp|object|false|none|none|
|ThroughputCapacity|object|false|none|none|
|MaintenanceOperationsInProgress|object|false|none|none|
|WeeklyMaintenanceStartTime|object|false|none|none|
|DailyAutomaticBackupStartTime|object|false|none|none|
|AutomaticBackupRetentionDays|object|false|none|none|
|CopyTagsToBackups|object|false|none|none|
|Aliases|[Aliases](#schemaaliases)|false|none|An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>.|
|AuditLogConfiguration|object|false|none|none|

<h2 id="tocS_LustreFileSystemConfiguration">LustreFileSystemConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalustrefilesystemconfiguration"></a>
<a id="schema_LustreFileSystemConfiguration"></a>
<a id="tocSlustrefilesystemconfiguration"></a>
<a id="tocslustrefilesystemconfiguration"></a>

```json
{
  "WeeklyMaintenanceStartTime": {},
  "DataRepositoryConfiguration": {
    "Lifecycle": {},
    "ImportPath": {},
    "ExportPath": {},
    "ImportedFileChunkSize": {},
    "AutoImportPolicy": {},
    "FailureDetails": {
      "Message": "string"
    }
  },
  "DeploymentType": {},
  "PerUnitStorageThroughput": {},
  "MountName": {},
  "DailyAutomaticBackupStartTime": "strin",
  "AutomaticBackupRetentionDays": 0,
  "CopyTagsToBackups": {},
  "DriveCacheType": {},
  "DataCompressionType": {},
  "LogConfiguration": {
    "Level": {},
    "Destination": {}
  },
  "RootSquashConfiguration": {
    "RootSquash": {},
    "NoSquashNids": {}
  }
}
```

The configuration for the Amazon FSx for Lustre file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WeeklyMaintenanceStartTime|object|false|none|none|
|DataRepositoryConfiguration|[DataRepositoryConfiguration](#schemadatarepositoryconfiguration)|false|none|<p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .</p>|
|DeploymentType|object|false|none|none|
|PerUnitStorageThroughput|object|false|none|none|
|MountName|object|false|none|none|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|CopyTagsToBackups|object|false|none|none|
|DriveCacheType|object|false|none|none|
|DataCompressionType|object|false|none|none|
|LogConfiguration|object|false|none|none|
|RootSquashConfiguration|object|false|none|none|

<h2 id="tocS_OntapFileSystemConfiguration">OntapFileSystemConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaontapfilesystemconfiguration"></a>
<a id="schema_OntapFileSystemConfiguration"></a>
<a id="tocSontapfilesystemconfiguration"></a>
<a id="tocsontapfilesystemconfiguration"></a>

```json
{
  "AutomaticBackupRetentionDays": 0,
  "DailyAutomaticBackupStartTime": "strin",
  "DeploymentType": {},
  "EndpointIpAddressRange": {},
  "Endpoints": {
    "Intercluster": {
      "DNSName": "stringstringstri",
      "IpAddresses": {}
    },
    "Management": {
      "DNSName": "stringstringstri",
      "IpAddresses": {}
    }
  },
  "DiskIopsConfiguration": {
    "Mode": {},
    "Iops": {}
  },
  "PreferredSubnetId": "stringstringstr",
  "RouteTableIds": {},
  "ThroughputCapacity": 8,
  "WeeklyMaintenanceStartTime": "strings"
}
```

Configuration for the FSx for NetApp ONTAP file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|DeploymentType|object|false|none|none|
|EndpointIpAddressRange|object|false|none|none|
|Endpoints|object|false|none|none|
|DiskIopsConfiguration|object|false|none|none|
|PreferredSubnetId|[SubnetId](#schemasubnetid)|false|none|The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide.</i> |
|RouteTableIds|object|false|none|none|
|ThroughputCapacity|[MegabytesPerSecond](#schemamegabytespersecond)|false|none|The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|

<h2 id="tocS_OpenZFSFileSystemConfiguration">OpenZFSFileSystemConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsfilesystemconfiguration"></a>
<a id="schema_OpenZFSFileSystemConfiguration"></a>
<a id="tocSopenzfsfilesystemconfiguration"></a>
<a id="tocsopenzfsfilesystemconfiguration"></a>

```json
{
  "AutomaticBackupRetentionDays": 0,
  "CopyTagsToBackups": {},
  "CopyTagsToVolumes": {},
  "DailyAutomaticBackupStartTime": "strin",
  "DeploymentType": {},
  "ThroughputCapacity": {},
  "WeeklyMaintenanceStartTime": "strings",
  "DiskIopsConfiguration": {
    "Mode": {},
    "Iops": {}
  },
  "RootVolumeId": {}
}
```

The configuration for the Amazon FSx for OpenZFS file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|CopyTagsToBackups|object|false|none|none|
|CopyTagsToVolumes|object|false|none|none|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|DeploymentType|object|false|none|none|
|ThroughputCapacity|object|false|none|none|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|DiskIopsConfiguration|[DiskIopsConfiguration](#schemadiskiopsconfiguration)|false|none|The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).|
|RootVolumeId|object|false|none|none|

<h2 id="tocS_FileSystemAdministratorsGroupName">FileSystemAdministratorsGroupName</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemadministratorsgroupname"></a>
<a id="schema_FileSystemAdministratorsGroupName"></a>
<a id="tocSfilesystemadministratorsgroupname"></a>
<a id="tocsfilesystemadministratorsgroupname"></a>

```json
"string"
```

<h2 id="tocS_OntapEndpointIpAddresses">OntapEndpointIpAddresses</h2>
<!-- backwards compatibility -->
<a id="schemaontapendpointipaddresses"></a>
<a id="schema_OntapEndpointIpAddresses"></a>
<a id="tocSontapendpointipaddresses"></a>
<a id="tocsontapendpointipaddresses"></a>

```json
[
  "strings"
]
```

<h2 id="tocS_FileSystemEndpoint">FileSystemEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemendpoint"></a>
<a id="schema_FileSystemEndpoint"></a>
<a id="tocSfilesystemendpoint"></a>
<a id="tocsfilesystemendpoint"></a>

```json
{
  "DNSName": "stringstringstri",
  "IpAddresses": {}
}
```

An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DNSName|[DNSName](#schemadnsname)|false|none|The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.|
|IpAddresses|object|false|none|none|

<h2 id="tocS_FileSystemEndpoints">FileSystemEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemendpoints"></a>
<a id="schema_FileSystemEndpoints"></a>
<a id="tocSfilesystemendpoints"></a>
<a id="tocsfilesystemendpoints"></a>

```json
{
  "Intercluster": {
    "DNSName": "stringstringstri",
    "IpAddresses": {}
  },
  "Management": {
    "DNSName": "stringstringstri",
    "IpAddresses": {}
  }
}
```

An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Intercluster|object|false|none|none|
|Management|object|false|none|none|

<h2 id="tocS_FileSystemMaintenanceOperation">FileSystemMaintenanceOperation</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemmaintenanceoperation"></a>
<a id="schema_FileSystemMaintenanceOperation"></a>
<a id="tocSfilesystemmaintenanceoperation"></a>
<a id="tocsfilesystemmaintenanceoperation"></a>

```json
"PATCHING"
```

An enumeration specifying the currently ongoing maintenance operation.

<h2 id="tocS_FileSystemMaintenanceOperations">FileSystemMaintenanceOperations</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemmaintenanceoperations"></a>
<a id="schema_FileSystemMaintenanceOperations"></a>
<a id="tocSfilesystemmaintenanceoperations"></a>
<a id="tocsfilesystemmaintenanceoperations"></a>

```json
[
  "PATCHING"
]
```

A list of maintenance operations.

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"file-system-id"
```

The name for a filter.

<h2 id="tocS_FilterValues">FilterValues</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalues"></a>
<a id="schema_FilterValues"></a>
<a id="tocSfiltervalues"></a>
<a id="tocsfiltervalues"></a>

```json
[
  "string"
]
```

A list of filter values.

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

The value for a filter.

<h2 id="tocS_FlexCacheEndpointType">FlexCacheEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaflexcacheendpointtype"></a>
<a id="schema_FlexCacheEndpointType"></a>
<a id="tocSflexcacheendpointtype"></a>
<a id="tocsflexcacheendpointtype"></a>

```json
"NONE"
```

<h2 id="tocS_GeneralARN">GeneralARN</h2>
<!-- backwards compatibility -->
<a id="schemageneralarn"></a>
<a id="schema_GeneralARN"></a>
<a id="tocSgeneralarn"></a>
<a id="tocsgeneralarn"></a>

```json
"stringst"
```

<h2 id="tocS_IntegerNoMax">IntegerNoMax</h2>
<!-- backwards compatibility -->
<a id="schemaintegernomax"></a>
<a id="schema_IntegerNoMax"></a>
<a id="tocSintegernomax"></a>
<a id="tocsintegernomax"></a>

```json
0
```

<h2 id="tocS_LifecycleTransitionReason">LifecycleTransitionReason</h2>
<!-- backwards compatibility -->
<a id="schemalifecycletransitionreason"></a>
<a id="schema_LifecycleTransitionReason"></a>
<a id="tocSlifecycletransitionreason"></a>
<a id="tocslifecycletransitionreason"></a>

```json
{
  "Message": "string"
}
```

Describes why a resource lifecycle state changed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|[ErrorMessage](#schemaerrormessage)|false|none|A detailed error message.|

<h2 id="tocS_LustreAccessAuditLogLevel">LustreAccessAuditLogLevel</h2>
<!-- backwards compatibility -->
<a id="schemalustreaccessauditloglevel"></a>
<a id="schema_LustreAccessAuditLogLevel"></a>
<a id="tocSlustreaccessauditloglevel"></a>
<a id="tocslustreaccessauditloglevel"></a>

```json
"DISABLED"
```

<h2 id="tocS_LustreNoSquashNid">LustreNoSquashNid</h2>
<!-- backwards compatibility -->
<a id="schemalustrenosquashnid"></a>
<a id="schema_LustreNoSquashNid"></a>
<a id="tocSlustrenosquashnid"></a>
<a id="tocslustrenosquashnid"></a>

```json
"stringstrin"
```

<h2 id="tocS_LustreNoSquashNids">LustreNoSquashNids</h2>
<!-- backwards compatibility -->
<a id="schemalustrenosquashnids"></a>
<a id="schema_LustreNoSquashNids"></a>
<a id="tocSlustrenosquashnids"></a>
<a id="tocslustrenosquashnids"></a>

```json
[
  "stringstrin"
]
```

<h2 id="tocS_LustreRootSquash">LustreRootSquash</h2>
<!-- backwards compatibility -->
<a id="schemalustrerootsquash"></a>
<a id="schema_LustreRootSquash"></a>
<a id="tocSlustrerootsquash"></a>
<a id="tocslustrerootsquash"></a>

```json
"string"
```

<h2 id="tocS_NetworkInterfaceId">NetworkInterfaceId</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaceid"></a>
<a id="schema_NetworkInterfaceId"></a>
<a id="tocSnetworkinterfaceid"></a>
<a id="tocsnetworkinterfaceid"></a>

```json
"stringstring"
```

An elastic network interface ID. An elastic network interface is a logical networking component in a virtual private cloud (VPC) that represents a virtual network card. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_OntapVolumeType">OntapVolumeType</h2>
<!-- backwards compatibility -->
<a id="schemaontapvolumetype"></a>
<a id="schema_OntapVolumeType"></a>
<a id="tocSontapvolumetype"></a>
<a id="tocsontapvolumetype"></a>

```json
"RW"
```

<h2 id="tocS_OntapVolumeConfiguration">OntapVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaontapvolumeconfiguration"></a>
<a id="schema_OntapVolumeConfiguration"></a>
<a id="tocSontapvolumeconfiguration"></a>
<a id="tocsontapvolumeconfiguration"></a>

```json
{
  "FlexCacheEndpointType": {},
  "JunctionPath": {},
  "SecurityStyle": {},
  "SizeInMegabytes": {},
  "StorageEfficiencyEnabled": {},
  "StorageVirtualMachineId": {},
  "StorageVirtualMachineRoot": {},
  "TieringPolicy": {
    "CoolingPeriod": {},
    "Name": {}
  },
  "UUID": {},
  "OntapVolumeType": {},
  "SnapshotPolicy": {},
  "CopyTagsToBackups": {}
}
```

The configuration of an Amazon FSx for NetApp ONTAP volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlexCacheEndpointType|object|false|none|none|
|JunctionPath|object|false|none|none|
|SecurityStyle|object|false|none|none|
|SizeInMegabytes|object|false|none|none|
|StorageEfficiencyEnabled|object|false|none|none|
|StorageVirtualMachineId|object|false|none|none|
|StorageVirtualMachineRoot|object|false|none|none|
|TieringPolicy|object|false|none|none|
|UUID|object|false|none|none|
|OntapVolumeType|object|false|none|none|
|SnapshotPolicy|object|false|none|none|
|CopyTagsToBackups|object|false|none|none|

<h2 id="tocS_OpenZFSClients">OpenZFSClients</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsclients"></a>
<a id="schema_OpenZFSClients"></a>
<a id="tocSopenzfsclients"></a>
<a id="tocsopenzfsclients"></a>

```json
"string"
```

<h2 id="tocS_OpenZFSNfsExportOptions">OpenZFSNfsExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsnfsexportoptions"></a>
<a id="schema_OpenZFSNfsExportOptions"></a>
<a id="tocSopenzfsnfsexportoptions"></a>
<a id="tocsopenzfsnfsexportoptions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OpenZFSClientConfiguration">OpenZFSClientConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsclientconfiguration"></a>
<a id="schema_OpenZFSClientConfiguration"></a>
<a id="tocSopenzfsclientconfiguration"></a>
<a id="tocsopenzfsclientconfiguration"></a>

```json
{
  "Clients": {},
  "Options": {}
}
```

Specifies who can mount an OpenZFS file system and the options available while mounting the file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Clients|object|true|none|none|
|Options|object|true|none|none|

<h2 id="tocS_OpenZFSClientConfigurations">OpenZFSClientConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsclientconfigurations"></a>
<a id="schema_OpenZFSClientConfigurations"></a>
<a id="tocSopenzfsclientconfigurations"></a>
<a id="tocsopenzfsclientconfigurations"></a>

```json
[
  {
    "Clients": {},
    "Options": {}
  }
]
```

<h2 id="tocS_OpenZFSNfsExport">OpenZFSNfsExport</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsnfsexport"></a>
<a id="schema_OpenZFSNfsExport"></a>
<a id="tocSopenzfsnfsexport"></a>
<a id="tocsopenzfsnfsexport"></a>

```json
{
  "ClientConfigurations": {}
}
```

The Network File System (NFS) configurations for mounting an Amazon FSx for OpenZFS file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientConfigurations|object|true|none|none|

<h2 id="tocS_OpenZFSNfsExportOption">OpenZFSNfsExportOption</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsnfsexportoption"></a>
<a id="schema_OpenZFSNfsExportOption"></a>
<a id="tocSopenzfsnfsexportoption"></a>
<a id="tocsopenzfsnfsexportoption"></a>

```json
"string"
```

<h2 id="tocS_OpenZFSOriginSnapshotConfiguration">OpenZFSOriginSnapshotConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsoriginsnapshotconfiguration"></a>
<a id="schema_OpenZFSOriginSnapshotConfiguration"></a>
<a id="tocSopenzfsoriginsnapshotconfiguration"></a>
<a id="tocsopenzfsoriginsnapshotconfiguration"></a>

```json
{
  "SnapshotARN": "stringst",
  "CopyStrategy": {}
}
```

The snapshot configuration to use when creating an OpenZFS volume from a snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotARN|[ResourceARN](#schemaresourcearn)|false|none|The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.|
|CopyStrategy|object|false|none|none|

<h2 id="tocS_OpenZFSQuotaType">OpenZFSQuotaType</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsquotatype"></a>
<a id="schema_OpenZFSQuotaType"></a>
<a id="tocSopenzfsquotatype"></a>
<a id="tocsopenzfsquotatype"></a>

```json
"USER"
```

<h2 id="tocS_OpenZFSUserOrGroupQuota">OpenZFSUserOrGroupQuota</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsuserorgroupquota"></a>
<a id="schema_OpenZFSUserOrGroupQuota"></a>
<a id="tocSopenzfsuserorgroupquota"></a>
<a id="tocsopenzfsuserorgroupquota"></a>

```json
{
  "Type": {},
  "Id": {},
  "StorageCapacityQuotaGiB": {}
}
```

The configuration for how much storage a user or group can use on the volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Id|object|true|none|none|
|StorageCapacityQuotaGiB|object|true|none|none|

<h2 id="tocS_VolumePath">VolumePath</h2>
<!-- backwards compatibility -->
<a id="schemavolumepath"></a>
<a id="schema_VolumePath"></a>
<a id="tocSvolumepath"></a>
<a id="tocsvolumepath"></a>

```json
"string"
```

<h2 id="tocS_OpenZFSVolumeConfiguration">OpenZFSVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaopenzfsvolumeconfiguration"></a>
<a id="schema_OpenZFSVolumeConfiguration"></a>
<a id="tocSopenzfsvolumeconfiguration"></a>
<a id="tocsopenzfsvolumeconfiguration"></a>

```json
{
  "ParentVolumeId": {},
  "VolumePath": {},
  "StorageCapacityReservationGiB": {},
  "StorageCapacityQuotaGiB": {},
  "RecordSizeKiB": {},
  "DataCompressionType": {},
  "CopyTagsToSnapshots": {},
  "OriginSnapshot": {
    "SnapshotARN": "stringst",
    "CopyStrategy": {}
  },
  "ReadOnly": {},
  "NfsExports": {},
  "UserAndGroupQuotas": {},
  "RestoreToSnapshot": {},
  "DeleteIntermediateSnaphots": {},
  "DeleteClonedVolumes": {}
}
```

The configuration of an Amazon FSx for OpenZFS volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentVolumeId|object|false|none|none|
|VolumePath|object|false|none|none|
|StorageCapacityReservationGiB|object|false|none|none|
|StorageCapacityQuotaGiB|object|false|none|none|
|RecordSizeKiB|object|false|none|none|
|DataCompressionType|object|false|none|none|
|CopyTagsToSnapshots|object|false|none|none|
|OriginSnapshot|object|false|none|none|
|ReadOnly|object|false|none|none|
|NfsExports|object|false|none|none|
|UserAndGroupQuotas|object|false|none|none|
|RestoreToSnapshot|object|false|none|none|
|DeleteIntermediateSnaphots|object|false|none|none|
|DeleteClonedVolumes|object|false|none|none|

<h2 id="tocS_OrganizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitdistinguishedname"></a>
<a id="schema_OrganizationalUnitDistinguishedName"></a>
<a id="tocSorganizationalunitdistinguishedname"></a>
<a id="tocsorganizationalunitdistinguishedname"></a>

```json
"string"
```

<h2 id="tocS_RestoreOpenZFSVolumeOption">RestoreOpenZFSVolumeOption</h2>
<!-- backwards compatibility -->
<a id="schemarestoreopenzfsvolumeoption"></a>
<a id="schema_RestoreOpenZFSVolumeOption"></a>
<a id="tocSrestoreopenzfsvolumeoption"></a>
<a id="tocsrestoreopenzfsvolumeoption"></a>

```json
"DELETE_INTERMEDIATE_SNAPSHOTS"
```

<h2 id="tocS_RestoreOpenZFSVolumeOptions">RestoreOpenZFSVolumeOptions</h2>
<!-- backwards compatibility -->
<a id="schemarestoreopenzfsvolumeoptions"></a>
<a id="schema_RestoreOpenZFSVolumeOptions"></a>
<a id="tocSrestoreopenzfsvolumeoptions"></a>
<a id="tocsrestoreopenzfsvolumeoptions"></a>

```json
[
  "DELETE_INTERMEDIATE_SNAPSHOTS"
]
```

<h2 id="tocS_RouteTableId">RouteTableId</h2>
<!-- backwards compatibility -->
<a id="schemaroutetableid"></a>
<a id="schema_RouteTableId"></a>
<a id="tocSroutetableid"></a>
<a id="tocsroutetableid"></a>

```json
"stringstring"
```

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"stringstrin"
```

The ID of your Amazon EC2 security group. This ID is used to control network access to the endpoint that Amazon FSx creates on your behalf in each subnet. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security groups for Linux instances</a> in the <i>Amazon EC2 User Guide</i>.

<h2 id="tocS_SelfManagedActiveDirectoryAttributes">SelfManagedActiveDirectoryAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaselfmanagedactivedirectoryattributes"></a>
<a id="schema_SelfManagedActiveDirectoryAttributes"></a>
<a id="tocSselfmanagedactivedirectoryattributes"></a>
<a id="tocsselfmanagedactivedirectoryattributes"></a>

```json
{
  "DomainName": {},
  "OrganizationalUnitDistinguishedName": {},
  "FileSystemAdministratorsGroup": {},
  "UserName": {},
  "DnsIps": {}
}
```

The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|OrganizationalUnitDistinguishedName|object|false|none|none|
|FileSystemAdministratorsGroup|object|false|none|none|
|UserName|object|false|none|none|
|DnsIps|object|false|none|none|

<h2 id="tocS_SelfManagedActiveDirectoryConfigurationUpdates">SelfManagedActiveDirectoryConfigurationUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaselfmanagedactivedirectoryconfigurationupdates"></a>
<a id="schema_SelfManagedActiveDirectoryConfigurationUpdates"></a>
<a id="tocSselfmanagedactivedirectoryconfigurationupdates"></a>
<a id="tocsselfmanagedactivedirectoryconfigurationupdates"></a>

```json
{
  "UserName": {},
  "Password": {},
  "DnsIps": {}
}
```

The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|false|none|none|
|Password|object|false|none|none|
|DnsIps|object|false|none|none|

<h2 id="tocS_SnapshotFilterName">SnapshotFilterName</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotfiltername"></a>
<a id="schema_SnapshotFilterName"></a>
<a id="tocSsnapshotfiltername"></a>
<a id="tocssnapshotfiltername"></a>

```json
"file-system-id"
```

<h2 id="tocS_SnapshotFilterValues">SnapshotFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotfiltervalues"></a>
<a id="schema_SnapshotFilterValues"></a>
<a id="tocSsnapshotfiltervalues"></a>
<a id="tocssnapshotfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SnapshotFilter">SnapshotFilter</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotfilter"></a>
<a id="schema_SnapshotFilter"></a>
<a id="tocSsnapshotfilter"></a>
<a id="tocssnapshotfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A filter used to restrict the results of <code>DescribeSnapshots</code> calls. You can use multiple filters to return results that meet all applied filter requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_SnapshotFilterValue">SnapshotFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotfiltervalue"></a>
<a id="schema_SnapshotFilterValue"></a>
<a id="tocSsnapshotfiltervalue"></a>
<a id="tocssnapshotfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_SvmActiveDirectoryConfiguration">SvmActiveDirectoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasvmactivedirectoryconfiguration"></a>
<a id="schema_SvmActiveDirectoryConfiguration"></a>
<a id="tocSsvmactivedirectoryconfiguration"></a>
<a id="tocssvmactivedirectoryconfiguration"></a>

```json
{
  "NetBiosName": {},
  "SelfManagedActiveDirectoryConfiguration": {
    "DomainName": {},
    "OrganizationalUnitDistinguishedName": {},
    "FileSystemAdministratorsGroup": {},
    "UserName": {},
    "DnsIps": {}
  }
}
```

Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetBiosName|object|false|none|none|
|SelfManagedActiveDirectoryConfiguration|[SelfManagedActiveDirectoryAttributes](#schemaselfmanagedactivedirectoryattributes)|false|none|The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.|

<h2 id="tocS_SvmEndpoints">SvmEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemasvmendpoints"></a>
<a id="schema_SvmEndpoints"></a>
<a id="tocSsvmendpoints"></a>
<a id="tocssvmendpoints"></a>

```json
{
  "Iscsi": {
    "DNSName": "stringstringstri",
    "IpAddresses": {}
  },
  "Management": {
    "DNSName": "stringstringstri",
    "IpAddresses": {}
  },
  "Nfs": {
    "DNSName": "stringstringstri",
    "IpAddresses": {}
  },
  "Smb": {
    "DNSName": "stringstringstri",
    "IpAddresses": {}
  }
}
```

An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Iscsi|object|false|none|none|
|Management|object|false|none|none|
|Nfs|object|false|none|none|
|Smb|object|false|none|none|

<h2 id="tocS_StorageVirtualMachineSubtype">StorageVirtualMachineSubtype</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinesubtype"></a>
<a id="schema_StorageVirtualMachineSubtype"></a>
<a id="tocSstoragevirtualmachinesubtype"></a>
<a id="tocsstoragevirtualmachinesubtype"></a>

```json
"DEFAULT"
```

<h2 id="tocS_StorageVirtualMachineFilterName">StorageVirtualMachineFilterName</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinefiltername"></a>
<a id="schema_StorageVirtualMachineFilterName"></a>
<a id="tocSstoragevirtualmachinefiltername"></a>
<a id="tocsstoragevirtualmachinefiltername"></a>

```json
"file-system-id"
```

<h2 id="tocS_StorageVirtualMachineFilterValues">StorageVirtualMachineFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinefiltervalues"></a>
<a id="schema_StorageVirtualMachineFilterValues"></a>
<a id="tocSstoragevirtualmachinefiltervalues"></a>
<a id="tocsstoragevirtualmachinefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StorageVirtualMachineFilter">StorageVirtualMachineFilter</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinefilter"></a>
<a id="schema_StorageVirtualMachineFilter"></a>
<a id="tocSstoragevirtualmachinefilter"></a>
<a id="tocsstoragevirtualmachinefilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_StorageVirtualMachineFilterValue">StorageVirtualMachineFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinefiltervalue"></a>
<a id="schema_StorageVirtualMachineFilterValue"></a>
<a id="tocSstoragevirtualmachinefiltervalue"></a>
<a id="tocsstoragevirtualmachinefiltervalue"></a>

```json
"string"
```

<h2 id="tocS_SvmEndpoint">SvmEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemasvmendpoint"></a>
<a id="schema_SvmEndpoint"></a>
<a id="tocSsvmendpoint"></a>
<a id="tocssvmendpoint"></a>

```json
{
  "DNSName": "stringstringstri",
  "IpAddresses": {}
}
```

An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DNSName|[DNSName](#schemadnsname)|false|none|The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.|
|IpAddresses|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

A string of 1 to 128 characters that specifies the key for a tag. Tag keys must be unique for the resource to which they are attached.

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

A string of 0 to 256 characters that specifies the value for a tag. Tag values can be null and don't have to be unique in a tag set.

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

Specifies a key-value pair for a resource tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

A list of <code>TagKey</code> values, with a maximum of 50 elements.

<h2 id="tocS_TieringPolicyName">TieringPolicyName</h2>
<!-- backwards compatibility -->
<a id="schematieringpolicyname"></a>
<a id="schema_TieringPolicyName"></a>
<a id="tocStieringpolicyname"></a>
<a id="tocstieringpolicyname"></a>

```json
"SNAPSHOT_ONLY"
```

<h2 id="tocS_UpdateFileCacheLustreConfiguration">UpdateFileCacheLustreConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilecachelustreconfiguration"></a>
<a id="schema_UpdateFileCacheLustreConfiguration"></a>
<a id="tocSupdatefilecachelustreconfiguration"></a>
<a id="tocsupdatefilecachelustreconfiguration"></a>

```json
{
  "WeeklyMaintenanceStartTime": "strings"
}
```

The configuration update for an Amazon File Cache resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|

<h2 id="tocS_UpdateFileSystemLustreConfiguration">UpdateFileSystemLustreConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemlustreconfiguration"></a>
<a id="schema_UpdateFileSystemLustreConfiguration"></a>
<a id="tocSupdatefilesystemlustreconfiguration"></a>
<a id="tocsupdatefilesystemlustreconfiguration"></a>

```json
{
  "WeeklyMaintenanceStartTime": {},
  "DailyAutomaticBackupStartTime": "strin",
  "AutomaticBackupRetentionDays": 0,
  "AutoImportPolicy": {},
  "DataCompressionType": {},
  "LogConfiguration": {
    "Level": {},
    "Destination": {}
  },
  "RootSquashConfiguration": {
    "RootSquash": {},
    "NoSquashNids": {}
  }
}
```

The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WeeklyMaintenanceStartTime|object|false|none|none|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|AutoImportPolicy|object|false|none|none|
|DataCompressionType|object|false|none|none|
|LogConfiguration|object|false|none|none|
|RootSquashConfiguration|object|false|none|none|

<h2 id="tocS_UpdateFileSystemOntapConfiguration">UpdateFileSystemOntapConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemontapconfiguration"></a>
<a id="schema_UpdateFileSystemOntapConfiguration"></a>
<a id="tocSupdatefilesystemontapconfiguration"></a>
<a id="tocsupdatefilesystemontapconfiguration"></a>

```json
{
  "AutomaticBackupRetentionDays": 0,
  "DailyAutomaticBackupStartTime": "strin",
  "FsxAdminPassword": {},
  "WeeklyMaintenanceStartTime": "strings",
  "DiskIopsConfiguration": {
    "Mode": {},
    "Iops": {}
  },
  "ThroughputCapacity": {},
  "AddRouteTableIds": {},
  "RemoveRouteTableIds": {}
}
```

The configuration updates for an Amazon FSx for NetApp ONTAP file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|FsxAdminPassword|object|false|none|none|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|DiskIopsConfiguration|object|false|none|none|
|ThroughputCapacity|object|false|none|none|
|AddRouteTableIds|object|false|none|none|
|RemoveRouteTableIds|object|false|none|none|

<h2 id="tocS_UpdateFileSystemOpenZFSConfiguration">UpdateFileSystemOpenZFSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemopenzfsconfiguration"></a>
<a id="schema_UpdateFileSystemOpenZFSConfiguration"></a>
<a id="tocSupdatefilesystemopenzfsconfiguration"></a>
<a id="tocsupdatefilesystemopenzfsconfiguration"></a>

```json
{
  "AutomaticBackupRetentionDays": 0,
  "CopyTagsToBackups": {},
  "CopyTagsToVolumes": {},
  "DailyAutomaticBackupStartTime": "strin",
  "ThroughputCapacity": {},
  "WeeklyMaintenanceStartTime": "strings",
  "DiskIopsConfiguration": {
    "Mode": {},
    "Iops": {}
  }
}
```

The configuration updates for an Amazon FSx for OpenZFS file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticBackupRetentionDays|[AutomaticBackupRetentionDays](#schemaautomaticbackupretentiondays)|false|none|The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.|
|CopyTagsToBackups|object|false|none|none|
|CopyTagsToVolumes|object|false|none|none|
|DailyAutomaticBackupStartTime|[DailyTime](#schemadailytime)|false|none|A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. |
|ThroughputCapacity|object|false|none|none|
|WeeklyMaintenanceStartTime|[WeeklyTime](#schemaweeklytime)|false|none|<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>|
|DiskIopsConfiguration|[DiskIopsConfiguration](#schemadiskiopsconfiguration)|false|none|The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).|

<h2 id="tocS_UpdateFileSystemWindowsConfiguration">UpdateFileSystemWindowsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemwindowsconfiguration"></a>
<a id="schema_UpdateFileSystemWindowsConfiguration"></a>
<a id="tocSupdatefilesystemwindowsconfiguration"></a>
<a id="tocsupdatefilesystemwindowsconfiguration"></a>

```json
{
  "WeeklyMaintenanceStartTime": {},
  "DailyAutomaticBackupStartTime": {},
  "AutomaticBackupRetentionDays": {},
  "ThroughputCapacity": {},
  "SelfManagedActiveDirectoryConfiguration": {
    "UserName": {},
    "Password": {},
    "DnsIps": {}
  },
  "AuditLogConfiguration": {
    "FileAccessAuditLogLevel": {},
    "FileShareAccessAuditLogLevel": {},
    "AuditLogDestination": {}
  }
}
```

Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WeeklyMaintenanceStartTime|object|false|none|none|
|DailyAutomaticBackupStartTime|object|false|none|none|
|AutomaticBackupRetentionDays|object|false|none|none|
|ThroughputCapacity|object|false|none|none|
|SelfManagedActiveDirectoryConfiguration|object|false|none|none|
|AuditLogConfiguration|object|false|none|none|

<h2 id="tocS_UpdateOntapVolumeConfiguration">UpdateOntapVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdateontapvolumeconfiguration"></a>
<a id="schema_UpdateOntapVolumeConfiguration"></a>
<a id="tocSupdateontapvolumeconfiguration"></a>
<a id="tocsupdateontapvolumeconfiguration"></a>

```json
{
  "JunctionPath": {},
  "SecurityStyle": {},
  "SizeInMegabytes": {},
  "StorageEfficiencyEnabled": {},
  "TieringPolicy": {
    "CoolingPeriod": {},
    "Name": {}
  },
  "SnapshotPolicy": {},
  "CopyTagsToBackups": {}
}
```

Used to specify changes to the ONTAP configuration for the volume you are updating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JunctionPath|object|false|none|none|
|SecurityStyle|object|false|none|none|
|SizeInMegabytes|object|false|none|none|
|StorageEfficiencyEnabled|object|false|none|none|
|TieringPolicy|object|false|none|none|
|SnapshotPolicy|object|false|none|none|
|CopyTagsToBackups|object|false|none|none|

<h2 id="tocS_UpdateOpenZFSVolumeConfiguration">UpdateOpenZFSVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdateopenzfsvolumeconfiguration"></a>
<a id="schema_UpdateOpenZFSVolumeConfiguration"></a>
<a id="tocSupdateopenzfsvolumeconfiguration"></a>
<a id="tocsupdateopenzfsvolumeconfiguration"></a>

```json
{
  "StorageCapacityReservationGiB": {},
  "StorageCapacityQuotaGiB": {},
  "RecordSizeKiB": {},
  "DataCompressionType": {},
  "NfsExports": {},
  "UserAndGroupQuotas": {},
  "ReadOnly": {}
}
```

Used to specify changes to the OpenZFS configuration for the volume that you are updating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageCapacityReservationGiB|object|false|none|none|
|StorageCapacityQuotaGiB|object|false|none|none|
|RecordSizeKiB|object|false|none|none|
|DataCompressionType|object|false|none|none|
|NfsExports|object|false|none|none|
|UserAndGroupQuotas|object|false|none|none|
|ReadOnly|object|false|none|none|

<h2 id="tocS_UpdateSvmActiveDirectoryConfiguration">UpdateSvmActiveDirectoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesvmactivedirectoryconfiguration"></a>
<a id="schema_UpdateSvmActiveDirectoryConfiguration"></a>
<a id="tocSupdatesvmactivedirectoryconfiguration"></a>
<a id="tocsupdatesvmactivedirectoryconfiguration"></a>

```json
{
  "SelfManagedActiveDirectoryConfiguration": {
    "UserName": {},
    "Password": {},
    "DnsIps": {}
  }
}
```

Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD. Please note, account credentials are not returned in the response payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelfManagedActiveDirectoryConfiguration|[SelfManagedActiveDirectoryConfigurationUpdates](#schemaselfmanagedactivedirectoryconfigurationupdates)|false|none|The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.|

<h2 id="tocS_VolumeFilterName">VolumeFilterName</h2>
<!-- backwards compatibility -->
<a id="schemavolumefiltername"></a>
<a id="schema_VolumeFilterName"></a>
<a id="tocSvolumefiltername"></a>
<a id="tocsvolumefiltername"></a>

```json
"file-system-id"
```

<h2 id="tocS_VolumeFilterValues">VolumeFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemavolumefiltervalues"></a>
<a id="schema_VolumeFilterValues"></a>
<a id="tocSvolumefiltervalues"></a>
<a id="tocsvolumefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VolumeFilter">VolumeFilter</h2>
<!-- backwards compatibility -->
<a id="schemavolumefilter"></a>
<a id="schema_VolumeFilter"></a>
<a id="tocSvolumefilter"></a>
<a id="tocsvolumefilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes. You can use multiple filters to return results that meet all applied filter requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_VolumeFilterValue">VolumeFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemavolumefiltervalue"></a>
<a id="schema_VolumeFilterValue"></a>
<a id="tocSvolumefiltervalue"></a>
<a id="tocsvolumefiltervalue"></a>

```json
"string"
```

<h2 id="tocS_WindowsAccessAuditLogLevel">WindowsAccessAuditLogLevel</h2>
<!-- backwards compatibility -->
<a id="schemawindowsaccessauditloglevel"></a>
<a id="schema_WindowsAccessAuditLogLevel"></a>
<a id="tocSwindowsaccessauditloglevel"></a>
<a id="tocswindowsaccessauditloglevel"></a>

```json
"DISABLED"
```

<h2 id="tocS_WindowsAuditLogConfiguration">WindowsAuditLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawindowsauditlogconfiguration"></a>
<a id="schema_WindowsAuditLogConfiguration"></a>
<a id="tocSwindowsauditlogconfiguration"></a>
<a id="tocswindowsauditlogconfiguration"></a>

```json
{
  "FileAccessAuditLogLevel": {},
  "FileShareAccessAuditLogLevel": {},
  "AuditLogDestination": {}
}
```

The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html"> File access auditing</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileAccessAuditLogLevel|object|true|none|none|
|FileShareAccessAuditLogLevel|object|true|none|none|
|AuditLogDestination|object|false|none|none|
