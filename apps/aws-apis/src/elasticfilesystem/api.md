<h1 id="amazon-elastic-file-system">Amazon Elastic File System v2015-02-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Elastic File System</fullname> <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 Linux and Mac instances in the Amazon Web Services Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so that your applications have the storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System User Guide</a>.</p>

Base URLs:

* <a href="http://elasticfilesystem.us-east-1.amazonaws.com">http://elasticfilesystem.us-east-1.amazonaws.com</a> - The EFS multi-region endpoint

* <a href="https://elasticfilesystem.us-east-1.amazonaws.com">https://elasticfilesystem.us-east-1.amazonaws.com</a> - The EFS multi-region endpoint

* <a href="http://elasticfilesystem.cn-north-1.amazonaws.com.cn">http://elasticfilesystem.cn-north-1.amazonaws.com.cn</a> - The EFS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://elasticfilesystem.cn-north-1.amazonaws.com.cn">https://elasticfilesystem.cn-north-1.amazonaws.com.cn</a> - The EFS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elasticfilesystem/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elastic-file-system-default">Default</h1>

## DescribeAccessPoints

<a id="opIdDescribeAccessPoints"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/access-points \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/access-points`

<p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided. If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system. You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>

<h3 id="describeaccesspoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|integer|false|(Optional) When retrieving all access points for a file system, you can optionally specify the <code>MaxItems</code> parameter to limit the number of objects returned in a response. The default value is 100. |
|NextToken|query|string|false| <code>NextToken</code> is present if the response is paginated. You can use <code>NextMarker</code> in the subsequent request to fetch the next page of access point descriptions.|
|AccessPointId|query|string|false|(Optional) Specifies an EFS access point to describe in the response; mutually exclusive with <code>FileSystemId</code>.|
|FileSystemId|query|string|false|(Optional) If you provide a <code>FileSystemId</code>, EFS returns all access points for that file system; mutually exclusive with <code>AccessPointId</code>.|
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
  "AccessPoints": {},
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

> 483 Response

```json
null
```

<h3 id="describeaccesspoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccessPointsResponse](#schemadescribeaccesspointsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|AccessPointNotFound|[AccessPointNotFound](#schemaaccesspointnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccessPoint

<a id="opIdCreateAccessPoint"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/access-points \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientToken": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "FileSystemId": "string",
    "PosixUser": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "RootDirectory": {
      "Path": {},
      "CreationInfo": {
        "OwnerUid": {},
        "OwnerGid": {},
        "Permissions": {}
      }
    }
  }'
```

`POST /2015-02-01/access-points`

<p>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in the application's own directory and any subdirectories. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access points</a>.</p> <note> <p>If multiple requests to create access points on the same file system are sent in quick succession, and the file system is near the limit of 1000 access points, you may experience a throttling response for these requests. This is to ensure that the file system does not exceed the stated access point limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>

> Body parameter

```json
{
  "ClientToken": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "FileSystemId": "string",
  "PosixUser": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "RootDirectory": {
    "Path": {},
    "CreationInfo": {
      "OwnerUid": {},
      "OwnerGid": {},
      "Permissions": {}
    }
  }
}
```

