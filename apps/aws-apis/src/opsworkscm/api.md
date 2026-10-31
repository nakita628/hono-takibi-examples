<h1 id="aws-opsworks-cm">AWS OpsWorks CM v2016-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS OpsWorks CM</fullname> <p>AWS OpsWorks for configuration management (CM) is a service that runs and manages configuration management servers. You can use AWS OpsWorks CM to create and manage AWS OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove nodes for the servers to manage.</p> <p> <b>Glossary of terms</b> </p> <ul> <li> <p> <b>Server</b>: A configuration management server that can be highly-available. The configuration management server runs on an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start or stop servers. After you create servers, they continue to run until they are deleted.</p> </li> <li> <p> <b>Engine</b>: The engine is the specific configuration manager that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p> </li> <li> <p> <b>Backup</b>: This is an application-level backup of the data that the configuration manager stores. AWS OpsWorks CM creates an S3 bucket for backups when you launch the first server. A backup maintains a snapshot of a server's configuration-related attributes at the time the backup starts.</p> </li> <li> <p> <b>Events</b>: Events are always related to a server. Events are written during server creation, when health checks run, when backups are created, when system maintenance is performed, etc. When you delete a server, the server's events are also deleted.</p> </li> <li> <p> <b>Account attributes</b>: Every account has attributes that are assigned in the AWS OpsWorks CM database. These attributes store information about configuration limits (servers, backups, etc.) and your customer account. </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks-cm.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-west-1.amazonaws.com</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">AWS OpsWorks endpoints and quotas</a> in the AWS General Reference.</p> <p> <b>Throttling limits</b> </p> <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>

Base URLs:

* <a href="http://opsworks-cm.us-east-1.amazonaws.com">http://opsworks-cm.us-east-1.amazonaws.com</a> - The OpsWorksCM multi-region endpoint

* <a href="https://opsworks-cm.us-east-1.amazonaws.com">https://opsworks-cm.us-east-1.amazonaws.com</a> - The OpsWorksCM multi-region endpoint

* <a href="http://opsworks-cm.cn-north-1.amazonaws.com.cn">http://opsworks-cm.cn-north-1.amazonaws.com.cn</a> - The OpsWorksCM endpoint for China (Beijing) and China (Ningxia)

* <a href="https://opsworks-cm.cn-north-1.amazonaws.com.cn">https://opsworks-cm.cn-north-1.amazonaws.com.cn</a> - The OpsWorksCM endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/opsworks-cm/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-opsworks-cm-default">Default</h1>

## AssociateNode

