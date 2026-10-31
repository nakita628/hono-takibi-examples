<h1 id="aws-application-discovery-service">AWS Application Discovery Service v2015-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Web Services Application Discovery Service</fullname> <p>Amazon Web Services Application Discovery Service helps you plan application migration projects. It automatically identifies servers, virtual machines (VMs), and network dependencies in your on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>. Application Discovery Service offers three ways of performing discovery and collecting data about your on-premises servers:</p> <ul> <li> <p> <b>Agentless discovery</b> is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. It does not work in non-VMware environments.</p> <ul> <li> <p>Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment.</p> </li> <li> <p>Agentless discovery doesn't collect information about network dependencies, only agent-based discovery collects that information.</p> </li> </ul> </li> </ul> <ul> <li> <p> <b>Agent-based discovery</b> collects a richer set of data than agentless discovery by using the Amazon Web Services Application Discovery Agent, which you install on one or more hosts in your data center.</p> <ul> <li> <p> The agent captures infrastructure and application information, including an inventory of running processes, system performance information, resource utilization, and network dependencies.</p> </li> <li> <p>The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud. </p> </li> </ul> </li> </ul> <ul> <li> <p> <b>Amazon Web Services Partner Network (APN) solutions</b> integrate with Application Discovery Service, enabling you to import details of your on-premises environment directly into Migration Hub without using the discovery connector or discovery agent.</p> <ul> <li> <p>Third-party application discovery tools can query Amazon Web Services Application Discovery Service, and they can write to the Application Discovery Service database using the public API.</p> </li> <li> <p>In this way, you can import data into Migration Hub and view it, so that you can associate applications with servers and track migrations.</p> </li> </ul> </li> </ul> <p> <b>Recommendations</b> </p> <p>We recommend that you use agent-based discovery for non-VMware environments, and whenever you want to collect information about network dependencies. You can run agent-based and agentless discovery simultaneously. Use agentless discovery to complete the initial infrastructure assessment quickly, and then install agents on select hosts to collect additional information.</p> <p> <b>Working With This Guide</b> </p> <p>This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <note> <ul> <li> <p>Remember that you must set your Migration Hub home region before you call any of these APIs.</p> </li> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>Although it is unlikely, the Migration Hub home region could change. If you call APIs outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home region.</p> </li> </ul> </note> <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application Discovery Service User Guide</a>.</p> <important> <p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">Amazon Web Services Privacy Policy</a>. You can operate Application Discovery Service offline to inspect collected data before it is shared with the service.</p> </important>

Base URLs:

* <a href="http://discovery.us-east-1.amazonaws.com">http://discovery.us-east-1.amazonaws.com</a> - The AWS Application Discovery Service multi-region endpoint

* <a href="https://discovery.us-east-1.amazonaws.com">https://discovery.us-east-1.amazonaws.com</a> - The AWS Application Discovery Service multi-region endpoint

* <a href="http://discovery.cn-north-1.amazonaws.com.cn">http://discovery.cn-north-1.amazonaws.com.cn</a> - The AWS Application Discovery Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://discovery.cn-north-1.amazonaws.com.cn">https://discovery.cn-north-1.amazonaws.com.cn</a> - The AWS Application Discovery Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/discovery/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-application-discovery-service-default">Default</h1>

## AssociateConfigurationItemsToApplication

