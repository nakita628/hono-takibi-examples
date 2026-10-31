<h1 id="aws-cloud-map">AWS Cloud Map v2017-03-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Cloud Map</fullname> <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance becomes available, you can call the Cloud Map API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records. </p>

Base URLs:

* <a href="http://servicediscovery.us-east-1.amazonaws.com">http://servicediscovery.us-east-1.amazonaws.com</a> - The ServiceDiscovery multi-region endpoint

* <a href="https://servicediscovery.us-east-1.amazonaws.com">https://servicediscovery.us-east-1.amazonaws.com</a> - The ServiceDiscovery multi-region endpoint

* <a href="http://servicediscovery.cn-north-1.amazonaws.com.cn">http://servicediscovery.cn-north-1.amazonaws.com.cn</a> - The ServiceDiscovery endpoint for China (Beijing) and China (Ningxia)

* <a href="https://servicediscovery.cn-north-1.amazonaws.com.cn">https://servicediscovery.cn-north-1.amazonaws.com.cn</a> - The ServiceDiscovery endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/servicediscovery/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-cloud-map-default">Default</h1>

## CreateHttpNamespace

<a id="opIdCreateHttpNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.CreateHttpNamespace' \
  -d '{
    "Name": {},
    "CreatorRequestId": {},
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace`

<p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

> Body parameter

```json
{
  "Name": {},
  "CreatorRequestId": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="createhttpnamespace-parameters">Parameters</h3>

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
|body|body|[CreateHttpNamespaceRequest](#schemacreatehttpnamespacerequest)|true|none|
|» Name|body|object|true|none|
|» CreatorRequestId|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.CreateHttpNamespace|

> Example responses

> 200 Response

```json
{
  "OperationId": "httpvoqozuhfet5kzxoxg-a-response-example"
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

<h3 id="createhttpnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHttpNamespaceResponse](#schemacreatehttpnamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceAlreadyExists|[NamespaceAlreadyExists](#schemanamespacealreadyexists)|
|482|482|ResourceLimitExceeded|[ResourceLimitExceeded](#schemaresourcelimitexceeded)|
|483|483|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePrivateDnsNamespace

<a id="opIdCreatePrivateDnsNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.CreatePrivateDnsNamespace' \
  -d '{
    "Name": {},
    "CreatorRequestId": {},
    "Description": {},
    "Vpc": {},
    "Tags": {},
    "Properties": {
      "DnsProperties": {
        "SOA": {
          "TTL": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace`

Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.

> Body parameter

```json
{
  "Name": {},
  "CreatorRequestId": {},
  "Description": {},
  "Vpc": {},
  "Tags": {},
  "Properties": {
    "DnsProperties": {
      "SOA": {
        "TTL": {}
      }
    }
  }
}
```

<h3 id="createprivatednsnamespace-parameters">Parameters</h3>

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
|body|body|[CreatePrivateDnsNamespaceRequest](#schemacreateprivatednsnamespacerequest)|true|none|
|» Name|body|object|true|none|
|» CreatorRequestId|body|object|false|none|
|» Description|body|object|false|none|
|» Vpc|body|object|true|none|
|» Tags|body|object|false|none|
|» Properties|body|object|false|none|
|» » DnsProperties|body|object|true|none|
|» » » SOA|body|object|true|none|
|» » » » TTL|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.CreatePrivateDnsNamespace|

> Example responses

> 200 Response

```json
{
  "OperationId": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd"
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

<h3 id="createprivatednsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePrivateDnsNamespaceResponse](#schemacreateprivatednsnamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceAlreadyExists|[NamespaceAlreadyExists](#schemanamespacealreadyexists)|
|482|482|ResourceLimitExceeded|[ResourceLimitExceeded](#schemaresourcelimitexceeded)|
|483|483|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePublicDnsNamespace

<a id="opIdCreatePublicDnsNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.CreatePublicDnsNamespace' \
  -d '{
    "Name": {},
    "CreatorRequestId": {},
    "Description": {},
    "Tags": {},
    "Properties": {
      "DnsProperties": {
        "SOA": {
          "TTL": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace`

<p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>

> Body parameter

```json
{
  "Name": {},
  "CreatorRequestId": {},
  "Description": {},
  "Tags": {},
  "Properties": {
    "DnsProperties": {
      "SOA": {
        "TTL": {}
      }
    }
  }
}
```

<h3 id="createpublicdnsnamespace-parameters">Parameters</h3>

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
|body|body|[CreatePublicDnsNamespaceRequest](#schemacreatepublicdnsnamespacerequest)|true|none|
|» Name|body|object|true|none|
|» CreatorRequestId|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|
|» Properties|body|object|false|none|
|» » DnsProperties|body|object|true|none|
|» » » SOA|body|object|true|none|
|» » » » TTL|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.CreatePublicDnsNamespace|

> Example responses

> 200 Response

```json
{
  "OperationId": "dns2voqozuhfet5kzxoxg-a-response-example"
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

<h3 id="createpublicdnsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePublicDnsNamespaceResponse](#schemacreatepublicdnsnamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceAlreadyExists|[NamespaceAlreadyExists](#schemanamespacealreadyexists)|
|482|482|ResourceLimitExceeded|[ResourceLimitExceeded](#schemaresourcelimitexceeded)|
|483|483|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateService

<a id="opIdCreateService"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.CreateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.CreateService' \
  -d '{
    "Name": {},
    "NamespaceId": {},
    "CreatorRequestId": {},
    "Description": {},
    "DnsConfig": {
      "NamespaceId": {},
      "RoutingPolicy": {},
      "DnsRecords": {}
    },
    "HealthCheckConfig": {
      "Type": {},
      "ResourcePath": {},
      "FailureThreshold": {}
    },
    "HealthCheckCustomConfig": {
      "FailureThreshold": {}
    },
    "Tags": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.CreateService`

<p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

> Body parameter

```json
{
  "Name": {},
  "NamespaceId": {},
  "CreatorRequestId": {},
  "Description": {},
  "DnsConfig": {
    "NamespaceId": {},
    "RoutingPolicy": {},
    "DnsRecords": {}
  },
  "HealthCheckConfig": {
    "Type": {},
    "ResourcePath": {},
    "FailureThreshold": {}
  },
  "HealthCheckCustomConfig": {
    "FailureThreshold": {}
  },
  "Tags": {},
  "Type": {}
}
```

<h3 id="createservice-parameters">Parameters</h3>

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
|body|body|[CreateServiceRequest](#schemacreateservicerequest)|true|none|
|» Name|body|object|true|none|
|» NamespaceId|body|object|false|none|
|» CreatorRequestId|body|object|false|none|
|» Description|body|object|false|none|
|» DnsConfig|body|object|false|none|
|» » NamespaceId|body|object|false|none|
|» » RoutingPolicy|body|object|false|none|
|» » DnsRecords|body|object|true|none|
|» HealthCheckConfig|body|object|false|none|
|» » Type|body|object|true|none|
|» » ResourcePath|body|object|false|none|
|» » FailureThreshold|body|object|false|none|
|» HealthCheckCustomConfig|body|object|false|none|
|» » FailureThreshold|body|object|false|none|
|» Tags|body|object|false|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.CreateService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
    "CreateDate": 1587081768.334,
    "CreatorRequestId": "567c1193-6b00-4308-bd57-ad38a8822d25",
    "DnsConfig": {
      "DnsRecords": [
        {
          "TTL": 60,
          "Type": "A"
        }
      ],
      "NamespaceId": "ns-ylexjili4cdxy3xm",
      "RoutingPolicy": "MULTIVALUE"
    },
    "Id": "srv-p5zdwlg5uvvzjita",
    "Name": "myservice",
    "NamespaceId": "ns-ylexjili4cdxy3xm"
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

<h3 id="createservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceResponse](#schemacreateserviceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|ResourceLimitExceeded|[ResourceLimitExceeded](#schemaresourcelimitexceeded)|
|482|482|NamespaceNotFound|[NamespaceNotFound](#schemanamespacenotfound)|
|483|483|ServiceAlreadyExists|[ServiceAlreadyExists](#schemaservicealreadyexists)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNamespace

<a id="opIdDeleteNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.DeleteNamespace' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace`

Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="deletenamespace-parameters">Parameters</h3>

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
|body|body|[DeleteNamespaceRequest](#schemadeletenamespacerequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.DeleteNamespace|

> Example responses

> 200 Response

```json
{
  "OperationId": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k98y6drk"
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

<h3 id="deletenamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNamespaceResponse](#schemadeletenamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceNotFound|[NamespaceNotFound](#schemanamespacenotfound)|
|482|482|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|
|483|483|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteService

<a id="opIdDeleteService"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.DeleteService' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService`

Deletes a specified service. If the service still contains one or more registered instances, the request fails.

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="deleteservice-parameters">Parameters</h3>

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
|body|body|[DeleteServiceRequest](#schemadeleteservicerequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.DeleteService|

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

<h3 id="deleteservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceResponse](#schemadeleteserviceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|
|482|482|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterInstance

<a id="opIdDeregisterInstance"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.DeregisterInstance' \
  -d '{
    "ServiceId": {},
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance`

Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.

> Body parameter

```json
{
  "ServiceId": {},
  "InstanceId": {}
}
```

<h3 id="deregisterinstance-parameters">Parameters</h3>

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
|body|body|[DeregisterInstanceRequest](#schemaderegisterinstancerequest)|true|none|
|» ServiceId|body|object|true|none|
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.DeregisterInstance|

> Example responses

> 200 Response

```json
{
  "OperationId": "4yejorelbukcjzpnr6tlmrghsjwpngf4-k98rnaiq"
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

<h3 id="deregisterinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterInstanceResponse](#schemaderegisterinstanceresponse)|
|480|480|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|InstanceNotFound|[InstanceNotFound](#schemainstancenotfound)|
|483|483|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|
|484|484|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DiscoverInstances

<a id="opIdDiscoverInstances"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.DiscoverInstances' \
  -d '{
    "NamespaceName": {},
    "ServiceName": {},
    "MaxResults": {},
    "QueryParameters": {
      "property1": "string",
      "property2": "string"
    },
    "OptionalParameters": {
      "property1": "string",
      "property2": "string"
    },
    "HealthStatus": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances`

Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.

> Body parameter

```json
{
  "NamespaceName": {},
  "ServiceName": {},
  "MaxResults": {},
  "QueryParameters": {
    "property1": "string",
    "property2": "string"
  },
  "OptionalParameters": {
    "property1": "string",
    "property2": "string"
  },
  "HealthStatus": {}
}
```

<h3 id="discoverinstances-parameters">Parameters</h3>

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
|body|body|[DiscoverInstancesRequest](#schemadiscoverinstancesrequest)|true|none|
|» NamespaceName|body|object|true|none|
|» ServiceName|body|object|true|none|
|» MaxResults|body|object|false|none|
|» QueryParameters|body|object|false|none|
|» » **additionalProperties**|body|[AttrValue](#schemaattrvalue)|false|none|
|» OptionalParameters|body|object|false|none|
|» » **additionalProperties**|body|[AttrValue](#schemaattrvalue)|false|none|
|» HealthStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.DiscoverInstances|

> Example responses

> 200 Response

```json
{
  "Instances": [
    {
      "Attributes": {
        "AWS_INSTANCE_IPV4": "172.2.1.3",
        "AWS_INSTANCE_PORT": "808"
      },
      "HealthStatus": "UNKNOWN",
      "InstanceId": "myservice-53",
      "NamespaceName": "example.com",
      "ServiceName": "myservice"
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

<h3 id="discoverinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DiscoverInstancesResponse](#schemadiscoverinstancesresponse)|
|480|480|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|
|481|481|NamespaceNotFound|[NamespaceNotFound](#schemanamespacenotfound)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|
|483|483|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstance

<a id="opIdGetInstance"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.GetInstance' \
  -d '{
    "ServiceId": {},
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance`

Gets information about a specified instance.

> Body parameter

```json
{
  "ServiceId": {},
  "InstanceId": {}
}
```

<h3 id="getinstance-parameters">Parameters</h3>

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
|body|body|[GetInstanceRequest](#schemagetinstancerequest)|true|none|
|» ServiceId|body|object|true|none|
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.GetInstance|

> Example responses

> 200 Response

```json
{
  "Instance": {
    "Attributes": {
      "AWS_INSTANCE_IPV4": "192.0.2.44",
      "AWS_INSTANCE_PORT": "80",
      "color": "green",
      "region": "us-west-2",
      "stage": "beta"
    },
    "Id": "i-abcd1234"
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

<h3 id="getinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceResponse](#schemagetinstanceresponse)|
|480|480|InstanceNotFound|[InstanceNotFound](#schemainstancenotfound)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstancesHealthStatus

<a id="opIdGetInstancesHealthStatus"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.GetInstancesHealthStatus' \
  -d '{
    "ServiceId": {},
    "Instances": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus`

<p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>

> Body parameter

```json
{
  "ServiceId": {},
  "Instances": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getinstanceshealthstatus-parameters">Parameters</h3>

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
|body|body|[GetInstancesHealthStatusRequest](#schemagetinstanceshealthstatusrequest)|true|none|
|» ServiceId|body|object|true|none|
|» Instances|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.GetInstancesHealthStatus|

> Example responses

> 200 Response

```json
{
  "Status": {
    "i-abcd1234": "HEALTHY",
    "i-abcd1235": "UNHEALTHY"
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

<h3 id="getinstanceshealthstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstancesHealthStatusResponse](#schemagetinstanceshealthstatusresponse)|
|480|480|InstanceNotFound|[InstanceNotFound](#schemainstancenotfound)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNamespace

<a id="opIdGetNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.GetNamespace' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace`

Gets information about a namespace.

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="getnamespace-parameters">Parameters</h3>

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
|body|body|[GetNamespaceRequest](#schemagetnamespacerequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.GetNamespace|

> Example responses

> 200 Response

```json
{
  "Namespace": {
    "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-e1tpmexample0001",
    "CreateDate": "20181118T211712Z",
    "CreatorRequestId": "example-creator-request-id-0001",
    "Description": "Example.com AWS Cloud Map HTTP Namespace",
    "Id": "ns-e1tpmexample0001",
    "Name": "example-http.com",
    "Properties": {
      "DnsProperties": {},
      "HttpProperties": {
        "HttpName": "example-http.com"
      }
    },
    "Type": "HTTP"
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

<h3 id="getnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNamespaceResponse](#schemagetnamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceNotFound|[NamespaceNotFound](#schemanamespacenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOperation

<a id="opIdGetOperation"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.GetOperation' \
  -d '{
    "OperationId": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation`

<p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>

> Body parameter

```json
{
  "OperationId": {}
}
```

<h3 id="getoperation-parameters">Parameters</h3>

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
|body|body|[GetOperationRequest](#schemagetoperationrequest)|true|none|
|» OperationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.GetOperation|

> Example responses

> 200 Response

```json
{
  "Operation": {
    "CreateDate": 1587055860.121,
    "Id": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd",
    "Status": "SUCCESS",
    "Targets": {
      "NAMESPACE": "ns-ylexjili4cdxy3xm"
    },
    "Type": "CREATE_NAMESPACE",
    "UpdateDate": 1587055900.469
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

<h3 id="getoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOperationResponse](#schemagetoperationresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationNotFound|[OperationNotFound](#schemaoperationnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetService

<a id="opIdGetService"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.GetService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.GetService' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.GetService`

Gets the settings for a specified service.

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="getservice-parameters">Parameters</h3>

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
|body|body|[GetServiceRequest](#schemagetservicerequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.GetService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004",
    "CreateDate": "20181118T211707Z",
    "CreatorRequestId": "example-creator-request-id-0004",
    "Description": "Example.com AWS Cloud Map HTTP Service",
    "HealthCheckConfig": {
      "FailureThreshold": 3,
      "ResourcePath": "/",
      "Type": "HTTPS"
    },
    "Id": "srv-e4anhexample0004",
    "Name": "example-http-service",
    "NamespaceId": "ns-e4anhexample0004"
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

<h3 id="getservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceResponse](#schemagetserviceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstances

<a id="opIdListInstances"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.ListInstances' \
  -d '{
    "ServiceId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances`

Lists summary information about the instances that you registered by using a specified service.

> Body parameter

```json
{
  "ServiceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listinstances-parameters">Parameters</h3>

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
|body|body|[ListInstancesRequest](#schemalistinstancesrequest)|true|none|
|» ServiceId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.ListInstances|

> Example responses

> 200 Response

```json
{
  "Instances": [
    {
      "Attributes": {
        "AWS_INSTANCE_IPV4": "172.2.1.3",
        "AWS_INSTANCE_PORT": "808"
      },
      "Id": "i-06bdabbae60f65a4e"
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

<h3 id="listinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstancesResponse](#schemalistinstancesresponse)|
|480|480|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNamespaces

<a id="opIdListNamespaces"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.ListNamespaces' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces`

Lists summary information about the namespaces that were created by the current Amazon Web Services account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listnamespaces-parameters">Parameters</h3>

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
|body|body|[ListNamespacesRequest](#schemalistnamespacesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.ListNamespaces|

> Example responses

> 200 Response

```json
{
  "Namespaces": [
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-a3ccy2e7e3a7rile",
      "CreateDate": 1585354387.357,
      "Id": "ns-a3ccy2e7e3a7rile",
      "Name": "local",
      "Properties": {
        "DnsProperties": {
          "HostedZoneId": "Z06752353VBUDTC32S84S"
        },
        "HttpProperties": {
          "HttpName": "local"
        }
      },
      "Type": "DNS_PRIVATE"
    },
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-pocfyjtrsmwtvcxx",
      "CreateDate": 1586468974.698,
      "Description": "My second namespace",
      "Id": "ns-pocfyjtrsmwtvcxx",
      "Name": "My-second-namespace",
      "Properties": {
        "DnsProperties": {},
        "HttpProperties": {
          "HttpName": "My-second-namespace"
        }
      },
      "Type": "HTTP"
    },
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-ylexjili4cdxy3xm",
      "CreateDate": 1587055896.798,
      "Id": "ns-ylexjili4cdxy3xm",
      "Name": "example.com",
      "Properties": {
        "DnsProperties": {
          "HostedZoneId": "Z09983722P0QME1B3KC8I"
        },
        "HttpProperties": {
          "HttpName": "example.com"
        }
      },
      "Type": "DNS_PRIVATE"
    }
  ]
}
```

> 480 Response

```json
null
```

<h3 id="listnamespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNamespacesResponse](#schemalistnamespacesresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOperations

<a id="opIdListOperations"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.ListOperations' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations`

Lists operations that match the criteria that you specify.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listoperations-parameters">Parameters</h3>

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
|body|body|[ListOperationsRequest](#schemalistoperationsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.ListOperations|

> Example responses

> 200 Response

```json
{
  "Operations": [
    {
      "Id": "76yy8ovhpdz0plmjzbsnqgnrqvpv2qdt-kexample",
      "Status": "SUCCESS"
    },
    {
      "Id": "prysnyzpji3u2ciy45nke83x2zanl7yk-dexample",
      "Status": "SUCCESS"
    },
    {
      "Id": "ko4ekftir7kzlbechsh7xvcdgcpk66gh-7example",
      "Status": "PENDING"
    }
  ]
}
```

> 480 Response

```json
null
```

<h3 id="listoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOperationsResponse](#schemalistoperationsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServices

<a id="opIdListServices"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.ListServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.ListServices' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.ListServices`

Lists summary information for all the services that are associated with one or more specified namespaces.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listservices-parameters">Parameters</h3>

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
|body|body|[ListServicesRequest](#schemalistservicesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.ListServices|

> Example responses

> 200 Response

```json
{
  "Services": [
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
      "CreateDate": 1587081768.334,
      "DnsConfig": {
        "DnsRecords": [
          {
            "TTL": 60,
            "Type": "A"
          }
        ],
        "RoutingPolicy": "MULTIVALUE"
      },
      "Id": "srv-p5zdwlg5uvvzjita",
      "Name": "myservice"
    }
  ]
}
```

> 480 Response

```json
null
```

<h3 id="listservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicesResponse](#schemalistservicesresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource`

Lists tags for the specified resource.

> Body parameter

```json
{
  "ResourceARN": {}
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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": [
    {
      "Key": "Project",
      "Value": "Zeta"
    },
    {
      "Key": "Department",
      "Value": "Engineering"
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterInstance

<a id="opIdRegisterInstance"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.RegisterInstance' \
  -d '{
    "ServiceId": {},
    "InstanceId": {},
    "CreatorRequestId": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance`

<p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

> Body parameter

```json
{
  "ServiceId": {},
  "InstanceId": {},
  "CreatorRequestId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="registerinstance-parameters">Parameters</h3>

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
|body|body|[RegisterInstanceRequest](#schemaregisterinstancerequest)|true|none|
|» ServiceId|body|object|true|none|
|» InstanceId|body|object|true|none|
|» CreatorRequestId|body|object|false|none|
|» Attributes|body|object|true|none|
|» » **additionalProperties**|body|[AttrValue](#schemaattrvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.RegisterInstance|

> Example responses

> 200 Response

```json
{
  "OperationId": "4yejorelbukcjzpnr6tlmrghsjwpngf4-k95yg2u7"
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

<h3 id="registerinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterInstanceResponse](#schemaregisterinstanceresponse)|
|480|480|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|
|483|483|ResourceLimitExceeded|[ResourceLimitExceeded](#schemaresourcelimitexceeded)|
|484|484|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.TagResource`

Adds one or more tags to the specified resource.

> Body parameter

```json
{
  "ResourceARN": {},
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
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource`

Removes one or more tags from the specified resource.

> Body parameter

```json
{
  "ResourceARN": {},
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
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHttpNamespace

<a id="opIdUpdateHttpNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.UpdateHttpNamespace' \
  -d '{
    "Id": {},
    "UpdaterRequestId": {},
    "Namespace": {
      "Description": {}
    }
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace`

Updates an HTTP namespace.

> Body parameter

```json
{
  "Id": {},
  "UpdaterRequestId": {},
  "Namespace": {
    "Description": {}
  }
}
```

<h3 id="updatehttpnamespace-parameters">Parameters</h3>

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
|body|body|[UpdateHttpNamespaceRequest](#schemaupdatehttpnamespacerequest)|true|none|
|» Id|body|object|true|none|
|» UpdaterRequestId|body|object|false|none|
|» Namespace|body|object|true|none|
|» » Description|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.UpdateHttpNamespace|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="updatehttpnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateHttpNamespaceResponse](#schemaupdatehttpnamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceNotFound|[NamespaceNotFound](#schemanamespacenotfound)|
|482|482|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|
|483|483|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInstanceCustomHealthStatus

<a id="opIdUpdateInstanceCustomHealthStatus"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus' \
  -d '{
    "ServiceId": {},
    "InstanceId": {},
    "Status": {}
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus`

<p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>

> Body parameter

```json
{
  "ServiceId": {},
  "InstanceId": {},
  "Status": {}
}
```

<h3 id="updateinstancecustomhealthstatus-parameters">Parameters</h3>

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
|body|body|[UpdateInstanceCustomHealthStatusRequest](#schemaupdateinstancecustomhealthstatusrequest)|true|none|
|» ServiceId|body|object|true|none|
|» InstanceId|body|object|true|none|
|» Status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus|

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

<h3 id="updateinstancecustomhealthstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InstanceNotFound|[InstanceNotFound](#schemainstancenotfound)|
|481|481|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|
|482|482|CustomHealthNotFound|[CustomHealthNotFound](#schemacustomhealthnotfound)|
|483|483|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePrivateDnsNamespace

<a id="opIdUpdatePrivateDnsNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace' \
  -d '{
    "Id": {},
    "UpdaterRequestId": {},
    "Namespace": {
      "Description": {},
      "Properties": {
        "DnsProperties": {
          "SOA": {
            "TTL": {}
          }
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace`

Updates a private DNS namespace.

> Body parameter

```json
{
  "Id": {},
  "UpdaterRequestId": {},
  "Namespace": {
    "Description": {},
    "Properties": {
      "DnsProperties": {
        "SOA": {
          "TTL": {}
        }
      }
    }
  }
}
```

<h3 id="updateprivatednsnamespace-parameters">Parameters</h3>

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
|body|body|[UpdatePrivateDnsNamespaceRequest](#schemaupdateprivatednsnamespacerequest)|true|none|
|» Id|body|object|true|none|
|» UpdaterRequestId|body|object|false|none|
|» Namespace|body|object|true|none|
|» » Description|body|object|false|none|
|» » Properties|body|object|false|none|
|» » » DnsProperties|body|object|true|none|
|» » » » SOA|body|object|true|none|
|» » » » » TTL|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="updateprivatednsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePrivateDnsNamespaceResponse](#schemaupdateprivatednsnamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceNotFound|[NamespaceNotFound](#schemanamespacenotfound)|
|482|482|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|
|483|483|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePublicDnsNamespace

<a id="opIdUpdatePublicDnsNamespace"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.UpdatePublicDnsNamespace' \
  -d '{
    "Id": {},
    "UpdaterRequestId": {},
    "Namespace": {
      "Description": {},
      "Properties": {
        "DnsProperties": {
          "SOA": {
            "TTL": {}
          }
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace`

Updates a public DNS namespace.

> Body parameter

```json
{
  "Id": {},
  "UpdaterRequestId": {},
  "Namespace": {
    "Description": {},
    "Properties": {
      "DnsProperties": {
        "SOA": {
          "TTL": {}
        }
      }
    }
  }
}
```

<h3 id="updatepublicdnsnamespace-parameters">Parameters</h3>

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
|body|body|[UpdatePublicDnsNamespaceRequest](#schemaupdatepublicdnsnamespacerequest)|true|none|
|» Id|body|object|true|none|
|» UpdaterRequestId|body|object|false|none|
|» Namespace|body|object|true|none|
|» » Description|body|object|false|none|
|» » Properties|body|object|false|none|
|» » » DnsProperties|body|object|true|none|
|» » » » SOA|body|object|true|none|
|» » » » » TTL|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.UpdatePublicDnsNamespace|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="updatepublicdnsnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePublicDnsNamespaceResponse](#schemaupdatepublicdnsnamespaceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NamespaceNotFound|[NamespaceNotFound](#schemanamespacenotfound)|
|482|482|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|
|483|483|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateService

<a id="opIdUpdateService"></a>

> Code samples

```bash
curl 'https://servicediscovery.us-east-1.amazonaws.com/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53AutoNaming_v20170314.UpdateService' \
  -d '{
    "Id": {},
    "Service": {
      "Description": {},
      "DnsConfig": {
        "DnsRecords": {}
      },
      "HealthCheckConfig": {
        "Type": {},
        "ResourcePath": {},
        "FailureThreshold": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService`

<p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

> Body parameter

```json
{
  "Id": {},
  "Service": {
    "Description": {},
    "DnsConfig": {
      "DnsRecords": {}
    },
    "HealthCheckConfig": {
      "Type": {},
      "ResourcePath": {},
      "FailureThreshold": {}
    }
  }
}
```

<h3 id="updateservice-parameters">Parameters</h3>

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
|body|body|[UpdateServiceRequest](#schemaupdateservicerequest)|true|none|
|» Id|body|object|true|none|
|» Service|body|object|true|none|
|» » Description|body|object|false|none|
|» » DnsConfig|body|object|false|none|
|» » » DnsRecords|body|object|true|none|
|» » HealthCheckConfig|body|object|false|none|
|» » » Type|body|object|true|none|
|» » » ResourcePath|body|object|false|none|
|» » » FailureThreshold|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53AutoNaming_v20170314.UpdateService|

> Example responses

> 200 Response

```json
{
  "OperationId": "m35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5"
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

<h3 id="updateservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceResponse](#schemaupdateserviceresponse)|
|480|480|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|ServiceNotFound|[ServiceNotFound](#schemaservicenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateHttpNamespaceResponse">CreateHttpNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehttpnamespaceresponse"></a>
<a id="schema_CreateHttpNamespaceResponse"></a>
<a id="tocScreatehttpnamespaceresponse"></a>
<a id="tocscreatehttpnamespaceresponse"></a>

```json
{
  "OperationId": "httpvoqozuhfet5kzxoxg-a-response-example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_CreateHttpNamespaceRequest">CreateHttpNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehttpnamespacerequest"></a>
<a id="schema_CreateHttpNamespaceRequest"></a>
<a id="tocScreatehttpnamespacerequest"></a>
<a id="tocscreatehttpnamespacerequest"></a>

```json
{
  "Name": {},
  "CreatorRequestId": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CreatorRequestId|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InvalidInput">InvalidInput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinput"></a>
<a id="schema_InvalidInput"></a>
<a id="tocSinvalidinput"></a>
<a id="tocsinvalidinput"></a>

```json
null
```

<h2 id="tocS_NamespaceAlreadyExists">NamespaceAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemanamespacealreadyexists"></a>
<a id="schema_NamespaceAlreadyExists"></a>
<a id="tocSnamespacealreadyexists"></a>
<a id="tocsnamespacealreadyexists"></a>

```json
null
```

<h2 id="tocS_ResourceLimitExceeded">ResourceLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceeded"></a>
<a id="schema_ResourceLimitExceeded"></a>
<a id="tocSresourcelimitexceeded"></a>
<a id="tocsresourcelimitexceeded"></a>

```json
null
```

<h2 id="tocS_DuplicateRequest">DuplicateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaduplicaterequest"></a>
<a id="schema_DuplicateRequest"></a>
<a id="tocSduplicaterequest"></a>
<a id="tocsduplicaterequest"></a>

```json
null
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_CreatePrivateDnsNamespaceResponse">CreatePrivateDnsNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprivatednsnamespaceresponse"></a>
<a id="schema_CreatePrivateDnsNamespaceResponse"></a>
<a id="tocScreateprivatednsnamespaceresponse"></a>
<a id="tocscreateprivatednsnamespaceresponse"></a>

```json
{
  "OperationId": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_CreatePrivateDnsNamespaceRequest">CreatePrivateDnsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprivatednsnamespacerequest"></a>
<a id="schema_CreatePrivateDnsNamespaceRequest"></a>
<a id="tocScreateprivatednsnamespacerequest"></a>
<a id="tocscreateprivatednsnamespacerequest"></a>

```json
{
  "Name": {},
  "CreatorRequestId": {},
  "Description": {},
  "Vpc": {},
  "Tags": {},
  "Properties": {
    "DnsProperties": {
      "SOA": {
        "TTL": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CreatorRequestId|object|false|none|none|
|Description|object|false|none|none|
|Vpc|object|true|none|none|
|Tags|object|false|none|none|
|Properties|object|false|none|none|

<h2 id="tocS_CreatePublicDnsNamespaceResponse">CreatePublicDnsNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepublicdnsnamespaceresponse"></a>
<a id="schema_CreatePublicDnsNamespaceResponse"></a>
<a id="tocScreatepublicdnsnamespaceresponse"></a>
<a id="tocscreatepublicdnsnamespaceresponse"></a>

```json
{
  "OperationId": "dns2voqozuhfet5kzxoxg-a-response-example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_CreatePublicDnsNamespaceRequest">CreatePublicDnsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepublicdnsnamespacerequest"></a>
<a id="schema_CreatePublicDnsNamespaceRequest"></a>
<a id="tocScreatepublicdnsnamespacerequest"></a>
<a id="tocscreatepublicdnsnamespacerequest"></a>

```json
{
  "Name": {},
  "CreatorRequestId": {},
  "Description": {},
  "Tags": {},
  "Properties": {
    "DnsProperties": {
      "SOA": {
        "TTL": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CreatorRequestId|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|Properties|object|false|none|none|

<h2 id="tocS_CreateServiceResponse">CreateServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceresponse"></a>
<a id="schema_CreateServiceResponse"></a>
<a id="tocScreateserviceresponse"></a>
<a id="tocscreateserviceresponse"></a>

```json
{
  "Service": {
    "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
    "CreateDate": 1587081768.334,
    "CreatorRequestId": "567c1193-6b00-4308-bd57-ad38a8822d25",
    "DnsConfig": {
      "DnsRecords": [
        {
          "TTL": 60,
          "Type": "A"
        }
      ],
      "NamespaceId": "ns-ylexjili4cdxy3xm",
      "RoutingPolicy": "MULTIVALUE"
    },
    "Id": "srv-p5zdwlg5uvvzjita",
    "Name": "myservice",
    "NamespaceId": "ns-ylexjili4cdxy3xm"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|false|none|none|

<h2 id="tocS_CreateServiceRequest">CreateServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicerequest"></a>
<a id="schema_CreateServiceRequest"></a>
<a id="tocScreateservicerequest"></a>
<a id="tocscreateservicerequest"></a>

```json
{
  "Name": {},
  "NamespaceId": {},
  "CreatorRequestId": {},
  "Description": {},
  "DnsConfig": {
    "NamespaceId": {},
    "RoutingPolicy": {},
    "DnsRecords": {}
  },
  "HealthCheckConfig": {
    "Type": {},
    "ResourcePath": {},
    "FailureThreshold": {}
  },
  "HealthCheckCustomConfig": {
    "FailureThreshold": {}
  },
  "Tags": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|NamespaceId|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|Description|object|false|none|none|
|DnsConfig|object|false|none|none|
|HealthCheckConfig|object|false|none|none|
|HealthCheckCustomConfig|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_NamespaceNotFound">NamespaceNotFound</h2>
<!-- backwards compatibility -->
<a id="schemanamespacenotfound"></a>
<a id="schema_NamespaceNotFound"></a>
<a id="tocSnamespacenotfound"></a>
<a id="tocsnamespacenotfound"></a>

```json
null
```

<h2 id="tocS_ServiceAlreadyExists">ServiceAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaservicealreadyexists"></a>
<a id="schema_ServiceAlreadyExists"></a>
<a id="tocSservicealreadyexists"></a>
<a id="tocsservicealreadyexists"></a>

```json
null
```

<h2 id="tocS_DeleteNamespaceResponse">DeleteNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletenamespaceresponse"></a>
<a id="schema_DeleteNamespaceResponse"></a>
<a id="tocSdeletenamespaceresponse"></a>
<a id="tocsdeletenamespaceresponse"></a>

```json
{
  "OperationId": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k98y6drk"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_DeleteNamespaceRequest">DeleteNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenamespacerequest"></a>
<a id="schema_DeleteNamespaceRequest"></a>
<a id="tocSdeletenamespacerequest"></a>
<a id="tocsdeletenamespacerequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_ResourceInUse">ResourceInUse</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuse"></a>
<a id="schema_ResourceInUse"></a>
<a id="tocSresourceinuse"></a>
<a id="tocsresourceinuse"></a>

```json
null
```

<h2 id="tocS_DeleteServiceResponse">DeleteServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceresponse"></a>
<a id="schema_DeleteServiceResponse"></a>
<a id="tocSdeleteserviceresponse"></a>
<a id="tocsdeleteserviceresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteServiceRequest">DeleteServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicerequest"></a>
<a id="schema_DeleteServiceRequest"></a>
<a id="tocSdeleteservicerequest"></a>
<a id="tocsdeleteservicerequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_ServiceNotFound">ServiceNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaservicenotfound"></a>
<a id="schema_ServiceNotFound"></a>
<a id="tocSservicenotfound"></a>
<a id="tocsservicenotfound"></a>

```json
null
```

<h2 id="tocS_DeregisterInstanceResponse">DeregisterInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterinstanceresponse"></a>
<a id="schema_DeregisterInstanceResponse"></a>
<a id="tocSderegisterinstanceresponse"></a>
<a id="tocsderegisterinstanceresponse"></a>

```json
{
  "OperationId": "4yejorelbukcjzpnr6tlmrghsjwpngf4-k98rnaiq"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_DeregisterInstanceRequest">DeregisterInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterinstancerequest"></a>
<a id="schema_DeregisterInstanceRequest"></a>
<a id="tocSderegisterinstancerequest"></a>
<a id="tocsderegisterinstancerequest"></a>

```json
{
  "ServiceId": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceId|object|true|none|none|
|InstanceId|object|true|none|none|

<h2 id="tocS_InstanceNotFound">InstanceNotFound</h2>
<!-- backwards compatibility -->
<a id="schemainstancenotfound"></a>
<a id="schema_InstanceNotFound"></a>
<a id="tocSinstancenotfound"></a>
<a id="tocsinstancenotfound"></a>

```json
null
```

<h2 id="tocS_DiscoverInstancesResponse">DiscoverInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverinstancesresponse"></a>
<a id="schema_DiscoverInstancesResponse"></a>
<a id="tocSdiscoverinstancesresponse"></a>
<a id="tocsdiscoverinstancesresponse"></a>

```json
{
  "Instances": [
    {
      "Attributes": {
        "AWS_INSTANCE_IPV4": "172.2.1.3",
        "AWS_INSTANCE_PORT": "808"
      },
      "HealthStatus": "UNKNOWN",
      "InstanceId": "myservice-53",
      "NamespaceName": "example.com",
      "ServiceName": "myservice"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|

<h2 id="tocS_DiscoverInstancesRequest">DiscoverInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverinstancesrequest"></a>
<a id="schema_DiscoverInstancesRequest"></a>
<a id="tocSdiscoverinstancesrequest"></a>
<a id="tocsdiscoverinstancesrequest"></a>

```json
{
  "NamespaceName": {},
  "ServiceName": {},
  "MaxResults": {},
  "QueryParameters": {
    "property1": "string",
    "property2": "string"
  },
  "OptionalParameters": {
    "property1": "string",
    "property2": "string"
  },
  "HealthStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamespaceName|object|true|none|none|
|ServiceName|object|true|none|none|
|MaxResults|object|false|none|none|
|QueryParameters|object|false|none|none|
|OptionalParameters|object|false|none|none|
|HealthStatus|object|false|none|none|

<h2 id="tocS_RequestLimitExceeded">RequestLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemarequestlimitexceeded"></a>
<a id="schema_RequestLimitExceeded"></a>
<a id="tocSrequestlimitexceeded"></a>
<a id="tocsrequestlimitexceeded"></a>

```json
null
```

<h2 id="tocS_GetInstanceResponse">GetInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceresponse"></a>
<a id="schema_GetInstanceResponse"></a>
<a id="tocSgetinstanceresponse"></a>
<a id="tocsgetinstanceresponse"></a>

```json
{
  "Instance": {
    "Attributes": {
      "AWS_INSTANCE_IPV4": "192.0.2.44",
      "AWS_INSTANCE_PORT": "80",
      "color": "green",
      "region": "us-west-2",
      "stage": "beta"
    },
    "Id": "i-abcd1234"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instance|object|false|none|none|

<h2 id="tocS_GetInstanceRequest">GetInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstancerequest"></a>
<a id="schema_GetInstanceRequest"></a>
<a id="tocSgetinstancerequest"></a>
<a id="tocsgetinstancerequest"></a>

```json
{
  "ServiceId": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceId|object|true|none|none|
|InstanceId|object|true|none|none|

<h2 id="tocS_GetInstancesHealthStatusResponse">GetInstancesHealthStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceshealthstatusresponse"></a>
<a id="schema_GetInstancesHealthStatusResponse"></a>
<a id="tocSgetinstanceshealthstatusresponse"></a>
<a id="tocsgetinstanceshealthstatusresponse"></a>

```json
{
  "Status": {
    "i-abcd1234": "HEALTHY",
    "i-abcd1235": "UNHEALTHY"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetInstancesHealthStatusRequest">GetInstancesHealthStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceshealthstatusrequest"></a>
<a id="schema_GetInstancesHealthStatusRequest"></a>
<a id="tocSgetinstanceshealthstatusrequest"></a>
<a id="tocsgetinstanceshealthstatusrequest"></a>

```json
{
  "ServiceId": {},
  "Instances": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceId|object|true|none|none|
|Instances|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetNamespaceResponse">GetNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnamespaceresponse"></a>
<a id="schema_GetNamespaceResponse"></a>
<a id="tocSgetnamespaceresponse"></a>
<a id="tocsgetnamespaceresponse"></a>

```json
{
  "Namespace": {
    "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-e1tpmexample0001",
    "CreateDate": "20181118T211712Z",
    "CreatorRequestId": "example-creator-request-id-0001",
    "Description": "Example.com AWS Cloud Map HTTP Namespace",
    "Id": "ns-e1tpmexample0001",
    "Name": "example-http.com",
    "Properties": {
      "DnsProperties": {},
      "HttpProperties": {
        "HttpName": "example-http.com"
      }
    },
    "Type": "HTTP"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|

<h2 id="tocS_GetNamespaceRequest">GetNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnamespacerequest"></a>
<a id="schema_GetNamespaceRequest"></a>
<a id="tocSgetnamespacerequest"></a>
<a id="tocsgetnamespacerequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_GetOperationResponse">GetOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationresponse"></a>
<a id="schema_GetOperationResponse"></a>
<a id="tocSgetoperationresponse"></a>
<a id="tocsgetoperationresponse"></a>

```json
{
  "Operation": {
    "CreateDate": 1587055860.121,
    "Id": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd",
    "Status": "SUCCESS",
    "Targets": {
      "NAMESPACE": "ns-ylexjili4cdxy3xm"
    },
    "Type": "CREATE_NAMESPACE",
    "UpdateDate": 1587055900.469
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operation|object|false|none|none|

<h2 id="tocS_GetOperationRequest">GetOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationrequest"></a>
<a id="schema_GetOperationRequest"></a>
<a id="tocSgetoperationrequest"></a>
<a id="tocsgetoperationrequest"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|true|none|none|

<h2 id="tocS_OperationNotFound">OperationNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotfound"></a>
<a id="schema_OperationNotFound"></a>
<a id="tocSoperationnotfound"></a>
<a id="tocsoperationnotfound"></a>

```json
null
```

<h2 id="tocS_GetServiceResponse">GetServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetserviceresponse"></a>
<a id="schema_GetServiceResponse"></a>
<a id="tocSgetserviceresponse"></a>
<a id="tocsgetserviceresponse"></a>

```json
{
  "Service": {
    "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004",
    "CreateDate": "20181118T211707Z",
    "CreatorRequestId": "example-creator-request-id-0004",
    "Description": "Example.com AWS Cloud Map HTTP Service",
    "HealthCheckConfig": {
      "FailureThreshold": 3,
      "ResourcePath": "/",
      "Type": "HTTPS"
    },
    "Id": "srv-e4anhexample0004",
    "Name": "example-http-service",
    "NamespaceId": "ns-e4anhexample0004"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|false|none|none|

<h2 id="tocS_GetServiceRequest">GetServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetservicerequest"></a>
<a id="schema_GetServiceRequest"></a>
<a id="tocSgetservicerequest"></a>
<a id="tocsgetservicerequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "Instances": [
    {
      "Attributes": {
        "AWS_INSTANCE_IPV4": "172.2.1.3",
        "AWS_INSTANCE_PORT": "808"
      },
      "Id": "i-06bdabbae60f65a4e"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInstancesRequest">ListInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesrequest"></a>
<a id="schema_ListInstancesRequest"></a>
<a id="tocSlistinstancesrequest"></a>
<a id="tocslistinstancesrequest"></a>

```json
{
  "ServiceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListNamespacesResponse">ListNamespacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnamespacesresponse"></a>
<a id="schema_ListNamespacesResponse"></a>
<a id="tocSlistnamespacesresponse"></a>
<a id="tocslistnamespacesresponse"></a>

```json
{
  "Namespaces": [
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-a3ccy2e7e3a7rile",
      "CreateDate": 1585354387.357,
      "Id": "ns-a3ccy2e7e3a7rile",
      "Name": "local",
      "Properties": {
        "DnsProperties": {
          "HostedZoneId": "Z06752353VBUDTC32S84S"
        },
        "HttpProperties": {
          "HttpName": "local"
        }
      },
      "Type": "DNS_PRIVATE"
    },
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-pocfyjtrsmwtvcxx",
      "CreateDate": 1586468974.698,
      "Description": "My second namespace",
      "Id": "ns-pocfyjtrsmwtvcxx",
      "Name": "My-second-namespace",
      "Properties": {
        "DnsProperties": {},
        "HttpProperties": {
          "HttpName": "My-second-namespace"
        }
      },
      "Type": "HTTP"
    },
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-ylexjili4cdxy3xm",
      "CreateDate": 1587055896.798,
      "Id": "ns-ylexjili4cdxy3xm",
      "Name": "example.com",
      "Properties": {
        "DnsProperties": {
          "HostedZoneId": "Z09983722P0QME1B3KC8I"
        },
        "HttpProperties": {
          "HttpName": "example.com"
        }
      },
      "Type": "DNS_PRIVATE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespaces|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListNamespacesRequest">ListNamespacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnamespacesrequest"></a>
<a id="schema_ListNamespacesRequest"></a>
<a id="tocSlistnamespacesrequest"></a>
<a id="tocslistnamespacesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "Operations": [
    {
      "Id": "76yy8ovhpdz0plmjzbsnqgnrqvpv2qdt-kexample",
      "Status": "SUCCESS"
    },
    {
      "Id": "prysnyzpji3u2ciy45nke83x2zanl7yk-dexample",
      "Status": "SUCCESS"
    },
    {
      "Id": "ko4ekftir7kzlbechsh7xvcdgcpk66gh-7example",
      "Status": "PENDING"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOperationsRequest">ListOperationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsrequest"></a>
<a id="schema_ListOperationsRequest"></a>
<a id="tocSlistoperationsrequest"></a>
<a id="tocslistoperationsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListServicesResponse">ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesresponse"></a>
<a id="schema_ListServicesResponse"></a>
<a id="tocSlistservicesresponse"></a>
<a id="tocslistservicesresponse"></a>

```json
{
  "Services": [
    {
      "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
      "CreateDate": 1587081768.334,
      "DnsConfig": {
        "DnsRecords": [
          {
            "TTL": 60,
            "Type": "A"
          }
        ],
        "RoutingPolicy": "MULTIVALUE"
      },
      "Id": "srv-p5zdwlg5uvvzjita",
      "Name": "myservice"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Services|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListServicesRequest">ListServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesrequest"></a>
<a id="schema_ListServicesRequest"></a>
<a id="tocSlistservicesrequest"></a>
<a id="tocslistservicesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": [
    {
      "Key": "Project",
      "Value": "Zeta"
    },
    {
      "Key": "Department",
      "Value": "Engineering"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_RegisterInstanceResponse">RegisterInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterinstanceresponse"></a>
<a id="schema_RegisterInstanceResponse"></a>
<a id="tocSregisterinstanceresponse"></a>
<a id="tocsregisterinstanceresponse"></a>

```json
{
  "OperationId": "4yejorelbukcjzpnr6tlmrghsjwpngf4-k95yg2u7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_RegisterInstanceRequest">RegisterInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterinstancerequest"></a>
<a id="schema_RegisterInstanceRequest"></a>
<a id="tocSregisterinstancerequest"></a>
<a id="tocsregisterinstancerequest"></a>

```json
{
  "ServiceId": {},
  "InstanceId": {},
  "CreatorRequestId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceId|object|true|none|none|
|InstanceId|object|true|none|none|
|CreatorRequestId|object|false|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateHttpNamespaceResponse">UpdateHttpNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehttpnamespaceresponse"></a>
<a id="schema_UpdateHttpNamespaceResponse"></a>
<a id="tocSupdatehttpnamespaceresponse"></a>
<a id="tocsupdatehttpnamespaceresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdateHttpNamespaceRequest">UpdateHttpNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehttpnamespacerequest"></a>
<a id="schema_UpdateHttpNamespaceRequest"></a>
<a id="tocSupdatehttpnamespacerequest"></a>
<a id="tocsupdatehttpnamespacerequest"></a>

```json
{
  "Id": {},
  "UpdaterRequestId": {},
  "Namespace": {
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|UpdaterRequestId|object|false|none|none|
|Namespace|object|true|none|none|

<h2 id="tocS_UpdateInstanceCustomHealthStatusRequest">UpdateInstanceCustomHealthStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancecustomhealthstatusrequest"></a>
<a id="schema_UpdateInstanceCustomHealthStatusRequest"></a>
<a id="tocSupdateinstancecustomhealthstatusrequest"></a>
<a id="tocsupdateinstancecustomhealthstatusrequest"></a>

```json
{
  "ServiceId": {},
  "InstanceId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceId|object|true|none|none|
|InstanceId|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_CustomHealthNotFound">CustomHealthNotFound</h2>
<!-- backwards compatibility -->
<a id="schemacustomhealthnotfound"></a>
<a id="schema_CustomHealthNotFound"></a>
<a id="tocScustomhealthnotfound"></a>
<a id="tocscustomhealthnotfound"></a>

```json
null
```

<h2 id="tocS_UpdatePrivateDnsNamespaceResponse">UpdatePrivateDnsNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprivatednsnamespaceresponse"></a>
<a id="schema_UpdatePrivateDnsNamespaceResponse"></a>
<a id="tocSupdateprivatednsnamespaceresponse"></a>
<a id="tocsupdateprivatednsnamespaceresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdatePrivateDnsNamespaceRequest">UpdatePrivateDnsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprivatednsnamespacerequest"></a>
<a id="schema_UpdatePrivateDnsNamespaceRequest"></a>
<a id="tocSupdateprivatednsnamespacerequest"></a>
<a id="tocsupdateprivatednsnamespacerequest"></a>

```json
{
  "Id": {},
  "UpdaterRequestId": {},
  "Namespace": {
    "Description": {},
    "Properties": {
      "DnsProperties": {
        "SOA": {
          "TTL": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|UpdaterRequestId|object|false|none|none|
|Namespace|object|true|none|none|

<h2 id="tocS_UpdatePublicDnsNamespaceResponse">UpdatePublicDnsNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepublicdnsnamespaceresponse"></a>
<a id="schema_UpdatePublicDnsNamespaceResponse"></a>
<a id="tocSupdatepublicdnsnamespaceresponse"></a>
<a id="tocsupdatepublicdnsnamespaceresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdatePublicDnsNamespaceRequest">UpdatePublicDnsNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepublicdnsnamespacerequest"></a>
<a id="schema_UpdatePublicDnsNamespaceRequest"></a>
<a id="tocSupdatepublicdnsnamespacerequest"></a>
<a id="tocsupdatepublicdnsnamespacerequest"></a>

```json
{
  "Id": {},
  "UpdaterRequestId": {},
  "Namespace": {
    "Description": {},
    "Properties": {
      "DnsProperties": {
        "SOA": {
          "TTL": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|UpdaterRequestId|object|false|none|none|
|Namespace|object|true|none|none|

<h2 id="tocS_UpdateServiceResponse">UpdateServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceresponse"></a>
<a id="schema_UpdateServiceResponse"></a>
<a id="tocSupdateserviceresponse"></a>
<a id="tocsupdateserviceresponse"></a>

```json
{
  "OperationId": "m35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdateServiceRequest">UpdateServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicerequest"></a>
<a id="schema_UpdateServiceRequest"></a>
<a id="tocSupdateservicerequest"></a>
<a id="tocsupdateservicerequest"></a>

```json
{
  "Id": {},
  "Service": {
    "Description": {},
    "DnsConfig": {
      "DnsRecords": {}
    },
    "HealthCheckConfig": {
      "Type": {},
      "ResourcePath": {},
      "FailureThreshold": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Service|object|true|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AttrKey">AttrKey</h2>
<!-- backwards compatibility -->
<a id="schemaattrkey"></a>
<a id="schema_AttrKey"></a>
<a id="tocSattrkey"></a>
<a id="tocsattrkey"></a>

```json
"string"
```

<h2 id="tocS_AttrValue">AttrValue</h2>
<!-- backwards compatibility -->
<a id="schemaattrvalue"></a>
<a id="schema_AttrValue"></a>
<a id="tocSattrvalue"></a>
<a id="tocsattrvalue"></a>

```json
"string"
```

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttrValue](#schemaattrvalue)|false|none|none|

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"string"
```

<h2 id="tocS_NamespaceNameHttp">NamespaceNameHttp</h2>
<!-- backwards compatibility -->
<a id="schemanamespacenamehttp"></a>
<a id="schema_NamespaceNameHttp"></a>
<a id="tocSnamespacenamehttp"></a>
<a id="tocsnamespacenamehttp"></a>

```json
"string"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_ResourceDescription">ResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedescription"></a>
<a id="schema_ResourceDescription"></a>
<a id="tocSresourcedescription"></a>
<a id="tocsresourcedescription"></a>

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

<h2 id="tocS_OperationId">OperationId</h2>
<!-- backwards compatibility -->
<a id="schemaoperationid"></a>
<a id="schema_OperationId"></a>
<a id="tocSoperationid"></a>
<a id="tocsoperationid"></a>

```json
"string"
```

<h2 id="tocS_NamespaceNamePrivate">NamespaceNamePrivate</h2>
<!-- backwards compatibility -->
<a id="schemanamespacenameprivate"></a>
<a id="schema_NamespaceNamePrivate"></a>
<a id="tocSnamespacenameprivate"></a>
<a id="tocsnamespacenameprivate"></a>

```json
"string"
```

<h2 id="tocS_PrivateDnsNamespaceProperties">PrivateDnsNamespaceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaprivatednsnamespaceproperties"></a>
<a id="schema_PrivateDnsNamespaceProperties"></a>
<a id="tocSprivatednsnamespaceproperties"></a>
<a id="tocsprivatednsnamespaceproperties"></a>

```json
{
  "DnsProperties": {
    "SOA": {
      "TTL": {}
    }
  }
}
```

DNS properties for the private DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DnsProperties|object|true|none|none|

<h2 id="tocS_NamespaceNamePublic">NamespaceNamePublic</h2>
<!-- backwards compatibility -->
<a id="schemanamespacenamepublic"></a>
<a id="schema_NamespaceNamePublic"></a>
<a id="tocSnamespacenamepublic"></a>
<a id="tocsnamespacenamepublic"></a>

```json
"string"
```

<h2 id="tocS_PublicDnsNamespaceProperties">PublicDnsNamespaceProperties</h2>
<!-- backwards compatibility -->
<a id="schemapublicdnsnamespaceproperties"></a>
<a id="schema_PublicDnsNamespaceProperties"></a>
<a id="tocSpublicdnsnamespaceproperties"></a>
<a id="tocspublicdnsnamespaceproperties"></a>

```json
{
  "DnsProperties": {
    "SOA": {
      "TTL": {}
    }
  }
}
```

DNS properties for the public DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DnsProperties|object|true|none|none|

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"string"
```

<h2 id="tocS_DnsConfig">DnsConfig</h2>
<!-- backwards compatibility -->
<a id="schemadnsconfig"></a>
<a id="schema_DnsConfig"></a>
<a id="tocSdnsconfig"></a>
<a id="tocsdnsconfig"></a>

```json
{
  "NamespaceId": {},
  "RoutingPolicy": {},
  "DnsRecords": {}
}
```

<p>A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.</p> <important> <p>The record types of a service can only be changed by deleting the service and recreating it with a new <code>Dnsconfig</code>.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamespaceId|object|false|none|none|
|RoutingPolicy|object|false|none|none|
|DnsRecords|object|true|none|none|

<h2 id="tocS_HealthCheckConfig">HealthCheckConfig</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckconfig"></a>
<a id="schema_HealthCheckConfig"></a>
<a id="tocShealthcheckconfig"></a>
<a id="tocshealthcheckconfig"></a>

```json
{
  "Type": {},
  "ResourcePath": {},
  "FailureThreshold": {}
}
```

<p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <dl> <dt>A and AAAA records</dt> <dd> <p>If <code>DnsConfig</code> includes configurations for both <code>A</code> and <code>AAAA</code> records, Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint tthat's specified by the IPv4 address is unhealthy, Route 53 considers both the <code>A</code> and <code>AAAA</code> records to be unhealthy. </p> </dd> <dt>CNAME records</dt> <dd> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> </dd> <dt>Request interval</dt> <dd> <p>A Route 53 health checker in each health-checking Amazon Web Services Region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another. Therefore, you might sometimes see several requests in one second that's followed by a few seconds with no health checks at all.</p> </dd> <dt>Health checking regions</dt> <dd> <p>Health checkers perform checks from all Route 53 health-checking Regions. For a list of the current Regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> </dd> <dt>Alias records</dt> <dd> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced Amazon Web Services resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> </dd> <dt>Charges for health checks</dt> <dd> <p>Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </dd> </dl>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|ResourcePath|object|false|none|none|
|FailureThreshold|object|false|none|none|

<h2 id="tocS_HealthCheckCustomConfig">HealthCheckCustomConfig</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckcustomconfig"></a>
<a id="schema_HealthCheckCustomConfig"></a>
<a id="tocShealthcheckcustomconfig"></a>
<a id="tocshealthcheckcustomconfig"></a>

```json
{
  "FailureThreshold": {}
}
```

<p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that's defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are located.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that's associated with the new instance. </p> <note> <p>Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>Cloud Map waits for 30 seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, Cloud Map stops routing traffic to the resource.</p> </li> </ol>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureThreshold|object|false|none|none|

<h2 id="tocS_ServiceTypeOption">ServiceTypeOption</h2>
<!-- backwards compatibility -->
<a id="schemaservicetypeoption"></a>
<a id="schema_ServiceTypeOption"></a>
<a id="tocSservicetypeoption"></a>
<a id="tocsservicetypeoption"></a>

```json
"HTTP"
```

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "NamespaceId": {},
  "Description": {},
  "InstanceCount": {},
  "DnsConfig": {
    "NamespaceId": {},
    "RoutingPolicy": {},
    "DnsRecords": {}
  },
  "Type": {},
  "HealthCheckConfig": {
    "Type": {},
    "ResourcePath": {},
    "FailureThreshold": {}
  },
  "HealthCheckCustomConfig": {
    "FailureThreshold": {}
  },
  "CreateDate": {},
  "CreatorRequestId": {}
}
```

A complex type that contains information about the specified service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|NamespaceId|object|false|none|none|
|Description|object|false|none|none|
|InstanceCount|object|false|none|none|
|DnsConfig|object|false|none|none|
|Type|object|false|none|none|
|HealthCheckConfig|object|false|none|none|
|HealthCheckCustomConfig|object|false|none|none|
|CreateDate|object|false|none|none|
|CreatorRequestId|object|false|none|none|

<h2 id="tocS_CustomHealthStatus">CustomHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemacustomhealthstatus"></a>
<a id="schema_CustomHealthStatus"></a>
<a id="tocScustomhealthstatus"></a>
<a id="tocscustomhealthstatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_NamespaceName">NamespaceName</h2>
<!-- backwards compatibility -->
<a id="schemanamespacename"></a>
<a id="schema_NamespaceName"></a>
<a id="tocSnamespacename"></a>
<a id="tocsnamespacename"></a>

```json
"string"
```

<h2 id="tocS_DiscoverMaxResults">DiscoverMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadiscovermaxresults"></a>
<a id="schema_DiscoverMaxResults"></a>
<a id="tocSdiscovermaxresults"></a>
<a id="tocsdiscovermaxresults"></a>

```json
1
```

<h2 id="tocS_HealthStatusFilter">HealthStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatusfilter"></a>
<a id="schema_HealthStatusFilter"></a>
<a id="tocShealthstatusfilter"></a>
<a id="tocshealthstatusfilter"></a>

```json
"HEALTHY"
```

<h2 id="tocS_HttpInstanceSummaryList">HttpInstanceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemahttpinstancesummarylist"></a>
<a id="schema_HttpInstanceSummaryList"></a>
<a id="tocShttpinstancesummarylist"></a>
<a id="tocshttpinstancesummarylist"></a>

```json
[
  {
    "InstanceId": {},
    "NamespaceName": {},
    "ServiceName": {},
    "HealthStatus": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_RoutingPolicy">RoutingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaroutingpolicy"></a>
<a id="schema_RoutingPolicy"></a>
<a id="tocSroutingpolicy"></a>
<a id="tocsroutingpolicy"></a>

```json
"MULTIVALUE"
```

<h2 id="tocS_DnsRecordList">DnsRecordList</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordlist"></a>
<a id="schema_DnsRecordList"></a>
<a id="tocSdnsrecordlist"></a>
<a id="tocsdnsrecordlist"></a>

```json
[
  {
    "Type": {},
    "TTL": {}
  }
]
```

<h2 id="tocS_DnsConfigChange">DnsConfigChange</h2>
<!-- backwards compatibility -->
<a id="schemadnsconfigchange"></a>
<a id="schema_DnsConfigChange"></a>
<a id="tocSdnsconfigchange"></a>
<a id="tocsdnsconfigchange"></a>

```json
{
  "DnsRecords": {}
}
```

A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DnsRecords|object|true|none|none|

<h2 id="tocS_SOA">SOA</h2>
<!-- backwards compatibility -->
<a id="schemasoa"></a>
<a id="schema_SOA"></a>
<a id="tocSsoa"></a>
<a id="tocssoa"></a>

```json
{
  "TTL": {}
}
```

Start of Authority (SOA) properties for a public or private DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TTL|object|true|none|none|

<h2 id="tocS_DnsProperties">DnsProperties</h2>
<!-- backwards compatibility -->
<a id="schemadnsproperties"></a>
<a id="schema_DnsProperties"></a>
<a id="tocSdnsproperties"></a>
<a id="tocsdnsproperties"></a>

```json
{
  "HostedZoneId": {},
  "SOA": {
    "TTL": {}
  }
}
```

A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneId|object|false|none|none|
|SOA|object|false|none|none|

<h2 id="tocS_RecordType">RecordType</h2>
<!-- backwards compatibility -->
<a id="schemarecordtype"></a>
<a id="schema_RecordType"></a>
<a id="tocSrecordtype"></a>
<a id="tocsrecordtype"></a>

```json
"SRV"
```

<h2 id="tocS_RecordTTL">RecordTTL</h2>
<!-- backwards compatibility -->
<a id="schemarecordttl"></a>
<a id="schema_RecordTTL"></a>
<a id="tocSrecordttl"></a>
<a id="tocsrecordttl"></a>

```json
0
```

<h2 id="tocS_DnsRecord">DnsRecord</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecord"></a>
<a id="schema_DnsRecord"></a>
<a id="tocSdnsrecord"></a>
<a id="tocsdnsrecord"></a>

```json
{
  "Type": {},
  "TTL": {}
}
```

A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|TTL|object|true|none|none|

<h2 id="tocS_FailureThreshold">FailureThreshold</h2>
<!-- backwards compatibility -->
<a id="schemafailurethreshold"></a>
<a id="schema_FailureThreshold"></a>
<a id="tocSfailurethreshold"></a>
<a id="tocsfailurethreshold"></a>

```json
1
```

<h2 id="tocS_FilterCondition">FilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemafiltercondition"></a>
<a id="schema_FilterCondition"></a>
<a id="tocSfiltercondition"></a>
<a id="tocsfiltercondition"></a>

```json
"EQ"
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

<h2 id="tocS_FilterValues">FilterValues</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalues"></a>
<a id="schema_FilterValues"></a>
<a id="tocSfiltervalues"></a>
<a id="tocsfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "Id": {},
  "CreatorRequestId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

A complex type that contains information about an instance that Cloud Map creates when you submit a <code>RegisterInstance</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|CreatorRequestId|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_InstanceIdList">InstanceIdList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceidlist"></a>
<a id="schema_InstanceIdList"></a>
<a id="tocSinstanceidlist"></a>
<a id="tocsinstanceidlist"></a>

```json
[
  "string"
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_InstanceHealthStatusMap">InstanceHealthStatusMap</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthstatusmap"></a>
<a id="schema_InstanceHealthStatusMap"></a>
<a id="tocSinstancehealthstatusmap"></a>
<a id="tocsinstancehealthstatusmap"></a>

```json
{
  "property1": "HEALTHY",
  "property2": "HEALTHY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[HealthStatus](#schemahealthstatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|**additionalProperties**|HEALTHY|
|**additionalProperties**|UNHEALTHY|
|**additionalProperties**|UNKNOWN|

<h2 id="tocS_Namespace">Namespace</h2>
<!-- backwards compatibility -->
<a id="schemanamespace"></a>
<a id="schema_Namespace"></a>
<a id="tocSnamespace"></a>
<a id="tocsnamespace"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "ServiceCount": {},
  "Properties": {
    "DnsProperties": {
      "HostedZoneId": {},
      "SOA": {
        "TTL": {}
      }
    },
    "HttpProperties": {
      "HttpName": {}
    }
  },
  "CreateDate": {},
  "CreatorRequestId": {}
}
```

A complex type that contains information about a specified namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|ServiceCount|object|false|none|none|
|Properties|object|false|none|none|
|CreateDate|object|false|none|none|
|CreatorRequestId|object|false|none|none|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "Id": {},
  "Type": {},
  "Status": {},
  "ErrorMessage": {},
  "ErrorCode": {},
  "CreateDate": {},
  "UpdateDate": {},
  "Targets": {
    "property1": "string",
    "property2": "string"
  }
}
```

A complex type that contains information about a specified operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|
|Status|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ErrorCode|object|false|none|none|
|CreateDate|object|false|none|none|
|UpdateDate|object|false|none|none|
|Targets|object|false|none|none|

<h2 id="tocS_HealthCheckType">HealthCheckType</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecktype"></a>
<a id="schema_HealthCheckType"></a>
<a id="tocShealthchecktype"></a>
<a id="tocshealthchecktype"></a>

```json
"HTTP"
```

<h2 id="tocS_ResourcePath">ResourcePath</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepath"></a>
<a id="schema_ResourcePath"></a>
<a id="tocSresourcepath"></a>
<a id="tocsresourcepath"></a>

```json
"string"
```

<h2 id="tocS_HealthStatus">HealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_HealthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_HttpInstanceSummary">HttpInstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemahttpinstancesummary"></a>
<a id="schema_HttpInstanceSummary"></a>
<a id="tocShttpinstancesummary"></a>
<a id="tocshttpinstancesummary"></a>

```json
{
  "InstanceId": {},
  "NamespaceName": {},
  "ServiceName": {},
  "HealthStatus": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|NamespaceName|object|false|none|none|
|ServiceName|object|false|none|none|
|HealthStatus|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_HttpNamespaceChange">HttpNamespaceChange</h2>
<!-- backwards compatibility -->
<a id="schemahttpnamespacechange"></a>
<a id="schema_HttpNamespaceChange"></a>
<a id="tocShttpnamespacechange"></a>
<a id="tocshttpnamespacechange"></a>

```json
{
  "Description": {}
}
```

Updated properties for the HTTP namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|true|none|none|

<h2 id="tocS_HttpProperties">HttpProperties</h2>
<!-- backwards compatibility -->
<a id="schemahttpproperties"></a>
<a id="schema_HttpProperties"></a>
<a id="tocShttpproperties"></a>
<a id="tocshttpproperties"></a>

```json
{
  "HttpName": {}
}
```

A complex type that contains the name of an HTTP namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpName|object|false|none|none|

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_InstanceSummary">InstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemainstancesummary"></a>
<a id="schema_InstanceSummary"></a>
<a id="tocSinstancesummary"></a>
<a id="tocsinstancesummary"></a>

```json
{
  "Id": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

A complex type that contains information about the instances that you registered by using a specified service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_InstanceSummaryList">InstanceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemainstancesummarylist"></a>
<a id="schema_InstanceSummaryList"></a>
<a id="tocSinstancesummarylist"></a>
<a id="tocsinstancesummarylist"></a>

```json
[
  {
    "Id": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_NamespaceFilters">NamespaceFilters</h2>
<!-- backwards compatibility -->
<a id="schemanamespacefilters"></a>
<a id="schema_NamespaceFilters"></a>
<a id="tocSnamespacefilters"></a>
<a id="tocsnamespacefilters"></a>

```json
[
  {
    "Name": {},
    "Values": {},
    "Condition": {}
  }
]
```

<h2 id="tocS_NamespaceSummariesList">NamespaceSummariesList</h2>
<!-- backwards compatibility -->
<a id="schemanamespacesummarieslist"></a>
<a id="schema_NamespaceSummariesList"></a>
<a id="tocSnamespacesummarieslist"></a>
<a id="tocsnamespacesummarieslist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Type": {},
    "Description": {},
    "ServiceCount": {},
    "Properties": {
      "DnsProperties": {
        "HostedZoneId": {},
        "SOA": {
          "TTL": {}
        }
      },
      "HttpProperties": {
        "HttpName": {}
      }
    },
    "CreateDate": {}
  }
]
```

<h2 id="tocS_OperationFilters">OperationFilters</h2>
<!-- backwards compatibility -->
<a id="schemaoperationfilters"></a>
<a id="schema_OperationFilters"></a>
<a id="tocSoperationfilters"></a>
<a id="tocsoperationfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {},
    "Condition": {}
  }
]
```

<h2 id="tocS_OperationSummaryList">OperationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsummarylist"></a>
<a id="schema_OperationSummaryList"></a>
<a id="tocSoperationsummarylist"></a>
<a id="tocsoperationsummarylist"></a>

```json
[
  {
    "Id": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ServiceFilters">ServiceFilters</h2>
<!-- backwards compatibility -->
<a id="schemaservicefilters"></a>
<a id="schema_ServiceFilters"></a>
<a id="tocSservicefilters"></a>
<a id="tocsservicefilters"></a>

```json
[
  {
    "Name": {},
    "Values": {},
    "Condition": {}
  }
]
```

<h2 id="tocS_ServiceSummariesList">ServiceSummariesList</h2>
<!-- backwards compatibility -->
<a id="schemaservicesummarieslist"></a>
<a id="schema_ServiceSummariesList"></a>
<a id="tocSservicesummarieslist"></a>
<a id="tocsservicesummarieslist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Type": {},
    "Description": {},
    "InstanceCount": {},
    "DnsConfig": {
      "NamespaceId": {},
      "RoutingPolicy": {},
      "DnsRecords": {}
    },
    "HealthCheckConfig": {
      "Type": {},
      "ResourcePath": {},
      "FailureThreshold": {}
    },
    "HealthCheckCustomConfig": {
      "FailureThreshold": {}
    },
    "CreateDate": {}
  }
]
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_NamespaceType">NamespaceType</h2>
<!-- backwards compatibility -->
<a id="schemanamespacetype"></a>
<a id="schema_NamespaceType"></a>
<a id="tocSnamespacetype"></a>
<a id="tocsnamespacetype"></a>

```json
"DNS_PUBLIC"
```

<h2 id="tocS_ResourceCount">ResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecount"></a>
<a id="schema_ResourceCount"></a>
<a id="tocSresourcecount"></a>
<a id="tocsresourcecount"></a>

```json
0
```

<h2 id="tocS_NamespaceProperties">NamespaceProperties</h2>
<!-- backwards compatibility -->
<a id="schemanamespaceproperties"></a>
<a id="schema_NamespaceProperties"></a>
<a id="tocSnamespaceproperties"></a>
<a id="tocsnamespaceproperties"></a>

```json
{
  "DnsProperties": {
    "HostedZoneId": {},
    "SOA": {
      "TTL": {}
    }
  },
  "HttpProperties": {
    "HttpName": {}
  }
}
```

A complex type that contains information that's specific to the namespace type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DnsProperties|object|false|none|none|
|HttpProperties|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_NamespaceFilterName">NamespaceFilterName</h2>
<!-- backwards compatibility -->
<a id="schemanamespacefiltername"></a>
<a id="schema_NamespaceFilterName"></a>
<a id="tocSnamespacefiltername"></a>
<a id="tocsnamespacefiltername"></a>

```json
"TYPE"
```

<h2 id="tocS_NamespaceFilter">NamespaceFilter</h2>
<!-- backwards compatibility -->
<a id="schemanamespacefilter"></a>
<a id="schema_NamespaceFilter"></a>
<a id="tocSnamespacefilter"></a>
<a id="tocsnamespacefilter"></a>

```json
{
  "Name": {},
  "Values": {},
  "Condition": {}
}
```

A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|
|Condition|object|false|none|none|

<h2 id="tocS_NamespaceSummary">NamespaceSummary</h2>
<!-- backwards compatibility -->
<a id="schemanamespacesummary"></a>
<a id="schema_NamespaceSummary"></a>
<a id="tocSnamespacesummary"></a>
<a id="tocsnamespacesummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "ServiceCount": {},
  "Properties": {
    "DnsProperties": {
      "HostedZoneId": {},
      "SOA": {
        "TTL": {}
      }
    },
    "HttpProperties": {
      "HttpName": {}
    }
  },
  "CreateDate": {}
}
```

A complex type that contains information about a namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|ServiceCount|object|false|none|none|
|Properties|object|false|none|none|
|CreateDate|object|false|none|none|

<h2 id="tocS_OperationType">OperationType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtype"></a>
<a id="schema_OperationType"></a>
<a id="tocSoperationtype"></a>
<a id="tocsoperationtype"></a>

```json
"CREATE_NAMESPACE"
```

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_OperationTargetsMap">OperationTargetsMap</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtargetsmap"></a>
<a id="schema_OperationTargetsMap"></a>
<a id="tocSoperationtargetsmap"></a>
<a id="tocsoperationtargetsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ResourceId](#schemaresourceid)|false|none|none|

<h2 id="tocS_OperationFilterName">OperationFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaoperationfiltername"></a>
<a id="schema_OperationFilterName"></a>
<a id="tocSoperationfiltername"></a>
<a id="tocsoperationfiltername"></a>

```json
"NAMESPACE_ID"
```

<h2 id="tocS_OperationFilter">OperationFilter</h2>
<!-- backwards compatibility -->
<a id="schemaoperationfilter"></a>
<a id="schema_OperationFilter"></a>
<a id="tocSoperationfilter"></a>
<a id="tocsoperationfilter"></a>

```json
{
  "Name": {},
  "Values": {},
  "Condition": {}
}
```

A complex type that lets you select the operations that you want to list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|
|Condition|object|false|none|none|

<h2 id="tocS_OperationSummary">OperationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsummary"></a>
<a id="schema_OperationSummary"></a>
<a id="tocSoperationsummary"></a>
<a id="tocsoperationsummary"></a>

```json
{
  "Id": {},
  "Status": {}
}
```

A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_OperationTargetType">OperationTargetType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtargettype"></a>
<a id="schema_OperationTargetType"></a>
<a id="tocSoperationtargettype"></a>
<a id="tocsoperationtargettype"></a>

```json
"NAMESPACE"
```

<h2 id="tocS_PrivateDnsNamespacePropertiesChange">PrivateDnsNamespacePropertiesChange</h2>
<!-- backwards compatibility -->
<a id="schemaprivatednsnamespacepropertieschange"></a>
<a id="schema_PrivateDnsNamespacePropertiesChange"></a>
<a id="tocSprivatednsnamespacepropertieschange"></a>
<a id="tocsprivatednsnamespacepropertieschange"></a>

```json
{
  "DnsProperties": {
    "SOA": {
      "TTL": {}
    }
  }
}
```

Updated properties for the private DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DnsProperties|object|true|none|none|

<h2 id="tocS_PrivateDnsNamespaceChange">PrivateDnsNamespaceChange</h2>
<!-- backwards compatibility -->
<a id="schemaprivatednsnamespacechange"></a>
<a id="schema_PrivateDnsNamespaceChange"></a>
<a id="tocSprivatednsnamespacechange"></a>
<a id="tocsprivatednsnamespacechange"></a>

```json
{
  "Description": {},
  "Properties": {
    "DnsProperties": {
      "SOA": {
        "TTL": {}
      }
    }
  }
}
```

Updated properties for the private DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Properties|object|false|none|none|

<h2 id="tocS_PrivateDnsPropertiesMutable">PrivateDnsPropertiesMutable</h2>
<!-- backwards compatibility -->
<a id="schemaprivatednspropertiesmutable"></a>
<a id="schema_PrivateDnsPropertiesMutable"></a>
<a id="tocSprivatednspropertiesmutable"></a>
<a id="tocsprivatednspropertiesmutable"></a>

```json
{
  "SOA": {
    "TTL": {}
  }
}
```

DNS properties for the private DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SOA|object|true|none|none|

<h2 id="tocS_PrivateDnsPropertiesMutableChange">PrivateDnsPropertiesMutableChange</h2>
<!-- backwards compatibility -->
<a id="schemaprivatednspropertiesmutablechange"></a>
<a id="schema_PrivateDnsPropertiesMutableChange"></a>
<a id="tocSprivatednspropertiesmutablechange"></a>
<a id="tocsprivatednspropertiesmutablechange"></a>

```json
{
  "SOA": {
    "TTL": {}
  }
}
```

Updated DNS properties for the private DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SOA|object|true|none|none|

<h2 id="tocS_SOAChange">SOAChange</h2>
<!-- backwards compatibility -->
<a id="schemasoachange"></a>
<a id="schema_SOAChange"></a>
<a id="tocSsoachange"></a>
<a id="tocssoachange"></a>

```json
{
  "TTL": {}
}
```

Updated Start of Authority (SOA) properties for a public or private DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TTL|object|true|none|none|

<h2 id="tocS_PublicDnsNamespacePropertiesChange">PublicDnsNamespacePropertiesChange</h2>
<!-- backwards compatibility -->
<a id="schemapublicdnsnamespacepropertieschange"></a>
<a id="schema_PublicDnsNamespacePropertiesChange"></a>
<a id="tocSpublicdnsnamespacepropertieschange"></a>
<a id="tocspublicdnsnamespacepropertieschange"></a>

```json
{
  "DnsProperties": {
    "SOA": {
      "TTL": {}
    }
  }
}
```

Updated properties for the public DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DnsProperties|object|true|none|none|

<h2 id="tocS_PublicDnsNamespaceChange">PublicDnsNamespaceChange</h2>
<!-- backwards compatibility -->
<a id="schemapublicdnsnamespacechange"></a>
<a id="schema_PublicDnsNamespaceChange"></a>
<a id="tocSpublicdnsnamespacechange"></a>
<a id="tocspublicdnsnamespacechange"></a>

```json
{
  "Description": {},
  "Properties": {
    "DnsProperties": {
      "SOA": {
        "TTL": {}
      }
    }
  }
}
```

Updated properties for the public DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Properties|object|false|none|none|

<h2 id="tocS_PublicDnsPropertiesMutable">PublicDnsPropertiesMutable</h2>
<!-- backwards compatibility -->
<a id="schemapublicdnspropertiesmutable"></a>
<a id="schema_PublicDnsPropertiesMutable"></a>
<a id="tocSpublicdnspropertiesmutable"></a>
<a id="tocspublicdnspropertiesmutable"></a>

```json
{
  "SOA": {
    "TTL": {}
  }
}
```

DNS properties for the public DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SOA|object|true|none|none|

<h2 id="tocS_PublicDnsPropertiesMutableChange">PublicDnsPropertiesMutableChange</h2>
<!-- backwards compatibility -->
<a id="schemapublicdnspropertiesmutablechange"></a>
<a id="schema_PublicDnsPropertiesMutableChange"></a>
<a id="tocSpublicdnspropertiesmutablechange"></a>
<a id="tocspublicdnspropertiesmutablechange"></a>

```json
{
  "SOA": {
    "TTL": {}
  }
}
```

Updated DNS properties for the public DNS namespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SOA|object|true|none|none|

<h2 id="tocS_ServiceType">ServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetype"></a>
<a id="schema_ServiceType"></a>
<a id="tocSservicetype"></a>
<a id="tocsservicetype"></a>

```json
"HTTP"
```

<h2 id="tocS_ServiceChange">ServiceChange</h2>
<!-- backwards compatibility -->
<a id="schemaservicechange"></a>
<a id="schema_ServiceChange"></a>
<a id="tocSservicechange"></a>
<a id="tocsservicechange"></a>

```json
{
  "Description": {},
  "DnsConfig": {
    "DnsRecords": {}
  },
  "HealthCheckConfig": {
    "Type": {},
    "ResourcePath": {},
    "FailureThreshold": {}
  }
}
```

A complex type that contains changes to an existing service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DnsConfig|object|false|none|none|
|HealthCheckConfig|object|false|none|none|

<h2 id="tocS_ServiceFilterName">ServiceFilterName</h2>
<!-- backwards compatibility -->
<a id="schemaservicefiltername"></a>
<a id="schema_ServiceFilterName"></a>
<a id="tocSservicefiltername"></a>
<a id="tocsservicefiltername"></a>

```json
"NAMESPACE_ID"
```

<h2 id="tocS_ServiceFilter">ServiceFilter</h2>
<!-- backwards compatibility -->
<a id="schemaservicefilter"></a>
<a id="schema_ServiceFilter"></a>
<a id="tocSservicefilter"></a>
<a id="tocsservicefilter"></a>

```json
{
  "Name": {},
  "Values": {},
  "Condition": {}
}
```

A complex type that lets you specify the namespaces that you want to list services for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|
|Condition|object|false|none|none|

<h2 id="tocS_ServiceSummary">ServiceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicesummary"></a>
<a id="schema_ServiceSummary"></a>
<a id="tocSservicesummary"></a>
<a id="tocsservicesummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "InstanceCount": {},
  "DnsConfig": {
    "NamespaceId": {},
    "RoutingPolicy": {},
    "DnsRecords": {}
  },
  "HealthCheckConfig": {
    "Type": {},
    "ResourcePath": {},
    "FailureThreshold": {}
  },
  "HealthCheckCustomConfig": {
    "FailureThreshold": {}
  },
  "CreateDate": {}
}
```

A complex type that contains information about a specified service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|InstanceCount|object|false|none|none|
|DnsConfig|object|false|none|none|
|HealthCheckConfig|object|false|none|none|
|HealthCheckCustomConfig|object|false|none|none|
|CreateDate|object|false|none|none|

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

A custom key-value pair that's associated with a resource.

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
