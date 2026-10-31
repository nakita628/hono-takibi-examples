<h1 id="amazon-workspaces">Amazon WorkSpaces v2015-04-08</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops for your users, known as <i>WorkSpaces</i>. WorkSpaces eliminates the need to procure and deploy hardware or install complex software. You can quickly add or remove users as your needs change. Users can access their virtual desktops from multiple devices or web browsers.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the WorkSpaces service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see <a href="https://docs.aws.amazon.com/general/latest/gr/wsp.html">WorkSpaces endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>You can also manage your WorkSpaces resources using the WorkSpaces console, Command Line Interface (CLI), and SDKs. For more information about administering WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. For more information about using the Amazon WorkSpaces client application or web browser to access provisioned WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/userguide/">Amazon WorkSpaces User Guide</a>. For more information about using the CLI to manage your WorkSpaces resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces/index.html">WorkSpaces section of the CLI Reference</a>.</p>

Base URLs:

* <a href="http://workspaces.us-east-1.amazonaws.com">http://workspaces.us-east-1.amazonaws.com</a> - The Amazon WorkSpaces multi-region endpoint

* <a href="https://workspaces.us-east-1.amazonaws.com">https://workspaces.us-east-1.amazonaws.com</a> - The Amazon WorkSpaces multi-region endpoint

* <a href="http://workspaces.cn-north-1.amazonaws.com.cn">http://workspaces.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkSpaces endpoint for China (Beijing) and China (Ningxia)

* <a href="https://workspaces.cn-north-1.amazonaws.com.cn">https://workspaces.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkSpaces endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/workspaces/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-workspaces-default">Default</h1>

## AssociateConnectionAlias