<a id="opIdAssociateNode"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.AssociateNode' \
  -d '{
    "ServerName": {},
    "NodeName": {},
    "EngineAttributes": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode`

<p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Puppet): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance. </p>

> Body parameter

```json
{
  "ServerName": {},
  "NodeName": {},
  "EngineAttributes": {}
}
```

<h3 id="associatenode-parameters">Parameters</h3>

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
|body|body|[AssociateNodeRequest](#schemaassociatenoderequest)|true|none|
|» ServerName|body|object|true|none|
|» NodeName|body|object|true|none|
|» EngineAttributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.AssociateNode|

> Example responses

> 200 Response

```json
{
  "NodeAssociationStatusToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="associatenode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateNodeResponse](#schemaassociatenoderesponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackup

<a id="opIdCreateBackup"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.CreateBackup' \
  -d '{
    "ServerName": {},
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup`

<p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "ServerName": {},
  "Description": {},
  "Tags": {}
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
|» ServerName|body|object|true|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.CreateBackup|

> Example responses

> 200 Response

```json
{
  "Backup": {
    "BackupArn": {},
    "BackupId": {},
    "BackupType": {},
    "CreatedAt": {},
    "Description": {},
    "Engine": {},
    "EngineModel": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "S3DataSize": {},
    "S3DataUrl": {},
    "S3LogUrl": {},
    "SecurityGroupIds": {},
    "ServerName": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusDescription": {},
    "SubnetIds": {},
    "ToolsVersion": {},
    "UserArn": {}
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

<h3 id="createbackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackupResponse](#schemacreatebackupresponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServer

<a id="opIdCreateServer"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.CreateServer' \
  -d '{
    "AssociatePublicIpAddress": {},
    "CustomDomain": {},
    "CustomCertificate": {},
    "CustomPrivateKey": {},
    "DisableAutomatedBackup": {},
    "Engine": {},
    "EngineModel": {},
    "EngineVersion": {},
    "EngineAttributes": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "SubnetIds": {},
    "Tags": {},
    "BackupId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer`

<p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p> <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>, <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>

> Body parameter

```json
{
  "AssociatePublicIpAddress": {},
  "CustomDomain": {},
  "CustomCertificate": {},
  "CustomPrivateKey": {},
  "DisableAutomatedBackup": {},
  "Engine": {},
  "EngineModel": {},
  "EngineVersion": {},
  "EngineAttributes": {},
  "BackupRetentionCount": {},
  "ServerName": {},
  "InstanceProfileArn": {},
  "InstanceType": {},
  "KeyPair": {},
  "PreferredMaintenanceWindow": {},
  "PreferredBackupWindow": {},
  "SecurityGroupIds": {},
  "ServiceRoleArn": {},
  "SubnetIds": {},
  "Tags": {},
  "BackupId": {}
}
```

<h3 id="createserver-parameters">Parameters</h3>

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
|body|body|[CreateServerRequest](#schemacreateserverrequest)|true|none|
|» AssociatePublicIpAddress|body|object|false|none|
|» CustomDomain|body|object|false|none|
|» CustomCertificate|body|object|false|none|
|» CustomPrivateKey|body|object|false|none|
|» DisableAutomatedBackup|body|object|false|none|
|» Engine|body|object|true|none|
|» EngineModel|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» EngineAttributes|body|object|false|none|
|» BackupRetentionCount|body|object|false|none|
|» ServerName|body|object|true|none|
|» InstanceProfileArn|body|object|true|none|
|» InstanceType|body|object|true|none|
|» KeyPair|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» PreferredBackupWindow|body|object|false|none|
|» SecurityGroupIds|body|object|false|none|
|» ServiceRoleArn|body|object|true|none|
|» SubnetIds|body|object|false|none|
|» Tags|body|object|false|none|
|» BackupId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.CreateServer|

> Example responses

> 200 Response

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
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

<h3 id="createserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServerResponse](#schemacreateserverresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackup

<a id="opIdDeleteBackup"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DeleteBackup' \
  -d '{
    "BackupId": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup`

<p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "BackupId": {}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DeleteBackup|

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

<h3 id="deletebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackupResponse](#schemadeletebackupresponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServer

<a id="opIdDeleteServer"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DeleteServer' \
  -d '{
    "ServerName": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer`

<p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>

> Body parameter

```json
{
  "ServerName": {}
}
```

<h3 id="deleteserver-parameters">Parameters</h3>

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
|body|body|[DeleteServerRequest](#schemadeleteserverrequest)|true|none|
|» ServerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DeleteServer|

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

<h3 id="deleteserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServerResponse](#schemadeleteserverresponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountAttributes

<a id="opIdDescribeAccountAttributes"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DescribeAccountAttributes' \
  -d '{}'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes`

<p> Describes your OpsWorks-CM account attributes. </p> <p> This operation is synchronous. </p>

> Body parameter

```json
{}
```

<h3 id="describeaccountattributes-parameters">Parameters</h3>

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
|body|body|[DescribeAccountAttributesRequest](#schemadescribeaccountattributesrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DescribeAccountAttributes|

> Example responses

> 200 Response

```json
{
  "Attributes": {}
}
```

<h3 id="describeaccountattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountAttributesResponse](#schemadescribeaccountattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBackups

<a id="opIdDescribeBackups"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DescribeBackups' \
  -d '{
    "BackupId": {},
    "ServerName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups`

<p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "BackupId": {},
  "ServerName": {},
  "NextToken": {},
  "MaxResults": {}
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
|» BackupId|body|object|false|none|
|» ServerName|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DescribeBackups|

> Example responses

> 200 Response

```json
{
  "Backups": {},
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

<h3 id="describebackups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBackupsResponse](#schemadescribebackupsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEvents

<a id="opIdDescribeEvents"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DescribeEvents' \
  -d '{
    "ServerName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents`

<p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "ServerName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeevents-parameters">Parameters</h3>

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
|body|body|[DescribeEventsRequest](#schemadescribeeventsrequest)|true|none|
|» ServerName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DescribeEvents|

> Example responses

> 200 Response

```json
{
  "ServerEvents": {},
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

<h3 id="describeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventsResponse](#schemadescribeeventsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNodeAssociationStatus

<a id="opIdDescribeNodeAssociationStatus"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus' \
  -d '{
    "NodeAssociationStatusToken": {},
    "ServerName": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus`

<p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "NodeAssociationStatusToken": {},
  "ServerName": {}
}
```

<h3 id="describenodeassociationstatus-parameters">Parameters</h3>

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
|body|body|[DescribeNodeAssociationStatusRequest](#schemadescribenodeassociationstatusrequest)|true|none|
|» NodeAssociationStatusToken|body|object|true|none|
|» ServerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus|

> Example responses

> 200 Response

```json
{
  "NodeAssociationStatus": {},
  "EngineAttributes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describenodeassociationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNodeAssociationStatusResponse](#schemadescribenodeassociationstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServers

<a id="opIdDescribeServers"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DescribeServers' \
  -d '{
    "ServerName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers`

<p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "ServerName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeservers-parameters">Parameters</h3>

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
|body|body|[DescribeServersRequest](#schemadescribeserversrequest)|true|none|
|» ServerName|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DescribeServers|

> Example responses

> 200 Response

```json
{
  "Servers": {},
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

<h3 id="describeservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServersResponse](#schemadescribeserversresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateNode

<a id="opIdDisassociateNode"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.DisassociateNode' \
  -d '{
    "ServerName": {},
    "NodeName": {},
    "EngineAttributes": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode`

<p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "ServerName": {},
  "NodeName": {},
  "EngineAttributes": {}
}
```

<h3 id="disassociatenode-parameters">Parameters</h3>

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
|body|body|[DisassociateNodeRequest](#schemadisassociatenoderequest)|true|none|
|» ServerName|body|object|true|none|
|» NodeName|body|object|true|none|
|» EngineAttributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.DisassociateNode|

> Example responses

> 200 Response

```json
{
  "NodeAssociationStatusToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="disassociatenode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateNodeResponse](#schemadisassociatenoderesponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportServerEngineAttribute

<a id="opIdExportServerEngineAttribute"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.ExportServerEngineAttribute' \
  -d '{
    "ExportAttributeName": {},
    "ServerName": {},
    "InputAttributes": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute`

<p> Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server. </p> <p> This operation is synchronous. </p> <p> A <code>ValidationException</code> is raised when parameters of the request are not valid. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED, FAILED or DELETING. </p>

> Body parameter

```json
{
  "ExportAttributeName": {},
  "ServerName": {},
  "InputAttributes": {}
}
```

<h3 id="exportserverengineattribute-parameters">Parameters</h3>

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
|body|body|[ExportServerEngineAttributeRequest](#schemaexportserverengineattributerequest)|true|none|
|» ExportAttributeName|body|object|true|none|
|» ServerName|body|object|true|none|
|» InputAttributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.ExportServerEngineAttribute|

> Example responses

> 200 Response

```json
{
  "EngineAttribute": {
    "Name": {},
    "Value": {}
  },
  "ServerName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="exportserverengineattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportServerEngineAttributeResponse](#schemaexportserverengineattributeresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.ListTagsForResource' \
  -d '{
    "ResourceArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource`

Returns a list of tags that are applied to the specified AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise servers or backups.

> Body parameter

```json
{
  "ResourceArn": {},
  "NextToken": {},
  "MaxResults": {}
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
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.ListTagsForResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreServer

<a id="opIdRestoreServer"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.RestoreServer' \
  -d '{
    "BackupId": {},
    "ServerName": {},
    "InstanceType": {},
    "KeyPair": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer`

<p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state, AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "BackupId": {},
  "ServerName": {},
  "InstanceType": {},
  "KeyPair": {}
}
```

<h3 id="restoreserver-parameters">Parameters</h3>

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
|body|body|[RestoreServerRequest](#schemarestoreserverrequest)|true|none|
|» BackupId|body|object|true|none|
|» ServerName|body|object|true|none|
|» InstanceType|body|object|false|none|
|» KeyPair|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.RestoreServer|

> Example responses

> 200 Response

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
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

<h3 id="restoreserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreServerResponse](#schemarestoreserverresponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMaintenance

<a id="opIdStartMaintenance"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.StartMaintenance' \
  -d '{
    "ServerName": {},
    "EngineAttributes": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance`

<p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "ServerName": {},
  "EngineAttributes": {}
}
```

<h3 id="startmaintenance-parameters">Parameters</h3>

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
|body|body|[StartMaintenanceRequest](#schemastartmaintenancerequest)|true|none|
|» ServerName|body|object|true|none|
|» EngineAttributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.StartMaintenance|

> Example responses

> 200 Response

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
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

<h3 id="startmaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMaintenanceResponse](#schemastartmaintenanceresponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource`

Applies tags to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server, or to server backups.

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
|X-Amz-Target|OpsWorksCM_V2016_11_01.TagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource`

Removes specified tags from an AWS OpsWorks-CM server or backup.

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
|X-Amz-Target|OpsWorksCM_V2016_11_01.UntagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServer

<a id="opIdUpdateServer"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.UpdateServer' \
  -d '{
    "DisableAutomatedBackup": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "PreferredMaintenanceWindow": "string",
    "PreferredBackupWindow": "string"
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer`

<p> Updates settings for a server. </p> <p> This operation is synchronous. </p>

> Body parameter

```json
{
  "DisableAutomatedBackup": {},
  "BackupRetentionCount": {},
  "ServerName": {},
  "PreferredMaintenanceWindow": "string",
  "PreferredBackupWindow": "string"
}
```

<h3 id="updateserver-parameters">Parameters</h3>

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
|body|body|[UpdateServerRequest](#schemaupdateserverrequest)|true|none|
|» DisableAutomatedBackup|body|object|false|none|
|» BackupRetentionCount|body|object|false|none|
|» ServerName|body|object|true|none|
|» PreferredMaintenanceWindow|body|[TimeWindowDefinition](#schematimewindowdefinition)|false|<p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>|
|» PreferredBackupWindow|body|[TimeWindowDefinition](#schematimewindowdefinition)|false|<p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.UpdateServer|

> Example responses

> 200 Response

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
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

<h3 id="updateserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServerResponse](#schemaupdateserverresponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServerEngineAttributes

<a id="opIdUpdateServerEngineAttributes"></a>

> Code samples

```bash
curl 'https://opsworkscm.us-east-1.amazonaws.com/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes' \
  -d '{
    "ServerName": {},
    "AttributeName": {},
    "AttributeValue": {}
  }'
```

`POST /#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes`

<p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

> Body parameter

```json
{
  "ServerName": {},
  "AttributeName": {},
  "AttributeValue": {}
}
```

<h3 id="updateserverengineattributes-parameters">Parameters</h3>

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
|body|body|[UpdateServerEngineAttributesRequest](#schemaupdateserverengineattributesrequest)|true|none|
|» ServerName|body|object|true|none|
|» AttributeName|body|object|true|none|
|» AttributeValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes|

> Example responses

> 200 Response

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
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

<h3 id="updateserverengineattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServerEngineAttributesResponse](#schemaupdateserverengineattributesresponse)|
|480|480|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateNodeResponse">AssociateNodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatenoderesponse"></a>
<a id="schema_AssociateNodeResponse"></a>
<a id="tocSassociatenoderesponse"></a>
<a id="tocsassociatenoderesponse"></a>

```json
{
  "NodeAssociationStatusToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeAssociationStatusToken|object|false|none|none|

<h2 id="tocS_AssociateNodeRequest">AssociateNodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatenoderequest"></a>
<a id="schema_AssociateNodeRequest"></a>
<a id="tocSassociatenoderequest"></a>
<a id="tocsassociatenoderequest"></a>

```json
{
  "ServerName": {},
  "NodeName": {},
  "EngineAttributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|
|NodeName|object|true|none|none|
|EngineAttributes|object|true|none|none|

<h2 id="tocS_InvalidStateException">InvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstateexception"></a>
<a id="schema_InvalidStateException"></a>
<a id="tocSinvalidstateexception"></a>
<a id="tocsinvalidstateexception"></a>

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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
    "BackupArn": {},
    "BackupId": {},
    "BackupType": {},
    "CreatedAt": {},
    "Description": {},
    "Engine": {},
    "EngineModel": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "S3DataSize": {},
    "S3DataUrl": {},
    "S3LogUrl": {},
    "SecurityGroupIds": {},
    "ServerName": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusDescription": {},
    "SubnetIds": {},
    "ToolsVersion": {},
    "UserArn": {}
  }
}
```

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
  "ServerName": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateServerResponse">CreateServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateserverresponse"></a>
<a id="schema_CreateServerResponse"></a>
<a id="tocScreateserverresponse"></a>
<a id="tocscreateserverresponse"></a>

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Server|object|false|none|none|

<h2 id="tocS_CreateServerRequest">CreateServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateserverrequest"></a>
<a id="schema_CreateServerRequest"></a>
<a id="tocScreateserverrequest"></a>
<a id="tocscreateserverrequest"></a>

```json
{
  "AssociatePublicIpAddress": {},
  "CustomDomain": {},
  "CustomCertificate": {},
  "CustomPrivateKey": {},
  "DisableAutomatedBackup": {},
  "Engine": {},
  "EngineModel": {},
  "EngineVersion": {},
  "EngineAttributes": {},
  "BackupRetentionCount": {},
  "ServerName": {},
  "InstanceProfileArn": {},
  "InstanceType": {},
  "KeyPair": {},
  "PreferredMaintenanceWindow": {},
  "PreferredBackupWindow": {},
  "SecurityGroupIds": {},
  "ServiceRoleArn": {},
  "SubnetIds": {},
  "Tags": {},
  "BackupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatePublicIpAddress|object|false|none|none|
|CustomDomain|object|false|none|none|
|CustomCertificate|object|false|none|none|
|CustomPrivateKey|object|false|none|none|
|DisableAutomatedBackup|object|false|none|none|
|Engine|object|true|none|none|
|EngineModel|object|false|none|none|
|EngineVersion|object|false|none|none|
|EngineAttributes|object|false|none|none|
|BackupRetentionCount|object|false|none|none|
|ServerName|object|true|none|none|
|InstanceProfileArn|object|true|none|none|
|InstanceType|object|true|none|none|
|KeyPair|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|ServiceRoleArn|object|true|none|none|
|SubnetIds|object|false|none|none|
|Tags|object|false|none|none|
|BackupId|object|false|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_DeleteBackupResponse">DeleteBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupresponse"></a>
<a id="schema_DeleteBackupResponse"></a>
<a id="tocSdeletebackupresponse"></a>
<a id="tocsdeletebackupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteBackupRequest">DeleteBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackuprequest"></a>
<a id="schema_DeleteBackupRequest"></a>
<a id="tocSdeletebackuprequest"></a>
<a id="tocsdeletebackuprequest"></a>

```json
{
  "BackupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|

<h2 id="tocS_DeleteServerResponse">DeleteServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserverresponse"></a>
<a id="schema_DeleteServerResponse"></a>
<a id="tocSdeleteserverresponse"></a>
<a id="tocsdeleteserverresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteServerRequest">DeleteServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserverrequest"></a>
<a id="schema_DeleteServerRequest"></a>
<a id="tocSdeleteserverrequest"></a>
<a id="tocsdeleteserverrequest"></a>

```json
{
  "ServerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|

<h2 id="tocS_DescribeAccountAttributesResponse">DescribeAccountAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountattributesresponse"></a>
<a id="schema_DescribeAccountAttributesResponse"></a>
<a id="tocSdescribeaccountattributesresponse"></a>
<a id="tocsdescribeaccountattributesresponse"></a>

```json
{
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_DescribeAccountAttributesRequest">DescribeAccountAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountattributesrequest"></a>
<a id="schema_DescribeAccountAttributesRequest"></a>
<a id="tocSdescribeaccountattributesrequest"></a>
<a id="tocsdescribeaccountattributesrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeBackupsResponse">DescribeBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupsresponse"></a>
<a id="schema_DescribeBackupsResponse"></a>
<a id="tocSdescribebackupsresponse"></a>
<a id="tocsdescribebackupsresponse"></a>

```json
{
  "Backups": {},
  "NextToken": {}
}
```

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
  "BackupId": {},
  "ServerName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|false|none|none|
|ServerName|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeEventsResponse">DescribeEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsresponse"></a>
<a id="schema_DescribeEventsResponse"></a>
<a id="tocSdescribeeventsresponse"></a>
<a id="tocsdescribeeventsresponse"></a>

```json
{
  "ServerEvents": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerEvents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEventsRequest">DescribeEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsrequest"></a>
<a id="schema_DescribeEventsRequest"></a>
<a id="tocSdescribeeventsrequest"></a>
<a id="tocsdescribeeventsrequest"></a>

```json
{
  "ServerName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeNodeAssociationStatusResponse">DescribeNodeAssociationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribenodeassociationstatusresponse"></a>
<a id="schema_DescribeNodeAssociationStatusResponse"></a>
<a id="tocSdescribenodeassociationstatusresponse"></a>
<a id="tocsdescribenodeassociationstatusresponse"></a>

```json
{
  "NodeAssociationStatus": {},
  "EngineAttributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeAssociationStatus|object|false|none|none|
|EngineAttributes|object|false|none|none|

<h2 id="tocS_DescribeNodeAssociationStatusRequest">DescribeNodeAssociationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribenodeassociationstatusrequest"></a>
<a id="schema_DescribeNodeAssociationStatusRequest"></a>
<a id="tocSdescribenodeassociationstatusrequest"></a>
<a id="tocsdescribenodeassociationstatusrequest"></a>

```json
{
  "NodeAssociationStatusToken": {},
  "ServerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeAssociationStatusToken|object|true|none|none|
|ServerName|object|true|none|none|

<h2 id="tocS_DescribeServersResponse">DescribeServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserversresponse"></a>
<a id="schema_DescribeServersResponse"></a>
<a id="tocSdescribeserversresponse"></a>
<a id="tocsdescribeserversresponse"></a>

```json
{
  "Servers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Servers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeServersRequest">DescribeServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserversrequest"></a>
<a id="schema_DescribeServersRequest"></a>
<a id="tocSdescribeserversrequest"></a>
<a id="tocsdescribeserversrequest"></a>

```json
{
  "ServerName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DisassociateNodeResponse">DisassociateNodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatenoderesponse"></a>
<a id="schema_DisassociateNodeResponse"></a>
<a id="tocSdisassociatenoderesponse"></a>
<a id="tocsdisassociatenoderesponse"></a>

```json
{
  "NodeAssociationStatusToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeAssociationStatusToken|object|false|none|none|

<h2 id="tocS_DisassociateNodeRequest">DisassociateNodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatenoderequest"></a>
<a id="schema_DisassociateNodeRequest"></a>
<a id="tocSdisassociatenoderequest"></a>
<a id="tocsdisassociatenoderequest"></a>

```json
{
  "ServerName": {},
  "NodeName": {},
  "EngineAttributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|
|NodeName|object|true|none|none|
|EngineAttributes|object|false|none|none|

<h2 id="tocS_ExportServerEngineAttributeResponse">ExportServerEngineAttributeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportserverengineattributeresponse"></a>
<a id="schema_ExportServerEngineAttributeResponse"></a>
<a id="tocSexportserverengineattributeresponse"></a>
<a id="tocsexportserverengineattributeresponse"></a>

```json
{
  "EngineAttribute": {
    "Name": {},
    "Value": {}
  },
  "ServerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineAttribute|object|false|none|none|
|ServerName|object|false|none|none|

<h2 id="tocS_ExportServerEngineAttributeRequest">ExportServerEngineAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportserverengineattributerequest"></a>
<a id="schema_ExportServerEngineAttributeRequest"></a>
<a id="tocSexportserverengineattributerequest"></a>
<a id="tocsexportserverengineattributerequest"></a>

```json
{
  "ExportAttributeName": {},
  "ServerName": {},
  "InputAttributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportAttributeName|object|true|none|none|
|ServerName|object|true|none|none|
|InputAttributes|object|false|none|none|

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

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_RestoreServerResponse">RestoreServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestoreserverresponse"></a>
<a id="schema_RestoreServerResponse"></a>
<a id="tocSrestoreserverresponse"></a>
<a id="tocsrestoreserverresponse"></a>

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Server|[Server](#schemaserver)|false|none|Describes a configuration management server. |

<h2 id="tocS_RestoreServerRequest">RestoreServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoreserverrequest"></a>
<a id="schema_RestoreServerRequest"></a>
<a id="tocSrestoreserverrequest"></a>
<a id="tocsrestoreserverrequest"></a>

```json
{
  "BackupId": {},
  "ServerName": {},
  "InstanceType": {},
  "KeyPair": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupId|object|true|none|none|
|ServerName|object|true|none|none|
|InstanceType|object|false|none|none|
|KeyPair|object|false|none|none|

<h2 id="tocS_StartMaintenanceResponse">StartMaintenanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmaintenanceresponse"></a>
<a id="schema_StartMaintenanceResponse"></a>
<a id="tocSstartmaintenanceresponse"></a>
<a id="tocsstartmaintenanceresponse"></a>

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Server|object|false|none|none|

<h2 id="tocS_StartMaintenanceRequest">StartMaintenanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmaintenancerequest"></a>
<a id="schema_StartMaintenanceRequest"></a>
<a id="tocSstartmaintenancerequest"></a>
<a id="tocsstartmaintenancerequest"></a>

```json
{
  "ServerName": {},
  "EngineAttributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|
|EngineAttributes|object|false|none|none|

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

<h2 id="tocS_UpdateServerResponse">UpdateServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserverresponse"></a>
<a id="schema_UpdateServerResponse"></a>
<a id="tocSupdateserverresponse"></a>
<a id="tocsupdateserverresponse"></a>

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Server|object|false|none|none|

<h2 id="tocS_UpdateServerRequest">UpdateServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserverrequest"></a>
<a id="schema_UpdateServerRequest"></a>
<a id="tocSupdateserverrequest"></a>
<a id="tocsupdateserverrequest"></a>

```json
{
  "DisableAutomatedBackup": {},
  "BackupRetentionCount": {},
  "ServerName": {},
  "PreferredMaintenanceWindow": "string",
  "PreferredBackupWindow": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisableAutomatedBackup|object|false|none|none|
|BackupRetentionCount|object|false|none|none|
|ServerName|object|true|none|none|
|PreferredMaintenanceWindow|[TimeWindowDefinition](#schematimewindowdefinition)|false|none|<p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>|
|PreferredBackupWindow|[TimeWindowDefinition](#schematimewindowdefinition)|false|none|<p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>|

<h2 id="tocS_UpdateServerEngineAttributesResponse">UpdateServerEngineAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserverengineattributesresponse"></a>
<a id="schema_UpdateServerEngineAttributesResponse"></a>
<a id="tocSupdateserverengineattributesresponse"></a>
<a id="tocsupdateserverengineattributesresponse"></a>

```json
{
  "Server": {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Server|object|false|none|none|

<h2 id="tocS_UpdateServerEngineAttributesRequest">UpdateServerEngineAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserverengineattributesrequest"></a>
<a id="schema_UpdateServerEngineAttributesRequest"></a>
<a id="tocSupdateserverengineattributesrequest"></a>
<a id="tocsupdateserverengineattributesrequest"></a>

```json
{
  "ServerName": {},
  "AttributeName": {},
  "AttributeValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|
|AttributeName|object|true|none|none|
|AttributeValue|object|false|none|none|

<h2 id="tocS_AWSOpsWorksCMResourceArn">AWSOpsWorksCMResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaawsopsworkscmresourcearn"></a>
<a id="schema_AWSOpsWorksCMResourceArn"></a>
<a id="tocSawsopsworkscmresourcearn"></a>
<a id="tocsawsopsworkscmresourcearn"></a>

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

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_AccountAttribute">AccountAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaaccountattribute"></a>
<a id="schema_AccountAttribute"></a>
<a id="tocSaccountattribute"></a>
<a id="tocsaccountattribute"></a>

```json
{
  "Name": {},
  "Maximum": {},
  "Used": {}
}
```

Stores account attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Maximum|object|false|none|none|
|Used|object|false|none|none|

<h2 id="tocS_AccountAttributes">AccountAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaaccountattributes"></a>
<a id="schema_AccountAttributes"></a>
<a id="tocSaccountattributes"></a>
<a id="tocsaccountattributes"></a>

```json
[
  {
    "Name": {},
    "Maximum": {},
    "Used": {}
  }
]
```

 A list of individual account attributes.

<h2 id="tocS_ServerName">ServerName</h2>
<!-- backwards compatibility -->
<a id="schemaservername"></a>
<a id="schema_ServerName"></a>
<a id="tocSservername"></a>
<a id="tocsservername"></a>

```json
"string"
```

<h2 id="tocS_NodeName">NodeName</h2>
<!-- backwards compatibility -->
<a id="schemanodename"></a>
<a id="schema_NodeName"></a>
<a id="tocSnodename"></a>
<a id="tocsnodename"></a>

```json
"string"
```

The node name that is used by <code>chef-client</code> or <code>puppet-agent</code>for a new node. We recommend to use a unique FQDN as hostname. For more information, see the <a href="https://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef</a> or <a href="https://docs.aws.amazon.com/https:/docs.puppet.com/puppet/4.10/man/agent.html">Puppet</a> documentation.

<h2 id="tocS_EngineAttributes">EngineAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaengineattributes"></a>
<a id="schema_EngineAttributes"></a>
<a id="tocSengineattributes"></a>
<a id="tocsengineattributes"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_NodeAssociationStatusToken">NodeAssociationStatusToken</h2>
<!-- backwards compatibility -->
<a id="schemanodeassociationstatustoken"></a>
<a id="schema_NodeAssociationStatusToken"></a>
<a id="tocSnodeassociationstatustoken"></a>
<a id="tocsnodeassociationstatustoken"></a>

```json
"string"
```

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_BackupId">BackupId</h2>
<!-- backwards compatibility -->
<a id="schemabackupid"></a>
<a id="schema_BackupId"></a>
<a id="tocSbackupid"></a>
<a id="tocsbackupid"></a>

```json
"string"
```

<h2 id="tocS_BackupType">BackupType</h2>
<!-- backwards compatibility -->
<a id="schemabackuptype"></a>
<a id="schema_BackupType"></a>
<a id="tocSbackuptype"></a>
<a id="tocsbackuptype"></a>

```json
"AUTOMATED"
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

<h2 id="tocS_TimeWindowDefinition">TimeWindowDefinition</h2>
<!-- backwards compatibility -->
<a id="schematimewindowdefinition"></a>
<a id="schema_TimeWindowDefinition"></a>
<a id="tocStimewindowdefinition"></a>
<a id="tocstimewindowdefinition"></a>

```json
"string"
```

<p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>

<h2 id="tocS_Strings">Strings</h2>
<!-- backwards compatibility -->
<a id="schemastrings"></a>
<a id="schema_Strings"></a>
<a id="tocSstrings"></a>
<a id="tocsstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BackupStatus">BackupStatus</h2>
<!-- backwards compatibility -->
<a id="schemabackupstatus"></a>
<a id="schema_BackupStatus"></a>
<a id="tocSbackupstatus"></a>
<a id="tocsbackupstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "BackupArn": {},
  "BackupId": {},
  "BackupType": {},
  "CreatedAt": {},
  "Description": {},
  "Engine": {},
  "EngineModel": {},
  "EngineVersion": {},
  "InstanceProfileArn": {},
  "InstanceType": {},
  "KeyPair": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "S3DataSize": {},
  "S3DataUrl": {},
  "S3LogUrl": {},
  "SecurityGroupIds": {},
  "ServerName": {},
  "ServiceRoleArn": {},
  "Status": {},
  "StatusDescription": {},
  "SubnetIds": {},
  "ToolsVersion": {},
  "UserArn": {}
}
```

Describes a single backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupArn|object|false|none|none|
|BackupId|object|false|none|none|
|BackupType|object|false|none|none|
|CreatedAt|object|false|none|none|
|Description|object|false|none|none|
|Engine|object|false|none|none|
|EngineModel|object|false|none|none|
|EngineVersion|object|false|none|none|
|InstanceProfileArn|object|false|none|none|
|InstanceType|object|false|none|none|
|KeyPair|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|S3DataSize|object|false|none|none|
|S3DataUrl|object|false|none|none|
|S3LogUrl|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|ServerName|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|Status|object|false|none|none|
|StatusDescription|object|false|none|none|
|SubnetIds|object|false|none|none|
|ToolsVersion|object|false|none|none|
|UserArn|object|false|none|none|

<h2 id="tocS_BackupRetentionCountDefinition">BackupRetentionCountDefinition</h2>
<!-- backwards compatibility -->
<a id="schemabackupretentioncountdefinition"></a>
<a id="schema_BackupRetentionCountDefinition"></a>
<a id="tocSbackupretentioncountdefinition"></a>
<a id="tocsbackupretentioncountdefinition"></a>

```json
1
```

<h2 id="tocS_Backups">Backups</h2>
<!-- backwards compatibility -->
<a id="schemabackups"></a>
<a id="schema_Backups"></a>
<a id="tocSbackups"></a>
<a id="tocsbackups"></a>

```json
[
  {
    "BackupArn": {},
    "BackupId": {},
    "BackupType": {},
    "CreatedAt": {},
    "Description": {},
    "Engine": {},
    "EngineModel": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "S3DataSize": {},
    "S3DataUrl": {},
    "S3LogUrl": {},
    "SecurityGroupIds": {},
    "ServerName": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusDescription": {},
    "SubnetIds": {},
    "ToolsVersion": {},
    "UserArn": {}
  }
]
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

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CustomDomain">CustomDomain</h2>
<!-- backwards compatibility -->
<a id="schemacustomdomain"></a>
<a id="schema_CustomDomain"></a>
<a id="tocScustomdomain"></a>
<a id="tocscustomdomain"></a>

```json
"string"
```

<h2 id="tocS_CustomCertificate">CustomCertificate</h2>
<!-- backwards compatibility -->
<a id="schemacustomcertificate"></a>
<a id="schema_CustomCertificate"></a>
<a id="tocScustomcertificate"></a>
<a id="tocscustomcertificate"></a>

```json
"string"
```

<h2 id="tocS_CustomPrivateKey">CustomPrivateKey</h2>
<!-- backwards compatibility -->
<a id="schemacustomprivatekey"></a>
<a id="schema_CustomPrivateKey"></a>
<a id="tocScustomprivatekey"></a>
<a id="tocscustomprivatekey"></a>

```json
"password"
```

<h2 id="tocS_InstanceProfileArn">InstanceProfileArn</h2>
<!-- backwards compatibility -->
<a id="schemainstanceprofilearn"></a>
<a id="schema_InstanceProfileArn"></a>
<a id="tocSinstanceprofilearn"></a>
<a id="tocsinstanceprofilearn"></a>

```json
"string"
```

<h2 id="tocS_KeyPair">KeyPair</h2>
<!-- backwards compatibility -->
<a id="schemakeypair"></a>
<a id="schema_KeyPair"></a>
<a id="tocSkeypair"></a>
<a id="tocskeypair"></a>

```json
"string"
```

<h2 id="tocS_ServiceRoleArn">ServiceRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaservicerolearn"></a>
<a id="schema_ServiceRoleArn"></a>
<a id="tocSservicerolearn"></a>
<a id="tocsservicerolearn"></a>

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
  "AssociatePublicIpAddress": {},
  "BackupRetentionCount": {},
  "ServerName": {},
  "CreatedAt": {},
  "CloudFormationStackArn": {},
  "CustomDomain": {},
  "DisableAutomatedBackup": {},
  "Endpoint": {},
  "Engine": {},
  "EngineModel": {},
  "EngineAttributes": {},
  "EngineVersion": {},
  "InstanceProfileArn": {},
  "InstanceType": {},
  "KeyPair": {},
  "MaintenanceStatus": {},
  "PreferredMaintenanceWindow": {},
  "PreferredBackupWindow": {},
  "SecurityGroupIds": {},
  "ServiceRoleArn": {},
  "Status": {},
  "StatusReason": {},
  "SubnetIds": {},
  "ServerArn": {}
}
```

Describes a configuration management server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatePublicIpAddress|object|false|none|none|
|BackupRetentionCount|object|false|none|none|
|ServerName|object|false|none|none|
|CreatedAt|object|false|none|none|
|CloudFormationStackArn|object|false|none|none|
|CustomDomain|object|false|none|none|
|DisableAutomatedBackup|object|false|none|none|
|Endpoint|object|false|none|none|
|Engine|object|false|none|none|
|EngineModel|object|false|none|none|
|EngineAttributes|object|false|none|none|
|EngineVersion|object|false|none|none|
|InstanceProfileArn|object|false|none|none|
|InstanceType|object|false|none|none|
|KeyPair|object|false|none|none|
|MaintenanceStatus|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|SubnetIds|object|false|none|none|
|ServerArn|object|false|none|none|

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

<h2 id="tocS_ServerEvents">ServerEvents</h2>
<!-- backwards compatibility -->
<a id="schemaserverevents"></a>
<a id="schema_ServerEvents"></a>
<a id="tocSserverevents"></a>
<a id="tocsserverevents"></a>

```json
[
  {
    "CreatedAt": {},
    "ServerName": {},
    "Message": {},
    "LogUrl": {}
  }
]
```

<h2 id="tocS_NodeAssociationStatus">NodeAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodeassociationstatus"></a>
<a id="schema_NodeAssociationStatus"></a>
<a id="tocSnodeassociationstatus"></a>
<a id="tocsnodeassociationstatus"></a>

```json
"SUCCESS"
```

<p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul>

<h2 id="tocS_Servers">Servers</h2>
<!-- backwards compatibility -->
<a id="schemaservers"></a>
<a id="schema_Servers"></a>
<a id="tocSservers"></a>
<a id="tocsservers"></a>

```json
[
  {
    "AssociatePublicIpAddress": {},
    "BackupRetentionCount": {},
    "ServerName": {},
    "CreatedAt": {},
    "CloudFormationStackArn": {},
    "CustomDomain": {},
    "DisableAutomatedBackup": {},
    "Endpoint": {},
    "Engine": {},
    "EngineModel": {},
    "EngineAttributes": {},
    "EngineVersion": {},
    "InstanceProfileArn": {},
    "InstanceType": {},
    "KeyPair": {},
    "MaintenanceStatus": {},
    "PreferredMaintenanceWindow": {},
    "PreferredBackupWindow": {},
    "SecurityGroupIds": {},
    "ServiceRoleArn": {},
    "Status": {},
    "StatusReason": {},
    "SubnetIds": {},
    "ServerArn": {}
  }
]
```

<h2 id="tocS_EngineAttributeName">EngineAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaengineattributename"></a>
<a id="schema_EngineAttributeName"></a>
<a id="tocSengineattributename"></a>
<a id="tocsengineattributename"></a>

```json
"string"
```

<h2 id="tocS_EngineAttributeValue">EngineAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaengineattributevalue"></a>
<a id="schema_EngineAttributeValue"></a>
<a id="tocSengineattributevalue"></a>
<a id="tocsengineattributevalue"></a>

```json
"password"
```

<h2 id="tocS_EngineAttribute">EngineAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaengineattribute"></a>
<a id="schema_EngineAttribute"></a>
<a id="tocSengineattribute"></a>
<a id="tocsengineattribute"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

A name and value pair that is specific to the engine of the server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_MaintenanceStatus">MaintenanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancestatus"></a>
<a id="schema_MaintenanceStatus"></a>
<a id="tocSmaintenancestatus"></a>
<a id="tocsmaintenancestatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_ServerStatus">ServerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaserverstatus"></a>
<a id="schema_ServerStatus"></a>
<a id="tocSserverstatus"></a>
<a id="tocsserverstatus"></a>

```json
"BACKING_UP"
```

<h2 id="tocS_ServerEvent">ServerEvent</h2>
<!-- backwards compatibility -->
<a id="schemaserverevent"></a>
<a id="schema_ServerEvent"></a>
<a id="tocSserverevent"></a>
<a id="tocsserverevent"></a>

```json
{
  "CreatedAt": {},
  "ServerName": {},
  "Message": {},
  "LogUrl": {}
}
```

An event that is related to the server, such as the start of maintenance or backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|ServerName|object|false|none|none|
|Message|object|false|none|none|
|LogUrl|object|false|none|none|

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
  "Key": {},
  "Value": {}
}
```

A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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
