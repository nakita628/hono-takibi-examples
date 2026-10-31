<h1 id="aws-cloud9">AWS Cloud9 v2017-09-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Cloud9</fullname> <p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p> <p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p> <p>Cloud9 supports these operations:</p> <ul> <li> <p> <code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p> </li> <li> <p> <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p> </li> <li> <p> <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p> </li> <li> <p> <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p> </li> <li> <p> <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p> </li> <li> <p> <code>DescribeEnvironments</code>: Gets information about environments.</p> </li> <li> <p> <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p> </li> <li> <p> <code>ListEnvironments</code>: Gets a list of environment identifiers.</p> </li> <li> <p> <code>ListTagsForResource</code>: Gets the tags for an environment.</p> </li> <li> <p> <code>TagResource</code>: Adds tags to an environment.</p> </li> <li> <p> <code>UntagResource</code>: Removes tags from an environment.</p> </li> <li> <p> <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p> </li> <li> <p> <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p> </li> </ul>

Base URLs:

* <a href="http://cloud9.us-east-1.amazonaws.com">http://cloud9.us-east-1.amazonaws.com</a> - The AWS Cloud9 multi-region endpoint

* <a href="https://cloud9.us-east-1.amazonaws.com">https://cloud9.us-east-1.amazonaws.com</a> - The AWS Cloud9 multi-region endpoint

* <a href="http://cloud9.cn-north-1.amazonaws.com.cn">http://cloud9.cn-north-1.amazonaws.com.cn</a> - The AWS Cloud9 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloud9.cn-north-1.amazonaws.com.cn">https://cloud9.cn-north-1.amazonaws.com.cn</a> - The AWS Cloud9 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloud9/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-cloud9-default">Default</h1>

## CreateEnvironmentEC2

