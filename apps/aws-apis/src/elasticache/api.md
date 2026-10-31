<h1 id="amazon-elasticache">Amazon ElastiCache v2015-02-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon ElastiCache</fullname> <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale a distributed cache in the cloud.</p> <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory cache with less of the administrative burden involved in launching and managing a distributed cache. The service makes setup, scaling, and cluster failure handling much simpler than in a self-managed cache deployment.</p> <p>In addition, through integration with Amazon CloudWatch, customers get enhanced visibility into the key performance statistics associated with their cache and can receive alarms if a part of their cache runs hot.</p>

Base URLs:

* <a href="http://elasticache.us-east-1.amazonaws.com">http://elasticache.us-east-1.amazonaws.com</a> - The Amazon ElastiCache multi-region endpoint

* <a href="https://elasticache.us-east-1.amazonaws.com">https://elasticache.us-east-1.amazonaws.com</a> - The Amazon ElastiCache multi-region endpoint

* <a href="http://elasticache.cn-north-1.amazonaws.com.cn">http://elasticache.cn-north-1.amazonaws.com.cn</a> - The Amazon ElastiCache endpoint for China (Beijing) and China (Ningxia)

* <a href="https://elasticache.cn-north-1.amazonaws.com.cn">https://elasticache.cn-north-1.amazonaws.com.cn</a> - The Amazon ElastiCache endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elasticache/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elasticache-default">Default</h1>

## GET_AddTagsToResource

<a id="opIdGET_AddTagsToResource"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=AddTagsToResource?ResourceName=string&Tags=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=AddTagsToResource&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddTagsToResource`

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>

<h3 id="getaddtagstoresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|<p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>. ElastiCache resources are <i>cluster</i> and <i>snapshot</i>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>|
|Tags|query|[object]|true|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Version|2015-02-02|

<h3 id="getaddtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|483|483|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|486|486|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|487|487|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|488|488|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|489|489|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|490|490|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|491|491|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddTagsToResource

<a id="opIdPOST_AddTagsToResource"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=AddTagsToResource?Action=AddTagsToResource&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"Tags":{}}'
```

`POST /#Action=AddTagsToResource`

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>

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
|Version|2015-02-02|

<h3 id="postaddtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|483|483|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|486|486|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|487|487|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|488|488|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|489|489|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|490|490|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|491|491|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AuthorizeCacheSecurityGroupIngress

<a id="opIdGET_AuthorizeCacheSecurityGroupIngress"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=AuthorizeCacheSecurityGroupIngress?CacheSecurityGroupName=string&EC2SecurityGroupName=string&EC2SecurityGroupOwnerId=string&Action=AuthorizeCacheSecurityGroupIngress&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AuthorizeCacheSecurityGroupIngress`

<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>

<h3 id="getauthorizecachesecuritygroupingress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|query|string|true|The cache security group that allows network ingress.|
|EC2SecurityGroupName|query|string|true|The Amazon EC2 security group to be authorized for ingress to the cache security group.|
|EC2SecurityGroupOwnerId|query|string|true|The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.|
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
|Action|AuthorizeCacheSecurityGroupIngress|
|Version|2015-02-02|

<h3 id="getauthorizecachesecuritygroupingress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AuthorizeCacheSecurityGroupIngressResult](#schemaauthorizecachesecuritygroupingressresult)|
|480|480|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|481|481|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|482|482|AuthorizationAlreadyExistsFault|[AuthorizationAlreadyExistsFault](#schemaauthorizationalreadyexistsfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AuthorizeCacheSecurityGroupIngress

<a id="opIdPOST_AuthorizeCacheSecurityGroupIngress"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=AuthorizeCacheSecurityGroupIngress?Action=AuthorizeCacheSecurityGroupIngress&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSecurityGroupName":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{}}'
```

`POST /#Action=AuthorizeCacheSecurityGroupIngress`

<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>

> Body parameter

```json
{
  "CacheSecurityGroupName": {},
  "EC2SecurityGroupName": {},
  "EC2SecurityGroupOwnerId": {}
}
```

<h3 id="postauthorizecachesecuritygroupingress-parameters">Parameters</h3>

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
|body|body|[AuthorizeCacheSecurityGroupIngressMessage](#schemaauthorizecachesecuritygroupingressmessage)|false|none|
|» CacheSecurityGroupName|body|object|true|none|
|» EC2SecurityGroupName|body|object|true|none|
|» EC2SecurityGroupOwnerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AuthorizeCacheSecurityGroupIngress|
|Version|2015-02-02|

<h3 id="postauthorizecachesecuritygroupingress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AuthorizeCacheSecurityGroupIngressResult](#schemaauthorizecachesecuritygroupingressresult)|
|480|480|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|481|481|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|482|482|AuthorizationAlreadyExistsFault|[AuthorizationAlreadyExistsFault](#schemaauthorizationalreadyexistsfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_BatchApplyUpdateAction

<a id="opIdGET_BatchApplyUpdateAction"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=BatchApplyUpdateAction?ServiceUpdateName=string&Action=BatchApplyUpdateAction&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BatchApplyUpdateAction`

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

<h3 id="getbatchapplyupdateaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupIds|query|[[String](#schemastring)]|false|The replication group IDs|
|CacheClusterIds|query|[[String](#schemastring)]|false|The cache cluster IDs|
|ServiceUpdateName|query|string|true|The unique ID of the service update|
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
|Action|BatchApplyUpdateAction|
|Version|2015-02-02|

<h3 id="getbatchapplyupdateaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateActionResultsMessage](#schemaupdateactionresultsmessage)|
|480|480|ServiceUpdateNotFoundFault|[ServiceUpdateNotFoundFault](#schemaserviceupdatenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BatchApplyUpdateAction

<a id="opIdPOST_BatchApplyUpdateAction"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=BatchApplyUpdateAction?Action=BatchApplyUpdateAction&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupIds":{},"CacheClusterIds":{},"ServiceUpdateName":{}}'
```

`POST /#Action=BatchApplyUpdateAction`

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

> Body parameter

```json
{
  "ReplicationGroupIds": {},
  "CacheClusterIds": {},
  "ServiceUpdateName": {}
}
```

<h3 id="postbatchapplyupdateaction-parameters">Parameters</h3>

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
|body|body|[BatchApplyUpdateActionMessage](#schemabatchapplyupdateactionmessage)|false|none|
|» ReplicationGroupIds|body|object|false|none|
|» CacheClusterIds|body|object|false|none|
|» ServiceUpdateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchApplyUpdateAction|
|Version|2015-02-02|

<h3 id="postbatchapplyupdateaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateActionResultsMessage](#schemaupdateactionresultsmessage)|
|480|480|ServiceUpdateNotFoundFault|[ServiceUpdateNotFoundFault](#schemaserviceupdatenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_BatchStopUpdateAction

<a id="opIdGET_BatchStopUpdateAction"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=BatchStopUpdateAction?ServiceUpdateName=string&Action=BatchStopUpdateAction&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BatchStopUpdateAction`

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

<h3 id="getbatchstopupdateaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupIds|query|[[String](#schemastring)]|false|The replication group IDs|
|CacheClusterIds|query|[[String](#schemastring)]|false|The cache cluster IDs|
|ServiceUpdateName|query|string|true|The unique ID of the service update|
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
|Action|BatchStopUpdateAction|
|Version|2015-02-02|

<h3 id="getbatchstopupdateaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateActionResultsMessage](#schemaupdateactionresultsmessage)|
|480|480|ServiceUpdateNotFoundFault|[ServiceUpdateNotFoundFault](#schemaserviceupdatenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BatchStopUpdateAction

<a id="opIdPOST_BatchStopUpdateAction"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=BatchStopUpdateAction?Action=BatchStopUpdateAction&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupIds":{},"CacheClusterIds":{},"ServiceUpdateName":{}}'
```

`POST /#Action=BatchStopUpdateAction`

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

> Body parameter

```json
{
  "ReplicationGroupIds": {},
  "CacheClusterIds": {},
  "ServiceUpdateName": {}
}
```

<h3 id="postbatchstopupdateaction-parameters">Parameters</h3>

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
|body|body|[BatchStopUpdateActionMessage](#schemabatchstopupdateactionmessage)|false|none|
|» ReplicationGroupIds|body|object|false|none|
|» CacheClusterIds|body|object|false|none|
|» ServiceUpdateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchStopUpdateAction|
|Version|2015-02-02|

<h3 id="postbatchstopupdateaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateActionResultsMessage](#schemaupdateactionresultsmessage)|
|480|480|ServiceUpdateNotFoundFault|[ServiceUpdateNotFoundFault](#schemaserviceupdatenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CompleteMigration

<a id="opIdGET_CompleteMigration"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CompleteMigration?ReplicationGroupId=string&Action=CompleteMigration&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CompleteMigration`

Complete the migration of data.

<h3 id="getcompletemigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The ID of the replication group to which data is being migrated.|
|Force|query|boolean|false|Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.|
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
|Action|CompleteMigration|
|Version|2015-02-02|

<h3 id="getcompletemigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteMigrationResponse](#schemacompletemigrationresponse)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|ReplicationGroupNotUnderMigrationFault|[ReplicationGroupNotUnderMigrationFault](#schemareplicationgroupnotundermigrationfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CompleteMigration

<a id="opIdPOST_CompleteMigration"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CompleteMigration?Action=CompleteMigration&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"Force":{}}'
```

`POST /#Action=CompleteMigration`

Complete the migration of data.

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "Force": {}
}
```

<h3 id="postcompletemigration-parameters">Parameters</h3>

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
|body|body|[CompleteMigrationMessage](#schemacompletemigrationmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» Force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CompleteMigration|
|Version|2015-02-02|

<h3 id="postcompletemigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteMigrationResponse](#schemacompletemigrationresponse)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|ReplicationGroupNotUnderMigrationFault|[ReplicationGroupNotUnderMigrationFault](#schemareplicationgroupnotundermigrationfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CopySnapshot

<a id="opIdGET_CopySnapshot"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CopySnapshot?SourceSnapshotName=string&TargetSnapshotName=string&Action=CopySnapshot&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CopySnapshot`

<p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>

<h3 id="getcopysnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceSnapshotName|query|string|true|The name of an existing snapshot from which to make a copy.|
|TargetSnapshotName|query|string|true|A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot, therefore this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.|
|TargetBucket|query|string|false|<p>The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access.</p> <p>When using this parameter to export a snapshot, be sure Amazon ElastiCache has the needed permissions to this S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the <i>Amazon ElastiCache User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting a Snapshot</a> in the <i>Amazon ElastiCache User Guide</i>.</p>|
|KmsKeyId|query|string|false|The ID of the KMS key used to encrypt the target snapshot.|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Action|CopySnapshot|
|Version|2015-02-02|

<h3 id="getcopysnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopySnapshotResult](#schemacopysnapshotresult)|
|480|480|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|481|481|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|482|482|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|483|483|InvalidSnapshotStateFault|[InvalidSnapshotStateFault](#schemainvalidsnapshotstatefault)|
|484|484|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CopySnapshot

<a id="opIdPOST_CopySnapshot"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CopySnapshot?Action=CopySnapshot&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceSnapshotName":{},"TargetSnapshotName":{},"TargetBucket":{},"KmsKeyId":{},"Tags":{}}'
```

`POST /#Action=CopySnapshot`

<p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>

> Body parameter

```json
{
  "SourceSnapshotName": {},
  "TargetSnapshotName": {},
  "TargetBucket": {},
  "KmsKeyId": {},
  "Tags": {}
}
```

<h3 id="postcopysnapshot-parameters">Parameters</h3>

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
|body|body|[CopySnapshotMessage](#schemacopysnapshotmessage)|false|none|
|» SourceSnapshotName|body|object|true|none|
|» TargetSnapshotName|body|object|true|none|
|» TargetBucket|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CopySnapshot|
|Version|2015-02-02|

<h3 id="postcopysnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopySnapshotResult](#schemacopysnapshotresult)|
|480|480|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|481|481|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|482|482|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|483|483|InvalidSnapshotStateFault|[InvalidSnapshotStateFault](#schemainvalidsnapshotstatefault)|
|484|484|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateCacheCluster

<a id="opIdGET_CreateCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheCluster?CacheClusterId=string&Action=CreateCacheCluster&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateCacheCluster`

<p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>

<h3 id="getcreatecachecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheClusterId|query|string|true|<p>The node group (shard) identifier. This parameter is stored as a lowercase string.</p> <p> <b>Constraints:</b> </p> <ul> <li> <p>A name must contain from 1 to 50 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>|
|ReplicationGroupId|query|string|false|<p>The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.</p> <p>If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>|
|AZMode|query|string|false|<p>Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.</p> <p>This parameter is only supported for Memcached clusters.</p> <p>If the <code>AZMode</code> and <code>PreferredAvailabilityZones</code> are not specified, ElastiCache assumes <code>single-az</code> mode.</p>|
|PreferredAvailabilityZone|query|string|false|<p>The EC2 Availability Zone in which the cluster is created.</p> <p>All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use <code>PreferredAvailabilityZones</code>.</p> <p>Default: System chosen Availability Zone.</p>|
|PreferredAvailabilityZones|query|[object]|false|<p>A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.</p> <p>This option is only supported on Memcached.</p> <note> <p>If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheNodes</code>.</p> </note> <p>If you want all the nodes in the same Availability Zone, use <code>PreferredAvailabilityZone</code> instead, or repeat the Availability Zone multiple times in the list.</p> <p>Default: System chosen Availability Zones.</p>|
|NumCacheNodes|query|integer|false|<p>The initial number of cache nodes that the cluster has.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p> <p>If you need more than 40 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at <a href="http://aws.amazon.com/contact-us/elasticache-node-limit-request/">http://aws.amazon.com/contact-us/elasticache-node-limit-request/</a>.</p>|
|CacheNodeType|query|string|false|<p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>|
|Engine|query|string|false|<p>The name of the cache engine to be used for this cluster.</p> <p>Valid values for this parameter are: <code>memcached</code> \| <code>redis</code> </p>|
|EngineVersion|query|string|false|<p>The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>|
|CacheParameterGroupName|query|string|false|The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has <code>cluster-enabled='yes'</code> when creating a cluster.|
|CacheSubnetGroupName|query|string|false|<p>The name of the subnet group to be used for the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p> <important> <p>If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>|
|CacheSecurityGroupNames|query|[object]|false|<p>A list of security group names to associate with this cluster.</p> <p>Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>|
|SecurityGroupIds|query|[object]|false|<p>One or more VPC security groups associated with the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>|
|Tags|query|[object]|false|A list of tags to be added to this resource.|
|SnapshotArns|query|[object]|false|<p>A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>|
|SnapshotName|query|string|false|<p>The name of a Redis snapshot from which to restore data into the new node group (shard). The snapshot status changes to <code>restoring</code> while the new node group (shard) is being created.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>|
|PreferredMaintenanceWindow|query|string|false|Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. |
|Port|query|integer|false|The port number on which each of the cache nodes accepts connections.|
|NotificationTopicArn|query|string|false|<p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>|
|AutoMinorVersionUpgrade|query|boolean|false| If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  |
|SnapshotRetentionLimit|query|integer|false|<p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot taken today is retained for 5 days before being deleted.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Default: 0 (i.e., automatic backups are disabled for this cache cluster).</p>|
|SnapshotWindow|query|string|false|<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>|
|AuthToken|query|string|false|<p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>|
|OutpostMode|query|string|false|Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.|
|PreferredOutpostArn|query|string|false|The outpost ARN in which the cache cluster is created.|
|PreferredOutpostArns|query|[object]|false|The outpost ARNs in which the cache cluster is created.|
|LogDeliveryConfigurations|query|[object]|false|Specifies the destination, format and type of the logs. |
|TransitEncryptionEnabled|query|boolean|false|A flag that enables in-transit encryption when set to true.|
|NetworkType|query|string|false|Must be either <code>ipv4</code> \| <code>ipv6</code> \| <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>. |
|IpDiscovery|query|string|false|The network type you choose when modifying a cluster, either <code>ipv4</code> \| <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.|
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
|AZMode|single-az|
|AZMode|cross-az|
|OutpostMode|single-outpost|
|OutpostMode|cross-outpost|
|NetworkType|ipv4|
|NetworkType|ipv6|
|NetworkType|dual_stack|
|IpDiscovery|ipv4|
|IpDiscovery|ipv6|
|Action|CreateCacheCluster|
|Version|2015-02-02|

<h3 id="getcreatecachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheClusterResult](#schemacreatecacheclusterresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|CacheClusterAlreadyExistsFault|[CacheClusterAlreadyExistsFault](#schemacacheclusteralreadyexistsfault)|
|483|483|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|484|484|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|485|485|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|486|486|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|487|487|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|488|488|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|489|489|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|490|490|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|491|491|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|492|492|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|493|493|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateCacheCluster

<a id="opIdPOST_CreateCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheCluster?Action=CreateCacheCluster&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheClusterId":{},"ReplicationGroupId":{},"AZMode":{},"PreferredAvailabilityZone":{},"PreferredAvailabilityZones":{},"NumCacheNodes":{},"CacheNodeType":{},"Engine":{},"EngineVersion":{},"CacheParameterGroupName":{},"CacheSubnetGroupName":{},"CacheSecurityGroupNames":{},"SecurityGroupIds":{},"Tags":{},"SnapshotArns":{},"SnapshotName":{},"PreferredMaintenanceWindow":{},"Port":{},"NotificationTopicArn":{},"AutoMinorVersionUpgrade":{},"SnapshotRetentionLimit":{},"SnapshotWindow":{},"AuthToken":{},"OutpostMode":{},"PreferredOutpostArn":{},"PreferredOutpostArns":{},"LogDeliveryConfigurations":{},"TransitEncryptionEnabled":{},"NetworkType":{},"IpDiscovery":{}}'
```

`POST /#Action=CreateCacheCluster`

<p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>

> Body parameter

```json
{
  "CacheClusterId": {},
  "ReplicationGroupId": {},
  "AZMode": {},
  "PreferredAvailabilityZone": {},
  "PreferredAvailabilityZones": {},
  "NumCacheNodes": {},
  "CacheNodeType": {},
  "Engine": {},
  "EngineVersion": {},
  "CacheParameterGroupName": {},
  "CacheSubnetGroupName": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "SnapshotArns": {},
  "SnapshotName": {},
  "PreferredMaintenanceWindow": {},
  "Port": {},
  "NotificationTopicArn": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "AuthToken": {},
  "OutpostMode": {},
  "PreferredOutpostArn": {},
  "PreferredOutpostArns": {},
  "LogDeliveryConfigurations": {},
  "TransitEncryptionEnabled": {},
  "NetworkType": {},
  "IpDiscovery": {}
}
```

<h3 id="postcreatecachecluster-parameters">Parameters</h3>

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
|body|body|[CreateCacheClusterMessage](#schemacreatecacheclustermessage)|false|none|
|» CacheClusterId|body|object|true|none|
|» ReplicationGroupId|body|object|false|none|
|» AZMode|body|object|false|none|
|» PreferredAvailabilityZone|body|object|false|none|
|» PreferredAvailabilityZones|body|object|false|none|
|» NumCacheNodes|body|object|false|none|
|» CacheNodeType|body|object|false|none|
|» Engine|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» CacheParameterGroupName|body|object|false|none|
|» CacheSubnetGroupName|body|object|false|none|
|» CacheSecurityGroupNames|body|object|false|none|
|» SecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» SnapshotArns|body|object|false|none|
|» SnapshotName|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» Port|body|object|false|none|
|» NotificationTopicArn|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» SnapshotRetentionLimit|body|object|false|none|
|» SnapshotWindow|body|object|false|none|
|» AuthToken|body|object|false|none|
|» OutpostMode|body|object|false|none|
|» PreferredOutpostArn|body|object|false|none|
|» PreferredOutpostArns|body|object|false|none|
|» LogDeliveryConfigurations|body|object|false|none|
|» LogType|body|object|false|none|
|» DestinationType|body|object|false|none|
|» DestinationDetails|body|object|false|none|
|» » CloudWatchLogsDetails|body|object|false|none|
|» » » LogGroup|body|object|false|none|
|» » KinesisFirehoseDetails|body|object|false|none|
|» » » DeliveryStream|body|object|false|none|
|» LogFormat|body|object|false|none|
|» Enabled|body|object|false|none|
|» TransitEncryptionEnabled|body|object|false|none|
|» NetworkType|body|object|false|none|
|» IpDiscovery|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateCacheCluster|
|Version|2015-02-02|

<h3 id="postcreatecachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheClusterResult](#schemacreatecacheclusterresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|CacheClusterAlreadyExistsFault|[CacheClusterAlreadyExistsFault](#schemacacheclusteralreadyexistsfault)|
|483|483|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|484|484|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|485|485|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|486|486|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|487|487|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|488|488|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|489|489|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|490|490|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|491|491|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|492|492|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|493|493|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateCacheParameterGroup

<a id="opIdGET_CreateCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheParameterGroup?CacheParameterGroupName=string&CacheParameterGroupFamily=string&Description=string&Action=CreateCacheParameterGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateCacheParameterGroup`

<p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>

<h3 id="getcreatecacheparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheParameterGroupName|query|string|true|A user-specified name for the cache parameter group.|
|CacheParameterGroupFamily|query|string|true|<p>The name of the cache parameter group family that the cache parameter group can be used with.</p> <p>Valid values are: <code>memcached1.4</code> \| <code>memcached1.5</code> \| <code>memcached1.6</code> \| <code>redis2.6</code> \| <code>redis2.8</code> \| <code>redis3.2</code> \| <code>redis4.0</code> \| <code>redis5.0</code> \| <code>redis6.x</code> \| <code>redis7</code> </p>|
|Description|query|string|true|A user-specified description for the cache parameter group.|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Action|CreateCacheParameterGroup|
|Version|2015-02-02|

<h3 id="getcreatecacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheParameterGroupResult](#schemacreatecacheparametergroupresult)|
|480|480|CacheParameterGroupQuotaExceededFault|[CacheParameterGroupQuotaExceededFault](#schemacacheparametergroupquotaexceededfault)|
|481|481|CacheParameterGroupAlreadyExistsFault|[CacheParameterGroupAlreadyExistsFault](#schemacacheparametergroupalreadyexistsfault)|
|482|482|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|483|483|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateCacheParameterGroup

<a id="opIdPOST_CreateCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheParameterGroup?Action=CreateCacheParameterGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheParameterGroupName":{},"CacheParameterGroupFamily":{},"Description":{},"Tags":{}}'
```

`POST /#Action=CreateCacheParameterGroup`

<p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>

> Body parameter

```json
{
  "CacheParameterGroupName": {},
  "CacheParameterGroupFamily": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="postcreatecacheparametergroup-parameters">Parameters</h3>

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
|body|body|[CreateCacheParameterGroupMessage](#schemacreatecacheparametergroupmessage)|false|none|
|» CacheParameterGroupName|body|object|true|none|
|» CacheParameterGroupFamily|body|object|true|none|
|» Description|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateCacheParameterGroup|
|Version|2015-02-02|

<h3 id="postcreatecacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheParameterGroupResult](#schemacreatecacheparametergroupresult)|
|480|480|CacheParameterGroupQuotaExceededFault|[CacheParameterGroupQuotaExceededFault](#schemacacheparametergroupquotaexceededfault)|
|481|481|CacheParameterGroupAlreadyExistsFault|[CacheParameterGroupAlreadyExistsFault](#schemacacheparametergroupalreadyexistsfault)|
|482|482|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|483|483|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateCacheSecurityGroup

<a id="opIdGET_CreateCacheSecurityGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheSecurityGroup?CacheSecurityGroupName=string&Description=string&Action=CreateCacheSecurityGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateCacheSecurityGroup`

<p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>

<h3 id="getcreatecachesecuritygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|query|string|true|<p>A name for the cache security group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default".</p> <p>Example: <code>mysecuritygroup</code> </p>|
|Description|query|string|true|A description for the cache security group.|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Action|CreateCacheSecurityGroup|
|Version|2015-02-02|

<h3 id="getcreatecachesecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheSecurityGroupResult](#schemacreatecachesecuritygroupresult)|
|480|480|CacheSecurityGroupAlreadyExistsFault|[CacheSecurityGroupAlreadyExistsFault](#schemacachesecuritygroupalreadyexistsfault)|
|481|481|CacheSecurityGroupQuotaExceededFault|[CacheSecurityGroupQuotaExceededFault](#schemacachesecuritygroupquotaexceededfault)|
|482|482|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateCacheSecurityGroup

<a id="opIdPOST_CreateCacheSecurityGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheSecurityGroup?Action=CreateCacheSecurityGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSecurityGroupName":{},"Description":{},"Tags":{}}'
```

`POST /#Action=CreateCacheSecurityGroup`

<p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>

> Body parameter

```json
{
  "CacheSecurityGroupName": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="postcreatecachesecuritygroup-parameters">Parameters</h3>

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
|body|body|[CreateCacheSecurityGroupMessage](#schemacreatecachesecuritygroupmessage)|false|none|
|» CacheSecurityGroupName|body|object|true|none|
|» Description|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateCacheSecurityGroup|
|Version|2015-02-02|

<h3 id="postcreatecachesecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheSecurityGroupResult](#schemacreatecachesecuritygroupresult)|
|480|480|CacheSecurityGroupAlreadyExistsFault|[CacheSecurityGroupAlreadyExistsFault](#schemacachesecuritygroupalreadyexistsfault)|
|481|481|CacheSecurityGroupQuotaExceededFault|[CacheSecurityGroupQuotaExceededFault](#schemacachesecuritygroupquotaexceededfault)|
|482|482|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateCacheSubnetGroup

<a id="opIdGET_CreateCacheSubnetGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheSubnetGroup?CacheSubnetGroupName=string&CacheSubnetGroupDescription=string&SubnetIds=%7B%7D&Action=CreateCacheSubnetGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateCacheSubnetGroup`

<p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>

<h3 id="getcreatecachesubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|query|string|true|<p>A name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>|
|CacheSubnetGroupDescription|query|string|true|A description for the cache subnet group.|
|SubnetIds|query|[object]|true|A list of VPC subnet IDs for the cache subnet group.|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Action|CreateCacheSubnetGroup|
|Version|2015-02-02|

<h3 id="getcreatecachesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheSubnetGroupResult](#schemacreatecachesubnetgroupresult)|
|480|480|CacheSubnetGroupAlreadyExistsFault|[CacheSubnetGroupAlreadyExistsFault](#schemacachesubnetgroupalreadyexistsfault)|
|481|481|CacheSubnetGroupQuotaExceededFault|[CacheSubnetGroupQuotaExceededFault](#schemacachesubnetgroupquotaexceededfault)|
|482|482|CacheSubnetQuotaExceededFault|[CacheSubnetQuotaExceededFault](#schemacachesubnetquotaexceededfault)|
|483|483|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|484|484|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|485|485|SubnetNotAllowedFault|[SubnetNotAllowedFault](#schemasubnetnotallowedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateCacheSubnetGroup

<a id="opIdPOST_CreateCacheSubnetGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateCacheSubnetGroup?Action=CreateCacheSubnetGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSubnetGroupName":{},"CacheSubnetGroupDescription":{},"SubnetIds":{},"Tags":{}}'
```

`POST /#Action=CreateCacheSubnetGroup`

<p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>

> Body parameter

```json
{
  "CacheSubnetGroupName": {},
  "CacheSubnetGroupDescription": {},
  "SubnetIds": {},
  "Tags": {}
}
```

<h3 id="postcreatecachesubnetgroup-parameters">Parameters</h3>

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
|body|body|[CreateCacheSubnetGroupMessage](#schemacreatecachesubnetgroupmessage)|false|none|
|» CacheSubnetGroupName|body|object|true|none|
|» CacheSubnetGroupDescription|body|object|true|none|
|» SubnetIds|body|object|true|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateCacheSubnetGroup|
|Version|2015-02-02|

<h3 id="postcreatecachesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCacheSubnetGroupResult](#schemacreatecachesubnetgroupresult)|
|480|480|CacheSubnetGroupAlreadyExistsFault|[CacheSubnetGroupAlreadyExistsFault](#schemacachesubnetgroupalreadyexistsfault)|
|481|481|CacheSubnetGroupQuotaExceededFault|[CacheSubnetGroupQuotaExceededFault](#schemacachesubnetgroupquotaexceededfault)|
|482|482|CacheSubnetQuotaExceededFault|[CacheSubnetQuotaExceededFault](#schemacachesubnetquotaexceededfault)|
|483|483|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|484|484|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|485|485|SubnetNotAllowedFault|[SubnetNotAllowedFault](#schemasubnetnotallowedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateGlobalReplicationGroup

<a id="opIdGET_CreateGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateGlobalReplicationGroup?GlobalReplicationGroupIdSuffix=string&PrimaryReplicationGroupId=string&Action=CreateGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateGlobalReplicationGroup`

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

<h3 id="getcreateglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupIdSuffix|query|string|true|<p>The suffix name of a Global datastore. Amazon ElastiCache automatically applies a prefix to the Global datastore ID when it is created. Each Amazon Region has its own prefix. For instance, a Global datastore ID created in the US-West-1 region will begin with "dsdfu" along with the suffix name you provide. The suffix, combined with the auto-generated prefix, guarantees uniqueness of the Global datastore name across multiple regions. </p> <p>For a full list of Amazon Regions and their respective Global datastore iD prefixes, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastores-CLI.html">Using the Amazon CLI with Global datastores </a>.</p>|
|GlobalReplicationGroupDescription|query|string|false|Provides details of the Global datastore|
|PrimaryReplicationGroupId|query|string|true|The name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.|
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
|Action|CreateGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getcreateglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGlobalReplicationGroupResult](#schemacreateglobalreplicationgroupresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|GlobalReplicationGroupAlreadyExistsFault|[GlobalReplicationGroupAlreadyExistsFault](#schemaglobalreplicationgroupalreadyexistsfault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateGlobalReplicationGroup

<a id="opIdPOST_CreateGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateGlobalReplicationGroup?Action=CreateGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupIdSuffix":{},"GlobalReplicationGroupDescription":{},"PrimaryReplicationGroupId":{}}'
```

`POST /#Action=CreateGlobalReplicationGroup`

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

> Body parameter

```json
{
  "GlobalReplicationGroupIdSuffix": {},
  "GlobalReplicationGroupDescription": {},
  "PrimaryReplicationGroupId": {}
}
```

<h3 id="postcreateglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[CreateGlobalReplicationGroupMessage](#schemacreateglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupIdSuffix|body|object|true|none|
|» GlobalReplicationGroupDescription|body|object|false|none|
|» PrimaryReplicationGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postcreateglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGlobalReplicationGroupResult](#schemacreateglobalreplicationgroupresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|GlobalReplicationGroupAlreadyExistsFault|[GlobalReplicationGroupAlreadyExistsFault](#schemaglobalreplicationgroupalreadyexistsfault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateReplicationGroup

<a id="opIdGET_CreateReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateReplicationGroup?ReplicationGroupId=string&ReplicationGroupDescription=string&Action=CreateReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateReplicationGroup`

<p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>

<h3 id="getcreatereplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|<p>The replication group identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>A name must contain from 1 to 40 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>|
|ReplicationGroupDescription|query|string|true|A user-created description for the replication group.|
|GlobalReplicationGroupId|query|string|false|The name of the Global datastore|
|PrimaryClusterId|query|string|false|<p>The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of <code>available</code>.</p> <p>This parameter is not required if <code>NumCacheClusters</code>, <code>NumNodeGroups</code>, or <code>ReplicasPerNodeGroup</code> is specified.</p>|
|AutomaticFailoverEnabled|query|boolean|false|<p>Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.</p> <p> <code>AutomaticFailoverEnabled</code> must be enabled for Redis (cluster mode enabled) replication groups.</p> <p>Default: false</p>|
|MultiAZEnabled|query|boolean|false|A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a>.|
|NumCacheClusters|query|integer|false|<p>The number of clusters this replication group initially has.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>ReplicasPerNodeGroup</code> instead.</p> <p>If <code>AutomaticFailoverEnabled</code> is <code>true</code>, the value of this parameter must be at least 2. If <code>AutomaticFailoverEnabled</code> is <code>false</code> you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6.</p> <p>The maximum permitted value for <code>NumCacheClusters</code> is 6 (1 primary plus 5 replicas).</p>|
|PreferredCacheClusterAZs|query|[object]|false|<p>A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>NodeGroupConfiguration</code> instead.</p> <note> <p>If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheClusters</code>.</p> </note> <p>Default: system chosen Availability Zones.</p>|
|NumNodeGroups|query|integer|false|<p>An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.</p> <p>Default: 1</p>|
|ReplicasPerNodeGroup|query|integer|false|An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.|
|NodeGroupConfiguration|query|[object]|false|<p>A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>, and <code>Slots</code>.</p> <p>If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Redis (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.</p>|
|CacheNodeType|query|string|false|<p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>|
|Engine|query|string|false|The name of the cache engine to be used for the clusters in this replication group. The value must be set to <code>Redis</code>.|
|EngineVersion|query|string|false|<p>The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the <code>DescribeCacheEngineVersions</code> operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>) in the <i>ElastiCache User Guide</i>, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>|
|CacheParameterGroupName|query|string|false|<p>The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.</p> <p>If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name. </p> <ul> <li> <p>To create a Redis (cluster mode disabled) replication group, use <code>CacheParameterGroupName=default.redis3.2</code>.</p> </li> <li> <p>To create a Redis (cluster mode enabled) replication group, use <code>CacheParameterGroupName=default.redis3.2.cluster.on</code>.</p> </li> </ul>|
|CacheSubnetGroupName|query|string|false|<p>The name of the cache subnet group to be used for the replication group.</p> <important> <p>If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>|
|CacheSecurityGroupNames|query|[object]|false|A list of cache security group names to associate with this replication group.|
|SecurityGroupIds|query|[object]|false|<p>One or more Amazon VPC security groups associated with this replication group.</p> <p>Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).</p>|
|Tags|query|[object]|false|A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=<code>myKey</code>, Value=<code>myKeyValue</code>. You can include multiple tags as shown following: Key=<code>myKey</code>, Value=<code>myKeyValue</code> Key=<code>mySecondKey</code>, Value=<code>mySecondKeyValue</code>. Tags on replication groups will be replicated to all nodes.|
|SnapshotArns|query|[object]|false|<p>A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter <i>NumNodeGroups</i> or the number of node groups configured by <i>NodeGroupConfiguration</i> regardless of the number of ARNs specified here.</p> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>|
|SnapshotName|query|string|false|The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to <code>restoring</code> while the new replication group is being created.|
|PreferredMaintenanceWindow|query|string|false|<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for <code>ddd</code> are:</p> <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>|
|Port|query|integer|false|The port number on which each member of the replication group accepts connections.|
|NotificationTopicArn|query|string|false|<p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>|
|AutoMinorVersionUpgrade|query|boolean|false| If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  |
|SnapshotRetentionLimit|query|integer|false|<p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p>Default: 0 (i.e., automatic backups are disabled for this cluster).</p>|
|SnapshotWindow|query|string|false|<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>|
|AuthToken|query|string|false|<p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p> <code>AuthToken</code> can be specified only on replication groups where <code>TransitEncryptionEnabled</code> is <code>true</code>.</p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>|
|TransitEncryptionEnabled|query|boolean|false|<p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p>This parameter is valid only if the <code>Engine</code> parameter is <code>redis</code>, the <code>EngineVersion</code> parameter is <code>3.2.6</code>, <code>4.x</code> or later, and the cluster is being created in an Amazon VPC.</p> <p>If you enable in-transit encryption, you must also specify a value for <code>CacheSubnetGroup</code>.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important>|
|AtRestEncryptionEnabled|query|boolean|false|<p>A flag that enables encryption at rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication group is created. To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create the replication group. </p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>|
|KmsKeyId|query|string|false|The ID of the KMS key used to encrypt the disk in the cluster.|
|UserGroupIds|query|[[UserGroupId](#schemausergroupid)]|false|The user group to associate with the replication group.|
|LogDeliveryConfigurations|query|[object]|false|Specifies the destination, format and type of the logs.|
|DataTieringEnabled|query|boolean|false|Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.|
|NetworkType|query|string|false|Must be either <code>ipv4</code> \| <code>ipv6</code> \| <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.|
|IpDiscovery|query|string|false|The network type you choose when creating a replication group, either <code>ipv4</code> \| <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.|
|TransitEncryptionMode|query|string|false|<p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p> <p>When setting <code>TransitEncryptionEnabled</code> to <code>true</code>, you can set your <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can modify the value to <code>required</code> to allow encrypted connections only.</p> <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to <code>required</code>.</p> <p>This process will not trigger the replacement of the replication group.</p>|
|ClusterMode|query|string|false|Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.|
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
|NetworkType|ipv4|
|NetworkType|ipv6|
|NetworkType|dual_stack|
|IpDiscovery|ipv4|
|IpDiscovery|ipv6|
|TransitEncryptionMode|preferred|
|TransitEncryptionMode|required|
|ClusterMode|enabled|
|ClusterMode|disabled|
|ClusterMode|compatible|
|Action|CreateReplicationGroup|
|Version|2015-02-02|

<h3 id="getcreatereplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReplicationGroupResult](#schemacreatereplicationgroupresult)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|482|482|ReplicationGroupAlreadyExistsFault|[ReplicationGroupAlreadyExistsFault](#schemareplicationgroupalreadyexistsfault)|
|483|483|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|484|484|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|485|485|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|486|486|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|487|487|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|488|488|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|489|489|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|490|490|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|491|491|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|492|492|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|493|493|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|494|494|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|495|495|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|496|496|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|497|497|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|498|498|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateReplicationGroup

<a id="opIdPOST_CreateReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateReplicationGroup?Action=CreateReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"ReplicationGroupDescription":{},"GlobalReplicationGroupId":{},"PrimaryClusterId":{},"AutomaticFailoverEnabled":{},"MultiAZEnabled":{},"NumCacheClusters":{},"PreferredCacheClusterAZs":{},"NumNodeGroups":{},"ReplicasPerNodeGroup":{},"NodeGroupConfiguration":{},"CacheNodeType":{},"Engine":{},"EngineVersion":{},"CacheParameterGroupName":{},"CacheSubnetGroupName":{},"CacheSecurityGroupNames":{},"SecurityGroupIds":{},"Tags":{},"SnapshotArns":{},"SnapshotName":{},"PreferredMaintenanceWindow":{},"Port":{},"NotificationTopicArn":{},"AutoMinorVersionUpgrade":{},"SnapshotRetentionLimit":{},"SnapshotWindow":{},"AuthToken":{},"TransitEncryptionEnabled":{},"AtRestEncryptionEnabled":{},"KmsKeyId":{},"UserGroupIds":{},"LogDeliveryConfigurations":{},"DataTieringEnabled":{},"NetworkType":{},"IpDiscovery":{},"TransitEncryptionMode":{},"ClusterMode":{}}'
```

`POST /#Action=CreateReplicationGroup`

<p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "ReplicationGroupDescription": {},
  "GlobalReplicationGroupId": {},
  "PrimaryClusterId": {},
  "AutomaticFailoverEnabled": {},
  "MultiAZEnabled": {},
  "NumCacheClusters": {},
  "PreferredCacheClusterAZs": {},
  "NumNodeGroups": {},
  "ReplicasPerNodeGroup": {},
  "NodeGroupConfiguration": {},
  "CacheNodeType": {},
  "Engine": {},
  "EngineVersion": {},
  "CacheParameterGroupName": {},
  "CacheSubnetGroupName": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "SnapshotArns": {},
  "SnapshotName": {},
  "PreferredMaintenanceWindow": {},
  "Port": {},
  "NotificationTopicArn": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "AuthToken": {},
  "TransitEncryptionEnabled": {},
  "AtRestEncryptionEnabled": {},
  "KmsKeyId": {},
  "UserGroupIds": {},
  "LogDeliveryConfigurations": {},
  "DataTieringEnabled": {},
  "NetworkType": {},
  "IpDiscovery": {},
  "TransitEncryptionMode": {},
  "ClusterMode": {}
}
```

<h3 id="postcreatereplicationgroup-parameters">Parameters</h3>

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
|body|body|[CreateReplicationGroupMessage](#schemacreatereplicationgroupmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» ReplicationGroupDescription|body|object|true|none|
|» GlobalReplicationGroupId|body|object|false|none|
|» PrimaryClusterId|body|object|false|none|
|» AutomaticFailoverEnabled|body|object|false|none|
|» MultiAZEnabled|body|object|false|none|
|» NumCacheClusters|body|object|false|none|
|» PreferredCacheClusterAZs|body|object|false|none|
|» NumNodeGroups|body|object|false|none|
|» ReplicasPerNodeGroup|body|object|false|none|
|» NodeGroupConfiguration|body|object|false|none|
|» NodeGroupId|body|object|false|none|
|» Slots|body|object|false|none|
|» ReplicaCount|body|object|false|none|
|» PrimaryAvailabilityZone|body|object|false|none|
|» ReplicaAvailabilityZones|body|object|false|none|
|» PrimaryOutpostArn|body|object|false|none|
|» ReplicaOutpostArns|body|object|false|none|
|» CacheNodeType|body|object|false|none|
|» Engine|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» CacheParameterGroupName|body|object|false|none|
|» CacheSubnetGroupName|body|object|false|none|
|» CacheSecurityGroupNames|body|object|false|none|
|» SecurityGroupIds|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» SnapshotArns|body|object|false|none|
|» SnapshotName|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» Port|body|object|false|none|
|» NotificationTopicArn|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» SnapshotRetentionLimit|body|object|false|none|
|» SnapshotWindow|body|object|false|none|
|» AuthToken|body|object|false|none|
|» TransitEncryptionEnabled|body|object|false|none|
|» AtRestEncryptionEnabled|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» UserGroupIds|body|object|false|none|
|» LogDeliveryConfigurations|body|object|false|none|
|» LogType|body|object|false|none|
|» DestinationType|body|object|false|none|
|» DestinationDetails|body|object|false|none|
|» » CloudWatchLogsDetails|body|object|false|none|
|» » » LogGroup|body|object|false|none|
|» » KinesisFirehoseDetails|body|object|false|none|
|» » » DeliveryStream|body|object|false|none|
|» LogFormat|body|object|false|none|
|» Enabled|body|object|false|none|
|» DataTieringEnabled|body|object|false|none|
|» NetworkType|body|object|false|none|
|» IpDiscovery|body|object|false|none|
|» TransitEncryptionMode|body|object|false|none|
|» ClusterMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateReplicationGroup|
|Version|2015-02-02|

<h3 id="postcreatereplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReplicationGroupResult](#schemacreatereplicationgroupresult)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|482|482|ReplicationGroupAlreadyExistsFault|[ReplicationGroupAlreadyExistsFault](#schemareplicationgroupalreadyexistsfault)|
|483|483|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|484|484|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|485|485|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|486|486|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|487|487|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|488|488|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|489|489|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|490|490|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|491|491|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|492|492|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|493|493|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|494|494|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|495|495|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|496|496|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|497|497|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|498|498|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateSnapshot

<a id="opIdGET_CreateSnapshot"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateSnapshot?SnapshotName=string&Action=CreateSnapshot&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateSnapshot`

<p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>

<h3 id="getcreatesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|false|The identifier of an existing replication group. The snapshot is created from this replication group.|
|CacheClusterId|query|string|false|The identifier of an existing cluster. The snapshot is created from this cluster.|
|SnapshotName|query|string|true|A name for the snapshot being created.|
|KmsKeyId|query|string|false|The ID of the KMS key used to encrypt the snapshot.|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Action|CreateSnapshot|
|Version|2015-02-02|

<h3 id="getcreatesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSnapshotResult](#schemacreatesnapshotresult)|
|480|480|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|481|481|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|482|482|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|483|483|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|486|486|SnapshotFeatureNotSupportedFault|[SnapshotFeatureNotSupportedFault](#schemasnapshotfeaturenotsupportedfault)|
|487|487|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|489|489|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateSnapshot

<a id="opIdPOST_CreateSnapshot"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateSnapshot?Action=CreateSnapshot&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"CacheClusterId":{},"SnapshotName":{},"KmsKeyId":{},"Tags":{}}'
```

`POST /#Action=CreateSnapshot`

<p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "CacheClusterId": {},
  "SnapshotName": {},
  "KmsKeyId": {},
  "Tags": {}
}
```

<h3 id="postcreatesnapshot-parameters">Parameters</h3>

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
|body|body|[CreateSnapshotMessage](#schemacreatesnapshotmessage)|false|none|
|» ReplicationGroupId|body|object|false|none|
|» CacheClusterId|body|object|false|none|
|» SnapshotName|body|object|true|none|
|» KmsKeyId|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateSnapshot|
|Version|2015-02-02|

<h3 id="postcreatesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSnapshotResult](#schemacreatesnapshotresult)|
|480|480|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|481|481|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|482|482|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|483|483|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|486|486|SnapshotFeatureNotSupportedFault|[SnapshotFeatureNotSupportedFault](#schemasnapshotfeaturenotsupportedfault)|
|487|487|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|489|489|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateUser

<a id="opIdGET_CreateUser"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateUser?UserId=string&UserName=string&Engine=string&AccessString=string&Action=CreateUser&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateUser`

For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.

<h3 id="getcreateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|query|string|true|The ID of the user.|
|UserName|query|string|true|The username of the user.|
|Engine|query|string|true|The current supported value is Redis. |
|Passwords|query|[[String](#schemastring)]|false|Passwords used for this user. You can create up to two passwords for each user.|
|AccessString|query|string|true|Access permissions string used for this user.|
|NoPasswordRequired|query|boolean|false|Indicates a password is not required for this user.|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
|AuthenticationMode|query|object|false|Specifies how to authenticate the user.|
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
|Action|CreateUser|
|Version|2015-02-02|

<h3 id="getcreateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|480|480|UserAlreadyExistsFault|[UserAlreadyExistsFault](#schemauseralreadyexistsfault)|
|481|481|UserQuotaExceededFault|[UserQuotaExceededFault](#schemauserquotaexceededfault)|
|482|482|DuplicateUserNameFault|[DuplicateUserNameFault](#schemaduplicateusernamefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|486|486|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateUser

<a id="opIdPOST_CreateUser"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateUser?Action=CreateUser&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"UserId":{},"UserName":{},"Engine":{},"Passwords":{},"AccessString":{},"NoPasswordRequired":{},"Tags":{},"AuthenticationMode":{"Type":{},"Passwords":{}}}'
```

`POST /#Action=CreateUser`

For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.

> Body parameter

```json
{
  "UserId": {},
  "UserName": {},
  "Engine": {},
  "Passwords": {},
  "AccessString": {},
  "NoPasswordRequired": {},
  "Tags": {},
  "AuthenticationMode": {
    "Type": {},
    "Passwords": {}
  }
}
```

<h3 id="postcreateuser-parameters">Parameters</h3>

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
|body|body|[CreateUserMessage](#schemacreateusermessage)|false|none|
|» UserId|body|object|true|none|
|» UserName|body|object|true|none|
|» Engine|body|object|true|none|
|» Passwords|body|object|false|none|
|» AccessString|body|object|true|none|
|» NoPasswordRequired|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|
|» AuthenticationMode|body|object|false|none|
|» » Type|body|object|false|none|
|» » Passwords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateUser|
|Version|2015-02-02|

<h3 id="postcreateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|480|480|UserAlreadyExistsFault|[UserAlreadyExistsFault](#schemauseralreadyexistsfault)|
|481|481|UserQuotaExceededFault|[UserQuotaExceededFault](#schemauserquotaexceededfault)|
|482|482|DuplicateUserNameFault|[DuplicateUserNameFault](#schemaduplicateusernamefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|486|486|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateUserGroup

<a id="opIdGET_CreateUserGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateUserGroup?UserGroupId=string&Engine=string&Action=CreateUserGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateUserGroup`

For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 

<h3 id="getcreateusergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserGroupId|query|string|true|The ID of the user group.|
|Engine|query|string|true|The current supported value is Redis. |
|UserIds|query|[[UserId](#schemauserid)]|false|The list of user IDs that belong to the user group.|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Action|CreateUserGroup|
|Version|2015-02-02|

<h3 id="getcreateusergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserGroup](#schemausergroup)|
|480|480|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|481|481|DuplicateUserNameFault|[DuplicateUserNameFault](#schemaduplicateusernamefault)|
|482|482|UserGroupAlreadyExistsFault|[UserGroupAlreadyExistsFault](#schemausergroupalreadyexistsfault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|DefaultUserRequired|[DefaultUserRequired](#schemadefaultuserrequired)|
|485|485|UserGroupQuotaExceededFault|[UserGroupQuotaExceededFault](#schemausergroupquotaexceededfault)|
|486|486|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|487|487|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateUserGroup

<a id="opIdPOST_CreateUserGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=CreateUserGroup?Action=CreateUserGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"UserGroupId":{},"Engine":{},"UserIds":{},"Tags":{}}'
```

`POST /#Action=CreateUserGroup`

For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 

> Body parameter

```json
{
  "UserGroupId": {},
  "Engine": {},
  "UserIds": {},
  "Tags": {}
}
```

<h3 id="postcreateusergroup-parameters">Parameters</h3>

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
|body|body|[CreateUserGroupMessage](#schemacreateusergroupmessage)|false|none|
|» UserGroupId|body|object|true|none|
|» Engine|body|object|true|none|
|» UserIds|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateUserGroup|
|Version|2015-02-02|

<h3 id="postcreateusergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserGroup](#schemausergroup)|
|480|480|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|481|481|DuplicateUserNameFault|[DuplicateUserNameFault](#schemaduplicateusernamefault)|
|482|482|UserGroupAlreadyExistsFault|[UserGroupAlreadyExistsFault](#schemausergroupalreadyexistsfault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|DefaultUserRequired|[DefaultUserRequired](#schemadefaultuserrequired)|
|485|485|UserGroupQuotaExceededFault|[UserGroupQuotaExceededFault](#schemausergroupquotaexceededfault)|
|486|486|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|487|487|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DecreaseNodeGroupsInGlobalReplicationGroup

<a id="opIdGET_DecreaseNodeGroupsInGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DecreaseNodeGroupsInGlobalReplicationGroup?GlobalReplicationGroupId=string&NodeGroupCount=0&ApplyImmediately=true&Action=DecreaseNodeGroupsInGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DecreaseNodeGroupsInGlobalReplicationGroup`

Decreases the number of node groups in a Global datastore

<h3 id="getdecreasenodegroupsinglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|true|The name of the Global datastore|
|NodeGroupCount|query|integer|true|The number of node groups (shards) that results from the modification of the shard configuration|
|GlobalNodeGroupsToRemove|query|[object]|false|If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache for Redis will attempt to remove all node groups listed by GlobalNodeGroupsToRemove from the cluster. |
|GlobalNodeGroupsToRetain|query|[object]|false|If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster. ElastiCache for Redis will attempt to retain all node groups listed by GlobalNodeGroupsToRetain from the cluster. |
|ApplyImmediately|query|boolean|true|Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is true. |
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
|Action|DecreaseNodeGroupsInGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getdecreasenodegroupsinglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecreaseNodeGroupsInGlobalReplicationGroupResult](#schemadecreasenodegroupsinglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DecreaseNodeGroupsInGlobalReplicationGroup

<a id="opIdPOST_DecreaseNodeGroupsInGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DecreaseNodeGroupsInGlobalReplicationGroup?Action=DecreaseNodeGroupsInGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"NodeGroupCount":{},"GlobalNodeGroupsToRemove":{},"GlobalNodeGroupsToRetain":{},"ApplyImmediately":{}}'
```

`POST /#Action=DecreaseNodeGroupsInGlobalReplicationGroup`

Decreases the number of node groups in a Global datastore

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "NodeGroupCount": {},
  "GlobalNodeGroupsToRemove": {},
  "GlobalNodeGroupsToRetain": {},
  "ApplyImmediately": {}
}
```

<h3 id="postdecreasenodegroupsinglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[DecreaseNodeGroupsInGlobalReplicationGroupMessage](#schemadecreasenodegroupsinglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupId|body|object|true|none|
|» NodeGroupCount|body|object|true|none|
|» GlobalNodeGroupsToRemove|body|object|false|none|
|» GlobalNodeGroupsToRetain|body|object|false|none|
|» ApplyImmediately|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DecreaseNodeGroupsInGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postdecreasenodegroupsinglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecreaseNodeGroupsInGlobalReplicationGroupResult](#schemadecreasenodegroupsinglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DecreaseReplicaCount

<a id="opIdGET_DecreaseReplicaCount"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DecreaseReplicaCount?ReplicationGroupId=string&ApplyImmediately=true&Action=DecreaseReplicaCount&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DecreaseReplicaCount`

Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

<h3 id="getdecreasereplicacount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The id of the replication group from which you want to remove replica nodes.|
|NewReplicaCount|query|integer|false|<p>The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ is enabled: 1</p> </li> <li> <p>If Multi-AZ is not enabled: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>|
|ReplicaConfiguration|query|[object]|false|A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.|
|ReplicasToRemove|query|[[String](#schemastring)]|false|A list of the node ids to remove from the replication group or node group (shard).|
|ApplyImmediately|query|boolean|true|If <code>True</code>, the number of replica nodes is decreased immediately. <code>ApplyImmediately=False</code> is not currently supported.|
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
|Action|DecreaseReplicaCount|
|Version|2015-02-02|

<h3 id="getdecreasereplicacount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecreaseReplicaCountResult](#schemadecreasereplicacountresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|483|483|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|484|484|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|485|485|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|486|486|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|487|487|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|488|488|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|489|489|NoOperationFault|[NoOperationFault](#schemanooperationfault)|
|490|490|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|491|491|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DecreaseReplicaCount

<a id="opIdPOST_DecreaseReplicaCount"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DecreaseReplicaCount?Action=DecreaseReplicaCount&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"NewReplicaCount":{},"ReplicaConfiguration":{},"ReplicasToRemove":{},"ApplyImmediately":{}}'
```

`POST /#Action=DecreaseReplicaCount`

Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "NewReplicaCount": {},
  "ReplicaConfiguration": {},
  "ReplicasToRemove": {},
  "ApplyImmediately": {}
}
```

<h3 id="postdecreasereplicacount-parameters">Parameters</h3>

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
|body|body|[DecreaseReplicaCountMessage](#schemadecreasereplicacountmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» NewReplicaCount|body|object|false|none|
|» ReplicaConfiguration|body|object|false|none|
|» NodeGroupId|body|object|true|none|
|» NewReplicaCount|body|object|true|none|
|» PreferredAvailabilityZones|body|object|false|none|
|» PreferredOutpostArns|body|object|false|none|
|» ReplicasToRemove|body|object|false|none|
|» ApplyImmediately|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DecreaseReplicaCount|
|Version|2015-02-02|

<h3 id="postdecreasereplicacount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecreaseReplicaCountResult](#schemadecreasereplicacountresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|483|483|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|484|484|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|485|485|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|486|486|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|487|487|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|488|488|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|489|489|NoOperationFault|[NoOperationFault](#schemanooperationfault)|
|490|490|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|491|491|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteCacheCluster

<a id="opIdGET_DeleteCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheCluster?CacheClusterId=string&Action=DeleteCacheCluster&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteCacheCluster`

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

<h3 id="getdeletecachecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheClusterId|query|string|true|The cluster identifier for the cluster to be deleted. This parameter is not case sensitive.|
|FinalSnapshotIdentifier|query|string|false|The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.|
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
|Action|DeleteCacheCluster|
|Version|2015-02-02|

<h3 id="getdeletecachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCacheClusterResult](#schemadeletecacheclusterresult)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|482|482|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|483|483|SnapshotFeatureNotSupportedFault|[SnapshotFeatureNotSupportedFault](#schemasnapshotfeaturenotsupportedfault)|
|484|484|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteCacheCluster

<a id="opIdPOST_DeleteCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheCluster?Action=DeleteCacheCluster&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheClusterId":{},"FinalSnapshotIdentifier":{}}'
```

`POST /#Action=DeleteCacheCluster`

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

> Body parameter

```json
{
  "CacheClusterId": {},
  "FinalSnapshotIdentifier": {}
}
```

<h3 id="postdeletecachecluster-parameters">Parameters</h3>

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
|body|body|[DeleteCacheClusterMessage](#schemadeletecacheclustermessage)|false|none|
|» CacheClusterId|body|object|true|none|
|» FinalSnapshotIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteCacheCluster|
|Version|2015-02-02|

<h3 id="postdeletecachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCacheClusterResult](#schemadeletecacheclusterresult)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|482|482|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|483|483|SnapshotFeatureNotSupportedFault|[SnapshotFeatureNotSupportedFault](#schemasnapshotfeaturenotsupportedfault)|
|484|484|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteCacheParameterGroup

<a id="opIdGET_DeleteCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheParameterGroup?CacheParameterGroupName=string&Action=DeleteCacheParameterGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteCacheParameterGroup`

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

<h3 id="getdeletecacheparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheParameterGroupName|query|string|true|<p>The name of the cache parameter group to delete.</p> <note> <p>The specified cache security group must not be associated with any clusters.</p> </note>|
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
|Action|DeleteCacheParameterGroup|
|Version|2015-02-02|

<h3 id="getdeletecacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteCacheParameterGroup

<a id="opIdPOST_DeleteCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheParameterGroup?Action=DeleteCacheParameterGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheParameterGroupName":{}}'
```

`POST /#Action=DeleteCacheParameterGroup`

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

> Body parameter

```json
{
  "CacheParameterGroupName": {}
}
```

<h3 id="postdeletecacheparametergroup-parameters">Parameters</h3>

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
|body|body|[DeleteCacheParameterGroupMessage](#schemadeletecacheparametergroupmessage)|false|none|
|» CacheParameterGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteCacheParameterGroup|
|Version|2015-02-02|

<h3 id="postdeletecacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteCacheSecurityGroup

<a id="opIdGET_DeleteCacheSecurityGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheSecurityGroup?CacheSecurityGroupName=string&Action=DeleteCacheSecurityGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteCacheSecurityGroup`

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

<h3 id="getdeletecachesecuritygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|query|string|true|<p>The name of the cache security group to delete.</p> <note> <p>You cannot delete the default security group.</p> </note>|
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
|Action|DeleteCacheSecurityGroup|
|Version|2015-02-02|

<h3 id="getdeletecachesecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|481|481|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteCacheSecurityGroup

<a id="opIdPOST_DeleteCacheSecurityGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheSecurityGroup?Action=DeleteCacheSecurityGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSecurityGroupName":{}}'
```

`POST /#Action=DeleteCacheSecurityGroup`

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

> Body parameter

```json
{
  "CacheSecurityGroupName": {}
}
```

<h3 id="postdeletecachesecuritygroup-parameters">Parameters</h3>

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
|body|body|[DeleteCacheSecurityGroupMessage](#schemadeletecachesecuritygroupmessage)|false|none|
|» CacheSecurityGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteCacheSecurityGroup|
|Version|2015-02-02|

<h3 id="postdeletecachesecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|481|481|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteCacheSubnetGroup

<a id="opIdGET_DeleteCacheSubnetGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheSubnetGroup?CacheSubnetGroupName=string&Action=DeleteCacheSubnetGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteCacheSubnetGroup`

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

<h3 id="getdeletecachesubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|query|string|true|<p>The name of the cache subnet group to delete.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>|
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
|Action|DeleteCacheSubnetGroup|
|Version|2015-02-02|

<h3 id="getdeletecachesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|CacheSubnetGroupInUse|[CacheSubnetGroupInUse](#schemacachesubnetgroupinuse)|
|481|481|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteCacheSubnetGroup

<a id="opIdPOST_DeleteCacheSubnetGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteCacheSubnetGroup?Action=DeleteCacheSubnetGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSubnetGroupName":{}}'
```

`POST /#Action=DeleteCacheSubnetGroup`

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

> Body parameter

```json
{
  "CacheSubnetGroupName": {}
}
```

<h3 id="postdeletecachesubnetgroup-parameters">Parameters</h3>

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
|body|body|[DeleteCacheSubnetGroupMessage](#schemadeletecachesubnetgroupmessage)|false|none|
|» CacheSubnetGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteCacheSubnetGroup|
|Version|2015-02-02|

<h3 id="postdeletecachesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|CacheSubnetGroupInUse|[CacheSubnetGroupInUse](#schemacachesubnetgroupinuse)|
|481|481|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteGlobalReplicationGroup

<a id="opIdGET_DeleteGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteGlobalReplicationGroup?GlobalReplicationGroupId=string&RetainPrimaryReplicationGroup=true&Action=DeleteGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteGlobalReplicationGroup`

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

<h3 id="getdeleteglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|true|The name of the Global datastore|
|RetainPrimaryReplicationGroup|query|boolean|true|The primary replication group is retained as a standalone replication group. |
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
|Action|DeleteGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getdeleteglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGlobalReplicationGroupResult](#schemadeleteglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteGlobalReplicationGroup

<a id="opIdPOST_DeleteGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteGlobalReplicationGroup?Action=DeleteGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"RetainPrimaryReplicationGroup":{}}'
```

`POST /#Action=DeleteGlobalReplicationGroup`

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "RetainPrimaryReplicationGroup": {}
}
```

<h3 id="postdeleteglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[DeleteGlobalReplicationGroupMessage](#schemadeleteglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupId|body|object|true|none|
|» RetainPrimaryReplicationGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postdeleteglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGlobalReplicationGroupResult](#schemadeleteglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteReplicationGroup

<a id="opIdGET_DeleteReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteReplicationGroup?ReplicationGroupId=string&Action=DeleteReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteReplicationGroup`

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

<h3 id="getdeletereplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The identifier for the cluster to be deleted. This parameter is not case sensitive.|
|RetainPrimaryCluster|query|boolean|false|If set to <code>true</code>, all of the read replicas are deleted, but the primary node is retained.|
|FinalSnapshotIdentifier|query|string|false|The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.|
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
|Action|DeleteReplicationGroup|
|Version|2015-02-02|

<h3 id="getdeletereplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReplicationGroupResult](#schemadeletereplicationgroupresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|483|483|SnapshotFeatureNotSupportedFault|[SnapshotFeatureNotSupportedFault](#schemasnapshotfeaturenotsupportedfault)|
|484|484|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteReplicationGroup

<a id="opIdPOST_DeleteReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteReplicationGroup?Action=DeleteReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"RetainPrimaryCluster":{},"FinalSnapshotIdentifier":{}}'
```

`POST /#Action=DeleteReplicationGroup`

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "RetainPrimaryCluster": {},
  "FinalSnapshotIdentifier": {}
}
```

<h3 id="postdeletereplicationgroup-parameters">Parameters</h3>

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
|body|body|[DeleteReplicationGroupMessage](#schemadeletereplicationgroupmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» RetainPrimaryCluster|body|object|false|none|
|» FinalSnapshotIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteReplicationGroup|
|Version|2015-02-02|

<h3 id="postdeletereplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReplicationGroupResult](#schemadeletereplicationgroupresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|SnapshotAlreadyExistsFault|[SnapshotAlreadyExistsFault](#schemasnapshotalreadyexistsfault)|
|483|483|SnapshotFeatureNotSupportedFault|[SnapshotFeatureNotSupportedFault](#schemasnapshotfeaturenotsupportedfault)|
|484|484|SnapshotQuotaExceededFault|[SnapshotQuotaExceededFault](#schemasnapshotquotaexceededfault)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteSnapshot

<a id="opIdGET_DeleteSnapshot"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteSnapshot?SnapshotName=string&Action=DeleteSnapshot&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteSnapshot`

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

<h3 id="getdeletesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SnapshotName|query|string|true|The name of the snapshot to be deleted.|
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
|Action|DeleteSnapshot|
|Version|2015-02-02|

<h3 id="getdeletesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSnapshotResult](#schemadeletesnapshotresult)|
|480|480|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|481|481|InvalidSnapshotStateFault|[InvalidSnapshotStateFault](#schemainvalidsnapshotstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteSnapshot

<a id="opIdPOST_DeleteSnapshot"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteSnapshot?Action=DeleteSnapshot&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SnapshotName":{}}'
```

`POST /#Action=DeleteSnapshot`

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

> Body parameter

```json
{
  "SnapshotName": {}
}
```

<h3 id="postdeletesnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteSnapshotMessage](#schemadeletesnapshotmessage)|false|none|
|» SnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteSnapshot|
|Version|2015-02-02|

<h3 id="postdeletesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSnapshotResult](#schemadeletesnapshotresult)|
|480|480|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|481|481|InvalidSnapshotStateFault|[InvalidSnapshotStateFault](#schemainvalidsnapshotstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteUser

<a id="opIdGET_DeleteUser"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteUser?UserId=string&Action=DeleteUser&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteUser`

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

<h3 id="getdeleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|query|string|true|The ID of the user.|
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
|Action|DeleteUser|
|Version|2015-02-02|

<h3 id="getdeleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|480|480|InvalidUserStateFault|[InvalidUserStateFault](#schemainvaliduserstatefault)|
|481|481|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|DefaultUserAssociatedToUserGroupFault|[DefaultUserAssociatedToUserGroupFault](#schemadefaultuserassociatedtousergroupfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteUser

<a id="opIdPOST_DeleteUser"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteUser?Action=DeleteUser&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"UserId":{}}'
```

`POST /#Action=DeleteUser`

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

> Body parameter

```json
{
  "UserId": {}
}
```

<h3 id="postdeleteuser-parameters">Parameters</h3>

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
|body|body|[DeleteUserMessage](#schemadeleteusermessage)|false|none|
|» UserId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteUser|
|Version|2015-02-02|

<h3 id="postdeleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|480|480|InvalidUserStateFault|[InvalidUserStateFault](#schemainvaliduserstatefault)|
|481|481|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|DefaultUserAssociatedToUserGroupFault|[DefaultUserAssociatedToUserGroupFault](#schemadefaultuserassociatedtousergroupfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteUserGroup

<a id="opIdGET_DeleteUserGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteUserGroup?UserGroupId=string&Action=DeleteUserGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteUserGroup`

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

<h3 id="getdeleteusergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserGroupId|query|string|true|The ID of the user group.|
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
|Action|DeleteUserGroup|
|Version|2015-02-02|

<h3 id="getdeleteusergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserGroup](#schemausergroup)|
|480|480|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|481|481|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteUserGroup

<a id="opIdPOST_DeleteUserGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DeleteUserGroup?Action=DeleteUserGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"UserGroupId":{}}'
```

`POST /#Action=DeleteUserGroup`

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

> Body parameter

```json
{
  "UserGroupId": {}
}
```

<h3 id="postdeleteusergroup-parameters">Parameters</h3>

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
|body|body|[DeleteUserGroupMessage](#schemadeleteusergroupmessage)|false|none|
|» UserGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteUserGroup|
|Version|2015-02-02|

<h3 id="postdeleteusergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserGroup](#schemausergroup)|
|480|480|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|481|481|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeCacheClusters

<a id="opIdGET_DescribeCacheClusters"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheClusters?Action=DescribeCacheClusters&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeCacheClusters`

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

<h3 id="getdescribecacheclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheClusterId|query|string|false|The user-supplied cluster identifier. If this parameter is specified, only information about that specific cluster is returned. This parameter isn't case sensitive.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
|ShowCacheNodeInfo|query|boolean|false|An optional flag that can be included in the <code>DescribeCacheCluster</code> request to retrieve information about the individual cache nodes.|
|ShowCacheClustersNotInReplicationGroups|query|boolean|false|An optional flag that can be included in the <code>DescribeCacheCluster</code> request to show only nodes (API/CLI: clusters) that are not members of a replication group. In practice, this mean Memcached and single node Redis clusters.|
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
|Action|DescribeCacheClusters|
|Version|2015-02-02|

<h3 id="getdescribecacheclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheClusterMessage](#schemacacheclustermessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeCacheClusters

<a id="opIdPOST_DescribeCacheClusters"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheClusters?Action=DescribeCacheClusters&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheClusterId":{},"MaxRecords":{},"Marker":{},"ShowCacheNodeInfo":{},"ShowCacheClustersNotInReplicationGroups":{}}'
```

`POST /#Action=DescribeCacheClusters`

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

> Body parameter

```json
{
  "CacheClusterId": {},
  "MaxRecords": {},
  "Marker": {},
  "ShowCacheNodeInfo": {},
  "ShowCacheClustersNotInReplicationGroups": {}
}
```

<h3 id="postdescribecacheclusters-parameters">Parameters</h3>

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
|body|body|[DescribeCacheClustersMessage](#schemadescribecacheclustersmessage)|false|none|
|» CacheClusterId|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|
|» ShowCacheNodeInfo|body|object|false|none|
|» ShowCacheClustersNotInReplicationGroups|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeCacheClusters|
|Version|2015-02-02|

<h3 id="postdescribecacheclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheClusterMessage](#schemacacheclustermessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeCacheEngineVersions

<a id="opIdGET_DescribeCacheEngineVersions"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheEngineVersions?Action=DescribeCacheEngineVersions&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeCacheEngineVersions`

Returns a list of the available cache engines and their versions.

<h3 id="getdescribecacheengineversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Engine|query|string|false|The cache engine to return. Valid values: <code>memcached</code> \| <code>redis</code> |
|EngineVersion|query|string|false|<p>The cache engine version to return.</p> <p>Example: <code>1.4.14</code> </p>|
|CacheParameterGroupFamily|query|string|false|<p>The name of a specific cache parameter group family to return details for.</p> <p>Valid values are: <code>memcached1.4</code> \| <code>memcached1.5</code> \| <code>memcached1.6</code> \| <code>redis2.6</code> \| <code>redis2.8</code> \| <code>redis3.2</code> \| <code>redis4.0</code> \| <code>redis5.0</code> \| <code>redis6.x</code> \| <code>redis6.2</code> \| <code>redis7</code> </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
|DefaultOnly|query|boolean|false|If <code>true</code>, specifies that only the default version of the specified engine or engine and major version combination is to be returned.|
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
|Action|DescribeCacheEngineVersions|
|Version|2015-02-02|

<h3 id="getdescribecacheengineversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheEngineVersionMessage](#schemacacheengineversionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeCacheEngineVersions

<a id="opIdPOST_DescribeCacheEngineVersions"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheEngineVersions?Action=DescribeCacheEngineVersions&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Engine":{},"EngineVersion":{},"CacheParameterGroupFamily":{},"MaxRecords":{},"Marker":{},"DefaultOnly":{}}'
```

`POST /#Action=DescribeCacheEngineVersions`

Returns a list of the available cache engines and their versions.

> Body parameter

```json
{
  "Engine": {},
  "EngineVersion": {},
  "CacheParameterGroupFamily": {},
  "MaxRecords": {},
  "Marker": {},
  "DefaultOnly": {}
}
```

<h3 id="postdescribecacheengineversions-parameters">Parameters</h3>

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
|body|body|[DescribeCacheEngineVersionsMessage](#schemadescribecacheengineversionsmessage)|false|none|
|» Engine|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» CacheParameterGroupFamily|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|
|» DefaultOnly|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeCacheEngineVersions|
|Version|2015-02-02|

<h3 id="postdescribecacheengineversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheEngineVersionMessage](#schemacacheengineversionmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeCacheParameterGroups

<a id="opIdGET_DescribeCacheParameterGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheParameterGroups?Action=DescribeCacheParameterGroups&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeCacheParameterGroups`

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

<h3 id="getdescribecacheparametergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheParameterGroupName|query|string|false|The name of a specific cache parameter group to return details for.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeCacheParameterGroups|
|Version|2015-02-02|

<h3 id="getdescribecacheparametergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupsMessage](#schemacacheparametergroupsmessage)|
|480|480|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeCacheParameterGroups

<a id="opIdPOST_DescribeCacheParameterGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheParameterGroups?Action=DescribeCacheParameterGroups&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheParameterGroupName":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeCacheParameterGroups`

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

> Body parameter

```json
{
  "CacheParameterGroupName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribecacheparametergroups-parameters">Parameters</h3>

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
|body|body|[DescribeCacheParameterGroupsMessage](#schemadescribecacheparametergroupsmessage)|false|none|
|» CacheParameterGroupName|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeCacheParameterGroups|
|Version|2015-02-02|

<h3 id="postdescribecacheparametergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupsMessage](#schemacacheparametergroupsmessage)|
|480|480|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeCacheParameters

<a id="opIdGET_DescribeCacheParameters"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheParameters?CacheParameterGroupName=string&Action=DescribeCacheParameters&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeCacheParameters`

Returns the detailed parameter list for a particular cache parameter group.

<h3 id="getdescribecacheparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheParameterGroupName|query|string|true|The name of a specific cache parameter group to return details for.|
|Source|query|string|false|<p>The parameter types to return.</p> <p>Valid values: <code>user</code> \| <code>system</code> \| <code>engine-default</code> </p>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeCacheParameters|
|Version|2015-02-02|

<h3 id="getdescribecacheparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupDetails](#schemacacheparametergroupdetails)|
|480|480|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeCacheParameters

<a id="opIdPOST_DescribeCacheParameters"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheParameters?Action=DescribeCacheParameters&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheParameterGroupName":{},"Source":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeCacheParameters`

Returns the detailed parameter list for a particular cache parameter group.

> Body parameter

```json
{
  "CacheParameterGroupName": {},
  "Source": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribecacheparameters-parameters">Parameters</h3>

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
|body|body|[DescribeCacheParametersMessage](#schemadescribecacheparametersmessage)|false|none|
|» CacheParameterGroupName|body|object|true|none|
|» Source|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeCacheParameters|
|Version|2015-02-02|

<h3 id="postdescribecacheparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupDetails](#schemacacheparametergroupdetails)|
|480|480|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeCacheSecurityGroups

<a id="opIdGET_DescribeCacheSecurityGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheSecurityGroups?Action=DescribeCacheSecurityGroups&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeCacheSecurityGroups`

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

<h3 id="getdescribecachesecuritygroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|query|string|false|The name of the cache security group to return details for.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeCacheSecurityGroups|
|Version|2015-02-02|

<h3 id="getdescribecachesecuritygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheSecurityGroupMessage](#schemacachesecuritygroupmessage)|
|480|480|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeCacheSecurityGroups

<a id="opIdPOST_DescribeCacheSecurityGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheSecurityGroups?Action=DescribeCacheSecurityGroups&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSecurityGroupName":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeCacheSecurityGroups`

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

> Body parameter

```json
{
  "CacheSecurityGroupName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribecachesecuritygroups-parameters">Parameters</h3>

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
|body|body|[DescribeCacheSecurityGroupsMessage](#schemadescribecachesecuritygroupsmessage)|false|none|
|» CacheSecurityGroupName|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeCacheSecurityGroups|
|Version|2015-02-02|

<h3 id="postdescribecachesecuritygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheSecurityGroupMessage](#schemacachesecuritygroupmessage)|
|480|480|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeCacheSubnetGroups

<a id="opIdGET_DescribeCacheSubnetGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheSubnetGroups?Action=DescribeCacheSubnetGroups&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeCacheSubnetGroups`

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

<h3 id="getdescribecachesubnetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|query|string|false|The name of the cache subnet group to return details for.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeCacheSubnetGroups|
|Version|2015-02-02|

<h3 id="getdescribecachesubnetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheSubnetGroupMessage](#schemacachesubnetgroupmessage)|
|480|480|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeCacheSubnetGroups

<a id="opIdPOST_DescribeCacheSubnetGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeCacheSubnetGroups?Action=DescribeCacheSubnetGroups&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSubnetGroupName":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeCacheSubnetGroups`

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

> Body parameter

```json
{
  "CacheSubnetGroupName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribecachesubnetgroups-parameters">Parameters</h3>

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
|body|body|[DescribeCacheSubnetGroupsMessage](#schemadescribecachesubnetgroupsmessage)|false|none|
|» CacheSubnetGroupName|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeCacheSubnetGroups|
|Version|2015-02-02|

<h3 id="postdescribecachesubnetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheSubnetGroupMessage](#schemacachesubnetgroupmessage)|
|480|480|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEngineDefaultParameters

<a id="opIdGET_DescribeEngineDefaultParameters"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultParameters?CacheParameterGroupFamily=string&Action=DescribeEngineDefaultParameters&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEngineDefaultParameters`

Returns the default engine and system parameter information for the specified cache engine.

<h3 id="getdescribeenginedefaultparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheParameterGroupFamily|query|string|true|<p>The name of the cache parameter group family.</p> <p>Valid values are: <code>memcached1.4</code> \| <code>memcached1.5</code> \| <code>memcached1.6</code> \| <code>redis2.6</code> \| <code>redis2.8</code> \| <code>redis3.2</code> \| <code>redis4.0</code> \| <code>redis5.0</code> \| <code>redis6.x</code> \| <code>redis6.2</code> \| <code>redis7</code> </p>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Version|2015-02-02|

<h3 id="getdescribeenginedefaultparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEngineDefaultParametersResult](#schemadescribeenginedefaultparametersresult)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEngineDefaultParameters

<a id="opIdPOST_DescribeEngineDefaultParameters"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeEngineDefaultParameters?Action=DescribeEngineDefaultParameters&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheParameterGroupFamily":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEngineDefaultParameters`

Returns the default engine and system parameter information for the specified cache engine.

> Body parameter

```json
{
  "CacheParameterGroupFamily": {},
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
|» CacheParameterGroupFamily|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEngineDefaultParameters|
|Version|2015-02-02|

<h3 id="postdescribeenginedefaultparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEngineDefaultParametersResult](#schemadescribeenginedefaultparametersresult)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeEvents

<a id="opIdGET_DescribeEvents"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeEvents`

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

<h3 id="getdescribeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceIdentifier|query|string|false|The identifier of the event source for which events are returned. If not specified, all sources are included in the response.|
|SourceType|query|string|false|The event source to retrieve events for. If no value is specified, all events are returned.|
|StartTime|query|string(date-time)|false|<p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>|
|EndTime|query|string(date-time)|false|<p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>|
|Duration|query|integer|false|The number of minutes worth of events to retrieve.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|SourceType|cache-cluster|
|SourceType|cache-parameter-group|
|SourceType|cache-security-group|
|SourceType|cache-subnet-group|
|SourceType|replication-group|
|SourceType|user|
|SourceType|user-group|
|Action|DescribeEvents|
|Version|2015-02-02|

<h3 id="getdescribeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventsMessage](#schemaeventsmessage)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeEvents

<a id="opIdPOST_DescribeEvents"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeEvents?Action=DescribeEvents&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceIdentifier":{},"SourceType":{},"StartTime":{},"EndTime":{},"Duration":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeEvents`

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

> Body parameter

```json
{
  "SourceIdentifier": {},
  "SourceType": {},
  "StartTime": {},
  "EndTime": {},
  "Duration": {},
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
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeEvents|
|Version|2015-02-02|

<h3 id="postdescribeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EventsMessage](#schemaeventsmessage)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeGlobalReplicationGroups

<a id="opIdGET_DescribeGlobalReplicationGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeGlobalReplicationGroups?Action=DescribeGlobalReplicationGroups&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeGlobalReplicationGroups`

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

<h3 id="getdescribeglobalreplicationgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|false|The name of the Global datastore|
|MaxRecords|query|integer|false|The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. |
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. |
|ShowMemberInfo|query|boolean|false|Returns the list of members that comprise the Global datastore.|
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
|Action|DescribeGlobalReplicationGroups|
|Version|2015-02-02|

<h3 id="getdescribeglobalreplicationgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGlobalReplicationGroupsResult](#schemadescribeglobalreplicationgroupsresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeGlobalReplicationGroups

<a id="opIdPOST_DescribeGlobalReplicationGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeGlobalReplicationGroups?Action=DescribeGlobalReplicationGroups&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"MaxRecords":{},"Marker":{},"ShowMemberInfo":{}}'
```

`POST /#Action=DescribeGlobalReplicationGroups`

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "MaxRecords": {},
  "Marker": {},
  "ShowMemberInfo": {}
}
```

<h3 id="postdescribeglobalreplicationgroups-parameters">Parameters</h3>

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
|body|body|[DescribeGlobalReplicationGroupsMessage](#schemadescribeglobalreplicationgroupsmessage)|false|none|
|» GlobalReplicationGroupId|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|
|» ShowMemberInfo|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeGlobalReplicationGroups|
|Version|2015-02-02|

<h3 id="postdescribeglobalreplicationgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGlobalReplicationGroupsResult](#schemadescribeglobalreplicationgroupsresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeReplicationGroups

<a id="opIdGET_DescribeReplicationGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeReplicationGroups?Action=DescribeReplicationGroups&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeReplicationGroups`

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

<h3 id="getdescribereplicationgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|false|<p>The identifier for the replication group to be described. This parameter is not case sensitive.</p> <p>If you do not specify this parameter, information about all replication groups is returned.</p>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeReplicationGroups|
|Version|2015-02-02|

<h3 id="getdescribereplicationgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicationGroupMessage](#schemareplicationgroupmessage)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeReplicationGroups

<a id="opIdPOST_DescribeReplicationGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeReplicationGroups?Action=DescribeReplicationGroups&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeReplicationGroups`

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribereplicationgroups-parameters">Parameters</h3>

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
|body|body|[DescribeReplicationGroupsMessage](#schemadescribereplicationgroupsmessage)|false|none|
|» ReplicationGroupId|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeReplicationGroups|
|Version|2015-02-02|

<h3 id="postdescribereplicationgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicationGroupMessage](#schemareplicationgroupmessage)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeReservedCacheNodes

<a id="opIdGET_DescribeReservedCacheNodes"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeReservedCacheNodes?Action=DescribeReservedCacheNodes&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeReservedCacheNodes`

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

<h3 id="getdescribereservedcachenodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReservedCacheNodeId|query|string|false|The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.|
|ReservedCacheNodesOfferingId|query|string|false|The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.|
|CacheNodeType|query|string|false|<p>The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>|
|Duration|query|string|false|<p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 \| 3 \| 31536000 \| 94608000</code> </p>|
|ProductDescription|query|string|false|The product description filter value. Use this parameter to show only those reservations matching the specified product description.|
|OfferingType|query|string|false|<p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid values: <code>"Light Utilization"\|"Medium Utilization"\|"Heavy Utilization"\|"All Upfront"\|"Partial Upfront"\| "No Upfront"</code> </p>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeReservedCacheNodes|
|Version|2015-02-02|

<h3 id="getdescribereservedcachenodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReservedCacheNodeMessage](#schemareservedcachenodemessage)|
|480|480|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeReservedCacheNodes

<a id="opIdPOST_DescribeReservedCacheNodes"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeReservedCacheNodes?Action=DescribeReservedCacheNodes&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReservedCacheNodeId":{},"ReservedCacheNodesOfferingId":{},"CacheNodeType":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeReservedCacheNodes`

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

> Body parameter

```json
{
  "ReservedCacheNodeId": {},
  "ReservedCacheNodesOfferingId": {},
  "CacheNodeType": {},
  "Duration": {},
  "ProductDescription": {},
  "OfferingType": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribereservedcachenodes-parameters">Parameters</h3>

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
|body|body|[DescribeReservedCacheNodesMessage](#schemadescribereservedcachenodesmessage)|false|none|
|» ReservedCacheNodeId|body|object|false|none|
|» ReservedCacheNodesOfferingId|body|object|false|none|
|» CacheNodeType|body|object|false|none|
|» Duration|body|object|false|none|
|» ProductDescription|body|object|false|none|
|» OfferingType|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeReservedCacheNodes|
|Version|2015-02-02|

<h3 id="postdescribereservedcachenodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReservedCacheNodeMessage](#schemareservedcachenodemessage)|
|480|480|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeReservedCacheNodesOfferings

<a id="opIdGET_DescribeReservedCacheNodesOfferings"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeReservedCacheNodesOfferings?Action=DescribeReservedCacheNodesOfferings&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeReservedCacheNodesOfferings`

Lists available reserved cache node offerings.

<h3 id="getdescribereservedcachenodesofferings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReservedCacheNodesOfferingId|query|string|false|<p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>|
|CacheNodeType|query|string|false|<p>The cache node type filter value. Use this parameter to show only the available offerings matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>|
|Duration|query|string|false|<p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p> <p>Valid Values: <code>1 \| 3 \| 31536000 \| 94608000</code> </p>|
|ProductDescription|query|string|false|The product description filter value. Use this parameter to show only the available offerings matching the specified product description.|
|OfferingType|query|string|false|<p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>"Light Utilization"\|"Medium Utilization"\|"Heavy Utilization" \|"All Upfront"\|"Partial Upfront"\| "No Upfront"</code> </p>|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|Action|DescribeReservedCacheNodesOfferings|
|Version|2015-02-02|

<h3 id="getdescribereservedcachenodesofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReservedCacheNodesOfferingMessage](#schemareservedcachenodesofferingmessage)|
|480|480|ReservedCacheNodesOfferingNotFoundFault|[ReservedCacheNodesOfferingNotFoundFault](#schemareservedcachenodesofferingnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeReservedCacheNodesOfferings

<a id="opIdPOST_DescribeReservedCacheNodesOfferings"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeReservedCacheNodesOfferings?Action=DescribeReservedCacheNodesOfferings&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReservedCacheNodesOfferingId":{},"CacheNodeType":{},"Duration":{},"ProductDescription":{},"OfferingType":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeReservedCacheNodesOfferings`

Lists available reserved cache node offerings.

> Body parameter

```json
{
  "ReservedCacheNodesOfferingId": {},
  "CacheNodeType": {},
  "Duration": {},
  "ProductDescription": {},
  "OfferingType": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribereservedcachenodesofferings-parameters">Parameters</h3>

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
|body|body|[DescribeReservedCacheNodesOfferingsMessage](#schemadescribereservedcachenodesofferingsmessage)|false|none|
|» ReservedCacheNodesOfferingId|body|object|false|none|
|» CacheNodeType|body|object|false|none|
|» Duration|body|object|false|none|
|» ProductDescription|body|object|false|none|
|» OfferingType|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeReservedCacheNodesOfferings|
|Version|2015-02-02|

<h3 id="postdescribereservedcachenodesofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReservedCacheNodesOfferingMessage](#schemareservedcachenodesofferingmessage)|
|480|480|ReservedCacheNodesOfferingNotFoundFault|[ReservedCacheNodesOfferingNotFoundFault](#schemareservedcachenodesofferingnotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeServiceUpdates

<a id="opIdGET_DescribeServiceUpdates"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeServiceUpdates?Action=DescribeServiceUpdates&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeServiceUpdates`

Returns details of the service updates

<h3 id="getdescribeserviceupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ServiceUpdateName|query|string|false|The unique ID of the service update|
|ServiceUpdateStatus|query|[[ServiceUpdateStatus](#schemaserviceupdatestatus)]|false|The status of the service update|
|MaxRecords|query|integer|false|The maximum number of records to include in the response|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|ServiceUpdateStatus|available|
|ServiceUpdateStatus|cancelled|
|ServiceUpdateStatus|expired|
|Action|DescribeServiceUpdates|
|Version|2015-02-02|

<h3 id="getdescribeserviceupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceUpdatesMessage](#schemaserviceupdatesmessage)|
|480|480|ServiceUpdateNotFoundFault|[ServiceUpdateNotFoundFault](#schemaserviceupdatenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeServiceUpdates

<a id="opIdPOST_DescribeServiceUpdates"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeServiceUpdates?Action=DescribeServiceUpdates&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ServiceUpdateName":{},"ServiceUpdateStatus":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeServiceUpdates`

Returns details of the service updates

> Body parameter

```json
{
  "ServiceUpdateName": {},
  "ServiceUpdateStatus": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeserviceupdates-parameters">Parameters</h3>

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
|body|body|[DescribeServiceUpdatesMessage](#schemadescribeserviceupdatesmessage)|false|none|
|» ServiceUpdateName|body|object|false|none|
|» ServiceUpdateStatus|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeServiceUpdates|
|Version|2015-02-02|

<h3 id="postdescribeserviceupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceUpdatesMessage](#schemaserviceupdatesmessage)|
|480|480|ServiceUpdateNotFoundFault|[ServiceUpdateNotFoundFault](#schemaserviceupdatenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeSnapshots

<a id="opIdGET_DescribeSnapshots"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeSnapshots?Action=DescribeSnapshots&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeSnapshots`

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

<h3 id="getdescribesnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|false|A user-supplied replication group identifier. If this parameter is specified, only snapshots associated with that specific replication group are described.|
|CacheClusterId|query|string|false|A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.|
|SnapshotName|query|string|false|A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.|
|SnapshotSource|query|string|false|If set to <code>system</code>, the output shows snapshots that were automatically created by ElastiCache. If set to <code>user</code> the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
|MaxRecords|query|integer|false|<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 50</p> <p>Constraints: minimum 20; maximum 50.</p>|
|ShowNodeGroupConfig|query|boolean|false|A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.|
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
|Action|DescribeSnapshots|
|Version|2015-02-02|

<h3 id="getdescribesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSnapshotsListMessage](#schemadescribesnapshotslistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeSnapshots

<a id="opIdPOST_DescribeSnapshots"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeSnapshots?Action=DescribeSnapshots&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"CacheClusterId":{},"SnapshotName":{},"SnapshotSource":{},"Marker":{},"MaxRecords":{},"ShowNodeGroupConfig":{}}'
```

`POST /#Action=DescribeSnapshots`

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "CacheClusterId": {},
  "SnapshotName": {},
  "SnapshotSource": {},
  "Marker": {},
  "MaxRecords": {},
  "ShowNodeGroupConfig": {}
}
```

<h3 id="postdescribesnapshots-parameters">Parameters</h3>

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
|body|body|[DescribeSnapshotsMessage](#schemadescribesnapshotsmessage)|false|none|
|» ReplicationGroupId|body|object|false|none|
|» CacheClusterId|body|object|false|none|
|» SnapshotName|body|object|false|none|
|» SnapshotSource|body|object|false|none|
|» Marker|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» ShowNodeGroupConfig|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeSnapshots|
|Version|2015-02-02|

<h3 id="postdescribesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSnapshotsListMessage](#schemadescribesnapshotslistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeUpdateActions

<a id="opIdGET_DescribeUpdateActions"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeUpdateActions?Action=DescribeUpdateActions&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeUpdateActions`

Returns details of the update actions 

<h3 id="getdescribeupdateactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ServiceUpdateName|query|string|false|The unique ID of the service update|
|ReplicationGroupIds|query|[[String](#schemastring)]|false|The replication group IDs|
|CacheClusterIds|query|[[String](#schemastring)]|false|The cache cluster IDs|
|Engine|query|string|false|The Elasticache engine to which the update applies. Either Redis or Memcached |
|ServiceUpdateStatus|query|[[ServiceUpdateStatus](#schemaserviceupdatestatus)]|false|The status of the service update|
|ServiceUpdateTimeRange|query|object|false|The range of time specified to search for service updates that are in available status|
|UpdateActionStatus|query|[[UpdateActionStatus](#schemaupdateactionstatus)]|false|The status of the update action.|
|ShowNodeLevelUpdateStatus|query|boolean|false|Dictates whether to include node level update status in the response |
|MaxRecords|query|integer|false|The maximum number of records to include in the response|
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.|
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
|ServiceUpdateStatus|available|
|ServiceUpdateStatus|cancelled|
|ServiceUpdateStatus|expired|
|UpdateActionStatus|not-applied|
|UpdateActionStatus|waiting-to-start|
|UpdateActionStatus|in-progress|
|UpdateActionStatus|stopping|
|UpdateActionStatus|stopped|
|UpdateActionStatus|complete|
|UpdateActionStatus|scheduling|
|UpdateActionStatus|scheduled|
|UpdateActionStatus|not-applicable|
|Action|DescribeUpdateActions|
|Version|2015-02-02|

<h3 id="getdescribeupdateactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateActionsMessage](#schemaupdateactionsmessage)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeUpdateActions

<a id="opIdPOST_DescribeUpdateActions"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeUpdateActions?Action=DescribeUpdateActions&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ServiceUpdateName":{},"ReplicationGroupIds":{},"CacheClusterIds":{},"Engine":{},"ServiceUpdateStatus":{},"ServiceUpdateTimeRange":{"StartTime":{},"EndTime":{}},"UpdateActionStatus":{},"ShowNodeLevelUpdateStatus":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeUpdateActions`

Returns details of the update actions 

> Body parameter

```json
{
  "ServiceUpdateName": {},
  "ReplicationGroupIds": {},
  "CacheClusterIds": {},
  "Engine": {},
  "ServiceUpdateStatus": {},
  "ServiceUpdateTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "UpdateActionStatus": {},
  "ShowNodeLevelUpdateStatus": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeupdateactions-parameters">Parameters</h3>

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
|body|body|[DescribeUpdateActionsMessage](#schemadescribeupdateactionsmessage)|false|none|
|» ServiceUpdateName|body|object|false|none|
|» ReplicationGroupIds|body|object|false|none|
|» CacheClusterIds|body|object|false|none|
|» Engine|body|object|false|none|
|» ServiceUpdateStatus|body|object|false|none|
|» ServiceUpdateTimeRange|body|object|false|none|
|» » StartTime|body|object|false|none|
|» » EndTime|body|object|false|none|
|» UpdateActionStatus|body|object|false|none|
|» ShowNodeLevelUpdateStatus|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeUpdateActions|
|Version|2015-02-02|

<h3 id="postdescribeupdateactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateActionsMessage](#schemaupdateactionsmessage)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeUserGroups

<a id="opIdGET_DescribeUserGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeUserGroups?Action=DescribeUserGroups&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeUserGroups`

Returns a list of user groups.

<h3 id="getdescribeusergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserGroupId|query|string|false|The ID of the user group.|
|MaxRecords|query|integer|false|The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. |
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;|
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
|Action|DescribeUserGroups|
|Version|2015-02-02|

<h3 id="getdescribeusergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserGroupsResult](#schemadescribeusergroupsresult)|
|480|480|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeUserGroups

<a id="opIdPOST_DescribeUserGroups"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeUserGroups?Action=DescribeUserGroups&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"UserGroupId":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeUserGroups`

Returns a list of user groups.

> Body parameter

```json
{
  "UserGroupId": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeusergroups-parameters">Parameters</h3>

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
|body|body|[DescribeUserGroupsMessage](#schemadescribeusergroupsmessage)|false|none|
|» UserGroupId|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeUserGroups|
|Version|2015-02-02|

<h3 id="postdescribeusergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserGroupsResult](#schemadescribeusergroupsresult)|
|480|480|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeUsers

<a id="opIdGET_DescribeUsers"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeUsers?Action=DescribeUsers&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeUsers`

Returns a list of users.

<h3 id="getdescribeusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Engine|query|string|false|The Redis engine. |
|UserId|query|string|false|The ID of the user.|
|Filters|query|[[Filter](#schemafilter)]|false|Filter to determine the list of User IDs to return.|
|MaxRecords|query|integer|false|The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. |
|Marker|query|string|false|An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;|
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
|Action|DescribeUsers|
|Version|2015-02-02|

<h3 id="getdescribeusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUsersResult](#schemadescribeusersresult)|
|480|480|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeUsers

<a id="opIdPOST_DescribeUsers"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DescribeUsers?Action=DescribeUsers&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Engine":{},"UserId":{},"Filters":{},"MaxRecords":{},"Marker":{}}'
```

`POST /#Action=DescribeUsers`

Returns a list of users.

> Body parameter

```json
{
  "Engine": {},
  "UserId": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="postdescribeusers-parameters">Parameters</h3>

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
|body|body|[DescribeUsersMessage](#schemadescribeusersmessage)|false|none|
|» Engine|body|object|false|none|
|» UserId|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeUsers|
|Version|2015-02-02|

<h3 id="postdescribeusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUsersResult](#schemadescribeusersresult)|
|480|480|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DisassociateGlobalReplicationGroup

<a id="opIdGET_DisassociateGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DisassociateGlobalReplicationGroup?GlobalReplicationGroupId=string&ReplicationGroupId=string&ReplicationGroupRegion=string&Action=DisassociateGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DisassociateGlobalReplicationGroup`

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

<h3 id="getdisassociateglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|true|The name of the Global datastore|
|ReplicationGroupId|query|string|true|The name of the secondary cluster you wish to remove from the Global datastore|
|ReplicationGroupRegion|query|string|true|The Amazon region of secondary cluster you wish to remove from the Global datastore|
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
|Action|DisassociateGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getdisassociateglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateGlobalReplicationGroupResult](#schemadisassociateglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DisassociateGlobalReplicationGroup

<a id="opIdPOST_DisassociateGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=DisassociateGlobalReplicationGroup?Action=DisassociateGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"ReplicationGroupId":{},"ReplicationGroupRegion":{}}'
```

`POST /#Action=DisassociateGlobalReplicationGroup`

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "ReplicationGroupId": {},
  "ReplicationGroupRegion": {}
}
```

<h3 id="postdisassociateglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[DisassociateGlobalReplicationGroupMessage](#schemadisassociateglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupId|body|object|true|none|
|» ReplicationGroupId|body|object|true|none|
|» ReplicationGroupRegion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DisassociateGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postdisassociateglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateGlobalReplicationGroupResult](#schemadisassociateglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_FailoverGlobalReplicationGroup

<a id="opIdGET_FailoverGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=FailoverGlobalReplicationGroup?GlobalReplicationGroupId=string&PrimaryRegion=string&PrimaryReplicationGroupId=string&Action=FailoverGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=FailoverGlobalReplicationGroup`

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

<h3 id="getfailoverglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|true|The name of the Global datastore|
|PrimaryRegion|query|string|true|The Amazon region of the primary cluster of the Global datastore|
|PrimaryReplicationGroupId|query|string|true|The name of the primary replication group|
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
|Action|FailoverGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getfailoverglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FailoverGlobalReplicationGroupResult](#schemafailoverglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_FailoverGlobalReplicationGroup

<a id="opIdPOST_FailoverGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=FailoverGlobalReplicationGroup?Action=FailoverGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"PrimaryRegion":{},"PrimaryReplicationGroupId":{}}'
```

`POST /#Action=FailoverGlobalReplicationGroup`

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "PrimaryRegion": {},
  "PrimaryReplicationGroupId": {}
}
```

<h3 id="postfailoverglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[FailoverGlobalReplicationGroupMessage](#schemafailoverglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupId|body|object|true|none|
|» PrimaryRegion|body|object|true|none|
|» PrimaryReplicationGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|FailoverGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postfailoverglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FailoverGlobalReplicationGroupResult](#schemafailoverglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_IncreaseNodeGroupsInGlobalReplicationGroup

<a id="opIdGET_IncreaseNodeGroupsInGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=IncreaseNodeGroupsInGlobalReplicationGroup?GlobalReplicationGroupId=string&NodeGroupCount=0&ApplyImmediately=true&Action=IncreaseNodeGroupsInGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=IncreaseNodeGroupsInGlobalReplicationGroup`

Increase the number of node groups in the Global datastore

<h3 id="getincreasenodegroupsinglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|true|The name of the Global datastore|
|NodeGroupCount|query|integer|true|The number of node groups you wish to add|
|RegionalConfigurations|query|[object]|false|Describes the replication group IDs, the Amazon regions where they are stored and the shard configuration for each that comprise the Global datastore|
|ApplyImmediately|query|boolean|true|Indicates that the process begins immediately. At present, the only permitted value for this parameter is true.|
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
|Action|IncreaseNodeGroupsInGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getincreasenodegroupsinglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IncreaseNodeGroupsInGlobalReplicationGroupResult](#schemaincreasenodegroupsinglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_IncreaseNodeGroupsInGlobalReplicationGroup

<a id="opIdPOST_IncreaseNodeGroupsInGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=IncreaseNodeGroupsInGlobalReplicationGroup?Action=IncreaseNodeGroupsInGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"NodeGroupCount":{},"RegionalConfigurations":{},"ApplyImmediately":{}}'
```

`POST /#Action=IncreaseNodeGroupsInGlobalReplicationGroup`

Increase the number of node groups in the Global datastore

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "NodeGroupCount": {},
  "RegionalConfigurations": {},
  "ApplyImmediately": {}
}
```

<h3 id="postincreasenodegroupsinglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[IncreaseNodeGroupsInGlobalReplicationGroupMessage](#schemaincreasenodegroupsinglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupId|body|object|true|none|
|» NodeGroupCount|body|object|true|none|
|» RegionalConfigurations|body|object|false|none|
|» ReplicationGroupId|body|object|true|none|
|» ReplicationGroupRegion|body|object|true|none|
|» ReshardingConfiguration|body|object|true|none|
|» NodeGroupId|body|object|false|none|
|» PreferredAvailabilityZones|body|object|false|none|
|» ApplyImmediately|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|IncreaseNodeGroupsInGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postincreasenodegroupsinglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IncreaseNodeGroupsInGlobalReplicationGroupResult](#schemaincreasenodegroupsinglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_IncreaseReplicaCount

<a id="opIdGET_IncreaseReplicaCount"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=IncreaseReplicaCount?ReplicationGroupId=string&ApplyImmediately=true&Action=IncreaseReplicaCount&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=IncreaseReplicaCount`

Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

<h3 id="getincreasereplicacount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The id of the replication group to which you want to add replica nodes.|
|NewReplicaCount|query|integer|false|The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.|
|ReplicaConfiguration|query|[object]|false|A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.|
|ApplyImmediately|query|boolean|true|If <code>True</code>, the number of replica nodes is increased immediately. <code>ApplyImmediately=False</code> is not currently supported.|
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
|Action|IncreaseReplicaCount|
|Version|2015-02-02|

<h3 id="getincreasereplicacount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IncreaseReplicaCountResult](#schemaincreasereplicacountresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|483|483|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|484|484|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|485|485|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|486|486|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|487|487|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|488|488|NoOperationFault|[NoOperationFault](#schemanooperationfault)|
|489|489|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|490|490|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|491|491|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_IncreaseReplicaCount

<a id="opIdPOST_IncreaseReplicaCount"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=IncreaseReplicaCount?Action=IncreaseReplicaCount&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"NewReplicaCount":{},"ReplicaConfiguration":{},"ApplyImmediately":{}}'
```

`POST /#Action=IncreaseReplicaCount`

Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "NewReplicaCount": {},
  "ReplicaConfiguration": {},
  "ApplyImmediately": {}
}
```

<h3 id="postincreasereplicacount-parameters">Parameters</h3>

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
|body|body|[IncreaseReplicaCountMessage](#schemaincreasereplicacountmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» NewReplicaCount|body|object|false|none|
|» ReplicaConfiguration|body|object|false|none|
|» NodeGroupId|body|object|true|none|
|» NewReplicaCount|body|object|true|none|
|» PreferredAvailabilityZones|body|object|false|none|
|» PreferredOutpostArns|body|object|false|none|
|» ApplyImmediately|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|IncreaseReplicaCount|
|Version|2015-02-02|

<h3 id="postincreasereplicacount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IncreaseReplicaCountResult](#schemaincreasereplicacountresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|483|483|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|484|484|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|485|485|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|486|486|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|487|487|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|488|488|NoOperationFault|[NoOperationFault](#schemanooperationfault)|
|489|489|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|490|490|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|491|491|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListAllowedNodeTypeModifications

<a id="opIdGET_ListAllowedNodeTypeModifications"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ListAllowedNodeTypeModifications?Action=ListAllowedNodeTypeModifications&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListAllowedNodeTypeModifications`

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

<h3 id="getlistallowednodetypemodifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheClusterId|query|string|false|<p>The name of the cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>|
|ReplicationGroupId|query|string|false|<p>The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>|
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
|Action|ListAllowedNodeTypeModifications|
|Version|2015-02-02|

<h3 id="getlistallowednodetypemodifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllowedNodeTypeModificationsMessage](#schemaallowednodetypemodificationsmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListAllowedNodeTypeModifications

<a id="opIdPOST_ListAllowedNodeTypeModifications"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ListAllowedNodeTypeModifications?Action=ListAllowedNodeTypeModifications&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheClusterId":{},"ReplicationGroupId":{}}'
```

`POST /#Action=ListAllowedNodeTypeModifications`

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

> Body parameter

```json
{
  "CacheClusterId": {},
  "ReplicationGroupId": {}
}
```

<h3 id="postlistallowednodetypemodifications-parameters">Parameters</h3>

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
|body|body|[ListAllowedNodeTypeModificationsMessage](#schemalistallowednodetypemodificationsmessage)|false|none|
|» CacheClusterId|body|object|false|none|
|» ReplicationGroupId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListAllowedNodeTypeModifications|
|Version|2015-02-02|

<h3 id="postlistallowednodetypemodifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllowedNodeTypeModificationsMessage](#schemaallowednodetypemodificationsmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTagsForResource

<a id="opIdGET_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ListTagsForResource?ResourceName=string&Action=ListTagsForResource&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTagsForResource`

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

<h3 id="getlisttagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|<p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>|
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
|Version|2015-02-02|

<h3 id="getlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|483|483|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|486|486|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|487|487|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|488|488|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|489|489|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|490|490|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTagsForResource

<a id="opIdPOST_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ListTagsForResource?Action=ListTagsForResource&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{}}'
```

`POST /#Action=ListTagsForResource`

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

> Body parameter

```json
{
  "ResourceName": {}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTagsForResource|
|Version|2015-02-02|

<h3 id="postlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|483|483|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|486|486|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|487|487|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|488|488|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|489|489|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|490|490|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyCacheCluster

<a id="opIdGET_ModifyCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyCacheCluster?CacheClusterId=string&Action=ModifyCacheCluster&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyCacheCluster`

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.

<h3 id="getmodifycachecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheClusterId|query|string|true|The cluster identifier. This value is stored as a lowercase string.|
|NumCacheNodes|query|integer|false|<p>The number of cache nodes that the cluster should have. If the value for <code>NumCacheNodes</code> is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), more nodes are added. If the value is less than the number of existing cache nodes, nodes are removed. If the value is equal to the number of current cache nodes, any pending add or remove requests are canceled.</p> <p>If you are removing cache nodes, you must use the <code>CacheNodeIdsToRemove</code> parameter to provide the IDs of the specific cache nodes to remove.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p> <note> <p>Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see <code>ApplyImmediately</code>).</p> <p>A pending operation to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending operation to add nodes. The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending operations to modify the number of cache nodes in a cluster, use the <code>ModifyCacheCluster</code> request and set <code>NumCacheNodes</code> equal to the number of cache nodes currently in the cluster.</p> </note>|
|CacheNodeIdsToRemove|query|[object]|false|<p>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when <code>NumCacheNodes</code> is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of <code>NumCacheNodes</code> in the request.</p> <p>For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this <code>ModifyCacheCluster</code> call is 5, you must list 2 (7 - 5) cache node IDs to remove.</p>|
|AZMode|query|string|false|<p>Specifies whether the new nodes in this Memcached cluster are all created in a single Availability Zone or created across multiple Availability Zones.</p> <p>Valid values: <code>single-az</code> \| <code>cross-az</code>.</p> <p>This option is only supported for Memcached clusters.</p> <note> <p>You cannot specify <code>single-az</code> if the Memcached cluster already has cache nodes in different Availability Zones. If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.</p> <p>Only newly created nodes are located in different Availability Zones. </p> </note>|
|NewAvailabilityZones|query|[object]|false|<note> <p>This option is only supported on Memcached clusters.</p> </note> <p>The list of Availability Zones where the new Memcached cache nodes are created.</p> <p>This parameter is only valid when <code>NumCacheNodes</code> in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request.</p> <p>Scenarios:</p> <ul> <li> <p> <b>Scenario 1:</b> You have 3 active nodes and wish to add 2 nodes. Specify <code>NumCacheNodes=5</code> (3 + 2) and optionally specify two Availability Zones for the two new nodes.</p> </li> <li> <p> <b>Scenario 2:</b> You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify <code>NumCacheNodes=6</code> ((3 + 2) + 1) and optionally specify an Availability Zone for the new node.</p> </li> <li> <p> <b>Scenario 3:</b> You want to cancel all pending operations. Specify <code>NumCacheNodes=3</code> to cancel all pending operations.</p> </li> </ul> <p>The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting <code>NumCacheNodes</code> to the number of current nodes.</p> <p>If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the <b>Availability Zone Considerations</b> section of <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html">Cache Node Considerations for Memcached</a>.</p> <p> <b>Impact of new add/remove requests upon pending requests</b> </p> <ul> <li> <p>Scenario-1</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-2</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-3</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending create.</p> </li> </ul> </li> <li> <p>Scenario-4</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create is added to the pending create.</p> <important> <p> <b>Important:</b> If the new create request is <b>Apply Immediately - Yes</b>, all creates are performed immediately. If the new create request is <b>Apply Immediately - No</b>, all creates are pending.</p> </important> </li> </ul> </li> </ul>|
|CacheSecurityGroupNames|query|[object]|false|<p>A list of cache security group names to authorize on this cluster. This change is asynchronously applied as soon as possible.</p> <p>You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".</p>|
|SecurityGroupIds|query|[object]|false|<p>Specifies the VPC Security Groups associated with the cluster.</p> <p>This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).</p>|
|PreferredMaintenanceWindow|query|string|false|<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>|
|NotificationTopicArn|query|string|false|<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the cluster owner.</p> </note>|
|CacheParameterGroupName|query|string|false|The name of the cache parameter group to apply to this cluster. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.|
|NotificationTopicStatus|query|string|false|<p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> \| <code>inactive</code> </p>|
|ApplyImmediately|query|boolean|false|<p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster.</p> <p>If <code>false</code>, changes to the cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <important> <p>If you perform a <code>ModifyCacheCluster</code> before a pending modification is applied, the pending modification is replaced by the newer modification.</p> </important> <p>Valid values: <code>true</code> \| <code>false</code> </p> <p>Default: <code>false</code> </p>|
|EngineVersion|query|string|false|<p>The upgraded version of the cache engine to be run on the cache nodes.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version. </p>|
|AutoMinorVersionUpgrade|query|boolean|false| If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  |
|SnapshotRetentionLimit|query|integer|false|<p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <note> <p>If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p> </note>|
|SnapshotWindow|query|string|false|The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster. |
|CacheNodeType|query|string|false|A valid cache node type that you want to scale this cluster up to.|
|AuthToken|query|string|false|<p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update</code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>|
|AuthTokenUpdateStrategy|query|string|false|<p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>|
|LogDeliveryConfigurations|query|[object]|false|Specifies the destination, format and type of the logs.|
|IpDiscovery|query|string|false|The network type you choose when modifying a cluster, either <code>ipv4</code> \| <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.|
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
|AZMode|single-az|
|AZMode|cross-az|
|AuthTokenUpdateStrategy|SET|
|AuthTokenUpdateStrategy|ROTATE|
|AuthTokenUpdateStrategy|DELETE|
|IpDiscovery|ipv4|
|IpDiscovery|ipv6|
|Action|ModifyCacheCluster|
|Version|2015-02-02|

<h3 id="getmodifycachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyCacheClusterResult](#schemamodifycacheclusterresult)|
|480|480|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|481|481|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|482|482|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|483|483|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|484|484|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|485|485|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|486|486|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|487|487|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|488|488|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|489|489|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|490|490|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyCacheCluster

<a id="opIdPOST_ModifyCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyCacheCluster?Action=ModifyCacheCluster&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheClusterId":{},"NumCacheNodes":{},"CacheNodeIdsToRemove":{},"AZMode":{},"NewAvailabilityZones":{},"CacheSecurityGroupNames":{},"SecurityGroupIds":{},"PreferredMaintenanceWindow":{},"NotificationTopicArn":{},"CacheParameterGroupName":{},"NotificationTopicStatus":{},"ApplyImmediately":{},"EngineVersion":{},"AutoMinorVersionUpgrade":{},"SnapshotRetentionLimit":{},"SnapshotWindow":{},"CacheNodeType":{},"AuthToken":{},"AuthTokenUpdateStrategy":{},"LogDeliveryConfigurations":{},"IpDiscovery":{}}'
```

`POST /#Action=ModifyCacheCluster`

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.

> Body parameter

```json
{
  "CacheClusterId": {},
  "NumCacheNodes": {},
  "CacheNodeIdsToRemove": {},
  "AZMode": {},
  "NewAvailabilityZones": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "CacheParameterGroupName": {},
  "NotificationTopicStatus": {},
  "ApplyImmediately": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "CacheNodeType": {},
  "AuthToken": {},
  "AuthTokenUpdateStrategy": {},
  "LogDeliveryConfigurations": {},
  "IpDiscovery": {}
}
```

<h3 id="postmodifycachecluster-parameters">Parameters</h3>

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
|body|body|[ModifyCacheClusterMessage](#schemamodifycacheclustermessage)|false|none|
|» CacheClusterId|body|object|true|none|
|» NumCacheNodes|body|object|false|none|
|» CacheNodeIdsToRemove|body|object|false|none|
|» AZMode|body|object|false|none|
|» NewAvailabilityZones|body|object|false|none|
|» CacheSecurityGroupNames|body|object|false|none|
|» SecurityGroupIds|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» NotificationTopicArn|body|object|false|none|
|» CacheParameterGroupName|body|object|false|none|
|» NotificationTopicStatus|body|object|false|none|
|» ApplyImmediately|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» SnapshotRetentionLimit|body|object|false|none|
|» SnapshotWindow|body|object|false|none|
|» CacheNodeType|body|object|false|none|
|» AuthToken|body|object|false|none|
|» AuthTokenUpdateStrategy|body|object|false|none|
|» LogDeliveryConfigurations|body|object|false|none|
|» LogType|body|object|false|none|
|» DestinationType|body|object|false|none|
|» DestinationDetails|body|object|false|none|
|» » CloudWatchLogsDetails|body|object|false|none|
|» » » LogGroup|body|object|false|none|
|» » KinesisFirehoseDetails|body|object|false|none|
|» » » DeliveryStream|body|object|false|none|
|» LogFormat|body|object|false|none|
|» Enabled|body|object|false|none|
|» IpDiscovery|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyCacheCluster|
|Version|2015-02-02|

<h3 id="postmodifycachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyCacheClusterResult](#schemamodifycacheclusterresult)|
|480|480|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|481|481|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|482|482|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|483|483|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|484|484|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|485|485|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|486|486|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|487|487|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|488|488|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|489|489|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|490|490|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyCacheParameterGroup

<a id="opIdGET_ModifyCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyCacheParameterGroup?CacheParameterGroupName=string&ParameterNameValues=%7B%22ParameterName%22%3A%7B%7D%2C%22ParameterValue%22%3A%7B%7D%7D&Action=ModifyCacheParameterGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyCacheParameterGroup`

Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

<h3 id="getmodifycacheparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheParameterGroupName|query|string|true|The name of the cache parameter group to modify.|
|ParameterNameValues|query|[object]|true|An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.|
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
|Action|ModifyCacheParameterGroup|
|Version|2015-02-02|

<h3 id="getmodifycacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupNameMessage](#schemacacheparametergroupnamemessage)|
|480|480|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|481|481|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|484|484|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyCacheParameterGroup

<a id="opIdPOST_ModifyCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyCacheParameterGroup?Action=ModifyCacheParameterGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheParameterGroupName":{},"ParameterNameValues":{}}'
```

`POST /#Action=ModifyCacheParameterGroup`

Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

> Body parameter

```json
{
  "CacheParameterGroupName": {},
  "ParameterNameValues": {}
}
```

<h3 id="postmodifycacheparametergroup-parameters">Parameters</h3>

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
|body|body|[ModifyCacheParameterGroupMessage](#schemamodifycacheparametergroupmessage)|false|none|
|» CacheParameterGroupName|body|object|true|none|
|» ParameterNameValues|body|object|true|none|
|» ParameterName|body|object|false|none|
|» ParameterValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyCacheParameterGroup|
|Version|2015-02-02|

<h3 id="postmodifycacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupNameMessage](#schemacacheparametergroupnamemessage)|
|480|480|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|481|481|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|484|484|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyCacheSubnetGroup

<a id="opIdGET_ModifyCacheSubnetGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyCacheSubnetGroup?CacheSubnetGroupName=string&Action=ModifyCacheSubnetGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyCacheSubnetGroup`

Modifies an existing cache subnet group.

<h3 id="getmodifycachesubnetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|query|string|true|<p>The name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>|
|CacheSubnetGroupDescription|query|string|false|A description of the cache subnet group.|
|SubnetIds|query|[object]|false|The EC2 subnet IDs for the cache subnet group.|
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
|Action|ModifyCacheSubnetGroup|
|Version|2015-02-02|

<h3 id="getmodifycachesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyCacheSubnetGroupResult](#schemamodifycachesubnetgroupresult)|
|480|480|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|481|481|CacheSubnetQuotaExceededFault|[CacheSubnetQuotaExceededFault](#schemacachesubnetquotaexceededfault)|
|482|482|SubnetInUse|[SubnetInUse](#schemasubnetinuse)|
|483|483|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|484|484|SubnetNotAllowedFault|[SubnetNotAllowedFault](#schemasubnetnotallowedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyCacheSubnetGroup

<a id="opIdPOST_ModifyCacheSubnetGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyCacheSubnetGroup?Action=ModifyCacheSubnetGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSubnetGroupName":{},"CacheSubnetGroupDescription":{},"SubnetIds":{}}'
```

`POST /#Action=ModifyCacheSubnetGroup`

Modifies an existing cache subnet group.

> Body parameter

```json
{
  "CacheSubnetGroupName": {},
  "CacheSubnetGroupDescription": {},
  "SubnetIds": {}
}
```

<h3 id="postmodifycachesubnetgroup-parameters">Parameters</h3>

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
|body|body|[ModifyCacheSubnetGroupMessage](#schemamodifycachesubnetgroupmessage)|false|none|
|» CacheSubnetGroupName|body|object|true|none|
|» CacheSubnetGroupDescription|body|object|false|none|
|» SubnetIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyCacheSubnetGroup|
|Version|2015-02-02|

<h3 id="postmodifycachesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyCacheSubnetGroupResult](#schemamodifycachesubnetgroupresult)|
|480|480|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|481|481|CacheSubnetQuotaExceededFault|[CacheSubnetQuotaExceededFault](#schemacachesubnetquotaexceededfault)|
|482|482|SubnetInUse|[SubnetInUse](#schemasubnetinuse)|
|483|483|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|484|484|SubnetNotAllowedFault|[SubnetNotAllowedFault](#schemasubnetnotallowedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyGlobalReplicationGroup

<a id="opIdGET_ModifyGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyGlobalReplicationGroup?GlobalReplicationGroupId=string&ApplyImmediately=true&Action=ModifyGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyGlobalReplicationGroup`

Modifies the settings for a Global datastore.

<h3 id="getmodifyglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|true|The name of the Global datastore|
|ApplyImmediately|query|boolean|true|This parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible. Modifications to Global Replication Groups cannot be requested to be applied in PreferredMaintenceWindow. |
|CacheNodeType|query|string|false|A valid cache node type that you want to scale this Global datastore to.|
|EngineVersion|query|string|false|The upgraded version of the cache engine to be run on the clusters in the Global datastore. |
|CacheParameterGroupName|query|string|false|The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.|
|GlobalReplicationGroupDescription|query|string|false|A description of the Global datastore|
|AutomaticFailoverEnabled|query|boolean|false|Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure. |
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
|Action|ModifyGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getmodifyglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyGlobalReplicationGroupResult](#schemamodifyglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyGlobalReplicationGroup

<a id="opIdPOST_ModifyGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyGlobalReplicationGroup?Action=ModifyGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"ApplyImmediately":{},"CacheNodeType":{},"EngineVersion":{},"CacheParameterGroupName":{},"GlobalReplicationGroupDescription":{},"AutomaticFailoverEnabled":{}}'
```

`POST /#Action=ModifyGlobalReplicationGroup`

Modifies the settings for a Global datastore.

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "ApplyImmediately": {},
  "CacheNodeType": {},
  "EngineVersion": {},
  "CacheParameterGroupName": {},
  "GlobalReplicationGroupDescription": {},
  "AutomaticFailoverEnabled": {}
}
```

<h3 id="postmodifyglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[ModifyGlobalReplicationGroupMessage](#schemamodifyglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupId|body|object|true|none|
|» ApplyImmediately|body|object|true|none|
|» CacheNodeType|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» CacheParameterGroupName|body|object|false|none|
|» GlobalReplicationGroupDescription|body|object|false|none|
|» AutomaticFailoverEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postmodifyglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyGlobalReplicationGroupResult](#schemamodifyglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyReplicationGroup

<a id="opIdGET_ModifyReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyReplicationGroup?ReplicationGroupId=string&Action=ModifyReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyReplicationGroup`

<p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>

<h3 id="getmodifyreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The identifier of the replication group to modify.|
|ReplicationGroupDescription|query|string|false|A description for the replication group. Maximum length is 255 characters.|
|PrimaryClusterId|query|string|false|For replication groups with a single primary, if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group are read replicas.|
|SnapshottingClusterId|query|string|false|The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.|
|AutomaticFailoverEnabled|query|boolean|false|<p>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.</p> <p>Valid values: <code>true</code> \| <code>false</code> </p>|
|MultiAZEnabled|query|boolean|false|A flag to indicate MultiAZ is enabled.|
|NodeGroupId|query|string|false|Deprecated. This parameter is not used.|
|CacheSecurityGroupNames|query|[object]|false|<p>A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible.</p> <p>This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be <code>Default</code>.</p>|
|SecurityGroupIds|query|[object]|false|<p>Specifies the VPC Security Groups associated with the clusters in the replication group.</p> <p>This parameter can be used only with replication group containing clusters running in an Amazon Virtual Private Cloud (Amazon VPC).</p>|
|PreferredMaintenanceWindow|query|string|false|<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>|
|NotificationTopicArn|query|string|false|<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the replication group owner. </p> </note>|
|CacheParameterGroupName|query|string|false|The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.|
|NotificationTopicStatus|query|string|false|<p>The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> \| <code>inactive</code> </p>|
|ApplyImmediately|query|boolean|false|<p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the replication group.</p> <p>If <code>false</code>, changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <p>Valid values: <code>true</code> \| <code>false</code> </p> <p>Default: <code>false</code> </p>|
|EngineVersion|query|string|false|<p>The upgraded version of the cache engine to be run on the clusters in the replication group.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version. </p>|
|AutoMinorVersionUpgrade|query|boolean|false| If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  |
|SnapshotRetentionLimit|query|integer|false|<p>The number of days for which ElastiCache retains automatic node group (shard) snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p> <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>|
|SnapshotWindow|query|string|false|<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of the node group (shard) specified by <code>SnapshottingClusterId</code>.</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>|
|CacheNodeType|query|string|false|A valid cache node type that you want to scale this replication group to.|
|AuthToken|query|string|false|<p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update-strategy </code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>|
|AuthTokenUpdateStrategy|query|string|false|<p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>|
|UserGroupIdsToAdd|query|[[UserGroupId](#schemausergroupid)]|false|The ID of the user group you are associating with the replication group.|
|UserGroupIdsToRemove|query|[[UserGroupId](#schemausergroupid)]|false|The ID of the user group to disassociate from the replication group, meaning the users in the group no longer can access the replication group.|
|RemoveUserGroups|query|boolean|false|Removes the user group associated with this replication group.|
|LogDeliveryConfigurations|query|[object]|false|Specifies the destination, format and type of the logs.|
|IpDiscovery|query|string|false|The network type you choose when modifying a cluster, either <code>ipv4</code> \| <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.|
|TransitEncryptionEnabled|query|boolean|false|A flag that enables in-transit encryption when set to true. If you are enabling in-transit encryption for an existing cluster, you must also set <code>TransitEncryptionMode</code> to <code>preferred</code>.|
|TransitEncryptionMode|query|string|false|<p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p> <p>You must set <code>TransitEncryptionEnabled</code> to <code>true</code>, for your existing cluster, and set <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can set the value to <code>required</code> to allow encrypted connections only.</p> <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to <code>required</code>. </p>|
|ClusterMode|query|string|false|Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.|
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
|AuthTokenUpdateStrategy|SET|
|AuthTokenUpdateStrategy|ROTATE|
|AuthTokenUpdateStrategy|DELETE|
|IpDiscovery|ipv4|
|IpDiscovery|ipv6|
|TransitEncryptionMode|preferred|
|TransitEncryptionMode|required|
|ClusterMode|enabled|
|ClusterMode|disabled|
|ClusterMode|compatible|
|Action|ModifyReplicationGroup|
|Version|2015-02-02|

<h3 id="getmodifyreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReplicationGroupResult](#schemamodifyreplicationgroupresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|483|483|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|484|484|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|485|485|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|486|486|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|487|487|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|488|488|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|489|489|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|490|490|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|491|491|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|492|492|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|493|493|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|494|494|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|495|495|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyReplicationGroup

<a id="opIdPOST_ModifyReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyReplicationGroup?Action=ModifyReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"ReplicationGroupDescription":{},"PrimaryClusterId":{},"SnapshottingClusterId":{},"AutomaticFailoverEnabled":{},"MultiAZEnabled":{},"NodeGroupId":{},"CacheSecurityGroupNames":{},"SecurityGroupIds":{},"PreferredMaintenanceWindow":{},"NotificationTopicArn":{},"CacheParameterGroupName":{},"NotificationTopicStatus":{},"ApplyImmediately":{},"EngineVersion":{},"AutoMinorVersionUpgrade":{},"SnapshotRetentionLimit":{},"SnapshotWindow":{},"CacheNodeType":{},"AuthToken":{},"AuthTokenUpdateStrategy":{},"UserGroupIdsToAdd":{},"UserGroupIdsToRemove":{},"RemoveUserGroups":{},"LogDeliveryConfigurations":{},"IpDiscovery":{},"TransitEncryptionEnabled":{},"TransitEncryptionMode":{},"ClusterMode":{}}'
```

`POST /#Action=ModifyReplicationGroup`

<p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "ReplicationGroupDescription": {},
  "PrimaryClusterId": {},
  "SnapshottingClusterId": {},
  "AutomaticFailoverEnabled": {},
  "MultiAZEnabled": {},
  "NodeGroupId": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "CacheParameterGroupName": {},
  "NotificationTopicStatus": {},
  "ApplyImmediately": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "CacheNodeType": {},
  "AuthToken": {},
  "AuthTokenUpdateStrategy": {},
  "UserGroupIdsToAdd": {},
  "UserGroupIdsToRemove": {},
  "RemoveUserGroups": {},
  "LogDeliveryConfigurations": {},
  "IpDiscovery": {},
  "TransitEncryptionEnabled": {},
  "TransitEncryptionMode": {},
  "ClusterMode": {}
}
```

<h3 id="postmodifyreplicationgroup-parameters">Parameters</h3>

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
|body|body|[ModifyReplicationGroupMessage](#schemamodifyreplicationgroupmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» ReplicationGroupDescription|body|object|false|none|
|» PrimaryClusterId|body|object|false|none|
|» SnapshottingClusterId|body|object|false|none|
|» AutomaticFailoverEnabled|body|object|false|none|
|» MultiAZEnabled|body|object|false|none|
|» NodeGroupId|body|object|false|none|
|» CacheSecurityGroupNames|body|object|false|none|
|» SecurityGroupIds|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» NotificationTopicArn|body|object|false|none|
|» CacheParameterGroupName|body|object|false|none|
|» NotificationTopicStatus|body|object|false|none|
|» ApplyImmediately|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» SnapshotRetentionLimit|body|object|false|none|
|» SnapshotWindow|body|object|false|none|
|» CacheNodeType|body|object|false|none|
|» AuthToken|body|object|false|none|
|» AuthTokenUpdateStrategy|body|object|false|none|
|» UserGroupIdsToAdd|body|object|false|none|
|» UserGroupIdsToRemove|body|object|false|none|
|» RemoveUserGroups|body|object|false|none|
|» LogDeliveryConfigurations|body|object|false|none|
|» LogType|body|object|false|none|
|» DestinationType|body|object|false|none|
|» DestinationDetails|body|object|false|none|
|» » CloudWatchLogsDetails|body|object|false|none|
|» » » LogGroup|body|object|false|none|
|» » KinesisFirehoseDetails|body|object|false|none|
|» » » DeliveryStream|body|object|false|none|
|» LogFormat|body|object|false|none|
|» Enabled|body|object|false|none|
|» IpDiscovery|body|object|false|none|
|» TransitEncryptionEnabled|body|object|false|none|
|» TransitEncryptionMode|body|object|false|none|
|» ClusterMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyReplicationGroup|
|Version|2015-02-02|

<h3 id="postmodifyreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReplicationGroupResult](#schemamodifyreplicationgroupresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|483|483|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|484|484|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|485|485|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|486|486|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|487|487|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|488|488|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|489|489|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|490|490|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|491|491|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|492|492|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|493|493|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|494|494|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|495|495|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyReplicationGroupShardConfiguration

<a id="opIdGET_ModifyReplicationGroupShardConfiguration"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyReplicationGroupShardConfiguration?ReplicationGroupId=string&NodeGroupCount=0&ApplyImmediately=true&Action=ModifyReplicationGroupShardConfiguration&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyReplicationGroupShardConfiguration`

Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.

<h3 id="getmodifyreplicationgroupshardconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The name of the Redis (cluster mode enabled) cluster (replication group) on which the shards are to be configured.|
|NodeGroupCount|query|integer|true|The number of node groups (shards) that results from the modification of the shard configuration.|
|ApplyImmediately|query|boolean|true|<p>Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is <code>true</code>.</p> <p>Value: true</p>|
|ReshardingConfiguration|query|[object]|false|<p>Specifies the preferred availability zones for each node group in the cluster. If the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards), you can use this parameter to specify the preferred availability zones of the cluster's shards. If you omit this parameter ElastiCache selects availability zones for you.</p> <p>You can specify this parameter only if the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards).</p>|
|NodeGroupsToRemove|query|[object]|false|<p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRemove</code> is a list of <code>NodeGroupId</code>s to remove from the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups listed by <code>NodeGroupsToRemove</code> from the cluster.</p>|
|NodeGroupsToRetain|query|[object]|false|<p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRetain</code> is a list of <code>NodeGroupId</code>s to retain in the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups except those listed by <code>NodeGroupsToRetain</code> from the cluster.</p>|
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
|Action|ModifyReplicationGroupShardConfiguration|
|Version|2015-02-02|

<h3 id="getmodifyreplicationgroupshardconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReplicationGroupShardConfigurationResult](#schemamodifyreplicationgroupshardconfigurationresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|483|483|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|484|484|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|485|485|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|486|486|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|487|487|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|488|488|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|489|489|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyReplicationGroupShardConfiguration

<a id="opIdPOST_ModifyReplicationGroupShardConfiguration"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyReplicationGroupShardConfiguration?Action=ModifyReplicationGroupShardConfiguration&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"NodeGroupCount":{},"ApplyImmediately":{},"ReshardingConfiguration":{},"NodeGroupsToRemove":{},"NodeGroupsToRetain":{}}'
```

`POST /#Action=ModifyReplicationGroupShardConfiguration`

Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "NodeGroupCount": {},
  "ApplyImmediately": {},
  "ReshardingConfiguration": {},
  "NodeGroupsToRemove": {},
  "NodeGroupsToRetain": {}
}
```

<h3 id="postmodifyreplicationgroupshardconfiguration-parameters">Parameters</h3>

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
|body|body|[ModifyReplicationGroupShardConfigurationMessage](#schemamodifyreplicationgroupshardconfigurationmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» NodeGroupCount|body|object|true|none|
|» ApplyImmediately|body|object|true|none|
|» ReshardingConfiguration|body|object|false|none|
|» NodeGroupId|body|object|false|none|
|» PreferredAvailabilityZones|body|object|false|none|
|» NodeGroupsToRemove|body|object|false|none|
|» NodeGroupsToRetain|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyReplicationGroupShardConfiguration|
|Version|2015-02-02|

<h3 id="postmodifyreplicationgroupshardconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReplicationGroupShardConfigurationResult](#schemamodifyreplicationgroupshardconfigurationresult)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|483|483|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|484|484|InsufficientCacheClusterCapacityFault|[InsufficientCacheClusterCapacityFault](#schemainsufficientcacheclustercapacityfault)|
|485|485|NodeGroupsPerReplicationGroupQuotaExceededFault|[NodeGroupsPerReplicationGroupQuotaExceededFault](#schemanodegroupsperreplicationgroupquotaexceededfault)|
|486|486|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|487|487|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|488|488|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|489|489|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyUser

<a id="opIdGET_ModifyUser"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyUser?UserId=string&Action=ModifyUser&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyUser`

Changes user password(s) and/or access string.

<h3 id="getmodifyuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|query|string|true|The ID of the user.|
|AccessString|query|string|false|Access permissions string used for this user.|
|AppendAccessString|query|string|false|Adds additional user permissions to the access string.|
|Passwords|query|[[String](#schemastring)]|false|The passwords belonging to the user. You are allowed up to two.|
|NoPasswordRequired|query|boolean|false|Indicates no password is required for the user.|
|AuthenticationMode|query|object|false|Specifies how to authenticate the user.|
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
|Action|ModifyUser|
|Version|2015-02-02|

<h3 id="getmodifyuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|480|480|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|481|481|InvalidUserStateFault|[InvalidUserStateFault](#schemainvaliduserstatefault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyUser

<a id="opIdPOST_ModifyUser"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyUser?Action=ModifyUser&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"UserId":{},"AccessString":{},"AppendAccessString":{},"Passwords":{},"NoPasswordRequired":{},"AuthenticationMode":{"Type":{},"Passwords":{}}}'
```

`POST /#Action=ModifyUser`

Changes user password(s) and/or access string.

> Body parameter

```json
{
  "UserId": {},
  "AccessString": {},
  "AppendAccessString": {},
  "Passwords": {},
  "NoPasswordRequired": {},
  "AuthenticationMode": {
    "Type": {},
    "Passwords": {}
  }
}
```

<h3 id="postmodifyuser-parameters">Parameters</h3>

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
|body|body|[ModifyUserMessage](#schemamodifyusermessage)|false|none|
|» UserId|body|object|true|none|
|» AccessString|body|object|false|none|
|» AppendAccessString|body|object|false|none|
|» Passwords|body|object|false|none|
|» NoPasswordRequired|body|object|false|none|
|» AuthenticationMode|body|object|false|none|
|» » Type|body|object|false|none|
|» » Passwords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyUser|
|Version|2015-02-02|

<h3 id="postmodifyuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|480|480|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|481|481|InvalidUserStateFault|[InvalidUserStateFault](#schemainvaliduserstatefault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyUserGroup

<a id="opIdGET_ModifyUserGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyUserGroup?UserGroupId=string&Action=ModifyUserGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyUserGroup`

Changes the list of users that belong to the user group.

<h3 id="getmodifyusergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserGroupId|query|string|true|The ID of the user group.|
|UserIdsToAdd|query|[[UserId](#schemauserid)]|false|The list of user IDs to add to the user group.|
|UserIdsToRemove|query|[[UserId](#schemauserid)]|false|The list of user IDs to remove from the user group.|
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
|Action|ModifyUserGroup|
|Version|2015-02-02|

<h3 id="getmodifyusergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserGroup](#schemausergroup)|
|480|480|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|481|481|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|482|482|DuplicateUserNameFault|[DuplicateUserNameFault](#schemaduplicateusernamefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|DefaultUserRequired|[DefaultUserRequired](#schemadefaultuserrequired)|
|485|485|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|486|486|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|487|487|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyUserGroup

<a id="opIdPOST_ModifyUserGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ModifyUserGroup?Action=ModifyUserGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"UserGroupId":{},"UserIdsToAdd":{},"UserIdsToRemove":{}}'
```

`POST /#Action=ModifyUserGroup`

Changes the list of users that belong to the user group.

> Body parameter

```json
{
  "UserGroupId": {},
  "UserIdsToAdd": {},
  "UserIdsToRemove": {}
}
```

<h3 id="postmodifyusergroup-parameters">Parameters</h3>

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
|body|body|[ModifyUserGroupMessage](#schemamodifyusergroupmessage)|false|none|
|» UserGroupId|body|object|true|none|
|» UserIdsToAdd|body|object|false|none|
|» UserIdsToRemove|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyUserGroup|
|Version|2015-02-02|

<h3 id="postmodifyusergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserGroup](#schemausergroup)|
|480|480|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|481|481|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|482|482|DuplicateUserNameFault|[DuplicateUserNameFault](#schemaduplicateusernamefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|DefaultUserRequired|[DefaultUserRequired](#schemadefaultuserrequired)|
|485|485|InvalidUserGroupStateFault|[InvalidUserGroupStateFault](#schemainvalidusergroupstatefault)|
|486|486|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|487|487|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PurchaseReservedCacheNodesOffering

<a id="opIdGET_PurchaseReservedCacheNodesOffering"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=PurchaseReservedCacheNodesOffering?ReservedCacheNodesOfferingId=string&Action=PurchaseReservedCacheNodesOffering&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PurchaseReservedCacheNodesOffering`

Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.

<h3 id="getpurchasereservedcachenodesoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReservedCacheNodesOfferingId|query|string|true|<p>The ID of the reserved cache node offering to purchase.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>|
|ReservedCacheNodeId|query|string|false|<p>A customer-specified identifier to track this reservation.</p> <note> <p>The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation. If this parameter is not specified, ElastiCache automatically generates an identifier for the reservation.</p> </note> <p>Example: myreservationID</p>|
|CacheNodeCount|query|integer|false|<p>The number of cache node instances to reserve.</p> <p>Default: <code>1</code> </p>|
|Tags|query|[object]|false|A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.|
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
|Action|PurchaseReservedCacheNodesOffering|
|Version|2015-02-02|

<h3 id="getpurchasereservedcachenodesoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PurchaseReservedCacheNodesOfferingResult](#schemapurchasereservedcachenodesofferingresult)|
|480|480|ReservedCacheNodesOfferingNotFoundFault|[ReservedCacheNodesOfferingNotFoundFault](#schemareservedcachenodesofferingnotfoundfault)|
|481|481|ReservedCacheNodeAlreadyExistsFault|[ReservedCacheNodeAlreadyExistsFault](#schemareservedcachenodealreadyexistsfault)|
|482|482|ReservedCacheNodeQuotaExceededFault|[ReservedCacheNodeQuotaExceededFault](#schemareservedcachenodequotaexceededfault)|
|483|483|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PurchaseReservedCacheNodesOffering

<a id="opIdPOST_PurchaseReservedCacheNodesOffering"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=PurchaseReservedCacheNodesOffering?Action=PurchaseReservedCacheNodesOffering&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReservedCacheNodesOfferingId":{},"ReservedCacheNodeId":{},"CacheNodeCount":{},"Tags":{}}'
```

`POST /#Action=PurchaseReservedCacheNodesOffering`

Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.

> Body parameter

```json
{
  "ReservedCacheNodesOfferingId": {},
  "ReservedCacheNodeId": {},
  "CacheNodeCount": {},
  "Tags": {}
}
```

<h3 id="postpurchasereservedcachenodesoffering-parameters">Parameters</h3>

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
|body|body|[PurchaseReservedCacheNodesOfferingMessage](#schemapurchasereservedcachenodesofferingmessage)|false|none|
|» ReservedCacheNodesOfferingId|body|object|true|none|
|» ReservedCacheNodeId|body|object|false|none|
|» CacheNodeCount|body|object|false|none|
|» Tags|body|object|false|none|
|» Key|body|object|false|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PurchaseReservedCacheNodesOffering|
|Version|2015-02-02|

<h3 id="postpurchasereservedcachenodesoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PurchaseReservedCacheNodesOfferingResult](#schemapurchasereservedcachenodesofferingresult)|
|480|480|ReservedCacheNodesOfferingNotFoundFault|[ReservedCacheNodesOfferingNotFoundFault](#schemareservedcachenodesofferingnotfoundfault)|
|481|481|ReservedCacheNodeAlreadyExistsFault|[ReservedCacheNodeAlreadyExistsFault](#schemareservedcachenodealreadyexistsfault)|
|482|482|ReservedCacheNodeQuotaExceededFault|[ReservedCacheNodeQuotaExceededFault](#schemareservedcachenodequotaexceededfault)|
|483|483|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RebalanceSlotsInGlobalReplicationGroup

<a id="opIdGET_RebalanceSlotsInGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RebalanceSlotsInGlobalReplicationGroup?GlobalReplicationGroupId=string&ApplyImmediately=true&Action=RebalanceSlotsInGlobalReplicationGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RebalanceSlotsInGlobalReplicationGroup`

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

<h3 id="getrebalanceslotsinglobalreplicationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|query|string|true|The name of the Global datastore|
|ApplyImmediately|query|boolean|true|If <code>True</code>, redistribution is applied immediately.|
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
|Action|RebalanceSlotsInGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="getrebalanceslotsinglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebalanceSlotsInGlobalReplicationGroupResult](#schemarebalanceslotsinglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RebalanceSlotsInGlobalReplicationGroup

<a id="opIdPOST_RebalanceSlotsInGlobalReplicationGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RebalanceSlotsInGlobalReplicationGroup?Action=RebalanceSlotsInGlobalReplicationGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"GlobalReplicationGroupId":{},"ApplyImmediately":{}}'
```

`POST /#Action=RebalanceSlotsInGlobalReplicationGroup`

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

> Body parameter

```json
{
  "GlobalReplicationGroupId": {},
  "ApplyImmediately": {}
}
```

<h3 id="postrebalanceslotsinglobalreplicationgroup-parameters">Parameters</h3>

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
|body|body|[RebalanceSlotsInGlobalReplicationGroupMessage](#schemarebalanceslotsinglobalreplicationgroupmessage)|false|none|
|» GlobalReplicationGroupId|body|object|true|none|
|» ApplyImmediately|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RebalanceSlotsInGlobalReplicationGroup|
|Version|2015-02-02|

<h3 id="postrebalanceslotsinglobalreplicationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebalanceSlotsInGlobalReplicationGroupResult](#schemarebalanceslotsinglobalreplicationgroupresult)|
|480|480|GlobalReplicationGroupNotFoundFault|[GlobalReplicationGroupNotFoundFault](#schemaglobalreplicationgroupnotfoundfault)|
|481|481|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RebootCacheCluster

<a id="opIdGET_RebootCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RebootCacheCluster?CacheClusterId=string&CacheNodeIdsToReboot=%7B%7D&Action=RebootCacheCluster&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RebootCacheCluster`

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

<h3 id="getrebootcachecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheClusterId|query|string|true|The cluster identifier. This parameter is stored as a lowercase string.|
|CacheNodeIdsToReboot|query|[object]|true|A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.|
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
|Action|RebootCacheCluster|
|Version|2015-02-02|

<h3 id="getrebootcachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootCacheClusterResult](#schemarebootcacheclusterresult)|
|480|480|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|481|481|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RebootCacheCluster

<a id="opIdPOST_RebootCacheCluster"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RebootCacheCluster?Action=RebootCacheCluster&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheClusterId":{},"CacheNodeIdsToReboot":{}}'
```

`POST /#Action=RebootCacheCluster`

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

> Body parameter

```json
{
  "CacheClusterId": {},
  "CacheNodeIdsToReboot": {}
}
```

<h3 id="postrebootcachecluster-parameters">Parameters</h3>

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
|body|body|[RebootCacheClusterMessage](#schemarebootcacheclustermessage)|false|none|
|» CacheClusterId|body|object|true|none|
|» CacheNodeIdsToReboot|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RebootCacheCluster|
|Version|2015-02-02|

<h3 id="postrebootcachecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootCacheClusterResult](#schemarebootcacheclusterresult)|
|480|480|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|481|481|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveTagsFromResource

<a id="opIdGET_RemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RemoveTagsFromResource?ResourceName=string&TagKeys=string&Action=RemoveTagsFromResource&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveTagsFromResource`

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

<h3 id="getremovetagsfromresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceName|query|string|true|<p>The Amazon Resource Name (ARN) of the resource from which you want the tags removed, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>|
|TagKeys|query|[[String](#schemastring)]|true|A list of <code>TagKeys</code> identifying the tags you want removed from the named resource.|
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
|Version|2015-02-02|

<h3 id="getremovetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|483|483|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|486|486|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|487|487|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|488|488|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|489|489|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|490|490|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|
|491|491|TagNotFoundFault|[TagNotFoundFault](#schematagnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveTagsFromResource

<a id="opIdPOST_RemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RemoveTagsFromResource?Action=RemoveTagsFromResource&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceName":{},"TagKeys":{}}'
```

`POST /#Action=RemoveTagsFromResource`

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

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
|Version|2015-02-02|

<h3 id="postremovetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagListMessage](#schemataglistmessage)|
|480|480|CacheClusterNotFoundFault|[CacheClusterNotFoundFault](#schemacacheclusternotfoundfault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|483|483|CacheSubnetGroupNotFoundFault|[CacheSubnetGroupNotFoundFault](#schemacachesubnetgroupnotfoundfault)|
|484|484|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|485|485|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|486|486|ReservedCacheNodeNotFoundFault|[ReservedCacheNodeNotFoundFault](#schemareservedcachenodenotfoundfault)|
|487|487|SnapshotNotFoundFault|[SnapshotNotFoundFault](#schemasnapshotnotfoundfault)|
|488|488|UserNotFoundFault|[UserNotFoundFault](#schemausernotfoundfault)|
|489|489|UserGroupNotFoundFault|[UserGroupNotFoundFault](#schemausergroupnotfoundfault)|
|490|490|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|
|491|491|TagNotFoundFault|[TagNotFoundFault](#schematagnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ResetCacheParameterGroup

<a id="opIdGET_ResetCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ResetCacheParameterGroup?CacheParameterGroupName=string&Action=ResetCacheParameterGroup&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ResetCacheParameterGroup`

Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.

<h3 id="getresetcacheparametergroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheParameterGroupName|query|string|true|The name of the cache parameter group to reset.|
|ResetAllParameters|query|boolean|false|<p>If <code>true</code>, all parameters in the cache parameter group are reset to their default values. If <code>false</code>, only the parameters listed by <code>ParameterNameValues</code> are reset to their default values.</p> <p>Valid values: <code>true</code> \| <code>false</code> </p>|
|ParameterNameValues|query|[object]|false|An array of parameter names to reset to their default values. If <code>ResetAllParameters</code> is <code>true</code>, do not use <code>ParameterNameValues</code>. If <code>ResetAllParameters</code> is <code>false</code>, you must specify the name of at least one parameter to reset.|
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
|Action|ResetCacheParameterGroup|
|Version|2015-02-02|

<h3 id="getresetcacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupNameMessage](#schemacacheparametergroupnamemessage)|
|480|480|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|484|484|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ResetCacheParameterGroup

<a id="opIdPOST_ResetCacheParameterGroup"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=ResetCacheParameterGroup?Action=ResetCacheParameterGroup&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheParameterGroupName":{},"ResetAllParameters":{},"ParameterNameValues":{}}'
```

`POST /#Action=ResetCacheParameterGroup`

Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.

> Body parameter

```json
{
  "CacheParameterGroupName": {},
  "ResetAllParameters": {},
  "ParameterNameValues": {}
}
```

<h3 id="postresetcacheparametergroup-parameters">Parameters</h3>

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
|body|body|[ResetCacheParameterGroupMessage](#schemaresetcacheparametergroupmessage)|false|none|
|» CacheParameterGroupName|body|object|true|none|
|» ResetAllParameters|body|object|false|none|
|» ParameterNameValues|body|object|false|none|
|» ParameterName|body|object|false|none|
|» ParameterValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ResetCacheParameterGroup|
|Version|2015-02-02|

<h3 id="postresetcacheparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CacheParameterGroupNameMessage](#schemacacheparametergroupnamemessage)|
|480|480|InvalidCacheParameterGroupStateFault|[InvalidCacheParameterGroupStateFault](#schemainvalidcacheparametergroupstatefault)|
|481|481|CacheParameterGroupNotFoundFault|[CacheParameterGroupNotFoundFault](#schemacacheparametergroupnotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|484|484|InvalidGlobalReplicationGroupStateFault|[InvalidGlobalReplicationGroupStateFault](#schemainvalidglobalreplicationgroupstatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RevokeCacheSecurityGroupIngress

<a id="opIdGET_RevokeCacheSecurityGroupIngress"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RevokeCacheSecurityGroupIngress?CacheSecurityGroupName=string&EC2SecurityGroupName=string&EC2SecurityGroupOwnerId=string&Action=RevokeCacheSecurityGroupIngress&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RevokeCacheSecurityGroupIngress`

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

<h3 id="getrevokecachesecuritygroupingress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|query|string|true|The name of the cache security group to revoke ingress from.|
|EC2SecurityGroupName|query|string|true|The name of the Amazon EC2 security group to revoke access from.|
|EC2SecurityGroupOwnerId|query|string|true|The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.|
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
|Action|RevokeCacheSecurityGroupIngress|
|Version|2015-02-02|

<h3 id="getrevokecachesecuritygroupingress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeCacheSecurityGroupIngressResult](#schemarevokecachesecuritygroupingressresult)|
|480|480|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|481|481|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|482|482|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RevokeCacheSecurityGroupIngress

<a id="opIdPOST_RevokeCacheSecurityGroupIngress"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=RevokeCacheSecurityGroupIngress?Action=RevokeCacheSecurityGroupIngress&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CacheSecurityGroupName":{},"EC2SecurityGroupName":{},"EC2SecurityGroupOwnerId":{}}'
```

`POST /#Action=RevokeCacheSecurityGroupIngress`

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

> Body parameter

```json
{
  "CacheSecurityGroupName": {},
  "EC2SecurityGroupName": {},
  "EC2SecurityGroupOwnerId": {}
}
```

<h3 id="postrevokecachesecuritygroupingress-parameters">Parameters</h3>

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
|body|body|[RevokeCacheSecurityGroupIngressMessage](#schemarevokecachesecuritygroupingressmessage)|false|none|
|» CacheSecurityGroupName|body|object|true|none|
|» EC2SecurityGroupName|body|object|true|none|
|» EC2SecurityGroupOwnerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RevokeCacheSecurityGroupIngress|
|Version|2015-02-02|

<h3 id="postrevokecachesecuritygroupingress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeCacheSecurityGroupIngressResult](#schemarevokecachesecuritygroupingressresult)|
|480|480|CacheSecurityGroupNotFoundFault|[CacheSecurityGroupNotFoundFault](#schemacachesecuritygroupnotfoundfault)|
|481|481|AuthorizationNotFoundFault|[AuthorizationNotFoundFault](#schemaauthorizationnotfoundfault)|
|482|482|InvalidCacheSecurityGroupStateFault|[InvalidCacheSecurityGroupStateFault](#schemainvalidcachesecuritygroupstatefault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StartMigration

<a id="opIdGET_StartMigration"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=StartMigration?ReplicationGroupId=string&CustomerNodeEndpointList=%7B%22Address%22%3A%7B%7D%2C%22Port%22%3A%7B%7D%7D&Action=StartMigration&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StartMigration`

Start the migration of data.

<h3 id="getstartmigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The ID of the replication group to which data should be migrated.|
|CustomerNodeEndpointList|query|[[CustomerNodeEndpoint](#schemacustomernodeendpoint)]|true|List of endpoints from which data should be migrated. For Redis (cluster mode disabled), list should have only one element.|
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
|Action|StartMigration|
|Version|2015-02-02|

<h3 id="getstartmigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMigrationResponse](#schemastartmigrationresponse)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|ReplicationGroupAlreadyUnderMigrationFault|[ReplicationGroupAlreadyUnderMigrationFault](#schemareplicationgroupalreadyundermigrationfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StartMigration

<a id="opIdPOST_StartMigration"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=StartMigration?Action=StartMigration&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"CustomerNodeEndpointList":{}}'
```

`POST /#Action=StartMigration`

Start the migration of data.

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "CustomerNodeEndpointList": {}
}
```

<h3 id="poststartmigration-parameters">Parameters</h3>

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
|body|body|[StartMigrationMessage](#schemastartmigrationmessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» CustomerNodeEndpointList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StartMigration|
|Version|2015-02-02|

<h3 id="poststartmigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMigrationResponse](#schemastartmigrationresponse)|
|480|480|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|481|481|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|482|482|ReplicationGroupAlreadyUnderMigrationFault|[ReplicationGroupAlreadyUnderMigrationFault](#schemareplicationgroupalreadyundermigrationfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TestFailover

<a id="opIdGET_TestFailover"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=TestFailover?ReplicationGroupId=string&NodeGroupId=stri&Action=TestFailover&Version=2015-02-02' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=TestFailover`

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

<h3 id="gettestfailover-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReplicationGroupId|query|string|true|The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.|
|NodeGroupId|query|string|true|The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 5 node groups in any rolling 24-hour period.|
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
|Action|TestFailover|
|Version|2015-02-02|

<h3 id="gettestfailover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestFailoverResult](#schematestfailoverresult)|
|480|480|APICallRateForCustomerExceededFault|[APICallRateForCustomerExceededFault](#schemaapicallrateforcustomerexceededfault)|
|481|481|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|482|482|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|483|483|NodeGroupNotFoundFault|[NodeGroupNotFoundFault](#schemanodegroupnotfoundfault)|
|484|484|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|485|485|TestFailoverNotAvailableFault|[TestFailoverNotAvailableFault](#schematestfailovernotavailablefault)|
|486|486|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|487|487|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TestFailover

<a id="opIdPOST_TestFailover"></a>

> Code samples

```bash
curl 'https://elasticache.us-east-1.amazonaws.com/#Action=TestFailover?Action=TestFailover&Version=2015-02-02' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationGroupId":{},"NodeGroupId":{}}'
```

`POST /#Action=TestFailover`

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

> Body parameter

```json
{
  "ReplicationGroupId": {},
  "NodeGroupId": {}
}
```

<h3 id="posttestfailover-parameters">Parameters</h3>

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
|body|body|[TestFailoverMessage](#schematestfailovermessage)|false|none|
|» ReplicationGroupId|body|object|true|none|
|» NodeGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TestFailover|
|Version|2015-02-02|

<h3 id="posttestfailover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestFailoverResult](#schematestfailoverresult)|
|480|480|APICallRateForCustomerExceededFault|[APICallRateForCustomerExceededFault](#schemaapicallrateforcustomerexceededfault)|
|481|481|InvalidCacheClusterStateFault|[InvalidCacheClusterStateFault](#schemainvalidcacheclusterstatefault)|
|482|482|InvalidReplicationGroupStateFault|[InvalidReplicationGroupStateFault](#schemainvalidreplicationgroupstatefault)|
|483|483|NodeGroupNotFoundFault|[NodeGroupNotFoundFault](#schemanodegroupnotfoundfault)|
|484|484|ReplicationGroupNotFoundFault|[ReplicationGroupNotFoundFault](#schemareplicationgroupnotfoundfault)|
|485|485|TestFailoverNotAvailableFault|[TestFailoverNotAvailableFault](#schematestfailovernotavailablefault)|
|486|486|InvalidKMSKeyFault|[InvalidKMSKeyFault](#schemainvalidkmskeyfault)|
|487|487|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

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

Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

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

A tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. A tag with a null Value is permitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_CacheClusterNotFoundFault">CacheClusterNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemacacheclusternotfoundfault"></a>
<a id="schema_CacheClusterNotFoundFault"></a>
<a id="tocScacheclusternotfoundfault"></a>
<a id="tocscacheclusternotfoundfault"></a>

```json
null
```

<h2 id="tocS_CacheParameterGroupNotFoundFault">CacheParameterGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroupnotfoundfault"></a>
<a id="schema_CacheParameterGroupNotFoundFault"></a>
<a id="tocScacheparametergroupnotfoundfault"></a>
<a id="tocscacheparametergroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_CacheSecurityGroupNotFoundFault">CacheSecurityGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroupnotfoundfault"></a>
<a id="schema_CacheSecurityGroupNotFoundFault"></a>
<a id="tocScachesecuritygroupnotfoundfault"></a>
<a id="tocscachesecuritygroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_CacheSubnetGroupNotFoundFault">CacheSubnetGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetgroupnotfoundfault"></a>
<a id="schema_CacheSubnetGroupNotFoundFault"></a>
<a id="tocScachesubnetgroupnotfoundfault"></a>
<a id="tocscachesubnetgroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_InvalidReplicationGroupStateFault">InvalidReplicationGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidreplicationgroupstatefault"></a>
<a id="schema_InvalidReplicationGroupStateFault"></a>
<a id="tocSinvalidreplicationgroupstatefault"></a>
<a id="tocsinvalidreplicationgroupstatefault"></a>

```json
null
```

<h2 id="tocS_ReplicationGroupNotFoundFault">ReplicationGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupnotfoundfault"></a>
<a id="schema_ReplicationGroupNotFoundFault"></a>
<a id="tocSreplicationgroupnotfoundfault"></a>
<a id="tocsreplicationgroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_ReservedCacheNodeNotFoundFault">ReservedCacheNodeNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodenotfoundfault"></a>
<a id="schema_ReservedCacheNodeNotFoundFault"></a>
<a id="tocSreservedcachenodenotfoundfault"></a>
<a id="tocsreservedcachenodenotfoundfault"></a>

```json
null
```

<h2 id="tocS_SnapshotNotFoundFault">SnapshotNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotnotfoundfault"></a>
<a id="schema_SnapshotNotFoundFault"></a>
<a id="tocSsnapshotnotfoundfault"></a>
<a id="tocssnapshotnotfoundfault"></a>

```json
null
```

<h2 id="tocS_UserNotFoundFault">UserNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemausernotfoundfault"></a>
<a id="schema_UserNotFoundFault"></a>
<a id="tocSusernotfoundfault"></a>
<a id="tocsusernotfoundfault"></a>

```json
null
```

<h2 id="tocS_UserGroupNotFoundFault">UserGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemausergroupnotfoundfault"></a>
<a id="schema_UserGroupNotFoundFault"></a>
<a id="tocSusergroupnotfoundfault"></a>
<a id="tocsusergroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_TagQuotaPerResourceExceeded">TagQuotaPerResourceExceeded</h2>
<!-- backwards compatibility -->
<a id="schematagquotaperresourceexceeded"></a>
<a id="schema_TagQuotaPerResourceExceeded"></a>
<a id="tocStagquotaperresourceexceeded"></a>
<a id="tocstagquotaperresourceexceeded"></a>

```json
null
```

<h2 id="tocS_InvalidARNFault">InvalidARNFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarnfault"></a>
<a id="schema_InvalidARNFault"></a>
<a id="tocSinvalidarnfault"></a>
<a id="tocsinvalidarnfault"></a>

```json
null
```

<h2 id="tocS_AuthorizeCacheSecurityGroupIngressResult">AuthorizeCacheSecurityGroupIngressResult</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizecachesecuritygroupingressresult"></a>
<a id="schema_AuthorizeCacheSecurityGroupIngressResult"></a>
<a id="tocSauthorizecachesecuritygroupingressresult"></a>
<a id="tocsauthorizecachesecuritygroupingressresult"></a>

```json
{
  "CacheSecurityGroup": {
    "OwnerId": {},
    "CacheSecurityGroupName": {},
    "Description": {},
    "EC2SecurityGroups": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroup|[CacheSecurityGroup](#schemacachesecuritygroup)|false|none|<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>|

<h2 id="tocS_InvalidCacheSecurityGroupStateFault">InvalidCacheSecurityGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcachesecuritygroupstatefault"></a>
<a id="schema_InvalidCacheSecurityGroupStateFault"></a>
<a id="tocSinvalidcachesecuritygroupstatefault"></a>
<a id="tocsinvalidcachesecuritygroupstatefault"></a>

```json
null
```

<h2 id="tocS_AuthorizationAlreadyExistsFault">AuthorizationAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationalreadyexistsfault"></a>
<a id="schema_AuthorizationAlreadyExistsFault"></a>
<a id="tocSauthorizationalreadyexistsfault"></a>
<a id="tocsauthorizationalreadyexistsfault"></a>

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

<h2 id="tocS_InvalidParameterCombinationException">InvalidParameterCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametercombinationexception"></a>
<a id="schema_InvalidParameterCombinationException"></a>
<a id="tocSinvalidparametercombinationexception"></a>
<a id="tocsinvalidparametercombinationexception"></a>

```json
null
```

<h2 id="tocS_UpdateActionResultsMessage">UpdateActionResultsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactionresultsmessage"></a>
<a id="schema_UpdateActionResultsMessage"></a>
<a id="tocSupdateactionresultsmessage"></a>
<a id="tocsupdateactionresultsmessage"></a>

```json
{
  "ProcessedUpdateActions": {},
  "UnprocessedUpdateActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProcessedUpdateActions|object|false|none|none|
|UnprocessedUpdateActions|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ServiceUpdateNotFoundFault">ServiceUpdateNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdatenotfoundfault"></a>
<a id="schema_ServiceUpdateNotFoundFault"></a>
<a id="tocSserviceupdatenotfoundfault"></a>
<a id="tocsserviceupdatenotfoundfault"></a>

```json
null
```

<h2 id="tocS_CompleteMigrationResponse">CompleteMigrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompletemigrationresponse"></a>
<a id="schema_CompleteMigrationResponse"></a>
<a id="tocScompletemigrationresponse"></a>
<a id="tocscompletemigrationresponse"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_ReplicationGroupNotUnderMigrationFault">ReplicationGroupNotUnderMigrationFault</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupnotundermigrationfault"></a>
<a id="schema_ReplicationGroupNotUnderMigrationFault"></a>
<a id="tocSreplicationgroupnotundermigrationfault"></a>
<a id="tocsreplicationgroupnotundermigrationfault"></a>

```json
null
```

<h2 id="tocS_CopySnapshotResult">CopySnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacopysnapshotresult"></a>
<a id="schema_CopySnapshotResult"></a>
<a id="tocScopysnapshotresult"></a>
<a id="tocscopysnapshotresult"></a>

```json
{
  "Snapshot": {
    "SnapshotName": {},
    "ReplicationGroupId": {},
    "ReplicationGroupDescription": {},
    "CacheClusterId": {},
    "SnapshotStatus": {},
    "SnapshotSource": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "TopicArn": {},
    "Port": {},
    "CacheParameterGroupName": {},
    "CacheSubnetGroupName": {},
    "VpcId": {},
    "AutoMinorVersionUpgrade": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "NumNodeGroups": {},
    "AutomaticFailover": {},
    "NodeSnapshots": {},
    "KmsKeyId": {},
    "ARN": {},
    "DataTiering": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Snapshot|[Snapshot](#schemasnapshot)|false|none|Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.|

<h2 id="tocS_SnapshotAlreadyExistsFault">SnapshotAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotalreadyexistsfault"></a>
<a id="schema_SnapshotAlreadyExistsFault"></a>
<a id="tocSsnapshotalreadyexistsfault"></a>
<a id="tocssnapshotalreadyexistsfault"></a>

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

<h2 id="tocS_InvalidSnapshotStateFault">InvalidSnapshotStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsnapshotstatefault"></a>
<a id="schema_InvalidSnapshotStateFault"></a>
<a id="tocSinvalidsnapshotstatefault"></a>
<a id="tocsinvalidsnapshotstatefault"></a>

```json
null
```

<h2 id="tocS_CreateCacheClusterResult">CreateCacheClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecacheclusterresult"></a>
<a id="schema_CreateCacheClusterResult"></a>
<a id="tocScreatecacheclusterresult"></a>
<a id="tocscreatecacheclusterresult"></a>

```json
{
  "CacheCluster": {
    "CacheClusterId": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "ClientDownloadLandingPage": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "CacheClusterStatus": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "NumCacheNodes": {},
      "CacheNodeIdsToRemove": {},
      "EngineVersion": {},
      "CacheNodeType": {},
      "AuthTokenStatus": {},
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {}
    },
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "CacheSecurityGroups": {},
    "CacheParameterGroup": {
      "CacheParameterGroupName": {},
      "ParameterApplyStatus": {},
      "CacheNodeIdsToReboot": {}
    },
    "CacheSubnetGroupName": {},
    "CacheNodes": {},
    "AutoMinorVersionUpgrade": {},
    "SecurityGroups": {},
    "ReplicationGroupId": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {},
    "ReplicationGroupLogDeliveryEnabled": {},
    "LogDeliveryConfigurations": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheCluster|[CacheCluster](#schemacachecluster)|false|none|Contains all of the attributes of a specific cluster.|

<h2 id="tocS_LogDeliveryConfigurationRequest">LogDeliveryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalogdeliveryconfigurationrequest"></a>
<a id="schema_LogDeliveryConfigurationRequest"></a>
<a id="tocSlogdeliveryconfigurationrequest"></a>
<a id="tocslogdeliveryconfigurationrequest"></a>

```json
{
  "LogType": {},
  "DestinationType": {},
  "DestinationDetails": {
    "CloudWatchLogsDetails": {
      "LogGroup": {}
    },
    "KinesisFirehoseDetails": {
      "DeliveryStream": {}
    }
  },
  "LogFormat": {},
  "Enabled": {}
}
```

Specifies the destination, format and type of the logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogType|object|false|none|none|
|DestinationType|object|false|none|none|
|DestinationDetails|object|false|none|none|
|LogFormat|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_CacheClusterAlreadyExistsFault">CacheClusterAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemacacheclusteralreadyexistsfault"></a>
<a id="schema_CacheClusterAlreadyExistsFault"></a>
<a id="tocScacheclusteralreadyexistsfault"></a>
<a id="tocscacheclusteralreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_InsufficientCacheClusterCapacityFault">InsufficientCacheClusterCapacityFault</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientcacheclustercapacityfault"></a>
<a id="schema_InsufficientCacheClusterCapacityFault"></a>
<a id="tocSinsufficientcacheclustercapacityfault"></a>
<a id="tocsinsufficientcacheclustercapacityfault"></a>

```json
null
```

<h2 id="tocS_ClusterQuotaForCustomerExceededFault">ClusterQuotaForCustomerExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemaclusterquotaforcustomerexceededfault"></a>
<a id="schema_ClusterQuotaForCustomerExceededFault"></a>
<a id="tocSclusterquotaforcustomerexceededfault"></a>
<a id="tocsclusterquotaforcustomerexceededfault"></a>

```json
null
```

<h2 id="tocS_NodeQuotaForClusterExceededFault">NodeQuotaForClusterExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemanodequotaforclusterexceededfault"></a>
<a id="schema_NodeQuotaForClusterExceededFault"></a>
<a id="tocSnodequotaforclusterexceededfault"></a>
<a id="tocsnodequotaforclusterexceededfault"></a>

```json
null
```

<h2 id="tocS_NodeQuotaForCustomerExceededFault">NodeQuotaForCustomerExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemanodequotaforcustomerexceededfault"></a>
<a id="schema_NodeQuotaForCustomerExceededFault"></a>
<a id="tocSnodequotaforcustomerexceededfault"></a>
<a id="tocsnodequotaforcustomerexceededfault"></a>

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

<h2 id="tocS_CreateCacheParameterGroupResult">CreateCacheParameterGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecacheparametergroupresult"></a>
<a id="schema_CreateCacheParameterGroupResult"></a>
<a id="tocScreatecacheparametergroupresult"></a>
<a id="tocscreatecacheparametergroupresult"></a>

```json
{
  "CacheParameterGroup": {
    "CacheParameterGroupName": {},
    "CacheParameterGroupFamily": {},
    "Description": {},
    "IsGlobal": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroup|[CacheParameterGroup](#schemacacheparametergroup)|false|none|Represents the output of a <code>CreateCacheParameterGroup</code> operation.|

<h2 id="tocS_CacheParameterGroupQuotaExceededFault">CacheParameterGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroupquotaexceededfault"></a>
<a id="schema_CacheParameterGroupQuotaExceededFault"></a>
<a id="tocScacheparametergroupquotaexceededfault"></a>
<a id="tocscacheparametergroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_CacheParameterGroupAlreadyExistsFault">CacheParameterGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroupalreadyexistsfault"></a>
<a id="schema_CacheParameterGroupAlreadyExistsFault"></a>
<a id="tocScacheparametergroupalreadyexistsfault"></a>
<a id="tocscacheparametergroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_InvalidCacheParameterGroupStateFault">InvalidCacheParameterGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcacheparametergroupstatefault"></a>
<a id="schema_InvalidCacheParameterGroupStateFault"></a>
<a id="tocSinvalidcacheparametergroupstatefault"></a>
<a id="tocsinvalidcacheparametergroupstatefault"></a>

```json
null
```

<h2 id="tocS_CreateCacheSecurityGroupResult">CreateCacheSecurityGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachesecuritygroupresult"></a>
<a id="schema_CreateCacheSecurityGroupResult"></a>
<a id="tocScreatecachesecuritygroupresult"></a>
<a id="tocscreatecachesecuritygroupresult"></a>

```json
{
  "CacheSecurityGroup": {
    "OwnerId": {},
    "CacheSecurityGroupName": {},
    "Description": {},
    "EC2SecurityGroups": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroup|[CacheSecurityGroup](#schemacachesecuritygroup)|false|none|<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>|

<h2 id="tocS_CacheSecurityGroupAlreadyExistsFault">CacheSecurityGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroupalreadyexistsfault"></a>
<a id="schema_CacheSecurityGroupAlreadyExistsFault"></a>
<a id="tocScachesecuritygroupalreadyexistsfault"></a>
<a id="tocscachesecuritygroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_CacheSecurityGroupQuotaExceededFault">CacheSecurityGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroupquotaexceededfault"></a>
<a id="schema_CacheSecurityGroupQuotaExceededFault"></a>
<a id="tocScachesecuritygroupquotaexceededfault"></a>
<a id="tocscachesecuritygroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_CreateCacheSubnetGroupResult">CreateCacheSubnetGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachesubnetgroupresult"></a>
<a id="schema_CreateCacheSubnetGroupResult"></a>
<a id="tocScreatecachesubnetgroupresult"></a>
<a id="tocscreatecachesubnetgroupresult"></a>

```json
{
  "CacheSubnetGroup": {
    "CacheSubnetGroupName": {},
    "CacheSubnetGroupDescription": {},
    "VpcId": {},
    "Subnets": {},
    "ARN": {},
    "SupportedNetworkTypes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSubnetGroup|[CacheSubnetGroup](#schemacachesubnetgroup)|false|none|<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>|

<h2 id="tocS_CacheSubnetGroupAlreadyExistsFault">CacheSubnetGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetgroupalreadyexistsfault"></a>
<a id="schema_CacheSubnetGroupAlreadyExistsFault"></a>
<a id="tocScachesubnetgroupalreadyexistsfault"></a>
<a id="tocscachesubnetgroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_CacheSubnetGroupQuotaExceededFault">CacheSubnetGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetgroupquotaexceededfault"></a>
<a id="schema_CacheSubnetGroupQuotaExceededFault"></a>
<a id="tocScachesubnetgroupquotaexceededfault"></a>
<a id="tocscachesubnetgroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_CacheSubnetQuotaExceededFault">CacheSubnetQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetquotaexceededfault"></a>
<a id="schema_CacheSubnetQuotaExceededFault"></a>
<a id="tocScachesubnetquotaexceededfault"></a>
<a id="tocscachesubnetquotaexceededfault"></a>

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

<h2 id="tocS_SubnetNotAllowedFault">SubnetNotAllowedFault</h2>
<!-- backwards compatibility -->
<a id="schemasubnetnotallowedfault"></a>
<a id="schema_SubnetNotAllowedFault"></a>
<a id="tocSsubnetnotallowedfault"></a>
<a id="tocssubnetnotallowedfault"></a>

```json
null
```

<h2 id="tocS_CreateGlobalReplicationGroupResult">CreateGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobalreplicationgroupresult"></a>
<a id="schema_CreateGlobalReplicationGroupResult"></a>
<a id="tocScreateglobalreplicationgroupresult"></a>
<a id="tocscreateglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_GlobalReplicationGroupAlreadyExistsFault">GlobalReplicationGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemaglobalreplicationgroupalreadyexistsfault"></a>
<a id="schema_GlobalReplicationGroupAlreadyExistsFault"></a>
<a id="tocSglobalreplicationgroupalreadyexistsfault"></a>
<a id="tocsglobalreplicationgroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_ServiceLinkedRoleNotFoundFault">ServiceLinkedRoleNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaservicelinkedrolenotfoundfault"></a>
<a id="schema_ServiceLinkedRoleNotFoundFault"></a>
<a id="tocSservicelinkedrolenotfoundfault"></a>
<a id="tocsservicelinkedrolenotfoundfault"></a>

```json
null
```

<h2 id="tocS_CreateReplicationGroupResult">CreateReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationgroupresult"></a>
<a id="schema_CreateReplicationGroupResult"></a>
<a id="tocScreatereplicationgroupresult"></a>
<a id="tocscreatereplicationgroupresult"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_NodeGroupConfiguration">NodeGroupConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupconfiguration"></a>
<a id="schema_NodeGroupConfiguration"></a>
<a id="tocSnodegroupconfiguration"></a>
<a id="tocsnodegroupconfiguration"></a>

```json
{
  "NodeGroupId": {},
  "Slots": {},
  "ReplicaCount": {},
  "PrimaryAvailabilityZone": {},
  "ReplicaAvailabilityZones": {},
  "PrimaryOutpostArn": {},
  "ReplicaOutpostArns": {}
}
```

Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeGroupId|object|false|none|none|
|Slots|object|false|none|none|
|ReplicaCount|object|false|none|none|
|PrimaryAvailabilityZone|object|false|none|none|
|ReplicaAvailabilityZones|object|false|none|none|
|PrimaryOutpostArn|object|false|none|none|
|ReplicaOutpostArns|object|false|none|none|

<h2 id="tocS_UserGroupId">UserGroupId</h2>
<!-- backwards compatibility -->
<a id="schemausergroupid"></a>
<a id="schema_UserGroupId"></a>
<a id="tocSusergroupid"></a>
<a id="tocsusergroupid"></a>

```json
"string"
```

<h2 id="tocS_InvalidCacheClusterStateFault">InvalidCacheClusterStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcacheclusterstatefault"></a>
<a id="schema_InvalidCacheClusterStateFault"></a>
<a id="tocSinvalidcacheclusterstatefault"></a>
<a id="tocsinvalidcacheclusterstatefault"></a>

```json
null
```

<h2 id="tocS_ReplicationGroupAlreadyExistsFault">ReplicationGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupalreadyexistsfault"></a>
<a id="schema_ReplicationGroupAlreadyExistsFault"></a>
<a id="tocSreplicationgroupalreadyexistsfault"></a>
<a id="tocsreplicationgroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_InvalidUserGroupStateFault">InvalidUserGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidusergroupstatefault"></a>
<a id="schema_InvalidUserGroupStateFault"></a>
<a id="tocSinvalidusergroupstatefault"></a>
<a id="tocsinvalidusergroupstatefault"></a>

```json
null
```

<h2 id="tocS_NodeGroupsPerReplicationGroupQuotaExceededFault">NodeGroupsPerReplicationGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupsperreplicationgroupquotaexceededfault"></a>
<a id="schema_NodeGroupsPerReplicationGroupQuotaExceededFault"></a>
<a id="tocSnodegroupsperreplicationgroupquotaexceededfault"></a>
<a id="tocsnodegroupsperreplicationgroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_GlobalReplicationGroupNotFoundFault">GlobalReplicationGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaglobalreplicationgroupnotfoundfault"></a>
<a id="schema_GlobalReplicationGroupNotFoundFault"></a>
<a id="tocSglobalreplicationgroupnotfoundfault"></a>
<a id="tocsglobalreplicationgroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_InvalidGlobalReplicationGroupStateFault">InvalidGlobalReplicationGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidglobalreplicationgroupstatefault"></a>
<a id="schema_InvalidGlobalReplicationGroupStateFault"></a>
<a id="tocSinvalidglobalreplicationgroupstatefault"></a>
<a id="tocsinvalidglobalreplicationgroupstatefault"></a>

```json
null
```

<h2 id="tocS_CreateSnapshotResult">CreateSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotresult"></a>
<a id="schema_CreateSnapshotResult"></a>
<a id="tocScreatesnapshotresult"></a>
<a id="tocscreatesnapshotresult"></a>

```json
{
  "Snapshot": {
    "SnapshotName": {},
    "ReplicationGroupId": {},
    "ReplicationGroupDescription": {},
    "CacheClusterId": {},
    "SnapshotStatus": {},
    "SnapshotSource": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "TopicArn": {},
    "Port": {},
    "CacheParameterGroupName": {},
    "CacheSubnetGroupName": {},
    "VpcId": {},
    "AutoMinorVersionUpgrade": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "NumNodeGroups": {},
    "AutomaticFailover": {},
    "NodeSnapshots": {},
    "KmsKeyId": {},
    "ARN": {},
    "DataTiering": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Snapshot|[Snapshot](#schemasnapshot)|false|none|Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.|

<h2 id="tocS_SnapshotFeatureNotSupportedFault">SnapshotFeatureNotSupportedFault</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotfeaturenotsupportedfault"></a>
<a id="schema_SnapshotFeatureNotSupportedFault"></a>
<a id="tocSsnapshotfeaturenotsupportedfault"></a>
<a id="tocssnapshotfeaturenotsupportedfault"></a>

```json
null
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "UserId": {},
  "UserName": {},
  "Status": {},
  "Engine": {},
  "MinimumEngineVersion": {},
  "AccessString": {},
  "UserGroupIds": {},
  "Authentication": {
    "Type": {},
    "PasswordCount": {}
  },
  "ARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|
|UserName|object|false|none|none|
|Status|object|false|none|none|
|Engine|object|false|none|none|
|MinimumEngineVersion|object|false|none|none|
|AccessString|object|false|none|none|
|UserGroupIds|object|false|none|none|
|Authentication|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_InputAuthenticationType">InputAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemainputauthenticationtype"></a>
<a id="schema_InputAuthenticationType"></a>
<a id="tocSinputauthenticationtype"></a>
<a id="tocsinputauthenticationtype"></a>

```json
"password"
```

<h2 id="tocS_PasswordListInput">PasswordListInput</h2>
<!-- backwards compatibility -->
<a id="schemapasswordlistinput"></a>
<a id="schema_PasswordListInput"></a>
<a id="tocSpasswordlistinput"></a>
<a id="tocspasswordlistinput"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserAlreadyExistsFault">UserAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemauseralreadyexistsfault"></a>
<a id="schema_UserAlreadyExistsFault"></a>
<a id="tocSuseralreadyexistsfault"></a>
<a id="tocsuseralreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_UserQuotaExceededFault">UserQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemauserquotaexceededfault"></a>
<a id="schema_UserQuotaExceededFault"></a>
<a id="tocSuserquotaexceededfault"></a>
<a id="tocsuserquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_DuplicateUserNameFault">DuplicateUserNameFault</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateusernamefault"></a>
<a id="schema_DuplicateUserNameFault"></a>
<a id="tocSduplicateusernamefault"></a>
<a id="tocsduplicateusernamefault"></a>

```json
null
```

<h2 id="tocS_UserGroup">UserGroup</h2>
<!-- backwards compatibility -->
<a id="schemausergroup"></a>
<a id="schema_UserGroup"></a>
<a id="tocSusergroup"></a>
<a id="tocsusergroup"></a>

```json
{
  "UserGroupId": {},
  "Status": {},
  "Engine": {},
  "UserIds": {},
  "MinimumEngineVersion": {},
  "PendingChanges": {
    "UserIdsToRemove": {},
    "UserIdsToAdd": {}
  },
  "ReplicationGroups": {},
  "ARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroupId|object|false|none|none|
|Status|object|false|none|none|
|Engine|object|false|none|none|
|UserIds|object|false|none|none|
|MinimumEngineVersion|object|false|none|none|
|PendingChanges|object|false|none|none|
|ReplicationGroups|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_UserGroupAlreadyExistsFault">UserGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemausergroupalreadyexistsfault"></a>
<a id="schema_UserGroupAlreadyExistsFault"></a>
<a id="tocSusergroupalreadyexistsfault"></a>
<a id="tocsusergroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_DefaultUserRequired">DefaultUserRequired</h2>
<!-- backwards compatibility -->
<a id="schemadefaultuserrequired"></a>
<a id="schema_DefaultUserRequired"></a>
<a id="tocSdefaultuserrequired"></a>
<a id="tocsdefaultuserrequired"></a>

```json
null
```

<h2 id="tocS_UserGroupQuotaExceededFault">UserGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemausergroupquotaexceededfault"></a>
<a id="schema_UserGroupQuotaExceededFault"></a>
<a id="tocSusergroupquotaexceededfault"></a>
<a id="tocsusergroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_DecreaseNodeGroupsInGlobalReplicationGroupResult">DecreaseNodeGroupsInGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemadecreasenodegroupsinglobalreplicationgroupresult"></a>
<a id="schema_DecreaseNodeGroupsInGlobalReplicationGroupResult"></a>
<a id="tocSdecreasenodegroupsinglobalreplicationgroupresult"></a>
<a id="tocsdecreasenodegroupsinglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_DecreaseReplicaCountResult">DecreaseReplicaCountResult</h2>
<!-- backwards compatibility -->
<a id="schemadecreasereplicacountresult"></a>
<a id="schema_DecreaseReplicaCountResult"></a>
<a id="tocSdecreasereplicacountresult"></a>
<a id="tocsdecreasereplicacountresult"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_ConfigureShard">ConfigureShard</h2>
<!-- backwards compatibility -->
<a id="schemaconfigureshard"></a>
<a id="schema_ConfigureShard"></a>
<a id="tocSconfigureshard"></a>
<a id="tocsconfigureshard"></a>

```json
{
  "NodeGroupId": {},
  "NewReplicaCount": {},
  "PreferredAvailabilityZones": {},
  "PreferredOutpostArns": {}
}
```

Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeGroupId|object|true|none|none|
|NewReplicaCount|object|true|none|none|
|PreferredAvailabilityZones|object|false|none|none|
|PreferredOutpostArns|object|false|none|none|

<h2 id="tocS_NoOperationFault">NoOperationFault</h2>
<!-- backwards compatibility -->
<a id="schemanooperationfault"></a>
<a id="schema_NoOperationFault"></a>
<a id="tocSnooperationfault"></a>
<a id="tocsnooperationfault"></a>

```json
null
```

<h2 id="tocS_DeleteCacheClusterResult">DeleteCacheClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletecacheclusterresult"></a>
<a id="schema_DeleteCacheClusterResult"></a>
<a id="tocSdeletecacheclusterresult"></a>
<a id="tocsdeletecacheclusterresult"></a>

```json
{
  "CacheCluster": {
    "CacheClusterId": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "ClientDownloadLandingPage": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "CacheClusterStatus": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "NumCacheNodes": {},
      "CacheNodeIdsToRemove": {},
      "EngineVersion": {},
      "CacheNodeType": {},
      "AuthTokenStatus": {},
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {}
    },
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "CacheSecurityGroups": {},
    "CacheParameterGroup": {
      "CacheParameterGroupName": {},
      "ParameterApplyStatus": {},
      "CacheNodeIdsToReboot": {}
    },
    "CacheSubnetGroupName": {},
    "CacheNodes": {},
    "AutoMinorVersionUpgrade": {},
    "SecurityGroups": {},
    "ReplicationGroupId": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {},
    "ReplicationGroupLogDeliveryEnabled": {},
    "LogDeliveryConfigurations": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheCluster|[CacheCluster](#schemacachecluster)|false|none|Contains all of the attributes of a specific cluster.|

<h2 id="tocS_CacheSubnetGroupInUse">CacheSubnetGroupInUse</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetgroupinuse"></a>
<a id="schema_CacheSubnetGroupInUse"></a>
<a id="tocScachesubnetgroupinuse"></a>
<a id="tocscachesubnetgroupinuse"></a>

```json
null
```

<h2 id="tocS_DeleteGlobalReplicationGroupResult">DeleteGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteglobalreplicationgroupresult"></a>
<a id="schema_DeleteGlobalReplicationGroupResult"></a>
<a id="tocSdeleteglobalreplicationgroupresult"></a>
<a id="tocsdeleteglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_DeleteReplicationGroupResult">DeleteReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationgroupresult"></a>
<a id="schema_DeleteReplicationGroupResult"></a>
<a id="tocSdeletereplicationgroupresult"></a>
<a id="tocsdeletereplicationgroupresult"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_DeleteSnapshotResult">DeleteSnapshotResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotresult"></a>
<a id="schema_DeleteSnapshotResult"></a>
<a id="tocSdeletesnapshotresult"></a>
<a id="tocsdeletesnapshotresult"></a>

```json
{
  "Snapshot": {
    "SnapshotName": {},
    "ReplicationGroupId": {},
    "ReplicationGroupDescription": {},
    "CacheClusterId": {},
    "SnapshotStatus": {},
    "SnapshotSource": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "TopicArn": {},
    "Port": {},
    "CacheParameterGroupName": {},
    "CacheSubnetGroupName": {},
    "VpcId": {},
    "AutoMinorVersionUpgrade": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "NumNodeGroups": {},
    "AutomaticFailover": {},
    "NodeSnapshots": {},
    "KmsKeyId": {},
    "ARN": {},
    "DataTiering": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Snapshot|[Snapshot](#schemasnapshot)|false|none|Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.|

<h2 id="tocS_InvalidUserStateFault">InvalidUserStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvaliduserstatefault"></a>
<a id="schema_InvalidUserStateFault"></a>
<a id="tocSinvaliduserstatefault"></a>
<a id="tocsinvaliduserstatefault"></a>

```json
null
```

<h2 id="tocS_DefaultUserAssociatedToUserGroupFault">DefaultUserAssociatedToUserGroupFault</h2>
<!-- backwards compatibility -->
<a id="schemadefaultuserassociatedtousergroupfault"></a>
<a id="schema_DefaultUserAssociatedToUserGroupFault"></a>
<a id="tocSdefaultuserassociatedtousergroupfault"></a>
<a id="tocsdefaultuserassociatedtousergroupfault"></a>

```json
null
```

<h2 id="tocS_CacheClusterMessage">CacheClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemacacheclustermessage"></a>
<a id="schema_CacheClusterMessage"></a>
<a id="tocScacheclustermessage"></a>
<a id="tocscacheclustermessage"></a>

```json
{
  "Marker": {},
  "CacheClusters": {}
}
```

Represents the output of a <code>DescribeCacheClusters</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|CacheClusters|object|false|none|none|

<h2 id="tocS_CacheEngineVersionMessage">CacheEngineVersionMessage</h2>
<!-- backwards compatibility -->
<a id="schemacacheengineversionmessage"></a>
<a id="schema_CacheEngineVersionMessage"></a>
<a id="tocScacheengineversionmessage"></a>
<a id="tocscacheengineversionmessage"></a>

```json
{
  "Marker": {},
  "CacheEngineVersions": {}
}
```

Represents the output of a <a>DescribeCacheEngineVersions</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|CacheEngineVersions|object|false|none|none|

<h2 id="tocS_CacheParameterGroupsMessage">CacheParameterGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroupsmessage"></a>
<a id="schema_CacheParameterGroupsMessage"></a>
<a id="tocScacheparametergroupsmessage"></a>
<a id="tocscacheparametergroupsmessage"></a>

```json
{
  "Marker": {},
  "CacheParameterGroups": {}
}
```

Represents the output of a <code>DescribeCacheParameterGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|CacheParameterGroups|object|false|none|none|

<h2 id="tocS_CacheParameterGroupDetails">CacheParameterGroupDetails</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroupdetails"></a>
<a id="schema_CacheParameterGroupDetails"></a>
<a id="tocScacheparametergroupdetails"></a>
<a id="tocscacheparametergroupdetails"></a>

```json
{
  "Marker": {},
  "Parameters": {},
  "CacheNodeTypeSpecificParameters": {}
}
```

Represents the output of a <code>DescribeCacheParameters</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Parameters|object|false|none|none|
|CacheNodeTypeSpecificParameters|object|false|none|none|

<h2 id="tocS_CacheSecurityGroupMessage">CacheSecurityGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroupmessage"></a>
<a id="schema_CacheSecurityGroupMessage"></a>
<a id="tocScachesecuritygroupmessage"></a>
<a id="tocscachesecuritygroupmessage"></a>

```json
{
  "Marker": {},
  "CacheSecurityGroups": {}
}
```

Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|CacheSecurityGroups|object|false|none|none|

<h2 id="tocS_CacheSubnetGroupMessage">CacheSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetgroupmessage"></a>
<a id="schema_CacheSubnetGroupMessage"></a>
<a id="tocScachesubnetgroupmessage"></a>
<a id="tocscachesubnetgroupmessage"></a>

```json
{
  "Marker": {},
  "CacheSubnetGroups": {}
}
```

Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|CacheSubnetGroups|object|false|none|none|

<h2 id="tocS_DescribeEngineDefaultParametersResult">DescribeEngineDefaultParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenginedefaultparametersresult"></a>
<a id="schema_DescribeEngineDefaultParametersResult"></a>
<a id="tocSdescribeenginedefaultparametersresult"></a>
<a id="tocsdescribeenginedefaultparametersresult"></a>

```json
{
  "EngineDefaults": {
    "CacheParameterGroupFamily": {},
    "Marker": {},
    "Parameters": {},
    "CacheNodeTypeSpecificParameters": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineDefaults|[EngineDefaults](#schemaenginedefaults)|false|none|Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.|

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

Represents the output of a <code>DescribeEvents</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Events|object|false|none|none|

<h2 id="tocS_DescribeGlobalReplicationGroupsResult">DescribeGlobalReplicationGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobalreplicationgroupsresult"></a>
<a id="schema_DescribeGlobalReplicationGroupsResult"></a>
<a id="tocSdescribeglobalreplicationgroupsresult"></a>
<a id="tocsdescribeglobalreplicationgroupsresult"></a>

```json
{
  "Marker": {},
  "GlobalReplicationGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|GlobalReplicationGroups|object|false|none|none|

<h2 id="tocS_ReplicationGroupMessage">ReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupmessage"></a>
<a id="schema_ReplicationGroupMessage"></a>
<a id="tocSreplicationgroupmessage"></a>
<a id="tocsreplicationgroupmessage"></a>

```json
{
  "Marker": {},
  "ReplicationGroups": {}
}
```

Represents the output of a <code>DescribeReplicationGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReplicationGroups|object|false|none|none|

<h2 id="tocS_ReservedCacheNodeMessage">ReservedCacheNodeMessage</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodemessage"></a>
<a id="schema_ReservedCacheNodeMessage"></a>
<a id="tocSreservedcachenodemessage"></a>
<a id="tocsreservedcachenodemessage"></a>

```json
{
  "Marker": {},
  "ReservedCacheNodes": {}
}
```

Represents the output of a <code>DescribeReservedCacheNodes</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReservedCacheNodes|object|false|none|none|

<h2 id="tocS_ReservedCacheNodesOfferingMessage">ReservedCacheNodesOfferingMessage</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodesofferingmessage"></a>
<a id="schema_ReservedCacheNodesOfferingMessage"></a>
<a id="tocSreservedcachenodesofferingmessage"></a>
<a id="tocsreservedcachenodesofferingmessage"></a>

```json
{
  "Marker": {},
  "ReservedCacheNodesOfferings": {}
}
```

Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReservedCacheNodesOfferings|object|false|none|none|

<h2 id="tocS_ReservedCacheNodesOfferingNotFoundFault">ReservedCacheNodesOfferingNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodesofferingnotfoundfault"></a>
<a id="schema_ReservedCacheNodesOfferingNotFoundFault"></a>
<a id="tocSreservedcachenodesofferingnotfoundfault"></a>
<a id="tocsreservedcachenodesofferingnotfoundfault"></a>

```json
null
```

<h2 id="tocS_ServiceUpdatesMessage">ServiceUpdatesMessage</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdatesmessage"></a>
<a id="schema_ServiceUpdatesMessage"></a>
<a id="tocSserviceupdatesmessage"></a>
<a id="tocsserviceupdatesmessage"></a>

```json
{
  "Marker": {},
  "ServiceUpdates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ServiceUpdates|object|false|none|none|

<h2 id="tocS_ServiceUpdateStatus">ServiceUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdatestatus"></a>
<a id="schema_ServiceUpdateStatus"></a>
<a id="tocSserviceupdatestatus"></a>
<a id="tocsserviceupdatestatus"></a>

```json
"available"
```

<h2 id="tocS_DescribeSnapshotsListMessage">DescribeSnapshotsListMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotslistmessage"></a>
<a id="schema_DescribeSnapshotsListMessage"></a>
<a id="tocSdescribesnapshotslistmessage"></a>
<a id="tocsdescribesnapshotslistmessage"></a>

```json
{
  "Marker": {},
  "Snapshots": {}
}
```

Represents the output of a <code>DescribeSnapshots</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Snapshots|object|false|none|none|

<h2 id="tocS_UpdateActionsMessage">UpdateActionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactionsmessage"></a>
<a id="schema_UpdateActionsMessage"></a>
<a id="tocSupdateactionsmessage"></a>
<a id="tocsupdateactionsmessage"></a>

```json
{
  "Marker": {},
  "UpdateActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|UpdateActions|object|false|none|none|

<h2 id="tocS_TStamp">TStamp</h2>
<!-- backwards compatibility -->
<a id="schematstamp"></a>
<a id="schema_TStamp"></a>
<a id="tocStstamp"></a>
<a id="tocststamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UpdateActionStatus">UpdateActionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactionstatus"></a>
<a id="schema_UpdateActionStatus"></a>
<a id="tocSupdateactionstatus"></a>
<a id="tocsupdateactionstatus"></a>

```json
"not-applied"
```

<h2 id="tocS_DescribeUserGroupsResult">DescribeUserGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusergroupsresult"></a>
<a id="schema_DescribeUserGroupsResult"></a>
<a id="tocSdescribeusergroupsresult"></a>
<a id="tocsdescribeusergroupsresult"></a>

```json
{
  "UserGroups": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroups|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeUsersResult">DescribeUsersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusersresult"></a>
<a id="schema_DescribeUsersResult"></a>
<a id="tocSdescribeusersresult"></a>
<a id="tocsdescribeusersresult"></a>

```json
{
  "Users": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
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

Used to streamline results of a search based on the property being filtered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_DisassociateGlobalReplicationGroupResult">DisassociateGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateglobalreplicationgroupresult"></a>
<a id="schema_DisassociateGlobalReplicationGroupResult"></a>
<a id="tocSdisassociateglobalreplicationgroupresult"></a>
<a id="tocsdisassociateglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_FailoverGlobalReplicationGroupResult">FailoverGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemafailoverglobalreplicationgroupresult"></a>
<a id="schema_FailoverGlobalReplicationGroupResult"></a>
<a id="tocSfailoverglobalreplicationgroupresult"></a>
<a id="tocsfailoverglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_IncreaseNodeGroupsInGlobalReplicationGroupResult">IncreaseNodeGroupsInGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemaincreasenodegroupsinglobalreplicationgroupresult"></a>
<a id="schema_IncreaseNodeGroupsInGlobalReplicationGroupResult"></a>
<a id="tocSincreasenodegroupsinglobalreplicationgroupresult"></a>
<a id="tocsincreasenodegroupsinglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_RegionalConfiguration">RegionalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaregionalconfiguration"></a>
<a id="schema_RegionalConfiguration"></a>
<a id="tocSregionalconfiguration"></a>
<a id="tocsregionalconfiguration"></a>

```json
{
  "ReplicationGroupId": {},
  "ReplicationGroupRegion": {},
  "ReshardingConfiguration": {}
}
```

A list of the replication groups

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|ReplicationGroupRegion|object|true|none|none|
|ReshardingConfiguration|object|true|none|none|

<h2 id="tocS_IncreaseReplicaCountResult">IncreaseReplicaCountResult</h2>
<!-- backwards compatibility -->
<a id="schemaincreasereplicacountresult"></a>
<a id="schema_IncreaseReplicaCountResult"></a>
<a id="tocSincreasereplicacountresult"></a>
<a id="tocsincreasereplicacountresult"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_InvalidKMSKeyFault">InvalidKMSKeyFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkmskeyfault"></a>
<a id="schema_InvalidKMSKeyFault"></a>
<a id="tocSinvalidkmskeyfault"></a>
<a id="tocsinvalidkmskeyfault"></a>

```json
null
```

<h2 id="tocS_AllowedNodeTypeModificationsMessage">AllowedNodeTypeModificationsMessage</h2>
<!-- backwards compatibility -->
<a id="schemaallowednodetypemodificationsmessage"></a>
<a id="schema_AllowedNodeTypeModificationsMessage"></a>
<a id="tocSallowednodetypemodificationsmessage"></a>
<a id="tocsallowednodetypemodificationsmessage"></a>

```json
{
  "ScaleUpModifications": {},
  "ScaleDownModifications": {}
}
```

Represents the allowed node types you can use to modify your cluster or replication group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScaleUpModifications|object|false|none|none|
|ScaleDownModifications|object|false|none|none|

<h2 id="tocS_ModifyCacheClusterResult">ModifyCacheClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifycacheclusterresult"></a>
<a id="schema_ModifyCacheClusterResult"></a>
<a id="tocSmodifycacheclusterresult"></a>
<a id="tocsmodifycacheclusterresult"></a>

```json
{
  "CacheCluster": {
    "CacheClusterId": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "ClientDownloadLandingPage": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "CacheClusterStatus": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "NumCacheNodes": {},
      "CacheNodeIdsToRemove": {},
      "EngineVersion": {},
      "CacheNodeType": {},
      "AuthTokenStatus": {},
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {}
    },
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "CacheSecurityGroups": {},
    "CacheParameterGroup": {
      "CacheParameterGroupName": {},
      "ParameterApplyStatus": {},
      "CacheNodeIdsToReboot": {}
    },
    "CacheSubnetGroupName": {},
    "CacheNodes": {},
    "AutoMinorVersionUpgrade": {},
    "SecurityGroups": {},
    "ReplicationGroupId": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {},
    "ReplicationGroupLogDeliveryEnabled": {},
    "LogDeliveryConfigurations": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheCluster|[CacheCluster](#schemacachecluster)|false|none|Contains all of the attributes of a specific cluster.|

<h2 id="tocS_CacheParameterGroupNameMessage">CacheParameterGroupNameMessage</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroupnamemessage"></a>
<a id="schema_CacheParameterGroupNameMessage"></a>
<a id="tocScacheparametergroupnamemessage"></a>
<a id="tocscacheparametergroupnamemessage"></a>

```json
{
  "CacheParameterGroupName": {}
}
```

<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|false|none|none|

<h2 id="tocS_ParameterNameValue">ParameterNameValue</h2>
<!-- backwards compatibility -->
<a id="schemaparameternamevalue"></a>
<a id="schema_ParameterNameValue"></a>
<a id="tocSparameternamevalue"></a>
<a id="tocsparameternamevalue"></a>

```json
{
  "ParameterName": {},
  "ParameterValue": {}
}
```

Describes a name-value pair that is used to update the value of a parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|false|none|none|
|ParameterValue|object|false|none|none|

<h2 id="tocS_ModifyCacheSubnetGroupResult">ModifyCacheSubnetGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifycachesubnetgroupresult"></a>
<a id="schema_ModifyCacheSubnetGroupResult"></a>
<a id="tocSmodifycachesubnetgroupresult"></a>
<a id="tocsmodifycachesubnetgroupresult"></a>

```json
{
  "CacheSubnetGroup": {
    "CacheSubnetGroupName": {},
    "CacheSubnetGroupDescription": {},
    "VpcId": {},
    "Subnets": {},
    "ARN": {},
    "SupportedNetworkTypes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSubnetGroup|[CacheSubnetGroup](#schemacachesubnetgroup)|false|none|<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>|

<h2 id="tocS_SubnetInUse">SubnetInUse</h2>
<!-- backwards compatibility -->
<a id="schemasubnetinuse"></a>
<a id="schema_SubnetInUse"></a>
<a id="tocSsubnetinuse"></a>
<a id="tocssubnetinuse"></a>

```json
null
```

<h2 id="tocS_ModifyGlobalReplicationGroupResult">ModifyGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyglobalreplicationgroupresult"></a>
<a id="schema_ModifyGlobalReplicationGroupResult"></a>
<a id="tocSmodifyglobalreplicationgroupresult"></a>
<a id="tocsmodifyglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_ModifyReplicationGroupResult">ModifyReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationgroupresult"></a>
<a id="schema_ModifyReplicationGroupResult"></a>
<a id="tocSmodifyreplicationgroupresult"></a>
<a id="tocsmodifyreplicationgroupresult"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_ModifyReplicationGroupShardConfigurationResult">ModifyReplicationGroupShardConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationgroupshardconfigurationresult"></a>
<a id="schema_ModifyReplicationGroupShardConfigurationResult"></a>
<a id="tocSmodifyreplicationgroupshardconfigurationresult"></a>
<a id="tocsmodifyreplicationgroupshardconfigurationresult"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_ReshardingConfiguration">ReshardingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareshardingconfiguration"></a>
<a id="schema_ReshardingConfiguration"></a>
<a id="tocSreshardingconfiguration"></a>
<a id="tocsreshardingconfiguration"></a>

```json
{
  "NodeGroupId": {},
  "PreferredAvailabilityZones": {}
}
```

A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeGroupId|object|false|none|none|
|PreferredAvailabilityZones|object|false|none|none|

<h2 id="tocS_AllowedNodeGroupId">AllowedNodeGroupId</h2>
<!-- backwards compatibility -->
<a id="schemaallowednodegroupid"></a>
<a id="schema_AllowedNodeGroupId"></a>
<a id="tocSallowednodegroupid"></a>
<a id="tocsallowednodegroupid"></a>

```json
"stri"
```

<h2 id="tocS_PurchaseReservedCacheNodesOfferingResult">PurchaseReservedCacheNodesOfferingResult</h2>
<!-- backwards compatibility -->
<a id="schemapurchasereservedcachenodesofferingresult"></a>
<a id="schema_PurchaseReservedCacheNodesOfferingResult"></a>
<a id="tocSpurchasereservedcachenodesofferingresult"></a>
<a id="tocspurchasereservedcachenodesofferingresult"></a>

```json
{
  "ReservedCacheNode": {
    "ReservedCacheNodeId": {},
    "ReservedCacheNodesOfferingId": {},
    "CacheNodeType": {},
    "StartTime": {},
    "Duration": {},
    "FixedPrice": {},
    "UsagePrice": {},
    "CacheNodeCount": {},
    "ProductDescription": {},
    "OfferingType": {},
    "State": {},
    "RecurringCharges": {},
    "ReservationARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedCacheNode|[ReservedCacheNode](#schemareservedcachenode)|false|none|Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.|

<h2 id="tocS_ReservedCacheNodeAlreadyExistsFault">ReservedCacheNodeAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodealreadyexistsfault"></a>
<a id="schema_ReservedCacheNodeAlreadyExistsFault"></a>
<a id="tocSreservedcachenodealreadyexistsfault"></a>
<a id="tocsreservedcachenodealreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_ReservedCacheNodeQuotaExceededFault">ReservedCacheNodeQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodequotaexceededfault"></a>
<a id="schema_ReservedCacheNodeQuotaExceededFault"></a>
<a id="tocSreservedcachenodequotaexceededfault"></a>
<a id="tocsreservedcachenodequotaexceededfault"></a>

```json
null
```

<h2 id="tocS_RebalanceSlotsInGlobalReplicationGroupResult">RebalanceSlotsInGlobalReplicationGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemarebalanceslotsinglobalreplicationgroupresult"></a>
<a id="schema_RebalanceSlotsInGlobalReplicationGroupResult"></a>
<a id="tocSrebalanceslotsinglobalreplicationgroupresult"></a>
<a id="tocsrebalanceslotsinglobalreplicationgroupresult"></a>

```json
{
  "GlobalReplicationGroup": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroup|[GlobalReplicationGroup](#schemaglobalreplicationgroup)|false|none|<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>|

<h2 id="tocS_RebootCacheClusterResult">RebootCacheClusterResult</h2>
<!-- backwards compatibility -->
<a id="schemarebootcacheclusterresult"></a>
<a id="schema_RebootCacheClusterResult"></a>
<a id="tocSrebootcacheclusterresult"></a>
<a id="tocsrebootcacheclusterresult"></a>

```json
{
  "CacheCluster": {
    "CacheClusterId": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "ClientDownloadLandingPage": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "CacheClusterStatus": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "NumCacheNodes": {},
      "CacheNodeIdsToRemove": {},
      "EngineVersion": {},
      "CacheNodeType": {},
      "AuthTokenStatus": {},
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {}
    },
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "CacheSecurityGroups": {},
    "CacheParameterGroup": {
      "CacheParameterGroupName": {},
      "ParameterApplyStatus": {},
      "CacheNodeIdsToReboot": {}
    },
    "CacheSubnetGroupName": {},
    "CacheNodes": {},
    "AutoMinorVersionUpgrade": {},
    "SecurityGroups": {},
    "ReplicationGroupId": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {},
    "ReplicationGroupLogDeliveryEnabled": {},
    "LogDeliveryConfigurations": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheCluster|[CacheCluster](#schemacachecluster)|false|none|Contains all of the attributes of a specific cluster.|

<h2 id="tocS_TagNotFoundFault">TagNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schematagnotfoundfault"></a>
<a id="schema_TagNotFoundFault"></a>
<a id="tocStagnotfoundfault"></a>
<a id="tocstagnotfoundfault"></a>

```json
null
```

<h2 id="tocS_RevokeCacheSecurityGroupIngressResult">RevokeCacheSecurityGroupIngressResult</h2>
<!-- backwards compatibility -->
<a id="schemarevokecachesecuritygroupingressresult"></a>
<a id="schema_RevokeCacheSecurityGroupIngressResult"></a>
<a id="tocSrevokecachesecuritygroupingressresult"></a>
<a id="tocsrevokecachesecuritygroupingressresult"></a>

```json
{
  "CacheSecurityGroup": {
    "OwnerId": {},
    "CacheSecurityGroupName": {},
    "Description": {},
    "EC2SecurityGroups": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroup|[CacheSecurityGroup](#schemacachesecuritygroup)|false|none|<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>|

<h2 id="tocS_AuthorizationNotFoundFault">AuthorizationNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationnotfoundfault"></a>
<a id="schema_AuthorizationNotFoundFault"></a>
<a id="tocSauthorizationnotfoundfault"></a>
<a id="tocsauthorizationnotfoundfault"></a>

```json
null
```

<h2 id="tocS_StartMigrationResponse">StartMigrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmigrationresponse"></a>
<a id="schema_StartMigrationResponse"></a>
<a id="tocSstartmigrationresponse"></a>
<a id="tocsstartmigrationresponse"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_CustomerNodeEndpoint">CustomerNodeEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemacustomernodeendpoint"></a>
<a id="schema_CustomerNodeEndpoint"></a>
<a id="tocScustomernodeendpoint"></a>
<a id="tocscustomernodeendpoint"></a>

```json
{
  "Address": {},
  "Port": {}
}
```

The endpoint from which data should be migrated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|
|Port|object|false|none|none|

<h2 id="tocS_ReplicationGroupAlreadyUnderMigrationFault">ReplicationGroupAlreadyUnderMigrationFault</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupalreadyundermigrationfault"></a>
<a id="schema_ReplicationGroupAlreadyUnderMigrationFault"></a>
<a id="tocSreplicationgroupalreadyundermigrationfault"></a>
<a id="tocsreplicationgroupalreadyundermigrationfault"></a>

```json
null
```

<h2 id="tocS_TestFailoverResult">TestFailoverResult</h2>
<!-- backwards compatibility -->
<a id="schematestfailoverresult"></a>
<a id="schema_TestFailoverResult"></a>
<a id="tocStestfailoverresult"></a>
<a id="tocstestfailoverresult"></a>

```json
{
  "ReplicationGroup": {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|[ReplicationGroup](#schemareplicationgroup)|false|none|Contains all of the attributes of a specific Redis replication group.|

<h2 id="tocS_APICallRateForCustomerExceededFault">APICallRateForCustomerExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemaapicallrateforcustomerexceededfault"></a>
<a id="schema_APICallRateForCustomerExceededFault"></a>
<a id="tocSapicallrateforcustomerexceededfault"></a>
<a id="tocsapicallrateforcustomerexceededfault"></a>

```json
null
```

<h2 id="tocS_NodeGroupNotFoundFault">NodeGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupnotfoundfault"></a>
<a id="schema_NodeGroupNotFoundFault"></a>
<a id="tocSnodegroupnotfoundfault"></a>
<a id="tocsnodegroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_TestFailoverNotAvailableFault">TestFailoverNotAvailableFault</h2>
<!-- backwards compatibility -->
<a id="schematestfailovernotavailablefault"></a>
<a id="schema_TestFailoverNotAvailableFault"></a>
<a id="tocStestfailovernotavailablefault"></a>
<a id="tocstestfailovernotavailablefault"></a>

```json
null
```

<h2 id="tocS_AZMode">AZMode</h2>
<!-- backwards compatibility -->
<a id="schemaazmode"></a>
<a id="schema_AZMode"></a>
<a id="tocSazmode"></a>
<a id="tocsazmode"></a>

```json
"single-az"
```

<h2 id="tocS_AccessString">AccessString</h2>
<!-- backwards compatibility -->
<a id="schemaaccessstring"></a>
<a id="schema_AccessString"></a>
<a id="tocSaccessstring"></a>
<a id="tocsaccessstring"></a>

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

Represents the input of an AddTagsToResource operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_NodeTypeList">NodeTypeList</h2>
<!-- backwards compatibility -->
<a id="schemanodetypelist"></a>
<a id="schema_NodeTypeList"></a>
<a id="tocSnodetypelist"></a>
<a id="tocsnodetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AuthTokenUpdateStatus">AuthTokenUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenupdatestatus"></a>
<a id="schema_AuthTokenUpdateStatus"></a>
<a id="tocSauthtokenupdatestatus"></a>
<a id="tocsauthtokenupdatestatus"></a>

```json
"SETTING"
```

<h2 id="tocS_AuthTokenUpdateStrategyType">AuthTokenUpdateStrategyType</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenupdatestrategytype"></a>
<a id="schema_AuthTokenUpdateStrategyType"></a>
<a id="tocSauthtokenupdatestrategytype"></a>
<a id="tocsauthtokenupdatestrategytype"></a>

```json
"SET"
```

<h2 id="tocS_AuthenticationType">AuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtype"></a>
<a id="schema_AuthenticationType"></a>
<a id="tocSauthenticationtype"></a>
<a id="tocsauthenticationtype"></a>

```json
"password"
```

<h2 id="tocS_IntegerOptional">IntegerOptional</h2>
<!-- backwards compatibility -->
<a id="schemaintegeroptional"></a>
<a id="schema_IntegerOptional"></a>
<a id="tocSintegeroptional"></a>
<a id="tocsintegeroptional"></a>

```json
0
```

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "Type": {},
  "PasswordCount": {}
}
```

Indicates whether the user requires a password to authenticate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|PasswordCount|object|false|none|none|

<h2 id="tocS_AuthenticationMode">AuthenticationMode</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationmode"></a>
<a id="schema_AuthenticationMode"></a>
<a id="tocSauthenticationmode"></a>
<a id="tocsauthenticationmode"></a>

```json
{
  "Type": {},
  "Passwords": {}
}
```

Specifies the authentication mode to use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Passwords|object|false|none|none|

<h2 id="tocS_AuthorizeCacheSecurityGroupIngressMessage">AuthorizeCacheSecurityGroupIngressMessage</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizecachesecuritygroupingressmessage"></a>
<a id="schema_AuthorizeCacheSecurityGroupIngressMessage"></a>
<a id="tocSauthorizecachesecuritygroupingressmessage"></a>
<a id="tocsauthorizecachesecuritygroupingressmessage"></a>

```json
{
  "CacheSecurityGroupName": {},
  "EC2SecurityGroupName": {},
  "EC2SecurityGroupOwnerId": {}
}
```

Represents the input of an AuthorizeCacheSecurityGroupIngress operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|object|true|none|none|
|EC2SecurityGroupName|object|true|none|none|
|EC2SecurityGroupOwnerId|object|true|none|none|

<h2 id="tocS_CacheSecurityGroup">CacheSecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroup"></a>
<a id="schema_CacheSecurityGroup"></a>
<a id="tocScachesecuritygroup"></a>
<a id="tocscachesecuritygroup"></a>

```json
{
  "OwnerId": {},
  "CacheSecurityGroupName": {},
  "Description": {},
  "EC2SecurityGroups": {},
  "ARN": {}
}
```

<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerId|object|false|none|none|
|CacheSecurityGroupName|object|false|none|none|
|Description|object|false|none|none|
|EC2SecurityGroups|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_AutomaticFailoverStatus">AutomaticFailoverStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticfailoverstatus"></a>
<a id="schema_AutomaticFailoverStatus"></a>
<a id="tocSautomaticfailoverstatus"></a>
<a id="tocsautomaticfailoverstatus"></a>

```json
"enabled"
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

Describes an Availability Zone in which the cluster is launched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_AvailabilityZonesList">AvailabilityZonesList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzoneslist"></a>
<a id="schema_AvailabilityZonesList"></a>
<a id="tocSavailabilityzoneslist"></a>
<a id="tocsavailabilityzoneslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ReplicationGroupIdList">ReplicationGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupidlist"></a>
<a id="schema_ReplicationGroupIdList"></a>
<a id="tocSreplicationgroupidlist"></a>
<a id="tocsreplicationgroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CacheClusterIdList">CacheClusterIdList</h2>
<!-- backwards compatibility -->
<a id="schemacacheclusteridlist"></a>
<a id="schema_CacheClusterIdList"></a>
<a id="tocScacheclusteridlist"></a>
<a id="tocscacheclusteridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchApplyUpdateActionMessage">BatchApplyUpdateActionMessage</h2>
<!-- backwards compatibility -->
<a id="schemabatchapplyupdateactionmessage"></a>
<a id="schema_BatchApplyUpdateActionMessage"></a>
<a id="tocSbatchapplyupdateactionmessage"></a>
<a id="tocsbatchapplyupdateactionmessage"></a>

```json
{
  "ReplicationGroupIds": {},
  "CacheClusterIds": {},
  "ServiceUpdateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupIds|object|false|none|none|
|CacheClusterIds|object|false|none|none|
|ServiceUpdateName|object|true|none|none|

<h2 id="tocS_BatchStopUpdateActionMessage">BatchStopUpdateActionMessage</h2>
<!-- backwards compatibility -->
<a id="schemabatchstopupdateactionmessage"></a>
<a id="schema_BatchStopUpdateActionMessage"></a>
<a id="tocSbatchstopupdateactionmessage"></a>
<a id="tocsbatchstopupdateactionmessage"></a>

```json
{
  "ReplicationGroupIds": {},
  "CacheClusterIds": {},
  "ServiceUpdateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupIds|object|false|none|none|
|CacheClusterIds|object|false|none|none|
|ServiceUpdateName|object|true|none|none|

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

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "Address": {},
  "Port": {}
}
```

Represents the information required for client programs to connect to a cache node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|
|Port|object|false|none|none|

<h2 id="tocS_PendingModifiedValues">PendingModifiedValues</h2>
<!-- backwards compatibility -->
<a id="schemapendingmodifiedvalues"></a>
<a id="schema_PendingModifiedValues"></a>
<a id="tocSpendingmodifiedvalues"></a>
<a id="tocspendingmodifiedvalues"></a>

```json
{
  "NumCacheNodes": {},
  "CacheNodeIdsToRemove": {},
  "EngineVersion": {},
  "CacheNodeType": {},
  "AuthTokenStatus": {},
  "LogDeliveryConfigurations": {},
  "TransitEncryptionEnabled": {},
  "TransitEncryptionMode": {}
}
```

A group of settings that are applied to the cluster in the future, or that are currently being applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumCacheNodes|object|false|none|none|
|CacheNodeIdsToRemove|object|false|none|none|
|EngineVersion|object|false|none|none|
|CacheNodeType|object|false|none|none|
|AuthTokenStatus|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|TransitEncryptionMode|object|false|none|none|

<h2 id="tocS_NotificationConfiguration">NotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfiguration"></a>
<a id="schema_NotificationConfiguration"></a>
<a id="tocSnotificationconfiguration"></a>
<a id="tocsnotificationconfiguration"></a>

```json
{
  "TopicArn": {},
  "TopicStatus": {}
}
```

Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|
|TopicStatus|object|false|none|none|

<h2 id="tocS_CacheSecurityGroupMembershipList">CacheSecurityGroupMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroupmembershiplist"></a>
<a id="schema_CacheSecurityGroupMembershipList"></a>
<a id="tocScachesecuritygroupmembershiplist"></a>
<a id="tocscachesecuritygroupmembershiplist"></a>

```json
[
  {
    "CacheSecurityGroupName": {},
    "Status": {}
  }
]
```

<h2 id="tocS_CacheParameterGroupStatus">CacheParameterGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroupstatus"></a>
<a id="schema_CacheParameterGroupStatus"></a>
<a id="tocScacheparametergroupstatus"></a>
<a id="tocscacheparametergroupstatus"></a>

```json
{
  "CacheParameterGroupName": {},
  "ParameterApplyStatus": {},
  "CacheNodeIdsToReboot": {}
}
```

Status of the cache parameter group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|false|none|none|
|ParameterApplyStatus|object|false|none|none|
|CacheNodeIdsToReboot|object|false|none|none|

<h2 id="tocS_CacheNodeList">CacheNodeList</h2>
<!-- backwards compatibility -->
<a id="schemacachenodelist"></a>
<a id="schema_CacheNodeList"></a>
<a id="tocScachenodelist"></a>
<a id="tocscachenodelist"></a>

```json
[
  {
    "CacheNodeId": {},
    "CacheNodeStatus": {},
    "CacheNodeCreateTime": {},
    "Endpoint": {
      "Address": {},
      "Port": {}
    },
    "ParameterGroupStatus": {},
    "SourceCacheNodeId": {},
    "CustomerAvailabilityZone": {},
    "CustomerOutpostArn": {}
  }
]
```

<h2 id="tocS_SecurityGroupMembershipList">SecurityGroupMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupmembershiplist"></a>
<a id="schema_SecurityGroupMembershipList"></a>
<a id="tocSsecuritygroupmembershiplist"></a>
<a id="tocssecuritygroupmembershiplist"></a>

```json
[
  {
    "SecurityGroupId": {},
    "Status": {}
  }
]
```

<h2 id="tocS_LogDeliveryConfigurationList">LogDeliveryConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemalogdeliveryconfigurationlist"></a>
<a id="schema_LogDeliveryConfigurationList"></a>
<a id="tocSlogdeliveryconfigurationlist"></a>
<a id="tocslogdeliveryconfigurationlist"></a>

```json
[
  {
    "LogType": {},
    "DestinationType": {},
    "DestinationDetails": {
      "CloudWatchLogsDetails": {
        "LogGroup": {}
      },
      "KinesisFirehoseDetails": {
        "DeliveryStream": {}
      }
    },
    "LogFormat": {},
    "Status": {},
    "Message": {}
  }
]
```

<h2 id="tocS_NetworkType">NetworkType</h2>
<!-- backwards compatibility -->
<a id="schemanetworktype"></a>
<a id="schema_NetworkType"></a>
<a id="tocSnetworktype"></a>
<a id="tocsnetworktype"></a>

```json
"ipv4"
```

<h2 id="tocS_IpDiscovery">IpDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemaipdiscovery"></a>
<a id="schema_IpDiscovery"></a>
<a id="tocSipdiscovery"></a>
<a id="tocsipdiscovery"></a>

```json
"ipv4"
```

<h2 id="tocS_TransitEncryptionMode">TransitEncryptionMode</h2>
<!-- backwards compatibility -->
<a id="schematransitencryptionmode"></a>
<a id="schema_TransitEncryptionMode"></a>
<a id="tocStransitencryptionmode"></a>
<a id="tocstransitencryptionmode"></a>

```json
"preferred"
```

<h2 id="tocS_CacheCluster">CacheCluster</h2>
<!-- backwards compatibility -->
<a id="schemacachecluster"></a>
<a id="schema_CacheCluster"></a>
<a id="tocScachecluster"></a>
<a id="tocscachecluster"></a>

```json
{
  "CacheClusterId": {},
  "ConfigurationEndpoint": {
    "Address": {},
    "Port": {}
  },
  "ClientDownloadLandingPage": {},
  "CacheNodeType": {},
  "Engine": {},
  "EngineVersion": {},
  "CacheClusterStatus": {},
  "NumCacheNodes": {},
  "PreferredAvailabilityZone": {},
  "PreferredOutpostArn": {},
  "CacheClusterCreateTime": {},
  "PreferredMaintenanceWindow": {},
  "PendingModifiedValues": {
    "NumCacheNodes": {},
    "CacheNodeIdsToRemove": {},
    "EngineVersion": {},
    "CacheNodeType": {},
    "AuthTokenStatus": {},
    "LogDeliveryConfigurations": {},
    "TransitEncryptionEnabled": {},
    "TransitEncryptionMode": {}
  },
  "NotificationConfiguration": {
    "TopicArn": {},
    "TopicStatus": {}
  },
  "CacheSecurityGroups": {},
  "CacheParameterGroup": {
    "CacheParameterGroupName": {},
    "ParameterApplyStatus": {},
    "CacheNodeIdsToReboot": {}
  },
  "CacheSubnetGroupName": {},
  "CacheNodes": {},
  "AutoMinorVersionUpgrade": {},
  "SecurityGroups": {},
  "ReplicationGroupId": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "AuthTokenEnabled": {},
  "AuthTokenLastModifiedDate": {},
  "TransitEncryptionEnabled": {},
  "AtRestEncryptionEnabled": {},
  "ARN": {},
  "ReplicationGroupLogDeliveryEnabled": {},
  "LogDeliveryConfigurations": {},
  "NetworkType": {},
  "IpDiscovery": {},
  "TransitEncryptionMode": {}
}
```

Contains all of the attributes of a specific cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|false|none|none|
|ConfigurationEndpoint|object|false|none|none|
|ClientDownloadLandingPage|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|CacheClusterStatus|object|false|none|none|
|NumCacheNodes|object|false|none|none|
|PreferredAvailabilityZone|object|false|none|none|
|PreferredOutpostArn|object|false|none|none|
|CacheClusterCreateTime|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|PendingModifiedValues|[PendingModifiedValues](#schemapendingmodifiedvalues)|false|none|A group of settings that are applied to the cluster in the future, or that are currently being applied.|
|NotificationConfiguration|object|false|none|none|
|CacheSecurityGroups|object|false|none|none|
|CacheParameterGroup|object|false|none|none|
|CacheSubnetGroupName|object|false|none|none|
|CacheNodes|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|SecurityGroups|object|false|none|none|
|ReplicationGroupId|object|false|none|none|
|SnapshotRetentionLimit|object|false|none|none|
|SnapshotWindow|object|false|none|none|
|AuthTokenEnabled|object|false|none|none|
|AuthTokenLastModifiedDate|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|AtRestEncryptionEnabled|object|false|none|none|
|ARN|object|false|none|none|
|ReplicationGroupLogDeliveryEnabled|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|NetworkType|object|false|none|none|
|IpDiscovery|object|false|none|none|
|TransitEncryptionMode|object|false|none|none|

<h2 id="tocS_CacheClusterList">CacheClusterList</h2>
<!-- backwards compatibility -->
<a id="schemacacheclusterlist"></a>
<a id="schema_CacheClusterList"></a>
<a id="tocScacheclusterlist"></a>
<a id="tocscacheclusterlist"></a>

```json
[
  {
    "CacheClusterId": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "ClientDownloadLandingPage": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "CacheClusterStatus": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "NumCacheNodes": {},
      "CacheNodeIdsToRemove": {},
      "EngineVersion": {},
      "CacheNodeType": {},
      "AuthTokenStatus": {},
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {}
    },
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "CacheSecurityGroups": {},
    "CacheParameterGroup": {
      "CacheParameterGroupName": {},
      "ParameterApplyStatus": {},
      "CacheNodeIdsToReboot": {}
    },
    "CacheSubnetGroupName": {},
    "CacheNodes": {},
    "AutoMinorVersionUpgrade": {},
    "SecurityGroups": {},
    "ReplicationGroupId": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {},
    "ReplicationGroupLogDeliveryEnabled": {},
    "LogDeliveryConfigurations": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {}
  }
]
```

<h2 id="tocS_CacheEngineVersion">CacheEngineVersion</h2>
<!-- backwards compatibility -->
<a id="schemacacheengineversion"></a>
<a id="schema_CacheEngineVersion"></a>
<a id="tocScacheengineversion"></a>
<a id="tocscacheengineversion"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "CacheParameterGroupFamily": {},
  "CacheEngineDescription": {},
  "CacheEngineVersionDescription": {}
}
```

Provides all of the details about a particular cache engine version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|CacheParameterGroupFamily|object|false|none|none|
|CacheEngineDescription|object|false|none|none|
|CacheEngineVersionDescription|object|false|none|none|

<h2 id="tocS_CacheEngineVersionList">CacheEngineVersionList</h2>
<!-- backwards compatibility -->
<a id="schemacacheengineversionlist"></a>
<a id="schema_CacheEngineVersionList"></a>
<a id="tocScacheengineversionlist"></a>
<a id="tocscacheengineversionlist"></a>

```json
[
  {
    "Engine": {},
    "EngineVersion": {},
    "CacheParameterGroupFamily": {},
    "CacheEngineDescription": {},
    "CacheEngineVersionDescription": {}
  }
]
```

<h2 id="tocS_CacheNode">CacheNode</h2>
<!-- backwards compatibility -->
<a id="schemacachenode"></a>
<a id="schema_CacheNode"></a>
<a id="tocScachenode"></a>
<a id="tocscachenode"></a>

```json
{
  "CacheNodeId": {},
  "CacheNodeStatus": {},
  "CacheNodeCreateTime": {},
  "Endpoint": {
    "Address": {},
    "Port": {}
  },
  "ParameterGroupStatus": {},
  "SourceCacheNodeId": {},
  "CustomerAvailabilityZone": {},
  "CustomerOutpostArn": {}
}
```

<p>Represents an individual cache node within a cluster. Each cache node runs its own instance of the cluster's protocol-compliant caching software - either Memcached or Redis.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheNodeId|object|false|none|none|
|CacheNodeStatus|object|false|none|none|
|CacheNodeCreateTime|object|false|none|none|
|Endpoint|object|false|none|none|
|ParameterGroupStatus|object|false|none|none|
|SourceCacheNodeId|object|false|none|none|
|CustomerAvailabilityZone|object|false|none|none|
|CustomerOutpostArn|object|false|none|none|

<h2 id="tocS_CacheNodeIdsList">CacheNodeIdsList</h2>
<!-- backwards compatibility -->
<a id="schemacachenodeidslist"></a>
<a id="schema_CacheNodeIdsList"></a>
<a id="tocScachenodeidslist"></a>
<a id="tocscachenodeidslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CacheNodeTypeSpecificValueList">CacheNodeTypeSpecificValueList</h2>
<!-- backwards compatibility -->
<a id="schemacachenodetypespecificvaluelist"></a>
<a id="schema_CacheNodeTypeSpecificValueList"></a>
<a id="tocScachenodetypespecificvaluelist"></a>
<a id="tocscachenodetypespecificvaluelist"></a>

```json
[
  {
    "CacheNodeType": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ChangeType">ChangeType</h2>
<!-- backwards compatibility -->
<a id="schemachangetype"></a>
<a id="schema_ChangeType"></a>
<a id="tocSchangetype"></a>
<a id="tocschangetype"></a>

```json
"immediate"
```

<h2 id="tocS_CacheNodeTypeSpecificParameter">CacheNodeTypeSpecificParameter</h2>
<!-- backwards compatibility -->
<a id="schemacachenodetypespecificparameter"></a>
<a id="schema_CacheNodeTypeSpecificParameter"></a>
<a id="tocScachenodetypespecificparameter"></a>
<a id="tocscachenodetypespecificparameter"></a>

```json
{
  "ParameterName": {},
  "Description": {},
  "Source": {},
  "DataType": {},
  "AllowedValues": {},
  "IsModifiable": {},
  "MinimumEngineVersion": {},
  "CacheNodeTypeSpecificValues": {},
  "ChangeType": {}
}
```

A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|false|none|none|
|Description|object|false|none|none|
|Source|object|false|none|none|
|DataType|object|false|none|none|
|AllowedValues|object|false|none|none|
|IsModifiable|object|false|none|none|
|MinimumEngineVersion|object|false|none|none|
|CacheNodeTypeSpecificValues|object|false|none|none|
|ChangeType|object|false|none|none|

<h2 id="tocS_CacheNodeTypeSpecificParametersList">CacheNodeTypeSpecificParametersList</h2>
<!-- backwards compatibility -->
<a id="schemacachenodetypespecificparameterslist"></a>
<a id="schema_CacheNodeTypeSpecificParametersList"></a>
<a id="tocScachenodetypespecificparameterslist"></a>
<a id="tocscachenodetypespecificparameterslist"></a>

```json
[
  {
    "ParameterName": {},
    "Description": {},
    "Source": {},
    "DataType": {},
    "AllowedValues": {},
    "IsModifiable": {},
    "MinimumEngineVersion": {},
    "CacheNodeTypeSpecificValues": {},
    "ChangeType": {}
  }
]
```

<h2 id="tocS_CacheNodeTypeSpecificValue">CacheNodeTypeSpecificValue</h2>
<!-- backwards compatibility -->
<a id="schemacachenodetypespecificvalue"></a>
<a id="schema_CacheNodeTypeSpecificValue"></a>
<a id="tocScachenodetypespecificvalue"></a>
<a id="tocscachenodetypespecificvalue"></a>

```json
{
  "CacheNodeType": {},
  "Value": {}
}
```

A value that applies only to a certain cache node type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheNodeType|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_NodeUpdateStatus">NodeUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodeupdatestatus"></a>
<a id="schema_NodeUpdateStatus"></a>
<a id="tocSnodeupdatestatus"></a>
<a id="tocsnodeupdatestatus"></a>

```json
"not-applied"
```

<h2 id="tocS_NodeUpdateInitiatedBy">NodeUpdateInitiatedBy</h2>
<!-- backwards compatibility -->
<a id="schemanodeupdateinitiatedby"></a>
<a id="schema_NodeUpdateInitiatedBy"></a>
<a id="tocSnodeupdateinitiatedby"></a>
<a id="tocsnodeupdateinitiatedby"></a>

```json
"system"
```

<h2 id="tocS_CacheNodeUpdateStatus">CacheNodeUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemacachenodeupdatestatus"></a>
<a id="schema_CacheNodeUpdateStatus"></a>
<a id="tocScachenodeupdatestatus"></a>
<a id="tocscachenodeupdatestatus"></a>

```json
{
  "CacheNodeId": {},
  "NodeUpdateStatus": {},
  "NodeDeletionDate": {},
  "NodeUpdateStartDate": {},
  "NodeUpdateEndDate": {},
  "NodeUpdateInitiatedBy": {},
  "NodeUpdateInitiatedDate": {},
  "NodeUpdateStatusModifiedDate": {}
}
```

The status of the service update on the cache node

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheNodeId|object|false|none|none|
|NodeUpdateStatus|object|false|none|none|
|NodeDeletionDate|object|false|none|none|
|NodeUpdateStartDate|object|false|none|none|
|NodeUpdateEndDate|object|false|none|none|
|NodeUpdateInitiatedBy|object|false|none|none|
|NodeUpdateInitiatedDate|object|false|none|none|
|NodeUpdateStatusModifiedDate|object|false|none|none|

<h2 id="tocS_CacheNodeUpdateStatusList">CacheNodeUpdateStatusList</h2>
<!-- backwards compatibility -->
<a id="schemacachenodeupdatestatuslist"></a>
<a id="schema_CacheNodeUpdateStatusList"></a>
<a id="tocScachenodeupdatestatuslist"></a>
<a id="tocscachenodeupdatestatuslist"></a>

```json
[
  {
    "CacheNodeId": {},
    "NodeUpdateStatus": {},
    "NodeDeletionDate": {},
    "NodeUpdateStartDate": {},
    "NodeUpdateEndDate": {},
    "NodeUpdateInitiatedBy": {},
    "NodeUpdateInitiatedDate": {},
    "NodeUpdateStatusModifiedDate": {}
  }
]
```

<h2 id="tocS_CacheParameterGroup">CacheParameterGroup</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergroup"></a>
<a id="schema_CacheParameterGroup"></a>
<a id="tocScacheparametergroup"></a>
<a id="tocscacheparametergroup"></a>

```json
{
  "CacheParameterGroupName": {},
  "CacheParameterGroupFamily": {},
  "Description": {},
  "IsGlobal": {},
  "ARN": {}
}
```

Represents the output of a <code>CreateCacheParameterGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|false|none|none|
|CacheParameterGroupFamily|object|false|none|none|
|Description|object|false|none|none|
|IsGlobal|object|false|none|none|
|ARN|object|false|none|none|

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
    "DataType": {},
    "AllowedValues": {},
    "IsModifiable": {},
    "MinimumEngineVersion": {},
    "ChangeType": {}
  }
]
```

<h2 id="tocS_CacheParameterGroupList">CacheParameterGroupList</h2>
<!-- backwards compatibility -->
<a id="schemacacheparametergrouplist"></a>
<a id="schema_CacheParameterGroupList"></a>
<a id="tocScacheparametergrouplist"></a>
<a id="tocscacheparametergrouplist"></a>

```json
[
  {
    "CacheParameterGroupName": {},
    "CacheParameterGroupFamily": {},
    "Description": {},
    "IsGlobal": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_EC2SecurityGroupList">EC2SecurityGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaec2securitygrouplist"></a>
<a id="schema_EC2SecurityGroupList"></a>
<a id="tocSec2securitygrouplist"></a>
<a id="tocsec2securitygrouplist"></a>

```json
[
  {
    "Status": {},
    "EC2SecurityGroupName": {},
    "EC2SecurityGroupOwnerId": {}
  }
]
```

<h2 id="tocS_CacheSecurityGroupMembership">CacheSecurityGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroupmembership"></a>
<a id="schema_CacheSecurityGroupMembership"></a>
<a id="tocScachesecuritygroupmembership"></a>
<a id="tocscachesecuritygroupmembership"></a>

```json
{
  "CacheSecurityGroupName": {},
  "Status": {}
}
```

Represents a cluster's status within a particular cache security group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CacheSecurityGroups">CacheSecurityGroups</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroups"></a>
<a id="schema_CacheSecurityGroups"></a>
<a id="tocScachesecuritygroups"></a>
<a id="tocscachesecuritygroups"></a>

```json
[
  {
    "OwnerId": {},
    "CacheSecurityGroupName": {},
    "Description": {},
    "EC2SecurityGroups": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_CacheSecurityGroupNameList">CacheSecurityGroupNameList</h2>
<!-- backwards compatibility -->
<a id="schemacachesecuritygroupnamelist"></a>
<a id="schema_CacheSecurityGroupNameList"></a>
<a id="tocScachesecuritygroupnamelist"></a>
<a id="tocscachesecuritygroupnamelist"></a>

```json
[
  {}
]
```

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
    "SubnetOutpost": {
      "SubnetOutpostArn": {}
    },
    "SupportedNetworkTypes": {}
  }
]
```

<h2 id="tocS_NetworkTypeList">NetworkTypeList</h2>
<!-- backwards compatibility -->
<a id="schemanetworktypelist"></a>
<a id="schema_NetworkTypeList"></a>
<a id="tocSnetworktypelist"></a>
<a id="tocsnetworktypelist"></a>

```json
[
  "ipv4"
]
```

<h2 id="tocS_CacheSubnetGroup">CacheSubnetGroup</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetgroup"></a>
<a id="schema_CacheSubnetGroup"></a>
<a id="tocScachesubnetgroup"></a>
<a id="tocscachesubnetgroup"></a>

```json
{
  "CacheSubnetGroupName": {},
  "CacheSubnetGroupDescription": {},
  "VpcId": {},
  "Subnets": {},
  "ARN": {},
  "SupportedNetworkTypes": {}
}
```

<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|object|false|none|none|
|CacheSubnetGroupDescription|object|false|none|none|
|VpcId|object|false|none|none|
|Subnets|object|false|none|none|
|ARN|object|false|none|none|
|SupportedNetworkTypes|object|false|none|none|

<h2 id="tocS_CacheSubnetGroups">CacheSubnetGroups</h2>
<!-- backwards compatibility -->
<a id="schemacachesubnetgroups"></a>
<a id="schema_CacheSubnetGroups"></a>
<a id="tocScachesubnetgroups"></a>
<a id="tocscachesubnetgroups"></a>

```json
[
  {
    "CacheSubnetGroupName": {},
    "CacheSubnetGroupDescription": {},
    "VpcId": {},
    "Subnets": {},
    "ARN": {},
    "SupportedNetworkTypes": {}
  }
]
```

<h2 id="tocS_CloudWatchLogsDestinationDetails">CloudWatchLogsDestinationDetails</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsdestinationdetails"></a>
<a id="schema_CloudWatchLogsDestinationDetails"></a>
<a id="tocScloudwatchlogsdestinationdetails"></a>
<a id="tocscloudwatchlogsdestinationdetails"></a>

```json
{
  "LogGroup": {}
}
```

The configuration details of the CloudWatch Logs destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogGroup|object|false|none|none|

<h2 id="tocS_ClusterIdList">ClusterIdList</h2>
<!-- backwards compatibility -->
<a id="schemaclusteridlist"></a>
<a id="schema_ClusterIdList"></a>
<a id="tocSclusteridlist"></a>
<a id="tocsclusteridlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ClusterMode">ClusterMode</h2>
<!-- backwards compatibility -->
<a id="schemaclustermode"></a>
<a id="schema_ClusterMode"></a>
<a id="tocSclustermode"></a>
<a id="tocsclustermode"></a>

```json
"enabled"
```

<h2 id="tocS_CompleteMigrationMessage">CompleteMigrationMessage</h2>
<!-- backwards compatibility -->
<a id="schemacompletemigrationmessage"></a>
<a id="schema_CompleteMigrationMessage"></a>
<a id="tocScompletemigrationmessage"></a>
<a id="tocscompletemigrationmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "Force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|Force|object|false|none|none|

<h2 id="tocS_ReplicationGroup">ReplicationGroup</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroup"></a>
<a id="schema_ReplicationGroup"></a>
<a id="tocSreplicationgroup"></a>
<a id="tocsreplicationgroup"></a>

```json
{
  "ReplicationGroupId": {},
  "Description": {},
  "GlobalReplicationGroupInfo": {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupMemberRole": {}
  },
  "Status": {},
  "PendingModifiedValues": {
    "PrimaryClusterId": {},
    "AutomaticFailoverStatus": {},
    "Resharding": {
      "SlotMigration": {
        "ProgressPercentage": {}
      }
    },
    "AuthTokenStatus": {},
    "UserGroups": {
      "UserGroupIdsToAdd": {},
      "UserGroupIdsToRemove": {}
    },
    "LogDeliveryConfigurations": {},
    "TransitEncryptionEnabled": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  },
  "MemberClusters": {},
  "NodeGroups": {},
  "SnapshottingClusterId": {},
  "AutomaticFailover": {},
  "MultiAZ": {},
  "ConfigurationEndpoint": {
    "Address": {},
    "Port": {}
  },
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "ClusterEnabled": {},
  "CacheNodeType": {},
  "AuthTokenEnabled": {},
  "AuthTokenLastModifiedDate": {},
  "TransitEncryptionEnabled": {},
  "AtRestEncryptionEnabled": {},
  "MemberClustersOutpostArns": {},
  "KmsKeyId": {},
  "ARN": {},
  "UserGroupIds": {},
  "LogDeliveryConfigurations": {},
  "ReplicationGroupCreateTime": {},
  "DataTiering": {},
  "AutoMinorVersionUpgrade": {},
  "NetworkType": {},
  "IpDiscovery": {},
  "TransitEncryptionMode": {},
  "ClusterMode": {}
}
```

Contains all of the attributes of a specific Redis replication group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|Description|object|false|none|none|
|GlobalReplicationGroupInfo|object|false|none|none|
|Status|object|false|none|none|
|PendingModifiedValues|object|false|none|none|
|MemberClusters|object|false|none|none|
|NodeGroups|object|false|none|none|
|SnapshottingClusterId|object|false|none|none|
|AutomaticFailover|object|false|none|none|
|MultiAZ|object|false|none|none|
|ConfigurationEndpoint|object|false|none|none|
|SnapshotRetentionLimit|object|false|none|none|
|SnapshotWindow|object|false|none|none|
|ClusterEnabled|object|false|none|none|
|CacheNodeType|object|false|none|none|
|AuthTokenEnabled|object|false|none|none|
|AuthTokenLastModifiedDate|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|AtRestEncryptionEnabled|object|false|none|none|
|MemberClustersOutpostArns|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ARN|object|false|none|none|
|UserGroupIds|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|ReplicationGroupCreateTime|object|false|none|none|
|DataTiering|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|NetworkType|object|false|none|none|
|IpDiscovery|object|false|none|none|
|TransitEncryptionMode|object|false|none|none|
|ClusterMode|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_PreferredAvailabilityZoneList">PreferredAvailabilityZoneList</h2>
<!-- backwards compatibility -->
<a id="schemapreferredavailabilityzonelist"></a>
<a id="schema_PreferredAvailabilityZoneList"></a>
<a id="tocSpreferredavailabilityzonelist"></a>
<a id="tocspreferredavailabilityzonelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_PreferredOutpostArnList">PreferredOutpostArnList</h2>
<!-- backwards compatibility -->
<a id="schemapreferredoutpostarnlist"></a>
<a id="schema_PreferredOutpostArnList"></a>
<a id="tocSpreferredoutpostarnlist"></a>
<a id="tocspreferredoutpostarnlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CopySnapshotMessage">CopySnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemacopysnapshotmessage"></a>
<a id="schema_CopySnapshotMessage"></a>
<a id="tocScopysnapshotmessage"></a>
<a id="tocscopysnapshotmessage"></a>

```json
{
  "SourceSnapshotName": {},
  "TargetSnapshotName": {},
  "TargetBucket": {},
  "KmsKeyId": {},
  "Tags": {}
}
```

Represents the input of a <code>CopySnapshotMessage</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceSnapshotName|object|true|none|none|
|TargetSnapshotName|object|true|none|none|
|TargetBucket|object|false|none|none|
|KmsKeyId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "SnapshotName": {},
  "ReplicationGroupId": {},
  "ReplicationGroupDescription": {},
  "CacheClusterId": {},
  "SnapshotStatus": {},
  "SnapshotSource": {},
  "CacheNodeType": {},
  "Engine": {},
  "EngineVersion": {},
  "NumCacheNodes": {},
  "PreferredAvailabilityZone": {},
  "PreferredOutpostArn": {},
  "CacheClusterCreateTime": {},
  "PreferredMaintenanceWindow": {},
  "TopicArn": {},
  "Port": {},
  "CacheParameterGroupName": {},
  "CacheSubnetGroupName": {},
  "VpcId": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "NumNodeGroups": {},
  "AutomaticFailover": {},
  "NodeSnapshots": {},
  "KmsKeyId": {},
  "ARN": {},
  "DataTiering": {}
}
```

Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotName|object|false|none|none|
|ReplicationGroupId|object|false|none|none|
|ReplicationGroupDescription|object|false|none|none|
|CacheClusterId|object|false|none|none|
|SnapshotStatus|object|false|none|none|
|SnapshotSource|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|NumCacheNodes|object|false|none|none|
|PreferredAvailabilityZone|object|false|none|none|
|PreferredOutpostArn|object|false|none|none|
|CacheClusterCreateTime|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|TopicArn|object|false|none|none|
|Port|object|false|none|none|
|CacheParameterGroupName|object|false|none|none|
|CacheSubnetGroupName|object|false|none|none|
|VpcId|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|SnapshotRetentionLimit|object|false|none|none|
|SnapshotWindow|object|false|none|none|
|NumNodeGroups|object|false|none|none|
|AutomaticFailover|object|false|none|none|
|NodeSnapshots|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ARN|object|false|none|none|
|DataTiering|object|false|none|none|

<h2 id="tocS_SecurityGroupIdsList">SecurityGroupIdsList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidslist"></a>
<a id="schema_SecurityGroupIdsList"></a>
<a id="tocSsecuritygroupidslist"></a>
<a id="tocssecuritygroupidslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_SnapshotArnsList">SnapshotArnsList</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotarnslist"></a>
<a id="schema_SnapshotArnsList"></a>
<a id="tocSsnapshotarnslist"></a>
<a id="tocssnapshotarnslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_OutpostMode">OutpostMode</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostmode"></a>
<a id="schema_OutpostMode"></a>
<a id="tocSoutpostmode"></a>
<a id="tocsoutpostmode"></a>

```json
"single-outpost"
```

<h2 id="tocS_LogDeliveryConfigurationRequestList">LogDeliveryConfigurationRequestList</h2>
<!-- backwards compatibility -->
<a id="schemalogdeliveryconfigurationrequestlist"></a>
<a id="schema_LogDeliveryConfigurationRequestList"></a>
<a id="tocSlogdeliveryconfigurationrequestlist"></a>
<a id="tocslogdeliveryconfigurationrequestlist"></a>

```json
[
  {
    "LogType": {},
    "DestinationType": {},
    "DestinationDetails": {
      "CloudWatchLogsDetails": {
        "LogGroup": {}
      },
      "KinesisFirehoseDetails": {
        "DeliveryStream": {}
      }
    },
    "LogFormat": {},
    "Enabled": {}
  }
]
```

<h2 id="tocS_CreateCacheClusterMessage">CreateCacheClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatecacheclustermessage"></a>
<a id="schema_CreateCacheClusterMessage"></a>
<a id="tocScreatecacheclustermessage"></a>
<a id="tocscreatecacheclustermessage"></a>

```json
{
  "CacheClusterId": {},
  "ReplicationGroupId": {},
  "AZMode": {},
  "PreferredAvailabilityZone": {},
  "PreferredAvailabilityZones": {},
  "NumCacheNodes": {},
  "CacheNodeType": {},
  "Engine": {},
  "EngineVersion": {},
  "CacheParameterGroupName": {},
  "CacheSubnetGroupName": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "SnapshotArns": {},
  "SnapshotName": {},
  "PreferredMaintenanceWindow": {},
  "Port": {},
  "NotificationTopicArn": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "AuthToken": {},
  "OutpostMode": {},
  "PreferredOutpostArn": {},
  "PreferredOutpostArns": {},
  "LogDeliveryConfigurations": {},
  "TransitEncryptionEnabled": {},
  "NetworkType": {},
  "IpDiscovery": {}
}
```

Represents the input of a CreateCacheCluster operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|true|none|none|
|ReplicationGroupId|object|false|none|none|
|AZMode|object|false|none|none|
|PreferredAvailabilityZone|object|false|none|none|
|PreferredAvailabilityZones|object|false|none|none|
|NumCacheNodes|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|CacheParameterGroupName|object|false|none|none|
|CacheSubnetGroupName|object|false|none|none|
|CacheSecurityGroupNames|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|SnapshotArns|object|false|none|none|
|SnapshotName|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|Port|object|false|none|none|
|NotificationTopicArn|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|SnapshotRetentionLimit|object|false|none|none|
|SnapshotWindow|object|false|none|none|
|AuthToken|object|false|none|none|
|OutpostMode|object|false|none|none|
|PreferredOutpostArn|object|false|none|none|
|PreferredOutpostArns|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|NetworkType|object|false|none|none|
|IpDiscovery|object|false|none|none|

<h2 id="tocS_CreateCacheParameterGroupMessage">CreateCacheParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatecacheparametergroupmessage"></a>
<a id="schema_CreateCacheParameterGroupMessage"></a>
<a id="tocScreatecacheparametergroupmessage"></a>
<a id="tocscreatecacheparametergroupmessage"></a>

```json
{
  "CacheParameterGroupName": {},
  "CacheParameterGroupFamily": {},
  "Description": {},
  "Tags": {}
}
```

Represents the input of a <code>CreateCacheParameterGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|true|none|none|
|CacheParameterGroupFamily|object|true|none|none|
|Description|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateCacheSecurityGroupMessage">CreateCacheSecurityGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachesecuritygroupmessage"></a>
<a id="schema_CreateCacheSecurityGroupMessage"></a>
<a id="tocScreatecachesecuritygroupmessage"></a>
<a id="tocscreatecachesecuritygroupmessage"></a>

```json
{
  "CacheSecurityGroupName": {},
  "Description": {},
  "Tags": {}
}
```

Represents the input of a <code>CreateCacheSecurityGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|object|true|none|none|
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

<h2 id="tocS_CreateCacheSubnetGroupMessage">CreateCacheSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachesubnetgroupmessage"></a>
<a id="schema_CreateCacheSubnetGroupMessage"></a>
<a id="tocScreatecachesubnetgroupmessage"></a>
<a id="tocscreatecachesubnetgroupmessage"></a>

```json
{
  "CacheSubnetGroupName": {},
  "CacheSubnetGroupDescription": {},
  "SubnetIds": {},
  "Tags": {}
}
```

Represents the input of a <code>CreateCacheSubnetGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|object|true|none|none|
|CacheSubnetGroupDescription|object|true|none|none|
|SubnetIds|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateGlobalReplicationGroupMessage">CreateGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobalreplicationgroupmessage"></a>
<a id="schema_CreateGlobalReplicationGroupMessage"></a>
<a id="tocScreateglobalreplicationgroupmessage"></a>
<a id="tocscreateglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupIdSuffix": {},
  "GlobalReplicationGroupDescription": {},
  "PrimaryReplicationGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupIdSuffix|object|true|none|none|
|GlobalReplicationGroupDescription|object|false|none|none|
|PrimaryReplicationGroupId|object|true|none|none|

<h2 id="tocS_GlobalReplicationGroup">GlobalReplicationGroup</h2>
<!-- backwards compatibility -->
<a id="schemaglobalreplicationgroup"></a>
<a id="schema_GlobalReplicationGroup"></a>
<a id="tocSglobalreplicationgroup"></a>
<a id="tocsglobalreplicationgroup"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "GlobalReplicationGroupDescription": {},
  "Status": {},
  "CacheNodeType": {},
  "Engine": {},
  "EngineVersion": {},
  "Members": {},
  "ClusterEnabled": {},
  "GlobalNodeGroups": {},
  "AuthTokenEnabled": {},
  "TransitEncryptionEnabled": {},
  "AtRestEncryptionEnabled": {},
  "ARN": {}
}
```

<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|false|none|none|
|GlobalReplicationGroupDescription|object|false|none|none|
|Status|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|Members|object|false|none|none|
|ClusterEnabled|object|false|none|none|
|GlobalNodeGroups|object|false|none|none|
|AuthTokenEnabled|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|AtRestEncryptionEnabled|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_NodeGroupConfigurationList">NodeGroupConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupconfigurationlist"></a>
<a id="schema_NodeGroupConfigurationList"></a>
<a id="tocSnodegroupconfigurationlist"></a>
<a id="tocsnodegroupconfigurationlist"></a>

```json
[
  {
    "NodeGroupId": {},
    "Slots": {},
    "ReplicaCount": {},
    "PrimaryAvailabilityZone": {},
    "ReplicaAvailabilityZones": {},
    "PrimaryOutpostArn": {},
    "ReplicaOutpostArns": {}
  }
]
```

<h2 id="tocS_UserGroupIdListInput">UserGroupIdListInput</h2>
<!-- backwards compatibility -->
<a id="schemausergroupidlistinput"></a>
<a id="schema_UserGroupIdListInput"></a>
<a id="tocSusergroupidlistinput"></a>
<a id="tocsusergroupidlistinput"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateReplicationGroupMessage">CreateReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationgroupmessage"></a>
<a id="schema_CreateReplicationGroupMessage"></a>
<a id="tocScreatereplicationgroupmessage"></a>
<a id="tocscreatereplicationgroupmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "ReplicationGroupDescription": {},
  "GlobalReplicationGroupId": {},
  "PrimaryClusterId": {},
  "AutomaticFailoverEnabled": {},
  "MultiAZEnabled": {},
  "NumCacheClusters": {},
  "PreferredCacheClusterAZs": {},
  "NumNodeGroups": {},
  "ReplicasPerNodeGroup": {},
  "NodeGroupConfiguration": {},
  "CacheNodeType": {},
  "Engine": {},
  "EngineVersion": {},
  "CacheParameterGroupName": {},
  "CacheSubnetGroupName": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "Tags": {},
  "SnapshotArns": {},
  "SnapshotName": {},
  "PreferredMaintenanceWindow": {},
  "Port": {},
  "NotificationTopicArn": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "AuthToken": {},
  "TransitEncryptionEnabled": {},
  "AtRestEncryptionEnabled": {},
  "KmsKeyId": {},
  "UserGroupIds": {},
  "LogDeliveryConfigurations": {},
  "DataTieringEnabled": {},
  "NetworkType": {},
  "IpDiscovery": {},
  "TransitEncryptionMode": {},
  "ClusterMode": {}
}
```

Represents the input of a <code>CreateReplicationGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|ReplicationGroupDescription|object|true|none|none|
|GlobalReplicationGroupId|object|false|none|none|
|PrimaryClusterId|object|false|none|none|
|AutomaticFailoverEnabled|object|false|none|none|
|MultiAZEnabled|object|false|none|none|
|NumCacheClusters|object|false|none|none|
|PreferredCacheClusterAZs|object|false|none|none|
|NumNodeGroups|object|false|none|none|
|ReplicasPerNodeGroup|object|false|none|none|
|NodeGroupConfiguration|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|CacheParameterGroupName|object|false|none|none|
|CacheSubnetGroupName|object|false|none|none|
|CacheSecurityGroupNames|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|Tags|object|false|none|none|
|SnapshotArns|object|false|none|none|
|SnapshotName|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|Port|object|false|none|none|
|NotificationTopicArn|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|SnapshotRetentionLimit|object|false|none|none|
|SnapshotWindow|object|false|none|none|
|AuthToken|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|AtRestEncryptionEnabled|object|false|none|none|
|KmsKeyId|object|false|none|none|
|UserGroupIds|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|DataTieringEnabled|object|false|none|none|
|NetworkType|object|false|none|none|
|IpDiscovery|object|false|none|none|
|TransitEncryptionMode|object|false|none|none|
|ClusterMode|object|false|none|none|

<h2 id="tocS_CreateSnapshotMessage">CreateSnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshotmessage"></a>
<a id="schema_CreateSnapshotMessage"></a>
<a id="tocScreatesnapshotmessage"></a>
<a id="tocscreatesnapshotmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "CacheClusterId": {},
  "SnapshotName": {},
  "KmsKeyId": {},
  "Tags": {}
}
```

Represents the input of a <code>CreateSnapshot</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|CacheClusterId|object|false|none|none|
|SnapshotName|object|true|none|none|
|KmsKeyId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_EngineType">EngineType</h2>
<!-- backwards compatibility -->
<a id="schemaenginetype"></a>
<a id="schema_EngineType"></a>
<a id="tocSenginetype"></a>
<a id="tocsenginetype"></a>

```json
"string"
```

<h2 id="tocS_UserIdListInput">UserIdListInput</h2>
<!-- backwards compatibility -->
<a id="schemauseridlistinput"></a>
<a id="schema_UserIdListInput"></a>
<a id="tocSuseridlistinput"></a>
<a id="tocsuseridlistinput"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateUserGroupMessage">CreateUserGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateusergroupmessage"></a>
<a id="schema_CreateUserGroupMessage"></a>
<a id="tocScreateusergroupmessage"></a>
<a id="tocscreateusergroupmessage"></a>

```json
{
  "UserGroupId": {},
  "Engine": {},
  "UserIds": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroupId|object|true|none|none|
|Engine|object|true|none|none|
|UserIds|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UserName">UserName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_UserName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
```

<h2 id="tocS_CreateUserMessage">CreateUserMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateusermessage"></a>
<a id="schema_CreateUserMessage"></a>
<a id="tocScreateusermessage"></a>
<a id="tocscreateusermessage"></a>

```json
{
  "UserId": {},
  "UserName": {},
  "Engine": {},
  "Passwords": {},
  "AccessString": {},
  "NoPasswordRequired": {},
  "Tags": {},
  "AuthenticationMode": {
    "Type": {},
    "Passwords": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|UserName|object|true|none|none|
|Engine|object|true|none|none|
|Passwords|object|false|none|none|
|AccessString|object|true|none|none|
|NoPasswordRequired|object|false|none|none|
|Tags|object|false|none|none|
|AuthenticationMode|object|false|none|none|

<h2 id="tocS_CustomerNodeEndpointList">CustomerNodeEndpointList</h2>
<!-- backwards compatibility -->
<a id="schemacustomernodeendpointlist"></a>
<a id="schema_CustomerNodeEndpointList"></a>
<a id="tocScustomernodeendpointlist"></a>
<a id="tocscustomernodeendpointlist"></a>

```json
[
  {
    "Address": {},
    "Port": {}
  }
]
```

<h2 id="tocS_DataTieringStatus">DataTieringStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatatieringstatus"></a>
<a id="schema_DataTieringStatus"></a>
<a id="tocSdatatieringstatus"></a>
<a id="tocsdatatieringstatus"></a>

```json
"enabled"
```

<h2 id="tocS_GlobalNodeGroupIdList">GlobalNodeGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnodegroupidlist"></a>
<a id="schema_GlobalNodeGroupIdList"></a>
<a id="tocSglobalnodegroupidlist"></a>
<a id="tocsglobalnodegroupidlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_DecreaseNodeGroupsInGlobalReplicationGroupMessage">DecreaseNodeGroupsInGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadecreasenodegroupsinglobalreplicationgroupmessage"></a>
<a id="schema_DecreaseNodeGroupsInGlobalReplicationGroupMessage"></a>
<a id="tocSdecreasenodegroupsinglobalreplicationgroupmessage"></a>
<a id="tocsdecreasenodegroupsinglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "NodeGroupCount": {},
  "GlobalNodeGroupsToRemove": {},
  "GlobalNodeGroupsToRetain": {},
  "ApplyImmediately": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|true|none|none|
|NodeGroupCount|object|true|none|none|
|GlobalNodeGroupsToRemove|object|false|none|none|
|GlobalNodeGroupsToRetain|object|false|none|none|
|ApplyImmediately|object|true|none|none|

<h2 id="tocS_ReplicaConfigurationList">ReplicaConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaconfigurationlist"></a>
<a id="schema_ReplicaConfigurationList"></a>
<a id="tocSreplicaconfigurationlist"></a>
<a id="tocsreplicaconfigurationlist"></a>

```json
[
  {
    "NodeGroupId": {},
    "NewReplicaCount": {},
    "PreferredAvailabilityZones": {},
    "PreferredOutpostArns": {}
  }
]
```

<h2 id="tocS_RemoveReplicasList">RemoveReplicasList</h2>
<!-- backwards compatibility -->
<a id="schemaremovereplicaslist"></a>
<a id="schema_RemoveReplicasList"></a>
<a id="tocSremovereplicaslist"></a>
<a id="tocsremovereplicaslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DecreaseReplicaCountMessage">DecreaseReplicaCountMessage</h2>
<!-- backwards compatibility -->
<a id="schemadecreasereplicacountmessage"></a>
<a id="schema_DecreaseReplicaCountMessage"></a>
<a id="tocSdecreasereplicacountmessage"></a>
<a id="tocsdecreasereplicacountmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "NewReplicaCount": {},
  "ReplicaConfiguration": {},
  "ReplicasToRemove": {},
  "ApplyImmediately": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|NewReplicaCount|object|false|none|none|
|ReplicaConfiguration|object|false|none|none|
|ReplicasToRemove|object|false|none|none|
|ApplyImmediately|object|true|none|none|

<h2 id="tocS_DeleteCacheClusterMessage">DeleteCacheClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletecacheclustermessage"></a>
<a id="schema_DeleteCacheClusterMessage"></a>
<a id="tocSdeletecacheclustermessage"></a>
<a id="tocsdeletecacheclustermessage"></a>

```json
{
  "CacheClusterId": {},
  "FinalSnapshotIdentifier": {}
}
```

Represents the input of a <code>DeleteCacheCluster</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|true|none|none|
|FinalSnapshotIdentifier|object|false|none|none|

<h2 id="tocS_DeleteCacheParameterGroupMessage">DeleteCacheParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletecacheparametergroupmessage"></a>
<a id="schema_DeleteCacheParameterGroupMessage"></a>
<a id="tocSdeletecacheparametergroupmessage"></a>
<a id="tocsdeletecacheparametergroupmessage"></a>

```json
{
  "CacheParameterGroupName": {}
}
```

Represents the input of a <code>DeleteCacheParameterGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|true|none|none|

<h2 id="tocS_DeleteCacheSecurityGroupMessage">DeleteCacheSecurityGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletecachesecuritygroupmessage"></a>
<a id="schema_DeleteCacheSecurityGroupMessage"></a>
<a id="tocSdeletecachesecuritygroupmessage"></a>
<a id="tocsdeletecachesecuritygroupmessage"></a>

```json
{
  "CacheSecurityGroupName": {}
}
```

Represents the input of a <code>DeleteCacheSecurityGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|object|true|none|none|

<h2 id="tocS_DeleteCacheSubnetGroupMessage">DeleteCacheSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletecachesubnetgroupmessage"></a>
<a id="schema_DeleteCacheSubnetGroupMessage"></a>
<a id="tocSdeletecachesubnetgroupmessage"></a>
<a id="tocsdeletecachesubnetgroupmessage"></a>

```json
{
  "CacheSubnetGroupName": {}
}
```

Represents the input of a <code>DeleteCacheSubnetGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|object|true|none|none|

<h2 id="tocS_DeleteGlobalReplicationGroupMessage">DeleteGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteglobalreplicationgroupmessage"></a>
<a id="schema_DeleteGlobalReplicationGroupMessage"></a>
<a id="tocSdeleteglobalreplicationgroupmessage"></a>
<a id="tocsdeleteglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "RetainPrimaryReplicationGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|true|none|none|
|RetainPrimaryReplicationGroup|object|true|none|none|

<h2 id="tocS_DeleteReplicationGroupMessage">DeleteReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationgroupmessage"></a>
<a id="schema_DeleteReplicationGroupMessage"></a>
<a id="tocSdeletereplicationgroupmessage"></a>
<a id="tocsdeletereplicationgroupmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "RetainPrimaryCluster": {},
  "FinalSnapshotIdentifier": {}
}
```

Represents the input of a <code>DeleteReplicationGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|RetainPrimaryCluster|object|false|none|none|
|FinalSnapshotIdentifier|object|false|none|none|

<h2 id="tocS_DeleteSnapshotMessage">DeleteSnapshotMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotmessage"></a>
<a id="schema_DeleteSnapshotMessage"></a>
<a id="tocSdeletesnapshotmessage"></a>
<a id="tocsdeletesnapshotmessage"></a>

```json
{
  "SnapshotName": {}
}
```

Represents the input of a <code>DeleteSnapshot</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotName|object|true|none|none|

<h2 id="tocS_DeleteUserGroupMessage">DeleteUserGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusergroupmessage"></a>
<a id="schema_DeleteUserGroupMessage"></a>
<a id="tocSdeleteusergroupmessage"></a>
<a id="tocsdeleteusergroupmessage"></a>

```json
{
  "UserGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroupId|object|true|none|none|

<h2 id="tocS_DeleteUserMessage">DeleteUserMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusermessage"></a>
<a id="schema_DeleteUserMessage"></a>
<a id="tocSdeleteusermessage"></a>
<a id="tocsdeleteusermessage"></a>

```json
{
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|

<h2 id="tocS_DescribeCacheClustersMessage">DescribeCacheClustersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecacheclustersmessage"></a>
<a id="schema_DescribeCacheClustersMessage"></a>
<a id="tocSdescribecacheclustersmessage"></a>
<a id="tocsdescribecacheclustersmessage"></a>

```json
{
  "CacheClusterId": {},
  "MaxRecords": {},
  "Marker": {},
  "ShowCacheNodeInfo": {},
  "ShowCacheClustersNotInReplicationGroups": {}
}
```

Represents the input of a <code>DescribeCacheClusters</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|
|ShowCacheNodeInfo|object|false|none|none|
|ShowCacheClustersNotInReplicationGroups|object|false|none|none|

<h2 id="tocS_DescribeCacheEngineVersionsMessage">DescribeCacheEngineVersionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecacheengineversionsmessage"></a>
<a id="schema_DescribeCacheEngineVersionsMessage"></a>
<a id="tocSdescribecacheengineversionsmessage"></a>
<a id="tocsdescribecacheengineversionsmessage"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "CacheParameterGroupFamily": {},
  "MaxRecords": {},
  "Marker": {},
  "DefaultOnly": {}
}
```

Represents the input of a <code>DescribeCacheEngineVersions</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|CacheParameterGroupFamily|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|
|DefaultOnly|object|false|none|none|

<h2 id="tocS_DescribeCacheParameterGroupsMessage">DescribeCacheParameterGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecacheparametergroupsmessage"></a>
<a id="schema_DescribeCacheParameterGroupsMessage"></a>
<a id="tocSdescribecacheparametergroupsmessage"></a>
<a id="tocsdescribecacheparametergroupsmessage"></a>

```json
{
  "CacheParameterGroupName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeCacheParameterGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeCacheParametersMessage">DescribeCacheParametersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecacheparametersmessage"></a>
<a id="schema_DescribeCacheParametersMessage"></a>
<a id="tocSdescribecacheparametersmessage"></a>
<a id="tocsdescribecacheparametersmessage"></a>

```json
{
  "CacheParameterGroupName": {},
  "Source": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeCacheParameters</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|true|none|none|
|Source|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeCacheSecurityGroupsMessage">DescribeCacheSecurityGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecachesecuritygroupsmessage"></a>
<a id="schema_DescribeCacheSecurityGroupsMessage"></a>
<a id="tocSdescribecachesecuritygroupsmessage"></a>
<a id="tocsdescribecachesecuritygroupsmessage"></a>

```json
{
  "CacheSecurityGroupName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeCacheSubnetGroupsMessage">DescribeCacheSubnetGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecachesubnetgroupsmessage"></a>
<a id="schema_DescribeCacheSubnetGroupsMessage"></a>
<a id="tocSdescribecachesubnetgroupsmessage"></a>
<a id="tocsdescribecachesubnetgroupsmessage"></a>

```json
{
  "CacheSubnetGroupName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeEngineDefaultParametersMessage">DescribeEngineDefaultParametersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeenginedefaultparametersmessage"></a>
<a id="schema_DescribeEngineDefaultParametersMessage"></a>
<a id="tocSdescribeenginedefaultparametersmessage"></a>
<a id="tocsdescribeenginedefaultparametersmessage"></a>

```json
{
  "CacheParameterGroupFamily": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeEngineDefaultParameters</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupFamily|object|true|none|none|
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
  "CacheParameterGroupFamily": {},
  "Marker": {},
  "Parameters": {},
  "CacheNodeTypeSpecificParameters": {}
}
```

Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupFamily|object|false|none|none|
|Marker|object|false|none|none|
|Parameters|object|false|none|none|
|CacheNodeTypeSpecificParameters|object|false|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"cache-cluster"
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
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeEvents</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIdentifier|object|false|none|none|
|SourceType|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Duration|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeGlobalReplicationGroupsMessage">DescribeGlobalReplicationGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobalreplicationgroupsmessage"></a>
<a id="schema_DescribeGlobalReplicationGroupsMessage"></a>
<a id="tocSdescribeglobalreplicationgroupsmessage"></a>
<a id="tocsdescribeglobalreplicationgroupsmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "MaxRecords": {},
  "Marker": {},
  "ShowMemberInfo": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|
|ShowMemberInfo|object|false|none|none|

<h2 id="tocS_GlobalReplicationGroupList">GlobalReplicationGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalreplicationgrouplist"></a>
<a id="schema_GlobalReplicationGroupList"></a>
<a id="tocSglobalreplicationgrouplist"></a>
<a id="tocsglobalreplicationgrouplist"></a>

```json
[
  {
    "GlobalReplicationGroupId": {},
    "GlobalReplicationGroupDescription": {},
    "Status": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "Members": {},
    "ClusterEnabled": {},
    "GlobalNodeGroups": {},
    "AuthTokenEnabled": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_DescribeReplicationGroupsMessage">DescribeReplicationGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationgroupsmessage"></a>
<a id="schema_DescribeReplicationGroupsMessage"></a>
<a id="tocSdescribereplicationgroupsmessage"></a>
<a id="tocsdescribereplicationgroupsmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeReplicationGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReservedCacheNodesMessage">DescribeReservedCacheNodesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservedcachenodesmessage"></a>
<a id="schema_DescribeReservedCacheNodesMessage"></a>
<a id="tocSdescribereservedcachenodesmessage"></a>
<a id="tocsdescribereservedcachenodesmessage"></a>

```json
{
  "ReservedCacheNodeId": {},
  "ReservedCacheNodesOfferingId": {},
  "CacheNodeType": {},
  "Duration": {},
  "ProductDescription": {},
  "OfferingType": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeReservedCacheNodes</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedCacheNodeId|object|false|none|none|
|ReservedCacheNodesOfferingId|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Duration|object|false|none|none|
|ProductDescription|object|false|none|none|
|OfferingType|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReservedCacheNodesOfferingsMessage">DescribeReservedCacheNodesOfferingsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservedcachenodesofferingsmessage"></a>
<a id="schema_DescribeReservedCacheNodesOfferingsMessage"></a>
<a id="tocSdescribereservedcachenodesofferingsmessage"></a>
<a id="tocsdescribereservedcachenodesofferingsmessage"></a>

```json
{
  "ReservedCacheNodesOfferingId": {},
  "CacheNodeType": {},
  "Duration": {},
  "ProductDescription": {},
  "OfferingType": {},
  "MaxRecords": {},
  "Marker": {}
}
```

Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedCacheNodesOfferingId|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Duration|object|false|none|none|
|ProductDescription|object|false|none|none|
|OfferingType|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ServiceUpdateStatusList">ServiceUpdateStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdatestatuslist"></a>
<a id="schema_ServiceUpdateStatusList"></a>
<a id="tocSserviceupdatestatuslist"></a>
<a id="tocsserviceupdatestatuslist"></a>

```json
[
  "available"
]
```

<h2 id="tocS_DescribeServiceUpdatesMessage">DescribeServiceUpdatesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceupdatesmessage"></a>
<a id="schema_DescribeServiceUpdatesMessage"></a>
<a id="tocSdescribeserviceupdatesmessage"></a>
<a id="tocsdescribeserviceupdatesmessage"></a>

```json
{
  "ServiceUpdateName": {},
  "ServiceUpdateStatus": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceUpdateName|object|false|none|none|
|ServiceUpdateStatus|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_SnapshotList">SnapshotList</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotlist"></a>
<a id="schema_SnapshotList"></a>
<a id="tocSsnapshotlist"></a>
<a id="tocssnapshotlist"></a>

```json
[
  {
    "SnapshotName": {},
    "ReplicationGroupId": {},
    "ReplicationGroupDescription": {},
    "CacheClusterId": {},
    "SnapshotStatus": {},
    "SnapshotSource": {},
    "CacheNodeType": {},
    "Engine": {},
    "EngineVersion": {},
    "NumCacheNodes": {},
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CacheClusterCreateTime": {},
    "PreferredMaintenanceWindow": {},
    "TopicArn": {},
    "Port": {},
    "CacheParameterGroupName": {},
    "CacheSubnetGroupName": {},
    "VpcId": {},
    "AutoMinorVersionUpgrade": {},
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "NumNodeGroups": {},
    "AutomaticFailover": {},
    "NodeSnapshots": {},
    "KmsKeyId": {},
    "ARN": {},
    "DataTiering": {}
  }
]
```

<h2 id="tocS_DescribeSnapshotsMessage">DescribeSnapshotsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnapshotsmessage"></a>
<a id="schema_DescribeSnapshotsMessage"></a>
<a id="tocSdescribesnapshotsmessage"></a>
<a id="tocsdescribesnapshotsmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "CacheClusterId": {},
  "SnapshotName": {},
  "SnapshotSource": {},
  "Marker": {},
  "MaxRecords": {},
  "ShowNodeGroupConfig": {}
}
```

Represents the input of a <code>DescribeSnapshotsMessage</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|CacheClusterId|object|false|none|none|
|SnapshotName|object|false|none|none|
|SnapshotSource|object|false|none|none|
|Marker|object|false|none|none|
|MaxRecords|object|false|none|none|
|ShowNodeGroupConfig|object|false|none|none|

<h2 id="tocS_TimeRangeFilter">TimeRangeFilter</h2>
<!-- backwards compatibility -->
<a id="schematimerangefilter"></a>
<a id="schema_TimeRangeFilter"></a>
<a id="tocStimerangefilter"></a>
<a id="tocstimerangefilter"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

Filters update actions from the service updates that are in available status during the time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_UpdateActionStatusList">UpdateActionStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactionstatuslist"></a>
<a id="schema_UpdateActionStatusList"></a>
<a id="tocSupdateactionstatuslist"></a>
<a id="tocsupdateactionstatuslist"></a>

```json
[
  "not-applied"
]
```

<h2 id="tocS_DescribeUpdateActionsMessage">DescribeUpdateActionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeupdateactionsmessage"></a>
<a id="schema_DescribeUpdateActionsMessage"></a>
<a id="tocSdescribeupdateactionsmessage"></a>
<a id="tocsdescribeupdateactionsmessage"></a>

```json
{
  "ServiceUpdateName": {},
  "ReplicationGroupIds": {},
  "CacheClusterIds": {},
  "Engine": {},
  "ServiceUpdateStatus": {},
  "ServiceUpdateTimeRange": {
    "StartTime": {},
    "EndTime": {}
  },
  "UpdateActionStatus": {},
  "ShowNodeLevelUpdateStatus": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceUpdateName|object|false|none|none|
|ReplicationGroupIds|object|false|none|none|
|CacheClusterIds|object|false|none|none|
|Engine|object|false|none|none|
|ServiceUpdateStatus|object|false|none|none|
|ServiceUpdateTimeRange|object|false|none|none|
|UpdateActionStatus|object|false|none|none|
|ShowNodeLevelUpdateStatus|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeUserGroupsMessage">DescribeUserGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusergroupsmessage"></a>
<a id="schema_DescribeUserGroupsMessage"></a>
<a id="tocSdescribeusergroupsmessage"></a>
<a id="tocsdescribeusergroupsmessage"></a>

```json
{
  "UserGroupId": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroupId|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_UserGroupList">UserGroupList</h2>
<!-- backwards compatibility -->
<a id="schemausergrouplist"></a>
<a id="schema_UserGroupList"></a>
<a id="tocSusergrouplist"></a>
<a id="tocsusergrouplist"></a>

```json
[
  {
    "UserGroupId": {},
    "Status": {},
    "Engine": {},
    "UserIds": {},
    "MinimumEngineVersion": {},
    "PendingChanges": {
      "UserIdsToRemove": {},
      "UserIdsToAdd": {}
    },
    "ReplicationGroups": {},
    "ARN": {}
  }
]
```

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

<h2 id="tocS_DescribeUsersMessage">DescribeUsersMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusersmessage"></a>
<a id="schema_DescribeUsersMessage"></a>
<a id="tocSdescribeusersmessage"></a>
<a id="tocsdescribeusersmessage"></a>

```json
{
  "Engine": {},
  "UserId": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|UserId|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
[
  {
    "UserId": {},
    "UserName": {},
    "Status": {},
    "Engine": {},
    "MinimumEngineVersion": {},
    "AccessString": {},
    "UserGroupIds": {},
    "Authentication": {
      "Type": {},
      "PasswordCount": {}
    },
    "ARN": {}
  }
]
```

<h2 id="tocS_KinesisFirehoseDestinationDetails">KinesisFirehoseDestinationDetails</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehosedestinationdetails"></a>
<a id="schema_KinesisFirehoseDestinationDetails"></a>
<a id="tocSkinesisfirehosedestinationdetails"></a>
<a id="tocskinesisfirehosedestinationdetails"></a>

```json
{
  "DeliveryStream": {}
}
```

The configuration details of the Kinesis Data Firehose destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStream|object|false|none|none|

<h2 id="tocS_DestinationDetails">DestinationDetails</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdetails"></a>
<a id="schema_DestinationDetails"></a>
<a id="tocSdestinationdetails"></a>
<a id="tocsdestinationdetails"></a>

```json
{
  "CloudWatchLogsDetails": {
    "LogGroup": {}
  },
  "KinesisFirehoseDetails": {
    "DeliveryStream": {}
  }
}
```

Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLogsDetails|object|false|none|none|
|KinesisFirehoseDetails|object|false|none|none|

<h2 id="tocS_DestinationType">DestinationType</h2>
<!-- backwards compatibility -->
<a id="schemadestinationtype"></a>
<a id="schema_DestinationType"></a>
<a id="tocSdestinationtype"></a>
<a id="tocsdestinationtype"></a>

```json
"cloudwatch-logs"
```

<h2 id="tocS_DisassociateGlobalReplicationGroupMessage">DisassociateGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateglobalreplicationgroupmessage"></a>
<a id="schema_DisassociateGlobalReplicationGroupMessage"></a>
<a id="tocSdisassociateglobalreplicationgroupmessage"></a>
<a id="tocsdisassociateglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "ReplicationGroupId": {},
  "ReplicationGroupRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|true|none|none|
|ReplicationGroupId|object|true|none|none|
|ReplicationGroupRegion|object|true|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_EC2SecurityGroup">EC2SecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemaec2securitygroup"></a>
<a id="schema_EC2SecurityGroup"></a>
<a id="tocSec2securitygroup"></a>
<a id="tocsec2securitygroup"></a>

```json
{
  "Status": {},
  "EC2SecurityGroupName": {},
  "EC2SecurityGroupOwnerId": {}
}
```

Provides ownership and status information for an Amazon EC2 security group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|EC2SecurityGroupName|object|false|none|none|
|EC2SecurityGroupOwnerId|object|false|none|none|

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
  "Date": {}
}
```

Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIdentifier|object|false|none|none|
|SourceType|object|false|none|none|
|Message|object|false|none|none|
|Date|object|false|none|none|

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
    "Date": {}
  }
]
```

<h2 id="tocS_FailoverGlobalReplicationGroupMessage">FailoverGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemafailoverglobalreplicationgroupmessage"></a>
<a id="schema_FailoverGlobalReplicationGroupMessage"></a>
<a id="tocSfailoverglobalreplicationgroupmessage"></a>
<a id="tocsfailoverglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "PrimaryRegion": {},
  "PrimaryReplicationGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|true|none|none|
|PrimaryRegion|object|true|none|none|
|PrimaryReplicationGroupId|object|true|none|none|

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_FilterValueList">FilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluelist"></a>
<a id="schema_FilterValueList"></a>
<a id="tocSfiltervaluelist"></a>
<a id="tocsfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_GlobalNodeGroup">GlobalNodeGroup</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnodegroup"></a>
<a id="schema_GlobalNodeGroup"></a>
<a id="tocSglobalnodegroup"></a>
<a id="tocsglobalnodegroup"></a>

```json
{
  "GlobalNodeGroupId": {},
  "Slots": {}
}
```

Indicates the slot configuration and global identifier for a slice group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNodeGroupId|object|false|none|none|
|Slots|object|false|none|none|

<h2 id="tocS_GlobalNodeGroupList">GlobalNodeGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnodegrouplist"></a>
<a id="schema_GlobalNodeGroupList"></a>
<a id="tocSglobalnodegrouplist"></a>
<a id="tocsglobalnodegrouplist"></a>

```json
[
  {
    "GlobalNodeGroupId": {},
    "Slots": {}
  }
]
```

<h2 id="tocS_GlobalReplicationGroupMemberList">GlobalReplicationGroupMemberList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalreplicationgroupmemberlist"></a>
<a id="schema_GlobalReplicationGroupMemberList"></a>
<a id="tocSglobalreplicationgroupmemberlist"></a>
<a id="tocsglobalreplicationgroupmemberlist"></a>

```json
[
  {
    "ReplicationGroupId": {},
    "ReplicationGroupRegion": {},
    "Role": {},
    "AutomaticFailover": {},
    "Status": {}
  }
]
```

<h2 id="tocS_GlobalReplicationGroupInfo">GlobalReplicationGroupInfo</h2>
<!-- backwards compatibility -->
<a id="schemaglobalreplicationgroupinfo"></a>
<a id="schema_GlobalReplicationGroupInfo"></a>
<a id="tocSglobalreplicationgroupinfo"></a>
<a id="tocsglobalreplicationgroupinfo"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "GlobalReplicationGroupMemberRole": {}
}
```

The name of the Global datastore and role of this replication group in the Global datastore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|false|none|none|
|GlobalReplicationGroupMemberRole|object|false|none|none|

<h2 id="tocS_GlobalReplicationGroupMember">GlobalReplicationGroupMember</h2>
<!-- backwards compatibility -->
<a id="schemaglobalreplicationgroupmember"></a>
<a id="schema_GlobalReplicationGroupMember"></a>
<a id="tocSglobalreplicationgroupmember"></a>
<a id="tocsglobalreplicationgroupmember"></a>

```json
{
  "ReplicationGroupId": {},
  "ReplicationGroupRegion": {},
  "Role": {},
  "AutomaticFailover": {},
  "Status": {}
}
```

A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|ReplicationGroupRegion|object|false|none|none|
|Role|object|false|none|none|
|AutomaticFailover|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_RegionalConfigurationList">RegionalConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaregionalconfigurationlist"></a>
<a id="schema_RegionalConfigurationList"></a>
<a id="tocSregionalconfigurationlist"></a>
<a id="tocsregionalconfigurationlist"></a>

```json
[
  {
    "ReplicationGroupId": {},
    "ReplicationGroupRegion": {},
    "ReshardingConfiguration": {}
  }
]
```

<h2 id="tocS_IncreaseNodeGroupsInGlobalReplicationGroupMessage">IncreaseNodeGroupsInGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemaincreasenodegroupsinglobalreplicationgroupmessage"></a>
<a id="schema_IncreaseNodeGroupsInGlobalReplicationGroupMessage"></a>
<a id="tocSincreasenodegroupsinglobalreplicationgroupmessage"></a>
<a id="tocsincreasenodegroupsinglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "NodeGroupCount": {},
  "RegionalConfigurations": {},
  "ApplyImmediately": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|true|none|none|
|NodeGroupCount|object|true|none|none|
|RegionalConfigurations|object|false|none|none|
|ApplyImmediately|object|true|none|none|

<h2 id="tocS_IncreaseReplicaCountMessage">IncreaseReplicaCountMessage</h2>
<!-- backwards compatibility -->
<a id="schemaincreasereplicacountmessage"></a>
<a id="schema_IncreaseReplicaCountMessage"></a>
<a id="tocSincreasereplicacountmessage"></a>
<a id="tocsincreasereplicacountmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "NewReplicaCount": {},
  "ReplicaConfiguration": {},
  "ApplyImmediately": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|NewReplicaCount|object|false|none|none|
|ReplicaConfiguration|object|false|none|none|
|ApplyImmediately|object|true|none|none|

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

<h2 id="tocS_ListAllowedNodeTypeModificationsMessage">ListAllowedNodeTypeModificationsMessage</h2>
<!-- backwards compatibility -->
<a id="schemalistallowednodetypemodificationsmessage"></a>
<a id="schema_ListAllowedNodeTypeModificationsMessage"></a>
<a id="tocSlistallowednodetypemodificationsmessage"></a>
<a id="tocslistallowednodetypemodificationsmessage"></a>

```json
{
  "CacheClusterId": {},
  "ReplicationGroupId": {}
}
```

The input parameters for the <code>ListAllowedNodeTypeModifications</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|false|none|none|
|ReplicationGroupId|object|false|none|none|

<h2 id="tocS_ListTagsForResourceMessage">ListTagsForResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcemessage"></a>
<a id="schema_ListTagsForResourceMessage"></a>
<a id="tocSlisttagsforresourcemessage"></a>
<a id="tocslisttagsforresourcemessage"></a>

```json
{
  "ResourceName": {}
}
```

The input parameters for the <code>ListTagsForResource</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"slow-log"
```

<h2 id="tocS_LogFormat">LogFormat</h2>
<!-- backwards compatibility -->
<a id="schemalogformat"></a>
<a id="schema_LogFormat"></a>
<a id="tocSlogformat"></a>
<a id="tocslogformat"></a>

```json
"text"
```

<h2 id="tocS_LogDeliveryConfigurationStatus">LogDeliveryConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemalogdeliveryconfigurationstatus"></a>
<a id="schema_LogDeliveryConfigurationStatus"></a>
<a id="tocSlogdeliveryconfigurationstatus"></a>
<a id="tocslogdeliveryconfigurationstatus"></a>

```json
"active"
```

<h2 id="tocS_LogDeliveryConfiguration">LogDeliveryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalogdeliveryconfiguration"></a>
<a id="schema_LogDeliveryConfiguration"></a>
<a id="tocSlogdeliveryconfiguration"></a>
<a id="tocslogdeliveryconfiguration"></a>

```json
{
  "LogType": {},
  "DestinationType": {},
  "DestinationDetails": {
    "CloudWatchLogsDetails": {
      "LogGroup": {}
    },
    "KinesisFirehoseDetails": {
      "DeliveryStream": {}
    }
  },
  "LogFormat": {},
  "Status": {},
  "Message": {}
}
```

Returns the destination, format and type of the logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogType|object|false|none|none|
|DestinationType|object|false|none|none|
|DestinationDetails|object|false|none|none|
|LogFormat|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_ModifyCacheClusterMessage">ModifyCacheClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifycacheclustermessage"></a>
<a id="schema_ModifyCacheClusterMessage"></a>
<a id="tocSmodifycacheclustermessage"></a>
<a id="tocsmodifycacheclustermessage"></a>

```json
{
  "CacheClusterId": {},
  "NumCacheNodes": {},
  "CacheNodeIdsToRemove": {},
  "AZMode": {},
  "NewAvailabilityZones": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "CacheParameterGroupName": {},
  "NotificationTopicStatus": {},
  "ApplyImmediately": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "CacheNodeType": {},
  "AuthToken": {},
  "AuthTokenUpdateStrategy": {},
  "LogDeliveryConfigurations": {},
  "IpDiscovery": {}
}
```

Represents the input of a <code>ModifyCacheCluster</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|true|none|none|
|NumCacheNodes|object|false|none|none|
|CacheNodeIdsToRemove|object|false|none|none|
|AZMode|object|false|none|none|
|NewAvailabilityZones|object|false|none|none|
|CacheSecurityGroupNames|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|NotificationTopicArn|object|false|none|none|
|CacheParameterGroupName|object|false|none|none|
|NotificationTopicStatus|object|false|none|none|
|ApplyImmediately|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|SnapshotRetentionLimit|object|false|none|none|
|SnapshotWindow|object|false|none|none|
|CacheNodeType|object|false|none|none|
|AuthToken|object|false|none|none|
|AuthTokenUpdateStrategy|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|IpDiscovery|object|false|none|none|

<h2 id="tocS_ParameterNameValueList">ParameterNameValueList</h2>
<!-- backwards compatibility -->
<a id="schemaparameternamevaluelist"></a>
<a id="schema_ParameterNameValueList"></a>
<a id="tocSparameternamevaluelist"></a>
<a id="tocsparameternamevaluelist"></a>

```json
[
  {
    "ParameterName": {},
    "ParameterValue": {}
  }
]
```

<h2 id="tocS_ModifyCacheParameterGroupMessage">ModifyCacheParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifycacheparametergroupmessage"></a>
<a id="schema_ModifyCacheParameterGroupMessage"></a>
<a id="tocSmodifycacheparametergroupmessage"></a>
<a id="tocsmodifycacheparametergroupmessage"></a>

```json
{
  "CacheParameterGroupName": {},
  "ParameterNameValues": {}
}
```

Represents the input of a <code>ModifyCacheParameterGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|true|none|none|
|ParameterNameValues|object|true|none|none|

<h2 id="tocS_ModifyCacheSubnetGroupMessage">ModifyCacheSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifycachesubnetgroupmessage"></a>
<a id="schema_ModifyCacheSubnetGroupMessage"></a>
<a id="tocSmodifycachesubnetgroupmessage"></a>
<a id="tocsmodifycachesubnetgroupmessage"></a>

```json
{
  "CacheSubnetGroupName": {},
  "CacheSubnetGroupDescription": {},
  "SubnetIds": {}
}
```

Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSubnetGroupName|object|true|none|none|
|CacheSubnetGroupDescription|object|false|none|none|
|SubnetIds|object|false|none|none|

<h2 id="tocS_ModifyGlobalReplicationGroupMessage">ModifyGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyglobalreplicationgroupmessage"></a>
<a id="schema_ModifyGlobalReplicationGroupMessage"></a>
<a id="tocSmodifyglobalreplicationgroupmessage"></a>
<a id="tocsmodifyglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "ApplyImmediately": {},
  "CacheNodeType": {},
  "EngineVersion": {},
  "CacheParameterGroupName": {},
  "GlobalReplicationGroupDescription": {},
  "AutomaticFailoverEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|true|none|none|
|ApplyImmediately|object|true|none|none|
|CacheNodeType|object|false|none|none|
|EngineVersion|object|false|none|none|
|CacheParameterGroupName|object|false|none|none|
|GlobalReplicationGroupDescription|object|false|none|none|
|AutomaticFailoverEnabled|object|false|none|none|

<h2 id="tocS_UserGroupIdList">UserGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemausergroupidlist"></a>
<a id="schema_UserGroupIdList"></a>
<a id="tocSusergroupidlist"></a>
<a id="tocsusergroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ModifyReplicationGroupMessage">ModifyReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationgroupmessage"></a>
<a id="schema_ModifyReplicationGroupMessage"></a>
<a id="tocSmodifyreplicationgroupmessage"></a>
<a id="tocsmodifyreplicationgroupmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "ReplicationGroupDescription": {},
  "PrimaryClusterId": {},
  "SnapshottingClusterId": {},
  "AutomaticFailoverEnabled": {},
  "MultiAZEnabled": {},
  "NodeGroupId": {},
  "CacheSecurityGroupNames": {},
  "SecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "CacheParameterGroupName": {},
  "NotificationTopicStatus": {},
  "ApplyImmediately": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "SnapshotRetentionLimit": {},
  "SnapshotWindow": {},
  "CacheNodeType": {},
  "AuthToken": {},
  "AuthTokenUpdateStrategy": {},
  "UserGroupIdsToAdd": {},
  "UserGroupIdsToRemove": {},
  "RemoveUserGroups": {},
  "LogDeliveryConfigurations": {},
  "IpDiscovery": {},
  "TransitEncryptionEnabled": {},
  "TransitEncryptionMode": {},
  "ClusterMode": {}
}
```

Represents the input of a <code>ModifyReplicationGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|ReplicationGroupDescription|object|false|none|none|
|PrimaryClusterId|object|false|none|none|
|SnapshottingClusterId|object|false|none|none|
|AutomaticFailoverEnabled|object|false|none|none|
|MultiAZEnabled|object|false|none|none|
|NodeGroupId|object|false|none|none|
|CacheSecurityGroupNames|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|NotificationTopicArn|object|false|none|none|
|CacheParameterGroupName|object|false|none|none|
|NotificationTopicStatus|object|false|none|none|
|ApplyImmediately|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|SnapshotRetentionLimit|object|false|none|none|
|SnapshotWindow|object|false|none|none|
|CacheNodeType|object|false|none|none|
|AuthToken|object|false|none|none|
|AuthTokenUpdateStrategy|object|false|none|none|
|UserGroupIdsToAdd|object|false|none|none|
|UserGroupIdsToRemove|object|false|none|none|
|RemoveUserGroups|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|IpDiscovery|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|TransitEncryptionMode|object|false|none|none|
|ClusterMode|object|false|none|none|

<h2 id="tocS_ReshardingConfigurationList">ReshardingConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemareshardingconfigurationlist"></a>
<a id="schema_ReshardingConfigurationList"></a>
<a id="tocSreshardingconfigurationlist"></a>
<a id="tocsreshardingconfigurationlist"></a>

```json
[
  {
    "NodeGroupId": {},
    "PreferredAvailabilityZones": {}
  }
]
```

<h2 id="tocS_NodeGroupsToRemoveList">NodeGroupsToRemoveList</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupstoremovelist"></a>
<a id="schema_NodeGroupsToRemoveList"></a>
<a id="tocSnodegroupstoremovelist"></a>
<a id="tocsnodegroupstoremovelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_NodeGroupsToRetainList">NodeGroupsToRetainList</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupstoretainlist"></a>
<a id="schema_NodeGroupsToRetainList"></a>
<a id="tocSnodegroupstoretainlist"></a>
<a id="tocsnodegroupstoretainlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ModifyReplicationGroupShardConfigurationMessage">ModifyReplicationGroupShardConfigurationMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationgroupshardconfigurationmessage"></a>
<a id="schema_ModifyReplicationGroupShardConfigurationMessage"></a>
<a id="tocSmodifyreplicationgroupshardconfigurationmessage"></a>
<a id="tocsmodifyreplicationgroupshardconfigurationmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "NodeGroupCount": {},
  "ApplyImmediately": {},
  "ReshardingConfiguration": {},
  "NodeGroupsToRemove": {},
  "NodeGroupsToRetain": {}
}
```

Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|NodeGroupCount|object|true|none|none|
|ApplyImmediately|object|true|none|none|
|ReshardingConfiguration|object|false|none|none|
|NodeGroupsToRemove|object|false|none|none|
|NodeGroupsToRetain|object|false|none|none|

<h2 id="tocS_ModifyUserGroupMessage">ModifyUserGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyusergroupmessage"></a>
<a id="schema_ModifyUserGroupMessage"></a>
<a id="tocSmodifyusergroupmessage"></a>
<a id="tocsmodifyusergroupmessage"></a>

```json
{
  "UserGroupId": {},
  "UserIdsToAdd": {},
  "UserIdsToRemove": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroupId|object|true|none|none|
|UserIdsToAdd|object|false|none|none|
|UserIdsToRemove|object|false|none|none|

<h2 id="tocS_ModifyUserMessage">ModifyUserMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyusermessage"></a>
<a id="schema_ModifyUserMessage"></a>
<a id="tocSmodifyusermessage"></a>
<a id="tocsmodifyusermessage"></a>

```json
{
  "UserId": {},
  "AccessString": {},
  "AppendAccessString": {},
  "Passwords": {},
  "NoPasswordRequired": {},
  "AuthenticationMode": {
    "Type": {},
    "Passwords": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|AccessString|object|false|none|none|
|AppendAccessString|object|false|none|none|
|Passwords|object|false|none|none|
|NoPasswordRequired|object|false|none|none|
|AuthenticationMode|object|false|none|none|

<h2 id="tocS_MultiAZStatus">MultiAZStatus</h2>
<!-- backwards compatibility -->
<a id="schemamultiazstatus"></a>
<a id="schema_MultiAZStatus"></a>
<a id="tocSmultiazstatus"></a>
<a id="tocsmultiazstatus"></a>

```json
"enabled"
```

<h2 id="tocS_NodeGroupMemberList">NodeGroupMemberList</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupmemberlist"></a>
<a id="schema_NodeGroupMemberList"></a>
<a id="tocSnodegroupmemberlist"></a>
<a id="tocsnodegroupmemberlist"></a>

```json
[
  {
    "CacheClusterId": {},
    "CacheNodeId": {},
    "ReadEndpoint": {
      "Address": {},
      "Port": {}
    },
    "PreferredAvailabilityZone": {},
    "PreferredOutpostArn": {},
    "CurrentRole": {}
  }
]
```

<h2 id="tocS_NodeGroup">NodeGroup</h2>
<!-- backwards compatibility -->
<a id="schemanodegroup"></a>
<a id="schema_NodeGroup"></a>
<a id="tocSnodegroup"></a>
<a id="tocsnodegroup"></a>

```json
{
  "NodeGroupId": {},
  "Status": {},
  "PrimaryEndpoint": {
    "Address": {},
    "Port": {}
  },
  "ReaderEndpoint": {
    "Address": {},
    "Port": {}
  },
  "Slots": {},
  "NodeGroupMembers": {}
}
```

Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeGroupId|object|false|none|none|
|Status|object|false|none|none|
|PrimaryEndpoint|object|false|none|none|
|ReaderEndpoint|object|false|none|none|
|Slots|object|false|none|none|
|NodeGroupMembers|object|false|none|none|

<h2 id="tocS_OutpostArnsList">OutpostArnsList</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostarnslist"></a>
<a id="schema_OutpostArnsList"></a>
<a id="tocSoutpostarnslist"></a>
<a id="tocsoutpostarnslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_NodeGroupList">NodeGroupList</h2>
<!-- backwards compatibility -->
<a id="schemanodegrouplist"></a>
<a id="schema_NodeGroupList"></a>
<a id="tocSnodegrouplist"></a>
<a id="tocsnodegrouplist"></a>

```json
[
  {
    "NodeGroupId": {},
    "Status": {},
    "PrimaryEndpoint": {
      "Address": {},
      "Port": {}
    },
    "ReaderEndpoint": {
      "Address": {},
      "Port": {}
    },
    "Slots": {},
    "NodeGroupMembers": {}
  }
]
```

<h2 id="tocS_NodeGroupMember">NodeGroupMember</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupmember"></a>
<a id="schema_NodeGroupMember"></a>
<a id="tocSnodegroupmember"></a>
<a id="tocsnodegroupmember"></a>

```json
{
  "CacheClusterId": {},
  "CacheNodeId": {},
  "ReadEndpoint": {
    "Address": {},
    "Port": {}
  },
  "PreferredAvailabilityZone": {},
  "PreferredOutpostArn": {},
  "CurrentRole": {}
}
```

Represents a single node within a node group (shard).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|false|none|none|
|CacheNodeId|object|false|none|none|
|ReadEndpoint|object|false|none|none|
|PreferredAvailabilityZone|object|false|none|none|
|PreferredOutpostArn|object|false|none|none|
|CurrentRole|object|false|none|none|

<h2 id="tocS_NodeGroupMemberUpdateStatus">NodeGroupMemberUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupmemberupdatestatus"></a>
<a id="schema_NodeGroupMemberUpdateStatus"></a>
<a id="tocSnodegroupmemberupdatestatus"></a>
<a id="tocsnodegroupmemberupdatestatus"></a>

```json
{
  "CacheClusterId": {},
  "CacheNodeId": {},
  "NodeUpdateStatus": {},
  "NodeDeletionDate": {},
  "NodeUpdateStartDate": {},
  "NodeUpdateEndDate": {},
  "NodeUpdateInitiatedBy": {},
  "NodeUpdateInitiatedDate": {},
  "NodeUpdateStatusModifiedDate": {}
}
```

The status of the service update on the node group member

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|false|none|none|
|CacheNodeId|object|false|none|none|
|NodeUpdateStatus|object|false|none|none|
|NodeDeletionDate|object|false|none|none|
|NodeUpdateStartDate|object|false|none|none|
|NodeUpdateEndDate|object|false|none|none|
|NodeUpdateInitiatedBy|object|false|none|none|
|NodeUpdateInitiatedDate|object|false|none|none|
|NodeUpdateStatusModifiedDate|object|false|none|none|

<h2 id="tocS_NodeGroupMemberUpdateStatusList">NodeGroupMemberUpdateStatusList</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupmemberupdatestatuslist"></a>
<a id="schema_NodeGroupMemberUpdateStatusList"></a>
<a id="tocSnodegroupmemberupdatestatuslist"></a>
<a id="tocsnodegroupmemberupdatestatuslist"></a>

```json
[
  {
    "CacheClusterId": {},
    "CacheNodeId": {},
    "NodeUpdateStatus": {},
    "NodeDeletionDate": {},
    "NodeUpdateStartDate": {},
    "NodeUpdateEndDate": {},
    "NodeUpdateInitiatedBy": {},
    "NodeUpdateInitiatedDate": {},
    "NodeUpdateStatusModifiedDate": {}
  }
]
```

<h2 id="tocS_NodeGroupUpdateStatus">NodeGroupUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupupdatestatus"></a>
<a id="schema_NodeGroupUpdateStatus"></a>
<a id="tocSnodegroupupdatestatus"></a>
<a id="tocsnodegroupupdatestatus"></a>

```json
{
  "NodeGroupId": {},
  "NodeGroupMemberUpdateStatus": {}
}
```

The status of the service update on the node group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeGroupId|object|false|none|none|
|NodeGroupMemberUpdateStatus|object|false|none|none|

<h2 id="tocS_NodeGroupUpdateStatusList">NodeGroupUpdateStatusList</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupupdatestatuslist"></a>
<a id="schema_NodeGroupUpdateStatusList"></a>
<a id="tocSnodegroupupdatestatuslist"></a>
<a id="tocsnodegroupupdatestatuslist"></a>

```json
[
  {
    "NodeGroupId": {},
    "NodeGroupMemberUpdateStatus": {}
  }
]
```

<h2 id="tocS_NodeSnapshot">NodeSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemanodesnapshot"></a>
<a id="schema_NodeSnapshot"></a>
<a id="tocSnodesnapshot"></a>
<a id="tocsnodesnapshot"></a>

```json
{
  "CacheClusterId": {},
  "NodeGroupId": {},
  "CacheNodeId": {},
  "NodeGroupConfiguration": {
    "NodeGroupId": {},
    "Slots": {},
    "ReplicaCount": {},
    "PrimaryAvailabilityZone": {},
    "ReplicaAvailabilityZones": {},
    "PrimaryOutpostArn": {},
    "ReplicaOutpostArns": {}
  },
  "CacheSize": {},
  "CacheNodeCreateTime": {},
  "SnapshotCreateTime": {}
}
```

Represents an individual cache node in a snapshot of a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|false|none|none|
|NodeGroupId|object|false|none|none|
|CacheNodeId|object|false|none|none|
|NodeGroupConfiguration|object|false|none|none|
|CacheSize|object|false|none|none|
|CacheNodeCreateTime|object|false|none|none|
|SnapshotCreateTime|object|false|none|none|

<h2 id="tocS_NodeSnapshotList">NodeSnapshotList</h2>
<!-- backwards compatibility -->
<a id="schemanodesnapshotlist"></a>
<a id="schema_NodeSnapshotList"></a>
<a id="tocSnodesnapshotlist"></a>
<a id="tocsnodesnapshotlist"></a>

```json
[
  {
    "CacheClusterId": {},
    "NodeGroupId": {},
    "CacheNodeId": {},
    "NodeGroupConfiguration": {
      "NodeGroupId": {},
      "Slots": {},
      "ReplicaCount": {},
      "PrimaryAvailabilityZone": {},
      "ReplicaAvailabilityZones": {},
      "PrimaryOutpostArn": {},
      "ReplicaOutpostArns": {}
    },
    "CacheSize": {},
    "CacheNodeCreateTime": {},
    "SnapshotCreateTime": {}
  }
]
```

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
  "DataType": {},
  "AllowedValues": {},
  "IsModifiable": {},
  "MinimumEngineVersion": {},
  "ChangeType": {}
}
```

Describes an individual setting that controls some aspect of ElastiCache behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|false|none|none|
|ParameterValue|object|false|none|none|
|Description|object|false|none|none|
|Source|object|false|none|none|
|DataType|object|false|none|none|
|AllowedValues|object|false|none|none|
|IsModifiable|object|false|none|none|
|MinimumEngineVersion|object|false|none|none|
|ChangeType|object|false|none|none|

<h2 id="tocS_PendingAutomaticFailoverStatus">PendingAutomaticFailoverStatus</h2>
<!-- backwards compatibility -->
<a id="schemapendingautomaticfailoverstatus"></a>
<a id="schema_PendingAutomaticFailoverStatus"></a>
<a id="tocSpendingautomaticfailoverstatus"></a>
<a id="tocspendingautomaticfailoverstatus"></a>

```json
"enabled"
```

<h2 id="tocS_PendingLogDeliveryConfiguration">PendingLogDeliveryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapendinglogdeliveryconfiguration"></a>
<a id="schema_PendingLogDeliveryConfiguration"></a>
<a id="tocSpendinglogdeliveryconfiguration"></a>
<a id="tocspendinglogdeliveryconfiguration"></a>

```json
{
  "LogType": {},
  "DestinationType": {},
  "DestinationDetails": {
    "CloudWatchLogsDetails": {
      "LogGroup": {}
    },
    "KinesisFirehoseDetails": {
      "DeliveryStream": {}
    }
  },
  "LogFormat": {}
}
```

The log delivery configurations being modified

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogType|object|false|none|none|
|DestinationType|object|false|none|none|
|DestinationDetails|object|false|none|none|
|LogFormat|object|false|none|none|

<h2 id="tocS_PendingLogDeliveryConfigurationList">PendingLogDeliveryConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemapendinglogdeliveryconfigurationlist"></a>
<a id="schema_PendingLogDeliveryConfigurationList"></a>
<a id="tocSpendinglogdeliveryconfigurationlist"></a>
<a id="tocspendinglogdeliveryconfigurationlist"></a>

```json
[
  {
    "LogType": {},
    "DestinationType": {},
    "DestinationDetails": {
      "CloudWatchLogsDetails": {
        "LogGroup": {}
      },
      "KinesisFirehoseDetails": {
        "DeliveryStream": {}
      }
    },
    "LogFormat": {}
  }
]
```

<h2 id="tocS_ProcessedUpdateAction">ProcessedUpdateAction</h2>
<!-- backwards compatibility -->
<a id="schemaprocessedupdateaction"></a>
<a id="schema_ProcessedUpdateAction"></a>
<a id="tocSprocessedupdateaction"></a>
<a id="tocsprocessedupdateaction"></a>

```json
{
  "ReplicationGroupId": {},
  "CacheClusterId": {},
  "ServiceUpdateName": {},
  "UpdateActionStatus": {}
}
```

Update action that has been processed for the corresponding apply/stop request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|CacheClusterId|object|false|none|none|
|ServiceUpdateName|object|false|none|none|
|UpdateActionStatus|object|false|none|none|

<h2 id="tocS_ProcessedUpdateActionList">ProcessedUpdateActionList</h2>
<!-- backwards compatibility -->
<a id="schemaprocessedupdateactionlist"></a>
<a id="schema_ProcessedUpdateActionList"></a>
<a id="tocSprocessedupdateactionlist"></a>
<a id="tocsprocessedupdateactionlist"></a>

```json
[
  {
    "ReplicationGroupId": {},
    "CacheClusterId": {},
    "ServiceUpdateName": {},
    "UpdateActionStatus": {}
  }
]
```

<h2 id="tocS_PurchaseReservedCacheNodesOfferingMessage">PurchaseReservedCacheNodesOfferingMessage</h2>
<!-- backwards compatibility -->
<a id="schemapurchasereservedcachenodesofferingmessage"></a>
<a id="schema_PurchaseReservedCacheNodesOfferingMessage"></a>
<a id="tocSpurchasereservedcachenodesofferingmessage"></a>
<a id="tocspurchasereservedcachenodesofferingmessage"></a>

```json
{
  "ReservedCacheNodesOfferingId": {},
  "ReservedCacheNodeId": {},
  "CacheNodeCount": {},
  "Tags": {}
}
```

Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedCacheNodesOfferingId|object|true|none|none|
|ReservedCacheNodeId|object|false|none|none|
|CacheNodeCount|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ReservedCacheNode">ReservedCacheNode</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenode"></a>
<a id="schema_ReservedCacheNode"></a>
<a id="tocSreservedcachenode"></a>
<a id="tocsreservedcachenode"></a>

```json
{
  "ReservedCacheNodeId": {},
  "ReservedCacheNodesOfferingId": {},
  "CacheNodeType": {},
  "StartTime": {},
  "Duration": {},
  "FixedPrice": {},
  "UsagePrice": {},
  "CacheNodeCount": {},
  "ProductDescription": {},
  "OfferingType": {},
  "State": {},
  "RecurringCharges": {},
  "ReservationARN": {}
}
```

Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedCacheNodeId|object|false|none|none|
|ReservedCacheNodesOfferingId|object|false|none|none|
|CacheNodeType|object|false|none|none|
|StartTime|object|false|none|none|
|Duration|object|false|none|none|
|FixedPrice|object|false|none|none|
|UsagePrice|object|false|none|none|
|CacheNodeCount|object|false|none|none|
|ProductDescription|object|false|none|none|
|OfferingType|object|false|none|none|
|State|object|false|none|none|
|RecurringCharges|object|false|none|none|
|ReservationARN|object|false|none|none|

<h2 id="tocS_RebalanceSlotsInGlobalReplicationGroupMessage">RebalanceSlotsInGlobalReplicationGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemarebalanceslotsinglobalreplicationgroupmessage"></a>
<a id="schema_RebalanceSlotsInGlobalReplicationGroupMessage"></a>
<a id="tocSrebalanceslotsinglobalreplicationgroupmessage"></a>
<a id="tocsrebalanceslotsinglobalreplicationgroupmessage"></a>

```json
{
  "GlobalReplicationGroupId": {},
  "ApplyImmediately": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalReplicationGroupId|object|true|none|none|
|ApplyImmediately|object|true|none|none|

<h2 id="tocS_RebootCacheClusterMessage">RebootCacheClusterMessage</h2>
<!-- backwards compatibility -->
<a id="schemarebootcacheclustermessage"></a>
<a id="schema_RebootCacheClusterMessage"></a>
<a id="tocSrebootcacheclustermessage"></a>
<a id="tocsrebootcacheclustermessage"></a>

```json
{
  "CacheClusterId": {},
  "CacheNodeIdsToReboot": {}
}
```

Represents the input of a <code>RebootCacheCluster</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheClusterId|object|true|none|none|
|CacheNodeIdsToReboot|object|true|none|none|

<h2 id="tocS_RecurringCharge">RecurringCharge</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcharge"></a>
<a id="schema_RecurringCharge"></a>
<a id="tocSrecurringcharge"></a>
<a id="tocsrecurringcharge"></a>

```json
{
  "RecurringChargeAmount": {},
  "RecurringChargeFrequency": {}
}
```

Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecurringChargeAmount|object|false|none|none|
|RecurringChargeFrequency|object|false|none|none|

<h2 id="tocS_RecurringChargeList">RecurringChargeList</h2>
<!-- backwards compatibility -->
<a id="schemarecurringchargelist"></a>
<a id="schema_RecurringChargeList"></a>
<a id="tocSrecurringchargelist"></a>
<a id="tocsrecurringchargelist"></a>

```json
[
  {
    "RecurringChargeAmount": {},
    "RecurringChargeFrequency": {}
  }
]
```

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

Represents the input of a <code>RemoveTagsFromResource</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_ReplicationGroupPendingModifiedValues">ReplicationGroupPendingModifiedValues</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgrouppendingmodifiedvalues"></a>
<a id="schema_ReplicationGroupPendingModifiedValues"></a>
<a id="tocSreplicationgrouppendingmodifiedvalues"></a>
<a id="tocsreplicationgrouppendingmodifiedvalues"></a>

```json
{
  "PrimaryClusterId": {},
  "AutomaticFailoverStatus": {},
  "Resharding": {
    "SlotMigration": {
      "ProgressPercentage": {}
    }
  },
  "AuthTokenStatus": {},
  "UserGroups": {
    "UserGroupIdsToAdd": {},
    "UserGroupIdsToRemove": {}
  },
  "LogDeliveryConfigurations": {},
  "TransitEncryptionEnabled": {},
  "TransitEncryptionMode": {},
  "ClusterMode": {}
}
```

The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrimaryClusterId|object|false|none|none|
|AutomaticFailoverStatus|object|false|none|none|
|Resharding|object|false|none|none|
|AuthTokenStatus|object|false|none|none|
|UserGroups|object|false|none|none|
|LogDeliveryConfigurations|object|false|none|none|
|TransitEncryptionEnabled|object|false|none|none|
|TransitEncryptionMode|object|false|none|none|
|ClusterMode|object|false|none|none|

<h2 id="tocS_ReplicationGroupOutpostArnList">ReplicationGroupOutpostArnList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupoutpostarnlist"></a>
<a id="schema_ReplicationGroupOutpostArnList"></a>
<a id="tocSreplicationgroupoutpostarnlist"></a>
<a id="tocsreplicationgroupoutpostarnlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ReplicationGroupList">ReplicationGroupList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgrouplist"></a>
<a id="schema_ReplicationGroupList"></a>
<a id="tocSreplicationgrouplist"></a>
<a id="tocsreplicationgrouplist"></a>

```json
[
  {
    "ReplicationGroupId": {},
    "Description": {},
    "GlobalReplicationGroupInfo": {
      "GlobalReplicationGroupId": {},
      "GlobalReplicationGroupMemberRole": {}
    },
    "Status": {},
    "PendingModifiedValues": {
      "PrimaryClusterId": {},
      "AutomaticFailoverStatus": {},
      "Resharding": {
        "SlotMigration": {
          "ProgressPercentage": {}
        }
      },
      "AuthTokenStatus": {},
      "UserGroups": {
        "UserGroupIdsToAdd": {},
        "UserGroupIdsToRemove": {}
      },
      "LogDeliveryConfigurations": {},
      "TransitEncryptionEnabled": {},
      "TransitEncryptionMode": {},
      "ClusterMode": {}
    },
    "MemberClusters": {},
    "NodeGroups": {},
    "SnapshottingClusterId": {},
    "AutomaticFailover": {},
    "MultiAZ": {},
    "ConfigurationEndpoint": {
      "Address": {},
      "Port": {}
    },
    "SnapshotRetentionLimit": {},
    "SnapshotWindow": {},
    "ClusterEnabled": {},
    "CacheNodeType": {},
    "AuthTokenEnabled": {},
    "AuthTokenLastModifiedDate": {},
    "TransitEncryptionEnabled": {},
    "AtRestEncryptionEnabled": {},
    "MemberClustersOutpostArns": {},
    "KmsKeyId": {},
    "ARN": {},
    "UserGroupIds": {},
    "LogDeliveryConfigurations": {},
    "ReplicationGroupCreateTime": {},
    "DataTiering": {},
    "AutoMinorVersionUpgrade": {},
    "NetworkType": {},
    "IpDiscovery": {},
    "TransitEncryptionMode": {},
    "ClusterMode": {}
  }
]
```

<h2 id="tocS_ReshardingStatus">ReshardingStatus</h2>
<!-- backwards compatibility -->
<a id="schemareshardingstatus"></a>
<a id="schema_ReshardingStatus"></a>
<a id="tocSreshardingstatus"></a>
<a id="tocsreshardingstatus"></a>

```json
{
  "SlotMigration": {
    "ProgressPercentage": {}
  }
}
```

The status of an online resharding operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SlotMigration|object|false|none|none|

<h2 id="tocS_UserGroupsUpdateStatus">UserGroupsUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemausergroupsupdatestatus"></a>
<a id="schema_UserGroupsUpdateStatus"></a>
<a id="tocSusergroupsupdatestatus"></a>
<a id="tocsusergroupsupdatestatus"></a>

```json
{
  "UserGroupIdsToAdd": {},
  "UserGroupIdsToRemove": {}
}
```

The status of the user group update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroupIdsToAdd|object|false|none|none|
|UserGroupIdsToRemove|object|false|none|none|

<h2 id="tocS_ReservedCacheNodeList">ReservedCacheNodeList</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodelist"></a>
<a id="schema_ReservedCacheNodeList"></a>
<a id="tocSreservedcachenodelist"></a>
<a id="tocsreservedcachenodelist"></a>

```json
[
  {
    "ReservedCacheNodeId": {},
    "ReservedCacheNodesOfferingId": {},
    "CacheNodeType": {},
    "StartTime": {},
    "Duration": {},
    "FixedPrice": {},
    "UsagePrice": {},
    "CacheNodeCount": {},
    "ProductDescription": {},
    "OfferingType": {},
    "State": {},
    "RecurringCharges": {},
    "ReservationARN": {}
  }
]
```

<h2 id="tocS_ReservedCacheNodesOffering">ReservedCacheNodesOffering</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodesoffering"></a>
<a id="schema_ReservedCacheNodesOffering"></a>
<a id="tocSreservedcachenodesoffering"></a>
<a id="tocsreservedcachenodesoffering"></a>

```json
{
  "ReservedCacheNodesOfferingId": {},
  "CacheNodeType": {},
  "Duration": {},
  "FixedPrice": {},
  "UsagePrice": {},
  "ProductDescription": {},
  "OfferingType": {},
  "RecurringCharges": {}
}
```

Describes all of the attributes of a reserved cache node offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedCacheNodesOfferingId|object|false|none|none|
|CacheNodeType|object|false|none|none|
|Duration|object|false|none|none|
|FixedPrice|object|false|none|none|
|UsagePrice|object|false|none|none|
|ProductDescription|object|false|none|none|
|OfferingType|object|false|none|none|
|RecurringCharges|object|false|none|none|

<h2 id="tocS_ReservedCacheNodesOfferingList">ReservedCacheNodesOfferingList</h2>
<!-- backwards compatibility -->
<a id="schemareservedcachenodesofferinglist"></a>
<a id="schema_ReservedCacheNodesOfferingList"></a>
<a id="tocSreservedcachenodesofferinglist"></a>
<a id="tocsreservedcachenodesofferinglist"></a>

```json
[
  {
    "ReservedCacheNodesOfferingId": {},
    "CacheNodeType": {},
    "Duration": {},
    "FixedPrice": {},
    "UsagePrice": {},
    "ProductDescription": {},
    "OfferingType": {},
    "RecurringCharges": {}
  }
]
```

<h2 id="tocS_ResetCacheParameterGroupMessage">ResetCacheParameterGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemaresetcacheparametergroupmessage"></a>
<a id="schema_ResetCacheParameterGroupMessage"></a>
<a id="tocSresetcacheparametergroupmessage"></a>
<a id="tocsresetcacheparametergroupmessage"></a>

```json
{
  "CacheParameterGroupName": {},
  "ResetAllParameters": {},
  "ParameterNameValues": {}
}
```

Represents the input of a <code>ResetCacheParameterGroup</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheParameterGroupName|object|true|none|none|
|ResetAllParameters|object|false|none|none|
|ParameterNameValues|object|false|none|none|

<h2 id="tocS_SlotMigration">SlotMigration</h2>
<!-- backwards compatibility -->
<a id="schemaslotmigration"></a>
<a id="schema_SlotMigration"></a>
<a id="tocSslotmigration"></a>
<a id="tocsslotmigration"></a>

```json
{
  "ProgressPercentage": {}
}
```

Represents the progress of an online resharding operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgressPercentage|object|false|none|none|

<h2 id="tocS_RevokeCacheSecurityGroupIngressMessage">RevokeCacheSecurityGroupIngressMessage</h2>
<!-- backwards compatibility -->
<a id="schemarevokecachesecuritygroupingressmessage"></a>
<a id="schema_RevokeCacheSecurityGroupIngressMessage"></a>
<a id="tocSrevokecachesecuritygroupingressmessage"></a>
<a id="tocsrevokecachesecuritygroupingressmessage"></a>

```json
{
  "CacheSecurityGroupName": {},
  "EC2SecurityGroupName": {},
  "EC2SecurityGroupOwnerId": {}
}
```

Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheSecurityGroupName|object|true|none|none|
|EC2SecurityGroupName|object|true|none|none|
|EC2SecurityGroupOwnerId|object|true|none|none|

<h2 id="tocS_SecurityGroupMembership">SecurityGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupmembership"></a>
<a id="schema_SecurityGroupMembership"></a>
<a id="tocSsecuritygroupmembership"></a>
<a id="tocssecuritygroupmembership"></a>

```json
{
  "SecurityGroupId": {},
  "Status": {}
}
```

Represents a single cache security group and its status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroupId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ServiceUpdateSeverity">ServiceUpdateSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdateseverity"></a>
<a id="schema_ServiceUpdateSeverity"></a>
<a id="tocSserviceupdateseverity"></a>
<a id="tocsserviceupdateseverity"></a>

```json
"critical"
```

<h2 id="tocS_ServiceUpdateType">ServiceUpdateType</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdatetype"></a>
<a id="schema_ServiceUpdateType"></a>
<a id="tocSserviceupdatetype"></a>
<a id="tocsserviceupdatetype"></a>

```json
"security-update"
```

<h2 id="tocS_ServiceUpdate">ServiceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdate"></a>
<a id="schema_ServiceUpdate"></a>
<a id="tocSserviceupdate"></a>
<a id="tocsserviceupdate"></a>

```json
{
  "ServiceUpdateName": {},
  "ServiceUpdateReleaseDate": {},
  "ServiceUpdateEndDate": {},
  "ServiceUpdateSeverity": {},
  "ServiceUpdateRecommendedApplyByDate": {},
  "ServiceUpdateStatus": {},
  "ServiceUpdateDescription": {},
  "ServiceUpdateType": {},
  "Engine": {},
  "EngineVersion": {},
  "AutoUpdateAfterRecommendedApplyByDate": {},
  "EstimatedUpdateTime": {}
}
```

An update that you can apply to your Redis clusters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceUpdateName|object|false|none|none|
|ServiceUpdateReleaseDate|object|false|none|none|
|ServiceUpdateEndDate|object|false|none|none|
|ServiceUpdateSeverity|object|false|none|none|
|ServiceUpdateRecommendedApplyByDate|object|false|none|none|
|ServiceUpdateStatus|object|false|none|none|
|ServiceUpdateDescription|object|false|none|none|
|ServiceUpdateType|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoUpdateAfterRecommendedApplyByDate|object|false|none|none|
|EstimatedUpdateTime|object|false|none|none|

<h2 id="tocS_ServiceUpdateList">ServiceUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdatelist"></a>
<a id="schema_ServiceUpdateList"></a>
<a id="tocSserviceupdatelist"></a>
<a id="tocsserviceupdatelist"></a>

```json
[
  {
    "ServiceUpdateName": {},
    "ServiceUpdateReleaseDate": {},
    "ServiceUpdateEndDate": {},
    "ServiceUpdateSeverity": {},
    "ServiceUpdateRecommendedApplyByDate": {},
    "ServiceUpdateStatus": {},
    "ServiceUpdateDescription": {},
    "ServiceUpdateType": {},
    "Engine": {},
    "EngineVersion": {},
    "AutoUpdateAfterRecommendedApplyByDate": {},
    "EstimatedUpdateTime": {}
  }
]
```

<h2 id="tocS_SlaMet">SlaMet</h2>
<!-- backwards compatibility -->
<a id="schemaslamet"></a>
<a id="schema_SlaMet"></a>
<a id="tocSslamet"></a>
<a id="tocsslamet"></a>

```json
"yes"
```

<h2 id="tocS_StartMigrationMessage">StartMigrationMessage</h2>
<!-- backwards compatibility -->
<a id="schemastartmigrationmessage"></a>
<a id="schema_StartMigrationMessage"></a>
<a id="tocSstartmigrationmessage"></a>
<a id="tocsstartmigrationmessage"></a>

```json
{
  "ReplicationGroupId": {},
  "CustomerNodeEndpointList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|CustomerNodeEndpointList|object|true|none|none|

<h2 id="tocS_SubnetOutpost">SubnetOutpost</h2>
<!-- backwards compatibility -->
<a id="schemasubnetoutpost"></a>
<a id="schema_SubnetOutpost"></a>
<a id="tocSsubnetoutpost"></a>
<a id="tocssubnetoutpost"></a>

```json
{
  "SubnetOutpostArn": {}
}
```

The ID of the outpost subnet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetOutpostArn|object|false|none|none|

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
  "SubnetOutpost": {
    "SubnetOutpostArn": {}
  },
  "SupportedNetworkTypes": {}
}
```

Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIdentifier|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|SubnetOutpost|object|false|none|none|
|SupportedNetworkTypes|object|false|none|none|

<h2 id="tocS_TestFailoverMessage">TestFailoverMessage</h2>
<!-- backwards compatibility -->
<a id="schematestfailovermessage"></a>
<a id="schema_TestFailoverMessage"></a>
<a id="tocStestfailovermessage"></a>
<a id="tocstestfailovermessage"></a>

```json
{
  "ReplicationGroupId": {},
  "NodeGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|true|none|none|
|NodeGroupId|object|true|none|none|

<h2 id="tocS_UGReplicationGroupIdList">UGReplicationGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemaugreplicationgroupidlist"></a>
<a id="schema_UGReplicationGroupIdList"></a>
<a id="tocSugreplicationgroupidlist"></a>
<a id="tocsugreplicationgroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UnprocessedUpdateAction">UnprocessedUpdateAction</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedupdateaction"></a>
<a id="schema_UnprocessedUpdateAction"></a>
<a id="tocSunprocessedupdateaction"></a>
<a id="tocsunprocessedupdateaction"></a>

```json
{
  "ReplicationGroupId": {},
  "CacheClusterId": {},
  "ServiceUpdateName": {},
  "ErrorType": {},
  "ErrorMessage": {}
}
```

Update action that has failed to be processed for the corresponding apply/stop request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|CacheClusterId|object|false|none|none|
|ServiceUpdateName|object|false|none|none|
|ErrorType|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_UnprocessedUpdateActionList">UnprocessedUpdateActionList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedupdateactionlist"></a>
<a id="schema_UnprocessedUpdateActionList"></a>
<a id="tocSunprocessedupdateactionlist"></a>
<a id="tocsunprocessedupdateactionlist"></a>

```json
[
  {
    "ReplicationGroupId": {},
    "CacheClusterId": {},
    "ServiceUpdateName": {},
    "ErrorType": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_UpdateAction">UpdateAction</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaction"></a>
<a id="schema_UpdateAction"></a>
<a id="tocSupdateaction"></a>
<a id="tocsupdateaction"></a>

```json
{
  "ReplicationGroupId": {},
  "CacheClusterId": {},
  "ServiceUpdateName": {},
  "ServiceUpdateReleaseDate": {},
  "ServiceUpdateSeverity": {},
  "ServiceUpdateStatus": {},
  "ServiceUpdateRecommendedApplyByDate": {},
  "ServiceUpdateType": {},
  "UpdateActionAvailableDate": {},
  "UpdateActionStatus": {},
  "NodesUpdated": {},
  "UpdateActionStatusModifiedDate": {},
  "SlaMet": {},
  "NodeGroupUpdateStatus": {},
  "CacheNodeUpdateStatus": {},
  "EstimatedUpdateTime": {},
  "Engine": {}
}
```

The status of the service update for a specific replication group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroupId|object|false|none|none|
|CacheClusterId|object|false|none|none|
|ServiceUpdateName|object|false|none|none|
|ServiceUpdateReleaseDate|object|false|none|none|
|ServiceUpdateSeverity|object|false|none|none|
|ServiceUpdateStatus|object|false|none|none|
|ServiceUpdateRecommendedApplyByDate|object|false|none|none|
|ServiceUpdateType|object|false|none|none|
|UpdateActionAvailableDate|object|false|none|none|
|UpdateActionStatus|object|false|none|none|
|NodesUpdated|object|false|none|none|
|UpdateActionStatusModifiedDate|object|false|none|none|
|SlaMet|object|false|none|none|
|NodeGroupUpdateStatus|object|false|none|none|
|CacheNodeUpdateStatus|object|false|none|none|
|EstimatedUpdateTime|object|false|none|none|
|Engine|object|false|none|none|

<h2 id="tocS_UpdateActionList">UpdateActionList</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactionlist"></a>
<a id="schema_UpdateActionList"></a>
<a id="tocSupdateactionlist"></a>
<a id="tocsupdateactionlist"></a>

```json
[
  {
    "ReplicationGroupId": {},
    "CacheClusterId": {},
    "ServiceUpdateName": {},
    "ServiceUpdateReleaseDate": {},
    "ServiceUpdateSeverity": {},
    "ServiceUpdateStatus": {},
    "ServiceUpdateRecommendedApplyByDate": {},
    "ServiceUpdateType": {},
    "UpdateActionAvailableDate": {},
    "UpdateActionStatus": {},
    "NodesUpdated": {},
    "UpdateActionStatusModifiedDate": {},
    "SlaMet": {},
    "NodeGroupUpdateStatus": {},
    "CacheNodeUpdateStatus": {},
    "EstimatedUpdateTime": {},
    "Engine": {}
  }
]
```

<h2 id="tocS_UserIdList">UserIdList</h2>
<!-- backwards compatibility -->
<a id="schemauseridlist"></a>
<a id="schema_UserIdList"></a>
<a id="tocSuseridlist"></a>
<a id="tocsuseridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserGroupPendingChanges">UserGroupPendingChanges</h2>
<!-- backwards compatibility -->
<a id="schemausergrouppendingchanges"></a>
<a id="schema_UserGroupPendingChanges"></a>
<a id="tocSusergrouppendingchanges"></a>
<a id="tocsusergrouppendingchanges"></a>

```json
{
  "UserIdsToRemove": {},
  "UserIdsToAdd": {}
}
```

Returns the updates being applied to the user group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserIdsToRemove|object|false|none|none|
|UserIdsToAdd|object|false|none|none|
