<h1 id="aws-mobile">AWS Mobile v2017-07-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 AWS Mobile Service provides mobile app and website developers with capabilities required to configure AWS resources and bootstrap their developer desktop projects with the necessary SDKs, constants, tools and samples to make use of those resources.

Base URLs:

* <a href="http://mobile.us-east-1.amazonaws.com">http://mobile.us-east-1.amazonaws.com</a> - The AWS Mobile multi-region endpoint

* <a href="https://mobile.us-east-1.amazonaws.com">https://mobile.us-east-1.amazonaws.com</a> - The AWS Mobile multi-region endpoint

* <a href="http://mobile.cn-north-1.amazonaws.com.cn">http://mobile.cn-north-1.amazonaws.com.cn</a> - The AWS Mobile endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mobile.cn-north-1.amazonaws.com.cn">https://mobile.cn-north-1.amazonaws.com.cn</a> - The AWS Mobile endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mobile/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-mobile-default">Default</h1>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl https://mobile.us-east-1.amazonaws.com/projects \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects`

 Lists projects in AWS Mobile Hub. 

<h3 id="listprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false| Maximum number of records to list in a single response. |
|nextToken|query|string|false| Pagination token. Set to null to start listing projects from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more projects. |
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
  "projects": [
    {
      "name": {},
      "projectId": {}
    }
  ],
  "nextToken": "string"
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsResult](#schemalistprojectsresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl https://mobile.us-east-1.amazonaws.com/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contents": "string"
  }'
