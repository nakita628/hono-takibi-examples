<h1 id="awsserverlessapplicationrepository">AWSServerlessApplicationRepository v2017-09-08</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
 and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
 see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of 
 all levels can get started with serverless computing without needing to learn anything new. You can use category 
 keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots. 
 You can also search for applications by name, publisher, or event source. To use an application, you simply choose it, 
 configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
 within your team or across your organization. To publish a serverless application (or app), you can use the
 AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
 code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
 For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
 GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
 experiences available:</p><ul>
 <li>
 <p>Consuming Applications – Browse for applications and view information about them, including
 source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
 <p>Publishing Applications – Configure and upload applications to make them available to other
 developers, and publish new versions of applications. </p>
 </li>
 </ul>

Base URLs:

* <a href="http://serverlessrepo.us-east-1.amazonaws.com">http://serverlessrepo.us-east-1.amazonaws.com</a> - The AWSServerlessApplicationRepository multi-region endpoint

* <a href="https://serverlessrepo.us-east-1.amazonaws.com">https://serverlessrepo.us-east-1.amazonaws.com</a> - The AWSServerlessApplicationRepository multi-region endpoint

* <a href="http://serverlessrepo.cn-north-1.amazonaws.com.cn">http://serverlessrepo.cn-north-1.amazonaws.com.cn</a> - The AWSServerlessApplicationRepository endpoint for China (Beijing) and China (Ningxia)

* <a href="https://serverlessrepo.cn-north-1.amazonaws.com.cn">https://serverlessrepo.cn-north-1.amazonaws.com.cn</a> - The AWSServerlessApplicationRepository endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/serverlessrepo/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="awsserverlessapplicationrepository-default">Default</h1>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications`

Lists applications owned by the requester.

<h3 id="listapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxItems|query|integer|false|The total number of items to return.|
|nextToken|query|string|false|A token to specify where to start paginating.|
|MaxItems|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Applications": {},
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

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsResponse](#schemalistapplicationsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "author": "string",
    "description": "string",
    "homePageUrl": "string",
    "labels": [
      "string"
    ],
    "licenseBody": "string",
    "licenseUrl": "string",
    "name": "string",
    "readmeBody": "string",
    "readmeUrl": "string",
    "semanticVersion": "string",
    "sourceCodeArchiveUrl": "string",
    "sourceCodeUrl": "string",
    "spdxLicenseId": "string",
    "templateBody": "string",
    "templateUrl": "string"
  }'
