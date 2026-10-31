<h1 id="amazonmq">AmazonMQ v2017-11-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.

Base URLs:

* <a href="http://mq.us-east-1.amazonaws.com">http://mq.us-east-1.amazonaws.com</a> - The AmazonMQ multi-region endpoint

* <a href="https://mq.us-east-1.amazonaws.com">https://mq.us-east-1.amazonaws.com</a> - The AmazonMQ multi-region endpoint

* <a href="http://mq.cn-north-1.amazonaws.com.cn">http://mq.cn-north-1.amazonaws.com.cn</a> - The AmazonMQ endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mq.cn-north-1.amazonaws.com.cn">https://mq.cn-north-1.amazonaws.com.cn</a> - The AmazonMQ endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mq/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazonmq-default">Default</h1>

## ListBrokers

<a id="opIdListBrokers"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/brokers`

Returns a list of all brokers.

<h3 id="listbrokers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.|
|nextToken|query|string|false|The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.|
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
  "BrokerSummaries": {},
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

<h3 id="listbrokers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBrokersResponse](#schemalistbrokersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBroker

<a id="opIdCreateBroker"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authenticationStrategy": "SIMPLE",
    "autoMinorVersionUpgrade": true,
    "brokerName": "string",
    "configuration": {
      "Id": {},
      "Revision": {}
    },
    "creatorRequestId": "string",
    "deploymentMode": "SINGLE_INSTANCE",
    "encryptionOptions": {
      "KmsKeyId": {},
      "UseAwsOwnedKey": {}
    },
    "engineType": "ACTIVEMQ",
    "engineVersion": "string",
    "hostInstanceType": "string",
    "ldapServerMetadata": {
      "Hosts": {},
      "RoleBase": {},
      "RoleName": {},
      "RoleSearchMatching": {},
      "RoleSearchSubtree": {},
      "ServiceAccountPassword": {},
      "ServiceAccountUsername": {},
      "UserBase": {},
      "UserRoleName": {},
      "UserSearchMatching": {},
      "UserSearchSubtree": {}
    },
    "logs": {
      "Audit": {},
      "General": {}
    },
    "maintenanceWindowStartTime": {
      "DayOfWeek": {},
      "TimeOfDay": {},
      "TimeZone": {}
    },
    "publiclyAccessible": true,
    "securityGroups": [
      "string"
    ],
    "storageType": "EBS",
    "subnetIds": [
      "string"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "users": [
      {
        "ConsoleAccess": {},
        "Groups": {},
        "Password": {},
        "Username": {},
        "ReplicationUser": {}
      }
    ],
    "dataReplicationMode": "NONE",
    "dataReplicationPrimaryBrokerArn": "string"
  }'
```

`POST /v1/brokers`

<p>Creates a broker. Note: This API is asynchronous.</p> <p>To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy.</p> <ul><li><p>ec2:CreateNetworkInterface</p> <p>This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account.</p></li> <li><p>ec2:CreateNetworkInterfacePermission</p> <p>This permission is required to attach the ENI to the broker instance.</p></li> <li><p>ec2:DeleteNetworkInterface</p></li> <li><p>ec2:DeleteNetworkInterfacePermission</p></li> <li><p>ec2:DetachNetworkInterface</p></li> <li><p>ec2:DescribeInternetGateways</p></li> <li><p>ec2:DescribeNetworkInterfaces</p></li> <li><p>ec2:DescribeNetworkInterfacePermissions</p></li> <li><p>ec2:DescribeRouteTables</p></li> <li><p>ec2:DescribeSecurityGroups</p></li> <li><p>ec2:DescribeSubnets</p></li> <li><p>ec2:DescribeVpcs</p></li></ul> <p>For more information, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/amazon-mq-setting-up.html#create-iam-user">Create an IAM User and Get Your Amazon Web Services Credentials</a> and <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/connecting-to-amazon-mq.html#never-modify-delete-elastic-network-interface">Never Modify or Delete the Amazon MQ Elastic Network Interface</a> in the <i>Amazon MQ Developer Guide</i>.</p>

> Body parameter

```json
{
  "authenticationStrategy": "SIMPLE",
  "autoMinorVersionUpgrade": true,
  "brokerName": "string",
  "configuration": {
    "Id": {},
    "Revision": {}
  },
  "creatorRequestId": "string",
  "deploymentMode": "SINGLE_INSTANCE",
  "encryptionOptions": {
    "KmsKeyId": {},
    "UseAwsOwnedKey": {}
  },
  "engineType": "ACTIVEMQ",
  "engineVersion": "string",
  "hostInstanceType": "string",
  "ldapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountPassword": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "logs": {
    "Audit": {},
    "General": {}
  },
  "maintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "publiclyAccessible": true,
  "securityGroups": [
    "string"
  ],
  "storageType": "EBS",
  "subnetIds": [
    "string"
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "users": [
    {
      "ConsoleAccess": {},
      "Groups": {},
      "Password": {},
      "Username": {},
      "ReplicationUser": {}
    }
  ],
  "dataReplicationMode": "NONE",
  "dataReplicationPrimaryBrokerArn": "string"
}
```

