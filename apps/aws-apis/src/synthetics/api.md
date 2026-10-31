<h1 id="synthetics">Synthetics v2017-10-11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon CloudWatch Synthetics</fullname> <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage <i>canaries</i>, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor the Health of Your Applications</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Before you create and manage canaries, be aware of the security considerations. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>

Base URLs:

* <a href="http://synthetics.us-east-1.amazonaws.com">http://synthetics.us-east-1.amazonaws.com</a> - The Synthetics multi-region endpoint

* <a href="https://synthetics.us-east-1.amazonaws.com">https://synthetics.us-east-1.amazonaws.com</a> - The Synthetics multi-region endpoint

* <a href="http://synthetics.cn-north-1.amazonaws.com.cn">http://synthetics.cn-north-1.amazonaws.com.cn</a> - The Synthetics endpoint for China (Beijing) and China (Ningxia)

* <a href="https://synthetics.cn-north-1.amazonaws.com.cn">https://synthetics.cn-north-1.amazonaws.com.cn</a> - The Synthetics endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/synthetics/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="synthetics-default">Default</h1>

## AssociateResource

<a id="opIdAssociateResource"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/group/string/associate \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string"
  }'
```

`PATCH /group/{groupIdentifier}/associate`

<p>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>You must run this operation in the Region where the canary exists.</p>

> Body parameter

```json
{
  "ResourceArn": "string"
}
```

<h3 id="associateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupIdentifier|path|string|true|Specifies the group. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceArn|body|string|true|The ARN of the canary that you want to associate with the specified group.|

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

<h3 id="associateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateResourceResponse](#schemaassociateresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCanary

<a id="opIdCreateCanary"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canary \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Code": {
      "S3Bucket": {},
      "S3Key": {},
      "S3Version": {},
      "ZipFile": {},
      "Handler": {}
    },
    "ArtifactS3Location": "string",
    "ExecutionRoleArn": "string",
    "Schedule": {
      "Expression": {},
      "DurationInSeconds": {}
    },
    "RunConfig": {
      "TimeoutInSeconds": {},
      "MemoryInMB": {},
      "ActiveTracing": {},
      "EnvironmentVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "SuccessRetentionPeriodInDays": 1,
    "FailureRetentionPeriodInDays": 1,
    "RuntimeVersion": "string",
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ArtifactConfig": {
      "S3Encryption": {
        "EncryptionMode": {},
        "KmsKeyArn": {}
      }
    }
  }'
```

`POST /canary`

<p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>

> Body parameter

```json
{
  "Name": "string",
  "Code": {
    "S3Bucket": {},
    "S3Key": {},
    "S3Version": {},
    "ZipFile": {},
    "Handler": {}
  },
  "ArtifactS3Location": "string",
  "ExecutionRoleArn": "string",
  "Schedule": {
    "Expression": {},
    "DurationInSeconds": {}
  },
  "RunConfig": {
    "TimeoutInSeconds": {},
    "MemoryInMB": {},
    "ActiveTracing": {},
    "EnvironmentVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "SuccessRetentionPeriodInDays": 1,
  "FailureRetentionPeriodInDays": 1,
  "RuntimeVersion": "string",
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ArtifactConfig": {
    "S3Encryption": {
      "EncryptionMode": {},
      "KmsKeyArn": {}
    }
  }
}
```