<a id="opIdCreateEnvironmentEC2"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2' \
  -d '{
    "name": {},
    "description": {},
    "clientRequestToken": {},
    "instanceType": {},
    "subnetId": {},
    "imageId": {},
    "automaticStopTimeMinutes": {},
    "ownerArn": {},
    "tags": {},
    "connectionType": {},
    "dryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2`

Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "clientRequestToken": {},
  "instanceType": {},
  "subnetId": {},
  "imageId": {},
  "automaticStopTimeMinutes": {},
  "ownerArn": {},
  "tags": {},
  "connectionType": {},
  "dryRun": {}
}
```

<h3 id="createenvironmentec2-parameters">Parameters</h3>

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
|body|body|[CreateEnvironmentEC2Request](#schemacreateenvironmentec2request)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» clientRequestToken|body|object|false|none|
|» instanceType|body|object|true|none|
|» subnetId|body|object|false|none|
|» imageId|body|object|false|none|
|» automaticStopTimeMinutes|body|object|false|none|
|» ownerArn|body|object|false|none|
|» tags|body|object|false|none|
|» connectionType|body|object|false|none|
|» dryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2|

> Example responses

> 200 Response

```json
{
  "environmentId": "8d9967e2f0624182b74e7690ad69ebEX"
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

<h3 id="createenvironmentec2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEnvironmentEC2Result](#schemacreateenvironmentec2result)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEnvironmentMembership

<a id="opIdCreateEnvironmentMembership"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership' \
  -d '{
    "environmentId": {},
    "userArn": {},
    "permissions": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership`

Adds an environment member to an Cloud9 development environment.

> Body parameter

```json
{
  "environmentId": {},
  "userArn": {},
  "permissions": {}
}
```

<h3 id="createenvironmentmembership-parameters">Parameters</h3>

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
|body|body|[CreateEnvironmentMembershipRequest](#schemacreateenvironmentmembershiprequest)|true|none|
|» environmentId|body|object|true|none|
|» userArn|body|object|true|none|
|» permissions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership|

> Example responses

> 200 Response

```json
{
  "membership": {
    "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
    "permissions": "read-write",
    "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
    "userId": "AIDAJ3BA6O2FMJWCWXHEX"
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

<h3 id="createenvironmentmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEnvironmentMembershipResult](#schemacreateenvironmentmembershipresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEnvironment

<a id="opIdDeleteEnvironment"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.DeleteEnvironment' \
  -d '{
    "environmentId": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment`

Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.

> Body parameter

```json
{
  "environmentId": {}
}
```

<h3 id="deleteenvironment-parameters">Parameters</h3>

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
|body|body|[DeleteEnvironmentRequest](#schemadeleteenvironmentrequest)|true|none|
|» environmentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.DeleteEnvironment|

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

<h3 id="deleteenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEnvironmentResult](#schemadeleteenvironmentresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEnvironmentMembership

<a id="opIdDeleteEnvironmentMembership"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership' \
  -d '{
    "environmentId": {},
    "userArn": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership`

Deletes an environment member from a development environment.

> Body parameter

```json
{
  "environmentId": {},
  "userArn": {}
}
```

<h3 id="deleteenvironmentmembership-parameters">Parameters</h3>

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
|body|body|[DeleteEnvironmentMembershipRequest](#schemadeleteenvironmentmembershiprequest)|true|none|
|» environmentId|body|object|true|none|
|» userArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership|

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

<h3 id="deleteenvironmentmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEnvironmentMembershipResult](#schemadeleteenvironmentmembershipresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEnvironmentMemberships

<a id="opIdDescribeEnvironmentMemberships"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships' \
  -d '{
    "userArn": {},
    "environmentId": {},
    "permissions": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships`

Gets information about environment members for an Cloud9 development environment.

> Body parameter

```json
{
  "userArn": {},
  "environmentId": {},
  "permissions": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeenvironmentmemberships-parameters">Parameters</h3>

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
|body|body|[DescribeEnvironmentMembershipsRequest](#schemadescribeenvironmentmembershipsrequest)|true|none|
|» userArn|body|object|false|none|
|» environmentId|body|object|false|none|
|» permissions|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships|

> Example responses

> 200 Response

```json
{
  "memberships": [
    {
      "environmentId": "10a75714bd494714929e7f5ec4125aEX",
      "lastAccess": "2018-01-19T11:06:13Z",
      "permissions": "owner",
      "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
      "userId": "AIDAJNUEDQAQWFELJDLEX"
    },
    {
      "environmentId": "12bfc3cd537f41cb9776f8af5525c9EX",
      "lastAccess": "2018-01-19T11:39:19Z",
      "permissions": "owner",
      "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
      "userId": "AIDAJNUEDQAQWFELJDLEX"
    }
  ]
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

<h3 id="describeenvironmentmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentMembershipsResult](#schemadescribeenvironmentmembershipsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEnvironmentStatus

<a id="opIdDescribeEnvironmentStatus"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus' \
  -d '{
    "environmentId": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus`

Gets status information for an Cloud9 development environment.

> Body parameter

```json
{
  "environmentId": {}
}
```

<h3 id="describeenvironmentstatus-parameters">Parameters</h3>

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
|body|body|[DescribeEnvironmentStatusRequest](#schemadescribeenvironmentstatusrequest)|true|none|
|» environmentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus|

> Example responses

> 200 Response

```json
{
  "message": "Environment is ready to use",
  "status": "ready"
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

<h3 id="describeenvironmentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentStatusResult](#schemadescribeenvironmentstatusresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEnvironments

<a id="opIdDescribeEnvironments"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.DescribeEnvironments' \
  -d '{
    "environmentIds": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments`

Gets information about Cloud9 development environments.

> Body parameter

```json
{
  "environmentIds": {}
}
```

<h3 id="describeenvironments-parameters">Parameters</h3>

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
|body|body|[DescribeEnvironmentsRequest](#schemadescribeenvironmentsrequest)|true|none|
|» environmentIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.DescribeEnvironments|

> Example responses

> 200 Response

```json
{
  "environments": [
    {
      "name": "my-demo-environment",
      "type": "ec2",
      "arn": "arn:aws:cloud9:us-east-2:123456789012:environment:8d9967e2f0624182b74e7690ad69ebEX",
      "description": "This is my demonstration environment.",
      "id": "8d9967e2f0624182b74e7690ad69ebEX",
      "lifecycle": {
        "status": "CREATED"
      },
      "ownerArn": "arn:aws:iam::123456789012:user/MyDemoUser"
    },
    {
      "name": "another-demo-environment",
      "type": "ssh",
      "arn": "arn:aws:cloud9:us-east-2:123456789012:environment:349c86d4579e4e7298d500ff57a6b2EX",
      "description": "",
      "id": "349c86d4579e4e7298d500ff57a6b2EX",
      "lifecycle": {
        "status": "CREATED"
      },
      "ownerArn": "arn:aws:sts::123456789012:assumed-role/AnotherDemoUser/AnotherDemoUser"
    }
  ]
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

<h3 id="describeenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEnvironmentsResult](#schemadescribeenvironmentsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironments

<a id="opIdListEnvironments"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.ListEnvironments' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments`

Gets a list of Cloud9 development environment identifiers.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listenvironments-parameters">Parameters</h3>

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
|body|body|[ListEnvironmentsRequest](#schemalistenvironmentsrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.ListEnvironments|

> Example responses

> 200 Response

```json
{
  "environmentIds": [
    "349c86d4579e4e7298d500ff57a6b2EX",
    "45a3da47af0840f2b0c0824f5ee232EX"
  ]
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

<h3 id="listenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentsResult](#schemalistenvironmentsresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource`

Gets a list of the tags associated with an Cloud9 development environment.

> Body parameter

```json
{
  "ResourceARN": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource`

<p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>

> Body parameter

```json
{
  "ResourceARN": {},
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
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource`

Removes tags from an Cloud9 development environment.

> Body parameter

```json
{
  "ResourceARN": {},
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
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnvironment

<a id="opIdUpdateEnvironment"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.UpdateEnvironment' \
  -d '{
    "environmentId": {},
    "name": {},
    "description": {},
    "managedCredentialsAction": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment`

Changes the settings of an existing Cloud9 development environment.

> Body parameter

```json
{
  "environmentId": {},
  "name": {},
  "description": {},
  "managedCredentialsAction": {}
}
```

<h3 id="updateenvironment-parameters">Parameters</h3>

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
|body|body|[UpdateEnvironmentRequest](#schemaupdateenvironmentrequest)|true|none|
|» environmentId|body|object|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|
|» managedCredentialsAction|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.UpdateEnvironment|

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

<h3 id="updateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnvironmentResult](#schemaupdateenvironmentresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnvironmentMembership

<a id="opIdUpdateEnvironmentMembership"></a>

> Code samples

```bash
curl 'https://cloud9.us-east-1.amazonaws.com/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership' \
  -d '{
    "environmentId": {},
    "userArn": {},
    "permissions": {}
  }'
```

`POST /#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership`

Changes the settings of an existing environment member for an Cloud9 development environment.

> Body parameter

```json
{
  "environmentId": {},
  "userArn": {},
  "permissions": {}
}
```

<h3 id="updateenvironmentmembership-parameters">Parameters</h3>

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
|body|body|[UpdateEnvironmentMembershipRequest](#schemaupdateenvironmentmembershiprequest)|true|none|
|» environmentId|body|object|true|none|
|» userArn|body|object|true|none|
|» permissions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership|

> Example responses

> 200 Response

```json
{
  "membership": {
    "environmentId": "8d9967e2f0624182b74e7690ad69eb31",
    "permissions": "read-only",
    "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
    "userId": "AIDAJ3BA6O2FMJWCWXHEX"
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

<h3 id="updateenvironmentmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnvironmentMembershipResult](#schemaupdateenvironmentmembershipresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateEnvironmentEC2Result">CreateEnvironmentEC2Result</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentec2result"></a>
<a id="schema_CreateEnvironmentEC2Result"></a>
<a id="tocScreateenvironmentec2result"></a>
<a id="tocscreateenvironmentec2result"></a>

```json
{
  "environmentId": "8d9967e2f0624182b74e7690ad69ebEX"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|object|false|none|none|

<h2 id="tocS_CreateEnvironmentEC2Request">CreateEnvironmentEC2Request</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentec2request"></a>
<a id="schema_CreateEnvironmentEC2Request"></a>
<a id="tocScreateenvironmentec2request"></a>
<a id="tocscreateenvironmentec2request"></a>

```json
{
  "name": {},
  "description": {},
  "clientRequestToken": {},
  "instanceType": {},
  "subnetId": {},
  "imageId": {},
  "automaticStopTimeMinutes": {},
  "ownerArn": {},
  "tags": {},
  "connectionType": {},
  "dryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|clientRequestToken|object|false|none|none|
|instanceType|object|true|none|none|
|subnetId|object|false|none|none|
|imageId|object|false|none|none|
|automaticStopTimeMinutes|object|false|none|none|
|ownerArn|object|false|none|none|
|tags|object|false|none|none|
|connectionType|object|false|none|none|
|dryRun|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

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

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
```

<h2 id="tocS_CreateEnvironmentMembershipResult">CreateEnvironmentMembershipResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentmembershipresult"></a>
<a id="schema_CreateEnvironmentMembershipResult"></a>
<a id="tocScreateenvironmentmembershipresult"></a>
<a id="tocscreateenvironmentmembershipresult"></a>

```json
{
  "membership": {
    "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
    "permissions": "read-write",
    "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
    "userId": "AIDAJ3BA6O2FMJWCWXHEX"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membership|object|true|none|none|

<h2 id="tocS_CreateEnvironmentMembershipRequest">CreateEnvironmentMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentmembershiprequest"></a>
<a id="schema_CreateEnvironmentMembershipRequest"></a>
<a id="tocScreateenvironmentmembershiprequest"></a>
<a id="tocscreateenvironmentmembershiprequest"></a>

```json
{
  "environmentId": {},
  "userArn": {},
  "permissions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|object|true|none|none|
|userArn|object|true|none|none|
|permissions|object|true|none|none|

<h2 id="tocS_DeleteEnvironmentResult">DeleteEnvironmentResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentresult"></a>
<a id="schema_DeleteEnvironmentResult"></a>
<a id="tocSdeleteenvironmentresult"></a>
<a id="tocsdeleteenvironmentresult"></a>

```json
{}
```

<h2 id="tocS_DeleteEnvironmentRequest">DeleteEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentrequest"></a>
<a id="schema_DeleteEnvironmentRequest"></a>
<a id="tocSdeleteenvironmentrequest"></a>
<a id="tocsdeleteenvironmentrequest"></a>

```json
{
  "environmentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|object|true|none|none|

<h2 id="tocS_DeleteEnvironmentMembershipResult">DeleteEnvironmentMembershipResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentmembershipresult"></a>
<a id="schema_DeleteEnvironmentMembershipResult"></a>
<a id="tocSdeleteenvironmentmembershipresult"></a>
<a id="tocsdeleteenvironmentmembershipresult"></a>

```json
{}
```

<h2 id="tocS_DeleteEnvironmentMembershipRequest">DeleteEnvironmentMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentmembershiprequest"></a>
<a id="schema_DeleteEnvironmentMembershipRequest"></a>
<a id="tocSdeleteenvironmentmembershiprequest"></a>
<a id="tocsdeleteenvironmentmembershiprequest"></a>

```json
{
  "environmentId": {},
  "userArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|object|true|none|none|
|userArn|object|true|none|none|

<h2 id="tocS_DescribeEnvironmentMembershipsResult">DescribeEnvironmentMembershipsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentmembershipsresult"></a>
<a id="schema_DescribeEnvironmentMembershipsResult"></a>
<a id="tocSdescribeenvironmentmembershipsresult"></a>
<a id="tocsdescribeenvironmentmembershipsresult"></a>

```json
{
  "memberships": [
    {
      "environmentId": "10a75714bd494714929e7f5ec4125aEX",
      "lastAccess": "2018-01-19T11:06:13Z",
      "permissions": "owner",
      "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
      "userId": "AIDAJNUEDQAQWFELJDLEX"
    },
    {
      "environmentId": "12bfc3cd537f41cb9776f8af5525c9EX",
      "lastAccess": "2018-01-19T11:39:19Z",
      "permissions": "owner",
      "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
      "userId": "AIDAJNUEDQAQWFELJDLEX"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeEnvironmentMembershipsRequest">DescribeEnvironmentMembershipsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentmembershipsrequest"></a>
<a id="schema_DescribeEnvironmentMembershipsRequest"></a>
<a id="tocSdescribeenvironmentmembershipsrequest"></a>
<a id="tocsdescribeenvironmentmembershipsrequest"></a>

```json
{
  "userArn": {},
  "environmentId": {},
  "permissions": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|false|none|none|
|environmentId|object|false|none|none|
|permissions|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_DescribeEnvironmentStatusResult">DescribeEnvironmentStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentstatusresult"></a>
<a id="schema_DescribeEnvironmentStatusResult"></a>
<a id="tocSdescribeenvironmentstatusresult"></a>
<a id="tocsdescribeenvironmentstatusresult"></a>

```json
{
  "message": "Environment is ready to use",
  "status": "ready"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|
|message|object|true|none|none|

<h2 id="tocS_DescribeEnvironmentStatusRequest">DescribeEnvironmentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentstatusrequest"></a>
<a id="schema_DescribeEnvironmentStatusRequest"></a>
<a id="tocSdescribeenvironmentstatusrequest"></a>
<a id="tocsdescribeenvironmentstatusrequest"></a>

```json
{
  "environmentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|object|true|none|none|

<h2 id="tocS_DescribeEnvironmentsResult">DescribeEnvironmentsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentsresult"></a>
<a id="schema_DescribeEnvironmentsResult"></a>
<a id="tocSdescribeenvironmentsresult"></a>
<a id="tocsdescribeenvironmentsresult"></a>

```json
{
  "environments": [
    {
      "name": "my-demo-environment",
      "type": "ec2",
      "arn": "arn:aws:cloud9:us-east-2:123456789012:environment:8d9967e2f0624182b74e7690ad69ebEX",
      "description": "This is my demonstration environment.",
      "id": "8d9967e2f0624182b74e7690ad69ebEX",
      "lifecycle": {
        "status": "CREATED"
      },
      "ownerArn": "arn:aws:iam::123456789012:user/MyDemoUser"
    },
    {
      "name": "another-demo-environment",
      "type": "ssh",
      "arn": "arn:aws:cloud9:us-east-2:123456789012:environment:349c86d4579e4e7298d500ff57a6b2EX",
      "description": "",
      "id": "349c86d4579e4e7298d500ff57a6b2EX",
      "lifecycle": {
        "status": "CREATED"
      },
      "ownerArn": "arn:aws:sts::123456789012:assumed-role/AnotherDemoUser/AnotherDemoUser"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|object|false|none|none|

<h2 id="tocS_DescribeEnvironmentsRequest">DescribeEnvironmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenvironmentsrequest"></a>
<a id="schema_DescribeEnvironmentsRequest"></a>
<a id="tocSdescribeenvironmentsrequest"></a>
<a id="tocsdescribeenvironmentsrequest"></a>

```json
{
  "environmentIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentIds|object|true|none|none|

<h2 id="tocS_ListEnvironmentsResult">ListEnvironmentsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsresult"></a>
<a id="schema_ListEnvironmentsResult"></a>
<a id="tocSlistenvironmentsresult"></a>
<a id="tocslistenvironmentsresult"></a>

```json
{
  "environmentIds": [
    "349c86d4579e4e7298d500ff57a6b2EX",
    "45a3da47af0840f2b0c0824f5ee232EX"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|environmentIds|object|false|none|none|

<h2 id="tocS_ListEnvironmentsRequest">ListEnvironmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsrequest"></a>
<a id="schema_ListEnvironmentsRequest"></a>
<a id="tocSlistenvironmentsrequest"></a>
<a id="tocslistenvironmentsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

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
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_ConcurrentAccessException">ConcurrentAccessException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentaccessexception"></a>
<a id="schema_ConcurrentAccessException"></a>
<a id="tocSconcurrentaccessexception"></a>
<a id="tocsconcurrentaccessexception"></a>

```json
null
```

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
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateEnvironmentResult">UpdateEnvironmentResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentresult"></a>
<a id="schema_UpdateEnvironmentResult"></a>
<a id="tocSupdateenvironmentresult"></a>
<a id="tocsupdateenvironmentresult"></a>

```json
{}
```

<h2 id="tocS_UpdateEnvironmentRequest">UpdateEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentrequest"></a>
<a id="schema_UpdateEnvironmentRequest"></a>
<a id="tocSupdateenvironmentrequest"></a>
<a id="tocsupdateenvironmentrequest"></a>

```json
{
  "environmentId": {},
  "name": {},
  "description": {},
  "managedCredentialsAction": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|object|true|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|managedCredentialsAction|object|false|none|none|

<h2 id="tocS_UpdateEnvironmentMembershipResult">UpdateEnvironmentMembershipResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentmembershipresult"></a>
<a id="schema_UpdateEnvironmentMembershipResult"></a>
<a id="tocSupdateenvironmentmembershipresult"></a>
<a id="tocsupdateenvironmentmembershipresult"></a>

```json
{
  "membership": {
    "environmentId": "8d9967e2f0624182b74e7690ad69eb31",
    "permissions": "read-only",
    "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
    "userId": "AIDAJ3BA6O2FMJWCWXHEX"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membership|object|false|none|none|

<h2 id="tocS_UpdateEnvironmentMembershipRequest">UpdateEnvironmentMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentmembershiprequest"></a>
<a id="schema_UpdateEnvironmentMembershipRequest"></a>
<a id="tocSupdateenvironmentmembershiprequest"></a>
<a id="tocsupdateenvironmentmembershiprequest"></a>

```json
{
  "environmentId": {},
  "userArn": {},
  "permissions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentId|object|true|none|none|
|userArn|object|true|none|none|
|permissions|object|true|none|none|

<h2 id="tocS_AutomaticStopTimeMinutes">AutomaticStopTimeMinutes</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticstoptimeminutes"></a>
<a id="schema_AutomaticStopTimeMinutes"></a>
<a id="tocSautomaticstoptimeminutes"></a>
<a id="tocsautomaticstoptimeminutes"></a>

```json
0
```

<h2 id="tocS_EnvironmentId">EnvironmentId</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentid"></a>
<a id="schema_EnvironmentId"></a>
<a id="tocSenvironmentid"></a>
<a id="tocsenvironmentid"></a>

```json
"string"
```

<h2 id="tocS_BoundedEnvironmentIdList">BoundedEnvironmentIdList</h2>
<!-- backwards compatibility -->
<a id="schemaboundedenvironmentidlist"></a>
<a id="schema_BoundedEnvironmentIdList"></a>
<a id="tocSboundedenvironmentidlist"></a>
<a id="tocsboundedenvironmentidlist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_ConnectionType">ConnectionType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontype"></a>
<a id="schema_ConnectionType"></a>
<a id="tocSconnectiontype"></a>
<a id="tocsconnectiontype"></a>

```json
"CONNECT_SSH"
```

<h2 id="tocS_EnvironmentName">EnvironmentName</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentname"></a>
<a id="schema_EnvironmentName"></a>
<a id="tocSenvironmentname"></a>
<a id="tocsenvironmentname"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentDescription">EnvironmentDescription</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentdescription"></a>
<a id="schema_EnvironmentDescription"></a>
<a id="tocSenvironmentdescription"></a>
<a id="tocsenvironmentdescription"></a>

```json
"password"
```

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

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
"stringstringstr"
```

<h2 id="tocS_ImageId">ImageId</h2>
<!-- backwards compatibility -->
<a id="schemaimageid"></a>
<a id="schema_ImageId"></a>
<a id="tocSimageid"></a>
<a id="tocsimageid"></a>

```json
"string"
```

<h2 id="tocS_UserArn">UserArn</h2>
<!-- backwards compatibility -->
<a id="schemauserarn"></a>
<a id="schema_UserArn"></a>
<a id="tocSuserarn"></a>
<a id="tocsuserarn"></a>

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

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_MemberPermissions">MemberPermissions</h2>
<!-- backwards compatibility -->
<a id="schemamemberpermissions"></a>
<a id="schema_MemberPermissions"></a>
<a id="tocSmemberpermissions"></a>
<a id="tocsmemberpermissions"></a>

```json
"read-write"
```

<h2 id="tocS_EnvironmentMember">EnvironmentMember</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentmember"></a>
<a id="schema_EnvironmentMember"></a>
<a id="tocSenvironmentmember"></a>
<a id="tocsenvironmentmember"></a>

```json
{
  "permissions": {},
  "userId": {},
  "userArn": {},
  "environmentId": {},
  "lastAccess": {}
}
```

Information about an environment member for an Cloud9 development environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|object|true|none|none|
|userId|object|true|none|none|
|userArn|object|true|none|none|
|environmentId|object|true|none|none|
|lastAccess|object|false|none|none|

<h2 id="tocS_PermissionsList">PermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionslist"></a>
<a id="schema_PermissionsList"></a>
<a id="tocSpermissionslist"></a>
<a id="tocspermissionslist"></a>

```json
[
  "owner"
]
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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_EnvironmentMembersList">EnvironmentMembersList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentmemberslist"></a>
<a id="schema_EnvironmentMembersList"></a>
<a id="tocSenvironmentmemberslist"></a>
<a id="tocsenvironmentmemberslist"></a>

```json
[
  {
    "permissions": {},
    "userId": {},
    "userArn": {},
    "environmentId": {},
    "lastAccess": {}
  }
]
```

<h2 id="tocS_EnvironmentStatus">EnvironmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentstatus"></a>
<a id="schema_EnvironmentStatus"></a>
<a id="tocSenvironmentstatus"></a>
<a id="tocsenvironmentstatus"></a>

```json
"error"
```

<h2 id="tocS_EnvironmentList">EnvironmentList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlist"></a>
<a id="schema_EnvironmentList"></a>
<a id="tocSenvironmentlist"></a>
<a id="tocsenvironmentlist"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "type": {},
    "connectionType": {},
    "arn": {},
    "ownerArn": {},
    "lifecycle": {
      "status": {},
      "reason": {},
      "failureResource": {}
    },
    "managedCredentialsStatus": {}
  }
]
```

<h2 id="tocS_EnvironmentType">EnvironmentType</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmenttype"></a>
<a id="schema_EnvironmentType"></a>
<a id="tocSenvironmenttype"></a>
<a id="tocsenvironmenttype"></a>

```json
"ssh"
```

<h2 id="tocS_EnvironmentLifecycle">EnvironmentLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlifecycle"></a>
<a id="schema_EnvironmentLifecycle"></a>
<a id="tocSenvironmentlifecycle"></a>
<a id="tocsenvironmentlifecycle"></a>

```json
{
  "status": {},
  "reason": {},
  "failureResource": {}
}
```

Information about the current creation or deletion lifecycle state of an Cloud9 development environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|reason|object|false|none|none|
|failureResource|object|false|none|none|

<h2 id="tocS_ManagedCredentialsStatus">ManagedCredentialsStatus</h2>
<!-- backwards compatibility -->
<a id="schemamanagedcredentialsstatus"></a>
<a id="schema_ManagedCredentialsStatus"></a>
<a id="tocSmanagedcredentialsstatus"></a>
<a id="tocsmanagedcredentialsstatus"></a>

```json
"ENABLED_ON_CREATE"
```

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "type": {},
  "connectionType": {},
  "arn": {},
  "ownerArn": {},
  "lifecycle": {
    "status": {},
    "reason": {},
    "failureResource": {}
  },
  "managedCredentialsStatus": {}
}
```

Information about an Cloud9 development environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|type|object|true|none|none|
|connectionType|object|false|none|none|
|arn|object|true|none|none|
|ownerArn|object|true|none|none|
|lifecycle|object|false|none|none|
|managedCredentialsStatus|object|false|none|none|

<h2 id="tocS_EnvironmentArn">EnvironmentArn</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentarn"></a>
<a id="schema_EnvironmentArn"></a>
<a id="tocSenvironmentarn"></a>
<a id="tocsenvironmentarn"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentIdList">EnvironmentIdList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentidlist"></a>
<a id="schema_EnvironmentIdList"></a>
<a id="tocSenvironmentidlist"></a>
<a id="tocsenvironmentidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EnvironmentLifecycleStatus">EnvironmentLifecycleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlifecyclestatus"></a>
<a id="schema_EnvironmentLifecycleStatus"></a>
<a id="tocSenvironmentlifecyclestatus"></a>
<a id="tocsenvironmentlifecyclestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_Permissions">Permissions</h2>
<!-- backwards compatibility -->
<a id="schemapermissions"></a>
<a id="schema_Permissions"></a>
<a id="tocSpermissions"></a>
<a id="tocspermissions"></a>

```json
"owner"
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

<h2 id="tocS_ManagedCredentialsAction">ManagedCredentialsAction</h2>
<!-- backwards compatibility -->
<a id="schemamanagedcredentialsaction"></a>
<a id="schema_ManagedCredentialsAction"></a>
<a id="tocSmanagedcredentialsaction"></a>
<a id="tocsmanagedcredentialsaction"></a>

```json
"ENABLE"
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"password"
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"password"
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

Metadata that is associated with Amazon Web Services resources. In particular, a name-value pair that can be associated with an Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by Amazon Web Services services. A system tag is prefixed with <code>"aws:"</code> and cannot be modified by the user.

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
  "password"
]
```