```

`POST /applications`

Creates an application, optionally including an AWS SAM file to create the first application version in the same call.

> Body parameter

```json
{
  "author": "string",
  "description": "string",
  "homePageUrl": "string",
  "labels": [
    "string"
  ],
  "licenseBody": "string",
  "licenseUrl": "string",
  "name": "string",
  "readmeBody": "string",
  "readmeUrl": "string",
  "semanticVersion": "string",
  "sourceCodeArchiveUrl": "string",
  "sourceCodeUrl": "string",
  "spdxLicenseId": "string",
  "templateBody": "string",
  "templateUrl": "string"
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|» author|body|string|true|<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]\|-(?!-))*[a-z0-9])?$";</p>|
|» description|body|string|true|<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>|
|» homePageUrl|body|string|false|A URL with more information about the application, for example the location of your GitHub repository for the application.|
|» labels|body|[[__string](#schema__string)]|false|<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>|
|» licenseBody|body|string|false|<p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.<br> The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>|
|» licenseUrl|body|string|false|<p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>|
|» name|body|string|true|<p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\-]+";</p>|
|» readmeBody|body|string|false|<p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.<br> The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>|
|» readmeUrl|body|string|false|<p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>|
|» semanticVersion|body|string|false|<p>The semantic version of the application:</p><p><br> <a href="https://semver.org/">https://semver.org/</a><br> </p>|
|» sourceCodeArchiveUrl|body|string|false|<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>|
|» sourceCodeUrl|body|string|false|A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.|
|» spdxLicenseId|body|string|false|A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.|
|» templateBody|body|string|false|<p>The local raw packaged AWS SAM template file of your application.<br> The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>|
|» templateUrl|body|string|false|<p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>|

> Example responses

> 201 Response

```json
{
  "ApplicationId": {},
  "Author": {},
  "CreationTime": {},
  "Description": {},
  "HomePageUrl": {},
  "IsVerifiedAuthor": {},
  "Labels": {},
  "LicenseUrl": {},
  "Name": {},
  "ReadmeUrl": {},
  "SpdxLicenseId": {},
  "VerifiedAuthorUrl": {},
  "Version": {
    "ApplicationId": {},
    "CreationTime": {},
    "ParameterDefinitions": {},
    "RequiredCapabilities": {},
    "ResourcesSupported": {},
    "SemanticVersion": {},
    "SourceCodeArchiveUrl": {},
    "SourceCodeUrl": {},
    "TemplateUrl": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateApplicationResponse](#schemacreateapplicationresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplicationVersion

<a id="opIdCreateApplicationVersion"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/versions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceCodeArchiveUrl": "string",
    "sourceCodeUrl": "string",
    "templateBody": "string",
    "templateUrl": "string"
  }'
```

`PUT /applications/{applicationId}/versions/{semanticVersion}`

Creates an application version.

> Body parameter

```json
{
  "sourceCodeArchiveUrl": "string",
  "sourceCodeUrl": "string",
  "templateBody": "string",
  "templateUrl": "string"
}
```

<h3 id="createapplicationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|semanticVersion|path|string|true|The semantic version of the new version.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sourceCodeArchiveUrl|body|string|false|<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>|
|» sourceCodeUrl|body|string|false|A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.|
|» templateBody|body|string|false|The raw packaged AWS SAM template of your application.|
|» templateUrl|body|string|false|A link to the packaged AWS SAM template of your application.|

> Example responses

> 201 Response

```json
{
  "ApplicationId": {},
  "CreationTime": {},
  "ParameterDefinitions": {},
  "RequiredCapabilities": {},
  "ResourcesSupported": {},
  "SemanticVersion": {},
  "SourceCodeArchiveUrl": {},
  "SourceCodeUrl": {},
  "TemplateUrl": {}
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

<h3 id="createapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateApplicationVersionResponse](#schemacreateapplicationversionresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCloudFormationChangeSet

<a id="opIdCreateCloudFormationChangeSet"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/changesets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "capabilities": [
      "string"
    ],
    "changeSetName": "string",
    "clientToken": "string",
    "description": "string",
    "notificationArns": [
      "string"
    ],
    "parameterOverrides": [
      {
        "Name": {},
        "Value": {}
      }
    ],
    "resourceTypes": [
      "string"
    ],
    "rollbackConfiguration": {
      "MonitoringTimeInMinutes": {},
      "RollbackTriggers": {}
    },
    "semanticVersion": "string",
    "stackName": "string",
    "tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "templateId": "string"
  }'
```

`POST /applications/{applicationId}/changesets`

Creates an AWS CloudFormation change set for the given application.

> Body parameter

```json
{
  "capabilities": [
    "string"
  ],
  "changeSetName": "string",
  "clientToken": "string",
  "description": "string",
  "notificationArns": [
    "string"
  ],
  "parameterOverrides": [
    {
      "Name": {},
      "Value": {}
    }
  ],
  "resourceTypes": [
    "string"
  ],
  "rollbackConfiguration": {
    "MonitoringTimeInMinutes": {},
    "RollbackTriggers": {}
  },
  "semanticVersion": "string",
  "stackName": "string",
  "tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "templateId": "string"
}
```

<h3 id="createcloudformationchangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» capabilities|body|[[__string](#schema__string)]|false|<p>A list of values that you must specify before you can deploy certain applications.<br> Some applications might include resources that can affect permissions in your AWS<br> account, for example, by creating new AWS Identity and Access Management (IAM) users.<br> For those applications, you must explicitly acknowledge their capabilities by<br> specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,<br> CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or<br> CAPABILITY_NAMED_IAM:<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.<br> If the application contains IAM resources, you can specify either CAPABILITY_IAM<br> or CAPABILITY_NAMED_IAM. If the application contains IAM resources<br> with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and<br> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS:TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify<br> CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review<br> all permissions associated with the application before deploying. If you don't specify<br> this parameter for an application that requires capabilities, the call will fail.</p>|
|» changeSetName|body|string|false|This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a><br> </i> API.|
|» clientToken|body|string|false|This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a><br> </i> API.|
|» description|body|string|false|This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a><br> </i> API.|
|» notificationArns|body|[[__string](#schema__string)]|false|This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a><br> </i> API.|
|» parameterOverrides|body|[[ParameterValue](#schemaparametervalue)]|false|A list of parameter values for the parameters of the application.|
|» resourceTypes|body|[[__string](#schema__string)]|false|This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a><br> </i> API.|
|» rollbackConfiguration|body|object|false|This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a><br> </i> Data Type.|
|» » MonitoringTimeInMinutes|body|object|false|none|
|» » RollbackTriggers|body|object|false|none|
|» semanticVersion|body|string|false|<p>The semantic version of the application:</p><p><br> <a href="https://semver.org/">https://semver.org/</a><br> </p>|
|» stackName|body|string|true|This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a><br> </i> API.|
|» tags|body|[[Tag](#schematag)]|false|This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a><br> </i> API.|
|» templateId|body|string|false|<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>|

> Example responses

> 201 Response

```json
{
  "ApplicationId": {},
  "ChangeSetId": {},
  "SemanticVersion": {},
  "StackId": {}
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

<h3 id="createcloudformationchangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateCloudFormationChangeSetResponse](#schemacreatecloudformationchangesetresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCloudFormationTemplate

<a id="opIdCreateCloudFormationTemplate"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "semanticVersion": "string"
  }'
```

`POST /applications/{applicationId}/templates`

Creates an AWS CloudFormation template.

> Body parameter

```json
{
  "semanticVersion": "string"
}
```

<h3 id="createcloudformationtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» semanticVersion|body|string|false|<p>The semantic version of the application:</p><p><br> <a href="https://semver.org/">https://semver.org/</a><br> </p>|

> Example responses

> 201 Response

```json
{
  "ApplicationId": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "SemanticVersion": {},
  "Status": {},
  "TemplateId": {},
  "TemplateUrl": {}
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

<h3 id="createcloudformationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateCloudFormationTemplateResponse](#schemacreatecloudformationtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApplication

<a id="opIdGetApplication"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{applicationId}`

Gets the specified application.

<h3 id="getapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|semanticVersion|query|string|false|The semantic version of the application to get.|
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
  "ApplicationId": {},
  "Author": {},
  "CreationTime": {},
  "Description": {},
  "HomePageUrl": {},
  "IsVerifiedAuthor": {},
  "Labels": {},
  "LicenseUrl": {},
  "Name": {},
  "ReadmeUrl": {},
  "SpdxLicenseId": {},
  "VerifiedAuthorUrl": {},
  "Version": {
    "ApplicationId": {},
    "CreationTime": {},
    "ParameterDefinitions": {},
    "RequiredCapabilities": {},
    "ResourcesSupported": {},
    "SemanticVersion": {},
    "SourceCodeArchiveUrl": {},
    "SourceCodeUrl": {},
    "TemplateUrl": {}
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

<h3 id="getapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApplicationResponse](#schemagetapplicationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /applications/{applicationId}`

Deletes the specified application.

<h3 id="deleteapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 485 Response

```json
null
```

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "author": "string",
    "description": "string",
    "homePageUrl": "string",
    "labels": [
      "string"
    ],
    "readmeBody": "string",
    "readmeUrl": "string"
  }'
```

`PATCH /applications/{applicationId}`

Updates the specified application.

> Body parameter

```json
{
  "author": "string",
  "description": "string",
  "homePageUrl": "string",
  "labels": [
    "string"
  ],
  "readmeBody": "string",
  "readmeUrl": "string"
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» author|body|string|false|<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]\|-(?!-))*[a-z0-9])?$";</p>|
|» description|body|string|false|<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>|
|» homePageUrl|body|string|false|A URL with more information about the application, for example the location of your GitHub repository for the application.|
|» labels|body|[[__string](#schema__string)]|false|<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";</p>|
|» readmeBody|body|string|false|<p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>|
|» readmeUrl|body|string|false|<p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>|

> Example responses

> 200 Response

```json
{
  "ApplicationId": {},
  "Author": {},
  "CreationTime": {},
  "Description": {},
  "HomePageUrl": {},
  "IsVerifiedAuthor": {},
  "Labels": {},
  "LicenseUrl": {},
  "Name": {},
  "ReadmeUrl": {},
  "SpdxLicenseId": {},
  "VerifiedAuthorUrl": {},
  "Version": {
    "ApplicationId": {},
    "CreationTime": {},
    "ParameterDefinitions": {},
    "RequiredCapabilities": {},
    "ResourcesSupported": {},
    "SemanticVersion": {},
    "SourceCodeArchiveUrl": {},
    "SourceCodeUrl": {},
    "TemplateUrl": {}
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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationResponse](#schemaupdateapplicationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApplicationPolicy

<a id="opIdGetApplicationPolicy"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{applicationId}/policy`

Retrieves the policy for the application.

<h3 id="getapplicationpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
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
  "Statements": {}
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

<h3 id="getapplicationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApplicationPolicyResponse](#schemagetapplicationpolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutApplicationPolicy

<a id="opIdPutApplicationPolicy"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "statements": [
      {
        "Actions": {},
        "PrincipalOrgIDs": {},
        "Principals": {},
        "StatementId": {}
      }
    ]
  }'
```

`PUT /applications/{applicationId}/policy`

Sets the permission policy for an application. For the list of actions supported for this operation, see
 <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application 
 Permissions</a>
 .

> Body parameter

```json
{
  "statements": [
    {
      "Actions": {},
      "PrincipalOrgIDs": {},
      "Principals": {},
      "StatementId": {}
    }
  ]
}
```

<h3 id="putapplicationpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» statements|body|[[ApplicationPolicyStatement](#schemaapplicationpolicystatement)]|true|An array of policy statements applied to the application.|

> Example responses

> 200 Response

```json
{
  "Statements": {}
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

<h3 id="putapplicationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutApplicationPolicyResponse](#schemaputapplicationpolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCloudFormationTemplate

<a id="opIdGetCloudFormationTemplate"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{applicationId}/templates/{templateId}`

Gets the specified AWS CloudFormation template.

<h3 id="getcloudformationtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|templateId|path|string|true|<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>|
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
  "ApplicationId": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "SemanticVersion": {},
  "Status": {},
  "TemplateId": {},
  "TemplateUrl": {}
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

<h3 id="getcloudformationtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCloudFormationTemplateResponse](#schemagetcloudformationtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplicationDependencies

<a id="opIdListApplicationDependencies"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/dependencies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{applicationId}/dependencies`

Retrieves the list of applications nested in the containing application.

<h3 id="listapplicationdependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|maxItems|query|integer|false|The total number of items to return.|
|nextToken|query|string|false|A token to specify where to start paginating.|
|semanticVersion|query|string|false|The semantic version of the application to get.|
|MaxItems|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Dependencies": {},
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

<h3 id="listapplicationdependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationDependenciesResponse](#schemalistapplicationdependenciesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplicationVersions

<a id="opIdListApplicationVersions"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{applicationId}/versions`

Lists versions for the specified application.

<h3 id="listapplicationversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|maxItems|query|integer|false|The total number of items to return.|
|nextToken|query|string|false|A token to specify where to start paginating.|
|MaxItems|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "Versions": {}
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

<h3 id="listapplicationversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationVersionsResponse](#schemalistapplicationversionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnshareApplication

<a id="opIdUnshareApplication"></a>

> Code samples

```bash
curl https://serverlessrepo.us-east-1.amazonaws.com/applications/string/unshare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "organizationId": "string"
  }'
```

`POST /applications/{applicationId}/unshare`

<p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>

> Body parameter

```json
{
  "organizationId": "string"
}
```

<h3 id="unshareapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The Amazon Resource Name (ARN) of the application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» organizationId|body|string|true|The AWS Organization ID to unshare the application from.|

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

<h3 id="unshareapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateApplicationResponse">CreateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresponse"></a>
<a id="schema_CreateApplicationResponse"></a>
<a id="tocScreateapplicationresponse"></a>
<a id="tocscreateapplicationresponse"></a>

```json
{
  "ApplicationId": {},
  "Author": {},
  "CreationTime": {},
  "Description": {},
  "HomePageUrl": {},
  "IsVerifiedAuthor": {},
  "Labels": {},
  "LicenseUrl": {},
  "Name": {},
  "ReadmeUrl": {},
  "SpdxLicenseId": {},
  "VerifiedAuthorUrl": {},
  "Version": {
    "ApplicationId": {},
    "CreationTime": {},
    "ParameterDefinitions": {},
    "RequiredCapabilities": {},
    "ResourcesSupported": {},
    "SemanticVersion": {},
    "SourceCodeArchiveUrl": {},
    "SourceCodeUrl": {},
    "TemplateUrl": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|Author|object|false|none|none|
|CreationTime|object|false|none|none|
|Description|object|false|none|none|
|HomePageUrl|object|false|none|none|
|IsVerifiedAuthor|object|false|none|none|
|Labels|object|false|none|none|
|LicenseUrl|object|false|none|none|
|Name|object|false|none|none|
|ReadmeUrl|object|false|none|none|
|SpdxLicenseId|object|false|none|none|
|VerifiedAuthorUrl|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
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

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

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

<h2 id="tocS_CreateApplicationVersionResponse">CreateApplicationVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationversionresponse"></a>
<a id="schema_CreateApplicationVersionResponse"></a>
<a id="tocScreateapplicationversionresponse"></a>
<a id="tocscreateapplicationversionresponse"></a>

```json
{
  "ApplicationId": {},
  "CreationTime": {},
  "ParameterDefinitions": {},
  "RequiredCapabilities": {},
  "ResourcesSupported": {},
  "SemanticVersion": {},
  "SourceCodeArchiveUrl": {},
  "SourceCodeUrl": {},
  "TemplateUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|CreationTime|object|false|none|none|
|ParameterDefinitions|object|false|none|none|
|RequiredCapabilities|object|false|none|none|
|ResourcesSupported|object|false|none|none|
|SemanticVersion|object|false|none|none|
|SourceCodeArchiveUrl|object|false|none|none|
|SourceCodeUrl|object|false|none|none|
|TemplateUrl|object|false|none|none|

<h2 id="tocS_CreateCloudFormationChangeSetResponse">CreateCloudFormationChangeSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudformationchangesetresponse"></a>
<a id="schema_CreateCloudFormationChangeSetResponse"></a>
<a id="tocScreatecloudformationchangesetresponse"></a>
<a id="tocscreatecloudformationchangesetresponse"></a>

```json
{
  "ApplicationId": {},
  "ChangeSetId": {},
  "SemanticVersion": {},
  "StackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|ChangeSetId|object|false|none|none|
|SemanticVersion|object|false|none|none|
|StackId|object|false|none|none|

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Parameter value of the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS___listOfRollbackTrigger">__listOfRollbackTrigger</h2>
<!-- backwards compatibility -->
<a id="schema__listofrollbacktrigger"></a>
<a id="schema___listOfRollbackTrigger"></a>
<a id="tocS__listofrollbacktrigger"></a>
<a id="tocs__listofrollbacktrigger"></a>

```json
[
  {
    "Arn": {},
    "Type": {}
  }
]
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

This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>
 </i> Data Type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_CreateCloudFormationTemplateResponse">CreateCloudFormationTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudformationtemplateresponse"></a>
<a id="schema_CreateCloudFormationTemplateResponse"></a>
<a id="tocScreatecloudformationtemplateresponse"></a>
<a id="tocscreatecloudformationtemplateresponse"></a>

```json
{
  "ApplicationId": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "SemanticVersion": {},
  "Status": {},
  "TemplateId": {},
  "TemplateUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|CreationTime|object|false|none|none|
|ExpirationTime|object|false|none|none|
|SemanticVersion|object|false|none|none|
|Status|object|false|none|none|
|TemplateId|object|false|none|none|
|TemplateUrl|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetApplicationResponse">GetApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationresponse"></a>
<a id="schema_GetApplicationResponse"></a>
<a id="tocSgetapplicationresponse"></a>
<a id="tocsgetapplicationresponse"></a>

```json
{
  "ApplicationId": {},
  "Author": {},
  "CreationTime": {},
  "Description": {},
  "HomePageUrl": {},
  "IsVerifiedAuthor": {},
  "Labels": {},
  "LicenseUrl": {},
  "Name": {},
  "ReadmeUrl": {},
  "SpdxLicenseId": {},
  "VerifiedAuthorUrl": {},
  "Version": {
    "ApplicationId": {},
    "CreationTime": {},
    "ParameterDefinitions": {},
    "RequiredCapabilities": {},
    "ResourcesSupported": {},
    "SemanticVersion": {},
    "SourceCodeArchiveUrl": {},
    "SourceCodeUrl": {},
    "TemplateUrl": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|Author|object|false|none|none|
|CreationTime|object|false|none|none|
|Description|object|false|none|none|
|HomePageUrl|object|false|none|none|
|IsVerifiedAuthor|object|false|none|none|
|Labels|object|false|none|none|
|LicenseUrl|object|false|none|none|
|Name|object|false|none|none|
|ReadmeUrl|object|false|none|none|
|SpdxLicenseId|object|false|none|none|
|VerifiedAuthorUrl|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetApplicationPolicyResponse">GetApplicationPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationpolicyresponse"></a>
<a id="schema_GetApplicationPolicyResponse"></a>
<a id="tocSgetapplicationpolicyresponse"></a>
<a id="tocsgetapplicationpolicyresponse"></a>

```json
{
  "Statements": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statements|object|false|none|none|

<h2 id="tocS_GetCloudFormationTemplateResponse">GetCloudFormationTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudformationtemplateresponse"></a>
<a id="schema_GetCloudFormationTemplateResponse"></a>
<a id="tocSgetcloudformationtemplateresponse"></a>
<a id="tocsgetcloudformationtemplateresponse"></a>

```json
{
  "ApplicationId": {},
  "CreationTime": {},
  "ExpirationTime": {},
  "SemanticVersion": {},
  "Status": {},
  "TemplateId": {},
  "TemplateUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|CreationTime|object|false|none|none|
|ExpirationTime|object|false|none|none|
|SemanticVersion|object|false|none|none|
|Status|object|false|none|none|
|TemplateId|object|false|none|none|
|TemplateUrl|object|false|none|none|

<h2 id="tocS_ListApplicationDependenciesResponse">ListApplicationDependenciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationdependenciesresponse"></a>
<a id="schema_ListApplicationDependenciesResponse"></a>
<a id="tocSlistapplicationdependenciesresponse"></a>
<a id="tocslistapplicationdependenciesresponse"></a>

```json
{
  "Dependencies": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dependencies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationVersionsResponse">ListApplicationVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationversionsresponse"></a>
<a id="schema_ListApplicationVersionsResponse"></a>
<a id="tocSlistapplicationversionsresponse"></a>
<a id="tocslistapplicationversionsresponse"></a>

```json
{
  "NextToken": {},
  "Versions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Versions|object|false|none|none|

<h2 id="tocS_ListApplicationsResponse">ListApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsresponse"></a>
<a id="schema_ListApplicationsResponse"></a>
<a id="tocSlistapplicationsresponse"></a>
<a id="tocslistapplicationsresponse"></a>

```json
{
  "Applications": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Applications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutApplicationPolicyResponse">PutApplicationPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputapplicationpolicyresponse"></a>
<a id="schema_PutApplicationPolicyResponse"></a>
<a id="tocSputapplicationpolicyresponse"></a>
<a id="tocsputapplicationpolicyresponse"></a>

```json
{
  "Statements": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statements|object|false|none|none|

<h2 id="tocS_ApplicationPolicyStatement">ApplicationPolicyStatement</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationpolicystatement"></a>
<a id="schema_ApplicationPolicyStatement"></a>
<a id="tocSapplicationpolicystatement"></a>
<a id="tocsapplicationpolicystatement"></a>

```json
{
  "Actions": {},
  "PrincipalOrgIDs": {},
  "Principals": {},
  "StatementId": {}
}
```

Policy statement applied to the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Actions|object|true|none|none|
|PrincipalOrgIDs|object|false|none|none|
|Principals|object|true|none|none|
|StatementId|object|false|none|none|

<h2 id="tocS_UpdateApplicationResponse">UpdateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresponse"></a>
<a id="schema_UpdateApplicationResponse"></a>
<a id="tocSupdateapplicationresponse"></a>
<a id="tocsupdateapplicationresponse"></a>

```json
{
  "ApplicationId": {},
  "Author": {},
  "CreationTime": {},
  "Description": {},
  "HomePageUrl": {},
  "IsVerifiedAuthor": {},
  "Labels": {},
  "LicenseUrl": {},
  "Name": {},
  "ReadmeUrl": {},
  "SpdxLicenseId": {},
  "VerifiedAuthorUrl": {},
  "Version": {
    "ApplicationId": {},
    "CreationTime": {},
    "ParameterDefinitions": {},
    "RequiredCapabilities": {},
    "ResourcesSupported": {},
    "SemanticVersion": {},
    "SourceCodeArchiveUrl": {},
    "SourceCodeUrl": {},
    "TemplateUrl": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|Author|object|false|none|none|
|CreationTime|object|false|none|none|
|Description|object|false|none|none|
|HomePageUrl|object|false|none|none|
|IsVerifiedAuthor|object|false|none|none|
|Labels|object|false|none|none|
|LicenseUrl|object|false|none|none|
|Name|object|false|none|none|
|ReadmeUrl|object|false|none|none|
|SpdxLicenseId|object|false|none|none|
|VerifiedAuthorUrl|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_ApplicationDependencySummary">ApplicationDependencySummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdependencysummary"></a>
<a id="schema_ApplicationDependencySummary"></a>
<a id="tocSapplicationdependencysummary"></a>
<a id="tocsapplicationdependencysummary"></a>

```json
{
  "ApplicationId": {},
  "SemanticVersion": {}
}
```

A nested application summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|true|none|none|
|SemanticVersion|object|true|none|none|

<h2 id="tocS___listOf__string">__listOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__listof__string"></a>
<a id="schema___listOf__string"></a>
<a id="tocS__listof__string"></a>
<a id="tocs__listof__string"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApplicationSummary">ApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummary"></a>
<a id="schema_ApplicationSummary"></a>
<a id="tocSapplicationsummary"></a>
<a id="tocsapplicationsummary"></a>

```json
{
  "ApplicationId": {},
  "Author": {},
  "CreationTime": {},
  "Description": {},
  "HomePageUrl": {},
  "Labels": {},
  "Name": {},
  "SpdxLicenseId": {}
}
```

Summary of details about the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|true|none|none|
|Author|object|true|none|none|
|CreationTime|object|false|none|none|
|Description|object|true|none|none|
|HomePageUrl|object|false|none|none|
|Labels|object|false|none|none|
|Name|object|true|none|none|
|SpdxLicenseId|object|false|none|none|

<h2 id="tocS_Capability">Capability</h2>
<!-- backwards compatibility -->
<a id="schemacapability"></a>
<a id="schema_Capability"></a>
<a id="tocScapability"></a>
<a id="tocscapability"></a>

```json
"CAPABILITY_IAM"
```

Values that must be specified in order to deploy some applications.

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "Author": {},
  "Description": {},
  "HomePageUrl": {},
  "Labels": {},
  "LicenseBody": {},
  "LicenseUrl": {},
  "Name": {},
  "ReadmeBody": {},
  "ReadmeUrl": {},
  "SemanticVersion": {},
  "SourceCodeArchiveUrl": {},
  "SourceCodeUrl": {},
  "SpdxLicenseId": {},
  "TemplateBody": {},
  "TemplateUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|object|true|none|none|
|Description|object|true|none|none|
|HomePageUrl|object|false|none|none|
|Labels|object|false|none|none|
|LicenseBody|object|false|none|none|
|LicenseUrl|object|false|none|none|
|Name|object|true|none|none|
|ReadmeBody|object|false|none|none|
|ReadmeUrl|object|false|none|none|
|SemanticVersion|object|false|none|none|
|SourceCodeArchiveUrl|object|false|none|none|
|SourceCodeUrl|object|false|none|none|
|SpdxLicenseId|object|false|none|none|
|TemplateBody|object|false|none|none|
|TemplateUrl|object|false|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "ApplicationId": {},
  "CreationTime": {},
  "ParameterDefinitions": {},
  "RequiredCapabilities": {},
  "ResourcesSupported": {},
  "SemanticVersion": {},
  "SourceCodeArchiveUrl": {},
  "SourceCodeUrl": {},
  "TemplateUrl": {}
}
```

Application version details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|true|none|none|
|CreationTime|object|true|none|none|
|ParameterDefinitions|object|true|none|none|
|RequiredCapabilities|object|true|none|none|
|ResourcesSupported|object|true|none|none|
|SemanticVersion|object|true|none|none|
|SourceCodeArchiveUrl|object|false|none|none|
|SourceCodeUrl|object|false|none|none|
|TemplateUrl|object|true|none|none|

<h2 id="tocS_CreateApplicationVersionRequest">CreateApplicationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationversionrequest"></a>
<a id="schema_CreateApplicationVersionRequest"></a>
<a id="tocScreateapplicationversionrequest"></a>
<a id="tocscreateapplicationversionrequest"></a>

```json
{
  "SourceCodeArchiveUrl": {},
  "SourceCodeUrl": {},
  "TemplateBody": {},
  "TemplateUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceCodeArchiveUrl|object|false|none|none|
|SourceCodeUrl|object|false|none|none|
|TemplateBody|object|false|none|none|
|TemplateUrl|object|false|none|none|

<h2 id="tocS___listOfParameterDefinition">__listOfParameterDefinition</h2>
<!-- backwards compatibility -->
<a id="schema__listofparameterdefinition"></a>
<a id="schema___listOfParameterDefinition"></a>
<a id="tocS__listofparameterdefinition"></a>
<a id="tocs__listofparameterdefinition"></a>

```json
[
  {
    "AllowedPattern": {},
    "AllowedValues": {},
    "ConstraintDescription": {},
    "DefaultValue": {},
    "Description": {},
    "MaxLength": {},
    "MaxValue": {},
    "MinLength": {},
    "MinValue": {},
    "Name": {},
    "NoEcho": {},
    "ReferencedByResources": {},
    "Type": {}
  }
]
```

<h2 id="tocS___listOfCapability">__listOfCapability</h2>
<!-- backwards compatibility -->
<a id="schema__listofcapability"></a>
<a id="schema___listOfCapability"></a>
<a id="tocS__listofcapability"></a>
<a id="tocs__listofcapability"></a>

```json
[
  "CAPABILITY_IAM"
]
```

<h2 id="tocS___listOfParameterValue">__listOfParameterValue</h2>
<!-- backwards compatibility -->
<a id="schema__listofparametervalue"></a>
<a id="schema___listOfParameterValue"></a>
<a id="tocS__listofparametervalue"></a>
<a id="tocs__listofparametervalue"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
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
  "MonitoringTimeInMinutes": {},
  "RollbackTriggers": {}
}
```

This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
 </i> Data Type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoringTimeInMinutes|object|false|none|none|
|RollbackTriggers|object|false|none|none|

<h2 id="tocS___listOfTag">__listOfTag</h2>
<!-- backwards compatibility -->
<a id="schema__listoftag"></a>
<a id="schema___listOfTag"></a>
<a id="tocS__listoftag"></a>
<a id="tocs__listoftag"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CreateCloudFormationChangeSetRequest">CreateCloudFormationChangeSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudformationchangesetrequest"></a>
<a id="schema_CreateCloudFormationChangeSetRequest"></a>
<a id="tocScreatecloudformationchangesetrequest"></a>
<a id="tocscreatecloudformationchangesetrequest"></a>

```json
{
  "Capabilities": {},
  "ChangeSetName": {},
  "ClientToken": {},
  "Description": {},
  "NotificationArns": {},
  "ParameterOverrides": {},
  "ResourceTypes": {},
  "RollbackConfiguration": {
    "MonitoringTimeInMinutes": {},
    "RollbackTriggers": {}
  },
  "SemanticVersion": {},
  "StackName": {},
  "Tags": {},
  "TemplateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Capabilities|object|false|none|none|
|ChangeSetName|object|false|none|none|
|ClientToken|object|false|none|none|
|Description|object|false|none|none|
|NotificationArns|object|false|none|none|
|ParameterOverrides|object|false|none|none|
|ResourceTypes|object|false|none|none|
|RollbackConfiguration|object|false|none|none|
|SemanticVersion|object|false|none|none|
|StackName|object|true|none|none|
|Tags|object|false|none|none|
|TemplateId|object|false|none|none|

<h2 id="tocS_CreateCloudFormationTemplateRequest">CreateCloudFormationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudformationtemplaterequest"></a>
<a id="schema_CreateCloudFormationTemplateRequest"></a>
<a id="tocScreatecloudformationtemplaterequest"></a>
<a id="tocscreatecloudformationtemplaterequest"></a>

```json
{
  "SemanticVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SemanticVersion|object|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"PREPARING"
```

<h2 id="tocS_DeleteApplicationRequest">DeleteApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationrequest"></a>
<a id="schema_DeleteApplicationRequest"></a>
<a id="tocSdeleteapplicationrequest"></a>
<a id="tocsdeleteapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_GetApplicationPolicyRequest">GetApplicationPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationpolicyrequest"></a>
<a id="schema_GetApplicationPolicyRequest"></a>
<a id="tocSgetapplicationpolicyrequest"></a>
<a id="tocsgetapplicationpolicyrequest"></a>

```json
{}
```

<h2 id="tocS___listOfApplicationPolicyStatement">__listOfApplicationPolicyStatement</h2>
<!-- backwards compatibility -->
<a id="schema__listofapplicationpolicystatement"></a>
<a id="schema___listOfApplicationPolicyStatement"></a>
<a id="tocS__listofapplicationpolicystatement"></a>
<a id="tocs__listofapplicationpolicystatement"></a>

```json
[
  {
    "Actions": {},
    "PrincipalOrgIDs": {},
    "Principals": {},
    "StatementId": {}
  }
]
```

<h2 id="tocS_GetApplicationRequest">GetApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationrequest"></a>
<a id="schema_GetApplicationRequest"></a>
<a id="tocSgetapplicationrequest"></a>
<a id="tocsgetapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_GetCloudFormationTemplateRequest">GetCloudFormationTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudformationtemplaterequest"></a>
<a id="schema_GetCloudFormationTemplateRequest"></a>
<a id="tocSgetcloudformationtemplaterequest"></a>
<a id="tocsgetcloudformationtemplaterequest"></a>

```json
{}
```

<h2 id="tocS_MaxItems">MaxItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxitems"></a>
<a id="schema_MaxItems"></a>
<a id="tocSmaxitems"></a>
<a id="tocsmaxitems"></a>

```json
1
```

<h2 id="tocS_ListApplicationDependenciesRequest">ListApplicationDependenciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationdependenciesrequest"></a>
<a id="schema_ListApplicationDependenciesRequest"></a>
<a id="tocSlistapplicationdependenciesrequest"></a>
<a id="tocslistapplicationdependenciesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfApplicationDependencySummary">__listOfApplicationDependencySummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofapplicationdependencysummary"></a>
<a id="schema___listOfApplicationDependencySummary"></a>
<a id="tocS__listofapplicationdependencysummary"></a>
<a id="tocs__listofapplicationdependencysummary"></a>

```json
[
  {
    "ApplicationId": {},
    "SemanticVersion": {}
  }
]
```

<h2 id="tocS_ListApplicationVersionsRequest">ListApplicationVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationversionsrequest"></a>
<a id="schema_ListApplicationVersionsRequest"></a>
<a id="tocSlistapplicationversionsrequest"></a>
<a id="tocslistapplicationversionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfVersionSummary">__listOfVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofversionsummary"></a>
<a id="schema___listOfVersionSummary"></a>
<a id="tocS__listofversionsummary"></a>
<a id="tocs__listofversionsummary"></a>

```json
[
  {
    "ApplicationId": {},
    "CreationTime": {},
    "SemanticVersion": {},
    "SourceCodeUrl": {}
  }
]
```

<h2 id="tocS_ListApplicationsRequest">ListApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequest"></a>
<a id="schema_ListApplicationsRequest"></a>
<a id="tocSlistapplicationsrequest"></a>
<a id="tocslistapplicationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfApplicationSummary">__listOfApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofapplicationsummary"></a>
<a id="schema___listOfApplicationSummary"></a>
<a id="tocS__listofapplicationsummary"></a>
<a id="tocs__listofapplicationsummary"></a>

```json
[
  {
    "ApplicationId": {},
    "Author": {},
    "CreationTime": {},
    "Description": {},
    "HomePageUrl": {},
    "Labels": {},
    "Name": {},
    "SpdxLicenseId": {}
  }
]
```

<h2 id="tocS_ParameterDefinition">ParameterDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaparameterdefinition"></a>
<a id="schema_ParameterDefinition"></a>
<a id="tocSparameterdefinition"></a>
<a id="tocsparameterdefinition"></a>

```json
{
  "AllowedPattern": {},
  "AllowedValues": {},
  "ConstraintDescription": {},
  "DefaultValue": {},
  "Description": {},
  "MaxLength": {},
  "MaxValue": {},
  "MinLength": {},
  "MinValue": {},
  "Name": {},
  "NoEcho": {},
  "ReferencedByResources": {},
  "Type": {}
}
```

Parameters supported by the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedPattern|object|false|none|none|
|AllowedValues|object|false|none|none|
|ConstraintDescription|object|false|none|none|
|DefaultValue|object|false|none|none|
|Description|object|false|none|none|
|MaxLength|object|false|none|none|
|MaxValue|object|false|none|none|
|MinLength|object|false|none|none|
|MinValue|object|false|none|none|
|Name|object|true|none|none|
|NoEcho|object|false|none|none|
|ReferencedByResources|object|true|none|none|
|Type|object|false|none|none|

<h2 id="tocS_PutApplicationPolicyRequest">PutApplicationPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputapplicationpolicyrequest"></a>
<a id="schema_PutApplicationPolicyRequest"></a>
<a id="tocSputapplicationpolicyrequest"></a>
<a id="tocsputapplicationpolicyrequest"></a>

```json
{
  "Statements": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statements|object|true|none|none|

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

This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>
 </i> Data Type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_UnshareApplicationRequest">UnshareApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunshareapplicationrequest"></a>
<a id="schema_UnshareApplicationRequest"></a>
<a id="tocSunshareapplicationrequest"></a>
<a id="tocsunshareapplicationrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_UpdateApplicationRequest">UpdateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationrequest"></a>
<a id="schema_UpdateApplicationRequest"></a>
<a id="tocSupdateapplicationrequest"></a>
<a id="tocsupdateapplicationrequest"></a>

```json
{
  "Author": {},
  "Description": {},
  "HomePageUrl": {},
  "Labels": {},
  "ReadmeBody": {},
  "ReadmeUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|object|false|none|none|
|Description|object|false|none|none|
|HomePageUrl|object|false|none|none|
|Labels|object|false|none|none|
|ReadmeBody|object|false|none|none|
|ReadmeUrl|object|false|none|none|

<h2 id="tocS_VersionSummary">VersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaversionsummary"></a>
<a id="schema_VersionSummary"></a>
<a id="tocSversionsummary"></a>
<a id="tocsversionsummary"></a>

```json
{
  "ApplicationId": {},
  "CreationTime": {},
  "SemanticVersion": {},
  "SourceCodeUrl": {}
}
```

An application version summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|true|none|none|
|CreationTime|object|true|none|none|
|SemanticVersion|object|true|none|none|
|SourceCodeUrl|object|false|none|none|
