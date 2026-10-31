<h1 id="aws-resource-groups-tagging-api">AWS Resource Groups Tagging API v2017-01-26</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Resource Groups Tagging API</fullname>

Base URLs:

* <a href="http://tagging.us-east-1.amazonaws.com">http://tagging.us-east-1.amazonaws.com</a> - The AWS Resource Groups Tagging API multi-region endpoint

* <a href="https://tagging.us-east-1.amazonaws.com">https://tagging.us-east-1.amazonaws.com</a> - The AWS Resource Groups Tagging API multi-region endpoint

* <a href="http://tagging.cn-north-1.amazonaws.com.cn">http://tagging.cn-north-1.amazonaws.com.cn</a> - The AWS Resource Groups Tagging API endpoint for China (Beijing) and China (Ningxia)

* <a href="https://tagging.cn-north-1.amazonaws.com.cn">https://tagging.cn-north-1.amazonaws.com.cn</a> - The AWS Resource Groups Tagging API endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/tagging/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-resource-groups-tagging-api-default">Default</h1>

## DescribeReportCreation

<a id="opIdDescribeReportCreation"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.DescribeReportCreation' \
  -d '{}'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation`

<p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>

> Body parameter

```json
{}
```

<h3 id="describereportcreation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReportCreationInput](#schemadescribereportcreationinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.DescribeReportCreation|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "S3Location": {},
  "ErrorMessage": {}
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

<h3 id="describereportcreation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReportCreationOutput](#schemadescribereportcreationoutput)|
|480|480|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComplianceSummary

<a id="opIdGetComplianceSummary"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.GetComplianceSummary' \
  -d '{
    "TargetIdFilters": {},
    "RegionFilters": {},
    "ResourceTypeFilters": {},
    "TagKeyFilters": {},
    "GroupBy": {},
    "MaxResults": {},
    "PaginationToken": {}
  }'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary`

<p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

> Body parameter

```json
{
  "TargetIdFilters": {},
  "RegionFilters": {},
  "ResourceTypeFilters": {},
  "TagKeyFilters": {},
  "GroupBy": {},
  "MaxResults": {},
  "PaginationToken": {}
}
```

<h3 id="getcompliancesummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|PaginationToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetComplianceSummaryInput](#schemagetcompliancesummaryinput)|true|none|
|» TargetIdFilters|body|object|false|none|
|» RegionFilters|body|object|false|none|
|» ResourceTypeFilters|body|object|false|none|
|» TagKeyFilters|body|object|false|none|
|» GroupBy|body|object|false|none|
|» MaxResults|body|object|false|none|
|» PaginationToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.GetComplianceSummary|

> Example responses

> 200 Response

```json
{
  "SummaryList": {},
  "PaginationToken": {}
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

<h3 id="getcompliancesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComplianceSummaryOutput](#schemagetcompliancesummaryoutput)|
|480|480|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResources

<a id="opIdGetResources"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.GetResources' \
  -d '{
    "PaginationToken": {},
    "TagFilters": {},
    "ResourcesPerPage": {},
    "TagsPerPage": {},
    "ResourceTypeFilters": {},
    "IncludeComplianceDetails": {},
    "ExcludeCompliantResources": {},
    "ResourceARNList": {}
  }'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources`

<p>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

> Body parameter

```json
{
  "PaginationToken": {},
  "TagFilters": {},
  "ResourcesPerPage": {},
  "TagsPerPage": {},
  "ResourceTypeFilters": {},
  "IncludeComplianceDetails": {},
  "ExcludeCompliantResources": {},
  "ResourceARNList": {}
}
```

