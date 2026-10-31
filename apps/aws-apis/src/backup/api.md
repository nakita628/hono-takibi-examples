<h1 id="aws-backup">AWS Backup v2018-11-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Backup</fullname> <p>Backup is a unified backup service designed to protect Amazon Web Services services and their associated data. Backup simplifies the creation, migration, restoration, and deletion of backups, while also providing reporting and auditing.</p>

Base URLs:

* <a href="http://backup.us-east-1.amazonaws.com">http://backup.us-east-1.amazonaws.com</a> - The AWS Backup multi-region endpoint

* <a href="https://backup.us-east-1.amazonaws.com">https://backup.us-east-1.amazonaws.com</a> - The AWS Backup multi-region endpoint

* <a href="http://backup.cn-north-1.amazonaws.com.cn">http://backup.cn-north-1.amazonaws.com.cn</a> - The AWS Backup endpoint for China (Beijing) and China (Ningxia)

* <a href="https://backup.cn-north-1.amazonaws.com.cn">https://backup.cn-north-1.amazonaws.com.cn</a> - The AWS Backup endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/backup/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-backup-default">Default</h1>

## CancelLegalHold

<a id="opIdCancelLegalHold"></a>

> Code samples

```bash
curl 'https://backup.us-east-1.amazonaws.com/legal-holds/string#cancelDescription?cancelDescription=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /legal-holds/{legalHoldId}#cancelDescription`

This action removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions.

<h3 id="cancellegalhold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legalHoldId|path|string|true|Legal hold ID required to remove the specified legal hold on a recovery point.|
|cancelDescription|query|string|true|String describing the reason for removing the legal hold.|
|retainRecordInDays|query|integer|false|The integer amount in days specifying amount of days after this API operation to remove legal hold.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 201 Response

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

<h3 id="cancellegalhold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CancelLegalHoldOutput](#schemacancellegalholdoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackupPlans

<a id="opIdListBackupPlans"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/plans/`

Returns a list of all active backup plans for an authenticated account. The list contains information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.

<h3 id="listbackupplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|includeDeleted|query|boolean|false|A Boolean value with a default value of <code>FALSE</code> that returns deleted backup plans when set to <code>TRUE</code>.|
|MaxResults|query|string|false|Pagination limit|
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
  "BackupPlansList": {}
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

<h3 id="listbackupplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackupPlansOutput](#schemalistbackupplansoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackupPlan

<a id="opIdCreateBackupPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BackupPlan": {
      "BackupPlanName": {},
      "Rules": {},
      "AdvancedBackupSettings": {}
    },
    "BackupPlanTags": {
      "property1": "string",
      "property2": "string"
    },
    "CreatorRequestId": "string"
  }'
```

`PUT /backup/plans/`

<p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a document that contains information that Backup uses to schedule tasks that create recovery points for resources.</p> <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>

> Body parameter

```json
{
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  },
  "BackupPlanTags": {
    "property1": "string",
    "property2": "string"
  },
  "CreatorRequestId": "string"
}
```

<h3 id="createbackupplan-parameters">Parameters</h3>

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
|» BackupPlan|body|object|true|Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task. |
|» » BackupPlanName|body|object|false|none|
|» » Rules|body|object|false|none|
|» » AdvancedBackupSettings|body|object|false|none|
|» BackupPlanTags|body|object|false|To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» CreatorRequestId|body|string|false|<p>Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>|

> Example responses

> 200 Response

```json
{
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "CreationDate": {},
  "VersionId": {},
  "AdvancedBackupSettings": {}
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

<h3 id="createbackupplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackupPlanOutput](#schemacreatebackupplanoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackupSelections

<a id="opIdListBackupSelections"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string/selections/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/plans/{backupPlanId}/selections/`

Returns an array containing metadata of the resources associated with the target backup plan.

<h3 id="listbackupselections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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
  "BackupSelectionsList": {}
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

<h3 id="listbackupselections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackupSelectionsOutput](#schemalistbackupselectionsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackupSelection

<a id="opIdCreateBackupSelection"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string/selections/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BackupSelection": {
      "SelectionName": {},
      "IamRoleArn": {},
      "Resources": {},
      "ListOfTags": {},
      "NotResources": {},
      "Conditions": {
        "StringEquals": {},
        "StringNotEquals": {},
        "StringLike": {},
        "StringNotLike": {}
      }
    },
    "CreatorRequestId": "string"
  }'
