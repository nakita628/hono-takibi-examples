<h1 id="aws-transfer-family">AWS Transfer Family v2018-11-05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up.

Base URLs:

* <a href="http://transfer.us-east-1.amazonaws.com">http://transfer.us-east-1.amazonaws.com</a> - The AWS Transfer multi-region endpoint

* <a href="https://transfer.us-east-1.amazonaws.com">https://transfer.us-east-1.amazonaws.com</a> - The AWS Transfer multi-region endpoint

* <a href="http://transfer.cn-north-1.amazonaws.com.cn">http://transfer.cn-north-1.amazonaws.com.cn</a> - The AWS Transfer endpoint for China (Beijing) and China (Ningxia)

* <a href="https://transfer.cn-north-1.amazonaws.com.cn">https://transfer.cn-north-1.amazonaws.com.cn</a> - The AWS Transfer endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/transfer/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-transfer-family-default">Default</h1>

## CreateAccess

<a id="opIdCreateAccess"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.CreateAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.CreateAccess' \
  -d '{
    "HomeDirectory": {},
    "HomeDirectoryType": {},
    "HomeDirectoryMappings": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "ServerId": {},
    "ExternalId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.CreateAccess`

Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.

> Body parameter

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "ExternalId": {}
}
```

<h3 id="createaccess-parameters">Parameters</h3>

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
|body|body|[CreateAccessRequest](#schemacreateaccessrequest)|true|none|
|» HomeDirectory|body|object|false|none|
|» HomeDirectoryType|body|object|false|none|
|» HomeDirectoryMappings|body|object|false|none|
|» Policy|body|object|false|none|
|» PosixProfile|body|[PosixProfile](#schemaposixprofile)|false|The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.|
|» Role|body|object|true|none|
|» ServerId|body|object|true|none|
|» ExternalId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.CreateAccess|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessResponse](#schemacreateaccessresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAgreement

<a id="opIdCreateAgreement"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.CreateAgreement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.CreateAgreement' \
  -d '{
    "Description": {},
    "ServerId": {},
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "BaseDirectory": {},
    "AccessRole": {},
    "Status": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TransferService.CreateAgreement`

<p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>

> Body parameter

```json
{
  "Description": {},
  "ServerId": {},
  "LocalProfileId": {},
  "PartnerProfileId": {},
  "BaseDirectory": {},
  "AccessRole": {},
  "Status": {},
  "Tags": {}
}
```