<h3 id="createcanary-parameters">Parameters</h3>

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
|» Name|body|string|true|<p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>|
|» Code|body|object|true|Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. |
|» » S3Bucket|body|object|false|none|
|» » S3Key|body|object|false|none|
|» » S3Version|body|object|false|none|
|» » ZipFile|body|object|false|none|
|» » Handler|body|object|false|none|
|» ArtifactS3Location|body|string|true|The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).|
|» ExecutionRoleArn|body|string|true|<p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:PutLogEvents</code> </p> </li> </ul>|
|» Schedule|body|object|true|This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.|
|» » Expression|body|object|false|none|
|» » DurationInSeconds|body|object|false|none|
|» RunConfig|body|object|false|A structure that contains input information for a canary run.|
|» » TimeoutInSeconds|body|object|false|none|
|» » MemoryInMB|body|object|false|none|
|» » ActiveTracing|body|object|false|none|
|» » EnvironmentVariables|body|object|false|none|
|» » » **additionalProperties**|body|[EnvironmentVariableValue](#schemaenvironmentvariablevalue)|false|none|
|» SuccessRetentionPeriodInDays|body|integer|false|The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.|
|» FailureRetentionPeriodInDays|body|integer|false|The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.|
|» RuntimeVersion|body|string|true|Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.|
|» VpcConfig|body|object|false|If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|<p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» ArtifactConfig|body|object|false|A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.|
|» » S3Encryption|body|object|false|none|
|» » » EncryptionMode|body|object|false|none|
|» » » KmsKeyArn|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Canary": {
    "Id": {},
    "Name": {},
    "Code": {
      "SourceLocationArn": {},
      "Handler": {}
    },
    "ExecutionRoleArn": {},
    "Schedule": {
      "Expression": {},
      "DurationInSeconds": {}
    },
    "RunConfig": {
      "TimeoutInSeconds": {},
      "MemoryInMB": {},
      "ActiveTracing": {}
    },
    "SuccessRetentionPeriodInDays": {},
    "FailureRetentionPeriodInDays": {},
    "Status": {
      "State": {},
      "StateReason": {},
      "StateReasonCode": {}
    },
    "Timeline": {
      "Created": {},
      "LastModified": {},
      "LastStarted": {},
      "LastStopped": {}
    },
    "ArtifactS3Location": {},
    "EngineArn": {},
    "RuntimeVersion": {},
    "VpcConfig": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "VisualReference": {
      "BaseScreenshots": {},
      "BaseCanaryRunId": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ArtifactConfig": {
      "S3Encryption": {
        "EncryptionMode": {},
        "KmsKeyArn": {}
      }
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

<h3 id="createcanary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCanaryResponse](#schemacreatecanaryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|RequestEntityTooLargeException|[RequestEntityTooLargeException](#schemarequestentitytoolargeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroup

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /group`

<p>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.</p> <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p> <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</p>

> Body parameter

```json
{
  "Name": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
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
|» Name|body|string|true|<p>The name for the group. It can include any Unicode characters.</p> <p>The names for all groups in your account, across all Regions, must be unique.</p>|
|» Tags|body|object|false|<p>A list of key-value pairs to associate with the group. You can associate as many as 50 tags with a group.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "Group": {
    "Id": {},
    "Name": {},
    "Arn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "CreatedTime": {},
    "LastModifiedTime": {}
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

<h3 id="creategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupResponse](#schemacreategroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCanary

<a id="opIdGetCanary"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /canary/{name}`

Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.

<h3 id="getcanary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the canary that you want details for.|
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
  "Canary": {
    "Id": {},
    "Name": {},
    "Code": {
      "SourceLocationArn": {},
      "Handler": {}
    },
    "ExecutionRoleArn": {},
    "Schedule": {
      "Expression": {},
      "DurationInSeconds": {}
    },
    "RunConfig": {
      "TimeoutInSeconds": {},
      "MemoryInMB": {},
      "ActiveTracing": {}
    },
    "SuccessRetentionPeriodInDays": {},
    "FailureRetentionPeriodInDays": {},
    "Status": {
      "State": {},
      "StateReason": {},
      "StateReasonCode": {}
    },
    "Timeline": {
      "Created": {},
      "LastModified": {},
      "LastStarted": {},
      "LastStopped": {}
    },
    "ArtifactS3Location": {},
    "EngineArn": {},
    "RuntimeVersion": {},
    "VpcConfig": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "VisualReference": {
      "BaseScreenshots": {},
      "BaseCanaryRunId": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ArtifactConfig": {
      "S3Encryption": {
        "EncryptionMode": {},
        "KmsKeyArn": {}
      }
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

<h3 id="getcanary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCanaryResponse](#schemagetcanaryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCanary

<a id="opIdDeleteCanary"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canary/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /canary/{name}`

<p>Permanently deletes the specified canary.</p> <p>If you specify <code>DeleteLambda</code> to <code>true</code>, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.</p> <p>Other resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>

<h3 id="deletecanary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.|
|deleteLambda|query|boolean|false|<p>Specifies whether to also delete the Lambda functions and layers used by this canary. The default is false.</p> <p>Type: Boolean</p>|
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

<h3 id="deletecanary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCanaryResponse](#schemadeletecanaryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCanary

<a id="opIdUpdateCanary"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canary/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Code": {
      "S3Bucket": {},
      "S3Key": {},
      "S3Version": {},
      "ZipFile": {},
      "Handler": {}
    },
    "ExecutionRoleArn": "string",
    "RuntimeVersion": "string",
    "Schedule": {
      "Expression": {},
      "DurationInSeconds": {}
    },
    "RunConfig": {
      "TimeoutInSeconds": {},
      "MemoryInMB": {},
      "ActiveTracing": {},
      "EnvironmentVariables": {
        "property1": "string",
        "property2": "string"
      }
    },
    "SuccessRetentionPeriodInDays": 1,
    "FailureRetentionPeriodInDays": 1,
    "VpcConfig": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "VisualReference": {
      "BaseScreenshots": {},
      "BaseCanaryRunId": {}
    },
    "ArtifactS3Location": "string",
    "ArtifactConfig": {
      "S3Encryption": {
        "EncryptionMode": {},
        "KmsKeyArn": {}
      }
    }
  }'
```

`PATCH /canary/{name}`

<p>Updates the configuration of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

> Body parameter

```json
{
  "Code": {
    "S3Bucket": {},
    "S3Key": {},
    "S3Version": {},
    "ZipFile": {},
    "Handler": {}
  },
  "ExecutionRoleArn": "string",
  "RuntimeVersion": "string",
  "Schedule": {
    "Expression": {},
    "DurationInSeconds": {}
  },
  "RunConfig": {
    "TimeoutInSeconds": {},
    "MemoryInMB": {},
    "ActiveTracing": {},
    "EnvironmentVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "SuccessRetentionPeriodInDays": 1,
  "FailureRetentionPeriodInDays": 1,
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "VisualReference": {
    "BaseScreenshots": {},
    "BaseCanaryRunId": {}
  },
  "ArtifactS3Location": "string",
  "ArtifactConfig": {
    "S3Encryption": {
      "EncryptionMode": {},
      "KmsKeyArn": {}
    }
  }
}
```

<h3 id="updatecanary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|<p>The name of the canary that you want to update. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p> <p>You cannot change the name of a canary that has already been created.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Code|body|object|false|Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. |
|» » S3Bucket|body|object|false|none|
|» » S3Key|body|object|false|none|
|» » S3Version|body|object|false|none|
|» » ZipFile|body|object|false|none|
|» » Handler|body|object|false|none|
|» ExecutionRoleArn|body|string|false|<p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>|
|» RuntimeVersion|body|string|false|Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.|
|» Schedule|body|object|false|This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.|
|» » Expression|body|object|false|none|
|» » DurationInSeconds|body|object|false|none|
|» RunConfig|body|object|false|A structure that contains input information for a canary run.|
|» » TimeoutInSeconds|body|object|false|none|
|» » MemoryInMB|body|object|false|none|
|» » ActiveTracing|body|object|false|none|
|» » EnvironmentVariables|body|object|false|none|
|» » » **additionalProperties**|body|[EnvironmentVariableValue](#schemaenvironmentvariablevalue)|false|none|
|» SuccessRetentionPeriodInDays|body|integer|false|The number of days to retain data about successful runs of this canary.|
|» FailureRetentionPeriodInDays|body|integer|false|The number of days to retain data about failed runs of this canary.|
|» VpcConfig|body|object|false|If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» VisualReference|body|object|false|<p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>|
|» » BaseScreenshots|body|object|false|none|
|» » BaseCanaryRunId|body|object|false|none|
|» ArtifactS3Location|body|string|false|The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).|
|» ArtifactConfig|body|object|false|A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.|
|» » S3Encryption|body|object|false|none|
|» » » EncryptionMode|body|object|false|none|
|» » » KmsKeyArn|body|object|false|none|

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

<h3 id="updatecanary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCanaryResponse](#schemaupdatecanaryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|RequestEntityTooLargeException|[RequestEntityTooLargeException](#schemarequestentitytoolargeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroup

<a id="opIdGetGroup"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/group/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /group/{groupIdentifier}`

Returns information about one group. Groups are a global resource, so you can use this operation from any Region.

<h3 id="getgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupIdentifier|path|string|true|Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.|
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
  "Group": {
    "Id": {},
    "Name": {},
    "Arn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "CreatedTime": {},
    "LastModifiedTime": {}
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

<h3 id="getgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupResponse](#schemagetgroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroup

<a id="opIdDeleteGroup"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/group/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /group/{groupIdentifier}`

<p>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. </p> <p>Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</p>

<h3 id="deletegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupIdentifier|path|string|true|Specifies which group to delete. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.|
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

<h3 id="deletegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGroupResponse](#schemadeletegroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCanaries

<a id="opIdDescribeCanaries"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1,
    "Names": [
      "string"
    ]
  }'
```

`POST /canaries`

<p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "Names": [
    "string"
  ]
}
```

<h3 id="describecanaries-parameters">Parameters</h3>

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
|» NextToken|body|string|false|A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.|
|» MaxResults|body|integer|false|Specify this parameter to limit how many canaries are returned each time you use the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.|
|» Names|body|[[CanaryName](#schemacanaryname)]|false|<p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use this parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>|

> Example responses

> 200 Response

```json
{
  "Canaries": {},
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

<h3 id="describecanaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCanariesResponse](#schemadescribecanariesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCanariesLastRun

<a id="opIdDescribeCanariesLastRun"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canaries/last-run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1,
    "Names": [
      "string"
    ]
  }'
```

`POST /canaries/last-run`

<p>Use this operation to see information from the most recent run of each canary that you have created.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "Names": [
    "string"
  ]
}
```

<h3 id="describecanarieslastrun-parameters">Parameters</h3>

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
|» NextToken|body|string|false|A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next set of results.|
|» MaxResults|body|integer|false|Specify this parameter to limit how many runs are returned each time you use the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.|
|» Names|body|[[CanaryName](#schemacanaryname)]|false|<p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>|

> Example responses

> 200 Response

```json
{
  "CanariesLastRun": {},
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

<h3 id="describecanarieslastrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCanariesLastRunResponse](#schemadescribecanarieslastrunresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRuntimeVersions

<a id="opIdDescribeRuntimeVersions"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/runtime-versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /runtime-versions`

Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="describeruntimeversions-parameters">Parameters</h3>

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
|» NextToken|body|string|false|A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.|
|» MaxResults|body|integer|false|Specify this parameter to limit how many runs are returned each time you use the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.|

> Example responses

> 200 Response

```json
{
  "RuntimeVersions": {},
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

<h3 id="describeruntimeversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRuntimeVersionsResponse](#schemadescriberuntimeversionsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateResource

<a id="opIdDisassociateResource"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/group/string/disassociate \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string"
  }'
```

`PATCH /group/{groupIdentifier}/disassociate`

Removes a canary from a group. You must run this operation in the Region where the canary exists.

> Body parameter

```json
{
  "ResourceArn": "string"
}
```

<h3 id="disassociateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupIdentifier|path|string|true|Specifies the group. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceArn|body|string|true|The ARN of the canary that you want to remove from the specified group.|

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

<h3 id="disassociateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateResourceResponse](#schemadisassociateresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCanaryRuns

<a id="opIdGetCanaryRuns"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canary/string/runs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /canary/{name}/runs`

Retrieves a list of runs for a specified canary.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="getcanaryruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the canary that you want to see runs for.|
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
|» NextToken|body|string|false|A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.|
|» MaxResults|body|integer|false|Specify this parameter to limit how many runs are returned each time you use the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.|

> Example responses

> 200 Response

```json
{
  "CanaryRuns": {},
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

<h3 id="getcanaryruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCanaryRunsResponse](#schemagetcanaryrunsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociatedGroups

<a id="opIdListAssociatedGroups"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/resource/string/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /resource/{resourceArn}/groups`

Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listassociatedgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the canary that you want to view groups for.|
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
|» NextToken|body|string|false|A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.|
|» MaxResults|body|integer|false|Specify this parameter to limit how many groups are returned each time you use the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.|

> Example responses

> 200 Response

```json
{
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

<h3 id="listassociatedgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociatedGroupsResponse](#schemalistassociatedgroupsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupResources

<a id="opIdListGroupResources"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/group/string/resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /group/{groupIdentifier}/resources`

This operation returns a list of the ARNs of the canaries that are associated with the specified group.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listgroupresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupIdentifier|path|string|true|Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.|
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
|» NextToken|body|string|false|A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.|
|» MaxResults|body|integer|false|Specify this parameter to limit how many canary ARNs are returned each time you use the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.|

> Example responses

> 200 Response

```json
{
  "Resources": {},
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

<h3 id="listgroupresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupResourcesResponse](#schemalistgroupresourcesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroups

<a id="opIdListGroups"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /groups`

Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listgroups-parameters">Parameters</h3>

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
|» NextToken|body|string|false|A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.|
|» MaxResults|body|integer|false|Specify this parameter to limit how many groups are returned each time you use the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.|

> Example responses

> 200 Response

```json
{
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

<h3 id="listgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupsResponse](#schemalistgroupsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Displays the tags associated with a canary or group.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|<p>The ARN of the canary or group that you want to view tags for.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/tags/string \
  -X POST \
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

`POST /tags/{resourceArn}`

<p>Assigns one or more tags (key-value pairs) to the specified canary or group. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary or group.</p>

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|<p>The ARN of the canary or group that you're adding tags to.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The list of key-value pairs to associate with the resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartCanary

<a id="opIdStartCanary"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canary/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /canary/{name}/start`

Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.

<h3 id="startcanary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the canary that you want to run. To find canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.|
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

<h3 id="startcanary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartCanaryResponse](#schemastartcanaryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopCanary

<a id="opIdStopCanary"></a>

> Code samples

```bash
curl https://synthetics.us-east-1.amazonaws.com/canary/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /canary/{name}/stop`

<p>Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>

<h3 id="stopcanary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the canary that you want to stop. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">ListCanaries</a>.|
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

<h3 id="stopcanary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopCanaryResponse](#schemastopcanaryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://synthetics.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes one or more tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|<p>The ARN of the canary or group that you're removing tags from.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The list of tag keys to remove from the resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateResourceResponse">AssociateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourceresponse"></a>
<a id="schema_AssociateResourceResponse"></a>
<a id="tocSassociateresourceresponse"></a>
<a id="tocsassociateresourceresponse"></a>

```json
{}
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateCanaryResponse">CreateCanaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecanaryresponse"></a>
<a id="schema_CreateCanaryResponse"></a>
<a id="tocScreatecanaryresponse"></a>
<a id="tocscreatecanaryresponse"></a>

```json
{
  "Canary": {
    "Id": {},
    "Name": {},
    "Code": {
      "SourceLocationArn": {},
      "Handler": {}
    },
    "ExecutionRoleArn": {},
    "Schedule": {
      "Expression": {},
      "DurationInSeconds": {}
    },
    "RunConfig": {
      "TimeoutInSeconds": {},
      "MemoryInMB": {},
      "ActiveTracing": {}
    },
    "SuccessRetentionPeriodInDays": {},
    "FailureRetentionPeriodInDays": {},
    "Status": {
      "State": {},
      "StateReason": {},
      "StateReasonCode": {}
    },
    "Timeline": {
      "Created": {},
      "LastModified": {},
      "LastStarted": {},
      "LastStopped": {}
    },
    "ArtifactS3Location": {},
    "EngineArn": {},
    "RuntimeVersion": {},
    "VpcConfig": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "VisualReference": {
      "BaseScreenshots": {},
      "BaseCanaryRunId": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ArtifactConfig": {
      "S3Encryption": {
        "EncryptionMode": {},
        "KmsKeyArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Canary|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_CodeHandler">CodeHandler</h2>
<!-- backwards compatibility -->
<a id="schemacodehandler"></a>
<a id="schema_CodeHandler"></a>
<a id="tocScodehandler"></a>
<a id="tocscodehandler"></a>

```json
"string"
```

<h2 id="tocS_MaxOneYearInSeconds">MaxOneYearInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaxoneyearinseconds"></a>
<a id="schema_MaxOneYearInSeconds"></a>
<a id="tocSmaxoneyearinseconds"></a>
<a id="tocsmaxoneyearinseconds"></a>

```json
0
```

<h2 id="tocS_MaxFifteenMinutesInSeconds">MaxFifteenMinutesInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaxfifteenminutesinseconds"></a>
<a id="schema_MaxFifteenMinutesInSeconds"></a>
<a id="tocSmaxfifteenminutesinseconds"></a>
<a id="tocsmaxfifteenminutesinseconds"></a>

```json
3
```

<h2 id="tocS_MaxSize3008">MaxSize3008</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize3008"></a>
<a id="schema_MaxSize3008"></a>
<a id="tocSmaxsize3008"></a>
<a id="tocsmaxsize3008"></a>

```json
960
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

<h2 id="tocS_EnvironmentVariablesMap">EnvironmentVariablesMap</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablesmap"></a>
<a id="schema_EnvironmentVariablesMap"></a>
<a id="tocSenvironmentvariablesmap"></a>
<a id="tocsenvironmentvariablesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[EnvironmentVariableValue](#schemaenvironmentvariablevalue)|false|none|none|

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

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
]
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

<h2 id="tocS_S3EncryptionConfig">S3EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3encryptionconfig"></a>
<a id="schema_S3EncryptionConfig"></a>
<a id="tocSs3encryptionconfig"></a>
<a id="tocss3encryptionconfig"></a>

```json
{
  "EncryptionMode": {},
  "KmsKeyArn": {}
}
```

<p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary uploads to Amazon S3. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionMode|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_RequestEntityTooLargeException">RequestEntityTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemarequestentitytoolargeexception"></a>
<a id="schema_RequestEntityTooLargeException"></a>
<a id="tocSrequestentitytoolargeexception"></a>
<a id="tocsrequestentitytoolargeexception"></a>

```json
null
```

<h2 id="tocS_CreateGroupResponse">CreateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupresponse"></a>
<a id="schema_CreateGroupResponse"></a>
<a id="tocScreategroupresponse"></a>
<a id="tocscreategroupresponse"></a>

```json
{
  "Group": {
    "Id": {},
    "Name": {},
    "Arn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_DeleteCanaryResponse">DeleteCanaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecanaryresponse"></a>
<a id="schema_DeleteCanaryResponse"></a>
<a id="tocSdeletecanaryresponse"></a>
<a id="tocsdeletecanaryresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteGroupResponse">DeleteGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupresponse"></a>
<a id="schema_DeleteGroupResponse"></a>
<a id="tocSdeletegroupresponse"></a>
<a id="tocsdeletegroupresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeCanariesResponse">DescribeCanariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecanariesresponse"></a>
<a id="schema_DescribeCanariesResponse"></a>
<a id="tocSdescribecanariesresponse"></a>
<a id="tocsdescribecanariesresponse"></a>

```json
{
  "Canaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Canaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_CanaryName">CanaryName</h2>
<!-- backwards compatibility -->
<a id="schemacanaryname"></a>
<a id="schema_CanaryName"></a>
<a id="tocScanaryname"></a>
<a id="tocscanaryname"></a>

```json
"string"
```

<h2 id="tocS_DescribeCanariesLastRunResponse">DescribeCanariesLastRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecanarieslastrunresponse"></a>
<a id="schema_DescribeCanariesLastRunResponse"></a>
<a id="tocSdescribecanarieslastrunresponse"></a>
<a id="tocsdescribecanarieslastrunresponse"></a>

```json
{
  "CanariesLastRun": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CanariesLastRun|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRuntimeVersionsResponse">DescribeRuntimeVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberuntimeversionsresponse"></a>
<a id="schema_DescribeRuntimeVersionsResponse"></a>
<a id="tocSdescriberuntimeversionsresponse"></a>
<a id="tocsdescriberuntimeversionsresponse"></a>

```json
{
  "RuntimeVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuntimeVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DisassociateResourceResponse">DisassociateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourceresponse"></a>
<a id="schema_DisassociateResourceResponse"></a>
<a id="tocSdisassociateresourceresponse"></a>
<a id="tocsdisassociateresourceresponse"></a>

```json
{}
```

<h2 id="tocS_GetCanaryResponse">GetCanaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcanaryresponse"></a>
<a id="schema_GetCanaryResponse"></a>
<a id="tocSgetcanaryresponse"></a>
<a id="tocsgetcanaryresponse"></a>

```json
{
  "Canary": {
    "Id": {},
    "Name": {},
    "Code": {
      "SourceLocationArn": {},
      "Handler": {}
    },
    "ExecutionRoleArn": {},
    "Schedule": {
      "Expression": {},
      "DurationInSeconds": {}
    },
    "RunConfig": {
      "TimeoutInSeconds": {},
      "MemoryInMB": {},
      "ActiveTracing": {}
    },
    "SuccessRetentionPeriodInDays": {},
    "FailureRetentionPeriodInDays": {},
    "Status": {
      "State": {},
      "StateReason": {},
      "StateReasonCode": {}
    },
    "Timeline": {
      "Created": {},
      "LastModified": {},
      "LastStarted": {},
      "LastStopped": {}
    },
    "ArtifactS3Location": {},
    "EngineArn": {},
    "RuntimeVersion": {},
    "VpcConfig": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "VisualReference": {
      "BaseScreenshots": {},
      "BaseCanaryRunId": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ArtifactConfig": {
      "S3Encryption": {
        "EncryptionMode": {},
        "KmsKeyArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Canary|object|false|none|none|

<h2 id="tocS_GetCanaryRunsResponse">GetCanaryRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcanaryrunsresponse"></a>
<a id="schema_GetCanaryRunsResponse"></a>
<a id="tocSgetcanaryrunsresponse"></a>
<a id="tocsgetcanaryrunsresponse"></a>

```json
{
  "CanaryRuns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CanaryRuns|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetGroupResponse">GetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupresponse"></a>
<a id="schema_GetGroupResponse"></a>
<a id="tocSgetgroupresponse"></a>
<a id="tocsgetgroupresponse"></a>

```json
{
  "Group": {
    "Id": {},
    "Name": {},
    "Arn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_ListAssociatedGroupsResponse">ListAssociatedGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedgroupsresponse"></a>
<a id="schema_ListAssociatedGroupsResponse"></a>
<a id="tocSlistassociatedgroupsresponse"></a>
<a id="tocslistassociatedgroupsresponse"></a>

```json
{
  "Groups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Groups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupResourcesResponse">ListGroupResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupresourcesresponse"></a>
<a id="schema_ListGroupResourcesResponse"></a>
<a id="tocSlistgroupresourcesresponse"></a>
<a id="tocslistgroupresourcesresponse"></a>

```json
{
  "Resources": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupsResponse">ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsresponse"></a>
<a id="schema_ListGroupsResponse"></a>
<a id="tocSlistgroupsresponse"></a>
<a id="tocslistgroupsresponse"></a>

```json
{
  "Groups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Groups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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
|Tags|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

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

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

```json
null
```

<h2 id="tocS_StartCanaryResponse">StartCanaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcanaryresponse"></a>
<a id="schema_StartCanaryResponse"></a>
<a id="tocSstartcanaryresponse"></a>
<a id="tocsstartcanaryresponse"></a>

```json
{}
```

<h2 id="tocS_StopCanaryResponse">StopCanaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopcanaryresponse"></a>
<a id="schema_StopCanaryResponse"></a>
<a id="tocSstopcanaryresponse"></a>
<a id="tocsstopcanaryresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
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

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateCanaryResponse">UpdateCanaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecanaryresponse"></a>
<a id="schema_UpdateCanaryResponse"></a>
<a id="tocSupdatecanaryresponse"></a>
<a id="tocsupdatecanaryresponse"></a>

```json
{}
```

<h2 id="tocS_BaseScreenshots">BaseScreenshots</h2>
<!-- backwards compatibility -->
<a id="schemabasescreenshots"></a>
<a id="schema_BaseScreenshots"></a>
<a id="tocSbasescreenshots"></a>
<a id="tocsbasescreenshots"></a>

```json
[
  {
    "ScreenshotName": {},
    "IgnoreCoordinates": {}
  }
]
```

<h2 id="tocS_ArtifactConfigInput">ArtifactConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemaartifactconfiginput"></a>
<a id="schema_ArtifactConfigInput"></a>
<a id="tocSartifactconfiginput"></a>
<a id="tocsartifactconfiginput"></a>

```json
{
  "S3Encryption": {
    "EncryptionMode": {},
    "KmsKeyArn": {}
  }
}
```

A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Encryption|object|false|none|none|

<h2 id="tocS_ArtifactConfigOutput">ArtifactConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemaartifactconfigoutput"></a>
<a id="schema_ArtifactConfigOutput"></a>
<a id="tocSartifactconfigoutput"></a>
<a id="tocsartifactconfigoutput"></a>

```json
{
  "S3Encryption": {
    "EncryptionMode": {},
    "KmsKeyArn": {}
  }
}
```

A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Encryption|object|false|none|none|

<h2 id="tocS_GroupIdentifier">GroupIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemagroupidentifier"></a>
<a id="schema_GroupIdentifier"></a>
<a id="tocSgroupidentifier"></a>
<a id="tocsgroupidentifier"></a>

```json
"string"
```

<h2 id="tocS_CanaryArn">CanaryArn</h2>
<!-- backwards compatibility -->
<a id="schemacanaryarn"></a>
<a id="schema_CanaryArn"></a>
<a id="tocScanaryarn"></a>
<a id="tocscanaryarn"></a>

```json
"string"
```

<h2 id="tocS_AssociateResourceRequest">AssociateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourcerequest"></a>
<a id="schema_AssociateResourceRequest"></a>
<a id="tocSassociateresourcerequest"></a>
<a id="tocsassociateresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_BaseScreenshotIgnoreCoordinates">BaseScreenshotIgnoreCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemabasescreenshotignorecoordinates"></a>
<a id="schema_BaseScreenshotIgnoreCoordinates"></a>
<a id="tocSbasescreenshotignorecoordinates"></a>
<a id="tocsbasescreenshotignorecoordinates"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BaseScreenshot">BaseScreenshot</h2>
<!-- backwards compatibility -->
<a id="schemabasescreenshot"></a>
<a id="schema_BaseScreenshot"></a>
<a id="tocSbasescreenshot"></a>
<a id="tocsbasescreenshot"></a>

```json
{
  "ScreenshotName": {},
  "IgnoreCoordinates": {}
}
```

A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScreenshotName|object|true|none|none|
|IgnoreCoordinates|object|false|none|none|

<h2 id="tocS_BaseScreenshotConfigIgnoreCoordinate">BaseScreenshotConfigIgnoreCoordinate</h2>
<!-- backwards compatibility -->
<a id="schemabasescreenshotconfigignorecoordinate"></a>
<a id="schema_BaseScreenshotConfigIgnoreCoordinate"></a>
<a id="tocSbasescreenshotconfigignorecoordinate"></a>
<a id="tocsbasescreenshotconfigignorecoordinate"></a>

```json
"string"
```

<h2 id="tocS_Canary">Canary</h2>
<!-- backwards compatibility -->
<a id="schemacanary"></a>
<a id="schema_Canary"></a>
<a id="tocScanary"></a>
<a id="tocscanary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Code": {
    "SourceLocationArn": {},
    "Handler": {}
  },
  "ExecutionRoleArn": {},
  "Schedule": {
    "Expression": {},
    "DurationInSeconds": {}
  },
  "RunConfig": {
    "TimeoutInSeconds": {},
    "MemoryInMB": {},
    "ActiveTracing": {}
  },
  "SuccessRetentionPeriodInDays": {},
  "FailureRetentionPeriodInDays": {},
  "Status": {
    "State": {},
    "StateReason": {},
    "StateReasonCode": {}
  },
  "Timeline": {
    "Created": {},
    "LastModified": {},
    "LastStarted": {},
    "LastStopped": {}
  },
  "ArtifactS3Location": {},
  "EngineArn": {},
  "RuntimeVersion": {},
  "VpcConfig": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "VisualReference": {
    "BaseScreenshots": {},
    "BaseCanaryRunId": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ArtifactConfig": {
    "S3Encryption": {
      "EncryptionMode": {},
      "KmsKeyArn": {}
    }
  }
}
```

This structure contains all information about one canary in your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Code|[CanaryCodeOutput](#schemacanarycodeoutput)|false|none|This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.|
|ExecutionRoleArn|object|false|none|none|
|Schedule|object|false|none|none|
|RunConfig|[CanaryRunConfigOutput](#schemacanaryrunconfigoutput)|false|none|A structure that contains information about a canary run.|
|SuccessRetentionPeriodInDays|object|false|none|none|
|FailureRetentionPeriodInDays|object|false|none|none|
|Status|object|false|none|none|
|Timeline|object|false|none|none|
|ArtifactS3Location|object|false|none|none|
|EngineArn|object|false|none|none|
|RuntimeVersion|object|false|none|none|
|VpcConfig|[VpcConfigOutput](#schemavpcconfigoutput)|false|none|If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.|
|VisualReference|object|false|none|none|
|Tags|object|false|none|none|
|ArtifactConfig|object|false|none|none|

<h2 id="tocS_Canaries">Canaries</h2>
<!-- backwards compatibility -->
<a id="schemacanaries"></a>
<a id="schema_Canaries"></a>
<a id="tocScanaries"></a>
<a id="tocscanaries"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Code": {
      "SourceLocationArn": {},
      "Handler": {}
    },
    "ExecutionRoleArn": {},
    "Schedule": {
      "Expression": {},
      "DurationInSeconds": {}
    },
    "RunConfig": {
      "TimeoutInSeconds": {},
      "MemoryInMB": {},
      "ActiveTracing": {}
    },
    "SuccessRetentionPeriodInDays": {},
    "FailureRetentionPeriodInDays": {},
    "Status": {
      "State": {},
      "StateReason": {},
      "StateReasonCode": {}
    },
    "Timeline": {
      "Created": {},
      "LastModified": {},
      "LastStarted": {},
      "LastStopped": {}
    },
    "ArtifactS3Location": {},
    "EngineArn": {},
    "RuntimeVersion": {},
    "VpcConfig": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "VisualReference": {
      "BaseScreenshots": {},
      "BaseCanaryRunId": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ArtifactConfig": {
      "S3Encryption": {
        "EncryptionMode": {},
        "KmsKeyArn": {}
      }
    }
  }
]
```

<h2 id="tocS_CanaryLastRun">CanaryLastRun</h2>
<!-- backwards compatibility -->
<a id="schemacanarylastrun"></a>
<a id="schema_CanaryLastRun"></a>
<a id="tocScanarylastrun"></a>
<a id="tocscanarylastrun"></a>

```json
{
  "CanaryName": {},
  "LastRun": {
    "Id": {},
    "Name": {},
    "Status": {
      "State": {},
      "StateReason": {},
      "StateReasonCode": {}
    },
    "Timeline": {
      "Started": {},
      "Completed": {}
    },
    "ArtifactS3Location": {}
  }
}
```

This structure contains information about the most recent run of a single canary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CanaryName|object|false|none|none|
|LastRun|object|false|none|none|

<h2 id="tocS_CanariesLastRun">CanariesLastRun</h2>
<!-- backwards compatibility -->
<a id="schemacanarieslastrun"></a>
<a id="schema_CanariesLastRun"></a>
<a id="tocScanarieslastrun"></a>
<a id="tocscanarieslastrun"></a>

```json
[
  {
    "CanaryName": {},
    "LastRun": {
      "Id": {},
      "Name": {},
      "Status": {
        "State": {},
        "StateReason": {},
        "StateReasonCode": {}
      },
      "Timeline": {
        "Started": {},
        "Completed": {}
      },
      "ArtifactS3Location": {}
    }
  }
]
```

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_CanaryCodeOutput">CanaryCodeOutput</h2>
<!-- backwards compatibility -->
<a id="schemacanarycodeoutput"></a>
<a id="schema_CanaryCodeOutput"></a>
<a id="tocScanarycodeoutput"></a>
<a id="tocscanarycodeoutput"></a>

```json
{
  "SourceLocationArn": {},
  "Handler": {}
}
```

This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceLocationArn|object|false|none|none|
|Handler|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_CanaryScheduleOutput">CanaryScheduleOutput</h2>
<!-- backwards compatibility -->
<a id="schemacanaryscheduleoutput"></a>
<a id="schema_CanaryScheduleOutput"></a>
<a id="tocScanaryscheduleoutput"></a>
<a id="tocscanaryscheduleoutput"></a>

```json
{
  "Expression": {},
  "DurationInSeconds": {}
}
```

How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|false|none|none|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_CanaryRunConfigOutput">CanaryRunConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemacanaryrunconfigoutput"></a>
<a id="schema_CanaryRunConfigOutput"></a>
<a id="tocScanaryrunconfigoutput"></a>
<a id="tocscanaryrunconfigoutput"></a>

```json
{
  "TimeoutInSeconds": {},
  "MemoryInMB": {},
  "ActiveTracing": {}
}
```

A structure that contains information about a canary run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeoutInSeconds|object|false|none|none|
|MemoryInMB|object|false|none|none|
|ActiveTracing|object|false|none|none|

<h2 id="tocS_MaxSize1024">MaxSize1024</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize1024"></a>
<a id="schema_MaxSize1024"></a>
<a id="tocSmaxsize1024"></a>
<a id="tocsmaxsize1024"></a>

```json
1
```

<h2 id="tocS_CanaryStatus">CanaryStatus</h2>
<!-- backwards compatibility -->
<a id="schemacanarystatus"></a>
<a id="schema_CanaryStatus"></a>
<a id="tocScanarystatus"></a>
<a id="tocscanarystatus"></a>

```json
{
  "State": {},
  "StateReason": {},
  "StateReasonCode": {}
}
```

A structure that contains the current state of the canary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|StateReasonCode|object|false|none|none|

<h2 id="tocS_CanaryTimeline">CanaryTimeline</h2>
<!-- backwards compatibility -->
<a id="schemacanarytimeline"></a>
<a id="schema_CanaryTimeline"></a>
<a id="tocScanarytimeline"></a>
<a id="tocscanarytimeline"></a>

```json
{
  "Created": {},
  "LastModified": {},
  "LastStarted": {},
  "LastStopped": {}
}
```

This structure contains information about when the canary was created and modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Created|object|false|none|none|
|LastModified|object|false|none|none|
|LastStarted|object|false|none|none|
|LastStopped|object|false|none|none|

<h2 id="tocS_FunctionArn">FunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarn"></a>
<a id="schema_FunctionArn"></a>
<a id="tocSfunctionarn"></a>
<a id="tocsfunctionarn"></a>

```json
"string"
```

<h2 id="tocS_VpcConfigOutput">VpcConfigOutput</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigoutput"></a>
<a id="schema_VpcConfigOutput"></a>
<a id="tocSvpcconfigoutput"></a>
<a id="tocsvpcconfigoutput"></a>

```json
{
  "VpcId": {},
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|false|none|none|
|SubnetIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_VisualReferenceOutput">VisualReferenceOutput</h2>
<!-- backwards compatibility -->
<a id="schemavisualreferenceoutput"></a>
<a id="schema_VisualReferenceOutput"></a>
<a id="tocSvisualreferenceoutput"></a>
<a id="tocsvisualreferenceoutput"></a>

```json
{
  "BaseScreenshots": {},
  "BaseCanaryRunId": {}
}
```

<p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaseScreenshots|object|false|none|none|
|BaseCanaryRunId|object|false|none|none|

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

<h2 id="tocS_CanaryCodeInput">CanaryCodeInput</h2>
<!-- backwards compatibility -->
<a id="schemacanarycodeinput"></a>
<a id="schema_CanaryCodeInput"></a>
<a id="tocScanarycodeinput"></a>
<a id="tocscanarycodeinput"></a>

```json
{
  "S3Bucket": {},
  "S3Key": {},
  "S3Version": {},
  "ZipFile": {},
  "Handler": {}
}
```

Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|false|none|none|
|S3Key|object|false|none|none|
|S3Version|object|false|none|none|
|ZipFile|object|false|none|none|
|Handler|object|true|none|none|

<h2 id="tocS_CanaryRun">CanaryRun</h2>
<!-- backwards compatibility -->
<a id="schemacanaryrun"></a>
<a id="schema_CanaryRun"></a>
<a id="tocScanaryrun"></a>
<a id="tocscanaryrun"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {
    "State": {},
    "StateReason": {},
    "StateReasonCode": {}
  },
  "Timeline": {
    "Started": {},
    "Completed": {}
  },
  "ArtifactS3Location": {}
}
```

This structure contains the details about one run of one canary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|Timeline|object|false|none|none|
|ArtifactS3Location|object|false|none|none|

<h2 id="tocS_CanaryRunStatus">CanaryRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemacanaryrunstatus"></a>
<a id="schema_CanaryRunStatus"></a>
<a id="tocScanaryrunstatus"></a>
<a id="tocscanaryrunstatus"></a>

```json
{
  "State": {},
  "StateReason": {},
  "StateReasonCode": {}
}
```

This structure contains the status information about a canary run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateReason|object|false|none|none|
|StateReasonCode|object|false|none|none|

<h2 id="tocS_CanaryRunTimeline">CanaryRunTimeline</h2>
<!-- backwards compatibility -->
<a id="schemacanaryruntimeline"></a>
<a id="schema_CanaryRunTimeline"></a>
<a id="tocScanaryruntimeline"></a>
<a id="tocscanaryruntimeline"></a>

```json
{
  "Started": {},
  "Completed": {}
}
```

This structure contains the start and end times of a single canary run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Started|object|false|none|none|
|Completed|object|false|none|none|

<h2 id="tocS_CanaryRunConfigInput">CanaryRunConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemacanaryrunconfiginput"></a>
<a id="schema_CanaryRunConfigInput"></a>
<a id="tocScanaryrunconfiginput"></a>
<a id="tocscanaryrunconfiginput"></a>

```json
{
  "TimeoutInSeconds": {},
  "MemoryInMB": {},
  "ActiveTracing": {},
  "EnvironmentVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

A structure that contains input information for a canary run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeoutInSeconds|object|false|none|none|
|MemoryInMB|object|false|none|none|
|ActiveTracing|object|false|none|none|
|EnvironmentVariables|object|false|none|none|

<h2 id="tocS_CanaryRunState">CanaryRunState</h2>
<!-- backwards compatibility -->
<a id="schemacanaryrunstate"></a>
<a id="schema_CanaryRunState"></a>
<a id="tocScanaryrunstate"></a>
<a id="tocscanaryrunstate"></a>

```json
"RUNNING"
```

<h2 id="tocS_CanaryRunStateReasonCode">CanaryRunStateReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemacanaryrunstatereasoncode"></a>
<a id="schema_CanaryRunStateReasonCode"></a>
<a id="tocScanaryrunstatereasoncode"></a>
<a id="tocscanaryrunstatereasoncode"></a>

```json
"CANARY_FAILURE"
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

<h2 id="tocS_CanaryRuns">CanaryRuns</h2>
<!-- backwards compatibility -->
<a id="schemacanaryruns"></a>
<a id="schema_CanaryRuns"></a>
<a id="tocScanaryruns"></a>
<a id="tocscanaryruns"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Status": {
      "State": {},
      "StateReason": {},
      "StateReasonCode": {}
    },
    "Timeline": {
      "Started": {},
      "Completed": {}
    },
    "ArtifactS3Location": {}
  }
]
```

<h2 id="tocS_CanaryScheduleInput">CanaryScheduleInput</h2>
<!-- backwards compatibility -->
<a id="schemacanaryscheduleinput"></a>
<a id="schema_CanaryScheduleInput"></a>
<a id="tocScanaryscheduleinput"></a>
<a id="tocscanaryscheduleinput"></a>

```json
{
  "Expression": {},
  "DurationInSeconds": {}
}
```

This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_CanaryState">CanaryState</h2>
<!-- backwards compatibility -->
<a id="schemacanarystate"></a>
<a id="schema_CanaryState"></a>
<a id="tocScanarystate"></a>
<a id="tocscanarystate"></a>

```json
"CREATING"
```

<h2 id="tocS_CanaryStateReasonCode">CanaryStateReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemacanarystatereasoncode"></a>
<a id="schema_CanaryStateReasonCode"></a>
<a id="tocScanarystatereasoncode"></a>
<a id="tocscanarystatereasoncode"></a>

```json
"INVALID_PERMISSIONS"
```

<h2 id="tocS_VpcConfigInput">VpcConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfiginput"></a>
<a id="schema_VpcConfigInput"></a>
<a id="tocSvpcconfiginput"></a>
<a id="tocsvpcconfiginput"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_CreateCanaryRequest">CreateCanaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecanaryrequest"></a>
<a id="schema_CreateCanaryRequest"></a>
<a id="tocScreatecanaryrequest"></a>
<a id="tocscreatecanaryrequest"></a>

```json
{
  "Name": {},
  "Code": {
    "S3Bucket": {},
    "S3Key": {},
    "S3Version": {},
    "ZipFile": {},
    "Handler": {}
  },
  "ArtifactS3Location": {},
  "ExecutionRoleArn": {},
  "Schedule": {
    "Expression": {},
    "DurationInSeconds": {}
  },
  "RunConfig": {
    "TimeoutInSeconds": {},
    "MemoryInMB": {},
    "ActiveTracing": {},
    "EnvironmentVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "SuccessRetentionPeriodInDays": {},
  "FailureRetentionPeriodInDays": {},
  "RuntimeVersion": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ArtifactConfig": {
    "S3Encryption": {
      "EncryptionMode": {},
      "KmsKeyArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Code|object|true|none|none|
|ArtifactS3Location|object|true|none|none|
|ExecutionRoleArn|object|true|none|none|
|Schedule|object|true|none|none|
|RunConfig|object|false|none|none|
|SuccessRetentionPeriodInDays|object|false|none|none|
|FailureRetentionPeriodInDays|object|false|none|none|
|RuntimeVersion|object|true|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|
|ArtifactConfig|object|false|none|none|

<h2 id="tocS_GroupName">GroupName</h2>
<!-- backwards compatibility -->
<a id="schemagroupname"></a>
<a id="schema_GroupName"></a>
<a id="tocSgroupname"></a>
<a id="tocsgroupname"></a>

```json
"string"
```

<h2 id="tocS_CreateGroupRequest">CreateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrouprequest"></a>
<a id="schema_CreateGroupRequest"></a>
<a id="tocScreategrouprequest"></a>
<a id="tocscreategrouprequest"></a>

```json
{
  "Name": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "Id": {},
  "Name": {},
  "Arn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "CreatedTime": {},
  "LastModifiedTime": {}
}
```

This structure contains information about one group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Tags|object|false|none|none|
|CreatedTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_DeleteCanaryRequest">DeleteCanaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecanaryrequest"></a>
<a id="schema_DeleteCanaryRequest"></a>
<a id="tocSdeletecanaryrequest"></a>
<a id="tocsdeletecanaryrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteGroupRequest">DeleteGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrouprequest"></a>
<a id="schema_DeleteGroupRequest"></a>
<a id="tocSdeletegrouprequest"></a>
<a id="tocsdeletegrouprequest"></a>

```json
{}
```

<h2 id="tocS_DescribeCanariesLastRunNameFilter">DescribeCanariesLastRunNameFilter</h2>
<!-- backwards compatibility -->
<a id="schemadescribecanarieslastrunnamefilter"></a>
<a id="schema_DescribeCanariesLastRunNameFilter"></a>
<a id="tocSdescribecanarieslastrunnamefilter"></a>
<a id="tocsdescribecanarieslastrunnamefilter"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_MaxSize100">MaxSize100</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize100"></a>
<a id="schema_MaxSize100"></a>
<a id="tocSmaxsize100"></a>
<a id="tocsmaxsize100"></a>

```json
1
```

<h2 id="tocS_DescribeCanariesLastRunRequest">DescribeCanariesLastRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecanarieslastrunrequest"></a>
<a id="schema_DescribeCanariesLastRunRequest"></a>
<a id="tocSdescribecanarieslastrunrequest"></a>
<a id="tocsdescribecanarieslastrunrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Names": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Names|object|false|none|none|

<h2 id="tocS_DescribeCanariesNameFilter">DescribeCanariesNameFilter</h2>
<!-- backwards compatibility -->
<a id="schemadescribecanariesnamefilter"></a>
<a id="schema_DescribeCanariesNameFilter"></a>
<a id="tocSdescribecanariesnamefilter"></a>
<a id="tocsdescribecanariesnamefilter"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaxCanaryResults">MaxCanaryResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxcanaryresults"></a>
<a id="schema_MaxCanaryResults"></a>
<a id="tocSmaxcanaryresults"></a>
<a id="tocsmaxcanaryresults"></a>

```json
1
```

<h2 id="tocS_DescribeCanariesRequest">DescribeCanariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecanariesrequest"></a>
<a id="schema_DescribeCanariesRequest"></a>
<a id="tocSdescribecanariesrequest"></a>
<a id="tocsdescribecanariesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Names": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Names|object|false|none|none|

<h2 id="tocS_DescribeRuntimeVersionsRequest">DescribeRuntimeVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberuntimeversionsrequest"></a>
<a id="schema_DescribeRuntimeVersionsRequest"></a>
<a id="tocSdescriberuntimeversionsrequest"></a>
<a id="tocsdescriberuntimeversionsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_RuntimeVersionList">RuntimeVersionList</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeversionlist"></a>
<a id="schema_RuntimeVersionList"></a>
<a id="tocSruntimeversionlist"></a>
<a id="tocsruntimeversionlist"></a>

```json
[
  {
    "VersionName": {},
    "Description": {},
    "ReleaseDate": {},
    "DeprecationDate": {}
  }
]
```

<h2 id="tocS_DisassociateResourceRequest">DisassociateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourcerequest"></a>
<a id="schema_DisassociateResourceRequest"></a>
<a id="tocSdisassociateresourcerequest"></a>
<a id="tocsdisassociateresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_EncryptionMode">EncryptionMode</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionmode"></a>
<a id="schema_EncryptionMode"></a>
<a id="tocSencryptionmode"></a>
<a id="tocsencryptionmode"></a>

```json
"SSE_S3"
```

<h2 id="tocS_EnvironmentVariableName">EnvironmentVariableName</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablename"></a>
<a id="schema_EnvironmentVariableName"></a>
<a id="tocSenvironmentvariablename"></a>
<a id="tocsenvironmentvariablename"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentVariableValue">EnvironmentVariableValue</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablevalue"></a>
<a id="schema_EnvironmentVariableValue"></a>
<a id="tocSenvironmentvariablevalue"></a>
<a id="tocsenvironmentvariablevalue"></a>

```json
"string"
```

<h2 id="tocS_GetCanaryRequest">GetCanaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcanaryrequest"></a>
<a id="schema_GetCanaryRequest"></a>
<a id="tocSgetcanaryrequest"></a>
<a id="tocsgetcanaryrequest"></a>

```json
{}
```

<h2 id="tocS_GetCanaryRunsRequest">GetCanaryRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcanaryrunsrequest"></a>
<a id="schema_GetCanaryRunsRequest"></a>
<a id="tocSgetcanaryrunsrequest"></a>
<a id="tocsgetcanaryrunsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetGroupRequest">GetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgrouprequest"></a>
<a id="schema_GetGroupRequest"></a>
<a id="tocSgetgrouprequest"></a>
<a id="tocsgetgrouprequest"></a>

```json
{}
```

<h2 id="tocS_GroupArn">GroupArn</h2>
<!-- backwards compatibility -->
<a id="schemagrouparn"></a>
<a id="schema_GroupArn"></a>
<a id="tocSgrouparn"></a>
<a id="tocsgrouparn"></a>

```json
"string"
```

<h2 id="tocS_GroupSummary">GroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemagroupsummary"></a>
<a id="schema_GroupSummary"></a>
<a id="tocSgroupsummary"></a>
<a id="tocsgroupsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Arn": {}
}
```

A structure containing some information about a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_GroupSummaryList">GroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemagroupsummarylist"></a>
<a id="schema_GroupSummaryList"></a>
<a id="tocSgroupsummarylist"></a>
<a id="tocsgroupsummarylist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
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

<h2 id="tocS_MaxGroupResults">MaxGroupResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxgroupresults"></a>
<a id="schema_MaxGroupResults"></a>
<a id="tocSmaxgroupresults"></a>
<a id="tocsmaxgroupresults"></a>

```json
1
```

<h2 id="tocS_ListAssociatedGroupsRequest">ListAssociatedGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedgroupsrequest"></a>
<a id="schema_ListAssociatedGroupsRequest"></a>
<a id="tocSlistassociatedgroupsrequest"></a>
<a id="tocslistassociatedgroupsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListGroupResourcesRequest">ListGroupResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupresourcesrequest"></a>
<a id="schema_ListGroupResourcesRequest"></a>
<a id="tocSlistgroupresourcesrequest"></a>
<a id="tocslistgroupresourcesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListGroupsRequest">ListGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsrequest"></a>
<a id="schema_ListGroupsRequest"></a>
<a id="tocSlistgroupsrequest"></a>
<a id="tocslistgroupsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_RuntimeVersion">RuntimeVersion</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeversion"></a>
<a id="schema_RuntimeVersion"></a>
<a id="tocSruntimeversion"></a>
<a id="tocsruntimeversion"></a>

```json
{
  "VersionName": {},
  "Description": {},
  "ReleaseDate": {},
  "DeprecationDate": {}
}
```

This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VersionName|object|false|none|none|
|Description|object|false|none|none|
|ReleaseDate|object|false|none|none|
|DeprecationDate|object|false|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_StartCanaryRequest">StartCanaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcanaryrequest"></a>
<a id="schema_StartCanaryRequest"></a>
<a id="tocSstartcanaryrequest"></a>
<a id="tocsstartcanaryrequest"></a>

```json
{}
```

<h2 id="tocS_StopCanaryRequest">StopCanaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopcanaryrequest"></a>
<a id="schema_StopCanaryRequest"></a>
<a id="tocSstopcanaryrequest"></a>
<a id="tocsstopcanaryrequest"></a>

```json
{}
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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

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

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_VisualReferenceInput">VisualReferenceInput</h2>
<!-- backwards compatibility -->
<a id="schemavisualreferenceinput"></a>
<a id="schema_VisualReferenceInput"></a>
<a id="tocSvisualreferenceinput"></a>
<a id="tocsvisualreferenceinput"></a>

```json
{
  "BaseScreenshots": {},
  "BaseCanaryRunId": {}
}
```

<p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaseScreenshots|object|false|none|none|
|BaseCanaryRunId|object|true|none|none|

<h2 id="tocS_UpdateCanaryRequest">UpdateCanaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecanaryrequest"></a>
<a id="schema_UpdateCanaryRequest"></a>
<a id="tocSupdatecanaryrequest"></a>
<a id="tocsupdatecanaryrequest"></a>

```json
{
  "Code": {
    "S3Bucket": {},
    "S3Key": {},
    "S3Version": {},
    "ZipFile": {},
    "Handler": {}
  },
  "ExecutionRoleArn": {},
  "RuntimeVersion": {},
  "Schedule": {
    "Expression": {},
    "DurationInSeconds": {}
  },
  "RunConfig": {
    "TimeoutInSeconds": {},
    "MemoryInMB": {},
    "ActiveTracing": {},
    "EnvironmentVariables": {
      "property1": "string",
      "property2": "string"
    }
  },
  "SuccessRetentionPeriodInDays": {},
  "FailureRetentionPeriodInDays": {},
  "VpcConfig": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "VisualReference": {
    "BaseScreenshots": {},
    "BaseCanaryRunId": {}
  },
  "ArtifactS3Location": {},
  "ArtifactConfig": {
    "S3Encryption": {
      "EncryptionMode": {},
      "KmsKeyArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|
|RuntimeVersion|object|false|none|none|
|Schedule|object|false|none|none|
|RunConfig|object|false|none|none|
|SuccessRetentionPeriodInDays|object|false|none|none|
|FailureRetentionPeriodInDays|object|false|none|none|
|VpcConfig|object|false|none|none|
|VisualReference|object|false|none|none|
|ArtifactS3Location|object|false|none|none|
|ArtifactConfig|object|false|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```
