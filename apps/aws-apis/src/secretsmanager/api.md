<h1 id="aws-secrets-manager">AWS Secrets Manager v2017-10-17</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Web Services Secrets Manager</fullname> <p>Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p> <p>This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">Amazon Web Services Secrets Manager User Guide</a>.</p> <p> <b>API Version</b> </p> <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p> <p>For a list of endpoints, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/asm_access.html#endpoints">Amazon Web Services Secrets Manager endpoints</a>.</p> <p> <b>Support and Feedback for Amazon Web Services Secrets Manager</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">Amazon Web Services Secrets Manager Discussion Forum</a>. For more information about the Amazon Web Services Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>Logging API Requests</b> </p> <p>Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information that's collected by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services CloudTrail, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>. To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">Amazon Web Services CloudTrail User Guide</a>.</p>

Base URLs:

* <a href="http://secretsmanager.us-east-1.amazonaws.com">http://secretsmanager.us-east-1.amazonaws.com</a> - The AWS Secrets Manager multi-region endpoint

* <a href="https://secretsmanager.us-east-1.amazonaws.com">https://secretsmanager.us-east-1.amazonaws.com</a> - The AWS Secrets Manager multi-region endpoint

* <a href="http://secretsmanager.cn-north-1.amazonaws.com.cn">http://secretsmanager.cn-north-1.amazonaws.com.cn</a> - The AWS Secrets Manager endpoint for China (Beijing) and China (Ningxia)

* <a href="https://secretsmanager.cn-north-1.amazonaws.com.cn">https://secretsmanager.cn-north-1.amazonaws.com.cn</a> - The AWS Secrets Manager endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/secretsmanager/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-secrets-manager-default">Default</h1>

## CancelRotateSecret

<a id="opIdCancelRotateSecret"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.CancelRotateSecret' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.CancelRotateSecret' \
  -d '{
    "SecretId": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.CancelRotateSecret`

<p>Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation.</p> <p>If you cancel a rotation in progress, it can leave the <code>VersionStage</code> labels in an unexpected state. You might need to remove the staging label <code>AWSPENDING</code> from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label <code>AWSCURRENT</code> to the version that has <code>AWSPENDING</code>. To determine which version has a specific staging label, call <a>ListSecretVersionIds</a>. Then use <a>UpdateSecretVersionStage</a> to change staging labels. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p> <p>To turn on automatic rotation again, call <a>RotateSecret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CancelRotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {}
}
```