```

`PUT /backup/plans/{backupPlanId}/selections/`

Creates a JSON document that specifies a set of resources to assign to a backup plan. For examples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json">Assigning resources programmatically</a>. 

> Body parameter

```json
{
  "BackupSelection": {
    "SelectionName": {},
    "IamRoleArn": {},
    "Resources": {},
    "ListOfTags": {},
    "NotResources": {},
    "Conditions": {
      "StringEquals": {},
      "StringNotEquals": {},
      "StringLike": {},
      "StringNotLike": {}
    }
  },
  "CreatorRequestId": "string"
}
```

<h3 id="createbackupselection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies the backup plan to be associated with the selection of resources.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BackupSelection|body|object|true|<p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p>|
|» » SelectionName|body|object|false|none|
|» » IamRoleArn|body|object|false|none|
|» » Resources|body|object|false|none|
|» » ListOfTags|body|object|false|none|
|» » NotResources|body|object|false|none|
|» » Conditions|body|object|false|none|
|» » » StringEquals|body|object|false|none|
|» » » StringNotEquals|body|object|false|none|
|» » » StringLike|body|object|false|none|
|» » » StringNotLike|body|object|false|none|
|» CreatorRequestId|body|string|false|<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>|

> Example responses

> 200 Response

```json
{
  "SelectionId": {},
  "BackupPlanId": {},
  "CreationDate": {}
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

<h3 id="createbackupselection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackupSelectionOutput](#schemacreatebackupselectionoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBackupVault

<a id="opIdDescribeBackupVault"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-vaults/{backupVaultName}`

Returns metadata about a backup vault specified by its name.

<h3 id="describebackupvault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
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
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "EncryptionKeyArn": {},
  "CreationDate": {},
  "CreatorRequestId": {},
  "NumberOfRecoveryPoints": {},
  "Locked": {},
  "MinRetentionDays": {},
  "MaxRetentionDays": {},
  "LockDate": {}
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

<h3 id="describebackupvault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBackupVaultOutput](#schemadescribebackupvaultoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackupVault

<a id="opIdCreateBackupVault"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BackupVaultTags": {
      "property1": "string",
      "property2": "string"
    },
    "EncryptionKeyArn": "string",
    "CreatorRequestId": "string"
  }'
```

`PUT /backup-vaults/{backupVaultName}`

<p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code> request includes a name, optionally one or more resource tags, an encryption key, and a request ID.</p> <note> <p>Do not include sensitive data, such as passport numbers, in the name of a backup vault.</p> </note>

> Body parameter

```json
{
  "BackupVaultTags": {
    "property1": "string",
    "property2": "string"
  },
  "EncryptionKeyArn": "string",
  "CreatorRequestId": "string"
}
```

<h3 id="createbackupvault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of letters, numbers, and hyphens.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BackupVaultTags|body|object|false|Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» EncryptionKeyArn|body|string|false|The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.|
|» CreatorRequestId|body|string|false|<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>|

> Example responses

> 200 Response

```json
{
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "CreationDate": {}
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

<h3 id="createbackupvault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackupVaultOutput](#schemacreatebackupvaultoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackupVault

<a id="opIdDeleteBackupVault"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup-vaults/{backupVaultName}`

Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.

<h3 id="deletebackupvault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
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

<h3 id="deletebackupvault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFrameworks

<a id="opIdListFrameworks"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/frameworks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /audit/frameworks`

Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.

<h3 id="listframeworks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|integer|false|The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.|
|NextToken|query|string|false|An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.|
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
  "Frameworks": {},
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

<h3 id="listframeworks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFrameworksOutput](#schemalistframeworksoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFramework

<a id="opIdCreateFramework"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/frameworks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FrameworkName": "string",
    "FrameworkDescription": "string",
    "FrameworkControls": [
      {
        "ControlName": {},
        "ControlInputParameters": {},
        "ControlScope": {
          "ComplianceResourceIds": {},
          "ComplianceResourceTypes": {},
          "Tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "IdempotencyToken": "string",
    "FrameworkTags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /audit/frameworks`

Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.

> Body parameter

```json
{
  "FrameworkName": "string",
  "FrameworkDescription": "string",
  "FrameworkControls": [
    {
      "ControlName": {},
      "ControlInputParameters": {},
      "ControlScope": {
        "ComplianceResourceIds": {},
        "ComplianceResourceTypes": {},
        "Tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "IdempotencyToken": "string",
  "FrameworkTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createframework-parameters">Parameters</h3>

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
|» FrameworkName|body|string|true|The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).|
|» FrameworkDescription|body|string|false|An optional description of the framework with a maximum of 1,024 characters.|
|» FrameworkControls|body|[[FrameworkControl](#schemaframeworkcontrol)]|true|A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|
|» FrameworkTags|body|object|false|Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.|
|» » **additionalProperties**|body|[string](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "FrameworkName": {},
  "FrameworkArn": {}
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

<h3 id="createframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFrameworkOutput](#schemacreateframeworkoutput)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLegalHolds

<a id="opIdListLegalHolds"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/legal-holds/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /legal-holds/`

This action returns metadata about active and previous legal holds.

<h3 id="listlegalholds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of resource list items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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
  "LegalHolds": {}
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

<h3 id="listlegalholds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLegalHoldsOutput](#schemalistlegalholdsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLegalHold

<a id="opIdCreateLegalHold"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/legal-holds/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Title": "string",
    "Description": "string",
    "IdempotencyToken": "string",
    "RecoveryPointSelection": {
      "VaultNames": {},
      "ResourceIdentifiers": {},
      "DateRange": {
        "FromDate": {},
        "ToDate": {}
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /legal-holds/`

This action creates a legal hold on a recovery point (backup). A legal hold is a restraint on altering or deleting a backup until an authorized user cancels the legal hold. Any actions to delete or disassociate a recovery point will fail with an error if one or more active legal holds are on the recovery point.

> Body parameter

```json
{
  "Title": "string",
  "Description": "string",
  "IdempotencyToken": "string",
  "RecoveryPointSelection": {
    "VaultNames": {},
    "ResourceIdentifiers": {},
    "DateRange": {
      "FromDate": {},
      "ToDate": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createlegalhold-parameters">Parameters</h3>

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
|» Title|body|string|true|This is the string title of the legal hold.|
|» Description|body|string|true|This is the string description of the legal hold.|
|» IdempotencyToken|body|string|false|This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken.|
|» RecoveryPointSelection|body|object|false|This specifies criteria to assign a set of resources, such as resource types or backup vaults.|
|» » VaultNames|body|object|false|none|
|» » ResourceIdentifiers|body|object|false|none|
|» » DateRange|body|[DateRange](#schemadaterange)|false|<p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>|
|» Tags|body|object|false|Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "Title": {},
  "Status": {},
  "Description": {},
  "LegalHoldId": {},
  "LegalHoldArn": {},
  "CreationDate": {},
  "RecoveryPointSelection": {
    "VaultNames": {},
    "ResourceIdentifiers": {},
    "DateRange": {
      "FromDate": {},
      "ToDate": {}
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

<h3 id="createlegalhold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLegalHoldOutput](#schemacreatelegalholdoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReportPlans

<a id="opIdListReportPlans"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-plans \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /audit/report-plans`

Returns a list of your report plans. For detailed information about a single report plan, use <code>DescribeReportPlan</code>.

<h3 id="listreportplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|integer|false|The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.|
|NextToken|query|string|false|An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.|
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
  "ReportPlans": {},
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

<h3 id="listreportplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReportPlansOutput](#schemalistreportplansoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReportPlan

<a id="opIdCreateReportPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-plans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReportPlanName": "string",
    "ReportPlanDescription": "string",
    "ReportDeliveryChannel": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "Formats": {}
    },
    "ReportSetting": {
      "ReportTemplate": {},
      "FrameworkArns": {},
      "NumberOfFrameworks": {},
      "Accounts": {},
      "OrganizationUnits": {},
      "Regions": {}
    },
    "ReportPlanTags": {
      "property1": "string",
      "property2": "string"
    },
    "IdempotencyToken": "string"
  }'
```

`POST /audit/report-plans`

<p>Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it.</p> <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>

> Body parameter

```json
{
  "ReportPlanName": "string",
  "ReportPlanDescription": "string",
  "ReportDeliveryChannel": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Formats": {}
  },
  "ReportSetting": {
    "ReportTemplate": {},
    "FrameworkArns": {},
    "NumberOfFrameworks": {},
    "Accounts": {},
    "OrganizationUnits": {},
    "Regions": {}
  },
  "ReportPlanTags": {
    "property1": "string",
    "property2": "string"
  },
  "IdempotencyToken": "string"
}
```

<h3 id="createreportplan-parameters">Parameters</h3>

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
|» ReportPlanName|body|string|true|The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).|
|» ReportPlanDescription|body|string|false|An optional description of the report plan with a maximum of 1,024 characters.|
|» ReportDeliveryChannel|body|object|true|Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.|
|» » S3BucketName|body|object|false|none|
|» » S3KeyPrefix|body|object|false|none|
|» » Formats|body|object|false|none|
|» ReportSetting|body|object|true|Contains detailed information about a report setting.|
|» » ReportTemplate|body|object|false|none|
|» » FrameworkArns|body|object|false|none|
|» » NumberOfFrameworks|body|object|false|none|
|» » Accounts|body|object|false|none|
|» » OrganizationUnits|body|object|false|none|
|» » Regions|body|object|false|none|
|» ReportPlanTags|body|object|false|Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.|
|» » **additionalProperties**|body|[string](#schemastring)|false|none|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|

> Example responses

> 200 Response

```json
{
  "ReportPlanName": {},
  "ReportPlanArn": {},
  "CreationTime": {}
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

<h3 id="createreportplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReportPlanOutput](#schemacreatereportplanoutput)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBackupPlan

<a id="opIdUpdateBackupPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BackupPlan": {
      "BackupPlanName": {},
      "Rules": {},
      "AdvancedBackupSettings": {}
    }
  }'
```

`POST /backup/plans/{backupPlanId}`

Updates an existing backup plan identified by its <code>backupPlanId</code> with the input document in JSON format. The new version is uniquely identified by a <code>VersionId</code>.

> Body parameter

```json
{
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  }
}
```

<h3 id="updatebackupplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BackupPlan|body|object|true|Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task. |
|» » BackupPlanName|body|object|false|none|
|» » Rules|body|object|false|none|
|» » AdvancedBackupSettings|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "CreationDate": {},
  "VersionId": {},
  "AdvancedBackupSettings": {}
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

<h3 id="updatebackupplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBackupPlanOutput](#schemaupdatebackupplanoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackupPlan

<a id="opIdDeleteBackupPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup/plans/{backupPlanId}`

Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.

<h3 id="deletebackupplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
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
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "DeletionDate": {},
  "VersionId": {}
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

<h3 id="deletebackupplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackupPlanOutput](#schemadeletebackupplanoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackupSelection

<a id="opIdGetBackupSelection"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string/selections/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/plans/{backupPlanId}/selections/{selectionId}`

Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.

<h3 id="getbackupselection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
|selectionId|path|string|true|Uniquely identifies the body of a request to assign a set of resources to a backup plan.|
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
  "BackupSelection": {
    "SelectionName": {},
    "IamRoleArn": {},
    "Resources": {},
    "ListOfTags": {},
    "NotResources": {},
    "Conditions": {
      "StringEquals": {},
      "StringNotEquals": {},
      "StringLike": {},
      "StringNotLike": {}
    }
  },
  "SelectionId": {},
  "BackupPlanId": {},
  "CreationDate": {},
  "CreatorRequestId": {}
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

<h3 id="getbackupselection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackupSelectionOutput](#schemagetbackupselectionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackupSelection

<a id="opIdDeleteBackupSelection"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string/selections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup/plans/{backupPlanId}/selections/{selectionId}`

Deletes the resource selection associated with a backup plan that is specified by the <code>SelectionId</code>.

<h3 id="deletebackupselection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
|selectionId|path|string|true|Uniquely identifies the body of a request to assign a set of resources to a backup plan.|
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

<h3 id="deletebackupselection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackupVaultAccessPolicy

<a id="opIdGetBackupVaultAccessPolicy"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/access-policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-vaults/{backupVaultName}/access-policy`

Returns the access policy document that is associated with the named backup vault.

<h3 id="getbackupvaultaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
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
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "Policy": {}
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

<h3 id="getbackupvaultaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackupVaultAccessPolicyOutput](#schemagetbackupvaultaccesspolicyoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBackupVaultAccessPolicy

<a id="opIdPutBackupVaultAccessPolicy"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/access-policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Policy": "string"
  }'
```

`PUT /backup-vaults/{backupVaultName}/access-policy`

Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="putbackupvaultaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|false|The backup vault access policy document in JSON format.|

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

<h3 id="putbackupvaultaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackupVaultAccessPolicy

<a id="opIdDeleteBackupVaultAccessPolicy"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/access-policy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup-vaults/{backupVaultName}/access-policy`

Deletes the policy document that manages permissions on a backup vault.

<h3 id="deletebackupvaultaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
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

<h3 id="deletebackupvaultaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBackupVaultLockConfiguration

<a id="opIdPutBackupVaultLockConfiguration"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/vault-lock \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MinRetentionDays": 0,
    "MaxRetentionDays": 0,
    "ChangeableForDays": 0
  }'
```

`PUT /backup-vaults/{backupVaultName}/vault-lock`

<p>Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault.</p> <note> <p>Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the <a href="samples/cohassetreport.zip">Cohasset Associates Compliance Assessment.</a> </p> </note>

> Body parameter

```json
{
  "MinRetentionDays": 0,
  "MaxRetentionDays": 0,
  "ChangeableForDays": 0
}
```

<h3 id="putbackupvaultlockconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The Backup Vault Lock configuration that specifies the name of the backup vault it protects.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MinRetentionDays|body|integer|false|<p>The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).</p> <p>If this parameter is not specified, Vault Lock will not enforce a minimum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected.</p>|
|» MaxRetentionDays|body|integer|false|<p>The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).</p> <p>If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected.</p>|
|» ChangeableForDays|body|integer|false|<p>The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting <code>ChangeableForDays</code> to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.</p> <p>Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set <code>ChangeableForDays</code> to 3 or greater.</p> <p>Before the lock date, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code>. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.</p> <p>If this parameter is not specified, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code> at any time.</p>|

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

<h3 id="putbackupvaultlockconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackupVaultLockConfiguration

<a id="opIdDeleteBackupVaultLockConfiguration"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/vault-lock \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup-vaults/{backupVaultName}/vault-lock`

<p>Deletes Backup Vault Lock from a backup vault specified by a backup vault name.</p> <p>If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an <code>InvalidRequestException</code> if you attempt to do so. For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html">Vault Lock</a> in the <i>Backup Developer Guide</i>.</p>

<h3 id="deletebackupvaultlockconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of the backup vault from which to delete Backup Vault Lock.|
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

<h3 id="deletebackupvaultlockconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackupVaultNotifications

<a id="opIdGetBackupVaultNotifications"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/notification-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-vaults/{backupVaultName}/notification-configuration`

Returns event notifications for the specified backup vault.

<h3 id="getbackupvaultnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
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
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "SNSTopicArn": {},
  "BackupVaultEvents": {}
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

<h3 id="getbackupvaultnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackupVaultNotificationsOutput](#schemagetbackupvaultnotificationsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBackupVaultNotifications

<a id="opIdPutBackupVaultNotifications"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/notification-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SNSTopicArn": "string",
    "BackupVaultEvents": [
      "BACKUP_JOB_STARTED"
    ]
  }'
```

`PUT /backup-vaults/{backupVaultName}/notification-configuration`

Turns on notifications on a backup vault for the specified topic and events.

> Body parameter

```json
{
  "SNSTopicArn": "string",
  "BackupVaultEvents": [
    "BACKUP_JOB_STARTED"
  ]
}
```

<h3 id="putbackupvaultnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SNSTopicArn|body|string|true|The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.|
|» BackupVaultEvents|body|[[BackupVaultEvent](#schemabackupvaultevent)]|true|<p>An array of events that indicate the status of jobs to back up resources to the backup vault.</p> <p>For common use cases and code samples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html">Using Amazon SNS to track Backup events</a>.</p> <p>The following events are supported:</p> <ul> <li> <p> <code>BACKUP_JOB_STARTED</code> \| <code>BACKUP_JOB_COMPLETED</code> </p> </li> <li> <p> <code>COPY_JOB_STARTED</code> \| <code>COPY_JOB_SUCCESSFUL</code> \| <code>COPY_JOB_FAILED</code> </p> </li> <li> <p> <code>RESTORE_JOB_STARTED</code> \| <code>RESTORE_JOB_COMPLETED</code> \| <code>RECOVERY_POINT_MODIFIED</code> </p> </li> <li> <p> <code>S3_BACKUP_OBJECT_FAILED</code> \| <code>S3_RESTORE_OBJECT_FAILED</code> </p> </li> </ul> <note> <p>The list below shows items that are deprecated events (for reference) and are no longer in use. They are no longer supported and will not return statuses or notifications. Refer to the list above for current supported events.</p> </note>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» BackupVaultEvents|BACKUP_JOB_STARTED|
|» BackupVaultEvents|BACKUP_JOB_COMPLETED|
|» BackupVaultEvents|BACKUP_JOB_SUCCESSFUL|
|» BackupVaultEvents|BACKUP_JOB_FAILED|
|» BackupVaultEvents|BACKUP_JOB_EXPIRED|
|» BackupVaultEvents|RESTORE_JOB_STARTED|
|» BackupVaultEvents|RESTORE_JOB_COMPLETED|
|» BackupVaultEvents|RESTORE_JOB_SUCCESSFUL|
|» BackupVaultEvents|RESTORE_JOB_FAILED|
|» BackupVaultEvents|COPY_JOB_STARTED|
|» BackupVaultEvents|COPY_JOB_SUCCESSFUL|
|» BackupVaultEvents|COPY_JOB_FAILED|
|» BackupVaultEvents|RECOVERY_POINT_MODIFIED|
|» BackupVaultEvents|BACKUP_PLAN_CREATED|
|» BackupVaultEvents|BACKUP_PLAN_MODIFIED|
|» BackupVaultEvents|S3_BACKUP_OBJECT_FAILED|
|» BackupVaultEvents|S3_RESTORE_OBJECT_FAILED|

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

<h3 id="putbackupvaultnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackupVaultNotifications

<a id="opIdDeleteBackupVaultNotifications"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/notification-configuration \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup-vaults/{backupVaultName}/notification-configuration`

Deletes event notifications for the specified backup vault.

<h3 id="deletebackupvaultnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
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

<h3 id="deletebackupvaultnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFramework

<a id="opIdDescribeFramework"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/frameworks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /audit/frameworks/{frameworkName}`

Returns the framework details for the specified <code>FrameworkName</code>.

<h3 id="describeframework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkName|path|string|true|The unique name of a framework.|
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
  "FrameworkName": {},
  "FrameworkArn": {},
  "FrameworkDescription": {},
  "FrameworkControls": {},
  "CreationTime": {},
  "DeploymentStatus": {},
  "FrameworkStatus": {},
  "IdempotencyToken": {}
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

<h3 id="describeframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFrameworkOutput](#schemadescribeframeworkoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFramework

<a id="opIdUpdateFramework"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/frameworks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FrameworkDescription": "string",
    "FrameworkControls": [
      {
        "ControlName": {},
        "ControlInputParameters": {},
        "ControlScope": {
          "ComplianceResourceIds": {},
          "ComplianceResourceTypes": {},
          "Tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "IdempotencyToken": "string"
  }'
```

`PUT /audit/frameworks/{frameworkName}`

Updates an existing framework identified by its <code>FrameworkName</code> with the input document in JSON format.

> Body parameter

```json
{
  "FrameworkDescription": "string",
  "FrameworkControls": [
    {
      "ControlName": {},
      "ControlInputParameters": {},
      "ControlScope": {
        "ComplianceResourceIds": {},
        "ComplianceResourceTypes": {},
        "Tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "IdempotencyToken": "string"
}
```

<h3 id="updateframework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkName|path|string|true|The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FrameworkDescription|body|string|false|An optional description of the framework with a maximum 1,024 characters.|
|» FrameworkControls|body|[[FrameworkControl](#schemaframeworkcontrol)]|false|A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|

> Example responses

> 200 Response

```json
{
  "FrameworkName": {},
  "FrameworkArn": {},
  "CreationTime": {}
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

<h3 id="updateframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFrameworkOutput](#schemaupdateframeworkoutput)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFramework

<a id="opIdDeleteFramework"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/frameworks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /audit/frameworks/{frameworkName}`

Deletes the framework specified by a framework name.

<h3 id="deleteframework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkName|path|string|true|The unique name of a framework.|
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

<h3 id="deleteframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecoveryPoint

<a id="opIdDescribeRecoveryPoint"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/recovery-points/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}`

Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.

<h3 id="describerecoverypoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|recoveryPointArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.|
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
  "RecoveryPointArn": {},
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "SourceBackupVaultArn": {},
  "ResourceArn": {},
  "ResourceType": {},
  "CreatedBy": {
    "BackupPlanId": {},
    "BackupPlanArn": {},
    "BackupPlanVersion": {},
    "BackupRuleId": {}
  },
  "IamRoleArn": {},
  "Status": {},
  "StatusMessage": {},
  "CreationDate": {},
  "CompletionDate": {},
  "BackupSizeInBytes": {},
  "CalculatedLifecycle": {
    "MoveToColdStorageAt": {},
    "DeleteAt": {}
  },
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "EncryptionKeyArn": {},
  "IsEncrypted": {},
  "StorageClass": {},
  "LastRestoreTime": {},
  "ParentRecoveryPointArn": {},
  "CompositeMemberIdentifier": {},
  "IsParent": {},
  "ResourceName": {}
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

<h3 id="describerecoverypoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecoveryPointOutput](#schemadescriberecoverypointoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRecoveryPointLifecycle

<a id="opIdUpdateRecoveryPointLifecycle"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/recovery-points/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Lifecycle": {
      "MoveToColdStorageAfterDays": {},
      "DeleteAfterDays": {}
    }
  }'
```

`POST /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}`

<p>Sets the transition lifecycle of a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> <p>This operation does not support continuous backups.</p>

> Body parameter

```json
{
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  }
}
```

<h3 id="updaterecoverypointlifecycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|recoveryPointArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Lifecycle|body|object|false|<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>|
|» » MoveToColdStorageAfterDays|body|object|false|none|
|» » DeleteAfterDays|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "BackupVaultArn": {},
  "RecoveryPointArn": {},
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "CalculatedLifecycle": {
    "MoveToColdStorageAt": {},
    "DeleteAt": {}
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

<h3 id="updaterecoverypointlifecycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRecoveryPointLifecycleOutput](#schemaupdaterecoverypointlifecycleoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRecoveryPoint

<a id="opIdDeleteRecoveryPoint"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/recovery-points/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}`

<p>Deletes the recovery point specified by a recovery point ID.</p> <p>If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup.</p> <p>When an IAM role's permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an <code>EXPIRED</code> state.</p> <p> <code>EXPIRED</code> recovery points can be deleted with this API once the IAM role has the <code>iam:CreateServiceLinkedRole</code> action. To learn more about adding this role, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html#deleting-backups-troubleshooting"> Troubleshooting manual deletions</a>.</p> <p>If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an <code>EXPIRED</code> state.</p>

<h3 id="deleterecoverypoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|recoveryPointArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.|
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

<h3 id="deleterecoverypoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReportPlan

<a id="opIdDescribeReportPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-plans/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /audit/report-plans/{reportPlanName}`

Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.

<h3 id="describereportplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportPlanName|path|string|true|The unique name of a report plan.|
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
  "ReportPlan": {
    "ReportPlanArn": {},
    "ReportPlanName": {},
    "ReportPlanDescription": {},
    "ReportSetting": {
      "ReportTemplate": {},
      "FrameworkArns": {},
      "NumberOfFrameworks": {},
      "Accounts": {},
      "OrganizationUnits": {},
      "Regions": {}
    },
    "ReportDeliveryChannel": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "Formats": {}
    },
    "DeploymentStatus": {},
    "CreationTime": {},
    "LastAttemptedExecutionTime": {},
    "LastSuccessfulExecutionTime": {}
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

<h3 id="describereportplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReportPlanOutput](#schemadescribereportplanoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReportPlan

<a id="opIdUpdateReportPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-plans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReportPlanDescription": "string",
    "ReportDeliveryChannel": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "Formats": {}
    },
    "ReportSetting": {
      "ReportTemplate": {},
      "FrameworkArns": {},
      "NumberOfFrameworks": {},
      "Accounts": {},
      "OrganizationUnits": {},
      "Regions": {}
    },
    "IdempotencyToken": "string"
  }'
```

`PUT /audit/report-plans/{reportPlanName}`

Updates an existing report plan identified by its <code>ReportPlanName</code> with the input document in JSON format.

> Body parameter

```json
{
  "ReportPlanDescription": "string",
  "ReportDeliveryChannel": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Formats": {}
  },
  "ReportSetting": {
    "ReportTemplate": {},
    "FrameworkArns": {},
    "NumberOfFrameworks": {},
    "Accounts": {},
    "OrganizationUnits": {},
    "Regions": {}
  },
  "IdempotencyToken": "string"
}
```

<h3 id="updatereportplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportPlanName|path|string|true|The unique name of the report plan. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ReportPlanDescription|body|string|false|An optional description of the report plan with a maximum 1,024 characters.|
|» ReportDeliveryChannel|body|object|false|Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.|
|» » S3BucketName|body|object|false|none|
|» » S3KeyPrefix|body|object|false|none|
|» » Formats|body|object|false|none|
|» ReportSetting|body|object|false|Contains detailed information about a report setting.|
|» » ReportTemplate|body|object|false|none|
|» » FrameworkArns|body|object|false|none|
|» » NumberOfFrameworks|body|object|false|none|
|» » Accounts|body|object|false|none|
|» » OrganizationUnits|body|object|false|none|
|» » Regions|body|object|false|none|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|

> Example responses

> 200 Response

```json
{
  "ReportPlanName": {},
  "ReportPlanArn": {},
  "CreationTime": {}
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

<h3 id="updatereportplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateReportPlanOutput](#schemaupdatereportplanoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReportPlan

<a id="opIdDeleteReportPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-plans/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /audit/report-plans/{reportPlanName}`

Deletes the report plan specified by a report plan name.

<h3 id="deletereportplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportPlanName|path|string|true|The unique name of a report plan.|
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

<h3 id="deletereportplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBackupJob

<a id="opIdDescribeBackupJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-jobs/{backupJobId}`

Returns backup job details for the specified <code>BackupJobId</code>.

<h3 id="describebackupjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupJobId|path|string|true|Uniquely identifies a request to Backup to back up a resource.|
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
  "AccountId": {},
  "BackupJobId": {},
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "RecoveryPointArn": {},
  "ResourceArn": {},
  "CreationDate": {},
  "CompletionDate": {},
  "State": {},
  "StatusMessage": {},
  "PercentDone": {},
  "BackupSizeInBytes": {},
  "IamRoleArn": {},
  "CreatedBy": {
    "BackupPlanId": {},
    "BackupPlanArn": {},
    "BackupPlanVersion": {},
    "BackupRuleId": {}
  },
  "ResourceType": {},
  "BytesTransferred": {},
  "ExpectedCompletionDate": {},
  "StartBy": {},
  "BackupOptions": {
    "property1": "string",
    "property2": "string"
  },
  "BackupType": {},
  "ParentJobId": {},
  "IsParent": {},
  "NumberOfChildJobs": {},
  "ChildJobsInState": {
    "property1": 0,
    "property2": 0
  },
  "ResourceName": {}
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

<h3 id="describebackupjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBackupJobOutput](#schemadescribebackupjoboutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DependencyFailureException|[DependencyFailureException](#schemadependencyfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopBackupJob

<a id="opIdStopBackupJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-jobs/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /backup-jobs/{backupJobId}`

<p>Attempts to cancel a job to create a one-time backup of a resource.</p> <p>This action is not supported for the following services: Amazon FSx for Windows File Server, Amazon FSx for Lustre, FSx for ONTAP , Amazon FSx for OpenZFS, Amazon DocumentDB (with MongoDB compatibility), Amazon RDS, Amazon Aurora, and Amazon Neptune.</p>

<h3 id="stopbackupjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupJobId|path|string|true|Uniquely identifies a request to Backup to back up a resource.|
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

<h3 id="stopbackupjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCopyJob

<a id="opIdDescribeCopyJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/copy-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /copy-jobs/{copyJobId}`

Returns metadata associated with creating a copy of a resource.

<h3 id="describecopyjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|copyJobId|path|string|true|Uniquely identifies a copy job.|
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
  "CopyJob": {
    "AccountId": {},
    "CopyJobId": {},
    "SourceBackupVaultArn": {},
    "SourceRecoveryPointArn": {},
    "DestinationBackupVaultArn": {},
    "DestinationRecoveryPointArn": {},
    "ResourceArn": {},
    "CreationDate": {},
    "CompletionDate": {},
    "State": {},
    "StatusMessage": {},
    "BackupSizeInBytes": {},
    "IamRoleArn": {},
    "CreatedBy": {
      "BackupPlanId": {},
      "BackupPlanArn": {},
      "BackupPlanVersion": {},
      "BackupRuleId": {}
    },
    "ResourceType": {},
    "ParentJobId": {},
    "IsParent": {},
    "CompositeMemberIdentifier": {},
    "NumberOfChildJobs": {},
    "ChildJobsInState": {
      "property1": 0,
      "property2": 0
    },
    "ResourceName": {}
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

<h3 id="describecopyjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCopyJobOutput](#schemadescribecopyjoboutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGlobalSettings

<a id="opIdDescribeGlobalSettings"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/global-settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-settings`

Describes whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not a member of an Organizations organization. Example: <code>describe-global-settings --region us-west-2</code> 

<h3 id="describeglobalsettings-parameters">Parameters</h3>

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
  "GlobalSettings": {
    "property1": "string",
    "property2": "string"
  },
  "LastUpdateTime": {}
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

<h3 id="describeglobalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGlobalSettingsOutput](#schemadescribeglobalsettingsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGlobalSettings

<a id="opIdUpdateGlobalSettings"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/global-settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GlobalSettings": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /global-settings`

Updates whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not an Organizations management account. Use the <code>DescribeGlobalSettings</code> API to determine the current settings.

> Body parameter

```json
{
  "GlobalSettings": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updateglobalsettings-parameters">Parameters</h3>

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
|» GlobalSettings|body|object|false|A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example: <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false --region us-west-2</code>.|
|» » **additionalProperties**|body|[GlobalSettingsValue](#schemaglobalsettingsvalue)|false|none|

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

<h3 id="updateglobalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProtectedResource

<a id="opIdDescribeProtectedResource"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources/{resourceArn}`

Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved resource.

<h3 id="describeprotectedresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.|
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
  "ResourceArn": {},
  "ResourceType": {},
  "LastBackupTime": {},
  "ResourceName": {}
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

<h3 id="describeprotectedresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProtectedResourceOutput](#schemadescribeprotectedresourceoutput)|
|480|480|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRegionSettings

<a id="opIdDescribeRegionSettings"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/account-settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /account-settings`

Returns the current service opt-in settings for the Region. If service opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region.

<h3 id="describeregionsettings-parameters">Parameters</h3>

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
  "ResourceTypeOptInPreference": {
    "property1": true,
    "property2": true
  },
  "ResourceTypeManagementPreference": {
    "property1": true,
    "property2": true
  }
}
```

> 480 Response

```json
null
```

<h3 id="describeregionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRegionSettingsOutput](#schemadescriberegionsettingsoutput)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRegionSettings

<a id="opIdUpdateRegionSettings"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/account-settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceTypeOptInPreference": {
      "property1": true,
      "property2": true
    },
    "ResourceTypeManagementPreference": {
      "property1": true,
      "property2": true
    }
  }'
```

`PUT /account-settings`

Updates the current service opt-in settings for the Region. If service-opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region. Use the <code>DescribeRegionSettings</code> API to determine the resource types that are supported.

> Body parameter

```json
{
  "ResourceTypeOptInPreference": {
    "property1": true,
    "property2": true
  },
  "ResourceTypeManagementPreference": {
    "property1": true,
    "property2": true
  }
}
```

<h3 id="updateregionsettings-parameters">Parameters</h3>

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
|» ResourceTypeOptInPreference|body|object|false|Updates the list of services along with the opt-in preferences for the Region.|
|» » **additionalProperties**|body|[IsEnabled](#schemaisenabled)|false|none|
|» ResourceTypeManagementPreference|body|object|false|Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html"> Backup's advanced DynamoDB backup features</a>, follow the procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>.|
|» » **additionalProperties**|body|[IsEnabled](#schemaisenabled)|false|none|

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

<h3 id="updateregionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReportJob

<a id="opIdDescribeReportJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /audit/report-jobs/{reportJobId}`

Returns the details associated with creating a report as specified by its <code>ReportJobId</code>.

<h3 id="describereportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportJobId|path|string|true|The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.|
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
  "ReportJob": {
    "ReportJobId": {},
    "ReportPlanArn": {},
    "ReportTemplate": {},
    "CreationTime": {},
    "CompletionTime": {},
    "Status": {},
    "StatusMessage": {},
    "ReportDestination": {
      "S3BucketName": {},
      "S3Keys": {}
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

<h3 id="describereportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReportJobOutput](#schemadescribereportjoboutput)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRestoreJob

<a id="opIdDescribeRestoreJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/restore-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restore-jobs/{restoreJobId}`

Returns metadata associated with a restore job that is specified by a job ID.

<h3 id="describerestorejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restoreJobId|path|string|true|Uniquely identifies the job that restores a recovery point.|
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
  "AccountId": {},
  "RestoreJobId": {},
  "RecoveryPointArn": {},
  "CreationDate": {},
  "CompletionDate": {},
  "Status": {},
  "StatusMessage": {},
  "PercentDone": {},
  "BackupSizeInBytes": {},
  "IamRoleArn": {},
  "ExpectedCompletionTimeMinutes": {},
  "CreatedResourceArn": {},
  "ResourceType": {}
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

<h3 id="describerestorejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRestoreJobOutput](#schemadescriberestorejoboutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|DependencyFailureException|[DependencyFailureException](#schemadependencyfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateRecoveryPoint

<a id="opIdDisassociateRecoveryPoint"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/recovery-points/string/disassociate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/disassociate`

<p>Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan.</p> <p>Does not support snapshot backup recovery points.</p>

<h3 id="disassociaterecoverypoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The unique name of an Backup vault.|
|recoveryPointArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery point.|
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

<h3 id="disassociaterecoverypoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateRecoveryPointFromParent

<a id="opIdDisassociateRecoveryPointFromParent"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/recovery-points/string/parentAssociation \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/parentAssociation`

This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point.

<h3 id="disassociaterecoverypointfromparent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|This is the name of a logical container where the child (nested) recovery point is stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|recoveryPointArn|path|string|true|This is the Amazon Resource Name (ARN) that uniquely identifies the child (nested) recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</code> |
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

<h3 id="disassociaterecoverypointfromparent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportBackupPlanTemplate

<a id="opIdExportBackupPlanTemplate"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string/toTemplate/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/plans/{backupPlanId}/toTemplate/`

Returns the backup plan that is specified by the plan ID as a backup template.

<h3 id="exportbackupplantemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
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
  "BackupPlanTemplateJson": {}
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

<h3 id="exportbackupplantemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportBackupPlanTemplateOutput](#schemaexportbackupplantemplateoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackupPlan

<a id="opIdGetBackupPlan"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/plans/{backupPlanId}/`

Returns <code>BackupPlan</code> details for the specified <code>BackupPlanId</code>. The details are the body of a backup plan in JSON format, in addition to plan metadata.

<h3 id="getbackupplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
|versionId|query|string|false|Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.|
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
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  },
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "VersionId": {},
  "CreatorRequestId": {},
  "CreationDate": {},
  "DeletionDate": {},
  "LastExecutionDate": {},
  "AdvancedBackupSettings": {}
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

<h3 id="getbackupplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackupPlanOutput](#schemagetbackupplanoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackupPlanFromJSON

<a id="opIdGetBackupPlanFromJSON"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/template/json/toPlan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BackupPlanTemplateJson": "string"
  }'
```

`POST /backup/template/json/toPlan`

Returns a valid JSON document specifying a backup plan or an error.

> Body parameter

```json
{
  "BackupPlanTemplateJson": "string"
}
```

<h3 id="getbackupplanfromjson-parameters">Parameters</h3>

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
|» BackupPlanTemplateJson|body|string|true|A customer-supplied backup plan document in JSON format.|

> Example responses

> 200 Response

```json
{
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
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

<h3 id="getbackupplanfromjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackupPlanFromJSONOutput](#schemagetbackupplanfromjsonoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackupPlanFromTemplate

<a id="opIdGetBackupPlanFromTemplate"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/template/plans/string/toPlan \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/template/plans/{templateId}/toPlan`

Returns the template specified by its <code>templateId</code> as a backup plan.

<h3 id="getbackupplanfromtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|string|true|Uniquely identifies a stored backup plan template.|
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
  "BackupPlanDocument": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
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

<h3 id="getbackupplanfromtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackupPlanFromTemplateOutput](#schemagetbackupplanfromtemplateoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLegalHold

<a id="opIdGetLegalHold"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/legal-holds/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /legal-holds/{legalHoldId}/`

This action returns details for a specified legal hold. The details are the body of a legal hold in JSON format, in addition to metadata.

<h3 id="getlegalhold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legalHoldId|path|string|true|This is the ID required to use <code>GetLegalHold</code>. This unique ID is associated with a specific legal hold.|
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
  "Title": {},
  "Status": {},
  "Description": {},
  "CancelDescription": {},
  "LegalHoldId": {},
  "LegalHoldArn": {},
  "CreationDate": {},
  "CancellationDate": {},
  "RetainRecordUntil": {},
  "RecoveryPointSelection": {
    "VaultNames": {},
    "ResourceIdentifiers": {},
    "DateRange": {
      "FromDate": {},
      "ToDate": {}
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

<h3 id="getlegalhold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLegalHoldOutput](#schemagetlegalholdoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecoveryPointRestoreMetadata

<a id="opIdGetRecoveryPointRestoreMetadata"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/recovery-points/string/restore-metadata \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/restore-metadata`

Returns a set of metadata key-value pairs that were used to create the backup.

<h3 id="getrecoverypointrestoremetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|recoveryPointArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.|
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
  "BackupVaultArn": {},
  "RecoveryPointArn": {},
  "RestoreMetadata": {
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

<h3 id="getrecoverypointrestoremetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecoveryPointRestoreMetadataOutput](#schemagetrecoverypointrestoremetadataoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSupportedResourceTypes

<a id="opIdGetSupportedResourceTypes"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/supported-resource-types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /supported-resource-types`

Returns the Amazon Web Services resource types supported by Backup.

<h3 id="getsupportedresourcetypes-parameters">Parameters</h3>

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
  "ResourceTypes": {}
}
```

> 480 Response

```json
null
```

<h3 id="getsupportedresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSupportedResourceTypesOutput](#schemagetsupportedresourcetypesoutput)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackupJobs

<a id="opIdListBackupJobs"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-jobs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-jobs/`

Returns a list of existing backup jobs for an authenticated account for the last 30 days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.

<h3 id="listbackupjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|resourceArn|query|string|false|Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).|
|state|query|string|false|Returns only backup jobs that are in the specified state.|
|backupVaultName|query|string|false|Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|createdBefore|query|string(date-time)|false|Returns only backup jobs that were created before the specified date.|
|createdAfter|query|string(date-time)|false|Returns only backup jobs that were created after the specified date.|
|resourceType|query|string|false|<p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>|
|accountId|query|string|false|<p>The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID.</p> <p>If used from an Organizations management account, passing <code>*</code> returns all jobs across the organization.</p>|
|completeAfter|query|string(date-time)|false|Returns only backup jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).|
|completeBefore|query|string(date-time)|false|Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).|
|parentJobId|query|string|false|This is a filter to list child (nested) jobs based on parent job ID.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|state|CREATED|
|state|PENDING|
|state|RUNNING|
|state|ABORTING|
|state|ABORTED|
|state|COMPLETED|
|state|FAILED|
|state|EXPIRED|
|state|PARTIAL|

> Example responses

> 200 Response

```json
{
  "BackupJobs": {},
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

<h3 id="listbackupjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackupJobsOutput](#schemalistbackupjobsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackupPlanTemplates

<a id="opIdListBackupPlanTemplates"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/template/plans \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/template/plans`

Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.

<h3 id="listbackupplantemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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
  "BackupPlanTemplatesList": {}
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

<h3 id="listbackupplantemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackupPlanTemplatesOutput](#schemalistbackupplantemplatesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackupPlanVersions

<a id="opIdListBackupPlanVersions"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup/plans/string/versions/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup/plans/{backupPlanId}/versions/`

Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.

<h3 id="listbackupplanversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupPlanId|path|string|true|Uniquely identifies a backup plan.|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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
  "BackupPlanVersionsList": {}
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

<h3 id="listbackupplanversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackupPlanVersionsOutput](#schemalistbackupplanversionsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackupVaults

<a id="opIdListBackupVaults"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-vaults/`

Returns a list of recovery point storage containers along with information about them.

<h3 id="listbackupvaults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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
  "BackupVaultList": {},
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

<h3 id="listbackupvaults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackupVaultsOutput](#schemalistbackupvaultsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCopyJobs

<a id="opIdListCopyJobs"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/copy-jobs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /copy-jobs/`

Returns metadata about your copy jobs.

<h3 id="listcopyjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token. |
|maxResults|query|integer|false|The maximum number of items to be returned.|
|resourceArn|query|string|false|Returns only copy jobs that match the specified resource Amazon Resource Name (ARN). |
|state|query|string|false|Returns only copy jobs that are in the specified state.|
|createdBefore|query|string(date-time)|false|Returns only copy jobs that were created before the specified date.|
|createdAfter|query|string(date-time)|false|Returns only copy jobs that were created after the specified date.|
|resourceType|query|string|false|<p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>|
|destinationVaultArn|query|string|false|An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. |
|accountId|query|string|false|The account ID to list the jobs from. Returns only copy jobs associated with the specified account ID.|
|completeBefore|query|string(date-time)|false|Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).|
|completeAfter|query|string(date-time)|false|Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).|
|parentJobId|query|string|false|This is a filter to list child (nested) jobs based on parent job ID.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|state|CREATED|
|state|RUNNING|
|state|COMPLETED|
|state|FAILED|
|state|PARTIAL|

> Example responses

> 200 Response

```json
{
  "CopyJobs": {},
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

<h3 id="listcopyjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCopyJobsOutput](#schemalistcopyjobsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProtectedResources

<a id="opIdListProtectedResources"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/resources/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources/`

Returns an array of resources successfully backed up by Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.

<h3 id="listprotectedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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
  "Results": {},
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

<h3 id="listprotectedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProtectedResourcesOutput](#schemalistprotectedresourcesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecoveryPointsByBackupVault

<a id="opIdListRecoveryPointsByBackupVault"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-vaults/string/recovery-points/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backup-vaults/{backupVaultName}/recovery-points/`

Returns detailed information about the recovery points stored in a backup vault.

<h3 id="listrecoverypointsbybackupvault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupVaultName|path|string|true|<p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p> <note> <p>Backup vault name might not be available when a supported service creates the backup.</p> </note>|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|resourceArn|query|string|false|Returns only recovery points that match the specified resource Amazon Resource Name (ARN).|
|resourceType|query|string|false|Returns only recovery points that match the specified resource type.|
|backupPlanId|query|string|false|Returns only recovery points that match the specified backup plan ID.|
|createdBefore|query|string(date-time)|false|Returns only recovery points that were created before the specified timestamp.|
|createdAfter|query|string(date-time)|false|Returns only recovery points that were created after the specified timestamp.|
|parentRecoveryPointArn|query|string|false|This returns only recovery points that match the specified parent (composite) recovery point Amazon Resource Name (ARN).|
|MaxResults|query|string|false|Pagination limit|
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
  "RecoveryPoints": {}
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

<h3 id="listrecoverypointsbybackupvault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecoveryPointsByBackupVaultOutput](#schemalistrecoverypointsbybackupvaultoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecoveryPointsByLegalHold

<a id="opIdListRecoveryPointsByLegalHold"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/legal-holds/string/recovery-points \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /legal-holds/{legalHoldId}/recovery-points`

This action returns recovery point ARNs (Amazon Resource Names) of the specified legal hold.

<h3 id="listrecoverypointsbylegalhold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legalHoldId|path|string|true|This is the ID of the legal hold.|
|nextToken|query|string|false|This is the next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|This is the maximum number of resource list items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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
  "RecoveryPoints": {},
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

<h3 id="listrecoverypointsbylegalhold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecoveryPointsByLegalHoldOutput](#schemalistrecoverypointsbylegalholdoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecoveryPointsByResource

<a id="opIdListRecoveryPointsByResource"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/resources/string/recovery-points/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources/{resourceArn}/recovery-points/`

<p>Returns detailed information about all the recovery points of the type specified by a resource Amazon Resource Name (ARN).</p> <note> <p>For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup.</p> </note>

<h3 id="listrecoverypointsbyresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|<p>The maximum number of items to be returned.</p> <note> <p>Amazon RDS requires a value of at least 20.</p> </note>|
|MaxResults|query|string|false|Pagination limit|
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
  "RecoveryPoints": {}
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

<h3 id="listrecoverypointsbyresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecoveryPointsByResourceOutput](#schemalistrecoverypointsbyresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReportJobs

<a id="opIdListReportJobs"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /audit/report-jobs`

Returns details about your report jobs.

<h3 id="listreportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReportPlanName|query|string|false|Returns only report jobs with the specified report plan name.|
|CreationBefore|query|string(date-time)|false|Returns only report jobs that were created before the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.|
|CreationAfter|query|string(date-time)|false|Returns only report jobs that were created after the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.|
|Status|query|string|false|<p>Returns only report jobs that are in the specified status. The statuses are:</p> <p> <code>CREATED \| RUNNING \| COMPLETED \| FAILED</code> </p>|
|MaxResults|query|integer|false|The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.|
|NextToken|query|string|false|An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.|
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
  "ReportJobs": {},
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

<h3 id="listreportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReportJobsOutput](#schemalistreportjobsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRestoreJobs

<a id="opIdListRestoreJobs"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/restore-jobs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restore-jobs/`

Returns a list of jobs that Backup initiated to restore a saved resource, including details about the recovery process.

<h3 id="listrestorejobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|accountId|query|string|false|The account ID to list the jobs from. Returns only restore jobs associated with the specified account ID.|
|createdBefore|query|string(date-time)|false|Returns only restore jobs that were created before the specified date.|
|createdAfter|query|string(date-time)|false|Returns only restore jobs that were created after the specified date.|
|status|query|string|false|Returns only restore jobs associated with the specified job status.|
|completeBefore|query|string(date-time)|false|Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).|
|completeAfter|query|string(date-time)|false|Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|status|PENDING|
|status|RUNNING|
|status|COMPLETED|
|status|ABORTED|
|status|FAILED|

> Example responses

> 200 Response

```json
{
  "RestoreJobs": {},
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

<h3 id="listrestorejobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRestoreJobsOutput](#schemalistrestorejobsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/tags/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}/`

<p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.</p> <p> <code>ListTags</code> only works for resource types that support full Backup management of their backups. Those resource types are listed in the "Full Backup management" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table.</p>

<h3 id="listtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for <code>ListTags</code> are recovery points, backup plans, and backup vaults.|
|nextToken|query|string|false|The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.|
|maxResults|query|integer|false|The maximum number of items to be returned.|
|MaxResults|query|string|false|Pagination limit|
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

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsOutput](#schemalisttagsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartBackupJob

<a id="opIdStartBackupJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/backup-jobs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BackupVaultName": "string",
    "ResourceArn": "string",
    "IamRoleArn": "string",
    "IdempotencyToken": "string",
    "StartWindowMinutes": 0,
    "CompleteWindowMinutes": 0,
    "Lifecycle": {
      "MoveToColdStorageAfterDays": {},
      "DeleteAfterDays": {}
    },
    "RecoveryPointTags": {
      "property1": "string",
      "property2": "string"
    },
    "BackupOptions": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /backup-jobs`

Starts an on-demand backup job for the specified resource.

> Body parameter

```json
{
  "BackupVaultName": "string",
  "ResourceArn": "string",
  "IamRoleArn": "string",
  "IdempotencyToken": "string",
  "StartWindowMinutes": 0,
  "CompleteWindowMinutes": 0,
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "RecoveryPointTags": {
    "property1": "string",
    "property2": "string"
  },
  "BackupOptions": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="startbackupjob-parameters">Parameters</h3>

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
|» BackupVaultName|body|string|true|The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|» ResourceArn|body|string|true|An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.|
|» IamRoleArn|body|string|true|Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartBackupJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|
|» StartWindowMinutes|body|integer|false|A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors.|
|» CompleteWindowMinutes|body|integer|false|A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for <code>StartWindowMinutes</code>, or if the backup started later than scheduled.|
|» Lifecycle|body|object|false|<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>|
|» » MoveToColdStorageAfterDays|body|object|false|none|
|» » DeleteAfterDays|body|object|false|none|
|» RecoveryPointTags|body|object|false|To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» BackupOptions|body|object|false|<p>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p> <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to <code>"WindowsVSS""disabled"</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p>|
|» » **additionalProperties**|body|[BackupOptionValue](#schemabackupoptionvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "BackupJobId": {},
  "RecoveryPointArn": {},
  "CreationDate": {},
  "IsParent": {}
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

<h3 id="startbackupjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartBackupJobOutput](#schemastartbackupjoboutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartCopyJob

<a id="opIdStartCopyJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/copy-jobs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RecoveryPointArn": "string",
    "SourceBackupVaultName": "string",
    "DestinationBackupVaultArn": "string",
    "IamRoleArn": "string",
    "IdempotencyToken": "string",
    "Lifecycle": {
      "MoveToColdStorageAfterDays": {},
      "DeleteAfterDays": {}
    }
  }'
```

`PUT /copy-jobs`

<p>Starts a job to create a one-time copy of the specified resource.</p> <p>Does not support continuous backups.</p>

> Body parameter

```json
{
  "RecoveryPointArn": "string",
  "SourceBackupVaultName": "string",
  "DestinationBackupVaultArn": "string",
  "IamRoleArn": "string",
  "IdempotencyToken": "string",
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  }
}
```

<h3 id="startcopyjob-parameters">Parameters</h3>

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
|» RecoveryPointArn|body|string|true|An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. |
|» SourceBackupVaultName|body|string|true|The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.|
|» DestinationBackupVaultArn|body|string|true|An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.|
|» IamRoleArn|body|string|true|Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|
|» Lifecycle|body|object|false|<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>|
|» » MoveToColdStorageAfterDays|body|object|false|none|
|» » DeleteAfterDays|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "CopyJobId": {},
  "CreationDate": {},
  "IsParent": {}
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

<h3 id="startcopyjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartCopyJobOutput](#schemastartcopyjoboutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartReportJob

<a id="opIdStartReportJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/audit/report-jobs/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "IdempotencyToken": "string"
  }'
```

`POST /audit/report-jobs/{reportPlanName}`

Starts an on-demand report job for the specified report plan.

> Body parameter

```json
{
  "IdempotencyToken": "string"
}
```

<h3 id="startreportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportPlanName|path|string|true|The unique name of a report plan.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartReportJobInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|

> Example responses

> 200 Response

```json
{
  "ReportJobId": {}
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

<h3 id="startreportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartReportJobOutput](#schemastartreportjoboutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartRestoreJob

<a id="opIdStartRestoreJob"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/restore-jobs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RecoveryPointArn": "string",
    "Metadata": {
      "property1": "string",
      "property2": "string"
    },
    "IamRoleArn": "string",
    "IdempotencyToken": "string",
    "ResourceType": "string"
  }'
```

`PUT /restore-jobs`

Recovers the saved resource identified by an Amazon Resource Name (ARN).

> Body parameter

```json
{
  "RecoveryPointArn": "string",
  "Metadata": {
    "property1": "string",
    "property2": "string"
  },
  "IamRoleArn": "string",
  "IdempotencyToken": "string",
  "ResourceType": "string"
}
```

<h3 id="startrestorejob-parameters">Parameters</h3>

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
|» RecoveryPointArn|body|string|true|An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.|
|» Metadata|body|object|true|<p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: The ID of the Amazon EFS file system that is backed up by Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the Amazon Web Services KMS key that is used to encrypt the restored file system. You can specify a key from another Amazon Web Services account provided that key it is properly shared with your account via Amazon Web Services KMS.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> <li> <p> <code>ItemsToRestore</code>: An array of one to five strings where each string is a file path. Use <code>ItemsToRestore</code> to restore specific files or directories rather than the entire file system. This parameter is optional. For example, <code>"itemsToRestore":"[\"/my.test\"]"</code>.</p> </li> </ul>|
|» » **additionalProperties**|body|[MetadataValue](#schemametadatavalue)|false|none|
|» IamRoleArn|body|string|false|The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: <code>arn:aws:iam::123456789012:role/S3Access</code>.|
|» IdempotencyToken|body|string|false|A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartRestoreJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.|
|» ResourceType|body|string|false|<p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "RestoreJobId": {}
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

<h3 id="startrestorejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartRestoreJobOutput](#schemastartrestorejoboutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/tags/string \
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

Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN).

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
|resourceArn|path|string|true|An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: <code>[{"Key":"string","Value":"string"}]</code>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://backup.us-east-1.amazonaws.com/untag/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TagKeyList": [
      "string"
    ]
  }'
```

`POST /untag/{resourceArn}`

Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN)

> Body parameter

```json
{
  "TagKeyList": [
    "string"
  ]
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TagKeyList|body|[[string](#schemastring)]|true|A list of keys to identify which key-value tags to remove from a resource.|

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
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelLegalHoldOutput">CancelLegalHoldOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancellegalholdoutput"></a>
<a id="schema_CancelLegalHoldOutput"></a>
<a id="tocScancellegalholdoutput"></a>
<a id="tocscancellegalholdoutput"></a>

```json
{}
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

<h2 id="tocS_InvalidResourceStateException">InvalidResourceStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcestateexception"></a>
<a id="schema_InvalidResourceStateException"></a>
<a id="tocSinvalidresourcestateexception"></a>
<a id="tocsinvalidresourcestateexception"></a>

```json
null
```

<h2 id="tocS_MissingParameterValueException">MissingParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemamissingparametervalueexception"></a>
<a id="schema_MissingParameterValueException"></a>
<a id="tocSmissingparametervalueexception"></a>
<a id="tocsmissingparametervalueexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

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

<h2 id="tocS_CreateBackupPlanOutput">CreateBackupPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupplanoutput"></a>
<a id="schema_CreateBackupPlanOutput"></a>
<a id="tocScreatebackupplanoutput"></a>
<a id="tocscreatebackupplanoutput"></a>

```json
{
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "CreationDate": {},
  "VersionId": {},
  "AdvancedBackupSettings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanId|object|false|none|none|
|BackupPlanArn|object|false|none|none|
|CreationDate|object|false|none|none|
|VersionId|object|false|none|none|
|AdvancedBackupSettings|object|false|none|none|

<h2 id="tocS_BackupPlanName">BackupPlanName</h2>
<!-- backwards compatibility -->
<a id="schemabackupplanname"></a>
<a id="schema_BackupPlanName"></a>
<a id="tocSbackupplanname"></a>
<a id="tocsbackupplanname"></a>

```json
"string"
```

<h2 id="tocS_BackupRulesInput">BackupRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemabackuprulesinput"></a>
<a id="schema_BackupRulesInput"></a>
<a id="tocSbackuprulesinput"></a>
<a id="tocsbackuprulesinput"></a>

```json
[
  {
    "RuleName": {},
    "TargetBackupVaultName": {},
    "ScheduleExpression": {},
    "StartWindowMinutes": {},
    "CompletionWindowMinutes": {},
    "Lifecycle": {
      "MoveToColdStorageAfterDays": {},
      "DeleteAfterDays": {}
    },
    "RecoveryPointTags": {
      "property1": "string",
      "property2": "string"
    },
    "CopyActions": {},
    "EnableContinuousBackup": {}
  }
]
```

<h2 id="tocS_AdvancedBackupSettings">AdvancedBackupSettings</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedbackupsettings"></a>
<a id="schema_AdvancedBackupSettings"></a>
<a id="tocSadvancedbackupsettings"></a>
<a id="tocsadvancedbackupsettings"></a>

```json
[
  {
    "ResourceType": {},
    "BackupOptions": {
      "property1": "string",
      "property2": "string"
    }
  }
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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateBackupSelectionOutput">CreateBackupSelectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupselectionoutput"></a>
<a id="schema_CreateBackupSelectionOutput"></a>
<a id="tocScreatebackupselectionoutput"></a>
<a id="tocscreatebackupselectionoutput"></a>

```json
{
  "SelectionId": {},
  "BackupPlanId": {},
  "CreationDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectionId|object|false|none|none|
|BackupPlanId|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_BackupSelectionName">BackupSelectionName</h2>
<!-- backwards compatibility -->
<a id="schemabackupselectionname"></a>
<a id="schema_BackupSelectionName"></a>
<a id="tocSbackupselectionname"></a>
<a id="tocsbackupselectionname"></a>

```json
"string"
```

<h2 id="tocS_IAMRoleArn">IAMRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IAMRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_ResourceArns">ResourceArns</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearns"></a>
<a id="schema_ResourceArns"></a>
<a id="tocSresourcearns"></a>
<a id="tocsresourcearns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListOfTags">ListOfTags</h2>
<!-- backwards compatibility -->
<a id="schemalistoftags"></a>
<a id="schema_ListOfTags"></a>
<a id="tocSlistoftags"></a>
<a id="tocslistoftags"></a>

```json
[
  {
    "ConditionType": {},
    "ConditionKey": {},
    "ConditionValue": {}
  }
]
```

<h2 id="tocS_Conditions">Conditions</h2>
<!-- backwards compatibility -->
<a id="schemaconditions"></a>
<a id="schema_Conditions"></a>
<a id="tocSconditions"></a>
<a id="tocsconditions"></a>

```json
{
  "StringEquals": {},
  "StringNotEquals": {},
  "StringLike": {},
  "StringNotLike": {}
}
```

Contains information about which resources to include or exclude from a backup plan using their tags. Conditions are case sensitive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StringEquals|object|false|none|none|
|StringNotEquals|object|false|none|none|
|StringLike|object|false|none|none|
|StringNotLike|object|false|none|none|

<h2 id="tocS_CreateBackupVaultOutput">CreateBackupVaultOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupvaultoutput"></a>
<a id="schema_CreateBackupVaultOutput"></a>
<a id="tocScreatebackupvaultoutput"></a>
<a id="tocscreatebackupvaultoutput"></a>

```json
{
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "CreationDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_CreateFrameworkOutput">CreateFrameworkOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateframeworkoutput"></a>
<a id="schema_CreateFrameworkOutput"></a>
<a id="tocScreateframeworkoutput"></a>
<a id="tocscreateframeworkoutput"></a>

```json
{
  "FrameworkName": {},
  "FrameworkArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameworkName|object|false|none|none|
|FrameworkArn|object|false|none|none|

<h2 id="tocS_FrameworkControl">FrameworkControl</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkcontrol"></a>
<a id="schema_FrameworkControl"></a>
<a id="tocSframeworkcontrol"></a>
<a id="tocsframeworkcontrol"></a>

```json
{
  "ControlName": {},
  "ControlInputParameters": {},
  "ControlScope": {
    "ComplianceResourceIds": {},
    "ComplianceResourceTypes": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ControlName|object|true|none|none|
|ControlInputParameters|object|false|none|none|
|ControlScope|object|false|none|none|

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_CreateLegalHoldOutput">CreateLegalHoldOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelegalholdoutput"></a>
<a id="schema_CreateLegalHoldOutput"></a>
<a id="tocScreatelegalholdoutput"></a>
<a id="tocscreatelegalholdoutput"></a>

```json
{
  "Title": {},
  "Status": {},
  "Description": {},
  "LegalHoldId": {},
  "LegalHoldArn": {},
  "CreationDate": {},
  "RecoveryPointSelection": {
    "VaultNames": {},
    "ResourceIdentifiers": {},
    "DateRange": {
      "FromDate": {},
      "ToDate": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Title|object|false|none|none|
|Status|object|false|none|none|
|Description|object|false|none|none|
|LegalHoldId|object|false|none|none|
|LegalHoldArn|object|false|none|none|
|CreationDate|object|false|none|none|
|RecoveryPointSelection|object|false|none|none|

<h2 id="tocS_VaultNames">VaultNames</h2>
<!-- backwards compatibility -->
<a id="schemavaultnames"></a>
<a id="schema_VaultNames"></a>
<a id="tocSvaultnames"></a>
<a id="tocsvaultnames"></a>

```json
[
  "string"
]
```

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

<h2 id="tocS_DateRange">DateRange</h2>
<!-- backwards compatibility -->
<a id="schemadaterange"></a>
<a id="schema_DateRange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "FromDate": {},
  "ToDate": {}
}
```

<p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromDate|object|true|none|none|
|ToDate|object|true|none|none|

<h2 id="tocS_CreateReportPlanOutput">CreateReportPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatereportplanoutput"></a>
<a id="schema_CreateReportPlanOutput"></a>
<a id="tocScreatereportplanoutput"></a>
<a id="tocscreatereportplanoutput"></a>

```json
{
  "ReportPlanName": {},
  "ReportPlanArn": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportPlanName|object|false|none|none|
|ReportPlanArn|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_FormatList">FormatList</h2>
<!-- backwards compatibility -->
<a id="schemaformatlist"></a>
<a id="schema_FormatList"></a>
<a id="tocSformatlist"></a>
<a id="tocsformatlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_stringList">stringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_stringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_integer">integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_DeleteBackupPlanOutput">DeleteBackupPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupplanoutput"></a>
<a id="schema_DeleteBackupPlanOutput"></a>
<a id="tocSdeletebackupplanoutput"></a>
<a id="tocsdeletebackupplanoutput"></a>

```json
{
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "DeletionDate": {},
  "VersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanId|object|false|none|none|
|BackupPlanArn|object|false|none|none|
|DeletionDate|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

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

<h2 id="tocS_DescribeBackupJobOutput">DescribeBackupJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupjoboutput"></a>
<a id="schema_DescribeBackupJobOutput"></a>
<a id="tocSdescribebackupjoboutput"></a>
<a id="tocsdescribebackupjoboutput"></a>

```json
{
  "AccountId": {},
  "BackupJobId": {},
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "RecoveryPointArn": {},
  "ResourceArn": {},
  "CreationDate": {},
  "CompletionDate": {},
  "State": {},
  "StatusMessage": {},
  "PercentDone": {},
  "BackupSizeInBytes": {},
  "IamRoleArn": {},
  "CreatedBy": {
    "BackupPlanId": {},
    "BackupPlanArn": {},
    "BackupPlanVersion": {},
    "BackupRuleId": {}
  },
  "ResourceType": {},
  "BytesTransferred": {},
  "ExpectedCompletionDate": {},
  "StartBy": {},
  "BackupOptions": {
    "property1": "string",
    "property2": "string"
  },
  "BackupType": {},
  "ParentJobId": {},
  "IsParent": {},
  "NumberOfChildJobs": {},
  "ChildJobsInState": {
    "property1": 0,
    "property2": 0
  },
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|BackupJobId|object|false|none|none|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|RecoveryPointArn|object|false|none|none|
|ResourceArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|State|object|false|none|none|
|StatusMessage|object|false|none|none|
|PercentDone|object|false|none|none|
|BackupSizeInBytes|object|false|none|none|
|IamRoleArn|object|false|none|none|
|CreatedBy|object|false|none|none|
|ResourceType|object|false|none|none|
|BytesTransferred|object|false|none|none|
|ExpectedCompletionDate|object|false|none|none|
|StartBy|object|false|none|none|
|BackupOptions|object|false|none|none|
|BackupType|object|false|none|none|
|ParentJobId|object|false|none|none|
|IsParent|object|false|none|none|
|NumberOfChildJobs|object|false|none|none|
|ChildJobsInState|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_DependencyFailureException">DependencyFailureException</h2>
<!-- backwards compatibility -->
<a id="schemadependencyfailureexception"></a>
<a id="schema_DependencyFailureException"></a>
<a id="tocSdependencyfailureexception"></a>
<a id="tocsdependencyfailureexception"></a>

```json
null
```

<h2 id="tocS_DescribeBackupVaultOutput">DescribeBackupVaultOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupvaultoutput"></a>
<a id="schema_DescribeBackupVaultOutput"></a>
<a id="tocSdescribebackupvaultoutput"></a>
<a id="tocsdescribebackupvaultoutput"></a>

```json
{
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "EncryptionKeyArn": {},
  "CreationDate": {},
  "CreatorRequestId": {},
  "NumberOfRecoveryPoints": {},
  "Locked": {},
  "MinRetentionDays": {},
  "MaxRetentionDays": {},
  "LockDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|NumberOfRecoveryPoints|object|false|none|none|
|Locked|object|false|none|none|
|MinRetentionDays|object|false|none|none|
|MaxRetentionDays|object|false|none|none|
|LockDate|object|false|none|none|

<h2 id="tocS_DescribeCopyJobOutput">DescribeCopyJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecopyjoboutput"></a>
<a id="schema_DescribeCopyJobOutput"></a>
<a id="tocSdescribecopyjoboutput"></a>
<a id="tocsdescribecopyjoboutput"></a>

```json
{
  "CopyJob": {
    "AccountId": {},
    "CopyJobId": {},
    "SourceBackupVaultArn": {},
    "SourceRecoveryPointArn": {},
    "DestinationBackupVaultArn": {},
    "DestinationRecoveryPointArn": {},
    "ResourceArn": {},
    "CreationDate": {},
    "CompletionDate": {},
    "State": {},
    "StatusMessage": {},
    "BackupSizeInBytes": {},
    "IamRoleArn": {},
    "CreatedBy": {
      "BackupPlanId": {},
      "BackupPlanArn": {},
      "BackupPlanVersion": {},
      "BackupRuleId": {}
    },
    "ResourceType": {},
    "ParentJobId": {},
    "IsParent": {},
    "CompositeMemberIdentifier": {},
    "NumberOfChildJobs": {},
    "ChildJobsInState": {
      "property1": 0,
      "property2": 0
    },
    "ResourceName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyJob|object|false|none|none|

<h2 id="tocS_DescribeFrameworkOutput">DescribeFrameworkOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeframeworkoutput"></a>
<a id="schema_DescribeFrameworkOutput"></a>
<a id="tocSdescribeframeworkoutput"></a>
<a id="tocsdescribeframeworkoutput"></a>

```json
{
  "FrameworkName": {},
  "FrameworkArn": {},
  "FrameworkDescription": {},
  "FrameworkControls": {},
  "CreationTime": {},
  "DeploymentStatus": {},
  "FrameworkStatus": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameworkName|object|false|none|none|
|FrameworkArn|object|false|none|none|
|FrameworkDescription|object|false|none|none|
|FrameworkControls|object|false|none|none|
|CreationTime|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|FrameworkStatus|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_DescribeGlobalSettingsOutput">DescribeGlobalSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobalsettingsoutput"></a>
<a id="schema_DescribeGlobalSettingsOutput"></a>
<a id="tocSdescribeglobalsettingsoutput"></a>
<a id="tocsdescribeglobalsettingsoutput"></a>

```json
{
  "GlobalSettings": {
    "property1": "string",
    "property2": "string"
  },
  "LastUpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalSettings|object|false|none|none|
|LastUpdateTime|object|false|none|none|

<h2 id="tocS_DescribeProtectedResourceOutput">DescribeProtectedResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprotectedresourceoutput"></a>
<a id="schema_DescribeProtectedResourceOutput"></a>
<a id="tocSdescribeprotectedresourceoutput"></a>
<a id="tocsdescribeprotectedresourceoutput"></a>

```json
{
  "ResourceArn": {},
  "ResourceType": {},
  "LastBackupTime": {},
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|LastBackupTime|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_DescribeRecoveryPointOutput">DescribeRecoveryPointOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecoverypointoutput"></a>
<a id="schema_DescribeRecoveryPointOutput"></a>
<a id="tocSdescriberecoverypointoutput"></a>
<a id="tocsdescriberecoverypointoutput"></a>

```json
{
  "RecoveryPointArn": {},
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "SourceBackupVaultArn": {},
  "ResourceArn": {},
  "ResourceType": {},
  "CreatedBy": {
    "BackupPlanId": {},
    "BackupPlanArn": {},
    "BackupPlanVersion": {},
    "BackupRuleId": {}
  },
  "IamRoleArn": {},
  "Status": {},
  "StatusMessage": {},
  "CreationDate": {},
  "CompletionDate": {},
  "BackupSizeInBytes": {},
  "CalculatedLifecycle": {
    "MoveToColdStorageAt": {},
    "DeleteAt": {}
  },
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "EncryptionKeyArn": {},
  "IsEncrypted": {},
  "StorageClass": {},
  "LastRestoreTime": {},
  "ParentRecoveryPointArn": {},
  "CompositeMemberIdentifier": {},
  "IsParent": {},
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryPointArn|object|false|none|none|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|SourceBackupVaultArn|object|false|none|none|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|CreatedBy|object|false|none|none|
|IamRoleArn|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreationDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|BackupSizeInBytes|object|false|none|none|
|CalculatedLifecycle|object|false|none|none|
|Lifecycle|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|IsEncrypted|object|false|none|none|
|StorageClass|object|false|none|none|
|LastRestoreTime|object|false|none|none|
|ParentRecoveryPointArn|object|false|none|none|
|CompositeMemberIdentifier|object|false|none|none|
|IsParent|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_DescribeRegionSettingsOutput">DescribeRegionSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegionsettingsoutput"></a>
<a id="schema_DescribeRegionSettingsOutput"></a>
<a id="tocSdescriberegionsettingsoutput"></a>
<a id="tocsdescriberegionsettingsoutput"></a>

```json
{
  "ResourceTypeOptInPreference": {
    "property1": true,
    "property2": true
  },
  "ResourceTypeManagementPreference": {
    "property1": true,
    "property2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTypeOptInPreference|object|false|none|none|
|ResourceTypeManagementPreference|object|false|none|none|

<h2 id="tocS_DescribeReportJobOutput">DescribeReportJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportjoboutput"></a>
<a id="schema_DescribeReportJobOutput"></a>
<a id="tocSdescribereportjoboutput"></a>
<a id="tocsdescribereportjoboutput"></a>

```json
{
  "ReportJob": {
    "ReportJobId": {},
    "ReportPlanArn": {},
    "ReportTemplate": {},
    "CreationTime": {},
    "CompletionTime": {},
    "Status": {},
    "StatusMessage": {},
    "ReportDestination": {
      "S3BucketName": {},
      "S3Keys": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportJob|object|false|none|none|

<h2 id="tocS_DescribeReportPlanOutput">DescribeReportPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportplanoutput"></a>
<a id="schema_DescribeReportPlanOutput"></a>
<a id="tocSdescribereportplanoutput"></a>
<a id="tocsdescribereportplanoutput"></a>

```json
{
  "ReportPlan": {
    "ReportPlanArn": {},
    "ReportPlanName": {},
    "ReportPlanDescription": {},
    "ReportSetting": {
      "ReportTemplate": {},
      "FrameworkArns": {},
      "NumberOfFrameworks": {},
      "Accounts": {},
      "OrganizationUnits": {},
      "Regions": {}
    },
    "ReportDeliveryChannel": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "Formats": {}
    },
    "DeploymentStatus": {},
    "CreationTime": {},
    "LastAttemptedExecutionTime": {},
    "LastSuccessfulExecutionTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportPlan|object|false|none|none|

<h2 id="tocS_DescribeRestoreJobOutput">DescribeRestoreJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberestorejoboutput"></a>
<a id="schema_DescribeRestoreJobOutput"></a>
<a id="tocSdescriberestorejoboutput"></a>
<a id="tocsdescriberestorejoboutput"></a>

```json
{
  "AccountId": {},
  "RestoreJobId": {},
  "RecoveryPointArn": {},
  "CreationDate": {},
  "CompletionDate": {},
  "Status": {},
  "StatusMessage": {},
  "PercentDone": {},
  "BackupSizeInBytes": {},
  "IamRoleArn": {},
  "ExpectedCompletionTimeMinutes": {},
  "CreatedResourceArn": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|RestoreJobId|object|false|none|none|
|RecoveryPointArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|PercentDone|object|false|none|none|
|BackupSizeInBytes|object|false|none|none|
|IamRoleArn|object|false|none|none|
|ExpectedCompletionTimeMinutes|object|false|none|none|
|CreatedResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_ExportBackupPlanTemplateOutput">ExportBackupPlanTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexportbackupplantemplateoutput"></a>
<a id="schema_ExportBackupPlanTemplateOutput"></a>
<a id="tocSexportbackupplantemplateoutput"></a>
<a id="tocsexportbackupplantemplateoutput"></a>

```json
{
  "BackupPlanTemplateJson": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanTemplateJson|object|false|none|none|

<h2 id="tocS_GetBackupPlanOutput">GetBackupPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupplanoutput"></a>
<a id="schema_GetBackupPlanOutput"></a>
<a id="tocSgetbackupplanoutput"></a>
<a id="tocsgetbackupplanoutput"></a>

```json
{
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  },
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "VersionId": {},
  "CreatorRequestId": {},
  "CreationDate": {},
  "DeletionDate": {},
  "LastExecutionDate": {},
  "AdvancedBackupSettings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlan|object|false|none|none|
|BackupPlanId|object|false|none|none|
|BackupPlanArn|object|false|none|none|
|VersionId|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|CreationDate|object|false|none|none|
|DeletionDate|object|false|none|none|
|LastExecutionDate|object|false|none|none|
|AdvancedBackupSettings|object|false|none|none|

<h2 id="tocS_GetBackupPlanFromJSONOutput">GetBackupPlanFromJSONOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupplanfromjsonoutput"></a>
<a id="schema_GetBackupPlanFromJSONOutput"></a>
<a id="tocSgetbackupplanfromjsonoutput"></a>
<a id="tocsgetbackupplanfromjsonoutput"></a>

```json
{
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlan|object|false|none|none|

<h2 id="tocS_GetBackupPlanFromTemplateOutput">GetBackupPlanFromTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupplanfromtemplateoutput"></a>
<a id="schema_GetBackupPlanFromTemplateOutput"></a>
<a id="tocSgetbackupplanfromtemplateoutput"></a>
<a id="tocsgetbackupplanfromtemplateoutput"></a>

```json
{
  "BackupPlanDocument": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanDocument|object|false|none|none|

<h2 id="tocS_GetBackupSelectionOutput">GetBackupSelectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupselectionoutput"></a>
<a id="schema_GetBackupSelectionOutput"></a>
<a id="tocSgetbackupselectionoutput"></a>
<a id="tocsgetbackupselectionoutput"></a>

```json
{
  "BackupSelection": {
    "SelectionName": {},
    "IamRoleArn": {},
    "Resources": {},
    "ListOfTags": {},
    "NotResources": {},
    "Conditions": {
      "StringEquals": {},
      "StringNotEquals": {},
      "StringLike": {},
      "StringNotLike": {}
    }
  },
  "SelectionId": {},
  "BackupPlanId": {},
  "CreationDate": {},
  "CreatorRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupSelection|object|false|none|none|
|SelectionId|object|false|none|none|
|BackupPlanId|object|false|none|none|
|CreationDate|object|false|none|none|
|CreatorRequestId|object|false|none|none|

<h2 id="tocS_GetBackupVaultAccessPolicyOutput">GetBackupVaultAccessPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupvaultaccesspolicyoutput"></a>
<a id="schema_GetBackupVaultAccessPolicyOutput"></a>
<a id="tocSgetbackupvaultaccesspolicyoutput"></a>
<a id="tocsgetbackupvaultaccesspolicyoutput"></a>

```json
{
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_GetBackupVaultNotificationsOutput">GetBackupVaultNotificationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupvaultnotificationsoutput"></a>
<a id="schema_GetBackupVaultNotificationsOutput"></a>
<a id="tocSgetbackupvaultnotificationsoutput"></a>
<a id="tocsgetbackupvaultnotificationsoutput"></a>

```json
{
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "SNSTopicArn": {},
  "BackupVaultEvents": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|SNSTopicArn|object|false|none|none|
|BackupVaultEvents|object|false|none|none|

<h2 id="tocS_GetLegalHoldOutput">GetLegalHoldOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetlegalholdoutput"></a>
<a id="schema_GetLegalHoldOutput"></a>
<a id="tocSgetlegalholdoutput"></a>
<a id="tocsgetlegalholdoutput"></a>

```json
{
  "Title": {},
  "Status": {},
  "Description": {},
  "CancelDescription": {},
  "LegalHoldId": {},
  "LegalHoldArn": {},
  "CreationDate": {},
  "CancellationDate": {},
  "RetainRecordUntil": {},
  "RecoveryPointSelection": {
    "VaultNames": {},
    "ResourceIdentifiers": {},
    "DateRange": {
      "FromDate": {},
      "ToDate": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Title|object|false|none|none|
|Status|object|false|none|none|
|Description|object|false|none|none|
|CancelDescription|object|false|none|none|
|LegalHoldId|object|false|none|none|
|LegalHoldArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CancellationDate|object|false|none|none|
|RetainRecordUntil|object|false|none|none|
|RecoveryPointSelection|object|false|none|none|

<h2 id="tocS_GetRecoveryPointRestoreMetadataOutput">GetRecoveryPointRestoreMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetrecoverypointrestoremetadataoutput"></a>
<a id="schema_GetRecoveryPointRestoreMetadataOutput"></a>
<a id="tocSgetrecoverypointrestoremetadataoutput"></a>
<a id="tocsgetrecoverypointrestoremetadataoutput"></a>

```json
{
  "BackupVaultArn": {},
  "RecoveryPointArn": {},
  "RestoreMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultArn|object|false|none|none|
|RecoveryPointArn|object|false|none|none|
|RestoreMetadata|object|false|none|none|

<h2 id="tocS_GetSupportedResourceTypesOutput">GetSupportedResourceTypesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetsupportedresourcetypesoutput"></a>
<a id="schema_GetSupportedResourceTypesOutput"></a>
<a id="tocSgetsupportedresourcetypesoutput"></a>
<a id="tocsgetsupportedresourcetypesoutput"></a>

```json
{
  "ResourceTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTypes|object|false|none|none|

<h2 id="tocS_ListBackupJobsOutput">ListBackupJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupjobsoutput"></a>
<a id="schema_ListBackupJobsOutput"></a>
<a id="tocSlistbackupjobsoutput"></a>
<a id="tocslistbackupjobsoutput"></a>

```json
{
  "BackupJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListBackupPlanTemplatesOutput">ListBackupPlanTemplatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupplantemplatesoutput"></a>
<a id="schema_ListBackupPlanTemplatesOutput"></a>
<a id="tocSlistbackupplantemplatesoutput"></a>
<a id="tocslistbackupplantemplatesoutput"></a>

```json
{
  "NextToken": {},
  "BackupPlanTemplatesList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|BackupPlanTemplatesList|object|false|none|none|

<h2 id="tocS_ListBackupPlanVersionsOutput">ListBackupPlanVersionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupplanversionsoutput"></a>
<a id="schema_ListBackupPlanVersionsOutput"></a>
<a id="tocSlistbackupplanversionsoutput"></a>
<a id="tocslistbackupplanversionsoutput"></a>

```json
{
  "NextToken": {},
  "BackupPlanVersionsList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|BackupPlanVersionsList|object|false|none|none|

<h2 id="tocS_ListBackupPlansOutput">ListBackupPlansOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupplansoutput"></a>
<a id="schema_ListBackupPlansOutput"></a>
<a id="tocSlistbackupplansoutput"></a>
<a id="tocslistbackupplansoutput"></a>

```json
{
  "NextToken": {},
  "BackupPlansList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|BackupPlansList|object|false|none|none|

<h2 id="tocS_ListBackupSelectionsOutput">ListBackupSelectionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupselectionsoutput"></a>
<a id="schema_ListBackupSelectionsOutput"></a>
<a id="tocSlistbackupselectionsoutput"></a>
<a id="tocslistbackupselectionsoutput"></a>

```json
{
  "NextToken": {},
  "BackupSelectionsList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|BackupSelectionsList|object|false|none|none|

<h2 id="tocS_ListBackupVaultsOutput">ListBackupVaultsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupvaultsoutput"></a>
<a id="schema_ListBackupVaultsOutput"></a>
<a id="tocSlistbackupvaultsoutput"></a>
<a id="tocslistbackupvaultsoutput"></a>

```json
{
  "BackupVaultList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCopyJobsOutput">ListCopyJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcopyjobsoutput"></a>
<a id="schema_ListCopyJobsOutput"></a>
<a id="tocSlistcopyjobsoutput"></a>
<a id="tocslistcopyjobsoutput"></a>

```json
{
  "CopyJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFrameworksOutput">ListFrameworksOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistframeworksoutput"></a>
<a id="schema_ListFrameworksOutput"></a>
<a id="tocSlistframeworksoutput"></a>
<a id="tocslistframeworksoutput"></a>

```json
{
  "Frameworks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Frameworks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLegalHoldsOutput">ListLegalHoldsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlegalholdsoutput"></a>
<a id="schema_ListLegalHoldsOutput"></a>
<a id="tocSlistlegalholdsoutput"></a>
<a id="tocslistlegalholdsoutput"></a>

```json
{
  "NextToken": {},
  "LegalHolds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|LegalHolds|object|false|none|none|

<h2 id="tocS_ListProtectedResourcesOutput">ListProtectedResourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistprotectedresourcesoutput"></a>
<a id="schema_ListProtectedResourcesOutput"></a>
<a id="tocSlistprotectedresourcesoutput"></a>
<a id="tocslistprotectedresourcesoutput"></a>

```json
{
  "Results": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRecoveryPointsByBackupVaultOutput">ListRecoveryPointsByBackupVaultOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecoverypointsbybackupvaultoutput"></a>
<a id="schema_ListRecoveryPointsByBackupVaultOutput"></a>
<a id="tocSlistrecoverypointsbybackupvaultoutput"></a>
<a id="tocslistrecoverypointsbybackupvaultoutput"></a>

```json
{
  "NextToken": {},
  "RecoveryPoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|RecoveryPoints|object|false|none|none|

<h2 id="tocS_ListRecoveryPointsByLegalHoldOutput">ListRecoveryPointsByLegalHoldOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecoverypointsbylegalholdoutput"></a>
<a id="schema_ListRecoveryPointsByLegalHoldOutput"></a>
<a id="tocSlistrecoverypointsbylegalholdoutput"></a>
<a id="tocslistrecoverypointsbylegalholdoutput"></a>

```json
{
  "RecoveryPoints": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryPoints|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRecoveryPointsByResourceOutput">ListRecoveryPointsByResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecoverypointsbyresourceoutput"></a>
<a id="schema_ListRecoveryPointsByResourceOutput"></a>
<a id="tocSlistrecoverypointsbyresourceoutput"></a>
<a id="tocslistrecoverypointsbyresourceoutput"></a>

```json
{
  "NextToken": {},
  "RecoveryPoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|RecoveryPoints|object|false|none|none|

<h2 id="tocS_ListReportJobsOutput">ListReportJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportjobsoutput"></a>
<a id="schema_ListReportJobsOutput"></a>
<a id="tocSlistreportjobsoutput"></a>
<a id="tocslistreportjobsoutput"></a>

```json
{
  "ReportJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListReportPlansOutput">ListReportPlansOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportplansoutput"></a>
<a id="schema_ListReportPlansOutput"></a>
<a id="tocSlistreportplansoutput"></a>
<a id="tocslistreportplansoutput"></a>

```json
{
  "ReportPlans": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportPlans|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRestoreJobsOutput">ListRestoreJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrestorejobsoutput"></a>
<a id="schema_ListRestoreJobsOutput"></a>
<a id="tocSlistrestorejobsoutput"></a>
<a id="tocslistrestorejobsoutput"></a>

```json
{
  "RestoreJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RestoreJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsOutput">ListTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsoutput"></a>
<a id="schema_ListTagsOutput"></a>
<a id="tocSlisttagsoutput"></a>
<a id="tocslisttagsoutput"></a>

```json
{
  "NextToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_BackupVaultEvent">BackupVaultEvent</h2>
<!-- backwards compatibility -->
<a id="schemabackupvaultevent"></a>
<a id="schema_BackupVaultEvent"></a>
<a id="tocSbackupvaultevent"></a>
<a id="tocsbackupvaultevent"></a>

```json
"BACKUP_JOB_STARTED"
```

<h2 id="tocS_StartBackupJobOutput">StartBackupJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartbackupjoboutput"></a>
<a id="schema_StartBackupJobOutput"></a>
<a id="tocSstartbackupjoboutput"></a>
<a id="tocsstartbackupjoboutput"></a>

```json
{
  "BackupJobId": {},
  "RecoveryPointArn": {},
  "CreationDate": {},
  "IsParent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupJobId|object|false|none|none|
|RecoveryPointArn|object|false|none|none|
|CreationDate|object|false|none|none|
|IsParent|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_BackupOptionValue">BackupOptionValue</h2>
<!-- backwards compatibility -->
<a id="schemabackupoptionvalue"></a>
<a id="schema_BackupOptionValue"></a>
<a id="tocSbackupoptionvalue"></a>
<a id="tocsbackupoptionvalue"></a>

```json
"string"
```

<h2 id="tocS_StartCopyJobOutput">StartCopyJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartcopyjoboutput"></a>
<a id="schema_StartCopyJobOutput"></a>
<a id="tocSstartcopyjoboutput"></a>
<a id="tocsstartcopyjoboutput"></a>

```json
{
  "CopyJobId": {},
  "CreationDate": {},
  "IsParent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyJobId|object|false|none|none|
|CreationDate|object|false|none|none|
|IsParent|object|false|none|none|

<h2 id="tocS_StartReportJobOutput">StartReportJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartreportjoboutput"></a>
<a id="schema_StartReportJobOutput"></a>
<a id="tocSstartreportjoboutput"></a>
<a id="tocsstartreportjoboutput"></a>

```json
{
  "ReportJobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportJobId|object|false|none|none|

<h2 id="tocS_StartRestoreJobOutput">StartRestoreJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartrestorejoboutput"></a>
<a id="schema_StartRestoreJobOutput"></a>
<a id="tocSstartrestorejoboutput"></a>
<a id="tocsstartrestorejoboutput"></a>

```json
{
  "RestoreJobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RestoreJobId|object|false|none|none|

<h2 id="tocS_MetadataValue">MetadataValue</h2>
<!-- backwards compatibility -->
<a id="schemametadatavalue"></a>
<a id="schema_MetadataValue"></a>
<a id="tocSmetadatavalue"></a>
<a id="tocsmetadatavalue"></a>

```json
"string"
```

<h2 id="tocS_UpdateBackupPlanOutput">UpdateBackupPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackupplanoutput"></a>
<a id="schema_UpdateBackupPlanOutput"></a>
<a id="tocSupdatebackupplanoutput"></a>
<a id="tocsupdatebackupplanoutput"></a>

```json
{
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "CreationDate": {},
  "VersionId": {},
  "AdvancedBackupSettings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanId|object|false|none|none|
|BackupPlanArn|object|false|none|none|
|CreationDate|object|false|none|none|
|VersionId|object|false|none|none|
|AdvancedBackupSettings|object|false|none|none|

<h2 id="tocS_UpdateFrameworkOutput">UpdateFrameworkOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateframeworkoutput"></a>
<a id="schema_UpdateFrameworkOutput"></a>
<a id="tocSupdateframeworkoutput"></a>
<a id="tocsupdateframeworkoutput"></a>

```json
{
  "FrameworkName": {},
  "FrameworkArn": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameworkName|object|false|none|none|
|FrameworkArn|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_GlobalSettingsValue">GlobalSettingsValue</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingsvalue"></a>
<a id="schema_GlobalSettingsValue"></a>
<a id="tocSglobalsettingsvalue"></a>
<a id="tocsglobalsettingsvalue"></a>

```json
"string"
```

<h2 id="tocS_UpdateRecoveryPointLifecycleOutput">UpdateRecoveryPointLifecycleOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecoverypointlifecycleoutput"></a>
<a id="schema_UpdateRecoveryPointLifecycleOutput"></a>
<a id="tocSupdaterecoverypointlifecycleoutput"></a>
<a id="tocsupdaterecoverypointlifecycleoutput"></a>

```json
{
  "BackupVaultArn": {},
  "RecoveryPointArn": {},
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "CalculatedLifecycle": {
    "MoveToColdStorageAt": {},
    "DeleteAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultArn|object|false|none|none|
|RecoveryPointArn|object|false|none|none|
|Lifecycle|object|false|none|none|
|CalculatedLifecycle|object|false|none|none|

<h2 id="tocS_IsEnabled">IsEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaisenabled"></a>
<a id="schema_IsEnabled"></a>
<a id="tocSisenabled"></a>
<a id="tocsisenabled"></a>

```json
true
```

<h2 id="tocS_UpdateReportPlanOutput">UpdateReportPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereportplanoutput"></a>
<a id="schema_UpdateReportPlanOutput"></a>
<a id="tocSupdatereportplanoutput"></a>
<a id="tocsupdatereportplanoutput"></a>

```json
{
  "ReportPlanName": {},
  "ReportPlanArn": {},
  "CreationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportPlanName|object|false|none|none|
|ReportPlanArn|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

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

<h2 id="tocS_BackupOptions">BackupOptions</h2>
<!-- backwards compatibility -->
<a id="schemabackupoptions"></a>
<a id="schema_BackupOptions"></a>
<a id="tocSbackupoptions"></a>
<a id="tocsbackupoptions"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[BackupOptionValue](#schemabackupoptionvalue)|false|none|none|

<h2 id="tocS_AdvancedBackupSetting">AdvancedBackupSetting</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedbackupsetting"></a>
<a id="schema_AdvancedBackupSetting"></a>
<a id="tocSadvancedbackupsetting"></a>
<a id="tocsadvancedbackupsetting"></a>

```json
{
  "ResourceType": {},
  "BackupOptions": {
    "property1": "string",
    "property2": "string"
  }
}
```

A list of backup options for each resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|BackupOptions|object|false|none|none|

<h2 id="tocS_BackupVaultName">BackupVaultName</h2>
<!-- backwards compatibility -->
<a id="schemabackupvaultname"></a>
<a id="schema_BackupVaultName"></a>
<a id="tocSbackupvaultname"></a>
<a id="tocsbackupvaultname"></a>

```json
"string"
```

<h2 id="tocS_timestamp">timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_BackupJobState">BackupJobState</h2>
<!-- backwards compatibility -->
<a id="schemabackupjobstate"></a>
<a id="schema_BackupJobState"></a>
<a id="tocSbackupjobstate"></a>
<a id="tocsbackupjobstate"></a>

```json
"CREATED"
```

<h2 id="tocS_RecoveryPointCreator">RecoveryPointCreator</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointcreator"></a>
<a id="schema_RecoveryPointCreator"></a>
<a id="tocSrecoverypointcreator"></a>
<a id="tocsrecoverypointcreator"></a>

```json
{
  "BackupPlanId": {},
  "BackupPlanArn": {},
  "BackupPlanVersion": {},
  "BackupRuleId": {}
}
```

Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanId|object|false|none|none|
|BackupPlanArn|object|false|none|none|
|BackupPlanVersion|object|false|none|none|
|BackupRuleId|object|false|none|none|

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BackupJob">BackupJob</h2>
<!-- backwards compatibility -->
<a id="schemabackupjob"></a>
<a id="schema_BackupJob"></a>
<a id="tocSbackupjob"></a>
<a id="tocsbackupjob"></a>

```json
{
  "AccountId": {},
  "BackupJobId": {},
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "RecoveryPointArn": {},
  "ResourceArn": {},
  "CreationDate": {},
  "CompletionDate": {},
  "State": {},
  "StatusMessage": {},
  "PercentDone": {},
  "BackupSizeInBytes": {},
  "IamRoleArn": {},
  "CreatedBy": {
    "BackupPlanId": {},
    "BackupPlanArn": {},
    "BackupPlanVersion": {},
    "BackupRuleId": {}
  },
  "ExpectedCompletionDate": {},
  "StartBy": {},
  "ResourceType": {},
  "BytesTransferred": {},
  "BackupOptions": {
    "property1": "string",
    "property2": "string"
  },
  "BackupType": {},
  "ParentJobId": {},
  "IsParent": {},
  "ResourceName": {}
}
```

Contains detailed information about a backup job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|BackupJobId|object|false|none|none|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|RecoveryPointArn|object|false|none|none|
|ResourceArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|State|object|false|none|none|
|StatusMessage|object|false|none|none|
|PercentDone|object|false|none|none|
|BackupSizeInBytes|object|false|none|none|
|IamRoleArn|object|false|none|none|
|CreatedBy|object|false|none|none|
|ExpectedCompletionDate|object|false|none|none|
|StartBy|object|false|none|none|
|ResourceType|object|false|none|none|
|BytesTransferred|object|false|none|none|
|BackupOptions|object|false|none|none|
|BackupType|object|false|none|none|
|ParentJobId|object|false|none|none|
|IsParent|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_BackupJobChildJobsInState">BackupJobChildJobsInState</h2>
<!-- backwards compatibility -->
<a id="schemabackupjobchildjobsinstate"></a>
<a id="schema_BackupJobChildJobsInState"></a>
<a id="tocSbackupjobchildjobsinstate"></a>
<a id="tocsbackupjobchildjobsinstate"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Long](#schemalong)|false|none|none|

<h2 id="tocS_BackupJobsList">BackupJobsList</h2>
<!-- backwards compatibility -->
<a id="schemabackupjobslist"></a>
<a id="schema_BackupJobsList"></a>
<a id="tocSbackupjobslist"></a>
<a id="tocsbackupjobslist"></a>

```json
[
  {
    "AccountId": {},
    "BackupJobId": {},
    "BackupVaultName": {},
    "BackupVaultArn": {},
    "RecoveryPointArn": {},
    "ResourceArn": {},
    "CreationDate": {},
    "CompletionDate": {},
    "State": {},
    "StatusMessage": {},
    "PercentDone": {},
    "BackupSizeInBytes": {},
    "IamRoleArn": {},
    "CreatedBy": {
      "BackupPlanId": {},
      "BackupPlanArn": {},
      "BackupPlanVersion": {},
      "BackupRuleId": {}
    },
    "ExpectedCompletionDate": {},
    "StartBy": {},
    "ResourceType": {},
    "BytesTransferred": {},
    "BackupOptions": {
      "property1": "string",
      "property2": "string"
    },
    "BackupType": {},
    "ParentJobId": {},
    "IsParent": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_BackupOptionKey">BackupOptionKey</h2>
<!-- backwards compatibility -->
<a id="schemabackupoptionkey"></a>
<a id="schema_BackupOptionKey"></a>
<a id="tocSbackupoptionkey"></a>
<a id="tocsbackupoptionkey"></a>

```json
"string"
```

<h2 id="tocS_BackupRules">BackupRules</h2>
<!-- backwards compatibility -->
<a id="schemabackuprules"></a>
<a id="schema_BackupRules"></a>
<a id="tocSbackuprules"></a>
<a id="tocsbackuprules"></a>

```json
[
  {
    "RuleName": {},
    "TargetBackupVaultName": {},
    "ScheduleExpression": {},
    "StartWindowMinutes": {},
    "CompletionWindowMinutes": {},
    "Lifecycle": {
      "MoveToColdStorageAfterDays": {},
      "DeleteAfterDays": {}
    },
    "RecoveryPointTags": {
      "property1": "string",
      "property2": "string"
    },
    "RuleId": {},
    "CopyActions": {},
    "EnableContinuousBackup": {}
  }
]
```

<h2 id="tocS_BackupPlan">BackupPlan</h2>
<!-- backwards compatibility -->
<a id="schemabackupplan"></a>
<a id="schema_BackupPlan"></a>
<a id="tocSbackupplan"></a>
<a id="tocsbackupplan"></a>

```json
{
  "BackupPlanName": {},
  "Rules": {},
  "AdvancedBackupSettings": {}
}
```

Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of Amazon Web Services resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanName|object|true|none|none|
|Rules|object|true|none|none|
|AdvancedBackupSettings|object|false|none|none|

<h2 id="tocS_BackupPlanInput">BackupPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemabackupplaninput"></a>
<a id="schema_BackupPlanInput"></a>
<a id="tocSbackupplaninput"></a>
<a id="tocsbackupplaninput"></a>

```json
{
  "BackupPlanName": {},
  "Rules": {},
  "AdvancedBackupSettings": {}
}
```

Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanName|object|true|none|none|
|Rules|object|true|none|none|
|AdvancedBackupSettings|object|false|none|none|

<h2 id="tocS_BackupPlanTemplatesListMember">BackupPlanTemplatesListMember</h2>
<!-- backwards compatibility -->
<a id="schemabackupplantemplateslistmember"></a>
<a id="schema_BackupPlanTemplatesListMember"></a>
<a id="tocSbackupplantemplateslistmember"></a>
<a id="tocsbackupplantemplateslistmember"></a>

```json
{
  "BackupPlanTemplateId": {},
  "BackupPlanTemplateName": {}
}
```

An object specifying metadata associated with a backup plan template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanTemplateId|object|false|none|none|
|BackupPlanTemplateName|object|false|none|none|

<h2 id="tocS_BackupPlanTemplatesList">BackupPlanTemplatesList</h2>
<!-- backwards compatibility -->
<a id="schemabackupplantemplateslist"></a>
<a id="schema_BackupPlanTemplatesList"></a>
<a id="tocSbackupplantemplateslist"></a>
<a id="tocsbackupplantemplateslist"></a>

```json
[
  {
    "BackupPlanTemplateId": {},
    "BackupPlanTemplateName": {}
  }
]
```

<h2 id="tocS_BackupPlansListMember">BackupPlansListMember</h2>
<!-- backwards compatibility -->
<a id="schemabackupplanslistmember"></a>
<a id="schema_BackupPlansListMember"></a>
<a id="tocSbackupplanslistmember"></a>
<a id="tocsbackupplanslistmember"></a>

```json
{
  "BackupPlanArn": {},
  "BackupPlanId": {},
  "CreationDate": {},
  "DeletionDate": {},
  "VersionId": {},
  "BackupPlanName": {},
  "CreatorRequestId": {},
  "LastExecutionDate": {},
  "AdvancedBackupSettings": {}
}
```

Contains metadata about a backup plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanArn|object|false|none|none|
|BackupPlanId|object|false|none|none|
|CreationDate|object|false|none|none|
|DeletionDate|object|false|none|none|
|VersionId|object|false|none|none|
|BackupPlanName|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|LastExecutionDate|object|false|none|none|
|AdvancedBackupSettings|object|false|none|none|

<h2 id="tocS_BackupPlanVersionsList">BackupPlanVersionsList</h2>
<!-- backwards compatibility -->
<a id="schemabackupplanversionslist"></a>
<a id="schema_BackupPlanVersionsList"></a>
<a id="tocSbackupplanversionslist"></a>
<a id="tocsbackupplanversionslist"></a>

```json
[
  {
    "BackupPlanArn": {},
    "BackupPlanId": {},
    "CreationDate": {},
    "DeletionDate": {},
    "VersionId": {},
    "BackupPlanName": {},
    "CreatorRequestId": {},
    "LastExecutionDate": {},
    "AdvancedBackupSettings": {}
  }
]
```

<h2 id="tocS_BackupPlansList">BackupPlansList</h2>
<!-- backwards compatibility -->
<a id="schemabackupplanslist"></a>
<a id="schema_BackupPlansList"></a>
<a id="tocSbackupplanslist"></a>
<a id="tocsbackupplanslist"></a>

```json
[
  {
    "BackupPlanArn": {},
    "BackupPlanId": {},
    "CreationDate": {},
    "DeletionDate": {},
    "VersionId": {},
    "BackupPlanName": {},
    "CreatorRequestId": {},
    "LastExecutionDate": {},
    "AdvancedBackupSettings": {}
  }
]
```

<h2 id="tocS_BackupRuleName">BackupRuleName</h2>
<!-- backwards compatibility -->
<a id="schemabackuprulename"></a>
<a id="schema_BackupRuleName"></a>
<a id="tocSbackuprulename"></a>
<a id="tocsbackuprulename"></a>

```json
"string"
```

<h2 id="tocS_CronExpression">CronExpression</h2>
<!-- backwards compatibility -->
<a id="schemacronexpression"></a>
<a id="schema_CronExpression"></a>
<a id="tocScronexpression"></a>
<a id="tocscronexpression"></a>

```json
"string"
```

<h2 id="tocS_WindowMinutes">WindowMinutes</h2>
<!-- backwards compatibility -->
<a id="schemawindowminutes"></a>
<a id="schema_WindowMinutes"></a>
<a id="tocSwindowminutes"></a>
<a id="tocswindowminutes"></a>

```json
0
```

<h2 id="tocS_Lifecycle">Lifecycle</h2>
<!-- backwards compatibility -->
<a id="schemalifecycle"></a>
<a id="schema_Lifecycle"></a>
<a id="tocSlifecycle"></a>
<a id="tocslifecycle"></a>

```json
{
  "MoveToColdStorageAfterDays": {},
  "DeleteAfterDays": {}
}
```

<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MoveToColdStorageAfterDays|object|false|none|none|
|DeleteAfterDays|object|false|none|none|

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

<h2 id="tocS_CopyActions">CopyActions</h2>
<!-- backwards compatibility -->
<a id="schemacopyactions"></a>
<a id="schema_CopyActions"></a>
<a id="tocScopyactions"></a>
<a id="tocscopyactions"></a>

```json
[
  {
    "Lifecycle": {
      "MoveToColdStorageAfterDays": {},
      "DeleteAfterDays": {}
    },
    "DestinationBackupVaultArn": {}
  }
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean-1"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean-1"></a>
<a id="tocsboolean-1"></a>

```json
true
```

<h2 id="tocS_BackupRule">BackupRule</h2>
<!-- backwards compatibility -->
<a id="schemabackuprule"></a>
<a id="schema_BackupRule"></a>
<a id="tocSbackuprule"></a>
<a id="tocsbackuprule"></a>

```json
{
  "RuleName": {},
  "TargetBackupVaultName": {},
  "ScheduleExpression": {},
  "StartWindowMinutes": {},
  "CompletionWindowMinutes": {},
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "RecoveryPointTags": {
    "property1": "string",
    "property2": "string"
  },
  "RuleId": {},
  "CopyActions": {},
  "EnableContinuousBackup": {}
}
```

Specifies a scheduled task used to back up a selection of resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|true|none|none|
|TargetBackupVaultName|object|true|none|none|
|ScheduleExpression|object|false|none|none|
|StartWindowMinutes|object|false|none|none|
|CompletionWindowMinutes|object|false|none|none|
|Lifecycle|object|false|none|none|
|RecoveryPointTags|object|false|none|none|
|RuleId|object|false|none|none|
|CopyActions|object|false|none|none|
|EnableContinuousBackup|object|false|none|none|

<h2 id="tocS_BackupRuleInput">BackupRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemabackupruleinput"></a>
<a id="schema_BackupRuleInput"></a>
<a id="tocSbackupruleinput"></a>
<a id="tocsbackupruleinput"></a>

```json
{
  "RuleName": {},
  "TargetBackupVaultName": {},
  "ScheduleExpression": {},
  "StartWindowMinutes": {},
  "CompletionWindowMinutes": {},
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "RecoveryPointTags": {
    "property1": "string",
    "property2": "string"
  },
  "CopyActions": {},
  "EnableContinuousBackup": {}
}
```

Specifies a scheduled task used to back up a selection of resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|true|none|none|
|TargetBackupVaultName|object|true|none|none|
|ScheduleExpression|object|false|none|none|
|StartWindowMinutes|object|false|none|none|
|CompletionWindowMinutes|object|false|none|none|
|Lifecycle|object|false|none|none|
|RecoveryPointTags|object|false|none|none|
|CopyActions|object|false|none|none|
|EnableContinuousBackup|object|false|none|none|

<h2 id="tocS_BackupSelection">BackupSelection</h2>
<!-- backwards compatibility -->
<a id="schemabackupselection"></a>
<a id="schema_BackupSelection"></a>
<a id="tocSbackupselection"></a>
<a id="tocsbackupselection"></a>

```json
{
  "SelectionName": {},
  "IamRoleArn": {},
  "Resources": {},
  "ListOfTags": {},
  "NotResources": {},
  "Conditions": {
    "StringEquals": {},
    "StringNotEquals": {},
    "StringLike": {},
    "StringNotLike": {}
  }
}
```

<p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectionName|object|true|none|none|
|IamRoleArn|object|true|none|none|
|Resources|object|false|none|none|
|ListOfTags|object|false|none|none|
|NotResources|object|false|none|none|
|Conditions|object|false|none|none|

<h2 id="tocS_BackupSelectionsListMember">BackupSelectionsListMember</h2>
<!-- backwards compatibility -->
<a id="schemabackupselectionslistmember"></a>
<a id="schema_BackupSelectionsListMember"></a>
<a id="tocSbackupselectionslistmember"></a>
<a id="tocsbackupselectionslistmember"></a>

```json
{
  "SelectionId": {},
  "SelectionName": {},
  "BackupPlanId": {},
  "CreationDate": {},
  "CreatorRequestId": {},
  "IamRoleArn": {}
}
```

Contains metadata about a <code>BackupSelection</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectionId|object|false|none|none|
|SelectionName|object|false|none|none|
|BackupPlanId|object|false|none|none|
|CreationDate|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|IamRoleArn|object|false|none|none|

<h2 id="tocS_BackupSelectionsList">BackupSelectionsList</h2>
<!-- backwards compatibility -->
<a id="schemabackupselectionslist"></a>
<a id="schema_BackupSelectionsList"></a>
<a id="tocSbackupselectionslist"></a>
<a id="tocsbackupselectionslist"></a>

```json
[
  {
    "SelectionId": {},
    "SelectionName": {},
    "BackupPlanId": {},
    "CreationDate": {},
    "CreatorRequestId": {},
    "IamRoleArn": {}
  }
]
```

<h2 id="tocS_BackupVaultEvents">BackupVaultEvents</h2>
<!-- backwards compatibility -->
<a id="schemabackupvaultevents"></a>
<a id="schema_BackupVaultEvents"></a>
<a id="tocSbackupvaultevents"></a>
<a id="tocsbackupvaultevents"></a>

```json
[
  "BACKUP_JOB_STARTED"
]
```

<h2 id="tocS_BackupVaultListMember">BackupVaultListMember</h2>
<!-- backwards compatibility -->
<a id="schemabackupvaultlistmember"></a>
<a id="schema_BackupVaultListMember"></a>
<a id="tocSbackupvaultlistmember"></a>
<a id="tocsbackupvaultlistmember"></a>

```json
{
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "CreationDate": {},
  "EncryptionKeyArn": {},
  "CreatorRequestId": {},
  "NumberOfRecoveryPoints": {},
  "Locked": {},
  "MinRetentionDays": {},
  "MaxRetentionDays": {},
  "LockDate": {}
}
```

Contains metadata about a backup vault.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|CreationDate|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|NumberOfRecoveryPoints|object|false|none|none|
|Locked|object|false|none|none|
|MinRetentionDays|object|false|none|none|
|MaxRetentionDays|object|false|none|none|
|LockDate|object|false|none|none|

<h2 id="tocS_BackupVaultList">BackupVaultList</h2>
<!-- backwards compatibility -->
<a id="schemabackupvaultlist"></a>
<a id="schema_BackupVaultList"></a>
<a id="tocSbackupvaultlist"></a>
<a id="tocsbackupvaultlist"></a>

```json
[
  {
    "BackupVaultName": {},
    "BackupVaultArn": {},
    "CreationDate": {},
    "EncryptionKeyArn": {},
    "CreatorRequestId": {},
    "NumberOfRecoveryPoints": {},
    "Locked": {},
    "MinRetentionDays": {},
    "MaxRetentionDays": {},
    "LockDate": {}
  }
]
```

<h2 id="tocS_long">long</h2>
<!-- backwards compatibility -->
<a id="schemalong-1"></a>
<a id="schema_long"></a>
<a id="tocSlong-1"></a>
<a id="tocslong-1"></a>

```json
0
```

<h2 id="tocS_CalculatedLifecycle">CalculatedLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemacalculatedlifecycle"></a>
<a id="schema_CalculatedLifecycle"></a>
<a id="tocScalculatedlifecycle"></a>
<a id="tocscalculatedlifecycle"></a>

```json
{
  "MoveToColdStorageAt": {},
  "DeleteAt": {}
}
```

<p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MoveToColdStorageAt|object|false|none|none|
|DeleteAt|object|false|none|none|

<h2 id="tocS_CancelLegalHoldInput">CancelLegalHoldInput</h2>
<!-- backwards compatibility -->
<a id="schemacancellegalholdinput"></a>
<a id="schema_CancelLegalHoldInput"></a>
<a id="tocScancellegalholdinput"></a>
<a id="tocscancellegalholdinput"></a>

```json
{}
```

<h2 id="tocS_ComplianceResourceIdList">ComplianceResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceresourceidlist"></a>
<a id="schema_ComplianceResourceIdList"></a>
<a id="tocScomplianceresourceidlist"></a>
<a id="tocscomplianceresourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConditionType">ConditionType</h2>
<!-- backwards compatibility -->
<a id="schemaconditiontype"></a>
<a id="schema_ConditionType"></a>
<a id="tocSconditiontype"></a>
<a id="tocsconditiontype"></a>

```json
"STRINGEQUALS"
```

<h2 id="tocS_ConditionKey">ConditionKey</h2>
<!-- backwards compatibility -->
<a id="schemaconditionkey"></a>
<a id="schema_ConditionKey"></a>
<a id="tocSconditionkey"></a>
<a id="tocsconditionkey"></a>

```json
"string"
```

<h2 id="tocS_ConditionValue">ConditionValue</h2>
<!-- backwards compatibility -->
<a id="schemaconditionvalue"></a>
<a id="schema_ConditionValue"></a>
<a id="tocSconditionvalue"></a>
<a id="tocsconditionvalue"></a>

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
{
  "ConditionType": {},
  "ConditionKey": {},
  "ConditionValue": {}
}
```

Contains an array of triplets made up of a condition type (such as <code>StringEquals</code>), a key, and a value. Used to filter resources using their tags and assign them to a backup plan. Case sensitive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConditionType|object|true|none|none|
|ConditionKey|object|true|none|none|
|ConditionValue|object|true|none|none|

<h2 id="tocS_ConditionParameter">ConditionParameter</h2>
<!-- backwards compatibility -->
<a id="schemaconditionparameter"></a>
<a id="schema_ConditionParameter"></a>
<a id="tocSconditionparameter"></a>
<a id="tocsconditionparameter"></a>

```json
{
  "ConditionKey": {},
  "ConditionValue": {}
}
```

Includes information about tags you define to assign tagged resources to a backup plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConditionKey|object|false|none|none|
|ConditionValue|object|false|none|none|

<h2 id="tocS_ConditionParameters">ConditionParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconditionparameters"></a>
<a id="schema_ConditionParameters"></a>
<a id="tocSconditionparameters"></a>
<a id="tocsconditionparameters"></a>

```json
[
  {
    "ConditionKey": {},
    "ConditionValue": {}
  }
]
```

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

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

<h2 id="tocS_ControlInputParameter">ControlInputParameter</h2>
<!-- backwards compatibility -->
<a id="schemacontrolinputparameter"></a>
<a id="schema_ControlInputParameter"></a>
<a id="tocScontrolinputparameter"></a>
<a id="tocscontrolinputparameter"></a>

```json
{
  "ParameterName": {},
  "ParameterValue": {}
}
```

A list of parameters for a control. A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least <code>daily</code> and the retention period is at least <code>1 year</code>". The first parameter is <code>daily</code>. The second parameter is <code>1 year</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|false|none|none|
|ParameterValue|object|false|none|none|

<h2 id="tocS_ControlInputParameters">ControlInputParameters</h2>
<!-- backwards compatibility -->
<a id="schemacontrolinputparameters"></a>
<a id="schema_ControlInputParameters"></a>
<a id="tocScontrolinputparameters"></a>
<a id="tocscontrolinputparameters"></a>

```json
[
  {
    "ParameterName": {},
    "ParameterValue": {}
  }
]
```

<h2 id="tocS_ControlName">ControlName</h2>
<!-- backwards compatibility -->
<a id="schemacontrolname"></a>
<a id="schema_ControlName"></a>
<a id="tocScontrolname"></a>
<a id="tocscontrolname"></a>

```json
"string"
```

<h2 id="tocS_ResourceTypeList">ResourceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypelist"></a>
<a id="schema_ResourceTypeList"></a>
<a id="tocSresourcetypelist"></a>
<a id="tocsresourcetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_stringMap">stringMap</h2>
<!-- backwards compatibility -->
<a id="schemastringmap"></a>
<a id="schema_stringMap"></a>
<a id="tocSstringmap"></a>
<a id="tocsstringmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string](#schemastring)|false|none|none|

<h2 id="tocS_ControlScope">ControlScope</h2>
<!-- backwards compatibility -->
<a id="schemacontrolscope"></a>
<a id="schema_ControlScope"></a>
<a id="tocScontrolscope"></a>
<a id="tocscontrolscope"></a>

```json
{
  "ComplianceResourceIds": {},
  "ComplianceResourceTypes": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>A framework consists of one or more controls. Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.</p> <note> <p>To set a control scope that includes all of a particular resource, leave the <code>ControlScope</code> empty or do not pass it when calling <code>CreateFramework</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceResourceIds|object|false|none|none|
|ComplianceResourceTypes|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CopyAction">CopyAction</h2>
<!-- backwards compatibility -->
<a id="schemacopyaction"></a>
<a id="schema_CopyAction"></a>
<a id="tocScopyaction"></a>
<a id="tocscopyaction"></a>

```json
{
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "DestinationBackupVaultArn": {}
}
```

The details of the copy operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lifecycle|[Lifecycle](#schemalifecycle)|false|none|<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>|
|DestinationBackupVaultArn|object|true|none|none|

<h2 id="tocS_CopyJobState">CopyJobState</h2>
<!-- backwards compatibility -->
<a id="schemacopyjobstate"></a>
<a id="schema_CopyJobState"></a>
<a id="tocScopyjobstate"></a>
<a id="tocscopyjobstate"></a>

```json
"CREATED"
```

<h2 id="tocS_CopyJobChildJobsInState">CopyJobChildJobsInState</h2>
<!-- backwards compatibility -->
<a id="schemacopyjobchildjobsinstate"></a>
<a id="schema_CopyJobChildJobsInState"></a>
<a id="tocScopyjobchildjobsinstate"></a>
<a id="tocscopyjobchildjobsinstate"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Long](#schemalong)|false|none|none|

<h2 id="tocS_CopyJob">CopyJob</h2>
<!-- backwards compatibility -->
<a id="schemacopyjob"></a>
<a id="schema_CopyJob"></a>
<a id="tocScopyjob"></a>
<a id="tocscopyjob"></a>

```json
{
  "AccountId": {},
  "CopyJobId": {},
  "SourceBackupVaultArn": {},
  "SourceRecoveryPointArn": {},
  "DestinationBackupVaultArn": {},
  "DestinationRecoveryPointArn": {},
  "ResourceArn": {},
  "CreationDate": {},
  "CompletionDate": {},
  "State": {},
  "StatusMessage": {},
  "BackupSizeInBytes": {},
  "IamRoleArn": {},
  "CreatedBy": {
    "BackupPlanId": {},
    "BackupPlanArn": {},
    "BackupPlanVersion": {},
    "BackupRuleId": {}
  },
  "ResourceType": {},
  "ParentJobId": {},
  "IsParent": {},
  "CompositeMemberIdentifier": {},
  "NumberOfChildJobs": {},
  "ChildJobsInState": {
    "property1": 0,
    "property2": 0
  },
  "ResourceName": {}
}
```

Contains detailed information about a copy job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|CopyJobId|object|false|none|none|
|SourceBackupVaultArn|object|false|none|none|
|SourceRecoveryPointArn|object|false|none|none|
|DestinationBackupVaultArn|object|false|none|none|
|DestinationRecoveryPointArn|object|false|none|none|
|ResourceArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|State|object|false|none|none|
|StatusMessage|object|false|none|none|
|BackupSizeInBytes|object|false|none|none|
|IamRoleArn|object|false|none|none|
|CreatedBy|[RecoveryPointCreator](#schemarecoverypointcreator)|false|none|Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.|
|ResourceType|object|false|none|none|
|ParentJobId|object|false|none|none|
|IsParent|object|false|none|none|
|CompositeMemberIdentifier|object|false|none|none|
|NumberOfChildJobs|object|false|none|none|
|ChildJobsInState|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_CopyJobsList">CopyJobsList</h2>
<!-- backwards compatibility -->
<a id="schemacopyjobslist"></a>
<a id="schema_CopyJobsList"></a>
<a id="tocScopyjobslist"></a>
<a id="tocscopyjobslist"></a>

```json
[
  {
    "AccountId": {},
    "CopyJobId": {},
    "SourceBackupVaultArn": {},
    "SourceRecoveryPointArn": {},
    "DestinationBackupVaultArn": {},
    "DestinationRecoveryPointArn": {},
    "ResourceArn": {},
    "CreationDate": {},
    "CompletionDate": {},
    "State": {},
    "StatusMessage": {},
    "BackupSizeInBytes": {},
    "IamRoleArn": {},
    "CreatedBy": {
      "BackupPlanId": {},
      "BackupPlanArn": {},
      "BackupPlanVersion": {},
      "BackupRuleId": {}
    },
    "ResourceType": {},
    "ParentJobId": {},
    "IsParent": {},
    "CompositeMemberIdentifier": {},
    "NumberOfChildJobs": {},
    "ChildJobsInState": {
      "property1": 0,
      "property2": 0
    },
    "ResourceName": {}
  }
]
```

<h2 id="tocS_CreateBackupPlanInput">CreateBackupPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupplaninput"></a>
<a id="schema_CreateBackupPlanInput"></a>
<a id="tocScreatebackupplaninput"></a>
<a id="tocscreatebackupplaninput"></a>

```json
{
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  },
  "BackupPlanTags": {
    "property1": "string",
    "property2": "string"
  },
  "CreatorRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlan|object|true|none|none|
|BackupPlanTags|object|false|none|none|
|CreatorRequestId|object|false|none|none|

<h2 id="tocS_CreateBackupSelectionInput">CreateBackupSelectionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupselectioninput"></a>
<a id="schema_CreateBackupSelectionInput"></a>
<a id="tocScreatebackupselectioninput"></a>
<a id="tocscreatebackupselectioninput"></a>

```json
{
  "BackupSelection": {
    "SelectionName": {},
    "IamRoleArn": {},
    "Resources": {},
    "ListOfTags": {},
    "NotResources": {},
    "Conditions": {
      "StringEquals": {},
      "StringNotEquals": {},
      "StringLike": {},
      "StringNotLike": {}
    }
  },
  "CreatorRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupSelection|object|true|none|none|
|CreatorRequestId|object|false|none|none|

<h2 id="tocS_CreateBackupVaultInput">CreateBackupVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupvaultinput"></a>
<a id="schema_CreateBackupVaultInput"></a>
<a id="tocScreatebackupvaultinput"></a>
<a id="tocscreatebackupvaultinput"></a>

```json
{
  "BackupVaultTags": {
    "property1": "string",
    "property2": "string"
  },
  "EncryptionKeyArn": {},
  "CreatorRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultTags|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|CreatorRequestId|object|false|none|none|

<h2 id="tocS_FrameworkName">FrameworkName</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkname"></a>
<a id="schema_FrameworkName"></a>
<a id="tocSframeworkname"></a>
<a id="tocsframeworkname"></a>

```json
"string"
```

<h2 id="tocS_FrameworkDescription">FrameworkDescription</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkdescription"></a>
<a id="schema_FrameworkDescription"></a>
<a id="tocSframeworkdescription"></a>
<a id="tocsframeworkdescription"></a>

```json
"string"
```

<h2 id="tocS_FrameworkControls">FrameworkControls</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkcontrols"></a>
<a id="schema_FrameworkControls"></a>
<a id="tocSframeworkcontrols"></a>
<a id="tocsframeworkcontrols"></a>

```json
[
  {
    "ControlName": {},
    "ControlInputParameters": {},
    "ControlScope": {
      "ComplianceResourceIds": {},
      "ComplianceResourceTypes": {},
      "Tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
```

<h2 id="tocS_CreateFrameworkInput">CreateFrameworkInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateframeworkinput"></a>
<a id="schema_CreateFrameworkInput"></a>
<a id="tocScreateframeworkinput"></a>
<a id="tocscreateframeworkinput"></a>

```json
{
  "FrameworkName": {},
  "FrameworkDescription": {},
  "FrameworkControls": {},
  "IdempotencyToken": {},
  "FrameworkTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameworkName|object|true|none|none|
|FrameworkDescription|object|false|none|none|
|FrameworkControls|object|true|none|none|
|IdempotencyToken|object|false|none|none|
|FrameworkTags|object|false|none|none|

<h2 id="tocS_RecoveryPointSelection">RecoveryPointSelection</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointselection"></a>
<a id="schema_RecoveryPointSelection"></a>
<a id="tocSrecoverypointselection"></a>
<a id="tocsrecoverypointselection"></a>

```json
{
  "VaultNames": {},
  "ResourceIdentifiers": {},
  "DateRange": {
    "FromDate": {},
    "ToDate": {}
  }
}
```

This specifies criteria to assign a set of resources, such as resource types or backup vaults.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VaultNames|object|false|none|none|
|ResourceIdentifiers|object|false|none|none|
|DateRange|[DateRange](#schemadaterange)|false|none|<p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>|

<h2 id="tocS_CreateLegalHoldInput">CreateLegalHoldInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelegalholdinput"></a>
<a id="schema_CreateLegalHoldInput"></a>
<a id="tocScreatelegalholdinput"></a>
<a id="tocscreatelegalholdinput"></a>

```json
{
  "Title": {},
  "Description": {},
  "IdempotencyToken": {},
  "RecoveryPointSelection": {
    "VaultNames": {},
    "ResourceIdentifiers": {},
    "DateRange": {
      "FromDate": {},
      "ToDate": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Title|object|true|none|none|
|Description|object|true|none|none|
|IdempotencyToken|object|false|none|none|
|RecoveryPointSelection|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_LegalHoldStatus">LegalHoldStatus</h2>
<!-- backwards compatibility -->
<a id="schemalegalholdstatus"></a>
<a id="schema_LegalHoldStatus"></a>
<a id="tocSlegalholdstatus"></a>
<a id="tocslegalholdstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ReportPlanName">ReportPlanName</h2>
<!-- backwards compatibility -->
<a id="schemareportplanname"></a>
<a id="schema_ReportPlanName"></a>
<a id="tocSreportplanname"></a>
<a id="tocsreportplanname"></a>

```json
"string"
```

<h2 id="tocS_ReportPlanDescription">ReportPlanDescription</h2>
<!-- backwards compatibility -->
<a id="schemareportplandescription"></a>
<a id="schema_ReportPlanDescription"></a>
<a id="tocSreportplandescription"></a>
<a id="tocsreportplandescription"></a>

```json
"string"
```

<h2 id="tocS_ReportDeliveryChannel">ReportDeliveryChannel</h2>
<!-- backwards compatibility -->
<a id="schemareportdeliverychannel"></a>
<a id="schema_ReportDeliveryChannel"></a>
<a id="tocSreportdeliverychannel"></a>
<a id="tocsreportdeliverychannel"></a>

```json
{
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "Formats": {}
}
```

Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|true|none|none|
|S3KeyPrefix|object|false|none|none|
|Formats|object|false|none|none|

<h2 id="tocS_ReportSetting">ReportSetting</h2>
<!-- backwards compatibility -->
<a id="schemareportsetting"></a>
<a id="schema_ReportSetting"></a>
<a id="tocSreportsetting"></a>
<a id="tocsreportsetting"></a>

```json
{
  "ReportTemplate": {},
  "FrameworkArns": {},
  "NumberOfFrameworks": {},
  "Accounts": {},
  "OrganizationUnits": {},
  "Regions": {}
}
```

Contains detailed information about a report setting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportTemplate|object|true|none|none|
|FrameworkArns|object|false|none|none|
|NumberOfFrameworks|object|false|none|none|
|Accounts|object|false|none|none|
|OrganizationUnits|object|false|none|none|
|Regions|object|false|none|none|

<h2 id="tocS_CreateReportPlanInput">CreateReportPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatereportplaninput"></a>
<a id="schema_CreateReportPlanInput"></a>
<a id="tocScreatereportplaninput"></a>
<a id="tocscreatereportplaninput"></a>

```json
{
  "ReportPlanName": {},
  "ReportPlanDescription": {},
  "ReportDeliveryChannel": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Formats": {}
  },
  "ReportSetting": {
    "ReportTemplate": {},
    "FrameworkArns": {},
    "NumberOfFrameworks": {},
    "Accounts": {},
    "OrganizationUnits": {},
    "Regions": {}
  },
  "ReportPlanTags": {
    "property1": "string",
    "property2": "string"
  },
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportPlanName|object|true|none|none|
|ReportPlanDescription|object|false|none|none|
|ReportDeliveryChannel|object|true|none|none|
|ReportSetting|object|true|none|none|
|ReportPlanTags|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_DeleteBackupPlanInput">DeleteBackupPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupplaninput"></a>
<a id="schema_DeleteBackupPlanInput"></a>
<a id="tocSdeletebackupplaninput"></a>
<a id="tocsdeletebackupplaninput"></a>

```json
{}
```

<h2 id="tocS_DeleteBackupSelectionInput">DeleteBackupSelectionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupselectioninput"></a>
<a id="schema_DeleteBackupSelectionInput"></a>
<a id="tocSdeletebackupselectioninput"></a>
<a id="tocsdeletebackupselectioninput"></a>

```json
{}
```

<h2 id="tocS_DeleteBackupVaultAccessPolicyInput">DeleteBackupVaultAccessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupvaultaccesspolicyinput"></a>
<a id="schema_DeleteBackupVaultAccessPolicyInput"></a>
<a id="tocSdeletebackupvaultaccesspolicyinput"></a>
<a id="tocsdeletebackupvaultaccesspolicyinput"></a>

```json
{}
```

<h2 id="tocS_DeleteBackupVaultInput">DeleteBackupVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupvaultinput"></a>
<a id="schema_DeleteBackupVaultInput"></a>
<a id="tocSdeletebackupvaultinput"></a>
<a id="tocsdeletebackupvaultinput"></a>

```json
{}
```

<h2 id="tocS_DeleteBackupVaultLockConfigurationInput">DeleteBackupVaultLockConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupvaultlockconfigurationinput"></a>
<a id="schema_DeleteBackupVaultLockConfigurationInput"></a>
<a id="tocSdeletebackupvaultlockconfigurationinput"></a>
<a id="tocsdeletebackupvaultlockconfigurationinput"></a>

```json
{}
```

<h2 id="tocS_DeleteBackupVaultNotificationsInput">DeleteBackupVaultNotificationsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupvaultnotificationsinput"></a>
<a id="schema_DeleteBackupVaultNotificationsInput"></a>
<a id="tocSdeletebackupvaultnotificationsinput"></a>
<a id="tocsdeletebackupvaultnotificationsinput"></a>

```json
{}
```

<h2 id="tocS_DeleteFrameworkInput">DeleteFrameworkInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteframeworkinput"></a>
<a id="schema_DeleteFrameworkInput"></a>
<a id="tocSdeleteframeworkinput"></a>
<a id="tocsdeleteframeworkinput"></a>

```json
{}
```

<h2 id="tocS_DeleteRecoveryPointInput">DeleteRecoveryPointInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecoverypointinput"></a>
<a id="schema_DeleteRecoveryPointInput"></a>
<a id="tocSdeleterecoverypointinput"></a>
<a id="tocsdeleterecoverypointinput"></a>

```json
{}
```

<h2 id="tocS_DeleteReportPlanInput">DeleteReportPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportplaninput"></a>
<a id="schema_DeleteReportPlanInput"></a>
<a id="tocSdeletereportplaninput"></a>
<a id="tocsdeletereportplaninput"></a>

```json
{}
```

<h2 id="tocS_DescribeBackupJobInput">DescribeBackupJobInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupjobinput"></a>
<a id="schema_DescribeBackupJobInput"></a>
<a id="tocSdescribebackupjobinput"></a>
<a id="tocsdescribebackupjobinput"></a>

```json
{}
```

<h2 id="tocS_DescribeBackupVaultInput">DescribeBackupVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupvaultinput"></a>
<a id="schema_DescribeBackupVaultInput"></a>
<a id="tocSdescribebackupvaultinput"></a>
<a id="tocsdescribebackupvaultinput"></a>

```json
{}
```

<h2 id="tocS_DescribeCopyJobInput">DescribeCopyJobInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecopyjobinput"></a>
<a id="schema_DescribeCopyJobInput"></a>
<a id="tocSdescribecopyjobinput"></a>
<a id="tocsdescribecopyjobinput"></a>

```json
{}
```

<h2 id="tocS_DescribeFrameworkInput">DescribeFrameworkInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeframeworkinput"></a>
<a id="schema_DescribeFrameworkInput"></a>
<a id="tocSdescribeframeworkinput"></a>
<a id="tocsdescribeframeworkinput"></a>

```json
{}
```

<h2 id="tocS_DescribeGlobalSettingsInput">DescribeGlobalSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobalsettingsinput"></a>
<a id="schema_DescribeGlobalSettingsInput"></a>
<a id="tocSdescribeglobalsettingsinput"></a>
<a id="tocsdescribeglobalsettingsinput"></a>

```json
{}
```

<h2 id="tocS_GlobalSettings">GlobalSettings</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettings"></a>
<a id="schema_GlobalSettings"></a>
<a id="tocSglobalsettings"></a>
<a id="tocsglobalsettings"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[GlobalSettingsValue](#schemaglobalsettingsvalue)|false|none|none|

<h2 id="tocS_DescribeProtectedResourceInput">DescribeProtectedResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprotectedresourceinput"></a>
<a id="schema_DescribeProtectedResourceInput"></a>
<a id="tocSdescribeprotectedresourceinput"></a>
<a id="tocsdescribeprotectedresourceinput"></a>

```json
{}
```

<h2 id="tocS_DescribeRecoveryPointInput">DescribeRecoveryPointInput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecoverypointinput"></a>
<a id="schema_DescribeRecoveryPointInput"></a>
<a id="tocSdescriberecoverypointinput"></a>
<a id="tocsdescriberecoverypointinput"></a>

```json
{}
```

<h2 id="tocS_RecoveryPointStatus">RecoveryPointStatus</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointstatus"></a>
<a id="schema_RecoveryPointStatus"></a>
<a id="tocSrecoverypointstatus"></a>
<a id="tocsrecoverypointstatus"></a>

```json
"COMPLETED"
```

<h2 id="tocS_StorageClass">StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemastorageclass"></a>
<a id="schema_StorageClass"></a>
<a id="tocSstorageclass"></a>
<a id="tocsstorageclass"></a>

```json
"WARM"
```

<h2 id="tocS_DescribeRegionSettingsInput">DescribeRegionSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegionsettingsinput"></a>
<a id="schema_DescribeRegionSettingsInput"></a>
<a id="tocSdescriberegionsettingsinput"></a>
<a id="tocsdescriberegionsettingsinput"></a>

```json
{}
```

<h2 id="tocS_ResourceTypeOptInPreference">ResourceTypeOptInPreference</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypeoptinpreference"></a>
<a id="schema_ResourceTypeOptInPreference"></a>
<a id="tocSresourcetypeoptinpreference"></a>
<a id="tocsresourcetypeoptinpreference"></a>

```json
{
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IsEnabled](#schemaisenabled)|false|none|none|

<h2 id="tocS_ResourceTypeManagementPreference">ResourceTypeManagementPreference</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypemanagementpreference"></a>
<a id="schema_ResourceTypeManagementPreference"></a>
<a id="tocSresourcetypemanagementpreference"></a>
<a id="tocsresourcetypemanagementpreference"></a>

```json
{
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IsEnabled](#schemaisenabled)|false|none|none|

<h2 id="tocS_ReportJobId">ReportJobId</h2>
<!-- backwards compatibility -->
<a id="schemareportjobid"></a>
<a id="schema_ReportJobId"></a>
<a id="tocSreportjobid"></a>
<a id="tocsreportjobid"></a>

```json
"string"
```

<h2 id="tocS_DescribeReportJobInput">DescribeReportJobInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportjobinput"></a>
<a id="schema_DescribeReportJobInput"></a>
<a id="tocSdescribereportjobinput"></a>
<a id="tocsdescribereportjobinput"></a>

```json
{}
```

<h2 id="tocS_ReportJob">ReportJob</h2>
<!-- backwards compatibility -->
<a id="schemareportjob"></a>
<a id="schema_ReportJob"></a>
<a id="tocSreportjob"></a>
<a id="tocsreportjob"></a>

```json
{
  "ReportJobId": {},
  "ReportPlanArn": {},
  "ReportTemplate": {},
  "CreationTime": {},
  "CompletionTime": {},
  "Status": {},
  "StatusMessage": {},
  "ReportDestination": {
    "S3BucketName": {},
    "S3Keys": {}
  }
}
```

Contains detailed information about a report job. A report job compiles a report based on a report plan and publishes it to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportJobId|object|false|none|none|
|ReportPlanArn|object|false|none|none|
|ReportTemplate|object|false|none|none|
|CreationTime|object|false|none|none|
|CompletionTime|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|ReportDestination|object|false|none|none|

<h2 id="tocS_DescribeReportPlanInput">DescribeReportPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportplaninput"></a>
<a id="schema_DescribeReportPlanInput"></a>
<a id="tocSdescribereportplaninput"></a>
<a id="tocsdescribereportplaninput"></a>

```json
{}
```

<h2 id="tocS_ReportPlan">ReportPlan</h2>
<!-- backwards compatibility -->
<a id="schemareportplan"></a>
<a id="schema_ReportPlan"></a>
<a id="tocSreportplan"></a>
<a id="tocsreportplan"></a>

```json
{
  "ReportPlanArn": {},
  "ReportPlanName": {},
  "ReportPlanDescription": {},
  "ReportSetting": {
    "ReportTemplate": {},
    "FrameworkArns": {},
    "NumberOfFrameworks": {},
    "Accounts": {},
    "OrganizationUnits": {},
    "Regions": {}
  },
  "ReportDeliveryChannel": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Formats": {}
  },
  "DeploymentStatus": {},
  "CreationTime": {},
  "LastAttemptedExecutionTime": {},
  "LastSuccessfulExecutionTime": {}
}
```

Contains detailed information about a report plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportPlanArn|object|false|none|none|
|ReportPlanName|object|false|none|none|
|ReportPlanDescription|object|false|none|none|
|ReportSetting|object|false|none|none|
|ReportDeliveryChannel|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|CreationTime|object|false|none|none|
|LastAttemptedExecutionTime|object|false|none|none|
|LastSuccessfulExecutionTime|object|false|none|none|

<h2 id="tocS_RestoreJobId">RestoreJobId</h2>
<!-- backwards compatibility -->
<a id="schemarestorejobid"></a>
<a id="schema_RestoreJobId"></a>
<a id="tocSrestorejobid"></a>
<a id="tocsrestorejobid"></a>

```json
"string"
```

<h2 id="tocS_DescribeRestoreJobInput">DescribeRestoreJobInput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberestorejobinput"></a>
<a id="schema_DescribeRestoreJobInput"></a>
<a id="tocSdescriberestorejobinput"></a>
<a id="tocsdescriberestorejobinput"></a>

```json
{}
```

<h2 id="tocS_RestoreJobStatus">RestoreJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemarestorejobstatus"></a>
<a id="schema_RestoreJobStatus"></a>
<a id="tocSrestorejobstatus"></a>
<a id="tocsrestorejobstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_DisassociateRecoveryPointFromParentInput">DisassociateRecoveryPointFromParentInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociaterecoverypointfromparentinput"></a>
<a id="schema_DisassociateRecoveryPointFromParentInput"></a>
<a id="tocSdisassociaterecoverypointfromparentinput"></a>
<a id="tocsdisassociaterecoverypointfromparentinput"></a>

```json
{}
```

<h2 id="tocS_DisassociateRecoveryPointInput">DisassociateRecoveryPointInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociaterecoverypointinput"></a>
<a id="schema_DisassociateRecoveryPointInput"></a>
<a id="tocSdisassociaterecoverypointinput"></a>
<a id="tocsdisassociaterecoverypointinput"></a>

```json
{}
```

<h2 id="tocS_ExportBackupPlanTemplateInput">ExportBackupPlanTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemaexportbackupplantemplateinput"></a>
<a id="schema_ExportBackupPlanTemplateInput"></a>
<a id="tocSexportbackupplantemplateinput"></a>
<a id="tocsexportbackupplantemplateinput"></a>

```json
{}
```

<h2 id="tocS_Framework">Framework</h2>
<!-- backwards compatibility -->
<a id="schemaframework"></a>
<a id="schema_Framework"></a>
<a id="tocSframework"></a>
<a id="tocsframework"></a>

```json
{
  "FrameworkName": {},
  "FrameworkArn": {},
  "FrameworkDescription": {},
  "NumberOfControls": {},
  "CreationTime": {},
  "DeploymentStatus": {}
}
```

Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameworkName|object|false|none|none|
|FrameworkArn|object|false|none|none|
|FrameworkDescription|object|false|none|none|
|NumberOfControls|object|false|none|none|
|CreationTime|object|false|none|none|
|DeploymentStatus|object|false|none|none|

<h2 id="tocS_FrameworkList">FrameworkList</h2>
<!-- backwards compatibility -->
<a id="schemaframeworklist"></a>
<a id="schema_FrameworkList"></a>
<a id="tocSframeworklist"></a>
<a id="tocsframeworklist"></a>

```json
[
  {
    "FrameworkName": {},
    "FrameworkArn": {},
    "FrameworkDescription": {},
    "NumberOfControls": {},
    "CreationTime": {},
    "DeploymentStatus": {}
  }
]
```

<h2 id="tocS_GetBackupPlanFromJSONInput">GetBackupPlanFromJSONInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupplanfromjsoninput"></a>
<a id="schema_GetBackupPlanFromJSONInput"></a>
<a id="tocSgetbackupplanfromjsoninput"></a>
<a id="tocsgetbackupplanfromjsoninput"></a>

```json
{
  "BackupPlanTemplateJson": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlanTemplateJson|object|true|none|none|

<h2 id="tocS_GetBackupPlanFromTemplateInput">GetBackupPlanFromTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupplanfromtemplateinput"></a>
<a id="schema_GetBackupPlanFromTemplateInput"></a>
<a id="tocSgetbackupplanfromtemplateinput"></a>
<a id="tocsgetbackupplanfromtemplateinput"></a>

```json
{}
```

<h2 id="tocS_GetBackupPlanInput">GetBackupPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupplaninput"></a>
<a id="schema_GetBackupPlanInput"></a>
<a id="tocSgetbackupplaninput"></a>
<a id="tocsgetbackupplaninput"></a>

```json
{}
```

<h2 id="tocS_GetBackupSelectionInput">GetBackupSelectionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupselectioninput"></a>
<a id="schema_GetBackupSelectionInput"></a>
<a id="tocSgetbackupselectioninput"></a>
<a id="tocsgetbackupselectioninput"></a>

```json
{}
```

<h2 id="tocS_GetBackupVaultAccessPolicyInput">GetBackupVaultAccessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupvaultaccesspolicyinput"></a>
<a id="schema_GetBackupVaultAccessPolicyInput"></a>
<a id="tocSgetbackupvaultaccesspolicyinput"></a>
<a id="tocsgetbackupvaultaccesspolicyinput"></a>

```json
{}
```

<h2 id="tocS_IAMPolicy">IAMPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaiampolicy"></a>
<a id="schema_IAMPolicy"></a>
<a id="tocSiampolicy"></a>
<a id="tocsiampolicy"></a>

```json
"string"
```

<h2 id="tocS_GetBackupVaultNotificationsInput">GetBackupVaultNotificationsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbackupvaultnotificationsinput"></a>
<a id="schema_GetBackupVaultNotificationsInput"></a>
<a id="tocSgetbackupvaultnotificationsinput"></a>
<a id="tocsgetbackupvaultnotificationsinput"></a>

```json
{}
```

<h2 id="tocS_GetLegalHoldInput">GetLegalHoldInput</h2>
<!-- backwards compatibility -->
<a id="schemagetlegalholdinput"></a>
<a id="schema_GetLegalHoldInput"></a>
<a id="tocSgetlegalholdinput"></a>
<a id="tocsgetlegalholdinput"></a>

```json
{}
```

<h2 id="tocS_GetRecoveryPointRestoreMetadataInput">GetRecoveryPointRestoreMetadataInput</h2>
<!-- backwards compatibility -->
<a id="schemagetrecoverypointrestoremetadatainput"></a>
<a id="schema_GetRecoveryPointRestoreMetadataInput"></a>
<a id="tocSgetrecoverypointrestoremetadatainput"></a>
<a id="tocsgetrecoverypointrestoremetadatainput"></a>

```json
{}
```

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetadataValue](#schemametadatavalue)|false|none|none|

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

<h2 id="tocS_GlobalSettingsName">GlobalSettingsName</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingsname"></a>
<a id="schema_GlobalSettingsName"></a>
<a id="tocSglobalsettingsname"></a>
<a id="tocsglobalsettingsname"></a>

```json
"string"
```

<h2 id="tocS_LegalHold">LegalHold</h2>
<!-- backwards compatibility -->
<a id="schemalegalhold"></a>
<a id="schema_LegalHold"></a>
<a id="tocSlegalhold"></a>
<a id="tocslegalhold"></a>

```json
{
  "Title": {},
  "Status": {},
  "Description": {},
  "LegalHoldId": {},
  "LegalHoldArn": {},
  "CreationDate": {},
  "CancellationDate": {}
}
```

A legal hold is an administrative tool that helps prevent backups from being deleted while under a hold. While the hold is in place, backups under a hold cannot be deleted and lifecycle policies that would alter the backup status (such as transition to cold storage) are delayed until the legal hold is removed. A backup can have more than one legal hold. Legal holds are applied to one or more backups (also known as recovery points). These backups can be filtered by resource types and by resource IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Title|object|false|none|none|
|Status|object|false|none|none|
|Description|object|false|none|none|
|LegalHoldId|object|false|none|none|
|LegalHoldArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CancellationDate|object|false|none|none|

<h2 id="tocS_LegalHoldsList">LegalHoldsList</h2>
<!-- backwards compatibility -->
<a id="schemalegalholdslist"></a>
<a id="schema_LegalHoldsList"></a>
<a id="tocSlegalholdslist"></a>
<a id="tocslegalholdslist"></a>

```json
[
  {
    "Title": {},
    "Status": {},
    "Description": {},
    "LegalHoldId": {},
    "LegalHoldArn": {},
    "CreationDate": {},
    "CancellationDate": {}
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

<h2 id="tocS_ListBackupJobsInput">ListBackupJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupjobsinput"></a>
<a id="schema_ListBackupJobsInput"></a>
<a id="tocSlistbackupjobsinput"></a>
<a id="tocslistbackupjobsinput"></a>

```json
{}
```

<h2 id="tocS_ListBackupPlanTemplatesInput">ListBackupPlanTemplatesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupplantemplatesinput"></a>
<a id="schema_ListBackupPlanTemplatesInput"></a>
<a id="tocSlistbackupplantemplatesinput"></a>
<a id="tocslistbackupplantemplatesinput"></a>

```json
{}
```

<h2 id="tocS_ListBackupPlanVersionsInput">ListBackupPlanVersionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupplanversionsinput"></a>
<a id="schema_ListBackupPlanVersionsInput"></a>
<a id="tocSlistbackupplanversionsinput"></a>
<a id="tocslistbackupplanversionsinput"></a>

```json
{}
```

<h2 id="tocS_ListBackupPlansInput">ListBackupPlansInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupplansinput"></a>
<a id="schema_ListBackupPlansInput"></a>
<a id="tocSlistbackupplansinput"></a>
<a id="tocslistbackupplansinput"></a>

```json
{}
```

<h2 id="tocS_ListBackupSelectionsInput">ListBackupSelectionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupselectionsinput"></a>
<a id="schema_ListBackupSelectionsInput"></a>
<a id="tocSlistbackupselectionsinput"></a>
<a id="tocslistbackupselectionsinput"></a>

```json
{}
```

<h2 id="tocS_ListBackupVaultsInput">ListBackupVaultsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupvaultsinput"></a>
<a id="schema_ListBackupVaultsInput"></a>
<a id="tocSlistbackupvaultsinput"></a>
<a id="tocslistbackupvaultsinput"></a>

```json
{}
```

<h2 id="tocS_ListCopyJobsInput">ListCopyJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcopyjobsinput"></a>
<a id="schema_ListCopyJobsInput"></a>
<a id="tocSlistcopyjobsinput"></a>
<a id="tocslistcopyjobsinput"></a>

```json
{}
```

<h2 id="tocS_MaxFrameworkInputs">MaxFrameworkInputs</h2>
<!-- backwards compatibility -->
<a id="schemamaxframeworkinputs"></a>
<a id="schema_MaxFrameworkInputs"></a>
<a id="tocSmaxframeworkinputs"></a>
<a id="tocsmaxframeworkinputs"></a>

```json
1
```

<h2 id="tocS_ListFrameworksInput">ListFrameworksInput</h2>
<!-- backwards compatibility -->
<a id="schemalistframeworksinput"></a>
<a id="schema_ListFrameworksInput"></a>
<a id="tocSlistframeworksinput"></a>
<a id="tocslistframeworksinput"></a>

```json
{}
```

<h2 id="tocS_ListLegalHoldsInput">ListLegalHoldsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlegalholdsinput"></a>
<a id="schema_ListLegalHoldsInput"></a>
<a id="tocSlistlegalholdsinput"></a>
<a id="tocslistlegalholdsinput"></a>

```json
{}
```

<h2 id="tocS_ListProtectedResourcesInput">ListProtectedResourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistprotectedresourcesinput"></a>
<a id="schema_ListProtectedResourcesInput"></a>
<a id="tocSlistprotectedresourcesinput"></a>
<a id="tocslistprotectedresourcesinput"></a>

```json
{}
```

<h2 id="tocS_ProtectedResourcesList">ProtectedResourcesList</h2>
<!-- backwards compatibility -->
<a id="schemaprotectedresourceslist"></a>
<a id="schema_ProtectedResourcesList"></a>
<a id="tocSprotectedresourceslist"></a>
<a id="tocsprotectedresourceslist"></a>

```json
[
  {
    "ResourceArn": {},
    "ResourceType": {},
    "LastBackupTime": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_ListRecoveryPointsByBackupVaultInput">ListRecoveryPointsByBackupVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecoverypointsbybackupvaultinput"></a>
<a id="schema_ListRecoveryPointsByBackupVaultInput"></a>
<a id="tocSlistrecoverypointsbybackupvaultinput"></a>
<a id="tocslistrecoverypointsbybackupvaultinput"></a>

```json
{}
```

<h2 id="tocS_RecoveryPointByBackupVaultList">RecoveryPointByBackupVaultList</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointbybackupvaultlist"></a>
<a id="schema_RecoveryPointByBackupVaultList"></a>
<a id="tocSrecoverypointbybackupvaultlist"></a>
<a id="tocsrecoverypointbybackupvaultlist"></a>

```json
[
  {
    "RecoveryPointArn": {},
    "BackupVaultName": {},
    "BackupVaultArn": {},
    "SourceBackupVaultArn": {},
    "ResourceArn": {},
    "ResourceType": {},
    "CreatedBy": {
      "BackupPlanId": {},
      "BackupPlanArn": {},
      "BackupPlanVersion": {},
      "BackupRuleId": {}
    },
    "IamRoleArn": {},
    "Status": {},
    "StatusMessage": {},
    "CreationDate": {},
    "CompletionDate": {},
    "BackupSizeInBytes": {},
    "CalculatedLifecycle": {
      "MoveToColdStorageAt": {},
      "DeleteAt": {}
    },
    "Lifecycle": {
      "MoveToColdStorageAfterDays": {},
      "DeleteAfterDays": {}
    },
    "EncryptionKeyArn": {},
    "IsEncrypted": {},
    "LastRestoreTime": {},
    "ParentRecoveryPointArn": {},
    "CompositeMemberIdentifier": {},
    "IsParent": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_ListRecoveryPointsByLegalHoldInput">ListRecoveryPointsByLegalHoldInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecoverypointsbylegalholdinput"></a>
<a id="schema_ListRecoveryPointsByLegalHoldInput"></a>
<a id="tocSlistrecoverypointsbylegalholdinput"></a>
<a id="tocslistrecoverypointsbylegalholdinput"></a>

```json
{}
```

<h2 id="tocS_RecoveryPointsList">RecoveryPointsList</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointslist"></a>
<a id="schema_RecoveryPointsList"></a>
<a id="tocSrecoverypointslist"></a>
<a id="tocsrecoverypointslist"></a>

```json
[
  {
    "RecoveryPointArn": {}
  }
]
```

<h2 id="tocS_ListRecoveryPointsByResourceInput">ListRecoveryPointsByResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecoverypointsbyresourceinput"></a>
<a id="schema_ListRecoveryPointsByResourceInput"></a>
<a id="tocSlistrecoverypointsbyresourceinput"></a>
<a id="tocslistrecoverypointsbyresourceinput"></a>

```json
{}
```

<h2 id="tocS_RecoveryPointByResourceList">RecoveryPointByResourceList</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointbyresourcelist"></a>
<a id="schema_RecoveryPointByResourceList"></a>
<a id="tocSrecoverypointbyresourcelist"></a>
<a id="tocsrecoverypointbyresourcelist"></a>

```json
[
  {
    "RecoveryPointArn": {},
    "CreationDate": {},
    "Status": {},
    "StatusMessage": {},
    "EncryptionKeyArn": {},
    "BackupSizeBytes": {},
    "BackupVaultName": {},
    "IsParent": {},
    "ParentRecoveryPointArn": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_ListReportJobsInput">ListReportJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportjobsinput"></a>
<a id="schema_ListReportJobsInput"></a>
<a id="tocSlistreportjobsinput"></a>
<a id="tocslistreportjobsinput"></a>

```json
{}
```

<h2 id="tocS_ReportJobList">ReportJobList</h2>
<!-- backwards compatibility -->
<a id="schemareportjoblist"></a>
<a id="schema_ReportJobList"></a>
<a id="tocSreportjoblist"></a>
<a id="tocsreportjoblist"></a>

```json
[
  {
    "ReportJobId": {},
    "ReportPlanArn": {},
    "ReportTemplate": {},
    "CreationTime": {},
    "CompletionTime": {},
    "Status": {},
    "StatusMessage": {},
    "ReportDestination": {
      "S3BucketName": {},
      "S3Keys": {}
    }
  }
]
```

<h2 id="tocS_ListReportPlansInput">ListReportPlansInput</h2>
<!-- backwards compatibility -->
<a id="schemalistreportplansinput"></a>
<a id="schema_ListReportPlansInput"></a>
<a id="tocSlistreportplansinput"></a>
<a id="tocslistreportplansinput"></a>

```json
{}
```

<h2 id="tocS_ReportPlanList">ReportPlanList</h2>
<!-- backwards compatibility -->
<a id="schemareportplanlist"></a>
<a id="schema_ReportPlanList"></a>
<a id="tocSreportplanlist"></a>
<a id="tocsreportplanlist"></a>

```json
[
  {
    "ReportPlanArn": {},
    "ReportPlanName": {},
    "ReportPlanDescription": {},
    "ReportSetting": {
      "ReportTemplate": {},
      "FrameworkArns": {},
      "NumberOfFrameworks": {},
      "Accounts": {},
      "OrganizationUnits": {},
      "Regions": {}
    },
    "ReportDeliveryChannel": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "Formats": {}
    },
    "DeploymentStatus": {},
    "CreationTime": {},
    "LastAttemptedExecutionTime": {},
    "LastSuccessfulExecutionTime": {}
  }
]
```

<h2 id="tocS_ListRestoreJobsInput">ListRestoreJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrestorejobsinput"></a>
<a id="schema_ListRestoreJobsInput"></a>
<a id="tocSlistrestorejobsinput"></a>
<a id="tocslistrestorejobsinput"></a>

```json
{}
```

<h2 id="tocS_RestoreJobsList">RestoreJobsList</h2>
<!-- backwards compatibility -->
<a id="schemarestorejobslist"></a>
<a id="schema_RestoreJobsList"></a>
<a id="tocSrestorejobslist"></a>
<a id="tocsrestorejobslist"></a>

```json
[
  {
    "AccountId": {},
    "RestoreJobId": {},
    "RecoveryPointArn": {},
    "CreationDate": {},
    "CompletionDate": {},
    "Status": {},
    "StatusMessage": {},
    "PercentDone": {},
    "BackupSizeInBytes": {},
    "IamRoleArn": {},
    "ExpectedCompletionTimeMinutes": {},
    "CreatedResourceArn": {},
    "ResourceType": {}
  }
]
```

<h2 id="tocS_ListTagsInput">ListTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsinput"></a>
<a id="schema_ListTagsInput"></a>
<a id="tocSlisttagsinput"></a>
<a id="tocslisttagsinput"></a>

```json
{}
```

<h2 id="tocS_MetadataKey">MetadataKey</h2>
<!-- backwards compatibility -->
<a id="schemametadatakey"></a>
<a id="schema_MetadataKey"></a>
<a id="tocSmetadatakey"></a>
<a id="tocsmetadatakey"></a>

```json
"string"
```

<h2 id="tocS_ProtectedResource">ProtectedResource</h2>
<!-- backwards compatibility -->
<a id="schemaprotectedresource"></a>
<a id="schema_ProtectedResource"></a>
<a id="tocSprotectedresource"></a>
<a id="tocsprotectedresource"></a>

```json
{
  "ResourceArn": {},
  "ResourceType": {},
  "LastBackupTime": {},
  "ResourceName": {}
}
```

A structure that contains information about a backed-up resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|LastBackupTime|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_PutBackupVaultAccessPolicyInput">PutBackupVaultAccessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputbackupvaultaccesspolicyinput"></a>
<a id="schema_PutBackupVaultAccessPolicyInput"></a>
<a id="tocSputbackupvaultaccesspolicyinput"></a>
<a id="tocsputbackupvaultaccesspolicyinput"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_PutBackupVaultLockConfigurationInput">PutBackupVaultLockConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaputbackupvaultlockconfigurationinput"></a>
<a id="schema_PutBackupVaultLockConfigurationInput"></a>
<a id="tocSputbackupvaultlockconfigurationinput"></a>
<a id="tocsputbackupvaultlockconfigurationinput"></a>

```json
{
  "MinRetentionDays": {},
  "MaxRetentionDays": {},
  "ChangeableForDays": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinRetentionDays|object|false|none|none|
|MaxRetentionDays|object|false|none|none|
|ChangeableForDays|object|false|none|none|

<h2 id="tocS_PutBackupVaultNotificationsInput">PutBackupVaultNotificationsInput</h2>
<!-- backwards compatibility -->
<a id="schemaputbackupvaultnotificationsinput"></a>
<a id="schema_PutBackupVaultNotificationsInput"></a>
<a id="tocSputbackupvaultnotificationsinput"></a>
<a id="tocsputbackupvaultnotificationsinput"></a>

```json
{
  "SNSTopicArn": {},
  "BackupVaultEvents": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SNSTopicArn|object|true|none|none|
|BackupVaultEvents|object|true|none|none|

<h2 id="tocS_RecoveryPointByBackupVault">RecoveryPointByBackupVault</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointbybackupvault"></a>
<a id="schema_RecoveryPointByBackupVault"></a>
<a id="tocSrecoverypointbybackupvault"></a>
<a id="tocsrecoverypointbybackupvault"></a>

```json
{
  "RecoveryPointArn": {},
  "BackupVaultName": {},
  "BackupVaultArn": {},
  "SourceBackupVaultArn": {},
  "ResourceArn": {},
  "ResourceType": {},
  "CreatedBy": {
    "BackupPlanId": {},
    "BackupPlanArn": {},
    "BackupPlanVersion": {},
    "BackupRuleId": {}
  },
  "IamRoleArn": {},
  "Status": {},
  "StatusMessage": {},
  "CreationDate": {},
  "CompletionDate": {},
  "BackupSizeInBytes": {},
  "CalculatedLifecycle": {
    "MoveToColdStorageAt": {},
    "DeleteAt": {}
  },
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "EncryptionKeyArn": {},
  "IsEncrypted": {},
  "LastRestoreTime": {},
  "ParentRecoveryPointArn": {},
  "CompositeMemberIdentifier": {},
  "IsParent": {},
  "ResourceName": {}
}
```

Contains detailed information about the recovery points stored in a backup vault.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryPointArn|object|false|none|none|
|BackupVaultName|object|false|none|none|
|BackupVaultArn|object|false|none|none|
|SourceBackupVaultArn|object|false|none|none|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|CreatedBy|object|false|none|none|
|IamRoleArn|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreationDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|BackupSizeInBytes|object|false|none|none|
|CalculatedLifecycle|object|false|none|none|
|Lifecycle|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|IsEncrypted|object|false|none|none|
|LastRestoreTime|object|false|none|none|
|ParentRecoveryPointArn|object|false|none|none|
|CompositeMemberIdentifier|object|false|none|none|
|IsParent|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_RecoveryPointByResource">RecoveryPointByResource</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointbyresource"></a>
<a id="schema_RecoveryPointByResource"></a>
<a id="tocSrecoverypointbyresource"></a>
<a id="tocsrecoverypointbyresource"></a>

```json
{
  "RecoveryPointArn": {},
  "CreationDate": {},
  "Status": {},
  "StatusMessage": {},
  "EncryptionKeyArn": {},
  "BackupSizeBytes": {},
  "BackupVaultName": {},
  "IsParent": {},
  "ParentRecoveryPointArn": {},
  "ResourceName": {}
}
```

Contains detailed information about a saved recovery point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryPointArn|object|false|none|none|
|CreationDate|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|BackupSizeBytes|object|false|none|none|
|BackupVaultName|object|false|none|none|
|IsParent|object|false|none|none|
|ParentRecoveryPointArn|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_RecoveryPointMember">RecoveryPointMember</h2>
<!-- backwards compatibility -->
<a id="schemarecoverypointmember"></a>
<a id="schema_RecoveryPointMember"></a>
<a id="tocSrecoverypointmember"></a>
<a id="tocsrecoverypointmember"></a>

```json
{
  "RecoveryPointArn": {}
}
```

This is a recovery point which is a child (nested) recovery point of a parent (composite) recovery point. These recovery points can be disassociated from their parent (composite) recovery point, in which case they will no longer be a member.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryPointArn|object|false|none|none|

<h2 id="tocS_ReportDestination">ReportDestination</h2>
<!-- backwards compatibility -->
<a id="schemareportdestination"></a>
<a id="schema_ReportDestination"></a>
<a id="tocSreportdestination"></a>
<a id="tocsreportdestination"></a>

```json
{
  "S3BucketName": {},
  "S3Keys": {}
}
```

Contains information from your report job about your report destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|false|none|none|
|S3Keys|object|false|none|none|

<h2 id="tocS_RestoreJobsListMember">RestoreJobsListMember</h2>
<!-- backwards compatibility -->
<a id="schemarestorejobslistmember"></a>
<a id="schema_RestoreJobsListMember"></a>
<a id="tocSrestorejobslistmember"></a>
<a id="tocsrestorejobslistmember"></a>

```json
{
  "AccountId": {},
  "RestoreJobId": {},
  "RecoveryPointArn": {},
  "CreationDate": {},
  "CompletionDate": {},
  "Status": {},
  "StatusMessage": {},
  "PercentDone": {},
  "BackupSizeInBytes": {},
  "IamRoleArn": {},
  "ExpectedCompletionTimeMinutes": {},
  "CreatedResourceArn": {},
  "ResourceType": {}
}
```

Contains metadata about a restore job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|RestoreJobId|object|false|none|none|
|RecoveryPointArn|object|false|none|none|
|CreationDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|PercentDone|object|false|none|none|
|BackupSizeInBytes|object|false|none|none|
|IamRoleArn|object|false|none|none|
|ExpectedCompletionTimeMinutes|object|false|none|none|
|CreatedResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_StartBackupJobInput">StartBackupJobInput</h2>
<!-- backwards compatibility -->
<a id="schemastartbackupjobinput"></a>
<a id="schema_StartBackupJobInput"></a>
<a id="tocSstartbackupjobinput"></a>
<a id="tocsstartbackupjobinput"></a>

```json
{
  "BackupVaultName": {},
  "ResourceArn": {},
  "IamRoleArn": {},
  "IdempotencyToken": {},
  "StartWindowMinutes": {},
  "CompleteWindowMinutes": {},
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  },
  "RecoveryPointTags": {
    "property1": "string",
    "property2": "string"
  },
  "BackupOptions": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupVaultName|object|true|none|none|
|ResourceArn|object|true|none|none|
|IamRoleArn|object|true|none|none|
|IdempotencyToken|object|false|none|none|
|StartWindowMinutes|object|false|none|none|
|CompleteWindowMinutes|object|false|none|none|
|Lifecycle|object|false|none|none|
|RecoveryPointTags|object|false|none|none|
|BackupOptions|object|false|none|none|

<h2 id="tocS_StartCopyJobInput">StartCopyJobInput</h2>
<!-- backwards compatibility -->
<a id="schemastartcopyjobinput"></a>
<a id="schema_StartCopyJobInput"></a>
<a id="tocSstartcopyjobinput"></a>
<a id="tocsstartcopyjobinput"></a>

```json
{
  "RecoveryPointArn": {},
  "SourceBackupVaultName": {},
  "DestinationBackupVaultArn": {},
  "IamRoleArn": {},
  "IdempotencyToken": {},
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryPointArn|object|true|none|none|
|SourceBackupVaultName|object|true|none|none|
|DestinationBackupVaultArn|object|true|none|none|
|IamRoleArn|object|true|none|none|
|IdempotencyToken|object|false|none|none|
|Lifecycle|[Lifecycle](#schemalifecycle)|false|none|<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>|

<h2 id="tocS_StartReportJobInput">StartReportJobInput</h2>
<!-- backwards compatibility -->
<a id="schemastartreportjobinput"></a>
<a id="schema_StartReportJobInput"></a>
<a id="tocSstartreportjobinput"></a>
<a id="tocsstartreportjobinput"></a>

```json
{
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_StartRestoreJobInput">StartRestoreJobInput</h2>
<!-- backwards compatibility -->
<a id="schemastartrestorejobinput"></a>
<a id="schema_StartRestoreJobInput"></a>
<a id="tocSstartrestorejobinput"></a>
<a id="tocsstartrestorejobinput"></a>

```json
{
  "RecoveryPointArn": {},
  "Metadata": {
    "property1": "string",
    "property2": "string"
  },
  "IamRoleArn": {},
  "IdempotencyToken": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryPointArn|object|true|none|none|
|Metadata|object|true|none|none|
|IamRoleArn|object|false|none|none|
|IdempotencyToken|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_StopBackupJobInput">StopBackupJobInput</h2>
<!-- backwards compatibility -->
<a id="schemastopbackupjobinput"></a>
<a id="schema_StopBackupJobInput"></a>
<a id="tocSstopbackupjobinput"></a>
<a id="tocsstopbackupjobinput"></a>

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

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

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

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "TagKeyList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKeyList|object|true|none|none|

<h2 id="tocS_UpdateBackupPlanInput">UpdateBackupPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackupplaninput"></a>
<a id="schema_UpdateBackupPlanInput"></a>
<a id="tocSupdatebackupplaninput"></a>
<a id="tocsupdatebackupplaninput"></a>

```json
{
  "BackupPlan": {
    "BackupPlanName": {},
    "Rules": {},
    "AdvancedBackupSettings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupPlan|object|true|none|none|

<h2 id="tocS_UpdateFrameworkInput">UpdateFrameworkInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateframeworkinput"></a>
<a id="schema_UpdateFrameworkInput"></a>
<a id="tocSupdateframeworkinput"></a>
<a id="tocsupdateframeworkinput"></a>

```json
{
  "FrameworkDescription": {},
  "FrameworkControls": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameworkDescription|object|false|none|none|
|FrameworkControls|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_UpdateGlobalSettingsInput">UpdateGlobalSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobalsettingsinput"></a>
<a id="schema_UpdateGlobalSettingsInput"></a>
<a id="tocSupdateglobalsettingsinput"></a>
<a id="tocsupdateglobalsettingsinput"></a>

```json
{
  "GlobalSettings": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalSettings|object|false|none|none|

<h2 id="tocS_UpdateRecoveryPointLifecycleInput">UpdateRecoveryPointLifecycleInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecoverypointlifecycleinput"></a>
<a id="schema_UpdateRecoveryPointLifecycleInput"></a>
<a id="tocSupdaterecoverypointlifecycleinput"></a>
<a id="tocsupdaterecoverypointlifecycleinput"></a>

```json
{
  "Lifecycle": {
    "MoveToColdStorageAfterDays": {},
    "DeleteAfterDays": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lifecycle|object|false|none|none|

<h2 id="tocS_UpdateRegionSettingsInput">UpdateRegionSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregionsettingsinput"></a>
<a id="schema_UpdateRegionSettingsInput"></a>
<a id="tocSupdateregionsettingsinput"></a>
<a id="tocsupdateregionsettingsinput"></a>

```json
{
  "ResourceTypeOptInPreference": {
    "property1": true,
    "property2": true
  },
  "ResourceTypeManagementPreference": {
    "property1": true,
    "property2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTypeOptInPreference|object|false|none|none|
|ResourceTypeManagementPreference|object|false|none|none|

<h2 id="tocS_UpdateReportPlanInput">UpdateReportPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereportplaninput"></a>
<a id="schema_UpdateReportPlanInput"></a>
<a id="tocSupdatereportplaninput"></a>
<a id="tocsupdatereportplaninput"></a>

```json
{
  "ReportPlanDescription": {},
  "ReportDeliveryChannel": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Formats": {}
  },
  "ReportSetting": {
    "ReportTemplate": {},
    "FrameworkArns": {},
    "NumberOfFrameworks": {},
    "Accounts": {},
    "OrganizationUnits": {},
    "Regions": {}
  },
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportPlanDescription|object|false|none|none|
|ReportDeliveryChannel|object|false|none|none|
|ReportSetting|object|false|none|none|
|IdempotencyToken|object|false|none|none|
