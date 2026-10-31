<h1 id="aws-codestar-connections">AWS CodeStar connections v2019-12-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS CodeStar Connections</fullname> <p>This AWS CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Connections API. You can use the connections API to work with connections and installations.</p> <p> <i>Connections</i> are configurations that you use to connect AWS resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection.</p> <p>When you create a connection, the console initiates a third-party connection handshake. <i>Installations</i> are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one.</p> <p>When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a <i>host</i> for your connections.</p> <p>You can work with connections by calling:</p> <ul> <li> <p> <a>CreateConnection</a>, which creates a uniquely named connection that can be referenced by services such as CodePipeline.</p> </li> <li> <p> <a>DeleteConnection</a>, which deletes the specified connection.</p> </li> <li> <p> <a>GetConnection</a>, which returns information about the connection, including the connection status.</p> </li> <li> <p> <a>ListConnections</a>, which lists the connections associated with your account.</p> </li> </ul> <p>You can work with hosts by calling:</p> <ul> <li> <p> <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p> </li> <li> <p> <a>DeleteHost</a>, which deletes the specified host.</p> </li> <li> <p> <a>GetHost</a>, which returns information about the host, including the setup status.</p> </li> <li> <p> <a>ListHosts</a>, which lists the hosts associated with your account.</p> </li> </ul> <p>You can work with tags in AWS CodeStar Connections by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeStar Connections.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeStar Connections.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeStar Connections.</p> </li> </ul> <p>For information about how to use AWS CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User Guide</a>.</p>

Base URLs:

* <a href="http://codestar-connections.us-east-1.amazonaws.com">http://codestar-connections.us-east-1.amazonaws.com</a> - The AWS CodeStar connections multi-region endpoint

* <a href="https://codestar-connections.us-east-1.amazonaws.com">https://codestar-connections.us-east-1.amazonaws.com</a> - The AWS CodeStar connections multi-region endpoint

* <a href="http://codestar-connections.cn-north-1.amazonaws.com.cn">http://codestar-connections.cn-north-1.amazonaws.com.cn</a> - The AWS CodeStar connections endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codestar-connections.cn-north-1.amazonaws.com.cn">https://codestar-connections.cn-north-1.amazonaws.com.cn</a> - The AWS CodeStar connections endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codestar-connections/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-codestar-connections-default">Default</h1>

## CreateConnection