<a id="opIdAssociateConnectionAlias"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.AssociateConnectionAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.AssociateConnectionAlias' \
  -d '{
    "AliasId": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.AssociateConnectionAlias`

<p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>

> Body parameter

```json
{
  "AliasId": {},
  "ResourceId": {}
}
```

<h3 id="associateconnectionalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AssociateConnectionAliasRequest](#schemaassociateconnectionaliasrequest)|true|none|
|» AliasId|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.AssociateConnectionAlias|

> Example responses

> 200 Response

```json
{
  "ConnectionIdentifier": {}
}
```

> 480 Response

```json
null
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

<h3 id="associateconnectionalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateConnectionAliasResult](#schemaassociateconnectionaliasresult)|
|480|480|ResourceAssociatedException|[ResourceAssociatedException](#schemaresourceassociatedexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|484|484|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|485|485|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateIpGroups

<a id="opIdAssociateIpGroups"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.AssociateIpGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.AssociateIpGroups' \
  -d '{
    "DirectoryId": {},
    "GroupIds": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.AssociateIpGroups`

Associates the specified IP access control group with the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "GroupIds": {}
}
```

<h3 id="associateipgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AssociateIpGroupsRequest](#schemaassociateipgroupsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» GroupIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.AssociateIpGroups|

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

<h3 id="associateipgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateIpGroupsResult](#schemaassociateipgroupsresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AuthorizeIpRules

<a id="opIdAuthorizeIpRules"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.AuthorizeIpRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.AuthorizeIpRules' \
  -d '{
    "GroupId": {},
    "UserRules": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.AuthorizeIpRules`

<p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>

> Body parameter

```json
{
  "GroupId": {},
  "UserRules": {}
}
```

<h3 id="authorizeiprules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AuthorizeIpRulesRequest](#schemaauthorizeiprulesrequest)|true|none|
|» GroupId|body|object|true|none|
|» UserRules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.AuthorizeIpRules|

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

<h3 id="authorizeiprules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AuthorizeIpRulesResult](#schemaauthorizeiprulesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopyWorkspaceImage

<a id="opIdCopyWorkspaceImage"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CopyWorkspaceImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CopyWorkspaceImage' \
  -d '{
    "Name": {},
    "Description": {},
    "SourceImageId": {},
    "SourceRegion": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CopyWorkspaceImage`

<p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "SourceImageId": {},
  "SourceRegion": {},
  "Tags": {}
}
```

<h3 id="copyworkspaceimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CopyWorkspaceImageRequest](#schemacopyworkspaceimagerequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» SourceImageId|body|object|true|none|
|» SourceRegion|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CopyWorkspaceImage|

> Example responses

> 200 Response

```json
{
  "ImageId": {}
}
```

> 480 Response

```json
null
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

<h3 id="copyworkspaceimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyWorkspaceImageResult](#schemacopyworkspaceimageresult)|
|480|480|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnectClientAddIn

<a id="opIdCreateConnectClientAddIn"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateConnectClientAddIn' \
  -d '{
    "ResourceId": {},
    "Name": {},
    "URL": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn`

<p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>

> Body parameter

```json
{
  "ResourceId": {},
  "Name": {},
  "URL": {}
}
```

<h3 id="createconnectclientaddin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateConnectClientAddInRequest](#schemacreateconnectclientaddinrequest)|true|none|
|» ResourceId|body|object|true|none|
|» Name|body|object|true|none|
|» URL|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateConnectClientAddIn|

> Example responses

> 200 Response

```json
{
  "AddInId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createconnectclientaddin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectClientAddInResult](#schemacreateconnectclientaddinresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceCreationFailedException|[ResourceCreationFailedException](#schemaresourcecreationfailedexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnectionAlias

<a id="opIdCreateConnectionAlias"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateConnectionAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateConnectionAlias' \
  -d '{
    "ConnectionString": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateConnectionAlias`

Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

> Body parameter

```json
{
  "ConnectionString": {},
  "Tags": {}
}
```

<h3 id="createconnectionalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateConnectionAliasRequest](#schemacreateconnectionaliasrequest)|true|none|
|» ConnectionString|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateConnectionAlias|

> Example responses

> 200 Response

```json
{
  "AliasId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createconnectionalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectionAliasResult](#schemacreateconnectionaliasresult)|
|480|480|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|485|485|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIpGroup

<a id="opIdCreateIpGroup"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateIpGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateIpGroup' \
  -d '{
    "GroupName": {},
    "GroupDesc": {},
    "UserRules": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateIpGroup`

<p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>

> Body parameter

```json
{
  "GroupName": {},
  "GroupDesc": {},
  "UserRules": {},
  "Tags": {}
}
```

<h3 id="createipgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateIpGroupRequest](#schemacreateipgrouprequest)|true|none|
|» GroupName|body|object|true|none|
|» GroupDesc|body|object|false|none|
|» UserRules|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateIpGroup|

> Example responses

> 200 Response

```json
{
  "GroupId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createipgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIpGroupResult](#schemacreateipgroupresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|ResourceCreationFailedException|[ResourceCreationFailedException](#schemaresourcecreationfailedexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStandbyWorkspaces

<a id="opIdCreateStandbyWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateStandbyWorkspaces' \
  -d '{
    "PrimaryRegion": {},
    "StandbyWorkspaces": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces`

Creates a standby WorkSpace in a secondary Region.

> Body parameter

```json
{
  "PrimaryRegion": {},
  "StandbyWorkspaces": {}
}
```

<h3 id="createstandbyworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateStandbyWorkspacesRequest](#schemacreatestandbyworkspacesrequest)|true|none|
|» PrimaryRegion|body|object|true|none|
|» StandbyWorkspaces|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateStandbyWorkspaces|

> Example responses

> 200 Response

```json
{
  "FailedStandbyRequests": {},
  "PendingStandbyRequests": {}
}
```

> 480 Response

```json
null
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

<h3 id="createstandbyworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStandbyWorkspacesResult](#schemacreatestandbyworkspacesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTags

<a id="opIdCreateTags"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateTags' \
  -d '{
    "ResourceId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateTags`

Creates the specified tags for the specified WorkSpaces resource.

> Body parameter

```json
{
  "ResourceId": {},
  "Tags": {}
}
```

<h3 id="createtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateTagsRequest](#schemacreatetagsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateTags|

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

<h3 id="createtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTagsResult](#schemacreatetagsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUpdatedWorkspaceImage

<a id="opIdCreateUpdatedWorkspaceImage"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateUpdatedWorkspaceImage' \
  -d '{
    "Name": {},
    "Description": {},
    "SourceImageId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage`

<p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "SourceImageId": {},
  "Tags": {}
}
```

<h3 id="createupdatedworkspaceimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateUpdatedWorkspaceImageRequest](#schemacreateupdatedworkspaceimagerequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|true|none|
|» SourceImageId|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateUpdatedWorkspaceImage|

> Example responses

> 200 Response

```json
{
  "ImageId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createupdatedworkspaceimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUpdatedWorkspaceImageResult](#schemacreateupdatedworkspaceimageresult)|
|480|480|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|484|484|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkspaceBundle

<a id="opIdCreateWorkspaceBundle"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateWorkspaceBundle' \
  -d '{
    "BundleName": {},
    "BundleDescription": {},
    "ImageId": {},
    "ComputeType": {
      "Name": {}
    },
    "UserStorage": {
      "Capacity": {}
    },
    "RootStorage": {
      "Capacity": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle`

Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.

> Body parameter

```json
{
  "BundleName": {},
  "BundleDescription": {},
  "ImageId": {},
  "ComputeType": {
    "Name": {}
  },
  "UserStorage": {
    "Capacity": {}
  },
  "RootStorage": {
    "Capacity": {}
  },
  "Tags": {}
}
```

<h3 id="createworkspacebundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateWorkspaceBundleRequest](#schemacreateworkspacebundlerequest)|true|none|
|» BundleName|body|object|true|none|
|» BundleDescription|body|object|true|none|
|» ImageId|body|object|true|none|
|» ComputeType|body|[ComputeType](#schemacomputetype)|true|Describes the compute type of the bundle.|
|» UserStorage|body|[UserStorage](#schemauserstorage)|true|Describes the user volume for a WorkSpace bundle.|
|» RootStorage|body|[RootStorage](#schemarootstorage)|false|Describes the root volume for a WorkSpace bundle.|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateWorkspaceBundle|

> Example responses

> 200 Response

```json
{
  "WorkspaceBundle": {
    "BundleId": {},
    "Name": {},
    "Owner": {},
    "Description": {},
    "ImageId": {},
    "RootStorage": {
      "Capacity": {}
    },
    "UserStorage": {
      "Capacity": {}
    },
    "ComputeType": {
      "Name": {}
    },
    "LastUpdatedTime": {},
    "CreationTime": {},
    "State": {},
    "BundleType": {}
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

<h3 id="createworkspacebundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkspaceBundleResult](#schemacreateworkspacebundleresult)|
|480|480|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkspaceImage

<a id="opIdCreateWorkspaceImage"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateWorkspaceImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateWorkspaceImage' \
  -d '{
    "Name": {},
    "Description": {},
    "WorkspaceId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateWorkspaceImage`

Creates a new WorkSpace image from an existing WorkSpace.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "WorkspaceId": {},
  "Tags": {}
}
```

<h3 id="createworkspaceimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateWorkspaceImageRequest](#schemacreateworkspaceimagerequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|true|none|
|» WorkspaceId|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateWorkspaceImage|

> Example responses

> 200 Response

```json
{
  "ImageId": {},
  "Name": {},
  "Description": {},
  "OperatingSystem": {
    "Type": {}
  },
  "State": {},
  "RequiredTenancy": {},
  "Created": {},
  "OwnerAccountId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createworkspaceimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkspaceImageResult](#schemacreateworkspaceimageresult)|
|480|480|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|484|484|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkspaces

<a id="opIdCreateWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.CreateWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.CreateWorkspaces' \
  -d '{
    "Workspaces": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.CreateWorkspaces`

<p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

> Body parameter

```json
{
  "Workspaces": {}
}
```

<h3 id="createworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateWorkspacesRequest](#schemacreateworkspacesrequest)|true|none|
|» Workspaces|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.CreateWorkspaces|

> Example responses

> 200 Response

```json
{
  "FailedRequests": {},
  "PendingRequests": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkspacesResult](#schemacreateworkspacesresult)|
|480|480|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteClientBranding

<a id="opIdDeleteClientBranding"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeleteClientBranding' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeleteClientBranding' \
  -d '{
    "ResourceId": {},
    "Platforms": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeleteClientBranding`

<p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>

> Body parameter

```json
{
  "ResourceId": {},
  "Platforms": {}
}
```

<h3 id="deleteclientbranding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteClientBrandingRequest](#schemadeleteclientbrandingrequest)|true|none|
|» ResourceId|body|object|true|none|
|» Platforms|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeleteClientBranding|

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

<h3 id="deleteclientbranding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteClientBrandingResult](#schemadeleteclientbrandingresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnectClientAddIn

<a id="opIdDeleteConnectClientAddIn"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeleteConnectClientAddIn' \
  -d '{
    "AddInId": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn`

Deletes a client-add-in for Amazon Connect that is configured within a directory.

> Body parameter

```json
{
  "AddInId": {},
  "ResourceId": {}
}
```

<h3 id="deleteconnectclientaddin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConnectClientAddInRequest](#schemadeleteconnectclientaddinrequest)|true|none|
|» AddInId|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeleteConnectClientAddIn|

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

<h3 id="deleteconnectclientaddin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectClientAddInResult](#schemadeleteconnectclientaddinresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnectionAlias

<a id="opIdDeleteConnectionAlias"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeleteConnectionAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeleteConnectionAlias' \
  -d '{
    "AliasId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeleteConnectionAlias`

<p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>

> Body parameter

```json
{
  "AliasId": {}
}
```

<h3 id="deleteconnectionalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConnectionAliasRequest](#schemadeleteconnectionaliasrequest)|true|none|
|» AliasId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeleteConnectionAlias|

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

<h3 id="deleteconnectionalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectionAliasResult](#schemadeleteconnectionaliasresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceAssociatedException|[ResourceAssociatedException](#schemaresourceassociatedexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|484|484|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|485|485|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIpGroup

<a id="opIdDeleteIpGroup"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeleteIpGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeleteIpGroup' \
  -d '{
    "GroupId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeleteIpGroup`

<p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>

> Body parameter

```json
{
  "GroupId": {}
}
```

<h3 id="deleteipgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteIpGroupRequest](#schemadeleteipgrouprequest)|true|none|
|» GroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeleteIpGroup|

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

<h3 id="deleteipgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIpGroupResult](#schemadeleteipgroupresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAssociatedException|[ResourceAssociatedException](#schemaresourceassociatedexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTags

<a id="opIdDeleteTags"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeleteTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeleteTags' \
  -d '{
    "ResourceId": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeleteTags`

Deletes the specified tags from the specified WorkSpaces resource.

> Body parameter

```json
{
  "ResourceId": {},
  "TagKeys": {}
}
```

<h3 id="deletetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteTagsRequest](#schemadeletetagsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeleteTags|

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

<h3 id="deletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTagsResult](#schemadeletetagsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkspaceBundle

<a id="opIdDeleteWorkspaceBundle"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeleteWorkspaceBundle' \
  -d '{
    "BundleId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle`

Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.

> Body parameter

```json
{
  "BundleId": {}
}
```

<h3 id="deleteworkspacebundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteWorkspaceBundleRequest](#schemadeleteworkspacebundlerequest)|true|none|
|» BundleId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeleteWorkspaceBundle|

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

<h3 id="deleteworkspacebundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWorkspaceBundleResult](#schemadeleteworkspacebundleresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAssociatedException|[ResourceAssociatedException](#schemaresourceassociatedexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkspaceImage

<a id="opIdDeleteWorkspaceImage"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeleteWorkspaceImage' \
  -d '{
    "ImageId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage`

Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 

> Body parameter

```json
{
  "ImageId": {}
}
```

<h3 id="deleteworkspaceimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteWorkspaceImageRequest](#schemadeleteworkspaceimagerequest)|true|none|
|» ImageId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeleteWorkspaceImage|

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

<h3 id="deleteworkspaceimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWorkspaceImageResult](#schemadeleteworkspaceimageresult)|
|480|480|ResourceAssociatedException|[ResourceAssociatedException](#schemaresourceassociatedexception)|
|481|481|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterWorkspaceDirectory

<a id="opIdDeregisterWorkspaceDirectory"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DeregisterWorkspaceDirectory' \
  -d '{
    "DirectoryId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory`

<p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

> Body parameter

```json
{
  "DirectoryId": {}
}
```

<h3 id="deregisterworkspacedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeregisterWorkspaceDirectoryRequest](#schemaderegisterworkspacedirectoryrequest)|true|none|
|» DirectoryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DeregisterWorkspaceDirectory|

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

<h3 id="deregisterworkspacedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterWorkspaceDirectoryResult](#schemaderegisterworkspacedirectoryresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccount

<a id="opIdDescribeAccount"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeAccount' \
  -d '{}'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeAccount`

Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.

> Body parameter

```json
{}
```

<h3 id="describeaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAccountRequest](#schemadescribeaccountrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeAccount|

> Example responses

> 200 Response

```json
{
  "DedicatedTenancySupport": {},
  "DedicatedTenancyManagementCidrRange": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountResult](#schemadescribeaccountresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountModifications

<a id="opIdDescribeAccountModifications"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeAccountModifications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeAccountModifications' \
  -d '{
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeAccountModifications`

Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="describeaccountmodifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAccountModificationsRequest](#schemadescribeaccountmodificationsrequest)|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeAccountModifications|

> Example responses

> 200 Response

```json
{
  "AccountModifications": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeaccountmodifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountModificationsResult](#schemadescribeaccountmodificationsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClientBranding

<a id="opIdDescribeClientBranding"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeClientBranding' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeClientBranding' \
  -d '{
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeClientBranding`

<p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>

> Body parameter

```json
{
  "ResourceId": {}
}
```

<h3 id="describeclientbranding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeClientBrandingRequest](#schemadescribeclientbrandingrequest)|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeClientBranding|

> Example responses

> 200 Response

```json
{
  "DeviceTypeWindows": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeOsx": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeAndroid": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeIos": {
    "LogoUrl": {},
    "Logo2xUrl": {},
    "Logo3xUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeLinux": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeWeb": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
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

<h3 id="describeclientbranding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClientBrandingResult](#schemadescribeclientbrandingresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClientProperties

<a id="opIdDescribeClientProperties"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeClientProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeClientProperties' \
  -d '{
    "ResourceIds": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeClientProperties`

Retrieves a list that describes one or more specified Amazon WorkSpaces clients.

> Body parameter

```json
{
  "ResourceIds": {}
}
```

<h3 id="describeclientproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeClientPropertiesRequest](#schemadescribeclientpropertiesrequest)|true|none|
|» ResourceIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeClientProperties|

> Example responses

> 200 Response

```json
{
  "ClientPropertiesList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describeclientproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClientPropertiesResult](#schemadescribeclientpropertiesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectClientAddIns

<a id="opIdDescribeConnectClientAddIns"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeConnectClientAddIns' \
  -d '{
    "ResourceId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns`

Retrieves a list of Amazon Connect client add-ins that have been created.

> Body parameter

```json
{
  "ResourceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeconnectclientaddins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConnectClientAddInsRequest](#schemadescribeconnectclientaddinsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeConnectClientAddIns|

> Example responses

> 200 Response

```json
{
  "AddIns": {},
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

<h3 id="describeconnectclientaddins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectClientAddInsResult](#schemadescribeconnectclientaddinsresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectionAliasPermissions

<a id="opIdDescribeConnectionAliasPermissions"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeConnectionAliasPermissions' \
  -d '{
    "AliasId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions`

Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

> Body parameter

```json
{
  "AliasId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeconnectionaliaspermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConnectionAliasPermissionsRequest](#schemadescribeconnectionaliaspermissionsrequest)|true|none|
|» AliasId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeConnectionAliasPermissions|

> Example responses

> 200 Response

```json
{
  "AliasId": {},
  "ConnectionAliasPermissions": {},
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

<h3 id="describeconnectionaliaspermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectionAliasPermissionsResult](#schemadescribeconnectionaliaspermissionsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectionAliases

<a id="opIdDescribeConnectionAliases"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeConnectionAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeConnectionAliases' \
  -d '{
    "AliasIds": {},
    "ResourceId": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeConnectionAliases`

Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

> Body parameter

```json
{
  "AliasIds": {},
  "ResourceId": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeconnectionaliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConnectionAliasesRequest](#schemadescribeconnectionaliasesrequest)|true|none|
|» AliasIds|body|object|false|none|
|» ResourceId|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeConnectionAliases|

> Example responses

> 200 Response

```json
{
  "ConnectionAliases": {},
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

<h3 id="describeconnectionaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectionAliasesResult](#schemadescribeconnectionaliasesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIpGroups

<a id="opIdDescribeIpGroups"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeIpGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeIpGroups' \
  -d '{
    "GroupIds": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeIpGroups`

Describes one or more of your IP access control groups.

> Body parameter

```json
{
  "GroupIds": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeipgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeIpGroupsRequest](#schemadescribeipgroupsrequest)|true|none|
|» GroupIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeIpGroups|

> Example responses

> 200 Response

```json
{
  "Result": {},
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

<h3 id="describeipgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIpGroupsResult](#schemadescribeipgroupsresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTags

<a id="opIdDescribeTags"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeTags' \
  -d '{
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeTags`

Describes the specified tags for the specified WorkSpaces resource.

> Body parameter

```json
{
  "ResourceId": {}
}
```

<h3 id="describetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTagsRequest](#schemadescribetagsrequest)|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeTags|

> Example responses

> 200 Response

```json
{
  "TagList": {}
}
```

> 480 Response

```json
null
```

<h3 id="describetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsResult](#schemadescribetagsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspaceBundles

<a id="opIdDescribeWorkspaceBundles"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeWorkspaceBundles' \
  -d '{
    "BundleIds": {},
    "Owner": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles`

<p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>

> Body parameter

```json
{
  "BundleIds": {},
  "Owner": {},
  "NextToken": {}
}
```

<h3 id="describeworkspacebundles-parameters">Parameters</h3>

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
|body|body|[DescribeWorkspaceBundlesRequest](#schemadescribeworkspacebundlesrequest)|true|none|
|» BundleIds|body|object|false|none|
|» Owner|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeWorkspaceBundles|

> Example responses

> 200 Response

```json
{
  "Bundles": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeworkspacebundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspaceBundlesResult](#schemadescribeworkspacebundlesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspaceDirectories

<a id="opIdDescribeWorkspaceDirectories"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeWorkspaceDirectories' \
  -d '{
    "DirectoryIds": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories`

Describes the available directories that are registered with Amazon WorkSpaces.

> Body parameter

```json
{
  "DirectoryIds": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeworkspacedirectories-parameters">Parameters</h3>

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
|body|body|[DescribeWorkspaceDirectoriesRequest](#schemadescribeworkspacedirectoriesrequest)|true|none|
|» DirectoryIds|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeWorkspaceDirectories|

> Example responses

> 200 Response

```json
{
  "Directories": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeworkspacedirectories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspaceDirectoriesResult](#schemadescribeworkspacedirectoriesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspaceImagePermissions

<a id="opIdDescribeWorkspaceImagePermissions"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeWorkspaceImagePermissions' \
  -d '{
    "ImageId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions`

Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.

> Body parameter

```json
{
  "ImageId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeworkspaceimagepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeWorkspaceImagePermissionsRequest](#schemadescribeworkspaceimagepermissionsrequest)|true|none|
|» ImageId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeWorkspaceImagePermissions|

> Example responses

> 200 Response

```json
{
  "ImageId": {},
  "ImagePermissions": {},
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

<h3 id="describeworkspaceimagepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspaceImagePermissionsResult](#schemadescribeworkspaceimagepermissionsresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspaceImages

<a id="opIdDescribeWorkspaceImages"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeWorkspaceImages' \
  -d '{
    "ImageIds": {},
    "ImageType": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages`

Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 

> Body parameter

```json
{
  "ImageIds": {},
  "ImageType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeworkspaceimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeWorkspaceImagesRequest](#schemadescribeworkspaceimagesrequest)|true|none|
|» ImageIds|body|object|false|none|
|» ImageType|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeWorkspaceImages|

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

<h3 id="describeworkspaceimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspaceImagesResult](#schemadescribeworkspaceimagesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspaceSnapshots

<a id="opIdDescribeWorkspaceSnapshots"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeWorkspaceSnapshots' \
  -d '{
    "WorkspaceId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots`

Describes the snapshots for the specified WorkSpace.

> Body parameter

```json
{
  "WorkspaceId": {}
}
```

<h3 id="describeworkspacesnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeWorkspaceSnapshotsRequest](#schemadescribeworkspacesnapshotsrequest)|true|none|
|» WorkspaceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeWorkspaceSnapshots|

> Example responses

> 200 Response

```json
{
  "RebuildSnapshots": {},
  "RestoreSnapshots": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describeworkspacesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspaceSnapshotsResult](#schemadescribeworkspacesnapshotsresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspaces

<a id="opIdDescribeWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeWorkspaces' \
  -d '{
    "WorkspaceIds": {},
    "DirectoryId": {},
    "UserName": {},
    "BundleId": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeWorkspaces`

<p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>

> Body parameter

```json
{
  "WorkspaceIds": {},
  "DirectoryId": {},
  "UserName": {},
  "BundleId": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeworkspaces-parameters">Parameters</h3>

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
|body|body|[DescribeWorkspacesRequest](#schemadescribeworkspacesrequest)|true|none|
|» WorkspaceIds|body|object|false|none|
|» DirectoryId|body|object|false|none|
|» UserName|body|object|false|none|
|» BundleId|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeWorkspaces|

> Example responses

> 200 Response

```json
{
  "Workspaces": {},
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

<h3 id="describeworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspacesResult](#schemadescribeworkspacesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorkspacesConnectionStatus

<a id="opIdDescribeWorkspacesConnectionStatus"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DescribeWorkspacesConnectionStatus' \
  -d '{
    "WorkspaceIds": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus`

Describes the connection status of the specified WorkSpaces.

> Body parameter

```json
{
  "WorkspaceIds": {},
  "NextToken": {}
}
```

<h3 id="describeworkspacesconnectionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeWorkspacesConnectionStatusRequest](#schemadescribeworkspacesconnectionstatusrequest)|true|none|
|» WorkspaceIds|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DescribeWorkspacesConnectionStatus|

> Example responses

> 200 Response

```json
{
  "WorkspacesConnectionStatus": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeworkspacesconnectionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorkspacesConnectionStatusResult](#schemadescribeworkspacesconnectionstatusresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateConnectionAlias

<a id="opIdDisassociateConnectionAlias"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DisassociateConnectionAlias' \
  -d '{
    "AliasId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias`

<p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>

> Body parameter

```json
{
  "AliasId": {}
}
```

<h3 id="disassociateconnectionalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisassociateConnectionAliasRequest](#schemadisassociateconnectionaliasrequest)|true|none|
|» AliasId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DisassociateConnectionAlias|

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

<h3 id="disassociateconnectionalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateConnectionAliasResult](#schemadisassociateconnectionaliasresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|483|483|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|484|484|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateIpGroups

<a id="opIdDisassociateIpGroups"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.DisassociateIpGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.DisassociateIpGroups' \
  -d '{
    "DirectoryId": {},
    "GroupIds": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.DisassociateIpGroups`

Disassociates the specified IP access control group from the specified directory.

> Body parameter

```json
{
  "DirectoryId": {},
  "GroupIds": {}
}
```

<h3 id="disassociateipgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisassociateIpGroupsRequest](#schemadisassociateipgroupsrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» GroupIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.DisassociateIpGroups|

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

<h3 id="disassociateipgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateIpGroupsResult](#schemadisassociateipgroupsresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportClientBranding

<a id="opIdImportClientBranding"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ImportClientBranding' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ImportClientBranding' \
  -d '{
    "ResourceId": {},
    "DeviceTypeWindows": {
      "Logo": {},
      "SupportEmail": {},
      "SupportLink": {},
      "ForgotPasswordLink": {},
      "LoginMessage": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DeviceTypeOsx": {
      "Logo": {},
      "SupportEmail": {},
      "SupportLink": {},
      "ForgotPasswordLink": {},
      "LoginMessage": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DeviceTypeAndroid": {
      "Logo": {},
      "SupportEmail": {},
      "SupportLink": {},
      "ForgotPasswordLink": {},
      "LoginMessage": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DeviceTypeIos": {
      "Logo": {},
      "Logo2x": {},
      "Logo3x": {},
      "SupportEmail": {},
      "SupportLink": {},
      "ForgotPasswordLink": {},
      "LoginMessage": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DeviceTypeLinux": {
      "Logo": {},
      "SupportEmail": {},
      "SupportLink": {},
      "ForgotPasswordLink": {},
      "LoginMessage": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DeviceTypeWeb": {
      "Logo": {},
      "SupportEmail": {},
      "SupportLink": {},
      "ForgotPasswordLink": {},
      "LoginMessage": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ImportClientBranding`

<p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>

> Body parameter

```json
{
  "ResourceId": {},
  "DeviceTypeWindows": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeOsx": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeAndroid": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeIos": {
    "Logo": {},
    "Logo2x": {},
    "Logo3x": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeLinux": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeWeb": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="importclientbranding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ImportClientBrandingRequest](#schemaimportclientbrandingrequest)|true|none|
|» ResourceId|body|object|true|none|
|» DeviceTypeWindows|body|object|false|none|
|» » Logo|body|object|false|none|
|» » SupportEmail|body|object|false|none|
|» » SupportLink|body|object|false|none|
|» » ForgotPasswordLink|body|object|false|none|
|» » LoginMessage|body|object|false|none|
|» » » **additionalProperties**|body|[ClientLoginMessage](#schemaclientloginmessage)|false|none|
|» DeviceTypeOsx|body|object|false|none|
|» » Logo|body|object|false|none|
|» » SupportEmail|body|object|false|none|
|» » SupportLink|body|object|false|none|
|» » ForgotPasswordLink|body|object|false|none|
|» » LoginMessage|body|object|false|none|
|» » » **additionalProperties**|body|[ClientLoginMessage](#schemaclientloginmessage)|false|none|
|» DeviceTypeAndroid|body|object|false|none|
|» » Logo|body|object|false|none|
|» » SupportEmail|body|object|false|none|
|» » SupportLink|body|object|false|none|
|» » ForgotPasswordLink|body|object|false|none|
|» » LoginMessage|body|object|false|none|
|» » » **additionalProperties**|body|[ClientLoginMessage](#schemaclientloginmessage)|false|none|
|» DeviceTypeIos|body|object|false|none|
|» » Logo|body|object|false|none|
|» » Logo2x|body|object|false|none|
|» » Logo3x|body|object|false|none|
|» » SupportEmail|body|object|false|none|
|» » SupportLink|body|object|false|none|
|» » ForgotPasswordLink|body|object|false|none|
|» » LoginMessage|body|object|false|none|
|» » » **additionalProperties**|body|[ClientLoginMessage](#schemaclientloginmessage)|false|none|
|» DeviceTypeLinux|body|object|false|none|
|» » Logo|body|object|false|none|
|» » SupportEmail|body|object|false|none|
|» » SupportLink|body|object|false|none|
|» » ForgotPasswordLink|body|object|false|none|
|» » LoginMessage|body|object|false|none|
|» » » **additionalProperties**|body|[ClientLoginMessage](#schemaclientloginmessage)|false|none|
|» DeviceTypeWeb|body|object|false|none|
|» » Logo|body|object|false|none|
|» » SupportEmail|body|object|false|none|
|» » SupportLink|body|object|false|none|
|» » ForgotPasswordLink|body|object|false|none|
|» » LoginMessage|body|object|false|none|
|» » » **additionalProperties**|body|[ClientLoginMessage](#schemaclientloginmessage)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ImportClientBranding|

> Example responses

> 200 Response

```json
{
  "DeviceTypeWindows": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeOsx": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeAndroid": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeIos": {
    "LogoUrl": {},
    "Logo2xUrl": {},
    "Logo3xUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeLinux": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeWeb": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
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

<h3 id="importclientbranding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportClientBrandingResult](#schemaimportclientbrandingresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportWorkspaceImage

<a id="opIdImportWorkspaceImage"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ImportWorkspaceImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ImportWorkspaceImage' \
  -d '{
    "Ec2ImageId": {},
    "IngestionProcess": {},
    "ImageName": {},
    "ImageDescription": {},
    "Tags": {},
    "Applications": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ImportWorkspaceImage`

Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.

> Body parameter

```json
{
  "Ec2ImageId": {},
  "IngestionProcess": {},
  "ImageName": {},
  "ImageDescription": {},
  "Tags": {},
  "Applications": {}
}
```

<h3 id="importworkspaceimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ImportWorkspaceImageRequest](#schemaimportworkspaceimagerequest)|true|none|
|» Ec2ImageId|body|object|true|none|
|» IngestionProcess|body|object|true|none|
|» ImageName|body|object|true|none|
|» ImageDescription|body|object|true|none|
|» Tags|body|object|false|none|
|» Applications|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ImportWorkspaceImage|

> Example responses

> 200 Response

```json
{
  "ImageId": {}
}
```

> 480 Response

```json
null
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

<h3 id="importworkspaceimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportWorkspaceImageResult](#schemaimportworkspaceimageresult)|
|480|480|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAvailableManagementCidrRanges

<a id="opIdListAvailableManagementCidrRanges"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ListAvailableManagementCidrRanges' \
  -d '{
    "ManagementCidrRangeConstraint": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges`

<p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>

> Body parameter

```json
{
  "ManagementCidrRangeConstraint": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listavailablemanagementcidrranges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAvailableManagementCidrRangesRequest](#schemalistavailablemanagementcidrrangesrequest)|true|none|
|» ManagementCidrRangeConstraint|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ListAvailableManagementCidrRanges|

> Example responses

> 200 Response

```json
{
  "ManagementCidrRanges": {},
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

<h3 id="listavailablemanagementcidrranges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableManagementCidrRangesResult](#schemalistavailablemanagementcidrrangesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MigrateWorkspace

<a id="opIdMigrateWorkspace"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.MigrateWorkspace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.MigrateWorkspace' \
  -d '{
    "SourceWorkspaceId": {},
    "BundleId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.MigrateWorkspace`

<p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>

> Body parameter

```json
{
  "SourceWorkspaceId": {},
  "BundleId": {}
}
```

<h3 id="migrateworkspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[MigrateWorkspaceRequest](#schemamigrateworkspacerequest)|true|none|
|» SourceWorkspaceId|body|object|true|none|
|» BundleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.MigrateWorkspace|

> Example responses

> 200 Response

```json
{
  "SourceWorkspaceId": {},
  "TargetWorkspaceId": {}
}
```

> 480 Response

```json
null
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

<h3 id="migrateworkspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MigrateWorkspaceResult](#schemamigrateworkspaceresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|484|484|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|485|485|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyAccount

<a id="opIdModifyAccount"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifyAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifyAccount' \
  -d '{
    "DedicatedTenancySupport": {},
    "DedicatedTenancyManagementCidrRange": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifyAccount`

Modifies the configuration of Bring Your Own License (BYOL) for the specified account.

> Body parameter

```json
{
  "DedicatedTenancySupport": {},
  "DedicatedTenancyManagementCidrRange": {}
}
```

<h3 id="modifyaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyAccountRequest](#schemamodifyaccountrequest)|true|none|
|» DedicatedTenancySupport|body|object|false|none|
|» DedicatedTenancyManagementCidrRange|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifyAccount|

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

<h3 id="modifyaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyAccountResult](#schemamodifyaccountresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyCertificateBasedAuthProperties

<a id="opIdModifyCertificateBasedAuthProperties"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifyCertificateBasedAuthProperties' \
  -d '{
    "ResourceId": {},
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
    },
    "PropertiesToDelete": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties`

Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.

> Body parameter

```json
{
  "ResourceId": {},
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  },
  "PropertiesToDelete": {}
}
```

<h3 id="modifycertificatebasedauthproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyCertificateBasedAuthPropertiesRequest](#schemamodifycertificatebasedauthpropertiesrequest)|true|none|
|» ResourceId|body|object|true|none|
|» CertificateBasedAuthProperties|body|object|false|none|
|» » Status|body|object|false|none|
|» » CertificateAuthorityArn|body|object|false|none|
|» PropertiesToDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifyCertificateBasedAuthProperties|

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

<h3 id="modifycertificatebasedauthproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyCertificateBasedAuthPropertiesResult](#schemamodifycertificatebasedauthpropertiesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyClientProperties

<a id="opIdModifyClientProperties"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifyClientProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifyClientProperties' \
  -d '{
    "ResourceId": {},
    "ClientProperties": {
      "ReconnectEnabled": {},
      "LogUploadEnabled": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifyClientProperties`

Modifies the properties of the specified Amazon WorkSpaces clients.

> Body parameter

```json
{
  "ResourceId": {},
  "ClientProperties": {
    "ReconnectEnabled": {},
    "LogUploadEnabled": {}
  }
}
```

<h3 id="modifyclientproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyClientPropertiesRequest](#schemamodifyclientpropertiesrequest)|true|none|
|» ResourceId|body|object|true|none|
|» ClientProperties|body|object|true|none|
|» » ReconnectEnabled|body|object|false|none|
|» » LogUploadEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifyClientProperties|

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

<h3 id="modifyclientproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyClientPropertiesResult](#schemamodifyclientpropertiesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifySamlProperties

<a id="opIdModifySamlProperties"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifySamlProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifySamlProperties' \
  -d '{
    "ResourceId": {},
    "SamlProperties": {
      "Status": {},
      "UserAccessUrl": {},
      "RelayStateParameterName": {}
    },
    "PropertiesToDelete": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifySamlProperties`

Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

> Body parameter

```json
{
  "ResourceId": {},
  "SamlProperties": {
    "Status": {},
    "UserAccessUrl": {},
    "RelayStateParameterName": {}
  },
  "PropertiesToDelete": {}
}
```

<h3 id="modifysamlproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifySamlPropertiesRequest](#schemamodifysamlpropertiesrequest)|true|none|
|» ResourceId|body|object|true|none|
|» SamlProperties|body|object|false|none|
|» » Status|body|object|false|none|
|» » UserAccessUrl|body|object|false|none|
|» » RelayStateParameterName|body|object|false|none|
|» PropertiesToDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifySamlProperties|

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

<h3 id="modifysamlproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifySamlPropertiesResult](#schemamodifysamlpropertiesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifySelfservicePermissions

<a id="opIdModifySelfservicePermissions"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifySelfservicePermissions' \
  -d '{
    "ResourceId": {},
    "SelfservicePermissions": {
      "RestartWorkspace": {},
      "IncreaseVolumeSize": {},
      "ChangeComputeType": {},
      "SwitchRunningMode": {},
      "RebuildWorkspace": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions`

Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.

> Body parameter

```json
{
  "ResourceId": {},
  "SelfservicePermissions": {
    "RestartWorkspace": {},
    "IncreaseVolumeSize": {},
    "ChangeComputeType": {},
    "SwitchRunningMode": {},
    "RebuildWorkspace": {}
  }
}
```

<h3 id="modifyselfservicepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifySelfservicePermissionsRequest](#schemamodifyselfservicepermissionsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» SelfservicePermissions|body|object|true|none|
|» » RestartWorkspace|body|object|false|none|
|» » IncreaseVolumeSize|body|object|false|none|
|» » ChangeComputeType|body|object|false|none|
|» » SwitchRunningMode|body|object|false|none|
|» » RebuildWorkspace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifySelfservicePermissions|

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

<h3 id="modifyselfservicepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifySelfservicePermissionsResult](#schemamodifyselfservicepermissionsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyWorkspaceAccessProperties

<a id="opIdModifyWorkspaceAccessProperties"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifyWorkspaceAccessProperties' \
  -d '{
    "ResourceId": {},
    "WorkspaceAccessProperties": {
      "DeviceTypeWindows": {},
      "DeviceTypeOsx": {},
      "DeviceTypeWeb": {},
      "DeviceTypeIos": {},
      "DeviceTypeAndroid": {},
      "DeviceTypeChromeOs": {},
      "DeviceTypeZeroClient": {},
      "DeviceTypeLinux": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties`

Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.

> Body parameter

```json
{
  "ResourceId": {},
  "WorkspaceAccessProperties": {
    "DeviceTypeWindows": {},
    "DeviceTypeOsx": {},
    "DeviceTypeWeb": {},
    "DeviceTypeIos": {},
    "DeviceTypeAndroid": {},
    "DeviceTypeChromeOs": {},
    "DeviceTypeZeroClient": {},
    "DeviceTypeLinux": {}
  }
}
```

<h3 id="modifyworkspaceaccessproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyWorkspaceAccessPropertiesRequest](#schemamodifyworkspaceaccesspropertiesrequest)|true|none|
|» ResourceId|body|object|true|none|
|» WorkspaceAccessProperties|body|object|true|none|
|» » DeviceTypeWindows|body|object|false|none|
|» » DeviceTypeOsx|body|object|false|none|
|» » DeviceTypeWeb|body|object|false|none|
|» » DeviceTypeIos|body|object|false|none|
|» » DeviceTypeAndroid|body|object|false|none|
|» » DeviceTypeChromeOs|body|object|false|none|
|» » DeviceTypeZeroClient|body|object|false|none|
|» » DeviceTypeLinux|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifyWorkspaceAccessProperties|

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

<h3 id="modifyworkspaceaccessproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyWorkspaceAccessPropertiesResult](#schemamodifyworkspaceaccesspropertiesresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyWorkspaceCreationProperties

<a id="opIdModifyWorkspaceCreationProperties"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifyWorkspaceCreationProperties' \
  -d '{
    "ResourceId": {},
    "WorkspaceCreationProperties": {
      "EnableWorkDocs": {},
      "EnableInternetAccess": {},
      "DefaultOu": {},
      "CustomSecurityGroupId": {},
      "UserEnabledAsLocalAdministrator": {},
      "EnableMaintenanceMode": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties`

Modify the default properties used to create WorkSpaces.

> Body parameter

```json
{
  "ResourceId": {},
  "WorkspaceCreationProperties": {
    "EnableWorkDocs": {},
    "EnableInternetAccess": {},
    "DefaultOu": {},
    "CustomSecurityGroupId": {},
    "UserEnabledAsLocalAdministrator": {},
    "EnableMaintenanceMode": {}
  }
}
```

<h3 id="modifyworkspacecreationproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyWorkspaceCreationPropertiesRequest](#schemamodifyworkspacecreationpropertiesrequest)|true|none|
|» ResourceId|body|object|true|none|
|» WorkspaceCreationProperties|body|object|true|none|
|» » EnableWorkDocs|body|object|false|none|
|» » EnableInternetAccess|body|object|false|none|
|» » DefaultOu|body|object|false|none|
|» » CustomSecurityGroupId|body|object|false|none|
|» » UserEnabledAsLocalAdministrator|body|object|false|none|
|» » EnableMaintenanceMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifyWorkspaceCreationProperties|

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

<h3 id="modifyworkspacecreationproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyWorkspaceCreationPropertiesResult](#schemamodifyworkspacecreationpropertiesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyWorkspaceProperties

<a id="opIdModifyWorkspaceProperties"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifyWorkspaceProperties' \
  -d '{
    "WorkspaceId": {},
    "WorkspaceProperties": {
      "RunningMode": {},
      "RunningModeAutoStopTimeoutInMinutes": {},
      "RootVolumeSizeGib": {},
      "UserVolumeSizeGib": {},
      "ComputeTypeName": {},
      "Protocols": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties`

<p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

> Body parameter

```json
{
  "WorkspaceId": {},
  "WorkspaceProperties": {
    "RunningMode": {},
    "RunningModeAutoStopTimeoutInMinutes": {},
    "RootVolumeSizeGib": {},
    "UserVolumeSizeGib": {},
    "ComputeTypeName": {},
    "Protocols": {}
  }
}
```

<h3 id="modifyworkspaceproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyWorkspacePropertiesRequest](#schemamodifyworkspacepropertiesrequest)|true|none|
|» WorkspaceId|body|object|true|none|
|» WorkspaceProperties|body|object|true|none|
|» » RunningMode|body|object|false|none|
|» » RunningModeAutoStopTimeoutInMinutes|body|object|false|none|
|» » RootVolumeSizeGib|body|object|false|none|
|» » UserVolumeSizeGib|body|object|false|none|
|» » ComputeTypeName|body|object|false|none|
|» » Protocols|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifyWorkspaceProperties|

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

<h3 id="modifyworkspaceproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyWorkspacePropertiesResult](#schemamodifyworkspacepropertiesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|482|482|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|483|483|UnsupportedWorkspaceConfigurationException|[UnsupportedWorkspaceConfigurationException](#schemaunsupportedworkspaceconfigurationexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyWorkspaceState

<a id="opIdModifyWorkspaceState"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.ModifyWorkspaceState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.ModifyWorkspaceState' \
  -d '{
    "WorkspaceId": {},
    "WorkspaceState": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.ModifyWorkspaceState`

<p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>

> Body parameter

```json
{
  "WorkspaceId": {},
  "WorkspaceState": {}
}
```

<h3 id="modifyworkspacestate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyWorkspaceStateRequest](#schemamodifyworkspacestaterequest)|true|none|
|» WorkspaceId|body|object|true|none|
|» WorkspaceState|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.ModifyWorkspaceState|

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

<h3 id="modifyworkspacestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyWorkspaceStateResult](#schemamodifyworkspacestateresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootWorkspaces

<a id="opIdRebootWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.RebootWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.RebootWorkspaces' \
  -d '{
    "RebootWorkspaceRequests": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.RebootWorkspaces`

<p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>

> Body parameter

```json
{
  "RebootWorkspaceRequests": {}
}
```

<h3 id="rebootworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RebootWorkspacesRequest](#schemarebootworkspacesrequest)|true|none|
|» RebootWorkspaceRequests|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.RebootWorkspaces|

> Example responses

> 200 Response

```json
{
  "FailedRequests": {}
}
```

> 480 Response

```json
null
```

<h3 id="rebootworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootWorkspacesResult](#schemarebootworkspacesresult)|
|480|480|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebuildWorkspaces

<a id="opIdRebuildWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.RebuildWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.RebuildWorkspaces' \
  -d '{
    "RebuildWorkspaceRequests": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.RebuildWorkspaces`

<p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>

> Body parameter

```json
{
  "RebuildWorkspaceRequests": {}
}
```

<h3 id="rebuildworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RebuildWorkspacesRequest](#schemarebuildworkspacesrequest)|true|none|
|» RebuildWorkspaceRequests|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.RebuildWorkspaces|

> Example responses

> 200 Response

```json
{
  "FailedRequests": {}
}
```

> 480 Response

```json
null
```

<h3 id="rebuildworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebuildWorkspacesResult](#schemarebuildworkspacesresult)|
|480|480|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterWorkspaceDirectory

<a id="opIdRegisterWorkspaceDirectory"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.RegisterWorkspaceDirectory' \
  -d '{
    "DirectoryId": {},
    "SubnetIds": {},
    "EnableWorkDocs": {},
    "EnableSelfService": {},
    "Tenancy": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory`

Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.

> Body parameter

```json
{
  "DirectoryId": {},
  "SubnetIds": {},
  "EnableWorkDocs": {},
  "EnableSelfService": {},
  "Tenancy": {},
  "Tags": {}
}
```

<h3 id="registerworkspacedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterWorkspaceDirectoryRequest](#schemaregisterworkspacedirectoryrequest)|true|none|
|» DirectoryId|body|object|true|none|
|» SubnetIds|body|object|false|none|
|» EnableWorkDocs|body|object|true|none|
|» EnableSelfService|body|object|false|none|
|» Tenancy|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.RegisterWorkspaceDirectory|

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

<h3 id="registerworkspacedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterWorkspaceDirectoryResult](#schemaregisterworkspacedirectoryresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|WorkspacesDefaultRoleNotFoundException|[WorkspacesDefaultRoleNotFoundException](#schemaworkspacesdefaultrolenotfoundexception)|
|485|485|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|486|486|UnsupportedNetworkConfigurationException|[UnsupportedNetworkConfigurationException](#schemaunsupportednetworkconfigurationexception)|
|487|487|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreWorkspace

<a id="opIdRestoreWorkspace"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.RestoreWorkspace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.RestoreWorkspace' \
  -d '{
    "WorkspaceId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.RestoreWorkspace`

<p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>

> Body parameter

```json
{
  "WorkspaceId": {}
}
```

<h3 id="restoreworkspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RestoreWorkspaceRequest](#schemarestoreworkspacerequest)|true|none|
|» WorkspaceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.RestoreWorkspace|

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

<h3 id="restoreworkspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreWorkspaceResult](#schemarestoreworkspaceresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeIpRules

<a id="opIdRevokeIpRules"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.RevokeIpRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.RevokeIpRules' \
  -d '{
    "GroupId": {},
    "UserRules": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.RevokeIpRules`

Removes one or more rules from the specified IP access control group.

> Body parameter

```json
{
  "GroupId": {},
  "UserRules": {}
}
```

<h3 id="revokeiprules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RevokeIpRulesRequest](#schemarevokeiprulesrequest)|true|none|
|» GroupId|body|object|true|none|
|» UserRules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.RevokeIpRules|

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

<h3 id="revokeiprules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeIpRulesResult](#schemarevokeiprulesresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartWorkspaces

<a id="opIdStartWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.StartWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.StartWorkspaces' \
  -d '{
    "StartWorkspaceRequests": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.StartWorkspaces`

<p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>

> Body parameter

```json
{
  "StartWorkspaceRequests": {}
}
```

<h3 id="startworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartWorkspacesRequest](#schemastartworkspacesrequest)|true|none|
|» StartWorkspaceRequests|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.StartWorkspaces|

> Example responses

> 200 Response

```json
{
  "FailedRequests": {}
}
```

<h3 id="startworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartWorkspacesResult](#schemastartworkspacesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopWorkspaces

<a id="opIdStopWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.StopWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.StopWorkspaces' \
  -d '{
    "StopWorkspaceRequests": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.StopWorkspaces`

<p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>

> Body parameter

```json
{
  "StopWorkspaceRequests": {}
}
```

<h3 id="stopworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopWorkspacesRequest](#schemastopworkspacesrequest)|true|none|
|» StopWorkspaceRequests|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.StopWorkspaces|

> Example responses

> 200 Response

```json
{
  "FailedRequests": {}
}
```

<h3 id="stopworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopWorkspacesResult](#schemastopworkspacesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateWorkspaces

<a id="opIdTerminateWorkspaces"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.TerminateWorkspaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.TerminateWorkspaces' \
  -d '{
    "TerminateWorkspaceRequests": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.TerminateWorkspaces`

<p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

> Body parameter

```json
{
  "TerminateWorkspaceRequests": {}
}
```

<h3 id="terminateworkspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TerminateWorkspacesRequest](#schematerminateworkspacesrequest)|true|none|
|» TerminateWorkspaceRequests|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.TerminateWorkspaces|

> Example responses

> 200 Response

```json
{
  "FailedRequests": {}
}
```

<h3 id="terminateworkspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TerminateWorkspacesResult](#schematerminateworkspacesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectClientAddIn

<a id="opIdUpdateConnectClientAddIn"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.UpdateConnectClientAddIn' \
  -d '{
    "AddInId": {},
    "ResourceId": {},
    "Name": {},
    "URL": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn`

Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.

> Body parameter

```json
{
  "AddInId": {},
  "ResourceId": {},
  "Name": {},
  "URL": {}
}
```

<h3 id="updateconnectclientaddin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateConnectClientAddInRequest](#schemaupdateconnectclientaddinrequest)|true|none|
|» AddInId|body|object|true|none|
|» ResourceId|body|object|true|none|
|» Name|body|object|false|none|
|» URL|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.UpdateConnectClientAddIn|

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

<h3 id="updateconnectclientaddin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectClientAddInResult](#schemaupdateconnectclientaddinresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectionAliasPermission

<a id="opIdUpdateConnectionAliasPermission"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.UpdateConnectionAliasPermission' \
  -d '{
    "AliasId": {},
    "ConnectionAliasPermission": {
      "SharedAccountId": {},
      "AllowAssociation": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission`

<p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>

> Body parameter

```json
{
  "AliasId": {},
  "ConnectionAliasPermission": {
    "SharedAccountId": {},
    "AllowAssociation": {}
  }
}
```

<h3 id="updateconnectionaliaspermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateConnectionAliasPermissionRequest](#schemaupdateconnectionaliaspermissionrequest)|true|none|
|» AliasId|body|object|true|none|
|» ConnectionAliasPermission|body|object|true|none|
|» » SharedAccountId|body|object|true|none|
|» » AllowAssociation|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.UpdateConnectionAliasPermission|

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

<h3 id="updateconnectionaliaspermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectionAliasPermissionResult](#schemaupdateconnectionaliaspermissionresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceAssociatedException|[ResourceAssociatedException](#schemaresourceassociatedexception)|
|485|485|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|486|486|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRulesOfIpGroup

<a id="opIdUpdateRulesOfIpGroup"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.UpdateRulesOfIpGroup' \
  -d '{
    "GroupId": {},
    "UserRules": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup`

Replaces the current rules of the specified IP access control group with the specified rules.

> Body parameter

```json
{
  "GroupId": {},
  "UserRules": {}
}
```

<h3 id="updaterulesofipgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRulesOfIpGroupRequest](#schemaupdaterulesofipgrouprequest)|true|none|
|» GroupId|body|object|true|none|
|» UserRules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.UpdateRulesOfIpGroup|

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

<h3 id="updaterulesofipgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRulesOfIpGroupResult](#schemaupdaterulesofipgroupresult)|
|480|480|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWorkspaceBundle

<a id="opIdUpdateWorkspaceBundle"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.UpdateWorkspaceBundle' \
  -d '{
    "BundleId": {},
    "ImageId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle`

<p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>

> Body parameter

```json
{
  "BundleId": {},
  "ImageId": {}
}
```

<h3 id="updateworkspacebundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateWorkspaceBundleRequest](#schemaupdateworkspacebundlerequest)|true|none|
|» BundleId|body|object|false|none|
|» ImageId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.UpdateWorkspaceBundle|

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

<h3 id="updateworkspacebundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWorkspaceBundleResult](#schemaupdateworkspacebundleresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWorkspaceImagePermission

<a id="opIdUpdateWorkspaceImagePermission"></a>

> Code samples

```bash
curl 'https://workspaces.us-east-1.amazonaws.com/#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkspacesService.UpdateWorkspaceImagePermission' \
  -d '{
    "ImageId": {},
    "AllowCopyImage": {},
    "SharedAccountId": {}
  }'
```

`POST /#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission`

<p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>

> Body parameter

```json
{
  "ImageId": {},
  "AllowCopyImage": {},
  "SharedAccountId": {}
}
```

<h3 id="updateworkspaceimagepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateWorkspaceImagePermissionRequest](#schemaupdateworkspaceimagepermissionrequest)|true|none|
|» ImageId|body|object|true|none|
|» AllowCopyImage|body|object|true|none|
|» SharedAccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkspacesService.UpdateWorkspaceImagePermission|

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

<h3 id="updateworkspaceimagepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWorkspaceImagePermissionResult](#schemaupdateworkspaceimagepermissionresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterValuesException|[InvalidParameterValuesException](#schemainvalidparametervaluesexception)|
|484|484|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateConnectionAliasResult">AssociateConnectionAliasResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociateconnectionaliasresult"></a>
<a id="schema_AssociateConnectionAliasResult"></a>
<a id="tocSassociateconnectionaliasresult"></a>
<a id="tocsassociateconnectionaliasresult"></a>

```json
{
  "ConnectionIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionIdentifier|object|false|none|none|

<h2 id="tocS_AssociateConnectionAliasRequest">AssociateConnectionAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateconnectionaliasrequest"></a>
<a id="schema_AssociateConnectionAliasRequest"></a>
<a id="tocSassociateconnectionaliasrequest"></a>
<a id="tocsassociateconnectionaliasrequest"></a>

```json
{
  "AliasId": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_ResourceAssociatedException">ResourceAssociatedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceassociatedexception"></a>
<a id="schema_ResourceAssociatedException"></a>
<a id="tocSresourceassociatedexception"></a>
<a id="tocsresourceassociatedexception"></a>

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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterValuesException">InvalidParameterValuesException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervaluesexception"></a>
<a id="schema_InvalidParameterValuesException"></a>
<a id="tocSinvalidparametervaluesexception"></a>
<a id="tocsinvalidparametervaluesexception"></a>

```json
null
```

<h2 id="tocS_InvalidResourceStateException">InvalidResourceStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcestateexception"></a>
<a id="schema_InvalidResourceStateException"></a>
<a id="tocSinvalidresourcestateexception"></a>
<a id="tocsinvalidresourcestateexception"></a>

```json
null
```

<h2 id="tocS_OperationNotSupportedException">OperationNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotsupportedexception"></a>
<a id="schema_OperationNotSupportedException"></a>
<a id="tocSoperationnotsupportedexception"></a>
<a id="tocsoperationnotsupportedexception"></a>

```json
null
```

<h2 id="tocS_AssociateIpGroupsResult">AssociateIpGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociateipgroupsresult"></a>
<a id="schema_AssociateIpGroupsResult"></a>
<a id="tocSassociateipgroupsresult"></a>
<a id="tocsassociateipgroupsresult"></a>

```json
{}
```

<h2 id="tocS_AssociateIpGroupsRequest">AssociateIpGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateipgroupsrequest"></a>
<a id="schema_AssociateIpGroupsRequest"></a>
<a id="tocSassociateipgroupsrequest"></a>
<a id="tocsassociateipgroupsrequest"></a>

```json
{
  "DirectoryId": {},
  "GroupIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|GroupIds|object|true|none|none|

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_AuthorizeIpRulesResult">AuthorizeIpRulesResult</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizeiprulesresult"></a>
<a id="schema_AuthorizeIpRulesResult"></a>
<a id="tocSauthorizeiprulesresult"></a>
<a id="tocsauthorizeiprulesresult"></a>

```json
{}
```

<h2 id="tocS_AuthorizeIpRulesRequest">AuthorizeIpRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizeiprulesrequest"></a>
<a id="schema_AuthorizeIpRulesRequest"></a>
<a id="tocSauthorizeiprulesrequest"></a>
<a id="tocsauthorizeiprulesrequest"></a>

```json
{
  "GroupId": {},
  "UserRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|UserRules|object|true|none|none|

<h2 id="tocS_CopyWorkspaceImageResult">CopyWorkspaceImageResult</h2>
<!-- backwards compatibility -->
<a id="schemacopyworkspaceimageresult"></a>
<a id="schema_CopyWorkspaceImageResult"></a>
<a id="tocScopyworkspaceimageresult"></a>
<a id="tocscopyworkspaceimageresult"></a>

```json
{
  "ImageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|false|none|none|

<h2 id="tocS_CopyWorkspaceImageRequest">CopyWorkspaceImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopyworkspaceimagerequest"></a>
<a id="schema_CopyWorkspaceImageRequest"></a>
<a id="tocScopyworkspaceimagerequest"></a>
<a id="tocscopyworkspaceimagerequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "SourceImageId": {},
  "SourceRegion": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|SourceImageId|object|true|none|none|
|SourceRegion|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ResourceUnavailableException">ResourceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunavailableexception"></a>
<a id="schema_ResourceUnavailableException"></a>
<a id="tocSresourceunavailableexception"></a>
<a id="tocsresourceunavailableexception"></a>

```json
null
```

<h2 id="tocS_CreateConnectClientAddInResult">CreateConnectClientAddInResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectclientaddinresult"></a>
<a id="schema_CreateConnectClientAddInResult"></a>
<a id="tocScreateconnectclientaddinresult"></a>
<a id="tocscreateconnectclientaddinresult"></a>

```json
{
  "AddInId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddInId|object|false|none|none|

<h2 id="tocS_CreateConnectClientAddInRequest">CreateConnectClientAddInRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectclientaddinrequest"></a>
<a id="schema_CreateConnectClientAddInRequest"></a>
<a id="tocScreateconnectclientaddinrequest"></a>
<a id="tocscreateconnectclientaddinrequest"></a>

```json
{
  "ResourceId": {},
  "Name": {},
  "URL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|Name|object|true|none|none|
|URL|object|true|none|none|

<h2 id="tocS_ResourceCreationFailedException">ResourceCreationFailedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecreationfailedexception"></a>
<a id="schema_ResourceCreationFailedException"></a>
<a id="tocSresourcecreationfailedexception"></a>
<a id="tocsresourcecreationfailedexception"></a>

```json
null
```

<h2 id="tocS_CreateConnectionAliasResult">CreateConnectionAliasResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionaliasresult"></a>
<a id="schema_CreateConnectionAliasResult"></a>
<a id="tocScreateconnectionaliasresult"></a>
<a id="tocscreateconnectionaliasresult"></a>

```json
{
  "AliasId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|false|none|none|

<h2 id="tocS_CreateConnectionAliasRequest">CreateConnectionAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionaliasrequest"></a>
<a id="schema_CreateConnectionAliasRequest"></a>
<a id="tocScreateconnectionaliasrequest"></a>
<a id="tocscreateconnectionaliasrequest"></a>

```json
{
  "ConnectionString": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionString|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateIpGroupResult">CreateIpGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateipgroupresult"></a>
<a id="schema_CreateIpGroupResult"></a>
<a id="tocScreateipgroupresult"></a>
<a id="tocscreateipgroupresult"></a>

```json
{
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|false|none|none|

<h2 id="tocS_CreateIpGroupRequest">CreateIpGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateipgrouprequest"></a>
<a id="schema_CreateIpGroupRequest"></a>
<a id="tocScreateipgrouprequest"></a>
<a id="tocscreateipgrouprequest"></a>

```json
{
  "GroupName": {},
  "GroupDesc": {},
  "UserRules": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|GroupDesc|object|false|none|none|
|UserRules|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateStandbyWorkspacesResult">CreateStandbyWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatestandbyworkspacesresult"></a>
<a id="schema_CreateStandbyWorkspacesResult"></a>
<a id="tocScreatestandbyworkspacesresult"></a>
<a id="tocscreatestandbyworkspacesresult"></a>

```json
{
  "FailedStandbyRequests": {},
  "PendingStandbyRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedStandbyRequests|object|false|none|none|
|PendingStandbyRequests|object|false|none|none|

<h2 id="tocS_CreateStandbyWorkspacesRequest">CreateStandbyWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestandbyworkspacesrequest"></a>
<a id="schema_CreateStandbyWorkspacesRequest"></a>
<a id="tocScreatestandbyworkspacesrequest"></a>
<a id="tocscreatestandbyworkspacesrequest"></a>

```json
{
  "PrimaryRegion": {},
  "StandbyWorkspaces": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrimaryRegion|object|true|none|none|
|StandbyWorkspaces|object|true|none|none|

<h2 id="tocS_CreateTagsResult">CreateTagsResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagsresult"></a>
<a id="schema_CreateTagsResult"></a>
<a id="tocScreatetagsresult"></a>
<a id="tocscreatetagsresult"></a>

```json
{}
```

<h2 id="tocS_CreateTagsRequest">CreateTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagsrequest"></a>
<a id="schema_CreateTagsRequest"></a>
<a id="tocScreatetagsrequest"></a>
<a id="tocscreatetagsrequest"></a>

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

<h2 id="tocS_CreateUpdatedWorkspaceImageResult">CreateUpdatedWorkspaceImageResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatedworkspaceimageresult"></a>
<a id="schema_CreateUpdatedWorkspaceImageResult"></a>
<a id="tocScreateupdatedworkspaceimageresult"></a>
<a id="tocscreateupdatedworkspaceimageresult"></a>

```json
{
  "ImageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|false|none|none|

<h2 id="tocS_CreateUpdatedWorkspaceImageRequest">CreateUpdatedWorkspaceImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdatedworkspaceimagerequest"></a>
<a id="schema_CreateUpdatedWorkspaceImageRequest"></a>
<a id="tocScreateupdatedworkspaceimagerequest"></a>
<a id="tocscreateupdatedworkspaceimagerequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "SourceImageId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|true|none|none|
|SourceImageId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateWorkspaceBundleResult">CreateWorkspaceBundleResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspacebundleresult"></a>
<a id="schema_CreateWorkspaceBundleResult"></a>
<a id="tocScreateworkspacebundleresult"></a>
<a id="tocscreateworkspacebundleresult"></a>

```json
{
  "WorkspaceBundle": {
    "BundleId": {},
    "Name": {},
    "Owner": {},
    "Description": {},
    "ImageId": {},
    "RootStorage": {
      "Capacity": {}
    },
    "UserStorage": {
      "Capacity": {}
    },
    "ComputeType": {
      "Name": {}
    },
    "LastUpdatedTime": {},
    "CreationTime": {},
    "State": {},
    "BundleType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceBundle|[WorkspaceBundle](#schemaworkspacebundle)|false|none|Describes a WorkSpace bundle.|

<h2 id="tocS_CreateWorkspaceBundleRequest">CreateWorkspaceBundleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspacebundlerequest"></a>
<a id="schema_CreateWorkspaceBundleRequest"></a>
<a id="tocScreateworkspacebundlerequest"></a>
<a id="tocscreateworkspacebundlerequest"></a>

```json
{
  "BundleName": {},
  "BundleDescription": {},
  "ImageId": {},
  "ComputeType": {
    "Name": {}
  },
  "UserStorage": {
    "Capacity": {}
  },
  "RootStorage": {
    "Capacity": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BundleName|object|true|none|none|
|BundleDescription|object|true|none|none|
|ImageId|object|true|none|none|
|ComputeType|[ComputeType](#schemacomputetype)|true|none|Describes the compute type of the bundle.|
|UserStorage|[UserStorage](#schemauserstorage)|true|none|Describes the user volume for a WorkSpace bundle.|
|RootStorage|[RootStorage](#schemarootstorage)|false|none|Describes the root volume for a WorkSpace bundle.|
|Tags|object|false|none|none|

<h2 id="tocS_CreateWorkspaceImageResult">CreateWorkspaceImageResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspaceimageresult"></a>
<a id="schema_CreateWorkspaceImageResult"></a>
<a id="tocScreateworkspaceimageresult"></a>
<a id="tocscreateworkspaceimageresult"></a>

```json
{
  "ImageId": {},
  "Name": {},
  "Description": {},
  "OperatingSystem": {
    "Type": {}
  },
  "State": {},
  "RequiredTenancy": {},
  "Created": {},
  "OwnerAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|OperatingSystem|object|false|none|none|
|State|object|false|none|none|
|RequiredTenancy|object|false|none|none|
|Created|object|false|none|none|
|OwnerAccountId|object|false|none|none|

<h2 id="tocS_CreateWorkspaceImageRequest">CreateWorkspaceImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspaceimagerequest"></a>
<a id="schema_CreateWorkspaceImageRequest"></a>
<a id="tocScreateworkspaceimagerequest"></a>
<a id="tocscreateworkspaceimagerequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "WorkspaceId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|true|none|none|
|WorkspaceId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateWorkspacesResult">CreateWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspacesresult"></a>
<a id="schema_CreateWorkspacesResult"></a>
<a id="tocScreateworkspacesresult"></a>
<a id="tocscreateworkspacesresult"></a>

```json
{
  "FailedRequests": {},
  "PendingRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRequests|object|false|none|none|
|PendingRequests|object|false|none|none|

<h2 id="tocS_CreateWorkspacesRequest">CreateWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkspacesrequest"></a>
<a id="schema_CreateWorkspacesRequest"></a>
<a id="tocScreateworkspacesrequest"></a>
<a id="tocscreateworkspacesrequest"></a>

```json
{
  "Workspaces": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Workspaces|object|true|none|none|

<h2 id="tocS_DeleteClientBrandingResult">DeleteClientBrandingResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclientbrandingresult"></a>
<a id="schema_DeleteClientBrandingResult"></a>
<a id="tocSdeleteclientbrandingresult"></a>
<a id="tocsdeleteclientbrandingresult"></a>

```json
{}
```

<h2 id="tocS_DeleteClientBrandingRequest">DeleteClientBrandingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclientbrandingrequest"></a>
<a id="schema_DeleteClientBrandingRequest"></a>
<a id="tocSdeleteclientbrandingrequest"></a>
<a id="tocsdeleteclientbrandingrequest"></a>

```json
{
  "ResourceId": {},
  "Platforms": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|Platforms|object|true|none|none|

<h2 id="tocS_DeleteConnectClientAddInResult">DeleteConnectClientAddInResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectclientaddinresult"></a>
<a id="schema_DeleteConnectClientAddInResult"></a>
<a id="tocSdeleteconnectclientaddinresult"></a>
<a id="tocsdeleteconnectclientaddinresult"></a>

```json
{}
```

<h2 id="tocS_DeleteConnectClientAddInRequest">DeleteConnectClientAddInRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectclientaddinrequest"></a>
<a id="schema_DeleteConnectClientAddInRequest"></a>
<a id="tocSdeleteconnectclientaddinrequest"></a>
<a id="tocsdeleteconnectclientaddinrequest"></a>

```json
{
  "AddInId": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddInId|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_DeleteConnectionAliasResult">DeleteConnectionAliasResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionaliasresult"></a>
<a id="schema_DeleteConnectionAliasResult"></a>
<a id="tocSdeleteconnectionaliasresult"></a>
<a id="tocsdeleteconnectionaliasresult"></a>

```json
{}
```

<h2 id="tocS_DeleteConnectionAliasRequest">DeleteConnectionAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionaliasrequest"></a>
<a id="schema_DeleteConnectionAliasRequest"></a>
<a id="tocSdeleteconnectionaliasrequest"></a>
<a id="tocsdeleteconnectionaliasrequest"></a>

```json
{
  "AliasId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|

<h2 id="tocS_DeleteIpGroupResult">DeleteIpGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipgroupresult"></a>
<a id="schema_DeleteIpGroupResult"></a>
<a id="tocSdeleteipgroupresult"></a>
<a id="tocsdeleteipgroupresult"></a>

```json
{}
```

<h2 id="tocS_DeleteIpGroupRequest">DeleteIpGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipgrouprequest"></a>
<a id="schema_DeleteIpGroupRequest"></a>
<a id="tocSdeleteipgrouprequest"></a>
<a id="tocsdeleteipgrouprequest"></a>

```json
{
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|

<h2 id="tocS_DeleteTagsResult">DeleteTagsResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsresult"></a>
<a id="schema_DeleteTagsResult"></a>
<a id="tocSdeletetagsresult"></a>
<a id="tocsdeletetagsresult"></a>

```json
{}
```

<h2 id="tocS_DeleteTagsRequest">DeleteTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsrequest"></a>
<a id="schema_DeleteTagsRequest"></a>
<a id="tocSdeletetagsrequest"></a>
<a id="tocsdeletetagsrequest"></a>

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

<h2 id="tocS_DeleteWorkspaceBundleResult">DeleteWorkspaceBundleResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkspacebundleresult"></a>
<a id="schema_DeleteWorkspaceBundleResult"></a>
<a id="tocSdeleteworkspacebundleresult"></a>
<a id="tocsdeleteworkspacebundleresult"></a>

```json
{}
```

<h2 id="tocS_DeleteWorkspaceBundleRequest">DeleteWorkspaceBundleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkspacebundlerequest"></a>
<a id="schema_DeleteWorkspaceBundleRequest"></a>
<a id="tocSdeleteworkspacebundlerequest"></a>
<a id="tocsdeleteworkspacebundlerequest"></a>

```json
{
  "BundleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BundleId|object|false|none|none|

<h2 id="tocS_DeleteWorkspaceImageResult">DeleteWorkspaceImageResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkspaceimageresult"></a>
<a id="schema_DeleteWorkspaceImageResult"></a>
<a id="tocSdeleteworkspaceimageresult"></a>
<a id="tocsdeleteworkspaceimageresult"></a>

```json
{}
```

<h2 id="tocS_DeleteWorkspaceImageRequest">DeleteWorkspaceImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkspaceimagerequest"></a>
<a id="schema_DeleteWorkspaceImageRequest"></a>
<a id="tocSdeleteworkspaceimagerequest"></a>
<a id="tocsdeleteworkspaceimagerequest"></a>

```json
{
  "ImageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|true|none|none|

<h2 id="tocS_DeregisterWorkspaceDirectoryResult">DeregisterWorkspaceDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterworkspacedirectoryresult"></a>
<a id="schema_DeregisterWorkspaceDirectoryResult"></a>
<a id="tocSderegisterworkspacedirectoryresult"></a>
<a id="tocsderegisterworkspacedirectoryresult"></a>

```json
{}
```

<h2 id="tocS_DeregisterWorkspaceDirectoryRequest">DeregisterWorkspaceDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterworkspacedirectoryrequest"></a>
<a id="schema_DeregisterWorkspaceDirectoryRequest"></a>
<a id="tocSderegisterworkspacedirectoryrequest"></a>
<a id="tocsderegisterworkspacedirectoryrequest"></a>

```json
{
  "DirectoryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|

<h2 id="tocS_DescribeAccountResult">DescribeAccountResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountresult"></a>
<a id="schema_DescribeAccountResult"></a>
<a id="tocSdescribeaccountresult"></a>
<a id="tocsdescribeaccountresult"></a>

```json
{
  "DedicatedTenancySupport": {},
  "DedicatedTenancyManagementCidrRange": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DedicatedTenancySupport|object|false|none|none|
|DedicatedTenancyManagementCidrRange|object|false|none|none|

<h2 id="tocS_DescribeAccountRequest">DescribeAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountrequest"></a>
<a id="schema_DescribeAccountRequest"></a>
<a id="tocSdescribeaccountrequest"></a>
<a id="tocsdescribeaccountrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAccountModificationsResult">DescribeAccountModificationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountmodificationsresult"></a>
<a id="schema_DescribeAccountModificationsResult"></a>
<a id="tocSdescribeaccountmodificationsresult"></a>
<a id="tocsdescribeaccountmodificationsresult"></a>

```json
{
  "AccountModifications": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountModifications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAccountModificationsRequest">DescribeAccountModificationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountmodificationsrequest"></a>
<a id="schema_DescribeAccountModificationsRequest"></a>
<a id="tocSdescribeaccountmodificationsrequest"></a>
<a id="tocsdescribeaccountmodificationsrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeClientBrandingResult">DescribeClientBrandingResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclientbrandingresult"></a>
<a id="schema_DescribeClientBrandingResult"></a>
<a id="tocSdescribeclientbrandingresult"></a>
<a id="tocsdescribeclientbrandingresult"></a>

```json
{
  "DeviceTypeWindows": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeOsx": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeAndroid": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeIos": {
    "LogoUrl": {},
    "Logo2xUrl": {},
    "Logo3xUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeLinux": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeWeb": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceTypeWindows|object|false|none|none|
|DeviceTypeOsx|object|false|none|none|
|DeviceTypeAndroid|object|false|none|none|
|DeviceTypeIos|object|false|none|none|
|DeviceTypeLinux|object|false|none|none|
|DeviceTypeWeb|object|false|none|none|

<h2 id="tocS_DescribeClientBrandingRequest">DescribeClientBrandingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclientbrandingrequest"></a>
<a id="schema_DescribeClientBrandingRequest"></a>
<a id="tocSdescribeclientbrandingrequest"></a>
<a id="tocsdescribeclientbrandingrequest"></a>

```json
{
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|

<h2 id="tocS_DescribeClientPropertiesResult">DescribeClientPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclientpropertiesresult"></a>
<a id="schema_DescribeClientPropertiesResult"></a>
<a id="tocSdescribeclientpropertiesresult"></a>
<a id="tocsdescribeclientpropertiesresult"></a>

```json
{
  "ClientPropertiesList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientPropertiesList|object|false|none|none|

<h2 id="tocS_DescribeClientPropertiesRequest">DescribeClientPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclientpropertiesrequest"></a>
<a id="schema_DescribeClientPropertiesRequest"></a>
<a id="tocSdescribeclientpropertiesrequest"></a>
<a id="tocsdescribeclientpropertiesrequest"></a>

```json
{
  "ResourceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIds|object|true|none|none|

<h2 id="tocS_DescribeConnectClientAddInsResult">DescribeConnectClientAddInsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectclientaddinsresult"></a>
<a id="schema_DescribeConnectClientAddInsResult"></a>
<a id="tocSdescribeconnectclientaddinsresult"></a>
<a id="tocsdescribeconnectclientaddinsresult"></a>

```json
{
  "AddIns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddIns|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConnectClientAddInsRequest">DescribeConnectClientAddInsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectclientaddinsrequest"></a>
<a id="schema_DescribeConnectClientAddInsRequest"></a>
<a id="tocSdescribeconnectclientaddinsrequest"></a>
<a id="tocsdescribeconnectclientaddinsrequest"></a>

```json
{
  "ResourceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeConnectionAliasPermissionsResult">DescribeConnectionAliasPermissionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionaliaspermissionsresult"></a>
<a id="schema_DescribeConnectionAliasPermissionsResult"></a>
<a id="tocSdescribeconnectionaliaspermissionsresult"></a>
<a id="tocsdescribeconnectionaliaspermissionsresult"></a>

```json
{
  "AliasId": {},
  "ConnectionAliasPermissions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|false|none|none|
|ConnectionAliasPermissions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConnectionAliasPermissionsRequest">DescribeConnectionAliasPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionaliaspermissionsrequest"></a>
<a id="schema_DescribeConnectionAliasPermissionsRequest"></a>
<a id="tocSdescribeconnectionaliaspermissionsrequest"></a>
<a id="tocsdescribeconnectionaliaspermissionsrequest"></a>

```json
{
  "AliasId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeConnectionAliasesResult">DescribeConnectionAliasesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionaliasesresult"></a>
<a id="schema_DescribeConnectionAliasesResult"></a>
<a id="tocSdescribeconnectionaliasesresult"></a>
<a id="tocsdescribeconnectionaliasesresult"></a>

```json
{
  "ConnectionAliases": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionAliases|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConnectionAliasesRequest">DescribeConnectionAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionaliasesrequest"></a>
<a id="schema_DescribeConnectionAliasesRequest"></a>
<a id="tocSdescribeconnectionaliasesrequest"></a>
<a id="tocsdescribeconnectionaliasesrequest"></a>

```json
{
  "AliasIds": {},
  "ResourceId": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasIds|object|false|none|none|
|ResourceId|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeIpGroupsResult">DescribeIpGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeipgroupsresult"></a>
<a id="schema_DescribeIpGroupsResult"></a>
<a id="tocSdescribeipgroupsresult"></a>
<a id="tocsdescribeipgroupsresult"></a>

```json
{
  "Result": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Result|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeIpGroupsRequest">DescribeIpGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeipgroupsrequest"></a>
<a id="schema_DescribeIpGroupsRequest"></a>
<a id="tocSdescribeipgroupsrequest"></a>
<a id="tocsdescribeipgroupsrequest"></a>

```json
{
  "GroupIds": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupIds|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeTagsResult">DescribeTagsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsresult"></a>
<a id="schema_DescribeTagsResult"></a>
<a id="tocSdescribetagsresult"></a>
<a id="tocsdescribetagsresult"></a>

```json
{
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

<h2 id="tocS_DescribeTagsRequest">DescribeTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsrequest"></a>
<a id="schema_DescribeTagsRequest"></a>
<a id="tocSdescribetagsrequest"></a>
<a id="tocsdescribetagsrequest"></a>

```json
{
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|

<h2 id="tocS_DescribeWorkspaceBundlesResult">DescribeWorkspaceBundlesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacebundlesresult"></a>
<a id="schema_DescribeWorkspaceBundlesResult"></a>
<a id="tocSdescribeworkspacebundlesresult"></a>
<a id="tocsdescribeworkspacebundlesresult"></a>

```json
{
  "Bundles": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bundles|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceBundlesRequest">DescribeWorkspaceBundlesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacebundlesrequest"></a>
<a id="schema_DescribeWorkspaceBundlesRequest"></a>
<a id="tocSdescribeworkspacebundlesrequest"></a>
<a id="tocsdescribeworkspacebundlesrequest"></a>

```json
{
  "BundleIds": {},
  "Owner": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BundleIds|object|false|none|none|
|Owner|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceDirectoriesResult">DescribeWorkspaceDirectoriesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacedirectoriesresult"></a>
<a id="schema_DescribeWorkspaceDirectoriesResult"></a>
<a id="tocSdescribeworkspacedirectoriesresult"></a>
<a id="tocsdescribeworkspacedirectoriesresult"></a>

```json
{
  "Directories": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Directories|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceDirectoriesRequest">DescribeWorkspaceDirectoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacedirectoriesrequest"></a>
<a id="schema_DescribeWorkspaceDirectoriesRequest"></a>
<a id="tocSdescribeworkspacedirectoriesrequest"></a>
<a id="tocsdescribeworkspacedirectoriesrequest"></a>

```json
{
  "DirectoryIds": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryIds|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceImagePermissionsResult">DescribeWorkspaceImagePermissionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspaceimagepermissionsresult"></a>
<a id="schema_DescribeWorkspaceImagePermissionsResult"></a>
<a id="tocSdescribeworkspaceimagepermissionsresult"></a>
<a id="tocsdescribeworkspaceimagepermissionsresult"></a>

```json
{
  "ImageId": {},
  "ImagePermissions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|false|none|none|
|ImagePermissions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceImagePermissionsRequest">DescribeWorkspaceImagePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspaceimagepermissionsrequest"></a>
<a id="schema_DescribeWorkspaceImagePermissionsRequest"></a>
<a id="tocSdescribeworkspaceimagepermissionsrequest"></a>
<a id="tocsdescribeworkspaceimagepermissionsrequest"></a>

```json
{
  "ImageId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceImagesResult">DescribeWorkspaceImagesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspaceimagesresult"></a>
<a id="schema_DescribeWorkspaceImagesResult"></a>
<a id="tocSdescribeworkspaceimagesresult"></a>
<a id="tocsdescribeworkspaceimagesresult"></a>

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

<h2 id="tocS_DescribeWorkspaceImagesRequest">DescribeWorkspaceImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspaceimagesrequest"></a>
<a id="schema_DescribeWorkspaceImagesRequest"></a>
<a id="tocSdescribeworkspaceimagesrequest"></a>
<a id="tocsdescribeworkspaceimagesrequest"></a>

```json
{
  "ImageIds": {},
  "ImageType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageIds|object|false|none|none|
|ImageType|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceSnapshotsResult">DescribeWorkspaceSnapshotsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacesnapshotsresult"></a>
<a id="schema_DescribeWorkspaceSnapshotsResult"></a>
<a id="tocSdescribeworkspacesnapshotsresult"></a>
<a id="tocsdescribeworkspacesnapshotsresult"></a>

```json
{
  "RebuildSnapshots": {},
  "RestoreSnapshots": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RebuildSnapshots|object|false|none|none|
|RestoreSnapshots|object|false|none|none|

<h2 id="tocS_DescribeWorkspaceSnapshotsRequest">DescribeWorkspaceSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacesnapshotsrequest"></a>
<a id="schema_DescribeWorkspaceSnapshotsRequest"></a>
<a id="tocSdescribeworkspacesnapshotsrequest"></a>
<a id="tocsdescribeworkspacesnapshotsrequest"></a>

```json
{
  "WorkspaceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|true|none|none|

<h2 id="tocS_DescribeWorkspacesResult">DescribeWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacesresult"></a>
<a id="schema_DescribeWorkspacesResult"></a>
<a id="tocSdescribeworkspacesresult"></a>
<a id="tocsdescribeworkspacesresult"></a>

```json
{
  "Workspaces": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Workspaces|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspacesRequest">DescribeWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacesrequest"></a>
<a id="schema_DescribeWorkspacesRequest"></a>
<a id="tocSdescribeworkspacesrequest"></a>
<a id="tocsdescribeworkspacesrequest"></a>

```json
{
  "WorkspaceIds": {},
  "DirectoryId": {},
  "UserName": {},
  "BundleId": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceIds|object|false|none|none|
|DirectoryId|object|false|none|none|
|UserName|object|false|none|none|
|BundleId|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspacesConnectionStatusResult">DescribeWorkspacesConnectionStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacesconnectionstatusresult"></a>
<a id="schema_DescribeWorkspacesConnectionStatusResult"></a>
<a id="tocSdescribeworkspacesconnectionstatusresult"></a>
<a id="tocsdescribeworkspacesconnectionstatusresult"></a>

```json
{
  "WorkspacesConnectionStatus": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspacesConnectionStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWorkspacesConnectionStatusRequest">DescribeWorkspacesConnectionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworkspacesconnectionstatusrequest"></a>
<a id="schema_DescribeWorkspacesConnectionStatusRequest"></a>
<a id="tocSdescribeworkspacesconnectionstatusrequest"></a>
<a id="tocsdescribeworkspacesconnectionstatusrequest"></a>

```json
{
  "WorkspaceIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DisassociateConnectionAliasResult">DisassociateConnectionAliasResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconnectionaliasresult"></a>
<a id="schema_DisassociateConnectionAliasResult"></a>
<a id="tocSdisassociateconnectionaliasresult"></a>
<a id="tocsdisassociateconnectionaliasresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateConnectionAliasRequest">DisassociateConnectionAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconnectionaliasrequest"></a>
<a id="schema_DisassociateConnectionAliasRequest"></a>
<a id="tocSdisassociateconnectionaliasrequest"></a>
<a id="tocsdisassociateconnectionaliasrequest"></a>

```json
{
  "AliasId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|

<h2 id="tocS_DisassociateIpGroupsResult">DisassociateIpGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateipgroupsresult"></a>
<a id="schema_DisassociateIpGroupsResult"></a>
<a id="tocSdisassociateipgroupsresult"></a>
<a id="tocsdisassociateipgroupsresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateIpGroupsRequest">DisassociateIpGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateipgroupsrequest"></a>
<a id="schema_DisassociateIpGroupsRequest"></a>
<a id="tocSdisassociateipgroupsrequest"></a>
<a id="tocsdisassociateipgroupsrequest"></a>

```json
{
  "DirectoryId": {},
  "GroupIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|GroupIds|object|true|none|none|

<h2 id="tocS_ImportClientBrandingResult">ImportClientBrandingResult</h2>
<!-- backwards compatibility -->
<a id="schemaimportclientbrandingresult"></a>
<a id="schema_ImportClientBrandingResult"></a>
<a id="tocSimportclientbrandingresult"></a>
<a id="tocsimportclientbrandingresult"></a>

```json
{
  "DeviceTypeWindows": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeOsx": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeAndroid": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeIos": {
    "LogoUrl": {},
    "Logo2xUrl": {},
    "Logo3xUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeLinux": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeWeb": {
    "LogoUrl": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceTypeWindows|object|false|none|none|
|DeviceTypeOsx|object|false|none|none|
|DeviceTypeAndroid|object|false|none|none|
|DeviceTypeIos|object|false|none|none|
|DeviceTypeLinux|object|false|none|none|
|DeviceTypeWeb|object|false|none|none|

<h2 id="tocS_ImportClientBrandingRequest">ImportClientBrandingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportclientbrandingrequest"></a>
<a id="schema_ImportClientBrandingRequest"></a>
<a id="tocSimportclientbrandingrequest"></a>
<a id="tocsimportclientbrandingrequest"></a>

```json
{
  "ResourceId": {},
  "DeviceTypeWindows": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeOsx": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeAndroid": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeIos": {
    "Logo": {},
    "Logo2x": {},
    "Logo3x": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeLinux": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DeviceTypeWeb": {
    "Logo": {},
    "SupportEmail": {},
    "SupportLink": {},
    "ForgotPasswordLink": {},
    "LoginMessage": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|DeviceTypeWindows|object|false|none|none|
|DeviceTypeOsx|object|false|none|none|
|DeviceTypeAndroid|object|false|none|none|
|DeviceTypeIos|object|false|none|none|
|DeviceTypeLinux|object|false|none|none|
|DeviceTypeWeb|object|false|none|none|

<h2 id="tocS_ImportWorkspaceImageResult">ImportWorkspaceImageResult</h2>
<!-- backwards compatibility -->
<a id="schemaimportworkspaceimageresult"></a>
<a id="schema_ImportWorkspaceImageResult"></a>
<a id="tocSimportworkspaceimageresult"></a>
<a id="tocsimportworkspaceimageresult"></a>

```json
{
  "ImageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|false|none|none|

<h2 id="tocS_ImportWorkspaceImageRequest">ImportWorkspaceImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportworkspaceimagerequest"></a>
<a id="schema_ImportWorkspaceImageRequest"></a>
<a id="tocSimportworkspaceimagerequest"></a>
<a id="tocsimportworkspaceimagerequest"></a>

```json
{
  "Ec2ImageId": {},
  "IngestionProcess": {},
  "ImageName": {},
  "ImageDescription": {},
  "Tags": {},
  "Applications": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ec2ImageId|object|true|none|none|
|IngestionProcess|object|true|none|none|
|ImageName|object|true|none|none|
|ImageDescription|object|true|none|none|
|Tags|object|false|none|none|
|Applications|object|false|none|none|

<h2 id="tocS_ListAvailableManagementCidrRangesResult">ListAvailableManagementCidrRangesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablemanagementcidrrangesresult"></a>
<a id="schema_ListAvailableManagementCidrRangesResult"></a>
<a id="tocSlistavailablemanagementcidrrangesresult"></a>
<a id="tocslistavailablemanagementcidrrangesresult"></a>

```json
{
  "ManagementCidrRanges": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagementCidrRanges|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAvailableManagementCidrRangesRequest">ListAvailableManagementCidrRangesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablemanagementcidrrangesrequest"></a>
<a id="schema_ListAvailableManagementCidrRangesRequest"></a>
<a id="tocSlistavailablemanagementcidrrangesrequest"></a>
<a id="tocslistavailablemanagementcidrrangesrequest"></a>

```json
{
  "ManagementCidrRangeConstraint": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagementCidrRangeConstraint|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MigrateWorkspaceResult">MigrateWorkspaceResult</h2>
<!-- backwards compatibility -->
<a id="schemamigrateworkspaceresult"></a>
<a id="schema_MigrateWorkspaceResult"></a>
<a id="tocSmigrateworkspaceresult"></a>
<a id="tocsmigrateworkspaceresult"></a>

```json
{
  "SourceWorkspaceId": {},
  "TargetWorkspaceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceWorkspaceId|object|false|none|none|
|TargetWorkspaceId|object|false|none|none|

<h2 id="tocS_MigrateWorkspaceRequest">MigrateWorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemamigrateworkspacerequest"></a>
<a id="schema_MigrateWorkspaceRequest"></a>
<a id="tocSmigrateworkspacerequest"></a>
<a id="tocsmigrateworkspacerequest"></a>

```json
{
  "SourceWorkspaceId": {},
  "BundleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceWorkspaceId|object|true|none|none|
|BundleId|object|true|none|none|

<h2 id="tocS_OperationInProgressException">OperationInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationinprogressexception"></a>
<a id="schema_OperationInProgressException"></a>
<a id="tocSoperationinprogressexception"></a>
<a id="tocsoperationinprogressexception"></a>

```json
null
```

<h2 id="tocS_ModifyAccountResult">ModifyAccountResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyaccountresult"></a>
<a id="schema_ModifyAccountResult"></a>
<a id="tocSmodifyaccountresult"></a>
<a id="tocsmodifyaccountresult"></a>

```json
{}
```

<h2 id="tocS_ModifyAccountRequest">ModifyAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyaccountrequest"></a>
<a id="schema_ModifyAccountRequest"></a>
<a id="tocSmodifyaccountrequest"></a>
<a id="tocsmodifyaccountrequest"></a>

```json
{
  "DedicatedTenancySupport": {},
  "DedicatedTenancyManagementCidrRange": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DedicatedTenancySupport|object|false|none|none|
|DedicatedTenancyManagementCidrRange|object|false|none|none|

<h2 id="tocS_ModifyCertificateBasedAuthPropertiesResult">ModifyCertificateBasedAuthPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifycertificatebasedauthpropertiesresult"></a>
<a id="schema_ModifyCertificateBasedAuthPropertiesResult"></a>
<a id="tocSmodifycertificatebasedauthpropertiesresult"></a>
<a id="tocsmodifycertificatebasedauthpropertiesresult"></a>

```json
{}
```

<h2 id="tocS_ModifyCertificateBasedAuthPropertiesRequest">ModifyCertificateBasedAuthPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifycertificatebasedauthpropertiesrequest"></a>
<a id="schema_ModifyCertificateBasedAuthPropertiesRequest"></a>
<a id="tocSmodifycertificatebasedauthpropertiesrequest"></a>
<a id="tocsmodifycertificatebasedauthpropertiesrequest"></a>

```json
{
  "ResourceId": {},
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  },
  "PropertiesToDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|CertificateBasedAuthProperties|object|false|none|none|
|PropertiesToDelete|object|false|none|none|

<h2 id="tocS_ModifyClientPropertiesResult">ModifyClientPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyclientpropertiesresult"></a>
<a id="schema_ModifyClientPropertiesResult"></a>
<a id="tocSmodifyclientpropertiesresult"></a>
<a id="tocsmodifyclientpropertiesresult"></a>

```json
{}
```

<h2 id="tocS_ModifyClientPropertiesRequest">ModifyClientPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyclientpropertiesrequest"></a>
<a id="schema_ModifyClientPropertiesRequest"></a>
<a id="tocSmodifyclientpropertiesrequest"></a>
<a id="tocsmodifyclientpropertiesrequest"></a>

```json
{
  "ResourceId": {},
  "ClientProperties": {
    "ReconnectEnabled": {},
    "LogUploadEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|ClientProperties|object|true|none|none|

<h2 id="tocS_ModifySamlPropertiesResult">ModifySamlPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifysamlpropertiesresult"></a>
<a id="schema_ModifySamlPropertiesResult"></a>
<a id="tocSmodifysamlpropertiesresult"></a>
<a id="tocsmodifysamlpropertiesresult"></a>

```json
{}
```

<h2 id="tocS_ModifySamlPropertiesRequest">ModifySamlPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifysamlpropertiesrequest"></a>
<a id="schema_ModifySamlPropertiesRequest"></a>
<a id="tocSmodifysamlpropertiesrequest"></a>
<a id="tocsmodifysamlpropertiesrequest"></a>

```json
{
  "ResourceId": {},
  "SamlProperties": {
    "Status": {},
    "UserAccessUrl": {},
    "RelayStateParameterName": {}
  },
  "PropertiesToDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|SamlProperties|object|false|none|none|
|PropertiesToDelete|object|false|none|none|

<h2 id="tocS_ModifySelfservicePermissionsResult">ModifySelfservicePermissionsResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyselfservicepermissionsresult"></a>
<a id="schema_ModifySelfservicePermissionsResult"></a>
<a id="tocSmodifyselfservicepermissionsresult"></a>
<a id="tocsmodifyselfservicepermissionsresult"></a>

```json
{}
```

<h2 id="tocS_ModifySelfservicePermissionsRequest">ModifySelfservicePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyselfservicepermissionsrequest"></a>
<a id="schema_ModifySelfservicePermissionsRequest"></a>
<a id="tocSmodifyselfservicepermissionsrequest"></a>
<a id="tocsmodifyselfservicepermissionsrequest"></a>

```json
{
  "ResourceId": {},
  "SelfservicePermissions": {
    "RestartWorkspace": {},
    "IncreaseVolumeSize": {},
    "ChangeComputeType": {},
    "SwitchRunningMode": {},
    "RebuildWorkspace": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|SelfservicePermissions|object|true|none|none|

<h2 id="tocS_ModifyWorkspaceAccessPropertiesResult">ModifyWorkspaceAccessPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspaceaccesspropertiesresult"></a>
<a id="schema_ModifyWorkspaceAccessPropertiesResult"></a>
<a id="tocSmodifyworkspaceaccesspropertiesresult"></a>
<a id="tocsmodifyworkspaceaccesspropertiesresult"></a>

```json
{}
```

<h2 id="tocS_ModifyWorkspaceAccessPropertiesRequest">ModifyWorkspaceAccessPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspaceaccesspropertiesrequest"></a>
<a id="schema_ModifyWorkspaceAccessPropertiesRequest"></a>
<a id="tocSmodifyworkspaceaccesspropertiesrequest"></a>
<a id="tocsmodifyworkspaceaccesspropertiesrequest"></a>

```json
{
  "ResourceId": {},
  "WorkspaceAccessProperties": {
    "DeviceTypeWindows": {},
    "DeviceTypeOsx": {},
    "DeviceTypeWeb": {},
    "DeviceTypeIos": {},
    "DeviceTypeAndroid": {},
    "DeviceTypeChromeOs": {},
    "DeviceTypeZeroClient": {},
    "DeviceTypeLinux": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|WorkspaceAccessProperties|object|true|none|none|

<h2 id="tocS_ModifyWorkspaceCreationPropertiesResult">ModifyWorkspaceCreationPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspacecreationpropertiesresult"></a>
<a id="schema_ModifyWorkspaceCreationPropertiesResult"></a>
<a id="tocSmodifyworkspacecreationpropertiesresult"></a>
<a id="tocsmodifyworkspacecreationpropertiesresult"></a>

```json
{}
```

<h2 id="tocS_ModifyWorkspaceCreationPropertiesRequest">ModifyWorkspaceCreationPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspacecreationpropertiesrequest"></a>
<a id="schema_ModifyWorkspaceCreationPropertiesRequest"></a>
<a id="tocSmodifyworkspacecreationpropertiesrequest"></a>
<a id="tocsmodifyworkspacecreationpropertiesrequest"></a>

```json
{
  "ResourceId": {},
  "WorkspaceCreationProperties": {
    "EnableWorkDocs": {},
    "EnableInternetAccess": {},
    "DefaultOu": {},
    "CustomSecurityGroupId": {},
    "UserEnabledAsLocalAdministrator": {},
    "EnableMaintenanceMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|WorkspaceCreationProperties|object|true|none|none|

<h2 id="tocS_ModifyWorkspacePropertiesResult">ModifyWorkspacePropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspacepropertiesresult"></a>
<a id="schema_ModifyWorkspacePropertiesResult"></a>
<a id="tocSmodifyworkspacepropertiesresult"></a>
<a id="tocsmodifyworkspacepropertiesresult"></a>

```json
{}
```

<h2 id="tocS_ModifyWorkspacePropertiesRequest">ModifyWorkspacePropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspacepropertiesrequest"></a>
<a id="schema_ModifyWorkspacePropertiesRequest"></a>
<a id="tocSmodifyworkspacepropertiesrequest"></a>
<a id="tocsmodifyworkspacepropertiesrequest"></a>

```json
{
  "WorkspaceId": {},
  "WorkspaceProperties": {
    "RunningMode": {},
    "RunningModeAutoStopTimeoutInMinutes": {},
    "RootVolumeSizeGib": {},
    "UserVolumeSizeGib": {},
    "ComputeTypeName": {},
    "Protocols": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|true|none|none|
|WorkspaceProperties|object|true|none|none|

<h2 id="tocS_UnsupportedWorkspaceConfigurationException">UnsupportedWorkspaceConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedworkspaceconfigurationexception"></a>
<a id="schema_UnsupportedWorkspaceConfigurationException"></a>
<a id="tocSunsupportedworkspaceconfigurationexception"></a>
<a id="tocsunsupportedworkspaceconfigurationexception"></a>

```json
null
```

<h2 id="tocS_ModifyWorkspaceStateResult">ModifyWorkspaceStateResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspacestateresult"></a>
<a id="schema_ModifyWorkspaceStateResult"></a>
<a id="tocSmodifyworkspacestateresult"></a>
<a id="tocsmodifyworkspacestateresult"></a>

```json
{}
```

<h2 id="tocS_ModifyWorkspaceStateRequest">ModifyWorkspaceStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyworkspacestaterequest"></a>
<a id="schema_ModifyWorkspaceStateRequest"></a>
<a id="tocSmodifyworkspacestaterequest"></a>
<a id="tocsmodifyworkspacestaterequest"></a>

```json
{
  "WorkspaceId": {},
  "WorkspaceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|true|none|none|
|WorkspaceState|object|true|none|none|

<h2 id="tocS_RebootWorkspacesResult">RebootWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schemarebootworkspacesresult"></a>
<a id="schema_RebootWorkspacesResult"></a>
<a id="tocSrebootworkspacesresult"></a>
<a id="tocsrebootworkspacesresult"></a>

```json
{
  "FailedRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRequests|object|false|none|none|

<h2 id="tocS_RebootWorkspacesRequest">RebootWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootworkspacesrequest"></a>
<a id="schema_RebootWorkspacesRequest"></a>
<a id="tocSrebootworkspacesrequest"></a>
<a id="tocsrebootworkspacesrequest"></a>

```json
{
  "RebootWorkspaceRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RebootWorkspaceRequests|object|true|none|none|

<h2 id="tocS_RebuildWorkspacesResult">RebuildWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schemarebuildworkspacesresult"></a>
<a id="schema_RebuildWorkspacesResult"></a>
<a id="tocSrebuildworkspacesresult"></a>
<a id="tocsrebuildworkspacesresult"></a>

```json
{
  "FailedRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRequests|object|false|none|none|

<h2 id="tocS_RebuildWorkspacesRequest">RebuildWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebuildworkspacesrequest"></a>
<a id="schema_RebuildWorkspacesRequest"></a>
<a id="tocSrebuildworkspacesrequest"></a>
<a id="tocsrebuildworkspacesrequest"></a>

```json
{
  "RebuildWorkspaceRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RebuildWorkspaceRequests|object|true|none|none|

<h2 id="tocS_RegisterWorkspaceDirectoryResult">RegisterWorkspaceDirectoryResult</h2>
<!-- backwards compatibility -->
<a id="schemaregisterworkspacedirectoryresult"></a>
<a id="schema_RegisterWorkspaceDirectoryResult"></a>
<a id="tocSregisterworkspacedirectoryresult"></a>
<a id="tocsregisterworkspacedirectoryresult"></a>

```json
{}
```

<h2 id="tocS_RegisterWorkspaceDirectoryRequest">RegisterWorkspaceDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterworkspacedirectoryrequest"></a>
<a id="schema_RegisterWorkspaceDirectoryRequest"></a>
<a id="tocSregisterworkspacedirectoryrequest"></a>
<a id="tocsregisterworkspacedirectoryrequest"></a>

```json
{
  "DirectoryId": {},
  "SubnetIds": {},
  "EnableWorkDocs": {},
  "EnableSelfService": {},
  "Tenancy": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|SubnetIds|object|false|none|none|
|EnableWorkDocs|object|true|none|none|
|EnableSelfService|object|false|none|none|
|Tenancy|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_WorkspacesDefaultRoleNotFoundException">WorkspacesDefaultRoleNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacesdefaultrolenotfoundexception"></a>
<a id="schema_WorkspacesDefaultRoleNotFoundException"></a>
<a id="tocSworkspacesdefaultrolenotfoundexception"></a>
<a id="tocsworkspacesdefaultrolenotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedNetworkConfigurationException">UnsupportedNetworkConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportednetworkconfigurationexception"></a>
<a id="schema_UnsupportedNetworkConfigurationException"></a>
<a id="tocSunsupportednetworkconfigurationexception"></a>
<a id="tocsunsupportednetworkconfigurationexception"></a>

```json
null
```

<h2 id="tocS_RestoreWorkspaceResult">RestoreWorkspaceResult</h2>
<!-- backwards compatibility -->
<a id="schemarestoreworkspaceresult"></a>
<a id="schema_RestoreWorkspaceResult"></a>
<a id="tocSrestoreworkspaceresult"></a>
<a id="tocsrestoreworkspaceresult"></a>

```json
{}
```

<h2 id="tocS_RestoreWorkspaceRequest">RestoreWorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoreworkspacerequest"></a>
<a id="schema_RestoreWorkspaceRequest"></a>
<a id="tocSrestoreworkspacerequest"></a>
<a id="tocsrestoreworkspacerequest"></a>

```json
{
  "WorkspaceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|true|none|none|

<h2 id="tocS_RevokeIpRulesResult">RevokeIpRulesResult</h2>
<!-- backwards compatibility -->
<a id="schemarevokeiprulesresult"></a>
<a id="schema_RevokeIpRulesResult"></a>
<a id="tocSrevokeiprulesresult"></a>
<a id="tocsrevokeiprulesresult"></a>

```json
{}
```

<h2 id="tocS_RevokeIpRulesRequest">RevokeIpRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokeiprulesrequest"></a>
<a id="schema_RevokeIpRulesRequest"></a>
<a id="tocSrevokeiprulesrequest"></a>
<a id="tocsrevokeiprulesrequest"></a>

```json
{
  "GroupId": {},
  "UserRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|UserRules|object|true|none|none|

<h2 id="tocS_StartWorkspacesResult">StartWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schemastartworkspacesresult"></a>
<a id="schema_StartWorkspacesResult"></a>
<a id="tocSstartworkspacesresult"></a>
<a id="tocsstartworkspacesresult"></a>

```json
{
  "FailedRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRequests|object|false|none|none|

<h2 id="tocS_StartWorkspacesRequest">StartWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartworkspacesrequest"></a>
<a id="schema_StartWorkspacesRequest"></a>
<a id="tocSstartworkspacesrequest"></a>
<a id="tocsstartworkspacesrequest"></a>

```json
{
  "StartWorkspaceRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartWorkspaceRequests|object|true|none|none|

<h2 id="tocS_StopWorkspacesResult">StopWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schemastopworkspacesresult"></a>
<a id="schema_StopWorkspacesResult"></a>
<a id="tocSstopworkspacesresult"></a>
<a id="tocsstopworkspacesresult"></a>

```json
{
  "FailedRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRequests|object|false|none|none|

<h2 id="tocS_StopWorkspacesRequest">StopWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopworkspacesrequest"></a>
<a id="schema_StopWorkspacesRequest"></a>
<a id="tocSstopworkspacesrequest"></a>
<a id="tocsstopworkspacesrequest"></a>

```json
{
  "StopWorkspaceRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StopWorkspaceRequests|object|true|none|none|

<h2 id="tocS_TerminateWorkspacesResult">TerminateWorkspacesResult</h2>
<!-- backwards compatibility -->
<a id="schematerminateworkspacesresult"></a>
<a id="schema_TerminateWorkspacesResult"></a>
<a id="tocSterminateworkspacesresult"></a>
<a id="tocsterminateworkspacesresult"></a>

```json
{
  "FailedRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRequests|object|false|none|none|

<h2 id="tocS_TerminateWorkspacesRequest">TerminateWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminateworkspacesrequest"></a>
<a id="schema_TerminateWorkspacesRequest"></a>
<a id="tocSterminateworkspacesrequest"></a>
<a id="tocsterminateworkspacesrequest"></a>

```json
{
  "TerminateWorkspaceRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TerminateWorkspaceRequests|object|true|none|none|

<h2 id="tocS_UpdateConnectClientAddInResult">UpdateConnectClientAddInResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectclientaddinresult"></a>
<a id="schema_UpdateConnectClientAddInResult"></a>
<a id="tocSupdateconnectclientaddinresult"></a>
<a id="tocsupdateconnectclientaddinresult"></a>

```json
{}
```

<h2 id="tocS_UpdateConnectClientAddInRequest">UpdateConnectClientAddInRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectclientaddinrequest"></a>
<a id="schema_UpdateConnectClientAddInRequest"></a>
<a id="tocSupdateconnectclientaddinrequest"></a>
<a id="tocsupdateconnectclientaddinrequest"></a>

```json
{
  "AddInId": {},
  "ResourceId": {},
  "Name": {},
  "URL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddInId|object|true|none|none|
|ResourceId|object|true|none|none|
|Name|object|false|none|none|
|URL|object|false|none|none|

<h2 id="tocS_UpdateConnectionAliasPermissionResult">UpdateConnectionAliasPermissionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionaliaspermissionresult"></a>
<a id="schema_UpdateConnectionAliasPermissionResult"></a>
<a id="tocSupdateconnectionaliaspermissionresult"></a>
<a id="tocsupdateconnectionaliaspermissionresult"></a>

```json
{}
```

<h2 id="tocS_UpdateConnectionAliasPermissionRequest">UpdateConnectionAliasPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionaliaspermissionrequest"></a>
<a id="schema_UpdateConnectionAliasPermissionRequest"></a>
<a id="tocSupdateconnectionaliaspermissionrequest"></a>
<a id="tocsupdateconnectionaliaspermissionrequest"></a>

```json
{
  "AliasId": {},
  "ConnectionAliasPermission": {
    "SharedAccountId": {},
    "AllowAssociation": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|
|ConnectionAliasPermission|object|true|none|none|

<h2 id="tocS_UpdateRulesOfIpGroupResult">UpdateRulesOfIpGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulesofipgroupresult"></a>
<a id="schema_UpdateRulesOfIpGroupResult"></a>
<a id="tocSupdaterulesofipgroupresult"></a>
<a id="tocsupdaterulesofipgroupresult"></a>

```json
{}
```

<h2 id="tocS_UpdateRulesOfIpGroupRequest">UpdateRulesOfIpGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulesofipgrouprequest"></a>
<a id="schema_UpdateRulesOfIpGroupRequest"></a>
<a id="tocSupdaterulesofipgrouprequest"></a>
<a id="tocsupdaterulesofipgrouprequest"></a>

```json
{
  "GroupId": {},
  "UserRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|UserRules|object|true|none|none|

<h2 id="tocS_UpdateWorkspaceBundleResult">UpdateWorkspaceBundleResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkspacebundleresult"></a>
<a id="schema_UpdateWorkspaceBundleResult"></a>
<a id="tocSupdateworkspacebundleresult"></a>
<a id="tocsupdateworkspacebundleresult"></a>

```json
{}
```

<h2 id="tocS_UpdateWorkspaceBundleRequest">UpdateWorkspaceBundleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkspacebundlerequest"></a>
<a id="schema_UpdateWorkspaceBundleRequest"></a>
<a id="tocSupdateworkspacebundlerequest"></a>
<a id="tocsupdateworkspacebundlerequest"></a>

```json
{
  "BundleId": {},
  "ImageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BundleId|object|false|none|none|
|ImageId|object|false|none|none|

<h2 id="tocS_UpdateWorkspaceImagePermissionResult">UpdateWorkspaceImagePermissionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkspaceimagepermissionresult"></a>
<a id="schema_UpdateWorkspaceImagePermissionResult"></a>
<a id="tocSupdateworkspaceimagepermissionresult"></a>
<a id="tocsupdateworkspaceimagepermissionresult"></a>

```json
{}
```

<h2 id="tocS_UpdateWorkspaceImagePermissionRequest">UpdateWorkspaceImagePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkspaceimagepermissionrequest"></a>
<a id="schema_UpdateWorkspaceImagePermissionRequest"></a>
<a id="tocSupdateworkspaceimagepermissionrequest"></a>
<a id="tocsupdateworkspaceimagepermissionrequest"></a>

```json
{
  "ImageId": {},
  "AllowCopyImage": {},
  "SharedAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|true|none|none|
|AllowCopyImage|object|true|none|none|
|SharedAccountId|object|true|none|none|

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AccessPropertyValue">AccessPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspropertyvalue"></a>
<a id="schema_AccessPropertyValue"></a>
<a id="tocSaccesspropertyvalue"></a>
<a id="tocsaccesspropertyvalue"></a>

```json
"ALLOW"
```

<h2 id="tocS_DedicatedTenancyModificationStateEnum">DedicatedTenancyModificationStateEnum</h2>
<!-- backwards compatibility -->
<a id="schemadedicatedtenancymodificationstateenum"></a>
<a id="schema_DedicatedTenancyModificationStateEnum"></a>
<a id="tocSdedicatedtenancymodificationstateenum"></a>
<a id="tocsdedicatedtenancymodificationstateenum"></a>

```json
"PENDING"
```

<h2 id="tocS_DedicatedTenancySupportResultEnum">DedicatedTenancySupportResultEnum</h2>
<!-- backwards compatibility -->
<a id="schemadedicatedtenancysupportresultenum"></a>
<a id="schema_DedicatedTenancySupportResultEnum"></a>
<a id="tocSdedicatedtenancysupportresultenum"></a>
<a id="tocsdedicatedtenancysupportresultenum"></a>

```json
"ENABLED"
```

<h2 id="tocS_DedicatedTenancyManagementCidrRange">DedicatedTenancyManagementCidrRange</h2>
<!-- backwards compatibility -->
<a id="schemadedicatedtenancymanagementcidrrange"></a>
<a id="schema_DedicatedTenancyManagementCidrRange"></a>
<a id="tocSdedicatedtenancymanagementcidrrange"></a>
<a id="tocsdedicatedtenancymanagementcidrrange"></a>

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

<h2 id="tocS_WorkspaceErrorCode">WorkspaceErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceerrorcode"></a>
<a id="schema_WorkspaceErrorCode"></a>
<a id="tocSworkspaceerrorcode"></a>
<a id="tocsworkspaceerrorcode"></a>

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

<h2 id="tocS_AccountModification">AccountModification</h2>
<!-- backwards compatibility -->
<a id="schemaaccountmodification"></a>
<a id="schema_AccountModification"></a>
<a id="tocSaccountmodification"></a>
<a id="tocsaccountmodification"></a>

```json
{
  "ModificationState": {},
  "DedicatedTenancySupport": {},
  "DedicatedTenancyManagementCidrRange": {},
  "StartTime": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModificationState|object|false|none|none|
|DedicatedTenancySupport|object|false|none|none|
|DedicatedTenancyManagementCidrRange|object|false|none|none|
|StartTime|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_AccountModificationList">AccountModificationList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountmodificationlist"></a>
<a id="schema_AccountModificationList"></a>
<a id="tocSaccountmodificationlist"></a>
<a id="tocsaccountmodificationlist"></a>

```json
[
  {
    "ModificationState": {},
    "DedicatedTenancySupport": {},
    "DedicatedTenancyManagementCidrRange": {},
    "StartTime": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_AddInName">AddInName</h2>
<!-- backwards compatibility -->
<a id="schemaaddinname"></a>
<a id="schema_AddInName"></a>
<a id="tocSaddinname"></a>
<a id="tocsaddinname"></a>

```json
"string"
```

<h2 id="tocS_AddInUrl">AddInUrl</h2>
<!-- backwards compatibility -->
<a id="schemaaddinurl"></a>
<a id="schema_AddInUrl"></a>
<a id="tocSaddinurl"></a>
<a id="tocsaddinurl"></a>

```json
"string"
```

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

```json
"string"
```

<h2 id="tocS_AmazonUuid">AmazonUuid</h2>
<!-- backwards compatibility -->
<a id="schemaamazonuuid"></a>
<a id="schema_AmazonUuid"></a>
<a id="tocSamazonuuid"></a>
<a id="tocsamazonuuid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
"Microsoft_Office_2016"
```

<h2 id="tocS_ApplicationList">ApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationlist"></a>
<a id="schema_ApplicationList"></a>
<a id="tocSapplicationlist"></a>
<a id="tocsapplicationlist"></a>

```json
[
  "Microsoft_Office_2016"
]
```

<h2 id="tocS_ConnectionAliasId">ConnectionAliasId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliasid"></a>
<a id="schema_ConnectionAliasId"></a>
<a id="tocSconnectionaliasid"></a>
<a id="tocsconnectionaliasid"></a>

```json
"stringstrings"
```

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_ConnectionIdentifier">ConnectionIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionidentifier"></a>
<a id="schema_ConnectionIdentifier"></a>
<a id="tocSconnectionidentifier"></a>
<a id="tocsconnectionidentifier"></a>

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
"stringstri"
```

<h2 id="tocS_IpGroupIdList">IpGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemaipgroupidlist"></a>
<a id="schema_IpGroupIdList"></a>
<a id="tocSipgroupidlist"></a>
<a id="tocsipgroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AssociationStatus">AssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassociationstatus"></a>
<a id="schema_AssociationStatus"></a>
<a id="tocSassociationstatus"></a>
<a id="tocsassociationstatus"></a>

```json
"NOT_ASSOCIATED"
```

<h2 id="tocS_IpGroupId">IpGroupId</h2>
<!-- backwards compatibility -->
<a id="schemaipgroupid"></a>
<a id="schema_IpGroupId"></a>
<a id="tocSipgroupid"></a>
<a id="tocsipgroupid"></a>

```json
"string"
```

<h2 id="tocS_IpRuleList">IpRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaiprulelist"></a>
<a id="schema_IpRuleList"></a>
<a id="tocSiprulelist"></a>
<a id="tocsiprulelist"></a>

```json
[
  {
    "ipRule": {},
    "ruleDesc": {}
  }
]
```

<h2 id="tocS_AwsAccount">AwsAccount</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccount"></a>
<a id="schema_AwsAccount"></a>
<a id="tocSawsaccount"></a>
<a id="tocsawsaccount"></a>

```json
"string"
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

<h2 id="tocS_BundleId">BundleId</h2>
<!-- backwards compatibility -->
<a id="schemabundleid"></a>
<a id="schema_BundleId"></a>
<a id="tocSbundleid"></a>
<a id="tocsbundleid"></a>

```json
"string"
```

<h2 id="tocS_BundleIdList">BundleIdList</h2>
<!-- backwards compatibility -->
<a id="schemabundleidlist"></a>
<a id="schema_BundleIdList"></a>
<a id="tocSbundleidlist"></a>
<a id="tocsbundleidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WorkspaceBundle">WorkspaceBundle</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacebundle"></a>
<a id="schema_WorkspaceBundle"></a>
<a id="tocSworkspacebundle"></a>
<a id="tocsworkspacebundle"></a>

```json
{
  "BundleId": {},
  "Name": {},
  "Owner": {},
  "Description": {},
  "ImageId": {},
  "RootStorage": {
    "Capacity": {}
  },
  "UserStorage": {
    "Capacity": {}
  },
  "ComputeType": {
    "Name": {}
  },
  "LastUpdatedTime": {},
  "CreationTime": {},
  "State": {},
  "BundleType": {}
}
```

Describes a WorkSpace bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BundleId|object|false|none|none|
|Name|object|false|none|none|
|Owner|object|false|none|none|
|Description|object|false|none|none|
|ImageId|object|false|none|none|
|RootStorage|object|false|none|none|
|UserStorage|object|false|none|none|
|ComputeType|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|CreationTime|object|false|none|none|
|State|object|false|none|none|
|BundleType|object|false|none|none|

<h2 id="tocS_BundleList">BundleList</h2>
<!-- backwards compatibility -->
<a id="schemabundlelist"></a>
<a id="schema_BundleList"></a>
<a id="tocSbundlelist"></a>
<a id="tocsbundlelist"></a>

```json
[
  {
    "BundleId": {},
    "Name": {},
    "Owner": {},
    "Description": {},
    "ImageId": {},
    "RootStorage": {
      "Capacity": {}
    },
    "UserStorage": {
      "Capacity": {}
    },
    "ComputeType": {
      "Name": {}
    },
    "LastUpdatedTime": {},
    "CreationTime": {},
    "State": {},
    "BundleType": {}
  }
]
```

<h2 id="tocS_BundleOwner">BundleOwner</h2>
<!-- backwards compatibility -->
<a id="schemabundleowner"></a>
<a id="schema_BundleOwner"></a>
<a id="tocSbundleowner"></a>
<a id="tocsbundleowner"></a>

```json
"string"
```

<h2 id="tocS_BundleType">BundleType</h2>
<!-- backwards compatibility -->
<a id="schemabundletype"></a>
<a id="schema_BundleType"></a>
<a id="tocSbundletype"></a>
<a id="tocsbundletype"></a>

```json
"REGULAR"
```

<h2 id="tocS_CertificateAuthorityArn">CertificateAuthorityArn</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthorityarn"></a>
<a id="schema_CertificateAuthorityArn"></a>
<a id="tocScertificateauthorityarn"></a>
<a id="tocscertificateauthorityarn"></a>

```json
"string"
```

<h2 id="tocS_CertificateBasedAuthStatusEnum">CertificateBasedAuthStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemacertificatebasedauthstatusenum"></a>
<a id="schema_CertificateBasedAuthStatusEnum"></a>
<a id="tocScertificatebasedauthstatusenum"></a>
<a id="tocscertificatebasedauthstatusenum"></a>

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

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|

<h2 id="tocS_ClientDeviceType">ClientDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemaclientdevicetype"></a>
<a id="schema_ClientDeviceType"></a>
<a id="tocSclientdevicetype"></a>
<a id="tocsclientdevicetype"></a>

```json
"DeviceTypeWindows"
```

<h2 id="tocS_ClientDeviceTypeList">ClientDeviceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaclientdevicetypelist"></a>
<a id="schema_ClientDeviceTypeList"></a>
<a id="tocSclientdevicetypelist"></a>
<a id="tocsclientdevicetypelist"></a>

```json
[
  "DeviceTypeWindows"
]
```

<h2 id="tocS_ClientEmail">ClientEmail</h2>
<!-- backwards compatibility -->
<a id="schemaclientemail"></a>
<a id="schema_ClientEmail"></a>
<a id="tocSclientemail"></a>
<a id="tocsclientemail"></a>

```json
"string"
```

<h2 id="tocS_ClientLocale">ClientLocale</h2>
<!-- backwards compatibility -->
<a id="schemaclientlocale"></a>
<a id="schema_ClientLocale"></a>
<a id="tocSclientlocale"></a>
<a id="tocsclientlocale"></a>

```json
"strin"
```

<h2 id="tocS_ClientLoginMessage">ClientLoginMessage</h2>
<!-- backwards compatibility -->
<a id="schemaclientloginmessage"></a>
<a id="schema_ClientLoginMessage"></a>
<a id="tocSclientloginmessage"></a>
<a id="tocsclientloginmessage"></a>

```json
"string"
```

<h2 id="tocS_ReconnectEnum">ReconnectEnum</h2>
<!-- backwards compatibility -->
<a id="schemareconnectenum"></a>
<a id="schema_ReconnectEnum"></a>
<a id="tocSreconnectenum"></a>
<a id="tocsreconnectenum"></a>

```json
"ENABLED"
```

<h2 id="tocS_LogUploadEnum">LogUploadEnum</h2>
<!-- backwards compatibility -->
<a id="schemaloguploadenum"></a>
<a id="schema_LogUploadEnum"></a>
<a id="tocSloguploadenum"></a>
<a id="tocsloguploadenum"></a>

```json
"ENABLED"
```

<h2 id="tocS_ClientProperties">ClientProperties</h2>
<!-- backwards compatibility -->
<a id="schemaclientproperties"></a>
<a id="schema_ClientProperties"></a>
<a id="tocSclientproperties"></a>
<a id="tocsclientproperties"></a>

```json
{
  "ReconnectEnabled": {},
  "LogUploadEnabled": {}
}
```

Describes an Amazon WorkSpaces client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReconnectEnabled|object|false|none|none|
|LogUploadEnabled|object|false|none|none|

<h2 id="tocS_ClientPropertiesResult">ClientPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemaclientpropertiesresult"></a>
<a id="schema_ClientPropertiesResult"></a>
<a id="tocSclientpropertiesresult"></a>
<a id="tocsclientpropertiesresult"></a>

```json
{
  "ResourceId": {},
  "ClientProperties": {
    "ReconnectEnabled": {},
    "LogUploadEnabled": {}
  }
}
```

Information about the Amazon WorkSpaces client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ClientProperties|object|false|none|none|

<h2 id="tocS_ClientPropertiesList">ClientPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaclientpropertieslist"></a>
<a id="schema_ClientPropertiesList"></a>
<a id="tocSclientpropertieslist"></a>
<a id="tocsclientpropertieslist"></a>

```json
[
  {
    "ResourceId": {},
    "ClientProperties": {
      "ReconnectEnabled": {},
      "LogUploadEnabled": {}
    }
  }
]
```

<h2 id="tocS_ClientUrl">ClientUrl</h2>
<!-- backwards compatibility -->
<a id="schemaclienturl"></a>
<a id="schema_ClientUrl"></a>
<a id="tocSclienturl"></a>
<a id="tocsclienturl"></a>

```json
"string"
```

<h2 id="tocS_Compute">Compute</h2>
<!-- backwards compatibility -->
<a id="schemacompute"></a>
<a id="schema_Compute"></a>
<a id="tocScompute"></a>
<a id="tocscompute"></a>

```json
"VALUE"
```

<h2 id="tocS_ComputeType">ComputeType</h2>
<!-- backwards compatibility -->
<a id="schemacomputetype"></a>
<a id="schema_ComputeType"></a>
<a id="tocScomputetype"></a>
<a id="tocscomputetype"></a>

```json
{
  "Name": {}
}
```

Describes the compute type of the bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_ComputerName">ComputerName</h2>
<!-- backwards compatibility -->
<a id="schemacomputername"></a>
<a id="schema_ComputerName"></a>
<a id="tocScomputername"></a>
<a id="tocscomputername"></a>

```json
"string"
```

<h2 id="tocS_ConnectClientAddIn">ConnectClientAddIn</h2>
<!-- backwards compatibility -->
<a id="schemaconnectclientaddin"></a>
<a id="schema_ConnectClientAddIn"></a>
<a id="tocSconnectclientaddin"></a>
<a id="tocsconnectclientaddin"></a>

```json
{
  "AddInId": {},
  "ResourceId": {},
  "Name": {},
  "URL": {}
}
```

Describes an Amazon Connect client add-in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddInId|object|false|none|none|
|ResourceId|object|false|none|none|
|Name|object|false|none|none|
|URL|object|false|none|none|

<h2 id="tocS_ConnectClientAddInList">ConnectClientAddInList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectclientaddinlist"></a>
<a id="schema_ConnectClientAddInList"></a>
<a id="tocSconnectclientaddinlist"></a>
<a id="tocsconnectclientaddinlist"></a>

```json
[
  {
    "AddInId": {},
    "ResourceId": {},
    "Name": {},
    "URL": {}
  }
]
```

<h2 id="tocS_ConnectionString">ConnectionString</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstring"></a>
<a id="schema_ConnectionString"></a>
<a id="tocSconnectionstring"></a>
<a id="tocsconnectionstring"></a>

```json
"string"
```

<h2 id="tocS_ConnectionAliasState">ConnectionAliasState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliasstate"></a>
<a id="schema_ConnectionAliasState"></a>
<a id="tocSconnectionaliasstate"></a>
<a id="tocsconnectionaliasstate"></a>

```json
"CREATING"
```

<h2 id="tocS_ConnectionAliasAssociationList">ConnectionAliasAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliasassociationlist"></a>
<a id="schema_ConnectionAliasAssociationList"></a>
<a id="tocSconnectionaliasassociationlist"></a>
<a id="tocsconnectionaliasassociationlist"></a>

```json
[
  {
    "AssociationStatus": {},
    "AssociatedAccountId": {},
    "ResourceId": {},
    "ConnectionIdentifier": {}
  }
]
```

<h2 id="tocS_ConnectionAlias">ConnectionAlias</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionalias"></a>
<a id="schema_ConnectionAlias"></a>
<a id="tocSconnectionalias"></a>
<a id="tocsconnectionalias"></a>

```json
{
  "ConnectionString": {},
  "AliasId": {},
  "State": {},
  "OwnerAccountId": {},
  "Associations": {}
}
```

Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionString|object|false|none|none|
|AliasId|object|false|none|none|
|State|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|Associations|object|false|none|none|

<h2 id="tocS_ConnectionAliasAssociation">ConnectionAliasAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliasassociation"></a>
<a id="schema_ConnectionAliasAssociation"></a>
<a id="tocSconnectionaliasassociation"></a>
<a id="tocsconnectionaliasassociation"></a>

```json
{
  "AssociationStatus": {},
  "AssociatedAccountId": {},
  "ResourceId": {},
  "ConnectionIdentifier": {}
}
```

Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationStatus|object|false|none|none|
|AssociatedAccountId|object|false|none|none|
|ResourceId|object|false|none|none|
|ConnectionIdentifier|object|false|none|none|

<h2 id="tocS_ConnectionAliasIdList">ConnectionAliasIdList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliasidlist"></a>
<a id="schema_ConnectionAliasIdList"></a>
<a id="tocSconnectionaliasidlist"></a>
<a id="tocsconnectionaliasidlist"></a>

```json
[
  "stringstrings"
]
```

<h2 id="tocS_ConnectionAliasList">ConnectionAliasList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliaslist"></a>
<a id="schema_ConnectionAliasList"></a>
<a id="tocSconnectionaliaslist"></a>
<a id="tocsconnectionaliaslist"></a>

```json
[
  {
    "ConnectionString": {},
    "AliasId": {},
    "State": {},
    "OwnerAccountId": {},
    "Associations": {}
  }
]
```

<h2 id="tocS_ConnectionAliasPermission">ConnectionAliasPermission</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliaspermission"></a>
<a id="schema_ConnectionAliasPermission"></a>
<a id="tocSconnectionaliaspermission"></a>
<a id="tocsconnectionaliaspermission"></a>

```json
{
  "SharedAccountId": {},
  "AllowAssociation": {}
}
```

Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedAccountId|object|true|none|none|
|AllowAssociation|object|true|none|none|

<h2 id="tocS_ConnectionAliasPermissions">ConnectionAliasPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionaliaspermissions"></a>
<a id="schema_ConnectionAliasPermissions"></a>
<a id="tocSconnectionaliaspermissions"></a>
<a id="tocsconnectionaliaspermissions"></a>

```json
[
  {
    "SharedAccountId": {},
    "AllowAssociation": {}
  }
]
```

<h2 id="tocS_ConnectionState">ConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstate"></a>
<a id="schema_ConnectionState"></a>
<a id="tocSconnectionstate"></a>
<a id="tocsconnectionstate"></a>

```json
"CONNECTED"
```

<h2 id="tocS_WorkspaceImageName">WorkspaceImageName</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimagename"></a>
<a id="schema_WorkspaceImageName"></a>
<a id="tocSworkspaceimagename"></a>
<a id="tocsworkspaceimagename"></a>

```json
"string"
```

<h2 id="tocS_WorkspaceImageDescription">WorkspaceImageDescription</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimagedescription"></a>
<a id="schema_WorkspaceImageDescription"></a>
<a id="tocSworkspaceimagedescription"></a>
<a id="tocsworkspaceimagedescription"></a>

```json
"string"
```

<h2 id="tocS_WorkspaceImageId">WorkspaceImageId</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimageid"></a>
<a id="schema_WorkspaceImageId"></a>
<a id="tocSworkspaceimageid"></a>
<a id="tocsworkspaceimageid"></a>

```json
"string"
```

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
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

<h2 id="tocS_IpGroupName">IpGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaipgroupname"></a>
<a id="schema_IpGroupName"></a>
<a id="tocSipgroupname"></a>
<a id="tocsipgroupname"></a>

```json
"string"
```

<h2 id="tocS_IpGroupDesc">IpGroupDesc</h2>
<!-- backwards compatibility -->
<a id="schemaipgroupdesc"></a>
<a id="schema_IpGroupDesc"></a>
<a id="tocSipgroupdesc"></a>
<a id="tocsipgroupdesc"></a>

```json
"string"
```

<h2 id="tocS_StandbyWorkspacesList">StandbyWorkspacesList</h2>
<!-- backwards compatibility -->
<a id="schemastandbyworkspaceslist"></a>
<a id="schema_StandbyWorkspacesList"></a>
<a id="tocSstandbyworkspaceslist"></a>
<a id="tocsstandbyworkspaceslist"></a>

```json
[
  {
    "PrimaryWorkspaceId": {},
    "VolumeEncryptionKey": {},
    "DirectoryId": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_FailedCreateStandbyWorkspacesRequestList">FailedCreateStandbyWorkspacesRequestList</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreatestandbyworkspacesrequestlist"></a>
<a id="schema_FailedCreateStandbyWorkspacesRequestList"></a>
<a id="tocSfailedcreatestandbyworkspacesrequestlist"></a>
<a id="tocsfailedcreatestandbyworkspacesrequestlist"></a>

```json
[
  {
    "StandbyWorkspaceRequest": {
      "PrimaryWorkspaceId": {},
      "VolumeEncryptionKey": {},
      "DirectoryId": {},
      "Tags": {}
    },
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_PendingCreateStandbyWorkspacesRequestList">PendingCreateStandbyWorkspacesRequestList</h2>
<!-- backwards compatibility -->
<a id="schemapendingcreatestandbyworkspacesrequestlist"></a>
<a id="schema_PendingCreateStandbyWorkspacesRequestList"></a>
<a id="tocSpendingcreatestandbyworkspacesrequestlist"></a>
<a id="tocspendingcreatestandbyworkspacesrequestlist"></a>

```json
[
  {
    "UserName": {},
    "DirectoryId": {},
    "State": {},
    "WorkspaceId": {}
  }
]
```

<h2 id="tocS_WorkspaceBundleName">WorkspaceBundleName</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacebundlename"></a>
<a id="schema_WorkspaceBundleName"></a>
<a id="tocSworkspacebundlename"></a>
<a id="tocsworkspacebundlename"></a>

```json
"string"
```

<h2 id="tocS_WorkspaceBundleDescription">WorkspaceBundleDescription</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacebundledescription"></a>
<a id="schema_WorkspaceBundleDescription"></a>
<a id="tocSworkspacebundledescription"></a>
<a id="tocsworkspacebundledescription"></a>

```json
"string"
```

<h2 id="tocS_UserStorage">UserStorage</h2>
<!-- backwards compatibility -->
<a id="schemauserstorage"></a>
<a id="schema_UserStorage"></a>
<a id="tocSuserstorage"></a>
<a id="tocsuserstorage"></a>

```json
{
  "Capacity": {}
}
```

Describes the user volume for a WorkSpace bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Capacity|object|false|none|none|

<h2 id="tocS_RootStorage">RootStorage</h2>
<!-- backwards compatibility -->
<a id="schemarootstorage"></a>
<a id="schema_RootStorage"></a>
<a id="tocSrootstorage"></a>
<a id="tocsrootstorage"></a>

```json
{
  "Capacity": {}
}
```

Describes the root volume for a WorkSpace bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Capacity|object|false|none|none|

<h2 id="tocS_WorkspaceId">WorkspaceId</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceid"></a>
<a id="schema_WorkspaceId"></a>
<a id="tocSworkspaceid"></a>
<a id="tocsworkspaceid"></a>

```json
"string"
```

<h2 id="tocS_OperatingSystem">OperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystem"></a>
<a id="schema_OperatingSystem"></a>
<a id="tocSoperatingsystem"></a>
<a id="tocsoperatingsystem"></a>

```json
{
  "Type": {}
}
```

The operating system that the image is running.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|

<h2 id="tocS_WorkspaceImageState">WorkspaceImageState</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimagestate"></a>
<a id="schema_WorkspaceImageState"></a>
<a id="tocSworkspaceimagestate"></a>
<a id="tocsworkspaceimagestate"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_WorkspaceImageRequiredTenancy">WorkspaceImageRequiredTenancy</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimagerequiredtenancy"></a>
<a id="schema_WorkspaceImageRequiredTenancy"></a>
<a id="tocSworkspaceimagerequiredtenancy"></a>
<a id="tocsworkspaceimagerequiredtenancy"></a>

```json
"DEFAULT"
```

<h2 id="tocS_WorkspaceRequestList">WorkspaceRequestList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacerequestlist"></a>
<a id="schema_WorkspaceRequestList"></a>
<a id="tocSworkspacerequestlist"></a>
<a id="tocsworkspacerequestlist"></a>

```json
[
  {
    "DirectoryId": {},
    "UserName": {},
    "BundleId": {},
    "VolumeEncryptionKey": {},
    "UserVolumeEncryptionEnabled": {},
    "RootVolumeEncryptionEnabled": {},
    "WorkspaceProperties": {
      "RunningMode": {},
      "RunningModeAutoStopTimeoutInMinutes": {},
      "RootVolumeSizeGib": {},
      "UserVolumeSizeGib": {},
      "ComputeTypeName": {},
      "Protocols": {}
    },
    "Tags": {}
  }
]
```

<h2 id="tocS_FailedCreateWorkspaceRequests">FailedCreateWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreateworkspacerequests"></a>
<a id="schema_FailedCreateWorkspaceRequests"></a>
<a id="tocSfailedcreateworkspacerequests"></a>
<a id="tocsfailedcreateworkspacerequests"></a>

```json
[
  {
    "WorkspaceRequest": {
      "DirectoryId": {},
      "UserName": {},
      "BundleId": {},
      "VolumeEncryptionKey": {},
      "UserVolumeEncryptionEnabled": {},
      "RootVolumeEncryptionEnabled": {},
      "WorkspaceProperties": {
        "RunningMode": {},
        "RunningModeAutoStopTimeoutInMinutes": {},
        "RootVolumeSizeGib": {},
        "UserVolumeSizeGib": {},
        "ComputeTypeName": {},
        "Protocols": {}
      },
      "Tags": {}
    },
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_WorkspaceList">WorkspaceList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacelist"></a>
<a id="schema_WorkspaceList"></a>
<a id="tocSworkspacelist"></a>
<a id="tocsworkspacelist"></a>

```json
[
  {
    "WorkspaceId": {},
    "DirectoryId": {},
    "UserName": {},
    "IpAddress": {},
    "State": {},
    "BundleId": {},
    "SubnetId": {},
    "ErrorMessage": {},
    "ErrorCode": {},
    "ComputerName": {},
    "VolumeEncryptionKey": {},
    "UserVolumeEncryptionEnabled": {},
    "RootVolumeEncryptionEnabled": {},
    "WorkspaceProperties": {
      "RunningMode": {},
      "RunningModeAutoStopTimeoutInMinutes": {},
      "RootVolumeSizeGib": {},
      "UserVolumeSizeGib": {},
      "ComputeTypeName": {},
      "Protocols": {}
    },
    "ModificationStates": {},
    "RelatedWorkspaces": {}
  }
]
```

<h2 id="tocS_DedicatedTenancyCidrRangeList">DedicatedTenancyCidrRangeList</h2>
<!-- backwards compatibility -->
<a id="schemadedicatedtenancycidrrangelist"></a>
<a id="schema_DedicatedTenancyCidrRangeList"></a>
<a id="tocSdedicatedtenancycidrrangelist"></a>
<a id="tocsdedicatedtenancycidrrangelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DedicatedTenancySupportEnum">DedicatedTenancySupportEnum</h2>
<!-- backwards compatibility -->
<a id="schemadedicatedtenancysupportenum"></a>
<a id="schema_DedicatedTenancySupportEnum"></a>
<a id="tocSdedicatedtenancysupportenum"></a>
<a id="tocsdedicatedtenancysupportenum"></a>

```json
"ENABLED"
```

<h2 id="tocS_LoginMessage">LoginMessage</h2>
<!-- backwards compatibility -->
<a id="schemaloginmessage"></a>
<a id="schema_LoginMessage"></a>
<a id="tocSloginmessage"></a>
<a id="tocsloginmessage"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ClientLoginMessage](#schemaclientloginmessage)|false|none|none|

<h2 id="tocS_DefaultClientBrandingAttributes">DefaultClientBrandingAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadefaultclientbrandingattributes"></a>
<a id="schema_DefaultClientBrandingAttributes"></a>
<a id="tocSdefaultclientbrandingattributes"></a>
<a id="tocsdefaultclientbrandingattributes"></a>

```json
{
  "LogoUrl": {},
  "SupportEmail": {},
  "SupportLink": {},
  "ForgotPasswordLink": {},
  "LoginMessage": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Returns default client branding attributes that were imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you don't include sensitive information.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogoUrl|object|false|none|none|
|SupportEmail|object|false|none|none|
|SupportLink|object|false|none|none|
|ForgotPasswordLink|object|false|none|none|
|LoginMessage|object|false|none|none|

<h2 id="tocS_DefaultLogo">DefaultLogo</h2>
<!-- backwards compatibility -->
<a id="schemadefaultlogo"></a>
<a id="schema_DefaultLogo"></a>
<a id="tocSdefaultlogo"></a>
<a id="tocsdefaultlogo"></a>

```json
"string"
```

<h2 id="tocS_DefaultImportClientBrandingAttributes">DefaultImportClientBrandingAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadefaultimportclientbrandingattributes"></a>
<a id="schema_DefaultImportClientBrandingAttributes"></a>
<a id="tocSdefaultimportclientbrandingattributes"></a>
<a id="tocsdefaultimportclientbrandingattributes"></a>

```json
{
  "Logo": {},
  "SupportEmail": {},
  "SupportLink": {},
  "ForgotPasswordLink": {},
  "LoginMessage": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>The default client branding attributes to be imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you do not include sensitive information.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Logo|object|false|none|none|
|SupportEmail|object|false|none|none|
|SupportLink|object|false|none|none|
|ForgotPasswordLink|object|false|none|none|
|LoginMessage|object|false|none|none|

<h2 id="tocS_DefaultOu">DefaultOu</h2>
<!-- backwards compatibility -->
<a id="schemadefaultou"></a>
<a id="schema_DefaultOu"></a>
<a id="tocSdefaultou"></a>
<a id="tocsdefaultou"></a>

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
"stringstrin"
```

<h2 id="tocS_DefaultWorkspaceCreationProperties">DefaultWorkspaceCreationProperties</h2>
<!-- backwards compatibility -->
<a id="schemadefaultworkspacecreationproperties"></a>
<a id="schema_DefaultWorkspaceCreationProperties"></a>
<a id="tocSdefaultworkspacecreationproperties"></a>
<a id="tocsdefaultworkspacecreationproperties"></a>

```json
{
  "EnableWorkDocs": {},
  "EnableInternetAccess": {},
  "DefaultOu": {},
  "CustomSecurityGroupId": {},
  "UserEnabledAsLocalAdministrator": {},
  "EnableMaintenanceMode": {}
}
```

Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableWorkDocs|object|false|none|none|
|EnableInternetAccess|object|false|none|none|
|DefaultOu|object|false|none|none|
|CustomSecurityGroupId|object|false|none|none|
|UserEnabledAsLocalAdministrator|object|false|none|none|
|EnableMaintenanceMode|object|false|none|none|

<h2 id="tocS_DeletableCertificateBasedAuthProperty">DeletableCertificateBasedAuthProperty</h2>
<!-- backwards compatibility -->
<a id="schemadeletablecertificatebasedauthproperty"></a>
<a id="schema_DeletableCertificateBasedAuthProperty"></a>
<a id="tocSdeletablecertificatebasedauthproperty"></a>
<a id="tocsdeletablecertificatebasedauthproperty"></a>

```json
"CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN"
```

<h2 id="tocS_DeletableCertificateBasedAuthPropertiesList">DeletableCertificateBasedAuthPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemadeletablecertificatebasedauthpropertieslist"></a>
<a id="schema_DeletableCertificateBasedAuthPropertiesList"></a>
<a id="tocSdeletablecertificatebasedauthpropertieslist"></a>
<a id="tocsdeletablecertificatebasedauthpropertieslist"></a>

```json
[
  "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN"
]
```

<h2 id="tocS_DeletableSamlProperty">DeletableSamlProperty</h2>
<!-- backwards compatibility -->
<a id="schemadeletablesamlproperty"></a>
<a id="schema_DeletableSamlProperty"></a>
<a id="tocSdeletablesamlproperty"></a>
<a id="tocsdeletablesamlproperty"></a>

```json
"SAML_PROPERTIES_USER_ACCESS_URL"
```

<h2 id="tocS_DeletableSamlPropertiesList">DeletableSamlPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemadeletablesamlpropertieslist"></a>
<a id="schema_DeletableSamlPropertiesList"></a>
<a id="tocSdeletablesamlpropertieslist"></a>
<a id="tocsdeletablesamlpropertieslist"></a>

```json
[
  "SAML_PROPERTIES_USER_ACCESS_URL"
]
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

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_IosClientBrandingAttributes">IosClientBrandingAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaiosclientbrandingattributes"></a>
<a id="schema_IosClientBrandingAttributes"></a>
<a id="tocSiosclientbrandingattributes"></a>
<a id="tocsiosclientbrandingattributes"></a>

```json
{
  "LogoUrl": {},
  "Logo2xUrl": {},
  "Logo3xUrl": {},
  "SupportEmail": {},
  "SupportLink": {},
  "ForgotPasswordLink": {},
  "LoginMessage": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>The client branding attributes for iOS device types. These attributes are displayed on the iOS client login screen only.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogoUrl|object|false|none|none|
|Logo2xUrl|object|false|none|none|
|Logo3xUrl|object|false|none|none|
|SupportEmail|object|false|none|none|
|SupportLink|object|false|none|none|
|ForgotPasswordLink|object|false|none|none|
|LoginMessage|object|false|none|none|

<h2 id="tocS_ResourceIdList">ResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidlist"></a>
<a id="schema_ResourceIdList"></a>
<a id="tocSresourceidlist"></a>
<a id="tocsresourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
1
```

<h2 id="tocS_WorkspacesIpGroupsList">WorkspacesIpGroupsList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacesipgroupslist"></a>
<a id="schema_WorkspacesIpGroupsList"></a>
<a id="tocSworkspacesipgroupslist"></a>
<a id="tocsworkspacesipgroupslist"></a>

```json
[
  {
    "groupId": {},
    "groupName": {},
    "groupDesc": {},
    "userRules": {}
  }
]
```

<h2 id="tocS_DirectoryIdList">DirectoryIdList</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryidlist"></a>
<a id="schema_DirectoryIdList"></a>
<a id="tocSdirectoryidlist"></a>
<a id="tocsdirectoryidlist"></a>

```json
[
  "stringstri"
]
```

<h2 id="tocS_DirectoryList">DirectoryList</h2>
<!-- backwards compatibility -->
<a id="schemadirectorylist"></a>
<a id="schema_DirectoryList"></a>
<a id="tocSdirectorylist"></a>
<a id="tocsdirectorylist"></a>

```json
[
  {
    "DirectoryId": {},
    "Alias": {},
    "DirectoryName": {},
    "RegistrationCode": {},
    "SubnetIds": {},
    "DnsIpAddresses": {},
    "CustomerUserName": {},
    "IamRoleId": {},
    "DirectoryType": {},
    "WorkspaceSecurityGroupId": {},
    "State": {},
    "WorkspaceCreationProperties": {
      "EnableWorkDocs": {},
      "EnableInternetAccess": {},
      "DefaultOu": {},
      "CustomSecurityGroupId": {},
      "UserEnabledAsLocalAdministrator": {},
      "EnableMaintenanceMode": {}
    },
    "ipGroupIds": {},
    "WorkspaceAccessProperties": {
      "DeviceTypeWindows": {},
      "DeviceTypeOsx": {},
      "DeviceTypeWeb": {},
      "DeviceTypeIos": {},
      "DeviceTypeAndroid": {},
      "DeviceTypeChromeOs": {},
      "DeviceTypeZeroClient": {},
      "DeviceTypeLinux": {}
    },
    "Tenancy": {},
    "SelfservicePermissions": {
      "RestartWorkspace": {},
      "IncreaseVolumeSize": {},
      "ChangeComputeType": {},
      "SwitchRunningMode": {},
      "RebuildWorkspace": {}
    },
    "SamlProperties": {
      "Status": {},
      "UserAccessUrl": {},
      "RelayStateParameterName": {}
    },
    "CertificateBasedAuthProperties": {
      "Status": {},
      "CertificateAuthorityArn": {}
    }
  }
]
```

<h2 id="tocS_ImagePermissions">ImagePermissions</h2>
<!-- backwards compatibility -->
<a id="schemaimagepermissions"></a>
<a id="schema_ImagePermissions"></a>
<a id="tocSimagepermissions"></a>
<a id="tocsimagepermissions"></a>

```json
[
  {
    "SharedAccountId": {}
  }
]
```

<h2 id="tocS_WorkspaceImageIdList">WorkspaceImageIdList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimageidlist"></a>
<a id="schema_WorkspaceImageIdList"></a>
<a id="tocSworkspaceimageidlist"></a>
<a id="tocsworkspaceimageidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImageType">ImageType</h2>
<!-- backwards compatibility -->
<a id="schemaimagetype"></a>
<a id="schema_ImageType"></a>
<a id="tocSimagetype"></a>
<a id="tocsimagetype"></a>

```json
"OWNED"
```

<h2 id="tocS_WorkspaceImageList">WorkspaceImageList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimagelist"></a>
<a id="schema_WorkspaceImageList"></a>
<a id="tocSworkspaceimagelist"></a>
<a id="tocsworkspaceimagelist"></a>

```json
[
  {
    "ImageId": {},
    "Name": {},
    "Description": {},
    "OperatingSystem": {
      "Type": {}
    },
    "State": {},
    "RequiredTenancy": {},
    "ErrorCode": {},
    "ErrorMessage": {},
    "Created": {},
    "OwnerAccountId": {},
    "Updates": {
      "UpdateAvailable": {},
      "Description": {}
    }
  }
]
```

<h2 id="tocS_SnapshotList">SnapshotList</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotlist"></a>
<a id="schema_SnapshotList"></a>
<a id="tocSsnapshotlist"></a>
<a id="tocssnapshotlist"></a>

```json
[
  {
    "SnapshotTime": {}
  }
]
```

<h2 id="tocS_WorkspaceIdList">WorkspaceIdList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceidlist"></a>
<a id="schema_WorkspaceIdList"></a>
<a id="tocSworkspaceidlist"></a>
<a id="tocsworkspaceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WorkspaceConnectionStatusList">WorkspaceConnectionStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceconnectionstatuslist"></a>
<a id="schema_WorkspaceConnectionStatusList"></a>
<a id="tocSworkspaceconnectionstatuslist"></a>
<a id="tocsworkspaceconnectionstatuslist"></a>

```json
[
  {
    "WorkspaceId": {},
    "ConnectionState": {},
    "ConnectionStateCheckTimestamp": {},
    "LastKnownUserConnectionTimestamp": {}
  }
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

<h2 id="tocS_WorkspaceDirectory">WorkspaceDirectory</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacedirectory"></a>
<a id="schema_WorkspaceDirectory"></a>
<a id="tocSworkspacedirectory"></a>
<a id="tocsworkspacedirectory"></a>

```json
{
  "DirectoryId": {},
  "Alias": {},
  "DirectoryName": {},
  "RegistrationCode": {},
  "SubnetIds": {},
  "DnsIpAddresses": {},
  "CustomerUserName": {},
  "IamRoleId": {},
  "DirectoryType": {},
  "WorkspaceSecurityGroupId": {},
  "State": {},
  "WorkspaceCreationProperties": {
    "EnableWorkDocs": {},
    "EnableInternetAccess": {},
    "DefaultOu": {},
    "CustomSecurityGroupId": {},
    "UserEnabledAsLocalAdministrator": {},
    "EnableMaintenanceMode": {}
  },
  "ipGroupIds": {},
  "WorkspaceAccessProperties": {
    "DeviceTypeWindows": {},
    "DeviceTypeOsx": {},
    "DeviceTypeWeb": {},
    "DeviceTypeIos": {},
    "DeviceTypeAndroid": {},
    "DeviceTypeChromeOs": {},
    "DeviceTypeZeroClient": {},
    "DeviceTypeLinux": {}
  },
  "Tenancy": {},
  "SelfservicePermissions": {
    "RestartWorkspace": {},
    "IncreaseVolumeSize": {},
    "ChangeComputeType": {},
    "SwitchRunningMode": {},
    "RebuildWorkspace": {}
  },
  "SamlProperties": {
    "Status": {},
    "UserAccessUrl": {},
    "RelayStateParameterName": {}
  },
  "CertificateBasedAuthProperties": {
    "Status": {},
    "CertificateAuthorityArn": {}
  }
}
```

Describes a directory that is used with Amazon WorkSpaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|Alias|object|false|none|none|
|DirectoryName|object|false|none|none|
|RegistrationCode|object|false|none|none|
|SubnetIds|object|false|none|none|
|DnsIpAddresses|object|false|none|none|
|CustomerUserName|object|false|none|none|
|IamRoleId|object|false|none|none|
|DirectoryType|object|false|none|none|
|WorkspaceSecurityGroupId|object|false|none|none|
|State|object|false|none|none|
|WorkspaceCreationProperties|object|false|none|none|
|ipGroupIds|object|false|none|none|
|WorkspaceAccessProperties|object|false|none|none|
|Tenancy|object|false|none|none|
|SelfservicePermissions|object|false|none|none|
|SamlProperties|object|false|none|none|
|CertificateBasedAuthProperties|object|false|none|none|

<h2 id="tocS_DirectoryName">DirectoryName</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryname"></a>
<a id="schema_DirectoryName"></a>
<a id="tocSdirectoryname"></a>
<a id="tocsdirectoryname"></a>

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

<h2 id="tocS_DnsIpAddresses">DnsIpAddresses</h2>
<!-- backwards compatibility -->
<a id="schemadnsipaddresses"></a>
<a id="schema_DnsIpAddresses"></a>
<a id="tocSdnsipaddresses"></a>
<a id="tocsdnsipaddresses"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Ec2ImageId">Ec2ImageId</h2>
<!-- backwards compatibility -->
<a id="schemaec2imageid"></a>
<a id="schema_Ec2ImageId"></a>
<a id="tocSec2imageid"></a>
<a id="tocsec2imageid"></a>

```json
"string"
```

<h2 id="tocS_ErrorType">ErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaerrortype"></a>
<a id="schema_ErrorType"></a>
<a id="tocSerrortype"></a>
<a id="tocserrortype"></a>

```json
"string"
```

<h2 id="tocS_StandbyWorkspace">StandbyWorkspace</h2>
<!-- backwards compatibility -->
<a id="schemastandbyworkspace"></a>
<a id="schema_StandbyWorkspace"></a>
<a id="tocSstandbyworkspace"></a>
<a id="tocsstandbyworkspace"></a>

```json
{
  "PrimaryWorkspaceId": {},
  "VolumeEncryptionKey": {},
  "DirectoryId": {},
  "Tags": {}
}
```

Describes a standby WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrimaryWorkspaceId|object|true|none|none|
|VolumeEncryptionKey|object|false|none|none|
|DirectoryId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_FailedCreateStandbyWorkspacesRequest">FailedCreateStandbyWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreatestandbyworkspacesrequest"></a>
<a id="schema_FailedCreateStandbyWorkspacesRequest"></a>
<a id="tocSfailedcreatestandbyworkspacesrequest"></a>
<a id="tocsfailedcreatestandbyworkspacesrequest"></a>

```json
{
  "StandbyWorkspaceRequest": {
    "PrimaryWorkspaceId": {},
    "VolumeEncryptionKey": {},
    "DirectoryId": {},
    "Tags": {}
  },
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes the standby WorkSpace that could not be created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StandbyWorkspaceRequest|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_WorkspaceRequest">WorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacerequest"></a>
<a id="schema_WorkspaceRequest"></a>
<a id="tocSworkspacerequest"></a>
<a id="tocsworkspacerequest"></a>

```json
{
  "DirectoryId": {},
  "UserName": {},
  "BundleId": {},
  "VolumeEncryptionKey": {},
  "UserVolumeEncryptionEnabled": {},
  "RootVolumeEncryptionEnabled": {},
  "WorkspaceProperties": {
    "RunningMode": {},
    "RunningModeAutoStopTimeoutInMinutes": {},
    "RootVolumeSizeGib": {},
    "UserVolumeSizeGib": {},
    "ComputeTypeName": {},
    "Protocols": {}
  },
  "Tags": {}
}
```

Describes the information used to create a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|true|none|none|
|UserName|object|true|none|none|
|BundleId|object|true|none|none|
|VolumeEncryptionKey|object|false|none|none|
|UserVolumeEncryptionEnabled|object|false|none|none|
|RootVolumeEncryptionEnabled|object|false|none|none|
|WorkspaceProperties|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_FailedCreateWorkspaceRequest">FailedCreateWorkspaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreateworkspacerequest"></a>
<a id="schema_FailedCreateWorkspaceRequest"></a>
<a id="tocSfailedcreateworkspacerequest"></a>
<a id="tocsfailedcreateworkspacerequest"></a>

```json
{
  "WorkspaceRequest": {
    "DirectoryId": {},
    "UserName": {},
    "BundleId": {},
    "VolumeEncryptionKey": {},
    "UserVolumeEncryptionEnabled": {},
    "RootVolumeEncryptionEnabled": {},
    "WorkspaceProperties": {
      "RunningMode": {},
      "RunningModeAutoStopTimeoutInMinutes": {},
      "RootVolumeSizeGib": {},
      "UserVolumeSizeGib": {},
      "ComputeTypeName": {},
      "Protocols": {}
    },
    "Tags": {}
  },
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes a WorkSpace that cannot be created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceRequest|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_FailedWorkspaceChangeRequest">FailedWorkspaceChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemafailedworkspacechangerequest"></a>
<a id="schema_FailedWorkspaceChangeRequest"></a>
<a id="tocSfailedworkspacechangerequest"></a>
<a id="tocsfailedworkspacechangerequest"></a>

```json
{
  "WorkspaceId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_FailedRebootWorkspaceRequests">FailedRebootWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedrebootworkspacerequests"></a>
<a id="schema_FailedRebootWorkspaceRequests"></a>
<a id="tocSfailedrebootworkspacerequests"></a>
<a id="tocsfailedrebootworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_FailedRebuildWorkspaceRequests">FailedRebuildWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedrebuildworkspacerequests"></a>
<a id="schema_FailedRebuildWorkspaceRequests"></a>
<a id="tocSfailedrebuildworkspacerequests"></a>
<a id="tocsfailedrebuildworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_FailedStartWorkspaceRequests">FailedStartWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedstartworkspacerequests"></a>
<a id="schema_FailedStartWorkspaceRequests"></a>
<a id="tocSfailedstartworkspacerequests"></a>
<a id="tocsfailedstartworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_FailedStopWorkspaceRequests">FailedStopWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedstopworkspacerequests"></a>
<a id="schema_FailedStopWorkspaceRequests"></a>
<a id="tocSfailedstopworkspacerequests"></a>
<a id="tocsfailedstopworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_FailedTerminateWorkspaceRequests">FailedTerminateWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedterminateworkspacerequests"></a>
<a id="schema_FailedTerminateWorkspaceRequests"></a>
<a id="tocSfailedterminateworkspacerequests"></a>
<a id="tocsfailedterminateworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ImagePermission">ImagePermission</h2>
<!-- backwards compatibility -->
<a id="schemaimagepermission"></a>
<a id="schema_ImagePermission"></a>
<a id="tocSimagepermission"></a>
<a id="tocsimagepermission"></a>

```json
{
  "SharedAccountId": {}
}
```

Describes the Amazon Web Services accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedAccountId|object|false|none|none|

<h2 id="tocS_IosImportClientBrandingAttributes">IosImportClientBrandingAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaiosimportclientbrandingattributes"></a>
<a id="schema_IosImportClientBrandingAttributes"></a>
<a id="tocSiosimportclientbrandingattributes"></a>
<a id="tocsiosimportclientbrandingattributes"></a>

```json
{
  "Logo": {},
  "Logo2x": {},
  "Logo3x": {},
  "SupportEmail": {},
  "SupportLink": {},
  "ForgotPasswordLink": {},
  "LoginMessage": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>The client branding attributes to import for iOS device types. These attributes are displayed on the iOS client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Logo|object|false|none|none|
|Logo2x|object|false|none|none|
|Logo3x|object|false|none|none|
|SupportEmail|object|false|none|none|
|SupportLink|object|false|none|none|
|ForgotPasswordLink|object|false|none|none|
|LoginMessage|object|false|none|none|

<h2 id="tocS_WorkspaceImageIngestionProcess">WorkspaceImageIngestionProcess</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimageingestionprocess"></a>
<a id="schema_WorkspaceImageIngestionProcess"></a>
<a id="tocSworkspaceimageingestionprocess"></a>
<a id="tocsworkspaceimageingestionprocess"></a>

```json
"BYOL_REGULAR"
```

<h2 id="tocS_Ios2XLogo">Ios2XLogo</h2>
<!-- backwards compatibility -->
<a id="schemaios2xlogo"></a>
<a id="schema_Ios2XLogo"></a>
<a id="tocSios2xlogo"></a>
<a id="tocsios2xlogo"></a>

```json
"string"
```

<h2 id="tocS_Ios3XLogo">Ios3XLogo</h2>
<!-- backwards compatibility -->
<a id="schemaios3xlogo"></a>
<a id="schema_Ios3XLogo"></a>
<a id="tocSios3xlogo"></a>
<a id="tocsios3xlogo"></a>

```json
"string"
```

<h2 id="tocS_IosLogo">IosLogo</h2>
<!-- backwards compatibility -->
<a id="schemaioslogo"></a>
<a id="schema_IosLogo"></a>
<a id="tocSioslogo"></a>
<a id="tocsioslogo"></a>

```json
"string"
```

<h2 id="tocS_IpRule">IpRule</h2>
<!-- backwards compatibility -->
<a id="schemaiprule"></a>
<a id="schema_IpRule"></a>
<a id="tocSiprule"></a>
<a id="tocsiprule"></a>

```json
"string"
```

<h2 id="tocS_IpRevokedRuleList">IpRevokedRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaiprevokedrulelist"></a>
<a id="schema_IpRevokedRuleList"></a>
<a id="tocSiprevokedrulelist"></a>
<a id="tocsiprevokedrulelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IpRuleDesc">IpRuleDesc</h2>
<!-- backwards compatibility -->
<a id="schemaipruledesc"></a>
<a id="schema_IpRuleDesc"></a>
<a id="tocSipruledesc"></a>
<a id="tocsipruledesc"></a>

```json
"string"
```

<h2 id="tocS_IpRuleItem">IpRuleItem</h2>
<!-- backwards compatibility -->
<a id="schemaipruleitem"></a>
<a id="schema_IpRuleItem"></a>
<a id="tocSipruleitem"></a>
<a id="tocsipruleitem"></a>

```json
{
  "ipRule": {},
  "ruleDesc": {}
}
```

Describes a rule for an IP access control group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipRule|object|false|none|none|
|ruleDesc|object|false|none|none|

<h2 id="tocS_ManagementCidrRangeConstraint">ManagementCidrRangeConstraint</h2>
<!-- backwards compatibility -->
<a id="schemamanagementcidrrangeconstraint"></a>
<a id="schema_ManagementCidrRangeConstraint"></a>
<a id="tocSmanagementcidrrangeconstraint"></a>
<a id="tocsmanagementcidrrangeconstraint"></a>

```json
"string"
```

<h2 id="tocS_ManagementCidrRangeMaxResults">ManagementCidrRangeMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamanagementcidrrangemaxresults"></a>
<a id="schema_ManagementCidrRangeMaxResults"></a>
<a id="tocSmanagementcidrrangemaxresults"></a>
<a id="tocsmanagementcidrrangemaxresults"></a>

```json
1
```

<h2 id="tocS_ModificationResourceEnum">ModificationResourceEnum</h2>
<!-- backwards compatibility -->
<a id="schemamodificationresourceenum"></a>
<a id="schema_ModificationResourceEnum"></a>
<a id="tocSmodificationresourceenum"></a>
<a id="tocsmodificationresourceenum"></a>

```json
"ROOT_VOLUME"
```

<h2 id="tocS_ModificationStateEnum">ModificationStateEnum</h2>
<!-- backwards compatibility -->
<a id="schemamodificationstateenum"></a>
<a id="schema_ModificationStateEnum"></a>
<a id="tocSmodificationstateenum"></a>
<a id="tocsmodificationstateenum"></a>

```json
"UPDATE_INITIATED"
```

<h2 id="tocS_ModificationState">ModificationState</h2>
<!-- backwards compatibility -->
<a id="schemamodificationstate"></a>
<a id="schema_ModificationState"></a>
<a id="tocSmodificationstate"></a>
<a id="tocsmodificationstate"></a>

```json
{
  "Resource": {},
  "State": {}
}
```

Describes a WorkSpace modification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resource|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_ModificationStateList">ModificationStateList</h2>
<!-- backwards compatibility -->
<a id="schemamodificationstatelist"></a>
<a id="schema_ModificationStateList"></a>
<a id="tocSmodificationstatelist"></a>
<a id="tocsmodificationstatelist"></a>

```json
[
  {
    "Resource": {},
    "State": {}
  }
]
```

<h2 id="tocS_SamlProperties">SamlProperties</h2>
<!-- backwards compatibility -->
<a id="schemasamlproperties"></a>
<a id="schema_SamlProperties"></a>
<a id="tocSsamlproperties"></a>
<a id="tocssamlproperties"></a>

```json
{
  "Status": {},
  "UserAccessUrl": {},
  "RelayStateParameterName": {}
}
```

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|UserAccessUrl|object|false|none|none|
|RelayStateParameterName|object|false|none|none|

<h2 id="tocS_SelfservicePermissions">SelfservicePermissions</h2>
<!-- backwards compatibility -->
<a id="schemaselfservicepermissions"></a>
<a id="schema_SelfservicePermissions"></a>
<a id="tocSselfservicepermissions"></a>
<a id="tocsselfservicepermissions"></a>

```json
{
  "RestartWorkspace": {},
  "IncreaseVolumeSize": {},
  "ChangeComputeType": {},
  "SwitchRunningMode": {},
  "RebuildWorkspace": {}
}
```

Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RestartWorkspace|object|false|none|none|
|IncreaseVolumeSize|object|false|none|none|
|ChangeComputeType|object|false|none|none|
|SwitchRunningMode|object|false|none|none|
|RebuildWorkspace|object|false|none|none|

<h2 id="tocS_WorkspaceAccessProperties">WorkspaceAccessProperties</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceaccessproperties"></a>
<a id="schema_WorkspaceAccessProperties"></a>
<a id="tocSworkspaceaccessproperties"></a>
<a id="tocsworkspaceaccessproperties"></a>

```json
{
  "DeviceTypeWindows": {},
  "DeviceTypeOsx": {},
  "DeviceTypeWeb": {},
  "DeviceTypeIos": {},
  "DeviceTypeAndroid": {},
  "DeviceTypeChromeOs": {},
  "DeviceTypeZeroClient": {},
  "DeviceTypeLinux": {}
}
```

The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceTypeWindows|object|false|none|none|
|DeviceTypeOsx|object|false|none|none|
|DeviceTypeWeb|object|false|none|none|
|DeviceTypeIos|object|false|none|none|
|DeviceTypeAndroid|object|false|none|none|
|DeviceTypeChromeOs|object|false|none|none|
|DeviceTypeZeroClient|object|false|none|none|
|DeviceTypeLinux|object|false|none|none|

<h2 id="tocS_WorkspaceCreationProperties">WorkspaceCreationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacecreationproperties"></a>
<a id="schema_WorkspaceCreationProperties"></a>
<a id="tocSworkspacecreationproperties"></a>
<a id="tocsworkspacecreationproperties"></a>

```json
{
  "EnableWorkDocs": {},
  "EnableInternetAccess": {},
  "DefaultOu": {},
  "CustomSecurityGroupId": {},
  "UserEnabledAsLocalAdministrator": {},
  "EnableMaintenanceMode": {}
}
```

Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableWorkDocs|object|false|none|none|
|EnableInternetAccess|object|false|none|none|
|DefaultOu|object|false|none|none|
|CustomSecurityGroupId|object|false|none|none|
|UserEnabledAsLocalAdministrator|object|false|none|none|
|EnableMaintenanceMode|object|false|none|none|

<h2 id="tocS_WorkspaceProperties">WorkspaceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceproperties"></a>
<a id="schema_WorkspaceProperties"></a>
<a id="tocSworkspaceproperties"></a>
<a id="tocsworkspaceproperties"></a>

```json
{
  "RunningMode": {},
  "RunningModeAutoStopTimeoutInMinutes": {},
  "RootVolumeSizeGib": {},
  "UserVolumeSizeGib": {},
  "ComputeTypeName": {},
  "Protocols": {}
}
```

Describes a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RunningMode|object|false|none|none|
|RunningModeAutoStopTimeoutInMinutes|object|false|none|none|
|RootVolumeSizeGib|object|false|none|none|
|UserVolumeSizeGib|object|false|none|none|
|ComputeTypeName|object|false|none|none|
|Protocols|object|false|none|none|

<h2 id="tocS_TargetWorkspaceState">TargetWorkspaceState</h2>
<!-- backwards compatibility -->
<a id="schematargetworkspacestate"></a>
<a id="schema_TargetWorkspaceState"></a>
<a id="tocStargetworkspacestate"></a>
<a id="tocstargetworkspacestate"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_OperatingSystemType">OperatingSystemType</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemtype"></a>
<a id="schema_OperatingSystemType"></a>
<a id="tocSoperatingsystemtype"></a>
<a id="tocsoperatingsystemtype"></a>

```json
"WINDOWS"
```

<h2 id="tocS_WorkspaceState">WorkspaceState</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacestate"></a>
<a id="schema_WorkspaceState"></a>
<a id="tocSworkspacestate"></a>
<a id="tocsworkspacestate"></a>

```json
"PENDING"
```

<h2 id="tocS_PendingCreateStandbyWorkspacesRequest">PendingCreateStandbyWorkspacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemapendingcreatestandbyworkspacesrequest"></a>
<a id="schema_PendingCreateStandbyWorkspacesRequest"></a>
<a id="tocSpendingcreatestandbyworkspacesrequest"></a>
<a id="tocspendingcreatestandbyworkspacesrequest"></a>

```json
{
  "UserName": {},
  "DirectoryId": {},
  "State": {},
  "WorkspaceId": {}
}
```

Information about the standby WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|false|none|none|
|DirectoryId|object|false|none|none|
|State|object|false|none|none|
|WorkspaceId|object|false|none|none|

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"PCOIP"
```

<h2 id="tocS_ProtocolList">ProtocolList</h2>
<!-- backwards compatibility -->
<a id="schemaprotocollist"></a>
<a id="schema_ProtocolList"></a>
<a id="tocSprotocollist"></a>
<a id="tocsprotocollist"></a>

```json
[
  "PCOIP"
]
```

<h2 id="tocS_RebootRequest">RebootRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootrequest"></a>
<a id="schema_RebootRequest"></a>
<a id="tocSrebootrequest"></a>
<a id="tocsrebootrequest"></a>

```json
{
  "WorkspaceId": {}
}
```

Describes the information used to reboot a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|true|none|none|

<h2 id="tocS_RebootWorkspaceRequests">RebootWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemarebootworkspacerequests"></a>
<a id="schema_RebootWorkspaceRequests"></a>
<a id="tocSrebootworkspacerequests"></a>
<a id="tocsrebootworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {}
  }
]
```

<h2 id="tocS_RebuildRequest">RebuildRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebuildrequest"></a>
<a id="schema_RebuildRequest"></a>
<a id="tocSrebuildrequest"></a>
<a id="tocsrebuildrequest"></a>

```json
{
  "WorkspaceId": {}
}
```

Describes the information used to rebuild a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|true|none|none|

<h2 id="tocS_RebuildWorkspaceRequests">RebuildWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemarebuildworkspacerequests"></a>
<a id="schema_RebuildWorkspaceRequests"></a>
<a id="tocSrebuildworkspacerequests"></a>
<a id="tocsrebuildworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {}
  }
]
```

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

<h2 id="tocS_Tenancy">Tenancy</h2>
<!-- backwards compatibility -->
<a id="schematenancy"></a>
<a id="schema_Tenancy"></a>
<a id="tocStenancy"></a>
<a id="tocstenancy"></a>

```json
"DEDICATED"
```

<h2 id="tocS_RegistrationCode">RegistrationCode</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationcode"></a>
<a id="schema_RegistrationCode"></a>
<a id="tocSregistrationcode"></a>
<a id="tocsregistrationcode"></a>

```json
"string"
```

<h2 id="tocS_StandbyWorkspaceRelationshipType">StandbyWorkspaceRelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemastandbyworkspacerelationshiptype"></a>
<a id="schema_StandbyWorkspaceRelationshipType"></a>
<a id="tocSstandbyworkspacerelationshiptype"></a>
<a id="tocsstandbyworkspacerelationshiptype"></a>

```json
"PRIMARY"
```

<h2 id="tocS_RelatedWorkspaceProperties">RelatedWorkspaceProperties</h2>
<!-- backwards compatibility -->
<a id="schemarelatedworkspaceproperties"></a>
<a id="schema_RelatedWorkspaceProperties"></a>
<a id="tocSrelatedworkspaceproperties"></a>
<a id="tocsrelatedworkspaceproperties"></a>

```json
{
  "WorkspaceId": {},
  "Region": {},
  "State": {},
  "Type": {}
}
```

Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or primary WorkSpace related to the specified WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|false|none|none|
|Region|object|false|none|none|
|State|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_RelatedWorkspaces">RelatedWorkspaces</h2>
<!-- backwards compatibility -->
<a id="schemarelatedworkspaces"></a>
<a id="schema_RelatedWorkspaces"></a>
<a id="tocSrelatedworkspaces"></a>
<a id="tocsrelatedworkspaces"></a>

```json
[
  {
    "WorkspaceId": {},
    "Region": {},
    "State": {},
    "Type": {}
  }
]
```

<h2 id="tocS_RootVolumeSizeGib">RootVolumeSizeGib</h2>
<!-- backwards compatibility -->
<a id="schemarootvolumesizegib"></a>
<a id="schema_RootVolumeSizeGib"></a>
<a id="tocSrootvolumesizegib"></a>
<a id="tocsrootvolumesizegib"></a>

```json
0
```

<h2 id="tocS_RunningMode">RunningMode</h2>
<!-- backwards compatibility -->
<a id="schemarunningmode"></a>
<a id="schema_RunningMode"></a>
<a id="tocSrunningmode"></a>
<a id="tocsrunningmode"></a>

```json
"AUTO_STOP"
```

<h2 id="tocS_RunningModeAutoStopTimeoutInMinutes">RunningModeAutoStopTimeoutInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemarunningmodeautostoptimeoutinminutes"></a>
<a id="schema_RunningModeAutoStopTimeoutInMinutes"></a>
<a id="tocSrunningmodeautostoptimeoutinminutes"></a>
<a id="tocsrunningmodeautostoptimeoutinminutes"></a>

```json
0
```

<h2 id="tocS_SamlStatusEnum">SamlStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemasamlstatusenum"></a>
<a id="schema_SamlStatusEnum"></a>
<a id="tocSsamlstatusenum"></a>
<a id="tocssamlstatusenum"></a>

```json
"DISABLED"
```

<h2 id="tocS_SamlUserAccessUrl">SamlUserAccessUrl</h2>
<!-- backwards compatibility -->
<a id="schemasamluseraccessurl"></a>
<a id="schema_SamlUserAccessUrl"></a>
<a id="tocSsamluseraccessurl"></a>
<a id="tocssamluseraccessurl"></a>

```json
"stringst"
```

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "SnapshotTime": {}
}
```

Describes a snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotTime|object|false|none|none|

<h2 id="tocS_VolumeEncryptionKey">VolumeEncryptionKey</h2>
<!-- backwards compatibility -->
<a id="schemavolumeencryptionkey"></a>
<a id="schema_VolumeEncryptionKey"></a>
<a id="tocSvolumeencryptionkey"></a>
<a id="tocsvolumeencryptionkey"></a>

```json
"string"
```

<h2 id="tocS_StartRequest">StartRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartrequest"></a>
<a id="schema_StartRequest"></a>
<a id="tocSstartrequest"></a>
<a id="tocsstartrequest"></a>

```json
{
  "WorkspaceId": {}
}
```

Information used to start a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|false|none|none|

<h2 id="tocS_StartWorkspaceRequests">StartWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemastartworkspacerequests"></a>
<a id="schema_StartWorkspaceRequests"></a>
<a id="tocSstartworkspacerequests"></a>
<a id="tocsstartworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {}
  }
]
```

<h2 id="tocS_StopRequest">StopRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoprequest"></a>
<a id="schema_StopRequest"></a>
<a id="tocSstoprequest"></a>
<a id="tocsstoprequest"></a>

```json
{
  "WorkspaceId": {}
}
```

Describes the information used to stop a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|false|none|none|

<h2 id="tocS_StopWorkspaceRequests">StopWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schemastopworkspacerequests"></a>
<a id="schema_StopWorkspaceRequests"></a>
<a id="tocSstopworkspacerequests"></a>
<a id="tocsstopworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {}
  }
]
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"stringstringstr"
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

Describes a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TerminateRequest">TerminateRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminaterequest"></a>
<a id="schema_TerminateRequest"></a>
<a id="tocSterminaterequest"></a>
<a id="tocsterminaterequest"></a>

```json
{
  "WorkspaceId": {}
}
```

Describes the information used to terminate a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|true|none|none|

<h2 id="tocS_TerminateWorkspaceRequests">TerminateWorkspaceRequests</h2>
<!-- backwards compatibility -->
<a id="schematerminateworkspacerequests"></a>
<a id="schema_TerminateWorkspaceRequests"></a>
<a id="tocSterminateworkspacerequests"></a>
<a id="tocsterminateworkspacerequests"></a>

```json
[
  {
    "WorkspaceId": {}
  }
]
```

<h2 id="tocS_UpdateDescription">UpdateDescription</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedescription"></a>
<a id="schema_UpdateDescription"></a>
<a id="tocSupdatedescription"></a>
<a id="tocsupdatedescription"></a>

```json
"string"
```

<h2 id="tocS_UpdateResult">UpdateResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresult"></a>
<a id="schema_UpdateResult"></a>
<a id="tocSupdateresult"></a>
<a id="tocsupdateresult"></a>

```json
{
  "UpdateAvailable": {},
  "Description": {}
}
```

<p>Describes whether a WorkSpace image needs to be updated with the latest drivers and other components required by Amazon WorkSpaces.</p> <note> <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateAvailable|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UserVolumeSizeGib">UserVolumeSizeGib</h2>
<!-- backwards compatibility -->
<a id="schemauservolumesizegib"></a>
<a id="schema_UserVolumeSizeGib"></a>
<a id="tocSuservolumesizegib"></a>
<a id="tocsuservolumesizegib"></a>

```json
0
```

<h2 id="tocS_Workspace">Workspace</h2>
<!-- backwards compatibility -->
<a id="schemaworkspace"></a>
<a id="schema_Workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "WorkspaceId": {},
  "DirectoryId": {},
  "UserName": {},
  "IpAddress": {},
  "State": {},
  "BundleId": {},
  "SubnetId": {},
  "ErrorMessage": {},
  "ErrorCode": {},
  "ComputerName": {},
  "VolumeEncryptionKey": {},
  "UserVolumeEncryptionEnabled": {},
  "RootVolumeEncryptionEnabled": {},
  "WorkspaceProperties": {
    "RunningMode": {},
    "RunningModeAutoStopTimeoutInMinutes": {},
    "RootVolumeSizeGib": {},
    "UserVolumeSizeGib": {},
    "ComputeTypeName": {},
    "Protocols": {}
  },
  "ModificationStates": {},
  "RelatedWorkspaces": {}
}
```

Describes a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|false|none|none|
|DirectoryId|object|false|none|none|
|UserName|object|false|none|none|
|IpAddress|object|false|none|none|
|State|object|false|none|none|
|BundleId|object|false|none|none|
|SubnetId|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ErrorCode|object|false|none|none|
|ComputerName|object|false|none|none|
|VolumeEncryptionKey|object|false|none|none|
|UserVolumeEncryptionEnabled|object|false|none|none|
|RootVolumeEncryptionEnabled|object|false|none|none|
|WorkspaceProperties|object|false|none|none|
|ModificationStates|object|false|none|none|
|RelatedWorkspaces|object|false|none|none|

<h2 id="tocS_WorkspaceBundleState">WorkspaceBundleState</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacebundlestate"></a>
<a id="schema_WorkspaceBundleState"></a>
<a id="tocSworkspacebundlestate"></a>
<a id="tocsworkspacebundlestate"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_WorkspaceConnectionStatus">WorkspaceConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceconnectionstatus"></a>
<a id="schema_WorkspaceConnectionStatus"></a>
<a id="tocSworkspaceconnectionstatus"></a>
<a id="tocsworkspaceconnectionstatus"></a>

```json
{
  "WorkspaceId": {},
  "ConnectionState": {},
  "ConnectionStateCheckTimestamp": {},
  "LastKnownUserConnectionTimestamp": {}
}
```

Describes the connection status of a WorkSpace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkspaceId|object|false|none|none|
|ConnectionState|object|false|none|none|
|ConnectionStateCheckTimestamp|object|false|none|none|
|LastKnownUserConnectionTimestamp|object|false|none|none|

<h2 id="tocS_WorkspaceDirectoryType">WorkspaceDirectoryType</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacedirectorytype"></a>
<a id="schema_WorkspaceDirectoryType"></a>
<a id="tocSworkspacedirectorytype"></a>
<a id="tocsworkspacedirectorytype"></a>

```json
"SIMPLE_AD"
```

<h2 id="tocS_WorkspaceDirectoryState">WorkspaceDirectoryState</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacedirectorystate"></a>
<a id="schema_WorkspaceDirectoryState"></a>
<a id="tocSworkspacedirectorystate"></a>
<a id="tocsworkspacedirectorystate"></a>

```json
"REGISTERING"
```

<h2 id="tocS_WorkspaceImageErrorCode">WorkspaceImageErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimageerrorcode"></a>
<a id="schema_WorkspaceImageErrorCode"></a>
<a id="tocSworkspaceimageerrorcode"></a>
<a id="tocsworkspaceimageerrorcode"></a>

```json
"string"
```

<h2 id="tocS_WorkspaceImage">WorkspaceImage</h2>
<!-- backwards compatibility -->
<a id="schemaworkspaceimage"></a>
<a id="schema_WorkspaceImage"></a>
<a id="tocSworkspaceimage"></a>
<a id="tocsworkspaceimage"></a>

```json
{
  "ImageId": {},
  "Name": {},
  "Description": {},
  "OperatingSystem": {
    "Type": {}
  },
  "State": {},
  "RequiredTenancy": {},
  "ErrorCode": {},
  "ErrorMessage": {},
  "Created": {},
  "OwnerAccountId": {},
  "Updates": {
    "UpdateAvailable": {},
    "Description": {}
  }
}
```

Describes a WorkSpace image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|OperatingSystem|object|false|none|none|
|State|object|false|none|none|
|RequiredTenancy|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|Created|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|Updates|object|false|none|none|

<h2 id="tocS_WorkspacesIpGroup">WorkspacesIpGroup</h2>
<!-- backwards compatibility -->
<a id="schemaworkspacesipgroup"></a>
<a id="schema_WorkspacesIpGroup"></a>
<a id="tocSworkspacesipgroup"></a>
<a id="tocsworkspacesipgroup"></a>

```json
{
  "groupId": {},
  "groupName": {},
  "groupDesc": {},
  "userRules": {}
}
```

Describes an IP access control group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupId|object|false|none|none|
|groupName|object|false|none|none|
|groupDesc|object|false|none|none|
|userRules|object|false|none|none|