<h3 id="createagreement-parameters">Parameters</h3>

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
|body|body|[CreateAgreementRequest](#schemacreateagreementrequest)|true|none|
|» Description|body|object|false|none|
|» ServerId|body|object|true|none|
|» LocalProfileId|body|object|true|none|
|» PartnerProfileId|body|object|true|none|
|» BaseDirectory|body|object|true|none|
|» AccessRole|body|object|true|none|
|» Status|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.CreateAgreement|

> Example responses

> 200 Response

```json
{
  "AgreementId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createagreement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAgreementResponse](#schemacreateagreementresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnector

<a id="opIdCreateConnector"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.CreateConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.CreateConnector' \
  -d '{
    "Url": {},
    "As2Config": {
      "LocalProfileId": {},
      "PartnerProfileId": {},
      "MessageSubject": {},
      "Compression": {},
      "EncryptionAlgorithm": {},
      "SigningAlgorithm": {},
      "MdnSigningAlgorithm": {},
      "MdnResponse": {}
    },
    "AccessRole": {},
    "LoggingRole": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TransferService.CreateConnector`

Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.

> Body parameter

```json
{
  "Url": {},
  "As2Config": {
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "MessageSubject": {},
    "Compression": {},
    "EncryptionAlgorithm": {},
    "SigningAlgorithm": {},
    "MdnSigningAlgorithm": {},
    "MdnResponse": {}
  },
  "AccessRole": {},
  "LoggingRole": {},
  "Tags": {}
}
```

<h3 id="createconnector-parameters">Parameters</h3>

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
|body|body|[CreateConnectorRequest](#schemacreateconnectorrequest)|true|none|
|» Url|body|object|true|none|
|» As2Config|body|object|true|none|
|» » LocalProfileId|body|object|false|none|
|» » PartnerProfileId|body|object|false|none|
|» » MessageSubject|body|object|false|none|
|» » Compression|body|object|false|none|
|» » EncryptionAlgorithm|body|object|false|none|
|» » SigningAlgorithm|body|object|false|none|
|» » MdnSigningAlgorithm|body|object|false|none|
|» » MdnResponse|body|object|false|none|
|» AccessRole|body|object|true|none|
|» LoggingRole|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.CreateConnector|

> Example responses

> 200 Response

```json
{
  "ConnectorId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectorResponse](#schemacreateconnectorresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProfile

<a id="opIdCreateProfile"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.CreateProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.CreateProfile' \
  -d '{
    "As2Id": {},
    "ProfileType": {},
    "CertificateIds": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TransferService.CreateProfile`

Creates the local or partner profile to use for AS2 transfers.

> Body parameter

```json
{
  "As2Id": {},
  "ProfileType": {},
  "CertificateIds": {},
  "Tags": {}
}
```

<h3 id="createprofile-parameters">Parameters</h3>

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
|body|body|[CreateProfileRequest](#schemacreateprofilerequest)|true|none|
|» As2Id|body|object|true|none|
|» ProfileType|body|object|true|none|
|» CertificateIds|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.CreateProfile|

> Example responses

> 200 Response

```json
{
  "ProfileId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProfileResponse](#schemacreateprofileresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServer

<a id="opIdCreateServer"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.CreateServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.CreateServer' \
  -d '{
    "Certificate": {},
    "Domain": {},
    "EndpointDetails": {
      "AddressAllocationIds": {},
      "SubnetIds": {},
      "VpcEndpointId": {},
      "VpcId": {},
      "SecurityGroupIds": {}
    },
    "EndpointType": {},
    "HostKey": {},
    "IdentityProviderDetails": {
      "Url": {},
      "InvocationRole": {},
      "DirectoryId": {},
      "Function": {}
    },
    "IdentityProviderType": {},
    "LoggingRole": {},
    "PostAuthenticationLoginBanner": {},
    "PreAuthenticationLoginBanner": {},
    "Protocols": {},
    "ProtocolDetails": {
      "PassiveIp": {},
      "TlsSessionResumptionMode": {},
      "SetStatOption": {},
      "As2Transports": {}
    },
    "SecurityPolicyName": {},
    "Tags": {},
    "WorkflowDetails": {
      "OnUpload": {},
      "OnPartialUpload": {}
    }
  }'
```

`POST /#X-Amz-Target=TransferService.CreateServer`

Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.

> Body parameter

```json
{
  "Certificate": {},
  "Domain": {},
  "EndpointDetails": {
    "AddressAllocationIds": {},
    "SubnetIds": {},
    "VpcEndpointId": {},
    "VpcId": {},
    "SecurityGroupIds": {}
  },
  "EndpointType": {},
  "HostKey": {},
  "IdentityProviderDetails": {
    "Url": {},
    "InvocationRole": {},
    "DirectoryId": {},
    "Function": {}
  },
  "IdentityProviderType": {},
  "LoggingRole": {},
  "PostAuthenticationLoginBanner": {},
  "PreAuthenticationLoginBanner": {},
  "Protocols": {},
  "ProtocolDetails": {
    "PassiveIp": {},
    "TlsSessionResumptionMode": {},
    "SetStatOption": {},
    "As2Transports": {}
  },
  "SecurityPolicyName": {},
  "Tags": {},
  "WorkflowDetails": {
    "OnUpload": {},
    "OnPartialUpload": {}
  }
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
|» Certificate|body|object|false|none|
|» Domain|body|object|false|none|
|» EndpointDetails|body|object|false|none|
|» » AddressAllocationIds|body|object|false|none|
|» » SubnetIds|body|object|false|none|
|» » VpcEndpointId|body|object|false|none|
|» » VpcId|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» EndpointType|body|object|false|none|
|» HostKey|body|object|false|none|
|» IdentityProviderDetails|body|object|false|none|
|» » Url|body|object|false|none|
|» » InvocationRole|body|object|false|none|
|» » DirectoryId|body|object|false|none|
|» » Function|body|object|false|none|
|» IdentityProviderType|body|object|false|none|
|» LoggingRole|body|object|false|none|
|» PostAuthenticationLoginBanner|body|object|false|none|
|» PreAuthenticationLoginBanner|body|object|false|none|
|» Protocols|body|object|false|none|
|» ProtocolDetails|body|object|false|none|
|» » PassiveIp|body|object|false|none|
|» » TlsSessionResumptionMode|body|object|false|none|
|» » SetStatOption|body|object|false|none|
|» » As2Transports|body|object|false|none|
|» SecurityPolicyName|body|object|false|none|
|» Tags|body|object|false|none|
|» WorkflowDetails|body|object|false|none|
|» » OnUpload|body|object|false|none|
|» » OnPartialUpload|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.CreateServer|

> Example responses

> 200 Response

```json
{
  "ServerId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServerResponse](#schemacreateserverresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.CreateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.CreateUser' \
  -d '{
    "HomeDirectory": {},
    "HomeDirectoryType": {},
    "HomeDirectoryMappings": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "ServerId": {},
    "SshPublicKeyBody": {},
    "Tags": {},
    "UserName": {}
  }'
```

`POST /#X-Amz-Target=TransferService.CreateUser`

Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.

> Body parameter

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "SshPublicKeyBody": {},
  "Tags": {},
  "UserName": {}
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
|» HomeDirectory|body|object|false|none|
|» HomeDirectoryType|body|object|false|none|
|» HomeDirectoryMappings|body|object|false|none|
|» Policy|body|object|false|none|
|» PosixProfile|body|object|false|none|
|» » Uid|body|object|true|none|
|» » Gid|body|object|true|none|
|» » SecondaryGids|body|object|false|none|
|» Role|body|object|true|none|
|» ServerId|body|object|true|none|
|» SshPublicKeyBody|body|object|false|none|
|» Tags|body|object|false|none|
|» UserName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.CreateUser|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "UserName": {}
}
```

> 480 Response

```json
null
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
|200|OK|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkflow

<a id="opIdCreateWorkflow"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.CreateWorkflow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.CreateWorkflow' \
  -d '{
    "Description": {},
    "Steps": {},
    "OnExceptionSteps": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TransferService.CreateWorkflow`

 Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 

> Body parameter

```json
{
  "Description": {},
  "Steps": {},
  "OnExceptionSteps": {},
  "Tags": {}
}
```

<h3 id="createworkflow-parameters">Parameters</h3>

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
|body|body|[CreateWorkflowRequest](#schemacreateworkflowrequest)|true|none|
|» Description|body|object|false|none|
|» Steps|body|object|true|none|
|» OnExceptionSteps|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.CreateWorkflow|

> Example responses

> 200 Response

```json
{
  "WorkflowId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createworkflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkflowResponse](#schemacreateworkflowresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccess

<a id="opIdDeleteAccess"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteAccess' \
  -d '{
    "ServerId": {},
    "ExternalId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteAccess`

Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

> Body parameter

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

<h3 id="deleteaccess-parameters">Parameters</h3>

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
|body|body|[DeleteAccessRequest](#schemadeleteaccessrequest)|true|none|
|» ServerId|body|object|true|none|
|» ExternalId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteAccess|

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

<h3 id="deleteaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAgreement

<a id="opIdDeleteAgreement"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteAgreement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteAgreement' \
  -d '{
    "AgreementId": {},
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteAgreement`

Delete the agreement that's specified in the provided <code>AgreementId</code>.

> Body parameter

```json
{
  "AgreementId": {},
  "ServerId": {}
}
```

<h3 id="deleteagreement-parameters">Parameters</h3>

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
|body|body|[DeleteAgreementRequest](#schemadeleteagreementrequest)|true|none|
|» AgreementId|body|object|true|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteAgreement|

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

<h3 id="deleteagreement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCertificate

<a id="opIdDeleteCertificate"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteCertificate' \
  -d '{
    "CertificateId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteCertificate`

Deletes the certificate that's specified in the <code>CertificateId</code> parameter.

> Body parameter

```json
{
  "CertificateId": {}
}
```

<h3 id="deletecertificate-parameters">Parameters</h3>

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
|body|body|[DeleteCertificateRequest](#schemadeletecertificaterequest)|true|none|
|» CertificateId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteCertificate|

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

<h3 id="deletecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnector

<a id="opIdDeleteConnector"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteConnector' \
  -d '{
    "ConnectorId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteConnector`

Deletes the agreement that's specified in the provided <code>ConnectorId</code>.

> Body parameter

```json
{
  "ConnectorId": {}
}
```

<h3 id="deleteconnector-parameters">Parameters</h3>

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
|body|body|[DeleteConnectorRequest](#schemadeleteconnectorrequest)|true|none|
|» ConnectorId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteConnector|

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

<h3 id="deleteconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHostKey

<a id="opIdDeleteHostKey"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteHostKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteHostKey' \
  -d '{
    "ServerId": {},
    "HostKeyId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteHostKey`

Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.

> Body parameter

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

<h3 id="deletehostkey-parameters">Parameters</h3>

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
|body|body|[DeleteHostKeyRequest](#schemadeletehostkeyrequest)|true|none|
|» ServerId|body|object|true|none|
|» HostKeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteHostKey|

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

<h3 id="deletehostkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProfile

<a id="opIdDeleteProfile"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteProfile' \
  -d '{
    "ProfileId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteProfile`

Deletes the profile that's specified in the <code>ProfileId</code> parameter.

> Body parameter

```json
{
  "ProfileId": {}
}
```

<h3 id="deleteprofile-parameters">Parameters</h3>

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
|body|body|[DeleteProfileRequest](#schemadeleteprofilerequest)|true|none|
|» ProfileId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteProfile|

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

<h3 id="deleteprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServer

<a id="opIdDeleteServer"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteServer' \
  -d '{
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteServer`

<p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>

> Body parameter

```json
{
  "ServerId": {}
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
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteServer|

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

<h3 id="deleteserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSshPublicKey

<a id="opIdDeleteSshPublicKey"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteSshPublicKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteSshPublicKey' \
  -d '{
    "ServerId": {},
    "SshPublicKeyId": {},
    "UserName": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteSshPublicKey`

Deletes a user's Secure Shell (SSH) public key.

> Body parameter

```json
{
  "ServerId": {},
  "SshPublicKeyId": {},
  "UserName": {}
}
```

<h3 id="deletesshpublickey-parameters">Parameters</h3>

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
|body|body|[DeleteSshPublicKeyRequest](#schemadeletesshpublickeyrequest)|true|none|
|» ServerId|body|object|true|none|
|» SshPublicKeyId|body|object|true|none|
|» UserName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteSshPublicKey|

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

<h3 id="deletesshpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteUser' \
  -d '{
    "ServerId": {},
    "UserName": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteUser`

<p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>

> Body parameter

```json
{
  "ServerId": {},
  "UserName": {}
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
|» ServerId|body|object|true|none|
|» UserName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteUser|

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

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkflow

<a id="opIdDeleteWorkflow"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DeleteWorkflow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DeleteWorkflow' \
  -d '{
    "WorkflowId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DeleteWorkflow`

Deletes the specified workflow.

> Body parameter

```json
{
  "WorkflowId": {}
}
```

<h3 id="deleteworkflow-parameters">Parameters</h3>

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
|body|body|[DeleteWorkflowRequest](#schemadeleteworkflowrequest)|true|none|
|» WorkflowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DeleteWorkflow|

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

<h3 id="deleteworkflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccess

<a id="opIdDescribeAccess"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeAccess' \
  -d '{
    "ServerId": {},
    "ExternalId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeAccess`

<p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>

> Body parameter

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

<h3 id="describeaccess-parameters">Parameters</h3>

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
|body|body|[DescribeAccessRequest](#schemadescribeaccessrequest)|true|none|
|» ServerId|body|object|true|none|
|» ExternalId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeAccess|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "Access": {
    "HomeDirectory": {},
    "HomeDirectoryMappings": {},
    "HomeDirectoryType": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "ExternalId": {}
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

<h3 id="describeaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccessResponse](#schemadescribeaccessresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAgreement

<a id="opIdDescribeAgreement"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeAgreement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeAgreement' \
  -d '{
    "AgreementId": {},
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeAgreement`

Describes the agreement that's identified by the <code>AgreementId</code>.

> Body parameter

```json
{
  "AgreementId": {},
  "ServerId": {}
}
```

<h3 id="describeagreement-parameters">Parameters</h3>

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
|body|body|[DescribeAgreementRequest](#schemadescribeagreementrequest)|true|none|
|» AgreementId|body|object|true|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeAgreement|

> Example responses

> 200 Response

```json
{
  "Agreement": {
    "Arn": {},
    "AgreementId": {},
    "Description": {},
    "Status": {},
    "ServerId": {},
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "BaseDirectory": {},
    "AccessRole": {},
    "Tags": {}
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

<h3 id="describeagreement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAgreementResponse](#schemadescribeagreementresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCertificate

<a id="opIdDescribeCertificate"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeCertificate' \
  -d '{
    "CertificateId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeCertificate`

Describes the certificate that's identified by the <code>CertificateId</code>.

> Body parameter

```json
{
  "CertificateId": {}
}
```

<h3 id="describecertificate-parameters">Parameters</h3>

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
|body|body|[DescribeCertificateRequest](#schemadescribecertificaterequest)|true|none|
|» CertificateId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {
    "Arn": {},
    "CertificateId": {},
    "Usage": {},
    "Status": {},
    "Certificate": {},
    "CertificateChain": {},
    "ActiveDate": {},
    "InactiveDate": {},
    "Serial": {},
    "NotBeforeDate": {},
    "NotAfterDate": {},
    "Type": {},
    "Description": {},
    "Tags": {}
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

<h3 id="describecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCertificateResponse](#schemadescribecertificateresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnector

<a id="opIdDescribeConnector"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeConnector' \
  -d '{
    "ConnectorId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeConnector`

Describes the connector that's identified by the <code>ConnectorId.</code> 

> Body parameter

```json
{
  "ConnectorId": {}
}
```

<h3 id="describeconnector-parameters">Parameters</h3>

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
|body|body|[DescribeConnectorRequest](#schemadescribeconnectorrequest)|true|none|
|» ConnectorId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeConnector|

> Example responses

> 200 Response

```json
{
  "Connector": {
    "Arn": {},
    "ConnectorId": {},
    "Url": {},
    "As2Config": {
      "LocalProfileId": {},
      "PartnerProfileId": {},
      "MessageSubject": {},
      "Compression": {},
      "EncryptionAlgorithm": {},
      "SigningAlgorithm": {},
      "MdnSigningAlgorithm": {},
      "MdnResponse": {}
    },
    "AccessRole": {},
    "LoggingRole": {},
    "Tags": {}
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

<h3 id="describeconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectorResponse](#schemadescribeconnectorresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExecution

<a id="opIdDescribeExecution"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeExecution' \
  -d '{
    "ExecutionId": {},
    "WorkflowId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeExecution`

You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.

> Body parameter

```json
{
  "ExecutionId": {},
  "WorkflowId": {}
}
```

<h3 id="describeexecution-parameters">Parameters</h3>

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
|body|body|[DescribeExecutionRequest](#schemadescribeexecutionrequest)|true|none|
|» ExecutionId|body|object|true|none|
|» WorkflowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeExecution|

> Example responses

> 200 Response

```json
{
  "WorkflowId": {},
  "Execution": {
    "ExecutionId": {},
    "InitialFileLocation": {
      "S3FileLocation": {
        "Bucket": {},
        "Key": {},
        "VersionId": {},
        "Etag": {}
      },
      "EfsFileLocation": {
        "FileSystemId": {},
        "Path": {}
      }
    },
    "ServiceMetadata": {
      "UserDetails": {
        "UserName": {},
        "ServerId": {},
        "SessionId": {}
      }
    },
    "ExecutionRole": {},
    "LoggingConfiguration": {
      "LoggingRole": {},
      "LogGroupName": {}
    },
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Status": {},
    "Results": {
      "Steps": {},
      "OnExceptionSteps": {}
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

<h3 id="describeexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExecutionResponse](#schemadescribeexecutionresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHostKey

<a id="opIdDescribeHostKey"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeHostKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeHostKey' \
  -d '{
    "ServerId": {},
    "HostKeyId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeHostKey`

Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.

> Body parameter

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

<h3 id="describehostkey-parameters">Parameters</h3>

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
|body|body|[DescribeHostKeyRequest](#schemadescribehostkeyrequest)|true|none|
|» ServerId|body|object|true|none|
|» HostKeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeHostKey|

> Example responses

> 200 Response

```json
{
  "HostKey": {
    "Arn": {},
    "HostKeyId": {},
    "HostKeyFingerprint": {},
    "Description": {},
    "Type": {},
    "DateImported": {},
    "Tags": {}
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

<h3 id="describehostkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHostKeyResponse](#schemadescribehostkeyresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProfile

<a id="opIdDescribeProfile"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeProfile' \
  -d '{
    "ProfileId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeProfile`

Returns the details of the profile that's specified by the <code>ProfileId</code>.

> Body parameter

```json
{
  "ProfileId": {}
}
```

<h3 id="describeprofile-parameters">Parameters</h3>

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
|body|body|[DescribeProfileRequest](#schemadescribeprofilerequest)|true|none|
|» ProfileId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeProfile|

> Example responses

> 200 Response

```json
{
  "Profile": {
    "Arn": {},
    "ProfileId": {},
    "ProfileType": {},
    "As2Id": {},
    "CertificateIds": {},
    "Tags": {}
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

<h3 id="describeprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProfileResponse](#schemadescribeprofileresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSecurityPolicy

<a id="opIdDescribeSecurityPolicy"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeSecurityPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeSecurityPolicy' \
  -d '{
    "SecurityPolicyName": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeSecurityPolicy`

Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.

> Body parameter

```json
{
  "SecurityPolicyName": {}
}
```

<h3 id="describesecuritypolicy-parameters">Parameters</h3>

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
|body|body|[DescribeSecurityPolicyRequest](#schemadescribesecuritypolicyrequest)|true|none|
|» SecurityPolicyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeSecurityPolicy|

> Example responses

> 200 Response

```json
{
  "SecurityPolicy": {
    "Fips": {},
    "SecurityPolicyName": {},
    "SshCiphers": {},
    "SshKexs": {},
    "SshMacs": {},
    "TlsCiphers": {}
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

<h3 id="describesecuritypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSecurityPolicyResponse](#schemadescribesecuritypolicyresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServer

<a id="opIdDescribeServer"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeServer' \
  -d '{
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeServer`

<p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>

> Body parameter

```json
{
  "ServerId": {}
}
```

<h3 id="describeserver-parameters">Parameters</h3>

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
|body|body|[DescribeServerRequest](#schemadescribeserverrequest)|true|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeServer|

> Example responses

> 200 Response

```json
{
  "Server": {
    "Arn": {},
    "Certificate": {},
    "ProtocolDetails": {
      "PassiveIp": {},
      "TlsSessionResumptionMode": {},
      "SetStatOption": {},
      "As2Transports": {}
    },
    "Domain": {},
    "EndpointDetails": {
      "AddressAllocationIds": {},
      "SubnetIds": {},
      "VpcEndpointId": {},
      "VpcId": {},
      "SecurityGroupIds": {}
    },
    "EndpointType": {},
    "HostKeyFingerprint": {},
    "IdentityProviderDetails": {
      "Url": {},
      "InvocationRole": {},
      "DirectoryId": {},
      "Function": {}
    },
    "IdentityProviderType": {},
    "LoggingRole": {},
    "PostAuthenticationLoginBanner": {},
    "PreAuthenticationLoginBanner": {},
    "Protocols": {},
    "SecurityPolicyName": {},
    "ServerId": {},
    "State": {},
    "Tags": {},
    "UserCount": {},
    "WorkflowDetails": {
      "OnUpload": {},
      "OnPartialUpload": {}
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

<h3 id="describeserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServerResponse](#schemadescribeserverresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUser

<a id="opIdDescribeUser"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeUser' \
  -d '{
    "ServerId": {},
    "UserName": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeUser`

<p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>

> Body parameter

```json
{
  "ServerId": {},
  "UserName": {}
}
```

<h3 id="describeuser-parameters">Parameters</h3>

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
|body|body|[DescribeUserRequest](#schemadescribeuserrequest)|true|none|
|» ServerId|body|object|true|none|
|» UserName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeUser|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "User": {
    "Arn": {},
    "HomeDirectory": {},
    "HomeDirectoryMappings": {},
    "HomeDirectoryType": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "SshPublicKeys": {},
    "Tags": {},
    "UserName": {}
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

<h3 id="describeuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserResponse](#schemadescribeuserresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkflow

<a id="opIdDescribeWorkflow"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.DescribeWorkflow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.DescribeWorkflow' \
  -d '{
    "WorkflowId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.DescribeWorkflow`

Describes the specified workflow.

> Body parameter

```json
{
  "WorkflowId": {}
}
```

<h3 id="describeworkflow-parameters">Parameters</h3>

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
|body|body|[DescribeWorkflowRequest](#schemadescribeworkflowrequest)|true|none|
|» WorkflowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.DescribeWorkflow|

> Example responses

> 200 Response

```json
{
  "Workflow": {
    "Arn": {},
    "Description": {},
    "Steps": {},
    "OnExceptionSteps": {},
    "WorkflowId": {},
    "Tags": {}
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

<h3 id="describeworkflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkflowResponse](#schemadescribeworkflowresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportCertificate

<a id="opIdImportCertificate"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ImportCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ImportCertificate' \
  -d '{
    "Usage": {},
    "Certificate": {},
    "CertificateChain": {},
    "PrivateKey": {},
    "ActiveDate": {},
    "InactiveDate": {},
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ImportCertificate`

Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.

> Body parameter

```json
{
  "Usage": {},
  "Certificate": {},
  "CertificateChain": {},
  "PrivateKey": {},
  "ActiveDate": {},
  "InactiveDate": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="importcertificate-parameters">Parameters</h3>

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
|body|body|[ImportCertificateRequest](#schemaimportcertificaterequest)|true|none|
|» Usage|body|object|true|none|
|» Certificate|body|object|true|none|
|» CertificateChain|body|object|false|none|
|» PrivateKey|body|object|false|none|
|» ActiveDate|body|object|false|none|
|» InactiveDate|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ImportCertificate|

> Example responses

> 200 Response

```json
{
  "CertificateId": {}
}
```

> 480 Response

```json
null
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

<h3 id="importcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportCertificateResponse](#schemaimportcertificateresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportHostKey

<a id="opIdImportHostKey"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ImportHostKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ImportHostKey' \
  -d '{
    "ServerId": {},
    "HostKeyBody": {},
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ImportHostKey`

Adds a host key to the server that's specified by the <code>ServerId</code> parameter.

> Body parameter

```json
{
  "ServerId": {},
  "HostKeyBody": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="importhostkey-parameters">Parameters</h3>

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
|body|body|[ImportHostKeyRequest](#schemaimporthostkeyrequest)|true|none|
|» ServerId|body|object|true|none|
|» HostKeyBody|body|object|true|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ImportHostKey|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

> 480 Response

```json
null
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

<h3 id="importhostkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportHostKeyResponse](#schemaimporthostkeyresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportSshPublicKey

<a id="opIdImportSshPublicKey"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ImportSshPublicKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ImportSshPublicKey' \
  -d '{
    "ServerId": {},
    "SshPublicKeyBody": {},
    "UserName": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ImportSshPublicKey`

<p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>

> Body parameter

```json
{
  "ServerId": {},
  "SshPublicKeyBody": {},
  "UserName": {}
}
```

<h3 id="importsshpublickey-parameters">Parameters</h3>

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
|body|body|[ImportSshPublicKeyRequest](#schemaimportsshpublickeyrequest)|true|none|
|» ServerId|body|object|true|none|
|» SshPublicKeyBody|body|object|true|none|
|» UserName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ImportSshPublicKey|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "SshPublicKeyId": {},
  "UserName": {}
}
```

> 480 Response

```json
null
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

<h3 id="importsshpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportSshPublicKeyResponse](#schemaimportsshpublickeyresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccesses

<a id="opIdListAccesses"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListAccesses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListAccesses' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListAccesses`

Lists the details for all the accesses you have on your server.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

<h3 id="listaccesses-parameters">Parameters</h3>

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
|body|body|[ListAccessesRequest](#schemalistaccessesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListAccesses|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ServerId": {},
  "Accesses": {}
}
```

> 480 Response

```json
null
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

<h3 id="listaccesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessesResponse](#schemalistaccessesresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAgreements

<a id="opIdListAgreements"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListAgreements' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListAgreements' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListAgreements`

Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

<h3 id="listagreements-parameters">Parameters</h3>

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
|body|body|[ListAgreementsRequest](#schemalistagreementsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListAgreements|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Agreements": {}
}
```

> 480 Response

```json
null
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

<h3 id="listagreements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAgreementsResponse](#schemalistagreementsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCertificates

<a id="opIdListCertificates"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListCertificates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListCertificates' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListCertificates`

Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcertificates-parameters">Parameters</h3>

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
|body|body|[ListCertificatesRequest](#schemalistcertificatesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListCertificates|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Certificates": {}
}
```

> 480 Response

```json
null
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

<h3 id="listcertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCertificatesResponse](#schemalistcertificatesresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnectors

<a id="opIdListConnectors"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListConnectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListConnectors' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListConnectors`

Lists the connectors for the specified Region.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listconnectors-parameters">Parameters</h3>

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
|body|body|[ListConnectorsRequest](#schemalistconnectorsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListConnectors|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Connectors": {}
}
```

> 480 Response

```json
null
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

<h3 id="listconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectorsResponse](#schemalistconnectorsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExecutions

<a id="opIdListExecutions"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListExecutions' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "WorkflowId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListExecutions`

Lists all executions for the specified workflow.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "WorkflowId": {}
}
```

<h3 id="listexecutions-parameters">Parameters</h3>

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
|body|body|[ListExecutionsRequest](#schemalistexecutionsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» WorkflowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListExecutions|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "WorkflowId": {},
  "Executions": {}
}
```

> 480 Response

```json
null
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

<h3 id="listexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExecutionsResponse](#schemalistexecutionsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHostKeys

<a id="opIdListHostKeys"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListHostKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListHostKeys' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListHostKeys`

Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

<h3 id="listhostkeys-parameters">Parameters</h3>

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
|body|body|[ListHostKeysRequest](#schemalisthostkeysrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListHostKeys|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ServerId": {},
  "HostKeys": {}
}
```

> 480 Response

```json
null
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

<h3 id="listhostkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHostKeysResponse](#schemalisthostkeysresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProfiles

<a id="opIdListProfiles"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListProfiles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListProfiles' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "ProfileType": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListProfiles`

Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ProfileType": {}
}
```

<h3 id="listprofiles-parameters">Parameters</h3>

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
|body|body|[ListProfilesRequest](#schemalistprofilesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» ProfileType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListProfiles|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Profiles": {}
}
```

> 480 Response

```json
null
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

<h3 id="listprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProfilesResponse](#schemalistprofilesresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSecurityPolicies

<a id="opIdListSecurityPolicies"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListSecurityPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListSecurityPolicies' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListSecurityPolicies`

Lists the security policies that are attached to your file transfer protocol-enabled servers.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listsecuritypolicies-parameters">Parameters</h3>

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
|body|body|[ListSecurityPoliciesRequest](#schemalistsecuritypoliciesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListSecurityPolicies|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "SecurityPolicyNames": {}
}
```

> 480 Response

```json
null
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

<h3 id="listsecuritypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSecurityPoliciesResponse](#schemalistsecuritypoliciesresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServers

<a id="opIdListServers"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListServers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListServers' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListServers`

Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listservers-parameters">Parameters</h3>

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
|body|body|[ListServersRequest](#schemalistserversrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListServers|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Servers": {}
}
```

> 480 Response

```json
null
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

<h3 id="listservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServersResponse](#schemalistserversresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListTagsForResource' \
  -d '{
    "Arn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListTagsForResource`

Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.

> Body parameter

```json
{
  "Arn": {},
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
|» Arn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "NextToken": {},
  "Tags": {}
}
```

> 480 Response

```json
null
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
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListUsers' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListUsers`

Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

<h3 id="listusers-parameters">Parameters</h3>

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
|body|body|[ListUsersRequest](#schemalistusersrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListUsers|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ServerId": {},
  "Users": {}
}
```

> 480 Response

```json
null
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

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkflows

<a id="opIdListWorkflows"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.ListWorkflows' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.ListWorkflows' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=TransferService.ListWorkflows`

Lists all of your workflows.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listworkflows-parameters">Parameters</h3>

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
|body|body|[ListWorkflowsRequest](#schemalistworkflowsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.ListWorkflows|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Workflows": {}
}
```

> 480 Response

```json
null
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

<h3 id="listworkflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkflowsResponse](#schemalistworkflowsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendWorkflowStepState

<a id="opIdSendWorkflowStepState"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.SendWorkflowStepState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.SendWorkflowStepState' \
  -d '{
    "WorkflowId": {},
    "ExecutionId": {},
    "Token": {},
    "Status": {}
  }'
```

`POST /#X-Amz-Target=TransferService.SendWorkflowStepState`

<p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>

> Body parameter

```json
{
  "WorkflowId": {},
  "ExecutionId": {},
  "Token": {},
  "Status": {}
}
```

<h3 id="sendworkflowstepstate-parameters">Parameters</h3>

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
|body|body|[SendWorkflowStepStateRequest](#schemasendworkflowstepstaterequest)|true|none|
|» WorkflowId|body|object|true|none|
|» ExecutionId|body|object|true|none|
|» Token|body|object|true|none|
|» Status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.SendWorkflowStepState|

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

<h3 id="sendworkflowstepstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendWorkflowStepStateResponse](#schemasendworkflowstepstateresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFileTransfer

<a id="opIdStartFileTransfer"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.StartFileTransfer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.StartFileTransfer' \
  -d '{
    "ConnectorId": {},
    "SendFilePaths": {}
  }'
```

`POST /#X-Amz-Target=TransferService.StartFileTransfer`

Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 

> Body parameter

```json
{
  "ConnectorId": {},
  "SendFilePaths": {}
}
```

<h3 id="startfiletransfer-parameters">Parameters</h3>

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
|body|body|[StartFileTransferRequest](#schemastartfiletransferrequest)|true|none|
|» ConnectorId|body|object|true|none|
|» SendFilePaths|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.StartFileTransfer|

> Example responses

> 200 Response

```json
{
  "TransferId": {}
}
```

> 480 Response

```json
null
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

<h3 id="startfiletransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartFileTransferResponse](#schemastartfiletransferresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartServer

<a id="opIdStartServer"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.StartServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.StartServer' \
  -d '{
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.StartServer`

<p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

> Body parameter

```json
{
  "ServerId": {}
}
```

<h3 id="startserver-parameters">Parameters</h3>

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
|body|body|[StartServerRequest](#schemastartserverrequest)|true|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.StartServer|

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

<h3 id="startserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopServer

<a id="opIdStopServer"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.StopServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.StopServer' \
  -d '{
    "ServerId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.StopServer`

<p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

> Body parameter

```json
{
  "ServerId": {}
}
```

<h3 id="stopserver-parameters">Parameters</h3>

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
|body|body|[StopServerRequest](#schemastopserverrequest)|true|none|
|» ServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.StopServer|

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

<h3 id="stopserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.TagResource' \
  -d '{
    "Arn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=TransferService.TagResource`

<p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>

> Body parameter

```json
{
  "Arn": {},
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
|» Arn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.TagResource|

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
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestIdentityProvider

<a id="opIdTestIdentityProvider"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.TestIdentityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.TestIdentityProvider' \
  -d '{
    "ServerId": {},
    "ServerProtocol": {},
    "SourceIp": {},
    "UserName": {},
    "UserPassword": {}
  }'
```

`POST /#X-Amz-Target=TransferService.TestIdentityProvider`

<p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>

> Body parameter

```json
{
  "ServerId": {},
  "ServerProtocol": {},
  "SourceIp": {},
  "UserName": {},
  "UserPassword": {}
}
```

<h3 id="testidentityprovider-parameters">Parameters</h3>

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
|body|body|[TestIdentityProviderRequest](#schematestidentityproviderrequest)|true|none|
|» ServerId|body|object|true|none|
|» ServerProtocol|body|object|false|none|
|» SourceIp|body|object|false|none|
|» UserName|body|object|true|none|
|» UserPassword|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.TestIdentityProvider|

> Example responses

> 200 Response

```json
{
  "Response": {},
  "StatusCode": {},
  "Message": {},
  "Url": {}
}
```

> 480 Response

```json
null
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

<h3 id="testidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestIdentityProviderResponse](#schematestidentityproviderresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UntagResource' \
  -d '{
    "Arn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UntagResource`

<p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>

> Body parameter

```json
{
  "Arn": {},
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
|» Arn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UntagResource|

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
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccess

<a id="opIdUpdateAccess"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateAccess' \
  -d '{
    "HomeDirectory": {},
    "HomeDirectoryType": {},
    "HomeDirectoryMappings": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "ServerId": {},
    "ExternalId": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateAccess`

Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

> Body parameter

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "ExternalId": {}
}
```

<h3 id="updateaccess-parameters">Parameters</h3>

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
|body|body|[UpdateAccessRequest](#schemaupdateaccessrequest)|true|none|
|» HomeDirectory|body|object|false|none|
|» HomeDirectoryType|body|object|false|none|
|» HomeDirectoryMappings|body|object|false|none|
|» Policy|body|object|false|none|
|» PosixProfile|body|[PosixProfile](#schemaposixprofile)|false|The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.|
|» Role|body|object|false|none|
|» ServerId|body|object|true|none|
|» ExternalId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateAccess|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAccessResponse](#schemaupdateaccessresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAgreement

<a id="opIdUpdateAgreement"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateAgreement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateAgreement' \
  -d '{
    "AgreementId": {},
    "ServerId": {},
    "Description": {},
    "Status": {},
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "BaseDirectory": {},
    "AccessRole": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateAgreement`

Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.

> Body parameter

```json
{
  "AgreementId": {},
  "ServerId": {},
  "Description": {},
  "Status": {},
  "LocalProfileId": {},
  "PartnerProfileId": {},
  "BaseDirectory": {},
  "AccessRole": {}
}
```

<h3 id="updateagreement-parameters">Parameters</h3>

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
|body|body|[UpdateAgreementRequest](#schemaupdateagreementrequest)|true|none|
|» AgreementId|body|object|true|none|
|» ServerId|body|object|true|none|
|» Description|body|object|false|none|
|» Status|body|object|false|none|
|» LocalProfileId|body|object|false|none|
|» PartnerProfileId|body|object|false|none|
|» BaseDirectory|body|object|false|none|
|» AccessRole|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateAgreement|

> Example responses

> 200 Response

```json
{
  "AgreementId": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateagreement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAgreementResponse](#schemaupdateagreementresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCertificate

<a id="opIdUpdateCertificate"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateCertificate' \
  -d '{
    "CertificateId": {},
    "ActiveDate": {},
    "InactiveDate": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateCertificate`

Updates the active and inactive dates for a certificate.

> Body parameter

```json
{
  "CertificateId": {},
  "ActiveDate": {},
  "InactiveDate": {},
  "Description": {}
}
```

<h3 id="updatecertificate-parameters">Parameters</h3>

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
|body|body|[UpdateCertificateRequest](#schemaupdatecertificaterequest)|true|none|
|» CertificateId|body|object|true|none|
|» ActiveDate|body|object|false|none|
|» InactiveDate|body|object|false|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateCertificate|

> Example responses

> 200 Response

```json
{
  "CertificateId": {}
}
```

> 480 Response

```json
null
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

<h3 id="updatecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCertificateResponse](#schemaupdatecertificateresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnector

<a id="opIdUpdateConnector"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateConnector' \
  -d '{
    "ConnectorId": {},
    "Url": {},
    "As2Config": {
      "LocalProfileId": {},
      "PartnerProfileId": {},
      "MessageSubject": {},
      "Compression": {},
      "EncryptionAlgorithm": {},
      "SigningAlgorithm": {},
      "MdnSigningAlgorithm": {},
      "MdnResponse": {}
    },
    "AccessRole": {},
    "LoggingRole": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateConnector`

Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.

> Body parameter

```json
{
  "ConnectorId": {},
  "Url": {},
  "As2Config": {
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "MessageSubject": {},
    "Compression": {},
    "EncryptionAlgorithm": {},
    "SigningAlgorithm": {},
    "MdnSigningAlgorithm": {},
    "MdnResponse": {}
  },
  "AccessRole": {},
  "LoggingRole": {}
}
```

<h3 id="updateconnector-parameters">Parameters</h3>

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
|body|body|[UpdateConnectorRequest](#schemaupdateconnectorrequest)|true|none|
|» ConnectorId|body|object|true|none|
|» Url|body|object|false|none|
|» As2Config|body|object|false|none|
|» » LocalProfileId|body|object|false|none|
|» » PartnerProfileId|body|object|false|none|
|» » MessageSubject|body|object|false|none|
|» » Compression|body|object|false|none|
|» » EncryptionAlgorithm|body|object|false|none|
|» » SigningAlgorithm|body|object|false|none|
|» » MdnSigningAlgorithm|body|object|false|none|
|» » MdnResponse|body|object|false|none|
|» AccessRole|body|object|false|none|
|» LoggingRole|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateConnector|

> Example responses

> 200 Response

```json
{
  "ConnectorId": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectorResponse](#schemaupdateconnectorresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHostKey

<a id="opIdUpdateHostKey"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateHostKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateHostKey' \
  -d '{
    "ServerId": {},
    "HostKeyId": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateHostKey`

Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.

> Body parameter

```json
{
  "ServerId": {},
  "HostKeyId": {},
  "Description": {}
}
```

<h3 id="updatehostkey-parameters">Parameters</h3>

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
|body|body|[UpdateHostKeyRequest](#schemaupdatehostkeyrequest)|true|none|
|» ServerId|body|object|true|none|
|» HostKeyId|body|object|true|none|
|» Description|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateHostKey|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

> 480 Response

```json
null
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

<h3 id="updatehostkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateHostKeyResponse](#schemaupdatehostkeyresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProfile

<a id="opIdUpdateProfile"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateProfile' \
  -d '{
    "ProfileId": {},
    "CertificateIds": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateProfile`

Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.

> Body parameter

```json
{
  "ProfileId": {},
  "CertificateIds": {}
}
```

<h3 id="updateprofile-parameters">Parameters</h3>

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
|body|body|[UpdateProfileRequest](#schemaupdateprofilerequest)|true|none|
|» ProfileId|body|object|true|none|
|» CertificateIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateProfile|

> Example responses

> 200 Response

```json
{
  "ProfileId": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProfileResponse](#schemaupdateprofileresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServer

<a id="opIdUpdateServer"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateServer' \
  -d '{
    "Certificate": {},
    "ProtocolDetails": {
      "PassiveIp": {},
      "TlsSessionResumptionMode": {},
      "SetStatOption": {},
      "As2Transports": {}
    },
    "EndpointDetails": {
      "AddressAllocationIds": {},
      "SubnetIds": {},
      "VpcEndpointId": {},
      "VpcId": {},
      "SecurityGroupIds": {}
    },
    "EndpointType": {},
    "HostKey": {},
    "IdentityProviderDetails": {
      "Url": {},
      "InvocationRole": {},
      "DirectoryId": {},
      "Function": {}
    },
    "LoggingRole": {},
    "PostAuthenticationLoginBanner": {},
    "PreAuthenticationLoginBanner": {},
    "Protocols": {},
    "SecurityPolicyName": {},
    "ServerId": {},
    "WorkflowDetails": {
      "OnUpload": {},
      "OnPartialUpload": {}
    }
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateServer`

<p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>

> Body parameter

```json
{
  "Certificate": {},
  "ProtocolDetails": {
    "PassiveIp": {},
    "TlsSessionResumptionMode": {},
    "SetStatOption": {},
    "As2Transports": {}
  },
  "EndpointDetails": {
    "AddressAllocationIds": {},
    "SubnetIds": {},
    "VpcEndpointId": {},
    "VpcId": {},
    "SecurityGroupIds": {}
  },
  "EndpointType": {},
  "HostKey": {},
  "IdentityProviderDetails": {
    "Url": {},
    "InvocationRole": {},
    "DirectoryId": {},
    "Function": {}
  },
  "LoggingRole": {},
  "PostAuthenticationLoginBanner": {},
  "PreAuthenticationLoginBanner": {},
  "Protocols": {},
  "SecurityPolicyName": {},
  "ServerId": {},
  "WorkflowDetails": {
    "OnUpload": {},
    "OnPartialUpload": {}
  }
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
|» Certificate|body|object|false|none|
|» ProtocolDetails|body|object|false|none|
|» » PassiveIp|body|object|false|none|
|» » TlsSessionResumptionMode|body|object|false|none|
|» » SetStatOption|body|object|false|none|
|» » As2Transports|body|object|false|none|
|» EndpointDetails|body|object|false|none|
|» » AddressAllocationIds|body|object|false|none|
|» » SubnetIds|body|object|false|none|
|» » VpcEndpointId|body|object|false|none|
|» » VpcId|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» EndpointType|body|object|false|none|
|» HostKey|body|object|false|none|
|» IdentityProviderDetails|body|object|false|none|
|» » Url|body|object|false|none|
|» » InvocationRole|body|object|false|none|
|» » DirectoryId|body|object|false|none|
|» » Function|body|object|false|none|
|» LoggingRole|body|object|false|none|
|» PostAuthenticationLoginBanner|body|object|false|none|
|» PreAuthenticationLoginBanner|body|object|false|none|
|» Protocols|body|object|false|none|
|» SecurityPolicyName|body|object|false|none|
|» ServerId|body|object|true|none|
|» WorkflowDetails|body|object|false|none|
|» » OnUpload|body|object|false|none|
|» » OnPartialUpload|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateServer|

> Example responses

> 200 Response

```json
{
  "ServerId": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServerResponse](#schemaupdateserverresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUser

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl 'https://transfer.us-east-1.amazonaws.com/#X-Amz-Target=TransferService.UpdateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: TransferService.UpdateUser' \
  -d '{
    "HomeDirectory": {},
    "HomeDirectoryType": {},
    "HomeDirectoryMappings": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "ServerId": {},
    "UserName": {}
  }'
```

`POST /#X-Amz-Target=TransferService.UpdateUser`

<p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

> Body parameter

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "UserName": {}
}
```

<h3 id="updateuser-parameters">Parameters</h3>

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
|body|body|[UpdateUserRequest](#schemaupdateuserrequest)|true|none|
|» HomeDirectory|body|object|false|none|
|» HomeDirectoryType|body|object|false|none|
|» HomeDirectoryMappings|body|object|false|none|
|» Policy|body|object|false|none|
|» PosixProfile|body|object|false|none|
|» » Uid|body|object|true|none|
|» » Gid|body|object|true|none|
|» » SecondaryGids|body|object|false|none|
|» Role|body|object|false|none|
|» ServerId|body|object|true|none|
|» UserName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|TransferService.UpdateUser|

> Example responses

> 200 Response

```json
{
  "ServerId": {},
  "UserName": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserResponse](#schemaupdateuserresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAccessResponse">CreateAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccessresponse"></a>
<a id="schema_CreateAccessResponse"></a>
<a id="tocScreateaccessresponse"></a>
<a id="tocscreateaccessresponse"></a>

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|ExternalId|object|true|none|none|

<h2 id="tocS_CreateAccessRequest">CreateAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccessrequest"></a>
<a id="schema_CreateAccessRequest"></a>
<a id="tocScreateaccessrequest"></a>
<a id="tocscreateaccessrequest"></a>

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "ExternalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeDirectory|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|HomeDirectoryMappings|object|false|none|none|
|Policy|object|false|none|none|
|PosixProfile|[PosixProfile](#schemaposixprofile)|false|none|The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.|
|Role|object|true|none|none|
|ServerId|object|true|none|none|
|ExternalId|object|true|none|none|

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceError">InternalServiceError</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerror"></a>
<a id="schema_InternalServiceError"></a>
<a id="tocSinternalserviceerror"></a>
<a id="tocsinternalserviceerror"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_ResourceExistsException">ResourceExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceexistsexception"></a>
<a id="schema_ResourceExistsException"></a>
<a id="tocSresourceexistsexception"></a>
<a id="tocsresourceexistsexception"></a>

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

<h2 id="tocS_CreateAgreementResponse">CreateAgreementResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateagreementresponse"></a>
<a id="schema_CreateAgreementResponse"></a>
<a id="tocScreateagreementresponse"></a>
<a id="tocscreateagreementresponse"></a>

```json
{
  "AgreementId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgreementId|object|true|none|none|

<h2 id="tocS_CreateAgreementRequest">CreateAgreementRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateagreementrequest"></a>
<a id="schema_CreateAgreementRequest"></a>
<a id="tocScreateagreementrequest"></a>
<a id="tocscreateagreementrequest"></a>

```json
{
  "Description": {},
  "ServerId": {},
  "LocalProfileId": {},
  "PartnerProfileId": {},
  "BaseDirectory": {},
  "AccessRole": {},
  "Status": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|ServerId|object|true|none|none|
|LocalProfileId|object|true|none|none|
|PartnerProfileId|object|true|none|none|
|BaseDirectory|object|true|none|none|
|AccessRole|object|true|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_CreateConnectorResponse">CreateConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectorresponse"></a>
<a id="schema_CreateConnectorResponse"></a>
<a id="tocScreateconnectorresponse"></a>
<a id="tocscreateconnectorresponse"></a>

```json
{
  "ConnectorId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorId|object|true|none|none|

<h2 id="tocS_CreateConnectorRequest">CreateConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectorrequest"></a>
<a id="schema_CreateConnectorRequest"></a>
<a id="tocScreateconnectorrequest"></a>
<a id="tocscreateconnectorrequest"></a>

```json
{
  "Url": {},
  "As2Config": {
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "MessageSubject": {},
    "Compression": {},
    "EncryptionAlgorithm": {},
    "SigningAlgorithm": {},
    "MdnSigningAlgorithm": {},
    "MdnResponse": {}
  },
  "AccessRole": {},
  "LoggingRole": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|true|none|none|
|As2Config|object|true|none|none|
|AccessRole|object|true|none|none|
|LoggingRole|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateProfileResponse">CreateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofileresponse"></a>
<a id="schema_CreateProfileResponse"></a>
<a id="tocScreateprofileresponse"></a>
<a id="tocscreateprofileresponse"></a>

```json
{
  "ProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|

<h2 id="tocS_CreateProfileRequest">CreateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilerequest"></a>
<a id="schema_CreateProfileRequest"></a>
<a id="tocScreateprofilerequest"></a>
<a id="tocscreateprofilerequest"></a>

```json
{
  "As2Id": {},
  "ProfileType": {},
  "CertificateIds": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|As2Id|object|true|none|none|
|ProfileType|object|true|none|none|
|CertificateIds|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateServerResponse">CreateServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateserverresponse"></a>
<a id="schema_CreateServerResponse"></a>
<a id="tocScreateserverresponse"></a>
<a id="tocscreateserverresponse"></a>

```json
{
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|

<h2 id="tocS_CreateServerRequest">CreateServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateserverrequest"></a>
<a id="schema_CreateServerRequest"></a>
<a id="tocScreateserverrequest"></a>
<a id="tocscreateserverrequest"></a>

```json
{
  "Certificate": {},
  "Domain": {},
  "EndpointDetails": {
    "AddressAllocationIds": {},
    "SubnetIds": {},
    "VpcEndpointId": {},
    "VpcId": {},
    "SecurityGroupIds": {}
  },
  "EndpointType": {},
  "HostKey": {},
  "IdentityProviderDetails": {
    "Url": {},
    "InvocationRole": {},
    "DirectoryId": {},
    "Function": {}
  },
  "IdentityProviderType": {},
  "LoggingRole": {},
  "PostAuthenticationLoginBanner": {},
  "PreAuthenticationLoginBanner": {},
  "Protocols": {},
  "ProtocolDetails": {
    "PassiveIp": {},
    "TlsSessionResumptionMode": {},
    "SetStatOption": {},
    "As2Transports": {}
  },
  "SecurityPolicyName": {},
  "Tags": {},
  "WorkflowDetails": {
    "OnUpload": {},
    "OnPartialUpload": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|
|Domain|object|false|none|none|
|EndpointDetails|object|false|none|none|
|EndpointType|object|false|none|none|
|HostKey|object|false|none|none|
|IdentityProviderDetails|object|false|none|none|
|IdentityProviderType|object|false|none|none|
|LoggingRole|object|false|none|none|
|PostAuthenticationLoginBanner|object|false|none|none|
|PreAuthenticationLoginBanner|object|false|none|none|
|Protocols|object|false|none|none|
|ProtocolDetails|object|false|none|none|
|SecurityPolicyName|object|false|none|none|
|Tags|object|false|none|none|
|WorkflowDetails|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "ServerId": {},
  "UserName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "SshPublicKeyBody": {},
  "Tags": {},
  "UserName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeDirectory|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|HomeDirectoryMappings|object|false|none|none|
|Policy|object|false|none|none|
|PosixProfile|object|false|none|none|
|Role|object|true|none|none|
|ServerId|object|true|none|none|
|SshPublicKeyBody|object|false|none|none|
|Tags|object|false|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_CreateWorkflowResponse">CreateWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkflowresponse"></a>
<a id="schema_CreateWorkflowResponse"></a>
<a id="tocScreateworkflowresponse"></a>
<a id="tocscreateworkflowresponse"></a>

```json
{
  "WorkflowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|true|none|none|

<h2 id="tocS_CreateWorkflowRequest">CreateWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkflowrequest"></a>
<a id="schema_CreateWorkflowRequest"></a>
<a id="tocScreateworkflowrequest"></a>
<a id="tocscreateworkflowrequest"></a>

```json
{
  "Description": {},
  "Steps": {},
  "OnExceptionSteps": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Steps|object|true|none|none|
|OnExceptionSteps|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteAccessRequest">DeleteAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccessrequest"></a>
<a id="schema_DeleteAccessRequest"></a>
<a id="tocSdeleteaccessrequest"></a>
<a id="tocsdeleteaccessrequest"></a>

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|ExternalId|object|true|none|none|

<h2 id="tocS_DeleteAgreementRequest">DeleteAgreementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteagreementrequest"></a>
<a id="schema_DeleteAgreementRequest"></a>
<a id="tocSdeleteagreementrequest"></a>
<a id="tocsdeleteagreementrequest"></a>

```json
{
  "AgreementId": {},
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgreementId|object|true|none|none|
|ServerId|object|true|none|none|

<h2 id="tocS_DeleteCertificateRequest">DeleteCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecertificaterequest"></a>
<a id="schema_DeleteCertificateRequest"></a>
<a id="tocSdeletecertificaterequest"></a>
<a id="tocsdeletecertificaterequest"></a>

```json
{
  "CertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|true|none|none|

<h2 id="tocS_DeleteConnectorRequest">DeleteConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectorrequest"></a>
<a id="schema_DeleteConnectorRequest"></a>
<a id="tocSdeleteconnectorrequest"></a>
<a id="tocsdeleteconnectorrequest"></a>

```json
{
  "ConnectorId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorId|object|true|none|none|

<h2 id="tocS_DeleteHostKeyRequest">DeleteHostKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehostkeyrequest"></a>
<a id="schema_DeleteHostKeyRequest"></a>
<a id="tocSdeletehostkeyrequest"></a>
<a id="tocsdeletehostkeyrequest"></a>

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|HostKeyId|object|true|none|none|

<h2 id="tocS_DeleteProfileRequest">DeleteProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofilerequest"></a>
<a id="schema_DeleteProfileRequest"></a>
<a id="tocSdeleteprofilerequest"></a>
<a id="tocsdeleteprofilerequest"></a>

```json
{
  "ProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|

<h2 id="tocS_DeleteServerRequest">DeleteServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserverrequest"></a>
<a id="schema_DeleteServerRequest"></a>
<a id="tocSdeleteserverrequest"></a>
<a id="tocsdeleteserverrequest"></a>

```json
{
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|

<h2 id="tocS_DeleteSshPublicKeyRequest">DeleteSshPublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesshpublickeyrequest"></a>
<a id="schema_DeleteSshPublicKeyRequest"></a>
<a id="tocSdeletesshpublickeyrequest"></a>
<a id="tocsdeletesshpublickeyrequest"></a>

```json
{
  "ServerId": {},
  "SshPublicKeyId": {},
  "UserName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|SshPublicKeyId|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{
  "ServerId": {},
  "UserName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_DeleteWorkflowRequest">DeleteWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkflowrequest"></a>
<a id="schema_DeleteWorkflowRequest"></a>
<a id="tocSdeleteworkflowrequest"></a>
<a id="tocsdeleteworkflowrequest"></a>

```json
{
  "WorkflowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|true|none|none|

<h2 id="tocS_DescribeAccessResponse">DescribeAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccessresponse"></a>
<a id="schema_DescribeAccessResponse"></a>
<a id="tocSdescribeaccessresponse"></a>
<a id="tocsdescribeaccessresponse"></a>

```json
{
  "ServerId": {},
  "Access": {
    "HomeDirectory": {},
    "HomeDirectoryMappings": {},
    "HomeDirectoryType": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "ExternalId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|Access|object|true|none|none|

<h2 id="tocS_DescribeAccessRequest">DescribeAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccessrequest"></a>
<a id="schema_DescribeAccessRequest"></a>
<a id="tocSdescribeaccessrequest"></a>
<a id="tocsdescribeaccessrequest"></a>

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|ExternalId|object|true|none|none|

<h2 id="tocS_DescribeAgreementResponse">DescribeAgreementResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagreementresponse"></a>
<a id="schema_DescribeAgreementResponse"></a>
<a id="tocSdescribeagreementresponse"></a>
<a id="tocsdescribeagreementresponse"></a>

```json
{
  "Agreement": {
    "Arn": {},
    "AgreementId": {},
    "Description": {},
    "Status": {},
    "ServerId": {},
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "BaseDirectory": {},
    "AccessRole": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Agreement|object|true|none|none|

<h2 id="tocS_DescribeAgreementRequest">DescribeAgreementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagreementrequest"></a>
<a id="schema_DescribeAgreementRequest"></a>
<a id="tocSdescribeagreementrequest"></a>
<a id="tocsdescribeagreementrequest"></a>

```json
{
  "AgreementId": {},
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgreementId|object|true|none|none|
|ServerId|object|true|none|none|

<h2 id="tocS_DescribeCertificateResponse">DescribeCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificateresponse"></a>
<a id="schema_DescribeCertificateResponse"></a>
<a id="tocSdescribecertificateresponse"></a>
<a id="tocsdescribecertificateresponse"></a>

```json
{
  "Certificate": {
    "Arn": {},
    "CertificateId": {},
    "Usage": {},
    "Status": {},
    "Certificate": {},
    "CertificateChain": {},
    "ActiveDate": {},
    "InactiveDate": {},
    "Serial": {},
    "NotBeforeDate": {},
    "NotAfterDate": {},
    "Type": {},
    "Description": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|true|none|none|

<h2 id="tocS_DescribeCertificateRequest">DescribeCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificaterequest"></a>
<a id="schema_DescribeCertificateRequest"></a>
<a id="tocSdescribecertificaterequest"></a>
<a id="tocsdescribecertificaterequest"></a>

```json
{
  "CertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|true|none|none|

<h2 id="tocS_DescribeConnectorResponse">DescribeConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorresponse"></a>
<a id="schema_DescribeConnectorResponse"></a>
<a id="tocSdescribeconnectorresponse"></a>
<a id="tocsdescribeconnectorresponse"></a>

```json
{
  "Connector": {
    "Arn": {},
    "ConnectorId": {},
    "Url": {},
    "As2Config": {
      "LocalProfileId": {},
      "PartnerProfileId": {},
      "MessageSubject": {},
      "Compression": {},
      "EncryptionAlgorithm": {},
      "SigningAlgorithm": {},
      "MdnSigningAlgorithm": {},
      "MdnResponse": {}
    },
    "AccessRole": {},
    "LoggingRole": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connector|object|true|none|none|

<h2 id="tocS_DescribeConnectorRequest">DescribeConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorrequest"></a>
<a id="schema_DescribeConnectorRequest"></a>
<a id="tocSdescribeconnectorrequest"></a>
<a id="tocsdescribeconnectorrequest"></a>

```json
{
  "ConnectorId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorId|object|true|none|none|

<h2 id="tocS_DescribeExecutionResponse">DescribeExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexecutionresponse"></a>
<a id="schema_DescribeExecutionResponse"></a>
<a id="tocSdescribeexecutionresponse"></a>
<a id="tocsdescribeexecutionresponse"></a>

```json
{
  "WorkflowId": {},
  "Execution": {
    "ExecutionId": {},
    "InitialFileLocation": {
      "S3FileLocation": {
        "Bucket": {},
        "Key": {},
        "VersionId": {},
        "Etag": {}
      },
      "EfsFileLocation": {
        "FileSystemId": {},
        "Path": {}
      }
    },
    "ServiceMetadata": {
      "UserDetails": {
        "UserName": {},
        "ServerId": {},
        "SessionId": {}
      }
    },
    "ExecutionRole": {},
    "LoggingConfiguration": {
      "LoggingRole": {},
      "LogGroupName": {}
    },
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Status": {},
    "Results": {
      "Steps": {},
      "OnExceptionSteps": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|true|none|none|
|Execution|object|true|none|none|

<h2 id="tocS_DescribeExecutionRequest">DescribeExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexecutionrequest"></a>
<a id="schema_DescribeExecutionRequest"></a>
<a id="tocSdescribeexecutionrequest"></a>
<a id="tocsdescribeexecutionrequest"></a>

```json
{
  "ExecutionId": {},
  "WorkflowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionId|object|true|none|none|
|WorkflowId|object|true|none|none|

<h2 id="tocS_DescribeHostKeyResponse">DescribeHostKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribehostkeyresponse"></a>
<a id="schema_DescribeHostKeyResponse"></a>
<a id="tocSdescribehostkeyresponse"></a>
<a id="tocsdescribehostkeyresponse"></a>

```json
{
  "HostKey": {
    "Arn": {},
    "HostKeyId": {},
    "HostKeyFingerprint": {},
    "Description": {},
    "Type": {},
    "DateImported": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostKey|object|true|none|none|

<h2 id="tocS_DescribeHostKeyRequest">DescribeHostKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehostkeyrequest"></a>
<a id="schema_DescribeHostKeyRequest"></a>
<a id="tocSdescribehostkeyrequest"></a>
<a id="tocsdescribehostkeyrequest"></a>

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|HostKeyId|object|true|none|none|

<h2 id="tocS_DescribeProfileResponse">DescribeProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprofileresponse"></a>
<a id="schema_DescribeProfileResponse"></a>
<a id="tocSdescribeprofileresponse"></a>
<a id="tocsdescribeprofileresponse"></a>

```json
{
  "Profile": {
    "Arn": {},
    "ProfileId": {},
    "ProfileType": {},
    "As2Id": {},
    "CertificateIds": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Profile|object|true|none|none|

<h2 id="tocS_DescribeProfileRequest">DescribeProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprofilerequest"></a>
<a id="schema_DescribeProfileRequest"></a>
<a id="tocSdescribeprofilerequest"></a>
<a id="tocsdescribeprofilerequest"></a>

```json
{
  "ProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|

<h2 id="tocS_DescribeSecurityPolicyResponse">DescribeSecurityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecuritypolicyresponse"></a>
<a id="schema_DescribeSecurityPolicyResponse"></a>
<a id="tocSdescribesecuritypolicyresponse"></a>
<a id="tocsdescribesecuritypolicyresponse"></a>

```json
{
  "SecurityPolicy": {
    "Fips": {},
    "SecurityPolicyName": {},
    "SshCiphers": {},
    "SshKexs": {},
    "SshMacs": {},
    "TlsCiphers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityPolicy|object|true|none|none|

<h2 id="tocS_DescribeSecurityPolicyRequest">DescribeSecurityPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecuritypolicyrequest"></a>
<a id="schema_DescribeSecurityPolicyRequest"></a>
<a id="tocSdescribesecuritypolicyrequest"></a>
<a id="tocsdescribesecuritypolicyrequest"></a>

```json
{
  "SecurityPolicyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityPolicyName|object|true|none|none|

<h2 id="tocS_DescribeServerResponse">DescribeServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserverresponse"></a>
<a id="schema_DescribeServerResponse"></a>
<a id="tocSdescribeserverresponse"></a>
<a id="tocsdescribeserverresponse"></a>

```json
{
  "Server": {
    "Arn": {},
    "Certificate": {},
    "ProtocolDetails": {
      "PassiveIp": {},
      "TlsSessionResumptionMode": {},
      "SetStatOption": {},
      "As2Transports": {}
    },
    "Domain": {},
    "EndpointDetails": {
      "AddressAllocationIds": {},
      "SubnetIds": {},
      "VpcEndpointId": {},
      "VpcId": {},
      "SecurityGroupIds": {}
    },
    "EndpointType": {},
    "HostKeyFingerprint": {},
    "IdentityProviderDetails": {
      "Url": {},
      "InvocationRole": {},
      "DirectoryId": {},
      "Function": {}
    },
    "IdentityProviderType": {},
    "LoggingRole": {},
    "PostAuthenticationLoginBanner": {},
    "PreAuthenticationLoginBanner": {},
    "Protocols": {},
    "SecurityPolicyName": {},
    "ServerId": {},
    "State": {},
    "Tags": {},
    "UserCount": {},
    "WorkflowDetails": {
      "OnUpload": {},
      "OnPartialUpload": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Server|object|true|none|none|

<h2 id="tocS_DescribeServerRequest">DescribeServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserverrequest"></a>
<a id="schema_DescribeServerRequest"></a>
<a id="tocSdescribeserverrequest"></a>
<a id="tocsdescribeserverrequest"></a>

```json
{
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|

<h2 id="tocS_DescribeUserResponse">DescribeUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserresponse"></a>
<a id="schema_DescribeUserResponse"></a>
<a id="tocSdescribeuserresponse"></a>
<a id="tocsdescribeuserresponse"></a>

```json
{
  "ServerId": {},
  "User": {
    "Arn": {},
    "HomeDirectory": {},
    "HomeDirectoryMappings": {},
    "HomeDirectoryType": {},
    "Policy": {},
    "PosixProfile": {
      "Uid": {},
      "Gid": {},
      "SecondaryGids": {}
    },
    "Role": {},
    "SshPublicKeys": {},
    "Tags": {},
    "UserName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|User|object|true|none|none|

<h2 id="tocS_DescribeUserRequest">DescribeUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserrequest"></a>
<a id="schema_DescribeUserRequest"></a>
<a id="tocSdescribeuserrequest"></a>
<a id="tocsdescribeuserrequest"></a>

```json
{
  "ServerId": {},
  "UserName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_DescribeWorkflowResponse">DescribeWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkflowresponse"></a>
<a id="schema_DescribeWorkflowResponse"></a>
<a id="tocSdescribeworkflowresponse"></a>
<a id="tocsdescribeworkflowresponse"></a>

```json
{
  "Workflow": {
    "Arn": {},
    "Description": {},
    "Steps": {},
    "OnExceptionSteps": {},
    "WorkflowId": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Workflow|object|true|none|none|

<h2 id="tocS_DescribeWorkflowRequest">DescribeWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkflowrequest"></a>
<a id="schema_DescribeWorkflowRequest"></a>
<a id="tocSdescribeworkflowrequest"></a>
<a id="tocsdescribeworkflowrequest"></a>

```json
{
  "WorkflowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|true|none|none|

<h2 id="tocS_ImportCertificateResponse">ImportCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportcertificateresponse"></a>
<a id="schema_ImportCertificateResponse"></a>
<a id="tocSimportcertificateresponse"></a>
<a id="tocsimportcertificateresponse"></a>

```json
{
  "CertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|true|none|none|

<h2 id="tocS_ImportCertificateRequest">ImportCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportcertificaterequest"></a>
<a id="schema_ImportCertificateRequest"></a>
<a id="tocSimportcertificaterequest"></a>
<a id="tocsimportcertificaterequest"></a>

```json
{
  "Usage": {},
  "Certificate": {},
  "CertificateChain": {},
  "PrivateKey": {},
  "ActiveDate": {},
  "InactiveDate": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Usage|object|true|none|none|
|Certificate|object|true|none|none|
|CertificateChain|object|false|none|none|
|PrivateKey|object|false|none|none|
|ActiveDate|object|false|none|none|
|InactiveDate|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ImportHostKeyResponse">ImportHostKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimporthostkeyresponse"></a>
<a id="schema_ImportHostKeyResponse"></a>
<a id="tocSimporthostkeyresponse"></a>
<a id="tocsimporthostkeyresponse"></a>

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|HostKeyId|object|true|none|none|

<h2 id="tocS_ImportHostKeyRequest">ImportHostKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimporthostkeyrequest"></a>
<a id="schema_ImportHostKeyRequest"></a>
<a id="tocSimporthostkeyrequest"></a>
<a id="tocsimporthostkeyrequest"></a>

```json
{
  "ServerId": {},
  "HostKeyBody": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|HostKeyBody|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ImportSshPublicKeyResponse">ImportSshPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportsshpublickeyresponse"></a>
<a id="schema_ImportSshPublicKeyResponse"></a>
<a id="tocSimportsshpublickeyresponse"></a>
<a id="tocsimportsshpublickeyresponse"></a>

```json
{
  "ServerId": {},
  "SshPublicKeyId": {},
  "UserName": {}
}
```

Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|SshPublicKeyId|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_ImportSshPublicKeyRequest">ImportSshPublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportsshpublickeyrequest"></a>
<a id="schema_ImportSshPublicKeyRequest"></a>
<a id="tocSimportsshpublickeyrequest"></a>
<a id="tocsimportsshpublickeyrequest"></a>

```json
{
  "ServerId": {},
  "SshPublicKeyBody": {},
  "UserName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|SshPublicKeyBody|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_ListAccessesResponse">ListAccessesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccessesresponse"></a>
<a id="schema_ListAccessesResponse"></a>
<a id="tocSlistaccessesresponse"></a>
<a id="tocslistaccessesresponse"></a>

```json
{
  "NextToken": {},
  "ServerId": {},
  "Accesses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ServerId|object|true|none|none|
|Accesses|object|true|none|none|

<h2 id="tocS_ListAccessesRequest">ListAccessesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccessesrequest"></a>
<a id="schema_ListAccessesRequest"></a>
<a id="tocSlistaccessesrequest"></a>
<a id="tocslistaccessesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ServerId|object|true|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListAgreementsResponse">ListAgreementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistagreementsresponse"></a>
<a id="schema_ListAgreementsResponse"></a>
<a id="tocSlistagreementsresponse"></a>
<a id="tocslistagreementsresponse"></a>

```json
{
  "NextToken": {},
  "Agreements": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Agreements|object|true|none|none|

<h2 id="tocS_ListAgreementsRequest">ListAgreementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistagreementsrequest"></a>
<a id="schema_ListAgreementsRequest"></a>
<a id="tocSlistagreementsrequest"></a>
<a id="tocslistagreementsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ServerId|object|true|none|none|

<h2 id="tocS_ListCertificatesResponse">ListCertificatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatesresponse"></a>
<a id="schema_ListCertificatesResponse"></a>
<a id="tocSlistcertificatesresponse"></a>
<a id="tocslistcertificatesresponse"></a>

```json
{
  "NextToken": {},
  "Certificates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Certificates|object|true|none|none|

<h2 id="tocS_ListCertificatesRequest">ListCertificatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatesrequest"></a>
<a id="schema_ListCertificatesRequest"></a>
<a id="tocSlistcertificatesrequest"></a>
<a id="tocslistcertificatesrequest"></a>

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

<h2 id="tocS_ListConnectorsResponse">ListConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorsresponse"></a>
<a id="schema_ListConnectorsResponse"></a>
<a id="tocSlistconnectorsresponse"></a>
<a id="tocslistconnectorsresponse"></a>

```json
{
  "NextToken": {},
  "Connectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Connectors|object|true|none|none|

<h2 id="tocS_ListConnectorsRequest">ListConnectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorsrequest"></a>
<a id="schema_ListConnectorsRequest"></a>
<a id="tocSlistconnectorsrequest"></a>
<a id="tocslistconnectorsrequest"></a>

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

<h2 id="tocS_ListExecutionsResponse">ListExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionsresponse"></a>
<a id="schema_ListExecutionsResponse"></a>
<a id="tocSlistexecutionsresponse"></a>
<a id="tocslistexecutionsresponse"></a>

```json
{
  "NextToken": {},
  "WorkflowId": {},
  "Executions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|WorkflowId|object|true|none|none|
|Executions|object|true|none|none|

<h2 id="tocS_ListExecutionsRequest">ListExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutionsrequest"></a>
<a id="schema_ListExecutionsRequest"></a>
<a id="tocSlistexecutionsrequest"></a>
<a id="tocslistexecutionsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "WorkflowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|WorkflowId|object|true|none|none|

<h2 id="tocS_ListHostKeysResponse">ListHostKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthostkeysresponse"></a>
<a id="schema_ListHostKeysResponse"></a>
<a id="tocSlisthostkeysresponse"></a>
<a id="tocslisthostkeysresponse"></a>

```json
{
  "NextToken": {},
  "ServerId": {},
  "HostKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ServerId|object|true|none|none|
|HostKeys|object|true|none|none|

<h2 id="tocS_ListHostKeysRequest">ListHostKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthostkeysrequest"></a>
<a id="schema_ListHostKeysRequest"></a>
<a id="tocSlisthostkeysrequest"></a>
<a id="tocslisthostkeysrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ServerId|object|true|none|none|

<h2 id="tocS_ListProfilesResponse">ListProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprofilesresponse"></a>
<a id="schema_ListProfilesResponse"></a>
<a id="tocSlistprofilesresponse"></a>
<a id="tocslistprofilesresponse"></a>

```json
{
  "NextToken": {},
  "Profiles": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Profiles|object|true|none|none|

<h2 id="tocS_ListProfilesRequest">ListProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprofilesrequest"></a>
<a id="schema_ListProfilesRequest"></a>
<a id="tocSlistprofilesrequest"></a>
<a id="tocslistprofilesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ProfileType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ProfileType|object|false|none|none|

<h2 id="tocS_ListSecurityPoliciesResponse">ListSecurityPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsecuritypoliciesresponse"></a>
<a id="schema_ListSecurityPoliciesResponse"></a>
<a id="tocSlistsecuritypoliciesresponse"></a>
<a id="tocslistsecuritypoliciesresponse"></a>

```json
{
  "NextToken": {},
  "SecurityPolicyNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|SecurityPolicyNames|object|true|none|none|

<h2 id="tocS_ListSecurityPoliciesRequest">ListSecurityPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsecuritypoliciesrequest"></a>
<a id="schema_ListSecurityPoliciesRequest"></a>
<a id="tocSlistsecuritypoliciesrequest"></a>
<a id="tocslistsecuritypoliciesrequest"></a>

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

<h2 id="tocS_ListServersResponse">ListServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistserversresponse"></a>
<a id="schema_ListServersResponse"></a>
<a id="tocSlistserversresponse"></a>
<a id="tocslistserversresponse"></a>

```json
{
  "NextToken": {},
  "Servers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Servers|object|true|none|none|

<h2 id="tocS_ListServersRequest">ListServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistserversrequest"></a>
<a id="schema_ListServersRequest"></a>
<a id="tocSlistserversrequest"></a>
<a id="tocslistserversrequest"></a>

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

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Arn": {},
  "NextToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|NextToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "Arn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "NextToken": {},
  "ServerId": {},
  "Users": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ServerId|object|true|none|none|
|Users|object|true|none|none|

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ServerId|object|true|none|none|

<h2 id="tocS_ListWorkflowsResponse">ListWorkflowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowsresponse"></a>
<a id="schema_ListWorkflowsResponse"></a>
<a id="tocSlistworkflowsresponse"></a>
<a id="tocslistworkflowsresponse"></a>

```json
{
  "NextToken": {},
  "Workflows": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Workflows|object|true|none|none|

<h2 id="tocS_ListWorkflowsRequest">ListWorkflowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowsrequest"></a>
<a id="schema_ListWorkflowsRequest"></a>
<a id="tocSlistworkflowsrequest"></a>
<a id="tocslistworkflowsrequest"></a>

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

<h2 id="tocS_SendWorkflowStepStateResponse">SendWorkflowStepStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendworkflowstepstateresponse"></a>
<a id="schema_SendWorkflowStepStateResponse"></a>
<a id="tocSsendworkflowstepstateresponse"></a>
<a id="tocssendworkflowstepstateresponse"></a>

```json
{}
```

<h2 id="tocS_SendWorkflowStepStateRequest">SendWorkflowStepStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendworkflowstepstaterequest"></a>
<a id="schema_SendWorkflowStepStateRequest"></a>
<a id="tocSsendworkflowstepstaterequest"></a>
<a id="tocssendworkflowstepstaterequest"></a>

```json
{
  "WorkflowId": {},
  "ExecutionId": {},
  "Token": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|true|none|none|
|ExecutionId|object|true|none|none|
|Token|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_StartFileTransferResponse">StartFileTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartfiletransferresponse"></a>
<a id="schema_StartFileTransferResponse"></a>
<a id="tocSstartfiletransferresponse"></a>
<a id="tocsstartfiletransferresponse"></a>

```json
{
  "TransferId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransferId|object|true|none|none|

<h2 id="tocS_StartFileTransferRequest">StartFileTransferRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartfiletransferrequest"></a>
<a id="schema_StartFileTransferRequest"></a>
<a id="tocSstartfiletransferrequest"></a>
<a id="tocsstartfiletransferrequest"></a>

```json
{
  "ConnectorId": {},
  "SendFilePaths": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorId|object|true|none|none|
|SendFilePaths|object|true|none|none|

<h2 id="tocS_StartServerRequest">StartServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartserverrequest"></a>
<a id="schema_StartServerRequest"></a>
<a id="tocSstartserverrequest"></a>
<a id="tocsstartserverrequest"></a>

```json
{
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|

<h2 id="tocS_StopServerRequest">StopServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopserverrequest"></a>
<a id="schema_StopServerRequest"></a>
<a id="tocSstopserverrequest"></a>
<a id="tocsstopserverrequest"></a>

```json
{
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Arn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TestIdentityProviderResponse">TestIdentityProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schematestidentityproviderresponse"></a>
<a id="schema_TestIdentityProviderResponse"></a>
<a id="tocStestidentityproviderresponse"></a>
<a id="tocstestidentityproviderresponse"></a>

```json
{
  "Response": {},
  "StatusCode": {},
  "Message": {},
  "Url": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|object|false|none|none|
|StatusCode|object|true|none|none|
|Message|object|false|none|none|
|Url|object|true|none|none|

<h2 id="tocS_TestIdentityProviderRequest">TestIdentityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schematestidentityproviderrequest"></a>
<a id="schema_TestIdentityProviderRequest"></a>
<a id="tocStestidentityproviderrequest"></a>
<a id="tocstestidentityproviderrequest"></a>

```json
{
  "ServerId": {},
  "ServerProtocol": {},
  "SourceIp": {},
  "UserName": {},
  "UserPassword": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|ServerProtocol|object|false|none|none|
|SourceIp|object|false|none|none|
|UserName|object|true|none|none|
|UserPassword|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "Arn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAccessResponse">UpdateAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccessresponse"></a>
<a id="schema_UpdateAccessResponse"></a>
<a id="tocSupdateaccessresponse"></a>
<a id="tocsupdateaccessresponse"></a>

```json
{
  "ServerId": {},
  "ExternalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|ExternalId|object|true|none|none|

<h2 id="tocS_UpdateAccessRequest">UpdateAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccessrequest"></a>
<a id="schema_UpdateAccessRequest"></a>
<a id="tocSupdateaccessrequest"></a>
<a id="tocsupdateaccessrequest"></a>

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "ExternalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeDirectory|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|HomeDirectoryMappings|object|false|none|none|
|Policy|object|false|none|none|
|PosixProfile|[PosixProfile](#schemaposixprofile)|false|none|The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.|
|Role|object|false|none|none|
|ServerId|object|true|none|none|
|ExternalId|object|true|none|none|

<h2 id="tocS_UpdateAgreementResponse">UpdateAgreementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagreementresponse"></a>
<a id="schema_UpdateAgreementResponse"></a>
<a id="tocSupdateagreementresponse"></a>
<a id="tocsupdateagreementresponse"></a>

```json
{
  "AgreementId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgreementId|object|true|none|none|

<h2 id="tocS_UpdateAgreementRequest">UpdateAgreementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagreementrequest"></a>
<a id="schema_UpdateAgreementRequest"></a>
<a id="tocSupdateagreementrequest"></a>
<a id="tocsupdateagreementrequest"></a>

```json
{
  "AgreementId": {},
  "ServerId": {},
  "Description": {},
  "Status": {},
  "LocalProfileId": {},
  "PartnerProfileId": {},
  "BaseDirectory": {},
  "AccessRole": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgreementId|object|true|none|none|
|ServerId|object|true|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|LocalProfileId|object|false|none|none|
|PartnerProfileId|object|false|none|none|
|BaseDirectory|object|false|none|none|
|AccessRole|object|false|none|none|

<h2 id="tocS_UpdateCertificateResponse">UpdateCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecertificateresponse"></a>
<a id="schema_UpdateCertificateResponse"></a>
<a id="tocSupdatecertificateresponse"></a>
<a id="tocsupdatecertificateresponse"></a>

```json
{
  "CertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|true|none|none|

<h2 id="tocS_UpdateCertificateRequest">UpdateCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecertificaterequest"></a>
<a id="schema_UpdateCertificateRequest"></a>
<a id="tocSupdatecertificaterequest"></a>
<a id="tocsupdatecertificaterequest"></a>

```json
{
  "CertificateId": {},
  "ActiveDate": {},
  "InactiveDate": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|true|none|none|
|ActiveDate|object|false|none|none|
|InactiveDate|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateConnectorResponse">UpdateConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorresponse"></a>
<a id="schema_UpdateConnectorResponse"></a>
<a id="tocSupdateconnectorresponse"></a>
<a id="tocsupdateconnectorresponse"></a>

```json
{
  "ConnectorId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorId|object|true|none|none|

<h2 id="tocS_UpdateConnectorRequest">UpdateConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorrequest"></a>
<a id="schema_UpdateConnectorRequest"></a>
<a id="tocSupdateconnectorrequest"></a>
<a id="tocsupdateconnectorrequest"></a>

```json
{
  "ConnectorId": {},
  "Url": {},
  "As2Config": {
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "MessageSubject": {},
    "Compression": {},
    "EncryptionAlgorithm": {},
    "SigningAlgorithm": {},
    "MdnSigningAlgorithm": {},
    "MdnResponse": {}
  },
  "AccessRole": {},
  "LoggingRole": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorId|object|true|none|none|
|Url|object|false|none|none|
|As2Config|object|false|none|none|
|AccessRole|object|false|none|none|
|LoggingRole|object|false|none|none|

<h2 id="tocS_UpdateHostKeyResponse">UpdateHostKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehostkeyresponse"></a>
<a id="schema_UpdateHostKeyResponse"></a>
<a id="tocSupdatehostkeyresponse"></a>
<a id="tocsupdatehostkeyresponse"></a>

```json
{
  "ServerId": {},
  "HostKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|HostKeyId|object|true|none|none|

<h2 id="tocS_UpdateHostKeyRequest">UpdateHostKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehostkeyrequest"></a>
<a id="schema_UpdateHostKeyRequest"></a>
<a id="tocSupdatehostkeyrequest"></a>
<a id="tocsupdatehostkeyrequest"></a>

```json
{
  "ServerId": {},
  "HostKeyId": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|HostKeyId|object|true|none|none|
|Description|object|true|none|none|

<h2 id="tocS_UpdateProfileResponse">UpdateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofileresponse"></a>
<a id="schema_UpdateProfileResponse"></a>
<a id="tocSupdateprofileresponse"></a>
<a id="tocsupdateprofileresponse"></a>

```json
{
  "ProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|

<h2 id="tocS_UpdateProfileRequest">UpdateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofilerequest"></a>
<a id="schema_UpdateProfileRequest"></a>
<a id="tocSupdateprofilerequest"></a>
<a id="tocsupdateprofilerequest"></a>

```json
{
  "ProfileId": {},
  "CertificateIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileId|object|true|none|none|
|CertificateIds|object|false|none|none|

<h2 id="tocS_UpdateServerResponse">UpdateServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserverresponse"></a>
<a id="schema_UpdateServerResponse"></a>
<a id="tocSupdateserverresponse"></a>
<a id="tocsupdateserverresponse"></a>

```json
{
  "ServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|

<h2 id="tocS_UpdateServerRequest">UpdateServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserverrequest"></a>
<a id="schema_UpdateServerRequest"></a>
<a id="tocSupdateserverrequest"></a>
<a id="tocsupdateserverrequest"></a>

```json
{
  "Certificate": {},
  "ProtocolDetails": {
    "PassiveIp": {},
    "TlsSessionResumptionMode": {},
    "SetStatOption": {},
    "As2Transports": {}
  },
  "EndpointDetails": {
    "AddressAllocationIds": {},
    "SubnetIds": {},
    "VpcEndpointId": {},
    "VpcId": {},
    "SecurityGroupIds": {}
  },
  "EndpointType": {},
  "HostKey": {},
  "IdentityProviderDetails": {
    "Url": {},
    "InvocationRole": {},
    "DirectoryId": {},
    "Function": {}
  },
  "LoggingRole": {},
  "PostAuthenticationLoginBanner": {},
  "PreAuthenticationLoginBanner": {},
  "Protocols": {},
  "SecurityPolicyName": {},
  "ServerId": {},
  "WorkflowDetails": {
    "OnUpload": {},
    "OnPartialUpload": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|
|ProtocolDetails|object|false|none|none|
|EndpointDetails|object|false|none|none|
|EndpointType|object|false|none|none|
|HostKey|object|false|none|none|
|IdentityProviderDetails|object|false|none|none|
|LoggingRole|object|false|none|none|
|PostAuthenticationLoginBanner|object|false|none|none|
|PreAuthenticationLoginBanner|object|false|none|none|
|Protocols|object|false|none|none|
|SecurityPolicyName|object|false|none|none|
|ServerId|object|true|none|none|
|WorkflowDetails|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_UpdateUserResponse">UpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserresponse"></a>
<a id="schema_UpdateUserResponse"></a>
<a id="tocSupdateuserresponse"></a>
<a id="tocsupdateuserresponse"></a>

```json
{
  "ServerId": {},
  "UserName": {}
}
```

 <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "HomeDirectoryMappings": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ServerId": {},
  "UserName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeDirectory|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|HomeDirectoryMappings|object|false|none|none|
|Policy|object|false|none|none|
|PosixProfile|object|false|none|none|
|Role|object|false|none|none|
|ServerId|object|true|none|none|
|UserName|object|true|none|none|

<h2 id="tocS_AddressAllocationId">AddressAllocationId</h2>
<!-- backwards compatibility -->
<a id="schemaaddressallocationid"></a>
<a id="schema_AddressAllocationId"></a>
<a id="tocSaddressallocationid"></a>
<a id="tocsaddressallocationid"></a>

```json
"string"
```

<h2 id="tocS_AddressAllocationIds">AddressAllocationIds</h2>
<!-- backwards compatibility -->
<a id="schemaaddressallocationids"></a>
<a id="schema_AddressAllocationIds"></a>
<a id="tocSaddressallocationids"></a>
<a id="tocsaddressallocationids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AgreementId">AgreementId</h2>
<!-- backwards compatibility -->
<a id="schemaagreementid"></a>
<a id="schema_AgreementId"></a>
<a id="tocSagreementid"></a>
<a id="tocsagreementid"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_AgreementStatusType">AgreementStatusType</h2>
<!-- backwards compatibility -->
<a id="schemaagreementstatustype"></a>
<a id="schema_AgreementStatusType"></a>
<a id="tocSagreementstatustype"></a>
<a id="tocsagreementstatustype"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ProfileId">ProfileId</h2>
<!-- backwards compatibility -->
<a id="schemaprofileid"></a>
<a id="schema_ProfileId"></a>
<a id="tocSprofileid"></a>
<a id="tocsprofileid"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_MessageSubject">MessageSubject</h2>
<!-- backwards compatibility -->
<a id="schemamessagesubject"></a>
<a id="schema_MessageSubject"></a>
<a id="tocSmessagesubject"></a>
<a id="tocsmessagesubject"></a>

```json
"string"
```

<h2 id="tocS_CompressionEnum">CompressionEnum</h2>
<!-- backwards compatibility -->
<a id="schemacompressionenum"></a>
<a id="schema_CompressionEnum"></a>
<a id="tocScompressionenum"></a>
<a id="tocscompressionenum"></a>

```json
"ZLIB"
```

<h2 id="tocS_EncryptionAlg">EncryptionAlg</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionalg"></a>
<a id="schema_EncryptionAlg"></a>
<a id="tocSencryptionalg"></a>
<a id="tocsencryptionalg"></a>

```json
"AES128_CBC"
```

<h2 id="tocS_SigningAlg">SigningAlg</h2>
<!-- backwards compatibility -->
<a id="schemasigningalg"></a>
<a id="schema_SigningAlg"></a>
<a id="tocSsigningalg"></a>
<a id="tocssigningalg"></a>

```json
"SHA256"
```

<h2 id="tocS_MdnSigningAlg">MdnSigningAlg</h2>
<!-- backwards compatibility -->
<a id="schemamdnsigningalg"></a>
<a id="schema_MdnSigningAlg"></a>
<a id="tocSmdnsigningalg"></a>
<a id="tocsmdnsigningalg"></a>

```json
"SHA256"
```

<h2 id="tocS_MdnResponse">MdnResponse</h2>
<!-- backwards compatibility -->
<a id="schemamdnresponse"></a>
<a id="schema_MdnResponse"></a>
<a id="tocSmdnresponse"></a>
<a id="tocsmdnresponse"></a>

```json
"SYNC"
```

<h2 id="tocS_As2ConnectorConfig">As2ConnectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemaas2connectorconfig"></a>
<a id="schema_As2ConnectorConfig"></a>
<a id="tocSas2connectorconfig"></a>
<a id="tocsas2connectorconfig"></a>

```json
{
  "LocalProfileId": {},
  "PartnerProfileId": {},
  "MessageSubject": {},
  "Compression": {},
  "EncryptionAlgorithm": {},
  "SigningAlgorithm": {},
  "MdnSigningAlgorithm": {},
  "MdnResponse": {}
}
```

Contains the details for a connector object. The connector object is used for AS2 outbound processes, to connect the Transfer Family customer with the trading partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocalProfileId|object|false|none|none|
|PartnerProfileId|object|false|none|none|
|MessageSubject|object|false|none|none|
|Compression|object|false|none|none|
|EncryptionAlgorithm|object|false|none|none|
|SigningAlgorithm|object|false|none|none|
|MdnSigningAlgorithm|object|false|none|none|
|MdnResponse|object|false|none|none|

<h2 id="tocS_As2Id">As2Id</h2>
<!-- backwards compatibility -->
<a id="schemaas2id"></a>
<a id="schema_As2Id"></a>
<a id="tocSas2id"></a>
<a id="tocsas2id"></a>

```json
"string"
```

<h2 id="tocS_As2Transport">As2Transport</h2>
<!-- backwards compatibility -->
<a id="schemaas2transport"></a>
<a id="schema_As2Transport"></a>
<a id="tocSas2transport"></a>
<a id="tocsas2transport"></a>

```json
"HTTP"
```

<h2 id="tocS_As2Transports">As2Transports</h2>
<!-- backwards compatibility -->
<a id="schemaas2transports"></a>
<a id="schema_As2Transports"></a>
<a id="tocSas2transports"></a>
<a id="tocsas2transports"></a>

```json
[
  "HTTP"
]
```

<h2 id="tocS_CallbackToken">CallbackToken</h2>
<!-- backwards compatibility -->
<a id="schemacallbacktoken"></a>
<a id="schema_CallbackToken"></a>
<a id="tocScallbacktoken"></a>
<a id="tocscallbacktoken"></a>

```json
"string"
```

<h2 id="tocS_CertDate">CertDate</h2>
<!-- backwards compatibility -->
<a id="schemacertdate"></a>
<a id="schema_CertDate"></a>
<a id="tocScertdate"></a>
<a id="tocscertdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CertSerial">CertSerial</h2>
<!-- backwards compatibility -->
<a id="schemacertserial"></a>
<a id="schema_CertSerial"></a>
<a id="tocScertserial"></a>
<a id="tocscertserial"></a>

```json
"string"
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
"string"
```

<h2 id="tocS_CertificateBodyType">CertificateBodyType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatebodytype"></a>
<a id="schema_CertificateBodyType"></a>
<a id="tocScertificatebodytype"></a>
<a id="tocscertificatebodytype"></a>

```json
"password"
```

<h2 id="tocS_CertificateChainType">CertificateChainType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatechaintype"></a>
<a id="schema_CertificateChainType"></a>
<a id="tocScertificatechaintype"></a>
<a id="tocscertificatechaintype"></a>

```json
"password"
```

<h2 id="tocS_CertificateId">CertificateId</h2>
<!-- backwards compatibility -->
<a id="schemacertificateid"></a>
<a id="schema_CertificateId"></a>
<a id="tocScertificateid"></a>
<a id="tocscertificateid"></a>

```json
"stringstringstringstri"
```

<h2 id="tocS_CertificateIds">CertificateIds</h2>
<!-- backwards compatibility -->
<a id="schemacertificateids"></a>
<a id="schema_CertificateIds"></a>
<a id="tocScertificateids"></a>
<a id="tocscertificateids"></a>

```json
[
  "stringstringstringstri"
]
```

<h2 id="tocS_CertificateStatusType">CertificateStatusType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatestatustype"></a>
<a id="schema_CertificateStatusType"></a>
<a id="tocScertificatestatustype"></a>
<a id="tocscertificatestatustype"></a>

```json
"ACTIVE"
```

<h2 id="tocS_CertificateType">CertificateType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatetype"></a>
<a id="schema_CertificateType"></a>
<a id="tocScertificatetype"></a>
<a id="tocscertificatetype"></a>

```json
"CERTIFICATE"
```

<h2 id="tocS_CertificateUsageType">CertificateUsageType</h2>
<!-- backwards compatibility -->
<a id="schemacertificateusagetype"></a>
<a id="schema_CertificateUsageType"></a>
<a id="tocScertificateusagetype"></a>
<a id="tocscertificateusagetype"></a>

```json
"SIGNING"
```

<h2 id="tocS_ConnectorId">ConnectorId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorid"></a>
<a id="schema_ConnectorId"></a>
<a id="tocSconnectorid"></a>
<a id="tocsconnectorid"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_WorkflowStepName">WorkflowStepName</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepname"></a>
<a id="schema_WorkflowStepName"></a>
<a id="tocSworkflowstepname"></a>
<a id="tocsworkflowstepname"></a>

```json
"string"
```

<h2 id="tocS_InputFileLocation">InputFileLocation</h2>
<!-- backwards compatibility -->
<a id="schemainputfilelocation"></a>
<a id="schema_InputFileLocation"></a>
<a id="tocSinputfilelocation"></a>
<a id="tocsinputfilelocation"></a>

```json
{
  "S3FileLocation": {
    "Bucket": {},
    "Key": {}
  },
  "EfsFileLocation": {
    "FileSystemId": {},
    "Path": {}
  }
}
```

Specifies the location for the file that's being processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3FileLocation|object|false|none|none|
|EfsFileLocation|object|false|none|none|

<h2 id="tocS_OverwriteExisting">OverwriteExisting</h2>
<!-- backwards compatibility -->
<a id="schemaoverwriteexisting"></a>
<a id="schema_OverwriteExisting"></a>
<a id="tocSoverwriteexisting"></a>
<a id="tocsoverwriteexisting"></a>

```json
"TRUE"
```

<h2 id="tocS_SourceFileLocation">SourceFileLocation</h2>
<!-- backwards compatibility -->
<a id="schemasourcefilelocation"></a>
<a id="schema_SourceFileLocation"></a>
<a id="tocSsourcefilelocation"></a>
<a id="tocssourcefilelocation"></a>

```json
"string"
```

<h2 id="tocS_CopyStepDetails">CopyStepDetails</h2>
<!-- backwards compatibility -->
<a id="schemacopystepdetails"></a>
<a id="schema_CopyStepDetails"></a>
<a id="tocScopystepdetails"></a>
<a id="tocscopystepdetails"></a>

```json
{
  "Name": {},
  "DestinationFileLocation": {
    "S3FileLocation": {
      "Bucket": {},
      "Key": {}
    },
    "EfsFileLocation": {
      "FileSystemId": {},
      "Path": {}
    }
  },
  "OverwriteExisting": {},
  "SourceFileLocation": {}
}
```

Each step type has its own <code>StepDetails</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|DestinationFileLocation|object|false|none|none|
|OverwriteExisting|object|false|none|none|
|SourceFileLocation|object|false|none|none|

<h2 id="tocS_HomeDirectory">HomeDirectory</h2>
<!-- backwards compatibility -->
<a id="schemahomedirectory"></a>
<a id="schema_HomeDirectory"></a>
<a id="tocShomedirectory"></a>
<a id="tocshomedirectory"></a>

```json
"string"
```

<h2 id="tocS_HomeDirectoryType">HomeDirectoryType</h2>
<!-- backwards compatibility -->
<a id="schemahomedirectorytype"></a>
<a id="schema_HomeDirectoryType"></a>
<a id="tocShomedirectorytype"></a>
<a id="tocshomedirectorytype"></a>

```json
"PATH"
```

<h2 id="tocS_HomeDirectoryMappings">HomeDirectoryMappings</h2>
<!-- backwards compatibility -->
<a id="schemahomedirectorymappings"></a>
<a id="schema_HomeDirectoryMappings"></a>
<a id="tocShomedirectorymappings"></a>
<a id="tocshomedirectorymappings"></a>

```json
[
  {
    "Entry": {},
    "Target": {}
  }
]
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

<h2 id="tocS_PosixProfile">PosixProfile</h2>
<!-- backwards compatibility -->
<a id="schemaposixprofile"></a>
<a id="schema_PosixProfile"></a>
<a id="tocSposixprofile"></a>
<a id="tocsposixprofile"></a>

```json
{
  "Uid": {},
  "Gid": {},
  "SecondaryGids": {}
}
```

The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uid|object|true|none|none|
|Gid|object|true|none|none|
|SecondaryGids|object|false|none|none|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ServerId">ServerId</h2>
<!-- backwards compatibility -->
<a id="schemaserverid"></a>
<a id="schema_ServerId"></a>
<a id="tocSserverid"></a>
<a id="tocsserverid"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_ExternalId">ExternalId</h2>
<!-- backwards compatibility -->
<a id="schemaexternalid"></a>
<a id="schema_ExternalId"></a>
<a id="tocSexternalid"></a>
<a id="tocsexternalid"></a>

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

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_ProfileType">ProfileType</h2>
<!-- backwards compatibility -->
<a id="schemaprofiletype"></a>
<a id="schema_ProfileType"></a>
<a id="tocSprofiletype"></a>
<a id="tocsprofiletype"></a>

```json
"LOCAL"
```

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"S3"
```

<h2 id="tocS_EndpointDetails">EndpointDetails</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdetails"></a>
<a id="schema_EndpointDetails"></a>
<a id="tocSendpointdetails"></a>
<a id="tocsendpointdetails"></a>

```json
{
  "AddressAllocationIds": {},
  "SubnetIds": {},
  "VpcEndpointId": {},
  "VpcId": {},
  "SecurityGroupIds": {}
}
```

<p>The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP address to your server's endpoint.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressAllocationIds|object|false|none|none|
|SubnetIds|object|false|none|none|
|VpcEndpointId|object|false|none|none|
|VpcId|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"PUBLIC"
```

<h2 id="tocS_HostKey">HostKey</h2>
<!-- backwards compatibility -->
<a id="schemahostkey"></a>
<a id="schema_HostKey"></a>
<a id="tocShostkey"></a>
<a id="tocshostkey"></a>

```json
"password"
```

<h2 id="tocS_IdentityProviderDetails">IdentityProviderDetails</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderdetails"></a>
<a id="schema_IdentityProviderDetails"></a>
<a id="tocSidentityproviderdetails"></a>
<a id="tocsidentityproviderdetails"></a>

```json
{
  "Url": {},
  "InvocationRole": {},
  "DirectoryId": {},
  "Function": {}
}
```

Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|
|InvocationRole|object|false|none|none|
|DirectoryId|object|false|none|none|
|Function|object|false|none|none|

<h2 id="tocS_IdentityProviderType">IdentityProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovidertype"></a>
<a id="schema_IdentityProviderType"></a>
<a id="tocSidentityprovidertype"></a>
<a id="tocsidentityprovidertype"></a>

```json
"SERVICE_MANAGED"
```

Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>AWS_DIRECTORY_SERVICE</code> or <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication.

<h2 id="tocS_PostAuthenticationLoginBanner">PostAuthenticationLoginBanner</h2>
<!-- backwards compatibility -->
<a id="schemapostauthenticationloginbanner"></a>
<a id="schema_PostAuthenticationLoginBanner"></a>
<a id="tocSpostauthenticationloginbanner"></a>
<a id="tocspostauthenticationloginbanner"></a>

```json
"string"
```

<h2 id="tocS_PreAuthenticationLoginBanner">PreAuthenticationLoginBanner</h2>
<!-- backwards compatibility -->
<a id="schemapreauthenticationloginbanner"></a>
<a id="schema_PreAuthenticationLoginBanner"></a>
<a id="tocSpreauthenticationloginbanner"></a>
<a id="tocspreauthenticationloginbanner"></a>

```json
"string"
```

<h2 id="tocS_Protocols">Protocols</h2>
<!-- backwards compatibility -->
<a id="schemaprotocols"></a>
<a id="schema_Protocols"></a>
<a id="tocSprotocols"></a>
<a id="tocsprotocols"></a>

```json
[
  "SFTP"
]
```

<h2 id="tocS_ProtocolDetails">ProtocolDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprotocoldetails"></a>
<a id="schema_ProtocolDetails"></a>
<a id="tocSprotocoldetails"></a>
<a id="tocsprotocoldetails"></a>

```json
{
  "PassiveIp": {},
  "TlsSessionResumptionMode": {},
  "SetStatOption": {},
  "As2Transports": {}
}
```

 The protocol settings that are configured for your server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PassiveIp|object|false|none|none|
|TlsSessionResumptionMode|object|false|none|none|
|SetStatOption|object|false|none|none|
|As2Transports|object|false|none|none|

<h2 id="tocS_SecurityPolicyName">SecurityPolicyName</h2>
<!-- backwards compatibility -->
<a id="schemasecuritypolicyname"></a>
<a id="schema_SecurityPolicyName"></a>
<a id="tocSsecuritypolicyname"></a>
<a id="tocssecuritypolicyname"></a>

```json
"string"
```

<h2 id="tocS_WorkflowDetails">WorkflowDetails</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowdetails"></a>
<a id="schema_WorkflowDetails"></a>
<a id="tocSworkflowdetails"></a>
<a id="tocsworkflowdetails"></a>

```json
{
  "OnUpload": {},
  "OnPartialUpload": {}
}
```

Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OnUpload|object|false|none|none|
|OnPartialUpload|object|false|none|none|

<h2 id="tocS_SshPublicKeyBody">SshPublicKeyBody</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickeybody"></a>
<a id="schema_SshPublicKeyBody"></a>
<a id="tocSsshpublickeybody"></a>
<a id="tocssshpublickeybody"></a>

```json
"string"
```

<h2 id="tocS_UserName">UserName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_UserName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
```

<h2 id="tocS_WorkflowDescription">WorkflowDescription</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowdescription"></a>
<a id="schema_WorkflowDescription"></a>
<a id="tocSworkflowdescription"></a>
<a id="tocsworkflowdescription"></a>

```json
"string"
```

<h2 id="tocS_WorkflowSteps">WorkflowSteps</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowsteps"></a>
<a id="schema_WorkflowSteps"></a>
<a id="tocSworkflowsteps"></a>
<a id="tocsworkflowsteps"></a>

```json
[
  {
    "Type": {},
    "CopyStepDetails": {
      "Name": {},
      "DestinationFileLocation": {
        "S3FileLocation": {
          "Bucket": {},
          "Key": {}
        },
        "EfsFileLocation": {
          "FileSystemId": {},
          "Path": {}
        }
      },
      "OverwriteExisting": {},
      "SourceFileLocation": {}
    },
    "CustomStepDetails": {
      "Name": {},
      "Target": {},
      "TimeoutSeconds": {},
      "SourceFileLocation": {}
    },
    "DeleteStepDetails": {
      "Name": {},
      "SourceFileLocation": {}
    },
    "TagStepDetails": {
      "Name": {},
      "Tags": {},
      "SourceFileLocation": {}
    },
    "DecryptStepDetails": {
      "Name": {},
      "Type": {},
      "SourceFileLocation": {},
      "OverwriteExisting": {},
      "DestinationFileLocation": {
        "S3FileLocation": {
          "Bucket": {},
          "Key": {}
        },
        "EfsFileLocation": {
          "FileSystemId": {},
          "Path": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_WorkflowId">WorkflowId</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowid"></a>
<a id="schema_WorkflowId"></a>
<a id="tocSworkflowid"></a>
<a id="tocsworkflowid"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_CustomStepTarget">CustomStepTarget</h2>
<!-- backwards compatibility -->
<a id="schemacustomsteptarget"></a>
<a id="schema_CustomStepTarget"></a>
<a id="tocScustomsteptarget"></a>
<a id="tocscustomsteptarget"></a>

```json
"string"
```

<h2 id="tocS_CustomStepTimeoutSeconds">CustomStepTimeoutSeconds</h2>
<!-- backwards compatibility -->
<a id="schemacustomsteptimeoutseconds"></a>
<a id="schema_CustomStepTimeoutSeconds"></a>
<a id="tocScustomsteptimeoutseconds"></a>
<a id="tocscustomsteptimeoutseconds"></a>

```json
1
```

<h2 id="tocS_CustomStepDetails">CustomStepDetails</h2>
<!-- backwards compatibility -->
<a id="schemacustomstepdetails"></a>
<a id="schema_CustomStepDetails"></a>
<a id="tocScustomstepdetails"></a>
<a id="tocscustomstepdetails"></a>

```json
{
  "Name": {},
  "Target": {},
  "TimeoutSeconds": {},
  "SourceFileLocation": {}
}
```

Each step type has its own <code>StepDetails</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Target|object|false|none|none|
|TimeoutSeconds|object|false|none|none|
|SourceFileLocation|object|false|none|none|

<h2 id="tocS_CustomStepStatus">CustomStepStatus</h2>
<!-- backwards compatibility -->
<a id="schemacustomstepstatus"></a>
<a id="schema_CustomStepStatus"></a>
<a id="tocScustomstepstatus"></a>
<a id="tocscustomstepstatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_DateImported">DateImported</h2>
<!-- backwards compatibility -->
<a id="schemadateimported"></a>
<a id="schema_DateImported"></a>
<a id="tocSdateimported"></a>
<a id="tocsdateimported"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"PGP"
```

<h2 id="tocS_DecryptStepDetails">DecryptStepDetails</h2>
<!-- backwards compatibility -->
<a id="schemadecryptstepdetails"></a>
<a id="schema_DecryptStepDetails"></a>
<a id="tocSdecryptstepdetails"></a>
<a id="tocsdecryptstepdetails"></a>

```json
{
  "Name": {},
  "Type": {},
  "SourceFileLocation": {},
  "OverwriteExisting": {},
  "DestinationFileLocation": {
    "S3FileLocation": {
      "Bucket": {},
      "Key": {}
    },
    "EfsFileLocation": {
      "FileSystemId": {},
      "Path": {}
    }
  }
}
```

Each step type has its own <code>StepDetails</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|true|none|none|
|SourceFileLocation|object|false|none|none|
|OverwriteExisting|object|false|none|none|
|DestinationFileLocation|[InputFileLocation](#schemainputfilelocation)|true|none|Specifies the location for the file that's being processed.|

<h2 id="tocS_HostKeyId">HostKeyId</h2>
<!-- backwards compatibility -->
<a id="schemahostkeyid"></a>
<a id="schema_HostKeyId"></a>
<a id="tocShostkeyid"></a>
<a id="tocshostkeyid"></a>

```json
"stringstringstringstrings"
```

<h2 id="tocS_SshPublicKeyId">SshPublicKeyId</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickeyid"></a>
<a id="schema_SshPublicKeyId"></a>
<a id="tocSsshpublickeyid"></a>
<a id="tocssshpublickeyid"></a>

```json
"stringstringstringstr"
```

<h2 id="tocS_DeleteStepDetails">DeleteStepDetails</h2>
<!-- backwards compatibility -->
<a id="schemadeletestepdetails"></a>
<a id="schema_DeleteStepDetails"></a>
<a id="tocSdeletestepdetails"></a>
<a id="tocsdeletestepdetails"></a>

```json
{
  "Name": {},
  "SourceFileLocation": {}
}
```

The name of the step, used to identify the delete step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|SourceFileLocation|object|false|none|none|

<h2 id="tocS_DescribedAccess">DescribedAccess</h2>
<!-- backwards compatibility -->
<a id="schemadescribedaccess"></a>
<a id="schema_DescribedAccess"></a>
<a id="tocSdescribedaccess"></a>
<a id="tocsdescribedaccess"></a>

```json
{
  "HomeDirectory": {},
  "HomeDirectoryMappings": {},
  "HomeDirectoryType": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "ExternalId": {}
}
```

Describes the properties of the access that was specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeDirectory|object|false|none|none|
|HomeDirectoryMappings|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|Policy|object|false|none|none|
|PosixProfile|[PosixProfile](#schemaposixprofile)|false|none|The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.|
|Role|object|false|none|none|
|ExternalId|object|false|none|none|

<h2 id="tocS_DescribedAgreement">DescribedAgreement</h2>
<!-- backwards compatibility -->
<a id="schemadescribedagreement"></a>
<a id="schema_DescribedAgreement"></a>
<a id="tocSdescribedagreement"></a>
<a id="tocsdescribedagreement"></a>

```json
{
  "Arn": {},
  "AgreementId": {},
  "Description": {},
  "Status": {},
  "ServerId": {},
  "LocalProfileId": {},
  "PartnerProfileId": {},
  "BaseDirectory": {},
  "AccessRole": {},
  "Tags": {}
}
```

Describes the properties of an agreement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|AgreementId|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|ServerId|object|false|none|none|
|LocalProfileId|object|false|none|none|
|PartnerProfileId|object|false|none|none|
|BaseDirectory|object|false|none|none|
|AccessRole|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribedCertificate">DescribedCertificate</h2>
<!-- backwards compatibility -->
<a id="schemadescribedcertificate"></a>
<a id="schema_DescribedCertificate"></a>
<a id="tocSdescribedcertificate"></a>
<a id="tocsdescribedcertificate"></a>

```json
{
  "Arn": {},
  "CertificateId": {},
  "Usage": {},
  "Status": {},
  "Certificate": {},
  "CertificateChain": {},
  "ActiveDate": {},
  "InactiveDate": {},
  "Serial": {},
  "NotBeforeDate": {},
  "NotAfterDate": {},
  "Type": {},
  "Description": {},
  "Tags": {}
}
```

Describes the properties of a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|CertificateId|object|false|none|none|
|Usage|object|false|none|none|
|Status|object|false|none|none|
|Certificate|object|false|none|none|
|CertificateChain|object|false|none|none|
|ActiveDate|object|false|none|none|
|InactiveDate|object|false|none|none|
|Serial|object|false|none|none|
|NotBeforeDate|object|false|none|none|
|NotAfterDate|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribedConnector">DescribedConnector</h2>
<!-- backwards compatibility -->
<a id="schemadescribedconnector"></a>
<a id="schema_DescribedConnector"></a>
<a id="tocSdescribedconnector"></a>
<a id="tocsdescribedconnector"></a>

```json
{
  "Arn": {},
  "ConnectorId": {},
  "Url": {},
  "As2Config": {
    "LocalProfileId": {},
    "PartnerProfileId": {},
    "MessageSubject": {},
    "Compression": {},
    "EncryptionAlgorithm": {},
    "SigningAlgorithm": {},
    "MdnSigningAlgorithm": {},
    "MdnResponse": {}
  },
  "AccessRole": {},
  "LoggingRole": {},
  "Tags": {}
}
```

Describes the parameters for the connector, as identified by the <code>ConnectorId</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|ConnectorId|object|false|none|none|
|Url|object|false|none|none|
|As2Config|object|false|none|none|
|AccessRole|object|false|none|none|
|LoggingRole|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ExecutionId">ExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionid"></a>
<a id="schema_ExecutionId"></a>
<a id="tocSexecutionid"></a>
<a id="tocsexecutionid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_DescribedExecution">DescribedExecution</h2>
<!-- backwards compatibility -->
<a id="schemadescribedexecution"></a>
<a id="schema_DescribedExecution"></a>
<a id="tocSdescribedexecution"></a>
<a id="tocsdescribedexecution"></a>

```json
{
  "ExecutionId": {},
  "InitialFileLocation": {
    "S3FileLocation": {
      "Bucket": {},
      "Key": {},
      "VersionId": {},
      "Etag": {}
    },
    "EfsFileLocation": {
      "FileSystemId": {},
      "Path": {}
    }
  },
  "ServiceMetadata": {
    "UserDetails": {
      "UserName": {},
      "ServerId": {},
      "SessionId": {}
    }
  },
  "ExecutionRole": {},
  "LoggingConfiguration": {
    "LoggingRole": {},
    "LogGroupName": {}
  },
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Status": {},
  "Results": {
    "Steps": {},
    "OnExceptionSteps": {}
  }
}
```

The details for an execution object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionId|object|false|none|none|
|InitialFileLocation|object|false|none|none|
|ServiceMetadata|object|false|none|none|
|ExecutionRole|object|false|none|none|
|LoggingConfiguration|object|false|none|none|
|PosixProfile|[PosixProfile](#schemaposixprofile)|false|none|The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.|
|Status|object|false|none|none|
|Results|object|false|none|none|

<h2 id="tocS_DescribedHostKey">DescribedHostKey</h2>
<!-- backwards compatibility -->
<a id="schemadescribedhostkey"></a>
<a id="schema_DescribedHostKey"></a>
<a id="tocSdescribedhostkey"></a>
<a id="tocsdescribedhostkey"></a>

```json
{
  "Arn": {},
  "HostKeyId": {},
  "HostKeyFingerprint": {},
  "Description": {},
  "Type": {},
  "DateImported": {},
  "Tags": {}
}
```

The details for a server host key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|HostKeyId|object|false|none|none|
|HostKeyFingerprint|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|DateImported|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribedProfile">DescribedProfile</h2>
<!-- backwards compatibility -->
<a id="schemadescribedprofile"></a>
<a id="schema_DescribedProfile"></a>
<a id="tocSdescribedprofile"></a>
<a id="tocsdescribedprofile"></a>

```json
{
  "Arn": {},
  "ProfileId": {},
  "ProfileType": {},
  "As2Id": {},
  "CertificateIds": {},
  "Tags": {}
}
```

The details for a local or partner AS2 profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|ProfileId|object|false|none|none|
|ProfileType|object|false|none|none|
|As2Id|object|false|none|none|
|CertificateIds|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribedSecurityPolicy">DescribedSecurityPolicy</h2>
<!-- backwards compatibility -->
<a id="schemadescribedsecuritypolicy"></a>
<a id="schema_DescribedSecurityPolicy"></a>
<a id="tocSdescribedsecuritypolicy"></a>
<a id="tocsdescribedsecuritypolicy"></a>

```json
{
  "Fips": {},
  "SecurityPolicyName": {},
  "SshCiphers": {},
  "SshKexs": {},
  "SshMacs": {},
  "TlsCiphers": {}
}
```

Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fips|object|false|none|none|
|SecurityPolicyName|object|true|none|none|
|SshCiphers|object|false|none|none|
|SshKexs|object|false|none|none|
|SshMacs|object|false|none|none|
|TlsCiphers|object|false|none|none|

<h2 id="tocS_DescribedServer">DescribedServer</h2>
<!-- backwards compatibility -->
<a id="schemadescribedserver"></a>
<a id="schema_DescribedServer"></a>
<a id="tocSdescribedserver"></a>
<a id="tocsdescribedserver"></a>

```json
{
  "Arn": {},
  "Certificate": {},
  "ProtocolDetails": {
    "PassiveIp": {},
    "TlsSessionResumptionMode": {},
    "SetStatOption": {},
    "As2Transports": {}
  },
  "Domain": {},
  "EndpointDetails": {
    "AddressAllocationIds": {},
    "SubnetIds": {},
    "VpcEndpointId": {},
    "VpcId": {},
    "SecurityGroupIds": {}
  },
  "EndpointType": {},
  "HostKeyFingerprint": {},
  "IdentityProviderDetails": {
    "Url": {},
    "InvocationRole": {},
    "DirectoryId": {},
    "Function": {}
  },
  "IdentityProviderType": {},
  "LoggingRole": {},
  "PostAuthenticationLoginBanner": {},
  "PreAuthenticationLoginBanner": {},
  "Protocols": {},
  "SecurityPolicyName": {},
  "ServerId": {},
  "State": {},
  "Tags": {},
  "UserCount": {},
  "WorkflowDetails": {
    "OnUpload": {},
    "OnPartialUpload": {}
  }
}
```

Describes the properties of a file transfer protocol-enabled server that was specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Certificate|object|false|none|none|
|ProtocolDetails|object|false|none|none|
|Domain|object|false|none|none|
|EndpointDetails|object|false|none|none|
|EndpointType|object|false|none|none|
|HostKeyFingerprint|object|false|none|none|
|IdentityProviderDetails|object|false|none|none|
|IdentityProviderType|object|false|none|none|
|LoggingRole|object|false|none|none|
|PostAuthenticationLoginBanner|object|false|none|none|
|PreAuthenticationLoginBanner|object|false|none|none|
|Protocols|object|false|none|none|
|SecurityPolicyName|object|false|none|none|
|ServerId|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|UserCount|object|false|none|none|
|WorkflowDetails|object|false|none|none|

<h2 id="tocS_DescribedUser">DescribedUser</h2>
<!-- backwards compatibility -->
<a id="schemadescribeduser"></a>
<a id="schema_DescribedUser"></a>
<a id="tocSdescribeduser"></a>
<a id="tocsdescribeduser"></a>

```json
{
  "Arn": {},
  "HomeDirectory": {},
  "HomeDirectoryMappings": {},
  "HomeDirectoryType": {},
  "Policy": {},
  "PosixProfile": {
    "Uid": {},
    "Gid": {},
    "SecondaryGids": {}
  },
  "Role": {},
  "SshPublicKeys": {},
  "Tags": {},
  "UserName": {}
}
```

Describes the properties of a user that was specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|HomeDirectory|object|false|none|none|
|HomeDirectoryMappings|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|Policy|object|false|none|none|
|PosixProfile|object|false|none|none|
|Role|object|false|none|none|
|SshPublicKeys|object|false|none|none|
|Tags|object|false|none|none|
|UserName|object|false|none|none|

<h2 id="tocS_DescribedWorkflow">DescribedWorkflow</h2>
<!-- backwards compatibility -->
<a id="schemadescribedworkflow"></a>
<a id="schema_DescribedWorkflow"></a>
<a id="tocSdescribedworkflow"></a>
<a id="tocsdescribedworkflow"></a>

```json
{
  "Arn": {},
  "Description": {},
  "Steps": {},
  "OnExceptionSteps": {},
  "WorkflowId": {},
  "Tags": {}
}
```

Describes the properties of the specified workflow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Description|object|false|none|none|
|Steps|object|false|none|none|
|OnExceptionSteps|object|false|none|none|
|WorkflowId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_FileLocation">FileLocation</h2>
<!-- backwards compatibility -->
<a id="schemafilelocation"></a>
<a id="schema_FileLocation"></a>
<a id="tocSfilelocation"></a>
<a id="tocsfilelocation"></a>

```json
{
  "S3FileLocation": {
    "Bucket": {},
    "Key": {},
    "VersionId": {},
    "Etag": {}
  },
  "EfsFileLocation": {
    "FileSystemId": {},
    "Path": {}
  }
}
```

Specifies the Amazon S3 or EFS file details to be used in the step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3FileLocation|object|false|none|none|
|EfsFileLocation|object|false|none|none|

<h2 id="tocS_ServiceMetadata">ServiceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaservicemetadata"></a>
<a id="schema_ServiceMetadata"></a>
<a id="tocSservicemetadata"></a>
<a id="tocsservicemetadata"></a>

```json
{
  "UserDetails": {
    "UserName": {},
    "ServerId": {},
    "SessionId": {}
  }
}
```

A container object for the session details that are associated with a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserDetails|object|true|none|none|

<h2 id="tocS_LoggingConfiguration">LoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfiguration"></a>
<a id="schema_LoggingConfiguration"></a>
<a id="tocSloggingconfiguration"></a>
<a id="tocsloggingconfiguration"></a>

```json
{
  "LoggingRole": {},
  "LogGroupName": {}
}
```

Consists of the logging role and the log group name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingRole|object|false|none|none|
|LogGroupName|object|false|none|none|

<h2 id="tocS_ExecutionStatus">ExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatus"></a>
<a id="schema_ExecutionStatus"></a>
<a id="tocSexecutionstatus"></a>
<a id="tocsexecutionstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ExecutionResults">ExecutionResults</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionresults"></a>
<a id="schema_ExecutionResults"></a>
<a id="tocSexecutionresults"></a>
<a id="tocsexecutionresults"></a>

```json
{
  "Steps": {},
  "OnExceptionSteps": {}
}
```

Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Steps|object|false|none|none|
|OnExceptionSteps|object|false|none|none|

<h2 id="tocS_HostKeyFingerprint">HostKeyFingerprint</h2>
<!-- backwards compatibility -->
<a id="schemahostkeyfingerprint"></a>
<a id="schema_HostKeyFingerprint"></a>
<a id="tocShostkeyfingerprint"></a>
<a id="tocshostkeyfingerprint"></a>

```json
"string"
```

<h2 id="tocS_HostKeyDescription">HostKeyDescription</h2>
<!-- backwards compatibility -->
<a id="schemahostkeydescription"></a>
<a id="schema_HostKeyDescription"></a>
<a id="tocShostkeydescription"></a>
<a id="tocshostkeydescription"></a>

```json
"string"
```

<h2 id="tocS_HostKeyType">HostKeyType</h2>
<!-- backwards compatibility -->
<a id="schemahostkeytype"></a>
<a id="schema_HostKeyType"></a>
<a id="tocShostkeytype"></a>
<a id="tocshostkeytype"></a>

```json
"string"
```

<h2 id="tocS_Fips">Fips</h2>
<!-- backwards compatibility -->
<a id="schemafips"></a>
<a id="schema_Fips"></a>
<a id="tocSfips"></a>
<a id="tocsfips"></a>

```json
true
```

<h2 id="tocS_SecurityPolicyOptions">SecurityPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemasecuritypolicyoptions"></a>
<a id="schema_SecurityPolicyOptions"></a>
<a id="tocSsecuritypolicyoptions"></a>
<a id="tocssecuritypolicyoptions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"OFFLINE"
```

<p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p>

<h2 id="tocS_UserCount">UserCount</h2>
<!-- backwards compatibility -->
<a id="schemausercount"></a>
<a id="schema_UserCount"></a>
<a id="tocSusercount"></a>
<a id="tocsusercount"></a>

```json
0
```

<h2 id="tocS_SshPublicKeys">SshPublicKeys</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickeys"></a>
<a id="schema_SshPublicKeys"></a>
<a id="tocSsshpublickeys"></a>
<a id="tocssshpublickeys"></a>

```json
[
  {
    "DateImported": {},
    "SshPublicKeyBody": {},
    "SshPublicKeyId": {}
  }
]
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

<h2 id="tocS_EfsFileSystemId">EfsFileSystemId</h2>
<!-- backwards compatibility -->
<a id="schemaefsfilesystemid"></a>
<a id="schema_EfsFileSystemId"></a>
<a id="tocSefsfilesystemid"></a>
<a id="tocsefsfilesystemid"></a>

```json
"string"
```

<h2 id="tocS_EfsPath">EfsPath</h2>
<!-- backwards compatibility -->
<a id="schemaefspath"></a>
<a id="schema_EfsPath"></a>
<a id="tocSefspath"></a>
<a id="tocsefspath"></a>

```json
"string"
```

<h2 id="tocS_EfsFileLocation">EfsFileLocation</h2>
<!-- backwards compatibility -->
<a id="schemaefsfilelocation"></a>
<a id="schema_EfsFileLocation"></a>
<a id="tocSefsfilelocation"></a>
<a id="tocsefsfilelocation"></a>

```json
{
  "FileSystemId": {},
  "Path": {}
}
```

<p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon Elastic File Systems (Amazon EFS) for storage.</p> <p> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|false|none|none|
|Path|object|false|none|none|

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VpcEndpointId">VpcEndpointId</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointid"></a>
<a id="schema_VpcEndpointId"></a>
<a id="tocSvpcendpointid"></a>
<a id="tocsvpcendpointid"></a>

```json
"stringstringstringstri"
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

<h2 id="tocS_ExecutionErrorType">ExecutionErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionerrortype"></a>
<a id="schema_ExecutionErrorType"></a>
<a id="tocSexecutionerrortype"></a>
<a id="tocsexecutionerrortype"></a>

```json
"PERMISSION_DENIED"
```

<h2 id="tocS_ExecutionErrorMessage">ExecutionErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionerrormessage"></a>
<a id="schema_ExecutionErrorMessage"></a>
<a id="tocSexecutionerrormessage"></a>
<a id="tocsexecutionerrormessage"></a>

```json
"string"
```

<h2 id="tocS_ExecutionError">ExecutionError</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionerror"></a>
<a id="schema_ExecutionError"></a>
<a id="tocSexecutionerror"></a>
<a id="tocsexecutionerror"></a>

```json
{
  "Type": {},
  "Message": {}
}
```

Specifies the error message and type, for an error that occurs during the execution of the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Message|object|true|none|none|

<h2 id="tocS_ExecutionStepResults">ExecutionStepResults</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstepresults"></a>
<a id="schema_ExecutionStepResults"></a>
<a id="tocSexecutionstepresults"></a>
<a id="tocsexecutionstepresults"></a>

```json
[
  {
    "StepType": {},
    "Outputs": {},
    "Error": {
      "Type": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_WorkflowStepType">WorkflowStepType</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowsteptype"></a>
<a id="schema_WorkflowStepType"></a>
<a id="tocSworkflowsteptype"></a>
<a id="tocsworkflowsteptype"></a>

```json
"COPY"
```

<h2 id="tocS_StepResultOutputsJson">StepResultOutputsJson</h2>
<!-- backwards compatibility -->
<a id="schemastepresultoutputsjson"></a>
<a id="schema_StepResultOutputsJson"></a>
<a id="tocSstepresultoutputsjson"></a>
<a id="tocsstepresultoutputsjson"></a>

```json
"string"
```

<h2 id="tocS_ExecutionStepResult">ExecutionStepResult</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstepresult"></a>
<a id="schema_ExecutionStepResult"></a>
<a id="tocSexecutionstepresult"></a>
<a id="tocsexecutionstepresult"></a>

```json
{
  "StepType": {},
  "Outputs": {},
  "Error": {
    "Type": {},
    "Message": {}
  }
}
```

Specifies the following details for the step: error (if any), outputs (if any), and the step type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepType|object|false|none|none|
|Outputs|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_S3FileLocation">S3FileLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3filelocation"></a>
<a id="schema_S3FileLocation"></a>
<a id="tocSs3filelocation"></a>
<a id="tocss3filelocation"></a>

```json
{
  "Bucket": {},
  "Key": {},
  "VersionId": {},
  "Etag": {}
}
```

Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Key|object|false|none|none|
|VersionId|object|false|none|none|
|Etag|object|false|none|none|

<h2 id="tocS_FilePath">FilePath</h2>
<!-- backwards compatibility -->
<a id="schemafilepath"></a>
<a id="schema_FilePath"></a>
<a id="tocSfilepath"></a>
<a id="tocsfilepath"></a>

```json
"string"
```

<h2 id="tocS_FilePaths">FilePaths</h2>
<!-- backwards compatibility -->
<a id="schemafilepaths"></a>
<a id="schema_FilePaths"></a>
<a id="tocSfilepaths"></a>
<a id="tocsfilepaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Function">Function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_Function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
"string"
```

<h2 id="tocS_MapEntry">MapEntry</h2>
<!-- backwards compatibility -->
<a id="schemamapentry"></a>
<a id="schema_MapEntry"></a>
<a id="tocSmapentry"></a>
<a id="tocsmapentry"></a>

```json
"string"
```

<h2 id="tocS_MapTarget">MapTarget</h2>
<!-- backwards compatibility -->
<a id="schemamaptarget"></a>
<a id="schema_MapTarget"></a>
<a id="tocSmaptarget"></a>
<a id="tocsmaptarget"></a>

```json
"string"
```

<h2 id="tocS_HomeDirectoryMapEntry">HomeDirectoryMapEntry</h2>
<!-- backwards compatibility -->
<a id="schemahomedirectorymapentry"></a>
<a id="schema_HomeDirectoryMapEntry"></a>
<a id="tocShomedirectorymapentry"></a>
<a id="tocshomedirectorymapentry"></a>

```json
{
  "Entry": {},
  "Target": {}
}
```

<p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entry|object|true|none|none|
|Target|object|true|none|none|

<h2 id="tocS_PrivateKeyType">PrivateKeyType</h2>
<!-- backwards compatibility -->
<a id="schemaprivatekeytype"></a>
<a id="schema_PrivateKeyType"></a>
<a id="tocSprivatekeytype"></a>
<a id="tocsprivatekeytype"></a>

```json
"password"
```

<h2 id="tocS_S3InputFileLocation">S3InputFileLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3inputfilelocation"></a>
<a id="schema_S3InputFileLocation"></a>
<a id="tocSs3inputfilelocation"></a>
<a id="tocss3inputfilelocation"></a>

```json
{
  "Bucket": {},
  "Key": {}
}
```

<p>Specifies the customer input Amazon S3 file location. If it is used inside <code>copyStepDetails.DestinationFileLocation</code>, it should be the S3 copy destination.</p> <p> You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <i>bob</i> file.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Key|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

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

<h2 id="tocS_ListedAccesses">ListedAccesses</h2>
<!-- backwards compatibility -->
<a id="schemalistedaccesses"></a>
<a id="schema_ListedAccesses"></a>
<a id="tocSlistedaccesses"></a>
<a id="tocslistedaccesses"></a>

```json
[
  {
    "HomeDirectory": {},
    "HomeDirectoryType": {},
    "Role": {},
    "ExternalId": {}
  }
]
```

<h2 id="tocS_ListedAgreements">ListedAgreements</h2>
<!-- backwards compatibility -->
<a id="schemalistedagreements"></a>
<a id="schema_ListedAgreements"></a>
<a id="tocSlistedagreements"></a>
<a id="tocslistedagreements"></a>

```json
[
  {
    "Arn": {},
    "AgreementId": {},
    "Description": {},
    "Status": {},
    "ServerId": {},
    "LocalProfileId": {},
    "PartnerProfileId": {}
  }
]
```

<h2 id="tocS_ListedCertificates">ListedCertificates</h2>
<!-- backwards compatibility -->
<a id="schemalistedcertificates"></a>
<a id="schema_ListedCertificates"></a>
<a id="tocSlistedcertificates"></a>
<a id="tocslistedcertificates"></a>

```json
[
  {
    "Arn": {},
    "CertificateId": {},
    "Usage": {},
    "Status": {},
    "ActiveDate": {},
    "InactiveDate": {},
    "Type": {},
    "Description": {}
  }
]
```

<h2 id="tocS_ListedConnectors">ListedConnectors</h2>
<!-- backwards compatibility -->
<a id="schemalistedconnectors"></a>
<a id="schema_ListedConnectors"></a>
<a id="tocSlistedconnectors"></a>
<a id="tocslistedconnectors"></a>

```json
[
  {
    "Arn": {},
    "ConnectorId": {},
    "Url": {}
  }
]
```

<h2 id="tocS_ListedExecutions">ListedExecutions</h2>
<!-- backwards compatibility -->
<a id="schemalistedexecutions"></a>
<a id="schema_ListedExecutions"></a>
<a id="tocSlistedexecutions"></a>
<a id="tocslistedexecutions"></a>

```json
[
  {
    "ExecutionId": {},
    "InitialFileLocation": {
      "S3FileLocation": {
        "Bucket": {},
        "Key": {},
        "VersionId": {},
        "Etag": {}
      },
      "EfsFileLocation": {
        "FileSystemId": {},
        "Path": {}
      }
    },
    "ServiceMetadata": {
      "UserDetails": {
        "UserName": {},
        "ServerId": {},
        "SessionId": {}
      }
    },
    "Status": {}
  }
]
```

<h2 id="tocS_ListedHostKeys">ListedHostKeys</h2>
<!-- backwards compatibility -->
<a id="schemalistedhostkeys"></a>
<a id="schema_ListedHostKeys"></a>
<a id="tocSlistedhostkeys"></a>
<a id="tocslistedhostkeys"></a>

```json
[
  {
    "Arn": {},
    "HostKeyId": {},
    "Fingerprint": {},
    "Description": {},
    "Type": {},
    "DateImported": {}
  }
]
```

<h2 id="tocS_ListedProfiles">ListedProfiles</h2>
<!-- backwards compatibility -->
<a id="schemalistedprofiles"></a>
<a id="schema_ListedProfiles"></a>
<a id="tocSlistedprofiles"></a>
<a id="tocslistedprofiles"></a>

```json
[
  {
    "Arn": {},
    "ProfileId": {},
    "As2Id": {},
    "ProfileType": {}
  }
]
```

<h2 id="tocS_SecurityPolicyNames">SecurityPolicyNames</h2>
<!-- backwards compatibility -->
<a id="schemasecuritypolicynames"></a>
<a id="schema_SecurityPolicyNames"></a>
<a id="tocSsecuritypolicynames"></a>
<a id="tocssecuritypolicynames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListedServers">ListedServers</h2>
<!-- backwards compatibility -->
<a id="schemalistedservers"></a>
<a id="schema_ListedServers"></a>
<a id="tocSlistedservers"></a>
<a id="tocslistedservers"></a>

```json
[
  {
    "Arn": {},
    "Domain": {},
    "IdentityProviderType": {},
    "EndpointType": {},
    "LoggingRole": {},
    "ServerId": {},
    "State": {},
    "UserCount": {}
  }
]
```

<h2 id="tocS_ListedUsers">ListedUsers</h2>
<!-- backwards compatibility -->
<a id="schemalistedusers"></a>
<a id="schema_ListedUsers"></a>
<a id="tocSlistedusers"></a>
<a id="tocslistedusers"></a>

```json
[
  {
    "Arn": {},
    "HomeDirectory": {},
    "HomeDirectoryType": {},
    "Role": {},
    "SshPublicKeyCount": {},
    "UserName": {}
  }
]
```

<h2 id="tocS_ListedWorkflows">ListedWorkflows</h2>
<!-- backwards compatibility -->
<a id="schemalistedworkflows"></a>
<a id="schema_ListedWorkflows"></a>
<a id="tocSlistedworkflows"></a>
<a id="tocslistedworkflows"></a>

```json
[
  {
    "WorkflowId": {},
    "Description": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_ListedAccess">ListedAccess</h2>
<!-- backwards compatibility -->
<a id="schemalistedaccess"></a>
<a id="schema_ListedAccess"></a>
<a id="tocSlistedaccess"></a>
<a id="tocslistedaccess"></a>

```json
{
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "Role": {},
  "ExternalId": {}
}
```

Lists the properties for one or more specified associated accesses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeDirectory|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|Role|object|false|none|none|
|ExternalId|object|false|none|none|

<h2 id="tocS_ListedAgreement">ListedAgreement</h2>
<!-- backwards compatibility -->
<a id="schemalistedagreement"></a>
<a id="schema_ListedAgreement"></a>
<a id="tocSlistedagreement"></a>
<a id="tocslistedagreement"></a>

```json
{
  "Arn": {},
  "AgreementId": {},
  "Description": {},
  "Status": {},
  "ServerId": {},
  "LocalProfileId": {},
  "PartnerProfileId": {}
}
```

Describes the properties of an agreement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AgreementId|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|ServerId|object|false|none|none|
|LocalProfileId|object|false|none|none|
|PartnerProfileId|object|false|none|none|

<h2 id="tocS_ListedCertificate">ListedCertificate</h2>
<!-- backwards compatibility -->
<a id="schemalistedcertificate"></a>
<a id="schema_ListedCertificate"></a>
<a id="tocSlistedcertificate"></a>
<a id="tocslistedcertificate"></a>

```json
{
  "Arn": {},
  "CertificateId": {},
  "Usage": {},
  "Status": {},
  "ActiveDate": {},
  "InactiveDate": {},
  "Type": {},
  "Description": {}
}
```

Describes the properties of a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CertificateId|object|false|none|none|
|Usage|object|false|none|none|
|Status|object|false|none|none|
|ActiveDate|object|false|none|none|
|InactiveDate|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ListedConnector">ListedConnector</h2>
<!-- backwards compatibility -->
<a id="schemalistedconnector"></a>
<a id="schema_ListedConnector"></a>
<a id="tocSlistedconnector"></a>
<a id="tocslistedconnector"></a>

```json
{
  "Arn": {},
  "ConnectorId": {},
  "Url": {}
}
```

Returns details of the connector that is specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ConnectorId|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS_ListedExecution">ListedExecution</h2>
<!-- backwards compatibility -->
<a id="schemalistedexecution"></a>
<a id="schema_ListedExecution"></a>
<a id="tocSlistedexecution"></a>
<a id="tocslistedexecution"></a>

```json
{
  "ExecutionId": {},
  "InitialFileLocation": {
    "S3FileLocation": {
      "Bucket": {},
      "Key": {},
      "VersionId": {},
      "Etag": {}
    },
    "EfsFileLocation": {
      "FileSystemId": {},
      "Path": {}
    }
  },
  "ServiceMetadata": {
    "UserDetails": {
      "UserName": {},
      "ServerId": {},
      "SessionId": {}
    }
  },
  "Status": {}
}
```

Returns properties of the execution that is specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionId|object|false|none|none|
|InitialFileLocation|object|false|none|none|
|ServiceMetadata|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListedHostKey">ListedHostKey</h2>
<!-- backwards compatibility -->
<a id="schemalistedhostkey"></a>
<a id="schema_ListedHostKey"></a>
<a id="tocSlistedhostkey"></a>
<a id="tocslistedhostkey"></a>

```json
{
  "Arn": {},
  "HostKeyId": {},
  "Fingerprint": {},
  "Description": {},
  "Type": {},
  "DateImported": {}
}
```

Returns properties of the host key that's specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|HostKeyId|object|false|none|none|
|Fingerprint|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|DateImported|object|false|none|none|

<h2 id="tocS_ListedProfile">ListedProfile</h2>
<!-- backwards compatibility -->
<a id="schemalistedprofile"></a>
<a id="schema_ListedProfile"></a>
<a id="tocSlistedprofile"></a>
<a id="tocslistedprofile"></a>

```json
{
  "Arn": {},
  "ProfileId": {},
  "As2Id": {},
  "ProfileType": {}
}
```

Returns the properties of the profile that was specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ProfileId|object|false|none|none|
|As2Id|object|false|none|none|
|ProfileType|object|false|none|none|

<h2 id="tocS_ListedServer">ListedServer</h2>
<!-- backwards compatibility -->
<a id="schemalistedserver"></a>
<a id="schema_ListedServer"></a>
<a id="tocSlistedserver"></a>
<a id="tocslistedserver"></a>

```json
{
  "Arn": {},
  "Domain": {},
  "IdentityProviderType": {},
  "EndpointType": {},
  "LoggingRole": {},
  "ServerId": {},
  "State": {},
  "UserCount": {}
}
```

Returns properties of a file transfer protocol-enabled server that was specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Domain|object|false|none|none|
|IdentityProviderType|object|false|none|none|
|EndpointType|object|false|none|none|
|LoggingRole|object|false|none|none|
|ServerId|object|false|none|none|
|State|object|false|none|none|
|UserCount|object|false|none|none|

<h2 id="tocS_SshPublicKeyCount">SshPublicKeyCount</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickeycount"></a>
<a id="schema_SshPublicKeyCount"></a>
<a id="tocSsshpublickeycount"></a>
<a id="tocssshpublickeycount"></a>

```json
0
```

<h2 id="tocS_ListedUser">ListedUser</h2>
<!-- backwards compatibility -->
<a id="schemalisteduser"></a>
<a id="schema_ListedUser"></a>
<a id="tocSlisteduser"></a>
<a id="tocslisteduser"></a>

```json
{
  "Arn": {},
  "HomeDirectory": {},
  "HomeDirectoryType": {},
  "Role": {},
  "SshPublicKeyCount": {},
  "UserName": {}
}
```

Returns properties of the user that you specify.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|HomeDirectory|object|false|none|none|
|HomeDirectoryType|object|false|none|none|
|Role|object|false|none|none|
|SshPublicKeyCount|object|false|none|none|
|UserName|object|false|none|none|

<h2 id="tocS_ListedWorkflow">ListedWorkflow</h2>
<!-- backwards compatibility -->
<a id="schemalistedworkflow"></a>
<a id="schema_ListedWorkflow"></a>
<a id="tocSlistedworkflow"></a>
<a id="tocslistedworkflow"></a>

```json
{
  "WorkflowId": {},
  "Description": {},
  "Arn": {}
}
```

Contains the identifier, text description, and Amazon Resource Name (ARN) for the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|false|none|none|
|Description|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_LogGroupName">LogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupname"></a>
<a id="schema_LogGroupName"></a>
<a id="tocSloggroupname"></a>
<a id="tocsloggroupname"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_NullableRole">NullableRole</h2>
<!-- backwards compatibility -->
<a id="schemanullablerole"></a>
<a id="schema_NullableRole"></a>
<a id="tocSnullablerole"></a>
<a id="tocsnullablerole"></a>

```json
"string"
```

<h2 id="tocS_WorkflowDetail">WorkflowDetail</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowdetail"></a>
<a id="schema_WorkflowDetail"></a>
<a id="tocSworkflowdetail"></a>
<a id="tocsworkflowdetail"></a>

```json
{
  "WorkflowId": {},
  "ExecutionRole": {}
}
```

<p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowId|object|true|none|none|
|ExecutionRole|object|true|none|none|

<h2 id="tocS_OnPartialUploadWorkflowDetails">OnPartialUploadWorkflowDetails</h2>
<!-- backwards compatibility -->
<a id="schemaonpartialuploadworkflowdetails"></a>
<a id="schema_OnPartialUploadWorkflowDetails"></a>
<a id="tocSonpartialuploadworkflowdetails"></a>
<a id="tocsonpartialuploadworkflowdetails"></a>

```json
[
  {
    "WorkflowId": {},
    "ExecutionRole": {}
  }
]
```

<h2 id="tocS_OnUploadWorkflowDetails">OnUploadWorkflowDetails</h2>
<!-- backwards compatibility -->
<a id="schemaonuploadworkflowdetails"></a>
<a id="schema_OnUploadWorkflowDetails"></a>
<a id="tocSonuploadworkflowdetails"></a>
<a id="tocsonuploadworkflowdetails"></a>

```json
[
  {
    "WorkflowId": {},
    "ExecutionRole": {}
  }
]
```

<h2 id="tocS_PassiveIp">PassiveIp</h2>
<!-- backwards compatibility -->
<a id="schemapassiveip"></a>
<a id="schema_PassiveIp"></a>
<a id="tocSpassiveip"></a>
<a id="tocspassiveip"></a>

```json
"string"
```

<h2 id="tocS_PosixId">PosixId</h2>
<!-- backwards compatibility -->
<a id="schemaposixid"></a>
<a id="schema_PosixId"></a>
<a id="tocSposixid"></a>
<a id="tocsposixid"></a>

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

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"SFTP"
```

<h2 id="tocS_TlsSessionResumptionMode">TlsSessionResumptionMode</h2>
<!-- backwards compatibility -->
<a id="schematlssessionresumptionmode"></a>
<a id="schema_TlsSessionResumptionMode"></a>
<a id="tocStlssessionresumptionmode"></a>
<a id="tocstlssessionresumptionmode"></a>

```json
"DISABLED"
```

<h2 id="tocS_SetStatOption">SetStatOption</h2>
<!-- backwards compatibility -->
<a id="schemasetstatoption"></a>
<a id="schema_SetStatOption"></a>
<a id="tocSsetstatoption"></a>
<a id="tocssetstatoption"></a>

```json
"DEFAULT"
```

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

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

<h2 id="tocS_S3Etag">S3Etag</h2>
<!-- backwards compatibility -->
<a id="schemas3etag"></a>
<a id="schema_S3Etag"></a>
<a id="tocSs3etag"></a>
<a id="tocss3etag"></a>

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

<h2 id="tocS_S3VersionId">S3VersionId</h2>
<!-- backwards compatibility -->
<a id="schemas3versionid"></a>
<a id="schema_S3VersionId"></a>
<a id="tocSs3versionid"></a>
<a id="tocss3versionid"></a>

```json
"string"
```

<h2 id="tocS_S3TagKey">S3TagKey</h2>
<!-- backwards compatibility -->
<a id="schemas3tagkey"></a>
<a id="schema_S3TagKey"></a>
<a id="tocSs3tagkey"></a>
<a id="tocss3tagkey"></a>

```json
"string"
```

<h2 id="tocS_S3TagValue">S3TagValue</h2>
<!-- backwards compatibility -->
<a id="schemas3tagvalue"></a>
<a id="schema_S3TagValue"></a>
<a id="tocSs3tagvalue"></a>
<a id="tocss3tagvalue"></a>

```json
"string"
```

<h2 id="tocS_S3Tag">S3Tag</h2>
<!-- backwards compatibility -->
<a id="schemas3tag"></a>
<a id="schema_S3Tag"></a>
<a id="tocSs3tag"></a>
<a id="tocss3tag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_S3Tags">S3Tags</h2>
<!-- backwards compatibility -->
<a id="schemas3tags"></a>
<a id="schema_S3Tags"></a>
<a id="tocSs3tags"></a>
<a id="tocss3tags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
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

<h2 id="tocS_SecurityPolicyOption">SecurityPolicyOption</h2>
<!-- backwards compatibility -->
<a id="schemasecuritypolicyoption"></a>
<a id="schema_SecurityPolicyOption"></a>
<a id="tocSsecuritypolicyoption"></a>
<a id="tocssecuritypolicyoption"></a>

```json
"string"
```

<h2 id="tocS_UserDetails">UserDetails</h2>
<!-- backwards compatibility -->
<a id="schemauserdetails"></a>
<a id="schema_UserDetails"></a>
<a id="tocSuserdetails"></a>
<a id="tocsuserdetails"></a>

```json
{
  "UserName": {},
  "ServerId": {},
  "SessionId": {}
}
```

Specifies the user name, server ID, and session ID for a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|true|none|none|
|ServerId|object|true|none|none|
|SessionId|object|false|none|none|

<h2 id="tocS_SessionId">SessionId</h2>
<!-- backwards compatibility -->
<a id="schemasessionid"></a>
<a id="schema_SessionId"></a>
<a id="tocSsessionid"></a>
<a id="tocssessionid"></a>

```json
"string"
```

<h2 id="tocS_SourceIp">SourceIp</h2>
<!-- backwards compatibility -->
<a id="schemasourceip"></a>
<a id="schema_SourceIp"></a>
<a id="tocSsourceip"></a>
<a id="tocssourceip"></a>

```json
"string"
```

<h2 id="tocS_SshPublicKey">SshPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickey"></a>
<a id="schema_SshPublicKey"></a>
<a id="tocSsshpublickey"></a>
<a id="tocssshpublickey"></a>

```json
{
  "DateImported": {},
  "SshPublicKeyBody": {},
  "SshPublicKeyId": {}
}
```

Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DateImported|object|true|none|none|
|SshPublicKeyBody|object|true|none|none|
|SshPublicKeyId|object|true|none|none|

<h2 id="tocS_TransferId">TransferId</h2>
<!-- backwards compatibility -->
<a id="schematransferid"></a>
<a id="schema_TransferId"></a>
<a id="tocStransferid"></a>
<a id="tocstransferid"></a>

```json
"string"
```

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```json
0
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
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

Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group.

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

<h2 id="tocS_TagStepDetails">TagStepDetails</h2>
<!-- backwards compatibility -->
<a id="schematagstepdetails"></a>
<a id="schema_TagStepDetails"></a>
<a id="tocStagstepdetails"></a>
<a id="tocstagstepdetails"></a>

```json
{
  "Name": {},
  "Tags": {},
  "SourceFileLocation": {}
}
```

<p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Tags|object|false|none|none|
|SourceFileLocation|object|false|none|none|

<h2 id="tocS_UserPassword">UserPassword</h2>
<!-- backwards compatibility -->
<a id="schemauserpassword"></a>
<a id="schema_UserPassword"></a>
<a id="tocSuserpassword"></a>
<a id="tocsuserpassword"></a>

```json
"password"
```

<h2 id="tocS_WorkflowStep">WorkflowStep</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstep"></a>
<a id="schema_WorkflowStep"></a>
<a id="tocSworkflowstep"></a>
<a id="tocsworkflowstep"></a>

```json
{
  "Type": {},
  "CopyStepDetails": {
    "Name": {},
    "DestinationFileLocation": {
      "S3FileLocation": {
        "Bucket": {},
        "Key": {}
      },
      "EfsFileLocation": {
        "FileSystemId": {},
        "Path": {}
      }
    },
    "OverwriteExisting": {},
    "SourceFileLocation": {}
  },
  "CustomStepDetails": {
    "Name": {},
    "Target": {},
    "TimeoutSeconds": {},
    "SourceFileLocation": {}
  },
  "DeleteStepDetails": {
    "Name": {},
    "SourceFileLocation": {}
  },
  "TagStepDetails": {
    "Name": {},
    "Tags": {},
    "SourceFileLocation": {}
  },
  "DecryptStepDetails": {
    "Name": {},
    "Type": {},
    "SourceFileLocation": {},
    "OverwriteExisting": {},
    "DestinationFileLocation": {
      "S3FileLocation": {
        "Bucket": {},
        "Key": {}
      },
      "EfsFileLocation": {
        "FileSystemId": {},
        "Path": {}
      }
    }
  }
}
```

The basic building block of a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|CopyStepDetails|object|false|none|none|
|CustomStepDetails|object|false|none|none|
|DeleteStepDetails|object|false|none|none|
|TagStepDetails|object|false|none|none|
|DecryptStepDetails|object|false|none|none|