<a id="opIdCreateConnection"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection' \
  -d '{
    "ProviderType": {},
    "ConnectionName": {},
    "Tags": {},
    "HostArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection`

Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.

> Body parameter

```json
{
  "ProviderType": {},
  "ConnectionName": {},
  "Tags": {},
  "HostArn": {}
}
```

<h3 id="createconnection-parameters">Parameters</h3>

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
|body|body|[CreateConnectionInput](#schemacreateconnectioninput)|true|none|
|» ProviderType|body|object|false|none|
|» ConnectionName|body|object|true|none|
|» Tags|body|object|false|none|
|» HostArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection|

> Example responses

> 200 Response

```json
{
  "ConnectionArn": {},
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

<h3 id="createconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectionOutput](#schemacreateconnectionoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHost

<a id="opIdCreateHost"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost' \
  -d '{
    "Name": {},
    "ProviderType": {},
    "ProviderEndpoint": {},
    "VpcConfiguration": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {},
      "TlsCertificate": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost`

<p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "ProviderType": {},
  "ProviderEndpoint": {},
  "VpcConfiguration": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "TlsCertificate": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createhost-parameters">Parameters</h3>

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
|body|body|[CreateHostInput](#schemacreatehostinput)|true|none|
|» Name|body|object|true|none|
|» ProviderType|body|object|true|none|
|» ProviderEndpoint|body|object|true|none|
|» VpcConfiguration|body|object|false|none|
|» » VpcId|body|object|true|none|
|» » SubnetIds|body|object|true|none|
|» » SecurityGroupIds|body|object|true|none|
|» » TlsCertificate|body|object|false|none|
|» Tags|body|[TagList](#schemataglist)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost|

> Example responses

> 200 Response

```json
{
  "HostArn": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

> 480 Response

```json
null
```

<h3 id="createhost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHostOutput](#schemacreatehostoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnection

<a id="opIdDeleteConnection"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection' \
  -d '{
    "ConnectionArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection`

The connection to be deleted.

> Body parameter

```json
{
  "ConnectionArn": {}
}
```

<h3 id="deleteconnection-parameters">Parameters</h3>

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
|body|body|[DeleteConnectionInput](#schemadeleteconnectioninput)|true|none|
|» ConnectionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectionOutput](#schemadeleteconnectionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHost

<a id="opIdDeleteHost"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost' \
  -d '{
    "HostArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost`

<p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>

> Body parameter

```json
{
  "HostArn": {}
}
```

<h3 id="deletehost-parameters">Parameters</h3>

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
|body|body|[DeleteHostInput](#schemadeletehostinput)|true|none|
|» HostArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost|

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

<h3 id="deletehost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHostOutput](#schemadeletehostoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnection

<a id="opIdGetConnection"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection' \
  -d '{
    "ConnectionArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection`

Returns the connection ARN and details such as status, owner, and provider type.

> Body parameter

```json
{
  "ConnectionArn": {}
}
```

<h3 id="getconnection-parameters">Parameters</h3>

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
|body|body|[GetConnectionInput](#schemagetconnectioninput)|true|none|
|» ConnectionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection|

> Example responses

> 200 Response

```json
{
  "Connection": {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "OwnerAccountId": {},
    "ConnectionStatus": {},
    "HostArn": {}
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

<h3 id="getconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectionOutput](#schemagetconnectionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHost

<a id="opIdGetHost"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost' \
  -d '{
    "HostArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost`

Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.

> Body parameter

```json
{
  "HostArn": {}
}
```

<h3 id="gethost-parameters">Parameters</h3>

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
|body|body|[GetHostInput](#schemagethostinput)|true|none|
|» HostArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Status": {},
  "ProviderType": {},
  "ProviderEndpoint": {},
  "VpcConfiguration": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "TlsCertificate": {}
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

<h3 id="gethost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHostOutput](#schemagethostoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnections

<a id="opIdListConnections"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections' \
  -d '{
    "ProviderTypeFilter": {},
    "HostArnFilter": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections`

Lists the connections associated with your account.

> Body parameter

```json
{
  "ProviderTypeFilter": {},
  "HostArnFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listconnections-parameters">Parameters</h3>

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
|body|body|[ListConnectionsInput](#schemalistconnectionsinput)|true|none|
|» ProviderTypeFilter|body|object|false|none|
|» HostArnFilter|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections|

> Example responses

> 200 Response

```json
{
  "Connections": {},
  "NextToken": {}
}
```

<h3 id="listconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectionsOutput](#schemalistconnectionsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHosts

<a id="opIdListHosts"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts`

Lists the hosts associated with your account.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listhosts-parameters">Parameters</h3>

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
|body|body|[ListHostsInput](#schemalisthostsinput)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts|

> Example responses

> 200 Response

```json
{
  "Hosts": {},
  "NextToken": {}
}
```

<h3 id="listhosts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHostsOutput](#schemalisthostsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource`

Gets the set of key-value pairs (metadata) that are used to manage the resource.

> Body parameter

```json
{
  "ResourceArn": {}
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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource`

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

> Body parameter

```json
{
  "ResourceArn": {},
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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource`

Removes tags from an AWS resource.

> Body parameter

```json
{
  "ResourceArn": {},
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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHost

<a id="opIdUpdateHost"></a>

> Code samples

```bash
curl 'https://codestar-connections.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost' \
  -d '{
    "HostArn": {},
    "ProviderEndpoint": {},
    "VpcConfiguration": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {},
      "TlsCertificate": {}
    }
  }'
```

`POST /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost`

Updates a specified host with the provided configurations.

> Body parameter

```json
{
  "HostArn": {},
  "ProviderEndpoint": {},
  "VpcConfiguration": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "TlsCertificate": {}
  }
}
```

<h3 id="updatehost-parameters">Parameters</h3>

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
|body|body|[UpdateHostInput](#schemaupdatehostinput)|true|none|
|» HostArn|body|object|true|none|
|» ProviderEndpoint|body|object|false|none|
|» VpcConfiguration|body|object|false|none|
|» » VpcId|body|object|true|none|
|» » SubnetIds|body|object|true|none|
|» » SecurityGroupIds|body|object|true|none|
|» » TlsCertificate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost|

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

<h3 id="updatehost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateHostOutput](#schemaupdatehostoutput)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateConnectionOutput">CreateConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionoutput"></a>
<a id="schema_CreateConnectionOutput"></a>
<a id="tocScreateconnectionoutput"></a>
<a id="tocscreateconnectionoutput"></a>

```json
{
  "ConnectionArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateConnectionInput">CreateConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectioninput"></a>
<a id="schema_CreateConnectionInput"></a>
<a id="tocScreateconnectioninput"></a>
<a id="tocscreateconnectioninput"></a>

```json
{
  "ProviderType": {},
  "ConnectionName": {},
  "Tags": {},
  "HostArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProviderType|object|false|none|none|
|ConnectionName|object|true|none|none|
|Tags|object|false|none|none|
|HostArn|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_ResourceUnavailableException">ResourceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunavailableexception"></a>
<a id="schema_ResourceUnavailableException"></a>
<a id="tocSresourceunavailableexception"></a>
<a id="tocsresourceunavailableexception"></a>

```json
null
```

<h2 id="tocS_CreateHostOutput">CreateHostOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatehostoutput"></a>
<a id="schema_CreateHostOutput"></a>
<a id="tocScreatehostoutput"></a>
<a id="tocscreatehostoutput"></a>

```json
{
  "HostArn": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostArn|object|false|none|none|
|Tags|[TagList](#schemataglist)|false|none|none|

<h2 id="tocS_CreateHostInput">CreateHostInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatehostinput"></a>
<a id="schema_CreateHostInput"></a>
<a id="tocScreatehostinput"></a>
<a id="tocscreatehostinput"></a>

```json
{
  "Name": {},
  "ProviderType": {},
  "ProviderEndpoint": {},
  "VpcConfiguration": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "TlsCertificate": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ProviderType|object|true|none|none|
|ProviderEndpoint|object|true|none|none|
|VpcConfiguration|object|false|none|none|
|Tags|[TagList](#schemataglist)|false|none|none|

<h2 id="tocS_DeleteConnectionOutput">DeleteConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionoutput"></a>
<a id="schema_DeleteConnectionOutput"></a>
<a id="tocSdeleteconnectionoutput"></a>
<a id="tocsdeleteconnectionoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteConnectionInput">DeleteConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectioninput"></a>
<a id="schema_DeleteConnectionInput"></a>
<a id="tocSdeleteconnectioninput"></a>
<a id="tocsdeleteconnectioninput"></a>

```json
{
  "ConnectionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|true|none|none|

<h2 id="tocS_DeleteHostOutput">DeleteHostOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletehostoutput"></a>
<a id="schema_DeleteHostOutput"></a>
<a id="tocSdeletehostoutput"></a>
<a id="tocsdeletehostoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteHostInput">DeleteHostInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletehostinput"></a>
<a id="schema_DeleteHostInput"></a>
<a id="tocSdeletehostinput"></a>
<a id="tocsdeletehostinput"></a>

```json
{
  "HostArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostArn|object|true|none|none|

<h2 id="tocS_GetConnectionOutput">GetConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionoutput"></a>
<a id="schema_GetConnectionOutput"></a>
<a id="tocSgetconnectionoutput"></a>
<a id="tocsgetconnectionoutput"></a>

```json
{
  "Connection": {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "OwnerAccountId": {},
    "ConnectionStatus": {},
    "HostArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|false|none|none|

<h2 id="tocS_GetConnectionInput">GetConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectioninput"></a>
<a id="schema_GetConnectionInput"></a>
<a id="tocSgetconnectioninput"></a>
<a id="tocsgetconnectioninput"></a>

```json
{
  "ConnectionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|true|none|none|

<h2 id="tocS_GetHostOutput">GetHostOutput</h2>
<!-- backwards compatibility -->
<a id="schemagethostoutput"></a>
<a id="schema_GetHostOutput"></a>
<a id="tocSgethostoutput"></a>
<a id="tocsgethostoutput"></a>

```json
{
  "Name": {},
  "Status": {},
  "ProviderType": {},
  "ProviderEndpoint": {},
  "VpcConfiguration": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "TlsCertificate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|ProviderType|object|false|none|none|
|ProviderEndpoint|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_GetHostInput">GetHostInput</h2>
<!-- backwards compatibility -->
<a id="schemagethostinput"></a>
<a id="schema_GetHostInput"></a>
<a id="tocSgethostinput"></a>
<a id="tocsgethostinput"></a>

```json
{
  "HostArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostArn|object|true|none|none|

<h2 id="tocS_ListConnectionsOutput">ListConnectionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsoutput"></a>
<a id="schema_ListConnectionsOutput"></a>
<a id="tocSlistconnectionsoutput"></a>
<a id="tocslistconnectionsoutput"></a>

```json
{
  "Connections": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConnectionsInput">ListConnectionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsinput"></a>
<a id="schema_ListConnectionsInput"></a>
<a id="tocSlistconnectionsinput"></a>
<a id="tocslistconnectionsinput"></a>

```json
{
  "ProviderTypeFilter": {},
  "HostArnFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProviderTypeFilter|object|false|none|none|
|HostArnFilter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHostsOutput">ListHostsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisthostsoutput"></a>
<a id="schema_ListHostsOutput"></a>
<a id="tocSlisthostsoutput"></a>
<a id="tocslisthostsoutput"></a>

```json
{
  "Hosts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Hosts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHostsInput">ListHostsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisthostsinput"></a>
<a id="schema_ListHostsInput"></a>
<a id="tocSlisthostsinput"></a>
<a id="tocslisthostsinput"></a>

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

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateHostOutput">UpdateHostOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehostoutput"></a>
<a id="schema_UpdateHostOutput"></a>
<a id="tocSupdatehostoutput"></a>
<a id="tocsupdatehostoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateHostInput">UpdateHostInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehostinput"></a>
<a id="schema_UpdateHostInput"></a>
<a id="tocSupdatehostinput"></a>
<a id="tocsupdatehostinput"></a>

```json
{
  "HostArn": {},
  "ProviderEndpoint": {},
  "VpcConfiguration": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "TlsCertificate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostArn|object|true|none|none|
|ProviderEndpoint|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

```json
null
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_ConnectionName">ConnectionName</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionname"></a>
<a id="schema_ConnectionName"></a>
<a id="tocSconnectionname"></a>
<a id="tocsconnectionname"></a>

```json
"string"
```

<h2 id="tocS_ConnectionArn">ConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionarn"></a>
<a id="schema_ConnectionArn"></a>
<a id="tocSconnectionarn"></a>
<a id="tocsconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_ProviderType">ProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertype"></a>
<a id="schema_ProviderType"></a>
<a id="tocSprovidertype"></a>
<a id="tocsprovidertype"></a>

```json
"Bitbucket"
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_HostArn">HostArn</h2>
<!-- backwards compatibility -->
<a id="schemahostarn"></a>
<a id="schema_HostArn"></a>
<a id="tocShostarn"></a>
<a id="tocshostarn"></a>

```json
"string"
```

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "ConnectionName": {},
  "ConnectionArn": {},
  "ProviderType": {},
  "OwnerAccountId": {},
  "ConnectionStatus": {},
  "HostArn": {}
}
```

<p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionName|object|false|none|none|
|ConnectionArn|object|false|none|none|
|ProviderType|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|HostArn|object|false|none|none|

<h2 id="tocS_ConnectionList">ConnectionList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionlist"></a>
<a id="schema_ConnectionList"></a>
<a id="tocSconnectionlist"></a>
<a id="tocsconnectionlist"></a>

```json
[
  {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "OwnerAccountId": {},
    "ConnectionStatus": {},
    "HostArn": {}
  }
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

<h2 id="tocS_HostName">HostName</h2>
<!-- backwards compatibility -->
<a id="schemahostname"></a>
<a id="schema_HostName"></a>
<a id="tocShostname"></a>
<a id="tocshostname"></a>

```json
"string"
```

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_VpcConfiguration">VpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfiguration"></a>
<a id="schema_VpcConfiguration"></a>
<a id="tocSvpcconfiguration"></a>
<a id="tocsvpcconfiguration"></a>

```json
{
  "VpcId": {},
  "SubnetIds": {},
  "SecurityGroupIds": {},
  "TlsCertificate": {}
}
```

The VPC configuration provisioned for the host.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|true|none|none|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|true|none|none|
|TlsCertificate|object|false|none|none|

<h2 id="tocS_HostStatus">HostStatus</h2>
<!-- backwards compatibility -->
<a id="schemahoststatus"></a>
<a id="schema_HostStatus"></a>
<a id="tocShoststatus"></a>
<a id="tocshoststatus"></a>

```json
"string"
```

<h2 id="tocS_HostStatusMessage">HostStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemahoststatusmessage"></a>
<a id="schema_HostStatusMessage"></a>
<a id="tocShoststatusmessage"></a>
<a id="tocshoststatusmessage"></a>

```json
"string"
```

<h2 id="tocS_Host">Host</h2>
<!-- backwards compatibility -->
<a id="schemahost"></a>
<a id="schema_Host"></a>
<a id="tocShost"></a>
<a id="tocshost"></a>

```json
{
  "Name": {},
  "HostArn": {},
  "ProviderType": {},
  "ProviderEndpoint": {},
  "VpcConfiguration": {
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {},
    "TlsCertificate": {}
  },
  "Status": {},
  "StatusMessage": {}
}
```

<p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|HostArn|object|false|none|none|
|ProviderType|object|false|none|none|
|ProviderEndpoint|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_HostList">HostList</h2>
<!-- backwards compatibility -->
<a id="schemahostlist"></a>
<a id="schema_HostList"></a>
<a id="tocShostlist"></a>
<a id="tocshostlist"></a>

```json
[
  {
    "Name": {},
    "HostArn": {},
    "ProviderType": {},
    "ProviderEndpoint": {},
    "VpcConfiguration": {
      "VpcId": {},
      "SubnetIds": {},
      "SecurityGroupIds": {},
      "TlsCertificate": {}
    },
    "Status": {},
    "StatusMessage": {}
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
0
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"stringstrin"
```

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "stringstrin"
]
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

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "stringstringstr"
]
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

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

<p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p>

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
  "string"
]
```

<h2 id="tocS_TlsCertificate">TlsCertificate</h2>
<!-- backwards compatibility -->
<a id="schematlscertificate"></a>
<a id="schema_TlsCertificate"></a>
<a id="tocStlscertificate"></a>
<a id="tocstlscertificate"></a>

```json
"string"
```

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"stringstring"
```
