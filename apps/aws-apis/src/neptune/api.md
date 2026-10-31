<h1 id="amazon-neptune">Amazon Neptune v2014-10-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Neptune</fullname> <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security.</p> <p>This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p>

Base URLs:

* <a href="http://rds.us-east-1.amazonaws.com">http://rds.us-east-1.amazonaws.com</a> - The Amazon Neptune multi-region endpoint

* <a href="https://rds.us-east-1.amazonaws.com">https://rds.us-east-1.amazonaws.com</a> - The Amazon Neptune multi-region endpoint

* <a href="http://rds.amazonaws.com">http://rds.amazonaws.com</a> - The general Amazon Neptune multi-region endpoint

* <a href="https://rds.amazonaws.com">https://rds.amazonaws.com</a> - The general Amazon Neptune multi-region endpoint

* <a href="http://rds.cn-north-1.amazonaws.com.cn">http://rds.cn-north-1.amazonaws.com.cn</a> - The Amazon Neptune endpoint for China (Beijing) and China (Ningxia)

* <a href="https://rds.cn-north-1.amazonaws.com.cn">https://rds.cn-north-1.amazonaws.com.cn</a> - The Amazon Neptune endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/rds/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-neptune-default">Default</h1>

## GET_AddRoleToDBCluster

<a id="opIdGET_AddRoleToDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=AddRoleToDBCluster?DBClusterIdentifier=string&RoleArn=string&Action=AddRoleToDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddRoleToDBCluster`

Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.

<h3 id="getaddroletodbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|The name of the DB cluster to associate the IAM role with.|
|RoleArn|query|string|true|The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.|
|FeatureName|query|string|false|The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a href="neptune/latest/userguide/api-other-apis.html#DBEngineVersion">DBEngineVersion</a>.|
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
|Action|AddRoleToDBCluster|
|Version|2014-10-31|

<h3 id="getaddroletodbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|DBClusterRoleAlreadyExistsFault|[DBClusterRoleAlreadyExistsFault](#schemadbclusterrolealreadyexistsfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|DBClusterRoleQuotaExceededFault|[DBClusterRoleQuotaExceededFault](#schemadbclusterrolequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddRoleToDBCluster

<a id="opIdPOST_AddRoleToDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=AddRoleToDBCluster?Action=AddRoleToDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"RoleArn":{},"FeatureName":{}}'
```

`POST /#Action=AddRoleToDBCluster`

Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "RoleArn": {},
  "FeatureName": {}
}
```

<h3 id="postaddroletodbcluster-parameters">Parameters</h3>

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
|body|body|[AddRoleToDBClusterMessage](#schemaaddroletodbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» RoleArn|body|object|true|none|
|» FeatureName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddRoleToDBCluster|
|Version|2014-10-31|

<h3 id="postaddroletodbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|DBClusterRoleAlreadyExistsFault|[DBClusterRoleAlreadyExistsFault](#schemadbclusterrolealreadyexistsfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|DBClusterRoleQuotaExceededFault|[DBClusterRoleQuotaExceededFault](#schemadbclusterrolequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AddSourceIdentifierToSubscription

<a id="opIdGET_AddSourceIdentifierToSubscription"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=AddSourceIdentifierToSubscription?SubscriptionName=string&SourceIdentifier=string&Action=AddSourceIdentifierToSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddSourceIdentifierToSubscription`

Adds a source identifier to an existing event notification subscription.

<h3 id="getaddsourceidentifiertosubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the event notification subscription you want to add a source identifier to.|
|SourceIdentifier|query|string|true|<p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=AddSourceIdentifierToSubscription?Action=AddSourceIdentifierToSubscription&Version=2014-10-31' \
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=AddTagsToResource?ResourceName=string&Tags=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=AddTagsToResource&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddTagsToResource`

Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.

<h3 id="getaddtagstoresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.|
|Tags|query|[object]|true|The tags to be assigned to the Amazon Neptune resource.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=AddTagsToResource?Action=AddTagsToResource&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"Tags":{}}'
```

`POST /#Action=AddTagsToResource`

Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ApplyPendingMaintenanceAction?ResourceIdentifier=string&ApplyAction=string&OptInType=string&Action=ApplyPendingMaintenanceAction&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ApplyPendingMaintenanceAction`

Applies a pending maintenance action to a resource (for example, to a DB instance).

<h3 id="getapplypendingmaintenanceaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|query|string|true|The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.|
|ApplyAction|query|string|true|<p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>|
|OptInType|query|string|true|<p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>|
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ApplyPendingMaintenanceAction

<a id="opIdPOST_ApplyPendingMaintenanceAction"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ApplyPendingMaintenanceAction?Action=ApplyPendingMaintenanceAction&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceIdentifier":{},"ApplyAction":{},"OptInType":{}}'
```

`POST /#Action=ApplyPendingMaintenanceAction`

Applies a pending maintenance action to a resource (for example, to a DB instance).

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CopyDBClusterParameterGroup

<a id="opIdGET_CopyDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CopyDBClusterParameterGroup?SourceDBClusterParameterGroupIdentifier=string&TargetDBClusterParameterGroupIdentifier=string&TargetDBClusterParameterGroupDescription=string&Action=CopyDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CopyDBClusterParameterGroup`

Copies the specified DB cluster parameter group.

<h3 id="getcopydbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceDBClusterParameterGroupIdentifier|query|string|true|<p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same Amazon Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different Amazon Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>|
|TargetDBClusterParameterGroupIdentifier|query|string|true|<p>The identifier for the copied DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>|
|TargetDBClusterParameterGroupDescription|query|string|true|A description for the copied DB cluster parameter group.|
|Tags|query|[object]|false|The tags to be assigned to the copied DB cluster parameter group.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CopyDBClusterParameterGroup?Action=CopyDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceDBClusterParameterGroupIdentifier":{},"TargetDBClusterParameterGroupIdentifier":{},"TargetDBClusterParameterGroupDescription":{},"Tags":{}}'
```

`POST /#Action=CopyDBClusterParameterGroup`

Copies the specified DB cluster parameter group.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CopyDBClusterSnapshot?SourceDBClusterSnapshotIdentifier=string&TargetDBClusterSnapshotIdentifier=string&Action=CopyDBClusterSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CopyDBClusterSnapshot`

<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>

<h3 id="getcopydbclustersnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceDBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> <li> <p>Specify a valid DB snapshot identifier.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>|
|TargetDBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>|
|KmsKeyId|query|string|false|<p>The Amazon Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p> <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then you must specify a value for <code>KmsKeyId</code>.</p> <p> KMS encryption keys are specific to the Amazon Region that they are created in, and you can't use encryption keys from one Amazon Region in another Amazon Region.</p> <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.</p>|
|PreSignedUrl|query|string|false|Not currently supported.|
|CopyTags|query|boolean|false|True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.|
|Tags|query|[object]|false|The tags to assign to the new DB cluster snapshot copy.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CopyDBClusterSnapshot?Action=CopyDBClusterSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceDBClusterSnapshotIdentifier":{},"TargetDBClusterSnapshotIdentifier":{},"KmsKeyId":{},"PreSignedUrl":{},"CopyTags":{},"Tags":{}}'
```

`POST /#Action=CopyDBClusterSnapshot`

<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>

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

## GET_CopyDBParameterGroup

<a id="opIdGET_CopyDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CopyDBParameterGroup?SourceDBParameterGroupIdentifier=string&TargetDBParameterGroupIdentifier=string&TargetDBParameterGroupDescription=string&Action=CopyDBParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CopyDBParameterGroup`

Copies the specified DB parameter group.

<h3 id="getcopydbparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceDBParameterGroupIdentifier|query|string|true|<p>The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>|
|TargetDBParameterGroupIdentifier|query|string|true|<p>The identifier for the copied DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-db-parameter-group</code> </p>|
|TargetDBParameterGroupDescription|query|string|true|A description for the copied DB parameter group.|
|Tags|query|[object]|false|The tags to be assigned to the copied DB parameter group.|
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
|Action|CopyDBParameterGroup|
|Version|2014-10-31|

<h3 id="getcopydbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyDBParameterGroupResult](#schemacopydbparametergroupresult)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|
|482|482|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CopyDBParameterGroup

<a id="opIdPOST_CopyDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CopyDBParameterGroup?Action=CopyDBParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceDBParameterGroupIdentifier":{},"TargetDBParameterGroupIdentifier":{},"TargetDBParameterGroupDescription":{},"Tags":{}}'
```

`POST /#Action=CopyDBParameterGroup`

Copies the specified DB parameter group.

> Body parameter

```json
{
  "SourceDBParameterGroupIdentifier": {},
  "TargetDBParameterGroupIdentifier": {},
  "TargetDBParameterGroupDescription": {},
  "Tags": {}
}
```