<a id="opIdAssociateConfigurationItemsToApplication"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication' \
  -d '{
    "applicationConfigurationId": {},
    "configurationIds": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication`

Associates one or more configuration items with an application.

> Body parameter

```json
{
  "applicationConfigurationId": {},
  "configurationIds": {}
}
```

<h3 id="associateconfigurationitemstoapplication-parameters">Parameters</h3>

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
|body|body|[AssociateConfigurationItemsToApplicationRequest](#schemaassociateconfigurationitemstoapplicationrequest)|true|none|
|» applicationConfigurationId|body|object|true|none|
|» configurationIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication|

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

<h3 id="associateconfigurationitemstoapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateConfigurationItemsToApplicationResponse](#schemaassociateconfigurationitemstoapplicationresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteImportData

<a id="opIdBatchDeleteImportData"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.BatchDeleteImportData' \
  -d '{
    "importTaskIds": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData`

<p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>

> Body parameter

```json
{
  "importTaskIds": {}
}
```

<h3 id="batchdeleteimportdata-parameters">Parameters</h3>

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
|body|body|[BatchDeleteImportDataRequest](#schemabatchdeleteimportdatarequest)|true|none|
|» importTaskIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.BatchDeleteImportData|

> Example responses

> 200 Response

```json
{
  "errors": {}
}
```

> 480 Response

```json
null
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

<h3 id="batchdeleteimportdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteImportDataResponse](#schemabatchdeleteimportdataresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.CreateApplication' \
  -d '{
    "name": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication`

Creates an application with the given name and description.

> Body parameter

```json
{
  "name": {},
  "description": {}
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|body|body|[CreateApplicationRequest](#schemacreateapplicationrequest)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.CreateApplication|

> Example responses

> 200 Response

```json
{
  "configurationId": {}
}
```

> 480 Response

```json
null
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationResponse](#schemacreateapplicationresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTags

<a id="opIdCreateTags"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.CreateTags' \
  -d '{
    "configurationIds": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags`

<p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>

> Body parameter

```json
{
  "configurationIds": {},
  "tags": {}
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
|» configurationIds|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.CreateTags|

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

<h3 id="createtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTagsResponse](#schemacreatetagsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplications

<a id="opIdDeleteApplications"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DeleteApplications' \
  -d '{
    "configurationIds": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications`

Deletes a list of applications and their associations with configuration items.

> Body parameter

```json
{
  "configurationIds": {}
}
```

<h3 id="deleteapplications-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationsRequest](#schemadeleteapplicationsrequest)|true|none|
|» configurationIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DeleteApplications|

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

<h3 id="deleteapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationsResponse](#schemadeleteapplicationsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTags

<a id="opIdDeleteTags"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DeleteTags' \
  -d '{
    "configurationIds": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags`

Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.

> Body parameter

```json
{
  "configurationIds": {},
  "tags": {}
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
|» configurationIds|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DeleteTags|

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

<h3 id="deletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTagsResponse](#schemadeletetagsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAgents

<a id="opIdDescribeAgents"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DescribeAgents' \
  -d '{
    "agentIds": {},
    "filters": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents`

Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.

> Body parameter

```json
{
  "agentIds": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describeagents-parameters">Parameters</h3>

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
|body|body|[DescribeAgentsRequest](#schemadescribeagentsrequest)|true|none|
|» agentIds|body|object|false|none|
|» filters|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DescribeAgents|

> Example responses

> 200 Response

```json
{
  "agentsInfo": {},
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describeagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAgentsResponse](#schemadescribeagentsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigurations

<a id="opIdDescribeConfigurations"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DescribeConfigurations' \
  -d '{
    "configurationIds": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations`

<p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

> Body parameter

```json
{
  "configurationIds": {}
}
```

<h3 id="describeconfigurations-parameters">Parameters</h3>

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
|body|body|[DescribeConfigurationsRequest](#schemadescribeconfigurationsrequest)|true|none|
|» configurationIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DescribeConfigurations|

> Example responses

> 200 Response

```json
{
  "configurations": {}
}
```

> 480 Response

```json
null
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

<h3 id="describeconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationsResponse](#schemadescribeconfigurationsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContinuousExports

<a id="opIdDescribeContinuousExports"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DescribeContinuousExports' \
  -d '{
    "exportIds": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports`

Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.

> Body parameter

```json
{
  "exportIds": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describecontinuousexports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeContinuousExportsRequest](#schemadescribecontinuousexportsrequest)|true|none|
|» exportIds|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DescribeContinuousExports|

> Example responses

> 200 Response

```json
{
  "descriptions": {},
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

<h3 id="describecontinuousexports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContinuousExportsResponse](#schemadescribecontinuousexportsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExportConfigurations

<a id="opIdDescribeExportConfigurations"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DescribeExportConfigurations' \
  -d '{
    "exportIds": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations`

<aside class="warning">
This operation is deprecated
</aside>

 <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.

> Body parameter

```json
{
  "exportIds": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describeexportconfigurations-parameters">Parameters</h3>

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
|body|body|[DescribeExportConfigurationsRequest](#schemadescribeexportconfigurationsrequest)|true|none|
|» exportIds|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DescribeExportConfigurations|

> Example responses

> 200 Response

```json
{
  "exportsInfo": {},
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

<h3 id="describeexportconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExportConfigurationsResponse](#schemadescribeexportconfigurationsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExportTasks

<a id="opIdDescribeExportTasks"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DescribeExportTasks' \
  -d '{
    "exportIds": {},
    "filters": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks`

Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.

> Body parameter

```json
{
  "exportIds": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describeexporttasks-parameters">Parameters</h3>

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
|body|body|[DescribeExportTasksRequest](#schemadescribeexporttasksrequest)|true|none|
|» exportIds|body|object|false|none|
|» filters|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DescribeExportTasks|

> Example responses

> 200 Response

```json
{
  "exportsInfo": {},
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describeexporttasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExportTasksResponse](#schemadescribeexporttasksresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImportTasks

<a id="opIdDescribeImportTasks"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DescribeImportTasks' \
  -d '{
    "filters": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks`

Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.

> Body parameter

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describeimporttasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeImportTasksRequest](#schemadescribeimporttasksrequest)|true|none|
|» filters|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DescribeImportTasks|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "tasks": {}
}
```

> 480 Response

```json
null
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

<h3 id="describeimporttasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImportTasksResponse](#schemadescribeimporttasksresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTags

<a id="opIdDescribeTags"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DescribeTags' \
  -d '{
    "filters": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags`

<p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>

> Body parameter

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
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
|» filters|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DescribeTags|

> Example responses

> 200 Response

```json
{
  "tags": {},
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

<h3 id="describetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsResponse](#schemadescribetagsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateConfigurationItemsFromApplication

<a id="opIdDisassociateConfigurationItemsFromApplication"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication' \
  -d '{
    "applicationConfigurationId": {},
    "configurationIds": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication`

Disassociates one or more configuration items from an application.

> Body parameter

```json
{
  "applicationConfigurationId": {},
  "configurationIds": {}
}
```

<h3 id="disassociateconfigurationitemsfromapplication-parameters">Parameters</h3>

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
|body|body|[DisassociateConfigurationItemsFromApplicationRequest](#schemadisassociateconfigurationitemsfromapplicationrequest)|true|none|
|» applicationConfigurationId|body|object|true|none|
|» configurationIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication|

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

<h3 id="disassociateconfigurationitemsfromapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateConfigurationItemsFromApplicationResponse](#schemadisassociateconfigurationitemsfromapplicationresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportConfigurations

<a id="opIdExportConfigurations"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.ExportConfigurations'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>

<h3 id="exportconfigurations-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.ExportConfigurations|

> Example responses

> 200 Response

```json
{
  "exportId": {}
}
```

> 480 Response

```json
null
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

<h3 id="exportconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportConfigurationsResponse](#schemaexportconfigurationsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDiscoverySummary

<a id="opIdGetDiscoverySummary"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.GetDiscoverySummary' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary`

<p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>

> Body parameter

```json
{}
```

<h3 id="getdiscoverysummary-parameters">Parameters</h3>

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
|body|body|[GetDiscoverySummaryRequest](#schemagetdiscoverysummaryrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.GetDiscoverySummary|

> Example responses

> 200 Response

```json
{
  "servers": {},
  "applications": {},
  "serversMappedToApplications": {},
  "serversMappedtoTags": {},
  "agentSummary": {
    "activeAgents": {},
    "healthyAgents": {},
    "blackListedAgents": {},
    "shutdownAgents": {},
    "unhealthyAgents": {},
    "totalAgents": {},
    "unknownAgents": {}
  },
  "connectorSummary": {
    "activeConnectors": {},
    "healthyConnectors": {},
    "blackListedConnectors": {},
    "shutdownConnectors": {},
    "unhealthyConnectors": {},
    "totalConnectors": {},
    "unknownConnectors": {}
  },
  "meCollectorSummary": {
    "activeMeCollectors": {},
    "healthyMeCollectors": {},
    "denyListedMeCollectors": {},
    "shutdownMeCollectors": {},
    "unhealthyMeCollectors": {},
    "totalMeCollectors": {},
    "unknownMeCollectors": {}
  },
  "agentlessCollectorSummary": {
    "activeAgentlessCollectors": 0,
    "healthyAgentlessCollectors": 0,
    "denyListedAgentlessCollectors": 0,
    "shutdownAgentlessCollectors": 0,
    "unhealthyAgentlessCollectors": 0,
    "totalAgentlessCollectors": 0,
    "unknownAgentlessCollectors": 0
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

<h3 id="getdiscoverysummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDiscoverySummaryResponse](#schemagetdiscoverysummaryresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigurations

<a id="opIdListConfigurations"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.ListConfigurations' \
  -d '{
    "configurationType": {},
    "filters": {},
    "maxResults": {},
    "nextToken": {},
    "orderBy": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations`

Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.

> Body parameter

```json
{
  "configurationType": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {},
  "orderBy": {}
}
```

<h3 id="listconfigurations-parameters">Parameters</h3>

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
|body|body|[ListConfigurationsRequest](#schemalistconfigurationsrequest)|true|none|
|» configurationType|body|object|true|none|
|» filters|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» orderBy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.ListConfigurations|

> Example responses

> 200 Response

```json
{
  "configurations": {},
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

<h3 id="listconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationsResponse](#schemalistconfigurationsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServerNeighbors

<a id="opIdListServerNeighbors"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.ListServerNeighbors' \
  -d '{
    "configurationId": {},
    "portInformationNeeded": {},
    "neighborConfigurationIds": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors`

Retrieves a list of servers that are one network hop away from a specified server.

> Body parameter

```json
{
  "configurationId": {},
  "portInformationNeeded": {},
  "neighborConfigurationIds": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listserverneighbors-parameters">Parameters</h3>

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
|body|body|[ListServerNeighborsRequest](#schemalistserverneighborsrequest)|true|none|
|» configurationId|body|object|true|none|
|» portInformationNeeded|body|object|false|none|
|» neighborConfigurationIds|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.ListServerNeighbors|

> Example responses

> 200 Response

```json
{
  "neighbors": {},
  "nextToken": {},
  "knownDependencyCount": {}
}
```

> 480 Response

```json
null
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

<h3 id="listserverneighbors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServerNeighborsResponse](#schemalistserverneighborsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartContinuousExport

<a id="opIdStartContinuousExport"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.StartContinuousExport' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport`

Start the continuous flow of agent's discovered data into Amazon Athena.

> Body parameter

```json
{}
```

<h3 id="startcontinuousexport-parameters">Parameters</h3>

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
|body|body|[StartContinuousExportRequest](#schemastartcontinuousexportrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.StartContinuousExport|

> Example responses

> 200 Response

```json
{
  "exportId": {},
  "s3Bucket": {},
  "startTime": {},
  "dataSource": {},
  "schemaStorageConfig": {
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="startcontinuousexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartContinuousExportResponse](#schemastartcontinuousexportresponse)|
|480|480|ConflictErrorException|[ConflictErrorException](#schemaconflicterrorexception)|
|481|481|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|485|485|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|486|486|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|487|487|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDataCollectionByAgentIds

<a id="opIdStartDataCollectionByAgentIds"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds' \
  -d '{
    "agentIds": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds`

Instructs the specified agents or connectors to start collecting data.

> Body parameter

```json
{
  "agentIds": {}
}
```

<h3 id="startdatacollectionbyagentids-parameters">Parameters</h3>

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
|body|body|[StartDataCollectionByAgentIdsRequest](#schemastartdatacollectionbyagentidsrequest)|true|none|
|» agentIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds|

> Example responses

> 200 Response

```json
{
  "agentsConfigurationStatus": {}
}
```

> 480 Response

```json
null
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

<h3 id="startdatacollectionbyagentids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDataCollectionByAgentIdsResponse](#schemastartdatacollectionbyagentidsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartExportTask

<a id="opIdStartExportTask"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.StartExportTask' \
  -d '{
    "exportDataFormat": {},
    "filters": {},
    "startTime": {},
    "endTime": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask`

<p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both Amazon Web Services Agentless Discovery Connector data and summary data from Amazon Web Services Discovery Agents. Export of summary data is limited to two exports per day. </p>

> Body parameter

```json
{
  "exportDataFormat": {},
  "filters": {},
  "startTime": {},
  "endTime": {}
}
```

<h3 id="startexporttask-parameters">Parameters</h3>

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
|body|body|[StartExportTaskRequest](#schemastartexporttaskrequest)|true|none|
|» exportDataFormat|body|object|false|none|
|» filters|body|object|false|none|
|» startTime|body|object|false|none|
|» endTime|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.StartExportTask|

> Example responses

> 200 Response

```json
{
  "exportId": {}
}
```

> 480 Response

```json
null
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

<h3 id="startexporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartExportTaskResponse](#schemastartexporttaskresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartImportTask

<a id="opIdStartImportTask"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.StartImportTask' \
  -d '{
    "clientRequestToken": {},
    "name": {},
    "importUrl": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask`

<p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>

> Body parameter

```json
{
  "clientRequestToken": {},
  "name": {},
  "importUrl": {}
}
```

<h3 id="startimporttask-parameters">Parameters</h3>

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
|body|body|[StartImportTaskRequest](#schemastartimporttaskrequest)|true|none|
|» clientRequestToken|body|object|false|none|
|» name|body|object|true|none|
|» importUrl|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.StartImportTask|

> Example responses

> 200 Response

```json
{
  "task": {
    "importTaskId": {},
    "clientRequestToken": {},
    "name": {},
    "importUrl": {},
    "status": {},
    "importRequestTime": {},
    "importCompletionTime": {},
    "importDeletedTime": {},
    "serverImportSuccess": {},
    "serverImportFailure": {},
    "applicationImportSuccess": {},
    "applicationImportFailure": {},
    "errorsAndFailedEntriesZip": {}
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

<h3 id="startimporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartImportTaskResponse](#schemastartimporttaskresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|485|485|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopContinuousExport

<a id="opIdStopContinuousExport"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.StopContinuousExport' \
  -d '{
    "exportId": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport`

Stop the continuous flow of agent's discovered data into Amazon Athena.

> Body parameter

```json
{
  "exportId": {}
}
```

<h3 id="stopcontinuousexport-parameters">Parameters</h3>

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
|body|body|[StopContinuousExportRequest](#schemastopcontinuousexportrequest)|true|none|
|» exportId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.StopContinuousExport|

> Example responses

> 200 Response

```json
{
  "startTime": {},
  "stopTime": {}
}
```

> 480 Response

```json
null
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

<h3 id="stopcontinuousexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopContinuousExportResponse](#schemastopcontinuousexportresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|487|487|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopDataCollectionByAgentIds

<a id="opIdStopDataCollectionByAgentIds"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds' \
  -d '{
    "agentIds": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds`

Instructs the specified agents or connectors to stop collecting data.

> Body parameter

```json
{
  "agentIds": {}
}
```

<h3 id="stopdatacollectionbyagentids-parameters">Parameters</h3>

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
|body|body|[StopDataCollectionByAgentIdsRequest](#schemastopdatacollectionbyagentidsrequest)|true|none|
|» agentIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds|

> Example responses

> 200 Response

```json
{
  "agentsConfigurationStatus": {}
}
```

> 480 Response

```json
null
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

<h3 id="stopdatacollectionbyagentids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopDataCollectionByAgentIdsResponse](#schemastopdatacollectionbyagentidsresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl 'https://discovery.us-east-1.amazonaws.com/#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSPoseidonService_V2015_11_01.UpdateApplication' \
  -d '{
    "configurationId": {},
    "name": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication`

Updates metadata about an application.

> Body parameter

```json
{
  "configurationId": {},
  "name": {},
  "description": {}
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationRequest](#schemaupdateapplicationrequest)|true|none|
|» configurationId|body|object|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSPoseidonService_V2015_11_01.UpdateApplication|

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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationResponse](#schemaupdateapplicationresponse)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServerInternalErrorException|[ServerInternalErrorException](#schemaserverinternalerrorexception)|
|484|484|HomeRegionNotSetException|[HomeRegionNotSetException](#schemahomeregionnotsetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateConfigurationItemsToApplicationResponse">AssociateConfigurationItemsToApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateconfigurationitemstoapplicationresponse"></a>
<a id="schema_AssociateConfigurationItemsToApplicationResponse"></a>
<a id="tocSassociateconfigurationitemstoapplicationresponse"></a>
<a id="tocsassociateconfigurationitemstoapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateConfigurationItemsToApplicationRequest">AssociateConfigurationItemsToApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateconfigurationitemstoapplicationrequest"></a>
<a id="schema_AssociateConfigurationItemsToApplicationRequest"></a>
<a id="tocSassociateconfigurationitemstoapplicationrequest"></a>
<a id="tocsassociateconfigurationitemstoapplicationrequest"></a>

```json
{
  "applicationConfigurationId": {},
  "configurationIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationConfigurationId|object|true|none|none|
|configurationIds|object|true|none|none|

<h2 id="tocS_AuthorizationErrorException">AuthorizationErrorException</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationerrorexception"></a>
<a id="schema_AuthorizationErrorException"></a>
<a id="tocSauthorizationerrorexception"></a>
<a id="tocsauthorizationerrorexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_ServerInternalErrorException">ServerInternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemaserverinternalerrorexception"></a>
<a id="schema_ServerInternalErrorException"></a>
<a id="tocSserverinternalerrorexception"></a>
<a id="tocsserverinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_HomeRegionNotSetException">HomeRegionNotSetException</h2>
<!-- backwards compatibility -->
<a id="schemahomeregionnotsetexception"></a>
<a id="schema_HomeRegionNotSetException"></a>
<a id="tocShomeregionnotsetexception"></a>
<a id="tocshomeregionnotsetexception"></a>

```json
null
```

<h2 id="tocS_BatchDeleteImportDataResponse">BatchDeleteImportDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimportdataresponse"></a>
<a id="schema_BatchDeleteImportDataResponse"></a>
<a id="tocSbatchdeleteimportdataresponse"></a>
<a id="tocsbatchdeleteimportdataresponse"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_BatchDeleteImportDataRequest">BatchDeleteImportDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimportdatarequest"></a>
<a id="schema_BatchDeleteImportDataRequest"></a>
<a id="tocSbatchdeleteimportdatarequest"></a>
<a id="tocsbatchdeleteimportdatarequest"></a>

```json
{
  "importTaskIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importTaskIds|object|true|none|none|

<h2 id="tocS_CreateApplicationResponse">CreateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresponse"></a>
<a id="schema_CreateApplicationResponse"></a>
<a id="tocScreateapplicationresponse"></a>
<a id="tocscreateapplicationresponse"></a>

```json
{
  "configurationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|object|false|none|none|

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "name": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_CreateTagsResponse">CreateTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagsresponse"></a>
<a id="schema_CreateTagsResponse"></a>
<a id="tocScreatetagsresponse"></a>
<a id="tocscreatetagsresponse"></a>

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
  "configurationIds": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationIds|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteApplicationsResponse">DeleteApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationsresponse"></a>
<a id="schema_DeleteApplicationsResponse"></a>
<a id="tocSdeleteapplicationsresponse"></a>
<a id="tocsdeleteapplicationsresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteApplicationsRequest">DeleteApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationsrequest"></a>
<a id="schema_DeleteApplicationsRequest"></a>
<a id="tocSdeleteapplicationsrequest"></a>
<a id="tocsdeleteapplicationsrequest"></a>

```json
{
  "configurationIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationIds|object|true|none|none|

<h2 id="tocS_DeleteTagsResponse">DeleteTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsresponse"></a>
<a id="schema_DeleteTagsResponse"></a>
<a id="tocSdeletetagsresponse"></a>
<a id="tocsdeletetagsresponse"></a>

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
  "configurationIds": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationIds|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeAgentsResponse">DescribeAgentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentsresponse"></a>
<a id="schema_DescribeAgentsResponse"></a>
<a id="tocSdescribeagentsresponse"></a>
<a id="tocsdescribeagentsresponse"></a>

```json
{
  "agentsInfo": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentsInfo|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeAgentsRequest">DescribeAgentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentsrequest"></a>
<a id="schema_DescribeAgentsRequest"></a>
<a id="tocSdescribeagentsrequest"></a>
<a id="tocsdescribeagentsrequest"></a>

```json
{
  "agentIds": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentIds|object|false|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeConfigurationsResponse">DescribeConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationsresponse"></a>
<a id="schema_DescribeConfigurationsResponse"></a>
<a id="tocSdescribeconfigurationsresponse"></a>
<a id="tocsdescribeconfigurationsresponse"></a>

```json
{
  "configurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|object|false|none|none|

<h2 id="tocS_DescribeConfigurationsRequest">DescribeConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationsrequest"></a>
<a id="schema_DescribeConfigurationsRequest"></a>
<a id="tocSdescribeconfigurationsrequest"></a>
<a id="tocsdescribeconfigurationsrequest"></a>

```json
{
  "configurationIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationIds|object|true|none|none|

<h2 id="tocS_DescribeContinuousExportsResponse">DescribeContinuousExportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontinuousexportsresponse"></a>
<a id="schema_DescribeContinuousExportsResponse"></a>
<a id="tocSdescribecontinuousexportsresponse"></a>
<a id="tocsdescribecontinuousexportsresponse"></a>

```json
{
  "descriptions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeContinuousExportsRequest">DescribeContinuousExportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontinuousexportsrequest"></a>
<a id="schema_DescribeContinuousExportsRequest"></a>
<a id="tocSdescribecontinuousexportsrequest"></a>
<a id="tocsdescribecontinuousexportsrequest"></a>

```json
{
  "exportIds": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportIds|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_OperationNotPermittedException">OperationNotPermittedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotpermittedexception"></a>
<a id="schema_OperationNotPermittedException"></a>
<a id="tocSoperationnotpermittedexception"></a>
<a id="tocsoperationnotpermittedexception"></a>

```json
null
```

<h2 id="tocS_DescribeExportConfigurationsResponse">DescribeExportConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexportconfigurationsresponse"></a>
<a id="schema_DescribeExportConfigurationsResponse"></a>
<a id="tocSdescribeexportconfigurationsresponse"></a>
<a id="tocsdescribeexportconfigurationsresponse"></a>

```json
{
  "exportsInfo": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportsInfo|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeExportConfigurationsRequest">DescribeExportConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexportconfigurationsrequest"></a>
<a id="schema_DescribeExportConfigurationsRequest"></a>
<a id="tocSdescribeexportconfigurationsrequest"></a>
<a id="tocsdescribeexportconfigurationsrequest"></a>

```json
{
  "exportIds": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportIds|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeExportTasksResponse">DescribeExportTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexporttasksresponse"></a>
<a id="schema_DescribeExportTasksResponse"></a>
<a id="tocSdescribeexporttasksresponse"></a>
<a id="tocsdescribeexporttasksresponse"></a>

```json
{
  "exportsInfo": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportsInfo|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeExportTasksRequest">DescribeExportTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexporttasksrequest"></a>
<a id="schema_DescribeExportTasksRequest"></a>
<a id="tocSdescribeexporttasksrequest"></a>
<a id="tocsdescribeexporttasksrequest"></a>

```json
{
  "exportIds": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportIds|object|false|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeImportTasksResponse">DescribeImportTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimporttasksresponse"></a>
<a id="schema_DescribeImportTasksResponse"></a>
<a id="tocSdescribeimporttasksresponse"></a>
<a id="tocsdescribeimporttasksresponse"></a>

```json
{
  "nextToken": {},
  "tasks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|tasks|object|false|none|none|

<h2 id="tocS_DescribeImportTasksRequest">DescribeImportTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimporttasksrequest"></a>
<a id="schema_DescribeImportTasksRequest"></a>
<a id="tocSdescribeimporttasksrequest"></a>
<a id="tocsdescribeimporttasksrequest"></a>

```json
{
  "filters": {},
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

<h2 id="tocS_DescribeTagsResponse">DescribeTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsresponse"></a>
<a id="schema_DescribeTagsResponse"></a>
<a id="tocSdescribetagsresponse"></a>
<a id="tocsdescribetagsresponse"></a>

```json
{
  "tags": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeTagsRequest">DescribeTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsrequest"></a>
<a id="schema_DescribeTagsRequest"></a>
<a id="tocSdescribetagsrequest"></a>
<a id="tocsdescribetagsrequest"></a>

```json
{
  "filters": {},
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

<h2 id="tocS_DisassociateConfigurationItemsFromApplicationResponse">DisassociateConfigurationItemsFromApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconfigurationitemsfromapplicationresponse"></a>
<a id="schema_DisassociateConfigurationItemsFromApplicationResponse"></a>
<a id="tocSdisassociateconfigurationitemsfromapplicationresponse"></a>
<a id="tocsdisassociateconfigurationitemsfromapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateConfigurationItemsFromApplicationRequest">DisassociateConfigurationItemsFromApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconfigurationitemsfromapplicationrequest"></a>
<a id="schema_DisassociateConfigurationItemsFromApplicationRequest"></a>
<a id="tocSdisassociateconfigurationitemsfromapplicationrequest"></a>
<a id="tocsdisassociateconfigurationitemsfromapplicationrequest"></a>

```json
{
  "applicationConfigurationId": {},
  "configurationIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationConfigurationId|object|true|none|none|
|configurationIds|object|true|none|none|

<h2 id="tocS_ExportConfigurationsResponse">ExportConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportconfigurationsresponse"></a>
<a id="schema_ExportConfigurationsResponse"></a>
<a id="tocSexportconfigurationsresponse"></a>
<a id="tocsexportconfigurationsresponse"></a>

```json
{
  "exportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportId|object|false|none|none|

<h2 id="tocS_GetDiscoverySummaryResponse">GetDiscoverySummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdiscoverysummaryresponse"></a>
<a id="schema_GetDiscoverySummaryResponse"></a>
<a id="tocSgetdiscoverysummaryresponse"></a>
<a id="tocsgetdiscoverysummaryresponse"></a>

```json
{
  "servers": {},
  "applications": {},
  "serversMappedToApplications": {},
  "serversMappedtoTags": {},
  "agentSummary": {
    "activeAgents": {},
    "healthyAgents": {},
    "blackListedAgents": {},
    "shutdownAgents": {},
    "unhealthyAgents": {},
    "totalAgents": {},
    "unknownAgents": {}
  },
  "connectorSummary": {
    "activeConnectors": {},
    "healthyConnectors": {},
    "blackListedConnectors": {},
    "shutdownConnectors": {},
    "unhealthyConnectors": {},
    "totalConnectors": {},
    "unknownConnectors": {}
  },
  "meCollectorSummary": {
    "activeMeCollectors": {},
    "healthyMeCollectors": {},
    "denyListedMeCollectors": {},
    "shutdownMeCollectors": {},
    "unhealthyMeCollectors": {},
    "totalMeCollectors": {},
    "unknownMeCollectors": {}
  },
  "agentlessCollectorSummary": {
    "activeAgentlessCollectors": 0,
    "healthyAgentlessCollectors": 0,
    "denyListedAgentlessCollectors": 0,
    "shutdownAgentlessCollectors": 0,
    "unhealthyAgentlessCollectors": 0,
    "totalAgentlessCollectors": 0,
    "unknownAgentlessCollectors": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servers|object|false|none|none|
|applications|object|false|none|none|
|serversMappedToApplications|object|false|none|none|
|serversMappedtoTags|object|false|none|none|
|agentSummary|object|false|none|none|
|connectorSummary|object|false|none|none|
|meCollectorSummary|object|false|none|none|
|agentlessCollectorSummary|[CustomerAgentlessCollectorInfo](#schemacustomeragentlesscollectorinfo)|false|none|none|

<h2 id="tocS_GetDiscoverySummaryRequest">GetDiscoverySummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdiscoverysummaryrequest"></a>
<a id="schema_GetDiscoverySummaryRequest"></a>
<a id="tocSgetdiscoverysummaryrequest"></a>
<a id="tocsgetdiscoverysummaryrequest"></a>

```json
{}
```

<h2 id="tocS_ListConfigurationsResponse">ListConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsresponse"></a>
<a id="schema_ListConfigurationsResponse"></a>
<a id="tocSlistconfigurationsresponse"></a>
<a id="tocslistconfigurationsresponse"></a>

```json
{
  "configurations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListConfigurationsRequest">ListConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsrequest"></a>
<a id="schema_ListConfigurationsRequest"></a>
<a id="tocSlistconfigurationsrequest"></a>
<a id="tocslistconfigurationsrequest"></a>

```json
{
  "configurationType": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {},
  "orderBy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationType|object|true|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_ListServerNeighborsResponse">ListServerNeighborsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistserverneighborsresponse"></a>
<a id="schema_ListServerNeighborsResponse"></a>
<a id="tocSlistserverneighborsresponse"></a>
<a id="tocslistserverneighborsresponse"></a>

```json
{
  "neighbors": {},
  "nextToken": {},
  "knownDependencyCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|neighbors|object|true|none|none|
|nextToken|object|false|none|none|
|knownDependencyCount|object|false|none|none|

<h2 id="tocS_ListServerNeighborsRequest">ListServerNeighborsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistserverneighborsrequest"></a>
<a id="schema_ListServerNeighborsRequest"></a>
<a id="tocSlistserverneighborsrequest"></a>
<a id="tocslistserverneighborsrequest"></a>

```json
{
  "configurationId": {},
  "portInformationNeeded": {},
  "neighborConfigurationIds": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|object|true|none|none|
|portInformationNeeded|object|false|none|none|
|neighborConfigurationIds|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StartContinuousExportResponse">StartContinuousExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcontinuousexportresponse"></a>
<a id="schema_StartContinuousExportResponse"></a>
<a id="tocSstartcontinuousexportresponse"></a>
<a id="tocsstartcontinuousexportresponse"></a>

```json
{
  "exportId": {},
  "s3Bucket": {},
  "startTime": {},
  "dataSource": {},
  "schemaStorageConfig": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportId|object|false|none|none|
|s3Bucket|object|false|none|none|
|startTime|object|false|none|none|
|dataSource|object|false|none|none|
|schemaStorageConfig|object|false|none|none|

<h2 id="tocS_StartContinuousExportRequest">StartContinuousExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcontinuousexportrequest"></a>
<a id="schema_StartContinuousExportRequest"></a>
<a id="tocSstartcontinuousexportrequest"></a>
<a id="tocsstartcontinuousexportrequest"></a>

```json
{}
```

<h2 id="tocS_ConflictErrorException">ConflictErrorException</h2>
<!-- backwards compatibility -->
<a id="schemaconflicterrorexception"></a>
<a id="schema_ConflictErrorException"></a>
<a id="tocSconflicterrorexception"></a>
<a id="tocsconflicterrorexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_StartDataCollectionByAgentIdsResponse">StartDataCollectionByAgentIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdatacollectionbyagentidsresponse"></a>
<a id="schema_StartDataCollectionByAgentIdsResponse"></a>
<a id="tocSstartdatacollectionbyagentidsresponse"></a>
<a id="tocsstartdatacollectionbyagentidsresponse"></a>

```json
{
  "agentsConfigurationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentsConfigurationStatus|object|false|none|none|

<h2 id="tocS_StartDataCollectionByAgentIdsRequest">StartDataCollectionByAgentIdsRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdatacollectionbyagentidsrequest"></a>
<a id="schema_StartDataCollectionByAgentIdsRequest"></a>
<a id="tocSstartdatacollectionbyagentidsrequest"></a>
<a id="tocsstartdatacollectionbyagentidsrequest"></a>

```json
{
  "agentIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentIds|object|true|none|none|

<h2 id="tocS_StartExportTaskResponse">StartExportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartexporttaskresponse"></a>
<a id="schema_StartExportTaskResponse"></a>
<a id="tocSstartexporttaskresponse"></a>
<a id="tocsstartexporttaskresponse"></a>

```json
{
  "exportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportId|object|false|none|none|

<h2 id="tocS_StartExportTaskRequest">StartExportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartexporttaskrequest"></a>
<a id="schema_StartExportTaskRequest"></a>
<a id="tocSstartexporttaskrequest"></a>
<a id="tocsstartexporttaskrequest"></a>

```json
{
  "exportDataFormat": {},
  "filters": {},
  "startTime": {},
  "endTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportDataFormat|object|false|none|none|
|filters|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|

<h2 id="tocS_StartImportTaskResponse">StartImportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartimporttaskresponse"></a>
<a id="schema_StartImportTaskResponse"></a>
<a id="tocSstartimporttaskresponse"></a>
<a id="tocsstartimporttaskresponse"></a>

```json
{
  "task": {
    "importTaskId": {},
    "clientRequestToken": {},
    "name": {},
    "importUrl": {},
    "status": {},
    "importRequestTime": {},
    "importCompletionTime": {},
    "importDeletedTime": {},
    "serverImportSuccess": {},
    "serverImportFailure": {},
    "applicationImportSuccess": {},
    "applicationImportFailure": {},
    "errorsAndFailedEntriesZip": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task|object|false|none|none|

<h2 id="tocS_StartImportTaskRequest">StartImportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartimporttaskrequest"></a>
<a id="schema_StartImportTaskRequest"></a>
<a id="tocSstartimporttaskrequest"></a>
<a id="tocsstartimporttaskrequest"></a>

```json
{
  "clientRequestToken": {},
  "name": {},
  "importUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestToken|object|false|none|none|
|name|object|true|none|none|
|importUrl|object|true|none|none|

<h2 id="tocS_StopContinuousExportResponse">StopContinuousExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopcontinuousexportresponse"></a>
<a id="schema_StopContinuousExportResponse"></a>
<a id="tocSstopcontinuousexportresponse"></a>
<a id="tocsstopcontinuousexportresponse"></a>

```json
{
  "startTime": {},
  "stopTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|object|false|none|none|
|stopTime|object|false|none|none|

<h2 id="tocS_StopContinuousExportRequest">StopContinuousExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopcontinuousexportrequest"></a>
<a id="schema_StopContinuousExportRequest"></a>
<a id="tocSstopcontinuousexportrequest"></a>
<a id="tocsstopcontinuousexportrequest"></a>

```json
{
  "exportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportId|object|true|none|none|

<h2 id="tocS_StopDataCollectionByAgentIdsResponse">StopDataCollectionByAgentIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopdatacollectionbyagentidsresponse"></a>
<a id="schema_StopDataCollectionByAgentIdsResponse"></a>
<a id="tocSstopdatacollectionbyagentidsresponse"></a>
<a id="tocsstopdatacollectionbyagentidsresponse"></a>

```json
{
  "agentsConfigurationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentsConfigurationStatus|object|false|none|none|

<h2 id="tocS_StopDataCollectionByAgentIdsRequest">StopDataCollectionByAgentIdsRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopdatacollectionbyagentidsrequest"></a>
<a id="schema_StopDataCollectionByAgentIdsRequest"></a>
<a id="tocSstopdatacollectionbyagentidsrequest"></a>
<a id="tocsstopdatacollectionbyagentidsrequest"></a>

```json
{
  "agentIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentIds|object|true|none|none|

<h2 id="tocS_UpdateApplicationResponse">UpdateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresponse"></a>
<a id="schema_UpdateApplicationResponse"></a>
<a id="tocSupdateapplicationresponse"></a>
<a id="tocsupdateapplicationresponse"></a>

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
  "configurationId": {},
  "name": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|object|true|none|none|
|name|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
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

<h2 id="tocS_AgentConfigurationStatus">AgentConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagentconfigurationstatus"></a>
<a id="schema_AgentConfigurationStatus"></a>
<a id="tocSagentconfigurationstatus"></a>
<a id="tocsagentconfigurationstatus"></a>

```json
{
  "agentId": {},
  "operationSucceeded": {},
  "description": {}
}
```

Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|object|false|none|none|
|operationSucceeded|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_AgentConfigurationStatusList">AgentConfigurationStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaagentconfigurationstatuslist"></a>
<a id="schema_AgentConfigurationStatusList"></a>
<a id="tocSagentconfigurationstatuslist"></a>
<a id="tocsagentconfigurationstatuslist"></a>

```json
[
  {
    "agentId": {},
    "operationSucceeded": {},
    "description": {}
  }
]
```

<h2 id="tocS_AgentId">AgentId</h2>
<!-- backwards compatibility -->
<a id="schemaagentid"></a>
<a id="schema_AgentId"></a>
<a id="tocSagentid"></a>
<a id="tocsagentid"></a>

```json
"stringstri"
```

<h2 id="tocS_AgentIds">AgentIds</h2>
<!-- backwards compatibility -->
<a id="schemaagentids"></a>
<a id="schema_AgentIds"></a>
<a id="tocSagentids"></a>
<a id="tocsagentids"></a>

```json
[
  "stringstri"
]
```

<h2 id="tocS_AgentNetworkInfoList">AgentNetworkInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaagentnetworkinfolist"></a>
<a id="schema_AgentNetworkInfoList"></a>
<a id="tocSagentnetworkinfolist"></a>
<a id="tocsagentnetworkinfolist"></a>

```json
[
  {
    "ipAddress": {},
    "macAddress": {}
  }
]
```

<h2 id="tocS_AgentStatus">AgentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatus"></a>
<a id="schema_AgentStatus"></a>
<a id="tocSagentstatus"></a>
<a id="tocsagentstatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_AgentInfo">AgentInfo</h2>
<!-- backwards compatibility -->
<a id="schemaagentinfo"></a>
<a id="schema_AgentInfo"></a>
<a id="tocSagentinfo"></a>
<a id="tocsagentinfo"></a>

```json
{
  "agentId": {},
  "hostName": {},
  "agentNetworkInfoList": {},
  "connectorId": {},
  "version": {},
  "health": {},
  "lastHealthPingTime": {},
  "collectionStatus": {},
  "agentType": {},
  "registeredTime": {}
}
```

Information about agents or connectors associated with the user’s Amazon Web Services account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|object|false|none|none|
|hostName|object|false|none|none|
|agentNetworkInfoList|object|false|none|none|
|connectorId|object|false|none|none|
|version|object|false|none|none|
|health|object|false|none|none|
|lastHealthPingTime|object|false|none|none|
|collectionStatus|object|false|none|none|
|agentType|object|false|none|none|
|registeredTime|object|false|none|none|

<h2 id="tocS_AgentNetworkInfo">AgentNetworkInfo</h2>
<!-- backwards compatibility -->
<a id="schemaagentnetworkinfo"></a>
<a id="schema_AgentNetworkInfo"></a>
<a id="tocSagentnetworkinfo"></a>
<a id="tocsagentnetworkinfo"></a>

```json
{
  "ipAddress": {},
  "macAddress": {}
}
```

Network details about the host where the agent/connector resides.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|object|false|none|none|
|macAddress|object|false|none|none|

<h2 id="tocS_AgentsInfo">AgentsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaagentsinfo"></a>
<a id="schema_AgentsInfo"></a>
<a id="tocSagentsinfo"></a>
<a id="tocsagentsinfo"></a>

```json
[
  {
    "agentId": {},
    "hostName": {},
    "agentNetworkInfoList": {},
    "connectorId": {},
    "version": {},
    "health": {},
    "lastHealthPingTime": {},
    "collectionStatus": {},
    "agentType": {},
    "registeredTime": {}
  }
]
```

<h2 id="tocS_ApplicationDescription">ApplicationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescription"></a>
<a id="schema_ApplicationDescription"></a>
<a id="tocSapplicationdescription"></a>
<a id="tocsapplicationdescription"></a>

```json
"string"
```

<h2 id="tocS_ApplicationId">ApplicationId</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationid"></a>
<a id="schema_ApplicationId"></a>
<a id="tocSapplicationid"></a>
<a id="tocsapplicationid"></a>

```json
"string"
```

<h2 id="tocS_ApplicationIdsList">ApplicationIdsList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationidslist"></a>
<a id="schema_ApplicationIdsList"></a>
<a id="tocSapplicationidslist"></a>
<a id="tocsapplicationidslist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_ConfigurationIdList">ConfigurationIdList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationidlist"></a>
<a id="schema_ConfigurationIdList"></a>
<a id="tocSconfigurationidlist"></a>
<a id="tocsconfigurationidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImportTaskIdentifier">ImportTaskIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskidentifier"></a>
<a id="schema_ImportTaskIdentifier"></a>
<a id="tocSimporttaskidentifier"></a>
<a id="tocsimporttaskidentifier"></a>

```json
"string"
```

<h2 id="tocS_BatchDeleteImportDataErrorCode">BatchDeleteImportDataErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimportdataerrorcode"></a>
<a id="schema_BatchDeleteImportDataErrorCode"></a>
<a id="tocSbatchdeleteimportdataerrorcode"></a>
<a id="tocsbatchdeleteimportdataerrorcode"></a>

```json
"NOT_FOUND"
```

<h2 id="tocS_BatchDeleteImportDataErrorDescription">BatchDeleteImportDataErrorDescription</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimportdataerrordescription"></a>
<a id="schema_BatchDeleteImportDataErrorDescription"></a>
<a id="tocSbatchdeleteimportdataerrordescription"></a>
<a id="tocsbatchdeleteimportdataerrordescription"></a>

```json
"string"
```

<h2 id="tocS_BatchDeleteImportDataError">BatchDeleteImportDataError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimportdataerror"></a>
<a id="schema_BatchDeleteImportDataError"></a>
<a id="tocSbatchdeleteimportdataerror"></a>
<a id="tocsbatchdeleteimportdataerror"></a>

```json
{
  "importTaskId": {},
  "errorCode": {},
  "errorDescription": {}
}
```

Error messages returned for each import task that you deleted as a response for this command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importTaskId|object|false|none|none|
|errorCode|object|false|none|none|
|errorDescription|object|false|none|none|

<h2 id="tocS_BatchDeleteImportDataErrorList">BatchDeleteImportDataErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimportdataerrorlist"></a>
<a id="schema_BatchDeleteImportDataErrorList"></a>
<a id="tocSbatchdeleteimportdataerrorlist"></a>
<a id="tocsbatchdeleteimportdataerrorlist"></a>

```json
[
  {
    "importTaskId": {},
    "errorCode": {},
    "errorDescription": {}
  }
]
```

<h2 id="tocS_ToDeleteIdentifierList">ToDeleteIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schematodeleteidentifierlist"></a>
<a id="schema_ToDeleteIdentifierList"></a>
<a id="tocStodeleteidentifierlist"></a>
<a id="tocstodeleteidentifierlist"></a>

```json
[
  "string"
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

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
"string"
```

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_ConfigurationId">ConfigurationId</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationid"></a>
<a id="schema_ConfigurationId"></a>
<a id="tocSconfigurationid"></a>
<a id="tocsconfigurationid"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationItemType">ConfigurationItemType</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationitemtype"></a>
<a id="schema_ConfigurationItemType"></a>
<a id="tocSconfigurationitemtype"></a>
<a id="tocsconfigurationitemtype"></a>

```json
"SERVER"
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

<h2 id="tocS_TimeStamp">TimeStamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_TimeStamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ConfigurationTag">ConfigurationTag</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationtag"></a>
<a id="schema_ConfigurationTag"></a>
<a id="tocSconfigurationtag"></a>
<a id="tocsconfigurationtag"></a>

```json
{
  "configurationType": {},
  "configurationId": {},
  "key": {},
  "value": {},
  "timeOfCreation": {}
}
```

Tags for a configuration item. Tags are metadata that help you categorize IT assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationType|object|false|none|none|
|configurationId|object|false|none|none|
|key|object|false|none|none|
|value|object|false|none|none|
|timeOfCreation|object|false|none|none|

<h2 id="tocS_ConfigurationTagSet">ConfigurationTagSet</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationtagset"></a>
<a id="schema_ConfigurationTagSet"></a>
<a id="tocSconfigurationtagset"></a>
<a id="tocsconfigurationtagset"></a>

```json
[
  {
    "configurationType": {},
    "configurationId": {},
    "key": {},
    "value": {},
    "timeOfCreation": {}
  }
]
```

<h2 id="tocS_Configurations">Configurations</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurations"></a>
<a id="schema_Configurations"></a>
<a id="tocSconfigurations"></a>
<a id="tocsconfigurations"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_ConfigurationsDownloadUrl">ConfigurationsDownloadUrl</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsdownloadurl"></a>
<a id="schema_ConfigurationsDownloadUrl"></a>
<a id="tocSconfigurationsdownloadurl"></a>
<a id="tocsconfigurationsdownloadurl"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationsExportId">ConfigurationsExportId</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsexportid"></a>
<a id="schema_ConfigurationsExportId"></a>
<a id="tocSconfigurationsexportid"></a>
<a id="tocsconfigurationsexportid"></a>

```json
"string"
```

<h2 id="tocS_ContinuousExportStatus">ContinuousExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousexportstatus"></a>
<a id="schema_ContinuousExportStatus"></a>
<a id="tocScontinuousexportstatus"></a>
<a id="tocscontinuousexportstatus"></a>

```json
"START_IN_PROGRESS"
```

<h2 id="tocS_StringMax255">StringMax255</h2>
<!-- backwards compatibility -->
<a id="schemastringmax255"></a>
<a id="schema_StringMax255"></a>
<a id="tocSstringmax255"></a>
<a id="tocsstringmax255"></a>

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

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
"AGENT"
```

<h2 id="tocS_SchemaStorageConfig">SchemaStorageConfig</h2>
<!-- backwards compatibility -->
<a id="schemaschemastorageconfig"></a>
<a id="schema_SchemaStorageConfig"></a>
<a id="tocSschemastorageconfig"></a>
<a id="tocsschemastorageconfig"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_ContinuousExportDescription">ContinuousExportDescription</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousexportdescription"></a>
<a id="schema_ContinuousExportDescription"></a>
<a id="tocScontinuousexportdescription"></a>
<a id="tocscontinuousexportdescription"></a>

```json
{
  "exportId": {},
  "status": {},
  "statusDetail": {},
  "s3Bucket": {},
  "startTime": {},
  "stopTime": {},
  "dataSource": {},
  "schemaStorageConfig": {
    "property1": "string",
    "property2": "string"
  }
}
```

A list of continuous export descriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportId|object|false|none|none|
|status|object|false|none|none|
|statusDetail|object|false|none|none|
|s3Bucket|object|false|none|none|
|startTime|object|false|none|none|
|stopTime|object|false|none|none|
|dataSource|object|false|none|none|
|schemaStorageConfig|object|false|none|none|

<h2 id="tocS_ContinuousExportDescriptions">ContinuousExportDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousexportdescriptions"></a>
<a id="schema_ContinuousExportDescriptions"></a>
<a id="tocScontinuousexportdescriptions"></a>
<a id="tocscontinuousexportdescriptions"></a>

```json
[
  {
    "exportId": {},
    "status": {},
    "statusDetail": {},
    "s3Bucket": {},
    "startTime": {},
    "stopTime": {},
    "dataSource": {},
    "schemaStorageConfig": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ContinuousExportIds">ContinuousExportIds</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousexportids"></a>
<a id="schema_ContinuousExportIds"></a>
<a id="tocScontinuousexportids"></a>
<a id="tocscontinuousexportids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagSet">TagSet</h2>
<!-- backwards compatibility -->
<a id="schematagset"></a>
<a id="schema_TagSet"></a>
<a id="tocStagset"></a>
<a id="tocstagset"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
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

<h2 id="tocS_CustomerAgentInfo">CustomerAgentInfo</h2>
<!-- backwards compatibility -->
<a id="schemacustomeragentinfo"></a>
<a id="schema_CustomerAgentInfo"></a>
<a id="tocScustomeragentinfo"></a>
<a id="tocscustomeragentinfo"></a>

```json
{
  "activeAgents": {},
  "healthyAgents": {},
  "blackListedAgents": {},
  "shutdownAgents": {},
  "unhealthyAgents": {},
  "totalAgents": {},
  "unknownAgents": {}
}
```

Inventory data for installed discovery agents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeAgents|object|true|none|none|
|healthyAgents|object|true|none|none|
|blackListedAgents|object|true|none|none|
|shutdownAgents|object|true|none|none|
|unhealthyAgents|object|true|none|none|
|totalAgents|object|true|none|none|
|unknownAgents|object|true|none|none|

<h2 id="tocS_CustomerAgentlessCollectorInfo">CustomerAgentlessCollectorInfo</h2>
<!-- backwards compatibility -->
<a id="schemacustomeragentlesscollectorinfo"></a>
<a id="schema_CustomerAgentlessCollectorInfo"></a>
<a id="tocScustomeragentlesscollectorinfo"></a>
<a id="tocscustomeragentlesscollectorinfo"></a>

```json
{
  "activeAgentlessCollectors": 0,
  "healthyAgentlessCollectors": 0,
  "denyListedAgentlessCollectors": 0,
  "shutdownAgentlessCollectors": 0,
  "unhealthyAgentlessCollectors": 0,
  "totalAgentlessCollectors": 0,
  "unknownAgentlessCollectors": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeAgentlessCollectors|[Integer](#schemainteger)|true|none|none|
|healthyAgentlessCollectors|[Integer](#schemainteger)|true|none|none|
|denyListedAgentlessCollectors|[Integer](#schemainteger)|true|none|none|
|shutdownAgentlessCollectors|[Integer](#schemainteger)|true|none|none|
|unhealthyAgentlessCollectors|[Integer](#schemainteger)|true|none|none|
|totalAgentlessCollectors|[Integer](#schemainteger)|true|none|none|
|unknownAgentlessCollectors|[Integer](#schemainteger)|true|none|none|

<h2 id="tocS_CustomerConnectorInfo">CustomerConnectorInfo</h2>
<!-- backwards compatibility -->
<a id="schemacustomerconnectorinfo"></a>
<a id="schema_CustomerConnectorInfo"></a>
<a id="tocScustomerconnectorinfo"></a>
<a id="tocscustomerconnectorinfo"></a>

```json
{
  "activeConnectors": {},
  "healthyConnectors": {},
  "blackListedConnectors": {},
  "shutdownConnectors": {},
  "unhealthyConnectors": {},
  "totalConnectors": {},
  "unknownConnectors": {}
}
```

Inventory data for installed discovery connectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeConnectors|object|true|none|none|
|healthyConnectors|object|true|none|none|
|blackListedConnectors|object|true|none|none|
|shutdownConnectors|object|true|none|none|
|unhealthyConnectors|object|true|none|none|
|totalConnectors|object|true|none|none|
|unknownConnectors|object|true|none|none|

<h2 id="tocS_CustomerMeCollectorInfo">CustomerMeCollectorInfo</h2>
<!-- backwards compatibility -->
<a id="schemacustomermecollectorinfo"></a>
<a id="schema_CustomerMeCollectorInfo"></a>
<a id="tocScustomermecollectorinfo"></a>
<a id="tocscustomermecollectorinfo"></a>

```json
{
  "activeMeCollectors": {},
  "healthyMeCollectors": {},
  "denyListedMeCollectors": {},
  "shutdownMeCollectors": {},
  "unhealthyMeCollectors": {},
  "totalMeCollectors": {},
  "unknownMeCollectors": {}
}
```

 The inventory data for installed Migration Evaluator collectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeMeCollectors|object|true|none|none|
|healthyMeCollectors|object|true|none|none|
|denyListedMeCollectors|object|true|none|none|
|shutdownMeCollectors|object|true|none|none|
|unhealthyMeCollectors|object|true|none|none|
|totalMeCollectors|object|true|none|none|
|unknownMeCollectors|object|true|none|none|

<h2 id="tocS_DatabaseName">DatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemadatabasename"></a>
<a id="schema_DatabaseName"></a>
<a id="tocSdatabasename"></a>
<a id="tocsdatabasename"></a>

```json
"string"
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
    "name": {},
    "values": {},
    "condition": {}
  }
]
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

<h2 id="tocS_DescribeConfigurationsAttribute">DescribeConfigurationsAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationsattribute"></a>
<a id="schema_DescribeConfigurationsAttribute"></a>
<a id="tocSdescribeconfigurationsattribute"></a>
<a id="tocsdescribeconfigurationsattribute"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_DescribeConfigurationsAttributes">DescribeConfigurationsAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationsattributes"></a>
<a id="schema_DescribeConfigurationsAttributes"></a>
<a id="tocSdescribeconfigurationsattributes"></a>
<a id="tocsdescribeconfigurationsattributes"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_DescribeContinuousExportsMaxResults">DescribeContinuousExportsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontinuousexportsmaxresults"></a>
<a id="schema_DescribeContinuousExportsMaxResults"></a>
<a id="tocSdescribecontinuousexportsmaxresults"></a>
<a id="tocsdescribecontinuousexportsmaxresults"></a>

```json
1
```

<h2 id="tocS_ExportIds">ExportIds</h2>
<!-- backwards compatibility -->
<a id="schemaexportids"></a>
<a id="schema_ExportIds"></a>
<a id="tocSexportids"></a>
<a id="tocsexportids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExportsInfo">ExportsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexportsinfo"></a>
<a id="schema_ExportsInfo"></a>
<a id="tocSexportsinfo"></a>
<a id="tocsexportsinfo"></a>

```json
[
  {
    "exportId": {},
    "exportStatus": {},
    "statusMessage": {},
    "configurationsDownloadUrl": {},
    "exportRequestTime": {},
    "isTruncated": {},
    "requestedStartTime": {},
    "requestedEndTime": {}
  }
]
```

<h2 id="tocS_ExportFilters">ExportFilters</h2>
<!-- backwards compatibility -->
<a id="schemaexportfilters"></a>
<a id="schema_ExportFilters"></a>
<a id="tocSexportfilters"></a>
<a id="tocsexportfilters"></a>

```json
[
  {
    "name": {},
    "values": {},
    "condition": {}
  }
]
```

<h2 id="tocS_ImportTaskFilter">ImportTaskFilter</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskfilter"></a>
<a id="schema_ImportTaskFilter"></a>
<a id="tocSimporttaskfilter"></a>
<a id="tocsimporttaskfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

<p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_DescribeImportTasksFilterList">DescribeImportTasksFilterList</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimporttasksfilterlist"></a>
<a id="schema_DescribeImportTasksFilterList"></a>
<a id="tocSdescribeimporttasksfilterlist"></a>
<a id="tocsdescribeimporttasksfilterlist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_DescribeImportTasksMaxResults">DescribeImportTasksMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimporttasksmaxresults"></a>
<a id="schema_DescribeImportTasksMaxResults"></a>
<a id="tocSdescribeimporttasksmaxresults"></a>
<a id="tocsdescribeimporttasksmaxresults"></a>

```json
1
```

<h2 id="tocS_ImportTaskList">ImportTaskList</h2>
<!-- backwards compatibility -->
<a id="schemaimporttasklist"></a>
<a id="schema_ImportTaskList"></a>
<a id="tocSimporttasklist"></a>
<a id="tocsimporttasklist"></a>

```json
[
  {
    "importTaskId": {},
    "clientRequestToken": {},
    "name": {},
    "importUrl": {},
    "status": {},
    "importRequestTime": {},
    "importCompletionTime": {},
    "importDeletedTime": {},
    "serverImportSuccess": {},
    "serverImportFailure": {},
    "applicationImportSuccess": {},
    "applicationImportFailure": {},
    "errorsAndFailedEntriesZip": {}
  }
]
```

<h2 id="tocS_TagFilters">TagFilters</h2>
<!-- backwards compatibility -->
<a id="schematagfilters"></a>
<a id="schema_TagFilters"></a>
<a id="tocStagfilters"></a>
<a id="tocstagfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_ExportDataFormat">ExportDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemaexportdataformat"></a>
<a id="schema_ExportDataFormat"></a>
<a id="tocSexportdataformat"></a>
<a id="tocsexportdataformat"></a>

```json
"CSV"
```

<h2 id="tocS_ExportDataFormats">ExportDataFormats</h2>
<!-- backwards compatibility -->
<a id="schemaexportdataformats"></a>
<a id="schema_ExportDataFormats"></a>
<a id="tocSexportdataformats"></a>
<a id="tocsexportdataformats"></a>

```json
[
  "CSV"
]
```

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

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

<h2 id="tocS_ExportFilter">ExportFilter</h2>
<!-- backwards compatibility -->
<a id="schemaexportfilter"></a>
<a id="schema_ExportFilter"></a>
<a id="tocSexportfilter"></a>
<a id="tocsexportfilter"></a>

```json
{
  "name": {},
  "values": {},
  "condition": {}
}
```

Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|values|object|true|none|none|
|condition|object|true|none|none|

<h2 id="tocS_ExportStatus">ExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatus"></a>
<a id="schema_ExportStatus"></a>
<a id="tocSexportstatus"></a>
<a id="tocsexportstatus"></a>

```json
"FAILED"
```

<h2 id="tocS_ExportStatusMessage">ExportStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatusmessage"></a>
<a id="schema_ExportStatusMessage"></a>
<a id="tocSexportstatusmessage"></a>
<a id="tocsexportstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ExportRequestTime">ExportRequestTime</h2>
<!-- backwards compatibility -->
<a id="schemaexportrequesttime"></a>
<a id="schema_ExportRequestTime"></a>
<a id="tocSexportrequesttime"></a>
<a id="tocsexportrequesttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExportInfo">ExportInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexportinfo"></a>
<a id="schema_ExportInfo"></a>
<a id="tocSexportinfo"></a>
<a id="tocsexportinfo"></a>

```json
{
  "exportId": {},
  "exportStatus": {},
  "statusMessage": {},
  "configurationsDownloadUrl": {},
  "exportRequestTime": {},
  "isTruncated": {},
  "requestedStartTime": {},
  "requestedEndTime": {}
}
```

Information regarding the export status of discovered data. The value is an array of objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportId|object|true|none|none|
|exportStatus|object|true|none|none|
|statusMessage|object|true|none|none|
|configurationsDownloadUrl|object|false|none|none|
|exportRequestTime|object|true|none|none|
|isTruncated|object|false|none|none|
|requestedStartTime|object|false|none|none|
|requestedEndTime|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "name": {},
  "values": {},
  "condition": {}
}
```

<p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|values|object|true|none|none|
|condition|object|true|none|none|

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_ImportStatus">ImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatus"></a>
<a id="schema_ImportStatus"></a>
<a id="tocSimportstatus"></a>
<a id="tocsimportstatus"></a>

```json
"IMPORT_IN_PROGRESS"
```

<h2 id="tocS_ImportTaskName">ImportTaskName</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskname"></a>
<a id="schema_ImportTaskName"></a>
<a id="tocSimporttaskname"></a>
<a id="tocsimporttaskname"></a>

```json
"string"
```

<h2 id="tocS_ImportURL">ImportURL</h2>
<!-- backwards compatibility -->
<a id="schemaimporturl"></a>
<a id="schema_ImportURL"></a>
<a id="tocSimporturl"></a>
<a id="tocsimporturl"></a>

```json
"string"
```

<h2 id="tocS_S3PresignedUrl">S3PresignedUrl</h2>
<!-- backwards compatibility -->
<a id="schemas3presignedurl"></a>
<a id="schema_S3PresignedUrl"></a>
<a id="tocSs3presignedurl"></a>
<a id="tocss3presignedurl"></a>

```json
"string"
```

<h2 id="tocS_ImportTask">ImportTask</h2>
<!-- backwards compatibility -->
<a id="schemaimporttask"></a>
<a id="schema_ImportTask"></a>
<a id="tocSimporttask"></a>
<a id="tocsimporttask"></a>

```json
{
  "importTaskId": {},
  "clientRequestToken": {},
  "name": {},
  "importUrl": {},
  "status": {},
  "importRequestTime": {},
  "importCompletionTime": {},
  "importDeletedTime": {},
  "serverImportSuccess": {},
  "serverImportFailure": {},
  "applicationImportSuccess": {},
  "applicationImportFailure": {},
  "errorsAndFailedEntriesZip": {}
}
```

An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importTaskId|object|false|none|none|
|clientRequestToken|object|false|none|none|
|name|object|false|none|none|
|importUrl|object|false|none|none|
|status|object|false|none|none|
|importRequestTime|object|false|none|none|
|importCompletionTime|object|false|none|none|
|importDeletedTime|object|false|none|none|
|serverImportSuccess|object|false|none|none|
|serverImportFailure|object|false|none|none|
|applicationImportSuccess|object|false|none|none|
|applicationImportFailure|object|false|none|none|
|errorsAndFailedEntriesZip|object|false|none|none|

<h2 id="tocS_ImportTaskFilterName">ImportTaskFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskfiltername"></a>
<a id="schema_ImportTaskFilterName"></a>
<a id="tocSimporttaskfiltername"></a>
<a id="tocsimporttaskfiltername"></a>

```json
"IMPORT_TASK_ID"
```

<h2 id="tocS_ImportTaskFilterValueList">ImportTaskFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskfiltervaluelist"></a>
<a id="schema_ImportTaskFilterValueList"></a>
<a id="tocSimporttaskfiltervaluelist"></a>
<a id="tocsimporttaskfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImportTaskFilterValue">ImportTaskFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaimporttaskfiltervalue"></a>
<a id="schema_ImportTaskFilterValue"></a>
<a id="tocSimporttaskfiltervalue"></a>
<a id="tocsimporttaskfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_OrderByList">OrderByList</h2>
<!-- backwards compatibility -->
<a id="schemaorderbylist"></a>
<a id="schema_OrderByList"></a>
<a id="tocSorderbylist"></a>
<a id="tocsorderbylist"></a>

```json
[
  {
    "fieldName": {},
    "sortOrder": {}
  }
]
```

<h2 id="tocS_NeighborDetailsList">NeighborDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemaneighbordetailslist"></a>
<a id="schema_NeighborDetailsList"></a>
<a id="tocSneighbordetailslist"></a>
<a id="tocsneighbordetailslist"></a>

```json
[
  {
    "sourceServerId": {},
    "destinationServerId": {},
    "destinationPort": {},
    "transportProtocol": {},
    "connectionsCount": {}
  }
]
```

<h2 id="tocS_NeighborConnectionDetail">NeighborConnectionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaneighborconnectiondetail"></a>
<a id="schema_NeighborConnectionDetail"></a>
<a id="tocSneighborconnectiondetail"></a>
<a id="tocsneighborconnectiondetail"></a>

```json
{
  "sourceServerId": {},
  "destinationServerId": {},
  "destinationPort": {},
  "transportProtocol": {},
  "connectionsCount": {}
}
```

Details about neighboring servers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceServerId|object|true|none|none|
|destinationServerId|object|true|none|none|
|destinationPort|object|false|none|none|
|transportProtocol|object|false|none|none|
|connectionsCount|object|true|none|none|

<h2 id="tocS_OrderByElementFieldName">OrderByElementFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyelementfieldname"></a>
<a id="schema_OrderByElementFieldName"></a>
<a id="tocSorderbyelementfieldname"></a>
<a id="tocsorderbyelementfieldname"></a>

```json
"string"
```

<h2 id="tocS_orderString">orderString</h2>
<!-- backwards compatibility -->
<a id="schemaorderstring"></a>
<a id="schema_orderString"></a>
<a id="tocSorderstring"></a>
<a id="tocsorderstring"></a>

```json
"ASC"
```

<h2 id="tocS_OrderByElement">OrderByElement</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyelement"></a>
<a id="schema_OrderByElement"></a>
<a id="tocSorderbyelement"></a>
<a id="tocsorderbyelement"></a>

```json
{
  "fieldName": {},
  "sortOrder": {}
}
```

A field and direction for ordered output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|object|true|none|none|
|sortOrder|object|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": {},
  "value": {}
}
```

<p>Metadata that help you categorize IT assets.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|values|object|true|none|none|
