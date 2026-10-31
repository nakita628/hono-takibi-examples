<h1 id="aws-resource-groups">AWS Resource Groups v2017-11-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Resource Groups lets you organize Amazon Web Services resources such as Amazon Elastic Compute Cloud instances, Amazon Relational Database Service databases, and Amazon Simple Storage Service buckets into groups using criteria that you define as tags. A resource group is a collection of resources that match the resource types specified in a query, and share one or more tags or portions of tags. You can create a group of resources based on their roles in your cloud infrastructure, lifecycle stages, regions, application layers, or virtually any criteria. Resource Groups enable you to automate management tasks, such as those in Amazon Web Services Systems Manager Automation documents, on tag-related resources in Amazon Web Services Systems Manager. Groups of tagged resources also let you quickly view a custom console in Amazon Web Services Systems Manager that shows Config compliance and other monitoring data about member resources.</p> <p>To create a resource group, build a resource query, and specify tags that identify the criteria that members of the group have in common. Tags are key-value pairs.</p> <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">Resource Groups User Guide</a>.</p> <p>Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.</p> <ul> <li> <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities</p> </li> <li> <p>Applying, editing, and removing tags from resource groups</p> </li> <li> <p>Resolving resource group member ARNs so they can be returned as search results</p> </li> <li> <p>Getting data about resources that are members of a group</p> </li> <li> <p>Searching Amazon Web Services resources based on a resource query</p> </li> </ul>

Base URLs:

* <a href="http://resource-groups.us-east-1.amazonaws.com">http://resource-groups.us-east-1.amazonaws.com</a> - The Resource Groups multi-region endpoint

* <a href="https://resource-groups.us-east-1.amazonaws.com">https://resource-groups.us-east-1.amazonaws.com</a> - The Resource Groups multi-region endpoint

* <a href="http://resource-groups.cn-north-1.amazonaws.com.cn">http://resource-groups.cn-north-1.amazonaws.com.cn</a> - The Resource Groups endpoint for China (Beijing) and China (Ningxia)

* <a href="https://resource-groups.cn-north-1.amazonaws.com.cn">https://resource-groups.cn-north-1.amazonaws.com.cn</a> - The Resource Groups endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/resource-groups/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-resource-groups-default">Default</h1>

## CreateGroup

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "ResourceQuery": {
      "Type": {},
      "Query": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Configuration": [
      {
        "Type": {},
        "Parameters": {}
      }
    ]
  }'
```

`POST /groups`

<p>Creates a resource group with the specified name and description. You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/getting_started-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i>. For more information about service-linked groups and service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:CreateGroup</code> </p> </li> </ul>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Configuration": [
    {
      "Type": {},
      "Parameters": {}
    }
  ]
}
```

<h3 id="creategroup-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within each Amazon Web Services Region in your Amazon Web Services account.|
|» Description|body|string|false|The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.|
|» ResourceQuery|body|object|false|<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>|
|» » Type|body|object|false|none|
|» » Query|body|object|false|none|
|» Tags|body|object|false|The tags to add to the group. A tag is key-value pair string.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» Configuration|body|[[GroupConfigurationItem](#schemagroupconfigurationitem)]|false|<p>A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements. For details about the syntax of service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
  },
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "GroupConfiguration": {
    "Configuration": {},
    "ProposedConfiguration": {},
    "Status": {},
    "FailureReason": {}
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

<h3 id="creategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupOutput](#schemacreategroupoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroup

<a id="opIdDeleteGroup"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/delete-group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "Group": "string"
  }'
```

`POST /delete-group`

<p>Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:DeleteGroup</code> </p> </li> </ul>

> Body parameter

```json
{
  "GroupName": "string",
  "Group": "string"
}
```

<h3 id="deletegroup-parameters">Parameters</h3>

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
|» GroupName|body|string|false|Deprecated - don't use this parameter. Use <code>Group</code> instead.|
|» Group|body|string|false|The name or the ARN of the resource group to delete.|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
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

<h3 id="deletegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGroupOutput](#schemadeletegroupoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountSettings

<a id="opIdGetAccountSettings"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/get-account-settings \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /get-account-settings`

Retrieves the current status of optional features in Resource Groups.

<h3 id="getaccountsettings-parameters">Parameters</h3>

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

> 200 Response

```json
{
  "AccountSettings": {
    "GroupLifecycleEventsDesiredStatus": {},
    "GroupLifecycleEventsStatus": {},
    "GroupLifecycleEventsStatusMessage": {}
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

<h3 id="getaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountSettingsOutput](#schemagetaccountsettingsoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroup

<a id="opIdGetGroup"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/get-group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "Group": "string"
  }'
```

`POST /get-group`

<p>Returns information about a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroup</code> </p> </li> </ul>

> Body parameter

```json
{
  "GroupName": "string",
  "Group": "string"
}
```

<h3 id="getgroup-parameters">Parameters</h3>

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
|» GroupName|body|string|false|Deprecated - don't use this parameter. Use <code>Group</code> instead.|
|» Group|body|string|false|The name or the ARN of the resource group to retrieve.|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
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

<h3 id="getgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupOutput](#schemagetgroupoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroupConfiguration

<a id="opIdGetGroupConfiguration"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/get-group-configuration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Group": "string"
  }'