```

`POST /projects`

 Creates an AWS Mobile Hub project. 

> Body parameter

```json
{
  "contents": "string"
}
```

<h3 id="createproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false| Name of the project. |
|region|query|string|false| Default region where project resources should be created. |
|snapshotId|query|string|false| Unique identifier for an exported snapshot of project configuration. This snapshot identifier is included in the share URL when a project is exported. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» contents|body|string|false| Binary file data. |

> Example responses

> 200 Response

```json
{
  "details": {
    "name": "string",
    "projectId": "string",
    "region": "string",
    "state": "NORMAL",
    "createdDate": {},
    "lastUpdatedDate": {},
    "consoleUrl": {},
    "resources": [
      {
        "type": "string",
        "name": "string",
        "arn": "string",
        "feature": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

> 485 Response

```json
{
  "message": "string"
}
```

> 486 Response

```json
{
  "message": "string"
}
```

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProjectResult](#schemacreateprojectresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl https://mobile.us-east-1.amazonaws.com/projects/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /projects/{projectId}`

 Delets a project in AWS Mobile Hub. 

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true| Unique project identifier. |
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
  "deletedResources": {},
  "orphanedResources": {}
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProjectResult](#schemadeleteprojectresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBundle

<a id="opIdDescribeBundle"></a>

> Code samples

```bash
curl https://mobile.us-east-1.amazonaws.com/bundles/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bundles/{bundleId}`

 Get the bundle details for the requested bundle id. 

<h3 id="describebundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundleId|path|string|true| Unique bundle identifier. |
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
  "details": {
    "bundleId": "string",
    "title": "string",
    "version": "string",
    "description": "string",
    "iconUrl": "string",
    "availablePlatforms": [
      "OSX"
    ]
  }
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

> 485 Response

```json
{
  "message": "string"
}
```

<h3 id="describebundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBundleResult](#schemadescribebundleresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportBundle

<a id="opIdExportBundle"></a>

> Code samples

```bash
curl https://mobile.us-east-1.amazonaws.com/bundles/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /bundles/{bundleId}`

 Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 

<h3 id="exportbundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundleId|path|string|true| Unique bundle identifier. |
|projectId|query|string|false| Unique project identifier. |
|platform|query|string|false| Developer desktop or target application platform. |
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
|platform|OSX|
|platform|WINDOWS|
|platform|LINUX|
|platform|OBJC|
|platform|SWIFT|
|platform|ANDROID|
|platform|JAVASCRIPT|

> Example responses

> 200 Response

```json
{
  "downloadUrl": {}
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

> 485 Response

```json
{
  "message": "string"
}
```

<h3 id="exportbundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportBundleResult](#schemaexportbundleresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProject

<a id="opIdDescribeProject"></a>

> Code samples

```bash
curl 'https://mobile.us-east-1.amazonaws.com/project#projectId?projectId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /project#projectId`

 Gets details about a project in AWS Mobile Hub. 

<h3 id="describeproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true| Unique project identifier. |
|syncFromResources|query|boolean|false| If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project. |
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
  "details": {
    "name": "string",
    "projectId": "string",
    "region": "string",
    "state": "NORMAL",
    "createdDate": {},
    "lastUpdatedDate": {},
    "consoleUrl": {},
    "resources": [
      {
        "type": "string",
        "name": "string",
        "arn": "string",
        "feature": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

> 485 Response

```json
{
  "message": "string"
}
```

<h3 id="describeproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProjectResult](#schemadescribeprojectresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportProject

<a id="opIdExportProject"></a>

> Code samples

```bash
curl https://mobile.us-east-1.amazonaws.com/exports/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /exports/{projectId}`

 Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 

<h3 id="exportproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true| Unique project identifier. |
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
  "downloadUrl": {},
  "shareUrl": {},
  "snapshotId": {}
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

> 485 Response

```json
{
  "message": "string"
}
```

<h3 id="exportproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportProjectResult](#schemaexportprojectresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBundles

<a id="opIdListBundles"></a>

> Code samples

```bash
curl https://mobile.us-east-1.amazonaws.com/bundles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bundles`

 List all available bundles. 

<h3 id="listbundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false| Maximum number of records to list in a single response. |
|nextToken|query|string|false| Pagination token. Set to null to start listing bundles from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more bundles. |
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
  "bundleList": {},
  "nextToken": {}
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

<h3 id="listbundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBundlesResult](#schemalistbundlesresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProject

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl 'https://mobile.us-east-1.amazonaws.com/update#projectId?projectId=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contents": "string"
  }'
```

`POST /update#projectId`

 Update an existing project. 

> Body parameter

```json
{
  "contents": "string"
}
```

<h3 id="updateproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true| Unique project identifier. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» contents|body|string|false| Binary file data. |

> Example responses

> 200 Response

```json
{
  "details": {
    "name": "string",
    "projectId": "string",
    "region": "string",
    "state": "NORMAL",
    "createdDate": {},
    "lastUpdatedDate": {},
    "consoleUrl": {},
    "resources": [
      {
        "type": "string",
        "name": "string",
        "arn": "string",
        "feature": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

> 483 Response

```json
{
  "message": "string"
}
```

> 484 Response

```json
{
  "message": "string"
}
```

> 485 Response

```json
{
  "message": "string"
}
```

> 486 Response

```json
{
  "message": "string"
}
```

> 487 Response

```json
{
  "message": "string"
}
```

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectResult](#schemaupdateprojectresult)|
|480|480|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|AccountActionRequiredException|[AccountActionRequiredException](#schemaaccountactionrequiredexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateProjectResult">CreateProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresult"></a>
<a id="schema_CreateProjectResult"></a>
<a id="tocScreateprojectresult"></a>
<a id="tocscreateprojectresult"></a>

```json
{
  "details": {
    "name": "string",
    "projectId": "string",
    "region": "string",
    "state": "NORMAL",
    "createdDate": {},
    "lastUpdatedDate": {},
    "consoleUrl": {},
    "resources": [
      {
        "type": "string",
        "name": "string",
        "arn": "string",
        "feature": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

 Result structure used in response to a request to create a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

```json
{
  "message": "string"
}
```

 The service has encountered an unexpected error condition which prevents it from servicing the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
{
  "message": "string"
}
```

 The service is temporarily unavailable. The request should be retried after some time delay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
{
  "message": "string"
}
```

 Credentials of the caller are insufficient to authorize the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
{
  "message": "string"
}
```

 Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
{
  "message": "string"
}
```

 The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
{
  "message": "string"
}
```

 No entity can be found with the specified identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
{
  "message": "string"
}
```

 There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_DeleteProjectResult">DeleteProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectresult"></a>
<a id="schema_DeleteProjectResult"></a>
<a id="tocSdeleteprojectresult"></a>
<a id="tocsdeleteprojectresult"></a>

```json
{
  "deletedResources": {},
  "orphanedResources": {}
}
```

 Result structure used in response to request to delete a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedResources|object|false|none|none|
|orphanedResources|object|false|none|none|

<h2 id="tocS_DescribeBundleResult">DescribeBundleResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribebundleresult"></a>
<a id="schema_DescribeBundleResult"></a>
<a id="tocSdescribebundleresult"></a>
<a id="tocsdescribebundleresult"></a>

```json
{
  "details": {
    "bundleId": "string",
    "title": "string",
    "version": "string",
    "description": "string",
    "iconUrl": "string",
    "availablePlatforms": [
      "OSX"
    ]
  }
}
```

 Result structure contains the details of the bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|

<h2 id="tocS_DescribeProjectResult">DescribeProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectresult"></a>
<a id="schema_DescribeProjectResult"></a>
<a id="tocSdescribeprojectresult"></a>
<a id="tocsdescribeprojectresult"></a>

```json
{
  "details": {
    "name": "string",
    "projectId": "string",
    "region": "string",
    "state": "NORMAL",
    "createdDate": {},
    "lastUpdatedDate": {},
    "consoleUrl": {},
    "resources": [
      {
        "type": "string",
        "name": "string",
        "arn": "string",
        "feature": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

 Result structure used for requests of project details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[ProjectDetails](#schemaprojectdetails)|false|none| Detailed information about an AWS Mobile Hub project. |

<h2 id="tocS_ExportBundleResult">ExportBundleResult</h2>
<!-- backwards compatibility -->
<a id="schemaexportbundleresult"></a>
<a id="schema_ExportBundleResult"></a>
<a id="tocSexportbundleresult"></a>
<a id="tocsexportbundleresult"></a>

```json
{
  "downloadUrl": {}
}
```

 Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUrl|object|false|none|none|

<h2 id="tocS_ExportProjectResult">ExportProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemaexportprojectresult"></a>
<a id="schema_ExportProjectResult"></a>
<a id="tocSexportprojectresult"></a>
<a id="tocsexportprojectresult"></a>

```json
{
  "downloadUrl": {},
  "shareUrl": {},
  "snapshotId": {}
}
```

 Result structure used for requests to export project configuration details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUrl|object|false|none|none|
|shareUrl|object|false|none|none|
|snapshotId|object|false|none|none|

<h2 id="tocS_ListBundlesResult">ListBundlesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistbundlesresult"></a>
<a id="schema_ListBundlesResult"></a>
<a id="tocSlistbundlesresult"></a>
<a id="tocslistbundlesresult"></a>

```json
{
  "bundleList": {},
  "nextToken": {}
}
```

 Result structure contains a list of all available bundles with details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProjectsResult">ListProjectsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsresult"></a>
<a id="schema_ListProjectsResult"></a>
<a id="tocSlistprojectsresult"></a>
<a id="tocslistprojectsresult"></a>

```json
{
  "projects": [
    {
      "name": {},
      "projectId": {}
    }
  ],
  "nextToken": "string"
}
```

 Result structure used for requests to list projects in AWS Mobile Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[ProjectSummaries](#schemaprojectsummaries)|false|none| List of projects. |
|nextToken|[NextToken](#schemanexttoken)|false|none| Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. |

<h2 id="tocS_UpdateProjectResult">UpdateProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectresult"></a>
<a id="schema_UpdateProjectResult"></a>
<a id="tocSupdateprojectresult"></a>
<a id="tocsupdateprojectresult"></a>

```json
{
  "details": {
    "name": "string",
    "projectId": "string",
    "region": "string",
    "state": "NORMAL",
    "createdDate": {},
    "lastUpdatedDate": {},
    "consoleUrl": {},
    "resources": [
      {
        "type": "string",
        "name": "string",
        "arn": "string",
        "feature": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

 Result structure used for requests to updated project configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|

<h2 id="tocS_AccountActionRequiredException">AccountActionRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountactionrequiredexception"></a>
<a id="schema_AccountActionRequiredException"></a>
<a id="tocSaccountactionrequiredexception"></a>
<a id="tocsaccountactionrequiredexception"></a>

```json
{
  "message": "string"
}
```

 Account Action is required in order to continue the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none| The Exception Error Message. |

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

 The Exception Error Message.

<h2 id="tocS_AttributeKey">AttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaattributekey"></a>
<a id="schema_AttributeKey"></a>
<a id="tocSattributekey"></a>
<a id="tocsattributekey"></a>

```json
"string"
```

 Key part of key-value attribute pairs.

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

 Value part of key-value attribute pairs.

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

 Key-value attribute pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none| Value part of key-value attribute pairs. |

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BundleDescription">BundleDescription</h2>
<!-- backwards compatibility -->
<a id="schemabundledescription"></a>
<a id="schema_BundleDescription"></a>
<a id="tocSbundledescription"></a>
<a id="tocsbundledescription"></a>

```json
"string"
```

 Description of the download bundle.

<h2 id="tocS_BundleId">BundleId</h2>
<!-- backwards compatibility -->
<a id="schemabundleid"></a>
<a id="schema_BundleId"></a>
<a id="tocSbundleid"></a>
<a id="tocsbundleid"></a>

```json
"string"
```

 Unique bundle identifier.

<h2 id="tocS_BundleTitle">BundleTitle</h2>
<!-- backwards compatibility -->
<a id="schemabundletitle"></a>
<a id="schema_BundleTitle"></a>
<a id="tocSbundletitle"></a>
<a id="tocsbundletitle"></a>

```json
"string"
```

 Title of the download bundle.

<h2 id="tocS_BundleVersion">BundleVersion</h2>
<!-- backwards compatibility -->
<a id="schemabundleversion"></a>
<a id="schema_BundleVersion"></a>
<a id="tocSbundleversion"></a>
<a id="tocsbundleversion"></a>

```json
"string"
```

 Version of the download bundle.

<h2 id="tocS_IconUrl">IconUrl</h2>
<!-- backwards compatibility -->
<a id="schemaiconurl"></a>
<a id="schema_IconUrl"></a>
<a id="tocSiconurl"></a>
<a id="tocsiconurl"></a>

```json
"string"
```

 Icon for the download bundle.

<h2 id="tocS_Platforms">Platforms</h2>
<!-- backwards compatibility -->
<a id="schemaplatforms"></a>
<a id="schema_Platforms"></a>
<a id="tocSplatforms"></a>
<a id="tocsplatforms"></a>

```json
[
  "OSX"
]
```

 Developer desktop or mobile app or website platforms.

<h2 id="tocS_BundleDetails">BundleDetails</h2>
<!-- backwards compatibility -->
<a id="schemabundledetails"></a>
<a id="schema_BundleDetails"></a>
<a id="tocSbundledetails"></a>
<a id="tocsbundledetails"></a>

```json
{
  "bundleId": "string",
  "title": "string",
  "version": "string",
  "description": "string",
  "iconUrl": "string",
  "availablePlatforms": [
    "OSX"
  ]
}
```

 The details of the bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|[BundleId](#schemabundleid)|false|none| Unique bundle identifier. |
|title|[BundleTitle](#schemabundletitle)|false|none| Title of the download bundle. |
|version|[BundleVersion](#schemabundleversion)|false|none| Version of the download bundle. |
|description|[BundleDescription](#schemabundledescription)|false|none| Description of the download bundle. |
|iconUrl|[IconUrl](#schemaiconurl)|false|none| Icon for the download bundle. |
|availablePlatforms|[Platforms](#schemaplatforms)|false|none| Developer desktop or mobile app or website platforms. |

#### Enumerated Values

|Property|Value|
|---|---|
|availablePlatforms|OSX|
|availablePlatforms|WINDOWS|
|availablePlatforms|LINUX|
|availablePlatforms|OBJC|
|availablePlatforms|SWIFT|
|availablePlatforms|ANDROID|
|availablePlatforms|JAVASCRIPT|

<h2 id="tocS_BundleList">BundleList</h2>
<!-- backwards compatibility -->
<a id="schemabundlelist"></a>
<a id="schema_BundleList"></a>
<a id="tocSbundlelist"></a>
<a id="tocsbundlelist"></a>

```json
[
  {
    "bundleId": "string",
    "title": "string",
    "version": "string",
    "description": "string",
    "iconUrl": "string",
    "availablePlatforms": [
      "OSX"
    ]
  }
]
```

 A list of bundles.

<h2 id="tocS_ConsoleUrl">ConsoleUrl</h2>
<!-- backwards compatibility -->
<a id="schemaconsoleurl"></a>
<a id="schema_ConsoleUrl"></a>
<a id="tocSconsoleurl"></a>
<a id="tocsconsoleurl"></a>

```json
"string"
```

<h2 id="tocS_Contents">Contents</h2>
<!-- backwards compatibility -->
<a id="schemacontents"></a>
<a id="schema_Contents"></a>
<a id="tocScontents"></a>
<a id="tocscontents"></a>

```json
"string"
```

 Binary file data.

<h2 id="tocS_ProjectName">ProjectName</h2>
<!-- backwards compatibility -->
<a id="schemaprojectname"></a>
<a id="schema_ProjectName"></a>
<a id="tocSprojectname"></a>
<a id="tocsprojectname"></a>

```json
"string"
```

 Name of the project.

<h2 id="tocS_ProjectRegion">ProjectRegion</h2>
<!-- backwards compatibility -->
<a id="schemaprojectregion"></a>
<a id="schema_ProjectRegion"></a>
<a id="tocSprojectregion"></a>
<a id="tocsprojectregion"></a>

```json
"string"
```

 Default region to use for AWS resource creation in the AWS Mobile Hub project.

<h2 id="tocS_SnapshotId">SnapshotId</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotid"></a>
<a id="schema_SnapshotId"></a>
<a id="tocSsnapshotid"></a>
<a id="tocssnapshotid"></a>

```json
"string"
```

 Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL.

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "contents": {}
}
```

 Request structure used to request a project be created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|object|false|none|none|

<h2 id="tocS_ProjectDetails">ProjectDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdetails"></a>
<a id="schema_ProjectDetails"></a>
<a id="tocSprojectdetails"></a>
<a id="tocsprojectdetails"></a>

```json
{
  "name": "string",
  "projectId": "string",
  "region": "string",
  "state": "NORMAL",
  "createdDate": {},
  "lastUpdatedDate": {},
  "consoleUrl": {},
  "resources": [
    {
      "type": "string",
      "name": "string",
      "arn": "string",
      "feature": "string",
      "attributes": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

 Detailed information about an AWS Mobile Hub project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[ProjectName](#schemaprojectname)|false|none| Name of the project. |
|projectId|[ProjectId](#schemaprojectid)|false|none| Unique project identifier. |
|region|[ProjectRegion](#schemaprojectregion)|false|none| Default region to use for AWS resource creation in the AWS Mobile Hub project. |
|state|[ProjectState](#schemaprojectstate)|false|none| Synchronization state for a project. |
|createdDate|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|consoleUrl|object|false|none|none|
|resources|[Resources](#schemaresources)|false|none| List of AWS resources associated with a project. |

#### Enumerated Values

|Property|Value|
|---|---|
|state|NORMAL|
|state|SYNCING|
|state|IMPORTING|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ProjectId">ProjectId</h2>
<!-- backwards compatibility -->
<a id="schemaprojectid"></a>
<a id="schema_ProjectId"></a>
<a id="tocSprojectid"></a>
<a id="tocsprojectid"></a>

```json
"string"
```

 Unique project identifier.

<h2 id="tocS_DeleteProjectRequest">DeleteProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectrequest"></a>
<a id="schema_DeleteProjectRequest"></a>
<a id="tocSdeleteprojectrequest"></a>
<a id="tocsdeleteprojectrequest"></a>

```json
{}
```

 Request structure used to request a project be deleted.

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
[
  {
    "type": "string",
    "name": "string",
    "arn": "string",
    "feature": "string",
    "attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

 List of AWS resources associated with a project.

<h2 id="tocS_DescribeBundleRequest">DescribeBundleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebundlerequest"></a>
<a id="schema_DescribeBundleRequest"></a>
<a id="tocSdescribebundlerequest"></a>
<a id="tocsdescribebundlerequest"></a>

```json
{}
```

 Request structure to request the details of a specific bundle.

<h2 id="tocS_DescribeProjectRequest">DescribeProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectrequest"></a>
<a id="schema_DescribeProjectRequest"></a>
<a id="tocSdescribeprojectrequest"></a>
<a id="tocsdescribeprojectrequest"></a>

```json
{}
```

 Request structure used to request details about a project.

<h2 id="tocS_DownloadUrl">DownloadUrl</h2>
<!-- backwards compatibility -->
<a id="schemadownloadurl"></a>
<a id="schema_DownloadUrl"></a>
<a id="tocSdownloadurl"></a>
<a id="tocsdownloadurl"></a>

```json
"string"
```

 The download Url.

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
"OSX"
```

 Developer desktop or target mobile app or website platform.

<h2 id="tocS_ExportBundleRequest">ExportBundleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportbundlerequest"></a>
<a id="schema_ExportBundleRequest"></a>
<a id="tocSexportbundlerequest"></a>
<a id="tocsexportbundlerequest"></a>

```json
{}
```

 Request structure used to request generation of custom SDK and tool packages required to integrate mobile web or app clients with backed AWS resources.

<h2 id="tocS_ExportProjectRequest">ExportProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportprojectrequest"></a>
<a id="schema_ExportProjectRequest"></a>
<a id="tocSexportprojectrequest"></a>
<a id="tocsexportprojectrequest"></a>

```json
{}
```

 Request structure used in requests to export project configuration details.

<h2 id="tocS_ShareUrl">ShareUrl</h2>
<!-- backwards compatibility -->
<a id="schemashareurl"></a>
<a id="schema_ShareUrl"></a>
<a id="tocSshareurl"></a>
<a id="tocsshareurl"></a>

```json
"string"
```

 URL which can be shared to allow other AWS users to create their own project in AWS Mobile Hub with the same configuration as the specified project. This URL pertains to a snapshot in time of the project configuration that is created when this API is called. If you want to share additional changes to your project configuration, then you will need to create and share a new snapshot by calling this method again.

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
"string"
```

 Identifies which feature in AWS Mobile Hub is associated with this AWS resource.

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

 Maximum number of records to list in a single response.

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

 Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries.

<h2 id="tocS_ListBundlesRequest">ListBundlesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbundlesrequest"></a>
<a id="schema_ListBundlesRequest"></a>
<a id="tocSlistbundlesrequest"></a>
<a id="tocslistbundlesrequest"></a>

```json
{}
```

 Request structure to request all available bundles.

<h2 id="tocS_ListProjectsRequest">ListProjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsrequest"></a>
<a id="schema_ListProjectsRequest"></a>
<a id="tocSlistprojectsrequest"></a>
<a id="tocslistprojectsrequest"></a>

```json
{}
```

 Request structure used to request projects list in AWS Mobile Hub.

<h2 id="tocS_ProjectSummaries">ProjectSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsummaries"></a>
<a id="schema_ProjectSummaries"></a>
<a id="tocSprojectsummaries"></a>
<a id="tocsprojectsummaries"></a>

```json
[
  {
    "name": {},
    "projectId": {}
  }
]
```

 List of projects.

<h2 id="tocS_ProjectState">ProjectState</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstate"></a>
<a id="schema_ProjectState"></a>
<a id="tocSprojectstate"></a>
<a id="tocsprojectstate"></a>

```json
"NORMAL"
```

 Synchronization state for a project.

<h2 id="tocS_ProjectSummary">ProjectSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsummary"></a>
<a id="schema_ProjectSummary"></a>
<a id="tocSprojectsummary"></a>
<a id="tocsprojectsummary"></a>

```json
{
  "name": {},
  "projectId": {}
}
```

 Summary information about an AWS Mobile Hub project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|projectId|object|false|none|none|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"string"
```

 Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket).

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

 Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket).

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

 AWS resource name which uniquely identifies the resource in AWS systems.

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "type": "string",
  "name": "string",
  "arn": "string",
  "feature": "string",
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

 Information about an instance of an AWS resource associated with a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResourceType](#schemaresourcetype)|false|none| Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket). |
|name|[ResourceName](#schemaresourcename)|false|none| Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket). |
|arn|[ResourceArn](#schemaresourcearn)|false|none| AWS resource name which uniquely identifies the resource in AWS systems. |
|feature|[Feature](#schemafeature)|false|none| Identifies which feature in AWS Mobile Hub is associated with this AWS resource. |
|attributes|[Attributes](#schemaattributes)|false|none| Key-value attribute pairs. |

<h2 id="tocS_UpdateProjectRequest">UpdateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectrequest"></a>
<a id="schema_UpdateProjectRequest"></a>
<a id="tocSupdateprojectrequest"></a>
<a id="tocsupdateprojectrequest"></a>

```json
{
  "contents": {}
}
```

 Request structure used for requests to update project configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|object|false|none|none|