<h3 id="postcopydbparametergroup-parameters">Parameters</h3>

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
|body|body|[CopyDBParameterGroupMessage](#schemacopydbparametergroupmessage)|false|none|
|» SourceDBParameterGroupIdentifier|body|object|true|none|
|» TargetDBParameterGroupIdentifier|body|object|true|none|
|» TargetDBParameterGroupDescription|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CopyDBParameterGroup|
|Version|2014-10-31|

<h3 id="postcopydbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyDBParameterGroupResult](#schemacopydbparametergroupresult)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|
|482|482|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBCluster

<a id="opIdGET_CreateDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBCluster?DBClusterIdentifier=string&Engine=string&Action=CreateDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBCluster`

<p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>

<h3 id="getcreatedbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AvailabilityZones|query|[object]|false|A list of EC2 Availability Zones that instances in the DB cluster can be created in.|
|BackupRetentionPeriod|query|integer|false|<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>|
|CharacterSetName|query|string|false| <i>(Not supported by Neptune)</i> |
|CopyTagsToSnapshot|query|boolean|false| <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> |
|DatabaseName|query|string|false|The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.|
|DBClusterIdentifier|query|string|true|<p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>|
|DBClusterParameterGroupName|query|string|false|<p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>|
|VpcSecurityGroupIds|query|[object]|false|A list of EC2 VPC security groups to associate with this DB cluster.|
|DBSubnetGroupName|query|string|false|<p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|Engine|query|string|true|<p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>neptune</code> </p>|
|EngineVersion|query|string|false|<p>The version number of the database engine to use for the new DB cluster.</p> <p>Example: <code>1.0.2.1</code> </p>|
|Port|query|integer|false|<p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>8182</code> </p>|
|MasterUsername|query|string|false|Not supported by Neptune.|
|MasterUserPassword|query|string|false|Not supported by Neptune.|
|OptionGroupName|query|string|false| <i>(Not supported by Neptune)</i> |
|PreferredBackupWindow|query|string|false|<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>|
|PreferredMaintenanceWindow|query|string|false|<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>|
|ReplicationSourceIdentifier|query|string|false|The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.|
|Tags|query|[object]|false|The tags to assign to the new DB cluster.|
|StorageEncrypted|query|boolean|false|Specifies whether the DB cluster is encrypted.|
|KmsKeyId|query|string|false|<p>The Amazon KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key.</p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is true and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use your default encryption key.</p> </li> </ul> <p>Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region.</p>|
|PreSignedUrl|query|string|false|This parameter is not currently supported.|
|EnableIAMDatabaseAuthentication|query|boolean|false|<p>If set to <code>true</code>, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level).</p> <p>Default: <code>false</code>.</p>|
|EnableCloudwatchLogsExports|query|[[String](#schemastring)]|false|The list of log types that need to be enabled for exporting to CloudWatch Logs.|
|DeletionProtection|query|boolean|false|A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.|
|ServerlessV2ScalingConfiguration|query|object|false|none|
|GlobalClusterIdentifier|query|string|false|The ID of the Neptune global database to which this new DB cluster should be added.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBCluster?Action=CreateDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AvailabilityZones":{},"BackupRetentionPeriod":{},"CharacterSetName":{},"CopyTagsToSnapshot":{},"DatabaseName":{},"DBClusterIdentifier":{},"DBClusterParameterGroupName":{},"VpcSecurityGroupIds":{},"DBSubnetGroupName":{},"Engine":{},"EngineVersion":{},"Port":{},"MasterUsername":{},"MasterUserPassword":{},"OptionGroupName":{},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"ReplicationSourceIdentifier":{},"Tags":{},"StorageEncrypted":{},"KmsKeyId":{},"PreSignedUrl":{},"EnableIAMDatabaseAuthentication":{},"EnableCloudwatchLogsExports":{},"DeletionProtection":{},"ServerlessV2ScalingConfiguration":{"MinCapacity":{},"MaxCapacity":{}},"GlobalClusterIdentifier":{}}'
```

`POST /#Action=CreateDBCluster`

<p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>

> Body parameter

```json
{
  "AvailabilityZones": {},
  "BackupRetentionPeriod": {},
  "CharacterSetName": {},
  "CopyTagsToSnapshot": {},
  "DatabaseName": {},
  "DBClusterIdentifier": {},
  "DBClusterParameterGroupName": {},
  "VpcSecurityGroupIds": {},
  "DBSubnetGroupName": {},
  "Engine": {},
  "EngineVersion": {},
  "Port": {},
  "MasterUsername": {},
  "MasterUserPassword": {},
  "OptionGroupName": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "ReplicationSourceIdentifier": {},
  "Tags": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "PreSignedUrl": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  },
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
|» CharacterSetName|body|object|false|none|
|» CopyTagsToSnapshot|body|object|false|none|
|» DatabaseName|body|object|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» DBClusterParameterGroupName|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» DBSubnetGroupName|body|object|false|none|
|» Engine|body|object|true|none|
|» EngineVersion|body|object|false|none|
|» Port|body|object|false|none|
|» MasterUsername|body|object|false|none|
|» MasterUserPassword|body|object|false|none|
|» OptionGroupName|body|object|false|none|
|» PreferredBackupWindow|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» ReplicationSourceIdentifier|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» StorageEncrypted|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» PreSignedUrl|body|object|false|none|
|» EnableIAMDatabaseAuthentication|body|object|false|none|
|» EnableCloudwatchLogsExports|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» ServerlessV2ScalingConfiguration|body|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|
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

## GET_CreateDBClusterEndpoint

<a id="opIdGET_CreateDBClusterEndpoint"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBClusterEndpoint?DBClusterIdentifier=string&DBClusterEndpointIdentifier=string&EndpointType=string&Action=CreateDBClusterEndpoint&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBClusterEndpoint`

Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.

<h3 id="getcreatedbclusterendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.|
|DBClusterEndpointIdentifier|query|string|true|The identifier to use for the new endpoint. This parameter is stored as a lowercase string.|
|EndpointType|query|string|true|The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.|
|StaticMembers|query|[[String](#schemastring)]|false|List of DB instance identifiers that are part of the custom endpoint group.|
|ExcludedMembers|query|[[String](#schemastring)]|false|List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.|
|Tags|query|[object]|false|The tags to be assigned to the Amazon Neptune resource.|
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
|Action|CreateDBClusterEndpoint|
|Version|2014-10-31|

<h3 id="getcreatedbclusterendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterEndpointOutput](#schemacreatedbclusterendpointoutput)|
|480|480|DBClusterEndpointQuotaExceededFault|[DBClusterEndpointQuotaExceededFault](#schemadbclusterendpointquotaexceededfault)|
|481|481|DBClusterEndpointAlreadyExistsFault|[DBClusterEndpointAlreadyExistsFault](#schemadbclusterendpointalreadyexistsfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|483|483|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|484|484|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|485|485|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBClusterEndpoint

<a id="opIdPOST_CreateDBClusterEndpoint"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBClusterEndpoint?Action=CreateDBClusterEndpoint&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"DBClusterEndpointIdentifier":{},"EndpointType":{},"StaticMembers":{},"ExcludedMembers":{},"Tags":{}}'
```

`POST /#Action=CreateDBClusterEndpoint`

Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "DBClusterEndpointIdentifier": {},
  "EndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {},
  "Tags": {}
}
```

<h3 id="postcreatedbclusterendpoint-parameters">Parameters</h3>

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
|body|body|[CreateDBClusterEndpointMessage](#schemacreatedbclusterendpointmessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» DBClusterEndpointIdentifier|body|object|true|none|
|» EndpointType|body|object|true|none|
|» StaticMembers|body|object|false|none|
|» ExcludedMembers|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDBClusterEndpoint|
|Version|2014-10-31|

<h3 id="postcreatedbclusterendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBClusterEndpointOutput](#schemacreatedbclusterendpointoutput)|
|480|480|DBClusterEndpointQuotaExceededFault|[DBClusterEndpointQuotaExceededFault](#schemadbclusterendpointquotaexceededfault)|
|481|481|DBClusterEndpointAlreadyExistsFault|[DBClusterEndpointAlreadyExistsFault](#schemadbclusterendpointalreadyexistsfault)|
|482|482|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|483|483|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|484|484|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|485|485|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBClusterParameterGroup

<a id="opIdGET_CreateDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBClusterParameterGroup?DBClusterParameterGroupName=string&DBParameterGroupFamily=string&Description=string&Action=CreateDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBClusterParameterGroup`

<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

<h3 id="getcreatedbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBClusterParameterGroup.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>|
|DBParameterGroupFamily|query|string|true|The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.|
|Description|query|string|true|The description for the DB cluster parameter group.|
|Tags|query|[object]|false|The tags to be assigned to the new DB cluster parameter group.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBClusterParameterGroup?Action=CreateDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{},"Tags":{}}'
```

`POST /#Action=CreateDBClusterParameterGroup`

<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBClusterSnapshot?DBClusterSnapshotIdentifier=string&DBClusterIdentifier=string&Action=CreateDBClusterSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBClusterSnapshot`

Creates a snapshot of a DB cluster.

<h3 id="getcreatedbclustersnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1-snapshot1</code> </p>|
|DBClusterIdentifier|query|string|true|<p>The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>|
|Tags|query|[object]|false|The tags to be assigned to the DB cluster snapshot.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBClusterSnapshot?Action=CreateDBClusterSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{},"DBClusterIdentifier":{},"Tags":{}}'
```

`POST /#Action=CreateDBClusterSnapshot`

Creates a snapshot of a DB cluster.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBInstance?DBInstanceIdentifier=string&DBInstanceClass=string&Engine=string&DBClusterIdentifier=string&Action=CreateDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBInstance`

Creates a new DB instance.

<h3 id="getcreatedbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBName|query|string|false|Not supported.|
|DBInstanceIdentifier|query|string|true|<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>|
|AllocatedStorage|query|integer|false|Not supported by Neptune.|
|DBInstanceClass|query|string|true|The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.|
|Engine|query|string|true|<p>The name of the database engine to be used for this instance.</p> <p>Valid Values: <code>neptune</code> </p>|
|MasterUsername|query|string|false|Not supported by Neptune.|
|MasterUserPassword|query|string|false|Not supported by Neptune.|
|DBSecurityGroups|query|[object]|false|<p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>|
|VpcSecurityGroupIds|query|[object]|false|<p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>|
|AvailabilityZone|query|string|false|<p> The EC2 Availability Zone that the DB instance is created in</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same Amazon Region as the current endpoint.</p>|
|DBSubnetGroupName|query|string|false|<p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>|
|PreferredMaintenanceWindow|query|string|false|<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>|
|DBParameterGroupName|query|string|false|<p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>|
|BackupRetentionPeriod|query|integer|false|<p>The number of days for which automated backups are retained.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>|
|PreferredBackupWindow|query|string|false|<p> The daily time range during which automated backups are created.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>|
|Port|query|integer|false|<p>The port number on which the database accepts connections.</p> <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> Default: <code>8182</code> </p> <p>Type: Integer</p>|
|MultiAZ|query|boolean|false|Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.|
|EngineVersion|query|string|false|The version number of the database engine to use. Currently, setting this parameter has no effect.|
|AutoMinorVersionUpgrade|query|boolean|false|<p>Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.</p> <p>Default: <code>true</code> </p>|
|LicenseModel|query|string|false|<p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> \| <code>bring-your-own-license</code> \| <code>general-public-license</code> </p>|
|Iops|query|integer|false|The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.|
|OptionGroupName|query|string|false| <i>(Not supported by Neptune)</i> |
|CharacterSetName|query|string|false| <i>(Not supported by Neptune)</i> |
|PubliclyAccessible|query|boolean|false|This flag should no longer be used.|
|Tags|query|[object]|false|The tags to assign to the new instance.|
|DBClusterIdentifier|query|string|true|<p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>|
|StorageType|query|string|false|<p>Specifies the storage type to be associated with the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>|
|TdeCredentialArn|query|string|false|The ARN from the key store with which to associate the instance for TDE encryption.|
|TdeCredentialPassword|query|string|false|The password for the given ARN from the key store in order to access the device.|
|StorageEncrypted|query|boolean|false|<p>Specifies whether the DB instance is encrypted.</p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>|
|KmsKeyId|query|string|false|<p>The Amazon KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p>|
|Domain|query|string|false|Specify the Active Directory Domain to create the instance in.|
|CopyTagsToSnapshot|query|boolean|false|True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.|
|MonitoringInterval|query|integer|false|<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>|
|MonitoringRoleArn|query|string|false|<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>|
|DomainIAMRoleName|query|string|false|Specify the name of the IAM role to be used when making API calls to the Directory Service.|
|PromotionTier|query|integer|false|<p>A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>|
|Timezone|query|string|false|The time zone of the DB instance.|
|EnableIAMDatabaseAuthentication|query|boolean|false|Not supported by Neptune (ignored).|
|EnablePerformanceInsights|query|boolean|false| <i>(Not supported by Neptune)</i> |
|PerformanceInsightsKMSKeyId|query|string|false| <i>(Not supported by Neptune)</i> |
|EnableCloudwatchLogsExports|query|[[String](#schemastring)]|false|The list of log types that need to be enabled for exporting to CloudWatch Logs.|
|DeletionProtection|query|boolean|false|<p>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.</p> <p>DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.</p>|
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
|491|491|ProvisionedIopsNotAvailableInAZFault|[ProvisionedIopsNotAvailableInAZFault](#schemaprovisionediopsnotavailableinazfault)|
|492|492|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|493|493|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|494|494|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|495|495|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|496|496|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|497|497|DomainNotFoundFault|[DomainNotFoundFault](#schemadomainnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBInstance

<a id="opIdPOST_CreateDBInstance"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBInstance?Action=CreateDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBName":{},"DBInstanceIdentifier":{},"AllocatedStorage":{},"DBInstanceClass":{},"Engine":{},"MasterUsername":{},"MasterUserPassword":{},"DBSecurityGroups":{},"VpcSecurityGroupIds":{},"AvailabilityZone":{},"DBSubnetGroupName":{},"PreferredMaintenanceWindow":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{},"PreferredBackupWindow":{},"Port":{},"MultiAZ":{},"EngineVersion":{},"AutoMinorVersionUpgrade":{},"LicenseModel":{},"Iops":{},"OptionGroupName":{},"CharacterSetName":{},"PubliclyAccessible":{},"Tags":{},"DBClusterIdentifier":{},"StorageType":{},"TdeCredentialArn":{},"TdeCredentialPassword":{},"StorageEncrypted":{},"KmsKeyId":{},"Domain":{},"CopyTagsToSnapshot":{},"MonitoringInterval":{},"MonitoringRoleArn":{},"DomainIAMRoleName":{},"PromotionTier":{},"Timezone":{},"EnableIAMDatabaseAuthentication":{},"EnablePerformanceInsights":{},"PerformanceInsightsKMSKeyId":{},"EnableCloudwatchLogsExports":{},"DeletionProtection":{}}'
```

`POST /#Action=CreateDBInstance`

Creates a new DB instance.

> Body parameter

```json
{
  "DBName": {},
  "DBInstanceIdentifier": {},
  "AllocatedStorage": {},
  "DBInstanceClass": {},
  "Engine": {},
  "MasterUsername": {},
  "MasterUserPassword": {},
  "DBSecurityGroups": {},
  "VpcSecurityGroupIds": {},
  "AvailabilityZone": {},
  "DBSubnetGroupName": {},
  "PreferredMaintenanceWindow": {},
  "DBParameterGroupName": {},
  "BackupRetentionPeriod": {},
  "PreferredBackupWindow": {},
  "Port": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "LicenseModel": {},
  "Iops": {},
  "OptionGroupName": {},
  "CharacterSetName": {},
  "PubliclyAccessible": {},
  "Tags": {},
  "DBClusterIdentifier": {},
  "StorageType": {},
  "TdeCredentialArn": {},
  "TdeCredentialPassword": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "Domain": {},
  "CopyTagsToSnapshot": {},
  "MonitoringInterval": {},
  "MonitoringRoleArn": {},
  "DomainIAMRoleName": {},
  "PromotionTier": {},
  "Timezone": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {}
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
|» DBName|body|object|false|none|
|» DBInstanceIdentifier|body|object|true|none|
|» AllocatedStorage|body|object|false|none|
|» DBInstanceClass|body|object|true|none|
|» Engine|body|object|true|none|
|» MasterUsername|body|object|false|none|
|» MasterUserPassword|body|object|false|none|
|» DBSecurityGroups|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» AvailabilityZone|body|object|false|none|
|» DBSubnetGroupName|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» DBParameterGroupName|body|object|false|none|
|» BackupRetentionPeriod|body|object|false|none|
|» PreferredBackupWindow|body|object|false|none|
|» Port|body|object|false|none|
|» MultiAZ|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» LicenseModel|body|object|false|none|
|» Iops|body|object|false|none|
|» OptionGroupName|body|object|false|none|
|» CharacterSetName|body|object|false|none|
|» PubliclyAccessible|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» StorageType|body|object|false|none|
|» TdeCredentialArn|body|object|false|none|
|» TdeCredentialPassword|body|object|false|none|
|» StorageEncrypted|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» Domain|body|object|false|none|
|» CopyTagsToSnapshot|body|object|false|none|
|» MonitoringInterval|body|object|false|none|
|» MonitoringRoleArn|body|object|false|none|
|» DomainIAMRoleName|body|object|false|none|
|» PromotionTier|body|object|false|none|
|» Timezone|body|object|false|none|
|» EnableIAMDatabaseAuthentication|body|object|false|none|
|» EnablePerformanceInsights|body|object|false|none|
|» PerformanceInsightsKMSKeyId|body|object|false|none|
|» EnableCloudwatchLogsExports|body|object|false|none|
|» DeletionProtection|body|object|false|none|

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
|491|491|ProvisionedIopsNotAvailableInAZFault|[ProvisionedIopsNotAvailableInAZFault](#schemaprovisionediopsnotavailableinazfault)|
|492|492|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|493|493|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|494|494|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|495|495|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|496|496|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|497|497|DomainNotFoundFault|[DomainNotFoundFault](#schemadomainnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBParameterGroup

<a id="opIdGET_CreateDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBParameterGroup?DBParameterGroupName=string&DBParameterGroupFamily=string&Description=string&Action=CreateDBParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBParameterGroup`

<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

<h3 id="getcreatedbparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupName|query|string|true|<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>|
|DBParameterGroupFamily|query|string|true|The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.|
|Description|query|string|true|The description for the DB parameter group.|
|Tags|query|[object]|false|The tags to be assigned to the new DB parameter group.|
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
|Action|CreateDBParameterGroup|
|Version|2014-10-31|

<h3 id="getcreatedbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBParameterGroupResult](#schemacreatedbparametergroupresult)|
|480|480|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|
|481|481|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDBParameterGroup

<a id="opIdPOST_CreateDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBParameterGroup?Action=CreateDBParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupName":{},"DBParameterGroupFamily":{},"Description":{},"Tags":{}}'
```

`POST /#Action=CreateDBParameterGroup`

<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

> Body parameter

```json
{
  "DBParameterGroupName": {},
  "DBParameterGroupFamily": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="postcreatedbparametergroup-parameters">Parameters</h3>

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
|body|body|[CreateDBParameterGroupMessage](#schemacreatedbparametergroupmessage)|false|none|
|» DBParameterGroupName|body|object|true|none|
|» DBParameterGroupFamily|body|object|true|none|
|» Description|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDBParameterGroup|
|Version|2014-10-31|

<h3 id="postcreatedbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDBParameterGroupResult](#schemacreatedbparametergroupresult)|
|480|480|DBParameterGroupQuotaExceededFault|[DBParameterGroupQuotaExceededFault](#schemadbparametergroupquotaexceededfault)|
|481|481|DBParameterGroupAlreadyExistsFault|[DBParameterGroupAlreadyExistsFault](#schemadbparametergroupalreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDBSubnetGroup

<a id="opIdGET_CreateDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBSubnetGroup?DBSubnetGroupName=string&DBSubnetGroupDescription=string&SubnetIds=%7B%7D&Action=CreateDBSubnetGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDBSubnetGroup`

Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

<h3 id="getcreatedbsubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|true|<p>The name for the DB subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|DBSubnetGroupDescription|query|string|true|The description for the DB subnet group.|
|SubnetIds|query|[object]|true|The EC2 Subnet IDs for the DB subnet group.|
|Tags|query|[object]|false|The tags to be assigned to the new DB subnet group.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateDBSubnetGroup?Action=CreateDBSubnetGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{},"Tags":{}}'
```

`POST /#Action=CreateDBSubnetGroup`

Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateEventSubscription?SubscriptionName=string&SnsTopicArn=string&Action=CreateEventSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateEventSubscription`

<p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>

<h3 id="getcreateeventsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|<p>The name of the subscription.</p> <p>Constraints: The name must be less than 255 characters.</p>|
|SnsTopicArn|query|string|true|The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.|
|SourceType|query|string|false|<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code> \| <code>db-cluster</code> \| <code>db-parameter-group</code> \| <code>db-security-group</code> \| <code>db-snapshot</code> \| <code>db-cluster-snapshot</code> </p>|
|EventCategories|query|[object]|false| A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.|
|SourceIds|query|[object]|false|<p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIds are supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>|
|Enabled|query|boolean|false| A Boolean value; set to <b>true</b> to activate the subscription, set to <b>false</b> to create the subscription but not active it.|
|Tags|query|[object]|false|The tags to be applied to the new event subscription.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateEventSubscription?Action=CreateEventSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{},"SourceIds":{},"Enabled":{},"Tags":{}}'
```

`POST /#Action=CreateEventSubscription`

<p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateGlobalCluster?GlobalClusterIdentifier=string&Action=CreateGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateGlobalCluster`

<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>

<h3 id="getcreateglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|The cluster identifier of the new global database cluster.|
|SourceDBClusterIdentifier|query|string|false|(<i>Optional</i>) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.|
|Engine|query|string|false|<p>The name of the database engine to be used in the global database.</p> <p>Valid values: <code>neptune</code> </p>|
|EngineVersion|query|string|false|<p>The Neptune engine version to be used by the global database.</p> <p>Valid values: <code>1.2.0.0</code> or above.</p>|
|DeletionProtection|query|boolean|false|The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.|
|StorageEncrypted|query|boolean|false|The storage encryption setting for the new global database cluster.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=CreateGlobalCluster?Action=CreateGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"SourceDBClusterIdentifier":{},"Engine":{},"EngineVersion":{},"DeletionProtection":{},"StorageEncrypted":{}}'
```

`POST /#Action=CreateGlobalCluster`

<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
  "SourceDBClusterIdentifier": {},
  "Engine": {},
  "EngineVersion": {},
  "DeletionProtection": {},
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBCluster?DBClusterIdentifier=string&Action=DeleteDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBCluster`

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>

<h3 id="getdeletedbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|<p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing DBClusterIdentifier.</p> </li> </ul>|
|SkipFinalSnapshot|query|boolean|false|<p> Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is deleted.</p> <note> <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>|
|FinalDBSnapshotIdentifier|query|string|false|<p> The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>.</p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBCluster?Action=DeleteDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"SkipFinalSnapshot":{},"FinalDBSnapshotIdentifier":{}}'
```

`POST /#Action=DeleteDBCluster`

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>

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

## GET_DeleteDBClusterEndpoint

<a id="opIdGET_DeleteDBClusterEndpoint"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBClusterEndpoint?DBClusterEndpointIdentifier=string&Action=DeleteDBClusterEndpoint&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBClusterEndpoint`

Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.

<h3 id="getdeletedbclusterendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|query|string|true|The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.|
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
|Action|DeleteDBClusterEndpoint|
|Version|2014-10-31|

<h3 id="getdeletedbclusterendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBClusterEndpointOutput](#schemadeletedbclusterendpointoutput)|
|480|480|InvalidDBClusterEndpointStateFault|[InvalidDBClusterEndpointStateFault](#schemainvaliddbclusterendpointstatefault)|
|481|481|DBClusterEndpointNotFoundFault|[DBClusterEndpointNotFoundFault](#schemadbclusterendpointnotfoundfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDBClusterEndpoint

<a id="opIdPOST_DeleteDBClusterEndpoint"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBClusterEndpoint?Action=DeleteDBClusterEndpoint&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterEndpointIdentifier":{}}'
```

`POST /#Action=DeleteDBClusterEndpoint`

Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.

> Body parameter

```json
{
  "DBClusterEndpointIdentifier": {}
}
```

<h3 id="postdeletedbclusterendpoint-parameters">Parameters</h3>

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
|body|body|[DeleteDBClusterEndpointMessage](#schemadeletedbclusterendpointmessage)|false|none|
|» DBClusterEndpointIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDBClusterEndpoint|
|Version|2014-10-31|

<h3 id="postdeletedbclusterendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDBClusterEndpointOutput](#schemadeletedbclusterendpointoutput)|
|480|480|InvalidDBClusterEndpointStateFault|[InvalidDBClusterEndpointStateFault](#schemainvaliddbclusterendpointstatefault)|
|481|481|DBClusterEndpointNotFoundFault|[DBClusterEndpointNotFoundFault](#schemadbclusterendpointnotfoundfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDBClusterParameterGroup

<a id="opIdGET_DeleteDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBClusterParameterGroup?DBClusterParameterGroupName=string&Action=DeleteDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBClusterParameterGroup`

Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.

<h3 id="getdeletedbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB cluster parameter group.</p> </li> <li> <p>You can't delete a default DB cluster parameter group.</p> </li> <li> <p>Cannot be associated with any DB clusters.</p> </li> </ul>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBClusterParameterGroup?Action=DeleteDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{}}'
```

`POST /#Action=DeleteDBClusterParameterGroup`

Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBClusterSnapshot?DBClusterSnapshotIdentifier=string&Action=DeleteDBClusterSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBClusterSnapshot`

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

<h3 id="getdeletedbclustersnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|<p>The identifier of the DB cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBClusterSnapshot?Action=DeleteDBClusterSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{}}'
```

`POST /#Action=DeleteDBClusterSnapshot`

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBInstance?DBInstanceIdentifier=string&Action=DeleteDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBInstance`

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>

<h3 id="getdeletedbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|<p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>|
|SkipFinalSnapshot|query|boolean|false|<p> Determines whether a final DB snapshot is created before the DB instance is deleted. If <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified, a DB snapshot is created before the DB instance is deleted.</p> <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to "true".</p> <p>Specify <code>true</code> when deleting a Read Replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>|
|FinalDBSnapshotIdentifier|query|string|false|<p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to <code>false</code>.</p> <note> <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Cannot be specified when deleting a Read Replica.</p> </li> </ul>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBInstance?Action=DeleteDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"SkipFinalSnapshot":{},"FinalDBSnapshotIdentifier":{}}'
```

`POST /#Action=DeleteDBInstance`

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>

> Body parameter

```json
{
  "DBInstanceIdentifier": {},
  "SkipFinalSnapshot": {},
  "FinalDBSnapshotIdentifier": {}
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
|» SkipFinalSnapshot|body|object|false|none|
|» FinalDBSnapshotIdentifier|body|object|false|none|

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

## GET_DeleteDBParameterGroup

<a id="opIdGET_DeleteDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBParameterGroup?DBParameterGroupName=string&Action=DeleteDBParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBParameterGroup`

Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.

<h3 id="getdeletedbparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupName|query|string|true|<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB parameter group</p> </li> <li> <p>You can't delete a default DB parameter group</p> </li> <li> <p>Cannot be associated with any DB instances</p> </li> </ul>|
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
|Action|DeleteDBParameterGroup|
|Version|2014-10-31|

<h3 id="getdeletedbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|
|481|481|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDBParameterGroup

<a id="opIdPOST_DeleteDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBParameterGroup?Action=DeleteDBParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupName":{}}'
```

`POST /#Action=DeleteDBParameterGroup`

Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.

> Body parameter

```json
{
  "DBParameterGroupName": {}
}
```

<h3 id="postdeletedbparametergroup-parameters">Parameters</h3>

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
|body|body|[DeleteDBParameterGroupMessage](#schemadeletedbparametergroupmessage)|false|none|
|» DBParameterGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDBParameterGroup|
|Version|2014-10-31|

<h3 id="postdeletedbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|
|481|481|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDBSubnetGroup

<a id="opIdGET_DeleteDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBSubnetGroup?DBSubnetGroupName=string&Action=DeleteDBSubnetGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDBSubnetGroup`

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

<h3 id="getdeletedbsubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|true|<p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteDBSubnetGroup?Action=DeleteDBSubnetGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{}}'
```

`POST /#Action=DeleteDBSubnetGroup`

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteEventSubscription?SubscriptionName=string&Action=DeleteEventSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteEventSubscription`

Deletes an event notification subscription.

<h3 id="getdeleteeventsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the event notification subscription you want to delete.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteEventSubscription?Action=DeleteEventSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{}}'
```

`POST /#Action=DeleteEventSubscription`

Deletes an event notification subscription.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteGlobalCluster?GlobalClusterIdentifier=string&Action=DeleteGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteGlobalCluster`

Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.

<h3 id="getdeleteglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|The cluster identifier of the global database cluster being deleted.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DeleteGlobalCluster?Action=DeleteGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{}}'
```

`POST /#Action=DeleteGlobalCluster`

Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.

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

## GET_DescribeDBClusterEndpoints

<a id="opIdGET_DescribeDBClusterEndpoints"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterEndpoints?Action=DescribeDBClusterEndpoints&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterEndpoints`

<p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

<h3 id="getdescribedbclusterendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|false|The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.|
|DBClusterEndpointIdentifier|query|string|false|The identifier of the endpoint to describe. This parameter is stored as a lowercase string.|
|Filters|query|[object]|false|A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>. <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>. <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>. <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>. <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. |
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous <code>DescribeDBClusterEndpoints</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. |
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
|Action|DescribeDBClusterEndpoints|
|Version|2014-10-31|

<h3 id="getdescribedbclusterendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterEndpointMessage](#schemadbclusterendpointmessage)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBClusterEndpoints

<a id="opIdPOST_DescribeDBClusterEndpoints"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterEndpoints?Action=DescribeDBClusterEndpoints&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"DBClusterEndpointIdentifier":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBClusterEndpoints`

<p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "DBClusterEndpointIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbclusterendpoints-parameters">Parameters</h3>

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
|body|body|[DescribeDBClusterEndpointsMessage](#schemadescribedbclusterendpointsmessage)|false|none|
|» DBClusterIdentifier|body|object|false|none|
|» DBClusterEndpointIdentifier|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBClusterEndpoints|
|Version|2014-10-31|

<h3 id="postdescribedbclusterendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBClusterEndpointMessage](#schemadbclusterendpointmessage)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBClusterParameterGroups

<a id="opIdGET_DescribeDBClusterParameterGroups"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameterGroups?Action=DescribeDBClusterParameterGroups&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterParameterGroups`

 Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.

<h3 id="getdescribedbclusterparametergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|false|<p>The name of a specific DB cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameterGroups?Action=DescribeDBClusterParameterGroups&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBClusterParameterGroups`

 Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameters?DBClusterParameterGroupName=string&Action=DescribeDBClusterParameters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterParameters`

Returns the detailed parameter list for a particular DB cluster parameter group.

<h3 id="getdescribedbclusterparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|<p>The name of a specific DB cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>|
|Source|query|string|false| A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. |
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterParameters?Action=DescribeDBClusterParameters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"Source":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBClusterParameters`

Returns the detailed parameter list for a particular DB cluster parameter group.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshotAttributes?DBClusterSnapshotIdentifier=string&Action=DescribeDBClusterSnapshotAttributes&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterSnapshotAttributes`

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

<h3 id="getdescribedbclustersnapshotattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|The identifier for the DB cluster snapshot to describe the attributes for.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshotAttributes?Action=DescribeDBClusterSnapshotAttributes&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{}}'
```

`POST /#Action=DescribeDBClusterSnapshotAttributes`

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshots?Action=DescribeDBClusterSnapshots&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusterSnapshots`

Returns information about DB cluster snapshots. This API action supports pagination.

<h3 id="getdescribedbclustersnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|false|<p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBCluster.</p> </li> </ul>|
|DBClusterSnapshotIdentifier|query|string|false|<p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>|
|SnapshotType|query|string|false|<p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my Amazon account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my Amazon account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my Amazon account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public DB cluster snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. |
|IncludeShared|query|boolean|false|<p>True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is <code>false</code>.</p> <p>You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>|
|IncludePublic|query|boolean|false|<p>True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is <code>false</code>. The default is false.</p> <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusterSnapshots?Action=DescribeDBClusterSnapshots&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"DBClusterSnapshotIdentifier":{},"SnapshotType":{},"Filters":{},"MaxRecords":{},"Marker":{},"IncludeShared":{},"IncludePublic":{}}'
```

`POST /#Action=DescribeDBClusterSnapshots`

Returns information about DB cluster snapshots. This API action supports pagination.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusters?Action=DescribeDBClusters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBClusters`

<p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

<h3 id="getdescribedbclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|false|<p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>|
|Filters|query|[object]|false|<p>A filter that specifies one or more DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB clusters created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB clusters are returned, you could use the following command:</p>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous <a>DescribeDBClusters</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBClusters?Action=DescribeDBClusters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBClusters`

<p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBEngineVersions?Action=DescribeDBEngineVersions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBEngineVersions`

Returns a list of the available DB engines.

<h3 id="getdescribedbengineversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Engine|query|string|false|The database engine to return.|
|EngineVersion|query|string|false|<p>The database engine version to return.</p> <p>Example: <code>5.1.49</code> </p>|
|DBParameterGroupFamily|query|string|false|<p>The name of a specific DB parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBParameterGroupFamily.</p> </li> </ul>|
|Filters|query|[object]|false|Not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
|DefaultOnly|query|boolean|false|Indicates that only the default version of the specified engine or engine and major version combination is returned.|
|ListSupportedCharacterSets|query|boolean|false|If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version.|
|ListSupportedTimezones|query|boolean|false|If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBEngineVersions?Action=DescribeDBEngineVersions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Engine":{},"EngineVersion":{},"DBParameterGroupFamily":{},"Filters":{},"MaxRecords":{},"Marker":{},"DefaultOnly":{},"ListSupportedCharacterSets":{},"ListSupportedTimezones":{}}'
```

`POST /#Action=DescribeDBEngineVersions`

Returns a list of the available DB engines.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBInstances?Action=DescribeDBInstances&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBInstances`

<p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>

<h3 id="getdescribedbinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|false|<p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>|
|Filters|query|[object]|false|<p>A filter that specifies one or more DB instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB instances created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:</p>|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous <code>DescribeDBInstances</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBInstances?Action=DescribeDBInstances&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBInstances`

<p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>

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

## GET_DescribeDBParameterGroups

<a id="opIdGET_DescribeDBParameterGroups"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBParameterGroups?Action=DescribeDBParameterGroups&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBParameterGroups`

Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.

<h3 id="getdescribedbparametergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupName|query|string|false|<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeDBParameterGroups|
|Version|2014-10-31|

<h3 id="getdescribedbparametergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupsMessage](#schemadbparametergroupsmessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBParameterGroups

<a id="opIdPOST_DescribeDBParameterGroups"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBParameterGroups?Action=DescribeDBParameterGroups&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupName":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBParameterGroups`

Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.

> Body parameter

```json
{
  "DBParameterGroupName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbparametergroups-parameters">Parameters</h3>

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
|body|body|[DescribeDBParameterGroupsMessage](#schemadescribedbparametergroupsmessage)|false|none|
|» DBParameterGroupName|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBParameterGroups|
|Version|2014-10-31|

<h3 id="postdescribedbparametergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupsMessage](#schemadbparametergroupsmessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBParameters

<a id="opIdGET_DescribeDBParameters"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBParameters?DBParameterGroupName=string&Action=DescribeDBParameters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBParameters`

Returns the detailed parameter list for a particular DB parameter group.

<h3 id="getdescribedbparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupName|query|string|true|<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>|
|Source|query|string|false|<p>The parameter types to return.</p> <p>Default: All parameter types returned</p> <p>Valid Values: <code>user \| system \| engine-default</code> </p>|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|An optional pagination token provided by a previous <code>DescribeDBParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeDBParameters|
|Version|2014-10-31|

<h3 id="getdescribedbparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupDetails](#schemadbparametergroupdetails)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDBParameters

<a id="opIdPOST_DescribeDBParameters"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBParameters?Action=DescribeDBParameters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupName":{},"Source":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBParameters`

Returns the detailed parameter list for a particular DB parameter group.

> Body parameter

```json
{
  "DBParameterGroupName": {},
  "Source": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribedbparameters-parameters">Parameters</h3>

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
|body|body|[DescribeDBParametersMessage](#schemadescribedbparametersmessage)|false|none|
|» DBParameterGroupName|body|object|true|none|
|» Source|body|object|false|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDBParameters|
|Version|2014-10-31|

<h3 id="postdescribedbparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupDetails](#schemadbparametergroupdetails)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDBSubnetGroups

<a id="opIdGET_DescribeDBSubnetGroups"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBSubnetGroups?Action=DescribeDBSubnetGroups&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDBSubnetGroups`

<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>

<h3 id="getdescribedbsubnetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|false|The name of the DB subnet group to return details for.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeDBSubnetGroups?Action=DescribeDBSubnetGroups&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeDBSubnetGroups`

<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultClusterParameters?DBParameterGroupFamily=string&Action=DescribeEngineDefaultClusterParameters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEngineDefaultClusterParameters`

Returns the default engine and system parameter information for the cluster database engine.

<h3 id="getdescribeenginedefaultclusterparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupFamily|query|string|true|The name of the DB cluster parameter group family to return engine parameter information for.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultClusterParameters?Action=DescribeEngineDefaultClusterParameters&Version=2014-10-31' \
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

## GET_DescribeEngineDefaultParameters

<a id="opIdGET_DescribeEngineDefaultParameters"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultParameters?DBParameterGroupFamily=string&Action=DescribeEngineDefaultParameters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEngineDefaultParameters`

Returns the default engine and system parameter information for the specified database engine.

<h3 id="getdescribeenginedefaultparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupFamily|query|string|true|The name of the DB parameter group family.|
|Filters|query|[object]|false|Not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeEngineDefaultParameters|
|Version|2014-10-31|

<h3 id="getdescribeenginedefaultparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEngineDefaultParametersResult](#schemadescribeenginedefaultparametersresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEngineDefaultParameters

<a id="opIdPOST_DescribeEngineDefaultParameters"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultParameters?Action=DescribeEngineDefaultParameters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupFamily":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEngineDefaultParameters`

Returns the default engine and system parameter information for the specified database engine.

> Body parameter

```json
{
  "DBParameterGroupFamily": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeenginedefaultparameters-parameters">Parameters</h3>

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
|body|body|[DescribeEngineDefaultParametersMessage](#schemadescribeenginedefaultparametersmessage)|false|none|
|» DBParameterGroupFamily|body|object|true|none|
|» Filters|body|object|false|none|
|» Name|body|object|true|none|
|» Values|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEngineDefaultParameters|
|Version|2014-10-31|

<h3 id="postdescribeenginedefaultparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEngineDefaultParametersResult](#schemadescribeenginedefaultparametersresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEventCategories

<a id="opIdGET_DescribeEventCategories"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEventCategories?Action=DescribeEventCategories&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEventCategories`

Displays a list of categories for all event source types, or, if specified, for a specified source type.

<h3 id="getdescribeeventcategories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceType|query|string|false|<p>The type of source that is generating the events.</p> <p>Valid values: db-instance \| db-parameter-group \| db-security-group \| db-snapshot</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEventCategories?Action=DescribeEventCategories&Version=2014-10-31' \
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEventSubscriptions?Action=DescribeEventSubscriptions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEventSubscriptions`

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>

<h3 id="getdescribeeventsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|false|The name of the event notification subscription you want to describe.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEventSubscriptions?Action=DescribeEventSubscriptions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEventSubscriptions`

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEvents`

Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

<h3 id="getdescribeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceIdentifier|query|string|false|<p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIdentifier is supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>|
|SourceType|query|string|false|The event source to retrieve events for. If no value is specified, all events are returned.|
|StartTime|query|string(date-time)|false|<p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>|
|EndTime|query|string(date-time)|false|<p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>|
|Duration|query|integer|false|<p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>|
|EventCategories|query|[object]|false|A list of event categories that trigger notifications for a event notification subscription.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceIdentifier":{},"SourceType":{},"StartTime":{},"EndTime":{},"Duration":{},"EventCategories":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEvents`

Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeGlobalClusters?Action=DescribeGlobalClusters&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeGlobalClusters`

Returns information about Neptune global database clusters. This API supports pagination.

<h3 id="getdescribeglobalclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|false|<p>The user-supplied DB cluster identifier. If this parameter is specified, only information about the specified DB cluster is returned. This parameter is not case-sensitive.</p> <p>Constraints: If supplied, must match an existing DB cluster identifier.</p>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination marker token is included in the response that you can use to retrieve the remaining results.</p> <p>Default: <code>100</code> </p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false|(<i>Optional</i>) A pagination token returned by a previous call to <code>DescribeGlobalClusters</code>. If this parameter is specified, the response will only include records beyond the marker, up to the number specified by <code>MaxRecords</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeGlobalClusters?Action=DescribeGlobalClusters&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeGlobalClusters`

Returns information about Neptune global database clusters. This API supports pagination.

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeOrderableDBInstanceOptions?Engine=string&Action=DescribeOrderableDBInstanceOptions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeOrderableDBInstanceOptions`

Returns a list of orderable DB instance options for the specified engine.

<h3 id="getdescribeorderabledbinstanceoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Engine|query|string|true|The name of the engine to retrieve DB instance options for.|
|EngineVersion|query|string|false|The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.|
|DBInstanceClass|query|string|false|The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.|
|LicenseModel|query|string|false|The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.|
|Vpc|query|boolean|false|The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.|
|Filters|query|[object]|false|This parameter is not currently supported.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
|Marker|query|string|false| An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeOrderableDBInstanceOptions?Action=DescribeOrderableDBInstanceOptions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Engine":{},"EngineVersion":{},"DBInstanceClass":{},"LicenseModel":{},"Vpc":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeOrderableDBInstanceOptions`

Returns a list of orderable DB instance options for the specified engine.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribePendingMaintenanceActions?Action=DescribePendingMaintenanceActions&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribePendingMaintenanceActions`

Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.

<h3 id="getdescribependingmaintenanceactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceIdentifier|query|string|false|The ARN of a resource to return pending maintenance actions for.|
|Filters|query|[object]|false|<p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>|
|Marker|query|string|false| An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>.|
|MaxRecords|query|integer|false|<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribePendingMaintenanceActions?Action=DescribePendingMaintenanceActions&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceIdentifier":{},"Filters":{},"Marker":{},"MaxRecords":{}}'
```

`POST /#Action=DescribePendingMaintenanceActions`

Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.

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

## GET_DescribeValidDBInstanceModifications

<a id="opIdGET_DescribeValidDBInstanceModifications"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeValidDBInstanceModifications?DBInstanceIdentifier=string&Action=DescribeValidDBInstanceModifications&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeValidDBInstanceModifications`

You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.

<h3 id="getdescribevaliddbinstancemodifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|The customer identifier or the ARN of your DB instance.|
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
|Action|DescribeValidDBInstanceModifications|
|Version|2014-10-31|

<h3 id="getdescribevaliddbinstancemodifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeValidDBInstanceModificationsResult](#schemadescribevaliddbinstancemodificationsresult)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeValidDBInstanceModifications

<a id="opIdPOST_DescribeValidDBInstanceModifications"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=DescribeValidDBInstanceModifications?Action=DescribeValidDBInstanceModifications&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{}}'
```

`POST /#Action=DescribeValidDBInstanceModifications`

You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.

> Body parameter

```json
{
  "DBInstanceIdentifier": {}
}
```

<h3 id="postdescribevaliddbinstancemodifications-parameters">Parameters</h3>

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
|body|body|[DescribeValidDBInstanceModificationsMessage](#schemadescribevaliddbinstancemodificationsmessage)|false|none|
|» DBInstanceIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeValidDBInstanceModifications|
|Version|2014-10-31|

<h3 id="postdescribevaliddbinstancemodifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeValidDBInstanceModificationsResult](#schemadescribevaliddbinstancemodificationsresult)|
|480|480|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|481|481|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_FailoverDBCluster

<a id="opIdGET_FailoverDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=FailoverDBCluster?Action=FailoverDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=FailoverDBCluster`

<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>

<h3 id="getfailoverdbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|false|<p>A DB cluster identifier to force a failover for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>|
|TargetDBInstanceIdentifier|query|string|false|<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Read Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=FailoverDBCluster?Action=FailoverDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"TargetDBInstanceIdentifier":{}}'
```

`POST /#Action=FailoverDBCluster`

<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>

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

## GET_FailoverGlobalCluster

<a id="opIdGET_FailoverGlobalCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=FailoverGlobalCluster?GlobalClusterIdentifier=string&TargetDbClusterIdentifier=string&Action=FailoverGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=FailoverGlobalCluster`

<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>

<h3 id="getfailoverglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|<p>Identifier of the Neptune global database that should be failed over. The identifier is the unique key assigned by the user when the Neptune global database was created. In other words, it's the name of the global database that you want to fail over.</p> <p>Constraints: Must match the identifier of an existing Neptune global database.</p>|
|TargetDbClusterIdentifier|query|string|true|The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database.|
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
|Action|FailoverGlobalCluster|
|Version|2014-10-31|

<h3 id="getfailoverglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FailoverGlobalClusterResult](#schemafailoverglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_FailoverGlobalCluster

<a id="opIdPOST_FailoverGlobalCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=FailoverGlobalCluster?Action=FailoverGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"TargetDbClusterIdentifier":{}}'
```

`POST /#Action=FailoverGlobalCluster`

<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
  "TargetDbClusterIdentifier": {}
}
```

<h3 id="postfailoverglobalcluster-parameters">Parameters</h3>

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
|body|body|[FailoverGlobalClusterMessage](#schemafailoverglobalclustermessage)|false|none|
|» GlobalClusterIdentifier|body|object|true|none|
|» TargetDbClusterIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|FailoverGlobalCluster|
|Version|2014-10-31|

<h3 id="postfailoverglobalcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FailoverGlobalClusterResult](#schemafailoverglobalclusterresult)|
|480|480|GlobalClusterNotFoundFault|[GlobalClusterNotFoundFault](#schemaglobalclusternotfoundfault)|
|481|481|InvalidGlobalClusterStateFault|[InvalidGlobalClusterStateFault](#schemainvalidglobalclusterstatefault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|483|483|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTagsForResource

<a id="opIdGET_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ListTagsForResource?ResourceName=string&Action=ListTagsForResource&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTagsForResource`

Lists all tags on an Amazon Neptune resource.

<h3 id="getlisttagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ListTagsForResource?Action=ListTagsForResource&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"Filters":{}}'
```

`POST /#Action=ListTagsForResource`

Lists all tags on an Amazon Neptune resource.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBCluster?DBClusterIdentifier=string&Action=ModifyDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBCluster`

Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

<h3 id="getmodifydbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|<p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>|
|NewDBClusterIdentifier|query|string|false|<p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>|
|ApplyImmediately|query|boolean|false|<p>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set to <code>false</code>, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects <code>NewDBClusterIdentifier</code> values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>|
|BackupRetentionPeriod|query|integer|false|<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>|
|DBClusterParameterGroupName|query|string|false|The name of the DB cluster parameter group to use for the DB cluster.|
|VpcSecurityGroupIds|query|[object]|false|A list of VPC security groups that the DB cluster will belong to.|
|Port|query|integer|false|<p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>|
|MasterUserPassword|query|string|false|Not supported by Neptune.|
|OptionGroupName|query|string|false| <i>Not supported by Neptune.</i> |
|PreferredBackupWindow|query|string|false|<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>|
|PreferredMaintenanceWindow|query|string|false|<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>|
|EnableIAMDatabaseAuthentication|query|boolean|false|<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>|
|CloudwatchLogsExportConfiguration|query|object|false|The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.|
|EngineVersion|query|string|false|<p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to true.</p> <p>For a list of valid engine versions, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html">Engine Releases for Amazon Neptune</a>, or call <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.</p>|
|AllowMajorVersionUpgrade|query|boolean|false|<p>A value that indicates whether upgrades between different major versions are allowed.</p> <p>Constraints: You must set the allow-major-version-upgrade flag when providing an <code>EngineVersion</code> parameter that uses a different major version than the DB cluster's current version.</p>|
|DBInstanceParameterGroupName|query|string|false|<p>The name of the DB parameter group to apply to all instances of the DB cluster. </p> <note> <p>When you apply a parameter group using <code>DBInstanceParameterGroupName</code>, parameter changes aren't applied during the next maintenance window but instead are applied immediately.</p> </note> <p>Default: The existing name setting</p> <p>Constraints:</p> <ul> <li> <p>The DB parameter group must be in the same DB parameter group family as the target DB cluster version.</p> </li> <li> <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with the <code>AllowMajorVersionUpgrade</code> parameter.</p> </li> </ul>|
|DeletionProtection|query|boolean|false|A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.|
|CopyTagsToSnapshot|query|boolean|false| <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> |
|ServerlessV2ScalingConfiguration|query|object|false|none|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBCluster?Action=ModifyDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"NewDBClusterIdentifier":{},"ApplyImmediately":{},"BackupRetentionPeriod":{},"DBClusterParameterGroupName":{},"VpcSecurityGroupIds":{},"Port":{},"MasterUserPassword":{},"OptionGroupName":{},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"EnableIAMDatabaseAuthentication":{},"CloudwatchLogsExportConfiguration":{"EnableLogTypes":{},"DisableLogTypes":{}},"EngineVersion":{},"AllowMajorVersionUpgrade":{},"DBInstanceParameterGroupName":{},"DeletionProtection":{},"CopyTagsToSnapshot":{},"ServerlessV2ScalingConfiguration":{"MinCapacity":{},"MaxCapacity":{}}}'
```

`POST /#Action=ModifyDBCluster`

Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

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
  "OptionGroupName": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "EnableIAMDatabaseAuthentication": {},
  "CloudwatchLogsExportConfiguration": {
    "EnableLogTypes": {},
    "DisableLogTypes": {}
  },
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {},
  "DBInstanceParameterGroupName": {},
  "DeletionProtection": {},
  "CopyTagsToSnapshot": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
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
|» OptionGroupName|body|object|false|none|
|» PreferredBackupWindow|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» EnableIAMDatabaseAuthentication|body|object|false|none|
|» CloudwatchLogsExportConfiguration|body|object|false|none|
|» » EnableLogTypes|body|object|false|none|
|» » DisableLogTypes|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» AllowMajorVersionUpgrade|body|object|false|none|
|» DBInstanceParameterGroupName|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» CopyTagsToSnapshot|body|object|false|none|
|» ServerlessV2ScalingConfiguration|body|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|

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

## GET_ModifyDBClusterEndpoint

<a id="opIdGET_ModifyDBClusterEndpoint"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBClusterEndpoint?DBClusterEndpointIdentifier=string&Action=ModifyDBClusterEndpoint&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBClusterEndpoint`

Modifies the properties of an endpoint in an Amazon Neptune DB cluster.

<h3 id="getmodifydbclusterendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|query|string|true|The identifier of the endpoint to modify. This parameter is stored as a lowercase string.|
|EndpointType|query|string|false|The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.|
|StaticMembers|query|[[String](#schemastring)]|false|List of DB instance identifiers that are part of the custom endpoint group.|
|ExcludedMembers|query|[[String](#schemastring)]|false|List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.|
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
|Action|ModifyDBClusterEndpoint|
|Version|2014-10-31|

<h3 id="getmodifydbclusterendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBClusterEndpointOutput](#schemamodifydbclusterendpointoutput)|
|480|480|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|481|481|InvalidDBClusterEndpointStateFault|[InvalidDBClusterEndpointStateFault](#schemainvaliddbclusterendpointstatefault)|
|482|482|DBClusterEndpointNotFoundFault|[DBClusterEndpointNotFoundFault](#schemadbclusterendpointnotfoundfault)|
|483|483|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|484|484|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBClusterEndpoint

<a id="opIdPOST_ModifyDBClusterEndpoint"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBClusterEndpoint?Action=ModifyDBClusterEndpoint&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterEndpointIdentifier":{},"EndpointType":{},"StaticMembers":{},"ExcludedMembers":{}}'
```

`POST /#Action=ModifyDBClusterEndpoint`

Modifies the properties of an endpoint in an Amazon Neptune DB cluster.

> Body parameter

```json
{
  "DBClusterEndpointIdentifier": {},
  "EndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {}
}
```

<h3 id="postmodifydbclusterendpoint-parameters">Parameters</h3>

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
|body|body|[ModifyDBClusterEndpointMessage](#schemamodifydbclusterendpointmessage)|false|none|
|» DBClusterEndpointIdentifier|body|object|true|none|
|» EndpointType|body|object|false|none|
|» StaticMembers|body|object|false|none|
|» ExcludedMembers|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyDBClusterEndpoint|
|Version|2014-10-31|

<h3 id="postmodifydbclusterendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDBClusterEndpointOutput](#schemamodifydbclusterendpointoutput)|
|480|480|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|
|481|481|InvalidDBClusterEndpointStateFault|[InvalidDBClusterEndpointStateFault](#schemainvaliddbclusterendpointstatefault)|
|482|482|DBClusterEndpointNotFoundFault|[DBClusterEndpointNotFoundFault](#schemadbclusterendpointnotfoundfault)|
|483|483|DBInstanceNotFoundFault|[DBInstanceNotFoundFault](#schemadbinstancenotfoundfault)|
|484|484|InvalidDBInstanceStateFault|[InvalidDBInstanceStateFault](#schemainvaliddbinstancestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBClusterParameterGroup

<a id="opIdGET_ModifyDBClusterParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBClusterParameterGroup?DBClusterParameterGroupName=string&Parameters=%7B%22ParameterName%22%3A%7B%7D%2C%22ParameterValue%22%3A%7B%7D%2C%22Description%22%3A%7B%7D%2C%22Source%22%3A%7B%7D%2C%22ApplyType%22%3A%7B%7D%2C%22DataType%22%3A%7B%7D%2C%22AllowedValues%22%3A%7B%7D%2C%22IsModifiable%22%3A%7B%7D%2C%22MinimumEngineVersion%22%3A%7B%7D%2C%22ApplyMethod%22%3A%7B%7D%7D&Action=ModifyDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBClusterParameterGroup`

<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

<h3 id="getmodifydbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|The name of the DB cluster parameter group to modify.|
|Parameters|query|[object]|true|A list of parameters in the DB cluster parameter group to modify.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBClusterParameterGroup?Action=ModifyDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"Parameters":{}}'
```

`POST /#Action=ModifyDBClusterParameterGroup`

<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBClusterSnapshotAttribute?DBClusterSnapshotIdentifier=string&AttributeName=string&Action=ModifyDBClusterSnapshotAttribute&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBClusterSnapshotAttribute`

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>

<h3 id="getmodifydbclustersnapshotattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|query|string|true|The identifier for the DB cluster snapshot to modify the attributes for.|
|AttributeName|query|string|true|<p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p>|
|ValuesToAdd|query|[object]|false|<p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any Amazon account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts.</p>|
|ValuesToRemove|query|[object]|false|<p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account identifiers, or <code>all</code> to remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBClusterSnapshotAttribute?Action=ModifyDBClusterSnapshotAttribute&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterSnapshotIdentifier":{},"AttributeName":{},"ValuesToAdd":{},"ValuesToRemove":{}}'
```

`POST /#Action=ModifyDBClusterSnapshotAttribute`

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBInstance?DBInstanceIdentifier=string&Action=ModifyDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBInstance`

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.

<h3 id="getmodifydbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|<p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>|
|AllocatedStorage|query|integer|false|Not supported by Neptune.|
|DBInstanceClass|query|string|false|<p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.</p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>|
|DBSubnetGroupName|query|string|false|<p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC.</p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify <code>true</code> for the <code>ApplyImmediately</code> parameter.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>|
|DBSecurityGroups|query|[object]|false|<p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>|
|VpcSecurityGroupIds|query|[object]|false|<p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>|
|ApplyImmediately|query|boolean|false|<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p> <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot.</p> <p>Default: <code>false</code> </p>|
|MasterUserPassword|query|string|false|Not supported by Neptune.|
|DBParameterGroupName|query|string|false|<p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>|
|BackupRetentionPeriod|query|integer|false|<p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: Uses existing setting</p>|
|PreferredBackupWindow|query|string|false|<p> The daily time range during which automated backups are created if automated backups are enabled.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>|
|PreferredMaintenanceWindow|query|string|false|<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon \| Tue \| Wed \| Thu \| Fri \| Sat \| Sun</p> <p>Constraints: Must be at least 30 minutes</p>|
|MultiAZ|query|boolean|false|Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.|
|EngineVersion|query|string|false|The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the <a>ApplyPendingMaintenanceAction</a> API.|
|AllowMajorVersionUpgrade|query|boolean|false|Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.|
|AutoMinorVersionUpgrade|query|boolean|false| Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version.|
|LicenseModel|query|string|false|Not supported by Neptune.|
|Iops|query|integer|false|<p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>|
|OptionGroupName|query|string|false| <i>(Not supported by Neptune)</i> |
|NewDBInstanceIdentifier|query|string|false|<p> The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set <code>Apply Immediately</code> to true, or will occur during the next maintenance window if <code>Apply Immediately</code> to false. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>|
|StorageType|query|string|false|Not supported.|
|TdeCredentialArn|query|string|false|The ARN from the key store with which to associate the instance for TDE encryption.|
|TdeCredentialPassword|query|string|false|The password for the given ARN from the key store in order to access the device.|
|CACertificateIdentifier|query|string|false|Indicates the certificate that needs to be associated with the instance.|
|Domain|query|string|false|Not supported.|
|CopyTagsToSnapshot|query|boolean|false|True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.|
|MonitoringInterval|query|integer|false|<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>|
|DBPortNumber|query|integer|false|<p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> Default: <code>8182</code> </p>|
|PubliclyAccessible|query|boolean|false|This flag should no longer be used.|
|MonitoringRoleArn|query|string|false|<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>|
|DomainIAMRoleName|query|string|false|Not supported|
|PromotionTier|query|integer|false|<p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>|
|EnableIAMDatabaseAuthentication|query|boolean|false|<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <p>Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: <code>false</code> </p>|
|EnablePerformanceInsights|query|boolean|false| <i>(Not supported by Neptune)</i> |
|PerformanceInsightsKMSKeyId|query|string|false| <i>(Not supported by Neptune)</i> |
|CloudwatchLogsExportConfiguration|query|object|false|The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.|
|DeletionProtection|query|boolean|false|A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.|
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
|489|489|ProvisionedIopsNotAvailableInAZFault|[ProvisionedIopsNotAvailableInAZFault](#schemaprovisionediopsnotavailableinazfault)|
|490|490|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|491|491|DBUpgradeDependencyFailureFault|[DBUpgradeDependencyFailureFault](#schemadbupgradedependencyfailurefault)|
|492|492|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|493|493|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|494|494|CertificateNotFoundFault|[CertificateNotFoundFault](#schemacertificatenotfoundfault)|
|495|495|DomainNotFoundFault|[DomainNotFoundFault](#schemadomainnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBInstance

<a id="opIdPOST_ModifyDBInstance"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBInstance?Action=ModifyDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"AllocatedStorage":{},"DBInstanceClass":{},"DBSubnetGroupName":{},"DBSecurityGroups":{},"VpcSecurityGroupIds":{},"ApplyImmediately":{},"MasterUserPassword":{},"DBParameterGroupName":{},"BackupRetentionPeriod":{},"PreferredBackupWindow":{},"PreferredMaintenanceWindow":{},"MultiAZ":{},"EngineVersion":{},"AllowMajorVersionUpgrade":{},"AutoMinorVersionUpgrade":{},"LicenseModel":{},"Iops":{},"OptionGroupName":{},"NewDBInstanceIdentifier":{},"StorageType":{},"TdeCredentialArn":{},"TdeCredentialPassword":{},"CACertificateIdentifier":{},"Domain":{},"CopyTagsToSnapshot":{},"MonitoringInterval":{},"DBPortNumber":{},"PubliclyAccessible":{},"MonitoringRoleArn":{},"DomainIAMRoleName":{},"PromotionTier":{},"EnableIAMDatabaseAuthentication":{},"EnablePerformanceInsights":{},"PerformanceInsightsKMSKeyId":{},"CloudwatchLogsExportConfiguration":{"EnableLogTypes":{},"DisableLogTypes":{}},"DeletionProtection":{}}'
```

`POST /#Action=ModifyDBInstance`

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.

> Body parameter

```json
{
  "DBInstanceIdentifier": {},
  "AllocatedStorage": {},
  "DBInstanceClass": {},
  "DBSubnetGroupName": {},
  "DBSecurityGroups": {},
  "VpcSecurityGroupIds": {},
  "ApplyImmediately": {},
  "MasterUserPassword": {},
  "DBParameterGroupName": {},
  "BackupRetentionPeriod": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {},
  "AutoMinorVersionUpgrade": {},
  "LicenseModel": {},
  "Iops": {},
  "OptionGroupName": {},
  "NewDBInstanceIdentifier": {},
  "StorageType": {},
  "TdeCredentialArn": {},
  "TdeCredentialPassword": {},
  "CACertificateIdentifier": {},
  "Domain": {},
  "CopyTagsToSnapshot": {},
  "MonitoringInterval": {},
  "DBPortNumber": {},
  "PubliclyAccessible": {},
  "MonitoringRoleArn": {},
  "DomainIAMRoleName": {},
  "PromotionTier": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {},
  "CloudwatchLogsExportConfiguration": {
    "EnableLogTypes": {},
    "DisableLogTypes": {}
  },
  "DeletionProtection": {}
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
|» AllocatedStorage|body|object|false|none|
|» DBInstanceClass|body|object|false|none|
|» DBSubnetGroupName|body|object|false|none|
|» DBSecurityGroups|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» ApplyImmediately|body|object|false|none|
|» MasterUserPassword|body|object|false|none|
|» DBParameterGroupName|body|object|false|none|
|» BackupRetentionPeriod|body|object|false|none|
|» PreferredBackupWindow|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» MultiAZ|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» AllowMajorVersionUpgrade|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» LicenseModel|body|object|false|none|
|» Iops|body|object|false|none|
|» OptionGroupName|body|object|false|none|
|» NewDBInstanceIdentifier|body|object|false|none|
|» StorageType|body|object|false|none|
|» TdeCredentialArn|body|object|false|none|
|» TdeCredentialPassword|body|object|false|none|
|» CACertificateIdentifier|body|object|false|none|
|» Domain|body|object|false|none|
|» CopyTagsToSnapshot|body|object|false|none|
|» MonitoringInterval|body|object|false|none|
|» DBPortNumber|body|object|false|none|
|» PubliclyAccessible|body|object|false|none|
|» MonitoringRoleArn|body|object|false|none|
|» DomainIAMRoleName|body|object|false|none|
|» PromotionTier|body|object|false|none|
|» EnableIAMDatabaseAuthentication|body|object|false|none|
|» EnablePerformanceInsights|body|object|false|none|
|» PerformanceInsightsKMSKeyId|body|object|false|none|
|» CloudwatchLogsExportConfiguration|body|object|false|none|
|» » EnableLogTypes|body|object|false|none|
|» » DisableLogTypes|body|object|false|none|
|» DeletionProtection|body|object|false|none|

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
|489|489|ProvisionedIopsNotAvailableInAZFault|[ProvisionedIopsNotAvailableInAZFault](#schemaprovisionediopsnotavailableinazfault)|
|490|490|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|491|491|DBUpgradeDependencyFailureFault|[DBUpgradeDependencyFailureFault](#schemadbupgradedependencyfailurefault)|
|492|492|StorageTypeNotSupportedFault|[StorageTypeNotSupportedFault](#schemastoragetypenotsupportedfault)|
|493|493|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|494|494|CertificateNotFoundFault|[CertificateNotFoundFault](#schemacertificatenotfoundfault)|
|495|495|DomainNotFoundFault|[DomainNotFoundFault](#schemadomainnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBParameterGroup

<a id="opIdGET_ModifyDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBParameterGroup?DBParameterGroupName=string&Parameters=%7B%22ParameterName%22%3A%7B%7D%2C%22ParameterValue%22%3A%7B%7D%2C%22Description%22%3A%7B%7D%2C%22Source%22%3A%7B%7D%2C%22ApplyType%22%3A%7B%7D%2C%22DataType%22%3A%7B%7D%2C%22AllowedValues%22%3A%7B%7D%2C%22IsModifiable%22%3A%7B%7D%2C%22MinimumEngineVersion%22%3A%7B%7D%2C%22ApplyMethod%22%3A%7B%7D%7D&Action=ModifyDBParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBParameterGroup`

<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

<h3 id="getmodifydbparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupName|query|string|true|<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>|
|Parameters|query|[object]|true|<p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for the application method): <code>immediate \| pending-reboot</code> </p> <note> <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p> </note>|
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
|Action|ModifyDBParameterGroup|
|Version|2014-10-31|

<h3 id="getmodifydbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupNameMessage](#schemadbparametergroupnamemessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyDBParameterGroup

<a id="opIdPOST_ModifyDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBParameterGroup?Action=ModifyDBParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupName":{},"Parameters":{}}'
```

`POST /#Action=ModifyDBParameterGroup`

<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

> Body parameter

```json
{
  "DBParameterGroupName": {},
  "Parameters": {}
}
```

<h3 id="postmodifydbparametergroup-parameters">Parameters</h3>

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
|body|body|[ModifyDBParameterGroupMessage](#schemamodifydbparametergroupmessage)|false|none|
|» DBParameterGroupName|body|object|true|none|
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
|Action|ModifyDBParameterGroup|
|Version|2014-10-31|

<h3 id="postmodifydbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupNameMessage](#schemadbparametergroupnamemessage)|
|480|480|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|
|481|481|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyDBSubnetGroup

<a id="opIdGET_ModifyDBSubnetGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBSubnetGroup?DBSubnetGroupName=string&SubnetIds=%7B%7D&Action=ModifyDBSubnetGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyDBSubnetGroup`

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

<h3 id="getmodifydbsubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBSubnetGroupName|query|string|true|<p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|DBSubnetGroupDescription|query|string|false|The description for the DB subnet group.|
|SubnetIds|query|[object]|true|The EC2 subnet IDs for the DB subnet group.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyDBSubnetGroup?Action=ModifyDBSubnetGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBSubnetGroupName":{},"DBSubnetGroupDescription":{},"SubnetIds":{}}'
```

`POST /#Action=ModifyDBSubnetGroup`

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyEventSubscription?SubscriptionName=string&Action=ModifyEventSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyEventSubscription`

<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>

<h3 id="getmodifyeventsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the event notification subscription.|
|SnsTopicArn|query|string|false|The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.|
|SourceType|query|string|false|<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: db-instance \| db-parameter-group \| db-security-group \| db-snapshot</p>|
|EventCategories|query|[object]|false| A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.|
|Enabled|query|boolean|false| A Boolean value; set to <b>true</b> to activate the subscription.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyEventSubscription?Action=ModifyEventSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"SnsTopicArn":{},"SourceType":{},"EventCategories":{},"Enabled":{}}'
```

`POST /#Action=ModifyEventSubscription`

<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyGlobalCluster?GlobalClusterIdentifier=string&Action=ModifyGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyGlobalCluster`

Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.

<h3 id="getmodifyglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|<p>The DB cluster identifier for the global cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints: Must match the identifier of an existing global database cluster.</p>|
|NewGlobalClusterIdentifier|query|string|false|<p>A new cluster identifier to assign to the global database. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>|
|DeletionProtection|query|boolean|false|Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled.|
|EngineVersion|query|string|false|<p>The version number of the database engine to which you want to upgrade. Changing this parameter will result in an outage. The change is applied during the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p> <p>To list all of the available Neptune engine versions, use the following command:</p>|
|AllowMajorVersionUpgrade|query|boolean|false|<p>A value that indicates whether major version upgrades are allowed.</p> <p>Constraints: You must allow major version upgrades if you specify a value for the <code>EngineVersion</code> parameter that is a different major version than the DB cluster's current version.</p> <p>If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade.</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ModifyGlobalCluster?Action=ModifyGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"NewGlobalClusterIdentifier":{},"DeletionProtection":{},"EngineVersion":{},"AllowMajorVersionUpgrade":{}}'
```

`POST /#Action=ModifyGlobalCluster`

Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.

> Body parameter

```json
{
  "GlobalClusterIdentifier": {},
  "NewGlobalClusterIdentifier": {},
  "DeletionProtection": {},
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {}
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
|» EngineVersion|body|object|false|none|
|» AllowMajorVersionUpgrade|body|object|false|none|

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

## GET_PromoteReadReplicaDBCluster

<a id="opIdGET_PromoteReadReplicaDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=PromoteReadReplicaDBCluster?DBClusterIdentifier=string&Action=PromoteReadReplicaDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PromoteReadReplicaDBCluster`

Not supported.

<h3 id="getpromotereadreplicadbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|Not supported.|
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
|Action|PromoteReadReplicaDBCluster|
|Version|2014-10-31|

<h3 id="getpromotereadreplicadbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromoteReadReplicaDBClusterResult](#schemapromotereadreplicadbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PromoteReadReplicaDBCluster

<a id="opIdPOST_PromoteReadReplicaDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=PromoteReadReplicaDBCluster?Action=PromoteReadReplicaDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{}}'
```

`POST /#Action=PromoteReadReplicaDBCluster`

Not supported.

> Body parameter

```json
{
  "DBClusterIdentifier": {}
}
```

<h3 id="postpromotereadreplicadbcluster-parameters">Parameters</h3>

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
|body|body|[PromoteReadReplicaDBClusterMessage](#schemapromotereadreplicadbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PromoteReadReplicaDBCluster|
|Version|2014-10-31|

<h3 id="postpromotereadreplicadbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromoteReadReplicaDBClusterResult](#schemapromotereadreplicadbclusterresult)|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RebootDBInstance

<a id="opIdGET_RebootDBInstance"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RebootDBInstance?DBInstanceIdentifier=string&Action=RebootDBInstance&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RebootDBInstance`

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>

<h3 id="getrebootdbinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|query|string|true|<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>|
|ForceFailover|query|boolean|false|<p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for MultiAZ.</p>|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RebootDBInstance?Action=RebootDBInstance&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBInstanceIdentifier":{},"ForceFailover":{}}'
```

`POST /#Action=RebootDBInstance`

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveFromGlobalCluster?GlobalClusterIdentifier=string&DbClusterIdentifier=string&Action=RemoveFromGlobalCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveFromGlobalCluster`

Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.

<h3 id="getremovefromglobalcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|query|string|true|The identifier of the Neptune global database from which to detach the specified Neptune DB cluster.|
|DbClusterIdentifier|query|string|true|The Amazon Resource Name (ARN) identifying the cluster to be detached from the Neptune global database cluster.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveFromGlobalCluster?Action=RemoveFromGlobalCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalClusterIdentifier":{},"DbClusterIdentifier":{}}'
```

`POST /#Action=RemoveFromGlobalCluster`

Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.

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

## GET_RemoveRoleFromDBCluster

<a id="opIdGET_RemoveRoleFromDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveRoleFromDBCluster?DBClusterIdentifier=string&RoleArn=string&Action=RemoveRoleFromDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveRoleFromDBCluster`

Disassociates an Identity and Access Management (IAM) role from a DB cluster.

<h3 id="getremoverolefromdbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|The name of the DB cluster to disassociate the IAM role from.|
|RoleArn|query|string|true|The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.|
|FeatureName|query|string|false|The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.|
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
|Action|RemoveRoleFromDBCluster|
|Version|2014-10-31|

<h3 id="getremoverolefromdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|DBClusterRoleNotFoundFault|[DBClusterRoleNotFoundFault](#schemadbclusterrolenotfoundfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveRoleFromDBCluster

<a id="opIdPOST_RemoveRoleFromDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveRoleFromDBCluster?Action=RemoveRoleFromDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"RoleArn":{},"FeatureName":{}}'
```

`POST /#Action=RemoveRoleFromDBCluster`

Disassociates an Identity and Access Management (IAM) role from a DB cluster.

> Body parameter

```json
{
  "DBClusterIdentifier": {},
  "RoleArn": {},
  "FeatureName": {}
}
```

<h3 id="postremoverolefromdbcluster-parameters">Parameters</h3>

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
|body|body|[RemoveRoleFromDBClusterMessage](#schemaremoverolefromdbclustermessage)|false|none|
|» DBClusterIdentifier|body|object|true|none|
|» RoleArn|body|object|true|none|
|» FeatureName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemoveRoleFromDBCluster|
|Version|2014-10-31|

<h3 id="postremoverolefromdbcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DBClusterNotFoundFault|[DBClusterNotFoundFault](#schemadbclusternotfoundfault)|
|481|481|DBClusterRoleNotFoundFault|[DBClusterRoleNotFoundFault](#schemadbclusterrolenotfoundfault)|
|482|482|InvalidDBClusterStateFault|[InvalidDBClusterStateFault](#schemainvaliddbclusterstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveSourceIdentifierFromSubscription

<a id="opIdGET_RemoveSourceIdentifierFromSubscription"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveSourceIdentifierFromSubscription?SubscriptionName=string&SourceIdentifier=string&Action=RemoveSourceIdentifierFromSubscription&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveSourceIdentifierFromSubscription`

Removes a source identifier from an existing event notification subscription.

<h3 id="getremovesourceidentifierfromsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionName|query|string|true|The name of the event notification subscription you want to remove a source identifier from.|
|SourceIdentifier|query|string|true| The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security group.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveSourceIdentifierFromSubscription?Action=RemoveSourceIdentifierFromSubscription&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionName":{},"SourceIdentifier":{}}'
```

`POST /#Action=RemoveSourceIdentifierFromSubscription`

Removes a source identifier from an existing event notification subscription.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveTagsFromResource?ResourceName=string&TagKeys=string&Action=RemoveTagsFromResource&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveTagsFromResource`

Removes metadata tags from an Amazon Neptune resource.

<h3 id="getremovetagsfromresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RemoveTagsFromResource?Action=RemoveTagsFromResource&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"TagKeys":{}}'
```

`POST /#Action=RemoveTagsFromResource`

Removes metadata tags from an Amazon Neptune resource.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ResetDBClusterParameterGroup?DBClusterParameterGroupName=string&Action=ResetDBClusterParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ResetDBClusterParameterGroup`

<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>

<h3 id="getresetdbclusterparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|query|string|true|The name of the DB cluster parameter group to reset.|
|ResetAllParameters|query|boolean|false|A value that is set to <code>true</code> to reset all parameters in the DB cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.|
|Parameters|query|[object]|false|A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ResetDBClusterParameterGroup?Action=ResetDBClusterParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterParameterGroupName":{},"ResetAllParameters":{},"Parameters":{}}'
```

`POST /#Action=ResetDBClusterParameterGroup`

<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>

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

## GET_ResetDBParameterGroup

<a id="opIdGET_ResetDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ResetDBParameterGroup?DBParameterGroupName=string&Action=ResetDBParameterGroup&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ResetDBParameterGroup`

Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.

<h3 id="getresetdbparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBParameterGroupName|query|string|true|<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBParameterGroup.</p> </li> </ul>|
|ResetAllParameters|query|boolean|false|<p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters in the DB parameter group to default values.</p> <p>Default: <code>true</code> </p>|
|Parameters|query|[object]|false|<p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>|
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
|Action|ResetDBParameterGroup|
|Version|2014-10-31|

<h3 id="getresetdbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupNameMessage](#schemadbparametergroupnamemessage)|
|480|480|InvalidDBParameterGroupStateFault|[InvalidDBParameterGroupStateFault](#schemainvaliddbparametergroupstatefault)|
|481|481|DBParameterGroupNotFoundFault|[DBParameterGroupNotFoundFault](#schemadbparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ResetDBParameterGroup

<a id="opIdPOST_ResetDBParameterGroup"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=ResetDBParameterGroup?Action=ResetDBParameterGroup&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBParameterGroupName":{},"ResetAllParameters":{},"Parameters":{}}'
```

`POST /#Action=ResetDBParameterGroup`

Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.

> Body parameter

```json
{
  "DBParameterGroupName": {},
  "ResetAllParameters": {},
  "Parameters": {}
}
```

<h3 id="postresetdbparametergroup-parameters">Parameters</h3>

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
|body|body|[ResetDBParameterGroupMessage](#schemaresetdbparametergroupmessage)|false|none|
|» DBParameterGroupName|body|object|true|none|
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
|Action|ResetDBParameterGroup|
|Version|2014-10-31|

<h3 id="postresetdbparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DBParameterGroupNameMessage](#schemadbparametergroupnamemessage)|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RestoreDBClusterFromSnapshot?DBClusterIdentifier=string&SnapshotIdentifier=string&Engine=string&Action=RestoreDBClusterFromSnapshot&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RestoreDBClusterFromSnapshot`

<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>

<h3 id="getrestoredbclusterfromsnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AvailabilityZones|query|[object]|false|Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.|
|DBClusterIdentifier|query|string|true|<p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>|
|SnapshotIdentifier|query|string|true|<p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>|
|Engine|query|string|true|<p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>|
|EngineVersion|query|string|false|The version of the database engine to use for the new DB cluster.|
|Port|query|integer|false|<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>|
|DBSubnetGroupName|query|string|false|<p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|DatabaseName|query|string|false|Not supported.|
|OptionGroupName|query|string|false| <i>(Not supported by Neptune)</i> |
|VpcSecurityGroupIds|query|[object]|false|A list of VPC security groups that the new DB cluster will belong to.|
|Tags|query|[object]|false|The tags to be assigned to the restored DB cluster.|
|KmsKeyId|query|string|false|<p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>|
|EnableIAMDatabaseAuthentication|query|boolean|false|<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>|
|EnableCloudwatchLogsExports|query|[[String](#schemastring)]|false|The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.|
|DBClusterParameterGroupName|query|string|false|<p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>|
|DeletionProtection|query|boolean|false|A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. |
|CopyTagsToSnapshot|query|boolean|false| <i>If set to <code>true</code>, tags are copied to any snapshot of the restored DB cluster that is created.</i> |
|ServerlessV2ScalingConfiguration|query|object|false|none|
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
|495|495|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|496|496|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|497|497|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RestoreDBClusterFromSnapshot

<a id="opIdPOST_RestoreDBClusterFromSnapshot"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RestoreDBClusterFromSnapshot?Action=RestoreDBClusterFromSnapshot&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AvailabilityZones":{},"DBClusterIdentifier":{},"SnapshotIdentifier":{},"Engine":{},"EngineVersion":{},"Port":{},"DBSubnetGroupName":{},"DatabaseName":{},"OptionGroupName":{},"VpcSecurityGroupIds":{},"Tags":{},"KmsKeyId":{},"EnableIAMDatabaseAuthentication":{},"EnableCloudwatchLogsExports":{},"DBClusterParameterGroupName":{},"DeletionProtection":{},"CopyTagsToSnapshot":{},"ServerlessV2ScalingConfiguration":{"MinCapacity":{},"MaxCapacity":{}}}'
```

`POST /#Action=RestoreDBClusterFromSnapshot`

<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>

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
  "DatabaseName": {},
  "OptionGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnableCloudwatchLogsExports": {},
  "DBClusterParameterGroupName": {},
  "DeletionProtection": {},
  "CopyTagsToSnapshot": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
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
|» DatabaseName|body|object|false|none|
|» OptionGroupName|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» EnableIAMDatabaseAuthentication|body|object|false|none|
|» EnableCloudwatchLogsExports|body|object|false|none|
|» DBClusterParameterGroupName|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» CopyTagsToSnapshot|body|object|false|none|
|» ServerlessV2ScalingConfiguration|body|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|

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
|495|495|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|496|496|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|497|497|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RestoreDBClusterToPointInTime

<a id="opIdGET_RestoreDBClusterToPointInTime"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RestoreDBClusterToPointInTime?DBClusterIdentifier=string&SourceDBClusterIdentifier=string&Action=RestoreDBClusterToPointInTime&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RestoreDBClusterToPointInTime`

<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>

<h3 id="getrestoredbclustertopointintime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|<p>The name of the new DB cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>|
|RestoreType|query|string|false|<p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>|
|SourceDBClusterIdentifier|query|string|true|<p>The identifier of the source DB cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>|
|RestoreToTime|query|string(date-time)|false|<p>The date and time to restore the DB cluster to.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not provided</p> </li> <li> <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p> </li> <li> <p>Cannot be specified if <code>RestoreType</code> parameter is <code>copy-on-write</code> </p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>|
|UseLatestRestorableTime|query|boolean|false|<p>A value that is set to <code>true</code> to restore the DB cluster to the latest restorable backup time, and <code>false</code> otherwise.</p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is provided.</p>|
|Port|query|integer|false|<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>|
|DBSubnetGroupName|query|string|false|<p>The DB subnet group name to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>|
|OptionGroupName|query|string|false| <i>(Not supported by Neptune)</i> |
|VpcSecurityGroupIds|query|[object]|false|A list of VPC security groups that the new DB cluster belongs to.|
|Tags|query|[object]|false|The tags to be applied to the restored DB cluster.|
|KmsKeyId|query|string|false|<p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p> </li> <li> <p>If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the restore request is rejected.</p>|
|EnableIAMDatabaseAuthentication|query|boolean|false|<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>|
|EnableCloudwatchLogsExports|query|[[String](#schemastring)]|false|The list of logs that the restored DB cluster is to export to CloudWatch Logs.|
|DBClusterParameterGroupName|query|string|false|<p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>|
|DeletionProtection|query|boolean|false|A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. |
|ServerlessV2ScalingConfiguration|query|object|false|none|
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
|494|494|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|495|495|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|496|496|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RestoreDBClusterToPointInTime

<a id="opIdPOST_RestoreDBClusterToPointInTime"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=RestoreDBClusterToPointInTime?Action=RestoreDBClusterToPointInTime&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{},"RestoreType":{},"SourceDBClusterIdentifier":{},"RestoreToTime":{},"UseLatestRestorableTime":{},"Port":{},"DBSubnetGroupName":{},"OptionGroupName":{},"VpcSecurityGroupIds":{},"Tags":{},"KmsKeyId":{},"EnableIAMDatabaseAuthentication":{},"EnableCloudwatchLogsExports":{},"DBClusterParameterGroupName":{},"DeletionProtection":{},"ServerlessV2ScalingConfiguration":{"MinCapacity":{},"MaxCapacity":{}}}'
```

`POST /#Action=RestoreDBClusterToPointInTime`

<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>

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
  "OptionGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnableCloudwatchLogsExports": {},
  "DBClusterParameterGroupName": {},
  "DeletionProtection": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
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
|» OptionGroupName|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» EnableIAMDatabaseAuthentication|body|object|false|none|
|» EnableCloudwatchLogsExports|body|object|false|none|
|» DBClusterParameterGroupName|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» ServerlessV2ScalingConfiguration|body|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|

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
|494|494|OptionGroupNotFoundFault|[OptionGroupNotFoundFault](#schemaoptiongroupnotfoundfault)|
|495|495|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|496|496|DBClusterParameterGroupNotFoundFault|[DBClusterParameterGroupNotFoundFault](#schemadbclusterparametergroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StartDBCluster

<a id="opIdGET_StartDBCluster"></a>

> Code samples

```bash
curl 'https://neptune.us-east-1.amazonaws.com/#Action=StartDBCluster?DBClusterIdentifier=string&Action=StartDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StartDBCluster`

Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.

<h3 id="getstartdbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=StartDBCluster?Action=StartDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{}}'
```

`POST /#Action=StartDBCluster`

Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.

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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=StopDBCluster?DBClusterIdentifier=string&Action=StopDBCluster&Version=2014-10-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StopDBCluster`

<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>

<h3 id="getstopdbcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DBClusterIdentifier|query|string|true|The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string.|
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
curl 'https://neptune.us-east-1.amazonaws.com/#Action=StopDBCluster?Action=StopDBCluster&Version=2014-10-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DBClusterIdentifier":{}}'
```

`POST /#Action=StopDBCluster`

<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>

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

<h2 id="tocS_DBClusterNotFoundFault">DBClusterNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusternotfoundfault"></a>
<a id="schema_DBClusterNotFoundFault"></a>
<a id="tocSdbclusternotfoundfault"></a>
<a id="tocsdbclusternotfoundfault"></a>

```json
null
```

<h2 id="tocS_DBClusterRoleAlreadyExistsFault">DBClusterRoleAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterrolealreadyexistsfault"></a>
<a id="schema_DBClusterRoleAlreadyExistsFault"></a>
<a id="tocSdbclusterrolealreadyexistsfault"></a>
<a id="tocsdbclusterrolealreadyexistsfault"></a>

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

<h2 id="tocS_DBClusterRoleQuotaExceededFault">DBClusterRoleQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterrolequotaexceededfault"></a>
<a id="schema_DBClusterRoleQuotaExceededFault"></a>
<a id="tocSdbclusterrolequotaexceededfault"></a>
<a id="tocsdbclusterrolequotaexceededfault"></a>

```json
null
```

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
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.|

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

Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.

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
|ResourcePendingMaintenanceActions|[ResourcePendingMaintenanceActions](#schemaresourcependingmaintenanceactions)|false|none|Describes the pending maintenance actions for a resource.|

<h2 id="tocS_ResourceNotFoundFault">ResourceNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundfault"></a>
<a id="schema_ResourceNotFoundFault"></a>
<a id="tocSresourcenotfoundfault"></a>
<a id="tocsresourcenotfoundfault"></a>

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
|DBClusterParameterGroup|[DBClusterParameterGroup](#schemadbclusterparametergroup)|false|none|<p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>|

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
    "AllocatedStorage": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "LicenseModel": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {},
    "IAMDatabaseAuthenticationEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshot|[DBClusterSnapshot](#schemadbclustersnapshot)|false|none|<p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>|

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

<h2 id="tocS_CopyDBParameterGroupResult">CopyDBParameterGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacopydbparametergroupresult"></a>
<a id="schema_CopyDBParameterGroupResult"></a>
<a id="tocScopydbparametergroupresult"></a>
<a id="tocscopydbparametergroupresult"></a>

```json
{
  "DBParameterGroup": {
    "DBParameterGroupName": {},
    "DBParameterGroupFamily": {},
    "Description": {},
    "DBParameterGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroup|[DBParameterGroup](#schemadbparametergroup)|false|none|<p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>|

<h2 id="tocS_CreateDBClusterResult">CreateDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclusterresult"></a>
<a id="schema_CreateDBClusterResult"></a>
<a id="tocScreatedbclusterresult"></a>
<a id="tocscreatedbclusterresult"></a>

```json
{
  "DBCluster": {
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_DoubleOptional">DoubleOptional</h2>
<!-- backwards compatibility -->
<a id="schemadoubleoptional"></a>
<a id="schema_DoubleOptional"></a>
<a id="tocSdoubleoptional"></a>
<a id="tocsdoubleoptional"></a>

```json
0
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

<h2 id="tocS_InvalidDBInstanceStateFault">InvalidDBInstanceStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbinstancestatefault"></a>
<a id="schema_InvalidDBInstanceStateFault"></a>
<a id="tocSinvaliddbinstancestatefault"></a>
<a id="tocsinvaliddbinstancestatefault"></a>

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

<h2 id="tocS_CreateDBClusterEndpointOutput">CreateDBClusterEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclusterendpointoutput"></a>
<a id="schema_CreateDBClusterEndpointOutput"></a>
<a id="tocScreatedbclusterendpointoutput"></a>
<a id="tocscreatedbclusterendpointoutput"></a>

```json
{
  "DBClusterEndpointIdentifier": {},
  "DBClusterIdentifier": {},
  "DBClusterEndpointResourceIdentifier": {},
  "Endpoint": {},
  "Status": {},
  "EndpointType": {},
  "CustomEndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {},
  "DBClusterEndpointArn": {}
}
```

<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|DBClusterEndpointResourceIdentifier|object|false|none|none|
|Endpoint|object|false|none|none|
|Status|object|false|none|none|
|EndpointType|object|false|none|none|
|CustomEndpointType|object|false|none|none|
|StaticMembers|object|false|none|none|
|ExcludedMembers|object|false|none|none|
|DBClusterEndpointArn|object|false|none|none|

<h2 id="tocS_DBClusterEndpointQuotaExceededFault">DBClusterEndpointQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterendpointquotaexceededfault"></a>
<a id="schema_DBClusterEndpointQuotaExceededFault"></a>
<a id="tocSdbclusterendpointquotaexceededfault"></a>
<a id="tocsdbclusterendpointquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_DBClusterEndpointAlreadyExistsFault">DBClusterEndpointAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterendpointalreadyexistsfault"></a>
<a id="schema_DBClusterEndpointAlreadyExistsFault"></a>
<a id="tocSdbclusterendpointalreadyexistsfault"></a>
<a id="tocsdbclusterendpointalreadyexistsfault"></a>

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
|DBClusterParameterGroup|[DBClusterParameterGroup](#schemadbclusterparametergroup)|false|none|<p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>|

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
    "AllocatedStorage": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "LicenseModel": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {},
    "IAMDatabaseAuthenticationEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshot|[DBClusterSnapshot](#schemadbclustersnapshot)|false|none|<p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>|

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
    "MasterUsername": {},
    "DBName": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "DBSecurityGroups": {},
    "VpcSecurityGroups": {},
    "DBParameterGroups": {},
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
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "ReadReplicaSourceDBInstanceIdentifier": {},
    "ReadReplicaDBInstanceIdentifiers": {},
    "ReadReplicaDBClusterIdentifiers": {},
    "LicenseModel": {},
    "Iops": {},
    "OptionGroupMemberships": {},
    "CharacterSetName": {},
    "SecondaryAvailabilityZone": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "StorageType": {},
    "TdeCredentialArn": {},
    "DbInstancePort": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "DomainMemberships": {},
    "CopyTagsToSnapshot": {},
    "MonitoringInterval": {},
    "EnhancedMonitoringResourceArn": {},
    "MonitoringRoleArn": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "Timezone": {},
    "IAMDatabaseAuthenticationEnabled": {},
    "PerformanceInsightsEnabled": {},
    "PerformanceInsightsKMSKeyId": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|<p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>|

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

<h2 id="tocS_ProvisionedIopsNotAvailableInAZFault">ProvisionedIopsNotAvailableInAZFault</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionediopsnotavailableinazfault"></a>
<a id="schema_ProvisionedIopsNotAvailableInAZFault"></a>
<a id="tocSprovisionediopsnotavailableinazfault"></a>
<a id="tocsprovisionediopsnotavailableinazfault"></a>

```json
null
```

<h2 id="tocS_OptionGroupNotFoundFault">OptionGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaoptiongroupnotfoundfault"></a>
<a id="schema_OptionGroupNotFoundFault"></a>
<a id="tocSoptiongroupnotfoundfault"></a>
<a id="tocsoptiongroupnotfoundfault"></a>

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

<h2 id="tocS_DomainNotFoundFault">DomainNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadomainnotfoundfault"></a>
<a id="schema_DomainNotFoundFault"></a>
<a id="tocSdomainnotfoundfault"></a>
<a id="tocsdomainnotfoundfault"></a>

```json
null
```

<h2 id="tocS_CreateDBParameterGroupResult">CreateDBParameterGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbparametergroupresult"></a>
<a id="schema_CreateDBParameterGroupResult"></a>
<a id="tocScreatedbparametergroupresult"></a>
<a id="tocscreatedbparametergroupresult"></a>

```json
{
  "DBParameterGroup": {
    "DBParameterGroupName": {},
    "DBParameterGroupFamily": {},
    "Description": {},
    "DBParameterGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroup|[DBParameterGroup](#schemadbparametergroup)|false|none|<p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>|

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
|DBSubnetGroup|[DBSubnetGroup](#schemadbsubnetgroup)|false|none|<p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>|

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
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.|

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
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|<p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>|

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
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

<h2 id="tocS_DeleteDBClusterEndpointOutput">DeleteDBClusterEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbclusterendpointoutput"></a>
<a id="schema_DeleteDBClusterEndpointOutput"></a>
<a id="tocSdeletedbclusterendpointoutput"></a>
<a id="tocsdeletedbclusterendpointoutput"></a>

```json
{
  "DBClusterEndpointIdentifier": {},
  "DBClusterIdentifier": {},
  "DBClusterEndpointResourceIdentifier": {},
  "Endpoint": {},
  "Status": {},
  "EndpointType": {},
  "CustomEndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {},
  "DBClusterEndpointArn": {}
}
```

<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|DBClusterEndpointResourceIdentifier|object|false|none|none|
|Endpoint|object|false|none|none|
|Status|object|false|none|none|
|EndpointType|object|false|none|none|
|CustomEndpointType|object|false|none|none|
|StaticMembers|object|false|none|none|
|ExcludedMembers|object|false|none|none|
|DBClusterEndpointArn|object|false|none|none|

<h2 id="tocS_InvalidDBClusterEndpointStateFault">InvalidDBClusterEndpointStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddbclusterendpointstatefault"></a>
<a id="schema_InvalidDBClusterEndpointStateFault"></a>
<a id="tocSinvaliddbclusterendpointstatefault"></a>
<a id="tocsinvaliddbclusterendpointstatefault"></a>

```json
null
```

<h2 id="tocS_DBClusterEndpointNotFoundFault">DBClusterEndpointNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterendpointnotfoundfault"></a>
<a id="schema_DBClusterEndpointNotFoundFault"></a>
<a id="tocSdbclusterendpointnotfoundfault"></a>
<a id="tocsdbclusterendpointnotfoundfault"></a>

```json
null
```

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
    "AllocatedStorage": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "LicenseModel": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {},
    "IAMDatabaseAuthenticationEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshot|[DBClusterSnapshot](#schemadbclustersnapshot)|false|none|<p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>|

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
    "MasterUsername": {},
    "DBName": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "DBSecurityGroups": {},
    "VpcSecurityGroups": {},
    "DBParameterGroups": {},
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
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "ReadReplicaSourceDBInstanceIdentifier": {},
    "ReadReplicaDBInstanceIdentifiers": {},
    "ReadReplicaDBClusterIdentifiers": {},
    "LicenseModel": {},
    "Iops": {},
    "OptionGroupMemberships": {},
    "CharacterSetName": {},
    "SecondaryAvailabilityZone": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "StorageType": {},
    "TdeCredentialArn": {},
    "DbInstancePort": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "DomainMemberships": {},
    "CopyTagsToSnapshot": {},
    "MonitoringInterval": {},
    "EnhancedMonitoringResourceArn": {},
    "MonitoringRoleArn": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "Timezone": {},
    "IAMDatabaseAuthenticationEnabled": {},
    "PerformanceInsightsEnabled": {},
    "PerformanceInsightsKMSKeyId": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|<p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>|

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
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.|

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
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|<p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>|

<h2 id="tocS_DBClusterEndpointMessage">DBClusterEndpointMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterendpointmessage"></a>
<a id="schema_DBClusterEndpointMessage"></a>
<a id="tocSdbclusterendpointmessage"></a>
<a id="tocsdbclusterendpointmessage"></a>

```json
{
  "Marker": {},
  "DBClusterEndpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBClusterEndpoints|object|false|none|none|

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

This type is not currently supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|

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
|DBClusterSnapshotAttributesResult|[DBClusterSnapshotAttributesResult](#schemadbclustersnapshotattributesresult)|false|none|<p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBInstances|object|false|none|none|

<h2 id="tocS_DBParameterGroupsMessage">DBParameterGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupsmessage"></a>
<a id="schema_DBParameterGroupsMessage"></a>
<a id="tocSdbparametergroupsmessage"></a>
<a id="tocsdbparametergroupsmessage"></a>

```json
{
  "Marker": {},
  "DBParameterGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|DBParameterGroups|object|false|none|none|

<h2 id="tocS_DBParameterGroupDetails">DBParameterGroupDetails</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupdetails"></a>
<a id="schema_DBParameterGroupDetails"></a>
<a id="tocSdbparametergroupdetails"></a>
<a id="tocsdbparametergroupdetails"></a>

```json
{
  "Parameters": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|Marker|object|false|none|none|

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
|EngineDefaults|[EngineDefaults](#schemaenginedefaults)|false|none| Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.|

<h2 id="tocS_DescribeEngineDefaultParametersResult">DescribeEngineDefaultParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenginedefaultparametersresult"></a>
<a id="schema_DescribeEngineDefaultParametersResult"></a>
<a id="tocSdescribeenginedefaultparametersresult"></a>
<a id="tocsdescribeenginedefaultparametersresult"></a>

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
|EngineDefaults|[EngineDefaults](#schemaenginedefaults)|false|none| Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PendingMaintenanceActions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeValidDBInstanceModificationsResult">DescribeValidDBInstanceModificationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribevaliddbinstancemodificationsresult"></a>
<a id="schema_DescribeValidDBInstanceModificationsResult"></a>
<a id="tocSdescribevaliddbinstancemodificationsresult"></a>
<a id="tocsdescribevaliddbinstancemodificationsresult"></a>

```json
{
  "ValidDBInstanceModificationsMessage": {
    "Storage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ValidDBInstanceModificationsMessage|[ValidDBInstanceModificationsMessage](#schemavaliddbinstancemodificationsmessage)|false|none|Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. |

<h2 id="tocS_FailoverDBClusterResult">FailoverDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemafailoverdbclusterresult"></a>
<a id="schema_FailoverDBClusterResult"></a>
<a id="tocSfailoverdbclusterresult"></a>
<a id="tocsfailoverdbclusterresult"></a>

```json
{
  "DBCluster": {
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

<h2 id="tocS_FailoverGlobalClusterResult">FailoverGlobalClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemafailoverglobalclusterresult"></a>
<a id="schema_FailoverGlobalClusterResult"></a>
<a id="tocSfailoverglobalclusterresult"></a>
<a id="tocsfailoverglobalclusterresult"></a>

```json
{
  "GlobalCluster": {
    "GlobalClusterIdentifier": {},
    "GlobalClusterResourceId": {},
    "GlobalClusterArn": {},
    "Status": {},
    "Engine": {},
    "EngineVersion": {},
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|<p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>|

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
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

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

<h2 id="tocS_ModifyDBClusterEndpointOutput">ModifyDBClusterEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbclusterendpointoutput"></a>
<a id="schema_ModifyDBClusterEndpointOutput"></a>
<a id="tocSmodifydbclusterendpointoutput"></a>
<a id="tocsmodifydbclusterendpointoutput"></a>

```json
{
  "DBClusterEndpointIdentifier": {},
  "DBClusterIdentifier": {},
  "DBClusterEndpointResourceIdentifier": {},
  "Endpoint": {},
  "Status": {},
  "EndpointType": {},
  "CustomEndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {},
  "DBClusterEndpointArn": {}
}
```

<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|DBClusterEndpointResourceIdentifier|object|false|none|none|
|Endpoint|object|false|none|none|
|Status|object|false|none|none|
|EndpointType|object|false|none|none|
|CustomEndpointType|object|false|none|none|
|StaticMembers|object|false|none|none|
|ExcludedMembers|object|false|none|none|
|DBClusterEndpointArn|object|false|none|none|

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

Specifies a parameter.

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
|DBClusterSnapshotAttributesResult|[DBClusterSnapshotAttributesResult](#schemadbclustersnapshotattributesresult)|false|none|<p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>|

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
    "MasterUsername": {},
    "DBName": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "DBSecurityGroups": {},
    "VpcSecurityGroups": {},
    "DBParameterGroups": {},
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
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "ReadReplicaSourceDBInstanceIdentifier": {},
    "ReadReplicaDBInstanceIdentifiers": {},
    "ReadReplicaDBClusterIdentifiers": {},
    "LicenseModel": {},
    "Iops": {},
    "OptionGroupMemberships": {},
    "CharacterSetName": {},
    "SecondaryAvailabilityZone": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "StorageType": {},
    "TdeCredentialArn": {},
    "DbInstancePort": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "DomainMemberships": {},
    "CopyTagsToSnapshot": {},
    "MonitoringInterval": {},
    "EnhancedMonitoringResourceArn": {},
    "MonitoringRoleArn": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "Timezone": {},
    "IAMDatabaseAuthenticationEnabled": {},
    "PerformanceInsightsEnabled": {},
    "PerformanceInsightsKMSKeyId": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|<p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>|

<h2 id="tocS_DBUpgradeDependencyFailureFault">DBUpgradeDependencyFailureFault</h2>
<!-- backwards compatibility -->
<a id="schemadbupgradedependencyfailurefault"></a>
<a id="schema_DBUpgradeDependencyFailureFault"></a>
<a id="tocSdbupgradedependencyfailurefault"></a>
<a id="tocsdbupgradedependencyfailurefault"></a>

```json
null
```

<h2 id="tocS_CertificateNotFoundFault">CertificateNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemacertificatenotfoundfault"></a>
<a id="schema_CertificateNotFoundFault"></a>
<a id="tocScertificatenotfoundfault"></a>
<a id="tocscertificatenotfoundfault"></a>

```json
null
```

<h2 id="tocS_DBParameterGroupNameMessage">DBParameterGroupNameMessage</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupnamemessage"></a>
<a id="schema_DBParameterGroupNameMessage"></a>
<a id="tocSdbparametergroupnamemessage"></a>
<a id="tocsdbparametergroupnamemessage"></a>

```json
{
  "DBParameterGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|false|none|none|

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
|DBSubnetGroup|[DBSubnetGroup](#schemadbsubnetgroup)|false|none|<p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>|

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
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.|

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
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|<p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>|

<h2 id="tocS_PromoteReadReplicaDBClusterResult">PromoteReadReplicaDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemapromotereadreplicadbclusterresult"></a>
<a id="schema_PromoteReadReplicaDBClusterResult"></a>
<a id="tocSpromotereadreplicadbclusterresult"></a>
<a id="tocspromotereadreplicadbclusterresult"></a>

```json
{
  "DBCluster": {
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

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
    "MasterUsername": {},
    "DBName": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "DBSecurityGroups": {},
    "VpcSecurityGroups": {},
    "DBParameterGroups": {},
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
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "ReadReplicaSourceDBInstanceIdentifier": {},
    "ReadReplicaDBInstanceIdentifiers": {},
    "ReadReplicaDBClusterIdentifiers": {},
    "LicenseModel": {},
    "Iops": {},
    "OptionGroupMemberships": {},
    "CharacterSetName": {},
    "SecondaryAvailabilityZone": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "StorageType": {},
    "TdeCredentialArn": {},
    "DbInstancePort": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "DomainMemberships": {},
    "CopyTagsToSnapshot": {},
    "MonitoringInterval": {},
    "EnhancedMonitoringResourceArn": {},
    "MonitoringRoleArn": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "Timezone": {},
    "IAMDatabaseAuthenticationEnabled": {},
    "PerformanceInsightsEnabled": {},
    "PerformanceInsightsKMSKeyId": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstance|[DBInstance](#schemadbinstance)|false|none|<p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>|

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
    "StorageEncrypted": {},
    "DeletionProtection": {},
    "GlobalClusterMembers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalCluster|[GlobalCluster](#schemaglobalcluster)|false|none|<p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>|

<h2 id="tocS_DBClusterRoleNotFoundFault">DBClusterRoleNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterrolenotfoundfault"></a>
<a id="schema_DBClusterRoleNotFoundFault"></a>
<a id="tocSdbclusterrolenotfoundfault"></a>
<a id="tocsdbclusterrolenotfoundfault"></a>

```json
null
```

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
|EventSubscription|[EventSubscription](#schemaeventsubscription)|false|none|Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.|

<h2 id="tocS_RestoreDBClusterFromSnapshotResult">RestoreDBClusterFromSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemarestoredbclusterfromsnapshotresult"></a>
<a id="schema_RestoreDBClusterFromSnapshotResult"></a>
<a id="tocSrestoredbclusterfromsnapshotresult"></a>
<a id="tocsrestoredbclusterfromsnapshotresult"></a>

```json
{
  "DBCluster": {
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

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
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

<h2 id="tocS_StartDBClusterResult">StartDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemastartdbclusterresult"></a>
<a id="schema_StartDBClusterResult"></a>
<a id="tocSstartdbclusterresult"></a>
<a id="tocsstartdbclusterresult"></a>

```json
{
  "DBCluster": {
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

<h2 id="tocS_StopDBClusterResult">StopDBClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemastopdbclusterresult"></a>
<a id="schema_StopDBClusterResult"></a>
<a id="tocSstopdbclusterresult"></a>
<a id="tocsstopdbclusterresult"></a>

```json
{
  "DBCluster": {
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBCluster|[DBCluster](#schemadbcluster)|false|none|<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>|

<h2 id="tocS_AddRoleToDBClusterMessage">AddRoleToDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemaaddroletodbclustermessage"></a>
<a id="schema_AddRoleToDBClusterMessage"></a>
<a id="tocSaddroletodbclustermessage"></a>
<a id="tocsaddroletodbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "RoleArn": {},
  "FeatureName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|
|RoleArn|object|true|none|none|
|FeatureName|object|false|none|none|

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

Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.

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

Describes the pending maintenance actions for a resource.

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

Specifies an Availability Zone.

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

<h2 id="tocS_CharacterSet">CharacterSet</h2>
<!-- backwards compatibility -->
<a id="schemacharacterset"></a>
<a id="schema_CharacterSet"></a>
<a id="tocScharacterset"></a>
<a id="tocscharacterset"></a>

```json
{
  "CharacterSetName": {},
  "CharacterSetDescription": {}
}
```

Specifies a character set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CharacterSetName|object|false|none|none|
|CharacterSetDescription|object|false|none|none|

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

<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableLogTypes|object|false|none|none|
|DisableLogTypes|object|false|none|none|

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

A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogTypesToEnable|object|false|none|none|
|LogTypesToDisable|object|false|none|none|

<h2 id="tocS_IntegerOptional">IntegerOptional</h2>
<!-- backwards compatibility -->
<a id="schemaintegeroptional"></a>
<a id="schema_IntegerOptional"></a>
<a id="tocSintegeroptional"></a>
<a id="tocsintegeroptional"></a>

```json
0
```

<h2 id="tocS_ClusterPendingModifiedValues">ClusterPendingModifiedValues</h2>
<!-- backwards compatibility -->
<a id="schemaclusterpendingmodifiedvalues"></a>
<a id="schema_ClusterPendingModifiedValues"></a>
<a id="tocSclusterpendingmodifiedvalues"></a>
<a id="tocsclusterpendingmodifiedvalues"></a>

```json
{
  "PendingCloudwatchLogsExports": {
    "LogTypesToEnable": {},
    "LogTypesToDisable": {}
  },
  "DBClusterIdentifier": {},
  "IAMDatabaseAuthenticationEnabled": {},
  "EngineVersion": {},
  "BackupRetentionPeriod": {},
  "AllocatedStorage": {},
  "Iops": {}
}
```

This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PendingCloudwatchLogsExports|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|IAMDatabaseAuthenticationEnabled|object|false|none|none|
|EngineVersion|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|AllocatedStorage|object|false|none|none|
|Iops|object|false|none|none|

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

<p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>

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
  "AllocatedStorage": {},
  "Status": {},
  "Port": {},
  "VpcId": {},
  "ClusterCreateTime": {},
  "MasterUsername": {},
  "EngineVersion": {},
  "LicenseModel": {},
  "SnapshotType": {},
  "PercentProgress": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "DBClusterSnapshotArn": {},
  "SourceDBClusterSnapshotArn": {},
  "IAMDatabaseAuthenticationEnabled": {}
}
```

<p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|DBClusterSnapshotIdentifier|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|SnapshotCreateTime|object|false|none|none|
|Engine|object|false|none|none|
|AllocatedStorage|object|false|none|none|
|Status|object|false|none|none|
|Port|object|false|none|none|
|VpcId|object|false|none|none|
|ClusterCreateTime|object|false|none|none|
|MasterUsername|object|false|none|none|
|EngineVersion|object|false|none|none|
|LicenseModel|object|false|none|none|
|SnapshotType|object|false|none|none|
|PercentProgress|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|DBClusterSnapshotArn|object|false|none|none|
|SourceDBClusterSnapshotArn|object|false|none|none|
|IAMDatabaseAuthenticationEnabled|object|false|none|none|

<h2 id="tocS_CopyDBParameterGroupMessage">CopyDBParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacopydbparametergroupmessage"></a>
<a id="schema_CopyDBParameterGroupMessage"></a>
<a id="tocScopydbparametergroupmessage"></a>
<a id="tocscopydbparametergroupmessage"></a>

```json
{
  "SourceDBParameterGroupIdentifier": {},
  "TargetDBParameterGroupIdentifier": {},
  "TargetDBParameterGroupDescription": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceDBParameterGroupIdentifier|object|true|none|none|
|TargetDBParameterGroupIdentifier|object|true|none|none|
|TargetDBParameterGroupDescription|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DBParameterGroup">DBParameterGroup</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroup"></a>
<a id="schema_DBParameterGroup"></a>
<a id="tocSdbparametergroup"></a>
<a id="tocsdbparametergroup"></a>

```json
{
  "DBParameterGroupName": {},
  "DBParameterGroupFamily": {},
  "Description": {},
  "DBParameterGroupArn": {}
}
```

<p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|false|none|none|
|DBParameterGroupFamily|object|false|none|none|
|Description|object|false|none|none|
|DBParameterGroupArn|object|false|none|none|

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

<h2 id="tocS_CreateDBClusterEndpointMessage">CreateDBClusterEndpointMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbclusterendpointmessage"></a>
<a id="schema_CreateDBClusterEndpointMessage"></a>
<a id="tocScreatedbclusterendpointmessage"></a>
<a id="tocscreatedbclusterendpointmessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "DBClusterEndpointIdentifier": {},
  "EndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|
|DBClusterEndpointIdentifier|object|true|none|none|
|EndpointType|object|true|none|none|
|StaticMembers|object|false|none|none|
|ExcludedMembers|object|false|none|none|
|Tags|object|false|none|none|

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

<h2 id="tocS_ServerlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserverlessv2scalingconfiguration"></a>
<a id="schema_ServerlessV2ScalingConfiguration"></a>
<a id="tocSserverlessv2scalingconfiguration"></a>
<a id="tocsserverlessv2scalingconfiguration"></a>

```json
{
  "MinCapacity": {},
  "MaxCapacity": {}
}
```

<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinCapacity|object|false|none|none|
|MaxCapacity|object|false|none|none|

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
  "CharacterSetName": {},
  "CopyTagsToSnapshot": {},
  "DatabaseName": {},
  "DBClusterIdentifier": {},
  "DBClusterParameterGroupName": {},
  "VpcSecurityGroupIds": {},
  "DBSubnetGroupName": {},
  "Engine": {},
  "EngineVersion": {},
  "Port": {},
  "MasterUsername": {},
  "MasterUserPassword": {},
  "OptionGroupName": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "ReplicationSourceIdentifier": {},
  "Tags": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "PreSignedUrl": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  },
  "GlobalClusterIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|CharacterSetName|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|DatabaseName|object|false|none|none|
|DBClusterIdentifier|object|true|none|none|
|DBClusterParameterGroupName|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|DBSubnetGroupName|object|false|none|none|
|Engine|object|true|none|none|
|EngineVersion|object|false|none|none|
|Port|object|false|none|none|
|MasterUsername|object|false|none|none|
|MasterUserPassword|object|false|none|none|
|OptionGroupName|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|ReplicationSourceIdentifier|object|false|none|none|
|Tags|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|PreSignedUrl|object|false|none|none|
|EnableIAMDatabaseAuthentication|object|false|none|none|
|EnableCloudwatchLogsExports|object|false|none|none|
|DeletionProtection|object|false|none|none|
|ServerlessV2ScalingConfiguration|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|none|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|
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
  "AllocatedStorage": {},
  "AvailabilityZones": {},
  "BackupRetentionPeriod": {},
  "CharacterSetName": {},
  "DatabaseName": {},
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
  "DBClusterOptionGroupMemberships": {},
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
  "IAMDatabaseAuthenticationEnabled": {},
  "CloneGroupId": {},
  "ClusterCreateTime": {},
  "CopyTagsToSnapshot": {},
  "EnabledCloudwatchLogsExports": {},
  "PendingModifiedValues": {
    "PendingCloudwatchLogsExports": {
      "LogTypesToEnable": {},
      "LogTypesToDisable": {}
    },
    "DBClusterIdentifier": {},
    "IAMDatabaseAuthenticationEnabled": {},
    "EngineVersion": {},
    "BackupRetentionPeriod": {},
    "AllocatedStorage": {},
    "Iops": {}
  },
  "DeletionProtection": {},
  "CrossAccountClone": {},
  "AutomaticRestartTime": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  },
  "GlobalClusterIdentifier": {}
}
```

<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllocatedStorage|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|CharacterSetName|object|false|none|none|
|DatabaseName|object|false|none|none|
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
|DBClusterOptionGroupMemberships|object|false|none|none|
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
|IAMDatabaseAuthenticationEnabled|object|false|none|none|
|CloneGroupId|object|false|none|none|
|ClusterCreateTime|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|EnabledCloudwatchLogsExports|object|false|none|none|
|PendingModifiedValues|object|false|none|none|
|DeletionProtection|object|false|none|none|
|CrossAccountClone|object|false|none|none|
|AutomaticRestartTime|object|false|none|none|
|ServerlessV2ScalingConfiguration|[ServerlessV2ScalingConfigurationInfo](#schemaserverlessv2scalingconfigurationinfo)|false|none|<p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|
|GlobalClusterIdentifier|object|false|none|none|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterSnapshotIdentifier|object|true|none|none|
|DBClusterIdentifier|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DBSecurityGroupNameList">DBSecurityGroupNameList</h2>
<!-- backwards compatibility -->
<a id="schemadbsecuritygroupnamelist"></a>
<a id="schema_DBSecurityGroupNameList"></a>
<a id="tocSdbsecuritygroupnamelist"></a>
<a id="tocsdbsecuritygroupnamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CreateDBInstanceMessage">CreateDBInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbinstancemessage"></a>
<a id="schema_CreateDBInstanceMessage"></a>
<a id="tocScreatedbinstancemessage"></a>
<a id="tocscreatedbinstancemessage"></a>

```json
{
  "DBName": {},
  "DBInstanceIdentifier": {},
  "AllocatedStorage": {},
  "DBInstanceClass": {},
  "Engine": {},
  "MasterUsername": {},
  "MasterUserPassword": {},
  "DBSecurityGroups": {},
  "VpcSecurityGroupIds": {},
  "AvailabilityZone": {},
  "DBSubnetGroupName": {},
  "PreferredMaintenanceWindow": {},
  "DBParameterGroupName": {},
  "BackupRetentionPeriod": {},
  "PreferredBackupWindow": {},
  "Port": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "LicenseModel": {},
  "Iops": {},
  "OptionGroupName": {},
  "CharacterSetName": {},
  "PubliclyAccessible": {},
  "Tags": {},
  "DBClusterIdentifier": {},
  "StorageType": {},
  "TdeCredentialArn": {},
  "TdeCredentialPassword": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "Domain": {},
  "CopyTagsToSnapshot": {},
  "MonitoringInterval": {},
  "MonitoringRoleArn": {},
  "DomainIAMRoleName": {},
  "PromotionTier": {},
  "Timezone": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {},
  "EnableCloudwatchLogsExports": {},
  "DeletionProtection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBName|object|false|none|none|
|DBInstanceIdentifier|object|true|none|none|
|AllocatedStorage|object|false|none|none|
|DBInstanceClass|object|true|none|none|
|Engine|object|true|none|none|
|MasterUsername|object|false|none|none|
|MasterUserPassword|object|false|none|none|
|DBSecurityGroups|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|DBSubnetGroupName|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|DBParameterGroupName|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|Port|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|LicenseModel|object|false|none|none|
|Iops|object|false|none|none|
|OptionGroupName|object|false|none|none|
|CharacterSetName|object|false|none|none|
|PubliclyAccessible|object|false|none|none|
|Tags|object|false|none|none|
|DBClusterIdentifier|object|true|none|none|
|StorageType|object|false|none|none|
|TdeCredentialArn|object|false|none|none|
|TdeCredentialPassword|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|Domain|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|MonitoringInterval|object|false|none|none|
|MonitoringRoleArn|object|false|none|none|
|DomainIAMRoleName|object|false|none|none|
|PromotionTier|object|false|none|none|
|Timezone|object|false|none|none|
|EnableIAMDatabaseAuthentication|object|false|none|none|
|EnablePerformanceInsights|object|false|none|none|
|PerformanceInsightsKMSKeyId|object|false|none|none|
|EnableCloudwatchLogsExports|object|false|none|none|
|DeletionProtection|object|false|none|none|

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
  "MasterUsername": {},
  "DBName": {},
  "Endpoint": {
    "Address": {},
    "Port": {},
    "HostedZoneId": {}
  },
  "AllocatedStorage": {},
  "InstanceCreateTime": {},
  "PreferredBackupWindow": {},
  "BackupRetentionPeriod": {},
  "DBSecurityGroups": {},
  "VpcSecurityGroups": {},
  "DBParameterGroups": {},
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
  "MultiAZ": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "ReadReplicaSourceDBInstanceIdentifier": {},
  "ReadReplicaDBInstanceIdentifiers": {},
  "ReadReplicaDBClusterIdentifiers": {},
  "LicenseModel": {},
  "Iops": {},
  "OptionGroupMemberships": {},
  "CharacterSetName": {},
  "SecondaryAvailabilityZone": {},
  "PubliclyAccessible": {},
  "StatusInfos": {},
  "StorageType": {},
  "TdeCredentialArn": {},
  "DbInstancePort": {},
  "DBClusterIdentifier": {},
  "StorageEncrypted": {},
  "KmsKeyId": {},
  "DbiResourceId": {},
  "CACertificateIdentifier": {},
  "DomainMemberships": {},
  "CopyTagsToSnapshot": {},
  "MonitoringInterval": {},
  "EnhancedMonitoringResourceArn": {},
  "MonitoringRoleArn": {},
  "PromotionTier": {},
  "DBInstanceArn": {},
  "Timezone": {},
  "IAMDatabaseAuthenticationEnabled": {},
  "PerformanceInsightsEnabled": {},
  "PerformanceInsightsKMSKeyId": {},
  "EnabledCloudwatchLogsExports": {},
  "DeletionProtection": {}
}
```

<p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|false|none|none|
|DBInstanceClass|object|false|none|none|
|Engine|object|false|none|none|
|DBInstanceStatus|object|false|none|none|
|MasterUsername|object|false|none|none|
|DBName|object|false|none|none|
|Endpoint|object|false|none|none|
|AllocatedStorage|object|false|none|none|
|InstanceCreateTime|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|DBSecurityGroups|object|false|none|none|
|VpcSecurityGroups|object|false|none|none|
|DBParameterGroups|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|DBSubnetGroup|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|PendingModifiedValues|object|false|none|none|
|LatestRestorableTime|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|ReadReplicaSourceDBInstanceIdentifier|object|false|none|none|
|ReadReplicaDBInstanceIdentifiers|object|false|none|none|
|ReadReplicaDBClusterIdentifiers|object|false|none|none|
|LicenseModel|object|false|none|none|
|Iops|object|false|none|none|
|OptionGroupMemberships|object|false|none|none|
|CharacterSetName|object|false|none|none|
|SecondaryAvailabilityZone|object|false|none|none|
|PubliclyAccessible|object|false|none|none|
|StatusInfos|object|false|none|none|
|StorageType|object|false|none|none|
|TdeCredentialArn|object|false|none|none|
|DbInstancePort|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|KmsKeyId|object|false|none|none|
|DbiResourceId|object|false|none|none|
|CACertificateIdentifier|object|false|none|none|
|DomainMemberships|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|MonitoringInterval|object|false|none|none|
|EnhancedMonitoringResourceArn|object|false|none|none|
|MonitoringRoleArn|object|false|none|none|
|PromotionTier|object|false|none|none|
|DBInstanceArn|object|false|none|none|
|Timezone|object|false|none|none|
|IAMDatabaseAuthenticationEnabled|object|false|none|none|
|PerformanceInsightsEnabled|object|false|none|none|
|PerformanceInsightsKMSKeyId|object|false|none|none|
|EnabledCloudwatchLogsExports|object|false|none|none|
|DeletionProtection|object|false|none|none|

<h2 id="tocS_CreateDBParameterGroupMessage">CreateDBParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatedbparametergroupmessage"></a>
<a id="schema_CreateDBParameterGroupMessage"></a>
<a id="tocScreatedbparametergroupmessage"></a>
<a id="tocscreatedbparametergroupmessage"></a>

```json
{
  "DBParameterGroupName": {},
  "DBParameterGroupFamily": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|true|none|none|
|DBParameterGroupFamily|object|true|none|none|
|Description|object|true|none|none|
|Tags|object|false|none|none|

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

<p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>

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
  "StorageEncrypted": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|
|SourceDBClusterIdentifier|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DeletionProtection|object|false|none|none|
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
  "StorageEncrypted": {},
  "DeletionProtection": {},
  "GlobalClusterMembers": {}
}
```

<p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|false|none|none|
|GlobalClusterResourceId|object|false|none|none|
|GlobalClusterArn|object|false|none|none|
|Status|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|StorageEncrypted|object|false|none|none|
|DeletionProtection|object|false|none|none|
|GlobalClusterMembers|object|false|none|none|

<h2 id="tocS_TStamp">TStamp</h2>
<!-- backwards compatibility -->
<a id="schematstamp"></a>
<a id="schema_TStamp"></a>
<a id="tocStstamp"></a>
<a id="tocststamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DBClusterOptionGroupMemberships">DBClusterOptionGroupMemberships</h2>
<!-- backwards compatibility -->
<a id="schemadbclusteroptiongroupmemberships"></a>
<a id="schema_DBClusterOptionGroupMemberships"></a>
<a id="tocSdbclusteroptiongroupmemberships"></a>
<a id="tocsdbclusteroptiongroupmemberships"></a>

```json
[
  {
    "DBClusterOptionGroupName": {},
    "Status": {}
  }
]
```

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
    "Status": {},
    "FeatureName": {}
  }
]
```

<h2 id="tocS_ServerlessV2ScalingConfigurationInfo">ServerlessV2ScalingConfigurationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserverlessv2scalingconfigurationinfo"></a>
<a id="schema_ServerlessV2ScalingConfigurationInfo"></a>
<a id="tocSserverlessv2scalingconfigurationinfo"></a>
<a id="tocsserverlessv2scalingconfigurationinfo"></a>

```json
{
  "MinCapacity": {},
  "MaxCapacity": {}
}
```

<p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinCapacity|object|false|none|none|
|MaxCapacity|object|false|none|none|

<h2 id="tocS_DBClusterEndpoint">DBClusterEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterendpoint"></a>
<a id="schema_DBClusterEndpoint"></a>
<a id="tocSdbclusterendpoint"></a>
<a id="tocsdbclusterendpoint"></a>

```json
{
  "DBClusterEndpointIdentifier": {},
  "DBClusterIdentifier": {},
  "DBClusterEndpointResourceIdentifier": {},
  "Endpoint": {},
  "Status": {},
  "EndpointType": {},
  "CustomEndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {},
  "DBClusterEndpointArn": {}
}
```

<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|object|false|none|none|
|DBClusterIdentifier|object|false|none|none|
|DBClusterEndpointResourceIdentifier|object|false|none|none|
|Endpoint|object|false|none|none|
|Status|object|false|none|none|
|EndpointType|object|false|none|none|
|CustomEndpointType|object|false|none|none|
|StaticMembers|object|false|none|none|
|ExcludedMembers|object|false|none|none|
|DBClusterEndpointArn|object|false|none|none|

<h2 id="tocS_DBClusterEndpointList">DBClusterEndpointList</h2>
<!-- backwards compatibility -->
<a id="schemadbclusterendpointlist"></a>
<a id="schema_DBClusterEndpointList"></a>
<a id="tocSdbclusterendpointlist"></a>
<a id="tocsdbclusterendpointlist"></a>

```json
[
  {
    "DBClusterEndpointIdentifier": {},
    "DBClusterIdentifier": {},
    "DBClusterEndpointResourceIdentifier": {},
    "Endpoint": {},
    "Status": {},
    "EndpointType": {},
    "CustomEndpointType": {},
    "StaticMembers": {},
    "ExcludedMembers": {},
    "DBClusterEndpointArn": {}
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
    "AllocatedStorage": {},
    "AvailabilityZones": {},
    "BackupRetentionPeriod": {},
    "CharacterSetName": {},
    "DatabaseName": {},
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
    "DBClusterOptionGroupMemberships": {},
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
    "IAMDatabaseAuthenticationEnabled": {},
    "CloneGroupId": {},
    "ClusterCreateTime": {},
    "CopyTagsToSnapshot": {},
    "EnabledCloudwatchLogsExports": {},
    "PendingModifiedValues": {
      "PendingCloudwatchLogsExports": {
        "LogTypesToEnable": {},
        "LogTypesToDisable": {}
      },
      "DBClusterIdentifier": {},
      "IAMDatabaseAuthenticationEnabled": {},
      "EngineVersion": {},
      "BackupRetentionPeriod": {},
      "AllocatedStorage": {},
      "Iops": {}
    },
    "DeletionProtection": {},
    "CrossAccountClone": {},
    "AutomaticRestartTime": {},
    "ServerlessV2ScalingConfiguration": {
      "MinCapacity": {},
      "MaxCapacity": {}
    },
    "GlobalClusterIdentifier": {}
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

Contains information about an instance that is part of a DB cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|false|none|none|
|IsClusterWriter|object|false|none|none|
|DBClusterParameterGroupStatus|object|false|none|none|
|PromotionTier|object|false|none|none|

<h2 id="tocS_DBClusterOptionGroupStatus">DBClusterOptionGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemadbclusteroptiongroupstatus"></a>
<a id="schema_DBClusterOptionGroupStatus"></a>
<a id="tocSdbclusteroptiongroupstatus"></a>
<a id="tocsdbclusteroptiongroupstatus"></a>

```json
{
  "DBClusterOptionGroupName": {},
  "Status": {}
}
```

Not supported by Neptune.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterOptionGroupName|object|false|none|none|
|Status|object|false|none|none|

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
  "Status": {},
  "FeatureName": {}
}
```

Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|Status|object|false|none|none|
|FeatureName|object|false|none|none|

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

<p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

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

<p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

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
    "AllocatedStorage": {},
    "Status": {},
    "Port": {},
    "VpcId": {},
    "ClusterCreateTime": {},
    "MasterUsername": {},
    "EngineVersion": {},
    "LicenseModel": {},
    "SnapshotType": {},
    "PercentProgress": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DBClusterSnapshotArn": {},
    "SourceDBClusterSnapshotArn": {},
    "IAMDatabaseAuthenticationEnabled": {}
  }
]
```

<h2 id="tocS_SupportedCharacterSetsList">SupportedCharacterSetsList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedcharactersetslist"></a>
<a id="schema_SupportedCharacterSetsList"></a>
<a id="tocSsupportedcharactersetslist"></a>
<a id="tocssupportedcharactersetslist"></a>

```json
[
  {
    "CharacterSetName": {},
    "CharacterSetDescription": {}
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
    "IsMajorVersionUpgrade": {},
    "SupportsGlobalDatabases": {}
  }
]
```

<h2 id="tocS_SupportedTimezonesList">SupportedTimezonesList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedtimezoneslist"></a>
<a id="schema_SupportedTimezonesList"></a>
<a id="tocSsupportedtimezoneslist"></a>
<a id="tocssupportedtimezoneslist"></a>

```json
[
  {
    "TimezoneName": {}
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
  "DefaultCharacterSet": {
    "CharacterSetName": {},
    "CharacterSetDescription": {}
  },
  "SupportedCharacterSets": {},
  "ValidUpgradeTarget": {},
  "SupportedTimezones": {},
  "ExportableLogTypes": {},
  "SupportsLogExportsToCloudwatchLogs": {},
  "SupportsReadReplica": {},
  "SupportsGlobalDatabases": {}
}
```

 This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DBParameterGroupFamily|object|false|none|none|
|DBEngineDescription|object|false|none|none|
|DBEngineVersionDescription|object|false|none|none|
|DefaultCharacterSet|object|false|none|none|
|SupportedCharacterSets|object|false|none|none|
|ValidUpgradeTarget|object|false|none|none|
|SupportedTimezones|object|false|none|none|
|ExportableLogTypes|object|false|none|none|
|SupportsLogExportsToCloudwatchLogs|object|false|none|none|
|SupportsReadReplica|object|false|none|none|
|SupportsGlobalDatabases|object|false|none|none|

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
    "DefaultCharacterSet": {
      "CharacterSetName": {},
      "CharacterSetDescription": {}
    },
    "SupportedCharacterSets": {},
    "ValidUpgradeTarget": {},
    "SupportedTimezones": {},
    "ExportableLogTypes": {},
    "SupportsLogExportsToCloudwatchLogs": {},
    "SupportsReadReplica": {},
    "SupportsGlobalDatabases": {}
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

<p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|
|Port|object|false|none|none|
|HostedZoneId|object|false|none|none|

<h2 id="tocS_DBSecurityGroupMembershipList">DBSecurityGroupMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemadbsecuritygroupmembershiplist"></a>
<a id="schema_DBSecurityGroupMembershipList"></a>
<a id="tocSdbsecuritygroupmembershiplist"></a>
<a id="tocsdbsecuritygroupmembershiplist"></a>

```json
[
  {
    "DBSecurityGroupName": {},
    "Status": {}
  }
]
```

<h2 id="tocS_DBParameterGroupStatusList">DBParameterGroupStatusList</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupstatuslist"></a>
<a id="schema_DBParameterGroupStatusList"></a>
<a id="tocSdbparametergroupstatuslist"></a>
<a id="tocsdbparametergroupstatuslist"></a>

```json
[
  {
    "DBParameterGroupName": {},
    "ParameterApplyStatus": {}
  }
]
```

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

 This data type is used as a response element in the <a>ModifyDBInstance</a> action.

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

<h2 id="tocS_ReadReplicaDBInstanceIdentifierList">ReadReplicaDBInstanceIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemareadreplicadbinstanceidentifierlist"></a>
<a id="schema_ReadReplicaDBInstanceIdentifierList"></a>
<a id="tocSreadreplicadbinstanceidentifierlist"></a>
<a id="tocsreadreplicadbinstanceidentifierlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ReadReplicaDBClusterIdentifierList">ReadReplicaDBClusterIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemareadreplicadbclusteridentifierlist"></a>
<a id="schema_ReadReplicaDBClusterIdentifierList"></a>
<a id="tocSreadreplicadbclusteridentifierlist"></a>
<a id="tocsreadreplicadbclusteridentifierlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_OptionGroupMembershipList">OptionGroupMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemaoptiongroupmembershiplist"></a>
<a id="schema_OptionGroupMembershipList"></a>
<a id="tocSoptiongroupmembershiplist"></a>
<a id="tocsoptiongroupmembershiplist"></a>

```json
[
  {
    "OptionGroupName": {},
    "Status": {}
  }
]
```

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

<h2 id="tocS_DomainMembershipList">DomainMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemadomainmembershiplist"></a>
<a id="schema_DomainMembershipList"></a>
<a id="tocSdomainmembershiplist"></a>
<a id="tocsdomainmembershiplist"></a>

```json
[
  {
    "Domain": {},
    "Status": {},
    "FQDN": {},
    "IAMRoleName": {}
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
    "MasterUsername": {},
    "DBName": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "HostedZoneId": {}
    },
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "PreferredBackupWindow": {},
    "BackupRetentionPeriod": {},
    "DBSecurityGroups": {},
    "VpcSecurityGroups": {},
    "DBParameterGroups": {},
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
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "ReadReplicaSourceDBInstanceIdentifier": {},
    "ReadReplicaDBInstanceIdentifiers": {},
    "ReadReplicaDBClusterIdentifiers": {},
    "LicenseModel": {},
    "Iops": {},
    "OptionGroupMemberships": {},
    "CharacterSetName": {},
    "SecondaryAvailabilityZone": {},
    "PubliclyAccessible": {},
    "StatusInfos": {},
    "StorageType": {},
    "TdeCredentialArn": {},
    "DbInstancePort": {},
    "DBClusterIdentifier": {},
    "StorageEncrypted": {},
    "KmsKeyId": {},
    "DbiResourceId": {},
    "CACertificateIdentifier": {},
    "DomainMemberships": {},
    "CopyTagsToSnapshot": {},
    "MonitoringInterval": {},
    "EnhancedMonitoringResourceArn": {},
    "MonitoringRoleArn": {},
    "PromotionTier": {},
    "DBInstanceArn": {},
    "Timezone": {},
    "IAMDatabaseAuthenticationEnabled": {},
    "PerformanceInsightsEnabled": {},
    "PerformanceInsightsKMSKeyId": {},
    "EnabledCloudwatchLogsExports": {},
    "DeletionProtection": {}
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

Provides a list of status information for a DB instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusType|object|false|none|none|
|Normal|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_DBParameterGroupList">DBParameterGroupList</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergrouplist"></a>
<a id="schema_DBParameterGroupList"></a>
<a id="tocSdbparametergrouplist"></a>
<a id="tocsdbparametergrouplist"></a>

```json
[
  {
    "DBParameterGroupName": {},
    "DBParameterGroupFamily": {},
    "Description": {},
    "DBParameterGroupArn": {}
  }
]
```

<h2 id="tocS_DBParameterGroupStatus">DBParameterGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemadbparametergroupstatus"></a>
<a id="schema_DBParameterGroupStatus"></a>
<a id="tocSdbparametergroupstatus"></a>
<a id="tocsdbparametergroupstatus"></a>

```json
{
  "DBParameterGroupName": {},
  "ParameterApplyStatus": {}
}
```

<p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|false|none|none|
|ParameterApplyStatus|object|false|none|none|

<h2 id="tocS_DBSecurityGroupMembership">DBSecurityGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemadbsecuritygroupmembership"></a>
<a id="schema_DBSecurityGroupMembership"></a>
<a id="tocSdbsecuritygroupmembership"></a>
<a id="tocsdbsecuritygroupmembership"></a>

```json
{
  "DBSecurityGroupName": {},
  "Status": {}
}
```

Specifies membership in a designated DB security group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBSecurityGroupName|object|false|none|none|
|Status|object|false|none|none|

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

<h2 id="tocS_DeleteDBClusterEndpointMessage">DeleteDBClusterEndpointMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbclusterendpointmessage"></a>
<a id="schema_DeleteDBClusterEndpointMessage"></a>
<a id="tocSdeletedbclusterendpointmessage"></a>
<a id="tocsdeletedbclusterendpointmessage"></a>

```json
{
  "DBClusterEndpointIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|object|true|none|none|

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
  "DBInstanceIdentifier": {},
  "SkipFinalSnapshot": {},
  "FinalDBSnapshotIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|true|none|none|
|SkipFinalSnapshot|object|false|none|none|
|FinalDBSnapshotIdentifier|object|false|none|none|

<h2 id="tocS_DeleteDBParameterGroupMessage">DeleteDBParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbparametergroupmessage"></a>
<a id="schema_DeleteDBParameterGroupMessage"></a>
<a id="tocSdeletedbparametergroupmessage"></a>
<a id="tocsdeletedbparametergroupmessage"></a>

```json
{
  "DBParameterGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|true|none|none|

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

<h2 id="tocS_DescribeDBClusterEndpointsMessage">DescribeDBClusterEndpointsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbclusterendpointsmessage"></a>
<a id="schema_DescribeDBClusterEndpointsMessage"></a>
<a id="tocSdescribedbclusterendpointsmessage"></a>
<a id="tocsdescribedbclusterendpointsmessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "DBClusterEndpointIdentifier": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|false|none|none|
|DBClusterEndpointIdentifier|object|false|none|none|
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBParameterGroupsMessage">DescribeDBParameterGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbparametergroupsmessage"></a>
<a id="schema_DescribeDBParameterGroupsMessage"></a>
<a id="tocSdescribedbparametergroupsmessage"></a>
<a id="tocsdescribedbparametergroupsmessage"></a>

```json
{
  "DBParameterGroupName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDBParametersMessage">DescribeDBParametersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribedbparametersmessage"></a>
<a id="schema_DescribeDBParametersMessage"></a>
<a id="tocSdescribedbparametersmessage"></a>
<a id="tocsdescribedbparametersmessage"></a>

```json
{
  "DBParameterGroupName": {},
  "Source": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|true|none|none|
|Source|object|false|none|none|
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

 Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupFamily|object|false|none|none|
|Marker|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_DescribeEngineDefaultParametersMessage">DescribeEngineDefaultParametersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenginedefaultparametersmessage"></a>
<a id="schema_DescribeEngineDefaultParametersMessage"></a>
<a id="tocSdescribeenginedefaultparametersmessage"></a>
<a id="tocsdescribeenginedefaultparametersmessage"></a>

```json
{
  "DBParameterGroupFamily": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupFamily|object|true|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

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
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|false|none|none|
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifier|object|false|none|none|
|Filters|object|false|none|none|
|Marker|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_DescribeValidDBInstanceModificationsMessage">DescribeValidDBInstanceModificationsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribevaliddbinstancemodificationsmessage"></a>
<a id="schema_DescribeValidDBInstanceModificationsMessage"></a>
<a id="tocSdescribevaliddbinstancemodificationsmessage"></a>
<a id="tocsdescribevaliddbinstancemodificationsmessage"></a>

```json
{
  "DBInstanceIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|true|none|none|

<h2 id="tocS_ValidDBInstanceModificationsMessage">ValidDBInstanceModificationsMessage</h2>
<!-- backwards compatibility -->
<a id="schemavaliddbinstancemodificationsmessage"></a>
<a id="schema_ValidDBInstanceModificationsMessage"></a>
<a id="tocSvaliddbinstancemodificationsmessage"></a>
<a id="tocsvaliddbinstancemodificationsmessage"></a>

```json
{
  "Storage": {}
}
```

Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Storage|object|false|none|none|

<h2 id="tocS_DomainMembership">DomainMembership</h2>
<!-- backwards compatibility -->
<a id="schemadomainmembership"></a>
<a id="schema_DomainMembership"></a>
<a id="tocSdomainmembership"></a>
<a id="tocsdomainmembership"></a>

```json
{
  "Domain": {},
  "Status": {},
  "FQDN": {},
  "IAMRoleName": {}
}
```

An Active Directory Domain membership record associated with a DB instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|false|none|none|
|Status|object|false|none|none|
|FQDN|object|false|none|none|
|IAMRoleName|object|false|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_DoubleRange">DoubleRange</h2>
<!-- backwards compatibility -->
<a id="schemadoublerange"></a>
<a id="schema_DoubleRange"></a>
<a id="tocSdoublerange"></a>
<a id="tocsdoublerange"></a>

```json
{
  "From": {},
  "To": {}
}
```

A range of double values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|From|object|false|none|none|
|To|object|false|none|none|

<h2 id="tocS_DoubleRangeList">DoubleRangeList</h2>
<!-- backwards compatibility -->
<a id="schemadoublerangelist"></a>
<a id="schema_DoubleRangeList"></a>
<a id="tocSdoublerangelist"></a>
<a id="tocsdoublerangelist"></a>

```json
[
  {
    "From": {},
    "To": {}
  }
]
```

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

 This data type is used as a response element in the <a>DescribeEvents</a> action.

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

Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|false|none|none|
|TargetDBInstanceIdentifier|object|false|none|none|

<h2 id="tocS_FailoverGlobalClusterMessage">FailoverGlobalClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemafailoverglobalclustermessage"></a>
<a id="schema_FailoverGlobalClusterMessage"></a>
<a id="tocSfailoverglobalclustermessage"></a>
<a id="tocsfailoverglobalclustermessage"></a>

```json
{
  "GlobalClusterIdentifier": {},
  "TargetDbClusterIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|
|TargetDbClusterIdentifier|object|true|none|none|

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

 A data structure with information about any primary and secondary clusters associated with an Neptune global database.

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ModifyDBClusterEndpointMessage">ModifyDBClusterEndpointMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbclusterendpointmessage"></a>
<a id="schema_ModifyDBClusterEndpointMessage"></a>
<a id="tocSmodifydbclusterendpointmessage"></a>
<a id="tocsmodifydbclusterendpointmessage"></a>

```json
{
  "DBClusterEndpointIdentifier": {},
  "EndpointType": {},
  "StaticMembers": {},
  "ExcludedMembers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterEndpointIdentifier|object|true|none|none|
|EndpointType|object|false|none|none|
|StaticMembers|object|false|none|none|
|ExcludedMembers|object|false|none|none|

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
  "OptionGroupName": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "EnableIAMDatabaseAuthentication": {},
  "CloudwatchLogsExportConfiguration": {
    "EnableLogTypes": {},
    "DisableLogTypes": {}
  },
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {},
  "DBInstanceParameterGroupName": {},
  "DeletionProtection": {},
  "CopyTagsToSnapshot": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
}
```

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
|OptionGroupName|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|EnableIAMDatabaseAuthentication|object|false|none|none|
|CloudwatchLogsExportConfiguration|object|false|none|none|
|EngineVersion|object|false|none|none|
|AllowMajorVersionUpgrade|object|false|none|none|
|DBInstanceParameterGroupName|object|false|none|none|
|DeletionProtection|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|ServerlessV2ScalingConfiguration|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|none|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|

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
  "AllocatedStorage": {},
  "DBInstanceClass": {},
  "DBSubnetGroupName": {},
  "DBSecurityGroups": {},
  "VpcSecurityGroupIds": {},
  "ApplyImmediately": {},
  "MasterUserPassword": {},
  "DBParameterGroupName": {},
  "BackupRetentionPeriod": {},
  "PreferredBackupWindow": {},
  "PreferredMaintenanceWindow": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {},
  "AutoMinorVersionUpgrade": {},
  "LicenseModel": {},
  "Iops": {},
  "OptionGroupName": {},
  "NewDBInstanceIdentifier": {},
  "StorageType": {},
  "TdeCredentialArn": {},
  "TdeCredentialPassword": {},
  "CACertificateIdentifier": {},
  "Domain": {},
  "CopyTagsToSnapshot": {},
  "MonitoringInterval": {},
  "DBPortNumber": {},
  "PubliclyAccessible": {},
  "MonitoringRoleArn": {},
  "DomainIAMRoleName": {},
  "PromotionTier": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnablePerformanceInsights": {},
  "PerformanceInsightsKMSKeyId": {},
  "CloudwatchLogsExportConfiguration": {
    "EnableLogTypes": {},
    "DisableLogTypes": {}
  },
  "DeletionProtection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|true|none|none|
|AllocatedStorage|object|false|none|none|
|DBInstanceClass|object|false|none|none|
|DBSubnetGroupName|object|false|none|none|
|DBSecurityGroups|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|ApplyImmediately|object|false|none|none|
|MasterUserPassword|object|false|none|none|
|DBParameterGroupName|object|false|none|none|
|BackupRetentionPeriod|object|false|none|none|
|PreferredBackupWindow|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|AllowMajorVersionUpgrade|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|LicenseModel|object|false|none|none|
|Iops|object|false|none|none|
|OptionGroupName|object|false|none|none|
|NewDBInstanceIdentifier|object|false|none|none|
|StorageType|object|false|none|none|
|TdeCredentialArn|object|false|none|none|
|TdeCredentialPassword|object|false|none|none|
|CACertificateIdentifier|object|false|none|none|
|Domain|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|MonitoringInterval|object|false|none|none|
|DBPortNumber|object|false|none|none|
|PubliclyAccessible|object|false|none|none|
|MonitoringRoleArn|object|false|none|none|
|DomainIAMRoleName|object|false|none|none|
|PromotionTier|object|false|none|none|
|EnableIAMDatabaseAuthentication|object|false|none|none|
|EnablePerformanceInsights|object|false|none|none|
|PerformanceInsightsKMSKeyId|object|false|none|none|
|CloudwatchLogsExportConfiguration|object|false|none|none|
|DeletionProtection|object|false|none|none|

<h2 id="tocS_ModifyDBParameterGroupMessage">ModifyDBParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifydbparametergroupmessage"></a>
<a id="schema_ModifyDBParameterGroupMessage"></a>
<a id="tocSmodifydbparametergroupmessage"></a>
<a id="tocsmodifydbparametergroupmessage"></a>

```json
{
  "DBParameterGroupName": {},
  "Parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|true|none|none|
|Parameters|object|true|none|none|

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
  "DeletionProtection": {},
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|
|NewGlobalClusterIdentifier|object|false|none|none|
|DeletionProtection|object|false|none|none|
|EngineVersion|object|false|none|none|
|AllowMajorVersionUpgrade|object|false|none|none|

<h2 id="tocS_OptionGroupMembership">OptionGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemaoptiongroupmembership"></a>
<a id="schema_OptionGroupMembership"></a>
<a id="tocSoptiongroupmembership"></a>
<a id="tocsoptiongroupmembership"></a>

```json
{
  "OptionGroupName": {},
  "Status": {}
}
```

Not supported by Neptune.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OptionGroupName|object|false|none|none|
|Status|object|false|none|none|

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
  "MultiAZCapable": {},
  "ReadReplicaCapable": {},
  "Vpc": {},
  "SupportsStorageEncryption": {},
  "StorageType": {},
  "SupportsIops": {},
  "SupportsEnhancedMonitoring": {},
  "SupportsIAMDatabaseAuthentication": {},
  "SupportsPerformanceInsights": {},
  "MinStorageSize": {},
  "MaxStorageSize": {},
  "MinIopsPerDbInstance": {},
  "MaxIopsPerDbInstance": {},
  "MinIopsPerGib": {},
  "MaxIopsPerGib": {},
  "SupportsGlobalDatabases": {}
}
```

<p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DBInstanceClass|object|false|none|none|
|LicenseModel|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|MultiAZCapable|object|false|none|none|
|ReadReplicaCapable|object|false|none|none|
|Vpc|object|false|none|none|
|SupportsStorageEncryption|object|false|none|none|
|StorageType|object|false|none|none|
|SupportsIops|object|false|none|none|
|SupportsEnhancedMonitoring|object|false|none|none|
|SupportsIAMDatabaseAuthentication|object|false|none|none|
|SupportsPerformanceInsights|object|false|none|none|
|MinStorageSize|object|false|none|none|
|MaxStorageSize|object|false|none|none|
|MinIopsPerDbInstance|object|false|none|none|
|MaxIopsPerDbInstance|object|false|none|none|
|MinIopsPerGib|object|false|none|none|
|MaxIopsPerGib|object|false|none|none|
|SupportsGlobalDatabases|object|false|none|none|

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
    "MultiAZCapable": {},
    "ReadReplicaCapable": {},
    "Vpc": {},
    "SupportsStorageEncryption": {},
    "StorageType": {},
    "SupportsIops": {},
    "SupportsEnhancedMonitoring": {},
    "SupportsIAMDatabaseAuthentication": {},
    "SupportsPerformanceInsights": {},
    "MinStorageSize": {},
    "MaxStorageSize": {},
    "MinIopsPerDbInstance": {},
    "MaxIopsPerDbInstance": {},
    "MinIopsPerGib": {},
    "MaxIopsPerGib": {},
    "SupportsGlobalDatabases": {}
  }
]
```

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

<h2 id="tocS_PromoteReadReplicaDBClusterMessage">PromoteReadReplicaDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemapromotereadreplicadbclustermessage"></a>
<a id="schema_PromoteReadReplicaDBClusterMessage"></a>
<a id="tocSpromotereadreplicadbclustermessage"></a>
<a id="tocspromotereadreplicadbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "From": {},
  "To": {},
  "Step": {}
}
```

A range of integer values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|From|object|false|none|none|
|To|object|false|none|none|
|Step|object|false|none|none|

<h2 id="tocS_RangeList">RangeList</h2>
<!-- backwards compatibility -->
<a id="schemarangelist"></a>
<a id="schema_RangeList"></a>
<a id="tocSrangelist"></a>
<a id="tocsrangelist"></a>

```json
[
  {
    "From": {},
    "To": {},
    "Step": {}
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalClusterIdentifier|object|true|none|none|
|DbClusterIdentifier|object|true|none|none|

<h2 id="tocS_RemoveRoleFromDBClusterMessage">RemoveRoleFromDBClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemaremoverolefromdbclustermessage"></a>
<a id="schema_RemoveRoleFromDBClusterMessage"></a>
<a id="tocSremoverolefromdbclustermessage"></a>
<a id="tocsremoverolefromdbclustermessage"></a>

```json
{
  "DBClusterIdentifier": {},
  "RoleArn": {},
  "FeatureName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterIdentifier|object|true|none|none|
|RoleArn|object|true|none|none|
|FeatureName|object|false|none|none|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBClusterParameterGroupName|object|true|none|none|
|ResetAllParameters|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_ResetDBParameterGroupMessage">ResetDBParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemaresetdbparametergroupmessage"></a>
<a id="schema_ResetDBParameterGroupMessage"></a>
<a id="tocSresetdbparametergroupmessage"></a>
<a id="tocsresetdbparametergroupmessage"></a>

```json
{
  "DBParameterGroupName": {},
  "ResetAllParameters": {},
  "Parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBParameterGroupName|object|true|none|none|
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
  "DatabaseName": {},
  "OptionGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnableCloudwatchLogsExports": {},
  "DBClusterParameterGroupName": {},
  "DeletionProtection": {},
  "CopyTagsToSnapshot": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
}
```

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
|DatabaseName|object|false|none|none|
|OptionGroupName|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|KmsKeyId|object|false|none|none|
|EnableIAMDatabaseAuthentication|object|false|none|none|
|EnableCloudwatchLogsExports|object|false|none|none|
|DBClusterParameterGroupName|object|false|none|none|
|DeletionProtection|object|false|none|none|
|CopyTagsToSnapshot|object|false|none|none|
|ServerlessV2ScalingConfiguration|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|none|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|

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
  "OptionGroupName": {},
  "VpcSecurityGroupIds": {},
  "Tags": {},
  "KmsKeyId": {},
  "EnableIAMDatabaseAuthentication": {},
  "EnableCloudwatchLogsExports": {},
  "DBClusterParameterGroupName": {},
  "DeletionProtection": {},
  "ServerlessV2ScalingConfiguration": {
    "MinCapacity": {},
    "MaxCapacity": {}
  }
}
```

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
|OptionGroupName|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|KmsKeyId|object|false|none|none|
|EnableIAMDatabaseAuthentication|object|false|none|none|
|EnableCloudwatchLogsExports|object|false|none|none|
|DBClusterParameterGroupName|object|false|none|none|
|DeletionProtection|object|false|none|none|
|ServerlessV2ScalingConfiguration|[ServerlessV2ScalingConfiguration](#schemaserverlessv2scalingconfiguration)|false|none|<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>|

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

<p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIdentifier|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|SubnetStatus|object|false|none|none|

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "TimezoneName": {}
}
```

A time zone associated with a <a>DBInstance</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimezoneName|object|false|none|none|

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
  "IsMajorVersionUpgrade": {},
  "SupportsGlobalDatabases": {}
}
```

The version of the database engine that a DB instance can be upgraded to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|Description|object|false|none|none|
|AutoUpgrade|object|false|none|none|
|IsMajorVersionUpgrade|object|false|none|none|
|SupportsGlobalDatabases|object|false|none|none|

<h2 id="tocS_ValidStorageOptionsList">ValidStorageOptionsList</h2>
<!-- backwards compatibility -->
<a id="schemavalidstorageoptionslist"></a>
<a id="schema_ValidStorageOptionsList"></a>
<a id="tocSvalidstorageoptionslist"></a>
<a id="tocsvalidstorageoptionslist"></a>

```json
[
  {
    "StorageType": {},
    "StorageSize": {},
    "ProvisionedIops": {},
    "IopsToStorageRatio": {}
  }
]
```

<h2 id="tocS_ValidStorageOptions">ValidStorageOptions</h2>
<!-- backwards compatibility -->
<a id="schemavalidstorageoptions"></a>
<a id="schema_ValidStorageOptions"></a>
<a id="tocSvalidstorageoptions"></a>
<a id="tocsvalidstorageoptions"></a>

```json
{
  "StorageType": {},
  "StorageSize": {},
  "ProvisionedIops": {},
  "IopsToStorageRatio": {}
}
```

<p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageType|object|false|none|none|
|StorageSize|object|false|none|none|
|ProvisionedIops|object|false|none|none|
|IopsToStorageRatio|object|false|none|none|

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

This data type is used as a response element for queries on VPC security group membership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcSecurityGroupId|object|false|none|none|
|Status|object|false|none|none|