```

`POST /get-group-configuration`

<p>Retrieves the service configuration associated with the specified resource group. For details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroupConfiguration</code> </p> </li> </ul>

> Body parameter

```json
{
  "Group": "string"
}
```

<h3 id="getgroupconfiguration-parameters">Parameters</h3>

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
|» Group|body|string|false|The name or the ARN of the resource group for which you want to retrive the service configuration.|

> Example responses

> 200 Response

```json
{
  "GroupConfiguration": {
    "Configuration": {},
    "ProposedConfiguration": {},
    "Status": {},
    "FailureReason": {}
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

<h3 id="getgroupconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupConfigurationOutput](#schemagetgroupconfigurationoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroupQuery

<a id="opIdGetGroupQuery"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/get-group-query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "Group": "string"
  }'
```

`POST /get-group-query`

<p>Retrieves the resource query associated with the specified resource group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroupQuery</code> </p> </li> </ul>

> Body parameter

```json
{
  "GroupName": "string",
  "Group": "string"
}
```

<h3 id="getgroupquery-parameters">Parameters</h3>

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
|» GroupName|body|string|false|Don't use this parameter. Use <code>Group</code> instead.|
|» Group|body|string|false|The name or the ARN of the resource group to query.|

> Example responses

> 200 Response

```json
{
  "GroupQuery": {
    "GroupName": {},
    "ResourceQuery": {
      "Type": {},
      "Query": {}
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

<h3 id="getgroupquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupQueryOutput](#schemagetgroupqueryoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTags

<a id="opIdGetTags"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/resources/stringstring/tags \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources/{Arn}/tags`

<p>Returns a list of tags that are associated with a resource group, specified by an ARN.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetTags</code> </p> </li> </ul>

<h3 id="gettags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Arn|path|string|true|The ARN of the resource group whose tags you want to retrieve.|
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
  "Arn": {},
  "Tags": {
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

> 485 Response

```json
null
```

<h3 id="gettags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTagsOutput](#schemagettagsoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Tag

<a id="opIdTag"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/resources/stringstring/tags \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /resources/{Arn}/tags`

<p>Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.</p> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:Tag</code> </p> </li> </ul>

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Arn|path|string|true|The ARN of the resource group to which to add tags.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Tags": {
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

> 485 Response

```json
null
```

<h3 id="tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagOutput](#schematagoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Untag

<a id="opIdUntag"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/resources/stringstring/tags \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Keys": [
      "string"
    ]
  }'
```

`PATCH /resources/{Arn}/tags`

<p>Deletes tags from a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:Untag</code> </p> </li> </ul>

> Body parameter

```json
{
  "Keys": [
    "string"
  ]
}
```

<h3 id="untag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Arn|path|string|true|The ARN of the resource group from which to remove tags. The command removed both the specified keys and any values associated with those keys.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Keys|body|[[TagKey](#schematagkey)]|true|The keys of the tags to be removed.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Keys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="untag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagOutput](#schemauntagoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GroupResources

<a id="opIdGroupResources"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/group-resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Group": "string",
    "ResourceArns": [
      "string"
    ]
  }'
```

`POST /group-resources`

<p>Adds the specified resources to the specified group.</p> <important> <p>You can use this operation with only resource groups that are configured with the following types:</p> <ul> <li> <p> <code>AWS::EC2::HostManagement</code> </p> </li> <li> <p> <code>AWS::EC2::CapacityReservationPool</code> </p> </li> </ul> <p>Other resource group type and resource types aren't currently supported by this operation.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GroupResources</code> </p> </li> </ul>

> Body parameter

```json
{
  "Group": "string",
  "ResourceArns": [
    "string"
  ]
}
```

<h3 id="groupresources-parameters">Parameters</h3>

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
|» Group|body|string|true|The name or the ARN of the resource group to add resources to.|
|» ResourceArns|body|[[ResourceArn](#schemaresourcearn)]|true|The list of ARNs of the resources to be added to the group. |

> Example responses

> 200 Response

```json
{
  "Succeeded": {},
  "Failed": {},
  "Pending": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="groupresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GroupResourcesOutput](#schemagroupresourcesoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupResources

<a id="opIdListGroupResources"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/list-group-resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "Group": "string",
    "Filters": [
      {
        "Name": {},
        "Values": {}
      }
    ],
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /list-group-resources`

<p>Returns a list of ARNs of the resources that are members of a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:ListGroupResources</code> </p> </li> <li> <p> <code>cloudformation:DescribeStacks</code> </p> </li> <li> <p> <code>cloudformation:ListStackResources</code> </p> </li> <li> <p> <code>tag:GetResources</code> </p> </li> </ul>

> Body parameter

```json
{
  "GroupName": "string",
  "Group": "string",
  "Filters": [
    {
      "Name": {},
      "Values": {}
    }
  ],
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listgroupresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» GroupName|body|string|false|<important> <p> <i> <b>Deprecated - don't use this parameter. Use the <code>Group</code> request field instead.</b> </i> </p> </important>|
|» Group|body|string|false|The name or the ARN of the resource group|
|» Filters|body|[[ResourceFilter](#schemaresourcefilter)]|false|<p>Filters, formatted as <a>ResourceFilter</a> objects, that you want to apply to a <code>ListGroupResources</code> operation. Filters the results to include only those of the specified resource types.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format <code>AWS::ServiceCode::ResourceType</code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>. </p> </li> </ul> <p>When you specify a <code>resource-type</code> filter for <code>ListGroupResources</code>, Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your <code>resource-type</code> filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a <code>ListGroupResources</code> request returns a <code>BadRequestException</code> error with a message similar to the following:</p> <p> <code>The resource types specified as filters in the request are not valid.</code> </p> <p>The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies <code>AWS::AllSupported</code>, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or Amazon CloudFront stack-based queries).</p>|
|» MaxResults|body|integer|false|The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|» NextToken|body|string|false|The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.|

> Example responses

> 200 Response

```json
{
  "Resources": {},
  "ResourceIdentifiers": {},
  "NextToken": {},
  "QueryErrors": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="listgroupresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupResourcesOutput](#schemalistgroupresourcesoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroups

<a id="opIdListGroups"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/groups-list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": [
      {
        "Name": {},
        "Values": {}
      }
    ]
  }'
```

`POST /groups-list`

<p>Returns a list of existing Resource Groups in your account.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:ListGroups</code> </p> </li> </ul>

> Body parameter

```json
{
  "Filters": [
    {
      "Name": {},
      "Values": {}
    }
  ]
}
```

<h3 id="listgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|nextToken|query|string|false|The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|[[GroupFilter](#schemagroupfilter)]|false|<p>Filters, formatted as <a>GroupFilter</a> objects, that you want to apply to a <code>ListGroups</code> operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter the results to include only those of the specified resource types. Specify up to five resource types in the format <code>AWS::<i>ServiceCode</i>::<i>ResourceType</i> </code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>.</p> </li> <li> <p> <code>configuration-type</code> - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:</p> <ul> <li> <p> <code>AWS::EC2::CapacityReservationPool</code> </p> </li> <li> <p> <code>AWS::EC2::HostManagement</code> </p> </li> </ul> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "GroupIdentifiers": {},
  "Groups": {},
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

<h3 id="listgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupsOutput](#schemalistgroupsoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutGroupConfiguration

<a id="opIdPutGroupConfiguration"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/put-group-configuration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Group": "string",
    "Configuration": [
      {
        "Type": {},
        "Parameters": {}
      }
    ]
  }'
```

`POST /put-group-configuration`

<p>Attaches a service configuration to the specified group. This occurs asynchronously, and can take time to complete. You can use <a>GetGroupConfiguration</a> to check the status of the update.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:PutGroupConfiguration</code> </p> </li> </ul>

> Body parameter

```json
{
  "Group": "string",
  "Configuration": [
    {
      "Type": {},
      "Parameters": {}
    }
  ]
}
```

<h3 id="putgroupconfiguration-parameters">Parameters</h3>

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
|» Group|body|string|false|The name or ARN of the resource group with the configuration that you want to update.|
|» Configuration|body|[[GroupConfigurationItem](#schemagroupconfigurationitem)]|false|<p>The new configuration to associate with the specified group. A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements.</p> <p>For information about the syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>|

> Example responses

> 202 Response

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

<h3 id="putgroupconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[PutGroupConfigurationOutput](#schemaputgroupconfigurationoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchResources

<a id="opIdSearchResources"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/resources/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceQuery": {
      "Type": {},
      "Query": {}
    },
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /resources/search`

<p>Returns a list of Amazon Web Services resource identifiers that matches the specified query. The query uses the same format as a resource query in a <a>CreateGroup</a> or <a>UpdateGroupQuery</a> operation.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:SearchResources</code> </p> </li> <li> <p> <code>cloudformation:DescribeStacks</code> </p> </li> <li> <p> <code>cloudformation:ListStackResources</code> </p> </li> <li> <p> <code>tag:GetResources</code> </p> </li> </ul>

> Body parameter

```json
{
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="searchresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceQuery|body|object|true|<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>|
|» » Type|body|object|false|none|
|» » Query|body|object|false|none|
|» MaxResults|body|integer|false|The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|» NextToken|body|string|false|The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.|

> Example responses

> 200 Response

```json
{
  "ResourceIdentifiers": {},
  "NextToken": {},
  "QueryErrors": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="searchresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchResourcesOutput](#schemasearchresourcesoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UngroupResources

<a id="opIdUngroupResources"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/ungroup-resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Group": "string",
    "ResourceArns": [
      "string"
    ]
  }'
```

`POST /ungroup-resources`

<p>Removes the specified resources from the specified group. This operation works only with static groups that you populated using the <a>GroupResources</a> operation. It doesn't work with any resource groups that are automatically populated by tag-based or CloudFormation stack-based queries.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UngroupResources</code> </p> </li> </ul>

> Body parameter

```json
{
  "Group": "string",
  "ResourceArns": [
    "string"
  ]
}
```

<h3 id="ungroupresources-parameters">Parameters</h3>

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
|» Group|body|string|true|The name or the ARN of the resource group from which to remove the resources.|
|» ResourceArns|body|[[ResourceArn](#schemaresourcearn)]|true|The ARNs of the resources to be removed from the group.|

> Example responses

> 200 Response

```json
{
  "Succeeded": {},
  "Failed": {},
  "Pending": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="ungroupresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UngroupResourcesOutput](#schemaungroupresourcesoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccountSettings

<a id="opIdUpdateAccountSettings"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/update-account-settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupLifecycleEventsDesiredStatus": "ACTIVE"
  }'
```

`POST /update-account-settings`

<p>Turns on or turns off optional features in Resource Groups.</p> <p>The preceding example shows that the request to turn on group lifecycle events is <code>IN_PROGRESS</code>. You can call the <a>GetAccountSettings</a> operation to check for completion by looking for <code>GroupLifecycleEventsStatus</code> to change to <code>ACTIVE</code>.</p>

> Body parameter

```json
{
  "GroupLifecycleEventsDesiredStatus": "ACTIVE"
}
```

<h3 id="updateaccountsettings-parameters">Parameters</h3>

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
|» GroupLifecycleEventsDesiredStatus|body|string|false|Specifies whether you want to turn <a href="https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html">group lifecycle events</a> on or off.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» GroupLifecycleEventsDesiredStatus|ACTIVE|
|» GroupLifecycleEventsDesiredStatus|INACTIVE|

> Example responses

> 200 Response

```json
{
  "AccountSettings": {
    "GroupLifecycleEventsDesiredStatus": {},
    "GroupLifecycleEventsStatus": {},
    "GroupLifecycleEventsStatusMessage": {}
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

<h3 id="updateaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAccountSettingsOutput](#schemaupdateaccountsettingsoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGroup

<a id="opIdUpdateGroup"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/update-group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "Group": "string",
    "Description": "string"
  }'
```

`POST /update-group`

<p>Updates the description for an existing group. You cannot update the name of a resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UpdateGroup</code> </p> </li> </ul>

> Body parameter

```json
{
  "GroupName": "string",
  "Group": "string",
  "Description": "string"
}
```

<h3 id="updategroup-parameters">Parameters</h3>

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
|» GroupName|body|string|false|Don't use this parameter. Use <code>Group</code> instead.|
|» Group|body|string|false|The name or the ARN of the resource group to modify.|
|» Description|body|string|false|The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
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

<h3 id="updategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGroupOutput](#schemaupdategroupoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGroupQuery

<a id="opIdUpdateGroupQuery"></a>

> Code samples

```bash
curl https://resource-groups.us-east-1.amazonaws.com/update-group-query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupName": "string",
    "Group": "string",
    "ResourceQuery": {
      "Type": {},
      "Query": {}
    }
  }'
```

`POST /update-group-query`

<p>Updates the resource query of a group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UpdateGroupQuery</code> </p> </li> </ul>

> Body parameter

```json
{
  "GroupName": "string",
  "Group": "string",
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  }
}
```

<h3 id="updategroupquery-parameters">Parameters</h3>

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
|» GroupName|body|string|false|Don't use this parameter. Use <code>Group</code> instead.|
|» Group|body|string|false|The name or the ARN of the resource group to query.|
|» ResourceQuery|body|object|true|<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>|
|» » Type|body|object|false|none|
|» » Query|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "GroupQuery": {
    "GroupName": {},
    "ResourceQuery": {
      "Type": {},
      "Query": {}
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

<h3 id="updategroupquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGroupQueryOutput](#schemaupdategroupqueryoutput)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|MethodNotAllowedException|[MethodNotAllowedException](#schemamethodnotallowedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateGroupOutput">CreateGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupoutput"></a>
<a id="schema_CreateGroupOutput"></a>
<a id="tocScreategroupoutput"></a>
<a id="tocscreategroupoutput"></a>

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
  },
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "GroupConfiguration": {
    "Configuration": {},
    "ProposedConfiguration": {},
    "Status": {},
    "FailureReason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|
|ResourceQuery|object|false|none|none|
|Tags|object|false|none|none|
|GroupConfiguration|object|false|none|none|

<h2 id="tocS_QueryType">QueryType</h2>
<!-- backwards compatibility -->
<a id="schemaquerytype"></a>
<a id="schema_QueryType"></a>
<a id="tocSquerytype"></a>
<a id="tocsquerytype"></a>

```json
"TAG_FILTERS_1_0"
```

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

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

<h2 id="tocS_GroupConfigurationItem">GroupConfigurationItem</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationitem"></a>
<a id="schema_GroupConfigurationItem"></a>
<a id="tocSgroupconfigurationitem"></a>
<a id="tocsgroupconfigurationitem"></a>

```json
{
  "Type": {},
  "Parameters": {}
}
```

An item in a group configuration. A group service configuration can have one or more items. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_MethodNotAllowedException">MethodNotAllowedException</h2>
<!-- backwards compatibility -->
<a id="schemamethodnotallowedexception"></a>
<a id="schema_MethodNotAllowedException"></a>
<a id="tocSmethodnotallowedexception"></a>
<a id="tocsmethodnotallowedexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
```

<h2 id="tocS_DeleteGroupOutput">DeleteGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupoutput"></a>
<a id="schema_DeleteGroupOutput"></a>
<a id="tocSdeletegroupoutput"></a>
<a id="tocsdeletegroupoutput"></a>

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetAccountSettingsOutput">GetAccountSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsoutput"></a>
<a id="schema_GetAccountSettingsOutput"></a>
<a id="tocSgetaccountsettingsoutput"></a>
<a id="tocsgetaccountsettingsoutput"></a>

```json
{
  "AccountSettings": {
    "GroupLifecycleEventsDesiredStatus": {},
    "GroupLifecycleEventsStatus": {},
    "GroupLifecycleEventsStatusMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountSettings|object|false|none|none|

<h2 id="tocS_GetGroupOutput">GetGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupoutput"></a>
<a id="schema_GetGroupOutput"></a>
<a id="tocSgetgroupoutput"></a>
<a id="tocsgetgroupoutput"></a>

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_GetGroupConfigurationOutput">GetGroupConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupconfigurationoutput"></a>
<a id="schema_GetGroupConfigurationOutput"></a>
<a id="tocSgetgroupconfigurationoutput"></a>
<a id="tocsgetgroupconfigurationoutput"></a>

```json
{
  "GroupConfiguration": {
    "Configuration": {},
    "ProposedConfiguration": {},
    "Status": {},
    "FailureReason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupConfiguration|object|false|none|none|

<h2 id="tocS_GetGroupQueryOutput">GetGroupQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupqueryoutput"></a>
<a id="schema_GetGroupQueryOutput"></a>
<a id="tocSgetgroupqueryoutput"></a>
<a id="tocsgetgroupqueryoutput"></a>

```json
{
  "GroupQuery": {
    "GroupName": {},
    "ResourceQuery": {
      "Type": {},
      "Query": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupQuery|object|false|none|none|

<h2 id="tocS_GetTagsOutput">GetTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettagsoutput"></a>
<a id="schema_GetTagsOutput"></a>
<a id="tocSgettagsoutput"></a>
<a id="tocsgettagsoutput"></a>

```json
{
  "Arn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GroupResourcesOutput">GroupResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagroupresourcesoutput"></a>
<a id="schema_GroupResourcesOutput"></a>
<a id="tocSgroupresourcesoutput"></a>
<a id="tocsgroupresourcesoutput"></a>

```json
{
  "Succeeded": {},
  "Failed": {},
  "Pending": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Succeeded|object|false|none|none|
|Failed|object|false|none|none|
|Pending|object|false|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ListGroupResourcesOutput">ListGroupResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupresourcesoutput"></a>
<a id="schema_ListGroupResourcesOutput"></a>
<a id="tocSlistgroupresourcesoutput"></a>
<a id="tocslistgroupresourcesoutput"></a>

```json
{
  "Resources": {},
  "ResourceIdentifiers": {},
  "NextToken": {},
  "QueryErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resources|object|false|none|none|
|ResourceIdentifiers|object|false|none|none|
|NextToken|object|false|none|none|
|QueryErrors|object|false|none|none|

<h2 id="tocS_ResourceFilter">ResourceFilter</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefilter"></a>
<a id="schema_ResourceFilter"></a>
<a id="tocSresourcefilter"></a>
<a id="tocsresourcefilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A filter name and value pair that is used to obtain more specific results from a list of resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_ListGroupsOutput">ListGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsoutput"></a>
<a id="schema_ListGroupsOutput"></a>
<a id="tocSlistgroupsoutput"></a>
<a id="tocslistgroupsoutput"></a>

```json
{
  "GroupIdentifiers": {},
  "Groups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupIdentifiers|object|false|none|none|
|Groups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GroupFilter">GroupFilter</h2>
<!-- backwards compatibility -->
<a id="schemagroupfilter"></a>
<a id="schema_GroupFilter"></a>
<a id="tocSgroupfilter"></a>
<a id="tocsgroupfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A filter collection that you can use to restrict the results from a <code>List</code> operation to only those you want to include.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_PutGroupConfigurationOutput">PutGroupConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputgroupconfigurationoutput"></a>
<a id="schema_PutGroupConfigurationOutput"></a>
<a id="tocSputgroupconfigurationoutput"></a>
<a id="tocsputgroupconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_SearchResourcesOutput">SearchResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesoutput"></a>
<a id="schema_SearchResourcesOutput"></a>
<a id="tocSsearchresourcesoutput"></a>
<a id="tocssearchresourcesoutput"></a>

```json
{
  "ResourceIdentifiers": {},
  "NextToken": {},
  "QueryErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifiers|object|false|none|none|
|NextToken|object|false|none|none|
|QueryErrors|object|false|none|none|

<h2 id="tocS_TagOutput">TagOutput</h2>
<!-- backwards compatibility -->
<a id="schematagoutput"></a>
<a id="schema_TagOutput"></a>
<a id="tocStagoutput"></a>
<a id="tocstagoutput"></a>

```json
{
  "Arn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UngroupResourcesOutput">UngroupResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaungroupresourcesoutput"></a>
<a id="schema_UngroupResourcesOutput"></a>
<a id="tocSungroupresourcesoutput"></a>
<a id="tocsungroupresourcesoutput"></a>

```json
{
  "Succeeded": {},
  "Failed": {},
  "Pending": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Succeeded|object|false|none|none|
|Failed|object|false|none|none|
|Pending|object|false|none|none|

<h2 id="tocS_UntagOutput">UntagOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagoutput"></a>
<a id="schema_UntagOutput"></a>
<a id="tocSuntagoutput"></a>
<a id="tocsuntagoutput"></a>

```json
{
  "Arn": {},
  "Keys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Keys|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateAccountSettingsOutput">UpdateAccountSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountsettingsoutput"></a>
<a id="schema_UpdateAccountSettingsOutput"></a>
<a id="tocSupdateaccountsettingsoutput"></a>
<a id="tocsupdateaccountsettingsoutput"></a>

```json
{
  "AccountSettings": {
    "GroupLifecycleEventsDesiredStatus": {},
    "GroupLifecycleEventsStatus": {},
    "GroupLifecycleEventsStatusMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountSettings|object|false|none|none|

<h2 id="tocS_UpdateGroupOutput">UpdateGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupoutput"></a>
<a id="schema_UpdateGroupOutput"></a>
<a id="tocSupdategroupoutput"></a>
<a id="tocsupdategroupoutput"></a>

```json
{
  "Group": {
    "GroupArn": {},
    "Name": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_UpdateGroupQueryOutput">UpdateGroupQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupqueryoutput"></a>
<a id="schema_UpdateGroupQueryOutput"></a>
<a id="tocSupdategroupqueryoutput"></a>
<a id="tocsupdategroupqueryoutput"></a>

```json
{
  "GroupQuery": {
    "GroupName": {},
    "ResourceQuery": {
      "Type": {},
      "Query": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupQuery|object|false|none|none|

<h2 id="tocS_GroupLifecycleEventsDesiredStatus">GroupLifecycleEventsDesiredStatus</h2>
<!-- backwards compatibility -->
<a id="schemagrouplifecycleeventsdesiredstatus"></a>
<a id="schema_GroupLifecycleEventsDesiredStatus"></a>
<a id="tocSgrouplifecycleeventsdesiredstatus"></a>
<a id="tocsgrouplifecycleeventsdesiredstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_GroupLifecycleEventsStatus">GroupLifecycleEventsStatus</h2>
<!-- backwards compatibility -->
<a id="schemagrouplifecycleeventsstatus"></a>
<a id="schema_GroupLifecycleEventsStatus"></a>
<a id="tocSgrouplifecycleeventsstatus"></a>
<a id="tocsgrouplifecycleeventsstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_GroupLifecycleEventsStatusMessage">GroupLifecycleEventsStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemagrouplifecycleeventsstatusmessage"></a>
<a id="schema_GroupLifecycleEventsStatusMessage"></a>
<a id="tocSgrouplifecycleeventsstatusmessage"></a>
<a id="tocsgrouplifecycleeventsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_AccountSettings">AccountSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsettings"></a>
<a id="schema_AccountSettings"></a>
<a id="tocSaccountsettings"></a>
<a id="tocsaccountsettings"></a>

```json
{
  "GroupLifecycleEventsDesiredStatus": {},
  "GroupLifecycleEventsStatus": {},
  "GroupLifecycleEventsStatusMessage": {}
}
```

The Resource Groups settings for this Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupLifecycleEventsDesiredStatus|object|false|none|none|
|GroupLifecycleEventsStatus|object|false|none|none|
|GroupLifecycleEventsStatusMessage|object|false|none|none|

<h2 id="tocS_GroupName">GroupName</h2>
<!-- backwards compatibility -->
<a id="schemagroupname"></a>
<a id="schema_GroupName"></a>
<a id="tocSgroupname"></a>
<a id="tocsgroupname"></a>

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

<h2 id="tocS_ResourceQuery">ResourceQuery</h2>
<!-- backwards compatibility -->
<a id="schemaresourcequery"></a>
<a id="schema_ResourceQuery"></a>
<a id="tocSresourcequery"></a>
<a id="tocsresourcequery"></a>

```json
{
  "Type": {},
  "Query": {}
}
```

<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Query|object|true|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

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

<h2 id="tocS_GroupConfigurationList">GroupConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationlist"></a>
<a id="schema_GroupConfigurationList"></a>
<a id="tocSgroupconfigurationlist"></a>
<a id="tocsgroupconfigurationlist"></a>

```json
[
  {
    "Type": {},
    "Parameters": {}
  }
]
```

<h2 id="tocS_CreateGroupInput">CreateGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupinput"></a>
<a id="schema_CreateGroupInput"></a>
<a id="tocScreategroupinput"></a>
<a id="tocscreategroupinput"></a>

```json
{
  "Name": {},
  "Description": {},
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Configuration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ResourceQuery|object|false|none|none|
|Tags|object|false|none|none|
|Configuration|object|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "GroupArn": {},
  "Name": {},
  "Description": {}
}
```

<p>A resource group that contains Amazon Web Services resources. You can assign resources to the group by associating either of the following elements with the group:</p> <ul> <li> <p> <a>ResourceQuery</a> - Use a resource query to specify a set of tag keys and values. All resources in the same Amazon Web Services Region and Amazon Web Services account that have those keys with the same values are included in the group. You can add a resource query when you create the group, or later by using the <a>PutGroupConfiguration</a> operation.</p> </li> <li> <p> <a>GroupConfiguration</a> - Use a service configuration to associate the group with an Amazon Web Services service. The configuration specifies which resource types can be included in the group.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupArn|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_GroupConfiguration">GroupConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfiguration"></a>
<a id="schema_GroupConfiguration"></a>
<a id="tocSgroupconfiguration"></a>
<a id="tocsgroupconfiguration"></a>

```json
{
  "Configuration": {},
  "ProposedConfiguration": {},
  "Status": {},
  "FailureReason": {}
}
```

A service configuration associated with a resource group. The configuration options are determined by the Amazon Web Services service that defines the <code>Type</code>, and specifies which resources can be included in the group. You can add a service configuration when you create the group by using <a>CreateGroup</a>, or later by using the <a>PutGroupConfiguration</a> operation. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|false|none|none|
|ProposedConfiguration|object|false|none|none|
|Status|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_GroupString">GroupString</h2>
<!-- backwards compatibility -->
<a id="schemagroupstring"></a>
<a id="schema_GroupString"></a>
<a id="tocSgroupstring"></a>
<a id="tocsgroupstring"></a>

```json
"string"
```

<h2 id="tocS_DeleteGroupInput">DeleteGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupinput"></a>
<a id="schema_DeleteGroupInput"></a>
<a id="tocSdeletegroupinput"></a>
<a id="tocsdeletegroupinput"></a>

```json
{
  "GroupName": {},
  "Group": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|Group|object|false|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
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

<h2 id="tocS_FailedResource">FailedResource</h2>
<!-- backwards compatibility -->
<a id="schemafailedresource"></a>
<a id="schema_FailedResource"></a>
<a id="tocSfailedresource"></a>
<a id="tocsfailedresource"></a>

```json
{
  "ResourceArn": {},
  "ErrorMessage": {},
  "ErrorCode": {}
}
```

A resource that failed to be added to or removed from a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ErrorCode|object|false|none|none|

<h2 id="tocS_FailedResourceList">FailedResourceList</h2>
<!-- backwards compatibility -->
<a id="schemafailedresourcelist"></a>
<a id="schema_FailedResourceList"></a>
<a id="tocSfailedresourcelist"></a>
<a id="tocsfailedresourcelist"></a>

```json
[
  {
    "ResourceArn": {},
    "ErrorMessage": {},
    "ErrorCode": {}
  }
]
```

<h2 id="tocS_GetGroupConfigurationInput">GetGroupConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupconfigurationinput"></a>
<a id="schema_GetGroupConfigurationInput"></a>
<a id="tocSgetgroupconfigurationinput"></a>
<a id="tocsgetgroupconfigurationinput"></a>

```json
{
  "Group": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_GetGroupInput">GetGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupinput"></a>
<a id="schema_GetGroupInput"></a>
<a id="tocSgetgroupinput"></a>
<a id="tocsgetgroupinput"></a>

```json
{
  "GroupName": {},
  "Group": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|Group|object|false|none|none|

<h2 id="tocS_GetGroupQueryInput">GetGroupQueryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupqueryinput"></a>
<a id="schema_GetGroupQueryInput"></a>
<a id="tocSgetgroupqueryinput"></a>
<a id="tocsgetgroupqueryinput"></a>

```json
{
  "GroupName": {},
  "Group": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|Group|object|false|none|none|

<h2 id="tocS_GroupQuery">GroupQuery</h2>
<!-- backwards compatibility -->
<a id="schemagroupquery"></a>
<a id="schema_GroupQuery"></a>
<a id="tocSgroupquery"></a>
<a id="tocsgroupquery"></a>

```json
{
  "GroupName": {},
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  }
}
```

A mapping of a query attached to a resource group that determines the Amazon Web Services resources that are members of the group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|ResourceQuery|object|true|none|none|

<h2 id="tocS_GroupArn">GroupArn</h2>
<!-- backwards compatibility -->
<a id="schemagrouparn"></a>
<a id="schema_GroupArn"></a>
<a id="tocSgrouparn"></a>
<a id="tocsgrouparn"></a>

```json
"stringstring"
```

<h2 id="tocS_GetTagsInput">GetTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemagettagsinput"></a>
<a id="schema_GetTagsInput"></a>
<a id="tocSgettagsinput"></a>
<a id="tocsgettagsinput"></a>

```json
{}
```

<h2 id="tocS_GroupConfigurationStatus">GroupConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationstatus"></a>
<a id="schema_GroupConfigurationStatus"></a>
<a id="tocSgroupconfigurationstatus"></a>
<a id="tocsgroupconfigurationstatus"></a>

```json
"UPDATING"
```

<h2 id="tocS_GroupConfigurationFailureReason">GroupConfigurationFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationfailurereason"></a>
<a id="schema_GroupConfigurationFailureReason"></a>
<a id="tocSgroupconfigurationfailurereason"></a>
<a id="tocsgroupconfigurationfailurereason"></a>

```json
"string"
```

<h2 id="tocS_GroupConfigurationType">GroupConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationtype"></a>
<a id="schema_GroupConfigurationType"></a>
<a id="tocSgroupconfigurationtype"></a>
<a id="tocsgroupconfigurationtype"></a>

```json
"string"
```

<h2 id="tocS_GroupParameterList">GroupParameterList</h2>
<!-- backwards compatibility -->
<a id="schemagroupparameterlist"></a>
<a id="schema_GroupParameterList"></a>
<a id="tocSgroupparameterlist"></a>
<a id="tocsgroupparameterlist"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_GroupConfigurationParameterName">GroupConfigurationParameterName</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationparametername"></a>
<a id="schema_GroupConfigurationParameterName"></a>
<a id="tocSgroupconfigurationparametername"></a>
<a id="tocsgroupconfigurationparametername"></a>

```json
"string"
```

<h2 id="tocS_GroupConfigurationParameterValueList">GroupConfigurationParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationparametervaluelist"></a>
<a id="schema_GroupConfigurationParameterValueList"></a>
<a id="tocSgroupconfigurationparametervaluelist"></a>
<a id="tocsgroupconfigurationparametervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupConfigurationParameter">GroupConfigurationParameter</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationparameter"></a>
<a id="schema_GroupConfigurationParameter"></a>
<a id="tocSgroupconfigurationparameter"></a>
<a id="tocsgroupconfigurationparameter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A parameter for a group configuration item. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|false|none|none|

<h2 id="tocS_GroupConfigurationParameterValue">GroupConfigurationParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfigurationparametervalue"></a>
<a id="schema_GroupConfigurationParameterValue"></a>
<a id="tocSgroupconfigurationparametervalue"></a>
<a id="tocsgroupconfigurationparametervalue"></a>

```json
"string"
```

<h2 id="tocS_GroupFilterName">GroupFilterName</h2>
<!-- backwards compatibility -->
<a id="schemagroupfiltername"></a>
<a id="schema_GroupFilterName"></a>
<a id="tocSgroupfiltername"></a>
<a id="tocsgroupfiltername"></a>

```json
"resource-type"
```

<h2 id="tocS_GroupFilterValues">GroupFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemagroupfiltervalues"></a>
<a id="schema_GroupFilterValues"></a>
<a id="tocSgroupfiltervalues"></a>
<a id="tocsgroupfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupFilterList">GroupFilterList</h2>
<!-- backwards compatibility -->
<a id="schemagroupfilterlist"></a>
<a id="schema_GroupFilterList"></a>
<a id="tocSgroupfilterlist"></a>
<a id="tocsgroupfilterlist"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_GroupFilterValue">GroupFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemagroupfiltervalue"></a>
<a id="schema_GroupFilterValue"></a>
<a id="tocSgroupfiltervalue"></a>
<a id="tocsgroupfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_GroupIdentifier">GroupIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemagroupidentifier"></a>
<a id="schema_GroupIdentifier"></a>
<a id="tocSgroupidentifier"></a>
<a id="tocsgroupidentifier"></a>

```json
{
  "GroupName": {},
  "GroupArn": {}
}
```

The unique identifiers for a resource group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|GroupArn|object|false|none|none|

<h2 id="tocS_GroupIdentifierList">GroupIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemagroupidentifierlist"></a>
<a id="schema_GroupIdentifierList"></a>
<a id="tocSgroupidentifierlist"></a>
<a id="tocsgroupidentifierlist"></a>

```json
[
  {
    "GroupName": {},
    "GroupArn": {}
  }
]
```

<h2 id="tocS_GroupList">GroupList</h2>
<!-- backwards compatibility -->
<a id="schemagrouplist"></a>
<a id="schema_GroupList"></a>
<a id="tocSgrouplist"></a>
<a id="tocsgrouplist"></a>

```json
[
  {
    "GroupArn": {},
    "Name": {},
    "Description": {}
  }
]
```

<h2 id="tocS_ResourceArnList">ResourceArnList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnlist"></a>
<a id="schema_ResourceArnList"></a>
<a id="tocSresourcearnlist"></a>
<a id="tocsresourcearnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupResourcesInput">GroupResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemagroupresourcesinput"></a>
<a id="schema_GroupResourcesInput"></a>
<a id="tocSgroupresourcesinput"></a>
<a id="tocsgroupresourcesinput"></a>

```json
{
  "Group": {},
  "ResourceArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|true|none|none|
|ResourceArns|object|true|none|none|

<h2 id="tocS_PendingResourceList">PendingResourceList</h2>
<!-- backwards compatibility -->
<a id="schemapendingresourcelist"></a>
<a id="schema_PendingResourceList"></a>
<a id="tocSpendingresourcelist"></a>
<a id="tocspendingresourcelist"></a>

```json
[
  {
    "ResourceArn": {}
  }
]
```

<h2 id="tocS_ResourceFilterList">ResourceFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefilterlist"></a>
<a id="schema_ResourceFilterList"></a>
<a id="tocSresourcefilterlist"></a>
<a id="tocsresourcefilterlist"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListGroupResourcesInput">ListGroupResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupresourcesinput"></a>
<a id="schema_ListGroupResourcesInput"></a>
<a id="tocSlistgroupresourcesinput"></a>
<a id="tocslistgroupresourcesinput"></a>

```json
{
  "GroupName": {},
  "Group": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|Group|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ResourceIdentifier">ResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifier"></a>
<a id="schema_ResourceIdentifier"></a>
<a id="tocSresourceidentifier"></a>
<a id="tocsresourceidentifier"></a>

```json
{
  "ResourceArn": {},
  "ResourceType": {}
}
```

A structure that contains the ARN of a resource and its resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_ResourceStatus">ResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatus"></a>
<a id="schema_ResourceStatus"></a>
<a id="tocSresourcestatus"></a>
<a id="tocsresourcestatus"></a>

```json
{
  "Name": {}
}
```

A structure that identifies the current group membership status for a resource. Adding a resource to a resource group is performed asynchronously as a background task. A <code>PENDING</code> status indicates, for this resource, that the process isn't completed yet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_ListGroupResourcesItem">ListGroupResourcesItem</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupresourcesitem"></a>
<a id="schema_ListGroupResourcesItem"></a>
<a id="tocSlistgroupresourcesitem"></a>
<a id="tocslistgroupresourcesitem"></a>

```json
{
  "Identifier": {
    "ResourceArn": {},
    "ResourceType": {}
  },
  "Status": {
    "Name": {}
  }
}
```

A structure returned by the <a>ListGroupResources</a> operation that contains identity and group membership status information for one of the resources in the group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|[ResourceIdentifier](#schemaresourceidentifier)|false|none|A structure that contains the ARN of a resource and its resource type.|
|Status|object|false|none|none|

<h2 id="tocS_ListGroupResourcesItemList">ListGroupResourcesItemList</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupresourcesitemlist"></a>
<a id="schema_ListGroupResourcesItemList"></a>
<a id="tocSlistgroupresourcesitemlist"></a>
<a id="tocslistgroupresourcesitemlist"></a>

```json
[
  {
    "Identifier": {
      "ResourceArn": {},
      "ResourceType": {}
    },
    "Status": {
      "Name": {}
    }
  }
]
```

<h2 id="tocS_ResourceIdentifierList">ResourceIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifierlist"></a>
<a id="schema_ResourceIdentifierList"></a>
<a id="tocSresourceidentifierlist"></a>
<a id="tocsresourceidentifierlist"></a>

```json
[
  {
    "ResourceArn": {},
    "ResourceType": {}
  }
]
```

<h2 id="tocS_QueryErrorList">QueryErrorList</h2>
<!-- backwards compatibility -->
<a id="schemaqueryerrorlist"></a>
<a id="schema_QueryErrorList"></a>
<a id="tocSqueryerrorlist"></a>
<a id="tocsqueryerrorlist"></a>

```json
[
  {
    "ErrorCode": {},
    "Message": {}
  }
]
```

<h2 id="tocS_ListGroupsInput">ListGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsinput"></a>
<a id="schema_ListGroupsInput"></a>
<a id="tocSlistgroupsinput"></a>
<a id="tocslistgroupsinput"></a>

```json
{
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|

<h2 id="tocS_PendingResource">PendingResource</h2>
<!-- backwards compatibility -->
<a id="schemapendingresource"></a>
<a id="schema_PendingResource"></a>
<a id="tocSpendingresource"></a>
<a id="tocspendingresource"></a>

```json
{
  "ResourceArn": {}
}
```

A structure that identifies a resource that is currently pending addition to the group as a member. Adding a resource to a resource group happens asynchronously as a background task and this one isn't completed yet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|

<h2 id="tocS_PutGroupConfigurationInput">PutGroupConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaputgroupconfigurationinput"></a>
<a id="schema_PutGroupConfigurationInput"></a>
<a id="tocSputgroupconfigurationinput"></a>
<a id="tocsputgroupconfigurationinput"></a>

```json
{
  "Group": {},
  "Configuration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|
|Configuration|object|false|none|none|

<h2 id="tocS_QueryErrorCode">QueryErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaqueryerrorcode"></a>
<a id="schema_QueryErrorCode"></a>
<a id="tocSqueryerrorcode"></a>
<a id="tocsqueryerrorcode"></a>

```json
"CLOUDFORMATION_STACK_INACTIVE"
```

<h2 id="tocS_QueryErrorMessage">QueryErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaqueryerrormessage"></a>
<a id="schema_QueryErrorMessage"></a>
<a id="tocSqueryerrormessage"></a>
<a id="tocsqueryerrormessage"></a>

```json
"string"
```

<h2 id="tocS_QueryError">QueryError</h2>
<!-- backwards compatibility -->
<a id="schemaqueryerror"></a>
<a id="schema_QueryError"></a>
<a id="tocSqueryerror"></a>
<a id="tocsqueryerror"></a>

```json
{
  "ErrorCode": {},
  "Message": {}
}
```

A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFront stack-based queries. The error occurs if the CloudFront stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that Resource Groups could not complete the operation, but the resulting group might have no member resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_ResourceFilterName">ResourceFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefiltername"></a>
<a id="schema_ResourceFilterName"></a>
<a id="tocSresourcefiltername"></a>
<a id="tocsresourcefiltername"></a>

```json
"resource-type"
```

<h2 id="tocS_ResourceFilterValues">ResourceFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefiltervalues"></a>
<a id="schema_ResourceFilterValues"></a>
<a id="tocSresourcefiltervalues"></a>
<a id="tocsresourcefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceFilterValue">ResourceFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourcefiltervalue"></a>
<a id="schema_ResourceFilterValue"></a>
<a id="tocSresourcefiltervalue"></a>
<a id="tocsresourcefiltervalue"></a>

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
"string"
```

<h2 id="tocS_ResourceStatusValue">ResourceStatusValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatusvalue"></a>
<a id="schema_ResourceStatusValue"></a>
<a id="tocSresourcestatusvalue"></a>
<a id="tocsresourcestatusvalue"></a>

```json
"PENDING"
```

<h2 id="tocS_SearchResourcesInput">SearchResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesinput"></a>
<a id="schema_SearchResourcesInput"></a>
<a id="tocSsearchresourcesinput"></a>
<a id="tocssearchresourcesinput"></a>

```json
{
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceQuery|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TagInput">TagInput</h2>
<!-- backwards compatibility -->
<a id="schemataginput"></a>
<a id="schema_TagInput"></a>
<a id="tocStaginput"></a>
<a id="tocstaginput"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

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

<h2 id="tocS_UngroupResourcesInput">UngroupResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemaungroupresourcesinput"></a>
<a id="schema_UngroupResourcesInput"></a>
<a id="tocSungroupresourcesinput"></a>
<a id="tocsungroupresourcesinput"></a>

```json
{
  "Group": {},
  "ResourceArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|true|none|none|
|ResourceArns|object|true|none|none|

<h2 id="tocS_UntagInput">UntagInput</h2>
<!-- backwards compatibility -->
<a id="schemauntaginput"></a>
<a id="schema_UntagInput"></a>
<a id="tocSuntaginput"></a>
<a id="tocsuntaginput"></a>

```json
{
  "Keys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Keys|object|true|none|none|

<h2 id="tocS_UpdateAccountSettingsInput">UpdateAccountSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountsettingsinput"></a>
<a id="schema_UpdateAccountSettingsInput"></a>
<a id="tocSupdateaccountsettingsinput"></a>
<a id="tocsupdateaccountsettingsinput"></a>

```json
{
  "GroupLifecycleEventsDesiredStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupLifecycleEventsDesiredStatus|object|false|none|none|

<h2 id="tocS_UpdateGroupInput">UpdateGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupinput"></a>
<a id="schema_UpdateGroupInput"></a>
<a id="tocSupdategroupinput"></a>
<a id="tocsupdategroupinput"></a>

```json
{
  "GroupName": {},
  "Group": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|Group|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateGroupQueryInput">UpdateGroupQueryInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupqueryinput"></a>
<a id="schema_UpdateGroupQueryInput"></a>
<a id="tocSupdategroupqueryinput"></a>
<a id="tocsupdategroupqueryinput"></a>

```json
{
  "GroupName": {},
  "Group": {},
  "ResourceQuery": {
    "Type": {},
    "Query": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|Group|object|false|none|none|
|ResourceQuery|object|true|none|none|
