<h1 id="aws-directory-service">AWS Directory Service v2015-04-16</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Directory Service</fullname> <p>Directory Service is a web service that makes it easy for you to setup and run directories in the Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active Directory. This guide provides detailed information about Directory Service operations, data types, parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service Administration Guide</a>.</p> <note> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

Base URLs:

* <a href="http://ds.us-east-1.amazonaws.com">http://ds.us-east-1.amazonaws.com</a> - The Directory Service multi-region endpoint

* <a href="https://ds.us-east-1.amazonaws.com">https://ds.us-east-1.amazonaws.com</a> - The Directory Service multi-region endpoint

* <a href="http://ds.cn-north-1.amazonaws.com.cn">http://ds.cn-north-1.amazonaws.com.cn</a> - The Directory Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ds.cn-north-1.amazonaws.com.cn">https://ds.cn-north-1.amazonaws.com.cn</a> - The Directory Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ds/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-directory-service-default">Default</h1>

## AcceptSharedDirectory

<a id="opIdAcceptSharedDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.AcceptSharedDirectory' \
  -d '{
    "SharedDirectoryId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory`

Accepts a directory sharing request that was sent from the directory owner account.

> Body parameter

```json
{
  "SharedDirectoryId": {}
}
```

<h3 id="acceptshareddirectory-parameters">Parameters</h3>

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
|body|body|[AcceptSharedDirectoryRequest](#schemaacceptshareddirectoryrequest)|true|none|
|» SharedDirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.AcceptSharedDirectory|

> Example responses

> 200 Response

```json
{
  "SharedDirectory": {
    "OwnerAccountId": {},
    "OwnerDirectoryId": {},
    "ShareMethod": {},
    "SharedAccountId": {},
    "SharedDirectoryId": {},
    "ShareStatus": {},
    "ShareNotes": {},
    "CreatedDateTime": {},
    "LastUpdatedDateTime": {}
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

<h3 id="acceptshareddirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptSharedDirectoryResult](#schemaacceptshareddirectoryresult)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|DirectoryAlreadySharedException|[DirectoryAlreadySharedException](#schemadirectoryalreadysharedexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddIpRoutes

<a id="opIdAddIpRoutes"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.AddIpRoutes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.AddIpRoutes' \
  -d '{
    "DirectoryId": {},
    "IpRoutes": {},
    "UpdateSecurityGroupForDirectoryControllers": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.AddIpRoutes`

<p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

> Body parameter

```json
{
  "DirectoryId": {},
  "IpRoutes": {},
  "UpdateSecurityGroupForDirectoryControllers": {}
}
```

<h3 id="addiproutes-parameters">Parameters</h3>

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
|body|body|[AddIpRoutesRequest](#schemaaddiproutesrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» IpRoutes|body|object|true|none|
|» UpdateSecurityGroupForDirectoryControllers|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.AddIpRoutes|

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

<h3 id="addiproutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddIpRoutesResult](#schemaaddiproutesresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|484|484|IpRouteLimitExceededException|[IpRouteLimitExceededException](#schemaiproutelimitexceededexception)|
|485|485|ClientException|[ClientException](#schemaclientexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddRegion

<a id="opIdAddRegion"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.AddRegion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.AddRegion' \
  -d '{
    "DirectoryId": {},
    "RegionName": {},
    "VPCSettings": {
      "VpcId": {},
      "SubnetIds": {}
    }
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.AddRegion`

Adds two domain controllers in the specified Region for the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "RegionName": {},
  "VPCSettings": {
    "VpcId": {},
    "SubnetIds": {}
  }
}
```

<h3 id="addregion-parameters">Parameters</h3>

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
|body|body|[AddRegionRequest](#schemaaddregionrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RegionName|body|object|true|none|
|» VPCSettings|body|[DirectoryVpcSettings](#schemadirectoryvpcsettings)|true|Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.AddRegion|

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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="addregion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddRegionResult](#schemaaddregionresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|483|483|DirectoryAlreadyInRegionException|[DirectoryAlreadyInRegionException](#schemadirectoryalreadyinregionexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|486|486|RegionLimitExceededException|[RegionLimitExceededException](#schemaregionlimitexceededexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|488|488|ClientException|[ClientException](#schemaclientexception)|
|489|489|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddTagsToResource

<a id="opIdAddTagsToResource"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.AddTagsToResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.AddTagsToResource' \
  -d '{
    "ResourceId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.AddTagsToResource`

Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.

> Body parameter

```json
{
  "ResourceId": {},
  "Tags": {}
}
```

<h3 id="addtagstoresource-parameters">Parameters</h3>

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
|body|body|[AddTagsToResourceRequest](#schemaaddtagstoresourcerequest)|true|none|
|» ResourceId|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.AddTagsToResource|

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

<h3 id="addtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsToResourceResult](#schemaaddtagstoresourceresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelSchemaExtension

<a id="opIdCancelSchemaExtension"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CancelSchemaExtension' \
  -d '{
    "DirectoryId": {},
    "SchemaExtensionId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension`

Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.

> Body parameter

```json
{
  "DirectoryId": {},
  "SchemaExtensionId": {}
}
```

<h3 id="cancelschemaextension-parameters">Parameters</h3>

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
|body|body|[CancelSchemaExtensionRequest](#schemacancelschemaextensionrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» SchemaExtensionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CancelSchemaExtension|

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

<h3 id="cancelschemaextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelSchemaExtensionResult](#schemacancelschemaextensionresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConnectDirectory

<a id="opIdConnectDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ConnectDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ConnectDirectory' \
  -d '{
    "Name": {},
    "ShortName": {},
    "Password": {},
    "Description": {},
    "Size": {},
    "ConnectSettings": {
      "VpcId": {},
      "SubnetIds": {},
      "CustomerDnsIps": {},
      "CustomerUserName": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ConnectDirectory`

<p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ShortName": {},
  "Password": {},
  "Description": {},
  "Size": {},
  "ConnectSettings": {
    "VpcId": {},
    "SubnetIds": {},
    "CustomerDnsIps": {},
    "CustomerUserName": {}
  },
  "Tags": {}
}
```

<h3 id="connectdirectory-parameters">Parameters</h3>

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
|body|body|[ConnectDirectoryRequest](#schemaconnectdirectoryrequest)|true|none|
|» Name|body|object|true|none|
|» ShortName|body|object|false|none|
|» Password|body|object|true|none|
|» Description|body|object|false|none|
|» Size|body|object|true|none|
|» ConnectSettings|body|object|true|none|
|» » VpcId|body|object|true|none|
|» » SubnetIds|body|object|true|none|
|» » CustomerDnsIps|body|object|true|none|
|» » CustomerUserName|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ConnectDirectory|

> Example responses

> 200 Response

```json
{
  "DirectoryId": {}
}
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

<h3 id="connectdirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConnectDirectoryResult](#schemaconnectdirectoryresult)|
|480|480|DirectoryLimitExceededException|[DirectoryLimitExceededException](#schemadirectorylimitexceededexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlias

<a id="opIdCreateAlias"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateAlias' \
  -d '{
    "DirectoryId": {},
    "Alias": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateAlias`

<p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>

> Body parameter

```json
{
  "DirectoryId": {},
  "Alias": {}
}
```

<h3 id="createalias-parameters">Parameters</h3>

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
|body|body|[CreateAliasRequest](#schemacreatealiasrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Alias|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateAlias|

> Example responses

> 200 Response

```json
{
  "DirectoryId": {},
  "Alias": {}
}
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

<h3 id="createalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAliasResult](#schemacreatealiasresult)|
|480|480|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateComputer

<a id="opIdCreateComputer"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateComputer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateComputer' \
  -d '{
    "DirectoryId": {},
    "ComputerName": {},
    "Password": {},
    "OrganizationalUnitDistinguishedName": {},
    "ComputerAttributes": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateComputer`

Creates an Active Directory computer object in the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "ComputerName": {},
  "Password": {},
  "OrganizationalUnitDistinguishedName": {},
  "ComputerAttributes": {}
}
```

<h3 id="createcomputer-parameters">Parameters</h3>

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
|body|body|[CreateComputerRequest](#schemacreatecomputerrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» ComputerName|body|object|true|none|
|» Password|body|object|true|none|
|» OrganizationalUnitDistinguishedName|body|object|false|none|
|» ComputerAttributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateComputer|

> Example responses

> 200 Response

```json
{
  "Computer": {
    "ComputerId": {},
    "ComputerName": {},
    "ComputerAttributes": {}
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

<h3 id="createcomputer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateComputerResult](#schemacreatecomputerresult)|
|480|480|AuthenticationFailedException|[AuthenticationFailedException](#schemaauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|483|483|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|486|486|ClientException|[ClientException](#schemaclientexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConditionalForwarder

<a id="opIdCreateConditionalForwarder"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateConditionalForwarder' \
  -d '{
    "DirectoryId": {},
    "RemoteDomainName": {},
    "DnsIpAddrs": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder`

Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.

> Body parameter

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {},
  "DnsIpAddrs": {}
}
```

<h3 id="createconditionalforwarder-parameters">Parameters</h3>

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
|body|body|[CreateConditionalForwarderRequest](#schemacreateconditionalforwarderrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RemoteDomainName|body|object|true|none|
|» DnsIpAddrs|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateConditionalForwarder|

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

<h3 id="createconditionalforwarder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConditionalForwarderResult](#schemacreateconditionalforwarderresult)|
|480|480|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|ClientException|[ClientException](#schemaclientexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDirectory

<a id="opIdCreateDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateDirectory' \
  -d '{
    "Name": {},
    "ShortName": {},
    "Password": {},
    "Description": {},
    "Size": {},
    "VpcSettings": {
      "VpcId": {},
      "SubnetIds": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateDirectory`

<p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ShortName": {},
  "Password": {},
  "Description": {},
  "Size": {},
  "VpcSettings": {
    "VpcId": {},
    "SubnetIds": {}
  },
  "Tags": {}
}
```

<h3 id="createdirectory-parameters">Parameters</h3>

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
|body|body|[CreateDirectoryRequest](#schemacreatedirectoryrequest)|true|none|
|» Name|body|object|true|none|
|» ShortName|body|object|false|none|
|» Password|body|object|true|none|
|» Description|body|object|false|none|
|» Size|body|object|true|none|
|» VpcSettings|body|object|false|none|
|» » VpcId|body|object|true|none|
|» » SubnetIds|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateDirectory|

> Example responses

> 200 Response

```json
{
  "DirectoryId": {}
}
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

<h3 id="createdirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDirectoryResult](#schemacreatedirectoryresult)|
|480|480|DirectoryLimitExceededException|[DirectoryLimitExceededException](#schemadirectorylimitexceededexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLogSubscription

<a id="opIdCreateLogSubscription"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateLogSubscription' \
  -d '{
    "DirectoryId": {},
    "LogGroupName": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription`

Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.

> Body parameter

```json
{
  "DirectoryId": {},
  "LogGroupName": {}
}
```

<h3 id="createlogsubscription-parameters">Parameters</h3>

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
|body|body|[CreateLogSubscriptionRequest](#schemacreatelogsubscriptionrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» LogGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateLogSubscription|

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

<h3 id="createlogsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLogSubscriptionResult](#schemacreatelogsubscriptionresult)|
|480|480|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|483|483|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMicrosoftAD

<a id="opIdCreateMicrosoftAD"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateMicrosoftAD' \
  -d '{
    "Name": {},
    "ShortName": {},
    "Password": {},
    "Description": {},
    "VpcSettings": {
      "VpcId": {},
      "SubnetIds": {}
    },
    "Edition": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD`

<p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ShortName": {},
  "Password": {},
  "Description": {},
  "VpcSettings": {
    "VpcId": {},
    "SubnetIds": {}
  },
  "Edition": {},
  "Tags": {}
}
```

<h3 id="createmicrosoftad-parameters">Parameters</h3>

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
|body|body|[CreateMicrosoftADRequest](#schemacreatemicrosoftadrequest)|true|none|
|» Name|body|object|true|none|
|» ShortName|body|object|false|none|
|» Password|body|object|true|none|
|» Description|body|object|false|none|
|» VpcSettings|body|object|true|none|
|» » VpcId|body|object|true|none|
|» » SubnetIds|body|object|true|none|
|» Edition|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateMicrosoftAD|

> Example responses

> 200 Response

```json
{
  "DirectoryId": {}
}
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

<h3 id="createmicrosoftad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMicrosoftADResult](#schemacreatemicrosoftadresult)|
|480|480|DirectoryLimitExceededException|[DirectoryLimitExceededException](#schemadirectorylimitexceededexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSnapshot

<a id="opIdCreateSnapshot"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateSnapshot' \
  -d '{
    "DirectoryId": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateSnapshot`

<p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>

> Body parameter

```json
{
  "DirectoryId": {},
  "Name": {}
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
|» DirectoryId|body|object|true|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateSnapshot|

> Example responses

> 200 Response

```json
{
  "SnapshotId": {}
}
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

<h3 id="createsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSnapshotResult](#schemacreatesnapshotresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|SnapshotLimitExceededException|[SnapshotLimitExceededException](#schemasnapshotlimitexceededexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTrust

<a id="opIdCreateTrust"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.CreateTrust' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.CreateTrust' \
  -d '{
    "DirectoryId": {},
    "RemoteDomainName": {},
    "TrustPassword": {},
    "TrustDirection": {},
    "TrustType": {},
    "ConditionalForwarderIpAddrs": {},
    "SelectiveAuth": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.CreateTrust`

<p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>

> Body parameter

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {},
  "TrustPassword": {},
  "TrustDirection": {},
  "TrustType": {},
  "ConditionalForwarderIpAddrs": {},
  "SelectiveAuth": {}
}
```

<h3 id="createtrust-parameters">Parameters</h3>

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
|body|body|[CreateTrustRequest](#schemacreatetrustrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RemoteDomainName|body|object|true|none|
|» TrustPassword|body|object|true|none|
|» TrustDirection|body|object|true|none|
|» TrustType|body|object|false|none|
|» ConditionalForwarderIpAddrs|body|object|false|none|
|» SelectiveAuth|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.CreateTrust|

> Example responses

> 200 Response

```json
{
  "TrustId": {}
}
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

<h3 id="createtrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTrustResult](#schemacreatetrustresult)|
|480|480|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConditionalForwarder

<a id="opIdDeleteConditionalForwarder"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DeleteConditionalForwarder' \
  -d '{
    "DirectoryId": {},
    "RemoteDomainName": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder`

Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {}
}
```

<h3 id="deleteconditionalforwarder-parameters">Parameters</h3>

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
|body|body|[DeleteConditionalForwarderRequest](#schemadeleteconditionalforwarderrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RemoteDomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DeleteConditionalForwarder|

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

<h3 id="deleteconditionalforwarder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConditionalForwarderResult](#schemadeleteconditionalforwarderresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDirectory

<a id="opIdDeleteDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DeleteDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DeleteDirectory' \
  -d '{
    "DirectoryId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DeleteDirectory`

<p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

> Body parameter

```json
{
  "DirectoryId": {}
}
```

<h3 id="deletedirectory-parameters">Parameters</h3>

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
|body|body|[DeleteDirectoryRequest](#schemadeletedirectoryrequest)|true|none|
|» DirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DeleteDirectory|

> Example responses

> 200 Response

```json
{
  "DirectoryId": {}
}
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

<h3 id="deletedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDirectoryResult](#schemadeletedirectoryresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLogSubscription

<a id="opIdDeleteLogSubscription"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DeleteLogSubscription' \
  -d '{
    "DirectoryId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription`

Deletes the specified log subscription.

> Body parameter

```json
{
  "DirectoryId": {}
}
```

<h3 id="deletelogsubscription-parameters">Parameters</h3>

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
|body|body|[DeleteLogSubscriptionRequest](#schemadeletelogsubscriptionrequest)|true|none|
|» DirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DeleteLogSubscription|

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

<h3 id="deletelogsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLogSubscriptionResult](#schemadeletelogsubscriptionresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSnapshot

<a id="opIdDeleteSnapshot"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DeleteSnapshot' \
  -d '{
    "SnapshotId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot`

Deletes a directory snapshot.

> Body parameter

```json
{
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
|» SnapshotId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DeleteSnapshot|

> Example responses

> 200 Response

```json
{
  "SnapshotId": {}
}
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

<h3 id="deletesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSnapshotResult](#schemadeletesnapshotresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTrust

<a id="opIdDeleteTrust"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DeleteTrust' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DeleteTrust' \
  -d '{
    "TrustId": {},
    "DeleteAssociatedConditionalForwarder": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DeleteTrust`

Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.

> Body parameter

```json
{
  "TrustId": {},
  "DeleteAssociatedConditionalForwarder": {}
}
```

<h3 id="deletetrust-parameters">Parameters</h3>

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
|body|body|[DeleteTrustRequest](#schemadeletetrustrequest)|true|none|
|» TrustId|body|object|true|none|
|» DeleteAssociatedConditionalForwarder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DeleteTrust|

> Example responses

> 200 Response

```json
{
  "TrustId": {}
}
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

<h3 id="deletetrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTrustResult](#schemadeletetrustresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterCertificate

<a id="opIdDeregisterCertificate"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DeregisterCertificate' \
  -d '{
    "DirectoryId": {},
    "CertificateId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate`

Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.

> Body parameter

```json
{
  "DirectoryId": {},
  "CertificateId": {}
}
```

<h3 id="deregistercertificate-parameters">Parameters</h3>

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
|body|body|[DeregisterCertificateRequest](#schemaderegistercertificaterequest)|true|none|
|» DirectoryId|body|object|true|none|
|» CertificateId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DeregisterCertificate|

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

<h3 id="deregistercertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterCertificateResult](#schemaderegistercertificateresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|482|482|CertificateDoesNotExistException|[CertificateDoesNotExistException](#schemacertificatedoesnotexistexception)|
|483|483|CertificateInUseException|[CertificateInUseException](#schemacertificateinuseexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|ClientException|[ClientException](#schemaclientexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterEventTopic

<a id="opIdDeregisterEventTopic"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DeregisterEventTopic' \
  -d '{
    "DirectoryId": {},
    "TopicName": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic`

Removes the specified directory as a publisher to the specified Amazon SNS topic.

> Body parameter

```json
{
  "DirectoryId": {},
  "TopicName": {}
}
```

<h3 id="deregistereventtopic-parameters">Parameters</h3>

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
|body|body|[DeregisterEventTopicRequest](#schemaderegistereventtopicrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» TopicName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DeregisterEventTopic|

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

<h3 id="deregistereventtopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterEventTopicResult](#schemaderegistereventtopicresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCertificate

<a id="opIdDescribeCertificate"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeCertificate' \
  -d '{
    "DirectoryId": {},
    "CertificateId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeCertificate`

Displays information about the certificate registered for secure LDAP or client certificate authentication.

> Body parameter

```json
{
  "DirectoryId": {},
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
|» DirectoryId|body|object|true|none|
|» CertificateId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {
    "CertificateId": {},
    "State": {},
    "StateReason": {},
    "CommonName": {},
    "RegisteredDateTime": {},
    "ExpiryDateTime": {},
    "Type": {},
    "ClientCertAuthSettings": {
      "OCSPUrl": {}
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

<h3 id="describecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCertificateResult](#schemadescribecertificateresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|CertificateDoesNotExistException|[CertificateDoesNotExistException](#schemacertificatedoesnotexistexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClientAuthenticationSettings

<a id="opIdDescribeClientAuthenticationSettings"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeClientAuthenticationSettings' \
  -d '{
    "DirectoryId": {},
    "Type": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings`

Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 

> Body parameter

```json
{
  "DirectoryId": {},
  "Type": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describeclientauthenticationsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeClientAuthenticationSettingsRequest](#schemadescribeclientauthenticationsettingsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Type|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeClientAuthenticationSettings|

> Example responses

> 200 Response

```json
{
  "ClientAuthenticationSettingsInfo": {},
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

> 485 Response

```json
null
```

<h3 id="describeclientauthenticationsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClientAuthenticationSettingsResult](#schemadescribeclientauthenticationsettingsresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConditionalForwarders

<a id="opIdDescribeConditionalForwarders"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeConditionalForwarders' \
  -d '{
    "DirectoryId": {},
    "RemoteDomainNames": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders`

<p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>

> Body parameter

```json
{
  "DirectoryId": {},
  "RemoteDomainNames": {}
}
```

<h3 id="describeconditionalforwarders-parameters">Parameters</h3>

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
|body|body|[DescribeConditionalForwardersRequest](#schemadescribeconditionalforwardersrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RemoteDomainNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeConditionalForwarders|

> Example responses

> 200 Response

```json
{
  "ConditionalForwarders": {}
}
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

<h3 id="describeconditionalforwarders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConditionalForwardersResult](#schemadescribeconditionalforwardersresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDirectories

<a id="opIdDescribeDirectories"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeDirectories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeDirectories' \
  -d '{
    "DirectoryIds": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeDirectories`

<p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>

> Body parameter

```json
{
  "DirectoryIds": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describedirectories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDirectoriesRequest](#schemadescribedirectoriesrequest)|true|none|
|» DirectoryIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeDirectories|

> Example responses

> 200 Response

```json
{
  "DirectoryDescriptions": {},
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

<h3 id="describedirectories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDirectoriesResult](#schemadescribedirectoriesresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDomainControllers

<a id="opIdDescribeDomainControllers"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeDomainControllers' \
  -d '{
    "DirectoryId": {},
    "DomainControllerIds": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers`

Provides information about any domain controllers in your directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "DomainControllerIds": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describedomaincontrollers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDomainControllersRequest](#schemadescribedomaincontrollersrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» DomainControllerIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeDomainControllers|

> Example responses

> 200 Response

```json
{
  "DomainControllers": {},
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

> 485 Response

```json
null
```

<h3 id="describedomaincontrollers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainControllersResult](#schemadescribedomaincontrollersresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventTopics

<a id="opIdDescribeEventTopics"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeEventTopics' \
  -d '{
    "DirectoryId": {},
    "TopicNames": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics`

<p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>

> Body parameter

```json
{
  "DirectoryId": {},
  "TopicNames": {}
}
```

<h3 id="describeeventtopics-parameters">Parameters</h3>

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
|body|body|[DescribeEventTopicsRequest](#schemadescribeeventtopicsrequest)|true|none|
|» DirectoryId|body|object|false|none|
|» TopicNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeEventTopics|

> Example responses

> 200 Response

```json
{
  "EventTopics": {}
}
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

<h3 id="describeeventtopics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventTopicsResult](#schemadescribeeventtopicsresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLDAPSSettings

<a id="opIdDescribeLDAPSSettings"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeLDAPSSettings' \
  -d '{
    "DirectoryId": {},
    "Type": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings`

Describes the status of LDAP security for the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "Type": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describeldapssettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLDAPSSettingsRequest](#schemadescribeldapssettingsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Type|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeLDAPSSettings|

> Example responses

> 200 Response

```json
{
  "LDAPSSettingsInfo": {},
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

> 485 Response

```json
null
```

<h3 id="describeldapssettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLDAPSSettingsResult](#schemadescribeldapssettingsresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRegions

<a id="opIdDescribeRegions"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeRegions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeRegions' \
  -d '{
    "DirectoryId": {},
    "RegionName": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeRegions`

Provides information about the Regions that are configured for multi-Region replication.

> Body parameter

```json
{
  "DirectoryId": {},
  "RegionName": {},
  "NextToken": {}
}
```

<h3 id="describeregions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRegionsRequest](#schemadescriberegionsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RegionName|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeRegions|

> Example responses

> 200 Response

```json
{
  "RegionsDescription": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describeregions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRegionsResult](#schemadescriberegionsresult)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ClientException|[ClientException](#schemaclientexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSettings

<a id="opIdDescribeSettings"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeSettings' \
  -d '{
    "DirectoryId": {},
    "Status": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeSettings`

Retrieves information about the configurable settings for the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "Status": {},
  "NextToken": {}
}
```

<h3 id="describesettings-parameters">Parameters</h3>

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
|body|body|[DescribeSettingsRequest](#schemadescribesettingsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Status|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeSettings|

> Example responses

> 200 Response

```json
{
  "DirectoryId": {},
  "SettingEntries": {},
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

> 485 Response

```json
null
```

<h3 id="describesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSettingsResult](#schemadescribesettingsresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSharedDirectories

<a id="opIdDescribeSharedDirectories"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeSharedDirectories' \
  -d '{
    "OwnerDirectoryId": {},
    "SharedDirectoryIds": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories`

Returns the shared directories in your account. 

> Body parameter

```json
{
  "OwnerDirectoryId": {},
  "SharedDirectoryIds": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describeshareddirectories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSharedDirectoriesRequest](#schemadescribeshareddirectoriesrequest)|true|none|
|» OwnerDirectoryId|body|object|true|none|
|» SharedDirectoryIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeSharedDirectories|

> Example responses

> 200 Response

```json
{
  "SharedDirectories": {},
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

> 485 Response

```json
null
```

<h3 id="describeshareddirectories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSharedDirectoriesResult](#schemadescribeshareddirectoriesresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSnapshots

<a id="opIdDescribeSnapshots"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeSnapshots' \
  -d '{
    "DirectoryId": {},
    "SnapshotIds": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots`

<p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>

> Body parameter

```json
{
  "DirectoryId": {},
  "SnapshotIds": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describesnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
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
|» DirectoryId|body|object|false|none|
|» SnapshotIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeSnapshots|

> Example responses

> 200 Response

```json
{
  "Snapshots": {},
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

<h3 id="describesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSnapshotsResult](#schemadescribesnapshotsresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTrusts

<a id="opIdDescribeTrusts"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeTrusts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeTrusts' \
  -d '{
    "DirectoryId": {},
    "TrustIds": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeTrusts`

<p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>

> Body parameter

```json
{
  "DirectoryId": {},
  "TrustIds": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describetrusts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTrustsRequest](#schemadescribetrustsrequest)|true|none|
|» DirectoryId|body|object|false|none|
|» TrustIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeTrusts|

> Example responses

> 200 Response

```json
{
  "Trusts": {},
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

> 485 Response

```json
null
```

<h3 id="describetrusts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrustsResult](#schemadescribetrustsresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUpdateDirectory

<a id="opIdDescribeUpdateDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DescribeUpdateDirectory' \
  -d '{
    "DirectoryId": {},
    "UpdateType": {},
    "RegionName": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory`

 Describes the updates of a directory for a particular update type. 

> Body parameter

```json
{
  "DirectoryId": {},
  "UpdateType": {},
  "RegionName": {},
  "NextToken": {}
}
```

<h3 id="describeupdatedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeUpdateDirectoryRequest](#schemadescribeupdatedirectoryrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» UpdateType|body|object|true|none|
|» RegionName|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DescribeUpdateDirectory|

> Example responses

> 200 Response

```json
{
  "UpdateActivities": {},
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

> 485 Response

```json
null
```

<h3 id="describeupdatedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUpdateDirectoryResult](#schemadescribeupdatedirectoryresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableClientAuthentication

<a id="opIdDisableClientAuthentication"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DisableClientAuthentication' \
  -d '{
    "DirectoryId": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication`

Disables alternative client authentication methods for the specified directory. 

> Body parameter

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

<h3 id="disableclientauthentication-parameters">Parameters</h3>

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
|body|body|[DisableClientAuthenticationRequest](#schemadisableclientauthenticationrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DisableClientAuthentication|

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

<h3 id="disableclientauthentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableClientAuthenticationResult](#schemadisableclientauthenticationresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|InvalidClientAuthStatusException|[InvalidClientAuthStatusException](#schemainvalidclientauthstatusexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableLDAPS

<a id="opIdDisableLDAPS"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DisableLDAPS' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DisableLDAPS' \
  -d '{
    "DirectoryId": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DisableLDAPS`

Deactivates LDAP secure calls for the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

<h3 id="disableldaps-parameters">Parameters</h3>

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
|body|body|[DisableLDAPSRequest](#schemadisableldapsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DisableLDAPS|

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

<h3 id="disableldaps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableLDAPSResult](#schemadisableldapsresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|482|482|InvalidLDAPSStatusException|[InvalidLDAPSStatusException](#schemainvalidldapsstatusexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ClientException|[ClientException](#schemaclientexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableRadius

<a id="opIdDisableRadius"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DisableRadius' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DisableRadius' \
  -d '{
    "DirectoryId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DisableRadius`

Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

> Body parameter

```json
{
  "DirectoryId": {}
}
```

<h3 id="disableradius-parameters">Parameters</h3>

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
|body|body|[DisableRadiusRequest](#schemadisableradiusrequest)|true|none|
|» DirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DisableRadius|

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

<h3 id="disableradius-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableRadiusResult](#schemadisableradiusresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableSso

<a id="opIdDisableSso"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.DisableSso' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.DisableSso' \
  -d '{
    "DirectoryId": {},
    "UserName": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.DisableSso`

Disables single-sign on for a directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "UserName": {},
  "Password": {}
}
```

<h3 id="disablesso-parameters">Parameters</h3>

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
|body|body|[DisableSsoRequest](#schemadisablessorequest)|true|none|
|» DirectoryId|body|object|true|none|
|» UserName|body|object|false|none|
|» Password|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.DisableSso|

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

<h3 id="disablesso-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableSsoResult](#schemadisablessoresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|482|482|AuthenticationFailedException|[AuthenticationFailedException](#schemaauthenticationfailedexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableClientAuthentication

<a id="opIdEnableClientAuthentication"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.EnableClientAuthentication' \
  -d '{
    "DirectoryId": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication`

Enables alternative client authentication methods for the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

<h3 id="enableclientauthentication-parameters">Parameters</h3>

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
|body|body|[EnableClientAuthenticationRequest](#schemaenableclientauthenticationrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.EnableClientAuthentication|

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

<h3 id="enableclientauthentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableClientAuthenticationResult](#schemaenableclientauthenticationresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|InvalidClientAuthStatusException|[InvalidClientAuthStatusException](#schemainvalidclientauthstatusexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|NoAvailableCertificateException|[NoAvailableCertificateException](#schemanoavailablecertificateexception)|
|485|485|ClientException|[ClientException](#schemaclientexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableLDAPS

<a id="opIdEnableLDAPS"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.EnableLDAPS' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.EnableLDAPS' \
  -d '{
    "DirectoryId": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.EnableLDAPS`

Activates the switch for the specific directory to always use LDAP secure calls.

> Body parameter

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

<h3 id="enableldaps-parameters">Parameters</h3>

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
|body|body|[EnableLDAPSRequest](#schemaenableldapsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.EnableLDAPS|

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

<h3 id="enableldaps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableLDAPSResult](#schemaenableldapsresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|482|482|NoAvailableCertificateException|[NoAvailableCertificateException](#schemanoavailablecertificateexception)|
|483|483|InvalidLDAPSStatusException|[InvalidLDAPSStatusException](#schemainvalidldapsstatusexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|ClientException|[ClientException](#schemaclientexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableRadius

<a id="opIdEnableRadius"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.EnableRadius' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.EnableRadius' \
  -d '{
    "DirectoryId": {},
    "RadiusSettings": {
      "RadiusServers": {},
      "RadiusPort": {},
      "RadiusTimeout": {},
      "RadiusRetries": {},
      "SharedSecret": {},
      "AuthenticationProtocol": {},
      "DisplayLabel": {},
      "UseSameUsername": {}
    }
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.EnableRadius`

Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "RadiusSettings": {
    "RadiusServers": {},
    "RadiusPort": {},
    "RadiusTimeout": {},
    "RadiusRetries": {},
    "SharedSecret": {},
    "AuthenticationProtocol": {},
    "DisplayLabel": {},
    "UseSameUsername": {}
  }
}
```

<h3 id="enableradius-parameters">Parameters</h3>

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
|body|body|[EnableRadiusRequest](#schemaenableradiusrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RadiusSettings|body|object|true|none|
|» » RadiusServers|body|object|false|none|
|» » RadiusPort|body|object|false|none|
|» » RadiusTimeout|body|object|false|none|
|» » RadiusRetries|body|object|false|none|
|» » SharedSecret|body|object|false|none|
|» » AuthenticationProtocol|body|object|false|none|
|» » DisplayLabel|body|object|false|none|
|» » UseSameUsername|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.EnableRadius|

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

<h3 id="enableradius-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableRadiusResult](#schemaenableradiusresult)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|482|482|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableSso

<a id="opIdEnableSso"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.EnableSso' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.EnableSso' \
  -d '{
    "DirectoryId": {},
    "UserName": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.EnableSso`

Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.

> Body parameter

```json
{
  "DirectoryId": {},
  "UserName": {},
  "Password": {}
}
```

<h3 id="enablesso-parameters">Parameters</h3>

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
|body|body|[EnableSsoRequest](#schemaenablessorequest)|true|none|
|» DirectoryId|body|object|true|none|
|» UserName|body|object|false|none|
|» Password|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.EnableSso|

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

<h3 id="enablesso-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableSsoResult](#schemaenablessoresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InsufficientPermissionsException|[InsufficientPermissionsException](#schemainsufficientpermissionsexception)|
|482|482|AuthenticationFailedException|[AuthenticationFailedException](#schemaauthenticationfailedexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDirectoryLimits

<a id="opIdGetDirectoryLimits"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.GetDirectoryLimits' \
  -d '{}'
```

`POST /#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits`

Obtains directory limit information for the current Region.

> Body parameter

```json
{}
```

<h3 id="getdirectorylimits-parameters">Parameters</h3>

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
|body|body|[GetDirectoryLimitsRequest](#schemagetdirectorylimitsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.GetDirectoryLimits|

> Example responses

> 200 Response

```json
{
  "DirectoryLimits": {
    "CloudOnlyDirectoriesLimit": {},
    "CloudOnlyDirectoriesCurrentCount": {},
    "CloudOnlyDirectoriesLimitReached": {},
    "CloudOnlyMicrosoftADLimit": {},
    "CloudOnlyMicrosoftADCurrentCount": {},
    "CloudOnlyMicrosoftADLimitReached": {},
    "ConnectedDirectoriesLimit": {},
    "ConnectedDirectoriesCurrentCount": {},
    "ConnectedDirectoriesLimitReached": {}
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

<h3 id="getdirectorylimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDirectoryLimitsResult](#schemagetdirectorylimitsresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSnapshotLimits

<a id="opIdGetSnapshotLimits"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.GetSnapshotLimits' \
  -d '{
    "DirectoryId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits`

Obtains the manual snapshot limits for a directory.

> Body parameter

```json
{
  "DirectoryId": {}
}
```

<h3 id="getsnapshotlimits-parameters">Parameters</h3>

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
|body|body|[GetSnapshotLimitsRequest](#schemagetsnapshotlimitsrequest)|true|none|
|» DirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.GetSnapshotLimits|

> Example responses

> 200 Response

```json
{
  "SnapshotLimits": {
    "ManualSnapshotsLimit": {},
    "ManualSnapshotsCurrentCount": {},
    "ManualSnapshotsLimitReached": {}
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

<h3 id="getsnapshotlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSnapshotLimitsResult](#schemagetsnapshotlimitsresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCertificates

<a id="opIdListCertificates"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ListCertificates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ListCertificates' \
  -d '{
    "DirectoryId": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ListCertificates`

For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.

> Body parameter

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listcertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
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
|» DirectoryId|body|object|true|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ListCertificates|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "CertificatesInfo": {}
}
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

<h3 id="listcertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCertificatesResult](#schemalistcertificatesresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIpRoutes

<a id="opIdListIpRoutes"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ListIpRoutes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ListIpRoutes' \
  -d '{
    "DirectoryId": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ListIpRoutes`

Lists the address blocks that you have added to a directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listiproutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListIpRoutesRequest](#schemalistiproutesrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ListIpRoutes|

> Example responses

> 200 Response

```json
{
  "IpRoutesInfo": {},
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

<h3 id="listiproutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIpRoutesResult](#schemalistiproutesresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLogSubscriptions

<a id="opIdListLogSubscriptions"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ListLogSubscriptions' \
  -d '{
    "DirectoryId": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions`

Lists the active log subscriptions for the Amazon Web Services account.

> Body parameter

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listlogsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListLogSubscriptionsRequest](#schemalistlogsubscriptionsrequest)|true|none|
|» DirectoryId|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ListLogSubscriptions|

> Example responses

> 200 Response

```json
{
  "LogSubscriptions": {},
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

<h3 id="listlogsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLogSubscriptionsResult](#schemalistlogsubscriptionsresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSchemaExtensions

<a id="opIdListSchemaExtensions"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ListSchemaExtensions' \
  -d '{
    "DirectoryId": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions`

Lists all schema extensions applied to a Microsoft AD Directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listschemaextensions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSchemaExtensionsRequest](#schemalistschemaextensionsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ListSchemaExtensions|

> Example responses

> 200 Response

```json
{
  "SchemaExtensionsInfo": {},
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

<h3 id="listschemaextensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSchemaExtensionsResult](#schemalistschemaextensionsresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ListTagsForResource' \
  -d '{
    "ResourceId": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ListTagsForResource`

Lists all tags on a directory.

> Body parameter

```json
{
  "ResourceId": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
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
|» ResourceId|body|object|true|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ListTagsForResource|

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

> 484 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterCertificate

<a id="opIdRegisterCertificate"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.RegisterCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.RegisterCertificate' \
  -d '{
    "DirectoryId": {},
    "CertificateData": {},
    "Type": {},
    "ClientCertAuthSettings": {
      "OCSPUrl": {}
    }
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.RegisterCertificate`

Registers a certificate for a secure LDAP or client certificate authentication.

> Body parameter

```json
{
  "DirectoryId": {},
  "CertificateData": {},
  "Type": {},
  "ClientCertAuthSettings": {
    "OCSPUrl": {}
  }
}
```

<h3 id="registercertificate-parameters">Parameters</h3>

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
|body|body|[RegisterCertificateRequest](#schemaregistercertificaterequest)|true|none|
|» DirectoryId|body|object|true|none|
|» CertificateData|body|object|true|none|
|» Type|body|object|false|none|
|» ClientCertAuthSettings|body|object|false|none|
|» » OCSPUrl|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.RegisterCertificate|

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

<h3 id="registercertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterCertificateResult](#schemaregistercertificateresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|482|482|InvalidCertificateException|[InvalidCertificateException](#schemainvalidcertificateexception)|
|483|483|CertificateLimitExceededException|[CertificateLimitExceededException](#schemacertificatelimitexceededexception)|
|484|484|CertificateAlreadyExistsException|[CertificateAlreadyExistsException](#schemacertificatealreadyexistsexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|487|487|ClientException|[ClientException](#schemaclientexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterEventTopic

<a id="opIdRegisterEventTopic"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.RegisterEventTopic' \
  -d '{
    "DirectoryId": {},
    "TopicName": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic`

Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.

> Body parameter

```json
{
  "DirectoryId": {},
  "TopicName": {}
}
```

<h3 id="registereventtopic-parameters">Parameters</h3>

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
|body|body|[RegisterEventTopicRequest](#schemaregistereventtopicrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» TopicName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.RegisterEventTopic|

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

<h3 id="registereventtopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterEventTopicResult](#schemaregistereventtopicresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectSharedDirectory

<a id="opIdRejectSharedDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.RejectSharedDirectory' \
  -d '{
    "SharedDirectoryId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory`

Rejects a directory sharing request that was sent from the directory owner account.

> Body parameter

```json
{
  "SharedDirectoryId": {}
}
```

<h3 id="rejectshareddirectory-parameters">Parameters</h3>

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
|body|body|[RejectSharedDirectoryRequest](#schemarejectshareddirectoryrequest)|true|none|
|» SharedDirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.RejectSharedDirectory|

> Example responses

> 200 Response

```json
{
  "SharedDirectoryId": {}
}
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

<h3 id="rejectshareddirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectSharedDirectoryResult](#schemarejectshareddirectoryresult)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|DirectoryAlreadySharedException|[DirectoryAlreadySharedException](#schemadirectoryalreadysharedexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveIpRoutes

<a id="opIdRemoveIpRoutes"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.RemoveIpRoutes' \
  -d '{
    "DirectoryId": {},
    "CidrIps": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes`

Removes IP address blocks from a directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "CidrIps": {}
}
```

<h3 id="removeiproutes-parameters">Parameters</h3>

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
|body|body|[RemoveIpRoutesRequest](#schemaremoveiproutesrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» CidrIps|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.RemoveIpRoutes|

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

<h3 id="removeiproutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveIpRoutesResult](#schemaremoveiproutesresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveRegion

<a id="opIdRemoveRegion"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.RemoveRegion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.RemoveRegion' \
  -d '{
    "DirectoryId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.RemoveRegion`

Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.

> Body parameter

```json
{
  "DirectoryId": {}
}
```

<h3 id="removeregion-parameters">Parameters</h3>

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
|body|body|[RemoveRegionRequest](#schemaremoveregionrequest)|true|none|
|» DirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.RemoveRegion|

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

<h3 id="removeregion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveRegionResult](#schemaremoveregionresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromResource

<a id="opIdRemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.RemoveTagsFromResource' \
  -d '{
    "ResourceId": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource`

Removes tags from a directory.

> Body parameter

```json
{
  "ResourceId": {},
  "TagKeys": {}
}
```

<h3 id="removetagsfromresource-parameters">Parameters</h3>

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
|body|body|[RemoveTagsFromResourceRequest](#schemaremovetagsfromresourcerequest)|true|none|
|» ResourceId|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.RemoveTagsFromResource|

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

<h3 id="removetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsFromResourceResult](#schemaremovetagsfromresourceresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetUserPassword

<a id="opIdResetUserPassword"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ResetUserPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ResetUserPassword' \
  -d '{
    "DirectoryId": {},
    "UserName": {},
    "NewPassword": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ResetUserPassword`

<p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>

> Body parameter

```json
{
  "DirectoryId": {},
  "UserName": {},
  "NewPassword": {}
}
```

<h3 id="resetuserpassword-parameters">Parameters</h3>

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
|body|body|[ResetUserPasswordRequest](#schemaresetuserpasswordrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» UserName|body|object|true|none|
|» NewPassword|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ResetUserPassword|

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

<h3 id="resetuserpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetUserPasswordResult](#schemaresetuserpasswordresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|UserDoesNotExistException|[UserDoesNotExistException](#schemauserdoesnotexistexception)|
|482|482|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|485|485|ClientException|[ClientException](#schemaclientexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreFromSnapshot

<a id="opIdRestoreFromSnapshot"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.RestoreFromSnapshot' \
  -d '{
    "SnapshotId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot`

<p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>

> Body parameter

```json
{
  "SnapshotId": {}
}
```

<h3 id="restorefromsnapshot-parameters">Parameters</h3>

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
|body|body|[RestoreFromSnapshotRequest](#schemarestorefromsnapshotrequest)|true|none|
|» SnapshotId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.RestoreFromSnapshot|

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

<h3 id="restorefromsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreFromSnapshotResult](#schemarestorefromsnapshotresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ShareDirectory

<a id="opIdShareDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.ShareDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.ShareDirectory' \
  -d '{
    "DirectoryId": {},
    "ShareNotes": {},
    "ShareTarget": {
      "Id": {},
      "Type": {}
    },
    "ShareMethod": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.ShareDirectory`

<p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>

> Body parameter

```json
{
  "DirectoryId": {},
  "ShareNotes": {},
  "ShareTarget": {
    "Id": {},
    "Type": {}
  },
  "ShareMethod": {}
}
```

<h3 id="sharedirectory-parameters">Parameters</h3>

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
|body|body|[ShareDirectoryRequest](#schemasharedirectoryrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» ShareNotes|body|object|false|none|
|» ShareTarget|body|object|true|none|
|» » Id|body|object|true|none|
|» » Type|body|object|true|none|
|» ShareMethod|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.ShareDirectory|

> Example responses

> 200 Response

```json
{
  "SharedDirectoryId": {}
}
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

<h3 id="sharedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ShareDirectoryResult](#schemasharedirectoryresult)|
|480|480|DirectoryAlreadySharedException|[DirectoryAlreadySharedException](#schemadirectoryalreadysharedexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ShareLimitExceededException|[ShareLimitExceededException](#schemasharelimitexceededexception)|
|486|486|OrganizationsException|[OrganizationsException](#schemaorganizationsexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|488|488|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|489|489|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSchemaExtension

<a id="opIdStartSchemaExtension"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.StartSchemaExtension' \
  -d '{
    "DirectoryId": {},
    "CreateSnapshotBeforeSchemaExtension": {},
    "LdifContent": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension`

Applies a schema extension to a Microsoft AD directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "CreateSnapshotBeforeSchemaExtension": {},
  "LdifContent": {},
  "Description": {}
}
```

<h3 id="startschemaextension-parameters">Parameters</h3>

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
|body|body|[StartSchemaExtensionRequest](#schemastartschemaextensionrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» CreateSnapshotBeforeSchemaExtension|body|object|true|none|
|» LdifContent|body|object|true|none|
|» Description|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.StartSchemaExtension|

> Example responses

> 200 Response

```json
{
  "SchemaExtensionId": {}
}
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

<h3 id="startschemaextension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSchemaExtensionResult](#schemastartschemaextensionresult)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|SnapshotLimitExceededException|[SnapshotLimitExceededException](#schemasnapshotlimitexceededexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnshareDirectory

<a id="opIdUnshareDirectory"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.UnshareDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.UnshareDirectory' \
  -d '{
    "DirectoryId": {},
    "UnshareTarget": {
      "Id": {},
      "Type": {}
    }
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.UnshareDirectory`

Stops the directory sharing between the directory owner and consumer accounts. 

> Body parameter

```json
{
  "DirectoryId": {},
  "UnshareTarget": {
    "Id": {},
    "Type": {}
  }
}
```

<h3 id="unsharedirectory-parameters">Parameters</h3>

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
|body|body|[UnshareDirectoryRequest](#schemaunsharedirectoryrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» UnshareTarget|body|object|true|none|
|» » Id|body|object|true|none|
|» » Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.UnshareDirectory|

> Example responses

> 200 Response

```json
{
  "SharedDirectoryId": {}
}
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

<h3 id="unsharedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnshareDirectoryResult](#schemaunsharedirectoryresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|
|482|482|DirectoryNotSharedException|[DirectoryNotSharedException](#schemadirectorynotsharedexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConditionalForwarder

<a id="opIdUpdateConditionalForwarder"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.UpdateConditionalForwarder' \
  -d '{
    "DirectoryId": {},
    "RemoteDomainName": {},
    "DnsIpAddrs": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder`

Updates a conditional forwarder that has been set up for your Amazon Web Services directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {},
  "DnsIpAddrs": {}
}
```

<h3 id="updateconditionalforwarder-parameters">Parameters</h3>

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
|body|body|[UpdateConditionalForwarderRequest](#schemaupdateconditionalforwarderrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RemoteDomainName|body|object|true|none|
|» DnsIpAddrs|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.UpdateConditionalForwarder|

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

<h3 id="updateconditionalforwarder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConditionalForwarderResult](#schemaupdateconditionalforwarderresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDirectorySetup

<a id="opIdUpdateDirectorySetup"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.UpdateDirectorySetup' \
  -d '{
    "DirectoryId": {},
    "UpdateType": {},
    "OSUpdateSettings": {
      "OSVersion": {}
    },
    "CreateSnapshotBeforeUpdate": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup`

 Updates the directory for a particular update type. 

> Body parameter

```json
{
  "DirectoryId": {},
  "UpdateType": {},
  "OSUpdateSettings": {
    "OSVersion": {}
  },
  "CreateSnapshotBeforeUpdate": {}
}
```

<h3 id="updatedirectorysetup-parameters">Parameters</h3>

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
|body|body|[UpdateDirectorySetupRequest](#schemaupdatedirectorysetuprequest)|true|none|
|» DirectoryId|body|object|true|none|
|» UpdateType|body|object|true|none|
|» OSUpdateSettings|body|object|false|none|
|» » OSVersion|body|object|false|none|
|» CreateSnapshotBeforeUpdate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.UpdateDirectorySetup|

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

> 488 Response

```json
null
```

<h3 id="updatedirectorysetup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDirectorySetupResult](#schemaupdatedirectorysetupresult)|
|480|480|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|481|481|DirectoryInDesiredStateException|[DirectoryInDesiredStateException](#schemadirectoryindesiredstateexception)|
|482|482|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|483|483|SnapshotLimitExceededException|[SnapshotLimitExceededException](#schemasnapshotlimitexceededexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ClientException|[ClientException](#schemaclientexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNumberOfDomainControllers

<a id="opIdUpdateNumberOfDomainControllers"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.UpdateNumberOfDomainControllers' \
  -d '{
    "DirectoryId": {},
    "DesiredNumber": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers`

Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.

> Body parameter

```json
{
  "DirectoryId": {},
  "DesiredNumber": {}
}
```

<h3 id="updatenumberofdomaincontrollers-parameters">Parameters</h3>

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
|body|body|[UpdateNumberOfDomainControllersRequest](#schemaupdatenumberofdomaincontrollersrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» DesiredNumber|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.UpdateNumberOfDomainControllers|

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

<h3 id="updatenumberofdomaincontrollers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNumberOfDomainControllersResult](#schemaupdatenumberofdomaincontrollersresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|DomainControllerLimitExceededException|[DomainControllerLimitExceededException](#schemadomaincontrollerlimitexceededexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|ClientException|[ClientException](#schemaclientexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRadius

<a id="opIdUpdateRadius"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.UpdateRadius' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.UpdateRadius' \
  -d '{
    "DirectoryId": {},
    "RadiusSettings": {
      "RadiusServers": {},
      "RadiusPort": {},
      "RadiusTimeout": {},
      "RadiusRetries": {},
      "SharedSecret": {},
      "AuthenticationProtocol": {},
      "DisplayLabel": {},
      "UseSameUsername": {}
    }
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.UpdateRadius`

Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "RadiusSettings": {
    "RadiusServers": {},
    "RadiusPort": {},
    "RadiusTimeout": {},
    "RadiusRetries": {},
    "SharedSecret": {},
    "AuthenticationProtocol": {},
    "DisplayLabel": {},
    "UseSameUsername": {}
  }
}
```

<h3 id="updateradius-parameters">Parameters</h3>

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
|body|body|[UpdateRadiusRequest](#schemaupdateradiusrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» RadiusSettings|body|object|true|none|
|» » RadiusServers|body|object|false|none|
|» » RadiusPort|body|object|false|none|
|» » RadiusTimeout|body|object|false|none|
|» » RadiusRetries|body|object|false|none|
|» » SharedSecret|body|object|false|none|
|» » AuthenticationProtocol|body|object|false|none|
|» » DisplayLabel|body|object|false|none|
|» » UseSameUsername|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.UpdateRadius|

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

<h3 id="updateradius-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRadiusResult](#schemaupdateradiusresult)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSettings

<a id="opIdUpdateSettings"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.UpdateSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.UpdateSettings' \
  -d '{
    "DirectoryId": {},
    "Settings": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.UpdateSettings`

Updates the configurable settings for the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "Settings": {}
}
```

<h3 id="updatesettings-parameters">Parameters</h3>

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
|body|body|[UpdateSettingsRequest](#schemaupdatesettingsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» Settings|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.UpdateSettings|

> Example responses

> 200 Response

```json
{
  "DirectoryId": {}
}
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

<h3 id="updatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSettingsResult](#schemaupdatesettingsresult)|
|480|480|DirectoryDoesNotExistException|[DirectoryDoesNotExistException](#schemadirectorydoesnotexistexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|483|483|IncompatibleSettingsException|[IncompatibleSettingsException](#schemaincompatiblesettingsexception)|
|484|484|UnsupportedSettingsException|[UnsupportedSettingsException](#schemaunsupportedsettingsexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|ClientException|[ClientException](#schemaclientexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTrust

<a id="opIdUpdateTrust"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.UpdateTrust' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.UpdateTrust' \
  -d '{
    "TrustId": {},
    "SelectiveAuth": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.UpdateTrust`

Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.

> Body parameter

```json
{
  "TrustId": {},
  "SelectiveAuth": {}
}
```

<h3 id="updatetrust-parameters">Parameters</h3>

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
|body|body|[UpdateTrustRequest](#schemaupdatetrustrequest)|true|none|
|» TrustId|body|object|true|none|
|» SelectiveAuth|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.UpdateTrust|

> Example responses

> 200 Response

```json
{
  "RequestId": "string",
  "TrustId": {}
}
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

<h3 id="updatetrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTrustResult](#schemaupdatetrustresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## VerifyTrust

<a id="opIdVerifyTrust"></a>

> Code samples

```bash
curl 'https://ds.us-east-1.amazonaws.com/#X-Amz-Target=DirectoryService_20150416.VerifyTrust' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DirectoryService_20150416.VerifyTrust' \
  -d '{
    "TrustId": {}
  }'
```

`POST /#X-Amz-Target=DirectoryService_20150416.VerifyTrust`

<p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

> Body parameter

```json
{
  "TrustId": {}
}
```

<h3 id="verifytrust-parameters">Parameters</h3>

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
|body|body|[VerifyTrustRequest](#schemaverifytrustrequest)|true|none|
|» TrustId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DirectoryService_20150416.VerifyTrust|

> Example responses

> 200 Response

```json
{
  "TrustId": {}
}
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

<h3 id="verifytrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyTrustResult](#schemaverifytrustresult)|
|480|480|EntityDoesNotExistException|[EntityDoesNotExistException](#schemaentitydoesnotexistexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptSharedDirectoryResult">AcceptSharedDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemaacceptshareddirectoryresult"></a>
<a id="schema_AcceptSharedDirectoryResult"></a>
<a id="tocSacceptshareddirectoryresult"></a>
<a id="tocsacceptshareddirectoryresult"></a>

```json
{
  "SharedDirectory": {
    "OwnerAccountId": {},
    "OwnerDirectoryId": {},
    "ShareMethod": {},
    "SharedAccountId": {},
    "SharedDirectoryId": {},
    "ShareStatus": {},
    "ShareNotes": {},
    "CreatedDateTime": {},
    "LastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedDirectory|object|false|none|none|

<h2 id="tocS_AcceptSharedDirectoryRequest">AcceptSharedDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptshareddirectoryrequest"></a>
<a id="schema_AcceptSharedDirectoryRequest"></a>
<a id="tocSacceptshareddirectoryrequest"></a>
<a id="tocsacceptshareddirectoryrequest"></a>

```json
{
  "SharedDirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedDirectoryId|object|true|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_EntityDoesNotExistException">EntityDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaentitydoesnotexistexception"></a>
<a id="schema_EntityDoesNotExistException"></a>
<a id="tocSentitydoesnotexistexception"></a>
<a id="tocsentitydoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_DirectoryAlreadySharedException">DirectoryAlreadySharedException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryalreadysharedexception"></a>
<a id="schema_DirectoryAlreadySharedException"></a>
<a id="tocSdirectoryalreadysharedexception"></a>
<a id="tocsdirectoryalreadysharedexception"></a>

```json
null
```

<h2 id="tocS_ClientException">ClientException</h2>
<!-- backwards compatibility -->
<a id="schemaclientexception"></a>
<a id="schema_ClientException"></a>
<a id="tocSclientexception"></a>
<a id="tocsclientexception"></a>

```json
null
```

<h2 id="tocS_ServiceException">ServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexception"></a>
<a id="schema_ServiceException"></a>
<a id="tocSserviceexception"></a>
<a id="tocsserviceexception"></a>

```json
null
```

<h2 id="tocS_AddIpRoutesResult">AddIpRoutesResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddiproutesresult"></a>
<a id="schema_AddIpRoutesResult"></a>
<a id="tocSaddiproutesresult"></a>
<a id="tocsaddiproutesresult"></a>

```json
{}
```

<h2 id="tocS_AddIpRoutesRequest">AddIpRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddiproutesrequest"></a>
<a id="schema_AddIpRoutesRequest"></a>
<a id="tocSaddiproutesrequest"></a>
<a id="tocsaddiproutesrequest"></a>

```json
{
  "DirectoryId": {},
  "IpRoutes": {},
  "UpdateSecurityGroupForDirectoryControllers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|IpRoutes|object|true|none|none|
|UpdateSecurityGroupForDirectoryControllers|object|false|none|none|

<h2 id="tocS_EntityAlreadyExistsException">EntityAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaentityalreadyexistsexception"></a>
<a id="schema_EntityAlreadyExistsException"></a>
<a id="tocSentityalreadyexistsexception"></a>
<a id="tocsentityalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_DirectoryUnavailableException">DirectoryUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryunavailableexception"></a>
<a id="schema_DirectoryUnavailableException"></a>
<a id="tocSdirectoryunavailableexception"></a>
<a id="tocsdirectoryunavailableexception"></a>

```json
null
```

<h2 id="tocS_IpRouteLimitExceededException">IpRouteLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaiproutelimitexceededexception"></a>
<a id="schema_IpRouteLimitExceededException"></a>
<a id="tocSiproutelimitexceededexception"></a>
<a id="tocsiproutelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_AddRegionResult">AddRegionResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddregionresult"></a>
<a id="schema_AddRegionResult"></a>
<a id="tocSaddregionresult"></a>
<a id="tocsaddregionresult"></a>

```json
{}
```

<h2 id="tocS_AddRegionRequest">AddRegionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddregionrequest"></a>
<a id="schema_AddRegionRequest"></a>
<a id="tocSaddregionrequest"></a>
<a id="tocsaddregionrequest"></a>

```json
{
  "DirectoryId": {},
  "RegionName": {},
  "VPCSettings": {
    "VpcId": {},
    "SubnetIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RegionName|object|true|none|none|
|VPCSettings|[DirectoryVpcSettings](#schemadirectoryvpcsettings)|true|none|Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.|

<h2 id="tocS_DirectoryAlreadyInRegionException">DirectoryAlreadyInRegionException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryalreadyinregionexception"></a>
<a id="schema_DirectoryAlreadyInRegionException"></a>
<a id="tocSdirectoryalreadyinregionexception"></a>
<a id="tocsdirectoryalreadyinregionexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

```json
null
```

<h2 id="tocS_DirectoryDoesNotExistException">DirectoryDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemadirectorydoesnotexistexception"></a>
<a id="schema_DirectoryDoesNotExistException"></a>
<a id="tocSdirectorydoesnotexistexception"></a>
<a id="tocsdirectorydoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_RegionLimitExceededException">RegionLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaregionlimitexceededexception"></a>
<a id="schema_RegionLimitExceededException"></a>
<a id="tocSregionlimitexceededexception"></a>
<a id="tocsregionlimitexceededexception"></a>

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

<h2 id="tocS_AddTagsToResourceResult">AddTagsToResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourceresult"></a>
<a id="schema_AddTagsToResourceResult"></a>
<a id="tocSaddtagstoresourceresult"></a>
<a id="tocsaddtagstoresourceresult"></a>

```json
{}
```

<h2 id="tocS_AddTagsToResourceRequest">AddTagsToResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourcerequest"></a>
<a id="schema_AddTagsToResourceRequest"></a>
<a id="tocSaddtagstoresourcerequest"></a>
<a id="tocsaddtagstoresourcerequest"></a>

```json
{
  "ResourceId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TagLimitExceededException">TagLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemataglimitexceededexception"></a>
<a id="schema_TagLimitExceededException"></a>
<a id="tocStaglimitexceededexception"></a>
<a id="tocstaglimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CancelSchemaExtensionResult">CancelSchemaExtensionResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelschemaextensionresult"></a>
<a id="schema_CancelSchemaExtensionResult"></a>
<a id="tocScancelschemaextensionresult"></a>
<a id="tocscancelschemaextensionresult"></a>

```json
{}
```

<h2 id="tocS_CancelSchemaExtensionRequest">CancelSchemaExtensionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelschemaextensionrequest"></a>
<a id="schema_CancelSchemaExtensionRequest"></a>
<a id="tocScancelschemaextensionrequest"></a>
<a id="tocscancelschemaextensionrequest"></a>

```json
{
  "DirectoryId": {},
  "SchemaExtensionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|SchemaExtensionId|object|true|none|none|

<h2 id="tocS_ConnectDirectoryResult">ConnectDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemaconnectdirectoryresult"></a>
<a id="schema_ConnectDirectoryResult"></a>
<a id="tocSconnectdirectoryresult"></a>
<a id="tocsconnectdirectoryresult"></a>

```json
{
  "DirectoryId": {}
}
```

Contains the results of the <a>ConnectDirectory</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|

<h2 id="tocS_ConnectDirectoryRequest">ConnectDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectdirectoryrequest"></a>
<a id="schema_ConnectDirectoryRequest"></a>
<a id="tocSconnectdirectoryrequest"></a>
<a id="tocsconnectdirectoryrequest"></a>

```json
{
  "Name": {},
  "ShortName": {},
  "Password": {},
  "Description": {},
  "Size": {},
  "ConnectSettings": {
    "VpcId": {},
    "SubnetIds": {},
    "CustomerDnsIps": {},
    "CustomerUserName": {}
  },
  "Tags": {}
}
```

Contains the inputs for the <a>ConnectDirectory</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ShortName|object|false|none|none|
|Password|object|true|none|none|
|Description|object|false|none|none|
|Size|object|true|none|none|
|ConnectSettings|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DirectoryLimitExceededException">DirectoryLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadirectorylimitexceededexception"></a>
<a id="schema_DirectoryLimitExceededException"></a>
<a id="tocSdirectorylimitexceededexception"></a>
<a id="tocsdirectorylimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateAliasResult">CreateAliasResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasresult"></a>
<a id="schema_CreateAliasResult"></a>
<a id="tocScreatealiasresult"></a>
<a id="tocscreatealiasresult"></a>

```json
{
  "DirectoryId": {},
  "Alias": {}
}
```

Contains the results of the <a>CreateAlias</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|Alias|object|false|none|none|

<h2 id="tocS_CreateAliasRequest">CreateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasrequest"></a>
<a id="schema_CreateAliasRequest"></a>
<a id="tocScreatealiasrequest"></a>
<a id="tocscreatealiasrequest"></a>

```json
{
  "DirectoryId": {},
  "Alias": {}
}
```

Contains the inputs for the <a>CreateAlias</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Alias|object|true|none|none|

<h2 id="tocS_CreateComputerResult">CreateComputerResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomputerresult"></a>
<a id="schema_CreateComputerResult"></a>
<a id="tocScreatecomputerresult"></a>
<a id="tocscreatecomputerresult"></a>

```json
{
  "Computer": {
    "ComputerId": {},
    "ComputerName": {},
    "ComputerAttributes": {}
  }
}
```

Contains the results for the <a>CreateComputer</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Computer|object|false|none|none|

<h2 id="tocS_CreateComputerRequest">CreateComputerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomputerrequest"></a>
<a id="schema_CreateComputerRequest"></a>
<a id="tocScreatecomputerrequest"></a>
<a id="tocscreatecomputerrequest"></a>

```json
{
  "DirectoryId": {},
  "ComputerName": {},
  "Password": {},
  "OrganizationalUnitDistinguishedName": {},
  "ComputerAttributes": {}
}
```

Contains the inputs for the <a>CreateComputer</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|ComputerName|object|true|none|none|
|Password|object|true|none|none|
|OrganizationalUnitDistinguishedName|object|false|none|none|
|ComputerAttributes|object|false|none|none|

<h2 id="tocS_AuthenticationFailedException">AuthenticationFailedException</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationfailedexception"></a>
<a id="schema_AuthenticationFailedException"></a>
<a id="tocSauthenticationfailedexception"></a>
<a id="tocsauthenticationfailedexception"></a>

```json
null
```

<h2 id="tocS_CreateConditionalForwarderResult">CreateConditionalForwarderResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateconditionalforwarderresult"></a>
<a id="schema_CreateConditionalForwarderResult"></a>
<a id="tocScreateconditionalforwarderresult"></a>
<a id="tocscreateconditionalforwarderresult"></a>

```json
{}
```

The result of a CreateConditinalForwarder request.

<h2 id="tocS_CreateConditionalForwarderRequest">CreateConditionalForwarderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconditionalforwarderrequest"></a>
<a id="schema_CreateConditionalForwarderRequest"></a>
<a id="tocScreateconditionalforwarderrequest"></a>
<a id="tocscreateconditionalforwarderrequest"></a>

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {},
  "DnsIpAddrs": {}
}
```

Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RemoteDomainName|object|true|none|none|
|DnsIpAddrs|object|true|none|none|

<h2 id="tocS_CreateDirectoryResult">CreateDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectoryresult"></a>
<a id="schema_CreateDirectoryResult"></a>
<a id="tocScreatedirectoryresult"></a>
<a id="tocscreatedirectoryresult"></a>

```json
{
  "DirectoryId": {}
}
```

Contains the results of the <a>CreateDirectory</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|

<h2 id="tocS_CreateDirectoryRequest">CreateDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectoryrequest"></a>
<a id="schema_CreateDirectoryRequest"></a>
<a id="tocScreatedirectoryrequest"></a>
<a id="tocscreatedirectoryrequest"></a>

```json
{
  "Name": {},
  "ShortName": {},
  "Password": {},
  "Description": {},
  "Size": {},
  "VpcSettings": {
    "VpcId": {},
    "SubnetIds": {}
  },
  "Tags": {}
}
```

Contains the inputs for the <a>CreateDirectory</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ShortName|object|false|none|none|
|Password|object|true|none|none|
|Description|object|false|none|none|
|Size|object|true|none|none|
|VpcSettings|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLogSubscriptionResult">CreateLogSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatelogsubscriptionresult"></a>
<a id="schema_CreateLogSubscriptionResult"></a>
<a id="tocScreatelogsubscriptionresult"></a>
<a id="tocscreatelogsubscriptionresult"></a>

```json
{}
```

<h2 id="tocS_CreateLogSubscriptionRequest">CreateLogSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelogsubscriptionrequest"></a>
<a id="schema_CreateLogSubscriptionRequest"></a>
<a id="tocScreatelogsubscriptionrequest"></a>
<a id="tocscreatelogsubscriptionrequest"></a>

```json
{
  "DirectoryId": {},
  "LogGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|LogGroupName|object|true|none|none|

<h2 id="tocS_InsufficientPermissionsException">InsufficientPermissionsException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientpermissionsexception"></a>
<a id="schema_InsufficientPermissionsException"></a>
<a id="tocSinsufficientpermissionsexception"></a>
<a id="tocsinsufficientpermissionsexception"></a>

```json
null
```

<h2 id="tocS_CreateMicrosoftADResult">CreateMicrosoftADResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatemicrosoftadresult"></a>
<a id="schema_CreateMicrosoftADResult"></a>
<a id="tocScreatemicrosoftadresult"></a>
<a id="tocscreatemicrosoftadresult"></a>

```json
{
  "DirectoryId": {}
}
```

Result of a CreateMicrosoftAD request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|

<h2 id="tocS_CreateMicrosoftADRequest">CreateMicrosoftADRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemicrosoftadrequest"></a>
<a id="schema_CreateMicrosoftADRequest"></a>
<a id="tocScreatemicrosoftadrequest"></a>
<a id="tocscreatemicrosoftadrequest"></a>

```json
{
  "Name": {},
  "ShortName": {},
  "Password": {},
  "Description": {},
  "VpcSettings": {
    "VpcId": {},
    "SubnetIds": {}
  },
  "Edition": {},
  "Tags": {}
}
```

Creates an Managed Microsoft AD directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ShortName|object|false|none|none|
|Password|object|true|none|none|
|Description|object|false|none|none|
|VpcSettings|object|true|none|none|
|Edition|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateSnapshotResult">CreateSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotresult"></a>
<a id="schema_CreateSnapshotResult"></a>
<a id="tocScreatesnapshotresult"></a>
<a id="tocscreatesnapshotresult"></a>

```json
{
  "SnapshotId": {}
}
```

Contains the results of the <a>CreateSnapshot</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|false|none|none|

<h2 id="tocS_CreateSnapshotRequest">CreateSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotrequest"></a>
<a id="schema_CreateSnapshotRequest"></a>
<a id="tocScreatesnapshotrequest"></a>
<a id="tocscreatesnapshotrequest"></a>

```json
{
  "DirectoryId": {},
  "Name": {}
}
```

Contains the inputs for the <a>CreateSnapshot</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Name|object|false|none|none|

<h2 id="tocS_SnapshotLimitExceededException">SnapshotLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotlimitexceededexception"></a>
<a id="schema_SnapshotLimitExceededException"></a>
<a id="tocSsnapshotlimitexceededexception"></a>
<a id="tocssnapshotlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateTrustResult">CreateTrustResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrustresult"></a>
<a id="schema_CreateTrustResult"></a>
<a id="tocScreatetrustresult"></a>
<a id="tocscreatetrustresult"></a>

```json
{
  "TrustId": {}
}
```

The result of a CreateTrust request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrustId|object|false|none|none|

<h2 id="tocS_CreateTrustRequest">CreateTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrustrequest"></a>
<a id="schema_CreateTrustRequest"></a>
<a id="tocScreatetrustrequest"></a>
<a id="tocscreatetrustrequest"></a>

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {},
  "TrustPassword": {},
  "TrustDirection": {},
  "TrustType": {},
  "ConditionalForwarderIpAddrs": {},
  "SelectiveAuth": {}
}
```

<p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RemoteDomainName|object|true|none|none|
|TrustPassword|object|true|none|none|
|TrustDirection|object|true|none|none|
|TrustType|object|false|none|none|
|ConditionalForwarderIpAddrs|object|false|none|none|
|SelectiveAuth|object|false|none|none|

<h2 id="tocS_DeleteConditionalForwarderResult">DeleteConditionalForwarderResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconditionalforwarderresult"></a>
<a id="schema_DeleteConditionalForwarderResult"></a>
<a id="tocSdeleteconditionalforwarderresult"></a>
<a id="tocsdeleteconditionalforwarderresult"></a>

```json
{}
```

The result of a DeleteConditionalForwarder request.

<h2 id="tocS_DeleteConditionalForwarderRequest">DeleteConditionalForwarderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconditionalforwarderrequest"></a>
<a id="schema_DeleteConditionalForwarderRequest"></a>
<a id="tocSdeleteconditionalforwarderrequest"></a>
<a id="tocsdeleteconditionalforwarderrequest"></a>

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {}
}
```

Deletes a conditional forwarder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RemoteDomainName|object|true|none|none|

<h2 id="tocS_DeleteDirectoryResult">DeleteDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectoryresult"></a>
<a id="schema_DeleteDirectoryResult"></a>
<a id="tocSdeletedirectoryresult"></a>
<a id="tocsdeletedirectoryresult"></a>

```json
{
  "DirectoryId": {}
}
```

Contains the results of the <a>DeleteDirectory</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|

<h2 id="tocS_DeleteDirectoryRequest">DeleteDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectoryrequest"></a>
<a id="schema_DeleteDirectoryRequest"></a>
<a id="tocSdeletedirectoryrequest"></a>
<a id="tocsdeletedirectoryrequest"></a>

```json
{
  "DirectoryId": {}
}
```

Contains the inputs for the <a>DeleteDirectory</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|

<h2 id="tocS_DeleteLogSubscriptionResult">DeleteLogSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletelogsubscriptionresult"></a>
<a id="schema_DeleteLogSubscriptionResult"></a>
<a id="tocSdeletelogsubscriptionresult"></a>
<a id="tocsdeletelogsubscriptionresult"></a>

```json
{}
```

<h2 id="tocS_DeleteLogSubscriptionRequest">DeleteLogSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelogsubscriptionrequest"></a>
<a id="schema_DeleteLogSubscriptionRequest"></a>
<a id="tocSdeletelogsubscriptionrequest"></a>
<a id="tocsdeletelogsubscriptionrequest"></a>

```json
{
  "DirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|

<h2 id="tocS_DeleteSnapshotResult">DeleteSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotresult"></a>
<a id="schema_DeleteSnapshotResult"></a>
<a id="tocSdeletesnapshotresult"></a>
<a id="tocsdeletesnapshotresult"></a>

```json
{
  "SnapshotId": {}
}
```

Contains the results of the <a>DeleteSnapshot</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|false|none|none|

<h2 id="tocS_DeleteSnapshotRequest">DeleteSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotrequest"></a>
<a id="schema_DeleteSnapshotRequest"></a>
<a id="tocSdeletesnapshotrequest"></a>
<a id="tocsdeletesnapshotrequest"></a>

```json
{
  "SnapshotId": {}
}
```

Contains the inputs for the <a>DeleteSnapshot</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|true|none|none|

<h2 id="tocS_DeleteTrustResult">DeleteTrustResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrustresult"></a>
<a id="schema_DeleteTrustResult"></a>
<a id="tocSdeletetrustresult"></a>
<a id="tocsdeletetrustresult"></a>

```json
{
  "TrustId": {}
}
```

The result of a DeleteTrust request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrustId|object|false|none|none|

<h2 id="tocS_DeleteTrustRequest">DeleteTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrustrequest"></a>
<a id="schema_DeleteTrustRequest"></a>
<a id="tocSdeletetrustrequest"></a>
<a id="tocsdeletetrustrequest"></a>

```json
{
  "TrustId": {},
  "DeleteAssociatedConditionalForwarder": {}
}
```

Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrustId|object|true|none|none|
|DeleteAssociatedConditionalForwarder|object|false|none|none|

<h2 id="tocS_DeregisterCertificateResult">DeregisterCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemaderegistercertificateresult"></a>
<a id="schema_DeregisterCertificateResult"></a>
<a id="tocSderegistercertificateresult"></a>
<a id="tocsderegistercertificateresult"></a>

```json
{}
```

<h2 id="tocS_DeregisterCertificateRequest">DeregisterCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistercertificaterequest"></a>
<a id="schema_DeregisterCertificateRequest"></a>
<a id="tocSderegistercertificaterequest"></a>
<a id="tocsderegistercertificaterequest"></a>

```json
{
  "DirectoryId": {},
  "CertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|CertificateId|object|true|none|none|

<h2 id="tocS_CertificateDoesNotExistException">CertificateDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemacertificatedoesnotexistexception"></a>
<a id="schema_CertificateDoesNotExistException"></a>
<a id="tocScertificatedoesnotexistexception"></a>
<a id="tocscertificatedoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_CertificateInUseException">CertificateInUseException</h2>
<!-- backwards compatibility -->
<a id="schemacertificateinuseexception"></a>
<a id="schema_CertificateInUseException"></a>
<a id="tocScertificateinuseexception"></a>
<a id="tocscertificateinuseexception"></a>

```json
null
```

<h2 id="tocS_DeregisterEventTopicResult">DeregisterEventTopicResult</h2>
<!-- backwards compatibility -->
<a id="schemaderegistereventtopicresult"></a>
<a id="schema_DeregisterEventTopicResult"></a>
<a id="tocSderegistereventtopicresult"></a>
<a id="tocsderegistereventtopicresult"></a>

```json
{}
```

The result of a DeregisterEventTopic request.

<h2 id="tocS_DeregisterEventTopicRequest">DeregisterEventTopicRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistereventtopicrequest"></a>
<a id="schema_DeregisterEventTopicRequest"></a>
<a id="tocSderegistereventtopicrequest"></a>
<a id="tocsderegistereventtopicrequest"></a>

```json
{
  "DirectoryId": {},
  "TopicName": {}
}
```

Removes the specified directory as a publisher to the specified Amazon SNS topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|TopicName|object|true|none|none|

<h2 id="tocS_DescribeCertificateResult">DescribeCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificateresult"></a>
<a id="schema_DescribeCertificateResult"></a>
<a id="tocSdescribecertificateresult"></a>
<a id="tocsdescribecertificateresult"></a>

```json
{
  "Certificate": {
    "CertificateId": {},
    "State": {},
    "StateReason": {},
    "CommonName": {},
    "RegisteredDateTime": {},
    "ExpiryDateTime": {},
    "Type": {},
    "ClientCertAuthSettings": {
      "OCSPUrl": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|

<h2 id="tocS_DescribeCertificateRequest">DescribeCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificaterequest"></a>
<a id="schema_DescribeCertificateRequest"></a>
<a id="tocSdescribecertificaterequest"></a>
<a id="tocsdescribecertificaterequest"></a>

```json
{
  "DirectoryId": {},
  "CertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|CertificateId|object|true|none|none|

<h2 id="tocS_DescribeClientAuthenticationSettingsResult">DescribeClientAuthenticationSettingsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclientauthenticationsettingsresult"></a>
<a id="schema_DescribeClientAuthenticationSettingsResult"></a>
<a id="tocSdescribeclientauthenticationsettingsresult"></a>
<a id="tocsdescribeclientauthenticationsettingsresult"></a>

```json
{
  "ClientAuthenticationSettingsInfo": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientAuthenticationSettingsInfo|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeClientAuthenticationSettingsRequest">DescribeClientAuthenticationSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclientauthenticationsettingsrequest"></a>
<a id="schema_DescribeClientAuthenticationSettingsRequest"></a>
<a id="tocSdescribeclientauthenticationsettingsrequest"></a>
<a id="tocsdescribeclientauthenticationsettingsrequest"></a>

```json
{
  "DirectoryId": {},
  "Type": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Type|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeConditionalForwardersResult">DescribeConditionalForwardersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconditionalforwardersresult"></a>
<a id="schema_DescribeConditionalForwardersResult"></a>
<a id="tocSdescribeconditionalforwardersresult"></a>
<a id="tocsdescribeconditionalforwardersresult"></a>

```json
{
  "ConditionalForwarders": {}
}
```

The result of a DescribeConditionalForwarder request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConditionalForwarders|object|false|none|none|

<h2 id="tocS_DescribeConditionalForwardersRequest">DescribeConditionalForwardersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconditionalforwardersrequest"></a>
<a id="schema_DescribeConditionalForwardersRequest"></a>
<a id="tocSdescribeconditionalforwardersrequest"></a>
<a id="tocsdescribeconditionalforwardersrequest"></a>

```json
{
  "DirectoryId": {},
  "RemoteDomainNames": {}
}
```

Describes a conditional forwarder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RemoteDomainNames|object|false|none|none|

<h2 id="tocS_DescribeDirectoriesResult">DescribeDirectoriesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectoriesresult"></a>
<a id="schema_DescribeDirectoriesResult"></a>
<a id="tocSdescribedirectoriesresult"></a>
<a id="tocsdescribedirectoriesresult"></a>

```json
{
  "DirectoryDescriptions": {},
  "NextToken": {}
}
```

Contains the results of the <a>DescribeDirectories</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryDescriptions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectoriesRequest">DescribeDirectoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectoriesrequest"></a>
<a id="schema_DescribeDirectoriesRequest"></a>
<a id="tocSdescribedirectoriesrequest"></a>
<a id="tocsdescribedirectoriesrequest"></a>

```json
{
  "DirectoryIds": {},
  "NextToken": {},
  "Limit": {}
}
```

Contains the inputs for the <a>DescribeDirectories</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryIds|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeDomainControllersResult">DescribeDomainControllersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomaincontrollersresult"></a>
<a id="schema_DescribeDomainControllersResult"></a>
<a id="tocSdescribedomaincontrollersresult"></a>
<a id="tocsdescribedomaincontrollersresult"></a>

```json
{
  "DomainControllers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainControllers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDomainControllersRequest">DescribeDomainControllersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomaincontrollersrequest"></a>
<a id="schema_DescribeDomainControllersRequest"></a>
<a id="tocSdescribedomaincontrollersrequest"></a>
<a id="tocsdescribedomaincontrollersrequest"></a>

```json
{
  "DirectoryId": {},
  "DomainControllerIds": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|DomainControllerIds|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeEventTopicsResult">DescribeEventTopicsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventtopicsresult"></a>
<a id="schema_DescribeEventTopicsResult"></a>
<a id="tocSdescribeeventtopicsresult"></a>
<a id="tocsdescribeeventtopicsresult"></a>

```json
{
  "EventTopics": {}
}
```

The result of a DescribeEventTopic request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventTopics|object|false|none|none|

<h2 id="tocS_DescribeEventTopicsRequest">DescribeEventTopicsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventtopicsrequest"></a>
<a id="schema_DescribeEventTopicsRequest"></a>
<a id="tocSdescribeeventtopicsrequest"></a>
<a id="tocsdescribeeventtopicsrequest"></a>

```json
{
  "DirectoryId": {},
  "TopicNames": {}
}
```

Describes event topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|TopicNames|object|false|none|none|

<h2 id="tocS_DescribeLDAPSSettingsResult">DescribeLDAPSSettingsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeldapssettingsresult"></a>
<a id="schema_DescribeLDAPSSettingsResult"></a>
<a id="tocSdescribeldapssettingsresult"></a>
<a id="tocsdescribeldapssettingsresult"></a>

```json
{
  "LDAPSSettingsInfo": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LDAPSSettingsInfo|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeLDAPSSettingsRequest">DescribeLDAPSSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeldapssettingsrequest"></a>
<a id="schema_DescribeLDAPSSettingsRequest"></a>
<a id="tocSdescribeldapssettingsrequest"></a>
<a id="tocsdescribeldapssettingsrequest"></a>

```json
{
  "DirectoryId": {},
  "Type": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Type|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeRegionsResult">DescribeRegionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegionsresult"></a>
<a id="schema_DescribeRegionsResult"></a>
<a id="tocSdescriberegionsresult"></a>
<a id="tocsdescriberegionsresult"></a>

```json
{
  "RegionsDescription": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionsDescription|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRegionsRequest">DescribeRegionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegionsrequest"></a>
<a id="schema_DescribeRegionsRequest"></a>
<a id="tocSdescriberegionsrequest"></a>
<a id="tocsdescriberegionsrequest"></a>

```json
{
  "DirectoryId": {},
  "RegionName": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RegionName|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSettingsResult">DescribeSettingsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribesettingsresult"></a>
<a id="schema_DescribeSettingsResult"></a>
<a id="tocSdescribesettingsresult"></a>
<a id="tocsdescribesettingsresult"></a>

```json
{
  "DirectoryId": {},
  "SettingEntries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|SettingEntries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSettingsRequest">DescribeSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesettingsrequest"></a>
<a id="schema_DescribeSettingsRequest"></a>
<a id="tocSdescribesettingsrequest"></a>
<a id="tocsdescribesettingsrequest"></a>

```json
{
  "DirectoryId": {},
  "Status": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Status|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSharedDirectoriesResult">DescribeSharedDirectoriesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeshareddirectoriesresult"></a>
<a id="schema_DescribeSharedDirectoriesResult"></a>
<a id="tocSdescribeshareddirectoriesresult"></a>
<a id="tocsdescribeshareddirectoriesresult"></a>

```json
{
  "SharedDirectories": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedDirectories|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSharedDirectoriesRequest">DescribeSharedDirectoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeshareddirectoriesrequest"></a>
<a id="schema_DescribeSharedDirectoriesRequest"></a>
<a id="tocSdescribeshareddirectoriesrequest"></a>
<a id="tocsdescribeshareddirectoriesrequest"></a>

```json
{
  "OwnerDirectoryId": {},
  "SharedDirectoryIds": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerDirectoryId|object|true|none|none|
|SharedDirectoryIds|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeSnapshotsResult">DescribeSnapshotsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotsresult"></a>
<a id="schema_DescribeSnapshotsResult"></a>
<a id="tocSdescribesnapshotsresult"></a>
<a id="tocsdescribesnapshotsresult"></a>

```json
{
  "Snapshots": {},
  "NextToken": {}
}
```

Contains the results of the <a>DescribeSnapshots</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Snapshots|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSnapshotsRequest">DescribeSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotsrequest"></a>
<a id="schema_DescribeSnapshotsRequest"></a>
<a id="tocSdescribesnapshotsrequest"></a>
<a id="tocsdescribesnapshotsrequest"></a>

```json
{
  "DirectoryId": {},
  "SnapshotIds": {},
  "NextToken": {},
  "Limit": {}
}
```

Contains the inputs for the <a>DescribeSnapshots</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|SnapshotIds|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeTrustsResult">DescribeTrustsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustsresult"></a>
<a id="schema_DescribeTrustsResult"></a>
<a id="tocSdescribetrustsresult"></a>
<a id="tocsdescribetrustsresult"></a>

```json
{
  "Trusts": {},
  "NextToken": {}
}
```

The result of a DescribeTrust request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Trusts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeTrustsRequest">DescribeTrustsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustsrequest"></a>
<a id="schema_DescribeTrustsRequest"></a>
<a id="tocSdescribetrustsrequest"></a>
<a id="tocsdescribetrustsrequest"></a>

```json
{
  "DirectoryId": {},
  "TrustIds": {},
  "NextToken": {},
  "Limit": {}
}
```

Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|TrustIds|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeUpdateDirectoryResult">DescribeUpdateDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeupdatedirectoryresult"></a>
<a id="schema_DescribeUpdateDirectoryResult"></a>
<a id="tocSdescribeupdatedirectoryresult"></a>
<a id="tocsdescribeupdatedirectoryresult"></a>

```json
{
  "UpdateActivities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateActivities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeUpdateDirectoryRequest">DescribeUpdateDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeupdatedirectoryrequest"></a>
<a id="schema_DescribeUpdateDirectoryRequest"></a>
<a id="tocSdescribeupdatedirectoryrequest"></a>
<a id="tocsdescribeupdatedirectoryrequest"></a>

```json
{
  "DirectoryId": {},
  "UpdateType": {},
  "RegionName": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|UpdateType|object|true|none|none|
|RegionName|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DisableClientAuthenticationResult">DisableClientAuthenticationResult</h2>
<!-- backwards compatibility -->
<a id="schemadisableclientauthenticationresult"></a>
<a id="schema_DisableClientAuthenticationResult"></a>
<a id="tocSdisableclientauthenticationresult"></a>
<a id="tocsdisableclientauthenticationresult"></a>

```json
{}
```

<h2 id="tocS_DisableClientAuthenticationRequest">DisableClientAuthenticationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableclientauthenticationrequest"></a>
<a id="schema_DisableClientAuthenticationRequest"></a>
<a id="tocSdisableclientauthenticationrequest"></a>
<a id="tocsdisableclientauthenticationrequest"></a>

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_InvalidClientAuthStatusException">InvalidClientAuthStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclientauthstatusexception"></a>
<a id="schema_InvalidClientAuthStatusException"></a>
<a id="tocSinvalidclientauthstatusexception"></a>
<a id="tocsinvalidclientauthstatusexception"></a>

```json
null
```

<h2 id="tocS_DisableLDAPSResult">DisableLDAPSResult</h2>
<!-- backwards compatibility -->
<a id="schemadisableldapsresult"></a>
<a id="schema_DisableLDAPSResult"></a>
<a id="tocSdisableldapsresult"></a>
<a id="tocsdisableldapsresult"></a>

```json
{}
```

<h2 id="tocS_DisableLDAPSRequest">DisableLDAPSRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableldapsrequest"></a>
<a id="schema_DisableLDAPSRequest"></a>
<a id="tocSdisableldapsrequest"></a>
<a id="tocsdisableldapsrequest"></a>

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_InvalidLDAPSStatusException">InvalidLDAPSStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidldapsstatusexception"></a>
<a id="schema_InvalidLDAPSStatusException"></a>
<a id="tocSinvalidldapsstatusexception"></a>
<a id="tocsinvalidldapsstatusexception"></a>

```json
null
```

<h2 id="tocS_DisableRadiusResult">DisableRadiusResult</h2>
<!-- backwards compatibility -->
<a id="schemadisableradiusresult"></a>
<a id="schema_DisableRadiusResult"></a>
<a id="tocSdisableradiusresult"></a>
<a id="tocsdisableradiusresult"></a>

```json
{}
```

Contains the results of the <a>DisableRadius</a> operation.

<h2 id="tocS_DisableRadiusRequest">DisableRadiusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableradiusrequest"></a>
<a id="schema_DisableRadiusRequest"></a>
<a id="tocSdisableradiusrequest"></a>
<a id="tocsdisableradiusrequest"></a>

```json
{
  "DirectoryId": {}
}
```

Contains the inputs for the <a>DisableRadius</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|

<h2 id="tocS_DisableSsoResult">DisableSsoResult</h2>
<!-- backwards compatibility -->
<a id="schemadisablessoresult"></a>
<a id="schema_DisableSsoResult"></a>
<a id="tocSdisablessoresult"></a>
<a id="tocsdisablessoresult"></a>

```json
{}
```

Contains the results of the <a>DisableSso</a> operation.

<h2 id="tocS_DisableSsoRequest">DisableSsoRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablessorequest"></a>
<a id="schema_DisableSsoRequest"></a>
<a id="tocSdisablessorequest"></a>
<a id="tocsdisablessorequest"></a>

```json
{
  "DirectoryId": {},
  "UserName": {},
  "Password": {}
}
```

Contains the inputs for the <a>DisableSso</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|UserName|object|false|none|none|
|Password|object|false|none|none|

<h2 id="tocS_EnableClientAuthenticationResult">EnableClientAuthenticationResult</h2>
<!-- backwards compatibility -->
<a id="schemaenableclientauthenticationresult"></a>
<a id="schema_EnableClientAuthenticationResult"></a>
<a id="tocSenableclientauthenticationresult"></a>
<a id="tocsenableclientauthenticationresult"></a>

```json
{}
```

<h2 id="tocS_EnableClientAuthenticationRequest">EnableClientAuthenticationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableclientauthenticationrequest"></a>
<a id="schema_EnableClientAuthenticationRequest"></a>
<a id="tocSenableclientauthenticationrequest"></a>
<a id="tocsenableclientauthenticationrequest"></a>

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_NoAvailableCertificateException">NoAvailableCertificateException</h2>
<!-- backwards compatibility -->
<a id="schemanoavailablecertificateexception"></a>
<a id="schema_NoAvailableCertificateException"></a>
<a id="tocSnoavailablecertificateexception"></a>
<a id="tocsnoavailablecertificateexception"></a>

```json
null
```

<h2 id="tocS_EnableLDAPSResult">EnableLDAPSResult</h2>
<!-- backwards compatibility -->
<a id="schemaenableldapsresult"></a>
<a id="schema_EnableLDAPSResult"></a>
<a id="tocSenableldapsresult"></a>
<a id="tocsenableldapsresult"></a>

```json
{}
```

<h2 id="tocS_EnableLDAPSRequest">EnableLDAPSRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableldapsrequest"></a>
<a id="schema_EnableLDAPSRequest"></a>
<a id="tocSenableldapsrequest"></a>
<a id="tocsenableldapsrequest"></a>

```json
{
  "DirectoryId": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_EnableRadiusResult">EnableRadiusResult</h2>
<!-- backwards compatibility -->
<a id="schemaenableradiusresult"></a>
<a id="schema_EnableRadiusResult"></a>
<a id="tocSenableradiusresult"></a>
<a id="tocsenableradiusresult"></a>

```json
{}
```

Contains the results of the <a>EnableRadius</a> operation.

<h2 id="tocS_EnableRadiusRequest">EnableRadiusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableradiusrequest"></a>
<a id="schema_EnableRadiusRequest"></a>
<a id="tocSenableradiusrequest"></a>
<a id="tocsenableradiusrequest"></a>

```json
{
  "DirectoryId": {},
  "RadiusSettings": {
    "RadiusServers": {},
    "RadiusPort": {},
    "RadiusTimeout": {},
    "RadiusRetries": {},
    "SharedSecret": {},
    "AuthenticationProtocol": {},
    "DisplayLabel": {},
    "UseSameUsername": {}
  }
}
```

Contains the inputs for the <a>EnableRadius</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RadiusSettings|object|true|none|none|

<h2 id="tocS_EnableSsoResult">EnableSsoResult</h2>
<!-- backwards compatibility -->
<a id="schemaenablessoresult"></a>
<a id="schema_EnableSsoResult"></a>
<a id="tocSenablessoresult"></a>
<a id="tocsenablessoresult"></a>

```json
{}
```

Contains the results of the <a>EnableSso</a> operation.

<h2 id="tocS_EnableSsoRequest">EnableSsoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablessorequest"></a>
<a id="schema_EnableSsoRequest"></a>
<a id="tocSenablessorequest"></a>
<a id="tocsenablessorequest"></a>

```json
{
  "DirectoryId": {},
  "UserName": {},
  "Password": {}
}
```

Contains the inputs for the <a>EnableSso</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|UserName|object|false|none|none|
|Password|object|false|none|none|

<h2 id="tocS_GetDirectoryLimitsResult">GetDirectoryLimitsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdirectorylimitsresult"></a>
<a id="schema_GetDirectoryLimitsResult"></a>
<a id="tocSgetdirectorylimitsresult"></a>
<a id="tocsgetdirectorylimitsresult"></a>

```json
{
  "DirectoryLimits": {
    "CloudOnlyDirectoriesLimit": {},
    "CloudOnlyDirectoriesCurrentCount": {},
    "CloudOnlyDirectoriesLimitReached": {},
    "CloudOnlyMicrosoftADLimit": {},
    "CloudOnlyMicrosoftADCurrentCount": {},
    "CloudOnlyMicrosoftADLimitReached": {},
    "ConnectedDirectoriesLimit": {},
    "ConnectedDirectoriesCurrentCount": {},
    "ConnectedDirectoriesLimitReached": {}
  }
}
```

Contains the results of the <a>GetDirectoryLimits</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryLimits|object|false|none|none|

<h2 id="tocS_GetDirectoryLimitsRequest">GetDirectoryLimitsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdirectorylimitsrequest"></a>
<a id="schema_GetDirectoryLimitsRequest"></a>
<a id="tocSgetdirectorylimitsrequest"></a>
<a id="tocsgetdirectorylimitsrequest"></a>

```json
{}
```

Contains the inputs for the <a>GetDirectoryLimits</a> operation.

<h2 id="tocS_GetSnapshotLimitsResult">GetSnapshotLimitsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsnapshotlimitsresult"></a>
<a id="schema_GetSnapshotLimitsResult"></a>
<a id="tocSgetsnapshotlimitsresult"></a>
<a id="tocsgetsnapshotlimitsresult"></a>

```json
{
  "SnapshotLimits": {
    "ManualSnapshotsLimit": {},
    "ManualSnapshotsCurrentCount": {},
    "ManualSnapshotsLimitReached": {}
  }
}
```

Contains the results of the <a>GetSnapshotLimits</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotLimits|object|false|none|none|

<h2 id="tocS_GetSnapshotLimitsRequest">GetSnapshotLimitsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsnapshotlimitsrequest"></a>
<a id="schema_GetSnapshotLimitsRequest"></a>
<a id="tocSgetsnapshotlimitsrequest"></a>
<a id="tocsgetsnapshotlimitsrequest"></a>

```json
{
  "DirectoryId": {}
}
```

Contains the inputs for the <a>GetSnapshotLimits</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|

<h2 id="tocS_ListCertificatesResult">ListCertificatesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatesresult"></a>
<a id="schema_ListCertificatesResult"></a>
<a id="tocSlistcertificatesresult"></a>
<a id="tocslistcertificatesresult"></a>

```json
{
  "NextToken": {},
  "CertificatesInfo": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|CertificatesInfo|object|false|none|none|

<h2 id="tocS_ListCertificatesRequest">ListCertificatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatesrequest"></a>
<a id="schema_ListCertificatesRequest"></a>
<a id="tocSlistcertificatesrequest"></a>
<a id="tocslistcertificatesrequest"></a>

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListIpRoutesResult">ListIpRoutesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistiproutesresult"></a>
<a id="schema_ListIpRoutesResult"></a>
<a id="tocSlistiproutesresult"></a>
<a id="tocslistiproutesresult"></a>

```json
{
  "IpRoutesInfo": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpRoutesInfo|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIpRoutesRequest">ListIpRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistiproutesrequest"></a>
<a id="schema_ListIpRoutesRequest"></a>
<a id="tocSlistiproutesrequest"></a>
<a id="tocslistiproutesrequest"></a>

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListLogSubscriptionsResult">ListLogSubscriptionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistlogsubscriptionsresult"></a>
<a id="schema_ListLogSubscriptionsResult"></a>
<a id="tocSlistlogsubscriptionsresult"></a>
<a id="tocslistlogsubscriptionsresult"></a>

```json
{
  "LogSubscriptions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogSubscriptions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLogSubscriptionsRequest">ListLogSubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlogsubscriptionsrequest"></a>
<a id="schema_ListLogSubscriptionsRequest"></a>
<a id="tocSlistlogsubscriptionsrequest"></a>
<a id="tocslistlogsubscriptionsrequest"></a>

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListSchemaExtensionsResult">ListSchemaExtensionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistschemaextensionsresult"></a>
<a id="schema_ListSchemaExtensionsResult"></a>
<a id="tocSlistschemaextensionsresult"></a>
<a id="tocslistschemaextensionsresult"></a>

```json
{
  "SchemaExtensionsInfo": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaExtensionsInfo|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSchemaExtensionsRequest">ListSchemaExtensionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistschemaextensionsrequest"></a>
<a id="schema_ListSchemaExtensionsRequest"></a>
<a id="tocSlistschemaextensionsrequest"></a>
<a id="tocslistschemaextensionsrequest"></a>

```json
{
  "DirectoryId": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

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
  "ResourceId": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_RegisterCertificateResult">RegisterCertificateResult</h2>
<!-- backwards compatibility -->
<a id="schemaregistercertificateresult"></a>
<a id="schema_RegisterCertificateResult"></a>
<a id="tocSregistercertificateresult"></a>
<a id="tocsregistercertificateresult"></a>

```json
{
  "CertificateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|false|none|none|

<h2 id="tocS_RegisterCertificateRequest">RegisterCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistercertificaterequest"></a>
<a id="schema_RegisterCertificateRequest"></a>
<a id="tocSregistercertificaterequest"></a>
<a id="tocsregistercertificaterequest"></a>

```json
{
  "DirectoryId": {},
  "CertificateData": {},
  "Type": {},
  "ClientCertAuthSettings": {
    "OCSPUrl": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|CertificateData|object|true|none|none|
|Type|object|false|none|none|
|ClientCertAuthSettings|object|false|none|none|

<h2 id="tocS_InvalidCertificateException">InvalidCertificateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcertificateexception"></a>
<a id="schema_InvalidCertificateException"></a>
<a id="tocSinvalidcertificateexception"></a>
<a id="tocsinvalidcertificateexception"></a>

```json
null
```

<h2 id="tocS_CertificateLimitExceededException">CertificateLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacertificatelimitexceededexception"></a>
<a id="schema_CertificateLimitExceededException"></a>
<a id="tocScertificatelimitexceededexception"></a>
<a id="tocscertificatelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CertificateAlreadyExistsException">CertificateAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemacertificatealreadyexistsexception"></a>
<a id="schema_CertificateAlreadyExistsException"></a>
<a id="tocScertificatealreadyexistsexception"></a>
<a id="tocscertificatealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_RegisterEventTopicResult">RegisterEventTopicResult</h2>
<!-- backwards compatibility -->
<a id="schemaregistereventtopicresult"></a>
<a id="schema_RegisterEventTopicResult"></a>
<a id="tocSregistereventtopicresult"></a>
<a id="tocsregistereventtopicresult"></a>

```json
{}
```

The result of a RegisterEventTopic request.

<h2 id="tocS_RegisterEventTopicRequest">RegisterEventTopicRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistereventtopicrequest"></a>
<a id="schema_RegisterEventTopicRequest"></a>
<a id="tocSregistereventtopicrequest"></a>
<a id="tocsregistereventtopicrequest"></a>

```json
{
  "DirectoryId": {},
  "TopicName": {}
}
```

Registers a new event topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|TopicName|object|true|none|none|

<h2 id="tocS_RejectSharedDirectoryResult">RejectSharedDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemarejectshareddirectoryresult"></a>
<a id="schema_RejectSharedDirectoryResult"></a>
<a id="tocSrejectshareddirectoryresult"></a>
<a id="tocsrejectshareddirectoryresult"></a>

```json
{
  "SharedDirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedDirectoryId|object|false|none|none|

<h2 id="tocS_RejectSharedDirectoryRequest">RejectSharedDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectshareddirectoryrequest"></a>
<a id="schema_RejectSharedDirectoryRequest"></a>
<a id="tocSrejectshareddirectoryrequest"></a>
<a id="tocsrejectshareddirectoryrequest"></a>

```json
{
  "SharedDirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedDirectoryId|object|true|none|none|

<h2 id="tocS_RemoveIpRoutesResult">RemoveIpRoutesResult</h2>
<!-- backwards compatibility -->
<a id="schemaremoveiproutesresult"></a>
<a id="schema_RemoveIpRoutesResult"></a>
<a id="tocSremoveiproutesresult"></a>
<a id="tocsremoveiproutesresult"></a>

```json
{}
```

<h2 id="tocS_RemoveIpRoutesRequest">RemoveIpRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveiproutesrequest"></a>
<a id="schema_RemoveIpRoutesRequest"></a>
<a id="tocSremoveiproutesrequest"></a>
<a id="tocsremoveiproutesrequest"></a>

```json
{
  "DirectoryId": {},
  "CidrIps": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|CidrIps|object|true|none|none|

<h2 id="tocS_RemoveRegionResult">RemoveRegionResult</h2>
<!-- backwards compatibility -->
<a id="schemaremoveregionresult"></a>
<a id="schema_RemoveRegionResult"></a>
<a id="tocSremoveregionresult"></a>
<a id="tocsremoveregionresult"></a>

```json
{}
```

<h2 id="tocS_RemoveRegionRequest">RemoveRegionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveregionrequest"></a>
<a id="schema_RemoveRegionRequest"></a>
<a id="tocSremoveregionrequest"></a>
<a id="tocsremoveregionrequest"></a>

```json
{
  "DirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|

<h2 id="tocS_RemoveTagsFromResourceResult">RemoveTagsFromResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourceresult"></a>
<a id="schema_RemoveTagsFromResourceResult"></a>
<a id="tocSremovetagsfromresourceresult"></a>
<a id="tocsremovetagsfromresourceresult"></a>

```json
{}
```

<h2 id="tocS_RemoveTagsFromResourceRequest">RemoveTagsFromResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourcerequest"></a>
<a id="schema_RemoveTagsFromResourceRequest"></a>
<a id="tocSremovetagsfromresourcerequest"></a>
<a id="tocsremovetagsfromresourcerequest"></a>

```json
{
  "ResourceId": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_ResetUserPasswordResult">ResetUserPasswordResult</h2>
<!-- backwards compatibility -->
<a id="schemaresetuserpasswordresult"></a>
<a id="schema_ResetUserPasswordResult"></a>
<a id="tocSresetuserpasswordresult"></a>
<a id="tocsresetuserpasswordresult"></a>

```json
{}
```

<h2 id="tocS_ResetUserPasswordRequest">ResetUserPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetuserpasswordrequest"></a>
<a id="schema_ResetUserPasswordRequest"></a>
<a id="tocSresetuserpasswordrequest"></a>
<a id="tocsresetuserpasswordrequest"></a>

```json
{
  "DirectoryId": {},
  "UserName": {},
  "NewPassword": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|UserName|object|true|none|none|
|NewPassword|object|true|none|none|

<h2 id="tocS_UserDoesNotExistException">UserDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemauserdoesnotexistexception"></a>
<a id="schema_UserDoesNotExistException"></a>
<a id="tocSuserdoesnotexistexception"></a>
<a id="tocsuserdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InvalidPasswordException">InvalidPasswordException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpasswordexception"></a>
<a id="schema_InvalidPasswordException"></a>
<a id="tocSinvalidpasswordexception"></a>
<a id="tocsinvalidpasswordexception"></a>

```json
null
```

<h2 id="tocS_RestoreFromSnapshotResult">RestoreFromSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemarestorefromsnapshotresult"></a>
<a id="schema_RestoreFromSnapshotResult"></a>
<a id="tocSrestorefromsnapshotresult"></a>
<a id="tocsrestorefromsnapshotresult"></a>

```json
{}
```

Contains the results of the <a>RestoreFromSnapshot</a> operation.

<h2 id="tocS_RestoreFromSnapshotRequest">RestoreFromSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorefromsnapshotrequest"></a>
<a id="schema_RestoreFromSnapshotRequest"></a>
<a id="tocSrestorefromsnapshotrequest"></a>
<a id="tocsrestorefromsnapshotrequest"></a>

```json
{
  "SnapshotId": {}
}
```

An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|true|none|none|

<h2 id="tocS_ShareDirectoryResult">ShareDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemasharedirectoryresult"></a>
<a id="schema_ShareDirectoryResult"></a>
<a id="tocSsharedirectoryresult"></a>
<a id="tocssharedirectoryresult"></a>

```json
{
  "SharedDirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedDirectoryId|object|false|none|none|

<h2 id="tocS_ShareDirectoryRequest">ShareDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemasharedirectoryrequest"></a>
<a id="schema_ShareDirectoryRequest"></a>
<a id="tocSsharedirectoryrequest"></a>
<a id="tocssharedirectoryrequest"></a>

```json
{
  "DirectoryId": {},
  "ShareNotes": {},
  "ShareTarget": {
    "Id": {},
    "Type": {}
  },
  "ShareMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|ShareNotes|object|false|none|none|
|ShareTarget|object|true|none|none|
|ShareMethod|object|true|none|none|

<h2 id="tocS_InvalidTargetException">InvalidTargetException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetexception"></a>
<a id="schema_InvalidTargetException"></a>
<a id="tocSinvalidtargetexception"></a>
<a id="tocsinvalidtargetexception"></a>

```json
null
```

<h2 id="tocS_ShareLimitExceededException">ShareLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemasharelimitexceededexception"></a>
<a id="schema_ShareLimitExceededException"></a>
<a id="tocSsharelimitexceededexception"></a>
<a id="tocssharelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_OrganizationsException">OrganizationsException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsexception"></a>
<a id="schema_OrganizationsException"></a>
<a id="tocSorganizationsexception"></a>
<a id="tocsorganizationsexception"></a>

```json
null
```

<h2 id="tocS_StartSchemaExtensionResult">StartSchemaExtensionResult</h2>
<!-- backwards compatibility -->
<a id="schemastartschemaextensionresult"></a>
<a id="schema_StartSchemaExtensionResult"></a>
<a id="tocSstartschemaextensionresult"></a>
<a id="tocsstartschemaextensionresult"></a>

```json
{
  "SchemaExtensionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaExtensionId|object|false|none|none|

<h2 id="tocS_StartSchemaExtensionRequest">StartSchemaExtensionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartschemaextensionrequest"></a>
<a id="schema_StartSchemaExtensionRequest"></a>
<a id="tocSstartschemaextensionrequest"></a>
<a id="tocsstartschemaextensionrequest"></a>

```json
{
  "DirectoryId": {},
  "CreateSnapshotBeforeSchemaExtension": {},
  "LdifContent": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|CreateSnapshotBeforeSchemaExtension|object|true|none|none|
|LdifContent|object|true|none|none|
|Description|object|true|none|none|

<h2 id="tocS_UnshareDirectoryResult">UnshareDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemaunsharedirectoryresult"></a>
<a id="schema_UnshareDirectoryResult"></a>
<a id="tocSunsharedirectoryresult"></a>
<a id="tocsunsharedirectoryresult"></a>

```json
{
  "SharedDirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedDirectoryId|object|false|none|none|

<h2 id="tocS_UnshareDirectoryRequest">UnshareDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunsharedirectoryrequest"></a>
<a id="schema_UnshareDirectoryRequest"></a>
<a id="tocSunsharedirectoryrequest"></a>
<a id="tocsunsharedirectoryrequest"></a>

```json
{
  "DirectoryId": {},
  "UnshareTarget": {
    "Id": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|UnshareTarget|object|true|none|none|

<h2 id="tocS_DirectoryNotSharedException">DirectoryNotSharedException</h2>
<!-- backwards compatibility -->
<a id="schemadirectorynotsharedexception"></a>
<a id="schema_DirectoryNotSharedException"></a>
<a id="tocSdirectorynotsharedexception"></a>
<a id="tocsdirectorynotsharedexception"></a>

```json
null
```

<h2 id="tocS_UpdateConditionalForwarderResult">UpdateConditionalForwarderResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconditionalforwarderresult"></a>
<a id="schema_UpdateConditionalForwarderResult"></a>
<a id="tocSupdateconditionalforwarderresult"></a>
<a id="tocsupdateconditionalforwarderresult"></a>

```json
{}
```

The result of an UpdateConditionalForwarder request.

<h2 id="tocS_UpdateConditionalForwarderRequest">UpdateConditionalForwarderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconditionalforwarderrequest"></a>
<a id="schema_UpdateConditionalForwarderRequest"></a>
<a id="tocSupdateconditionalforwarderrequest"></a>
<a id="tocsupdateconditionalforwarderrequest"></a>

```json
{
  "DirectoryId": {},
  "RemoteDomainName": {},
  "DnsIpAddrs": {}
}
```

Updates a conditional forwarder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RemoteDomainName|object|true|none|none|
|DnsIpAddrs|object|true|none|none|

<h2 id="tocS_UpdateDirectorySetupResult">UpdateDirectorySetupResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectorysetupresult"></a>
<a id="schema_UpdateDirectorySetupResult"></a>
<a id="tocSupdatedirectorysetupresult"></a>
<a id="tocsupdatedirectorysetupresult"></a>

```json
{}
```

<h2 id="tocS_UpdateDirectorySetupRequest">UpdateDirectorySetupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectorysetuprequest"></a>
<a id="schema_UpdateDirectorySetupRequest"></a>
<a id="tocSupdatedirectorysetuprequest"></a>
<a id="tocsupdatedirectorysetuprequest"></a>

```json
{
  "DirectoryId": {},
  "UpdateType": {},
  "OSUpdateSettings": {
    "OSVersion": {}
  },
  "CreateSnapshotBeforeUpdate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|UpdateType|object|true|none|none|
|OSUpdateSettings|object|false|none|none|
|CreateSnapshotBeforeUpdate|object|false|none|none|

<h2 id="tocS_DirectoryInDesiredStateException">DirectoryInDesiredStateException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryindesiredstateexception"></a>
<a id="schema_DirectoryInDesiredStateException"></a>
<a id="tocSdirectoryindesiredstateexception"></a>
<a id="tocsdirectoryindesiredstateexception"></a>

```json
null
```

<h2 id="tocS_UpdateNumberOfDomainControllersResult">UpdateNumberOfDomainControllersResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenumberofdomaincontrollersresult"></a>
<a id="schema_UpdateNumberOfDomainControllersResult"></a>
<a id="tocSupdatenumberofdomaincontrollersresult"></a>
<a id="tocsupdatenumberofdomaincontrollersresult"></a>

```json
{}
```

<h2 id="tocS_UpdateNumberOfDomainControllersRequest">UpdateNumberOfDomainControllersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenumberofdomaincontrollersrequest"></a>
<a id="schema_UpdateNumberOfDomainControllersRequest"></a>
<a id="tocSupdatenumberofdomaincontrollersrequest"></a>
<a id="tocsupdatenumberofdomaincontrollersrequest"></a>

```json
{
  "DirectoryId": {},
  "DesiredNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|DesiredNumber|object|true|none|none|

<h2 id="tocS_DomainControllerLimitExceededException">DomainControllerLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontrollerlimitexceededexception"></a>
<a id="schema_DomainControllerLimitExceededException"></a>
<a id="tocSdomaincontrollerlimitexceededexception"></a>
<a id="tocsdomaincontrollerlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_UpdateRadiusResult">UpdateRadiusResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateradiusresult"></a>
<a id="schema_UpdateRadiusResult"></a>
<a id="tocSupdateradiusresult"></a>
<a id="tocsupdateradiusresult"></a>

```json
{}
```

Contains the results of the <a>UpdateRadius</a> operation.

<h2 id="tocS_UpdateRadiusRequest">UpdateRadiusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateradiusrequest"></a>
<a id="schema_UpdateRadiusRequest"></a>
<a id="tocSupdateradiusrequest"></a>
<a id="tocsupdateradiusrequest"></a>

```json
{
  "DirectoryId": {},
  "RadiusSettings": {
    "RadiusServers": {},
    "RadiusPort": {},
    "RadiusTimeout": {},
    "RadiusRetries": {},
    "SharedSecret": {},
    "AuthenticationProtocol": {},
    "DisplayLabel": {},
    "UseSameUsername": {}
  }
}
```

Contains the inputs for the <a>UpdateRadius</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|RadiusSettings|object|true|none|none|

<h2 id="tocS_UpdateSettingsResult">UpdateSettingsResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsresult"></a>
<a id="schema_UpdateSettingsResult"></a>
<a id="tocSupdatesettingsresult"></a>
<a id="tocsupdatesettingsresult"></a>

```json
{
  "DirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|

<h2 id="tocS_UpdateSettingsRequest">UpdateSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsrequest"></a>
<a id="schema_UpdateSettingsRequest"></a>
<a id="tocSupdatesettingsrequest"></a>
<a id="tocsupdatesettingsrequest"></a>

```json
{
  "DirectoryId": {},
  "Settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|Settings|object|true|none|none|

<h2 id="tocS_IncompatibleSettingsException">IncompatibleSettingsException</h2>
<!-- backwards compatibility -->
<a id="schemaincompatiblesettingsexception"></a>
<a id="schema_IncompatibleSettingsException"></a>
<a id="tocSincompatiblesettingsexception"></a>
<a id="tocsincompatiblesettingsexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedSettingsException">UnsupportedSettingsException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedsettingsexception"></a>
<a id="schema_UnsupportedSettingsException"></a>
<a id="tocSunsupportedsettingsexception"></a>
<a id="tocsunsupportedsettingsexception"></a>

```json
null
```

<h2 id="tocS_UpdateTrustResult">UpdateTrustResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrustresult"></a>
<a id="schema_UpdateTrustResult"></a>
<a id="tocSupdatetrustresult"></a>
<a id="tocsupdatetrustresult"></a>

```json
{
  "RequestId": "string",
  "TrustId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestId|[RequestId](#schemarequestid)|false|none|The Amazon Web Services request identifier.|
|TrustId|object|false|none|none|

<h2 id="tocS_UpdateTrustRequest">UpdateTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrustrequest"></a>
<a id="schema_UpdateTrustRequest"></a>
<a id="tocSupdatetrustrequest"></a>
<a id="tocsupdatetrustrequest"></a>

```json
{
  "TrustId": {},
  "SelectiveAuth": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrustId|object|true|none|none|
|SelectiveAuth|object|false|none|none|

<h2 id="tocS_VerifyTrustResult">VerifyTrustResult</h2>
<!-- backwards compatibility -->
<a id="schemaverifytrustresult"></a>
<a id="schema_VerifyTrustResult"></a>
<a id="tocSverifytrustresult"></a>
<a id="tocsverifytrustresult"></a>

```json
{
  "TrustId": {}
}
```

Result of a VerifyTrust request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrustId|object|false|none|none|

<h2 id="tocS_VerifyTrustRequest">VerifyTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifytrustrequest"></a>
<a id="schema_VerifyTrustRequest"></a>
<a id="tocSverifytrustrequest"></a>
<a id="tocsverifytrustrequest"></a>

```json
{
  "TrustId": {}
}
```

Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrustId|object|true|none|none|

<h2 id="tocS_DirectoryId">DirectoryId</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryid"></a>
<a id="schema_DirectoryId"></a>
<a id="tocSdirectoryid"></a>
<a id="tocsdirectoryid"></a>

```json
"string"
```

<h2 id="tocS_SharedDirectory">SharedDirectory</h2>
<!-- backwards compatibility -->
<a id="schemashareddirectory"></a>
<a id="schema_SharedDirectory"></a>
<a id="tocSshareddirectory"></a>
<a id="tocsshareddirectory"></a>

```json
{
  "OwnerAccountId": {},
  "OwnerDirectoryId": {},
  "ShareMethod": {},
  "SharedAccountId": {},
  "SharedDirectoryId": {},
  "ShareStatus": {},
  "ShareNotes": {},
  "CreatedDateTime": {},
  "LastUpdatedDateTime": {}
}
```

Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerAccountId|object|false|none|none|
|OwnerDirectoryId|object|false|none|none|
|ShareMethod|object|false|none|none|
|SharedAccountId|object|false|none|none|
|SharedDirectoryId|object|false|none|none|
|ShareStatus|object|false|none|none|
|ShareNotes|object|false|none|none|
|CreatedDateTime|object|false|none|none|
|LastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_AccessUrl">AccessUrl</h2>
<!-- backwards compatibility -->
<a id="schemaaccessurl"></a>
<a id="schema_AccessUrl"></a>
<a id="tocSaccessurl"></a>
<a id="tocsaccessurl"></a>

```json
"string"
```

<h2 id="tocS_IpRoutes">IpRoutes</h2>
<!-- backwards compatibility -->
<a id="schemaiproutes"></a>
<a id="schema_IpRoutes"></a>
<a id="tocSiproutes"></a>
<a id="tocsiproutes"></a>

```json
[
  {
    "CidrIp": {},
    "Description": {}
  }
]
```

<h2 id="tocS_UpdateSecurityGroupForDirectoryControllers">UpdateSecurityGroupForDirectoryControllers</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecuritygroupfordirectorycontrollers"></a>
<a id="schema_UpdateSecurityGroupForDirectoryControllers"></a>
<a id="tocSupdatesecuritygroupfordirectorycontrollers"></a>
<a id="tocsupdatesecuritygroupfordirectorycontrollers"></a>

```json
true
```

<h2 id="tocS_RegionName">RegionName</h2>
<!-- backwards compatibility -->
<a id="schemaregionname"></a>
<a id="schema_RegionName"></a>
<a id="tocSregionname"></a>
<a id="tocsregionname"></a>

```json
"stringst"
```

<h2 id="tocS_DirectoryVpcSettings">DirectoryVpcSettings</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryvpcsettings"></a>
<a id="schema_DirectoryVpcSettings"></a>
<a id="tocSdirectoryvpcsettings"></a>
<a id="tocsdirectoryvpcsettings"></a>

```json
{
  "VpcId": {},
  "SubnetIds": {}
}
```

Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|true|none|none|
|SubnetIds|object|true|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

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

<h2 id="tocS_AddedDateTime">AddedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaaddeddatetime"></a>
<a id="schema_AddedDateTime"></a>
<a id="tocSaddeddatetime"></a>
<a id="tocsaddeddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AdditionalRegions">AdditionalRegions</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalregions"></a>
<a id="schema_AdditionalRegions"></a>
<a id="tocSadditionalregions"></a>
<a id="tocsadditionalregions"></a>

```json
[
  "stringst"
]
```

<h2 id="tocS_AliasName">AliasName</h2>
<!-- backwards compatibility -->
<a id="schemaaliasname"></a>
<a id="schema_AliasName"></a>
<a id="tocSaliasname"></a>
<a id="tocsaliasname"></a>

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

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Represents a named directory attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

<h2 id="tocS_AvailabilityZones">AvailabilityZones</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzones"></a>
<a id="schema_AvailabilityZones"></a>
<a id="tocSavailabilityzones"></a>
<a id="tocsavailabilityzones"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SchemaExtensionId">SchemaExtensionId</h2>
<!-- backwards compatibility -->
<a id="schemaschemaextensionid"></a>
<a id="schema_SchemaExtensionId"></a>
<a id="tocSschemaextensionid"></a>
<a id="tocsschemaextensionid"></a>

```json
"string"
```

<h2 id="tocS_CertificateId">CertificateId</h2>
<!-- backwards compatibility -->
<a id="schemacertificateid"></a>
<a id="schema_CertificateId"></a>
<a id="tocScertificateid"></a>
<a id="tocscertificateid"></a>

```json
"string"
```

<h2 id="tocS_CertificateState">CertificateState</h2>
<!-- backwards compatibility -->
<a id="schemacertificatestate"></a>
<a id="schema_CertificateState"></a>
<a id="tocScertificatestate"></a>
<a id="tocscertificatestate"></a>

```json
"Registering"
```

<h2 id="tocS_CertificateStateReason">CertificateStateReason</h2>
<!-- backwards compatibility -->
<a id="schemacertificatestatereason"></a>
<a id="schema_CertificateStateReason"></a>
<a id="tocScertificatestatereason"></a>
<a id="tocscertificatestatereason"></a>

```json
"string"
```

<h2 id="tocS_CertificateCN">CertificateCN</h2>
<!-- backwards compatibility -->
<a id="schemacertificatecn"></a>
<a id="schema_CertificateCN"></a>
<a id="tocScertificatecn"></a>
<a id="tocscertificatecn"></a>

```json
"string"
```

<h2 id="tocS_CertificateRegisteredDateTime">CertificateRegisteredDateTime</h2>
<!-- backwards compatibility -->
<a id="schemacertificateregistereddatetime"></a>
<a id="schema_CertificateRegisteredDateTime"></a>
<a id="tocScertificateregistereddatetime"></a>
<a id="tocscertificateregistereddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CertificateExpiryDateTime">CertificateExpiryDateTime</h2>
<!-- backwards compatibility -->
<a id="schemacertificateexpirydatetime"></a>
<a id="schema_CertificateExpiryDateTime"></a>
<a id="tocScertificateexpirydatetime"></a>
<a id="tocscertificateexpirydatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CertificateType">CertificateType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatetype"></a>
<a id="schema_CertificateType"></a>
<a id="tocScertificatetype"></a>
<a id="tocscertificatetype"></a>

```json
"ClientCertAuth"
```

<h2 id="tocS_ClientCertAuthSettings">ClientCertAuthSettings</h2>
<!-- backwards compatibility -->
<a id="schemaclientcertauthsettings"></a>
<a id="schema_ClientCertAuthSettings"></a>
<a id="tocSclientcertauthsettings"></a>
<a id="tocsclientcertauthsettings"></a>

```json
{
  "OCSPUrl": {}
}
```

Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OCSPUrl|object|false|none|none|

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "CertificateId": {},
  "State": {},
  "StateReason": {},
  "CommonName": {},
  "RegisteredDateTime": {},
  "ExpiryDateTime": {},
  "Type": {},
  "ClientCertAuthSettings": {
    "OCSPUrl": {}
  }
}
```

Information about the certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|false|none|none|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|CommonName|object|false|none|none|
|RegisteredDateTime|object|false|none|none|
|ExpiryDateTime|object|false|none|none|
|Type|object|false|none|none|
|ClientCertAuthSettings|object|false|none|none|

<h2 id="tocS_CertificateData">CertificateData</h2>
<!-- backwards compatibility -->
<a id="schemacertificatedata"></a>
<a id="schema_CertificateData"></a>
<a id="tocScertificatedata"></a>
<a id="tocscertificatedata"></a>

```json
"string"
```

<h2 id="tocS_CertificateInfo">CertificateInfo</h2>
<!-- backwards compatibility -->
<a id="schemacertificateinfo"></a>
<a id="schema_CertificateInfo"></a>
<a id="tocScertificateinfo"></a>
<a id="tocscertificateinfo"></a>

```json
{
  "CertificateId": {},
  "CommonName": {},
  "State": {},
  "ExpiryDateTime": {},
  "Type": {}
}
```

Contains general information about a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateId|object|false|none|none|
|CommonName|object|false|none|none|
|State|object|false|none|none|
|ExpiryDateTime|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_CertificatesInfo">CertificatesInfo</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesinfo"></a>
<a id="schema_CertificatesInfo"></a>
<a id="tocScertificatesinfo"></a>
<a id="tocscertificatesinfo"></a>

```json
[
  {
    "CertificateId": {},
    "CommonName": {},
    "State": {},
    "ExpiryDateTime": {},
    "Type": {}
  }
]
```

<h2 id="tocS_CidrIp">CidrIp</h2>
<!-- backwards compatibility -->
<a id="schemacidrip"></a>
<a id="schema_CidrIp"></a>
<a id="tocScidrip"></a>
<a id="tocscidrip"></a>

```json
"string"
```

<h2 id="tocS_CidrIps">CidrIps</h2>
<!-- backwards compatibility -->
<a id="schemacidrips"></a>
<a id="schema_CidrIps"></a>
<a id="tocScidrips"></a>
<a id="tocscidrips"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ClientAuthenticationType">ClientAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaclientauthenticationtype"></a>
<a id="schema_ClientAuthenticationType"></a>
<a id="tocSclientauthenticationtype"></a>
<a id="tocsclientauthenticationtype"></a>

```json
"SmartCard"
```

<h2 id="tocS_ClientAuthenticationStatus">ClientAuthenticationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclientauthenticationstatus"></a>
<a id="schema_ClientAuthenticationStatus"></a>
<a id="tocSclientauthenticationstatus"></a>
<a id="tocsclientauthenticationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_LastUpdatedDateTime">LastUpdatedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastupdateddatetime"></a>
<a id="schema_LastUpdatedDateTime"></a>
<a id="tocSlastupdateddatetime"></a>
<a id="tocslastupdateddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ClientAuthenticationSettingInfo">ClientAuthenticationSettingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclientauthenticationsettinginfo"></a>
<a id="schema_ClientAuthenticationSettingInfo"></a>
<a id="tocSclientauthenticationsettinginfo"></a>
<a id="tocsclientauthenticationsettinginfo"></a>

```json
{
  "Type": {},
  "Status": {},
  "LastUpdatedDateTime": {}
}
```

Contains information about a client authentication method for a directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Status|object|false|none|none|
|LastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_ClientAuthenticationSettingsInfo">ClientAuthenticationSettingsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclientauthenticationsettingsinfo"></a>
<a id="schema_ClientAuthenticationSettingsInfo"></a>
<a id="tocSclientauthenticationsettingsinfo"></a>
<a id="tocsclientauthenticationsettingsinfo"></a>

```json
[
  {
    "Type": {},
    "Status": {},
    "LastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_OCSPUrl">OCSPUrl</h2>
<!-- backwards compatibility -->
<a id="schemaocspurl"></a>
<a id="schema_OCSPUrl"></a>
<a id="tocSocspurl"></a>
<a id="tocsocspurl"></a>

```json
"string"
```

<h2 id="tocS_CloudOnlyDirectoriesLimitReached">CloudOnlyDirectoriesLimitReached</h2>
<!-- backwards compatibility -->
<a id="schemacloudonlydirectorieslimitreached"></a>
<a id="schema_CloudOnlyDirectoriesLimitReached"></a>
<a id="tocScloudonlydirectorieslimitreached"></a>
<a id="tocscloudonlydirectorieslimitreached"></a>

```json
true
```

<h2 id="tocS_SID">SID</h2>
<!-- backwards compatibility -->
<a id="schemasid"></a>
<a id="schema_SID"></a>
<a id="tocSsid"></a>
<a id="tocssid"></a>

```json
"string"
```

<h2 id="tocS_ComputerName">ComputerName</h2>
<!-- backwards compatibility -->
<a id="schemacomputername"></a>
<a id="schema_ComputerName"></a>
<a id="tocScomputername"></a>
<a id="tocscomputername"></a>

```json
"string"
```

<h2 id="tocS_Computer">Computer</h2>
<!-- backwards compatibility -->
<a id="schemacomputer"></a>
<a id="schema_Computer"></a>
<a id="tocScomputer"></a>
<a id="tocscomputer"></a>

```json
{
  "ComputerId": {},
  "ComputerName": {},
  "ComputerAttributes": {}
}
```

Contains information about a computer account in a directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComputerId|object|false|none|none|
|ComputerName|object|false|none|none|
|ComputerAttributes|object|false|none|none|

<h2 id="tocS_ComputerPassword">ComputerPassword</h2>
<!-- backwards compatibility -->
<a id="schemacomputerpassword"></a>
<a id="schema_ComputerPassword"></a>
<a id="tocScomputerpassword"></a>
<a id="tocscomputerpassword"></a>

```json
"password"
```

<h2 id="tocS_RemoteDomainName">RemoteDomainName</h2>
<!-- backwards compatibility -->
<a id="schemaremotedomainname"></a>
<a id="schema_RemoteDomainName"></a>
<a id="tocSremotedomainname"></a>
<a id="tocsremotedomainname"></a>

```json
"string"
```

<h2 id="tocS_DnsIpAddrs">DnsIpAddrs</h2>
<!-- backwards compatibility -->
<a id="schemadnsipaddrs"></a>
<a id="schema_DnsIpAddrs"></a>
<a id="tocSdnsipaddrs"></a>
<a id="tocsdnsipaddrs"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationScope">ReplicationScope</h2>
<!-- backwards compatibility -->
<a id="schemareplicationscope"></a>
<a id="schema_ReplicationScope"></a>
<a id="tocSreplicationscope"></a>
<a id="tocsreplicationscope"></a>

```json
"Domain"
```

<h2 id="tocS_ConditionalForwarder">ConditionalForwarder</h2>
<!-- backwards compatibility -->
<a id="schemaconditionalforwarder"></a>
<a id="schema_ConditionalForwarder"></a>
<a id="tocSconditionalforwarder"></a>
<a id="tocsconditionalforwarder"></a>

```json
{
  "RemoteDomainName": {},
  "DnsIpAddrs": {},
  "ReplicationScope": {}
}
```

Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemoteDomainName|object|false|none|none|
|DnsIpAddrs|object|false|none|none|
|ReplicationScope|object|false|none|none|

<h2 id="tocS_ConditionalForwarders">ConditionalForwarders</h2>
<!-- backwards compatibility -->
<a id="schemaconditionalforwarders"></a>
<a id="schema_ConditionalForwarders"></a>
<a id="tocSconditionalforwarders"></a>
<a id="tocsconditionalforwarders"></a>

```json
[
  {
    "RemoteDomainName": {},
    "DnsIpAddrs": {},
    "ReplicationScope": {}
  }
]
```

<h2 id="tocS_DirectoryName">DirectoryName</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryname"></a>
<a id="schema_DirectoryName"></a>
<a id="tocSdirectoryname"></a>
<a id="tocsdirectoryname"></a>

```json
"string"
```

<h2 id="tocS_DirectoryShortName">DirectoryShortName</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryshortname"></a>
<a id="schema_DirectoryShortName"></a>
<a id="tocSdirectoryshortname"></a>
<a id="tocsdirectoryshortname"></a>

```json
"string"
```

<h2 id="tocS_ConnectPassword">ConnectPassword</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpassword"></a>
<a id="schema_ConnectPassword"></a>
<a id="tocSconnectpassword"></a>
<a id="tocsconnectpassword"></a>

```json
"password"
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

<h2 id="tocS_DirectorySize">DirectorySize</h2>
<!-- backwards compatibility -->
<a id="schemadirectorysize"></a>
<a id="schema_DirectorySize"></a>
<a id="tocSdirectorysize"></a>
<a id="tocsdirectorysize"></a>

```json
"Small"
```

<h2 id="tocS_DirectoryConnectSettings">DirectoryConnectSettings</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconnectsettings"></a>
<a id="schema_DirectoryConnectSettings"></a>
<a id="tocSdirectoryconnectsettings"></a>
<a id="tocsdirectoryconnectsettings"></a>

```json
{
  "VpcId": {},
  "SubnetIds": {},
  "CustomerDnsIps": {},
  "CustomerUserName": {}
}
```

Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|true|none|none|
|SubnetIds|object|true|none|none|
|CustomerDnsIps|object|true|none|none|
|CustomerUserName|object|true|none|none|

<h2 id="tocS_ConnectedDirectoriesLimitReached">ConnectedDirectoriesLimitReached</h2>
<!-- backwards compatibility -->
<a id="schemaconnecteddirectorieslimitreached"></a>
<a id="schema_ConnectedDirectoriesLimitReached"></a>
<a id="tocSconnecteddirectorieslimitreached"></a>
<a id="tocsconnecteddirectorieslimitreached"></a>

```json
true
```

<h2 id="tocS_OrganizationalUnitDN">OrganizationalUnitDN</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitdn"></a>
<a id="schema_OrganizationalUnitDN"></a>
<a id="tocSorganizationalunitdn"></a>
<a id="tocsorganizationalunitdn"></a>

```json
"string"
```

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password"
```

<h2 id="tocS_LogGroupName">LogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupname"></a>
<a id="schema_LogGroupName"></a>
<a id="tocSloggroupname"></a>
<a id="tocsloggroupname"></a>

```json
"string"
```

<h2 id="tocS_DirectoryEdition">DirectoryEdition</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryedition"></a>
<a id="schema_DirectoryEdition"></a>
<a id="tocSdirectoryedition"></a>
<a id="tocsdirectoryedition"></a>

```json
"Enterprise"
```

<h2 id="tocS_CreateSnapshotBeforeSchemaExtension">CreateSnapshotBeforeSchemaExtension</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotbeforeschemaextension"></a>
<a id="schema_CreateSnapshotBeforeSchemaExtension"></a>
<a id="tocScreatesnapshotbeforeschemaextension"></a>
<a id="tocscreatesnapshotbeforeschemaextension"></a>

```json
true
```

<h2 id="tocS_CreateSnapshotBeforeUpdate">CreateSnapshotBeforeUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotbeforeupdate"></a>
<a id="schema_CreateSnapshotBeforeUpdate"></a>
<a id="tocScreatesnapshotbeforeupdate"></a>
<a id="tocscreatesnapshotbeforeupdate"></a>

```json
true
```

<h2 id="tocS_SnapshotName">SnapshotName</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotname"></a>
<a id="schema_SnapshotName"></a>
<a id="tocSsnapshotname"></a>
<a id="tocssnapshotname"></a>

```json
"string"
```

<h2 id="tocS_SnapshotId">SnapshotId</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotid"></a>
<a id="schema_SnapshotId"></a>
<a id="tocSsnapshotid"></a>
<a id="tocssnapshotid"></a>

```json
"string"
```

<h2 id="tocS_TrustPassword">TrustPassword</h2>
<!-- backwards compatibility -->
<a id="schematrustpassword"></a>
<a id="schema_TrustPassword"></a>
<a id="tocStrustpassword"></a>
<a id="tocstrustpassword"></a>

```json
"password"
```

<h2 id="tocS_TrustDirection">TrustDirection</h2>
<!-- backwards compatibility -->
<a id="schematrustdirection"></a>
<a id="schema_TrustDirection"></a>
<a id="tocStrustdirection"></a>
<a id="tocstrustdirection"></a>

```json
"One-Way: Outgoing"
```

<h2 id="tocS_TrustType">TrustType</h2>
<!-- backwards compatibility -->
<a id="schematrusttype"></a>
<a id="schema_TrustType"></a>
<a id="tocStrusttype"></a>
<a id="tocstrusttype"></a>

```json
"Forest"
```

<h2 id="tocS_SelectiveAuth">SelectiveAuth</h2>
<!-- backwards compatibility -->
<a id="schemaselectiveauth"></a>
<a id="schema_SelectiveAuth"></a>
<a id="tocSselectiveauth"></a>
<a id="tocsselectiveauth"></a>

```json
"Enabled"
```

<h2 id="tocS_TrustId">TrustId</h2>
<!-- backwards compatibility -->
<a id="schematrustid"></a>
<a id="schema_TrustId"></a>
<a id="tocStrustid"></a>
<a id="tocstrustid"></a>

```json
"string"
```

<h2 id="tocS_CreatedDateTime">CreatedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemacreateddatetime"></a>
<a id="schema_CreatedDateTime"></a>
<a id="tocScreateddatetime"></a>
<a id="tocscreateddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CustomerId">CustomerId</h2>
<!-- backwards compatibility -->
<a id="schemacustomerid"></a>
<a id="schema_CustomerId"></a>
<a id="tocScustomerid"></a>
<a id="tocscustomerid"></a>

```json
"string"
```

<h2 id="tocS_CustomerUserName">CustomerUserName</h2>
<!-- backwards compatibility -->
<a id="schemacustomerusername"></a>
<a id="schema_CustomerUserName"></a>
<a id="tocScustomerusername"></a>
<a id="tocscustomerusername"></a>

```json
"string"
```

<h2 id="tocS_DeleteAssociatedConditionalForwarder">DeleteAssociatedConditionalForwarder</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassociatedconditionalforwarder"></a>
<a id="schema_DeleteAssociatedConditionalForwarder"></a>
<a id="tocSdeleteassociatedconditionalforwarder"></a>
<a id="tocsdeleteassociatedconditionalforwarder"></a>

```json
true
```

<h2 id="tocS_TopicName">TopicName</h2>
<!-- backwards compatibility -->
<a id="schematopicname"></a>
<a id="schema_TopicName"></a>
<a id="tocStopicname"></a>
<a id="tocstopicname"></a>

```json
"string"
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

<h2 id="tocS_PageLimit">PageLimit</h2>
<!-- backwards compatibility -->
<a id="schemapagelimit"></a>
<a id="schema_PageLimit"></a>
<a id="tocSpagelimit"></a>
<a id="tocspagelimit"></a>

```json
1
```

<h2 id="tocS_RemoteDomainNames">RemoteDomainNames</h2>
<!-- backwards compatibility -->
<a id="schemaremotedomainnames"></a>
<a id="schema_RemoteDomainNames"></a>
<a id="tocSremotedomainnames"></a>
<a id="tocsremotedomainnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DirectoryIds">DirectoryIds</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryids"></a>
<a id="schema_DirectoryIds"></a>
<a id="tocSdirectoryids"></a>
<a id="tocsdirectoryids"></a>

```json
[
  "string"
]
```

A list of directory identifiers.

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
0
```

<h2 id="tocS_DirectoryDescriptions">DirectoryDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemadirectorydescriptions"></a>
<a id="schema_DirectoryDescriptions"></a>
<a id="tocSdirectorydescriptions"></a>
<a id="tocsdirectorydescriptions"></a>

```json
[
  {
    "DirectoryId": {},
    "Name": {},
    "ShortName": {},
    "Size": {},
    "Edition": {},
    "Alias": {},
    "AccessUrl": {},
    "Description": {},
    "DnsIpAddrs": {},
    "Stage": {},
    "ShareStatus": {},
    "ShareMethod": {},
    "ShareNotes": {},
    "LaunchTime": {},
    "StageLastUpdatedDateTime": {},
    "Type": {},
    "VpcSettings": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupId": {},
      "AvailabilityZones": {}
    },
    "ConnectSettings": {
      "VpcId": {},
      "SubnetIds": {},
      "CustomerUserName": {},
      "SecurityGroupId": {},
      "AvailabilityZones": {},
      "ConnectIps": {}
    },
    "RadiusSettings": {
      "RadiusServers": {},
      "RadiusPort": {},
      "RadiusTimeout": {},
      "RadiusRetries": {},
      "SharedSecret": {},
      "AuthenticationProtocol": {},
      "DisplayLabel": {},
      "UseSameUsername": {}
    },
    "RadiusStatus": {},
    "StageReason": {},
    "SsoEnabled": {},
    "DesiredNumberOfDomainControllers": {},
    "OwnerDirectoryDescription": {
      "DirectoryId": {},
      "AccountId": {},
      "DnsIpAddrs": {},
      "VpcSettings": {
        "VpcId": {},
        "SubnetIds": {},
        "SecurityGroupId": {},
        "AvailabilityZones": {}
      },
      "RadiusSettings": {
        "RadiusServers": {},
        "RadiusPort": {},
        "RadiusTimeout": {},
        "RadiusRetries": {},
        "SharedSecret": {},
        "AuthenticationProtocol": {},
        "DisplayLabel": {},
        "UseSameUsername": {}
      },
      "RadiusStatus": {}
    },
    "RegionsInfo": {
      "PrimaryRegion": {},
      "AdditionalRegions": {}
    },
    "OsVersion": {}
  }
]
```

A list of directory descriptions.

<h2 id="tocS_DomainControllerIds">DomainControllerIds</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontrollerids"></a>
<a id="schema_DomainControllerIds"></a>
<a id="tocSdomaincontrollerids"></a>
<a id="tocsdomaincontrollerids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DomainControllers">DomainControllers</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontrollers"></a>
<a id="schema_DomainControllers"></a>
<a id="tocSdomaincontrollers"></a>
<a id="tocsdomaincontrollers"></a>

```json
[
  {
    "DirectoryId": {},
    "DomainControllerId": {},
    "DnsIpAddr": {},
    "VpcId": {},
    "SubnetId": {},
    "AvailabilityZone": {},
    "Status": {},
    "StatusReason": {},
    "LaunchTime": {},
    "StatusLastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_TopicNames">TopicNames</h2>
<!-- backwards compatibility -->
<a id="schematopicnames"></a>
<a id="schema_TopicNames"></a>
<a id="tocStopicnames"></a>
<a id="tocstopicnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EventTopics">EventTopics</h2>
<!-- backwards compatibility -->
<a id="schemaeventtopics"></a>
<a id="schema_EventTopics"></a>
<a id="tocSeventtopics"></a>
<a id="tocseventtopics"></a>

```json
[
  {
    "DirectoryId": {},
    "TopicName": {},
    "TopicArn": {},
    "CreatedDateTime": {},
    "Status": {}
  }
]
```

<h2 id="tocS_LDAPSType">LDAPSType</h2>
<!-- backwards compatibility -->
<a id="schemaldapstype"></a>
<a id="schema_LDAPSType"></a>
<a id="tocSldapstype"></a>
<a id="tocsldapstype"></a>

```json
"Client"
```

<h2 id="tocS_LDAPSSettingsInfo">LDAPSSettingsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaldapssettingsinfo"></a>
<a id="schema_LDAPSSettingsInfo"></a>
<a id="tocSldapssettingsinfo"></a>
<a id="tocsldapssettingsinfo"></a>

```json
[
  {
    "LDAPSStatus": {},
    "LDAPSStatusReason": {},
    "LastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_RegionsDescription">RegionsDescription</h2>
<!-- backwards compatibility -->
<a id="schemaregionsdescription"></a>
<a id="schema_RegionsDescription"></a>
<a id="tocSregionsdescription"></a>
<a id="tocsregionsdescription"></a>

```json
[
  {
    "DirectoryId": {},
    "RegionName": {},
    "RegionType": {},
    "Status": {},
    "VpcSettings": {
      "VpcId": {},
      "SubnetIds": {}
    },
    "DesiredNumberOfDomainControllers": {},
    "LaunchTime": {},
    "StatusLastUpdatedDateTime": {},
    "LastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_DirectoryConfigurationStatus">DirectoryConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationstatus"></a>
<a id="schema_DirectoryConfigurationStatus"></a>
<a id="tocSdirectoryconfigurationstatus"></a>
<a id="tocsdirectoryconfigurationstatus"></a>

```json
"Requested"
```

<h2 id="tocS_SettingEntries">SettingEntries</h2>
<!-- backwards compatibility -->
<a id="schemasettingentries"></a>
<a id="schema_SettingEntries"></a>
<a id="tocSsettingentries"></a>
<a id="tocssettingentries"></a>

```json
[
  {
    "Type": {},
    "Name": {},
    "AllowedValues": {},
    "AppliedValue": {},
    "RequestedValue": {},
    "RequestStatus": {},
    "RequestDetailedStatus": {
      "property1": "Requested",
      "property2": "Requested"
    },
    "RequestStatusMessage": {},
    "LastUpdatedDateTime": {},
    "LastRequestedDateTime": {}
  }
]
```

<h2 id="tocS_SharedDirectories">SharedDirectories</h2>
<!-- backwards compatibility -->
<a id="schemashareddirectories"></a>
<a id="schema_SharedDirectories"></a>
<a id="tocSshareddirectories"></a>
<a id="tocsshareddirectories"></a>

```json
[
  {
    "OwnerAccountId": {},
    "OwnerDirectoryId": {},
    "ShareMethod": {},
    "SharedAccountId": {},
    "SharedDirectoryId": {},
    "ShareStatus": {},
    "ShareNotes": {},
    "CreatedDateTime": {},
    "LastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_SnapshotIds">SnapshotIds</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotids"></a>
<a id="schema_SnapshotIds"></a>
<a id="tocSsnapshotids"></a>
<a id="tocssnapshotids"></a>

```json
[
  "string"
]
```

A list of directory snapshot identifiers.

<h2 id="tocS_Snapshots">Snapshots</h2>
<!-- backwards compatibility -->
<a id="schemasnapshots"></a>
<a id="schema_Snapshots"></a>
<a id="tocSsnapshots"></a>
<a id="tocssnapshots"></a>

```json
[
  {
    "DirectoryId": {},
    "SnapshotId": {},
    "Type": {},
    "Name": {},
    "Status": {},
    "StartTime": {}
  }
]
```

A list of descriptions of directory snapshots.

<h2 id="tocS_TrustIds">TrustIds</h2>
<!-- backwards compatibility -->
<a id="schematrustids"></a>
<a id="schema_TrustIds"></a>
<a id="tocStrustids"></a>
<a id="tocstrustids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Trusts">Trusts</h2>
<!-- backwards compatibility -->
<a id="schematrusts"></a>
<a id="schema_Trusts"></a>
<a id="tocStrusts"></a>
<a id="tocstrusts"></a>

```json
[
  {
    "DirectoryId": {},
    "TrustId": {},
    "RemoteDomainName": {},
    "TrustType": {},
    "TrustDirection": {},
    "TrustState": {},
    "CreatedDateTime": {},
    "LastUpdatedDateTime": {},
    "StateLastUpdatedDateTime": {},
    "TrustStateReason": {},
    "SelectiveAuth": {}
  }
]
```

<h2 id="tocS_UpdateType">UpdateType</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetype"></a>
<a id="schema_UpdateType"></a>
<a id="tocSupdatetype"></a>
<a id="tocsupdatetype"></a>

```json
"OS"
```

<h2 id="tocS_UpdateActivities">UpdateActivities</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactivities"></a>
<a id="schema_UpdateActivities"></a>
<a id="tocSupdateactivities"></a>
<a id="tocsupdateactivities"></a>

```json
[
  {
    "Region": {},
    "Status": {},
    "StatusReason": {},
    "InitiatedBy": {},
    "NewValue": {
      "OSUpdateSettings": {
        "OSVersion": {}
      }
    },
    "PreviousValue": {
      "OSUpdateSettings": {
        "OSVersion": {}
      }
    },
    "StartTime": {},
    "LastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_DesiredNumberOfDomainControllers">DesiredNumberOfDomainControllers</h2>
<!-- backwards compatibility -->
<a id="schemadesirednumberofdomaincontrollers"></a>
<a id="schema_DesiredNumberOfDomainControllers"></a>
<a id="tocSdesirednumberofdomaincontrollers"></a>
<a id="tocsdesirednumberofdomaincontrollers"></a>

```json
2
```

<h2 id="tocS_DirectoryConfigurationSettingAllowedValues">DirectoryConfigurationSettingAllowedValues</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettingallowedvalues"></a>
<a id="schema_DirectoryConfigurationSettingAllowedValues"></a>
<a id="tocSdirectoryconfigurationsettingallowedvalues"></a>
<a id="tocsdirectoryconfigurationsettingallowedvalues"></a>

```json
"string"
```

<h2 id="tocS_DirectoryConfigurationSettingLastRequestedDateTime">DirectoryConfigurationSettingLastRequestedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettinglastrequesteddatetime"></a>
<a id="schema_DirectoryConfigurationSettingLastRequestedDateTime"></a>
<a id="tocSdirectoryconfigurationsettinglastrequesteddatetime"></a>
<a id="tocsdirectoryconfigurationsettinglastrequesteddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DirectoryConfigurationSettingLastUpdatedDateTime">DirectoryConfigurationSettingLastUpdatedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettinglastupdateddatetime"></a>
<a id="schema_DirectoryConfigurationSettingLastUpdatedDateTime"></a>
<a id="tocSdirectoryconfigurationsettinglastupdateddatetime"></a>
<a id="tocsdirectoryconfigurationsettinglastupdateddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DirectoryConfigurationSettingName">DirectoryConfigurationSettingName</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettingname"></a>
<a id="schema_DirectoryConfigurationSettingName"></a>
<a id="tocSdirectoryconfigurationsettingname"></a>
<a id="tocsdirectoryconfigurationsettingname"></a>

```json
"string"
```

<h2 id="tocS_DirectoryConfigurationSettingRequestDetailedStatus">DirectoryConfigurationSettingRequestDetailedStatus</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettingrequestdetailedstatus"></a>
<a id="schema_DirectoryConfigurationSettingRequestDetailedStatus"></a>
<a id="tocSdirectoryconfigurationsettingrequestdetailedstatus"></a>
<a id="tocsdirectoryconfigurationsettingrequestdetailedstatus"></a>

```json
{
  "property1": "Requested",
  "property2": "Requested"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DirectoryConfigurationStatus](#schemadirectoryconfigurationstatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|**additionalProperties**|Requested|
|**additionalProperties**|Updating|
|**additionalProperties**|Updated|
|**additionalProperties**|Failed|
|**additionalProperties**|Default|

<h2 id="tocS_DirectoryConfigurationSettingRequestStatusMessage">DirectoryConfigurationSettingRequestStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettingrequeststatusmessage"></a>
<a id="schema_DirectoryConfigurationSettingRequestStatusMessage"></a>
<a id="tocSdirectoryconfigurationsettingrequeststatusmessage"></a>
<a id="tocsdirectoryconfigurationsettingrequeststatusmessage"></a>

```json
"string"
```

<h2 id="tocS_DirectoryConfigurationSettingType">DirectoryConfigurationSettingType</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettingtype"></a>
<a id="schema_DirectoryConfigurationSettingType"></a>
<a id="tocSdirectoryconfigurationsettingtype"></a>
<a id="tocsdirectoryconfigurationsettingtype"></a>

```json
"string"
```

<h2 id="tocS_DirectoryConfigurationSettingValue">DirectoryConfigurationSettingValue</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconfigurationsettingvalue"></a>
<a id="schema_DirectoryConfigurationSettingValue"></a>
<a id="tocSdirectoryconfigurationsettingvalue"></a>
<a id="tocsdirectoryconfigurationsettingvalue"></a>

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

<h2 id="tocS_UserName">UserName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_UserName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_IpAddrs">IpAddrs</h2>
<!-- backwards compatibility -->
<a id="schemaipaddrs"></a>
<a id="schema_IpAddrs"></a>
<a id="tocSipaddrs"></a>
<a id="tocsipaddrs"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DirectoryConnectSettingsDescription">DirectoryConnectSettingsDescription</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryconnectsettingsdescription"></a>
<a id="schema_DirectoryConnectSettingsDescription"></a>
<a id="tocSdirectoryconnectsettingsdescription"></a>
<a id="tocsdirectoryconnectsettingsdescription"></a>

```json
{
  "VpcId": {},
  "SubnetIds": {},
  "CustomerUserName": {},
  "SecurityGroupId": {},
  "AvailabilityZones": {},
  "ConnectIps": {}
}
```

Contains information about an AD Connector directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|false|none|none|
|SubnetIds|object|false|none|none|
|CustomerUserName|object|false|none|none|
|SecurityGroupId|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|ConnectIps|object|false|none|none|

<h2 id="tocS_DirectoryStage">DirectoryStage</h2>
<!-- backwards compatibility -->
<a id="schemadirectorystage"></a>
<a id="schema_DirectoryStage"></a>
<a id="tocSdirectorystage"></a>
<a id="tocsdirectorystage"></a>

```json
"Requested"
```

<h2 id="tocS_ShareStatus">ShareStatus</h2>
<!-- backwards compatibility -->
<a id="schemasharestatus"></a>
<a id="schema_ShareStatus"></a>
<a id="tocSsharestatus"></a>
<a id="tocssharestatus"></a>

```json
"Shared"
```

<h2 id="tocS_ShareMethod">ShareMethod</h2>
<!-- backwards compatibility -->
<a id="schemasharemethod"></a>
<a id="schema_ShareMethod"></a>
<a id="tocSsharemethod"></a>
<a id="tocssharemethod"></a>

```json
"ORGANIZATIONS"
```

<h2 id="tocS_Notes">Notes</h2>
<!-- backwards compatibility -->
<a id="schemanotes"></a>
<a id="schema_Notes"></a>
<a id="tocSnotes"></a>
<a id="tocsnotes"></a>

```json
"password"
```

<h2 id="tocS_LaunchTime">LaunchTime</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtime"></a>
<a id="schema_LaunchTime"></a>
<a id="tocSlaunchtime"></a>
<a id="tocslaunchtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DirectoryType">DirectoryType</h2>
<!-- backwards compatibility -->
<a id="schemadirectorytype"></a>
<a id="schema_DirectoryType"></a>
<a id="tocSdirectorytype"></a>
<a id="tocsdirectorytype"></a>

```json
"SimpleAD"
```

<h2 id="tocS_DirectoryVpcSettingsDescription">DirectoryVpcSettingsDescription</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryvpcsettingsdescription"></a>
<a id="schema_DirectoryVpcSettingsDescription"></a>
<a id="tocSdirectoryvpcsettingsdescription"></a>
<a id="tocsdirectoryvpcsettingsdescription"></a>

```json
{
  "VpcId": {},
  "SubnetIds": {},
  "SecurityGroupId": {},
  "AvailabilityZones": {}
}
```

Contains information about the directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|false|none|none|
|SubnetIds|object|false|none|none|
|SecurityGroupId|object|false|none|none|
|AvailabilityZones|object|false|none|none|

<h2 id="tocS_RadiusSettings">RadiusSettings</h2>
<!-- backwards compatibility -->
<a id="schemaradiussettings"></a>
<a id="schema_RadiusSettings"></a>
<a id="tocSradiussettings"></a>
<a id="tocsradiussettings"></a>

```json
{
  "RadiusServers": {},
  "RadiusPort": {},
  "RadiusTimeout": {},
  "RadiusRetries": {},
  "SharedSecret": {},
  "AuthenticationProtocol": {},
  "DisplayLabel": {},
  "UseSameUsername": {}
}
```

Contains information about a Remote Authentication Dial In User Service (RADIUS) server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RadiusServers|object|false|none|none|
|RadiusPort|object|false|none|none|
|RadiusTimeout|object|false|none|none|
|RadiusRetries|object|false|none|none|
|SharedSecret|object|false|none|none|
|AuthenticationProtocol|object|false|none|none|
|DisplayLabel|object|false|none|none|
|UseSameUsername|object|false|none|none|

<h2 id="tocS_RadiusStatus">RadiusStatus</h2>
<!-- backwards compatibility -->
<a id="schemaradiusstatus"></a>
<a id="schema_RadiusStatus"></a>
<a id="tocSradiusstatus"></a>
<a id="tocsradiusstatus"></a>

```json
"Creating"
```

<h2 id="tocS_StageReason">StageReason</h2>
<!-- backwards compatibility -->
<a id="schemastagereason"></a>
<a id="schema_StageReason"></a>
<a id="tocSstagereason"></a>
<a id="tocsstagereason"></a>

```json
"string"
```

<h2 id="tocS_SsoEnabled">SsoEnabled</h2>
<!-- backwards compatibility -->
<a id="schemassoenabled"></a>
<a id="schema_SsoEnabled"></a>
<a id="tocSssoenabled"></a>
<a id="tocsssoenabled"></a>

```json
true
```

<h2 id="tocS_OwnerDirectoryDescription">OwnerDirectoryDescription</h2>
<!-- backwards compatibility -->
<a id="schemaownerdirectorydescription"></a>
<a id="schema_OwnerDirectoryDescription"></a>
<a id="tocSownerdirectorydescription"></a>
<a id="tocsownerdirectorydescription"></a>

```json
{
  "DirectoryId": {},
  "AccountId": {},
  "DnsIpAddrs": {},
  "VpcSettings": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupId": {},
    "AvailabilityZones": {}
  },
  "RadiusSettings": {
    "RadiusServers": {},
    "RadiusPort": {},
    "RadiusTimeout": {},
    "RadiusRetries": {},
    "SharedSecret": {},
    "AuthenticationProtocol": {},
    "DisplayLabel": {},
    "UseSameUsername": {}
  },
  "RadiusStatus": {}
}
```

Describes the directory owner account details that have been shared to the directory consumer account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|AccountId|object|false|none|none|
|DnsIpAddrs|object|false|none|none|
|VpcSettings|object|false|none|none|
|RadiusSettings|object|false|none|none|
|RadiusStatus|object|false|none|none|

<h2 id="tocS_RegionsInfo">RegionsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaregionsinfo"></a>
<a id="schema_RegionsInfo"></a>
<a id="tocSregionsinfo"></a>
<a id="tocsregionsinfo"></a>

```json
{
  "PrimaryRegion": {},
  "AdditionalRegions": {}
}
```

Provides information about the Regions that are configured for multi-Region replication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrimaryRegion|object|false|none|none|
|AdditionalRegions|object|false|none|none|

<h2 id="tocS_OSVersion">OSVersion</h2>
<!-- backwards compatibility -->
<a id="schemaosversion"></a>
<a id="schema_OSVersion"></a>
<a id="tocSosversion"></a>
<a id="tocsosversion"></a>

```json
"SERVER_2012"
```

<h2 id="tocS_DirectoryDescription">DirectoryDescription</h2>
<!-- backwards compatibility -->
<a id="schemadirectorydescription"></a>
<a id="schema_DirectoryDescription"></a>
<a id="tocSdirectorydescription"></a>
<a id="tocsdirectorydescription"></a>

```json
{
  "DirectoryId": {},
  "Name": {},
  "ShortName": {},
  "Size": {},
  "Edition": {},
  "Alias": {},
  "AccessUrl": {},
  "Description": {},
  "DnsIpAddrs": {},
  "Stage": {},
  "ShareStatus": {},
  "ShareMethod": {},
  "ShareNotes": {},
  "LaunchTime": {},
  "StageLastUpdatedDateTime": {},
  "Type": {},
  "VpcSettings": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupId": {},
    "AvailabilityZones": {}
  },
  "ConnectSettings": {
    "VpcId": {},
    "SubnetIds": {},
    "CustomerUserName": {},
    "SecurityGroupId": {},
    "AvailabilityZones": {},
    "ConnectIps": {}
  },
  "RadiusSettings": {
    "RadiusServers": {},
    "RadiusPort": {},
    "RadiusTimeout": {},
    "RadiusRetries": {},
    "SharedSecret": {},
    "AuthenticationProtocol": {},
    "DisplayLabel": {},
    "UseSameUsername": {}
  },
  "RadiusStatus": {},
  "StageReason": {},
  "SsoEnabled": {},
  "DesiredNumberOfDomainControllers": {},
  "OwnerDirectoryDescription": {
    "DirectoryId": {},
    "AccountId": {},
    "DnsIpAddrs": {},
    "VpcSettings": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupId": {},
      "AvailabilityZones": {}
    },
    "RadiusSettings": {
      "RadiusServers": {},
      "RadiusPort": {},
      "RadiusTimeout": {},
      "RadiusRetries": {},
      "SharedSecret": {},
      "AuthenticationProtocol": {},
      "DisplayLabel": {},
      "UseSameUsername": {}
    },
    "RadiusStatus": {}
  },
  "RegionsInfo": {
    "PrimaryRegion": {},
    "AdditionalRegions": {}
  },
  "OsVersion": {}
}
```

Contains information about an Directory Service directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|Name|object|false|none|none|
|ShortName|object|false|none|none|
|Size|object|false|none|none|
|Edition|object|false|none|none|
|Alias|object|false|none|none|
|AccessUrl|object|false|none|none|
|Description|object|false|none|none|
|DnsIpAddrs|object|false|none|none|
|Stage|object|false|none|none|
|ShareStatus|object|false|none|none|
|ShareMethod|object|false|none|none|
|ShareNotes|object|false|none|none|
|LaunchTime|object|false|none|none|
|StageLastUpdatedDateTime|object|false|none|none|
|Type|object|false|none|none|
|VpcSettings|object|false|none|none|
|ConnectSettings|object|false|none|none|
|RadiusSettings|object|false|none|none|
|RadiusStatus|object|false|none|none|
|StageReason|object|false|none|none|
|SsoEnabled|object|false|none|none|
|DesiredNumberOfDomainControllers|object|false|none|none|
|OwnerDirectoryDescription|object|false|none|none|
|RegionsInfo|object|false|none|none|
|OsVersion|object|false|none|none|

<h2 id="tocS_DirectoryLimits">DirectoryLimits</h2>
<!-- backwards compatibility -->
<a id="schemadirectorylimits"></a>
<a id="schema_DirectoryLimits"></a>
<a id="tocSdirectorylimits"></a>
<a id="tocsdirectorylimits"></a>

```json
{
  "CloudOnlyDirectoriesLimit": {},
  "CloudOnlyDirectoriesCurrentCount": {},
  "CloudOnlyDirectoriesLimitReached": {},
  "CloudOnlyMicrosoftADLimit": {},
  "CloudOnlyMicrosoftADCurrentCount": {},
  "CloudOnlyMicrosoftADLimitReached": {},
  "ConnectedDirectoriesLimit": {},
  "ConnectedDirectoriesCurrentCount": {},
  "ConnectedDirectoriesLimitReached": {}
}
```

Contains directory limit information for a Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudOnlyDirectoriesLimit|object|false|none|none|
|CloudOnlyDirectoriesCurrentCount|object|false|none|none|
|CloudOnlyDirectoriesLimitReached|object|false|none|none|
|CloudOnlyMicrosoftADLimit|object|false|none|none|
|CloudOnlyMicrosoftADCurrentCount|object|false|none|none|
|CloudOnlyMicrosoftADLimitReached|object|false|none|none|
|ConnectedDirectoriesLimit|object|false|none|none|
|ConnectedDirectoriesCurrentCount|object|false|none|none|
|ConnectedDirectoriesLimitReached|object|false|none|none|

<h2 id="tocS_IpAddr">IpAddr</h2>
<!-- backwards compatibility -->
<a id="schemaipaddr"></a>
<a id="schema_IpAddr"></a>
<a id="tocSipaddr"></a>
<a id="tocsipaddr"></a>

```json
"string"
```

<h2 id="tocS_DomainControllerId">DomainControllerId</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontrollerid"></a>
<a id="schema_DomainControllerId"></a>
<a id="tocSdomaincontrollerid"></a>
<a id="tocsdomaincontrollerid"></a>

```json
"string"
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

<h2 id="tocS_DomainControllerStatus">DomainControllerStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontrollerstatus"></a>
<a id="schema_DomainControllerStatus"></a>
<a id="tocSdomaincontrollerstatus"></a>
<a id="tocsdomaincontrollerstatus"></a>

```json
"Creating"
```

<h2 id="tocS_DomainControllerStatusReason">DomainControllerStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontrollerstatusreason"></a>
<a id="schema_DomainControllerStatusReason"></a>
<a id="tocSdomaincontrollerstatusreason"></a>
<a id="tocsdomaincontrollerstatusreason"></a>

```json
"string"
```

<h2 id="tocS_DomainController">DomainController</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontroller"></a>
<a id="schema_DomainController"></a>
<a id="tocSdomaincontroller"></a>
<a id="tocsdomaincontroller"></a>

```json
{
  "DirectoryId": {},
  "DomainControllerId": {},
  "DnsIpAddr": {},
  "VpcId": {},
  "SubnetId": {},
  "AvailabilityZone": {},
  "Status": {},
  "StatusReason": {},
  "LaunchTime": {},
  "StatusLastUpdatedDateTime": {}
}
```

Contains information about the domain controllers for a specified directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|DomainControllerId|object|false|none|none|
|DnsIpAddr|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetId|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|LaunchTime|object|false|none|none|
|StatusLastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_EndDateTime">EndDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaenddatetime"></a>
<a id="schema_EndDateTime"></a>
<a id="tocSenddatetime"></a>
<a id="tocsenddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_TopicArn">TopicArn</h2>
<!-- backwards compatibility -->
<a id="schematopicarn"></a>
<a id="schema_TopicArn"></a>
<a id="tocStopicarn"></a>
<a id="tocstopicarn"></a>

```json
"string"
```

<h2 id="tocS_TopicStatus">TopicStatus</h2>
<!-- backwards compatibility -->
<a id="schematopicstatus"></a>
<a id="schema_TopicStatus"></a>
<a id="tocStopicstatus"></a>
<a id="tocstopicstatus"></a>

```json
"Registered"
```

<h2 id="tocS_EventTopic">EventTopic</h2>
<!-- backwards compatibility -->
<a id="schemaeventtopic"></a>
<a id="schema_EventTopic"></a>
<a id="tocSeventtopic"></a>
<a id="tocseventtopic"></a>

```json
{
  "DirectoryId": {},
  "TopicName": {},
  "TopicArn": {},
  "CreatedDateTime": {},
  "Status": {}
}
```

Information about Amazon SNS topic and Directory Service directory associations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|TopicName|object|false|none|none|
|TopicArn|object|false|none|none|
|CreatedDateTime|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_SnapshotLimits">SnapshotLimits</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotlimits"></a>
<a id="schema_SnapshotLimits"></a>
<a id="tocSsnapshotlimits"></a>
<a id="tocssnapshotlimits"></a>

```json
{
  "ManualSnapshotsLimit": {},
  "ManualSnapshotsCurrentCount": {},
  "ManualSnapshotsLimitReached": {}
}
```

Contains manual snapshot limit information for a directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManualSnapshotsLimit|object|false|none|none|
|ManualSnapshotsCurrentCount|object|false|none|none|
|ManualSnapshotsLimitReached|object|false|none|none|

<h2 id="tocS_InitiatedBy">InitiatedBy</h2>
<!-- backwards compatibility -->
<a id="schemainitiatedby"></a>
<a id="schema_InitiatedBy"></a>
<a id="tocSinitiatedby"></a>
<a id="tocsinitiatedby"></a>

```json
"string"
```

<h2 id="tocS_IpRoute">IpRoute</h2>
<!-- backwards compatibility -->
<a id="schemaiproute"></a>
<a id="schema_IpRoute"></a>
<a id="tocSiproute"></a>
<a id="tocsiproute"></a>

```json
{
  "CidrIp": {},
  "Description": {}
}
```

IP address block. This is often the address block of the DNS server used for your self-managed domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CidrIp|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_IpRouteStatusMsg">IpRouteStatusMsg</h2>
<!-- backwards compatibility -->
<a id="schemaiproutestatusmsg"></a>
<a id="schema_IpRouteStatusMsg"></a>
<a id="tocSiproutestatusmsg"></a>
<a id="tocsiproutestatusmsg"></a>

```json
"Adding"
```

<h2 id="tocS_IpRouteStatusReason">IpRouteStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaiproutestatusreason"></a>
<a id="schema_IpRouteStatusReason"></a>
<a id="tocSiproutestatusreason"></a>
<a id="tocsiproutestatusreason"></a>

```json
"string"
```

<h2 id="tocS_IpRouteInfo">IpRouteInfo</h2>
<!-- backwards compatibility -->
<a id="schemaiprouteinfo"></a>
<a id="schema_IpRouteInfo"></a>
<a id="tocSiprouteinfo"></a>
<a id="tocsiprouteinfo"></a>

```json
{
  "DirectoryId": {},
  "CidrIp": {},
  "IpRouteStatusMsg": {},
  "AddedDateTime": {},
  "IpRouteStatusReason": {},
  "Description": {}
}
```

Information about one or more IP address blocks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|CidrIp|object|false|none|none|
|IpRouteStatusMsg|object|false|none|none|
|AddedDateTime|object|false|none|none|
|IpRouteStatusReason|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_IpRoutesInfo">IpRoutesInfo</h2>
<!-- backwards compatibility -->
<a id="schemaiproutesinfo"></a>
<a id="schema_IpRoutesInfo"></a>
<a id="tocSiproutesinfo"></a>
<a id="tocsiproutesinfo"></a>

```json
[
  {
    "DirectoryId": {},
    "CidrIp": {},
    "IpRouteStatusMsg": {},
    "AddedDateTime": {},
    "IpRouteStatusReason": {},
    "Description": {}
  }
]
```

<h2 id="tocS_LDAPSStatus">LDAPSStatus</h2>
<!-- backwards compatibility -->
<a id="schemaldapsstatus"></a>
<a id="schema_LDAPSStatus"></a>
<a id="tocSldapsstatus"></a>
<a id="tocsldapsstatus"></a>

```json
"Enabling"
```

<h2 id="tocS_LDAPSStatusReason">LDAPSStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaldapsstatusreason"></a>
<a id="schema_LDAPSStatusReason"></a>
<a id="tocSldapsstatusreason"></a>
<a id="tocsldapsstatusreason"></a>

```json
"string"
```

<h2 id="tocS_LDAPSSettingInfo">LDAPSSettingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaldapssettinginfo"></a>
<a id="schema_LDAPSSettingInfo"></a>
<a id="tocSldapssettinginfo"></a>
<a id="tocsldapssettinginfo"></a>

```json
{
  "LDAPSStatus": {},
  "LDAPSStatusReason": {},
  "LastUpdatedDateTime": {}
}
```

Contains general information about the LDAPS settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LDAPSStatus|object|false|none|none|
|LDAPSStatusReason|object|false|none|none|
|LastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_LdifContent">LdifContent</h2>
<!-- backwards compatibility -->
<a id="schemaldifcontent"></a>
<a id="schema_LdifContent"></a>
<a id="tocSldifcontent"></a>
<a id="tocsldifcontent"></a>

```json
"string"
```

<h2 id="tocS_LogSubscriptions">LogSubscriptions</h2>
<!-- backwards compatibility -->
<a id="schemalogsubscriptions"></a>
<a id="schema_LogSubscriptions"></a>
<a id="tocSlogsubscriptions"></a>
<a id="tocslogsubscriptions"></a>

```json
[
  {
    "DirectoryId": {},
    "LogGroupName": {},
    "SubscriptionCreatedDateTime": {}
  }
]
```

<h2 id="tocS_SchemaExtensionsInfo">SchemaExtensionsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaschemaextensionsinfo"></a>
<a id="schema_SchemaExtensionsInfo"></a>
<a id="tocSschemaextensionsinfo"></a>
<a id="tocsschemaextensionsinfo"></a>

```json
[
  {
    "DirectoryId": {},
    "SchemaExtensionId": {},
    "Description": {},
    "SchemaExtensionStatus": {},
    "SchemaExtensionStatusReason": {},
    "StartDateTime": {},
    "EndDateTime": {}
  }
]
```

<h2 id="tocS_SubscriptionCreatedDateTime">SubscriptionCreatedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncreateddatetime"></a>
<a id="schema_SubscriptionCreatedDateTime"></a>
<a id="tocSsubscriptioncreateddatetime"></a>
<a id="tocssubscriptioncreateddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LogSubscription">LogSubscription</h2>
<!-- backwards compatibility -->
<a id="schemalogsubscription"></a>
<a id="schema_LogSubscription"></a>
<a id="tocSlogsubscription"></a>
<a id="tocslogsubscription"></a>

```json
{
  "DirectoryId": {},
  "LogGroupName": {},
  "SubscriptionCreatedDateTime": {}
}
```

Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|LogGroupName|object|false|none|none|
|SubscriptionCreatedDateTime|object|false|none|none|

<h2 id="tocS_ManualSnapshotsLimitReached">ManualSnapshotsLimitReached</h2>
<!-- backwards compatibility -->
<a id="schemamanualsnapshotslimitreached"></a>
<a id="schema_ManualSnapshotsLimitReached"></a>
<a id="tocSmanualsnapshotslimitreached"></a>
<a id="tocsmanualsnapshotslimitreached"></a>

```json
true
```

<h2 id="tocS_OSUpdateSettings">OSUpdateSettings</h2>
<!-- backwards compatibility -->
<a id="schemaosupdatesettings"></a>
<a id="schema_OSUpdateSettings"></a>
<a id="tocSosupdatesettings"></a>
<a id="tocsosupdatesettings"></a>

```json
{
  "OSVersion": {}
}
```

 OS version that the directory needs to be updated to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OSVersion|object|false|none|none|

<h2 id="tocS_PortNumber">PortNumber</h2>
<!-- backwards compatibility -->
<a id="schemaportnumber"></a>
<a id="schema_PortNumber"></a>
<a id="tocSportnumber"></a>
<a id="tocsportnumber"></a>

```json
1025
```

<h2 id="tocS_RadiusAuthenticationProtocol">RadiusAuthenticationProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaradiusauthenticationprotocol"></a>
<a id="schema_RadiusAuthenticationProtocol"></a>
<a id="tocSradiusauthenticationprotocol"></a>
<a id="tocsradiusauthenticationprotocol"></a>

```json
"PAP"
```

<h2 id="tocS_RadiusDisplayLabel">RadiusDisplayLabel</h2>
<!-- backwards compatibility -->
<a id="schemaradiusdisplaylabel"></a>
<a id="schema_RadiusDisplayLabel"></a>
<a id="tocSradiusdisplaylabel"></a>
<a id="tocsradiusdisplaylabel"></a>

```json
"string"
```

<h2 id="tocS_RadiusRetries">RadiusRetries</h2>
<!-- backwards compatibility -->
<a id="schemaradiusretries"></a>
<a id="schema_RadiusRetries"></a>
<a id="tocSradiusretries"></a>
<a id="tocsradiusretries"></a>

```json
0
```

<h2 id="tocS_Servers">Servers</h2>
<!-- backwards compatibility -->
<a id="schemaservers"></a>
<a id="schema_Servers"></a>
<a id="tocSservers"></a>
<a id="tocsservers"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RadiusTimeout">RadiusTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaradiustimeout"></a>
<a id="schema_RadiusTimeout"></a>
<a id="tocSradiustimeout"></a>
<a id="tocsradiustimeout"></a>

```json
1
```

<h2 id="tocS_RadiusSharedSecret">RadiusSharedSecret</h2>
<!-- backwards compatibility -->
<a id="schemaradiussharedsecret"></a>
<a id="schema_RadiusSharedSecret"></a>
<a id="tocSradiussharedsecret"></a>
<a id="tocsradiussharedsecret"></a>

```json
"password"
```

<h2 id="tocS_UseSameUsername">UseSameUsername</h2>
<!-- backwards compatibility -->
<a id="schemausesameusername"></a>
<a id="schema_UseSameUsername"></a>
<a id="tocSusesameusername"></a>
<a id="tocsusesameusername"></a>

```json
true
```

<h2 id="tocS_RegionType">RegionType</h2>
<!-- backwards compatibility -->
<a id="schemaregiontype"></a>
<a id="schema_RegionType"></a>
<a id="tocSregiontype"></a>
<a id="tocsregiontype"></a>

```json
"Primary"
```

<h2 id="tocS_StateLastUpdatedDateTime">StateLastUpdatedDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastatelastupdateddatetime"></a>
<a id="schema_StateLastUpdatedDateTime"></a>
<a id="tocSstatelastupdateddatetime"></a>
<a id="tocsstatelastupdateddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RegionDescription">RegionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaregiondescription"></a>
<a id="schema_RegionDescription"></a>
<a id="tocSregiondescription"></a>
<a id="tocsregiondescription"></a>

```json
{
  "DirectoryId": {},
  "RegionName": {},
  "RegionType": {},
  "Status": {},
  "VpcSettings": {
    "VpcId": {},
    "SubnetIds": {}
  },
  "DesiredNumberOfDomainControllers": {},
  "LaunchTime": {},
  "StatusLastUpdatedDateTime": {},
  "LastUpdatedDateTime": {}
}
```

The replicated Region information for a directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|RegionName|object|false|none|none|
|RegionType|object|false|none|none|
|Status|object|false|none|none|
|VpcSettings|[DirectoryVpcSettings](#schemadirectoryvpcsettings)|false|none|Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.|
|DesiredNumberOfDomainControllers|object|false|none|none|
|LaunchTime|object|false|none|none|
|StatusLastUpdatedDateTime|object|false|none|none|
|LastUpdatedDateTime|object|false|none|none|

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

<h2 id="tocS_RequestId">RequestId</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestId"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

```json
"string"
```

The Amazon Web Services request identifier.

<h2 id="tocS_UserPassword">UserPassword</h2>
<!-- backwards compatibility -->
<a id="schemauserpassword"></a>
<a id="schema_UserPassword"></a>
<a id="tocSuserpassword"></a>
<a id="tocsuserpassword"></a>

```json
"password"
```

<h2 id="tocS_SchemaExtensionStatus">SchemaExtensionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaschemaextensionstatus"></a>
<a id="schema_SchemaExtensionStatus"></a>
<a id="tocSschemaextensionstatus"></a>
<a id="tocsschemaextensionstatus"></a>

```json
"Initializing"
```

<h2 id="tocS_SchemaExtensionStatusReason">SchemaExtensionStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaschemaextensionstatusreason"></a>
<a id="schema_SchemaExtensionStatusReason"></a>
<a id="tocSschemaextensionstatusreason"></a>
<a id="tocsschemaextensionstatusreason"></a>

```json
"string"
```

<h2 id="tocS_StartDateTime">StartDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastartdatetime"></a>
<a id="schema_StartDateTime"></a>
<a id="tocSstartdatetime"></a>
<a id="tocsstartdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SchemaExtensionInfo">SchemaExtensionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaschemaextensioninfo"></a>
<a id="schema_SchemaExtensionInfo"></a>
<a id="tocSschemaextensioninfo"></a>
<a id="tocsschemaextensioninfo"></a>

```json
{
  "DirectoryId": {},
  "SchemaExtensionId": {},
  "Description": {},
  "SchemaExtensionStatus": {},
  "SchemaExtensionStatusReason": {},
  "StartDateTime": {},
  "EndDateTime": {}
}
```

Information about a schema extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|SchemaExtensionId|object|false|none|none|
|Description|object|false|none|none|
|SchemaExtensionStatus|object|false|none|none|
|SchemaExtensionStatusReason|object|false|none|none|
|StartDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|

<h2 id="tocS_Server">Server</h2>
<!-- backwards compatibility -->
<a id="schemaserver"></a>
<a id="schema_Server"></a>
<a id="tocSserver"></a>
<a id="tocsserver"></a>

```json
"string"
```

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Contains information about the configurable settings for a directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_SettingEntry">SettingEntry</h2>
<!-- backwards compatibility -->
<a id="schemasettingentry"></a>
<a id="schema_SettingEntry"></a>
<a id="tocSsettingentry"></a>
<a id="tocssettingentry"></a>

```json
{
  "Type": {},
  "Name": {},
  "AllowedValues": {},
  "AppliedValue": {},
  "RequestedValue": {},
  "RequestStatus": {},
  "RequestDetailedStatus": {
    "property1": "Requested",
    "property2": "Requested"
  },
  "RequestStatusMessage": {},
  "LastUpdatedDateTime": {},
  "LastRequestedDateTime": {}
}
```

Contains information about the specified configurable setting for a directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Name|object|false|none|none|
|AllowedValues|object|false|none|none|
|AppliedValue|object|false|none|none|
|RequestedValue|object|false|none|none|
|RequestStatus|object|false|none|none|
|RequestDetailedStatus|object|false|none|none|
|RequestStatusMessage|object|false|none|none|
|LastUpdatedDateTime|object|false|none|none|
|LastRequestedDateTime|object|false|none|none|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ShareTarget">ShareTarget</h2>
<!-- backwards compatibility -->
<a id="schemasharetarget"></a>
<a id="schema_ShareTarget"></a>
<a id="tocSsharetarget"></a>
<a id="tocssharetarget"></a>

```json
{
  "Id": {},
  "Type": {}
}
```

Identifier that contains details about the directory consumer account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"string"
```

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_SnapshotType">SnapshotType</h2>
<!-- backwards compatibility -->
<a id="schemasnapshottype"></a>
<a id="schema_SnapshotType"></a>
<a id="tocSsnapshottype"></a>
<a id="tocssnapshottype"></a>

```json
"Auto"
```

<h2 id="tocS_SnapshotStatus">SnapshotStatus</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotstatus"></a>
<a id="schema_SnapshotStatus"></a>
<a id="tocSsnapshotstatus"></a>
<a id="tocssnapshotstatus"></a>

```json
"Creating"
```

<h2 id="tocS_StartTime">StartTime</h2>
<!-- backwards compatibility -->
<a id="schemastarttime"></a>
<a id="schema_StartTime"></a>
<a id="tocSstarttime"></a>
<a id="tocsstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "DirectoryId": {},
  "SnapshotId": {},
  "Type": {},
  "Name": {},
  "Status": {},
  "StartTime": {}
}
```

Describes a directory snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|SnapshotId|object|false|none|none|
|Type|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|StartTime|object|false|none|none|

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

Metadata assigned to a directory consisting of a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TrustState">TrustState</h2>
<!-- backwards compatibility -->
<a id="schematruststate"></a>
<a id="schema_TrustState"></a>
<a id="tocStruststate"></a>
<a id="tocstruststate"></a>

```json
"Creating"
```

<h2 id="tocS_TrustStateReason">TrustStateReason</h2>
<!-- backwards compatibility -->
<a id="schematruststatereason"></a>
<a id="schema_TrustStateReason"></a>
<a id="tocStruststatereason"></a>
<a id="tocstruststatereason"></a>

```json
"string"
```

<h2 id="tocS_Trust">Trust</h2>
<!-- backwards compatibility -->
<a id="schematrust"></a>
<a id="schema_Trust"></a>
<a id="tocStrust"></a>
<a id="tocstrust"></a>

```json
{
  "DirectoryId": {},
  "TrustId": {},
  "RemoteDomainName": {},
  "TrustType": {},
  "TrustDirection": {},
  "TrustState": {},
  "CreatedDateTime": {},
  "LastUpdatedDateTime": {},
  "StateLastUpdatedDateTime": {},
  "TrustStateReason": {},
  "SelectiveAuth": {}
}
```

Describes a trust relationship between an Managed Microsoft AD directory and an external domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|TrustId|object|false|none|none|
|RemoteDomainName|object|false|none|none|
|TrustType|object|false|none|none|
|TrustDirection|object|false|none|none|
|TrustState|object|false|none|none|
|CreatedDateTime|object|false|none|none|
|LastUpdatedDateTime|object|false|none|none|
|StateLastUpdatedDateTime|object|false|none|none|
|TrustStateReason|object|false|none|none|
|SelectiveAuth|object|false|none|none|

<h2 id="tocS_UnshareTarget">UnshareTarget</h2>
<!-- backwards compatibility -->
<a id="schemaunsharetarget"></a>
<a id="schema_UnshareTarget"></a>
<a id="tocSunsharetarget"></a>
<a id="tocsunsharetarget"></a>

```json
{
  "Id": {},
  "Type": {}
}
```

Identifier that contains details about the directory consumer account with whom the directory is being unshared.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_UpdateInfoEntry">UpdateInfoEntry</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinfoentry"></a>
<a id="schema_UpdateInfoEntry"></a>
<a id="tocSupdateinfoentry"></a>
<a id="tocsupdateinfoentry"></a>

```json
{
  "Region": {},
  "Status": {},
  "StatusReason": {},
  "InitiatedBy": {},
  "NewValue": {
    "OSUpdateSettings": {
      "OSVersion": {}
    }
  },
  "PreviousValue": {
    "OSUpdateSettings": {
      "OSVersion": {}
    }
  },
  "StartTime": {},
  "LastUpdatedDateTime": {}
}
```

 An entry of update information related to a requested update type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|InitiatedBy|object|false|none|none|
|NewValue|object|false|none|none|
|PreviousValue|object|false|none|none|
|StartTime|object|false|none|none|
|LastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_UpdateStatus">UpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatus"></a>
<a id="schema_UpdateStatus"></a>
<a id="tocSupdatestatus"></a>
<a id="tocsupdatestatus"></a>

```json
"Updated"
```

<h2 id="tocS_UpdateStatusReason">UpdateStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatusreason"></a>
<a id="schema_UpdateStatusReason"></a>
<a id="tocSupdatestatusreason"></a>
<a id="tocsupdatestatusreason"></a>

```json
"string"
```

<h2 id="tocS_UpdateValue">UpdateValue</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevalue"></a>
<a id="schema_UpdateValue"></a>
<a id="tocSupdatevalue"></a>
<a id="tocsupdatevalue"></a>

```json
{
  "OSUpdateSettings": {
    "OSVersion": {}
  }
}
```

 The value for a given type of <code>UpdateSettings</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OSUpdateSettings|object|false|none|none|