<h3 id="cancelrotatesecret-parameters">Parameters</h3>

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
|body|body|[CancelRotateSecretRequest](#schemacancelrotatesecretrequest)|true|none|
|» SecretId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.CancelRotateSecret|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "Name"
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

<h3 id="cancelrotatesecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelRotateSecretResponse](#schemacancelrotatesecretresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSecret

<a id="opIdCreateSecret"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.CreateSecret' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.CreateSecret' \
  -d '{
    "Name": {},
    "ClientRequestToken": {},
    "Description": {},
    "KmsKeyId": {},
    "SecretBinary": {},
    "SecretString": {},
    "Tags": {},
    "AddReplicaRegions": {},
    "ForceOverwriteReplicaSecret": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.CreateSecret`

<p>Creates a new secret. A <i>secret</i> can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret.</p> <p>For secrets that use <i>managed rotation</i>, you need to create the secret through the managing service. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>. </p> <p>For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>.</p> <p>To create a secret, you can provide the secret value to be encrypted in either the <code>SecretString</code> parameter or the <code>SecretBinary</code> parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code> then Secrets Manager creates an initial secret version and automatically attaches the staging label <code>AWSCURRENT</code> to it.</p> <p>For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the <code>SecretString</code> matches the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html">JSON structure of a database secret</a>.</p> <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the result.</p> <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed KMS key. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CreateSecret</code>. If you include tags in the secret, you also need <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p> <p>To encrypt the secret with a KMS key other than <code>aws/secretsmanager</code>, you need <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permission to the key. </p>

> Body parameter

```json
{
  "Name": {},
  "ClientRequestToken": {},
  "Description": {},
  "KmsKeyId": {},
  "SecretBinary": {},
  "SecretString": {},
  "Tags": {},
  "AddReplicaRegions": {},
  "ForceOverwriteReplicaSecret": {}
}
```

<h3 id="createsecret-parameters">Parameters</h3>

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
|body|body|[CreateSecretRequest](#schemacreatesecretrequest)|true|none|
|» Name|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» Description|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» SecretBinary|body|object|false|none|
|» SecretString|body|object|false|none|
|» Tags|body|object|false|none|
|» AddReplicaRegions|body|object|false|none|
|» ForceOverwriteReplicaSecret|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.CreateSecret|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1"
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

<h3 id="createsecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSecretResponse](#schemacreatesecretresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|EncryptionFailure|[EncryptionFailure](#schemaencryptionfailure)|
|484|484|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|487|487|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|488|488|PreconditionNotMetException|[PreconditionNotMetException](#schemapreconditionnotmetexception)|
|489|489|DecryptionFailure|[DecryptionFailure](#schemadecryptionfailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.DeleteResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.DeleteResourcePolicy' \
  -d '{
    "SecretId": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.DeleteResourcePolicy`

<p>Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use <a>PutResourcePolicy</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {}
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

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
|body|body|[DeleteResourcePolicyRequest](#schemadeleteresourcepolicyrequest)|true|none|
|» SecretId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.DeleteResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyResponse](#schemadeleteresourcepolicyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSecret

<a id="opIdDeleteSecret"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.DeleteSecret' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.DeleteSecret' \
  -d '{
    "SecretId": {},
    "RecoveryWindowInDays": {},
    "ForceDeleteWithoutRecovery": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.DeleteSecret`

<p>Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently.</p> <p>You can't delete a primary secret that is replicated to other Regions. You must first delete the replicas using <a>RemoveRegionsFromReplication</a>, and then delete the primary secret. When you delete a replica, it is deleted immediately.</p> <p>You can't directly delete a version of a secret. Instead, you remove all staging labels from the version using <a>UpdateSecretVersionStage</a>. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background.</p> <p>To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring_cloudwatch_deleted-secrets.html"> Monitor secrets scheduled for deletion</a>.</p> <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur.</p> <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p> <p>When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with <a>RestoreSecret</a> and then you can retrieve the secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "RecoveryWindowInDays": {},
  "ForceDeleteWithoutRecovery": {}
}
```

<h3 id="deletesecret-parameters">Parameters</h3>

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
|body|body|[DeleteSecretRequest](#schemadeletesecretrequest)|true|none|
|» SecretId|body|object|true|none|
|» RecoveryWindowInDays|body|object|false|none|
|» ForceDeleteWithoutRecovery|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.DeleteSecret|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "DeletionDate": "1524085349.095",
  "Name": "MyTestDatabaseSecret"
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

<h3 id="deletesecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSecretResponse](#schemadeletesecretresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSecret

<a id="opIdDescribeSecret"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.DescribeSecret' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.DescribeSecret' \
  -d '{
    "SecretId": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.DescribeSecret`

<p>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DescribeSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {}
}
```

<h3 id="describesecret-parameters">Parameters</h3>

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
|body|body|[DescribeSecretRequest](#schemadescribesecretrequest)|true|none|
|» SecretId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.DescribeSecret|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Description": "My test database secret",
  "KmsKeyId": "arn:aws:kms:us-west-2:123456789012:key/EXAMPLE1-90ab-cdef-fedc-ba987KMSKEY1",
  "LastAccessedDate": "1523923200",
  "LastChangedDate": 1523477145.729,
  "LastRotatedDate": 1525747253.72,
  "Name": "MyTestDatabaseSecret",
  "NextRotationDate": "1665165599",
  "RotationEnabled": true,
  "RotationLambdaARN": "arn:aws:lambda:us-west-2:123456789012:function:MyTestRotationLambda",
  "RotationRules": {
    "AutomaticallyAfterDays": 14,
    "Duration": "2h",
    "ScheduleExpression": "cron(0 16 1,15 * ? *)"
  },
  "Tags": [
    {
      "Key": "SecondTag",
      "Value": "AnotherValue"
    },
    {
      "Key": "FirstTag",
      "Value": "SomeValue"
    }
  ],
  "VersionIdsToStages": {
    "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE": [
      "AWSPREVIOUS"
    ],
    "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE": [
      "AWSCURRENT"
    ]
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

<h3 id="describesecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSecretResponse](#schemadescribesecretresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRandomPassword

<a id="opIdGetRandomPassword"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.GetRandomPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.GetRandomPassword' \
  -d '{
    "PasswordLength": {},
    "ExcludeCharacters": {},
    "ExcludeNumbers": {},
    "ExcludePunctuation": {},
    "ExcludeUppercase": {},
    "ExcludeLowercase": {},
    "IncludeSpace": {},
    "RequireEachIncludedType": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.GetRandomPassword`

<p>Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetRandomPassword</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "PasswordLength": {},
  "ExcludeCharacters": {},
  "ExcludeNumbers": {},
  "ExcludePunctuation": {},
  "ExcludeUppercase": {},
  "ExcludeLowercase": {},
  "IncludeSpace": {},
  "RequireEachIncludedType": {}
}
```

<h3 id="getrandompassword-parameters">Parameters</h3>

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
|body|body|[GetRandomPasswordRequest](#schemagetrandompasswordrequest)|true|none|
|» PasswordLength|body|object|false|none|
|» ExcludeCharacters|body|object|false|none|
|» ExcludeNumbers|body|object|false|none|
|» ExcludePunctuation|body|object|false|none|
|» ExcludeUppercase|body|object|false|none|
|» ExcludeLowercase|body|object|false|none|
|» IncludeSpace|body|object|false|none|
|» RequireEachIncludedType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.GetRandomPassword|

> Example responses

> 200 Response

```json
{
  "RandomPassword": "EXAMPLE-PASSWORD"
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

<h3 id="getrandompassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRandomPasswordResponse](#schemagetrandompasswordresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicy

<a id="opIdGetResourcePolicy"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.GetResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.GetResourcePolicy' \
  -d '{
    "SecretId": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.GetResourcePolicy`

<p>Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html">Permissions policies attached to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {}
}
```

<h3 id="getresourcepolicy-parameters">Parameters</h3>

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
|body|body|[GetResourcePolicyRequest](#schemagetresourcepolicyrequest)|true|none|
|» SecretId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.GetResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "ResourcePolicy": "{\n\"Version\":\"2012-10-17\",\n\"Statement\":[{\n\"Effect\":\"Allow\",\n\"Principal\":{\n\"AWS\":\"arn:aws:iam::123456789012:root\"\n},\n\"Action\":\"secretsmanager:GetSecretValue\",\n\"Resource\":\"*\"\n}]\n}"
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

<h3 id="getresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePolicyResponse](#schemagetresourcepolicyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSecretValue

<a id="opIdGetSecretValue"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.GetSecretValue' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.GetSecretValue' \
  -d '{
    "SecretId": {},
    "VersionId": {},
    "VersionStage": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.GetSecretValue`

<p>Retrieves the contents of the encrypted fields <code>SecretString</code> or <code>SecretBinary</code> from the specified version of a secret, whichever contains content.</p> <p>We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Cache secrets for your applications</a>.</p> <p>To retrieve the previous version of a secret, use <code>VersionStage</code> and specify AWSPREVIOUS. To revert to the previous version of a secret, call <a href="https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/update-secret-version-stage.html">UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetSecretValue</code>. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key <code>aws/secretsmanager</code>, then you also need <code>kms:Decrypt</code> permissions for that key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "VersionId": {},
  "VersionStage": {}
}
```

<h3 id="getsecretvalue-parameters">Parameters</h3>

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
|body|body|[GetSecretValueRequest](#schemagetsecretvaluerequest)|true|none|
|» SecretId|body|object|true|none|
|» VersionId|body|object|false|none|
|» VersionStage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.GetSecretValue|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "CreatedDate": 1523477145.713,
  "Name": "MyTestDatabaseSecret",
  "SecretString": "{\n  \"username\":\"david\",\n  \"password\":\"EXAMPLE-PASSWORD\"\n}\n",
  "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1",
  "VersionStages": [
    "AWSPREVIOUS"
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

<h3 id="getsecretvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSecretValueResponse](#schemagetsecretvalueresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|DecryptionFailure|[DecryptionFailure](#schemadecryptionfailure)|
|484|484|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSecretVersionIds

<a id="opIdListSecretVersionIds"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.ListSecretVersionIds' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.ListSecretVersionIds' \
  -d '{
    "SecretId": {},
    "MaxResults": {},
    "NextToken": {},
    "IncludeDeprecated": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.ListSecretVersionIds`

<p>Lists the versions of a secret. Secrets Manager uses staging labels to indicate the different versions of a secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version"> Secrets Manager concepts: Versions</a>.</p> <p>To list the secrets in the account, use <a>ListSecrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecretVersionIds</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "MaxResults": {},
  "NextToken": {},
  "IncludeDeprecated": {}
}
```

<h3 id="listsecretversionids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSecretVersionIdsRequest](#schemalistsecretversionidsrequest)|true|none|
|» SecretId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» IncludeDeprecated|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.ListSecretVersionIds|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "Versions": [
    {
      "CreatedDate": 1523477145.713,
      "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE",
      "VersionStages": [
        "AWSPREVIOUS"
      ]
    },
    {
      "CreatedDate": 1523486221.391,
      "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE",
      "VersionStages": [
        "AWSCURRENT"
      ]
    },
    {
      "CreatedDate": 1511974462.36,
      "VersionId": "EXAMPLE3-90ab-cdef-fedc-ba987EXAMPLE;"
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

<h3 id="listsecretversionids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSecretVersionIdsResponse](#schemalistsecretversionidsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSecrets

<a id="opIdListSecrets"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.ListSecrets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.ListSecrets' \
  -d '{
    "IncludePlannedDeletion": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {},
    "SortOrder": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.ListSecrets`

<p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console.</p> <p>ListSecrets is eventually consistent, however it might not reflect changes from the last five minutes. To get the latest information for a specific secret, use <a>DescribeSecret</a>.</p> <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p> <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>, call <a>GetSecretValue</a>.</p> <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecrets</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "IncludePlannedDeletion": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "SortOrder": {}
}
```

<h3 id="listsecrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSecretsRequest](#schemalistsecretsrequest)|true|none|
|» IncludePlannedDeletion|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|
|» SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.ListSecrets|

> Example responses

> 200 Response

```json
{
  "SecretList": [
    {
      "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
      "Description": "My test database secret",
      "LastChangedDate": 1523477145.729,
      "Name": "MyTestDatabaseSecret",
      "SecretVersionsToStages": {
        "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE": [
          "AWSCURRENT"
        ]
      }
    },
    {
      "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret1-d4e5f6",
      "Description": "Another secret created for a different database",
      "LastChangedDate": 1523482025.685,
      "Name": "MyTestDatabaseSecret1",
      "SecretVersionsToStages": {
        "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE": [
          "AWSCURRENT"
        ]
      }
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

<h3 id="listsecrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSecretsResponse](#schemalistsecretsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.PutResourcePolicy' \
  -d '{
    "SecretId": {},
    "ResourcePolicy": {},
    "BlockPublicPolicy": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.PutResourcePolicy`

<p>Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control for Secrets Manager</a> </p> <p>For information about attaching a policy in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Attach a permissions policy to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "ResourcePolicy": {},
  "BlockPublicPolicy": {}
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|body|body|[PutResourcePolicyRequest](#schemaputresourcepolicyrequest)|true|none|
|» SecretId|body|object|true|none|
|» ResourcePolicy|body|object|true|none|
|» BlockPublicPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.PutResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|PublicPolicyException|[PublicPolicyException](#schemapublicpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSecretValue

<a id="opIdPutSecretValue"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.PutSecretValue' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.PutSecretValue' \
  -d '{
    "SecretId": {},
    "ClientRequestToken": {},
    "SecretBinary": {},
    "SecretString": {},
    "VersionStages": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.PutSecretValue`

<p>Creates a new version with a new encrypted secret value and attaches it to the secret. The version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. </p> <p>We recommend you avoid calling <code>PutSecretValue</code> at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you call <code>PutSecretValue</code> more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>You can specify the staging labels to attach to the new version in <code>VersionStages</code>. If you don't include <code>VersionStages</code>, then Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to it. If this operation moves the staging label <code>AWSCURRENT</code> from another version to this version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>This operation is idempotent. If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutSecretValue</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "ClientRequestToken": {},
  "SecretBinary": {},
  "SecretString": {},
  "VersionStages": {}
}
```

<h3 id="putsecretvalue-parameters">Parameters</h3>

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
|body|body|[PutSecretValueRequest](#schemaputsecretvaluerequest)|true|none|
|» SecretId|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» SecretBinary|body|object|false|none|
|» SecretString|body|object|false|none|
|» VersionStages|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.PutSecretValue|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE",
  "VersionStages": [
    "AWSCURRENT"
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

> 487 Response

```json
null
```

<h3 id="putsecretvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSecretValueResponse](#schemaputsecretvalueresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|EncryptionFailure|[EncryptionFailure](#schemaencryptionfailure)|
|484|484|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|487|487|DecryptionFailure|[DecryptionFailure](#schemadecryptionfailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveRegionsFromReplication

<a id="opIdRemoveRegionsFromReplication"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.RemoveRegionsFromReplication' \
  -d '{
    "SecretId": {},
    "RemoveReplicaRegions": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication`

<p>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RemoveRegionsFromReplication</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "RemoveReplicaRegions": {}
}
```

<h3 id="removeregionsfromreplication-parameters">Parameters</h3>

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
|body|body|[RemoveRegionsFromReplicationRequest](#schemaremoveregionsfromreplicationrequest)|true|none|
|» SecretId|body|object|true|none|
|» RemoveReplicaRegions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.RemoveRegionsFromReplication|

> Example responses

> 200 Response

```json
{
  "ARN": {},
  "ReplicationStatus": {}
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

<h3 id="removeregionsfromreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveRegionsFromReplicationResponse](#schemaremoveregionsfromreplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReplicateSecretToRegions

<a id="opIdReplicateSecretToRegions"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.ReplicateSecretToRegions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.ReplicateSecretToRegions' \
  -d '{
    "SecretId": {},
    "AddReplicaRegions": {},
    "ForceOverwriteReplicaSecret": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.ReplicateSecretToRegions`

<p>Replicates the secret to a new Regions. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html">Multi-Region secrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ReplicateSecretToRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "AddReplicaRegions": {},
  "ForceOverwriteReplicaSecret": {}
}
```

<h3 id="replicatesecrettoregions-parameters">Parameters</h3>

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
|body|body|[ReplicateSecretToRegionsRequest](#schemareplicatesecrettoregionsrequest)|true|none|
|» SecretId|body|object|true|none|
|» AddReplicaRegions|body|object|true|none|
|» ForceOverwriteReplicaSecret|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.ReplicateSecretToRegions|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestSecret-1a2b3c",
  "ReplicationStatus": [
    {
      "KmsKeyId": "alias/aws/secretsmanager",
      "Region": "eu-west-3",
      "Status": "InProgress"
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

<h3 id="replicatesecrettoregions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicateSecretToRegionsResponse](#schemareplicatesecrettoregionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreSecret

<a id="opIdRestoreSecret"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.RestoreSecret' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.RestoreSecret' \
  -d '{
    "SecretId": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.RestoreSecret`

<p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time stamp. You can access a secret again after it has been restored.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RestoreSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {}
}
```

<h3 id="restoresecret-parameters">Parameters</h3>

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
|body|body|[RestoreSecretRequest](#schemarestoresecretrequest)|true|none|
|» SecretId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.RestoreSecret|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
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

<h3 id="restoresecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreSecretResponse](#schemarestoresecretresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RotateSecret

<a id="opIdRotateSecret"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.RotateSecret' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.RotateSecret' \
  -d '{
    "SecretId": {},
    "ClientRequestToken": {},
    "RotationLambdaARN": {},
    "RotationRules": {
      "AutomaticallyAfterDays": {},
      "Duration": {},
      "ScheduleExpression": {}
    },
    "RotateImmediately": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.RotateSecret`

<p>Configures and starts the asynchronous process of rotating the secret. For information about rotation, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a> in the <i>Secrets Manager User Guide</i>. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret. </p> <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached to the same version as the <code>AWSCURRENT</code> version, or it might not be attached to any version. If the <code>AWSPENDING</code> staging label is present but not attached to the same version as <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code> assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the <code>AWSPENDING</code> staging label might be attached to an empty secret version. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot_rotation.html">Troubleshoot rotation</a> in the <i>Secrets Manager User Guide</i>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. You also need <code>lambda:InvokeFunction</code> permissions on the rotation function. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html"> Permissions for rotation</a>.</p>

> Body parameter

```json
{
  "SecretId": {},
  "ClientRequestToken": {},
  "RotationLambdaARN": {},
  "RotationRules": {
    "AutomaticallyAfterDays": {},
    "Duration": {},
    "ScheduleExpression": {}
  },
  "RotateImmediately": {}
}
```

<h3 id="rotatesecret-parameters">Parameters</h3>

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
|body|body|[RotateSecretRequest](#schemarotatesecretrequest)|true|none|
|» SecretId|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» RotationLambdaARN|body|object|false|none|
|» RotationRules|body|object|false|none|
|» » AutomaticallyAfterDays|body|object|false|none|
|» » Duration|body|object|false|none|
|» » ScheduleExpression|body|object|false|none|
|» RotateImmediately|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.RotateSecret|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987SECRET2"
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

<h3 id="rotatesecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RotateSecretResponse](#schemarotatesecretresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopReplicationToReplica

<a id="opIdStopReplicationToReplica"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.StopReplicationToReplica' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.StopReplicationToReplica' \
  -d '{
    "SecretId": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.StopReplicationToReplica`

<p>Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region.</p> <p>You must call this operation from the Region in which you want to promote the replica to a primary secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:StopReplicationToReplica</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {}
}
```

<h3 id="stopreplicationtoreplica-parameters">Parameters</h3>

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
|body|body|[StopReplicationToReplicaRequest](#schemastopreplicationtoreplicarequest)|true|none|
|» SecretId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.StopReplicationToReplica|

> Example responses

> 200 Response

```json
{
  "ARN": {}
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

<h3 id="stopreplicationtoreplica-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopReplicationToReplicaResponse](#schemastopreplicationtoreplicaresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.TagResource' \
  -d '{
    "SecretId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.TagResource`

<p>Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per secret: 50</p> </li> <li> <p>Maximum key length: 127 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 255 Unicode characters in UTF-8</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it for Amazon Web Services use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.</p> </li> <li> <p>If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</p> </li> </ul> <important> <p>If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
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
|» SecretId|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.UntagResource' \
  -d '{
    "SecretId": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.UntagResource`

<p>Removes specific tags from a secret.</p> <p>This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.</p> <important> <p>If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UntagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
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
|» SecretId|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSecret

<a id="opIdUpdateSecret"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.UpdateSecret' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.UpdateSecret' \
  -d '{
    "SecretId": {},
    "ClientRequestToken": {},
    "Description": {},
    "KmsKeyId": {},
    "SecretBinary": {},
    "SecretString": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.UpdateSecret`

<p>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use <a>PutSecretValue</a>.</p> <p>To change the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p> <p>To change a secret so that it is managed by another service, you need to recreate the secret in that service. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>.</p> <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new secret version, Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to the new version. Then it attaches the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's <code>VersionId</code>, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See <a>UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. If you use a customer managed key, you must also have <code>kms:GenerateDataKey</code>, <code>kms:Encrypt</code>, and <code>kms:Decrypt</code> permissions on the key. If you change the KMS key and you don't have <code>kms:Encrypt</code> permission to the new key, Secrets Manager does not re-ecrypt existing secret versions with the new key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html"> Secret encryption and decryption</a>.</p>

> Body parameter

```json
{
  "SecretId": {},
  "ClientRequestToken": {},
  "Description": {},
  "KmsKeyId": {},
  "SecretBinary": {},
  "SecretString": {}
}
```

<h3 id="updatesecret-parameters">Parameters</h3>

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
|body|body|[UpdateSecretRequest](#schemaupdatesecretrequest)|true|none|
|» SecretId|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» Description|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» SecretBinary|body|object|false|none|
|» SecretString|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.UpdateSecret|

> Example responses

> 200 Response

```json
{
  "ARN": "aws:arn:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE"
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

<h3 id="updatesecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSecretResponse](#schemaupdatesecretresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|EncryptionFailure|[EncryptionFailure](#schemaencryptionfailure)|
|484|484|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|487|487|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|488|488|PreconditionNotMetException|[PreconditionNotMetException](#schemapreconditionnotmetexception)|
|489|489|DecryptionFailure|[DecryptionFailure](#schemadecryptionfailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSecretVersionStage

<a id="opIdUpdateSecretVersionStage"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.UpdateSecretVersionStage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.UpdateSecretVersionStage' \
  -d '{
    "SecretId": {},
    "VersionStage": {},
    "RemoveFromVersionId": {},
    "MoveToVersionId": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.UpdateSecretVersionStage`

<p>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>. </p> <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added to the existing list of staging labels for the version. </p> <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this call.</p> <note> <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> </note> <p>If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecretVersionStage</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "VersionStage": {},
  "RemoveFromVersionId": {},
  "MoveToVersionId": {}
}
```

<h3 id="updatesecretversionstage-parameters">Parameters</h3>

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
|body|body|[UpdateSecretVersionStageRequest](#schemaupdatesecretversionstagerequest)|true|none|
|» SecretId|body|object|true|none|
|» VersionStage|body|object|true|none|
|» RemoveFromVersionId|body|object|false|none|
|» MoveToVersionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.UpdateSecretVersionStage|

> Example responses

> 200 Response

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
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

<h3 id="updatesecretversionstage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSecretVersionStageResponse](#schemaupdatesecretversionstageresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ValidateResourcePolicy

<a id="opIdValidateResourcePolicy"></a>

> Code samples

```bash
curl 'https://secretsmanager.us-east-1.amazonaws.com/#X-Amz-Target=secretsmanager.ValidateResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: secretsmanager.ValidateResourcePolicy' \
  -d '{
    "SecretId": {},
    "ResourcePolicy": {}
  }'
```

`POST /#X-Amz-Target=secretsmanager.ValidateResourcePolicy`

<p>Validates that a resource policy does not grant a wide range of principals access to your secret. A resource-based policy is optional for secrets.</p> <p>The API performs three checks when validating the policy:</p> <ul> <li> <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your resource policy does not allow broad access to your secret, for example policies that use a wildcard for the principal.</p> </li> <li> <p>Checks for correct syntax in a policy.</p> </li> <li> <p>Verifies the policy does not lock out a caller.</p> </li> </ul> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ValidateResourcePolicy</code> and <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

> Body parameter

```json
{
  "SecretId": {},
  "ResourcePolicy": {}
}
```

<h3 id="validateresourcepolicy-parameters">Parameters</h3>

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
|body|body|[ValidateResourcePolicyRequest](#schemavalidateresourcepolicyrequest)|true|none|
|» SecretId|body|object|false|none|
|» ResourcePolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|secretsmanager.ValidateResourcePolicy|

> Example responses

> 200 Response

```json
{
  "PolicyValidationPassed": true,
  "ValidationErrors": []
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

<h3 id="validateresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ValidateResourcePolicyResponse](#schemavalidateresourcepolicyresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceError|[InternalServiceError](#schemainternalserviceerror)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelRotateSecretResponse">CancelRotateSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelrotatesecretresponse"></a>
<a id="schema_CancelRotateSecretResponse"></a>
<a id="tocScancelrotatesecretresponse"></a>
<a id="tocscancelrotatesecretresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "Name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_CancelRotateSecretRequest">CancelRotateSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelrotatesecretrequest"></a>
<a id="schema_CancelRotateSecretRequest"></a>
<a id="tocScancelrotatesecretrequest"></a>
<a id="tocscancelrotatesecretrequest"></a>

```json
{
  "SecretId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_InternalServiceError">InternalServiceError</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerror"></a>
<a id="schema_InternalServiceError"></a>
<a id="tocSinternalserviceerror"></a>
<a id="tocsinternalserviceerror"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_CreateSecretResponse">CreateSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecretresponse"></a>
<a id="schema_CreateSecretResponse"></a>
<a id="tocScreatesecretresponse"></a>
<a id="tocscreatesecretresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|VersionId|object|false|none|none|
|ReplicationStatus|object|false|none|none|

<h2 id="tocS_CreateSecretRequest">CreateSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecretrequest"></a>
<a id="schema_CreateSecretRequest"></a>
<a id="tocScreatesecretrequest"></a>
<a id="tocscreatesecretrequest"></a>

```json
{
  "Name": {},
  "ClientRequestToken": {},
  "Description": {},
  "KmsKeyId": {},
  "SecretBinary": {},
  "SecretString": {},
  "Tags": {},
  "AddReplicaRegions": {},
  "ForceOverwriteReplicaSecret": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Description|object|false|none|none|
|KmsKeyId|object|false|none|none|
|SecretBinary|object|false|none|none|
|SecretString|object|false|none|none|
|Tags|object|false|none|none|
|AddReplicaRegions|object|false|none|none|
|ForceOverwriteReplicaSecret|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_EncryptionFailure">EncryptionFailure</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionfailure"></a>
<a id="schema_EncryptionFailure"></a>
<a id="tocSencryptionfailure"></a>
<a id="tocsencryptionfailure"></a>

```json
null
```

<h2 id="tocS_ResourceExistsException">ResourceExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceexistsexception"></a>
<a id="schema_ResourceExistsException"></a>
<a id="tocSresourceexistsexception"></a>
<a id="tocsresourceexistsexception"></a>

```json
null
```

<h2 id="tocS_MalformedPolicyDocumentException">MalformedPolicyDocumentException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedpolicydocumentexception"></a>
<a id="schema_MalformedPolicyDocumentException"></a>
<a id="tocSmalformedpolicydocumentexception"></a>
<a id="tocsmalformedpolicydocumentexception"></a>

```json
null
```

<h2 id="tocS_PreconditionNotMetException">PreconditionNotMetException</h2>
<!-- backwards compatibility -->
<a id="schemapreconditionnotmetexception"></a>
<a id="schema_PreconditionNotMetException"></a>
<a id="tocSpreconditionnotmetexception"></a>
<a id="tocspreconditionnotmetexception"></a>

```json
null
```

<h2 id="tocS_DecryptionFailure">DecryptionFailure</h2>
<!-- backwards compatibility -->
<a id="schemadecryptionfailure"></a>
<a id="schema_DecryptionFailure"></a>
<a id="tocSdecryptionfailure"></a>
<a id="tocsdecryptionfailure"></a>

```json
null
```

<h2 id="tocS_DeleteResourcePolicyResponse">DeleteResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresponse"></a>
<a id="schema_DeleteResourcePolicyResponse"></a>
<a id="tocSdeleteresourcepolicyresponse"></a>
<a id="tocsdeleteresourcepolicyresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{
  "SecretId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|

<h2 id="tocS_DeleteSecretResponse">DeleteSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesecretresponse"></a>
<a id="schema_DeleteSecretResponse"></a>
<a id="tocSdeletesecretresponse"></a>
<a id="tocsdeletesecretresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "DeletionDate": "1524085349.095",
  "Name": "MyTestDatabaseSecret"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|DeletionDate|object|false|none|none|

<h2 id="tocS_DeleteSecretRequest">DeleteSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesecretrequest"></a>
<a id="schema_DeleteSecretRequest"></a>
<a id="tocSdeletesecretrequest"></a>
<a id="tocsdeletesecretrequest"></a>

```json
{
  "SecretId": {},
  "RecoveryWindowInDays": {},
  "ForceDeleteWithoutRecovery": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|RecoveryWindowInDays|object|false|none|none|
|ForceDeleteWithoutRecovery|object|false|none|none|

<h2 id="tocS_DescribeSecretResponse">DescribeSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecretresponse"></a>
<a id="schema_DescribeSecretResponse"></a>
<a id="tocSdescribesecretresponse"></a>
<a id="tocsdescribesecretresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Description": "My test database secret",
  "KmsKeyId": "arn:aws:kms:us-west-2:123456789012:key/EXAMPLE1-90ab-cdef-fedc-ba987KMSKEY1",
  "LastAccessedDate": "1523923200",
  "LastChangedDate": 1523477145.729,
  "LastRotatedDate": 1525747253.72,
  "Name": "MyTestDatabaseSecret",
  "NextRotationDate": "1665165599",
  "RotationEnabled": true,
  "RotationLambdaARN": "arn:aws:lambda:us-west-2:123456789012:function:MyTestRotationLambda",
  "RotationRules": {
    "AutomaticallyAfterDays": 14,
    "Duration": "2h",
    "ScheduleExpression": "cron(0 16 1,15 * ? *)"
  },
  "Tags": [
    {
      "Key": "SecondTag",
      "Value": "AnotherValue"
    },
    {
      "Key": "FirstTag",
      "Value": "SomeValue"
    }
  ],
  "VersionIdsToStages": {
    "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE": [
      "AWSPREVIOUS"
    ],
    "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE": [
      "AWSCURRENT"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|KmsKeyId|object|false|none|none|
|RotationEnabled|object|false|none|none|
|RotationLambdaARN|object|false|none|none|
|RotationRules|object|false|none|none|
|LastRotatedDate|object|false|none|none|
|LastChangedDate|object|false|none|none|
|LastAccessedDate|object|false|none|none|
|DeletedDate|object|false|none|none|
|NextRotationDate|object|false|none|none|
|Tags|object|false|none|none|
|VersionIdsToStages|object|false|none|none|
|OwningService|object|false|none|none|
|CreatedDate|object|false|none|none|
|PrimaryRegion|object|false|none|none|
|ReplicationStatus|object|false|none|none|

<h2 id="tocS_DescribeSecretRequest">DescribeSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecretrequest"></a>
<a id="schema_DescribeSecretRequest"></a>
<a id="tocSdescribesecretrequest"></a>
<a id="tocsdescribesecretrequest"></a>

```json
{
  "SecretId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|

<h2 id="tocS_GetRandomPasswordResponse">GetRandomPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrandompasswordresponse"></a>
<a id="schema_GetRandomPasswordResponse"></a>
<a id="tocSgetrandompasswordresponse"></a>
<a id="tocsgetrandompasswordresponse"></a>

```json
{
  "RandomPassword": "EXAMPLE-PASSWORD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RandomPassword|object|false|none|none|

<h2 id="tocS_GetRandomPasswordRequest">GetRandomPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrandompasswordrequest"></a>
<a id="schema_GetRandomPasswordRequest"></a>
<a id="tocSgetrandompasswordrequest"></a>
<a id="tocsgetrandompasswordrequest"></a>

```json
{
  "PasswordLength": {},
  "ExcludeCharacters": {},
  "ExcludeNumbers": {},
  "ExcludePunctuation": {},
  "ExcludeUppercase": {},
  "ExcludeLowercase": {},
  "IncludeSpace": {},
  "RequireEachIncludedType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PasswordLength|object|false|none|none|
|ExcludeCharacters|object|false|none|none|
|ExcludeNumbers|object|false|none|none|
|ExcludePunctuation|object|false|none|none|
|ExcludeUppercase|object|false|none|none|
|ExcludeLowercase|object|false|none|none|
|IncludeSpace|object|false|none|none|
|RequireEachIncludedType|object|false|none|none|

<h2 id="tocS_GetResourcePolicyResponse">GetResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyresponse"></a>
<a id="schema_GetResourcePolicyResponse"></a>
<a id="tocSgetresourcepolicyresponse"></a>
<a id="tocsgetresourcepolicyresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "ResourcePolicy": "{\n\"Version\":\"2012-10-17\",\n\"Statement\":[{\n\"Effect\":\"Allow\",\n\"Principal\":{\n\"AWS\":\"arn:aws:iam::123456789012:root\"\n},\n\"Action\":\"secretsmanager:GetSecretValue\",\n\"Resource\":\"*\"\n}]\n}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|ResourcePolicy|object|false|none|none|

<h2 id="tocS_GetResourcePolicyRequest">GetResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyrequest"></a>
<a id="schema_GetResourcePolicyRequest"></a>
<a id="tocSgetresourcepolicyrequest"></a>
<a id="tocsgetresourcepolicyrequest"></a>

```json
{
  "SecretId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|

<h2 id="tocS_GetSecretValueResponse">GetSecretValueResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsecretvalueresponse"></a>
<a id="schema_GetSecretValueResponse"></a>
<a id="tocSgetsecretvalueresponse"></a>
<a id="tocsgetsecretvalueresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "CreatedDate": 1523477145.713,
  "Name": "MyTestDatabaseSecret",
  "SecretString": "{\n  \"username\":\"david\",\n  \"password\":\"EXAMPLE-PASSWORD\"\n}\n",
  "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1",
  "VersionStages": [
    "AWSPREVIOUS"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|VersionId|object|false|none|none|
|SecretBinary|object|false|none|none|
|SecretString|object|false|none|none|
|VersionStages|object|false|none|none|
|CreatedDate|object|false|none|none|

<h2 id="tocS_GetSecretValueRequest">GetSecretValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsecretvaluerequest"></a>
<a id="schema_GetSecretValueRequest"></a>
<a id="tocSgetsecretvaluerequest"></a>
<a id="tocsgetsecretvaluerequest"></a>

```json
{
  "SecretId": {},
  "VersionId": {},
  "VersionStage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|VersionId|object|false|none|none|
|VersionStage|object|false|none|none|

<h2 id="tocS_ListSecretVersionIdsResponse">ListSecretVersionIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsecretversionidsresponse"></a>
<a id="schema_ListSecretVersionIdsResponse"></a>
<a id="tocSlistsecretversionidsresponse"></a>
<a id="tocslistsecretversionidsresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "Versions": [
    {
      "CreatedDate": 1523477145.713,
      "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE",
      "VersionStages": [
        "AWSPREVIOUS"
      ]
    },
    {
      "CreatedDate": 1523486221.391,
      "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE",
      "VersionStages": [
        "AWSCURRENT"
      ]
    },
    {
      "CreatedDate": 1511974462.36,
      "VersionId": "EXAMPLE3-90ab-cdef-fedc-ba987EXAMPLE;"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Versions|object|false|none|none|
|NextToken|object|false|none|none|
|ARN|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_ListSecretVersionIdsRequest">ListSecretVersionIdsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsecretversionidsrequest"></a>
<a id="schema_ListSecretVersionIdsRequest"></a>
<a id="tocSlistsecretversionidsrequest"></a>
<a id="tocslistsecretversionidsrequest"></a>

```json
{
  "SecretId": {},
  "MaxResults": {},
  "NextToken": {},
  "IncludeDeprecated": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|IncludeDeprecated|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListSecretsResponse">ListSecretsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsecretsresponse"></a>
<a id="schema_ListSecretsResponse"></a>
<a id="tocSlistsecretsresponse"></a>
<a id="tocslistsecretsresponse"></a>

```json
{
  "SecretList": [
    {
      "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
      "Description": "My test database secret",
      "LastChangedDate": 1523477145.729,
      "Name": "MyTestDatabaseSecret",
      "SecretVersionsToStages": {
        "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE": [
          "AWSCURRENT"
        ]
      }
    },
    {
      "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret1-d4e5f6",
      "Description": "Another secret created for a different database",
      "LastChangedDate": 1523482025.685,
      "Name": "MyTestDatabaseSecret1",
      "SecretVersionsToStages": {
        "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE": [
          "AWSCURRENT"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSecretsRequest">ListSecretsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsecretsrequest"></a>
<a id="schema_ListSecretsRequest"></a>
<a id="tocSlistsecretsrequest"></a>
<a id="tocslistsecretsrequest"></a>

```json
{
  "IncludePlannedDeletion": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "SortOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IncludePlannedDeletion|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|
|SortOrder|object|false|none|none|

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "SecretId": {},
  "ResourcePolicy": {},
  "BlockPublicPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|ResourcePolicy|object|true|none|none|
|BlockPublicPolicy|object|false|none|none|

<h2 id="tocS_PublicPolicyException">PublicPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemapublicpolicyexception"></a>
<a id="schema_PublicPolicyException"></a>
<a id="tocSpublicpolicyexception"></a>
<a id="tocspublicpolicyexception"></a>

```json
null
```

<h2 id="tocS_PutSecretValueResponse">PutSecretValueResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputsecretvalueresponse"></a>
<a id="schema_PutSecretValueResponse"></a>
<a id="tocSputsecretvalueresponse"></a>
<a id="tocsputsecretvalueresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE",
  "VersionStages": [
    "AWSCURRENT"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|VersionId|object|false|none|none|
|VersionStages|object|false|none|none|

<h2 id="tocS_PutSecretValueRequest">PutSecretValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsecretvaluerequest"></a>
<a id="schema_PutSecretValueRequest"></a>
<a id="tocSputsecretvaluerequest"></a>
<a id="tocsputsecretvaluerequest"></a>

```json
{
  "SecretId": {},
  "ClientRequestToken": {},
  "SecretBinary": {},
  "SecretString": {},
  "VersionStages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|SecretBinary|object|false|none|none|
|SecretString|object|false|none|none|
|VersionStages|object|false|none|none|

<h2 id="tocS_RemoveRegionsFromReplicationResponse">RemoveRegionsFromReplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveregionsfromreplicationresponse"></a>
<a id="schema_RemoveRegionsFromReplicationResponse"></a>
<a id="tocSremoveregionsfromreplicationresponse"></a>
<a id="tocsremoveregionsfromreplicationresponse"></a>

```json
{
  "ARN": {},
  "ReplicationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|ReplicationStatus|object|false|none|none|

<h2 id="tocS_RemoveRegionsFromReplicationRequest">RemoveRegionsFromReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveregionsfromreplicationrequest"></a>
<a id="schema_RemoveRegionsFromReplicationRequest"></a>
<a id="tocSremoveregionsfromreplicationrequest"></a>
<a id="tocsremoveregionsfromreplicationrequest"></a>

```json
{
  "SecretId": {},
  "RemoveReplicaRegions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|RemoveReplicaRegions|object|true|none|none|

<h2 id="tocS_ReplicateSecretToRegionsResponse">ReplicateSecretToRegionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplicatesecrettoregionsresponse"></a>
<a id="schema_ReplicateSecretToRegionsResponse"></a>
<a id="tocSreplicatesecrettoregionsresponse"></a>
<a id="tocsreplicatesecrettoregionsresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestSecret-1a2b3c",
  "ReplicationStatus": [
    {
      "KmsKeyId": "alias/aws/secretsmanager",
      "Region": "eu-west-3",
      "Status": "InProgress"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|ReplicationStatus|object|false|none|none|

<h2 id="tocS_ReplicateSecretToRegionsRequest">ReplicateSecretToRegionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplicatesecrettoregionsrequest"></a>
<a id="schema_ReplicateSecretToRegionsRequest"></a>
<a id="tocSreplicatesecrettoregionsrequest"></a>
<a id="tocsreplicatesecrettoregionsrequest"></a>

```json
{
  "SecretId": {},
  "AddReplicaRegions": {},
  "ForceOverwriteReplicaSecret": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|AddReplicaRegions|object|true|none|none|
|ForceOverwriteReplicaSecret|object|false|none|none|

<h2 id="tocS_RestoreSecretResponse">RestoreSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestoresecretresponse"></a>
<a id="schema_RestoreSecretResponse"></a>
<a id="tocSrestoresecretresponse"></a>
<a id="tocsrestoresecretresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_RestoreSecretRequest">RestoreSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoresecretrequest"></a>
<a id="schema_RestoreSecretRequest"></a>
<a id="tocSrestoresecretrequest"></a>
<a id="tocsrestoresecretrequest"></a>

```json
{
  "SecretId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|

<h2 id="tocS_RotateSecretResponse">RotateSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemarotatesecretresponse"></a>
<a id="schema_RotateSecretResponse"></a>
<a id="tocSrotatesecretresponse"></a>
<a id="tocsrotatesecretresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987SECRET2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_RotateSecretRequest">RotateSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemarotatesecretrequest"></a>
<a id="schema_RotateSecretRequest"></a>
<a id="tocSrotatesecretrequest"></a>
<a id="tocsrotatesecretrequest"></a>

```json
{
  "SecretId": {},
  "ClientRequestToken": {},
  "RotationLambdaARN": {},
  "RotationRules": {
    "AutomaticallyAfterDays": {},
    "Duration": {},
    "ScheduleExpression": {}
  },
  "RotateImmediately": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|RotationLambdaARN|object|false|none|none|
|RotationRules|object|false|none|none|
|RotateImmediately|object|false|none|none|

<h2 id="tocS_StopReplicationToReplicaResponse">StopReplicationToReplicaResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopreplicationtoreplicaresponse"></a>
<a id="schema_StopReplicationToReplicaResponse"></a>
<a id="tocSstopreplicationtoreplicaresponse"></a>
<a id="tocsstopreplicationtoreplicaresponse"></a>

```json
{
  "ARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|

<h2 id="tocS_StopReplicationToReplicaRequest">StopReplicationToReplicaRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopreplicationtoreplicarequest"></a>
<a id="schema_StopReplicationToReplicaRequest"></a>
<a id="tocSstopreplicationtoreplicarequest"></a>
<a id="tocsstopreplicationtoreplicarequest"></a>

```json
{
  "SecretId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "SecretId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "SecretId": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateSecretResponse">UpdateSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecretresponse"></a>
<a id="schema_UpdateSecretResponse"></a>
<a id="tocSupdatesecretresponse"></a>
<a id="tocsupdatesecretresponse"></a>

```json
{
  "ARN": "aws:arn:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret",
  "VersionId": "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_UpdateSecretRequest">UpdateSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecretrequest"></a>
<a id="schema_UpdateSecretRequest"></a>
<a id="tocSupdatesecretrequest"></a>
<a id="tocsupdatesecretrequest"></a>

```json
{
  "SecretId": {},
  "ClientRequestToken": {},
  "Description": {},
  "KmsKeyId": {},
  "SecretBinary": {},
  "SecretString": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Description|object|false|none|none|
|KmsKeyId|object|false|none|none|
|SecretBinary|object|false|none|none|
|SecretString|object|false|none|none|

<h2 id="tocS_UpdateSecretVersionStageResponse">UpdateSecretVersionStageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecretversionstageresponse"></a>
<a id="schema_UpdateSecretVersionStageResponse"></a>
<a id="tocSupdatesecretversionstageresponse"></a>
<a id="tocsupdatesecretversionstageresponse"></a>

```json
{
  "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
  "Name": "MyTestDatabaseSecret"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateSecretVersionStageRequest">UpdateSecretVersionStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecretversionstagerequest"></a>
<a id="schema_UpdateSecretVersionStageRequest"></a>
<a id="tocSupdatesecretversionstagerequest"></a>
<a id="tocsupdatesecretversionstagerequest"></a>

```json
{
  "SecretId": {},
  "VersionStage": {},
  "RemoveFromVersionId": {},
  "MoveToVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|true|none|none|
|VersionStage|object|true|none|none|
|RemoveFromVersionId|object|false|none|none|
|MoveToVersionId|object|false|none|none|

<h2 id="tocS_ValidateResourcePolicyResponse">ValidateResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidateresourcepolicyresponse"></a>
<a id="schema_ValidateResourcePolicyResponse"></a>
<a id="tocSvalidateresourcepolicyresponse"></a>
<a id="tocsvalidateresourcepolicyresponse"></a>

```json
{
  "PolicyValidationPassed": true,
  "ValidationErrors": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyValidationPassed|object|false|none|none|
|ValidationErrors|object|false|none|none|

<h2 id="tocS_ValidateResourcePolicyRequest">ValidateResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidateresourcepolicyrequest"></a>
<a id="schema_ValidateResourcePolicyRequest"></a>
<a id="tocSvalidateresourcepolicyrequest"></a>
<a id="tocsvalidateresourcepolicyrequest"></a>

```json
{
  "SecretId": {},
  "ResourcePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretId|object|false|none|none|
|ResourcePolicy|object|true|none|none|

<h2 id="tocS_ReplicaRegionType">ReplicaRegionType</h2>
<!-- backwards compatibility -->
<a id="schemareplicaregiontype"></a>
<a id="schema_ReplicaRegionType"></a>
<a id="tocSreplicaregiontype"></a>
<a id="tocsreplicaregiontype"></a>

```json
{
  "Region": {},
  "KmsKeyId": {}
}
```

A custom type that specifies a <code>Region</code> and the <code>KmsKeyId</code> for a replica secret.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_AddReplicaRegionListType">AddReplicaRegionListType</h2>
<!-- backwards compatibility -->
<a id="schemaaddreplicaregionlisttype"></a>
<a id="schema_AddReplicaRegionListType"></a>
<a id="tocSaddreplicaregionlisttype"></a>
<a id="tocsaddreplicaregionlisttype"></a>

```json
[
  {
    "Region": {},
    "KmsKeyId": {}
  }
]
```

<h2 id="tocS_AutomaticallyRotateAfterDaysType">AutomaticallyRotateAfterDaysType</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticallyrotateafterdaystype"></a>
<a id="schema_AutomaticallyRotateAfterDaysType"></a>
<a id="tocSautomaticallyrotateafterdaystype"></a>
<a id="tocsautomaticallyrotateafterdaystype"></a>

```json
1
```

<h2 id="tocS_BooleanType">BooleanType</h2>
<!-- backwards compatibility -->
<a id="schemabooleantype"></a>
<a id="schema_BooleanType"></a>
<a id="tocSbooleantype"></a>
<a id="tocsbooleantype"></a>

```json
true
```

<h2 id="tocS_SecretIdType">SecretIdType</h2>
<!-- backwards compatibility -->
<a id="schemasecretidtype"></a>
<a id="schema_SecretIdType"></a>
<a id="tocSsecretidtype"></a>
<a id="tocssecretidtype"></a>

```json
"string"
```

<h2 id="tocS_SecretARNType">SecretARNType</h2>
<!-- backwards compatibility -->
<a id="schemasecretarntype"></a>
<a id="schema_SecretARNType"></a>
<a id="tocSsecretarntype"></a>
<a id="tocssecretarntype"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_SecretNameType">SecretNameType</h2>
<!-- backwards compatibility -->
<a id="schemasecretnametype"></a>
<a id="schema_SecretNameType"></a>
<a id="tocSsecretnametype"></a>
<a id="tocssecretnametype"></a>

```json
"string"
```

<h2 id="tocS_SecretVersionIdType">SecretVersionIdType</h2>
<!-- backwards compatibility -->
<a id="schemasecretversionidtype"></a>
<a id="schema_SecretVersionIdType"></a>
<a id="tocSsecretversionidtype"></a>
<a id="tocssecretversionidtype"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_ClientRequestTokenType">ClientRequestTokenType</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttokentype"></a>
<a id="schema_ClientRequestTokenType"></a>
<a id="tocSclientrequesttokentype"></a>
<a id="tocsclientrequesttokentype"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_NameType">NameType</h2>
<!-- backwards compatibility -->
<a id="schemanametype"></a>
<a id="schema_NameType"></a>
<a id="tocSnametype"></a>
<a id="tocsnametype"></a>

```json
"string"
```

<h2 id="tocS_DescriptionType">DescriptionType</h2>
<!-- backwards compatibility -->
<a id="schemadescriptiontype"></a>
<a id="schema_DescriptionType"></a>
<a id="tocSdescriptiontype"></a>
<a id="tocsdescriptiontype"></a>

```json
"string"
```

<h2 id="tocS_KmsKeyIdType">KmsKeyIdType</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyidtype"></a>
<a id="schema_KmsKeyIdType"></a>
<a id="tocSkmskeyidtype"></a>
<a id="tocskmskeyidtype"></a>

```json
"string"
```

<h2 id="tocS_SecretBinaryType">SecretBinaryType</h2>
<!-- backwards compatibility -->
<a id="schemasecretbinarytype"></a>
<a id="schema_SecretBinaryType"></a>
<a id="tocSsecretbinarytype"></a>
<a id="tocssecretbinarytype"></a>

```json
"password"
```

<h2 id="tocS_SecretStringType">SecretStringType</h2>
<!-- backwards compatibility -->
<a id="schemasecretstringtype"></a>
<a id="schema_SecretStringType"></a>
<a id="tocSsecretstringtype"></a>
<a id="tocssecretstringtype"></a>

```json
"password"
```

<h2 id="tocS_TagListType">TagListType</h2>
<!-- backwards compatibility -->
<a id="schemataglisttype"></a>
<a id="schema_TagListType"></a>
<a id="tocStaglisttype"></a>
<a id="tocstaglisttype"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ReplicationStatusListType">ReplicationStatusListType</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstatuslisttype"></a>
<a id="schema_ReplicationStatusListType"></a>
<a id="tocSreplicationstatuslisttype"></a>
<a id="tocsreplicationstatuslisttype"></a>

```json
[
  {
    "Region": {},
    "KmsKeyId": {},
    "Status": {},
    "StatusMessage": {},
    "LastAccessedDate": {}
  }
]
```

<h2 id="tocS_CreatedDateType">CreatedDateType</h2>
<!-- backwards compatibility -->
<a id="schemacreateddatetype"></a>
<a id="schema_CreatedDateType"></a>
<a id="tocScreateddatetype"></a>
<a id="tocscreateddatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RecoveryWindowInDaysType">RecoveryWindowInDaysType</h2>
<!-- backwards compatibility -->
<a id="schemarecoverywindowindaystype"></a>
<a id="schema_RecoveryWindowInDaysType"></a>
<a id="tocSrecoverywindowindaystype"></a>
<a id="tocsrecoverywindowindaystype"></a>

```json
0
```

<h2 id="tocS_DeletionDateType">DeletionDateType</h2>
<!-- backwards compatibility -->
<a id="schemadeletiondatetype"></a>
<a id="schema_DeletionDateType"></a>
<a id="tocSdeletiondatetype"></a>
<a id="tocsdeletiondatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeletedDateType">DeletedDateType</h2>
<!-- backwards compatibility -->
<a id="schemadeleteddatetype"></a>
<a id="schema_DeletedDateType"></a>
<a id="tocSdeleteddatetype"></a>
<a id="tocsdeleteddatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RotationEnabledType">RotationEnabledType</h2>
<!-- backwards compatibility -->
<a id="schemarotationenabledtype"></a>
<a id="schema_RotationEnabledType"></a>
<a id="tocSrotationenabledtype"></a>
<a id="tocsrotationenabledtype"></a>

```json
true
```

<h2 id="tocS_RotationLambdaARNType">RotationLambdaARNType</h2>
<!-- backwards compatibility -->
<a id="schemarotationlambdaarntype"></a>
<a id="schema_RotationLambdaARNType"></a>
<a id="tocSrotationlambdaarntype"></a>
<a id="tocsrotationlambdaarntype"></a>

```json
"string"
```

<h2 id="tocS_RotationRulesType">RotationRulesType</h2>
<!-- backwards compatibility -->
<a id="schemarotationrulestype"></a>
<a id="schema_RotationRulesType"></a>
<a id="tocSrotationrulestype"></a>
<a id="tocsrotationrulestype"></a>

```json
{
  "AutomaticallyAfterDays": {},
  "Duration": {},
  "ScheduleExpression": {}
}
```

A structure that defines the rotation configuration for the secret.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticallyAfterDays|object|false|none|none|
|Duration|object|false|none|none|
|ScheduleExpression|object|false|none|none|

<h2 id="tocS_LastRotatedDateType">LastRotatedDateType</h2>
<!-- backwards compatibility -->
<a id="schemalastrotateddatetype"></a>
<a id="schema_LastRotatedDateType"></a>
<a id="tocSlastrotateddatetype"></a>
<a id="tocslastrotateddatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastChangedDateType">LastChangedDateType</h2>
<!-- backwards compatibility -->
<a id="schemalastchangeddatetype"></a>
<a id="schema_LastChangedDateType"></a>
<a id="tocSlastchangeddatetype"></a>
<a id="tocslastchangeddatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastAccessedDateType">LastAccessedDateType</h2>
<!-- backwards compatibility -->
<a id="schemalastaccesseddatetype"></a>
<a id="schema_LastAccessedDateType"></a>
<a id="tocSlastaccesseddatetype"></a>
<a id="tocslastaccesseddatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_NextRotationDateType">NextRotationDateType</h2>
<!-- backwards compatibility -->
<a id="schemanextrotationdatetype"></a>
<a id="schema_NextRotationDateType"></a>
<a id="tocSnextrotationdatetype"></a>
<a id="tocsnextrotationdatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SecretVersionsToStagesMapType">SecretVersionsToStagesMapType</h2>
<!-- backwards compatibility -->
<a id="schemasecretversionstostagesmaptype"></a>
<a id="schema_SecretVersionsToStagesMapType"></a>
<a id="tocSsecretversionstostagesmaptype"></a>
<a id="tocssecretversionstostagesmaptype"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SecretVersionStagesType](#schemasecretversionstagestype)|false|none|none|

<h2 id="tocS_OwningServiceType">OwningServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaowningservicetype"></a>
<a id="schema_OwningServiceType"></a>
<a id="tocSowningservicetype"></a>
<a id="tocsowningservicetype"></a>

```json
"string"
```

<h2 id="tocS_TimestampType">TimestampType</h2>
<!-- backwards compatibility -->
<a id="schematimestamptype"></a>
<a id="schema_TimestampType"></a>
<a id="tocStimestamptype"></a>
<a id="tocstimestamptype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RegionType">RegionType</h2>
<!-- backwards compatibility -->
<a id="schemaregiontype"></a>
<a id="schema_RegionType"></a>
<a id="tocSregiontype"></a>
<a id="tocsregiontype"></a>

```json
"string"
```

<h2 id="tocS_DurationType">DurationType</h2>
<!-- backwards compatibility -->
<a id="schemadurationtype"></a>
<a id="schema_DurationType"></a>
<a id="tocSdurationtype"></a>
<a id="tocsdurationtype"></a>

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

<h2 id="tocS_ExcludeCharactersType">ExcludeCharactersType</h2>
<!-- backwards compatibility -->
<a id="schemaexcludecharacterstype"></a>
<a id="schema_ExcludeCharactersType"></a>
<a id="tocSexcludecharacterstype"></a>
<a id="tocsexcludecharacterstype"></a>

```json
"string"
```

<h2 id="tocS_ExcludeLowercaseType">ExcludeLowercaseType</h2>
<!-- backwards compatibility -->
<a id="schemaexcludelowercasetype"></a>
<a id="schema_ExcludeLowercaseType"></a>
<a id="tocSexcludelowercasetype"></a>
<a id="tocsexcludelowercasetype"></a>

```json
true
```

<h2 id="tocS_ExcludeNumbersType">ExcludeNumbersType</h2>
<!-- backwards compatibility -->
<a id="schemaexcludenumberstype"></a>
<a id="schema_ExcludeNumbersType"></a>
<a id="tocSexcludenumberstype"></a>
<a id="tocsexcludenumberstype"></a>

```json
true
```

<h2 id="tocS_ExcludePunctuationType">ExcludePunctuationType</h2>
<!-- backwards compatibility -->
<a id="schemaexcludepunctuationtype"></a>
<a id="schema_ExcludePunctuationType"></a>
<a id="tocSexcludepunctuationtype"></a>
<a id="tocsexcludepunctuationtype"></a>

```json
true
```

<h2 id="tocS_ExcludeUppercaseType">ExcludeUppercaseType</h2>
<!-- backwards compatibility -->
<a id="schemaexcludeuppercasetype"></a>
<a id="schema_ExcludeUppercaseType"></a>
<a id="tocSexcludeuppercasetype"></a>
<a id="tocsexcludeuppercasetype"></a>

```json
true
```

<h2 id="tocS_FilterNameStringType">FilterNameStringType</h2>
<!-- backwards compatibility -->
<a id="schemafilternamestringtype"></a>
<a id="schema_FilterNameStringType"></a>
<a id="tocSfilternamestringtype"></a>
<a id="tocsfilternamestringtype"></a>

```json
"description"
```

<h2 id="tocS_FilterValuesStringList">FilterValuesStringList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluesstringlist"></a>
<a id="schema_FilterValuesStringList"></a>
<a id="tocSfiltervaluesstringlist"></a>
<a id="tocsfiltervaluesstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

Allows you to add filters when you use the search function in Secrets Manager. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_FilterValueStringType">FilterValueStringType</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluestringtype"></a>
<a id="schema_FilterValueStringType"></a>
<a id="tocSfiltervaluestringtype"></a>
<a id="tocsfiltervaluestringtype"></a>

```json
"string"
```

<h2 id="tocS_FiltersListType">FiltersListType</h2>
<!-- backwards compatibility -->
<a id="schemafilterslisttype"></a>
<a id="schema_FiltersListType"></a>
<a id="tocSfilterslisttype"></a>
<a id="tocsfilterslisttype"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_PasswordLengthType">PasswordLengthType</h2>
<!-- backwards compatibility -->
<a id="schemapasswordlengthtype"></a>
<a id="schema_PasswordLengthType"></a>
<a id="tocSpasswordlengthtype"></a>
<a id="tocspasswordlengthtype"></a>

```json
1
```

<h2 id="tocS_IncludeSpaceType">IncludeSpaceType</h2>
<!-- backwards compatibility -->
<a id="schemaincludespacetype"></a>
<a id="schema_IncludeSpaceType"></a>
<a id="tocSincludespacetype"></a>
<a id="tocsincludespacetype"></a>

```json
true
```

<h2 id="tocS_RequireEachIncludedTypeType">RequireEachIncludedTypeType</h2>
<!-- backwards compatibility -->
<a id="schemarequireeachincludedtypetype"></a>
<a id="schema_RequireEachIncludedTypeType"></a>
<a id="tocSrequireeachincludedtypetype"></a>
<a id="tocsrequireeachincludedtypetype"></a>

```json
true
```

<h2 id="tocS_RandomPasswordType">RandomPasswordType</h2>
<!-- backwards compatibility -->
<a id="schemarandompasswordtype"></a>
<a id="schema_RandomPasswordType"></a>
<a id="tocSrandompasswordtype"></a>
<a id="tocsrandompasswordtype"></a>

```json
"password"
```

<h2 id="tocS_NonEmptyResourcePolicyType">NonEmptyResourcePolicyType</h2>
<!-- backwards compatibility -->
<a id="schemanonemptyresourcepolicytype"></a>
<a id="schema_NonEmptyResourcePolicyType"></a>
<a id="tocSnonemptyresourcepolicytype"></a>
<a id="tocsnonemptyresourcepolicytype"></a>

```json
"string"
```

<h2 id="tocS_SecretVersionStageType">SecretVersionStageType</h2>
<!-- backwards compatibility -->
<a id="schemasecretversionstagetype"></a>
<a id="schema_SecretVersionStageType"></a>
<a id="tocSsecretversionstagetype"></a>
<a id="tocssecretversionstagetype"></a>

```json
"string"
```

<h2 id="tocS_SecretVersionStagesType">SecretVersionStagesType</h2>
<!-- backwards compatibility -->
<a id="schemasecretversionstagestype"></a>
<a id="schema_SecretVersionStagesType"></a>
<a id="tocSsecretversionstagestype"></a>
<a id="tocssecretversionstagestype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_KmsKeyIdListType">KmsKeyIdListType</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyidlisttype"></a>
<a id="schema_KmsKeyIdListType"></a>
<a id="tocSkmskeyidlisttype"></a>
<a id="tocskmskeyidlisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaxResultsType">MaxResultsType</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultstype"></a>
<a id="schema_MaxResultsType"></a>
<a id="tocSmaxresultstype"></a>
<a id="tocsmaxresultstype"></a>

```json
1
```

<h2 id="tocS_NextTokenType">NextTokenType</h2>
<!-- backwards compatibility -->
<a id="schemanexttokentype"></a>
<a id="schema_NextTokenType"></a>
<a id="tocSnexttokentype"></a>
<a id="tocsnexttokentype"></a>

```json
"string"
```

<h2 id="tocS_SecretVersionsListType">SecretVersionsListType</h2>
<!-- backwards compatibility -->
<a id="schemasecretversionslisttype"></a>
<a id="schema_SecretVersionsListType"></a>
<a id="tocSsecretversionslisttype"></a>
<a id="tocssecretversionslisttype"></a>

```json
[
  {
    "VersionId": {},
    "VersionStages": {},
    "LastAccessedDate": {},
    "CreatedDate": {},
    "KmsKeyIds": {}
  }
]
```

<h2 id="tocS_SortOrderType">SortOrderType</h2>
<!-- backwards compatibility -->
<a id="schemasortordertype"></a>
<a id="schema_SortOrderType"></a>
<a id="tocSsortordertype"></a>
<a id="tocssortordertype"></a>

```json
"asc"
```

<h2 id="tocS_SecretListType">SecretListType</h2>
<!-- backwards compatibility -->
<a id="schemasecretlisttype"></a>
<a id="schema_SecretListType"></a>
<a id="tocSsecretlisttype"></a>
<a id="tocssecretlisttype"></a>

```json
[
  {
    "ARN": {},
    "Name": {},
    "Description": {},
    "KmsKeyId": {},
    "RotationEnabled": {},
    "RotationLambdaARN": {},
    "RotationRules": {
      "AutomaticallyAfterDays": {},
      "Duration": {},
      "ScheduleExpression": {}
    },
    "LastRotatedDate": {},
    "LastChangedDate": {},
    "LastAccessedDate": {},
    "DeletedDate": {},
    "NextRotationDate": {},
    "Tags": {},
    "SecretVersionsToStages": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "OwningService": {},
    "CreatedDate": {},
    "PrimaryRegion": {}
  }
]
```

<h2 id="tocS_RemoveReplicaRegionListType">RemoveReplicaRegionListType</h2>
<!-- backwards compatibility -->
<a id="schemaremovereplicaregionlisttype"></a>
<a id="schema_RemoveReplicaRegionListType"></a>
<a id="tocSremovereplicaregionlisttype"></a>
<a id="tocsremovereplicaregionlisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationStatusType">ReplicationStatusType</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstatustype"></a>
<a id="schema_ReplicationStatusType"></a>
<a id="tocSreplicationstatustype"></a>
<a id="tocsreplicationstatustype"></a>

```json
{
  "Region": {},
  "KmsKeyId": {},
  "Status": {},
  "StatusMessage": {},
  "LastAccessedDate": {}
}
```

A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|false|none|none|
|KmsKeyId|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|LastAccessedDate|object|false|none|none|

<h2 id="tocS_StatusType">StatusType</h2>
<!-- backwards compatibility -->
<a id="schemastatustype"></a>
<a id="schema_StatusType"></a>
<a id="tocSstatustype"></a>
<a id="tocsstatustype"></a>

```json
"InSync"
```

<h2 id="tocS_StatusMessageType">StatusMessageType</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessagetype"></a>
<a id="schema_StatusMessageType"></a>
<a id="tocSstatusmessagetype"></a>
<a id="tocsstatusmessagetype"></a>

```json
"string"
```

<h2 id="tocS_ScheduleExpressionType">ScheduleExpressionType</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpressiontype"></a>
<a id="schema_ScheduleExpressionType"></a>
<a id="tocSscheduleexpressiontype"></a>
<a id="tocsscheduleexpressiontype"></a>

```json
"string"
```

<h2 id="tocS_SecretListEntry">SecretListEntry</h2>
<!-- backwards compatibility -->
<a id="schemasecretlistentry"></a>
<a id="schema_SecretListEntry"></a>
<a id="tocSsecretlistentry"></a>
<a id="tocssecretlistentry"></a>

```json
{
  "ARN": {},
  "Name": {},
  "Description": {},
  "KmsKeyId": {},
  "RotationEnabled": {},
  "RotationLambdaARN": {},
  "RotationRules": {
    "AutomaticallyAfterDays": {},
    "Duration": {},
    "ScheduleExpression": {}
  },
  "LastRotatedDate": {},
  "LastChangedDate": {},
  "LastAccessedDate": {},
  "DeletedDate": {},
  "NextRotationDate": {},
  "Tags": {},
  "SecretVersionsToStages": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "OwningService": {},
  "CreatedDate": {},
  "PrimaryRegion": {}
}
```

A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html">GetSecretValue</a> .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|KmsKeyId|object|false|none|none|
|RotationEnabled|object|false|none|none|
|RotationLambdaARN|object|false|none|none|
|RotationRules|object|false|none|none|
|LastRotatedDate|object|false|none|none|
|LastChangedDate|object|false|none|none|
|LastAccessedDate|object|false|none|none|
|DeletedDate|object|false|none|none|
|NextRotationDate|object|false|none|none|
|Tags|object|false|none|none|
|SecretVersionsToStages|object|false|none|none|
|OwningService|object|false|none|none|
|CreatedDate|object|false|none|none|
|PrimaryRegion|object|false|none|none|

<h2 id="tocS_SecretVersionsListEntry">SecretVersionsListEntry</h2>
<!-- backwards compatibility -->
<a id="schemasecretversionslistentry"></a>
<a id="schema_SecretVersionsListEntry"></a>
<a id="tocSsecretversionslistentry"></a>
<a id="tocssecretversionslistentry"></a>

```json
{
  "VersionId": {},
  "VersionStages": {},
  "LastAccessedDate": {},
  "CreatedDate": {},
  "KmsKeyIds": {}
}
```

A structure that contains information about one version of a secret.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VersionId|object|false|none|none|
|VersionStages|object|false|none|none|
|LastAccessedDate|object|false|none|none|
|CreatedDate|object|false|none|none|
|KmsKeyIds|object|false|none|none|

<h2 id="tocS_TagKeyType">TagKeyType</h2>
<!-- backwards compatibility -->
<a id="schematagkeytype"></a>
<a id="schema_TagKeyType"></a>
<a id="tocStagkeytype"></a>
<a id="tocstagkeytype"></a>

```json
"string"
```

<h2 id="tocS_TagValueType">TagValueType</h2>
<!-- backwards compatibility -->
<a id="schematagvaluetype"></a>
<a id="schema_TagValueType"></a>
<a id="tocStagvaluetype"></a>
<a id="tocstagvaluetype"></a>

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

A structure that contains information about a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TagKeyListType">TagKeyListType</h2>
<!-- backwards compatibility -->
<a id="schematagkeylisttype"></a>
<a id="schema_TagKeyListType"></a>
<a id="tocStagkeylisttype"></a>
<a id="tocstagkeylisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ValidationErrorsType">ValidationErrorsType</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrorstype"></a>
<a id="schema_ValidationErrorsType"></a>
<a id="tocSvalidationerrorstype"></a>
<a id="tocsvalidationerrorstype"></a>

```json
[
  {
    "CheckName": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ValidationErrorsEntry">ValidationErrorsEntry</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrorsentry"></a>
<a id="schema_ValidationErrorsEntry"></a>
<a id="tocSvalidationerrorsentry"></a>
<a id="tocsvalidationerrorsentry"></a>

```json
{
  "CheckName": {},
  "ErrorMessage": {}
}
```

Displays errors that occurred during validation of the resource policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckName|object|false|none|none|
|ErrorMessage|object|false|none|none|