<h3 id="getresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourcesPerPage|query|string|false|Pagination limit|
|PaginationToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetResourcesInput](#schemagetresourcesinput)|true|none|
|» PaginationToken|body|object|false|none|
|» TagFilters|body|object|false|none|
|» ResourcesPerPage|body|object|false|none|
|» TagsPerPage|body|object|false|none|
|» ResourceTypeFilters|body|object|false|none|
|» IncludeComplianceDetails|body|object|false|none|
|» ExcludeCompliantResources|body|object|false|none|
|» ResourceARNList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.GetResources|

> Example responses

> 200 Response

```json
{
  "PaginationToken": {},
  "ResourceTagMappingList": {}
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

<h3 id="getresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcesOutput](#schemagetresourcesoutput)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|PaginationTokenExpiredException|[PaginationTokenExpiredException](#schemapaginationtokenexpiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTagKeys

<a id="opIdGetTagKeys"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.GetTagKeys' \
  -d '{
    "PaginationToken": {}
  }'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys`

<p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

> Body parameter

```json
{
  "PaginationToken": {}
}
```

<h3 id="gettagkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PaginationToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTagKeysInput](#schemagettagkeysinput)|true|none|
|» PaginationToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.GetTagKeys|

> Example responses

> 200 Response

```json
{
  "PaginationToken": {},
  "TagKeys": {}
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

<h3 id="gettagkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTagKeysOutput](#schemagettagkeysoutput)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|PaginationTokenExpiredException|[PaginationTokenExpiredException](#schemapaginationtokenexpiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTagValues

<a id="opIdGetTagValues"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.GetTagValues' \
  -d '{
    "PaginationToken": {},
    "Key": {}
  }'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues`

<p>Returns all tag values for the specified key that are used in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

> Body parameter

```json
{
  "PaginationToken": {},
  "Key": {}
}
```

<h3 id="gettagvalues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PaginationToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTagValuesInput](#schemagettagvaluesinput)|true|none|
|» PaginationToken|body|object|false|none|
|» Key|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.GetTagValues|

> Example responses

> 200 Response

```json
{
  "PaginationToken": {},
  "TagValues": {}
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

<h3 id="gettagvalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTagValuesOutput](#schemagettagvaluesoutput)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|PaginationTokenExpiredException|[PaginationTokenExpiredException](#schemapaginationtokenexpiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartReportCreation

<a id="opIdStartReportCreation"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.StartReportCreation' \
  -d '{
    "S3Bucket": {}
  }'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation`

<p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>

> Body parameter

```json
{
  "S3Bucket": {}
}
```

<h3 id="startreportcreation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartReportCreationInput](#schemastartreportcreationinput)|true|none|
|» S3Bucket|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.StartReportCreation|

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

<h3 id="startreportcreation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartReportCreationOutput](#schemastartreportcreationoutput)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResources

<a id="opIdTagResources"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.TagResources' \
  -d '{
    "ResourceARNList": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources`

<p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:TagResource</code> </p> </li> <li> <p> <code>ec2:CreateTags</code> </p> </li> </ul>

> Body parameter

```json
{
  "ResourceARNList": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourcesInput](#schematagresourcesinput)|true|none|
|» ResourceARNList|body|object|true|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.TagResources|

> Example responses

> 200 Response

```json
{
  "FailedResourcesMap": {
    "property1": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
    },
    "property2": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
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

<h3 id="tagresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourcesOutput](#schematagresourcesoutput)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResources

<a id="opIdUntagResources"></a>

> Code samples

```bash
curl 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ResourceGroupsTaggingAPI_20170126.UntagResources' \
  -d '{
    "ResourceARNList": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources`

<p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:UntagResource</code> </p> </li> <li> <p> <code>ec2:DeleteTags</code> </p> </li> </ul>

> Body parameter

```json
{
  "ResourceARNList": {},
  "TagKeys": {}
}
```

<h3 id="untagresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourcesInput](#schemauntagresourcesinput)|true|none|
|» ResourceARNList|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ResourceGroupsTaggingAPI_20170126.UntagResources|

> Example responses

> 200 Response

```json
{
  "FailedResourcesMap": {
    "property1": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
    },
    "property2": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
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

<h3 id="untagresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourcesOutput](#schemauntagresourcesoutput)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeReportCreationOutput">DescribeReportCreationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportcreationoutput"></a>
<a id="schema_DescribeReportCreationOutput"></a>
<a id="tocSdescribereportcreationoutput"></a>
<a id="tocsdescribereportcreationoutput"></a>

```json
{
  "Status": {},
  "S3Location": {},
  "ErrorMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|S3Location|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_DescribeReportCreationInput">DescribeReportCreationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportcreationinput"></a>
<a id="schema_DescribeReportCreationInput"></a>
<a id="tocSdescribereportcreationinput"></a>
<a id="tocsdescribereportcreationinput"></a>

```json
{}
```

<h2 id="tocS_ConstraintViolationException">ConstraintViolationException</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintviolationexception"></a>
<a id="schema_ConstraintViolationException"></a>
<a id="tocSconstraintviolationexception"></a>
<a id="tocsconstraintviolationexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

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

<h2 id="tocS_ThrottledException">ThrottledException</h2>
<!-- backwards compatibility -->
<a id="schemathrottledexception"></a>
<a id="schema_ThrottledException"></a>
<a id="tocSthrottledexception"></a>
<a id="tocsthrottledexception"></a>

```json
null
```

<h2 id="tocS_GetComplianceSummaryOutput">GetComplianceSummaryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancesummaryoutput"></a>
<a id="schema_GetComplianceSummaryOutput"></a>
<a id="tocSgetcompliancesummaryoutput"></a>
<a id="tocsgetcompliancesummaryoutput"></a>

```json
{
  "SummaryList": {},
  "PaginationToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SummaryList|object|false|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_GetComplianceSummaryInput">GetComplianceSummaryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancesummaryinput"></a>
<a id="schema_GetComplianceSummaryInput"></a>
<a id="tocSgetcompliancesummaryinput"></a>
<a id="tocsgetcompliancesummaryinput"></a>

```json
{
  "TargetIdFilters": {},
  "RegionFilters": {},
  "ResourceTypeFilters": {},
  "TagKeyFilters": {},
  "GroupBy": {},
  "MaxResults": {},
  "PaginationToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetIdFilters|object|false|none|none|
|RegionFilters|object|false|none|none|
|ResourceTypeFilters|object|false|none|none|
|TagKeyFilters|object|false|none|none|
|GroupBy|object|false|none|none|
|MaxResults|object|false|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_GetResourcesOutput">GetResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesoutput"></a>
<a id="schema_GetResourcesOutput"></a>
<a id="tocSgetresourcesoutput"></a>
<a id="tocsgetresourcesoutput"></a>

```json
{
  "PaginationToken": {},
  "ResourceTagMappingList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaginationToken|object|false|none|none|
|ResourceTagMappingList|object|false|none|none|

<h2 id="tocS_GetResourcesInput">GetResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesinput"></a>
<a id="schema_GetResourcesInput"></a>
<a id="tocSgetresourcesinput"></a>
<a id="tocsgetresourcesinput"></a>

```json
{
  "PaginationToken": {},
  "TagFilters": {},
  "ResourcesPerPage": {},
  "TagsPerPage": {},
  "ResourceTypeFilters": {},
  "IncludeComplianceDetails": {},
  "ExcludeCompliantResources": {},
  "ResourceARNList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaginationToken|object|false|none|none|
|TagFilters|object|false|none|none|
|ResourcesPerPage|object|false|none|none|
|TagsPerPage|object|false|none|none|
|ResourceTypeFilters|object|false|none|none|
|IncludeComplianceDetails|object|false|none|none|
|ExcludeCompliantResources|object|false|none|none|
|ResourceARNList|object|false|none|none|

<h2 id="tocS_PaginationTokenExpiredException">PaginationTokenExpiredException</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtokenexpiredexception"></a>
<a id="schema_PaginationTokenExpiredException"></a>
<a id="tocSpaginationtokenexpiredexception"></a>
<a id="tocspaginationtokenexpiredexception"></a>

```json
null
```

<h2 id="tocS_GetTagKeysOutput">GetTagKeysOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettagkeysoutput"></a>
<a id="schema_GetTagKeysOutput"></a>
<a id="tocSgettagkeysoutput"></a>
<a id="tocsgettagkeysoutput"></a>

```json
{
  "PaginationToken": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaginationToken|object|false|none|none|
|TagKeys|object|false|none|none|

<h2 id="tocS_GetTagKeysInput">GetTagKeysInput</h2>
<!-- backwards compatibility -->
<a id="schemagettagkeysinput"></a>
<a id="schema_GetTagKeysInput"></a>
<a id="tocSgettagkeysinput"></a>
<a id="tocsgettagkeysinput"></a>

```json
{
  "PaginationToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaginationToken|object|false|none|none|

<h2 id="tocS_GetTagValuesOutput">GetTagValuesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettagvaluesoutput"></a>
<a id="schema_GetTagValuesOutput"></a>
<a id="tocSgettagvaluesoutput"></a>
<a id="tocsgettagvaluesoutput"></a>

```json
{
  "PaginationToken": {},
  "TagValues": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaginationToken|object|false|none|none|
|TagValues|object|false|none|none|

<h2 id="tocS_GetTagValuesInput">GetTagValuesInput</h2>
<!-- backwards compatibility -->
<a id="schemagettagvaluesinput"></a>
<a id="schema_GetTagValuesInput"></a>
<a id="tocSgettagvaluesinput"></a>
<a id="tocsgettagvaluesinput"></a>

```json
{
  "PaginationToken": {},
  "Key": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PaginationToken|object|false|none|none|
|Key|object|true|none|none|

<h2 id="tocS_StartReportCreationOutput">StartReportCreationOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartreportcreationoutput"></a>
<a id="schema_StartReportCreationOutput"></a>
<a id="tocSstartreportcreationoutput"></a>
<a id="tocsstartreportcreationoutput"></a>

```json
{}
```

<h2 id="tocS_StartReportCreationInput">StartReportCreationInput</h2>
<!-- backwards compatibility -->
<a id="schemastartreportcreationinput"></a>
<a id="schema_StartReportCreationInput"></a>
<a id="tocSstartreportcreationinput"></a>
<a id="tocsstartreportcreationinput"></a>

```json
{
  "S3Bucket": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|true|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_TagResourcesOutput">TagResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourcesoutput"></a>
<a id="schema_TagResourcesOutput"></a>
<a id="tocStagresourcesoutput"></a>
<a id="tocstagresourcesoutput"></a>

```json
{
  "FailedResourcesMap": {
    "property1": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
    },
    "property2": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedResourcesMap|object|false|none|none|

<h2 id="tocS_TagResourcesInput">TagResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourcesinput"></a>
<a id="schema_TagResourcesInput"></a>
<a id="tocStagresourcesinput"></a>
<a id="tocstagresourcesinput"></a>

```json
{
  "ResourceARNList": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNList|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourcesOutput">UntagResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcesoutput"></a>
<a id="schema_UntagResourcesOutput"></a>
<a id="tocSuntagresourcesoutput"></a>
<a id="tocsuntagresourcesoutput"></a>

```json
{
  "FailedResourcesMap": {
    "property1": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
    },
    "property2": {
      "StatusCode": {},
      "ErrorCode": {},
      "ErrorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedResourcesMap|object|false|none|none|

<h2 id="tocS_UntagResourcesInput">UntagResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcesinput"></a>
<a id="schema_UntagResourcesInput"></a>
<a id="tocSuntagresourcesinput"></a>
<a id="tocsuntagresourcesinput"></a>

```json
{
  "ResourceARNList": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNList|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_AmazonResourceType">AmazonResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcetype"></a>
<a id="schema_AmazonResourceType"></a>
<a id="tocSamazonresourcetype"></a>
<a id="tocsamazonresourcetype"></a>

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

<h2 id="tocS_ComplianceStatus">ComplianceStatus</h2>
<!-- backwards compatibility -->
<a id="schemacompliancestatus"></a>
<a id="schema_ComplianceStatus"></a>
<a id="tocScompliancestatus"></a>
<a id="tocscompliancestatus"></a>

```json
true
```

<h2 id="tocS_ComplianceDetails">ComplianceDetails</h2>
<!-- backwards compatibility -->
<a id="schemacompliancedetails"></a>
<a id="schema_ComplianceDetails"></a>
<a id="tocScompliancedetails"></a>
<a id="tocscompliancedetails"></a>

```json
{
  "NoncompliantKeys": {},
  "KeysWithNoncompliantValues": {},
  "ComplianceStatus": {}
}
```

Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NoncompliantKeys|object|false|none|none|
|KeysWithNoncompliantValues|object|false|none|none|
|ComplianceStatus|object|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"string"
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

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

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"InternalServiceException"
```

<h2 id="tocS_ExcludeCompliantResources">ExcludeCompliantResources</h2>
<!-- backwards compatibility -->
<a id="schemaexcludecompliantresources"></a>
<a id="schema_ExcludeCompliantResources"></a>
<a id="tocSexcludecompliantresources"></a>
<a id="tocsexcludecompliantresources"></a>

```json
true
```

<h2 id="tocS_FailureInfo">FailureInfo</h2>
<!-- backwards compatibility -->
<a id="schemafailureinfo"></a>
<a id="schema_FailureInfo"></a>
<a id="tocSfailureinfo"></a>
<a id="tocsfailureinfo"></a>

```json
{
  "StatusCode": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

<p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the Amazon Web Services service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other Amazon Web Services services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another Amazon Web Services service. It can also mean that the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to call the tagging operations in the Amazon Web Services service that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch alarm resource, you need permission to call both <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other Amazon Web Services services, see the documentation for that service. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusCode|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_FailedResourcesMap">FailedResourcesMap</h2>
<!-- backwards compatibility -->
<a id="schemafailedresourcesmap"></a>
<a id="schema_FailedResourcesMap"></a>
<a id="tocSfailedresourcesmap"></a>
<a id="tocsfailedresourcesmap"></a>

```json
{
  "property1": {
    "StatusCode": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  },
  "property2": {
    "StatusCode": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FailureInfo](#schemafailureinfo)|false|none|<p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the Amazon Web Services service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other Amazon Web Services services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another Amazon Web Services service. It can also mean that the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to call the tagging operations in the Amazon Web Services service that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch alarm resource, you need permission to call both <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other Amazon Web Services services, see the documentation for that service. </p>|

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```json
0
```

<h2 id="tocS_TargetIdFilterList">TargetIdFilterList</h2>
<!-- backwards compatibility -->
<a id="schematargetidfilterlist"></a>
<a id="schema_TargetIdFilterList"></a>
<a id="tocStargetidfilterlist"></a>
<a id="tocstargetidfilterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RegionFilterList">RegionFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaregionfilterlist"></a>
<a id="schema_RegionFilterList"></a>
<a id="tocSregionfilterlist"></a>
<a id="tocsregionfilterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceTypeFilterList">ResourceTypeFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypefilterlist"></a>
<a id="schema_ResourceTypeFilterList"></a>
<a id="tocSresourcetypefilterlist"></a>
<a id="tocsresourcetypefilterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagKeyFilterList">TagKeyFilterList</h2>
<!-- backwards compatibility -->
<a id="schematagkeyfilterlist"></a>
<a id="schema_TagKeyFilterList"></a>
<a id="tocStagkeyfilterlist"></a>
<a id="tocstagkeyfilterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupBy">GroupBy</h2>
<!-- backwards compatibility -->
<a id="schemagroupby"></a>
<a id="schema_GroupBy"></a>
<a id="tocSgroupby"></a>
<a id="tocsgroupby"></a>

```json
[
  "TARGET_ID"
]
```

<h2 id="tocS_MaxResultsGetComplianceSummary">MaxResultsGetComplianceSummary</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsgetcompliancesummary"></a>
<a id="schema_MaxResultsGetComplianceSummary"></a>
<a id="tocSmaxresultsgetcompliancesummary"></a>
<a id="tocsmaxresultsgetcompliancesummary"></a>

```json
1
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

<h2 id="tocS_SummaryList">SummaryList</h2>
<!-- backwards compatibility -->
<a id="schemasummarylist"></a>
<a id="schema_SummaryList"></a>
<a id="tocSsummarylist"></a>
<a id="tocssummarylist"></a>

```json
[
  {
    "LastUpdated": {},
    "TargetId": {},
    "TargetIdType": {},
    "Region": {},
    "ResourceType": {},
    "NonCompliantResources": {}
  }
]
```

<h2 id="tocS_TagFilterList">TagFilterList</h2>
<!-- backwards compatibility -->
<a id="schematagfilterlist"></a>
<a id="schema_TagFilterList"></a>
<a id="tocStagfilterlist"></a>
<a id="tocstagfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ResourcesPerPage">ResourcesPerPage</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesperpage"></a>
<a id="schema_ResourcesPerPage"></a>
<a id="tocSresourcesperpage"></a>
<a id="tocsresourcesperpage"></a>

```json
0
```

<h2 id="tocS_TagsPerPage">TagsPerPage</h2>
<!-- backwards compatibility -->
<a id="schematagsperpage"></a>
<a id="schema_TagsPerPage"></a>
<a id="tocStagsperpage"></a>
<a id="tocstagsperpage"></a>

```json
0
```

<h2 id="tocS_IncludeComplianceDetails">IncludeComplianceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaincludecompliancedetails"></a>
<a id="schema_IncludeComplianceDetails"></a>
<a id="tocSincludecompliancedetails"></a>
<a id="tocsincludecompliancedetails"></a>

```json
true
```

<h2 id="tocS_ResourceARNListForGet">ResourceARNListForGet</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnlistforget"></a>
<a id="schema_ResourceARNListForGet"></a>
<a id="tocSresourcearnlistforget"></a>
<a id="tocsresourcearnlistforget"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceTagMappingList">ResourceTagMappingList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagmappinglist"></a>
<a id="schema_ResourceTagMappingList"></a>
<a id="tocSresourcetagmappinglist"></a>
<a id="tocsresourcetagmappinglist"></a>

```json
[
  {
    "ResourceARN": {},
    "Tags": {},
    "ComplianceDetails": {
      "NoncompliantKeys": {},
      "KeysWithNoncompliantValues": {},
      "ComplianceStatus": {}
    }
  }
]
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

<h2 id="tocS_TagValuesOutputList">TagValuesOutputList</h2>
<!-- backwards compatibility -->
<a id="schematagvaluesoutputlist"></a>
<a id="schema_TagValuesOutputList"></a>
<a id="tocStagvaluesoutputlist"></a>
<a id="tocstagvaluesoutputlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupByAttribute">GroupByAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagroupbyattribute"></a>
<a id="schema_GroupByAttribute"></a>
<a id="tocSgroupbyattribute"></a>
<a id="tocsgroupbyattribute"></a>

```json
"TARGET_ID"
```

<h2 id="tocS_LastUpdated">LastUpdated</h2>
<!-- backwards compatibility -->
<a id="schemalastupdated"></a>
<a id="schema_LastUpdated"></a>
<a id="tocSlastupdated"></a>
<a id="tocslastupdated"></a>

```json
"string"
```

<h2 id="tocS_NonCompliantResources">NonCompliantResources</h2>
<!-- backwards compatibility -->
<a id="schemanoncompliantresources"></a>
<a id="schema_NonCompliantResources"></a>
<a id="tocSnoncompliantresources"></a>
<a id="tocsnoncompliantresources"></a>

```json
0
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

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ResourceARNListForTagUntag">ResourceARNListForTagUntag</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnlistfortaguntag"></a>
<a id="schema_ResourceARNListForTagUntag"></a>
<a id="tocSresourcearnlistfortaguntag"></a>
<a id="tocsresourcearnlistfortaguntag"></a>

```json
[
  "string"
]
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

<h2 id="tocS_ResourceTagMapping">ResourceTagMapping</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagmapping"></a>
<a id="schema_ResourceTagMapping"></a>
<a id="tocSresourcetagmapping"></a>
<a id="tocsresourcetagmapping"></a>

```json
{
  "ResourceARN": {},
  "Tags": {},
  "ComplianceDetails": {
    "NoncompliantKeys": {},
    "KeysWithNoncompliantValues": {},
    "ComplianceStatus": {}
  }
}
```

A list of resource ARNs and the tags (keys and values) that are associated with each.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|Tags|object|false|none|none|
|ComplianceDetails|object|false|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"string"
```

<h2 id="tocS_TargetIdType">TargetIdType</h2>
<!-- backwards compatibility -->
<a id="schematargetidtype"></a>
<a id="schema_TargetIdType"></a>
<a id="tocStargetidtype"></a>
<a id="tocstargetidtype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
{
  "LastUpdated": {},
  "TargetId": {},
  "TargetIdType": {},
  "Region": {},
  "ResourceType": {},
  "NonCompliantResources": {}
}
```

A count of noncompliant resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastUpdated|object|false|none|none|
|TargetId|object|false|none|none|
|TargetIdType|object|false|none|none|
|Region|object|false|none|none|
|ResourceType|object|false|none|none|
|NonCompliantResources|object|false|none|none|

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

The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TagValueList">TagValueList</h2>
<!-- backwards compatibility -->
<a id="schematagvaluelist"></a>
<a id="schema_TagValueList"></a>
<a id="tocStagvaluelist"></a>
<a id="tocstagvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

A list of tags (keys and values) that are used to specify the associated resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_TagKeyListForUntag">TagKeyListForUntag</h2>
<!-- backwards compatibility -->
<a id="schematagkeylistforuntag"></a>
<a id="schema_TagKeyListForUntag"></a>
<a id="tocStagkeylistforuntag"></a>
<a id="tocstagkeylistforuntag"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

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