<h3 id="createaccesspoint-parameters">Parameters</h3>

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
|» ClientToken|body|string|true|A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.|
|» Tags|body|[[Tag](#schematag)]|false|Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.|
|» FileSystemId|body|string|true|The ID of the EFS file system that the access point provides access to.|
|» PosixUser|body|object|false|The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.|
|» » Uid|body|object|false|none|
|» » Gid|body|object|false|none|
|» » SecondaryGids|body|object|false|none|
|» RootDirectory|body|object|false|Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.|
|» » Path|body|object|false|none|
|» » CreationInfo|body|object|false|none|
|» » » OwnerUid|body|object|true|none|
|» » » OwnerGid|body|object|true|none|
|» » » Permissions|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "ClientToken": {},
  "Name": {},
  "Tags": {},
  "AccessPointId": {},
  "AccessPointArn": {},
  "FileSystemId": {},
  "PosixUser": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "RootDirectory": {
    "Path": {},
    "CreationInfo": {
      "OwnerUid": {},
      "OwnerGid": {},
      "Permissions": {}
    }
  },
  "OwnerId": {},
  "LifeCycleState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccessPointDescription](#schemaaccesspointdescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|AccessPointAlreadyExists|[AccessPointAlreadyExists](#schemaaccesspointalreadyexists)|
|482|482|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|485|485|AccessPointLimitExceeded|[AccessPointLimitExceeded](#schemaaccesspointlimitexceeded)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFileSystems

<a id="opIdDescribeFileSystems"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/file-systems`

<p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. This number is automatically set to 100. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>

<h3 id="describefilesystems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|integer|false|(Optional) Specifies the maximum number of file systems to return in the response (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems. |
|Marker|query|string|false|(Optional) Opaque pagination token returned from a previous <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the list from where the returning call had left off. |
|CreationToken|query|string|false|(Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.|
|FileSystemId|query|string|false|(Optional) ID of the file system whose description you want to retrieve (String).|
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
  "FileSystems": [
    {
      "CreationTime": "1481841524.0",
      "CreationToken": "tokenstring",
      "FileSystemId": "fs-01234567",
      "LifeCycleState": "available",
      "Name": "MyFileSystem",
      "NumberOfMountTargets": 1,
      "OwnerId": 12345678912,
      "PerformanceMode": "generalPurpose",
      "SizeInBytes": {
        "Value": 6144
      },
      "Tags": [
        {
          "Key": "Name",
          "Value": "MyFileSystem"
        }
      ]
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
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFileSystem

<a id="opIdCreateFileSystem"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CreationToken": "string",
    "PerformanceMode": "generalPurpose",
    "Encrypted": true,
    "KmsKeyId": "string",
    "ThroughputMode": "bursting",
    "ProvisionedThroughputInMibps": 1,
    "AvailabilityZoneName": "string",
    "Backup": true,
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /2015-02-01/file-systems`

<p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's Amazon Web Services account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance modes</a>.</p> <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code> parameter.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p> This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p>

> Body parameter

```json
{
  "CreationToken": "string",
  "PerformanceMode": "generalPurpose",
  "Encrypted": true,
  "KmsKeyId": "string",
  "ThroughputMode": "bursting",
  "ProvisionedThroughputInMibps": 1,
  "AvailabilityZoneName": "string",
  "Backup": true,
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createfilesystem-parameters">Parameters</h3>

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
|» CreationToken|body|string|true|A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.|
|» PerformanceMode|body|string|false|<p>The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.</p> <note> <p>The <code>maxIO</code> mode is not supported on file systems using One Zone storage classes.</p> </note>|
|» Encrypted|body|boolean|false|A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key). If you don't specify a KMS key, then the default KMS key for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. |
|» KmsKeyId|body|string|false|<p>The ID of the KMS key that you want to use to protect the encrypted file system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If you use <code>KmsKeyId</code>, you must set the <a>CreateFileSystemRequest$Encrypted</a> parameter to true.</p> <important> <p>EFS accepts only symmetric KMS keys. You cannot use asymmetric KMS keys with Amazon EFS file systems.</p> </important>|
|» ThroughputMode|body|string|false|<p>Specifies the throughput mode for the file system. The mode can be <code>bursting</code>, <code>provisioned</code>, or <code>elastic</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. After you create the file system, you can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes, with certain time restrictions. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying throughput with provisioned mode</a> in the <i>Amazon EFS User Guide</i>. </p> <p>Default is <code>bursting</code>.</p>|
|» ProvisionedThroughputInMibps|body|number(double)|false|The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. To increase this limit, contact Amazon Web Services Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS quotas that you can increase</a> in the <i>Amazon EFS User Guide</i>.|
|» AvailabilityZoneName|body|string|false|<p>Used to create a file system that uses One Zone storage classes. It specifies the Amazon Web Services Availability Zone in which to create the file system. Use the format <code>us-east-1a</code> to specify the Availability Zone. For more information about One Zone storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">Using EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>One Zone storage classes are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.</p> </note>|
|» Backup|body|boolean|false|<p>Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to <code>true</code> to enable automatic backups. If you are creating a file system that uses One Zone storage classes, automatic backups are enabled by default. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a> in the <i>Amazon EFS User Guide</i>.</p> <p>Default is <code>false</code>. However, if you specify an <code>AvailabilityZoneName</code>, the default is <code>true</code>.</p> <note> <p>Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.</p> </note>|
|» Tags|body|[[Tag](#schematag)]|false|Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a <code>"Key":"Name","Value":"{value}"</code> key-value pair. Each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PerformanceMode|generalPurpose|
|» PerformanceMode|maxIO|
|» ThroughputMode|bursting|
|» ThroughputMode|provisioned|
|» ThroughputMode|elastic|

> Example responses

> 201 Response

```json
{
  "CreationTime": "1481841524.0",
  "CreationToken": "tokenstring",
  "Encrypted": true,
  "FileSystemId": "fs-01234567",
  "LifeCycleState": "creating",
  "NumberOfMountTargets": 0,
  "OwnerId": 12345678912,
  "PerformanceMode": "generalPurpose",
  "SizeInBytes": {
    "Value": 0
  },
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createfilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[FileSystemDescription](#schemafilesystemdescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemAlreadyExists|[FileSystemAlreadyExists](#schemafilesystemalreadyexists)|
|483|483|FileSystemLimitExceeded|[FileSystemLimitExceeded](#schemafilesystemlimitexceeded)|
|484|484|InsufficientThroughputCapacity|[InsufficientThroughputCapacity](#schemainsufficientthroughputcapacity)|
|485|485|ThroughputLimitExceeded|[ThroughputLimitExceeded](#schemathroughputlimitexceeded)|
|486|486|UnsupportedAvailabilityZone|[UnsupportedAvailabilityZone](#schemaunsupportedavailabilityzone)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMountTargets

<a id="opIdDescribeMountTargets"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/mount-targets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/mount-targets`

<p>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID that you specify in <code>FileSystemId</code>, or on the file system of the mount target that you specify in <code>MountTargetId</code>.</p>

<h3 id="describemounttargets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|integer|false|(Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.|
|Marker|query|string|false|(Optional) Opaque pagination token returned from a previous <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue the list from where the previous returning call left off.|
|FileSystemId|query|string|false|(Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an <code>AccessPointId</code> or <code>MountTargetId</code> is not included. Accepts either a file system ID or ARN as input.|
|MountTargetId|query|string|false|(Optional) ID of the mount target that you want to have described (String). It must be included in your request if <code>FileSystemId</code> is not included. Accepts either a mount target ID or ARN as input.|
|AccessPointId|query|string|false|(Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a <code>FileSystemId</code> or <code>MountTargetId</code> is not included in your request. Accepts either an access point ID or ARN as input.|
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
  "MountTargets": [
    {
      "FileSystemId": "fs-01234567",
      "IpAddress": "192.0.0.2",
      "LifeCycleState": "available",
      "MountTargetId": "fsmt-12340abc",
      "NetworkInterfaceId": "eni-cedf6789",
      "OwnerId": 12345678912,
      "SubnetId": "subnet-1234abcd"
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

<h3 id="describemounttargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMountTargetsResponse](#schemadescribemounttargetsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|MountTargetNotFound|[MountTargetNotFound](#schemamounttargetnotfound)|
|484|484|AccessPointNotFound|[AccessPointNotFound](#schemaaccesspointnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMountTarget

<a id="opIdCreateMountTarget"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/mount-targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FileSystemId": "string",
    "SubnetId": "stringstringstr",
    "IpAddress": "strings",
    "SecurityGroups": [
      "stringstrin"
    ]
  }'
```

`POST /2015-02-01/mount-targets`

<p>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system.</p> <p>You can create only one mount target for an EFS file system using One Zone storage classes. You must create that mount target in the same Availability Zone in which the file system is located. Use the <code>AvailabilityZoneName</code> and <code>AvailabiltyZoneId</code> properties in the <a>DescribeFileSystems</a> response object to get this information. Use the <code>subnetId</code> associated with the file system's Availability Zone when creating the mount target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p>To create a mount target for a file system, the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, provide the following:</p> <ul> <li> <p>The file system ID for which you are creating the mount target.</p> </li> <li> <p>A subnet ID, which determines the following:</p> <ul> <li> <p>The VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>The Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>

> Body parameter

```json
{
  "FileSystemId": "string",
  "SubnetId": "stringstringstr",
  "IpAddress": "strings",
  "SecurityGroups": [
    "stringstrin"
  ]
}
```

<h3 id="createmounttarget-parameters">Parameters</h3>

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
|» FileSystemId|body|string|true|The ID of the file system for which to create the mount target.|
|» SubnetId|body|string|true|The ID of the subnet to add the mount target in. For file systems that use One Zone storage classes, use the subnet that is associated with the file system's Availability Zone.|
|» IpAddress|body|string|false|Valid IPv4 address within the address range of the specified subnet.|
|» SecurityGroups|body|[[SecurityGroup](#schemasecuritygroup)]|false|Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.|

> Example responses

> 200 Response

```json
{
  "FileSystemId": "fs-01234567",
  "IpAddress": "192.0.0.2",
  "LifeCycleState": "creating",
  "MountTargetId": "fsmt-12340abc",
  "NetworkInterfaceId": "eni-cedf6789",
  "OwnerId": 12345678912,
  "SubnetId": "subnet-1234abcd"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="createmounttarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MountTargetDescription](#schemamounttargetdescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|
|484|484|MountTargetConflict|[MountTargetConflict](#schemamounttargetconflict)|
|485|485|SubnetNotFound|[SubnetNotFound](#schemasubnetnotfound)|
|486|486|NoFreeAddressesInSubnet|[NoFreeAddressesInSubnet](#schemanofreeaddressesinsubnet)|
|487|487|IpAddressInUse|[IpAddressInUse](#schemaipaddressinuse)|
|488|488|NetworkInterfaceLimitExceeded|[NetworkInterfaceLimitExceeded](#schemanetworkinterfacelimitexceeded)|
|489|489|SecurityGroupLimitExceeded|[SecurityGroupLimitExceeded](#schemasecuritygrouplimitexceeded)|
|490|490|SecurityGroupNotFound|[SecurityGroupNotFound](#schemasecuritygroupnotfound)|
|491|491|UnsupportedAvailabilityZone|[UnsupportedAvailabilityZone](#schemaunsupportedavailabilityzone)|
|492|492|AvailabilityZonesMismatch|[AvailabilityZonesMismatch](#schemaavailabilityzonesmismatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReplicationConfiguration

<a id="opIdCreateReplicationConfiguration"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/replication-configuration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Destinations": [
      {
        "Region": {},
        "AvailabilityZoneName": {},
        "KmsKeyId": {}
      }
    ]
  }'
```

`POST /2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration`

<p>Creates a replication configuration that replicates an existing EFS file system to a new, read-only file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>. The replication configuration specifies the following:</p> <ul> <li> <p> <b>Source file system</b> - An existing EFS file system that you want replicated. The source file system cannot be a destination file system in an existing replication configuration.</p> </li> <li> <p> <b>Destination file system configuration</b> - The configuration of the destination file system to which the source file system will be replicated. There can only be one destination file system in a replication configuration. The destination file system configuration consists of the following properties:</p> <ul> <li> <p> <b>Amazon Web Services Region</b> - The Amazon Web Services Region in which the destination file system is created. Amazon EFS replication is available in all Amazon Web Services Regions that Amazon EFS is available in, except Africa (Cape Town), Asia Pacific (Hong Kong), Asia Pacific (Jakarta), Europe (Milan), and Middle East (Bahrain).</p> </li> <li> <p> <b>Availability Zone</b> - If you want the destination file system to use EFS One Zone availability and durability, you must specify the Availability Zone to create the file system in. For more information about EFS storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html"> Amazon EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> </li> <li> <p> <b>Encryption</b> - All destination file systems are created with encryption at rest enabled. You can specify the Key Management Service (KMS) key that is used to encrypt the destination file system. If you don't specify a KMS key, your service-managed KMS key for Amazon EFS is used. </p> <note> <p>After the file system is created, you cannot change the KMS key.</p> </note> </li> </ul> </li> </ul> <p>The following properties are set by default:</p> <ul> <li> <p> <b>Performance mode</b> - The destination file system's performance mode matches that of the source file system, unless the destination file system uses EFS One Zone storage. In that case, the General Purpose performance mode is used. The performance mode cannot be changed.</p> </li> <li> <p> <b>Throughput mode</b> - The destination file system's throughput mode matches that of the source file system. After the file system is created, you can modify the throughput mode.</p> </li> </ul> <p>The following properties are turned off by default:</p> <ul> <li> <p> <b>Lifecycle management</b> - EFS lifecycle management and EFS Intelligent-Tiering are not enabled on the destination file system. After the destination file system is created, you can enable EFS lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p> <b>Automatic backups</b> - Automatic daily backups not enabled on the destination file system. After the file system is created, you can change this setting.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>.</p>

> Body parameter

```json
{
  "Destinations": [
    {
      "Region": {},
      "AvailabilityZoneName": {},
      "KmsKeyId": {}
    }
  ]
}
```

<h3 id="createreplicationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceFileSystemId|path|string|true|Specifies the Amazon EFS file system that you want to replicate. This file system cannot already be a source or destination file system in another replication configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Destinations|body|[[DestinationToCreate](#schemadestinationtocreate)]|true|An array of destination configuration objects. Only one destination configuration object is supported.|

> Example responses

> 200 Response

```json
{
  "SourceFileSystemId": {},
  "SourceFileSystemRegion": {},
  "SourceFileSystemArn": {},
  "OriginalSourceFileSystemArn": {},
  "CreationTime": {},
  "Destinations": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createreplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicationConfigurationDescription](#schemareplicationconfigurationdescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ReplicationNotFound|[ReplicationNotFound](#schemareplicationnotfound)|
|484|484|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|485|485|UnsupportedAvailabilityZone|[UnsupportedAvailabilityZone](#schemaunsupportedavailabilityzone)|
|486|486|FileSystemLimitExceeded|[FileSystemLimitExceeded](#schemafilesystemlimitexceeded)|
|487|487|InsufficientThroughputCapacity|[InsufficientThroughputCapacity](#schemainsufficientthroughputcapacity)|
|488|488|ThroughputLimitExceeded|[ThroughputLimitExceeded](#schemathroughputlimitexceeded)|
|489|489|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationConfiguration

<a id="opIdDeleteReplicationConfiguration"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/replication-configuration \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration`

Deletes an existing replication configuration. To delete a replication configuration, you must make the request from the Amazon Web Services Region in which the destination file system is located. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system is no longer read-only. You can write to the destination file system after its status becomes <code>Writeable</code>.

<h3 id="deletereplicationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceFileSystemId|path|string|true|The ID of the source file system in the replication configuration.|
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

<h3 id="deletereplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|ReplicationNotFound|[ReplicationNotFound](#schemareplicationnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTags

<a id="opIdCreateTags"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/create-tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /2015-02-01/create-tags/{FileSystemId}`

<aside class="warning">
This operation is deprecated
</aside>

<note> <p>DEPRECATED - <code>CreateTags</code> is deprecated and not maintained. To create tags for EFS resources, use the API action.</p> </note> <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p>

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[Tag](#schematag)]|true|An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair. |

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

<h3 id="createtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessPoint

<a id="opIdDeleteAccessPoint"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/access-points/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-02-01/access-points/{AccessPointId}`

<p>Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>

<h3 id="deleteaccesspoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccessPointId|path|string|true|The ID of the access point that you want to delete.|
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

<h3 id="deleteaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|AccessPointNotFound|[AccessPointNotFound](#schemaaccesspointnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFileSystem

<a id="opIdUpdateFileSystem"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ThroughputMode": "bursting",
    "ProvisionedThroughputInMibps": 1
  }'
```

`PUT /2015-02-01/file-systems/{FileSystemId}`

Updates the throughput mode or the amount of provisioned throughput of an existing file system.

> Body parameter

```json
{
  "ThroughputMode": "bursting",
  "ProvisionedThroughputInMibps": 1
}
```

<h3 id="updatefilesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|The ID of the file system that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ThroughputMode|body|string|false|(Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.|
|» ProvisionedThroughputInMibps|body|number(double)|false|(Optional) Sets the amount of provisioned throughput, in MiB/s, for the file system. Valid values are 1-1024. If you are changing the throughput mode to provisioned, you must also provide the amount of provisioned throughput. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ThroughputMode|bursting|
|» ThroughputMode|provisioned|
|» ThroughputMode|elastic|

> Example responses

> 202 Response

```json
{
  "CreationTime": "1481841524.0",
  "CreationToken": "tokenstring",
  "Encrypted": true,
  "FileSystemId": "fs-01234567",
  "LifeCycleState": "creating",
  "NumberOfMountTargets": 0,
  "OwnerId": 12345678912,
  "PerformanceMode": "generalPurpose",
  "SizeInBytes": {
    "Value": 0
  },
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatefilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[FileSystemDescription](#schemafilesystemdescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|
|483|483|InsufficientThroughputCapacity|[InsufficientThroughputCapacity](#schemainsufficientthroughputcapacity)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|
|485|485|ThroughputLimitExceeded|[ThroughputLimitExceeded](#schemathroughputlimitexceeded)|
|486|486|TooManyRequests|[TooManyRequests](#schematoomanyrequests)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFileSystem

<a id="opIdDeleteFileSystem"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-02-01/file-systems/{FileSystemId}`

<p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p>You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system.</p> <note> <p>You cannot delete a file system that is part of an EFS Replication configuration. You need to delete the replication configuration first.</p> </note> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>

<h3 id="deletefilesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|The ID of the file system you want to delete.|
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

<h3 id="deletefilesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|FileSystemInUse|[FileSystemInUse](#schemafilesysteminuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFileSystemPolicy

<a id="opIdDescribeFileSystemPolicy"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/file-systems/{FileSystemId}/policy`

<p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>

<h3 id="describefilesystempolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|Specifies which EFS file system to retrieve the <code>FileSystemPolicy</code> for.|
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
  "FileSystemId": {},
  "Policy": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describefilesystempolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FileSystemPolicyDescription](#schemafilesystempolicydescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|PolicyNotFound|[PolicyNotFound](#schemapolicynotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFileSystemPolicy

<a id="opIdPutFileSystemPolicy"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Policy": "string",
    "BypassPolicyLockoutSafetyCheck": true
  }'
```

`PUT /2015-02-01/file-systems/{FileSystemId}/policy`

<p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. EFS file system policies have a 20,000 character limit. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>. </p> <note> <p>EFS file system policies have a 20,000 character limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>

> Body parameter

```json
{
  "Policy": "string",
  "BypassPolicyLockoutSafetyCheck": true
}
```

<h3 id="putfilesystempolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|The ID of the EFS file system that you want to create or update the <code>FileSystemPolicy</code> for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>. |
|» BypassPolicyLockoutSafetyCheck|body|boolean|false|(Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system. The default value is <code>False</code>. |

> Example responses

> 200 Response

```json
{
  "FileSystemId": {},
  "Policy": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putfilesystempolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FileSystemPolicyDescription](#schemafilesystempolicydescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|
|484|484|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFileSystemPolicy

<a id="opIdDeleteFileSystemPolicy"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/policy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-02-01/file-systems/{FileSystemId}/policy`

<p>Deletes the <code>FileSystemPolicy</code> for the specified file system. The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>

<h3 id="deletefilesystempolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|Specifies the EFS file system for which to delete the <code>FileSystemPolicy</code>.|
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

<h3 id="deletefilesystempolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMountTarget

<a id="opIdDeleteMountTarget"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/mount-targets/stringstrings \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-02-01/mount-targets/{MountTargetId}`

<p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>

<h3 id="deletemounttarget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MountTargetId|path|string|true|The ID of the mount target to delete (String).|
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

<h3 id="deletemounttarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|DependencyTimeout|[DependencyTimeout](#schemadependencytimeout)|
|483|483|MountTargetNotFound|[MountTargetNotFound](#schemamounttargetnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTags

<a id="opIdDeleteTags"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/delete-tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TagKeys": [
      "string"
    ]
  }'
```

`POST /2015-02-01/delete-tags/{FileSystemId}`

<aside class="warning">
This operation is deprecated
</aside>

<note> <p>DEPRECATED - <code>DeleteTags</code> is deprecated and not maintained. To remove tags from EFS resources, use the API action.</p> </note> <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p>

> Body parameter

```json
{
  "TagKeys": [
    "string"
  ]
}
```

<h3 id="deletetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|The ID of the file system whose tags you want to delete (String).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TagKeys|body|[[TagKey](#schematagkey)]|true|A list of tag keys to delete.|

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

<h3 id="deletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountPreferences

<a id="opIdDescribeAccountPreferences"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/account-preferences \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`GET /2015-02-01/account-preferences`

Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region. For more information, see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="describeaccountpreferences-parameters">Parameters</h3>

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
|» NextToken|body|string|false|Token used for pagination.|
|» MaxResults|body|integer|false|Max results used for pagination.|

> Example responses

> 200 Response

```json
{
  "ResourceIdPreference": {
    "ResourceIdType": {},
    "Resources": {}
  },
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeaccountpreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountPreferencesResponse](#schemadescribeaccountpreferencesresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountPreferences

<a id="opIdPutAccountPreferences"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/account-preferences \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceIdType": "LONG_ID"
  }'
```

`PUT /2015-02-01/account-preferences`

<p>Use this operation to set the account preference in the current Amazon Web Services Region to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for new EFS file system and mount target resources. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the opt-in period as EFS transitions to long resource IDs. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p> <note> <p>Starting in October, 2021, you will receive an error if you try to set the account preference to use the short 8 character format resource ID. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.</p> </note>

> Body parameter

```json
{
  "ResourceIdType": "LONG_ID"
}
```

<h3 id="putaccountpreferences-parameters">Parameters</h3>

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
|» ResourceIdType|body|string|true|A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ResourceIdType|LONG_ID|
|» ResourceIdType|SHORT_ID|

> Example responses

> 200 Response

```json
{
  "ResourceIdPreference": {
    "ResourceIdType": {},
    "Resources": {}
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

<h3 id="putaccountpreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountPreferencesResponse](#schemaputaccountpreferencesresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBackupPolicy

<a id="opIdDescribeBackupPolicy"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/backup-policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/file-systems/{FileSystemId}/backup-policy`

Returns the backup policy for the specified EFS file system.

<h3 id="describebackuppolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|Specifies which EFS file system to retrieve the <code>BackupPolicy</code> for.|
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
  "BackupPolicy": {
    "Status": {}
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

<h3 id="describebackuppolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BackupPolicyDescription](#schemabackuppolicydescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|PolicyNotFound|[PolicyNotFound](#schemapolicynotfound)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBackupPolicy

<a id="opIdPutBackupPolicy"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/backup-policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BackupPolicy": {
      "Status": {}
    }
  }'
```

`PUT /2015-02-01/file-systems/{FileSystemId}/backup-policy`

Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. 

> Body parameter

```json
{
  "BackupPolicy": {
    "Status": {}
  }
}
```

<h3 id="putbackuppolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|Specifies which EFS file system to update the backup policy for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BackupPolicy|body|object|true|The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.|
|» » Status|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "BackupPolicy": {
    "Status": {}
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

<h3 id="putbackuppolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BackupPolicyDescription](#schemabackuppolicydescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLifecycleConfiguration

<a id="opIdDescribeLifecycleConfiguration"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/lifecycle-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration`

<p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the response.</p> <p>When EFS Intelligent-Tiering is enabled, <code>TransitionToPrimaryStorageClass</code> has a value of <code>AFTER_1_ACCESS</code>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>

<h3 id="describelifecycleconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|The ID of the file system whose <code>LifecycleConfiguration</code> object you want to retrieve (String).|
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
  "LifecyclePolicies": [
    {
      "TransitionToIA": "AFTER_30_DAYS"
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

<h3 id="describelifecycleconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LifecycleConfigurationDescription](#schemalifecycleconfigurationdescription)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|BadRequest|[BadRequest](#schemabadrequest)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLifecycleConfiguration

<a id="opIdPutLifecycleConfiguration"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/string/lifecycle-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LifecyclePolicies": [
      {
        "TransitionToIA": {},
        "TransitionToPrimaryStorageClass": {}
      }
    ]
  }'
```

`PUT /2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration`

<p>Use this action to manage EFS lifecycle management and EFS Intelligent-Tiering. A <code>LifecycleConfiguration</code> consists of one or more <code>LifecyclePolicy</code> objects that define the following:</p> <ul> <li> <p> <b>EFS Lifecycle management</b> - When Amazon EFS automatically transitions files in a file system into the lower-cost EFS Infrequent Access (IA) storage class.</p> <p>To enable EFS Lifecycle management, set the value of <code>TransitionToIA</code> to one of the available options.</p> </li> <li> <p> <b>EFS Intelligent-Tiering</b> - When Amazon EFS automatically transitions files from IA back into the file system's primary storage class (EFS Standard or EFS One Zone Standard).</p> <p>To enable EFS Intelligent-Tiering, set the value of <code>TransitionToPrimaryStorageClass</code> to <code>AFTER_1_ACCESS</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Lifecycle Management</a>.</p> <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a <code>LifecycleConfiguration</code> object already exists for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code> array in the request body deletes any existing <code>LifecycleConfiguration</code> and turns off lifecycle management and EFS Intelligent-Tiering for the file system.</p> <p>In the request, specify the following: </p> <ul> <li> <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that define when files are moved into IA storage, and when they are moved back to Standard storage.</p> <note> <p>Amazon EFS requires that each <code>LifecyclePolicy</code> object have only have a single transition, so the <code>LifecyclePolicies</code> array needs to be structured with separate <code>LifecyclePolicy</code> objects. See the example requests in the following section for more information.</p> </note> </li> </ul> <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p> <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.</p>

> Body parameter

```json
{
  "LifecyclePolicies": [
    {
      "TransitionToIA": {},
      "TransitionToPrimaryStorageClass": {}
    }
  ]
}
```

<h3 id="putlifecycleconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|path|string|true|The ID of the file system for which you are creating the <code>LifecycleConfiguration</code> object (String).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LifecyclePolicies|body|[[LifecyclePolicy](#schemalifecyclepolicy)]|true|<p>An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object informs EFS lifecycle management and EFS Intelligent-Tiering of the following:</p> <ul> <li> <p>When to move files in the file system from primary storage to the IA storage class.</p> </li> <li> <p>When to move files that are in IA storage to primary storage.</p> </li> </ul> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. See the example requests in the following section for more information.</p> </note>|

> Example responses

> 200 Response

```json
{
  "LifecyclePolicies": [
    {
      "TransitionToIA": "AFTER_30_DAYS"
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

<h3 id="putlifecycleconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LifecycleConfigurationDescription](#schemalifecycleconfigurationdescription)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|IncorrectFileSystemLifeCycleState|[IncorrectFileSystemLifeCycleState](#schemaincorrectfilesystemlifecyclestate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMountTargetSecurityGroups

<a id="opIdDescribeMountTargetSecurityGroups"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/mount-targets/stringstrings/security-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/mount-targets/{MountTargetId}/security-groups`

<p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>

<h3 id="describemounttargetsecuritygroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MountTargetId|path|string|true|The ID of the mount target whose security groups you want to retrieve.|
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
  "SecurityGroups": [
    "sg-4567abcd"
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

<h3 id="describemounttargetsecuritygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMountTargetSecurityGroupsResponse](#schemadescribemounttargetsecuritygroupsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|MountTargetNotFound|[MountTargetNotFound](#schemamounttargetnotfound)|
|483|483|IncorrectMountTargetState|[IncorrectMountTargetState](#schemaincorrectmounttargetstate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyMountTargetSecurityGroups

<a id="opIdModifyMountTargetSecurityGroups"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/mount-targets/stringstrings/security-groups \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SecurityGroups": [
      "stringstrin"
    ]
  }'
```

`PUT /2015-02-01/mount-targets/{MountTargetId}/security-groups`

<p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>

> Body parameter

```json
{
  "SecurityGroups": [
    "stringstrin"
  ]
}
```

<h3 id="modifymounttargetsecuritygroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MountTargetId|path|string|true|The ID of the mount target whose security groups you want to modify.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SecurityGroups|body|[[SecurityGroup](#schemasecuritygroup)]|false|An array of up to five VPC security group IDs.|

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

<h3 id="modifymounttargetsecuritygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|MountTargetNotFound|[MountTargetNotFound](#schemamounttargetnotfound)|
|483|483|IncorrectMountTargetState|[IncorrectMountTargetState](#schemaincorrectmounttargetstate)|
|484|484|SecurityGroupLimitExceeded|[SecurityGroupLimitExceeded](#schemasecuritygrouplimitexceeded)|
|485|485|SecurityGroupNotFound|[SecurityGroupNotFound](#schemasecuritygroupnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationConfigurations

<a id="opIdDescribeReplicationConfigurations"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/file-systems/replication-configurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/file-systems/replication-configurations`

Retrieves the replication configuration for a specific file system. If a file system is not specified, all of the replication configurations for the Amazon Web Services account in an Amazon Web Services Region are retrieved.

<h3 id="describereplicationconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileSystemId|query|string|false|You can retrieve the replication configuration for a specific file system by providing its file system ID.|
|NextToken|query|string|false| <code>NextToken</code> is present if the response is paginated. You can use <code>NextToken</code> in a subsequent request to fetch the next page of output.|
|MaxResults|query|integer|false|(Optional) To limit the number of objects returned in a response, you can specify the <code>MaxItems</code> parameter. The default value is 100. |
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
  "Replications": {},
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describereplicationconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationConfigurationsResponse](#schemadescribereplicationconfigurationsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ReplicationNotFound|[ReplicationNotFound](#schemareplicationnotfound)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTags

<a id="opIdDescribeTags"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/tags/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/tags/{FileSystemId}/`

<aside class="warning">
This operation is deprecated
</aside>

<note> <p>DEPRECATED - The <code>DescribeTags</code> action is deprecated and not maintained. To view tags associated with EFS resources, use the <code>ListTagsForResource</code> API action.</p> </note> <p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p>

<h3 id="describetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|integer|false|(Optional) The maximum number of file system tags to return in the response. Currently, this number is automatically set to 100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.|
|Marker|query|string|false|(Optional) An opaque pagination token returned from a previous <code>DescribeTags</code> operation (String). If present, it specifies to continue the list from where the previous call left off.|
|FileSystemId|path|string|true|The ID of the file system whose tag set you want to retrieve.|
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

<h3 id="describetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsResponse](#schemadescribetagsresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/resource-tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-02-01/resource-tags/{ResourceId}`

<p>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceId|path|string|true|Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint.|
|MaxResults|query|integer|false|(Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.|
|NextToken|query|string|false|(Optional) You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.|
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
  "Tags": {},
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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|AccessPointNotFound|[AccessPointNotFound](#schemaaccesspointnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/resource-tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /2015-02-01/resource-tags/{ResourceId}`

<p>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:TagResource</code> action.</p>

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceId|path|string|true|The ID specifying the EFS resource that you want to create a tag for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[Tag](#schematag)]|true|An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair.|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|AccessPointNotFound|[AccessPointNotFound](#schemaaccesspointnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/resource-tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-02-01/resource-tags/{ResourceId}#tagKeys`

<p>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:UntagResource</code> action.</p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceId|path|string|true|Specifies the EFS resource that you want to remove tags from.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The keys of the key-value tag pairs that you want to remove from the specified EFS resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|BadRequest|[BadRequest](#schemabadrequest)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|FileSystemNotFound|[FileSystemNotFound](#schemafilesystemnotfound)|
|483|483|AccessPointNotFound|[AccessPointNotFound](#schemaaccesspointnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AccessPointDescription">AccessPointDescription</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointdescription"></a>
<a id="schema_AccessPointDescription"></a>
<a id="tocSaccesspointdescription"></a>
<a id="tocsaccesspointdescription"></a>

```json
{
  "ClientToken": {},
  "Name": {},
  "Tags": {},
  "AccessPointId": {},
  "AccessPointArn": {},
  "FileSystemId": {},
  "PosixUser": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "RootDirectory": {
    "Path": {},
    "CreationInfo": {
      "OwnerUid": {},
      "OwnerGid": {},
      "Permissions": {}
    }
  },
  "OwnerId": {},
  "LifeCycleState": {}
}
```

Provides a description of an EFS file system access point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|Name|object|false|none|none|
|Tags|object|false|none|none|
|AccessPointId|object|false|none|none|
|AccessPointArn|object|false|none|none|
|FileSystemId|object|false|none|none|
|PosixUser|object|false|none|none|
|RootDirectory|object|false|none|none|
|OwnerId|object|false|none|none|
|LifeCycleState|object|false|none|none|

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

A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_Uid">Uid</h2>
<!-- backwards compatibility -->
<a id="schemauid"></a>
<a id="schema_Uid"></a>
<a id="tocSuid"></a>
<a id="tocsuid"></a>

```json
0
```

<h2 id="tocS_Gid">Gid</h2>
<!-- backwards compatibility -->
<a id="schemagid"></a>
<a id="schema_Gid"></a>
<a id="tocSgid"></a>
<a id="tocsgid"></a>

```json
0
```

<h2 id="tocS_SecondaryGids">SecondaryGids</h2>
<!-- backwards compatibility -->
<a id="schemasecondarygids"></a>
<a id="schema_SecondaryGids"></a>
<a id="tocSsecondarygids"></a>
<a id="tocssecondarygids"></a>

```json
[
  0
]
```

<h2 id="tocS_Path">Path</h2>
<!-- backwards compatibility -->
<a id="schemapath"></a>
<a id="schema_Path"></a>
<a id="tocSpath"></a>
<a id="tocspath"></a>

```json
"string"
```

<h2 id="tocS_CreationInfo">CreationInfo</h2>
<!-- backwards compatibility -->
<a id="schemacreationinfo"></a>
<a id="schema_CreationInfo"></a>
<a id="tocScreationinfo"></a>
<a id="tocscreationinfo"></a>

```json
{
  "OwnerUid": {},
  "OwnerGid": {},
  "Permissions": {}
}
```

<p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <p>Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.</p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerUid|object|true|none|none|
|OwnerGid|object|true|none|none|
|Permissions|object|true|none|none|

<h2 id="tocS_BadRequest">BadRequest</h2>
<!-- backwards compatibility -->
<a id="schemabadrequest"></a>
<a id="schema_BadRequest"></a>
<a id="tocSbadrequest"></a>
<a id="tocsbadrequest"></a>

```json
null
```

<h2 id="tocS_AccessPointAlreadyExists">AccessPointAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointalreadyexists"></a>
<a id="schema_AccessPointAlreadyExists"></a>
<a id="tocSaccesspointalreadyexists"></a>
<a id="tocsaccesspointalreadyexists"></a>

```json
null
```

<h2 id="tocS_IncorrectFileSystemLifeCycleState">IncorrectFileSystemLifeCycleState</h2>
<!-- backwards compatibility -->
<a id="schemaincorrectfilesystemlifecyclestate"></a>
<a id="schema_IncorrectFileSystemLifeCycleState"></a>
<a id="tocSincorrectfilesystemlifecyclestate"></a>
<a id="tocsincorrectfilesystemlifecyclestate"></a>

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

<h2 id="tocS_FileSystemNotFound">FileSystemNotFound</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemnotfound"></a>
<a id="schema_FileSystemNotFound"></a>
<a id="tocSfilesystemnotfound"></a>
<a id="tocsfilesystemnotfound"></a>

```json
null
```

<h2 id="tocS_AccessPointLimitExceeded">AccessPointLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointlimitexceeded"></a>
<a id="schema_AccessPointLimitExceeded"></a>
<a id="tocSaccesspointlimitexceeded"></a>
<a id="tocsaccesspointlimitexceeded"></a>

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

<h2 id="tocS_FileSystemDescription">FileSystemDescription</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemdescription"></a>
<a id="schema_FileSystemDescription"></a>
<a id="tocSfilesystemdescription"></a>
<a id="tocsfilesystemdescription"></a>

```json
{
  "CreationTime": "1481841524.0",
  "CreationToken": "tokenstring",
  "Encrypted": true,
  "FileSystemId": "fs-01234567",
  "LifeCycleState": "creating",
  "NumberOfMountTargets": 0,
  "OwnerId": 12345678912,
  "PerformanceMode": "generalPurpose",
  "SizeInBytes": {
    "Value": 0
  },
  "Tags": [
    {
      "Key": "Name",
      "Value": "MyFileSystem"
    }
  ]
}
```

A description of the file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerId|object|true|none|none|
|CreationToken|object|true|none|none|
|FileSystemId|object|true|none|none|
|FileSystemArn|object|false|none|none|
|CreationTime|object|true|none|none|
|LifeCycleState|object|true|none|none|
|Name|object|false|none|none|
|NumberOfMountTargets|object|true|none|none|
|SizeInBytes|object|true|none|none|
|PerformanceMode|object|true|none|none|
|Encrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ThroughputMode|object|false|none|none|
|ProvisionedThroughputInMibps|object|false|none|none|
|AvailabilityZoneName|object|false|none|none|
|AvailabilityZoneId|object|false|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_FileSystemAlreadyExists">FileSystemAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemalreadyexists"></a>
<a id="schema_FileSystemAlreadyExists"></a>
<a id="tocSfilesystemalreadyexists"></a>
<a id="tocsfilesystemalreadyexists"></a>

```json
null
```

<h2 id="tocS_FileSystemLimitExceeded">FileSystemLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemlimitexceeded"></a>
<a id="schema_FileSystemLimitExceeded"></a>
<a id="tocSfilesystemlimitexceeded"></a>
<a id="tocsfilesystemlimitexceeded"></a>

```json
null
```

<h2 id="tocS_InsufficientThroughputCapacity">InsufficientThroughputCapacity</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientthroughputcapacity"></a>
<a id="schema_InsufficientThroughputCapacity"></a>
<a id="tocSinsufficientthroughputcapacity"></a>
<a id="tocsinsufficientthroughputcapacity"></a>

```json
null
```

<h2 id="tocS_ThroughputLimitExceeded">ThroughputLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemathroughputlimitexceeded"></a>
<a id="schema_ThroughputLimitExceeded"></a>
<a id="tocSthroughputlimitexceeded"></a>
<a id="tocsthroughputlimitexceeded"></a>

```json
null
```

<h2 id="tocS_UnsupportedAvailabilityZone">UnsupportedAvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedavailabilityzone"></a>
<a id="schema_UnsupportedAvailabilityZone"></a>
<a id="tocSunsupportedavailabilityzone"></a>
<a id="tocsunsupportedavailabilityzone"></a>

```json
null
```

<h2 id="tocS_MountTargetDescription">MountTargetDescription</h2>
<!-- backwards compatibility -->
<a id="schemamounttargetdescription"></a>
<a id="schema_MountTargetDescription"></a>
<a id="tocSmounttargetdescription"></a>
<a id="tocsmounttargetdescription"></a>

```json
{
  "FileSystemId": "fs-01234567",
  "IpAddress": "192.0.0.2",
  "LifeCycleState": "creating",
  "MountTargetId": "fsmt-12340abc",
  "NetworkInterfaceId": "eni-cedf6789",
  "OwnerId": 12345678912,
  "SubnetId": "subnet-1234abcd"
}
```

Provides a description of a mount target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerId|object|false|none|none|
|MountTargetId|object|true|none|none|
|FileSystemId|object|true|none|none|
|SubnetId|object|true|none|none|
|LifeCycleState|object|true|none|none|
|IpAddress|object|false|none|none|
|NetworkInterfaceId|object|false|none|none|
|AvailabilityZoneId|object|false|none|none|
|AvailabilityZoneName|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_SecurityGroup">SecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroup"></a>
<a id="schema_SecurityGroup"></a>
<a id="tocSsecuritygroup"></a>
<a id="tocssecuritygroup"></a>

```json
"stringstrin"
```

<h2 id="tocS_MountTargetConflict">MountTargetConflict</h2>
<!-- backwards compatibility -->
<a id="schemamounttargetconflict"></a>
<a id="schema_MountTargetConflict"></a>
<a id="tocSmounttargetconflict"></a>
<a id="tocsmounttargetconflict"></a>

```json
null
```

<h2 id="tocS_SubnetNotFound">SubnetNotFound</h2>
<!-- backwards compatibility -->
<a id="schemasubnetnotfound"></a>
<a id="schema_SubnetNotFound"></a>
<a id="tocSsubnetnotfound"></a>
<a id="tocssubnetnotfound"></a>

```json
null
```

<h2 id="tocS_NoFreeAddressesInSubnet">NoFreeAddressesInSubnet</h2>
<!-- backwards compatibility -->
<a id="schemanofreeaddressesinsubnet"></a>
<a id="schema_NoFreeAddressesInSubnet"></a>
<a id="tocSnofreeaddressesinsubnet"></a>
<a id="tocsnofreeaddressesinsubnet"></a>

```json
null
```

<h2 id="tocS_IpAddressInUse">IpAddressInUse</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressinuse"></a>
<a id="schema_IpAddressInUse"></a>
<a id="tocSipaddressinuse"></a>
<a id="tocsipaddressinuse"></a>

```json
null
```

<h2 id="tocS_NetworkInterfaceLimitExceeded">NetworkInterfaceLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfacelimitexceeded"></a>
<a id="schema_NetworkInterfaceLimitExceeded"></a>
<a id="tocSnetworkinterfacelimitexceeded"></a>
<a id="tocsnetworkinterfacelimitexceeded"></a>

```json
null
```

<h2 id="tocS_SecurityGroupLimitExceeded">SecurityGroupLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygrouplimitexceeded"></a>
<a id="schema_SecurityGroupLimitExceeded"></a>
<a id="tocSsecuritygrouplimitexceeded"></a>
<a id="tocssecuritygrouplimitexceeded"></a>

```json
null
```

<h2 id="tocS_SecurityGroupNotFound">SecurityGroupNotFound</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupnotfound"></a>
<a id="schema_SecurityGroupNotFound"></a>
<a id="tocSsecuritygroupnotfound"></a>
<a id="tocssecuritygroupnotfound"></a>

```json
null
```

<h2 id="tocS_AvailabilityZonesMismatch">AvailabilityZonesMismatch</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonesmismatch"></a>
<a id="schema_AvailabilityZonesMismatch"></a>
<a id="tocSavailabilityzonesmismatch"></a>
<a id="tocsavailabilityzonesmismatch"></a>

```json
null
```

<h2 id="tocS_ReplicationConfigurationDescription">ReplicationConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationdescription"></a>
<a id="schema_ReplicationConfigurationDescription"></a>
<a id="tocSreplicationconfigurationdescription"></a>
<a id="tocsreplicationconfigurationdescription"></a>

```json
{
  "SourceFileSystemId": {},
  "SourceFileSystemRegion": {},
  "SourceFileSystemArn": {},
  "OriginalSourceFileSystemArn": {},
  "CreationTime": {},
  "Destinations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceFileSystemId|object|true|none|none|
|SourceFileSystemRegion|object|true|none|none|
|SourceFileSystemArn|object|true|none|none|
|OriginalSourceFileSystemArn|object|true|none|none|
|CreationTime|object|true|none|none|
|Destinations|object|true|none|none|

<h2 id="tocS_DestinationToCreate">DestinationToCreate</h2>
<!-- backwards compatibility -->
<a id="schemadestinationtocreate"></a>
<a id="schema_DestinationToCreate"></a>
<a id="tocSdestinationtocreate"></a>
<a id="tocsdestinationtocreate"></a>

```json
{
  "Region": {},
  "AvailabilityZoneName": {},
  "KmsKeyId": {}
}
```

Describes the destination file system to create in the replication configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|false|none|none|
|AvailabilityZoneName|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ReplicationNotFound">ReplicationNotFound</h2>
<!-- backwards compatibility -->
<a id="schemareplicationnotfound"></a>
<a id="schema_ReplicationNotFound"></a>
<a id="tocSreplicationnotfound"></a>
<a id="tocsreplicationnotfound"></a>

```json
null
```

<h2 id="tocS_AccessPointNotFound">AccessPointNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointnotfound"></a>
<a id="schema_AccessPointNotFound"></a>
<a id="tocSaccesspointnotfound"></a>
<a id="tocsaccesspointnotfound"></a>

```json
null
```

<h2 id="tocS_FileSystemInUse">FileSystemInUse</h2>
<!-- backwards compatibility -->
<a id="schemafilesysteminuse"></a>
<a id="schema_FileSystemInUse"></a>
<a id="tocSfilesysteminuse"></a>
<a id="tocsfilesysteminuse"></a>

```json
null
```

<h2 id="tocS_DependencyTimeout">DependencyTimeout</h2>
<!-- backwards compatibility -->
<a id="schemadependencytimeout"></a>
<a id="schema_DependencyTimeout"></a>
<a id="tocSdependencytimeout"></a>
<a id="tocsdependencytimeout"></a>

```json
null
```

<h2 id="tocS_MountTargetNotFound">MountTargetNotFound</h2>
<!-- backwards compatibility -->
<a id="schemamounttargetnotfound"></a>
<a id="schema_MountTargetNotFound"></a>
<a id="tocSmounttargetnotfound"></a>
<a id="tocsmounttargetnotfound"></a>

```json
null
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

<h2 id="tocS_DescribeAccessPointsResponse">DescribeAccessPointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesspointsresponse"></a>
<a id="schema_DescribeAccessPointsResponse"></a>
<a id="tocSdescribeaccesspointsresponse"></a>
<a id="tocsdescribeaccesspointsresponse"></a>

```json
{
  "AccessPoints": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessPoints|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAccountPreferencesResponse">DescribeAccountPreferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountpreferencesresponse"></a>
<a id="schema_DescribeAccountPreferencesResponse"></a>
<a id="tocSdescribeaccountpreferencesresponse"></a>
<a id="tocsdescribeaccountpreferencesresponse"></a>

```json
{
  "ResourceIdPreference": {
    "ResourceIdType": {},
    "Resources": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdPreference|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BackupPolicyDescription">BackupPolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemabackuppolicydescription"></a>
<a id="schema_BackupPolicyDescription"></a>
<a id="tocSbackuppolicydescription"></a>
<a id="tocsbackuppolicydescription"></a>

```json
{
  "BackupPolicy": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPolicy|object|false|none|none|

<h2 id="tocS_PolicyNotFound">PolicyNotFound</h2>
<!-- backwards compatibility -->
<a id="schemapolicynotfound"></a>
<a id="schema_PolicyNotFound"></a>
<a id="tocSpolicynotfound"></a>
<a id="tocspolicynotfound"></a>

```json
null
```

<h2 id="tocS_FileSystemPolicyDescription">FileSystemPolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemafilesystempolicydescription"></a>
<a id="schema_FileSystemPolicyDescription"></a>
<a id="tocSfilesystempolicydescription"></a>
<a id="tocsfilesystempolicydescription"></a>

```json
{
  "FileSystemId": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|false|none|none|
|Policy|object|false|none|none|

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
      "CreationToken": "tokenstring",
      "FileSystemId": "fs-01234567",
      "LifeCycleState": "available",
      "Name": "MyFileSystem",
      "NumberOfMountTargets": 1,
      "OwnerId": 12345678912,
      "PerformanceMode": "generalPurpose",
      "SizeInBytes": {
        "Value": 6144
      },
      "Tags": [
        {
          "Key": "Name",
          "Value": "MyFileSystem"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|FileSystems|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_LifecycleConfigurationDescription">LifecycleConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleconfigurationdescription"></a>
<a id="schema_LifecycleConfigurationDescription"></a>
<a id="tocSlifecycleconfigurationdescription"></a>
<a id="tocslifecycleconfigurationdescription"></a>

```json
{
  "LifecyclePolicies": [
    {
      "TransitionToIA": "AFTER_30_DAYS"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecyclePolicies|object|false|none|none|

<h2 id="tocS_DescribeMountTargetSecurityGroupsResponse">DescribeMountTargetSecurityGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemounttargetsecuritygroupsresponse"></a>
<a id="schema_DescribeMountTargetSecurityGroupsResponse"></a>
<a id="tocSdescribemounttargetsecuritygroupsresponse"></a>
<a id="tocsdescribemounttargetsecuritygroupsresponse"></a>

```json
{
  "SecurityGroups": [
    "sg-4567abcd"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroups|object|true|none|none|

<h2 id="tocS_IncorrectMountTargetState">IncorrectMountTargetState</h2>
<!-- backwards compatibility -->
<a id="schemaincorrectmounttargetstate"></a>
<a id="schema_IncorrectMountTargetState"></a>
<a id="tocSincorrectmounttargetstate"></a>
<a id="tocsincorrectmounttargetstate"></a>

```json
null
```

<h2 id="tocS_DescribeMountTargetsResponse">DescribeMountTargetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemounttargetsresponse"></a>
<a id="schema_DescribeMountTargetsResponse"></a>
<a id="tocSdescribemounttargetsresponse"></a>
<a id="tocsdescribemounttargetsresponse"></a>

```json
{
  "MountTargets": [
    {
      "FileSystemId": "fs-01234567",
      "IpAddress": "192.0.0.2",
      "LifeCycleState": "available",
      "MountTargetId": "fsmt-12340abc",
      "NetworkInterfaceId": "eni-cedf6789",
      "OwnerId": 12345678912,
      "SubnetId": "subnet-1234abcd"
    }
  ]
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|MountTargets|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_DescribeReplicationConfigurationsResponse">DescribeReplicationConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationconfigurationsresponse"></a>
<a id="schema_DescribeReplicationConfigurationsResponse"></a>
<a id="tocSdescribereplicationconfigurationsresponse"></a>
<a id="tocsdescribereplicationconfigurationsresponse"></a>

```json
{
  "Replications": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Replications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeTagsResponse">DescribeTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsresponse"></a>
<a id="schema_DescribeTagsResponse"></a>
<a id="tocSdescribetagsresponse"></a>
<a id="tocsdescribetagsresponse"></a>

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

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Tags|object|true|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutAccountPreferencesResponse">PutAccountPreferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountpreferencesresponse"></a>
<a id="schema_PutAccountPreferencesResponse"></a>
<a id="tocSputaccountpreferencesresponse"></a>
<a id="tocsputaccountpreferencesresponse"></a>

```json
{
  "ResourceIdPreference": {
    "ResourceIdType": {},
    "Resources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdPreference|[ResourceIdPreference](#schemaresourceidpreference)|false|none|Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_InvalidPolicyException">InvalidPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicyexception"></a>
<a id="schema_InvalidPolicyException"></a>
<a id="tocSinvalidpolicyexception"></a>
<a id="tocsinvalidpolicyexception"></a>

```json
null
```

<h2 id="tocS_LifecyclePolicy">LifecyclePolicy</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicy"></a>
<a id="schema_LifecyclePolicy"></a>
<a id="tocSlifecyclepolicy"></a>
<a id="tocslifecyclepolicy"></a>

```json
{
  "TransitionToIA": {},
  "TransitionToPrimaryStorageClass": {}
}
```

<p>Describes a policy used by EFS lifecycle management and EFS Intelligent-Tiering that specifies when to transition files into and out of the file system's Infrequent Access (IA) storage class. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Intelligent‐Tiering and EFS Lifecycle Management</a>.</p> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. For more information, see the request examples in <a>PutLifecycleConfiguration</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitionToIA|object|false|none|none|
|TransitionToPrimaryStorageClass|object|false|none|none|

<h2 id="tocS_TooManyRequests">TooManyRequests</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequests"></a>
<a id="schema_TooManyRequests"></a>
<a id="tocStoomanyrequests"></a>
<a id="tocstoomanyrequests"></a>

```json
null
```

<h2 id="tocS_AccessPointArn">AccessPointArn</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointarn"></a>
<a id="schema_AccessPointArn"></a>
<a id="tocSaccesspointarn"></a>
<a id="tocsaccesspointarn"></a>

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

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

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
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_AccessPointId">AccessPointId</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointid"></a>
<a id="schema_AccessPointId"></a>
<a id="tocSaccesspointid"></a>
<a id="tocsaccesspointid"></a>

```json
"string"
```

<h2 id="tocS_FileSystemId">FileSystemId</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemid"></a>
<a id="schema_FileSystemId"></a>
<a id="tocSfilesystemid"></a>
<a id="tocsfilesystemid"></a>

```json
"string"
```

<h2 id="tocS_PosixUser">PosixUser</h2>
<!-- backwards compatibility -->
<a id="schemaposixuser"></a>
<a id="schema_PosixUser"></a>
<a id="tocSposixuser"></a>
<a id="tocsposixuser"></a>

```json
{
  "Uid": {},
  "Gid": {},
  "SecondaryGids": {}
}
```

The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uid|object|true|none|none|
|Gid|object|true|none|none|
|SecondaryGids|object|false|none|none|

<h2 id="tocS_RootDirectory">RootDirectory</h2>
<!-- backwards compatibility -->
<a id="schemarootdirectory"></a>
<a id="schema_RootDirectory"></a>
<a id="tocSrootdirectory"></a>
<a id="tocsrootdirectory"></a>

```json
{
  "Path": {},
  "CreationInfo": {
    "OwnerUid": {},
    "OwnerGid": {},
    "Permissions": {}
  }
}
```

Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|false|none|none|
|CreationInfo|object|false|none|none|

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"string"
```

<h2 id="tocS_LifeCycleState">LifeCycleState</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclestate"></a>
<a id="schema_LifeCycleState"></a>
<a id="tocSlifecyclestate"></a>
<a id="tocslifecyclestate"></a>

```json
"creating"
```

<h2 id="tocS_AccessPointDescriptions">AccessPointDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointdescriptions"></a>
<a id="schema_AccessPointDescriptions"></a>
<a id="tocSaccesspointdescriptions"></a>
<a id="tocsaccesspointdescriptions"></a>

```json
[
  {
    "ClientToken": {},
    "Name": {},
    "Tags": {},
    "AccessPointId": {},
    "AccessPointArn": {},
    "FileSystemId": {},
    "PosixUser": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "RootDirectory": {
      "Path": {},
      "CreationInfo": {
        "OwnerUid": {},
        "OwnerGid": {},
        "Permissions": {}
      }
    },
    "OwnerId": {},
    "LifeCycleState": {}
  }
]
```

<h2 id="tocS_AvailabilityZoneId">AvailabilityZoneId</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzoneid"></a>
<a id="schema_AvailabilityZoneId"></a>
<a id="tocSavailabilityzoneid"></a>
<a id="tocsavailabilityzoneid"></a>

```json
"string"
```

<h2 id="tocS_AvailabilityZoneName">AvailabilityZoneName</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonename"></a>
<a id="schema_AvailabilityZoneName"></a>
<a id="tocSavailabilityzonename"></a>
<a id="tocsavailabilityzonename"></a>

```json
"string"
```

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
true
```

<h2 id="tocS_BackupPolicy">BackupPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabackuppolicy"></a>
<a id="schema_BackupPolicy"></a>
<a id="tocSbackuppolicy"></a>
<a id="tocsbackuppolicy"></a>

```json
{
  "Status": {}
}
```

The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_BypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</h2>
<!-- backwards compatibility -->
<a id="schemabypasspolicylockoutsafetycheck"></a>
<a id="schema_BypassPolicyLockoutSafetyCheck"></a>
<a id="tocSbypasspolicylockoutsafetycheck"></a>
<a id="tocsbypasspolicylockoutsafetycheck"></a>

```json
true
```

<h2 id="tocS_CreateAccessPointRequest">CreateAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspointrequest"></a>
<a id="schema_CreateAccessPointRequest"></a>
<a id="tocScreateaccesspointrequest"></a>
<a id="tocscreateaccesspointrequest"></a>

```json
{
  "ClientToken": {},
  "Tags": {},
  "FileSystemId": {},
  "PosixUser": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "RootDirectory": {
    "Path": {},
    "CreationInfo": {
      "OwnerUid": {},
      "OwnerGid": {},
      "Permissions": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|Tags|object|false|none|none|
|FileSystemId|object|true|none|none|
|PosixUser|object|false|none|none|
|RootDirectory|object|false|none|none|

<h2 id="tocS_CreationToken">CreationToken</h2>
<!-- backwards compatibility -->
<a id="schemacreationtoken"></a>
<a id="schema_CreationToken"></a>
<a id="tocScreationtoken"></a>
<a id="tocscreationtoken"></a>

```json
"string"
```

<h2 id="tocS_PerformanceMode">PerformanceMode</h2>
<!-- backwards compatibility -->
<a id="schemaperformancemode"></a>
<a id="schema_PerformanceMode"></a>
<a id="tocSperformancemode"></a>
<a id="tocsperformancemode"></a>

```json
"generalPurpose"
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

<h2 id="tocS_ThroughputMode">ThroughputMode</h2>
<!-- backwards compatibility -->
<a id="schemathroughputmode"></a>
<a id="schema_ThroughputMode"></a>
<a id="tocSthroughputmode"></a>
<a id="tocsthroughputmode"></a>

```json
"bursting"
```

<h2 id="tocS_ProvisionedThroughputInMibps">ProvisionedThroughputInMibps</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughputinmibps"></a>
<a id="schema_ProvisionedThroughputInMibps"></a>
<a id="tocSprovisionedthroughputinmibps"></a>
<a id="tocsprovisionedthroughputinmibps"></a>

```json
1
```

<h2 id="tocS_CreateFileSystemRequest">CreateFileSystemRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilesystemrequest"></a>
<a id="schema_CreateFileSystemRequest"></a>
<a id="tocScreatefilesystemrequest"></a>
<a id="tocscreatefilesystemrequest"></a>

```json
{
  "CreationToken": {},
  "PerformanceMode": {},
  "Encrypted": {},
  "KmsKeyId": {},
  "ThroughputMode": {},
  "ProvisionedThroughputInMibps": {},
  "AvailabilityZoneName": {},
  "Backup": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationToken|object|true|none|none|
|PerformanceMode|object|false|none|none|
|Encrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ThroughputMode|object|false|none|none|
|ProvisionedThroughputInMibps|object|false|none|none|
|AvailabilityZoneName|object|false|none|none|
|Backup|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"stringstringstr"
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

<h2 id="tocS_SecurityGroups">SecurityGroups</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroups"></a>
<a id="schema_SecurityGroups"></a>
<a id="tocSsecuritygroups"></a>
<a id="tocssecuritygroups"></a>

```json
[
  "stringstrin"
]
```

<h2 id="tocS_CreateMountTargetRequest">CreateMountTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemounttargetrequest"></a>
<a id="schema_CreateMountTargetRequest"></a>
<a id="tocScreatemounttargetrequest"></a>
<a id="tocscreatemounttargetrequest"></a>

```json
{
  "FileSystemId": {},
  "SubnetId": {},
  "IpAddress": {},
  "SecurityGroups": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|true|none|none|
|SubnetId|object|true|none|none|
|IpAddress|object|false|none|none|
|SecurityGroups|object|false|none|none|

<h2 id="tocS_DestinationsToCreate">DestinationsToCreate</h2>
<!-- backwards compatibility -->
<a id="schemadestinationstocreate"></a>
<a id="schema_DestinationsToCreate"></a>
<a id="tocSdestinationstocreate"></a>
<a id="tocsdestinationstocreate"></a>

```json
[
  {
    "Region": {},
    "AvailabilityZoneName": {},
    "KmsKeyId": {}
  }
]
```

<h2 id="tocS_CreateReplicationConfigurationRequest">CreateReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationconfigurationrequest"></a>
<a id="schema_CreateReplicationConfigurationRequest"></a>
<a id="tocScreatereplicationconfigurationrequest"></a>
<a id="tocscreatereplicationconfigurationrequest"></a>

```json
{
  "Destinations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destinations|object|true|none|none|

<h2 id="tocS_CreateTagsRequest">CreateTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagsrequest"></a>
<a id="schema_CreateTagsRequest"></a>
<a id="tocScreatetagsrequest"></a>
<a id="tocscreatetagsrequest"></a>

```json
{
  "Tags": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_OwnerUid">OwnerUid</h2>
<!-- backwards compatibility -->
<a id="schemaowneruid"></a>
<a id="schema_OwnerUid"></a>
<a id="tocSowneruid"></a>
<a id="tocsowneruid"></a>

```json
0
```

<h2 id="tocS_OwnerGid">OwnerGid</h2>
<!-- backwards compatibility -->
<a id="schemaownergid"></a>
<a id="schema_OwnerGid"></a>
<a id="tocSownergid"></a>
<a id="tocsownergid"></a>

```json
0
```

<h2 id="tocS_Permissions">Permissions</h2>
<!-- backwards compatibility -->
<a id="schemapermissions"></a>
<a id="schema_Permissions"></a>
<a id="tocSpermissions"></a>
<a id="tocspermissions"></a>

```json
"stri"
```

<h2 id="tocS_DeleteAccessPointRequest">DeleteAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspointrequest"></a>
<a id="schema_DeleteAccessPointRequest"></a>
<a id="tocSdeleteaccesspointrequest"></a>
<a id="tocsdeleteaccesspointrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFileSystemPolicyRequest">DeleteFileSystemPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystempolicyrequest"></a>
<a id="schema_DeleteFileSystemPolicyRequest"></a>
<a id="tocSdeletefilesystempolicyrequest"></a>
<a id="tocsdeletefilesystempolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFileSystemRequest">DeleteFileSystemRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilesystemrequest"></a>
<a id="schema_DeleteFileSystemRequest"></a>
<a id="tocSdeletefilesystemrequest"></a>
<a id="tocsdeletefilesystemrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_MountTargetId">MountTargetId</h2>
<!-- backwards compatibility -->
<a id="schemamounttargetid"></a>
<a id="schema_MountTargetId"></a>
<a id="tocSmounttargetid"></a>
<a id="tocsmounttargetid"></a>

```json
"stringstrings"
```

<h2 id="tocS_DeleteMountTargetRequest">DeleteMountTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemounttargetrequest"></a>
<a id="schema_DeleteMountTargetRequest"></a>
<a id="tocSdeletemounttargetrequest"></a>
<a id="tocsdeletemounttargetrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_DeleteReplicationConfigurationRequest">DeleteReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationconfigurationrequest"></a>
<a id="schema_DeleteReplicationConfigurationRequest"></a>
<a id="tocSdeletereplicationconfigurationrequest"></a>
<a id="tocsdeletereplicationconfigurationrequest"></a>

```json
{}
```

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

<h2 id="tocS_DeleteTagsRequest">DeleteTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsrequest"></a>
<a id="schema_DeleteTagsRequest"></a>
<a id="tocSdeletetagsrequest"></a>
<a id="tocsdeletetagsrequest"></a>

```json
{
  "TagKeys": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKeys|object|true|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

Max results used for pagination.

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

Token used for pagination.

<h2 id="tocS_DescribeAccessPointsRequest">DescribeAccessPointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesspointsrequest"></a>
<a id="schema_DescribeAccessPointsRequest"></a>
<a id="tocSdescribeaccesspointsrequest"></a>
<a id="tocsdescribeaccesspointsrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAccountPreferencesRequest">DescribeAccountPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountpreferencesrequest"></a>
<a id="schema_DescribeAccountPreferencesRequest"></a>
<a id="tocSdescribeaccountpreferencesrequest"></a>
<a id="tocsdescribeaccountpreferencesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ResourceIdPreference">ResourceIdPreference</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidpreference"></a>
<a id="schema_ResourceIdPreference"></a>
<a id="tocSresourceidpreference"></a>
<a id="tocsresourceidpreference"></a>

```json
{
  "ResourceIdType": {},
  "Resources": {}
}
```

Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdType|object|false|none|none|
|Resources|object|false|none|none|

<h2 id="tocS_DescribeBackupPolicyRequest">DescribeBackupPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackuppolicyrequest"></a>
<a id="schema_DescribeBackupPolicyRequest"></a>
<a id="tocSdescribebackuppolicyrequest"></a>
<a id="tocsdescribebackuppolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeFileSystemPolicyRequest">DescribeFileSystemPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystempolicyrequest"></a>
<a id="schema_DescribeFileSystemPolicyRequest"></a>
<a id="tocSdescribefilesystempolicyrequest"></a>
<a id="tocsdescribefilesystempolicyrequest"></a>

```json
{}
```

<h2 id="tocS_MaxItems">MaxItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxitems"></a>
<a id="schema_MaxItems"></a>
<a id="tocSmaxitems"></a>
<a id="tocsmaxitems"></a>

```json
1
```

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
"string"
```

<h2 id="tocS_DescribeFileSystemsRequest">DescribeFileSystemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilesystemsrequest"></a>
<a id="schema_DescribeFileSystemsRequest"></a>
<a id="tocSdescribefilesystemsrequest"></a>
<a id="tocsdescribefilesystemsrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_FileSystemDescriptions">FileSystemDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemdescriptions"></a>
<a id="schema_FileSystemDescriptions"></a>
<a id="tocSfilesystemdescriptions"></a>
<a id="tocsfilesystemdescriptions"></a>

```json
[
  {
    "CreationTime": "1481841524.0",
    "CreationToken": "tokenstring",
    "Encrypted": true,
    "FileSystemId": "fs-01234567",
    "LifeCycleState": "creating",
    "NumberOfMountTargets": 0,
    "OwnerId": 12345678912,
    "PerformanceMode": "generalPurpose",
    "SizeInBytes": {
      "Value": 0
    },
    "Tags": [
      {
        "Key": "Name",
        "Value": "MyFileSystem"
      }
    ]
  }
]
```

<h2 id="tocS_DescribeLifecycleConfigurationRequest">DescribeLifecycleConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelifecycleconfigurationrequest"></a>
<a id="schema_DescribeLifecycleConfigurationRequest"></a>
<a id="tocSdescribelifecycleconfigurationrequest"></a>
<a id="tocsdescribelifecycleconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeMountTargetSecurityGroupsRequest">DescribeMountTargetSecurityGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemounttargetsecuritygroupsrequest"></a>
<a id="schema_DescribeMountTargetSecurityGroupsRequest"></a>
<a id="tocSdescribemounttargetsecuritygroupsrequest"></a>
<a id="tocsdescribemounttargetsecuritygroupsrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_DescribeMountTargetsRequest">DescribeMountTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemounttargetsrequest"></a>
<a id="schema_DescribeMountTargetsRequest"></a>
<a id="tocSdescribemounttargetsrequest"></a>
<a id="tocsdescribemounttargetsrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_MountTargetDescriptions">MountTargetDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemamounttargetdescriptions"></a>
<a id="schema_MountTargetDescriptions"></a>
<a id="tocSmounttargetdescriptions"></a>
<a id="tocsmounttargetdescriptions"></a>

```json
[
  {
    "FileSystemId": "fs-01234567",
    "IpAddress": "192.0.0.2",
    "LifeCycleState": "creating",
    "MountTargetId": "fsmt-12340abc",
    "NetworkInterfaceId": "eni-cedf6789",
    "OwnerId": 12345678912,
    "SubnetId": "subnet-1234abcd"
  }
]
```

<h2 id="tocS_DescribeReplicationConfigurationsRequest">DescribeReplicationConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationconfigurationsrequest"></a>
<a id="schema_DescribeReplicationConfigurationsRequest"></a>
<a id="tocSdescribereplicationconfigurationsrequest"></a>
<a id="tocsdescribereplicationconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_ReplicationConfigurationDescriptions">ReplicationConfigurationDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfigurationdescriptions"></a>
<a id="schema_ReplicationConfigurationDescriptions"></a>
<a id="tocSreplicationconfigurationdescriptions"></a>
<a id="tocsreplicationconfigurationdescriptions"></a>

```json
[
  {
    "SourceFileSystemId": {},
    "SourceFileSystemRegion": {},
    "SourceFileSystemArn": {},
    "OriginalSourceFileSystemArn": {},
    "CreationTime": {},
    "Destinations": {}
  }
]
```

<h2 id="tocS_DescribeTagsRequest">DescribeTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsrequest"></a>
<a id="schema_DescribeTagsRequest"></a>
<a id="tocSdescribetagsrequest"></a>
<a id="tocsdescribetagsrequest"></a>

```json
{}
```

<p/>

<h2 id="tocS_ReplicationStatus">ReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstatus"></a>
<a id="schema_ReplicationStatus"></a>
<a id="tocSreplicationstatus"></a>
<a id="tocsreplicationstatus"></a>

```json
"ENABLED"
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

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "Status": {},
  "FileSystemId": {},
  "Region": {},
  "LastReplicatedTimestamp": {}
}
```

Describes the destination file system in the replication configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|FileSystemId|object|true|none|none|
|Region|object|true|none|none|
|LastReplicatedTimestamp|object|false|none|none|

<h2 id="tocS_Destinations">Destinations</h2>
<!-- backwards compatibility -->
<a id="schemadestinations"></a>
<a id="schema_Destinations"></a>
<a id="tocSdestinations"></a>
<a id="tocsdestinations"></a>

```json
[
  {
    "Status": {},
    "FileSystemId": {},
    "Region": {},
    "LastReplicatedTimestamp": {}
  }
]
```

<h2 id="tocS_FileSystemArn">FileSystemArn</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemarn"></a>
<a id="schema_FileSystemArn"></a>
<a id="tocSfilesystemarn"></a>
<a id="tocsfilesystemarn"></a>

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

<h2 id="tocS_MountTargetCount">MountTargetCount</h2>
<!-- backwards compatibility -->
<a id="schemamounttargetcount"></a>
<a id="schema_MountTargetCount"></a>
<a id="tocSmounttargetcount"></a>
<a id="tocsmounttargetcount"></a>

```json
0
```

<h2 id="tocS_FileSystemSize">FileSystemSize</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemsize"></a>
<a id="schema_FileSystemSize"></a>
<a id="tocSfilesystemsize"></a>
<a id="tocsfilesystemsize"></a>

```json
{
  "Value": {},
  "Timestamp": {},
  "ValueInIA": {},
  "ValueInStandard": {}
}
```

The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|
|Timestamp|object|false|none|none|
|ValueInIA|object|false|none|none|
|ValueInStandard|object|false|none|none|

<h2 id="tocS_FileSystemNullableSizeValue">FileSystemNullableSizeValue</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemnullablesizevalue"></a>
<a id="schema_FileSystemNullableSizeValue"></a>
<a id="tocSfilesystemnullablesizevalue"></a>
<a id="tocsfilesystemnullablesizevalue"></a>

```json
0
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

<h2 id="tocS_FileSystemSizeValue">FileSystemSizeValue</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemsizevalue"></a>
<a id="schema_FileSystemSizeValue"></a>
<a id="tocSfilesystemsizevalue"></a>
<a id="tocsfilesystemsizevalue"></a>

```json
0
```

<h2 id="tocS_LifecyclePolicies">LifecyclePolicies</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicies"></a>
<a id="schema_LifecyclePolicies"></a>
<a id="tocSlifecyclepolicies"></a>
<a id="tocslifecyclepolicies"></a>

```json
[
  {
    "TransitionToIA": {},
    "TransitionToPrimaryStorageClass": {}
  }
]
```

<h2 id="tocS_TransitionToIARules">TransitionToIARules</h2>
<!-- backwards compatibility -->
<a id="schematransitiontoiarules"></a>
<a id="schema_TransitionToIARules"></a>
<a id="tocStransitiontoiarules"></a>
<a id="tocstransitiontoiarules"></a>

```json
"AFTER_7_DAYS"
```

<h2 id="tocS_TransitionToPrimaryStorageClassRules">TransitionToPrimaryStorageClassRules</h2>
<!-- backwards compatibility -->
<a id="schematransitiontoprimarystorageclassrules"></a>
<a id="schema_TransitionToPrimaryStorageClassRules"></a>
<a id="tocStransitiontoprimarystorageclassrules"></a>
<a id="tocstransitiontoprimarystorageclassrules"></a>

```json
"AFTER_1_ACCESS"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

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

<h2 id="tocS_ModifyMountTargetSecurityGroupsRequest">ModifyMountTargetSecurityGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifymounttargetsecuritygroupsrequest"></a>
<a id="schema_ModifyMountTargetSecurityGroupsRequest"></a>
<a id="tocSmodifymounttargetsecuritygroupsrequest"></a>
<a id="tocsmodifymounttargetsecuritygroupsrequest"></a>

```json
{
  "SecurityGroups": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroups|object|false|none|none|

<h2 id="tocS_NetworkInterfaceId">NetworkInterfaceId</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaceid"></a>
<a id="schema_NetworkInterfaceId"></a>
<a id="tocSnetworkinterfaceid"></a>
<a id="tocsnetworkinterfaceid"></a>

```json
"string"
```

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_ResourceIdType">ResourceIdType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidtype"></a>
<a id="schema_ResourceIdType"></a>
<a id="tocSresourceidtype"></a>
<a id="tocsresourceidtype"></a>

```json
"LONG_ID"
```

A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.

<h2 id="tocS_PutAccountPreferencesRequest">PutAccountPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountpreferencesrequest"></a>
<a id="schema_PutAccountPreferencesRequest"></a>
<a id="tocSputaccountpreferencesrequest"></a>
<a id="tocsputaccountpreferencesrequest"></a>

```json
{
  "ResourceIdType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdType|object|true|none|none|

<h2 id="tocS_PutBackupPolicyRequest">PutBackupPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbackuppolicyrequest"></a>
<a id="schema_PutBackupPolicyRequest"></a>
<a id="tocSputbackuppolicyrequest"></a>
<a id="tocsputbackuppolicyrequest"></a>

```json
{
  "BackupPolicy": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPolicy|object|true|none|none|

<h2 id="tocS_PutFileSystemPolicyRequest">PutFileSystemPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfilesystempolicyrequest"></a>
<a id="schema_PutFileSystemPolicyRequest"></a>
<a id="tocSputfilesystempolicyrequest"></a>
<a id="tocsputfilesystempolicyrequest"></a>

```json
{
  "Policy": {},
  "BypassPolicyLockoutSafetyCheck": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|
|BypassPolicyLockoutSafetyCheck|object|false|none|none|

<h2 id="tocS_PutLifecycleConfigurationRequest">PutLifecycleConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecycleconfigurationrequest"></a>
<a id="schema_PutLifecycleConfigurationRequest"></a>
<a id="tocSputlifecycleconfigurationrequest"></a>
<a id="tocsputlifecycleconfigurationrequest"></a>

```json
{
  "LifecyclePolicies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecyclePolicies|object|true|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
"FILE_SYSTEM"
```

An EFS resource, for example a file system or a mount target.

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
[
  "FILE_SYSTEM"
]
```

EFS resources to which a preference applies to.

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateFileSystemRequest">UpdateFileSystemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilesystemrequest"></a>
<a id="schema_UpdateFileSystemRequest"></a>
<a id="tocSupdatefilesystemrequest"></a>
<a id="tocsupdatefilesystemrequest"></a>

```json
{
  "ThroughputMode": {},
  "ProvisionedThroughputInMibps": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThroughputMode|object|false|none|none|
|ProvisionedThroughputInMibps|object|false|none|none|
