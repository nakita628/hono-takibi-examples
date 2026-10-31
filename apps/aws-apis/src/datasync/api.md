<h1 id="aws-datasync">AWS DataSync v2018-11-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>DataSync</fullname> <p>DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Web Services storage services. You also can use DataSync to transfer data between other cloud providers and Amazon Web Services storage services.</p> <p>This API interface reference includes documentation for using DataSync programmatically. For complete information, see the <i> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User Guide</a> </i>.</p>

Base URLs:

* <a href="http://datasync.us-east-1.amazonaws.com">http://datasync.us-east-1.amazonaws.com</a> - The DataSync multi-region endpoint

* <a href="https://datasync.us-east-1.amazonaws.com">https://datasync.us-east-1.amazonaws.com</a> - The DataSync multi-region endpoint

* <a href="http://datasync.cn-north-1.amazonaws.com.cn">http://datasync.cn-north-1.amazonaws.com.cn</a> - The DataSync endpoint for China (Beijing) and China (Ningxia)

* <a href="https://datasync.cn-north-1.amazonaws.com.cn">https://datasync.cn-north-1.amazonaws.com.cn</a> - The DataSync endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/datasync/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-datasync-default">Default</h1>

## CancelTaskExecution

<a id="opIdCancelTaskExecution"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CancelTaskExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CancelTaskExecution' \
  -d '{
    "TaskExecutionArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CancelTaskExecution`

<p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>

> Body parameter

```json
{
  "TaskExecutionArn": {}
}
```

<h3 id="canceltaskexecution-parameters">Parameters</h3>

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
|body|body|[CancelTaskExecutionRequest](#schemacanceltaskexecutionrequest)|true|none|
|» TaskExecutionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CancelTaskExecution|

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

<h3 id="canceltaskexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelTaskExecutionResponse](#schemacanceltaskexecutionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAgent

<a id="opIdCreateAgent"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateAgent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateAgent' \
  -d '{
    "ActivationKey": {},
    "AgentName": {},
    "Tags": {},
    "VpcEndpointId": {},
    "SubnetArns": {},
    "SecurityGroupArns": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateAgent`

<p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>

> Body parameter

```json
{
  "ActivationKey": {},
  "AgentName": {},
  "Tags": {},
  "VpcEndpointId": {},
  "SubnetArns": {},
  "SecurityGroupArns": {}
}
```

<h3 id="createagent-parameters">Parameters</h3>

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
|body|body|[CreateAgentRequest](#schemacreateagentrequest)|true|none|
|» ActivationKey|body|object|true|none|
|» AgentName|body|object|false|none|
|» Tags|body|object|false|none|
|» VpcEndpointId|body|object|false|none|
|» SubnetArns|body|object|false|none|
|» SecurityGroupArns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateAgent|

> Example responses

> 200 Response

```json
{
  "AgentArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAgentResponse](#schemacreateagentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationEfs

<a id="opIdCreateLocationEfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationEfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationEfs' \
  -d '{
    "Subdirectory": {},
    "EfsFilesystemArn": {},
    "Ec2Config": {
      "SubnetArn": {},
      "SecurityGroupArns": {}
    },
    "Tags": {},
    "AccessPointArn": {},
    "FileSystemAccessRoleArn": {},
    "InTransitEncryption": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationEfs`

Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.

> Body parameter

```json
{
  "Subdirectory": {},
  "EfsFilesystemArn": {},
  "Ec2Config": {
    "SubnetArn": {},
    "SecurityGroupArns": {}
  },
  "Tags": {},
  "AccessPointArn": {},
  "FileSystemAccessRoleArn": {},
  "InTransitEncryption": {}
}
```

<h3 id="createlocationefs-parameters">Parameters</h3>

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
|body|body|[CreateLocationEfsRequest](#schemacreatelocationefsrequest)|true|none|
|» Subdirectory|body|object|false|none|
|» EfsFilesystemArn|body|object|true|none|
|» Ec2Config|body|object|true|none|
|» » SubnetArn|body|object|true|none|
|» » SecurityGroupArns|body|object|true|none|
|» Tags|body|object|false|none|
|» AccessPointArn|body|object|false|none|
|» FileSystemAccessRoleArn|body|object|false|none|
|» InTransitEncryption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationEfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationefs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationEfsResponse](#schemacreatelocationefsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationFsxLustre

<a id="opIdCreateLocationFsxLustre"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationFsxLustre' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationFsxLustre' \
  -d '{
    "FsxFilesystemArn": {},
    "SecurityGroupArns": {},
    "Subdirectory": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationFsxLustre`

Creates an endpoint for an Amazon FSx for Lustre file system.

> Body parameter

```json
{
  "FsxFilesystemArn": {},
  "SecurityGroupArns": {},
  "Subdirectory": {},
  "Tags": {}
}
```

<h3 id="createlocationfsxlustre-parameters">Parameters</h3>

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
|body|body|[CreateLocationFsxLustreRequest](#schemacreatelocationfsxlustrerequest)|true|none|
|» FsxFilesystemArn|body|object|true|none|
|» SecurityGroupArns|body|object|true|none|
|» Subdirectory|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationFsxLustre|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationfsxlustre-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationFsxLustreResponse](#schemacreatelocationfsxlustreresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationFsxOntap

<a id="opIdCreateLocationFsxOntap"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationFsxOntap' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationFsxOntap' \
  -d '{
    "Protocol": {
      "NFS": {
        "MountOptions": {
          "Version": {}
        }
      },
      "SMB": {
        "Domain": {},
        "MountOptions": {
          "Version": {}
        },
        "Password": {},
        "User": {}
      }
    },
    "SecurityGroupArns": {},
    "StorageVirtualMachineArn": {},
    "Subdirectory": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationFsxOntap`

Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.

> Body parameter

```json
{
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "SecurityGroupArns": {},
  "StorageVirtualMachineArn": {},
  "Subdirectory": {},
  "Tags": {}
}
```

<h3 id="createlocationfsxontap-parameters">Parameters</h3>

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
|body|body|[CreateLocationFsxOntapRequest](#schemacreatelocationfsxontaprequest)|true|none|
|» Protocol|body|[FsxProtocol](#schemafsxprotocol)|true|Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.|
|» SecurityGroupArns|body|object|true|none|
|» StorageVirtualMachineArn|body|object|true|none|
|» Subdirectory|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationFsxOntap|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationfsxontap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationFsxOntapResponse](#schemacreatelocationfsxontapresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationFsxOpenZfs

<a id="opIdCreateLocationFsxOpenZfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationFsxOpenZfs' \
  -d '{
    "FsxFilesystemArn": {},
    "Protocol": {
      "NFS": {
        "MountOptions": {
          "Version": {}
        }
      },
      "SMB": {
        "Domain": {},
        "MountOptions": {
          "Version": {}
        },
        "Password": {},
        "User": {}
      }
    },
    "SecurityGroupArns": {},
    "Subdirectory": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs`

<p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>

> Body parameter

```json
{
  "FsxFilesystemArn": {},
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "SecurityGroupArns": {},
  "Subdirectory": {},
  "Tags": {}
}
```

<h3 id="createlocationfsxopenzfs-parameters">Parameters</h3>

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
|body|body|[CreateLocationFsxOpenZfsRequest](#schemacreatelocationfsxopenzfsrequest)|true|none|
|» FsxFilesystemArn|body|object|true|none|
|» Protocol|body|object|true|none|
|» » NFS|body|object|false|none|
|» » » MountOptions|body|[NfsMountOptions](#schemanfsmountoptions)|false|Specifies how DataSync can access a location using the NFS protocol.|
|» » SMB|body|object|false|none|
|» » » Domain|body|object|false|none|
|» » » MountOptions|body|[SmbMountOptions](#schemasmbmountoptions)|false|Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.|
|» » » Password|body|object|true|none|
|» » » User|body|object|true|none|
|» SecurityGroupArns|body|object|true|none|
|» Subdirectory|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationFsxOpenZfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationfsxopenzfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationFsxOpenZfsResponse](#schemacreatelocationfsxopenzfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationFsxWindows

<a id="opIdCreateLocationFsxWindows"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationFsxWindows' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationFsxWindows' \
  -d '{
    "Subdirectory": {},
    "FsxFilesystemArn": {},
    "SecurityGroupArns": {},
    "Tags": {},
    "User": {},
    "Domain": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationFsxWindows`

Creates an endpoint for an Amazon FSx for Windows File Server file system.

> Body parameter

```json
{
  "Subdirectory": {},
  "FsxFilesystemArn": {},
  "SecurityGroupArns": {},
  "Tags": {},
  "User": {},
  "Domain": {},
  "Password": {}
}
```

<h3 id="createlocationfsxwindows-parameters">Parameters</h3>

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
|body|body|[CreateLocationFsxWindowsRequest](#schemacreatelocationfsxwindowsrequest)|true|none|
|» Subdirectory|body|object|false|none|
|» FsxFilesystemArn|body|object|true|none|
|» SecurityGroupArns|body|object|true|none|
|» Tags|body|object|false|none|
|» User|body|object|true|none|
|» Domain|body|object|false|none|
|» Password|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationFsxWindows|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationfsxwindows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationFsxWindowsResponse](#schemacreatelocationfsxwindowsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationHdfs

<a id="opIdCreateLocationHdfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationHdfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationHdfs' \
  -d '{
    "Subdirectory": {},
    "NameNodes": {},
    "BlockSize": {},
    "ReplicationFactor": {},
    "KmsKeyProviderUri": {},
    "QopConfiguration": {
      "RpcProtection": {},
      "DataTransferProtection": {}
    },
    "AuthenticationType": {},
    "SimpleUser": {},
    "KerberosPrincipal": {},
    "KerberosKeytab": {},
    "KerberosKrb5Conf": {},
    "AgentArns": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationHdfs`

Creates an endpoint for a Hadoop Distributed File System (HDFS). 

> Body parameter

```json
{
  "Subdirectory": {},
  "NameNodes": {},
  "BlockSize": {},
  "ReplicationFactor": {},
  "KmsKeyProviderUri": {},
  "QopConfiguration": {
    "RpcProtection": {},
    "DataTransferProtection": {}
  },
  "AuthenticationType": {},
  "SimpleUser": {},
  "KerberosPrincipal": {},
  "KerberosKeytab": {},
  "KerberosKrb5Conf": {},
  "AgentArns": {},
  "Tags": {}
}
```

<h3 id="createlocationhdfs-parameters">Parameters</h3>

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
|body|body|[CreateLocationHdfsRequest](#schemacreatelocationhdfsrequest)|true|none|
|» Subdirectory|body|object|false|none|
|» NameNodes|body|object|true|none|
|» BlockSize|body|object|false|none|
|» ReplicationFactor|body|object|false|none|
|» KmsKeyProviderUri|body|object|false|none|
|» QopConfiguration|body|object|false|none|
|» » RpcProtection|body|object|false|none|
|» » DataTransferProtection|body|object|false|none|
|» AuthenticationType|body|object|true|none|
|» SimpleUser|body|object|false|none|
|» KerberosPrincipal|body|object|false|none|
|» KerberosKeytab|body|object|false|none|
|» KerberosKrb5Conf|body|object|false|none|
|» AgentArns|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationHdfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationhdfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationHdfsResponse](#schemacreatelocationhdfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationNfs

<a id="opIdCreateLocationNfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationNfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationNfs' \
  -d '{
    "Subdirectory": {},
    "ServerHostname": {},
    "OnPremConfig": {
      "AgentArns": {}
    },
    "MountOptions": {
      "Version": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationNfs`

Defines a file system on a Network File System (NFS) server that can be read from or written to.

> Body parameter

```json
{
  "Subdirectory": {},
  "ServerHostname": {},
  "OnPremConfig": {
    "AgentArns": {}
  },
  "MountOptions": {
    "Version": {}
  },
  "Tags": {}
}
```

<h3 id="createlocationnfs-parameters">Parameters</h3>

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
|body|body|[CreateLocationNfsRequest](#schemacreatelocationnfsrequest)|true|none|
|» Subdirectory|body|object|true|none|
|» ServerHostname|body|object|true|none|
|» OnPremConfig|body|object|true|none|
|» » AgentArns|body|object|true|none|
|» MountOptions|body|object|false|none|
|» » Version|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationNfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationnfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationNfsResponse](#schemacreatelocationnfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationObjectStorage

<a id="opIdCreateLocationObjectStorage"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationObjectStorage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationObjectStorage' \
  -d '{
    "ServerHostname": {},
    "ServerPort": {},
    "ServerProtocol": {},
    "Subdirectory": {},
    "BucketName": {},
    "AccessKey": {},
    "SecretKey": {},
    "AgentArns": {},
    "Tags": {},
    "ServerCertificate": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationObjectStorage`

Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

> Body parameter

```json
{
  "ServerHostname": {},
  "ServerPort": {},
  "ServerProtocol": {},
  "Subdirectory": {},
  "BucketName": {},
  "AccessKey": {},
  "SecretKey": {},
  "AgentArns": {},
  "Tags": {},
  "ServerCertificate": {}
}
```

<h3 id="createlocationobjectstorage-parameters">Parameters</h3>

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
|body|body|[CreateLocationObjectStorageRequest](#schemacreatelocationobjectstoragerequest)|true|none|
|» ServerHostname|body|object|true|none|
|» ServerPort|body|object|false|none|
|» ServerProtocol|body|object|false|none|
|» Subdirectory|body|object|false|none|
|» BucketName|body|object|true|none|
|» AccessKey|body|object|false|none|
|» SecretKey|body|object|false|none|
|» AgentArns|body|object|true|none|
|» Tags|body|object|false|none|
|» ServerCertificate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationObjectStorage|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationobjectstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationObjectStorageResponse](#schemacreatelocationobjectstorageresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationS3

<a id="opIdCreateLocationS3"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationS3' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationS3' \
  -d '{
    "Subdirectory": {},
    "S3BucketArn": {},
    "S3StorageClass": {},
    "S3Config": {
      "BucketAccessRoleArn": {}
    },
    "AgentArns": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationS3`

Creates an endpoint for an Amazon S3 bucket that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Create an Amazon S3 location</a>.

> Body parameter

```json
{
  "Subdirectory": {},
  "S3BucketArn": {},
  "S3StorageClass": {},
  "S3Config": {
    "BucketAccessRoleArn": {}
  },
  "AgentArns": {},
  "Tags": {}
}
```

<h3 id="createlocations3-parameters">Parameters</h3>

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
|body|body|[CreateLocationS3Request](#schemacreatelocations3request)|true|none|
|» Subdirectory|body|object|false|none|
|» S3BucketArn|body|object|true|none|
|» S3StorageClass|body|object|false|none|
|» S3Config|body|[S3Config](#schemas3config)|true|<p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>|
|» AgentArns|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationS3|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocations3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationS3Response](#schemacreatelocations3response)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocationSmb

<a id="opIdCreateLocationSmb"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateLocationSmb' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateLocationSmb' \
  -d '{
    "Subdirectory": {},
    "ServerHostname": {},
    "User": {},
    "Domain": {},
    "Password": {},
    "AgentArns": {},
    "MountOptions": {
      "Version": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateLocationSmb`

Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.

> Body parameter

```json
{
  "Subdirectory": {},
  "ServerHostname": {},
  "User": {},
  "Domain": {},
  "Password": {},
  "AgentArns": {},
  "MountOptions": {
    "Version": {}
  },
  "Tags": {}
}
```

<h3 id="createlocationsmb-parameters">Parameters</h3>

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
|body|body|[CreateLocationSmbRequest](#schemacreatelocationsmbrequest)|true|none|
|» Subdirectory|body|object|true|none|
|» ServerHostname|body|object|true|none|
|» User|body|object|true|none|
|» Domain|body|object|false|none|
|» Password|body|object|true|none|
|» AgentArns|body|object|true|none|
|» MountOptions|body|object|false|none|
|» » Version|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateLocationSmb|

> Example responses

> 200 Response

```json
{
  "LocationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createlocationsmb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationSmbResponse](#schemacreatelocationsmbresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTask

<a id="opIdCreateTask"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.CreateTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.CreateTask' \
  -d '{
    "SourceLocationArn": {},
    "DestinationLocationArn": {},
    "CloudWatchLogGroupArn": {},
    "Name": {},
    "Options": {
      "VerifyMode": {},
      "OverwriteMode": {},
      "Atime": {},
      "Mtime": {},
      "Uid": {},
      "Gid": {},
      "PreserveDeletedFiles": {},
      "PreserveDevices": {},
      "PosixPermissions": {},
      "BytesPerSecond": {},
      "TaskQueueing": {},
      "LogLevel": {},
      "TransferMode": {},
      "SecurityDescriptorCopyFlags": {},
      "ObjectTags": {}
    },
    "Excludes": {},
    "Schedule": {
      "ScheduleExpression": {}
    },
    "Tags": {},
    "Includes": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.CreateTask`

<p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p>

> Body parameter

```json
{
  "SourceLocationArn": {},
  "DestinationLocationArn": {},
  "CloudWatchLogGroupArn": {},
  "Name": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Schedule": {
    "ScheduleExpression": {}
  },
  "Tags": {},
  "Includes": {}
}
```

<h3 id="createtask-parameters">Parameters</h3>

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
|body|body|[CreateTaskRequest](#schemacreatetaskrequest)|true|none|
|» SourceLocationArn|body|object|true|none|
|» DestinationLocationArn|body|object|true|none|
|» CloudWatchLogGroupArn|body|object|false|none|
|» Name|body|object|false|none|
|» Options|body|object|false|none|
|» » VerifyMode|body|object|false|none|
|» » OverwriteMode|body|object|false|none|
|» » Atime|body|object|false|none|
|» » Mtime|body|object|false|none|
|» » Uid|body|object|false|none|
|» » Gid|body|object|false|none|
|» » PreserveDeletedFiles|body|object|false|none|
|» » PreserveDevices|body|object|false|none|
|» » PosixPermissions|body|object|false|none|
|» » BytesPerSecond|body|object|false|none|
|» » TaskQueueing|body|object|false|none|
|» » LogLevel|body|object|false|none|
|» » TransferMode|body|object|false|none|
|» » SecurityDescriptorCopyFlags|body|object|false|none|
|» » ObjectTags|body|object|false|none|
|» Excludes|body|object|false|none|
|» Schedule|body|object|false|none|
|» » ScheduleExpression|body|object|true|none|
|» Tags|body|object|false|none|
|» Includes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.CreateTask|

> Example responses

> 200 Response

```json
{
  "TaskArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTaskResponse](#schemacreatetaskresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAgent

<a id="opIdDeleteAgent"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DeleteAgent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DeleteAgent' \
  -d '{
    "AgentArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DeleteAgent`

Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.

> Body parameter

```json
{
  "AgentArn": {}
}
```

<h3 id="deleteagent-parameters">Parameters</h3>

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
|body|body|[DeleteAgentRequest](#schemadeleteagentrequest)|true|none|
|» AgentArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DeleteAgent|

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

<h3 id="deleteagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAgentResponse](#schemadeleteagentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLocation

<a id="opIdDeleteLocation"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DeleteLocation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DeleteLocation' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DeleteLocation`

Deletes the configuration of a location used by DataSync. 

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="deletelocation-parameters">Parameters</h3>

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
|body|body|[DeleteLocationRequest](#schemadeletelocationrequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DeleteLocation|

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

<h3 id="deletelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLocationResponse](#schemadeletelocationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTask

<a id="opIdDeleteTask"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DeleteTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DeleteTask' \
  -d '{
    "TaskArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DeleteTask`

Deletes an DataSync task.

> Body parameter

```json
{
  "TaskArn": {}
}
```

<h3 id="deletetask-parameters">Parameters</h3>

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
|body|body|[DeleteTaskRequest](#schemadeletetaskrequest)|true|none|
|» TaskArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DeleteTask|

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

<h3 id="deletetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTaskResponse](#schemadeletetaskresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAgent

<a id="opIdDescribeAgent"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeAgent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeAgent' \
  -d '{
    "AgentArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeAgent`

Returns metadata about an DataSync agent, such as its name, endpoint type, and status.

> Body parameter

```json
{
  "AgentArn": {}
}
```

<h3 id="describeagent-parameters">Parameters</h3>

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
|body|body|[DescribeAgentRequest](#schemadescribeagentrequest)|true|none|
|» AgentArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeAgent|

> Example responses

> 200 Response

```json
{
  "AgentArn": {},
  "Name": {},
  "Status": {},
  "LastConnectionTime": {},
  "CreationTime": {},
  "EndpointType": {},
  "PrivateLinkConfig": {
    "VpcEndpointId": {},
    "PrivateLinkEndpoint": {},
    "SubnetArns": {},
    "SecurityGroupArns": {}
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

<h3 id="describeagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAgentResponse](#schemadescribeagentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationEfs

<a id="opIdDescribeLocationEfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationEfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationEfs' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationEfs`

Returns metadata about your DataSync location for an Amazon EFS file system.

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationefs-parameters">Parameters</h3>

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
|body|body|[DescribeLocationEfsRequest](#schemadescribelocationefsrequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationEfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "Ec2Config": {
    "SubnetArn": {},
    "SecurityGroupArns": {}
  },
  "CreationTime": {},
  "AccessPointArn": {},
  "FileSystemAccessRoleArn": {},
  "InTransitEncryption": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationefs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationEfsResponse](#schemadescribelocationefsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationFsxLustre

<a id="opIdDescribeLocationFsxLustre"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationFsxLustre' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationFsxLustre' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationFsxLustre`

Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationfsxlustre-parameters">Parameters</h3>

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
|body|body|[DescribeLocationFsxLustreRequest](#schemadescribelocationfsxlustrerequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationFsxLustre|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "SecurityGroupArns": {},
  "CreationTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationfsxlustre-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationFsxLustreResponse](#schemadescribelocationfsxlustreresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationFsxOntap

<a id="opIdDescribeLocationFsxOntap"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationFsxOntap' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationFsxOntap' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationFsxOntap`

<p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationfsxontap-parameters">Parameters</h3>

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
|body|body|[DescribeLocationFsxOntapRequest](#schemadescribelocationfsxontaprequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationFsxOntap|

> Example responses

> 200 Response

```json
{
  "CreationTime": {},
  "LocationArn": {},
  "LocationUri": {},
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "SecurityGroupArns": {},
  "StorageVirtualMachineArn": {},
  "FsxFilesystemArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationfsxontap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationFsxOntapResponse](#schemadescribelocationfsxontapresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationFsxOpenZfs

<a id="opIdDescribeLocationFsxOpenZfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationFsxOpenZfs' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs`

<p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationfsxopenzfs-parameters">Parameters</h3>

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
|body|body|[DescribeLocationFsxOpenZfsRequest](#schemadescribelocationfsxopenzfsrequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationFsxOpenZfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "SecurityGroupArns": {},
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "CreationTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationfsxopenzfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationFsxOpenZfsResponse](#schemadescribelocationfsxopenzfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationFsxWindows

<a id="opIdDescribeLocationFsxWindows"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationFsxWindows' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationFsxWindows' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationFsxWindows`

Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationfsxwindows-parameters">Parameters</h3>

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
|body|body|[DescribeLocationFsxWindowsRequest](#schemadescribelocationfsxwindowsrequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationFsxWindows|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "SecurityGroupArns": {},
  "CreationTime": {},
  "User": {},
  "Domain": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationfsxwindows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationFsxWindowsResponse](#schemadescribelocationfsxwindowsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationHdfs

<a id="opIdDescribeLocationHdfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationHdfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationHdfs' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationHdfs`

Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationhdfs-parameters">Parameters</h3>

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
|body|body|[DescribeLocationHdfsRequest](#schemadescribelocationhdfsrequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationHdfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "NameNodes": {},
  "BlockSize": {},
  "ReplicationFactor": {},
  "KmsKeyProviderUri": {},
  "QopConfiguration": {
    "RpcProtection": {},
    "DataTransferProtection": {}
  },
  "AuthenticationType": {},
  "SimpleUser": {},
  "KerberosPrincipal": {},
  "AgentArns": {},
  "CreationTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationhdfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationHdfsResponse](#schemadescribelocationhdfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationNfs

<a id="opIdDescribeLocationNfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationNfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationNfs' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationNfs`

Returns metadata, such as the path information, about an NFS location.

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationnfs-parameters">Parameters</h3>

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
|body|body|[DescribeLocationNfsRequest](#schemadescribelocationnfsrequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationNfs|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "OnPremConfig": {
    "AgentArns": {}
  },
  "MountOptions": {
    "Version": {}
  },
  "CreationTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationnfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationNfsResponse](#schemadescribelocationnfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationObjectStorage

<a id="opIdDescribeLocationObjectStorage"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationObjectStorage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationObjectStorage' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationObjectStorage`

Returns metadata about your DataSync location for an object storage system.

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationobjectstorage-parameters">Parameters</h3>

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
|body|body|[DescribeLocationObjectStorageRequest](#schemadescribelocationobjectstoragerequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationObjectStorage|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "AccessKey": {},
  "ServerPort": {},
  "ServerProtocol": {},
  "AgentArns": {},
  "CreationTime": {},
  "ServerCertificate": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationobjectstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationObjectStorageResponse](#schemadescribelocationobjectstorageresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationS3

<a id="opIdDescribeLocationS3"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationS3' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationS3' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationS3`

Returns metadata, such as bucket name, about an Amazon S3 bucket location.

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocations3-parameters">Parameters</h3>

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
|body|body|[DescribeLocationS3Request](#schemadescribelocations3request)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationS3|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "S3StorageClass": {},
  "S3Config": {
    "BucketAccessRoleArn": {}
  },
  "AgentArns": {},
  "CreationTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocations3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationS3Response](#schemadescribelocations3response)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocationSmb

<a id="opIdDescribeLocationSmb"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeLocationSmb' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeLocationSmb' \
  -d '{
    "LocationArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeLocationSmb`

Returns metadata, such as the path and user information about an SMB location.

> Body parameter

```json
{
  "LocationArn": {}
}
```

<h3 id="describelocationsmb-parameters">Parameters</h3>

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
|body|body|[DescribeLocationSmbRequest](#schemadescribelocationsmbrequest)|true|none|
|» LocationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeLocationSmb|

> Example responses

> 200 Response

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "AgentArns": {},
  "User": {},
  "Domain": {},
  "MountOptions": {
    "Version": {}
  },
  "CreationTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocationsmb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLocationSmbResponse](#schemadescribelocationsmbresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTask

<a id="opIdDescribeTask"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeTask' \
  -d '{
    "TaskArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeTask`

Returns metadata about a task.

> Body parameter

```json
{
  "TaskArn": {}
}
```

<h3 id="describetask-parameters">Parameters</h3>

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
|body|body|[DescribeTaskRequest](#schemadescribetaskrequest)|true|none|
|» TaskArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeTask|

> Example responses

> 200 Response

```json
{
  "TaskArn": {},
  "Status": {},
  "Name": {},
  "CurrentTaskExecutionArn": {},
  "SourceLocationArn": {},
  "DestinationLocationArn": {},
  "CloudWatchLogGroupArn": {},
  "SourceNetworkInterfaceArns": {},
  "DestinationNetworkInterfaceArns": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Schedule": {
    "ScheduleExpression": {}
  },
  "ErrorCode": {},
  "ErrorDetail": {},
  "CreationTime": {},
  "Includes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTaskResponse](#schemadescribetaskresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTaskExecution

<a id="opIdDescribeTaskExecution"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.DescribeTaskExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.DescribeTaskExecution' \
  -d '{
    "TaskExecutionArn": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.DescribeTaskExecution`

Returns detailed metadata about a task that is being executed.

> Body parameter

```json
{
  "TaskExecutionArn": {}
}
```

<h3 id="describetaskexecution-parameters">Parameters</h3>

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
|body|body|[DescribeTaskExecutionRequest](#schemadescribetaskexecutionrequest)|true|none|
|» TaskExecutionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.DescribeTaskExecution|

> Example responses

> 200 Response

```json
{
  "TaskExecutionArn": {},
  "Status": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Includes": {},
  "StartTime": {},
  "EstimatedFilesToTransfer": {},
  "EstimatedBytesToTransfer": {},
  "FilesTransferred": {},
  "BytesWritten": {},
  "BytesTransferred": {},
  "Result": {
    "PrepareDuration": {},
    "PrepareStatus": {},
    "TotalDuration": {},
    "TransferDuration": {},
    "TransferStatus": {},
    "VerifyDuration": {},
    "VerifyStatus": {},
    "ErrorCode": {},
    "ErrorDetail": {}
  },
  "BytesCompressed": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describetaskexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTaskExecutionResponse](#schemadescribetaskexecutionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAgents

<a id="opIdListAgents"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.ListAgents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.ListAgents' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.ListAgents`

<p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listagents-parameters">Parameters</h3>

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
|body|body|[ListAgentsRequest](#schemalistagentsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.ListAgents|

> Example responses

> 200 Response

```json
{
  "Agents": {},
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

<h3 id="listagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAgentsResponse](#schemalistagentsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLocations

<a id="opIdListLocations"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.ListLocations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.ListLocations' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.ListLocations`

<p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listlocations-parameters">Parameters</h3>

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
|body|body|[ListLocationsRequest](#schemalistlocationsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.ListLocations|

> Example responses

> 200 Response

```json
{
  "Locations": {},
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

<h3 id="listlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLocationsResponse](#schemalistlocationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.ListTagsForResource' \
  -d '{
    "ResourceArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.ListTagsForResource`

Returns all the tags associated with an Amazon Web Services resource.

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTaskExecutions

<a id="opIdListTaskExecutions"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.ListTaskExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.ListTaskExecutions' \
  -d '{
    "TaskArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.ListTaskExecutions`

Returns a list of executed tasks.

> Body parameter

```json
{
  "TaskArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listtaskexecutions-parameters">Parameters</h3>

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
|body|body|[ListTaskExecutionsRequest](#schemalisttaskexecutionsrequest)|true|none|
|» TaskArn|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.ListTaskExecutions|

> Example responses

> 200 Response

```json
{
  "TaskExecutions": {},
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

<h3 id="listtaskexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTaskExecutionsResponse](#schemalisttaskexecutionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTasks

<a id="opIdListTasks"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.ListTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.ListTasks' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.ListTasks`

Returns a list of the DataSync tasks you created.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listtasks-parameters">Parameters</h3>

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
|body|body|[ListTasksRequest](#schemalisttasksrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.ListTasks|

> Example responses

> 200 Response

```json
{
  "Tasks": {},
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

<h3 id="listtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTasksResponse](#schemalisttasksresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTaskExecution

<a id="opIdStartTaskExecution"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.StartTaskExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.StartTaskExecution' \
  -d '{
    "TaskArn": {},
    "OverrideOptions": {
      "VerifyMode": {},
      "OverwriteMode": {},
      "Atime": {},
      "Mtime": {},
      "Uid": {},
      "Gid": {},
      "PreserveDeletedFiles": {},
      "PreserveDevices": {},
      "PosixPermissions": {},
      "BytesPerSecond": {},
      "TaskQueueing": {},
      "LogLevel": {},
      "TransferMode": {},
      "SecurityDescriptorCopyFlags": {},
      "ObjectTags": {}
    },
    "Includes": {},
    "Excludes": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.StartTaskExecution`

<p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p>

> Body parameter

```json
{
  "TaskArn": {},
  "OverrideOptions": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Includes": {},
  "Excludes": {},
  "Tags": {}
}
```

<h3 id="starttaskexecution-parameters">Parameters</h3>

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
|body|body|[StartTaskExecutionRequest](#schemastarttaskexecutionrequest)|true|none|
|» TaskArn|body|object|true|none|
|» OverrideOptions|body|[Options](#schemaoptions)|false|<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>|
|» Includes|body|object|false|none|
|» Excludes|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.StartTaskExecution|

> Example responses

> 200 Response

```json
{
  "TaskExecutionArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="starttaskexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTaskExecutionResponse](#schemastarttaskexecutionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.TagResource`

<p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UntagResource' \
  -d '{
    "ResourceArn": {},
    "Keys": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.UntagResource`

Removes tags from an Amazon Web Services resource.

> Body parameter

```json
{
  "ResourceArn": {},
  "Keys": {}
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
|» Keys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAgent

<a id="opIdUpdateAgent"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UpdateAgent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UpdateAgent' \
  -d '{
    "AgentArn": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.UpdateAgent`

Updates the name of an agent.

> Body parameter

```json
{
  "AgentArn": {},
  "Name": {}
}
```

<h3 id="updateagent-parameters">Parameters</h3>

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
|body|body|[UpdateAgentRequest](#schemaupdateagentrequest)|true|none|
|» AgentArn|body|object|true|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UpdateAgent|

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

<h3 id="updateagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAgentResponse](#schemaupdateagentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLocationHdfs

<a id="opIdUpdateLocationHdfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UpdateLocationHdfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UpdateLocationHdfs' \
  -d '{
    "LocationArn": {},
    "Subdirectory": {},
    "NameNodes": {},
    "BlockSize": {},
    "ReplicationFactor": {},
    "KmsKeyProviderUri": {},
    "QopConfiguration": {
      "RpcProtection": {},
      "DataTransferProtection": {}
    },
    "AuthenticationType": {},
    "SimpleUser": {},
    "KerberosPrincipal": {},
    "KerberosKeytab": {},
    "KerberosKrb5Conf": {},
    "AgentArns": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.UpdateLocationHdfs`

Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.

> Body parameter

```json
{
  "LocationArn": {},
  "Subdirectory": {},
  "NameNodes": {},
  "BlockSize": {},
  "ReplicationFactor": {},
  "KmsKeyProviderUri": {},
  "QopConfiguration": {
    "RpcProtection": {},
    "DataTransferProtection": {}
  },
  "AuthenticationType": {},
  "SimpleUser": {},
  "KerberosPrincipal": {},
  "KerberosKeytab": {},
  "KerberosKrb5Conf": {},
  "AgentArns": {}
}
```

<h3 id="updatelocationhdfs-parameters">Parameters</h3>

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
|body|body|[UpdateLocationHdfsRequest](#schemaupdatelocationhdfsrequest)|true|none|
|» LocationArn|body|object|true|none|
|» Subdirectory|body|object|false|none|
|» NameNodes|body|object|false|none|
|» BlockSize|body|object|false|none|
|» ReplicationFactor|body|object|false|none|
|» KmsKeyProviderUri|body|object|false|none|
|» QopConfiguration|body|object|false|none|
|» » RpcProtection|body|object|false|none|
|» » DataTransferProtection|body|object|false|none|
|» AuthenticationType|body|object|false|none|
|» SimpleUser|body|object|false|none|
|» KerberosPrincipal|body|object|false|none|
|» KerberosKeytab|body|object|false|none|
|» KerberosKrb5Conf|body|object|false|none|
|» AgentArns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UpdateLocationHdfs|

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

<h3 id="updatelocationhdfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLocationHdfsResponse](#schemaupdatelocationhdfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLocationNfs

<a id="opIdUpdateLocationNfs"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UpdateLocationNfs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UpdateLocationNfs' \
  -d '{
    "LocationArn": {},
    "Subdirectory": {},
    "OnPremConfig": {
      "AgentArns": {}
    },
    "MountOptions": {
      "Version": {}
    }
  }'
```

`POST /#X-Amz-Target=FmrsService.UpdateLocationNfs`

Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.

> Body parameter

```json
{
  "LocationArn": {},
  "Subdirectory": {},
  "OnPremConfig": {
    "AgentArns": {}
  },
  "MountOptions": {
    "Version": {}
  }
}
```

<h3 id="updatelocationnfs-parameters">Parameters</h3>

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
|body|body|[UpdateLocationNfsRequest](#schemaupdatelocationnfsrequest)|true|none|
|» LocationArn|body|object|true|none|
|» Subdirectory|body|object|false|none|
|» OnPremConfig|body|[OnPremConfig](#schemaonpremconfig)|false|A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.|
|» MountOptions|body|[NfsMountOptions](#schemanfsmountoptions)|false|Specifies how DataSync can access a location using the NFS protocol.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UpdateLocationNfs|

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

<h3 id="updatelocationnfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLocationNfsResponse](#schemaupdatelocationnfsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLocationObjectStorage

<a id="opIdUpdateLocationObjectStorage"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UpdateLocationObjectStorage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UpdateLocationObjectStorage' \
  -d '{
    "LocationArn": {},
    "ServerPort": {},
    "ServerProtocol": {},
    "Subdirectory": {},
    "AccessKey": {},
    "SecretKey": {},
    "AgentArns": {},
    "ServerCertificate": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.UpdateLocationObjectStorage`

Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

> Body parameter

```json
{
  "LocationArn": {},
  "ServerPort": {},
  "ServerProtocol": {},
  "Subdirectory": {},
  "AccessKey": {},
  "SecretKey": {},
  "AgentArns": {},
  "ServerCertificate": {}
}
```

<h3 id="updatelocationobjectstorage-parameters">Parameters</h3>

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
|body|body|[UpdateLocationObjectStorageRequest](#schemaupdatelocationobjectstoragerequest)|true|none|
|» LocationArn|body|object|true|none|
|» ServerPort|body|object|false|none|
|» ServerProtocol|body|object|false|none|
|» Subdirectory|body|object|false|none|
|» AccessKey|body|object|false|none|
|» SecretKey|body|object|false|none|
|» AgentArns|body|object|false|none|
|» ServerCertificate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UpdateLocationObjectStorage|

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

<h3 id="updatelocationobjectstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLocationObjectStorageResponse](#schemaupdatelocationobjectstorageresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLocationSmb

<a id="opIdUpdateLocationSmb"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UpdateLocationSmb' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UpdateLocationSmb' \
  -d '{
    "LocationArn": {},
    "Subdirectory": {},
    "User": {},
    "Domain": {},
    "Password": {},
    "AgentArns": {},
    "MountOptions": {
      "Version": {}
    }
  }'
```

`POST /#X-Amz-Target=FmrsService.UpdateLocationSmb`

Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.

> Body parameter

```json
{
  "LocationArn": {},
  "Subdirectory": {},
  "User": {},
  "Domain": {},
  "Password": {},
  "AgentArns": {},
  "MountOptions": {
    "Version": {}
  }
}
```

<h3 id="updatelocationsmb-parameters">Parameters</h3>

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
|body|body|[UpdateLocationSmbRequest](#schemaupdatelocationsmbrequest)|true|none|
|» LocationArn|body|object|true|none|
|» Subdirectory|body|object|false|none|
|» User|body|object|false|none|
|» Domain|body|object|false|none|
|» Password|body|object|false|none|
|» AgentArns|body|object|false|none|
|» MountOptions|body|[SmbMountOptions](#schemasmbmountoptions)|false|Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UpdateLocationSmb|

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

<h3 id="updatelocationsmb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLocationSmbResponse](#schemaupdatelocationsmbresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTask

<a id="opIdUpdateTask"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UpdateTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UpdateTask' \
  -d '{
    "TaskArn": {},
    "Options": {
      "VerifyMode": {},
      "OverwriteMode": {},
      "Atime": {},
      "Mtime": {},
      "Uid": {},
      "Gid": {},
      "PreserveDeletedFiles": {},
      "PreserveDevices": {},
      "PosixPermissions": {},
      "BytesPerSecond": {},
      "TaskQueueing": {},
      "LogLevel": {},
      "TransferMode": {},
      "SecurityDescriptorCopyFlags": {},
      "ObjectTags": {}
    },
    "Excludes": {},
    "Schedule": {
      "ScheduleExpression": {}
    },
    "Name": {},
    "CloudWatchLogGroupArn": {},
    "Includes": {}
  }'
```

`POST /#X-Amz-Target=FmrsService.UpdateTask`

Updates the metadata associated with a task.

> Body parameter

```json
{
  "TaskArn": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Schedule": {
    "ScheduleExpression": {}
  },
  "Name": {},
  "CloudWatchLogGroupArn": {},
  "Includes": {}
}
```

<h3 id="updatetask-parameters">Parameters</h3>

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
|body|body|[UpdateTaskRequest](#schemaupdatetaskrequest)|true|none|
|» TaskArn|body|object|true|none|
|» Options|body|[Options](#schemaoptions)|false|<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>|
|» Excludes|body|object|false|none|
|» Schedule|body|object|false|none|
|» » ScheduleExpression|body|object|true|none|
|» Name|body|object|false|none|
|» CloudWatchLogGroupArn|body|object|false|none|
|» Includes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UpdateTask|

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

<h3 id="updatetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTaskResponse](#schemaupdatetaskresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTaskExecution

<a id="opIdUpdateTaskExecution"></a>

> Code samples

```bash
curl 'https://datasync.us-east-1.amazonaws.com/#X-Amz-Target=FmrsService.UpdateTaskExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: FmrsService.UpdateTaskExecution' \
  -d '{
    "TaskExecutionArn": {},
    "Options": {
      "VerifyMode": {},
      "OverwriteMode": {},
      "Atime": {},
      "Mtime": {},
      "Uid": {},
      "Gid": {},
      "PreserveDeletedFiles": {},
      "PreserveDevices": {},
      "PosixPermissions": {},
      "BytesPerSecond": {},
      "TaskQueueing": {},
      "LogLevel": {},
      "TransferMode": {},
      "SecurityDescriptorCopyFlags": {},
      "ObjectTags": {}
    }
  }'
```

`POST /#X-Amz-Target=FmrsService.UpdateTaskExecution`

<p>Updates execution of a task.</p> <p>You can modify bandwidth throttling for a task execution that is running or queued. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p> <note> <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>.</p> </note>

> Body parameter

```json
{
  "TaskExecutionArn": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  }
}
```

<h3 id="updatetaskexecution-parameters">Parameters</h3>

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
|body|body|[UpdateTaskExecutionRequest](#schemaupdatetaskexecutionrequest)|true|none|
|» TaskExecutionArn|body|object|true|none|
|» Options|body|[Options](#schemaoptions)|true|<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|FmrsService.UpdateTaskExecution|

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

<h3 id="updatetaskexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTaskExecutionResponse](#schemaupdatetaskexecutionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelTaskExecutionResponse">CancelTaskExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceltaskexecutionresponse"></a>
<a id="schema_CancelTaskExecutionResponse"></a>
<a id="tocScanceltaskexecutionresponse"></a>
<a id="tocscanceltaskexecutionresponse"></a>

```json
{}
```

<h2 id="tocS_CancelTaskExecutionRequest">CancelTaskExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceltaskexecutionrequest"></a>
<a id="schema_CancelTaskExecutionRequest"></a>
<a id="tocScanceltaskexecutionrequest"></a>
<a id="tocscanceltaskexecutionrequest"></a>

```json
{
  "TaskExecutionArn": {}
}
```

CancelTaskExecutionRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskExecutionArn|object|true|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_InternalException">InternalException</h2>
<!-- backwards compatibility -->
<a id="schemainternalexception"></a>
<a id="schema_InternalException"></a>
<a id="tocSinternalexception"></a>
<a id="tocsinternalexception"></a>

```json
null
```

<h2 id="tocS_CreateAgentResponse">CreateAgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentresponse"></a>
<a id="schema_CreateAgentResponse"></a>
<a id="tocScreateagentresponse"></a>
<a id="tocscreateagentresponse"></a>

```json
{
  "AgentArn": {}
}
```

CreateAgentResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentArn|object|false|none|none|

<h2 id="tocS_CreateAgentRequest">CreateAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentrequest"></a>
<a id="schema_CreateAgentRequest"></a>
<a id="tocScreateagentrequest"></a>
<a id="tocscreateagentrequest"></a>

```json
{
  "ActivationKey": {},
  "AgentName": {},
  "Tags": {},
  "VpcEndpointId": {},
  "SubnetArns": {},
  "SecurityGroupArns": {}
}
```

CreateAgentRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationKey|object|true|none|none|
|AgentName|object|false|none|none|
|Tags|object|false|none|none|
|VpcEndpointId|object|false|none|none|
|SubnetArns|object|false|none|none|
|SecurityGroupArns|object|false|none|none|

<h2 id="tocS_CreateLocationEfsResponse">CreateLocationEfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationefsresponse"></a>
<a id="schema_CreateLocationEfsResponse"></a>
<a id="tocScreatelocationefsresponse"></a>
<a id="tocscreatelocationefsresponse"></a>

```json
{
  "LocationArn": {}
}
```

CreateLocationEfs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationEfsRequest">CreateLocationEfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationefsrequest"></a>
<a id="schema_CreateLocationEfsRequest"></a>
<a id="tocScreatelocationefsrequest"></a>
<a id="tocscreatelocationefsrequest"></a>

```json
{
  "Subdirectory": {},
  "EfsFilesystemArn": {},
  "Ec2Config": {
    "SubnetArn": {},
    "SecurityGroupArns": {}
  },
  "Tags": {},
  "AccessPointArn": {},
  "FileSystemAccessRoleArn": {},
  "InTransitEncryption": {}
}
```

CreateLocationEfsRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subdirectory|object|false|none|none|
|EfsFilesystemArn|object|true|none|none|
|Ec2Config|object|true|none|none|
|Tags|object|false|none|none|
|AccessPointArn|object|false|none|none|
|FileSystemAccessRoleArn|object|false|none|none|
|InTransitEncryption|object|false|none|none|

<h2 id="tocS_CreateLocationFsxLustreResponse">CreateLocationFsxLustreResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxlustreresponse"></a>
<a id="schema_CreateLocationFsxLustreResponse"></a>
<a id="tocScreatelocationfsxlustreresponse"></a>
<a id="tocscreatelocationfsxlustreresponse"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationFsxLustreRequest">CreateLocationFsxLustreRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxlustrerequest"></a>
<a id="schema_CreateLocationFsxLustreRequest"></a>
<a id="tocScreatelocationfsxlustrerequest"></a>
<a id="tocscreatelocationfsxlustrerequest"></a>

```json
{
  "FsxFilesystemArn": {},
  "SecurityGroupArns": {},
  "Subdirectory": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FsxFilesystemArn|object|true|none|none|
|SecurityGroupArns|object|true|none|none|
|Subdirectory|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLocationFsxOntapResponse">CreateLocationFsxOntapResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxontapresponse"></a>
<a id="schema_CreateLocationFsxOntapResponse"></a>
<a id="tocScreatelocationfsxontapresponse"></a>
<a id="tocscreatelocationfsxontapresponse"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationFsxOntapRequest">CreateLocationFsxOntapRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxontaprequest"></a>
<a id="schema_CreateLocationFsxOntapRequest"></a>
<a id="tocScreatelocationfsxontaprequest"></a>
<a id="tocscreatelocationfsxontaprequest"></a>

```json
{
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "SecurityGroupArns": {},
  "StorageVirtualMachineArn": {},
  "Subdirectory": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|[FsxProtocol](#schemafsxprotocol)|true|none|Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.|
|SecurityGroupArns|object|true|none|none|
|StorageVirtualMachineArn|object|true|none|none|
|Subdirectory|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLocationFsxOpenZfsResponse">CreateLocationFsxOpenZfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxopenzfsresponse"></a>
<a id="schema_CreateLocationFsxOpenZfsResponse"></a>
<a id="tocScreatelocationfsxopenzfsresponse"></a>
<a id="tocscreatelocationfsxopenzfsresponse"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationFsxOpenZfsRequest">CreateLocationFsxOpenZfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxopenzfsrequest"></a>
<a id="schema_CreateLocationFsxOpenZfsRequest"></a>
<a id="tocScreatelocationfsxopenzfsrequest"></a>
<a id="tocscreatelocationfsxopenzfsrequest"></a>

```json
{
  "FsxFilesystemArn": {},
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "SecurityGroupArns": {},
  "Subdirectory": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FsxFilesystemArn|object|true|none|none|
|Protocol|object|true|none|none|
|SecurityGroupArns|object|true|none|none|
|Subdirectory|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLocationFsxWindowsResponse">CreateLocationFsxWindowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxwindowsresponse"></a>
<a id="schema_CreateLocationFsxWindowsResponse"></a>
<a id="tocScreatelocationfsxwindowsresponse"></a>
<a id="tocscreatelocationfsxwindowsresponse"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationFsxWindowsRequest">CreateLocationFsxWindowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationfsxwindowsrequest"></a>
<a id="schema_CreateLocationFsxWindowsRequest"></a>
<a id="tocScreatelocationfsxwindowsrequest"></a>
<a id="tocscreatelocationfsxwindowsrequest"></a>

```json
{
  "Subdirectory": {},
  "FsxFilesystemArn": {},
  "SecurityGroupArns": {},
  "Tags": {},
  "User": {},
  "Domain": {},
  "Password": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subdirectory|object|false|none|none|
|FsxFilesystemArn|object|true|none|none|
|SecurityGroupArns|object|true|none|none|
|Tags|object|false|none|none|
|User|object|true|none|none|
|Domain|object|false|none|none|
|Password|object|true|none|none|

<h2 id="tocS_CreateLocationHdfsResponse">CreateLocationHdfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationhdfsresponse"></a>
<a id="schema_CreateLocationHdfsResponse"></a>
<a id="tocScreatelocationhdfsresponse"></a>
<a id="tocscreatelocationhdfsresponse"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationHdfsRequest">CreateLocationHdfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationhdfsrequest"></a>
<a id="schema_CreateLocationHdfsRequest"></a>
<a id="tocScreatelocationhdfsrequest"></a>
<a id="tocscreatelocationhdfsrequest"></a>

```json
{
  "Subdirectory": {},
  "NameNodes": {},
  "BlockSize": {},
  "ReplicationFactor": {},
  "KmsKeyProviderUri": {},
  "QopConfiguration": {
    "RpcProtection": {},
    "DataTransferProtection": {}
  },
  "AuthenticationType": {},
  "SimpleUser": {},
  "KerberosPrincipal": {},
  "KerberosKeytab": {},
  "KerberosKrb5Conf": {},
  "AgentArns": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subdirectory|object|false|none|none|
|NameNodes|object|true|none|none|
|BlockSize|object|false|none|none|
|ReplicationFactor|object|false|none|none|
|KmsKeyProviderUri|object|false|none|none|
|QopConfiguration|object|false|none|none|
|AuthenticationType|object|true|none|none|
|SimpleUser|object|false|none|none|
|KerberosPrincipal|object|false|none|none|
|KerberosKeytab|object|false|none|none|
|KerberosKrb5Conf|object|false|none|none|
|AgentArns|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLocationNfsResponse">CreateLocationNfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationnfsresponse"></a>
<a id="schema_CreateLocationNfsResponse"></a>
<a id="tocScreatelocationnfsresponse"></a>
<a id="tocscreatelocationnfsresponse"></a>

```json
{
  "LocationArn": {}
}
```

CreateLocationNfsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationNfsRequest">CreateLocationNfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationnfsrequest"></a>
<a id="schema_CreateLocationNfsRequest"></a>
<a id="tocScreatelocationnfsrequest"></a>
<a id="tocscreatelocationnfsrequest"></a>

```json
{
  "Subdirectory": {},
  "ServerHostname": {},
  "OnPremConfig": {
    "AgentArns": {}
  },
  "MountOptions": {
    "Version": {}
  },
  "Tags": {}
}
```

CreateLocationNfsRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subdirectory|object|true|none|none|
|ServerHostname|object|true|none|none|
|OnPremConfig|object|true|none|none|
|MountOptions|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLocationObjectStorageResponse">CreateLocationObjectStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationobjectstorageresponse"></a>
<a id="schema_CreateLocationObjectStorageResponse"></a>
<a id="tocScreatelocationobjectstorageresponse"></a>
<a id="tocscreatelocationobjectstorageresponse"></a>

```json
{
  "LocationArn": {}
}
```

CreateLocationObjectStorageResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationObjectStorageRequest">CreateLocationObjectStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationobjectstoragerequest"></a>
<a id="schema_CreateLocationObjectStorageRequest"></a>
<a id="tocScreatelocationobjectstoragerequest"></a>
<a id="tocscreatelocationobjectstoragerequest"></a>

```json
{
  "ServerHostname": {},
  "ServerPort": {},
  "ServerProtocol": {},
  "Subdirectory": {},
  "BucketName": {},
  "AccessKey": {},
  "SecretKey": {},
  "AgentArns": {},
  "Tags": {},
  "ServerCertificate": {}
}
```

CreateLocationObjectStorageRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerHostname|object|true|none|none|
|ServerPort|object|false|none|none|
|ServerProtocol|object|false|none|none|
|Subdirectory|object|false|none|none|
|BucketName|object|true|none|none|
|AccessKey|object|false|none|none|
|SecretKey|object|false|none|none|
|AgentArns|object|true|none|none|
|Tags|object|false|none|none|
|ServerCertificate|object|false|none|none|

<h2 id="tocS_CreateLocationS3Response">CreateLocationS3Response</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocations3response"></a>
<a id="schema_CreateLocationS3Response"></a>
<a id="tocScreatelocations3response"></a>
<a id="tocscreatelocations3response"></a>

```json
{
  "LocationArn": {}
}
```

CreateLocationS3Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationS3Request">CreateLocationS3Request</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocations3request"></a>
<a id="schema_CreateLocationS3Request"></a>
<a id="tocScreatelocations3request"></a>
<a id="tocscreatelocations3request"></a>

```json
{
  "Subdirectory": {},
  "S3BucketArn": {},
  "S3StorageClass": {},
  "S3Config": {
    "BucketAccessRoleArn": {}
  },
  "AgentArns": {},
  "Tags": {}
}
```

CreateLocationS3Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subdirectory|object|false|none|none|
|S3BucketArn|object|true|none|none|
|S3StorageClass|object|false|none|none|
|S3Config|[S3Config](#schemas3config)|true|none|<p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>|
|AgentArns|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLocationSmbResponse">CreateLocationSmbResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationsmbresponse"></a>
<a id="schema_CreateLocationSmbResponse"></a>
<a id="tocScreatelocationsmbresponse"></a>
<a id="tocscreatelocationsmbresponse"></a>

```json
{
  "LocationArn": {}
}
```

CreateLocationSmbResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|

<h2 id="tocS_CreateLocationSmbRequest">CreateLocationSmbRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationsmbrequest"></a>
<a id="schema_CreateLocationSmbRequest"></a>
<a id="tocScreatelocationsmbrequest"></a>
<a id="tocscreatelocationsmbrequest"></a>

```json
{
  "Subdirectory": {},
  "ServerHostname": {},
  "User": {},
  "Domain": {},
  "Password": {},
  "AgentArns": {},
  "MountOptions": {
    "Version": {}
  },
  "Tags": {}
}
```

CreateLocationSmbRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subdirectory|object|true|none|none|
|ServerHostname|object|true|none|none|
|User|object|true|none|none|
|Domain|object|false|none|none|
|Password|object|true|none|none|
|AgentArns|object|true|none|none|
|MountOptions|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateTaskResponse">CreateTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetaskresponse"></a>
<a id="schema_CreateTaskResponse"></a>
<a id="tocScreatetaskresponse"></a>
<a id="tocscreatetaskresponse"></a>

```json
{
  "TaskArn": {}
}
```

CreateTaskResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|false|none|none|

<h2 id="tocS_CreateTaskRequest">CreateTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetaskrequest"></a>
<a id="schema_CreateTaskRequest"></a>
<a id="tocScreatetaskrequest"></a>
<a id="tocscreatetaskrequest"></a>

```json
{
  "SourceLocationArn": {},
  "DestinationLocationArn": {},
  "CloudWatchLogGroupArn": {},
  "Name": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Schedule": {
    "ScheduleExpression": {}
  },
  "Tags": {},
  "Includes": {}
}
```

CreateTaskRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceLocationArn|object|true|none|none|
|DestinationLocationArn|object|true|none|none|
|CloudWatchLogGroupArn|object|false|none|none|
|Name|object|false|none|none|
|Options|object|false|none|none|
|Excludes|object|false|none|none|
|Schedule|object|false|none|none|
|Tags|object|false|none|none|
|Includes|object|false|none|none|

<h2 id="tocS_DeleteAgentResponse">DeleteAgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteagentresponse"></a>
<a id="schema_DeleteAgentResponse"></a>
<a id="tocSdeleteagentresponse"></a>
<a id="tocsdeleteagentresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAgentRequest">DeleteAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteagentrequest"></a>
<a id="schema_DeleteAgentRequest"></a>
<a id="tocSdeleteagentrequest"></a>
<a id="tocsdeleteagentrequest"></a>

```json
{
  "AgentArn": {}
}
```

DeleteAgentRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentArn|object|true|none|none|

<h2 id="tocS_DeleteLocationResponse">DeleteLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelocationresponse"></a>
<a id="schema_DeleteLocationResponse"></a>
<a id="tocSdeletelocationresponse"></a>
<a id="tocsdeletelocationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLocationRequest">DeleteLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelocationrequest"></a>
<a id="schema_DeleteLocationRequest"></a>
<a id="tocSdeletelocationrequest"></a>
<a id="tocsdeletelocationrequest"></a>

```json
{
  "LocationArn": {}
}
```

DeleteLocation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DeleteTaskResponse">DeleteTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetaskresponse"></a>
<a id="schema_DeleteTaskResponse"></a>
<a id="tocSdeletetaskresponse"></a>
<a id="tocsdeletetaskresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteTaskRequest">DeleteTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetaskrequest"></a>
<a id="schema_DeleteTaskRequest"></a>
<a id="tocSdeletetaskrequest"></a>
<a id="tocsdeletetaskrequest"></a>

```json
{
  "TaskArn": {}
}
```

DeleteTask

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|true|none|none|

<h2 id="tocS_DescribeAgentResponse">DescribeAgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentresponse"></a>
<a id="schema_DescribeAgentResponse"></a>
<a id="tocSdescribeagentresponse"></a>
<a id="tocsdescribeagentresponse"></a>

```json
{
  "AgentArn": {},
  "Name": {},
  "Status": {},
  "LastConnectionTime": {},
  "CreationTime": {},
  "EndpointType": {},
  "PrivateLinkConfig": {
    "VpcEndpointId": {},
    "PrivateLinkEndpoint": {},
    "SubnetArns": {},
    "SecurityGroupArns": {}
  }
}
```

DescribeAgentResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentArn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|LastConnectionTime|object|false|none|none|
|CreationTime|object|false|none|none|
|EndpointType|object|false|none|none|
|PrivateLinkConfig|object|false|none|none|

<h2 id="tocS_DescribeAgentRequest">DescribeAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentrequest"></a>
<a id="schema_DescribeAgentRequest"></a>
<a id="tocSdescribeagentrequest"></a>
<a id="tocsdescribeagentrequest"></a>

```json
{
  "AgentArn": {}
}
```

DescribeAgent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentArn|object|true|none|none|

<h2 id="tocS_DescribeLocationEfsResponse">DescribeLocationEfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationefsresponse"></a>
<a id="schema_DescribeLocationEfsResponse"></a>
<a id="tocSdescribelocationefsresponse"></a>
<a id="tocsdescribelocationefsresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "Ec2Config": {
    "SubnetArn": {},
    "SecurityGroupArns": {}
  },
  "CreationTime": {},
  "AccessPointArn": {},
  "FileSystemAccessRoleArn": {},
  "InTransitEncryption": {}
}
```

DescribeLocationEfsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|Ec2Config|[Ec2Config](#schemaec2config)|false|none|The subnet and security groups that DataSync uses to access your Amazon EFS file system.|
|CreationTime|object|false|none|none|
|AccessPointArn|object|false|none|none|
|FileSystemAccessRoleArn|object|false|none|none|
|InTransitEncryption|object|false|none|none|

<h2 id="tocS_DescribeLocationEfsRequest">DescribeLocationEfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationefsrequest"></a>
<a id="schema_DescribeLocationEfsRequest"></a>
<a id="tocSdescribelocationefsrequest"></a>
<a id="tocsdescribelocationefsrequest"></a>

```json
{
  "LocationArn": {}
}
```

DescribeLocationEfsRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationFsxLustreResponse">DescribeLocationFsxLustreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxlustreresponse"></a>
<a id="schema_DescribeLocationFsxLustreResponse"></a>
<a id="tocSdescribelocationfsxlustreresponse"></a>
<a id="tocsdescribelocationfsxlustreresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "SecurityGroupArns": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|SecurityGroupArns|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_DescribeLocationFsxLustreRequest">DescribeLocationFsxLustreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxlustrerequest"></a>
<a id="schema_DescribeLocationFsxLustreRequest"></a>
<a id="tocSdescribelocationfsxlustrerequest"></a>
<a id="tocsdescribelocationfsxlustrerequest"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationFsxOntapResponse">DescribeLocationFsxOntapResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxontapresponse"></a>
<a id="schema_DescribeLocationFsxOntapResponse"></a>
<a id="tocSdescribelocationfsxontapresponse"></a>
<a id="tocsdescribelocationfsxontapresponse"></a>

```json
{
  "CreationTime": {},
  "LocationArn": {},
  "LocationUri": {},
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "SecurityGroupArns": {},
  "StorageVirtualMachineArn": {},
  "FsxFilesystemArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTime|object|false|none|none|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|Protocol|[FsxProtocol](#schemafsxprotocol)|false|none|Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.|
|SecurityGroupArns|object|false|none|none|
|StorageVirtualMachineArn|object|false|none|none|
|FsxFilesystemArn|object|false|none|none|

<h2 id="tocS_DescribeLocationFsxOntapRequest">DescribeLocationFsxOntapRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxontaprequest"></a>
<a id="schema_DescribeLocationFsxOntapRequest"></a>
<a id="tocSdescribelocationfsxontaprequest"></a>
<a id="tocsdescribelocationfsxontaprequest"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationFsxOpenZfsResponse">DescribeLocationFsxOpenZfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxopenzfsresponse"></a>
<a id="schema_DescribeLocationFsxOpenZfsResponse"></a>
<a id="tocSdescribelocationfsxopenzfsresponse"></a>
<a id="tocsdescribelocationfsxopenzfsresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "SecurityGroupArns": {},
  "Protocol": {
    "NFS": {
      "MountOptions": {
        "Version": {}
      }
    },
    "SMB": {
      "Domain": {},
      "MountOptions": {
        "Version": {}
      },
      "Password": {},
      "User": {}
    }
  },
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|SecurityGroupArns|object|false|none|none|
|Protocol|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_DescribeLocationFsxOpenZfsRequest">DescribeLocationFsxOpenZfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxopenzfsrequest"></a>
<a id="schema_DescribeLocationFsxOpenZfsRequest"></a>
<a id="tocSdescribelocationfsxopenzfsrequest"></a>
<a id="tocsdescribelocationfsxopenzfsrequest"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationFsxWindowsResponse">DescribeLocationFsxWindowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxwindowsresponse"></a>
<a id="schema_DescribeLocationFsxWindowsResponse"></a>
<a id="tocSdescribelocationfsxwindowsresponse"></a>
<a id="tocsdescribelocationfsxwindowsresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "SecurityGroupArns": {},
  "CreationTime": {},
  "User": {},
  "Domain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|SecurityGroupArns|object|false|none|none|
|CreationTime|object|false|none|none|
|User|object|false|none|none|
|Domain|object|false|none|none|

<h2 id="tocS_DescribeLocationFsxWindowsRequest">DescribeLocationFsxWindowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationfsxwindowsrequest"></a>
<a id="schema_DescribeLocationFsxWindowsRequest"></a>
<a id="tocSdescribelocationfsxwindowsrequest"></a>
<a id="tocsdescribelocationfsxwindowsrequest"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationHdfsResponse">DescribeLocationHdfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationhdfsresponse"></a>
<a id="schema_DescribeLocationHdfsResponse"></a>
<a id="tocSdescribelocationhdfsresponse"></a>
<a id="tocsdescribelocationhdfsresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "NameNodes": {},
  "BlockSize": {},
  "ReplicationFactor": {},
  "KmsKeyProviderUri": {},
  "QopConfiguration": {
    "RpcProtection": {},
    "DataTransferProtection": {}
  },
  "AuthenticationType": {},
  "SimpleUser": {},
  "KerberosPrincipal": {},
  "AgentArns": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|NameNodes|object|false|none|none|
|BlockSize|object|false|none|none|
|ReplicationFactor|object|false|none|none|
|KmsKeyProviderUri|object|false|none|none|
|QopConfiguration|object|false|none|none|
|AuthenticationType|object|false|none|none|
|SimpleUser|object|false|none|none|
|KerberosPrincipal|object|false|none|none|
|AgentArns|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_DescribeLocationHdfsRequest">DescribeLocationHdfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationhdfsrequest"></a>
<a id="schema_DescribeLocationHdfsRequest"></a>
<a id="tocSdescribelocationhdfsrequest"></a>
<a id="tocsdescribelocationhdfsrequest"></a>

```json
{
  "LocationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationNfsResponse">DescribeLocationNfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationnfsresponse"></a>
<a id="schema_DescribeLocationNfsResponse"></a>
<a id="tocSdescribelocationnfsresponse"></a>
<a id="tocsdescribelocationnfsresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "OnPremConfig": {
    "AgentArns": {}
  },
  "MountOptions": {
    "Version": {}
  },
  "CreationTime": {}
}
```

DescribeLocationNfsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|OnPremConfig|[OnPremConfig](#schemaonpremconfig)|false|none|A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.|
|MountOptions|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_DescribeLocationNfsRequest">DescribeLocationNfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationnfsrequest"></a>
<a id="schema_DescribeLocationNfsRequest"></a>
<a id="tocSdescribelocationnfsrequest"></a>
<a id="tocsdescribelocationnfsrequest"></a>

```json
{
  "LocationArn": {}
}
```

DescribeLocationNfsRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationObjectStorageResponse">DescribeLocationObjectStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationobjectstorageresponse"></a>
<a id="schema_DescribeLocationObjectStorageResponse"></a>
<a id="tocSdescribelocationobjectstorageresponse"></a>
<a id="tocsdescribelocationobjectstorageresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "AccessKey": {},
  "ServerPort": {},
  "ServerProtocol": {},
  "AgentArns": {},
  "CreationTime": {},
  "ServerCertificate": {}
}
```

DescribeLocationObjectStorageResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|AccessKey|object|false|none|none|
|ServerPort|object|false|none|none|
|ServerProtocol|object|false|none|none|
|AgentArns|object|false|none|none|
|CreationTime|object|false|none|none|
|ServerCertificate|object|false|none|none|

<h2 id="tocS_DescribeLocationObjectStorageRequest">DescribeLocationObjectStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationobjectstoragerequest"></a>
<a id="schema_DescribeLocationObjectStorageRequest"></a>
<a id="tocSdescribelocationobjectstoragerequest"></a>
<a id="tocsdescribelocationobjectstoragerequest"></a>

```json
{
  "LocationArn": {}
}
```

DescribeLocationObjectStorageRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationS3Response">DescribeLocationS3Response</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocations3response"></a>
<a id="schema_DescribeLocationS3Response"></a>
<a id="tocSdescribelocations3response"></a>
<a id="tocsdescribelocations3response"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "S3StorageClass": {},
  "S3Config": {
    "BucketAccessRoleArn": {}
  },
  "AgentArns": {},
  "CreationTime": {}
}
```

DescribeLocationS3Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|S3StorageClass|object|false|none|none|
|S3Config|[S3Config](#schemas3config)|false|none|<p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>|
|AgentArns|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_DescribeLocationS3Request">DescribeLocationS3Request</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocations3request"></a>
<a id="schema_DescribeLocationS3Request"></a>
<a id="tocSdescribelocations3request"></a>
<a id="tocsdescribelocations3request"></a>

```json
{
  "LocationArn": {}
}
```

DescribeLocationS3Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeLocationSmbResponse">DescribeLocationSmbResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationsmbresponse"></a>
<a id="schema_DescribeLocationSmbResponse"></a>
<a id="tocSdescribelocationsmbresponse"></a>
<a id="tocsdescribelocationsmbresponse"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {},
  "AgentArns": {},
  "User": {},
  "Domain": {},
  "MountOptions": {
    "Version": {}
  },
  "CreationTime": {}
}
```

DescribeLocationSmbResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|
|AgentArns|object|false|none|none|
|User|object|false|none|none|
|Domain|object|false|none|none|
|MountOptions|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_DescribeLocationSmbRequest">DescribeLocationSmbRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelocationsmbrequest"></a>
<a id="schema_DescribeLocationSmbRequest"></a>
<a id="tocSdescribelocationsmbrequest"></a>
<a id="tocsdescribelocationsmbrequest"></a>

```json
{
  "LocationArn": {}
}
```

DescribeLocationSmbRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|

<h2 id="tocS_DescribeTaskResponse">DescribeTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaskresponse"></a>
<a id="schema_DescribeTaskResponse"></a>
<a id="tocSdescribetaskresponse"></a>
<a id="tocsdescribetaskresponse"></a>

```json
{
  "TaskArn": {},
  "Status": {},
  "Name": {},
  "CurrentTaskExecutionArn": {},
  "SourceLocationArn": {},
  "DestinationLocationArn": {},
  "CloudWatchLogGroupArn": {},
  "SourceNetworkInterfaceArns": {},
  "DestinationNetworkInterfaceArns": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Schedule": {
    "ScheduleExpression": {}
  },
  "ErrorCode": {},
  "ErrorDetail": {},
  "CreationTime": {},
  "Includes": {}
}
```

DescribeTaskResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|false|none|none|
|Status|object|false|none|none|
|Name|object|false|none|none|
|CurrentTaskExecutionArn|object|false|none|none|
|SourceLocationArn|object|false|none|none|
|DestinationLocationArn|object|false|none|none|
|CloudWatchLogGroupArn|object|false|none|none|
|SourceNetworkInterfaceArns|object|false|none|none|
|DestinationNetworkInterfaceArns|object|false|none|none|
|Options|object|false|none|none|
|Excludes|object|false|none|none|
|Schedule|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorDetail|object|false|none|none|
|CreationTime|object|false|none|none|
|Includes|object|false|none|none|

<h2 id="tocS_DescribeTaskRequest">DescribeTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaskrequest"></a>
<a id="schema_DescribeTaskRequest"></a>
<a id="tocSdescribetaskrequest"></a>
<a id="tocsdescribetaskrequest"></a>

```json
{
  "TaskArn": {}
}
```

DescribeTaskRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|true|none|none|

<h2 id="tocS_DescribeTaskExecutionResponse">DescribeTaskExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaskexecutionresponse"></a>
<a id="schema_DescribeTaskExecutionResponse"></a>
<a id="tocSdescribetaskexecutionresponse"></a>
<a id="tocsdescribetaskexecutionresponse"></a>

```json
{
  "TaskExecutionArn": {},
  "Status": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Includes": {},
  "StartTime": {},
  "EstimatedFilesToTransfer": {},
  "EstimatedBytesToTransfer": {},
  "FilesTransferred": {},
  "BytesWritten": {},
  "BytesTransferred": {},
  "Result": {
    "PrepareDuration": {},
    "PrepareStatus": {},
    "TotalDuration": {},
    "TransferDuration": {},
    "TransferStatus": {},
    "VerifyDuration": {},
    "VerifyStatus": {},
    "ErrorCode": {},
    "ErrorDetail": {}
  },
  "BytesCompressed": {}
}
```

DescribeTaskExecutionResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskExecutionArn|object|false|none|none|
|Status|object|false|none|none|
|Options|[Options](#schemaoptions)|false|none|<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>|
|Excludes|object|false|none|none|
|Includes|object|false|none|none|
|StartTime|object|false|none|none|
|EstimatedFilesToTransfer|object|false|none|none|
|EstimatedBytesToTransfer|object|false|none|none|
|FilesTransferred|object|false|none|none|
|BytesWritten|object|false|none|none|
|BytesTransferred|object|false|none|none|
|Result|object|false|none|none|
|BytesCompressed|object|false|none|none|

<h2 id="tocS_DescribeTaskExecutionRequest">DescribeTaskExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaskexecutionrequest"></a>
<a id="schema_DescribeTaskExecutionRequest"></a>
<a id="tocSdescribetaskexecutionrequest"></a>
<a id="tocsdescribetaskexecutionrequest"></a>

```json
{
  "TaskExecutionArn": {}
}
```

DescribeTaskExecutionRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskExecutionArn|object|true|none|none|

<h2 id="tocS_ListAgentsResponse">ListAgentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistagentsresponse"></a>
<a id="schema_ListAgentsResponse"></a>
<a id="tocSlistagentsresponse"></a>
<a id="tocslistagentsresponse"></a>

```json
{
  "Agents": {},
  "NextToken": {}
}
```

ListAgentsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Agents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAgentsRequest">ListAgentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistagentsrequest"></a>
<a id="schema_ListAgentsRequest"></a>
<a id="tocSlistagentsrequest"></a>
<a id="tocslistagentsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

ListAgentsRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "Locations": {},
  "NextToken": {}
}
```

ListLocationsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Locations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLocationsRequest">ListLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsrequest"></a>
<a id="schema_ListLocationsRequest"></a>
<a id="tocSlistlocationsrequest"></a>
<a id="tocslistlocationsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

ListLocationsRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

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

ListTagsForResourceResponse

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
  "ResourceArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

ListTagsForResourceRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTaskExecutionsResponse">ListTaskExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttaskexecutionsresponse"></a>
<a id="schema_ListTaskExecutionsResponse"></a>
<a id="tocSlisttaskexecutionsresponse"></a>
<a id="tocslisttaskexecutionsresponse"></a>

```json
{
  "TaskExecutions": {},
  "NextToken": {}
}
```

ListTaskExecutionsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskExecutions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTaskExecutionsRequest">ListTaskExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttaskexecutionsrequest"></a>
<a id="schema_ListTaskExecutionsRequest"></a>
<a id="tocSlisttaskexecutionsrequest"></a>
<a id="tocslisttaskexecutionsrequest"></a>

```json
{
  "TaskArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

ListTaskExecutions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTasksResponse">ListTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttasksresponse"></a>
<a id="schema_ListTasksResponse"></a>
<a id="tocSlisttasksresponse"></a>
<a id="tocslisttasksresponse"></a>

```json
{
  "Tasks": {},
  "NextToken": {}
}
```

ListTasksResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tasks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTasksRequest">ListTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttasksrequest"></a>
<a id="schema_ListTasksRequest"></a>
<a id="tocSlisttasksrequest"></a>
<a id="tocslisttasksrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

ListTasksRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_StartTaskExecutionResponse">StartTaskExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttaskexecutionresponse"></a>
<a id="schema_StartTaskExecutionResponse"></a>
<a id="tocSstarttaskexecutionresponse"></a>
<a id="tocsstarttaskexecutionresponse"></a>

```json
{
  "TaskExecutionArn": {}
}
```

StartTaskExecutionResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskExecutionArn|object|false|none|none|

<h2 id="tocS_StartTaskExecutionRequest">StartTaskExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttaskexecutionrequest"></a>
<a id="schema_StartTaskExecutionRequest"></a>
<a id="tocSstarttaskexecutionrequest"></a>
<a id="tocsstarttaskexecutionrequest"></a>

```json
{
  "TaskArn": {},
  "OverrideOptions": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Includes": {},
  "Excludes": {},
  "Tags": {}
}
```

StartTaskExecutionRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|true|none|none|
|OverrideOptions|[Options](#schemaoptions)|false|none|<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>|
|Includes|object|false|none|none|
|Excludes|object|false|none|none|
|Tags|object|false|none|none|

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
  "Tags": {}
}
```

TagResourceRequest

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
  "Keys": {}
}
```

UntagResourceRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Keys|object|true|none|none|

<h2 id="tocS_UpdateAgentResponse">UpdateAgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentresponse"></a>
<a id="schema_UpdateAgentResponse"></a>
<a id="tocSupdateagentresponse"></a>
<a id="tocsupdateagentresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAgentRequest">UpdateAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentrequest"></a>
<a id="schema_UpdateAgentRequest"></a>
<a id="tocSupdateagentrequest"></a>
<a id="tocsupdateagentrequest"></a>

```json
{
  "AgentArn": {},
  "Name": {}
}
```

UpdateAgentRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentArn|object|true|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateLocationHdfsResponse">UpdateLocationHdfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationhdfsresponse"></a>
<a id="schema_UpdateLocationHdfsResponse"></a>
<a id="tocSupdatelocationhdfsresponse"></a>
<a id="tocsupdatelocationhdfsresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLocationHdfsRequest">UpdateLocationHdfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationhdfsrequest"></a>
<a id="schema_UpdateLocationHdfsRequest"></a>
<a id="tocSupdatelocationhdfsrequest"></a>
<a id="tocsupdatelocationhdfsrequest"></a>

```json
{
  "LocationArn": {},
  "Subdirectory": {},
  "NameNodes": {},
  "BlockSize": {},
  "ReplicationFactor": {},
  "KmsKeyProviderUri": {},
  "QopConfiguration": {
    "RpcProtection": {},
    "DataTransferProtection": {}
  },
  "AuthenticationType": {},
  "SimpleUser": {},
  "KerberosPrincipal": {},
  "KerberosKeytab": {},
  "KerberosKrb5Conf": {},
  "AgentArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|
|Subdirectory|object|false|none|none|
|NameNodes|object|false|none|none|
|BlockSize|object|false|none|none|
|ReplicationFactor|object|false|none|none|
|KmsKeyProviderUri|object|false|none|none|
|QopConfiguration|object|false|none|none|
|AuthenticationType|object|false|none|none|
|SimpleUser|object|false|none|none|
|KerberosPrincipal|object|false|none|none|
|KerberosKeytab|object|false|none|none|
|KerberosKrb5Conf|object|false|none|none|
|AgentArns|object|false|none|none|

<h2 id="tocS_UpdateLocationNfsResponse">UpdateLocationNfsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationnfsresponse"></a>
<a id="schema_UpdateLocationNfsResponse"></a>
<a id="tocSupdatelocationnfsresponse"></a>
<a id="tocsupdatelocationnfsresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLocationNfsRequest">UpdateLocationNfsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationnfsrequest"></a>
<a id="schema_UpdateLocationNfsRequest"></a>
<a id="tocSupdatelocationnfsrequest"></a>
<a id="tocsupdatelocationnfsrequest"></a>

```json
{
  "LocationArn": {},
  "Subdirectory": {},
  "OnPremConfig": {
    "AgentArns": {}
  },
  "MountOptions": {
    "Version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|
|Subdirectory|object|false|none|none|
|OnPremConfig|[OnPremConfig](#schemaonpremconfig)|false|none|A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.|
|MountOptions|[NfsMountOptions](#schemanfsmountoptions)|false|none|Specifies how DataSync can access a location using the NFS protocol.|

<h2 id="tocS_UpdateLocationObjectStorageResponse">UpdateLocationObjectStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationobjectstorageresponse"></a>
<a id="schema_UpdateLocationObjectStorageResponse"></a>
<a id="tocSupdatelocationobjectstorageresponse"></a>
<a id="tocsupdatelocationobjectstorageresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLocationObjectStorageRequest">UpdateLocationObjectStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationobjectstoragerequest"></a>
<a id="schema_UpdateLocationObjectStorageRequest"></a>
<a id="tocSupdatelocationobjectstoragerequest"></a>
<a id="tocsupdatelocationobjectstoragerequest"></a>

```json
{
  "LocationArn": {},
  "ServerPort": {},
  "ServerProtocol": {},
  "Subdirectory": {},
  "AccessKey": {},
  "SecretKey": {},
  "AgentArns": {},
  "ServerCertificate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|
|ServerPort|object|false|none|none|
|ServerProtocol|object|false|none|none|
|Subdirectory|object|false|none|none|
|AccessKey|object|false|none|none|
|SecretKey|object|false|none|none|
|AgentArns|object|false|none|none|
|ServerCertificate|object|false|none|none|

<h2 id="tocS_UpdateLocationSmbResponse">UpdateLocationSmbResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationsmbresponse"></a>
<a id="schema_UpdateLocationSmbResponse"></a>
<a id="tocSupdatelocationsmbresponse"></a>
<a id="tocsupdatelocationsmbresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLocationSmbRequest">UpdateLocationSmbRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelocationsmbrequest"></a>
<a id="schema_UpdateLocationSmbRequest"></a>
<a id="tocSupdatelocationsmbrequest"></a>
<a id="tocsupdatelocationsmbrequest"></a>

```json
{
  "LocationArn": {},
  "Subdirectory": {},
  "User": {},
  "Domain": {},
  "Password": {},
  "AgentArns": {},
  "MountOptions": {
    "Version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|true|none|none|
|Subdirectory|object|false|none|none|
|User|object|false|none|none|
|Domain|object|false|none|none|
|Password|object|false|none|none|
|AgentArns|object|false|none|none|
|MountOptions|[SmbMountOptions](#schemasmbmountoptions)|false|none|Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.|

<h2 id="tocS_UpdateTaskResponse">UpdateTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskresponse"></a>
<a id="schema_UpdateTaskResponse"></a>
<a id="tocSupdatetaskresponse"></a>
<a id="tocsupdatetaskresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateTaskRequest">UpdateTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskrequest"></a>
<a id="schema_UpdateTaskRequest"></a>
<a id="tocSupdatetaskrequest"></a>
<a id="tocsupdatetaskrequest"></a>

```json
{
  "TaskArn": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  },
  "Excludes": {},
  "Schedule": {
    "ScheduleExpression": {}
  },
  "Name": {},
  "CloudWatchLogGroupArn": {},
  "Includes": {}
}
```

UpdateTaskResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|true|none|none|
|Options|[Options](#schemaoptions)|false|none|<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>|
|Excludes|object|false|none|none|
|Schedule|object|false|none|none|
|Name|object|false|none|none|
|CloudWatchLogGroupArn|object|false|none|none|
|Includes|object|false|none|none|

<h2 id="tocS_UpdateTaskExecutionResponse">UpdateTaskExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskexecutionresponse"></a>
<a id="schema_UpdateTaskExecutionResponse"></a>
<a id="tocSupdatetaskexecutionresponse"></a>
<a id="tocsupdatetaskexecutionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateTaskExecutionRequest">UpdateTaskExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskexecutionrequest"></a>
<a id="schema_UpdateTaskExecutionRequest"></a>
<a id="tocSupdatetaskexecutionrequest"></a>
<a id="tocsupdatetaskexecutionrequest"></a>

```json
{
  "TaskExecutionArn": {},
  "Options": {
    "VerifyMode": {},
    "OverwriteMode": {},
    "Atime": {},
    "Mtime": {},
    "Uid": {},
    "Gid": {},
    "PreserveDeletedFiles": {},
    "PreserveDevices": {},
    "PosixPermissions": {},
    "BytesPerSecond": {},
    "TaskQueueing": {},
    "LogLevel": {},
    "TransferMode": {},
    "SecurityDescriptorCopyFlags": {},
    "ObjectTags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskExecutionArn|object|true|none|none|
|Options|[Options](#schemaoptions)|true|none|<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>|

<h2 id="tocS_ActivationKey">ActivationKey</h2>
<!-- backwards compatibility -->
<a id="schemaactivationkey"></a>
<a id="schema_ActivationKey"></a>
<a id="tocSactivationkey"></a>
<a id="tocsactivationkey"></a>

```json
"string"
```

<h2 id="tocS_AgentArn">AgentArn</h2>
<!-- backwards compatibility -->
<a id="schemaagentarn"></a>
<a id="schema_AgentArn"></a>
<a id="tocSagentarn"></a>
<a id="tocsagentarn"></a>

```json
"string"
```

<h2 id="tocS_AgentArnList">AgentArnList</h2>
<!-- backwards compatibility -->
<a id="schemaagentarnlist"></a>
<a id="schema_AgentArnList"></a>
<a id="tocSagentarnlist"></a>
<a id="tocsagentarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AgentListEntry">AgentListEntry</h2>
<!-- backwards compatibility -->
<a id="schemaagentlistentry"></a>
<a id="schema_AgentListEntry"></a>
<a id="tocSagentlistentry"></a>
<a id="tocsagentlistentry"></a>

```json
{
  "AgentArn": {},
  "Name": {},
  "Status": {}
}
```

Represents a single entry in a list (or array) of DataSync agents when you call the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentArn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_AgentList">AgentList</h2>
<!-- backwards compatibility -->
<a id="schemaagentlist"></a>
<a id="schema_AgentList"></a>
<a id="tocSagentlist"></a>
<a id="tocsagentlist"></a>

```json
[
  {
    "AgentArn": {},
    "Name": {},
    "Status": {}
  }
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

<h2 id="tocS_AgentStatus">AgentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatus"></a>
<a id="schema_AgentStatus"></a>
<a id="tocSagentstatus"></a>
<a id="tocsagentstatus"></a>

```json
"ONLINE"
```

<h2 id="tocS_Atime">Atime</h2>
<!-- backwards compatibility -->
<a id="schemaatime"></a>
<a id="schema_Atime"></a>
<a id="tocSatime"></a>
<a id="tocsatime"></a>

```json
"NONE"
```

<h2 id="tocS_BytesPerSecond">BytesPerSecond</h2>
<!-- backwards compatibility -->
<a id="schemabytespersecond"></a>
<a id="schema_BytesPerSecond"></a>
<a id="tocSbytespersecond"></a>
<a id="tocsbytespersecond"></a>

```json
-1
```

<h2 id="tocS_TaskExecutionArn">TaskExecutionArn</h2>
<!-- backwards compatibility -->
<a id="schemataskexecutionarn"></a>
<a id="schema_TaskExecutionArn"></a>
<a id="tocStaskexecutionarn"></a>
<a id="tocstaskexecutionarn"></a>

```json
"string"
```

<h2 id="tocS_InputTagList">InputTagList</h2>
<!-- backwards compatibility -->
<a id="schemainputtaglist"></a>
<a id="schema_InputTagList"></a>
<a id="tocSinputtaglist"></a>
<a id="tocsinputtaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_VpcEndpointId">VpcEndpointId</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointid"></a>
<a id="schema_VpcEndpointId"></a>
<a id="tocSvpcendpointid"></a>
<a id="tocsvpcendpointid"></a>

```json
"string"
```

<h2 id="tocS_PLSubnetArnList">PLSubnetArnList</h2>
<!-- backwards compatibility -->
<a id="schemaplsubnetarnlist"></a>
<a id="schema_PLSubnetArnList"></a>
<a id="tocSplsubnetarnlist"></a>
<a id="tocsplsubnetarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PLSecurityGroupArnList">PLSecurityGroupArnList</h2>
<!-- backwards compatibility -->
<a id="schemaplsecuritygrouparnlist"></a>
<a id="schema_PLSecurityGroupArnList"></a>
<a id="tocSplsecuritygrouparnlist"></a>
<a id="tocsplsecuritygrouparnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EfsSubdirectory">EfsSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemaefssubdirectory"></a>
<a id="schema_EfsSubdirectory"></a>
<a id="tocSefssubdirectory"></a>
<a id="tocsefssubdirectory"></a>

```json
"string"
```

<h2 id="tocS_EfsFilesystemArn">EfsFilesystemArn</h2>
<!-- backwards compatibility -->
<a id="schemaefsfilesystemarn"></a>
<a id="schema_EfsFilesystemArn"></a>
<a id="tocSefsfilesystemarn"></a>
<a id="tocsefsfilesystemarn"></a>

```json
"string"
```

<h2 id="tocS_Ec2Config">Ec2Config</h2>
<!-- backwards compatibility -->
<a id="schemaec2config"></a>
<a id="schema_Ec2Config"></a>
<a id="tocSec2config"></a>
<a id="tocsec2config"></a>

```json
{
  "SubnetArn": {},
  "SecurityGroupArns": {}
}
```

The subnet and security groups that DataSync uses to access your Amazon EFS file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetArn|object|true|none|none|
|SecurityGroupArns|object|true|none|none|

<h2 id="tocS_EfsAccessPointArn">EfsAccessPointArn</h2>
<!-- backwards compatibility -->
<a id="schemaefsaccesspointarn"></a>
<a id="schema_EfsAccessPointArn"></a>
<a id="tocSefsaccesspointarn"></a>
<a id="tocsefsaccesspointarn"></a>

```json
"string"
```

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_EfsInTransitEncryption">EfsInTransitEncryption</h2>
<!-- backwards compatibility -->
<a id="schemaefsintransitencryption"></a>
<a id="schema_EfsInTransitEncryption"></a>
<a id="tocSefsintransitencryption"></a>
<a id="tocsefsintransitencryption"></a>

```json
"NONE"
```

<h2 id="tocS_LocationArn">LocationArn</h2>
<!-- backwards compatibility -->
<a id="schemalocationarn"></a>
<a id="schema_LocationArn"></a>
<a id="tocSlocationarn"></a>
<a id="tocslocationarn"></a>

```json
"string"
```

<h2 id="tocS_FsxFilesystemArn">FsxFilesystemArn</h2>
<!-- backwards compatibility -->
<a id="schemafsxfilesystemarn"></a>
<a id="schema_FsxFilesystemArn"></a>
<a id="tocSfsxfilesystemarn"></a>
<a id="tocsfsxfilesystemarn"></a>

```json
"string"
```

<h2 id="tocS_Ec2SecurityGroupArnList">Ec2SecurityGroupArnList</h2>
<!-- backwards compatibility -->
<a id="schemaec2securitygrouparnlist"></a>
<a id="schema_Ec2SecurityGroupArnList"></a>
<a id="tocSec2securitygrouparnlist"></a>
<a id="tocsec2securitygrouparnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FsxLustreSubdirectory">FsxLustreSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemafsxlustresubdirectory"></a>
<a id="schema_FsxLustreSubdirectory"></a>
<a id="tocSfsxlustresubdirectory"></a>
<a id="tocsfsxlustresubdirectory"></a>

```json
"string"
```

<h2 id="tocS_FsxProtocol">FsxProtocol</h2>
<!-- backwards compatibility -->
<a id="schemafsxprotocol"></a>
<a id="schema_FsxProtocol"></a>
<a id="tocSfsxprotocol"></a>
<a id="tocsfsxprotocol"></a>

```json
{
  "NFS": {
    "MountOptions": {
      "Version": {}
    }
  },
  "SMB": {
    "Domain": {},
    "MountOptions": {
      "Version": {}
    },
    "Password": {},
    "User": {}
  }
}
```

Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NFS|object|false|none|none|
|SMB|object|false|none|none|

<h2 id="tocS_StorageVirtualMachineArn">StorageVirtualMachineArn</h2>
<!-- backwards compatibility -->
<a id="schemastoragevirtualmachinearn"></a>
<a id="schema_StorageVirtualMachineArn"></a>
<a id="tocSstoragevirtualmachinearn"></a>
<a id="tocsstoragevirtualmachinearn"></a>

```json
"string"
```

<h2 id="tocS_FsxOntapSubdirectory">FsxOntapSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemafsxontapsubdirectory"></a>
<a id="schema_FsxOntapSubdirectory"></a>
<a id="tocSfsxontapsubdirectory"></a>
<a id="tocsfsxontapsubdirectory"></a>

```json
"string"
```

<h2 id="tocS_FsxOpenZfsSubdirectory">FsxOpenZfsSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemafsxopenzfssubdirectory"></a>
<a id="schema_FsxOpenZfsSubdirectory"></a>
<a id="tocSfsxopenzfssubdirectory"></a>
<a id="tocsfsxopenzfssubdirectory"></a>

```json
"string"
```

<h2 id="tocS_FsxWindowsSubdirectory">FsxWindowsSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemafsxwindowssubdirectory"></a>
<a id="schema_FsxWindowsSubdirectory"></a>
<a id="tocSfsxwindowssubdirectory"></a>
<a id="tocsfsxwindowssubdirectory"></a>

```json
"string"
```

<h2 id="tocS_SmbUser">SmbUser</h2>
<!-- backwards compatibility -->
<a id="schemasmbuser"></a>
<a id="schema_SmbUser"></a>
<a id="tocSsmbuser"></a>
<a id="tocssmbuser"></a>

```json
"string"
```

<h2 id="tocS_SmbDomain">SmbDomain</h2>
<!-- backwards compatibility -->
<a id="schemasmbdomain"></a>
<a id="schema_SmbDomain"></a>
<a id="tocSsmbdomain"></a>
<a id="tocssmbdomain"></a>

```json
"string"
```

<h2 id="tocS_SmbPassword">SmbPassword</h2>
<!-- backwards compatibility -->
<a id="schemasmbpassword"></a>
<a id="schema_SmbPassword"></a>
<a id="tocSsmbpassword"></a>
<a id="tocssmbpassword"></a>

```json
"password"
```

<h2 id="tocS_HdfsSubdirectory">HdfsSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemahdfssubdirectory"></a>
<a id="schema_HdfsSubdirectory"></a>
<a id="tocShdfssubdirectory"></a>
<a id="tocshdfssubdirectory"></a>

```json
"string"
```

<h2 id="tocS_HdfsNameNodeList">HdfsNameNodeList</h2>
<!-- backwards compatibility -->
<a id="schemahdfsnamenodelist"></a>
<a id="schema_HdfsNameNodeList"></a>
<a id="tocShdfsnamenodelist"></a>
<a id="tocshdfsnamenodelist"></a>

```json
[
  {
    "Hostname": {},
    "Port": {}
  }
]
```

<h2 id="tocS_HdfsBlockSize">HdfsBlockSize</h2>
<!-- backwards compatibility -->
<a id="schemahdfsblocksize"></a>
<a id="schema_HdfsBlockSize"></a>
<a id="tocShdfsblocksize"></a>
<a id="tocshdfsblocksize"></a>

```json
1048576
```

<h2 id="tocS_HdfsReplicationFactor">HdfsReplicationFactor</h2>
<!-- backwards compatibility -->
<a id="schemahdfsreplicationfactor"></a>
<a id="schema_HdfsReplicationFactor"></a>
<a id="tocShdfsreplicationfactor"></a>
<a id="tocshdfsreplicationfactor"></a>

```json
1
```

<h2 id="tocS_KmsKeyProviderUri">KmsKeyProviderUri</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyprovideruri"></a>
<a id="schema_KmsKeyProviderUri"></a>
<a id="tocSkmskeyprovideruri"></a>
<a id="tocskmskeyprovideruri"></a>

```json
"string"
```

<h2 id="tocS_QopConfiguration">QopConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaqopconfiguration"></a>
<a id="schema_QopConfiguration"></a>
<a id="tocSqopconfiguration"></a>
<a id="tocsqopconfiguration"></a>

```json
{
  "RpcProtection": {},
  "DataTransferProtection": {}
}
```

The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RpcProtection|object|false|none|none|
|DataTransferProtection|object|false|none|none|

<h2 id="tocS_HdfsAuthenticationType">HdfsAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemahdfsauthenticationtype"></a>
<a id="schema_HdfsAuthenticationType"></a>
<a id="tocShdfsauthenticationtype"></a>
<a id="tocshdfsauthenticationtype"></a>

```json
"SIMPLE"
```

<h2 id="tocS_HdfsUser">HdfsUser</h2>
<!-- backwards compatibility -->
<a id="schemahdfsuser"></a>
<a id="schema_HdfsUser"></a>
<a id="tocShdfsuser"></a>
<a id="tocshdfsuser"></a>

```json
"string"
```

<h2 id="tocS_KerberosPrincipal">KerberosPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemakerberosprincipal"></a>
<a id="schema_KerberosPrincipal"></a>
<a id="tocSkerberosprincipal"></a>
<a id="tocskerberosprincipal"></a>

```json
"string"
```

<h2 id="tocS_KerberosKeytabFile">KerberosKeytabFile</h2>
<!-- backwards compatibility -->
<a id="schemakerberoskeytabfile"></a>
<a id="schema_KerberosKeytabFile"></a>
<a id="tocSkerberoskeytabfile"></a>
<a id="tocskerberoskeytabfile"></a>

```json
"string"
```

<h2 id="tocS_KerberosKrb5ConfFile">KerberosKrb5ConfFile</h2>
<!-- backwards compatibility -->
<a id="schemakerberoskrb5conffile"></a>
<a id="schema_KerberosKrb5ConfFile"></a>
<a id="tocSkerberoskrb5conffile"></a>
<a id="tocskerberoskrb5conffile"></a>

```json
"string"
```

<h2 id="tocS_NfsSubdirectory">NfsSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemanfssubdirectory"></a>
<a id="schema_NfsSubdirectory"></a>
<a id="tocSnfssubdirectory"></a>
<a id="tocsnfssubdirectory"></a>

```json
"string"
```

<h2 id="tocS_ServerHostname">ServerHostname</h2>
<!-- backwards compatibility -->
<a id="schemaserverhostname"></a>
<a id="schema_ServerHostname"></a>
<a id="tocSserverhostname"></a>
<a id="tocsserverhostname"></a>

```json
"string"
```

<h2 id="tocS_OnPremConfig">OnPremConfig</h2>
<!-- backwards compatibility -->
<a id="schemaonpremconfig"></a>
<a id="schema_OnPremConfig"></a>
<a id="tocSonpremconfig"></a>
<a id="tocsonpremconfig"></a>

```json
{
  "AgentArns": {}
}
```

A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentArns|object|true|none|none|

<h2 id="tocS_NfsMountOptions">NfsMountOptions</h2>
<!-- backwards compatibility -->
<a id="schemanfsmountoptions"></a>
<a id="schema_NfsMountOptions"></a>
<a id="tocSnfsmountoptions"></a>
<a id="tocsnfsmountoptions"></a>

```json
{
  "Version": {}
}
```

Specifies how DataSync can access a location using the NFS protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|false|none|none|

<h2 id="tocS_ObjectStorageServerPort">ObjectStorageServerPort</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstorageserverport"></a>
<a id="schema_ObjectStorageServerPort"></a>
<a id="tocSobjectstorageserverport"></a>
<a id="tocsobjectstorageserverport"></a>

```json
1
```

<h2 id="tocS_ObjectStorageServerProtocol">ObjectStorageServerProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstorageserverprotocol"></a>
<a id="schema_ObjectStorageServerProtocol"></a>
<a id="tocSobjectstorageserverprotocol"></a>
<a id="tocsobjectstorageserverprotocol"></a>

```json
"HTTPS"
```

<h2 id="tocS_S3Subdirectory">S3Subdirectory</h2>
<!-- backwards compatibility -->
<a id="schemas3subdirectory"></a>
<a id="schema_S3Subdirectory"></a>
<a id="tocSs3subdirectory"></a>
<a id="tocss3subdirectory"></a>

```json
"string"
```

<h2 id="tocS_ObjectStorageBucketName">ObjectStorageBucketName</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstoragebucketname"></a>
<a id="schema_ObjectStorageBucketName"></a>
<a id="tocSobjectstoragebucketname"></a>
<a id="tocsobjectstoragebucketname"></a>

```json
"string"
```

<h2 id="tocS_ObjectStorageAccessKey">ObjectStorageAccessKey</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstorageaccesskey"></a>
<a id="schema_ObjectStorageAccessKey"></a>
<a id="tocSobjectstorageaccesskey"></a>
<a id="tocsobjectstorageaccesskey"></a>

```json
"string"
```

<h2 id="tocS_ObjectStorageSecretKey">ObjectStorageSecretKey</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstoragesecretkey"></a>
<a id="schema_ObjectStorageSecretKey"></a>
<a id="tocSobjectstoragesecretkey"></a>
<a id="tocsobjectstoragesecretkey"></a>

```json
"password"
```

<h2 id="tocS_ObjectStorageCertificate">ObjectStorageCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstoragecertificate"></a>
<a id="schema_ObjectStorageCertificate"></a>
<a id="tocSobjectstoragecertificate"></a>
<a id="tocsobjectstoragecertificate"></a>

```json
"string"
```

<h2 id="tocS_S3BucketArn">S3BucketArn</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketarn"></a>
<a id="schema_S3BucketArn"></a>
<a id="tocSs3bucketarn"></a>
<a id="tocss3bucketarn"></a>

```json
"string"
```

<h2 id="tocS_S3StorageClass">S3StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemas3storageclass"></a>
<a id="schema_S3StorageClass"></a>
<a id="tocSs3storageclass"></a>
<a id="tocss3storageclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_S3Config">S3Config</h2>
<!-- backwards compatibility -->
<a id="schemas3config"></a>
<a id="schema_S3Config"></a>
<a id="tocSs3config"></a>
<a id="tocss3config"></a>

```json
{
  "BucketAccessRoleArn": {}
}
```

<p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketAccessRoleArn|object|true|none|none|

<h2 id="tocS_SmbSubdirectory">SmbSubdirectory</h2>
<!-- backwards compatibility -->
<a id="schemasmbsubdirectory"></a>
<a id="schema_SmbSubdirectory"></a>
<a id="tocSsmbsubdirectory"></a>
<a id="tocssmbsubdirectory"></a>

```json
"string"
```

<h2 id="tocS_SmbMountOptions">SmbMountOptions</h2>
<!-- backwards compatibility -->
<a id="schemasmbmountoptions"></a>
<a id="schema_SmbMountOptions"></a>
<a id="tocSsmbmountoptions"></a>
<a id="tocssmbmountoptions"></a>

```json
{
  "Version": {}
}
```

Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|false|none|none|

<h2 id="tocS_LogGroupArn">LogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaloggrouparn"></a>
<a id="schema_LogGroupArn"></a>
<a id="tocSloggrouparn"></a>
<a id="tocsloggrouparn"></a>

```json
"string"
```

<h2 id="tocS_Options">Options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_Options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "VerifyMode": {},
  "OverwriteMode": {},
  "Atime": {},
  "Mtime": {},
  "Uid": {},
  "Gid": {},
  "PreserveDeletedFiles": {},
  "PreserveDevices": {},
  "PosixPermissions": {},
  "BytesPerSecond": {},
  "TaskQueueing": {},
  "LogLevel": {},
  "TransferMode": {},
  "SecurityDescriptorCopyFlags": {},
  "ObjectTags": {}
}
```

<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VerifyMode|object|false|none|none|
|OverwriteMode|object|false|none|none|
|Atime|object|false|none|none|
|Mtime|object|false|none|none|
|Uid|object|false|none|none|
|Gid|object|false|none|none|
|PreserveDeletedFiles|object|false|none|none|
|PreserveDevices|object|false|none|none|
|PosixPermissions|object|false|none|none|
|BytesPerSecond|object|false|none|none|
|TaskQueueing|object|false|none|none|
|LogLevel|object|false|none|none|
|TransferMode|object|false|none|none|
|SecurityDescriptorCopyFlags|object|false|none|none|
|ObjectTags|object|false|none|none|

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "FilterType": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TaskSchedule">TaskSchedule</h2>
<!-- backwards compatibility -->
<a id="schemataskschedule"></a>
<a id="schema_TaskSchedule"></a>
<a id="tocStaskschedule"></a>
<a id="tocstaskschedule"></a>

```json
{
  "ScheduleExpression": {}
}
```

Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleExpression|object|true|none|none|

<h2 id="tocS_TaskArn">TaskArn</h2>
<!-- backwards compatibility -->
<a id="schemataskarn"></a>
<a id="schema_TaskArn"></a>
<a id="tocStaskarn"></a>
<a id="tocstaskarn"></a>

```json
"string"
```

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"PUBLIC"
```

<h2 id="tocS_PrivateLinkConfig">PrivateLinkConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprivatelinkconfig"></a>
<a id="schema_PrivateLinkConfig"></a>
<a id="tocSprivatelinkconfig"></a>
<a id="tocsprivatelinkconfig"></a>

```json
{
  "VpcEndpointId": {},
  "PrivateLinkEndpoint": {},
  "SubnetArns": {},
  "SecurityGroupArns": {}
}
```

The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointId|object|false|none|none|
|PrivateLinkEndpoint|object|false|none|none|
|SubnetArns|object|false|none|none|
|SecurityGroupArns|object|false|none|none|

<h2 id="tocS_LocationUri">LocationUri</h2>
<!-- backwards compatibility -->
<a id="schemalocationuri"></a>
<a id="schema_LocationUri"></a>
<a id="tocSlocationuri"></a>
<a id="tocslocationuri"></a>

```json
"string"
```

<h2 id="tocS_TaskExecutionStatus">TaskExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskexecutionstatus"></a>
<a id="schema_TaskExecutionStatus"></a>
<a id="tocStaskexecutionstatus"></a>
<a id="tocstaskexecutionstatus"></a>

```json
"QUEUED"
```

<h2 id="tocS_long">long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_TaskExecutionResultDetail">TaskExecutionResultDetail</h2>
<!-- backwards compatibility -->
<a id="schemataskexecutionresultdetail"></a>
<a id="schema_TaskExecutionResultDetail"></a>
<a id="tocStaskexecutionresultdetail"></a>
<a id="tocstaskexecutionresultdetail"></a>

```json
{
  "PrepareDuration": {},
  "PrepareStatus": {},
  "TotalDuration": {},
  "TransferDuration": {},
  "TransferStatus": {},
  "VerifyDuration": {},
  "VerifyStatus": {},
  "ErrorCode": {},
  "ErrorDetail": {}
}
```

Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrepareDuration|object|false|none|none|
|PrepareStatus|object|false|none|none|
|TotalDuration|object|false|none|none|
|TransferDuration|object|false|none|none|
|TransferStatus|object|false|none|none|
|VerifyDuration|object|false|none|none|
|VerifyStatus|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorDetail|object|false|none|none|

<h2 id="tocS_TaskStatus">TaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskstatus"></a>
<a id="schema_TaskStatus"></a>
<a id="tocStaskstatus"></a>
<a id="tocstaskstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_SourceNetworkInterfaceArns">SourceNetworkInterfaceArns</h2>
<!-- backwards compatibility -->
<a id="schemasourcenetworkinterfacearns"></a>
<a id="schema_SourceNetworkInterfaceArns"></a>
<a id="tocSsourcenetworkinterfacearns"></a>
<a id="tocssourcenetworkinterfacearns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DestinationNetworkInterfaceArns">DestinationNetworkInterfaceArns</h2>
<!-- backwards compatibility -->
<a id="schemadestinationnetworkinterfacearns"></a>
<a id="schema_DestinationNetworkInterfaceArns"></a>
<a id="tocSdestinationnetworkinterfacearns"></a>
<a id="tocsdestinationnetworkinterfacearns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_NetworkInterfaceArn">NetworkInterfaceArn</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfacearn"></a>
<a id="schema_NetworkInterfaceArn"></a>
<a id="tocSnetworkinterfacearn"></a>
<a id="tocsnetworkinterfacearn"></a>

```json
"string"
```

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
0
```

<h2 id="tocS_Ec2SubnetArn">Ec2SubnetArn</h2>
<!-- backwards compatibility -->
<a id="schemaec2subnetarn"></a>
<a id="schema_Ec2SubnetArn"></a>
<a id="tocSec2subnetarn"></a>
<a id="tocsec2subnetarn"></a>

```json
"string"
```

<h2 id="tocS_Ec2SecurityGroupArn">Ec2SecurityGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaec2securitygrouparn"></a>
<a id="schema_Ec2SecurityGroupArn"></a>
<a id="tocSec2securitygrouparn"></a>
<a id="tocsec2securitygrouparn"></a>

```json
"string"
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"strings"
```

<h2 id="tocS_FilterAttributeValue">FilterAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemafilterattributevalue"></a>
<a id="schema_FilterAttributeValue"></a>
<a id="tocSfilterattributevalue"></a>
<a id="tocsfilterattributevalue"></a>

```json
"string"
```

<h2 id="tocS_FilterRule">FilterRule</h2>
<!-- backwards compatibility -->
<a id="schemafilterrule"></a>
<a id="schema_FilterRule"></a>
<a id="tocSfilterrule"></a>
<a id="tocsfilterrule"></a>

```json
{
  "FilterType": {},
  "Value": {}
}
```

Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterType|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_FilterType">FilterType</h2>
<!-- backwards compatibility -->
<a id="schemafiltertype"></a>
<a id="schema_FilterType"></a>
<a id="tocSfiltertype"></a>
<a id="tocsfiltertype"></a>

```json
"SIMPLE_PATTERN"
```

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

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

<h2 id="tocS_FsxProtocolNfs">FsxProtocolNfs</h2>
<!-- backwards compatibility -->
<a id="schemafsxprotocolnfs"></a>
<a id="schema_FsxProtocolNfs"></a>
<a id="tocSfsxprotocolnfs"></a>
<a id="tocsfsxprotocolnfs"></a>

```json
{
  "MountOptions": {
    "Version": {}
  }
}
```

Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your Amazon FSx for OpenZFS or Amazon FSx for NetApp ONTAP file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MountOptions|[NfsMountOptions](#schemanfsmountoptions)|false|none|Specifies how DataSync can access a location using the NFS protocol.|

<h2 id="tocS_FsxProtocolSmb">FsxProtocolSmb</h2>
<!-- backwards compatibility -->
<a id="schemafsxprotocolsmb"></a>
<a id="schema_FsxProtocolSmb"></a>
<a id="tocSfsxprotocolsmb"></a>
<a id="tocsfsxprotocolsmb"></a>

```json
{
  "Domain": {},
  "MountOptions": {
    "Version": {}
  },
  "Password": {},
  "User": {}
}
```

Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your Amazon FSx for NetApp ONTAP file system. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">Accessing FSx for ONTAP file systems</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|false|none|none|
|MountOptions|[SmbMountOptions](#schemasmbmountoptions)|false|none|Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.|
|Password|object|true|none|none|
|User|object|true|none|none|

<h2 id="tocS_Gid">Gid</h2>
<!-- backwards compatibility -->
<a id="schemagid"></a>
<a id="schema_Gid"></a>
<a id="tocSgid"></a>
<a id="tocsgid"></a>

```json
"NONE"
```

<h2 id="tocS_HdfsDataTransferProtection">HdfsDataTransferProtection</h2>
<!-- backwards compatibility -->
<a id="schemahdfsdatatransferprotection"></a>
<a id="schema_HdfsDataTransferProtection"></a>
<a id="tocShdfsdatatransferprotection"></a>
<a id="tocshdfsdatatransferprotection"></a>

```json
"DISABLED"
```

<h2 id="tocS_HdfsServerHostname">HdfsServerHostname</h2>
<!-- backwards compatibility -->
<a id="schemahdfsserverhostname"></a>
<a id="schema_HdfsServerHostname"></a>
<a id="tocShdfsserverhostname"></a>
<a id="tocshdfsserverhostname"></a>

```json
"string"
```

<h2 id="tocS_HdfsServerPort">HdfsServerPort</h2>
<!-- backwards compatibility -->
<a id="schemahdfsserverport"></a>
<a id="schema_HdfsServerPort"></a>
<a id="tocShdfsserverport"></a>
<a id="tocshdfsserverport"></a>

```json
1
```

<h2 id="tocS_HdfsNameNode">HdfsNameNode</h2>
<!-- backwards compatibility -->
<a id="schemahdfsnamenode"></a>
<a id="schema_HdfsNameNode"></a>
<a id="tocShdfsnamenode"></a>
<a id="tocshdfsnamenode"></a>

```json
{
  "Hostname": {},
  "Port": {}
}
```

The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file system's namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Hostname|object|true|none|none|
|Port|object|true|none|none|

<h2 id="tocS_HdfsRpcProtection">HdfsRpcProtection</h2>
<!-- backwards compatibility -->
<a id="schemahdfsrpcprotection"></a>
<a id="schema_HdfsRpcProtection"></a>
<a id="tocShdfsrpcprotection"></a>
<a id="tocshdfsrpcprotection"></a>

```json
"DISABLED"
```

<h2 id="tocS_TagListEntry">TagListEntry</h2>
<!-- backwards compatibility -->
<a id="schemataglistentry"></a>
<a id="schema_TagListEntry"></a>
<a id="tocStaglistentry"></a>
<a id="tocstaglistentry"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A key-value pair representing a single tag that's been applied to an Amazon Web Services resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
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

<h2 id="tocS_LocationFilters">LocationFilters</h2>
<!-- backwards compatibility -->
<a id="schemalocationfilters"></a>
<a id="schema_LocationFilters"></a>
<a id="tocSlocationfilters"></a>
<a id="tocslocationfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {},
    "Operator": {}
  }
]
```

<h2 id="tocS_LocationList">LocationList</h2>
<!-- backwards compatibility -->
<a id="schemalocationlist"></a>
<a id="schema_LocationList"></a>
<a id="tocSlocationlist"></a>
<a id="tocslocationlist"></a>

```json
[
  {
    "LocationArn": {},
    "LocationUri": {}
  }
]
```

<h2 id="tocS_TaggableResourceArn">TaggableResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemataggableresourcearn"></a>
<a id="schema_TaggableResourceArn"></a>
<a id="tocStaggableresourcearn"></a>
<a id="tocstaggableresourcearn"></a>

```json
"string"
```

<h2 id="tocS_OutputTagList">OutputTagList</h2>
<!-- backwards compatibility -->
<a id="schemaoutputtaglist"></a>
<a id="schema_OutputTagList"></a>
<a id="tocSoutputtaglist"></a>
<a id="tocsoutputtaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TaskExecutionList">TaskExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemataskexecutionlist"></a>
<a id="schema_TaskExecutionList"></a>
<a id="tocStaskexecutionlist"></a>
<a id="tocstaskexecutionlist"></a>

```json
[
  {
    "TaskExecutionArn": {},
    "Status": {}
  }
]
```

<h2 id="tocS_TaskFilters">TaskFilters</h2>
<!-- backwards compatibility -->
<a id="schemataskfilters"></a>
<a id="schema_TaskFilters"></a>
<a id="tocStaskfilters"></a>
<a id="tocstaskfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {},
    "Operator": {}
  }
]
```

<h2 id="tocS_TaskList">TaskList</h2>
<!-- backwards compatibility -->
<a id="schematasklist"></a>
<a id="schema_TaskList"></a>
<a id="tocStasklist"></a>
<a id="tocstasklist"></a>

```json
[
  {
    "TaskArn": {},
    "Status": {},
    "Name": {}
  }
]
```

<h2 id="tocS_LocationFilterName">LocationFilterName</h2>
<!-- backwards compatibility -->
<a id="schemalocationfiltername"></a>
<a id="schema_LocationFilterName"></a>
<a id="tocSlocationfiltername"></a>
<a id="tocslocationfiltername"></a>

```json
"LocationUri"
```

<h2 id="tocS_Operator">Operator</h2>
<!-- backwards compatibility -->
<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
"Equals"
```

<h2 id="tocS_LocationFilter">LocationFilter</h2>
<!-- backwards compatibility -->
<a id="schemalocationfilter"></a>
<a id="schema_LocationFilter"></a>
<a id="tocSlocationfilter"></a>
<a id="tocslocationfilter"></a>

```json
{
  "Name": {},
  "Values": {},
  "Operator": {}
}
```

<p>Narrow down the list of resources returned by <code>ListLocations</code>. For example, to see all your Amazon S3 locations, create a filter using <code>"Name": "LocationType"</code>, <code>"Operator": "Equals"</code>, and <code>"Values": "S3"</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering resources</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|
|Operator|object|true|none|none|

<h2 id="tocS_LocationListEntry">LocationListEntry</h2>
<!-- backwards compatibility -->
<a id="schemalocationlistentry"></a>
<a id="schema_LocationListEntry"></a>
<a id="tocSlocationlistentry"></a>
<a id="tocslocationlistentry"></a>

```json
{
  "LocationArn": {},
  "LocationUri": {}
}
```

Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is called.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationArn|object|false|none|none|
|LocationUri|object|false|none|none|

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"OFF"
```

<h2 id="tocS_Mtime">Mtime</h2>
<!-- backwards compatibility -->
<a id="schemamtime"></a>
<a id="schema_Mtime"></a>
<a id="tocSmtime"></a>
<a id="tocsmtime"></a>

```json
"NONE"
```

<h2 id="tocS_NfsVersion">NfsVersion</h2>
<!-- backwards compatibility -->
<a id="schemanfsversion"></a>
<a id="schema_NfsVersion"></a>
<a id="tocSnfsversion"></a>
<a id="tocsnfsversion"></a>

```json
"AUTOMATIC"
```

<h2 id="tocS_ObjectTags">ObjectTags</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttags"></a>
<a id="schema_ObjectTags"></a>
<a id="tocSobjecttags"></a>
<a id="tocsobjecttags"></a>

```json
"PRESERVE"
```

<h2 id="tocS_VerifyMode">VerifyMode</h2>
<!-- backwards compatibility -->
<a id="schemaverifymode"></a>
<a id="schema_VerifyMode"></a>
<a id="tocSverifymode"></a>
<a id="tocsverifymode"></a>

```json
"POINT_IN_TIME_CONSISTENT"
```

<h2 id="tocS_OverwriteMode">OverwriteMode</h2>
<!-- backwards compatibility -->
<a id="schemaoverwritemode"></a>
<a id="schema_OverwriteMode"></a>
<a id="tocSoverwritemode"></a>
<a id="tocsoverwritemode"></a>

```json
"ALWAYS"
```

<h2 id="tocS_Uid">Uid</h2>
<!-- backwards compatibility -->
<a id="schemauid"></a>
<a id="schema_Uid"></a>
<a id="tocSuid"></a>
<a id="tocsuid"></a>

```json
"NONE"
```

<h2 id="tocS_PreserveDeletedFiles">PreserveDeletedFiles</h2>
<!-- backwards compatibility -->
<a id="schemapreservedeletedfiles"></a>
<a id="schema_PreserveDeletedFiles"></a>
<a id="tocSpreservedeletedfiles"></a>
<a id="tocspreservedeletedfiles"></a>

```json
"PRESERVE"
```

<h2 id="tocS_PreserveDevices">PreserveDevices</h2>
<!-- backwards compatibility -->
<a id="schemapreservedevices"></a>
<a id="schema_PreserveDevices"></a>
<a id="tocSpreservedevices"></a>
<a id="tocspreservedevices"></a>

```json
"NONE"
```

<h2 id="tocS_PosixPermissions">PosixPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaposixpermissions"></a>
<a id="schema_PosixPermissions"></a>
<a id="tocSposixpermissions"></a>
<a id="tocsposixpermissions"></a>

```json
"NONE"
```

<h2 id="tocS_TaskQueueing">TaskQueueing</h2>
<!-- backwards compatibility -->
<a id="schemataskqueueing"></a>
<a id="schema_TaskQueueing"></a>
<a id="tocStaskqueueing"></a>
<a id="tocstaskqueueing"></a>

```json
"ENABLED"
```

<h2 id="tocS_TransferMode">TransferMode</h2>
<!-- backwards compatibility -->
<a id="schematransfermode"></a>
<a id="schema_TransferMode"></a>
<a id="tocStransfermode"></a>
<a id="tocstransfermode"></a>

```json
"CHANGED"
```

<h2 id="tocS_SmbSecurityDescriptorCopyFlags">SmbSecurityDescriptorCopyFlags</h2>
<!-- backwards compatibility -->
<a id="schemasmbsecuritydescriptorcopyflags"></a>
<a id="schema_SmbSecurityDescriptorCopyFlags"></a>
<a id="tocSsmbsecuritydescriptorcopyflags"></a>
<a id="tocssmbsecuritydescriptorcopyflags"></a>

```json
"NONE"
```

<h2 id="tocS_PhaseStatus">PhaseStatus</h2>
<!-- backwards compatibility -->
<a id="schemaphasestatus"></a>
<a id="schema_PhaseStatus"></a>
<a id="tocSphasestatus"></a>
<a id="tocsphasestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_ScheduleExpressionCron">ScheduleExpressionCron</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpressioncron"></a>
<a id="schema_ScheduleExpressionCron"></a>
<a id="tocSscheduleexpressioncron"></a>
<a id="tocsscheduleexpressioncron"></a>

```json
"string"
```

<h2 id="tocS_SmbVersion">SmbVersion</h2>
<!-- backwards compatibility -->
<a id="schemasmbversion"></a>
<a id="schema_SmbVersion"></a>
<a id="tocSsmbversion"></a>
<a id="tocssmbversion"></a>

```json
"AUTOMATIC"
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

<h2 id="tocS_TaskExecutionListEntry">TaskExecutionListEntry</h2>
<!-- backwards compatibility -->
<a id="schemataskexecutionlistentry"></a>
<a id="schema_TaskExecutionListEntry"></a>
<a id="tocStaskexecutionlistentry"></a>
<a id="tocstaskexecutionlistentry"></a>

```json
{
  "TaskExecutionArn": {},
  "Status": {}
}
```

Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskExecutionArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_TaskFilterName">TaskFilterName</h2>
<!-- backwards compatibility -->
<a id="schemataskfiltername"></a>
<a id="schema_TaskFilterName"></a>
<a id="tocStaskfiltername"></a>
<a id="tocstaskfiltername"></a>

```json
"LocationId"
```

<h2 id="tocS_TaskFilter">TaskFilter</h2>
<!-- backwards compatibility -->
<a id="schemataskfilter"></a>
<a id="schema_TaskFilter"></a>
<a id="tocStaskfilter"></a>
<a id="tocstaskfilter"></a>

```json
{
  "Name": {},
  "Values": {},
  "Operator": {}
}
```

<p>You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering DataSync resources</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|
|Operator|object|true|none|none|

<h2 id="tocS_TaskListEntry">TaskListEntry</h2>
<!-- backwards compatibility -->
<a id="schematasklistentry"></a>
<a id="schema_TaskListEntry"></a>
<a id="tocStasklistentry"></a>
<a id="tocstasklistentry"></a>

```json
{
  "TaskArn": {},
  "Status": {},
  "Name": {}
}
```

Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html">ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskArn|object|false|none|none|
|Status|object|false|none|none|
|Name|object|false|none|none|
