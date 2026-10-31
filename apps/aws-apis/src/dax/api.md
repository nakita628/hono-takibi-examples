<h1 id="amazon-dynamodb-accelerator-dax">Amazon DynamoDB Accelerator (DAX) v2017-04-19</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.

Base URLs:

* <a href="http://dax.us-east-1.amazonaws.com">http://dax.us-east-1.amazonaws.com</a> - The Amazon DAX multi-region endpoint

* <a href="https://dax.us-east-1.amazonaws.com">https://dax.us-east-1.amazonaws.com</a> - The Amazon DAX multi-region endpoint

* <a href="http://dax.cn-north-1.amazonaws.com.cn">http://dax.cn-north-1.amazonaws.com.cn</a> - The Amazon DAX endpoint for China (Beijing) and China (Ningxia)

* <a href="https://dax.cn-north-1.amazonaws.com.cn">https://dax.cn-north-1.amazonaws.com.cn</a> - The Amazon DAX endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/dax/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-dynamodb-accelerator-dax-default">Default</h1>

## CreateCluster

<a id="opIdCreateCluster"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.CreateCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.CreateCluster' \
  -d '{
    "ClusterName": {},
    "NodeType": {},
    "Description": {},
    "ReplicationFactor": {},
    "AvailabilityZones": {},
    "SubnetGroupName": {},
    "SecurityGroupIds": {},
    "PreferredMaintenanceWindow": {},
    "NotificationTopicArn": {},
    "IamRoleArn": {},
    "ParameterGroupName": {},
    "Tags": {},
    "SSESpecification": {
      "Enabled": {}
    },
    "ClusterEndpointEncryptionType": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.CreateCluster`

Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.

> Body parameter

```json
{
  "ClusterName": {},
  "NodeType": {},
  "Description": {},
  "ReplicationFactor": {},
  "AvailabilityZones": {},
  "SubnetGroupName": {},
  "SecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "IamRoleArn": {},
  "ParameterGroupName": {},
  "Tags": {},
  "SSESpecification": {
    "Enabled": {}
  },
  "ClusterEndpointEncryptionType": {}
}
```

<h3 id="createcluster-parameters">Parameters</h3>

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
|body|body|[CreateClusterRequest](#schemacreateclusterrequest)|true|none|
|» ClusterName|body|object|true|none|
|» NodeType|body|object|true|none|
|» Description|body|object|false|none|
|» ReplicationFactor|body|object|true|none|
|» AvailabilityZones|body|object|false|none|
|» SubnetGroupName|body|object|false|none|
|» SecurityGroupIds|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» NotificationTopicArn|body|object|false|none|
|» IamRoleArn|body|object|true|none|
|» ParameterGroupName|body|object|false|none|
|» Tags|body|object|false|none|
|» SSESpecification|body|object|false|none|
|» » Enabled|body|object|true|none|
|» ClusterEndpointEncryptionType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.CreateCluster|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
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

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="createcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClusterResponse](#schemacreateclusterresponse)|
|480|480|ClusterAlreadyExistsFault|[ClusterAlreadyExistsFault](#schemaclusteralreadyexistsfault)|
|481|481|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|482|482|InsufficientClusterCapacityFault|[InsufficientClusterCapacityFault](#schemainsufficientclustercapacityfault)|
|483|483|SubnetGroupNotFoundFault|[SubnetGroupNotFoundFault](#schemasubnetgroupnotfoundfault)|
|484|484|InvalidParameterGroupStateFault|[InvalidParameterGroupStateFault](#schemainvalidparametergroupstatefault)|
|485|485|ParameterGroupNotFoundFault|[ParameterGroupNotFoundFault](#schemaparametergroupnotfoundfault)|
|486|486|ClusterQuotaForCustomerExceededFault|[ClusterQuotaForCustomerExceededFault](#schemaclusterquotaforcustomerexceededfault)|
|487|487|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|488|488|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|489|489|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|490|490|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|491|491|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|492|492|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|493|493|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|494|494|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateParameterGroup

<a id="opIdCreateParameterGroup"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.CreateParameterGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.CreateParameterGroup' \
  -d '{
    "ParameterGroupName": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.CreateParameterGroup`

Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.

> Body parameter

```json
{
  "ParameterGroupName": {},
  "Description": {}
}
```

<h3 id="createparametergroup-parameters">Parameters</h3>

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
|body|body|[CreateParameterGroupRequest](#schemacreateparametergrouprequest)|true|none|
|» ParameterGroupName|body|object|true|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.CreateParameterGroup|

> Example responses

> 200 Response

```json
{
  "ParameterGroup": {
    "ParameterGroupName": {},
    "Description": {}
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

<h3 id="createparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateParameterGroupResponse](#schemacreateparametergroupresponse)|
|480|480|ParameterGroupQuotaExceededFault|[ParameterGroupQuotaExceededFault](#schemaparametergroupquotaexceededfault)|
|481|481|ParameterGroupAlreadyExistsFault|[ParameterGroupAlreadyExistsFault](#schemaparametergroupalreadyexistsfault)|
|482|482|InvalidParameterGroupStateFault|[InvalidParameterGroupStateFault](#schemainvalidparametergroupstatefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSubnetGroup

<a id="opIdCreateSubnetGroup"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.CreateSubnetGroup' \
  -d '{
    "SubnetGroupName": {},
    "Description": {},
    "SubnetIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup`

Creates a new subnet group.

> Body parameter

```json
{
  "SubnetGroupName": {},
  "Description": {},
  "SubnetIds": {}
}
```

<h3 id="createsubnetgroup-parameters">Parameters</h3>

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
|body|body|[CreateSubnetGroupRequest](#schemacreatesubnetgrouprequest)|true|none|
|» SubnetGroupName|body|object|true|none|
|» Description|body|object|false|none|
|» SubnetIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.CreateSubnetGroup|

> Example responses

> 200 Response

```json
{
  "SubnetGroup": {
    "SubnetGroupName": {},
    "Description": {},
    "VpcId": {},
    "Subnets": {}
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

<h3 id="createsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSubnetGroupResponse](#schemacreatesubnetgroupresponse)|
|480|480|SubnetGroupAlreadyExistsFault|[SubnetGroupAlreadyExistsFault](#schemasubnetgroupalreadyexistsfault)|
|481|481|SubnetGroupQuotaExceededFault|[SubnetGroupQuotaExceededFault](#schemasubnetgroupquotaexceededfault)|
|482|482|SubnetQuotaExceededFault|[SubnetQuotaExceededFault](#schemasubnetquotaexceededfault)|
|483|483|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|484|484|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DecreaseReplicationFactor

<a id="opIdDecreaseReplicationFactor"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DecreaseReplicationFactor' \
  -d '{
    "ClusterName": {},
    "NewReplicationFactor": {},
    "AvailabilityZones": {},
    "NodeIdsToRemove": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor`

<p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>

> Body parameter

```json
{
  "ClusterName": {},
  "NewReplicationFactor": {},
  "AvailabilityZones": {},
  "NodeIdsToRemove": {}
}
```

<h3 id="decreasereplicationfactor-parameters">Parameters</h3>

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
|body|body|[DecreaseReplicationFactorRequest](#schemadecreasereplicationfactorrequest)|true|none|
|» ClusterName|body|object|true|none|
|» NewReplicationFactor|body|object|true|none|
|» AvailabilityZones|body|object|false|none|
|» NodeIdsToRemove|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DecreaseReplicationFactor|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
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

<h3 id="decreasereplicationfactor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecreaseReplicationFactorResponse](#schemadecreasereplicationfactorresponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|NodeNotFoundFault|[NodeNotFoundFault](#schemanodenotfoundfault)|
|482|482|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCluster

<a id="opIdDeleteCluster"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DeleteCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DeleteCluster' \
  -d '{
    "ClusterName": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DeleteCluster`

Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.

> Body parameter

```json
{
  "ClusterName": {}
}
```

<h3 id="deletecluster-parameters">Parameters</h3>

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
|body|body|[DeleteClusterRequest](#schemadeleteclusterrequest)|true|none|
|» ClusterName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DeleteCluster|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
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

<h3 id="deletecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteClusterResponse](#schemadeleteclusterresponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteParameterGroup

<a id="opIdDeleteParameterGroup"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DeleteParameterGroup' \
  -d '{
    "ParameterGroupName": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup`

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.

> Body parameter

```json
{
  "ParameterGroupName": {}
}
```

<h3 id="deleteparametergroup-parameters">Parameters</h3>

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
|body|body|[DeleteParameterGroupRequest](#schemadeleteparametergrouprequest)|true|none|
|» ParameterGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DeleteParameterGroup|

> Example responses

> 200 Response

```json
{
  "DeletionMessage": {}
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

<h3 id="deleteparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteParameterGroupResponse](#schemadeleteparametergroupresponse)|
|480|480|InvalidParameterGroupStateFault|[InvalidParameterGroupStateFault](#schemainvalidparametergroupstatefault)|
|481|481|ParameterGroupNotFoundFault|[ParameterGroupNotFoundFault](#schemaparametergroupnotfoundfault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSubnetGroup

<a id="opIdDeleteSubnetGroup"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DeleteSubnetGroup' \
  -d '{
    "SubnetGroupName": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup`

<p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>

> Body parameter

```json
{
  "SubnetGroupName": {}
}
```

<h3 id="deletesubnetgroup-parameters">Parameters</h3>

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
|body|body|[DeleteSubnetGroupRequest](#schemadeletesubnetgrouprequest)|true|none|
|» SubnetGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DeleteSubnetGroup|

> Example responses

> 200 Response

```json
{
  "DeletionMessage": {}
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

<h3 id="deletesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSubnetGroupResponse](#schemadeletesubnetgroupresponse)|
|480|480|SubnetGroupInUseFault|[SubnetGroupInUseFault](#schemasubnetgroupinusefault)|
|481|481|SubnetGroupNotFoundFault|[SubnetGroupNotFoundFault](#schemasubnetgroupnotfoundfault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClusters

<a id="opIdDescribeClusters"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DescribeClusters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DescribeClusters' \
  -d '{
    "ClusterNames": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DescribeClusters`

<p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>

> Body parameter

```json
{
  "ClusterNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeclusters-parameters">Parameters</h3>

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
|body|body|[DescribeClustersRequest](#schemadescribeclustersrequest)|true|none|
|» ClusterNames|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DescribeClusters|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Clusters": {}
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

<h3 id="describeclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClustersResponse](#schemadescribeclustersresponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDefaultParameters

<a id="opIdDescribeDefaultParameters"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DescribeDefaultParameters' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters`

Returns the default system parameter information for the DAX caching software.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describedefaultparameters-parameters">Parameters</h3>

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
|body|body|[DescribeDefaultParametersRequest](#schemadescribedefaultparametersrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DescribeDefaultParameters|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Parameters": {}
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

<h3 id="describedefaultparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDefaultParametersResponse](#schemadescribedefaultparametersresponse)|
|480|480|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEvents

<a id="opIdDescribeEvents"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DescribeEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DescribeEvents' \
  -d '{
    "SourceName": {},
    "SourceType": {},
    "StartTime": {},
    "EndTime": {},
    "Duration": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DescribeEvents`

<p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

> Body parameter

```json
{
  "SourceName": {},
  "SourceType": {},
  "StartTime": {},
  "EndTime": {},
  "Duration": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeevents-parameters">Parameters</h3>

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
|body|body|[DescribeEventsRequest](#schemadescribeeventsrequest)|true|none|
|» SourceName|body|object|false|none|
|» SourceType|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» Duration|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DescribeEvents|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Events": {}
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

<h3 id="describeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventsResponse](#schemadescribeeventsresponse)|
|480|480|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeParameterGroups

<a id="opIdDescribeParameterGroups"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DescribeParameterGroups' \
  -d '{
    "ParameterGroupNames": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups`

Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.

> Body parameter

```json
{
  "ParameterGroupNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeparametergroups-parameters">Parameters</h3>

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
|body|body|[DescribeParameterGroupsRequest](#schemadescribeparametergroupsrequest)|true|none|
|» ParameterGroupNames|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DescribeParameterGroups|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ParameterGroups": {}
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

<h3 id="describeparametergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeParameterGroupsResponse](#schemadescribeparametergroupsresponse)|
|480|480|ParameterGroupNotFoundFault|[ParameterGroupNotFoundFault](#schemaparametergroupnotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeParameters

<a id="opIdDescribeParameters"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DescribeParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DescribeParameters' \
  -d '{
    "ParameterGroupName": {},
    "Source": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DescribeParameters`

Returns the detailed parameter list for a particular parameter group.

> Body parameter

```json
{
  "ParameterGroupName": {},
  "Source": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeparameters-parameters">Parameters</h3>

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
|body|body|[DescribeParametersRequest](#schemadescribeparametersrequest)|true|none|
|» ParameterGroupName|body|object|true|none|
|» Source|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DescribeParameters|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Parameters": {}
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

<h3 id="describeparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeParametersResponse](#schemadescribeparametersresponse)|
|480|480|ParameterGroupNotFoundFault|[ParameterGroupNotFoundFault](#schemaparametergroupnotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSubnetGroups

<a id="opIdDescribeSubnetGroups"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.DescribeSubnetGroups' \
  -d '{
    "SubnetGroupNames": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups`

Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.

> Body parameter

```json
{
  "SubnetGroupNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describesubnetgroups-parameters">Parameters</h3>

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
|body|body|[DescribeSubnetGroupsRequest](#schemadescribesubnetgroupsrequest)|true|none|
|» SubnetGroupNames|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.DescribeSubnetGroups|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "SubnetGroups": {}
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

<h3 id="describesubnetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSubnetGroupsResponse](#schemadescribesubnetgroupsresponse)|
|480|480|SubnetGroupNotFoundFault|[SubnetGroupNotFoundFault](#schemasubnetgroupnotfoundfault)|
|481|481|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## IncreaseReplicationFactor

<a id="opIdIncreaseReplicationFactor"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.IncreaseReplicationFactor' \
  -d '{
    "ClusterName": {},
    "NewReplicationFactor": {},
    "AvailabilityZones": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor`

Adds one or more nodes to a DAX cluster.

> Body parameter

```json
{
  "ClusterName": {},
  "NewReplicationFactor": {},
  "AvailabilityZones": {}
}
```

<h3 id="increasereplicationfactor-parameters">Parameters</h3>

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
|body|body|[IncreaseReplicationFactorRequest](#schemaincreasereplicationfactorrequest)|true|none|
|» ClusterName|body|object|true|none|
|» NewReplicationFactor|body|object|true|none|
|» AvailabilityZones|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.IncreaseReplicationFactor|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="increasereplicationfactor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IncreaseReplicationFactorResponse](#schemaincreasereplicationfactorresponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|482|482|InsufficientClusterCapacityFault|[InsufficientClusterCapacityFault](#schemainsufficientclustercapacityfault)|
|483|483|InvalidVPCNetworkStateFault|[InvalidVPCNetworkStateFault](#schemainvalidvpcnetworkstatefault)|
|484|484|NodeQuotaForClusterExceededFault|[NodeQuotaForClusterExceededFault](#schemanodequotaforclusterexceededfault)|
|485|485|NodeQuotaForCustomerExceededFault|[NodeQuotaForCustomerExceededFault](#schemanodequotaforcustomerexceededfault)|
|486|486|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|487|487|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.ListTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.ListTags' \
  -d '{
    "ResourceName": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.ListTags`

List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.

> Body parameter

```json
{
  "ResourceName": {},
  "NextToken": {}
}
```

<h3 id="listtags-parameters">Parameters</h3>

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
|body|body|[ListTagsRequest](#schemalisttagsrequest)|true|none|
|» ResourceName|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.ListTags|

> Example responses

> 200 Response

```json
{
  "Tags": {},
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

> 485 Response

```json
null
```

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResponse](#schemalisttagsresponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|
|482|482|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootNode

<a id="opIdRebootNode"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.RebootNode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.RebootNode' \
  -d '{
    "ClusterName": {},
    "NodeId": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.RebootNode`

<p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>

> Body parameter

```json
{
  "ClusterName": {},
  "NodeId": {}
}
```

<h3 id="rebootnode-parameters">Parameters</h3>

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
|body|body|[RebootNodeRequest](#schemarebootnoderequest)|true|none|
|» ClusterName|body|object|true|none|
|» NodeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.RebootNode|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
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

<h3 id="rebootnode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootNodeResponse](#schemarebootnoderesponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|NodeNotFoundFault|[NodeNotFoundFault](#schemanodenotfoundfault)|
|482|482|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|483|483|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.TagResource' \
  -d '{
    "ResourceName": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.TagResource`

Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 

> Body parameter

```json
{
  "ResourceName": {},
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
|» ResourceName|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|TagQuotaPerResourceExceeded|[TagQuotaPerResourceExceeded](#schematagquotaperresourceexceeded)|
|482|482|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|
|483|483|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|484|484|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.UntagResource' \
  -d '{
    "ResourceName": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.UntagResource`

Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 

> Body parameter

```json
{
  "ResourceName": {},
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
|» ResourceName|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|481|481|InvalidARNFault|[InvalidARNFault](#schemainvalidarnfault)|
|482|482|TagNotFoundFault|[TagNotFoundFault](#schematagnotfoundfault)|
|483|483|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|484|484|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCluster

<a id="opIdUpdateCluster"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.UpdateCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.UpdateCluster' \
  -d '{
    "ClusterName": {},
    "Description": {},
    "PreferredMaintenanceWindow": {},
    "NotificationTopicArn": {},
    "NotificationTopicStatus": {},
    "ParameterGroupName": {},
    "SecurityGroupIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.UpdateCluster`

Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.

> Body parameter

```json
{
  "ClusterName": {},
  "Description": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "NotificationTopicStatus": {},
  "ParameterGroupName": {},
  "SecurityGroupIds": {}
}
```

<h3 id="updatecluster-parameters">Parameters</h3>

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
|body|body|[UpdateClusterRequest](#schemaupdateclusterrequest)|true|none|
|» ClusterName|body|object|true|none|
|» Description|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» NotificationTopicArn|body|object|false|none|
|» NotificationTopicStatus|body|object|false|none|
|» ParameterGroupName|body|object|false|none|
|» SecurityGroupIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.UpdateCluster|

> Example responses

> 200 Response

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
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

<h3 id="updatecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterResponse](#schemaupdateclusterresponse)|
|480|480|InvalidClusterStateFault|[InvalidClusterStateFault](#schemainvalidclusterstatefault)|
|481|481|ClusterNotFoundFault|[ClusterNotFoundFault](#schemaclusternotfoundfault)|
|482|482|InvalidParameterGroupStateFault|[InvalidParameterGroupStateFault](#schemainvalidparametergroupstatefault)|
|483|483|ParameterGroupNotFoundFault|[ParameterGroupNotFoundFault](#schemaparametergroupnotfoundfault)|
|484|484|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|485|485|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|486|486|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateParameterGroup

<a id="opIdUpdateParameterGroup"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.UpdateParameterGroup' \
  -d '{
    "ParameterGroupName": {},
    "ParameterNameValues": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup`

Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

> Body parameter

```json
{
  "ParameterGroupName": {},
  "ParameterNameValues": {}
}
```

<h3 id="updateparametergroup-parameters">Parameters</h3>

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
|body|body|[UpdateParameterGroupRequest](#schemaupdateparametergrouprequest)|true|none|
|» ParameterGroupName|body|object|true|none|
|» ParameterNameValues|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.UpdateParameterGroup|

> Example responses

> 200 Response

```json
{
  "ParameterGroup": {
    "ParameterGroupName": {},
    "Description": {}
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

<h3 id="updateparametergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateParameterGroupResponse](#schemaupdateparametergroupresponse)|
|480|480|InvalidParameterGroupStateFault|[InvalidParameterGroupStateFault](#schemainvalidparametergroupstatefault)|
|481|481|ParameterGroupNotFoundFault|[ParameterGroupNotFoundFault](#schemaparametergroupnotfoundfault)|
|482|482|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|
|483|483|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSubnetGroup

<a id="opIdUpdateSubnetGroup"></a>

> Code samples

```bash
curl 'https://dax.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDAXV3.UpdateSubnetGroup' \
  -d '{
    "SubnetGroupName": {},
    "Description": {},
    "SubnetIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup`

Modifies an existing subnet group.

> Body parameter

```json
{
  "SubnetGroupName": {},
  "Description": {},
  "SubnetIds": {}
}
```

<h3 id="updatesubnetgroup-parameters">Parameters</h3>

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
|body|body|[UpdateSubnetGroupRequest](#schemaupdatesubnetgrouprequest)|true|none|
|» SubnetGroupName|body|object|true|none|
|» Description|body|object|false|none|
|» SubnetIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDAXV3.UpdateSubnetGroup|

> Example responses

> 200 Response

```json
{
  "SubnetGroup": {
    "SubnetGroupName": {},
    "Description": {},
    "VpcId": {},
    "Subnets": {}
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

<h3 id="updatesubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSubnetGroupResponse](#schemaupdatesubnetgroupresponse)|
|480|480|SubnetGroupNotFoundFault|[SubnetGroupNotFoundFault](#schemasubnetgroupnotfoundfault)|
|481|481|SubnetQuotaExceededFault|[SubnetQuotaExceededFault](#schemasubnetquotaexceededfault)|
|482|482|SubnetInUse|[SubnetInUse](#schemasubnetinuse)|
|483|483|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|484|484|ServiceLinkedRoleNotFoundFault|[ServiceLinkedRoleNotFoundFault](#schemaservicelinkedrolenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateClusterResponse">CreateClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterresponse"></a>
<a id="schema_CreateClusterResponse"></a>
<a id="tocScreateclusterresponse"></a>
<a id="tocscreateclusterresponse"></a>

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "ClusterName": {},
  "NodeType": {},
  "Description": {},
  "ReplicationFactor": {},
  "AvailabilityZones": {},
  "SubnetGroupName": {},
  "SecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "IamRoleArn": {},
  "ParameterGroupName": {},
  "Tags": {},
  "SSESpecification": {
    "Enabled": {}
  },
  "ClusterEndpointEncryptionType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|true|none|none|
|NodeType|object|true|none|none|
|Description|object|false|none|none|
|ReplicationFactor|object|true|none|none|
|AvailabilityZones|object|false|none|none|
|SubnetGroupName|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|NotificationTopicArn|object|false|none|none|
|IamRoleArn|object|true|none|none|
|ParameterGroupName|object|false|none|none|
|Tags|object|false|none|none|
|SSESpecification|object|false|none|none|
|ClusterEndpointEncryptionType|object|false|none|none|

<h2 id="tocS_ClusterAlreadyExistsFault">ClusterAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemaclusteralreadyexistsfault"></a>
<a id="schema_ClusterAlreadyExistsFault"></a>
<a id="tocSclusteralreadyexistsfault"></a>
<a id="tocsclusteralreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_InvalidClusterStateFault">InvalidClusterStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclusterstatefault"></a>
<a id="schema_InvalidClusterStateFault"></a>
<a id="tocSinvalidclusterstatefault"></a>
<a id="tocsinvalidclusterstatefault"></a>

```json
null
```

<h2 id="tocS_InsufficientClusterCapacityFault">InsufficientClusterCapacityFault</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientclustercapacityfault"></a>
<a id="schema_InsufficientClusterCapacityFault"></a>
<a id="tocSinsufficientclustercapacityfault"></a>
<a id="tocsinsufficientclustercapacityfault"></a>

```json
null
```

<h2 id="tocS_SubnetGroupNotFoundFault">SubnetGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemasubnetgroupnotfoundfault"></a>
<a id="schema_SubnetGroupNotFoundFault"></a>
<a id="tocSsubnetgroupnotfoundfault"></a>
<a id="tocssubnetgroupnotfoundfault"></a>

```json
null
```

<h2 id="tocS_InvalidParameterGroupStateFault">InvalidParameterGroupStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametergroupstatefault"></a>
<a id="schema_InvalidParameterGroupStateFault"></a>
<a id="tocSinvalidparametergroupstatefault"></a>
<a id="tocsinvalidparametergroupstatefault"></a>

```json
null
```

<h2 id="tocS_ParameterGroupNotFoundFault">ParameterGroupNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaparametergroupnotfoundfault"></a>
<a id="schema_ParameterGroupNotFoundFault"></a>
<a id="tocSparametergroupnotfoundfault"></a>
<a id="tocsparametergroupnotfoundfault"></a>

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

<h2 id="tocS_TagQuotaPerResourceExceeded">TagQuotaPerResourceExceeded</h2>
<!-- backwards compatibility -->
<a id="schematagquotaperresourceexceeded"></a>
<a id="schema_TagQuotaPerResourceExceeded"></a>
<a id="tocStagquotaperresourceexceeded"></a>
<a id="tocstagquotaperresourceexceeded"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateParameterGroupResponse">CreateParameterGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateparametergroupresponse"></a>
<a id="schema_CreateParameterGroupResponse"></a>
<a id="tocScreateparametergroupresponse"></a>
<a id="tocscreateparametergroupresponse"></a>

```json
{
  "ParameterGroup": {
    "ParameterGroupName": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroup|object|false|none|none|

<h2 id="tocS_CreateParameterGroupRequest">CreateParameterGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateparametergrouprequest"></a>
<a id="schema_CreateParameterGroupRequest"></a>
<a id="tocScreateparametergrouprequest"></a>
<a id="tocscreateparametergrouprequest"></a>

```json
{
  "ParameterGroupName": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroupName|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ParameterGroupQuotaExceededFault">ParameterGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemaparametergroupquotaexceededfault"></a>
<a id="schema_ParameterGroupQuotaExceededFault"></a>
<a id="tocSparametergroupquotaexceededfault"></a>
<a id="tocsparametergroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_ParameterGroupAlreadyExistsFault">ParameterGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemaparametergroupalreadyexistsfault"></a>
<a id="schema_ParameterGroupAlreadyExistsFault"></a>
<a id="tocSparametergroupalreadyexistsfault"></a>
<a id="tocsparametergroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_CreateSubnetGroupResponse">CreateSubnetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubnetgroupresponse"></a>
<a id="schema_CreateSubnetGroupResponse"></a>
<a id="tocScreatesubnetgroupresponse"></a>
<a id="tocscreatesubnetgroupresponse"></a>

```json
{
  "SubnetGroup": {
    "SubnetGroupName": {},
    "Description": {},
    "VpcId": {},
    "Subnets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetGroup|object|false|none|none|

<h2 id="tocS_CreateSubnetGroupRequest">CreateSubnetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubnetgrouprequest"></a>
<a id="schema_CreateSubnetGroupRequest"></a>
<a id="tocScreatesubnetgrouprequest"></a>
<a id="tocscreatesubnetgrouprequest"></a>

```json
{
  "SubnetGroupName": {},
  "Description": {},
  "SubnetIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetGroupName|object|true|none|none|
|Description|object|false|none|none|
|SubnetIds|object|true|none|none|

<h2 id="tocS_SubnetGroupAlreadyExistsFault">SubnetGroupAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemasubnetgroupalreadyexistsfault"></a>
<a id="schema_SubnetGroupAlreadyExistsFault"></a>
<a id="tocSsubnetgroupalreadyexistsfault"></a>
<a id="tocssubnetgroupalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_SubnetGroupQuotaExceededFault">SubnetGroupQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemasubnetgroupquotaexceededfault"></a>
<a id="schema_SubnetGroupQuotaExceededFault"></a>
<a id="tocSsubnetgroupquotaexceededfault"></a>
<a id="tocssubnetgroupquotaexceededfault"></a>

```json
null
```

<h2 id="tocS_SubnetQuotaExceededFault">SubnetQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemasubnetquotaexceededfault"></a>
<a id="schema_SubnetQuotaExceededFault"></a>
<a id="tocSsubnetquotaexceededfault"></a>
<a id="tocssubnetquotaexceededfault"></a>

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

<h2 id="tocS_DecreaseReplicationFactorResponse">DecreaseReplicationFactorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadecreasereplicationfactorresponse"></a>
<a id="schema_DecreaseReplicationFactorResponse"></a>
<a id="tocSdecreasereplicationfactorresponse"></a>
<a id="tocsdecreasereplicationfactorresponse"></a>

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_DecreaseReplicationFactorRequest">DecreaseReplicationFactorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadecreasereplicationfactorrequest"></a>
<a id="schema_DecreaseReplicationFactorRequest"></a>
<a id="tocSdecreasereplicationfactorrequest"></a>
<a id="tocsdecreasereplicationfactorrequest"></a>

```json
{
  "ClusterName": {},
  "NewReplicationFactor": {},
  "AvailabilityZones": {},
  "NodeIdsToRemove": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|true|none|none|
|NewReplicationFactor|object|true|none|none|
|AvailabilityZones|object|false|none|none|
|NodeIdsToRemove|object|false|none|none|

<h2 id="tocS_ClusterNotFoundFault">ClusterNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaclusternotfoundfault"></a>
<a id="schema_ClusterNotFoundFault"></a>
<a id="tocSclusternotfoundfault"></a>
<a id="tocsclusternotfoundfault"></a>

```json
null
```

<h2 id="tocS_NodeNotFoundFault">NodeNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemanodenotfoundfault"></a>
<a id="schema_NodeNotFoundFault"></a>
<a id="tocSnodenotfoundfault"></a>
<a id="tocsnodenotfoundfault"></a>

```json
null
```

<h2 id="tocS_DeleteClusterResponse">DeleteClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterresponse"></a>
<a id="schema_DeleteClusterResponse"></a>
<a id="tocSdeleteclusterresponse"></a>
<a id="tocsdeleteclusterresponse"></a>

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_DeleteClusterRequest">DeleteClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterrequest"></a>
<a id="schema_DeleteClusterRequest"></a>
<a id="tocSdeleteclusterrequest"></a>
<a id="tocsdeleteclusterrequest"></a>

```json
{
  "ClusterName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|true|none|none|

<h2 id="tocS_DeleteParameterGroupResponse">DeleteParameterGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparametergroupresponse"></a>
<a id="schema_DeleteParameterGroupResponse"></a>
<a id="tocSdeleteparametergroupresponse"></a>
<a id="tocsdeleteparametergroupresponse"></a>

```json
{
  "DeletionMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeletionMessage|object|false|none|none|

<h2 id="tocS_DeleteParameterGroupRequest">DeleteParameterGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparametergrouprequest"></a>
<a id="schema_DeleteParameterGroupRequest"></a>
<a id="tocSdeleteparametergrouprequest"></a>
<a id="tocsdeleteparametergrouprequest"></a>

```json
{
  "ParameterGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroupName|object|true|none|none|

<h2 id="tocS_DeleteSubnetGroupResponse">DeleteSubnetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubnetgroupresponse"></a>
<a id="schema_DeleteSubnetGroupResponse"></a>
<a id="tocSdeletesubnetgroupresponse"></a>
<a id="tocsdeletesubnetgroupresponse"></a>

```json
{
  "DeletionMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeletionMessage|object|false|none|none|

<h2 id="tocS_DeleteSubnetGroupRequest">DeleteSubnetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubnetgrouprequest"></a>
<a id="schema_DeleteSubnetGroupRequest"></a>
<a id="tocSdeletesubnetgrouprequest"></a>
<a id="tocsdeletesubnetgrouprequest"></a>

```json
{
  "SubnetGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetGroupName|object|true|none|none|

<h2 id="tocS_SubnetGroupInUseFault">SubnetGroupInUseFault</h2>
<!-- backwards compatibility -->
<a id="schemasubnetgroupinusefault"></a>
<a id="schema_SubnetGroupInUseFault"></a>
<a id="tocSsubnetgroupinusefault"></a>
<a id="tocssubnetgroupinusefault"></a>

```json
null
```

<h2 id="tocS_DescribeClustersResponse">DescribeClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclustersresponse"></a>
<a id="schema_DescribeClustersResponse"></a>
<a id="tocSdescribeclustersresponse"></a>
<a id="tocsdescribeclustersresponse"></a>

```json
{
  "NextToken": {},
  "Clusters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Clusters|object|false|none|none|

<h2 id="tocS_DescribeClustersRequest">DescribeClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclustersrequest"></a>
<a id="schema_DescribeClustersRequest"></a>
<a id="tocSdescribeclustersrequest"></a>
<a id="tocsdescribeclustersrequest"></a>

```json
{
  "ClusterNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterNames|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDefaultParametersResponse">DescribeDefaultParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedefaultparametersresponse"></a>
<a id="schema_DescribeDefaultParametersResponse"></a>
<a id="tocSdescribedefaultparametersresponse"></a>
<a id="tocsdescribedefaultparametersresponse"></a>

```json
{
  "NextToken": {},
  "Parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_DescribeDefaultParametersRequest">DescribeDefaultParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedefaultparametersrequest"></a>
<a id="schema_DescribeDefaultParametersRequest"></a>
<a id="tocSdescribedefaultparametersrequest"></a>
<a id="tocsdescribedefaultparametersrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEventsResponse">DescribeEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsresponse"></a>
<a id="schema_DescribeEventsResponse"></a>
<a id="tocSdescribeeventsresponse"></a>
<a id="tocsdescribeeventsresponse"></a>

```json
{
  "NextToken": {},
  "Events": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Events|object|false|none|none|

<h2 id="tocS_DescribeEventsRequest">DescribeEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsrequest"></a>
<a id="schema_DescribeEventsRequest"></a>
<a id="tocSdescribeeventsrequest"></a>
<a id="tocsdescribeeventsrequest"></a>

```json
{
  "SourceName": {},
  "SourceType": {},
  "StartTime": {},
  "EndTime": {},
  "Duration": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceName|object|false|none|none|
|SourceType|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Duration|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeParameterGroupsResponse">DescribeParameterGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeparametergroupsresponse"></a>
<a id="schema_DescribeParameterGroupsResponse"></a>
<a id="tocSdescribeparametergroupsresponse"></a>
<a id="tocsdescribeparametergroupsresponse"></a>

```json
{
  "NextToken": {},
  "ParameterGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ParameterGroups|object|false|none|none|

<h2 id="tocS_DescribeParameterGroupsRequest">DescribeParameterGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeparametergroupsrequest"></a>
<a id="schema_DescribeParameterGroupsRequest"></a>
<a id="tocSdescribeparametergroupsrequest"></a>
<a id="tocsdescribeparametergroupsrequest"></a>

```json
{
  "ParameterGroupNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroupNames|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeParametersResponse">DescribeParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeparametersresponse"></a>
<a id="schema_DescribeParametersResponse"></a>
<a id="tocSdescribeparametersresponse"></a>
<a id="tocsdescribeparametersresponse"></a>

```json
{
  "NextToken": {},
  "Parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_DescribeParametersRequest">DescribeParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeparametersrequest"></a>
<a id="schema_DescribeParametersRequest"></a>
<a id="tocSdescribeparametersrequest"></a>
<a id="tocsdescribeparametersrequest"></a>

```json
{
  "ParameterGroupName": {},
  "Source": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroupName|object|true|none|none|
|Source|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSubnetGroupsResponse">DescribeSubnetGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubnetgroupsresponse"></a>
<a id="schema_DescribeSubnetGroupsResponse"></a>
<a id="tocSdescribesubnetgroupsresponse"></a>
<a id="tocsdescribesubnetgroupsresponse"></a>

```json
{
  "NextToken": {},
  "SubnetGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|SubnetGroups|object|false|none|none|

<h2 id="tocS_DescribeSubnetGroupsRequest">DescribeSubnetGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubnetgroupsrequest"></a>
<a id="schema_DescribeSubnetGroupsRequest"></a>
<a id="tocSdescribesubnetgroupsrequest"></a>
<a id="tocsdescribesubnetgroupsrequest"></a>

```json
{
  "SubnetGroupNames": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetGroupNames|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_IncreaseReplicationFactorResponse">IncreaseReplicationFactorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaincreasereplicationfactorresponse"></a>
<a id="schema_IncreaseReplicationFactorResponse"></a>
<a id="tocSincreasereplicationfactorresponse"></a>
<a id="tocsincreasereplicationfactorresponse"></a>

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_IncreaseReplicationFactorRequest">IncreaseReplicationFactorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaincreasereplicationfactorrequest"></a>
<a id="schema_IncreaseReplicationFactorRequest"></a>
<a id="tocSincreasereplicationfactorrequest"></a>
<a id="tocsincreasereplicationfactorrequest"></a>

```json
{
  "ClusterName": {},
  "NewReplicationFactor": {},
  "AvailabilityZones": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|true|none|none|
|NewReplicationFactor|object|true|none|none|
|AvailabilityZones|object|false|none|none|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsRequest">ListTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsrequest"></a>
<a id="schema_ListTagsRequest"></a>
<a id="tocSlisttagsrequest"></a>
<a id="tocslisttagsrequest"></a>

```json
{
  "ResourceName": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidARNFault">InvalidARNFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarnfault"></a>
<a id="schema_InvalidARNFault"></a>
<a id="tocSinvalidarnfault"></a>
<a id="tocsinvalidarnfault"></a>

```json
null
```

<h2 id="tocS_RebootNodeResponse">RebootNodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemarebootnoderesponse"></a>
<a id="schema_RebootNodeResponse"></a>
<a id="tocSrebootnoderesponse"></a>
<a id="tocsrebootnoderesponse"></a>

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_RebootNodeRequest">RebootNodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootnoderequest"></a>
<a id="schema_RebootNodeRequest"></a>
<a id="tocSrebootnoderequest"></a>
<a id="tocsrebootnoderequest"></a>

```json
{
  "ClusterName": {},
  "NodeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|true|none|none|
|NodeId|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

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

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

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

<h2 id="tocS_TagNotFoundFault">TagNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schematagnotfoundfault"></a>
<a id="schema_TagNotFoundFault"></a>
<a id="tocStagnotfoundfault"></a>
<a id="tocstagnotfoundfault"></a>

```json
null
```

<h2 id="tocS_UpdateClusterResponse">UpdateClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterresponse"></a>
<a id="schema_UpdateClusterResponse"></a>
<a id="tocSupdateclusterresponse"></a>
<a id="tocsupdateclusterresponse"></a>

```json
{
  "Cluster": {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cluster|object|false|none|none|

<h2 id="tocS_UpdateClusterRequest">UpdateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterrequest"></a>
<a id="schema_UpdateClusterRequest"></a>
<a id="tocSupdateclusterrequest"></a>
<a id="tocsupdateclusterrequest"></a>

```json
{
  "ClusterName": {},
  "Description": {},
  "PreferredMaintenanceWindow": {},
  "NotificationTopicArn": {},
  "NotificationTopicStatus": {},
  "ParameterGroupName": {},
  "SecurityGroupIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|true|none|none|
|Description|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|NotificationTopicArn|object|false|none|none|
|NotificationTopicStatus|object|false|none|none|
|ParameterGroupName|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_UpdateParameterGroupResponse">UpdateParameterGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparametergroupresponse"></a>
<a id="schema_UpdateParameterGroupResponse"></a>
<a id="tocSupdateparametergroupresponse"></a>
<a id="tocsupdateparametergroupresponse"></a>

```json
{
  "ParameterGroup": {
    "ParameterGroupName": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroup|object|false|none|none|

<h2 id="tocS_UpdateParameterGroupRequest">UpdateParameterGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparametergrouprequest"></a>
<a id="schema_UpdateParameterGroupRequest"></a>
<a id="tocSupdateparametergrouprequest"></a>
<a id="tocsupdateparametergrouprequest"></a>

```json
{
  "ParameterGroupName": {},
  "ParameterNameValues": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroupName|object|true|none|none|
|ParameterNameValues|object|true|none|none|

<h2 id="tocS_UpdateSubnetGroupResponse">UpdateSubnetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubnetgroupresponse"></a>
<a id="schema_UpdateSubnetGroupResponse"></a>
<a id="tocSupdatesubnetgroupresponse"></a>
<a id="tocsupdatesubnetgroupresponse"></a>

```json
{
  "SubnetGroup": {
    "SubnetGroupName": {},
    "Description": {},
    "VpcId": {},
    "Subnets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetGroup|object|false|none|none|

<h2 id="tocS_UpdateSubnetGroupRequest">UpdateSubnetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubnetgrouprequest"></a>
<a id="schema_UpdateSubnetGroupRequest"></a>
<a id="tocSupdatesubnetgrouprequest"></a>
<a id="tocsupdatesubnetgrouprequest"></a>

```json
{
  "SubnetGroupName": {},
  "Description": {},
  "SubnetIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetGroupName|object|true|none|none|
|Description|object|false|none|none|
|SubnetIds|object|false|none|none|

<h2 id="tocS_SubnetInUse">SubnetInUse</h2>
<!-- backwards compatibility -->
<a id="schemasubnetinuse"></a>
<a id="schema_SubnetInUse"></a>
<a id="tocSsubnetinuse"></a>
<a id="tocssubnetinuse"></a>

```json
null
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

<h2 id="tocS_AvailabilityZoneList">AvailabilityZoneList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzonelist"></a>
<a id="schema_AvailabilityZoneList"></a>
<a id="tocSavailabilityzonelist"></a>
<a id="tocsavailabilityzonelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ChangeType">ChangeType</h2>
<!-- backwards compatibility -->
<a id="schemachangetype"></a>
<a id="schema_ChangeType"></a>
<a id="tocSchangetype"></a>
<a id="tocschangetype"></a>

```json
"IMMEDIATE"
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
  "URL": {}
}
```

Represents the information required for client programs to connect to the endpoint for a DAX cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|
|Port|object|false|none|none|
|URL|object|false|none|none|

<h2 id="tocS_NodeIdentifierList">NodeIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemanodeidentifierlist"></a>
<a id="schema_NodeIdentifierList"></a>
<a id="tocSnodeidentifierlist"></a>
<a id="tocsnodeidentifierlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NodeList">NodeList</h2>
<!-- backwards compatibility -->
<a id="schemanodelist"></a>
<a id="schema_NodeList"></a>
<a id="tocSnodelist"></a>
<a id="tocsnodelist"></a>

```json
[
  {
    "NodeId": {},
    "Endpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeCreateTime": {},
    "AvailabilityZone": {},
    "NodeStatus": {},
    "ParameterGroupStatus": {}
  }
]
```

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

Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|
|TopicStatus|object|false|none|none|

<h2 id="tocS_SecurityGroupMembershipList">SecurityGroupMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupmembershiplist"></a>
<a id="schema_SecurityGroupMembershipList"></a>
<a id="tocSsecuritygroupmembershiplist"></a>
<a id="tocssecuritygroupmembershiplist"></a>

```json
[
  {
    "SecurityGroupIdentifier": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ParameterGroupStatus">ParameterGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemaparametergroupstatus"></a>
<a id="schema_ParameterGroupStatus"></a>
<a id="tocSparametergroupstatus"></a>
<a id="tocsparametergroupstatus"></a>

```json
{
  "ParameterGroupName": {},
  "ParameterApplyStatus": {},
  "NodeIdsToReboot": {}
}
```

The status of a parameter group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroupName|object|false|none|none|
|ParameterApplyStatus|object|false|none|none|
|NodeIdsToReboot|object|false|none|none|

<h2 id="tocS_SSEDescription">SSEDescription</h2>
<!-- backwards compatibility -->
<a id="schemassedescription"></a>
<a id="schema_SSEDescription"></a>
<a id="tocSssedescription"></a>
<a id="tocsssedescription"></a>

```json
{
  "Status": {}
}
```

The description of the server-side encryption status on the specified DAX cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_ClusterEndpointEncryptionType">ClusterEndpointEncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaclusterendpointencryptiontype"></a>
<a id="schema_ClusterEndpointEncryptionType"></a>
<a id="tocSclusterendpointencryptiontype"></a>
<a id="tocsclusterendpointencryptiontype"></a>

```json
"NONE"
```

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "ClusterName": {},
  "Description": {},
  "ClusterArn": {},
  "TotalNodes": {},
  "ActiveNodes": {},
  "NodeType": {},
  "Status": {},
  "ClusterDiscoveryEndpoint": {
    "Address": {},
    "Port": {},
    "URL": {}
  },
  "NodeIdsToRemove": {},
  "Nodes": {},
  "PreferredMaintenanceWindow": {},
  "NotificationConfiguration": {
    "TopicArn": {},
    "TopicStatus": {}
  },
  "SubnetGroup": {},
  "SecurityGroups": {},
  "IamRoleArn": {},
  "ParameterGroup": {
    "ParameterGroupName": {},
    "ParameterApplyStatus": {},
    "NodeIdsToReboot": {}
  },
  "SSEDescription": {
    "Status": {}
  },
  "ClusterEndpointEncryptionType": {}
}
```

Contains all of the attributes of a specific DAX cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|false|none|none|
|Description|object|false|none|none|
|ClusterArn|object|false|none|none|
|TotalNodes|object|false|none|none|
|ActiveNodes|object|false|none|none|
|NodeType|object|false|none|none|
|Status|object|false|none|none|
|ClusterDiscoveryEndpoint|object|false|none|none|
|NodeIdsToRemove|object|false|none|none|
|Nodes|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|NotificationConfiguration|object|false|none|none|
|SubnetGroup|object|false|none|none|
|SecurityGroups|object|false|none|none|
|IamRoleArn|object|false|none|none|
|ParameterGroup|object|false|none|none|
|SSEDescription|object|false|none|none|
|ClusterEndpointEncryptionType|object|false|none|none|

<h2 id="tocS_ClusterList">ClusterList</h2>
<!-- backwards compatibility -->
<a id="schemaclusterlist"></a>
<a id="schema_ClusterList"></a>
<a id="tocSclusterlist"></a>
<a id="tocsclusterlist"></a>

```json
[
  {
    "ClusterName": {},
    "Description": {},
    "ClusterArn": {},
    "TotalNodes": {},
    "ActiveNodes": {},
    "NodeType": {},
    "Status": {},
    "ClusterDiscoveryEndpoint": {
      "Address": {},
      "Port": {},
      "URL": {}
    },
    "NodeIdsToRemove": {},
    "Nodes": {},
    "PreferredMaintenanceWindow": {},
    "NotificationConfiguration": {
      "TopicArn": {},
      "TopicStatus": {}
    },
    "SubnetGroup": {},
    "SecurityGroups": {},
    "IamRoleArn": {},
    "ParameterGroup": {
      "ParameterGroupName": {},
      "ParameterApplyStatus": {},
      "NodeIdsToReboot": {}
    },
    "SSEDescription": {
      "Status": {}
    },
    "ClusterEndpointEncryptionType": {}
  }
]
```

<h2 id="tocS_ClusterNameList">ClusterNameList</h2>
<!-- backwards compatibility -->
<a id="schemaclusternamelist"></a>
<a id="schema_ClusterNameList"></a>
<a id="tocSclusternamelist"></a>
<a id="tocsclusternamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_SecurityGroupIdentifierList">SecurityGroupIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidentifierlist"></a>
<a id="schema_SecurityGroupIdentifierList"></a>
<a id="tocSsecuritygroupidentifierlist"></a>
<a id="tocssecuritygroupidentifierlist"></a>

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

<h2 id="tocS_SSESpecification">SSESpecification</h2>
<!-- backwards compatibility -->
<a id="schemassespecification"></a>
<a id="schema_SSESpecification"></a>
<a id="tocSssespecification"></a>
<a id="tocsssespecification"></a>

```json
{
  "Enabled": {}
}
```

Represents the settings used to enable server-side encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|

<h2 id="tocS_ParameterGroup">ParameterGroup</h2>
<!-- backwards compatibility -->
<a id="schemaparametergroup"></a>
<a id="schema_ParameterGroup"></a>
<a id="tocSparametergroup"></a>
<a id="tocsparametergroup"></a>

```json
{
  "ParameterGroupName": {},
  "Description": {}
}
```

A named set of parameters that are applied to all of the nodes in a DAX cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterGroupName|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_SubnetIdentifierList">SubnetIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidentifierlist"></a>
<a id="schema_SubnetIdentifierList"></a>
<a id="tocSsubnetidentifierlist"></a>
<a id="tocssubnetidentifierlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetGroup">SubnetGroup</h2>
<!-- backwards compatibility -->
<a id="schemasubnetgroup"></a>
<a id="schema_SubnetGroup"></a>
<a id="tocSsubnetgroup"></a>
<a id="tocssubnetgroup"></a>

```json
{
  "SubnetGroupName": {},
  "Description": {},
  "VpcId": {},
  "Subnets": {}
}
```

<p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetGroupName|object|false|none|none|
|Description|object|false|none|none|
|VpcId|object|false|none|none|
|Subnets|object|false|none|none|

<h2 id="tocS_ParameterList">ParameterList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterlist"></a>
<a id="schema_ParameterList"></a>
<a id="tocSparameterlist"></a>
<a id="tocsparameterlist"></a>

```json
[
  {
    "ParameterName": {},
    "ParameterType": {},
    "ParameterValue": {},
    "NodeTypeSpecificValues": {},
    "Description": {},
    "Source": {},
    "DataType": {},
    "AllowedValues": {},
    "IsModifiable": {},
    "ChangeType": {}
  }
]
```

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"CLUSTER"
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

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
[
  {
    "SourceName": {},
    "SourceType": {},
    "Message": {},
    "Date": {}
  }
]
```

<h2 id="tocS_ParameterGroupNameList">ParameterGroupNameList</h2>
<!-- backwards compatibility -->
<a id="schemaparametergroupnamelist"></a>
<a id="schema_ParameterGroupNameList"></a>
<a id="tocSparametergroupnamelist"></a>
<a id="tocsparametergroupnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ParameterGroupList">ParameterGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaparametergrouplist"></a>
<a id="schema_ParameterGroupList"></a>
<a id="tocSparametergrouplist"></a>
<a id="tocsparametergrouplist"></a>

```json
[
  {
    "ParameterGroupName": {},
    "Description": {}
  }
]
```

<h2 id="tocS_SubnetGroupNameList">SubnetGroupNameList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetgroupnamelist"></a>
<a id="schema_SubnetGroupNameList"></a>
<a id="tocSsubnetgroupnamelist"></a>
<a id="tocssubnetgroupnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetGroupList">SubnetGroupList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetgrouplist"></a>
<a id="schema_SubnetGroupList"></a>
<a id="tocSsubnetgrouplist"></a>
<a id="tocssubnetgrouplist"></a>

```json
[
  {
    "SubnetGroupName": {},
    "Description": {},
    "VpcId": {},
    "Subnets": {}
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
  "SourceName": {},
  "SourceType": {},
  "Message": {},
  "Date": {}
}
```

Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceName|object|false|none|none|
|SourceType|object|false|none|none|
|Message|object|false|none|none|
|Date|object|false|none|none|

<h2 id="tocS_IsModifiable">IsModifiable</h2>
<!-- backwards compatibility -->
<a id="schemaismodifiable"></a>
<a id="schema_IsModifiable"></a>
<a id="tocSismodifiable"></a>
<a id="tocsismodifiable"></a>

```json
"TRUE"
```

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

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "NodeId": {},
  "Endpoint": {
    "Address": {},
    "Port": {},
    "URL": {}
  },
  "NodeCreateTime": {},
  "AvailabilityZone": {},
  "NodeStatus": {},
  "ParameterGroupStatus": {}
}
```

Represents an individual node within a DAX cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeId|object|false|none|none|
|Endpoint|object|false|none|none|
|NodeCreateTime|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|NodeStatus|object|false|none|none|
|ParameterGroupStatus|object|false|none|none|

<h2 id="tocS_NodeTypeSpecificValue">NodeTypeSpecificValue</h2>
<!-- backwards compatibility -->
<a id="schemanodetypespecificvalue"></a>
<a id="schema_NodeTypeSpecificValue"></a>
<a id="tocSnodetypespecificvalue"></a>
<a id="tocsnodetypespecificvalue"></a>

```json
{
  "NodeType": {},
  "Value": {}
}
```

Represents a parameter value that is applicable to a particular node type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NodeType|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_NodeTypeSpecificValueList">NodeTypeSpecificValueList</h2>
<!-- backwards compatibility -->
<a id="schemanodetypespecificvaluelist"></a>
<a id="schema_NodeTypeSpecificValueList"></a>
<a id="tocSnodetypespecificvaluelist"></a>
<a id="tocsnodetypespecificvaluelist"></a>

```json
[
  {
    "NodeType": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ParameterType">ParameterType</h2>
<!-- backwards compatibility -->
<a id="schemaparametertype"></a>
<a id="schema_ParameterType"></a>
<a id="tocSparametertype"></a>
<a id="tocsparametertype"></a>

```json
"DEFAULT"
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
  "ParameterType": {},
  "ParameterValue": {},
  "NodeTypeSpecificValues": {},
  "Description": {},
  "Source": {},
  "DataType": {},
  "AllowedValues": {},
  "IsModifiable": {},
  "ChangeType": {}
}
```

Describes an individual setting that controls some aspect of DAX behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|false|none|none|
|ParameterType|object|false|none|none|
|ParameterValue|object|false|none|none|
|NodeTypeSpecificValues|object|false|none|none|
|Description|object|false|none|none|
|Source|object|false|none|none|
|DataType|object|false|none|none|
|AllowedValues|object|false|none|none|
|IsModifiable|object|false|none|none|
|ChangeType|object|false|none|none|

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

An individual DAX parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|false|none|none|
|ParameterValue|object|false|none|none|

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

<h2 id="tocS_SSEStatus">SSEStatus</h2>
<!-- backwards compatibility -->
<a id="schemassestatus"></a>
<a id="schema_SSEStatus"></a>
<a id="tocSssestatus"></a>
<a id="tocsssestatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_SSEEnabled">SSEEnabled</h2>
<!-- backwards compatibility -->
<a id="schemasseenabled"></a>
<a id="schema_SSEEnabled"></a>
<a id="tocSsseenabled"></a>
<a id="tocssseenabled"></a>

```json
true
```

<h2 id="tocS_SecurityGroupMembership">SecurityGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupmembership"></a>
<a id="schema_SecurityGroupMembership"></a>
<a id="tocSsecuritygroupmembership"></a>
<a id="tocssecuritygroupmembership"></a>

```json
{
  "SecurityGroupIdentifier": {},
  "Status": {}
}
```

An individual VPC security group and its status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroupIdentifier|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_Subnet">Subnet</h2>
<!-- backwards compatibility -->
<a id="schemasubnet"></a>
<a id="schema_Subnet"></a>
<a id="tocSsubnet"></a>
<a id="tocssubnet"></a>

```json
{
  "SubnetIdentifier": {},
  "SubnetAvailabilityZone": {}
}
```

Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIdentifier|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|

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
    "SubnetAvailabilityZone": {}
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

<p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
