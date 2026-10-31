<h1 id="amazon-documentdb-with-mongodb-compatibility">Amazon DocumentDB with MongoDB compatibility v2014-10-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon DocumentDB API documentation

Base URLs:

* <a href="http://rds.us-east-1.amazonaws.com">http://rds.us-east-1.amazonaws.com</a> - The Amazon DocDB multi-region endpoint

* <a href="https://rds.us-east-1.amazonaws.com">https://rds.us-east-1.amazonaws.com</a> - The Amazon DocDB multi-region endpoint

* <a href="http://rds.amazonaws.com">http://rds.amazonaws.com</a> - The general Amazon DocDB multi-region endpoint

* <a href="https://rds.amazonaws.com">https://rds.amazonaws.com</a> - The general Amazon DocDB multi-region endpoint

* <a href="http://rds.cn-north-1.amazonaws.com.cn">http://rds.cn-north-1.amazonaws.com.cn</a> - The Amazon DocDB endpoint for China (Beijing) and China (Ningxia)

* <a href="https://rds.cn-north-1.amazonaws.com.cn">https://rds.cn-north-1.amazonaws.com.cn</a> - The Amazon DocDB endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/rds/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-documentdb-with-mongodb-compatibility-default">Default</h1>

## GET_AddSourceIdentifierToSubscription

<a id="opIdGET_AddSourceIdentifierToSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=AddSourceIdentifierToSubscription?SubscriptionName=string&SourceIdentifier=string&Action=AddSourceIdentifierToSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddSourceIdentifierToSubscription`

Adds a source identifier to an existing event notification subscription.

<h3 id="getaddsourceidentifiertosubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the Amazon DocumentDB event notification subscription that you want to add a source identifier to.|
|SourceIdentifier|query|string|true|<p>The identifier of the event source to be added:</p> <ul> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>|
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
|Action|AddSourceIdentifierToSubscription|
|Version|2014-10-31|

<h3 id="getaddsourceidentifiertosubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddSourceIdentifierToSubscriptionResult](#schemaaddsourceidentifiertosubscriptionresult)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|481|481|SourceNotFoundFault|[SourceNotFoundFault](#schemasourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddSourceIdentifierToSubscription

<a id="opIdPOST_AddSourceIdentifierToSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=AddSourceIdentifierToSubscription?Action=AddSourceIdentifierToSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"SourceIdentifier":{}}'
```

`POST /#Action=AddSourceIdentifierToSubscription`

Adds a source identifier to an existing event notification subscription.

> Body parameter

```json
{
  "SubscriptionName": {},
  "SourceIdentifier": {}
}
```

