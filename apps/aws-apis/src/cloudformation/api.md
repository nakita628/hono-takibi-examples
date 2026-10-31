<h1 id="aws-cloudformation">AWS CloudFormation v2010-05-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>CloudFormation</fullname> <p>CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments predictably and repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly reliable, highly scalable, cost-effective applications without creating or configuring the underlying Amazon Web Services infrastructure.</p> <p>With CloudFormation, you declare all your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you.</p> <p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation product page</a>.</p> <p>CloudFormation makes use of other Amazon Web Services products. If you need additional technical information about a specific Amazon Web Services product, you can find the product's technical documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>

Base URLs:

* <a href="http://cloudformation.us-east-1.amazonaws.com">http://cloudformation.us-east-1.amazonaws.com</a> - The AWS CloudFormation multi-region endpoint

* <a href="https://cloudformation.us-east-1.amazonaws.com">https://cloudformation.us-east-1.amazonaws.com</a> - The AWS CloudFormation multi-region endpoint

* <a href="http://cloudformation.cn-north-1.amazonaws.com.cn">http://cloudformation.cn-north-1.amazonaws.com.cn</a> - The AWS CloudFormation endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloudformation.cn-north-1.amazonaws.com.cn">https://cloudformation.cn-north-1.amazonaws.com.cn</a> - The AWS CloudFormation endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloudformation/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-cloudformation-default">Default</h1>

## GET_ActivateOrganizationsAccess

<a id="opIdGET_ActivateOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ActivateOrganizationsAccess?Action=ActivateOrganizationsAccess&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ActivateOrganizationsAccess`

Activate trusted access with Organizations. With trusted access between StackSets and Organizations activated, the management account has permissions to create and manage StackSets for your organization.

<h3 id="getactivateorganizationsaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ActivateOrganizationsAccess|
|Version|2010-05-15|

<h3 id="getactivateorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateOrganizationsAccessOutput](#schemaactivateorganizationsaccessoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ActivateOrganizationsAccess

<a id="opIdPOST_ActivateOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ActivateOrganizationsAccess?Action=ActivateOrganizationsAccess&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /#Action=ActivateOrganizationsAccess`

Activate trusted access with Organizations. With trusted access between StackSets and Organizations activated, the management account has permissions to create and manage StackSets for your organization.

> Body parameter

```json
{}
```

<h3 id="postactivateorganizationsaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ActivateOrganizationsAccessInput](#schemaactivateorganizationsaccessinput)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ActivateOrganizationsAccess|
|Version|2010-05-15|

<h3 id="postactivateorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateOrganizationsAccessOutput](#schemaactivateorganizationsaccessoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ActivateType

<a id="opIdGET_ActivateType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ActivateType?Action=ActivateType&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ActivateType`

<p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

<h3 id="getactivatetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>The extension type.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>|
|PublicTypeArn|query|string|false|<p>The Amazon Resource Name (ARN) of the public extension.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>|
|PublisherId|query|string|false|<p>The ID of the extension publisher.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>|
|TypeNameAlias|query|string|false|<p>An alias to assign to the public extension, in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.</p> <p>An extension alias must be unique within a given account and Region. You can activate the same public resource multiple times in the same account and Region, using different type name aliases.</p>|
|AutoUpdate|query|boolean|false|<p>Whether to automatically update the extension in this account and Region when a new <i>minor</i> version is published by the extension publisher. Major versions released by the publisher must be manually updated.</p> <p>The default is <code>true</code>.</p>|
|LoggingConfig|query|object|false|Contains logging configuration information for an extension.|
|ExecutionRoleArn|query|string|false|The name of the IAM execution role to use to activate the extension.|
|VersionBump|query|string|false|<p>Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of <code>AutoUpdate</code>.</p> <ul> <li> <p> <code>MAJOR</code>: CloudFormation updates the extension to the newest major version, if one is available.</p> </li> <li> <p> <code>MINOR</code>: CloudFormation updates the extension to the newest minor version, if one is available.</p> </li> </ul>|
|MajorVersion|query|integer|false|<p>The major version of this extension you want to activate, if multiple major versions are available. The default is the latest major version. CloudFormation uses the latest available <i>minor</i> version of the major version selected.</p> <p>You can specify <code>MajorVersion</code> or <code>VersionBump</code>, but not both.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|VersionBump|MAJOR|
|VersionBump|MINOR|
|Action|ActivateType|
|Version|2010-05-15|

<h3 id="getactivatetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateTypeOutput](#schemaactivatetypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ActivateType

<a id="opIdPOST_ActivateType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ActivateType?Action=ActivateType&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Type":{},"PublicTypeArn":{},"PublisherId":{},"TypeName":{},"TypeNameAlias":{},"AutoUpdate":{},"LoggingConfig":{"LogRoleArn":{},"LogGroupName":{}},"ExecutionRoleArn":{},"VersionBump":{},"MajorVersion":{}}'
```

`POST /#Action=ActivateType`

<p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

> Body parameter

```json
{
  "Type": {},
  "PublicTypeArn": {},
  "PublisherId": {},
  "TypeName": {},
  "TypeNameAlias": {},
  "AutoUpdate": {},
  "LoggingConfig": {
    "LogRoleArn": {},
    "LogGroupName": {}
  },
  "ExecutionRoleArn": {},
  "VersionBump": {},
  "MajorVersion": {}
}
```

<h3 id="postactivatetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ActivateTypeInput](#schemaactivatetypeinput)|false|none|
|» Type|body|object|false|none|
|» PublicTypeArn|body|object|false|none|
|» PublisherId|body|object|false|none|
|» TypeName|body|object|false|none|
|» TypeNameAlias|body|object|false|none|
|» AutoUpdate|body|object|false|none|
|» LoggingConfig|body|object|false|none|
|» » LogRoleArn|body|object|true|none|
|» » LogGroupName|body|object|true|none|
|» ExecutionRoleArn|body|object|false|none|
|» VersionBump|body|object|false|none|
|» MajorVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ActivateType|
|Version|2010-05-15|

<h3 id="postactivatetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateTypeOutput](#schemaactivatetypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_BatchDescribeTypeConfigurations

<a id="opIdGET_BatchDescribeTypeConfigurations"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=BatchDescribeTypeConfigurations?TypeConfigurationIdentifiers=%7B%22TypeArn%22%3A%7B%7D%2C%22TypeConfigurationAlias%22%3A%7B%7D%2C%22TypeConfigurationArn%22%3A%7B%7D%2C%22Type%22%3A%7B%7D%2C%22TypeName%22%3A%7B%7D%7D&Action=BatchDescribeTypeConfigurations&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BatchDescribeTypeConfigurations`

<p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

<h3 id="getbatchdescribetypeconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TypeConfigurationIdentifiers|query|[[TypeConfigurationIdentifier](#schematypeconfigurationidentifier)]|true|The list of identifiers for the desired extension configurations.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchDescribeTypeConfigurations|
|Version|2010-05-15|

<h3 id="getbatchdescribetypeconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDescribeTypeConfigurationsOutput](#schemabatchdescribetypeconfigurationsoutput)|
|480|480|TypeConfigurationNotFoundException|[TypeConfigurationNotFoundException](#schematypeconfigurationnotfoundexception)|
|481|481|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BatchDescribeTypeConfigurations

<a id="opIdPOST_BatchDescribeTypeConfigurations"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=BatchDescribeTypeConfigurations?Action=BatchDescribeTypeConfigurations&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TypeConfigurationIdentifiers":{}}'
```

`POST /#Action=BatchDescribeTypeConfigurations`

<p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

> Body parameter

```json
{
  "TypeConfigurationIdentifiers": {}
}
```

<h3 id="postbatchdescribetypeconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchDescribeTypeConfigurationsInput](#schemabatchdescribetypeconfigurationsinput)|false|none|
|» TypeConfigurationIdentifiers|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchDescribeTypeConfigurations|
|Version|2010-05-15|

<h3 id="postbatchdescribetypeconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDescribeTypeConfigurationsOutput](#schemabatchdescribetypeconfigurationsoutput)|
|480|480|TypeConfigurationNotFoundException|[TypeConfigurationNotFoundException](#schematypeconfigurationnotfoundexception)|
|481|481|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CancelUpdateStack

<a id="opIdGET_CancelUpdateStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CancelUpdateStack?StackName=string&Action=CancelUpdateStack&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CancelUpdateStack`

<p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>

<h3 id="getcancelupdatestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|<note> <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response that describes all resources in the account.</p> <p>The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request:</p> <p> <code>{ "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }</code> </p> </note> <p>The name or the unique stack ID that's associated with the stack.</p>|
|ClientRequestToken|query|string|false|A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests to ensure that CloudFormation successfully received them.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CancelUpdateStack|
|Version|2010-05-15|

<h3 id="getcancelupdatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CancelUpdateStack

<a id="opIdPOST_CancelUpdateStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CancelUpdateStack?Action=CancelUpdateStack&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"ClientRequestToken":{}}'
```

`POST /#Action=CancelUpdateStack`

<p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>

> Body parameter

```json
{
  "StackName": {},
  "ClientRequestToken": {}
}
```

<h3 id="postcancelupdatestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CancelUpdateStackInput](#schemacancelupdatestackinput)|false|none|
|» StackName|body|object|true|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CancelUpdateStack|
|Version|2010-05-15|

<h3 id="postcancelupdatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ContinueUpdateRollback

<a id="opIdGET_ContinueUpdateRollback"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ContinueUpdateRollback?StackName=string&Action=ContinueUpdateRollback&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ContinueUpdateRollback`

<p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>

<h3 id="getcontinueupdaterollback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|<p>The name or the unique ID of the stack that you want to continue rolling back.</p> <note> <p>Don't specify the name of a nested stack (a stack that was created by using the <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the parent stack (the stack that contains the <code>AWS::CloudFormation::Stack</code> resource).</p> </note>|
|RoleARN|query|string|false|<p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to roll back the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.</p>|
|ResourcesToSkip|query|[[ResourceToSkip](#schemaresourcetoskip)]|false|<p>A list of the logical IDs of the resources that CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an update was canceled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason.</p> <important> <p>Specify this property to skip rolling back resources that CloudFormation can't successfully roll back. We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> troubleshoot</a> resources before skipping them. CloudFormation sets the status of the specified resources to <code>UPDATE_COMPLETE</code> and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable.</p> </important> <p>Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources.</p> <p>To skip resources that are part of nested stacks, use the following format: <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of a stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or <code>DELETE_FAILED</code>.</p> <note> <p>Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Using ResourcesToSkip to recover a nested stacks hierarchy</a>.</p> </note>|
|ClientRequestToken|query|string|false|A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry <code>ContinueUpdateRollback</code> requests to ensure that CloudFormation successfully received them.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ContinueUpdateRollback|
|Version|2010-05-15|

<h3 id="getcontinueupdaterollback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContinueUpdateRollbackOutput](#schemacontinueupdaterollbackoutput)|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ContinueUpdateRollback

<a id="opIdPOST_ContinueUpdateRollback"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ContinueUpdateRollback?Action=ContinueUpdateRollback&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"RoleARN":{},"ResourcesToSkip":{},"ClientRequestToken":{}}'
```

`POST /#Action=ContinueUpdateRollback`

<p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>

> Body parameter

```json
{
  "StackName": {},
  "RoleARN": {},
  "ResourcesToSkip": {},
  "ClientRequestToken": {}
}
```

<h3 id="postcontinueupdaterollback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ContinueUpdateRollbackInput](#schemacontinueupdaterollbackinput)|false|none|
|» StackName|body|object|true|none|
|» RoleARN|body|object|false|none|
|» ResourcesToSkip|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ContinueUpdateRollback|
|Version|2010-05-15|

<h3 id="postcontinueupdaterollback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContinueUpdateRollbackOutput](#schemacontinueupdaterollbackoutput)|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateChangeSet

<a id="opIdGET_CreateChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateChangeSet?StackName=string&ChangeSetName=string&Action=CreateChangeSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateChangeSet`

<p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make changes until you execute the change set.</p> <p>To create a change set for the entire stack hierarchy, set <code>IncludeNestedStacks</code> to <code>True</code>.</p>

<h3 id="getcreatechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name or the unique ID of the stack for which you are creating a change set. CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.|
|TemplateBody|query|string|false|<p>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>|
|TemplateURL|query|string|false|<p>The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the change set by comparing this template with the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>|
|UsePreviousTemplate|query|boolean|false|Whether to reuse the template that's associated with the stack to create the change set.|
|Parameters|query|[[Parameter](#schemaparameter)]|false|A list of <code>Parameter</code> structures that specify input parameters for the change set. For more information, see the <a>Parameter</a> data type.|
|Capabilities|query|[[Capability](#schemacapability)]|false|<p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p> <note> <p>This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no effect.</p> <p>If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create or update the stack directly from the template using the <a>CreateStack</a> or <a>UpdateStack</a> action, and specifying this capability.</p> </note> <p>For more information about macros, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation macros to perform custom processing on templates</a>.</p> </li> </ul>|
|ResourceTypes|query|[[ResourceType](#schemaresourcetype)]|false|<p>The template resource types that you have permissions to work with if you execute this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling access with Identity and Access Management</a> in the CloudFormation User Guide.</p>|
|RoleARN|query|string|false|<p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.</p>|
|RollbackConfiguration|query|object|false|The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.|
|NotificationARNs|query|[[NotificationARN](#schemanotificationarn)]|false|The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.|
|Tags|query|[[Tag](#schematag)]|false|Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.|
|ChangeSetName|query|string|true|<p>The name of the change set. The name must be unique among all change sets that are associated with the specified stack.</p> <p>A change set name can contain only alphanumeric, case sensitive characters, and hyphens. It must start with an alphabetical character and can't exceed 128 characters.</p>|
|ClientToken|query|string|false|A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another change set with the same name. You might retry <code>CreateChangeSet</code> requests to ensure that CloudFormation successfully received them.|
|Description|query|string|false|A description to help you identify this change set.|
|ChangeSetType|query|string|false|<p>The type of change set operation. To create a change set for a new stack, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code>. To create a change set for an import operation, specify <code>IMPORT</code>.</p> <p>If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995">REVIEW_IN_PROGRESS</a> state until you execute the change set.</p> <p>By default, CloudFormation specifies <code>UPDATE</code>. You can't use the <code>UPDATE</code> type to create a change set for a new stack or the <code>CREATE</code> type to create a change set for an existing stack.</p>|
|ResourcesToImport|query|[[ResourceToImport](#schemaresourcetoimport)]|false|The resources to import into your stack.|
|IncludeNestedStacks|query|boolean|false|Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to <code>False</code>. To include nested sets in a change set, specify <code>True</code>.|
|OnStackFailure|query|string|false|<p>Determines what action will be taken if stack creation fails. If this parameter is specified, the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation must not be specified. This must be one of these values:</p> <ul> <li> <p> <code>DELETE</code> - Deletes the change set if the stack creation fails. This is only valid when the <code>ChangeSetType</code> parameter is set to <code>CREATE</code>. If the deletion of the stack fails, the status of the stack is <code>DELETE_FAILED</code>.</p> </li> <li> <p> <code>DO_NOTHING</code> - if the stack creation fails, do nothing. This is equivalent to specifying <code>true</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p> </li> <li> <p> <code>ROLLBACK</code> - if the stack creation fails, roll back the stack. This is equivalent to specifying <code>false</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p> </li> </ul> <p>For nested stacks, when the <code>OnStackFailure</code> parameter is set to <code>DELETE</code> for the change set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to be deleted.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Capabilities|CAPABILITY_IAM|
|Capabilities|CAPABILITY_NAMED_IAM|
|Capabilities|CAPABILITY_AUTO_EXPAND|
|ChangeSetType|CREATE|
|ChangeSetType|UPDATE|
|ChangeSetType|IMPORT|
|OnStackFailure|DO_NOTHING|
|OnStackFailure|ROLLBACK|
|OnStackFailure|DELETE|
|Action|CreateChangeSet|
|Version|2010-05-15|

<h3 id="getcreatechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateChangeSetOutput](#schemacreatechangesetoutput)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateChangeSet

<a id="opIdPOST_CreateChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateChangeSet?Action=CreateChangeSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"TemplateBody":{},"TemplateURL":{},"UsePreviousTemplate":{},"Parameters":{},"Capabilities":{},"ResourceTypes":{},"RoleARN":{},"RollbackConfiguration":{"RollbackTriggers":{},"MonitoringTimeInMinutes":{}},"NotificationARNs":{},"Tags":{},"ChangeSetName":{},"ClientToken":{},"Description":{},"ChangeSetType":{},"ResourcesToImport":{},"IncludeNestedStacks":{},"OnStackFailure":{}}'
```

`POST /#Action=CreateChangeSet`

<p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make changes until you execute the change set.</p> <p>To create a change set for the entire stack hierarchy, set <code>IncludeNestedStacks</code> to <code>True</code>.</p>

> Body parameter

```json
{
  "StackName": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "UsePreviousTemplate": {},
  "Parameters": {},
  "Capabilities": {},
  "ResourceTypes": {},
  "RoleARN": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "NotificationARNs": {},
  "Tags": {},
  "ChangeSetName": {},
  "ClientToken": {},
  "Description": {},
  "ChangeSetType": {},
  "ResourcesToImport": {},
  "IncludeNestedStacks": {},
  "OnStackFailure": {}
}
```

<h3 id="postcreatechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateChangeSetInput](#schemacreatechangesetinput)|false|none|
|» StackName|body|object|true|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|
|» UsePreviousTemplate|body|object|false|none|
|» Parameters|body|object|false|none|
|» Capabilities|body|object|false|none|
|» ResourceTypes|body|object|false|none|
|» RoleARN|body|object|false|none|
|» RollbackConfiguration|body|object|false|none|
|» » RollbackTriggers|body|object|false|none|
|» » MonitoringTimeInMinutes|body|object|false|none|
|» NotificationARNs|body|object|false|none|
|» Tags|body|object|false|none|
|» ChangeSetName|body|object|true|none|
|» ClientToken|body|object|false|none|
|» Description|body|object|false|none|
|» ChangeSetType|body|object|false|none|
|» ResourcesToImport|body|object|false|none|
|» IncludeNestedStacks|body|object|false|none|
|» OnStackFailure|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateChangeSet|
|Version|2010-05-15|

<h3 id="postcreatechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateChangeSetOutput](#schemacreatechangesetoutput)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateStack

<a id="opIdGET_CreateStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateStack?StackName=string&Action=CreateStack&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateStack`

Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the <a>DescribeStacks</a> operation.

<h3 id="getcreatestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|<p>The name that's associated with the stack. The name must be unique in the Region in which you are creating the stack.</p> <note> <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetical character and can't be longer than 128 characters.</p> </note>|
|TemplateBody|query|string|false|<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>|
|TemplateURL|query|string|false|<p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>|
|Parameters|query|[[Parameter](#schemaparameter)]|false|A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.|
|DisableRollback|query|boolean|false|<p>Set to <code>true</code> to disable rollback of the stack if stack creation failed. You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not both.</p> <p>Default: <code>false</code> </p>|
|RollbackConfiguration|query|object|false|The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.|
|TimeoutInMinutes|query|integer|false|The amount of time that can pass before the stack status becomes CREATE_FAILED; if <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will be rolled back.|
|NotificationARNs|query|[[NotificationARN](#schemanotificationarn)]|false|The Amazon Simple Notification Service (Amazon SNS) topic ARNs to publish stack related events. You can find your Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI).|
|Capabilities|query|[[Capability](#schemacapability)]|false|<p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p> <p>If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create the stack directly from the template using this capability.</p> <important> <p>You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation macros to perform custom processing on templates</a>.</p> </li> </ul>|
|ResourceTypes|query|[[ResourceType](#schemaresourcetype)]|false|<p>The template resource types that you have permissions to work with for this create stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>. Use the following syntax to describe template resource types: <code>AWS::*</code> (for all Amazon Web Services resources), <code>Custom::*</code> (for all custom resources), <code>Custom::<i>logical_ID</i> </code> (for a specific custom resource), <code>AWS::<i>service_name</i>::*</code> (for all resources of a particular Amazon Web Services service), and <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i> </code> (for a specific Amazon Web Services resource).</p> <p>If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM) uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>|
|RoleARN|query|string|false|<p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.</p>|
|OnFailure|query|string|false|<p>Determines what action will be taken if stack creation fails. This must be one of: <code>DO_NOTHING</code>, <code>ROLLBACK</code>, or <code>DELETE</code>. You can specify either <code>OnFailure</code> or <code>DisableRollback</code>, but not both.</p> <p>Default: <code>ROLLBACK</code> </p>|
|StackPolicyBody|query|string|false|Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in the <i>CloudFormation User Guide</i>. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.|
|StackPolicyURL|query|string|false|Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.|
|Tags|query|[[Tag](#schematag)]|false|Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.|
|ClientRequestToken|query|string|false|<p>A unique identifier for this <code>CreateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create a stack with the same name. You might retry <code>CreateStack</code> requests to ensure that CloudFormation successfully received them.</p> <p>All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>|
|EnableTerminationProtection|query|boolean|false|<p>Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>. Termination protection is deactivated on stacks by default.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>|
|RetainExceptOnCreate|query|boolean|false|This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Capabilities|CAPABILITY_IAM|
|Capabilities|CAPABILITY_NAMED_IAM|
|Capabilities|CAPABILITY_AUTO_EXPAND|
|OnFailure|DO_NOTHING|
|OnFailure|ROLLBACK|
|OnFailure|DELETE|
|Action|CreateStack|
|Version|2010-05-15|

<h3 id="getcreatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackOutput](#schemacreatestackoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|
|483|483|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateStack

<a id="opIdPOST_CreateStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateStack?Action=CreateStack&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"TemplateBody":{},"TemplateURL":{},"Parameters":{},"DisableRollback":{},"RollbackConfiguration":{"RollbackTriggers":{},"MonitoringTimeInMinutes":{}},"TimeoutInMinutes":{},"NotificationARNs":{},"Capabilities":{},"ResourceTypes":{},"RoleARN":{},"OnFailure":{},"StackPolicyBody":{},"StackPolicyURL":{},"Tags":{},"ClientRequestToken":{},"EnableTerminationProtection":{},"RetainExceptOnCreate":{}}'
```

`POST /#Action=CreateStack`

Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the <a>DescribeStacks</a> operation.

> Body parameter

```json
{
  "StackName": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "Parameters": {},
  "DisableRollback": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "TimeoutInMinutes": {},
  "NotificationARNs": {},
  "Capabilities": {},
  "ResourceTypes": {},
  "RoleARN": {},
  "OnFailure": {},
  "StackPolicyBody": {},
  "StackPolicyURL": {},
  "Tags": {},
  "ClientRequestToken": {},
  "EnableTerminationProtection": {},
  "RetainExceptOnCreate": {}
}
```

<h3 id="postcreatestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateStackInput](#schemacreatestackinput)|false|none|
|» StackName|body|object|true|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|
|» Parameters|body|object|false|none|
|» DisableRollback|body|object|false|none|
|» RollbackConfiguration|body|object|false|none|
|» » RollbackTriggers|body|object|false|none|
|» » MonitoringTimeInMinutes|body|object|false|none|
|» TimeoutInMinutes|body|object|false|none|
|» NotificationARNs|body|object|false|none|
|» Capabilities|body|object|false|none|
|» ResourceTypes|body|object|false|none|
|» RoleARN|body|object|false|none|
|» OnFailure|body|object|false|none|
|» StackPolicyBody|body|object|false|none|
|» StackPolicyURL|body|object|false|none|
|» Tags|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» EnableTerminationProtection|body|object|false|none|
|» RetainExceptOnCreate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateStack|
|Version|2010-05-15|

<h3 id="postcreatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackOutput](#schemacreatestackoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|
|483|483|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateStackInstances

<a id="opIdGET_CreateStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateStackInstances?StackSetName=string&Regions=string&Action=CreateStackInstances&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateStackInstances`

Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.

<h3 id="getcreatestackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to create stack instances from.|
|Accounts|query|[[Account](#schemaaccount)]|false|<p>[Self-managed permissions] The names of one or more Amazon Web Services accounts that you want to create stack instances in the specified Region(s) for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>|
|DeploymentTargets|query|object|false|<p>[Service-managed permissions] The Organizations accounts for which to create stack instances in the specified Amazon Web Services Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>|
|Regions|query|[[Region](#schemaregion)]|true|The names of one or more Amazon Web Services Regions where you want to create stack instances using the specified Amazon Web Services accounts.|
|ParameterOverrides|query|[[Parameter](#schemaparameter)]|false|<p>A list of stack set parameters whose values you want to override in the selected stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave an overridden parameter set to its present value, include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> <li> <p>To set an overridden parameter back to the value specified in the stack set, specify a parameter list but don't include the parameter in the list.</p> </li> <li> <p>To leave all parameters set to their present values, don't specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template.</p>|
|OperationPreferences|query|object|false|Preferences for how CloudFormation performs this stack set operation.|
|OperationId|query|string|false|<p>The unique identifier for this stack set operation.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>.</p>|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|CreateStackInstances|
|Version|2010-05-15|

<h3 id="getcreatestackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackInstancesOutput](#schemacreatestackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|483|483|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateStackInstances

<a id="opIdPOST_CreateStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateStackInstances?Action=CreateStackInstances&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"Accounts":{},"DeploymentTargets":{"Accounts":{},"AccountsUrl":{},"OrganizationalUnitIds":{},"AccountFilterType":{}},"Regions":{},"ParameterOverrides":{},"OperationPreferences":{"RegionConcurrencyType":{},"RegionOrder":{},"FailureToleranceCount":{},"FailureTolerancePercentage":{},"MaxConcurrentCount":{},"MaxConcurrentPercentage":{}},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=CreateStackInstances`

Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.

> Body parameter

```json
{
  "StackSetName": {},
  "Accounts": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "Regions": {},
  "ParameterOverrides": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="postcreatestackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateStackInstancesInput](#schemacreatestackinstancesinput)|false|none|
|» StackSetName|body|object|true|none|
|» Accounts|body|object|false|none|
|» DeploymentTargets|body|object|false|none|
|» » Accounts|body|object|false|none|
|» » AccountsUrl|body|object|false|none|
|» » OrganizationalUnitIds|body|object|false|none|
|» » AccountFilterType|body|object|false|none|
|» Regions|body|object|true|none|
|» ParameterOverrides|body|object|false|none|
|» OperationPreferences|body|object|false|none|
|» » RegionConcurrencyType|body|object|false|none|
|» » RegionOrder|body|object|false|none|
|» » FailureToleranceCount|body|object|false|none|
|» » FailureTolerancePercentage|body|object|false|none|
|» » MaxConcurrentCount|body|object|false|none|
|» » MaxConcurrentPercentage|body|object|false|none|
|» OperationId|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateStackInstances|
|Version|2010-05-15|

<h3 id="postcreatestackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackInstancesOutput](#schemacreatestackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|483|483|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateStackSet

<a id="opIdGET_CreateStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateStackSet?StackSetName=string&Action=CreateStackSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateStackSet`

Creates a stack set.

<h3 id="getcreatestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|<p>The name to associate with the stack set. The name must be unique in the Region where you create your stack set.</p> <note> <p>A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters.</p> </note>|
|Description|query|string|false|A description of the stack set. You can use the description to identify the stack set's purpose or other important information.|
|TemplateBody|query|string|false|<p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>|
|TemplateURL|query|string|false|<p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>|
|StackId|query|string|false|The stack ID you are importing into a new stack set. Specify the Amazon Resource Name (ARN) of the stack.|
|Parameters|query|[[Parameter](#schemaparameter)]|false|The input parameters for the stack set template.|
|Capabilities|query|[[Capability](#schemacapability)]|false|<p>In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for CloudFormation to create the stack set and related stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stack sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates reference macros. If your stack set template references one or more macros, you must create the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To create the stack set directly, you must acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/template-macros.html">Using CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <important> <p>Stack sets with service-managed permissions don't currently support the use of macros in templates. (This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail.</p> </important> </li> </ul>|
|Tags|query|[[Tag](#schematag)]|false|<p>The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.</p> <p>If you specify tags as part of a <code>CreateStackSet</code> action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire <code>CreateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not created.</p>|
|AdministrationRoleARN|query|string|false|<p>The Amazon Resource Name (ARN) of the IAM role to use to create this stack set.</p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack Set Operations</a> in the <i>CloudFormation User Guide</i>.</p>|
|ExecutionRoleName|query|string|false|<p>The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets.</p>|
|PermissionModel|query|string|false|<p>Describes how the IAM roles required for stack set operations are created. By default, <code>SELF-MANAGED</code> is specified.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>|
|AutoDeployment|query|object|false|Describes whether StackSets automatically deploys to Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if <code>PermissionModel</code> is <code>SERVICE_MANAGED</code>.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>To create a stack set with service-managed permissions while signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>To create a stack set with service-managed permissions while signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated admin in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul> <p>Stack sets with service-managed permissions are created in the management account, including stack sets that are created by delegated administrators.</p>|
|ClientRequestToken|query|string|false|<p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another stack set with the same name. You might retry <code>CreateStackSet</code> requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p>|
|ManagedExecution|query|object|false|Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Capabilities|CAPABILITY_IAM|
|Capabilities|CAPABILITY_NAMED_IAM|
|Capabilities|CAPABILITY_AUTO_EXPAND|
|PermissionModel|SERVICE_MANAGED|
|PermissionModel|SELF_MANAGED|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|CreateStackSet|
|Version|2010-05-15|

<h3 id="getcreatestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackSetOutput](#schemacreatestacksetoutput)|
|480|480|NameAlreadyExistsException|[NameAlreadyExistsException](#schemanamealreadyexistsexception)|
|481|481|CreatedButModifiedException|[CreatedButModifiedException](#schemacreatedbutmodifiedexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateStackSet

<a id="opIdPOST_CreateStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=CreateStackSet?Action=CreateStackSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"Description":{},"TemplateBody":{},"TemplateURL":{},"StackId":{},"Parameters":{},"Capabilities":{},"Tags":{},"AdministrationRoleARN":{},"ExecutionRoleName":{},"PermissionModel":{},"AutoDeployment":{"Enabled":{},"RetainStacksOnAccountRemoval":{}},"CallAs":{},"ClientRequestToken":{},"ManagedExecution":{"Active":{}}}'
```

`POST /#Action=CreateStackSet`

Creates a stack set.

> Body parameter

```json
{
  "StackSetName": {},
  "Description": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "StackId": {},
  "Parameters": {},
  "Capabilities": {},
  "Tags": {},
  "AdministrationRoleARN": {},
  "ExecutionRoleName": {},
  "PermissionModel": {},
  "AutoDeployment": {
    "Enabled": {},
    "RetainStacksOnAccountRemoval": {}
  },
  "CallAs": {},
  "ClientRequestToken": {},
  "ManagedExecution": {
    "Active": {}
  }
}
```

<h3 id="postcreatestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateStackSetInput](#schemacreatestacksetinput)|false|none|
|» StackSetName|body|object|true|none|
|» Description|body|object|false|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|
|» StackId|body|object|false|none|
|» Parameters|body|object|false|none|
|» Capabilities|body|object|false|none|
|» Tags|body|object|false|none|
|» AdministrationRoleARN|body|object|false|none|
|» ExecutionRoleName|body|object|false|none|
|» PermissionModel|body|object|false|none|
|» AutoDeployment|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » RetainStacksOnAccountRemoval|body|object|false|none|
|» CallAs|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» ManagedExecution|body|object|false|none|
|» » Active|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateStackSet|
|Version|2010-05-15|

<h3 id="postcreatestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStackSetOutput](#schemacreatestacksetoutput)|
|480|480|NameAlreadyExistsException|[NameAlreadyExistsException](#schemanamealreadyexistsexception)|
|481|481|CreatedButModifiedException|[CreatedButModifiedException](#schemacreatedbutmodifiedexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeactivateOrganizationsAccess

<a id="opIdGET_DeactivateOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeactivateOrganizationsAccess?Action=DeactivateOrganizationsAccess&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeactivateOrganizationsAccess`

Deactivates trusted access with Organizations. If trusted access is deactivated, the management account does not have permissions to create and manage service-managed StackSets for your organization.

<h3 id="getdeactivateorganizationsaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeactivateOrganizationsAccess|
|Version|2010-05-15|

<h3 id="getdeactivateorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivateOrganizationsAccessOutput](#schemadeactivateorganizationsaccessoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeactivateOrganizationsAccess

<a id="opIdPOST_DeactivateOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeactivateOrganizationsAccess?Action=DeactivateOrganizationsAccess&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /#Action=DeactivateOrganizationsAccess`

Deactivates trusted access with Organizations. If trusted access is deactivated, the management account does not have permissions to create and manage service-managed StackSets for your organization.

> Body parameter

```json
{}
```

<h3 id="postdeactivateorganizationsaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeactivateOrganizationsAccessInput](#schemadeactivateorganizationsaccessinput)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeactivateOrganizationsAccess|
|Version|2010-05-15|

<h3 id="postdeactivateorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivateOrganizationsAccessOutput](#schemadeactivateorganizationsaccessoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeactivateType

<a id="opIdGET_DeactivateType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeactivateType?Action=DeactivateType&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeactivateType`

<p>Deactivates a public extension that was previously activated in this account and Region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>

<h3 id="getdeactivatetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TypeName|query|string|false|<p>The type name of the extension, in this account and Region. If you specified a type name alias when enabling the extension, use the type name alias.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|Type|query|string|false|<p>The extension type.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|Arn|query|string|false|<p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|DeactivateType|
|Version|2010-05-15|

<h3 id="getdeactivatetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivateTypeOutput](#schemadeactivatetypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeactivateType

<a id="opIdPOST_DeactivateType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeactivateType?Action=DeactivateType&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TypeName":{},"Type":{},"Arn":{}}'
```

`POST /#Action=DeactivateType`

<p>Deactivates a public extension that was previously activated in this account and Region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>

> Body parameter

```json
{
  "TypeName": {},
  "Type": {},
  "Arn": {}
}
```

<h3 id="postdeactivatetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeactivateTypeInput](#schemadeactivatetypeinput)|false|none|
|» TypeName|body|object|false|none|
|» Type|body|object|false|none|
|» Arn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeactivateType|
|Version|2010-05-15|

<h3 id="postdeactivatetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivateTypeOutput](#schemadeactivatetypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteChangeSet

<a id="opIdGET_DeleteChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteChangeSet?ChangeSetName=string&Action=DeleteChangeSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteChangeSet`

<p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>

<h3 id="getdeletechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChangeSetName|query|string|true|The name or Amazon Resource Name (ARN) of the change set that you want to delete.|
|StackName|query|string|false|If you specified the name of a change set to delete, specify the stack name or Amazon Resource Name (ARN) that's associated with it.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteChangeSet|
|Version|2010-05-15|

<h3 id="getdeletechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteChangeSetOutput](#schemadeletechangesetoutput)|
|480|480|InvalidChangeSetStatusException|[InvalidChangeSetStatusException](#schemainvalidchangesetstatusexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteChangeSet

<a id="opIdPOST_DeleteChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteChangeSet?Action=DeleteChangeSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ChangeSetName":{},"StackName":{}}'
```

`POST /#Action=DeleteChangeSet`

<p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>

> Body parameter

```json
{
  "ChangeSetName": {},
  "StackName": {}
}
```

<h3 id="postdeletechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteChangeSetInput](#schemadeletechangesetinput)|false|none|
|» ChangeSetName|body|object|true|none|
|» StackName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteChangeSet|
|Version|2010-05-15|

<h3 id="postdeletechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteChangeSetOutput](#schemadeletechangesetoutput)|
|480|480|InvalidChangeSetStatusException|[InvalidChangeSetStatusException](#schemainvalidchangesetstatusexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteStack

<a id="opIdGET_DeleteStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteStack?StackName=string&Action=DeleteStack&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteStack`

Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.

<h3 id="getdeletestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name or the unique stack ID that's associated with the stack.|
|RetainResources|query|[[LogicalResourceId](#schemalogicalresourceid)]|false|<p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, CloudFormation deletes the stack but doesn't delete the retained resources.</p> <p>Retaining resources is useful when you can't delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.</p>|
|RoleARN|query|string|false|<p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to delete the stack. CloudFormation uses the role's credentials to make calls on your behalf.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.</p>|
|ClientRequestToken|query|string|false|<p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry <code>DeleteStack</code> requests to ensure that CloudFormation successfully received them.</p> <p>All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteStack|
|Version|2010-05-15|

<h3 id="getdeletestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteStack

<a id="opIdPOST_DeleteStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteStack?Action=DeleteStack&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"RetainResources":{},"RoleARN":{},"ClientRequestToken":{}}'
```

`POST /#Action=DeleteStack`

Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.

> Body parameter

```json
{
  "StackName": {},
  "RetainResources": {},
  "RoleARN": {},
  "ClientRequestToken": {}
}
```

<h3 id="postdeletestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteStackInput](#schemadeletestackinput)|false|none|
|» StackName|body|object|true|none|
|» RetainResources|body|object|false|none|
|» RoleARN|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteStack|
|Version|2010-05-15|

<h3 id="postdeletestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteStackInstances

<a id="opIdGET_DeleteStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteStackInstances?StackSetName=string&Regions=string&RetainStacks=true&Action=DeleteStackInstances&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteStackInstances`

Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.

<h3 id="getdeletestackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to delete stack instances for.|
|Accounts|query|[[Account](#schemaaccount)]|false|<p>[Self-managed permissions] The names of the Amazon Web Services accounts that you want to delete stack instances for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>|
|DeploymentTargets|query|object|false|<p>[Service-managed permissions] The Organizations accounts from which to delete stack instances.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>|
|Regions|query|[[Region](#schemaregion)]|true|The Amazon Web Services Regions where you want to delete stack set instances.|
|OperationPreferences|query|object|false|Preferences for how CloudFormation performs this stack set operation.|
|RetainStacks|query|boolean|true|<p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>|
|OperationId|query|string|false|<p>The unique identifier for this stack set operation.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>.</p>|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|DeleteStackInstances|
|Version|2010-05-15|

<h3 id="getdeletestackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStackInstancesOutput](#schemadeletestackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|483|483|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteStackInstances

<a id="opIdPOST_DeleteStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteStackInstances?Action=DeleteStackInstances&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"Accounts":{},"DeploymentTargets":{"Accounts":{},"AccountsUrl":{},"OrganizationalUnitIds":{},"AccountFilterType":{}},"Regions":{},"OperationPreferences":{"RegionConcurrencyType":{},"RegionOrder":{},"FailureToleranceCount":{},"FailureTolerancePercentage":{},"MaxConcurrentCount":{},"MaxConcurrentPercentage":{}},"RetainStacks":{},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=DeleteStackInstances`

Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.

> Body parameter

```json
{
  "StackSetName": {},
  "Accounts": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "Regions": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "RetainStacks": {},
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="postdeletestackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteStackInstancesInput](#schemadeletestackinstancesinput)|false|none|
|» StackSetName|body|object|true|none|
|» Accounts|body|object|false|none|
|» DeploymentTargets|body|object|false|none|
|» » Accounts|body|object|false|none|
|» » AccountsUrl|body|object|false|none|
|» » OrganizationalUnitIds|body|object|false|none|
|» » AccountFilterType|body|object|false|none|
|» Regions|body|object|true|none|
|» OperationPreferences|body|object|false|none|
|» » RegionConcurrencyType|body|object|false|none|
|» » RegionOrder|body|object|false|none|
|» » FailureToleranceCount|body|object|false|none|
|» » FailureTolerancePercentage|body|object|false|none|
|» » MaxConcurrentCount|body|object|false|none|
|» » MaxConcurrentPercentage|body|object|false|none|
|» RetainStacks|body|object|true|none|
|» OperationId|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteStackInstances|
|Version|2010-05-15|

<h3 id="postdeletestackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStackInstancesOutput](#schemadeletestackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|483|483|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteStackSet

<a id="opIdGET_DeleteStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteStackSet?StackSetName=string&Action=DeleteStackSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteStackSet`

Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.

<h3 id="getdeletestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you're deleting. You can obtain this value by running <a>ListStackSets</a>.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|DeleteStackSet|
|Version|2010-05-15|

<h3 id="getdeletestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStackSetOutput](#schemadeletestacksetoutput)|
|480|480|StackSetNotEmptyException|[StackSetNotEmptyException](#schemastacksetnotemptyexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteStackSet

<a id="opIdPOST_DeleteStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeleteStackSet?Action=DeleteStackSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"CallAs":{}}'
```

`POST /#Action=DeleteStackSet`

Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.

> Body parameter

```json
{
  "StackSetName": {},
  "CallAs": {}
}
```

<h3 id="postdeletestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteStackSetInput](#schemadeletestacksetinput)|false|none|
|» StackSetName|body|object|true|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteStackSet|
|Version|2010-05-15|

<h3 id="postdeletestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStackSetOutput](#schemadeletestacksetoutput)|
|480|480|StackSetNotEmptyException|[StackSetNotEmptyException](#schemastacksetnotemptyexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeregisterType

<a id="opIdGET_DeregisterType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeregisterType?Action=DeregisterType&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeregisterType`

<p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>

<h3 id="getderegistertype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Arn|query|string|false|<p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|Type|query|string|false|<p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|VersionId|query|string|false|The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|DeregisterType|
|Version|2010-05-15|

<h3 id="getderegistertype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTypeOutput](#schemaderegistertypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeregisterType

<a id="opIdPOST_DeregisterType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DeregisterType?Action=DeregisterType&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Arn":{},"Type":{},"TypeName":{},"VersionId":{}}'
```

`POST /#Action=DeregisterType`

<p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>

> Body parameter

```json
{
  "Arn": {},
  "Type": {},
  "TypeName": {},
  "VersionId": {}
}
```

<h3 id="postderegistertype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeregisterTypeInput](#schemaderegistertypeinput)|false|none|
|» Arn|body|object|false|none|
|» Type|body|object|false|none|
|» TypeName|body|object|false|none|
|» VersionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeregisterType|
|Version|2010-05-15|

<h3 id="postderegistertype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTypeOutput](#schemaderegistertypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAccountLimits

<a id="opIdGET_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAccountLimits`

Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.

<h3 id="getdescribeaccountlimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A string that identifies the next page of limits that you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAccountLimits|
|Version|2010-05-15|

<h3 id="getdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsOutput](#schemadescribeaccountlimitsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAccountLimits

<a id="opIdPOST_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{}}'
```

`POST /#Action=DescribeAccountLimits`

Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="postdescribeaccountlimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAccountLimitsInput](#schemadescribeaccountlimitsinput)|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAccountLimits|
|Version|2010-05-15|

<h3 id="postdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsOutput](#schemadescribeaccountlimitsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeChangeSet

<a id="opIdGET_DescribeChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeChangeSet?ChangeSetName=string&Action=DescribeChangeSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeChangeSet`

Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.

<h3 id="getdescribechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChangeSetName|query|string|true|The name or Amazon Resource Name (ARN) of the change set that you want to describe.|
|StackName|query|string|false|If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.|
|NextToken|query|string|false|A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of information that you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeChangeSet|
|Version|2010-05-15|

<h3 id="getdescribechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChangeSetOutput](#schemadescribechangesetoutput)|
|480|480|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeChangeSet

<a id="opIdPOST_DescribeChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeChangeSet?Action=DescribeChangeSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ChangeSetName":{},"StackName":{},"NextToken":{}}'
```

`POST /#Action=DescribeChangeSet`

Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.

> Body parameter

```json
{
  "ChangeSetName": {},
  "StackName": {},
  "NextToken": {}
}
```

<h3 id="postdescribechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeChangeSetInput](#schemadescribechangesetinput)|false|none|
|» ChangeSetName|body|object|true|none|
|» StackName|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeChangeSet|
|Version|2010-05-15|

<h3 id="postdescribechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChangeSetOutput](#schemadescribechangesetoutput)|
|480|480|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeChangeSetHooks

<a id="opIdGET_DescribeChangeSetHooks"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeChangeSetHooks?ChangeSetName=string&Action=DescribeChangeSetHooks&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeChangeSetHooks`

Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.

<h3 id="getdescribechangesethooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChangeSetName|query|string|true|The name or Amazon Resource Name (ARN) of the change set that you want to describe.|
|StackName|query|string|false|If you specified the name of a change set, specify the stack name or stack ID (ARN) of the change set you want to describe.|
|NextToken|query|string|false|A string, provided by the <code>DescribeChangeSetHooks</code> response output, that identifies the next page of information that you want to retrieve.|
|LogicalResourceId|query|string|false|If specified, lists only the hooks related to the specified <code>LogicalResourceId</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeChangeSetHooks|
|Version|2010-05-15|

<h3 id="getdescribechangesethooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChangeSetHooksOutput](#schemadescribechangesethooksoutput)|
|480|480|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeChangeSetHooks

<a id="opIdPOST_DescribeChangeSetHooks"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeChangeSetHooks?Action=DescribeChangeSetHooks&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ChangeSetName":{},"StackName":{},"NextToken":{},"LogicalResourceId":{}}'
```

`POST /#Action=DescribeChangeSetHooks`

Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.

> Body parameter

```json
{
  "ChangeSetName": {},
  "StackName": {},
  "NextToken": {},
  "LogicalResourceId": {}
}
```

<h3 id="postdescribechangesethooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeChangeSetHooksInput](#schemadescribechangesethooksinput)|false|none|
|» ChangeSetName|body|object|true|none|
|» StackName|body|object|false|none|
|» NextToken|body|object|false|none|
|» LogicalResourceId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeChangeSetHooks|
|Version|2010-05-15|

<h3 id="postdescribechangesethooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChangeSetHooksOutput](#schemadescribechangesethooksoutput)|
|480|480|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeOrganizationsAccess

<a id="opIdGET_DescribeOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeOrganizationsAccess?Action=DescribeOrganizationsAccess&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeOrganizationsAccess`

Retrieves information about the account's <code>OrganizationAccess</code> status. This API can be called either by the management account or the delegated administrator by using the <code>CallAs</code> parameter. This API can also be called without the <code>CallAs</code> parameter by the management account.

<h3 id="getdescribeorganizationsaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|DescribeOrganizationsAccess|
|Version|2010-05-15|

<h3 id="getdescribeorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationsAccessOutput](#schemadescribeorganizationsaccessoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeOrganizationsAccess

<a id="opIdPOST_DescribeOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeOrganizationsAccess?Action=DescribeOrganizationsAccess&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CallAs":{}}'
```

`POST /#Action=DescribeOrganizationsAccess`

Retrieves information about the account's <code>OrganizationAccess</code> status. This API can be called either by the management account or the delegated administrator by using the <code>CallAs</code> parameter. This API can also be called without the <code>CallAs</code> parameter by the management account.

> Body parameter

```json
{
  "CallAs": {}
}
```

<h3 id="postdescribeorganizationsaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOrganizationsAccessInput](#schemadescribeorganizationsaccessinput)|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeOrganizationsAccess|
|Version|2010-05-15|

<h3 id="postdescribeorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationsAccessOutput](#schemadescribeorganizationsaccessoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribePublisher

<a id="opIdGET_DescribePublisher"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribePublisher?Action=DescribePublisher&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribePublisher`

<p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>

<h3 id="getdescribepublisher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PublisherId|query|string|false|<p>The ID of the extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribePublisher|
|Version|2010-05-15|

<h3 id="getdescribepublisher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePublisherOutput](#schemadescribepublisheroutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribePublisher

<a id="opIdPOST_DescribePublisher"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribePublisher?Action=DescribePublisher&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PublisherId":{}}'
```

`POST /#Action=DescribePublisher`

<p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>

> Body parameter

```json
{
  "PublisherId": {}
}
```

<h3 id="postdescribepublisher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePublisherInput](#schemadescribepublisherinput)|false|none|
|» PublisherId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribePublisher|
|Version|2010-05-15|

<h3 id="postdescribepublisher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePublisherOutput](#schemadescribepublisheroutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackDriftDetectionStatus

<a id="opIdGET_DescribeStackDriftDetectionStatus"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackDriftDetectionStatus?StackDriftDetectionId=string&Action=DescribeStackDriftDetectionStatus&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackDriftDetectionStatus`

<p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>

<h3 id="getdescribestackdriftdetectionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackDriftDetectionId|query|string|true|<p>The ID of the drift detection results of this operation.</p> <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results CloudFormation retains for any given stack, and for how long, may vary.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackDriftDetectionStatus|
|Version|2010-05-15|

<h3 id="getdescribestackdriftdetectionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackDriftDetectionStatusOutput](#schemadescribestackdriftdetectionstatusoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackDriftDetectionStatus

<a id="opIdPOST_DescribeStackDriftDetectionStatus"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackDriftDetectionStatus?Action=DescribeStackDriftDetectionStatus&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackDriftDetectionId":{}}'
```

`POST /#Action=DescribeStackDriftDetectionStatus`

<p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>

> Body parameter

```json
{
  "StackDriftDetectionId": {}
}
```

<h3 id="postdescribestackdriftdetectionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackDriftDetectionStatusInput](#schemadescribestackdriftdetectionstatusinput)|false|none|
|» StackDriftDetectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackDriftDetectionStatus|
|Version|2010-05-15|

<h3 id="postdescribestackdriftdetectionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackDriftDetectionStatusOutput](#schemadescribestackdriftdetectionstatusoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackEvents

<a id="opIdGET_DescribeStackEvents"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackEvents?Action=DescribeStackEvents&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackEvents`

<p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>

<h3 id="getdescribestackevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|false|<p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>|
|NextToken|query|string|false|A string that identifies the next page of events that you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackEvents|
|Version|2010-05-15|

<h3 id="getdescribestackevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackEventsOutput](#schemadescribestackeventsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackEvents

<a id="opIdPOST_DescribeStackEvents"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackEvents?Action=DescribeStackEvents&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"NextToken":{}}'
```

`POST /#Action=DescribeStackEvents`

<p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>

> Body parameter

```json
{
  "StackName": {},
  "NextToken": {}
}
```

<h3 id="postdescribestackevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackEventsInput](#schemadescribestackeventsinput)|false|none|
|» StackName|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackEvents|
|Version|2010-05-15|

<h3 id="postdescribestackevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackEventsOutput](#schemadescribestackeventsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackInstance

<a id="opIdGET_DescribeStackInstance"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackInstance?StackSetName=string&StackInstanceAccount=string&StackInstanceRegion=string&Action=DescribeStackInstance&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackInstance`

<p>Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account, and Amazon Web Services Region.</p> <p>For a list of stack instances that are associated with a specific StackSet, use <a>ListStackInstances</a>.</p>

<h3 id="getdescribestackinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or the unique stack ID of the stack set that you want to get stack instance information for.|
|StackInstanceAccount|query|string|true|The ID of an Amazon Web Services account that's associated with this stack instance.|
|StackInstanceRegion|query|string|true|The name of a Region that's associated with this stack instance.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|DescribeStackInstance|
|Version|2010-05-15|

<h3 id="getdescribestackinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackInstanceOutput](#schemadescribestackinstanceoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackInstance

<a id="opIdPOST_DescribeStackInstance"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackInstance?Action=DescribeStackInstance&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"StackInstanceAccount":{},"StackInstanceRegion":{},"CallAs":{}}'
```

`POST /#Action=DescribeStackInstance`

<p>Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account, and Amazon Web Services Region.</p> <p>For a list of stack instances that are associated with a specific StackSet, use <a>ListStackInstances</a>.</p>

> Body parameter

```json
{
  "StackSetName": {},
  "StackInstanceAccount": {},
  "StackInstanceRegion": {},
  "CallAs": {}
}
```

<h3 id="postdescribestackinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackInstanceInput](#schemadescribestackinstanceinput)|false|none|
|» StackSetName|body|object|true|none|
|» StackInstanceAccount|body|object|true|none|
|» StackInstanceRegion|body|object|true|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackInstance|
|Version|2010-05-15|

<h3 id="postdescribestackinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackInstanceOutput](#schemadescribestackinstanceoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackResource

<a id="opIdGET_DescribeStackResource"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackResource?StackName=string&LogicalResourceId=string&Action=DescribeStackResource&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackResource`

<p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>

<h3 id="getdescribestackresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|<p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>|
|LogicalResourceId|query|string|true|<p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackResource|
|Version|2010-05-15|

<h3 id="getdescribestackresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackResourceOutput](#schemadescribestackresourceoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackResource

<a id="opIdPOST_DescribeStackResource"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackResource?Action=DescribeStackResource&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"LogicalResourceId":{}}'
```

`POST /#Action=DescribeStackResource`

<p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>

> Body parameter

```json
{
  "StackName": {},
  "LogicalResourceId": {}
}
```

<h3 id="postdescribestackresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackResourceInput](#schemadescribestackresourceinput)|false|none|
|» StackName|body|object|true|none|
|» LogicalResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackResource|
|Version|2010-05-15|

<h3 id="postdescribestackresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackResourceOutput](#schemadescribestackresourceoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackResourceDrifts

<a id="opIdGET_DescribeStackResourceDrifts"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackResourceDrifts?StackName=string&Action=DescribeStackResourceDrifts&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackResourceDrifts`

<p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>

<h3 id="getdescribestackresourcedrifts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name of the stack for which you want drift information.|
|StackResourceDriftStatusFilters|query|[[StackResourceDriftStatus](#schemastackresourcedriftstatus)]|false|<p>The resource drift status values to use as filters for the resource drift results returned.</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resource's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p> </li> </ul>|
|NextToken|query|string|false|A string that identifies the next page of stack resource drift results.|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|StackResourceDriftStatusFilters|IN_SYNC|
|StackResourceDriftStatusFilters|MODIFIED|
|StackResourceDriftStatusFilters|DELETED|
|StackResourceDriftStatusFilters|NOT_CHECKED|
|Action|DescribeStackResourceDrifts|
|Version|2010-05-15|

<h3 id="getdescribestackresourcedrifts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackResourceDriftsOutput](#schemadescribestackresourcedriftsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackResourceDrifts

<a id="opIdPOST_DescribeStackResourceDrifts"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackResourceDrifts?Action=DescribeStackResourceDrifts&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"StackResourceDriftStatusFilters":{},"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=DescribeStackResourceDrifts`

<p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>

> Body parameter

```json
{
  "StackName": {},
  "StackResourceDriftStatusFilters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postdescribestackresourcedrifts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackResourceDriftsInput](#schemadescribestackresourcedriftsinput)|false|none|
|» StackName|body|object|true|none|
|» StackResourceDriftStatusFilters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackResourceDrifts|
|Version|2010-05-15|

<h3 id="postdescribestackresourcedrifts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackResourceDriftsOutput](#schemadescribestackresourcedriftsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackResources

<a id="opIdGET_DescribeStackResources"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackResources?Action=DescribeStackResources&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackResources`

<p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>

<h3 id="getdescribestackresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|false|<p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p> <p>Required: Conditional. If you don't specify <code>StackName</code>, you must specify <code>PhysicalResourceId</code>.</p>|
|LogicalResourceId|query|string|false|<p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>|
|PhysicalResourceId|query|string|false|<p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</p> <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the instance belongs to and what other resources are part of the stack.</p> <p>Required: Conditional. If you don't specify <code>PhysicalResourceId</code>, you must specify <code>StackName</code>.</p> <p>Default: There is no default value.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackResources|
|Version|2010-05-15|

<h3 id="getdescribestackresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackResourcesOutput](#schemadescribestackresourcesoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackResources

<a id="opIdPOST_DescribeStackResources"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackResources?Action=DescribeStackResources&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"LogicalResourceId":{},"PhysicalResourceId":{}}'
```

`POST /#Action=DescribeStackResources`

<p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>

> Body parameter

```json
{
  "StackName": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {}
}
```

<h3 id="postdescribestackresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackResourcesInput](#schemadescribestackresourcesinput)|false|none|
|» StackName|body|object|false|none|
|» LogicalResourceId|body|object|false|none|
|» PhysicalResourceId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackResources|
|Version|2010-05-15|

<h3 id="postdescribestackresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackResourcesOutput](#schemadescribestackresourcesoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackSet

<a id="opIdGET_DescribeStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackSet?StackSetName=string&Action=DescribeStackSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackSet`

Returns the description of the specified StackSet.

<h3 id="getdescribestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set whose description you want.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|DescribeStackSet|
|Version|2010-05-15|

<h3 id="getdescribestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackSetOutput](#schemadescribestacksetoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackSet

<a id="opIdPOST_DescribeStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackSet?Action=DescribeStackSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"CallAs":{}}'
```

`POST /#Action=DescribeStackSet`

Returns the description of the specified StackSet.

> Body parameter

```json
{
  "StackSetName": {},
  "CallAs": {}
}
```

<h3 id="postdescribestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackSetInput](#schemadescribestacksetinput)|false|none|
|» StackSetName|body|object|true|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackSet|
|Version|2010-05-15|

<h3 id="postdescribestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackSetOutput](#schemadescribestacksetoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStackSetOperation

<a id="opIdGET_DescribeStackSetOperation"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackSetOperation?StackSetName=string&OperationId=string&Action=DescribeStackSetOperation&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStackSetOperation`

Returns the description of the specified StackSet operation.

<h3 id="getdescribestacksetoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or the unique stack ID of the stack set for the stack operation.|
|OperationId|query|string|true|The unique ID of the stack set operation.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|DescribeStackSetOperation|
|Version|2010-05-15|

<h3 id="getdescribestacksetoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackSetOperationOutput](#schemadescribestacksetoperationoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStackSetOperation

<a id="opIdPOST_DescribeStackSetOperation"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStackSetOperation?Action=DescribeStackSetOperation&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=DescribeStackSetOperation`

Returns the description of the specified StackSet operation.

> Body parameter

```json
{
  "StackSetName": {},
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="postdescribestacksetoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStackSetOperationInput](#schemadescribestacksetoperationinput)|false|none|
|» StackSetName|body|object|true|none|
|» OperationId|body|object|true|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStackSetOperation|
|Version|2010-05-15|

<h3 id="postdescribestacksetoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStackSetOperationOutput](#schemadescribestacksetoperationoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeStacks

<a id="opIdGET_DescribeStacks"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStacks?Action=DescribeStacks&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeStacks`

<p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>

<h3 id="getdescribestacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|false|<note> <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response that describes all resources in the account. This requires <code>ListStacks</code> and <code>DescribeStacks</code> permissions.</p> <p>The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request:</p> <p>{ "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*/*" }] }</p> </note> <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>|
|NextToken|query|string|false|A string that identifies the next page of stacks that you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStacks|
|Version|2010-05-15|

<h3 id="getdescribestacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStacksOutput](#schemadescribestacksoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeStacks

<a id="opIdPOST_DescribeStacks"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeStacks?Action=DescribeStacks&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"NextToken":{}}'
```

`POST /#Action=DescribeStacks`

<p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>

> Body parameter

```json
{
  "StackName": {},
  "NextToken": {}
}
```

<h3 id="postdescribestacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStacksInput](#schemadescribestacksinput)|false|none|
|» StackName|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeStacks|
|Version|2010-05-15|

<h3 id="postdescribestacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStacksOutput](#schemadescribestacksoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeType

<a id="opIdGET_DescribeType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeType?Action=DescribeType&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeType`

<p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>

<h3 id="getdescribetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|Arn|query|string|false|<p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|VersionId|query|string|false|<p>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>|
|PublisherId|query|string|false|<p>The publisher ID of the extension publisher.</p> <p>Extensions provided by Amazon Web Services are not assigned a publisher ID.</p>|
|PublicVersionNumber|query|string|false|The version number of a public third-party extension.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|DescribeType|
|Version|2010-05-15|

<h3 id="getdescribetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTypeOutput](#schemadescribetypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeType

<a id="opIdPOST_DescribeType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeType?Action=DescribeType&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Type":{},"TypeName":{},"Arn":{},"VersionId":{},"PublisherId":{},"PublicVersionNumber":{}}'
```

`POST /#Action=DescribeType`

<p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>

> Body parameter

```json
{
  "Type": {},
  "TypeName": {},
  "Arn": {},
  "VersionId": {},
  "PublisherId": {},
  "PublicVersionNumber": {}
}
```

<h3 id="postdescribetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTypeInput](#schemadescribetypeinput)|false|none|
|» Type|body|object|false|none|
|» TypeName|body|object|false|none|
|» Arn|body|object|false|none|
|» VersionId|body|object|false|none|
|» PublisherId|body|object|false|none|
|» PublicVersionNumber|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeType|
|Version|2010-05-15|

<h3 id="postdescribetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTypeOutput](#schemadescribetypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTypeRegistration

<a id="opIdGET_DescribeTypeRegistration"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeTypeRegistration?RegistrationToken=string&Action=DescribeTypeRegistration&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTypeRegistration`

<p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <a>RegisterType</a>, you can then use <a>DescribeTypeRegistration</a> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <a>DescribeType</a> to return detailed information about an extension.</p>

<h3 id="getdescribetyperegistration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RegistrationToken|query|string|true|<p>The identifier for this registration request.</p> <p>This registration token is generated by CloudFormation when you initiate a registration request using <a>RegisterType</a>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTypeRegistration|
|Version|2010-05-15|

<h3 id="getdescribetyperegistration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTypeRegistrationOutput](#schemadescribetyperegistrationoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTypeRegistration

<a id="opIdPOST_DescribeTypeRegistration"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DescribeTypeRegistration?Action=DescribeTypeRegistration&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RegistrationToken":{}}'
```

`POST /#Action=DescribeTypeRegistration`

<p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <a>RegisterType</a>, you can then use <a>DescribeTypeRegistration</a> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <a>DescribeType</a> to return detailed information about an extension.</p>

> Body parameter

```json
{
  "RegistrationToken": {}
}
```

<h3 id="postdescribetyperegistration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTypeRegistrationInput](#schemadescribetyperegistrationinput)|false|none|
|» RegistrationToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTypeRegistration|
|Version|2010-05-15|

<h3 id="postdescribetyperegistration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTypeRegistrationOutput](#schemadescribetyperegistrationoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetectStackDrift

<a id="opIdGET_DetectStackDrift"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DetectStackDrift?StackName=string&Action=DetectStackDrift&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetectStackDrift`

<p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>

<h3 id="getdetectstackdrift-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name of the stack for which you want to detect drift.|
|LogicalResourceIds|query|[[LogicalResourceId](#schemalogicalresourceid)]|false|The logical names of any resources you want to use as filters.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetectStackDrift|
|Version|2010-05-15|

<h3 id="getdetectstackdrift-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectStackDriftOutput](#schemadetectstackdriftoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetectStackDrift

<a id="opIdPOST_DetectStackDrift"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DetectStackDrift?Action=DetectStackDrift&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"LogicalResourceIds":{}}'
```

`POST /#Action=DetectStackDrift`

<p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>

> Body parameter

```json
{
  "StackName": {},
  "LogicalResourceIds": {}
}
```

<h3 id="postdetectstackdrift-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetectStackDriftInput](#schemadetectstackdriftinput)|false|none|
|» StackName|body|object|true|none|
|» LogicalResourceIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetectStackDrift|
|Version|2010-05-15|

<h3 id="postdetectstackdrift-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectStackDriftOutput](#schemadetectstackdriftoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetectStackResourceDrift

<a id="opIdGET_DetectStackResourceDrift"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DetectStackResourceDrift?StackName=string&LogicalResourceId=string&Action=DetectStackResourceDrift&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetectStackResourceDrift`

<p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>

<h3 id="getdetectstackresourcedrift-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name of the stack to which the resource belongs.|
|LogicalResourceId|query|string|true|The logical name of the resource for which to return drift information.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetectStackResourceDrift|
|Version|2010-05-15|

<h3 id="getdetectstackresourcedrift-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectStackResourceDriftOutput](#schemadetectstackresourcedriftoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetectStackResourceDrift

<a id="opIdPOST_DetectStackResourceDrift"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DetectStackResourceDrift?Action=DetectStackResourceDrift&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"LogicalResourceId":{}}'
```

`POST /#Action=DetectStackResourceDrift`

<p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>

> Body parameter

```json
{
  "StackName": {},
  "LogicalResourceId": {}
}
```

<h3 id="postdetectstackresourcedrift-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetectStackResourceDriftInput](#schemadetectstackresourcedriftinput)|false|none|
|» StackName|body|object|true|none|
|» LogicalResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetectStackResourceDrift|
|Version|2010-05-15|

<h3 id="postdetectstackresourcedrift-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectStackResourceDriftOutput](#schemadetectstackresourcedriftoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetectStackSetDrift

<a id="opIdGET_DetectStackSetDrift"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DetectStackSetDrift?StackSetName=string&Action=DetectStackSetDrift&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetectStackSetDrift`

<p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <a>DescribeStackSetOperation</a> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <a>DescribeStackSet</a> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <a>ListStackInstances</a> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <a>DescribeStackInstance</a> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <a>StopStackSetOperation</a>.</p>

<h3 id="getdetectstacksetdrift-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name of the stack set on which to perform the drift detection operation.|
|OperationPreferences|query|object|false|<p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>|
|OperationId|query|string|false| <i>The ID of the stack set operation.</i> |
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|DetectStackSetDrift|
|Version|2010-05-15|

<h3 id="getdetectstacksetdrift-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectStackSetDriftOutput](#schemadetectstacksetdriftoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetectStackSetDrift

<a id="opIdPOST_DetectStackSetDrift"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=DetectStackSetDrift?Action=DetectStackSetDrift&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"OperationPreferences":{"RegionConcurrencyType":{},"RegionOrder":{},"FailureToleranceCount":{},"FailureTolerancePercentage":{},"MaxConcurrentCount":{},"MaxConcurrentPercentage":{}},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=DetectStackSetDrift`

<p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <a>DescribeStackSetOperation</a> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <a>DescribeStackSet</a> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <a>ListStackInstances</a> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <a>DescribeStackInstance</a> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <a>StopStackSetOperation</a>.</p>

> Body parameter

```json
{
  "StackSetName": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="postdetectstacksetdrift-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetectStackSetDriftInput](#schemadetectstacksetdriftinput)|false|none|
|» StackSetName|body|object|true|none|
|» OperationPreferences|body|object|false|none|
|» » RegionConcurrencyType|body|object|false|none|
|» » RegionOrder|body|object|false|none|
|» » FailureToleranceCount|body|object|false|none|
|» » FailureTolerancePercentage|body|object|false|none|
|» » MaxConcurrentCount|body|object|false|none|
|» » MaxConcurrentPercentage|body|object|false|none|
|» OperationId|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetectStackSetDrift|
|Version|2010-05-15|

<h3 id="postdetectstacksetdrift-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectStackSetDriftOutput](#schemadetectstacksetdriftoutput)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_EstimateTemplateCost

<a id="opIdGET_EstimateTemplateCost"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=EstimateTemplateCost?Action=EstimateTemplateCost&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=EstimateTemplateCost`

Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.

<h3 id="getestimatetemplatecost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateBody|query|string|false|<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.)</p> <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</p>|
|TemplateURL|query|string|false|<p>Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>|
|Parameters|query|[[Parameter](#schemaparameter)]|false|A list of <code>Parameter</code> structures that specify input parameters.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|EstimateTemplateCost|
|Version|2010-05-15|

<h3 id="getestimatetemplatecost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EstimateTemplateCostOutput](#schemaestimatetemplatecostoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_EstimateTemplateCost

<a id="opIdPOST_EstimateTemplateCost"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=EstimateTemplateCost?Action=EstimateTemplateCost&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateBody":{},"TemplateURL":{},"Parameters":{}}'
```

`POST /#Action=EstimateTemplateCost`

Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.

> Body parameter

```json
{
  "TemplateBody": {},
  "TemplateURL": {},
  "Parameters": {}
}
```

<h3 id="postestimatetemplatecost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[EstimateTemplateCostInput](#schemaestimatetemplatecostinput)|false|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|
|» Parameters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|EstimateTemplateCost|
|Version|2010-05-15|

<h3 id="postestimatetemplatecost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EstimateTemplateCostOutput](#schemaestimatetemplatecostoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ExecuteChangeSet

<a id="opIdGET_ExecuteChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ExecuteChangeSet?ChangeSetName=string&Action=ExecuteChangeSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ExecuteChangeSet`

<p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>

<h3 id="getexecutechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ChangeSetName|query|string|true|The name or Amazon Resource Name (ARN) of the change set that you want use to update the specified stack.|
|StackName|query|string|false|If you specified the name of a change set, specify the stack name or Amazon Resource Name (ARN) that's associated with the change set you want to execute.|
|ClientRequestToken|query|string|false|A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry <code>ExecuteChangeSet</code> requests to ensure that CloudFormation successfully received them.|
|DisableRollback|query|boolean|false|<p>Preserves the state of previously provisioned resources when an operation fails. This parameter can't be specified when the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation was specified.</p> <ul> <li> <p> <code>True</code> - if the stack creation fails, do nothing. This is equivalent to specifying <code>DO_NOTHING</code> for the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p> </li> <li> <p> <code>False</code> - if the stack creation fails, roll back the stack. This is equivalent to specifying <code>ROLLBACK</code> for the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p> </li> </ul> <p>Default: <code>True</code> </p>|
|RetainExceptOnCreate|query|boolean|false|This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ExecuteChangeSet|
|Version|2010-05-15|

<h3 id="getexecutechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteChangeSetOutput](#schemaexecutechangesetoutput)|
|480|480|InvalidChangeSetStatusException|[InvalidChangeSetStatusException](#schemainvalidchangesetstatusexception)|
|481|481|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|
|482|482|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|
|483|483|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ExecuteChangeSet

<a id="opIdPOST_ExecuteChangeSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ExecuteChangeSet?Action=ExecuteChangeSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ChangeSetName":{},"StackName":{},"ClientRequestToken":{},"DisableRollback":{},"RetainExceptOnCreate":{}}'
```

`POST /#Action=ExecuteChangeSet`

<p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>

> Body parameter

```json
{
  "ChangeSetName": {},
  "StackName": {},
  "ClientRequestToken": {},
  "DisableRollback": {},
  "RetainExceptOnCreate": {}
}
```

<h3 id="postexecutechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ExecuteChangeSetInput](#schemaexecutechangesetinput)|false|none|
|» ChangeSetName|body|object|true|none|
|» StackName|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» DisableRollback|body|object|false|none|
|» RetainExceptOnCreate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ExecuteChangeSet|
|Version|2010-05-15|

<h3 id="postexecutechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteChangeSetOutput](#schemaexecutechangesetoutput)|
|480|480|InvalidChangeSetStatusException|[InvalidChangeSetStatusException](#schemainvalidchangesetstatusexception)|
|481|481|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|
|482|482|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|
|483|483|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetStackPolicy

<a id="opIdGET_GetStackPolicy"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=GetStackPolicy?StackName=string&Action=GetStackPolicy&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetStackPolicy`

Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.

<h3 id="getgetstackpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name or unique stack ID that's associated with the stack whose policy you want to get.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetStackPolicy|
|Version|2010-05-15|

<h3 id="getgetstackpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStackPolicyOutput](#schemagetstackpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetStackPolicy

<a id="opIdPOST_GetStackPolicy"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=GetStackPolicy?Action=GetStackPolicy&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{}}'
```

`POST /#Action=GetStackPolicy`

Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.

> Body parameter

```json
{
  "StackName": {}
}
```

<h3 id="postgetstackpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetStackPolicyInput](#schemagetstackpolicyinput)|false|none|
|» StackName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetStackPolicy|
|Version|2010-05-15|

<h3 id="postgetstackpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStackPolicyOutput](#schemagetstackpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetTemplate

<a id="opIdGET_GetTemplate"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=GetTemplate?Action=GetTemplate&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetTemplate`

<p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>

<h3 id="getgettemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|false|<p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>|
|ChangeSetName|query|string|false|The name or Amazon Resource Name (ARN) of a change set for which CloudFormation returns the associated template. If you specify a name, you must also specify the <code>StackName</code>.|
|TemplateStage|query|string|false|<p>For templates that include transforms, the stage of the template that CloudFormation returns. To get the user-submitted template, specify <code>Original</code>. To get the template after CloudFormation has processed all transforms, specify <code>Processed</code>.</p> <p>If the template doesn't include transforms, <code>Original</code> and <code>Processed</code> return the same template. By default, CloudFormation specifies <code>Processed</code>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|TemplateStage|Original|
|TemplateStage|Processed|
|Action|GetTemplate|
|Version|2010-05-15|

<h3 id="getgettemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateOutput](#schemagettemplateoutput)|
|480|480|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetTemplate

<a id="opIdPOST_GetTemplate"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=GetTemplate?Action=GetTemplate&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"ChangeSetName":{},"TemplateStage":{}}'
```

`POST /#Action=GetTemplate`

<p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>

> Body parameter

```json
{
  "StackName": {},
  "ChangeSetName": {},
  "TemplateStage": {}
}
```

<h3 id="postgettemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTemplateInput](#schemagettemplateinput)|false|none|
|» StackName|body|object|false|none|
|» ChangeSetName|body|object|false|none|
|» TemplateStage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetTemplate|
|Version|2010-05-15|

<h3 id="postgettemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateOutput](#schemagettemplateoutput)|
|480|480|ChangeSetNotFoundException|[ChangeSetNotFoundException](#schemachangesetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetTemplateSummary

<a id="opIdGET_GetTemplateSummary"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=GetTemplateSummary?Action=GetTemplateSummary&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetTemplateSummary`

<p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>

<h3 id="getgettemplatesummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateBody|query|string|false|<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>|
|TemplateURL|query|string|false|<p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>|
|StackName|query|string|false|<p>The name or the stack ID that's associated with the stack, which aren't always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>|
|StackSetName|query|string|false|<p>The name or unique ID of the stack set from which the stack was created.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|TemplateSummaryConfig|query|object|false|Specifies options for the <code>GetTemplateSummary</code> API action.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|GetTemplateSummary|
|Version|2010-05-15|

<h3 id="getgettemplatesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateSummaryOutput](#schemagettemplatesummaryoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetTemplateSummary

<a id="opIdPOST_GetTemplateSummary"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=GetTemplateSummary?Action=GetTemplateSummary&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateBody":{},"TemplateURL":{},"StackName":{},"StackSetName":{},"CallAs":{},"TemplateSummaryConfig":{"TreatUnrecognizedResourceTypesAsWarnings":{}}}'
```

`POST /#Action=GetTemplateSummary`

<p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>

> Body parameter

```json
{
  "TemplateBody": {},
  "TemplateURL": {},
  "StackName": {},
  "StackSetName": {},
  "CallAs": {},
  "TemplateSummaryConfig": {
    "TreatUnrecognizedResourceTypesAsWarnings": {}
  }
}
```

<h3 id="postgettemplatesummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTemplateSummaryInput](#schemagettemplatesummaryinput)|false|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|
|» StackName|body|object|false|none|
|» StackSetName|body|object|false|none|
|» CallAs|body|object|false|none|
|» TemplateSummaryConfig|body|object|false|none|
|» » TreatUnrecognizedResourceTypesAsWarnings|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetTemplateSummary|
|Version|2010-05-15|

<h3 id="postgettemplatesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateSummaryOutput](#schemagettemplatesummaryoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ImportStacksToStackSet

<a id="opIdGET_ImportStacksToStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ImportStacksToStackSet?StackSetName=string&Action=ImportStacksToStackSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ImportStacksToStackSet`

Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.

<h3 id="getimportstackstostackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name of the stack set. The name must be unique in the Region where you create your stack set.|
|StackIds|query|[[StackId](#schemastackid)]|false|<p>The IDs of the stacks you are importing into a stack set. You import up to 10 stacks per stack set at a time.</p> <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>|
|StackIdsUrl|query|string|false|<p>The Amazon S3 URL which contains list of stack ids to be inputted.</p> <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>|
|OrganizationalUnitIds|query|[[OrganizationalUnitId](#schemaorganizationalunitid)]|false|The list of OU ID's to which the stacks being imported has to be mapped as deployment target.|
|OperationPreferences|query|object|false|<p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>|
|OperationId|query|string|false|A unique, user defined, identifier for the stack set operation.|
|CallAs|query|string|false|<p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>For service managed stack sets, specify <code>DELEGATED_ADMIN</code>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|ImportStacksToStackSet|
|Version|2010-05-15|

<h3 id="getimportstackstostackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportStacksToStackSetOutput](#schemaimportstackstostacksetoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|482|482|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|483|483|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|484|484|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|485|485|StackNotFoundException|[StackNotFoundException](#schemastacknotfoundexception)|
|486|486|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ImportStacksToStackSet

<a id="opIdPOST_ImportStacksToStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ImportStacksToStackSet?Action=ImportStacksToStackSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"StackIds":{},"StackIdsUrl":{},"OrganizationalUnitIds":{},"OperationPreferences":{"RegionConcurrencyType":{},"RegionOrder":{},"FailureToleranceCount":{},"FailureTolerancePercentage":{},"MaxConcurrentCount":{},"MaxConcurrentPercentage":{}},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=ImportStacksToStackSet`

Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.

> Body parameter

```json
{
  "StackSetName": {},
  "StackIds": {},
  "StackIdsUrl": {},
  "OrganizationalUnitIds": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="postimportstackstostackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ImportStacksToStackSetInput](#schemaimportstackstostacksetinput)|false|none|
|» StackSetName|body|object|true|none|
|» StackIds|body|object|false|none|
|» StackIdsUrl|body|object|false|none|
|» OrganizationalUnitIds|body|object|false|none|
|» OperationPreferences|body|object|false|none|
|» » RegionConcurrencyType|body|object|false|none|
|» » RegionOrder|body|object|false|none|
|» » FailureToleranceCount|body|object|false|none|
|» » FailureTolerancePercentage|body|object|false|none|
|» » MaxConcurrentCount|body|object|false|none|
|» » MaxConcurrentPercentage|body|object|false|none|
|» OperationId|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ImportStacksToStackSet|
|Version|2010-05-15|

<h3 id="postimportstackstostackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportStacksToStackSetOutput](#schemaimportstackstostacksetoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|482|482|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|483|483|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|484|484|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|485|485|StackNotFoundException|[StackNotFoundException](#schemastacknotfoundexception)|
|486|486|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListChangeSets

<a id="opIdGET_ListChangeSets"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListChangeSets?StackName=string&Action=ListChangeSets&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListChangeSets`

Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.

<h3 id="getlistchangesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.|
|NextToken|query|string|false|A string (provided by the <a>ListChangeSets</a> response output) that identifies the next page of change sets that you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListChangeSets|
|Version|2010-05-15|

<h3 id="getlistchangesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChangeSetsOutput](#schemalistchangesetsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListChangeSets

<a id="opIdPOST_ListChangeSets"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListChangeSets?Action=ListChangeSets&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"NextToken":{}}'
```

`POST /#Action=ListChangeSets`

Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.

> Body parameter

```json
{
  "StackName": {},
  "NextToken": {}
}
```

<h3 id="postlistchangesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListChangeSetsInput](#schemalistchangesetsinput)|false|none|
|» StackName|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListChangeSets|
|Version|2010-05-15|

<h3 id="postlistchangesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChangeSetsOutput](#schemalistchangesetsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListExports

<a id="opIdGET_ListExports"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListExports?Action=ListExports&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListExports`

<p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> Fn::ImportValue</a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>

<h3 id="getlistexports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A string (provided by the <a>ListExports</a> response output) that identifies the next page of exported output values that you asked to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListExports|
|Version|2010-05-15|

<h3 id="getlistexports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExportsOutput](#schemalistexportsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListExports

<a id="opIdPOST_ListExports"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListExports?Action=ListExports&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{}}'
```

`POST /#Action=ListExports`

<p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> Fn::ImportValue</a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="postlistexports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListExportsInput](#schemalistexportsinput)|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListExports|
|Version|2010-05-15|

<h3 id="postlistexports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExportsOutput](#schemalistexportsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListImports

<a id="opIdGET_ListImports"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListImports?ExportName=string&Action=ListImports&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListImports`

<p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">Fn::ImportValue</a> function.</p>

<h3 id="getlistimports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ExportName|query|string|true|The name of the exported output value. CloudFormation returns the stack names that are importing this value.|
|NextToken|query|string|false|A string (provided by the <a>ListImports</a> response output) that identifies the next page of stacks that are importing the specified exported output value.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListImports|
|Version|2010-05-15|

<h3 id="getlistimports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportsOutput](#schemalistimportsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListImports

<a id="opIdPOST_ListImports"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListImports?Action=ListImports&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ExportName":{},"NextToken":{}}'
```

`POST /#Action=ListImports`

<p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">Fn::ImportValue</a> function.</p>

> Body parameter

```json
{
  "ExportName": {},
  "NextToken": {}
}
```

<h3 id="postlistimports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListImportsInput](#schemalistimportsinput)|false|none|
|» ExportName|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListImports|
|Version|2010-05-15|

<h3 id="postlistimports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportsOutput](#schemalistimportsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListStackInstanceResourceDrifts

<a id="opIdGET_ListStackInstanceResourceDrifts"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackInstanceResourceDrifts?StackSetName=string&StackInstanceAccount=string&StackInstanceRegion=string&OperationId=string&Action=ListStackInstanceResourceDrifts&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListStackInstanceResourceDrifts`

<p>Returns drift information for resources in a stack instance.</p> <note> <p> <code>ListStackInstanceResourceDrifts</code> returns drift information for the most recent drift detection operation. If an operation is in progress, it may only return partial results.</p> </note>

<h3 id="getliststackinstanceresourcedrifts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to list drifted resources for.|
|NextToken|query|string|false|If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|StackInstanceResourceDriftStatuses|query|[[StackResourceDriftStatus](#schemastackresourcedriftstatus)]|false|<p>The resource drift status of the stack instance. </p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resource's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p> </li> </ul>|
|StackInstanceAccount|query|string|true|The name of the Amazon Web Services account that you want to list resource drifts for.|
|StackInstanceRegion|query|string|true|The name of the Region where you want to list resource drifts.|
|OperationId|query|string|true|The unique ID of the drift operation.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|StackInstanceResourceDriftStatuses|IN_SYNC|
|StackInstanceResourceDriftStatuses|MODIFIED|
|StackInstanceResourceDriftStatuses|DELETED|
|StackInstanceResourceDriftStatuses|NOT_CHECKED|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|ListStackInstanceResourceDrifts|
|Version|2010-05-15|

<h3 id="getliststackinstanceresourcedrifts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackInstanceResourceDriftsOutput](#schemaliststackinstanceresourcedriftsoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|
|482|482|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListStackInstanceResourceDrifts

<a id="opIdPOST_ListStackInstanceResourceDrifts"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackInstanceResourceDrifts?Action=ListStackInstanceResourceDrifts&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"NextToken":{},"MaxResults":{},"StackInstanceResourceDriftStatuses":{},"StackInstanceAccount":{},"StackInstanceRegion":{},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=ListStackInstanceResourceDrifts`

<p>Returns drift information for resources in a stack instance.</p> <note> <p> <code>ListStackInstanceResourceDrifts</code> returns drift information for the most recent drift detection operation. If an operation is in progress, it may only return partial results.</p> </note>

> Body parameter

```json
{
  "StackSetName": {},
  "NextToken": {},
  "MaxResults": {},
  "StackInstanceResourceDriftStatuses": {},
  "StackInstanceAccount": {},
  "StackInstanceRegion": {},
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="postliststackinstanceresourcedrifts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStackInstanceResourceDriftsInput](#schemaliststackinstanceresourcedriftsinput)|false|none|
|» StackSetName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» StackInstanceResourceDriftStatuses|body|object|false|none|
|» StackInstanceAccount|body|object|true|none|
|» StackInstanceRegion|body|object|true|none|
|» OperationId|body|object|true|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStackInstanceResourceDrifts|
|Version|2010-05-15|

<h3 id="postliststackinstanceresourcedrifts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackInstanceResourceDriftsOutput](#schemaliststackinstanceresourcedriftsoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|
|482|482|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListStackInstances

<a id="opIdGET_ListStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackInstances?StackSetName=string&Action=ListStackInstances&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListStackInstances`

Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.

<h3 id="getliststackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to list stack instances for.|
|NextToken|query|string|false|If the previous request didn't return all the remaining results, the response's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|Filters|query|[[StackInstanceFilter](#schemastackinstancefilter)]|false|The filter to apply to stack instances|
|StackInstanceAccount|query|string|false|The name of the Amazon Web Services account that you want to list stack instances for.|
|StackInstanceRegion|query|string|false|The name of the Region where you want to list stack instances.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|ListStackInstances|
|Version|2010-05-15|

<h3 id="getliststackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackInstancesOutput](#schemaliststackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListStackInstances

<a id="opIdPOST_ListStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackInstances?Action=ListStackInstances&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"NextToken":{},"MaxResults":{},"Filters":{},"StackInstanceAccount":{},"StackInstanceRegion":{},"CallAs":{}}'
```

`POST /#Action=ListStackInstances`

Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.

> Body parameter

```json
{
  "StackSetName": {},
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "StackInstanceAccount": {},
  "StackInstanceRegion": {},
  "CallAs": {}
}
```

<h3 id="postliststackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStackInstancesInput](#schemaliststackinstancesinput)|false|none|
|» StackSetName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» StackInstanceAccount|body|object|false|none|
|» StackInstanceRegion|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStackInstances|
|Version|2010-05-15|

<h3 id="postliststackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackInstancesOutput](#schemaliststackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListStackResources

<a id="opIdGET_ListStackResources"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackResources?StackName=string&Action=ListStackResources&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListStackResources`

<p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>

<h3 id="getliststackresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|<p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>|
|NextToken|query|string|false|A string that identifies the next page of stack resources that you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStackResources|
|Version|2010-05-15|

<h3 id="getliststackresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackResourcesOutput](#schemaliststackresourcesoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListStackResources

<a id="opIdPOST_ListStackResources"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackResources?Action=ListStackResources&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"NextToken":{}}'
```

`POST /#Action=ListStackResources`

<p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>

> Body parameter

```json
{
  "StackName": {},
  "NextToken": {}
}
```

<h3 id="postliststackresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStackResourcesInput](#schemaliststackresourcesinput)|false|none|
|» StackName|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStackResources|
|Version|2010-05-15|

<h3 id="postliststackresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackResourcesOutput](#schemaliststackresourcesoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListStackSetOperationResults

<a id="opIdGET_ListStackSetOperationResults"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackSetOperationResults?StackSetName=string&OperationId=string&Action=ListStackSetOperationResults&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListStackSetOperationResults`

Returns summary information about the results of a stack set operation.

<h3 id="getliststacksetoperationresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to get operation results for.|
|OperationId|query|string|true|The ID of the stack set operation.|
|NextToken|query|string|false|If the previous request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Filters|query|[[OperationResultFilter](#schemaoperationresultfilter)]|false|The filter to apply to operation results.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|ListStackSetOperationResults|
|Version|2010-05-15|

<h3 id="getliststacksetoperationresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackSetOperationResultsOutput](#schemaliststacksetoperationresultsoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListStackSetOperationResults

<a id="opIdPOST_ListStackSetOperationResults"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackSetOperationResults?Action=ListStackSetOperationResults&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"OperationId":{},"NextToken":{},"MaxResults":{},"CallAs":{},"Filters":{}}'
```

`POST /#Action=ListStackSetOperationResults`

Returns summary information about the results of a stack set operation.

> Body parameter

```json
{
  "StackSetName": {},
  "OperationId": {},
  "NextToken": {},
  "MaxResults": {},
  "CallAs": {},
  "Filters": {}
}
```

<h3 id="postliststacksetoperationresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStackSetOperationResultsInput](#schemaliststacksetoperationresultsinput)|false|none|
|» StackSetName|body|object|true|none|
|» OperationId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» CallAs|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStackSetOperationResults|
|Version|2010-05-15|

<h3 id="postliststacksetoperationresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackSetOperationResultsOutput](#schemaliststacksetoperationresultsoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListStackSetOperations

<a id="opIdGET_ListStackSetOperations"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackSetOperations?StackSetName=string&Action=ListStackSetOperations&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListStackSetOperations`

Returns summary information about operations performed on a stack set.

<h3 id="getliststacksetoperations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to get operation summaries for.|
|NextToken|query|string|false|If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperations</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|ListStackSetOperations|
|Version|2010-05-15|

<h3 id="getliststacksetoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackSetOperationsOutput](#schemaliststacksetoperationsoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListStackSetOperations

<a id="opIdPOST_ListStackSetOperations"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackSetOperations?Action=ListStackSetOperations&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"NextToken":{},"MaxResults":{},"CallAs":{}}'
```

`POST /#Action=ListStackSetOperations`

Returns summary information about operations performed on a stack set.

> Body parameter

```json
{
  "StackSetName": {},
  "NextToken": {},
  "MaxResults": {},
  "CallAs": {}
}
```

<h3 id="postliststacksetoperations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStackSetOperationsInput](#schemaliststacksetoperationsinput)|false|none|
|» StackSetName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStackSetOperations|
|Version|2010-05-15|

<h3 id="postliststacksetoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackSetOperationsOutput](#schemaliststacksetoperationsoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListStackSets

<a id="opIdGET_ListStackSets"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackSets?Action=ListStackSets&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListStackSets`

<p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>

<h3 id="getliststacksets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|If the previous paginated request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSets</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|Status|query|string|false|The status of the stack sets that you want to get summary information about.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Status|ACTIVE|
|Status|DELETED|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|ListStackSets|
|Version|2010-05-15|

<h3 id="getliststacksets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackSetsOutput](#schemaliststacksetsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListStackSets

<a id="opIdPOST_ListStackSets"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStackSets?Action=ListStackSets&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxResults":{},"Status":{},"CallAs":{}}'
```

`POST /#Action=ListStackSets`

<p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Status": {},
  "CallAs": {}
}
```

<h3 id="postliststacksets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStackSetsInput](#schemaliststacksetsinput)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Status|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStackSets|
|Version|2010-05-15|

<h3 id="postliststacksets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackSetsOutput](#schemaliststacksetsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListStacks

<a id="opIdGET_ListStacks"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStacks?Action=ListStacks&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListStacks`

Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).

<h3 id="getliststacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A string that identifies the next page of stacks that you want to retrieve.|
|StackStatusFilter|query|[[StackStatus](#schemastackstatus)]|false|Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|StackStatusFilter|CREATE_IN_PROGRESS|
|StackStatusFilter|CREATE_FAILED|
|StackStatusFilter|CREATE_COMPLETE|
|StackStatusFilter|ROLLBACK_IN_PROGRESS|
|StackStatusFilter|ROLLBACK_FAILED|
|StackStatusFilter|ROLLBACK_COMPLETE|
|StackStatusFilter|DELETE_IN_PROGRESS|
|StackStatusFilter|DELETE_FAILED|
|StackStatusFilter|DELETE_COMPLETE|
|StackStatusFilter|UPDATE_IN_PROGRESS|
|StackStatusFilter|UPDATE_COMPLETE_CLEANUP_IN_PROGRESS|
|StackStatusFilter|UPDATE_COMPLETE|
|StackStatusFilter|UPDATE_FAILED|
|StackStatusFilter|UPDATE_ROLLBACK_IN_PROGRESS|
|StackStatusFilter|UPDATE_ROLLBACK_FAILED|
|StackStatusFilter|UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS|
|StackStatusFilter|UPDATE_ROLLBACK_COMPLETE|
|StackStatusFilter|REVIEW_IN_PROGRESS|
|StackStatusFilter|IMPORT_IN_PROGRESS|
|StackStatusFilter|IMPORT_COMPLETE|
|StackStatusFilter|IMPORT_ROLLBACK_IN_PROGRESS|
|StackStatusFilter|IMPORT_ROLLBACK_FAILED|
|StackStatusFilter|IMPORT_ROLLBACK_COMPLETE|
|Action|ListStacks|
|Version|2010-05-15|

<h3 id="getliststacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStacksOutput](#schemaliststacksoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListStacks

<a id="opIdPOST_ListStacks"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListStacks?Action=ListStacks&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"StackStatusFilter":{}}'
```

`POST /#Action=ListStacks`

Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).

> Body parameter

```json
{
  "NextToken": {},
  "StackStatusFilter": {}
}
```

<h3 id="postliststacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStacksInput](#schemaliststacksinput)|false|none|
|» NextToken|body|object|false|none|
|» StackStatusFilter|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListStacks|
|Version|2010-05-15|

<h3 id="postliststacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStacksOutput](#schemaliststacksoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTypeRegistrations

<a id="opIdGET_ListTypeRegistrations"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListTypeRegistrations?Action=ListTypeRegistrations&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTypeRegistrations`

Returns a list of registration tokens for the specified extension(s).

<h3 id="getlisttyperegistrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|TypeArn|query|string|false|<p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|RegistrationStatusFilter|query|string|false|<p>The current status of the extension registration request.</p> <p>The default is <code>IN_PROGRESS</code>.</p>|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|NextToken|query|string|false|If the previous paginated request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|RegistrationStatusFilter|COMPLETE|
|RegistrationStatusFilter|IN_PROGRESS|
|RegistrationStatusFilter|FAILED|
|Action|ListTypeRegistrations|
|Version|2010-05-15|

<h3 id="getlisttyperegistrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypeRegistrationsOutput](#schemalisttyperegistrationsoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTypeRegistrations

<a id="opIdPOST_ListTypeRegistrations"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListTypeRegistrations?Action=ListTypeRegistrations&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Type":{},"TypeName":{},"TypeArn":{},"RegistrationStatusFilter":{},"MaxResults":{},"NextToken":{}}'
```

`POST /#Action=ListTypeRegistrations`

Returns a list of registration tokens for the specified extension(s).

> Body parameter

```json
{
  "Type": {},
  "TypeName": {},
  "TypeArn": {},
  "RegistrationStatusFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="postlisttyperegistrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTypeRegistrationsInput](#schemalisttyperegistrationsinput)|false|none|
|» Type|body|object|false|none|
|» TypeName|body|object|false|none|
|» TypeArn|body|object|false|none|
|» RegistrationStatusFilter|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTypeRegistrations|
|Version|2010-05-15|

<h3 id="postlisttyperegistrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypeRegistrationsOutput](#schemalisttyperegistrationsoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTypeVersions

<a id="opIdGET_ListTypeVersions"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListTypeVersions?Action=ListTypeVersions&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTypeVersions`

Returns summary information about the versions of an extension.

<h3 id="getlisttypeversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>The kind of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|Arn|query|string|false|<p>The Amazon Resource Name (ARN) of the extension for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|NextToken|query|string|false|If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|DeprecatedStatus|query|string|false|<p>The deprecation status of the extension versions that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The extension version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.</p> </li> <li> <p> <code>DEPRECATED</code>: The extension version has been deregistered and can no longer be used in CloudFormation operations.</p> </li> </ul> <p>The default is <code>LIVE</code>.</p>|
|PublisherId|query|string|false|<p>The publisher ID of the extension publisher.</p> <p>Extensions published by Amazon aren't assigned a publisher ID.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|DeprecatedStatus|LIVE|
|DeprecatedStatus|DEPRECATED|
|Action|ListTypeVersions|
|Version|2010-05-15|

<h3 id="getlisttypeversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypeVersionsOutput](#schemalisttypeversionsoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTypeVersions

<a id="opIdPOST_ListTypeVersions"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListTypeVersions?Action=ListTypeVersions&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Type":{},"TypeName":{},"Arn":{},"MaxResults":{},"NextToken":{},"DeprecatedStatus":{},"PublisherId":{}}'
```

`POST /#Action=ListTypeVersions`

Returns summary information about the versions of an extension.

> Body parameter

```json
{
  "Type": {},
  "TypeName": {},
  "Arn": {},
  "MaxResults": {},
  "NextToken": {},
  "DeprecatedStatus": {},
  "PublisherId": {}
}
```

<h3 id="postlisttypeversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTypeVersionsInput](#schemalisttypeversionsinput)|false|none|
|» Type|body|object|false|none|
|» TypeName|body|object|false|none|
|» Arn|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» DeprecatedStatus|body|object|false|none|
|» PublisherId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTypeVersions|
|Version|2010-05-15|

<h3 id="postlisttypeversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypeVersionsOutput](#schemalisttypeversionsoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTypes

<a id="opIdGET_ListTypes"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListTypes?Action=ListTypes&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTypes`

Returns summary information about extension that have been registered with CloudFormation.

<h3 id="getlisttypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Visibility|query|string|false|<p>The scope at which the extensions are visible and usable in CloudFormation operations.</p> <p>Valid values include:</p> <ul> <li> <p> <code>PRIVATE</code>: Extensions that are visible and usable within this account and Region. This includes:</p> <ul> <li> <p>Private extensions you have registered in this account and Region.</p> </li> <li> <p>Public extensions that you have activated in this account and Region.</p> </li> </ul> </li> <li> <p> <code>PUBLIC</code>: Extensions that are publicly visible and available to be activated within any Amazon Web Services account. This includes extensions from Amazon Web Services, in addition to third-party publishers.</p> </li> </ul> <p>The default is <code>PRIVATE</code>.</p>|
|ProvisioningType|query|string|false|<p>For resource types, the provisioning behavior of the resource type. CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.</p> <p>Valid values include:</p> <ul> <li> <p> <code>FULLY_MUTABLE</code>: The resource type includes an update handler to process updates to the type during stack update operations.</p> </li> <li> <p> <code>IMMUTABLE</code>: The resource type doesn't include an update handler, so the type can't be updated and must instead be replaced during stack update operations.</p> </li> <li> <p> <code>NON_PROVISIONABLE</code>: The resource type doesn't include create, read, and delete handlers, and therefore can't actually be provisioned.</p> </li> </ul> <p>The default is <code>FULLY_MUTABLE</code>.</p>|
|DeprecatedStatus|query|string|false|<p>The deprecation status of the extension that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The extension is registered for use in CloudFormation operations.</p> </li> <li> <p> <code>DEPRECATED</code>: The extension has been deregistered and can no longer be used in CloudFormation operations.</p> </li> </ul>|
|Type|query|string|false|The type of extension.|
|Filters|query|object|false|<p>Filter criteria to use in determining which extensions to return.</p> <p>Filters must be compatible with <code>Visibility</code> to return valid results. For example, specifying <code>AWS_TYPES</code> for <code>Category</code> and <code>PRIVATE</code> for <code>Visibility</code> returns an empty list of types, but specifying <code>PUBLIC</code> for <code>Visibility</code> returns the desired list.</p>|
|MaxResults|query|integer|false|The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.|
|NextToken|query|string|false|If the previous paginated request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Visibility|PUBLIC|
|Visibility|PRIVATE|
|ProvisioningType|NON_PROVISIONABLE|
|ProvisioningType|IMMUTABLE|
|ProvisioningType|FULLY_MUTABLE|
|DeprecatedStatus|LIVE|
|DeprecatedStatus|DEPRECATED|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|ListTypes|
|Version|2010-05-15|

<h3 id="getlisttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypesOutput](#schemalisttypesoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTypes

<a id="opIdPOST_ListTypes"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ListTypes?Action=ListTypes&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Visibility":{},"ProvisioningType":{},"DeprecatedStatus":{},"Type":{},"Filters":{"Category":{},"PublisherId":{},"TypeNamePrefix":{}},"MaxResults":{},"NextToken":{}}'
```

`POST /#Action=ListTypes`

Returns summary information about extension that have been registered with CloudFormation.

> Body parameter

```json
{
  "Visibility": {},
  "ProvisioningType": {},
  "DeprecatedStatus": {},
  "Type": {},
  "Filters": {
    "Category": {},
    "PublisherId": {},
    "TypeNamePrefix": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="postlisttypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTypesInput](#schemalisttypesinput)|false|none|
|» Visibility|body|object|false|none|
|» ProvisioningType|body|object|false|none|
|» DeprecatedStatus|body|object|false|none|
|» Type|body|object|false|none|
|» Filters|body|object|false|none|
|» » Category|body|object|false|none|
|» » PublisherId|body|object|false|none|
|» » TypeNamePrefix|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTypes|
|Version|2010-05-15|

<h3 id="postlisttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypesOutput](#schemalisttypesoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PublishType

<a id="opIdGET_PublishType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=PublishType?Action=PublishType&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PublishType`

<p>Publishes the specified extension to the CloudFormation registry as a public extension in this Region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>

<h3 id="getpublishtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>The type of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|Arn|query|string|false|<p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|PublicVersionNumber|query|string|false|<p>The version number to assign to this version of the extension.</p> <p>Use the following format, and adhere to semantic versioning when assigning a version number to your extension:</p> <p> <code>MAJOR.MINOR.PATCH</code> </p> <p>For more information, see <a href="https://semver.org/">Semantic Versioning 2.0.0</a>.</p> <p>If you don't specify a version number, CloudFormation increments the version number by one minor version release.</p> <p>You cannot specify a version number the first time you publish a type. CloudFormation automatically sets the first version number to be <code>1.0.0</code>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|PublishType|
|Version|2010-05-15|

<h3 id="getpublishtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishTypeOutput](#schemapublishtypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PublishType

<a id="opIdPOST_PublishType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=PublishType?Action=PublishType&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Type":{},"Arn":{},"TypeName":{},"PublicVersionNumber":{}}'
```

`POST /#Action=PublishType`

<p>Publishes the specified extension to the CloudFormation registry as a public extension in this Region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>

> Body parameter

```json
{
  "Type": {},
  "Arn": {},
  "TypeName": {},
  "PublicVersionNumber": {}
}
```

<h3 id="postpublishtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PublishTypeInput](#schemapublishtypeinput)|false|none|
|» Type|body|object|false|none|
|» Arn|body|object|false|none|
|» TypeName|body|object|false|none|
|» PublicVersionNumber|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PublishType|
|Version|2010-05-15|

<h3 id="postpublishtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishTypeOutput](#schemapublishtypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RecordHandlerProgress

<a id="opIdGET_RecordHandlerProgress"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RecordHandlerProgress?BearerToken=string&OperationStatus=PENDING&Action=RecordHandlerProgress&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RecordHandlerProgress`

<p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>

<h3 id="getrecordhandlerprogress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BearerToken|query|string|true|Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.|
|OperationStatus|query|string|true|Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.|
|CurrentOperationStatus|query|string|false|Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.|
|StatusMessage|query|string|false|Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.|
|ErrorCode|query|string|false|Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.|
|ResourceModel|query|string|false|Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.|
|ClientRequestToken|query|string|false|Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|OperationStatus|PENDING|
|OperationStatus|IN_PROGRESS|
|OperationStatus|SUCCESS|
|OperationStatus|FAILED|
|CurrentOperationStatus|PENDING|
|CurrentOperationStatus|IN_PROGRESS|
|CurrentOperationStatus|SUCCESS|
|CurrentOperationStatus|FAILED|
|ErrorCode|NotUpdatable|
|ErrorCode|InvalidRequest|
|ErrorCode|AccessDenied|
|ErrorCode|InvalidCredentials|
|ErrorCode|AlreadyExists|
|ErrorCode|NotFound|
|ErrorCode|ResourceConflict|
|ErrorCode|Throttling|
|ErrorCode|ServiceLimitExceeded|
|ErrorCode|NotStabilized|
|ErrorCode|GeneralServiceException|
|ErrorCode|ServiceInternalError|
|ErrorCode|NetworkFailure|
|ErrorCode|InternalFailure|
|ErrorCode|InvalidTypeConfiguration|
|ErrorCode|HandlerInternalFailure|
|ErrorCode|NonCompliant|
|ErrorCode|Unknown|
|ErrorCode|UnsupportedTarget|
|Action|RecordHandlerProgress|
|Version|2010-05-15|

<h3 id="getrecordhandlerprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecordHandlerProgressOutput](#schemarecordhandlerprogressoutput)|
|480|480|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|481|481|OperationStatusCheckFailedException|[OperationStatusCheckFailedException](#schemaoperationstatuscheckfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RecordHandlerProgress

<a id="opIdPOST_RecordHandlerProgress"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RecordHandlerProgress?Action=RecordHandlerProgress&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"BearerToken":{},"OperationStatus":{},"CurrentOperationStatus":{},"StatusMessage":{},"ErrorCode":{},"ResourceModel":{},"ClientRequestToken":{}}'
```

`POST /#Action=RecordHandlerProgress`

<p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>

> Body parameter

```json
{
  "BearerToken": {},
  "OperationStatus": {},
  "CurrentOperationStatus": {},
  "StatusMessage": {},
  "ErrorCode": {},
  "ResourceModel": {},
  "ClientRequestToken": {}
}
```

<h3 id="postrecordhandlerprogress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RecordHandlerProgressInput](#schemarecordhandlerprogressinput)|false|none|
|» BearerToken|body|object|true|none|
|» OperationStatus|body|object|true|none|
|» CurrentOperationStatus|body|object|false|none|
|» StatusMessage|body|object|false|none|
|» ErrorCode|body|object|false|none|
|» ResourceModel|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RecordHandlerProgress|
|Version|2010-05-15|

<h3 id="postrecordhandlerprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecordHandlerProgressOutput](#schemarecordhandlerprogressoutput)|
|480|480|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|481|481|OperationStatusCheckFailedException|[OperationStatusCheckFailedException](#schemaoperationstatuscheckfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RegisterPublisher

<a id="opIdGET_RegisterPublisher"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RegisterPublisher?Action=RegisterPublisher&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RegisterPublisher`

<p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>

<h3 id="getregisterpublisher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AcceptTermsAndConditions|query|boolean|false|<p>Whether you accept the <a href="https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf">Terms and Conditions</a> for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry.</p> <p>The default is <code>false</code>.</p>|
|ConnectionArn|query|string|false|<p>If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RegisterPublisher|
|Version|2010-05-15|

<h3 id="getregisterpublisher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterPublisherOutput](#schemaregisterpublisheroutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RegisterPublisher

<a id="opIdPOST_RegisterPublisher"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RegisterPublisher?Action=RegisterPublisher&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AcceptTermsAndConditions":{},"ConnectionArn":{}}'
```

`POST /#Action=RegisterPublisher`

<p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>

> Body parameter

```json
{
  "AcceptTermsAndConditions": {},
  "ConnectionArn": {}
}
```

<h3 id="postregisterpublisher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterPublisherInput](#schemaregisterpublisherinput)|false|none|
|» AcceptTermsAndConditions|body|object|false|none|
|» ConnectionArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RegisterPublisher|
|Version|2010-05-15|

<h3 id="postregisterpublisher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterPublisherOutput](#schemaregisterpublisheroutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RegisterType

<a id="opIdGET_RegisterType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RegisterType?TypeName=stringstri&SchemaHandlerPackage=string&Action=RegisterType&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RegisterType`

<p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per Region. Use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <a>RegisterType</a>, you can use <a>DescribeTypeRegistration</a> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

<h3 id="getregistertype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|The kind of extension.|
|TypeName|query|string|true|<p>The name of the extension being registered.</p> <p>We suggest that extension names adhere to the following patterns:</p> <ul> <li> <p>For resource types, <i>company_or_organization</i>::<i>service</i>::<i>type</i>.</p> </li> <li> <p>For modules, <i>company_or_organization</i>::<i>service</i>::<i>type</i>::MODULE.</p> </li> <li> <p>For hooks, <i>MyCompany</i>::<i>Testing</i>::<i>MyTestHook</i>.</p> </li> </ul> <note> <p>The following organization namespaces are reserved and can't be used in your extension names:</p> <ul> <li> <p> <code>Alexa</code> </p> </li> <li> <p> <code>AMZN</code> </p> </li> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>AWS</code> </p> </li> <li> <p> <code>Custom</code> </p> </li> <li> <p> <code>Dev</code> </p> </li> </ul> </note>|
|SchemaHandlerPackage|query|string|true|<p>A URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register.</p> <p>For information about generating a schema handler package for the extension you want to register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a> in the <i>CloudFormation CLI User Guide</i>.</p> <note> <p>The user registering the extension must be able to access the package in the S3 bucket. That's, the user needs to have <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> permissions for the schema handler package. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html">Actions, Resources, and Condition Keys for Amazon S3</a> in the <i>Identity and Access Management User Guide</i>.</p> </note>|
|LoggingConfig|query|object|false|Specifies logging configuration information for an extension.|
|ExecutionRoleArn|query|string|false|<p>The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension.</p> <p>For CloudFormation to assume the specified execution role, the role must contain a trust relationship with the CloudFormation service principle (<code>resources.cloudformation.amazonaws.com</code>). For more information about adding trust relationships, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-console.html#roles-managingrole_edit-trust-policy">Modifying a role trust policy</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>If your extension calls Amazon Web Services APIs in any of its handlers, you must create an <i> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution role</a> </i> that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.</p>|
|ClientRequestToken|query|string|false|A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of an extension from the same registration request, even if the request is submitted multiple times.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|RegisterType|
|Version|2010-05-15|

<h3 id="getregistertype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTypeOutput](#schemaregistertypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RegisterType

<a id="opIdPOST_RegisterType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RegisterType?Action=RegisterType&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Type":{},"TypeName":{},"SchemaHandlerPackage":{},"LoggingConfig":{"LogRoleArn":{},"LogGroupName":{}},"ExecutionRoleArn":{},"ClientRequestToken":{}}'
```

`POST /#Action=RegisterType`

<p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per Region. Use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <a>RegisterType</a>, you can use <a>DescribeTypeRegistration</a> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

> Body parameter

```json
{
  "Type": {},
  "TypeName": {},
  "SchemaHandlerPackage": {},
  "LoggingConfig": {
    "LogRoleArn": {},
    "LogGroupName": {}
  },
  "ExecutionRoleArn": {},
  "ClientRequestToken": {}
}
```

<h3 id="postregistertype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterTypeInput](#schemaregistertypeinput)|false|none|
|» Type|body|object|false|none|
|» TypeName|body|object|true|none|
|» SchemaHandlerPackage|body|object|true|none|
|» LoggingConfig|body|object|false|none|
|» » LogRoleArn|body|object|true|none|
|» » LogGroupName|body|object|true|none|
|» ExecutionRoleArn|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RegisterType|
|Version|2010-05-15|

<h3 id="postregistertype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTypeOutput](#schemaregistertypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RollbackStack

<a id="opIdGET_RollbackStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RollbackStack?StackName=string&Action=RollbackStack&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RollbackStack`

<p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>

<h3 id="getrollbackstack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name that's associated with the stack.|
|RoleARN|query|string|false|The Amazon Resource Name (ARN) of an Identity and Access Management role that CloudFormation assumes to rollback the stack.|
|ClientRequestToken|query|string|false|A unique identifier for this <code>RollbackStack</code> request.|
|RetainExceptOnCreate|query|boolean|false|This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RollbackStack|
|Version|2010-05-15|

<h3 id="getrollbackstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RollbackStackOutput](#schemarollbackstackoutput)|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RollbackStack

<a id="opIdPOST_RollbackStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=RollbackStack?Action=RollbackStack&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"RoleARN":{},"ClientRequestToken":{},"RetainExceptOnCreate":{}}'
```

`POST /#Action=RollbackStack`

<p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>

> Body parameter

```json
{
  "StackName": {},
  "RoleARN": {},
  "ClientRequestToken": {},
  "RetainExceptOnCreate": {}
}
```

<h3 id="postrollbackstack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RollbackStackInput](#schemarollbackstackinput)|false|none|
|» StackName|body|object|true|none|
|» RoleARN|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» RetainExceptOnCreate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RollbackStack|
|Version|2010-05-15|

<h3 id="postrollbackstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RollbackStackOutput](#schemarollbackstackoutput)|
|480|480|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetStackPolicy

<a id="opIdGET_SetStackPolicy"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SetStackPolicy?StackName=string&Action=SetStackPolicy&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetStackPolicy`

Sets a stack policy for a specified stack.

<h3 id="getsetstackpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name or unique stack ID that you want to associate a policy with.|
|StackPolicyBody|query|string|false|Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent updates to stack resources</a> in the CloudFormation User Guide. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.|
|StackPolicyURL|query|string|false|Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an Amazon S3 bucket in the same Amazon Web Services Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetStackPolicy|
|Version|2010-05-15|

<h3 id="getsetstackpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetStackPolicy

<a id="opIdPOST_SetStackPolicy"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SetStackPolicy?Action=SetStackPolicy&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"StackPolicyBody":{},"StackPolicyURL":{}}'
```

`POST /#Action=SetStackPolicy`

Sets a stack policy for a specified stack.

> Body parameter

```json
{
  "StackName": {},
  "StackPolicyBody": {},
  "StackPolicyURL": {}
}
```

<h3 id="postsetstackpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetStackPolicyInput](#schemasetstackpolicyinput)|false|none|
|» StackName|body|object|true|none|
|» StackPolicyBody|body|object|false|none|
|» StackPolicyURL|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetStackPolicy|
|Version|2010-05-15|

<h3 id="postsetstackpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetTypeConfiguration

<a id="opIdGET_SetTypeConfiguration"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SetTypeConfiguration?Configuration=string&Action=SetTypeConfiguration&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetTypeConfiguration`

<p>Specifies the configuration data for a registered CloudFormation extension, in the given account and Region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>

<h3 id="getsettypeconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TypeArn|query|string|false|<p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p> <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and Region. For private extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and Region.</p> <p>Do not include the extension versions suffix at the end of the ARN. You can set the configuration for an extension, but not for a specific extension version.</p>|
|Configuration|query|string|true|<p>The configuration data for the extension, in this account and Region.</p> <p>The configuration data must be formatted as JSON, and validate against the schema returned in the <code>ConfigurationSchema</code> response element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model.html#resource-type-howto-configuration">Defining account-level configuration data for an extension</a> in the <i>CloudFormation CLI User Guide</i>.</p>|
|ConfigurationAlias|query|string|false|<p>An alias by which to refer to this extension configuration data.</p> <p>Conditional: Specifying a configuration alias is required when setting a configuration for a resource type extension.</p>|
|TypeName|query|string|false|<p>The name of the extension.</p> <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and <code>TypeName</code>.</p>|
|Type|query|string|false|<p>The type of extension.</p> <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and <code>TypeName</code>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|SetTypeConfiguration|
|Version|2010-05-15|

<h3 id="getsettypeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetTypeConfigurationOutput](#schemasettypeconfigurationoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetTypeConfiguration

<a id="opIdPOST_SetTypeConfiguration"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SetTypeConfiguration?Action=SetTypeConfiguration&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TypeArn":{},"Configuration":{},"ConfigurationAlias":{},"TypeName":{},"Type":{}}'
```

`POST /#Action=SetTypeConfiguration`

<p>Specifies the configuration data for a registered CloudFormation extension, in the given account and Region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>

> Body parameter

```json
{
  "TypeArn": {},
  "Configuration": {},
  "ConfigurationAlias": {},
  "TypeName": {},
  "Type": {}
}
```

<h3 id="postsettypeconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetTypeConfigurationInput](#schemasettypeconfigurationinput)|false|none|
|» TypeArn|body|object|false|none|
|» Configuration|body|object|true|none|
|» ConfigurationAlias|body|object|false|none|
|» TypeName|body|object|false|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetTypeConfiguration|
|Version|2010-05-15|

<h3 id="postsettypeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetTypeConfigurationOutput](#schemasettypeconfigurationoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetTypeDefaultVersion

<a id="opIdGET_SetTypeDefaultVersion"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SetTypeDefaultVersion?Action=SetTypeDefaultVersion&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetTypeDefaultVersion`

Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.

<h3 id="getsettypedefaultversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Arn|query|string|false|<p>The Amazon Resource Name (ARN) of the extension for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|Type|query|string|false|<p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>|
|VersionId|query|string|false|The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|SetTypeDefaultVersion|
|Version|2010-05-15|

<h3 id="getsettypedefaultversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetTypeDefaultVersionOutput](#schemasettypedefaultversionoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetTypeDefaultVersion

<a id="opIdPOST_SetTypeDefaultVersion"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SetTypeDefaultVersion?Action=SetTypeDefaultVersion&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Arn":{},"Type":{},"TypeName":{},"VersionId":{}}'
```

`POST /#Action=SetTypeDefaultVersion`

Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.

> Body parameter

```json
{
  "Arn": {},
  "Type": {},
  "TypeName": {},
  "VersionId": {}
}
```

<h3 id="postsettypedefaultversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetTypeDefaultVersionInput](#schemasettypedefaultversioninput)|false|none|
|» Arn|body|object|false|none|
|» Type|body|object|false|none|
|» TypeName|body|object|false|none|
|» VersionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetTypeDefaultVersion|
|Version|2010-05-15|

<h3 id="postsettypedefaultversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetTypeDefaultVersionOutput](#schemasettypedefaultversionoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SignalResource

<a id="opIdGET_SignalResource"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SignalResource?StackName=string&LogicalResourceId=string&UniqueId=string&Status=SUCCESS&Action=SignalResource&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SignalResource`

Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.

<h3 id="getsignalresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The stack name or unique stack ID that includes the resource that you want to signal.|
|LogicalResourceId|query|string|true|The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.|
|UniqueId|query|string|true|A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.|
|Status|query|string|true|The status of the signal, which is either success or failure. A failure signal causes CloudFormation to immediately fail the stack creation or update.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Status|SUCCESS|
|Status|FAILURE|
|Action|SignalResource|
|Version|2010-05-15|

<h3 id="getsignalresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SignalResource

<a id="opIdPOST_SignalResource"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=SignalResource?Action=SignalResource&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"LogicalResourceId":{},"UniqueId":{},"Status":{}}'
```

`POST /#Action=SignalResource`

Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.

> Body parameter

```json
{
  "StackName": {},
  "LogicalResourceId": {},
  "UniqueId": {},
  "Status": {}
}
```

<h3 id="postsignalresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SignalResourceInput](#schemasignalresourceinput)|false|none|
|» StackName|body|object|true|none|
|» LogicalResourceId|body|object|true|none|
|» UniqueId|body|object|true|none|
|» Status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SignalResource|
|Version|2010-05-15|

<h3 id="postsignalresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StopStackSetOperation

<a id="opIdGET_StopStackSetOperation"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=StopStackSetOperation?StackSetName=string&OperationId=string&Action=StopStackSetOperation&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StopStackSetOperation`

Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.

<h3 id="getstopstacksetoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to stop the operation for.|
|OperationId|query|string|true|The ID of the stack operation.|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|StopStackSetOperation|
|Version|2010-05-15|

<h3 id="getstopstacksetoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopStackSetOperationOutput](#schemastopstacksetoperationoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|
|482|482|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StopStackSetOperation

<a id="opIdPOST_StopStackSetOperation"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=StopStackSetOperation?Action=StopStackSetOperation&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=StopStackSetOperation`

Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.

> Body parameter

```json
{
  "StackSetName": {},
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="poststopstacksetoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopStackSetOperationInput](#schemastopstacksetoperationinput)|false|none|
|» StackSetName|body|object|true|none|
|» OperationId|body|object|true|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StopStackSetOperation|
|Version|2010-05-15|

<h3 id="poststopstacksetoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopStackSetOperationOutput](#schemastopstacksetoperationoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationNotFoundException|[OperationNotFoundException](#schemaoperationnotfoundexception)|
|482|482|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TestType

<a id="opIdGET_TestType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=TestType?Action=TestType&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=TestType`

<p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>

<h3 id="gettesttype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Arn|query|string|false|<p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|Type|query|string|false|<p>The type of the extension to test.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|TypeName|query|string|false|<p>The name of the extension to test.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>|
|VersionId|query|string|false|<p>The version of the extension to test.</p> <p>You can specify the version id with either <code>Arn</code>, or with <code>TypeName</code> and <code>Type</code>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in this account and Region for testing.</p>|
|LogDeliveryBucket|query|string|false|<p>The S3 bucket to which CloudFormation delivers the contract test execution logs.</p> <p>CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a test type status of <code>PASSED</code> or <code>FAILED</code>.</p> <p>The user calling <code>TestType</code> must be able to access items in the specified S3 bucket. Specifically, the user needs the following permissions:</p> <ul> <li> <p> <code>GetObject</code> </p> </li> <li> <p> <code>PutObject</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html">Actions, Resources, and Condition Keys for Amazon S3</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|RESOURCE|
|Type|MODULE|
|Type|HOOK|
|Action|TestType|
|Version|2010-05-15|

<h3 id="gettesttype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestTypeOutput](#schematesttypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TestType

<a id="opIdPOST_TestType"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=TestType?Action=TestType&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Arn":{},"Type":{},"TypeName":{},"VersionId":{},"LogDeliveryBucket":{}}'
```

`POST /#Action=TestType`

<p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>

> Body parameter

```json
{
  "Arn": {},
  "Type": {},
  "TypeName": {},
  "VersionId": {},
  "LogDeliveryBucket": {}
}
```

<h3 id="posttesttype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TestTypeInput](#schematesttypeinput)|false|none|
|» Arn|body|object|false|none|
|» Type|body|object|false|none|
|» TypeName|body|object|false|none|
|» VersionId|body|object|false|none|
|» LogDeliveryBucket|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TestType|
|Version|2010-05-15|

<h3 id="posttesttype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestTypeOutput](#schematesttypeoutput)|
|480|480|CFNRegistryException|[CFNRegistryException](#schemacfnregistryexception)|
|481|481|TypeNotFoundException|[TypeNotFoundException](#schematypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateStack

<a id="opIdGET_UpdateStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateStack?StackName=string&Action=UpdateStack&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateStack`

<p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>

<h3 id="getupdatestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackName|query|string|true|The name or unique stack ID of the stack to update.|
|TemplateBody|query|string|false|<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.)</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>|
|TemplateURL|query|string|false|<p>Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>|
|UsePreviousTemplate|query|boolean|false|<p>Reuse the existing template that is associated with the stack that you are updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>|
|StackPolicyDuringUpdateBody|query|string|false|<p>Structure containing the temporary overriding stack policy body. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>|
|StackPolicyDuringUpdateURL|query|string|false|<p>Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>|
|Parameters|query|[[Parameter](#schemaparameter)]|false|A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.|
|Capabilities|query|[[Capability](#schemacapability)]|false|<p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p> <p>If you want to update a stack from a stack template that contains macros <i>and</i> nested stacks, you must update the stack directly from the template using this capability.</p> <important> <p>You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>|
|ResourceTypes|query|[[ResourceType](#schemaresourcetype)]|false|<p>The template resource types that you have permissions to work with for this update stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM) uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>|
|RoleARN|query|string|false|<p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to update the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.</p>|
|RollbackConfiguration|query|object|false|The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.|
|StackPolicyBody|query|string|false|<p>Structure containing a new stack policy body. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.</p>|
|StackPolicyURL|query|string|false|<p>Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.</p>|
|NotificationARNs|query|[[NotificationARN](#schemanotificationarn)]|false|Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation associates with the stack. Specify an empty list to remove all notification topics.|
|Tags|query|[[Tag](#schematag)]|false|<p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.</p> <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value, CloudFormation removes all associated tags.</p>|
|DisableRollback|query|boolean|false|<p>Preserve the state of previously provisioned resources when an operation fails.</p> <p>Default: <code>False</code> </p>|
|ClientRequestToken|query|string|false|<p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to update a stack with the same name. You might retry <code>UpdateStack</code> requests to ensure that CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>|
|RetainExceptOnCreate|query|boolean|false|This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Capabilities|CAPABILITY_IAM|
|Capabilities|CAPABILITY_NAMED_IAM|
|Capabilities|CAPABILITY_AUTO_EXPAND|
|Action|UpdateStack|
|Version|2010-05-15|

<h3 id="getupdatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStackOutput](#schemaupdatestackoutput)|
|480|480|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|
|481|481|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateStack

<a id="opIdPOST_UpdateStack"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateStack?Action=UpdateStack&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackName":{},"TemplateBody":{},"TemplateURL":{},"UsePreviousTemplate":{},"StackPolicyDuringUpdateBody":{},"StackPolicyDuringUpdateURL":{},"Parameters":{},"Capabilities":{},"ResourceTypes":{},"RoleARN":{},"RollbackConfiguration":{"RollbackTriggers":{},"MonitoringTimeInMinutes":{}},"StackPolicyBody":{},"StackPolicyURL":{},"NotificationARNs":{},"Tags":{},"DisableRollback":{},"ClientRequestToken":{},"RetainExceptOnCreate":{}}'
```

`POST /#Action=UpdateStack`

<p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>

> Body parameter

```json
{
  "StackName": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "UsePreviousTemplate": {},
  "StackPolicyDuringUpdateBody": {},
  "StackPolicyDuringUpdateURL": {},
  "Parameters": {},
  "Capabilities": {},
  "ResourceTypes": {},
  "RoleARN": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "StackPolicyBody": {},
  "StackPolicyURL": {},
  "NotificationARNs": {},
  "Tags": {},
  "DisableRollback": {},
  "ClientRequestToken": {},
  "RetainExceptOnCreate": {}
}
```

<h3 id="postupdatestack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateStackInput](#schemaupdatestackinput)|false|none|
|» StackName|body|object|true|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|
|» UsePreviousTemplate|body|object|false|none|
|» StackPolicyDuringUpdateBody|body|object|false|none|
|» StackPolicyDuringUpdateURL|body|object|false|none|
|» Parameters|body|object|false|none|
|» Capabilities|body|object|false|none|
|» ResourceTypes|body|object|false|none|
|» RoleARN|body|object|false|none|
|» RollbackConfiguration|body|object|false|none|
|» » RollbackTriggers|body|object|false|none|
|» » MonitoringTimeInMinutes|body|object|false|none|
|» StackPolicyBody|body|object|false|none|
|» StackPolicyURL|body|object|false|none|
|» NotificationARNs|body|object|false|none|
|» Tags|body|object|false|none|
|» DisableRollback|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» RetainExceptOnCreate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateStack|
|Version|2010-05-15|

<h3 id="postupdatestack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStackOutput](#schemaupdatestackoutput)|
|480|480|InsufficientCapabilitiesException|[InsufficientCapabilitiesException](#schemainsufficientcapabilitiesexception)|
|481|481|TokenAlreadyExistsException|[TokenAlreadyExistsException](#schematokenalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateStackInstances

<a id="opIdGET_UpdateStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateStackInstances?StackSetName=string&Regions=string&Action=UpdateStackInstances&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateStackInstances`

<p>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.</p> <p>You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p> <p>During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>

<h3 id="getupdatestackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set associated with the stack instances.|
|Accounts|query|[[Account](#schemaaccount)]|false|<p>[Self-managed permissions] The names of one or more Amazon Web Services accounts for which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>|
|DeploymentTargets|query|object|false|<p>[Service-managed permissions] The Organizations accounts for which you want to update parameter values for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future won't use the overridden values.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>|
|Regions|query|[[Region](#schemaregion)]|true|The names of one or more Amazon Web Services Regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions.|
|ParameterOverrides|query|[[Parameter](#schemaparameter)]|false|<p>A list of input parameters whose values you want to update for the specified stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance update operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave an overridden parameter set to its present value, include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> <li> <p>To set an overridden parameter back to the value specified in the stack set, specify a parameter list but don't include the parameter in the list.</p> </li> <li> <p>To leave all parameters set to their present values, don't specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <code>UpdateStackSet</code> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>|
|OperationPreferences|query|object|false|Preferences for how CloudFormation performs this stack set operation.|
|OperationId|query|string|false|<p>The unique identifier for this stack set operation.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p>|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|UpdateStackInstances|
|Version|2010-05-15|

<h3 id="getupdatestackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStackInstancesOutput](#schemaupdatestackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|
|482|482|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|483|483|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|484|484|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateStackInstances

<a id="opIdPOST_UpdateStackInstances"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateStackInstances?Action=UpdateStackInstances&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"Accounts":{},"DeploymentTargets":{"Accounts":{},"AccountsUrl":{},"OrganizationalUnitIds":{},"AccountFilterType":{}},"Regions":{},"ParameterOverrides":{},"OperationPreferences":{"RegionConcurrencyType":{},"RegionOrder":{},"FailureToleranceCount":{},"FailureTolerancePercentage":{},"MaxConcurrentCount":{},"MaxConcurrentPercentage":{}},"OperationId":{},"CallAs":{}}'
```

`POST /#Action=UpdateStackInstances`

<p>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.</p> <p>You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p> <p>During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>

> Body parameter

```json
{
  "StackSetName": {},
  "Accounts": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "Regions": {},
  "ParameterOverrides": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

<h3 id="postupdatestackinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateStackInstancesInput](#schemaupdatestackinstancesinput)|false|none|
|» StackSetName|body|object|true|none|
|» Accounts|body|object|false|none|
|» DeploymentTargets|body|object|false|none|
|» » Accounts|body|object|false|none|
|» » AccountsUrl|body|object|false|none|
|» » OrganizationalUnitIds|body|object|false|none|
|» » AccountFilterType|body|object|false|none|
|» Regions|body|object|true|none|
|» ParameterOverrides|body|object|false|none|
|» OperationPreferences|body|object|false|none|
|» » RegionConcurrencyType|body|object|false|none|
|» » RegionOrder|body|object|false|none|
|» » FailureToleranceCount|body|object|false|none|
|» » FailureTolerancePercentage|body|object|false|none|
|» » MaxConcurrentCount|body|object|false|none|
|» » MaxConcurrentPercentage|body|object|false|none|
|» OperationId|body|object|false|none|
|» CallAs|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateStackInstances|
|Version|2010-05-15|

<h3 id="postupdatestackinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStackInstancesOutput](#schemaupdatestackinstancesoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|
|482|482|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|483|483|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|484|484|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateStackSet

<a id="opIdGET_UpdateStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateStackSet?StackSetName=string&Action=UpdateStackSet&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateStackSet`

<p>Updates the stack set, and associated stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>

<h3 id="getupdatestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StackSetName|query|string|true|The name or unique ID of the stack set that you want to update.|
|Description|query|string|false|A brief description of updates that you are making.|
|TemplateBody|query|string|false|<p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>|
|TemplateURL|query|string|false|<p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>|
|UsePreviousTemplate|query|boolean|false|<p>Use the existing template that's associated with the stack set that you're updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>|
|Parameters|query|[[Parameter](#schemaparameter)]|false|A list of input parameters for the stack set template.|
|Capabilities|query|[[Capability](#schemacapability)]|false|<p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack set and its associated stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates reference macros. If your stack set template references one or more macros, you must update the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To update the stack set directly, you must acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/template-macros.html">Using CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <important> <p>Stack sets with service-managed permissions do not currently support the use of macros in templates. (This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail.</p> </important> </li> </ul>|
|Tags|query|[[Tag](#schematag)]|false|<p>The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags.</p> <p>If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this stack set. This means:</p> <ul> <li> <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags.</p> </li> <li> <p>If you specify <i>any</i> tags using this parameter, you must specify <i>all</i> the tags that you want associated with this stack set, even tags you've specified before (for example, when creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the updated list of tags are removed from the stack set, and therefore from the stacks and resources as well.</p> </li> <li> <p>If you specify an empty value, CloudFormation removes all currently associated tags.</p> </li> </ul> <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from the list of tags you specify, CloudFormation assumes that you want to remove those tags from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not updated.</p>|
|OperationPreferences|query|object|false|Preferences for how CloudFormation performs this stack set operation.|
|AdministrationRoleARN|query|string|false|<p>The Amazon Resource Name (ARN) of the IAM role to use to update this stack set.</p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Granting Permissions for Stack Set Operations</a> in the <i>CloudFormation User Guide</i>.</p> <p>If you specified a customized administrator role when you created the stack set, you must specify a customized administrator role, even if it is the same customized administrator role used with this stack set previously.</p>|
|ExecutionRoleName|query|string|false|<p>The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets.</p> <p>If you specify a customized execution role, CloudFormation uses that role to update the stack. If you do not specify a customized execution role, CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set.</p>|
|DeploymentTargets|query|object|false|<p>[Service-managed permissions] The Organizations accounts in which to update associated stack instances.</p> <p>To update all the stack instances associated with this stack set, do not specify <code>DeploymentTargets</code> or <code>Regions</code>.</p> <p>If the stack set update includes changes to the template (that is, if <code>TemplateBody</code> or <code>TemplateURL</code> is specified), or the <code>Parameters</code>, CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update doesn't include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</p>|
|PermissionModel|query|string|false|<p>Describes how the IAM roles required for stack set operations are created. You cannot modify <code>PermissionModel</code> if there are stack instances associated with your stack set.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>|
|AutoDeployment|query|object|false|<p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU).</p> <p>If you specify <code>AutoDeployment</code>, don't specify <code>DeploymentTargets</code> or <code>Regions</code>.</p>|
|OperationId|query|string|false|<p>The unique ID for this stack set operation.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, CloudFormation generates one automatically.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>.</p>|
|Accounts|query|[[Account](#schemaaccount)]|false|<p>[Self-managed permissions] The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Amazon Web Services Regions in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, don't specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Amazon Web Services Regions, while leaving all other stack instances with their existing stack instance status.</p>|
|Regions|query|[[Region](#schemaregion)]|false|<p>The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</p>|
|CallAs|query|string|false|<p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>|
|ManagedExecution|query|object|false|Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Capabilities|CAPABILITY_IAM|
|Capabilities|CAPABILITY_NAMED_IAM|
|Capabilities|CAPABILITY_AUTO_EXPAND|
|PermissionModel|SERVICE_MANAGED|
|PermissionModel|SELF_MANAGED|
|CallAs|SELF|
|CallAs|DELEGATED_ADMIN|
|Action|UpdateStackSet|
|Version|2010-05-15|

<h3 id="getupdatestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStackSetOutput](#schemaupdatestacksetoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|483|483|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|485|485|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateStackSet

<a id="opIdPOST_UpdateStackSet"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateStackSet?Action=UpdateStackSet&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StackSetName":{},"Description":{},"TemplateBody":{},"TemplateURL":{},"UsePreviousTemplate":{},"Parameters":{},"Capabilities":{},"Tags":{},"OperationPreferences":{"RegionConcurrencyType":{},"RegionOrder":{},"FailureToleranceCount":{},"FailureTolerancePercentage":{},"MaxConcurrentCount":{},"MaxConcurrentPercentage":{}},"AdministrationRoleARN":{},"ExecutionRoleName":{},"DeploymentTargets":{"Accounts":{},"AccountsUrl":{},"OrganizationalUnitIds":{},"AccountFilterType":{}},"PermissionModel":{},"AutoDeployment":{"Enabled":{},"RetainStacksOnAccountRemoval":{}},"OperationId":{},"Accounts":{},"Regions":{},"CallAs":{},"ManagedExecution":{"Active":{}}}'
```

`POST /#Action=UpdateStackSet`

<p>Updates the stack set, and associated stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>

> Body parameter

```json
{
  "StackSetName": {},
  "Description": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "UsePreviousTemplate": {},
  "Parameters": {},
  "Capabilities": {},
  "Tags": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "AdministrationRoleARN": {},
  "ExecutionRoleName": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "PermissionModel": {},
  "AutoDeployment": {
    "Enabled": {},
    "RetainStacksOnAccountRemoval": {}
  },
  "OperationId": {},
  "Accounts": {},
  "Regions": {},
  "CallAs": {},
  "ManagedExecution": {
    "Active": {}
  }
}
```

<h3 id="postupdatestackset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateStackSetInput](#schemaupdatestacksetinput)|false|none|
|» StackSetName|body|object|true|none|
|» Description|body|object|false|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|
|» UsePreviousTemplate|body|object|false|none|
|» Parameters|body|object|false|none|
|» Capabilities|body|object|false|none|
|» Tags|body|object|false|none|
|» OperationPreferences|body|object|false|none|
|» » RegionConcurrencyType|body|object|false|none|
|» » RegionOrder|body|object|false|none|
|» » FailureToleranceCount|body|object|false|none|
|» » FailureTolerancePercentage|body|object|false|none|
|» » MaxConcurrentCount|body|object|false|none|
|» » MaxConcurrentPercentage|body|object|false|none|
|» AdministrationRoleARN|body|object|false|none|
|» ExecutionRoleName|body|object|false|none|
|» DeploymentTargets|body|object|false|none|
|» » Accounts|body|object|false|none|
|» » AccountsUrl|body|object|false|none|
|» » OrganizationalUnitIds|body|object|false|none|
|» » AccountFilterType|body|object|false|none|
|» PermissionModel|body|object|false|none|
|» AutoDeployment|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » RetainStacksOnAccountRemoval|body|object|false|none|
|» OperationId|body|object|false|none|
|» Accounts|body|object|false|none|
|» Regions|body|object|false|none|
|» CallAs|body|object|false|none|
|» ManagedExecution|body|object|false|none|
|» » Active|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateStackSet|
|Version|2010-05-15|

<h3 id="postupdatestackset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStackSetOutput](#schemaupdatestacksetoutput)|
|480|480|StackSetNotFoundException|[StackSetNotFoundException](#schemastacksetnotfoundexception)|
|481|481|OperationInProgressException|[OperationInProgressException](#schemaoperationinprogressexception)|
|482|482|OperationIdAlreadyExistsException|[OperationIdAlreadyExistsException](#schemaoperationidalreadyexistsexception)|
|483|483|StaleRequestException|[StaleRequestException](#schemastalerequestexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|485|485|StackInstanceNotFoundException|[StackInstanceNotFoundException](#schemastackinstancenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateTerminationProtection

<a id="opIdGET_UpdateTerminationProtection"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateTerminationProtection?EnableTerminationProtection=true&StackName=string&Action=UpdateTerminationProtection&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateTerminationProtection`

<p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>

<h3 id="getupdateterminationprotection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnableTerminationProtection|query|boolean|true|Whether to enable termination protection on the specified stack.|
|StackName|query|string|true|The name or unique ID of the stack for which you want to set termination protection.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateTerminationProtection|
|Version|2010-05-15|

<h3 id="getupdateterminationprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTerminationProtectionOutput](#schemaupdateterminationprotectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateTerminationProtection

<a id="opIdPOST_UpdateTerminationProtection"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=UpdateTerminationProtection?Action=UpdateTerminationProtection&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EnableTerminationProtection":{},"StackName":{}}'
```

`POST /#Action=UpdateTerminationProtection`

<p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>

> Body parameter

```json
{
  "EnableTerminationProtection": {},
  "StackName": {}
}
```

<h3 id="postupdateterminationprotection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateTerminationProtectionInput](#schemaupdateterminationprotectioninput)|false|none|
|» EnableTerminationProtection|body|object|true|none|
|» StackName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateTerminationProtection|
|Version|2010-05-15|

<h3 id="postupdateterminationprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTerminationProtectionOutput](#schemaupdateterminationprotectionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ValidateTemplate

<a id="opIdGET_ValidateTemplate"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ValidateTemplate?Action=ValidateTemplate&Version=2010-05-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ValidateTemplate`

Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.

<h3 id="getvalidatetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateBody|query|string|false|<p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>|
|TemplateURL|query|string|false|<p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ValidateTemplate|
|Version|2010-05-15|

<h3 id="getvalidatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ValidateTemplateOutput](#schemavalidatetemplateoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ValidateTemplate

<a id="opIdPOST_ValidateTemplate"></a>

> Code samples

```bash
curl 'https://cloudformation.us-east-1.amazonaws.com/#Action=ValidateTemplate?Action=ValidateTemplate&Version=2010-05-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateBody":{},"TemplateURL":{}}'
```

`POST /#Action=ValidateTemplate`

Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.

> Body parameter

```json
{
  "TemplateBody": {},
  "TemplateURL": {}
}
```

<h3 id="postvalidatetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ValidateTemplateInput](#schemavalidatetemplateinput)|false|none|
|» TemplateBody|body|object|false|none|
|» TemplateURL|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ValidateTemplate|
|Version|2010-05-15|

<h3 id="postvalidatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ValidateTemplateOutput](#schemavalidatetemplateoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ActivateOrganizationsAccessOutput">ActivateOrganizationsAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemaactivateorganizationsaccessoutput"></a>
<a id="schema_ActivateOrganizationsAccessOutput"></a>
<a id="tocSactivateorganizationsaccessoutput"></a>
<a id="tocsactivateorganizationsaccessoutput"></a>

```json
{}
```

<h2 id="tocS_InvalidOperationException">InvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationexception"></a>
<a id="schema_InvalidOperationException"></a>
<a id="tocSinvalidoperationexception"></a>
<a id="tocsinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_OperationNotFoundException">OperationNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotfoundexception"></a>
<a id="schema_OperationNotFoundException"></a>
<a id="tocSoperationnotfoundexception"></a>
<a id="tocsoperationnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ActivateTypeOutput">ActivateTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaactivatetypeoutput"></a>
<a id="schema_ActivateTypeOutput"></a>
<a id="tocSactivatetypeoutput"></a>
<a id="tocsactivatetypeoutput"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
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

<h2 id="tocS_CFNRegistryException">CFNRegistryException</h2>
<!-- backwards compatibility -->
<a id="schemacfnregistryexception"></a>
<a id="schema_CFNRegistryException"></a>
<a id="tocScfnregistryexception"></a>
<a id="tocscfnregistryexception"></a>

```json
null
```

<h2 id="tocS_TypeNotFoundException">TypeNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematypenotfoundexception"></a>
<a id="schema_TypeNotFoundException"></a>
<a id="tocStypenotfoundexception"></a>
<a id="tocstypenotfoundexception"></a>

```json
null
```

<h2 id="tocS_BatchDescribeTypeConfigurationsOutput">BatchDescribeTypeConfigurationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribetypeconfigurationsoutput"></a>
<a id="schema_BatchDescribeTypeConfigurationsOutput"></a>
<a id="tocSbatchdescribetypeconfigurationsoutput"></a>
<a id="tocsbatchdescribetypeconfigurationsoutput"></a>

```json
{
  "Errors": {},
  "UnprocessedTypeConfigurations": {},
  "TypeConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|false|none|none|
|UnprocessedTypeConfigurations|object|false|none|none|
|TypeConfigurations|object|false|none|none|

<h2 id="tocS_TypeConfigurationIdentifier">TypeConfigurationIdentifier</h2>
<!-- backwards compatibility -->
<a id="schematypeconfigurationidentifier"></a>
<a id="schema_TypeConfigurationIdentifier"></a>
<a id="tocStypeconfigurationidentifier"></a>
<a id="tocstypeconfigurationidentifier"></a>

```json
{
  "TypeArn": {},
  "TypeConfigurationAlias": {},
  "TypeConfigurationArn": {},
  "Type": {},
  "TypeName": {}
}
```

Identifying information for the configuration of a CloudFormation extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeArn|object|false|none|none|
|TypeConfigurationAlias|object|false|none|none|
|TypeConfigurationArn|object|false|none|none|
|Type|object|false|none|none|
|TypeName|object|false|none|none|

<h2 id="tocS_TypeConfigurationNotFoundException">TypeConfigurationNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematypeconfigurationnotfoundexception"></a>
<a id="schema_TypeConfigurationNotFoundException"></a>
<a id="tocStypeconfigurationnotfoundexception"></a>
<a id="tocstypeconfigurationnotfoundexception"></a>

```json
null
```

<h2 id="tocS_TokenAlreadyExistsException">TokenAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schematokenalreadyexistsexception"></a>
<a id="schema_TokenAlreadyExistsException"></a>
<a id="tocStokenalreadyexistsexception"></a>
<a id="tocstokenalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ContinueUpdateRollbackOutput">ContinueUpdateRollbackOutput</h2>
<!-- backwards compatibility -->
<a id="schemacontinueupdaterollbackoutput"></a>
<a id="schema_ContinueUpdateRollbackOutput"></a>
<a id="tocScontinueupdaterollbackoutput"></a>
<a id="tocscontinueupdaterollbackoutput"></a>

```json
{}
```

The output for a <a>ContinueUpdateRollback</a> operation.

<h2 id="tocS_ResourceToSkip">ResourceToSkip</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetoskip"></a>
<a id="schema_ResourceToSkip"></a>
<a id="tocSresourcetoskip"></a>
<a id="tocsresourcetoskip"></a>

```json
"string"
```

<h2 id="tocS_CreateChangeSetOutput">CreateChangeSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatechangesetoutput"></a>
<a id="schema_CreateChangeSetOutput"></a>
<a id="tocScreatechangesetoutput"></a>
<a id="tocscreatechangesetoutput"></a>

```json
{
  "Id": {},
  "StackId": {}
}
```

The output for the <a>CreateChangeSet</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|StackId|object|false|none|none|

<h2 id="tocS_Parameter">Parameter</h2>
<!-- backwards compatibility -->
<a id="schemaparameter"></a>
<a id="schema_Parameter"></a>
<a id="tocSparameter"></a>
<a id="tocsparameter"></a>

```json
{
  "ParameterKey": {},
  "ParameterValue": {},
  "UsePreviousValue": {},
  "ResolvedValue": {}
}
```

The Parameter data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterKey|object|false|none|none|
|ParameterValue|object|false|none|none|
|UsePreviousValue|object|false|none|none|
|ResolvedValue|object|false|none|none|

<h2 id="tocS_Capability">Capability</h2>
<!-- backwards compatibility -->
<a id="schemacapability"></a>
<a id="schema_Capability"></a>
<a id="tocScapability"></a>
<a id="tocscapability"></a>

```json
"CAPABILITY_IAM"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"string"
```

<h2 id="tocS_RollbackTriggers">RollbackTriggers</h2>
<!-- backwards compatibility -->
<a id="schemarollbacktriggers"></a>
<a id="schema_RollbackTriggers"></a>
<a id="tocSrollbacktriggers"></a>
<a id="tocsrollbacktriggers"></a>

```json
[
  {
    "Arn": {},
    "Type": {}
  }
]
```

<h2 id="tocS_MonitoringTimeInMinutes">MonitoringTimeInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringtimeinminutes"></a>
<a id="schema_MonitoringTimeInMinutes"></a>
<a id="tocSmonitoringtimeinminutes"></a>
<a id="tocsmonitoringtimeinminutes"></a>

```json
0
```

<h2 id="tocS_NotificationARN">NotificationARN</h2>
<!-- backwards compatibility -->
<a id="schemanotificationarn"></a>
<a id="schema_NotificationARN"></a>
<a id="tocSnotificationarn"></a>
<a id="tocsnotificationarn"></a>

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

The Tag type enables you to specify a key-value pair that can be used to store information about an CloudFormation stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ResourceToImport">ResourceToImport</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetoimport"></a>
<a id="schema_ResourceToImport"></a>
<a id="tocSresourcetoimport"></a>
<a id="tocsresourcetoimport"></a>

```json
{
  "ResourceType": {},
  "LogicalResourceId": {},
  "ResourceIdentifier": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes the target resource of an import operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|LogicalResourceId|object|true|none|none|
|ResourceIdentifier|object|true|none|none|

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InsufficientCapabilitiesException">InsufficientCapabilitiesException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientcapabilitiesexception"></a>
<a id="schema_InsufficientCapabilitiesException"></a>
<a id="tocSinsufficientcapabilitiesexception"></a>
<a id="tocsinsufficientcapabilitiesexception"></a>

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

<h2 id="tocS_CreateStackOutput">CreateStackOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackoutput"></a>
<a id="schema_CreateStackOutput"></a>
<a id="tocScreatestackoutput"></a>
<a id="tocscreatestackoutput"></a>

```json
{
  "StackId": {}
}
```

The output for a <a>CreateStack</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|

<h2 id="tocS_CreateStackInstancesOutput">CreateStackInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackinstancesoutput"></a>
<a id="schema_CreateStackInstancesOutput"></a>
<a id="tocScreatestackinstancesoutput"></a>
<a id="tocscreatestackinstancesoutput"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
"string"
```

<h2 id="tocS_AccountList">AccountList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlist"></a>
<a id="schema_AccountList"></a>
<a id="tocSaccountlist"></a>
<a id="tocsaccountlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccountsUrl">AccountsUrl</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsurl"></a>
<a id="schema_AccountsUrl"></a>
<a id="tocSaccountsurl"></a>
<a id="tocsaccountsurl"></a>

```json
"string"
```

<h2 id="tocS_OrganizationalUnitIdList">OrganizationalUnitIdList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitidlist"></a>
<a id="schema_OrganizationalUnitIdList"></a>
<a id="tocSorganizationalunitidlist"></a>
<a id="tocsorganizationalunitidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccountFilterType">AccountFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaaccountfiltertype"></a>
<a id="schema_AccountFilterType"></a>
<a id="tocSaccountfiltertype"></a>
<a id="tocsaccountfiltertype"></a>

```json
"NONE"
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

<h2 id="tocS_RegionConcurrencyType">RegionConcurrencyType</h2>
<!-- backwards compatibility -->
<a id="schemaregionconcurrencytype"></a>
<a id="schema_RegionConcurrencyType"></a>
<a id="tocSregionconcurrencytype"></a>
<a id="tocsregionconcurrencytype"></a>

```json
"SEQUENTIAL"
```

<h2 id="tocS_RegionList">RegionList</h2>
<!-- backwards compatibility -->
<a id="schemaregionlist"></a>
<a id="schema_RegionList"></a>
<a id="tocSregionlist"></a>
<a id="tocsregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FailureToleranceCount">FailureToleranceCount</h2>
<!-- backwards compatibility -->
<a id="schemafailuretolerancecount"></a>
<a id="schema_FailureToleranceCount"></a>
<a id="tocSfailuretolerancecount"></a>
<a id="tocsfailuretolerancecount"></a>

```json
0
```

<h2 id="tocS_FailureTolerancePercentage">FailureTolerancePercentage</h2>
<!-- backwards compatibility -->
<a id="schemafailuretolerancepercentage"></a>
<a id="schema_FailureTolerancePercentage"></a>
<a id="tocSfailuretolerancepercentage"></a>
<a id="tocsfailuretolerancepercentage"></a>

```json
0
```

<h2 id="tocS_MaxConcurrentCount">MaxConcurrentCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrentcount"></a>
<a id="schema_MaxConcurrentCount"></a>
<a id="tocSmaxconcurrentcount"></a>
<a id="tocsmaxconcurrentcount"></a>

```json
1
```

<h2 id="tocS_MaxConcurrentPercentage">MaxConcurrentPercentage</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrentpercentage"></a>
<a id="schema_MaxConcurrentPercentage"></a>
<a id="tocSmaxconcurrentpercentage"></a>
<a id="tocsmaxconcurrentpercentage"></a>

```json
1
```

<h2 id="tocS_StackSetNotFoundException">StackSetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemastacksetnotfoundexception"></a>
<a id="schema_StackSetNotFoundException"></a>
<a id="tocSstacksetnotfoundexception"></a>
<a id="tocsstacksetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_OperationInProgressException">OperationInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationinprogressexception"></a>
<a id="schema_OperationInProgressException"></a>
<a id="tocSoperationinprogressexception"></a>
<a id="tocsoperationinprogressexception"></a>

```json
null
```

<h2 id="tocS_OperationIdAlreadyExistsException">OperationIdAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationidalreadyexistsexception"></a>
<a id="schema_OperationIdAlreadyExistsException"></a>
<a id="tocSoperationidalreadyexistsexception"></a>
<a id="tocsoperationidalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_StaleRequestException">StaleRequestException</h2>
<!-- backwards compatibility -->
<a id="schemastalerequestexception"></a>
<a id="schema_StaleRequestException"></a>
<a id="tocSstalerequestexception"></a>
<a id="tocsstalerequestexception"></a>

```json
null
```

<h2 id="tocS_CreateStackSetOutput">CreateStackSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestacksetoutput"></a>
<a id="schema_CreateStackSetOutput"></a>
<a id="tocScreatestacksetoutput"></a>
<a id="tocscreatestacksetoutput"></a>

```json
{
  "StackSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetId|object|false|none|none|

<h2 id="tocS_AutoDeploymentNullable">AutoDeploymentNullable</h2>
<!-- backwards compatibility -->
<a id="schemaautodeploymentnullable"></a>
<a id="schema_AutoDeploymentNullable"></a>
<a id="tocSautodeploymentnullable"></a>
<a id="tocsautodeploymentnullable"></a>

```json
true
```

<h2 id="tocS_RetainStacksOnAccountRemovalNullable">RetainStacksOnAccountRemovalNullable</h2>
<!-- backwards compatibility -->
<a id="schemaretainstacksonaccountremovalnullable"></a>
<a id="schema_RetainStacksOnAccountRemovalNullable"></a>
<a id="tocSretainstacksonaccountremovalnullable"></a>
<a id="tocsretainstacksonaccountremovalnullable"></a>

```json
true
```

<h2 id="tocS_ManagedExecutionNullable">ManagedExecutionNullable</h2>
<!-- backwards compatibility -->
<a id="schemamanagedexecutionnullable"></a>
<a id="schema_ManagedExecutionNullable"></a>
<a id="tocSmanagedexecutionnullable"></a>
<a id="tocsmanagedexecutionnullable"></a>

```json
true
```

<h2 id="tocS_NameAlreadyExistsException">NameAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemanamealreadyexistsexception"></a>
<a id="schema_NameAlreadyExistsException"></a>
<a id="tocSnamealreadyexistsexception"></a>
<a id="tocsnamealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreatedButModifiedException">CreatedButModifiedException</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbutmodifiedexception"></a>
<a id="schema_CreatedButModifiedException"></a>
<a id="tocScreatedbutmodifiedexception"></a>
<a id="tocscreatedbutmodifiedexception"></a>

```json
null
```

<h2 id="tocS_DeactivateOrganizationsAccessOutput">DeactivateOrganizationsAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateorganizationsaccessoutput"></a>
<a id="schema_DeactivateOrganizationsAccessOutput"></a>
<a id="tocSdeactivateorganizationsaccessoutput"></a>
<a id="tocsdeactivateorganizationsaccessoutput"></a>

```json
{}
```

<h2 id="tocS_DeactivateTypeOutput">DeactivateTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatetypeoutput"></a>
<a id="schema_DeactivateTypeOutput"></a>
<a id="tocSdeactivatetypeoutput"></a>
<a id="tocsdeactivatetypeoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteChangeSetOutput">DeleteChangeSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletechangesetoutput"></a>
<a id="schema_DeleteChangeSetOutput"></a>
<a id="tocSdeletechangesetoutput"></a>
<a id="tocsdeletechangesetoutput"></a>

```json
{}
```

The output for the <a>DeleteChangeSet</a> action.

<h2 id="tocS_InvalidChangeSetStatusException">InvalidChangeSetStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidchangesetstatusexception"></a>
<a id="schema_InvalidChangeSetStatusException"></a>
<a id="tocSinvalidchangesetstatusexception"></a>
<a id="tocsinvalidchangesetstatusexception"></a>

```json
null
```

<h2 id="tocS_LogicalResourceId">LogicalResourceId</h2>
<!-- backwards compatibility -->
<a id="schemalogicalresourceid"></a>
<a id="schema_LogicalResourceId"></a>
<a id="tocSlogicalresourceid"></a>
<a id="tocslogicalresourceid"></a>

```json
"string"
```

<h2 id="tocS_DeleteStackInstancesOutput">DeleteStackInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestackinstancesoutput"></a>
<a id="schema_DeleteStackInstancesOutput"></a>
<a id="tocSdeletestackinstancesoutput"></a>
<a id="tocsdeletestackinstancesoutput"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_DeleteStackSetOutput">DeleteStackSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestacksetoutput"></a>
<a id="schema_DeleteStackSetOutput"></a>
<a id="tocSdeletestacksetoutput"></a>
<a id="tocsdeletestacksetoutput"></a>

```json
{}
```

<h2 id="tocS_StackSetNotEmptyException">StackSetNotEmptyException</h2>
<!-- backwards compatibility -->
<a id="schemastacksetnotemptyexception"></a>
<a id="schema_StackSetNotEmptyException"></a>
<a id="tocSstacksetnotemptyexception"></a>
<a id="tocsstacksetnotemptyexception"></a>

```json
null
```

<h2 id="tocS_DeregisterTypeOutput">DeregisterTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertypeoutput"></a>
<a id="schema_DeregisterTypeOutput"></a>
<a id="tocSderegistertypeoutput"></a>
<a id="tocsderegistertypeoutput"></a>

```json
{}
```

<h2 id="tocS_DescribeAccountLimitsOutput">DescribeAccountLimitsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountlimitsoutput"></a>
<a id="schema_DescribeAccountLimitsOutput"></a>
<a id="tocSdescribeaccountlimitsoutput"></a>
<a id="tocsdescribeaccountlimitsoutput"></a>

```json
{
  "AccountLimits": {},
  "NextToken": {}
}
```

The output for the <a>DescribeAccountLimits</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountLimits|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeChangeSetOutput">DescribeChangeSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribechangesetoutput"></a>
<a id="schema_DescribeChangeSetOutput"></a>
<a id="tocSdescribechangesetoutput"></a>
<a id="tocsdescribechangesetoutput"></a>

```json
{
  "ChangeSetName": {},
  "ChangeSetId": {},
  "StackId": {},
  "StackName": {},
  "Description": {},
  "Parameters": {},
  "CreationTime": {},
  "ExecutionStatus": {},
  "Status": {},
  "StatusReason": {},
  "NotificationARNs": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "Capabilities": {},
  "Tags": {},
  "Changes": {},
  "NextToken": {},
  "IncludeNestedStacks": {},
  "ParentChangeSetId": {},
  "RootChangeSetId": {},
  "OnStackFailure": {}
}
```

The output for the <a>DescribeChangeSet</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetName|object|false|none|none|
|ChangeSetId|object|false|none|none|
|StackId|object|false|none|none|
|StackName|object|false|none|none|
|Description|object|false|none|none|
|Parameters|object|false|none|none|
|CreationTime|object|false|none|none|
|ExecutionStatus|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|NotificationARNs|object|false|none|none|
|RollbackConfiguration|object|false|none|none|
|Capabilities|object|false|none|none|
|Tags|object|false|none|none|
|Changes|object|false|none|none|
|NextToken|object|false|none|none|
|IncludeNestedStacks|object|false|none|none|
|ParentChangeSetId|object|false|none|none|
|RootChangeSetId|object|false|none|none|
|OnStackFailure|object|false|none|none|

<h2 id="tocS_ChangeSetNotFoundException">ChangeSetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemachangesetnotfoundexception"></a>
<a id="schema_ChangeSetNotFoundException"></a>
<a id="tocSchangesetnotfoundexception"></a>
<a id="tocschangesetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeChangeSetHooksOutput">DescribeChangeSetHooksOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribechangesethooksoutput"></a>
<a id="schema_DescribeChangeSetHooksOutput"></a>
<a id="tocSdescribechangesethooksoutput"></a>
<a id="tocsdescribechangesethooksoutput"></a>

```json
{
  "ChangeSetId": {},
  "ChangeSetName": {},
  "Hooks": {},
  "Status": {},
  "NextToken": {},
  "StackId": {},
  "StackName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetId|object|false|none|none|
|ChangeSetName|object|false|none|none|
|Hooks|object|false|none|none|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|StackId|object|false|none|none|
|StackName|object|false|none|none|

<h2 id="tocS_DescribeOrganizationsAccessOutput">DescribeOrganizationsAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationsaccessoutput"></a>
<a id="schema_DescribeOrganizationsAccessOutput"></a>
<a id="tocSdescribeorganizationsaccessoutput"></a>
<a id="tocsdescribeorganizationsaccessoutput"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_DescribePublisherOutput">DescribePublisherOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribepublisheroutput"></a>
<a id="schema_DescribePublisherOutput"></a>
<a id="tocSdescribepublisheroutput"></a>
<a id="tocsdescribepublisheroutput"></a>

```json
{
  "PublisherId": {},
  "PublisherStatus": {},
  "IdentityProvider": {},
  "PublisherProfile": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublisherId|object|false|none|none|
|PublisherStatus|object|false|none|none|
|IdentityProvider|object|false|none|none|
|PublisherProfile|object|false|none|none|

<h2 id="tocS_DescribeStackDriftDetectionStatusOutput">DescribeStackDriftDetectionStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackdriftdetectionstatusoutput"></a>
<a id="schema_DescribeStackDriftDetectionStatusOutput"></a>
<a id="tocSdescribestackdriftdetectionstatusoutput"></a>
<a id="tocsdescribestackdriftdetectionstatusoutput"></a>

```json
{
  "StackId": {},
  "StackDriftDetectionId": {},
  "StackDriftStatus": {},
  "DetectionStatus": {},
  "DetectionStatusReason": {},
  "DriftedStackResourceCount": {},
  "Timestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|StackDriftDetectionId|object|true|none|none|
|StackDriftStatus|object|false|none|none|
|DetectionStatus|object|true|none|none|
|DetectionStatusReason|object|false|none|none|
|DriftedStackResourceCount|object|false|none|none|
|Timestamp|object|true|none|none|

<h2 id="tocS_DescribeStackEventsOutput">DescribeStackEventsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackeventsoutput"></a>
<a id="schema_DescribeStackEventsOutput"></a>
<a id="tocSdescribestackeventsoutput"></a>
<a id="tocsdescribestackeventsoutput"></a>

```json
{
  "StackEvents": {},
  "NextToken": {}
}
```

The output for a <a>DescribeStackEvents</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackEvents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeStackInstanceOutput">DescribeStackInstanceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackinstanceoutput"></a>
<a id="schema_DescribeStackInstanceOutput"></a>
<a id="tocSdescribestackinstanceoutput"></a>
<a id="tocsdescribestackinstanceoutput"></a>

```json
{
  "StackInstance": {
    "StackSetId": {},
    "Region": {},
    "Account": {},
    "StackId": {},
    "ParameterOverrides": {},
    "Status": {},
    "StackInstanceStatus": {
      "DetailedStatus": {}
    },
    "StatusReason": {},
    "OrganizationalUnitId": {},
    "DriftStatus": {},
    "LastDriftCheckTimestamp": {},
    "LastOperationId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackInstance|object|false|none|none|

<h2 id="tocS_StackInstanceNotFoundException">StackInstanceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancenotfoundexception"></a>
<a id="schema_StackInstanceNotFoundException"></a>
<a id="tocSstackinstancenotfoundexception"></a>
<a id="tocsstackinstancenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeStackResourceOutput">DescribeStackResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackresourceoutput"></a>
<a id="schema_DescribeStackResourceOutput"></a>
<a id="tocSdescribestackresourceoutput"></a>
<a id="tocsdescribestackresourceoutput"></a>

```json
{
  "StackResourceDetail": {
    "StackName": {},
    "StackId": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "ResourceType": {},
    "LastUpdatedTimestamp": {},
    "ResourceStatus": {},
    "ResourceStatusReason": {},
    "Description": {},
    "Metadata": {},
    "DriftInformation": {
      "StackResourceDriftStatus": {},
      "LastCheckTimestamp": {}
    },
    "ModuleInfo": {
      "TypeHierarchy": {},
      "LogicalIdHierarchy": {}
    }
  }
}
```

The output for a <a>DescribeStackResource</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackResourceDetail|object|false|none|none|

<h2 id="tocS_DescribeStackResourceDriftsOutput">DescribeStackResourceDriftsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackresourcedriftsoutput"></a>
<a id="schema_DescribeStackResourceDriftsOutput"></a>
<a id="tocSdescribestackresourcedriftsoutput"></a>
<a id="tocsdescribestackresourcedriftsoutput"></a>

```json
{
  "StackResourceDrifts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackResourceDrifts|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StackResourceDriftStatus">StackResourceDriftStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcedriftstatus"></a>
<a id="schema_StackResourceDriftStatus"></a>
<a id="tocSstackresourcedriftstatus"></a>
<a id="tocsstackresourcedriftstatus"></a>

```json
"IN_SYNC"
```

<h2 id="tocS_DescribeStackResourcesOutput">DescribeStackResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackresourcesoutput"></a>
<a id="schema_DescribeStackResourcesOutput"></a>
<a id="tocSdescribestackresourcesoutput"></a>
<a id="tocsdescribestackresourcesoutput"></a>

```json
{
  "StackResources": {}
}
```

The output for a <a>DescribeStackResources</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackResources|object|false|none|none|

<h2 id="tocS_DescribeStackSetOutput">DescribeStackSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksetoutput"></a>
<a id="schema_DescribeStackSetOutput"></a>
<a id="tocSdescribestacksetoutput"></a>
<a id="tocsdescribestacksetoutput"></a>

```json
{
  "StackSet": {
    "StackSetName": {},
    "StackSetId": {},
    "Description": {},
    "Status": {},
    "TemplateBody": {},
    "Parameters": {},
    "Capabilities": {},
    "Tags": {},
    "StackSetARN": {},
    "AdministrationRoleARN": {},
    "ExecutionRoleName": {},
    "StackSetDriftDetectionDetails": {
      "DriftStatus": {},
      "DriftDetectionStatus": {},
      "LastDriftCheckTimestamp": {},
      "TotalStackInstancesCount": {},
      "DriftedStackInstancesCount": {},
      "InSyncStackInstancesCount": {},
      "InProgressStackInstancesCount": {},
      "FailedStackInstancesCount": {}
    },
    "AutoDeployment": {
      "Enabled": {},
      "RetainStacksOnAccountRemoval": {}
    },
    "PermissionModel": {},
    "OrganizationalUnitIds": {},
    "ManagedExecution": {
      "Active": {}
    },
    "Regions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSet|object|false|none|none|

<h2 id="tocS_DescribeStackSetOperationOutput">DescribeStackSetOperationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksetoperationoutput"></a>
<a id="schema_DescribeStackSetOperationOutput"></a>
<a id="tocSdescribestacksetoperationoutput"></a>
<a id="tocsdescribestacksetoperationoutput"></a>

```json
{
  "StackSetOperation": {
    "OperationId": {},
    "StackSetId": {},
    "Action": {},
    "Status": {},
    "OperationPreferences": {
      "RegionConcurrencyType": {},
      "RegionOrder": {},
      "FailureToleranceCount": {},
      "FailureTolerancePercentage": {},
      "MaxConcurrentCount": {},
      "MaxConcurrentPercentage": {}
    },
    "RetainStacks": {},
    "AdministrationRoleARN": {},
    "ExecutionRoleName": {},
    "CreationTimestamp": {},
    "EndTimestamp": {},
    "DeploymentTargets": {
      "Accounts": {},
      "AccountsUrl": {},
      "OrganizationalUnitIds": {},
      "AccountFilterType": {}
    },
    "StackSetDriftDetectionDetails": {
      "DriftStatus": {},
      "DriftDetectionStatus": {},
      "LastDriftCheckTimestamp": {},
      "TotalStackInstancesCount": {},
      "DriftedStackInstancesCount": {},
      "InSyncStackInstancesCount": {},
      "InProgressStackInstancesCount": {},
      "FailedStackInstancesCount": {}
    },
    "StatusReason": {},
    "StatusDetails": {
      "FailedStackInstancesCount": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetOperation|object|false|none|none|

<h2 id="tocS_DescribeStacksOutput">DescribeStacksOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksoutput"></a>
<a id="schema_DescribeStacksOutput"></a>
<a id="tocSdescribestacksoutput"></a>
<a id="tocsdescribestacksoutput"></a>

```json
{
  "Stacks": {},
  "NextToken": {}
}
```

The output for a <a>DescribeStacks</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stacks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeTypeOutput">DescribeTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetypeoutput"></a>
<a id="schema_DescribeTypeOutput"></a>
<a id="tocSdescribetypeoutput"></a>
<a id="tocsdescribetypeoutput"></a>

```json
{
  "Arn": {},
  "Type": {},
  "TypeName": {},
  "DefaultVersionId": {},
  "IsDefaultVersion": {},
  "TypeTestsStatus": {},
  "TypeTestsStatusDescription": {},
  "Description": {},
  "Schema": {},
  "ProvisioningType": {},
  "DeprecatedStatus": {},
  "LoggingConfig": {
    "LogRoleArn": {},
    "LogGroupName": {}
  },
  "RequiredActivatedTypes": {},
  "ExecutionRoleArn": {},
  "Visibility": {},
  "SourceUrl": {},
  "DocumentationUrl": {},
  "LastUpdated": {},
  "TimeCreated": {},
  "ConfigurationSchema": {},
  "PublisherId": {},
  "OriginalTypeName": {},
  "OriginalTypeArn": {},
  "PublicVersionNumber": {},
  "LatestPublicVersion": {},
  "IsActivated": {},
  "AutoUpdate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|DefaultVersionId|object|false|none|none|
|IsDefaultVersion|object|false|none|none|
|TypeTestsStatus|object|false|none|none|
|TypeTestsStatusDescription|object|false|none|none|
|Description|object|false|none|none|
|Schema|object|false|none|none|
|ProvisioningType|object|false|none|none|
|DeprecatedStatus|object|false|none|none|
|LoggingConfig|object|false|none|none|
|RequiredActivatedTypes|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|
|Visibility|object|false|none|none|
|SourceUrl|object|false|none|none|
|DocumentationUrl|object|false|none|none|
|LastUpdated|object|false|none|none|
|TimeCreated|object|false|none|none|
|ConfigurationSchema|object|false|none|none|
|PublisherId|object|false|none|none|
|OriginalTypeName|object|false|none|none|
|OriginalTypeArn|object|false|none|none|
|PublicVersionNumber|object|false|none|none|
|LatestPublicVersion|object|false|none|none|
|IsActivated|object|false|none|none|
|AutoUpdate|object|false|none|none|

<h2 id="tocS_DescribeTypeRegistrationOutput">DescribeTypeRegistrationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetyperegistrationoutput"></a>
<a id="schema_DescribeTypeRegistrationOutput"></a>
<a id="tocSdescribetyperegistrationoutput"></a>
<a id="tocsdescribetyperegistrationoutput"></a>

```json
{
  "ProgressStatus": {},
  "Description": {},
  "TypeArn": {},
  "TypeVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressStatus|object|false|none|none|
|Description|object|false|none|none|
|TypeArn|object|false|none|none|
|TypeVersionArn|object|false|none|none|

<h2 id="tocS_DetectStackDriftOutput">DetectStackDriftOutput</h2>
<!-- backwards compatibility -->
<a id="schemadetectstackdriftoutput"></a>
<a id="schema_DetectStackDriftOutput"></a>
<a id="tocSdetectstackdriftoutput"></a>
<a id="tocsdetectstackdriftoutput"></a>

```json
{
  "StackDriftDetectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackDriftDetectionId|object|true|none|none|

<h2 id="tocS_DetectStackResourceDriftOutput">DetectStackResourceDriftOutput</h2>
<!-- backwards compatibility -->
<a id="schemadetectstackresourcedriftoutput"></a>
<a id="schema_DetectStackResourceDriftOutput"></a>
<a id="tocSdetectstackresourcedriftoutput"></a>
<a id="tocsdetectstackresourcedriftoutput"></a>

```json
{
  "StackResourceDrift": {
    "StackId": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "PhysicalResourceIdContext": {},
    "ResourceType": {},
    "ExpectedProperties": {},
    "ActualProperties": {},
    "PropertyDifferences": {},
    "StackResourceDriftStatus": {},
    "Timestamp": {},
    "ModuleInfo": {
      "TypeHierarchy": {},
      "LogicalIdHierarchy": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackResourceDrift|object|true|none|none|

<h2 id="tocS_DetectStackSetDriftOutput">DetectStackSetDriftOutput</h2>
<!-- backwards compatibility -->
<a id="schemadetectstacksetdriftoutput"></a>
<a id="schema_DetectStackSetDriftOutput"></a>
<a id="tocSdetectstacksetdriftoutput"></a>
<a id="tocsdetectstacksetdriftoutput"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_EstimateTemplateCostOutput">EstimateTemplateCostOutput</h2>
<!-- backwards compatibility -->
<a id="schemaestimatetemplatecostoutput"></a>
<a id="schema_EstimateTemplateCostOutput"></a>
<a id="tocSestimatetemplatecostoutput"></a>
<a id="tocsestimatetemplatecostoutput"></a>

```json
{
  "Url": {}
}
```

The output for a <a>EstimateTemplateCost</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|

<h2 id="tocS_ExecuteChangeSetOutput">ExecuteChangeSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutechangesetoutput"></a>
<a id="schema_ExecuteChangeSetOutput"></a>
<a id="tocSexecutechangesetoutput"></a>
<a id="tocsexecutechangesetoutput"></a>

```json
{}
```

The output for the <a>ExecuteChangeSet</a> action.

<h2 id="tocS_GetStackPolicyOutput">GetStackPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetstackpolicyoutput"></a>
<a id="schema_GetStackPolicyOutput"></a>
<a id="tocSgetstackpolicyoutput"></a>
<a id="tocsgetstackpolicyoutput"></a>

```json
{
  "StackPolicyBody": {}
}
```

The output for the <a>GetStackPolicy</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackPolicyBody|object|false|none|none|

<h2 id="tocS_GetTemplateOutput">GetTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplateoutput"></a>
<a id="schema_GetTemplateOutput"></a>
<a id="tocSgettemplateoutput"></a>
<a id="tocsgettemplateoutput"></a>

```json
{
  "TemplateBody": {},
  "StagesAvailable": {}
}
```

The output for <a>GetTemplate</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateBody|object|false|none|none|
|StagesAvailable|object|false|none|none|

<h2 id="tocS_GetTemplateSummaryOutput">GetTemplateSummaryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplatesummaryoutput"></a>
<a id="schema_GetTemplateSummaryOutput"></a>
<a id="tocSgettemplatesummaryoutput"></a>
<a id="tocsgettemplatesummaryoutput"></a>

```json
{
  "Parameters": {},
  "Description": {},
  "Capabilities": {},
  "CapabilitiesReason": {},
  "ResourceTypes": {},
  "Version": {},
  "Metadata": {},
  "DeclaredTransforms": {},
  "ResourceIdentifierSummaries": {},
  "Warnings": {
    "UnrecognizedResourceTypes": {}
  }
}
```

The output for the <a>GetTemplateSummary</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|Description|object|false|none|none|
|Capabilities|object|false|none|none|
|CapabilitiesReason|object|false|none|none|
|ResourceTypes|object|false|none|none|
|Version|object|false|none|none|
|Metadata|object|false|none|none|
|DeclaredTransforms|object|false|none|none|
|ResourceIdentifierSummaries|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_TreatUnrecognizedResourceTypesAsWarnings">TreatUnrecognizedResourceTypesAsWarnings</h2>
<!-- backwards compatibility -->
<a id="schematreatunrecognizedresourcetypesaswarnings"></a>
<a id="schema_TreatUnrecognizedResourceTypesAsWarnings"></a>
<a id="tocStreatunrecognizedresourcetypesaswarnings"></a>
<a id="tocstreatunrecognizedresourcetypesaswarnings"></a>

```json
true
```

<h2 id="tocS_ImportStacksToStackSetOutput">ImportStacksToStackSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemaimportstackstostacksetoutput"></a>
<a id="schema_ImportStacksToStackSetOutput"></a>
<a id="tocSimportstackstostacksetoutput"></a>
<a id="tocsimportstackstostacksetoutput"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_StackId">StackId</h2>
<!-- backwards compatibility -->
<a id="schemastackid"></a>
<a id="schema_StackId"></a>
<a id="tocSstackid"></a>
<a id="tocsstackid"></a>

```json
"string"
```

<h2 id="tocS_OrganizationalUnitId">OrganizationalUnitId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitid"></a>
<a id="schema_OrganizationalUnitId"></a>
<a id="tocSorganizationalunitid"></a>
<a id="tocsorganizationalunitid"></a>

```json
"string"
```

<h2 id="tocS_StackNotFoundException">StackNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemastacknotfoundexception"></a>
<a id="schema_StackNotFoundException"></a>
<a id="tocSstacknotfoundexception"></a>
<a id="tocsstacknotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListChangeSetsOutput">ListChangeSetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistchangesetsoutput"></a>
<a id="schema_ListChangeSetsOutput"></a>
<a id="tocSlistchangesetsoutput"></a>
<a id="tocslistchangesetsoutput"></a>

```json
{
  "Summaries": {},
  "NextToken": {}
}
```

The output for the <a>ListChangeSets</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExportsOutput">ListExportsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsoutput"></a>
<a id="schema_ListExportsOutput"></a>
<a id="tocSlistexportsoutput"></a>
<a id="tocslistexportsoutput"></a>

```json
{
  "Exports": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Exports|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImportsOutput">ListImportsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsoutput"></a>
<a id="schema_ListImportsOutput"></a>
<a id="tocSlistimportsoutput"></a>
<a id="tocslistimportsoutput"></a>

```json
{
  "Imports": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Imports|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStackInstanceResourceDriftsOutput">ListStackInstanceResourceDriftsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackinstanceresourcedriftsoutput"></a>
<a id="schema_ListStackInstanceResourceDriftsOutput"></a>
<a id="tocSliststackinstanceresourcedriftsoutput"></a>
<a id="tocsliststackinstanceresourcedriftsoutput"></a>

```json
{
  "Summaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStackInstancesOutput">ListStackInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackinstancesoutput"></a>
<a id="schema_ListStackInstancesOutput"></a>
<a id="tocSliststackinstancesoutput"></a>
<a id="tocsliststackinstancesoutput"></a>

```json
{
  "Summaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StackInstanceFilter">StackInstanceFilter</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancefilter"></a>
<a id="schema_StackInstanceFilter"></a>
<a id="tocSstackinstancefilter"></a>
<a id="tocsstackinstancefilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

The filter to apply to stack instances

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_ListStackResourcesOutput">ListStackResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackresourcesoutput"></a>
<a id="schema_ListStackResourcesOutput"></a>
<a id="tocSliststackresourcesoutput"></a>
<a id="tocsliststackresourcesoutput"></a>

```json
{
  "StackResourceSummaries": {},
  "NextToken": {}
}
```

The output for a <a>ListStackResources</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackResourceSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStackSetOperationResultsOutput">ListStackSetOperationResultsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksetoperationresultsoutput"></a>
<a id="schema_ListStackSetOperationResultsOutput"></a>
<a id="tocSliststacksetoperationresultsoutput"></a>
<a id="tocsliststacksetoperationresultsoutput"></a>

```json
{
  "Summaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_OperationResultFilter">OperationResultFilter</h2>
<!-- backwards compatibility -->
<a id="schemaoperationresultfilter"></a>
<a id="schema_OperationResultFilter"></a>
<a id="tocSoperationresultfilter"></a>
<a id="tocsoperationresultfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

The status that operation results are filtered by.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_ListStackSetOperationsOutput">ListStackSetOperationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksetoperationsoutput"></a>
<a id="schema_ListStackSetOperationsOutput"></a>
<a id="tocSliststacksetoperationsoutput"></a>
<a id="tocsliststacksetoperationsoutput"></a>

```json
{
  "Summaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStackSetsOutput">ListStackSetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksetsoutput"></a>
<a id="schema_ListStackSetsOutput"></a>
<a id="tocSliststacksetsoutput"></a>
<a id="tocsliststacksetsoutput"></a>

```json
{
  "Summaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStacksOutput">ListStacksOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksoutput"></a>
<a id="schema_ListStacksOutput"></a>
<a id="tocSliststacksoutput"></a>
<a id="tocsliststacksoutput"></a>

```json
{
  "StackSummaries": {},
  "NextToken": {}
}
```

The output for <a>ListStacks</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StackStatus">StackStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackstatus"></a>
<a id="schema_StackStatus"></a>
<a id="tocSstackstatus"></a>
<a id="tocsstackstatus"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_ListTypeRegistrationsOutput">ListTypeRegistrationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttyperegistrationsoutput"></a>
<a id="schema_ListTypeRegistrationsOutput"></a>
<a id="tocSlisttyperegistrationsoutput"></a>
<a id="tocslisttyperegistrationsoutput"></a>

```json
{
  "RegistrationTokenList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegistrationTokenList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTypeVersionsOutput">ListTypeVersionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttypeversionsoutput"></a>
<a id="schema_ListTypeVersionsOutput"></a>
<a id="tocSlisttypeversionsoutput"></a>
<a id="tocslisttypeversionsoutput"></a>

```json
{
  "TypeVersionSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeVersionSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTypesOutput">ListTypesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttypesoutput"></a>
<a id="schema_ListTypesOutput"></a>
<a id="tocSlisttypesoutput"></a>
<a id="tocslisttypesoutput"></a>

```json
{
  "TypeSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
"REGISTERED"
```

<h2 id="tocS_PublisherId">PublisherId</h2>
<!-- backwards compatibility -->
<a id="schemapublisherid"></a>
<a id="schema_PublisherId"></a>
<a id="tocSpublisherid"></a>
<a id="tocspublisherid"></a>

```json
"string"
```

<h2 id="tocS_TypeNamePrefix">TypeNamePrefix</h2>
<!-- backwards compatibility -->
<a id="schematypenameprefix"></a>
<a id="schema_TypeNamePrefix"></a>
<a id="tocStypenameprefix"></a>
<a id="tocstypenameprefix"></a>

```json
"string"
```

<h2 id="tocS_PublishTypeOutput">PublishTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemapublishtypeoutput"></a>
<a id="schema_PublishTypeOutput"></a>
<a id="tocSpublishtypeoutput"></a>
<a id="tocspublishtypeoutput"></a>

```json
{
  "PublicTypeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicTypeArn|object|false|none|none|

<h2 id="tocS_RecordHandlerProgressOutput">RecordHandlerProgressOutput</h2>
<!-- backwards compatibility -->
<a id="schemarecordhandlerprogressoutput"></a>
<a id="schema_RecordHandlerProgressOutput"></a>
<a id="tocSrecordhandlerprogressoutput"></a>
<a id="tocsrecordhandlerprogressoutput"></a>

```json
{}
```

<h2 id="tocS_InvalidStateTransitionException">InvalidStateTransitionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstatetransitionexception"></a>
<a id="schema_InvalidStateTransitionException"></a>
<a id="tocSinvalidstatetransitionexception"></a>
<a id="tocsinvalidstatetransitionexception"></a>

```json
null
```

<h2 id="tocS_OperationStatusCheckFailedException">OperationStatusCheckFailedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatuscheckfailedexception"></a>
<a id="schema_OperationStatusCheckFailedException"></a>
<a id="tocSoperationstatuscheckfailedexception"></a>
<a id="tocsoperationstatuscheckfailedexception"></a>

```json
null
```

<h2 id="tocS_RegisterPublisherOutput">RegisterPublisherOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterpublisheroutput"></a>
<a id="schema_RegisterPublisherOutput"></a>
<a id="tocSregisterpublisheroutput"></a>
<a id="tocsregisterpublisheroutput"></a>

```json
{
  "PublisherId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublisherId|object|false|none|none|

<h2 id="tocS_RegisterTypeOutput">RegisterTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregistertypeoutput"></a>
<a id="schema_RegisterTypeOutput"></a>
<a id="tocSregistertypeoutput"></a>
<a id="tocsregistertypeoutput"></a>

```json
{
  "RegistrationToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegistrationToken|object|false|none|none|

<h2 id="tocS_RollbackStackOutput">RollbackStackOutput</h2>
<!-- backwards compatibility -->
<a id="schemarollbackstackoutput"></a>
<a id="schema_RollbackStackOutput"></a>
<a id="tocSrollbackstackoutput"></a>
<a id="tocsrollbackstackoutput"></a>

```json
{
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|

<h2 id="tocS_SetTypeConfigurationOutput">SetTypeConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemasettypeconfigurationoutput"></a>
<a id="schema_SetTypeConfigurationOutput"></a>
<a id="tocSsettypeconfigurationoutput"></a>
<a id="tocssettypeconfigurationoutput"></a>

```json
{
  "ConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationArn|object|false|none|none|

<h2 id="tocS_SetTypeDefaultVersionOutput">SetTypeDefaultVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemasettypedefaultversionoutput"></a>
<a id="schema_SetTypeDefaultVersionOutput"></a>
<a id="tocSsettypedefaultversionoutput"></a>
<a id="tocssettypedefaultversionoutput"></a>

```json
{}
```

<h2 id="tocS_StopStackSetOperationOutput">StopStackSetOperationOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopstacksetoperationoutput"></a>
<a id="schema_StopStackSetOperationOutput"></a>
<a id="tocSstopstacksetoperationoutput"></a>
<a id="tocsstopstacksetoperationoutput"></a>

```json
{}
```

<h2 id="tocS_TestTypeOutput">TestTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schematesttypeoutput"></a>
<a id="schema_TestTypeOutput"></a>
<a id="tocStesttypeoutput"></a>
<a id="tocstesttypeoutput"></a>

```json
{
  "TypeVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeVersionArn|object|false|none|none|

<h2 id="tocS_UpdateStackOutput">UpdateStackOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestackoutput"></a>
<a id="schema_UpdateStackOutput"></a>
<a id="tocSupdatestackoutput"></a>
<a id="tocsupdatestackoutput"></a>

```json
{
  "StackId": {}
}
```

The output for an <a>UpdateStack</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|

<h2 id="tocS_UpdateStackInstancesOutput">UpdateStackInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestackinstancesoutput"></a>
<a id="schema_UpdateStackInstancesOutput"></a>
<a id="tocSupdatestackinstancesoutput"></a>
<a id="tocsupdatestackinstancesoutput"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdateStackSetOutput">UpdateStackSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestacksetoutput"></a>
<a id="schema_UpdateStackSetOutput"></a>
<a id="tocSupdatestacksetoutput"></a>
<a id="tocsupdatestacksetoutput"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdateTerminationProtectionOutput">UpdateTerminationProtectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateterminationprotectionoutput"></a>
<a id="schema_UpdateTerminationProtectionOutput"></a>
<a id="tocSupdateterminationprotectionoutput"></a>
<a id="tocsupdateterminationprotectionoutput"></a>

```json
{
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|

<h2 id="tocS_ValidateTemplateOutput">ValidateTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemavalidatetemplateoutput"></a>
<a id="schema_ValidateTemplateOutput"></a>
<a id="tocSvalidatetemplateoutput"></a>
<a id="tocsvalidatetemplateoutput"></a>

```json
{
  "Parameters": {},
  "Description": {},
  "Capabilities": {},
  "CapabilitiesReason": {},
  "DeclaredTransforms": {}
}
```

The output for <a>ValidateTemplate</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|Description|object|false|none|none|
|Capabilities|object|false|none|none|
|CapabilitiesReason|object|false|none|none|
|DeclaredTransforms|object|false|none|none|

<h2 id="tocS_AcceptTermsAndConditions">AcceptTermsAndConditions</h2>
<!-- backwards compatibility -->
<a id="schemaaccepttermsandconditions"></a>
<a id="schema_AcceptTermsAndConditions"></a>
<a id="tocSaccepttermsandconditions"></a>
<a id="tocsaccepttermsandconditions"></a>

```json
true
```

<h2 id="tocS_AccountGateStatus">AccountGateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountgatestatus"></a>
<a id="schema_AccountGateStatus"></a>
<a id="tocSaccountgatestatus"></a>
<a id="tocsaccountgatestatus"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_AccountGateStatusReason">AccountGateStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaaccountgatestatusreason"></a>
<a id="schema_AccountGateStatusReason"></a>
<a id="tocSaccountgatestatusreason"></a>
<a id="tocsaccountgatestatusreason"></a>

```json
"string"
```

<h2 id="tocS_AccountGateResult">AccountGateResult</h2>
<!-- backwards compatibility -->
<a id="schemaaccountgateresult"></a>
<a id="schema_AccountGateResult"></a>
<a id="tocSaccountgateresult"></a>
<a id="tocsaccountgateresult"></a>

```json
{
  "Status": {},
  "StatusReason": {}
}
```

<p>Structure that contains the results of the account gate function which CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, CloudFormation lets you specify a Lambda function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|

<h2 id="tocS_LimitName">LimitName</h2>
<!-- backwards compatibility -->
<a id="schemalimitname"></a>
<a id="schema_LimitName"></a>
<a id="tocSlimitname"></a>
<a id="tocslimitname"></a>

```json
"string"
```

<h2 id="tocS_LimitValue">LimitValue</h2>
<!-- backwards compatibility -->
<a id="schemalimitvalue"></a>
<a id="schema_LimitValue"></a>
<a id="tocSlimitvalue"></a>
<a id="tocslimitvalue"></a>

```json
0
```

<h2 id="tocS_AccountLimit">AccountLimit</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimit"></a>
<a id="schema_AccountLimit"></a>
<a id="tocSaccountlimit"></a>
<a id="tocsaccountlimit"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

<p>The AccountLimit data type.</p> <p>CloudFormation has the following limits per account:</p> <ul> <li> <p>Number of concurrent resources</p> </li> <li> <p>Number of stacks</p> </li> <li> <p>Number of stack outputs</p> </li> </ul> <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the <i>CloudFormation User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_AccountLimitList">AccountLimitList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimitlist"></a>
<a id="schema_AccountLimitList"></a>
<a id="tocSaccountlimitlist"></a>
<a id="tocsaccountlimitlist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ActivateOrganizationsAccessInput">ActivateOrganizationsAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemaactivateorganizationsaccessinput"></a>
<a id="schema_ActivateOrganizationsAccessInput"></a>
<a id="tocSactivateorganizationsaccessinput"></a>
<a id="tocsactivateorganizationsaccessinput"></a>

```json
{}
```

<h2 id="tocS_ThirdPartyType">ThirdPartyType</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartytype"></a>
<a id="schema_ThirdPartyType"></a>
<a id="tocSthirdpartytype"></a>
<a id="tocsthirdpartytype"></a>

```json
"RESOURCE"
```

<h2 id="tocS_ThirdPartyTypeArn">ThirdPartyTypeArn</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartytypearn"></a>
<a id="schema_ThirdPartyTypeArn"></a>
<a id="tocSthirdpartytypearn"></a>
<a id="tocsthirdpartytypearn"></a>

```json
"string"
```

<h2 id="tocS_TypeName">TypeName</h2>
<!-- backwards compatibility -->
<a id="schematypename"></a>
<a id="schema_TypeName"></a>
<a id="tocStypename"></a>
<a id="tocstypename"></a>

```json
"stringstri"
```

<h2 id="tocS_AutoUpdate">AutoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaautoupdate"></a>
<a id="schema_AutoUpdate"></a>
<a id="tocSautoupdate"></a>
<a id="tocsautoupdate"></a>

```json
true
```

<h2 id="tocS_LoggingConfig">LoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfig"></a>
<a id="schema_LoggingConfig"></a>
<a id="tocSloggingconfig"></a>
<a id="tocsloggingconfig"></a>

```json
{
  "LogRoleArn": {},
  "LogGroupName": {}
}
```

Contains logging configuration information for an extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogRoleArn|object|true|none|none|
|LogGroupName|object|true|none|none|

<h2 id="tocS_VersionBump">VersionBump</h2>
<!-- backwards compatibility -->
<a id="schemaversionbump"></a>
<a id="schema_VersionBump"></a>
<a id="tocSversionbump"></a>
<a id="tocsversionbump"></a>

```json
"MAJOR"
```

<h2 id="tocS_MajorVersion">MajorVersion</h2>
<!-- backwards compatibility -->
<a id="schemamajorversion"></a>
<a id="schema_MajorVersion"></a>
<a id="tocSmajorversion"></a>
<a id="tocsmajorversion"></a>

```json
1
```

<h2 id="tocS_ActivateTypeInput">ActivateTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaactivatetypeinput"></a>
<a id="schema_ActivateTypeInput"></a>
<a id="tocSactivatetypeinput"></a>
<a id="tocsactivatetypeinput"></a>

```json
{
  "Type": {},
  "PublicTypeArn": {},
  "PublisherId": {},
  "TypeName": {},
  "TypeNameAlias": {},
  "AutoUpdate": {},
  "LoggingConfig": {
    "LogRoleArn": {},
    "LogGroupName": {}
  },
  "ExecutionRoleArn": {},
  "VersionBump": {},
  "MajorVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|PublicTypeArn|object|false|none|none|
|PublisherId|object|false|none|none|
|TypeName|object|false|none|none|
|TypeNameAlias|object|false|none|none|
|AutoUpdate|object|false|none|none|
|LoggingConfig|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|
|VersionBump|object|false|none|none|
|MajorVersion|object|false|none|none|

<h2 id="tocS_PrivateTypeArn">PrivateTypeArn</h2>
<!-- backwards compatibility -->
<a id="schemaprivatetypearn"></a>
<a id="schema_PrivateTypeArn"></a>
<a id="tocSprivatetypearn"></a>
<a id="tocsprivatetypearn"></a>

```json
"string"
```

<h2 id="tocS_AllowedValue">AllowedValue</h2>
<!-- backwards compatibility -->
<a id="schemaallowedvalue"></a>
<a id="schema_AllowedValue"></a>
<a id="tocSallowedvalue"></a>
<a id="tocsallowedvalue"></a>

```json
"string"
```

<h2 id="tocS_AllowedValues">AllowedValues</h2>
<!-- backwards compatibility -->
<a id="schemaallowedvalues"></a>
<a id="schema_AllowedValues"></a>
<a id="tocSallowedvalues"></a>
<a id="tocsallowedvalues"></a>

```json
[
  "string"
]
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

<h2 id="tocS_AutoDeployment">AutoDeployment</h2>
<!-- backwards compatibility -->
<a id="schemaautodeployment"></a>
<a id="schema_AutoDeployment"></a>
<a id="tocSautodeployment"></a>
<a id="tocsautodeployment"></a>

```json
{
  "Enabled": {},
  "RetainStacksOnAccountRemoval": {}
}
```

[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|RetainStacksOnAccountRemoval|object|false|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"str"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_BatchDescribeTypeConfigurationsError">BatchDescribeTypeConfigurationsError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribetypeconfigurationserror"></a>
<a id="schema_BatchDescribeTypeConfigurationsError"></a>
<a id="tocSbatchdescribetypeconfigurationserror"></a>
<a id="tocsbatchdescribetypeconfigurationserror"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {},
  "TypeConfigurationIdentifier": {
    "TypeArn": {},
    "TypeConfigurationAlias": {},
    "TypeConfigurationArn": {},
    "Type": {},
    "TypeName": {}
  }
}
```

Detailed information concerning an error generated during the setting of configuration data for a CloudFormation extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|TypeConfigurationIdentifier|object|false|none|none|

<h2 id="tocS_BatchDescribeTypeConfigurationsErrors">BatchDescribeTypeConfigurationsErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribetypeconfigurationserrors"></a>
<a id="schema_BatchDescribeTypeConfigurationsErrors"></a>
<a id="tocSbatchdescribetypeconfigurationserrors"></a>
<a id="tocsbatchdescribetypeconfigurationserrors"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {},
    "TypeConfigurationIdentifier": {
      "TypeArn": {},
      "TypeConfigurationAlias": {},
      "TypeConfigurationArn": {},
      "Type": {},
      "TypeName": {}
    }
  }
]
```

<h2 id="tocS_TypeConfigurationIdentifiers">TypeConfigurationIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schematypeconfigurationidentifiers"></a>
<a id="schema_TypeConfigurationIdentifiers"></a>
<a id="tocStypeconfigurationidentifiers"></a>
<a id="tocstypeconfigurationidentifiers"></a>

```json
[
  {
    "TypeArn": {},
    "TypeConfigurationAlias": {},
    "TypeConfigurationArn": {},
    "Type": {},
    "TypeName": {}
  }
]
```

<h2 id="tocS_BatchDescribeTypeConfigurationsInput">BatchDescribeTypeConfigurationsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribetypeconfigurationsinput"></a>
<a id="schema_BatchDescribeTypeConfigurationsInput"></a>
<a id="tocSbatchdescribetypeconfigurationsinput"></a>
<a id="tocsbatchdescribetypeconfigurationsinput"></a>

```json
{
  "TypeConfigurationIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeConfigurationIdentifiers|object|true|none|none|

<h2 id="tocS_UnprocessedTypeConfigurations">UnprocessedTypeConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedtypeconfigurations"></a>
<a id="schema_UnprocessedTypeConfigurations"></a>
<a id="tocSunprocessedtypeconfigurations"></a>
<a id="tocsunprocessedtypeconfigurations"></a>

```json
[
  {
    "TypeArn": {},
    "TypeConfigurationAlias": {},
    "TypeConfigurationArn": {},
    "Type": {},
    "TypeName": {}
  }
]
```

<h2 id="tocS_TypeConfigurationDetailsList">TypeConfigurationDetailsList</h2>
<!-- backwards compatibility -->
<a id="schematypeconfigurationdetailslist"></a>
<a id="schema_TypeConfigurationDetailsList"></a>
<a id="tocStypeconfigurationdetailslist"></a>
<a id="tocstypeconfigurationdetailslist"></a>

```json
[
  {
    "Arn": {},
    "Alias": {},
    "Configuration": {},
    "LastUpdated": {},
    "TypeArn": {},
    "TypeName": {},
    "IsDefaultConfiguration": {}
  }
]
```

<h2 id="tocS_BoxedInteger">BoxedInteger</h2>
<!-- backwards compatibility -->
<a id="schemaboxedinteger"></a>
<a id="schema_BoxedInteger"></a>
<a id="tocSboxedinteger"></a>
<a id="tocsboxedinteger"></a>

```json
0
```

<h2 id="tocS_BoxedMaxResults">BoxedMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaboxedmaxresults"></a>
<a id="schema_BoxedMaxResults"></a>
<a id="tocSboxedmaxresults"></a>
<a id="tocsboxedmaxresults"></a>

```json
1
```

<h2 id="tocS_CallAs">CallAs</h2>
<!-- backwards compatibility -->
<a id="schemacallas"></a>
<a id="schema_CallAs"></a>
<a id="tocScallas"></a>
<a id="tocscallas"></a>

```json
"SELF"
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

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_CancelUpdateStackInput">CancelUpdateStackInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelupdatestackinput"></a>
<a id="schema_CancelUpdateStackInput"></a>
<a id="tocScancelupdatestackinput"></a>
<a id="tocscancelupdatestackinput"></a>

```json
{
  "StackName": {},
  "ClientRequestToken": {}
}
```

The input for the <a>CancelUpdateStack</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
[
  "CAPABILITY_IAM"
]
```

<h2 id="tocS_CapabilitiesReason">CapabilitiesReason</h2>
<!-- backwards compatibility -->
<a id="schemacapabilitiesreason"></a>
<a id="schema_CapabilitiesReason"></a>
<a id="tocScapabilitiesreason"></a>
<a id="tocscapabilitiesreason"></a>

```json
"string"
```

<h2 id="tocS_CausingEntity">CausingEntity</h2>
<!-- backwards compatibility -->
<a id="schemacausingentity"></a>
<a id="schema_CausingEntity"></a>
<a id="tocScausingentity"></a>
<a id="tocscausingentity"></a>

```json
"string"
```

<h2 id="tocS_ChangeType">ChangeType</h2>
<!-- backwards compatibility -->
<a id="schemachangetype"></a>
<a id="schema_ChangeType"></a>
<a id="tocSchangetype"></a>
<a id="tocschangetype"></a>

```json
"Resource"
```

<h2 id="tocS_HookInvocationCount">HookInvocationCount</h2>
<!-- backwards compatibility -->
<a id="schemahookinvocationcount"></a>
<a id="schema_HookInvocationCount"></a>
<a id="tocShookinvocationcount"></a>
<a id="tocshookinvocationcount"></a>

```json
1
```

<h2 id="tocS_ResourceChange">ResourceChange</h2>
<!-- backwards compatibility -->
<a id="schemaresourcechange"></a>
<a id="schema_ResourceChange"></a>
<a id="tocSresourcechange"></a>
<a id="tocsresourcechange"></a>

```json
{
  "Action": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "ResourceType": {},
  "Replacement": {},
  "Scope": {},
  "Details": {},
  "ChangeSetId": {},
  "ModuleInfo": {
    "TypeHierarchy": {},
    "LogicalIdHierarchy": {}
  }
}
```

The <code>ResourceChange</code> structure describes the resource and the action that CloudFormation will perform on it if you execute this change set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|LogicalResourceId|object|false|none|none|
|PhysicalResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|Replacement|object|false|none|none|
|Scope|object|false|none|none|
|Details|object|false|none|none|
|ChangeSetId|object|false|none|none|
|ModuleInfo|object|false|none|none|

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "Type": {},
  "HookInvocationCount": {},
  "ResourceChange": {
    "Action": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "ResourceType": {},
    "Replacement": {},
    "Scope": {},
    "Details": {},
    "ChangeSetId": {},
    "ModuleInfo": {
      "TypeHierarchy": {},
      "LogicalIdHierarchy": {}
    }
  }
}
```

The <code>Change</code> structure describes the changes CloudFormation will perform if you execute the change set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|HookInvocationCount|object|false|none|none|
|ResourceChange|object|false|none|none|

<h2 id="tocS_ChangeAction">ChangeAction</h2>
<!-- backwards compatibility -->
<a id="schemachangeaction"></a>
<a id="schema_ChangeAction"></a>
<a id="tocSchangeaction"></a>
<a id="tocschangeaction"></a>

```json
"Add"
```

<h2 id="tocS_HookInvocationPoint">HookInvocationPoint</h2>
<!-- backwards compatibility -->
<a id="schemahookinvocationpoint"></a>
<a id="schema_HookInvocationPoint"></a>
<a id="tocShookinvocationpoint"></a>
<a id="tocshookinvocationpoint"></a>

```json
"PRE_PROVISION"
```

<h2 id="tocS_HookFailureMode">HookFailureMode</h2>
<!-- backwards compatibility -->
<a id="schemahookfailuremode"></a>
<a id="schema_HookFailureMode"></a>
<a id="tocShookfailuremode"></a>
<a id="tocshookfailuremode"></a>

```json
"FAIL"
```

<h2 id="tocS_HookTypeName">HookTypeName</h2>
<!-- backwards compatibility -->
<a id="schemahooktypename"></a>
<a id="schema_HookTypeName"></a>
<a id="tocShooktypename"></a>
<a id="tocshooktypename"></a>

```json
"stringstri"
```

<h2 id="tocS_HookTypeVersionId">HookTypeVersionId</h2>
<!-- backwards compatibility -->
<a id="schemahooktypeversionid"></a>
<a id="schema_HookTypeVersionId"></a>
<a id="tocShooktypeversionid"></a>
<a id="tocshooktypeversionid"></a>

```json
"string"
```

<h2 id="tocS_HookTypeConfigurationVersionId">HookTypeConfigurationVersionId</h2>
<!-- backwards compatibility -->
<a id="schemahooktypeconfigurationversionid"></a>
<a id="schema_HookTypeConfigurationVersionId"></a>
<a id="tocShooktypeconfigurationversionid"></a>
<a id="tocshooktypeconfigurationversionid"></a>

```json
"string"
```

<h2 id="tocS_ChangeSetHookTargetDetails">ChangeSetHookTargetDetails</h2>
<!-- backwards compatibility -->
<a id="schemachangesethooktargetdetails"></a>
<a id="schema_ChangeSetHookTargetDetails"></a>
<a id="tocSchangesethooktargetdetails"></a>
<a id="tocschangesethooktargetdetails"></a>

```json
{
  "TargetType": {},
  "ResourceTargetDetails": {
    "LogicalResourceId": {},
    "ResourceType": {},
    "ResourceAction": {}
  }
}
```

Specifies target details for an activated hook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetType|object|false|none|none|
|ResourceTargetDetails|object|false|none|none|

<h2 id="tocS_ChangeSetHook">ChangeSetHook</h2>
<!-- backwards compatibility -->
<a id="schemachangesethook"></a>
<a id="schema_ChangeSetHook"></a>
<a id="tocSchangesethook"></a>
<a id="tocschangesethook"></a>

```json
{
  "InvocationPoint": {},
  "FailureMode": {},
  "TypeName": {},
  "TypeVersionId": {},
  "TypeConfigurationVersionId": {},
  "TargetDetails": {
    "TargetType": {},
    "ResourceTargetDetails": {
      "LogicalResourceId": {},
      "ResourceType": {},
      "ResourceAction": {}
    }
  }
}
```

Specifies the resource, the hook, and the hook version to be invoked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvocationPoint|object|false|none|none|
|FailureMode|object|false|none|none|
|TypeName|object|false|none|none|
|TypeVersionId|object|false|none|none|
|TypeConfigurationVersionId|object|false|none|none|
|TargetDetails|object|false|none|none|

<h2 id="tocS_HookTargetTypeName">HookTargetTypeName</h2>
<!-- backwards compatibility -->
<a id="schemahooktargettypename"></a>
<a id="schema_HookTargetTypeName"></a>
<a id="tocShooktargettypename"></a>
<a id="tocshooktargettypename"></a>

```json
"string"
```

<h2 id="tocS_ChangeSetHookResourceTargetDetails">ChangeSetHookResourceTargetDetails</h2>
<!-- backwards compatibility -->
<a id="schemachangesethookresourcetargetdetails"></a>
<a id="schema_ChangeSetHookResourceTargetDetails"></a>
<a id="tocSchangesethookresourcetargetdetails"></a>
<a id="tocschangesethookresourcetargetdetails"></a>

```json
{
  "LogicalResourceId": {},
  "ResourceType": {},
  "ResourceAction": {}
}
```

Specifies <code>RESOURCE</code> type target details for activated hooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogicalResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceAction|object|false|none|none|

<h2 id="tocS_HookTargetType">HookTargetType</h2>
<!-- backwards compatibility -->
<a id="schemahooktargettype"></a>
<a id="schema_HookTargetType"></a>
<a id="tocShooktargettype"></a>
<a id="tocshooktargettype"></a>

```json
"RESOURCE"
```

<h2 id="tocS_ChangeSetHooks">ChangeSetHooks</h2>
<!-- backwards compatibility -->
<a id="schemachangesethooks"></a>
<a id="schema_ChangeSetHooks"></a>
<a id="tocSchangesethooks"></a>
<a id="tocschangesethooks"></a>

```json
[
  {
    "InvocationPoint": {},
    "FailureMode": {},
    "TypeName": {},
    "TypeVersionId": {},
    "TypeConfigurationVersionId": {},
    "TargetDetails": {
      "TargetType": {},
      "ResourceTargetDetails": {
        "LogicalResourceId": {},
        "ResourceType": {},
        "ResourceAction": {}
      }
    }
  }
]
```

<h2 id="tocS_ChangeSetHooksStatus">ChangeSetHooksStatus</h2>
<!-- backwards compatibility -->
<a id="schemachangesethooksstatus"></a>
<a id="schema_ChangeSetHooksStatus"></a>
<a id="tocSchangesethooksstatus"></a>
<a id="tocschangesethooksstatus"></a>

```json
"PLANNING"
```

<h2 id="tocS_ChangeSetId">ChangeSetId</h2>
<!-- backwards compatibility -->
<a id="schemachangesetid"></a>
<a id="schema_ChangeSetId"></a>
<a id="tocSchangesetid"></a>
<a id="tocschangesetid"></a>

```json
"string"
```

<h2 id="tocS_ChangeSetName">ChangeSetName</h2>
<!-- backwards compatibility -->
<a id="schemachangesetname"></a>
<a id="schema_ChangeSetName"></a>
<a id="tocSchangesetname"></a>
<a id="tocschangesetname"></a>

```json
"string"
```

<h2 id="tocS_ChangeSetNameOrId">ChangeSetNameOrId</h2>
<!-- backwards compatibility -->
<a id="schemachangesetnameorid"></a>
<a id="schema_ChangeSetNameOrId"></a>
<a id="tocSchangesetnameorid"></a>
<a id="tocschangesetnameorid"></a>

```json
"string"
```

<h2 id="tocS_ChangeSetStatus">ChangeSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemachangesetstatus"></a>
<a id="schema_ChangeSetStatus"></a>
<a id="tocSchangesetstatus"></a>
<a id="tocschangesetstatus"></a>

```json
"CREATE_PENDING"
```

<h2 id="tocS_ChangeSetStatusReason">ChangeSetStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemachangesetstatusreason"></a>
<a id="schema_ChangeSetStatusReason"></a>
<a id="tocSchangesetstatusreason"></a>
<a id="tocschangesetstatusreason"></a>

```json
"string"
```

<h2 id="tocS_ChangeSetSummary">ChangeSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemachangesetsummary"></a>
<a id="schema_ChangeSetSummary"></a>
<a id="tocSchangesetsummary"></a>
<a id="tocschangesetsummary"></a>

```json
{
  "StackId": {},
  "StackName": {},
  "ChangeSetId": {},
  "ChangeSetName": {},
  "ExecutionStatus": {},
  "Status": {},
  "StatusReason": {},
  "CreationTime": {},
  "Description": {},
  "IncludeNestedStacks": {},
  "ParentChangeSetId": {},
  "RootChangeSetId": {}
}
```

The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|StackName|object|false|none|none|
|ChangeSetId|object|false|none|none|
|ChangeSetName|object|false|none|none|
|ExecutionStatus|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|CreationTime|object|false|none|none|
|Description|object|false|none|none|
|IncludeNestedStacks|object|false|none|none|
|ParentChangeSetId|object|false|none|none|
|RootChangeSetId|object|false|none|none|

<h2 id="tocS_ChangeSetSummaries">ChangeSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemachangesetsummaries"></a>
<a id="schema_ChangeSetSummaries"></a>
<a id="tocSchangesetsummaries"></a>
<a id="tocschangesetsummaries"></a>

```json
[
  {
    "StackId": {},
    "StackName": {},
    "ChangeSetId": {},
    "ChangeSetName": {},
    "ExecutionStatus": {},
    "Status": {},
    "StatusReason": {},
    "CreationTime": {},
    "Description": {},
    "IncludeNestedStacks": {},
    "ParentChangeSetId": {},
    "RootChangeSetId": {}
  }
]
```

<h2 id="tocS_ExecutionStatus">ExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatus"></a>
<a id="schema_ExecutionStatus"></a>
<a id="tocSexecutionstatus"></a>
<a id="tocsexecutionstatus"></a>

```json
"UNAVAILABLE"
```

<h2 id="tocS_CreationTime">CreationTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationtime"></a>
<a id="schema_CreationTime"></a>
<a id="tocScreationtime"></a>
<a id="tocscreationtime"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_IncludeNestedStacks">IncludeNestedStacks</h2>
<!-- backwards compatibility -->
<a id="schemaincludenestedstacks"></a>
<a id="schema_IncludeNestedStacks"></a>
<a id="tocSincludenestedstacks"></a>
<a id="tocsincludenestedstacks"></a>

```json
true
```

<h2 id="tocS_ChangeSetType">ChangeSetType</h2>
<!-- backwards compatibility -->
<a id="schemachangesettype"></a>
<a id="schema_ChangeSetType"></a>
<a id="tocSchangesettype"></a>
<a id="tocschangesettype"></a>

```json
"CREATE"
```

<h2 id="tocS_ChangeSource">ChangeSource</h2>
<!-- backwards compatibility -->
<a id="schemachangesource"></a>
<a id="schema_ChangeSource"></a>
<a id="tocSchangesource"></a>
<a id="tocschangesource"></a>

```json
"ResourceReference"
```

<h2 id="tocS_Changes">Changes</h2>
<!-- backwards compatibility -->
<a id="schemachanges"></a>
<a id="schema_Changes"></a>
<a id="tocSchanges"></a>
<a id="tocschanges"></a>

```json
[
  {
    "Type": {},
    "HookInvocationCount": {},
    "ResourceChange": {
      "Action": {},
      "LogicalResourceId": {},
      "PhysicalResourceId": {},
      "ResourceType": {},
      "Replacement": {},
      "Scope": {},
      "Details": {},
      "ChangeSetId": {},
      "ModuleInfo": {
        "TypeHierarchy": {},
        "LogicalIdHierarchy": {}
      }
    }
  }
]
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

<h2 id="tocS_ConfigurationSchema">ConfigurationSchema</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationschema"></a>
<a id="schema_ConfigurationSchema"></a>
<a id="tocSconfigurationschema"></a>
<a id="tocsconfigurationschema"></a>

```json
"string"
```

<h2 id="tocS_ConnectionArn">ConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionarn"></a>
<a id="schema_ConnectionArn"></a>
<a id="tocSconnectionarn"></a>
<a id="tocsconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_StackNameOrId">StackNameOrId</h2>
<!-- backwards compatibility -->
<a id="schemastacknameorid"></a>
<a id="schema_StackNameOrId"></a>
<a id="tocSstacknameorid"></a>
<a id="tocsstacknameorid"></a>

```json
"string"
```

<h2 id="tocS_RoleARN">RoleARN</h2>
<!-- backwards compatibility -->
<a id="schemarolearn-1"></a>
<a id="schema_RoleARN"></a>
<a id="tocSrolearn-1"></a>
<a id="tocsrolearn-1"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ResourcesToSkip">ResourcesToSkip</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestoskip"></a>
<a id="schema_ResourcesToSkip"></a>
<a id="tocSresourcestoskip"></a>
<a id="tocsresourcestoskip"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ContinueUpdateRollbackInput">ContinueUpdateRollbackInput</h2>
<!-- backwards compatibility -->
<a id="schemacontinueupdaterollbackinput"></a>
<a id="schema_ContinueUpdateRollbackInput"></a>
<a id="tocScontinueupdaterollbackinput"></a>
<a id="tocscontinueupdaterollbackinput"></a>

```json
{
  "StackName": {},
  "RoleARN": {},
  "ResourcesToSkip": {},
  "ClientRequestToken": {}
}
```

The input for the <a>ContinueUpdateRollback</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|RoleARN|object|false|none|none|
|ResourcesToSkip|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_TemplateBody">TemplateBody</h2>
<!-- backwards compatibility -->
<a id="schematemplatebody"></a>
<a id="schema_TemplateBody"></a>
<a id="tocStemplatebody"></a>
<a id="tocstemplatebody"></a>

```json
"string"
```

<h2 id="tocS_TemplateURL">TemplateURL</h2>
<!-- backwards compatibility -->
<a id="schematemplateurl"></a>
<a id="schema_TemplateURL"></a>
<a id="tocStemplateurl"></a>
<a id="tocstemplateurl"></a>

```json
"string"
```

<h2 id="tocS_UsePreviousTemplate">UsePreviousTemplate</h2>
<!-- backwards compatibility -->
<a id="schemauseprevioustemplate"></a>
<a id="schema_UsePreviousTemplate"></a>
<a id="tocSuseprevioustemplate"></a>
<a id="tocsuseprevioustemplate"></a>

```json
true
```

<h2 id="tocS_Parameters">Parameters</h2>
<!-- backwards compatibility -->
<a id="schemaparameters"></a>
<a id="schema_Parameters"></a>
<a id="tocSparameters"></a>
<a id="tocsparameters"></a>

```json
[
  {
    "ParameterKey": {},
    "ParameterValue": {},
    "UsePreviousValue": {},
    "ResolvedValue": {}
  }
]
```

<h2 id="tocS_ResourceTypes">ResourceTypes</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypes"></a>
<a id="schema_ResourceTypes"></a>
<a id="tocSresourcetypes"></a>
<a id="tocsresourcetypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RollbackConfiguration">RollbackConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarollbackconfiguration"></a>
<a id="schema_RollbackConfiguration"></a>
<a id="tocSrollbackconfiguration"></a>
<a id="tocsrollbackconfiguration"></a>

```json
{
  "RollbackTriggers": {},
  "MonitoringTimeInMinutes": {}
}
```

<p>Structure containing the rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RollbackTriggers|object|false|none|none|
|MonitoringTimeInMinutes|object|false|none|none|

<h2 id="tocS_NotificationARNs">NotificationARNs</h2>
<!-- backwards compatibility -->
<a id="schemanotificationarns"></a>
<a id="schema_NotificationARNs"></a>
<a id="tocSnotificationarns"></a>
<a id="tocsnotificationarns"></a>

```json
[
  "string"
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
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ResourcesToImport">ResourcesToImport</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestoimport"></a>
<a id="schema_ResourcesToImport"></a>
<a id="tocSresourcestoimport"></a>
<a id="tocsresourcestoimport"></a>

```json
[
  {
    "ResourceType": {},
    "LogicalResourceId": {},
    "ResourceIdentifier": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_OnStackFailure">OnStackFailure</h2>
<!-- backwards compatibility -->
<a id="schemaonstackfailure"></a>
<a id="schema_OnStackFailure"></a>
<a id="tocSonstackfailure"></a>
<a id="tocsonstackfailure"></a>

```json
"DO_NOTHING"
```

<h2 id="tocS_CreateChangeSetInput">CreateChangeSetInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatechangesetinput"></a>
<a id="schema_CreateChangeSetInput"></a>
<a id="tocScreatechangesetinput"></a>
<a id="tocscreatechangesetinput"></a>

```json
{
  "StackName": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "UsePreviousTemplate": {},
  "Parameters": {},
  "Capabilities": {},
  "ResourceTypes": {},
  "RoleARN": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "NotificationARNs": {},
  "Tags": {},
  "ChangeSetName": {},
  "ClientToken": {},
  "Description": {},
  "ChangeSetType": {},
  "ResourcesToImport": {},
  "IncludeNestedStacks": {},
  "OnStackFailure": {}
}
```

The input for the <a>CreateChangeSet</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
|UsePreviousTemplate|object|false|none|none|
|Parameters|object|false|none|none|
|Capabilities|object|false|none|none|
|ResourceTypes|object|false|none|none|
|RoleARN|object|false|none|none|
|RollbackConfiguration|object|false|none|none|
|NotificationARNs|object|false|none|none|
|Tags|object|false|none|none|
|ChangeSetName|object|true|none|none|
|ClientToken|object|false|none|none|
|Description|object|false|none|none|
|ChangeSetType|object|false|none|none|
|ResourcesToImport|object|false|none|none|
|IncludeNestedStacks|object|false|none|none|
|OnStackFailure|object|false|none|none|

<h2 id="tocS_DisableRollback">DisableRollback</h2>
<!-- backwards compatibility -->
<a id="schemadisablerollback"></a>
<a id="schema_DisableRollback"></a>
<a id="tocSdisablerollback"></a>
<a id="tocsdisablerollback"></a>

```json
true
```

<h2 id="tocS_TimeoutMinutes">TimeoutMinutes</h2>
<!-- backwards compatibility -->
<a id="schematimeoutminutes"></a>
<a id="schema_TimeoutMinutes"></a>
<a id="tocStimeoutminutes"></a>
<a id="tocstimeoutminutes"></a>

```json
1
```

<h2 id="tocS_OnFailure">OnFailure</h2>
<!-- backwards compatibility -->
<a id="schemaonfailure"></a>
<a id="schema_OnFailure"></a>
<a id="tocSonfailure"></a>
<a id="tocsonfailure"></a>

```json
"DO_NOTHING"
```

<h2 id="tocS_StackPolicyBody">StackPolicyBody</h2>
<!-- backwards compatibility -->
<a id="schemastackpolicybody"></a>
<a id="schema_StackPolicyBody"></a>
<a id="tocSstackpolicybody"></a>
<a id="tocsstackpolicybody"></a>

```json
"string"
```

<h2 id="tocS_StackPolicyURL">StackPolicyURL</h2>
<!-- backwards compatibility -->
<a id="schemastackpolicyurl"></a>
<a id="schema_StackPolicyURL"></a>
<a id="tocSstackpolicyurl"></a>
<a id="tocsstackpolicyurl"></a>

```json
"string"
```

<h2 id="tocS_EnableTerminationProtection">EnableTerminationProtection</h2>
<!-- backwards compatibility -->
<a id="schemaenableterminationprotection"></a>
<a id="schema_EnableTerminationProtection"></a>
<a id="tocSenableterminationprotection"></a>
<a id="tocsenableterminationprotection"></a>

```json
true
```

<h2 id="tocS_RetainExceptOnCreate">RetainExceptOnCreate</h2>
<!-- backwards compatibility -->
<a id="schemaretainexceptoncreate"></a>
<a id="schema_RetainExceptOnCreate"></a>
<a id="tocSretainexceptoncreate"></a>
<a id="tocsretainexceptoncreate"></a>

```json
true
```

<h2 id="tocS_CreateStackInput">CreateStackInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackinput"></a>
<a id="schema_CreateStackInput"></a>
<a id="tocScreatestackinput"></a>
<a id="tocscreatestackinput"></a>

```json
{
  "StackName": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "Parameters": {},
  "DisableRollback": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "TimeoutInMinutes": {},
  "NotificationARNs": {},
  "Capabilities": {},
  "ResourceTypes": {},
  "RoleARN": {},
  "OnFailure": {},
  "StackPolicyBody": {},
  "StackPolicyURL": {},
  "Tags": {},
  "ClientRequestToken": {},
  "EnableTerminationProtection": {},
  "RetainExceptOnCreate": {}
}
```

The input for <a>CreateStack</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
|Parameters|object|false|none|none|
|DisableRollback|object|false|none|none|
|RollbackConfiguration|object|false|none|none|
|TimeoutInMinutes|object|false|none|none|
|NotificationARNs|object|false|none|none|
|Capabilities|object|false|none|none|
|ResourceTypes|object|false|none|none|
|RoleARN|object|false|none|none|
|OnFailure|object|false|none|none|
|StackPolicyBody|object|false|none|none|
|StackPolicyURL|object|false|none|none|
|Tags|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|EnableTerminationProtection|object|false|none|none|
|RetainExceptOnCreate|object|false|none|none|

<h2 id="tocS_StackSetName">StackSetName</h2>
<!-- backwards compatibility -->
<a id="schemastacksetname"></a>
<a id="schema_StackSetName"></a>
<a id="tocSstacksetname"></a>
<a id="tocsstacksetname"></a>

```json
"string"
```

<h2 id="tocS_DeploymentTargets">DeploymentTargets</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttargets"></a>
<a id="schema_DeploymentTargets"></a>
<a id="tocSdeploymenttargets"></a>
<a id="tocsdeploymenttargets"></a>

```json
{
  "Accounts": {},
  "AccountsUrl": {},
  "OrganizationalUnitIds": {},
  "AccountFilterType": {}
}
```

<p>[Service-managed permissions] The Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|AccountsUrl|object|false|none|none|
|OrganizationalUnitIds|object|false|none|none|
|AccountFilterType|object|false|none|none|

<h2 id="tocS_StackSetOperationPreferences">StackSetOperationPreferences</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationpreferences"></a>
<a id="schema_StackSetOperationPreferences"></a>
<a id="tocSstacksetoperationpreferences"></a>
<a id="tocsstacksetoperationpreferences"></a>

```json
{
  "RegionConcurrencyType": {},
  "RegionOrder": {},
  "FailureToleranceCount": {},
  "FailureTolerancePercentage": {},
  "MaxConcurrentCount": {},
  "MaxConcurrentPercentage": {}
}
```

<p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionConcurrencyType|object|false|none|none|
|RegionOrder|object|false|none|none|
|FailureToleranceCount|object|false|none|none|
|FailureTolerancePercentage|object|false|none|none|
|MaxConcurrentCount|object|false|none|none|
|MaxConcurrentPercentage|object|false|none|none|

<h2 id="tocS_CreateStackInstancesInput">CreateStackInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestackinstancesinput"></a>
<a id="schema_CreateStackInstancesInput"></a>
<a id="tocScreatestackinstancesinput"></a>
<a id="tocscreatestackinstancesinput"></a>

```json
{
  "StackSetName": {},
  "Accounts": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "Regions": {},
  "ParameterOverrides": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|Accounts|object|false|none|none|
|DeploymentTargets|object|false|none|none|
|Regions|object|true|none|none|
|ParameterOverrides|object|false|none|none|
|OperationPreferences|object|false|none|none|
|OperationId|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_ExecutionRoleName">ExecutionRoleName</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionrolename"></a>
<a id="schema_ExecutionRoleName"></a>
<a id="tocSexecutionrolename"></a>
<a id="tocsexecutionrolename"></a>

```json
"string"
```

<h2 id="tocS_PermissionModels">PermissionModels</h2>
<!-- backwards compatibility -->
<a id="schemapermissionmodels"></a>
<a id="schema_PermissionModels"></a>
<a id="tocSpermissionmodels"></a>
<a id="tocspermissionmodels"></a>

```json
"SERVICE_MANAGED"
```

<h2 id="tocS_ManagedExecution">ManagedExecution</h2>
<!-- backwards compatibility -->
<a id="schemamanagedexecution"></a>
<a id="schema_ManagedExecution"></a>
<a id="tocSmanagedexecution"></a>
<a id="tocsmanagedexecution"></a>

```json
{
  "Active": {}
}
```

Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|object|false|none|none|

<h2 id="tocS_CreateStackSetInput">CreateStackSetInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestacksetinput"></a>
<a id="schema_CreateStackSetInput"></a>
<a id="tocScreatestacksetinput"></a>
<a id="tocscreatestacksetinput"></a>

```json
{
  "StackSetName": {},
  "Description": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "StackId": {},
  "Parameters": {},
  "Capabilities": {},
  "Tags": {},
  "AdministrationRoleARN": {},
  "ExecutionRoleName": {},
  "PermissionModel": {},
  "AutoDeployment": {
    "Enabled": {},
    "RetainStacksOnAccountRemoval": {}
  },
  "CallAs": {},
  "ClientRequestToken": {},
  "ManagedExecution": {
    "Active": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|Description|object|false|none|none|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
|StackId|object|false|none|none|
|Parameters|object|false|none|none|
|Capabilities|object|false|none|none|
|Tags|object|false|none|none|
|AdministrationRoleARN|object|false|none|none|
|ExecutionRoleName|object|false|none|none|
|PermissionModel|object|false|none|none|
|AutoDeployment|object|false|none|none|
|CallAs|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|ManagedExecution|object|false|none|none|

<h2 id="tocS_StackSetId">StackSetId</h2>
<!-- backwards compatibility -->
<a id="schemastacksetid"></a>
<a id="schema_StackSetId"></a>
<a id="tocSstacksetid"></a>
<a id="tocsstacksetid"></a>

```json
"string"
```

<h2 id="tocS_DeactivateOrganizationsAccessInput">DeactivateOrganizationsAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateorganizationsaccessinput"></a>
<a id="schema_DeactivateOrganizationsAccessInput"></a>
<a id="tocSdeactivateorganizationsaccessinput"></a>
<a id="tocsdeactivateorganizationsaccessinput"></a>

```json
{}
```

<h2 id="tocS_DeactivateTypeInput">DeactivateTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatetypeinput"></a>
<a id="schema_DeactivateTypeInput"></a>
<a id="tocSdeactivatetypeinput"></a>
<a id="tocsdeactivatetypeinput"></a>

```json
{
  "TypeName": {},
  "Type": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|false|none|none|
|Type|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_DeleteChangeSetInput">DeleteChangeSetInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletechangesetinput"></a>
<a id="schema_DeleteChangeSetInput"></a>
<a id="tocSdeletechangesetinput"></a>
<a id="tocsdeletechangesetinput"></a>

```json
{
  "ChangeSetName": {},
  "StackName": {}
}
```

The input for the <a>DeleteChangeSet</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetName|object|true|none|none|
|StackName|object|false|none|none|

<h2 id="tocS_RetainResources">RetainResources</h2>
<!-- backwards compatibility -->
<a id="schemaretainresources"></a>
<a id="schema_RetainResources"></a>
<a id="tocSretainresources"></a>
<a id="tocsretainresources"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeleteStackInput">DeleteStackInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestackinput"></a>
<a id="schema_DeleteStackInput"></a>
<a id="tocSdeletestackinput"></a>
<a id="tocsdeletestackinput"></a>

```json
{
  "StackName": {},
  "RetainResources": {},
  "RoleARN": {},
  "ClientRequestToken": {}
}
```

The input for <a>DeleteStack</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|RetainResources|object|false|none|none|
|RoleARN|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_RetainStacks">RetainStacks</h2>
<!-- backwards compatibility -->
<a id="schemaretainstacks"></a>
<a id="schema_RetainStacks"></a>
<a id="tocSretainstacks"></a>
<a id="tocsretainstacks"></a>

```json
true
```

<h2 id="tocS_DeleteStackInstancesInput">DeleteStackInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestackinstancesinput"></a>
<a id="schema_DeleteStackInstancesInput"></a>
<a id="tocSdeletestackinstancesinput"></a>
<a id="tocsdeletestackinstancesinput"></a>

```json
{
  "StackSetName": {},
  "Accounts": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "Regions": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "RetainStacks": {},
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|Accounts|object|false|none|none|
|DeploymentTargets|object|false|none|none|
|Regions|object|true|none|none|
|OperationPreferences|object|false|none|none|
|RetainStacks|object|true|none|none|
|OperationId|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_DeleteStackSetInput">DeleteStackSetInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestacksetinput"></a>
<a id="schema_DeleteStackSetInput"></a>
<a id="tocSdeletestacksetinput"></a>
<a id="tocsdeletestacksetinput"></a>

```json
{
  "StackSetName": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_DeletionTime">DeletionTime</h2>
<!-- backwards compatibility -->
<a id="schemadeletiontime"></a>
<a id="schema_DeletionTime"></a>
<a id="tocSdeletiontime"></a>
<a id="tocsdeletiontime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeprecatedStatus">DeprecatedStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeprecatedstatus"></a>
<a id="schema_DeprecatedStatus"></a>
<a id="tocSdeprecatedstatus"></a>
<a id="tocsdeprecatedstatus"></a>

```json
"LIVE"
```

<h2 id="tocS_RegistryType">RegistryType</h2>
<!-- backwards compatibility -->
<a id="schemaregistrytype"></a>
<a id="schema_RegistryType"></a>
<a id="tocSregistrytype"></a>
<a id="tocsregistrytype"></a>

```json
"RESOURCE"
```

<h2 id="tocS_TypeVersionId">TypeVersionId</h2>
<!-- backwards compatibility -->
<a id="schematypeversionid"></a>
<a id="schema_TypeVersionId"></a>
<a id="tocStypeversionid"></a>
<a id="tocstypeversionid"></a>

```json
"string"
```

<h2 id="tocS_DeregisterTypeInput">DeregisterTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertypeinput"></a>
<a id="schema_DeregisterTypeInput"></a>
<a id="tocSderegistertypeinput"></a>
<a id="tocsderegistertypeinput"></a>

```json
{
  "Arn": {},
  "Type": {},
  "TypeName": {},
  "VersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_DescribeAccountLimitsInput">DescribeAccountLimitsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountlimitsinput"></a>
<a id="schema_DescribeAccountLimitsInput"></a>
<a id="tocSdescribeaccountlimitsinput"></a>
<a id="tocsdescribeaccountlimitsinput"></a>

```json
{
  "NextToken": {}
}
```

The input for the <a>DescribeAccountLimits</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeChangeSetHooksInput">DescribeChangeSetHooksInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribechangesethooksinput"></a>
<a id="schema_DescribeChangeSetHooksInput"></a>
<a id="tocSdescribechangesethooksinput"></a>
<a id="tocsdescribechangesethooksinput"></a>

```json
{
  "ChangeSetName": {},
  "StackName": {},
  "NextToken": {},
  "LogicalResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetName|object|true|none|none|
|StackName|object|false|none|none|
|NextToken|object|false|none|none|
|LogicalResourceId|object|false|none|none|

<h2 id="tocS_DescribeChangeSetInput">DescribeChangeSetInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribechangesetinput"></a>
<a id="schema_DescribeChangeSetInput"></a>
<a id="tocSdescribechangesetinput"></a>
<a id="tocsdescribechangesetinput"></a>

```json
{
  "ChangeSetName": {},
  "StackName": {},
  "NextToken": {}
}
```

The input for the <a>DescribeChangeSet</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetName|object|true|none|none|
|StackName|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrganizationsAccessInput">DescribeOrganizationsAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationsaccessinput"></a>
<a id="schema_DescribeOrganizationsAccessInput"></a>
<a id="tocSdescribeorganizationsaccessinput"></a>
<a id="tocsdescribeorganizationsaccessinput"></a>

```json
{
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAs|object|false|none|none|

<h2 id="tocS_OrganizationStatus">OrganizationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationstatus"></a>
<a id="schema_OrganizationStatus"></a>
<a id="tocSorganizationstatus"></a>
<a id="tocsorganizationstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_DescribePublisherInput">DescribePublisherInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribepublisherinput"></a>
<a id="schema_DescribePublisherInput"></a>
<a id="tocSdescribepublisherinput"></a>
<a id="tocsdescribepublisherinput"></a>

```json
{
  "PublisherId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublisherId|object|false|none|none|

<h2 id="tocS_PublisherStatus">PublisherStatus</h2>
<!-- backwards compatibility -->
<a id="schemapublisherstatus"></a>
<a id="schema_PublisherStatus"></a>
<a id="tocSpublisherstatus"></a>
<a id="tocspublisherstatus"></a>

```json
"VERIFIED"
```

<h2 id="tocS_IdentityProvider">IdentityProvider</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovider"></a>
<a id="schema_IdentityProvider"></a>
<a id="tocSidentityprovider"></a>
<a id="tocsidentityprovider"></a>

```json
"AWS_Marketplace"
```

<h2 id="tocS_PublisherProfile">PublisherProfile</h2>
<!-- backwards compatibility -->
<a id="schemapublisherprofile"></a>
<a id="schema_PublisherProfile"></a>
<a id="tocSpublisherprofile"></a>
<a id="tocspublisherprofile"></a>

```json
"string"
```

<h2 id="tocS_StackDriftDetectionId">StackDriftDetectionId</h2>
<!-- backwards compatibility -->
<a id="schemastackdriftdetectionid"></a>
<a id="schema_StackDriftDetectionId"></a>
<a id="tocSstackdriftdetectionid"></a>
<a id="tocsstackdriftdetectionid"></a>

```json
"string"
```

<h2 id="tocS_DescribeStackDriftDetectionStatusInput">DescribeStackDriftDetectionStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackdriftdetectionstatusinput"></a>
<a id="schema_DescribeStackDriftDetectionStatusInput"></a>
<a id="tocSdescribestackdriftdetectionstatusinput"></a>
<a id="tocsdescribestackdriftdetectionstatusinput"></a>

```json
{
  "StackDriftDetectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackDriftDetectionId|object|true|none|none|

<h2 id="tocS_StackDriftStatus">StackDriftStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackdriftstatus"></a>
<a id="schema_StackDriftStatus"></a>
<a id="tocSstackdriftstatus"></a>
<a id="tocsstackdriftstatus"></a>

```json
"DRIFTED"
```

<h2 id="tocS_StackDriftDetectionStatus">StackDriftDetectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackdriftdetectionstatus"></a>
<a id="schema_StackDriftDetectionStatus"></a>
<a id="tocSstackdriftdetectionstatus"></a>
<a id="tocsstackdriftdetectionstatus"></a>

```json
"DETECTION_IN_PROGRESS"
```

<h2 id="tocS_StackDriftDetectionStatusReason">StackDriftDetectionStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastackdriftdetectionstatusreason"></a>
<a id="schema_StackDriftDetectionStatusReason"></a>
<a id="tocSstackdriftdetectionstatusreason"></a>
<a id="tocsstackdriftdetectionstatusreason"></a>

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

<h2 id="tocS_DescribeStackEventsInput">DescribeStackEventsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackeventsinput"></a>
<a id="schema_DescribeStackEventsInput"></a>
<a id="tocSdescribestackeventsinput"></a>
<a id="tocsdescribestackeventsinput"></a>

```json
{
  "StackName": {},
  "NextToken": {}
}
```

The input for <a>DescribeStackEvents</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StackEvents">StackEvents</h2>
<!-- backwards compatibility -->
<a id="schemastackevents"></a>
<a id="schema_StackEvents"></a>
<a id="tocSstackevents"></a>
<a id="tocsstackevents"></a>

```json
[
  {
    "StackId": {},
    "EventId": {},
    "StackName": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "ResourceType": {},
    "Timestamp": {},
    "ResourceStatus": {},
    "ResourceStatusReason": {},
    "ResourceProperties": {},
    "ClientRequestToken": {},
    "HookType": {},
    "HookStatus": {},
    "HookStatusReason": {},
    "HookInvocationPoint": {},
    "HookFailureMode": {}
  }
]
```

<h2 id="tocS_DescribeStackInstanceInput">DescribeStackInstanceInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackinstanceinput"></a>
<a id="schema_DescribeStackInstanceInput"></a>
<a id="tocSdescribestackinstanceinput"></a>
<a id="tocsdescribestackinstanceinput"></a>

```json
{
  "StackSetName": {},
  "StackInstanceAccount": {},
  "StackInstanceRegion": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|StackInstanceAccount|object|true|none|none|
|StackInstanceRegion|object|true|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_StackInstance">StackInstance</h2>
<!-- backwards compatibility -->
<a id="schemastackinstance"></a>
<a id="schema_StackInstance"></a>
<a id="tocSstackinstance"></a>
<a id="tocsstackinstance"></a>

```json
{
  "StackSetId": {},
  "Region": {},
  "Account": {},
  "StackId": {},
  "ParameterOverrides": {},
  "Status": {},
  "StackInstanceStatus": {
    "DetailedStatus": {}
  },
  "StatusReason": {},
  "OrganizationalUnitId": {},
  "DriftStatus": {},
  "LastDriftCheckTimestamp": {},
  "LastOperationId": {}
}
```

An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, in addition to the ID of the actual stack and the stack status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetId|object|false|none|none|
|Region|object|false|none|none|
|Account|object|false|none|none|
|StackId|object|false|none|none|
|ParameterOverrides|object|false|none|none|
|Status|object|false|none|none|
|StackInstanceStatus|object|false|none|none|
|StatusReason|object|false|none|none|
|OrganizationalUnitId|object|false|none|none|
|DriftStatus|object|false|none|none|
|LastDriftCheckTimestamp|object|false|none|none|
|LastOperationId|object|false|none|none|

<h2 id="tocS_StackResourceDriftStatusFilters">StackResourceDriftStatusFilters</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcedriftstatusfilters"></a>
<a id="schema_StackResourceDriftStatusFilters"></a>
<a id="tocSstackresourcedriftstatusfilters"></a>
<a id="tocsstackresourcedriftstatusfilters"></a>

```json
[
  "IN_SYNC"
]
```

<h2 id="tocS_DescribeStackResourceDriftsInput">DescribeStackResourceDriftsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackresourcedriftsinput"></a>
<a id="schema_DescribeStackResourceDriftsInput"></a>
<a id="tocSdescribestackresourcedriftsinput"></a>
<a id="tocsdescribestackresourcedriftsinput"></a>

```json
{
  "StackName": {},
  "StackResourceDriftStatusFilters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|StackResourceDriftStatusFilters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_StackResourceDrifts">StackResourceDrifts</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcedrifts"></a>
<a id="schema_StackResourceDrifts"></a>
<a id="tocSstackresourcedrifts"></a>
<a id="tocsstackresourcedrifts"></a>

```json
[
  {
    "StackId": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "PhysicalResourceIdContext": {},
    "ResourceType": {},
    "ExpectedProperties": {},
    "ActualProperties": {},
    "PropertyDifferences": {},
    "StackResourceDriftStatus": {},
    "Timestamp": {},
    "ModuleInfo": {
      "TypeHierarchy": {},
      "LogicalIdHierarchy": {}
    }
  }
]
```

<h2 id="tocS_DescribeStackResourceInput">DescribeStackResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackresourceinput"></a>
<a id="schema_DescribeStackResourceInput"></a>
<a id="tocSdescribestackresourceinput"></a>
<a id="tocsdescribestackresourceinput"></a>

```json
{
  "StackName": {},
  "LogicalResourceId": {}
}
```

The input for <a>DescribeStackResource</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|LogicalResourceId|object|true|none|none|

<h2 id="tocS_StackResourceDetail">StackResourceDetail</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcedetail"></a>
<a id="schema_StackResourceDetail"></a>
<a id="tocSstackresourcedetail"></a>
<a id="tocsstackresourcedetail"></a>

```json
{
  "StackName": {},
  "StackId": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "ResourceType": {},
  "LastUpdatedTimestamp": {},
  "ResourceStatus": {},
  "ResourceStatusReason": {},
  "Description": {},
  "Metadata": {},
  "DriftInformation": {
    "StackResourceDriftStatus": {},
    "LastCheckTimestamp": {}
  },
  "ModuleInfo": {
    "TypeHierarchy": {},
    "LogicalIdHierarchy": {}
  }
}
```

Contains detailed information about the specified stack resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|StackId|object|false|none|none|
|LogicalResourceId|object|true|none|none|
|PhysicalResourceId|object|false|none|none|
|ResourceType|object|true|none|none|
|LastUpdatedTimestamp|object|true|none|none|
|ResourceStatus|object|true|none|none|
|ResourceStatusReason|object|false|none|none|
|Description|object|false|none|none|
|Metadata|object|false|none|none|
|DriftInformation|object|false|none|none|
|ModuleInfo|object|false|none|none|

<h2 id="tocS_PhysicalResourceId">PhysicalResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaphysicalresourceid"></a>
<a id="schema_PhysicalResourceId"></a>
<a id="tocSphysicalresourceid"></a>
<a id="tocsphysicalresourceid"></a>

```json
"string"
```

<h2 id="tocS_DescribeStackResourcesInput">DescribeStackResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestackresourcesinput"></a>
<a id="schema_DescribeStackResourcesInput"></a>
<a id="tocSdescribestackresourcesinput"></a>
<a id="tocsdescribestackresourcesinput"></a>

```json
{
  "StackName": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {}
}
```

The input for <a>DescribeStackResources</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|LogicalResourceId|object|false|none|none|
|PhysicalResourceId|object|false|none|none|

<h2 id="tocS_StackResources">StackResources</h2>
<!-- backwards compatibility -->
<a id="schemastackresources"></a>
<a id="schema_StackResources"></a>
<a id="tocSstackresources"></a>
<a id="tocsstackresources"></a>

```json
[
  {
    "StackName": {},
    "StackId": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "ResourceType": {},
    "Timestamp": {},
    "ResourceStatus": {},
    "ResourceStatusReason": {},
    "Description": {},
    "DriftInformation": {
      "StackResourceDriftStatus": {},
      "LastCheckTimestamp": {}
    },
    "ModuleInfo": {
      "TypeHierarchy": {},
      "LogicalIdHierarchy": {}
    }
  }
]
```

<h2 id="tocS_DescribeStackSetInput">DescribeStackSetInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksetinput"></a>
<a id="schema_DescribeStackSetInput"></a>
<a id="tocSdescribestacksetinput"></a>
<a id="tocsdescribestacksetinput"></a>

```json
{
  "StackSetName": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_DescribeStackSetOperationInput">DescribeStackSetOperationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksetoperationinput"></a>
<a id="schema_DescribeStackSetOperationInput"></a>
<a id="tocSdescribestacksetoperationinput"></a>
<a id="tocsdescribestacksetoperationinput"></a>

```json
{
  "StackSetName": {},
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|OperationId|object|true|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_StackSetOperation">StackSetOperation</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperation"></a>
<a id="schema_StackSetOperation"></a>
<a id="tocSstacksetoperation"></a>
<a id="tocsstacksetoperation"></a>

```json
{
  "OperationId": {},
  "StackSetId": {},
  "Action": {},
  "Status": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "RetainStacks": {},
  "AdministrationRoleARN": {},
  "ExecutionRoleName": {},
  "CreationTimestamp": {},
  "EndTimestamp": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "StackSetDriftDetectionDetails": {
    "DriftStatus": {},
    "DriftDetectionStatus": {},
    "LastDriftCheckTimestamp": {},
    "TotalStackInstancesCount": {},
    "DriftedStackInstancesCount": {},
    "InSyncStackInstancesCount": {},
    "InProgressStackInstancesCount": {},
    "FailedStackInstancesCount": {}
  },
  "StatusReason": {},
  "StatusDetails": {
    "FailedStackInstancesCount": {}
  }
}
```

The structure that contains information about a stack set operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|
|StackSetId|object|false|none|none|
|Action|object|false|none|none|
|Status|object|false|none|none|
|OperationPreferences|object|false|none|none|
|RetainStacks|object|false|none|none|
|AdministrationRoleARN|object|false|none|none|
|ExecutionRoleName|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|EndTimestamp|object|false|none|none|
|DeploymentTargets|object|false|none|none|
|StackSetDriftDetectionDetails|object|false|none|none|
|StatusReason|object|false|none|none|
|StatusDetails|object|false|none|none|

<h2 id="tocS_StackSet">StackSet</h2>
<!-- backwards compatibility -->
<a id="schemastackset"></a>
<a id="schema_StackSet"></a>
<a id="tocSstackset"></a>
<a id="tocsstackset"></a>

```json
{
  "StackSetName": {},
  "StackSetId": {},
  "Description": {},
  "Status": {},
  "TemplateBody": {},
  "Parameters": {},
  "Capabilities": {},
  "Tags": {},
  "StackSetARN": {},
  "AdministrationRoleARN": {},
  "ExecutionRoleName": {},
  "StackSetDriftDetectionDetails": {
    "DriftStatus": {},
    "DriftDetectionStatus": {},
    "LastDriftCheckTimestamp": {},
    "TotalStackInstancesCount": {},
    "DriftedStackInstancesCount": {},
    "InSyncStackInstancesCount": {},
    "InProgressStackInstancesCount": {},
    "FailedStackInstancesCount": {}
  },
  "AutoDeployment": {
    "Enabled": {},
    "RetainStacksOnAccountRemoval": {}
  },
  "PermissionModel": {},
  "OrganizationalUnitIds": {},
  "ManagedExecution": {
    "Active": {}
  },
  "Regions": {}
}
```

A structure that contains information about a stack set. A stack set enables you to provision stacks into Amazon Web Services accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, in addition to any parameters and capabilities that the template requires.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|false|none|none|
|StackSetId|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|TemplateBody|object|false|none|none|
|Parameters|object|false|none|none|
|Capabilities|object|false|none|none|
|Tags|object|false|none|none|
|StackSetARN|object|false|none|none|
|AdministrationRoleARN|object|false|none|none|
|ExecutionRoleName|object|false|none|none|
|StackSetDriftDetectionDetails|object|false|none|none|
|AutoDeployment|object|false|none|none|
|PermissionModel|object|false|none|none|
|OrganizationalUnitIds|object|false|none|none|
|ManagedExecution|object|false|none|none|
|Regions|object|false|none|none|

<h2 id="tocS_DescribeStacksInput">DescribeStacksInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestacksinput"></a>
<a id="schema_DescribeStacksInput"></a>
<a id="tocSdescribestacksinput"></a>
<a id="tocsdescribestacksinput"></a>

```json
{
  "StackName": {},
  "NextToken": {}
}
```

The input for <a>DescribeStacks</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Stacks">Stacks</h2>
<!-- backwards compatibility -->
<a id="schemastacks"></a>
<a id="schema_Stacks"></a>
<a id="tocSstacks"></a>
<a id="tocsstacks"></a>

```json
[
  {
    "StackId": {},
    "StackName": {},
    "ChangeSetId": {},
    "Description": {},
    "Parameters": {},
    "CreationTime": {},
    "DeletionTime": {},
    "LastUpdatedTime": {},
    "RollbackConfiguration": {
      "RollbackTriggers": {},
      "MonitoringTimeInMinutes": {}
    },
    "StackStatus": {},
    "StackStatusReason": {},
    "DisableRollback": {},
    "NotificationARNs": {},
    "TimeoutInMinutes": {},
    "Capabilities": {},
    "Outputs": {},
    "RoleARN": {},
    "Tags": {},
    "EnableTerminationProtection": {},
    "ParentId": {},
    "RootId": {},
    "DriftInformation": {
      "StackDriftStatus": {},
      "LastCheckTimestamp": {}
    },
    "RetainExceptOnCreate": {}
  }
]
```

<h2 id="tocS_TypeArn">TypeArn</h2>
<!-- backwards compatibility -->
<a id="schematypearn"></a>
<a id="schema_TypeArn"></a>
<a id="tocStypearn"></a>
<a id="tocstypearn"></a>

```json
"string"
```

<h2 id="tocS_PublicVersionNumber">PublicVersionNumber</h2>
<!-- backwards compatibility -->
<a id="schemapublicversionnumber"></a>
<a id="schema_PublicVersionNumber"></a>
<a id="tocSpublicversionnumber"></a>
<a id="tocspublicversionnumber"></a>

```json
"string"
```

<h2 id="tocS_DescribeTypeInput">DescribeTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetypeinput"></a>
<a id="schema_DescribeTypeInput"></a>
<a id="tocSdescribetypeinput"></a>
<a id="tocsdescribetypeinput"></a>

```json
{
  "Type": {},
  "TypeName": {},
  "Arn": {},
  "VersionId": {},
  "PublisherId": {},
  "PublicVersionNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|Arn|object|false|none|none|
|VersionId|object|false|none|none|
|PublisherId|object|false|none|none|
|PublicVersionNumber|object|false|none|none|

<h2 id="tocS_IsDefaultVersion">IsDefaultVersion</h2>
<!-- backwards compatibility -->
<a id="schemaisdefaultversion"></a>
<a id="schema_IsDefaultVersion"></a>
<a id="tocSisdefaultversion"></a>
<a id="tocsisdefaultversion"></a>

```json
true
```

<h2 id="tocS_TypeTestsStatus">TypeTestsStatus</h2>
<!-- backwards compatibility -->
<a id="schematypetestsstatus"></a>
<a id="schema_TypeTestsStatus"></a>
<a id="tocStypetestsstatus"></a>
<a id="tocstypetestsstatus"></a>

```json
"PASSED"
```

<h2 id="tocS_TypeTestsStatusDescription">TypeTestsStatusDescription</h2>
<!-- backwards compatibility -->
<a id="schematypetestsstatusdescription"></a>
<a id="schema_TypeTestsStatusDescription"></a>
<a id="tocStypetestsstatusdescription"></a>
<a id="tocstypetestsstatusdescription"></a>

```json
"string"
```

<h2 id="tocS_TypeSchema">TypeSchema</h2>
<!-- backwards compatibility -->
<a id="schematypeschema"></a>
<a id="schema_TypeSchema"></a>
<a id="tocStypeschema"></a>
<a id="tocstypeschema"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningType">ProvisioningType</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningtype"></a>
<a id="schema_ProvisioningType"></a>
<a id="tocSprovisioningtype"></a>
<a id="tocsprovisioningtype"></a>

```json
"NON_PROVISIONABLE"
```

<h2 id="tocS_RequiredActivatedTypes">RequiredActivatedTypes</h2>
<!-- backwards compatibility -->
<a id="schemarequiredactivatedtypes"></a>
<a id="schema_RequiredActivatedTypes"></a>
<a id="tocSrequiredactivatedtypes"></a>
<a id="tocsrequiredactivatedtypes"></a>

```json
[
  {
    "TypeNameAlias": {},
    "OriginalTypeName": {},
    "PublisherId": {},
    "SupportedMajorVersions": {}
  }
]
```

<h2 id="tocS_Visibility">Visibility</h2>
<!-- backwards compatibility -->
<a id="schemavisibility"></a>
<a id="schema_Visibility"></a>
<a id="tocSvisibility"></a>
<a id="tocsvisibility"></a>

```json
"PUBLIC"
```

<h2 id="tocS_OptionalSecureUrl">OptionalSecureUrl</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalsecureurl"></a>
<a id="schema_OptionalSecureUrl"></a>
<a id="tocSoptionalsecureurl"></a>
<a id="tocsoptionalsecureurl"></a>

```json
"string"
```

<h2 id="tocS_IsActivated">IsActivated</h2>
<!-- backwards compatibility -->
<a id="schemaisactivated"></a>
<a id="schema_IsActivated"></a>
<a id="tocSisactivated"></a>
<a id="tocsisactivated"></a>

```json
true
```

<h2 id="tocS_RegistrationToken">RegistrationToken</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationtoken"></a>
<a id="schema_RegistrationToken"></a>
<a id="tocSregistrationtoken"></a>
<a id="tocsregistrationtoken"></a>

```json
"string"
```

<h2 id="tocS_DescribeTypeRegistrationInput">DescribeTypeRegistrationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetyperegistrationinput"></a>
<a id="schema_DescribeTypeRegistrationInput"></a>
<a id="tocSdescribetyperegistrationinput"></a>
<a id="tocsdescribetyperegistrationinput"></a>

```json
{
  "RegistrationToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegistrationToken|object|true|none|none|

<h2 id="tocS_RegistrationStatus">RegistrationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationstatus"></a>
<a id="schema_RegistrationStatus"></a>
<a id="tocSregistrationstatus"></a>
<a id="tocsregistrationstatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_LogicalResourceIds">LogicalResourceIds</h2>
<!-- backwards compatibility -->
<a id="schemalogicalresourceids"></a>
<a id="schema_LogicalResourceIds"></a>
<a id="tocSlogicalresourceids"></a>
<a id="tocslogicalresourceids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DetectStackDriftInput">DetectStackDriftInput</h2>
<!-- backwards compatibility -->
<a id="schemadetectstackdriftinput"></a>
<a id="schema_DetectStackDriftInput"></a>
<a id="tocSdetectstackdriftinput"></a>
<a id="tocsdetectstackdriftinput"></a>

```json
{
  "StackName": {},
  "LogicalResourceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|LogicalResourceIds|object|false|none|none|

<h2 id="tocS_DetectStackResourceDriftInput">DetectStackResourceDriftInput</h2>
<!-- backwards compatibility -->
<a id="schemadetectstackresourcedriftinput"></a>
<a id="schema_DetectStackResourceDriftInput"></a>
<a id="tocSdetectstackresourcedriftinput"></a>
<a id="tocsdetectstackresourcedriftinput"></a>

```json
{
  "StackName": {},
  "LogicalResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|LogicalResourceId|object|true|none|none|

<h2 id="tocS_StackResourceDrift">StackResourceDrift</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcedrift"></a>
<a id="schema_StackResourceDrift"></a>
<a id="tocSstackresourcedrift"></a>
<a id="tocsstackresourcedrift"></a>

```json
{
  "StackId": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "PhysicalResourceIdContext": {},
  "ResourceType": {},
  "ExpectedProperties": {},
  "ActualProperties": {},
  "PropertyDifferences": {},
  "StackResourceDriftStatus": {},
  "Timestamp": {},
  "ModuleInfo": {
    "TypeHierarchy": {},
    "LogicalIdHierarchy": {}
  }
}
```

<p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|LogicalResourceId|object|true|none|none|
|PhysicalResourceId|object|false|none|none|
|PhysicalResourceIdContext|object|false|none|none|
|ResourceType|object|true|none|none|
|ExpectedProperties|object|false|none|none|
|ActualProperties|object|false|none|none|
|PropertyDifferences|object|false|none|none|
|StackResourceDriftStatus|object|true|none|none|
|Timestamp|object|true|none|none|
|ModuleInfo|object|false|none|none|

<h2 id="tocS_StackSetNameOrId">StackSetNameOrId</h2>
<!-- backwards compatibility -->
<a id="schemastacksetnameorid"></a>
<a id="schema_StackSetNameOrId"></a>
<a id="tocSstacksetnameorid"></a>
<a id="tocsstacksetnameorid"></a>

```json
"string"
```

<h2 id="tocS_DetectStackSetDriftInput">DetectStackSetDriftInput</h2>
<!-- backwards compatibility -->
<a id="schemadetectstacksetdriftinput"></a>
<a id="schema_DetectStackSetDriftInput"></a>
<a id="tocSdetectstacksetdriftinput"></a>
<a id="tocsdetectstacksetdriftinput"></a>

```json
{
  "StackSetName": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|OperationPreferences|object|false|none|none|
|OperationId|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_DifferenceType">DifferenceType</h2>
<!-- backwards compatibility -->
<a id="schemadifferencetype"></a>
<a id="schema_DifferenceType"></a>
<a id="tocSdifferencetype"></a>
<a id="tocsdifferencetype"></a>

```json
"ADD"
```

<h2 id="tocS_DriftedStackInstancesCount">DriftedStackInstancesCount</h2>
<!-- backwards compatibility -->
<a id="schemadriftedstackinstancescount"></a>
<a id="schema_DriftedStackInstancesCount"></a>
<a id="tocSdriftedstackinstancescount"></a>
<a id="tocsdriftedstackinstancescount"></a>

```json
0
```

<h2 id="tocS_EstimateTemplateCostInput">EstimateTemplateCostInput</h2>
<!-- backwards compatibility -->
<a id="schemaestimatetemplatecostinput"></a>
<a id="schema_EstimateTemplateCostInput"></a>
<a id="tocSestimatetemplatecostinput"></a>
<a id="tocsestimatetemplatecostinput"></a>

```json
{
  "TemplateBody": {},
  "TemplateURL": {},
  "Parameters": {}
}
```

The input for an <a>EstimateTemplateCost</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_EvaluationType">EvaluationType</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationtype"></a>
<a id="schema_EvaluationType"></a>
<a id="tocSevaluationtype"></a>
<a id="tocsevaluationtype"></a>

```json
"Static"
```

<h2 id="tocS_EventId">EventId</h2>
<!-- backwards compatibility -->
<a id="schemaeventid"></a>
<a id="schema_EventId"></a>
<a id="tocSeventid"></a>
<a id="tocseventid"></a>

```json
"string"
```

<h2 id="tocS_ExecuteChangeSetInput">ExecuteChangeSetInput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutechangesetinput"></a>
<a id="schema_ExecuteChangeSetInput"></a>
<a id="tocSexecutechangesetinput"></a>
<a id="tocsexecutechangesetinput"></a>

```json
{
  "ChangeSetName": {},
  "StackName": {},
  "ClientRequestToken": {},
  "DisableRollback": {},
  "RetainExceptOnCreate": {}
}
```

The input for the <a>ExecuteChangeSet</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetName|object|true|none|none|
|StackName|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|DisableRollback|object|false|none|none|
|RetainExceptOnCreate|object|false|none|none|

<h2 id="tocS_ExportName">ExportName</h2>
<!-- backwards compatibility -->
<a id="schemaexportname"></a>
<a id="schema_ExportName"></a>
<a id="tocSexportname"></a>
<a id="tocsexportname"></a>

```json
"string"
```

<h2 id="tocS_ExportValue">ExportValue</h2>
<!-- backwards compatibility -->
<a id="schemaexportvalue"></a>
<a id="schema_ExportValue"></a>
<a id="tocSexportvalue"></a>
<a id="tocsexportvalue"></a>

```json
"string"
```

<h2 id="tocS_Export">Export</h2>
<!-- backwards compatibility -->
<a id="schemaexport"></a>
<a id="schema_Export"></a>
<a id="tocSexport"></a>
<a id="tocsexport"></a>

```json
{
  "ExportingStackId": {},
  "Name": {},
  "Value": {}
}
```

The <code>Export</code> structure describes the exported output values for a stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportingStackId|object|false|none|none|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Exports">Exports</h2>
<!-- backwards compatibility -->
<a id="schemaexports"></a>
<a id="schema_Exports"></a>
<a id="tocSexports"></a>
<a id="tocsexports"></a>

```json
[
  {
    "ExportingStackId": {},
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_FailedStackInstancesCount">FailedStackInstancesCount</h2>
<!-- backwards compatibility -->
<a id="schemafailedstackinstancescount"></a>
<a id="schema_FailedStackInstancesCount"></a>
<a id="tocSfailedstackinstancescount"></a>
<a id="tocsfailedstackinstancescount"></a>

```json
0
```

<h2 id="tocS_GetStackPolicyInput">GetStackPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetstackpolicyinput"></a>
<a id="schema_GetStackPolicyInput"></a>
<a id="tocSgetstackpolicyinput"></a>
<a id="tocsgetstackpolicyinput"></a>

```json
{
  "StackName": {}
}
```

The input for the <a>GetStackPolicy</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|

<h2 id="tocS_TemplateStage">TemplateStage</h2>
<!-- backwards compatibility -->
<a id="schematemplatestage"></a>
<a id="schema_TemplateStage"></a>
<a id="tocStemplatestage"></a>
<a id="tocstemplatestage"></a>

```json
"Original"
```

<h2 id="tocS_GetTemplateInput">GetTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplateinput"></a>
<a id="schema_GetTemplateInput"></a>
<a id="tocSgettemplateinput"></a>
<a id="tocsgettemplateinput"></a>

```json
{
  "StackName": {},
  "ChangeSetName": {},
  "TemplateStage": {}
}
```

The input for a <a>GetTemplate</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|ChangeSetName|object|false|none|none|
|TemplateStage|object|false|none|none|

<h2 id="tocS_StageList">StageList</h2>
<!-- backwards compatibility -->
<a id="schemastagelist"></a>
<a id="schema_StageList"></a>
<a id="tocSstagelist"></a>
<a id="tocsstagelist"></a>

```json
[
  "Original"
]
```

<h2 id="tocS_TemplateSummaryConfig">TemplateSummaryConfig</h2>
<!-- backwards compatibility -->
<a id="schematemplatesummaryconfig"></a>
<a id="schema_TemplateSummaryConfig"></a>
<a id="tocStemplatesummaryconfig"></a>
<a id="tocstemplatesummaryconfig"></a>

```json
{
  "TreatUnrecognizedResourceTypesAsWarnings": {}
}
```

Options for the <code>GetTemplateSummary</code> API action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TreatUnrecognizedResourceTypesAsWarnings|object|false|none|none|

<h2 id="tocS_GetTemplateSummaryInput">GetTemplateSummaryInput</h2>
<!-- backwards compatibility -->
<a id="schemagettemplatesummaryinput"></a>
<a id="schema_GetTemplateSummaryInput"></a>
<a id="tocSgettemplatesummaryinput"></a>
<a id="tocsgettemplatesummaryinput"></a>

```json
{
  "TemplateBody": {},
  "TemplateURL": {},
  "StackName": {},
  "StackSetName": {},
  "CallAs": {},
  "TemplateSummaryConfig": {
    "TreatUnrecognizedResourceTypesAsWarnings": {}
  }
}
```

The input for the <a>GetTemplateSummary</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
|StackName|object|false|none|none|
|StackSetName|object|false|none|none|
|CallAs|object|false|none|none|
|TemplateSummaryConfig|object|false|none|none|

<h2 id="tocS_ParameterDeclarations">ParameterDeclarations</h2>
<!-- backwards compatibility -->
<a id="schemaparameterdeclarations"></a>
<a id="schema_ParameterDeclarations"></a>
<a id="tocSparameterdeclarations"></a>
<a id="tocsparameterdeclarations"></a>

```json
[
  {
    "ParameterKey": {},
    "DefaultValue": {},
    "ParameterType": {},
    "NoEcho": {},
    "Description": {},
    "ParameterConstraints": {
      "AllowedValues": {}
    }
  }
]
```

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
"string"
```

<h2 id="tocS_TransformsList">TransformsList</h2>
<!-- backwards compatibility -->
<a id="schematransformslist"></a>
<a id="schema_TransformsList"></a>
<a id="tocStransformslist"></a>
<a id="tocstransformslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceIdentifierSummaries">ResourceIdentifierSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifiersummaries"></a>
<a id="schema_ResourceIdentifierSummaries"></a>
<a id="tocSresourceidentifiersummaries"></a>
<a id="tocsresourceidentifiersummaries"></a>

```json
[
  {
    "ResourceType": {},
    "LogicalResourceIds": {},
    "ResourceIdentifiers": {}
  }
]
```

<h2 id="tocS_Warnings">Warnings</h2>
<!-- backwards compatibility -->
<a id="schemawarnings"></a>
<a id="schema_Warnings"></a>
<a id="tocSwarnings"></a>
<a id="tocswarnings"></a>

```json
{
  "UnrecognizedResourceTypes": {}
}
```

Contains any warnings returned by the <code>GetTemplateSummary</code> API action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnrecognizedResourceTypes|object|false|none|none|

<h2 id="tocS_HandlerErrorCode">HandlerErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemahandlererrorcode"></a>
<a id="schema_HandlerErrorCode"></a>
<a id="tocShandlererrorcode"></a>
<a id="tocshandlererrorcode"></a>

```json
"NotUpdatable"
```

<h2 id="tocS_HookStatus">HookStatus</h2>
<!-- backwards compatibility -->
<a id="schemahookstatus"></a>
<a id="schema_HookStatus"></a>
<a id="tocShookstatus"></a>
<a id="tocshookstatus"></a>

```json
"HOOK_IN_PROGRESS"
```

<h2 id="tocS_HookStatusReason">HookStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemahookstatusreason"></a>
<a id="schema_HookStatusReason"></a>
<a id="tocShookstatusreason"></a>
<a id="tocshookstatusreason"></a>

```json
"string"
```

<h2 id="tocS_HookType">HookType</h2>
<!-- backwards compatibility -->
<a id="schemahooktype"></a>
<a id="schema_HookType"></a>
<a id="tocShooktype"></a>
<a id="tocshooktype"></a>

```json
"string"
```

<h2 id="tocS_StackIdList">StackIdList</h2>
<!-- backwards compatibility -->
<a id="schemastackidlist"></a>
<a id="schema_StackIdList"></a>
<a id="tocSstackidlist"></a>
<a id="tocsstackidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StackIdsUrl">StackIdsUrl</h2>
<!-- backwards compatibility -->
<a id="schemastackidsurl"></a>
<a id="schema_StackIdsUrl"></a>
<a id="tocSstackidsurl"></a>
<a id="tocsstackidsurl"></a>

```json
"string"
```

<h2 id="tocS_ImportStacksToStackSetInput">ImportStacksToStackSetInput</h2>
<!-- backwards compatibility -->
<a id="schemaimportstackstostacksetinput"></a>
<a id="schema_ImportStacksToStackSetInput"></a>
<a id="tocSimportstackstostacksetinput"></a>
<a id="tocsimportstackstostacksetinput"></a>

```json
{
  "StackSetName": {},
  "StackIds": {},
  "StackIdsUrl": {},
  "OrganizationalUnitIds": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|StackIds|object|false|none|none|
|StackIdsUrl|object|false|none|none|
|OrganizationalUnitIds|object|false|none|none|
|OperationPreferences|object|false|none|none|
|OperationId|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_Imports">Imports</h2>
<!-- backwards compatibility -->
<a id="schemaimports"></a>
<a id="schema_Imports"></a>
<a id="tocSimports"></a>
<a id="tocsimports"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InProgressStackInstancesCount">InProgressStackInstancesCount</h2>
<!-- backwards compatibility -->
<a id="schemainprogressstackinstancescount"></a>
<a id="schema_InProgressStackInstancesCount"></a>
<a id="tocSinprogressstackinstancescount"></a>
<a id="tocsinprogressstackinstancescount"></a>

```json
0
```

<h2 id="tocS_InSyncStackInstancesCount">InSyncStackInstancesCount</h2>
<!-- backwards compatibility -->
<a id="schemainsyncstackinstancescount"></a>
<a id="schema_InSyncStackInstancesCount"></a>
<a id="tocSinsyncstackinstancescount"></a>
<a id="tocsinsyncstackinstancescount"></a>

```json
0
```

<h2 id="tocS_IsDefaultConfiguration">IsDefaultConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaisdefaultconfiguration"></a>
<a id="schema_IsDefaultConfiguration"></a>
<a id="tocSisdefaultconfiguration"></a>
<a id="tocsisdefaultconfiguration"></a>

```json
true
```

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
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

<h2 id="tocS_ListChangeSetsInput">ListChangeSetsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistchangesetsinput"></a>
<a id="schema_ListChangeSetsInput"></a>
<a id="tocSlistchangesetsinput"></a>
<a id="tocslistchangesetsinput"></a>

```json
{
  "StackName": {},
  "NextToken": {}
}
```

The input for the <a>ListChangeSets</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExportsInput">ListExportsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsinput"></a>
<a id="schema_ListExportsInput"></a>
<a id="tocSlistexportsinput"></a>
<a id="tocslistexportsinput"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImportsInput">ListImportsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsinput"></a>
<a id="schema_ListImportsInput"></a>
<a id="tocSlistimportsinput"></a>
<a id="tocslistimportsinput"></a>

```json
{
  "ExportName": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportName|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListStackInstanceResourceDriftsInput">ListStackInstanceResourceDriftsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackinstanceresourcedriftsinput"></a>
<a id="schema_ListStackInstanceResourceDriftsInput"></a>
<a id="tocSliststackinstanceresourcedriftsinput"></a>
<a id="tocsliststackinstanceresourcedriftsinput"></a>

```json
{
  "StackSetName": {},
  "NextToken": {},
  "MaxResults": {},
  "StackInstanceResourceDriftStatuses": {},
  "StackInstanceAccount": {},
  "StackInstanceRegion": {},
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|StackInstanceResourceDriftStatuses|object|false|none|none|
|StackInstanceAccount|object|true|none|none|
|StackInstanceRegion|object|true|none|none|
|OperationId|object|true|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_StackInstanceResourceDriftsSummaries">StackInstanceResourceDriftsSummaries</h2>
<!-- backwards compatibility -->
<a id="schemastackinstanceresourcedriftssummaries"></a>
<a id="schema_StackInstanceResourceDriftsSummaries"></a>
<a id="tocSstackinstanceresourcedriftssummaries"></a>
<a id="tocsstackinstanceresourcedriftssummaries"></a>

```json
[
  {
    "StackId": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "PhysicalResourceIdContext": {},
    "ResourceType": {},
    "PropertyDifferences": {},
    "StackResourceDriftStatus": {},
    "Timestamp": {}
  }
]
```

<h2 id="tocS_StackInstanceFilters">StackInstanceFilters</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancefilters"></a>
<a id="schema_StackInstanceFilters"></a>
<a id="tocSstackinstancefilters"></a>
<a id="tocsstackinstancefilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ListStackInstancesInput">ListStackInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackinstancesinput"></a>
<a id="schema_ListStackInstancesInput"></a>
<a id="tocSliststackinstancesinput"></a>
<a id="tocsliststackinstancesinput"></a>

```json
{
  "StackSetName": {},
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "StackInstanceAccount": {},
  "StackInstanceRegion": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|StackInstanceAccount|object|false|none|none|
|StackInstanceRegion|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_StackInstanceSummaries">StackInstanceSummaries</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancesummaries"></a>
<a id="schema_StackInstanceSummaries"></a>
<a id="tocSstackinstancesummaries"></a>
<a id="tocsstackinstancesummaries"></a>

```json
[
  {
    "StackSetId": {},
    "Region": {},
    "Account": {},
    "StackId": {},
    "Status": {},
    "StatusReason": {},
    "StackInstanceStatus": {
      "DetailedStatus": {}
    },
    "OrganizationalUnitId": {},
    "DriftStatus": {},
    "LastDriftCheckTimestamp": {},
    "LastOperationId": {}
  }
]
```

<h2 id="tocS_ListStackResourcesInput">ListStackResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackresourcesinput"></a>
<a id="schema_ListStackResourcesInput"></a>
<a id="tocSliststackresourcesinput"></a>
<a id="tocsliststackresourcesinput"></a>

```json
{
  "StackName": {},
  "NextToken": {}
}
```

The input for the <a>ListStackResource</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StackResourceSummaries">StackResourceSummaries</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcesummaries"></a>
<a id="schema_StackResourceSummaries"></a>
<a id="tocSstackresourcesummaries"></a>
<a id="tocsstackresourcesummaries"></a>

```json
[
  {
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "ResourceType": {},
    "LastUpdatedTimestamp": {},
    "ResourceStatus": {},
    "ResourceStatusReason": {},
    "DriftInformation": {
      "StackResourceDriftStatus": {},
      "LastCheckTimestamp": {}
    },
    "ModuleInfo": {
      "TypeHierarchy": {},
      "LogicalIdHierarchy": {}
    }
  }
]
```

<h2 id="tocS_OperationResultFilters">OperationResultFilters</h2>
<!-- backwards compatibility -->
<a id="schemaoperationresultfilters"></a>
<a id="schema_OperationResultFilters"></a>
<a id="tocSoperationresultfilters"></a>
<a id="tocsoperationresultfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ListStackSetOperationResultsInput">ListStackSetOperationResultsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksetoperationresultsinput"></a>
<a id="schema_ListStackSetOperationResultsInput"></a>
<a id="tocSliststacksetoperationresultsinput"></a>
<a id="tocsliststacksetoperationresultsinput"></a>

```json
{
  "StackSetName": {},
  "OperationId": {},
  "NextToken": {},
  "MaxResults": {},
  "CallAs": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|OperationId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|CallAs|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_StackSetOperationResultSummaries">StackSetOperationResultSummaries</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationresultsummaries"></a>
<a id="schema_StackSetOperationResultSummaries"></a>
<a id="tocSstacksetoperationresultsummaries"></a>
<a id="tocsstacksetoperationresultsummaries"></a>

```json
[
  {
    "Account": {},
    "Region": {},
    "Status": {},
    "StatusReason": {},
    "AccountGateResult": {
      "Status": {},
      "StatusReason": {}
    },
    "OrganizationalUnitId": {}
  }
]
```

<h2 id="tocS_ListStackSetOperationsInput">ListStackSetOperationsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksetoperationsinput"></a>
<a id="schema_ListStackSetOperationsInput"></a>
<a id="tocSliststacksetoperationsinput"></a>
<a id="tocsliststacksetoperationsinput"></a>

```json
{
  "StackSetName": {},
  "NextToken": {},
  "MaxResults": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_StackSetOperationSummaries">StackSetOperationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationsummaries"></a>
<a id="schema_StackSetOperationSummaries"></a>
<a id="tocSstacksetoperationsummaries"></a>
<a id="tocsstacksetoperationsummaries"></a>

```json
[
  {
    "OperationId": {},
    "Action": {},
    "Status": {},
    "CreationTimestamp": {},
    "EndTimestamp": {},
    "StatusReason": {},
    "StatusDetails": {
      "FailedStackInstancesCount": {}
    },
    "OperationPreferences": {
      "RegionConcurrencyType": {},
      "RegionOrder": {},
      "FailureToleranceCount": {},
      "FailureTolerancePercentage": {},
      "MaxConcurrentCount": {},
      "MaxConcurrentPercentage": {}
    }
  }
]
```

<h2 id="tocS_StackSetStatus">StackSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemastacksetstatus"></a>
<a id="schema_StackSetStatus"></a>
<a id="tocSstacksetstatus"></a>
<a id="tocsstacksetstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ListStackSetsInput">ListStackSetsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksetsinput"></a>
<a id="schema_ListStackSetsInput"></a>
<a id="tocSliststacksetsinput"></a>
<a id="tocsliststacksetsinput"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Status": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Status|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_StackSetSummaries">StackSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemastacksetsummaries"></a>
<a id="schema_StackSetSummaries"></a>
<a id="tocSstacksetsummaries"></a>
<a id="tocsstacksetsummaries"></a>

```json
[
  {
    "StackSetName": {},
    "StackSetId": {},
    "Description": {},
    "Status": {},
    "AutoDeployment": {
      "Enabled": {},
      "RetainStacksOnAccountRemoval": {}
    },
    "PermissionModel": {},
    "DriftStatus": {},
    "LastDriftCheckTimestamp": {},
    "ManagedExecution": {
      "Active": {}
    }
  }
]
```

<h2 id="tocS_StackStatusFilter">StackStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemastackstatusfilter"></a>
<a id="schema_StackStatusFilter"></a>
<a id="tocSstackstatusfilter"></a>
<a id="tocsstackstatusfilter"></a>

```json
[
  "CREATE_IN_PROGRESS"
]
```

<h2 id="tocS_ListStacksInput">ListStacksInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststacksinput"></a>
<a id="schema_ListStacksInput"></a>
<a id="tocSliststacksinput"></a>
<a id="tocsliststacksinput"></a>

```json
{
  "NextToken": {},
  "StackStatusFilter": {}
}
```

The input for <a>ListStacks</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|StackStatusFilter|object|false|none|none|

<h2 id="tocS_StackSummaries">StackSummaries</h2>
<!-- backwards compatibility -->
<a id="schemastacksummaries"></a>
<a id="schema_StackSummaries"></a>
<a id="tocSstacksummaries"></a>
<a id="tocsstacksummaries"></a>

```json
[
  {
    "StackId": {},
    "StackName": {},
    "TemplateDescription": {},
    "CreationTime": {},
    "LastUpdatedTime": {},
    "DeletionTime": {},
    "StackStatus": {},
    "StackStatusReason": {},
    "ParentId": {},
    "RootId": {},
    "DriftInformation": {
      "StackDriftStatus": {},
      "LastCheckTimestamp": {}
    }
  }
]
```

<h2 id="tocS_ListTypeRegistrationsInput">ListTypeRegistrationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttyperegistrationsinput"></a>
<a id="schema_ListTypeRegistrationsInput"></a>
<a id="tocSlisttyperegistrationsinput"></a>
<a id="tocslisttyperegistrationsinput"></a>

```json
{
  "Type": {},
  "TypeName": {},
  "TypeArn": {},
  "RegistrationStatusFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|TypeArn|object|false|none|none|
|RegistrationStatusFilter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RegistrationTokenList">RegistrationTokenList</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationtokenlist"></a>
<a id="schema_RegistrationTokenList"></a>
<a id="tocSregistrationtokenlist"></a>
<a id="tocsregistrationtokenlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListTypeVersionsInput">ListTypeVersionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttypeversionsinput"></a>
<a id="schema_ListTypeVersionsInput"></a>
<a id="tocSlisttypeversionsinput"></a>
<a id="tocslisttypeversionsinput"></a>

```json
{
  "Type": {},
  "TypeName": {},
  "Arn": {},
  "MaxResults": {},
  "NextToken": {},
  "DeprecatedStatus": {},
  "PublisherId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|Arn|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|DeprecatedStatus|object|false|none|none|
|PublisherId|object|false|none|none|

<h2 id="tocS_TypeVersionSummaries">TypeVersionSummaries</h2>
<!-- backwards compatibility -->
<a id="schematypeversionsummaries"></a>
<a id="schema_TypeVersionSummaries"></a>
<a id="tocStypeversionsummaries"></a>
<a id="tocstypeversionsummaries"></a>

```json
[
  {
    "Type": {},
    "TypeName": {},
    "VersionId": {},
    "IsDefaultVersion": {},
    "Arn": {},
    "TimeCreated": {},
    "Description": {},
    "PublicVersionNumber": {}
  }
]
```

<h2 id="tocS_TypeFilters">TypeFilters</h2>
<!-- backwards compatibility -->
<a id="schematypefilters"></a>
<a id="schema_TypeFilters"></a>
<a id="tocStypefilters"></a>
<a id="tocstypefilters"></a>

```json
{
  "Category": {},
  "PublisherId": {},
  "TypeNamePrefix": {}
}
```

Filter criteria to use in determining which extensions to return.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Category|object|false|none|none|
|PublisherId|object|false|none|none|
|TypeNamePrefix|object|false|none|none|

<h2 id="tocS_ListTypesInput">ListTypesInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttypesinput"></a>
<a id="schema_ListTypesInput"></a>
<a id="tocSlisttypesinput"></a>
<a id="tocslisttypesinput"></a>

```json
{
  "Visibility": {},
  "ProvisioningType": {},
  "DeprecatedStatus": {},
  "Type": {},
  "Filters": {
    "Category": {},
    "PublisherId": {},
    "TypeNamePrefix": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Visibility|object|false|none|none|
|ProvisioningType|object|false|none|none|
|DeprecatedStatus|object|false|none|none|
|Type|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TypeSummaries">TypeSummaries</h2>
<!-- backwards compatibility -->
<a id="schematypesummaries"></a>
<a id="schema_TypeSummaries"></a>
<a id="tocStypesummaries"></a>
<a id="tocstypesummaries"></a>

```json
[
  {
    "Type": {},
    "TypeName": {},
    "DefaultVersionId": {},
    "TypeArn": {},
    "LastUpdated": {},
    "Description": {},
    "PublisherId": {},
    "OriginalTypeName": {},
    "PublicVersionNumber": {},
    "LatestPublicVersion": {},
    "PublisherIdentity": {},
    "PublisherName": {},
    "IsActivated": {}
  }
]
```

<h2 id="tocS_LogicalIdHierarchy">LogicalIdHierarchy</h2>
<!-- backwards compatibility -->
<a id="schemalogicalidhierarchy"></a>
<a id="schema_LogicalIdHierarchy"></a>
<a id="tocSlogicalidhierarchy"></a>
<a id="tocslogicalidhierarchy"></a>

```json
"string"
```

<h2 id="tocS_TypeHierarchy">TypeHierarchy</h2>
<!-- backwards compatibility -->
<a id="schematypehierarchy"></a>
<a id="schema_TypeHierarchy"></a>
<a id="tocStypehierarchy"></a>
<a id="tocstypehierarchy"></a>

```json
"string"
```

<h2 id="tocS_ModuleInfo">ModuleInfo</h2>
<!-- backwards compatibility -->
<a id="schemamoduleinfo"></a>
<a id="schema_ModuleInfo"></a>
<a id="tocSmoduleinfo"></a>
<a id="tocsmoduleinfo"></a>

```json
{
  "TypeHierarchy": {},
  "LogicalIdHierarchy": {}
}
```

<p>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</p> <p>For more information about modules, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html">Using modules to encapsulate and reuse resource configurations</a> in the <i>CloudFormation User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeHierarchy|object|false|none|none|
|LogicalIdHierarchy|object|false|none|none|

<h2 id="tocS_NoEcho">NoEcho</h2>
<!-- backwards compatibility -->
<a id="schemanoecho"></a>
<a id="schema_NoEcho"></a>
<a id="tocSnoecho"></a>
<a id="tocsnoecho"></a>

```json
true
```

<h2 id="tocS_OperationResultFilterName">OperationResultFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaoperationresultfiltername"></a>
<a id="schema_OperationResultFilterName"></a>
<a id="tocSoperationresultfiltername"></a>
<a id="tocsoperationresultfiltername"></a>

```json
"OPERATION_RESULT_STATUS"
```

<h2 id="tocS_OperationResultFilterValues">OperationResultFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaoperationresultfiltervalues"></a>
<a id="schema_OperationResultFilterValues"></a>
<a id="tocSoperationresultfiltervalues"></a>
<a id="tocsoperationresultfiltervalues"></a>

```json
"string"
```

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_OutputKey">OutputKey</h2>
<!-- backwards compatibility -->
<a id="schemaoutputkey"></a>
<a id="schema_OutputKey"></a>
<a id="tocSoutputkey"></a>
<a id="tocsoutputkey"></a>

```json
"string"
```

<h2 id="tocS_OutputValue">OutputValue</h2>
<!-- backwards compatibility -->
<a id="schemaoutputvalue"></a>
<a id="schema_OutputValue"></a>
<a id="tocSoutputvalue"></a>
<a id="tocsoutputvalue"></a>

```json
"string"
```

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "OutputKey": {},
  "OutputValue": {},
  "Description": {},
  "ExportName": {}
}
```

The Output data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputKey|object|false|none|none|
|OutputValue|object|false|none|none|
|Description|object|false|none|none|
|ExportName|object|false|none|none|

<h2 id="tocS_Outputs">Outputs</h2>
<!-- backwards compatibility -->
<a id="schemaoutputs"></a>
<a id="schema_Outputs"></a>
<a id="tocSoutputs"></a>
<a id="tocsoutputs"></a>

```json
[
  {
    "OutputKey": {},
    "OutputValue": {},
    "Description": {},
    "ExportName": {}
  }
]
```

<h2 id="tocS_ParameterKey">ParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemaparameterkey"></a>
<a id="schema_ParameterKey"></a>
<a id="tocSparameterkey"></a>
<a id="tocsparameterkey"></a>

```json
"string"
```

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_UsePreviousValue">UsePreviousValue</h2>
<!-- backwards compatibility -->
<a id="schemausepreviousvalue"></a>
<a id="schema_UsePreviousValue"></a>
<a id="tocSusepreviousvalue"></a>
<a id="tocsusepreviousvalue"></a>

```json
true
```

<h2 id="tocS_ParameterConstraints">ParameterConstraints</h2>
<!-- backwards compatibility -->
<a id="schemaparameterconstraints"></a>
<a id="schema_ParameterConstraints"></a>
<a id="tocSparameterconstraints"></a>
<a id="tocsparameterconstraints"></a>

```json
{
  "AllowedValues": {}
}
```

A set of criteria that CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, CloudFormation returns only the <code>AllowedValues</code> property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedValues|object|false|none|none|

<h2 id="tocS_ParameterType">ParameterType</h2>
<!-- backwards compatibility -->
<a id="schemaparametertype"></a>
<a id="schema_ParameterType"></a>
<a id="tocSparametertype"></a>
<a id="tocsparametertype"></a>

```json
"string"
```

<h2 id="tocS_ParameterDeclaration">ParameterDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemaparameterdeclaration"></a>
<a id="schema_ParameterDeclaration"></a>
<a id="tocSparameterdeclaration"></a>
<a id="tocsparameterdeclaration"></a>

```json
{
  "ParameterKey": {},
  "DefaultValue": {},
  "ParameterType": {},
  "NoEcho": {},
  "Description": {},
  "ParameterConstraints": {
    "AllowedValues": {}
  }
}
```

The ParameterDeclaration data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterKey|object|false|none|none|
|DefaultValue|object|false|none|none|
|ParameterType|object|false|none|none|
|NoEcho|object|false|none|none|
|Description|object|false|none|none|
|ParameterConstraints|object|false|none|none|

<h2 id="tocS_PhysicalResourceIdContextKeyValuePair">PhysicalResourceIdContextKeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemaphysicalresourceidcontextkeyvaluepair"></a>
<a id="schema_PhysicalResourceIdContextKeyValuePair"></a>
<a id="tocSphysicalresourceidcontextkeyvaluepair"></a>
<a id="tocsphysicalresourceidcontextkeyvaluepair"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_PhysicalResourceIdContext">PhysicalResourceIdContext</h2>
<!-- backwards compatibility -->
<a id="schemaphysicalresourceidcontext"></a>
<a id="schema_PhysicalResourceIdContext"></a>
<a id="tocSphysicalresourceidcontext"></a>
<a id="tocsphysicalresourceidcontext"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

<h2 id="tocS_Properties">Properties</h2>
<!-- backwards compatibility -->
<a id="schemaproperties"></a>
<a id="schema_Properties"></a>
<a id="tocSproperties"></a>
<a id="tocsproperties"></a>

```json
"string"
```

<h2 id="tocS_PropertyPath">PropertyPath</h2>
<!-- backwards compatibility -->
<a id="schemapropertypath"></a>
<a id="schema_PropertyPath"></a>
<a id="tocSpropertypath"></a>
<a id="tocspropertypath"></a>

```json
"string"
```

<h2 id="tocS_PropertyValue">PropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvalue"></a>
<a id="schema_PropertyValue"></a>
<a id="tocSpropertyvalue"></a>
<a id="tocspropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_PropertyDifference">PropertyDifference</h2>
<!-- backwards compatibility -->
<a id="schemapropertydifference"></a>
<a id="schema_PropertyDifference"></a>
<a id="tocSpropertydifference"></a>
<a id="tocspropertydifference"></a>

```json
{
  "PropertyPath": {},
  "ExpectedValue": {},
  "ActualValue": {},
  "DifferenceType": {}
}
```

Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PropertyPath|object|true|none|none|
|ExpectedValue|object|true|none|none|
|ActualValue|object|true|none|none|
|DifferenceType|object|true|none|none|

<h2 id="tocS_PropertyDifferences">PropertyDifferences</h2>
<!-- backwards compatibility -->
<a id="schemapropertydifferences"></a>
<a id="schema_PropertyDifferences"></a>
<a id="tocSpropertydifferences"></a>
<a id="tocspropertydifferences"></a>

```json
[
  {
    "PropertyPath": {},
    "ExpectedValue": {},
    "ActualValue": {},
    "DifferenceType": {}
  }
]
```

<h2 id="tocS_PropertyName">PropertyName</h2>
<!-- backwards compatibility -->
<a id="schemapropertyname"></a>
<a id="schema_PropertyName"></a>
<a id="tocSpropertyname"></a>
<a id="tocspropertyname"></a>

```json
"string"
```

<h2 id="tocS_PublishTypeInput">PublishTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemapublishtypeinput"></a>
<a id="schema_PublishTypeInput"></a>
<a id="tocSpublishtypeinput"></a>
<a id="tocspublishtypeinput"></a>

```json
{
  "Type": {},
  "Arn": {},
  "TypeName": {},
  "PublicVersionNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Arn|object|false|none|none|
|TypeName|object|false|none|none|
|PublicVersionNumber|object|false|none|none|

<h2 id="tocS_PublisherName">PublisherName</h2>
<!-- backwards compatibility -->
<a id="schemapublishername"></a>
<a id="schema_PublisherName"></a>
<a id="tocSpublishername"></a>
<a id="tocspublishername"></a>

```json
"string"
```

<h2 id="tocS_Reason">Reason</h2>
<!-- backwards compatibility -->
<a id="schemareason"></a>
<a id="schema_Reason"></a>
<a id="tocSreason"></a>
<a id="tocsreason"></a>

```json
"string"
```

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ResourceModel">ResourceModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemodel"></a>
<a id="schema_ResourceModel"></a>
<a id="tocSresourcemodel"></a>
<a id="tocsresourcemodel"></a>

```json
"string"
```

<h2 id="tocS_RecordHandlerProgressInput">RecordHandlerProgressInput</h2>
<!-- backwards compatibility -->
<a id="schemarecordhandlerprogressinput"></a>
<a id="schema_RecordHandlerProgressInput"></a>
<a id="tocSrecordhandlerprogressinput"></a>
<a id="tocsrecordhandlerprogressinput"></a>

```json
{
  "BearerToken": {},
  "OperationStatus": {},
  "CurrentOperationStatus": {},
  "StatusMessage": {},
  "ErrorCode": {},
  "ResourceModel": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BearerToken|object|true|none|none|
|OperationStatus|object|true|none|none|
|CurrentOperationStatus|object|false|none|none|
|StatusMessage|object|false|none|none|
|ErrorCode|object|false|none|none|
|ResourceModel|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_RegisterPublisherInput">RegisterPublisherInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterpublisherinput"></a>
<a id="schema_RegisterPublisherInput"></a>
<a id="tocSregisterpublisherinput"></a>
<a id="tocsregisterpublisherinput"></a>

```json
{
  "AcceptTermsAndConditions": {},
  "ConnectionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptTermsAndConditions|object|false|none|none|
|ConnectionArn|object|false|none|none|

<h2 id="tocS_S3Url">S3Url</h2>
<!-- backwards compatibility -->
<a id="schemas3url"></a>
<a id="schema_S3Url"></a>
<a id="tocSs3url"></a>
<a id="tocss3url"></a>

```json
"string"
```

<h2 id="tocS_RequestToken">RequestToken</h2>
<!-- backwards compatibility -->
<a id="schemarequesttoken"></a>
<a id="schema_RequestToken"></a>
<a id="tocSrequesttoken"></a>
<a id="tocsrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_RegisterTypeInput">RegisterTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaregistertypeinput"></a>
<a id="schema_RegisterTypeInput"></a>
<a id="tocSregistertypeinput"></a>
<a id="tocsregistertypeinput"></a>

```json
{
  "Type": {},
  "TypeName": {},
  "SchemaHandlerPackage": {},
  "LoggingConfig": {
    "LogRoleArn": {},
    "LogGroupName": {}
  },
  "ExecutionRoleArn": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|TypeName|object|true|none|none|
|SchemaHandlerPackage|object|true|none|none|
|LoggingConfig|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_Replacement">Replacement</h2>
<!-- backwards compatibility -->
<a id="schemareplacement"></a>
<a id="schema_Replacement"></a>
<a id="tocSreplacement"></a>
<a id="tocsreplacement"></a>

```json
"True"
```

<h2 id="tocS_SupportedMajorVersions">SupportedMajorVersions</h2>
<!-- backwards compatibility -->
<a id="schemasupportedmajorversions"></a>
<a id="schema_SupportedMajorVersions"></a>
<a id="tocSsupportedmajorversions"></a>
<a id="tocssupportedmajorversions"></a>

```json
[
  1
]
```

<h2 id="tocS_RequiredActivatedType">RequiredActivatedType</h2>
<!-- backwards compatibility -->
<a id="schemarequiredactivatedtype"></a>
<a id="schema_RequiredActivatedType"></a>
<a id="tocSrequiredactivatedtype"></a>
<a id="tocsrequiredactivatedtype"></a>

```json
{
  "TypeNameAlias": {},
  "OriginalTypeName": {},
  "PublisherId": {},
  "SupportedMajorVersions": {}
}
```

<p>For extensions that are modules, a public third-party extension that must be activated in your account in order for the module itself to be activated.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html#module-enabling">Activating public modules for use in your account</a> in the <i>CloudFormation User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeNameAlias|object|false|none|none|
|OriginalTypeName|object|false|none|none|
|PublisherId|object|false|none|none|
|SupportedMajorVersions|object|false|none|none|

<h2 id="tocS_RequiresRecreation">RequiresRecreation</h2>
<!-- backwards compatibility -->
<a id="schemarequiresrecreation"></a>
<a id="schema_RequiresRecreation"></a>
<a id="tocSrequiresrecreation"></a>
<a id="tocsrequiresrecreation"></a>

```json
"Never"
```

<h2 id="tocS_ResourceAttribute">ResourceAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaresourceattribute"></a>
<a id="schema_ResourceAttribute"></a>
<a id="tocSresourceattribute"></a>
<a id="tocsresourceattribute"></a>

```json
"Properties"
```

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
[
  "Properties"
]
```

<h2 id="tocS_ResourceChangeDetails">ResourceChangeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcechangedetails"></a>
<a id="schema_ResourceChangeDetails"></a>
<a id="tocSresourcechangedetails"></a>
<a id="tocsresourcechangedetails"></a>

```json
[
  {
    "Target": {
      "Attribute": {},
      "Name": {},
      "RequiresRecreation": {}
    },
    "Evaluation": {},
    "ChangeSource": {},
    "CausingEntity": {}
  }
]
```

<h2 id="tocS_ResourceTargetDefinition">ResourceTargetDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetargetdefinition"></a>
<a id="schema_ResourceTargetDefinition"></a>
<a id="tocSresourcetargetdefinition"></a>
<a id="tocsresourcetargetdefinition"></a>

```json
{
  "Attribute": {},
  "Name": {},
  "RequiresRecreation": {}
}
```

The field that CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attribute|object|false|none|none|
|Name|object|false|none|none|
|RequiresRecreation|object|false|none|none|

<h2 id="tocS_ResourceChangeDetail">ResourceChangeDetail</h2>
<!-- backwards compatibility -->
<a id="schemaresourcechangedetail"></a>
<a id="schema_ResourceChangeDetail"></a>
<a id="tocSresourcechangedetail"></a>
<a id="tocsresourcechangedetail"></a>

```json
{
  "Target": {
    "Attribute": {},
    "Name": {},
    "RequiresRecreation": {}
  },
  "Evaluation": {},
  "ChangeSource": {},
  "CausingEntity": {}
}
```

For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes CloudFormation will make to that resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|false|none|none|
|Evaluation|object|false|none|none|
|ChangeSource|object|false|none|none|
|CausingEntity|object|false|none|none|

<h2 id="tocS_ResourceIdentifierPropertyValue">ResourceIdentifierPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifierpropertyvalue"></a>
<a id="schema_ResourceIdentifierPropertyValue"></a>
<a id="tocSresourceidentifierpropertyvalue"></a>
<a id="tocsresourceidentifierpropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_ResourceIdentifierProperties">ResourceIdentifierProperties</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifierproperties"></a>
<a id="schema_ResourceIdentifierProperties"></a>
<a id="tocSresourceidentifierproperties"></a>
<a id="tocsresourceidentifierproperties"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ResourceIdentifierPropertyValue](#schemaresourceidentifierpropertyvalue)|false|none|none|

<h2 id="tocS_ResourceIdentifierPropertyKey">ResourceIdentifierPropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifierpropertykey"></a>
<a id="schema_ResourceIdentifierPropertyKey"></a>
<a id="tocSresourceidentifierpropertykey"></a>
<a id="tocsresourceidentifierpropertykey"></a>

```json
"string"
```

<h2 id="tocS_ResourceIdentifierSummary">ResourceIdentifierSummary</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifiersummary"></a>
<a id="schema_ResourceIdentifierSummary"></a>
<a id="tocSresourceidentifiersummary"></a>
<a id="tocsresourceidentifiersummary"></a>

```json
{
  "ResourceType": {},
  "LogicalResourceIds": {},
  "ResourceIdentifiers": {}
}
```

Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|LogicalResourceIds|object|false|none|none|
|ResourceIdentifiers|object|false|none|none|

<h2 id="tocS_ResourceIdentifiers">ResourceIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifiers"></a>
<a id="schema_ResourceIdentifiers"></a>
<a id="tocSresourceidentifiers"></a>
<a id="tocsresourceidentifiers"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceProperties">ResourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaresourceproperties"></a>
<a id="schema_ResourceProperties"></a>
<a id="tocSresourceproperties"></a>
<a id="tocsresourceproperties"></a>

```json
"string"
```

<h2 id="tocS_ResourceSignalStatus">ResourceSignalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesignalstatus"></a>
<a id="schema_ResourceSignalStatus"></a>
<a id="tocSresourcesignalstatus"></a>
<a id="tocsresourcesignalstatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_ResourceSignalUniqueId">ResourceSignalUniqueId</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesignaluniqueid"></a>
<a id="schema_ResourceSignalUniqueId"></a>
<a id="tocSresourcesignaluniqueid"></a>
<a id="tocsresourcesignaluniqueid"></a>

```json
"string"
```

<h2 id="tocS_ResourceStatus">ResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatus"></a>
<a id="schema_ResourceStatus"></a>
<a id="tocSresourcestatus"></a>
<a id="tocsresourcestatus"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_ResourceStatusReason">ResourceStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatusreason"></a>
<a id="schema_ResourceStatusReason"></a>
<a id="tocSresourcestatusreason"></a>
<a id="tocsresourcestatusreason"></a>

```json
"string"
```

<h2 id="tocS_RetainStacksNullable">RetainStacksNullable</h2>
<!-- backwards compatibility -->
<a id="schemaretainstacksnullable"></a>
<a id="schema_RetainStacksNullable"></a>
<a id="tocSretainstacksnullable"></a>
<a id="tocsretainstacksnullable"></a>

```json
true
```

<h2 id="tocS_RollbackStackInput">RollbackStackInput</h2>
<!-- backwards compatibility -->
<a id="schemarollbackstackinput"></a>
<a id="schema_RollbackStackInput"></a>
<a id="tocSrollbackstackinput"></a>
<a id="tocsrollbackstackinput"></a>

```json
{
  "StackName": {},
  "RoleARN": {},
  "ClientRequestToken": {},
  "RetainExceptOnCreate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|RoleARN|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|RetainExceptOnCreate|object|false|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"string"
```

<h2 id="tocS_RollbackTrigger">RollbackTrigger</h2>
<!-- backwards compatibility -->
<a id="schemarollbacktrigger"></a>
<a id="schema_RollbackTrigger"></a>
<a id="tocSrollbacktrigger"></a>
<a id="tocsrollbacktrigger"></a>

```json
{
  "Arn": {},
  "Type": {}
}
```

A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_SetStackPolicyInput">SetStackPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemasetstackpolicyinput"></a>
<a id="schema_SetStackPolicyInput"></a>
<a id="tocSsetstackpolicyinput"></a>
<a id="tocssetstackpolicyinput"></a>

```json
{
  "StackName": {},
  "StackPolicyBody": {},
  "StackPolicyURL": {}
}
```

The input for the <a>SetStackPolicy</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|StackPolicyBody|object|false|none|none|
|StackPolicyURL|object|false|none|none|

<h2 id="tocS_TypeConfiguration">TypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematypeconfiguration"></a>
<a id="schema_TypeConfiguration"></a>
<a id="tocStypeconfiguration"></a>
<a id="tocstypeconfiguration"></a>

```json
"string"
```

<h2 id="tocS_TypeConfigurationAlias">TypeConfigurationAlias</h2>
<!-- backwards compatibility -->
<a id="schematypeconfigurationalias"></a>
<a id="schema_TypeConfigurationAlias"></a>
<a id="tocStypeconfigurationalias"></a>
<a id="tocstypeconfigurationalias"></a>

```json
"string"
```

<h2 id="tocS_SetTypeConfigurationInput">SetTypeConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemasettypeconfigurationinput"></a>
<a id="schema_SetTypeConfigurationInput"></a>
<a id="tocSsettypeconfigurationinput"></a>
<a id="tocssettypeconfigurationinput"></a>

```json
{
  "TypeArn": {},
  "Configuration": {},
  "ConfigurationAlias": {},
  "TypeName": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeArn|object|false|none|none|
|Configuration|object|true|none|none|
|ConfigurationAlias|object|false|none|none|
|TypeName|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_TypeConfigurationArn">TypeConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schematypeconfigurationarn"></a>
<a id="schema_TypeConfigurationArn"></a>
<a id="tocStypeconfigurationarn"></a>
<a id="tocstypeconfigurationarn"></a>

```json
"string"
```

<h2 id="tocS_SetTypeDefaultVersionInput">SetTypeDefaultVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemasettypedefaultversioninput"></a>
<a id="schema_SetTypeDefaultVersionInput"></a>
<a id="tocSsettypedefaultversioninput"></a>
<a id="tocssettypedefaultversioninput"></a>

```json
{
  "Arn": {},
  "Type": {},
  "TypeName": {},
  "VersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_SignalResourceInput">SignalResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemasignalresourceinput"></a>
<a id="schema_SignalResourceInput"></a>
<a id="tocSsignalresourceinput"></a>
<a id="tocssignalresourceinput"></a>

```json
{
  "StackName": {},
  "LogicalResourceId": {},
  "UniqueId": {},
  "Status": {}
}
```

The input for the <a>SignalResource</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|LogicalResourceId|object|true|none|none|
|UniqueId|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_StackStatusReason">StackStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastackstatusreason"></a>
<a id="schema_StackStatusReason"></a>
<a id="tocSstackstatusreason"></a>
<a id="tocsstackstatusreason"></a>

```json
"string"
```

<h2 id="tocS_StackDriftInformation">StackDriftInformation</h2>
<!-- backwards compatibility -->
<a id="schemastackdriftinformation"></a>
<a id="schema_StackDriftInformation"></a>
<a id="tocSstackdriftinformation"></a>
<a id="tocsstackdriftinformation"></a>

```json
{
  "StackDriftStatus": {},
  "LastCheckTimestamp": {}
}
```

Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackDriftStatus|object|true|none|none|
|LastCheckTimestamp|object|false|none|none|

<h2 id="tocS_Stack">Stack</h2>
<!-- backwards compatibility -->
<a id="schemastack"></a>
<a id="schema_Stack"></a>
<a id="tocSstack"></a>
<a id="tocsstack"></a>

```json
{
  "StackId": {},
  "StackName": {},
  "ChangeSetId": {},
  "Description": {},
  "Parameters": {},
  "CreationTime": {},
  "DeletionTime": {},
  "LastUpdatedTime": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "StackStatus": {},
  "StackStatusReason": {},
  "DisableRollback": {},
  "NotificationARNs": {},
  "TimeoutInMinutes": {},
  "Capabilities": {},
  "Outputs": {},
  "RoleARN": {},
  "Tags": {},
  "EnableTerminationProtection": {},
  "ParentId": {},
  "RootId": {},
  "DriftInformation": {
    "StackDriftStatus": {},
    "LastCheckTimestamp": {}
  },
  "RetainExceptOnCreate": {}
}
```

The Stack data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|StackName|object|true|none|none|
|ChangeSetId|object|false|none|none|
|Description|object|false|none|none|
|Parameters|object|false|none|none|
|CreationTime|object|true|none|none|
|DeletionTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|RollbackConfiguration|object|false|none|none|
|StackStatus|object|true|none|none|
|StackStatusReason|object|false|none|none|
|DisableRollback|object|false|none|none|
|NotificationARNs|object|false|none|none|
|TimeoutInMinutes|object|false|none|none|
|Capabilities|object|false|none|none|
|Outputs|object|false|none|none|
|RoleARN|object|false|none|none|
|Tags|object|false|none|none|
|EnableTerminationProtection|object|false|none|none|
|ParentId|object|false|none|none|
|RootId|object|false|none|none|
|DriftInformation|object|false|none|none|
|RetainExceptOnCreate|object|false|none|none|

<h2 id="tocS_StackDriftInformationSummary">StackDriftInformationSummary</h2>
<!-- backwards compatibility -->
<a id="schemastackdriftinformationsummary"></a>
<a id="schema_StackDriftInformationSummary"></a>
<a id="tocSstackdriftinformationsummary"></a>
<a id="tocsstackdriftinformationsummary"></a>

```json
{
  "StackDriftStatus": {},
  "LastCheckTimestamp": {}
}
```

Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackDriftStatus|object|true|none|none|
|LastCheckTimestamp|object|false|none|none|

<h2 id="tocS_StackEvent">StackEvent</h2>
<!-- backwards compatibility -->
<a id="schemastackevent"></a>
<a id="schema_StackEvent"></a>
<a id="tocSstackevent"></a>
<a id="tocsstackevent"></a>

```json
{
  "StackId": {},
  "EventId": {},
  "StackName": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "ResourceType": {},
  "Timestamp": {},
  "ResourceStatus": {},
  "ResourceStatusReason": {},
  "ResourceProperties": {},
  "ClientRequestToken": {},
  "HookType": {},
  "HookStatus": {},
  "HookStatusReason": {},
  "HookInvocationPoint": {},
  "HookFailureMode": {}
}
```

The StackEvent data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|EventId|object|true|none|none|
|StackName|object|true|none|none|
|LogicalResourceId|object|false|none|none|
|PhysicalResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|Timestamp|object|true|none|none|
|ResourceStatus|object|false|none|none|
|ResourceStatusReason|object|false|none|none|
|ResourceProperties|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|HookType|object|false|none|none|
|HookStatus|object|false|none|none|
|HookStatusReason|object|false|none|none|
|HookInvocationPoint|object|false|none|none|
|HookFailureMode|object|false|none|none|

<h2 id="tocS_StackInstanceStatus">StackInstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancestatus"></a>
<a id="schema_StackInstanceStatus"></a>
<a id="tocSstackinstancestatus"></a>
<a id="tocsstackinstancestatus"></a>

```json
"CURRENT"
```

<h2 id="tocS_StackInstanceComprehensiveStatus">StackInstanceComprehensiveStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancecomprehensivestatus"></a>
<a id="schema_StackInstanceComprehensiveStatus"></a>
<a id="tocSstackinstancecomprehensivestatus"></a>
<a id="tocsstackinstancecomprehensivestatus"></a>

```json
{
  "DetailedStatus": {}
}
```

The detailed status of the stack instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetailedStatus|object|false|none|none|

<h2 id="tocS_StackInstanceDetailedStatus">StackInstanceDetailedStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancedetailedstatus"></a>
<a id="schema_StackInstanceDetailedStatus"></a>
<a id="tocSstackinstancedetailedstatus"></a>
<a id="tocsstackinstancedetailedstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_StackInstanceFilterName">StackInstanceFilterName</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancefiltername"></a>
<a id="schema_StackInstanceFilterName"></a>
<a id="tocSstackinstancefiltername"></a>
<a id="tocsstackinstancefiltername"></a>

```json
"DETAILED_STATUS"
```

<h2 id="tocS_StackInstanceFilterValues">StackInstanceFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancefiltervalues"></a>
<a id="schema_StackInstanceFilterValues"></a>
<a id="tocSstackinstancefiltervalues"></a>
<a id="tocsstackinstancefiltervalues"></a>

```json
"string"
```

<h2 id="tocS_StackInstanceResourceDriftsSummary">StackInstanceResourceDriftsSummary</h2>
<!-- backwards compatibility -->
<a id="schemastackinstanceresourcedriftssummary"></a>
<a id="schema_StackInstanceResourceDriftsSummary"></a>
<a id="tocSstackinstanceresourcedriftssummary"></a>
<a id="tocsstackinstanceresourcedriftssummary"></a>

```json
{
  "StackId": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "PhysicalResourceIdContext": {},
  "ResourceType": {},
  "PropertyDifferences": {},
  "StackResourceDriftStatus": {},
  "Timestamp": {}
}
```

The structure containing summary information about resource drifts for a stack instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|true|none|none|
|LogicalResourceId|object|true|none|none|
|PhysicalResourceId|object|false|none|none|
|PhysicalResourceIdContext|object|false|none|none|
|ResourceType|object|true|none|none|
|PropertyDifferences|object|false|none|none|
|StackResourceDriftStatus|object|true|none|none|
|Timestamp|object|true|none|none|

<h2 id="tocS_StackInstanceSummary">StackInstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancesummary"></a>
<a id="schema_StackInstanceSummary"></a>
<a id="tocSstackinstancesummary"></a>
<a id="tocsstackinstancesummary"></a>

```json
{
  "StackSetId": {},
  "Region": {},
  "Account": {},
  "StackId": {},
  "Status": {},
  "StatusReason": {},
  "StackInstanceStatus": {
    "DetailedStatus": {}
  },
  "OrganizationalUnitId": {},
  "DriftStatus": {},
  "LastDriftCheckTimestamp": {},
  "LastOperationId": {}
}
```

The structure that contains summary information about a stack instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetId|object|false|none|none|
|Region|object|false|none|none|
|Account|object|false|none|none|
|StackId|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|StackInstanceStatus|object|false|none|none|
|OrganizationalUnitId|object|false|none|none|
|DriftStatus|object|false|none|none|
|LastDriftCheckTimestamp|object|false|none|none|
|LastOperationId|object|false|none|none|

<h2 id="tocS_StackPolicyDuringUpdateBody">StackPolicyDuringUpdateBody</h2>
<!-- backwards compatibility -->
<a id="schemastackpolicyduringupdatebody"></a>
<a id="schema_StackPolicyDuringUpdateBody"></a>
<a id="tocSstackpolicyduringupdatebody"></a>
<a id="tocsstackpolicyduringupdatebody"></a>

```json
"string"
```

<h2 id="tocS_StackPolicyDuringUpdateURL">StackPolicyDuringUpdateURL</h2>
<!-- backwards compatibility -->
<a id="schemastackpolicyduringupdateurl"></a>
<a id="schema_StackPolicyDuringUpdateURL"></a>
<a id="tocSstackpolicyduringupdateurl"></a>
<a id="tocsstackpolicyduringupdateurl"></a>

```json
"string"
```

<h2 id="tocS_StackResourceDriftInformation">StackResourceDriftInformation</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcedriftinformation"></a>
<a id="schema_StackResourceDriftInformation"></a>
<a id="tocSstackresourcedriftinformation"></a>
<a id="tocsstackresourcedriftinformation"></a>

```json
{
  "StackResourceDriftStatus": {},
  "LastCheckTimestamp": {}
}
```

Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackResourceDriftStatus|object|true|none|none|
|LastCheckTimestamp|object|false|none|none|

<h2 id="tocS_StackResource">StackResource</h2>
<!-- backwards compatibility -->
<a id="schemastackresource"></a>
<a id="schema_StackResource"></a>
<a id="tocSstackresource"></a>
<a id="tocsstackresource"></a>

```json
{
  "StackName": {},
  "StackId": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "ResourceType": {},
  "Timestamp": {},
  "ResourceStatus": {},
  "ResourceStatusReason": {},
  "Description": {},
  "DriftInformation": {
    "StackResourceDriftStatus": {},
    "LastCheckTimestamp": {}
  },
  "ModuleInfo": {
    "TypeHierarchy": {},
    "LogicalIdHierarchy": {}
  }
}
```

The StackResource data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|false|none|none|
|StackId|object|false|none|none|
|LogicalResourceId|object|true|none|none|
|PhysicalResourceId|object|false|none|none|
|ResourceType|object|true|none|none|
|Timestamp|object|true|none|none|
|ResourceStatus|object|true|none|none|
|ResourceStatusReason|object|false|none|none|
|Description|object|false|none|none|
|DriftInformation|object|false|none|none|
|ModuleInfo|object|false|none|none|

<h2 id="tocS_StackResourceDriftInformationSummary">StackResourceDriftInformationSummary</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcedriftinformationsummary"></a>
<a id="schema_StackResourceDriftInformationSummary"></a>
<a id="tocSstackresourcedriftinformationsummary"></a>
<a id="tocsstackresourcedriftinformationsummary"></a>

```json
{
  "StackResourceDriftStatus": {},
  "LastCheckTimestamp": {}
}
```

Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackResourceDriftStatus|object|true|none|none|
|LastCheckTimestamp|object|false|none|none|

<h2 id="tocS_StackResourceSummary">StackResourceSummary</h2>
<!-- backwards compatibility -->
<a id="schemastackresourcesummary"></a>
<a id="schema_StackResourceSummary"></a>
<a id="tocSstackresourcesummary"></a>
<a id="tocsstackresourcesummary"></a>

```json
{
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "ResourceType": {},
  "LastUpdatedTimestamp": {},
  "ResourceStatus": {},
  "ResourceStatusReason": {},
  "DriftInformation": {
    "StackResourceDriftStatus": {},
    "LastCheckTimestamp": {}
  },
  "ModuleInfo": {
    "TypeHierarchy": {},
    "LogicalIdHierarchy": {}
  }
}
```

Contains high-level information about the specified stack resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogicalResourceId|object|true|none|none|
|PhysicalResourceId|object|false|none|none|
|ResourceType|object|true|none|none|
|LastUpdatedTimestamp|object|true|none|none|
|ResourceStatus|object|true|none|none|
|ResourceStatusReason|object|false|none|none|
|DriftInformation|object|false|none|none|
|ModuleInfo|object|false|none|none|

<h2 id="tocS_StackSetARN">StackSetARN</h2>
<!-- backwards compatibility -->
<a id="schemastacksetarn"></a>
<a id="schema_StackSetARN"></a>
<a id="tocSstacksetarn"></a>
<a id="tocsstacksetarn"></a>

```json
"string"
```

<h2 id="tocS_StackSetDriftDetectionDetails">StackSetDriftDetectionDetails</h2>
<!-- backwards compatibility -->
<a id="schemastacksetdriftdetectiondetails"></a>
<a id="schema_StackSetDriftDetectionDetails"></a>
<a id="tocSstacksetdriftdetectiondetails"></a>
<a id="tocsstacksetdriftdetectiondetails"></a>

```json
{
  "DriftStatus": {},
  "DriftDetectionStatus": {},
  "LastDriftCheckTimestamp": {},
  "TotalStackInstancesCount": {},
  "DriftedStackInstancesCount": {},
  "InSyncStackInstancesCount": {},
  "InProgressStackInstancesCount": {},
  "FailedStackInstancesCount": {}
}
```

<p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress isn't included.</p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a> in the <i>CloudFormation User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DriftStatus|object|false|none|none|
|DriftDetectionStatus|object|false|none|none|
|LastDriftCheckTimestamp|object|false|none|none|
|TotalStackInstancesCount|object|false|none|none|
|DriftedStackInstancesCount|object|false|none|none|
|InSyncStackInstancesCount|object|false|none|none|
|InProgressStackInstancesCount|object|false|none|none|
|FailedStackInstancesCount|object|false|none|none|

<h2 id="tocS_StackSetDriftStatus">StackSetDriftStatus</h2>
<!-- backwards compatibility -->
<a id="schemastacksetdriftstatus"></a>
<a id="schema_StackSetDriftStatus"></a>
<a id="tocSstacksetdriftstatus"></a>
<a id="tocsstacksetdriftstatus"></a>

```json
"DRIFTED"
```

<h2 id="tocS_StackSetDriftDetectionStatus">StackSetDriftDetectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemastacksetdriftdetectionstatus"></a>
<a id="schema_StackSetDriftDetectionStatus"></a>
<a id="tocSstacksetdriftdetectionstatus"></a>
<a id="tocsstacksetdriftdetectionstatus"></a>

```json
"COMPLETED"
```

<h2 id="tocS_TotalStackInstancesCount">TotalStackInstancesCount</h2>
<!-- backwards compatibility -->
<a id="schematotalstackinstancescount"></a>
<a id="schema_TotalStackInstancesCount"></a>
<a id="tocStotalstackinstancescount"></a>
<a id="tocstotalstackinstancescount"></a>

```json
0
```

<h2 id="tocS_StackSetOperationAction">StackSetOperationAction</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationaction"></a>
<a id="schema_StackSetOperationAction"></a>
<a id="tocSstacksetoperationaction"></a>
<a id="tocsstacksetoperationaction"></a>

```json
"CREATE"
```

<h2 id="tocS_StackSetOperationStatus">StackSetOperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationstatus"></a>
<a id="schema_StackSetOperationStatus"></a>
<a id="tocSstacksetoperationstatus"></a>
<a id="tocsstacksetoperationstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_StackSetOperationStatusReason">StackSetOperationStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationstatusreason"></a>
<a id="schema_StackSetOperationStatusReason"></a>
<a id="tocSstacksetoperationstatusreason"></a>
<a id="tocsstacksetoperationstatusreason"></a>

```json
"string"
```

<h2 id="tocS_StackSetOperationStatusDetails">StackSetOperationStatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationstatusdetails"></a>
<a id="schema_StackSetOperationStatusDetails"></a>
<a id="tocSstacksetoperationstatusdetails"></a>
<a id="tocsstacksetoperationstatusdetails"></a>

```json
{
  "FailedStackInstancesCount": {}
}
```

Detailed information about the StackSet operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedStackInstancesCount|object|false|none|none|

<h2 id="tocS_StackSetOperationResultStatus">StackSetOperationResultStatus</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationresultstatus"></a>
<a id="schema_StackSetOperationResultStatus"></a>
<a id="tocSstacksetoperationresultstatus"></a>
<a id="tocsstacksetoperationresultstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_StackSetOperationResultSummary">StackSetOperationResultSummary</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationresultsummary"></a>
<a id="schema_StackSetOperationResultSummary"></a>
<a id="tocSstacksetoperationresultsummary"></a>
<a id="tocsstacksetoperationresultsummary"></a>

```json
{
  "Account": {},
  "Region": {},
  "Status": {},
  "StatusReason": {},
  "AccountGateResult": {
    "Status": {},
    "StatusReason": {}
  },
  "OrganizationalUnitId": {}
}
```

The structure that contains information about a specified operation's results for a given account in a given Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|
|Region|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|AccountGateResult|object|false|none|none|
|OrganizationalUnitId|object|false|none|none|

<h2 id="tocS_StackSetOperationSummary">StackSetOperationSummary</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationsummary"></a>
<a id="schema_StackSetOperationSummary"></a>
<a id="tocSstacksetoperationsummary"></a>
<a id="tocsstacksetoperationsummary"></a>

```json
{
  "OperationId": {},
  "Action": {},
  "Status": {},
  "CreationTimestamp": {},
  "EndTimestamp": {},
  "StatusReason": {},
  "StatusDetails": {
    "FailedStackInstancesCount": {}
  },
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  }
}
```

The structures that contain summary information about the specified operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|
|Action|object|false|none|none|
|Status|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|EndTimestamp|object|false|none|none|
|StatusReason|object|false|none|none|
|StatusDetails|object|false|none|none|
|OperationPreferences|object|false|none|none|

<h2 id="tocS_StackSetSummary">StackSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemastacksetsummary"></a>
<a id="schema_StackSetSummary"></a>
<a id="tocSstacksetsummary"></a>
<a id="tocsstacksetsummary"></a>

```json
{
  "StackSetName": {},
  "StackSetId": {},
  "Description": {},
  "Status": {},
  "AutoDeployment": {
    "Enabled": {},
    "RetainStacksOnAccountRemoval": {}
  },
  "PermissionModel": {},
  "DriftStatus": {},
  "LastDriftCheckTimestamp": {},
  "ManagedExecution": {
    "Active": {}
  }
}
```

The structures that contain summary information about the specified stack set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|false|none|none|
|StackSetId|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|AutoDeployment|object|false|none|none|
|PermissionModel|object|false|none|none|
|DriftStatus|object|false|none|none|
|LastDriftCheckTimestamp|object|false|none|none|
|ManagedExecution|object|false|none|none|

<h2 id="tocS_StackSummary">StackSummary</h2>
<!-- backwards compatibility -->
<a id="schemastacksummary"></a>
<a id="schema_StackSummary"></a>
<a id="tocSstacksummary"></a>
<a id="tocsstacksummary"></a>

```json
{
  "StackId": {},
  "StackName": {},
  "TemplateDescription": {},
  "CreationTime": {},
  "LastUpdatedTime": {},
  "DeletionTime": {},
  "StackStatus": {},
  "StackStatusReason": {},
  "ParentId": {},
  "RootId": {},
  "DriftInformation": {
    "StackDriftStatus": {},
    "LastCheckTimestamp": {}
  }
}
```

The StackSummary Data Type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackId|object|false|none|none|
|StackName|object|true|none|none|
|TemplateDescription|object|false|none|none|
|CreationTime|object|true|none|none|
|LastUpdatedTime|object|false|none|none|
|DeletionTime|object|false|none|none|
|StackStatus|object|true|none|none|
|StackStatusReason|object|false|none|none|
|ParentId|object|false|none|none|
|RootId|object|false|none|none|
|DriftInformation|object|false|none|none|

<h2 id="tocS_TemplateDescription">TemplateDescription</h2>
<!-- backwards compatibility -->
<a id="schematemplatedescription"></a>
<a id="schema_TemplateDescription"></a>
<a id="tocStemplatedescription"></a>
<a id="tocstemplatedescription"></a>

```json
"string"
```

<h2 id="tocS_StopStackSetOperationInput">StopStackSetOperationInput</h2>
<!-- backwards compatibility -->
<a id="schemastopstacksetoperationinput"></a>
<a id="schema_StopStackSetOperationInput"></a>
<a id="tocSstopstacksetoperationinput"></a>
<a id="tocsstopstacksetoperationinput"></a>

```json
{
  "StackSetName": {},
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|OperationId|object|true|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_SupportedMajorVersion">SupportedMajorVersion</h2>
<!-- backwards compatibility -->
<a id="schemasupportedmajorversion"></a>
<a id="schema_SupportedMajorVersion"></a>
<a id="tocSsupportedmajorversion"></a>
<a id="tocssupportedmajorversion"></a>

```json
1
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

<h2 id="tocS_TemplateParameter">TemplateParameter</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameter"></a>
<a id="schema_TemplateParameter"></a>
<a id="tocStemplateparameter"></a>
<a id="tocstemplateparameter"></a>

```json
{
  "ParameterKey": {},
  "DefaultValue": {},
  "NoEcho": {},
  "Description": {}
}
```

The TemplateParameter data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterKey|object|false|none|none|
|DefaultValue|object|false|none|none|
|NoEcho|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_TemplateParameters">TemplateParameters</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameters"></a>
<a id="schema_TemplateParameters"></a>
<a id="tocStemplateparameters"></a>
<a id="tocstemplateparameters"></a>

```json
[
  {
    "ParameterKey": {},
    "DefaultValue": {},
    "NoEcho": {},
    "Description": {}
  }
]
```

<h2 id="tocS_TestTypeInput">TestTypeInput</h2>
<!-- backwards compatibility -->
<a id="schematesttypeinput"></a>
<a id="schema_TestTypeInput"></a>
<a id="tocStesttypeinput"></a>
<a id="tocstesttypeinput"></a>

```json
{
  "Arn": {},
  "Type": {},
  "TypeName": {},
  "VersionId": {},
  "LogDeliveryBucket": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|VersionId|object|false|none|none|
|LogDeliveryBucket|object|false|none|none|

<h2 id="tocS_TransformName">TransformName</h2>
<!-- backwards compatibility -->
<a id="schematransformname"></a>
<a id="schema_TransformName"></a>
<a id="tocStransformname"></a>
<a id="tocstransformname"></a>

```json
"string"
```

<h2 id="tocS_TypeConfigurationDetails">TypeConfigurationDetails</h2>
<!-- backwards compatibility -->
<a id="schematypeconfigurationdetails"></a>
<a id="schema_TypeConfigurationDetails"></a>
<a id="tocStypeconfigurationdetails"></a>
<a id="tocstypeconfigurationdetails"></a>

```json
{
  "Arn": {},
  "Alias": {},
  "Configuration": {},
  "LastUpdated": {},
  "TypeArn": {},
  "TypeName": {},
  "IsDefaultConfiguration": {}
}
```

<p>Detailed information concerning the specification of a CloudFormation extension in a given account and Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Alias|object|false|none|none|
|Configuration|object|false|none|none|
|LastUpdated|object|false|none|none|
|TypeArn|object|false|none|none|
|TypeName|object|false|none|none|
|IsDefaultConfiguration|object|false|none|none|

<h2 id="tocS_TypeSummary">TypeSummary</h2>
<!-- backwards compatibility -->
<a id="schematypesummary"></a>
<a id="schema_TypeSummary"></a>
<a id="tocStypesummary"></a>
<a id="tocstypesummary"></a>

```json
{
  "Type": {},
  "TypeName": {},
  "DefaultVersionId": {},
  "TypeArn": {},
  "LastUpdated": {},
  "Description": {},
  "PublisherId": {},
  "OriginalTypeName": {},
  "PublicVersionNumber": {},
  "LatestPublicVersion": {},
  "PublisherIdentity": {},
  "PublisherName": {},
  "IsActivated": {}
}
```

Contains summary information about the specified CloudFormation extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|DefaultVersionId|object|false|none|none|
|TypeArn|object|false|none|none|
|LastUpdated|object|false|none|none|
|Description|object|false|none|none|
|PublisherId|object|false|none|none|
|OriginalTypeName|object|false|none|none|
|PublicVersionNumber|object|false|none|none|
|LatestPublicVersion|object|false|none|none|
|PublisherIdentity|object|false|none|none|
|PublisherName|object|false|none|none|
|IsActivated|object|false|none|none|

<h2 id="tocS_TypeVersionSummary">TypeVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schematypeversionsummary"></a>
<a id="schema_TypeVersionSummary"></a>
<a id="tocStypeversionsummary"></a>
<a id="tocstypeversionsummary"></a>

```json
{
  "Type": {},
  "TypeName": {},
  "VersionId": {},
  "IsDefaultVersion": {},
  "Arn": {},
  "TimeCreated": {},
  "Description": {},
  "PublicVersionNumber": {}
}
```

Contains summary information about a specific version of a CloudFormation extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|TypeName|object|false|none|none|
|VersionId|object|false|none|none|
|IsDefaultVersion|object|false|none|none|
|Arn|object|false|none|none|
|TimeCreated|object|false|none|none|
|Description|object|false|none|none|
|PublicVersionNumber|object|false|none|none|

<h2 id="tocS_UpdateStackInput">UpdateStackInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestackinput"></a>
<a id="schema_UpdateStackInput"></a>
<a id="tocSupdatestackinput"></a>
<a id="tocsupdatestackinput"></a>

```json
{
  "StackName": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "UsePreviousTemplate": {},
  "StackPolicyDuringUpdateBody": {},
  "StackPolicyDuringUpdateURL": {},
  "Parameters": {},
  "Capabilities": {},
  "ResourceTypes": {},
  "RoleARN": {},
  "RollbackConfiguration": {
    "RollbackTriggers": {},
    "MonitoringTimeInMinutes": {}
  },
  "StackPolicyBody": {},
  "StackPolicyURL": {},
  "NotificationARNs": {},
  "Tags": {},
  "DisableRollback": {},
  "ClientRequestToken": {},
  "RetainExceptOnCreate": {}
}
```

The input for an <a>UpdateStack</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackName|object|true|none|none|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
|UsePreviousTemplate|object|false|none|none|
|StackPolicyDuringUpdateBody|object|false|none|none|
|StackPolicyDuringUpdateURL|object|false|none|none|
|Parameters|object|false|none|none|
|Capabilities|object|false|none|none|
|ResourceTypes|object|false|none|none|
|RoleARN|object|false|none|none|
|RollbackConfiguration|object|false|none|none|
|StackPolicyBody|object|false|none|none|
|StackPolicyURL|object|false|none|none|
|NotificationARNs|object|false|none|none|
|Tags|object|false|none|none|
|DisableRollback|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|RetainExceptOnCreate|object|false|none|none|

<h2 id="tocS_UpdateStackInstancesInput">UpdateStackInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestackinstancesinput"></a>
<a id="schema_UpdateStackInstancesInput"></a>
<a id="tocSupdatestackinstancesinput"></a>
<a id="tocsupdatestackinstancesinput"></a>

```json
{
  "StackSetName": {},
  "Accounts": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "Regions": {},
  "ParameterOverrides": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "OperationId": {},
  "CallAs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|Accounts|object|false|none|none|
|DeploymentTargets|object|false|none|none|
|Regions|object|true|none|none|
|ParameterOverrides|object|false|none|none|
|OperationPreferences|object|false|none|none|
|OperationId|object|false|none|none|
|CallAs|object|false|none|none|

<h2 id="tocS_UpdateStackSetInput">UpdateStackSetInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestacksetinput"></a>
<a id="schema_UpdateStackSetInput"></a>
<a id="tocSupdatestacksetinput"></a>
<a id="tocsupdatestacksetinput"></a>

```json
{
  "StackSetName": {},
  "Description": {},
  "TemplateBody": {},
  "TemplateURL": {},
  "UsePreviousTemplate": {},
  "Parameters": {},
  "Capabilities": {},
  "Tags": {},
  "OperationPreferences": {
    "RegionConcurrencyType": {},
    "RegionOrder": {},
    "FailureToleranceCount": {},
    "FailureTolerancePercentage": {},
    "MaxConcurrentCount": {},
    "MaxConcurrentPercentage": {}
  },
  "AdministrationRoleARN": {},
  "ExecutionRoleName": {},
  "DeploymentTargets": {
    "Accounts": {},
    "AccountsUrl": {},
    "OrganizationalUnitIds": {},
    "AccountFilterType": {}
  },
  "PermissionModel": {},
  "AutoDeployment": {
    "Enabled": {},
    "RetainStacksOnAccountRemoval": {}
  },
  "OperationId": {},
  "Accounts": {},
  "Regions": {},
  "CallAs": {},
  "ManagedExecution": {
    "Active": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetName|object|true|none|none|
|Description|object|false|none|none|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
|UsePreviousTemplate|object|false|none|none|
|Parameters|object|false|none|none|
|Capabilities|object|false|none|none|
|Tags|object|false|none|none|
|OperationPreferences|object|false|none|none|
|AdministrationRoleARN|object|false|none|none|
|ExecutionRoleName|object|false|none|none|
|DeploymentTargets|object|false|none|none|
|PermissionModel|object|false|none|none|
|AutoDeployment|object|false|none|none|
|OperationId|object|false|none|none|
|Accounts|object|false|none|none|
|Regions|object|false|none|none|
|CallAs|object|false|none|none|
|ManagedExecution|object|false|none|none|

<h2 id="tocS_UpdateTerminationProtectionInput">UpdateTerminationProtectionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateterminationprotectioninput"></a>
<a id="schema_UpdateTerminationProtectionInput"></a>
<a id="tocSupdateterminationprotectioninput"></a>
<a id="tocsupdateterminationprotectioninput"></a>

```json
{
  "EnableTerminationProtection": {},
  "StackName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableTerminationProtection|object|true|none|none|
|StackName|object|true|none|none|

<h2 id="tocS_ValidateTemplateInput">ValidateTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemavalidatetemplateinput"></a>
<a id="schema_ValidateTemplateInput"></a>
<a id="tocSvalidatetemplateinput"></a>
<a id="tocsvalidatetemplateinput"></a>

```json
{
  "TemplateBody": {},
  "TemplateURL": {}
}
```

The input for <a>ValidateTemplate</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateBody|object|false|none|none|
|TemplateURL|object|false|none|none|