<h3 id="createbroker-parameters">Parameters</h3>

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
|» authenticationStrategy|body|string|false|Optional. The authentication strategy used to secure the broker. The default is SIMPLE.|
|» autoMinorVersionUpgrade|body|boolean|true|Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. Set to true by default, if no value is specified.|
|» brokerName|body|string|true|<p>Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.</p></important>|
|» configuration|body|object|false|A list of information about the configuration.|
|» » Id|body|object|false|none|
|» » Revision|body|object|false|none|
|» creatorRequestId|body|string|false|<p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.</p> <note><p>We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p></note>|
|» deploymentMode|body|string|true|The broker's deployment mode.|
|» encryptionOptions|body|object|false|Encryption options for the broker.|
|» » KmsKeyId|body|object|false|none|
|» » UseAwsOwnedKey|body|object|false|none|
|» engineType|body|string|true|The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.|
|» engineVersion|body|string|true|Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.|
|» hostInstanceType|body|string|true|Required. The broker's instance type.|
|» ldapServerMetadata|body|object|false|<p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>|
|» » Hosts|body|object|false|none|
|» » RoleBase|body|object|false|none|
|» » RoleName|body|object|false|none|
|» » RoleSearchMatching|body|object|false|none|
|» » RoleSearchSubtree|body|object|false|none|
|» » ServiceAccountPassword|body|object|false|none|
|» » ServiceAccountUsername|body|object|false|none|
|» » UserBase|body|object|false|none|
|» » UserRoleName|body|object|false|none|
|» » UserSearchMatching|body|object|false|none|
|» » UserSearchSubtree|body|object|false|none|
|» logs|body|object|false|The list of information about logs to be enabled for the specified broker.|
|» » Audit|body|object|false|none|
|» » General|body|object|false|none|
|» maintenanceWindowStartTime|body|object|false|The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.|
|» » DayOfWeek|body|object|false|none|
|» » TimeOfDay|body|object|false|none|
|» » TimeZone|body|object|false|none|
|» publiclyAccessible|body|boolean|true|Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.|
|» securityGroups|body|[[__string](#schema__string)]|false|The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.|
|» storageType|body|string|false|<p>The broker's storage type.</p> <important><p>EFS is not supported for RabbitMQ engine type.</p></important>|
|» subnetIds|body|[[__string](#schema__string)]|false|<p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.</p> <important><p>If you specify subnets in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html">shared VPC</a> for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account.</p></important>|
|» tags|body|object|false|Create tags when creating the broker.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» users|body|[[User](#schemauser)]|true|The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.|
|» dataReplicationMode|body|string|false|Specifies whether a broker is a part of a data replication pair.|
|» dataReplicationPrimaryBrokerArn|body|string|false|The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationStrategy|SIMPLE|
|» authenticationStrategy|LDAP|
|» deploymentMode|SINGLE_INSTANCE|
|» deploymentMode|ACTIVE_STANDBY_MULTI_AZ|
|» deploymentMode|CLUSTER_MULTI_AZ|
|» engineType|ACTIVEMQ|
|» engineType|RABBITMQ|
|» storageType|EBS|
|» storageType|EFS|
|» dataReplicationMode|NONE|
|» dataReplicationMode|CRDR|

> Example responses

> 200 Response

```json
{
  "BrokerArn": {},
  "BrokerId": {}
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

<h3 id="createbroker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBrokerResponse](#schemacreatebrokerresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigurations

<a id="opIdListConfigurations"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/configurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations`

Returns a list of all configurations.

<h3 id="listconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.|
|nextToken|query|string|false|The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.|
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
  "Configurations": {},
  "MaxResults": {},
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

<h3 id="listconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationsResponse](#schemalistconfigurationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConfiguration

<a id="opIdCreateConfiguration"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/configurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authenticationStrategy": "SIMPLE",
    "engineType": "ACTIVEMQ",
    "engineVersion": "string",
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/configurations`

Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).

> Body parameter

```json
{
  "authenticationStrategy": "SIMPLE",
  "engineType": "ACTIVEMQ",
  "engineVersion": "string",
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createconfiguration-parameters">Parameters</h3>

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
|» authenticationStrategy|body|string|false|Optional. The authentication strategy used to secure the broker. The default is SIMPLE.|
|» engineType|body|string|true|The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.|
|» engineVersion|body|string|true|Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.|
|» name|body|string|true|Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.|
|» tags|body|object|false|Create tags when creating the configuration.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationStrategy|SIMPLE|
|» authenticationStrategy|LDAP|
|» engineType|ACTIVEMQ|
|» engineType|RABBITMQ|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "AuthenticationStrategy": {},
  "Created": {},
  "Id": {},
  "LatestRevision": {
    "Created": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {}
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

<h3 id="createconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationResponse](#schemacreateconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/tags/{resource-arn}`

Lists tags for a resource.

<h3 id="listtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) of the resource tag.|
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

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResponse](#schemalisttagsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTags

<a id="opIdCreateTags"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/tags/{resource-arn}`

Add a tag to a resource.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) of the resource tag.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|false|The key-value pair for the resource tag.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

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

<h3 id="createtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUser

<a id="opIdDescribeUser"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/brokers/{broker-id}/users/{username}`

Returns information about an ActiveMQ user.

<h3 id="describeuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
|username|path|string|true|The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.|
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
  "BrokerId": {},
  "ConsoleAccess": {},
  "Groups": {},
  "Pending": {
    "ConsoleAccess": {},
    "Groups": {},
    "PendingChange": {}
  },
  "Username": {},
  "ReplicationUser": {}
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

<h3 id="describeuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserResponse](#schemadescribeuserresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUser

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "consoleAccess": true,
    "groups": [
      "string"
    ],
    "password": "string",
    "replicationUser": true
  }'
```

`PUT /v1/brokers/{broker-id}/users/{username}`

Updates the information for an ActiveMQ user.

> Body parameter

```json
{
  "consoleAccess": true,
  "groups": [
    "string"
  ],
  "password": "string",
  "replicationUser": true
}
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
|username|path|string|true|The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» consoleAccess|body|boolean|false|Enables access to the the ActiveMQ Web Console for the ActiveMQ user.|
|» groups|body|[[__string](#schema__string)]|false|The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.|
|» password|body|string|false|The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).|
|» replicationUser|body|boolean|false|Defines whether the user is intended for data replication.|

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

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserResponse](#schemaupdateuserresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string/users/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "consoleAccess": true,
    "groups": [
      "string"
    ],
    "password": "string",
    "replicationUser": true
  }'
```

`POST /v1/brokers/{broker-id}/users/{username}`

<p>Creates an ActiveMQ user.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.</p></important>

> Body parameter

```json
{
  "consoleAccess": true,
  "groups": [
    "string"
  ],
  "password": "string",
  "replicationUser": true
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
|username|path|string|true|The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» consoleAccess|body|boolean|false|Enables access to the ActiveMQ Web Console for the ActiveMQ user.|
|» groups|body|[[__string](#schema__string)]|false|The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.|
|» password|body|string|true|Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).|
|» replicationUser|body|boolean|false|Defines if this user is intended for CRDR replication purposes.|

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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/brokers/{broker-id}/users/{username}`

Deletes an ActiveMQ user.

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
|username|path|string|true|The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.|
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

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserResponse](#schemadeleteuserresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBroker

<a id="opIdDescribeBroker"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/brokers/{broker-id}`

Returns information about the specified broker.

<h3 id="describebroker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
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
  "ActionsRequired": {},
  "AuthenticationStrategy": {},
  "AutoMinorVersionUpgrade": {},
  "BrokerArn": {},
  "BrokerId": {},
  "BrokerInstances": {},
  "BrokerName": {},
  "BrokerState": {},
  "Configurations": {
    "Current": {
      "Id": {},
      "Revision": {}
    },
    "History": {},
    "Pending": {
      "Id": {},
      "Revision": {}
    }
  },
  "Created": {},
  "DeploymentMode": {},
  "EncryptionOptions": {
    "KmsKeyId": {},
    "UseAwsOwnedKey": {}
  },
  "EngineType": {},
  "EngineVersion": {},
  "HostInstanceType": {},
  "LdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "Logs": {
    "Audit": {},
    "AuditLogGroup": {},
    "General": {},
    "GeneralLogGroup": {},
    "Pending": {
      "Audit": {},
      "General": {}
    }
  },
  "MaintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "PendingAuthenticationStrategy": {},
  "PendingEngineVersion": {},
  "PendingHostInstanceType": {},
  "PendingLdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "PendingSecurityGroups": {},
  "PubliclyAccessible": {},
  "SecurityGroups": {},
  "StorageType": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Users": {},
  "DataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "DataReplicationMode": {},
  "PendingDataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "PendingDataReplicationMode": {}
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

<h3 id="describebroker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBrokerResponse](#schemadescribebrokerresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBroker

<a id="opIdUpdateBroker"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authenticationStrategy": "SIMPLE",
    "autoMinorVersionUpgrade": true,
    "configuration": {
      "Id": {},
      "Revision": {}
    },
    "engineVersion": "string",
    "hostInstanceType": "string",
    "ldapServerMetadata": {
      "Hosts": {},
      "RoleBase": {},
      "RoleName": {},
      "RoleSearchMatching": {},
      "RoleSearchSubtree": {},
      "ServiceAccountPassword": {},
      "ServiceAccountUsername": {},
      "UserBase": {},
      "UserRoleName": {},
      "UserSearchMatching": {},
      "UserSearchSubtree": {}
    },
    "logs": {
      "Audit": {},
      "General": {}
    },
    "maintenanceWindowStartTime": {
      "DayOfWeek": {},
      "TimeOfDay": {},
      "TimeZone": {}
    },
    "securityGroups": [
      "string"
    ],
    "dataReplicationMode": "NONE"
  }'
```

`PUT /v1/brokers/{broker-id}`

Adds a pending configuration change to a broker.

> Body parameter

```json
{
  "authenticationStrategy": "SIMPLE",
  "autoMinorVersionUpgrade": true,
  "configuration": {
    "Id": {},
    "Revision": {}
  },
  "engineVersion": "string",
  "hostInstanceType": "string",
  "ldapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountPassword": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "logs": {
    "Audit": {},
    "General": {}
  },
  "maintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "securityGroups": [
    "string"
  ],
  "dataReplicationMode": "NONE"
}
```

<h3 id="updatebroker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» authenticationStrategy|body|string|false|Optional. The authentication strategy used to secure the broker. The default is SIMPLE.|
|» autoMinorVersionUpgrade|body|boolean|false|Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.|
|» configuration|body|object|false|A list of information about the configuration.|
|» » Id|body|object|false|none|
|» » Revision|body|object|false|none|
|» engineVersion|body|string|false|The broker engine version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.|
|» hostInstanceType|body|string|false|The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.|
|» ldapServerMetadata|body|object|false|<p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>|
|» » Hosts|body|object|false|none|
|» » RoleBase|body|object|false|none|
|» » RoleName|body|object|false|none|
|» » RoleSearchMatching|body|object|false|none|
|» » RoleSearchSubtree|body|object|false|none|
|» » ServiceAccountPassword|body|object|false|none|
|» » ServiceAccountUsername|body|object|false|none|
|» » UserBase|body|object|false|none|
|» » UserRoleName|body|object|false|none|
|» » UserSearchMatching|body|object|false|none|
|» » UserSearchSubtree|body|object|false|none|
|» logs|body|object|false|The list of information about logs to be enabled for the specified broker.|
|» » Audit|body|object|false|none|
|» » General|body|object|false|none|
|» maintenanceWindowStartTime|body|object|false|The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.|
|» » DayOfWeek|body|object|false|none|
|» » TimeOfDay|body|object|false|none|
|» » TimeZone|body|object|false|none|
|» securityGroups|body|[[__string](#schema__string)]|false|The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.|
|» dataReplicationMode|body|string|false|Specifies whether a broker is a part of a data replication pair.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationStrategy|SIMPLE|
|» authenticationStrategy|LDAP|
|» dataReplicationMode|NONE|
|» dataReplicationMode|CRDR|

> Example responses

> 200 Response

```json
{
  "AuthenticationStrategy": {},
  "AutoMinorVersionUpgrade": {},
  "BrokerId": {},
  "Configuration": {
    "Id": {},
    "Revision": {}
  },
  "EngineVersion": {},
  "HostInstanceType": {},
  "LdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "Logs": {
    "Audit": {},
    "General": {}
  },
  "MaintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "SecurityGroups": {},
  "DataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "DataReplicationMode": {},
  "PendingDataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "PendingDataReplicationMode": {}
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

<h3 id="updatebroker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBrokerResponse](#schemaupdatebrokerresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBroker

<a id="opIdDeleteBroker"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/brokers/{broker-id}`

Deletes a broker. Note: This API is asynchronous.

<h3 id="deletebroker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
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
  "BrokerId": {}
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

<h3 id="deletebroker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBrokerResponse](#schemadeletebrokerresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTags

<a id="opIdDeleteTags"></a>

> Code samples

```bash
curl 'https://mq.us-east-1.amazonaws.com/v1/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/tags/{resource-arn}#tagKeys`

Removes a tag from a resource.

<h3 id="deletetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) of the resource tag.|
|tagKeys|query|[[__string](#schema__string)]|true|An array of tag keys to delete|
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

<h3 id="deletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBrokerEngineTypes

<a id="opIdDescribeBrokerEngineTypes"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/broker-engine-types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/broker-engine-types`

Describe available engine types and versions.

<h3 id="describebrokerenginetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|engineType|query|string|false|Filter response by engine type.|
|maxResults|query|integer|false|The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.|
|nextToken|query|string|false|The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.|
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
  "BrokerEngineTypes": {},
  "MaxResults": {},
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

<h3 id="describebrokerenginetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBrokerEngineTypesResponse](#schemadescribebrokerenginetypesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBrokerInstanceOptions

<a id="opIdDescribeBrokerInstanceOptions"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/broker-instance-options \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/broker-instance-options`

Describe available broker instance options.

<h3 id="describebrokerinstanceoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|engineType|query|string|false|Filter response by engine type.|
|hostInstanceType|query|string|false|Filter response by host instance type.|
|maxResults|query|integer|false|The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.|
|nextToken|query|string|false|The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.|
|storageType|query|string|false|Filter response by storage type.|
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
  "BrokerInstanceOptions": {},
  "MaxResults": {},
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

<h3 id="describebrokerinstanceoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBrokerInstanceOptionsResponse](#schemadescribebrokerinstanceoptionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfiguration

<a id="opIdDescribeConfiguration"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/configurations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations/{configuration-id}`

Returns information about the specified configuration.

<h3 id="describeconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configuration-id|path|string|true|The unique ID that Amazon MQ generates for the configuration.|
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
  "Arn": {},
  "AuthenticationStrategy": {},
  "Created": {},
  "Description": {},
  "EngineType": {},
  "EngineVersion": {},
  "Id": {},
  "LatestRevision": {
    "Created": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
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

<h3 id="describeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationResponse](#schemadescribeconfigurationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConfiguration

<a id="opIdUpdateConfiguration"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/configurations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": "string",
    "description": "string"
  }'
```

`PUT /v1/configurations/{configuration-id}`

Updates the specified configuration.

> Body parameter

```json
{
  "data": "string",
  "description": "string"
}
```

<h3 id="updateconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configuration-id|path|string|true|The unique ID that Amazon MQ generates for the configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» data|body|string|true|Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.|
|» description|body|string|false|The description of the configuration.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Created": {},
  "Id": {},
  "LatestRevision": {
    "Created": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "Warnings": {}
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

<h3 id="updateconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationResponse](#schemaupdateconfigurationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigurationRevision

<a id="opIdDescribeConfigurationRevision"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/configurations/string/revisions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations/{configuration-id}/revisions/{configuration-revision}`

Returns the specified configuration revision for the specified configuration.

<h3 id="describeconfigurationrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configuration-id|path|string|true|The unique ID that Amazon MQ generates for the configuration.|
|configuration-revision|path|string|true|The revision of the configuration.|
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
  "ConfigurationId": {},
  "Created": {},
  "Data": {},
  "Description": {}
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

<h3 id="describeconfigurationrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationRevisionResponse](#schemadescribeconfigurationrevisionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigurationRevisions

<a id="opIdListConfigurationRevisions"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/configurations/string/revisions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations/{configuration-id}/revisions`

Returns a list of all revisions for the specified configuration.

<h3 id="listconfigurationrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configuration-id|path|string|true|The unique ID that Amazon MQ generates for the configuration.|
|maxResults|query|integer|false|The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.|
|nextToken|query|string|false|The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.|
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
  "ConfigurationId": {},
  "MaxResults": {},
  "NextToken": {},
  "Revisions": {}
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

<h3 id="listconfigurationrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationRevisionsResponse](#schemalistconfigurationrevisionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/brokers/{broker-id}/users`

Returns a list of all ActiveMQ users.

<h3 id="listusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
|maxResults|query|integer|false|The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.|
|nextToken|query|string|false|The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.|
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
  "BrokerId": {},
  "MaxResults": {},
  "NextToken": {},
  "Users": {}
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

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Promote

<a id="opIdPromote"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string/promote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mode": "SWITCHOVER"
  }'
```

`POST /v1/brokers/{broker-id}/promote`

Promotes a data replication replica broker to the primary broker role.

> Body parameter

```json
{
  "mode": "SWITCHOVER"
}
```

<h3 id="promote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» mode|body|string|true|The Promote mode requested.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|SWITCHOVER|
|» mode|FAILOVER|

> Example responses

> 200 Response

```json
{
  "BrokerId": {}
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

<h3 id="promote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromoteResponse](#schemapromoteresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootBroker

<a id="opIdRebootBroker"></a>

> Code samples

```bash
curl https://mq.us-east-1.amazonaws.com/v1/brokers/string/reboot \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/brokers/{broker-id}/reboot`

Reboots a broker. Note: This API is asynchronous.

<h3 id="rebootbroker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broker-id|path|string|true|The unique ID that Amazon MQ generates for the broker.|
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

<h3 id="rebootbroker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootBrokerResponse](#schemarebootbrokerresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateBrokerResponse">CreateBrokerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebrokerresponse"></a>
<a id="schema_CreateBrokerResponse"></a>
<a id="tocScreatebrokerresponse"></a>
<a id="tocscreatebrokerresponse"></a>

```json
{
  "BrokerArn": {},
  "BrokerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerArn|object|false|none|none|
|BrokerId|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

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

<h2 id="tocS_DayOfWeek">DayOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadayofweek"></a>
<a id="schema_DayOfWeek"></a>
<a id="tocSdayofweek"></a>
<a id="tocsdayofweek"></a>

```json
"MONDAY"
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "ConsoleAccess": {},
  "Groups": {},
  "Password": {},
  "Username": {},
  "ReplicationUser": {}
}
```

A user associated with the broker. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsoleAccess|object|false|none|none|
|Groups|object|false|none|none|
|Password|object|true|none|none|
|Username|object|true|none|none|
|ReplicationUser|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

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

<h2 id="tocS_CreateConfigurationResponse">CreateConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationresponse"></a>
<a id="schema_CreateConfigurationResponse"></a>
<a id="tocScreateconfigurationresponse"></a>
<a id="tocscreateconfigurationresponse"></a>

```json
{
  "Arn": {},
  "AuthenticationStrategy": {},
  "Created": {},
  "Id": {},
  "LatestRevision": {
    "Created": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AuthenticationStrategy|object|false|none|none|
|Created|object|false|none|none|
|Id|object|false|none|none|
|LatestRevision|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteBrokerResponse">DeleteBrokerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebrokerresponse"></a>
<a id="schema_DeleteBrokerResponse"></a>
<a id="tocSdeletebrokerresponse"></a>
<a id="tocsdeletebrokerresponse"></a>

```json
{
  "BrokerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerId|object|false|none|none|

<h2 id="tocS_DeleteUserResponse">DeleteUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserresponse"></a>
<a id="schema_DeleteUserResponse"></a>
<a id="tocSdeleteuserresponse"></a>
<a id="tocsdeleteuserresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeBrokerResponse">DescribeBrokerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebrokerresponse"></a>
<a id="schema_DescribeBrokerResponse"></a>
<a id="tocSdescribebrokerresponse"></a>
<a id="tocsdescribebrokerresponse"></a>

```json
{
  "ActionsRequired": {},
  "AuthenticationStrategy": {},
  "AutoMinorVersionUpgrade": {},
  "BrokerArn": {},
  "BrokerId": {},
  "BrokerInstances": {},
  "BrokerName": {},
  "BrokerState": {},
  "Configurations": {
    "Current": {
      "Id": {},
      "Revision": {}
    },
    "History": {},
    "Pending": {
      "Id": {},
      "Revision": {}
    }
  },
  "Created": {},
  "DeploymentMode": {},
  "EncryptionOptions": {
    "KmsKeyId": {},
    "UseAwsOwnedKey": {}
  },
  "EngineType": {},
  "EngineVersion": {},
  "HostInstanceType": {},
  "LdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "Logs": {
    "Audit": {},
    "AuditLogGroup": {},
    "General": {},
    "GeneralLogGroup": {},
    "Pending": {
      "Audit": {},
      "General": {}
    }
  },
  "MaintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "PendingAuthenticationStrategy": {},
  "PendingEngineVersion": {},
  "PendingHostInstanceType": {},
  "PendingLdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "PendingSecurityGroups": {},
  "PubliclyAccessible": {},
  "SecurityGroups": {},
  "StorageType": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Users": {},
  "DataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "DataReplicationMode": {},
  "PendingDataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "PendingDataReplicationMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionsRequired|object|false|none|none|
|AuthenticationStrategy|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|BrokerArn|object|false|none|none|
|BrokerId|object|false|none|none|
|BrokerInstances|object|false|none|none|
|BrokerName|object|false|none|none|
|BrokerState|object|false|none|none|
|Configurations|object|false|none|none|
|Created|object|false|none|none|
|DeploymentMode|object|false|none|none|
|EncryptionOptions|object|false|none|none|
|EngineType|object|false|none|none|
|EngineVersion|object|false|none|none|
|HostInstanceType|object|false|none|none|
|LdapServerMetadata|object|false|none|none|
|Logs|object|false|none|none|
|MaintenanceWindowStartTime|object|false|none|none|
|PendingAuthenticationStrategy|object|false|none|none|
|PendingEngineVersion|object|false|none|none|
|PendingHostInstanceType|object|false|none|none|
|PendingLdapServerMetadata|object|false|none|none|
|PendingSecurityGroups|object|false|none|none|
|PubliclyAccessible|object|false|none|none|
|SecurityGroups|object|false|none|none|
|StorageType|object|false|none|none|
|SubnetIds|object|false|none|none|
|Tags|object|false|none|none|
|Users|object|false|none|none|
|DataReplicationMetadata|object|false|none|none|
|DataReplicationMode|object|false|none|none|
|PendingDataReplicationMetadata|object|false|none|none|
|PendingDataReplicationMode|object|false|none|none|

<h2 id="tocS_DescribeBrokerEngineTypesResponse">DescribeBrokerEngineTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebrokerenginetypesresponse"></a>
<a id="schema_DescribeBrokerEngineTypesResponse"></a>
<a id="tocSdescribebrokerenginetypesresponse"></a>
<a id="tocsdescribebrokerenginetypesresponse"></a>

```json
{
  "BrokerEngineTypes": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerEngineTypes|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeBrokerInstanceOptionsResponse">DescribeBrokerInstanceOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebrokerinstanceoptionsresponse"></a>
<a id="schema_DescribeBrokerInstanceOptionsResponse"></a>
<a id="tocSdescribebrokerinstanceoptionsresponse"></a>
<a id="tocsdescribebrokerinstanceoptionsresponse"></a>

```json
{
  "BrokerInstanceOptions": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerInstanceOptions|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeConfigurationResponse">DescribeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationresponse"></a>
<a id="schema_DescribeConfigurationResponse"></a>
<a id="tocSdescribeconfigurationresponse"></a>
<a id="tocsdescribeconfigurationresponse"></a>

```json
{
  "Arn": {},
  "AuthenticationStrategy": {},
  "Created": {},
  "Description": {},
  "EngineType": {},
  "EngineVersion": {},
  "Id": {},
  "LatestRevision": {
    "Created": {},
    "Description": {},
    "Revision": {}
  },
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
|Arn|object|false|none|none|
|AuthenticationStrategy|object|false|none|none|
|Created|object|false|none|none|
|Description|object|false|none|none|
|EngineType|object|false|none|none|
|EngineVersion|object|false|none|none|
|Id|object|false|none|none|
|LatestRevision|object|false|none|none|
|Name|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeConfigurationRevisionResponse">DescribeConfigurationRevisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrevisionresponse"></a>
<a id="schema_DescribeConfigurationRevisionResponse"></a>
<a id="tocSdescribeconfigurationrevisionresponse"></a>
<a id="tocsdescribeconfigurationrevisionresponse"></a>

```json
{
  "ConfigurationId": {},
  "Created": {},
  "Data": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationId|object|false|none|none|
|Created|object|false|none|none|
|Data|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_DescribeUserResponse">DescribeUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserresponse"></a>
<a id="schema_DescribeUserResponse"></a>
<a id="tocSdescribeuserresponse"></a>
<a id="tocsdescribeuserresponse"></a>

```json
{
  "BrokerId": {},
  "ConsoleAccess": {},
  "Groups": {},
  "Pending": {
    "ConsoleAccess": {},
    "Groups": {},
    "PendingChange": {}
  },
  "Username": {},
  "ReplicationUser": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerId|object|false|none|none|
|ConsoleAccess|object|false|none|none|
|Groups|object|false|none|none|
|Pending|object|false|none|none|
|Username|object|false|none|none|
|ReplicationUser|object|false|none|none|

<h2 id="tocS_ListBrokersResponse">ListBrokersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbrokersresponse"></a>
<a id="schema_ListBrokersResponse"></a>
<a id="tocSlistbrokersresponse"></a>
<a id="tocslistbrokersresponse"></a>

```json
{
  "BrokerSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConfigurationRevisionsResponse">ListConfigurationRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationrevisionsresponse"></a>
<a id="schema_ListConfigurationRevisionsResponse"></a>
<a id="tocSlistconfigurationrevisionsresponse"></a>
<a id="tocslistconfigurationrevisionsresponse"></a>

```json
{
  "ConfigurationId": {},
  "MaxResults": {},
  "NextToken": {},
  "Revisions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationId|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Revisions|object|false|none|none|

<h2 id="tocS_ListConfigurationsResponse">ListConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsresponse"></a>
<a id="schema_ListConfigurationsResponse"></a>
<a id="tocSlistconfigurationsresponse"></a>
<a id="tocslistconfigurationsresponse"></a>

```json
{
  "Configurations": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configurations|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

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

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "BrokerId": {},
  "MaxResults": {},
  "NextToken": {},
  "Users": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerId|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Users|object|false|none|none|

<h2 id="tocS_PromoteResponse">PromoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemapromoteresponse"></a>
<a id="schema_PromoteResponse"></a>
<a id="tocSpromoteresponse"></a>
<a id="tocspromoteresponse"></a>

```json
{
  "BrokerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerId|object|false|none|none|

<h2 id="tocS_RebootBrokerResponse">RebootBrokerResponse</h2>
<!-- backwards compatibility -->
<a id="schemarebootbrokerresponse"></a>
<a id="schema_RebootBrokerResponse"></a>
<a id="tocSrebootbrokerresponse"></a>
<a id="tocsrebootbrokerresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateBrokerResponse">UpdateBrokerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokerresponse"></a>
<a id="schema_UpdateBrokerResponse"></a>
<a id="tocSupdatebrokerresponse"></a>
<a id="tocsupdatebrokerresponse"></a>

```json
{
  "AuthenticationStrategy": {},
  "AutoMinorVersionUpgrade": {},
  "BrokerId": {},
  "Configuration": {
    "Id": {},
    "Revision": {}
  },
  "EngineVersion": {},
  "HostInstanceType": {},
  "LdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "Logs": {
    "Audit": {},
    "General": {}
  },
  "MaintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "SecurityGroups": {},
  "DataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "DataReplicationMode": {},
  "PendingDataReplicationMetadata": {
    "DataReplicationCounterpart": {
      "BrokerId": {},
      "Region": {}
    },
    "DataReplicationRole": {}
  },
  "PendingDataReplicationMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthenticationStrategy|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|BrokerId|object|false|none|none|
|Configuration|object|false|none|none|
|EngineVersion|object|false|none|none|
|HostInstanceType|object|false|none|none|
|LdapServerMetadata|object|false|none|none|
|Logs|object|false|none|none|
|MaintenanceWindowStartTime|object|false|none|none|
|SecurityGroups|object|false|none|none|
|DataReplicationMetadata|object|false|none|none|
|DataReplicationMode|object|false|none|none|
|PendingDataReplicationMetadata|object|false|none|none|
|PendingDataReplicationMode|object|false|none|none|

<h2 id="tocS_UpdateConfigurationResponse">UpdateConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationresponse"></a>
<a id="schema_UpdateConfigurationResponse"></a>
<a id="tocSupdateconfigurationresponse"></a>
<a id="tocsupdateconfigurationresponse"></a>

```json
{
  "Arn": {},
  "Created": {},
  "Id": {},
  "LatestRevision": {
    "Created": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "Warnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Created|object|false|none|none|
|Id|object|false|none|none|
|LatestRevision|object|false|none|none|
|Name|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_UpdateUserResponse">UpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserresponse"></a>
<a id="schema_UpdateUserResponse"></a>
<a id="tocSupdateuserresponse"></a>
<a id="tocsupdateuserresponse"></a>

```json
{}
```

<h2 id="tocS_ActionRequired">ActionRequired</h2>
<!-- backwards compatibility -->
<a id="schemaactionrequired"></a>
<a id="schema_ActionRequired"></a>
<a id="tocSactionrequired"></a>
<a id="tocsactionrequired"></a>

```json
{
  "ActionRequiredCode": {},
  "ActionRequiredInfo": {}
}
```

Action required for a broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionRequiredCode|object|false|none|none|
|ActionRequiredInfo|object|false|none|none|

<h2 id="tocS_AuthenticationStrategy">AuthenticationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationstrategy"></a>
<a id="schema_AuthenticationStrategy"></a>
<a id="tocSauthenticationstrategy"></a>
<a id="tocsauthenticationstrategy"></a>

```json
"SIMPLE"
```

Optional. The authentication strategy used to secure the broker. The default is SIMPLE.

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

Name of the availability zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_EngineType">EngineType</h2>
<!-- backwards compatibility -->
<a id="schemaenginetype"></a>
<a id="schema_EngineType"></a>
<a id="tocSenginetype"></a>
<a id="tocsenginetype"></a>

```json
"ACTIVEMQ"
```

The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.

<h2 id="tocS___listOfEngineVersion">__listOfEngineVersion</h2>
<!-- backwards compatibility -->
<a id="schema__listofengineversion"></a>
<a id="schema___listOfEngineVersion"></a>
<a id="tocS__listofengineversion"></a>
<a id="tocs__listofengineversion"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_BrokerEngineType">BrokerEngineType</h2>
<!-- backwards compatibility -->
<a id="schemabrokerenginetype"></a>
<a id="schema_BrokerEngineType"></a>
<a id="tocSbrokerenginetype"></a>
<a id="tocsbrokerenginetype"></a>

```json
{
  "EngineType": {},
  "EngineVersions": {}
}
```

Types of broker engines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineType|object|false|none|none|
|EngineVersions|object|false|none|none|

<h2 id="tocS_BrokerInstance">BrokerInstance</h2>
<!-- backwards compatibility -->
<a id="schemabrokerinstance"></a>
<a id="schema_BrokerInstance"></a>
<a id="tocSbrokerinstance"></a>
<a id="tocsbrokerinstance"></a>

```json
{
  "ConsoleURL": {},
  "Endpoints": {},
  "IpAddress": {}
}
```

Returns information about all brokers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsoleURL|object|false|none|none|
|Endpoints|object|false|none|none|
|IpAddress|object|false|none|none|

<h2 id="tocS___listOfAvailabilityZone">__listOfAvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schema__listofavailabilityzone"></a>
<a id="schema___listOfAvailabilityZone"></a>
<a id="tocS__listofavailabilityzone"></a>
<a id="tocs__listofavailabilityzone"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_BrokerStorageType">BrokerStorageType</h2>
<!-- backwards compatibility -->
<a id="schemabrokerstoragetype"></a>
<a id="schema_BrokerStorageType"></a>
<a id="tocSbrokerstoragetype"></a>
<a id="tocsbrokerstoragetype"></a>

```json
"EBS"
```

<p>The broker's storage type.</p> <important><p>EFS is not supported for RabbitMQ engine type.</p></important>

<h2 id="tocS___listOfDeploymentMode">__listOfDeploymentMode</h2>
<!-- backwards compatibility -->
<a id="schema__listofdeploymentmode"></a>
<a id="schema___listOfDeploymentMode"></a>
<a id="tocS__listofdeploymentmode"></a>
<a id="tocs__listofdeploymentmode"></a>

```json
[
  "SINGLE_INSTANCE"
]
```

<h2 id="tocS_BrokerInstanceOption">BrokerInstanceOption</h2>
<!-- backwards compatibility -->
<a id="schemabrokerinstanceoption"></a>
<a id="schema_BrokerInstanceOption"></a>
<a id="tocSbrokerinstanceoption"></a>
<a id="tocsbrokerinstanceoption"></a>

```json
{
  "AvailabilityZones": {},
  "EngineType": {},
  "HostInstanceType": {},
  "StorageType": {},
  "SupportedDeploymentModes": {},
  "SupportedEngineVersions": {}
}
```

Option for host instance type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|EngineType|object|false|none|none|
|HostInstanceType|object|false|none|none|
|StorageType|object|false|none|none|
|SupportedDeploymentModes|object|false|none|none|
|SupportedEngineVersions|object|false|none|none|

<h2 id="tocS_BrokerState">BrokerState</h2>
<!-- backwards compatibility -->
<a id="schemabrokerstate"></a>
<a id="schema_BrokerState"></a>
<a id="tocSbrokerstate"></a>
<a id="tocsbrokerstate"></a>

```json
"CREATION_IN_PROGRESS"
```

The broker's status.

<h2 id="tocS___timestampIso8601">__timestampIso8601</h2>
<!-- backwards compatibility -->
<a id="schema__timestampiso8601"></a>
<a id="schema___timestampIso8601"></a>
<a id="tocS__timestampiso8601"></a>
<a id="tocs__timestampiso8601"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeploymentMode">DeploymentMode</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentmode"></a>
<a id="schema_DeploymentMode"></a>
<a id="tocSdeploymentmode"></a>
<a id="tocsdeploymentmode"></a>

```json
"SINGLE_INSTANCE"
```

The broker's deployment mode.

<h2 id="tocS_BrokerSummary">BrokerSummary</h2>
<!-- backwards compatibility -->
<a id="schemabrokersummary"></a>
<a id="schema_BrokerSummary"></a>
<a id="tocSbrokersummary"></a>
<a id="tocsbrokersummary"></a>

```json
{
  "BrokerArn": {},
  "BrokerId": {},
  "BrokerName": {},
  "BrokerState": {},
  "Created": {},
  "DeploymentMode": {},
  "EngineType": {},
  "HostInstanceType": {}
}
```

Returns information about all brokers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerArn|object|false|none|none|
|BrokerId|object|false|none|none|
|BrokerName|object|false|none|none|
|BrokerState|object|false|none|none|
|Created|object|false|none|none|
|DeploymentMode|object|true|none|none|
|EngineType|object|true|none|none|
|HostInstanceType|object|false|none|none|

<h2 id="tocS_ChangeType">ChangeType</h2>
<!-- backwards compatibility -->
<a id="schemachangetype"></a>
<a id="schema_ChangeType"></a>
<a id="tocSchangetype"></a>
<a id="tocschangetype"></a>

```json
"CREATE"
```

The type of change pending for the ActiveMQ user.

<h2 id="tocS_ConfigurationRevision">ConfigurationRevision</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationrevision"></a>
<a id="schema_ConfigurationRevision"></a>
<a id="tocSconfigurationrevision"></a>
<a id="tocsconfigurationrevision"></a>

```json
{
  "Created": {},
  "Description": {},
  "Revision": {}
}
```

Returns information about the specified configuration revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Created|object|true|none|none|
|Description|object|false|none|none|
|Revision|object|true|none|none|

<h2 id="tocS___mapOf__string">__mapOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__mapof__string"></a>
<a id="schema___mapOf__string"></a>
<a id="tocS__mapof__string"></a>
<a id="tocs__mapof__string"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "Arn": {},
  "AuthenticationStrategy": {},
  "Created": {},
  "Description": {},
  "EngineType": {},
  "EngineVersion": {},
  "Id": {},
  "LatestRevision": {
    "Created": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Returns information about all configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|AuthenticationStrategy|object|true|none|none|
|Created|object|true|none|none|
|Description|object|true|none|none|
|EngineType|object|true|none|none|
|EngineVersion|object|true|none|none|
|Id|object|true|none|none|
|LatestRevision|object|true|none|none|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ConfigurationId">ConfigurationId</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationid"></a>
<a id="schema_ConfigurationId"></a>
<a id="tocSconfigurationid"></a>
<a id="tocsconfigurationid"></a>

```json
{
  "Id": {},
  "Revision": {}
}
```

A list of information about the configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Revision|object|false|none|none|

<h2 id="tocS___listOfConfigurationId">__listOfConfigurationId</h2>
<!-- backwards compatibility -->
<a id="schema__listofconfigurationid"></a>
<a id="schema___listOfConfigurationId"></a>
<a id="tocS__listofconfigurationid"></a>
<a id="tocs__listofconfigurationid"></a>

```json
[
  {
    "Id": {},
    "Revision": {}
  }
]
```

<h2 id="tocS_Configurations">Configurations</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurations"></a>
<a id="schema_Configurations"></a>
<a id="tocSconfigurations"></a>
<a id="tocsconfigurations"></a>

```json
{
  "Current": {
    "Id": {},
    "Revision": {}
  },
  "History": {},
  "Pending": {
    "Id": {},
    "Revision": {}
  }
}
```

Broker configuration information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Current|object|false|none|none|
|History|object|false|none|none|
|Pending|object|false|none|none|

<h2 id="tocS_EncryptionOptions">EncryptionOptions</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionoptions"></a>
<a id="schema_EncryptionOptions"></a>
<a id="tocSencryptionoptions"></a>
<a id="tocsencryptionoptions"></a>

```json
{
  "KmsKeyId": {},
  "UseAwsOwnedKey": {}
}
```

Encryption options for the broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsKeyId|object|false|none|none|
|UseAwsOwnedKey|object|true|none|none|

<h2 id="tocS_LdapServerMetadataInput">LdapServerMetadataInput</h2>
<!-- backwards compatibility -->
<a id="schemaldapservermetadatainput"></a>
<a id="schema_LdapServerMetadataInput"></a>
<a id="tocSldapservermetadatainput"></a>
<a id="tocsldapservermetadatainput"></a>

```json
{
  "Hosts": {},
  "RoleBase": {},
  "RoleName": {},
  "RoleSearchMatching": {},
  "RoleSearchSubtree": {},
  "ServiceAccountPassword": {},
  "ServiceAccountUsername": {},
  "UserBase": {},
  "UserRoleName": {},
  "UserSearchMatching": {},
  "UserSearchSubtree": {}
}
```

<p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Hosts|object|true|none|none|
|RoleBase|object|true|none|none|
|RoleName|object|false|none|none|
|RoleSearchMatching|object|true|none|none|
|RoleSearchSubtree|object|false|none|none|
|ServiceAccountPassword|object|true|none|none|
|ServiceAccountUsername|object|true|none|none|
|UserBase|object|true|none|none|
|UserRoleName|object|false|none|none|
|UserSearchMatching|object|true|none|none|
|UserSearchSubtree|object|false|none|none|

<h2 id="tocS_Logs">Logs</h2>
<!-- backwards compatibility -->
<a id="schemalogs"></a>
<a id="schema_Logs"></a>
<a id="tocSlogs"></a>
<a id="tocslogs"></a>

```json
{
  "Audit": {},
  "General": {}
}
```

The list of information about logs to be enabled for the specified broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Audit|object|false|none|none|
|General|object|false|none|none|

<h2 id="tocS_WeeklyStartTime">WeeklyStartTime</h2>
<!-- backwards compatibility -->
<a id="schemaweeklystarttime"></a>
<a id="schema_WeeklyStartTime"></a>
<a id="tocSweeklystarttime"></a>
<a id="tocsweeklystarttime"></a>

```json
{
  "DayOfWeek": {},
  "TimeOfDay": {},
  "TimeZone": {}
}
```

The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DayOfWeek|object|true|none|none|
|TimeOfDay|object|true|none|none|
|TimeZone|object|false|none|none|

<h2 id="tocS___listOfUser">__listOfUser</h2>
<!-- backwards compatibility -->
<a id="schema__listofuser"></a>
<a id="schema___listOfUser"></a>
<a id="tocS__listofuser"></a>
<a id="tocs__listofuser"></a>

```json
[
  {
    "ConsoleAccess": {},
    "Groups": {},
    "Password": {},
    "Username": {},
    "ReplicationUser": {}
  }
]
```

<h2 id="tocS_DataReplicationMode">DataReplicationMode</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationmode"></a>
<a id="schema_DataReplicationMode"></a>
<a id="tocSdatareplicationmode"></a>
<a id="tocsdatareplicationmode"></a>

```json
"NONE"
```

Specifies whether a broker is a part of a data replication pair.

<h2 id="tocS_CreateBrokerRequest">CreateBrokerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebrokerrequest"></a>
<a id="schema_CreateBrokerRequest"></a>
<a id="tocScreatebrokerrequest"></a>
<a id="tocscreatebrokerrequest"></a>

```json
{
  "AuthenticationStrategy": {},
  "AutoMinorVersionUpgrade": {},
  "BrokerName": {},
  "Configuration": {
    "Id": {},
    "Revision": {}
  },
  "CreatorRequestId": {},
  "DeploymentMode": {},
  "EncryptionOptions": {
    "KmsKeyId": {},
    "UseAwsOwnedKey": {}
  },
  "EngineType": {},
  "EngineVersion": {},
  "HostInstanceType": {},
  "LdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountPassword": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "Logs": {
    "Audit": {},
    "General": {}
  },
  "MaintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "PubliclyAccessible": {},
  "SecurityGroups": {},
  "StorageType": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Users": {},
  "DataReplicationMode": {},
  "DataReplicationPrimaryBrokerArn": {}
}
```

Creates a broker using the specified properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthenticationStrategy|object|false|none|none|
|AutoMinorVersionUpgrade|object|true|none|none|
|BrokerName|object|true|none|none|
|Configuration|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|DeploymentMode|object|true|none|none|
|EncryptionOptions|object|false|none|none|
|EngineType|object|true|none|none|
|EngineVersion|object|true|none|none|
|HostInstanceType|object|true|none|none|
|LdapServerMetadata|object|false|none|none|
|Logs|object|false|none|none|
|MaintenanceWindowStartTime|object|false|none|none|
|PubliclyAccessible|object|true|none|none|
|SecurityGroups|object|false|none|none|
|StorageType|object|false|none|none|
|SubnetIds|object|false|none|none|
|Tags|object|false|none|none|
|Users|object|true|none|none|
|DataReplicationMode|object|false|none|none|
|DataReplicationPrimaryBrokerArn|object|false|none|none|

<h2 id="tocS_CreateConfigurationRequest">CreateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationrequest"></a>
<a id="schema_CreateConfigurationRequest"></a>
<a id="tocScreateconfigurationrequest"></a>
<a id="tocscreateconfigurationrequest"></a>

```json
{
  "AuthenticationStrategy": {},
  "EngineType": {},
  "EngineVersion": {},
  "Name": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthenticationStrategy|object|false|none|none|
|EngineType|object|true|none|none|
|EngineVersion|object|true|none|none|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateTagsRequest">CreateTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagsrequest"></a>
<a id="schema_CreateTagsRequest"></a>
<a id="tocScreatetagsrequest"></a>
<a id="tocscreatetagsrequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A map of the key-value pairs for the resource tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "ConsoleAccess": {},
  "Groups": {},
  "Password": {},
  "ReplicationUser": {}
}
```

Creates a new ActiveMQ user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsoleAccess|object|false|none|none|
|Groups|object|false|none|none|
|Password|object|true|none|none|
|ReplicationUser|object|false|none|none|

<h2 id="tocS_DataReplicationCounterpart">DataReplicationCounterpart</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationcounterpart"></a>
<a id="schema_DataReplicationCounterpart"></a>
<a id="tocSdatareplicationcounterpart"></a>
<a id="tocsdatareplicationcounterpart"></a>

```json
{
  "BrokerId": {},
  "Region": {}
}
```

Specifies a broker in a data replication pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerId|object|true|none|none|
|Region|object|true|none|none|

<h2 id="tocS_DataReplicationMetadataOutput">DataReplicationMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatareplicationmetadataoutput"></a>
<a id="schema_DataReplicationMetadataOutput"></a>
<a id="tocSdatareplicationmetadataoutput"></a>
<a id="tocsdatareplicationmetadataoutput"></a>

```json
{
  "DataReplicationCounterpart": {
    "BrokerId": {},
    "Region": {}
  },
  "DataReplicationRole": {}
}
```

The replication details of the data replication-enabled broker. Only returned if dataReplicationMode or pendingDataReplicationMode is set to CRDR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataReplicationCounterpart|object|false|none|none|
|DataReplicationRole|object|true|none|none|

<h2 id="tocS_DeleteBrokerRequest">DeleteBrokerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebrokerrequest"></a>
<a id="schema_DeleteBrokerRequest"></a>
<a id="tocSdeletebrokerrequest"></a>
<a id="tocsdeletebrokerrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteTagsRequest">DeleteTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsrequest"></a>
<a id="schema_DeleteTagsRequest"></a>
<a id="tocSdeletetagsrequest"></a>
<a id="tocsdeletetagsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{}
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

<h2 id="tocS_DescribeBrokerEngineTypesRequest">DescribeBrokerEngineTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebrokerenginetypesrequest"></a>
<a id="schema_DescribeBrokerEngineTypesRequest"></a>
<a id="tocSdescribebrokerenginetypesrequest"></a>
<a id="tocsdescribebrokerenginetypesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfBrokerEngineType">__listOfBrokerEngineType</h2>
<!-- backwards compatibility -->
<a id="schema__listofbrokerenginetype"></a>
<a id="schema___listOfBrokerEngineType"></a>
<a id="tocS__listofbrokerenginetype"></a>
<a id="tocs__listofbrokerenginetype"></a>

```json
[
  {
    "EngineType": {},
    "EngineVersions": {}
  }
]
```

<h2 id="tocS___integerMin5Max100">__integerMin5Max100</h2>
<!-- backwards compatibility -->
<a id="schema__integermin5max100"></a>
<a id="schema___integerMin5Max100"></a>
<a id="tocS__integermin5max100"></a>
<a id="tocs__integermin5max100"></a>

```json
5
```

<h2 id="tocS_DescribeBrokerInstanceOptionsRequest">DescribeBrokerInstanceOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebrokerinstanceoptionsrequest"></a>
<a id="schema_DescribeBrokerInstanceOptionsRequest"></a>
<a id="tocSdescribebrokerinstanceoptionsrequest"></a>
<a id="tocsdescribebrokerinstanceoptionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfBrokerInstanceOption">__listOfBrokerInstanceOption</h2>
<!-- backwards compatibility -->
<a id="schema__listofbrokerinstanceoption"></a>
<a id="schema___listOfBrokerInstanceOption"></a>
<a id="tocS__listofbrokerinstanceoption"></a>
<a id="tocs__listofbrokerinstanceoption"></a>

```json
[
  {
    "AvailabilityZones": {},
    "EngineType": {},
    "HostInstanceType": {},
    "StorageType": {},
    "SupportedDeploymentModes": {},
    "SupportedEngineVersions": {}
  }
]
```

<h2 id="tocS_DescribeBrokerRequest">DescribeBrokerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebrokerrequest"></a>
<a id="schema_DescribeBrokerRequest"></a>
<a id="tocSdescribebrokerrequest"></a>
<a id="tocsdescribebrokerrequest"></a>

```json
{}
```

<h2 id="tocS___listOfActionRequired">__listOfActionRequired</h2>
<!-- backwards compatibility -->
<a id="schema__listofactionrequired"></a>
<a id="schema___listOfActionRequired"></a>
<a id="tocS__listofactionrequired"></a>
<a id="tocs__listofactionrequired"></a>

```json
[
  {
    "ActionRequiredCode": {},
    "ActionRequiredInfo": {}
  }
]
```

<h2 id="tocS___listOfBrokerInstance">__listOfBrokerInstance</h2>
<!-- backwards compatibility -->
<a id="schema__listofbrokerinstance"></a>
<a id="schema___listOfBrokerInstance"></a>
<a id="tocS__listofbrokerinstance"></a>
<a id="tocs__listofbrokerinstance"></a>

```json
[
  {
    "ConsoleURL": {},
    "Endpoints": {},
    "IpAddress": {}
  }
]
```

<h2 id="tocS_LdapServerMetadataOutput">LdapServerMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemaldapservermetadataoutput"></a>
<a id="schema_LdapServerMetadataOutput"></a>
<a id="tocSldapservermetadataoutput"></a>
<a id="tocsldapservermetadataoutput"></a>

```json
{
  "Hosts": {},
  "RoleBase": {},
  "RoleName": {},
  "RoleSearchMatching": {},
  "RoleSearchSubtree": {},
  "ServiceAccountUsername": {},
  "UserBase": {},
  "UserRoleName": {},
  "UserSearchMatching": {},
  "UserSearchSubtree": {}
}
```

Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Hosts|object|true|none|none|
|RoleBase|object|true|none|none|
|RoleName|object|false|none|none|
|RoleSearchMatching|object|true|none|none|
|RoleSearchSubtree|object|false|none|none|
|ServiceAccountUsername|object|true|none|none|
|UserBase|object|true|none|none|
|UserRoleName|object|false|none|none|
|UserSearchMatching|object|true|none|none|
|UserSearchSubtree|object|false|none|none|

<h2 id="tocS_LogsSummary">LogsSummary</h2>
<!-- backwards compatibility -->
<a id="schemalogssummary"></a>
<a id="schema_LogsSummary"></a>
<a id="tocSlogssummary"></a>
<a id="tocslogssummary"></a>

```json
{
  "Audit": {},
  "AuditLogGroup": {},
  "General": {},
  "GeneralLogGroup": {},
  "Pending": {
    "Audit": {},
    "General": {}
  }
}
```

The list of information about logs currently enabled and pending to be deployed for the specified broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Audit|object|false|none|none|
|AuditLogGroup|object|false|none|none|
|General|object|true|none|none|
|GeneralLogGroup|object|true|none|none|
|Pending|object|false|none|none|

<h2 id="tocS___listOfUserSummary">__listOfUserSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofusersummary"></a>
<a id="schema___listOfUserSummary"></a>
<a id="tocS__listofusersummary"></a>
<a id="tocs__listofusersummary"></a>

```json
[
  {
    "PendingChange": {},
    "Username": {}
  }
]
```

<h2 id="tocS_DescribeConfigurationRequest">DescribeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrequest"></a>
<a id="schema_DescribeConfigurationRequest"></a>
<a id="tocSdescribeconfigurationrequest"></a>
<a id="tocsdescribeconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeConfigurationRevisionRequest">DescribeConfigurationRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrevisionrequest"></a>
<a id="schema_DescribeConfigurationRevisionRequest"></a>
<a id="tocSdescribeconfigurationrevisionrequest"></a>
<a id="tocsdescribeconfigurationrevisionrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeUserRequest">DescribeUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserrequest"></a>
<a id="schema_DescribeUserRequest"></a>
<a id="tocSdescribeuserrequest"></a>
<a id="tocsdescribeuserrequest"></a>

```json
{}
```

<h2 id="tocS_UserPendingChanges">UserPendingChanges</h2>
<!-- backwards compatibility -->
<a id="schemauserpendingchanges"></a>
<a id="schema_UserPendingChanges"></a>
<a id="tocSuserpendingchanges"></a>
<a id="tocsuserpendingchanges"></a>

```json
{
  "ConsoleAccess": {},
  "Groups": {},
  "PendingChange": {}
}
```

Returns information about the status of the changes pending for the ActiveMQ user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsoleAccess|object|false|none|none|
|Groups|object|false|none|none|
|PendingChange|object|true|none|none|

<h2 id="tocS_EngineVersion">EngineVersion</h2>
<!-- backwards compatibility -->
<a id="schemaengineversion"></a>
<a id="schema_EngineVersion"></a>
<a id="tocSengineversion"></a>
<a id="tocsengineversion"></a>

```json
{
  "Name": {}
}
```

Id of the engine version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_ListBrokersRequest">ListBrokersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbrokersrequest"></a>
<a id="schema_ListBrokersRequest"></a>
<a id="tocSlistbrokersrequest"></a>
<a id="tocslistbrokersrequest"></a>

```json
{}
```

<h2 id="tocS___listOfBrokerSummary">__listOfBrokerSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofbrokersummary"></a>
<a id="schema___listOfBrokerSummary"></a>
<a id="tocS__listofbrokersummary"></a>
<a id="tocs__listofbrokersummary"></a>

```json
[
  {
    "BrokerArn": {},
    "BrokerId": {},
    "BrokerName": {},
    "BrokerState": {},
    "Created": {},
    "DeploymentMode": {},
    "EngineType": {},
    "HostInstanceType": {}
  }
]
```

<h2 id="tocS_ListConfigurationRevisionsRequest">ListConfigurationRevisionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationrevisionsrequest"></a>
<a id="schema_ListConfigurationRevisionsRequest"></a>
<a id="tocSlistconfigurationrevisionsrequest"></a>
<a id="tocslistconfigurationrevisionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfConfigurationRevision">__listOfConfigurationRevision</h2>
<!-- backwards compatibility -->
<a id="schema__listofconfigurationrevision"></a>
<a id="schema___listOfConfigurationRevision"></a>
<a id="tocS__listofconfigurationrevision"></a>
<a id="tocs__listofconfigurationrevision"></a>

```json
[
  {
    "Created": {},
    "Description": {},
    "Revision": {}
  }
]
```

<h2 id="tocS_ListConfigurationsRequest">ListConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsrequest"></a>
<a id="schema_ListConfigurationsRequest"></a>
<a id="tocSlistconfigurationsrequest"></a>
<a id="tocslistconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfConfiguration">__listOfConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofconfiguration"></a>
<a id="schema___listOfConfiguration"></a>
<a id="tocS__listofconfiguration"></a>
<a id="tocs__listofconfiguration"></a>

```json
[
  {
    "Arn": {},
    "AuthenticationStrategy": {},
    "Created": {},
    "Description": {},
    "EngineType": {},
    "EngineVersion": {},
    "Id": {},
    "LatestRevision": {
      "Created": {},
      "Description": {},
      "Revision": {}
    },
    "Name": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListTagsRequest">ListTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsrequest"></a>
<a id="schema_ListTagsRequest"></a>
<a id="tocSlisttagsrequest"></a>
<a id="tocslisttagsrequest"></a>

```json
{}
```

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{}
```

<h2 id="tocS_PendingLogs">PendingLogs</h2>
<!-- backwards compatibility -->
<a id="schemapendinglogs"></a>
<a id="schema_PendingLogs"></a>
<a id="tocSpendinglogs"></a>
<a id="tocspendinglogs"></a>

```json
{
  "Audit": {},
  "General": {}
}
```

The list of information about logs to be enabled for the specified broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Audit|object|false|none|none|
|General|object|false|none|none|

<h2 id="tocS_PromoteMode">PromoteMode</h2>
<!-- backwards compatibility -->
<a id="schemapromotemode"></a>
<a id="schema_PromoteMode"></a>
<a id="tocSpromotemode"></a>
<a id="tocspromotemode"></a>

```json
"SWITCHOVER"
```

The Promote mode requested.

<h2 id="tocS_PromoteRequest">PromoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapromoterequest"></a>
<a id="schema_PromoteRequest"></a>
<a id="tocSpromoterequest"></a>
<a id="tocspromoterequest"></a>

```json
{
  "Mode": {}
}
```

Promotes a data replication replica broker to the primary broker role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|true|none|none|

<h2 id="tocS_RebootBrokerRequest">RebootBrokerRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootbrokerrequest"></a>
<a id="schema_RebootBrokerRequest"></a>
<a id="tocSrebootbrokerrequest"></a>
<a id="tocsrebootbrokerrequest"></a>

```json
{}
```

<h2 id="tocS_SanitizationWarningReason">SanitizationWarningReason</h2>
<!-- backwards compatibility -->
<a id="schemasanitizationwarningreason"></a>
<a id="schema_SanitizationWarningReason"></a>
<a id="tocSsanitizationwarningreason"></a>
<a id="tocssanitizationwarningreason"></a>

```json
"DISALLOWED_ELEMENT_REMOVED"
```

The reason for which the configuration elements or attributes were sanitized.

<h2 id="tocS_SanitizationWarning">SanitizationWarning</h2>
<!-- backwards compatibility -->
<a id="schemasanitizationwarning"></a>
<a id="schema_SanitizationWarning"></a>
<a id="tocSsanitizationwarning"></a>
<a id="tocssanitizationwarning"></a>

```json
{
  "AttributeName": {},
  "ElementName": {},
  "Reason": {}
}
```

Returns information about the configuration element or attribute that was sanitized in the configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|ElementName|object|false|none|none|
|Reason|object|true|none|none|

<h2 id="tocS_UpdateBrokerRequest">UpdateBrokerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokerrequest"></a>
<a id="schema_UpdateBrokerRequest"></a>
<a id="tocSupdatebrokerrequest"></a>
<a id="tocsupdatebrokerrequest"></a>

```json
{
  "AuthenticationStrategy": {},
  "AutoMinorVersionUpgrade": {},
  "Configuration": {
    "Id": {},
    "Revision": {}
  },
  "EngineVersion": {},
  "HostInstanceType": {},
  "LdapServerMetadata": {
    "Hosts": {},
    "RoleBase": {},
    "RoleName": {},
    "RoleSearchMatching": {},
    "RoleSearchSubtree": {},
    "ServiceAccountPassword": {},
    "ServiceAccountUsername": {},
    "UserBase": {},
    "UserRoleName": {},
    "UserSearchMatching": {},
    "UserSearchSubtree": {}
  },
  "Logs": {
    "Audit": {},
    "General": {}
  },
  "MaintenanceWindowStartTime": {
    "DayOfWeek": {},
    "TimeOfDay": {},
    "TimeZone": {}
  },
  "SecurityGroups": {},
  "DataReplicationMode": {}
}
```

Updates the broker using the specified properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthenticationStrategy|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|Configuration|object|false|none|none|
|EngineVersion|object|false|none|none|
|HostInstanceType|object|false|none|none|
|LdapServerMetadata|object|false|none|none|
|Logs|object|false|none|none|
|MaintenanceWindowStartTime|object|false|none|none|
|SecurityGroups|object|false|none|none|
|DataReplicationMode|object|false|none|none|

<h2 id="tocS_UpdateConfigurationRequest">UpdateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationrequest"></a>
<a id="schema_UpdateConfigurationRequest"></a>
<a id="tocSupdateconfigurationrequest"></a>
<a id="tocsupdateconfigurationrequest"></a>

```json
{
  "Data": {},
  "Description": {}
}
```

Updates the specified configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS___listOfSanitizationWarning">__listOfSanitizationWarning</h2>
<!-- backwards compatibility -->
<a id="schema__listofsanitizationwarning"></a>
<a id="schema___listOfSanitizationWarning"></a>
<a id="tocS__listofsanitizationwarning"></a>
<a id="tocs__listofsanitizationwarning"></a>

```json
[
  {
    "AttributeName": {},
    "ElementName": {},
    "Reason": {}
  }
]
```

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "ConsoleAccess": {},
  "Groups": {},
  "Password": {},
  "ReplicationUser": {}
}
```

Updates the information for an ActiveMQ user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsoleAccess|object|false|none|none|
|Groups|object|false|none|none|
|Password|object|false|none|none|
|ReplicationUser|object|false|none|none|

<h2 id="tocS_UserSummary">UserSummary</h2>
<!-- backwards compatibility -->
<a id="schemausersummary"></a>
<a id="schema_UserSummary"></a>
<a id="tocSusersummary"></a>
<a id="tocsusersummary"></a>

```json
{
  "PendingChange": {},
  "Username": {}
}
```

Returns a list of all broker users. Does not apply to RabbitMQ brokers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PendingChange|object|false|none|none|
|Username|object|true|none|none|