<h3 id="postaddsourceidentifiertosubscription-parameters">Parameters</h3>

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
|body|body|[AddSourceIdentifierToSubscriptionMessage](#schemaaddsourceidentifiertosubscriptionmessage)|false|none|
|» SubscriptionName|body|object|true|none|
|» SourceIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddSourceIdentifierToSubscription|
|Version|2014-10-31|

<h3 id="postaddsourceidentifiertosubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddSourceIdentifierToSubscriptionResult](#schemaaddsourceidentifiertosubscriptionresult)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|481|481|SourceNotFoundFault|[SourceNotFoundFault](#schemasourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AddTagsToResource

<a id="opIdGET_AddTagsToResource"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=AddTagsToResource?ResourceName=string&Tags=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=AddTagsToResource&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddTagsToResource`

Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.

<h3 id="getaddtagstoresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|The Amazon DocumentDB resource that the tags are added to. This value is an Amazon Resource Name .|
|Tags|query|[object]|true|The tags to be assigned to the Amazon DocumentDB resource.|
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
|Action|AddTagsToResource|
|Version|2014-10-31|

<h3 id="getaddtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddTagsToResource

<a id="opIdPOST_AddTagsToResource"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=AddTagsToResource?Action=AddTagsToResource&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"Tags":{}}'
```

`POST /#Action=AddTagsToResource`

Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.

> Body parameter

```json
{
  "ResourceName": {},
  "Tags": {}
}
```

<h3 id="postaddtagstoresource-parameters">Parameters</h3>

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
|body|body|[AddTagsToResourceMessage](#schemaaddtagstoresourcemessage)|false|none|
|» ResourceName|body|object|true|none|
|» Tags|body|object|true|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddTagsToResource|
|Version|2014-10-31|

<h3 id="postaddtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ApplyPendingMaintenanceAction

<a id="opIdGET_ApplyPendingMaintenanceAction"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ApplyPendingMaintenanceAction?ResourceIdentifier=string&ApplyAction=string&OptInType=string&Action=ApplyPendingMaintenanceAction&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ApplyPendingMaintenanceAction`

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

<h3 id="getapplypendingmaintenanceaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|query|string|true|The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to.|
|ApplyAction|query|string|true|<p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>|
|OptInType|query|string|true|<p>A value that specifies the type of opt-in request or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource. </p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>|
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
|Action|ApplyPendingMaintenanceAction|
|Version|2014-10-31|

<h3 id="getapplypendingmaintenanceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplyPendingMaintenanceActionResult](#schemaapplypendingmaintenanceactionresult)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ApplyPendingMaintenanceAction

<a id="opIdPOST_ApplyPendingMaintenanceAction"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ApplyPendingMaintenanceAction?Action=ApplyPendingMaintenanceAction&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceIdentifier":{},"ApplyAction":{},"OptInType":{}}'
```

`POST /#Action=ApplyPendingMaintenanceAction`

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

> Body parameter

```json
{
  "ResourceIdentifier": {},
  "ApplyAction": {},
  "OptInType": {}
}
```

<h3 id="postapplypendingmaintenanceaction-parameters">Parameters</h3>

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
|body|body|[ApplyPendingMaintenanceActionMessage](#schemaapplypendingmaintenanceactionmessage)|false|none|
|» ResourceIdentifier|body|object|true|none|
|» ApplyAction|body|object|true|none|
|» OptInType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ApplyPendingMaintenanceAction|
|Version|2014-10-31|

<h3 id="postapplypendingmaintenanceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplyPendingMaintenanceActionResult](#schemaapplypendingmaintenanceactionresult)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CopyDBClusterParameterGroup

<a id="opIdGET_CopyDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CopyDBClusterParameterGroup?SourceDBClusterParameterGroupIdentifier=string&TargetDBClusterParameterGroupIdentifier=string&TargetDBClusterParameterGroupDescription=string&Action=CopyDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CopyDBClusterParameterGroup`

Copies the specified cluster parameter group.

<h3 id="getcopydbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceDBClusterParameterGroupIdentifier|query|string|true|<p>The identifier or Amazon Resource Name (ARN) for the source cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid cluster parameter group.</p> </li> <li> <p>If the source cluster parameter group is in the same Amazon Web Services Region as the copy, specify a valid parameter group identifier; for example, <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source parameter group is in a different Amazon Web Services Region than the copy, specify a valid cluster parameter group ARN; for example, <code>arn:aws:rds:us-east-1:123456789012:sample-cluster:sample-parameter-group</code>.</p> </li> </ul>|
|TargetDBClusterParameterGroupIdentifier|query|string|true|<p>The identifier for the copied cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>|
|TargetDBClusterParameterGroupDescription|query|string|true|A description for the copied cluster parameter group.|
|Tags|query|[object]|false|The tags that are to be assigned to the parameter group.|
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
|Action|CopyDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="getcopydbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyDBClusterParameterGroupResult](#schemacopydbclusterparametergroupresult)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|
|482|482|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CopyDBClusterParameterGroup

<a id="opIdPOST_CopyDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CopyDBClusterParameterGroup?Action=CopyDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceDBClusterParameterGroupIdentifier":{},"TargetDBClusterParameterGroupIdentifier":{},"TargetDBClusterParameterGroupDescription":{},"Tags":{}}'
```

`POST /#Action=CopyDBClusterParameterGroup`

Copies the specified cluster parameter group.

> Body parameter

```json
{
  "SourceDBClusterParameterGroupIdentifier": {},
  "TargetDBClusterParameterGroupIdentifier": {},
  "TargetDBClusterParameterGroupDescription": {},
  "Tags": {}
}
```

<h3 id="postcopydbclusterparametergroup-parameters">Parameters</h3>

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
|body|body|[CopyDBClusterParameterGroupMessage](#schemacopydbclusterparametergroupmessage)|false|none|
|» SourceDBClusterParameterGroupIdentifier|body|object|true|none|
|» TargetDBClusterParameterGroupIdentifier|body|object|true|none|
|» TargetDBClusterParameterGroupDescription|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CopyDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="postcopydbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyDBClusterParameterGroupResult](#schemacopydbclusterparametergroupresult)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|
|482|482|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CopyDBClusterSnapshot

<a id="opIdGET_CopyDBClusterSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CopyDBClusterSnapshot?SourceDBClusterSnapshotIdentifier=string&TargetDBClusterSnapshotIdentifier=string&Action=CopyDBClusterSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CopyDBClusterSnapshot`

<p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>

<h3 id="getcopydbclustersnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceDBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the cluster snapshot to copy. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the <i>available</i> state.</p> </li> <li> <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid snapshot identifier.</p> </li> <li> <p>If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid cluster snapshot ARN.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>|
|TargetDBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the new cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>|
|KmsKeyId|query|string|false|<p>The KMS key ID for an encrypted cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the cluster snapshot is encrypted with the same KMS key as the source cluster snapshot.</p> <p>If you copy an encrypted cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p> <p>To copy an encrypted cluster snapshot to another Amazon Web Services Region, set <code>KmsKeyId</code> to the KMS key ID that you want to use to encrypt the copy of the cluster snapshot in the destination Region. KMS encryption keys are specific to the Amazon Web Services Region that they are created in, and you can't use encryption keys from one Amazon Web Services Region in another Amazon Web Services Region.</p> <p>If you copy an unencrypted cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>|
|PreSignedUrl|query|string|false|<p>The URL that contains a Signature Version 4 signed request for the<code>CopyDBClusterSnapshot</code> API action in the Amazon Web Services Region that contains the source cluster snapshot to copy. You must use the <code>PreSignedUrl</code> parameter when copying a cluster snapshot from another Amazon Web Services Region.</p> <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region.</p> <p>The presigned URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source Amazon Web Services Region that contains the cluster snapshot to be copied. The presigned URL request must contain the following parameter values:</p> <ul> <li> <p> <code>SourceRegion</code> - The ID of the region that contains the snapshot to be copied.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The identifier for the the encrypted cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted cluster snapshot from the us-east-1 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks something like the following: <code>arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot</code>.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new cluster snapshot to be created. This parameter isn't case sensitive.</p> </li> </ul>|
|CopyTags|query|boolean|false|Set to <code>true</code> to copy all tags from the source cluster snapshot to the target cluster snapshot, and otherwise <code>false</code>. The default is <code>false</code>.|
|Tags|query|[object]|false|The tags to be assigned to the cluster snapshot.|
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
|Action|CopyDBClusterSnapshot|
|Version|2014-10-31|

<h3 id="getcopydbclustersnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyDBClusterSnapshotResult](#schemacopydbclustersnapshotresult)|
|480|480|DBClusterSnapshotAlreadyExistsFault|[DBClusterSnapshotAlreadyExistsFault](#schemadbclustersnapshotalreadyexistsfault)|
|481|481|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|484|484|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|485|485|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CopyDBClusterSnapshot

<a id="opIdPOST_CopyDBClusterSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CopyDBClusterSnapshot?Action=CopyDBClusterSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceDBClusterSnapshotIdentifier":{},"TargetDBClusterSnapshotIdentifier":{},"KmsKeyId":{},"PreSignedUrl":{},"CopyTags":{},"Tags":{}}'
```

`POST /#Action=CopyDBClusterSnapshot`

<p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>

> Body parameter

```json
{
  "SourceDBClusterSnapshotIdentifier": {},
  "TargetDBClusterSnapshotIdentifier": {},
  "KmsKeyId": {},
  "PreSignedUrl": {},
  "CopyTags": {},
  "Tags": {}
}
```

<h3 id="postcopydbclustersnapshot-parameters">Parameters</h3>

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
|body|body|[CopyDBClusterSnapshotMessage](#schemacopydbclustersnapshotmessage)|false|none|
|» SourceDBClusterSnapshotIdentifier|body|object|true|none|
|» TargetDBClusterSnapshotIdentifier|body|object|true|none|
|» KmsKeyId|body|object|false|none|
|» PreSignedUrl|body|object|false|none|
|» CopyTags|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CopyDBClusterSnapshot|
|Version|2014-10-31|

<h3 id="postcopydbclustersnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyDBClusterSnapshotResult](#schemacopydbclustersnapshotresult)|
|480|480|DBClusterSnapshotAlreadyExistsFault|[DBClusterSnapshotAlreadyExistsFault](#schemadbclustersnapshotalreadyexistsfault)|
|481|481|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|484|484|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|485|485|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBCluster

<a id="opIdGET_CreateDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBCluster?DBClusterIdentifier=string&Engine=string&Action=CreateDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBCluster`

Creates a new Amazon DocumentDB cluster.

<h3 id="getcreatedbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AvailabilityZones|query|[object]|false|A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.|
|BackupRetentionPeriod|query|integer|false|<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>|
|DBClusterIdentifier|query|string|true|<p>The cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster</code> </p>|
|DBClusterParameterGroupName|query|string|false|The name of the cluster parameter group to associate with this cluster.|
|VpcSecurityGroupIds|query|[object]|false|A list of EC2 VPC security groups to associate with this cluster. |
|DBSubnetGroupName|query|string|false|<p>A subnet group to associate with this cluster.</p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|Engine|query|string|true|<p>The name of the database engine to be used for this cluster.</p> <p>Valid values: <code>docdb</code> </p>|
|EngineVersion|query|string|false|The version number of the database engine to use. The <code>--engine-version</code> will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.|
|Port|query|integer|false|The port number on which the instances in the cluster accept connections.|
|MasterUsername|query|string|false|<p>The name of the master user for the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 63 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine. </p> </li> </ul>|
|MasterUserPassword|query|string|false|<p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>|
|PreferredBackupWindow|query|string|false|<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window. </p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>|
|PreferredMaintenanceWindow|query|string|false|<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>|
|Tags|query|[object]|false|The tags to be assigned to the cluster.|
|StorageEncrypted|query|boolean|false|Specifies whether the cluster is encrypted.|
|KmsKeyId|query|string|false|<p>The KMS key identifier for an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>: </p> <ul> <li> <p>If the <code>StorageEncrypted</code> parameter is <code>true</code>, Amazon DocumentDB uses your default encryption key. </p> </li> </ul> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.</p>|
|PreSignedUrl|query|string|false|Not currently supported. |
|EnableCloudwatchLogsExports|query|[[String](#schemastring)]|false|A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html"> Auditing Amazon DocumentDB Events</a> and <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html"> Profiling Amazon DocumentDB Operations</a>. |
|DeletionProtection|query|boolean|false|Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.|
|GlobalClusterIdentifier|query|string|false|The cluster identifier of the new global cluster.|
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
|Action|CreateDBCluster|
|Version|2014-10-31|

<h3 id="getcreatedbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterResult](#schemacreatedbclusterresult)|
|480|480|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|
|481|481|InsufficientStorageClusterCapacityFault|[InsufficientStorageClusterCapacityFault](#schemainsufficientstorageclustercapacityfault)|
|482|482|DBClusterQuotaExceededFault|[DBClusterQuotaExceededFault](#schemadbclusterquotaexceededfault)|
|483|483|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|484|484|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|485|485|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|486|486|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|487|487|InvalidDBSubnetGroupStateFault|[InvalidDBSubnetGroupStateFault](#schemainvaliddbsubnetgroupstatefault)|
|488|488|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|489|489|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|490|490|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|
|491|491|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|492|492|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|493|493|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|494|494|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|495|495|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|496|496|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBCluster

<a id="opIdPOST_CreateDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBCluster?Action=CreateDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AvailabilityZones":{},"BackupRetentionPeriod":{},"DBClusterIdentifier":{},"DBClusterParameterGroupName":{},"VpcSecurityGroupIds":{},"DBSubnetGroupName":{},"Engine":{},"EngineVersion":{},"Port":{},"MasterUsername":{},"MasterUserPassword":{},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"Tags":{},"StorageEncrypted":{},"KmsKeyId":{},"PreSignedUrl":{},"EnableCloudwatchLogsExports":{},"DeletionProtection":{},"GlobalClusterIdentifier":{}}'
```

`POST /#Action=CreateDBCluster`

Creates a new Amazon DocumentDB cluster.

> Body parameter

```json
{
  "AvailabilityZones": {},
  "BackupRetentionPeriod": {},
  "DBClusterIdentifier": {},
  "DBClusterParameterGroupName": {},
  "VpcSecurityGroupIds": {},
  "DBSubnetGroupName": {},
  "Engine": {},
  "EngineVersion": {},
  "Port": {},
  "MasterUsername": {},
  "MasterUserPassword": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "Tags": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "PreSignedUrl": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {},
  "GlobalClusterIdentifier": {}
}
```

<h3 id="postcreatedbcluster-parameters">Parameters</h3>

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
|body|body|[CreateDBClusterMessage](#schemacreatedbclustermessage)|false|none|
|» AvailabilityZones|body|object|false|none|
|» BackupRetentionPeriod|body|object|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» DBClusterParameterGroupName|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» DBSubnetGroupName|body|object|false|none|
|» Engine|body|object|true|none|
|» EngineVersion|body|object|false|none|
|» Port|body|object|false|none|
|» MasterUsername|body|object|false|none|
|» MasterUserPassword|body|object|false|none|
|» PreferredBackupWindow|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» StorageEncrypted|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» PreSignedUrl|body|object|false|none|
|» EnableCloudwatchLogsExports|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» GlobalClusterIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDBCluster|
|Version|2014-10-31|

<h3 id="postcreatedbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterResult](#schemacreatedbclusterresult)|
|480|480|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|
|481|481|InsufficientStorageClusterCapacityFault|[InsufficientStorageClusterCapacityFault](#schemainsufficientstorageclustercapacityfault)|
|482|482|DBClusterQuotaExceededFault|[DBClusterQuotaExceededFault](#schemadbclusterquotaexceededfault)|
|483|483|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|484|484|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|485|485|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|486|486|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|487|487|InvalidDBSubnetGroupStateFault|[InvalidDBSubnetGroupStateFault](#schemainvaliddbsubnetgroupstatefault)|
|488|488|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|489|489|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|490|490|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|
|491|491|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|492|492|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|493|493|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|494|494|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|495|495|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|496|496|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBClusterParameterGroup

<a id="opIdGET_CreateDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBClusterParameterGroup?DBClusterParameterGroupName=string&DBParameterGroupFamily=string&Description=string&Action=CreateDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBClusterParameterGroup`

<p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>

<h3 id="getcreatedbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|<p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must not match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>|
|DBParameterGroupFamily|query|string|true|The cluster parameter group family name.|
|Description|query|string|true|The description for the cluster parameter group.|
|Tags|query|[object]|false|The tags to be assigned to the cluster parameter group.|
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
|Action|CreateDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="getcreatedbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterParameterGroupResult](#schemacreatedbclusterparametergroupresult)|
|480|480|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|
|481|481|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBClusterParameterGroup

<a id="opIdPOST_CreateDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBClusterParameterGroup?Action=CreateDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{},"Tags":{}}'
```

`POST /#Action=CreateDBClusterParameterGroup`

<p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>

> Body parameter

```json
{
  "DBClusterParameterGroupName": {},
  "DBParameterGroupFamily": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="postcreatedbclusterparametergroup-parameters">Parameters</h3>

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
|body|body|[CreateDBClusterParameterGroupMessage](#schemacreatedbclusterparametergroupmessage)|false|none|
|» DBClusterParameterGroupName|body|object|true|none|
|» DBParameterGroupFamily|body|object|true|none|
|» Description|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="postcreatedbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterParameterGroupResult](#schemacreatedbclusterparametergroupresult)|
|480|480|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|
|481|481|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBClusterSnapshot

<a id="opIdGET_CreateDBClusterSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBClusterSnapshot?DBClusterSnapshotIdentifier=string&DBClusterIdentifier=string&Action=CreateDBClusterSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBClusterSnapshot`

Creates a snapshot of a cluster. 

<h3 id="getcreatedbclustersnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>|
|DBClusterIdentifier|query|string|true|<p>The identifier of the cluster to create a snapshot for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul> <p>Example: <code>my-cluster</code> </p>|
|Tags|query|[object]|false|The tags to be assigned to the cluster snapshot.|
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
|Action|CreateDBClusterSnapshot|
|Version|2014-10-31|

<h3 id="getcreatedbclustersnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterSnapshotResult](#schemacreatedbclustersnapshotresult)|
|480|480|DBClusterSnapshotAlreadyExistsFault|[DBClusterSnapshotAlreadyExistsFault](#schemadbclustersnapshotalreadyexistsfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|483|483|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|484|484|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBClusterSnapshot

<a id="opIdPOST_CreateDBClusterSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBClusterSnapshot?Action=CreateDBClusterSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{},"DBClusterIdentifier":{},"Tags":{}}'
```

`POST /#Action=CreateDBClusterSnapshot`

Creates a snapshot of a cluster. 

> Body parameter

```json
{
  "DBClusterSnapshotIdentifier": {},
  "DBClusterIdentifier": {},
  "Tags": {}
}
```

<h3 id="postcreatedbclustersnapshot-parameters">Parameters</h3>

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
|body|body|[CreateDBClusterSnapshotMessage](#schemacreatedbclustersnapshotmessage)|false|none|
|» DBClusterSnapshotIdentifier|body|object|true|none|
|» DBClusterIdentifier|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDBClusterSnapshot|
|Version|2014-10-31|

<h3 id="postcreatedbclustersnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterSnapshotResult](#schemacreatedbclustersnapshotresult)|
|480|480|DBClusterSnapshotAlreadyExistsFault|[DBClusterSnapshotAlreadyExistsFault](#schemadbclustersnapshotalreadyexistsfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|483|483|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|484|484|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBInstance

<a id="opIdGET_CreateDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBInstance?DBInstanceIdentifier=string&DBInstanceClass=string&Engine=string&DBClusterIdentifier=string&Action=CreateDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBInstance`

Creates a new instance.

<h3 id="getcreatedbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|<p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>|
|DBInstanceClass|query|string|true|The compute and memory capacity of the instance; for example, <code>db.r5.large</code>. |
|Engine|query|string|true|<p>The name of the database engine to be used for this instance.</p> <p>Valid value: <code>docdb</code> </p>|
|AvailabilityZone|query|string|false|<p>The Amazon EC2 Availability Zone that the instance is created in. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p> <p>Example: <code>us-east-1d</code> </p>|
|PreferredMaintenanceWindow|query|string|false|<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>|
|AutoMinorVersionUpgrade|query|boolean|false|<p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p> <p>Default: <code>false</code> </p>|
|Tags|query|[object]|false|The tags to be assigned to the instance. You can assign up to 10 tags to an instance.|
|DBClusterIdentifier|query|string|true|The identifier of the cluster that the instance will belong to.|
|CopyTagsToSnapshot|query|boolean|false|A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.|
|PromotionTier|query|integer|false|<p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>|
|EnablePerformanceInsights|query|boolean|false|A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.|
|PerformanceInsightsKMSKeyId|query|string|false|<p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>|
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
|Action|CreateDBInstance|
|Version|2014-10-31|

<h3 id="getcreatedbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBInstanceResult](#schemacreatedbinstanceresult)|
|480|480|DBInstanceAlreadyExistsFault|[DBInstanceAlreadyExistsFault](#schemadbinstancealreadyexistsfault)|
|481|481|InsufficientDBInstanceCapacityFault|[InsufficientDBInstanceCapacityFault](#schemainsufficientdbinstancecapacityfault)|
|482|482|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|483|483|DBSecurityGroupNotFoundFault|[DBSecurityGroupNotFoundFault](#schemadbsecuritygroupnotfoundfault)|
|484|484|InstanceQuotaExceededFault|[InstanceQuotaExceededFault](#schemainstancequotaexceededfault)|
|485|485|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|486|486|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|487|487|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|488|488|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|489|489|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|490|490|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|491|491|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|492|492|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|493|493|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|494|494|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBInstance

<a id="opIdPOST_CreateDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBInstance?Action=CreateDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"DBInstanceClass":{},"Engine":{},"AvailabilityZone":{},"PreferredMaintenanceWindow":{},"AutoMinorVersionUpgrade":{},"Tags":{},"DBClusterIdentifier":{},"CopyTagsToSnapshot":{},"PromotionTier":{},"EnablePerformanceInsights":{},"PerformanceInsightsKMSKeyId":{}}'
```

`POST /#Action=CreateDBInstance`

Creates a new instance.

> Body parameter

```json
{
  "DBInstanceIdentifier": {},
  "DBInstanceClass": {},
  "Engine": {},
  "AvailabilityZone": {},
  "PreferredMaintenanceWindow": {},
  "AutoMinorVersionUpgrade": {},
  "Tags": {},
  "DBClusterIdentifier": {},
  "CopyTagsToSnapshot": {},
  "PromotionTier": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {}
}
```

<h3 id="postcreatedbinstance-parameters">Parameters</h3>

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
|body|body|[CreateDBInstanceMessage](#schemacreatedbinstancemessage)|false|none|
|» DBInstanceIdentifier|body|object|true|none|
|» DBInstanceClass|body|object|true|none|
|» Engine|body|object|true|none|
|» AvailabilityZone|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» CopyTagsToSnapshot|body|object|false|none|
|» PromotionTier|body|object|false|none|
|» EnablePerformanceInsights|body|object|false|none|
|» PerformanceInsightsKMSKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDBInstance|
|Version|2014-10-31|

<h3 id="postcreatedbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBInstanceResult](#schemacreatedbinstanceresult)|
|480|480|DBInstanceAlreadyExistsFault|[DBInstanceAlreadyExistsFault](#schemadbinstancealreadyexistsfault)|
|481|481|InsufficientDBInstanceCapacityFault|[InsufficientDBInstanceCapacityFault](#schemainsufficientdbinstancecapacityfault)|
|482|482|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|483|483|DBSecurityGroupNotFoundFault|[DBSecurityGroupNotFoundFault](#schemadbsecuritygroupnotfoundfault)|
|484|484|InstanceQuotaExceededFault|[InstanceQuotaExceededFault](#schemainstancequotaexceededfault)|
|485|485|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|486|486|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|487|487|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|488|488|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|489|489|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|490|490|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|491|491|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|492|492|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|493|493|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|494|494|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBSubnetGroup

<a id="opIdGET_CreateDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBSubnetGroup?DBSubnetGroupName=string&DBSubnetGroupDescription=string&SubnetIds=%7B%7D&Action=CreateDBSubnetGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBSubnetGroup`

Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

<h3 id="getcreatedbsubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|true|<p>The name for the subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|DBSubnetGroupDescription|query|string|true|The description for the subnet group.|
|SubnetIds|query|[object]|true|The Amazon EC2 subnet IDs for the subnet group.|
|Tags|query|[object]|false|The tags to be assigned to the subnet group.|
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
|Action|CreateDBSubnetGroup|
|Version|2014-10-31|

<h3 id="getcreatedbsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBSubnetGroupResult](#schemacreatedbsubnetgroupresult)|
|480|480|DBSubnetGroupAlreadyExistsFault|[DBSubnetGroupAlreadyExistsFault](#schemadbsubnetgroupalreadyexistsfault)|
|481|481|DBSubnetGroupQuotaExceededFault|[DBSubnetGroupQuotaExceededFault](#schemadbsubnetgroupquotaexceededfault)|
|482|482|DBSubnetQuotaExceededFault|[DBSubnetQuotaExceededFault](#schemadbsubnetquotaexceededfault)|
|483|483|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|484|484|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBSubnetGroup

<a id="opIdPOST_CreateDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateDBSubnetGroup?Action=CreateDBSubnetGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{},"Tags":{}}'
```

`POST /#Action=CreateDBSubnetGroup`

Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

> Body parameter

```json
{
  "DBSubnetGroupName": {},
  "DBSubnetGroupDescription": {},
  "SubnetIds": {},
  "Tags": {}
}
```

<h3 id="postcreatedbsubnetgroup-parameters">Parameters</h3>

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
|body|body|[CreateDBSubnetGroupMessage](#schemacreatedbsubnetgroupmessage)|false|none|
|» DBSubnetGroupName|body|object|true|none|
|» DBSubnetGroupDescription|body|object|true|none|
|» SubnetIds|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDBSubnetGroup|
|Version|2014-10-31|

<h3 id="postcreatedbsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBSubnetGroupResult](#schemacreatedbsubnetgroupresult)|
|480|480|DBSubnetGroupAlreadyExistsFault|[DBSubnetGroupAlreadyExistsFault](#schemadbsubnetgroupalreadyexistsfault)|
|481|481|DBSubnetGroupQuotaExceededFault|[DBSubnetGroupQuotaExceededFault](#schemadbsubnetgroupquotaexceededfault)|
|482|482|DBSubnetQuotaExceededFault|[DBSubnetQuotaExceededFault](#schemadbsubnetquotaexceededfault)|
|483|483|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|484|484|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateEventSubscription

<a id="opIdGET_CreateEventSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateEventSubscription?SubscriptionName=string&SnsTopicArn=string&Action=CreateEventSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateEventSubscription`

<p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>

<h3 id="getcreateeventsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|<p>The name of the subscription.</p> <p>Constraints: The name must be fewer than 255 characters.</p>|
|SnsTopicArn|query|string|true|The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.|
|SourceType|query|string|false|<p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, you would set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-cluster</code>, <code>db-parameter-group</code>, <code>db-security-group</code>, <code>db-cluster-snapshot</code> </p>|
|EventCategories|query|[object]|false| A list of event categories for a <code>SourceType</code> that you want to subscribe to. |
|SourceIds|query|[object]|false|<p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIds</code> are provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>|
|Enabled|query|boolean|false| A Boolean value; set to <code>true</code> to activate the subscription, set to <code>false</code> to create the subscription but not active it. |
|Tags|query|[object]|false|The tags to be assigned to the event subscription.|
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
|Action|CreateEventSubscription|
|Version|2014-10-31|

<h3 id="getcreateeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEventSubscriptionResult](#schemacreateeventsubscriptionresult)|
|480|480|EventSubscriptionQuotaExceededFault|[EventSubscriptionQuotaExceededFault](#schemaeventsubscriptionquotaexceededfault)|
|481|481|SubscriptionAlreadyExistFault|[SubscriptionAlreadyExistFault](#schemasubscriptionalreadyexistfault)|
|482|482|SNSInvalidTopicFault|[SNSInvalidTopicFault](#schemasnsinvalidtopicfault)|
|483|483|SNSNoAuthorizationFault|[SNSNoAuthorizationFault](#schemasnsnoauthorizationfault)|
|484|484|SNSTopicArnNotFoundFault|[SNSTopicArnNotFoundFault](#schemasnstopicarnnotfoundfault)|
|485|485|SubscriptionCategoryNotFoundFault|[SubscriptionCategoryNotFoundFault](#schemasubscriptioncategorynotfoundfault)|
|486|486|SourceNotFoundFault|[SourceNotFoundFault](#schemasourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateEventSubscription

<a id="opIdPOST_CreateEventSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateEventSubscription?Action=CreateEventSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{},"SourceIds":{},"Enabled":{},"Tags":{}}'
```

`POST /#Action=CreateEventSubscription`

<p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>

> Body parameter

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "SourceIds": {},
  "Enabled": {},
  "Tags": {}
}
```

<h3 id="postcreateeventsubscription-parameters">Parameters</h3>

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
|body|body|[CreateEventSubscriptionMessage](#schemacreateeventsubscriptionmessage)|false|none|
|» SubscriptionName|body|object|true|none|
|» SnsTopicArn|body|object|true|none|
|» SourceType|body|object|false|none|
|» EventCategories|body|object|false|none|
|» SourceIds|body|object|false|none|
|» Enabled|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateEventSubscription|
|Version|2014-10-31|

<h3 id="postcreateeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEventSubscriptionResult](#schemacreateeventsubscriptionresult)|
|480|480|EventSubscriptionQuotaExceededFault|[EventSubscriptionQuotaExceededFault](#schemaeventsubscriptionquotaexceededfault)|
|481|481|SubscriptionAlreadyExistFault|[SubscriptionAlreadyExistFault](#schemasubscriptionalreadyexistfault)|
|482|482|SNSInvalidTopicFault|[SNSInvalidTopicFault](#schemasnsinvalidtopicfault)|
|483|483|SNSNoAuthorizationFault|[SNSNoAuthorizationFault](#schemasnsnoauthorizationfault)|
|484|484|SNSTopicArnNotFoundFault|[SNSTopicArnNotFoundFault](#schemasnstopicarnnotfoundfault)|
|485|485|SubscriptionCategoryNotFoundFault|[SubscriptionCategoryNotFoundFault](#schemasubscriptioncategorynotfoundfault)|
|486|486|SourceNotFoundFault|[SourceNotFoundFault](#schemasourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateGlobalCluster

<a id="opIdGET_CreateGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateGlobalCluster?GlobalClusterIdentifier=string&Action=CreateGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateGlobalCluster`

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

<h3 id="getcreateglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|The cluster identifier of the new global cluster.|
|SourceDBClusterIdentifier|query|string|false|The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.|
|Engine|query|string|false|The name of the database engine to be used for this cluster.|
|EngineVersion|query|string|false|The engine version of the global cluster.|
|DeletionProtection|query|boolean|false|The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled. |
|DatabaseName|query|string|false|The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.|
|StorageEncrypted|query|boolean|false|The storage encryption setting for the new global cluster. |
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
|Action|CreateGlobalCluster|
|Version|2014-10-31|

<h3 id="getcreateglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGlobalClusterResult](#schemacreateglobalclusterresult)|
|480|480|GlobalClusterAlreadyExistsFault|[GlobalClusterAlreadyExistsFault](#schemaglobalclusteralreadyexistsfault)|
|481|481|GlobalClusterQuotaExceededFault|[GlobalClusterQuotaExceededFault](#schemaglobalclusterquotaexceededfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateGlobalCluster

<a id="opIdPOST_CreateGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=CreateGlobalCluster?Action=CreateGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"SourceDBClusterIdentifier":{},"Engine":{},"EngineVersion":{},"DeletionProtection":{},"DatabaseName":{},"StorageEncrypted":{}}'
```

`POST /#Action=CreateGlobalCluster`

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
  "SourceDBClusterIdentifier": {},
  "Engine": {},
  "EngineVersion": {},
  "DeletionProtection": {},
  "DatabaseName": {},
  "StorageEncrypted": {}
}
```

<h3 id="postcreateglobalcluster-parameters">Parameters</h3>

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
|body|body|[CreateGlobalClusterMessage](#schemacreateglobalclustermessage)|false|none|
|» GlobalClusterIdentifier|body|object|true|none|
|» SourceDBClusterIdentifier|body|object|false|none|
|» Engine|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» DatabaseName|body|object|false|none|
|» StorageEncrypted|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateGlobalCluster|
|Version|2014-10-31|

<h3 id="postcreateglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGlobalClusterResult](#schemacreateglobalclusterresult)|
|480|480|GlobalClusterAlreadyExistsFault|[GlobalClusterAlreadyExistsFault](#schemaglobalclusteralreadyexistsfault)|
|481|481|GlobalClusterQuotaExceededFault|[GlobalClusterQuotaExceededFault](#schemaglobalclusterquotaexceededfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDBCluster

<a id="opIdGET_DeleteDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBCluster?DBClusterIdentifier=string&Action=DeleteDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBCluster`

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

<h3 id="getdeletedbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|<p>The cluster identifier for the cluster to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>|
|SkipFinalSnapshot|query|boolean|false|<p> Determines whether a final cluster snapshot is created before the cluster is deleted. If <code>true</code> is specified, no cluster snapshot is created. If <code>false</code> is specified, a cluster snapshot is created before the DB cluster is deleted. </p> <note> <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a <code>FinalDBSnapshotIdentifier</code> parameter.</p> </note> <p>Default: <code>false</code> </p>|
|FinalDBSnapshotIdentifier|query|string|false|<p> The cluster snapshot identifier of the new cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>. </p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to <code>true</code> results in an error. </p> </note> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>|
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
|Action|DeleteDBCluster|
|Version|2014-10-31|

<h3 id="getdeletedbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBClusterResult](#schemadeletedbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|DBClusterSnapshotAlreadyExistsFault|[DBClusterSnapshotAlreadyExistsFault](#schemadbclustersnapshotalreadyexistsfault)|
|483|483|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|484|484|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDBCluster

<a id="opIdPOST_DeleteDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBCluster?Action=DeleteDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"SkipFinalSnapshot":{},"FinalDBSnapshotIdentifier":{}}'
```

`POST /#Action=DeleteDBCluster`

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "SkipFinalSnapshot": {},
  "FinalDBSnapshotIdentifier": {}
}
```

<h3 id="postdeletedbcluster-parameters">Parameters</h3>

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
|body|body|[DeleteDBClusterMessage](#schemadeletedbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» SkipFinalSnapshot|body|object|false|none|
|» FinalDBSnapshotIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDBCluster|
|Version|2014-10-31|

<h3 id="postdeletedbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBClusterResult](#schemadeletedbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|DBClusterSnapshotAlreadyExistsFault|[DBClusterSnapshotAlreadyExistsFault](#schemadbclustersnapshotalreadyexistsfault)|
|483|483|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|484|484|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDBClusterParameterGroup

<a id="opIdGET_DeleteDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBClusterParameterGroup?DBClusterParameterGroupName=string&Action=DeleteDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBClusterParameterGroup`

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

<h3 id="getdeletedbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|<p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing cluster parameter group.</p> </li> <li> <p>You can't delete a default cluster parameter group.</p> </li> <li> <p>Cannot be associated with any clusters.</p> </li> </ul>|
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
|Action|DeleteDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="getdeletedbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|
|481|481|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDBClusterParameterGroup

<a id="opIdPOST_DeleteDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBClusterParameterGroup?Action=DeleteDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{}}'
```

`POST /#Action=DeleteDBClusterParameterGroup`

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

> Body parameter

```json
{
  "DBClusterParameterGroupName": {}
}
```

<h3 id="postdeletedbclusterparametergroup-parameters">Parameters</h3>

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
|body|body|[DeleteDBClusterParameterGroupMessage](#schemadeletedbclusterparametergroupmessage)|false|none|
|» DBClusterParameterGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="postdeletedbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|
|481|481|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDBClusterSnapshot

<a id="opIdGET_DeleteDBClusterSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBClusterSnapshot?DBClusterSnapshotIdentifier=string&Action=DeleteDBClusterSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBClusterSnapshot`

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

<h3 id="getdeletedbclustersnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing cluster snapshot in the <code>available</code> state.</p>|
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
|Action|DeleteDBClusterSnapshot|
|Version|2014-10-31|

<h3 id="getdeletedbclustersnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBClusterSnapshotResult](#schemadeletedbclustersnapshotresult)|
|480|480|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|481|481|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDBClusterSnapshot

<a id="opIdPOST_DeleteDBClusterSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBClusterSnapshot?Action=DeleteDBClusterSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{}}'
```

`POST /#Action=DeleteDBClusterSnapshot`

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

> Body parameter

```json
{
  "DBClusterSnapshotIdentifier": {}
}
```

<h3 id="postdeletedbclustersnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteDBClusterSnapshotMessage](#schemadeletedbclustersnapshotmessage)|false|none|
|» DBClusterSnapshotIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDBClusterSnapshot|
|Version|2014-10-31|

<h3 id="postdeletedbclustersnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBClusterSnapshotResult](#schemadeletedbclustersnapshotresult)|
|480|480|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|481|481|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDBInstance

<a id="opIdGET_DeleteDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBInstance?DBInstanceIdentifier=string&Action=DeleteDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBInstance`

Deletes a previously provisioned instance.

<h3 id="getdeletedbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|<p>The instance identifier for the instance to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing instance.</p> </li> </ul>|
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
|Action|DeleteDBInstance|
|Version|2014-10-31|

<h3 id="getdeletedbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBInstanceResult](#schemadeletedbinstanceresult)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|482|482|DBSnapshotAlreadyExistsFault|[DBSnapshotAlreadyExistsFault](#schemadbsnapshotalreadyexistsfault)|
|483|483|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|484|484|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDBInstance

<a id="opIdPOST_DeleteDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBInstance?Action=DeleteDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{}}'
```

`POST /#Action=DeleteDBInstance`

Deletes a previously provisioned instance.

> Body parameter

```json
{
  "DBInstanceIdentifier": {}
}
```

<h3 id="postdeletedbinstance-parameters">Parameters</h3>

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
|body|body|[DeleteDBInstanceMessage](#schemadeletedbinstancemessage)|false|none|
|» DBInstanceIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDBInstance|
|Version|2014-10-31|

<h3 id="postdeletedbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBInstanceResult](#schemadeletedbinstanceresult)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|482|482|DBSnapshotAlreadyExistsFault|[DBSnapshotAlreadyExistsFault](#schemadbsnapshotalreadyexistsfault)|
|483|483|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|484|484|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDBSubnetGroup

<a id="opIdGET_DeleteDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBSubnetGroup?DBSubnetGroupName=string&Action=DeleteDBSubnetGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBSubnetGroup`

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

<h3 id="getdeletedbsubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|true|<p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
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
|Action|DeleteDBSubnetGroup|
|Version|2014-10-31|

<h3 id="getdeletedbsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidDBSubnetGroupStateFault|[InvalidDBSubnetGroupStateFault](#schemainvaliddbsubnetgroupstatefault)|
|481|481|InvalidDBSubnetStateFault|[InvalidDBSubnetStateFault](#schemainvaliddbsubnetstatefault)|
|482|482|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDBSubnetGroup

<a id="opIdPOST_DeleteDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteDBSubnetGroup?Action=DeleteDBSubnetGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{}}'
```

`POST /#Action=DeleteDBSubnetGroup`

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

> Body parameter

```json
{
  "DBSubnetGroupName": {}
}
```

<h3 id="postdeletedbsubnetgroup-parameters">Parameters</h3>

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
|body|body|[DeleteDBSubnetGroupMessage](#schemadeletedbsubnetgroupmessage)|false|none|
|» DBSubnetGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDBSubnetGroup|
|Version|2014-10-31|

<h3 id="postdeletedbsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidDBSubnetGroupStateFault|[InvalidDBSubnetGroupStateFault](#schemainvaliddbsubnetgroupstatefault)|
|481|481|InvalidDBSubnetStateFault|[InvalidDBSubnetStateFault](#schemainvaliddbsubnetstatefault)|
|482|482|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteEventSubscription

<a id="opIdGET_DeleteEventSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteEventSubscription?SubscriptionName=string&Action=DeleteEventSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteEventSubscription`

Deletes an Amazon DocumentDB event notification subscription.

<h3 id="getdeleteeventsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the Amazon DocumentDB event notification subscription that you want to delete.|
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
|Action|DeleteEventSubscription|
|Version|2014-10-31|

<h3 id="getdeleteeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventSubscriptionResult](#schemadeleteeventsubscriptionresult)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|481|481|InvalidEventSubscriptionStateFault|[InvalidEventSubscriptionStateFault](#schemainvalideventsubscriptionstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteEventSubscription

<a id="opIdPOST_DeleteEventSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteEventSubscription?Action=DeleteEventSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{}}'
```

`POST /#Action=DeleteEventSubscription`

Deletes an Amazon DocumentDB event notification subscription.

> Body parameter

```json
{
  "SubscriptionName": {}
}
```

<h3 id="postdeleteeventsubscription-parameters">Parameters</h3>

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
|body|body|[DeleteEventSubscriptionMessage](#schemadeleteeventsubscriptionmessage)|false|none|
|» SubscriptionName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteEventSubscription|
|Version|2014-10-31|

<h3 id="postdeleteeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventSubscriptionResult](#schemadeleteeventsubscriptionresult)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|481|481|InvalidEventSubscriptionStateFault|[InvalidEventSubscriptionStateFault](#schemainvalideventsubscriptionstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteGlobalCluster

<a id="opIdGET_DeleteGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteGlobalCluster?GlobalClusterIdentifier=string&Action=DeleteGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteGlobalCluster`

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

<h3 id="getdeleteglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|The cluster identifier of the global cluster being deleted.|
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
|Action|DeleteGlobalCluster|
|Version|2014-10-31|

<h3 id="getdeleteglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGlobalClusterResult](#schemadeleteglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteGlobalCluster

<a id="opIdPOST_DeleteGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DeleteGlobalCluster?Action=DeleteGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{}}'
```

`POST /#Action=DeleteGlobalCluster`

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

> Body parameter

```json
{
  "GlobalClusterIdentifier": {}
}
```

<h3 id="postdeleteglobalcluster-parameters">Parameters</h3>

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
|body|body|[DeleteGlobalClusterMessage](#schemadeleteglobalclustermessage)|false|none|
|» GlobalClusterIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteGlobalCluster|
|Version|2014-10-31|

<h3 id="postdeleteglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGlobalClusterResult](#schemadeleteglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeCertificates

<a id="opIdGET_DescribeCertificates"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeCertificates?Action=DescribeCertificates&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeCertificates`

Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.

<h3 id="getdescribecertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CertificateIdentifier|query|string|false|<p>The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to <code>MaxRecords</code> certificates is returned. This parameter is not case sensitive.</p> <p>Constraints</p> <ul> <li> <p>Must match an existing <code>CertificateIdentifier</code>.</p> </li> </ul>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints:</p> <ul> <li> <p>Minimum: 20</p> </li> <li> <p>Maximum: 100</p> </li> </ul>|
|Marker|query|string|false|An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeCertificates|
|Version|2014-10-31|

<h3 id="getdescribecertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CertificateMessage](#schemacertificatemessage)|
|480|480|CertificateNotFoundFault|[CertificateNotFoundFault](#schemacertificatenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeCertificates

<a id="opIdPOST_DescribeCertificates"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeCertificates?Action=DescribeCertificates&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CertificateIdentifier":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeCertificates`

Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.

> Body parameter

```json
{
  "CertificateIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribecertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCertificatesMessage](#schemadescribecertificatesmessage)|false|none|
|» CertificateIdentifier|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeCertificates|
|Version|2014-10-31|

<h3 id="postdescribecertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CertificateMessage](#schemacertificatemessage)|
|480|480|CertificateNotFoundFault|[CertificateNotFoundFault](#schemacertificatenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBClusterParameterGroups

<a id="opIdGET_DescribeDBClusterParameterGroups"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameterGroups?Action=DescribeDBClusterParameterGroups&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterParameterGroups`

Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 

<h3 id="getdescribedbclusterparametergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|false|<p>The name of a specific cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeDBClusterParameterGroups|
|Version|2014-10-31|

<h3 id="getdescribedbclusterparametergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupsMessage](#schemadbclusterparametergroupsmessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBClusterParameterGroups

<a id="opIdPOST_DescribeDBClusterParameterGroups"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameterGroups?Action=DescribeDBClusterParameterGroups&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBClusterParameterGroups`

Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 

> Body parameter

```json
{
  "DBClusterParameterGroupName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbclusterparametergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDBClusterParameterGroupsMessage](#schemadescribedbclusterparametergroupsmessage)|false|none|
|» DBClusterParameterGroupName|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBClusterParameterGroups|
|Version|2014-10-31|

<h3 id="postdescribedbclusterparametergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupsMessage](#schemadbclusterparametergroupsmessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBClusterParameters

<a id="opIdGET_DescribeDBClusterParameters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameters?DBClusterParameterGroupName=string&Action=DescribeDBClusterParameters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterParameters`

Returns the detailed parameter list for a particular cluster parameter group.

<h3 id="getdescribedbclusterparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|<p>The name of a specific cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>|
|Source|query|string|false| A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>. |
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeDBClusterParameters|
|Version|2014-10-31|

<h3 id="getdescribedbclusterparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupDetails](#schemadbclusterparametergroupdetails)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBClusterParameters

<a id="opIdPOST_DescribeDBClusterParameters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameters?Action=DescribeDBClusterParameters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"Source":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBClusterParameters`

Returns the detailed parameter list for a particular cluster parameter group.

> Body parameter

```json
{
  "DBClusterParameterGroupName": {},
  "Source": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbclusterparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDBClusterParametersMessage](#schemadescribedbclusterparametersmessage)|false|none|
|» DBClusterParameterGroupName|body|object|true|none|
|» Source|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBClusterParameters|
|Version|2014-10-31|

<h3 id="postdescribedbclusterparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupDetails](#schemadbclusterparametergroupdetails)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBClusterSnapshotAttributes

<a id="opIdGET_DescribeDBClusterSnapshotAttributes"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshotAttributes?DBClusterSnapshotIdentifier=string&Action=DescribeDBClusterSnapshotAttributes&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterSnapshotAttributes`

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

<h3 id="getdescribedbclustersnapshotattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|The identifier for the cluster snapshot to describe the attributes for.|
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
|Action|DescribeDBClusterSnapshotAttributes|
|Version|2014-10-31|

<h3 id="getdescribedbclustersnapshotattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDBClusterSnapshotAttributesResult](#schemadescribedbclustersnapshotattributesresult)|
|480|480|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBClusterSnapshotAttributes

<a id="opIdPOST_DescribeDBClusterSnapshotAttributes"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshotAttributes?Action=DescribeDBClusterSnapshotAttributes&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{}}'
```

`POST /#Action=DescribeDBClusterSnapshotAttributes`

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

> Body parameter

```json
{
  "DBClusterSnapshotIdentifier": {}
}
```

<h3 id="postdescribedbclustersnapshotattributes-parameters">Parameters</h3>

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
|body|body|[DescribeDBClusterSnapshotAttributesMessage](#schemadescribedbclustersnapshotattributesmessage)|false|none|
|» DBClusterSnapshotIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBClusterSnapshotAttributes|
|Version|2014-10-31|

<h3 id="postdescribedbclustersnapshotattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDBClusterSnapshotAttributesResult](#schemadescribedbclustersnapshotattributesresult)|
|480|480|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBClusterSnapshots

<a id="opIdGET_DescribeDBClusterSnapshots"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshots?Action=DescribeDBClusterSnapshots&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterSnapshots`

Returns information about cluster snapshots. This API operation supports pagination.

<h3 id="getdescribedbclustersnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|false|<p>The ID of the cluster to retrieve the list of cluster snapshots for. This parameter can't be used with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>|
|DBClusterSnapshotIdentifier|query|string|false|<p>A specific cluster snapshot identifier to describe. This parameter can't be used with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBClusterSnapshot</code>.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>|
|SnapshotType|query|string|false|<p>The type of cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.</p> </li> <li> <p> <code>manual</code> - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</p> </li> <li> <p> <code>shared</code> - Return all manual cluster snapshots that have been shared to your Amazon Web Services account.</p> </li> <li> <p> <code>public</code> - Return all cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual cluster snapshots are returned. You can include shared cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public cluster snapshots with these results by setting the<code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
|IncludeShared|query|boolean|false|Set to <code>true</code> to include shared manual cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore, and otherwise <code>false</code>. The default is <code>false</code>.|
|IncludePublic|query|boolean|false|Set to <code>true</code> to include manual cluster snapshots that are public and can be copied or restored by any Amazon Web Services account, and otherwise <code>false</code>. The default is <code>false</code>.|
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
|Action|DescribeDBClusterSnapshots|
|Version|2014-10-31|

<h3 id="getdescribedbclustersnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterSnapshotMessage](#schemadbclustersnapshotmessage)|
|480|480|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBClusterSnapshots

<a id="opIdPOST_DescribeDBClusterSnapshots"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshots?Action=DescribeDBClusterSnapshots&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"DBClusterSnapshotIdentifier":{},"SnapshotType":{},"Filters":{},"MaxRecords":{},"Marker":{},"IncludeShared":{},"IncludePublic":{}}'
```

`POST /#Action=DescribeDBClusterSnapshots`

Returns information about cluster snapshots. This API operation supports pagination.

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "DBClusterSnapshotIdentifier": {},
  "SnapshotType": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {},
  "IncludeShared": {},
  "IncludePublic": {}
}
```

<h3 id="postdescribedbclustersnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDBClusterSnapshotsMessage](#schemadescribedbclustersnapshotsmessage)|false|none|
|» DBClusterIdentifier|body|object|false|none|
|» DBClusterSnapshotIdentifier|body|object|false|none|
|» SnapshotType|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|
|» IncludeShared|body|object|false|none|
|» IncludePublic|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBClusterSnapshots|
|Version|2014-10-31|

<h3 id="postdescribedbclustersnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterSnapshotMessage](#schemadbclustersnapshotmessage)|
|480|480|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBClusters

<a id="opIdGET_DescribeDBClusters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusters?Action=DescribeDBClusters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusters`

Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.

<h3 id="getdescribedbclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|false|<p>The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>|
|Filters|query|[object]|false|<p>A filter that specifies one or more clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.</p> </li> </ul>|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeDBClusters|
|Version|2014-10-31|

<h3 id="getdescribedbclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterMessage](#schemadbclustermessage)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBClusters

<a id="opIdPOST_DescribeDBClusters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBClusters?Action=DescribeDBClusters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBClusters`

Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDBClustersMessage](#schemadescribedbclustersmessage)|false|none|
|» DBClusterIdentifier|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBClusters|
|Version|2014-10-31|

<h3 id="postdescribedbclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterMessage](#schemadbclustermessage)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBEngineVersions

<a id="opIdGET_DescribeDBEngineVersions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBEngineVersions?Action=DescribeDBEngineVersions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBEngineVersions`

Returns a list of the available engines.

<h3 id="getdescribedbengineversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Engine|query|string|false|The database engine to return.|
|EngineVersion|query|string|false|<p>The database engine version to return.</p> <p>Example: <code>3.6.0</code> </p>|
|DBParameterGroupFamily|query|string|false|<p>The name of a specific parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBParameterGroupFamily</code>.</p> </li> </ul>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
|DefaultOnly|query|boolean|false|Indicates that only the default version of the specified engine or engine and major version combination is returned.|
|ListSupportedCharacterSets|query|boolean|false|If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. |
|ListSupportedTimezones|query|boolean|false|If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. |
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
|Action|DescribeDBEngineVersions|
|Version|2014-10-31|

<h3 id="getdescribedbengineversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBEngineVersionMessage](#schemadbengineversionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBEngineVersions

<a id="opIdPOST_DescribeDBEngineVersions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBEngineVersions?Action=DescribeDBEngineVersions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"Filters":{},"MaxRecords":{},"Marker":{},"DefaultOnly":{},"ListSupportedCharacterSets":{},"ListSupportedTimezones":{}}'
```

`POST /#Action=DescribeDBEngineVersions`

Returns a list of the available engines.

> Body parameter

```json
{
  "Engine": {},
  "EngineVersion": {},
  "DBParameterGroupFamily": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {},
  "DefaultOnly": {},
  "ListSupportedCharacterSets": {},
  "ListSupportedTimezones": {}
}
```

<h3 id="postdescribedbengineversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDBEngineVersionsMessage](#schemadescribedbengineversionsmessage)|false|none|
|» Engine|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» DBParameterGroupFamily|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|
|» DefaultOnly|body|object|false|none|
|» ListSupportedCharacterSets|body|object|false|none|
|» ListSupportedTimezones|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBEngineVersions|
|Version|2014-10-31|

<h3 id="postdescribedbengineversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBEngineVersionMessage](#schemadbengineversionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBInstances

<a id="opIdGET_DescribeDBInstances"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBInstances?Action=DescribeDBInstances&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBInstances`

Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.

<h3 id="getdescribedbinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|false|<p>The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>|
|Filters|query|[object]|false|<p>A filter that specifies one or more instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only the information about the instances that are associated with the clusters that are identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only the information about the instances that are identified by these ARNs.</p> </li> </ul>|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeDBInstances|
|Version|2014-10-31|

<h3 id="getdescribedbinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBInstanceMessage](#schemadbinstancemessage)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBInstances

<a id="opIdPOST_DescribeDBInstances"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBInstances?Action=DescribeDBInstances&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBInstances`

Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.

> Body parameter

```json
{
  "DBInstanceIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDBInstancesMessage](#schemadescribedbinstancesmessage)|false|none|
|» DBInstanceIdentifier|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBInstances|
|Version|2014-10-31|

<h3 id="postdescribedbinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBInstanceMessage](#schemadbinstancemessage)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBSubnetGroups

<a id="opIdGET_DescribeDBSubnetGroups"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBSubnetGroups?Action=DescribeDBSubnetGroups&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBSubnetGroups`

Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.

<h3 id="getdescribedbsubnetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|false|The name of the subnet group to return details for.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeDBSubnetGroups|
|Version|2014-10-31|

<h3 id="getdescribedbsubnetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBSubnetGroupMessage](#schemadbsubnetgroupmessage)|
|480|480|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBSubnetGroups

<a id="opIdPOST_DescribeDBSubnetGroups"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeDBSubnetGroups?Action=DescribeDBSubnetGroups&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBSubnetGroups`

Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.

> Body parameter

```json
{
  "DBSubnetGroupName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbsubnetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDBSubnetGroupsMessage](#schemadescribedbsubnetgroupsmessage)|false|none|
|» DBSubnetGroupName|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBSubnetGroups|
|Version|2014-10-31|

<h3 id="postdescribedbsubnetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBSubnetGroupMessage](#schemadbsubnetgroupmessage)|
|480|480|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEngineDefaultClusterParameters

<a id="opIdGET_DescribeEngineDefaultClusterParameters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultClusterParameters?DBParameterGroupFamily=string&Action=DescribeEngineDefaultClusterParameters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEngineDefaultClusterParameters`

Returns the default engine and system parameter information for the cluster database engine.

<h3 id="getdescribeenginedefaultclusterparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupFamily|query|string|true|The name of the cluster parameter group family to return the engine parameter information for.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeEngineDefaultClusterParameters|
|Version|2014-10-31|

<h3 id="getdescribeenginedefaultclusterparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEngineDefaultClusterParametersResult](#schemadescribeenginedefaultclusterparametersresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEngineDefaultClusterParameters

<a id="opIdPOST_DescribeEngineDefaultClusterParameters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultClusterParameters?Action=DescribeEngineDefaultClusterParameters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupFamily":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEngineDefaultClusterParameters`

Returns the default engine and system parameter information for the cluster database engine.

> Body parameter

```json
{
  "DBParameterGroupFamily": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeenginedefaultclusterparameters-parameters">Parameters</h3>

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
|body|body|[DescribeEngineDefaultClusterParametersMessage](#schemadescribeenginedefaultclusterparametersmessage)|false|none|
|» DBParameterGroupFamily|body|object|true|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEngineDefaultClusterParameters|
|Version|2014-10-31|

<h3 id="postdescribeenginedefaultclusterparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEngineDefaultClusterParametersResult](#schemadescribeenginedefaultclusterparametersresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEventCategories

<a id="opIdGET_DescribeEventCategories"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEventCategories?Action=DescribeEventCategories&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEventCategories`

Displays a list of categories for all event source types, or, if specified, for a specified source type. 

<h3 id="getdescribeeventcategories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceType|query|string|false|<p>The type of source that is generating the events.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>|
|Filters|query|[object]|false|This parameter is not currently supported.|
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
|Action|DescribeEventCategories|
|Version|2014-10-31|

<h3 id="getdescribeeventcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventCategoriesMessage](#schemaeventcategoriesmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEventCategories

<a id="opIdPOST_DescribeEventCategories"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEventCategories?Action=DescribeEventCategories&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceType":{},"Filters":{}}'
```

`POST /#Action=DescribeEventCategories`

Displays a list of categories for all event source types, or, if specified, for a specified source type. 

> Body parameter

```json
{
  "SourceType": {},
  "Filters": {}
}
```

<h3 id="postdescribeeventcategories-parameters">Parameters</h3>

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
|body|body|[DescribeEventCategoriesMessage](#schemadescribeeventcategoriesmessage)|false|none|
|» SourceType|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEventCategories|
|Version|2014-10-31|

<h3 id="postdescribeeventcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventCategoriesMessage](#schemaeventcategoriesmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEventSubscriptions

<a id="opIdGET_DescribeEventSubscriptions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEventSubscriptions?Action=DescribeEventSubscriptions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEventSubscriptions`

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>

<h3 id="getdescribeeventsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|false|The name of the Amazon DocumentDB event notification subscription that you want to describe.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeEventSubscriptions|
|Version|2014-10-31|

<h3 id="getdescribeeventsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventSubscriptionsMessage](#schemaeventsubscriptionsmessage)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEventSubscriptions

<a id="opIdPOST_DescribeEventSubscriptions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEventSubscriptions?Action=DescribeEventSubscriptions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEventSubscriptions`

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>

> Body parameter

```json
{
  "SubscriptionName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeeventsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventSubscriptionsMessage](#schemadescribeeventsubscriptionsmessage)|false|none|
|» SubscriptionName|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEventSubscriptions|
|Version|2014-10-31|

<h3 id="postdescribeeventsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventSubscriptionsMessage](#schemaeventsubscriptionsmessage)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEvents

<a id="opIdGET_DescribeEvents"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEvents`

Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.

<h3 id="getdescribeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceIdentifier|query|string|false|<p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIdentifier</code> is provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>|
|SourceType|query|string|false|The event source to retrieve events for. If no value is specified, all events are returned.|
|StartTime|query|string(date-time)|false|<p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>|
|EndTime|query|string(date-time)|false|<p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>|
|Duration|query|integer|false|<p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>|
|EventCategories|query|[object]|false|A list of event categories that trigger notifications for an event notification subscription.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|SourceType|db-instance|
|SourceType|db-parameter-group|
|SourceType|db-security-group|
|SourceType|db-snapshot|
|SourceType|db-cluster|
|SourceType|db-cluster-snapshot|
|Action|DescribeEvents|
|Version|2014-10-31|

<h3 id="getdescribeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventsMessage](#schemaeventsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEvents

<a id="opIdPOST_DescribeEvents"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceIdentifier":{},"SourceType":{},"StartTime":{},"EndTime":{},"Duration":{},"EventCategories":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEvents`

Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.

> Body parameter

```json
{
  "SourceIdentifier": {},
  "SourceType": {},
  "StartTime": {},
  "EndTime": {},
  "Duration": {},
  "EventCategories": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventsMessage](#schemadescribeeventsmessage)|false|none|
|» SourceIdentifier|body|object|false|none|
|» SourceType|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» Duration|body|object|false|none|
|» EventCategories|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEvents|
|Version|2014-10-31|

<h3 id="postdescribeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventsMessage](#schemaeventsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeGlobalClusters

<a id="opIdGET_DescribeGlobalClusters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeGlobalClusters?Action=DescribeGlobalClusters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeGlobalClusters`

<p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

<h3 id="getdescribeglobalclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|false|The user-supplied cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.|
|Filters|query|[object]|false|<p>A filter that specifies one or more global DB clusters to describe.</p> <p>Supported filters: <code>db-cluster-id</code> accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.</p>|
|MaxRecords|query|integer|false|The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. |
|Marker|query|string|false|An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeGlobalClusters|
|Version|2014-10-31|

<h3 id="getdescribeglobalclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GlobalClustersMessage](#schemaglobalclustersmessage)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeGlobalClusters

<a id="opIdPOST_DescribeGlobalClusters"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeGlobalClusters?Action=DescribeGlobalClusters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeGlobalClusters`

<p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeglobalclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeGlobalClustersMessage](#schemadescribeglobalclustersmessage)|false|none|
|» GlobalClusterIdentifier|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeGlobalClusters|
|Version|2014-10-31|

<h3 id="postdescribeglobalclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GlobalClustersMessage](#schemaglobalclustersmessage)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeOrderableDBInstanceOptions

<a id="opIdGET_DescribeOrderableDBInstanceOptions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeOrderableDBInstanceOptions?Engine=string&Action=DescribeOrderableDBInstanceOptions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeOrderableDBInstanceOptions`

Returns a list of orderable instance options for the specified engine.

<h3 id="getdescribeorderabledbinstanceoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Engine|query|string|true|The name of the engine to retrieve instance options for.|
|EngineVersion|query|string|false|The engine version filter value. Specify this parameter to show only the available offerings that match the specified engine version.|
|DBInstanceClass|query|string|false|The instance class filter value. Specify this parameter to show only the available offerings that match the specified instance class.|
|LicenseModel|query|string|false|The license model filter value. Specify this parameter to show only the available offerings that match the specified license model.|
|Vpc|query|boolean|false|The virtual private cloud (VPC) filter value. Specify this parameter to show only the available VPC or non-VPC offerings.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeOrderableDBInstanceOptions|
|Version|2014-10-31|

<h3 id="getdescribeorderabledbinstanceoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OrderableDBInstanceOptionsMessage](#schemaorderabledbinstanceoptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeOrderableDBInstanceOptions

<a id="opIdPOST_DescribeOrderableDBInstanceOptions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribeOrderableDBInstanceOptions?Action=DescribeOrderableDBInstanceOptions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"Vpc":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeOrderableDBInstanceOptions`

Returns a list of orderable instance options for the specified engine.

> Body parameter

```json
{
  "Engine": {},
  "EngineVersion": {},
  "DBInstanceClass": {},
  "LicenseModel": {},
  "Vpc": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeorderabledbinstanceoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOrderableDBInstanceOptionsMessage](#schemadescribeorderabledbinstanceoptionsmessage)|false|none|
|» Engine|body|object|true|none|
|» EngineVersion|body|object|false|none|
|» DBInstanceClass|body|object|false|none|
|» LicenseModel|body|object|false|none|
|» Vpc|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeOrderableDBInstanceOptions|
|Version|2014-10-31|

<h3 id="postdescribeorderabledbinstanceoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OrderableDBInstanceOptionsMessage](#schemaorderabledbinstanceoptionsmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribePendingMaintenanceActions

<a id="opIdGET_DescribePendingMaintenanceActions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribePendingMaintenanceActions?Action=DescribePendingMaintenanceActions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribePendingMaintenanceActions`

Returns a list of resources (for example, instances) that have at least one pending maintenance action.

<h3 id="getdescribependingmaintenanceactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|query|string|false|The ARN of a resource to return pending maintenance actions for.|
|Filters|query|[object]|false|<p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only pending maintenance actions for the clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>|
|Marker|query|string|false|An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
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
|Action|DescribePendingMaintenanceActions|
|Version|2014-10-31|

<h3 id="getdescribependingmaintenanceactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PendingMaintenanceActionsMessage](#schemapendingmaintenanceactionsmessage)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribePendingMaintenanceActions

<a id="opIdPOST_DescribePendingMaintenanceActions"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=DescribePendingMaintenanceActions?Action=DescribePendingMaintenanceActions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceIdentifier":{},"Filters":{},"Marker":{},"MaxRecords":{}}'
```

`POST /#Action=DescribePendingMaintenanceActions`

Returns a list of resources (for example, instances) that have at least one pending maintenance action.

> Body parameter

```json
{
  "ResourceIdentifier": {},
  "Filters": {},
  "Marker": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribependingmaintenanceactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePendingMaintenanceActionsMessage](#schemadescribependingmaintenanceactionsmessage)|false|none|
|» ResourceIdentifier|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» Marker|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribePendingMaintenanceActions|
|Version|2014-10-31|

<h3 id="postdescribependingmaintenanceactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PendingMaintenanceActionsMessage](#schemapendingmaintenanceactionsmessage)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_FailoverDBCluster

<a id="opIdGET_FailoverDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=FailoverDBCluster?Action=FailoverDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=FailoverDBCluster`

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

<h3 id="getfailoverdbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|false|<p>A cluster identifier to force a failover for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>|
|TargetDBInstanceIdentifier|query|string|false|<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For example, <code>mydbcluster-replica1</code>.</p>|
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
|Action|FailoverDBCluster|
|Version|2014-10-31|

<h3 id="getfailoverdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FailoverDBClusterResult](#schemafailoverdbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_FailoverDBCluster

<a id="opIdPOST_FailoverDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=FailoverDBCluster?Action=FailoverDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"TargetDBInstanceIdentifier":{}}'
```

`POST /#Action=FailoverDBCluster`

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "TargetDBInstanceIdentifier": {}
}
```

<h3 id="postfailoverdbcluster-parameters">Parameters</h3>

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
|body|body|[FailoverDBClusterMessage](#schemafailoverdbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|false|none|
|» TargetDBInstanceIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|FailoverDBCluster|
|Version|2014-10-31|

<h3 id="postfailoverdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FailoverDBClusterResult](#schemafailoverdbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTagsForResource

<a id="opIdGET_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ListTagsForResource?ResourceName=string&Action=ListTagsForResource&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTagsForResource`

Lists all tags on an Amazon DocumentDB resource.

<h3 id="getlisttagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).|
|Filters|query|[object]|false|This parameter is not currently supported.|
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
|Action|ListTagsForResource|
|Version|2014-10-31|

<h3 id="getlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTagsForResource

<a id="opIdPOST_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ListTagsForResource?Action=ListTagsForResource&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"Filters":{}}'
```

`POST /#Action=ListTagsForResource`

Lists all tags on an Amazon DocumentDB resource.

> Body parameter

```json
{
  "ResourceName": {},
  "Filters": {}
}
```

<h3 id="postlisttagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceMessage](#schemalisttagsforresourcemessage)|false|none|
|» ResourceName|body|object|true|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTagsForResource|
|Version|2014-10-31|

<h3 id="postlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBCluster

<a id="opIdGET_ModifyDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBCluster?DBClusterIdentifier=string&Action=ModifyDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBCluster`

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

<h3 id="getmodifydbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|<p>The cluster identifier for the cluster that is being modified. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>|
|NewDBClusterIdentifier|query|string|false|<p>The new cluster identifier for the cluster when renaming a cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>|
|ApplyImmediately|query|boolean|false|<p>A value that specifies whether the changes in this request and any pending changes are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster. If this parameter is set to <code>false</code>, changes to the cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter affects only the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If you set this parameter value to <code>false</code>, the changes to the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>|
|BackupRetentionPeriod|query|integer|false|<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>|
|DBClusterParameterGroupName|query|string|false|The name of the cluster parameter group to use for the cluster.|
|VpcSecurityGroupIds|query|[object]|false|A list of virtual private cloud (VPC) security groups that the cluster will belong to.|
|Port|query|integer|false|<p>The port number on which the cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The same port as the original cluster.</p>|
|MasterUserPassword|query|string|false|<p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>|
|PreferredBackupWindow|query|string|false|<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>|
|PreferredMaintenanceWindow|query|string|false|<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>|
|CloudwatchLogsExportConfiguration|query|object|false|The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster. The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs.|
|EngineVersion|query|string|false|The version number of the database engine to which you want to upgrade. Modifying engine version is not supported on Amazon DocumentDB.|
|DeletionProtection|query|boolean|false|Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.|
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
|Action|ModifyDBCluster|
|Version|2014-10-31|

<h3 id="getmodifydbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBClusterResult](#schemamodifydbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|483|483|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|484|484|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|485|485|InvalidDBSubnetGroupStateFault|[InvalidDBSubnetGroupStateFault](#schemainvaliddbsubnetgroupstatefault)|
|486|486|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|487|487|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|
|488|488|InvalidDBSecurityGroupStateFault|[InvalidDBSecurityGroupStateFault](#schemainvaliddbsecuritygroupstatefault)|
|489|489|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|490|490|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBCluster

<a id="opIdPOST_ModifyDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBCluster?Action=ModifyDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"NewDBClusterIdentifier":{},"ApplyImmediately":{},"BackupRetentionPeriod":{},"DBClusterParameterGroupName":{},"VpcSecurityGroupIds":{},"Port":{},"MasterUserPassword":{},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"CloudwatchLogsExportConfiguration":{"EnableLogTypes":{},"DisableLogTypes":{}},"EngineVersion":{},"DeletionProtection":{}}'
```

`POST /#Action=ModifyDBCluster`

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "NewDBClusterIdentifier": {},
  "ApplyImmediately": {},
  "BackupRetentionPeriod": {},
  "DBClusterParameterGroupName": {},
  "VpcSecurityGroupIds": {},
  "Port": {},
  "MasterUserPassword": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "CloudwatchLogsExportConfiguration": {
    "EnableLogTypes": {},
    "DisableLogTypes": {}
  },
  "EngineVersion": {},
  "DeletionProtection": {}
}
```

<h3 id="postmodifydbcluster-parameters">Parameters</h3>

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
|body|body|[ModifyDBClusterMessage](#schemamodifydbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» NewDBClusterIdentifier|body|object|false|none|
|» ApplyImmediately|body|object|false|none|
|» BackupRetentionPeriod|body|object|false|none|
|» DBClusterParameterGroupName|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» Port|body|object|false|none|
|» MasterUserPassword|body|object|false|none|
|» PreferredBackupWindow|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» CloudwatchLogsExportConfiguration|body|object|false|none|
|» » EnableLogTypes|body|object|false|none|
|» » DisableLogTypes|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» DeletionProtection|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyDBCluster|
|Version|2014-10-31|

<h3 id="postmodifydbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBClusterResult](#schemamodifydbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|483|483|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|484|484|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|485|485|InvalidDBSubnetGroupStateFault|[InvalidDBSubnetGroupStateFault](#schemainvaliddbsubnetgroupstatefault)|
|486|486|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|487|487|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|
|488|488|InvalidDBSecurityGroupStateFault|[InvalidDBSecurityGroupStateFault](#schemainvaliddbsecuritygroupstatefault)|
|489|489|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|490|490|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBClusterParameterGroup

<a id="opIdGET_ModifyDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBClusterParameterGroup?DBClusterParameterGroupName=string&Parameters=%7B%22ParameterName%22%3A%7B%7D%2C%22ParameterValue%22%3A%7B%7D%2C%22Description%22%3A%7B%7D%2C%22Source%22%3A%7B%7D%2C%22ApplyType%22%3A%7B%7D%2C%22DataType%22%3A%7B%7D%2C%22AllowedValues%22%3A%7B%7D%2C%22IsModifiable%22%3A%7B%7D%2C%22MinimumEngineVersion%22%3A%7B%7D%2C%22ApplyMethod%22%3A%7B%7D%7D&Action=ModifyDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBClusterParameterGroup`

<p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>

<h3 id="getmodifydbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|The name of the cluster parameter group to modify.|
|Parameters|query|[object]|true|A list of parameters in the cluster parameter group to modify.|
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
|Action|ModifyDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="getmodifydbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupNameMessage](#schemadbclusterparametergroupnamemessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBClusterParameterGroup

<a id="opIdPOST_ModifyDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBClusterParameterGroup?Action=ModifyDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"Parameters":{}}'
```

`POST /#Action=ModifyDBClusterParameterGroup`

<p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>

> Body parameter

```json
{
  "DBClusterParameterGroupName": {},
  "Parameters": {}
}
```

<h3 id="postmodifydbclusterparametergroup-parameters">Parameters</h3>

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
|body|body|[ModifyDBClusterParameterGroupMessage](#schemamodifydbclusterparametergroupmessage)|false|none|
|» DBClusterParameterGroupName|body|object|true|none|
|» Parameters|body|object|true|none|
|» ParameterName|body|object|false|none|
|» ParameterValue|body|object|false|none|
|» Description|body|object|false|none|
|» Source|body|object|false|none|
|» ApplyType|body|object|false|none|
|» DataType|body|object|false|none|
|» AllowedValues|body|object|false|none|
|» IsModifiable|body|object|false|none|
|» MinimumEngineVersion|body|object|false|none|
|» ApplyMethod|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="postmodifydbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupNameMessage](#schemadbclusterparametergroupnamemessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBClusterSnapshotAttribute

<a id="opIdGET_ModifyDBClusterSnapshotAttribute"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBClusterSnapshotAttribute?DBClusterSnapshotIdentifier=string&AttributeName=string&Action=ModifyDBClusterSnapshotAttribute&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBClusterSnapshotAttribute`

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

<h3 id="getmodifydbclustersnapshotattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|The identifier for the cluster snapshot to modify the attributes for.|
|AttributeName|query|string|true|<p>The name of the cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this value to <code>restore</code>.</p>|
|ValuesToAdd|query|[object]|false|<p>A list of cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account IDs. To make the manual cluster snapshot restorable by any Amazon Web Services account, set it to <code>all</code>. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want to be available to all Amazon Web Services accounts.</p>|
|ValuesToRemove|query|[object]|false|<p>A list of cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account identifiers. To remove authorization for any Amazon Web Services account to copy or restore the cluster snapshot, set it to <code>all</code> . If you specify <code>all</code>, an Amazon Web Services account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual cluster snapshot.</p>|
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
|Action|ModifyDBClusterSnapshotAttribute|
|Version|2014-10-31|

<h3 id="getmodifydbclustersnapshotattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBClusterSnapshotAttributeResult](#schemamodifydbclustersnapshotattributeresult)|
|480|480|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|481|481|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|482|482|SharedSnapshotQuotaExceededFault|[SharedSnapshotQuotaExceededFault](#schemasharedsnapshotquotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBClusterSnapshotAttribute

<a id="opIdPOST_ModifyDBClusterSnapshotAttribute"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBClusterSnapshotAttribute?Action=ModifyDBClusterSnapshotAttribute&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{},"AttributeName":{},"ValuesToAdd":{},"ValuesToRemove":{}}'
```

`POST /#Action=ModifyDBClusterSnapshotAttribute`

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

> Body parameter

```json
{
  "DBClusterSnapshotIdentifier": {},
  "AttributeName": {},
  "ValuesToAdd": {},
  "ValuesToRemove": {}
}
```

<h3 id="postmodifydbclustersnapshotattribute-parameters">Parameters</h3>

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
|body|body|[ModifyDBClusterSnapshotAttributeMessage](#schemamodifydbclustersnapshotattributemessage)|false|none|
|» DBClusterSnapshotIdentifier|body|object|true|none|
|» AttributeName|body|object|true|none|
|» ValuesToAdd|body|object|false|none|
|» ValuesToRemove|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyDBClusterSnapshotAttribute|
|Version|2014-10-31|

<h3 id="postmodifydbclustersnapshotattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBClusterSnapshotAttributeResult](#schemamodifydbclustersnapshotattributeresult)|
|480|480|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|481|481|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|482|482|SharedSnapshotQuotaExceededFault|[SharedSnapshotQuotaExceededFault](#schemasharedsnapshotquotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBInstance

<a id="opIdGET_ModifyDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBInstance?DBInstanceIdentifier=string&Action=ModifyDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBInstance`

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

<h3 id="getmodifydbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|<p>The instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>|
|DBInstanceClass|query|string|false|<p>The new compute and memory capacity of the instance; for example, <code>db.r5.large</code>. Not all instance classes are available in all Amazon Web Services Regions. </p> <p>If you modify the instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request. </p> <p>Default: Uses existing setting.</p>|
|ApplyImmediately|query|boolean|false|<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the instance. </p> <p> If this parameter is set to <code>false</code>, changes to the instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next reboot.</p> <p>Default: <code>false</code> </p>|
|PreferredMaintenanceWindow|query|string|false|<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, changing this parameter causes a reboot of the instance. If you are moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure that pending changes are applied.</p> <p>Default: Uses existing setting.</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Must be at least 30 minutes.</p>|
|AutoMinorVersionUpgrade|query|boolean|false|This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.|
|NewDBInstanceIdentifier|query|string|false|<p> The new instance identifier for the instance when renaming an instance. When you change the instance identifier, an instance reboot occurs immediately if you set <code>Apply Immediately</code> to <code>true</code>. It occurs during the next maintenance window if you set <code>Apply Immediately</code> to <code>false</code>. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>|
|CACertificateIdentifier|query|string|false|Indicates the certificate that needs to be associated with the instance.|
|CopyTagsToSnapshot|query|boolean|false|A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.|
|PromotionTier|query|integer|false|<p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>|
|EnablePerformanceInsights|query|boolean|false|A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.|
|PerformanceInsightsKMSKeyId|query|string|false|<p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>|
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
|Action|ModifyDBInstance|
|Version|2014-10-31|

<h3 id="getmodifydbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBInstanceResult](#schemamodifydbinstanceresult)|
|480|480|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|481|481|InvalidDBSecurityGroupStateFault|[InvalidDBSecurityGroupStateFault](#schemainvaliddbsecuritygroupstatefault)|
|482|482|DBInstanceAlreadyExistsFault|[DBInstanceAlreadyExistsFault](#schemadbinstancealreadyexistsfault)|
|483|483|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|484|484|DBSecurityGroupNotFoundFault|[DBSecurityGroupNotFoundFault](#schemadbsecuritygroupnotfoundfault)|
|485|485|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|486|486|InsufficientDBInstanceCapacityFault|[InsufficientDBInstanceCapacityFault](#schemainsufficientdbinstancecapacityfault)|
|487|487|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|488|488|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|489|489|DBUpgradeDependencyFailureFault|[DBUpgradeDependencyFailureFault](#schemadbupgradedependencyfailurefault)|
|490|490|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|491|491|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|492|492|CertificateNotFoundFault|[CertificateNotFoundFault](#schemacertificatenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBInstance

<a id="opIdPOST_ModifyDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBInstance?Action=ModifyDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"DBInstanceClass":{},"ApplyImmediately":{},"PreferredMaintenanceWindow":{},"AutoMinorVersionUpgrade":{},"NewDBInstanceIdentifier":{},"CACertificateIdentifier":{},"CopyTagsToSnapshot":{},"PromotionTier":{},"EnablePerformanceInsights":{},"PerformanceInsightsKMSKeyId":{}}'
```

`POST /#Action=ModifyDBInstance`

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

> Body parameter

```json
{
  "DBInstanceIdentifier": {},
  "DBInstanceClass": {},
  "ApplyImmediately": {},
  "PreferredMaintenanceWindow": {},
  "AutoMinorVersionUpgrade": {},
  "NewDBInstanceIdentifier": {},
  "CACertificateIdentifier": {},
  "CopyTagsToSnapshot": {},
  "PromotionTier": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {}
}
```

<h3 id="postmodifydbinstance-parameters">Parameters</h3>

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
|body|body|[ModifyDBInstanceMessage](#schemamodifydbinstancemessage)|false|none|
|» DBInstanceIdentifier|body|object|true|none|
|» DBInstanceClass|body|object|false|none|
|» ApplyImmediately|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» NewDBInstanceIdentifier|body|object|false|none|
|» CACertificateIdentifier|body|object|false|none|
|» CopyTagsToSnapshot|body|object|false|none|
|» PromotionTier|body|object|false|none|
|» EnablePerformanceInsights|body|object|false|none|
|» PerformanceInsightsKMSKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyDBInstance|
|Version|2014-10-31|

<h3 id="postmodifydbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBInstanceResult](#schemamodifydbinstanceresult)|
|480|480|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|481|481|InvalidDBSecurityGroupStateFault|[InvalidDBSecurityGroupStateFault](#schemainvaliddbsecuritygroupstatefault)|
|482|482|DBInstanceAlreadyExistsFault|[DBInstanceAlreadyExistsFault](#schemadbinstancealreadyexistsfault)|
|483|483|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|484|484|DBSecurityGroupNotFoundFault|[DBSecurityGroupNotFoundFault](#schemadbsecuritygroupnotfoundfault)|
|485|485|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|486|486|InsufficientDBInstanceCapacityFault|[InsufficientDBInstanceCapacityFault](#schemainsufficientdbinstancecapacityfault)|
|487|487|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|488|488|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|489|489|DBUpgradeDependencyFailureFault|[DBUpgradeDependencyFailureFault](#schemadbupgradedependencyfailurefault)|
|490|490|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|491|491|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|492|492|CertificateNotFoundFault|[CertificateNotFoundFault](#schemacertificatenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBSubnetGroup

<a id="opIdGET_ModifyDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBSubnetGroup?DBSubnetGroupName=string&SubnetIds=%7B%7D&Action=ModifyDBSubnetGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBSubnetGroup`

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

<h3 id="getmodifydbsubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|true|<p>The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|DBSubnetGroupDescription|query|string|false|The description for the subnet group.|
|SubnetIds|query|[object]|true|The Amazon EC2 subnet IDs for the subnet group.|
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
|Action|ModifyDBSubnetGroup|
|Version|2014-10-31|

<h3 id="getmodifydbsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBSubnetGroupResult](#schemamodifydbsubnetgroupresult)|
|480|480|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|481|481|DBSubnetQuotaExceededFault|[DBSubnetQuotaExceededFault](#schemadbsubnetquotaexceededfault)|
|482|482|SubnetAlreadyInUse|[SubnetAlreadyInUse](#schemasubnetalreadyinuse)|
|483|483|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|484|484|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBSubnetGroup

<a id="opIdPOST_ModifyDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyDBSubnetGroup?Action=ModifyDBSubnetGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{}}'
```

`POST /#Action=ModifyDBSubnetGroup`

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

> Body parameter

```json
{
  "DBSubnetGroupName": {},
  "DBSubnetGroupDescription": {},
  "SubnetIds": {}
}
```

<h3 id="postmodifydbsubnetgroup-parameters">Parameters</h3>

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
|body|body|[ModifyDBSubnetGroupMessage](#schemamodifydbsubnetgroupmessage)|false|none|
|» DBSubnetGroupName|body|object|true|none|
|» DBSubnetGroupDescription|body|object|false|none|
|» SubnetIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyDBSubnetGroup|
|Version|2014-10-31|

<h3 id="postmodifydbsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBSubnetGroupResult](#schemamodifydbsubnetgroupresult)|
|480|480|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|481|481|DBSubnetQuotaExceededFault|[DBSubnetQuotaExceededFault](#schemadbsubnetquotaexceededfault)|
|482|482|SubnetAlreadyInUse|[SubnetAlreadyInUse](#schemasubnetalreadyinuse)|
|483|483|DBSubnetGroupDoesNotCoverEnoughAZs|[DBSubnetGroupDoesNotCoverEnoughAZs](#schemadbsubnetgroupdoesnotcoverenoughazs)|
|484|484|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyEventSubscription

<a id="opIdGET_ModifyEventSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyEventSubscription?SubscriptionName=string&Action=ModifyEventSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyEventSubscription`

Modifies an existing Amazon DocumentDB event notification subscription.

<h3 id="getmodifyeventsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the Amazon DocumentDB event notification subscription.|
|SnsTopicArn|query|string|false|The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.|
|SourceType|query|string|false|<p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>|
|EventCategories|query|[object]|false| A list of event categories for a <code>SourceType</code> that you want to subscribe to.|
|Enabled|query|boolean|false| A Boolean value; set to <code>true</code> to activate the subscription. |
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
|Action|ModifyEventSubscription|
|Version|2014-10-31|

<h3 id="getmodifyeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyEventSubscriptionResult](#schemamodifyeventsubscriptionresult)|
|480|480|EventSubscriptionQuotaExceededFault|[EventSubscriptionQuotaExceededFault](#schemaeventsubscriptionquotaexceededfault)|
|481|481|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|482|482|SNSInvalidTopicFault|[SNSInvalidTopicFault](#schemasnsinvalidtopicfault)|
|483|483|SNSNoAuthorizationFault|[SNSNoAuthorizationFault](#schemasnsnoauthorizationfault)|
|484|484|SNSTopicArnNotFoundFault|[SNSTopicArnNotFoundFault](#schemasnstopicarnnotfoundfault)|
|485|485|SubscriptionCategoryNotFoundFault|[SubscriptionCategoryNotFoundFault](#schemasubscriptioncategorynotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyEventSubscription

<a id="opIdPOST_ModifyEventSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyEventSubscription?Action=ModifyEventSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{},"Enabled":{}}'
```

`POST /#Action=ModifyEventSubscription`

Modifies an existing Amazon DocumentDB event notification subscription.

> Body parameter

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "Enabled": {}
}
```

<h3 id="postmodifyeventsubscription-parameters">Parameters</h3>

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
|body|body|[ModifyEventSubscriptionMessage](#schemamodifyeventsubscriptionmessage)|false|none|
|» SubscriptionName|body|object|true|none|
|» SnsTopicArn|body|object|false|none|
|» SourceType|body|object|false|none|
|» EventCategories|body|object|false|none|
|» Enabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyEventSubscription|
|Version|2014-10-31|

<h3 id="postmodifyeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyEventSubscriptionResult](#schemamodifyeventsubscriptionresult)|
|480|480|EventSubscriptionQuotaExceededFault|[EventSubscriptionQuotaExceededFault](#schemaeventsubscriptionquotaexceededfault)|
|481|481|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|482|482|SNSInvalidTopicFault|[SNSInvalidTopicFault](#schemasnsinvalidtopicfault)|
|483|483|SNSNoAuthorizationFault|[SNSNoAuthorizationFault](#schemasnsnoauthorizationfault)|
|484|484|SNSTopicArnNotFoundFault|[SNSTopicArnNotFoundFault](#schemasnstopicarnnotfoundfault)|
|485|485|SubscriptionCategoryNotFoundFault|[SubscriptionCategoryNotFoundFault](#schemasubscriptioncategorynotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyGlobalCluster

<a id="opIdGET_ModifyGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyGlobalCluster?GlobalClusterIdentifier=string&Action=ModifyGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyGlobalCluster`

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

<h3 id="getmodifyglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|<p>The identifier for the global cluster being modified. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing global cluster.</p> </li> </ul>|
|NewGlobalClusterIdentifier|query|string|false|<p>The new identifier for a global cluster when you modify a global cluster. This value is stored as a lowercase string.</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> <p>The first character must be a letter</p> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>|
|DeletionProtection|query|boolean|false|Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled. |
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
|Action|ModifyGlobalCluster|
|Version|2014-10-31|

<h3 id="getmodifyglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyGlobalClusterResult](#schemamodifyglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyGlobalCluster

<a id="opIdPOST_ModifyGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ModifyGlobalCluster?Action=ModifyGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"NewGlobalClusterIdentifier":{},"DeletionProtection":{}}'
```

`POST /#Action=ModifyGlobalCluster`

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
  "NewGlobalClusterIdentifier": {},
  "DeletionProtection": {}
}
```

<h3 id="postmodifyglobalcluster-parameters">Parameters</h3>

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
|body|body|[ModifyGlobalClusterMessage](#schemamodifyglobalclustermessage)|false|none|
|» GlobalClusterIdentifier|body|object|true|none|
|» NewGlobalClusterIdentifier|body|object|false|none|
|» DeletionProtection|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyGlobalCluster|
|Version|2014-10-31|

<h3 id="postmodifyglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyGlobalClusterResult](#schemamodifyglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RebootDBInstance

<a id="opIdGET_RebootDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RebootDBInstance?DBInstanceIdentifier=string&Action=RebootDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RebootDBInstance`

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

<h3 id="getrebootdbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|<p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>|
|ForceFailover|query|boolean|false|<p> When <code>true</code>, the reboot is conducted through a Multi-AZ failover. </p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for Multi-AZ.</p>|
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
|Action|RebootDBInstance|
|Version|2014-10-31|

<h3 id="getrebootdbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootDBInstanceResult](#schemarebootdbinstanceresult)|
|480|480|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|481|481|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RebootDBInstance

<a id="opIdPOST_RebootDBInstance"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RebootDBInstance?Action=RebootDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"ForceFailover":{}}'
```

`POST /#Action=RebootDBInstance`

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

> Body parameter

```json
{
  "DBInstanceIdentifier": {},
  "ForceFailover": {}
}
```

<h3 id="postrebootdbinstance-parameters">Parameters</h3>

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
|body|body|[RebootDBInstanceMessage](#schemarebootdbinstancemessage)|false|none|
|» DBInstanceIdentifier|body|object|true|none|
|» ForceFailover|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RebootDBInstance|
|Version|2014-10-31|

<h3 id="postrebootdbinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootDBInstanceResult](#schemarebootdbinstanceresult)|
|480|480|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|
|481|481|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveFromGlobalCluster

<a id="opIdGET_RemoveFromGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RemoveFromGlobalCluster?GlobalClusterIdentifier=string&DbClusterIdentifier=string&Action=RemoveFromGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveFromGlobalCluster`

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

<h3 id="getremovefromglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|The cluster identifier to detach from the Amazon DocumentDB global cluster. |
|DbClusterIdentifier|query|string|true|The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster. |
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
|Action|RemoveFromGlobalCluster|
|Version|2014-10-31|

<h3 id="getremovefromglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveFromGlobalClusterResult](#schemaremovefromglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveFromGlobalCluster

<a id="opIdPOST_RemoveFromGlobalCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RemoveFromGlobalCluster?Action=RemoveFromGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"DbClusterIdentifier":{}}'
```

`POST /#Action=RemoveFromGlobalCluster`

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
  "DbClusterIdentifier": {}
}
```

<h3 id="postremovefromglobalcluster-parameters">Parameters</h3>

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
|body|body|[RemoveFromGlobalClusterMessage](#schemaremovefromglobalclustermessage)|false|none|
|» GlobalClusterIdentifier|body|object|true|none|
|» DbClusterIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemoveFromGlobalCluster|
|Version|2014-10-31|

<h3 id="postremovefromglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveFromGlobalClusterResult](#schemaremovefromglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveSourceIdentifierFromSubscription

<a id="opIdGET_RemoveSourceIdentifierFromSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RemoveSourceIdentifierFromSubscription?SubscriptionName=string&SourceIdentifier=string&Action=RemoveSourceIdentifierFromSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveSourceIdentifierFromSubscription`

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

<h3 id="getremovesourceidentifierfromsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the Amazon DocumentDB event notification subscription that you want to remove a source identifier from.|
|SourceIdentifier|query|string|true| The source identifier to be removed from the subscription, such as the instance identifier for an instance, or the name of a security group. |
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
|Action|RemoveSourceIdentifierFromSubscription|
|Version|2014-10-31|

<h3 id="getremovesourceidentifierfromsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveSourceIdentifierFromSubscriptionResult](#schemaremovesourceidentifierfromsubscriptionresult)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|481|481|SourceNotFoundFault|[SourceNotFoundFault](#schemasourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveSourceIdentifierFromSubscription

<a id="opIdPOST_RemoveSourceIdentifierFromSubscription"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RemoveSourceIdentifierFromSubscription?Action=RemoveSourceIdentifierFromSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"SourceIdentifier":{}}'
```

`POST /#Action=RemoveSourceIdentifierFromSubscription`

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

> Body parameter

```json
{
  "SubscriptionName": {},
  "SourceIdentifier": {}
}
```

<h3 id="postremovesourceidentifierfromsubscription-parameters">Parameters</h3>

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
|body|body|[RemoveSourceIdentifierFromSubscriptionMessage](#schemaremovesourceidentifierfromsubscriptionmessage)|false|none|
|» SubscriptionName|body|object|true|none|
|» SourceIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemoveSourceIdentifierFromSubscription|
|Version|2014-10-31|

<h3 id="postremovesourceidentifierfromsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveSourceIdentifierFromSubscriptionResult](#schemaremovesourceidentifierfromsubscriptionresult)|
|480|480|SubscriptionNotFoundFault|[SubscriptionNotFoundFault](#schemasubscriptionnotfoundfault)|
|481|481|SourceNotFoundFault|[SourceNotFoundFault](#schemasourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveTagsFromResource

<a id="opIdGET_RemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RemoveTagsFromResource?ResourceName=string&TagKeys=string&Action=RemoveTagsFromResource&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveTagsFromResource`

Removes metadata tags from an Amazon DocumentDB resource.

<h3 id="getremovetagsfromresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource Name (ARN).|
|TagKeys|query|[[String](#schemastring)]|true|The tag key (name) of the tag to be removed.|
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
|Action|RemoveTagsFromResource|
|Version|2014-10-31|

<h3 id="getremovetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveTagsFromResource

<a id="opIdPOST_RemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RemoveTagsFromResource?Action=RemoveTagsFromResource&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"TagKeys":{}}'
```

`POST /#Action=RemoveTagsFromResource`

Removes metadata tags from an Amazon DocumentDB resource.

> Body parameter

```json
{
  "ResourceName": {},
  "TagKeys": {}
}
```

<h3 id="postremovetagsfromresource-parameters">Parameters</h3>

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
|body|body|[RemoveTagsFromResourceMessage](#schemaremovetagsfromresourcemessage)|false|none|
|» ResourceName|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemoveTagsFromResource|
|Version|2014-10-31|

<h3 id="postremovetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ResetDBClusterParameterGroup

<a id="opIdGET_ResetDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ResetDBClusterParameterGroup?DBClusterParameterGroupName=string&Action=ResetDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ResetDBClusterParameterGroup`

<p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>

<h3 id="getresetdbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|The name of the cluster parameter group to reset.|
|ResetAllParameters|query|boolean|false|A value that is set to <code>true</code> to reset all parameters in the cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.|
|Parameters|query|[object]|false|A list of parameter names in the cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.|
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
|Action|ResetDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="getresetdbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupNameMessage](#schemadbclusterparametergroupnamemessage)|
|480|480|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|
|481|481|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ResetDBClusterParameterGroup

<a id="opIdPOST_ResetDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=ResetDBClusterParameterGroup?Action=ResetDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"ResetAllParameters":{},"Parameters":{}}'
```

`POST /#Action=ResetDBClusterParameterGroup`

<p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>

> Body parameter

```json
{
  "DBClusterParameterGroupName": {},
  "ResetAllParameters": {},
  "Parameters": {}
}
```

<h3 id="postresetdbclusterparametergroup-parameters">Parameters</h3>

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
|body|body|[ResetDBClusterParameterGroupMessage](#schemaresetdbclusterparametergroupmessage)|false|none|
|» DBClusterParameterGroupName|body|object|true|none|
|» ResetAllParameters|body|object|false|none|
|» Parameters|body|object|false|none|
|» ParameterName|body|object|false|none|
|» ParameterValue|body|object|false|none|
|» Description|body|object|false|none|
|» Source|body|object|false|none|
|» ApplyType|body|object|false|none|
|» DataType|body|object|false|none|
|» AllowedValues|body|object|false|none|
|» IsModifiable|body|object|false|none|
|» MinimumEngineVersion|body|object|false|none|
|» ApplyMethod|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ResetDBClusterParameterGroup|
|Version|2014-10-31|

<h3 id="postresetdbclusterparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterParameterGroupNameMessage](#schemadbclusterparametergroupnamemessage)|
|480|480|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|
|481|481|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RestoreDBClusterFromSnapshot

<a id="opIdGET_RestoreDBClusterFromSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RestoreDBClusterFromSnapshot?DBClusterIdentifier=string&SnapshotIdentifier=string&Engine=string&Action=RestoreDBClusterFromSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RestoreDBClusterFromSnapshot`

<p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>

<h3 id="getrestoredbclusterfromsnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AvailabilityZones|query|[object]|false|Provides the list of Amazon EC2 Availability Zones that instances in the restored DB cluster can be created in.|
|DBClusterIdentifier|query|string|true|<p>The name of the cluster to create from the snapshot or cluster snapshot. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>|
|SnapshotIdentifier|query|string|true|<p>The identifier for the snapshot or cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing snapshot.</p> </li> </ul>|
|Engine|query|string|true|<p>The database engine to use for the new cluster.</p> <p>Default: The same as source.</p> <p>Constraint: Must be compatible with the engine of the source.</p>|
|EngineVersion|query|string|false|The version of the database engine to use for the new cluster.|
|Port|query|integer|false|<p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p> <p>Default: The same port as the original cluster.</p>|
|DBSubnetGroupName|query|string|false|<p>The name of the subnet group to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|VpcSecurityGroupIds|query|[object]|false|A list of virtual private cloud (VPC) security groups that the new cluster will belong to.|
|Tags|query|[object]|false|The tags to be assigned to the restored cluster.|
|KmsKeyId|query|string|false|<p>The KMS key identifier to use when restoring an encrypted cluster from a DB snapshot or cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the snapshot or cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the snapshot or the cluster snapshot.</p> </li> <li> <p>If the snapshot or the cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>|
|EnableCloudwatchLogsExports|query|[[String](#schemastring)]|false|A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.|
|DeletionProtection|query|boolean|false|Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.|
|DBClusterParameterGroupName|query|string|false|<p>The name of the DB cluster parameter group to associate with this DB cluster.</p> <p> <i>Type:</i> String.       <i>Required:</i> No.</p> <p>If this argument is omitted, the default DB cluster parameter group is used. If supplied, must match the name of an existing default DB cluster parameter group. The string must consist of from 1 to 255 letters, numbers or hyphens. Its first character must be a letter, and it cannot end with a hyphen or contain two consecutive hyphens.</p>|
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
|Action|RestoreDBClusterFromSnapshot|
|Version|2014-10-31|

<h3 id="getrestoredbclusterfromsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreDBClusterFromSnapshotResult](#schemarestoredbclusterfromsnapshotresult)|
|480|480|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|
|481|481|DBClusterQuotaExceededFault|[DBClusterQuotaExceededFault](#schemadbclusterquotaexceededfault)|
|482|482|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|483|483|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|484|484|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|485|485|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|486|486|InsufficientDBClusterCapacityFault|[InsufficientDBClusterCapacityFault](#schemainsufficientdbclustercapacityfault)|
|487|487|InsufficientStorageClusterCapacityFault|[InsufficientStorageClusterCapacityFault](#schemainsufficientstorageclustercapacityfault)|
|488|488|InvalidDBSnapshotStateFault|[InvalidDBSnapshotStateFault](#schemainvaliddbsnapshotstatefault)|
|489|489|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|490|490|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|491|491|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|492|492|InvalidRestoreFault|[InvalidRestoreFault](#schemainvalidrestorefault)|
|493|493|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|494|494|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|495|495|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RestoreDBClusterFromSnapshot

<a id="opIdPOST_RestoreDBClusterFromSnapshot"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RestoreDBClusterFromSnapshot?Action=RestoreDBClusterFromSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AvailabilityZones":{},"DBClusterIdentifier":{},"SnapshotIdentifier":{},"Engine":{},"EngineVersion":{},"Port":{},"DBSubnetGroupName":{},"VpcSecurityGroupIds":{},"Tags":{},"KmsKeyId":{},"EnableCloudwatchLogsExports":{},"DeletionProtection":{},"DBClusterParameterGroupName":{}}'
```

`POST /#Action=RestoreDBClusterFromSnapshot`

<p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>

> Body parameter

```json
{
  "AvailabilityZones": {},
  "DBClusterIdentifier": {},
  "SnapshotIdentifier": {},
  "Engine": {},
  "EngineVersion": {},
  "Port": {},
  "DBSubnetGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {},
  "DBClusterParameterGroupName": {}
}
```

<h3 id="postrestoredbclusterfromsnapshot-parameters">Parameters</h3>

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
|body|body|[RestoreDBClusterFromSnapshotMessage](#schemarestoredbclusterfromsnapshotmessage)|false|none|
|» AvailabilityZones|body|object|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» SnapshotIdentifier|body|object|true|none|
|» Engine|body|object|true|none|
|» EngineVersion|body|object|false|none|
|» Port|body|object|false|none|
|» DBSubnetGroupName|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» EnableCloudwatchLogsExports|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» DBClusterParameterGroupName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RestoreDBClusterFromSnapshot|
|Version|2014-10-31|

<h3 id="postrestoredbclusterfromsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreDBClusterFromSnapshotResult](#schemarestoredbclusterfromsnapshotresult)|
|480|480|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|
|481|481|DBClusterQuotaExceededFault|[DBClusterQuotaExceededFault](#schemadbclusterquotaexceededfault)|
|482|482|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|483|483|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|484|484|DBSnapshotNotFoundFault|[DBSnapshotNotFoundFault](#schemadbsnapshotnotfoundfault)|
|485|485|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|486|486|InsufficientDBClusterCapacityFault|[InsufficientDBClusterCapacityFault](#schemainsufficientdbclustercapacityfault)|
|487|487|InsufficientStorageClusterCapacityFault|[InsufficientStorageClusterCapacityFault](#schemainsufficientstorageclustercapacityfault)|
|488|488|InvalidDBSnapshotStateFault|[InvalidDBSnapshotStateFault](#schemainvaliddbsnapshotstatefault)|
|489|489|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|490|490|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|491|491|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|492|492|InvalidRestoreFault|[InvalidRestoreFault](#schemainvalidrestorefault)|
|493|493|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|494|494|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|495|495|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RestoreDBClusterToPointInTime

<a id="opIdGET_RestoreDBClusterToPointInTime"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RestoreDBClusterToPointInTime?DBClusterIdentifier=string&SourceDBClusterIdentifier=string&Action=RestoreDBClusterToPointInTime&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RestoreDBClusterToPointInTime`

Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 

<h3 id="getrestoredbclustertopointintime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|<p>The name of the new cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>|
|RestoreType|query|string|false|<p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>|
|SourceDBClusterIdentifier|query|string|true|<p>The identifier of the source cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>|
|RestoreToTime|query|string(date-time)|false|<p>The date and time to restore the cluster to.</p> <p>Valid values: A time in Universal Coordinated Time (UTC) format.</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the instance.</p> </li> <li> <p>Must be specified if the <code>UseLatestRestorableTime</code> parameter is not provided.</p> </li> <li> <p>Cannot be specified if the <code>UseLatestRestorableTime</code> parameter is <code>true</code>.</p> </li> <li> <p>Cannot be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>.</p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>|
|UseLatestRestorableTime|query|boolean|false|<p>A value that is set to <code>true</code> to restore the cluster to the latest restorable backup time, and <code>false</code> otherwise. </p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is provided.</p>|
|Port|query|integer|false|<p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The default port for the engine.</p>|
|DBSubnetGroupName|query|string|false|<p>The subnet group name to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|VpcSecurityGroupIds|query|[object]|false|A list of VPC security groups that the new cluster belongs to.|
|Tags|query|[object]|false|The tags to be assigned to the restored cluster.|
|KmsKeyId|query|string|false|<p>The KMS key identifier to use when restoring an encrypted cluster from an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new cluster and encrypt the new cluster with an KMS key that is different from the KMS key used to encrypt the source cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the cluster is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the source cluster.</p> </li> <li> <p>If the cluster is not encrypted, then the restored cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a cluster that is not encrypted, then the restore request is rejected.</p>|
|EnableCloudwatchLogsExports|query|[[String](#schemastring)]|false|A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.|
|DeletionProtection|query|boolean|false|Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.|
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
|Action|RestoreDBClusterToPointInTime|
|Version|2014-10-31|

<h3 id="getrestoredbclustertopointintime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreDBClusterToPointInTimeResult](#schemarestoredbclustertopointintimeresult)|
|480|480|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|
|481|481|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|482|482|DBClusterQuotaExceededFault|[DBClusterQuotaExceededFault](#schemadbclusterquotaexceededfault)|
|483|483|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|484|484|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|485|485|InsufficientDBClusterCapacityFault|[InsufficientDBClusterCapacityFault](#schemainsufficientdbclustercapacityfault)|
|486|486|InsufficientStorageClusterCapacityFault|[InsufficientStorageClusterCapacityFault](#schemainsufficientstorageclustercapacityfault)|
|487|487|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|488|488|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|489|489|InvalidDBSnapshotStateFault|[InvalidDBSnapshotStateFault](#schemainvaliddbsnapshotstatefault)|
|490|490|InvalidRestoreFault|[InvalidRestoreFault](#schemainvalidrestorefault)|
|491|491|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|492|492|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|493|493|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|494|494|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RestoreDBClusterToPointInTime

<a id="opIdPOST_RestoreDBClusterToPointInTime"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=RestoreDBClusterToPointInTime?Action=RestoreDBClusterToPointInTime&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"RestoreType":{},"SourceDBClusterIdentifier":{},"RestoreToTime":{},"UseLatestRestorableTime":{},"Port":{},"DBSubnetGroupName":{},"VpcSecurityGroupIds":{},"Tags":{},"KmsKeyId":{},"EnableCloudwatchLogsExports":{},"DeletionProtection":{}}'
```

`POST /#Action=RestoreDBClusterToPointInTime`

Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "RestoreType": {},
  "SourceDBClusterIdentifier": {},
  "RestoreToTime": {},
  "UseLatestRestorableTime": {},
  "Port": {},
  "DBSubnetGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {}
}
```

<h3 id="postrestoredbclustertopointintime-parameters">Parameters</h3>

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
|body|body|[RestoreDBClusterToPointInTimeMessage](#schemarestoredbclustertopointintimemessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» RestoreType|body|object|false|none|
|» SourceDBClusterIdentifier|body|object|true|none|
|» RestoreToTime|body|object|false|none|
|» UseLatestRestorableTime|body|object|false|none|
|» Port|body|object|false|none|
|» DBSubnetGroupName|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» EnableCloudwatchLogsExports|body|object|false|none|
|» DeletionProtection|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RestoreDBClusterToPointInTime|
|Version|2014-10-31|

<h3 id="postrestoredbclustertopointintime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreDBClusterToPointInTimeResult](#schemarestoredbclustertopointintimeresult)|
|480|480|DBClusterAlreadyExistsFault|[DBClusterAlreadyExistsFault](#schemadbclusteralreadyexistsfault)|
|481|481|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|482|482|DBClusterQuotaExceededFault|[DBClusterQuotaExceededFault](#schemadbclusterquotaexceededfault)|
|483|483|DBClusterSnapshotNotFoundFault|[DBClusterSnapshotNotFoundFault](#schemadbclustersnapshotnotfoundfault)|
|484|484|DBSubnetGroupNotFoundFault|[DBSubnetGroupNotFoundFault](#schemadbsubnetgroupnotfoundfault)|
|485|485|InsufficientDBClusterCapacityFault|[InsufficientDBClusterCapacityFault](#schemainsufficientdbclustercapacityfault)|
|486|486|InsufficientStorageClusterCapacityFault|[InsufficientStorageClusterCapacityFault](#schemainsufficientstorageclustercapacityfault)|
|487|487|InvalidDBClusterSnapshotStateFault|[InvalidDBClusterSnapshotStateFault](#schemainvaliddbclustersnapshotstatefault)|
|488|488|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|489|489|InvalidDBSnapshotStateFault|[InvalidDBSnapshotStateFault](#schemainvaliddbsnapshotstatefault)|
|490|490|InvalidRestoreFault|[InvalidRestoreFault](#schemainvalidrestorefault)|
|491|491|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|492|492|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|493|493|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|494|494|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StartDBCluster

<a id="opIdGET_StartDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=StartDBCluster?DBClusterIdentifier=string&Action=StartDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StartDBCluster`

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

<h3 id="getstartdbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|The identifier of the cluster to restart. Example: <code>docdb-2019-05-28-15-24-52</code> |
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
|Action|StartDBCluster|
|Version|2014-10-31|

<h3 id="getstartdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDBClusterResult](#schemastartdbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StartDBCluster

<a id="opIdPOST_StartDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=StartDBCluster?Action=StartDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{}}'
```

`POST /#Action=StartDBCluster`

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

> Body parameter

```json
{
  "DBClusterIdentifier": {}
}
```

<h3 id="poststartdbcluster-parameters">Parameters</h3>

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
|body|body|[StartDBClusterMessage](#schemastartdbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StartDBCluster|
|Version|2014-10-31|

<h3 id="poststartdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDBClusterResult](#schemastartdbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StopDBCluster

<a id="opIdGET_StopDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=StopDBCluster?DBClusterIdentifier=string&Action=StopDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StopDBCluster`

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

<h3 id="getstopdbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|The identifier of the cluster to stop. Example: <code>docdb-2019-05-28-15-24-52</code> |
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
|Action|StopDBCluster|
|Version|2014-10-31|

<h3 id="getstopdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopDBClusterResult](#schemastopdbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StopDBCluster

<a id="opIdPOST_StopDBCluster"></a>

> Code samples

```bash
curl 'https://docdb.us-east-1.amazonaws.com/#Action=StopDBCluster?Action=StopDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{}}'
```

`POST /#Action=StopDBCluster`

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

> Body parameter

```json
{
  "DBClusterIdentifier": {}
}
```

<h3 id="poststopdbcluster-parameters">Parameters</h3>

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
|body|body|[StopDBClusterMessage](#schemastopdbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StopDBCluster|
|Version|2014-10-31|

<h3 id="poststopdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopDBClusterResult](#schemastopdbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|482|482|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddSourceIdentifierToSubscriptionResult">AddSourceIdentifierToSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddsourceidentifiertosubscriptionresult"></a>
<a id="schema_AddSourceIdentifierToSubscriptionResult"></a>
<a id="tocSaddsourceidentifiertosubscriptionresult"></a>
<a id="tocsaddsourceidentifiertosubscriptionresult"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {},
    "EventSubscriptionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Detailed information about an event to which you have subscribed.|

<h2 id="tocS_SubscriptionNotFoundFault">SubscriptionNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionnotfoundfault"></a>
<a id="schema_SubscriptionNotFoundFault"></a>
<a id="tocSsubscriptionnotfoundfault"></a>
<a id="tocssubscriptionnotfoundfault"></a>

```json
null
```

<h2 id="tocS_SourceNotFoundFault">SourceNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemasourcenotfoundfault"></a>
<a id="schema_SourceNotFoundFault"></a>
<a id="tocSsourcenotfoundfault"></a>
<a id="tocssourcenotfoundfault"></a>

```json
null
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

Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_DBInstanceNotFoundFault">DBInstanceNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbinstancenotfoundfault"></a>
<a id="schema_DBInstanceNotFoundFault"></a>
<a id="tocSdbinstancenotfoundfault"></a>
<a id="tocsdbinstancenotfoundfault"></a>

```json
null
```

<h2 id="tocS_DBSnapshotNotFoundFault">DBSnapshotNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbsnapshotnotfoundfault"></a>
<a id="schema_DBSnapshotNotFoundFault"></a>
<a id="tocSdbsnapshotnotfoundfault"></a>
<a id="tocsdbsnapshotnotfoundfault"></a>

```json
null
```

<h2 id="tocS_DBClusterNotFoundFault">DBClusterNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusternotfoundfault"></a>
<a id="schema_DBClusterNotFoundFault"></a>
<a id="tocSdbclusternotfoundfault"></a>
<a id="tocsdbclusternotfoundfault"></a>

```json
null
```

<h2 id="tocS_ApplyPendingMaintenanceActionResult">ApplyPendingMaintenanceActionResult</h2>
<!-- backwards compatibility -->
<a id="schemaapplypendingmaintenanceactionresult"></a>
<a id="schema_ApplyPendingMaintenanceActionResult"></a>
<a id="tocSapplypendingmaintenanceactionresult"></a>
<a id="tocsapplypendingmaintenanceactionresult"></a>

```json
{
  "ResourcePendingMaintenanceActions": {
    "ResourceIdentifier": {},
    "PendingMaintenanceActionDetails": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePendingMaintenanceActions|[ResourcePendingMaintenanceActions](#schemaresourcependingmaintenanceactions)|false|none|Represents the output of <a>ApplyPendingMaintenanceAction</a>. |

<h2 id="tocS_ResourceNotFoundFault">ResourceNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundfault"></a>
<a id="schema_ResourceNotFoundFault"></a>
<a id="tocSresourcenotfoundfault"></a>
<a id="tocsresourcenotfoundfault"></a>

```json
null
```

<h2 id="tocS_InvalidDBClusterStateFault">InvalidDBClusterStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbclusterstatefault"></a>
<a id="schema_InvalidDBClusterStateFault"></a>
<a id="tocSinvaliddbclusterstatefault"></a>
<a id="tocsinvaliddbclusterstatefault"></a>

```json
null
```

<h2 id="tocS_InvalidDBInstanceStateFault">InvalidDBInstanceStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbinstancestatefault"></a>
<a id="schema_InvalidDBInstanceStateFault"></a>
<a id="tocSinvaliddbinstancestatefault"></a>
<a id="tocsinvaliddbinstancestatefault"></a>

```json
null
```

<h2 id="tocS_CopyDBClusterParameterGroupResult">CopyDBClusterParameterGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacopydbclusterparametergroupresult"></a>
<a id="schema_CopyDBClusterParameterGroupResult"></a>
<a id="tocScopydbclusterparametergroupresult"></a>
<a id="tocscopydbclusterparametergroupresult"></a>

```json
{
  "DBClusterParameterGroup": {
    "DBClusterParameterGroupName": {},
    "DBParameterGroupFamily": {},
    "Description": {},
    "DBClusterParameterGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroup|[DBClusterParameterGroup](#schemadbclusterparametergroup)|false|none|Detailed information about a cluster parameter group. |

<h2 id="tocS_DBParameterGroupNotFoundFault">DBParameterGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupnotfoundfault"></a>
<a id="schema_DBParameterGroupNotFoundFault"></a>
<a id="tocSdbparametergroupnotfoundfault"></a>
<a id="tocsdbparametergroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_DBParameterGroupQuotaExceededFault">DBParameterGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupquotaexceededfault"></a>
<a id="schema_DBParameterGroupQuotaExceededFault"></a>
<a id="tocSdbparametergroupquotaexceededfault"></a>
<a id="tocsdbparametergroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_DBParameterGroupAlreadyExistsFault">DBParameterGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupalreadyexistsfault"></a>
<a id="schema_DBParameterGroupAlreadyExistsFault"></a>
<a id="tocSdbparametergroupalreadyexistsfault"></a>
<a id="tocsdbparametergroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_CopyDBClusterSnapshotResult">CopyDBClusterSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacopydbclustersnapshotresult"></a>
<a id="schema_CopyDBClusterSnapshotResult"></a>
<a id="tocScopydbclustersnapshotresult"></a>
<a id="tocscopydbclustersnapshotresult"></a>

```json
{
  "DBClusterSnapshot": {
    "AvailabilityZones": {},
    "DBClusterSnapshotIdentifier": {},
    "DBClusterIdentifier": {},
    "SnapshotCreateTime": {},
    "Engine": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshot|[DBClusterSnapshot](#schemadbclustersnapshot)|false|none|Detailed information about a cluster snapshot. |

<h2 id="tocS_DBClusterSnapshotAlreadyExistsFault">DBClusterSnapshotAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshotalreadyexistsfault"></a>
<a id="schema_DBClusterSnapshotAlreadyExistsFault"></a>
<a id="tocSdbclustersnapshotalreadyexistsfault"></a>
<a id="tocsdbclustersnapshotalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_DBClusterSnapshotNotFoundFault">DBClusterSnapshotNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshotnotfoundfault"></a>
<a id="schema_DBClusterSnapshotNotFoundFault"></a>
<a id="tocSdbclustersnapshotnotfoundfault"></a>
<a id="tocsdbclustersnapshotnotfoundfault"></a>

```json
null
```

<h2 id="tocS_InvalidDBClusterSnapshotStateFault">InvalidDBClusterSnapshotStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbclustersnapshotstatefault"></a>
<a id="schema_InvalidDBClusterSnapshotStateFault"></a>
<a id="tocSinvaliddbclustersnapshotstatefault"></a>
<a id="tocsinvaliddbclustersnapshotstatefault"></a>

```json
null
```

<h2 id="tocS_SnapshotQuotaExceededFault">SnapshotQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotquotaexceededfault"></a>
<a id="schema_SnapshotQuotaExceededFault"></a>
<a id="tocSsnapshotquotaexceededfault"></a>
<a id="tocssnapshotquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_KMSKeyNotAccessibleFault">KMSKeyNotAccessibleFault</h2>
<!-- backwards compatibility -->
<a id="schemakmskeynotaccessiblefault"></a>
<a id="schema_KMSKeyNotAccessibleFault"></a>
<a id="tocSkmskeynotaccessiblefault"></a>
<a id="tocskmskeynotaccessiblefault"></a>

```json
null
```

<h2 id="tocS_CreateDBClusterResult">CreateDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclusterresult"></a>
<a id="schema_CreateDBClusterResult"></a>
<a id="tocScreatedbclusterresult"></a>
<a id="tocscreatedbclusterresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_DBClusterAlreadyExistsFault">DBClusterAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusteralreadyexistsfault"></a>
<a id="schema_DBClusterAlreadyExistsFault"></a>
<a id="tocSdbclusteralreadyexistsfault"></a>
<a id="tocsdbclusteralreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_InsufficientStorageClusterCapacityFault">InsufficientStorageClusterCapacityFault</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientstorageclustercapacityfault"></a>
<a id="schema_InsufficientStorageClusterCapacityFault"></a>
<a id="tocSinsufficientstorageclustercapacityfault"></a>
<a id="tocsinsufficientstorageclustercapacityfault"></a>

```json
null
```

<h2 id="tocS_DBClusterQuotaExceededFault">DBClusterQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterquotaexceededfault"></a>
<a id="schema_DBClusterQuotaExceededFault"></a>
<a id="tocSdbclusterquotaexceededfault"></a>
<a id="tocsdbclusterquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_StorageQuotaExceededFault">StorageQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemastoragequotaexceededfault"></a>
<a id="schema_StorageQuotaExceededFault"></a>
<a id="tocSstoragequotaexceededfault"></a>
<a id="tocsstoragequotaexceededfault"></a>

```json
null
```

<h2 id="tocS_DBSubnetGroupNotFoundFault">DBSubnetGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetgroupnotfoundfault"></a>
<a id="schema_DBSubnetGroupNotFoundFault"></a>
<a id="tocSdbsubnetgroupnotfoundfault"></a>
<a id="tocsdbsubnetgroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_InvalidVPCNetworkStateFault">InvalidVPCNetworkStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidvpcnetworkstatefault"></a>
<a id="schema_InvalidVPCNetworkStateFault"></a>
<a id="tocSinvalidvpcnetworkstatefault"></a>
<a id="tocsinvalidvpcnetworkstatefault"></a>

```json
null
```

<h2 id="tocS_InvalidDBSubnetGroupStateFault">InvalidDBSubnetGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbsubnetgroupstatefault"></a>
<a id="schema_InvalidDBSubnetGroupStateFault"></a>
<a id="tocSinvaliddbsubnetgroupstatefault"></a>
<a id="tocsinvaliddbsubnetgroupstatefault"></a>

```json
null
```

<h2 id="tocS_InvalidSubnet">InvalidSubnet</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsubnet"></a>
<a id="schema_InvalidSubnet"></a>
<a id="tocSinvalidsubnet"></a>
<a id="tocsinvalidsubnet"></a>

```json
null
```

<h2 id="tocS_DBClusterParameterGroupNotFoundFault">DBClusterParameterGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterparametergroupnotfoundfault"></a>
<a id="schema_DBClusterParameterGroupNotFoundFault"></a>
<a id="tocSdbclusterparametergroupnotfoundfault"></a>
<a id="tocsdbclusterparametergroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_DBSubnetGroupDoesNotCoverEnoughAZs">DBSubnetGroupDoesNotCoverEnoughAZs</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetgroupdoesnotcoverenoughazs"></a>
<a id="schema_DBSubnetGroupDoesNotCoverEnoughAZs"></a>
<a id="tocSdbsubnetgroupdoesnotcoverenoughazs"></a>
<a id="tocsdbsubnetgroupdoesnotcoverenoughazs"></a>

```json
null
```

<h2 id="tocS_GlobalClusterNotFoundFault">GlobalClusterNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclusternotfoundfault"></a>
<a id="schema_GlobalClusterNotFoundFault"></a>
<a id="tocSglobalclusternotfoundfault"></a>
<a id="tocsglobalclusternotfoundfault"></a>

```json
null
```

<h2 id="tocS_InvalidGlobalClusterStateFault">InvalidGlobalClusterStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidglobalclusterstatefault"></a>
<a id="schema_InvalidGlobalClusterStateFault"></a>
<a id="tocSinvalidglobalclusterstatefault"></a>
<a id="tocsinvalidglobalclusterstatefault"></a>

```json
null
```

<h2 id="tocS_CreateDBClusterParameterGroupResult">CreateDBClusterParameterGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclusterparametergroupresult"></a>
<a id="schema_CreateDBClusterParameterGroupResult"></a>
<a id="tocScreatedbclusterparametergroupresult"></a>
<a id="tocscreatedbclusterparametergroupresult"></a>

```json
{
  "DBClusterParameterGroup": {
    "DBClusterParameterGroupName": {},
    "DBParameterGroupFamily": {},
    "Description": {},
    "DBClusterParameterGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroup|[DBClusterParameterGroup](#schemadbclusterparametergroup)|false|none|Detailed information about a cluster parameter group. |

<h2 id="tocS_CreateDBClusterSnapshotResult">CreateDBClusterSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclustersnapshotresult"></a>
<a id="schema_CreateDBClusterSnapshotResult"></a>
<a id="tocScreatedbclustersnapshotresult"></a>
<a id="tocscreatedbclustersnapshotresult"></a>

```json
{
  "DBClusterSnapshot": {
    "AvailabilityZones": {},
    "DBClusterSnapshotIdentifier": {},
    "DBClusterIdentifier": {},
    "SnapshotCreateTime": {},
    "Engine": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshot|[DBClusterSnapshot](#schemadbclustersnapshot)|false|none|Detailed information about a cluster snapshot. |

<h2 id="tocS_CreateDBInstanceResult">CreateDBInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbinstanceresult"></a>
<a id="schema_CreateDBInstanceResult"></a>
<a id="tocScreatedbinstanceresult"></a>
<a id="tocscreatedbinstanceresult"></a>

```json
{
  "DBInstance": {
    "DBInstanceIdentifier": {},
    "DBInstanceClass": {},
    "Engine": {},
    "DBInstanceStatus": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "DBSubnetGroup": {
      "DBSubnetGroupName": {},
      "DBSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "DBSubnetGroupArn": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "DBInstanceClass": {},
      "AllocatedStorage": {},
      "MasterUserPassword": {},
      "Port": {},
      "BackupRetentionPeriod": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "LicenseModel": {},
      "Iops": {},
      "DBInstanceIdentifier": {},
      "StorageType": {},
      "CACertificateIdentifier": {},
      "DBSubnetGroupName": {},
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      }
    },
    "LatestRestorableTime": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "CopyTagsToSnapshot": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "EnabledCloudwatchLogsExports": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|Detailed information about an instance. |

<h2 id="tocS_DBInstanceAlreadyExistsFault">DBInstanceAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbinstancealreadyexistsfault"></a>
<a id="schema_DBInstanceAlreadyExistsFault"></a>
<a id="tocSdbinstancealreadyexistsfault"></a>
<a id="tocsdbinstancealreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_InsufficientDBInstanceCapacityFault">InsufficientDBInstanceCapacityFault</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientdbinstancecapacityfault"></a>
<a id="schema_InsufficientDBInstanceCapacityFault"></a>
<a id="tocSinsufficientdbinstancecapacityfault"></a>
<a id="tocsinsufficientdbinstancecapacityfault"></a>

```json
null
```

<h2 id="tocS_DBSecurityGroupNotFoundFault">DBSecurityGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbsecuritygroupnotfoundfault"></a>
<a id="schema_DBSecurityGroupNotFoundFault"></a>
<a id="tocSdbsecuritygroupnotfoundfault"></a>
<a id="tocsdbsecuritygroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_InstanceQuotaExceededFault">InstanceQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemainstancequotaexceededfault"></a>
<a id="schema_InstanceQuotaExceededFault"></a>
<a id="tocSinstancequotaexceededfault"></a>
<a id="tocsinstancequotaexceededfault"></a>

```json
null
```

<h2 id="tocS_StorageTypeNotSupportedFault">StorageTypeNotSupportedFault</h2>
<!-- backwards compatibility -->
<a id="schemastoragetypenotsupportedfault"></a>
<a id="schema_StorageTypeNotSupportedFault"></a>
<a id="tocSstoragetypenotsupportedfault"></a>
<a id="tocsstoragetypenotsupportedfault"></a>

```json
null
```

<h2 id="tocS_AuthorizationNotFoundFault">AuthorizationNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationnotfoundfault"></a>
<a id="schema_AuthorizationNotFoundFault"></a>
<a id="tocSauthorizationnotfoundfault"></a>
<a id="tocsauthorizationnotfoundfault"></a>

```json
null
```

<h2 id="tocS_CreateDBSubnetGroupResult">CreateDBSubnetGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbsubnetgroupresult"></a>
<a id="schema_CreateDBSubnetGroupResult"></a>
<a id="tocScreatedbsubnetgroupresult"></a>
<a id="tocscreatedbsubnetgroupresult"></a>

```json
{
  "DBSubnetGroup": {
    "DBSubnetGroupName": {},
    "DBSubnetGroupDescription": {},
    "VpcId": {},
    "SubnetGroupStatus": {},
    "Subnets": {},
    "DBSubnetGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSubnetGroup|[DBSubnetGroup](#schemadbsubnetgroup)|false|none|Detailed information about a subnet group. |

<h2 id="tocS_DBSubnetGroupAlreadyExistsFault">DBSubnetGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetgroupalreadyexistsfault"></a>
<a id="schema_DBSubnetGroupAlreadyExistsFault"></a>
<a id="tocSdbsubnetgroupalreadyexistsfault"></a>
<a id="tocsdbsubnetgroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_DBSubnetGroupQuotaExceededFault">DBSubnetGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetgroupquotaexceededfault"></a>
<a id="schema_DBSubnetGroupQuotaExceededFault"></a>
<a id="tocSdbsubnetgroupquotaexceededfault"></a>
<a id="tocsdbsubnetgroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_DBSubnetQuotaExceededFault">DBSubnetQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetquotaexceededfault"></a>
<a id="schema_DBSubnetQuotaExceededFault"></a>
<a id="tocSdbsubnetquotaexceededfault"></a>
<a id="tocsdbsubnetquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_CreateEventSubscriptionResult">CreateEventSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventsubscriptionresult"></a>
<a id="schema_CreateEventSubscriptionResult"></a>
<a id="tocScreateeventsubscriptionresult"></a>
<a id="tocscreateeventsubscriptionresult"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {},
    "EventSubscriptionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Detailed information about an event to which you have subscribed.|

<h2 id="tocS_EventSubscriptionQuotaExceededFault">EventSubscriptionQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscriptionquotaexceededfault"></a>
<a id="schema_EventSubscriptionQuotaExceededFault"></a>
<a id="tocSeventsubscriptionquotaexceededfault"></a>
<a id="tocseventsubscriptionquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_SubscriptionAlreadyExistFault">SubscriptionAlreadyExistFault</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionalreadyexistfault"></a>
<a id="schema_SubscriptionAlreadyExistFault"></a>
<a id="tocSsubscriptionalreadyexistfault"></a>
<a id="tocssubscriptionalreadyexistfault"></a>

```json
null
```

<h2 id="tocS_SNSInvalidTopicFault">SNSInvalidTopicFault</h2>
<!-- backwards compatibility -->
<a id="schemasnsinvalidtopicfault"></a>
<a id="schema_SNSInvalidTopicFault"></a>
<a id="tocSsnsinvalidtopicfault"></a>
<a id="tocssnsinvalidtopicfault"></a>

```json
null
```

<h2 id="tocS_SNSNoAuthorizationFault">SNSNoAuthorizationFault</h2>
<!-- backwards compatibility -->
<a id="schemasnsnoauthorizationfault"></a>
<a id="schema_SNSNoAuthorizationFault"></a>
<a id="tocSsnsnoauthorizationfault"></a>
<a id="tocssnsnoauthorizationfault"></a>

```json
null
```

<h2 id="tocS_SNSTopicArnNotFoundFault">SNSTopicArnNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicarnnotfoundfault"></a>
<a id="schema_SNSTopicArnNotFoundFault"></a>
<a id="tocSsnstopicarnnotfoundfault"></a>
<a id="tocssnstopicarnnotfoundfault"></a>

```json
null
```

<h2 id="tocS_SubscriptionCategoryNotFoundFault">SubscriptionCategoryNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncategorynotfoundfault"></a>
<a id="schema_SubscriptionCategoryNotFoundFault"></a>
<a id="tocSsubscriptioncategorynotfoundfault"></a>
<a id="tocssubscriptioncategorynotfoundfault"></a>

```json
null
```

<h2 id="tocS_CreateGlobalClusterResult">CreateGlobalClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobalclusterresult"></a>
<a id="schema_CreateGlobalClusterResult"></a>
<a id="tocScreateglobalclusterresult"></a>
<a id="tocscreateglobalclusterresult"></a>

```json
{
  "GlobalCluster": {
    "GlobalClusterIdentifier": {},
    "GlobalClusterResourceId": {},
    "GlobalClusterArn": {},
    "Status": {},
    "Engine": {},
    "EngineVersion": {},
    "DatabaseName": {},
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|A data type representing an Amazon DocumentDB global cluster.|

<h2 id="tocS_GlobalClusterAlreadyExistsFault">GlobalClusterAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclusteralreadyexistsfault"></a>
<a id="schema_GlobalClusterAlreadyExistsFault"></a>
<a id="tocSglobalclusteralreadyexistsfault"></a>
<a id="tocsglobalclusteralreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_GlobalClusterQuotaExceededFault">GlobalClusterQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclusterquotaexceededfault"></a>
<a id="schema_GlobalClusterQuotaExceededFault"></a>
<a id="tocSglobalclusterquotaexceededfault"></a>
<a id="tocsglobalclusterquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_DeleteDBClusterResult">DeleteDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbclusterresult"></a>
<a id="schema_DeleteDBClusterResult"></a>
<a id="tocSdeletedbclusterresult"></a>
<a id="tocsdeletedbclusterresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_InvalidDBParameterGroupStateFault">InvalidDBParameterGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbparametergroupstatefault"></a>
<a id="schema_InvalidDBParameterGroupStateFault"></a>
<a id="tocSinvaliddbparametergroupstatefault"></a>
<a id="tocsinvaliddbparametergroupstatefault"></a>

```json
null
```

<h2 id="tocS_DeleteDBClusterSnapshotResult">DeleteDBClusterSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbclustersnapshotresult"></a>
<a id="schema_DeleteDBClusterSnapshotResult"></a>
<a id="tocSdeletedbclustersnapshotresult"></a>
<a id="tocsdeletedbclustersnapshotresult"></a>

```json
{
  "DBClusterSnapshot": {
    "AvailabilityZones": {},
    "DBClusterSnapshotIdentifier": {},
    "DBClusterIdentifier": {},
    "SnapshotCreateTime": {},
    "Engine": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshot|[DBClusterSnapshot](#schemadbclustersnapshot)|false|none|Detailed information about a cluster snapshot. |

<h2 id="tocS_DeleteDBInstanceResult">DeleteDBInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbinstanceresult"></a>
<a id="schema_DeleteDBInstanceResult"></a>
<a id="tocSdeletedbinstanceresult"></a>
<a id="tocsdeletedbinstanceresult"></a>

```json
{
  "DBInstance": {
    "DBInstanceIdentifier": {},
    "DBInstanceClass": {},
    "Engine": {},
    "DBInstanceStatus": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "DBSubnetGroup": {
      "DBSubnetGroupName": {},
      "DBSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "DBSubnetGroupArn": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "DBInstanceClass": {},
      "AllocatedStorage": {},
      "MasterUserPassword": {},
      "Port": {},
      "BackupRetentionPeriod": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "LicenseModel": {},
      "Iops": {},
      "DBInstanceIdentifier": {},
      "StorageType": {},
      "CACertificateIdentifier": {},
      "DBSubnetGroupName": {},
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      }
    },
    "LatestRestorableTime": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "CopyTagsToSnapshot": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "EnabledCloudwatchLogsExports": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|Detailed information about an instance. |

<h2 id="tocS_DBSnapshotAlreadyExistsFault">DBSnapshotAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbsnapshotalreadyexistsfault"></a>
<a id="schema_DBSnapshotAlreadyExistsFault"></a>
<a id="tocSdbsnapshotalreadyexistsfault"></a>
<a id="tocsdbsnapshotalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_InvalidDBSubnetStateFault">InvalidDBSubnetStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbsubnetstatefault"></a>
<a id="schema_InvalidDBSubnetStateFault"></a>
<a id="tocSinvaliddbsubnetstatefault"></a>
<a id="tocsinvaliddbsubnetstatefault"></a>

```json
null
```

<h2 id="tocS_DeleteEventSubscriptionResult">DeleteEventSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsubscriptionresult"></a>
<a id="schema_DeleteEventSubscriptionResult"></a>
<a id="tocSdeleteeventsubscriptionresult"></a>
<a id="tocsdeleteeventsubscriptionresult"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {},
    "EventSubscriptionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Detailed information about an event to which you have subscribed.|

<h2 id="tocS_InvalidEventSubscriptionStateFault">InvalidEventSubscriptionStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalideventsubscriptionstatefault"></a>
<a id="schema_InvalidEventSubscriptionStateFault"></a>
<a id="tocSinvalideventsubscriptionstatefault"></a>
<a id="tocsinvalideventsubscriptionstatefault"></a>

```json
null
```

<h2 id="tocS_DeleteGlobalClusterResult">DeleteGlobalClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteglobalclusterresult"></a>
<a id="schema_DeleteGlobalClusterResult"></a>
<a id="tocSdeleteglobalclusterresult"></a>
<a id="tocsdeleteglobalclusterresult"></a>

```json
{
  "GlobalCluster": {
    "GlobalClusterIdentifier": {},
    "GlobalClusterResourceId": {},
    "GlobalClusterArn": {},
    "Status": {},
    "Engine": {},
    "EngineVersion": {},
    "DatabaseName": {},
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|A data type representing an Amazon DocumentDB global cluster.|

<h2 id="tocS_CertificateMessage">CertificateMessage</h2>
<!-- backwards compatibility -->
<a id="schemacertificatemessage"></a>
<a id="schema_CertificateMessage"></a>
<a id="tocScertificatemessage"></a>
<a id="tocscertificatemessage"></a>

```json
{
  "Certificates": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificates|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

<p>A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.</p> <p>Wildcards are not supported in filters.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_CertificateNotFoundFault">CertificateNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemacertificatenotfoundfault"></a>
<a id="schema_CertificateNotFoundFault"></a>
<a id="tocScertificatenotfoundfault"></a>
<a id="tocscertificatenotfoundfault"></a>

```json
null
```

<h2 id="tocS_DBClusterParameterGroupsMessage">DBClusterParameterGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterparametergroupsmessage"></a>
<a id="schema_DBClusterParameterGroupsMessage"></a>
<a id="tocSdbclusterparametergroupsmessage"></a>
<a id="tocsdbclusterparametergroupsmessage"></a>

```json
{
  "Marker": {},
  "DBClusterParameterGroups": {}
}
```

Represents the output of <a>DBClusterParameterGroups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBClusterParameterGroups|object|false|none|none|

<h2 id="tocS_DBClusterParameterGroupDetails">DBClusterParameterGroupDetails</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterparametergroupdetails"></a>
<a id="schema_DBClusterParameterGroupDetails"></a>
<a id="tocSdbclusterparametergroupdetails"></a>
<a id="tocsdbclusterparametergroupdetails"></a>

```json
{
  "Parameters": {},
  "Marker": {}
}
```

Represents the output of <a>DBClusterParameterGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBClusterSnapshotAttributesResult">DescribeDBClusterSnapshotAttributesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbclustersnapshotattributesresult"></a>
<a id="schema_DescribeDBClusterSnapshotAttributesResult"></a>
<a id="tocSdescribedbclustersnapshotattributesresult"></a>
<a id="tocsdescribedbclustersnapshotattributesresult"></a>

```json
{
  "DBClusterSnapshotAttributesResult": {
    "DBClusterSnapshotIdentifier": {},
    "DBClusterSnapshotAttributes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotAttributesResult|[DBClusterSnapshotAttributesResult](#schemadbclustersnapshotattributesresult)|false|none|Detailed information about the attributes that are associated with a cluster snapshot.|

<h2 id="tocS_DBClusterSnapshotMessage">DBClusterSnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshotmessage"></a>
<a id="schema_DBClusterSnapshotMessage"></a>
<a id="tocSdbclustersnapshotmessage"></a>
<a id="tocsdbclustersnapshotmessage"></a>

```json
{
  "Marker": {},
  "DBClusterSnapshots": {}
}
```

Represents the output of <a>DescribeDBClusterSnapshots</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBClusterSnapshots|object|false|none|none|

<h2 id="tocS_DBClusterMessage">DBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbclustermessage"></a>
<a id="schema_DBClusterMessage"></a>
<a id="tocSdbclustermessage"></a>
<a id="tocsdbclustermessage"></a>

```json
{
  "Marker": {},
  "DBClusters": {}
}
```

Represents the output of <a>DescribeDBClusters</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBClusters|object|false|none|none|

<h2 id="tocS_DBEngineVersionMessage">DBEngineVersionMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbengineversionmessage"></a>
<a id="schema_DBEngineVersionMessage"></a>
<a id="tocSdbengineversionmessage"></a>
<a id="tocsdbengineversionmessage"></a>

```json
{
  "Marker": {},
  "DBEngineVersions": {}
}
```

Represents the output of <a>DescribeDBEngineVersions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBEngineVersions|object|false|none|none|

<h2 id="tocS_DBInstanceMessage">DBInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbinstancemessage"></a>
<a id="schema_DBInstanceMessage"></a>
<a id="tocSdbinstancemessage"></a>
<a id="tocsdbinstancemessage"></a>

```json
{
  "Marker": {},
  "DBInstances": {}
}
```

Represents the output of <a>DescribeDBInstances</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBInstances|object|false|none|none|

<h2 id="tocS_DBSubnetGroupMessage">DBSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetgroupmessage"></a>
<a id="schema_DBSubnetGroupMessage"></a>
<a id="tocSdbsubnetgroupmessage"></a>
<a id="tocsdbsubnetgroupmessage"></a>

```json
{
  "Marker": {},
  "DBSubnetGroups": {}
}
```

Represents the output of <a>DescribeDBSubnetGroups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBSubnetGroups|object|false|none|none|

<h2 id="tocS_DescribeEngineDefaultClusterParametersResult">DescribeEngineDefaultClusterParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenginedefaultclusterparametersresult"></a>
<a id="schema_DescribeEngineDefaultClusterParametersResult"></a>
<a id="tocSdescribeenginedefaultclusterparametersresult"></a>
<a id="tocsdescribeenginedefaultclusterparametersresult"></a>

```json
{
  "EngineDefaults": {
    "DBParameterGroupFamily": {},
    "Marker": {},
    "Parameters": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineDefaults|[EngineDefaults](#schemaenginedefaults)|false|none|Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation. |

<h2 id="tocS_EventCategoriesMessage">EventCategoriesMessage</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategoriesmessage"></a>
<a id="schema_EventCategoriesMessage"></a>
<a id="tocSeventcategoriesmessage"></a>
<a id="tocseventcategoriesmessage"></a>

```json
{
  "EventCategoriesMapList": {}
}
```

Represents the output of <a>DescribeEventCategories</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventCategoriesMapList|object|false|none|none|

<h2 id="tocS_EventSubscriptionsMessage">EventSubscriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscriptionsmessage"></a>
<a id="schema_EventSubscriptionsMessage"></a>
<a id="tocSeventsubscriptionsmessage"></a>
<a id="tocseventsubscriptionsmessage"></a>

```json
{
  "Marker": {},
  "EventSubscriptionsList": {}
}
```

Represents the output of <a>DescribeEventSubscriptions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|EventSubscriptionsList|object|false|none|none|

<h2 id="tocS_EventsMessage">EventsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaeventsmessage"></a>
<a id="schema_EventsMessage"></a>
<a id="tocSeventsmessage"></a>
<a id="tocseventsmessage"></a>

```json
{
  "Marker": {},
  "Events": {}
}
```

Represents the output of <a>DescribeEvents</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Events|object|false|none|none|

<h2 id="tocS_GlobalClustersMessage">GlobalClustersMessage</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclustersmessage"></a>
<a id="schema_GlobalClustersMessage"></a>
<a id="tocSglobalclustersmessage"></a>
<a id="tocsglobalclustersmessage"></a>

```json
{
  "Marker": {},
  "GlobalClusters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|GlobalClusters|object|false|none|none|

<h2 id="tocS_OrderableDBInstanceOptionsMessage">OrderableDBInstanceOptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaorderabledbinstanceoptionsmessage"></a>
<a id="schema_OrderableDBInstanceOptionsMessage"></a>
<a id="tocSorderabledbinstanceoptionsmessage"></a>
<a id="tocsorderabledbinstanceoptionsmessage"></a>

```json
{
  "OrderableDBInstanceOptions": {},
  "Marker": {}
}
```

Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrderableDBInstanceOptions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_PendingMaintenanceActionsMessage">PendingMaintenanceActionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceactionsmessage"></a>
<a id="schema_PendingMaintenanceActionsMessage"></a>
<a id="tocSpendingmaintenanceactionsmessage"></a>
<a id="tocspendingmaintenanceactionsmessage"></a>

```json
{
  "PendingMaintenanceActions": {},
  "Marker": {}
}
```

Represents the output of <a>DescribePendingMaintenanceActions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PendingMaintenanceActions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_FailoverDBClusterResult">FailoverDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemafailoverdbclusterresult"></a>
<a id="schema_FailoverDBClusterResult"></a>
<a id="tocSfailoverdbclusterresult"></a>
<a id="tocsfailoverdbclusterresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_TagListMessage">TagListMessage</h2>
<!-- backwards compatibility -->
<a id="schemataglistmessage"></a>
<a id="schema_TagListMessage"></a>
<a id="tocStaglistmessage"></a>
<a id="tocstaglistmessage"></a>

```json
{
  "TagList": {}
}
```

Represents the output of <a>ListTagsForResource</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

<h2 id="tocS_ModifyDBClusterResult">ModifyDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbclusterresult"></a>
<a id="schema_ModifyDBClusterResult"></a>
<a id="tocSmodifydbclusterresult"></a>
<a id="tocsmodifydbclusterresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_LogTypeList">LogTypeList</h2>
<!-- backwards compatibility -->
<a id="schemalogtypelist"></a>
<a id="schema_LogTypeList"></a>
<a id="tocSlogtypelist"></a>
<a id="tocslogtypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InvalidDBSecurityGroupStateFault">InvalidDBSecurityGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbsecuritygroupstatefault"></a>
<a id="schema_InvalidDBSecurityGroupStateFault"></a>
<a id="tocSinvaliddbsecuritygroupstatefault"></a>
<a id="tocsinvaliddbsecuritygroupstatefault"></a>

```json
null
```

<h2 id="tocS_DBClusterParameterGroupNameMessage">DBClusterParameterGroupNameMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterparametergroupnamemessage"></a>
<a id="schema_DBClusterParameterGroupNameMessage"></a>
<a id="tocSdbclusterparametergroupnamemessage"></a>
<a id="tocsdbclusterparametergroupnamemessage"></a>

```json
{
  "DBClusterParameterGroupName": {}
}
```

Contains the name of a cluster parameter group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|false|none|none|

<h2 id="tocS_Parameter">Parameter</h2>
<!-- backwards compatibility -->
<a id="schemaparameter"></a>
<a id="schema_Parameter"></a>
<a id="tocSparameter"></a>
<a id="tocsparameter"></a>

```json
{
  "ParameterName": {},
  "ParameterValue": {},
  "Description": {},
  "Source": {},
  "ApplyType": {},
  "DataType": {},
  "AllowedValues": {},
  "IsModifiable": {},
  "MinimumEngineVersion": {},
  "ApplyMethod": {}
}
```

Detailed information about an individual parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|false|none|none|
|ParameterValue|object|false|none|none|
|Description|object|false|none|none|
|Source|object|false|none|none|
|ApplyType|object|false|none|none|
|DataType|object|false|none|none|
|AllowedValues|object|false|none|none|
|IsModifiable|object|false|none|none|
|MinimumEngineVersion|object|false|none|none|
|ApplyMethod|object|false|none|none|

<h2 id="tocS_ModifyDBClusterSnapshotAttributeResult">ModifyDBClusterSnapshotAttributeResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbclustersnapshotattributeresult"></a>
<a id="schema_ModifyDBClusterSnapshotAttributeResult"></a>
<a id="tocSmodifydbclustersnapshotattributeresult"></a>
<a id="tocsmodifydbclustersnapshotattributeresult"></a>

```json
{
  "DBClusterSnapshotAttributesResult": {
    "DBClusterSnapshotIdentifier": {},
    "DBClusterSnapshotAttributes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotAttributesResult|[DBClusterSnapshotAttributesResult](#schemadbclustersnapshotattributesresult)|false|none|Detailed information about the attributes that are associated with a cluster snapshot.|

<h2 id="tocS_SharedSnapshotQuotaExceededFault">SharedSnapshotQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemasharedsnapshotquotaexceededfault"></a>
<a id="schema_SharedSnapshotQuotaExceededFault"></a>
<a id="tocSsharedsnapshotquotaexceededfault"></a>
<a id="tocssharedsnapshotquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_ModifyDBInstanceResult">ModifyDBInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbinstanceresult"></a>
<a id="schema_ModifyDBInstanceResult"></a>
<a id="tocSmodifydbinstanceresult"></a>
<a id="tocsmodifydbinstanceresult"></a>

```json
{
  "DBInstance": {
    "DBInstanceIdentifier": {},
    "DBInstanceClass": {},
    "Engine": {},
    "DBInstanceStatus": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "DBSubnetGroup": {
      "DBSubnetGroupName": {},
      "DBSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "DBSubnetGroupArn": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "DBInstanceClass": {},
      "AllocatedStorage": {},
      "MasterUserPassword": {},
      "Port": {},
      "BackupRetentionPeriod": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "LicenseModel": {},
      "Iops": {},
      "DBInstanceIdentifier": {},
      "StorageType": {},
      "CACertificateIdentifier": {},
      "DBSubnetGroupName": {},
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      }
    },
    "LatestRestorableTime": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "CopyTagsToSnapshot": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "EnabledCloudwatchLogsExports": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|Detailed information about an instance. |

<h2 id="tocS_DBUpgradeDependencyFailureFault">DBUpgradeDependencyFailureFault</h2>
<!-- backwards compatibility -->
<a id="schemadbupgradedependencyfailurefault"></a>
<a id="schema_DBUpgradeDependencyFailureFault"></a>
<a id="tocSdbupgradedependencyfailurefault"></a>
<a id="tocsdbupgradedependencyfailurefault"></a>

```json
null
```

<h2 id="tocS_ModifyDBSubnetGroupResult">ModifyDBSubnetGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbsubnetgroupresult"></a>
<a id="schema_ModifyDBSubnetGroupResult"></a>
<a id="tocSmodifydbsubnetgroupresult"></a>
<a id="tocsmodifydbsubnetgroupresult"></a>

```json
{
  "DBSubnetGroup": {
    "DBSubnetGroupName": {},
    "DBSubnetGroupDescription": {},
    "VpcId": {},
    "SubnetGroupStatus": {},
    "Subnets": {},
    "DBSubnetGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSubnetGroup|[DBSubnetGroup](#schemadbsubnetgroup)|false|none|Detailed information about a subnet group. |

<h2 id="tocS_SubnetAlreadyInUse">SubnetAlreadyInUse</h2>
<!-- backwards compatibility -->
<a id="schemasubnetalreadyinuse"></a>
<a id="schema_SubnetAlreadyInUse"></a>
<a id="tocSsubnetalreadyinuse"></a>
<a id="tocssubnetalreadyinuse"></a>

```json
null
```

<h2 id="tocS_ModifyEventSubscriptionResult">ModifyEventSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyeventsubscriptionresult"></a>
<a id="schema_ModifyEventSubscriptionResult"></a>
<a id="tocSmodifyeventsubscriptionresult"></a>
<a id="tocsmodifyeventsubscriptionresult"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {},
    "EventSubscriptionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Detailed information about an event to which you have subscribed.|

<h2 id="tocS_ModifyGlobalClusterResult">ModifyGlobalClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyglobalclusterresult"></a>
<a id="schema_ModifyGlobalClusterResult"></a>
<a id="tocSmodifyglobalclusterresult"></a>
<a id="tocsmodifyglobalclusterresult"></a>

```json
{
  "GlobalCluster": {
    "GlobalClusterIdentifier": {},
    "GlobalClusterResourceId": {},
    "GlobalClusterArn": {},
    "Status": {},
    "Engine": {},
    "EngineVersion": {},
    "DatabaseName": {},
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|A data type representing an Amazon DocumentDB global cluster.|

<h2 id="tocS_RebootDBInstanceResult">RebootDBInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemarebootdbinstanceresult"></a>
<a id="schema_RebootDBInstanceResult"></a>
<a id="tocSrebootdbinstanceresult"></a>
<a id="tocsrebootdbinstanceresult"></a>

```json
{
  "DBInstance": {
    "DBInstanceIdentifier": {},
    "DBInstanceClass": {},
    "Engine": {},
    "DBInstanceStatus": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "DBSubnetGroup": {
      "DBSubnetGroupName": {},
      "DBSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "DBSubnetGroupArn": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "DBInstanceClass": {},
      "AllocatedStorage": {},
      "MasterUserPassword": {},
      "Port": {},
      "BackupRetentionPeriod": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "LicenseModel": {},
      "Iops": {},
      "DBInstanceIdentifier": {},
      "StorageType": {},
      "CACertificateIdentifier": {},
      "DBSubnetGroupName": {},
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      }
    },
    "LatestRestorableTime": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "CopyTagsToSnapshot": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "EnabledCloudwatchLogsExports": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|Detailed information about an instance. |

<h2 id="tocS_RemoveFromGlobalClusterResult">RemoveFromGlobalClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemaremovefromglobalclusterresult"></a>
<a id="schema_RemoveFromGlobalClusterResult"></a>
<a id="tocSremovefromglobalclusterresult"></a>
<a id="tocsremovefromglobalclusterresult"></a>

```json
{
  "GlobalCluster": {
    "GlobalClusterIdentifier": {},
    "GlobalClusterResourceId": {},
    "GlobalClusterArn": {},
    "Status": {},
    "Engine": {},
    "EngineVersion": {},
    "DatabaseName": {},
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|A data type representing an Amazon DocumentDB global cluster.|

<h2 id="tocS_RemoveSourceIdentifierFromSubscriptionResult">RemoveSourceIdentifierFromSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemaremovesourceidentifierfromsubscriptionresult"></a>
<a id="schema_RemoveSourceIdentifierFromSubscriptionResult"></a>
<a id="tocSremovesourceidentifierfromsubscriptionresult"></a>
<a id="tocsremovesourceidentifierfromsubscriptionresult"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {},
    "EventSubscriptionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Detailed information about an event to which you have subscribed.|

<h2 id="tocS_RestoreDBClusterFromSnapshotResult">RestoreDBClusterFromSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemarestoredbclusterfromsnapshotresult"></a>
<a id="schema_RestoreDBClusterFromSnapshotResult"></a>
<a id="tocSrestoredbclusterfromsnapshotresult"></a>
<a id="tocsrestoredbclusterfromsnapshotresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_InsufficientDBClusterCapacityFault">InsufficientDBClusterCapacityFault</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientdbclustercapacityfault"></a>
<a id="schema_InsufficientDBClusterCapacityFault"></a>
<a id="tocSinsufficientdbclustercapacityfault"></a>
<a id="tocsinsufficientdbclustercapacityfault"></a>

```json
null
```

<h2 id="tocS_InvalidDBSnapshotStateFault">InvalidDBSnapshotStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbsnapshotstatefault"></a>
<a id="schema_InvalidDBSnapshotStateFault"></a>
<a id="tocSinvaliddbsnapshotstatefault"></a>
<a id="tocsinvaliddbsnapshotstatefault"></a>

```json
null
```

<h2 id="tocS_InvalidRestoreFault">InvalidRestoreFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrestorefault"></a>
<a id="schema_InvalidRestoreFault"></a>
<a id="tocSinvalidrestorefault"></a>
<a id="tocsinvalidrestorefault"></a>

```json
null
```

<h2 id="tocS_RestoreDBClusterToPointInTimeResult">RestoreDBClusterToPointInTimeResult</h2>
<!-- backwards compatibility -->
<a id="schemarestoredbclustertopointintimeresult"></a>
<a id="schema_RestoreDBClusterToPointInTimeResult"></a>
<a id="tocSrestoredbclustertopointintimeresult"></a>
<a id="tocsrestoredbclustertopointintimeresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_StartDBClusterResult">StartDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemastartdbclusterresult"></a>
<a id="schema_StartDBClusterResult"></a>
<a id="tocSstartdbclusterresult"></a>
<a id="tocsstartdbclusterresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_StopDBClusterResult">StopDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemastopdbclusterresult"></a>
<a id="schema_StopDBClusterResult"></a>
<a id="tocSstopdbclusterresult"></a>
<a id="tocsstopdbclusterresult"></a>

```json
{
  "DBCluster": {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|Detailed information about a cluster. |

<h2 id="tocS_AddSourceIdentifierToSubscriptionMessage">AddSourceIdentifierToSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaaddsourceidentifiertosubscriptionmessage"></a>
<a id="schema_AddSourceIdentifierToSubscriptionMessage"></a>
<a id="tocSaddsourceidentifiertosubscriptionmessage"></a>
<a id="tocsaddsourceidentifiertosubscriptionmessage"></a>

```json
{
  "SubscriptionName": {},
  "SourceIdentifier": {}
}
```

Represents the input to <a>AddSourceIdentifierToSubscription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|
|SourceIdentifier|object|true|none|none|

<h2 id="tocS_EventSubscription">EventSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscription"></a>
<a id="schema_EventSubscription"></a>
<a id="tocSeventsubscription"></a>
<a id="tocseventsubscription"></a>

```json
{
  "CustomerAwsId": {},
  "CustSubscriptionId": {},
  "SnsTopicArn": {},
  "Status": {},
  "SubscriptionCreationTime": {},
  "SourceType": {},
  "SourceIdsList": {},
  "EventCategoriesList": {},
  "Enabled": {},
  "EventSubscriptionArn": {}
}
```

Detailed information about an event to which you have subscribed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerAwsId|object|false|none|none|
|CustSubscriptionId|object|false|none|none|
|SnsTopicArn|object|false|none|none|
|Status|object|false|none|none|
|SubscriptionCreationTime|object|false|none|none|
|SourceType|object|false|none|none|
|SourceIdsList|object|false|none|none|
|EventCategoriesList|object|false|none|none|
|Enabled|object|false|none|none|
|EventSubscriptionArn|object|false|none|none|

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

<h2 id="tocS_AddTagsToResourceMessage">AddTagsToResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourcemessage"></a>
<a id="schema_AddTagsToResourceMessage"></a>
<a id="tocSaddtagstoresourcemessage"></a>
<a id="tocsaddtagstoresourcemessage"></a>

```json
{
  "ResourceName": {},
  "Tags": {}
}
```

Represents the input to <a>AddTagsToResource</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_ApplyMethod">ApplyMethod</h2>
<!-- backwards compatibility -->
<a id="schemaapplymethod"></a>
<a id="schema_ApplyMethod"></a>
<a id="tocSapplymethod"></a>
<a id="tocsapplymethod"></a>

```json
"immediate"
```

<h2 id="tocS_ApplyPendingMaintenanceActionMessage">ApplyPendingMaintenanceActionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplypendingmaintenanceactionmessage"></a>
<a id="schema_ApplyPendingMaintenanceActionMessage"></a>
<a id="tocSapplypendingmaintenanceactionmessage"></a>
<a id="tocsapplypendingmaintenanceactionmessage"></a>

```json
{
  "ResourceIdentifier": {},
  "ApplyAction": {},
  "OptInType": {}
}
```

Represents the input to <a>ApplyPendingMaintenanceAction</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifier|object|true|none|none|
|ApplyAction|object|true|none|none|
|OptInType|object|true|none|none|

<h2 id="tocS_ResourcePendingMaintenanceActions">ResourcePendingMaintenanceActions</h2>
<!-- backwards compatibility -->
<a id="schemaresourcependingmaintenanceactions"></a>
<a id="schema_ResourcePendingMaintenanceActions"></a>
<a id="tocSresourcependingmaintenanceactions"></a>
<a id="tocsresourcependingmaintenanceactions"></a>

```json
{
  "ResourceIdentifier": {},
  "PendingMaintenanceActionDetails": {}
}
```

Represents the output of <a>ApplyPendingMaintenanceAction</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifier|object|false|none|none|
|PendingMaintenanceActionDetails|object|false|none|none|

<h2 id="tocS_AttributeValueList">AttributeValueList</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluelist"></a>
<a id="schema_AttributeValueList"></a>
<a id="tocSattributevaluelist"></a>
<a id="tocsattributevaluelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
{
  "Name": {}
}
```

Information about an Availability Zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_AvailabilityZoneList">AvailabilityZoneList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonelist"></a>
<a id="schema_AvailabilityZoneList"></a>
<a id="tocSavailabilityzonelist"></a>
<a id="tocsavailabilityzonelist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_AvailabilityZones">AvailabilityZones</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzones"></a>
<a id="schema_AvailabilityZones"></a>
<a id="tocSavailabilityzones"></a>
<a id="tocsavailabilityzones"></a>

```json
[
  {}
]
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

<h2 id="tocS_BooleanOptional">BooleanOptional</h2>
<!-- backwards compatibility -->
<a id="schemabooleanoptional"></a>
<a id="schema_BooleanOptional"></a>
<a id="tocSbooleanoptional"></a>
<a id="tocsbooleanoptional"></a>

```json
true
```

<h2 id="tocS_TStamp">TStamp</h2>
<!-- backwards compatibility -->
<a id="schematstamp"></a>
<a id="schema_TStamp"></a>
<a id="tocStstamp"></a>
<a id="tocststamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "CertificateIdentifier": {},
  "CertificateType": {},
  "Thumbprint": {},
  "ValidFrom": {},
  "ValidTill": {},
  "CertificateArn": {}
}
```

A certificate authority (CA) certificate for an Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateIdentifier|object|false|none|none|
|CertificateType|object|false|none|none|
|Thumbprint|object|false|none|none|
|ValidFrom|object|false|none|none|
|ValidTill|object|false|none|none|
|CertificateArn|object|false|none|none|

<h2 id="tocS_CertificateList">CertificateList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatelist"></a>
<a id="schema_CertificateList"></a>
<a id="tocScertificatelist"></a>
<a id="tocscertificatelist"></a>

```json
[
  {
    "CertificateIdentifier": {},
    "CertificateType": {},
    "Thumbprint": {},
    "ValidFrom": {},
    "ValidTill": {},
    "CertificateArn": {}
  }
]
```

<h2 id="tocS_CloudwatchLogsExportConfiguration">CloudwatchLogsExportConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsexportconfiguration"></a>
<a id="schema_CloudwatchLogsExportConfiguration"></a>
<a id="tocScloudwatchlogsexportconfiguration"></a>
<a id="tocscloudwatchlogsexportconfiguration"></a>

```json
{
  "EnableLogTypes": {},
  "DisableLogTypes": {}
}
```

<p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableLogTypes|object|false|none|none|
|DisableLogTypes|object|false|none|none|

<h2 id="tocS_CopyDBClusterParameterGroupMessage">CopyDBClusterParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacopydbclusterparametergroupmessage"></a>
<a id="schema_CopyDBClusterParameterGroupMessage"></a>
<a id="tocScopydbclusterparametergroupmessage"></a>
<a id="tocscopydbclusterparametergroupmessage"></a>

```json
{
  "SourceDBClusterParameterGroupIdentifier": {},
  "TargetDBClusterParameterGroupIdentifier": {},
  "TargetDBClusterParameterGroupDescription": {},
  "Tags": {}
}
```

Represents the input to <a>CopyDBClusterParameterGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceDBClusterParameterGroupIdentifier|object|true|none|none|
|TargetDBClusterParameterGroupIdentifier|object|true|none|none|
|TargetDBClusterParameterGroupDescription|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DBClusterParameterGroup">DBClusterParameterGroup</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterparametergroup"></a>
<a id="schema_DBClusterParameterGroup"></a>
<a id="tocSdbclusterparametergroup"></a>
<a id="tocsdbclusterparametergroup"></a>

```json
{
  "DBClusterParameterGroupName": {},
  "DBParameterGroupFamily": {},
  "Description": {},
  "DBClusterParameterGroupArn": {}
}
```

Detailed information about a cluster parameter group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|false|none|none|
|DBParameterGroupFamily|object|false|none|none|
|Description|object|false|none|none|
|DBClusterParameterGroupArn|object|false|none|none|

<h2 id="tocS_CopyDBClusterSnapshotMessage">CopyDBClusterSnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemacopydbclustersnapshotmessage"></a>
<a id="schema_CopyDBClusterSnapshotMessage"></a>
<a id="tocScopydbclustersnapshotmessage"></a>
<a id="tocscopydbclustersnapshotmessage"></a>

```json
{
  "SourceDBClusterSnapshotIdentifier": {},
  "TargetDBClusterSnapshotIdentifier": {},
  "KmsKeyId": {},
  "PreSignedUrl": {},
  "CopyTags": {},
  "Tags": {}
}
```

Represents the input to <a>CopyDBClusterSnapshot</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceDBClusterSnapshotIdentifier|object|true|none|none|
|TargetDBClusterSnapshotIdentifier|object|true|none|none|
|KmsKeyId|object|false|none|none|
|PreSignedUrl|object|false|none|none|
|CopyTags|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DBClusterSnapshot">DBClusterSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshot"></a>
<a id="schema_DBClusterSnapshot"></a>
<a id="tocSdbclustersnapshot"></a>
<a id="tocsdbclustersnapshot"></a>

```json
{
  "AvailabilityZones": {},
  "DBClusterSnapshotIdentifier": {},
  "DBClusterIdentifier": {},
  "SnapshotCreateTime": {},
  "Engine": {},
  "Status": {},
  "Port": {},
  "VpcId": {},
  "ClusterCreateTime": {},
  "MasterUsername": {},
  "EngineVersion": {},
  "SnapshotType": {},
  "PercentProgress": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "DBClusterSnapshotArn": {},
  "SourceDBClusterSnapshotArn": {}
}
```

Detailed information about a cluster snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|DBClusterSnapshotIdentifier|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|SnapshotCreateTime|object|false|none|none|
|Engine|object|false|none|none|
|Status|object|false|none|none|
|Port|object|false|none|none|
|VpcId|object|false|none|none|
|ClusterCreateTime|object|false|none|none|
|MasterUsername|object|false|none|none|
|EngineVersion|object|false|none|none|
|SnapshotType|object|false|none|none|
|PercentProgress|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|DBClusterSnapshotArn|object|false|none|none|
|SourceDBClusterSnapshotArn|object|false|none|none|

<h2 id="tocS_IntegerOptional">IntegerOptional</h2>
<!-- backwards compatibility -->
<a id="schemaintegeroptional"></a>
<a id="schema_IntegerOptional"></a>
<a id="tocSintegeroptional"></a>
<a id="tocsintegeroptional"></a>

```json
0
```

<h2 id="tocS_VpcSecurityGroupIdList">VpcSecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupidlist"></a>
<a id="schema_VpcSecurityGroupIdList"></a>
<a id="tocSvpcsecuritygroupidlist"></a>
<a id="tocsvpcsecuritygroupidlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_GlobalClusterIdentifier">GlobalClusterIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclusteridentifier"></a>
<a id="schema_GlobalClusterIdentifier"></a>
<a id="tocSglobalclusteridentifier"></a>
<a id="tocsglobalclusteridentifier"></a>

```json
"string"
```

<h2 id="tocS_CreateDBClusterMessage">CreateDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclustermessage"></a>
<a id="schema_CreateDBClusterMessage"></a>
<a id="tocScreatedbclustermessage"></a>
<a id="tocscreatedbclustermessage"></a>

```json
{
  "AvailabilityZones": {},
  "BackupRetentionPeriod": {},
  "DBClusterIdentifier": {},
  "DBClusterParameterGroupName": {},
  "VpcSecurityGroupIds": {},
  "DBSubnetGroupName": {},
  "Engine": {},
  "EngineVersion": {},
  "Port": {},
  "MasterUsername": {},
  "MasterUserPassword": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "Tags": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "PreSignedUrl": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {},
  "GlobalClusterIdentifier": {}
}
```

Represents the input to <a>CreateDBCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|DBClusterIdentifier|object|true|none|none|
|DBClusterParameterGroupName|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|DBSubnetGroupName|object|false|none|none|
|Engine|object|true|none|none|
|EngineVersion|object|false|none|none|
|Port|object|false|none|none|
|MasterUsername|object|false|none|none|
|MasterUserPassword|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|Tags|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|PreSignedUrl|object|false|none|none|
|EnableCloudwatchLogsExports|object|false|none|none|
|DeletionProtection|object|false|none|none|
|GlobalClusterIdentifier|object|false|none|none|

<h2 id="tocS_CreateDBClusterParameterGroupMessage">CreateDBClusterParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclusterparametergroupmessage"></a>
<a id="schema_CreateDBClusterParameterGroupMessage"></a>
<a id="tocScreatedbclusterparametergroupmessage"></a>
<a id="tocscreatedbclusterparametergroupmessage"></a>

```json
{
  "DBClusterParameterGroupName": {},
  "DBParameterGroupFamily": {},
  "Description": {},
  "Tags": {}
}
```

Represents the input of <a>CreateDBClusterParameterGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|true|none|none|
|DBParameterGroupFamily|object|true|none|none|
|Description|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DBCluster">DBCluster</h2>
<!-- backwards compatibility -->
<a id="schemadbcluster"></a>
<a id="schema_DBCluster"></a>
<a id="tocSdbcluster"></a>
<a id="tocsdbcluster"></a>

```json
{
  "AvailabilityZones": {},
  "BackupRetentionPeriod": {},
  "DBClusterIdentifier": {},
  "DBClusterParameterGroup": {},
  "DBSubnetGroup": {},
  "Status": {},
  "PercentProgress": {},
  "EarliestRestorableTime": {},
  "Endpoint": {},
  "ReaderEndpoint": {},
  "MultiAZ": {},
  "Engine": {},
  "EngineVersion": {},
  "LatestRestorableTime": {},
  "Port": {},
  "MasterUsername": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "ReplicationSourceIdentifier": {},
  "ReadReplicaIdentifiers": {},
  "DBClusterMembers": {},
  "VpcSecurityGroups": {},
  "HostedZoneId": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "DbClusterResourceId": {},
  "DBClusterArn": {},
  "AssociatedRoles": {},
  "CloneGroupId": {},
  "ClusterCreateTime": {},
  "EnabledCloudwatchLogsExports": {},
  "DeletionProtection": {}
}
```

Detailed information about a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|DBClusterParameterGroup|object|false|none|none|
|DBSubnetGroup|object|false|none|none|
|Status|object|false|none|none|
|PercentProgress|object|false|none|none|
|EarliestRestorableTime|object|false|none|none|
|Endpoint|object|false|none|none|
|ReaderEndpoint|object|false|none|none|
|MultiAZ|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|LatestRestorableTime|object|false|none|none|
|Port|object|false|none|none|
|MasterUsername|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|ReplicationSourceIdentifier|object|false|none|none|
|ReadReplicaIdentifiers|object|false|none|none|
|DBClusterMembers|object|false|none|none|
|VpcSecurityGroups|object|false|none|none|
|HostedZoneId|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|DbClusterResourceId|object|false|none|none|
|DBClusterArn|object|false|none|none|
|AssociatedRoles|object|false|none|none|
|CloneGroupId|object|false|none|none|
|ClusterCreateTime|object|false|none|none|
|EnabledCloudwatchLogsExports|object|false|none|none|
|DeletionProtection|object|false|none|none|

<h2 id="tocS_CreateDBClusterSnapshotMessage">CreateDBClusterSnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclustersnapshotmessage"></a>
<a id="schema_CreateDBClusterSnapshotMessage"></a>
<a id="tocScreatedbclustersnapshotmessage"></a>
<a id="tocscreatedbclustersnapshotmessage"></a>

```json
{
  "DBClusterSnapshotIdentifier": {},
  "DBClusterIdentifier": {},
  "Tags": {}
}
```

Represents the input of <a>CreateDBClusterSnapshot</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|object|true|none|none|
|DBClusterIdentifier|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateDBInstanceMessage">CreateDBInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbinstancemessage"></a>
<a id="schema_CreateDBInstanceMessage"></a>
<a id="tocScreatedbinstancemessage"></a>
<a id="tocscreatedbinstancemessage"></a>

```json
{
  "DBInstanceIdentifier": {},
  "DBInstanceClass": {},
  "Engine": {},
  "AvailabilityZone": {},
  "PreferredMaintenanceWindow": {},
  "AutoMinorVersionUpgrade": {},
  "Tags": {},
  "DBClusterIdentifier": {},
  "CopyTagsToSnapshot": {},
  "PromotionTier": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {}
}
```

Represents the input to <a>CreateDBInstance</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|true|none|none|
|DBInstanceClass|object|true|none|none|
|Engine|object|true|none|none|
|AvailabilityZone|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|Tags|object|false|none|none|
|DBClusterIdentifier|object|true|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|PromotionTier|object|false|none|none|
|EnablePerformanceInsights|object|false|none|none|
|PerformanceInsightsKMSKeyId|object|false|none|none|

<h2 id="tocS_DBInstance">DBInstance</h2>
<!-- backwards compatibility -->
<a id="schemadbinstance"></a>
<a id="schema_DBInstance"></a>
<a id="tocSdbinstance"></a>
<a id="tocsdbinstance"></a>

```json
{
  "DBInstanceIdentifier": {},
  "DBInstanceClass": {},
  "Engine": {},
  "DBInstanceStatus": {},
  "Endpoint": {
    "Address": {},
    "Port": {},
    "HostedZoneId": {}
  },
  "InstanceCreateTime": {},
  "PreferredBackupWindow": {},
  "BackupRetentionPeriod": {},
  "VpcSecurityGroups": {},
  "AvailabilityZone": {},
  "DBSubnetGroup": {
    "DBSubnetGroupName": {},
    "DBSubnetGroupDescription": {},
    "VpcId": {},
    "SubnetGroupStatus": {},
    "Subnets": {},
    "DBSubnetGroupArn": {}
  },
  "PreferredMaintenanceWindow": {},
  "PendingModifiedValues": {
    "DBInstanceClass": {},
    "AllocatedStorage": {},
    "MasterUserPassword": {},
    "Port": {},
    "BackupRetentionPeriod": {},
    "MultiAZ": {},
    "EngineVersion": {},
    "LicenseModel": {},
    "Iops": {},
    "DBInstanceIdentifier": {},
    "StorageType": {},
    "CACertificateIdentifier": {},
    "DBSubnetGroupName": {},
    "PendingCloudwatchLogsExports": {
      "LogTypesToEnable": {},
      "LogTypesToDisable": {}
    }
  },
  "LatestRestorableTime": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "PubliclyAccessible": {},
  "StatusInfos": {},
  "DBClusterIdentifier": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "DbiResourceId": {},
  "CACertificateIdentifier": {},
  "CopyTagsToSnapshot": {},
  "PromotionTier": {},
  "DBInstanceArn": {},
  "EnabledCloudwatchLogsExports": {}
}
```

Detailed information about an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|false|none|none|
|DBInstanceClass|object|false|none|none|
|Engine|object|false|none|none|
|DBInstanceStatus|object|false|none|none|
|Endpoint|object|false|none|none|
|InstanceCreateTime|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|VpcSecurityGroups|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|DBSubnetGroup|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|PendingModifiedValues|object|false|none|none|
|LatestRestorableTime|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|PubliclyAccessible|object|false|none|none|
|StatusInfos|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|DbiResourceId|object|false|none|none|
|CACertificateIdentifier|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|PromotionTier|object|false|none|none|
|DBInstanceArn|object|false|none|none|
|EnabledCloudwatchLogsExports|object|false|none|none|

<h2 id="tocS_SubnetIdentifierList">SubnetIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidentifierlist"></a>
<a id="schema_SubnetIdentifierList"></a>
<a id="tocSsubnetidentifierlist"></a>
<a id="tocssubnetidentifierlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CreateDBSubnetGroupMessage">CreateDBSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbsubnetgroupmessage"></a>
<a id="schema_CreateDBSubnetGroupMessage"></a>
<a id="tocScreatedbsubnetgroupmessage"></a>
<a id="tocscreatedbsubnetgroupmessage"></a>

```json
{
  "DBSubnetGroupName": {},
  "DBSubnetGroupDescription": {},
  "SubnetIds": {},
  "Tags": {}
}
```

Represents the input to <a>CreateDBSubnetGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSubnetGroupName|object|true|none|none|
|DBSubnetGroupDescription|object|true|none|none|
|SubnetIds|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DBSubnetGroup">DBSubnetGroup</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetgroup"></a>
<a id="schema_DBSubnetGroup"></a>
<a id="tocSdbsubnetgroup"></a>
<a id="tocsdbsubnetgroup"></a>

```json
{
  "DBSubnetGroupName": {},
  "DBSubnetGroupDescription": {},
  "VpcId": {},
  "SubnetGroupStatus": {},
  "Subnets": {},
  "DBSubnetGroupArn": {}
}
```

Detailed information about a subnet group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSubnetGroupName|object|false|none|none|
|DBSubnetGroupDescription|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetGroupStatus|object|false|none|none|
|Subnets|object|false|none|none|
|DBSubnetGroupArn|object|false|none|none|

<h2 id="tocS_EventCategoriesList">EventCategoriesList</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategorieslist"></a>
<a id="schema_EventCategoriesList"></a>
<a id="tocSeventcategorieslist"></a>
<a id="tocseventcategorieslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_SourceIdsList">SourceIdsList</h2>
<!-- backwards compatibility -->
<a id="schemasourceidslist"></a>
<a id="schema_SourceIdsList"></a>
<a id="tocSsourceidslist"></a>
<a id="tocssourceidslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CreateEventSubscriptionMessage">CreateEventSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventsubscriptionmessage"></a>
<a id="schema_CreateEventSubscriptionMessage"></a>
<a id="tocScreateeventsubscriptionmessage"></a>
<a id="tocscreateeventsubscriptionmessage"></a>

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "SourceIds": {},
  "Enabled": {},
  "Tags": {}
}
```

Represents the input to <a>CreateEventSubscription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|
|SnsTopicArn|object|true|none|none|
|SourceType|object|false|none|none|
|EventCategories|object|false|none|none|
|SourceIds|object|false|none|none|
|Enabled|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateGlobalClusterMessage">CreateGlobalClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobalclustermessage"></a>
<a id="schema_CreateGlobalClusterMessage"></a>
<a id="tocScreateglobalclustermessage"></a>
<a id="tocscreateglobalclustermessage"></a>

```json
{
  "GlobalClusterIdentifier": {},
  "SourceDBClusterIdentifier": {},
  "Engine": {},
  "EngineVersion": {},
  "DeletionProtection": {},
  "DatabaseName": {},
  "StorageEncrypted": {}
}
```

Represents the input to <a>CreateGlobalCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|
|SourceDBClusterIdentifier|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DeletionProtection|object|false|none|none|
|DatabaseName|object|false|none|none|
|StorageEncrypted|object|false|none|none|

<h2 id="tocS_GlobalCluster">GlobalCluster</h2>
<!-- backwards compatibility -->
<a id="schemaglobalcluster"></a>
<a id="schema_GlobalCluster"></a>
<a id="tocSglobalcluster"></a>
<a id="tocsglobalcluster"></a>

```json
{
  "GlobalClusterIdentifier": {},
  "GlobalClusterResourceId": {},
  "GlobalClusterArn": {},
  "Status": {},
  "Engine": {},
  "EngineVersion": {},
  "DatabaseName": {},
  "StorageEncrypted": {},
  "DeletionProtection": {},
  "GlobalClusterMembers": {}
}
```

A data type representing an Amazon DocumentDB global cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|false|none|none|
|GlobalClusterResourceId|object|false|none|none|
|GlobalClusterArn|object|false|none|none|
|Status|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DatabaseName|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|DeletionProtection|object|false|none|none|
|GlobalClusterMembers|object|false|none|none|

<h2 id="tocS_ReadReplicaIdentifierList">ReadReplicaIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemareadreplicaidentifierlist"></a>
<a id="schema_ReadReplicaIdentifierList"></a>
<a id="tocSreadreplicaidentifierlist"></a>
<a id="tocsreadreplicaidentifierlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_DBClusterMemberList">DBClusterMemberList</h2>
<!-- backwards compatibility -->
<a id="schemadbclustermemberlist"></a>
<a id="schema_DBClusterMemberList"></a>
<a id="tocSdbclustermemberlist"></a>
<a id="tocsdbclustermemberlist"></a>

```json
[
  {
    "DBInstanceIdentifier": {},
    "IsClusterWriter": {},
    "DBClusterParameterGroupStatus": {},
    "PromotionTier": {}
  }
]
```

<h2 id="tocS_VpcSecurityGroupMembershipList">VpcSecurityGroupMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupmembershiplist"></a>
<a id="schema_VpcSecurityGroupMembershipList"></a>
<a id="tocSvpcsecuritygroupmembershiplist"></a>
<a id="tocsvpcsecuritygroupmembershiplist"></a>

```json
[
  {
    "VpcSecurityGroupId": {},
    "Status": {}
  }
]
```

<h2 id="tocS_DBClusterRoles">DBClusterRoles</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterroles"></a>
<a id="schema_DBClusterRoles"></a>
<a id="tocSdbclusterroles"></a>
<a id="tocsdbclusterroles"></a>

```json
[
  {
    "RoleArn": {},
    "Status": {}
  }
]
```

<h2 id="tocS_DBClusterList">DBClusterList</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterlist"></a>
<a id="schema_DBClusterList"></a>
<a id="tocSdbclusterlist"></a>
<a id="tocsdbclusterlist"></a>

```json
[
  {
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "DBClusterIdentifier": {},
    "DBClusterParameterGroup": {},
    "DBSubnetGroup": {},
    "Status": {},
    "PercentProgress": {},
    "EarliestRestorableTime": {},
    "Endpoint": {},
    "ReaderEndpoint": {},
    "MultiAZ": {},
    "Engine": {},
    "EngineVersion": {},
    "LatestRestorableTime": {},
    "Port": {},
    "MasterUsername": {},
    "PreferredBackupWindow": {},
    "PreferredMaintenanceWindow": {},
    "ReplicationSourceIdentifier": {},
    "ReadReplicaIdentifiers": {},
    "DBClusterMembers": {},
    "VpcSecurityGroups": {},
    "HostedZoneId": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbClusterResourceId": {},
    "DBClusterArn": {},
    "AssociatedRoles": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
]
```

<h2 id="tocS_DBClusterMember">DBClusterMember</h2>
<!-- backwards compatibility -->
<a id="schemadbclustermember"></a>
<a id="schema_DBClusterMember"></a>
<a id="tocSdbclustermember"></a>
<a id="tocsdbclustermember"></a>

```json
{
  "DBInstanceIdentifier": {},
  "IsClusterWriter": {},
  "DBClusterParameterGroupStatus": {},
  "PromotionTier": {}
}
```

Contains information about an instance that is part of a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|false|none|none|
|IsClusterWriter|object|false|none|none|
|DBClusterParameterGroupStatus|object|false|none|none|
|PromotionTier|object|false|none|none|

<h2 id="tocS_ParametersList">ParametersList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterslist"></a>
<a id="schema_ParametersList"></a>
<a id="tocSparameterslist"></a>
<a id="tocsparameterslist"></a>

```json
[
  {
    "ParameterName": {},
    "ParameterValue": {},
    "Description": {},
    "Source": {},
    "ApplyType": {},
    "DataType": {},
    "AllowedValues": {},
    "IsModifiable": {},
    "MinimumEngineVersion": {},
    "ApplyMethod": {}
  }
]
```

<h2 id="tocS_DBClusterParameterGroupList">DBClusterParameterGroupList</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterparametergrouplist"></a>
<a id="schema_DBClusterParameterGroupList"></a>
<a id="tocSdbclusterparametergrouplist"></a>
<a id="tocsdbclusterparametergrouplist"></a>

```json
[
  {
    "DBClusterParameterGroupName": {},
    "DBParameterGroupFamily": {},
    "Description": {},
    "DBClusterParameterGroupArn": {}
  }
]
```

<h2 id="tocS_DBClusterRole">DBClusterRole</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterrole"></a>
<a id="schema_DBClusterRole"></a>
<a id="tocSdbclusterrole"></a>
<a id="tocsdbclusterrole"></a>

```json
{
  "RoleArn": {},
  "Status": {}
}
```

Describes an Identity and Access Management (IAM) role that is associated with a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_DBClusterSnapshotAttribute">DBClusterSnapshotAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshotattribute"></a>
<a id="schema_DBClusterSnapshotAttribute"></a>
<a id="tocSdbclustersnapshotattribute"></a>
<a id="tocsdbclustersnapshotattribute"></a>

```json
{
  "AttributeName": {},
  "AttributeValues": {}
}
```

<p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|AttributeValues|object|false|none|none|

<h2 id="tocS_DBClusterSnapshotAttributeList">DBClusterSnapshotAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshotattributelist"></a>
<a id="schema_DBClusterSnapshotAttributeList"></a>
<a id="tocSdbclustersnapshotattributelist"></a>
<a id="tocsdbclustersnapshotattributelist"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeValues": {}
  }
]
```

<h2 id="tocS_DBClusterSnapshotAttributesResult">DBClusterSnapshotAttributesResult</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshotattributesresult"></a>
<a id="schema_DBClusterSnapshotAttributesResult"></a>
<a id="tocSdbclustersnapshotattributesresult"></a>
<a id="tocsdbclustersnapshotattributesresult"></a>

```json
{
  "DBClusterSnapshotIdentifier": {},
  "DBClusterSnapshotAttributes": {}
}
```

Detailed information about the attributes that are associated with a cluster snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|object|false|none|none|
|DBClusterSnapshotAttributes|object|false|none|none|

<h2 id="tocS_DBClusterSnapshotList">DBClusterSnapshotList</h2>
<!-- backwards compatibility -->
<a id="schemadbclustersnapshotlist"></a>
<a id="schema_DBClusterSnapshotList"></a>
<a id="tocSdbclustersnapshotlist"></a>
<a id="tocsdbclustersnapshotlist"></a>

```json
[
  {
    "AvailabilityZones": {},
    "DBClusterSnapshotIdentifier": {},
    "DBClusterIdentifier": {},
    "SnapshotCreateTime": {},
    "Engine": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {}
  }
]
```

<h2 id="tocS_ValidUpgradeTargetList">ValidUpgradeTargetList</h2>
<!-- backwards compatibility -->
<a id="schemavalidupgradetargetlist"></a>
<a id="schema_ValidUpgradeTargetList"></a>
<a id="tocSvalidupgradetargetlist"></a>
<a id="tocsvalidupgradetargetlist"></a>

```json
[
  {
    "Engine": {},
    "EngineVersion": {},
    "Description": {},
    "AutoUpgrade": {},
    "IsMajorVersionUpgrade": {}
  }
]
```

<h2 id="tocS_DBEngineVersion">DBEngineVersion</h2>
<!-- backwards compatibility -->
<a id="schemadbengineversion"></a>
<a id="schema_DBEngineVersion"></a>
<a id="tocSdbengineversion"></a>
<a id="tocsdbengineversion"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "DBParameterGroupFamily": {},
  "DBEngineDescription": {},
  "DBEngineVersionDescription": {},
  "ValidUpgradeTarget": {},
  "ExportableLogTypes": {},
  "SupportsLogExportsToCloudwatchLogs": {}
}
```

 Detailed information about an engine version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DBParameterGroupFamily|object|false|none|none|
|DBEngineDescription|object|false|none|none|
|DBEngineVersionDescription|object|false|none|none|
|ValidUpgradeTarget|object|false|none|none|
|ExportableLogTypes|object|false|none|none|
|SupportsLogExportsToCloudwatchLogs|object|false|none|none|

<h2 id="tocS_DBEngineVersionList">DBEngineVersionList</h2>
<!-- backwards compatibility -->
<a id="schemadbengineversionlist"></a>
<a id="schema_DBEngineVersionList"></a>
<a id="tocSdbengineversionlist"></a>
<a id="tocsdbengineversionlist"></a>

```json
[
  {
    "Engine": {},
    "EngineVersion": {},
    "DBParameterGroupFamily": {},
    "DBEngineDescription": {},
    "DBEngineVersionDescription": {},
    "ValidUpgradeTarget": {},
    "ExportableLogTypes": {},
    "SupportsLogExportsToCloudwatchLogs": {}
  }
]
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "Address": {},
  "Port": {},
  "HostedZoneId": {}
}
```

Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|
|Port|object|false|none|none|
|HostedZoneId|object|false|none|none|

<h2 id="tocS_PendingModifiedValues">PendingModifiedValues</h2>
<!-- backwards compatibility -->
<a id="schemapendingmodifiedvalues"></a>
<a id="schema_PendingModifiedValues"></a>
<a id="tocSpendingmodifiedvalues"></a>
<a id="tocspendingmodifiedvalues"></a>

```json
{
  "DBInstanceClass": {},
  "AllocatedStorage": {},
  "MasterUserPassword": {},
  "Port": {},
  "BackupRetentionPeriod": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "LicenseModel": {},
  "Iops": {},
  "DBInstanceIdentifier": {},
  "StorageType": {},
  "CACertificateIdentifier": {},
  "DBSubnetGroupName": {},
  "PendingCloudwatchLogsExports": {
    "LogTypesToEnable": {},
    "LogTypesToDisable": {}
  }
}
```

 One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceClass|object|false|none|none|
|AllocatedStorage|object|false|none|none|
|MasterUserPassword|object|false|none|none|
|Port|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|LicenseModel|object|false|none|none|
|Iops|object|false|none|none|
|DBInstanceIdentifier|object|false|none|none|
|StorageType|object|false|none|none|
|CACertificateIdentifier|object|false|none|none|
|DBSubnetGroupName|object|false|none|none|
|PendingCloudwatchLogsExports|object|false|none|none|

<h2 id="tocS_DBInstanceStatusInfoList">DBInstanceStatusInfoList</h2>
<!-- backwards compatibility -->
<a id="schemadbinstancestatusinfolist"></a>
<a id="schema_DBInstanceStatusInfoList"></a>
<a id="tocSdbinstancestatusinfolist"></a>
<a id="tocsdbinstancestatusinfolist"></a>

```json
[
  {
    "StatusType": {},
    "Normal": {},
    "Status": {},
    "Message": {}
  }
]
```

<h2 id="tocS_DBInstanceList">DBInstanceList</h2>
<!-- backwards compatibility -->
<a id="schemadbinstancelist"></a>
<a id="schema_DBInstanceList"></a>
<a id="tocSdbinstancelist"></a>
<a id="tocsdbinstancelist"></a>

```json
[
  {
    "DBInstanceIdentifier": {},
    "DBInstanceClass": {},
    "Engine": {},
    "DBInstanceStatus": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "DBSubnetGroup": {
      "DBSubnetGroupName": {},
      "DBSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "DBSubnetGroupArn": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "DBInstanceClass": {},
      "AllocatedStorage": {},
      "MasterUserPassword": {},
      "Port": {},
      "BackupRetentionPeriod": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "LicenseModel": {},
      "Iops": {},
      "DBInstanceIdentifier": {},
      "StorageType": {},
      "CACertificateIdentifier": {},
      "DBSubnetGroupName": {},
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      }
    },
    "LatestRestorableTime": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "CopyTagsToSnapshot": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "EnabledCloudwatchLogsExports": {}
  }
]
```

<h2 id="tocS_DBInstanceStatusInfo">DBInstanceStatusInfo</h2>
<!-- backwards compatibility -->
<a id="schemadbinstancestatusinfo"></a>
<a id="schema_DBInstanceStatusInfo"></a>
<a id="tocSdbinstancestatusinfo"></a>
<a id="tocsdbinstancestatusinfo"></a>

```json
{
  "StatusType": {},
  "Normal": {},
  "Status": {},
  "Message": {}
}
```

Provides a list of status information for an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusType|object|false|none|none|
|Normal|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_SubnetList">SubnetList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetlist"></a>
<a id="schema_SubnetList"></a>
<a id="tocSsubnetlist"></a>
<a id="tocssubnetlist"></a>

```json
[
  {
    "SubnetIdentifier": {},
    "SubnetAvailabilityZone": {
      "Name": {}
    },
    "SubnetStatus": {}
  }
]
```

<h2 id="tocS_DBSubnetGroups">DBSubnetGroups</h2>
<!-- backwards compatibility -->
<a id="schemadbsubnetgroups"></a>
<a id="schema_DBSubnetGroups"></a>
<a id="tocSdbsubnetgroups"></a>
<a id="tocsdbsubnetgroups"></a>

```json
[
  {
    "DBSubnetGroupName": {},
    "DBSubnetGroupDescription": {},
    "VpcId": {},
    "SubnetGroupStatus": {},
    "Subnets": {},
    "DBSubnetGroupArn": {}
  }
]
```

<h2 id="tocS_DeleteDBClusterMessage">DeleteDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbclustermessage"></a>
<a id="schema_DeleteDBClusterMessage"></a>
<a id="tocSdeletedbclustermessage"></a>
<a id="tocsdeletedbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "SkipFinalSnapshot": {},
  "FinalDBSnapshotIdentifier": {}
}
```

Represents the input to <a>DeleteDBCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|
|SkipFinalSnapshot|object|false|none|none|
|FinalDBSnapshotIdentifier|object|false|none|none|

<h2 id="tocS_DeleteDBClusterParameterGroupMessage">DeleteDBClusterParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbclusterparametergroupmessage"></a>
<a id="schema_DeleteDBClusterParameterGroupMessage"></a>
<a id="tocSdeletedbclusterparametergroupmessage"></a>
<a id="tocsdeletedbclusterparametergroupmessage"></a>

```json
{
  "DBClusterParameterGroupName": {}
}
```

Represents the input to <a>DeleteDBClusterParameterGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|true|none|none|

<h2 id="tocS_DeleteDBClusterSnapshotMessage">DeleteDBClusterSnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbclustersnapshotmessage"></a>
<a id="schema_DeleteDBClusterSnapshotMessage"></a>
<a id="tocSdeletedbclustersnapshotmessage"></a>
<a id="tocsdeletedbclustersnapshotmessage"></a>

```json
{
  "DBClusterSnapshotIdentifier": {}
}
```

Represents the input to <a>DeleteDBClusterSnapshot</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|object|true|none|none|

<h2 id="tocS_DeleteDBInstanceMessage">DeleteDBInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbinstancemessage"></a>
<a id="schema_DeleteDBInstanceMessage"></a>
<a id="tocSdeletedbinstancemessage"></a>
<a id="tocsdeletedbinstancemessage"></a>

```json
{
  "DBInstanceIdentifier": {}
}
```

Represents the input to <a>DeleteDBInstance</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|true|none|none|

<h2 id="tocS_DeleteDBSubnetGroupMessage">DeleteDBSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbsubnetgroupmessage"></a>
<a id="schema_DeleteDBSubnetGroupMessage"></a>
<a id="tocSdeletedbsubnetgroupmessage"></a>
<a id="tocsdeletedbsubnetgroupmessage"></a>

```json
{
  "DBSubnetGroupName": {}
}
```

Represents the input to <a>DeleteDBSubnetGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSubnetGroupName|object|true|none|none|

<h2 id="tocS_DeleteEventSubscriptionMessage">DeleteEventSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsubscriptionmessage"></a>
<a id="schema_DeleteEventSubscriptionMessage"></a>
<a id="tocSdeleteeventsubscriptionmessage"></a>
<a id="tocsdeleteeventsubscriptionmessage"></a>

```json
{
  "SubscriptionName": {}
}
```

Represents the input to <a>DeleteEventSubscription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|

<h2 id="tocS_DeleteGlobalClusterMessage">DeleteGlobalClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteglobalclustermessage"></a>
<a id="schema_DeleteGlobalClusterMessage"></a>
<a id="tocSdeleteglobalclustermessage"></a>
<a id="tocsdeleteglobalclustermessage"></a>

```json
{
  "GlobalClusterIdentifier": {}
}
```

Represents the input to <a>DeleteGlobalCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_DescribeCertificatesMessage">DescribeCertificatesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificatesmessage"></a>
<a id="schema_DescribeCertificatesMessage"></a>
<a id="tocSdescribecertificatesmessage"></a>
<a id="tocsdescribecertificatesmessage"></a>

```json
{
  "CertificateIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateIdentifier|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBClusterParameterGroupsMessage">DescribeDBClusterParameterGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbclusterparametergroupsmessage"></a>
<a id="schema_DescribeDBClusterParameterGroupsMessage"></a>
<a id="tocSdescribedbclusterparametergroupsmessage"></a>
<a id="tocsdescribedbclusterparametergroupsmessage"></a>

```json
{
  "DBClusterParameterGroupName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeDBClusterParameterGroups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBClusterParametersMessage">DescribeDBClusterParametersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbclusterparametersmessage"></a>
<a id="schema_DescribeDBClusterParametersMessage"></a>
<a id="tocSdescribedbclusterparametersmessage"></a>
<a id="tocsdescribedbclusterparametersmessage"></a>

```json
{
  "DBClusterParameterGroupName": {},
  "Source": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeDBClusterParameters</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|true|none|none|
|Source|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBClusterSnapshotAttributesMessage">DescribeDBClusterSnapshotAttributesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbclustersnapshotattributesmessage"></a>
<a id="schema_DescribeDBClusterSnapshotAttributesMessage"></a>
<a id="tocSdescribedbclustersnapshotattributesmessage"></a>
<a id="tocsdescribedbclustersnapshotattributesmessage"></a>

```json
{
  "DBClusterSnapshotIdentifier": {}
}
```

Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|object|true|none|none|

<h2 id="tocS_DescribeDBClusterSnapshotsMessage">DescribeDBClusterSnapshotsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbclustersnapshotsmessage"></a>
<a id="schema_DescribeDBClusterSnapshotsMessage"></a>
<a id="tocSdescribedbclustersnapshotsmessage"></a>
<a id="tocsdescribedbclustersnapshotsmessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "DBClusterSnapshotIdentifier": {},
  "SnapshotType": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {},
  "IncludeShared": {},
  "IncludePublic": {}
}
```

Represents the input to <a>DescribeDBClusterSnapshots</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|false|none|none|
|DBClusterSnapshotIdentifier|object|false|none|none|
|SnapshotType|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|
|IncludeShared|object|false|none|none|
|IncludePublic|object|false|none|none|

<h2 id="tocS_DescribeDBClustersMessage">DescribeDBClustersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbclustersmessage"></a>
<a id="schema_DescribeDBClustersMessage"></a>
<a id="tocSdescribedbclustersmessage"></a>
<a id="tocsdescribedbclustersmessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeDBClusters</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBEngineVersionsMessage">DescribeDBEngineVersionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbengineversionsmessage"></a>
<a id="schema_DescribeDBEngineVersionsMessage"></a>
<a id="tocSdescribedbengineversionsmessage"></a>
<a id="tocsdescribedbengineversionsmessage"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "DBParameterGroupFamily": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {},
  "DefaultOnly": {},
  "ListSupportedCharacterSets": {},
  "ListSupportedTimezones": {}
}
```

Represents the input to <a>DescribeDBEngineVersions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DBParameterGroupFamily|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|
|DefaultOnly|object|false|none|none|
|ListSupportedCharacterSets|object|false|none|none|
|ListSupportedTimezones|object|false|none|none|

<h2 id="tocS_DescribeDBInstancesMessage">DescribeDBInstancesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbinstancesmessage"></a>
<a id="schema_DescribeDBInstancesMessage"></a>
<a id="tocSdescribedbinstancesmessage"></a>
<a id="tocsdescribedbinstancesmessage"></a>

```json
{
  "DBInstanceIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeDBInstances</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBSubnetGroupsMessage">DescribeDBSubnetGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbsubnetgroupsmessage"></a>
<a id="schema_DescribeDBSubnetGroupsMessage"></a>
<a id="tocSdescribedbsubnetgroupsmessage"></a>
<a id="tocsdescribedbsubnetgroupsmessage"></a>

```json
{
  "DBSubnetGroupName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeDBSubnetGroups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSubnetGroupName|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeEngineDefaultClusterParametersMessage">DescribeEngineDefaultClusterParametersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenginedefaultclusterparametersmessage"></a>
<a id="schema_DescribeEngineDefaultClusterParametersMessage"></a>
<a id="tocSdescribeenginedefaultclusterparametersmessage"></a>
<a id="tocsdescribeenginedefaultclusterparametersmessage"></a>

```json
{
  "DBParameterGroupFamily": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupFamily|object|true|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_EngineDefaults">EngineDefaults</h2>
<!-- backwards compatibility -->
<a id="schemaenginedefaults"></a>
<a id="schema_EngineDefaults"></a>
<a id="tocSenginedefaults"></a>
<a id="tocsenginedefaults"></a>

```json
{
  "DBParameterGroupFamily": {},
  "Marker": {},
  "Parameters": {}
}
```

Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupFamily|object|false|none|none|
|Marker|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_DescribeEventCategoriesMessage">DescribeEventCategoriesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventcategoriesmessage"></a>
<a id="schema_DescribeEventCategoriesMessage"></a>
<a id="tocSdescribeeventcategoriesmessage"></a>
<a id="tocsdescribeeventcategoriesmessage"></a>

```json
{
  "SourceType": {},
  "Filters": {}
}
```

Represents the input to <a>DescribeEventCategories</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_DescribeEventSubscriptionsMessage">DescribeEventSubscriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsubscriptionsmessage"></a>
<a id="schema_DescribeEventSubscriptionsMessage"></a>
<a id="tocSdescribeeventsubscriptionsmessage"></a>
<a id="tocsdescribeeventsubscriptionsmessage"></a>

```json
{
  "SubscriptionName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeEventSubscriptions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"db-instance"
```

<h2 id="tocS_DescribeEventsMessage">DescribeEventsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsmessage"></a>
<a id="schema_DescribeEventsMessage"></a>
<a id="tocSdescribeeventsmessage"></a>
<a id="tocsdescribeeventsmessage"></a>

```json
{
  "SourceIdentifier": {},
  "SourceType": {},
  "StartTime": {},
  "EndTime": {},
  "Duration": {},
  "EventCategories": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeEvents</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIdentifier|object|false|none|none|
|SourceType|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Duration|object|false|none|none|
|EventCategories|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeGlobalClustersMessage">DescribeGlobalClustersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobalclustersmessage"></a>
<a id="schema_DescribeGlobalClustersMessage"></a>
<a id="tocSdescribeglobalclustersmessage"></a>
<a id="tocsdescribeglobalclustersmessage"></a>

```json
{
  "GlobalClusterIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeOrderableDBInstanceOptionsMessage">DescribeOrderableDBInstanceOptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorderabledbinstanceoptionsmessage"></a>
<a id="schema_DescribeOrderableDBInstanceOptionsMessage"></a>
<a id="tocSdescribeorderabledbinstanceoptionsmessage"></a>
<a id="tocsdescribeorderabledbinstanceoptionsmessage"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "DBInstanceClass": {},
  "LicenseModel": {},
  "Vpc": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|true|none|none|
|EngineVersion|object|false|none|none|
|DBInstanceClass|object|false|none|none|
|LicenseModel|object|false|none|none|
|Vpc|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribePendingMaintenanceActionsMessage">DescribePendingMaintenanceActionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribependingmaintenanceactionsmessage"></a>
<a id="schema_DescribePendingMaintenanceActionsMessage"></a>
<a id="tocSdescribependingmaintenanceactionsmessage"></a>
<a id="tocsdescribependingmaintenanceactionsmessage"></a>

```json
{
  "ResourceIdentifier": {},
  "Filters": {},
  "Marker": {},
  "MaxRecords": {}
}
```

Represents the input to <a>DescribePendingMaintenanceActions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifier|object|false|none|none|
|Filters|object|false|none|none|
|Marker|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "SourceIdentifier": {},
  "SourceType": {},
  "Message": {},
  "EventCategories": {},
  "Date": {},
  "SourceArn": {}
}
```

Detailed information about an event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIdentifier|object|false|none|none|
|SourceType|object|false|none|none|
|Message|object|false|none|none|
|EventCategories|object|false|none|none|
|Date|object|false|none|none|
|SourceArn|object|false|none|none|

<h2 id="tocS_EventCategoriesMap">EventCategoriesMap</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategoriesmap"></a>
<a id="schema_EventCategoriesMap"></a>
<a id="tocSeventcategoriesmap"></a>
<a id="tocseventcategoriesmap"></a>

```json
{
  "SourceType": {},
  "EventCategories": {}
}
```

An event source type, accompanied by one or more event category names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|false|none|none|
|EventCategories|object|false|none|none|

<h2 id="tocS_EventCategoriesMapList">EventCategoriesMapList</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategoriesmaplist"></a>
<a id="schema_EventCategoriesMapList"></a>
<a id="tocSeventcategoriesmaplist"></a>
<a id="tocseventcategoriesmaplist"></a>

```json
[
  {
    "SourceType": {},
    "EventCategories": {}
  }
]
```

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
[
  {
    "SourceIdentifier": {},
    "SourceType": {},
    "Message": {},
    "EventCategories": {},
    "Date": {},
    "SourceArn": {}
  }
]
```

<h2 id="tocS_EventSubscriptionsList">EventSubscriptionsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscriptionslist"></a>
<a id="schema_EventSubscriptionsList"></a>
<a id="tocSeventsubscriptionslist"></a>
<a id="tocseventsubscriptionslist"></a>

```json
[
  {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {},
    "EventSubscriptionArn": {}
  }
]
```

<h2 id="tocS_FailoverDBClusterMessage">FailoverDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemafailoverdbclustermessage"></a>
<a id="schema_FailoverDBClusterMessage"></a>
<a id="tocSfailoverdbclustermessage"></a>
<a id="tocsfailoverdbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "TargetDBInstanceIdentifier": {}
}
```

Represents the input to <a>FailoverDBCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|false|none|none|
|TargetDBInstanceIdentifier|object|false|none|none|

<h2 id="tocS_FilterValueList">FilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluelist"></a>
<a id="schema_FilterValueList"></a>
<a id="tocSfiltervaluelist"></a>
<a id="tocsfiltervaluelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_GlobalClusterMemberList">GlobalClusterMemberList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclustermemberlist"></a>
<a id="schema_GlobalClusterMemberList"></a>
<a id="tocSglobalclustermemberlist"></a>
<a id="tocsglobalclustermemberlist"></a>

```json
[
  {
    "DBClusterArn": {},
    "Readers": {},
    "IsWriter": {}
  }
]
```

<h2 id="tocS_GlobalClusterList">GlobalClusterList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclusterlist"></a>
<a id="schema_GlobalClusterList"></a>
<a id="tocSglobalclusterlist"></a>
<a id="tocsglobalclusterlist"></a>

```json
[
  {
    "GlobalClusterIdentifier": {},
    "GlobalClusterResourceId": {},
    "GlobalClusterArn": {},
    "Status": {},
    "Engine": {},
    "EngineVersion": {},
    "DatabaseName": {},
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
]
```

<h2 id="tocS_ReadersArnList">ReadersArnList</h2>
<!-- backwards compatibility -->
<a id="schemareadersarnlist"></a>
<a id="schema_ReadersArnList"></a>
<a id="tocSreadersarnlist"></a>
<a id="tocsreadersarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GlobalClusterMember">GlobalClusterMember</h2>
<!-- backwards compatibility -->
<a id="schemaglobalclustermember"></a>
<a id="schema_GlobalClusterMember"></a>
<a id="tocSglobalclustermember"></a>
<a id="tocsglobalclustermember"></a>

```json
{
  "DBClusterArn": {},
  "Readers": {},
  "IsWriter": {}
}
```

A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterArn|object|false|none|none|
|Readers|object|false|none|none|
|IsWriter|object|false|none|none|

<h2 id="tocS_KeyList">KeyList</h2>
<!-- backwards compatibility -->
<a id="schemakeylist"></a>
<a id="schema_KeyList"></a>
<a id="tocSkeylist"></a>
<a id="tocskeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListTagsForResourceMessage">ListTagsForResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcemessage"></a>
<a id="schema_ListTagsForResourceMessage"></a>
<a id="tocSlisttagsforresourcemessage"></a>
<a id="tocslisttagsforresourcemessage"></a>

```json
{
  "ResourceName": {},
  "Filters": {}
}
```

Represents the input to <a>ListTagsForResource</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ModifyDBClusterMessage">ModifyDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbclustermessage"></a>
<a id="schema_ModifyDBClusterMessage"></a>
<a id="tocSmodifydbclustermessage"></a>
<a id="tocsmodifydbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "NewDBClusterIdentifier": {},
  "ApplyImmediately": {},
  "BackupRetentionPeriod": {},
  "DBClusterParameterGroupName": {},
  "VpcSecurityGroupIds": {},
  "Port": {},
  "MasterUserPassword": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "CloudwatchLogsExportConfiguration": {
    "EnableLogTypes": {},
    "DisableLogTypes": {}
  },
  "EngineVersion": {},
  "DeletionProtection": {}
}
```

Represents the input to <a>ModifyDBCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|
|NewDBClusterIdentifier|object|false|none|none|
|ApplyImmediately|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|DBClusterParameterGroupName|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|Port|object|false|none|none|
|MasterUserPassword|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|CloudwatchLogsExportConfiguration|object|false|none|none|
|EngineVersion|object|false|none|none|
|DeletionProtection|object|false|none|none|

<h2 id="tocS_ModifyDBClusterParameterGroupMessage">ModifyDBClusterParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbclusterparametergroupmessage"></a>
<a id="schema_ModifyDBClusterParameterGroupMessage"></a>
<a id="tocSmodifydbclusterparametergroupmessage"></a>
<a id="tocsmodifydbclusterparametergroupmessage"></a>

```json
{
  "DBClusterParameterGroupName": {},
  "Parameters": {}
}
```

Represents the input to <a>ModifyDBClusterParameterGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|true|none|none|
|Parameters|object|true|none|none|

<h2 id="tocS_ModifyDBClusterSnapshotAttributeMessage">ModifyDBClusterSnapshotAttributeMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbclustersnapshotattributemessage"></a>
<a id="schema_ModifyDBClusterSnapshotAttributeMessage"></a>
<a id="tocSmodifydbclustersnapshotattributemessage"></a>
<a id="tocsmodifydbclustersnapshotattributemessage"></a>

```json
{
  "DBClusterSnapshotIdentifier": {},
  "AttributeName": {},
  "ValuesToAdd": {},
  "ValuesToRemove": {}
}
```

Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|object|true|none|none|
|AttributeName|object|true|none|none|
|ValuesToAdd|object|false|none|none|
|ValuesToRemove|object|false|none|none|

<h2 id="tocS_ModifyDBInstanceMessage">ModifyDBInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbinstancemessage"></a>
<a id="schema_ModifyDBInstanceMessage"></a>
<a id="tocSmodifydbinstancemessage"></a>
<a id="tocsmodifydbinstancemessage"></a>

```json
{
  "DBInstanceIdentifier": {},
  "DBInstanceClass": {},
  "ApplyImmediately": {},
  "PreferredMaintenanceWindow": {},
  "AutoMinorVersionUpgrade": {},
  "NewDBInstanceIdentifier": {},
  "CACertificateIdentifier": {},
  "CopyTagsToSnapshot": {},
  "PromotionTier": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {}
}
```

Represents the input to <a>ModifyDBInstance</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|true|none|none|
|DBInstanceClass|object|false|none|none|
|ApplyImmediately|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|NewDBInstanceIdentifier|object|false|none|none|
|CACertificateIdentifier|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|PromotionTier|object|false|none|none|
|EnablePerformanceInsights|object|false|none|none|
|PerformanceInsightsKMSKeyId|object|false|none|none|

<h2 id="tocS_ModifyDBSubnetGroupMessage">ModifyDBSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbsubnetgroupmessage"></a>
<a id="schema_ModifyDBSubnetGroupMessage"></a>
<a id="tocSmodifydbsubnetgroupmessage"></a>
<a id="tocsmodifydbsubnetgroupmessage"></a>

```json
{
  "DBSubnetGroupName": {},
  "DBSubnetGroupDescription": {},
  "SubnetIds": {}
}
```

Represents the input to <a>ModifyDBSubnetGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSubnetGroupName|object|true|none|none|
|DBSubnetGroupDescription|object|false|none|none|
|SubnetIds|object|true|none|none|

<h2 id="tocS_ModifyEventSubscriptionMessage">ModifyEventSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyeventsubscriptionmessage"></a>
<a id="schema_ModifyEventSubscriptionMessage"></a>
<a id="tocSmodifyeventsubscriptionmessage"></a>
<a id="tocsmodifyeventsubscriptionmessage"></a>

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "Enabled": {}
}
```

Represents the input to <a>ModifyEventSubscription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|
|SnsTopicArn|object|false|none|none|
|SourceType|object|false|none|none|
|EventCategories|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_ModifyGlobalClusterMessage">ModifyGlobalClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyglobalclustermessage"></a>
<a id="schema_ModifyGlobalClusterMessage"></a>
<a id="tocSmodifyglobalclustermessage"></a>
<a id="tocsmodifyglobalclustermessage"></a>

```json
{
  "GlobalClusterIdentifier": {},
  "NewGlobalClusterIdentifier": {},
  "DeletionProtection": {}
}
```

Represents the input to <a>ModifyGlobalCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|
|NewGlobalClusterIdentifier|object|false|none|none|
|DeletionProtection|object|false|none|none|

<h2 id="tocS_OrderableDBInstanceOption">OrderableDBInstanceOption</h2>
<!-- backwards compatibility -->
<a id="schemaorderabledbinstanceoption"></a>
<a id="schema_OrderableDBInstanceOption"></a>
<a id="tocSorderabledbinstanceoption"></a>
<a id="tocsorderabledbinstanceoption"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "DBInstanceClass": {},
  "LicenseModel": {},
  "AvailabilityZones": {},
  "Vpc": {}
}
```

The options that are available for an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DBInstanceClass|object|false|none|none|
|LicenseModel|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_OrderableDBInstanceOptionsList">OrderableDBInstanceOptionsList</h2>
<!-- backwards compatibility -->
<a id="schemaorderabledbinstanceoptionslist"></a>
<a id="schema_OrderableDBInstanceOptionsList"></a>
<a id="tocSorderabledbinstanceoptionslist"></a>
<a id="tocsorderabledbinstanceoptionslist"></a>

```json
[
  {
    "Engine": {},
    "EngineVersion": {},
    "DBInstanceClass": {},
    "LicenseModel": {},
    "AvailabilityZones": {},
    "Vpc": {}
  }
]
```

<h2 id="tocS_PendingCloudwatchLogsExports">PendingCloudwatchLogsExports</h2>
<!-- backwards compatibility -->
<a id="schemapendingcloudwatchlogsexports"></a>
<a id="schema_PendingCloudwatchLogsExports"></a>
<a id="tocSpendingcloudwatchlogsexports"></a>
<a id="tocspendingcloudwatchlogsexports"></a>

```json
{
  "LogTypesToEnable": {},
  "LogTypesToDisable": {}
}
```

A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogTypesToEnable|object|false|none|none|
|LogTypesToDisable|object|false|none|none|

<h2 id="tocS_PendingMaintenanceAction">PendingMaintenanceAction</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceaction"></a>
<a id="schema_PendingMaintenanceAction"></a>
<a id="tocSpendingmaintenanceaction"></a>
<a id="tocspendingmaintenanceaction"></a>

```json
{
  "Action": {},
  "AutoAppliedAfterDate": {},
  "ForcedApplyDate": {},
  "OptInStatus": {},
  "CurrentApplyDate": {},
  "Description": {}
}
```

Provides information about a pending maintenance action for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|AutoAppliedAfterDate|object|false|none|none|
|ForcedApplyDate|object|false|none|none|
|OptInStatus|object|false|none|none|
|CurrentApplyDate|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_PendingMaintenanceActionDetails">PendingMaintenanceActionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceactiondetails"></a>
<a id="schema_PendingMaintenanceActionDetails"></a>
<a id="tocSpendingmaintenanceactiondetails"></a>
<a id="tocspendingmaintenanceactiondetails"></a>

```json
[
  {
    "Action": {},
    "AutoAppliedAfterDate": {},
    "ForcedApplyDate": {},
    "OptInStatus": {},
    "CurrentApplyDate": {},
    "Description": {}
  }
]
```

<h2 id="tocS_PendingMaintenanceActions">PendingMaintenanceActions</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceactions"></a>
<a id="schema_PendingMaintenanceActions"></a>
<a id="tocSpendingmaintenanceactions"></a>
<a id="tocspendingmaintenanceactions"></a>

```json
[
  {
    "ResourceIdentifier": {},
    "PendingMaintenanceActionDetails": {}
  }
]
```

<h2 id="tocS_RebootDBInstanceMessage">RebootDBInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemarebootdbinstancemessage"></a>
<a id="schema_RebootDBInstanceMessage"></a>
<a id="tocSrebootdbinstancemessage"></a>
<a id="tocsrebootdbinstancemessage"></a>

```json
{
  "DBInstanceIdentifier": {},
  "ForceFailover": {}
}
```

Represents the input to <a>RebootDBInstance</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|true|none|none|
|ForceFailover|object|false|none|none|

<h2 id="tocS_RemoveFromGlobalClusterMessage">RemoveFromGlobalClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemaremovefromglobalclustermessage"></a>
<a id="schema_RemoveFromGlobalClusterMessage"></a>
<a id="tocSremovefromglobalclustermessage"></a>
<a id="tocsremovefromglobalclustermessage"></a>

```json
{
  "GlobalClusterIdentifier": {},
  "DbClusterIdentifier": {}
}
```

Represents the input to <a>RemoveFromGlobalCluster</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|
|DbClusterIdentifier|object|true|none|none|

<h2 id="tocS_RemoveSourceIdentifierFromSubscriptionMessage">RemoveSourceIdentifierFromSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaremovesourceidentifierfromsubscriptionmessage"></a>
<a id="schema_RemoveSourceIdentifierFromSubscriptionMessage"></a>
<a id="tocSremovesourceidentifierfromsubscriptionmessage"></a>
<a id="tocsremovesourceidentifierfromsubscriptionmessage"></a>

```json
{
  "SubscriptionName": {},
  "SourceIdentifier": {}
}
```

Represents the input to <a>RemoveSourceIdentifierFromSubscription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|
|SourceIdentifier|object|true|none|none|

<h2 id="tocS_RemoveTagsFromResourceMessage">RemoveTagsFromResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourcemessage"></a>
<a id="schema_RemoveTagsFromResourceMessage"></a>
<a id="tocSremovetagsfromresourcemessage"></a>
<a id="tocsremovetagsfromresourcemessage"></a>

```json
{
  "ResourceName": {},
  "TagKeys": {}
}
```

Represents the input to <a>RemoveTagsFromResource</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_ResetDBClusterParameterGroupMessage">ResetDBClusterParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemaresetdbclusterparametergroupmessage"></a>
<a id="schema_ResetDBClusterParameterGroupMessage"></a>
<a id="tocSresetdbclusterparametergroupmessage"></a>
<a id="tocsresetdbclusterparametergroupmessage"></a>

```json
{
  "DBClusterParameterGroupName": {},
  "ResetAllParameters": {},
  "Parameters": {}
}
```

Represents the input to <a>ResetDBClusterParameterGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|true|none|none|
|ResetAllParameters|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_RestoreDBClusterFromSnapshotMessage">RestoreDBClusterFromSnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemarestoredbclusterfromsnapshotmessage"></a>
<a id="schema_RestoreDBClusterFromSnapshotMessage"></a>
<a id="tocSrestoredbclusterfromsnapshotmessage"></a>
<a id="tocsrestoredbclusterfromsnapshotmessage"></a>

```json
{
  "AvailabilityZones": {},
  "DBClusterIdentifier": {},
  "SnapshotIdentifier": {},
  "Engine": {},
  "EngineVersion": {},
  "Port": {},
  "DBSubnetGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {},
  "DBClusterParameterGroupName": {}
}
```

Represents the input to <a>RestoreDBClusterFromSnapshot</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|DBClusterIdentifier|object|true|none|none|
|SnapshotIdentifier|object|true|none|none|
|Engine|object|true|none|none|
|EngineVersion|object|false|none|none|
|Port|object|false|none|none|
|DBSubnetGroupName|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|KmsKeyId|object|false|none|none|
|EnableCloudwatchLogsExports|object|false|none|none|
|DeletionProtection|object|false|none|none|
|DBClusterParameterGroupName|object|false|none|none|

<h2 id="tocS_RestoreDBClusterToPointInTimeMessage">RestoreDBClusterToPointInTimeMessage</h2>
<!-- backwards compatibility -->
<a id="schemarestoredbclustertopointintimemessage"></a>
<a id="schema_RestoreDBClusterToPointInTimeMessage"></a>
<a id="tocSrestoredbclustertopointintimemessage"></a>
<a id="tocsrestoredbclustertopointintimemessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "RestoreType": {},
  "SourceDBClusterIdentifier": {},
  "RestoreToTime": {},
  "UseLatestRestorableTime": {},
  "Port": {},
  "DBSubnetGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {}
}
```

Represents the input to <a>RestoreDBClusterToPointInTime</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|
|RestoreType|object|false|none|none|
|SourceDBClusterIdentifier|object|true|none|none|
|RestoreToTime|object|false|none|none|
|UseLatestRestorableTime|object|false|none|none|
|Port|object|false|none|none|
|DBSubnetGroupName|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|KmsKeyId|object|false|none|none|
|EnableCloudwatchLogsExports|object|false|none|none|
|DeletionProtection|object|false|none|none|

<h2 id="tocS_StartDBClusterMessage">StartDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemastartdbclustermessage"></a>
<a id="schema_StartDBClusterMessage"></a>
<a id="tocSstartdbclustermessage"></a>
<a id="tocsstartdbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|

<h2 id="tocS_StopDBClusterMessage">StopDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemastopdbclustermessage"></a>
<a id="schema_StopDBClusterMessage"></a>
<a id="tocSstopdbclustermessage"></a>
<a id="tocsstopdbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|

<h2 id="tocS_Subnet">Subnet</h2>
<!-- backwards compatibility -->
<a id="schemasubnet"></a>
<a id="schema_Subnet"></a>
<a id="tocSsubnet"></a>
<a id="tocssubnet"></a>

```json
{
  "SubnetIdentifier": {},
  "SubnetAvailabilityZone": {
    "Name": {}
  },
  "SubnetStatus": {}
}
```

 Detailed information about a subnet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIdentifier|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|SubnetStatus|object|false|none|none|

<h2 id="tocS_UpgradeTarget">UpgradeTarget</h2>
<!-- backwards compatibility -->
<a id="schemaupgradetarget"></a>
<a id="schema_UpgradeTarget"></a>
<a id="tocSupgradetarget"></a>
<a id="tocsupgradetarget"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "Description": {},
  "AutoUpgrade": {},
  "IsMajorVersionUpgrade": {}
}
```

The version of the database engine that an instance can be upgraded to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|Description|object|false|none|none|
|AutoUpgrade|object|false|none|none|
|IsMajorVersionUpgrade|object|false|none|none|

<h2 id="tocS_VpcSecurityGroupMembership">VpcSecurityGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupmembership"></a>
<a id="schema_VpcSecurityGroupMembership"></a>
<a id="tocSvpcsecuritygroupmembership"></a>
<a id="tocsvpcsecuritygroupmembership"></a>

```json
{
  "VpcSecurityGroupId": {},
  "Status": {}
}
```

Used as a response element for queries on virtual private cloud (VPC) security group membership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcSecurityGroupId|object|false|none|none|
|Status|object|false|none|none|
